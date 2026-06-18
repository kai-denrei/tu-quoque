# TU QUOQUE — build status (resumable checkpoint)

> **Token-interruption-robust contract:** this file is the single source of truth for
> "what is done / what is next". A fresh session reads this file first, then continues.
> Every research/build agent writes its output to **disk** (JSON/MD), never only to chat.
> The site renders whatever JSON exists and badges incomplete data (`SEED`/`UNVERIFIED`).

Last updated: 2026-06-18 (session 1)

---

## Goal

Localhost v1 of **Tu Quoque** — "All the Way Down — Until Societies can Climb Out" /
"escaping the cycles of historical blame". An educational atlas: dual-ledger atrocity map
(handover spine) + a geography quiz on-ramp (capitals/population, all ~190 mapped countries).
Expand from PoC `both_hands.html`; brief in `TU_QUOQUE_HANDOVER.md`.

## Locked decisions (session 1, user-confirmed)

- **Scope:** atlas spine + geography on-ramp. Nav: Map · Learn(Geography) · Compare* · Essays* (* = stub).
- **Research depth:** HEAVY — full §9 dispatch (country researchers + toll/tier/source-integrity auditors) on the 12 seed countries. Essays deferred.
- **Geo coverage:** all ~177 mapped countries get capitals + sourced population.
- **Stack:** vanilla ES modules, no bundler. SVG + Canvas. Static files. (handover §10)
- **Cache-busting + PWA + mobile:** required (skills invoked).

---

## Phase ledger

Legend: ☐ todo · ◐ in progress · ☑ done · ⚠ blocked

### P0 — Foundation (durable, mechanical)
- ☑ Directory tree
- ☑ Extract WORLD geometry → `data/world.json` (177 features)
- ☑ Extract 12 seed ledgers → `data/countries/*.json` (status SEED)
- ☑ Extract calibration → `data/calibrate.json`; tiers → `data/tiers.json`
- ☑ Freeze §6 schemas → `data/schema/*.json`
- ☑ deban memory initialized → `.deban/`
- ☑ Design doc → `docs/superpowers/specs/2026-06-18-tu-quoque-v1-design.md`

### P1 — Working static site (lookable v1, seed data)  ✅ DONE
- ☑ `index.html` shell: header (Tu Quoque + subtitles), 4-view hash-nav, deep-link `#/map/<ISO>`
- ☑ Design tokens + base CSS (palette/type from handover §10, frontend-design pass)
- ☑ `map.js` — render world.json (177 paths verified), hover, click→panel
- ☑ `atlas.js` — dual-ledger country panel (teal victim / amber perpetrator) — verified COD/JPN
- ☑ `calibrate.js` — Calibrate Yourself quiz
- ☑ `geography.js` — geo quiz (capitals + "which is bigger?" population) reusing the map — verified
- ☑ Compare + Essays stub views (surface the hopeful "climb out" thesis)
- ☑ Cache-busting (content-hashed token, ?v= fingerprint, idempotent, version badge)
- ☑ PWA (manifest + hand-written SW keyed to token, offline.html, iOS tags, icons 192/512/maskable/180)
- ☑ Serve on localhost:8848 + verify (headless DOM + 3 screenshots; desktop excellent, mobile structure ok)

NOTE: headless `--window-size` does NOT emulate a true mobile layout viewport (clamp() vw resolves large),
so the mobile screenshot over-sizes the masthead. Real-device check still advised. CSS is sound (100vw cap + min-width:0).

### P2 — Heavy research (§9), enriches site incrementally
Per-country state tracked in `notes/_research_status.json` (written by orchestrator).
- ☑ Geo reference data: capitals + population (165 countries, World Bank-sourced) → `data/geo/reference.json`
- ☑ Country researchers (12) + adversarial auditors — Workflow `wf_fe0760aa-ceb` COMPLETE
      (toll-range + tier + source-integrity consolidated into one adversarial audit stage per country).
      Result: 10 VERIFIED, 2 UNVERIFIED (COD, ESP) — both UNVERIFIED are HONEST: agents refused to invent a
      death toll for the Kongo slave trade (cod-2) and the 711 Umayyad conquest (esp-2), holding them rather
      than fabricating (law 6 validated). 40 events, all with received_lens + tier_reasoning, ~140 sources.
      Each agent wrote `data/countries/{iso}.json` + `notes/{iso}.md` to disk. All 12 re-validated as valid JSON.
