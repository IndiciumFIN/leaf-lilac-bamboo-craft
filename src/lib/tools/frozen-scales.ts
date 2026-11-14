import type { ClinicalTool } from "@/lib/tools/types";

/** Itens copiados do formulário candidato do acervo. Não é homologação clínica. */
export const frozenScales: ClinicalTool[] = [
  {
    "slug": "gosnell",
    "kind": "escala",
    "category": "Lesão por pressão",
    "title": "ESCALA DE GOSNELL — RISCO DE LESÃO POR PRESSÃO",
    "lead": "Avaliação estruturada do risco de lesão por pressão em cinco domínios funcionais",
    "nandaMode": "nao-fechar",
    "criteria": [
      {
        "id": "mental",
        "label": "Estado mental",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 1,
            "label": "Alerta"
          },
          {
            "value": 2,
            "label": "Apático"
          },
          {
            "value": 3,
            "label": "Confuso"
          },
          {
            "value": 4,
            "label": "Torporoso"
          },
          {
            "value": 5,
            "label": "Inconsciente"
          }
        ]
      },
      {
        "id": "continencia",
        "label": "Continência",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 1,
            "label": "Completamente controlada"
          },
          {
            "value": 2,
            "label": "Usualmente controlada"
          },
          {
            "value": 3,
            "label": "Minimamente controlada"
          },
          {
            "value": 4,
            "label": "Ausência de controle"
          }
        ]
      },
      {
        "id": "mobilidade",
        "label": "Mobilidade",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 1,
            "label": "Completa"
          },
          {
            "value": 2,
            "label": "Ligeiramente limitada"
          },
          {
            "value": 3,
            "label": "Muito limitada"
          },
          {
            "value": 4,
            "label": "Imóvel"
          }
        ]
      },
      {
        "id": "atividade",
        "label": "Atividade física",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 1,
            "label": "Deambula"
          },
          {
            "value": 2,
            "label": "Caminha com assistência"
          },
          {
            "value": 3,
            "label": "Restrito à cadeira"
          },
          {
            "value": 4,
            "label": "Acamado"
          }
        ]
      },
      {
        "id": "nutricao",
        "label": "Nutrição",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 1,
            "label": "Boa"
          },
          {
            "value": 2,
            "label": "Regular"
          },
          {
            "value": 3,
            "label": "Pobre"
          }
        ]
      }
    ],
    "howTo": [
      "Estado mental · Continência · Mobilidade · Atividade · Nutrição (5–20)",
      "Escore de risco auxiliar. Estado de pele, perfusão, dispositivos e fatores clínicos também devem ser avaliados, independentemente da pontuação.",
      "Cinco domínios, com máximos 5, 4, 4, 4 e 3. A validação encontrada é turca (2026), não autoriza inferir validação transcultural brasileira. Os limiares requerem revisão por especialista.",
      "Some os pontos. O resultado não fecha diagnóstico nem autoriza conduta sozinho."
    ],
    "faqs": [],
    "references": [
      "Turkish Journal of Family Practice 2026 — validação de Gosnell, itens e total 5–20. https://turkjfampract.org/article/view/814",
      "Gosnell Scale: Pressure Ulcer Risk — descrição, cinco domínios. https://www.calculadorasdeenfermagem.com.br/en/gosnell.html"
    ],
    "related": [],
    "publicacao": "candidata",
    "version": "0.1.0-canonical",
    "bands": [
      {
        "min": 5,
        "max": 15,
        "label": "Pontuação abaixo de 16",
        "tone": "ok",
        "note": "Ainda requer avaliação clínica das vulnerabilidades e medidas preventivas.",
        "nanda": []
      },
      {
        "min": 16,
        "max": 20,
        "label": "Pontuação de risco mais elevado",
        "tone": "info",
        "note": "Estudo de validação descreve maior risco a partir de 16. Confirmar aplicabilidade da variante e de populações diferentes.",
        "nanda": []
      }
    ]
  },
  {
    "slug": "norton",
    "kind": "escala",
    "category": "Lesão por pressão",
    "title": "ESCALA DE NORTON",
    "lead": "Avaliação do risco de desenvolvimento de lesão por pressão",
    "nandaMode": "nao-fechar",
    "criteria": [
      {
        "id": "physical_condition",
        "label": "01. Condição física",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 4,
            "label": "Boa"
          },
          {
            "value": 3,
            "label": "Regular"
          },
          {
            "value": 2,
            "label": "Ruim"
          },
          {
            "value": 1,
            "label": "Muito ruim"
          }
        ]
      },
      {
        "id": "mental_condition",
        "label": "02. Estado mental",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 4,
            "label": "Alerta"
          },
          {
            "value": 3,
            "label": "Apático"
          },
          {
            "value": 2,
            "label": "Confuso"
          },
          {
            "value": 1,
            "label": "Estuporoso"
          }
        ]
      },
      {
        "id": "activity",
        "label": "03. Atividade",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 4,
            "label": "Deambula"
          },
          {
            "value": 3,
            "label": "Caminha com ajuda"
          },
          {
            "value": 2,
            "label": "Restrito à cadeira"
          },
          {
            "value": 1,
            "label": "Acamado"
          }
        ]
      },
      {
        "id": "mobility",
        "label": "04. Mobilidade",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 4,
            "label": "Sem limitação"
          },
          {
            "value": 3,
            "label": "Pouco limitada"
          },
          {
            "value": 2,
            "label": "Muito limitada"
          },
          {
            "value": 1,
            "label": "Imóvel"
          }
        ]
      },
      {
        "id": "incontinence",
        "label": "05. Incontinência",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 4,
            "label": "Ausente"
          },
          {
            "value": 3,
            "label": "Ocasional"
          },
          {
            "value": 2,
            "label": "Urinária ou fecal frequente"
          },
          {
            "value": 1,
            "label": "Dupla: urinária e fecal"
          }
        ]
      }
    ],
    "howTo": [
      "5 parâmetros de avaliação — selecione uma alternativa por linha",
      "Instrumento de apoio à avaliação do risco de lesão por pressão em adultos. Avalie também integridade da pele, perfusão, dispositivos, nutrição e demais fatores clínicos. Não utilizar a pontuação isoladamente para definir cuidados.",
      "Quanto menor o escore, maior o risco potencial. O limite ≤14 é uma referência descrita pela AHRQ; há estudos com cortes ≤15 ou ≤16. Não equivale a diagnóstico nem define medidas isoladamente; avaliar a pele, o contexto assistencial e protocolos institucionais.",
      "Some os pontos. O resultado não fecha diagnóstico nem autoriza conduta sozinho."
    ],
    "faqs": [],
    "references": [
      "AHRQ. Preventing Pressure Ulcers in Hospitals, ferramenta 3E: Norton Scale. https://www.ahrq.gov/patient-safety/settings/hospital/resource/pressureulcer/tool/pu7b.html",
      "Perneger TV et al. Contribution of individual items to the performance of the Norton scale. J Am Geriatr Soc. 1998. https://pubmed.ncbi.nlm.nih.gov/9777913/",
      "NICE. Pressure ulcers: prevention and management — Risk assessment evidence. https://www.ncbi.nlm.nih.gov/books/NBK333157/"
    ],
    "related": [],
    "publicacao": "candidata",
    "version": "0.1.0-candidate",
    "bands": [
      {
        "min": 5,
        "max": 14,
        "label": "5–14 · risco sinalizado",
        "tone": "danger",
        "note": "Ponto de corte frequentemente utilizado; requer avaliação clínica e medidas conforme protocolo.",
        "nanda": []
      },
      {
        "min": 15,
        "max": 20,
        "label": "15–20 · acima do corte de 14",
        "tone": "ok",
        "note": "Não exclui lesão por pressão. Reavaliar fatores individuais e risco clínico.",
        "nanda": []
      }
    ]
  },
  {
    "slug": "waterlow",
    "kind": "escala",
    "category": "Lesão por pressão",
    "title": "ESCALA DE WATERLOW",
    "lead": "Avaliação multifatorial do risco de lesão por pressão — piloto pt-BR",
    "nandaMode": "nao-fechar",
    "criteria": [
      {
        "id": "build",
        "label": "01. Constituição / IMC",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Faixa habitual (IMC 20–24,9)"
          },
          {
            "value": 1,
            "label": "Acima da média (25–29,9)"
          },
          {
            "value": 2,
            "label": "Obesidade (≥30)"
          },
          {
            "value": 3,
            "label": "Abaixo da média (<20)"
          }
        ]
      },
      {
        "id": "skin",
        "label": "02. Pele nas áreas de risco",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Íntegra, sem alteração visível"
          },
          {
            "value": 1,
            "label": "Pele fina, seca, úmida ou edemaciada"
          },
          {
            "value": 2,
            "label": "Alteração de coloração"
          },
          {
            "value": 3,
            "label": "Área com lesão"
          }
        ]
      },
      {
        "id": "sex",
        "label": "03. Sexo considerado na tabela",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 1,
            "label": "Masculino (1)"
          },
          {
            "value": 2,
            "label": "Feminino (2)"
          }
        ]
      },
      {
        "id": "age_band",
        "label": "04. Faixa etária",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 1,
            "label": "14–49 anos"
          },
          {
            "value": 2,
            "label": "50–64 anos"
          },
          {
            "value": 3,
            "label": "65–74 anos"
          },
          {
            "value": 4,
            "label": "75–80 anos"
          },
          {
            "value": 5,
            "label": "81–120 anos"
          }
        ]
      },
      {
        "id": "continence",
        "label": "05. Continência",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Continente ou apenas cateterizado"
          },
          {
            "value": 1,
            "label": "Incontinência urinária"
          },
          {
            "value": 2,
            "label": "Incontinência fecal (inclusive com cateter urinário)"
          },
          {
            "value": 3,
            "label": "Incontinência urinária e fecal"
          }
        ]
      },
      {
        "id": "mobility",
        "label": "06. Mobilidade",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Plenamente móvel"
          },
          {
            "value": 1,
            "label": "Inquieto ou agitado"
          },
          {
            "value": 2,
            "label": "Apático"
          },
          {
            "value": 3,
            "label": "Restrição de movimentos"
          },
          {
            "value": 4,
            "label": "Acamado / tração"
          },
          {
            "value": 5,
            "label": "Confinado à cadeira"
          }
        ]
      },
      {
        "id": "appetite",
        "label": "07. Ingesta / apetite",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Apetite ou ingesta habitual"
          },
          {
            "value": 1,
            "label": "Ingesta insuficiente"
          },
          {
            "value": 2,
            "label": "Nutrição por sonda / apenas fluidos"
          },
          {
            "value": 3,
            "label": "Sem ingesta / anorexia"
          }
        ]
      },
      {
        "id": "organ",
        "label": "08. Subnutrição tecidual: condição sistêmica",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Nenhuma condição assinalada"
          },
          {
            "value": 5,
            "label": "Insuficiência isolada de órgão"
          },
          {
            "value": 8,
            "label": "Caquexia terminal ou falência múltipla de órgãos"
          }
        ]
      },
      {
        "id": "vascular",
        "label": "09. Doença vascular periférica",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Ausente"
          },
          {
            "value": 5,
            "label": "Presente"
          }
        ]
      },
      {
        "id": "anemia",
        "label": "10. Anemia importante (Hb < 8 g/dL)",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Ausente"
          },
          {
            "value": 2,
            "label": "Presente"
          }
        ]
      },
      {
        "id": "smoking",
        "label": "11. Tabagismo",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Não"
          },
          {
            "value": 1,
            "label": "Sim"
          }
        ]
      },
      {
        "id": "neurologic",
        "label": "12. Déficit neurológico / sensório-motor",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Ausente"
          },
          {
            "value": 4,
            "label": "Presente · grau 4 (requer revisão)"
          },
          {
            "value": 5,
            "label": "Presente · grau 5 (requer revisão)"
          },
          {
            "value": 6,
            "label": "Presente · grau 6 (requer revisão)"
          }
        ]
      },
      {
        "id": "orthopedic",
        "label": "13. Cirurgia / trauma ortopédico ou espinhal",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Não"
          },
          {
            "value": 5,
            "label": "Sim"
          }
        ]
      },
      {
        "id": "surgery",
        "label": "14. Tempo em mesa cirúrgica",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Não se aplica / até 2 h"
          },
          {
            "value": 5,
            "label": "Acima de 2 h até 6 h"
          },
          {
            "value": 8,
            "label": "Acima de 6 h"
          }
        ]
      },
      {
        "id": "medications",
        "label": "15. Medicamentos: exposição relevante",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Não"
          },
          {
            "value": 4,
            "label": "Citotóxicos, corticoides sistêmicos em doses altas/prolongadas ou anti-inflamatórios: máximo 4"
          }
        ]
      }
    ],
    "howTo": [
      "Critérios de risco — selecione uma alternativa por fator (versão candidata)",
      "PILOTO NÃO VALIDADO PARA USO CLÍNICO. Pontuação de Waterlow exige avaliar fatores adicionais, multiplicidade de riscos, contexto e versão utilizada. Uso assistencial bloqueado até revisão profissional e licença de uso.",
      "Categorias e valores adaptados de fonte Waterlow (1985, rev. 2005). O intervalo de soma apresentado é APENAS o limite aritmético deste piloto, não o escore máximo oficial validado. A publicação está bloqueada: revisar categorias cumulativas, pontuação neurológica 4–6, cortes e critérios de prevenção. Para menores de 14 anos, esta variante não deve fornecer classificação.",
      "Some os pontos. O resultado não fecha diagnóstico nem autoriza conduta sozinho."
    ],
    "faqs": [],
    "references": [
      "Waterlow J. Pressure sore risk assessment chart, revisão 2005. Repositório do instrumento e pontuações. https://thenurseszone.com/wp-content/uploads/2015/10/Waterlow-scale.pdf",
      "Rocha ABL, Barros SMO. Versão portuguesa da Waterlow: estudo brasileiro. Acta Paul Enferm. 2007. https://doi.org/10.1590/S0103-21002007000200006",
      "NHS Cambridgeshire & Peterborough: anexo de avaliação Waterlow e múltiplos fatores. https://www.cpft.nhs.uk/download/g04-guidelines-on-the-prevention-and-management-of-pressure-ulcers.pdf?ver=16238",
      "NHS England: permissões de uso de escalas e avaliações com direitos reservados. https://digital.nhs.uk/services/national-clinical-content-repository-copyright-licensing-service"
    ],
    "related": [],
    "publicacao": "candidata",
    "version": "0.1.0-pilot",
    "bands": [
      {
        "min": 2,
        "max": 9,
        "label": "Abaixo de 10 · sem gatilho pela tabela",
        "tone": "ok",
        "note": "Não significa ausência de risco; há fatores clínicos não capturados.",
        "nanda": []
      },
      {
        "min": 10,
        "max": 14,
        "label": "10–14 · risco sinalizado",
        "tone": "danger",
        "note": "Avaliar integridade cutânea e prevenção segundo protocolo.",
        "nanda": []
      },
      {
        "min": 15,
        "max": 19,
        "label": "15–19 · alto risco",
        "tone": "danger",
        "note": "Necessidade de avaliação e plano preventivo individualizado.",
        "nanda": []
      },
      {
        "min": 20,
        "max": 63,
        "label": "≥ 20 · risco muito alto",
        "tone": "danger",
        "note": "Requer atenção clínica ampliada, sem conduta automática.",
        "nanda": []
      }
    ]
  },
  {
    "slug": "berg",
    "kind": "escala",
    "category": "Quedas e mobilidade",
    "title": "ESCALA DE EQUILÍBRIO DE BERG (BBS)",
    "lead": "Avaliação funcional do equilíbrio estático e dinâmico",
    "nandaMode": "nao-fechar",
    "criteria": [
      {
        "id": "sit_to_stand",
        "label": "01. Sentado para em pé",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 4,
            "label": "Levanta sem mãos; estabiliza-se sozinho"
          },
          {
            "value": 3,
            "label": "Levanta sozinho, usando as mãos"
          },
          {
            "value": 2,
            "label": "Levanta após várias tentativas com mãos"
          },
          {
            "value": 1,
            "label": "Exige ajuda mínima para erguer/estabilizar"
          },
          {
            "value": 0,
            "label": "Exige ajuda moderada ou máxima"
          }
        ]
      },
      {
        "id": "stand_unsupported",
        "label": "02. Em pé sem apoio",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 4,
            "label": "Mantém-se seguro por 2 minutos"
          },
          {
            "value": 3,
            "label": "Fica 2 minutos sob supervisão"
          },
          {
            "value": 2,
            "label": "Fica 30 segundos sem apoio"
          },
          {
            "value": 1,
            "label": "Precisa de várias tentativas para 30 s"
          },
          {
            "value": 0,
            "label": "Não mantém 30 s sem apoio"
          }
        ]
      },
      {
        "id": "sit_unsupported",
        "label": "03. Sentado sem encosto",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 4,
            "label": "Fica firme por 2 minutos"
          },
          {
            "value": 3,
            "label": "Fica 2 min sob supervisão"
          },
          {
            "value": 2,
            "label": "Fica sentado por 30 segundos"
          },
          {
            "value": 1,
            "label": "Fica sentado por 10 segundos"
          },
          {
            "value": 0,
            "label": "Não consegue 10 s sem apoio"
          }
        ]
      },
      {
        "id": "stand_to_sit",
        "label": "04. Em pé para sentado",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 4,
            "label": "Senta seguro, mínimo uso das mãos"
          },
          {
            "value": 3,
            "label": "Controla descida com as mãos"
          },
          {
            "value": 2,
            "label": "Controla descida apoiando pernas na cadeira"
          },
          {
            "value": 1,
            "label": "Senta sozinho, porém desce sem controle"
          },
          {
            "value": 0,
            "label": "Necessita de ajuda para sentar"
          }
        ]
      },
      {
        "id": "transfers",
        "label": "05. Transferências",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 4,
            "label": "Transfere seguro, pouco uso das mãos"
          },
          {
            "value": 3,
            "label": "Transfere seguro, depende das mãos"
          },
          {
            "value": 2,
            "label": "Exige orientações ou supervisão"
          },
          {
            "value": 1,
            "label": "Necessita ajuda de uma pessoa"
          },
          {
            "value": 0,
            "label": "Necessita ajuda/supervisão de duas pessoas"
          }
        ]
      },
      {
        "id": "eyes_closed",
        "label": "06. Em pé, olhos fechados",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 4,
            "label": "Fica 10 segundos com segurança"
          },
          {
            "value": 3,
            "label": "Fica 10 s sob supervisão"
          },
          {
            "value": 2,
            "label": "Fica 3 segundos"
          },
          {
            "value": 1,
            "label": "Não sustenta 3 s de olhos fechados, mas fica seguro"
          },
          {
            "value": 0,
            "label": "Exige ajuda para não cair"
          }
        ]
      },
      {
        "id": "feet_together",
        "label": "07. Em pé, pés juntos",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 4,
            "label": "Junta pés sozinho; fica 1 min seguro"
          },
          {
            "value": 3,
            "label": "Junta pés; fica 1 min supervisionado"
          },
          {
            "value": 2,
            "label": "Junta pés, mas não sustenta 30 s"
          },
          {
            "value": 1,
            "label": "Precisa ajuda para posicionar; sustenta 15 s"
          },
          {
            "value": 0,
            "label": "Precisa ajuda; não sustenta 15 s"
          }
        ]
      },
      {
        "id": "forward_reach",
        "label": "08. Alcance anterior",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 4,
            "label": "Alcança 25 cm com segurança"
          },
          {
            "value": 3,
            "label": "Alcança 12,5 cm com segurança"
          },
          {
            "value": 2,
            "label": "Alcança 5 cm com segurança"
          },
          {
            "value": 1,
            "label": "Alcança à frente sob supervisão"
          },
          {
            "value": 0,
            "label": "Perde equilíbrio ou precisa se apoiar"
          }
        ]
      },
      {
        "id": "pick_up",
        "label": "09. Objeto no chão",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 4,
            "label": "Pega calçado de modo seguro"
          },
          {
            "value": 3,
            "label": "Pega calçado sob supervisão"
          },
          {
            "value": 2,
            "label": "Chega a 2–5 cm do calçado sem perder equilíbrio"
          },
          {
            "value": 1,
            "label": "Não pega; exige supervisão ao tentar"
          },
          {
            "value": 0,
            "label": "Não tenta ou precisa de ajuda antqueda"
          }
        ]
      },
      {
        "id": "look_behind",
        "label": "10. Olhar para trás",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 4,
            "label": "Olha atrás dos dois lados; transfere peso"
          },
          {
            "value": 3,
            "label": "Olha atrás de um lado; menos rotação do outro"
          },
          {
            "value": 2,
            "label": "Gira lateralmente sem perder equilíbrio"
          },
          {
            "value": 1,
            "label": "Necessita supervisão para girar"
          },
          {
            "value": 0,
            "label": "Necessita ajuda para evitar queda"
          }
        ]
      },
      {
        "id": "turn_360",
        "label": "11. Giro de 360°",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 4,
            "label": "Gira ambos lados seguro em até 4 s cada"
          },
          {
            "value": 3,
            "label": "Gira um lado em até 4 s, seguro"
          },
          {
            "value": 2,
            "label": "Gira com segurança, mas lentamente"
          },
          {
            "value": 1,
            "label": "Precisa de supervisão ou comandos"
          },
          {
            "value": 0,
            "label": "Necessita ajuda para girar"
          }
        ]
      },
      {
        "id": "step_alternate",
        "label": "12. Pés alternados no degrau",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 4,
            "label": "Completa 8 toques em até 20 s, seguro"
          },
          {
            "value": 3,
            "label": "Completa 8 toques em mais de 20 s"
          },
          {
            "value": 2,
            "label": "Completa 4 toques sob supervisão"
          },
          {
            "value": 1,
            "label": "Completa mais de 2 toques com ajuda mínima"
          },
          {
            "value": 0,
            "label": "Não consegue ou precisa ajuda antqueda"
          }
        ]
      },
      {
        "id": "tandem",
        "label": "13. Um pé à frente do outro",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 4,
            "label": "Pés em tandem; sustenta 30 s"
          },
          {
            "value": 3,
            "label": "Pé adiante/lateralizado; mantém 30 s"
          },
          {
            "value": 2,
            "label": "Pequeno passo sozinho; sustenta 30 s"
          },
          {
            "value": 1,
            "label": "Precisa ajuda para dar passo; sustenta 15 s"
          },
          {
            "value": 0,
            "label": "Perde equilíbrio no passo ou em pé"
          }
        ]
      },
      {
        "id": "single_leg",
        "label": "14. Apoio em um pé",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 4,
            "label": "Fica em um pé mais de 10 s"
          },
          {
            "value": 3,
            "label": "Fica em um pé de 5 a 10 s"
          },
          {
            "value": 2,
            "label": "Fica em um pé por ao menos 3 s"
          },
          {
            "value": 1,
            "label": "Tenta, mas não sustenta 3 s"
          },
          {
            "value": 0,
            "label": "Não tenta ou precisa de ajuda antqueda"
          }
        ]
      }
    ],
    "howTo": [
      "14 tarefas de equilíbrio funcional — selecione a pontuação observada",
      "Uso profissional. Execute as tarefas com segurança e supervisão apropriada. Selecione o nível mais baixo que descreva o desempenho; não force a execução se houver risco de queda.",
      "Não há faixa de risco universal para todas as populações. Considere histórico de quedas, marcha, uso de dispositivos, contexto e protocolos locais.",
      "Some os pontos. O resultado não fecha diagnóstico nem autoriza conduta sozinho."
    ],
    "faqs": [],
    "references": [
      "Miyamoto ST et al. Brazilian version of the Berg balance scale. Braz J Med Biol Res. 2004;37:1411–1421. https://doi.org/10.1590/S0100-879X2004000900017",
      "Academy of Neurologic Physical Therapy. Berg Balance Scale: standardized protocol e critérios (2018). https://www.neuropt.org/docs/default-source/cpgs/core-outcome-measures/core-outcome-measures-documents-july-2018/berg_protocol_final.pdf",
      "Shirley Ryan AbilityLab. Berg Balance Scale — Rehabilitation Measures Database. https://www.sralab.org/rehabilitation-measures/berg-balance-scale"
    ],
    "related": [],
    "publicacao": "candidata",
    "version": "0.2.1-candidate",
    "bands": [
      {
        "min": 0,
        "max": 56,
        "label": "0–56 pontos",
        "tone": "info",
        "note": "Maior pontuação indica melhor desempenho no equilíbrio funcional; não implica ausência de risco de queda.",
        "nanda": []
      }
    ]
  },
  {
    "slug": "downton",
    "kind": "escala",
    "category": "Quedas e mobilidade",
    "title": "DOWNTON — ÍNDICE DE RISCO DE QUEDAS",
    "lead": "Índice de Downton completo: quedas prévias, cinco categorias de medicamentos, três déficits sensoriais, cognição e marcha",
    "nandaMode": "nao-fechar",
    "criteria": [
      {
        "id": "quedas",
        "label": "Histórico conhecido de queda anterior",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Não"
          },
          {
            "value": 1,
            "label": "Sim"
          }
        ]
      },
      {
        "id": "sedativos",
        "label": "Uso de tranquilizantes ou sedativos",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Não"
          },
          {
            "value": 1,
            "label": "Sim"
          }
        ]
      },
      {
        "id": "diureticos",
        "label": "Uso de diuréticos",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Não"
          },
          {
            "value": 1,
            "label": "Sim"
          }
        ]
      },
      {
        "id": "anti_hipertensivos",
        "label": "Uso de anti-hipertensivos (excluindo diuréticos)",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Não"
          },
          {
            "value": 1,
            "label": "Sim"
          }
        ]
      },
      {
        "id": "anti_parkinson",
        "label": "Uso de medicamentos antiparkinsonianos",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Não"
          },
          {
            "value": 1,
            "label": "Sim"
          }
        ]
      },
      {
        "id": "antidepressivos",
        "label": "Uso de antidepressivos",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Não"
          },
          {
            "value": 1,
            "label": "Sim"
          }
        ]
      },
      {
        "id": "visao",
        "label": "Comprometimento visual",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Não"
          },
          {
            "value": 1,
            "label": "Sim"
          }
        ]
      },
      {
        "id": "audicao",
        "label": "Comprometimento auditivo",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Não"
          },
          {
            "value": 1,
            "label": "Sim"
          }
        ]
      },
      {
        "id": "membros",
        "label": "Comprometimento de membros (ex.: déficits motores)",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Não"
          },
          {
            "value": 1,
            "label": "Sim"
          }
        ]
      },
      {
        "id": "mental",
        "label": "Estado mental",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Orientado"
          },
          {
            "value": 1,
            "label": "Confuso ou desorientado"
          }
        ]
      },
      {
        "id": "marcha",
        "label": "Segurança da marcha",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Marcha segura, com/sem dispositivo, ou impossibilidade de andar"
          },
          {
            "value": 1,
            "label": "Marcha insegura com ou sem dispositivo"
          }
        ]
      }
    ],
    "howTo": [
      "Onze subcritérios binários — total 0 a 11",
      "Não usar a versão simplificada de cinco itens com máximo de cinco pontos; medicamentos e déficits sensoriais podem pontuar separadamente. Escore é ferramenta auxiliar e não substitui prevenção de quedas.",
      "Reconstruído em 11 itens binários, distinguindo cinco classes de medicamentos e três déficits sensoriais, pois a tabela histórica do Drive reduzia indevidamente o escore a 0–5. Se houver múltiplas classes de medicamento, cada uma pontua uma vez.",
      "Some os pontos. O resultado não fecha diagnóstico nem autoriza conduta sozinho."
    ],
    "faqs": [],
    "references": [
      "openEHR Clinical Knowledge Manager. Downton Fall Risk Index, observação canônica. https://ckm.openehr.org/ckm/archetypes/1013.1.5144",
      "Rosendahl e colaboradores. Prediction of falls by the Downton index, 2003. https://www.researchgate.net/publication/6432597_Prediction_of_falls_among_older_people_in_residential_care_facilities_by_the_Downton_index"
    ],
    "related": [],
    "publicacao": "candidata",
    "version": "0.1.0-canonical",
    "bands": [
      {
        "min": 0,
        "max": 2,
        "label": "Menos de três fatores pontuados",
        "tone": "ok",
        "note": "Avaliar fatores e medidas de prevenção conforme contexto do cuidado.",
        "nanda": []
      },
      {
        "min": 3,
        "max": 11,
        "label": "Três ou mais fatores pontuados",
        "tone": "info",
        "note": "Faixa frequentemente usada para maior risco de queda; aplicar prevenção institucional e avaliação clínica.",
        "nanda": []
      }
    ]
  },
  {
    "slug": "hendrich",
    "kind": "escala",
    "category": "Quedas e mobilidade",
    "title": "HENDRICH II — RISCO DE QUEDA",
    "lead": "Modelo de oito fatores, incluindo o teste de levantar e andar",
    "nandaMode": "nao-fechar",
    "criteria": [
      {
        "id": "confusao",
        "label": "Confusão, desorientação ou impulsividade",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Ausente"
          },
          {
            "value": 4,
            "label": "Presente"
          }
        ]
      },
      {
        "id": "depressao",
        "label": "Depressão sintomática",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Ausente"
          },
          {
            "value": 2,
            "label": "Presente"
          }
        ]
      },
      {
        "id": "eliminacao",
        "label": "Eliminação alterada",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Ausente"
          },
          {
            "value": 1,
            "label": "Presente"
          }
        ]
      },
      {
        "id": "vertigem",
        "label": "Tontura ou vertigem",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Ausente"
          },
          {
            "value": 1,
            "label": "Presente"
          }
        ]
      },
      {
        "id": "sexo_masculino",
        "label": "Fator sexo masculino (conforme modelo original)",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Não"
          },
          {
            "value": 1,
            "label": "Sim"
          }
        ]
      },
      {
        "id": "antiepileptico",
        "label": "Antiepiléptico administrado",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Não"
          },
          {
            "value": 2,
            "label": "Sim"
          }
        ]
      },
      {
        "id": "benzodiazepinico",
        "label": "Benzodiazepínico administrado",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Não"
          },
          {
            "value": 1,
            "label": "Sim"
          }
        ]
      },
      {
        "id": "get_up_go",
        "label": "Teste Get Up and Go",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Levanta em um movimento; equilíbrio mantido"
          },
          {
            "value": 1,
            "label": "Apoia-se; levanta na primeira tentativa"
          },
          {
            "value": 3,
            "label": "Múltiplas tentativas, com sucesso"
          },
          {
            "value": 4,
            "label": "Não consegue levantar sem assistência"
          }
        ]
      }
    ],
    "howTo": [
      "Oito fatores do Hendrich II (somar os pontos atribuídos)",
      "Uso exclusivo para revisão técnica. A reprodução/distribuição do Hendrich II requer verificação de permissão do titular. O escore não substitui a avaliação clínica.",
      "Avaliação de oito fatores clínicos com pesos não uniformes. Os valores são 0, 1, 2, 3 ou 4, conforme o fator; máximo de 16. Evitar interpretar escore parcial como final.",
      "Some os pontos. O resultado não fecha diagnóstico nem autoriza conduta sozinho."
    ],
    "faqs": [],
    "references": [
      "LOINC — Hendrich II: fatores, pesos, Get Up and Go e ponto de corte. https://loinc.org/104028-6/panel",
      "Hendrich et al. Validation of the Hendrich II Fall Risk Model. Appl Nurs Res. 2003. https://pubmed.ncbi.nlm.nih.gov/?term=Hendrich+II+fall+risk+model+2003",
      "Estudo de desempenho prospectivo em reabilitação (2018). https://pmc.ncbi.nlm.nih.gov/articles/PMC5765700/"
    ],
    "related": [],
    "publicacao": "candidata",
    "version": "0.1.0-wave-gated",
    "bands": [
      {
        "min": 0,
        "max": 4,
        "label": "Abaixo do ponto de corte do instrumento",
        "tone": "ok",
        "note": "Reavaliar clinicamente; não exclui risco de queda.",
        "nanda": []
      },
      {
        "min": 5,
        "max": 16,
        "label": "Risco elevado pelo Hendrich II",
        "tone": "info",
        "note": "Exige plano individual e medidas de prevenção de quedas; não substitui avaliação clínica.",
        "nanda": []
      }
    ]
  },
  {
    "slug": "humpty",
    "kind": "escala",
    "category": "Quedas e mobilidade",
    "title": "ESCALA HUMPTY DUMPTY",
    "lead": "Avaliação estruturada de fatores de risco de queda em pediatria",
    "nandaMode": "nao-fechar",
    "criteria": [
      {
        "id": "idade",
        "label": "Idade",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 4,
            "label": "Menos de 3 anos"
          },
          {
            "value": 3,
            "label": "3 a 7 anos"
          },
          {
            "value": 2,
            "label": "7 a 13 anos"
          },
          {
            "value": 1,
            "label": "13 anos e mais velhos"
          }
        ]
      },
      {
        "id": "sexo",
        "label": "Sexo",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 2,
            "label": "Masculino"
          },
          {
            "value": 1,
            "label": "Feminino"
          }
        ]
      },
      {
        "id": "diagnostico",
        "label": "Diagnóstico",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 4,
            "label": "Diagnósticos neurológicos"
          },
          {
            "value": 3,
            "label": "Alterações na oxigenação (respiratório, desidratação, etc)"
          },
          {
            "value": 2,
            "label": "Transtornos psíquicos / comportamentais"
          },
          {
            "value": 1,
            "label": "Outros diagnósticos"
          }
        ]
      },
      {
        "id": "cognicao",
        "label": "Deficiências Cognitivas",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 3,
            "label": "Não tem noção das suas limitações"
          },
          {
            "value": 2,
            "label": "Esquece as suas limitações"
          },
          {
            "value": 1,
            "label": "Orientado quanto à sua capacidade"
          }
        ]
      },
      {
        "id": "ambiente",
        "label": "Fatores Ambientais",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 4,
            "label": "História de quedas / Criança em berço sem grade"
          },
          {
            "value": 3,
            "label": "Usa dispositivo de auxílio (muleta) ou recém-nascido"
          },
          {
            "value": 2,
            "label": "Paciente no leito (sem locomoção)"
          },
          {
            "value": 1,
            "label": "Paciente ambulatorial (seguro)"
          }
        ]
      },
      {
        "id": "cirurgia",
        "label": "Cirurgia / Sedação / Anestesia",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 3,
            "label": "Nas últimas 24 horas"
          },
          {
            "value": 2,
            "label": "Nas últimas 48 horas"
          },
          {
            "value": 1,
            "label": "Acima de 48 horas ou Nenhum"
          }
        ]
      },
      {
        "id": "medicamentos",
        "label": "Uso de Medicamentos",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 3,
            "label": "Uso múltiplo (sedativos, diuréticos, narcóticos...)"
          },
          {
            "value": 2,
            "label": "Usa um dos medicamentos de risco"
          },
          {
            "value": 1,
            "label": "Outros medicamentos / Nenhum"
          }
        ]
      }
    ],
    "howTo": [
      "Sete fatores ponderados: idade, sexo, diagnóstico, cognição, ambiente, procedimentos e medicações",
      "Uso profissional para apoio à avaliação; resultados não substituem exame clínico, protocolos locais ou decisão da equipe assistencial. A HDFS é aplicada em população pediátrica e juvenil até antes de completar 21 anos. Confirmar versão e treinamento institucional.",
      "A variável sexo segue a estrutura publicada do instrumento histórico; não deve ser usada como substituto da avaliação individual. Faixas de idade e interpretação exigem conferência com a versão institucional.",
      "Some os pontos. O resultado não fecha diagnóstico nem autoriza conduta sozinho."
    ],
    "faqs": [],
    "references": [
      "Humpty Dumpty: adaptação transcultural e validação brasileira. Acta Paulista de Enfermagem. https://www.scielo.br/j/ape/a/hfTPwncDds3ckwKfRLbt5rM/?lang=pt",
      "Hill-Rodriguez e colaboradores. Humpty Dumpty Falls Scale, 2009. https://pubmed.ncbi.nlm.nih.gov/19201737/"
    ],
    "related": [],
    "publicacao": "candidata",
    "version": "0.1.0-canonical",
    "bands": [
      {
        "min": 7,
        "max": 11,
        "label": "Menor faixa de risco pela escala",
        "tone": "ok",
        "note": "Medidas institucionais de prevenção de queda continuam necessárias.",
        "nanda": []
      },
      {
        "min": 12,
        "max": 23,
        "label": "Maior faixa de risco pela escala",
        "tone": "info",
        "note": "Revisar fatores clínicos e implementar medidas institucionais individualizadas.",
        "nanda": []
      }
    ]
  },
  {
    "slug": "tinetti",
    "kind": "escala",
    "category": "Quedas e mobilidade",
    "title": "ESCALA DE TINETTI — POMA",
    "lead": "Avaliação funcional do equilíbrio (0–16) e da marcha (0–12)",
    "nandaMode": "nao-fechar",
    "criteria": [
      {
        "id": "sitting",
        "label": "E01. Equilíbrio sentado",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Inclina-se ou desliza"
          },
          {
            "value": 1,
            "label": "Mantém-se estável"
          }
        ]
      },
      {
        "id": "rising",
        "label": "E02. Levantar-se",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Não consegue sem ajuda"
          },
          {
            "value": 1,
            "label": "Usa os braços"
          },
          {
            "value": 2,
            "label": "Levanta sem usar braços"
          }
        ]
      },
      {
        "id": "attempt",
        "label": "E03. Tentativas para levantar",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Não consegue"
          },
          {
            "value": 1,
            "label": "Mais de uma tentativa"
          },
          {
            "value": 2,
            "label": "Uma tentativa"
          }
        ]
      },
      {
        "id": "immediate",
        "label": "E04. Equilíbrio imediato em pé",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Instável sem apoio"
          },
          {
            "value": 1,
            "label": "Permanece com apoio"
          },
          {
            "value": 2,
            "label": "Firme sem apoio"
          }
        ]
      },
      {
        "id": "standing",
        "label": "E05. Equilíbrio em pé prolongado",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Instável"
          },
          {
            "value": 1,
            "label": "Base ampla ou usa apoio"
          },
          {
            "value": 2,
            "label": "Estável, base adequada"
          }
        ]
      },
      {
        "id": "nudge",
        "label": "E06. Resposta a leve perturbação",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Perde equilíbrio"
          },
          {
            "value": 1,
            "label": "Oscila ou busca apoio"
          },
          {
            "value": 2,
            "label": "Mantém-se estável"
          }
        ]
      },
      {
        "id": "eyes",
        "label": "E07. Equilíbrio com olhos fechados",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Instável"
          },
          {
            "value": 1,
            "label": "Mantém-se estável"
          }
        ]
      },
      {
        "id": "turn_steps",
        "label": "E08a. Giro de 360° — passos",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Passos descontínuos"
          },
          {
            "value": 1,
            "label": "Passos contínuos"
          }
        ]
      },
      {
        "id": "turn_stability",
        "label": "E08b. Giro de 360° — estabilidade",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Instável"
          },
          {
            "value": 1,
            "label": "Estável"
          }
        ]
      },
      {
        "id": "sit_down",
        "label": "E09. Sentar-se",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Inseguro ou deixa cair"
          },
          {
            "value": 1,
            "label": "Usa braços ou movimento abrupto"
          },
          {
            "value": 2,
            "label": "Senta com controle"
          }
        ]
      },
      {
        "id": "gait_start",
        "label": "M01. Início da marcha",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Hesita ou tenta várias vezes"
          },
          {
            "value": 1,
            "label": "Inicia sem hesitar"
          }
        ]
      },
      {
        "id": "step_right_len",
        "label": "M02a. Comprimento — passo direito",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Não ultrapassa apoio esquerdo"
          },
          {
            "value": 1,
            "label": "Ultrapassa pé de apoio"
          }
        ]
      },
      {
        "id": "step_right_height",
        "label": "M02b. Altura — passo direito",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Não libera totalmente o piso"
          },
          {
            "value": 1,
            "label": "Libera totalmente o piso"
          }
        ]
      },
      {
        "id": "step_left_len",
        "label": "M02c. Comprimento — passo esquerdo",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Não ultrapassa apoio direito"
          },
          {
            "value": 1,
            "label": "Ultrapassa pé de apoio"
          }
        ]
      },
      {
        "id": "step_left_height",
        "label": "M02d. Altura — passo esquerdo",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Não libera totalmente o piso"
          },
          {
            "value": 1,
            "label": "Libera totalmente o piso"
          }
        ]
      },
      {
        "id": "symmetry",
        "label": "M03. Simetria dos passos",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Passos assimétricos"
          },
          {
            "value": 1,
            "label": "Passos simétricos"
          }
        ]
      },
      {
        "id": "continuity",
        "label": "M04. Continuidade da marcha",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Para entre os passos"
          },
          {
            "value": 1,
            "label": "Passos contínuos"
          }
        ]
      },
      {
        "id": "path",
        "label": "M05. Trajetória da marcha",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Desvio acentuado"
          },
          {
            "value": 1,
            "label": "Leve desvio ou auxílio"
          },
          {
            "value": 2,
            "label": "Linha reta sem auxílio"
          }
        ]
      },
      {
        "id": "trunk",
        "label": "M06. Comportamento do tronco",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Oscila muito ou usa apoio"
          },
          {
            "value": 1,
            "label": "Flexiona tronco ou abre braços"
          },
          {
            "value": 2,
            "label": "Sem oscilação/apoio relevante"
          }
        ]
      },
      {
        "id": "stance",
        "label": "M07. Base de apoio na marcha",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Calcanhares afastados"
          },
          {
            "value": 1,
            "label": "Calcanhares quase se tocam"
          }
        ]
      }
    ],
    "howTo": [
      "Equilíbrio (E01–E09) e marcha (M01–M07) — registro por subcritério",
      "Uso profissional. Garanta condições seguras de execução e supervisão; interrompa o teste diante de risco de queda, dor ou instabilidade. Esta versão preserva os subcomponentes de pontuação (20 controles) distribuídos pelos 16 itens clínicos tradicionais.",
      "A soma completa vai de 0 a 28 (equilíbrio até 16, marcha até 12). Pontos de corte dependem da versão, população e objetivo clínico. Não inferir segurança de deambulação nem eliminar prevenção de quedas com base exclusiva no resultado.",
      "Some os pontos. O resultado não fecha diagnóstico nem autoriza conduta sozinho."
    ],
    "faqs": [],
    "references": [
      "Ministério da Saúde. Caderno de Atenção Básica nº 19 — Envelhecimento e saúde da pessoa idosa (2006). https://bvsms.saude.gov.br/bvs/publicacoes/abcad19.pdf",
      "Shirley Ryan AbilityLab. Tinetti Performance-Oriented Mobility Assessment — POMA. https://www.sralab.org/rehabilitation-measures/tinetti-performance-oriented-mobility-assessment",
      "Revisão sistemática da POMA — Phys Ther. 2021. https://academic.oup.com/ptj/article/101/10/pzab173/6317705",
      "American Thoracic Society. Medidas de equilíbrio e pontuação POMA. https://site.thoracic.org/assemblies/pr/outcome-measures/balance"
    ],
    "related": [],
    "publicacao": "candidata",
    "version": "0.1.0-candidate",
    "bands": [
      {
        "min": 0,
        "max": 18,
        "label": "0–18 · desempenho reduzido",
        "tone": "info",
        "note": "Faixa frequentemente associada a maior risco de quedas em idosos; não determina conduta isolada.",
        "nanda": []
      },
      {
        "min": 19,
        "max": 23,
        "label": "19–23 · desempenho intermediário",
        "tone": "warn",
        "note": "Requer avaliação funcional, histórico de quedas e contexto.",
        "nanda": []
      },
      {
        "min": 24,
        "max": 28,
        "label": "24–28 · maior desempenho",
        "tone": "info",
        "note": "Não garante ausência de quedas nem independência em todos os contextos.",
        "nanda": []
      }
    ]
  },
  {
    "slug": "cam",
    "kind": "escala",
    "category": "Neurologia",
    "title": "CAM-ICU — AVALIAÇÃO DE DELIRIUM",
    "lead": "Método de Avaliação da Confusão para UTI · rastreio em adultos",
    "nandaMode": "nao-fechar",
    "criteria": [
      {
        "id": "rass",
        "label": "RASS · nível atual de despertar",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 4,
            "label": "Combativo"
          },
          {
            "value": 3,
            "label": "Muito agitado"
          },
          {
            "value": 2,
            "label": "Agitado"
          },
          {
            "value": 1,
            "label": "Inquieto"
          },
          {
            "value": 0,
            "label": "Alerta e calmo"
          },
          {
            "value": -1,
            "label": "Sonolento"
          },
          {
            "value": -2,
            "label": "Sedação leve"
          },
          {
            "value": -3,
            "label": "Sedação moderada"
          },
          {
            "value": -4,
            "label": "Sedação profunda"
          },
          {
            "value": -5,
            "label": "Não despertável"
          }
        ]
      },
      {
        "id": "f1",
        "label": "Característica 1 · alteração aguda ou curso flutuante",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 1,
            "label": "Sim — mudança aguda ou flutuação presente"
          },
          {
            "value": 0,
            "label": "Não — não identificado"
          }
        ]
      },
      {
        "id": "f2",
        "label": "Característica 2 · desatenção",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 1,
            "label": "Sim — desatenção no teste oficial"
          },
          {
            "value": 0,
            "label": "Não — teste de atenção sem critério positivo"
          }
        ]
      },
      {
        "id": "f4",
        "label": "Característica 4 · pensamento desorganizado",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 1,
            "label": "Sim — alteração no teste oficial"
          },
          {
            "value": 0,
            "label": "Não — sem alteração identificada"
          }
        ]
      }
    ],
    "howTo": [
      "RASS e características do CAM-ICU — decisão por regra lógica",
      "Rastreio para adultos em UTI, por profissional treinado. Pacientes com RASS -4 ou -5 não são avaliáveis neste momento. A aplicação dos testes de atenção e pensamento deve seguir o instrumento oficial brasileiro.",
      "Característica 3 (consciência alterada) é derivada de RASS diferente de zero. A característica 4 só é necessária quando as características 1 e 2 estão presentes e o RASS é zero. A aplicação dos testes deve seguir o material brasileiro validado. Não há soma de pontos.",
      "Não some os pontos. RASS −4 ou −5 não classifica. Positivo quando as características 1 e 2 estão presentes e a característica 3 (RASS diferente de zero) ou a 4 também está."
    ],
    "faqs": [],
    "references": [
      "Vanderbilt CIBS — CAM-ICU em português do Brasil (manual e fluxograma) https://www.icudelirium.org/language-translations/portuguese-brazil",
      "Gusmão-Flores et al. Validação brasileira do CAM-ICU, Clinics. 2011. https://pmc.ncbi.nlm.nih.gov/articles/PMC3203964/",
      "Ely et al. Validation of CAM-ICU. JAMA. 2001. https://pubmed.ncbi.nlm.nih.gov/11730446/"
    ],
    "related": [],
    "publicacao": "candidata",
    "version": "0.2.0-canonical-rework"
  },
  {
    "slug": "cincinnati",
    "kind": "escala",
    "category": "Neurologia",
    "title": "ESCALA DE CINCINNATI (CPSS)",
    "lead": "Triagem rápida de sinais sugestivos de acidente vascular cerebral (AVC)",
    "nandaMode": "nao-fechar",
    "criteria": [
      {
        "id": "face",
        "label": "Assimetria facial (sorriso)",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 1,
            "label": "Anormal: um lado da face move-se menos que o outro ao sorrir ou mostrar os dentes."
          },
          {
            "value": 0,
            "label": "Normal: os dois lados da face movem-se de maneira semelhante."
          }
        ]
      },
      {
        "id": "arm",
        "label": "Queda do braço (10 segundos)",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 1,
            "label": "Anormal: um braço cai ou se movimenta de modo diferente do outro."
          },
          {
            "value": 0,
            "label": "Normal: ambos os braços mantêm resposta e posição semelhantes."
          }
        ]
      },
      {
        "id": "speech",
        "label": "Alteração da fala",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 1,
            "label": "Anormal: fala arrastada, palavras inadequadas ou incapacidade de falar."
          },
          {
            "value": 0,
            "label": "Normal: repete uma frase simples com palavras e articulação adequadas."
          }
        ]
      }
    ],
    "howTo": [
      "Observação de face, braços e fala",
      "Uso profissional. Ferramenta de triagem: qualquer sinal anormal pode indicar AVC e requer acionamento imediato do protocolo local. Resultado normal não exclui AVC.",
      "Triagem rápida, não diagnóstica. Considere também alterações súbitas de equilíbrio, visão, força, sensibilidade e outros sinais neurológicos; conforme protocolo institucional, não atrase o atendimento para completar o formulário.",
      "Some os pontos. O resultado não fecha diagnóstico nem autoriza conduta sozinho."
    ],
    "faqs": [],
    "references": [
      "American Stroke Association. Stroke Training for EMS Professionals. Escala de Cincinnati (CPSS). https://www.stroke.org/en/-/media/Stroke-Files/EMS-Resources/Stroke-Training-for-EMS-Professionals.pdf",
      "Kothari RU et al. Cincinnati Prehospital Stroke Scale: reproducibility and validity. Ann Emerg Med. 1999. https://pubmed.ncbi.nlm.nih.gov/10092713/",
      "CDC. Signs and Symptoms of Stroke. Atualização de 2026. https://www.cdc.gov/stroke/signs-symptoms/index.html"
    ],
    "related": [],
    "publicacao": "candidata",
    "version": "0.1.0-canonical",
    "bands": [
      {
        "min": 1,
        "max": 3,
        "label": "Um ou mais achados anormais",
        "tone": "info",
        "note": "Suspeita de AVC: acionar imediatamente o protocolo assistencial/emergência. Registrar o horário de início ou último momento sem sintomas.",
        "nanda": []
      },
      {
        "min": 0,
        "max": 0,
        "label": "Nenhum achado anormal nos três testes",
        "tone": "info",
        "note": "Não foram identificados sinais nessas três observações. O resultado não exclui AVC nem dispensa avaliação de outros sintomas.",
        "nanda": []
      }
    ]
  },
  {
    "slug": "fast",
    "kind": "escala",
    "category": "Neurologia",
    "title": "ESCALA F.A.S.T. — SINAIS DE AVC",
    "lead": "Triagem de face, braços e fala; o T representa tempo para acionar atendimento, não é pontuação",
    "nandaMode": "nao-fechar",
    "criteria": [
      {
        "id": "face",
        "label": "Face: assimetria ao sorrir",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Movimentos faciais simétricos"
          },
          {
            "value": 1,
            "label": "Assimetria, queda ou incapacidade de mover um lado"
          }
        ]
      },
      {
        "id": "arm",
        "label": "Braços: fraqueza ou queda unilateral",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Ambos os braços mantêm elevação semelhante"
          },
          {
            "value": 1,
            "label": "Um braço cai, não eleva ou demonstra fraqueza assimétrica"
          }
        ]
      },
      {
        "id": "speech",
        "label": "Fala: alteração súbita de linguagem ou articulação",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Fala habitual, clara e compreensível"
          },
          {
            "value": 1,
            "label": "Fala arrastada, palavras inadequadas ou ausência de fala"
          }
        ]
      }
    ],
    "howTo": [
      "Face · Braços · Fala — sinais de alerta neurológico",
      "Qualquer alteração súbita deve acionar o protocolo de suspeita de AVC imediatamente. A triagem FAST negativa não exclui AVC.",
      "O tempo (T) é crítico para avaliação e atendimento, mas não constitui quarto item pontuado. Resultado normal nos três testes não exclui AVC.",
      "Some os pontos. O resultado não fecha diagnóstico nem autoriza conduta sozinho."
    ],
    "faqs": [],
    "references": [
      "American Stroke Association. Sinais de AVC e F.A.S.T. https://www.stroke.org/en/about-stroke/stroke-symptoms",
      "CDC. Sinais e sintomas do AVC. https://www.cdc.gov/stroke/signs-symptoms/index.html"
    ],
    "related": [],
    "publicacao": "candidata",
    "version": "0.1.0-canonical",
    "bands": [
      {
        "min": 0,
        "max": 0,
        "label": "Nenhum dos três sinais FAST observado",
        "tone": "warn",
        "note": "Triagem negativa não exclui AVC; outros sintomas neurológicos podem estar presentes.",
        "nanda": []
      },
      {
        "min": 1,
        "max": 3,
        "label": "Um ou mais sinais FAST anormais",
        "tone": "info",
        "note": "Suspeita de AVC: atendimento urgente conforme protocolo. Registrar início ou última vez sem sintomas.",
        "nanda": []
      }
    ]
  },
  {
    "slug": "four",
    "kind": "escala",
    "category": "Neurologia",
    "title": "ESCALA FOUR",
    "lead": "Full Outline of UnResponsiveness — avaliação neurológica de quatro componentes",
    "nandaMode": "nao-fechar",
    "criteria": [
      {
        "id": "ocular",
        "label": "Resposta Ocular (Eye Response)",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 4,
            "label": "Olhos abertos, segue, pisca ao comando"
          },
          {
            "value": 3,
            "label": "Olhos abertos, não segue o comando"
          },
          {
            "value": 2,
            "label": "Olhos fechados, abre a voz"
          },
          {
            "value": 1,
            "label": "Olhos fechados, abre a dor"
          },
          {
            "value": 0,
            "label": "Olhos fechados, não abre a dor"
          }
        ]
      },
      {
        "id": "motora",
        "label": "Resposta Motora (Motor Response)",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 4,
            "label": "Comandos: sinal de joinha, paz, punho fechado"
          },
          {
            "value": 3,
            "label": "Localiza a dor"
          },
          {
            "value": 2,
            "label": "Flexão à dor"
          },
          {
            "value": 1,
            "label": "Extensão à dor"
          },
          {
            "value": 0,
            "label": "Sem resposta à dor / estado de mal mioclônico"
          }
        ]
      },
      {
        "id": "tronco",
        "label": "Reflexos de Tronco (Brainstem Reflexes)",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 4,
            "label": "Reflexos pupilar e corneano presentes"
          },
          {
            "value": 3,
            "label": "Uma pupila fixa e dilatada"
          },
          {
            "value": 2,
            "label": "Reflexos pupilar OU corneano ausentes"
          },
          {
            "value": 1,
            "label": "Reflexos pupilar E corneano ausentes"
          },
          {
            "value": 0,
            "label": "Pupila, córnea e reflexo de tosse ausentes"
          }
        ]
      },
      {
        "id": "respiracao",
        "label": "Respiração (Respiration)",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 4,
            "label": "Não intubado, ritmo respiratório regular"
          },
          {
            "value": 3,
            "label": "Não intubado, padrão de Cheyne-Stokes"
          },
          {
            "value": 2,
            "label": "Não intubado, ritmo respiratório irregular"
          },
          {
            "value": 1,
            "label": "Intubado, respira acima da frequência do ventilador"
          },
          {
            "value": 0,
            "label": "Intubado, respira com o ventilador ou apnéia"
          }
        ]
      }
    ],
    "howTo": [
      "Resposta ocular · motora · reflexos de tronco · respiração",
      "Uso profissional para apoio à avaliação; resultados não substituem exame clínico, protocolos locais ou decisão da equipe assistencial. A interpretação deve considerar sedação, condições neurológicas, ventilação e limitações do exame.",
      "Quatro componentes, 0 a 4 pontos cada; máximo de 16. Requer habilidade para exame dos reflexos de tronco e ventilação. Não deve ser usado isoladamente para decidir prognóstico.",
      "Some os pontos. O resultado não fecha diagnóstico nem autoriza conduta sozinho."
    ],
    "faqs": [],
    "references": [
      "Wijdicks EFM et al. Validation of a new coma scale: the FOUR score. Ann Neurol. 2005. https://onlinelibrary.wiley.com/doi/full/10.1002/ana.20611",
      "Revisão clínica da escala FOUR — Medline/PubMed. https://pubmed.ncbi.nlm.nih.gov/16178024/"
    ],
    "related": [],
    "publicacao": "candidata",
    "version": "0.1.0-canonical",
    "bands": [
      {
        "min": 0,
        "max": 16,
        "label": "Pontuação FOUR registrada",
        "tone": "info",
        "note": "O escore descreve respostas neurológicas observadas, sem definir prognóstico individual ou conduta automática.",
        "nanda": []
      }
    ]
  },
  {
    "slug": "glasgow",
    "kind": "escala",
    "category": "Neurologia",
    "title": "ESCALA DE COMA DE GLASGOW",
    "lead": "Avaliação estruturada de abertura ocular, resposta verbal e resposta motora (E/V/M)",
    "nandaMode": "nao-fechar",
    "criteria": [
      {
        "id": "eye",
        "label": "E — Abertura ocular",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 4,
            "label": "Espontânea"
          },
          {
            "value": 3,
            "label": "Ao estímulo sonoro"
          },
          {
            "value": 2,
            "label": "À pressão"
          },
          {
            "value": 1,
            "label": "Nenhuma resposta"
          }
        ]
      },
      {
        "id": "verbal",
        "label": "V — Melhor resposta verbal",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 5,
            "label": "Orientada"
          },
          {
            "value": 4,
            "label": "Confusa"
          },
          {
            "value": 3,
            "label": "Palavras"
          },
          {
            "value": 2,
            "label": "Sons"
          },
          {
            "value": 1,
            "label": "Nenhuma resposta"
          }
        ]
      },
      {
        "id": "motor",
        "label": "M — Melhor resposta motora",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 6,
            "label": "Obedece a comandos"
          },
          {
            "value": 5,
            "label": "Localiza estímulo"
          },
          {
            "value": 4,
            "label": "Flexão normal"
          },
          {
            "value": 3,
            "label": "Flexão anormal"
          },
          {
            "value": 2,
            "label": "Extensão"
          },
          {
            "value": 1,
            "label": "Nenhuma resposta"
          }
        ]
      }
    ],
    "howTo": [
      "Melhores respostas observadas — registre E, V e M separadamente",
      "Uso profissional · Versão padrão para adolescentes ≥16 anos e adultos. Antes de pontuar, identifique fatores que interferem na avaliação (intubação, sedação, edema palpebral, lesões ou barreiras de comunicação). Se algum componente não puder ser avaliado, selecione NT; não calcule nem comunique um total.",
      "Para traumatismo cranioencefálico, as faixas 3–8 / 9–12 / 13–15 são classificações de gravidade usuais. Não extrapolar para outras condições sem contexto. Registrar sempre E, V e M (ex.: E4 V5 M6 = 15/15); se algum não for testável, usar NT sem atribuir 0 ou 1, e não comunicar um escore total.",
      "Some os pontos. O resultado não fecha diagnóstico nem autoriza conduta sozinho."
    ],
    "faqs": [],
    "references": [
      "University of Glasgow. Glasgow Coma Scale — Assessment and Recording. https://www.glasgowcomascale.org/",
      "University of Glasgow. FAQ: Not Testable (NT) não deve integrar o total. https://www.glasgowcomascale.org/faq/",
      "NICE NG232 (2023), seção 1.3: registrar E, V e M junto do total. https://www.nice.org.uk/guidance/ng232/chapter/recommendations"
    ],
    "related": [],
    "publicacao": "candidata",
    "version": "0.1.0-candidate",
    "bands": [
      {
        "min": 3,
        "max": 8,
        "label": "3–8 · grave (TCE)",
        "tone": "danger",
        "note": "Faixa de gravidade de TCE; comunicar os componentes e avaliar urgência clínica.",
        "nanda": []
      },
      {
        "min": 9,
        "max": 12,
        "label": "9–12 · moderado (TCE)",
        "tone": "warn",
        "note": "Acompanhamento neurológico e decisão assistencial conforme avaliação.",
        "nanda": []
      },
      {
        "min": 13,
        "max": 15,
        "label": "13–15 · leve (TCE)",
        "tone": "ok",
        "note": "Não exclui lesão intracraniana ou necessidade de observação.",
        "nanda": []
      }
    ]
  },
  {
    "slug": "nihss",
    "kind": "escala",
    "category": "Neurologia",
    "title": "NIH STROKE SCALE (NIHSS)",
    "lead": "Avaliação estruturada dos déficits neurológicos no acidente vascular cerebral",
    "nandaMode": "nao-fechar",
    "criteria": [
      {
        "id": "loc",
        "label": "1a. Nível de consciência",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Alerta"
          },
          {
            "value": 1,
            "label": "Desperta com estímulo mínimo"
          },
          {
            "value": 2,
            "label": "Precisa estímulo repetido/intenso"
          },
          {
            "value": 3,
            "label": "Sem resposta adequada"
          }
        ]
      },
      {
        "id": "locq",
        "label": "1b. Perguntas de orientação",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Acerta mês e idade"
          },
          {
            "value": 1,
            "label": "Acerta apenas uma"
          },
          {
            "value": 2,
            "label": "Não acerta nenhuma"
          }
        ]
      },
      {
        "id": "locc",
        "label": "1c. Execução de comandos",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Executa ambos"
          },
          {
            "value": 1,
            "label": "Executa apenas um"
          },
          {
            "value": 2,
            "label": "Não executa"
          }
        ]
      },
      {
        "id": "gaze",
        "label": "2. Melhor olhar conjugado",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Normal"
          },
          {
            "value": 1,
            "label": "Paresia parcial do olhar"
          },
          {
            "value": 2,
            "label": "Desvio forçado / paresia total"
          }
        ]
      },
      {
        "id": "visual",
        "label": "3. Campo visual",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Sem perda"
          },
          {
            "value": 1,
            "label": "Hemianopsia parcial"
          },
          {
            "value": 2,
            "label": "Hemianopsia completa"
          },
          {
            "value": 3,
            "label": "Cegueira bilateral"
          }
        ]
      },
      {
        "id": "facial",
        "label": "4. Motricidade facial",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Simétrica"
          },
          {
            "value": 1,
            "label": "Assimetria discreta"
          },
          {
            "value": 2,
            "label": "Paralisia facial parcial"
          },
          {
            "value": 3,
            "label": "Paralisia facial completa"
          }
        ]
      },
      {
        "id": "arm_l",
        "label": "5a. Força do braço esquerdo",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Sem queda em 10 s"
          },
          {
            "value": 1,
            "label": "Queda sem atingir apoio"
          },
          {
            "value": 2,
            "label": "Cai até apoio com algum esforço"
          },
          {
            "value": 3,
            "label": "Sem vencer gravidade"
          },
          {
            "value": 4,
            "label": "Nenhum movimento"
          }
        ]
      },
      {
        "id": "arm_r",
        "label": "5b. Força do braço direito",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Sem queda em 10 s"
          },
          {
            "value": 1,
            "label": "Queda sem atingir apoio"
          },
          {
            "value": 2,
            "label": "Cai até apoio com algum esforço"
          },
          {
            "value": 3,
            "label": "Sem vencer gravidade"
          },
          {
            "value": 4,
            "label": "Nenhum movimento"
          }
        ]
      },
      {
        "id": "leg_l",
        "label": "6a. Força da perna esquerda",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Sem queda em 5 s"
          },
          {
            "value": 1,
            "label": "Queda sem atingir apoio"
          },
          {
            "value": 2,
            "label": "Cai até apoio com algum esforço"
          },
          {
            "value": 3,
            "label": "Sem vencer gravidade"
          },
          {
            "value": 4,
            "label": "Nenhum movimento"
          }
        ]
      },
      {
        "id": "leg_r",
        "label": "6b. Força da perna direita",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Sem queda em 5 s"
          },
          {
            "value": 1,
            "label": "Queda sem atingir apoio"
          },
          {
            "value": 2,
            "label": "Cai até apoio com algum esforço"
          },
          {
            "value": 3,
            "label": "Sem vencer gravidade"
          },
          {
            "value": 4,
            "label": "Nenhum movimento"
          }
        ]
      },
      {
        "id": "ataxia",
        "label": "7. Ataxia de membros",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Ausente"
          },
          {
            "value": 1,
            "label": "Presente em um membro"
          },
          {
            "value": 2,
            "label": "Presente em dois membros"
          }
        ]
      },
      {
        "id": "sensory",
        "label": "8. Sensibilidade",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Conservada"
          },
          {
            "value": 1,
            "label": "Redução leve/moderada"
          },
          {
            "value": 2,
            "label": "Perda sensitiva grave"
          }
        ]
      },
      {
        "id": "language",
        "label": "9. Melhor linguagem",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Sem afasia"
          },
          {
            "value": 1,
            "label": "Afasia leve/moderada"
          },
          {
            "value": 2,
            "label": "Afasia grave"
          },
          {
            "value": 3,
            "label": "Mutismo / afasia global"
          }
        ]
      },
      {
        "id": "dysarthria",
        "label": "10. Disartria",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Articulação normal"
          },
          {
            "value": 1,
            "label": "Disartria leve/moderada"
          },
          {
            "value": 2,
            "label": "Disartria grave/ininteligível"
          }
        ]
      },
      {
        "id": "neglect",
        "label": "11. Extinção ou desatenção",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Nenhum sinal"
          },
          {
            "value": 1,
            "label": "Desatenção em uma modalidade"
          },
          {
            "value": 2,
            "label": "Desatenção profunda ou múltipla"
          }
        ]
      }
    ],
    "howTo": [
      "15 subitens — atribuir apenas resposta observada; NT quando permitido",
      "Uso profissional, com treinamento e instruções NIHSS oficiais. Atribuir pontuação conforme o método padronizado; em itens 5a, 5b, 6a, 6b, 7 e 10, NT só nas condições previstas pelo manual. NT não equivale a zero. Não utilizar o total isoladamente para indicar ou negar trombólise.",
      "Não adotar faixas de gravidade como critérios universais para condutas. Os itens com estímulos, imagens e frases padronizadas devem seguir a versão validada, treinamento e materiais autorizados. Se houver NT, comunicar os componentes avaliados e justificar a impossibilidade de um total completo.",
      "Some os pontos. O resultado não fecha diagnóstico nem autoriza conduta sozinho."
    ],
    "faqs": [],
    "references": [
      "NINDS. NIH Stroke Scale — formulário e orientações oficiais (2024). https://www.ninds.nih.gov/sites/default/files/documents/NIH-Stroke-Scale_updatedFeb2024_508.pdf",
      "Cincura C et al. Adaptação e validação da NIHSS no Brasil. Cerebrovasc Dis. 2009. https://pubmed.ncbi.nlm.nih.gov/19039215/",
      "Ação AVC. Escala NIHSS traduzida/adaptada ao português. https://www.acaoavc.org.br/profissionais-de-saude/escalas-de-avaliacao-em-avc/escalas-de-avaliacao-em-avc",
      "Ministério da Saúde. PCDT AVC Isquêmico Agudo, página oficial. https://www.gov.br/saude/pt-br/assuntos/pcdt/a/acidente-vascular-cerebral-isquemico-agudo/view"
    ],
    "related": [],
    "publicacao": "candidata",
    "version": "0.1.0-candidate",
    "bands": [
      {
        "min": 0,
        "max": 42,
        "label": "Escore de 0 a 42",
        "tone": "info",
        "note": "A pontuação resume os déficits neurológicos observados; não substitui investigação, imagem e decisão clínica.",
        "nanda": []
      }
    ]
  },
  {
    "slug": "rancholosamigos",
    "kind": "escala",
    "category": "Neurologia",
    "title": "RANCHO LOS AMIGOS — OITO NÍVEIS",
    "lead": "Avaliação ordinal do funcionamento cognitivo após lesão cerebral — versão histórica",
    "nandaMode": "nao-fechar",
    "criteria": [
      {
        "id": "nivel",
        "label": "Nível de funcionamento cognitivo observado",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 8,
            "label": "VIII — Direcionado"
          },
          {
            "value": 7,
            "label": "VII — Automático"
          },
          {
            "value": 6,
            "label": "VI — Apropriado"
          },
          {
            "value": 5,
            "label": "V — Confuso"
          },
          {
            "value": 4,
            "label": "IV — Agitado"
          },
          {
            "value": 3,
            "label": "III — Localizado"
          },
          {
            "value": 2,
            "label": "II — Generaliz."
          },
          {
            "value": 1,
            "label": "I — Sem resposta"
          }
        ]
      }
    ],
    "howTo": [
      "Selecione um único nível observado — I a VIII",
      "A classificação é ORDINAL: não somar pontos. Versão histórica com 8 níveis, diferente da revisão com 10 níveis. Registrar contexto e observar a evolução.",
      "Registrar o nível funcional predominante e os comportamentos observados. Não se trata de pontuação aditiva; a pessoa pode apresentar características de níveis vizinhos. Esta é a versão original de oito níveis, não a escala revisada de dez.",
      "Some os pontos. O resultado não fecha diagnóstico nem autoriza conduta sozinho."
    ],
    "faqs": [],
    "references": [
      "Rancho Los Amigos — oito níveis, página institucional. https://dhs.lacounty.gov/rancho/education/graduate-medical-and-professional-education/educational-materials/rancho-levels-of-cognitive-functioning/",
      "Guia oficial para familiares — oito níveis (governo dos EUA). https://www.govinfo.gov/content/pkg/GOVPUB-D-PURL-gpo38633/pdf/GOVPUB-D-PURL-gpo38633.pdf",
      "NCBI — diferenças entre versões de oito e dez níveis. https://www.ncbi.nlm.nih.gov/books/NBK448151/"
    ],
    "related": [],
    "publicacao": "candidata",
    "version": "0.1.0-canonical",
    "bands": [
      {
        "min": 1,
        "max": 1,
        "label": "I — Sem resposta",
        "tone": "ok",
        "note": "Não há resposta comportamental evidente aos estímulos; necessita de assistência total.",
        "nanda": []
      },
      {
        "min": 2,
        "max": 2,
        "label": "II — Resposta generalizada",
        "tone": "ok",
        "note": "Respostas não intencionais e semelhantes a diferentes estímulos, geralmente inconsistentes.",
        "nanda": []
      },
      {
        "min": 3,
        "max": 3,
        "label": "III — Resposta localizada",
        "tone": "ok",
        "note": "Respostas mais específicas a estímulos e orientações simples, ainda inconsistentes.",
        "nanda": []
      },
      {
        "min": 4,
        "max": 4,
        "label": "IV — Confuso e agitado",
        "tone": "ok",
        "note": "Comportamento confuso, agitado e com pouca organização; requer supervisão e segurança.",
        "nanda": []
      },
      {
        "min": 5,
        "max": 5,
        "label": "V — Confuso não agitado",
        "tone": "ok",
        "note": "Alerta, mas apresenta confusão e dificuldade para manter atenção e aprender informações novas.",
        "nanda": []
      },
      {
        "min": 6,
        "max": 6,
        "label": "VI — Confuso e apropriado",
        "tone": "ok",
        "note": "Responde de forma mais orientada a objetivos e precisa de pistas e supervisão.",
        "nanda": []
      },
      {
        "min": 7,
        "max": 7,
        "label": "VII — Automático e apropriado",
        "tone": "ok",
        "note": "Executa atividades familiares com alguma autonomia, mas tem julgamento limitado em situações novas.",
        "nanda": []
      },
      {
        "min": 8,
        "max": 8,
        "label": "VIII — Direcionado e apropriado",
        "tone": "ok",
        "note": "Integra atividades de rotina, aprende novos comportamentos com dificuldades cognitivas residuais.",
        "nanda": []
      }
    ]
  },
  {
    "slug": "capurro",
    "kind": "escala",
    "category": "Neonatologia",
    "title": "MÉTODO DE CAPURRO — SOMÁTICO",
    "lead": "Estimativa pós-natal da idade gestacional por cinco sinais físicos",
    "nandaMode": "nao-fechar",
    "criteria": [
      {
        "id": "pele",
        "label": "Textura da pele",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Muito fina ou gelatinosa"
          },
          {
            "value": 5,
            "label": "Fina e lisa"
          },
          {
            "value": 10,
            "label": "Discreta descamação superficial"
          },
          {
            "value": 15,
            "label": "Grossa, rugas superficiais, descamação em mãos/pés"
          },
          {
            "value": 20,
            "label": "Apergaminhada, rugas profundas"
          }
        ]
      },
      {
        "id": "orelha",
        "label": "Formato do pavilhão auricular",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Plano ou disforme, sem encurvamento"
          },
          {
            "value": 8,
            "label": "Encurvamento parcial de borda"
          },
          {
            "value": 16,
            "label": "Parte superior encurvada"
          },
          {
            "value": 24,
            "label": "Encurvamento completo"
          }
        ]
      },
      {
        "id": "glandula",
        "label": "Glândula mamária",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Não palpável"
          },
          {
            "value": 5,
            "label": "Palpável menor que 5 mm"
          },
          {
            "value": 10,
            "label": "Entre 5 e 10 mm"
          },
          {
            "value": 15,
            "label": "Maior que 10 mm"
          }
        ]
      },
      {
        "id": "planta",
        "label": "Pregas plantares",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Ausência de pregas"
          },
          {
            "value": 5,
            "label": "Marcas discretas anteriores"
          },
          {
            "value": 10,
            "label": "Marcas anteriores, sulcos no terço anterior"
          },
          {
            "value": 15,
            "label": "Sulcos na metade anterior da planta"
          },
          {
            "value": 20,
            "label": "Sulcos além da metade anterior"
          }
        ]
      },
      {
        "id": "mamilo",
        "label": "Formação do mamilo / aréola",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Mamilo apenas visível"
          },
          {
            "value": 5,
            "label": "Aréola pigmentada pequena, sem elevação"
          },
          {
            "value": 10,
            "label": "Aréola maior, borda sem elevação"
          },
          {
            "value": 15,
            "label": "Borda elevada e aréola desenvolvida"
          }
        ]
      }
    ],
    "howTo": [
      "Sinais físicos — Capurro Somático (cinco critérios)",
      "Uso profissional. Capurro Somático estima idade gestacional com cinco sinais físicos; não é o Capurro Somatoneurológico. A estimativa deve ser confrontada com a história obstétrica e a avaliação neonatal.",
      "Estimativa sujeita a variação. Não substituir ultrassonografia precoce nem impor decisões clínicas pelo escore isolado. A variante somatoneurológica (6 itens com fórmula distinta) não está implementada.",
      "Esta ficha soma os cinco sinais físicos. A variante com fórmula em semanas não está neste formulário."
    ],
    "faqs": [],
    "references": [
      "Secretaria de Estado da Saúde do Paraná — Atenção à Saúde da Criança: recém-nascido de risco, p. 20–21. https://www.saude.pr.gov.br/sites/default/arquivos_restritos/files/documento/2020-07/pdf1.pdf",
      "Manual de Pediatria — Universidade Federal de Viçosa. Capurro somático. https://www.bbt.ufv.br/wp-content/uploads/2020/08/e-book_Pediatria.pdf",
      "Capurro et al. (1978). Método de estimativa da idade gestacional. https://www.saude.pr.gov.br/sites/default/arquivos_restritos/files/documento/2020-07/pdf1.pdf"
    ],
    "related": [],
    "publicacao": "candidata",
    "version": "0.2.0-canonical-rework"
  },
  {
    "slug": "nips",
    "kind": "escala",
    "category": "Neonatologia",
    "title": "ESCALA NIPS — DOR NEONATAL",
    "lead": "Neonatal Infant Pain Scale: sinais comportamentais e respiratórios observados",
    "nandaMode": "nao-fechar",
    "criteria": [
      {
        "id": "expressao_facial",
        "label": "Expressão Facial",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Relaxada (0)"
          },
          {
            "value": 1,
            "label": "Careta / Tensa (1)"
          }
        ]
      },
      {
        "id": "choro",
        "label": "Padrão de Choro",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Ausente / Calmo (0)"
          },
          {
            "value": 1,
            "label": "Resmungos / Gemidos (1)"
          },
          {
            "value": 2,
            "label": "Choro Vigoroso / Alto (2)"
          }
        ]
      },
      {
        "id": "respiracao",
        "label": "Padrão Respiratório",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Relaxado / Usual (0)"
          },
          {
            "value": 1,
            "label": "Alterado / Irregular (1)"
          }
        ]
      },
      {
        "id": "bracos",
        "label": "Padrão Motor dos Braços",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Relaxados / Sem movimentos anormais (0)"
          },
          {
            "value": 1,
            "label": "Flexão / Extensão rígida (1)"
          }
        ]
      },
      {
        "id": "pernas",
        "label": "Padrão Motor das Pernas",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Relaxadas / Sem movimentos anormais (0)"
          },
          {
            "value": 1,
            "label": "Flexão / Extensão rígida (1)"
          }
        ]
      },
      {
        "id": "estado_consciencia",
        "label": "Estado de Consciência",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Calmo / Dormindo (0)"
          },
          {
            "value": 1,
            "label": "Inquieto / Desconfortável (1)"
          }
        ]
      }
    ],
    "howTo": [
      "Seis critérios observacionais, incluindo choro com três notas",
      "Uso profissional para apoio à avaliação; resultados não substituem exame clínico, protocolos locais ou decisão da equipe assistencial. Escala neonatal observacional; confirmar adequação à idade gestacional, condição clínica e situação de aplicação.",
      "Cinco domínios com 0–1 e um choro com 0–2, total 0–7. Não automatizar analgesia por pontos. Verificar adequação do paciente ventilado.",
      "Some os pontos. O resultado não fecha diagnóstico nem autoriza conduta sozinho."
    ],
    "faqs": [],
    "references": [
      "Neonatal Pain: Perceptions and Current Practice — NIPS, seis domínios, 0 a 7. https://pmc.ncbi.nlm.nih.gov/articles/PMC6570422/",
      "Scottish NHS — Neonatal pain guideline e instrumentos neonatais. https://www.clinicalguidelines.scot.nhs.uk/ggc-paediatric-guidelines/ggc-paediatric-guidelines/neonatology/neonatal-pain-guideline/"
    ],
    "related": [],
    "publicacao": "candidata",
    "version": "0.1.0-canonical",
    "bands": [
      {
        "min": 0,
        "max": 0,
        "label": "Sem comportamentos pontuados",
        "tone": "info",
        "note": "Ausência de pontuação não exclui dor; repetir avaliação conforme contexto.",
        "nanda": []
      },
      {
        "min": 1,
        "max": 7,
        "label": "Sinais observacionais registrados",
        "tone": "warn",
        "note": "A soma deve ser acompanhada de avaliação clínica e reavaliação conforme protocolo.",
        "nanda": []
      }
    ]
  },
  {
    "slug": "silverman",
    "kind": "escala",
    "category": "Neonatologia",
    "title": "BOLETIM DE SILVERMAN-ANDERSEN",
    "lead": "Avaliação observacional do esforço respiratório no recém-nascido",
    "nandaMode": "nao-fechar",
    "criteria": [
      {
        "id": "thoracoabdominal",
        "label": "01. Movimentos toracoabdominais",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Sincrônicos: tórax e abdome movem-se juntos"
          },
          {
            "value": 1,
            "label": "Atraso do tórax durante a inspiração"
          },
          {
            "value": 2,
            "label": "Movimento paradoxal em gangorra"
          }
        ]
      },
      {
        "id": "lower_chest",
        "label": "02. Tiragem intercostal inferior",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Ausente"
          },
          {
            "value": 1,
            "label": "Discreta, apenas visível"
          },
          {
            "value": 2,
            "label": "Acentuada, evidente"
          }
        ]
      },
      {
        "id": "xiphoid",
        "label": "03. Retração xifoide",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Ausente"
          },
          {
            "value": 1,
            "label": "Discreta"
          },
          {
            "value": 2,
            "label": "Acentuada"
          }
        ]
      },
      {
        "id": "nasal_flaring",
        "label": "04. Batimento de asas nasais",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Ausente"
          },
          {
            "value": 1,
            "label": "Discreto"
          },
          {
            "value": 2,
            "label": "Acentuado"
          }
        ]
      },
      {
        "id": "expiratory_grunt",
        "label": "05. Gemido expiratório",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Ausente"
          },
          {
            "value": 1,
            "label": "Audível apenas com estetoscópio"
          },
          {
            "value": 2,
            "label": "Audível sem estetoscópio"
          }
        ]
      }
    ],
    "howTo": [
      "5 sinais de desconforto respiratório — escolha uma resposta por linha",
      "Instrumento observacional de apoio à avaliação respiratória neonatal. Registrar também saturação, frequência respiratória, coloração, contexto gestacional e evolução clínica. A pontuação isolada NÃO determina oxigenoterapia, CPAP, intubação ou alta.",
      "Escore de 0 a 10: valores maiores representam sinais mais intensos de desconforto respiratório. Diferentes fontes e serviços utilizam faixas e condutas distintas; não impor cortes universais nem indicar suporte ventilatório apenas pelo escore. Reavaliar continuamente e seguir o protocolo neonatal local.",
      "Some os pontos. O resultado não fecha diagnóstico nem autoriza conduta sozinho."
    ],
    "faqs": [],
    "references": [
      "Ministério da Saúde de Belize. Neonatal Clinical Practice Guidelines 2018–2021: Silverman Anderson Score. https://platform.who.int/docs/default-source/mca-documents/policy-documents/guideline/blz-mn-32-02-guideline-2018-eng-neonatal-clinical-guidelines-2018-2021.pdf",
      "Ministério da Saúde do Quênia. Basic Paediatric Protocols, 2016: Silverman-Anderson Score. https://extranet.who.int/cpcd/sites/default/files/public_file_repository/KEN_Kenya_Basic-Paediatric-Protocols_2016.pdf",
      "Estudo sobre confiabilidade entre observadores do índice Silverman-Andersen em prematuros. https://pmc.ncbi.nlm.nih.gov/articles/PMC10313036/"
    ],
    "related": [],
    "publicacao": "candidata",
    "version": "0.1.0-candidate",
    "bands": [
      {
        "min": 0,
        "max": 0,
        "label": "0 · nenhum dos cinco sinais pontuados",
        "tone": "info",
        "note": "Sem sinais descritos nesta avaliação; não exclui outras alterações respiratórias.",
        "nanda": []
      },
      {
        "min": 1,
        "max": 10,
        "label": "1–10 · sinais de esforço respiratório",
        "tone": "info",
        "note": "Quanto maior a pontuação, mais intensos os sinais avaliados. Correlacionar com avaliação clínica.",
        "nanda": []
      }
    ]
  },
  {
    "slug": "ramsay",
    "kind": "escala",
    "category": "Sedação",
    "title": "ESCALA DE SEDAÇÃO DE RAMSAY",
    "lead": "Avaliação observacional do nível de sedação por resposta a comandos e estímulos",
    "nandaMode": "nao-fechar",
    "criteria": [
      {
        "id": "ramsay_level",
        "label": "Nível observado (escolha única)",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 1,
            "label": "Desperto; agitado, ansioso ou inquieto."
          },
          {
            "value": 2,
            "label": "Desperto; cooperativo, orientado e tranquilo."
          },
          {
            "value": 3,
            "label": "Desperto; responde somente a comandos."
          },
          {
            "value": 4,
            "label": "Adormecido; resposta rápida a leve toque glabelar ou estímulo auditivo intenso."
          },
          {
            "value": 5,
            "label": "Adormecido; resposta lenta a leve toque glabelar ou estímulo auditivo intenso."
          },
          {
            "value": 6,
            "label": "Adormecido; não responde ao toque glabelar leve nem ao estímulo auditivo intenso."
          }
        ]
      }
    ],
    "howTo": [
      "6 níveis clínicos — selecione somente uma alternativa (não somar)",
      "Escala ordinal de resposta e sedação, não aditiva. A seleção do nível NÃO determina automaticamente alvo terapêutico, titulação de sedativos, alta ou intervenção. Avaliar também ventilação, sinais vitais, analgesia, delirium e contexto clínico.",
      "Níveis ordinais de 1 a 6, não pontos somáveis. A meta de sedação deve ser prescrita e individualizada; não presumir que um nível seja “ideal” para todas as pessoas. A avaliação não substitui monitorização cardiorrespiratória, avaliação de dor e delirium.",
      "Some os pontos. O resultado não fecha diagnóstico nem autoriza conduta sozinho."
    ],
    "faqs": [],
    "references": [
      "Manual MSD (profissionais). Escala de sedação de Ramsay — tabela em português. https://www.msdmanuals.com/pt/profissional/multimedia/table/escala-de-seda%C3%A7%C3%A3o-de-ramsay",
      "Ramsay MA et al. Controlled sedation with alphaxalone-alphadolone. BMJ. 1974;2:656–659. https://doi.org/10.1136/bmj.2.5920.656",
      "Evaluating and monitoring analgesia and sedation in the intensive care unit. Crit Care. 2008. https://pmc.ncbi.nlm.nih.gov/articles/PMC2391268/"
    ],
    "related": [],
    "publicacao": "candidata",
    "version": "0.1.0-candidate",
    "bands": [
      {
        "min": 1,
        "max": 2,
        "label": "1–2 · paciente desperto",
        "tone": "info",
        "note": "1: agitado/inquieto; 2: cooperativo, orientado e tranquilo.",
        "nanda": []
      },
      {
        "min": 3,
        "max": 3,
        "label": "3 · responde a comandos",
        "tone": "info",
        "note": "Resposta a comandos, sem usar outras faixas como alvo automático.",
        "nanda": []
      },
      {
        "min": 4,
        "max": 6,
        "label": "4–6 · adormecido",
        "tone": "info",
        "note": "Diferenciar resposta rápida (4), lenta (5) e ausente (6) aos estímulos descritos.",
        "nanda": []
      }
    ]
  },
  {
    "slug": "richmond",
    "kind": "escala",
    "category": "Sedação",
    "title": "ESCALA DE AGITAÇÃO E SEDAÇÃO DE RICHMOND (RASS)",
    "lead": "Avaliação observacional do nível de agitação e sedação em cuidados intensivos",
    "nandaMode": "nao-fechar",
    "criteria": [
      {
        "id": "rass_level",
        "label": "Nível observado (seleção única)",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 4,
            "label": "Combativo — conduta violenta; risco imediato para a equipe."
          },
          {
            "value": 3,
            "label": "Muito agitado — retira dispositivos ou apresenta comportamento agressivo."
          },
          {
            "value": 2,
            "label": "Agitado — movimentos frequentes sem finalidade ou luta contra ventilador."
          },
          {
            "value": 1,
            "label": "Inquieto — ansioso, sem movimentos agressivos ou vigorosos."
          },
          {
            "value": 0,
            "label": "Alerta e calmo — desperto e tranquilo na observação."
          },
          {
            "value": -1,
            "label": "Sonolento — desperta à voz; contato visual sustentado por mais de 10 s."
          },
          {
            "value": -2,
            "label": "Sedação leve — desperta à voz; contato visual por menos de 10 s."
          },
          {
            "value": -3,
            "label": "Sedação moderada — reage à voz com movimento ou abertura ocular, sem contato visual."
          },
          {
            "value": -4,
            "label": "Sedação profunda — não reage à voz; apresenta movimento ou abertura ocular ao estímulo físico."
          },
          {
            "value": -5,
            "label": "Não despertável — sem resposta à voz ou ao estímulo físico."
          }
        ]
      }
    ],
    "howTo": [
      "RASS: observar → chamar pelo nome → estímulo físico, se necessário",
      "Uso profissional. Procedimento: 1) observar; 2) se não alerta, chamar pelo nome e avaliar contato visual; 3) sem resposta à voz, avaliar reação a estímulo físico apropriado. Registre a resposta observada. Não inferir ajuste de sedativos apenas pelo RASS.",
      "Escala ordinal −5 a +4, NÃO aditiva. O nível descreve o estado observado, sem definir sedação-alvo individual ou indicar titulação de fármacos. Em bloqueio neuromuscular ou quando não há condições de aplicação, registrar limitação e seguir o protocolo institucional.",
      "Some os pontos. O resultado não fecha diagnóstico nem autoriza conduta sozinho."
    ],
    "faqs": [],
    "references": [
      "Sessler CN et al. Richmond Agitation–Sedation Scale. Am J Respir Crit Care Med. 2002;166:1338–1344. https://doi.org/10.1164/rccm.2107138",
      "Ely EW et al. Reliability and validity of the RASS. JAMA. 2003;289:2983–2991. https://jamanetwork.com/journals/jama/fullarticle/196696",
      "Ministério da Saúde. Linha de cuidado e diretrizes assistenciais em cuidados paliativos, anexo RASS. https://www.gov.br/saude/pt-br/composicao/saes/cuidados-paliativos/publicacoes/linha-de-cuidado-e-diretrizes-assistenciais-cuidados-paliativos.pdf/@@download/file",
      "SCCM. Diretrizes PADIS para pacientes críticos adultos. https://www.sccm.org/clinical-resources/guidelines/guidelines/guidelines-for-the-prevention-and-management-of-pa"
    ],
    "related": [],
    "publicacao": "candidata",
    "version": "0.1.0-candidate",
    "bands": [
      {
        "min": 1,
        "max": 4,
        "label": "+1 a +4 · agitação",
        "tone": "info",
        "note": "Graduação crescente de inquietação a comportamento combativo.",
        "nanda": []
      },
      {
        "min": 0,
        "max": 0,
        "label": "0 · alerta e calmo",
        "tone": "ok",
        "note": "Alerta e tranquilo no momento da avaliação.",
        "nanda": []
      },
      {
        "min": -3,
        "max": -1,
        "label": "−1 a −3 · resposta à voz",
        "tone": "info",
        "note": "Diferenciar duração de contato visual e resposta ao chamado.",
        "nanda": []
      },
      {
        "min": -5,
        "max": -4,
        "label": "−4 a −5 · sem resposta à voz",
        "tone": "info",
        "note": "Diferenciar resposta ao estímulo físico (−4) de ausência de resposta (−5).",
        "nanda": []
      }
    ]
  },
  {
    "slug": "curb-65",
    "kind": "escala",
    "category": "Deterioração clínica",
    "title": "ESCORE CURB-65",
    "lead": "Avaliação de risco em adultos com pneumonia adquirida na comunidade, no ambiente hospitalar",
    "nandaMode": "nao-fechar",
    "criteria": [
      {
        "id": "confusao",
        "label": "Confusão mental nova ou desorientação",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Sem nova confusão ou desorientação"
          },
          {
            "value": 1,
            "label": "Confusão nova; AMT ≤ 8 ou desorientação de pessoa, lugar ou tempo"
          }
        ]
      },
      {
        "id": "ureia",
        "label": "Ureia sérica acima de 7 mmol/L",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Ureia ≤ 7 mmol/L"
          },
          {
            "value": 1,
            "label": "Ureia > 7 mmol/L"
          }
        ]
      },
      {
        "id": "respiracao",
        "label": "Frequência respiratória",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Menor que 30 incursões por minuto"
          },
          {
            "value": 1,
            "label": "30 ou mais incursões por minuto"
          }
        ]
      },
      {
        "id": "pressao",
        "label": "Pressão arterial",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Sistólica ≥ 90 mmHg e diastólica > 60 mmHg"
          },
          {
            "value": 1,
            "label": "Sistólica < 90 mmHg ou diastólica ≤ 60 mmHg"
          }
        ]
      },
      {
        "id": "idade",
        "label": "Idade",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Abaixo de 65 anos"
          },
          {
            "value": 1,
            "label": "65 anos ou mais"
          }
        ]
      }
    ],
    "howTo": [
      "Cinco critérios clínicos — pontuação binária (0 ou 1)",
      "Uso profissional para apoio à avaliação; resultados não substituem exame clínico, protocolos locais ou decisão da equipe assistencial. Aplicável à pneumonia adquirida na comunidade em adultos, sobretudo no hospital; não é escala de diagnóstico de pneumonia. Confira a coerência da idade.",
      "Idade ≥65 deve concordar com a idade registrada. Ureia em mmol/L (não confundir com BUN). Usar em adultos com PAC em ambiente hospitalar; interpretar com julgamento clínico.",
      "Some os pontos. O resultado não fecha diagnóstico nem autoriza conduta sozinho."
    ],
    "faqs": [],
    "references": [
      "NICE NG250. Pneumonia: diagnóstico e manejo (2025), itens 1.2.7–1.2.9. https://www.nice.org.uk/guidance/ng250/chapter/recommendations",
      "NICE QS110. Avaliação do risco de mortalidade na pneumonia, atualização 2025. https://www.nice.org.uk/guidance/qs110/chapter/Quality-statement-1-Mortality-risk-assessment"
    ],
    "related": [],
    "publicacao": "candidata",
    "version": "0.1.0-canonical",
    "bands": [
      {
        "min": 0,
        "max": 1,
        "label": "Faixa de menor risco no CURB-65",
        "tone": "ok",
        "note": "A escala não substitui avaliação médica de gravidade e elegibilidade de cuidados.",
        "nanda": []
      },
      {
        "min": 2,
        "max": 2,
        "label": "Faixa intermediária",
        "tone": "info",
        "note": "O contexto, hipóxia, comorbidades e outras alterações devem ser considerados.",
        "nanda": []
      },
      {
        "min": 3,
        "max": 5,
        "label": "Faixa de maior risco",
        "tone": "info",
        "note": "Requer avaliação clínica imediata quanto à gravidade e aos recursos necessários.",
        "nanda": []
      }
    ]
  },
  {
    "slug": "qsofa",
    "kind": "escala",
    "category": "Deterioração clínica",
    "title": "ESCORE qSOFA",
    "lead": "Quick Sequential Organ Failure Assessment — identificação de risco em adultos com suspeita de infecção",
    "nandaMode": "nao-fechar",
    "criteria": [
      {
        "id": "mental",
        "label": "Estado mental / Escala de Glasgow",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Glasgow 15, sem alteração do estado mental"
          },
          {
            "value": 1,
            "label": "Glasgow abaixo de 15 / alteração da consciência"
          }
        ]
      },
      {
        "id": "pa",
        "label": "Pressão arterial sistólica",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Acima de 100 mmHg"
          },
          {
            "value": 1,
            "label": "100 mmHg ou menos"
          }
        ]
      },
      {
        "id": "fr",
        "label": "Frequência respiratória",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Abaixo de 22 incursões/min"
          },
          {
            "value": 1,
            "label": "22 incursões/min ou mais"
          }
        ]
      }
    ],
    "howTo": [
      "Três achados: consciência, pressão sistólica e frequência respiratória",
      "O qSOFA NÃO deve ser utilizado isoladamente para rastreamento ou exclusão de sepse. Diretriz Surviving Sepsis 2021 recomenda outras estratégias sensíveis.",
      "A utilidade prognóstica do qSOFA difere de rastreamento precoce. Escore 0 ou 1 não deve atrasar investigação ou tratamento de sepse suspeita.",
      "Some os pontos. O resultado não fecha diagnóstico nem autoriza conduta sozinho."
    ],
    "faqs": [],
    "references": [
      "Surviving Sepsis Campaign 2021. Recomendação contra qSOFA isolado para rastreio de sepse. https://pmc.ncbi.nlm.nih.gov/articles/PMC8486643/",
      "Sepsis-3. Consenso qSOFA, JAMA 2016. https://pmc.ncbi.nlm.nih.gov/articles/PMC4968574/"
    ],
    "related": [],
    "publicacao": "candidata",
    "version": "0.1.0-canonical",
    "bands": [
      {
        "min": 0,
        "max": 1,
        "label": "Menos de dois critérios qSOFA",
        "tone": "ok",
        "note": "Resultado não exclui sepse ou deterioração; não usar como rastreio único.",
        "nanda": []
      },
      {
        "min": 2,
        "max": 3,
        "label": "Dois ou três critérios qSOFA",
        "tone": "danger",
        "note": "Associação com maior risco de desfecho desfavorável em suspeita de infecção; requer avaliação clínica imediata, sem diagnóstico automático.",
        "nanda": []
      }
    ]
  },
  {
    "slug": "sofa",
    "kind": "escala",
    "category": "Deterioração clínica",
    "title": "SOFA CLÁSSICO — SOFA-1",
    "lead": "Avaliação sequencial da disfunção de seis sistemas orgânicos (versão clássica)",
    "nandaMode": "nao-fechar",
    "criteria": [
      {
        "id": "respiratorio",
        "label": "Respiratório — PaO₂/FiO₂ (mmHg)",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "≥ 400"
          },
          {
            "value": 1,
            "label": "300 a <400"
          },
          {
            "value": 2,
            "label": "<300, sem suporte obrigatório"
          },
          {
            "value": 3,
            "label": "<200 com suporte respiratório"
          },
          {
            "value": 4,
            "label": "<100 com suporte respiratório"
          }
        ]
      },
      {
        "id": "plaquetas",
        "label": "Coagulação — plaquetas ×10³/µL",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "≥150"
          },
          {
            "value": 1,
            "label": "100 a <150"
          },
          {
            "value": 2,
            "label": "50 a <100"
          },
          {
            "value": 3,
            "label": "20 a <50"
          },
          {
            "value": 4,
            "label": "<20"
          }
        ]
      },
      {
        "id": "bilirrubina",
        "label": "Hepático — bilirrubina total (mg/dL)",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "<1,2"
          },
          {
            "value": 1,
            "label": "1,2 a <2,0"
          },
          {
            "value": 2,
            "label": "2,0 a <6,0"
          },
          {
            "value": 3,
            "label": "6,0 a <12,0"
          },
          {
            "value": 4,
            "label": "≥12,0"
          }
        ]
      },
      {
        "id": "cardiovascular",
        "label": "Cardiovascular — PAM ou drogas vasoativas",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "PAM ≥70; sem vasoativo"
          },
          {
            "value": 1,
            "label": "PAM <70; sem vasoativo"
          },
          {
            "value": 2,
            "label": "Dopamina ≤5 ou dobutamina"
          },
          {
            "value": 3,
            "label": "Dopamina >5 a ≤15 ou noradrenalina/adrenalina ≤0,1"
          },
          {
            "value": 4,
            "label": "Dopamina >15 ou noradrenalina/adrenalina >0,1"
          }
        ]
      },
      {
        "id": "glascow",
        "label": "Neurológico — Glasgow",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "15"
          },
          {
            "value": 1,
            "label": "13 a 14"
          },
          {
            "value": 2,
            "label": "10 a 12"
          },
          {
            "value": 3,
            "label": "6 a 9"
          },
          {
            "value": 4,
            "label": "3 a 5"
          }
        ]
      },
      {
        "id": "renal",
        "label": "Renal — creatinina (mg/dL) ou diurese em 24h",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Creatinina <1,2; sem oligúria"
          },
          {
            "value": 1,
            "label": "Creatinina 1,2 a <2,0"
          },
          {
            "value": 2,
            "label": "Creatinina 2,0 a <3,5"
          },
          {
            "value": 3,
            "label": "Creatinina 3,5 a <5,0 OU diurese <500 mL"
          },
          {
            "value": 4,
            "label": "Creatinina ≥5,0 OU diurese <200 mL"
          }
        ]
      }
    ],
    "howTo": [
      "Seis sistemas orgânicos — 0 a 4 pontos cada",
      "Uso profissional: SOFA-1, não SOFA-2. O total não confirma nem exclui sepse e não permite calcular mortalidade individual. Registrar medições e contexto clínico.",
      "Avaliar piores valores documentados e selecionar maior gravidade compatível quando houver dois critérios renais. PaO₂/FiO₂ menor que 200 ou 100 requer suporte respiratório para pontos 3 ou 4. Drogas vasoativas avaliadas segundo dose e tempo clínico adequados. Versão SOFA-1 (1996), não SOFA-2 (2025).",
      "Some os pontos. O resultado não fecha diagnóstico nem autoriza conduta sozinho."
    ],
    "faqs": [],
    "references": [
      "Vincent et al. SOFA original, Intensive Care Medicine (1996). https://pubmed.ncbi.nlm.nih.gov/8844239/",
      "MSD Manual — tabela SOFA clássico. https://www.msdmanuals.com/professional/multimedia/table/sequential-organ-failure-assessment-sofa-score",
      "Lambden et al. Desenvolvimento e aplicação do SOFA (2019). https://pmc.ncbi.nlm.nih.gov/articles/PMC6880479/",
      "Consenso SOFA-2 (2025) — distinto do SOFA-1. https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2840786"
    ],
    "related": [],
    "publicacao": "candidata",
    "version": "0.1.0-canonical",
    "bands": [
      {
        "min": 0,
        "max": 24,
        "label": "Escore SOFA-1 — descrição de disfunção orgânica",
        "tone": "info",
        "note": "Registrar seis pontuações e acompanhar a evolução seriada. Não converter a pontuação em mortalidade ou decisão terapêutica automática.",
        "nanda": []
      }
    ]
  },
  {
    "slug": "bps",
    "kind": "escala",
    "category": "Dor",
    "title": "ESCALA COMPORTAMENTAL DE DOR (BPS)",
    "lead": "Observação de dor em adultos não comunicativos sob ventilação mecânica invasiva",
    "nandaMode": "nao-fechar",
    "criteria": [
      {
        "id": "face",
        "label": "Expressão facial",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 1,
            "label": "Face relaxada"
          },
          {
            "value": 2,
            "label": "Tensão facial discreta, por exemplo, sobrancelhas aproximadas"
          },
          {
            "value": 3,
            "label": "Tensão facial intensa, incluindo fechamento firme dos olhos"
          },
          {
            "value": 4,
            "label": "Careta evidente"
          }
        ]
      },
      {
        "id": "arms",
        "label": "Movimentos dos membros superiores",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 1,
            "label": "Membros superiores relaxados e sem movimentos de defesa"
          },
          {
            "value": 2,
            "label": "Flexão parcial dos braços"
          },
          {
            "value": 3,
            "label": "Flexão acentuada, com tensão e dedos fletidos"
          },
          {
            "value": 4,
            "label": "Retração contínua dos membros superiores"
          }
        ]
      },
      {
        "id": "ventilator",
        "label": "Adaptação à ventilação mecânica",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 1,
            "label": "Tolera a ventilação e movimentação"
          },
          {
            "value": 2,
            "label": "Tosse, mas mantém adaptação ao ventilador na maior parte do tempo"
          },
          {
            "value": 3,
            "label": "Luta contra o ventilador"
          },
          {
            "value": 4,
            "label": "Incapacidade persistente de adaptação à ventilação"
          }
        ]
      }
    ],
    "howTo": [
      "Três domínios comportamentais · pacientes ventilados; pontuar 1 a 4 em cada",
      "BPS original para adultos sedados, não comunicativos e ventilados mecanicamente. Não utilizar esta versão em pacientes não intubados (BPS-NI é variante diferente), nem para descartar dor por ausência de movimentos. Reavaliar contexto, analgesia, sedação e protocolos locais.",
      "A pontuação mínima 3 indica ausência dos comportamentos pontuados na situação observada, não prova ausência de dor. A escala não pode indicar titulação automática de analgésicos. Esta versão é somente para pacientes com ventilação mecânica invasiva.",
      "Some os pontos. O resultado não fecha diagnóstico nem autoriza conduta sozinho."
    ],
    "faqs": [],
    "references": [
      "Payen JF et al. Assessing pain in critically ill sedated patients by using a behavioral pain scale. Crit Care Med. 2001. https://pubmed.ncbi.nlm.nih.gov/11801819/",
      "Adaptação e tradução brasileira da Behavioral Pain Scale. Rev Bras Ter Intensiva, 2014. https://pmc.ncbi.nlm.nih.gov/articles/PMC4304465/",
      "Validação brasileira da BPS para pacientes ventilados. Rev Dor, 2017. https://pubmed.ncbi.nlm.nih.gov/28258734/"
    ],
    "related": [],
    "publicacao": "candidata",
    "version": "0.1.0-candidate",
    "bands": [
      {
        "min": 3,
        "max": 12,
        "label": "Registro comportamental: 3–12",
        "tone": "info",
        "note": "Pontuação maior corresponde a maior expressão de comportamentos associados à dor. Avaliar tendência temporal e contextos de cuidado, sem diagnóstico automático.",
        "nanda": []
      }
    ]
  },
  {
    "slug": "cries",
    "kind": "escala",
    "category": "Dor",
    "title": "ESCALA CRIES — DOR NEONATAL PÓS-OPERATÓRIA",
    "lead": "Cinco indicadores fisiológicos e comportamentais de dor, 0 a 2 pontos cada",
    "nandaMode": "nao-fechar",
    "criteria": [
      {
        "id": "choro",
        "label": "Choro",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Ausente ou habitual, não agudo"
          },
          {
            "value": 1,
            "label": "Agudo ou estridente, mas consolável"
          },
          {
            "value": 2,
            "label": "Inconsolável"
          }
        ]
      },
      {
        "id": "oxigenio",
        "label": "Suporte de O₂ para manter SpO₂ acima de 95%",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Não necessita de O₂ suplementar"
          },
          {
            "value": 1,
            "label": "Necessita de FiO₂ até 30%"
          },
          {
            "value": 2,
            "label": "Necessita de FiO₂ acima de 30%"
          }
        ]
      },
      {
        "id": "sinais",
        "label": "Frequência cardíaca ou pressão arterial vs. basal pré-operatório",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "No valor basal ou abaixo"
          },
          {
            "value": 1,
            "label": "Aumento até 20% em FC ou PA"
          },
          {
            "value": 2,
            "label": "Aumento superior a 20% em FC ou PA"
          }
        ]
      },
      {
        "id": "expressao",
        "label": "Expressão facial",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Sem careta"
          },
          {
            "value": 1,
            "label": "Careta"
          },
          {
            "value": 2,
            "label": "Careta associada a gemido"
          }
        ]
      },
      {
        "id": "sono",
        "label": "Estado do sono",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Dorme habitualmente"
          },
          {
            "value": 1,
            "label": "Desperta com frequência"
          },
          {
            "value": 2,
            "label": "Permanece acordado constantemente"
          }
        ]
      }
    ],
    "howTo": [
      "Choro · Suporte de O₂ · Sinais vitais · Expressão facial · Sono",
      "Instrumento de avaliação de dor pós-operatória neonatal. Exige linha de base clínica para FC/PA e avaliação da necessidade de O₂; não usar a pontuação como prescrição automática de analgesia.",
      "Exige basal pré-operatório para sinais vitais. Escala original de dor pós-operatória em neonatos; direitos de reprodução e tradução devem ser confirmados. Pontos de corte para analgesia não devem disparar conduta automática.",
      "Some os pontos. O resultado não fecha diagnóstico nem autoriza conduta sozinho."
    ],
    "faqs": [],
    "references": [
      "Krechel SW, Bildner J. CRIES: neonatal postoperative pain measurement, 1995. https://pubmed.ncbi.nlm.nih.gov/8521311/",
      "AAP. Prevention and Management of Procedural Pain in the Neonate (2016): tabela dos instrumentos. https://doi.org/10.1542/peds.2015-4271",
      "AAP. Prevention and Management of Pain in the Neonate: CRIES postoperative assessment. https://publications.aap.org/pediatrics/article/118/5/2231/69964/Prevention-and-Management-of-Pain-in-the-Neonate"
    ],
    "related": [],
    "publicacao": "candidata",
    "version": "0.1.0-canonical",
    "bands": [
      {
        "min": 0,
        "max": 10,
        "label": "Registro observacional de dor neonatal",
        "tone": "warn",
        "note": "Quanto maior o escore, maior a expressão comportamental e fisiológica de dor. Requer avaliação clínica e acompanhamento; não determina tratamento automaticamente.",
        "nanda": []
      }
    ]
  },
  {
    "slug": "flacc",
    "kind": "escala",
    "category": "Dor",
    "title": "ESCALA FLACC",
    "lead": "Observação de comportamentos associados à dor em pacientes pediátricos que não conseguem expressá-la verbalmente",
    "nandaMode": "nao-fechar",
    "criteria": [
      {
        "id": "face",
        "label": "Face (Rosto)",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Nenhuma expressão particular ou sorriso"
          },
          {
            "value": 1,
            "label": "Caretas, sobrancelhas franzidas"
          },
          {
            "value": 2,
            "label": "Tremor do queixo, mandíbulas cerradas"
          }
        ]
      },
      {
        "id": "legs",
        "label": "Pernas (Legs)",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Normais ou relaxadas"
          },
          {
            "value": 1,
            "label": "Inquietas, agitadas, tensas"
          },
          {
            "value": 2,
            "label": "Chutando ou esticadas"
          }
        ]
      },
      {
        "id": "activity",
        "label": "Atividade (Activity)",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Quieta, movendo-se facilmente"
          },
          {
            "value": 1,
            "label": "Contorcendo-se, tensa"
          },
          {
            "value": 2,
            "label": "Curvada, rígida ou com movimentos bruscos"
          }
        ]
      },
      {
        "id": "cry",
        "label": "Choro (Cry)",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Sem choro"
          },
          {
            "value": 1,
            "label": "Gemidos, queixa ocasional"
          },
          {
            "value": 2,
            "label": "Choro continuado, gritos"
          }
        ]
      },
      {
        "id": "consolability",
        "label": "Consolabilidade (Consolability)",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Satisfeita, relaxada"
          },
          {
            "value": 1,
            "label": "Tranquilizada por toques ou abraços"
          },
          {
            "value": 2,
            "label": "Difícil de consolar"
          }
        ]
      }
    ],
    "howTo": [
      "Face · Pernas · Atividade · Choro · Consolabilidade",
      "Uso profissional para apoio à avaliação; resultados não substituem exame clínico, protocolos locais ou decisão da equipe assistencial. Aplicar em população pediátrica compatível com o instrumento; utilizar adaptação específica quando indicada.",
      "FLACC é uma escala observacional, de 0 a 10, distinta da versão revista rFLACC. Não adaptar automaticamente para todos os grupos com deficiência cognitiva.",
      "Some os pontos. O resultado não fecha diagnóstico nem autoriza conduta sozinho."
    ],
    "faqs": [],
    "references": [
      "APTA. FLACC Behavioral Pain Scale — descrição e população-alvo. https://www.apta.org/patient-care/evidence-based-practice-resources/test-measures/face-legs-activity-cry-consolability-flacc-behavioral-pain-scale",
      "Merkel S et al. The FLACC: a behavioral scale for scoring postoperative pain in young children. https://pubmed.ncbi.nlm.nih.gov/9220806/"
    ],
    "related": [],
    "publicacao": "candidata",
    "version": "0.1.0-canonical",
    "bands": [
      {
        "min": 0,
        "max": 0,
        "label": "Nenhum comportamento pontuado",
        "tone": "info",
        "note": "Reavaliar conforme contexto; ausência de sinais não exclui dor.",
        "nanda": []
      },
      {
        "min": 1,
        "max": 10,
        "label": "Comportamentos associados à dor observados",
        "tone": "warn",
        "note": "A pontuação orienta acompanhamento e reavaliação, sem prescrever tratamento automaticamente.",
        "nanda": []
      }
    ]
  },
  {
    "slug": "lanss",
    "kind": "escala",
    "category": "Dor",
    "title": "LANSS — SINTOMAS E SINAIS DE DOR NEUROPÁTICA",
    "lead": "Leeds Assessment of Neuropathic Symptoms and Signs · versão clínica brasileira",
    "nandaMode": "nao-fechar",
    "criteria": [
      {
        "id": "sensacoes",
        "label": "1. Sensações cutâneas desagradáveis: formigamento ou agulhadas",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Não"
          },
          {
            "value": 5,
            "label": "Sim"
          }
        ]
      },
      {
        "id": "cor",
        "label": "2. Mudança de cor da pele na área dolorosa",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Não"
          },
          {
            "value": 5,
            "label": "Sim"
          }
        ]
      },
      {
        "id": "hipersensibilidade",
        "label": "3. Sensibilidade desagradável ao toque leve ou roupa",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Não"
          },
          {
            "value": 3,
            "label": "Sim"
          }
        ]
      },
      {
        "id": "paroxistica",
        "label": "4. Dor súbita, em crises ou tipo choque, mesmo em repouso",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Não"
          },
          {
            "value": 2,
            "label": "Sim"
          }
        ]
      },
      {
        "id": "temperatura",
        "label": "5. Sensação de calor ou queimação na pele dolorosa",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Não"
          },
          {
            "value": 1,
            "label": "Sim"
          }
        ]
      },
      {
        "id": "alodinia",
        "label": "6. Exame: alodinia ao toque suave comparativo",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Não identificada"
          },
          {
            "value": 5,
            "label": "Identificada"
          }
        ]
      },
      {
        "id": "limiar",
        "label": "7. Exame: limiar alterado ao estímulo pontiagudo comparativo",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Não identificado"
          },
          {
            "value": 3,
            "label": "Identificado"
          }
        ]
      }
    ],
    "howTo": [
      "Cinco sintomas relatados + dois sinais no exame sensorial",
      "Material para validação técnica com apoio no PCDT de Dor Crônica do Ministério da Saúde. Exame sensorial exige profissional habilitado; direitos de incorporação do instrumento e revisão clínica independente ainda requerem verificação.",
      "LANSS: 5 sintomas + 2 exames da sensibilidade. Pesos por ordem: 5, 5, 3, 2, 1, 5 e 3 (máximo 24). Os dois últimos itens exigem exame profissional, comparação com área não dolorosa e técnica apropriada. Não usar como diagnóstico isolado.",
      "Some os pontos. O resultado não fecha diagnóstico nem autoriza conduta sozinho."
    ],
    "faqs": [],
    "references": [
      "Ministério da Saúde — PCDT Dor Crônica: anexo LANSS em português. https://www.gov.br/saude/pt-br/assuntos/pcdt/d/dor-cronica",
      "Validação da versão brasileira da LANSS (2011). https://pubmed.ncbi.nlm.nih.gov/21883875/",
      "Bennett. Desenvolvimento e validação original da LANSS (2001). https://pubmed.ncbi.nlm.nih.gov/11323136/"
    ],
    "related": [],
    "publicacao": "candidata",
    "version": "0.2.0-recovery",
    "bands": [
      {
        "min": 0,
        "max": 11,
        "label": "Mecanismos neuropáticos menos prováveis",
        "tone": "info",
        "note": "Resultado abaixo de 12; não exclui neuropatia ou dor neuropática.",
        "nanda": []
      },
      {
        "min": 12,
        "max": 24,
        "label": "Possível predominância de mecanismos neuropáticos",
        "tone": "info",
        "note": "Doze pontos ou mais sugerem contribuição neuropática; correlacionar clinicamente.",
        "nanda": []
      }
    ]
  },
  {
    "slug": "painad",
    "kind": "escala",
    "category": "Dor",
    "title": "ESCALA PAINAD-BRASIL",
    "lead": "Avaliação observacional de comportamentos de dor em pessoas com demência avançada",
    "nandaMode": "nao-fechar",
    "criteria": [
      {
        "id": "respiracao",
        "label": "Respiração (independente de vocalização)",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Respiração normal"
          },
          {
            "value": 1,
            "label": "Dificuldade respiratória ocasional ou breve hiperventilação"
          },
          {
            "value": 2,
            "label": "Respiração ruidosa difícil, hiperventilação prolongada ou Cheyne–Stokes"
          }
        ]
      },
      {
        "id": "vocalizacao",
        "label": "Vocalização negativa",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Nenhuma"
          },
          {
            "value": 1,
            "label": "Gemidos ocasionais ou vocalização desaprovativa baixa"
          },
          {
            "value": 2,
            "label": "Chamados insistentes, gemidos altos, gritos ou choro"
          }
        ]
      },
      {
        "id": "expressao",
        "label": "Expressão facial",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Sorriso ou sem expressão marcante"
          },
          {
            "value": 1,
            "label": "Triste, assustada ou franzindo a testa"
          },
          {
            "value": 2,
            "label": "Careta pronunciada"
          }
        ]
      },
      {
        "id": "corpo",
        "label": "Linguagem corporal",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Relaxada"
          },
          {
            "value": 1,
            "label": "Tensão corporal, agitação ou inquietação"
          },
          {
            "value": 2,
            "label": "Rigidez, punhos cerrados, joelhos fletidos, resistências ou golpes"
          }
        ]
      },
      {
        "id": "consolabilidade",
        "label": "Consolabilidade",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Não precisa de consolo"
          },
          {
            "value": 1,
            "label": "Responde a voz ou toque tranquilizador"
          },
          {
            "value": 2,
            "label": "Não pode ser consolado ou distraído"
          }
        ]
      }
    ],
    "howTo": [
      "Cinco comportamentos observados — 0, 1 ou 2 pontos",
      "Uso profissional para apoio à avaliação; resultados não substituem exame clínico, protocolos locais ou decisão da equipe assistencial. Escore observacional; não equivale à intensidade autorreferida de dor.",
      "Não interpretar como escala numérica autorreferida de dor. Observação no contexto do paciente. Descrições baseadas na validação brasileira publicada.",
      "Some os pontos. O resultado não fecha diagnóstico nem autoriza conduta sozinho."
    ],
    "faqs": [],
    "references": [
      "PAINAD-Brasil: adaptação cultural e validação em pacientes adultos não verbais. https://pmc.ncbi.nlm.nih.gov/articles/PMC4977604/",
      "APTA. Pain Assessment in Advanced Dementia (PAINAD). https://www.apta.org/patient-care/evidence-based-practice-resources/test-measures/pain-assessment-in-advanced-dementia-painad"
    ],
    "related": [],
    "publicacao": "candidata",
    "version": "0.1.0-canonical",
    "bands": [
      {
        "min": 0,
        "max": 0,
        "label": "Nenhum dos comportamentos pontuado",
        "tone": "info",
        "note": "Resultado não exclui dor em quem apresenta pouca resposta comportamental.",
        "nanda": []
      },
      {
        "min": 1,
        "max": 10,
        "label": "Sinais comportamentais observados",
        "tone": "warn",
        "note": "Investigar causas e realizar reavaliação conforme contexto clínico.",
        "nanda": []
      }
    ]
  },
  {
    "slug": "barthel",
    "kind": "escala",
    "category": "Funcionalidade",
    "title": "ÍNDICE DE BARTHEL",
    "lead": "Registro funcional das atividades básicas de vida diária (10 atividades)",
    "nandaMode": "nao-fechar",
    "criteria": [
      {
        "id": "feeding",
        "label": "01. Alimentação",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Não consegue se alimentar"
          },
          {
            "value": 5,
            "label": "Ajuda para preparar ou cortar"
          },
          {
            "value": 10,
            "label": "Alimenta-se sem ajuda"
          }
        ]
      },
      {
        "id": "bathing",
        "label": "02. Banho",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Necessita de ajuda"
          },
          {
            "value": 5,
            "label": "Realiza sem ajuda"
          }
        ]
      },
      {
        "id": "grooming",
        "label": "03. Higiene pessoal",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Necessita de ajuda"
          },
          {
            "value": 5,
            "label": "Realiza sem ajuda"
          }
        ]
      },
      {
        "id": "dressing",
        "label": "04. Vestuário",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Depende de terceiros"
          },
          {
            "value": 5,
            "label": "Consegue parcialmente"
          },
          {
            "value": 10,
            "label": "Veste-se sem ajuda"
          }
        ]
      },
      {
        "id": "bowel",
        "label": "05. Controle intestinal",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Incontinência frequente"
          },
          {
            "value": 5,
            "label": "Episódios ocasionais"
          },
          {
            "value": 10,
            "label": "Continente"
          }
        ]
      },
      {
        "id": "bladder",
        "label": "06. Controle vesical",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Sem controle / manejo dependente"
          },
          {
            "value": 5,
            "label": "Episódios ocasionais"
          },
          {
            "value": 10,
            "label": "Controle ou manejo independente"
          }
        ]
      },
      {
        "id": "toilet",
        "label": "07. Uso do sanitário",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Dependente"
          },
          {
            "value": 5,
            "label": "Precisa de ajuda"
          },
          {
            "value": 10,
            "label": "Independente"
          }
        ]
      },
      {
        "id": "transfers",
        "label": "08. Transferência leito–cadeira",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Sem capacidade de transferir"
          },
          {
            "value": 5,
            "label": "Ajuda física importante"
          },
          {
            "value": 10,
            "label": "Ajuda mínima/supervisão"
          },
          {
            "value": 15,
            "label": "Independente"
          }
        ]
      },
      {
        "id": "mobility",
        "label": "09. Mobilidade plana",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Não se locomove"
          },
          {
            "value": 5,
            "label": "Cadeira de rodas sem ajuda, se não caminha"
          },
          {
            "value": 10,
            "label": "Caminha com assistência"
          },
          {
            "value": 15,
            "label": "Caminha sem ajuda"
          }
        ]
      },
      {
        "id": "stairs",
        "label": "10. Escadas",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Não consegue"
          },
          {
            "value": 5,
            "label": "Com auxílio/supervisão"
          },
          {
            "value": 10,
            "label": "Independente"
          }
        ]
      }
    ],
    "howTo": [
      "Dez atividades — selecione uma descrição em cada item",
      "Uso profissional. Esta é uma versão técnica candidata. O Índice de Barthel e certas traduções têm condições de uso/licenciamento pela MedChi/Mapi Research Trust; NÃO distribuir ou publicar comercialmente sem autorização. Avalie o desempenho atual de cada atividade, não uma capacidade hipotética.",
      "Valores e interpretações variam entre versões e contextos de reabilitação. Não usar o índice isolado para definir alta, dependência legal ou condutas clínicas. Avaliar contexto funcional e revisar com profissional habilitado.",
      "Some os pontos. O resultado não fecha diagnóstico nem autoriza conduta sozinho."
    ],
    "faqs": [],
    "references": [
      "Mahoney FI; Barthel DW. Functional evaluation: The Barthel Index. Md State Med J. 1965. https://pubmed.ncbi.nlm.nih.gov/?term=Mahoney+Barthel+Functional+evaluation+1965",
      "Shirley Ryan AbilityLab. Barthel Index — escalas, administração e direitos de uso. https://www.sralab.org/rehabilitation-measures/barthel-index",
      "Mapi Research Trust. Barthel Index — condições de utilização e autorização. https://eprovide.mapi-trust.org/instruments/barthel-index",
      "Cincura et al. Validação brasileira de NIHSS, Rankin e Barthel (2009). https://pubmed.ncbi.nlm.nih.gov/19039215/"
    ],
    "related": [],
    "publicacao": "candidata",
    "version": "0.1.0-candidate",
    "bands": [
      {
        "min": 0,
        "max": 100,
        "label": "0–100 pontos",
        "tone": "info",
        "note": "Quanto maior o total, maior a independência observada nas atividades avaliadas. Não pressupõe autonomia universal.",
        "nanda": []
      }
    ]
  },
  {
    "slug": "katz",
    "kind": "escala",
    "category": "Funcionalidade",
    "title": "ÍNDICE DE KATZ — ABVD",
    "lead": "Avaliação de independência em seis atividades básicas da vida diária",
    "nandaMode": "nao-fechar",
    "criteria": [
      {
        "id": "banho",
        "label": "Banho",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 1,
            "label": "Independente (Toma banho sozinho ou precisa de ajuda apenas em 1 parte)"
          },
          {
            "value": 0,
            "label": "Dependente (Precisa de ajuda para mais de 1 parte ou entrar/sair)"
          }
        ]
      },
      {
        "id": "vestir",
        "label": "Vestir-se",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 1,
            "label": "Independente (Veste-se sozinho; exceto amarrar sapatos)"
          },
          {
            "value": 0,
            "label": "Dependente (Precisa de ajuda para vestir-se ou é vestido por outros)"
          }
        ]
      },
      {
        "id": "sanitario",
        "label": "Uso do Sanitário",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 1,
            "label": "Independente (Vai ao banheiro, limpa-se e arruma roupas sozinho)"
          },
          {
            "value": 0,
            "label": "Dependente (Precisa de ajuda para usar banheiro ou comadre)"
          }
        ]
      },
      {
        "id": "transferencia",
        "label": "Transferência",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 1,
            "label": "Independente (Muda-se sozinho; pode usar bengala/andador)"
          },
          {
            "value": 0,
            "label": "Dependente (Precisa de ajuda humana para levantar ou deitar)"
          }
        ]
      },
      {
        "id": "continencia",
        "label": "Continência",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 1,
            "label": "Independente (Controle total da urina e fezes)"
          },
          {
            "value": 0,
            "label": "Dependente (Incontinência parcial/total ou precisa de enemas/sondas)"
          }
        ]
      },
      {
        "id": "alimentacao",
        "label": "Alimentação",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 1,
            "label": "Independente (Alimenta-se sozinho; cortar carne pode ter ajuda)"
          },
          {
            "value": 0,
            "label": "Dependente (Precisa de ajuda para comer ou recebe nutrição enteral/parenteral)"
          }
        ]
      }
    ],
    "howTo": [
      "Banho · Vestir · Sanitário · Transferência · Continência · Alimentação",
      "Uso profissional para apoio à avaliação; resultados não substituem exame clínico, protocolos locais ou decisão da equipe assistencial. Versão binária de seis atividades: 1 ponto significa independência; 0 significa dependência na atividade.",
      "A classificação A–G tradicional é diferente do escore binário de seis atividades. Esta versão reporta apenas o escore 0–6, com critério e resposta visíveis.",
      "Some os pontos. O resultado não fecha diagnóstico nem autoriza conduta sozinho."
    ],
    "faqs": [],
    "references": [
      "Katz Index of Independence in ADL — Shirley Ryan AbilityLab RehabMeasures. https://www.sralab.org/rehabilitation-measures/katz-index-independence-activities-daily-living",
      "Revisão de instrumentos de atividades da vida diária, com o Katz de 0 a 6. https://pmc.ncbi.nlm.nih.gov/articles/PMC7320974/"
    ],
    "related": [],
    "publicacao": "candidata",
    "version": "0.1.0-canonical",
    "bands": [
      {
        "min": 6,
        "max": 6,
        "label": "Independência nas seis atividades",
        "tone": "info",
        "note": "Avaliar segurança, necessidade de adaptação e contexto do paciente.",
        "nanda": []
      },
      {
        "min": 3,
        "max": 5,
        "label": "Dependência em uma ou mais atividades",
        "tone": "info",
        "note": "Planejar suporte específico; não utilizar a soma isoladamente para determinar cuidados.",
        "nanda": []
      },
      {
        "min": 0,
        "max": 2,
        "label": "Dependência em múltiplas atividades",
        "tone": "info",
        "note": "Requer avaliação funcional contextual e planejamento assistencial.",
        "nanda": []
      }
    ]
  },
  {
    "slug": "lachs",
    "kind": "escala",
    "category": "Funcionalidade",
    "title": "LACHS — RASTREIO FUNCIONAL DO IDOSO",
    "lead": "Checklist adaptado · 11 áreas funcionais · sem estratificação de risco validada",
    "nandaMode": "nao-fechar",
    "criteria": [
      {
        "id": "visao",
        "label": "Visão funcional",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Não foi identificada alteração"
          },
          {
            "value": 1,
            "label": "Alteração identificada — registrar avaliação"
          }
        ]
      },
      {
        "id": "audicao",
        "label": "Audição funcional",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Não foi identificada alteração"
          },
          {
            "value": 1,
            "label": "Alteração identificada — registrar avaliação"
          }
        ]
      },
      {
        "id": "continencia",
        "label": "Continência urinária",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Não foi identificada alteração"
          },
          {
            "value": 1,
            "label": "Alteração identificada — registrar avaliação"
          }
        ]
      },
      {
        "id": "avd_aivd",
        "label": "Atividades de vida diária",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Não foi identificada alteração"
          },
          {
            "value": 1,
            "label": "Alteração identificada — registrar avaliação"
          }
        ]
      },
      {
        "id": "membros_superiores",
        "label": "Funcionalidade dos braços",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Não foi identificada alteração"
          },
          {
            "value": 1,
            "label": "Alteração identificada — registrar avaliação"
          }
        ]
      },
      {
        "id": "membros_inferiores",
        "label": "Marcha e transferência",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Não foi identificada alteração"
          },
          {
            "value": 1,
            "label": "Alteração identificada — registrar avaliação"
          }
        ]
      },
      {
        "id": "nutricao",
        "label": "Estado nutricional",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Não foi identificada alteração"
          },
          {
            "value": 1,
            "label": "Alteração identificada — registrar avaliação"
          }
        ]
      },
      {
        "id": "cognicao",
        "label": "Memória e cognição",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Não foi identificada alteração"
          },
          {
            "value": 1,
            "label": "Alteração identificada — registrar avaliação"
          }
        ]
      },
      {
        "id": "humor",
        "label": "Humor / depressão",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Não foi identificada alteração"
          },
          {
            "value": 1,
            "label": "Alteração identificada — registrar avaliação"
          }
        ]
      },
      {
        "id": "ambiente",
        "label": "Segurança do domicílio",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Não foi identificada alteração"
          },
          {
            "value": 1,
            "label": "Alteração identificada — registrar avaliação"
          }
        ]
      },
      {
        "id": "rede_apoio",
        "label": "Apoio social e familiar",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Não foi identificada alteração"
          },
          {
            "value": 1,
            "label": "Alteração identificada — registrar avaliação"
          }
        ]
      }
    ],
    "howTo": [
      "Onze domínios funcionais — descrever limitações em observações",
      "Checklist de rastreio funcional adaptado dos domínios descritos por Lachs e colaboradores, NÃO é reprodução validada do questionário original. Não usar a contagem como diagnóstico, estratificação ou decisão isolada.",
      "O número 0–11 é apenas a CONTAGEM DE ÁREAS COM ALTERAÇÃO marcadas neste checklist adaptado — NÃO é uma pontuação ou faixa de risco da escala Lachs. Não utilizar cortes de 5 ou 9 do formulário histórico, pois não foram comprovados. Documentar o achado e seu contexto em observações.",
      "Some os pontos. O resultado não fecha diagnóstico nem autoriza conduta sozinho."
    ],
    "faqs": [],
    "references": [
      "Lachs et al. A simple procedure for general screening for functional disability in elderly patients. Ann Intern Med. 1990. https://pubmed.ncbi.nlm.nih.gov/2334082/",
      "Referência original do projeto: rastreio das 11 áreas funcionais. https://www.calculadorasdeenfermagem.com.br/lachs.html"
    ],
    "related": [],
    "publicacao": "candidata",
    "version": "0.2.0-recovery",
    "bands": [
      {
        "min": 0,
        "max": 0,
        "label": "Nenhuma alteração marcada nesta triagem",
        "tone": "info",
        "note": "Não exclui limitações não detectadas; investigar conforme contexto.",
        "nanda": []
      },
      {
        "min": 1,
        "max": 11,
        "label": "Há áreas funcionais com alteração",
        "tone": "info",
        "note": "Avaliar individualmente os domínios alterados. A contagem NÃO é escore prognóstico ou faixa de risco.",
        "nanda": []
      }
    ]
  },
  {
    "slug": "lawton",
    "kind": "escala",
    "category": "Funcionalidade",
    "title": "LAWTON–BRODY — ATIVIDADES INSTRUMENTAIS",
    "lead": "Avaliação de independência em oito atividades instrumentais de vida diária (AIVD)",
    "nandaMode": "nao-fechar",
    "criteria": [
      {
        "id": "telefone",
        "label": "Uso do telefone",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Não usa sem ajuda"
          },
          {
            "value": 1,
            "label": "Utiliza adequadamente sem assistência"
          }
        ]
      },
      {
        "id": "compras",
        "label": "Realização de compras",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Requer ajuda para compras"
          },
          {
            "value": 1,
            "label": "Realiza compras sem assistência"
          }
        ]
      },
      {
        "id": "refeicoes",
        "label": "Preparo de refeições",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Depende de outras pessoas para preparar"
          },
          {
            "value": 1,
            "label": "Prepara refeições sem assistência"
          }
        ]
      },
      {
        "id": "casa",
        "label": "Cuidados com a casa",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Dependente para tarefas domésticas"
          },
          {
            "value": 1,
            "label": "Realiza os cuidados habituais com autonomia"
          }
        ]
      },
      {
        "id": "roupas",
        "label": "Lavagem das próprias roupas",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Precisa que outras pessoas lavem"
          },
          {
            "value": 1,
            "label": "Lava as próprias roupas sem ajuda"
          }
        ]
      },
      {
        "id": "transporte",
        "label": "Deslocamento ou transporte",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Necessita de acompanhante para transporte"
          },
          {
            "value": 1,
            "label": "Utiliza meios de transporte sem assistência"
          }
        ]
      },
      {
        "id": "medicamentos",
        "label": "Responsabilidade pela medicação",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Necessita que outra pessoa organize ou administre"
          },
          {
            "value": 1,
            "label": "Organiza e toma corretamente sem ajuda"
          }
        ]
      },
      {
        "id": "financas",
        "label": "Manejo das finanças",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Necessita de ajuda para operações financeiras"
          },
          {
            "value": 1,
            "label": "Administra suas finanças com autonomia"
          }
        ]
      }
    ],
    "howTo": [
      "Oito domínios AIVD — independência 1 e dependência 0",
      "Pontuação funcional estruturada. Considerar oportunidades reais para realizar atividades, suporte social, hábitos culturais e histórico de desempenho; não inferir incapacidade apenas por uma resposta.",
      "Adaptação binária de oito domínios funcionais, aplicados a todos os gêneros. Não equivale às versões com 7 domínios ou 7–21 pontos usadas em alguns serviços brasileiros. Não estabelecer faixas clínicas de dependência não validadas.",
      "Some os pontos. O resultado não fecha diagnóstico nem autoriza conduta sozinho."
    ],
    "faqs": [],
    "references": [
      "NCBI Bookshelf. Lawton–Brody IADL — 8 itens, pontuação 0–8. https://www.ncbi.nlm.nih.gov/books/NBK554651/table/appa.tab12/",
      "Manual MSD Professional — tabela de Lawton–Brody. https://www.msdmanuals.com/professional/multimedia/table/lawton-instrumental-activities-of-daily-living-scale"
    ],
    "related": [],
    "publicacao": "candidata",
    "version": "0.1.0-canonical",
    "bands": [
      {
        "min": 0,
        "max": 8,
        "label": "Pontuação AIVD registrada",
        "tone": "info",
        "note": "Resultados mais altos indicam maior independência nos oito domínios avaliados; interpretar cada resposta conforme contexto e variante escolhida.",
        "nanda": []
      }
    ]
  },
  {
    "slug": "bishop",
    "kind": "escala",
    "category": "Obstetrícia",
    "title": "ÍNDICE DE BISHOP",
    "lead": "Avaliação descritiva das condições cervicais e da estação fetal no contexto obstétrico",
    "nandaMode": "nao-fechar",
    "criteria": [
      {
        "id": "dilation",
        "label": "Dilatação cervical (cm)",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Colo fechado"
          },
          {
            "value": 1,
            "label": "1–2 cm"
          },
          {
            "value": 2,
            "label": "3–4 cm"
          },
          {
            "value": 3,
            "label": "≥5 cm"
          }
        ]
      },
      {
        "id": "effacement",
        "label": "Apagamento cervical (%)",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "0–30%"
          },
          {
            "value": 1,
            "label": "40–50%"
          },
          {
            "value": 2,
            "label": "60–70%"
          },
          {
            "value": 3,
            "label": "≥80%"
          }
        ]
      },
      {
        "id": "station",
        "label": "Estação da apresentação fetal",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "−3"
          },
          {
            "value": 1,
            "label": "−2"
          },
          {
            "value": 2,
            "label": "−1 ou 0"
          },
          {
            "value": 3,
            "label": "+1 ou +2"
          }
        ]
      },
      {
        "id": "consistency",
        "label": "Consistência cervical",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Firme"
          },
          {
            "value": 1,
            "label": "Intermediária"
          },
          {
            "value": 2,
            "label": "Macia"
          }
        ]
      },
      {
        "id": "position",
        "label": "Posição cervical",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Posterior"
          },
          {
            "value": 1,
            "label": "Mediana"
          },
          {
            "value": 2,
            "label": "Anterior"
          }
        ]
      }
    ],
    "howTo": [
      "Cinco parâmetros obstétricos, com pontuações de 0 a 2 ou 0 a 3",
      "Avaliação do colo uterino depende de exame clínico e competência profissional. O escore não determina indicação, momento, método nem sucesso da indução do trabalho de parto. Conferir contraindicações, idade gestacional, condições maternas e fetais e protocolos locais.",
      "Faixas apresentadas apenas como orientação descritiva. Diretrizes contemporâneas empregam diferentes limiares de maturação cervical (aproximadamente 3 a 8 pontos); uma nota isolada não define intervenção, via de parto ou risco fetal.",
      "Some os pontos. O resultado não fecha diagnóstico nem autoriza conduta sozinho."
    ],
    "faqs": [],
    "references": [
      "Open RN. Nursing Health Promotion, Tabela 10.7a: Bishop Score. CC BY 4.0, 2025. https://www.ncbi.nlm.nih.gov/books/NBK615337/table/ch10.tab8/",
      "ACOG. Labor Induction: FAQ para pacientes. https://www.acog.org/womens-health/faqs/labor-induction",
      "ACOG Clinical Practice Guideline No. 9: Cervical Ripening in Pregnancy, 2025. https://doi.org/10.1097/AOG.0000000000005951"
    ],
    "related": [],
    "publicacao": "candidata",
    "version": "0.1.0-candidate",
    "bands": [
      {
        "min": 0,
        "max": 5,
        "label": "0–5 · características menos favoráveis",
        "tone": "ok",
        "note": "Associar o escore aos achados clínicos e protocolo obstétrico.",
        "nanda": []
      },
      {
        "min": 6,
        "max": 7,
        "label": "6–7 · achados intermediários",
        "tone": "warn",
        "note": "Zona de interpretação dependente do contexto e do serviço.",
        "nanda": []
      },
      {
        "min": 8,
        "max": 13,
        "label": "8–13 · características mais favoráveis",
        "tone": "ok",
        "note": "Não garante sucesso de indução e não substitui avaliação especializada.",
        "nanda": []
      }
    ]
  },
  {
    "slug": "asa",
    "kind": "escala",
    "category": "Anestesia",
    "title": "CLASSIFICAÇÃO DE ESTADO FÍSICO ASA",
    "lead": "Classificação pré-anestésica do estado físico, com modificador E para cirurgia de emergência",
    "nandaMode": "nao-fechar",
    "criteria": [
      {
        "id": "asa_physical_status",
        "label": "Condição pré-anestésica (seleção única)",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 1,
            "label": "ASA I — pessoa sem doença sistêmica relevante."
          },
          {
            "value": 2,
            "label": "ASA II — doença sistêmica leve, sem limitação funcional importante."
          },
          {
            "value": 3,
            "label": "ASA III — doença sistêmica grave, com repercussão clínica ou funcional significativa."
          },
          {
            "value": 4,
            "label": "ASA IV — doença sistêmica grave que representa ameaça contínua à vida."
          },
          {
            "value": 5,
            "label": "ASA V — condição crítica com expectativa de não sobreviver sem o procedimento."
          },
          {
            "value": 6,
            "label": "ASA VI — morte encefálica declarada, com doação de órgãos planejada."
          }
        ]
      }
    ],
    "howTo": [
      "Seleção de uma categoria ASA I–VI e registro separado do modificador de emergência",
      "Classificação ordinal, não soma nem estima sozinha risco anestésico-cirúrgico. A atribuição deve considerar comorbidades e avaliação pré-anestésica por profissional habilitado. Não usar a categoria para prescrever monitorização, medicação ou destino pós-operatório.",
      "A categoria ASA descreve o estado físico pré-operatório, não constitui cálculo de mortalidade ou de risco cirúrgico isoladamente. O sufixo E significa emergência e não altera o grau I–VI. O sufixo E é aplicável às classes I–V, não à classe VI no piloto. A condição pré-anestésica e o modificador devem ser confirmados por profissional habilitado.",
      "Some os pontos. O resultado não fecha diagnóstico nem autoriza conduta sozinho."
    ],
    "faqs": [],
    "references": [
      "American Society of Anesthesiologists. ASA Physical Status Classification System, última alteração 2020. https://www.asahq.org/standards-and-guidelines/asa-physical-status-classification-system",
      "OpenAnesthesia. ASA Physical Status Classification, 2024. https://www.openanesthesia.org/keywords/asa-physical-status-classification/",
      "StatPearls. American Society of Anesthesiologists Physical Status Classification System, 2025. https://www.ncbi.nlm.nih.gov/books/NBK441940/"
    ],
    "related": [],
    "publicacao": "candidata",
    "version": "0.1.0-candidate",
    "bands": [
      {
        "min": 1,
        "max": 6,
        "label": "Categoria observada",
        "tone": "warn",
        "note": "Selecione uma classe para exibir sua descrição, sem gerar conduta automática.",
        "nanda": []
      }
    ]
  },
  {
    "slug": "classificacao_wifi",
    "kind": "escala",
    "category": "Pé diabético",
    "title": "CLASSIFICAÇÃO WIfI — WOUND / ISCHEMIA / FOOT INFECTION",
    "lead": "Três graduações independentes para o membro inferior ameaçado",
    "nandaMode": "nao-fechar",
    "criteria": [
      {
        "id": "wound",
        "label": "W — Ferida / gangrena",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "0 — Sem ferida ou gangrena"
          },
          {
            "value": 1,
            "label": "1 — Lesão superficial pequena; perda tecidual menor"
          },
          {
            "value": 2,
            "label": "2 — Lesão mais profunda, com estruturas expostas ou gangrena limitada"
          },
          {
            "value": 3,
            "label": "3 — Lesão extensa/profunda ou gangrena extensa"
          }
        ]
      },
      {
        "id": "ischemia",
        "label": "I — Isquemia",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "0 — ITB ≥0,80; tornozelo >100 mmHg; hálux/TcPO₂ ≥60 mmHg"
          },
          {
            "value": 1,
            "label": "1 — ITB 0,60–0,79; tornozelo 70–100; hálux/TcPO₂ 40–59 mmHg"
          },
          {
            "value": 2,
            "label": "2 — ITB 0,40–0,59; tornozelo 50–69; hálux/TcPO₂ 30–39 mmHg"
          },
          {
            "value": 3,
            "label": "3 — ITB ≤0,39; tornozelo <50; hálux/TcPO₂ <30 mmHg"
          }
        ]
      },
      {
        "id": "infection",
        "label": "fI — Infecção do pé",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "0 — Sem sinais clínicos de infecção"
          },
          {
            "value": 1,
            "label": "1 — Infecção leve e superficial"
          },
          {
            "value": 2,
            "label": "2 — Infecção moderada, profunda ou extensa, sem manifestações sistêmicas"
          },
          {
            "value": 3,
            "label": "3 — Infecção grave com manifestações sistêmicas"
          }
        ]
      }
    ],
    "howTo": [
      "Registrar separadamente W, I e fI (0 a 3 em cada domínio)",
      "WIfI não é escore aditivo. A graduações W, I e fI devem ser verificadas com os exames e achados clínicos. Não estimar risco de amputação ou necessidade de revascularização pela soma.",
      "A classificação WIfI registra W–I–fI separadamente. Isquemia: ITB = índice tornozelo-braquial; pressão sistólica no tornozelo e no hálux, e TcPO₂, em mmHg. Em pessoas com diabetes, medir pressão no hálux, que prevalece quando discordante do ITB; considerar também parâmetros de pressão de tornozelo. Não calcular estágio de amputação nem indicação de revascularização por soma.",
      "Some os pontos. O resultado não fecha diagnóstico nem autoriza conduta sozinho."
    ],
    "faqs": [],
    "references": [
      "Society for Vascular Surgery — diretrizes e sistema WIfI. https://vascular.org/research-quality/guidelines-and-reporting-standards/clinical-practice-guidelines",
      "Mills et al. WIfI Threatened Limb Classification (2014). https://doi.org/10.1016/j.jvs.2013.08.003",
      "IWGDF — orientações para classificação das úlceras do pé. https://iwgdfguidelines.org/guidelines-2023/",
      "SBACV. Diretrizes brasileiras de pé diabético (2023), tabelas 8–10 (WIfI). https://pmc.ncbi.nlm.nih.gov/articles/PMC11129855/"
    ],
    "related": [],
    "publicacao": "candidata",
    "version": "0.1.0-wave-gated",
    "bands": [
      {
        "min": 0,
        "max": 3,
        "label": "Classificação tridimensional W–I–fI",
        "tone": "info",
        "note": "Registrar os graus W, I e fI independentemente (0–3 cada). Estágio de risco e benefício de revascularização não são calculados automaticamente.",
        "nanda": []
      }
    ]
  },
  {
    "slug": "sistema_sinbad",
    "kind": "escala",
    "category": "Pé diabético",
    "title": "SISTEMA SINBAD — ÚLCERA NO PÉ DIABÉTICO",
    "lead": "Caracterização padronizada de localização, perfusão, sensibilidade, infecção, área e profundidade",
    "nandaMode": "nao-fechar",
    "criteria": [
      {
        "id": "site",
        "label": "S — localização da úlcera",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Antepé"
          },
          {
            "value": 1,
            "label": "Médiopé ou retropé"
          }
        ]
      },
      {
        "id": "isquemia",
        "label": "I — evidência clínica de isquemia",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Fluxo pedal preservado / ao menos um pulso palpável"
          },
          {
            "value": 1,
            "label": "Evidência de redução do fluxo pedal"
          }
        ]
      },
      {
        "id": "neuropatia",
        "label": "N — perda de sensibilidade protetora",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Sensibilidade protetora preservada"
          },
          {
            "value": 1,
            "label": "Perda de sensibilidade protetora"
          }
        ]
      },
      {
        "id": "infeccao",
        "label": "B — infecção bacteriana clínica",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Ausência de infecção clínica"
          },
          {
            "value": 1,
            "label": "Infecção clínica presente"
          }
        ]
      },
      {
        "id": "area",
        "label": "A — área da úlcera",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Menor que 1 cm²"
          },
          {
            "value": 1,
            "label": "Maior ou igual a 1 cm²"
          }
        ]
      },
      {
        "id": "profundidade",
        "label": "D — profundidade da úlcera",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Pele e tecido subcutâneo"
          },
          {
            "value": 1,
            "label": "Atinge músculo, tendão ou estruturas mais profundas"
          }
        ]
      }
    ],
    "howTo": [
      "Seis dimensões padronizadas — 0 ou 1 ponto",
      "O SINBAD padroniza a descrição de úlceras no pé diabético. Não serve para prever isoladamente a cicatrização ou indicar procedimento em um indivíduo.",
      "IWGDF recomenda descrever cada componente e não usar escore para prognóstico individual. Limites de área 1 cm², resultado de 0 a 6.",
      "Some os pontos. O resultado não fecha diagnóstico nem autoriza conduta sozinho."
    ],
    "faqs": [],
    "references": [
      "IWGDF 2023. Guidelines on classification of foot ulcers in diabetes. https://iwgdfguidelines.org/wp-content/uploads/2023/07/IWGDF-Guidelines-2023.pdf",
      "SBACV. Diretrizes de pé diabético 2023 — tabela SINBAD. https://pmc.ncbi.nlm.nih.gov/articles/PMC11129855/",
      "IWGDF. Diretriz de classificação, 2023, publicação 2024. https://onlinelibrary.wiley.com/doi/10.1002/dmrr.3648"
    ],
    "related": [],
    "publicacao": "candidata",
    "version": "0.1.0-canonical",
    "bands": [
      {
        "min": 0,
        "max": 6,
        "label": "Perfil SINBAD registrado",
        "tone": "info",
        "note": "Documentar todos os seis domínios individualmente; não estimar prognóstico ou indicar tratamento apenas pelo somatório.",
        "nanda": []
      }
    ]
  },
  {
    "slug": "hamilton",
    "kind": "escala",
    "category": "Saúde mental",
    "title": "ESCALA HAMILTON DE ANSIEDADE — HAM-A",
    "lead": "Avaliação clínica de gravidade de sintomas de ansiedade: 14 domínios, 0 a 4 por domínio",
    "nandaMode": "nao-fechar",
    "criteria": [
      {
        "id": "ansiedade",
        "label": "Humor ansioso: preocupação, expectativa apreensiva, irritabilidade",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Ausente"
          },
          {
            "value": 1,
            "label": "Leve"
          },
          {
            "value": 2,
            "label": "Moderado"
          },
          {
            "value": 3,
            "label": "Grave"
          },
          {
            "value": 4,
            "label": "Muito grave"
          }
        ]
      },
      {
        "id": "tensao",
        "label": "Tensão: dificuldade para relaxar, sobressaltos ou tremores",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Ausente"
          },
          {
            "value": 1,
            "label": "Leve"
          },
          {
            "value": 2,
            "label": "Moderado"
          },
          {
            "value": 3,
            "label": "Grave"
          },
          {
            "value": 4,
            "label": "Muito grave"
          }
        ]
      },
      {
        "id": "medos",
        "label": "Medos: pessoas, situações, locais ou circunstâncias",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Ausente"
          },
          {
            "value": 1,
            "label": "Leve"
          },
          {
            "value": 2,
            "label": "Moderado"
          },
          {
            "value": 3,
            "label": "Grave"
          },
          {
            "value": 4,
            "label": "Muito grave"
          }
        ]
      },
      {
        "id": "insonia",
        "label": "Insônia: dificuldade para iniciar ou manter o sono",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Ausente"
          },
          {
            "value": 1,
            "label": "Leve"
          },
          {
            "value": 2,
            "label": "Moderado"
          },
          {
            "value": 3,
            "label": "Grave"
          },
          {
            "value": 4,
            "label": "Muito grave"
          }
        ]
      },
      {
        "id": "cognicao",
        "label": "Concentração e memória: dificuldades intelectuais",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Ausente"
          },
          {
            "value": 1,
            "label": "Leve"
          },
          {
            "value": 2,
            "label": "Moderado"
          },
          {
            "value": 3,
            "label": "Grave"
          },
          {
            "value": 4,
            "label": "Muito grave"
          }
        ]
      },
      {
        "id": "humor_deprimido",
        "label": "Humor deprimido: perda de interesse ou prazer",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Ausente"
          },
          {
            "value": 1,
            "label": "Leve"
          },
          {
            "value": 2,
            "label": "Moderado"
          },
          {
            "value": 3,
            "label": "Grave"
          },
          {
            "value": 4,
            "label": "Muito grave"
          }
        ]
      },
      {
        "id": "muscular",
        "label": "Sintomas somáticos musculares: dores, rigidez e tensão",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Ausente"
          },
          {
            "value": 1,
            "label": "Leve"
          },
          {
            "value": 2,
            "label": "Moderado"
          },
          {
            "value": 3,
            "label": "Grave"
          },
          {
            "value": 4,
            "label": "Muito grave"
          }
        ]
      },
      {
        "id": "sensorial",
        "label": "Sintomas somáticos sensoriais: parestesias, zumbidos e visão",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Ausente"
          },
          {
            "value": 1,
            "label": "Leve"
          },
          {
            "value": 2,
            "label": "Moderado"
          },
          {
            "value": 3,
            "label": "Grave"
          },
          {
            "value": 4,
            "label": "Muito grave"
          }
        ]
      },
      {
        "id": "cardiovascular",
        "label": "Sintomas cardiovasculares: palpitações, taquicardia e desconforto",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Ausente"
          },
          {
            "value": 1,
            "label": "Leve"
          },
          {
            "value": 2,
            "label": "Moderado"
          },
          {
            "value": 3,
            "label": "Grave"
          },
          {
            "value": 4,
            "label": "Muito grave"
          }
        ]
      },
      {
        "id": "respiratorio",
        "label": "Sintomas respiratórios: opressão torácica, suspiros e falta de ar",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Ausente"
          },
          {
            "value": 1,
            "label": "Leve"
          },
          {
            "value": 2,
            "label": "Moderado"
          },
          {
            "value": 3,
            "label": "Grave"
          },
          {
            "value": 4,
            "label": "Muito grave"
          }
        ]
      },
      {
        "id": "gastrointestinal",
        "label": "Sintomas gastrointestinais: náusea, desconforto ou alteração intestinal",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Ausente"
          },
          {
            "value": 1,
            "label": "Leve"
          },
          {
            "value": 2,
            "label": "Moderado"
          },
          {
            "value": 3,
            "label": "Grave"
          },
          {
            "value": 4,
            "label": "Muito grave"
          }
        ]
      },
      {
        "id": "geniturinario",
        "label": "Sintomas geniturinários: frequência, urgência, alteração sexual",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Ausente"
          },
          {
            "value": 1,
            "label": "Leve"
          },
          {
            "value": 2,
            "label": "Moderado"
          },
          {
            "value": 3,
            "label": "Grave"
          },
          {
            "value": 4,
            "label": "Muito grave"
          }
        ]
      },
      {
        "id": "autonomico",
        "label": "Sintomas autonômicos: sudorese, boca seca, tontura",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Ausente"
          },
          {
            "value": 1,
            "label": "Leve"
          },
          {
            "value": 2,
            "label": "Moderado"
          },
          {
            "value": 3,
            "label": "Grave"
          },
          {
            "value": 4,
            "label": "Muito grave"
          }
        ]
      },
      {
        "id": "entrevista",
        "label": "Comportamento observado na entrevista: tensão e inquietude",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Ausente"
          },
          {
            "value": 1,
            "label": "Leve"
          },
          {
            "value": 2,
            "label": "Moderado"
          },
          {
            "value": 3,
            "label": "Grave"
          },
          {
            "value": 4,
            "label": "Muito grave"
          }
        ]
      }
    ],
    "howTo": [
      "Entrevista clínica — 14 domínios de sintomas psíquicos e somáticos",
      "HAM-A é avaliada por profissional treinado; não constitui teste de diagnóstico de transtorno de ansiedade nem instrumento de autorrelato autônomo. Confirmar causas orgânicas e comorbidades.",
      "14 domínios, 0 a 4 cada, total 0–56. CDISC informa domínio público para HAM-A. Descritores em português são apoio sintético à aplicação e exigem revisão de equivalência linguística.",
      "Some os pontos. O resultado não fecha diagnóstico nem autoriza conduta sozinho."
    ],
    "faqs": [],
    "references": [
      "CDISC. Hamilton Anxiety Rating Scale (HAM-A) — Public Domain. https://www.cdisc.org/standards/foundational/qrs/hamilton-anxiety-rating-scale",
      "University of Florida, Department of Psychiatry. HAM-A, 14 itens, 0 a 56. https://dcf.psychiatry.ufl.edu/files/2011/05/HAMILTON-ANXIETY.pdf",
      "Estudo de adaptação portuguesa HAM-A 2023. https://pmc.ncbi.nlm.nih.gov/articles/PMC10357663/"
    ],
    "related": [],
    "publicacao": "candidata",
    "version": "0.1.0-canonical",
    "bands": [
      {
        "min": 0,
        "max": 56,
        "label": "Gravidade dos sintomas registrada",
        "tone": "info",
        "note": "Utilizar como avaliação longitudinal em entrevista profissional. Faixas de classificação não substituem critérios clínicos de diagnóstico.",
        "nanda": []
      }
    ]
  },
  {
    "slug": "gds",
    "kind": "escala",
    "category": "Saúde mental",
    "title": "ESCALA DE DEPRESSÃO GERIÁTRICA — GDS-15",
    "lead": "Versão curta de 15 perguntas para rastreio de sintomas depressivos em pessoas idosas",
    "nandaMode": "nao-fechar",
    "criteria": [
      {
        "id": "gds_1",
        "label": "Você está basicamente satisfeito(a) com sua vida?",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 1,
            "label": "Não"
          },
          {
            "value": 0,
            "label": "Sim"
          }
        ]
      },
      {
        "id": "gds_2",
        "label": "Você abandonou muitas de suas atividades e interesses?",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Não"
          },
          {
            "value": 1,
            "label": "Sim"
          }
        ]
      },
      {
        "id": "gds_3",
        "label": "Você sente que sua vida está vazia?",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Não"
          },
          {
            "value": 1,
            "label": "Sim"
          }
        ]
      },
      {
        "id": "gds_4",
        "label": "Você se aborrece com frequência?",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Não"
          },
          {
            "value": 1,
            "label": "Sim"
          }
        ]
      },
      {
        "id": "gds_5",
        "label": "Você está de bom humor na maior parte do tempo?",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 1,
            "label": "Não"
          },
          {
            "value": 0,
            "label": "Sim"
          }
        ]
      },
      {
        "id": "gds_6",
        "label": "Você teme que algo ruim possa lhe acontecer?",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Não"
          },
          {
            "value": 1,
            "label": "Sim"
          }
        ]
      },
      {
        "id": "gds_7",
        "label": "Você se sente feliz na maior parte do tempo?",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 1,
            "label": "Não"
          },
          {
            "value": 0,
            "label": "Sim"
          }
        ]
      },
      {
        "id": "gds_8",
        "label": "Você se sente desamparado(a)?",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Não"
          },
          {
            "value": 1,
            "label": "Sim"
          }
        ]
      },
      {
        "id": "gds_9",
        "label": "Você prefere ficar em casa a sair e fazer coisas novas?",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Não"
          },
          {
            "value": 1,
            "label": "Sim"
          }
        ]
      },
      {
        "id": "gds_10",
        "label": "Você sente que tem mais problemas de memória do que a maioria?",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Não"
          },
          {
            "value": 1,
            "label": "Sim"
          }
        ]
      },
      {
        "id": "gds_11",
        "label": "Você acha que é maravilhoso estar vivo?",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 1,
            "label": "Não"
          },
          {
            "value": 0,
            "label": "Sim"
          }
        ]
      },
      {
        "id": "gds_12",
        "label": "Você se sente inútil do jeito que está agora?",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Não"
          },
          {
            "value": 1,
            "label": "Sim"
          }
        ]
      },
      {
        "id": "gds_13",
        "label": "Você se sente cheio(a) de energia?",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 1,
            "label": "Não"
          },
          {
            "value": 0,
            "label": "Sim"
          }
        ]
      },
      {
        "id": "gds_14",
        "label": "Você sente que sua situação é sem esperança?",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Não"
          },
          {
            "value": 1,
            "label": "Sim"
          }
        ]
      },
      {
        "id": "gds_15",
        "label": "Você acha que a maioria das pessoas está em melhor situação que você?",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 0,
            "label": "Não"
          },
          {
            "value": 1,
            "label": "Sim"
          }
        ]
      }
    ],
    "howTo": [
      "Questionário de 15 respostas Sim / Não — pontuação reversa onde indicado",
      "Instrumento de rastreio, não de diagnóstico. Um resultado elevado requer entrevista clínica e avaliação do contexto; sintomas de risco demandam atenção profissional.",
      "A soma é de 0 a 15. Há questões invertidas em que “Não” vale 1; outras usam “Sim” valendo 1. Versão curta com aplicação contextual em pessoas idosas. Rastreio não determina diagnóstico nem tratamento.",
      "Some os pontos. O resultado não fecha diagnóstico nem autoriza conduta sozinho."
    ],
    "faqs": [],
    "references": [
      "Yesavage J. Geriatric Depression Scale — página original e formas em domínio público. https://web.stanford.edu/~yesavage/GDS.html",
      "Revisão dos instrumentos geriátricos de rastreio de depressão. https://pmc.ncbi.nlm.nih.gov/articles/PMC6199213/"
    ],
    "related": [],
    "publicacao": "candidata",
    "version": "0.1.0-canonical",
    "bands": [
      {
        "min": 0,
        "max": 5,
        "label": "Rastreio sem pontuação elevada",
        "tone": "ok",
        "note": "Pontuação abaixo de 6 não exclui sofrimento ou depressão clínica.",
        "nanda": []
      },
      {
        "min": 6,
        "max": 15,
        "label": "Pontuação elevada no rastreio",
        "tone": "info",
        "note": "Avaliação clínica adicional indicada; não representa diagnóstico por si só.",
        "nanda": []
      }
    ]
  },
  {
    "slug": "fugulin",
    "kind": "escala",
    "category": "Classificação de pacientes",
    "title": "FUGULIN — CLASSIFICAÇÃO DE PACIENTES (12 ITENS)",
    "lead": "Sistema de classificação assistencial · variante de 12 indicadores",
    "nandaMode": "nao-fechar",
    "criteria": [
      {
        "id": "mental",
        "label": "Estado mental e consciência",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 1,
            "label": "Orientado e consciente"
          },
          {
            "value": 2,
            "label": "Desorientação intermitente"
          },
          {
            "value": 3,
            "label": "Episódios de inconsciência"
          },
          {
            "value": 4,
            "label": "Inconsciente"
          }
        ]
      },
      {
        "id": "oxigenacao",
        "label": "Oxigenação",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 1,
            "label": "Sem oxigênio suplementar"
          },
          {
            "value": 2,
            "label": "O₂ por máscara ou cateter intermitente"
          },
          {
            "value": 3,
            "label": "O₂ por máscara ou cateter contínuo"
          },
          {
            "value": 4,
            "label": "Ventilação mecânica"
          }
        ]
      },
      {
        "id": "sinais_vitais",
        "label": "Controle de sinais vitais",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 1,
            "label": "Rotina a cada 6–8 h"
          },
          {
            "value": 2,
            "label": "A cada 4 h"
          },
          {
            "value": 3,
            "label": "A cada 2 h"
          },
          {
            "value": 4,
            "label": "Horário ou mais frequente"
          }
        ]
      },
      {
        "id": "motilidade",
        "label": "Motilidade no leito",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 1,
            "label": "Movimenta-se livremente"
          },
          {
            "value": 2,
            "label": "Limitação discreta de movimentos"
          },
          {
            "value": 3,
            "label": "Dificuldade acentuada para movimentar-se"
          },
          {
            "value": 4,
            "label": "Imobilidade ou dependência total"
          }
        ]
      },
      {
        "id": "deambulacao",
        "label": "Deambulação",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 1,
            "label": "Deambula sem ajuda"
          },
          {
            "value": 2,
            "label": "Deambula com ajuda"
          },
          {
            "value": 3,
            "label": "Deslocamento por cadeira de rodas"
          },
          {
            "value": 4,
            "label": "Restrito ao leito"
          }
        ]
      },
      {
        "id": "alimentacao",
        "label": "Alimentação",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 1,
            "label": "Alimenta-se sozinho"
          },
          {
            "value": 2,
            "label": "Necessita apoio no preparo ou serviço"
          },
          {
            "value": 3,
            "label": "Precisa de ajuda para comer"
          },
          {
            "value": 4,
            "label": "Sonda ou nutrição parenteral"
          }
        ]
      },
      {
        "id": "cuidado_corporal",
        "label": "Higiene e cuidado corporal",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 1,
            "label": "Realiza sozinho"
          },
          {
            "value": 2,
            "label": "Banho com ajuda parcial"
          },
          {
            "value": 3,
            "label": "Banho no leito com ajuda"
          },
          {
            "value": 4,
            "label": "Higiene e banho totalmente dependentes"
          }
        ]
      },
      {
        "id": "eliminacoes",
        "label": "Eliminações",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 1,
            "label": "Usa banheiro sem ajuda"
          },
          {
            "value": 2,
            "label": "Necessita auxílio ou comadre"
          },
          {
            "value": 3,
            "label": "Usa fraldas e cuidados frequentes"
          },
          {
            "value": 4,
            "label": "Sonda ou ostomia com manejo de enfermagem"
          }
        ]
      },
      {
        "id": "terapeutica",
        "label": "Terapêutica",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 1,
            "label": "Via oral, intramuscular ou subcutânea de rotina"
          },
          {
            "value": 2,
            "label": "Terapêutica intravenosa intermitente"
          },
          {
            "value": 3,
            "label": "Infusão intravenosa contínua"
          },
          {
            "value": 4,
            "label": "Drogas vasoativas ou terapia intensiva"
          }
        ]
      },
      {
        "id": "pele",
        "label": "Integridade tecidual",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 1,
            "label": "Pele preservada"
          },
          {
            "value": 2,
            "label": "Lesão localizada sem exsudato"
          },
          {
            "value": 3,
            "label": "Lesão com exsudato moderado"
          },
          {
            "value": 4,
            "label": "Lesão extensa ou exsudato abundante"
          }
        ]
      },
      {
        "id": "curativo",
        "label": "Complexidade dos curativos",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 1,
            "label": "Não necessita de curativo"
          },
          {
            "value": 2,
            "label": "Curativo simples, aproximadamente diário"
          },
          {
            "value": 3,
            "label": "Curativos múltiplos ou de 12 em 12 h"
          },
          {
            "value": 4,
            "label": "Curativo complexo ou muito frequente"
          }
        ]
      },
      {
        "id": "tempo_curativo",
        "label": "Tempo necessário para os curativos",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 1,
            "label": "Sem curativo"
          },
          {
            "value": 2,
            "label": "Até 15 minutos"
          },
          {
            "value": 3,
            "label": "Mais de 15 até 30 minutos"
          },
          {
            "value": 4,
            "label": "Mais de 30 minutos"
          }
        ]
      }
    ],
    "howTo": [
      "Doze indicadores de complexidade assistencial de enfermagem",
      "Material para QA e revisão clínica. Não converter escore automaticamente em quantitativo de profissionais. O SCP adotado deve ser definido, documentado e validado institucionalmente.",
      "Identificar esta variante pelo nome FUGULIN 12 INDICADORES, escore 12–48. As categorias são classificações assistenciais e NÃO correspondem automaticamente a horas de trabalho ou dimensionamento. A adoção do SCP compete à instituição segundo o Parecer Normativo Cofen nº 1/2024.",
      "Some os pontos. O resultado não fecha diagnóstico nem autoriza conduta sozinho."
    ],
    "faqs": [],
    "references": [
      "Cofen — Parecer Normativo 1/2024: sistemas de classificação para dimensionamento. https://www.cofen.gov.br/parecer-normativo-no-1-2024-cofen/",
      "Revista Latino-Americana de Enfermagem (2025): uso da variante Fugulin 12 indicadores. https://revistas.usp.br/rlae/pt_BR/article/view/243034",
      "Classificação assistencial no hospital oncológico: descrição de Fugulin 12 itens. https://new.scielo.br/j/ean/a/PhH8sFcsfx4963YCBkM7khh/?ilang=pt_BR&lang=pt"
    ],
    "related": [],
    "publicacao": "candidata",
    "version": "0.2.0-recovery",
    "bands": [
      {
        "min": 12,
        "max": 17,
        "label": "Cuidados mínimos",
        "tone": "info",
        "note": "Categoria assistencial: confirmar demandas específicas.",
        "nanda": []
      },
      {
        "min": 18,
        "max": 22,
        "label": "Cuidados intermediários",
        "tone": "info",
        "note": "Revisar assistência e dependência por domínio.",
        "nanda": []
      },
      {
        "min": 23,
        "max": 28,
        "label": "Alta dependência",
        "tone": "info",
        "note": "Complexidade assistencial elevada nos domínios assinalados.",
        "nanda": []
      },
      {
        "min": 29,
        "max": 34,
        "label": "Cuidados semi-intensivos",
        "tone": "info",
        "note": "Necessidade de acompanhamento intensificado.",
        "nanda": []
      },
      {
        "min": 35,
        "max": 48,
        "label": "Cuidados intensivos",
        "tone": "info",
        "note": "Confirmar com avaliação multiprofissional e sistema institucional.",
        "nanda": []
      }
    ]
  },
  {
    "slug": "elpo",
    "kind": "escala",
    "category": "Centro cirúrgico",
    "title": "ELPO — LESÃO POR POSICIONAMENTO CIRÚRGICO",
    "lead": "Versão 2 · sete domínios · avaliação perioperatória de adultos",
    "nandaMode": "nao-fechar",
    "criteria": [
      {
        "id": "posicao_cirurgica",
        "label": "Tipo de posição cirúrgica",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 1,
            "label": "Supina"
          },
          {
            "value": 2,
            "label": "Lateral"
          },
          {
            "value": 3,
            "label": "Trendelenburg"
          },
          {
            "value": 4,
            "label": "Prona"
          },
          {
            "value": 5,
            "label": "Litotômica"
          }
        ]
      },
      {
        "id": "tempo_cirurgia",
        "label": "Tempo estimado de cirurgia",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 1,
            "label": "Até 1 hora"
          },
          {
            "value": 2,
            "label": "Mais de 1 até 2 horas"
          },
          {
            "value": 3,
            "label": "Mais de 2 até 4 horas"
          },
          {
            "value": 4,
            "label": "Mais de 4 até 6 horas"
          },
          {
            "value": 5,
            "label": "Mais de 6 horas"
          }
        ]
      },
      {
        "id": "anestesia",
        "label": "Tipo de anestesia",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 1,
            "label": "Local"
          },
          {
            "value": 2,
            "label": "Sedação"
          },
          {
            "value": 3,
            "label": "Regional"
          },
          {
            "value": 4,
            "label": "Geral"
          },
          {
            "value": 5,
            "label": "Geral associada à regional"
          }
        ]
      },
      {
        "id": "superficie",
        "label": "Superfície de suporte da mesa cirúrgica",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 1,
            "label": "Mesa de viscoelástico com coxins viscoelásticos"
          },
          {
            "value": 2,
            "label": "Espuma convencional com coxins viscoelásticos"
          },
          {
            "value": 3,
            "label": "Espuma convencional com coxins de espuma"
          },
          {
            "value": 4,
            "label": "Espuma convencional com coxins de algodão"
          },
          {
            "value": 5,
            "label": "Sem suporte adequado, superfície rígida ou perneiras estreitas"
          }
        ]
      },
      {
        "id": "membros",
        "label": "Posição dos membros",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 1,
            "label": "Posicionamento anatômico"
          },
          {
            "value": 2,
            "label": "Abertura dos membros superiores abaixo de 90°"
          },
          {
            "value": 3,
            "label": "Joelhos e MMII abaixo de 90° ou desalinhamento cervical"
          },
          {
            "value": 4,
            "label": "Joelhos acima de 90° OU abertura de MMII acima de 90°"
          },
          {
            "value": 5,
            "label": "Joelhos acima de 90° E MMII acima de 90° OU MMSS acima de 90°"
          }
        ]
      },
      {
        "id": "comorbidades",
        "label": "Comorbidades (considerar maior risco)",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 1,
            "label": "Ausentes"
          },
          {
            "value": 2,
            "label": "Doença vascular"
          },
          {
            "value": 3,
            "label": "Diabetes mellitus"
          },
          {
            "value": 4,
            "label": "Obesidade ou desnutrição"
          },
          {
            "value": 5,
            "label": "Lesão por pressão, neuropatia prévia ou trombose venosa profunda"
          }
        ]
      },
      {
        "id": "faixa_etaria",
        "label": "Idade do paciente na data da avaliação",
        "help": "Escolha a opção que corresponde à avaliação.",
        "choices": [
          {
            "value": 1,
            "label": "18 a 39 anos"
          },
          {
            "value": 2,
            "label": "40 a 59 anos"
          },
          {
            "value": 3,
            "label": "60 a 69 anos"
          },
          {
            "value": 4,
            "label": "70 a 79 anos"
          },
          {
            "value": 5,
            "label": "Mais de 80 anos; exatamente 80: revisão obrigatória"
          }
        ]
      }
    ],
    "howTo": [
      "Classifique os 7 domínios pela situação de maior risco observada",
      "Piloto para revisão técnica e clínica. Uso em pacientes adultos em posicionamento cirúrgico; não substitui avaliação perioperatória. Verificar autorização de incorporação do instrumento antes de publicar.",
      "ELPO versão 2: sete domínios, 1 a 5 pontos cada. Se houver múltiplas condições no mesmo domínio, registrar a mais grave. Atenção ao limite etário de 80 anos da tabela publicada; não atribuir automaticamente categoria para idade exata de 80. Fonte histórica local continha domínios incorretos e foi substituída.",
      "Some os pontos. O resultado não fecha diagnóstico nem autoriza conduta sozinho."
    ],
    "faqs": [],
    "references": [
      "Lopes et al. Escala ELPO: construção e validação, RLAE 2016. https://www.scielo.br/j/rlae/a/f9gwZMD7VZ9jVCXGVpTfc9C/?lang=pt",
      "Tese USP — construção, versão 2 e domínios da ELPO. https://teses.usp.br/teses/disponiveis/22/22132/tde-21052014-184456/pt-br.html",
      "Pesquisa ELPO em reabilitação: interpretação e ponto de corte. https://www.scielo.br/j/rlae/a/CT7tqpRnkRrjDTbRWkVN8Gj/?lang=pt"
    ],
    "related": [],
    "publicacao": "candidata",
    "version": "0.2.0-recovery",
    "bands": [
      {
        "min": 7,
        "max": 19,
        "label": "Risco menor pela ELPO",
        "tone": "ok",
        "note": "Até 19 pontos; planejar medidas preventivas e revisar fatores individuais.",
        "nanda": []
      },
      {
        "min": 20,
        "max": 35,
        "label": "Risco aumentado pela ELPO",
        "tone": "info",
        "note": "A partir de 20 pontos; reforçar prevenção e avaliação perioperatória.",
        "nanda": []
      }
    ]
  }
];
