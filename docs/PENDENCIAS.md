# Pendencias — branch-bibliotecas

Gerado por `scripts/generate-pendencias.mjs` a partir do estado MEDIDO em **2026-11-14 22:46Z**.
Nada aqui vem de memoria: cada item carrega a evidencia que o produziu.

> A lista so cresce quando algo esta de fato por fazer. Se um gate passa, o item desaparece.

## Estado apurado

| Medida | Valor |
|---|---|
| GATE VERDE | **12** |
| GATE VERMELHO | **0** |
| DESVIO DE TEMPLATE | **0** |
| TEMPLATE SEM PAGINA | **0** |
| UTC EM ABERTO | **12** |
| SCHEMA CKO IMPLEMENTADO | **0** |
| SCHEMA CKO AUSENTE | **41** |

## Politica CKO (CKO-POL-UT-001) (28)

### UTC-003 — verdade clinica governada em runtime
- **Estado:** NAO COBERTO PELO GATE
- **Detalhe:** primeiro na ordem: esta na lista de HOLDs da Aldrete
- **Evidencia:** `docs/CKO-POL-UT-001.md`

### UTC-023 — os 7 estados de uma ferramenta
- **Estado:** NAO COBERTO PELO GATE
- **Detalhe:** a pagina tem 2 (Aguardando / Calculado)
- **Evidencia:** `docs/CKO-POL-UT-001.md`

### UTC-024 — formula declarativa + test vectors
- **Estado:** NAO COBERTO PELO GATE
- **Detalhe:** formulas.ts e engine.test.ts existem. O contrato formula.schema.json ainda não recebe test_vector_refs.
- **Evidencia:** `docs/CKO-POL-UT-001.md`

### UTC-028 — contrato de resultado
- **Estado:** NAO COBERTO PELO GATE
- **Detalhe:** o motor devolve outputs. clinical_result.schema.json não é lido em runtime.
- **Evidencia:** `docs/CKO-POL-UT-001.md`

### UTC-053 — regras de pontuacao
- **Estado:** NAO COBERTO PELO GATE
- **Detalhe:** as escalas somam no motor. clinical_rule.schema.json não é lido.
- **Evidencia:** `docs/CKO-POL-UT-001.md`

### UTC-056 — faixas de referencia por faixa etaria
- **Estado:** NAO COBERTO PELO GATE
- **Detalhe:** exames-laboratoriais tem faixa. Não há faixa etária governada.
- **Evidencia:** `docs/CKO-POL-UT-001.md`

### UTC-071 — reconhecimento do consumidor
- **Estado:** NAO COBERTO PELO GATE
- **Detalhe:** parcial: route-registry e contract-index existem.
- **Evidencia:** `docs/CKO-POL-UT-001.md`

### UTC-072 — E2E
- **Estado:** NAO COBERTO PELO GATE
- **Detalhe:** audit-run tem sondas Playwright. O diretório scripts/e2e/ não existe.
- **Evidencia:** `docs/CKO-POL-UT-001.md`

### UTC-080 — ABNT NBR 6023
- **Estado:** NAO COBERTO PELO GATE
- **Detalhe:** src/lib/research/abnt.ts formata referência. Não há teste no gate.
- **Evidencia:** `docs/CKO-POL-UT-001.md`

### UTC-081 — ABNT NBR 10520
- **Estado:** NAO COBERTO PELO GATE
- **Detalhe:** formatInText existe no mesmo arquivo. Não há teste no gate.
- **Evidencia:** `docs/CKO-POL-UT-001.md`

### UTC-082 — ABNT NBR 5891
- **Estado:** NAO COBERTO PELO GATE
- **Detalhe:** numeric-rule.ts executa roundTiesToEven. O texto da norma não foi depositado.
- **Evidencia:** `docs/CKO-POL-UT-001.md`

### UTC-097 — disclaimer de emergencia
- **Estado:** DECISAO DO DONO
- **Detalhe:** DECISAO DO DONO
- **Evidencia:** `docs/CKO-POL-UT-001.md`

