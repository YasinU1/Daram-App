// Pull the first JSON value out of a model response, tolerant of code fences
// or stray prose around it. Shared by server.js and build-bank.mjs.

export function extractJson(text) {
  let t = String(text ?? '').trim();
  const fence = t.match(/```(?:json)?\s*([\s\S]*?)```/i);
  if (fence) t = fence[1].trim();
  const start = t.search(/[[{]/);
  if (start === -1) throw new Error('No JSON found in model response');
  // walk to the matching closing bracket
  const open = t[start];
  const close = open === '{' ? '}' : ']';
  let depth = 0, inStr = false, esc = false, end = -1;
  for (let i = start; i < t.length; i++) {
    const c = t[i];
    if (inStr) {
      if (esc) esc = false;
      else if (c === '\\') esc = true;
      else if (c === '"') inStr = false;
    } else if (c === '"') inStr = true;
    else if (c === open) depth++;
    else if (c === close) { depth--; if (depth === 0) { end = i; break; } }
  }
  if (end === -1) throw new Error('Unbalanced JSON in model response');
  const slice = t.slice(start, end + 1);
  try { return JSON.parse(slice); }
  catch {
    // common model glitch: a trailing comma before } or ]. Strip and retry once.
    return JSON.parse(slice.replace(/,(\s*[}\]])/g, '$1'));
  }
}
