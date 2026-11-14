set search_path to tap, public;

select plan(154);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);

      perform set_config('session_replication_role', 'origin', true);
      insert into "account" ("id", "accountId", "providerId", "userId", "updatedAt") values ('pgtap'::text, 'pgtap'::text, 'pgtap'::text, '__ausente_account_userId_fkey-0'::text, timestamptz '2000-01-01');
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "account" violates foreign key constraint "account_userId_fkey"',
  'account.account_userId_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);

      perform set_config('session_replication_role', 'origin', true);
      insert into "activity_event" ("id", "actor_id", "action", "decision_id", "subject", "outcome", "note") values ('pgtap'::text, 'pgtap'::text, 'pgtap'::text, '__ausente_activity_event_decision_id_fkey-0'::text, 'pgtap'::text, 'registrado', 'pgtap'::text);
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "activity_event" violates foreign key constraint "activity_event_decision_id_fkey"',
  'activity_event.activity_event_decision_id_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);

      perform set_config('session_replication_role', 'origin', true);
      insert into "agent_basis" ("agent_id", "position", "citation") values ('__ausente_agent_basis_agent_id_fkey-0'::text, 1, 'pgtap'::text);
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "agent_basis" violates foreign key constraint "agent_basis_agent_id_fkey"',
  'agent_basis.agent_basis_agent_id_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);

      perform set_config('session_replication_role', 'origin', true);
      insert into "agent_check" ("agent_id", "position", "body") values ('__ausente_agent_check_agent_id_fkey-0'::text, 1, 'pgtap'::text);
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "agent_check" violates foreign key constraint "agent_check_agent_id_fkey"',
  'agent_check.agent_check_agent_id_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);

      perform set_config('session_replication_role', 'origin', true);
      insert into "agent_rule" ("agent_id", "position", "body") values ('__ausente_agent_rule_agent_id_fkey-0'::text, 1, 'pgtap'::text);
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "agent_rule" violates foreign key constraint "agent_rule_agent_id_fkey"',
  'agent_rule.agent_rule_agent_id_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);

      perform set_config('session_replication_role', 'origin', true);
      insert into "ai_control" ("id", "principle_id", "title", "statement") values ('pgtap'::text, '__ausente_ai_control_principle_id_fkey-0'::text, 'pgtap'::text, 'pgtap'::text);
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "ai_control" violates foreign key constraint "ai_control_principle_id_fkey"',
  'ai_control.ai_control_principle_id_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);

      perform set_config('session_replication_role', 'origin', true);
      insert into "business_rule" ("id", "from_entity", "statement", "enforcement") values ('pgtap'::text, '__ausente_business_rule_from_entity_fkey-0'::text, 'pgtap'::text, 'pgtap'::text);
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "business_rule" violates foreign key constraint "business_rule_from_entity_fkey"',
  'business_rule.business_rule_from_entity_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);
      insert into "schema_entity" ("name", "layer_id", "primary_key", "purpose") values ('pgtap-business_rule_to_entity_fkey-business_rule_f'::text, 'pgtap-business_rule_to_entity_fkey'::text, 'pgtap-business_rule_to_entity_fkey'::text, 'pgtap-business_rule_to_entity_fkey'::text);
      perform set_config('session_replication_role', 'origin', true);
      insert into "business_rule" ("id", "from_entity", "to_entity", "statement", "enforcement") values ('pgtap'::text, 'pgtap-business_rule_to_entity_fkey-business_rule_f'::text, '__ausente_business_rule_to_entity_fkey-0'::text, 'pgtap'::text, 'pgtap'::text);
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "business_rule" violates foreign key constraint "business_rule_to_entity_fkey"',
  'business_rule.business_rule_to_entity_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);

      perform set_config('session_replication_role', 'origin', true);
      insert into "career_application_candidate" ("id", "participant_key", "opportunity_kind", "label", "stage") values ('pgtap'::text, '__ausente_career_application_candidate_participant-0'::text, 'pgtap'::text, 'pgtap'::text, 'SAVED');
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "career_application_candidate" violates foreign key constraint "career_application_candidate_participant_key_fkey"',
  'career_application_candidate.career_application_candidate_participant_key_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);
      insert into "career_source_candidate" ("id", "source_type", "title", "authority", "uri", "pinpoint", "rights", "jurisdiction", "retrieved_at", "sha256", "snapshot_ref", "status") values ('pgtap-career_atomic_fact_candidate_fragm-career_at'::text, 'OFFICIAL_LAW', 'pgtap-career_atomic_fact_candidate_fragm'::text, 'pgtap-career_atomic_fact_candidate_fragm'::text, 'pgtap-career_atomic_fact_candidate_fragm'::text, 'pgtap-career_atomic_fact_candidate_fragm'::text, 'UNKNOWN', 'pgtap-career_atomic_fact_candidate_fragm'::text, timestamptz '2000-01-01', '07c11fe21a64e4b949466e02d96539ccdd458b7cbf3194edf66263230c666655', 'pgtap-career_atomic_fact_candidate_fragm'::text, 'CANDIDATE');
      perform set_config('session_replication_role', 'origin', true);
      insert into "career_atomic_fact_candidate" ("id", "fragment_id", "source_id", "normalized_statement", "fact_type", "subject_key", "predicate_key", "object_value", "jurisdiction", "sha256", "status", "review") values ('pgtap'::text, '__ausente_career_atomic_fact_candidate_fragment_id-0'::text, 'pgtap-career_atomic_fact_candidate_fragm-career_at'::text, 'pgtap'::text, 'REGULATORY', 'pgtap'::text, 'pgtap'::text, 'pgtap'::text, 'pgtap'::text, '26be292e75e33721b0c94b1ebd959f30874d0573a4b53a1a85715bb263c01440', 'CANDIDATE', 'PENDING');
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "career_atomic_fact_candidate" violates foreign key constraint "career_atomic_fact_candidate_fragment_id_fkey"',
  'career_atomic_fact_candidate.career_atomic_fact_candidate_fragment_id_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);
      insert into "career_source_fragment_candidate" ("id", "source_id", "fact_index", "fragment_kind", "locator", "locator_status", "normalized_text", "source_sha256", "fragment_sha256", "status") values ('pgtap-career_atomic_fact_candidate_sourc-career_at'::text, 'pgtap-career_atomic_fact_candidate_sourc'::text, 1, 'PARAPHRASE_ANCHOR', 'pgtap-career_atomic_fact_candidate_sourc'::text, 'VERIFIED', 'pgtap-career_atomic_fact_candidate_sourc'::text, '893e9d9d562d0ff364258a1453d15ab34167a3219585ab4da08c22bfbad8e9ff', '893e9d9d562d0ff364258a1453d15ab34167a3219585ab4da08c22bfbad8e9ff', 'CANDIDATE');
      perform set_config('session_replication_role', 'origin', true);
      insert into "career_atomic_fact_candidate" ("id", "fragment_id", "source_id", "normalized_statement", "fact_type", "subject_key", "predicate_key", "object_value", "jurisdiction", "sha256", "status", "review") values ('pgtap'::text, 'pgtap-career_atomic_fact_candidate_sourc-career_at'::text, '__ausente_career_atomic_fact_candidate_source_id_f-0'::text, 'pgtap'::text, 'REGULATORY', 'pgtap'::text, 'pgtap'::text, 'pgtap'::text, 'pgtap'::text, '26be292e75e33721b0c94b1ebd959f30874d0573a4b53a1a85715bb263c01440', 'CANDIDATE', 'PENDING');
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "career_atomic_fact_candidate" violates foreign key constraint "career_atomic_fact_candidate_source_id_fkey"',
  'career_atomic_fact_candidate.career_atomic_fact_candidate_source_id_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);

      perform set_config('session_replication_role', 'origin', true);
      insert into "career_authority_binding_candidate" ("id", "field_path", "requirement_id", "source_id", "authority_class", "jurisdiction", "applicable_from", "decision", "status") values ('pgtap'::text, 'pgtap'::text, 'pgtap'::text, '__ausente_career_authority_binding_candidate_sourc-0'::text, 'REGULATORY', 'pgtap'::text, timestamptz '2000-01-01', 'ALLOW', 'CANDIDATE');
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "career_authority_binding_candidate" violates foreign key constraint "career_authority_binding_candidate_source_id_fkey"',
  'career_authority_binding_candidate.career_authority_binding_candidate_source_id_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);

      perform set_config('session_replication_role', 'origin', true);
      insert into "career_claim_candidate" ("canonical_id", "version", "status", "updated_at", "provenance_refs", "object_id", "assertion_key", "source_ids", "binding_ids", "jurisdiction", "applicability", "review", "atomic_fact_id") values ('pgtap'::text, 'pgtap'::text, 'CANDIDATE', timestamptz '2000-01-01', 'pgtap'::text, 'pgtap'::text, 'pgtap'::text, 'pgtap'::text, 'pgtap'::text, 'pgtap'::text, 'pgtap'::text, 'PENDING', '__ausente_career_claim_candidate_atomic_fact_id_fk-0'::text);
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "career_claim_candidate" violates foreign key constraint "career_claim_candidate_atomic_fact_id_fkey"',
  'career_claim_candidate.career_claim_candidate_atomic_fact_id_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);
      insert into "career_editorial_document_candidate" ("id", "editorial_id", "slug", "template_id", "audience", "title", "lead", "source_gate", "human_gate", "status") values ('pgtap-career_content_claim_binding_candi-career_co'::text, 'pgtap-career_content_claim_binding_candi'::text, 'pgtap-career_content_claim_binding_candi'::text, 'pgtap-career_content_claim_binding_candi'::text, 'PROFESSIONAL', 'pgtap-career_content_claim_binding_candi'::text, 'pgtap-career_content_claim_binding_candi'::text, 'PASS', 'PASS', 'DRAFT_CANDIDATE');
      perform set_config('session_replication_role', 'origin', true);
      insert into "career_content_claim_binding_candidate" ("document_id", "block_id", "claim_id", "binding_role", "status") values ('pgtap-career_content_claim_binding_candi-career_co'::text, 'pgtap'::text, '__ausente_career_content_claim_binding_candidate_c-0'::text, 'SUPPORTS', 'CANDIDATE');
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "career_content_claim_binding_candidate" violates foreign key constraint "career_content_claim_binding_candidate_claim_id_fkey"',
  'career_content_claim_binding_candidate.career_content_claim_binding_candidate_claim_id_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);
      insert into "career_claim_candidate" ("canonical_id", "version", "status", "updated_at", "provenance_refs", "object_id", "assertion_key", "source_ids", "binding_ids", "jurisdiction", "applicability", "review", "atomic_fact_id") values ('pgtap-career_content_claim_binding_candi-career_co'::text, 'pgtap-career_content_claim_binding_candi'::text, 'CANDIDATE', timestamptz '2000-01-01', 'pgtap-career_content_claim_binding_candi'::text, 'pgtap-career_content_claim_binding_candi'::text, 'pgtap-career_content_claim_binding_candi'::text, 'pgtap-career_content_claim_binding_candi'::text, 'pgtap-career_content_claim_binding_candi'::text, 'pgtap-career_content_claim_binding_candi'::text, 'pgtap-career_content_claim_binding_candi'::text, 'PENDING', 'pgtap-career_content_claim_binding_candi'::text);
      perform set_config('session_replication_role', 'origin', true);
      insert into "career_content_claim_binding_candidate" ("document_id", "block_id", "claim_id", "binding_role", "status") values ('__ausente_career_content_claim_binding_candidate_d-0'::text, 'pgtap'::text, 'pgtap-career_content_claim_binding_candi-career_co'::text, 'SUPPORTS', 'CANDIDATE');
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "career_content_claim_binding_candidate" violates foreign key constraint "career_content_claim_binding_candidate_document_id_fkey"',
  'career_content_claim_binding_candidate.career_content_claim_binding_candidate_document_id_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);

      perform set_config('session_replication_role', 'origin', true);
      insert into "career_editorial_block_candidate" ("document_id", "block_order", "block_id", "block_type", "semantic_role", "source_mode") values ('__ausente_career_editorial_block_candidate_documen-0'::text, 1, 'pgtap'::text, 'title', 'pgtap'::text, 'canonical_object');
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "career_editorial_block_candidate" violates foreign key constraint "career_editorial_block_candidate_document_id_fkey"',
  'career_editorial_block_candidate.career_editorial_block_candidate_document_id_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);

      perform set_config('session_replication_role', 'origin', true);
      insert into "career_editorial_document_candidate" ("id", "editorial_id", "slug", "template_id", "audience", "title", "lead", "source_gate", "human_gate", "status") values ('pgtap'::text, '__ausente_career_editorial_document_candidate_edit-0'::text, 'pgtap'::text, 'pgtap'::text, 'PROFESSIONAL', 'pgtap'::text, 'pgtap'::text, 'PASS', 'PASS', 'DRAFT_CANDIDATE');
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "career_editorial_document_candidate" violates foreign key constraint "career_editorial_document_candidate_editorial_id_fkey"',
  'career_editorial_document_candidate.career_editorial_document_candidate_editorial_id_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);
      insert into "career_claim_candidate" ("canonical_id", "version", "status", "updated_at", "provenance_refs", "object_id", "assertion_key", "source_ids", "binding_ids", "jurisdiction", "applicability", "review", "atomic_fact_id") values ('pgtap-career_evidence_bundle_candidate_a-career_ev'::text, 'pgtap-career_evidence_bundle_candidate_a'::text, 'CANDIDATE', timestamptz '2000-01-01', 'pgtap-career_evidence_bundle_candidate_a'::text, 'pgtap-career_evidence_bundle_candidate_a'::text, 'pgtap-career_evidence_bundle_candidate_a'::text, 'pgtap-career_evidence_bundle_candidate_a'::text, 'pgtap-career_evidence_bundle_candidate_a'::text, 'pgtap-career_evidence_bundle_candidate_a'::text, 'pgtap-career_evidence_bundle_candidate_a'::text, 'PENDING', 'pgtap-career_evidence_bundle_candidate_a'::text);
      insert into "career_source_fragment_candidate" ("id", "source_id", "fact_index", "fragment_kind", "locator", "locator_status", "normalized_text", "source_sha256", "fragment_sha256", "status") values ('pgtap-career_evidence_bundle_candidate_a-career_ev'::text, 'pgtap-career_evidence_bundle_candidate_a'::text, 1, 'PARAPHRASE_ANCHOR', 'pgtap-career_evidence_bundle_candidate_a'::text, 'VERIFIED', 'pgtap-career_evidence_bundle_candidate_a'::text, '67c1aafe8003f8542122d84e532fb047ed9d5c0497152336a054af5d216d04cf', '67c1aafe8003f8542122d84e532fb047ed9d5c0497152336a054af5d216d04cf', 'CANDIDATE');
      insert into "career_source_candidate" ("id", "source_type", "title", "authority", "uri", "pinpoint", "rights", "jurisdiction", "retrieved_at", "sha256", "snapshot_ref", "status") values ('pgtap-career_evidence_bundle_candidate_a-career_ev'::text, 'OFFICIAL_LAW', 'pgtap-career_evidence_bundle_candidate_a'::text, 'pgtap-career_evidence_bundle_candidate_a'::text, 'pgtap-career_evidence_bundle_candidate_a'::text, 'pgtap-career_evidence_bundle_candidate_a'::text, 'UNKNOWN', 'pgtap-career_evidence_bundle_candidate_a'::text, timestamptz '2000-01-01', '67c1aafe8003f8542122d84e532fb047ed9d5c0497152336a054af5d216d04cf', 'pgtap-career_evidence_bundle_candidate_a'::text, 'CANDIDATE');
      perform set_config('session_replication_role', 'origin', true);
      insert into "career_evidence_bundle_candidate" ("id", "claim_id", "source_id", "fragment_id", "atomic_fact_id", "source_sha256", "fragment_sha256", "fact_sha256", "lineage_path", "status", "review") values ('pgtap'::text, 'pgtap-career_evidence_bundle_candidate_a-career_ev'::text, 'pgtap-career_evidence_bundle_candidate_a-career_ev'::text, 'pgtap-career_evidence_bundle_candidate_a-career_ev'::text, '__ausente_career_evidence_bundle_candidate_atomic_-0'::text, '26be292e75e33721b0c94b1ebd959f30874d0573a4b53a1a85715bb263c01440', '26be292e75e33721b0c94b1ebd959f30874d0573a4b53a1a85715bb263c01440', '26be292e75e33721b0c94b1ebd959f30874d0573a4b53a1a85715bb263c01440', 'pgtap'::text, 'CANDIDATE', 'PENDING');
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "career_evidence_bundle_candidate" violates foreign key constraint "career_evidence_bundle_candidate_atomic_fact_id_fkey"',
  'career_evidence_bundle_candidate.career_evidence_bundle_candidate_atomic_fact_id_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);
      insert into "career_atomic_fact_candidate" ("id", "fragment_id", "source_id", "normalized_statement", "fact_type", "subject_key", "predicate_key", "object_value", "jurisdiction", "sha256", "status", "review") values ('pgtap-career_evidence_bundle_candidate_c-career_ev'::text, 'pgtap-career_evidence_bundle_candidate_c'::text, 'pgtap-career_evidence_bundle_candidate_c'::text, 'pgtap-career_evidence_bundle_candidate_c'::text, 'REGULATORY', 'pgtap-career_evidence_bundle_candidate_c'::text, 'pgtap-career_evidence_bundle_candidate_c'::text, 'pgtap-career_evidence_bundle_candidate_c'::text, 'pgtap-career_evidence_bundle_candidate_c'::text, 'dbae9b85d2f03ed57930d4ca4e0c38ffc723d097975d66bec65c67f266042a1c', 'CANDIDATE', 'PENDING');
      insert into "career_source_fragment_candidate" ("id", "source_id", "fact_index", "fragment_kind", "locator", "locator_status", "normalized_text", "source_sha256", "fragment_sha256", "status") values ('pgtap-career_evidence_bundle_candidate_c-career_ev'::text, 'pgtap-career_evidence_bundle_candidate_c'::text, 1, 'PARAPHRASE_ANCHOR', 'pgtap-career_evidence_bundle_candidate_c'::text, 'VERIFIED', 'pgtap-career_evidence_bundle_candidate_c'::text, 'dbae9b85d2f03ed57930d4ca4e0c38ffc723d097975d66bec65c67f266042a1c', 'dbae9b85d2f03ed57930d4ca4e0c38ffc723d097975d66bec65c67f266042a1c', 'CANDIDATE');
      insert into "career_source_candidate" ("id", "source_type", "title", "authority", "uri", "pinpoint", "rights", "jurisdiction", "retrieved_at", "sha256", "snapshot_ref", "status") values ('pgtap-career_evidence_bundle_candidate_c-career_ev'::text, 'OFFICIAL_LAW', 'pgtap-career_evidence_bundle_candidate_c'::text, 'pgtap-career_evidence_bundle_candidate_c'::text, 'pgtap-career_evidence_bundle_candidate_c'::text, 'pgtap-career_evidence_bundle_candidate_c'::text, 'UNKNOWN', 'pgtap-career_evidence_bundle_candidate_c'::text, timestamptz '2000-01-01', 'dbae9b85d2f03ed57930d4ca4e0c38ffc723d097975d66bec65c67f266042a1c', 'pgtap-career_evidence_bundle_candidate_c'::text, 'CANDIDATE');
      perform set_config('session_replication_role', 'origin', true);
      insert into "career_evidence_bundle_candidate" ("id", "claim_id", "source_id", "fragment_id", "atomic_fact_id", "source_sha256", "fragment_sha256", "fact_sha256", "lineage_path", "status", "review") values ('pgtap'::text, '__ausente_career_evidence_bundle_candidate_claim_i-0'::text, 'pgtap-career_evidence_bundle_candidate_c-career_ev'::text, 'pgtap-career_evidence_bundle_candidate_c-career_ev'::text, 'pgtap-career_evidence_bundle_candidate_c-career_ev'::text, '26be292e75e33721b0c94b1ebd959f30874d0573a4b53a1a85715bb263c01440', '26be292e75e33721b0c94b1ebd959f30874d0573a4b53a1a85715bb263c01440', '26be292e75e33721b0c94b1ebd959f30874d0573a4b53a1a85715bb263c01440', 'pgtap'::text, 'CANDIDATE', 'PENDING');
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "career_evidence_bundle_candidate" violates foreign key constraint "career_evidence_bundle_candidate_claim_id_fkey"',
  'career_evidence_bundle_candidate.career_evidence_bundle_candidate_claim_id_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);
      insert into "career_atomic_fact_candidate" ("id", "fragment_id", "source_id", "normalized_statement", "fact_type", "subject_key", "predicate_key", "object_value", "jurisdiction", "sha256", "status", "review") values ('pgtap-career_evidence_bundle_candidate_f-career_ev'::text, 'pgtap-career_evidence_bundle_candidate_f'::text, 'pgtap-career_evidence_bundle_candidate_f'::text, 'pgtap-career_evidence_bundle_candidate_f'::text, 'REGULATORY', 'pgtap-career_evidence_bundle_candidate_f'::text, 'pgtap-career_evidence_bundle_candidate_f'::text, 'pgtap-career_evidence_bundle_candidate_f'::text, 'pgtap-career_evidence_bundle_candidate_f'::text, '65eb64e448e41d165392bd20621ff01d4d753d720722cb9b7efc0f42b47a5741', 'CANDIDATE', 'PENDING');
      insert into "career_claim_candidate" ("canonical_id", "version", "status", "updated_at", "provenance_refs", "object_id", "assertion_key", "source_ids", "binding_ids", "jurisdiction", "applicability", "review", "atomic_fact_id") values ('pgtap-career_evidence_bundle_candidate_f-career_ev'::text, 'pgtap-career_evidence_bundle_candidate_f'::text, 'CANDIDATE', timestamptz '2000-01-01', 'pgtap-career_evidence_bundle_candidate_f'::text, 'pgtap-career_evidence_bundle_candidate_f'::text, 'pgtap-career_evidence_bundle_candidate_f'::text, 'pgtap-career_evidence_bundle_candidate_f'::text, 'pgtap-career_evidence_bundle_candidate_f'::text, 'pgtap-career_evidence_bundle_candidate_f'::text, 'pgtap-career_evidence_bundle_candidate_f'::text, 'PENDING', 'pgtap-career_evidence_bundle_candidate_f'::text);
      insert into "career_source_candidate" ("id", "source_type", "title", "authority", "uri", "pinpoint", "rights", "jurisdiction", "retrieved_at", "sha256", "snapshot_ref", "status") values ('pgtap-career_evidence_bundle_candidate_f-career_ev'::text, 'OFFICIAL_LAW', 'pgtap-career_evidence_bundle_candidate_f'::text, 'pgtap-career_evidence_bundle_candidate_f'::text, 'pgtap-career_evidence_bundle_candidate_f'::text, 'pgtap-career_evidence_bundle_candidate_f'::text, 'UNKNOWN', 'pgtap-career_evidence_bundle_candidate_f'::text, timestamptz '2000-01-01', '65eb64e448e41d165392bd20621ff01d4d753d720722cb9b7efc0f42b47a5741', 'pgtap-career_evidence_bundle_candidate_f'::text, 'CANDIDATE');
      perform set_config('session_replication_role', 'origin', true);
      insert into "career_evidence_bundle_candidate" ("id", "claim_id", "source_id", "fragment_id", "atomic_fact_id", "source_sha256", "fragment_sha256", "fact_sha256", "lineage_path", "status", "review") values ('pgtap'::text, 'pgtap-career_evidence_bundle_candidate_f-career_ev'::text, 'pgtap-career_evidence_bundle_candidate_f-career_ev'::text, '__ausente_career_evidence_bundle_candidate_fragmen-0'::text, 'pgtap-career_evidence_bundle_candidate_f-career_ev'::text, '26be292e75e33721b0c94b1ebd959f30874d0573a4b53a1a85715bb263c01440', '26be292e75e33721b0c94b1ebd959f30874d0573a4b53a1a85715bb263c01440', '26be292e75e33721b0c94b1ebd959f30874d0573a4b53a1a85715bb263c01440', 'pgtap'::text, 'CANDIDATE', 'PENDING');
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "career_evidence_bundle_candidate" violates foreign key constraint "career_evidence_bundle_candidate_fragment_id_fkey"',
  'career_evidence_bundle_candidate.career_evidence_bundle_candidate_fragment_id_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);
      insert into "career_atomic_fact_candidate" ("id", "fragment_id", "source_id", "normalized_statement", "fact_type", "subject_key", "predicate_key", "object_value", "jurisdiction", "sha256", "status", "review") values ('pgtap-career_evidence_bundle_candidate_s-career_ev'::text, 'pgtap-career_evidence_bundle_candidate_s'::text, 'pgtap-career_evidence_bundle_candidate_s'::text, 'pgtap-career_evidence_bundle_candidate_s'::text, 'REGULATORY', 'pgtap-career_evidence_bundle_candidate_s'::text, 'pgtap-career_evidence_bundle_candidate_s'::text, 'pgtap-career_evidence_bundle_candidate_s'::text, 'pgtap-career_evidence_bundle_candidate_s'::text, 'a02c4a24b124b1b54f9d7e451743ee88f269b25be390bfd5c9df1643b18bb637', 'CANDIDATE', 'PENDING');
      insert into "career_claim_candidate" ("canonical_id", "version", "status", "updated_at", "provenance_refs", "object_id", "assertion_key", "source_ids", "binding_ids", "jurisdiction", "applicability", "review", "atomic_fact_id") values ('pgtap-career_evidence_bundle_candidate_s-career_ev'::text, 'pgtap-career_evidence_bundle_candidate_s'::text, 'CANDIDATE', timestamptz '2000-01-01', 'pgtap-career_evidence_bundle_candidate_s'::text, 'pgtap-career_evidence_bundle_candidate_s'::text, 'pgtap-career_evidence_bundle_candidate_s'::text, 'pgtap-career_evidence_bundle_candidate_s'::text, 'pgtap-career_evidence_bundle_candidate_s'::text, 'pgtap-career_evidence_bundle_candidate_s'::text, 'pgtap-career_evidence_bundle_candidate_s'::text, 'PENDING', 'pgtap-career_evidence_bundle_candidate_s'::text);
      insert into "career_source_fragment_candidate" ("id", "source_id", "fact_index", "fragment_kind", "locator", "locator_status", "normalized_text", "source_sha256", "fragment_sha256", "status") values ('pgtap-career_evidence_bundle_candidate_s-career_ev'::text, 'pgtap-career_evidence_bundle_candidate_s'::text, 1, 'PARAPHRASE_ANCHOR', 'pgtap-career_evidence_bundle_candidate_s'::text, 'VERIFIED', 'pgtap-career_evidence_bundle_candidate_s'::text, 'a02c4a24b124b1b54f9d7e451743ee88f269b25be390bfd5c9df1643b18bb637', 'a02c4a24b124b1b54f9d7e451743ee88f269b25be390bfd5c9df1643b18bb637', 'CANDIDATE');
      perform set_config('session_replication_role', 'origin', true);
      insert into "career_evidence_bundle_candidate" ("id", "claim_id", "source_id", "fragment_id", "atomic_fact_id", "source_sha256", "fragment_sha256", "fact_sha256", "lineage_path", "status", "review") values ('pgtap'::text, 'pgtap-career_evidence_bundle_candidate_s-career_ev'::text, '__ausente_career_evidence_bundle_candidate_source_-0'::text, 'pgtap-career_evidence_bundle_candidate_s-career_ev'::text, 'pgtap-career_evidence_bundle_candidate_s-career_ev'::text, '26be292e75e33721b0c94b1ebd959f30874d0573a4b53a1a85715bb263c01440', '26be292e75e33721b0c94b1ebd959f30874d0573a4b53a1a85715bb263c01440', '26be292e75e33721b0c94b1ebd959f30874d0573a4b53a1a85715bb263c01440', 'pgtap'::text, 'CANDIDATE', 'PENDING');
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "career_evidence_bundle_candidate" violates foreign key constraint "career_evidence_bundle_candidate_source_id_fkey"',
  'career_evidence_bundle_candidate.career_evidence_bundle_candidate_source_id_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);

      perform set_config('session_replication_role', 'origin', true);
      insert into "career_ingestion_run_candidate" ("id", "source_id", "object_family", "state") values ('pgtap'::text, '__ausente_career_ingestion_run_candidate_source_id-0'::text, 'OPPORTUNITY', 'PLANNED');
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "career_ingestion_run_candidate" violates foreign key constraint "career_ingestion_run_candidate_source_id_fkey"',
  'career_ingestion_run_candidate.career_ingestion_run_candidate_source_id_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);
      insert into "career_learning_resource_type_candidate" ("id", "kind", "title", "description", "status") values ('pgtap-career_learning_resource_candidate-career_le'::text, 'pgtap-career_learning_resource_candidate'::text, 'pgtap-career_learning_resource_candidate'::text, 'pgtap-career_learning_resource_candidate'::text, 'CANDIDATE');
      insert into "career_source_candidate" ("id", "source_type", "title", "authority", "uri", "pinpoint", "rights", "jurisdiction", "retrieved_at", "sha256", "snapshot_ref", "status") values ('pgtap-career_learning_resource_candidate-career_le'::text, 'OFFICIAL_LAW', 'pgtap-career_learning_resource_candidate'::text, 'pgtap-career_learning_resource_candidate'::text, 'pgtap-career_learning_resource_candidate'::text, 'pgtap-career_learning_resource_candidate'::text, 'UNKNOWN', 'pgtap-career_learning_resource_candidate'::text, timestamptz '2000-01-01', '452ea539e9671864e73c37cc2206c40b6f0eb540f0cfc96c72607b44f9e0915d', 'pgtap-career_learning_resource_candidate'::text, 'CANDIDATE');
      perform set_config('session_replication_role', 'origin', true);
      insert into "career_learning_resource_candidate" ("id", "resource_type_id", "source_id", "ingestion_run_id", "title", "provider", "jurisdiction", "source_locator", "dedupe_key", "status") values ('pgtap'::text, 'pgtap-career_learning_resource_candidate-career_le'::text, 'pgtap-career_learning_resource_candidate-career_le'::text, '__ausente_career_learning_resource_candidate_inges-0'::text, 'pgtap'::text, 'pgtap'::text, 'pgtap'::text, 'pgtap'::text, 'pgtap'::text, 'SOURCE_QUALIFIED');
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "career_learning_resource_candidate" violates foreign key constraint "career_learning_resource_candidate_ingestion_run_id_fkey"',
  'career_learning_resource_candidate.career_learning_resource_candidate_ingestion_run_id_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);
      insert into "career_source_candidate" ("id", "source_type", "title", "authority", "uri", "pinpoint", "rights", "jurisdiction", "retrieved_at", "sha256", "snapshot_ref", "status") values ('pgtap-career_learning_resource_candidate-career_le'::text, 'OFFICIAL_LAW', 'pgtap-career_learning_resource_candidate'::text, 'pgtap-career_learning_resource_candidate'::text, 'pgtap-career_learning_resource_candidate'::text, 'pgtap-career_learning_resource_candidate'::text, 'UNKNOWN', 'pgtap-career_learning_resource_candidate'::text, timestamptz '2000-01-01', '452ea539e9671864e73c37cc2206c40b6f0eb540f0cfc96c72607b44f9e0915d', 'pgtap-career_learning_resource_candidate'::text, 'CANDIDATE');
      perform set_config('session_replication_role', 'origin', true);
      insert into "career_learning_resource_candidate" ("id", "resource_type_id", "source_id", "title", "provider", "jurisdiction", "source_locator", "dedupe_key", "status") values ('pgtap'::text, '__ausente_career_learning_resource_candidate_resou-0'::text, 'pgtap-career_learning_resource_candidate-career_le'::text, 'pgtap'::text, 'pgtap'::text, 'pgtap'::text, 'pgtap'::text, 'pgtap'::text, 'SOURCE_QUALIFIED');
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "career_learning_resource_candidate" violates foreign key constraint "career_learning_resource_candidate_resource_type_id_fkey"',
  'career_learning_resource_candidate.career_learning_resource_candidate_resource_type_id_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);
      insert into "career_learning_resource_type_candidate" ("id", "kind", "title", "description", "status") values ('pgtap-career_learning_resource_candidate-career_le'::text, 'pgtap-career_learning_resource_candidate'::text, 'pgtap-career_learning_resource_candidate'::text, 'pgtap-career_learning_resource_candidate'::text, 'CANDIDATE');
      perform set_config('session_replication_role', 'origin', true);
      insert into "career_learning_resource_candidate" ("id", "resource_type_id", "source_id", "title", "provider", "jurisdiction", "source_locator", "dedupe_key", "status") values ('pgtap'::text, 'pgtap-career_learning_resource_candidate-career_le'::text, '__ausente_career_learning_resource_candidate_sourc-0'::text, 'pgtap'::text, 'pgtap'::text, 'pgtap'::text, 'pgtap'::text, 'pgtap'::text, 'SOURCE_QUALIFIED');
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "career_learning_resource_candidate" violates foreign key constraint "career_learning_resource_candidate_source_id_fkey"',
  'career_learning_resource_candidate.career_learning_resource_candidate_source_id_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);
      insert into "career_market_signal_candidate" ("id", "metric_key", "label", "status") values ('pgtap-career_market_observation_candidat-career_ma'::text, 'pgtap-career_market_observation_candidat'::text, 'pgtap-career_market_observation_candidat'::text, 'SOURCE_REQUIRED');
      insert into "career_source_candidate" ("id", "source_type", "title", "authority", "uri", "pinpoint", "rights", "jurisdiction", "retrieved_at", "sha256", "snapshot_ref", "status") values ('pgtap-career_market_observation_candidat-career_ma'::text, 'OFFICIAL_LAW', 'pgtap-career_market_observation_candidat'::text, 'pgtap-career_market_observation_candidat'::text, 'pgtap-career_market_observation_candidat'::text, 'pgtap-career_market_observation_candidat'::text, 'UNKNOWN', 'pgtap-career_market_observation_candidat'::text, timestamptz '2000-01-01', 'aee43a66f2ab339dbf786dfeb7fc0e64b10ae18fc6ba836a9ec1f353e2c3fcf5', 'pgtap-career_market_observation_candidat'::text, 'CANDIDATE');
      perform set_config('session_replication_role', 'origin', true);
      insert into "career_market_observation_candidate" ("id", "signal_id", "source_id", "ingestion_run_id", "jurisdiction", "statistic_kind", "observed_value", "unit", "methodology_note", "status") values ('pgtap'::text, 'pgtap-career_market_observation_candidat-career_ma'::text, 'pgtap-career_market_observation_candidat-career_ma'::text, '__ausente_career_market_observation_candidate_inge-0'::text, 'pgtap'::text, 'POSTED_SALARY', 1, 'pgtap'::text, 'pgtap'::text, 'SOURCE_QUALIFIED');
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "career_market_observation_candidate" violates foreign key constraint "career_market_observation_candidate_ingestion_run_id_fkey"',
  'career_market_observation_candidate.career_market_observation_candidate_ingestion_run_id_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);
      insert into "career_market_signal_candidate" ("id", "metric_key", "label", "status") values ('pgtap-career_market_observation_candidat-career_ma'::text, 'pgtap-career_market_observation_candidat'::text, 'pgtap-career_market_observation_candidat'::text, 'SOURCE_REQUIRED');
      insert into "career_source_candidate" ("id", "source_type", "title", "authority", "uri", "pinpoint", "rights", "jurisdiction", "retrieved_at", "sha256", "snapshot_ref", "status") values ('pgtap-career_market_observation_candidat-career_ma'::text, 'OFFICIAL_LAW', 'pgtap-career_market_observation_candidat'::text, 'pgtap-career_market_observation_candidat'::text, 'pgtap-career_market_observation_candidat'::text, 'pgtap-career_market_observation_candidat'::text, 'UNKNOWN', 'pgtap-career_market_observation_candidat'::text, timestamptz '2000-01-01', 'aee43a66f2ab339dbf786dfeb7fc0e64b10ae18fc6ba836a9ec1f353e2c3fcf5', 'pgtap-career_market_observation_candidat'::text, 'CANDIDATE');
      perform set_config('session_replication_role', 'origin', true);
      insert into "career_market_observation_candidate" ("id", "signal_id", "source_id", "role_ref", "jurisdiction", "statistic_kind", "observed_value", "unit", "methodology_note", "status") values ('pgtap'::text, 'pgtap-career_market_observation_candidat-career_ma'::text, 'pgtap-career_market_observation_candidat-career_ma'::text, '__ausente_career_market_observation_candidate_role-0'::text, 'pgtap'::text, 'POSTED_SALARY', 1, 'pgtap'::text, 'pgtap'::text, 'SOURCE_QUALIFIED');
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "career_market_observation_candidate" violates foreign key constraint "career_market_observation_candidate_role_ref_fkey"',
  'career_market_observation_candidate.career_market_observation_candidate_role_ref_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);
      insert into "career_source_candidate" ("id", "source_type", "title", "authority", "uri", "pinpoint", "rights", "jurisdiction", "retrieved_at", "sha256", "snapshot_ref", "status") values ('pgtap-career_market_observation_candidat-career_ma'::text, 'OFFICIAL_LAW', 'pgtap-career_market_observation_candidat'::text, 'pgtap-career_market_observation_candidat'::text, 'pgtap-career_market_observation_candidat'::text, 'pgtap-career_market_observation_candidat'::text, 'UNKNOWN', 'pgtap-career_market_observation_candidat'::text, timestamptz '2000-01-01', 'aee43a66f2ab339dbf786dfeb7fc0e64b10ae18fc6ba836a9ec1f353e2c3fcf5', 'pgtap-career_market_observation_candidat'::text, 'CANDIDATE');
      perform set_config('session_replication_role', 'origin', true);
      insert into "career_market_observation_candidate" ("id", "signal_id", "source_id", "jurisdiction", "statistic_kind", "observed_value", "unit", "methodology_note", "status") values ('pgtap'::text, '__ausente_career_market_observation_candidate_sign-0'::text, 'pgtap-career_market_observation_candidat-career_ma'::text, 'pgtap'::text, 'POSTED_SALARY', 1, 'pgtap'::text, 'pgtap'::text, 'SOURCE_QUALIFIED');
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "career_market_observation_candidate" violates foreign key constraint "career_market_observation_candidate_signal_id_fkey"',
  'career_market_observation_candidate.career_market_observation_candidate_signal_id_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);
      insert into "career_market_signal_candidate" ("id", "metric_key", "label", "status") values ('pgtap-career_market_observation_candidat-career_ma'::text, 'pgtap-career_market_observation_candidat'::text, 'pgtap-career_market_observation_candidat'::text, 'SOURCE_REQUIRED');
      perform set_config('session_replication_role', 'origin', true);
      insert into "career_market_observation_candidate" ("id", "signal_id", "source_id", "jurisdiction", "statistic_kind", "observed_value", "unit", "methodology_note", "status") values ('pgtap'::text, 'pgtap-career_market_observation_candidat-career_ma'::text, '__ausente_career_market_observation_candidate_sour-0'::text, 'pgtap'::text, 'POSTED_SALARY', 1, 'pgtap'::text, 'pgtap'::text, 'SOURCE_QUALIFIED');
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "career_market_observation_candidate" violates foreign key constraint "career_market_observation_candidate_source_id_fkey"',
  'career_market_observation_candidate.career_market_observation_candidate_source_id_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);

      perform set_config('session_replication_role', 'origin', true);
      insert into "career_market_signal_candidate" ("id", "metric_key", "label", "role_ref", "status") values ('pgtap'::text, 'pgtap'::text, 'pgtap'::text, '__ausente_career_market_signal_candidate_role_ref_-0'::text, 'SOURCE_REQUIRED');
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "career_market_signal_candidate" violates foreign key constraint "career_market_signal_candidate_role_ref_fkey"',
  'career_market_signal_candidate.career_market_signal_candidate_role_ref_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);

      perform set_config('session_replication_role', 'origin', true);
      insert into "career_milestone_candidate" ("id", "participant_key", "milestone_type", "label") values ('pgtap'::text, '__ausente_career_milestone_candidate_participant_k-0'::text, 'pgtap'::text, 'pgtap'::text);
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "career_milestone_candidate" violates foreign key constraint "career_milestone_candidate_participant_key_fkey"',
  'career_milestone_candidate.career_milestone_candidate_participant_key_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);
      insert into "career_source_candidate" ("id", "source_type", "title", "authority", "uri", "pinpoint", "rights", "jurisdiction", "retrieved_at", "sha256", "snapshot_ref", "status") values ('pgtap-career_opportunity_candidate_inges-career_op'::text, 'OFFICIAL_LAW', 'pgtap-career_opportunity_candidate_inges'::text, 'pgtap-career_opportunity_candidate_inges'::text, 'pgtap-career_opportunity_candidate_inges'::text, 'pgtap-career_opportunity_candidate_inges'::text, 'UNKNOWN', 'pgtap-career_opportunity_candidate_inges'::text, timestamptz '2000-01-01', 'cbcd7333f3889c8b0fe0c09ab5b41ec4bd50b7af436fb77a01f9d8d21a9cdde9', 'pgtap-career_opportunity_candidate_inges'::text, 'CANDIDATE');
      insert into "career_opportunity_type_candidate" ("id", "kind", "title", "description", "audience", "status") values ('pgtap-career_opportunity_candidate_inges-career_op'::text, 'pgtap-career_opportunity_candidate_inges'::text, 'pgtap-career_opportunity_candidate_inges'::text, 'pgtap-career_opportunity_candidate_inges'::text, 'PROFESSIONAL', 'CANDIDATE');
      perform set_config('session_replication_role', 'origin', true);
      insert into "career_opportunity_candidate" ("id", "type_id", "source_id", "ingestion_run_id", "title", "organization", "jurisdiction", "source_locator", "dedupe_key", "status") values ('pgtap'::text, 'pgtap-career_opportunity_candidate_inges-career_op'::text, 'pgtap-career_opportunity_candidate_inges-career_op'::text, '__ausente_career_opportunity_candidate_ingestion_r-0'::text, 'pgtap'::text, 'pgtap'::text, 'pgtap'::text, 'pgtap'::text, 'pgtap'::text, 'SOURCE_QUALIFIED');
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "career_opportunity_candidate" violates foreign key constraint "career_opportunity_candidate_ingestion_run_id_fkey"',
  'career_opportunity_candidate.career_opportunity_candidate_ingestion_run_id_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);
      insert into "career_opportunity_type_candidate" ("id", "kind", "title", "description", "audience", "status") values ('pgtap-career_opportunity_candidate_sourc-career_op'::text, 'pgtap-career_opportunity_candidate_sourc'::text, 'pgtap-career_opportunity_candidate_sourc'::text, 'pgtap-career_opportunity_candidate_sourc'::text, 'PROFESSIONAL', 'CANDIDATE');
      perform set_config('session_replication_role', 'origin', true);
      insert into "career_opportunity_candidate" ("id", "type_id", "source_id", "title", "organization", "jurisdiction", "source_locator", "dedupe_key", "status") values ('pgtap'::text, 'pgtap-career_opportunity_candidate_sourc-career_op'::text, '__ausente_career_opportunity_candidate_source_id_f-0'::text, 'pgtap'::text, 'pgtap'::text, 'pgtap'::text, 'pgtap'::text, 'pgtap'::text, 'SOURCE_QUALIFIED');
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "career_opportunity_candidate" violates foreign key constraint "career_opportunity_candidate_source_id_fkey"',
  'career_opportunity_candidate.career_opportunity_candidate_source_id_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);
      insert into "career_source_candidate" ("id", "source_type", "title", "authority", "uri", "pinpoint", "rights", "jurisdiction", "retrieved_at", "sha256", "snapshot_ref", "status") values ('pgtap-career_opportunity_candidate_type_-career_op'::text, 'OFFICIAL_LAW', 'pgtap-career_opportunity_candidate_type_'::text, 'pgtap-career_opportunity_candidate_type_'::text, 'pgtap-career_opportunity_candidate_type_'::text, 'pgtap-career_opportunity_candidate_type_'::text, 'UNKNOWN', 'pgtap-career_opportunity_candidate_type_'::text, timestamptz '2000-01-01', 'b5deb6558f8a3e1d09c543064228ac3e2f1c09d6e3259fc8e41171b503e79531', 'pgtap-career_opportunity_candidate_type_'::text, 'CANDIDATE');
      perform set_config('session_replication_role', 'origin', true);
      insert into "career_opportunity_candidate" ("id", "type_id", "source_id", "title", "organization", "jurisdiction", "source_locator", "dedupe_key", "status") values ('pgtap'::text, '__ausente_career_opportunity_candidate_type_id_fke-0'::text, 'pgtap-career_opportunity_candidate_type_-career_op'::text, 'pgtap'::text, 'pgtap'::text, 'pgtap'::text, 'pgtap'::text, 'pgtap'::text, 'SOURCE_QUALIFIED');
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "career_opportunity_candidate" violates foreign key constraint "career_opportunity_candidate_type_id_fkey"',
  'career_opportunity_candidate.career_opportunity_candidate_type_id_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);

      perform set_config('session_replication_role', 'origin', true);
      insert into "career_path_step_candidate" ("path_id", "step_order", "title", "description", "object_type") values ('__ausente_career_path_step_candidate_path_id_fkey-0'::text, 1, 'pgtap'::text, 'pgtap'::text, 'pgtap'::text);
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "career_path_step_candidate" violates foreign key constraint "career_path_step_candidate_path_id_fkey"',
  'career_path_step_candidate.career_path_step_candidate_path_id_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);

      perform set_config('session_replication_role', 'origin', true);
      insert into "career_profile_candidate" ("participant_key", "target_role_id", "stage") values ('pgtap'::text, '__ausente_career_profile_candidate_target_role_id_-0'::text, 'EXPLORING');
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "career_profile_candidate" violates foreign key constraint "career_profile_candidate_target_role_id_fkey"',
  'career_profile_candidate.career_profile_candidate_target_role_id_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);
      insert into "career_profile_candidate" ("participant_key", "stage") values ('pgtap-career_profile_credential_candidat-career_pr'::text, 'EXPLORING');
      perform set_config('session_replication_role', 'origin', true);
      insert into "career_profile_credential_candidate" ("participant_key", "credential_id", "state") values ('pgtap-career_profile_credential_candidat-career_pr'::text, '__ausente_career_profile_credential_candidate_cred-0'::text, 'PLANNED');
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "career_profile_credential_candidate" violates foreign key constraint "career_profile_credential_candidate_credential_id_fkey"',
  'career_profile_credential_candidate.career_profile_credential_candidate_credential_id_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);
      insert into "career_credential_candidate" ("id", "title", "category", "issuer_scope", "validity_note", "status") values ('pgtap-career_profile_credential_candidat-career_pr'::text, 'pgtap-career_profile_credential_candidat'::text, 'pgtap-career_profile_credential_candidat'::text, 'pgtap-career_profile_credential_candidat'::text, 'pgtap-career_profile_credential_candidat'::text, 'CANDIDATE');
      perform set_config('session_replication_role', 'origin', true);
      insert into "career_profile_credential_candidate" ("participant_key", "credential_id", "state") values ('__ausente_career_profile_credential_candidate_part-0'::text, 'pgtap-career_profile_credential_candidat-career_pr'::text, 'PLANNED');
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "career_profile_credential_candidate" violates foreign key constraint "career_profile_credential_candidate_participant_key_fkey"',
  'career_profile_credential_candidate.career_profile_credential_candidate_participant_key_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);
      insert into "career_skill_candidate" ("id", "slug", "name", "category", "description", "status") values ('pgtap-career_profile_skill_candidate_par-career_pr'::text, 'pgtap-career_profile_skill_candidate_par'::text, 'pgtap-career_profile_skill_candidate_par'::text, 'pgtap-career_profile_skill_candidate_par'::text, 'pgtap-career_profile_skill_candidate_par'::text, 'CANDIDATE');
      perform set_config('session_replication_role', 'origin', true);
      insert into "career_profile_skill_candidate" ("participant_key", "skill_id", "self_level") values ('__ausente_career_profile_skill_candidate_participa-0'::text, 'pgtap-career_profile_skill_candidate_par-career_pr'::text, 1);
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "career_profile_skill_candidate" violates foreign key constraint "career_profile_skill_candidate_participant_key_fkey"',
  'career_profile_skill_candidate.career_profile_skill_candidate_participant_key_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);
      insert into "career_profile_candidate" ("participant_key", "stage") values ('pgtap-career_profile_skill_candidate_ski-career_pr'::text, 'EXPLORING');
      perform set_config('session_replication_role', 'origin', true);
      insert into "career_profile_skill_candidate" ("participant_key", "skill_id", "self_level") values ('pgtap-career_profile_skill_candidate_ski-career_pr'::text, '__ausente_career_profile_skill_candidate_skill_id_-0'::text, 1);
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "career_profile_skill_candidate" violates foreign key constraint "career_profile_skill_candidate_skill_id_fkey"',
  'career_profile_skill_candidate.career_profile_skill_candidate_skill_id_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);
      insert into "career_projection_candidate" ("id", "route_slug", "title", "lead", "audience", "status") values ('pgtap-career_projection_item_candidate_m-career_pr'::text, 'pgtap-career_projection_item_candidate_m'::text, 'pgtap-career_projection_item_candidate_m'::text, 'pgtap-career_projection_item_candidate_m'::text, 'PROFESSIONAL', 'CANDIDATE');
      perform set_config('session_replication_role', 'origin', true);
      insert into "career_projection_item_candidate" ("projection_id", "module_id") values ('pgtap-career_projection_item_candidate_m-career_pr'::text, '__ausente_career_projection_item_candidate_module_-0'::text);
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "career_projection_item_candidate" violates foreign key constraint "career_projection_item_candidate_module_id_fkey"',
  'career_projection_item_candidate.career_projection_item_candidate_module_id_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);
      insert into "career_module_candidate" ("id", "slug", "title", "description", "object_class", "audience", "family", "status") values ('pgtap-career_projection_item_candidate_p-career_pr'::text, 'pgtap-career_projection_item_candidate_p'::text, 'pgtap-career_projection_item_candidate_p'::text, 'pgtap-career_projection_item_candidate_p'::text, 'FUNCTIONAL', 'PROFESSIONAL', 'pgtap-career_projection_item_candidate_p'::text, 'CANDIDATE');
      perform set_config('session_replication_role', 'origin', true);
      insert into "career_projection_item_candidate" ("projection_id", "module_id") values ('__ausente_career_projection_item_candidate_project-0'::text, 'pgtap-career_projection_item_candidate_p-career_pr'::text);
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "career_projection_item_candidate" violates foreign key constraint "career_projection_item_candidate_projection_id_fkey"',
  'career_projection_item_candidate.career_projection_item_candidate_projection_id_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);
      insert into "career_skill_candidate" ("id", "slug", "name", "category", "description", "status") values ('pgtap-career_role_skill_candidate_role_i-career_ro'::text, 'pgtap-career_role_skill_candidate_role_i'::text, 'pgtap-career_role_skill_candidate_role_i'::text, 'pgtap-career_role_skill_candidate_role_i'::text, 'pgtap-career_role_skill_candidate_role_i'::text, 'CANDIDATE');
      perform set_config('session_replication_role', 'origin', true);
      insert into "career_role_skill_candidate" ("role_id", "skill_id", "required_level", "importance") values ('__ausente_career_role_skill_candidate_role_id_fkey-0'::text, 'pgtap-career_role_skill_candidate_role_i-career_ro'::text, 1, 'CORE');
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "career_role_skill_candidate" violates foreign key constraint "career_role_skill_candidate_role_id_fkey"',
  'career_role_skill_candidate.career_role_skill_candidate_role_id_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);
      insert into "career_role_candidate" ("id", "slug", "title", "family", "summary", "education_path", "audience", "status") values ('pgtap-career_role_skill_candidate_skill_-career_ro'::text, 'pgtap-career_role_skill_candidate_skill_'::text, 'pgtap-career_role_skill_candidate_skill_'::text, 'pgtap-career_role_skill_candidate_skill_'::text, 'pgtap-career_role_skill_candidate_skill_'::text, 'pgtap-career_role_skill_candidate_skill_'::text, 'PROFESSIONAL', 'CANDIDATE');
      perform set_config('session_replication_role', 'origin', true);
      insert into "career_role_skill_candidate" ("role_id", "skill_id", "required_level", "importance") values ('pgtap-career_role_skill_candidate_skill_-career_ro'::text, '__ausente_career_role_skill_candidate_skill_id_fke-0'::text, 1, 'CORE');
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "career_role_skill_candidate" violates foreign key constraint "career_role_skill_candidate_skill_id_fkey"',
  'career_role_skill_candidate.career_role_skill_candidate_skill_id_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);

      perform set_config('session_replication_role', 'origin', true);
      insert into "career_source_candidate" ("id", "source_type", "title", "authority", "uri", "pinpoint", "rights", "jurisdiction", "retrieved_at", "sha256", "snapshot_ref", "status", "fundamento_id") values ('pgtap'::text, 'OFFICIAL_LAW', 'pgtap'::text, 'pgtap'::text, 'pgtap'::text, 'pgtap'::text, 'UNKNOWN', 'pgtap'::text, timestamptz '2000-01-01', '26be292e75e33721b0c94b1ebd959f30874d0573a4b53a1a85715bb263c01440', 'pgtap'::text, 'CANDIDATE', '__ausente_career_source_candidate_fundamento_id_fk-0'::text);
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "career_source_candidate" violates foreign key constraint "career_source_candidate_fundamento_id_fkey"',
  'career_source_candidate.career_source_candidate_fundamento_id_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);

      perform set_config('session_replication_role', 'origin', true);
      insert into "career_source_fragment_candidate" ("id", "source_id", "fact_index", "fragment_kind", "locator", "locator_status", "normalized_text", "source_sha256", "fragment_sha256", "status") values ('pgtap'::text, '__ausente_career_source_fragment_candidate_source_-0'::text, 1, 'PARAPHRASE_ANCHOR', 'pgtap'::text, 'VERIFIED', 'pgtap'::text, '26be292e75e33721b0c94b1ebd959f30874d0573a4b53a1a85715bb263c01440', '26be292e75e33721b0c94b1ebd959f30874d0573a4b53a1a85715bb263c01440', 'CANDIDATE');
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "career_source_fragment_candidate" violates foreign key constraint "career_source_fragment_candidate_source_id_fkey"',
  'career_source_fragment_candidate.career_source_fragment_candidate_source_id_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);

      perform set_config('session_replication_role', 'origin', true);
      insert into "catalog_item" ("list_id", "position", "title", "text", "dest_id") values ('pgtap'::text, 1, 'pgtap'::text, 'pgtap'::text, '__ausente_catalog_item_dest_fkey-0'::text);
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "catalog_item" violates foreign key constraint "catalog_item_dest_fkey"',
  'catalog_item.catalog_item_dest_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);

      perform set_config('session_replication_role', 'origin', true);
      insert into "chrome_label" ("locale", "group_id", "key", "text") values ('__ausente_chrome_label_locale_fkey-0'::text, 'pgtap'::text, 'pgtap'::text, 'pgtap'::text);
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "chrome_label" violates foreign key constraint "chrome_label_locale_fkey"',
  'chrome_label.chrome_label_locale_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);

      perform set_config('session_replication_role', 'origin', true);
      insert into "cmd_command" ("id", "work_order_id", "mode", "body", "actor_id", "correlation_id", "status", "reason") values ('pgtap'::text, '__ausente_cmd_command_work_order_id_fkey-0'::text, 'consulta', 'pgtap'::text, 'pgtap'::text, 'pgtap'::text, 'aceito', 'pgtap'::text);
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "cmd_command" violates foreign key constraint "cmd_command_work_order_id_fkey"',
  'cmd_command.cmd_command_work_order_id_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);

      perform set_config('session_replication_role', 'origin', true);
      insert into "cmd_event" ("id", "run_id", "seq", "event_type", "detail", "actor_id") values ('pgtap'::text, '__ausente_cmd_event_run_id_fkey-0'::text, 1, 'pgtap'::text, 'pgtap'::text, 'pgtap'::text);
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "cmd_event" violates foreign key constraint "cmd_event_run_id_fkey"',
  'cmd_event.cmd_event_run_id_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);
      insert into "work_order" ("id", "project", "environment", "title", "status") values ('pgtap-cmd_run_command_id_fkey-cmd_run_work_order_i'::text, 'pgtap-cmd_run_command_id_fkey'::text, 'pgtap-cmd_run_command_id_fkey'::text, 'pgtap-cmd_run_command_id_fkey'::text, 'homologada');
      perform set_config('session_replication_role', 'origin', true);
      insert into "cmd_run" ("id", "work_order_id", "command_id", "attempt", "status", "idempotency_key", "actor_id") values ('pgtap'::text, 'pgtap-cmd_run_command_id_fkey-cmd_run_work_order_i'::text, '__ausente_cmd_run_command_id_fkey-0'::text, 1, 'em_curso', 'pgtap'::text, 'pgtap'::text);
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "cmd_run" violates foreign key constraint "cmd_run_command_id_fkey"',
  'cmd_run.cmd_run_command_id_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);
      insert into "cmd_command" ("id", "mode", "body", "actor_id", "correlation_id", "status", "reason") values ('pgtap-cmd_run_work_order_id_fkey-cmd_run_command_i'::text, 'consulta', 'pgtap-cmd_run_work_order_id_fkey'::text, 'pgtap-cmd_run_work_order_id_fkey'::text, 'pgtap-cmd_run_work_order_id_fkey'::text, 'aceito', 'pgtap-cmd_run_work_order_id_fkey'::text);
      perform set_config('session_replication_role', 'origin', true);
      insert into "cmd_run" ("id", "work_order_id", "command_id", "attempt", "status", "idempotency_key", "actor_id") values ('pgtap'::text, '__ausente_cmd_run_work_order_id_fkey-0'::text, 'pgtap-cmd_run_work_order_id_fkey-cmd_run_command_i'::text, 1, 'em_curso', 'pgtap'::text, 'pgtap'::text);
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "cmd_run" violates foreign key constraint "cmd_run_work_order_id_fkey"',
  'cmd_run.cmd_run_work_order_id_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);

      perform set_config('session_replication_role', 'origin', true);
      insert into "community_post" ("id", "user_id", "body") values ('pgtap'::text, '__ausente_community_post_user_fkey-0'::text, 'pgtap'::text);
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "community_post" violates foreign key constraint "community_post_user_fkey"',
  'community_post.community_post_user_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);
      insert into "content_object" ("slug", "kind", "origin_path") values ('pgtap-content_alias_locale_fkey-content_alias_slug'::text, 'biblioteca', 'pgtap-content_alias_locale_fkey'::text);
      perform set_config('session_replication_role', 'origin', true);
      insert into "content_alias" ("path", "slug", "locale", "view") values ('pgtap'::text, 'pgtap-content_alias_locale_fkey-content_alias_slug'::text, '__ausente_content_alias_locale_fkey-0'::text, 'leitura');
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "content_alias" violates foreign key constraint "content_alias_locale_fkey"',
  'content_alias.content_alias_locale_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);
      insert into "locale" ("id", "label") values ('pgtap-content_alias_slug_fkey-content_alias_locale'::text, 'pgtap-content_alias_slug_fkey'::text);
      perform set_config('session_replication_role', 'origin', true);
      insert into "content_alias" ("path", "slug", "locale", "view") values ('pgtap'::text, '__ausente_content_alias_slug_fkey-0'::text, 'pgtap-content_alias_slug_fkey-content_alias_locale'::text, 'leitura');
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "content_alias" violates foreign key constraint "content_alias_slug_fkey"',
  'content_alias.content_alias_slug_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);
      insert into "content_object" ("slug", "kind", "origin_path") values ('pgtap-content_atom_fundamento_id_fkey-content_atom'::text, 'biblioteca', 'pgtap-content_atom_fundamento_id_fkey'::text);
      perform set_config('session_replication_role', 'origin', true);
      insert into "content_atom" ("id", "slug", "origin", "fundamento_id", "statement", "locator") values ('pgtap'::text, 'pgtap-content_atom_fundamento_id_fkey-content_atom'::text, 'normativo', '__ausente_content_atom_fundamento_id_fkey-0'::text, 'pgtap'::text, 'pgtap'::text);
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "content_atom" violates foreign key constraint "content_atom_fundamento_id_fkey"',
  'content_atom.content_atom_fundamento_id_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);
      insert into "content_object" ("slug", "kind", "origin_path") values ('pgtap-content_atom_reference_tool_refere-content_a'::text, 'biblioteca', 'pgtap-content_atom_reference_tool_refere'::text);
      insert into "fundamento" ("id", "name", "domain", "right_name", "priority") values ('pgtap-content_atom_reference_tool_refere-fundamento', 'pgtap-content_atom_reference_tool_refere'::text, 'pgtap-content_atom_reference_tool_refere'::text, 'pgtap-content_atom_reference_tool_refere'::text, 'pgtap-content_atom_reference_tool_refere'::text);
      perform set_config('session_replication_role', 'origin', true);
      insert into "content_atom" ("id", "slug", "origin", "fundamento_id", "reference_tool", "reference_position", "statement", "locator") values ('pgtap'::text, 'pgtap-content_atom_reference_tool_refere-content_a'::text, 'normativo', 'pgtap-content_atom_reference_tool_refere-fundamento', '__ausente_content_atom_reference_tool_reference_po-0'::text, 1, 'pgtap'::text, 'pgtap'::text);
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "content_atom" violates foreign key constraint "content_atom_reference_tool_reference_position_fkey"',
  'content_atom.content_atom_reference_tool_reference_position_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);
      insert into "fundamento" ("id", "name", "domain", "right_name", "priority") values ('pgtap-content_atom_slug_fkey-fundamento', 'pgtap-content_atom_slug_fkey'::text, 'pgtap-content_atom_slug_fkey'::text, 'pgtap-content_atom_slug_fkey'::text, 'pgtap-content_atom_slug_fkey'::text);
      perform set_config('session_replication_role', 'origin', true);
      insert into "content_atom" ("id", "slug", "origin", "fundamento_id", "statement", "locator") values ('pgtap'::text, '__ausente_content_atom_slug_fkey-0'::text, 'normativo', 'pgtap-content_atom_slug_fkey-fundamento', 'pgtap'::text, 'pgtap'::text);
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "content_atom" violates foreign key constraint "content_atom_slug_fkey"',
  'content_atom.content_atom_slug_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);
      insert into "content_object" ("slug", "kind", "origin_path") values ('pgtap-content_atom_template_id_fkey-content_atom_s'::text, 'biblioteca', 'pgtap-content_atom_template_id_fkey'::text);
      perform set_config('session_replication_role', 'origin', true);
      insert into "content_atom" ("id", "slug", "origin", "template_id", "statement", "locator") values ('pgtap'::text, 'pgtap-content_atom_template_id_fkey-content_atom_s'::text, 'editorial', '__ausente_content_atom_template_id_fkey-0'::text, 'pgtap'::text, 'pgtap'::text);
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "content_atom" violates foreign key constraint "content_atom_template_id_fkey"',
  'content_atom.content_atom_template_id_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);
      insert into "content_object" ("slug", "kind", "origin_path") values ('pgtap-content_atom_template_id_line_posi-content_a'::text, 'biblioteca', 'pgtap-content_atom_template_id_line_posi'::text);
      insert into "editorial_template" ("id", "position", "type", "name", "category", "description") values ('pgtap-content_atom_template_id_line_posi-content_a'::text, 1, 'pgtap-content_atom_template_id_line_posi'::text, 'pgtap-content_atom_template_id_line_posi'::text, 'pgtap-content_atom_template_id_line_posi'::text, 'pgtap-content_atom_template_id_line_posi'::text);
      perform set_config('session_replication_role', 'origin', true);
      insert into "content_atom" ("id", "slug", "origin", "template_id", "line_position", "statement", "locator") values ('pgtap'::text, 'pgtap-content_atom_template_id_line_posi-content_a'::text, 'editorial', 'pgtap-content_atom_template_id_line_posi-content_a'::text, 1, 'pgtap'::text, 'pgtap'::text);
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "content_atom" violates foreign key constraint "content_atom_template_id_line_position_fkey"',
  'content_atom.content_atom_template_id_line_position_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);

      perform set_config('session_replication_role', 'origin', true);
      insert into "content_object" ("slug", "kind", "origin_path", "tool_slug") values ('pgtap'::text, 'biblioteca', 'pgtap'::text, '__ausente_content_object_tool_slug_fkey-0'::text);
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "content_object" violates foreign key constraint "content_object_tool_slug_fkey"',
  'content_object.content_object_tool_slug_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);

      perform set_config('session_replication_role', 'origin', true);
      insert into "content_place" ("id", "inst_path") values ('pgtap'::text, '__ausente_content_place_inst_path_fkey-0'::text);
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "content_place" violates foreign key constraint "content_place_inst_path_fkey"',
  'content_place.content_place_inst_path_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);

      perform set_config('session_replication_role', 'origin', true);
      insert into "content_place" ("id", "object_slug") values ('pgtap'::text, '__ausente_content_place_object_fkey-0'::text);
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "content_place" violates foreign key constraint "content_place_object_fkey"',
  'content_place.content_place_object_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);

      perform set_config('session_replication_role', 'origin', true);
      insert into "content_place" ("id", "section_slug") values ('pgtap'::text, '__ausente_content_place_section_slug_fkey-0'::text);
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "content_place" violates foreign key constraint "content_place_section_slug_fkey"',
  'content_place.content_place_section_slug_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);
      insert into "content_object" ("slug", "kind", "origin_path") values ('pgtap-content_text_locale_fkey-content_text_slug_f'::text, 'biblioteca', 'pgtap-content_text_locale_fkey'::text);
      perform set_config('session_replication_role', 'origin', true);
      insert into "content_text" ("slug", "locale", "view", "title", "lead", "status") values ('pgtap-content_text_locale_fkey-content_text_slug_f'::text, '__ausente_content_text_locale_fkey-0'::text, 'leitura', 'pgtap'::text, 'pgtap'::text, 'rascunho');
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "content_text" violates foreign key constraint "content_text_locale_fkey"',
  'content_text.content_text_locale_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);
      insert into "locale" ("id", "label") values ('pgtap-content_text_slug_fkey-content_text_locale_f'::text, 'pgtap-content_text_slug_fkey'::text);
      perform set_config('session_replication_role', 'origin', true);
      insert into "content_text" ("slug", "locale", "view", "title", "lead", "status") values ('__ausente_content_text_slug_fkey-0'::text, 'pgtap-content_text_slug_fkey-content_text_locale_f'::text, 'leitura', 'pgtap'::text, 'pgtap'::text, 'rascunho');
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "content_text" violates foreign key constraint "content_text_slug_fkey"',
  'content_text.content_text_slug_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);

      perform set_config('session_replication_role', 'origin', true);
      insert into "document_version" ("item_id", "version", "title", "body", "status", "reason") values ('__ausente_document_version_item_id_fkey-0'::text, 1, 'pgtap'::text, 'pgtap'::text, 'pgtap'::text, 'pgtap'::text);
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "document_version" violates foreign key constraint "document_version_item_id_fkey"',
  'document_version.document_version_item_id_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);

      perform set_config('session_replication_role', 'origin', true);
      insert into "editorial_line" ("template_id", "position", "path", "text") values ('__ausente_editorial_line_template_id_fkey-0'::text, 1, 'pgtap'::text, 'pgtap'::text);
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "editorial_line" violates foreign key constraint "editorial_line_template_id_fkey"',
  'editorial_line.editorial_line_template_id_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);
      insert into "exam_question_intake" ("id", "exam_id", "remote_id", "position", "prompt", "remote_status") values ('pgtap-exam_key_intake_question_id_correc-exam_key_'::text, 'pgtap-exam_key_intake_question_id_correc'::text, 'pgtap-exam_key_intake_question_id_correc'::text, 1, 'pgtap-exam_key_intake_question_id_correc'::text, 'VALIDATED');
      perform set_config('session_replication_role', 'origin', true);
      insert into "exam_key_intake" ("question_id", "correct_letter", "correct_letter_norm", "key_type") values ('pgtap-exam_key_intake_question_id_correc-exam_key_'::text, 'A', 'A', 'OFFICIAL_DEFINITIVE');
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "exam_key_intake" violates foreign key constraint "exam_key_intake_question_id_correct_letter_norm_fkey"',
  'exam_key_intake.exam_key_intake_question_id_correct_letter_norm_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);
      insert into "exam_option_intake" ("question_id", "position", "letter", "letter_norm", "label") values ('pgtap-exam_key_intake_question_id_fkey'::text, 1, 'A', 'A', 'pgtap-exam_key_intake_question_id_fkey'::text);
      perform set_config('session_replication_role', 'origin', true);
      insert into "exam_key_intake" ("question_id", "correct_letter", "correct_letter_norm", "key_type") values ('__ausente_exam_key_intake_question_id_fkey-0'::text, 'A', 'A', 'OFFICIAL_DEFINITIVE');
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "exam_key_intake" violates foreign key constraint "exam_key_intake_question_id_fkey"',
  'exam_key_intake.exam_key_intake_question_id_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);

      perform set_config('session_replication_role', 'origin', true);
      insert into "exam_option_intake" ("question_id", "position", "letter", "letter_norm", "label") values ('__ausente_exam_option_intake_question_id_fkey-0'::text, 1, 'A', 'A', 'pgtap'::text);
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "exam_option_intake" violates foreign key constraint "exam_option_intake_question_id_fkey"',
  'exam_option_intake.exam_option_intake_question_id_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);

      perform set_config('session_replication_role', 'origin', true);
      insert into "exam_question_intake" ("id", "exam_id", "remote_id", "position", "prompt", "remote_status") values ('pgtap'::text, '__ausente_exam_question_intake_exam_id_fkey-0'::text, 'pgtap'::text, 1, 'pgtap'::text, 'VALIDATED');
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "exam_question_intake" violates foreign key constraint "exam_question_intake_exam_id_fkey"',
  'exam_question_intake.exam_question_intake_exam_id_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);

      perform set_config('session_replication_role', 'origin', true);
      insert into "fundamento" ("id", "name", "domain", "right_name", "priority", "support_id") values ('pgtap'::text, 'pgtap'::text, 'pgtap'::text, 'pgtap'::text, 'pgtap'::text, '__ausente_fundamento_support_id_fkey-0'::text);
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "fundamento" violates foreign key constraint "fundamento_support_id_fkey"',
  'fundamento.fundamento_support_id_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);
      insert into "inst_page" ("path", "title", "kicker", "lead", "kind") values ('pgtap-inst_child_child_fkey-inst_child_path_fkey-0'::text, 'pgtap-inst_child_child_fkey'::text, 'pgtap-inst_child_child_fkey'::text, 'pgtap-inst_child_child_fkey'::text, 'pgtap-inst_child_child_fkey'::text);
      perform set_config('session_replication_role', 'origin', true);
      insert into "inst_child" ("path", "position", "child_path") values ('pgtap-inst_child_child_fkey-inst_child_path_fkey-0'::text, 1, '__ausente_inst_child_child_fkey-0'::text);
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "inst_child" violates foreign key constraint "inst_child_child_fkey"',
  'inst_child.inst_child_child_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);
      insert into "inst_page" ("path", "title", "kicker", "lead", "kind") values ('pgtap-inst_child_path_fkey-inst_child_child_fkey-0'::text, 'pgtap-inst_child_path_fkey'::text, 'pgtap-inst_child_path_fkey'::text, 'pgtap-inst_child_path_fkey'::text, 'pgtap-inst_child_path_fkey'::text);
      perform set_config('session_replication_role', 'origin', true);
      insert into "inst_child" ("path", "position", "child_path") values ('__ausente_inst_child_path_fkey-0'::text, 1, 'pgtap-inst_child_path_fkey-inst_child_child_fkey-0'::text);
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "inst_child" violates foreign key constraint "inst_child_path_fkey"',
  'inst_child.inst_child_path_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);

      perform set_config('session_replication_role', 'origin', true);
      insert into "inst_section" ("path", "position", "title", "body") values ('__ausente_inst_section_path_fkey-0'::text, 1, 'pgtap'::text, 'pgtap'::text);
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "inst_section" violates foreign key constraint "inst_section_path_fkey"',
  'inst_section.inst_section_path_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);
      insert into "locale" ("id", "label") values ('pgtap-intake_file_batch_id_fkey-intake_file_locale'::text, 'pgtap-intake_file_batch_id_fkey'::text);
      perform set_config('session_replication_role', 'origin', true);
      insert into "intake_file" ("batch_id", "path", "locale", "module", "verdict", "reason") values ('__ausente_intake_file_batch_id_fkey-0'::text, 'pgtap'::text, 'pgtap-intake_file_batch_id_fkey-intake_file_locale'::text, 'pgtap'::text, 'admitir', 'pgtap'::text);
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "intake_file" violates foreign key constraint "intake_file_batch_id_fkey"',
  'intake_file.intake_file_batch_id_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);
      insert into "intake_batch" ("id", "source") values ('pgtap-intake_file_locale_fkey-intake_file_batch_id'::text, 'pgtap-intake_file_locale_fkey'::text);
      perform set_config('session_replication_role', 'origin', true);
      insert into "intake_file" ("batch_id", "path", "locale", "module", "verdict", "reason") values ('pgtap-intake_file_locale_fkey-intake_file_batch_id'::text, 'pgtap'::text, '__ausente_intake_file_locale_fkey-0'::text, 'pgtap'::text, 'admitir', 'pgtap'::text);
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "intake_file" violates foreign key constraint "intake_file_locale_fkey"',
  'intake_file.intake_file_locale_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);

      perform set_config('session_replication_role', 'origin', true);
      insert into "kernel_claim" ("id", "atom_id", "title", "statement") values ('pgtap'::text, '__ausente_kernel_claim_atom_id_fkey-0'::text, 'pgtap'::text, 'pgtap'::text);
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "kernel_claim" violates foreign key constraint "kernel_claim_atom_id_fkey"',
  'kernel_claim.kernel_claim_atom_id_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);

      perform set_config('session_replication_role', 'origin', true);
      insert into "kernel_evidence" ("id", "claim_id", "kind", "locator", "note") values ('pgtap'::text, '__ausente_kernel_evidence_claim_id_fkey-0'::text, 'pgtap'::text, 'pgtap'::text, 'pgtap'::text);
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "kernel_evidence" violates foreign key constraint "kernel_evidence_claim_id_fkey"',
  'kernel_evidence.kernel_evidence_claim_id_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);

      perform set_config('session_replication_role', 'origin', true);
      insert into "kernel_manifest" ("order_id") values ('__ausente_kernel_manifest_order_id_fkey-0'::text);
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "kernel_manifest" violates foreign key constraint "kernel_manifest_order_id_fkey"',
  'kernel_manifest.kernel_manifest_order_id_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);

      perform set_config('session_replication_role', 'origin', true);
      insert into "kernel_order" ("id", "title", "approver_id") values ('pgtap'::text, 'pgtap'::text, '__ausente_kernel_order_approver_user_fkey-0'::text);
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "kernel_order" violates foreign key constraint "kernel_order_approver_user_fkey"',
  'kernel_order.kernel_order_approver_user_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);

      perform set_config('session_replication_role', 'origin', true);
      insert into "kernel_order" ("id", "title", "owner_id") values ('pgtap'::text, 'pgtap'::text, '__ausente_kernel_order_owner_user_fkey-0'::text);
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "kernel_order" violates foreign key constraint "kernel_order_owner_user_fkey"',
  'kernel_order.kernel_order_owner_user_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);

      perform set_config('session_replication_role', 'origin', true);
      insert into "kernel_order_criterion" ("order_id", "position", "criterion") values ('__ausente_kernel_order_criterion_order_id_fkey-0'::text, 1, 'pgtap'::text);
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "kernel_order_criterion" violates foreign key constraint "kernel_order_criterion_order_id_fkey"',
  'kernel_order_criterion.kernel_order_criterion_order_id_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);
      insert into "policy_rule" ("package_id", "id", "subject_role", "action", "effect", "reason") values ('pgtap-kernel_order_policy_order_id_fkey-kernel_ord'::text, 'pgtap-kernel_order_policy_order_id_fkey-kernel_ord'::text, 'pgtap-kernel_order_policy_order_id_fkey'::text, 'pgtap-kernel_order_policy_order_id_fkey'::text, 'allow', 'pgtap-kernel_order_policy_order_id_fkey'::text);
      perform set_config('session_replication_role', 'origin', true);
      insert into "kernel_order_policy" ("order_id", "package_id", "rule_id") values ('__ausente_kernel_order_policy_order_id_fkey-0'::text, 'pgtap-kernel_order_policy_order_id_fkey-kernel_ord'::text, 'pgtap-kernel_order_policy_order_id_fkey-kernel_ord'::text);
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "kernel_order_policy" violates foreign key constraint "kernel_order_policy_order_id_fkey"',
  'kernel_order_policy.kernel_order_policy_order_id_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);
      insert into "kernel_order" ("id", "title") values ('pgtap-kernel_order_policy_package_id_rul-kernel_or'::text, 'pgtap-kernel_order_policy_package_id_rul'::text);
      perform set_config('session_replication_role', 'origin', true);
      insert into "kernel_order_policy" ("order_id", "package_id", "rule_id") values ('pgtap-kernel_order_policy_package_id_rul-kernel_or'::text, '__ausente_kernel_order_policy_package_id_rule_id_f-0'::text, '__ausente_kernel_order_policy_package_id_rule_id_f-1'::text);
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "kernel_order_policy" violates foreign key constraint "kernel_order_policy_package_id_rule_id_fkey"',
  'kernel_order_policy.kernel_order_policy_package_id_rule_id_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);

      perform set_config('session_replication_role', 'origin', true);
      insert into "kernel_validator" ("order_id", "id", "passed") values ('__ausente_kernel_validator_order_id_fkey-0'::text, 'pgtap'::text, true);
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "kernel_validator" violates foreign key constraint "kernel_validator_order_id_fkey"',
  'kernel_validator.kernel_validator_order_id_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);

      perform set_config('session_replication_role', 'origin', true);
      insert into "library_item" ("shelf_id", "position", "title") values ('__ausente_library_item_shelf_id_fkey-0'::text, 1, 'pgtap'::text);
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "library_item" violates foreign key constraint "library_item_shelf_id_fkey"',
  'library_item.library_item_shelf_id_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);
      insert into "kernel_order" ("id", "title") values ('pgtap-master_binding_fundamento_id_fkey-master_bin'::text, 'pgtap-master_binding_fundamento_id_fkey'::text);
      perform set_config('session_replication_role', 'origin', true);
      insert into "master_binding" ("order_id", "fundamento_id", "opa") values ('pgtap-master_binding_fundamento_id_fkey-master_bin'::text, '__ausente_master_binding_fundamento_id_fkey-0'::text, 'ausente');
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "master_binding" violates foreign key constraint "master_binding_fundamento_id_fkey"',
  'master_binding.master_binding_fundamento_id_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);
      insert into "fundamento" ("id", "name", "domain", "right_name", "priority") values ('pgtap-master_binding_order_id_fkey-master_binding_'::text, 'pgtap-master_binding_order_id_fkey'::text, 'pgtap-master_binding_order_id_fkey'::text, 'pgtap-master_binding_order_id_fkey'::text, 'pgtap-master_binding_order_id_fkey'::text);
      perform set_config('session_replication_role', 'origin', true);
      insert into "master_binding" ("order_id", "fundamento_id", "opa") values ('__ausente_master_binding_order_id_fkey-0'::text, 'pgtap-master_binding_order_id_fkey-master_binding_'::text, 'ausente');
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "master_binding" violates foreign key constraint "master_binding_order_id_fkey"',
  'master_binding.master_binding_order_id_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);
      insert into "media_asset" ("path", "kind", "note") values ('pgtap-media_alt_locale_fkey-media_alt_path_fkey-0'::text, 'pgtap-media_alt_locale_fkey'::text, 'pgtap-media_alt_locale_fkey'::text);
      perform set_config('session_replication_role', 'origin', true);
      insert into "media_alt" ("path", "locale", "text") values ('pgtap-media_alt_locale_fkey-media_alt_path_fkey-0'::text, '__ausente_media_alt_locale_fkey-0'::text, 'pgtap'::text);
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "media_alt" violates foreign key constraint "media_alt_locale_fkey"',
  'media_alt.media_alt_locale_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);
      insert into "locale" ("id", "label") values ('pgtap-media_alt_path_fkey-media_alt_locale_fkey-0'::text, 'pgtap-media_alt_path_fkey'::text);
      perform set_config('session_replication_role', 'origin', true);
      insert into "media_alt" ("path", "locale", "text") values ('__ausente_media_alt_path_fkey-0'::text, 'pgtap-media_alt_path_fkey-media_alt_locale_fkey-0'::text, 'pgtap'::text);
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "media_alt" violates foreign key constraint "media_alt_path_fkey"',
  'media_alt.media_alt_path_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);

      perform set_config('session_replication_role', 'origin', true);
      insert into "member" ("user_id", "role") values ('__ausente_member_user_fkey-0'::text, 'subscriber');
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "member" violates foreign key constraint "member_user_fkey"',
  'member.member_user_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);
      insert into "schema_column" ("entity", "name", "data_type", "required", "key_part", "definition", "syntax") values ('pgtap-metadata_element_domain_id_fkey-metadata_ele'::text, 'pgtap-metadata_element_domain_id_fkey-metadata_ele'::text, 'pgtap-metadata_element_domain_id_fkey'::text, true, true, 'pgtap-metadata_element_domain_id_fkey'::text, 'pgtap-metadata_element_domain_id_fkey'::text);
      insert into "governance_item" ("id", "kind", "title", "body") values ('pgtap-metadata_element_domain_id_fkey-metadata_ele'::text, 'objetivo', 'pgtap-metadata_element_domain_id_fkey'::text, 'pgtap-metadata_element_domain_id_fkey'::text);
      perform set_config('session_replication_role', 'origin', true);
      insert into "metadata_element" ("entity", "name", "domain_id", "support_id") values ('pgtap-metadata_element_domain_id_fkey-metadata_ele'::text, 'pgtap-metadata_element_domain_id_fkey-metadata_ele'::text, '__ausente_metadata_element_domain_id_fkey-0'::text, 'pgtap-metadata_element_domain_id_fkey-metadata_ele'::text);
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "metadata_element" violates foreign key constraint "metadata_element_domain_id_fkey"',
  'metadata_element.metadata_element_domain_id_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);
      insert into "governance_item" ("id", "kind", "title", "body") values ('pgtap-metadata_element_entity_name_fkey-metadata_e'::text, 'objetivo', 'pgtap-metadata_element_entity_name_fkey'::text, 'pgtap-metadata_element_entity_name_fkey'::text);
      perform set_config('session_replication_role', 'origin', true);
      insert into "metadata_element" ("entity", "name", "support_id") values ('__ausente_metadata_element_entity_name_fkey-0'::text, '__ausente_metadata_element_entity_name_fkey-1'::text, 'pgtap-metadata_element_entity_name_fkey-metadata_e'::text);
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "metadata_element" violates foreign key constraint "metadata_element_entity_name_fkey"',
  'metadata_element.metadata_element_entity_name_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);
      insert into "schema_column" ("entity", "name", "data_type", "required", "key_part", "definition", "syntax") values ('pgtap-metadata_element_specification_id_-metadata_'::text, 'pgtap-metadata_element_specification_id_-metadata_'::text, 'pgtap-metadata_element_specification_id_'::text, true, true, 'pgtap-metadata_element_specification_id_'::text, 'pgtap-metadata_element_specification_id_'::text);
      insert into "governance_item" ("id", "kind", "title", "body") values ('pgtap-metadata_element_specification_id_-metadata_'::text, 'objetivo', 'pgtap-metadata_element_specification_id_'::text, 'pgtap-metadata_element_specification_id_'::text);
      perform set_config('session_replication_role', 'origin', true);
      insert into "metadata_element" ("entity", "name", "specification_id", "support_id") values ('pgtap-metadata_element_specification_id_-metadata_'::text, 'pgtap-metadata_element_specification_id_-metadata_'::text, '__ausente_metadata_element_specification_id_fkey-0'::text, 'pgtap-metadata_element_specification_id_-metadata_'::text);
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "metadata_element" violates foreign key constraint "metadata_element_specification_id_fkey"',
  'metadata_element.metadata_element_specification_id_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);
      insert into "schema_column" ("entity", "name", "data_type", "required", "key_part", "definition", "syntax") values ('pgtap-metadata_element_support_id_fkey-metadata_el'::text, 'pgtap-metadata_element_support_id_fkey-metadata_el'::text, 'pgtap-metadata_element_support_id_fkey'::text, true, true, 'pgtap-metadata_element_support_id_fkey'::text, 'pgtap-metadata_element_support_id_fkey'::text);
      perform set_config('session_replication_role', 'origin', true);
      insert into "metadata_element" ("entity", "name", "support_id") values ('pgtap-metadata_element_support_id_fkey-metadata_el'::text, 'pgtap-metadata_element_support_id_fkey-metadata_el'::text, '__ausente_metadata_element_support_id_fkey-0'::text);
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "metadata_element" violates foreign key constraint "metadata_element_support_id_fkey"',
  'metadata_element.metadata_element_support_id_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);

      perform set_config('session_replication_role', 'origin', true);
      insert into "nav_item" ("id", "position", "label", "dest_id") values ('pgtap'::text, 1, 'pgtap'::text, '__ausente_nav_item_dest_fkey-0'::text);
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "nav_item" violates foreign key constraint "nav_item_dest_fkey"',
  'nav_item.nav_item_dest_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);

      perform set_config('session_replication_role', 'origin', true);
      insert into "nav_item" ("id", "parent_id", "position", "label") values ('pgtap'::text, '__ausente_nav_item_parent_fkey-0'::text, 1, 'pgtap'::text);
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "nav_item" violates foreign key constraint "nav_item_parent_fkey"',
  'nav_item.nav_item_parent_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);
      insert into "content_atom" ("id", "slug", "origin", "fundamento_id", "statement", "locator") values ('pgtap-normative_link_asset_id_fkey-normative_link_'::text, 'pgtap-normative_link_asset_id_fkey'::text, 'normativo', 'pgtap-normative_link_asset_id_fkey-fundamento', 'pgtap-normative_link_asset_id_fkey'::text, 'pgtap-normative_link_asset_id_fkey'::text);
      insert into "fundamento" ("id", "name", "domain", "right_name", "priority") values ('pgtap-normative_link_asset_id_fkey-fundamento', 'pgtap-normative_link_asset_id_fkey'::text, 'pgtap-normative_link_asset_id_fkey'::text, 'pgtap-normative_link_asset_id_fkey'::text, 'pgtap-normative_link_asset_id_fkey'::text);
      perform set_config('session_replication_role', 'origin', true);
      insert into "normative_link" ("id", "rule_id", "asset_id", "reading", "audited_on", "work_order_ref", "origin") values ('pgtap'::text, 'pgtap-normative_link_asset_id_fkey-normative_link_'::text, '__ausente_normative_link_asset_id_fkey-0'::text, 'EM_ANALISE', 'pgtap'::text, 'pgtap'::text, 'pgtap'::text);
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "normative_link" violates foreign key constraint "normative_link_asset_id_fkey"',
  'normative_link.normative_link_asset_id_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);
      insert into "normative_asset" ("id", "kind", "path") values ('pgtap-normative_link_rule_id_fkey-normative_link_a'::text, 'pgtap-normative_link_rule_id_fkey'::text, 'pgtap-normative_link_rule_id_fkey'::text);
      perform set_config('session_replication_role', 'origin', true);
      insert into "normative_link" ("id", "rule_id", "asset_id", "reading", "audited_on", "work_order_ref", "origin") values ('pgtap'::text, '__ausente_normative_link_rule_id_fkey-0'::text, 'pgtap-normative_link_rule_id_fkey-normative_link_a'::text, 'EM_ANALISE', 'pgtap'::text, 'pgtap'::text, 'pgtap'::text);
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "normative_link" violates foreign key constraint "normative_link_rule_id_fkey"',
  'normative_link.normative_link_rule_id_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);
      insert into "participation_statement_candidate" ("id", "process_id", "statement") values ('pgtap-participation_consensus_vote_candi-participa'::text, 'pgtap-participation_consensus_vote_candi'::text, 'pgtap-participation_consensus_vote_candi'::text);
      perform set_config('session_replication_role', 'origin', true);
      insert into "participation_consensus_vote_candidate" ("id", "process_id", "statement_id", "participant_key", "position") values ('pgtap'::text, '__ausente_participation_consensus_vote_candidate_p-0'::text, 'pgtap-participation_consensus_vote_candi-participa'::text, 'pgtap'::text, 'AGREE');
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "participation_consensus_vote_candidate" violates foreign key constraint "participation_consensus_vote_candidate_process_id_fkey"',
  'participation_consensus_vote_candidate.participation_consensus_vote_candidate_process_id_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);
      insert into "participation_process_candidate" ("id", "title", "description", "status") values ('pgtap-participation_consensus_vote_candi-participa'::text, 'pgtap-participation_consensus_vote_candi'::text, 'pgtap-participation_consensus_vote_candi'::text, 'CANDIDATE');
      perform set_config('session_replication_role', 'origin', true);
      insert into "participation_consensus_vote_candidate" ("id", "process_id", "statement_id", "participant_key", "position") values ('pgtap'::text, 'pgtap-participation_consensus_vote_candi-participa'::text, '__ausente_participation_consensus_vote_candidate_s-0'::text, 'pgtap'::text, 'AGREE');
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "participation_consensus_vote_candidate" violates foreign key constraint "participation_consensus_vote_candidate_statement_id_fkey"',
  'participation_consensus_vote_candidate.participation_consensus_vote_candidate_statement_id_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);

      perform set_config('session_replication_role', 'origin', true);
      insert into "participation_contribution_candidate" ("id", "process_id", "participant_key", "contribution_kind") values ('pgtap'::text, '__ausente_participation_contribution_candidate_pro-0'::text, 'pgtap'::text, 'PULSE');
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "participation_contribution_candidate" violates foreign key constraint "participation_contribution_candidate_process_id_fkey"',
  'participation_contribution_candidate.participation_contribution_candidate_process_id_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);

      perform set_config('session_replication_role', 'origin', true);
      insert into "participation_outcome_candidate" ("id", "process_id", "title", "summary", "outcome_state") values ('pgtap'::text, '__ausente_participation_outcome_candidate_process_-0'::text, 'pgtap'::text, 'pgtap'::text, 'COMMUNITY_SYNTHESIS');
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "participation_outcome_candidate" violates foreign key constraint "participation_outcome_candidate_process_id_fkey"',
  'participation_outcome_candidate.participation_outcome_candidate_process_id_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);

      perform set_config('session_replication_role', 'origin', true);
      insert into "participation_proposal_candidate" ("id", "process_id", "participant_key", "title", "problem", "proposal") values ('pgtap'::text, '__ausente_participation_proposal_candidate_process-0'::text, 'pgtap'::text, 'pgtap'::text, 'pgtap'::text, 'pgtap'::text);
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "participation_proposal_candidate" violates foreign key constraint "participation_proposal_candidate_process_id_fkey"',
  'participation_proposal_candidate.participation_proposal_candidate_process_id_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);

      perform set_config('session_replication_role', 'origin', true);
      insert into "participation_reaction_candidate" ("id", "proposal_id", "participant_key", "reaction") values ('pgtap'::text, '__ausente_participation_reaction_candidate_proposa-0'::text, 'pgtap'::text, 'SUPPORT');
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "participation_reaction_candidate" violates foreign key constraint "participation_reaction_candidate_proposal_id_fkey"',
  'participation_reaction_candidate.participation_reaction_candidate_proposal_id_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);

      perform set_config('session_replication_role', 'origin', true);
      insert into "participation_statement_candidate" ("id", "process_id", "statement") values ('pgtap'::text, '__ausente_participation_statement_candidate_proces-0'::text, 'pgtap'::text);
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "participation_statement_candidate" violates foreign key constraint "participation_statement_candidate_process_id_fkey"',
  'participation_statement_candidate.participation_statement_candidate_process_id_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);

      perform set_config('session_replication_role', 'origin', true);
      insert into "policy_decision" ("id", "package_id", "action", "subject_role", "effect", "actor_id") values ('pgtap'::text, '__ausente_policy_decision_package_id_fkey-0'::text, 'pgtap'::text, 'pgtap'::text, 'allow', 'pgtap'::text);
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "policy_decision" violates foreign key constraint "policy_decision_package_id_fkey"',
  'policy_decision.policy_decision_package_id_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);
      insert into "policy_package" ("id", "title", "status") values ('pgtap-policy_decision_rule_fkey-policy_decision_pa'::text, 'pgtap-policy_decision_rule_fkey'::text, 'rascunho');
      perform set_config('session_replication_role', 'origin', true);
      insert into "policy_decision" ("id", "package_id", "rule_id", "action", "subject_role", "effect", "actor_id") values ('pgtap'::text, 'pgtap-policy_decision_rule_fkey-policy_decision_pa'::text, '__ausente_policy_decision_rule_fkey-1'::text, 'pgtap'::text, 'pgtap'::text, 'allow', 'pgtap'::text);
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "policy_decision" violates foreign key constraint "policy_decision_rule_fkey"',
  'policy_decision.policy_decision_rule_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);

      perform set_config('session_replication_role', 'origin', true);
      insert into "policy_rule" ("package_id", "id", "subject_role", "action", "effect", "reason") values ('__ausente_policy_rule_package_id_fkey-0'::text, 'pgtap'::text, 'pgtap'::text, 'pgtap'::text, 'allow', 'pgtap'::text);
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "policy_rule" violates foreign key constraint "policy_rule_package_id_fkey"',
  'policy_rule.policy_rule_package_id_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);

      perform set_config('session_replication_role', 'origin', true);
      insert into "process_setting" ("process_id", "key", "value") values ('__ausente_process_setting_process_id_fkey-0'::text, 'pgtap'::text, 'pgtap'::text);
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "process_setting" violates foreign key constraint "process_setting_process_id_fkey"',
  'process_setting.process_setting_process_id_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);

      perform set_config('session_replication_role', 'origin', true);
      insert into "repo_branch" ("repo", "branch") values ('__ausente_repo_branch_repo_fkey-0'::text, 'pgtap'::text);
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "repo_branch" violates foreign key constraint "repo_branch_repo_fkey"',
  'repo_branch.repo_branch_repo_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);

      perform set_config('session_replication_role', 'origin', true);
      insert into "repo_branch_commit" ("repo", "branch", "commit") values ('__ausente_repo_branch_commit_repo_branch_fkey-0'::text, '__ausente_repo_branch_commit_repo_branch_fkey-1'::text, 'pgtap'::text);
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "repo_branch_commit" violates foreign key constraint "repo_branch_commit_repo_branch_fkey"',
  'repo_branch_commit.repo_branch_commit_repo_branch_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);
      insert into "repo_source" ("repo", "note") values ('pgtap-repo_file_branch_fkey-repo_file_repo_fkey-0'::text, 'pgtap-repo_file_branch_fkey'::text);
      perform set_config('session_replication_role', 'origin', true);
      insert into "repo_file" ("repo", "branch", "path", "blob", "face") values ('pgtap-repo_file_branch_fkey-repo_file_repo_fkey-0'::text, '__ausente_repo_file_branch_fkey-1'::text, 'pgtap'::text, 'pgtap'::text, 'canonical');
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "repo_file" violates foreign key constraint "repo_file_branch_fkey"',
  'repo_file.repo_file_branch_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);
      insert into "repo_branch" ("repo", "branch") values ('pgtap-repo_file_repo_fkey'::text, 'pgtap-repo_file_repo_fkey-repo_file_branch_fkey-1'::text);
      perform set_config('session_replication_role', 'origin', true);
      insert into "repo_file" ("repo", "branch", "path", "blob", "face") values ('__ausente_repo_file_repo_fkey-0'::text, 'pgtap-repo_file_repo_fkey-repo_file_branch_fkey-1'::text, 'pgtap'::text, 'pgtap'::text, 'canonical');
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "repo_file" violates foreign key constraint "repo_file_repo_fkey"',
  'repo_file.repo_file_repo_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);

      perform set_config('session_replication_role', 'origin', true);
      insert into "research_instrument_candidate" ("id", "project_id", "kind", "title", "status") values ('pgtap'::text, '__ausente_research_instrument_candidate_project_id-0'::text, 'SURVEY', 'pgtap'::text, 'CANDIDATE');
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "research_instrument_candidate" violates foreign key constraint "research_instrument_candidate_project_id_fkey"',
  'research_instrument_candidate.research_instrument_candidate_project_id_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);

      perform set_config('session_replication_role', 'origin', true);
      insert into "research_risk_candidate" ("id", "project_id", "category", "description", "likelihood", "impact", "status") values ('pgtap'::text, '__ausente_research_risk_candidate_project_id_fkey-0'::text, 'ETHICS', 'pgtap'::text, 1, 1, 'OPEN');
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "research_risk_candidate" violates foreign key constraint "research_risk_candidate_project_id_fkey"',
  'research_risk_candidate.research_risk_candidate_project_id_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);

      perform set_config('session_replication_role', 'origin', true);
      insert into "research_skill_need_candidate" ("id", "project_id", "skill", "priority", "coverage_state") values ('pgtap'::text, '__ausente_research_skill_need_candidate_project_id-0'::text, 'pgtap'::text, 'LOW', 'GAP');
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "research_skill_need_candidate" violates foreign key constraint "research_skill_need_candidate_project_id_fkey"',
  'research_skill_need_candidate.research_skill_need_candidate_project_id_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);

      perform set_config('session_replication_role', 'origin', true);
      insert into "schema_column" ("entity", "name", "data_type", "required", "key_part", "definition", "syntax") values ('__ausente_schema_column_entity_fkey-0'::text, 'pgtap'::text, 'pgtap'::text, true, true, 'pgtap'::text, 'pgtap'::text);
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "schema_column" violates foreign key constraint "schema_column_entity_fkey"',
  'schema_column.schema_column_entity_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);
      insert into "schema_entity" ("name", "layer_id", "primary_key", "purpose") values ('pgtap-schema_column_ref_entity_fkey-schema_column_'::text, 'pgtap-schema_column_ref_entity_fkey'::text, 'pgtap-schema_column_ref_entity_fkey'::text, 'pgtap-schema_column_ref_entity_fkey'::text);
      perform set_config('session_replication_role', 'origin', true);
      insert into "schema_column" ("entity", "name", "data_type", "required", "key_part", "ref_entity", "definition", "syntax") values ('pgtap-schema_column_ref_entity_fkey-schema_column_'::text, 'pgtap'::text, 'pgtap'::text, true, true, '__ausente_schema_column_ref_entity_fkey-0'::text, 'pgtap'::text, 'pgtap'::text);
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "schema_column" violates foreign key constraint "schema_column_ref_entity_fkey"',
  'schema_column.schema_column_ref_entity_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);

      perform set_config('session_replication_role', 'origin', true);
      insert into "schema_entity" ("name", "layer_id", "primary_key", "purpose") values ('pgtap'::text, '__ausente_schema_entity_layer_id_fkey-0'::text, 'pgtap'::text, 'pgtap'::text);
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "schema_entity" violates foreign key constraint "schema_entity_layer_id_fkey"',
  'schema_entity.schema_entity_layer_id_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);
      insert into "schema_entity" ("name", "layer_id", "primary_key", "purpose") values ('pgtap-schema_relation_from_entity_fkey-schema_rela'::text, 'pgtap-schema_relation_from_entity_fkey'::text, 'pgtap-schema_relation_from_entity_fkey'::text, 'pgtap-schema_relation_from_entity_fkey'::text);
      perform set_config('session_replication_role', 'origin', true);
      insert into "schema_relation" ("from_entity", "name", "to_entity", "cardinality", "from_column", "to_column", "definition") values ('__ausente_schema_relation_from_entity_fkey-0'::text, 'pgtap'::text, 'pgtap-schema_relation_from_entity_fkey-schema_rela'::text, '1:1', 'pgtap'::text, 'pgtap'::text, 'pgtap'::text);
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "schema_relation" violates foreign key constraint "schema_relation_from_entity_fkey"',
  'schema_relation.schema_relation_from_entity_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);
      insert into "schema_entity" ("name", "layer_id", "primary_key", "purpose") values ('pgtap-schema_relation_to_entity_fkey-schema_relati'::text, 'pgtap-schema_relation_to_entity_fkey'::text, 'pgtap-schema_relation_to_entity_fkey'::text, 'pgtap-schema_relation_to_entity_fkey'::text);
      perform set_config('session_replication_role', 'origin', true);
      insert into "schema_relation" ("from_entity", "name", "to_entity", "cardinality", "from_column", "to_column", "definition") values ('pgtap-schema_relation_to_entity_fkey-schema_relati'::text, 'pgtap'::text, '__ausente_schema_relation_to_entity_fkey-0'::text, '1:1', 'pgtap'::text, 'pgtap'::text, 'pgtap'::text);
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "schema_relation" violates foreign key constraint "schema_relation_to_entity_fkey"',
  'schema_relation.schema_relation_to_entity_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);

      perform set_config('session_replication_role', 'origin', true);
      insert into "schema_term" ("domain", "code", "label", "definition") values ('__ausente_schema_term_domain_fkey-0'::text, 'pgtap'::text, 'pgtap'::text, 'pgtap'::text);
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "schema_term" violates foreign key constraint "schema_term_domain_fkey"',
  'schema_term.schema_term_domain_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);

      perform set_config('session_replication_role', 'origin', true);
      insert into "screen_dest" ("id", "kind", "place_id") values ('pgtap'::text, 'section', '__ausente_screen_dest_place_id_fkey-0'::text);
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "screen_dest" violates foreign key constraint "screen_dest_place_id_fkey"',
  'screen_dest.screen_dest_place_id_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);

      perform set_config('session_replication_role', 'origin', true);
      insert into "screen_dest" ("id", "kind", "tool_slug") values ('pgtap'::text, 'tool', '__ausente_screen_dest_tool_fkey-0'::text);
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "screen_dest" violates foreign key constraint "screen_dest_tool_fkey"',
  'screen_dest.screen_dest_tool_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);

      perform set_config('session_replication_role', 'origin', true);
      insert into "section_block" ("slug", "position", "block_id", "title") values ('__ausente_section_block_slug_fkey-0'::text, 1, 'pgtap'::text, 'pgtap'::text);
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "section_block" violates foreign key constraint "section_block_slug_fkey"',
  'section_block.section_block_slug_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);
      insert into "section_block" ("slug", "position", "block_id", "title") values ('pgtap-section_link_dest_fkey-section_link_slug_blo'::text, 1, 'pgtap-section_link_dest_fkey'::text, 'pgtap-section_link_dest_fkey'::text);
      perform set_config('session_replication_role', 'origin', true);
      insert into "section_link" ("slug", "block_position", "position", "item_id", "title", "text", "dest_id") values ('pgtap-section_link_dest_fkey-section_link_slug_blo'::text, 1, 1, 'pgtap'::text, 'pgtap'::text, 'pgtap'::text, '__ausente_section_link_dest_fkey-0'::text);
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "section_link" violates foreign key constraint "section_link_dest_fkey"',
  'section_link.section_link_dest_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);

      perform set_config('session_replication_role', 'origin', true);
      insert into "section_link" ("slug", "block_position", "position", "item_id", "title", "text") values ('__ausente_section_link_slug_block_position_fkey-0'::text, 1, 1, 'pgtap'::text, 'pgtap'::text, 'pgtap'::text);
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "section_link" violates foreign key constraint "section_link_slug_block_position_fkey"',
  'section_link.section_link_slug_block_position_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);

      perform set_config('session_replication_role', 'origin', true);
      insert into "session" ("id", "expiresAt", "token", "updatedAt", "userId") values ('pgtap'::text, timestamptz '2000-01-01', 'pgtap'::text, timestamptz '2000-01-01', '__ausente_session_userId_fkey-0'::text);
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "session" violates foreign key constraint "session_userId_fkey"',
  'session.session_userId_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);

      perform set_config('session_replication_role', 'origin', true);
      insert into "specimen_line" ("specimen_id", "module_position", "position", "path", "text") values ('__ausente_specimen_line_specimen_id_module_positio-0'::text, 1, 1, 'pgtap'::text, 'pgtap'::text);
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "specimen_line" violates foreign key constraint "specimen_line_specimen_id_module_position_fkey"',
  'specimen_line.specimen_line_specimen_id_module_position_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);

      perform set_config('session_replication_role', 'origin', true);
      insert into "specimen_module" ("specimen_id", "position", "type", "title") values ('__ausente_specimen_module_specimen_id_fkey-0'::text, 1, 'pgtap'::text, 'pgtap'::text);
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "specimen_module" violates foreign key constraint "specimen_module_specimen_id_fkey"',
  'specimen_module.specimen_module_specimen_id_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);

      perform set_config('session_replication_role', 'origin', true);
      insert into "study_choice" ("item_id", "position", "label") values ('__ausente_study_choice_item_id_fkey-0'::text, 1, 'pgtap'::text);
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "study_choice" violates foreign key constraint "study_choice_item_id_fkey"',
  'study_choice.study_choice_item_id_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);

      perform set_config('session_replication_role', 'origin', true);
      insert into "subscription" ("user_id", "status") values ('__ausente_subscription_user_fkey-0'::text, 'pedido');
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "subscription" violates foreign key constraint "subscription_user_fkey"',
  'subscription.subscription_user_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);

      perform set_config('session_replication_role', 'origin', true);
      insert into "suggestion" ("batch_id", "path", "locale", "module", "title", "lead") values ('__ausente_suggestion_batch_id_fkey-0'::text, 'pgtap'::text, 'pgtap'::text, 'pgtap'::text, 'pgtap'::text, 'pgtap'::text);
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "suggestion" violates foreign key constraint "suggestion_batch_id_fkey"',
  'suggestion.suggestion_batch_id_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);

      perform set_config('session_replication_role', 'origin', true);
      insert into "tool_band" ("tool_slug", "min_score", "max_score", "label", "tone", "note") values ('__ausente_tool_band_tool_slug_fkey-0'::text, 1, 1, 'pgtap'::text, 'ok', 'pgtap'::text);
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "tool_band" violates foreign key constraint "tool_band_tool_slug_fkey"',
  'tool_band.tool_band_tool_slug_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);

      perform set_config('session_replication_role', 'origin', true);
      insert into "tool_band_nanda" ("tool_slug", "min_score", "label") values ('__ausente_tool_band_nanda_tool_slug_min_score_fkey-0'::text, 1, 'pgtap'::text);
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "tool_band_nanda" violates foreign key constraint "tool_band_nanda_tool_slug_min_score_fkey"',
  'tool_band_nanda.tool_band_nanda_tool_slug_min_score_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);

      perform set_config('session_replication_role', 'origin', true);
      insert into "tool_choice" ("tool_slug", "criterion_id", "value", "label", "position") values ('__ausente_tool_choice_tool_slug_criterion_id_fkey-0'::text, '__ausente_tool_choice_tool_slug_criterion_id_fkey-1'::text, 1, 'pgtap'::text, 1);
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "tool_choice" violates foreign key constraint "tool_choice_tool_slug_criterion_id_fkey"',
  'tool_choice.tool_choice_tool_slug_criterion_id_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);

      perform set_config('session_replication_role', 'origin', true);
      insert into "tool_criterion" ("tool_slug", "id", "label", "position") values ('__ausente_tool_criterion_tool_slug_fkey-0'::text, 'pgtap'::text, 'pgtap'::text, 1);
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "tool_criterion" violates foreign key constraint "tool_criterion_tool_slug_fkey"',
  'tool_criterion.tool_criterion_tool_slug_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);

      perform set_config('session_replication_role', 'origin', true);
      insert into "tool_faq" ("tool_slug", "position", "question", "answer") values ('__ausente_tool_faq_tool_slug_fkey-0'::text, 1, 'pgtap'::text, 'pgtap'::text);
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "tool_faq" violates foreign key constraint "tool_faq_tool_slug_fkey"',
  'tool_faq.tool_faq_tool_slug_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);

      perform set_config('session_replication_role', 'origin', true);
      insert into "tool_field" ("tool_slug", "id", "label", "unit", "min_value", "max_value", "step", "position") values ('__ausente_tool_field_tool_slug_fkey-0'::text, 'pgtap'::text, 'pgtap'::text, 'pgtap'::text, 1, 1, 1, 1);
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "tool_field" violates foreign key constraint "tool_field_tool_slug_fkey"',
  'tool_field.tool_field_tool_slug_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);

      perform set_config('session_replication_role', 'origin', true);
      insert into "tool_formula" ("tool_slug", "method", "statement") values ('__ausente_tool_formula_tool_fkey-0'::text, 'soma', 'pgtap'::text);
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "tool_formula" violates foreign key constraint "tool_formula_tool_fkey"',
  'tool_formula.tool_formula_tool_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);

      perform set_config('session_replication_role', 'origin', true);
      insert into "tool_formula_step" ("tool_slug", "position", "target", "expression") values ('__ausente_tool_formula_step_tool_slug_fkey-0'::text, 1, 'pgtap'::text, 'pgtap'::text);
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "tool_formula_step" violates foreign key constraint "tool_formula_step_tool_slug_fkey"',
  'tool_formula_step.tool_formula_step_tool_slug_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);

      perform set_config('session_replication_role', 'origin', true);
      insert into "tool_meta" ("tool_slug", "id", "label", "position") values ('__ausente_tool_meta_tool_slug_fkey-0'::text, 'pgtap'::text, 'pgtap'::text, 1);
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "tool_meta" violates foreign key constraint "tool_meta_tool_slug_fkey"',
  'tool_meta.tool_meta_tool_slug_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);

      perform set_config('session_replication_role', 'origin', true);
      insert into "tool_meta_option" ("tool_slug", "meta_id", "value", "label", "position") values ('__ausente_tool_meta_option_tool_slug_meta_id_fkey-0'::text, '__ausente_tool_meta_option_tool_slug_meta_id_fkey-1'::text, 'pgtap'::text, 'pgtap'::text, 1);
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "tool_meta_option" violates foreign key constraint "tool_meta_option_tool_slug_meta_id_fkey"',
  'tool_meta_option.tool_meta_option_tool_slug_meta_id_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);

      perform set_config('session_replication_role', 'origin', true);
      insert into "tool_output" ("tool_slug", "id", "label", "unit", "digits", "position") values ('__ausente_tool_output_tool_slug_fkey-0'::text, 'pgtap'::text, 'pgtap'::text, 'pgtap'::text, 1, 1);
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "tool_output" violates foreign key constraint "tool_output_tool_slug_fkey"',
  'tool_output.tool_output_tool_slug_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);

      perform set_config('session_replication_role', 'origin', true);
      insert into "tool_reference" ("tool_slug", "position", "citation") values ('__ausente_tool_reference_tool_slug_fkey-0'::text, 1, 'pgtap'::text);
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "tool_reference" violates foreign key constraint "tool_reference_tool_slug_fkey"',
  'tool_reference.tool_reference_tool_slug_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);
      insert into "source_tool" ("slug", "kind", "title", "lead") values ('pgtap-tool_related_related_fkey-tool_related_tool_'::text, 'pgtap-tool_related_related_fkey'::text, 'pgtap-tool_related_related_fkey'::text, 'pgtap-tool_related_related_fkey'::text);
      perform set_config('session_replication_role', 'origin', true);
      insert into "tool_related" ("tool_slug", "related_slug", "position") values ('pgtap-tool_related_related_fkey-tool_related_tool_'::text, '__ausente_tool_related_related_fkey-0'::text, 1);
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "tool_related" violates foreign key constraint "tool_related_related_fkey"',
  'tool_related.tool_related_related_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);
      insert into "source_tool" ("slug", "kind", "title", "lead") values ('pgtap-tool_related_tool_slug_fkey-tool_related_rel'::text, 'pgtap-tool_related_tool_slug_fkey'::text, 'pgtap-tool_related_tool_slug_fkey'::text, 'pgtap-tool_related_tool_slug_fkey'::text);
      perform set_config('session_replication_role', 'origin', true);
      insert into "tool_related" ("tool_slug", "related_slug", "position") values ('__ausente_tool_related_tool_slug_fkey-0'::text, 'pgtap-tool_related_tool_slug_fkey-tool_related_rel'::text, 1);
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "tool_related" violates foreign key constraint "tool_related_tool_slug_fkey"',
  'tool_related.tool_related_tool_slug_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);

      perform set_config('session_replication_role', 'origin', true);
      insert into "tool_select" ("tool_slug", "id", "label", "position") values ('__ausente_tool_select_tool_slug_fkey-0'::text, 'pgtap'::text, 'pgtap'::text, 1);
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "tool_select" violates foreign key constraint "tool_select_tool_slug_fkey"',
  'tool_select.tool_select_tool_slug_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);

      perform set_config('session_replication_role', 'origin', true);
      insert into "tool_select_option" ("tool_slug", "select_id", "value", "label", "position") values ('__ausente_tool_select_option_tool_slug_select_id_f-0'::text, '__ausente_tool_select_option_tool_slug_select_id_f-1'::text, 1, 'pgtap'::text, 1);
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "tool_select_option" violates foreign key constraint "tool_select_option_tool_slug_select_id_fkey"',
  'tool_select_option.tool_select_option_tool_slug_select_id_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);

      perform set_config('session_replication_role', 'origin', true);
      insert into "tool_specific" ("tool_slug", "position", "body") values ('__ausente_tool_specific_tool_slug_fkey-0'::text, 1, 'pgtap'::text);
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "tool_specific" violates foreign key constraint "tool_specific_tool_slug_fkey"',
  'tool_specific.tool_specific_tool_slug_fkey'
);

select throws_ok(
  $sql$
    do $body$
    begin
      perform set_config('session_replication_role', 'replica', true);

      perform set_config('session_replication_role', 'origin', true);
      insert into "tool_step" ("tool_slug", "position", "body") values ('__ausente_tool_step_tool_slug_fkey-0'::text, 1, 'pgtap'::text);
    end
    $body$;
  $sql$,
  23503,
  'insert or update on table "tool_step" violates foreign key constraint "tool_step_tool_slug_fkey"',
  'tool_step.tool_step_tool_slug_fkey'
);

select * from finish();
