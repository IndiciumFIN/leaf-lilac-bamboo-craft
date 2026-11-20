#!/usr/bin/env python3
"""Escreve as 87 notas originais do Blog de Enfermagem. Não copia fonte de terceiro."""
import json
from pathlib import Path

ROOT = Path("src/lib/content/curiosidades")
NOTES = {}

def add(slug, lead, a, b, c):
    NOTES[slug] = (lead, a, b, c)

add("12-de-maio-e-o-dia-internacional-da-enfermagem",
    "12 de maio é a data de nascimento de Florence Nightingale, em 1820. O Conselho Internacional de Enfermeiras passou a usar esse dia como Dia Internacional da Enfermagem.",
    "A data não é um feriado clínico nem uma autorização de prática. É um marco de memória da profissão.",
    "No Brasil, a semana em torno de 12 de maio também entrou no calendário associativo. O intervalo exato e o nome da semana têm história própria, tratada em outra nota.",
    "Esta página não transcreve campanha de terceiro nem transforma a data em orientação de cuidado.")
add("17-de-setembro-dia-mundial-da-seguranca-do-paciente",
    "17 de setembro é o Dia Mundial da Segurança do Paciente, marcado pela Organização Mundial da Saúde a partir de 2019.",
    "A data chama atenção para dano evitável no cuidado. O tema de cada ano muda. Esta nota não reproduz o lema oficial nem o material gráfico da campanha.",
    "Segurança do paciente, aqui, é contexto histórico e institucional. Protocolo de serviço, meta e indicador continuam no documento vigente da instituição.",
    "Nada nesta página substitui notificação, barreira de segurança ou julgamento clínico.")
add("1893-o-nightingale-pledge-e-sua-autoria",
    "O texto conhecido como Nightingale Pledge foi composto em 1893 na Farrand Training School, em Detroit. O nome homenageia Florence Nightingale. Ela não é a autora.",
    "A redação é associada a Lystra Gretter e a um comitê da escola. Tratar o juramento como escrito por Nightingale é um equívoco de nome, não de arquivo.",
    "O texto circulou em formaturas e sofreu adaptações. Uma versão de formatura não é, por si, o texto de 1893.",
    "Esta nota não cola o juramento. O ponto é a autoria e a data.")
add("1926-o-nascimento-da-aben-e-as-datas-divergentes-nas-fontes",
    "A Associação Brasileira de Enfermagem tem origem em 1926. As fontes não concordam todas no dia e na forma do ato de fundação.",
    "Quando duas cronologias sérias divergem, a página honesta não escolhe uma para encerrar a discussão. Registra que o ano é estável e que o dia ainda pede a ata.",
    "A ABEn é a associação profissional histórica da enfermagem brasileira. Isso não se confunde com o conselho fiscalizador, criado depois, em outra lei.",
    "Sem a ata pinçada, esta nota não decreta um dia único.")
add("27-de-setembro-de-1890-o-decreto-que-criou-a-escola-profissional-de-enfermeiros-e-enfermeiras",
    "Em 27 de setembro de 1890, o Decreto 791 criou a Escola Profissional de Enfermeiros e Enfermeiras, no Rio de Janeiro, ligada ao Hospício Nacional de Alienados.",
    "É um ato oficial. O texto da norma pertence ao domínio do ato do Estado. Esta nota cita o número e a data. Não cola o decreto inteiro.",
    "A escola desse decreto é a origem do que depois se conheceu como Escola Alfredo Pinto. Outra nota trata do nome e do lugar.",
    "Fundar uma escola em 1890 não descreve o currículo de hoje.")
add("a-cruz-vermelha-e-a-inversao-das-cores-da-bandeira-suica",
    "O emblema da cruz vermelha sobre fundo branco é a inversão das cores da bandeira da Suíça. A escolha é de 1863 e 1864, no movimento que levou às Convenções de Genebra.",
    "Não é um símbolo religioso. A cruz, aqui, é o sinal de proteção dos serviços sanitários em conflito, não um crucifixo.",
    "O uso do emblema é regulado. Hospital, escola e marca comercial não o adotam por estética.",
    "O crescente vermelho e o cristal vermelho são emblemas distintos, tratados em outra nota.")
add("a-lampada-de-nightingale-do-objeto-real-ao-simbolo-da-lady-with-the-lamp",
    "Lady with the Lamp é o apelido que a imprensa deu a Florence Nightingale pelas rondas noturnas em Scutari. A imagem popular virou uma lâmpada grega de óleo.",
    "O objeto de que os relatos se aproximam é uma lanterna de campanha, não a peça de museu que o pôster depois desenhou.",
    "O símbolo condensou vigília, higiene e presença. Condensar não é descrever o instrumento.",
    "Esta nota separa o objeto da alegoria. Não avalia peça de museu que não está diante do texto.")
add("a-morte-nao-e-nada-quem-escreveu-o-texto-atribuido-a-santo-agostinho",
    "O texto fúnebre que começa dizendo que a morte não é nada circula com o nome de Santo Agostinho. Não está nas obras dele que a crítica reconhece.",
    "A atribuição é tardia e repetida em convites e redes. Repetir não cria autoria.",
    "Quem escreveu a versão corrente continua sem nome seguro nesta nota. Inventar um autor para fechar a ficha seria outro erro.",
    "A página registra o mito de autoria. Não publica o texto.")
add("aldrete-a-origem-do-indice-de-recuperacao-pos-anestesica",
    "O índice associado a J. Antonio Aldrete surgiu em 1970 para descrever a recuperação depois da anestesia. Uma versão posterior incorporou o trabalho de Kroulik.",
    "O instrumento olha atividade, respiração, circulação, consciência e oxigenação ou cor, conforme a versão. Esta página não reproduz a grade nem fixa ponto de alta.",
    "Serviço que usa 8, 9 ou outro corte está aplicando protocolo local e a versão do instrumento que adotou. Um número solto nesta nota seria afirmação clínica sem dono.",
    "Origem histórica não é autorização para dar alta.")
add("ana-neri-a-carta-de-1865-e-a-guerra-do-paraguai",
    "Ana Néri, de Cachoeira, na Bahia, ofereceu-se em 1865 para cuidar dos feridos na Guerra do Paraguai. A carta é o documento que a memória brasileira guarda desse oferecimento.",
    "Ela acompanhou hospitais de campanha e voltou viúva de filhos. Morreu em 1880. O nome dela passou a batizar escola, navio-hospital e semana, o que já é outra camada de memória.",
    "Chamá-la de primeira enfermeira do Brasil é um título de homenagem. A enfermagem como profissão escolarizada, no país, é posterior.",
    "Esta nota não transcreve a carta.")
