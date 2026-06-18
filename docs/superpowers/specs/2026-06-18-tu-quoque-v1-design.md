# Tu Quoque — v1 design

**Date:** 2026-06-18 · **Status:** approved (scope confirmed via clarifying questions) · **Spine:** `TU_QUOQUE_HANDOVER.md`

## 1. Goal

A localhost v1 of **Tu Quoque** — an educational atlas that refuses the single lens. Every people
appears twice: *Done to them* (victim ledger) and *In their name* (perpetrator ledger). v1 adds an
accessible **geography quiz** on-ramp (capitals + population) reusing the same world map.

Title: **Tu Quoque** — *"All the Way Down — Until Societies can Climb Out"* / *"escaping the cycles of historical blame."*

Expands the PoC `both_hands.html`. The hard part is not the map; it is **symmetry of scrutiny** (handover §0–§4).

## 2. Scope (confirmed)

| Area | v1 |
|---|---|
| **Map view** (hero) | world.json render, hover, click → dual-ledger panel, Calibrate Yourself quiz, About/Method |
| **Learn view** (new) | Geography quiz on the same map: *Find the capital*, *Guess the population* — all ~177 mapped countries |
| **Compare view** | stub — "coming soon" (handover §7 engine deferred) |
| **Essays view** | stub — "coming soon" (handover §8 essays deferred) |
| **Research** | HEAVY §9 dispatch on 12 seed countries (researchers + toll/tier/source-integrity auditors); geo reference data pass |
| **Cross-cutting** | cache-busting, PWA (installable+offline), mobile responsive, a11y |

Out of v1: Compare engine, essays, country expansion beyond 12 (atrocity data), authentication, any backend.

## 3. Architecture

Vanilla ES modules, **no bundler, no build step** (handover §10). Static files served over http.
Data/renderer split (§6): JSON is truth, JS renders.

```
index.html              shell: header (title+subtitles), hash-nav, <main id=view>
assets/
  css/ tokens.css base.css app.css      (palette/type §10, OKLCH)
  js/  app.js        hash-router + bootstrap + version-aware loader
       data.js       fetch helpers (append ?v=VERSION)
       map.js        render data/world.json (equirectangular SVG), hover, select
       atlas.js      dual-ledger country panel
       calibrate.js  Calibrate Yourself quiz (data/calibrate.json)
       geography.js  geo quiz: capital + population modes (data/geo/reference.json)
       compare.js    stub view
       essays.js     stub view
       version.js    generated: export const VERSION
       sw-register.js
data/
  schema/*.json       frozen §6 contracts (event/country/source/compare/essay/geo)
  world.json          177 country geometries
  tiers.json          intent taxonomy
  countries/*.json    12 ledgers (+ index.json)
  calibrate.json      Calibrate Yourself set
  geo/reference.json  capitals + population (research P2)
manifest.webmanifest  PWA
sw.js                 service worker (cache keyed to VERSION)
build/extract.cjs     PoC→JSON migrator (done)
build/bump-version.mjs cache-bust token generator
BUILD_STATUS.md       resumable checkpoint
notes/                research logs (+ _research_status.json)
```

**Routing:** hash router (`#map` default, `#learn`, `#compare`, `#essays`). One shared SVG map
instance between Map and Learn (don't reload 138KB geometry).

**Cache-busting:** `build/bump-version.mjs` writes `VERSION` + `assets/js/version.js`. The loader
appends `?v=${VERSION}` to all fetched data and dynamically-imported JS. HTML carries anti-cache
`<meta>`. SW cache name embeds VERSION → a bump invalidates the old SW cache (defeats stuck-SW).

**PWA:** app shell + geometry cache-first; `data/` network-first→cache; offline fallback. Installable.

## 4. Data flow

1. `index.html` loads `app.js` (module) → reads `version.js`.
2. Router renders the active view; `data.js` fetches the JSON it needs with `?v=VERSION`.
3. `map.js` builds the SVG once from `world.json`; countries present in `countries/index.json` get a glow + are clickable.
4. Click → `atlas.js` fetches `countries/{iso}.json`, renders both ledgers with tier chips + toll ranges + `status` badge.
5. Learn mode → `geography.js` drives the same SVG as a quiz surface (highlight a country, ask its capital / population bucket).

## 5. Token-interruption-robustness (explicit requirement)

- Everything persists to disk the instant it is produced; no chat-only state.
- `BUILD_STATUS.md` + `notes/_research_status.json` are the resumable source of truth.
- Research subagents write `data/countries/{iso}.json` + `notes/{iso}.md` themselves; orchestrator coordinates only.
- Renderer degrades gracefully: shows whatever JSON exists, badges `SEED`/`UNVERIFIED`.
- A fresh /loop iteration: read checkpoint → do first undone item → write → update checkpoint.

## 6. Editorial guardrails (non-negotiable, from handover §2/§11)

Two ledgers always · tiers classify the act not the nation · tolls are sourced ranges, never bare numbers ·
symmetry of scrutiny · comparison class is a visible control · **no invented sources** · no PII · paraphrase only ·
no national ranking / equivalence machine · disease-collapse is STR not EXT · do not land on "the West is best".

## 7. Verification (definition of done)

localhost serves; 177 countries render; 12 glow + click → dual ledgers; Calibrate runs; Geography runs once
reference.json exists; Compare/Essays show honest stubs; installable PWA; works on a narrow viewport; no console
errors. Evidence (screenshot/curl) before any "done" claim.
