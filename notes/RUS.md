# RUS — Russia research log

Built from scratch 2026-06-18. Web tools (WebSearch/WebFetch) loaded and used. Status: RESEARCHED (one event UNVERIFIED on toll — see below).

## Ledger structure
- **Victim (Done to them):** 2 events — Mongol invasion of Kievan Rus' (1237–40); Nazi German invasion of the USSR (1941–45).
- **Perpetrator (In their name):** 2 events — Circassian genocide (1864); Holodomor (1932–33).

## Framing decisions
- **Soviet-era atrocities placed in Russia's perpetrator ledger** because the all-Union state that committed them was governed from Moscow. This is flagged explicitly in the country `note` and in each event's `relevance` — the Holodomor in particular overlaps with Ukraine's victim ledger and belongs on both maps. The note also acknowledges the ledger is incomplete: the Gulag, the Great Terror (~750,000–800,000 executed in 1937–38 per archival work; Conquest's higher figures), and the nationality deportations are vast and only partly represented by the two events chosen.
- **Tier = act, not nation.** WWII classed WAR (aggregate dominated by combat/siege/famine) with the genocidal Generalplan Ost / deliberate-killing subset (~7.4M) flagged in tier_reasoning. Mongol invasion classed WAR (massacre as method of conquest). Circassian and Holodomor classed EXT (deliberate destruction/removal of a group), with the Holodomor's genocide-intent dispute disclosed.

## What is contested
- **WWII Soviet toll:** consensus ~26–27M (Russian Academy 1993: 26.6M). Full scholarly span 14.7M (Biraben 1958) to 43–46M (Sokolov 43.3M; Korol). Used low=14.7M / high=46M to bracket the literature, disputed:true, with ~27M flagged as the working consensus in the note. ~7.4M civilians attributed to deliberate killing in occupied areas (Russian sources).
- **Holodomor toll AND intent:** modern demography (Rudnytskyi et al. 2015) ~3.9M direct deaths / ~4.5M total losses; cluster 3.5–5M. High end 7–10M from the 2003 UN joint statement (25 states) and older/Cold-War figures. Genocide classification disputed — point of contention is the absence of an explicit documented starvation order; Graziosi's "weaponised once underway" middle position adopted in the reasoning. low=3.5M / high=10M.
- **Circassian genocide toll:** 600,000–1.5M dead (some to 2M); figures blur war, refugee famine/epidemic, and transit deaths, so unit is imprecise. Undisputed outcome: 90–97% killed or expelled. Russian Federation officially denies genocide and calls it "migration" → received_lens "denied".

## What could NOT be verified
- **Mongol invasion aggregate death toll:** no defensible total exists. toll.low/high set to **null**; event status **UNVERIFIED** per Law 1/2. McEvedy's ~7.5M→7M is a demographic-decline figure (captures migration/recovery), NOT a death count — stated as such in the note. Localised massacres (Kiev ~50,000, Chernigov ~30,000, ~14 NE cities) are well attested; papal envoy Carpine's "fields of skulls" account cited. No primary chronicle read directly.
- Britannica Holodomor page returned HTTP 403; substituted Wikipedia + the Rudnytskyi 2015 PDF (Canadian Studies in Population) for the figures.

## Real sources consulted
- Wikipedia: World War II casualties of the Soviet Union; Holodomor; Circassian genocide; Russo-Circassian War; Mongol invasion of Kievan Rus'; Siege of Kiev (1240). (tertiary — flagged with caveats in JSON)
- Meduza, "27 million lives lost" (9 May 2025) — corroborates ~27M official figure.
- Rudnytskyi, Levchuk, Wolowyna, Shevchuk & Kovbasiuk, "Demography of a man-made human catastrophe...", Canadian Studies in Population 42 (2015) — ~3.9M direct deaths (scholarly, primary demographic study; PDF on holodomor.ca).
- Web searches cross-checked: UMN CHGS, EBSCO, Britannica (summary only, page 403 on fetch), HREC Education, holodomormuseum.org.ua, history.com, sciencespo mass-violence network, BFI/UChicago working paper (Great Terror), New World Encyclopedia (Mongol).

## No fabrication
No invented sources, authors, URLs, or numbers. Every figure traces to a cited source; the one figure that could not be sourced (Mongol aggregate toll) is null with the event marked UNVERIFIED.

## Audit

Adversarial source-integrity + tier audit, 2026-06-18 (assume-fake-until-proven posture). WebSearch/WebFetch loaded and used; every source falsification-tested.

