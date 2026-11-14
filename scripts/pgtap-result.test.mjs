import { test } from "node:test";
import assert from "node:assert/strict";
import { tapFailures } from "./lib/pgtap-result.mjs";

test("só a linha not ok reprova o pgTAP", () => {
  assert.deepEqual(tapFailures(["ok 1 - existe", "1..1"]), []);
  assert.equal(tapFailures(["not ok 1 - falta"]).length, 1);
});
