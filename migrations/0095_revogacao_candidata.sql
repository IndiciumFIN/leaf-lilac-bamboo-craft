-- Revogações citadas e ainda não homologadas. A fórmula não muda.
-- A leitura só pode nascer em análise.

create table if not exists normative_revocation (
  id text primary key,
  revoked_label text not null,
  revoking_label text not null,
  reading text not null default 'EM_ANALISE' check (reading = 'EM_ANALISE'),
  note text not null
);

insert into schema_entity (name, layer_id, primary_key, purpose, links)
values (
  'normative_revocation',
  'conteudo',
  'id',
  'Par de normas em análise. Não torna a norma nova vigente nem altera cálculo.',
  ''
)
on conflict (name) do nothing;

insert into schema_column (entity, name, data_type, required, key_part, ref_entity, definition, syntax, unit)
values
  ('normative_revocation', 'id', 'texto', true, true, null, 'Identificador da leitura.', 'texto', null),
  ('normative_revocation', 'revoked_label', 'texto', true, false, null, 'Norma que a leitura aponta como revogada.', 'texto', null),
  ('normative_revocation', 'revoking_label', 'texto', true, false, null, 'Norma que a leitura aponta como revogadora.', 'texto', null),
  ('normative_revocation', 'reading', 'texto', true, false, null, 'Só nasce em análise. Esta tabela não admite.', 'EM_ANALISE', null),
  ('normative_revocation', 'note', 'texto', true, false, null, 'O que esta linha não faz.', 'texto', null)
on conflict (entity, name) do nothing;

drop trigger if exists layer_guard on normative_revocation;
create trigger layer_guard
before insert on normative_revocation
for each row execute function forbid_without_prior_layer();

insert into normative_revocation (id, revoked_label, revoking_label, note)
values
  (
    'REV-COFEN-358-736',
    'COFEN 358/2009',
    'COFEN 736/2024',
    'O texto da página já registra esta revogação. Esta linha não admite cláusula.'
  ),
  (
    'REV-COFEN-429-754',
    'COFEN 429/2012',
    'COFEN 754/2024',
    'Há página que ainda trata 429/2012 como vigente. O texto não foi reescrito.'
  ),
  (
    'REV-COFEN-543-743',
    'COFEN 543/2017',
    'COFEN 743/2024',
    'Dimensionamento continua citando 543/2017. Nenhuma fórmula foi alterada.'
  )
on conflict (id) do nothing;
