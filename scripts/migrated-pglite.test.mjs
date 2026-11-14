import assert from "node:assert/strict";
import test from "node:test";
import { openMigrated } from "./lib/migrated-pglite.mjs";

test("o instantâneo recusa banco remoto", async () => {
  const previous = process.env.DATABASE_URL;
  process.env.DATABASE_URL = "postgres://recusado";
  try {
    await assert.rejects(() => openMigrated(), /REFUSED_REMOTE_DB_ENV/);
  } finally {
    if (previous === undefined) delete process.env.DATABASE_URL;
    else process.env.DATABASE_URL = previous;
  }
});
