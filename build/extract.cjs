#!/usr/bin/env node
/* extract.cjs — one-shot, idempotent extraction of PoC inline data into JSON modules.
 * Reads both_hands.html, pulls the WORLD geometry + DATA ledgers + calibration set
 * out of the inline <script>, and writes the §6 data/renderer-split JSON files.
 * Mechanical only: no research, no fabrication. Everything migrated is status:SEED. */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(ROOT, 'both_hands.html'), 'utf8');
const lines = html.split('\n');
const block = (a, b) => lines.slice(a - 1, b).join('\n'); // 1-based inclusive

const worldLine = lines[205 - 1];   // const WORLD = {...};
const dataBlock = block(208, 366);  // T, V, P, DATA
const calBlock = block(469, 486);   // BUCKETS, CAL

// Evaluate ONLY the data declarations (no DOM code) in an isolated scope.
const { WORLD, DATA, BUCKETS, CAL } = new Function(`
  ${worldLine}
  ${dataBlock}
  ${calBlock}
  return { WORLD, DATA, BUCKETS, CAL };
`)();

const write = (rel, obj) => {
  const p = path.join(ROOT, rel);
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, JSON.stringify(obj, null, rel.endsWith('world.json') ? 0 : 2));
  console.log('wrote', rel, '(' + fs.statSync(p).size + ' bytes)');
};

/* ---- world geometry ---- */
const features = WORLD.f.map(f => ({ iso: f.i, name: f.n, geometry: f.g }));
write('data/world.json', { projection: 'equirectangular', width: 1000, height: 500, features });

/* ---- tier taxonomy (§6.2) ---- */
const TIERS = {
  EXT: { label: 'extermination', cls: 't1', def: 'Deliberate destruction of a group as such.' },
  POL: { label: 'policy violence', cls: 't2', def: 'Mass killing, forced labour, or repression as deliberate state policy.' },
  WAR: { label: 'war atrocity', cls: 't3', def: 'Civilian-targeting violence inside warfare.' },
  STR: { label: 'structural / mixed', cls: 't4', def: 'Death dominated by famine, disease, or displacement; intent diffuse or contested.' },
};
write('data/tiers.json', TIERS);

/* ---- country ledgers (§6.1 / §6.3) ---- */
const clsToTier = { t1: 'EXT', t2: 'POL', t3: 'WAR', t4: 'STR' };
const bandMap = {
  'pre-colonial': 'pre-colonial', 'colonial': 'colonial', 'early-modern': 'colonial',
  'modern': 'modern', 'contemporary': 'contemporary',
  'WWII': 'modern', 'WWI': 'modern', 'Vietnam War': 'contemporary', 'Balkan Wars': 'modern',
};
const ISO_NAMES = {}; // iso -> display name from WORLD
for (const f of WORLD.f) ISO_NAMES[f.i] = f.n;

const index = [];
for (const iso of Object.keys(DATA)) {
  const evs = DATA[iso].map((ev, i) => {
    const eraBandRaw = (ev.era.split('·')[1] || '').trim();
    return {
      id: `${iso.toLowerCase()}-${i + 1}`,
      country: iso,
      role: ev.r,                       // 'victim' | 'perpetrator'
      title: ev.t,
      era: ev.era.split('·')[0].trim(),
      era_band: bandMap[eraBandRaw] || null,
      tier: clsToTier[ev.tier[1]] || null,
      agent: ev.agent,
      toll: {
        display: ev.d,
        disputed: !!ev.disp,
        low: null, high: null, unit: 'deaths', note: '',
        // research must fill low/high with a source for EACH end (handover law 3)
      },
      received_lens: null,              // research must set (§6.1)
      summary: ev.s,
      relevance: ev.w,
      sources: ev.src.map(s => ({ cite: s, kind: null, supports: null, url: null, caveat: null })),
      status: 'SEED',
    };
  });
  const name = ISO_NAMES[iso] || iso;
  write(`data/countries/${iso}.json`, {
    iso, name,
    note: '',
    events: evs,
    modern: null,                       // compare-engine key (§7), to be set
    status: 'SEED',
  });
  index.push({ iso, name, events: evs.length, status: 'SEED' });
}
index.sort((a, b) => a.iso.localeCompare(b.iso));
write('data/countries/index.json', { count: index.length, countries: index });

/* ---- calibration set (Calibrate Yourself) ---- */
write('data/calibrate.json', {
  buckets: BUCKETS,
  questions: CAL.map((c, i) => ({
    id: `cal-${i + 1}`,
    prompt: c.q, era: c.era,
    answer_low: c.lo, answer_high: c.hi, famous_bucket: c.fame,
    range: c.range, famous: c.famous, note: c.note,
  })),
});

console.log('\nextraction complete:', index.length, 'countries,', CAL.length, 'calibration items,', features.length, 'world features');
