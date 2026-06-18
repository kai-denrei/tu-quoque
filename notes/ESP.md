# Spain (ESP) — research log

Date: 2026-06-18. Web tools (WebSearch / WebFetch) ran successfully; all sourcing below is real and verifiable.

## What changed from the seed

The seed had two events. The second event merged two genuinely distinct things — the 711 Umayyad conquest and the 1808–14 Peninsular War — into one "victim" row with different agents, eras, and tiers. I split it into two events so each has its own toll, tier_reasoning, and received_lens. Result: 3 events, both ledgers present (1 perpetrator, 2 victim).

## Event-by-event

### esp-1 — Conquest of the Americas (perpetrator, STR)
- The headline numbers are population DECLINE, not a body count of people Spain killed. This is the single most important caveat and is recorded in `toll.note`.
- **High end:** Koch, Brierley, Maslin & Lewis (2019), *Earth system impacts of the European arrival and Great Dying in the Americas after 1492*, Quaternary Science Reviews 207 — ~56 million deaths by 1600 (~90% collapse), disease as primary driver. This is a peer-reviewed UCL study; solid anchor.
- **Low end / dispute:** Pre-contact estimates range enormously — Kroeber (1939) ~8.4M for the whole hemisphere vs. Dobyns (1966) 90–112M. For central Mexico specifically, Cook & Borah put ~25M in 1519, while Ángel Rosenblat argued for far lower figures and attacked the high estimates as misused documents. McCaa's review (Univ. of Minnesota) summarizes the catastrophist-vs-conservative debate.
- **Tier:** STR confirmed. Scholarly consensus (incl. the Koch study and Restall) is that disease, not slaughter, drove the bulk of the decline. Disease ≠ intent → NOT EXT. The encomienda, massacres, and slaving were real and lethal but a minority of the toll.
- **Status: RESEARCHED.**

### esp-2 — Umayyad conquest of Iberia 711 (victim, WAR)
- **Toll: left null → event UNVERIFIED.** No contemporary count survives. Earliest source, the Mozarabic Chronicle of 754, describes ravaging only in general terms; later Muslim narratives (Ibn Abd al-Hakam) are oral traditions written generations afterward and inflate army sizes. Setting any number would be invention.
- Roger Collins (*The Arab Conquest of Spain, 710–797*) reads much of the record as propaganda-shaped and emphasizes negotiated capitulations — e.g. the 713 Treaty of Tudmir, under which Theodemir kept his southeastern domain in exchange for tribute. This is why the received_lens is "contested" and the tier is WAR, not anything heavier.
- **Status: UNVERIFIED** (honest null toll, not a sourcing failure of the narrative).

### esp-3 — Peninsular War 1808–14 (victim, WAR)
- **Low end:** ~215,000–375,000 Spanish CIVILIAN deaths (famine, disease, violence). Corroborated across Spanish-fiestas, napoleon.org, and EBSCO summaries. The Madrid famine of 1811–12 alone killed ~20,000.
- **High end:** 1,000,000+ total military and civilian dead across the whole peninsula (Wikipedia *Peninsular War* infobox). The low/high gap is a SCOPE difference (Spanish civilians vs. all-combatants peninsula-wide), flagged explicitly in `toll.note`.
- Charles Esdaile, *The Peninsular War: A New History* (2002), is the standard modern scholarly authority; cited for the narrative. Goya's *Los Desastres de la Guerra* is included as primary eyewitness/artwork testimony (caveated as non-quantitative and Spanish-partisan).
- **Tier:** WAR. Counter-insurgency atrocity and war-driven famine — not a campaign to destroy the Spanish as a people.
- **Status: RESEARCHED.**

## Contested points worth flagging
1. The Americas toll is the project's textbook tiering trap: huge numbers, but disease-driven → STR, never EXT. Mis-tiering this either whitewashes (ignoring encomienda/slaving) or libels (calling epidemics deliberate genocide).
2. The "low" figure on esp-1 is the conservative floor for excess deaths, NOT a Spanish-violence body count — noted in the toll.
3. The 711 conquest's "massacre" framing is largely later polemic; contemporary evidence points to treaty submission. Left UNVERIFIED on toll by design.

## Sources consulted (real)
- Koch, Brierley, Maslin & Lewis (2019), *Earth system impacts...*, Quaternary Science Reviews 207 — https://www.sciencedirect.com/science/article/pii/S0277379118307261
- Wikipedia, *Population history of the Indigenous peoples of the Americas* — https://en.wikipedia.org/wiki/Population_history_of_the_Indigenous_peoples_of_the_Americas
- McCaa, *The Population of Mexico from origins to revolution* (Cook & Borah vs. Rosenblat) — https://users.pop.umn.edu/~rmccaa/mxpoprev/cambridg3.htm
- Matthew Restall, *Seven Myths of the Spanish Conquest* (2003)
- Noble David Cook, *Born to Die* (1998)
- Wikipedia, *Muslim conquest of the Iberian Peninsula* (Treaty of Tudmir 713) — https://en.wikipedia.org/wiki/Muslim_conquest_of_the_Iberian_Peninsula
- Roger Collins, *The Arab Conquest of Spain, 710–797* (1989); Mozarabic Chronicle of 754
- Wikipedia, *Peninsular War* (infobox: 1,000,000+ dead) — https://en.wikipedia.org/wiki/Peninsular_War
- Spanish Fiestas, *The Peninsular War (1808–1814)* (215,000–375,000 Spanish civilians) — https://www.spanish-fiestas.com/peninsular-war-of-spanish-independence/
- Charles Esdaile, *The Peninsular War: A New History* (2002)
- Goya, *Los Desastres de la Guerra* — https://en.wikipedia.org/wiki/The_Disasters_of_War

