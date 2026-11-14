# Pendências

Fotografia de 1º de novembro de 2026. Não é a lista atual. A lista medida está em [docs/PENDENCIAS.md](docs/PENDENCIAS.md).

Backup da branch `grook_10_26`, commit de base `bb08b21f`. O texto abaixo descreve aquele disco, não as migrations nem os gates de agora.

## Não commitado

O trabalho desta rodada está no disco e neste arquivo, não num commit e não no GitHub. São 107 caminhos alterados em relação a `bb08b21f`.

## Conteúdo que não está na fonte

- Os cadernos de 50 questões (técnicos, enfermeiros, núcleo de segurança do paciente) existem só como título. O simulado no ar é o treino de cinco questões dos instrumentos, em `/secao/simulados`. O mesmo banco abre em `/estudo`.
- A Vila do Cuidado está em `/viladocuidado` como piloto candidato. As atividades não foram homologadas e não substituem orientação de um adulto ou de um profissional.
- O PDF em `/modelos/pdf` continua molde. Não há arquivo governado.
- A ficha do coração não teve revisão científica da vascularização, da inervação e da referência clínica.
- Os outros sistemas de anatomia têm prancha, não ficha.

## O que não foi copiado do backup antigo

O backup em `/tmp/ce-hist` não compartilha histórico com este repositório. Não houve merge.

Ficaram de fora de propósito:

- `/central-comando`, porque a área administrativa daqui já existe.
- `/oficina-local`, bancada local com `noindex`.
- `/minha-area`, página só com o título. A área do assinante é `/assinante`.
- 474 arquivos JSON de contrato que nenhuma rota importava. Entraram 66.

## Fora do banco

O que a pessoa cria no estúdio, no fórum, no currículo e na pesquisa grava no navegador. O treino publicado não: ele está em `study_item`.

## Rotas finas, fora do menu

Kids, bolsas, vagas, residências, cursos SUS, oportunidades e concursos têm rota. Não entram no menu principal.

## Comparação com `canonical/local-20261101`

A branch canônica no GitHub não é ancestral desta. Ela tem 15.413 arquivos a mais, a maior parte arquivo de auditoria, corpus e contratos que nenhuma rota daqui importa. Este repositório é o conteúdo canônico do site. Essa branch não foi substituída e o conteúdo dela não foi copiado por cima.

O que ela tem e não se aplica aqui:

- `/central-comando` e `/oficina-local`, porque a administração e a área do assinante já existem.
- `/blog/`, uma prévia de curiosidades com `noindex`. A rota no ar é `/curiosidades`.

## Fechado nesta rodada

- Os cinco erros de tipo em `desk-boundary.test.ts` e `ecosystem-audit.ts`.
- O treino publicado (cinco questões e seis cartões) está na tabela `study_item`. A seção lê essa tabela. O que a pessoa cria no estúdio continua no navegador.

## Continua pendente, e não se aplica inventar

- Cadernos de 50 questões: não estão na fonte.
- Vila do Cuidado: piloto candidato, sem homologação.
- PDF: molde, sem arquivo governado.
- Revisão científica da ficha do coração.
- Prancha dos outros sistemas de anatomia, sem ficha.
- Alterações locais ainda sem commit. A base continua `bb08b21f`.


## O que este pacote inclui

Todas as pastas do projeto: código, migrations, `public`, `.git`, `node_modules`, `attachments`, `registers` e os arquivos ocultos de ferramenta. O único arquivo que não entra é o próprio arquivo compactado, para ele não se copiar por dentro.
