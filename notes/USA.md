# USA — research log

Researched 2026-06-18. Web tools (WebSearch / WebFetch) ran successfully; all tolls below are tied to real published low and high figures. No sources were invented.

## Status

All four events RESEARCHED. Both ledgers populated:
- Perpetrator: Indigenous removal & massacres (usa-1), My Lai (usa-2), Philippine–American War (usa-4, added).
- Victim: Pearl Harbor & 9/11 (usa-3).

The seed already had two perpetrator events and one victim event, so Law 1 was met before any addition. I added the Philippine–American War as a second major perpetrator event because it is the largest US-caused death toll of the events here and was missing.

## Tolls and how they were sourced

### usa-1 Indigenous removal & massacres (POL)
- Removal-era march deaths across Cherokee, Choctaw, Creek, Chickasaw, Seminole: **12,000–17,000** (National Endowment for the Humanities range; Britannica's "Trail of Tears" entry gives "some 15,000").
- Cherokee Trail of Tears alone: **4,000** (Elizur Butler's contemporary count, the most-cited figure) to **8,000** (Russell Thornton, "Cherokee Population Losses during the Trail of Tears," 1984). A 1973 demographic study gave ~2,000; the spread is genuine scholarly dispute over scope and whether post-arrival disease/famine deaths count.
- Massacres counted separately as direct killings, in the hundreds: Sand Creek ~150 (NPS) to ~230+ (Britannica); Wounded Knee ~150 to ~300 (Britannica / Smithsonian).
- Tier POL, not EXT: removal and "pacification" were deliberate state policy targeting specific peoples, but framed as relocation/conquest rather than total physical annihilation. Many removal deaths were from exposure/hunger/disease — but on state-ordered forced marches, so they are policy deaths, not a natural epidemic. This is the EXT-vs-POL line the brief warns about; I kept it POL.

### usa-2 My Lai massacre (WAR)
- **347** (US Army Peers Inquiry, 1970) to **504** (Government of Vietnam memorial count, 56 infants), per Britannica and Wikipedia. Almost all victims women, children, elderly men.
- WAR: a field war crime by a US Army unit, not a standing program.
- Caveats flagged: the 347 is the figure the investigating institution (US Army) accepted; the 504 is the figure of the state whose people were killed.

### usa-4 Philippine–American War (WAR) — added
- Civilian deaths: **~200,000–250,000** modern consensus, mostly famine and disease incl. ~150,000 in the 1902 cholera epidemic (Wikipedia cross-checked with US State Dept Office of the Historian, which gives ~200,000). High contested estimates up to **~1,000,000** (aggregated by WarCosts.org).
- Filipino combatants ~16,000–20,000 (US estimate); US dead ~4,200 (~1,000 combat, ~3,000 disease).
- Tier WAR, not EXT: reconcentration, crop-burning and reprisals (Gen. Jacob Smith's "howling wilderness" order on Samar after Balangiga) drove the toll, but the death mechanism was overwhelmingly war-induced famine and cholera, not a deliberate group-extermination program. Disease-driven mass death with human agency behind the conditions → WAR, deliberately kept out of EXT.
- received_lens "suppressed": the war is largely absent from US popular memory.

### usa-3 Pearl Harbor & 9/11 (WAR, victim)
- Pearl Harbor: **2,403** killed (incl. 68 civilians), 1,178 wounded — National Archives / Dept. of War; figure stable, not disputed.
- 9/11: **2,977** victims (excluding 19 hijackers) — Britannica / 9/11 Memorial & Museum; revised several times before settling. low/high in the record are the two separate events' totals, not a contested single number; disputed=false.

## What is contested
- Trail of Tears / removal-era totals: real scholarly dispute (2,000 to 8,000 Cherokee; 12,000–17,000 era-wide) over scope and whether downstream disease/famine deaths count.
- Sand Creek and Wounded Knee tolls: ranges driven partly by perpetrators inflating "warrior" counts (Chivington) and by bodies removed from the field.
- Philippine–American War civilian toll: the widest dispute here — 200,000 (State Dept, low) vs up to ~1,000,000 (high); census methodology differences between the Spanish and American regimes make a precise number impossible.

## What could NOT be verified
- Nothing was left UNVERIFIED. Every event has a sourced low and high.
- Britannica's Trail of Tears page returned HTTP 403 on direct WebFetch; its figures ("some 15,000"; Cherokee ~4,000) were captured via WebSearch result snippets instead, so the cite stands but the page itself was not fetched in full this session.
- Thornton (1984) and the Peers Inquiry (1970) are cited from secondary summaries (Wikipedia/Britannica/search snippets), not from the primary documents directly — the figures are well established but I did not read the originals.

## Real sources consulted
- Britannica: Trail of Tears; Sand Creek Massacre; Wounded Knee Massacre; My Lai Massacre; September 11 attacks; Pearl Harbor attack.
- U.S. National Park Service, Sand Creek Massacre National Historic Site (nps.gov/sand).
- U.S. National Archives, Pearl Harbor records (archives.gov).
- U.S. Department of State, Office of the Historian, "The Philippine-American War, 1899–1902" (history.state.gov).
- Wikipedia: Philippine–American War; My Lai massacre; Wounded Knee Massacre; September 11 attacks (used as cross-check, not sole authority).
- Smithsonian Magazine (Wounded Knee); WarCosts.org (Philippine war high-end synthesis, flagged as advocacy).
- Russell Thornton, "Cherokee Population Losses during the Trail of Tears" (1984) — via secondary citation.
- U.S. Army Peers Inquiry (1970) — via secondary citation.

## Audit

Adversarial source-integrity + tier audit, 2026-06-18. Posture: assume every citation fake until proven otherwise; try to falsify each source against the specific claim it supports; independently re-derive each tier before reading the assigned one; confirm both ledgers populated (Law 1). Web tools (WebSearch / WebFetch) ran successfully; Britannica direct WebFetch returned HTTP 403, so Britannica figures were confirmed via WebSearch result content instead.

### Verdict
- All four events: VERIFIED. Country: VERIFIED.
- No fabricated sources found. Every author, work, and page cited exists and is reachable, and after the corrections below each cite accurately supports its specific claim.
- Both ledgers populated: perpetrator (usa-1, usa-2, usa-4) + victim (usa-3). Law 1 satisfied.

### Source integrity — what was checked
- usa-1 Britannica "Trail of Tears" "some 15,000": CONFIRMED (Britannica gives ~100,000 removed, some 15,000 died; ~4,000 Cherokee specifically).
- usa-1 NEH "Trails of Tears, Plural" 12,000–17,000 era-wide range: CONFIRMED (real NEH article; range matches).
- usa-1 Thornton (1984) ~8,000 Cherokee: CONFIRMED — real article, "Cherokee Population Losses during the Trail of Tears: A New Perspective and a New Estimate," Ethnohistory 31(4), 1984, pp. 289–300. Note logged: Thornton's 8,000 is Cherokee-specific, while toll.high=17,000 is the era-wide figure; clarified in toll.note so the source is not read as supporting the era-wide high.
- usa-1 NPS Sand Creek: CONFIRMED page, but original cite MIS-STATED it ("~150 killed, two-thirds women/children"). Page actually says "well over half of the 230 dead were women and children." FLAG + CORRECTED cite text to ~230 dead, well over half women/children; caveat added.
- usa-1 Britannica Sand Creek "more than 230": CONFIRMED (more than 230; ~150 women/children/elderly).
- usa-1 Britannica/Smithsonian Wounded Knee 150–300: CONFIRMED.
- usa-2 My Lai Peers Inquiry (1970) "at least 347": CONFIRMED — real report, LtGen William R. Peers, final report 14 Mar 1970.
- usa-2 Britannica My Lai 504 / 56 infants: CONFIRMED (504 dead, 56 under one year).
- usa-3 Pearl Harbor: 2,403 killed (incl. 68 civilians) / ~1,178 wounded CONFIRMED across Britannica, History.com, U.S. Army, Wikipedia. BUT the original cite attributed that precise breakdown to the National Archives page archives.gov/legislative/features/pearl-harbor, which on fetch states only "3,435 casualties" with NO killed/wounded split — i.e. the URL did not support the specific numbers. FLAG (mis-sourcing) + CORRECTED: re-pointed to Britannica "Pearl Harbor attack," which carries the 2,403/1,178 figures; caveat added.
- usa-3 Britannica / 9/11 Memorial & Museum 2,977 victims (excl. 19 hijackers): CONFIRMED (memorial inscribes 2,977 + 6 from the 1993 bombing).
- usa-4 State Dept Office of the Historian: CONFIRMED verbatim — "over 4,200 American and over 20,000 Filipino combatants. As many as 200,000 Filipino civilians died from violence, famine, and disease."
- usa-4 WarCosts.org: CONFIRMED page exists; carries 200K–1M civilian range and 4,200+ US dead; flagged in-record as advocacy/synthesis (high-end only).
- usa-4 Jacob Smith "kill everyone over ten / howling wilderness" Samar order after Balangiga: CONFIRMED (summary accurate).
- usa-4 toll.note cholera "~150,000": NOT SUPPORTED — authoritative sources (Wikipedia "1902 cholera outbreak of the Philippines"; Inquirer) put the 1902–04 cholera toll at ~66,000 (official provincial) to ~109,000, on the order of ~100,000, not 150,000. FLAG + CORRECTED note downward to ~100,000–109,000.

### Tiers — independently re-derived, then compared
- usa-1 POL: state-ordered removal + named massacres targeting specific peoples, framed as removal/pacification, not total physical annihilation → POL, not EXT. STR-vs-EXT check: removal-march disease/exposure deaths occurred on state-ordered forced marches (human agency), so they are policy deaths, correctly NOT downgraded to a no-agency disease/STR event. AGREE, no change.
- usa-2 WAR: field war crime by an Army unit during a combat operation, not a standing program → WAR. AGREE.
- usa-4 WAR: war of conquest; mass death predominantly war-induced famine + cholera produced by reconcentration/crop destruction (human agency creating the conditions), not a deliberate group-extermination program. Disease was the death mechanism but with clear military agency behind it, so it is WAR rather than a no-agency STR/disease-collapse event, and short of EXT. AGREE.
- usa-3 WAR (victim): two armed attacks on the US (state-to-state at Pearl Harbor; treated-as-war non-state attack on 9/11) → WAR. AGREE.

### Toll low/high — both ends sourced
- usa-1: low 12,000 / high 17,000 (NEH era-wide range; Britannica "some 15,000"); Cherokee-specific 4,000–8,000 cited for context. Both ends sourced. disputed=true (correct).
- usa-2: low 347 (Peers) / high 504 (Vietnam memorial via Britannica). Both ends sourced. disputed=true (correct).
- usa-4: low 200,000 (State Dept + Wikipedia) / high 1,000,000 (WarCosts.org). Both ends sourced. disputed=true (correct).
- usa-3: low 2,403 (Pearl Harbor) / high 2,977 (9/11). These are two separate events' totals, not a contested single number; both individually sourced; disputed=false (correct, and noted in toll.note).

### Flags raised (3) — all corrected, none fatal
1. usa-1 Sand Creek NPS cite mis-stated the death figure (~150 vs the source's ~230). Corrected cite text + caveat.
2. usa-3 Pearl Harbor 2,403/1,178 breakdown attributed to an archives.gov page that does not carry it (page says "3,435 casualties"). Re-pointed to Britannica + caveat. Underlying numbers independently confirmed.
3. usa-4 toll.note overstated the 1902 cholera toll as ~150,000; corrected to ~100,000–109,000 per authoritative sources.

No source was found to be invented, and no event required quarantine to UNVERIFIED: in each case the cited work/author/page exists, and the only defects were mis-statements/mis-pointing that were corrected so each cite supports its specific claim. Country status set to VERIFIED.
