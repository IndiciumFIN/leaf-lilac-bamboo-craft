import assert from "node:assert/strict";
import { readdir, readFile } from "node:fs/promises";
import test from "node:test";
import { PGlite } from "@electric-sql/pglite";
import type { Sql } from "./db.ts";
import { extractGoverned } from "./extract-governed.ts";
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

test("a política deixa o administrador extrair e nega o agente", async () => {
  const db = new PGlite();
  const base = new URL("../../migrations/", import.meta.url);
  const names = (await readdir(base)).filter((name) => name.endsWith(".sql")).sort();
  for (const name of names) await db.exec(await readFile(new URL(name, base), "utf8"));
  const sql = asSql(db);

  const missingNorm = await db.query<{ n: number }>(`
    select count(*)::int as n from fundamento
    where not exists (select 1 from content_atom as atom where atom.fundamento_id = fundamento.id)
      and fundamento.id !~* '(cfc|contabil|nbc)'
      and fundamento.name !~* '(contabil|contábil|\\mcfc\\M|nbc)'
  `);
  assert.equal(missingNorm.rows[0]?.n, 0);
  const missingLine = await db.query<{ n: number }>(`
    select count(*)::int as n from editorial_line as line
    where not exists (
      select 1 from content_atom as atom
      where atom.template_id = line.template_id and atom.line_position = line.position
    )
  `);
  assert.equal(missingLine.rows[0]?.n, 0);
  const open = await db.query<{ slug: string }>(`
    select slug from content_object
    where kind = 'norma' and not exists (select 1 from content_atom as atom where atom.slug = content_object.slug)
    order by slug
  `);
  assert.deepEqual(open.rows.map((row) => row.slug), [
    "biblioteca/2017-conselho-federal-de-enfermagem-codigo-de-etica-dos-profissionais-de-enfermagem",
    "biblioteca/codigo-de-etica-dos-profissionais-de-enfermagem-cofen",
    "biblioteca/resolucao-cofen-decada-de-80",
    "biblioteca/resolucao-cofen-decada-de-80-2",
  ]);

  await assert.rejects(
    () => extractGoverned(sql, { action: "extrair_normativo", role: "agente", actorId: "agent-ui" }),
    /nega/,
  );
  await assert.rejects(
    () => extractGoverned(sql, { action: "extrair_conteudo", role: "assinante", actorId: "assinante-1" }),
    /nega/,
  );

  await db.exec(`
    insert into fundamento (id, name, domain, right_name, priority, support_id)
    values ('CITE-TESTE-EXTRACAO', 'Teste de extração', 'citado', 'citado na ficha', 'candidato', 'politica-extracao')
  `);
  const allowed = await extractGoverned(sql, { action: "extrair_normativo", role: "admin", actorId: "admin-1" });
  assert.equal(allowed.effect, "allow");
  assert.equal(allowed.ruleId, "admin-extrai-normativo");
  const created = await db.query<{ status: string; body: string }>(`
    select atom.status, text.body
    from content_atom as atom
    join content_text as text on text.slug = atom.slug
    where atom.fundamento_id = 'CITE-TESTE-EXTRACAO'
  `);
  assert.equal(created.rows[0]?.status, "candidato");
  assert.equal(created.rows[0]?.body, "");

  await db.exec(`
    insert into fundamento (id, name, domain, right_name, priority, support_id)
    values ('CFC-NAO-ENTRA', 'Norma contábil CFC', 'contabil', 'fora', 'candidato', 'politica-extracao')
  `);
  await extractGoverned(sql, { action: "extrair_normativo", role: "admin", actorId: "admin-1" });
  const accounting = await db.query<{ n: number }>("select count(*)::int as n from content_atom where fundamento_id = 'CFC-NAO-ENTRA'");
  assert.equal(accounting.rows[0]?.n, 0);

  await db.exec(`
    insert into editorial_template (id, position, type, name, category, description)
    values ('tpl-extracao', 900, 'nota', 'Nota de extração', 'teste', 'Linha nossa.')
  `);
  await db.exec(`
    insert into editorial_line (template_id, position, path, text)
    values ('tpl-extracao', 1, 'teste', 'Texto nosso da linha.')
  `);
  const content = await extractGoverned(sql, { action: "extrair_conteudo", role: "admin", actorId: "admin-1" });
  assert.equal(content.ruleId, "admin-extrai-conteudo");
  const line = await db.query<{ statement: string; status: string }>(`
    select statement, status from content_atom
    where template_id = 'tpl-extracao' and line_position = 1
  `);
  assert.equal(line.rows[0]?.statement, "Texto nosso da linha.");
  assert.equal(line.rows[0]?.status, "candidato");
  const admitted = await db.query<{ n: number }>("select count(*)::int as n from content_atom where status = 'admitido'");
  assert.equal(admitted.rows[0]?.n, 0);
  assert.equal((await auditPlatformConclusion()).concluded, false);
});