add("apgar-e-sobrenome-a-escala-de-1953-e-a-sigla-que-veio-depois",
    "Apgar é o sobrenome de Virginia Apgar. O escore que ela publicou em 1953 leva esse nome porque é o dela, não porque nasceu como sigla.",
    "A leitura em letras, aparência, pulso, careta, atividade e respiração, foi encaixada depois, em inglês. É um recurso de memória, não a origem.",
    "Os cinco eixos existem desde o trabalho dela. A tabela de pontos e o uso no minuto de vida pertencem ao protocolo vigente, não a esta página.",
    "Tratar a sigla como o nascimento da escala inverte a história.")
add("as-enfermeiras-de-guerra-e-a-incorporacao-posterior-as-forcas-armadas",
    "Enfermeiras acompanharam guerras brasileiras antes de existir um quadro militar estável de enfermagem. A incorporação formal às Forças Armadas é um passo posterior, com leis e quadros próprios.",
    "Guerra do Paraguai, Segunda Guerra e a criação de quadros da Marinha, do Exército e da Aeronáutica não são o mesmo ato.",
    "Uma fotografia de uniforme não data o quadro. O ato que cria a carreira é outro documento.",
    "Esta nota não lista efetivos nem patentes.")
add("as-seis-enfermeiras-do-qera-da-fab-na-segunda-guerra-mundial",
    "O Quadro de Enfermeiras da Reserva da Aeronáutica teve enfermeiras na Segunda Guerra. A memória da Força registra um grupo de seis nesse serviço.",
    "Esta nota não recita os seis nomes. Nome sem a lista oficial ao lado vira invenção.",
    "O fato que fica é institucional: houve um quadro de reserva e um contingente pequeno enviado ao esforço de guerra, distinto do grosso da enfermagem da FEB.",
    "Biografia individual pede a ficha militar, não um parágrafo de blog.")
add("bastao-de-asclepio-ou-caduceu-dois-simbolos-diferentes",
    "O bastão de Asclépio tem uma serpente. O caduceu de Hermes tem duas serpentes e, em geral, asas. Não são o mesmo desenho.",
    "A medicina e a enfermagem, quando escolhem um símbolo antigo, estão mais perto de Asclépio. O caduceu entrou em insígnias militares e em marcas por outro caminho, sobretudo nos Estados Unidos.",
    "Trocar um pelo outro em logotipo é erro de história, não detalhe gráfico.",
    "Nenhum dos dois autoriza ato profissional.")
add("behavioral-pain-scale-origem-e-validacao",
    "A Behavioral Pain Scale foi proposta para estimar dor em pessoas intubadas, que não conseguem falar. O trabalho de Payen e colegas, no início dos anos 2000, é a origem citada.",
    "Ela observa expressão, movimento dos membros e adaptação ao ventilador. Esta página não copia os escores.",
    "Validar um instrumento é outro estudo, em outra língua e outro serviço. Uma nota de origem não declara o instrumento válido para o seu plantão.",
    "Dor do paciente acordado e comunicativo pede outra avaliação.")
add("cam-icu-origem-de-um-instrumento-para-delirium-em-terapia-intensiva",
    "O CAM-ICU adapta o Confusion Assessment Method para a terapia intensiva. O grupo de E. Wesley Ely está na origem do instrumento, no início dos anos 2000.",
    "O objetivo é reconhecer delirium em quem está grave, inclusive em ventilação, com perguntas e comandos breves. A grade não é reproduzida aqui.",
    "Tradução e validação em português são trabalhos próprios. Usar a sigla em inglês não prova que o serviço aplicou a versão estudada.",
    "Esta nota não diagnostica delirium.")
add("cammann-e-o-estetoscopio-binaural",
    "George P. Cammann, em Nova York, no meio do século XIX, tornou comercial o estetoscópio com dois ramos auriculares. Antes, o instrumento de Laennec era um tubo para um ouvido.",
    "Binaural quer dizer os dois ouvidos. O ganho foi prático: mais estável, mais fácil de usar no exame.",
    "Cammann não inventou a ausculta. Inventou, com outros fabricantes do período, a forma que o século seguinte reconhece.",
    "Marca, diafragma e tubo flexível são capítulos posteriores.")
add("casa-de-ana-neri-em-cachoeira-ba",
    "Cachoeira, no Recôncavo Baiano, é a cidade de Ana Néri. A casa associada à família é lugar de memória, não um prontuário.",
    "Visita, placa e museu local mudam com a gestão do imóvel. Esta nota não descreve o estado atual da casa nem horário de visita.",
    "O que permanece é o vínculo: a mulher que escreveu em 1865 saiu dali para a guerra.",
    "Endereço turístico não substitui a carta nem o decreto que, décadas depois, criou escola profissional.")
add("cicely-saunders-e-o-nascimento-do-movimento-hospice-moderno",
    "Cicely Saunders, médica e ex-assistente social e enfermeira de formação múltipla, organizou o hospice moderno em Londres. St Christopher's Hospice abriu em 1967.",
    "A ideia central, que ela chamou de dor total, junta físico, psíquico, social e espiritual. Esta nota nomeia a ideia. Não copia o livro.",
    "Cuidado paliativo posterior, inclusive a definição da OMS, é descendente desse movimento e não é a mesma frase de 1967.",
    "Origem do hospice não é protocolo de sedação.")
add("clara-barton-nos-documentos-da-library-of-congress",
    "Clara Barton organizou socorro na Guerra Civil dos Estados Unidos e fundou a Cruz Vermelha americana em 1881. A Library of Congress guarda os papéis dela.",
    "Papel de arquivo é a fonte. Biografia de capa não é.",
    "O volume do arquivo é grande. Esta nota não fixa um número de peças, porque número sem o inventário da biblioteca é enfeite.",
    "Fundar a Cruz Vermelha nacional não se confunde com criar o emblema de Genebra, que é anterior.")
add("clara-barton-papers-um-arquivo-de-dezenas-de-milhares-de-documentos",
    "Os Clara Barton Papers são o arquivo pessoal depositado na Library of Congress. O título corrente fala em dezenas de milhares de documentos.",
    "Esta nota aceita a ordem de grandeza como descrição do arquivo e não como contagem feita aqui. Quem precisa do número cita o inventário da biblioteca.",
    "Diário, carta e recorte de jornal não têm o mesmo peso. Estar no maço não torna cada folha um fato.",
    "O arquivo é público para pesquisa. Isso não coloca o texto dele nesta página.")
add("de-enfermo-a-enfermeiro-pistas-etimologicas-para-a-familia-de-palavras-da-enfermagem",
    "Enfermo vem do latim infirmus, o que não está firme. Enfermeiro é, na formação da palavra, quem cuida do enfermo.",
    "A família atravessa as línguas românicas. Nurse, do inglês, vem de outro ramo, o latim nutrix, a que nutre. Não é a mesma etimologia.",
    "Etimologia explica o nome. Não explica o escopo legal da profissão no Brasil, que está na Lei 7.498, de 1986.",
    "Chamar alguém de enfermeiro fora desse estatuto é uso comum, não título.")
