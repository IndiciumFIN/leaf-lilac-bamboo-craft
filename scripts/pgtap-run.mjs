#!/usr/bin/env node
/** Aplica as migrations da raiz e roda os testes pgTAP no PGLite. Sem banco remoto. */
import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";
import { PGlite } from "@electric-sql/pglite";
import { pgtap } from "@electric-sql/pglite-pgtap";
import { tapFailures } from "./lib/pgtap-result.mjs";

if (process.env.DATABASE_URL?.trim() || process.env.PGHOST?.trim()) {
  throw new Error("REFUSED_REMOTE_DB_ENV");
}

const migrations = (await readdir("migrations")).filter((name) => name.endsWith(".sql")).sort();
const tests = (await readdir("pgtap")).filter((name) => name.endsWith(".sql")).sort();
if (tests.length === 0) throw new Error("NO_PGTAP");

const db = new PGlite({ extensions: { pgtap } });
await db.exec("create schema if not exists tap; create extension if not exists pgtap schema tap cascade");
for (const name of migrations) {
  await db.exec(await readFile(join("migrations", name), "utf8"));
}

const lines = [];
for (const name of tests) {
  await db.exec(`
    do $$
    begin
      if to_regclass('pg_temp.__tcache__') is not null then
        delete from __tcache__ where label = 'plan';
        update __tcache__ set value = 0 where label in ('curr_test', 'failed');
        perform setval('__tresults___numb_seq', 1, false);
      end if;
    end $$;
  `);
  const results = await db.exec(await readFile(join("pgtap", name), "utf8"));
  for (const result of results) {
    for (const row of result.rows ?? []) {
      const text = Object.values(row).filter((value) => typeof value === "string").join(" ");
      if (text) lines.push(text);
    }
  }
}
for (const line of lines) console.log(line);
const failed = tapFailures(lines);
if (failed.length) {
  console.error(`[pgtap] ${failed.length} falha(s). Não é publicação.`);
  process.exit(1);
}
console.log(`[pgtap] ${tests.length} arquivo(s). Não é publicação.`);
