# Iran (IRN) — Research Notes

Built from scratch 2026-06-18 via live web research (WebSearch + WebFetch). No prior seed file existed. Status: RESEARCHED. Both ledgers populated, roughly symmetric (2 victim / 2 perpetrator).

## Done to them (victim)

### irn-1 — Mongol Conquest of the Khwarazmian Empire (1219–1221), tier WAR
- Genghis Khan's invasion devastated Persia/Khorasan: Nishapur, Merv, Herat, Balkh sacked and depopulated.
- **Heavily contested toll.** Medieval Persian chroniclers gave enormous numbers: Juvayni claimed 1,747,000 dead at Nishapur; Ibn al-Athir ~700,000 at Merv. Modern historians treat these as gross exaggerations — those cities could only hold ~150,000–200,000 each. Wikipedia's campaign-wide casualty figure is cited as "possibly as high as 10–15 million," which I used as the maximalist high end. The low (1.25M) is a conservative aggregate of documented city massacres, NOT a verified total. Flagged disputed; the true count is unrecoverable.
- Sources: Wikipedia (Mongol invasion of Khwarazmian Empire; Siege of Nishapur 1221), Britannica (Iran — The Mongol invasion).

### irn-2 — Iraqi Chemical Attacks During the Iran–Iraq War (1983–1988), tier WAR
- Saddam Hussein's Iraq used mustard gas and nerve agents (tabun, sarin) against Iranian troops and civilians; 1984 was the first verified combat use of nerve agents in history; over 350 chemical attacks.
- Civilian targeting: Sardasht (28 June 1987), 130 killed, ~8,000 injured — first chemical attack explicitly on a purely civilian population.
- **Toll:** ~20,000 killed directly by chemical agents; total casualties 50,000 (1991 CIA estimate) to 100,000+. The "high" is a casualty figure, not deaths alone. Many figures originate from Iran's Foundation of Martyrs and Veterans Affairs — flagged in caveat (possible framing interest). Long-tail deaths from exposure complicate the count.
- Sources: Wikipedia (Iraqi chemical attacks against Iran; Chemical bombing of Sardasht), Bulletin of the Atomic Scientists 2024.

## In their name (perpetrator)

### irn-3 — 1988 Mass Execution of Political Prisoners (1988), tier POL
- Secret order from Khomeini, July 1988. Four-man "death commissions" across 32+ cities asked prisoners to recant politics/religion; those who refused were hanged over ~5 months. Mass graves, families left without answers.
- **Toll dispute is the key feature.** Amnesty/HRW floor: 2,800–5,000 (Amnesty: "no fewer than 5,000"; documented at least 2,100 named executions in Iranian press 1987–90). MEK (whose members were the principal victims) claims 30,000. State has never published figures and actively suppresses memory. I used 2,800 (low) to 30,000 (high). Disputed.
- Death commission included Ebrahim Raisi (later president) and Mostafa Pourmohammadi.
- Sources: Wikipedia, Amnesty "Blood-Soaked Secrets" (2018) + report MDE 13/018/1992, HRW (2022).

### irn-4 — Persecution and Killing of the Baha'i Minority (1979–present, peak 1980s), tier POL
- Islamic Republic branded the Baha'i faith heresy; executed ~200 Baha'is (most early 1980s, incl. 10 women hanged in Shiraz June 1983), barred from universities/government, fired ~15,000, seized property, denied burial. 1991 state memorandum: block their "progress and development."
- **Toll is well-documented and NOT disputed** (unusual for this atlas): IHRDC counts 202 executed/killed/kidnapped since 1979 (193 by end 1989), +~14 dead in prison; US Baha'i community cites ~221 since 1978. I used 200–221. Death toll is low; the larger harm is decades of systematic deprivation.
- Tier set to POL, not EXT: Genocide Watch and scholar Affolter use "ideological genocide" / extermination-stage language, but the killing toll (low hundreds) is far below mass-death scale. Genocide Watch cited only for severity characterization (supports: tier), with explicit caveat that it applies its own ten-stage model.
- Sources: IHRDC "Blocked from Progress" (2022), HRW "The Boot on My Neck" (2024), Genocide Watch.

