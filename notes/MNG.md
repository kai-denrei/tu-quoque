# Mongolia (MNG) — Research Notes

Built from scratch 2026-06-19 via live web research (WebSearch + WebFetch). Status: RESEARCHED. Four events, two per ledger, both ledgers populated.

## Summary of what was found

Mongolia is one of the cleanest dual-lens cases in the atlas: a small nomadic homeland whose 13th-century state was among the deadliest perpetrators in recorded history, and whose 18th- and 20th-century people were themselves targets of near-extermination.

### Perpetrator ledger ("In their name")
- **mng-3 — Mongol invasion of the Khwarazmian Empire (1219-1221), WAR.** Genghis Khan's campaign of conquest across Central Asia, triggered by the Otrar massacre of Mongol merchants (1218). Deliberate city massacres at Bukhara, Samarkand, Merv, Nishapur, Gurganj, Herat. Toll range 2-15M (sourced, broad, contested). The broader conquest toll (40-60M from McEvedy & Jones 1978) is folded into the summary source with explicit scholarly skepticism noted.
- **mng-4 — Destruction of the Tangut Western Xia (1209-1227), EXT.** Genghis Khan's order to exterminate the Tangut people and culture after they refused to supply troops. Historian John Man: "first ever recorded example of attempted genocide." Death toll left NULL (no defensible numeric figure exists); pre-war population ~3M given as scale only.

### Victim ledger ("Done to them")
- **mng-1 — Stalinist repressions / Great Repression (1937-1939), POL.** Choibalsan's purge under Stalin's direction with NKVD (Frinovsky) supplying target lists. ~20,000-35,000 executed (3-5% of population), incl. >18,000 Buddhist lamas; >700 monasteries destroyed; monastic clergy fell from ~80,000-90,000 to under 500. Mongolia's defining modern victim memory.
- **mng-2 — Dzungar genocide (1755-1758), EXT.** Qing Qianlong Emperor's extermination of the Oirat (Western) Mongols after Amursana's rebellion. 420,000-480,000 dead (~70-80% of ~600,000), via massacre, starvation, and smallpox. Perdue and Clarke cited.

## What is contested / disputed

- **Mongol conquest tolls are the single most contested numbers in the file.** Medieval chroniclers (Juvayni, Rashid al-Din) cite city tolls — 1.3M at Merv, 1.7M at Nishapur, 2.4M at Herat — that modern historians (David Morgan, Jack Weatherford) regard as gross exaggerations, noting the cities could not have held such populations. The overall 40-60M conquest figure rests on McEvedy & Jones's (1978) shaky population estimates. I used the sourced 2-15M range for the Khwarazmian campaign with the dispute flagged, and kept the 40-60M total in a clearly-caveated summary source rather than the headline toll.
- **Stalinist repression toll (20,000-35,000)** is an estimate range, not contested between hostile narratives the way some other atlas entries are; the spread reflects uncertain record-keeping, not denial-vs-claim.
- **Dzungar genocide** figures are relatively settled among scholars (Perdue, Clarke, Levene), with Wei Yuan's Qing-era breakdown (40% smallpox / 30% killed / 20% fled) used for cause-of-death context.

## What could NOT be verified

- **Tangut/Western Xia death toll.** No reliable numeric range exists. Sources describe near-total slaughter and cultural erasure but give no defensible count. Toll set to null per Inviolable Law 1/2; population baseline (~3M) given only for scale. Event still marked RESEARCHED because the EXTERMINATION ACT, agent, dates, and "first attempted genocide" characterization are well-sourced even though the number is not.
- I did not locate a primary-source (non-aggregator) confirmation for the Perdue Dzungar figure within the session; it was accessed via the Wikipedia citation and is flagged with that caveat. Same applies to several conquest figures.

## Geographic / identity nuance (flagged in country note and event note)

