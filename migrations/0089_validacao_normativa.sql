-- Validar normativo é política. O rastro só cresce.
-- A leitura não admite o trecho e não muda o vínculo.

insert into governance_item (id, kind, title, body)
values (
  'politica-validacao-normativa',
  'politica',
  'Documento interno da validação normativa',
  'Este texto é nosso. Validar normativo conta a leitura já gravada. Não altera o vínculo, não copia cláusula e não admite o trecho. Cada decisão e cada leitura entram no rastro. O rastro não se apaga nem se corrige.'
)
on conflict (id) do nothing;

insert into policy_rule (package_id, id, subject_role, action, effect, reason)
values
  ('acesso', 'admin-valida-normativo', 'admin', 'validar_normativo', 'allow', 'O administrador lê os vínculos normativos. A leitura não admite.'),
  ('acesso', 'agente-nao-valida-normativo', 'agente', 'validar_normativo', 'deny', 'Agente não valida normativo.'),
  ('acesso', 'assinante-nao-valida-normativo', 'assinante', 'validar_normativo', 'deny', 'Assinante não valida normativo.')
on conflict (package_id, id) do nothing;

create table if not exists activity_event (
  id text primary key,
  at timestamptz not null default now(),
  actor_id text not null,
  action text not null,
  decision_id text not null references policy_decision (id),
  subject text not null,
  outcome text not null check (outcome in ('registrado', 'negado')),
  note text not null
);

create or replace function forbid_activity_change()
returns trigger
language plpgsql
as $$
begin
  raise exception 'O rastro de atividade não se altera.';
end;
$$;

drop trigger if exists activity_event_no_change on activity_event;
create trigger activity_event_no_change
before update or delete on activity_event
for each row execute function forbid_activity_change();

insert into schema_entity (name, layer_id, primary_key, purpose, links)
values (
  'activity_event',
  'processo',
  'id',
  'Rastro das decisões e das leituras. Só recebe linha nova.',
  'decision_id → policy_decision.id'
)
on conflict (name) do nothing;

insert into schema_column (entity, name, data_type, required, key_part, ref_entity, definition, syntax, unit)
values
  ('activity_event', 'id', 'texto', true, true, null, 'Identidade desta linha do rastro.', 'texto', null),
  ('activity_event', 'at', 'instante', true, false, null, 'Quando a linha foi acrescentada.', 'instante', null),
  ('activity_event', 'actor_id', 'texto', true, false, null, 'Quem pediu. Texto solto, não é chave para user.', 'texto', null),
  ('activity_event', 'action', 'texto', true, false, null, 'Ação pedida na política.', 'texto', null),
  ('activity_event', 'decision_id', 'texto', true, false, 'policy_decision', 'Decisão que autorizou ou negou esta linha.', 'id de policy_decision', null),
  ('activity_event', 'subject', 'texto', true, false, null, 'O que a linha registra.', 'texto', null),
  ('activity_event', 'outcome', 'texto', true, false, null, 'Efeito no rastro. Não é admissão.', 'registrado ou negado', null),
  ('activity_event', 'note', 'texto', true, false, null, 'Contagem ou motivo. Não é a cláusula.', 'texto', null)
on conflict (entity, name) do nothing;

insert into schema_relation (from_entity, name, to_entity, cardinality, from_column, to_column, definition)
values (
  'policy_decision',
  'rastro',
  'activity_event',
  '1:N',
  'id',
  'decision_id',
  'Uma decisão sustenta uma ou mais linhas do rastro. A linha não se altera.'
)
on conflict (from_entity, name) do nothing;