## Contested / could not fully verify
- **Mongol toll**: irreducibly uncertain. Medieval figures (millions per city) vs. modern demographic deflation (hundreds of thousands per city). The 10–15M campaign figure is an upper bound, not consensus. Left as a wide disputed range.
- **Iran–Iraq chemical deaths vs. casualties**: sources blur "killed" (~20k) with "casualties" (50k–100k+). Many figures sourced to Iranian government bodies — flagged.
- **1988 total**: genuinely unknown due to state secrecy; range spans an order of magnitude (2.8k–30k).

## Sources consulted (real, verified to load)
- Wikipedia: Mongol invasion of the Khwarazmian Empire; Siege of Nishapur (1221); Mongol invasion of Khorasan; Iraqi chemical attacks against Iran; Chemical bombing of Sardasht; 1988 executions of Iranian political prisoners.
- Britannica: Iran — The Mongol invasion.
- Bulletin of the Atomic Scientists (2024) — Iraq chemical weapons against Iran.
- Amnesty International — "Blood-Soaked Secrets" (2018); report MDE 13/018/1992.
- Human Rights Watch — "Iran's 1988 Mass Executions" (2022); "The Boot on My Neck" (2024).
- Iran Human Rights Documentation Center — "Blocked from Progress" (2022).
- Genocide Watch — "Erased in the shadows: The persecution of Iran's Baha'is."

## Possible future additions (not included; would need more research)
- 1943 Iranian (Persian Corridor) famine during Allied occupation — victim side, contested causation and toll.
- Timur's invasions of Persia (late 14th c.) — victim side, additional pre-colonial atrocity.
- IRGC/Iran-backed actions abroad and the 2019 "Bloody November" / 2022 protest crackdowns — perpetrator side, contemporary; smaller tolls, would need their own sourcing.

## Audit

Adversarial source-integrity + tier audit, 2026-06-18. Method: assume every citation is fake until proven otherwise; attempt to falsify each source live; re-derive each tier independently before reading the assigned one; confirm both ends of every disputed toll carry a source.

**Verdict: all 4 events VERIFIED. Country status VERIFIED.** No source was found to be nonexistent, misattributed at the work/author level, or unsupportive of its claim. 13/13 citations confirmed live. No invented sources. Two `supports`-label corrections and three transparency caveats were applied (below); none rose to quarantine.

