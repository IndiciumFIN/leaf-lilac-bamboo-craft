import assert from "node:assert/strict";
import { readdir, readFile } from "node:fs/promises";
import test from "node:test";
import { PGlite } from "@electric-sql/pglite";
import { dictionaryGaps } from "./dictionary-sync.ts";

test("a decisão só aponta para a regra do mesmo pacote", async () => {
  const db = new PGlite();
  const base = new URL("../../migrations/", import.meta.url);
  const names = (await readdir(base)).filter((name) => name.endsWith(".sql")).sort();
  for (const name of names) await db.exec(await readFile(new URL(name, base), "utf8"));
  const gaps = await dictionaryGaps(db);
  assert.deepEqual(gaps.missing, []);
  assert.deepEqual(gaps.invented, []);
  await db.exec(`
    insert into policy_package (id, title, status) values ('pacote-prova', 'Prova', 'ativo');
    insert into policy_rule (package_id, id, subject_role, action, effect, reason)
    values ('pacote-prova', 'regra-prova', 'admin', 'provar', 'allow', 'Prova.');
  `);
  await assert.rejects(
    db.exec(`
      insert into policy_decision (id, package_id, rule_id, action, subject_role, effect, actor_id)
      values ('dec-prova', 'acesso', 'regra-prova', 'provar', 'admin', 'allow', 'admin-1')
    `),
    /policy_decision_rule_fkey/,
  );
  await db.exec(`
    insert into policy_decision (id, package_id, rule_id, action, subject_role, effect, actor_id)
    values ('dec-prova', 'pacote-prova', 'regra-prova', 'provar', 'admin', 'allow', 'admin-1')
  `);
  const kept = await db.query<{ n: number }>("select count(*)::int as n from policy_decision where id = 'dec-prova'");
  assert.equal(kept.rows[0]?.n, 1);
});
