import { execFile } from "node:child_process";
import type { Sql } from "@/lib/db";
import { decide } from "@/lib/policy-decision";

export function opaPresent(): Promise<boolean> {
  return new Promise((resolve) => {
    execFile("opa", ["version"], { timeout: 1500 }, (error) => resolve(!error));
  });
}

const outside = (id: string, name: string) =>
  /(cfc|contabil|nbc)/i.test(id) || /(contabil|contábil|\bcfc\b|nbc)/i.test(name);

export async function bindMaster(
  sql: Sql,
  input: { fundamentoId: string; role: string; actorId: string; opa?: () => Promise<boolean> },
) {
  const decision = await decide(sql, {
    action: "integrar_mestre",
    role: input.role,
    actorId: input.actorId,
    trail: true,
  });
  const found = await sql.query<{ id: string; name: string }>(
    "select id, name from fundamento where id = $1",
    [input.fundamentoId],
  );
  const master = found[0];
  if (!master || outside(master.id, master.name)) {
    const note = master ? "contabilidade-fora" : "mestre-ausente";
    await sql.query(
      `insert into activity_event (id, actor_id, action, decision_id, subject, outcome, note)
       values ($1, $2, 'integrar_mestre', $3, $4, 'registrado', $5)`,
      [crypto.randomUUID(), input.actorId, decision.decisionId, input.fundamentoId, note],
    );
    return { ...decision, bound: false, orderId: null, opa: "ausente" as const, status: null };
  }

  const existing = await sql.query<{ order_id: string; opa: "ausente" | "presente"; status: string }>(
    `select binding.order_id, binding.opa, orders.status
     from master_binding as binding
     join kernel_order as orders on orders.id = binding.order_id
     where binding.fundamento_id = $1`,
    [master.id],
  );
  if (existing[0]) {
    return { ...decision, bound: true, orderId: existing[0].order_id, opa: existing[0].opa, status: existing[0].status };
  }

  const present = await (input.opa ?? opaPresent)();
  const opa = present ? "presente" : "ausente";
  const orderId = `ko-${master.id}`;
  const people = await sql.query<{ id: string }>(`select id from "user" where id = $1`, [input.actorId]);
  await sql.query(
    `insert into kernel_order (id, title, status, owner_id, approver_id, execution_requested, reason)
     values ($1, $2, 'em_espera', $3, null, false, $4)`,
    [orderId, master.name.slice(0, 120), people[0]?.id ?? null, present ? "opa-presente-sem-admissao" : "opa-ausente"],
  );
  await sql.query(
    `insert into kernel_order_policy (order_id, package_id, rule_id) values ($1, 'acesso', 'admin-integra-mestre')`,
    [orderId],
  );
  await sql.query(
    `insert into kernel_validator (order_id, id, passed, note) values ($1, 'opa', false, $2)`,
    [orderId, present ? "OPA encontrado. A presença não admite." : "OPA ausente. Sem execução."],
  );
  await sql.query(
    `insert into kernel_manifest (order_id, status, approved_by) values ($1, 'rascunho', null)`,
    [orderId],
  );
  await sql.query(
    `insert into master_binding (order_id, fundamento_id, opa) values ($1, $2, $3)`,
    [orderId, master.id, opa],
  );
  await sql.query(
    `insert into activity_event (id, actor_id, action, decision_id, subject, outcome, note)
     values ($1, $2, 'integrar_mestre', $3, $4, 'registrado', $5)`,
    [crypto.randomUUID(), input.actorId, decision.decisionId, master.id, `pedido=${orderId}; opa=${opa}; admitido=nao`],
  );
  return { ...decision, bound: true, orderId, opa, status: "em_espera" as const };
}
