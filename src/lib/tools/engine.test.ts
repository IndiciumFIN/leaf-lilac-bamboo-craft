import assert from "node:assert/strict";
import test from "node:test";
import { getTool } from "./catalog.ts";
import { evaluateFormula, evaluateScale, reductionNote } from "./engine.ts";
import { parseClinicalSubmission } from "./input-schema.ts";

test("escala incompleta não produz escore", () => {
  const tool = getTool("braden");
  assert.ok(tool);
  const result = evaluateScale(tool, { sensorial: 1 });
  assert.equal(result.ok, false);
  if (!result.ok) assert.ok((result.missing?.length ?? 0) > 0);
});

test("dimensionamento de 10 pacientes mínimos usa o fator 1,15", () => {
  const tool = getTool("dimensionamento");
  assert.ok(tool);
  assert.equal(tool.publicacao, "candidata");
  const result = evaluateFormula(tool, {
    pcm: "10", pci: "0", pcad: "0", pcsi: "0", pcit: "0", ds: "7", chs: "36", ist: "15",
  });
  assert.equal(result.ok, true);
  if (result.ok) {
    assert.equal(result.outputs?.find((item) => item.id === "horas")?.value, 40);
    assert.equal(result.outputs?.find((item) => item.id === "qp")?.value, 8.94);
    assert.equal(result.outputs?.find((item) => item.id === "enfermeiros")?.value, 2.95);
  }
});

test("número fora do limite não calcula", () => {
  const tool = getTool("imc");
  assert.ok(tool);
  const result = evaluateFormula(tool, { peso: "900", altura: "170" });
  assert.equal(result.ok, false);
});

test("dimensionamento recusa índice abaixo de 15%", () => {
  const tool = getTool("dimensionamento");
  assert.ok(tool);
  const result = evaluateFormula(tool, {
    pcm: "10", pci: "0", pcad: "0", pcsi: "0", pcit: "0", ds: "7", chs: "36", ist: "14",
  });
  assert.equal(result.ok, false);
});

test("gotejamento de 500 mL em 2 horas no equipo 20", () => {
  const tool = getTool("gotejamento");
  assert.ok(tool);
  const result = evaluateFormula(tool, { volume: "500", horas: "2", minutos: "0", fator: "20" });
  assert.equal(result.ok, true);
  if (result.ok) {
    assert.equal(result.outputs?.find((item) => item.id === "mlh")?.value, 250);
    assert.equal(result.outputs?.find((item) => item.id === "gotas")?.value, 83);
  }
});

test("IMC de 70 kg e 170 cm fica na faixa adequada", () => {
  const tool = getTool("imc");
  assert.ok(tool);
  const result = evaluateFormula(tool, { peso: "70", altura: "170" });
  assert.equal(result.ok, true);
  if (result.ok) {
    assert.equal(result.outputs?.find((item) => item.id === "imc")?.value, 24.2);
    assert.equal(result.band?.label, "Adequado");
    assert.match(result.steps?.[0] ?? "", / = 1,7\.$/);
  }
});

test("vírgula entra e texto ou opção fora da lista não calcula", () => {
  const imc = getTool("imc");
  assert.ok(imc);
  const comma = evaluateFormula(imc, { peso: "70,5", altura: "170" });
  assert.equal(comma.ok, true);
  const text = evaluateFormula(imc, { peso: "abc", altura: "170" });
  assert.equal(text.ok, false);
  if (!text.ok) assert.equal(text.fieldErrors?.peso, "Informe um número.");
  const scale = getTool("braden");
  assert.ok(scale);
  const answers = Object.fromEntries((scale.criteria ?? []).map((item) => [item.id, item.choices[0]?.value ?? 0]));
  answers[scale.criteria?.[0]?.id ?? ""] = 999;
  const invalid = evaluateScale(scale, answers);
  assert.equal(invalid.ok, false);
});

