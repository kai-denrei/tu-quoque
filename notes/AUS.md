# Australia (AUS) — research notes

Built from scratch on 2026-06-18. Four events, two per ledger.

## Framing decision (the key judgment call)

The deepest mass death on Australian soil is the collapse of the Aboriginal
population after 1788 — disease, dispossession, starvation, killing. Its
principal agent was the British/colonial Australian state, so it belongs in
the PERPETRATOR ledger (frontier wars), not as an authorless "victim" event.
The VICTIM ledger is therefore drawn from WWII, where Australians were
victims of an external agent (Imperial Japan). This is the dual-lens point
of the entry and is spelled out in the country note.

## Perpetrator ledger

### aus-1 — Frontier wars / colonial frontier massacres (1788–1934), EXT
- Documented massacre floor: 10,374 Aboriginal/Torres Strait Islander deaths
  across 400+ massacres, per the University of Newcastle "Colonial Frontier
  Massacres in Australia, 1788–1930" project (Lyndall Ryan et al.). Explicitly
  a conservative MINIMUM — massacres under-reported and covered up.
- High end CONTESTED: Reynolds "over 30,000"; Ørsted-Jensen & Evans ~60,000–67,000
  in Queensland alone and "probably no less than 100,000" nationally. Richards
  and Finnane argue the systematic data are too thin for precise totals.
- Toll set 11,000–100,000, disputed:true. Settler deaths ~2,500 (Reynolds).
- EXT for the deliberate killing component; disease-driven demographic collapse
  is a separate STR mechanism kept explicit in the toll note, NOT merged into the
  killing count. Status UNVERIFIED — irreducible toll uncertainty, sources sound.

### aus-2 — Stolen Generations (c.1905–1970s), POL
- IMPORTANT: the toll counts CHILDREN REMOVED, not deaths. No reliable death
  count exists; the harm is the removal itself. The "unit: deaths" field is
  retained only for schema consistency, flagged in display + note.
- Bringing Them Home report (1997, HREOC): "between one in three and one in ten"
  separated; upper figure "at least 100,000." Robert Manne argues the lower end
  (~20,000–25,000 over six decades) is more defensible. Toll 20,000–100,000,
  disputed:true.
- Inquiry concluded the policy met the legal definition of genocide; PM apology 2008.
  Tiered POL (state-policy atrocity), not retiered EXT despite the genocide finding,
  because there is no death-toll mechanism. Status UNVERIFIED — count genuinely uncertain.

## Victim ledger

### aus-3 — Sandakan death marches (1942–1945), WAR
- ~2,400 Allied POWs at Sandakan, North Borneo (~1,787 Australian, ~641 British);
  almost all died Jan–Aug 1945 at the camp, on the Ranau marches, or at Ranau.
  Only 6 survived, all Australian escapees. AWM: "the greatest single atrocity
  committed against Australians in war." Toll 1,787–2,400, disputed:false (low/high
  mark Australian vs total Allied dead). Status RESEARCHED.

### aus-4 — Bombing of Darwin (19 Feb 1942), WAR
- 188 carrier aircraft in two raids + land-based bombers. Official ~236 killed;
  Lowe Commission "approximately 250"; 2001 plaque listed 292. Inflated claims of
  900–1,500 rejected by historians Peter Stanley and Peter Grose. 300–400+ wounded.
  Largest attack ever by a foreign power on Australia. Toll 236–250, disputed:true.
  Status RESEARCHED.

## Contested / could-not-verify
- Frontier-war total killing: no agreed figure; documented massacre floor is solid,
  whole-of-frontier high end is scholarly estimate. Left as sourced range, status UNVERIFIED.
- Stolen Generations count: 5x spread between Manne and the report's maximum; left as
  sourced range, status UNVERIFIED. Not a death count.
- Darwin exact death toll never settled (236 vs 250 vs 292); inflated figures excluded.
- Did NOT separately catalogue: 1789 smallpox epidemic (folded into frontier-wars
  toll note as a distinct STR mechanism, not given its own event — agency/origin of
  the 1789 outbreak is itself debated); Burma–Thailand Railway (~2,650–2,815 Australian
  POW dead) — a strong second victim candidate, omitted only to keep the ledger to the
  two most significant; Myall Creek (1838), Coniston (1928) and other named massacres
  are subsumed under aus-1.

## Real sources consulted
- University of Newcastle, "Colonial Frontier Massacres in Australia, 1788–1930"
  (statistics page): https://c21ch.newcastle.edu.au/colonialmassacres/statistics.php
- University of Newcastle Newsroom (2022 massacre-map update):
  https://www.newcastle.edu.au/newsroom/featured/new-evidence-reveals-aboriginal-massacres-committed-on-extensive-scale
