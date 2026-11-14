/** Compara achados do Squawk com o teto já registrado. Achado novo reprova. */
export function violationKey(row) {
  return `${row.file}\t${row.rule_name}`;
}

export function countViolations(rows) {
  const counts = new Map();
  for (const row of rows) {
    const key = violationKey(row);
    counts.set(key, (counts.get(key) ?? 0) + 1);
  }
  return counts;
}

export function violationsAboveBaseline(current, baseline) {
  const extra = [];
  for (const [key, count] of current) {
    const allowed = baseline[key] ?? 0;
    if (count > allowed) extra.push({ key, count, allowed });
  }
  extra.sort((a, b) => a.key.localeCompare(b.key));
  return extra;
}
