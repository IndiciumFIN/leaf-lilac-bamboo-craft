import assert from "node:assert/strict";
import { readdir, readFile } from "node:fs/promises";
import test from "node:test";
import { PGlite } from "@electric-sql/pglite";
import type { Sql } from "./db.ts";
import { validateNormative } from "./normative-validation.ts";
import { auditPlatformConclusion } from "../core/compliance/platform-conclusion.ts";

function asSql(db: PGlite): Sql {
  const sql = (async (strings: TemplateStringsArray, ...values: unknown[]) => {
    let text = strings[0];
    for (let i = 0; i < values.length; i += 1) text += `$${i + 1}${strings[i + 1]}`;
    const result = await db.query(text, values);
    return result.rows;
  }) as Sql;
  sql.query = async <T = Record<string, unknown>>(text: string, params: unknown[] = []) => (await db.query(text, params)).rows as T[];
  return sql;
}

test("a validação normativa conta a leitura, grava o rastro e não admite", async () => {
  const db = new PGlite();
  const base = new URL("../../migrations/", import.meta.url);
  const names = (await readdir(base)).filter((name) => name.endsWith(".sql")).sort();
  for (const name of names) await db.exec(await readFile(new URL(name, base), "utf8"));
  const sql = asSql(db);
  await db.exec(`
    insert into "user" (id, name, email, "emailVerified") values
      ('admin-1', 'Admin', 'admin-1@teste.local', true),
      ('agent-ui', 'Agente', 'agent-ui@teste.local', true);
    insert into access_grant (user_id, role) values
      ('admin-1', 'admin'),
      ('agent-ui', 'agente');
  `);
  const revocations = await db.query<{ id: string; reading: string }>(
    "select id, reading from normative_revocation order by id",
  );
  assert.deepEqual(
    revocations.rows.map((row) => row.id),
    ["REV-COFEN-358-736", "REV-COFEN-429-754", "REV-COFEN-543-743"],
  );
  assert.equal(revocations.rows.every((row) => row.reading === "EM_ANALISE"), true);

  await assert.rejects(
    () => validateNormative(sql, { role: "agente", actorId: "agent-ui" }),
    /nega/,
  );
  const denied = await db.query<{ outcome: string }>(`
    select outcome from activity_event where actor_id = 'agent-ui' and action = 'validar_normativo'
  `);
  assert.deepEqual(denied.rows.map((row) => row.outcome), ["negado"]);

  const before = await db.query<{ reading: string; status: string }>(`
    select link.reading, atom.status
    from normative_link as link
    join content_atom as atom on atom.id = link.rule_id
    order by link.id
  `);
  const report = await validateNormative(sql, { role: "admin", actorId: "admin-1" });
  assert.equal(report.ruleId, "admin-valida-normativo");
  assert.equal(report.promoted, 0);
  assert.ok(report.emAnalise + report.naoConforme > 0);
  assert.equal(report.conforme + report.emAnalise + report.naoConforme, before.rows.length);

  const after = await db.query<{ reading: string; status: string }>(`
    select link.reading, atom.status
    from normative_link as link
    join content_atom as atom on atom.id = link.rule_id
    order by link.id
  `);
  assert.deepEqual(after.rows, before.rows);
  const trail = await db.query<{ note: string }>(`
    select note from activity_event
    where decision_id = $1 and subject = 'leitura'
  `, [report.decisionId]);
  assert.match(trail.rows[0]?.note ?? "", /opa=nao_executado/);
  await assert.rejects(db.exec("delete from activity_event"), /não se altera/);
  const orders = await db.query<{ n: number }>("select count(*)::int as n from kernel_order");
  assert.equal(orders.rows[0]?.n ?? 0, 0);
  assert.equal((await auditPlatformConclusion()).concluded, false);
});
