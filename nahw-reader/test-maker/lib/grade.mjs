// Post-process a model-produced mark so the paper can never be over-marked.

export function normalizeGrade(result, maxMarks) {
  const max = Number(maxMarks) || 0;
  const out = Object.assign({}, result);
  out.max = max;
  out.awarded = Math.max(0, Math.min(max, Number(out.awarded) || 0));
  return out;
}