### Source integrity — all confirmed live
- **irn-1 (Mongol conquest):** Wikipedia *Mongol invasion of the Khwarazmian Empire* confirms 1219–1221, campaign casualties "possibly as high as 10–15 million," and explicitly flags medieval city tolls as exaggerated by modern historians (supports toll.high — OK). Wikipedia *Siege of Nishapur (1221)* confirms Juvayni's 1,747,000 claim and the ~100,000–200,000 pre-siege population / modern estimate (supports toll.low — OK). Britannica *Iran — The Mongol invasion* returned HTTP 403 to the fetcher (bot-block, not a dead link); existence and substance (Nishapur/Merv/Herat/Khorasan razed) confirmed via search snippet. **Caveat added** noting an internal Wikipedia discrepancy: the main campaign article attributes 1,300,000 to Juvayni for Nishapur while the cited Siege article gives 1,747,000 — a real cross-article discrepancy, not an invented number; both are flagged as exaggerations.
- **irn-2 (Iraqi chemical attacks):** Wikipedia *Iraqi chemical attacks against Iran* confirms ~20,000 killed by nerve agents, CIA-1991 50,000+ casualties, >100,000 current estimate, 1984 first verified nerve-agent combat use, >350 attacks (supports toll.low — OK). Wikipedia *Chemical bombing of Sardasht* confirms 28 Jun 1987, mustard gas, 130 killed / 8,000 injured (supports summary — OK). Bulletin of the Atomic Scientists (2024) article confirmed to exist — correct title, date (11 Jul 2024), author (Peyman Asadzade), subject (supports summary — OK).
- **irn-3 (1988 mass executions):** Wikipedia *1988 executions of Iranian political prisoners* confirms Amnesty/HRW 2,800–5,000, MEK 30,000, Khomeini's secret July-1988 order, four-man death commissions in 32+ cities. Amnesty *Blood-Soaked Secrets* (2018) confirmed live: "minimum estimates put the death toll at around 5,000"; calls them crimes against humanity. HRW (2022) confirmed. **Correction:** the Amnesty source was tagged `supports: toll.high` but it actually documents the FLOOR (~5,000 minimum), not the 30,000 high — changed to `supports: toll.low` with an explanatory caveat. The 30,000 high is the MEK claim carried by the Wikipedia source; real, not invented, not Amnesty's number.
- **irn-4 (Baha'i persecution):** IHRDC *Blocked from Progress* (2022) confirmed live: 202 executed/killed/kidnapped since 1979, 193 by end-1989, 14 died in prison, ≥15,000 job losses (supports toll.low — OK). HRW *The Boot on My Neck* (2024) confirmed: "over 200" executed/disappeared, crime against humanity of persecution (supports summary — OK). Genocide Watch *Erased in the shadows* confirmed: author Sabrina Nelson, Sept 2024, applies Stanton's ten stages (supports tier — OK, and correctly caveated as the org's own model, not a death count). **Caveat added** to toll.note: IHRDC anchors the low (202+14=216); the 221 high is the U.S. Baha'i community figure carried in prose only, with no dedicated source object — real reported figure, weaker-sourced end, independently corroborated as "over 200" by HRW.

### Toll — both ends sourced
- irn-1: low (aggregate of city massacres, Nishapur article) + high (10–15M, Khwarazmian article). Both sourced; low is explicitly a constructed aggregate, flagged. OK, disputed=true correct (range spans >10×).
- irn-2: low 20,000 (deaths) + high 100,000 (casualties, not deaths). Unit mismatch already disclosed in note; both ends sourced. disputed=true correct.
- irn-3: low 2,800 (Amnesty/HRW) + high 30,000 (MEK). Both ends genuinely sourced; `supports` labels corrected as above. disputed=true correct.
- irn-4: low 200/202 (IHRDC) + high 221 (US Baha'i, prose-only). disputed=false defensible — sources converge ~200–221; the only soft spot is the prose-only 221, now flagged. Not a single-number toll.

### Tier — independently re-derived, all confirmed
- irn-1 → **WAR**. War of conquest with civilian massacre; not annihilation of a people as such. Correct.
- irn-2 → **WAR**. Civilian-targeting violence inside an interstate war (incl. Sardasht). Correct.
- irn-3 → **POL**. Systematic killing of political opposition as state policy; not a people "as such," so not EXT. Correct.
- irn-4 → **POL** (closest call). Religiously-targeted killing of a group leans toward the EXT definition ("destruction of a group as such"), but the killing toll is low hundreds and the dominant harm is policy repression/deprivation, not mass death; the assigned reasoning explicitly avoids the EXT-libel trap and is sound. Concur with POL. Genocide Watch's extermination-stage framing is correctly cited for severity only, not as a death-toll basis.
- No disease-driven collapse present, so no STR-vs-EXT miscoding risk to correct on this country.

### Changes written to IRN.json
1. irn-3 Amnesty source: `supports` toll.high → toll.low + corrected caveat.
2. irn-1 Nishapur source: caveat expanded with the Juvayni 1,747,000-vs-1,300,000 cross-article note.
3. irn-4 toll.note: added provenance note on the prose-only 221 high.
4. All 4 event statuses and country status: RESEARCHED → VERIFIED.
5. Country `note`: stale "All four events RESEARCHED" line updated to reflect the verified audit.
