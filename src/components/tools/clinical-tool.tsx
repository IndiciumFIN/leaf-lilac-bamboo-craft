import { useMemo, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type Resolver } from "react-hook-form";
import { ReferenceList } from "@/components/article/pieces";
import { ClinicalForm, type ClinicalPatient, type ClinicalValues } from "@/components/tools/clinical-form";
import { hasBlock } from "@/lib/component-contract";
import { ClinicalSheet } from "@/components/tools/clinical-sheet";
import { ToolEcosystem, ToolFeedback, ToolMeta, ToolTutorial, ToolViewBar, useToolView } from "@/components/tools/tool-desk";
import { Breadcrumb } from "@/components/site/breadcrumb";
import { RelatedContent } from "@/components/site/related-content";
import { PageHero } from "@/components/page-hero";
import { PageTools } from "@/components/site/page-tools";
import { formatNumber, reductionNote, type ToolFailure, type ToolSuccess } from "@/lib/tools/engine";
import { renderAdmittedResult } from "@/lib/tools/engine-guard";
import { clinicalSchema } from "@/lib/tools/input-schema";
import { runClinical } from "@/lib/tools/clinical-run";
import { getTool, tools } from "@/lib/tools/catalog";
import { disclaimer, type ClinicalTool } from "@/lib/tools/types";
import { downloadDocx } from "@/lib/docx";
import { useChrome } from "@/lib/chrome";
import { contractOf } from "@/lib/template-contract";

type Patient = ClinicalPatient;

function resultText(result: ToolSuccess) {
  const base = result.outputs
    ? result.outputs.map((output) => output.text ?? `${output.label}: ${formatNumber(output.value, output.digits)} ${output.unit}`).join(" · ")
    : `${result.totalLabel}: ${result.total}`;
  const note = reductionNote(result);
  const withNote = note ? `${base} · ${note}` : base;
  return result.band ? `${withNote} · ${result.band.label}` : withNote;
}