add("de-onde-vem-a-palavra-hospital",
    "Hospital vem do latim hospitale, lugar do hospes, o hóspede. A palavra nasceu da hospedagem, não da cirurgia.",
    "Na Idade Média, hospital, albergaria e asilo se sobrepunham. Separar hospital de hotel é um corte moderno.",
    "Hotel-Dieu, nas cidades francesas e em Montreal, guarda no nome essa casa de Deus para o hóspede doente.",
    "A etimologia não descreve a rede hospitalar de hoje.")
add("edith-cavell-enfermagem-e-primeira-guerra-mundial",
    "Edith Cavell era enfermeira britânica à frente de uma escola em Bruxelas. Em 1915, um tribunal alemão de ocupação a condenou à morte por ajudar soldados aliados a deixar a Bélgica.",
    "O fuzilamento, em 12 de outubro de 1915, virou caso político. A enfermagem entrou na guerra como cuidado e, no caso dela, como ato punido pela ocupação.",
    "Mártir é palavra de memória. O fato verificável é o julgamento e a execução.",
    "Esta nota não reproduz o discurso atribuído a ela na véspera.")
add("enfermeiras-brasileiras-rumo-a-italia-na-segunda-guerra-mundial",
    "A Força Expedicionária Brasileira levou enfermeiras à campanha da Itália, entre 1944 e 1945. O contingente era pequeno diante do efetivo combatente e grande na memória da profissão.",
    "Virginia Portocarrero é um dos nomes públicos desse grupo. A lista completa pertence ao arquivo militar, não a um parágrafo.",
    "Ir à Itália não é o mesmo que servir no quadro da Aeronáutica. São corpos diferentes, tratados em notas separadas.",
    "Esta página não narra batalha nem descreve técnica de guerra.")
add("enfermeiro-pode-prescrever-medicamentos-o-que-a-legislacao-brasileira-realmente-preve",
    "A Lei 7.498, de 1986, e o Decreto 94.406, de 1987, organizam o exercício da enfermagem. A prescrição de medicamento por enfermeiro, quando cabe, está amarrada a programa, rotina e protocolo, não a um cheque em branco.",
    "A Resolução COFEN 358, de 2009, tratava do processo de enfermagem. A Resolução 736, de 2024, a revogou. Nenhuma das duas é a lei do medicamento.",
    "A Resolução 543, de 2017, era de dimensionamento e foi revogada pela 743, de 2024. Não atualizou a sistematização da assistência.",
    "Esta nota não diz o que um enfermeiro pode prescrever amanhã. Isso está no protocolo vigente e na lei, lidos juntos.")
add("escala-de-braden-origem-e-desenvolvimento",
    "A escala de Braden foi desenvolvida por Barbara Braden e Nancy Bergstrom nos anos 1980 para estimar risco de lesão por pressão.",
    "Os eixos clássicos são percepção sensorial, umidade, atividade, mobilidade, nutrição e fricção. Esta página nomeia os eixos. Não entrega a grade para pontuar um paciente.",
    "O instrumento teve estudos próprios de desenvolvimento e de teste. Citar o nome não transfere esse estudo para o seu serviço.",
    "Risco não é diagnóstico de lesão.")
add("escala-de-glasgow-como-surgiu-a-glasgow-coma-scale",
    "Graham Teasdale e Bryan Jennett publicaram a escala de coma de Glasgow em 1974, na Lancet. O lugar do nome é a cidade do trabalho.",
    "A escala observa abertura ocular, resposta verbal e resposta motora. A soma e a conduta diante do número pertencem ao protocolo, não a esta nota.",
    "Houve ajustes de redação ao longo das décadas. Uma ficha antiga e o formulário atual podem não ser o mesmo texto.",
    "A escala descreve resposta. Não explica a causa do coma.")
add("escola-alfredo-pinto-a-escola-criada-pelo-decreto-791-de-1890",
    "A Escola Alfredo Pinto, no Rio de Janeiro, descende da escola criada pelo Decreto 791, de 27 de setembro de 1890.",
    "O nome Alfredo Pinto é posterior ao decreto. Confundir a data do nome com a data da criação é o erro que esta nota evita.",
    "A escola é peça da profissionalização brasileira, ao lado e antes da missão que criou a Anna Nery nos anos 1920. Não são a mesma instituição.",
    "História da escola não é grade curricular vigente.")
add("escola-anna-nery-missao-ethel-parsons-rockefeller-e-a-formacao-moderna",
    "A Escola de Enfermeiras Anna Nery começou em 1923, no Rio, no rastro da missão de Ethel Parsons e do apoio da Fundação Rockefeller.",
    "O modelo era o da enfermagem profissional de formação longa, distinto do aprendizado só de hospital. O nome homenageia Ana Néri. A escola não é de 1865.",
    "Parsons era a enfermeira americana à frente do serviço de enfermeiras do Departamento Nacional de Saúde Pública. Rockefeller financiava um programa de formação, não um mito.",
    "Esta nota não descreve o curso atual da universidade que herdou a escola.")
add("florence-nightingale-e-a-estatistica-a-primeira-mulher-da-royal-statistical-society",
    "Florence Nightingale foi admitida na Royal Statistical Society em 1858. É a primeira mulher nesse quadro.",
    "O trabalho dela com mortalidade hospitalar usou diagramas de área, as chamadas rosas, para mostrar morte por doença evitável, não só por ferimento.",
    "Ser da sociedade estatística não a torna autora de todo número que a lenda atribui a Scutari.",
    "Gráfico histórico não é indicador para usar hoje.")
add("florence-nightingale-e-a-mortalidade-em-scutari-o-que-os-numeros-realmente-mostram",
    "No hospital de Scutari, a mortalidade no inverno de 1855 foi extrema. Caiu depois de obras sanitárias, esgoto, ventilação e menos superlotação.",
    "A Comissão Sanitária e o trabalho de Nightingale entram nessa queda. A frase de que ela, sozinha, derrubou a mortalidade é maior do que o arquivo.",
    "Percentual solto, repetido em slide, muda de livro para livro. Esta nota não escolhe um número.",
    "O que os números mostram, com segurança, é que sujeira e superlotação matavam mais do que a bala, e que isso era mensurável.")
add("florence-nightingale-medal-origem-e-primeiras-concessoes",
    "A Medalha Florence Nightingale é distinção do Comitê Internacional da Cruz Vermelha. As primeiras concessões são de 1920.",
    "O nome homenageia a enfermeira. A medalha não foi criada por ela, que morreu em 1910.",
    "Receber a medalha reconhece serviço excepcional em enfermagem ou em socorro. Não é título acadêmico nem registro profissional.",
    "A lista de agraciados pertence ao Comitê. Esta nota não a copia.")
