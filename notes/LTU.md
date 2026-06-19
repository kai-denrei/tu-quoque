# LTU — Lithuania research log

Built from scratch 2026-06-19. Status: RESEARCHED. 3 events (2 victim, 1 perpetrator).

## The dual-lens hinge

Lithuania is one of the cleanest "same event, both columns" cases in the atlas, alongside Austria (AUT). The Holocaust of 1941–1944 appears in BOTH ledgers:
- **Victim (ltu-1):** Lithuania's Jews were near-totally annihilated — >95%, the most complete national destruction in the Holocaust.
- **Perpetrator (ltu-3):** Lithuanian auxiliary units (TDA, Rollkommando Hamann, Ypatingasis būrys) did much of the actual shooting, under German Einsatzgruppen direction.

Care taken on the perpetrator entry: under occupation there was no sovereign Lithuanian state acting; the perpetrators were a population segment — auxiliaries, paramilitaries, collaborators — operating under and alongside German command. This is stated explicitly in the country note, the agent field, and the relevance field so the ledger does not overclaim a "state" crime.

To avoid double-counting: ltu-3's toll (Rollkommando Hamann ~60k; Paneriai ~70k) is a SUBSET of ltu-1's ~190k–195k total, not additive. The toll.note on ltu-3 says so directly.

## Victim ledger

- **ltu-1 Holocaust (EXT):** 208,000–210,000 Jews pre-invasion (Jan 1941); 190,000–195,000 killed, most June–Dec 1941. USHMM gives "about 90 percent"; detailed scholarship (Bubnys, Sužiedėlis) gives >95% — "more complete destruction than befell any other country." Major sites: Paneriai/Ponary (~70k), Ninth Fort Kaunas (~10k in one day, 28 Oct 1941). Range is a death count, not population decline → EXT, narrow undisputed range.
- **ltu-2 Soviet deportations (POL):** ~130,000 deported (1941 + 1945–53), ~20,000–28,000 died in exile. June 1941 first wave ~17,500; Operation Vesna (1948) ~40,000; Operation Priboi (1949) ~29,000. NKVD/NKGB → MVD/MGB, Serov Instructions. Tagged POL (mass political/national persecution by category and quota), not EXT.

## Perpetrator ledger

- **ltu-3 Lithuanian auxiliaries in the Holocaust (EXT):** Rollkommando Hamann (8–10 Germans of EK3 + TDA 3rd company under Bronius Norkus) killed ≥60,000 in the countryside Jul–Oct 1941. Jäger Report: TDA killed ~26,000 Jul–Dec 1941. Ypatingasis būrys (~80 men) did most of the actual shooting at Paneriai (~70,000 Jews; ~80,000–100,000 total with Poles, Soviet POWs, Roma). Dina Porat (Yad Vashem): at the outset Germans killed mostly men, Lithuanians killed unselectively.

## Contested / notes on the numbers

- **Holocaust percentage:** USHMM "about 90 percent" vs. Wikipedia/scholarly ">95 percent." Not a real contradiction — different denominators (with/without 1939–41 Polish refugee influx) and rounding. Marked disputed=false; range 190k–195k holds either way.
- **Deportation deaths:** genuinely contested. ~28,000 total (one full-period accounting) vs. Genocide & Resistance Research Centre's 11,000–16,500 for 1945–1952 alone. I used a 20,000–28,000 range and flagged disputed=true with the breakdown in the note. Deliberately excluded the separate 1944–53 partisan-war killings (est. 20,000–50,000 partisans/supporters) — a distinct event, not folded in to avoid inflating the deportation toll.
- **Paneriai total:** "up to 100,000" (broad) vs. Tomkiewicz's ~80,000 (72,000 Jews). Range captured; Jewish figure ~70,000 used as the load-bearing number.

## Could NOT verify / gaps

