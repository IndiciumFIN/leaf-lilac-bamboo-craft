import assert from "node:assert/strict";
import { readdir, readFile } from "node:fs/promises";
import test from "node:test";
import { PGlite } from "@electric-sql/pglite";

test("dado não entra sem a camada anterior nem sem o arquivo de origem", async () => {
  const db = new PGlite();
  const base = new URL("../../migrations/", import.meta.url);
  const names = (await readdir(base)).filter((name) => name.endsWith(".sql")).sort();
  assert.equal(names[0], "0001_auth.sql");
  for (const name of names) await db.exec(await readFile(new URL(name, base), "utf8"));

  const layers = await db.query<{ id: string; position: number; tables: number }>(`
    select layer.id, layer.position, count(entity.name)::int as tables
    from schema_layer as layer
    left join schema_entity as entity on entity.layer_id = layer.id
    group by layer.id, layer.position
    order by layer.position
  `);
  assert.deepEqual(layers.rows.map((row) => row.id), ["identidade", "acesso", "processo", "conteudo", "clinico", "candidato"]);
  assert.equal(layers.rows.every((row) => row.tables > 0), true);

  const loose = await db.query<{ n: number }>(`
    select count(*)::int as n from content_object where btrim(origin_path) = ''
  `);
  assert.equal(loose.rows[0]?.n, 0);
  await assert.rejects(
    db.exec("insert into content_object (slug, kind, origin_path) values ('sem-arquivo', 'pagina', '   ')"),
    /arquivo de origem/,
  );

  await db.exec(`
    insert into schema_layer (id, label, position) values ('lacuna', 'Lacuna', 7), ('depois', 'Depois', 8);
    create table prova_depois (id text primary key);
    insert into schema_entity (name, layer_id, primary_key, purpose, links)
    values ('prova_depois', 'depois', 'id', 'Prova da camada seguinte.', '');
    create trigger layer_guard before insert on prova_depois
    for each row execute function forbid_without_prior_layer();
  `);
  await assert.rejects(db.exec("insert into prova_depois (id) values ('1')"), /Lacuna/);
  await db.exec(`
    create table prova_lacuna (id text primary key);
    insert into schema_entity (name, layer_id, primary_key, purpose, links)
    values ('prova_lacuna', 'lacuna', 'id', 'Prova da camada que faltava.', '');
  `);
  await db.exec("insert into prova_depois (id) values ('1')");
  const kept = await db.query<{ n: number }>("select count(*)::int as n from prova_depois");
  assert.equal(kept.rows[0]?.n, 1);
});