add("florence-nightingale-museum-objetos-e-fontes-para-historia-da-enfermagem",
    "O Florence Nightingale Museum fica junto ao St Thomas' Hospital, em Londres, no terreno da escola que ela fundou.",
    "Museu guarda objeto, carta e vestido. Objeto ilustra. Não substitui o livro nem o relatório estatístico.",
    "Exposição temporária muda. Esta nota não descreve a sala que está aberta hoje.",
    "Visitar o museu é método. Citar o museu sem a peça é só endereço.")
add("friedrich-trendelenburg-por-que-a-posicao-leva-seu-nome-se-ja-era-conhecida-antes",
    "Friedrich Trendelenburg, cirurgião alemão, deu nome a uma posição em que a pelve fica mais alta que a cabeça. Descrições parecidas existem antes dele.",
    "O nome grudou porque ele a usou e a ensinou em cirurgia pélvica, não porque tenha sido o primeiro a deitar alguém de cabeça baixa.",
    "Epônimo é história de crédito, não de prioridade absoluta. Vários nomes da medicina funcionam assim.",
    "Esta nota não indica a posição para nenhum paciente. Indicação e risco são protocolo atual, não biografia do século XIX.")
add("gauge-de-agulhas-por-que-numeros-maiores-significam-diametros-menores",
    "O calibre em gauge vem de uma medida industrial de fio, a Birmingham wire gauge. Quanto maior o número, mais fino o fio.",
    "A agulha herdou essa escala. Por isso 22 é mais fina que 18. O contrário do que a intuição de centímetro sugere.",
    "Há outras escalas no mundo. Um número sem dizer a escala não é medida.",
    "Esta nota explica o nome. Não escolhe agulha para procedimento.")
add("henry-heimlich-e-a-publicacao-que-consolidou-a-manobra-contra-engasgo",
    "Henry Heimlich publicou em 1974, no JAMA, a descrição da pressão abdominal para desobstruir a via aérea. A manobra ficou com o sobrenome dele.",
    "O artigo consolidou uma técnica e um nome. Não é, sozinho, o guia de primeiros socorros vigente.",
    "Protocolos atuais de engasgo incluem outras etapas, entre elas tapas nas costas, e mudam com a diretriz. Esta página não ensina a manobra.",
    "Nome de pessoa na técnica não dispensa o curso e a diretriz do ano.")
add("henry-street-settlement-e-lillian-wald",
    "Em 1893, Lillian Wald começou no Lower East Side de Nova York o trabalho que virou o Henry Street Settlement. Dali saiu um modelo de enfermagem de saúde pública, na casa da pessoa, não só no hospital.",
    "Settlement, no vocabulário da época, era casa de reforma social instalada no bairro pobre. Enfermagem era o meio, não o anexo.",
    "O termo public health nurse se firma nesse ciclo. A nota sobre Wald desenvolve a pessoa. Esta desenvolve o lugar.",
    "Endereço histórico não é unidade de saúde da família de hoje.")
add("hildegard-peplau-e-a-enfermagem-psiquiatrica",
    "Hildegard Peplau publicou Interpersonal Relations in Nursing em 1952. O livro deslocou a enfermagem psiquiátrica da guarda para a relação terapêutica.",
    "Ela descreveu fases do vínculo entre enfermeiro e paciente. Esta nota nomeia o deslocamento. Não resume o livro capítulo a capítulo.",
    "A obra é protegida. O fato histórico, a data e o campo não são.",
    "Teoria de relação não é prescrição de psicofármaco.")
add("hotel-dieu-de-montreal-por-que-as-datas-historicas-divergem",
    "O Hôtel-Dieu de Montreal está ligado a Jeanne Mance e à fundação da cidade, no século XVII. Os anos impressos nos livros não coincidem todos.",
    "1642 é a data corrente da fundação de Montreal. A casa de cuidado tem marcos próprios, de promessa, de construção e de instalação das religiosas, e cada autor destaca um.",
    "Divergência de data, quando as fontes primárias são escassas, não se resolve por voto de blog.",
    "Esta nota não elege um dia único.")
add("jeanne-mance-cofundadora-de-montreal-e-cuidadora-no-hotel-dieu",
    "Jeanne Mance atravessou o Atlântico e participou da fundação de Montreal. Organizou o cuidado no Hôtel-Dieu.",
    "Chamá-la de enfermeira usa a palavra de hoje para uma mulher do século XVII. Ela não tinha diploma de escola nightingaleana, que não existia.",
    "O fato é a organização do cuidado e a fundação. O anacronismo é o título.",
    "Hagiografia não é arquivo. A nota fica no que as histórias da cidade repetem com lastro.")
add("kaiserswerth-e-a-formacao-de-florence-nightingale",
    "Kaiserswerth, junto a Düsseldorf, era a instituição dos Fliedner, com hospital e formação de diaconisas. Nightingale visitou o lugar em 1850 e voltou para um período de treino em 1851.",
    "Foi a formação formal mais próxima que ela teve antes da Crimeia. Não era um curso universitário.",
    "O modelo misturava piedade, trabalho manual e cuidado. Nightingale depois criticou partes desse modelo e construiu outro em Londres.",
    "Passar por Kaiserswerth não a torna diaconisa.")
add("lillian-wald-e-a-enfermagem-de-saude-publica",
    "Lillian Wald é o nome que a enfermagem de saúde pública americana associa à visita domiciliária sistemática, a partir de Henry Street, em 1893.",
    "Ela defendia que a enfermeira fosse ao bairro, visse a casa e ligasse doença a esgoto, salário e escola. Isso é saúde pública, não caridade avulsa.",
    "O Henry Street Settlement é o lugar. Esta nota é a pessoa e a ideia.",
    "O modelo inspirou serviços. Não é o desenho do SUS.")
add("linda-richards-e-a-profissionalizacao-da-enfermagem-nos-eua",
    "Linda Richards é reconhecida como a primeira enfermeira formada no programa americano de treinamento, com diploma da New England Hospital for Women and Children em 1873.",
    "Ela organizou escolas e registros de enfermagem. O ponto histórico é a profissionalização por escola, não o cuidado doméstico que já existia.",
    "Primeira, nesse caso, quer dizer primeira do sistema de diploma daquela escola, não primeira mulher a cuidar de doente no país.",
    "Mary Eliza Mahoney saiu da mesma casa de formação anos depois, em outra barreira, a da cor.")