- Britannica's Lithuanian-Holocaust page returned HTTP 403 — not used as a source. Did not affect coverage; USHMM + Wikipedia + Jäger Report (primary) cover the figures.
- Did not separately stand up the anti-Soviet partisan war as its own event (would be a candidate 4th victim event, WAR/POL). Left out for now; the broad casualty range (30k–50k, some sources up to 100k including all repression) is wide and would need tighter sourcing. Mentioned in the country note as context only.
- No primary-archive verification of the exact Rollkommando Hamann ≥60,000 figure beyond the Jäger Report and secondary aggregation; flagged via caveats.

## Real sources consulted

- USHMM Holocaust Encyclopedia, "Lithuania" — https://encyclopedia.ushmm.org/content/en/article/lithuania
- Wikipedia, "The Holocaust in Lithuania" — https://en.wikipedia.org/wiki/The_Holocaust_in_Lithuania
- Wikipedia, "Jäger Report" (primary doc transcription) — https://en.wikipedia.org/wiki/J%C3%A4ger_Report
- Wikipedia, "Rollkommando Hamann" — https://en.wikipedia.org/wiki/Rollkommando_Hamann
- Wikipedia, "Ponary massacre" — https://en.wikipedia.org/wiki/Ponary_massacre
- Wikipedia, "Soviet deportations from Lithuania" — https://en.wikipedia.org/wiki/Soviet_deportations_from_Lithuania
- Researching Internal Displacement, "The Mass Deportations of Lithuanians during the Two Soviet Occupations" — https://researchinginternaldisplacement.org/short_pieces/the-mass-deportations-of-lithuanians-during-the-two-soviet-occupations/
- Britannica "75th Anniversary of the Lithuanian Holocaust" — attempted, HTTP 403, NOT used.

## Audit

Adversarial source-integrity + tier audit, 2026-06-19. Methodology: assume every citation FAKE until proven; try to falsify each source (existence of work/author, support for the specific claim attached), confirm dual-source tolls, re-derive every tier independently before reading the assigned one, enforce STR-vs-EXT.

**Verdict: country VERIFIED. All 3 events VERIFIED. No falsifications found, no quarantine notes required.**

### Source-by-source falsification result (all PASS)

- **USHMM "Lithuania"** (ltu-1, supports summary) — REAL. Live-fetched; confirms verbatim "the Germans murdered about 90 percent of Lithuanian Jews, one of the highest victim rates in Europe," prewar ~160,000 rising to ~250,000 with Polish refugees, most killed in first six months, Einsatzgruppen + Lithuanian auxiliaries. Cite accurate. PASS.
- **Wikipedia "The Holocaust in Lithuania"** (ltu-1, supports toll.high) — REAL. Confirms 208,000 as of 1 Jan 1941, 190,000–195,000 murdered, ">95%", "a more complete destruction than befell any other country in the Holocaust," 80,000 by October / 175,000 by year's end. Bubnys + Sužiedėlis cited there as stated. Caveat (tertiary aggregator drawing on named historians) is honest. PASS.
- **Jäger Report** (ltu-1 toll.low; ltu-3 summary) — REAL primary doc. Confirms running tally 137,346 killed 2 Jul–25 Nov 1941; Feb 1942 update 138,272, of which 136,421 Jews (46,403 men / 55,556 women / 34,464 children); Jäger credits Hamann's cooperation with the Lithuanian auxiliaries. Caveat (covers only EK 3 to late Nov 1941, not full 1941–44 toll) correctly disclosed. PASS.
- **Wikipedia "Soviet deportations from Lithuania"** (ltu-2 toll.high) — REAL. Confirms ≥130,000 (table 129,475), June 1941 17,485 / 16,246 traced, Operation Vesna 40,002, Operation Priboi 29,180, ~28,000 deaths (16,500 in 1945–52, 3,500 in 1953–58, 8,000 from 1941). Attribution to Genocide & Resistance Research Centre + Soviet archival records honest. Note: Wikipedia gives population share as ~7.4%, not 4.5% — but the entry's 4.5% comes from the OTHER source (Balkelis) and is not attached to this cite, so no misattribution. PASS.
- **Researching Internal Displacement (Dr. Tomas Balkelis, Lithuanian Institute of History)** (ltu-2 toll.low) — REAL, author identified. Confirms ~130,000 deported (~4.5% of population, per Anušauskas 2012), ~20,000 perished in exile, June 1941 ~17,500, ~112,000 across 34 operations 1945–1953, NKVD lists/quotas, 11,000–16,500 deaths 1945–1952. caveat=null is acceptable: single-author short piece, scholarship properly attributed, no undisclosed bias. PASS.
- **Wikipedia "Rollkommando Hamann"** (ltu-3 toll.low) — REAL. Confirms 8–10 Germans of EK 3 + several dozen Lithuanians of TDA 3rd company under Bronius Norkus; ≥60,000 Jews killed Jul–Oct 1941. The ~26,000 TDA-killed (Jul–Dec 1941, per Jäger Report) figure is on the Lithuanian TDA Battalion article, corroborated by cross-search; the Rollkommando entry attributes it broadly, which is fair. PASS.
- **Wikipedia "Ponary massacre"** (ltu-3 toll.high) — REAL. Confirms ~70,000 Jews (up to 100,000 total with ~2,000 Poles, ~8,000 Soviet POWs), Jul 1941–Aug 1944, Ypatingasis būrys (Lithuanian volunteers, 80 men) doing most of the actual killing; Monika Tomkiewicz's ~80,000 total / 72,000 Jews confirmed. Caveat honest. PASS.

