/* Daram — block data → compact plain text.
   Shared by the test-maker page (browser, as window.DaramBlocksText) and the
   offline bank builder (node, via require/import). */

(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module && module.exports) module.exports = api;
  else root.DaramBlocksText = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  function tokLine(w) {
    const ar = (w || []).filter((t) => t && t.a).map((t) => t.a).join(' ');
    const en = (w || []).filter((t) => t && t.e).map((t) => t.e).join(' ');
    return { ar, en };
  }

  function deepText(v) {
    if (v == null) return '';
    if (typeof v === 'string') return v;
    if (Array.isArray(v)) return v.map(deepText).filter(Boolean).join(' ');
    if (typeof v === 'object') {
      const parts = [];
      for (const k of ['a', 'e', 'ar', 'en', 'label', 'labelEn', 'text', 'caption']) if (typeof v[k] === 'string') parts.push(v[k]);
      for (const k of Object.keys(v)) if (Array.isArray(v[k])) parts.push(deepText(v[k]));
      return parts.join(' ');
    }
    return '';
  }

  function blocksToText(blocks) {
    const out = [];
    for (const b of (blocks || [])) {
      if (!b || typeof b !== 'object') continue;
      switch (b.t) {
        case 'page': break;
        case 'h1': out.push(`\n# ${b.ar || ''}${b.en ? '  (' + b.en + ')' : ''}`); break;
        case 'h2': out.push(`\n## ${b.ar || ''}${b.en ? '  (' + b.en + ')' : ''}`); break;
        case 'line': { const { ar, en } = tokLine(b.w); if (ar) out.push(`${ar}${en ? '  — ' + en : ''}`); break; }
        case 'box': {
          out.push(`[${b.label || ''}${b.labelEn ? ' / ' + b.labelEn : ''}]`);
          (b.lines || []).forEach((ln) => { const { ar, en } = tokLine(ln); if (ar) out.push(`  ${ar}${en ? '  — ' + en : ''}`); });
          break;
        }
        case 'table': {
          if (b.head) out.push(`[table: ${[].concat(b.head).join(' | ')}]`);
          (b.rows || []).forEach((r) => out.push('  ' + [].concat(r).join(' | ')));
          break;
        }
        default: { const s = deepText(b); if (s) out.push(s); }
      }
    }
    return out.join('\n');
  }

  return { tokLine, deepText, blocksToText };
});