The **Dzungars were Oirat (Western) Mongols, but the genocide occurred in Dzungaria (present-day Xinjiang, China), not within the borders of the modern Mongolian state.** Included as an atrocity against Mongol *people*, with that caveat made explicit. This is the deliberate "Mongol = not only the modern Khalkha state" choice.

## Sources consulted (real, this session)

- "Stalinist repressions in Mongolia" — Wikipedia: https://en.wikipedia.org/wiki/Stalinist_repressions_in_Mongolia
- "Dzungar genocide" — Wikipedia: https://en.wikipedia.org/wiki/Dzungar_genocide
- "Mongol invasion of the Khwarazmian Empire" — Wikipedia: https://en.wikipedia.org/wiki/Mongol_invasion_of_the_Khwarazmian_Empire
- "Destruction under the Mongol Empire" — Wikipedia: https://en.wikipedia.org/wiki/Destruction_under_the_Mongol_Empire
- "Mongol conquest of Western Xia" — Wikipedia: https://en.wikipedia.org/wiki/Mongol_conquest_of_Western_Xia
- "Siege of Baghdad" / "Siege of Nishapur (1221)" — Wikipedia (cross-checked context, not cited in file)
- The Washington Times, "Mongolians recall purges by Stalin" (2001): https://www.washingtontimes.com/news/2001/jul/7/20010707-024154-7538r/
- Scholars surfaced in research: Peter C. Perdue ("China Marches West"), Michael Clarke, Mark Levene, John Man, John Masson Smith, Wei Yuan (Qing source), McEvedy & Jones (1978).

## Notes on schema choices

- Event/wrapper `status` uses RESEARCHED/UNVERIFIED per task instructions and the StructuredOutput enum (existing sibling files use "VERIFIED"; I followed the task spec for this entry).
- Khwarazmian campaign tiered WAR (conquest method) rather than EXT, since it was a war of conquest; the Tangut destruction tiered EXT (deliberate single-people annihilation). Both Mongol victim events tiered to the act: Stalinist purge POL, Dzungar genocide EXT.

## Audit

Adversarial source-integrity + tier audit performed 2026-06-19 (auditor pass; assume-fake-until-proven posture). All four events independently re-verified via live WebSearch + WebFetch against primary aggregator pages and corroborating sources. **Result: all 4 events VERIFIED; country status VERIFIED.** No invented sources; no sources removed; no quarantine notes required.

### Per-event verdicts

- **mng-1 — Stalinist repressions (POL) — VERIFIED.**
  - Source integrity: Wikipedia "Stalinist repressions in Mongolia" exists and supports the toll, lama/monastery figures, and perpetrator attribution (Choibalsan + NKVD/Frinovsky under Stalin). Cross-confirmed by history-maps.com and communistcrimes.org: the Extraordinary Commission condemned 25,588 people, 20,099 sentenced to death and executed. The Washington Times (2001) "Mongolians recall purges by Stalin" article was independently confirmed to EXIST and to support the summary — it cites researcher Genden Tserendulam's collection of 28,185 names (~17,000 clergy) for 1937-1939, which sits inside the 20,000-35,000 range. Not a fabricated citation.
  - Toll: both endpoints sourced — low 20,000 and high 35,000 both attested in the Wikipedia range and bracketed by independent counts (20,099 executed via the Commission; 28,185 collected names). Not single-source, not single-number. PASS.
  - Tier: re-derived independently as POL before reading assigned tier. Targets were political/class categories (lamas, aristocrats, officers, party members) killed as "enemies of the revolution." Not EXT (no intent to annihilate the Mongol people as such — the state itself was Mongol), not STR (no disease driver). Assigned POL is correct.

