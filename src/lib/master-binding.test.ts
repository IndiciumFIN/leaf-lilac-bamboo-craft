import assert from "node:assert/strict";
import { readdir, readFile } from "node:fs/promises";
import test from "node:test";
import { PGlite } from "@electric-sql/pglite";
import type { Sql } from "./db.ts";
import { bindMaster, opaPresent } from "./master-binding.ts";
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

test("o mestre abre pedido em espera e o OPA não admite", async () => {
  const db = new PGlite();
  const base = new URL("../../migrations/", import.meta.url);
  const names = (await readdir(base)).filter((name) => name.endsWith(".sql")).sort();
  for (const name of names) await db.exec(await readFile(new URL(name, base), "utf8"));
  const sql = asSql(db);
  assert.equal(typeof (await opaPresent()), "boolean");

  await db.exec(`
    insert into "user" (id, name, email, "emailVerified", "createdAt", "updatedAt")
    values ('admin-1', 'Admin', 'admin@example.com', true, now(), now())
  `);
  await db.exec(`
    insert into fundamento (id, name, domain, right_name, priority, support_id) values
      ('CITE-MESTRE-1', 'Fonte mestre de prova', 'citado', 'citado', 'candidato', 'politica-integracao-mestre'),
      ('CFC-MESTRE', 'Norma contábil CFC', 'contabil', 'fora', 'candidato', 'politica-integracao-mestre')
  `);

  await assert.rejects(() => bindMaster(sql, { fundamentoId: "CITE-MESTRE-1", role: "agente", actorId: "agent-ui", opa: async () => true }), /nega/);
  const accounting = await bindMaster(sql, { fundamentoId: "CFC-MESTRE", role: "admin", actorId: "admin-1", opa: async () => true });
  assert.equal(accounting.bound, false);
  const missing = await bindMaster(sql, { fundamentoId: "NAO-EXISTE", role: "admin", actorId: "admin-1", opa: async () => true });
  assert.equal(missing.bound, false);

  const bound = await bindMaster(sql, { fundamentoId: "CITE-MESTRE-1", role: "admin", actorId: "admin-1", opa: async () => true });
  assert.equal(bound.bound, true);
  assert.equal(bound.status, "em_espera");
  assert.equal(bound.opa, "presente");
  const again = await bindMaster(sql, { fundamentoId: "CITE-MESTRE-1", role: "admin", actorId: "admin-1", opa: async () => false });
  assert.equal(again.orderId, bound.orderId);

  const row = await db.query<{ status: string; passed: boolean; manifest: string; approved_by: string | null; owner_id: string }>(`
    select orders.status, validator.passed, manifest.status as manifest, manifest.approved_by, orders.owner_id
    from kernel_order as orders
    join kernel_validator as validator on validator.order_id = orders.id
    join kernel_manifest as manifest on manifest.order_id = orders.id
    where orders.id = $1
  `, [bound.orderId]);
  assert.equal(row.rows[0]?.status, "em_espera");
  assert.equal(row.rows[0]?.passed, false);
  assert.equal(row.rows[0]?.manifest, "rascunho");
  assert.equal(row.rows[0]?.approved_by, null);
  assert.equal(row.rows[0]?.owner_id, "admin-1");
  const admitted = await db.query<{ n: number }>("select count(*)::int as n from kernel_order where status = 'admitida'");
  assert.equal(admitted.rows[0]?.n, 0);
  const trail = await db.query<{ n: number }>(
    "select count(*)::int as n from activity_event where subject = 'CITE-MESTRE-1' and note like '%admitido=nao%'",
  );
  assert.equal(trail.rows[0]?.n, 1);
  assert.equal((await auditPlatformConclusion()).concluded, false);
});
