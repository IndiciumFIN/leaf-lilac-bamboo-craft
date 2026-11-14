import { test } from "node:test";
import assert from "node:assert/strict";
import { countViolations, violationsAboveBaseline } from "./lib/squawk-gate.mjs";

test("achado novo fica acima do teto e o mesmo número passa", () => {
  const current = countViolations([
    { file: "migrations/0001_auth.sql", rule_name: "ban-drop-table" },
    { file: "migrations/0001_auth.sql", rule_name: "ban-drop-table" },
  ]);
  assert.deepEqual(violationsAboveBaseline(current, { "migrations/0001_auth.sql\tban-drop-table": 2 }), []);
  assert.equal(violationsAboveBaseline(current, {}).length, 1);
});
