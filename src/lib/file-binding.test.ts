import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { readdir, readFile } from "node:fs/promises";
import test from "node:test";
import { PGlite } from "@electric-sql/pglite";
import { auditPlatformConclusion } from "../core/compliance/platform-conclusion.ts";

test("todo arquivo rastreado tem amarração e só o token congelado é canônico", async () => {
  const db = new PGlite();
  const base = new URL("../../migrations/", import.meta.url);
  const names = (await readdir(base)).filter((name) => name.endsWith(".sql")).sort();
  for (const name of names) await db.exec(await readFile(new URL(name, base), "utf8"));

  const tracked = execFileSync("git", ["-C", "/workspace", "ls-files"], { encoding: "utf8" })
    .split("\n")
    .filter((path) => path.length > 0);
  const bound = await db.query<{ path: string }>("select path from file_binding where kind = 'arquivo'");
  assert.deepEqual(bound.rows.map((row) => row.path).sort(), [...tracked].sort());

  const canonical = await db.query<{ path: string; kind: string }>(
    "select path, kind from file_binding where canonico = true order by path",
  );
  assert.deepEqual(canonical.rows.map((row) => row.path), [
    "CE-TOKEN-CANVAS",
    "CE-TOKEN-INK",
    "CE-TOKEN-MUTED",
    "CE-TOKEN-NAVY",
    "CE-TOKEN-NAVY-DEEP",
    "CE-TOKEN-NAVY-MID",
    "CE-TOKEN-SKY",
    "CE-TOKEN-SLATE",
  ]);
  assert.equal(canonical.rows.every((row) => row.kind === "token"), true);
  const rejected = await db.query<{ n: number }>(
    "select count(*)::int as n from file_binding where path = 'CE-TOKEN-INDIGO' and canonico = true",
  );
  assert.equal(rejected.rows[0]?.n, 0);
  const oldFiles = await db.query<{ n: number }>(
    "select count(*)::int as n from file_binding where anterior_ds = true and canonico = true",
  );
  assert.equal(oldFiles.rows[0]?.n, 0);
  const loose = await db.query<{ n: number }>(`
    select count(*)::int as n from content_object as object
    where not exists (select 1 from file_binding as binding where binding.path = object.origin_path)
  `);
  assert.equal(loose.rows[0]?.n, 0);
  await assert.rejects(
    db.exec("insert into file_binding (path, kind, alvo, canonico) values ('arquivo-novo.txt', 'arquivo', 'suporte', true)"),
    /canonico/,
  );
  await db.exec("insert into content_object (slug, kind, origin_path) values ('objeto-novo', 'pagina', 'origem/objeto-novo')");
  const created = await db.query<{ kind: string; canonico: boolean }>(
    "select kind, canonico from file_binding where path = 'origem/objeto-novo'",
  );
  assert.equal(created.rows[0]?.kind, "objeto");
  assert.equal(created.rows[0]?.canonico, false);
  assert.equal((await auditPlatformConclusion()).concluded, false);
});
