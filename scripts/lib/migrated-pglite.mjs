/** Banco das migrations da raiz, reaproveitado por hash. Sem banco remoto. */
import { createHash } from "node:crypto";
import { mkdir, readFile, readdir, rename, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { PGlite } from "@electric-sql/pglite";

const cacheDir = "/tmp/pglite-migrated-cache";

export async function openMigrated({ extensions, beforeMigrations } = {}) {
  if (process.env.DATABASE_URL?.trim() || process.env.PGHOST?.trim()) {
    throw new Error("REFUSED_REMOTE_DB_ENV");
  }
  const names = (await readdir("migrations")).filter((name) => name.endsWith(".sql")).sort();
  const hash = createHash("sha256");
  hash.update(Object.keys(extensions ?? {}).sort().join(","));
  for (const name of names) {
    hash.update(name);
    hash.update(await readFile(join("migrations", name)));
  }
  const cache = join(cacheDir, `${hash.digest("hex").slice(0, 16)}.tgz`);
  const cached = await readFile(cache).then(
    (bytes) => new Blob([bytes]),
    (error) => {
      if (error?.code === "ENOENT") return null;
      throw error;
    },
  );
  if (cached) {
    const db = new PGlite({ extensions, loadDataDir: cached });
    await db.waitReady;
    return { db, cached: true };
  }
  const db = new PGlite({ extensions });
  if (beforeMigrations) await beforeMigrations(db);
  for (const name of names) await db.exec(await readFile(join("migrations", name), "utf8"));
  if (process.env.CI !== "true") {
    const dumped = await db.dumpDataDir("gzip");
    await mkdir(cacheDir, { recursive: true });
    const partial = `${cache}.partial`;
    await writeFile(partial, new Uint8Array(await dumped.arrayBuffer()));
    await rename(partial, cache);
  }
  return { db, cached: false };
}
