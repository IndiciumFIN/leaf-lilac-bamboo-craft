#!/usr/bin/env node
/** Relato da CLI, da divergência dos contratos e da amarração de camada.
 * Não reescreve contrato, não admite e não publica.
 */
import { execFile } from "node:child_process";
import { readFileSync, readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { join } from "node:path";

const root = fileURLToPath(new URL("..", import.meta.url));

function opaPresent() {
  return new Promise((resolve) => {
    execFile("opa", ["version"], { timeout: 1500 }, (error, stdout) => {
      resolve(error ? { present: false } : { present: true, version: stdout.trim().split("\n")[0] });
    });
  });
}

function drift() {
  return new Promise((resolve) => {
    execFile(process.execPath, ["scripts/ncos-cko-schema-drift.mjs"], { cwd: root }, (error, stdout) => {
      const line = stdout.split("\n").find((item) => item.startsWith("CKO_VOCABULARY_DRIFT "));
      const report = line ? JSON.parse(line.slice("CKO_VOCABULARY_DRIFT ".length)) : null;
      resolve({ ok: !error, report });
    });
  });
}

const names = readdirSync(join(root, "migrations")).filter((name) => name.endsWith(".sql")).sort();
const guard = readFileSync(join(root, "migrations/0091_camada_anterior.sql"), "utf8");
const chain = guard.includes("forbid_without_prior_layer") && guard.includes("content_object") && names[0] === "0001_auth.sql";

const [opa, contracts] = await Promise.all([opaPresent(), drift()]);
const divergent = (contracts.report?.total ?? 0) > 0 || (contracts.report?.requiredMissing ?? 0) > 0;
const result = {
  opa: opa.present ? "presente" : "ausente",
  contratos: divergent ? "divergentes" : "iguais",
  divergencias: contracts.report?.total ?? null,
  grupos: contracts.report?.groups ?? null,
  camposObrigatoriosFaltando: contracts.report?.requiredMissing ?? null,
  primeiraMigration: names[0],
  bloqueioDeCamada: chain ? "gravado" : "ausente",
  reescreveuContrato: false,
};
console.log(JSON.stringify(result));
if (process.argv.includes("--enforce") && (divergent || !chain || !opa.present)) process.exitCode = 1;
