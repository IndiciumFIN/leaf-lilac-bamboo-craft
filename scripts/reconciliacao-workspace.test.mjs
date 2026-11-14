import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import test from "node:test";

const registro = JSON.parse(readFileSync("registers/governance/reconciliacao-workspace.v1.json", "utf8"));

test("as 120 divergências ficam na main local e os 13 exclusivos estão registrados", () => {
  assert.equal(registro.divergentes.length, 120);
  assert.equal(registro.divergentes.every((item) => item.decisao === "manter_raven" && existsSync(item.path)), true);
  assert.equal(registro.exclusivos.length, 13);
  assert.equal(existsSync("src/components/article-page.tsx"), false);
  assert.equal(existsSync("src/components/page-tools.tsx"), false);
  assert.equal(existsSync("src/components/article/article-page.tsx"), true);
  assert.equal(existsSync("src/components/site/page-tools.tsx"), true);
  for (const item of registro.exclusivos) {
    if (item.decisao === "preservar") assert.equal(existsSync(item.path), true);
  }
});