test("paciente inválido impede o conjunto mesmo com número válido", () => {
  const imc = getTool("imc");
  assert.ok(imc);
  const stopped = parseClinicalSubmission(imc, {
    patient: { nome: "Ana", idade: "não", setor: "", data: "", meta: {} },
    raw: { peso: "70,5", altura: "170" },
    answers: {},
  });
  assert.equal(stopped.ok, false);
  if (!stopped.ok && "fieldErrors" in stopped) assert.equal(stopped.fieldErrors["patient.idade"], "Informe a idade em anos ou deixe em branco.");
  const nestedType = parseClinicalSubmission(imc, {
    patient: { nome: "Ana", idade: "", setor: "", data: "", meta: { leito: 2 as unknown as string } },
    raw: { peso: "70,5", altura: "170" },
    answers: {},
  });
  assert.equal(nestedType.ok, false);
  if (!nestedType.ok && "fieldErrors" in nestedType) assert.equal(nestedType.fieldErrors["patient.meta.leito"], "O campo precisa ser texto.");
  const admitted = parseClinicalSubmission(imc, {
    patient: { nome: "Ana", idade: "", setor: "Leito 2", data: "2026-11-13", meta: {} },
    raw: { peso: "70,5", altura: "170" },
    answers: {},
  });
  assert.equal(admitted.ok, true);
});

test("tipo errado não é convertido", () => {
  const imc = getTool("imc");
  assert.ok(imc);
  const numeric = evaluateFormula(imc, { peso: 70 as unknown as string, altura: "170" });
  assert.equal(numeric.ok, false);
  if (!numeric.ok) assert.equal(numeric.fieldErrors?.peso, "O campo precisa ser texto.");
  const scale = getTool("braden");
  assert.ok(scale);
  const answers = Object.fromEntries((scale.criteria ?? []).map((item) => [item.id, item.choices[0]?.value ?? 0]));
  answers[scale.criteria?.[0]?.id ?? ""] = "1" as unknown as number;
  const textAnswer = evaluateScale(scale, answers);
  assert.equal(textAnswer.ok, false);
});

test("todo resultado calculado passa pela mesma regra e o valor de exame não é arredondado", () => {
  const drip = getTool("gotejamento");
  assert.ok(drip);
  const half = evaluateFormula(drip, { volume: "3", horas: "2", minutos: "0", fator: "20" });
  assert.equal(half.ok, true);
  if (half.ok) assert.equal(half.outputs?.find((item) => item.id === "gotas")?.value, 0);
  const exam = getTool("exames-laboratoriais");
  assert.ok(exam);
  const result = evaluateFormula(exam, { exame: "0", valor: "4,2", sexo: "0" });
  assert.equal(result.ok, true);
  if (result.ok) {
    assert.equal(result.outputs?.[0].value, 4.2);
    assert.equal(result.outputs?.[0].digits, 1);
    assert.equal(result.rounding, undefined);
    assert.ok((result.outputs?.[0].text ?? "").length > 0);
  }
});

test("escala usa o mesmo atributo e o exame repetido não é marcado como reduzido", () => {
  const scale = getTool("braden");
  assert.ok(scale);
  const answers = Object.fromEntries((scale.criteria ?? []).map((item) => [item.id, item.choices[0]?.value ?? 0]));
  const result = evaluateScale(scale, answers);
  assert.equal(result.ok, true);
  if (result.ok) {
    assert.equal(result.rounding, "roundTiesToEven");
    assert.equal(result.reduced, false);
    assert.equal(reductionNote(result), "");
  }
  const drip = getTool("gotejamento");
  assert.ok(drip);
  const drops = evaluateFormula(drip, { volume: "500", horas: "2", minutos: "0", fator: "20" });
  assert.equal(drops.ok, true);
  if (drops.ok) {
    assert.equal(drops.reduced, true);
    assert.equal(reductionNote(drops), "Número reduzido.");
  }
});

