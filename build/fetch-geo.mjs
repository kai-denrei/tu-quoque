#!/usr/bin/env node
/* fetch-geo.mjs — deterministic geography reference (capitals + population).
 * Pulls from the World Bank API (public, no auth) so NO value is model-invented (handover law 6).
 *   capitals + region: GET /v2/country
 *   population 2023:    GET /v2/country/all/indicator/SP.POP.TOTL
 * Joins on ISO3, filters to the countries present in data/world.json, writes data/geo/reference.json.
 * Idempotent. If the network is unavailable it exits non-zero and changes nothing. */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const POP_YEAR = 2023;

const getJSON = async (url) => {
  const r = await fetch(url, { headers: { 'User-Agent': 'tuquoque/1.0' } });
  if (!r.ok) throw new Error(`HTTP ${r.status} for ${url}`);
  return r.json();
};

const mapISO = new Set(JSON.parse(fs.readFileSync(path.join(ROOT, 'data/world.json'), 'utf8')).features.map(f => f.iso));

const main = async () => {
  // 1) capitals + region (page size 400 covers all ~300 WB entries in one call)
  const countriesResp = await getJSON('https://api.worldbank.org/v2/country?format=json&per_page=400');
  const rows = countriesResp[1] || [];
  // 2) population for POP_YEAR
  const popResp = await getJSON(`https://api.worldbank.org/v2/country/all/indicator/SP.POP.TOTL?format=json&date=${POP_YEAR}&per_page=400`);
  const popRows = popResp[1] || [];
  const popByIso = {};
  for (const p of popRows) if (p.countryiso3code && p.value != null) popByIso[p.countryiso3code] = p.value;

  const countries = [];
  for (const c of rows) {
    const iso = c.id; // ISO3
    if (!/^[A-Z]{3}$/.test(iso)) continue;
    if (c.region && (c.region.id === 'NA' || c.region.value === 'Aggregates')) continue; // drop aggregates
    if (!mapISO.has(iso)) continue;          // keep quiz aligned to the map
    const capital = (c.capitalCity || '').trim();
    if (!capital) continue;                  // no capital → skip (territories etc.)
    countries.push({
      iso, name: c.name,
      capital,
      population: popByIso[iso] ?? null,
      region: c.region ? c.region.value : null,
      note: '',
    });
  }
  countries.sort((a, b) => a.name.localeCompare(b.name));

  const out = {
    source: `World Bank API — capitals from /v2/country; population from indicator SP.POP.TOTL (${POP_YEAR})`,
    year: POP_YEAR,
    fetched: 'see VERSION/build time',
    countries,
  };
  const p = path.join(ROOT, 'data/geo/reference.json');
  fs.writeFileSync(p, JSON.stringify(out, null, 2));
  const withPop = countries.filter(c => c.population != null).length;
  console.log(`wrote data/geo/reference.json — ${countries.length} countries (${withPop} with population), of ${mapISO.size} on the map`);
};

main().catch(e => { console.error('fetch-geo FAILED:', e.message); process.exit(1); });