add("lystra-gretter-e-a-autoria-do-nightingale-pledge",
    "Lystra Gretter dirigia a Farrand Training School, em Detroit, quando o Nightingale Pledge foi escrito, em 1893. A autoria prática é dela e do comitê da escola.",
    "O nome de Nightingale no título é homenagem. A nota sobre 1893 conta a data. Esta conta a pessoa.",
    "Gretter também trabalhou por registro profissional no Michigan. O juramento é a peça que a memória guardou.",
    "Esta página não reproduz o texto do juramento.")
add("mary-eliza-mahoney-trajetoria-e-legado",
    "Mary Eliza Mahoney concluiu em 1879 o programa da New England Hospital for Women and Children. É a primeira mulher negra a receber esse diploma de enfermagem nos Estados Unidos.",
    "Depois trabalhou sobretudo em cuidado domiciliário e participou da organização de enfermeiras negras. O legado é a quebra de uma barreira de formação, não um cargo público.",
    "Há uma biografia mais longa neste mesmo site, com retrato histórico de arquivo. Esta nota é a ficha curta do blog.",
    "Diploma de 1879 não descreve o mercado de trabalho de hoje.")
add("mary-seacole-a-secret-history-2005-documentario-e-memoria-historica",
    "Um documentário de 2005, circulando como A Secret History, recolocou Mary Seacole na memória pública britânica.",
    "Filme é interpretação. A fonte da vida dela é a autobiografia de 1857, em domínio público, e os jornais da Crimeia.",
    "Esta nota não resume o documentário nem trata a narração como prova.",
    "Memória recuperada no século XXI não altera o que ela escreveu no XIX.")
add("mary-seacole-pela-propria-voz-o-que-sua-autobiografia-registra",
    "Mary Seacole publicou em 1857 Wonderful Adventures of Mrs. Seacole in Many Lands. O livro é a voz dela sobre Jamaica, viagens e a Guerra da Crimeia.",
    "Ela montou cuidado perto do front por conta própria. Não integrava o quadro de Nightingale em Scutari. As duas histórias se cruzam na mesma guerra e não são a mesma administração.",
    "O livro está em domínio público. Mesmo assim esta nota não cola trechos. Diz o que o livro é.",
    "Autobiografia é fonte e também defesa da própria reputação. Lê-se como as duas coisas.")
add("mito-a-cruz-vermelha-e-um-simbolo-religioso",
    "O mito diz que a cruz vermelha é um símbolo cristão adotado por hospitais. O emblema é a inversão da bandeira suíça, escolhido para proteger serviços sanitários.",
    "A leitura religiosa existe na cultura. Não está na ata de Genebra.",
    "Por isso o movimento também reconhece o crescente vermelho e, mais tarde, o cristal vermelho: para não prender o socorro a uma fé.",
    "Desenhar a cruz em ambulância sem direito ao emblema é infração, não homenagem.")
add("mito-apgar-nasceu-como-sigla",
    "O mito diz que Apgar nasceu como acrônimo. Nasceu como sobrenome, em 1953. A sigla em inglês foi ajuste posterior para ajudar a memória.",
    "As letras coincidem com os itens porque alguém as fez coincidir. Não o contrário.",
    "Saber a ordem correta evita repetir o mito em aula.",
    "A escala, como instrumento, continua sendo a de Virginia Apgar, não a de um conjunto de palavras.")
add("mito-florence-nightingale-sozinha-derrubou-a-mortalidade-de-scutari",
    "O mito atribui a queda da mortalidade em Scutari só a Florence Nightingale. O arquivo mostra obras sanitárias, uma comissão e menos gente amontoada.",
    "Ela importa nessa história como administradora e como estatística. Importar não é agir sozinha.",
    "A nota sobre os números desenvolve a ressalva. Esta só desmonta a frase pronta.",
    "Heroína única é um gênero literário. Não é o relatório.")
add("mito-o-nightingale-pledge-foi-escrito-por-florence-nightingale",
    "O mito dá a Florence Nightingale a autoria do juramento que leva o nome dela. O texto é de 1893, da escola de Lystra Gretter, em Detroit.",
    "Nightingale morreu em 1910 e conheceu o uso do nome. Conhecer não é escrever.",
    "Homenagem virou autoria por preguiça de citação.",
    "As notas de 1893 e de Gretter contam o mesmo fato pelo outro lado.")
add("mito-uniformes-de-enfermagem-sempre-foram-brancos",
    "O mito imagina a enfermeira sempre de branco. O branco é uma fase, ligada a higiene e a fotografia do século XX, não uma origem.",
    "Há uniforme azul, cinza, listrado e, em caso brasileiro documentado em outra nota, rosa em 1965 e cinza em 1968.",
    "Touca, capa e faixa mudaram de escola para escola. Uma cor não define a profissão.",
    "Branco não é requisito ético.")
add("morse-fall-scale-como-nasceu-a-escala-de-risco-de-quedas",
    "A escala de Morse foi desenvolvida por Janice Morse para estimar risco de queda em adulto hospitalizado. O trabalho é dos anos 1980.",
    "História de quedas, diagnóstico secundário, ajuda para deambular, terapia venosa, marcha e estado mental são os eixos do nome. A pontuação não é reproduzida aqui.",
    "Escala de risco não impede a queda. Organiza vigilância.",
    "Validação local é outro estudo. O nome não a substitui.")
add("news-e-news2-de-onde-veio-o-national-early-warning-score",
    "O National Early Warning Score foi organizado no Reino Unido, com o Royal College of Physicians, para padronizar o alerta precoce a partir de sinais vitais.",
    "O NEWS2 é a revisão posterior, que ajusta o uso em hipercapnia e em confusão. São dois marcos, não um só formulário eterno.",
    "Esta nota não reproduz a tabela de pontos nem o gatilho de chamada.",
    "Adotar o NEWS num serviço brasileiro é decisão institucional, com a versão e o treino declarados.")
add("nightingale-em-scutari-e-balaclava-onde-ela-de-fato-esteve",
    "A base de Nightingale na Crimeia foi o hospital do quartel de Scutari, em Üsküdar, do outro lado do Bósforo, não a linha de fogo.",
    "Ela esteve na Crimeia, inclusive na região de Balaclava, em visita posterior. A residência do trabalho foi Scutari.",
    "Mapa de batalha que a coloca o tempo todo no front mistura correspondência com lenda.",
    "Scutari e Balaclava são lugares reais. A nota só acerta onde ela ficou.")
add("norton-scale-uma-das-primeiras-escalas-de-risco-de-lesao-por-pressao",
    "Doreen Norton publicou nos anos 1960 uma das primeiras escalas de risco de lesão por pressão. É anterior a Braden e a Waterlow.",
    "Ser anterior não a torna automaticamente a melhor para um serviço de hoje. Torna-a peça da história do instrumento.",
    "A grade não é reproduzida aqui.",
    "Lesão por pressão já tinha nome clínico antes da escala. A escala tentou prever, não batizar.")