### Paridade com os 56 schemas do CKO
- **Estado:** 0 IMPLEMENTADO · 7 PARCIAL · 8 DECLARADO-MORTO · 41 AUSENTE
- **Detalhe:** nenhum schema esta integralmente implementado; a cobertura dos campos obrigatorios do CKO estabiliza em 0,50-0,57
- **Evidencia:** `audit/cko-parity.v1.json · docs/PARIDADE-CKO.md`

### authority_binding — 5 campo(s) declarados e nunca lidos
- **Estado:** PARCIAL
- **Detalhe:** requirement_id, validity, validator_ids, evidence_bundle_ids, exception_reason
- **Evidencia:** `audit/cko-parity.v1.json#authority_binding`

### clinical_result — 7 campo(s) declarados e nunca lidos
- **Estado:** PARCIAL
- **Detalhe:** tool_ref, raw_value_ref, normalized_value_ref, precision_policy_ref, interpretation_ref, replay_hash_ref, unit_ref
- **Evidencia:** `audit/cko-parity.v1.json#clinical_result`

### clinical_rule — 7 campo(s) declarados e nunca lidos
- **Estado:** DECLARADO-MORTO
- **Detalhe:** rule_kind, antecedents, consequences, authority_binding_refs, applicability_ref, fail_mode, test_vector_refs
- **Evidencia:** `audit/cko-parity.v1.json#clinical_rule`

### component — 9 campo(s) declarados e nunca lidos
- **Estado:** PARCIAL
- **Detalhe:** owner_module, semantic_role, props_schema_ref, state_machine_ref, design_system_token_refs, a11y_profile_ref, reusability_scope, deprecated_aliases, exceptions
- **Evidencia:** `audit/cko-parity.v1.json#component`

### field_definition — 8 campo(s) declarados e nunca lidos
- **Estado:** PARCIAL
- **Detalhe:** semantic_concept_ref, value_type, privacy_policy, applicability_ref, unit_ref, validation_rule_ids, message_key, allowed_values_ref
- **Evidencia:** `audit/cko-parity.v1.json#field_definition`

### formula — 10 campo(s) declarados e nunca lidos
- **Estado:** DECLARADO-MORTO
- **Detalhe:** expression_ast_ref, input_field_refs, output_quantity_ref, rounding_mode, rounding_stage, calculation_precision, display_precision, test_vector_refs, source_binding_refs, override_justification_ref
- **Evidencia:** `audit/cko-parity.v1.json#formula`

### inference — 6 campo(s) declarados e nunca lidos
- **Estado:** DECLARADO-MORTO
- **Detalhe:** inference_class, allowed_use, source_claim_refs, model_or_rule_ref, human_review, prohibited_authority_mutation
- **Evidencia:** `audit/cko-parity.v1.json#inference`

### interpretation — 7 campo(s) declarados e nunca lidos
- **Estado:** PARCIAL
- **Detalhe:** result_ref, rule_refs, population_ref, limitations, evidence_refs, review_state, display_message_key
- **Evidencia:** `audit/cko-parity.v1.json#interpretation`

### privacy — 9 campo(s) declarados e nunca lidos
- **Estado:** DECLARADO-MORTO
- **Detalhe:** sensitive_capture, lgpd_capture, optional_context_fields, forbidden_fields, persistence, transmission, analytics, advertising, logs
- **Evidencia:** `audit/cko-parity.v1.json#privacy`

### source — 5 campo(s) declarados e nunca lidos
- **Estado:** PARCIAL
- **Detalhe:** retrieved_at, effective_from, effective_until, license_ref, citacao
- **Evidencia:** `audit/cko-parity.v1.json#source`

### tool — 24 campo(s) declarados e nunca lidos
- **Estado:** PARCIAL
- **Detalhe:** input_bindings, engine_ref, result_schema_ref, privacy_profile, safety_profile, test_vector_refs, inference_policy_ref, ui_profile_ref, output_precision_policy_ref, authority_binding_refs, field_definition_refs, formula_ref, rule_refs, interpretation_ref, result_ref, component_refs, about_tool, required_fields, conditional_fields, evidence_refs, patient_safety, seo_profile_ref, i18n_profile_ref, analytics_profile_ref
- **Evidencia:** `audit/cko-parity.v1.json#tool`

