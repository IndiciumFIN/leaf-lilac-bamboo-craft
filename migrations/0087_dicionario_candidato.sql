-- Dicionário do que já existe na camada candidato. Não admite, não publica e não copia cláusula.
-- Corrige cinco chaves primárias registradas como id e o ponteiro que negava a chave de locale.

update schema_entity as entity
set purpose = spec.purpose
from (values
  ('career_projection_candidate', 'Projeção de carreira ou juventude. Não admite.'),
  ('career_module_candidate', 'Módulo da projeção. Não admite.'),
  ('career_projection_item_candidate', 'Módulo colocado numa projeção. Não admite.'),
  ('career_role_candidate', 'Papel profissional candidato. Não admite.'),
  ('career_skill_candidate', 'Skill candidata. Não admite.'),
  ('career_role_skill_candidate', 'Skill exigida por um papel. Não admite.'),
  ('career_path_candidate', 'Trilha de carreira candidata. Não admite.'),
  ('career_path_step_candidate', 'Etapa de uma trilha. Não admite.'),
  ('career_opportunity_type_candidate', 'Tipo de oportunidade. Não admite.'),
  ('career_credential_candidate', 'Credencial candidata. Não valida documento.'),
  ('career_document_template_candidate', 'Modelo de documento profissional. Não publica.'),
  ('career_market_signal_candidate', 'Sinal de mercado. Não é dado clínico.'),
  ('career_editorial_candidate', 'Peça editorial de carreira. Não publica.'),
  ('career_reflection_question_candidate', 'Pergunta de reflexão. Não é teste clínico.'),
  ('career_profile_candidate', 'Perfil do participante. Não identifica paciente.'),
  ('career_profile_skill_candidate', 'Nível de skill informado no perfil. Não admite.'),
  ('career_application_candidate', 'Candidatura acompanhada. Não publica vaga.'),
  ('career_profile_credential_candidate', 'Credencial no perfil. Não confirma o documento.'),
  ('career_milestone_candidate', 'Marco informado pelo participante. Não admite.'),
  ('career_learning_resource_type_candidate', 'Tipo de recurso de aprendizagem. Não admite.'),
  ('career_interview_scenario_candidate', 'Cenário de entrevista. Não admite.'),
  ('career_network_capability_candidate', 'Capacidade de rede. Não liga conta.'),
  ('career_jurisdiction_requirement_candidate', 'Requisito por jurisdição. Não copia norma.'),
  ('career_worklife_capability_candidate', 'Capacidade de vida profissional. Não admite.'),
  ('career_youth_activity_candidate', 'Atividade para o público jovem. Não admite.'),
  ('career_source_candidate', 'Fonte candidata de carreira. Não cria norma.'),
  ('career_authority_binding_candidate', 'Ligação da fonte a um campo. Não admite.'),
  ('career_ingestion_run_candidate', 'Passagem de entrada. Não publica.'),
  ('career_opportunity_candidate', 'Oportunidade vinda de fonte. Não publica.'),
  ('career_learning_resource_candidate', 'Recurso de aprendizagem vindo de fonte. Não publica.'),
  ('career_market_observation_candidate', 'Observação de mercado. Não é dado clínico.'),
  ('career_projection_contract_candidate', 'Contrato da projeção e seus portões. Não admite.'),
  ('career_capability_governance_candidate', 'Exigências de governança de uma capacidade. Não cria política.'),
  ('research_project_candidate', 'Projeto de pesquisa candidato. Não aprova comitê.'),
  ('research_instrument_candidate', 'Instrumento de pesquisa candidato. Não admite.'),
  ('research_risk_candidate', 'Risco do projeto de pesquisa. Não é conduta clínica.'),
  ('research_skill_need_candidate', 'Skill pedida pelo projeto. Não admite.'),
  ('participation_process_candidate', 'Processo de participação. Não admite.'),
  ('participation_statement_candidate', 'Enunciado do processo. Não é cláusula.'),
  ('participation_contribution_candidate', 'Contribuição recebida. Não publica.'),
  ('participation_proposal_candidate', 'Proposta recebida. Não vira regra.'),
  ('participation_reaction_candidate', 'Reação a uma proposta. Não admite.'),
  ('participation_consensus_vote_candidate', 'Voto em um enunciado. Não identifica paciente.'),
  ('participation_outcome_candidate', 'Desfecho do processo. Não publica.'),
  ('career_editorial_document_candidate', 'Documento editorial candidato. Não publica.'),
  ('career_editorial_block_candidate', 'Bloco do documento editorial. Não publica.'),
  ('career_source_fragment_candidate', 'Fragmento localizado na fonte. Não copia cláusula.'),
  ('career_atomic_fact_candidate', 'Fato atômico candidato. Não admite.'),
  ('career_claim_candidate', 'Afirmação candidata. Não publica.'),
  ('career_evidence_bundle_candidate', 'Pacote que liga afirmação, fonte e fato. Não admite.'),
  ('career_content_claim_binding_candidate', 'Ligação entre bloco e afirmação. Não publica.'),
  ('career_review_item_candidate', 'Item de revisão humana. Não admite ordem.'),
  ('career_release_gate_candidate', 'Portão de liberação candidato. Não implanta.'),
  ('career_publication_candidate', 'Publicação candidata. Não publica o site.'),
  ('kernel_order_criterion', 'Critério de uma ordem do kernel. A ordem continua sem admissão.')
) as spec(name, purpose)
where entity.name = spec.name
  and entity.layer_id = 'candidato';

update schema_entity
set primary_key = 'path_id + step_order'
where name = 'career_path_step_candidate';

update schema_entity
set primary_key = 'participant_key + skill_id'
where name = 'career_profile_skill_candidate';

update schema_entity
set primary_key = 'participant_key + credential_id'
where name = 'career_profile_credential_candidate';

update schema_entity
set primary_key = 'document_id + block_id'
where name = 'career_editorial_block_candidate';

update schema_entity
set primary_key = 'document_id + block_id + claim_id'
where name = 'career_content_claim_binding_candidate';

