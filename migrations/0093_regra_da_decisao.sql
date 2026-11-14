-- A decisão aponta para a regra do mesmo pacote. Sem regra, a linha continua válida.
-- Não admite e não publica.

alter table policy_decision
  drop constraint if exists policy_decision_rule_fkey;

alter table policy_decision
  add constraint policy_decision_rule_fkey
  foreign key (package_id, rule_id) references policy_rule (package_id, id);

insert into schema_relation (from_entity, name, to_entity, cardinality, from_column, to_column, definition)
values (
  'policy_rule',
  'decisoes',
  'policy_decision',
  '1:N',
  'id',
  'rule_id',
  'Uma regra pode registrar várias decisões. Sem regra, a decisão não aponta.'
)
on conflict (from_entity, name) do nothing;

update schema_entity
set links = 'package_id → policy_package.id; (package_id, rule_id) → policy_rule (package_id, id)'
where name = 'policy_decision';