### 8 perfis UE-LTS v0.2.0 — versao materializada
- **Estado:** PASS_WITH_SCOPED_HOLDS
- **Detalhe:** 8/8 perfis com layout_contract por canal e governance (facts_from_canonical_only, rights/a11y/evidence gates). O proprio pacote declara browser_pixel_qa=0 e print_preflight=0 (G6 HOLD_SCOPED).
- **Evidencia:** `contracts/cko-editorial/profiles/*.json · evidence/validation_report.json`

### renderer universal — 21 linhas, 6 de 27 blocos
- **Estado:** STUB
- **Detalhe:** renderBlock/renderProjection cobrem action_bar, claim, figure, lead, references, title. Faltam 21 blocos. G5 marca PASS por existir, nao por cobrir.
- **Evidencia:** `contracts/cko-editorial/renderer/web/universal_renderer.js`

### 6 schemas do UE-LTS fora do catalogo de 56
- **Estado:** AUSENTES NA BRANCH
- **Detalhe:** block_instance, projection_request, template_manifest, content_projection_classification, resource_binding, assessment_item
- **Evidencia:** `contracts/cko-editorial/schemas/`

### md_gate CLOSED
- **Estado:** FECHADO POR DECISAO
- **Detalhe:** enquanto fechado, nada pode ir a RELEASED — a Aldrete segue como candidata, fora do indice
- **Evidencia:** `registers/governance/find-register.v1.json`

## Design system (3)

### Token mapping do pacote CKO
- **Estado:** NAO INICIADO
- **Detalhe:** src/styles/library-canonical.css
- **Evidencia:** `src/lib/template-applicability.ts / registers/design/`

### Token mapping do pacote CKO — VEREDITO
- **Estado:** NOT_APPLICABLE_JUSTIFIED
- **Detalhe:** a paleta semantica do CKO (391 tokens, 8 camadas) cobre 9 de 26 valores do nosso DS. Faltam navy-deep #163269, sky #4a90e2, ink #0f2440, canvas #f9fafb e foco #ff0 — 5 dos 9 tokens que o dono congelou. Mapear sobrescreveria a paleta congelada.
- **Evidencia:** `contracts/cko-tokens/tokens/02-semantic.tokens.json vs src/styles.css @theme`

### Paleta congelada do dono — 9/9tokens presentes no codigo
- **Estado:** CONFORME
- **Detalhe:** navy, navy-mid, navy-deep, sky, ink, slate, muted, canvas e foco #ff0 (shell.tsx) conferem contra src/styles.css e shell.tsx
- **Evidencia:** `src/styles.css @theme · src/components/site/shell.tsx`

## Conteudo (5)

### Acervo de imagem das 87 paginas de curiosidade
- **Estado:** SLOTS RESERVADOS, SEM CONTEUDO
- **Detalhe:** nenhuma pagina escrita — texto clinico nao se inventa
- **Evidencia:** `src/lib/content/articles/`

### 27 libraries do CKO — homologacao clinica
- **Estado:** NOT_REVIEWED · jurisdiction decision_required
- **Detalhe:** 568 blocos de texto real e 325 modulos; review_status=not_reviewed, evidence_verification_status=not_verified, approved_by=null. Estrutura PASS, conteudo nao verificado.
- **Evidencia:** `contracts/cko-bibliotecas/validation/validation.json`

### 18 libraries sem equivalente no acervo atual
- **Estado:** MATERIA-PRIMA EXTRAIDA, NAO PUBLICADA
- **Detalhe:** doencas, epidemiologia, exames-laboratoriais, ferimentos, geriatria, legislacao, materiais-cirurgicos, notificacao-compulsoria, pediatria, protocolos-enfermagem, saude-mental, seguranca-do-paciente, sinais-vitais, sondas, uti-emergencia, vacinas, ventilacao-mecanica, medicamentos
- **Evidencia:** `contracts/cko-bibliotecas/entities/libraries/`

