# Plano até a conclusão

Medido em 2026-11-14. Isto não conclui a plataforma. A etapa `conclusao` em [src/core/compliance/platform-conclusion.ts](src/core/compliance/platform-conclusion.ts) permanece falsa enquanto nenhuma ordem no banco estiver `admitida`.

Publicar não é concluir. Admitir um pedido não publica. Copiar cláusula não cria átomo.

## Onde estamos

| Feito | Prova | Limite |
|---|---|---|
| Arquivos rastreados amarrados | `file_binding` em `migrations/0092_amarracao_arquivo.sql` | Nenhum arquivo é canônico. Só oito tokens do design system. |
| Arquivo anterior ao design system | `anterior_ds = true` e `canonico = false` | A ligação não promove. |
| Camadas em ordem | `migrations/0091_camada_anterior.sql` | Conteúdo sem caminho de origem não entra. |
| Política do pacote `acesso` | `src/lib/policy-catalog.test.ts` | Agente e assinante não escrevem. |
| Extração governada | `migrations/0088_extracao_policy.sql` | Entra identificador e linha editorial. A cláusula não entra. |
| Validação normativa | `migrations/0089_validacao_normativa.sql` | Conta o vínculo. Não muda `CONFORME`. |
| Mestre e kernel | `migrations/0090_mestre_kernel.sql` | O pedido nasce `em_espera`. O validador nasce `passed = false`. |
| Rastro | `activity_event` | A linha não se altera. |

## O que ainda bloqueia

A lista medida está em [docs/PENDENCIAS.md](PENDENCIAS.md), seção "Caminho ate a conclusao". A ordem abaixo é a única que destrava a seguinte.

### 1. OPA de verdade

O programa `opa` não está instalado. Enquanto `scripts/ce-check.mjs` responder `opa: ausente`, o kernel grava `opa=nao_executado`.

Pronto quando: `opa version` responde e um `.rego` já existente devolve allow ou deny sem dado forjado. Deny continua a ganhar. Allow do OPA sozinho não admite.

### 2. Os 162 valores fora do vocabulário

A evidência está em `audit-evidence/ncos-canonical-source-lineage/schema-drift-delta.v1.json`. São 14 grupos. Os maiores são `decision=BOUND`, `authority_class=CLINICAL` e `privacy_policy=NOT_APPLICABLE`. Campo obrigatório faltando: zero.

Pronto quando: cada valor foi mapeado para um valor já aceito pelo schema, ou recusado com dono. O schema não ganha valor novo nesta etapa. `--enforce` em `scripts/ce-check.mjs` deixa de parar por divergência.

### 3. Identidade da fonte

Não entra cópia de branch nem contabilidade. Entra só o que tiver emissor, edição, direito e hash real. As fontes do catálogo clínico comparadas no drift são 6, e o hash ainda não fecha esta etapa.

Pronto quando: cada fonte que for candidata a átomo tem os quatro campos. Hash zerado permanece fora.

### 4. As quatro fichas abertas

Continuam sem átomo, de propósito, em `src/core/compliance/norm-card.test.ts`:

- `biblioteca/2017-conselho-federal-de-enfermagem-codigo-de-etica-dos-profissionais-de-enfermagem`
- `biblioteca/codigo-de-etica-dos-profissionais-de-enfermagem-cofen`
- `biblioteca/resolucao-cofen-decada-de-80`
- `biblioteca/resolucao-cofen-decada-de-80-2`

Pronto quando: cada uma tem número e ano verificados, ou fica recusada. Sem número, não extrair.

### 5. Átomo transversal íntegro

A mesa em [src/lib/normative-desk.ts](src/lib/normative-desk.ts) marca o átomo como bloqueado. O piloto tem 3 átomos e 2 normas. Isso não é a cadeia das 674 resoluções. A Resolução 545 está cortada. A 564 ainda tem cabeçalho do Diário Oficial. Os 749 PDFs oficiais não foram baixados. ISO e ABNT permanecem identificador, sem cláusula.

Pronto quando: o átomo usado numa conta tem o texto íntegro da fonte, o hash da etapa 3 e nenhum trecho cortado. A fórmula ainda não nasce desse átomo até essa prova existir.

### 6. Validador que passa

`kernel_validator` sem linha não admite. O validador do mestre está com `passed = false` porque o OPA não rodou.

Pronto quando: o validador da ordem passa pelas etapas 1 a 5 e a linha `passed = true` tem a evidência de cada uma. Um validador que só existe não passa.

### 7. Outra pessoa assina

O autor não assina a própria ordem. O aprovador `kernel` é recusado.

Pronto quando: o aprovador é uma pessoa diferente do autor, com decisão registrada. A autorização de continuar o trabalho não é essa assinatura.

### 8. Admissão

Só depois das sete etapas. A ordem pode sair de `em_espera`.

Pronto quando: existe `kernel_order` com estado `admitida`, manifesto assinado por pessoa e validador que passou. A etapa `conclusao` do código deixa de ser falsa só nessa hora, e o teste de conclusão tem de ser atualizado junto. Antes disso, mudar o teste para verde é falso.

### 9. Publicação

Continua outro portão. Aprovar um cartão não publica. O portão da mesa permanece fechado até uma ação explícita de publicação, depois da admissão.

## O que não conta como conclusão

- Gate verde de release.
- Arquivo amarrado.
- Token canônico do design system.
- Identificador normativo extraído.
- OPA instalado, sem as etapas 2 a 7.
- Pedido `em_espera`.
- Piloto de dois normativos.
