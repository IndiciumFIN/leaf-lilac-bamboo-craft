import assert from "node:assert/strict";
import { readdir, readFile } from "node:fs/promises";
import test from "node:test";
import { PGlite } from "@electric-sql/pglite";
import type { Sql } from "./db.ts";
import { decide } from "./policy-decision.ts";

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

test("cada ação da política é testada e quem não administra não escreve", async () => {
  const db = new PGlite();
  const base = new URL("../../migrations/", import.meta.url);
  const names = (await readdir(base)).filter((name) => name.endsWith(".sql")).sort();
  for (const name of names) await db.exec(await readFile(new URL(name, base), "utf8"));
  const sql = asSql(db);
  const rules = await db.query<{ id: string; subject_role: string; action: string; effect: string }>(
    "select id, subject_role, action, effect from policy_rule where package_id = 'acesso' order by action, subject_role",
  );
  assert.ok(rules.rows.length >= 20);
  assert.equal(rules.rows.some((rule) => rule.subject_role !== "admin" && rule.effect === "allow"), false);
  const actions = [...new Set(rules.rows.map((rule) => rule.action))];
  for (const action of ["extrair_normativo", "extrair_conteudo", "validar_normativo", "integrar_mestre", "publicar_idioma"]) {
    assert.equal(actions.includes(action), true);
  }
  const roles = ["admin", "agente", "assinante"];
  for (const action of actions) {
    for (const role of roles) {
      const applicable = rules.rows.filter((rule) => rule.action === action && rule.subject_role === role);
      const expected = applicable.some((rule) => rule.effect === "deny")
        ? "deny"
        : applicable.some((rule) => rule.effect === "allow")
          ? "allow"
          : "deny";
      if (expected === "deny") {
        await assert.rejects(() => decide(sql, { action, role, actorId: `${role}-teste` }), /nega/);
      } else {
        const allowed = await decide(sql, { action, role, actorId: `${role}-teste` });
        assert.equal(allowed.effect, "allow");
        assert.equal(allowed.ruleId, applicable.find((rule) => rule.effect === "allow")?.id);
      }
    }
  }
  await assert.rejects(() => decide(sql, { action: "apagar_banco", role: "admin", actorId: "admin-teste" }), /nega/);
  await assert.rejects(
    () => decide(sql, { action: "integrar_mestre", role: "agente", actorId: "agente-rastro", trail: true }),
    /nega/,
  );
  const trail = await db.query<{ outcome: string }>(
    "select outcome from activity_event where actor_id = 'agente-rastro'",
  );
  assert.deepEqual(trail.rows.map((row) => row.outcome), ["negado"]);
  await assert.rejects(db.exec("update activity_event set note = 'apagado'"), /não se altera/);
});