### biblioteca `medicamentos` — conteudo ausente na origem
- **Estado:** NULL_IN_SOURCE nas 4 camadas
- **Detalhe:** a ficha da biblioteca está scope_only. A monografia de vancomicina já existe em bindings/content. Não é homologação.
- **Evidencia:** `contracts/cko-bibliotecas/validation/validation.json#null_bindings`

### 8 perfis UE-LTS com manifest ausente
- **Estado:** DRAFT · blocos=[] · manifests nao vieram no pacote
- **Detalhe:** article, case, flashcard, quiz, infographic, pdf, pocket_guide, slides — os 8 referenciam profiles/*.json que nao existem no pacote
- **Evidencia:** `contracts/cko-skeleton/catalog/profiles/`

## Caminho ate a conclusao (4)

### Contratos CKO fora do vocabulário
- **Estado:** 310 DIVERGENTES · 1 GRUPOS
- **Detalhe:** Não reescrever o enum. Os maiores grupos são decision=BOUND, authority_class=CLINICAL e privacy_policy=NOT_APPLICABLE.
- **Evidencia:** `audit-evidence/ncos-canonical-source-lineage/schema-drift-delta.v1.json`

### Normativo transversal atômico
- **Estado:** BLOQUEADO
- **Detalhe:** Piloto de 3 átomos e 2 normas. A Resolução 545 está cortada. A 564 traz cabeçalho do Diário Oficial. ISO e ABNT ficam no identificador. A fórmula não nasce do átomo.
- **Evidencia:** `src/lib/normative-desk.ts#lineageSteps`

### Quatro fichas normativas sem átomo
- **Estado:** ABERTAS DE PROPOSITO
- **Detalhe:** Código de ética sem número repetido, e duas resoluções da década de 80 sem ano. Sem número, não extrair.
- **Evidencia:** `src/core/compliance/norm-card.test.ts`

### Admissão do kernel e conclusão da plataforma
- **Estado:** NAO CONCLUIDA
- **Detalhe:** Nenhuma migration grava kernel_order admitida. A etapa conclusao permanece falsa até existir pedido admitido por outra pessoa, com validador que passou e OPA executado. Publicar é outra ação.
- **Evidencia:** `src/core/compliance/platform-conclusion.ts`

## O que ja esta fechado

Itens conferidos pelo arquivo que os prova. Contagem antiga de teste e de build não é repetida aqui porque não foi medida nesta geração.

- Amarração de arquivo — migrations/0092_amarracao_arquivo.sql. Arquivo rastreado não nasce canônico. Canônicos são só os oito tokens congelados.
- Bloqueio de camada — migrations/0091_camada_anterior.sql. Dado não entra se a camada anterior não tem tabela.
- Plano detalhado — docs/PLANO-ATE-CONCLUSAO.md

## Fora da ordem, e ja existe

Isto não admite a plataforma. O gerador anterior dizia que não existia.

- 56 arquivos em contracts/cko-schemas. A paridade 0/41 mede leitura em runtime, não ausência do arquivo.
- 27 bibliotecas com binding de conteúdo. Nenhuma está review_status diferente de not_reviewed.
- Vancomicina está em contracts/cko-bibliotecas/bindings/content/vancomicina.content.json. A ficha medicamentos continua scope_only.
- src/lib/tools/formulas.ts e src/lib/tools/engine.test.ts. O vetor não está no schema da fórmula.
- src/lib/research/abnt.ts cobre NBR 6023 e citação no texto. src/lib/tools/numeric-rule.ts cobre o arredondamento usado no motor.
- audit-run tem sondas Playwright. Não há suíte scripts/e2e/.
- packages/cli/parsers tem fhir.py, mesh.py e medlineplus.py. O gate estrito continua fechado pelos parsers que faltam.
- src/lib/tools/dimensionamento.ts calcula pelo fator 1,15 e permanece candidata.
