# Moldova (MDA) — research log

Built from scratch on 2026-06-19. Web tools (WebSearch/WebFetch) loaded and used for all figures.

## Structure
- 3 victim events, 1 perpetrator event. The asymmetry is real and is explained in the country `note`: an independent Moldovan state has existed only since 1991, so there is almost no "in their name" record. Crimes committed ON Bessarabian soil before 1991 belong to the Russian Empire (1907), Romania (1941 Holocaust), and the USSR (deportations, famine) — credited to those states, not Moldova.

## Victim ledger
1. **Holocaust of Bessarabian Jewry (1941-44)** — EXT. Perpetrator was the Romanian state (Antonescu), not Germany alone; this is firmly a victim event for Moldova's people. Wiesel Commission: 45,000-60,000 killed in Bessarabia/Bukovina in 1941; Yad Vashem: 105,000-120,000 deportees died in Transnistria. Toll range 45,000-120,000, disputed (Bessarabia and Transnistria counts overlap in the literature). Status RESEARCHED.
2. **Soviet mass deportations (1941-1951)** — POL. NKVD June 1941 (~22,648) and MGB "Operation South"/Iug July 1949 (~35,796, incl. ~11,899 children, under Gen. Mordovets), plus 1951 wave. Figures from historian Igor Casu via the former KGB archive of the MSSR. These are DEPORTATION counts, not death counts — I could not source a defensible aggregate death toll, so toll.high = null and the event is marked UNVERIFIED on deaths.
3. **Soviet Moldavian famine (1946-47)** — STR (drought + ruinous grain requisitioning, not deliberate group destruction). Cormac O Grada (2019): ~100,000 deaths in MSSR (low). Moldovan historians/commemorations: ~123,000 up to ~200,000 / ~10% of population (high). Disputed. Status RESEARCHED.

## Perpetrator ledger
4. **Moldovan forces in the Transnistria War (1992)** — WAR. The ONE event where Moldova's own state/forces were a belligerent. Two-sided conflict: ~1,100 total dead, ~279-324 Moldovan combatants, ~316-637 civilians (both sides). The Russian HR center "Memorial" documented abuses by Moldovan forces in Bender (firing on houses/civilians, beating prisoners) — and by the Transnistrian/Russian side. Ledgered as perpetrator because it is the only documented case of Moldovan state agency, not to force balance. Status RESEARCHED, lens "contested."

## Contested / could not verify
- **Deportation death toll**: total deaths in Siberian/Kazakh exile are agreed to have been high but no defensible aggregate number found — left null, event UNVERIFIED.
- **"~500,000 deportees" figure**: cited by moldova.org for all of Soviet rule, but mixes annexed-territory (incl. partly Ukrainian Northern Bukovina/Hertsa) and "planned transfer" categories; the "300,000 in June 1941" figure likewise covers all annexed territories, not the MSSR alone. I used the narrower, scholarly MSSR-specific counts (22,648 / 35,796) instead.
- **Famine toll**: genuine scholarly vs. national-memory divergence (100,000 vs. up to 200,000) — shown as a disputed range.
- **Transnistria War civilian attribution**: which side killed which civilians is contested; "Memorial" allegations are not independently court-verified.

## Real sources consulted
- Elie Wiesel Commission (International Commission on the Holocaust in Romania), Final Report 2004 — via Wikipedia summary + Yad Vashem.
- Yad Vashem, "Murder of the Jews of Romania."
- USHMM Holocaust Encyclopedia — "Romania," "Transnistria Governorate."
- Securitas Imperii Journal (2021), mass deportation of June 1941 from Bessarabia/MSSR.
- Wikipedia, "1949 Soviet deportations from Moldavian SSR" (Igor Casu / KGB archive figures).
- Balkan Insight (2018), Stalin deportations commemoration in Moldova.
- Wikipedia, "Soviet famine of 1946-1947" (O Grada ~100,000 MSSR figure).
- IPN.md, "The famine of 1946-1947" (Moldovan historians up to ~200,000).
- Wikipedia, "Transnistria War" and "Battle of Bender (1992)" (casualty breakdown; Memorial report on conduct).
- moldova.org (deportation context — used cautiously due to mixed-category totals).

## Tools note
WebFetch returned 403/404 on grokipedia and one ushmm path; figures were cross-checked across at least two independent sources where possible. No source, number, author, or URL was invented.

## Audit
Adversarial source-integrity + tier audit, 2026-06-19 (assume every citation fake until proven otherwise; WebSearch/WebFetch used throughout).

**Verdict: country UNVERIFIED. 3 of 4 events VERIFIED; mda-2 quarantined UNVERIFIED. 0 events flagged for source fabrication — every source proved real and on-topic.**