update schema_column as column_row
set definition = spec.definition
from (values
  ('career_projection_candidate', 'id', 'Identificador do registro candidato. Não admite.'),
  ('career_projection_candidate', 'route_slug', 'Endereço da projeção candidata. Não publica.'),
  ('career_projection_candidate', 'title', 'Título do candidato. Não publica.'),
  ('career_projection_candidate', 'lead', 'Abertura do candidato. Não publica.'),
  ('career_projection_candidate', 'audience', 'Público declarado do candidato.'),
  ('career_projection_candidate', 'status', 'Estado do candidato. Não admite ordem nem publica.'),
  ('career_module_candidate', 'id', 'Identificador do registro candidato. Não admite.'),
  ('career_module_candidate', 'slug', 'Endereço estável do candidato. Não publica.'),
  ('career_module_candidate', 'title', 'Título do candidato. Não publica.'),
  ('career_module_candidate', 'description', 'Descrição do candidato. Não publica.'),
  ('career_module_candidate', 'object_class', 'Classe do objeto candidato.'),
  ('career_module_candidate', 'audience', 'Público declarado do candidato.'),
  ('career_module_candidate', 'family', 'Família declarada do candidato.'),
  ('career_module_candidate', 'status', 'Estado do candidato. Não admite ordem nem publica.'),
  ('career_module_candidate', 'sort_order', 'Ordem de exibição do candidato.'),
  ('career_projection_item_candidate', 'projection_id', 'Projeção de carreira candidata.'),
  ('career_projection_item_candidate', 'module_id', 'Módulo de carreira candidato.'),
  ('career_projection_item_candidate', 'sort_order', 'Ordem de exibição do candidato.'),
  ('career_role_candidate', 'id', 'Identificador do registro candidato. Não admite.'),
  ('career_role_candidate', 'slug', 'Endereço estável do candidato. Não publica.'),
  ('career_role_candidate', 'title', 'Título do candidato. Não publica.'),
  ('career_role_candidate', 'family', 'Família declarada do candidato.'),
  ('career_role_candidate', 'summary', 'Resumo do candidato. Não publica.'),
  ('career_role_candidate', 'education_path', 'Caminho formativo descrito. Não confirma requisito.'),
  ('career_role_candidate', 'audience', 'Público declarado do candidato.'),
  ('career_role_candidate', 'status', 'Estado do candidato. Não admite ordem nem publica.'),
  ('career_skill_candidate', 'id', 'Identificador do registro candidato. Não admite.'),
  ('career_skill_candidate', 'slug', 'Endereço estável do candidato. Não publica.'),
  ('career_skill_candidate', 'name', 'Nome do candidato.'),
  ('career_skill_candidate', 'category', 'Categoria declarada do candidato.'),
  ('career_skill_candidate', 'description', 'Descrição do candidato. Não publica.'),
  ('career_skill_candidate', 'status', 'Estado do candidato. Não admite ordem nem publica.'),
  ('career_role_skill_candidate', 'role_id', 'Papel de carreira candidato.'),
  ('career_role_skill_candidate', 'skill_id', 'Skill candidata.'),
  ('career_role_skill_candidate', 'required_level', 'Nível exigido no papel, de 1 a 5. Não é avaliação de paciente.'),
  ('career_role_skill_candidate', 'importance', 'Importância declarada da skill no papel.'),
  ('career_path_candidate', 'id', 'Identificador do registro candidato. Não admite.'),
  ('career_path_candidate', 'slug', 'Endereço estável do candidato. Não publica.'),
  ('career_path_candidate', 'title', 'Título do candidato. Não publica.'),
  ('career_path_candidate', 'summary', 'Resumo do candidato. Não publica.'),
  ('career_path_candidate', 'audience', 'Público declarado do candidato.'),
  ('career_path_candidate', 'status', 'Estado do candidato. Não admite ordem nem publica.'),
  ('career_path_step_candidate', 'path_id', 'Trilha de carreira candidata.'),
  ('career_path_step_candidate', 'step_order', 'Ordem da etapa na trilha.'),
  ('career_path_step_candidate', 'title', 'Título do candidato. Não publica.'),
  ('career_path_step_candidate', 'description', 'Descrição do candidato. Não publica.'),
  ('career_path_step_candidate', 'object_type', 'Tipo do objeto apontado pela etapa.'),
  ('career_path_step_candidate', 'object_ref', 'Referência do objeto apontado. Não é chave estrangeira.'),
  ('career_opportunity_type_candidate', 'id', 'Identificador do registro candidato. Não admite.'),
  ('career_opportunity_type_candidate', 'kind', 'Tipo declarado do candidato.'),
  ('career_opportunity_type_candidate', 'title', 'Título do candidato. Não publica.'),
  ('career_opportunity_type_candidate', 'description', 'Descrição do candidato. Não publica.'),
  ('career_opportunity_type_candidate', 'audience', 'Público declarado do candidato.'),
  ('career_opportunity_type_candidate', 'official_source_required', 'Exige fonte oficial antes de seguir. Não cria a fonte.'),
  ('career_opportunity_type_candidate', 'status', 'Estado do candidato. Não admite ordem nem publica.'),
  ('career_credential_candidate', 'id', 'Identificador do registro candidato. Não admite.'),
  ('career_credential_candidate', 'title', 'Título do candidato. Não publica.'),
  ('career_credential_candidate', 'category', 'Categoria declarada do candidato.'),
  ('career_credential_candidate', 'issuer_scope', 'Âmbito de quem emitiria a credencial. Não valida o documento.'),
  ('career_credential_candidate', 'validity_note', 'Nota sobre validade. Não confirma vigência.'),
  ('career_credential_candidate', 'source_required', 'Exige fonte antes de seguir. Não cria a fonte.'),
  ('career_credential_candidate', 'status', 'Estado do candidato. Não admite ordem nem publica.'),
  ('career_document_template_candidate', 'id', 'Identificador do registro candidato. Não admite.'),
  ('career_document_template_candidate', 'kind', 'Tipo declarado do candidato.'),
  ('career_document_template_candidate', 'title', 'Título do candidato. Não publica.'),
  ('career_document_template_candidate', 'description', 'Descrição do candidato. Não publica.'),
  ('career_document_template_candidate', 'audience', 'Público declarado do candidato.'),
  ('career_document_template_candidate', 'status', 'Estado do candidato. Não admite ordem nem publica.'),
  ('career_market_signal_candidate', 'id', 'Identificador do registro candidato. Não admite.'),
  ('career_market_signal_candidate', 'metric_key', 'Chave da métrica de mercado. Não é dado clínico.'),
  ('career_market_signal_candidate', 'label', 'Rótulo do candidato.'),
  ('career_market_signal_candidate', 'role_ref', 'Papel citado, quando houver.'),
  ('career_market_signal_candidate', 'region', 'Região declarada. Não é dado de paciente.'),
  ('career_market_signal_candidate', 'metric_value', 'Valor numérico observado. Não é resultado clínico.'),
  ('career_market_signal_candidate', 'unit', 'Unidade do valor. Não é unidade de exame.'),
  ('career_market_signal_candidate', 'source_ref', 'Referência da fonte em texto. Não é cláusula.'),
  ('career_market_signal_candidate', 'status', 'Estado do candidato. Não admite ordem nem publica.'),
  ('career_editorial_candidate', 'id', 'Identificador do registro candidato. Não admite.'),
  ('career_editorial_candidate', 'slug', 'Endereço estável do candidato. Não publica.'),
  ('career_editorial_candidate', 'title', 'Título do candidato. Não publica.'),
  ('career_editorial_candidate', 'dek', 'Linha de apoio editorial. Não publica.'),
  ('career_editorial_candidate', 'content_type', 'Tipo editorial declarado.'),
  ('career_editorial_candidate', 'campaign_key', 'Chave de campanha, se houver.'),
  ('career_editorial_candidate', 'audience', 'Público declarado do candidato.'),
  ('career_editorial_candidate', 'linked_object_type', 'Tipo do objeto ligado, se houver.'),
  ('career_editorial_candidate', 'linked_object_ref', 'Referência do objeto ligado, se houver.'),
  ('career_editorial_candidate', 'status', 'Estado do candidato. Não admite ordem nem publica.'),
  ('career_editorial_candidate', 'sort_order', 'Ordem de exibição do candidato.'),
  ('career_reflection_question_candidate', 'id', 'Identificador do registro candidato. Não admite.'),
  ('career_reflection_question_candidate', 'prompt', 'Pergunta de reflexão. Não é instrumento clínico.'),
  ('career_reflection_question_candidate', 'dimension', 'Dimensão declarada da reflexão. Não é diagnóstico.'),
  ('career_reflection_question_candidate', 'weight', 'Peso declarado, de 1 a 5.'),
  ('career_reflection_question_candidate', 'audience', 'Público declarado do candidato.'),
  ('career_reflection_question_candidate', 'status', 'Estado do candidato. Não admite ordem nem publica.'),
  ('career_reflection_question_candidate', 'sort_order', 'Ordem de exibição do candidato.'),
  ('career_profile_candidate', 'participant_key', 'Chave do participante candidato. Não identifica paciente.'),
  ('career_profile_candidate', 'target_role_id', 'Papel alvo do perfil candidato.'),
  ('career_profile_candidate', 'stage', 'Estágio declarado do candidato. Não é classificação clínica.'),
  ('career_profile_candidate', 'goal', 'Objetivo declarado. Não é prescrição.'),
  ('career_profile_candidate', 'created_at', 'Quando o candidato foi registrado.'),
  ('career_profile_candidate', 'updated_at', 'Quando o candidato foi alterado.'),
  ('career_profile_skill_candidate', 'participant_key', 'Chave do participante candidato. Não identifica paciente.'),
  ('career_profile_skill_candidate', 'skill_id', 'Skill candidata.'),
  ('career_profile_skill_candidate', 'self_level', 'Nível informado pela própria pessoa, de 0 a 5. Não é avaliação clínica.'),
  ('career_profile_skill_candidate', 'updated_at', 'Quando o candidato foi alterado.'),
  ('career_application_candidate', 'id', 'Identificador do registro candidato. Não admite.'),
  ('career_application_candidate', 'participant_key', 'Chave do participante candidato. Não identifica paciente.'),
  ('career_application_candidate', 'opportunity_kind', 'Tipo de oportunidade em texto.'),
  ('career_application_candidate', 'label', 'Rótulo do candidato.'),
  ('career_application_candidate', 'stage', 'Etapa da candidatura. Não publica vaga.'),
  ('career_application_candidate', 'created_at', 'Quando o candidato foi registrado.'),
  ('career_application_candidate', 'updated_at', 'Quando o candidato foi alterado.'),
  ('career_profile_credential_candidate', 'participant_key', 'Chave do participante candidato. Não identifica paciente.'),
  ('career_profile_credential_candidate', 'credential_id', 'Credencial candidata ligada.'),
  ('career_profile_credential_candidate', 'state', 'Estado da credencial no perfil. Não confirma o documento.'),
  ('career_profile_credential_candidate', 'updated_at', 'Quando o candidato foi alterado.'),
  ('career_milestone_candidate', 'id', 'Identificador do registro candidato. Não admite.'),
  ('career_milestone_candidate', 'participant_key', 'Chave do participante candidato. Não identifica paciente.'),
  ('career_milestone_candidate', 'milestone_type', 'Tipo de marco declarado.'),
  ('career_milestone_candidate', 'label', 'Rótulo do candidato.'),
  ('career_milestone_candidate', 'achieved_on', 'Data informada do marco. Não confirma o fato.'),
  ('career_milestone_candidate', 'created_at', 'Quando o candidato foi registrado.'),
  ('career_learning_resource_type_candidate', 'id', 'Identificador do registro candidato. Não admite.'),
  ('career_learning_resource_type_candidate', 'kind', 'Tipo declarado do candidato.'),
  ('career_learning_resource_type_candidate', 'title', 'Título do candidato. Não publica.'),
  ('career_learning_resource_type_candidate', 'description', 'Descrição do candidato. Não publica.'),
  ('career_learning_resource_type_candidate', 'source_required', 'Exige fonte antes de seguir. Não cria a fonte.'),
  ('career_learning_resource_type_candidate', 'status', 'Estado do candidato. Não admite ordem nem publica.'),
  ('career_interview_scenario_candidate', 'id', 'Identificador do registro candidato. Não admite.'),
  ('career_interview_scenario_candidate', 'kind', 'Tipo declarado do candidato.'),
  ('career_interview_scenario_candidate', 'title', 'Título do candidato. Não publica.'),
  ('career_interview_scenario_candidate', 'description', 'Descrição do candidato. Não publica.'),
  ('career_interview_scenario_candidate', 'audience', 'Público declarado do candidato.'),
  ('career_interview_scenario_candidate', 'status', 'Estado do candidato. Não admite ordem nem publica.'),
  ('career_network_capability_candidate', 'id', 'Identificador do registro candidato. Não admite.'),
  ('career_network_capability_candidate', 'kind', 'Tipo declarado do candidato.'),
  ('career_network_capability_candidate', 'title', 'Título do candidato. Não publica.'),
  ('career_network_capability_candidate', 'description', 'Descrição do candidato. Não publica.'),
  ('career_network_capability_candidate', 'requires_identity', 'A capacidade exige identidade. Não liga conta.'),
  ('career_network_capability_candidate', 'moderation_required', 'Exige moderação humana. Não moderou.'),
  ('career_network_capability_candidate', 'status', 'Estado do candidato. Não admite ordem nem publica.'),
  ('career_jurisdiction_requirement_candidate', 'id', 'Identificador do registro candidato. Não admite.'),
  ('career_jurisdiction_requirement_candidate', 'jurisdiction', 'Jurisdição declarada. Não é texto de norma.'),
  ('career_jurisdiction_requirement_candidate', 'requirement_kind', 'Tipo de requisito declarado.'),
  ('career_jurisdiction_requirement_candidate', 'title', 'Título do candidato. Não publica.'),
  ('career_jurisdiction_requirement_candidate', 'description', 'Descrição do candidato. Não publica.'),
  ('career_jurisdiction_requirement_candidate', 'source_ref', 'Referência da fonte em texto. Não é cláusula.'),
  ('career_jurisdiction_requirement_candidate', 'status', 'Estado do candidato. Não admite ordem nem publica.'),
  ('career_worklife_capability_candidate', 'id', 'Identificador do registro candidato. Não admite.'),
  ('career_worklife_capability_candidate', 'kind', 'Tipo declarado do candidato.'),
  ('career_worklife_capability_candidate', 'title', 'Título do candidato. Não publica.'),
  ('career_worklife_capability_candidate', 'description', 'Descrição do candidato. Não publica.'),
  ('career_worklife_capability_candidate', 'normative_source_required', 'Exige fonte normativa. Não copia a norma.'),
  ('career_worklife_capability_candidate', 'status', 'Estado do candidato. Não admite ordem nem publica.'),
  ('career_youth_activity_candidate', 'id', 'Identificador do registro candidato. Não admite.'),
  ('career_youth_activity_candidate', 'kind', 'Tipo declarado do candidato.'),
  ('career_youth_activity_candidate', 'title', 'Título do candidato. Não publica.'),
  ('career_youth_activity_candidate', 'description', 'Descrição do candidato. Não publica.'),
  ('career_youth_activity_candidate', 'linked_module_ref', 'Módulo ligado, em texto.'),
  ('career_youth_activity_candidate', 'status', 'Estado do candidato. Não admite ordem nem publica.'),
  ('career_source_candidate', 'id', 'Identificador do registro candidato. Não admite.'),
  ('career_source_candidate', 'source_type', 'Tipo da fonte candidata.'),
  ('career_source_candidate', 'title', 'Título do candidato. Não publica.'),
  ('career_source_candidate', 'authority', 'Autoridade indicada na fonte. Não é o texto oficial.'),
  ('career_source_candidate', 'uri', 'Endereço da fonte. Não guarda o arquivo.'),
  ('career_source_candidate', 'pinpoint', 'Localização dentro da fonte. Não é a cláusula.'),
  ('career_source_candidate', 'rights', 'Situação de direito declarada. Não licencia.'),
  ('career_source_candidate', 'jurisdiction', 'Jurisdição declarada. Não é texto de norma.'),
  ('career_source_candidate', 'retrieved_at', 'Data em que a fonte foi vista.'),
  ('career_source_candidate', 'sha256', 'Resumo hexadecimal da fonte. Não é o arquivo.'),
  ('career_source_candidate', 'snapshot_ref', 'Referência do instantâneo. Não guarda o arquivo.'),
  ('career_source_candidate', 'effective_from', 'Início informado. Não confirma vigência.'),
  ('career_source_candidate', 'effective_until', 'Fim informado, se houver.'),
  ('career_source_candidate', 'language', 'Idioma informado da fonte.'),
  ('career_source_candidate', 'status', 'Estado do candidato. Não admite ordem nem publica.'),
  ('career_authority_binding_candidate', 'id', 'Identificador do registro candidato. Não admite.'),
  ('career_authority_binding_candidate', 'field_path', 'Caminho do campo no candidato.'),
  ('career_authority_binding_candidate', 'requirement_id', 'Identificador do requisito candidato.'),
  ('career_authority_binding_candidate', 'source_id', 'Fonte candidata ligada.'),
  ('career_authority_binding_candidate', 'authority_class', 'Classe de autoridade declarada. Não cria norma.'),
  ('career_authority_binding_candidate', 'jurisdiction', 'Jurisdição declarada. Não é texto de norma.'),
  ('career_authority_binding_candidate', 'applicable_from', 'Início informado da ligação.'),
  ('career_authority_binding_candidate', 'applicable_until', 'Fim informado da ligação, se houver.'),
  ('career_authority_binding_candidate', 'decision', 'Decisão registrada no candidato. Não admite ordem do kernel.'),
  ('career_authority_binding_candidate', 'status', 'Estado do candidato. Não admite ordem nem publica.'),
  ('career_authority_binding_candidate', 'claim_id', 'Afirmação candidata, se houver. Sem chave nesta coluna.'),
  ('career_authority_binding_candidate', 'source_ids_text', 'Identificadores de fonte em texto. Não é lista.'),
  ('career_authority_binding_candidate', 'evidence_bundle_ids_text', 'Identificadores de evidência em texto. Não é lista.'),
  ('career_authority_binding_candidate', 'validator_ids_text', 'Identificadores de validador em texto. Não é lista.'),
  ('career_ingestion_run_candidate', 'id', 'Identificador do registro candidato. Não admite.'),
  ('career_ingestion_run_candidate', 'source_id', 'Fonte candidata ligada.'),
  ('career_ingestion_run_candidate', 'object_family', 'Família do objeto importado.'),
  ('career_ingestion_run_candidate', 'started_at', 'Início da passagem.'),
  ('career_ingestion_run_candidate', 'completed_at', 'Fim da passagem, se houver.'),
  ('career_ingestion_run_candidate', 'input_count', 'Quantidade recebida. Não publica.'),
  ('career_ingestion_run_candidate', 'accepted_count', 'Quantidade aceita nesta passagem. Não admite.'),
  ('career_ingestion_run_candidate', 'rejected_count', 'Quantidade recusada nesta passagem.'),
  ('career_ingestion_run_candidate', 'deduplicated_count', 'Quantidade deduplicada nesta passagem.'),
  ('career_ingestion_run_candidate', 'state', 'Estado da passagem de entrada.'),
  ('career_ingestion_run_candidate', 'evidence_ref', 'Referência da evidência em texto.'),
  ('career_opportunity_candidate', 'id', 'Identificador do registro candidato. Não admite.'),
  ('career_opportunity_candidate', 'type_id', 'Tipo de oportunidade candidato.'),
  ('career_opportunity_candidate', 'source_id', 'Fonte candidata ligada.'),
  ('career_opportunity_candidate', 'ingestion_run_id', 'Passagem de entrada, se houver.'),
  ('career_opportunity_candidate', 'title', 'Título do candidato. Não publica.'),
  ('career_opportunity_candidate', 'organization', 'Organização informada. Não confirma o vínculo.'),
  ('career_opportunity_candidate', 'jurisdiction', 'Jurisdição declarada. Não é texto de norma.'),
  ('career_opportunity_candidate', 'location_text', 'Local em texto. Não é dado de paciente.'),
  ('career_opportunity_candidate', 'source_locator', 'Localizador na fonte. Não é a cláusula.'),
  ('career_opportunity_candidate', 'published_at', 'Instante informado na origem. Não publica este site.'),
  ('career_opportunity_candidate', 'expires_at', 'Instante informado de expiração.'),
  ('career_opportunity_candidate', 'dedupe_key', 'Chave de deduplicação do candidato.'),
  ('career_opportunity_candidate', 'status', 'Estado do candidato. Não admite ordem nem publica.'),
  ('career_learning_resource_candidate', 'id', 'Identificador do registro candidato. Não admite.'),
  ('career_learning_resource_candidate', 'resource_type_id', 'Tipo de recurso de aprendizagem candidato.'),
  ('career_learning_resource_candidate', 'source_id', 'Fonte candidata ligada.'),
  ('career_learning_resource_candidate', 'ingestion_run_id', 'Passagem de entrada, se houver.'),
  ('career_learning_resource_candidate', 'title', 'Título do candidato. Não publica.'),
  ('career_learning_resource_candidate', 'provider', 'Provedor informado.'),
  ('career_learning_resource_candidate', 'modality', 'Modalidade informada.'),
  ('career_learning_resource_candidate', 'workload_text', 'Carga informada em texto.'),
  ('career_learning_resource_candidate', 'price_text', 'Preço informado em texto. Não é cobrança.'),
  ('career_learning_resource_candidate', 'jurisdiction', 'Jurisdição declarada. Não é texto de norma.'),
  ('career_learning_resource_candidate', 'source_locator', 'Localizador na fonte. Não é a cláusula.'),
  ('career_learning_resource_candidate', 'available_from', 'Início informado da oferta.'),
  ('career_learning_resource_candidate', 'available_until', 'Fim informado da oferta, se houver.'),
  ('career_learning_resource_candidate', 'dedupe_key', 'Chave de deduplicação do candidato.'),
  ('career_learning_resource_candidate', 'status', 'Estado do candidato. Não admite ordem nem publica.'),
  ('career_market_observation_candidate', 'id', 'Identificador do registro candidato. Não admite.'),
  ('career_market_observation_candidate', 'signal_id', 'Sinal de mercado candidato.'),
  ('career_market_observation_candidate', 'source_id', 'Fonte candidata ligada.'),
  ('career_market_observation_candidate', 'ingestion_run_id', 'Passagem de entrada, se houver.'),
  ('career_market_observation_candidate', 'role_ref', 'Papel citado, quando houver.'),
  ('career_market_observation_candidate', 'jurisdiction', 'Jurisdição declarada. Não é texto de norma.'),
  ('career_market_observation_candidate', 'statistic_kind', 'Tipo de estatística declarada. Não é dado clínico.'),
  ('career_market_observation_candidate', 'observed_value', 'Valor observado na fonte. Não é resultado de exame.'),
  ('career_market_observation_candidate', 'unit', 'Unidade do valor. Não é unidade de exame.'),
  ('career_market_observation_candidate', 'period_start', 'Início do período observado.'),
  ('career_market_observation_candidate', 'period_end', 'Fim do período observado, se houver.'),
  ('career_market_observation_candidate', 'methodology_note', 'Nota de método. Não é protocolo clínico.'),
  ('career_market_observation_candidate', 'status', 'Estado do candidato. Não admite ordem nem publica.'),
  ('career_projection_contract_candidate', 'id', 'Identificador do registro candidato. Não admite.'),
  ('career_projection_contract_candidate', 'projection_kind', 'Tipo da projeção candidata.'),
  ('career_projection_contract_candidate', 'audience', 'Público declarado do candidato.'),
  ('career_projection_contract_candidate', 'source_object_family', 'Família do objeto de origem.'),
  ('career_projection_contract_candidate', 'cko_projection_schema_ref', 'Referência do esquema de projeção. Não altera o dicionário.'),
  ('career_projection_contract_candidate', 'editorial_projection_schema_ref', 'Referência do esquema editorial, se houver.'),
  ('career_projection_contract_candidate', 'allowed_channels', 'Canais permitidos, em texto. Não abre canal.'),
  ('career_projection_contract_candidate', 'sources_gate', 'Portão de fontes do candidato.'),
  ('career_projection_contract_candidate', 'rights_gate', 'Portão de direitos do candidato.'),
  ('career_projection_contract_candidate', 'a11y_gate', 'Portão de acessibilidade do candidato.'),
  ('career_projection_contract_candidate', 'privacy_gate', 'Portão de privacidade do candidato.'),
  ('career_projection_contract_candidate', 'human_gate', 'Portão humano do candidato. Não admite.'),
  ('career_projection_contract_candidate', 'status', 'Estado do candidato. Não admite ordem nem publica.'),
  ('career_capability_governance_candidate', 'id', 'Identificador do registro candidato. Não admite.'),
  ('career_capability_governance_candidate', 'capability_ref', 'Capacidade apontada, em texto.'),
  ('career_capability_governance_candidate', 'identity_required', 'Exige identidade. Não cria conta.'),
  ('career_capability_governance_candidate', 'consent_required', 'Exige consentimento. Não registra paciente.'),
  ('career_capability_governance_candidate', 'moderation_required', 'Exige moderação humana. Não moderou.'),
  ('career_capability_governance_candidate', 'report_required', 'Exige canal de denúncia. Não abre o canal.'),
  ('career_capability_governance_candidate', 'block_required', 'Exige bloqueio. Não bloqueia pessoa.'),
  ('career_capability_governance_candidate', 'audit_log_required', 'Exige trilha. Não grava a trilha aqui.'),
  ('career_capability_governance_candidate', 'retention_policy_required', 'Exige política de retenção. Não cria a política.'),
  ('career_capability_governance_candidate', 'age_policy_required', 'Exige política de idade. Não cria a política.'),
  ('career_capability_governance_candidate', 'status', 'Estado do candidato. Não admite ordem nem publica.'),
  ('research_project_candidate', 'id', 'Identificador do registro candidato. Não admite.'),
  ('research_project_candidate', 'title', 'Título do candidato. Não publica.'),
  ('research_project_candidate', 'summary', 'Resumo do candidato. Não publica.'),
  ('research_project_candidate', 'research_type', 'Tipo de pesquisa declarado.'),
  ('research_project_candidate', 'status', 'Estado do candidato. Não admite ordem nem publica.'),
  ('research_project_candidate', 'ethics_state', 'Estado ético declarado. Não aprova comitê.'),
  ('research_project_candidate', 'created_at', 'Quando o candidato foi registrado.'),
  ('research_project_candidate', 'updated_at', 'Quando o candidato foi alterado.'),
  ('research_instrument_candidate', 'id', 'Identificador do registro candidato. Não admite.'),
  ('research_instrument_candidate', 'project_id', 'Projeto de pesquisa candidato.'),
  ('research_instrument_candidate', 'kind', 'Tipo declarado do candidato.'),
  ('research_instrument_candidate', 'title', 'Título do candidato. Não publica.'),
  ('research_instrument_candidate', 'definition_text', 'Texto de definição do instrumento candidato. Não é cláusula.'),
  ('research_instrument_candidate', 'status', 'Estado do candidato. Não admite ordem nem publica.'),
  ('research_instrument_candidate', 'created_at', 'Quando o candidato foi registrado.'),
  ('research_risk_candidate', 'id', 'Identificador do registro candidato. Não admite.'),
  ('research_risk_candidate', 'project_id', 'Projeto de pesquisa candidato.'),
  ('research_risk_candidate', 'category', 'Categoria declarada do candidato.'),
  ('research_risk_candidate', 'description', 'Descrição do candidato. Não publica.'),
  ('research_risk_candidate', 'likelihood', 'Chance declarada, de 1 a 5.'),
  ('research_risk_candidate', 'impact', 'Impacto declarado, de 1 a 5.'),
  ('research_risk_candidate', 'treatment', 'Tratamento proposto do risco. Não é conduta clínica.'),
  ('research_risk_candidate', 'status', 'Estado do candidato. Não admite ordem nem publica.'),
  ('research_risk_candidate', 'created_at', 'Quando o candidato foi registrado.'),
  ('research_skill_need_candidate', 'id', 'Identificador do registro candidato. Não admite.'),
  ('research_skill_need_candidate', 'project_id', 'Projeto de pesquisa candidato.'),
  ('research_skill_need_candidate', 'skill', 'Skill necessária, em texto.'),
  ('research_skill_need_candidate', 'priority', 'Prioridade declarada.'),
  ('research_skill_need_candidate', 'coverage_state', 'Cobertura declarada da skill.'),
  ('participation_process_candidate', 'id', 'Identificador do registro candidato. Não admite.'),
  ('participation_process_candidate', 'title', 'Título do candidato. Não publica.'),
  ('participation_process_candidate', 'description', 'Descrição do candidato. Não publica.'),
  ('participation_process_candidate', 'status', 'Estado do candidato. Não admite ordem nem publica.'),
  ('participation_process_candidate', 'official', 'Marca se o processo se declara oficial. Não confirma a autoridade.'),
  ('participation_process_candidate', 'normative_ref', 'Referência normativa em texto. Não é a cláusula.'),
  ('participation_process_candidate', 'created_at', 'Quando o candidato foi registrado.'),
  ('participation_statement_candidate', 'id', 'Identificador do registro candidato. Não admite.'),
  ('participation_statement_candidate', 'process_id', 'Processo de participação candidato.'),
  ('participation_statement_candidate', 'statement', 'Enunciado candidato. Não é cláusula.'),
  ('participation_statement_candidate', 'display_order', 'Ordem de exibição.'),
  ('participation_statement_candidate', 'active', 'Se o enunciado candidato está ativo.'),
  ('participation_contribution_candidate', 'id', 'Identificador do registro candidato. Não admite.'),
  ('participation_contribution_candidate', 'process_id', 'Processo de participação candidato.'),
  ('participation_contribution_candidate', 'participant_key', 'Chave do participante candidato. Não identifica paciente.'),
  ('participation_contribution_candidate', 'contribution_kind', 'Tipo de contribuição candidata.'),
  ('participation_contribution_candidate', 'body', 'Texto do candidato. Não publica.'),
  ('participation_contribution_candidate', 'payload_text', 'Carga complementar em texto. Não é lista.'),
  ('participation_contribution_candidate', 'moderation_status', 'Estado de moderação do candidato. Não publica.'),
  ('participation_contribution_candidate', 'created_at', 'Quando o candidato foi registrado.'),
  ('participation_proposal_candidate', 'id', 'Identificador do registro candidato. Não admite.'),
  ('participation_proposal_candidate', 'process_id', 'Processo de participação candidato.'),
  ('participation_proposal_candidate', 'participant_key', 'Chave do participante candidato. Não identifica paciente.'),
  ('participation_proposal_candidate', 'title', 'Título do candidato. Não publica.'),
  ('participation_proposal_candidate', 'problem', 'Problema descrito pelo participante.'),
  ('participation_proposal_candidate', 'proposal', 'Proposta descrita. Não vira regra.'),
  ('participation_proposal_candidate', 'status', 'Estado do candidato. Não admite ordem nem publica.'),
  ('participation_proposal_candidate', 'created_at', 'Quando o candidato foi registrado.'),
  ('participation_reaction_candidate', 'id', 'Identificador do registro candidato. Não admite.'),
  ('participation_reaction_candidate', 'proposal_id', 'Proposta candidata.'),
  ('participation_reaction_candidate', 'participant_key', 'Chave do participante candidato. Não identifica paciente.'),
  ('participation_reaction_candidate', 'reaction', 'Reação declarada: apoio ou preocupação.'),
  ('participation_reaction_candidate', 'created_at', 'Quando o candidato foi registrado.'),
  ('participation_consensus_vote_candidate', 'id', 'Identificador do registro candidato. Não admite.'),
  ('participation_consensus_vote_candidate', 'process_id', 'Processo de participação candidato.'),
  ('participation_consensus_vote_candidate', 'statement_id', 'Enunciado candidato votado.'),
  ('participation_consensus_vote_candidate', 'participant_key', 'Chave do participante candidato. Não identifica paciente.'),
  ('participation_consensus_vote_candidate', 'position', 'Posição do voto: concorda, discorda ou não sabe.'),
  ('participation_consensus_vote_candidate', 'profile', 'Perfil informado na votação. Não identifica paciente.'),
  ('participation_consensus_vote_candidate', 'region', 'Região declarada. Não é dado de paciente.'),
  ('participation_consensus_vote_candidate', 'created_at', 'Quando o candidato foi registrado.'),
  ('participation_outcome_candidate', 'id', 'Identificador do registro candidato. Não admite.'),
  ('participation_outcome_candidate', 'process_id', 'Processo de participação candidato.'),
  ('participation_outcome_candidate', 'title', 'Título do candidato. Não publica.'),
  ('participation_outcome_candidate', 'summary', 'Resumo do candidato. Não publica.'),
  ('participation_outcome_candidate', 'outcome_state', 'Estado do desfecho candidato. Não publica.'),
  ('participation_outcome_candidate', 'official_evidence_ref', 'Referência da evidência oficial, se houver. Não é a norma.'),
  ('participation_outcome_candidate', 'published_at', 'Instante informado na origem. Não publica este site.'),
  ('career_editorial_document_candidate', 'id', 'Identificador do registro candidato. Não admite.'),
  ('career_editorial_document_candidate', 'editorial_id', 'Editorial candidato.'),
  ('career_editorial_document_candidate', 'slug', 'Endereço estável do candidato. Não publica.'),
  ('career_editorial_document_candidate', 'template_id', 'Modelo informado em texto. Sem chave para o modelo editorial.'),
  ('career_editorial_document_candidate', 'locale', 'Idioma do documento candidato. Esta coluna não tem chave.'),
  ('career_editorial_document_candidate', 'audience', 'Público declarado do candidato.'),
  ('career_editorial_document_candidate', 'title', 'Título do candidato. Não publica.'),
  ('career_editorial_document_candidate', 'lead', 'Abertura do candidato. Não publica.'),
  ('career_editorial_document_candidate', 'source_gate', 'Portão de fonte do documento candidato.'),
  ('career_editorial_document_candidate', 'human_gate', 'Portão humano do candidato. Não admite.'),
  ('career_editorial_document_candidate', 'status', 'Estado do candidato. Não admite ordem nem publica.'),
  ('career_editorial_document_candidate', 'updated_at', 'Quando o candidato foi alterado.'),
  ('career_editorial_block_candidate', 'document_id', 'Documento editorial candidato.'),
  ('career_editorial_block_candidate', 'block_order', 'Ordem do bloco.'),
  ('career_editorial_block_candidate', 'block_id', 'Identificador do bloco no documento.'),
  ('career_editorial_block_candidate', 'block_type', 'Tipo do bloco editorial.'),
  ('career_editorial_block_candidate', 'semantic_role', 'Papel semântico declarado do bloco.'),
  ('career_editorial_block_candidate', 'heading', 'Título do bloco, se houver.'),
  ('career_editorial_block_candidate', 'body', 'Texto do candidato. Não publica.'),
  ('career_editorial_block_candidate', 'payload_text', 'Carga complementar em texto. Não é lista.'),
  ('career_editorial_block_candidate', 'source_mode', 'Origem declarada do bloco.'),
  ('career_editorial_block_candidate', 'source_refs_text', 'Referências em texto. Não é lista.'),
  ('career_source_fragment_candidate', 'id', 'Identificador do registro candidato. Não admite.'),
  ('career_source_fragment_candidate', 'source_id', 'Fonte candidata ligada.'),
  ('career_source_fragment_candidate', 'fact_index', 'Índice do fragmento na fonte.'),
  ('career_source_fragment_candidate', 'fragment_kind', 'Tipo do fragmento. Não copia cláusula.'),
  ('career_source_fragment_candidate', 'locator', 'Localizador na fonte. Não é a cláusula.'),
  ('career_source_fragment_candidate', 'locator_status', 'Se o localizador foi conferido.'),
  ('career_source_fragment_candidate', 'normalized_text', 'Texto normalizado do fragmento. Não é citação normativa.'),
  ('career_source_fragment_candidate', 'source_sha256', 'Resumo hexadecimal da fonte.'),
  ('career_source_fragment_candidate', 'fragment_sha256', 'Resumo hexadecimal do fragmento.'),
  ('career_source_fragment_candidate', 'status', 'Estado do candidato. Não admite ordem nem publica.'),
  ('career_atomic_fact_candidate', 'id', 'Identificador do registro candidato. Não admite.'),
  ('career_atomic_fact_candidate', 'fragment_id', 'Fragmento candidato ligado.'),
  ('career_atomic_fact_candidate', 'source_id', 'Fonte candidata ligada.'),
  ('career_atomic_fact_candidate', 'normalized_statement', 'Enunciado normalizado do fato. Não é cláusula.'),
  ('career_atomic_fact_candidate', 'fact_type', 'Tipo do fato candidato.'),
  ('career_atomic_fact_candidate', 'subject_key', 'Sujeito do fato, em chave.'),
  ('career_atomic_fact_candidate', 'predicate_key', 'Predicado do fato, em chave.'),
  ('career_atomic_fact_candidate', 'object_value', 'Valor do objeto do fato.'),
  ('career_atomic_fact_candidate', 'jurisdiction', 'Jurisdição declarada. Não é texto de norma.'),
  ('career_atomic_fact_candidate', 'sha256', 'Resumo hexadecimal da fonte. Não é o arquivo.'),
  ('career_atomic_fact_candidate', 'status', 'Estado do candidato. Não admite ordem nem publica.'),
  ('career_atomic_fact_candidate', 'review', 'Parecer registrado. Não admite ordem do kernel.'),
  ('career_claim_candidate', 'canonical_id', 'Identificador canônico do candidato. Não publica.'),
  ('career_claim_candidate', 'version', 'Versão informada do candidato.'),
  ('career_claim_candidate', 'status', 'Estado do candidato. Não admite ordem nem publica.'),
  ('career_claim_candidate', 'updated_at', 'Quando o candidato foi alterado.'),
  ('career_claim_candidate', 'provenance_refs', 'Referências de proveniência em texto.'),
  ('career_claim_candidate', 'object_id', 'Objeto apontado, em texto.'),
  ('career_claim_candidate', 'assertion_key', 'Chave da afirmação.'),
  ('career_claim_candidate', 'source_ids', 'Fontes em texto. Não é lista.'),
  ('career_claim_candidate', 'binding_ids', 'Ligações em texto. Não é lista.'),
  ('career_claim_candidate', 'jurisdiction', 'Jurisdição declarada. Não é texto de norma.'),
  ('career_claim_candidate', 'applicability', 'Aplicabilidade declarada. Não é regra vigente.'),
  ('career_claim_candidate', 'review', 'Parecer registrado. Não admite ordem do kernel.'),
  ('career_claim_candidate', 'claim_type', 'Tipo da afirmação, se informado.'),
  ('career_claim_candidate', 'confidence_framework_ref', 'Referência de enquadramento. Não é norma.'),
  ('career_claim_candidate', 'atomic_fact_id', 'Fato atômico candidato.'),
  ('career_evidence_bundle_candidate', 'id', 'Identificador do registro candidato. Não admite.'),
  ('career_evidence_bundle_candidate', 'claim_id', 'Afirmação candidata ligada.'),
  ('career_evidence_bundle_candidate', 'source_id', 'Fonte candidata ligada.'),
  ('career_evidence_bundle_candidate', 'fragment_id', 'Fragmento candidato ligado.'),
  ('career_evidence_bundle_candidate', 'atomic_fact_id', 'Fato atômico candidato.'),
  ('career_evidence_bundle_candidate', 'source_sha256', 'Resumo hexadecimal da fonte.'),
  ('career_evidence_bundle_candidate', 'fragment_sha256', 'Resumo hexadecimal do fragmento.'),
  ('career_evidence_bundle_candidate', 'fact_sha256', 'Resumo hexadecimal do fato.'),
  ('career_evidence_bundle_candidate', 'lineage_path', 'Caminho de linhagem em texto.'),
  ('career_evidence_bundle_candidate', 'status', 'Estado do candidato. Não admite ordem nem publica.'),
  ('career_evidence_bundle_candidate', 'review', 'Parecer registrado. Não admite ordem do kernel.'),
  ('career_content_claim_binding_candidate', 'document_id', 'Documento editorial candidato.'),
  ('career_content_claim_binding_candidate', 'block_id', 'Identificador do bloco no documento.'),
  ('career_content_claim_binding_candidate', 'claim_id', 'Afirmação candidata ligada.'),
  ('career_content_claim_binding_candidate', 'binding_role', 'Papel da ligação entre bloco e afirmação.'),
  ('career_content_claim_binding_candidate', 'status', 'Estado do candidato. Não admite ordem nem publica.'),
  ('career_review_item_candidate', 'id', 'Identificador do registro candidato. Não admite.'),
  ('career_review_item_candidate', 'item_kind', 'Tipo do item em revisão.'),
  ('career_review_item_candidate', 'target_id', 'Alvo da revisão, em texto.'),
  ('career_review_item_candidate', 'review_area', 'Área da revisão.'),
  ('career_review_item_candidate', 'decision', 'Decisão registrada no candidato. Não admite ordem do kernel.'),
  ('career_review_item_candidate', 'required_role', 'Papel exigido para revisar. Não cria o papel.'),
  ('career_review_item_candidate', 'evidence_ref', 'Referência da evidência em texto.'),
  ('career_review_item_candidate', 'reviewed_at', 'Quando a revisão foi registrada, se houver.'),
  ('career_review_item_candidate', 'status', 'Estado do candidato. Não admite ordem nem publica.'),
  ('career_release_gate_candidate', 'canonical_id', 'Identificador canônico do candidato. Não publica.'),
  ('career_release_gate_candidate', 'version', 'Versão informada do candidato.'),
  ('career_release_gate_candidate', 'status', 'Estado do candidato. Não admite ordem nem publica.'),
  ('career_release_gate_candidate', 'updated_at', 'Quando o candidato foi alterado.'),
  ('career_release_gate_candidate', 'provenance_refs', 'Referências de proveniência em texto.'),
  ('career_release_gate_candidate', 'upstream_gate_refs', 'Portões anteriores em texto.'),
  ('career_release_gate_candidate', 'required_approvals', 'Aprovações exigidas, em texto. Não admite.'),
  ('career_release_gate_candidate', 'evidence_bundle_refs', 'Pacotes de evidência em texto.'),
  ('career_release_gate_candidate', 'decision', 'Decisão registrada no candidato. Não admite ordem do kernel.'),
  ('career_release_gate_candidate', 'replay_hash', 'Resumo hexadecimal para repetir a leitura. Não executa.'),
  ('career_release_gate_candidate', 'deployment_scope', 'Âmbito informado. Não implanta.'),
  ('career_release_gate_candidate', 'reviewed_by', 'Quem revisou, em texto. Não é o aprovador do kernel.'),
  ('career_publication_candidate', 'canonical_id', 'Identificador canônico do candidato. Não publica.'),
  ('career_publication_candidate', 'version', 'Versão informada do candidato.'),
  ('career_publication_candidate', 'status', 'Estado do candidato. Não admite ordem nem publica.'),
  ('career_publication_candidate', 'updated_at', 'Quando o candidato foi alterado.'),
  ('career_publication_candidate', 'provenance_refs', 'Referências de proveniência em texto.'),
  ('career_publication_candidate', 'artifact_id', 'Artefato apontado, em texto.'),
  ('career_publication_candidate', 'resolved_projection_id', 'Projeção resolvida, em texto.'),
  ('career_publication_candidate', 'required_gate_ids', 'Portões exigidos, em texto.'),
  ('career_publication_candidate', 'gate_results', 'Resultados dos portões, em texto. Não publica.'),
  ('career_publication_candidate', 'human_approval', 'Parecer humano registrado. Não admite ordem do kernel.'),
  ('career_publication_candidate', 'output_sha256', 'Resumo hexadecimal da saída. Não é o arquivo.'),
  ('career_publication_candidate', 'deployment_target', 'Destino informado, se houver. Não implanta.'),
  ('career_publication_candidate', 'release_ref', 'Referência de liberação, em texto. Não publica.'),
  ('kernel_order_criterion', 'order_id', 'Ordem do kernel. A ordem continua sem admissão.'),
  ('kernel_order_criterion', 'position', 'Posição do critério na ordem.'),
  ('kernel_order_criterion', 'criterion', 'Texto do critério da ordem. Não admite a ordem.')
) as spec(entity, name, definition)
where column_row.entity = spec.entity
  and column_row.name = spec.name
  and column_row.definition = 'Coluna física sem definição humana.';

