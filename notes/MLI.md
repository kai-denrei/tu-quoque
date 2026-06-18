# Mali (MLI) — research notes

Built from scratch on 2026-06-18. Dual-ledger atlas entry, four events (2 victim, 2 perpetrator). Country status: RESEARCHED.

## Ledger structure

**Done to them (victim):**
- `mli-1` French colonial conquest of the Western Sudan + forced-labour regime (c.1880–1898; rule to 1960). Tier WAR. Status UNVERIFIED.
- `mli-2` Northern Mali / Sahel war: civilians under jihadist occupation and inter-communal massacre (2012–present). Tier WAR. Status UNVERIFIED.

**In their name (perpetrator):**
- `mli-3` El Hadj Umar Tall's Toucouleur jihad and conquest of Massina (c.1852–1864). Tier WAR. Status RESEARCHED.
- `mli-4` Moura massacre (March 2022). Tier POL. Status RESEARCHED.

## What is well established (quantified)

- **Moura massacre (2022).** Solid, recent, multiply documented. HRW: "over 300" civilians executed (5 Apr 2022). UN/OHCHR fact-finding report (12 May 2023): at least 500 summarily executed over five days, 238 victims named, 58+ women/girls subjected to sexual violence. Malian junta claimed 203 "terrorists." Perpetrators: Malian Armed Forces (FAMa) + ~100 allied foreign fighters widely identified as Wagner Group. Low/high set to 300/500 (HRW/UN divergence shown, disputed=true). This is the strongest single event in the file.
- **Cayawal / Massina war (1862).** Battle of Cayawal (10 May 1862, six days): Massina ~30,000 dead, Umarian ~10,000 dead = ~40,000 in one battle (the deadliest of Umar Tall's jihad). Toucouleur Empire article: "more than 70,000 died in the battles that followed" across the Massina war. Low/high set to 40,000/70,000, disputed=true (pre-colonial figures are inherently approximate, same secondary tradition).

## What is contested / divergent

- **Moura toll:** HRW 300+ vs UN 500+ vs Mali's "203 terrorists." Mali blocked independent site access, so no definitive count. Both NGO and UN figures retained as low/high.
- **Massina/Cayawal counts:** order-of-magnitude pre-modern battlefield estimates from a single secondary tradition; flagged disputed.

## What could NOT be verified (left null + UNVERIFIED)

- **French colonial conquest toll (`mli-1`).** No defensible aggregate death number exists. Documented: French columns destroyed indigenous states up the Senegal/Niger; Samori Toure's scorched-earth war (1882–1898), thousands starved in his 1898 migration, captured 1898, died in exile 1900; Toucouleur state of Ahmadu Tall broken (Segou 1890, Nioro 1891); corvee/head-tax/conscription regime to 1946. Colonial records deliberately thin. Toll null, status UNVERIFIED. (Same handling as CIV.json's `civ-1`.)
- **Aggregate Mali/Sahel war toll (`mli-2`).** ACLED-type Sahel-wide totals are in the tens of thousands but a Mali-specific civilian-only 2012–present single number is not reliably sourceable, so low/high null. Component atrocities ARE documented: 2012 jihadist occupation of the north (executions, amputations, floggings, Timbuktu shrine destruction, child soldiers, ~60,000 displaced by mid-2012); Ogossagou massacre (23 Mar 2019, ~160 Fulani killed by Dogon militia). Status UNVERIFIED.

## Considered but NOT included as Mali events

- **Trans-Saharan slave trade.** The Ghana/Mali/Songhai empires fed it, and the routes were as lethal as the Atlantic (6–10M total over centuries, ~9M common estimate), but a Mali-attributable death toll cannot be isolated from the centuries-long, multi-region trade. Left out rather than guessed; the empire-as-perpetrator theme is carried instead by the well-quantified Umar Tall entry.
- **Voulet–Chanoine mission (1898–99).** Notorious atrocity column, but it struck out from Senegal across modern Niger/Chad, not primarily Mali — kept as colonial-context, not a Mali event.

## Real sources consulted (web)

- Wikipedia: Moura massacre; Mali War; Tuareg rebellion (2012); Samori Ture; Toucouleur Empire; Battle of Cayawal; Umar Tall; Masina Empire; Trans-Saharan slave trade.
- UN News (12 May 2023): "Moura: Over 500 killed by Malian troops, foreign military personnel in 2022 operation" — https://news.un.org/en/story/2023/05/1136607
- Human Rights Watch: "Mali: War Crimes by Northern Rebels" (30 Apr 2012); "Mali: New Atrocities by Malian Army, Apparent Wagner Fighters" (24 Jul 2023); "Mali: Massacre by Army, Foreign Soldiers" (5 Apr 2022, cited in file).
- FIDH/AMDH: "War crimes in North Mali" (N°592a, Dec 2012) — https://www.fidh.org/IMG/pdf/mali592ang.pdf
- Encyclopaedia Britannica: "Samory"; "Western Africa: The jihad of Umar Tal."

## Notes for a future pass

- The Moura HRW URL in the file (`/news/2022/04/05/mali-massacre-army-foreign-soldiers`) is reconstructed from the 5 Apr 2022 HRW report title found in search; verify the exact slug before treating as canonical.
- If an ACLED Mali-specific civilian fatality series can be cited cleanly, `mli-2` could be upgraded from UNVERIFIED with a sourced range.
- Ogossagou (2019) could be promoted to its own perpetrator/victim event if expanding the file (Dogon militia agent; ~160 then a second attack in 2020).

