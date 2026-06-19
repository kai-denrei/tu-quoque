# Slovenia (SVN) — research log

Built from scratch 2026-06-19. Dual ledger: 2 victim events, 2 perpetrator events. Country status RESEARCHED.

## Ledger summary

**Done to them (victim)**
- svn-1 — Italian Fascist internment / occupation of the Province of Ljubljana (1941–1943), WAR. ~25,000 interned (7.5% of the province); Rab camp deaths ~3,500–4,600 (disputed; deadliest single camp, full occupation toll unconsolidated).
- svn-2 — The Holocaust of Slovenia's Jews (1941–1945), EXT. ~800 murdered of a prewar ~1,500, i.e. ~87–90% — among the highest extermination rates in Europe. Tight, undisputed proportion.

**In their name (perpetrator)**
- svn-3 — Slovene Home Guard collaboration & anti-Partisan terror (1943–1945), WAR. Status UNVERIFIED: no consolidated death figure exists for Home Guard / Black Hand killings, toll left null. Documented: helped round up Jews for deportation; tortured/killed suspected resistance supporters.
- svn-4 — Post-war Partisan & OZNA mass killings of 1945, POL. ~10,000+ at Kočevski Rog; commission estimate ~100,000 in 581 concealed graves across Slovenia (mostly non-Slovene Axis combatants); ~15,000 of those killed in Slovenia were Slovenian nationality. Ordered by Slovenian OZNA leadership.

