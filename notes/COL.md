# Colombia (COL) — research notes

Built from scratch on 2026-06-18. Four events: 2 victim, 2 perpetrator. Country status RESEARCHED (one event UNVERIFIED).

## Ledger summary

### Done to them (victim)
- **col-1 — Demographic collapse of indigenous New Granada (c. 1525–1630), STR.** Status UNVERIFIED.
- **col-2 — La Violencia (c. 1948–1958), POL.** Status RESEARCHED.

### In their name (perpetrator)
- **col-3 — "False positives" extrajudicial killings (c. 2002–2008), POL.** Status RESEARCHED. The sharpest, best-documented act done BY the state.
- **col-4 — State forces' share of the armed conflict (1958–present), WAR.** Status RESEARCHED. State as one perpetrator among several, deliberately not inflated.

## What is contested

- **Colonial collapse toll (col-1).** The ~5.25M dead / 87.5% decline figure is a population-DECLINE estimate, not a counted death toll, and rests on a contested pre-Columbian baseline (low ~3M, common ~6M, high 10–12M). Overwhelmingly disease-driven, hence STR not EXT. Numeric low left null; high (5.25M) is a single widely-repeated estimate. This is why the event is marked UNVERIFIED.
- **La Violencia toll (col-2).** Sharp scholarly divergence. Traditional/canonical: 200,000–300,000 dead. Banco de la República demographic re-estimate (census + vital records): ~39,142–57,737 for 1949–58 (~80,498–113,032 if extended to 1966). I set the toll range to span the conservative demographic low (39,142) to the traditional high (300,000) and flagged disputed=true. The revisionist study argues the canonical figures are unverified inheritances.
- **Armed-conflict overall toll (col-4).** Two non-additive figures cover different periods: CNMH ~220,000 dead (1958–2013, 177,307 civilians); Truth Commission ~450,000 fatalities (1985–2018, ~80% civilian). I did NOT collapse these into one number.
- **State's share (col-4).** Truth Commission 2022 attribution of civilian deaths: paramilitaries ~45%, guerrillas ~27%, state agents ~12%, other/mixed ~16%. I deliberately left numeric low/high null rather than multiply 12% by either contested total — that would be an inference, not a sourced count.
- **False positives count (col-3).** Rose over time as the JEP investigated: HRW earlier "over 3,000" (2002–08) → JEP 6,402 (2002–08) → 7,837 (1990–2016). Range set 3,000–7,837, disputed=true.

## What could NOT be verified / fully sourced

- The original full texts of Jaramillo Uribe (1989) and the Banco de la República "Decline of the indigenous population in Colombia, 1500–1630" were NOT directly fetched; the 5.25M / 87.5% figures are taken as reported by the Wikipedia conquest-of-New-Granada article (cited as a tertiary aggregator with that caveat). No direct URL for the Jaramillo Uribe source — url set null.
- The HRW ">3,000" figure (col-3 low) was read at second hand via the false-positives aggregator, not from an HRW primary page directly — caveat noted in the source object.
- No clean published absolute number of state-caused conflict deaths exists; recorded as a percentage share instead.

## Tier reasoning

- **col-1 STR** — disease-driven demographic collapse, not deliberate group destruction (per the inviolable law disease collapse = STR).
- **col-2 POL** — partisan political slaughter / massacre, multi-sided, not conventional war or group-extermination.
- **col-3 POL** — state-organized extrajudicial killing for institutional/political gain.
- **col-4 WAR** — wartime atrocity/abuse within counterinsurgency; staged killings broken out separately to col-3.

## Real sources consulted (live during research)

- Wikipedia: "La Violencia"; "Colombian conflict"; "'False positives' scandal"; "Spanish conquest of New Granada"; "Indigenous peoples in Colombia" — all fetched/searched.
- Banco de la República (investiga.banrep.gov.co): "Análisis demográfico de la Violencia en Colombia" — fetched; gives the revised 39,142 / 57,737 figures.
- Justice for Colombia: "Colombian military murdered 6,402 civilians between 2002 and 2008" and "JEP ... 7,837 victims" — fetched; flagged as advocacy source, figures originate with the JEP.
- Colombia Truth Commission Final Report (2022), via ABColombia executive summary and WOLA analysis — actor-responsibility shares.
- CBC News, "Colombia's guerrilla war killed 260,000, report says" — corroborating overall toll.
- Statista / CNMH figures (220,000, 1958–2013) cross-checked via search.

## Notes for future revision