### Source integrity — all sources confirmed REAL and on-claim
- **rus-1 Mongol.** Wikipedia 'Mongol invasion of Kievan Rus'' VERIFIED: McEvedy 7.5M→7M (Atlas of World Population History, 1978), Carpini "countless skulls and bones" quote, Kiev ~50k / Chernigov ~30k, ~14 NE cities sacked (named), Novgorod/Pskov/Smolensk spared — all present and as cited. Wikipedia 'Siege of Kiev (1240)' VERIFIED: nine-day siege 28 Nov–6 Dec 1240, walls breached 6 Dec, ~2,000 of 50,000 survived, attributed to Maiorov 2016 (Slavonic and East European Review 94(4):702–714, a real article).
- **rus-2 Nazi/USSR.** Wikipedia 'WWII casualties of the Soviet Union' VERIFIED for ALL four toll claims: 1993 figure 26.6M = Andreev, Darski & Kharkova, 'The Population of the USSR 1922–1991' (military 8.668M per Krivosheev); Biraben low 14.7M (8.0M mil + 6.7M civ); Sokolov 43.3M; Korol 46M; deliberate-killing figure 7,420,135. Meduza '27 million lives lost' (9 May 2025) VERIFIED — title and date exact, construction (1990 Gorbachev report / Goskomstat-MSU-Defence team, demographic-balance method) matches. Reconciled the apparent 1990-vs-1993 attribution: same demographic team, monograph published 1993 — added an audit note in the source caveat, not a contradiction.
- **rus-3 Circassian.** Wikipedia 'Circassian genocide' and 'Russo-Circassian War' VERIFIED for the narrative, 90–97% killed/expelled, ~3% remnant, 1763 start / 1864 culmination / 1878 expulsions, Yevdokimov, Alexander II's approval, and Russia's "migration" denial. NOTE: the genocide-article infobox now leads with 1,000,000–2,000,000; the kept 600,000–1,500,000 bracket is still fully sourceable — low traces to Walter Richmond, 'The Circassian Genocide' (Rutgers UP, 2013, "at least 600,000"), upper-low to Charles King and the general scholarly span. Both ends real and verified; caveat updated to record the lineage.
- **rus-4 Holodomor.** Rudnytskyi, Levchuk, Wolowyna, Shevchuk & Kovbasiuk (2015), Canadian Studies in Population 42(1–2):53–80, VERIFIED via ResearchGate/journal archive/HURI MAPA: 3.9M excess deaths + 0.6M lost births = 4.5M total losses, exactly as cited; authors real (Wolowyna at UNC). Wikipedia 'Holodomor' VERIFIED: modern 3.5–5M, 2003 UN joint statement of 25 states citing 7–10M, Stalin-era grain confiscation / sealed borders / 20 Nov 1932 blacklisting decree, and the genocide-intent dispute ("absence of attested documents explicitly ordering the starvation").

### Toll — both ends sourced
- rus-1: low/high genuinely **null** — no defensible aggregate toll exists; correctly null, event held UNVERIFIED. Sources verified but no number to attach.
- rus-2: low (Biraben 14.7M) AND high (Sokolov/Korol 43–46M) both sourced; 27M consensus corroborated. Both ledger ends covered.
- rus-3: low (Richmond 600k) AND high (King/general 1.5M) both sourced.
- rus-4: low (Rudnytskyi 3.9M) AND high (2003 UN 7–10M) both sourced.
No single-number/single-source tolls passed off as ranges.

### Tier — independently re-derived from facts, then compared
- rus-1 WAR — massacre as method of conquest, not destruction of the Rus' as a people (cities spared, survivors made tributaries). Agrees.
- rus-2 WAR — aggregate dominated by combat/siege/famine; exterminatory Generalplan Ost subset (~7.4M) flagged, not promoted to the aggregate tier. STR rule N/A (war-driven, not an epidemic event). Agrees.
- rus-3 EXT — deliberate clearance of a people from its homeland; refugee disease/famine was the consequence of a deliberate expulsion, so group-destruction intent governs (not STR). Agrees.
- rus-4 EXT — engineered, group-weaponised famine; man-made starvation with intent governs (not STR/natural), genocide-legal-threshold dispute disclosed. Agrees.
All four assigned tiers correct; no STR/EXT mislabel found; no tier or tier_reasoning changed.

### Verdict
3 events VERIFIED (rus-2, rus-3, rus-4). 1 event UNVERIFIED (rus-1) — sources are genuine but the aggregate toll is unsourceable by design; quarantine note added to toll.note. Country status → UNVERIFIED (not all events VERIFIED). No invented sources at any point.
