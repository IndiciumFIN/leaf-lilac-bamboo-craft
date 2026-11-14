import type { ClinicalTool } from "@/lib/tools/types";

const publicada = "candidata" as const;

/** Contas cujo texto da página já traz a regra. Sem faixa que a página não tenha escrito. */
export const implanted: ClinicalTool[] = [
{
    slug: "escalanumerica",
    kind: "escala",
    category: "Dor",
    title: "Escala numérica de dor",
    lead: "0 é ausência de dor e 10 a pior dor concebível.",
    nandaMode: "nao-fechar",
    criteria: [
      {
        id: "dor",
        label: "Intensidade da dor agora",
        help: "Aponte o número de 0 a 10.",
        choices: [
          { value: 0, label: "0 · Sem dor" },
          { value: 1, label: "1 · Dor leve" },
          { value: 2, label: "2 · Dor leve" },
          { value: 3, label: "3 · Dor leve" },
          { value: 4, label: "4 · Dor moderada" },
          { value: 5, label: "5 · Dor moderada" },
          { value: 6, label: "6 · Dor moderada" },
          { value: 7, label: "7 · Dor forte ou pior dor" },
          { value: 8, label: "8 · Dor forte ou pior dor" },
          { value: 9, label: "9 · Dor forte ou pior dor" },
          { value: 10, label: "10 · Dor forte ou pior dor" },
        ],
      },
    ],
    bands: [
      { min: 0, max: 0, label: "Sem dor", tone: "ok", note: "Nota 0. Ausência de dor.", nanda: [] },
      { min: 1, max: 3, label: "Dor leve", tone: "info", note: "Notas de 1 a 3.", nanda: [] },
      { min: 4, max: 6, label: "Dor moderada", tone: "warn", note: "Notas de 4 a 6.", nanda: [] },
      { min: 7, max: 10, label: "Dor forte ou pior dor", tone: "danger", note: "Notas de 7 a 10. 10 é a pior dor concebível.", nanda: [] },
    ],
    howTo: [
      "Peça para apontar ou verbalizar o número que representa a dor agora.",
      "0 é ausência de dor e 10 a pior dor concebível.",
      "Leia a faixa da própria página: sem dor, leve, moderada ou forte.",
    ],
    faqs: [
      { q: "A nota substitui a avaliação?", a: "Não. Registre o número junto com a característica e a localização. A escala não fecha diagnóstico." },
    ],
    references: [
      "Página da escala numérica desta base: 0 é ausência de dor e 10 a pior dor concebível. Faixas 0, 1 a 3, 4 a 6 e 7 a 10.",
    ],
    related: ["braden"],
    publicacao: publicada,
  },
  {
    slug: "insulina",
    kind: "calculadora",
    category: "Medicação",
    title: "Cálculo de insulina",
    lead: "Volume para aspirar em U-100. A concentração é 100 UI por mL. A seringa não muda a concentração.",
    nandaMode: "nao-fechar",
    fields: [
      { id: "dose", label: "Dose prescrita", unit: "UI", min: 0.1, max: 1000, step: 0.1 },
    ],
    selects: [
      { id: "concentracao", label: "Concentração", options: [{ value: 100, label: "U-100 — 100 UI/mL" }] },
    ],
    outputs: [{ id: "ml", label: "Volume para aspiração", unit: "mL", digits: 2 }],
    howTo: [
      "Confirme que a apresentação é U-100. Se não for, não use esta conta.",
      "Divida a dose em UI por 100.",
      "Exemplos da página: 100 UI = 1,0 mL, 50 UI = 0,5 mL, 30 UI = 0,3 mL, 10 UI = 0,1 mL.",
    ],
    faqs: [
      { q: "A seringa de 1 mL muda a conta?", a: "Não. O tamanho da seringa não altera a concentração. Confira a graduação antes de aspirar." },
    ],
    references: [
      "Página de insulina desta base: U-100 é 100 UI/mL. ISMP Brasil, medicamentos de alta vigilância, 2019.",
    ],
    related: ["gotejamento"],
    publicacao: publicada,
  },
  {
    slug: "gestacional",
    kind: "calculadora",
    category: "Obstetrícia",
    title: "Idade gestacional e DPP",
    lead: "Conta a partir do primeiro dia da última menstruação. A página usa 40 semanas e a regra dos dias.",
    nandaMode: "nao-fechar",
    fields: [
      { id: "dia", label: "Dia da última menstruação", unit: "dia", min: 1, max: 31, step: 1 },
      { id: "mes", label: "Mês da última menstruação", unit: "mês", min: 1, max: 12, step: 1 },
      { id: "ano", label: "Ano da última menstruação", unit: "ano", min: 2015, max: 2030, step: 1 },
    ],
    outputs: [
      { id: "semanas", label: "Semanas", unit: "sem", digits: 0 },
      { id: "dias", label: "Dias além das semanas", unit: "d", digits: 0 },
      { id: "dpp", label: "Data provável do parto", unit: "", digits: 0 },
    ],
    howTo: [
      "Informe o primeiro dia da última menstruação.",
      "A idade gestacional é o número de dias até hoje, dividido por 7. O inteiro é a semana e o resto são os dias.",
      "A data provável soma 40 semanas, 280 dias. Exemplo da página: 10 de fevereiro cai em 17 de novembro.",
    ],
    faqs: [
      { q: "A ultrassonografia entra nesta conta?", a: "Não. A página manda estimar também pela ultrassonografia. Aqui só entra a data menstrual." },
    ],
    references: [
      "Página gestacional desta base: 40 semanas a partir da última menstruação. Brasil. Ministério da Saúde. Cadernos de Atenção Básica, n. 32, 2012.",
    ],
    related: ["apgar"],
    publicacao: publicada,
  },
  {
    slug: "gasometria",
    kind: "calculadora",
    category: "Laboratório",
    title: "Gasometria arterial",
    lead: "Compara pH, PaCO₂ e HCO₃ com as faixas impressas na página. Não fecha o distúrbio ácido-base.",
    nandaMode: "nao-fechar",
    fields: [
      { id: "ph", label: "pH", unit: "", min: 6, max: 8, step: 0.01 },
      { id: "paco2", label: "PaCO₂", unit: "mmHg", min: 1, max: 200, step: 0.1 },
      { id: "hco3", label: "HCO₃", unit: "mEq/L", min: 1, max: 80, step: 0.1 },
    ],
    outputs: [{ id: "leitura", label: "Leitura das faixas", unit: "", digits: 2 }],
    bandFrom: "leitura",
    howTo: [
      "Informe pH, PaCO₂ e HCO₃. A página pede no mínimo esses três.",
      "Faixas impressas: pH 7,35 a 7,45; PaCO₂ 35 a 45 mmHg; HCO₃ 22 a 26 mEq/L.",
      "O texto só diz se o valor está abaixo, dentro ou acima. Não nomeia acidose nem alcalose.",
    ],
    faqs: [
      { q: "Valor fora da faixa é bloqueado?", a: "Não. O limite do campo só impede número impossível. Fora da faixa de referência, a leitura aponta abaixo ou acima." },
    ],
    references: [
      "Página de gasometria desta base. Goldwasser e colaboradores, Jornal Brasileiro de Pneumologia, 2018, como citado na página.",
    ],
    related: ["imc"],
    publicacao: publicada,
  },
];