add("notes-on-nursing-1859-o-livro-em-dominio-publico-de-florence-nightingale",
    "Notes on Nursing saiu em 1859. O livro está em domínio público. Nightingale o escreveu como conselho de higiene e de observação, não como tratado hospitalar completo.",
    "Ar, luz, limpeza, ruído e a leitura do paciente são os temas que o título carrega. Esta nota não transcreve capítulos.",
    "Domínio público permite ler o original. Não torna o conselho de 1859 um protocolo de infecção de 2026.",
    "O livro é fonte. A prática vigente é outra camada.")
add("nursing-in-america-a-history-of-social-reform-1990-documentario-historico",
    "Nursing in America: A History of Social Reform é um documentário histórico de 1990 sobre enfermagem e reforma social nos Estados Unidos.",
    "Documentário seleciona arquivo e narra. Não é a ata.",
    "Esta nota registra a existência e o ano. Não endossa cada afirmação da narração.",
    "Para nome, data e diploma, o caminho continua sendo o registro da escola e o censo, não o filme.")
add("o-estetoscopio-comecou-com-um-tubo-de-papel-a-historia-de-laennec",
    "Em 1816, René Laennec, em Paris, improvisa um tubo de papel para auscultar o tórax sem encostar o ouvido no corpo. O estetoscópio nasce dessa mediação.",
    "Ele depois usa madeira. O instrumento é monaural, de um ouvido. O binaural de Cammann vem décadas mais tarde.",
    "Laennec também escreveu o tratado que nomeia os sons. O tubo sem o tratado seria só um cano.",
    "Esta nota é a origem do objeto. Não ensina ausculta.")
add("onde-esta-enterrada-florence-nightingale",
    "Florence Nightingale está enterrada no adro de St Margaret, em East Wellow, Hampshire, no jazigo da família. Morreu em 1910.",
    "Ela recusou enterro em Westminster. Homenagens em Londres, placa e museu, não são o túmulo.",
    "East Wellow é uma igreja de paróquia, não um panteão. A discrição foi escolha dela.",
    "A nota sobre a igreja desenvolve o lugar. Esta responde à pergunta do túmulo.")
add("pins-e-broches-de-enfermagem-origem-de-uma-tradicao",
    "O pin de enfermagem marca a escola que formou a pessoa. A tradição cresce com as escolas do fim do século XIX, quando o diploma ganhava um distintivo.",
    "Broche de formatura não é medalha de guerra nem emblema de Genebra. Misturar as três peças é erro de insígnia.",
    "Cada escola desenha o seu. Não existe um pin universal da profissão.",
    "Usar o pin é identidade de turma. Não amplia o escopo da lei.")
add("por-que-existem-o-crescente-vermelho-e-o-cristal-vermelho",
    "O crescente vermelho foi aceito para que serviços do Império Otomano, no século XIX, não fossem obrigados a usar a cruz. O cristal vermelho, um losango vazio, entrou pelo Protocolo III, de 2005.",
    "Os três emblemas protegem a mesma função. Não anunciam religião nem marca.",
    "Crescente não é símbolo médico genérico, assim como a cruz não é. Os dois são sinais de proteção em conflito e de sociedades nacionais autorizadas.",
    "Esta nota não autoriza estampar nenhum deles.")
add("processo-de-enfermagem-1979-de-wanda-horta-obra-e-contexto",
    "Wanda de Aguiar Horta publicou Processo de Enfermagem em 1979. O livro organizou, para o ensino brasileiro, o processo em torno das necessidades humanas básicas.",
    "A obra é protegida. Esta nota fica no contexto: autora, ano, país e função do livro na formação.",
    "O processo, como método, não começa nem acaba nesse volume. A Resolução COFEN 736, de 2024, é a norma atual do processo no Brasil e revogou a 358, de 2009.",
    "Livro de 1979 não é o texto da resolução.")
add("quantas-categorias-profissionais-a-regulamentacao-da-enfermagem-brasileira-lista",
    "A Lei 7.498, de 25 de junho de 1986, nomeia enfermeiro, técnico de enfermagem, auxiliar de enfermagem e parteira. São quatro figuras no texto legal.",
    "Obstetriz, no mesmo regime, é título do enfermeiro com especialidade, não uma quinta categoria solta. Quem conta cinco costuma separar o que a lei junta, ou juntar o que a lei separa.",
    "O Decreto 94.406, de 1987, regulamenta o exercício. Não cria categoria nova.",
    "Contar categorias é ler o artigo. Não é contar cargos de um hospital.")
add("quarentena-por-que-o-nome-remete-a-quarenta-dias-e-comecou-com-trinta",
    "Quarentena vem do italiano quaranta giorni, quarenta dias. O isolamento de navios no Mediterrâneo, a partir do século XIV, fixou esse prazo.",
    "Antes circulava a trentina, de trinta dias. O nome que venceu foi o de quarenta, mesmo quando o prazo real variava.",
    "Quarentena, hoje, é palavra comum para isolamento. O número quarenta não é a regra sanitária vigente.",
    "A história do nome não define o prazo de uma doença de agora.")
add("ramsay-sedation-scale-origem",
    "A escala de Ramsay foi descrita por Michael Ramsay em 1974 para graduar sedação. É uma das mais antigas ainda citadas em anestesia e em terapia intensiva.",
    "Vai do paciente ansioso ao sem resposta. Esta nota não copia os níveis.",
    "Escalas posteriores, como a RASS, nasceram porque equipes queriam ver também agitação, não só sonolência.",
    "Origem não escolhe qual escala o serviço usa.")
add("rass-de-richmond-para-a-pratica-internacional",
    "A Richmond Agitation-Sedation Scale foi publicada no início dos anos 2000, com o grupo de Curtis Sessler e E. Wesley Ely. Richmond é o lugar do nome.",
    "A escala cobre agitação e sedação no mesmo eixo, com números negativos e positivos. A tabela não é reproduzida aqui.",
    "Saiu de um hospital americano para protocolos internacionais porque era curta e aplicável no ventilado. Difusão não é o mesmo que obrigatoriedade.",
    "Meta de sedação é decisão do caso e do protocolo, não desta nota.")
add("relogio-com-ponteiros-de-minutos-e-segundos-um-requisito-documentado-em-uma-escola-de-enfermagem-brasileira",
    "Escolas de enfermagem brasileiras chegaram a exigir relógio com ponteiro de segundos. O motivo prático era contar pulso, respiração e gotejamento.",
    "Há caso documentado em regulamento de escola. Esta nota não prende o caso a uma instituição cujo regulamento não está depositado ao lado do texto.",
    "O requisito diz da época em que o tempo do cuidado era lido no pulso, não no monitor.",
    "Relógio de ponteiro não é, por si, exigência ética atual.")