test("a faixa usa o número já reduzido e a memória não inventa casa nem resultado", () => {
  const imc = getTool("imc");
  assert.ok(imc);
  const sobe = evaluateFormula(imc, { peso: "53.4", altura: "170" });
  assert.equal(sobe.ok, true);
  if (sobe.ok) {
    assert.equal(sobe.outputs?.find((item) => item.id === "imc")?.value, 18.5);
    assert.equal(sobe.band?.label, "Adequado");
  }
  const fica = evaluateFormula(imc, { peso: "53.3", altura: "170" });
  assert.equal(fica.ok, true);
  if (fica.ok) {
    assert.equal(fica.outputs?.find((item) => item.id === "imc")?.value, 18.4);
    assert.equal(fica.band?.label, "Baixo peso");
    assert.equal(fica.rows[0]?.value, "53,3 kg");
  }
  const inteiro = evaluateFormula(imc, { peso: "70", altura: "170" });
  assert.equal(inteiro.ok, true);
  if (inteiro.ok) {
    assert.equal(inteiro.rows[0]?.value, "70 kg");
    assert.equal(inteiro.rounding, "roundTiesToEven");
  }
  const quebrado = structuredClone(imc);
  quebrado.outputs = [...(quebrado.outputs ?? []), { id: "inexistente", label: "Extra", unit: "x", digits: 0 }];
  const faltou = evaluateFormula(quebrado, { peso: "70", altura: "170" });
  assert.equal(faltou.ok, false);
});

function marcar(tool: NonNullable<ReturnType<typeof getTool>>, escolhas: Record<string, number>) {
  return Object.fromEntries((tool.criteria ?? []).map((item) => [item.id, escolhas[item.id] ?? item.choices[0].value]));
}

test("Braden fecha 6 e 23 nas faixas declaradas", () => {
  const tool = getTool("braden");
  assert.ok(tool);
  const baixo = evaluateScale(tool, marcar(tool, {}));
  assert.equal(baixo.ok, true);
  if (baixo.ok) {
    assert.equal(baixo.total, 6);
    assert.equal(baixo.max, 23);
    assert.equal(baixo.band?.label, "Risco muito alto");
  }
  const alto = evaluateScale(tool, marcar(tool, { sensorial: 4, umidade: 4, atividade: 4, mobilidade: 4, nutricao: 4, friccao: 3 }));
  assert.equal(alto.ok, true);
  if (alto.ok) {
    assert.equal(alto.total, 23);
    assert.equal(alto.band?.label, "Sem risco");
  }
});

test("Morse soma os pesos impressos e não uma sequência de 1 em 1", () => {
  const tool = getTool("morse");
  assert.ok(tool);
  const nenhum = evaluateScale(tool, marcar(tool, {}));
  assert.equal(nenhum.ok, true);
  if (nenhum.ok) {
    assert.equal(nenhum.total, 0);
    assert.equal(nenhum.max, 125);
    assert.equal(nenhum.band?.label, "Risco baixo");
  }
  const medio = evaluateScale(tool, marcar(tool, { diagnostico: 15, marcha: 10 }));
  assert.equal(medio.ok, true);
  if (medio.ok) {
    assert.equal(medio.total, 25);
    assert.equal(medio.band?.label, "Risco médio");
  }
  const alto = evaluateScale(tool, marcar(tool, { quedas: 25, venoso: 20 }));
  assert.equal(alto.ok, true);
  if (alto.ok) {
    assert.equal(alto.total, 45);
    assert.equal(alto.band?.label, "Risco alto");
  }
  const teto = evaluateScale(tool, marcar(tool, { quedas: 25, diagnostico: 15, auxilio: 30, venoso: 20, marcha: 20, mental: 15 }));
  assert.equal(teto.ok, true);
  if (teto.ok) assert.equal(teto.total, 125);
});

test("Apgar soma cinco sinais de 0 a 2", () => {
  const tool = getTool("apgar");
  assert.ok(tool);
  const grave = evaluateScale(tool, marcar(tool, {}));
  assert.equal(grave.ok, true);
  if (grave.ok) {
    assert.equal(grave.total, 0);
    assert.equal(grave.max, 10);
    assert.equal(grave.band?.label, "Depressão grave");
  }
  const moderada = evaluateScale(tool, marcar(tool, { fc: 1, resp: 1, tonus: 1, reflexo: 1 }));
  assert.equal(moderada.ok, true);
  if (moderada.ok) {
    assert.equal(moderada.total, 4);
    assert.equal(moderada.band?.label, "Depressão moderada");
  }
  const boa = evaluateScale(tool, marcar(tool, { fc: 2, resp: 2, tonus: 2, reflexo: 1 }));
  assert.equal(boa.ok, true);
  if (boa.ok) {
    assert.equal(boa.total, 7);
    assert.equal(boa.band?.label, "Boa vitalidade");
  }
  const dez = evaluateScale(tool, marcar(tool, { fc: 2, resp: 2, tonus: 2, reflexo: 2, cor: 2 }));
  assert.equal(dez.ok, true);
  if (dez.ok) assert.equal(dez.total, 10);
});