## Audit

Adversarial source-integrity + tier audit, 2026-06-18 (model: claude-opus-4-8). Premise: assume every citation FAKE until proven. Every source was probed live (WebFetch/WebSearch); no source was taken on trust.

### Verdict

- Country status: RESEARCHED -> **UNVERIFIED** (two events remain UNVERIFIED by design; gate requires all-VERIFIED).
- mli-1 (French conquest, victim, WAR): **UNVERIFIED** (unchanged). Sources real; no toll exists.
- mli-2 (N. Mali/Sahel war, victim, WAR): **UNVERIFIED** (unchanged). Sources real; no aggregate toll.
- mli-3 (Umar Tall / Massina jihad, perpetrator, WAR): RESEARCHED -> **VERIFIED**. Both toll ends sourced and quote-checked.
- mli-4 (Moura massacre, perpetrator, POL): RESEARCHED -> **VERIFIED**. Both toll ends sourced and quote-checked.

### Source integrity — falsification attempts (all sources exist; none fabricated)

- **mli-4 / Moura.** HRW report (5 Apr 2022) live: "at least 300" executed 27-31 Mar 2022, apparent Russian/Wagner fighters — matches toll.low and summary. UN News/OHCHR (12 May 2023) live: "over 500" executed, 238 named, 58+ women/girls sexual violence — matches toll.high exactly. Wikipedia 'Moura massacre' corroborates. Strongest event in the file; both ends independently sourced.
- **mli-3 / Cayawal + Massina.** 'Battle of Cayawal' article live: 10-15 May 1862 (six days), Umarian ~30,000 vs Massina ~50,000, ~10,000 + ~30,000 dead = ~40,000 (toll.low), Amadu III captured/executed, Hamdullahi fell. 'Toucouleur Empire' article live and contains the exact phrase "More than 70,000 died in the battles that followed" (toll.high) + Nioro/Kaarta 1855, Segu 1861. Britannica 'The jihad of Umar Tal' confirmed extant (403 to scraper but indexed; content corroborated via search). Caveat (single secondary tradition for both numbers) is disclosed in toll.note — accepted.
- **mli-1 / French conquest.** All three cites real and resolving: 'Samori Ture' (verified — scorched-earth war 1882-1898, Kankan/Bissandougou 1891, capture 29 Sep 1898, "Thousands died of starvation"), Britannica 'Samory' (verified extant — 1898 capture, 1900 death in exile), 'Toucouleur Empire' (verified). None supplies an aggregate toll — consistent with the deliberate null. **Citation-precision flag:** the "Segou fell in 1890" detail is historically TRUE (Archinard, 5 Apr 1890) but is NOT in the cited Toucouleur Empire article (which dates the empire's end to 1893); the date is sourceable elsewhere but the attached URL doesn't carry it. Logged in toll.note; does not change status (already UNVERIFIED for absence of toll).
- **mli-2 / N. Mali war.** HRW 'War Crimes by Northern Rebels' (30 Apr 2012) live and quote-rich (executions, hand amputation, 80-lash floggings, rape of a 14-yr-old, MNLA child combatants). FIDH/AMDH N°592a (Dec 2012) verified real: the 2.2MB PDF resolves but is not machine-parseable by the fetcher; identity, date, number and findings (rape, summary executions, plundering, child recruitment, Aguelhok 153-soldier execution) independently confirmed via the FIDH report index. 'Mali War'/'Ogossagou massacre' articles live; Ogossagou ~160 confirmed (Malian-govt count; some sources 130-134). The ~60,000-displaced-by-mid-2012 figure is plausible but not pinned to a quoted line in the cited excerpt — minor, noted in toll.note.

### Toll double-sourcing

- mli-3 (40,000 / 70,000) and mli-4 (300 / 500): both ends carry distinct, verified sources. PASS.
- mli-1, mli-2: low/high deliberately null (no defensible aggregate). No invented number introduced. Quarantine notes added to toll.note.

### Tier re-derivation (independent, before reading assigned)

- mli-1 conquest + extractive labour regime, aim = rule not extermination, not disease-driven -> **WAR**. Assigned WAR. Correct.
- mli-2 ongoing multi-actor civil war with atrocity components -> **WAR**. Assigned WAR. Correct.
- mli-3 decade-long war of conquest, peak = pitched battle not targeted extermination -> **WAR**. Assigned WAR. Correct.
- mli-4 deliberate mass execution of detained, mostly unarmed civilians -> **POL** (atrocity). Assigned POL. Correct.
- STR-vs-EXT check: no event is disease-driven (no STR misfiled as EXT) and none aims at the destruction of a people as such (no atrocity over-tiered to EXT). All four tiers stand; no correction needed.

### Both-ledgers / law-1 check

Both ledgers populated where the record supports it: victim ledger = mli-1, mli-2; perpetrator ledger = mli-3, mli-4. No invented balance; the Mali file's symmetry is genuine to the record (same Niger-bend polity both conquering and conquered).

### Net changes written to MLI.json

- mli-3 status -> VERIFIED; mli-4 status -> VERIFIED; country status -> UNVERIFIED.
- audit_note added to mli-3 and mli-4.
- AUDIT QUARANTINE paragraphs appended to mli-1 and mli-2 toll.note (source verification + the two precision flags above).
- No sources added, removed, or invented. No tiers changed. No tolls changed.
