import type { Sql } from "@/lib/db";
import { decide } from "@/lib/policy-decision";

const normativeSql = [
  `insert into content_object (slug, kind, origin_path)
select 'norma/' || fundamento.id, 'norma', 'norma/' || fundamento.id
from fundamento
where not exists (
  select 1 from content_atom as atom where atom.fundamento_id = fundamento.id
)
  and fundamento.id !~* '(cfc|contabil|nbc)'
  and fundamento.name !~* '(contabil|contábil|\\mcfc\\M|nbc)'
  and not exists (
    select 1 from content_object as object where object.slug = 'norma/' || fundamento.id
  )
on conflict (slug) do nothing`,
  `insert into content_text (slug, locale, view, title, lead, body, status)
select object.slug, 'pt-BR', 'leitura', fundamento.name, 'Identificador extraído. A cláusula não entra.', '', 'rascunho'
from fundamento
join content_object as object on object.slug = 'norma/' || fundamento.id
where not exists (
  select 1 from content_text as text
  where text.slug = object.slug and text.locale = 'pt-BR' and text.view = 'leitura'
)
on conflict (slug, locale, view) do nothing`,
  `insert into content_atom (id, slug, origin, fundamento_id, statement, locator, status)
select
  'atom-extrai-' || fundamento.id,
  'norma/' || fundamento.id,
  'normativo',
  fundamento.id,
  'Identificador extraído pela política de acesso. A cláusula não entra.',
  'fundamento:' || fundamento.id,
  'candidato'
from fundamento
where exists (
  select 1 from content_object as object where object.slug = 'norma/' || fundamento.id
)
  and not exists (
    select 1 from content_atom as atom where atom.fundamento_id = fundamento.id
  )
on conflict (id) do nothing`,
];

const contentSql = [
  `insert into content_object (slug, kind, origin_path)
select 'modelo/' || template.id, 'editorial', 'modelo/' || template.id
from editorial_template as template
on conflict (slug) do nothing`,
  `insert into content_text (slug, locale, view, title, lead, body, status)
select 'modelo/' || template.id, 'pt-BR', 'leitura', template.name, template.description, '', 'rascunho'
from editorial_template as template
on conflict (slug, locale, view) do nothing`,
  `insert into content_atom (id, slug, origin, template_id, line_position, statement, locator, status)
select
  'atom-ed-' || line.template_id || '-' || line.position,
  'modelo/' || line.template_id,
  'editorial',
  line.template_id,
  line.position,
  line.text,
  'editorial_line:' || line.template_id || ':' || line.position,
  'candidato'
from editorial_line as line
on conflict (id) do nothing`,
];

export async function extractGoverned(
  sql: Sql,
  input: { action: "extrair_normativo" | "extrair_conteudo"; role: string; actorId: string },
) {
  const decision = await decide(sql, { ...input, trail: true });
  for (const statement of input.action === "extrair_normativo" ? normativeSql : contentSql) {
    await sql.query(statement);
  }
  return decision;
}
