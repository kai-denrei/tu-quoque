# Senegal (SEN) — research log

Built from scratch 2026-06-18. Web tools (WebSearch/WebFetch) loaded and used throughout.

## Final ledger

**Victim ("Done to them")**
- `sen-1` Atlantic slave trade out of Senegambia (Saint-Louis, Gorée, Senegal-river ports), c.1500s–1848. Tier WAR. Status **UNVERIFIED**.
- `sen-2` Thiaroye massacre, 1 December 1944 (French army kills repatriated tirailleurs). Tier POL. Status **RESEARCHED**.

**Perpetrator ("In their name")**
- `sen-3` Senegambian kingdoms (Jolof, Cayor, Baol, Waalo) as suppliers of the Atlantic trade, c.1500s–1800s. Tier WAR. Status **UNVERIFIED**.
- `sen-4` Senegalese army abuses against civilians in the Casamance insurgency, 1982–present. Tier WAR. Status **UNVERIFIED**.

## Key findings / decisions

- **The Gorée number is a myth — handled deliberately.** The single biggest trap in Senegal's record is the tour-guide / curator claim that 1 million, 15 million, or 20 million enslaved people passed through Gorée's "House of Slaves." This is debunked by professional historians (Philip Curtin, David Eltis) and well-covered (History News Network, Washington Post, Chronicle of Higher Education). I did NOT use the inflated number anywhere; it is named in the toll caveat only to be rejected. The toll is anchored conservatively to the sourceable academic subset: Eltis ≈120,000 via Gorée specifically (low), Curtin ≈180,000 from ALL French Senegambian posts 1711–1810 (high, broader than Gorée). Because no clean single aggregate for "Senegal" as a modern unit exists and the unit is really embarked-persons (not a verified death count), sen-1 is marked UNVERIFIED.

