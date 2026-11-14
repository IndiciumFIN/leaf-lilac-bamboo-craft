import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";
import test from "node:test";

const comParse = [
  "packages/cli/parsers/anvisa_dev.py",
  "packages/cli/parsers/anvisa_med.py",
  "packages/cli/parsers/atlas.py",
  "packages/cli/parsers/catmat.py",
  "packages/cli/parsers/cdsi.py",
  "packages/cli/parsers/cid10.py",
  "packages/cli/parsers/esavi.py",
  "packages/cli/parsers/fhir.py",
  "packages/cli/parsers/icd11.py",
  "packages/cli/parsers/medlineplus.py",
  "packages/cli/parsers/mesh.py",
  "packages/cli/parsers/pni.py",
  "packages/cli/parsers/sies.py",
  "packages/cli/parsers/sinan.py",
  "packages/cli/parsers/taco.py",
  "packages/cli/parsers/vacinas.py",
];

test("os vinte caminhos de parser existem e os cinco novos nao publicam", () => {
  const estrutural = JSON.parse(execFileSync("python3", ["scripts/verify-repository-integrity.py"], { encoding: "utf8" }));
  const faltam = estrutural.findings.filter((item) => item.code === "MISSING_PARSER");
  assert.equal(estrutural.structural_pass, true);
  assert.equal(estrutural.strict_pass, true);
  assert.equal(faltam.length, 0);
  for (const path of comParse) assert.match(readFileSync(path, "utf8"), /def parse\(/);
  execFileSync("python3", ["packages/cli/parsers/test_cinco.py"], { stdio: "inherit", env: { ...process.env, PYTHONPATH: "." } });
});
