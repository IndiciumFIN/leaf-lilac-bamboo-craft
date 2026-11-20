import { findCuriosityMeta } from "./catalog.ts";
import type { CuriosityRecord } from "./types.ts";

/** Só a nota original autorizada entra no site. Rascunho e fonte bloqueada não carregam. */
export async function loadCuriosity(slug: string): Promise<CuriosityRecord | undefined> {
  const meta = findCuriosityMeta(slug);
  if (!meta || meta.content_status !== "ORIGINAL_NOTE") return undefined;
  const pages = import.meta.glob<{ default: CuriosityRecord }>("./pages/*.json");
  const load = pages["./pages/" + slug + ".json"];
  if (!load) throw new Error("Nota original ausente para " + slug);
  const module = await load();
  if (module.default.slug !== slug || module.default.content.slug !== slug) {
    throw new Error("Falha de integridade da nota " + slug);
  }
  if (module.default.content_status !== "ORIGINAL_NOTE") return undefined;
  return module.default;
}