- col-1 could be strengthened by fetching the Banco de la República "Decline of the indigenous population 1500–1630" study directly to confirm the 5.25M / 87.5% / 750,000 figures and find a defensible LOW bound; until then it stays UNVERIFIED.
- A standalone massacre entry (e.g. Bojayá 2002, or a specific army/paramilitary collusion case) could be added if the atlas wants finer granularity than the aggregate col-4.
- The 2024+ status of JEP sentencing of senior officers could be tracked for the false-positives entry.

## Audit

Adversarial source-integrity + tier audit, 2026-06-18. Premise: every citation assumed fake until proven otherwise. Each source was actively falsified against live web checks.

**Verdict: country UNVERIFIED. 3 of 4 events VERIFIED (col-2, col-3, col-4); col-1 held UNVERIFIED. 0 events flagged for fabricated/unsupported sources.**

### col-1 — Demographic collapse (STR) — UNVERIFIED (sustained)
- Source check: the Wikipedia "Spanish conquest of New Granada" article was fetched and CONFIRMED to carry the 5.25M dead / 87.5% decline figure and to cite Jaramillo Uribe (1989) and the Banco de la República study "Caída de la población indígena en Colombia, 1500–1630: tres escenarios." Sources are real, not fabricated, and support the toll.high they are attached to.
- Why still UNVERIFIED: single-source, single-number toll; null low bound (correctly — no defensible minimum exists); rests on a contested pre-Columbian baseline (3M / 6M / 10–12M); underlying scholarly texts not directly fetched. The toll cannot be independently confirmed, so it stays quarantined. Added an explicit QUARANTINE note to toll.note.
- Tier: STR re-derived independently and CONFIRMED — overwhelmingly disease-driven collapse, not deliberate group destruction. Correctly NOT EXT.

### col-2 — La Violencia (POL) — VERIFIED (was RESEARCHED)
- toll.high (200,000–300,000): CONFIRMED verbatim against Wikipedia "La Violencia" ("at least 200,000"; "between 200,000 and 300,000 people died"). Dates 1948–1958 and perpetrators (Chulavitas, Pájaros, Liberal/Communist guerrillas) confirmed.
- toll.low (39,142 / 57,737): CONFIRMED verbatim against the Banco de la República study, which gives 57,737 (standard) / 39,142 (conservative) for 1949–1958, 113,032 / 80,498 extended to 1966, and EXPLICITLY states its figures "controvierten las más de 200 mil víctimas... o las 300 mil." Both ends of the contested toll independently sourced. Tier POL confirmed.

### col-3 — "False positives" (POL) — VERIFIED (was RESEARCHED)
- toll.high (7,837, 1990–2016): CONFIRMED. The cited JFC article exists; figure independently corroborated by The Bogotá Post, El Colombiano, Cambio, and JEP President Alejandro Ramelli's April 2026 announcement. Corrected the source URL to the actual 7,837 article (the JSON previously listed only the 6,402 URL for a source object claiming both).
- toll.low (HRW "at least 3,000"): CONFIRMED against HRW's primary 2015 report "On Their Watch," which cites "at least 3,000" for 2002–2008 (prosecutors investigating 3,700+). The HRW attribution is CORRECT (some aggregators also attribute "over 3,000" to FIDH May 2012; HRW independently establishes the same floor). Replaced the second-hand Wikipedia URL with the primary HRW report URL.
- 6,402 (2002–2008) and Uribe-era context and method confirmed via Wikipedia + JFC. Tier POL confirmed (staged murder of non-combatants for institutional gain; not WAR, not EXT).

### col-4 — State share of the armed conflict (WAR) — VERIFIED (was RESEARCHED)
- Responsibility split (paramilitaries 45% / guerrillas 27% / state 12% / other 16%) and CNMH 220,000 (1958–2013, 177,307 civilians) and Truth Commission 450,000 (~80% civilian): all CONFIRMED against Wikipedia "Colombian conflict" and the Truth Commission summary.
- CBC source: the cited URL returned HTTP 403 to the fetcher, but the article's existence and content (CNMH 260,000+ deaths, mostly civilians, mostly killed by non-state actors) were CONFIRMED via search. Added a caveat noting the 260,000 figure is broader than the 220,000 count and corroborates scale, not a precise state share. URL retained — it resolves in a browser.
- Numeric low/high correctly left null: recording the % share rather than multiplying it into an invented count is the honest call. No fabricated balance demanded. Tier WAR confirmed (wartime atrocity within counterinsurgency; deliberate staged killings correctly broken out to col-3).

### Cross-cutting
- No invented sources found. No source failed an existence check. The only attribution wrinkle (HRW vs FIDH for "over 3,000") resolved in favour of the JSON: HRW independently supports the figure.
- STR-vs-EXT discipline holds: col-1 disease collapse correctly STR, not EXT.
- Country status set UNVERIFIED because col-1 remains UNVERIFIED (one un-VERIFIED event forces the country down).