function today() {
  const now = new Date();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${now.getFullYear()}-${month}-${day}`;
}

function emptyPatient(tool: ClinicalTool): Patient {
  const meta: Record<string, string> = {};
  for (const field of tool.metaFields ?? []) meta[field.id] = field.options[0]?.value ?? "";
  return { nome: "", idade: "", setor: "", data: today(), meta };
}

function initialRaw(tool: ClinicalTool) {
  const initial: Record<string, string> = {};
  for (const field of tool.selects ?? []) initial[field.id] = String(field.options[0]?.value ?? "");
  return initial;
}

export function ClinicalToolPage({ tool, area = "public" }: { tool: ClinicalTool; area?: "public" | "assinante" }) {
  const { locale, t } = useChrome();
  const { view, change, compact } = useToolView();
  const canRenderForm = contractOf("ferramenta").resources.includes("formulario");
  const canRenderLaudo = contractOf("ferramenta").resources.includes("laudo");
  const [result, setResult] = useState<ToolSuccess | ToolFailure | null>(null);
  const [notes, setNotes] = useState("");
  const form = useForm<ClinicalValues>({
    resolver: zodResolver(clinicalSchema(tool)) as unknown as Resolver<ClinicalValues>,
    defaultValues: {
      kind: tool.kind,
      patient: emptyPatient(tool),
      answers: {},
      raw: initialRaw(tool),
    },
  });
  const patient = form.watch("patient");
  const answers = form.watch("answers");
  const raw = form.watch("raw");

  const filled = (tool.criteria ?? []).filter((criterion) => answers[criterion.id] !== undefined).length;
  const related = useMemo(
    () => tool.related.map((slug) => getTool(slug)).filter((item): item is ClinicalTool => Boolean(item)),
    [tool],
  );

  function calculate() {
    void form.handleSubmit(() => {
      const next = runClinical(tool, form.getValues());
      setResult(next);
      document.getElementById("resultado")?.focus();
    }, (errors) => {
      setResult(null);
      const rawId = errors.raw && typeof errors.raw === "object" ? Object.keys(errors.raw)[0] : undefined;
      const answerId = errors.answers && typeof errors.answers === "object" ? Object.keys(errors.answers)[0] : undefined;
      const target = answerId ? `criterio-${answerId}` : rawId ? `campo-${rawId}` : errors.patient ? "campo-nome" : "resultado";
      document.getElementById(target)?.focus();
    })();
  }

  function saveDoc() {
    const shown = result ? renderAdmittedResult(result) : null;
    downloadDocx(`${tool.slug}-laudo.docx`, [
      { text: "Calculadoras de Enfermagem", bold: true },
      { text: tool.title, bold: true },
      ...(hasBlock(tool.kind, "paciente")
        ? [
            { text: `Paciente: ${patient.nome || "Não informado"}` },
            { text: `Idade: ${patient.idade || "Não informada"}` },
            { text: `Unidade / leito: ${patient.setor || "Não informado"}` },
            { text: `Data: ${patient.data || "Não informada"}` },
          ]
        : []),
      ...(tool.metaFields ?? []).map((field) => ({
        text: `${field.label}: ${field.options.find((option) => option.value === patient.meta[field.id])?.label ?? "Não informado"}`,
      })),
      { text: `Resultado: ${shown ? resultText(shown) : "Não calculado"}`, bold: true },
      ...(shown?.band ? [{ text: `Faixa: ${shown.band.label}. ${shown.band.note}` }] : []),
      ...(shown?.steps ? shown.steps.map((step) => ({ text: step })) : []),
      ...(shown ? shown.rows.map((row) => ({ text: `${row.label}: ${row.value} (máx. ${row.max})` })) : []),
      ...(shown && tool.kind === "escala" && shown.band?.nanda.length ? [{ text: `NANDA, só no laudo: ${shown.band.nanda.join("; ")}` }] : []),
      ...(notes.trim() ? [{ text: `Observações: ${notes.trim()}` }] : []),
      { text: disclaimer },
    ]);
  }

  function clearCalc() {
    form.setValue("answers", {});
    form.setValue("raw", initialRaw(tool));
    setResult(null);
  }

  const extras = (
    <>
      {tool.specific?.length ? (
        <section className="paper tool-block no-print">
          <h2>Desta ferramenta</h2>
          <ul className="plain-list">{tool.specific.map((item) => <li key={item}>{item}</li>)}</ul>
        </section>
      ) : null}
      {compact ? (
        <section className="paper tool-block no-print">
          <h2>Referências</h2>
          <ReferenceList items={tool.references} />
        </section>
      ) : null}
      <section className="paper tool-block no-print">
        <h2>Como usar</h2>
        <ol className="plain-list">{tool.howTo.map((step) => <li key={step}>{step}</li>)}</ol>
      </section>
      {tool.faqs.length ? (
      <section className="paper tool-block no-print">
        <h2>Dúvidas frequentes</h2>
        {tool.faqs.map((faq) => (
          <details key={faq.q}>
            <summary>{faq.q}</summary>
            <p>{faq.a}</p>
          </details>
        ))}
      </section>
      ) : null}
      <RelatedContent
        items={related.map((item) => ({
          title: item.title,
          text: item.category,
          to: area === "assinante" ? "/assinante/ferramentas/$slug" as const : "/ferramentas/$slug" as const,
          params: { slug: item.slug },
        }))}
      />
      <ToolEcosystem compact={false} />
    </>
  );

  return (
    <>
      {locale !== "pt-BR" ? <p className="lang-note">{t("clinicalLock")}</p> : null}
      <article className="tool-page" lang="pt-BR">
      <Breadcrumb
        items={area === "assinante"
          ? [{ label: "Área do assinante", to: "/assinante" }, { label: tool.title }]
          : [
              { label: "Início", to: "/" },
              { label: tool.kind === "escala" ? "Escalas" : "Calculadoras", to: "/secao/$slug", params: { slug: tool.kind === "escala" ? "escalas" : "calculadoras" } },
              { label: tool.title },
            ]}
      />
      <PageHero eyebrow={tool.category} title={tool.title} lead={tool.lead} />
      <PageTools kind="ferramenta" onDocx={canRenderLaudo ? saveDoc : undefined} onClear={clearCalc} />

      {canRenderForm ? (
        <ClinicalForm
          tool={tool}
          control={form.control}
          errors={form.formState.errors}
          answers={answers}
          result={result}
          filled={filled}
          onCalculate={calculate}
          onClearCalc={clearCalc}
          onClearPatient={() => form.setValue("patient", emptyPatient(tool))}
          compact={compact}
        />
      ) : null}
      {canRenderLaudo ? <ClinicalSheet tool={tool} patient={patient} raw={raw} answers={answers} notes={notes} result={result} /> : null}
      <ToolMeta tool={tool} />
      <ToolViewBar view={view} onChange={change} />
      <div className="tool-switch no-print">
        <ToolTutorial kind={tool.kind} />
        <ToolFeedback />
      </div>

      {compact ? (
        <details className="tool-more no-print">
          <summary>Mais</summary>
          {extras}
        </details>
      ) : extras}
      </article>
    </>
  );
}
