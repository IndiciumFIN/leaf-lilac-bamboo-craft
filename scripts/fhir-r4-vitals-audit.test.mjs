import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

test("esta main não declara conformidade FHIR R4 de sinais vitais", () => {
  const audit = JSON.parse(readFileSync("registers/governance/fhir-r4-vitals-audit.v1.json", "utf8"));
  const shape = readFileSync("src/lib/sbar/types.ts", "utf8");
  assert.equal(audit.conformant, false);
  assert.equal(audit.parserOnThisMain, true);
  assert.match(readFileSync("packages/cli/parsers/fhir.py", "utf8"), /def parse\(/);
  assert.doesNotMatch(readFileSync("packages/cli/parsers/fhir.py", "utf8"), /conformant\s*=\s*True/);
  assert.equal(audit.version, "4.0.1");
  assert.match(shape, /export interface VitalSigns/);
  assert.doesNotMatch(shape, /fhir|Observation|loinc/i);
  assert.equal(audit.gaps.length >= 4, true);
});