### mda-1 Holocaust of Bessarabian Jewry — VERIFIED (was RESEARCHED), tier EXT upheld
- Wiesel Commission Final Report 2004: confirmed to exist; its 45,000-60,000 Bessarabia/Bukovina-1941 figure (toll.low) and overall 280,000-380,000 total independently confirmed.
- Yad Vashem "Murder of the Jews of Romania": confirmed; cites 120,000 deportees perished in Transnistria (toll.high). 
- USHMM "Transnistria Governorate": confirmed live; supports the deportation/death-by-deprivation summary.
- Tier re-derived independently as EXT (deliberate targeted destruction of a group by intent) BEFORE reading the assigned tier — matches. Both toll ends sourced.

### mda-2 Soviet Mass Deportations — stays UNVERIFIED (correct self-quarantine), tier POL upheld
- Securitas Imperii Journal article by Igor Cașu: confirmed real and on-topic (abstract verified; author confirmed).
- June 1941 ~22,648 MSSR-specific count: independently confirmed (3,470 families / 22,648 persons). The narrower MSSR figure was correctly chosen over the broader 29,839 (which folds in Ukrainian Chernivtsi/Izmail oblasts) and the contested ~300,000/~500,000 mixed-category totals.
- 1949 Operation South: 35,796 deported incl. 11,899 children under Gen. Mordovets, per Igor Casu/KGB archive — confirmed across multiple independent sources. (The exact Wikipedia URL 404'd on WebFetch, a fetch-layer artifact; the article is real and cross-referenced from other WP pages, and the figures are triple-confirmed.)
- Balkan Insight 2018: confirmed to exist (page title on site is "Moldova Remembers Victims of Stalin's Deportations"; URL exact; supports memorial reception only, bias disclosed).
- WHY STILL UNVERIFIED: unit is "deaths" but every sourced number is a deportation/displacement count, not a death count; toll.high is null and no defensible aggregate exile death toll could be sourced. Sources are clean — the toll is the problem. Quarantine note added to toll.note.
- Tier re-derived independently as POL (categorical political mass repression — kulaks/nationalists/"unreliable" — not group-destruction-by-intent, not disease-driven) — matches.

### mda-3 Soviet Moldavian Famine 1946-47 — VERIFIED (was RESEARCHED), tier STR upheld
- Wikipedia "Soviet famine of 1946-1947": confirmed; attributes ~100,000-115,000 MSSR deaths to Cormac Ó Gráda (2019) (toll.low) and names grain confiscation "at any price to human life" as the primary driver over drought.
- IPN.md famine article: confirmed to exist; states "almost 200,000" died, with archival ~123,000/~5% and village-level ~10% loss (toll.high). National-memory bias disclosed in caveat.
- Tier re-derived independently as STR (policy/structural famine: drought compounded by ruinous requisitioning, NOT a deliberate attempt to destroy a defined group) BEFORE reading assigned tier — matches. Note: Moldovan national memory frames it as a "Moldavian Holodomor"/genocide (would imply EXT); the scholarly + disputed framing supports STR. STR upheld; not inflated to EXT. Both toll ends sourced.

### mda-4 Moldovan Forces in the Transnistria War — VERIFIED (was RESEARCHED), tier WAR upheld
- Wikipedia "Transnistria War": confirmed; casualty breakdown matches the JSON exactly (279-324 Moldovan killed, 364-913 Transnistrian/Russian, 316-637 civilians). Both contested toll ends sourced.
- Wikipedia "Battle of Bender (1992)" + Memorial report: the Human Rights Center "Memorial" field investigation (2-30 July 1992) is real; its finding that Moldovan troops fired heavy machine guns at houses/courtyards/cars and civilians in Bender is confirmed across the Bender and Transnistria War articles. (A thin WebFetch render initially missed this; resolved via direct search.) Memorial explicitly concluded NO systematic extermination — criminal indiscriminate shelling, not genocide.
- Tier re-derived independently as WAR (two-sided armed conflict, civilian deaths from urban combat; Memorial's "no extermination" finding rules out a group-destruction tier) — matches.

### Cross-cutting findings
- No invented sources, authors, numbers, or URLs found anywhere. Every citation falsification attempt failed — i.e. all sources survived adversarial scrutiny.
- Two WebFetch 403/404s (Balkan Insight, IPN.md, the 1949 WP URL) were fetch-layer/anti-bot artifacts, NOT dead links — each confirmed real via search. Flagged here so they aren't mistaken for fabrication later.
- Both ledgers populated as the record supports (3 victim, 1 perpetrator); asymmetry is genuine (statehood only since 1991) per law 1 — no invented balance demanded.
- Only outstanding gap: mda-2's missing exile death toll. Resolving it (or relabeling the unit to "deportees") would flip mda-2 and the country to VERIFIED.
