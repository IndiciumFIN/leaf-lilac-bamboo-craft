-- Extrair normativo e conteúdo é política, não um atalho.
-- O administrador pode. Agente e assinante não podem.
-- O trecho nasce candidato. A cláusula não entra. O texto publicado não muda.

insert into governance_item (id, kind, title, body)
values (
  'politica-extracao',
  'politica',
  'Documento interno da extração',
  'Este texto é nosso. Extrair normativo grava o identificador que já existe e não a cláusula. Extrair conteúdo grava a linha editorial que já é nossa. Os dois nascem candidato. Quem não é administrador não extrai. Publicar continua outra ação.'
)
on conflict (id) do nothing;

insert into policy_rule (package_id, id, subject_role, action, effect, reason)
values
  ('acesso', 'admin-extrai-normativo', 'admin', 'extrair_normativo', 'allow', 'O administrador extrai o identificador normativo. A cláusula não entra.'),
  ('acesso', 'admin-extrai-conteudo', 'admin', 'extrair_conteudo', 'allow', 'O administrador extrai a linha editorial que já é nossa.'),
  ('acesso', 'agente-nao-extrai-normativo', 'agente', 'extrair_normativo', 'deny', 'Agente não extrai normativo.'),
  ('acesso', 'agente-nao-extrai-conteudo', 'agente', 'extrair_conteudo', 'deny', 'Agente não extrai conteúdo.'),
  ('acesso', 'assinante-nao-extrai-normativo', 'assinante', 'extrair_normativo', 'deny', 'Assinante não extrai normativo.'),
  ('acesso', 'assinante-nao-extrai-conteudo', 'assinante', 'extrair_conteudo', 'deny', 'Assinante não extrai conteúdo.')
on conflict (package_id, id) do nothing;

insert into content_object (slug, kind, origin_path)
select 'norma/' || fundamento.id, 'norma', 'norma/' || fundamento.id
from fundamento
where not exists (
  select 1 from content_atom as atom where atom.fundamento_id = fundamento.id
)
  and fundamento.id !~* '(cfc|contabil|nbc)'
  and fundamento.name !~* '(contabil|contábil|\mcfc\M|nbc)'
  and not exists (
    select 1 from content_object as object where object.slug = 'norma/' || fundamento.id
  )
on conflict (slug) do nothing;

insert into content_text (slug, locale, view, title, lead, body, status)
select object.slug, 'pt-BR', 'leitura', fundamento.name, 'Identificador extraído. A cláusula não entra.', '', 'rascunho'
from fundamento
join content_object as object on object.slug = 'norma/' || fundamento.id
where not exists (
  select 1 from content_text as text
  where text.slug = object.slug and text.locale = 'pt-BR' and text.view = 'leitura'
)
on conflict (slug, locale, view) do nothing;

insert into content_atom (id, slug, origin, fundamento_id, statement, locator, status)
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
on conflict (id) do nothing;

insert into content_object (slug, kind, origin_path)
select 'modelo/' || template.id, 'editorial', 'modelo/' || template.id
from editorial_template as template
on conflict (slug) do nothing;

insert into content_text (slug, locale, view, title, lead, body, status)
select 'modelo/' || template.id, 'pt-BR', 'leitura', template.name, template.description, '', 'rascunho'
from editorial_template as template
on conflict (slug, locale, view) do nothing;

insert into content_atom (id, slug, origin, template_id, line_position, statement, locator, status)
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
on conflict (id) do nothing;
