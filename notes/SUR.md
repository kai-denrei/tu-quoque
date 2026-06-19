# Suriname (SUR) — research log

Built from scratch 2026-06-19. Web tools (WebSearch/WebFetch) loaded and used for real research.

## Ledger summary

**Done to them (victim)**
- **sur-1 — Atlantic slavery on the Suriname plantations (1650s-1863), STR.** Dutch plantation slavery, rated among the harshest in the Americas. ~213,000 enslaved Africans transported (broader Dutch Guianas estimate ~250,000 disembarked). Death toll itself uncountable, so death low/high = null; scale recorded in low_alt/high_alt (200,000-250,000 = people enslaved, NOT deaths). Lethality documented demographically instead: enslaved population fell from ~60,000 (early 1770s) to ~36,000 (1863) despite continued imports — deaths persistently outpaced births (crude mortality ~36.2/1,000 vs birth rate ~29.7/1,000 in 1850-1862). Status RESEARCHED.
- **sur-2 — Indigenous demographic collapse after European contact (17th-18th c.), STR.** Arawak (Lokono) and Carib (Kali'na) collapse from disease + colonial violence/enslavement/displacement. No pre-contact population figure and no death count are recoverable → both null, status UNVERIFIED. Outcome documented: indigenous peoples were ~20,344 / 3.8% of population in the 2012 census. Included because it is real, marked unverified rather than padded with an invented number.

**In their name (perpetrator)**
- **sur-3 — December Murders at Fort Zeelandia (1982), POL.** Bouterse's military regime arrested, tortured, and shot 15 named prominent critics on 7-9 Dec 1982. Toll firmly 15 (not disputed). Bouterse's "shot while escaping" cover story discredited. Surinamese military court convicted Bouterse (20 yrs) in 2019; upheld 2021 and 2023. Status RESEARCHED.
- **sur-4 — Moiwana massacre (1986), POL.** Suriname National Army (~70 soldiers) under Bouterse attacked the N'djuka Maroon village of Moiwana (home of Jungle Commando leader Ronnie Brunswijk) during the Interior War; sealed exits, shot inhabitants (mostly women and children) for ~4 hours, burned houses. At least 39 killed. IACtHR (Series C No. 124, judgment 15 June 2005) found Suriname responsible; 2006 state apology + reparations. Status RESEARCHED.

## What is contested / uncertain
- **Slavery death toll:** genuinely uncountable. Import totals (~213,000 vs ~250,000) vary by source/definition (Suriname vs Dutch Guianas; embarked vs disembarked). The 200,000-250,000 figure is people enslaved, deliberately NOT presented as deaths — flagged in toll.note and low_alt/high_alt.
- **Indigenous collapse:** no sourceable toll at all → null + UNVERIFIED. This is the honest asymmetry in the record (the African slave trade is far better documented than the prior indigenous catastrophe).
- **Moiwana:** "at least 39" — true number may be marginally higher (survivors fled, village destroyed). Treated as low=high=39 per the IACtHR finding, not flagged disputed.

## Could NOT be verified
- A direct death count for the slavery system (irreducibly unrecoverable — handled via demographic decline evidence, not a fabricated number).
- Any pre-contact indigenous population baseline for Suriname.
- Grokipedia Afro-Surinamese page returned HTTP 403; not used. The IACtHR PDF and the Lamur et al. demographic study were used instead as the load-bearing sources.

## Real sources consulted
- Slave Voyages / Trans-Atlantic Slave Trade Database — slavevoyages.org (scale of trade into Suriname; ~213,000).
- Humphrey E. Lamur et al., "Changes in fertility and mortality around the abolition of slavery in Suriname," Explorations in Economic History (ScienceDirect) — natural-decrease / mortality vs fertility figures.
- Encyclopaedia Britannica, "Suriname" (History) — Dutch slavery, 10:1 ratio, Maroons, 1863 abolition.
- "Indigenous peoples in Suriname," Wikipedia; Minority Rights Group, "Indigenous Peoples in Suriname" — qualitative collapse + minority status.
- IWGIA Suriname country profile (2012 census) — indigenous ~20,344 / 3.8%.
- "December murders," Wikipedia — 15 victims, Fort Zeelandia, convictions.
- Amnesty International, "Families of Bouterse's victims seek justice 30 years on" (2012).
- International Commission of Jurists, "Ex-president's conviction upheld" (2023).
- Inter-American Court of Human Rights, Moiwana Community v. Suriname, Series C No. 124 (15 June 2005) — primary judgment, ~39 dead, state responsibility.
- "Moiwana massacre" and "Surinamese Interior War," Wikipedia — context, ~70 soldiers, displacement.

## Format notes
- Followed task spec status vocabulary (RESEARCHED/UNVERIFIED) rather than the VERIFIED used in some older files (e.g. BOL.json). Wrapper status = RESEARCHED.
- No invented sources, authors, URLs, or numbers. Validated as parseable JSON: 4 events (2 victim, 2 perpetrator).

## Audit

**Adversarial source-integrity + tier audit, 2026-06-19 (Kai Denrei / kainode).** Assumed every citation fake until proven. Method: tried to falsify each source via WebSearch/WebFetch; re-derived every tier from facts before reading the assigned one; checked toll low/high source coverage. No sources invented.

**Outcome: country status RESEARCHED -> UNVERIFIED** (sur-2 remains UNVERIFIED by design, so the country cannot be all-VERIFIED). Event statuses: sur-1 VERIFIED, sur-2 UNVERIFIED, sur-3 VERIFIED, sur-4 VERIFIED. Events verified: 3. Events flagged/corrected: 2 (sur-1 citation fix; sur-2 kept quarantined).

**Per-event findings:**

- **sur-1 (slavery, STR) — CORRECTED, now VERIFIED.** Material citation error caught: the Lamur article was cited as being in *Explorations in Economic History*. It is in fact *The History of the Family*, Vol. 16 No. 3 (2011), by Humphrey E. Lamur — confirmed via search; the ScienceDirect URL prefix S1081602X = ISSN 1081-602X = The History of the Family, NOT Explorations in Economic History. Same URL, wrong journal name. Corrected the cite. The article is real and supports the demographic-decline claim. Also: the precise per-1,000 figures (crude mortality ~36.2 vs birth ~29.7, 1850-1862) attributed to it could not be independently confirmed from accessible abstracts and were removed from cite + toll.note; the load-bearing fact (deaths persistently outpaced births; population fell ~60,000 [1770s] -> ~36,000 [1863] despite continued imports) is corroborated by multiple independent sources. Slave Voyages source verified real; correctly flagged as counting captives not deaths. Scholarly aggregates for the trade span ~213,000-300,000+; the 200,000-250,000 band is a conservative subset — noted in toll.note. Tier STR confirmed (death-as-byproduct of extraction, not declared extermination — STR-vs-EXT rule satisfied).

- **sur-2 (indigenous collapse, STR) — UNVERIFIED retained (by design, not source failure).** Both sources are real and support their claims: IWGIA 2012-census figures (~20,344 / 3.8% of 541,638; Kaliña, Lokono, Trio, Wayana) independently confirmed; Wikipedia/Minority Rights Group support the qualitative collapse. Status stays UNVERIFIED because no death toll exists to verify (null/null is necessary, not padded). Added an audit note distinguishing "sources real" from "toll unverifiable." Tier STR confirmed (disease-driven collapse = STR, not EXT — rule explicitly enforced).

- **sur-3 (December Murders, POL) — VERIFIED.** 15 named victims, Fort Zeelandia, Bouterse's "shot while escaping" cover story, 2019 conviction (20 yrs), upheld 2021 + 2023 — all corroborated by Wikipedia, ICJ, and multiple news outlets. Amnesty URL returned HTTP 403 to automated fetch and could not be directly opened; the facts it supports are corroborated elsewhere, so the claim stands — added a transparency caveat about the unfetched URL. Tier POL confirmed (state killing of political critics; not WAR, not EXT). Toll 15/15 is a firm, individually-named, judicially-established single number — acceptable, not a hidden single-source contested range.

- **sur-4 (Moiwana, POL) — VERIFIED.** Primary IACtHR source confirmed: corteidh.or.cr seriec_124_ing.pdf IS Moiwana Community v. Suriname, Series C No. 124, 15 June 2005 (verified via search result listing). ~39 killed, "majority women, children and elderly" — confirmed. NOTE: an automated fetch of the PDF returned conflated/garbled metadata (mislabeled the file as another Suriname case and gave a wrong date); flagged this as a fetch-model error in a caveat, but the case identity and the load-bearing finding are independently corroborated. Wikipedia corroborates ~70 soldiers, sealed exits, burned houses, flight to French Guiana, 2006 Venetiaan apology + reparations. Tier POL confirmed (deliberate killing of unarmed civilians as counter-insurgency reprisal targeting an ethnic community, but not a declared program to destroy the Maroon people as such — POL over EXT, and over battlefield WAR).

**Tier summary:** all four tiers independently re-derived and found correct (STR, STR, POL, POL). STR-vs-EXT rule satisfied on both disease/extraction-driven victim events.

**Toll ledger check:** both ledgers populated (2 victim, 2 perpetrator events). No invented balance demanded. sur-1 and sur-2 null death tolls are honest (unrecoverable), with scale recorded separately (low_alt/high_alt) for sur-1.

**Could not directly fetch (corroborated elsewhere, not treated as failures):** amnesty.org page (403); britannica.com/place/Suriname/History (403); the corteidh PDF returned confused metadata. ScienceDirect/ResearchGate/tandfonline also 403 to fetch but the Lamur article's identity was established via search snippets.
