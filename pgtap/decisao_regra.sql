set search_path to tap, public;

select plan(3);

select fk_ok(
  'public'::name,
  'policy_decision'::name,
  array['package_id', 'rule_id']::name[],
  'public'::name,
  'policy_rule'::name,
  array['package_id', 'id']::name[],
  'a decisão aponta para a regra do mesmo pacote'
);

select is_empty(
  'select id from kernel_order where status = ''admitida''',
  'nenhuma ordem está admitida'
);

select has_table('public', 'schema_entity', 'o dicionário está no banco');

select * from finish();