update schema_column
set definition = 'Idioma do caminho. A chave aponta para locale.',
    ref_entity = 'locale',
    syntax = 'id de locale'
where entity = 'intake_file'
  and name = 'locale';

update schema_column as column_row
set ref_entity = parent_name
from (
  select child_table.relname as entity_name,
         child_attribute.attname as column_name,
         min(parent_table.relname) as parent_name
  from pg_constraint as constraint_row
  join pg_class as child_table on child_table.oid = constraint_row.conrelid
  join pg_class as parent_table on parent_table.oid = constraint_row.confrelid
  join pg_namespace as namespace on namespace.oid = child_table.relnamespace
  join pg_attribute as child_attribute
    on child_attribute.attrelid = child_table.oid
   and child_attribute.attnum = any (constraint_row.conkey)
  where constraint_row.contype = 'f'
    and namespace.nspname = 'public'
  group by child_table.relname, child_attribute.attname
  having count(distinct parent_table.oid) = 1
) as only_parent
where column_row.entity = only_parent.entity_name
  and column_row.name = only_parent.column_name
  and column_row.ref_entity is null
  and exists (
    select 1 from schema_entity as entity where entity.name = only_parent.parent_name
  );

do $$
declare
  mute integer;
  wrong_key text;
  locale_gap integer;
  tool_gap integer;
  ref_gap integer;