test("Aldrete separa 6, 7 e 8", () => {
  const tool = getTool("aldrete");
  assert.ok(tool);
  const instavel = evaluateScale(tool, marcar(tool, { atividade: 0, respiracao: 0, circulacao: 0, consciencia: 0, saturacao: 0 }));
  assert.equal(instavel.ok, true);
  if (instavel.ok) {
    assert.equal(instavel.total, 0);
    assert.equal(instavel.max, 10);
    assert.equal(instavel.band?.label, "Paciente instável");
  }
  const seis = evaluateScale(tool, marcar(tool, { atividade: 2, respiracao: 2, circulacao: 2, consciencia: 0, saturacao: 0 }));
  assert.equal(seis.ok, true);
  if (seis.ok) {
    assert.equal(seis.total, 6);
    assert.equal(seis.band?.label, "Paciente instável");
  }
  const observa = evaluateScale(tool, marcar(tool, { atividade: 2, respiracao: 2, circulacao: 2, consciencia: 1, saturacao: 0 }));
  assert.equal(observa.ok, true);
  if (observa.ok) {
    assert.equal(observa.total, 7);
    assert.equal(observa.band?.label, "Manter em observação");
  }
  const alta = evaluateScale(tool, marcar(tool, { atividade: 2, respiracao: 2, circulacao: 2, consciencia: 2, saturacao: 0 }));
  assert.equal(alta.ok, true);
  if (alta.ok) {
    assert.equal(alta.total, 8);
    assert.equal(alta.band?.label, "Critério de recuperação atingido");
  }
});

test("gotejamento sem tempo não calcula e 1 h 30 min usa os 90 minutos", () => {
  const tool = getTool("gotejamento");
  assert.ok(tool);
  const parado = evaluateFormula(tool, { volume: "100", horas: "0", minutos: "0", fator: "20" });
  assert.equal(parado.ok, false);
  if (!parado.ok) assert.equal(parado.message, "Informe um tempo maior que zero.");
  const misto = evaluateFormula(tool, { volume: "100", horas: "1", minutos: "30", fator: "20" });
  assert.equal(misto.ok, true);
  if (misto.ok) {
    assert.equal(misto.outputs?.find((item) => item.id === "mlh")?.value, 66.7);
    assert.equal(misto.outputs?.find((item) => item.id === "gotas")?.value, 22);
    assert.match(misto.steps?.[0] ?? "", / = 90 min\.$/);
  }
});

test("Glasgow soma os componentes e lê a faixa de TCE do formulário", () => {
  const tool = getTool("glasgow");
  assert.ok(tool);
  const teto = evaluateScale(tool, { eye: 4, verbal: 5, motor: 6 });
  assert.equal(teto.ok, true);
  if (teto.ok) {
    assert.equal(teto.total, 15);
    assert.equal(teto.max, 15);
    assert.equal(teto.band?.label, "13–15 · leve (TCE)");
  }
  const piso = evaluateScale(tool, { eye: 1, verbal: 1, motor: 1 });
  assert.equal(piso.ok, true);
  if (piso.ok) {
    assert.equal(piso.total, 3);
    assert.equal(piso.band?.label, "3–8 · grave (TCE)");
  }
});

test("Norton nomeia as notas e o corte de 14", () => {
  const tool = getTool("norton");
  assert.ok(tool);
  const baixo = evaluateScale(tool, marcar(tool, {
    physical_condition: 1,
    mental_condition: 1,
    activity: 1,
    mobility: 1,
    incontinence: 1,
  }));
  assert.equal(baixo.ok, true);
  if (baixo.ok) {
    assert.equal(baixo.total, 5);
    assert.equal(baixo.max, 20);
    assert.equal(baixo.band?.label, "5–14 · risco sinalizado");
  }
});

test("escala numérica lê as faixas da página", () => {
  const tool = getTool("escalanumerica");
  assert.ok(tool);
  const forte = evaluateScale(tool, { dor: 7 });
  assert.equal(forte.ok, true);
  if (forte.ok) assert.equal(forte.band?.label, "Dor forte ou pior dor");
  const zero = evaluateScale(tool, { dor: 0 });
  assert.equal(zero.ok, true);
  if (zero.ok) assert.equal(zero.band?.label, "Sem dor");
});

