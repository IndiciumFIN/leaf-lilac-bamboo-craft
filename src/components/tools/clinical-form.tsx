import { Calculator, Eraser } from "lucide-react";
import { Controller, type Control, type FieldErrors } from "react-hook-form";
import { ReferenceList } from "@/components/article/pieces";
import { CalcMemory, Hint, MemoryTable, Meter, Panel, ScoreCard, Toast } from "@/components/tools/interface";
import { hasBlock } from "@/lib/component-contract";
import type { ToolFailure, ToolSuccess } from "@/lib/tools/engine";
import type { ClinicalSubmission } from "@/lib/tools/input-schema";
import type { ClinicalTool } from "@/lib/tools/types";

export type ClinicalPatient = { nome: string; idade: string; setor: string; data: string; meta: Record<string, string> };
export type ClinicalValues = ClinicalSubmission & { kind: ClinicalTool["kind"] };

function textOf(error: { message?: unknown } | undefined) {
  return typeof error?.message === "string" ? error.message : "";
}

export function ClinicalForm({
  tool,
  control,
  errors,
  answers,
  result,
  filled,
  onCalculate,
  onClearCalc,
  onClearPatient,
  compact = false,
}: {
  tool: ClinicalTool;
  control: Control<ClinicalValues>;
  errors: FieldErrors<ClinicalValues>;
  answers: Record<string, number>;
  result: ToolSuccess | ToolFailure | null;
  filled: number;
  onCalculate: () => void;
  onClearCalc: () => void;
  onClearPatient: () => void;
  compact?: boolean;
}) {
  const showPatient = hasBlock(tool.kind, "paciente");
  const criteria = tool.criteria ?? [];
  const hasInput = criteria.length > 0 || (tool.fields?.length ?? 0) > 0 || (tool.selects?.length ?? 0) > 0;
  if (!hasInput) return null;
  const rawErrors = errors.raw as Record<string, { message?: string }> | undefined;
  const answerErrors = errors.answers as Record<string, { message?: string }> | undefined;
  const toastMessage = result && !result.ok ? result.message : result?.ok ? "Cálculo pronto." : null;
  return (
    <div className="clinical-form tool-layout">
      <div className="tool-stack">
        {showPatient ? (
        <Panel title="Dados do paciente" note={<p className="tool-help">Fica só nesta tela. Não entra em cookie nem no navegador.</p>}>
          <div className="patient-grid">
            <label className="field"><span>Nome</span>
              <Controller name="patient.nome" control={control} render={({ field }) => <input id="campo-nome" autoComplete="off" aria-invalid={textOf(errors.patient?.nome) ? true : undefined} value={field.value} onChange={(event) => field.onChange(event.target.value)} />} />
              {textOf(errors.patient?.nome) ? <small className="err">{textOf(errors.patient?.nome)}</small> : null}
            </label>
            <label className="field"><span>Idade</span>
              <Controller name="patient.idade" control={control} render={({ field }) => <input id="campo-idade" aria-invalid={textOf(errors.patient?.idade) ? true : undefined} value={field.value} onChange={(event) => field.onChange(event.target.value)} />} />
              {textOf(errors.patient?.idade) ? <small className="err">{textOf(errors.patient?.idade)}</small> : null}
            </label>
            <label className="field"><span>Unidade / leito</span>
              <Controller name="patient.setor" control={control} render={({ field }) => <input id="campo-setor" aria-invalid={textOf(errors.patient?.setor) ? true : undefined} value={field.value} onChange={(event) => field.onChange(event.target.value)} />} />
              {textOf(errors.patient?.setor) ? <small className="err">{textOf(errors.patient?.setor)}</small> : null}
            </label>
            <label className="field"><span>Data</span>
              <Controller name="patient.data" control={control} render={({ field }) => <input id="campo-data" type="date" aria-invalid={textOf(errors.patient?.data) ? true : undefined} value={field.value} onChange={(event) => field.onChange(event.target.value)} />} />
              {textOf(errors.patient?.data) ? <small className="err">{textOf(errors.patient?.data)}</small> : null}
            </label>
            {(tool.metaFields ?? []).map((field) => (
              <label key={field.id} className="field">
                <span>{field.label}</span>
                <Controller name={`patient.meta.${field.id}`} control={control} render={({ field: item }) => (
                  <select value={item.value ?? ""} onChange={(event) => item.onChange(event.target.value)}>
                    {field.options.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
                  </select>
                )} />
              </label>
            ))}
          </div>
        </Panel>
        ) : null}
        <section className="paper tool-block">
          <div className="section-row">
            <h2>{tool.kind === "escala" ? "Critérios" : "Dados para cálculo"}</h2>
            {tool.kind === "escala" ? <p className="tool-help">{filled}/{criteria.length}</p> : null}
          </div>
          {tool.kind === "escala" ? <Meter value={filled} max={criteria.length} label="Critérios preenchidos" /> : null}
          {tool.kind === "escala"
            ? criteria.map((criterion) => {
                const max = Math.max(...criterion.choices.map((choice) => choice.value));
                const value = answers[criterion.id] ?? 0;
                const missing = textOf(answerErrors?.[criterion.id]);
                return (
                <fieldset key={criterion.id} className={missing ? "criterion criterion-miss" : "criterion"} aria-invalid={missing ? true : undefined}>
                  <legend>{criterion.label} <Hint text={criterion.help} /></legend>
                  <Meter value={answers[criterion.id] === undefined ? 0 : value} max={max} label={criterion.label} />
                  <div className="choice-list">
                    {criterion.choices.map((choice) => (
                      <Controller
                        key={choice.value}
                        name={`answers.${criterion.id}`}
                        control={control}
                        render={({ field }) => (
                          <label className={field.value === choice.value ? "choice choice-on" : "choice"}>
                            <input
                              id={choice.value === criterion.choices[0]?.value ? `criterio-${criterion.id}` : undefined}
                              type="radio"
                              name={criterion.id}
                              value={choice.value}
                              checked={field.value === choice.value}
                              onChange={() => field.onChange(choice.value)}
                            />
                            <b>{choice.value}</b>
                            <span>{choice.label}</span>
                          </label>
                        )}
                      />
                    ))}
                  </div>
                  {missing ? <small className="err">{missing}</small> : null}
                </fieldset>
                );
              })
            : (
              <>
                {(tool.fields ?? []).map((field) => {
                  const message = textOf(rawErrors?.[field.id]);
                  return (
                  <label key={field.id} className="field">
                    <span>{field.label} ({field.unit}) <abbr title="Obrigatório">*</abbr></span>
                    <Controller name={`raw.${field.id}`} control={control} render={({ field: item }) => (
                      <input
                        id={`campo-${field.id}`}
                        inputMode="decimal"
                        min={field.min}
                        max={field.max}
                        step={field.step}
                        aria-required="true"
                        aria-invalid={message ? true : undefined}
                        aria-describedby={message ? `limite-${field.id} erro-${field.id}` : `limite-${field.id}`}
                        title={`De ${field.min} a ${field.max} ${field.unit}`}
                        value={item.value ?? ""}
                        aria-label={field.label}
                        onChange={(event) => item.onChange(event.target.value)}
                      />
                    )} />
                    <small id={`limite-${field.id}`} className="tool-help">De {field.min} a {field.max} {field.unit}.</small>
                    {message ? <small id={`erro-${field.id}`} className="err">{message}</small> : null}
                  </label>
                  );
                })}
                {(tool.selects ?? []).map((field) => (
                  <fieldset key={field.id} className="criterion">
                    <legend>{field.label}</legend>
                    <div className="choice-list">
                      {field.options.map((option, index) => (
                        <Controller
                          key={option.value}
                          name={`raw.${field.id}`}
                          control={control}
                          render={({ field: item }) => (
                            <label className={item.value === String(option.value) ? "choice choice-on" : "choice"}>
                              <input
                                id={index === 0 ? `campo-${field.id}` : undefined}
                                type="radio"
                                name={field.id}
                                checked={item.value === String(option.value)}
                                onChange={() => item.onChange(String(option.value))}
                              />
                              <span>{option.label}</span>
                            </label>
                          )}
                        />
                      ))}
                    </div>
                  </fieldset>
                ))}
              </>
            )}
          <div className="tool-actions">
            <button className="btn-navy btn-sm" type="button" onClick={onCalculate}><Calculator size={16} aria-hidden="true" /> Calcular</button>
            <button className="btn-ghost btn-sm" type="button" onClick={onClearCalc}><Eraser size={16} aria-hidden="true" /> Limpar cálculo</button>
            {showPatient ? <button className="btn-ghost btn-sm" type="button" onClick={onClearPatient}>Limpar paciente</button> : null}
          </div>
        </section>
      </div>
      <aside className="paper tool-result" id="resultado" tabIndex={-1} aria-live="polite">
        <h2>Resultado</h2>
        {!result ? (
          <div className="tool-result-placeholder">
            <p className="tool-help">Aguardando cálculo. Confira o preenchimento antes de calcular.</p>
            {tool.kind === "escala" ? <p className="tool-help">Critérios preenchidos: {filled} de {criteria.length}.</p> : <p className="tool-help">O resultado e a memória do cálculo aparecem aqui depois da validação.</p>}
          </div>
        ) : null}
        {result && !result.ok ? <p className="err" role="alert">{result.message}</p> : null}
        {result?.ok ? <ScoreCard result={result} /> : null}
        {result?.ok && result.band ? <p className={`tone-${result.band.tone}`}><b>Interpretação:</b> {result.band.note}</p> : null}
        {result?.ok && hasBlock(tool.kind, "memoria") ? <MemoryTable result={result} /> : null}
        {result?.ok && result.steps && hasBlock(tool.kind, "memoria-calculo") ? <CalcMemory steps={result.steps} /> : null}
      </aside>
      {compact || !hasBlock(tool.kind, "referencia") ? null : (
        <section className="paper tool-block tool-refs">
          <h2>Referências</h2>
          <ReferenceList items={tool.references} />
        </section>
      )}
      <Toast message={toastMessage} />
    </div>
  );
}
