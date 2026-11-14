-- O mestre liga o pedido. OPA ausente não admite. O rastro continua só crescendo.

insert into governance_item (id, kind, title, body)
values (
  'politica-integracao-mestre',
  'politica',
  'Documento interno da integração do mestre',
  'Este texto é nosso. Integrar o mestre abre um pedido do kernel para um fundamento que já existe. Contabilidade não entra. Sem o programa OPA o pedido fica em espera. A presença do programa também não admite. Quem aprova não é o kernel.'
)
on conflict (id) do nothing;

insert into policy_rule (package_id, id, subject_role, action, effect, reason)
values
  ('acesso', 'admin-integra-mestre', 'admin', 'integrar_mestre', 'allow', 'O administrador liga um fundamento já existente a um pedido em espera.'),
  ('acesso', 'agente-nao-integra-mestre', 'agente', 'integrar_mestre', 'deny', 'Agente não integra o mestre.'),
  ('acesso', 'assinante-nao-integra-mestre', 'assinante', 'integrar_mestre', 'deny', 'Assinante não integra o mestre.')
on conflict (package_id, id) do nothing;

create table if not exists master_binding (
  order_id text primary key references kernel_order (id),
  fundamento_id text not null references fundamento (id),
  opa text not null check (opa in ('ausente', 'presente')),
  unique (fundamento_id)
);

insert into schema_entity (name, layer_id, primary_key, purpose, links)
values (
  'master_binding',
  'processo',
  'order_id',
  'Ligação do pedido ao fundamento. Não admite e não copia cláusula.',
  'order_id → kernel_order.id; fundamento_id → fundamento.id'
)
on conflict (name) do nothing;

insert into schema_column (entity, name, data_type, required, key_part, ref_entity, definition, syntax, unit)
values
  ('master_binding', 'order_id', 'texto', true, true, 'kernel_order', 'Pedido em espera deste fundamento.', 'id de kernel_order', null),
  ('master_binding', 'fundamento_id', 'texto', true, false, 'fundamento', 'Identificador mestre. Não é a cláusula.', 'id de fundamento', null),
  ('master_binding', 'opa', 'texto', true, false, null, 'Se o programa OPA foi encontrado. Encontrar não admite.', 'ausente ou presente', null)
on conflict (entity, name) do nothing;

insert into schema_relation (from_entity, name, to_entity, cardinality, from_column, to_column, definition)
values
  ('kernel_order', 'mestre', 'master_binding', '1:1', 'id', 'order_id', 'Um pedido tem no máximo uma ligação de mestre.'),
  ('fundamento', 'pedidos', 'master_binding', '1:1', 'id', 'fundamento_id', 'Um fundamento fica em um pedido. A cláusula não entra.')
on conflict (from_entity, name) do nothing;