- **Thiaroye toll is genuinely contested across an order of magnitude.** French archives: 35 (official) / 70 (Dagnan's second report version). 2025 Senegalese state commission (chaired by Mamadou Diouf, Columbia; white paper presented to President Faye 17 Oct 2025): "most credible" ≈300–400, backed by initial archaeological exhumation (only 7 sets of remains recovered at time of reporting). Range 35–400, disputed=true. Macron recognized it as "a massacre" in 2024. This is the one RESEARCHED event — the event itself, agent, and date are not in dispute, only the count.

- **The dual lens runs through ONE economy.** sen-1 (victim) and sen-3 (perpetrator) are two ends of the same slave-trade chain: the captives shipped from Gorée were largely produced by the Senegambian kingdoms' own wars and raids. I deliberately left sen-3's toll null (not a separate number) to avoid double-counting the same human beings. Boubacar Barry's *Senegambia and the Atlantic Slave Trade* (Cambridge UP, 1997) is the standard scholarly authority for the participation thesis.

- **Perpetrator side is honestly asymmetric.** There is no modern Senegalese state genocide. The two real perpetrator events are (1) the kingdoms' slave supply and (2) army abuses in Casamance — and both have null tolls because no defensible figure isolates them. This asymmetry is explained in the country note rather than papered over.

## Contested / could NOT verify

- **Senegambia regional slave-export total (single figure):** Could not anchor a clean SlaveVoyages "Senegambia" embarked number. The slavevoyages.org Estimates/FAQ pages are JavaScript-rendered and returned no machine-readable content via WebFetch. Search surfaced a regional departures figure rising "from 314,900 to 363,200" (estimate-adjustment context, not a confirmed grand total) but I did not treat that as solid, so I used the attributable Curtin/Eltis figures instead. Eltis's number is cited via Washington Post coverage, not the database directly — flagged in the source caveat.
- **Casamance army-specific civilian toll:** No reliable number isolates army killings from MFDC killings. Conflict-wide ≈5,000 deaths / ≈60,000 displaced is shared between both sides; 1997 RADDHO attributed 3 of 16 listed killings to the army, 12 to the MFDC; Amnesty (1997) alleged "tens" of civilian deaths. The clearest mass-impact army act is the 1999 Ziguinchor shelling (~20,000 displaced) but with no death count. Toll left null → UNVERIFIED.
- **1981 Gambia intervention (considered, rejected as a perpetrator event):** Senegal's army quashed the 1981 Gambian coup; the 500–1,000 deaths are mostly attributed to the coup/fighting and the Gambian PPP's post-coup repression (mass detention/torture at Fajara), not cleanly to Senegalese forces. "Senegalese death squads" claims are explicitly described as unevidenced in the sources. Not strong enough to stand as a Senegal-perpetrator atrocity, so excluded rather than padded.

## Real sources consulted (web)

- Wikipedia: House of Slaves; Thiaroye massacre; Casamance conflict; Waalo; 1981 Gambian coup attempt.
- UNESCO World Heritage Centre — Island of Gorée (list/26).
- Britannica — Gorée Island.
- History News Network — "The Myth of Goree Island."
- Washington Post (2013) — "The sincere fiction of Goree Island" (Eltis estimate conduit).
- The Conversation (2025) — Thiaroye report / Mamadou Diouf commission.
- France 24 (Oct 2025) — Senegal awaits Thiaroye report; Macron 2024 recognition.
- Cambridge University Press — Boubacar Barry, *Senegambia and the Atlantic Slave Trade* (1997).
- World History Encyclopedia — Wolof Empire.
- IRIN / The New Humanitarian — "No end in sight to Casamance conflict" (RADDHO/Amnesty attributions).
- Al Jazeera (2022) — Casamance landmine victims (CNAMS 157 deaths / 453 injuries).

No source, author, URL, or number was fabricated. Where the famous figure is a myth (Gorée) it is rejected; where contested (Thiaroye) the range is shown; where no defensible count exists (kingdoms' output, Casamance army toll, slave-trade death count) the toll is null and the event marked UNVERIFIED.

## Audit

Adversarial source-integrity + tier audit, 2026-06-18. Every citation was treated as fake until independently re-verified via WebSearch/WebFetch (some sources cross-checked against second sources where the cited URL was fetch-blocked). No source was found to be fabricated; no source was added that the original record did not already carry.

**Verdict:** country **UNVERIFIED** (1 of 4 events VERIFIED). Event statuses: sen-1 UNVERIFIED (unchanged), sen-2 **VERIFIED** (was RESEARCHED), sen-3 UNVERIFIED (unchanged), sen-4 UNVERIFIED (unchanged). No event was downgraded or quarantined — every cited work, author, and figure checked out.

### sen-1 — Atlantic slave trade out of Senegambia (tier WAR, status UNVERIFIED — kept)
- **Eltis ~120,000 via Gorée (toll.low) — VERIFIED.** Confirmed by the Chronicle of Higher Education ("Debating the History of Slavery on Senegal's Goree Island": Eltis estimates "fewer than 1 percent of all slaves — perhaps 120,000 — left through Goree"), corroborating the Washington Post conduit already cited. The Chronicle is the stronger primary conduit; WaPo URL retained as cited.
- **Curtin ~180,000 from all French Senegambian posts 1711-1810 (toll.high) — VERIFIED.** The exact figure is carried by the cited Wikipedia 'House of Slaves' article and attributed to Curtin's 1969 census ("between 1711 and 1810, 180,000 enslaved Africans were transported from the French posts in Senegambia"). Curtin's *The Atlantic Slave Trade: A Census* (1969) confirmed to exist (Internet Archive, U. Wisconsin Press, multiple library catalogs).
- **HNN 'Myth of Goree Island' (summary) — VERIFIED.** Fetched; it does argue the 20-million / door-of-no-return claims lack documentary basis, quotes Curtin ("The whole story is phony"), states Gorée was never a major shipping point, and gives the ~10 million total / ~50,000-ever-on-Gorée framing. Used only to reject the myth, exactly as the caveat states.
- **UNESCO 'Island of Gorée' (summary) — accepted as standard reference.**
- **Toll low/high both independently sourced; tier WAR upheld** (organized violent extraction, not disease-driven STR, not annihilationist EXT). UNVERIFIED status is principled, not a source failure: no clean single defensible aggregate exists for "Senegal" as a modern unit, and the unit is embarked-persons, not a verified death count. Kept UNVERIFIED.

### sen-2 — Thiaroye massacre (tier POL, status RESEARCHED → VERIFIED)
- **The Conversation (toll.high) — VERIFIED.** Fetched; article exists (9 Dec 2025), documents the Diouf/Columbia commission appointed by PM Sonko, presented to President Faye 17 Oct 2025, the archival 35-vs-70 split, the 300-400 figure, and the seven sets of remains from initial excavation. NUANCE LOGGED: the article frames 300-400 as the existing research consensus the white paper restates rather than a brand-new commission finding ("does not appear to go further than previous research") — the cite text was tightened to reflect this; the figure and its attribution to the report stand.
- **Wikipedia 'Thiaroye massacre' (toll.low) — VERIFIED.** Confirms date 1 Dec 1944, the units (1st/7th RTS, gendarmerie, 6th Colonial Artillery, one M3 Stuart tank), the immediate ~35 (24+11) and Dagnan's 70 (24+46), the veterans' ~300 claim, and declassified docs suggesting premeditation against unarmed men.
- **France 24 (summary) — VERIFIED.** Cited URL was HTTP 403 to fetch, but its existence and substance (301-page white paper, 17 Oct 2025 to Faye, Macron's Nov 2024 "massacre" recognition) are confirmed via search and France 24's companion article; caveat added to the source noting the cross-check.
- **Tier POL upheld** (deliberate mass killing of detained, mostly unarmed men over a pay grievance, premeditation evidence — not a battlefield WAR death). Both toll ends sourced; event/agent/date undisputed. Upgraded to VERIFIED.

### sen-3 — Senegambian kingdoms as slave-trade suppliers (tier WAR, status UNVERIFIED — kept)
- **Boubacar Barry, *Senegambia and the Atlantic Slave Trade* (Cambridge UP) — VERIFIED.** Cambridge page fetched and confirmed (ISBN 9780521592260; English ed. 1998, French original 1988, paperback 1997 — "1997" acceptable); scope confirms the participation thesis.
- **World History Encyclopedia 'Wolof Empire' (summary, incl. one-third-of-exports-before-1600) — VERIFIED.** Fetched; states verbatim "exporting as much as one-third of all African slaves prior to 1600 CE" and names the successor states Cayor, Waalo, Baol, Sine, Saloum. The "up to a third" estimate is genuinely sourced, not invented.
- **Britannica 'Gorée Island' (summary) — accepted as standard reference.**
- **Toll null by design — upheld.** Leaving it null avoids double-counting the same captives counted in sen-1; honest, not invented balance. Tier WAR upheld (armed predation for capture-for-sale, not EXT). Kept UNVERIFIED (no defensible captive figure isolable).

### sen-4 — Senegalese army abuses in Casamance (tier WAR, status UNVERIFIED — kept)
- **Wikipedia 'Casamance conflict' (summary) — VERIFIED.** Confirms since-1982 duration, ~5,000 dead / ~60,000 displaced, the Apr-Jun 1999 army shelling of Ziguinchor (civilian casualties, ~20,000 displaced), and northern troops mistreating/not differentiating the local population.
- **IRIN / The New Humanitarian 'No end in sight to Casamance conflict' (toll.low) — VERIFIED via corroboration.** Cited URL was HTTP 403 to fetch, but the specific figures (RADDHO Sept 1997: 3 of 16 killings to the army, 12 to the MFDC; Amnesty Sept 1997 "tens" of civilian deaths) are independently corroborated by the U.S. State Department 1997 Country Report on Human Rights for Senegal; caveat added noting the cross-check.
- **Al Jazeera (2022) landmine feature (summary) — VERIFIED.** Fetched; confirms CNAMS 157 deaths / 453 injuries and the conflict's longevity.
- **Toll null — upheld** (no figure isolates army-attributed civilian deaths from MFDC actions; conflict-wide ~5,000 is shared). Tier WAR upheld (counter-insurgency armed-conflict abuses, not group extermination). Kept UNVERIFIED.

### Cross-cutting checks
- **STR-vs-EXT enforcement:** no event is disease-driven, so no STR mis-tagging risk; no event is annihilationist, so no EXT inflation. All three WAR tiers and the one POL tier independently re-derived and upheld.
- **Two-ledger balance (law 1):** both ledgers are populated (2 victim, 2 perpetrator). The perpetrator side is honestly asymmetric (kingdoms + Casamance, both null-toll) and the asymmetry is disclosed in the country note rather than padded with an invented modern genocide. No invented balance demanded.
- **Single-source / single-number tolls:** sen-1 and sen-2 each have distinct sources for their low and high ends. sen-3 and sen-4 carry null tolls, correctly, with the dispute/absence flagged. No undisclosed single-number toll found.
- **Fabrication sweep:** every author (Eltis, Curtin, Barry, Diouf), every work, and every URL resolves to a real source supporting the specific claim it is attached to. No fabricated citation found.
