/** Uma linha `not ok` reprova. O pgTAP não publica e não admite. */
export function tapFailures(lines) {
  return lines.filter((line) => /^not ok\b/.test(line.trim()));
}