test("qSOFA separa um critério de dois", () => {
  const tool = getTool("qsofa");
  assert.ok(tool);
  const baixo = evaluateScale(tool, marcar(tool, { fr: 1 }));
  assert.equal(baixo.ok, true);
  if (baixo.ok) assert.equal(baixo.band?.label, "Menos de dois critérios qSOFA");
  const alto = evaluateScale(tool, marcar(tool, { fr: 1, pa: 1 }));
  assert.equal(alto.ok, true);
  if (alto.ok) {
    assert.equal(alto.total, 2);
    assert.equal(alto.band?.label, "Dois ou três critérios qSOFA");
  }
});

test("insulina U-100 divide a dose por 100", () => {
  const tool = getTool("insulina");
  assert.ok(tool);
  const trinta = evaluateFormula(tool, { dose: "30", concentracao: "100" });
  assert.equal(trinta.ok, true);
  if (trinta.ok) assert.equal(trinta.outputs?.find((item) => item.id === "ml")?.value, 0.3);
  const cem = evaluateFormula(tool, { dose: "100", concentracao: "100" });
  assert.equal(cem.ok, true);
  if (cem.ok) assert.equal(cem.outputs?.find((item) => item.id === "ml")?.value, 1);
});

test("gestacional soma 280 dias a partir de 10 de fevereiro", () => {
  const tool = getTool("gestacional");
  assert.ok(tool);
  const resultado = evaluateFormula(tool, { dia: "10", mes: "2", ano: "2026" });
  assert.equal(resultado.ok, true);
  if (resultado.ok) assert.equal(resultado.outputs?.find((item) => item.id === "dpp")?.text, "17/11/2026");
  const invalida = evaluateFormula(tool, { dia: "31", mes: "2", ano: "2026" });
  assert.equal(invalida.ok, false);
});

test("gasometria só compara com a faixa impressa", () => {
  const tool = getTool("gasometria");
  assert.ok(tool);
  const dentro = evaluateFormula(tool, { ph: "7.40", paco2: "40", hco3: "24" });
  assert.equal(dentro.ok, true);
  if (dentro.ok) assert.match(dentro.outputs?.[0].text ?? "", /dentro da faixa/);
  const baixo = evaluateFormula(tool, { ph: "7.20", paco2: "40", hco3: "24" });
  assert.equal(baixo.ok, true);
  if (baixo.ok) assert.match(baixo.outputs?.[0].text ?? "", /pH: abaixo da faixa/);
});

test("CAM-ICU segue o algoritmo e não soma", () => {
  const tool = getTool("cam");
  assert.ok(tool);
  const fechado = evaluateScale(tool, { rass: -5, f1: 1, f2: 1, f4: 1 });
  assert.equal(fechado.ok, true);
  if (fechado.ok) assert.equal(fechado.band?.label, "Não avaliável neste momento");
  const negativo = evaluateScale(tool, { rass: 0, f1: 1, f2: 1, f4: 0 });
  assert.equal(negativo.ok, true);
  if (negativo.ok) assert.equal(negativo.band?.label, "CAM-ICU negativo (−)");
  const positivo = evaluateScale(tool, { rass: 0, f1: 1, f2: 1, f4: 1 });
  assert.equal(positivo.ok, true);
  if (positivo.ok) assert.equal(positivo.band?.label, "CAM-ICU positivo (+)");
  const derivado = evaluateScale(tool, { rass: 2, f1: 1, f2: 1, f4: 0 });
  assert.equal(derivado.ok, true);
  if (derivado.ok) assert.equal(derivado.band?.label, "CAM-ICU positivo (+)");
});

test("Barthel soma as dez atividades até 100", () => {
  const tool = getTool("barthel");
  assert.ok(tool);
  const cheio = evaluateScale(tool, Object.fromEntries((tool.criteria ?? []).map((item) => [item.id, Math.max(...item.choices.map((choice) => choice.value))])));
  assert.equal(cheio.ok, true);
  if (cheio.ok) {
    assert.equal(cheio.total, 100);
    assert.equal(cheio.max, 100);
  }
});
