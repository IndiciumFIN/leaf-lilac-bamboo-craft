import { formulas } from "./formulas.ts";
import { admitEngineResult } from "./engine-guard.ts";
import { parseFormulaInput, parseScaleAnswers } from "./input-schema.ts";
import { acceptRoundingAttribute, formatNumber, ieeeDecimal, numericFailure, roundFinite } from "./numeric-rule.ts";
import type { Band, ClinicalTool, Criterion } from "@/lib/tools/types";

export type MemoryRow = { label: string; value: string; max: string };

export type ToolSuccess = {
  ok: true;
  totalLabel: string;
  total: number;
  max?: number;
  band?: Band;
  rows: MemoryRow[];
  outputs?: { id: string; label: string; unit: string; value: number; digits: number; text?: string }[];
  steps?: string[];
  rounding?: "roundTiesToEven";
  reduced?: boolean;
};

export type ToolFailure = {
  ok: false;
  message: string;
  fieldErrors?: Record<string, string>;
  missing?: string[];
};

export function reductionNote(result: { reduced?: boolean }) {
  return result.reduced ? "Número reduzido." : "";
}

export { formatNumber } from "./numeric-rule.ts";

function findBand(bands: Band[] | undefined, value: number) {
  return bands?.find((band) => value >= band.min && value <= band.max);
}

function criterionMax(criterion: Criterion) {
  return Math.max(...criterion.choices.map((choice) => choice.value));
}

export function evaluateScale(tool: ClinicalTool, answers: Record<string, number>): ToolSuccess | ToolFailure {
  const parsed = parseScaleAnswers(tool, answers);
  if (!parsed.ok) return parsed;
  if (tool.slug === "cam") return evaluateCam(tool, parsed.values);
  const attribute = acceptRoundingAttribute("roundTiesToEven");
  if (!attribute.ok) return attribute;
  const criteria = tool.criteria ?? [];
  const rawTotal = criteria.reduce((sum, criterion) => sum + parsed.values[criterion.id], 0);
  const total = roundFinite(rawTotal, 0);
  const max = criteria.reduce((sum, criterion) => sum + criterionMax(criterion), 0);
  return admitEngineResult({
    ok: true,
    totalLabel: "Escore",
    total,
    max,
    band: findBand(tool.bands, total),
    rows: criteria.map((criterion) => {
      const choice = criterion.choices.find((item) => item.value === parsed.values[criterion.id]);
      return {
        label: criterion.label,
        value: `${parsed.values[criterion.id]} · ${choice?.label ?? ""}`,
        max: String(criterionMax(criterion)),
      };
    }),
    rounding: "roundTiesToEven",
    reduced: total !== rawTotal,
  });
}

function evaluateCam(tool: ClinicalTool, values: Record<string, number>): ToolSuccess | ToolFailure {
  const attribute = acceptRoundingAttribute("roundTiesToEven");
  if (!attribute.ok) return attribute;
  const rass = values.rass;
  const positive = values.f1 === 1 && values.f2 === 1 && (rass !== 0 || values.f4 === 1);
  const band: Band = rass <= -4
    ? { min: -5, max: -4, label: "Não avaliável neste momento", tone: "info", note: "RASS −4 ou −5: não aplicar classificação positiva/negativa; reavaliar quando o nível de despertar permitir.", nanda: [] }
    : positive
      ? { min: 1, max: 1, label: "CAM-ICU positivo (+)", tone: "danger", note: "Características 1 e 2 presentes e característica 3 ou 4 presente. Sugere delirium; exige avaliação profissional.", nanda: [] }
      : { min: 0, max: 0, label: "CAM-ICU negativo (−)", tone: "ok", note: "O algoritmo não preenche critérios positivos. O resultado não exclui outras condições clínicas.", nanda: [] };
  const criteria = tool.criteria ?? [];
  return admitEngineResult({
    ok: true,
    totalLabel: "CAM-ICU",
    total: rass <= -4 ? rass : positive ? 1 : 0,
    band,
    rows: criteria.map((criterion) => {
      const choice = criterion.choices.find((item) => item.value === values[criterion.id]);
      return {
        label: criterion.label,
        value: `${values[criterion.id]} · ${choice?.label ?? ""}`,
        max: "—",
      };
    }),
    rounding: "roundTiesToEven",
    reduced: false,
  });
}

