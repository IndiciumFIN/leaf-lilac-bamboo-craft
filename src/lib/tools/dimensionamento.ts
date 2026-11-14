import type { ClinicalTool } from "@/lib/tools/types";

/** Planejamento pelo Parecer Normativo COFEN 01/2024. Não homologa e não revoga página antiga. */
export const dimensionamento: ClinicalTool = {
  slug: "dimensionamento",
  kind: "calculadora",
  category: "Gestão",
  title: "Dimensionamento de pessoal de enfermagem",
  lead: "Quadro de pessoal da unidade de internação pelo Parecer Normativo COFEN nº 1/2024. A Resolução 543/2017 está revogada. Isto não é homologação.",
  nandaMode: "nao-fechar",
  fields: [
    { id: "pcm", label: "Pacientes de cuidado mínimo", unit: "pacientes", min: 0, max: 999, step: 1 },
    { id: "pci", label: "Pacientes de cuidado intermediário", unit: "pacientes", min: 0, max: 999, step: 1 },
    { id: "pcad", label: "Pacientes de alta dependência", unit: "pacientes", min: 0, max: 999, step: 1 },
    { id: "pcsi", label: "Pacientes semi-intensivos", unit: "pacientes", min: 0, max: 999, step: 1 },
    { id: "pcit", label: "Pacientes intensivos", unit: "pacientes", min: 0, max: 999, step: 1 },
    { id: "ds", label: "Dias da semana", unit: "dias", min: 1, max: 7, step: 1 },
    { id: "chs", label: "Carga horária semanal contratual", unit: "horas", min: 1, max: 168, step: 1 },
    { id: "ist", label: "Índice de segurança técnica", unit: "%", min: 15, max: 100, step: 0.1 },
  ],
  outputs: [
    { id: "horas", label: "Horas de enfermagem nas 24 h", unit: "h", digits: 2 },
    { id: "qp", label: "Quadro de pessoal", unit: "profissionais", digits: 2 },
    { id: "enfermeiros", label: "Enfermeiros na proporção da maior carga", unit: "profissionais", digits: 2 },
    { id: "tecnicos", label: "Técnicos e auxiliares na mesma proporção", unit: "profissionais", digits: 2 },
  ],
  howTo: [
    "Some as horas: mínimo 4, intermediário 6, alta dependência 10, semi-intensivo 10, intensivo 18.",
    "Multiplique pelos dias da semana e por (1 + IST). O quadro do parecer escreve IST; a legenda do mesmo quadro define 15% como fator 1,15.",
    "Divida pela carga horária semanal do contrato.",
    "A proporção de enfermeiros segue a categoria com maior carga de horas. O arredondamento para pessoas inteiras é da instituição.",
  ],
  faqs: [
    {
      q: "A Resolução 543/2017 ainda vale?",
      a: "Não. A Resolução COFEN 743/2024 a revogou. O parâmetro de planejamento é o Parecer Normativo 1/2024. Há decisões judiciais sobre a competência de fixar dimensionamento; esta conta não as resolve.",
    },
  ],
  references: [
    "CONSELHO FEDERAL DE ENFERMAGEM. Parecer Normativo nº 1/2024. Parâmetros para o planejamento da força de trabalho da Enfermagem. Brasília: COFEN, 2024. https://www.cofen.gov.br/parecer-normativo-no-1-2024-cofen/",
    "CONSELHO FEDERAL DE ENFERMAGEM. Resolução nº 743/2024. Revoga a Resolução COFEN nº 543/2017. Brasília: COFEN, 2024.",
  ],
  related: ["fugulin"],
  publicacao: "candidata",
  holds: [
    "Sem snapshot com hash do parecer.",
    "A legenda do quadro usa (1+IST)=1,15; o multiplicador impresso diz IST.",
    "Proporções lidas da página pública, sem vetor oficial de teste.",
    "Decisões judiciais sobre dimensionamento não foram incorporadas. Não homologar.",
  ],
};
