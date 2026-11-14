import type { ComputeResult } from "@/lib/tools/types";
import { examePorIndice, interpretar } from "@/lib/tools/exames-laboratoriais";

const leituraExame: Record<string, string> = {
  indisponivel: "Faixa indisponível nesta base.",
  abaixo: "Abaixo da faixa de referência.",
  acima: "Acima da faixa de referência.",
  "na-faixa": "Dentro da faixa de referência.",
  "acima-do-minimo": "Acima do mínimo declarado. A base não traz máximo.",
};

/** O método de cada conta está em tool_formula. Estas funções só interpretam soma, gotejamento, imc, a faixa do exame e as contas cujo texto já está na página. */
export const formulas: Record<string, (values: Record<string, number>) => ComputeResult> = {
  gotejamento: (values) => {
    const minutes = values.horas * 60 + values.minutos;
    if (minutes <= 0) return { error: "Informe um tempo maior que zero." };
    const mlh = values.volume / (minutes / 60);
    const gotas = (values.volume * values.fator) / minutes;
    return { outputs: { mlh, gotas } };
  },
  imc: (values) => {
    const metros = values.altura / 100;
    return { outputs: { imc: values.peso / (metros * metros) } };
  },
  "exames-laboratoriais": (values) => {
    const exame = examePorIndice(values.exame);
    if (!exame) return { error: "Escolha um exame da lista." };
    const genero = values.sexo === 1 ? "homem" : values.sexo === 2 ? "mulher" : "nao-informado";
    const leitura = interpretar(exame, values.valor, genero);
    return {
      outputs: { situacao: values.valor },
      texts: { situacao: `${exame.nome}: ${leituraExame[leitura.situacao]}` },
    };
  },
  insulina: (values) => {
    if (values.concentracao !== 100) return { error: "Esta conta só vale para U-100. Outra concentração não entra." };
    return { outputs: { ml: values.dose / 100 } };
  },
  gestacional: (values) => {
    const dum = dataUtc(values.ano, values.mes, values.dia);
    if (!dum) return { error: "Data da última menstruação inválida." };
    const hoje = new Date();
    const inicioHoje = Date.UTC(hoje.getUTCFullYear(), hoje.getUTCMonth(), hoje.getUTCDate());
    const diasTotais = Math.round((inicioHoje - dum.getTime()) / 86400000);
    if (diasTotais < 0) return { error: "A data da última menstruação está no futuro." };
    const dpp = new Date(dum.getTime() + 280 * 86400000);
    const dia = String(dpp.getUTCDate()).padStart(2, "0");
    const mes = String(dpp.getUTCMonth() + 1).padStart(2, "0");
    return {
      outputs: { semanas: Math.floor(diasTotais / 7), dias: diasTotais % 7, dpp: diasTotais },
      texts: { dpp: `${dia}/${mes}/${dpp.getUTCFullYear()}` },
    };
  },
  gasometria: (values) => {
    const linhas = [
      faixa("pH", values.ph, 7.35, 7.45),
      faixa("PaCO₂", values.paco2, 35, 45),
      faixa("HCO₃", values.hco3, 22, 26),
    ];
    return { outputs: { leitura: values.ph }, texts: { leitura: linhas.join(" ") } };
  },
  dimensionamento: (values) => {
    if (values.ist < 15) return { error: "O parecer fixa o índice de segurança técnica em no mínimo 15%." };
    if (values.ds <= 0 || values.chs <= 0) return { error: "Dias e carga horária precisam ser maiores que zero." };
    const horas = values.pcm * 4 + values.pci * 6 + values.pcad * 10 + values.pcsi * 10 + values.pcit * 18;
    const qp = (horas * values.ds * (1 + values.ist / 100)) / values.chs;
    const categorias = [
      [values.pcm * 4, 0.33],
      [values.pci * 6, 0.33],
      [values.pcad * 10, 0.36],
      [values.pcsi * 10, 0.42],
      [values.pcit * 18, 0.52],
    ].filter(([carga]) => carga > 0);
    const maior = categorias.reduce((melhor, atual) => (atual[0] > melhor[0] ? atual : melhor), [0, 0.33]);
    const percentual = maior[1];
    return { outputs: { horas, qp, enfermeiros: qp * percentual, tecnicos: qp * (1 - percentual) } };
  },
};

function dataUtc(ano: number, mes: number, dia: number) {
  if (mes < 1 || mes > 12 || dia < 1 || dia > 31) return null;
  const data = new Date(Date.UTC(ano, mes - 1, dia));
  if (data.getUTCFullYear() !== ano || data.getUTCMonth() !== mes - 1 || data.getUTCDate() !== dia) return null;
  return data;
}

function faixa(nome: string, valor: number, minimo: number, maximo: number) {
  if (valor < minimo) return `${nome}: abaixo da faixa ${minimo}–${maximo}.`;
  if (valor > maximo) return `${nome}: acima da faixa ${minimo}–${maximo}.`;
  return `${nome}: dentro da faixa ${minimo}–${maximo}.`;
}
