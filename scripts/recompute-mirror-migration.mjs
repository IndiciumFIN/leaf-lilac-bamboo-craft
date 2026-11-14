#!/usr/bin/env node
/** Reconta as colisões do espelho local. Não faz merge e não escreve na main. */
import { execFileSync } from "node:child_process";
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";
import { classifyCandidateRisk, detectMainMigrationCollisions, parseTree, quarantineCollision } from "./lib/main-migration-core.mjs";

const gitDir = "intake/mirrors/dev-chatgpt-workspace.git";
const out = "audit-evidence/main-migration/mirror-recompute.v1.json";

function rawGit(...args) {
  return execFileSync("git", ["--git-dir", gitDir, ...args], {
    encoding: "utf8",
    maxBuffer: 80 * 1024 * 1024,
    stdio: ["ignore", "pipe", "pipe"],
  });
}

const branches = rawGit("for-each-ref", "--format=%(refname:short)", "refs/heads")
  .split("\n")
  .filter((name) => name && name !== "main")
  .sort();
const mainFiles = parseTree(rawGit("ls-tree", "-r", "-z", "refs/heads/main"));
const groups = [];
for (const branch of branches) {
  const files = parseTree(rawGit("ls-tree", "-r", "-z", `refs/heads/${branch}`));
  const paths = [];
  for (const [path, blob] of files) {
    if (mainFiles.get(path) === blob) continue;
    paths.push({ path, blob, status: "M", alreadyInMain: false, risk: classifyCandidateRisk(path) });
  }
  groups.push({ branch, paths });
}
const found = detectMainMigrationCollisions(groups);
const quarantined = found.collisions.map((row) => quarantineCollision(row.path, classifyCandidateRisk(row.path)));
const byRisk = {};
for (const row of quarantined) byRisk[row.risk] = (byRisk[row.risk] ?? 0) + 1;
const report = {
  schemaVersion: "1.0.0",
  source: gitDir,
  main: "refs/heads/main",
  branches: branches.length,
  collisions: quarantined.length,
  duplicates: found.duplicates.length,
  byRisk,
  canonicalMergesPerformed: 0,
  releaseGate: "HOLD_HUMAN",
  completionClaim: "NOT_100_PERCENT_MIGRATED",
  paths: quarantined,
};
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, JSON.stringify(report, null, 2) + "\n");
console.log(JSON.stringify({
  branches: report.branches,
  collisions: report.collisions,
  duplicates: report.duplicates,
  byRisk,
  merges: 0,
  gate: report.releaseGate,
}));