export function evaluateFormula(tool: ClinicalTool, raw: Record<string, string>): ToolSuccess | ToolFailure {
  const parsed = parseFormulaInput(tool, raw);
  if (!parsed.ok) return parsed;
  const values = parsed.values;
  const computed = formulas[tool.slug]?.(values);
  if (!computed) return { ok: false, message: "Esta calculadora ainda não tem fórmula." };
  if ("error" in computed) return { ok: false, message: computed.error };
  const attribute = acceptRoundingAttribute("roundTiesToEven");
  if (!attribute.ok) return attribute;
  const unfinished = (tool.outputs ?? []).map((output) => numericFailure(computed.outputs[output.id])).find((message) => message);
  if (unfinished) return { ok: false, message: unfinished };
  let reduced = false;
  const outputs = (tool.outputs ?? []).map((output) => {
    const rawValue = computed.outputs[output.id];
    const echoed = Boolean(computed.texts?.[output.id]);
    const fields = tool.fields ?? [];
    const digits = echoed ? typedDigits(fields.length === 1 ? raw[fields[0].id] : undefined) : output.digits;
    const value = echoed ? rawValue : roundFinite(rawValue, output.digits);
    if (!echoed && value !== rawValue) reduced = true;
    return {
      ...output,
      digits,
      value,
      text: computed.texts?.[output.id],
    };
  });
  const bandValue = tool.bandFrom ? outputs.find((output) => output.id === tool.bandFrom)?.value : undefined;
  return admitEngineResult({
    ok: true,
    totalLabel: outputs[0]?.label ?? "Resultado",
    total: outputs[0]?.value ?? 0,
    band: bandValue === undefined ? undefined : findBand(tool.bands, bandValue),
    outputs,
    rows: [
      ...(tool.fields ?? []).map((field) => ({
        label: field.label,
        value: [formatNumber(values[field.id], typedDigits(raw[field.id])), field.unit].filter(Boolean).join(" "),
        max: "—",
      })),
      ...(tool.selects ?? []).map((field) => ({
        label: field.label,
        value: field.options.find((option) => option.value === values[field.id])?.label ?? "",
        max: "—",
      })),
    ],
    steps: formulaSteps(tool.slug, values, outputs),
    rounding: outputs.some((output) => !output.text) ? "roundTiesToEven" : undefined,
    reduced: outputs.some((output) => !output.text) ? reduced : undefined,
  });
}

function typedDigits(text: string | undefined) {
  const fraction = (text ?? "").trim().replace(",", ".").split(".")[1] ?? "";
  return Math.min(12, fraction.length);
}

function shownDigits(value: number) {
  const fraction = ieeeDecimal(value).split(".")[1]?.replace(/0+$/, "") ?? "";
  return Math.min(12, fraction.length);
}

function casas(digits: number) {
  if (digits === 0) return "sem casa decimal";
  if (digits === 1) return "com 1 casa decimal";
  return `com ${digits} casas decimais`;
}

function formulaSteps(slug: string, values: Record<string, number>, outputs: { id: string; value: number; digits: number }[]) {
  const found = (id: string) => outputs.find((output) => output.id === id);
  if (slug === "gotejamento") {
    const minutes = values.horas * 60 + values.minutos;
    const mlh = found("mlh");
    const gotas = found("gotas");
    return [
      `Tempo = ${values.horas} h × 60 + ${values.minutos} min = ${minutes} min.`,
      `mL/h = ${values.volume} ÷ (${minutes} ÷ 60). Resultado admitido, ${casas(mlh?.digits ?? 0)}: ${formatNumber(mlh?.value ?? 0, mlh?.digits ?? 0)}.`,
      `Gotas/min = (${values.volume} × ${values.fator}) ÷ ${minutes}. Resultado admitido, ${casas(gotas?.digits ?? 0)}: ${formatNumber(gotas?.value ?? 0, gotas?.digits ?? 0)}.`,
    ];
  }
  if (slug === "imc") {
    const metros = values.altura / 100;
    const imc = found("imc");
    return [
      `Altura em metros = ${values.altura} ÷ 100 = ${formatNumber(metros, shownDigits(metros))}.`,
      `IMC = ${values.peso} ÷ (${formatNumber(metros, shownDigits(metros))})². Resultado admitido, ${casas(imc?.digits ?? 0)}: ${formatNumber(imc?.value ?? 0, imc?.digits ?? 0)}.`,
    ];
  }
  if (slug === "exames-laboratoriais") {
    return [`Valor informado: ${formatNumber(values.valor, shownDigits(values.valor))}. O valor digitado não foi reduzido.`];
  }
  if (slug === "insulina") {
    const ml = found("ml");
    return [`Volume = ${values.dose} UI ÷ 100 = ${formatNumber(ml?.value ?? 0, ml?.digits ?? 2)} mL. Vale só para U-100.`];
  }
  if (slug === "gestacional") {
    const semanas = found("semanas");
    const dias = found("dias");
    return [
      `Dias desde ${values.dia}/${values.mes}/${values.ano} até hoje, divididos por 7.`,
      `${formatNumber(semanas?.value ?? 0, 0)} semanas e ${formatNumber(dias?.value ?? 0, 0)} dias. A data provável soma 280 dias.`,
    ];
  }
  if (slug === "gasometria") {
    return ["Cada valor foi comparado com a faixa impressa na página. Não houve nome de distúrbio."];
  }
}
