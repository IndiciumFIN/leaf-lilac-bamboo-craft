import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import test from "node:test";

test("o gate estrutural passa e o estrito continua fechado", () => {
  const estrutural = JSON.parse(execFileSync("python3", ["scripts/verify-repository-integrity.py"], { encoding: "utf8" }));
  assert.equal(estrutural.structural_pass, true);
  assert.equal(estrutural.strict_pass, false);
  assert.equal(estrutural.counts.pending, 17);
  const faltam = estrutural.findings.filter((item) => item.code === "MISSING_PARSER");
  assert.equal(faltam.length, 17);
  assert.equal(faltam.some((item) => item.path.endsWith("fhir_vitais.json")), false);
});