### Country-note collateral claims checked

- **Dina Porat** — REAL person, REAL role (Yad Vashem Chief Historian since 2011), REAL on-topic work ("The Holocaust in Lithuania: Some Unique Aspects," in *The Final Solution: Origins and Implementation*; on Taylor & Francis and as PDF at defendinghistory.com). The specific "Germans killed mostly men at the outset, Lithuanians killed unselectively" line could not be word-for-word verified (paywalled / binary PDF), but it is a recognized thesis of her work and it lives ONLY in the country note, attached to no event toll/tier/summary — so it is not load-bearing for any verification. No status impact.
- **Ninth Fort, 29 Oct 1941** ("nearly 10,000 in a single day") — verified at 9,200 (2,007 men, 2,920 women, 4,273 children), derived from the already-cited Jäger Report. Fair rounding; consistent.

### Toll dual-source check

- ltu-1: low (Jäger anchors scale; 190k from WP/scholarly) + high (WP/Bubnys-Sužiedėlis), USHMM corroborates — both ends sourced. disputed=false defensible (range narrow, deliberate killing).
- ltu-2: low (Balkelis/Anušauskas, ~20k) + high (WP/GRRC, ~28k) — both ends sourced; disputed=true correctly flagged; genuine spread acknowledged.
- ltu-3: low (Rollkommando Hamann ~60k) + high (Paneriai ~70k) — two distinct sub-events, each independently sourced; disputed=false correct; toll.note correctly states these are a SUBSET of ltu-1 (no double-count).

### Independent tier re-derivation (done before reading assigned tiers)

- ltu-1 → EXT. Deliberate near-total annihilation of a group as such by shooting. Assigned EXT. CORRECT. STR rule N/A (not disease-driven — these were mass shootings).
- ltu-2 → POL. Forced removal by national-political category (nationalists/kulaks/partisan families) to lethal exile; event class is political deportation, not a disease/famine event, so POL not STR even though exile deaths were cold/hunger/disease. Assigned POL. CORRECT.
- ltu-3 → EXT. Hands-on extermination of a people as such by Lithuanian-manned units. Assigned EXT. CORRECT. Perpetrator entry correctly scoped to a population segment (auxiliaries), not a sovereign state.

All tiers correct; no tier or tier_reasoning changes made. Both ledgers populated (victim ltu-1/ltu-2, perpetrator ltu-3); the dual-lens "same event both columns" is honest, with explicit no-double-count note. No invented sources introduced; statuses lifted RESEARCHED → VERIFIED on all events and on the country.