## The dual-lens core (why this country fits the atlas cleanly)
The same Slovene Home Guard (domobranci) appears in BOTH ledgers within months: perpetrators in 1943–45 (svn-3, complicit in the Holocaust and anti-resistance terror), then victims in May–June 1945 (svn-4, the largest mass killing on Slovenian soil). Neither the "heroic anti-fascist nation" nor the "martyred nation" single lens survives this. The Holocaust event (svn-2) is itself a hinge: a crime done to people on Slovenian soil, but with Slovene collaborators (Home Guard, Rupnik's administration) carrying out arrests — so victim and perpetrator ledgers literally touch the same hands.

## What is contested
- **Post-war killing tolls**: genuinely disputed and politically charged. Kočevski Rog given as "10,000+" (Wikipedia infobox); Karapandžić (1958) ~18,500 — note he is an émigré anti-communist author, flagged as caveat; broader spring–autumn 1945 estimates 30,000–55,000. Tezno ~15,000 (mostly Croats, NOT counted as a Slovene-victim event). Huda Jama ~1,416 recorded / up to ~3,500. Commission's ~100,000 covers ALL victims buried in Slovenia, the great majority non-Slovene Axis combatants returned via the Bleiburg repatriations — used as the high end with that caveat explicit.
- **Italian occupation deaths**: Rab toll diverges between a 1943 Church report ("at least 3,500") and Yugoslav state reporting (4,641); full-occupation toll never consolidated into one figure.
- **Foibe massacres** (Italian victims of Yugoslav/Slovene-Partisan killings in the Julian March/Trieste) were noted in searches but deliberately NOT made a separate Slovenian perpetrator event — the foibe are primarily an Italian-victim / Yugoslav-perpetrator matter centred on territory now largely in Italy/Croatia, and folding it in would double-count the 1945 Partisan-killing dynamic already in svn-4. Flagged here for the Italy (ITA) entry instead.

## What could NOT be verified
- No reliable consolidated death count for killings carried out specifically by the Slovene Home Guard / Black Hand → svn-3 toll set to null/null, event status UNVERIFIED. Did not invent a number.
- Exact Slovene-vs-other breakdown of the post-war dead is not cleanly available; used the ~15,000 Slovenian-nationality estimate (Bleiburg repatriations material) and stated the rest are mostly non-Slovene.

## Real sources consulted (all fetched/searched 2026-06-19)
- Wikipedia, "Kočevski Rog massacre" — https://en.wikipedia.org/wiki/Ko%C4%8Devski_Rog_massacre (fetched)
- Wikipedia, "Commission on Concealed Mass Graves in Slovenia" — https://en.wikipedia.org/wiki/Commission_on_Concealed_Mass_Graves_in_Slovenia (fetched)
- Wikipedia, "Tezno massacre" — https://en.wikipedia.org/wiki/Tezno_massacre (fetched; informs svn-4 note, not its own event)
- Wikipedia, "Rab concentration camp" — https://en.wikipedia.org/wiki/Rab_concentration_camp (fetched)
- Wikipedia, "Province of Ljubljana" — https://en.wikipedia.org/wiki/Province_of_Ljubljana (fetched)
- Wikipedia, "The Holocaust in Slovenia" — https://en.wikipedia.org/wiki/The_Holocaust_in_Slovenia (fetched)
- USHMM Holocaust Encyclopedia, "Leon Rupnik" — https://encyclopedia.ushmm.org/content/en/article/leon-rupnik (fetched)
- IHRA country page "Slovenia" — https://holocaustremembrance.com/countries/slovenia (HTTP 403 on direct fetch; content obtained via search snippet)
- Wikipedia, "Bleiburg repatriations", "Slovene Home Guard", "Maribor prison massacres", "Barbara Pit / Huda Jama" — via search (corroboration)

## Notes for review
- Schema/register modelled on AUT.json (Austria), which is the closest analogue: a collaborator-victim, contested-memory dual case. Event statuses use RESEARCHED/UNVERIFIED per task instructions (the existing files use "VERIFIED"; followed the explicit task vocabulary instead).
- Tiers: svn-2 EXT (near-total destruction of a group), svn-1 & svn-3 WAR (occupation/counter-insurgency terror), svn-4 POL (mass political execution to consolidate power). No nation ranked; tiers tag the acts.

## Audit
Adversarial source-integrity + tier audit, 2026-06-19 (assume-fake posture; every source re-fetched and falsification attempted).

**Country status: UNVERIFIED** (2 of 4 events VERIFIED; svn-3 and svn-4 UNVERIFIED).

### Per-event verdicts
- **svn-1 (Italian internment, WAR) → VERIFIED.** Both Wikipedia sources re-fetched and confirmed. Rab: Yugoslav 4,641 vs 1943 Church report "at least 3,500"; 18% mortality > Buchenwald 15%; 25,000 interned / 7.5%; Gonars first transport 5,343 incl. 1,643 children; "one of the most drastic in Europe" — all present in the cited URLs. Note: Wikipedia also lists an "around 2,000" lower alternative for Rab not reflected in the toll range; range retained as defensible and updated the cite to mention it. Tier WAR re-derived and confirmed (counter-insurgency terror, not group extermination — STR/EXT rule N/A, deaths are internment-mechanism within an occupation-terror event).
- **svn-2 (Holocaust of Slovenia's Jews, EXT) → VERIFIED.** Toll doubly sourced: "Holocaust in Slovenia" (1,533 census / 1,500 / 200 survived / 87%) AND USHMM Rupnik ("Roughly 800 Jews—around 90%"). The 32 hidden Ljubljana Jews betrayed by the Home Guard (Sept 1944) verified. Prekmurje 387 deported via Nagykanizsa confirmed (sistory.si). MINOR GAP: the specific "only 67 survived" Prekmurje figure was not confirmed against the cited Wikipedia URL; headline toll is doubly sourced so this does not block verification. Tier EXT confirmed (targeted destruction of a defined group to ~87–90%, not disease-driven → not STR).
- **svn-3 (Home Guard collaboration, WAR) → UNVERIFIED (honest-gap, not a failed citation).** BOTH sources re-fetched and confirmed sound: USHMM Rupnik verifies Black Hand "tortured and killed people believed to be helping the resistance," Rösener/SS command, Sept 1944 Jewish roundup; "Slovene Home Guard" article verifies German-armed collaborationist status, command under SS-Lt-Gen Rösener → Himmler, fighting alongside German units, and post-war massacre ("exceeds 11,400" — but that is the killing OF the Home Guard, i.e. svn-4 territory, not BY it). Toll low/high both null is law-1-compliant (no consolidated number for killings BY the Home Guard exists; not invented). Status stays UNVERIFIED solely on the unquantifiable toll; sources and tier are verified. Tier WAR confirmed.
- **svn-4 (Post-war Partisan/OZNA killings, POL) → UNVERIFIED (source-integrity defect).** Toll LOW (Kočevski Rog "10,000+") and HIGH (Commission ~100,000 / 581 graves, report Oct 2009, est. 2005) both independently confirmed against their cited URLs; Karapandžić ~18,500 and 30,000–55,000 broader range confirmed. **DEFECT:** the third citation attributed "~130,000 executed in Slovenia," "~15,000 of Slovenian nationality," "~5,000 Teharje," and "liquidations by KNOJ and OZNA at the request of the Slovenian OZNA leadership" to the Bleiburg repatriations Wikipedia article. On re-fetch that article contains NONE of these — it gives a 30,000–100,000 total and no Slovenian-OZNA attribution; its "15,000" is the Tezno Croatian-POW figure, NOT a Slovenian-nationality count. CORRECTIONS APPLIED: (a) the third cite rewritten to what the URL actually states; (b) its caveat documents the misattribution; (c) the toll note quarantine-flags the failed citation and re-homes the real-but-misattributed facts (OZNA oversight → gov.si; Teharje ~5,000 → "Teharje camp" sources). Tier POL re-derived and confirmed (political/military-enemy elimination to consolidate Communist power; NOT EXT — not biological group destruction).

### Bias-disclosure correction
- svn-4 Karapandžić caveat strengthened: the cited Wikipedia article describes him not merely as an "émigré anti-communist author" (original wording) but as a wartime propaganda chief for the fascist/anti-Semitic/Nazi-collaborationist Zbor organisation. Caveat updated to disclose the heavier partisan bias.

### Tier check summary
All four assigned tiers independently re-derived BEFORE reading the assigned value and all four MATCH (svn-1 WAR, svn-2 EXT, svn-3 WAR, svn-4 POL). STR-vs-EXT enforced: no disease-driven event was mislabelled EXT; svn-1's internment deaths sit inside an occupation-terror frame (WAR), not a famine/epidemic frame.

### Toll dual-end check
- svn-1: low (3,500 Church) and high (4,641 Yugoslav) each separately sourced. OK.
- svn-2: undisputed single value (800 / 87–90%) corroborated by two independent sources — acceptable for a near-total, tight-proportion extermination.
- svn-3: both ends null (honest gap, flagged).
- svn-4: low (10,000+) and high (~100,000) each separately sourced and verified; the contested middle/attribution that failed was the third citation only.

### No invented sources
No new sources were fabricated. Where the original text cited facts to the wrong URL, the citation was corrected to the source that genuinely supports it, or the claim was quarantined rather than re-sourced to an unverified URL.
