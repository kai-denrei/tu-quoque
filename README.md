# Tu Quoque

> An educational atlas that refuses the single lens. Every people appears twice — on the
> receiving hand (*Done to them*) and the dishing hand (*In their name*).
> **All the Way Down — Until Societies can Climb Out** · *escaping the cycles of historical blame*

v1 prototype. Expands the PoC `both_hands.html`. Editorial constitution: [`TU_QUOQUE_HANDOVER.md`](TU_QUOQUE_HANDOVER.md).

**Live: https://tu-quoque.pages.dev** (Cloudflare Pages). 165 countries, dual ledgers, geography quiz.

## Run it

```bash
python3 -m http.server 8848    # any static server; module fetch needs http(s), not file://
open http://localhost:8848/
```

## What's here

- **Map** (`#/map`) — equirectangular SVG world (177 countries). Click a glowing country → its
  **dual ledger**. Deep-link a country with `#/map/COD`. Includes **Calibrate Yourself** (a
  guess-the-toll quiz about the epistemics of atrocity numbers).
- **Learn** (`#/learn`) — a geography quiz reusing the same map: *Find the capital* and
  *Which is bigger?* (population). Data is **World Bank-sourced** — no invented figures.
- **Compare / Essays** (`#/compare`, `#/essays`) — stubs for the handover's §7 comparison-class
  engine and §8 essays (where the hopeful "climb out" thesis lives).

## Architecture (no build step — handover §10)

Vanilla ES modules, static files. **Data is the truth; JS renders it.**

```
index.html              shell + 4-view hash router
assets/css/*.css        tokens · base · app   (palette/type per §10, OKLCH)
assets/js/*.js          app(router) data map atlas calibrate geography compare essays overlay version sw-register
data/schema/*.json      frozen §6 contracts (event/country/source/compare/essay/geo)
data/world.json         177 country geometries
data/countries/*.json   dual-ledger data per country (+ index.json)
data/calibrate.json     Calibrate Yourself set
data/geo/reference.json capitals + population (World Bank)
notes/                  per-country research logs
manifest.webmanifest, sw.js   PWA (installable, offline; SW cache keyed to the cache-bust token)
build/                  extract.cjs (PoC→JSON) · fetch-geo.mjs · bump-version.mjs · make-icons.sh · watch.sh
BUILD_STATUS.md         resumable build checkpoint
```

## Cache-busting

Content-hashed token fingerprints every asset URL and keys the service-worker cache.

```bash
node build/bump-version.mjs     # re-hash → bump VERSION, ?v= on assets, stamp sw.js (idempotent)
bash build/watch.sh             # auto-bump on save (dev)
```

The build token shows in the bottom-right badge — same token after reload ⇒ you're on the fresh build.

## Editorial guardrails (non-negotiable)

Two ledgers always · tiers classify the act, never the nation · tolls are **sourced ranges**, never bare
numbers · symmetry of scrutiny · **no invented sources** · no national ranking / equivalence machine ·
disease-driven collapse is STR not EXT · paraphrase only. Entries are badged `SEED` / `UNVERIFIED` until a
source pass clears them to `RESEARCHED` / `VERIFIED`.

## Regenerate data

```bash
node build/extract.cjs          # re-extract world geometry + seed ledgers from both_hands.html
node build/fetch-geo.mjs        # re-pull capitals + population from the World Bank API
```
