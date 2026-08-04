// Minimal .env support (avoids a dotenv dependency).

import { existsSync, readFileSync } from 'node:fs';

// KEY=value per line; quotes stripped, blank/comment lines ignored.
export function parseEnvFile(text) {
  const out = {};
  for (const line of String(text || '').split('\n')) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/i);
    if (!m) continue;
    out[m[1]] = m[2].trim().replace(/^["']|["']$/g, '');
  }
  return out;
}

// Copy the file's values into `env`, never overwriting what is already set.
export function loadEnvFile(path, env = process.env) {
  if (!existsSync(path)) return env;
  const vars = parseEnvFile(readFileSync(path, 'utf8'));
  for (const [k, v] of Object.entries(vars)) if (env[k] === undefined) env[k] = v;
  return env;
}
