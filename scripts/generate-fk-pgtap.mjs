#!/usr/bin/env node
/** Gera um throws_ok por chave estrangeira. Não publica e não escreve em migrations. */
import { createHash } from "node:crypto";
import { readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { PGlite } from "@electric-sql/pglite";

const out = "pgtap/chaves_estrangeiras.sql";
const write = process.argv.includes("--write");

const db = new PGlite();
const migrations = (await readdir("migrations")).filter((name) => name.endsWith(".sql")).sort();
for (const name of migrations) await db.exec(await readFile(join("migrations", name), "utf8"));

const fks = (await db.query(`
  select c.conname as name,
         child.relname as child,
         parent.relname as parent,
         (
           select array_agg(a.attname order by u.ord)
           from unnest(c.conkey) with ordinality as u(attnum, ord)
           join pg_attribute a on a.attrelid = c.conrelid and a.attnum = u.attnum
         ) as child_cols,
         (
           select array_agg(a.attname order by u.ord)
           from unnest(c.confkey) with ordinality as u(attnum, ord)
           join pg_attribute a on a.attrelid = c.confrelid and a.attnum = u.attnum
         ) as parent_cols
  from pg_constraint c
  join pg_class child on child.oid = c.conrelid
  join pg_class parent on parent.oid = c.confrelid
  join pg_namespace n on n.oid = child.relnamespace
  where c.contype = 'f' and n.nspname = 'public'
  order by child.relname, c.conname
`)).rows;

const columns = (await db.query(`
  select c.relname as table_name, a.attname as column_name, a.attnotnull as not_null,
         a.attidentity <> '' as identity, a.attgenerated <> '' as generated,
         pg_get_expr(ad.adbin, ad.adrelid) as default_expr,
         format_type(a.atttypid, a.atttypmod) as formatted
  from pg_attribute a
  join pg_class c on c.oid = a.attrelid
  join pg_namespace n on n.oid = c.relnamespace
  left join pg_attrdef ad on ad.adrelid = a.attrelid and ad.adnum = a.attnum
  where n.nspname = 'public' and c.relkind = 'r' and a.attnum > 0 and not a.attisdropped
`)).rows;

const checks = (await db.query(`
  select rel.relname as table_name, pg_get_constraintdef(c.oid) as def
  from pg_constraint c
  join pg_class rel on rel.oid = c.conrelid
  join pg_namespace n on n.oid = rel.relnamespace
  where c.contype = 'c' and n.nspname = 'public'
`)).rows;

const byTable = new Map();
for (const column of columns) {
  const list = byTable.get(column.table_name) ?? [];
  list.push(column);
  byTable.set(column.table_name, list);
}
const checksByTable = new Map();
for (const check of checks) {
  const list = checksByTable.get(check.table_name) ?? [];
  list.push(check.def);
  checksByTable.set(check.table_name, list);
}
const fksByChild = new Map();
for (const fk of fks) {
  const list = fksByChild.get(fk.child) ?? [];
  list.push(fk);
  fksByChild.set(fk.child, list);
}

function sqlIdent(name) {
  return `"${String(name).replaceAll('"', '""')}"`;
}
function sqlText(value) {
  return `'${String(value).replaceAll("'", "''")}'`;
}
function literal(formatted, token) {
  const type = formatted.toLowerCase();
  if (type === "boolean") return "true";
  if (type.includes("int") || type === "numeric" || type.startsWith("double") || type === "real") return "1";
  if (type === "uuid") return "'00000000-0000-0000-0000-000000000001'::uuid";
  if (type.includes("timestamp") || type === "date") return "timestamptz '2000-01-01'";
  if (type === "json" || type === "jsonb") return `'{}'::${type}`;
  if (type.endsWith("[]")) return `array['${token}']::${type}`;
  return `${sqlText(token)}::${formatted}`;
}
function checkLiteral(table, column, token) {
  const banned = new Set();
  const defs = checksByTable.get(table) ?? [];
  for (const def of defs) {
    for (const match of def.matchAll(new RegExp(`${column}\\s*<>\\s*'([^']+)'`, "gi"))) banned.add(match[1]);
  }
  for (const def of defs) {
    if (new RegExp(`${column}[^\\n]*~\\s*'\\^\\[a-f0-9\\]\\{64\\}\\$'`, "i").test(def)) {
      return sqlText(createHash("sha256").update(token).digest("hex"));
    }
    const equal = new RegExp(`(?:^|[\\s(])${column}\\s*=\\s*'([^']+)'`, "i").exec(def);
    if (equal && !banned.has(equal[1])) return sqlText(equal[1]);
    const match = new RegExp(`\\(${column}\\s*=\\s*any\\s*\\(array\\[([^\\]]+)\\]`, "i").exec(def)
      ?? new RegExp(`${column}[^\\n]*in\\s*\\(([^)]+)\\)`, "i").exec(def);
    if (!match) continue;
    const quoted = [...match[1].matchAll(/'([^']*)'/g)].map((item) => item[1]).find((item) => !banned.has(item));
    if (quoted) return sqlText(quoted);
  }
  return null;
}
function valueFor(table, column, token) {
  const spec = byTable.get(table).find((item) => item.column_name === column);
  return checkLiteral(table, column, token) ?? literal(spec.formatted, token);
}

function rowInsert(table, overrides) {
  const chosen = [];
  for (const column of byTable.get(table)) {
    if (column.generated || column.identity) continue;
    if (overrides.has(column.column_name)) {
      chosen.push([column.column_name, overrides.get(column.column_name)]);
      continue;
    }
    if (column.not_null && !column.default_expr) {
      chosen.push([column.column_name, valueFor(table, column.column_name, overrides.get("__token") ?? "pgtap")]);
    }
  }
  const names = chosen.map(([name]) => sqlIdent(name)).join(", ");
  const values = chosen.map(([, value]) => value).join(", ");
  return `insert into ${sqlIdent(table)} (${names}) values (${values});`;
}

function shape(table, overrides, extraStubs, token) {
  if (table === "content_atom") {
    if (overrides.has("template_id")) overrides.set("origin", "'editorial'");
    else {
      overrides.set("origin", "'normativo'");
      if (!overrides.has("fundamento_id")) {
        const value = sqlText(`${token}-fundamento`);
        overrides.set("fundamento_id", value);
        extraStubs.push(rowInsert("fundamento", new Map([["id", value], ["__token", token]])));
      }
    }
  }
  if (table === "exam_option_intake") {
    if (!overrides.has("letter_norm")) overrides.set("letter_norm", "'A'");
    overrides.set("letter", overrides.get("letter_norm"));
  }
  if (table === "exam_key_intake") {
    if (!overrides.has("correct_letter_norm")) overrides.set("correct_letter_norm", "'A'");
    overrides.set("correct_letter", overrides.get("correct_letter_norm"));
  }
  if (table === "screen_dest") {
    if (overrides.has("place_id")) overrides.set("kind", "'section'");
    else if (overrides.has("tool_slug")) overrides.set("kind", "'tool'");
    else overrides.set("kind", "'home'");
  }
  if (table === "participation_consensus_vote_candidate" && !overrides.has("position")) {
    overrides.set("position", "'AGREE'");
  }
}

const failures = [];
const cases = [];
for (const fk of fks) {
  const token = `pgtap-${fk.name}`.slice(0, 40);
  const missing = `__ausente_${fk.name}`.slice(0, 50);
  const otherFks = (fksByChild.get(fk.child) ?? []).filter((item) => item.name !== fk.name);
  const subsetCols = new Set();
  for (const other of otherFks) {
    if (other.child_cols.length < fk.child_cols.length && other.child_cols.every((column) => fk.child_cols.includes(column))) {
      for (const column of other.child_cols) subsetCols.add(column);
    }
  }
  const stubs = [];
  const extra = [];
  const childOverrides = new Map();
  for (const [index, column] of fk.child_cols.entries()) {
    if (subsetCols.has(column)) continue;
    childOverrides.set(column, valueFor(fk.child, column, `${missing}-${index}`));
  }
  for (const other of otherFks) {
    const parentOverrides = new Map([["__token", token]]);
    let referenced = false;
    for (const [index, column] of other.child_cols.entries()) {
      if (childOverrides.has(column)) continue;
      const spec = byTable.get(fk.child).find((item) => item.column_name === column);
      if (!spec.not_null && !fk.child_cols.includes(column)) continue;
      const parentColumn = other.parent_cols[index];
      const parentValue = valueFor(other.parent, parentColumn, `${token}-${other.name}-${index}`.slice(0, 50));
      childOverrides.set(column, parentValue);
      parentOverrides.set(parentColumn, parentValue);
      referenced = true;
    }
    if (referenced) {
      shape(other.parent, parentOverrides, extra, token);
      stubs.push(rowInsert(other.parent, parentOverrides));
    }
  }
  shape(fk.child, childOverrides, extra, token);
  const body = `do $body$\nbegin\n  perform set_config('session_replication_role', 'replica', true);\n  ${[...stubs, ...extra].join("\n  ")}\n  perform set_config('session_replication_role', 'origin', true);\n  ${rowInsert(fk.child, childOverrides)}\nend\n$body$;`;
  let error = null;
  await db.exec("begin");
  try {
    await db.exec(body);
    error = { code: "NO_ERROR" };
  } catch (caught) {
    error = { code: caught.code, message: caught.message, constraint: caught.constraint };
  } finally {
    await db.exec("rollback");
  }
  const ok = error.code === "23503" && error.constraint === fk.name;
  if (!ok) failures.push({ name: fk.name, child: fk.child, code: error.code, constraint: error.constraint ?? null, message: error.message });
  else cases.push({ name: fk.name, child: fk.child, message: error.message, body });
}

console.log(JSON.stringify({ foreignKeys: fks.length, proved: cases.length, failed: failures.length, failures: failures.map((item) => item.name + " " + item.constraint) }, null, 2));
if (!write) process.exit(failures.length ? 2 : 0);
if (failures.length) process.exit(2);

const lines = [
  "set search_path to tap, public;",
  "",
  `select plan(${cases.length});`,
  "",
];
for (const item of cases) {
  lines.push("select throws_ok(");
  lines.push("  $sql$");
  lines.push(item.body.replace(/^/gm, "    ").replace(/^\s+$/gm, ""));
  lines.push("  $sql$,");
  lines.push("  23503,");
  lines.push(`  ${sqlText(item.message)},`);
  lines.push(`  ${sqlText(item.child + "." + item.name)}`);
  lines.push(");");
  lines.push("");
}
lines.push("select * from finish();");
lines.push("");
await writeFile(out, lines.join("\n"));
console.log(`[fk-pgtap] ${cases.length} testes em ${out}`);
