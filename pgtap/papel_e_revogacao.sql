set search_path to tap, public;

select plan(2);

select throws_ok(
  $sql$
    insert into access_grant (user_id, role) values ('sem-sessao', 'admin')
  $sql$,
  23503,
  'insert or update on table "access_grant" violates foreign key constraint "access_grant_user_id_fkey"',
  'concessão sem usuário não entra'
);

select throws_ok(
  $sql$
    insert into normative_revocation (id, revoked_label, revoking_label, reading, note)
    values ('REV-CONFORME', 'a', 'b', 'CONFORME', 'nao admite')
  $sql$,
  23514,
  'new row for relation "normative_revocation" violates check constraint "normative_revocation_reading_check"',
  'revogação não nasce conforme'
);

select * from finish();