add("richard-monckton-milnes-o-pretendente-que-nightingale-recusou",
    "Richard Monckton Milnes pediu Florence Nightingale em casamento no fim dos anos 1840. Ela recusou.",
    "Milnes, depois Lord Houghton, era político e homem de letras. A recusa entrou na biografia como a escolha do trabalho contra a casa.",
    "A frase é dela, em carta, no sentido de que não cabia os dois caminhos. Esta nota não transcreve a carta.",
    "Recusar um casamento não explica Scutari. Explica uma decisão de 1849, anos antes da guerra.")
add("santa-casa-de-santos-e-sua-cronologia-historica",
    "A Santa Casa de Misericórdia de Santos tem cronologia longa e mais de uma data em circulação para fundação, instalação e reconhecimento.",
    "Irmandades de Misericórdia portuguesas chegam cedo à costa. O ano que um guia turístico imprime pode ser o da capela, o do compromisso ou o do hospital.",
    "Sem o compromisso pinçado, esta nota não elege um ano.",
    "Santos importa na história da saúde do porto. A data única ficaria larga demais.")
add("scutari-selimiye-barracks-e-a-guerra-da-crimeia",
    "Scutari é Üsküdar, na margem asiática de Istambul. O quartel Selimiye foi o hospital britânico onde Nightingale trabalhou durante a Guerra da Crimeia.",
    "A guerra era na península da Crimeia. O hospital principal dos britânicos, para onde os doentes cruzavam o mar, era este quartel.",
    "Selimiye hoje é quartel e memória. Não é o museu de Londres.",
    "Separar o mapa já evita metade dos erros de slide.")
add("semana-brasileira-de-enfermagem-12-a-20-de-maio-e-sua-historia",
    "A Semana Brasileira de Enfermagem ocupa, na tradição da ABEn, o intervalo de 12 a 20 de maio. O dia 12 lembra o nascimento de Nightingale. O dia 20 lembra Ana Néri, que morreu em 20 de maio de 1880.",
    "A semana é construção associativa brasileira. Não é o Dia Internacional, embora o contenha.",
    "Tema anual, cartaz e aberturas mudam. O intervalo é o que esta nota fixa.",
    "Semana comemorativa não altera lei de exercício.")
add("seringas-da-historia-do-instrumento-ao-modelo-hipodermico-moderno",
    "Houve seringa muito antes da injeção hipodérmica: metal, bexiga, irrigação. O salto do século XIX é a agulha fina que entra no tecido.",
    "Charles-Gabriel Pravaz e Alexander Wood, em meados do século, são os dois nomes que a história disputa nesse salto. Nenhum dos dois, sozinho, é o inventor único do objeto de hoje.",
    "A seringa descartável é um produto do século XX, por custo, vidro quebrado e infecção. É outro capítulo.",
    "Esta nota não descreve técnica de aplicação.")
add("silverman-andersen-a-historia-do-escore-respiratorio-neonatal",
    "O escore de Silverman-Andersen, de 1956, descreve o desconforto respiratório do recém-nascido a partir de sinais visíveis: batimento de asa nasal, retração, gemido.",
    "William Silverman e Dorothy Andersen estão na origem. O instrumento é de observação, anterior aos índices que usam gasometria.",
    "A grade de pontos não é reproduzida aqui.",
    "Sinal de desconforto não é diagnóstico e não escolhe ventilação.")
add("st-christophers-hospice-e-cicely-saunders",
    "St Christopher's Hospice, em Sydenham, Londres, abriu em 1967. É a casa que Cicely Saunders construiu para praticar o cuidado que ela tinha desenhado.",
    "A nota sobre Saunders é a pessoa. Esta é a instituição.",
    "Hospice, nessa origem, não é eufemismo para abandono. Era equipe, pesquisa de dor e permanência da família.",
    "Unidade de hoje que usa o nome hospice não é, automaticamente, herdeira do modelo de 1967.")
add("st-margarets-east-wellow-a-igreja-onde-nightingale-foi-enterrada",
    "St Margaret, em East Wellow, Hampshire, é a igreja paroquial do jazigo da família Nightingale. Florence foi enterrada lá em 1910.",
    "A lápide é simples. A escolha recusa o monumento nacional.",
    "Há placas em outros lugares. Placa não é sepultura.",
    "A nota sobre o túmulo responde onde. Esta descreve a igreja.")
add("st-thomas-hospital-e-a-nightingale-training-school",
    "A Nightingale Training School abriu em 1860 no St Thomas' Hospital, em Londres. É a escola que torna o nome dela um método de formação, não só uma fama de guerra.",
    "O hospital já existia. A escola é o acréscimo, com fundo próprio, vindo de doações depois da Crimeia.",
    "O museu de hoje está nesse sítio. A escola, como instituição do século XIX, não é o curso universitário atual.",
    "1860 é o marco da formação profissional que o mundo depois copiou e também contestou.")
add("termometros-clinicos-da-medicao-lenta-ao-uso-cotidiano",
    "O termômetro clínico demorou a caber no bolso. Os instrumentos do século XIX eram lentos, de mercúrio, e pediam minutos na axila.",
    "A forma curta, de leitura mais rápida, é que tornou a temperatura um sinal vital de rotina, não um experimento.",
    "Mercúrio saiu do uso comum por risco, não por moda. O digital muda o instrumento e não muda a pergunta: onde se mede e o que o número significa.",
    "Esta nota não fixa sítio nem valor de referência.")
add("toucas-de-enfermagem-funcao-identidade-e-desaparecimento-gradual",
    "A touca nasceu como peça de higiene e de identificação da escola. Faixa e listra chegaram a marcar o ano do curso.",
    "No fim do século XX ela saiu da maior parte dos serviços. Cabelo preso e gorro cirúrgico cumprem outra função, em outro lugar.",
    "O desaparecimento não foi um decreto único. Foi higiene, lavanderia, terapia intensiva e uma profissão que já não precisava da touca para ser reconhecida.",
    "Touca não é requisito do conselho.")
add("triagem-a-historia-do-termo-frances-trier",
    "Triagem vem do francês trier, separar. Na cirurgia de guerra, o verbo nomeia a escolha de quem atende primeiro quando não há recurso para todos.",
    "Dominique Jean Larrey é o nome que a história militar associa a esse sistema nos exércitos napoleônicos. O termo, na emergência civil, é muito posterior.",
    "Protocolo de Manchester, ESI e outras réguas são instrumentos do século XX e XXI. Não estão em Larrey.",
    "Esta nota é a palavra. Não é o protocolo da porta.")
add("uniformes-rosa-1965-e-cinza-1968-um-caso-documentado-na-enfermagem-brasileira",
    "Há registro brasileiro de uniforme rosa em 1965 e de troca para o cinza em 1968. A cor era decisão de escola ou de serviço, não lei da profissão.",
    "Esta nota guarda o par de anos. Não atribui o caso a uma instituição cujo documento não está ao lado do texto.",
    "O exemplo serve para desmontar o mito do branco eterno. A nota do mito é a regra. Esta é o caso.",
    "Cor de uniforme não mede competência.")