begin
  select count(*) into mute
  from schema_column
  where definition = 'Coluna física sem definição humana.';

  select string_agg(format('%s=%s', entity.name, entity.primary_key), ', ' order by entity.name)
    into wrong_key
  from schema_entity as entity
  join pg_class as physical on physical.relname = entity.name
  join pg_namespace as namespace on namespace.oid = physical.relnamespace and namespace.nspname = 'public'
  join pg_constraint as key_row on key_row.conrelid = physical.oid and key_row.contype = 'p'
  join lateral (
    select string_agg(attribute.attname, ' + ' order by key_part.ord) as physical_key
    from unnest(key_row.conkey) with ordinality as key_part(attnum, ord)
    join pg_attribute as attribute
      on attribute.attrelid = physical.oid and attribute.attnum = key_part.attnum
  ) as keys on true
  where entity.primary_key is distinct from keys.physical_key;

  select count(*) into locale_gap
  from schema_column
  where entity = 'intake_file'
    and name = 'locale'
    and (ref_entity is distinct from 'locale' or definition like '%Sem chave%');

  select count(*) into tool_gap
  from schema_column
  where entity = 'content_atom'
    and name = 'reference_tool'
    and ref_entity is distinct from 'tool_reference';

  select count(*) into ref_gap
  from schema_column as column_row
  where column_row.ref_entity is null
    and (
      select count(distinct parent_table.oid)
      from pg_constraint as constraint_row
      join pg_class as child_table on child_table.oid = constraint_row.conrelid
      join pg_class as parent_table on parent_table.oid = constraint_row.confrelid
      join pg_namespace as namespace on namespace.oid = child_table.relnamespace
      join pg_attribute as child_attribute
        on child_attribute.attrelid = child_table.oid
       and child_attribute.attnum = any (constraint_row.conkey)
      where constraint_row.contype = 'f'
        and namespace.nspname = 'public'
        and child_table.relname = column_row.entity
        and child_attribute.attname = column_row.name
    ) = 1;

  if mute <> 0 or wrong_key is not null or locale_gap <> 0 or tool_gap <> 0 or ref_gap <> 0 then
    raise exception 'dicionario ainda incompleto. mudas: %. chaves: %. locale: %. referencia: %. ponteiros: %',
      mute, coalesce(wrong_key, ''), locale_gap, tool_gap, ref_gap;
  end if;
end $$;