## Could NOT verify
- A precise, scholar-attributed single death figure for the 711 conquest — none exists; toll left null (esp-2 UNVERIFIED).
- napoleon.org and britannica.com returned HTTP 403 to WebFetch; their Peninsular War figures were corroborated via search snippets and the spanish-fiestas page instead.
- The 215,000–375,000 Spanish-civilian figure traces to popular-history aggregations rather than a single primary scholarly citation; flagged with a caveat on the source. Esdaile is the underlying scholarly authority but the exact range was not confirmed inside a paywalled scholarly text.

## Audit

Date: 2026-06-18. Adversarial source-integrity + tier audit. Posture: every citation assumed FAKE until verified via WebSearch/WebFetch. Result: 12 source citations checked across 3 events; all 12 verified REAL and on-point. No fabricated or mis-attributed sources found. No mis-tiering found. Two events upgraded RESEARCHED -> VERIFIED; one held UNVERIFIED by design (null toll). Country stays UNVERIFIED because esp-2 is not VERIFIED.

### esp-1 — Conquest of the Americas (perpetrator, STR) -> VERIFIED
- Koch, Brierley, Maslin & Lewis (2019), *Earth system impacts...*, Quaternary Science Reviews 207, pp. 13-36 — VERIFIED real (UCL/White Rose/ScienceDirect). Confirms pre-1492 pop 60.5M (IQR 44.8-78.2M), ~90% collapse, ~56M deaths by 1600, disease as primary driver. Correctly supports toll.high.
- Cook & Borah, *Essays in Population History* vs. Rosenblat (via McCaa) — VERIFIED. McCaa page (users.pop.umn.edu) fetched: Cook & Borah 25.2M central Mexico 1519 vs. Rosenblat 4.5M; "war over numbers continues." Correctly supports toll.low / the dispute.
- Restall, *Seven Myths of the Spanish Conquest* (2003, OUP) — VERIFIED real. Disease as central explanatory factor; supports tier (STR).
- Noble David Cook, *Born to Die* (Cambridge UP, 1998) — VERIFIED real, exact citation matches (ISBN 0-521-62208-5). Conquest achieved "not by the sword, but by deadly disease." Supports summary.
- Wikipedia, *Population history of the Indigenous peoples of the Americas* — VERIFIED: Kroeber 8.4M low, Dobyns 90.04-112.55M high, 2019 study 60M->6M, all present as cited. Tertiary, correctly caveated.
- TIER independently re-derived from facts BEFORE reading assigned tier: bulk of deaths epidemiological -> STR, NOT EXT (STR-vs-EXT enforced; disease-driven collapse is the canonical STR case). Agrees with assigned tier. disputed:true correct. Both ledger ends sourced. Both ledgers populated (1 perpetrator, 2 victim). FLAG: none.

### esp-2 — Umayyad conquest of Iberia 711 (victim, WAR) -> UNVERIFIED (held)
- Roger Collins, *The Arab Conquest of Spain, 710-797* (1989; later reprints 1994/1995) — VERIFIED real; treats record as propaganda-shaped, uses Mozarabic Chronicle of 754. Supports summary.
- Mozarabic Chronicle of 754 — VERIFIED as a genuine primary source; vague, no figures, hostile cleric — caveat accurate.
- Wikipedia, *Muslim conquest of the Iberian Peninsula* — VERIFIED: Treaty of Tudmir (713), Theodemir conditional surrender, "precedent for the whole of Iberia" capitulation pattern, all present as cited.
- TIER WAR re-derived and confirmed (military conquest + negotiated capitulations, not extermination).
- FLAG (toll): BOTH low and high are null. No death figure is sourceable for either end, so law 2 (a source for both ends) cannot be met. This is an honest null, not fabrication — narrative sources all pass. Quarantine note added to toll.note. Event correctly remains UNVERIFIED.

### esp-3 — Peninsular War 1808-14 (victim, WAR) -> VERIFIED
- Charles Esdaile, *The Peninsular War: A New History* (2002) — VERIFIED real; corroborates ~1M+ peninsula-wide dead and ~250,000 French deaths. Supports summary.
- Wikipedia, *Peninsular War* infobox — VERIFIED verbatim: "1,000,000+ military and civilian dead." Supports toll.high. Tertiary, correctly caveated (peninsula-wide, all combatants).
- Spanish Fiestas, *The Peninsular War* — VERIFIED verbatim: page states "between 215,000 and 375,000 Spanish civilians perished... famine, disease and direct violence." Supports toll.low. Popular-history site, correctly caveated; this was the weakest citation a priori but the page genuinely carries the exact figure.
- Goya, *Los Desastres de la Guerra* (1810-1820) — VERIFIED real; correctly caveated as non-quantitative, Spanish-partisan eyewitness art. Supports summary.
- TIER WAR re-derived and confirmed (counter-insurgency reprisals + war-driven famine; not a campaign to destroy the Spanish as a people). disputed:true correct (low/high is a scope difference, flagged). Both ledger ends sourced. FLAG: none.

### Flags raised (summary)
1. esp-2: null toll on both ends -> event held UNVERIFIED; quarantine note added. (By design — no fabrication; sources real.)
2. No fabricated, non-existent, or mis-attributed sources detected anywhere in ESP.
3. No mis-tiering detected; all three tiers re-derived independently and matched.
4. Country status UNVERIFIED is correct: not all events VERIFIED (esp-2 outstanding).
