-- Dado de uma camada só entra se cada camada anterior já tem tabela.
-- Conteúdo sem arquivo de origem não entra. Não admite e não publica.

create or replace function forbid_without_prior_layer()
returns trigger
language plpgsql
as $$
declare
  here integer;
  missing text;
  origin text;
begin
  select layer.position into here
  from schema_entity as entity
  join schema_layer as layer on layer.id = entity.layer_id
  where entity.name = TG_TABLE_NAME;

  if here is null then
    raise exception 'Tabela % sem camada. O dado não entra.', TG_TABLE_NAME;
  end if;

  select string_agg(prior.label, ', ' order by prior.position)
    into missing
  from schema_layer as prior
  where prior.position < here
    and not exists (
      select 1 from schema_entity as earlier where earlier.layer_id = prior.id
    );

  if missing is not null then
    raise exception 'Camada anterior sem tabela: %.', missing;
  end if;

  if TG_TABLE_NAME = 'content_object' then
    origin := btrim(coalesce(to_jsonb(NEW) ->> 'origin_path', ''));
    if origin = '' then
      raise exception 'Conteúdo sem arquivo de origem.';
    end if;
  end if;

  return NEW;
end;
$$;

do $$
declare
  rec record;
begin
  for rec in
    select entity.name
    from schema_entity as entity
    join schema_layer as layer on layer.id = entity.layer_id
    where layer.position > 1
  loop
    execute format('drop trigger if exists layer_guard on %I', rec.name);
    execute format(
      'create trigger layer_guard before insert on %I for each row execute function forbid_without_prior_layer()',
      rec.name
    );
  end loop;
end $$;