- ☑ Derived `notes/_research_status.json`; regenerated `data/countries/index.json` (40 events).

### P3 — Integration + polish  ✅ DONE
- ☑ Wire researched data into UI: structured toll ranges, `received_lens` chip, `tier_reasoning` on hover,
      linkable sourced URLs, honest status badges (VERIFIED/UNVERIFIED). Verified via CHN screenshot.
- ☑ Renderer degrades gracefully on UNVERIFIED/null-toll events (COD/ESP).
- ☑ Final cache-bust (token 26b71bbc) + localhost verification.
- carry-over: real-device mobile eyeball (headless can't emulate mobile viewport — see dev.md lessons).

---

## Per-country research status
(Authoritative copy lives in `notes/_research_status.json`; this is a human mirror.)

| ISO | events | final | note |
|-----|--------|-------|------|
| CHN | 5 | VERIFIED | +Dzungar genocide (EXT) added |
| DEU | 4 | VERIFIED | +Herero/Nama genocide (EXT) added |
| GBR | 5 | VERIFIED | |
| JPN | 4 | VERIFIED | |
| MEX | 4 | VERIFIED | |
| USA | 4 | VERIFIED | |
| KHM RWA TUR MDG | 2 each | VERIFIED | |
| COD | 3 | UNVERIFIED | cod-2 Kongo slave trade has no sourceable death toll (held, not invented) |
| ESP | 3 | UNVERIFIED | esp-2 Umayyad 711 conquest has no sourceable death toll (held, not invented) |

### P4 — UI refinements (user feedback, 2026-06-18)  ✅ DONE
- ☑ Learn quiz auto-advances on answer (1.6s reveal, no "next" button).
- ☑ Masthead collapsed to a compact sticky bar (brand · nav · ⓘ) on all screens; mobile wraps nav to row 2.
- ☑ Removed the standfirst line.
- ☑ Moved subtitles + Japanese epigraph into the ⓘ "about this site" panel.
- ☑ Trimmed copy across learn intro, Compare, Essays, ⓘ panel.

### P5 — All-countries research campaign (batched for budget)
Geo-reference has 165 countries; 12 done in the first §9 run → **153 to research**. Run in budget-sized
batches (5h window was at 53% when starting), most-populous first. Script (reusable per batch, takes a
`[[iso,name],...]` batch via args OR hardcoded fallback):
`.../workflows/scripts/tuquoque-research-batch-wf_05ab9fd4-388.js`
- ☑ **Batch 1** (run `wf_047ae8a6-5db`): IND IDN PAK NGA BRA BGD RUS ETH PHL EGY VNM IRN THA TZA ZAF → 6 VERIFIED, 9 UNVERIFIED (mostly honest null/contested tolls). Integrated.
- ☑ **Batch 2** (run `wf_4c1d5a41-6f4`): ITA KEN MMR COL KOR SDN UGA DZA ARG IRQ AFG CAN YEM UKR MAR → 7 VERIFIED, 8 UNVERIFIED. Integrated + pushed.
- ☑ **Batch 3** (run `wf_4c87dede-f48`): AGO POL UZB MYS PER GHA SAU MOZ CIV NPL CMR VEN AUS PRK NER → 7 VERIFIED, 8 UNVERIFIED. Integrated + pushed.
- **PROGRESS: 57 / 165 done (batches 1–3). 108 remaining.** 218 events, 613 sources, 0 invalid. Status: 30 VERIFIED, 27 UNVERIFIED.
- ⏸ Cooldown after batch 3 (5h at 83%). Pending wakeup resumes once 5h ages below ~50%, then chains batches back-to-back. User OK'd free budget use (weekly resets next day).
- ☐ Batches 2…N: after each, regenerate `data/countries/index.json`, validate JSON, `node build/bump-version.mjs`, check 5h budget before the next. RESUME a stuck batch via resumeFromRunId.
- NEXT-BATCH RECIPE: `node -e` over data/geo/reference.json minus existing data/countries/*.json, sort by population,
      take next ~15, edit the fallback array in the batch script (or pass args), re-invoke Workflow.

## How to resume
1. Read this file + `notes/_research_status.json`.
2. Find first ☐ in the phase ledger; do it; flip to ☑; write outputs to disk.
3. For P2: dispatch only countries whose `data/countries/{iso}.json` still has `status:SEED` or null tolls.
4. `bash serve.sh` to view localhost; verify before claiming done.