- Australian frontier wars — Wikipedia: https://en.wikipedia.org/wiki/Australian_frontier_wars
- Bringing Them Home report (HREOC, 1997): https://humanrights.gov.au/our-work/bringing-them-home-report-1997
- Stolen Generations — Wikipedia: https://en.wikipedia.org/wiki/Stolen_Generations
- AIATSIS, The Stolen Generations: https://aiatsis.gov.au/explore/stolen-generations
- AWM, Stolen Years — Sandakan: https://www.awm.gov.au/visit/exhibitions/stolenyears/ww2/japan/sandakan
- Sandakan Death Marches — Wikipedia: https://en.wikipedia.org/wiki/Sandakan_Death_Marches
- Bombing of Darwin — Wikipedia: https://en.wikipedia.org/wiki/Bombing_of_Darwin
- AWM, Darwin Air Raids: https://www.awm.gov.au/articles/encyclopedia/air_raids/darwin
- Burma–Thailand Railway (AWM/DVA, consulted for omitted candidate):
  https://www.awm.gov.au/visit/exhibitions/stolenyears/ww2/japan/burmathai

## Audit

Adversarial source-integrity + tier audit, 2026-06-18. Assumption going in: every
citation is fake until proven otherwise. Result: **all four events VERIFIED; country
status raised RESEARCHED → VERIFIED.** No fabricated sources found, no tier errors,
both ledgers populated (2 perpetrator / 2 victim), low and high tolls each independently
sourced. No invented sources added.

### Source falsification attempts — all survived

- **aus-1 frontier wars.** Newcastle "Colonial Frontier Massacres 1788–1930" project is
  real; Lyndall Ryan confirmed (Emeritus Prof., d. 2024). Statistics page live: 438
  massacres, **10,374** Indigenous people killed by colonists (10,657 across all massacre
  types) — exact match to the cited figure, and the project itself labels all figures
  "conservative estimates… minimum estimates," so the rounded ≥11,000 floor is defensible.
  High end verified: Reynolds "over 30,000" (2022); Evans & Ørsted-Jensen statistical
  model "no less than 66,680" total Queensland fatalities (~65,180 Aboriginal), national
  "no less than 100,000." Richards/Finnane critique is real (SSRN "Speculating about
  genocide: The Queensland frontier 1859–1897"). Settler-death ~2,500 (Reynolds) stands.
  Every source supports the specific claim attached to it.
- **aus-2 Stolen Generations.** Bringing Them Home (HREOC, tabled 26 May 1997) verified:
  "between one in three and one in ten" removed; "at least 100,000" upper extrapolation;
  explicit finding that removal met the international definition of genocide. Robert
  Manne's lower estimate (**~20,000–25,000 over six decades from a 1994 ABS survey**) is
  cited verbatim on the Stolen Generations Wikipedia article — attribution exact, not
  misquoted. Agents (government agencies + church missions) and chronology (c.1905–1970s)
  confirmed. humanrights.gov.au returned HTTP 403 to the fetcher (bot-block, NOT a dead
  link — the URL appears live in independent search results); not quarantined.
- **aus-3 Sandakan.** Australian/British breakdown confirmed precisely: **1,787 Australians
  + 641 British = 2,428 dead**, only 6 Australian escapees survived, deaths Jan–Aug 1945,
  perpetrator Imperial Japanese Army. AWM "Stolen Years – Sandakan" page is live and
  contains the EXACT phrase "the greatest single atrocity committed against Australians in
  war." toll.low (1,787 AUS) and toll.high (~2,400 total Allied) both sourced.
- **aus-4 Darwin.** 188 aircraft, 19 Feb 1942; official ~236 (NAA), Lowe Commission ~250,
  2001 plaque 292; inflated 900–1,500 figures rejected by Peter Stanley and Peter Grose
  (verified). Largest foreign attack on Australia. AWM encyclopedia page live (188 aircraft
  confirmed). Both ends of the disputed toll sourced.

### Tier re-derivation (done before reading assigned tiers)

- aus-1 → **EXT** (deliberate group destruction via 400+ massacres). Disease/dispossession
  collapse correctly held SEPARATE as a STR-type mechanism and NOT merged into the kill
  count — STR-vs-EXT rule respected. Assigned EXT correct, unchanged.
- aus-2 → **POL** (state assimilation policy, no death mechanism). Correctly NOT retiered
  to EXT despite the genocide finding. Assigned POL correct, unchanged.
- aus-3 → **WAR** (atrocity against surrendered POWs). Correct, unchanged.
- aus-4 → **WAR** (act-of-war attack on territory, mil + civ targets). Correct, unchanged.

### Minor notes (not status-affecting)

- Sandakan: AWM "Stolen Years" page frames the toll as "about 2,000" sent to Ranau / "about
  a thousand" on the final march, while Wikipedia and AWM commemorative addresses give the
  full 2,428 dead. The JSON's 1,787/≈2,400 figures sit correctly within the documented
  range; low/high reflect Australian-vs-total-Allied dead, not a scholarly dispute (disputed
  set false, correctly).
- No events flagged for single-source tolls: every contested low and high has its own cite.