- **mng-2 — Dzungar genocide (EXT) — VERIFIED.**
  - Source integrity: Wikipedia "Dzungar genocide" confirms verbatim — Perdue "420,000-480,000"; Clarke ("destruction... of the Dzungars as a people"); Levene ("eighteenth century genocide par excellence"); ~600,000 pre-genocide population (200,000 households, per Wei Yuan); Qianlong's order to "eradicate the entire Dzungar nation and name" after Amursana's 1755 rebellion; Wei Yuan's cause breakdown (40% smallpox / 30% killed by bannermen / 20% fled) confirmed exactly. Perdue and Clarke are real scholars; the figures are accessed via the WP citation, which is disclosed in the caveat.
  - Toll: both endpoints sourced — low 420,000 (Perdue) and high 480,000 (Perdue/Clarke range), with the 70-80% / ~600,000 baseline corroborated. PASS.
  - Tier: STR-vs-EXT stress-tested. Smallpox caused ~40% of deaths, which superficially invites STR. Rejected: the disease spread amid a deliberate, edict-ordered extermination of a defined people (Qianlong's eradication order). Disease compounded an intentional annihilation; it did not drive an unintended demographic collapse. EXT is correct, NOT STR. Geographic caveat (Dzungaria / present-day Xinjiang, not the modern Mongolian state) is properly disclosed in both the country note and toll.note.

- **mng-3 — Mongol invasion of the Khwarazmian Empire (WAR) — VERIFIED.**
  - Source integrity: Wikipedia "Mongol invasion of the Khwarazmian Empire" confirms verbatim — "total casualties estimated to be between two and fifteen million people"; Merv (Juvayni 1,300,000; Ibn al-Athir 700,000) and Nishapur (Juvayni 1,747,000) tolls present and explicitly "considered exaggerated by modern historians" (cities could support only fractions of reported populations); Otrar trigger (1218, governor Inalchuq seized the caravan and executed its members) confirmed. The "Destruction under the Mongol Empire" summary source confirms the 40-60M conquest figure traces to McEvedy & Jones with disclosed scholarly skepticism.
  - Toll: both endpoints of the 2-15M range are sourced and the medieval-vs-modern dispute is flagged. The breadth is honest, not a single-number toll. PASS.
  - Tier: re-derived as WAR independently. A war of conquest using city massacre and terror as method; individual sieges shade toward EXT but the campaign overall is conquest, not single-group annihilation. WAR is correct.

- **mng-4 — Destruction of the Tangut Western Xia (EXT) — VERIFIED.**
  - Source integrity: Wikipedia "Mongol conquest of Western Xia" confirms verbatim — "Genghis intended to annihilate the entire Western Xia culture"; John Man quote "There is a case to be made that this was the first ever recorded example of attempted genocide, it was certainly very successful ethnocide" confirmed; final campaign 1225-1227 confirmed. No reliable overall death toll exists (the 300,000 figure is battlefield dead at the Yellow River, not a total).
  - Toll: low/high are null — this is the HONEST and correct choice. No defensible numeric toll is sourceable; inventing one would violate the no-invented-sources rule. The ~3M pre-war population is given for scale only, not as a death count. The null toll does not block verification because the tier rests on the well-documented extermination ACT, agent, dates, and the "first attempted genocide" characterization, all of which are sourced. PASS (single-event note: toll is unquantified by necessity, not by omission).
  - Tier: EXT confirmed — deliberate ordered annihilation of a single people and their culture. Not WAR (the explicit eradication order distinguishes it from the conquest framing of mng-3).

### Cross-cutting checks
- **Both ledgers populated (Law 1):** perpetrator (mng-3, mng-4) and victim (mng-1, mng-2) both present; the dual-lens balance is supported by the record, not invented.
- **No fabricated sources found.** Every cited work/author (Perdue, Clarke, Levene, John Man, Wei Yuan, McEvedy & Jones, the Washington Times article, all Wikipedia pages) was confirmed to exist and to support the specific claim attached to it.
- **Bias / caveat disclosure:** tertiary-aggregator reliance is disclosed in every Wikipedia source caveat; the Perdue-via-WP access path is disclosed; the Dzungar geographic caveat is disclosed. Adequate.
- Statuses updated RESEARCHED → VERIFIED on all four events and the country wrapper. JSON re-validated as well-formed after edits.
