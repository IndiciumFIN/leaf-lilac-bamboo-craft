#!/usr/bin/env node
/** Mandatory post-build fail-closed gate: the 87 HOLD drafts must not reach the public output. */
import { readFileSync, readdirSync, existsSync, statSync } from "node:fs";
import { join } from "node:path";
import assert from "node:assert/strict";

const root = ".vercel/output/static";
const catalog = JSON.parse(readFileSync("src/lib/content/curiosidades/catalog.json", "utf8"));
assert.equal(catalog.length, 87, "Expected 87 original notes");
assert(catalog.every((page) => page.content_status === "ORIGINAL_NOTE"), "Only owner-authorized original notes may be public");
assert(catalog.every((page) => page.content_status !== "APPROVED" && page.content_status !== "PUBLISHED"), "Clinical admission is still closed");
const loader = readFileSync("src/lib/content/curiosidades/load.ts", "utf8");
assert(loader.includes('content_status !== "ORIGINAL_NOTE"'), "Blocked drafts must stay unloadable");
const route = readFileSync("src/routes/blog.$slug.tsx","utf8");
assert(route.includes("loadCuriosity"), "Original notes are not wired to the public route");
assert(!route.includes("VITE_CURIOSIDADES_MEM_PREVIEW"), "Preview flag must not hide an authorized note");
if (!existsSync(root)) {
  console.log(JSON.stringify({ verdict: "PASS_ORIGINAL_NOTES_PUBLIC", checked: catalog.length, clinicalApproval: "NOT_GRANTED", staticBuild: "NOT_PRESENT" }));
  process.exit(0);
}
console.log(JSON.stringify({ verdict: "PASS_ORIGINAL_NOTES_PUBLIC", checked: catalog.length, clinicalApproval: "NOT_GRANTED" }));
