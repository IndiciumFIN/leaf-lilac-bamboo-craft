set search_path to tap, public;

select plan(7);

insert into policy_package (id, title, status) values
  ('pgtap-pacote-a', 'Pacote A', 'rascunho'),
  ('pgtap-pacote-b', 'Pacote B', 'rascunho');

insert into policy_rule (package_id, id, subject_role, action, effect, reason)
values ('pgtap-pacote-a', 'regra', 'agente', 'extrair', 'deny', 'teste');

select throws_ok(
  $sql$
    insert into policy_decision (id, package_id, rule_id, action, subject_role, effect, actor_id)
    values ('pgtap-decisao', 'pgtap-pacote-b', 'regra', 'extrair', 'agente', 'deny', 'teste')
  $sql$,
  23503,
  'insert or update on table "policy_decision" violates foreign key constraint "policy_decision_rule_fkey"',
  'regra de outro pacote não entra'
);

select policies_are(
  'public'::name,
  'content_text'::name,
  array['content_text_publicado']::name[],
  'o texto tem uma política'
);

select policy_cmd_is(
  'public'::name,
  'content_text'::name,
  'content_text_publicado'::name,
  'SELECT',
  'o leitor só lê o texto'
);

select policy_roles_are(
  'public'::name,
  'content_text'::name,
  'content_text_publicado'::name,
  array['leitor']::name[],
  'a política de texto é do leitor'
);

select policies_are(
  'public'::name,
  'media_alt'::name,
  array['media_alt_publicado']::name[],
  'a mídia tem uma política'
);

select policy_cmd_is(
  'public'::name,
  'media_alt'::name,
  'media_alt_publicado'::name,
  'SELECT',
  'o leitor só lê a mídia'
);

select policy_roles_are(
  'public'::name,
  'media_alt'::name,
  'media_alt_publicado'::name,
  array['leitor']::name[],
  'a política de mídia é do leitor'
);

select * from finish();
