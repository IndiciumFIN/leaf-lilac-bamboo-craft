#!/usr/bin/env node
/** Roda o Squawk nas migrations da raiz e recusa achado acima do teto. */
import { spawnSync } from "node:child_process";
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { violationsAboveBaseline, countViolations } from "./lib/squawk-gate.mjs";

const baselinePath = "scripts/squawk-baseline.json";
const baseline = JSON.parse(readFileSync(baselinePath, "utf8"));
const files = readdirSync("migrations")
  .filter((name) => name.endsWith(".sql"))
  .sort()
  .map((name) => join("migrations", name));
const run = spawnSync(join("node_modules", ".bin", "squawk"), ["--reporter", "json", ...files], {
  encoding: "utf8",
  stdio: ["ignore", "pipe", "pipe"],
  maxBuffer: 20 * 1024 * 1024,
});
if (run.error) throw run.error;
const stdout = run.stdout.trim();
const rows = stdout ? JSON.parse(stdout) : [];
if (!Array.isArray(rows)) throw new Error("SQUAWK_OUTPUT");
const extra = violationsAboveBaseline(countViolations(rows), baseline);
if (run.status !== 0 && run.status !== 1) {
  process.stderr.write(run.stderr);
  throw new Error("SQUAWK_FAILED");
}
if (extra.length) {
  for (const row of extra) {
    console.error(`${row.key} ${row.count} > ${row.allowed}`);
  }
  console.error(`[squawk] ${extra.length} achado(s) acima do teto. Não é publicação.`);
  process.exit(1);
}
console.log(`[squawk] ${rows.length} achado(s) dentro do teto. Não é publicação.`);
