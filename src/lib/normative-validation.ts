import type { Sql } from "@/lib/db";
import { decide } from "@/lib/policy-decision";

export async function validateNormative(
  sql: Sql,
  input: { role: string; actorId: string },
) {
  const decision = await decide(sql, {
    action: "validar_normativo",
    role: input.role,
    actorId: input.actorId,
    trail: true,
  });
  const rows = await sql.query<{ reading: string; n: number }>(
    `select reading, count(*)::int as n from normative_link group by reading`,
  );
  const count = (reading: string) => rows.find((row) => row.reading === reading)?.n ?? 0;
  const conforme = count("CONFORME");
  const emAnalise = count("EM_ANALISE");
  const naoConforme = count("NAO_CONFORME");
  const promoted = await sql.query<{ n: number }>(
    `select count(*)::int as n
     from normative_link as link
     join content_atom as atom on atom.id = link.rule_id
     where link.reading = 'CONFORME' and atom.status <> 'candidato'`,
  );
  const note = `conforme=${conforme}; em_analise=${emAnalise}; nao_conforme=${naoConforme}; promovidos=${promoted[0]?.n ?? 0}; opa=nao_executado`;
  await sql.query(
    `insert into activity_event (id, actor_id, action, decision_id, subject, outcome, note)
     values ($1, $2, 'validar_normativo', $3, 'leitura', 'registrado', $4)`,
    [crypto.randomUUID(), input.actorId, decision.decisionId, note],
  );
  return {
    ...decision,
    conforme,
    emAnalise,
    naoConforme,
    promoted: promoted[0]?.n ?? 0,
  };
}