add("virginia-henderson-e-sua-definicao-de-enfermagem",
    "Virginia Henderson definiu enfermagem como a ajuda à pessoa, doente ou sã, naquilo que ela faria sozinha se tivesse força, vontade ou conhecimento. A formulação se firma no meio do século XX e foi adotada pelo Conselho Internacional de Enfermeiras.",
    "As necessidades básicas que ela enumerou organizaram currículo. A lista completa pertence à obra, que é protegida. Esta nota fica na definição, em paráfrase curta.",
    "Definição de teorista não revoga a Lei 7.498. As duas respondem perguntas diferentes.",
    "Ajudar a pessoa a fazer não é assumir o que a lei reserva a outra profissão.")
add("virginia-portocarrero-do-anuncio-no-jornal-a-segunda-guerra-mundial",
    "Virginia Portocarrero apresentou-se depois de um anúncio de jornal que convocava enfermeiras para a guerra. Serviu com a Força Expedicionária Brasileira na Itália.",
    "A memória popular guardou apelidos. Apelido não é o documento de embarque. O fato é a convocação pública e o serviço no teatro italiano.",
    "Ela é um nome do contingente, não o contingente inteiro. A nota sobre a ida à Itália trata do grupo.",
    "Esta página não reconstrói campanha militar.")
add("wanda-horta-e-as-necessidades-humanas-basicas",
    "Wanda Horta ensinou o processo de enfermagem a partir das necessidades humanas básicas, agrupadas em psicobiológicas, psicossociais e psicoespirituais.",
    "O livro de 1979 é a obra de referência e é protegido. Esta nota nomeia os três grupos. Não copia a tabela de necessidades.",
    "A teoria formou gerações de escolas brasileiras. Formar não é tornar a teoria uma resolução.",
    "A norma atual do processo é a Resolução COFEN 736, de 2024.")
add("waterlow-score-origem-e-contexto",
    "Judy Waterlow publicou em 1985 um escore de risco de lesão por pressão que inclui, além da pele e da mobilidade, fatores como idade, desnutrição e cirurgia.",
    "É posterior a Norton e contemporâneo do ciclo de Braden. Três escalas no mesmo problema não são intercambiáveis sem dizer qual se usa.",
    "A tabela de pontos não é reproduzida aqui.",
    "Escore de risco não prescreve cobertura de curativo.")
add("wonderful-adventures-of-mrs-seacole-1857-autobiografia-em-dominio-publico",
    "Wonderful Adventures of Mrs. Seacole in Many Lands saiu em Londres em 1857. Está em domínio público.",
    "É a fonte em primeira pessoa de Mary Seacole. A outra nota deste blog fala do que essa voz registra. Esta fala do livro como objeto: ano, cidade, domínio público.",
    "Domínio público permite leitura e edição fiel. Não obriga esta página a colar parágrafos.",
    "Edição moderna com prefácio novo pode ter texto de apresentador ainda protegido. O miolo de 1857 é que está livre.")

def main():
    pages = ROOT / "pages"
    missing = []
    catalog = []
    for path in sorted(pages.glob("*.json")):
        page = json.loads(path.read_text())
        slug = page["slug"]
        if slug not in NOTES:
            missing.append(slug)
            continue
        lead, a, b, c = NOTES[slug]
        title = page["title"]
        category = page["category"]
        related = page.get("content", {}).get("related_slugs") or []
        content = {
            "slug": slug,
            "title": title,
            "subtitle": "Blog de Enfermagem · nota original",
            "hero_lead": lead,
            "seo_description": lead[:180],
            "category": category,
            "intro": {"lead": lead, "bullets": [a], "context": "Texto escrito para este blog. Não reproduz obra de terceiro."},
            "sections": [
                {"id": "o-que-se-sabe", "title": "O que se sabe", "sources": [], "components": [], "paragraphs": [a, b]},
                {"id": "limite-desta-nota", "title": "Limite desta nota", "sources": [], "components": [], "paragraphs": [c]},
            ],
            "references": [],
            "related_slugs": related,
            "summary_items": [lead],
            "top_ids": [],
        }
        for key in ("period", "region"):
            if page.get("content", {}).get(key):
                content[key] = page["content"][key]
        out = {
            "slug": slug,
            "title": title,
            "category": category,
            "source_package": "blog-enfermagem-nota-original-2026-11-14",
            "source_sha256": None,
            "html_source_sha256": None,
            "section_count": 2,
            "reference_count": 0,
            "content_status": "ORIGINAL_NOTE",
            "review_reason": "Nota original do Blog de Enfermagem. Não é orientação clínica.",
            "updated_at": "2026-11-14T23:55:00Z",
            "content": content,
        }
        path.write_text(json.dumps(out, ensure_ascii=False, indent=2) + "\n")
        catalog.append({k: out[k] for k in (
            "slug", "title", "category", "source_package", "source_sha256", "html_source_sha256",
            "section_count", "reference_count", "content_status", "review_reason", "updated_at")})
    if missing:
        raise SystemExit("faltam notas: " + ", ".join(missing))
    (ROOT / "catalog.json").write_text(json.dumps(catalog, ensure_ascii=False, indent=2) + "\n")
    ts = (
        "import type { CuriosityMeta } from './types.ts';\n\n"
        "/** 87 notas do Blog de Enfermagem. Texto original. Não é homologação clínica. */\n"
        "export const curiosityCatalog: CuriosityMeta[] = "
        + json.dumps([{k: v for k, v in item.items() if k not in ("source_sha256", "html_source_sha256")} for item in catalog], ensure_ascii=False, indent=2)
        + ";\n\n"
        "export const curiosityCategoryLabels: Record<string, string> = {\n"
        "  people: \"Pessoas e pioneiros\",\n"
        "  origins: \"Origens\",\n"
        "  places: \"Lugares\",\n"
        "  symbols: \"Símbolos\",\n"
        "  history: \"História\",\n"
        "  myths: \"Mitos e fatos\",\n"
        "  terms: \"Termos e expressões\",\n"
        "  culture: \"Cultura da enfermagem\",\n"
        "};\n\n"
        "const curiosityBySlug = new Map(curiosityCatalog.map((item) => [item.slug, item]));\n\n"
        "export function findCuriosityMeta(slug: string): CuriosityMeta | undefined {\n"
        "  return curiosityBySlug.get(slug);\n"
        "}\n"
    )
    (ROOT / "catalog.ts").write_text(ts)
    print("notas", len(NOTES), "paginas", len(catalog))

if __name__ == "__main__":
    main()
