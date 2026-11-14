-- O papel da decisão sai da concessão da sessão, não do argumento.
-- Não cria administrador. Não publica.

create table if not exists access_grant (
  user_id text primary key references "user" (id),
  role text not null check (role in ('leitor', 'assinante', 'admin', 'agente'))
);

insert into schema_entity (name, layer_id, primary_key, purpose, links)
values (
  'access_grant',
  'acesso',
  'user_id',
  'Papel concedido a uma sessão. Sem linha, a decisão nega.',
  'user_id → user.id'
)
on conflict (name) do nothing;

insert into schema_column (entity, name, data_type, required, key_part, ref_entity, definition, syntax, unit)
values
  ('access_grant', 'user_id', 'texto', true, true, null, 'Usuário da sessão. A chave aponta para user.', 'id de user', null),
  ('access_grant', 'role', 'texto', true, false, null, 'Papel concedido. O chamador não escolhe outro.', 'leitor, assinante, admin ou agente', null)
on conflict (entity, name) do nothing;

drop trigger if exists layer_guard on access_grant;
create trigger layer_guard
before insert on access_grant
for each row execute function forbid_without_prior_layer();
