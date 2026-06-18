# Brazil (BRA) — research log

Built from scratch on 2026-06-18. Five events: 2 victim ("Done to them"), 3 perpetrator ("In their name"). Wrapper status RESEARCHED.

## Ledger structure and rationale

**Done to them (victim, on Brazilian soil):**
1. `bra-1` Demographic collapse of indigenous Brazil after contact (1500–c.1650), STR — disease-driven, conquest-accelerated.
2. `bra-2` Transatlantic slave trade to Brazil (1540s–1860s), STR — the largest national share of the Atlantic trade.

**In their name (perpetrator, the modern state/military/elites):**
3. `bra-3` War of Canudos massacre (1896–97), POL — First Republic army.
4. `bra-4` State campaign against indigenous peoples / Figueiredo Report (1900–1967), EXT — SPI + landowners.
5. `bra-5` Killings and torture under the military dictatorship (1964–85), POL — military regime, SNI/DOI-CODI.

The indigenous story deliberately spans both ledgers across four centuries: the colonial-era collapse is entered as victim (driven by Portuguese colonization, mostly disease); the 20th-century SPI campaign is entered as perpetrator (deliberate killing and weaponized smallpox by the Brazilian state). This is the dual lens closing on a single people.

## What is well-documented

- **Slave-trade scale.** SlaveVoyages headline figures are firmly established and widely corroborated: ~12.5M embarked from Africa, ~10.7–10.8M disembarked in the Americas, Brazil ~45–46% (~4.8M), ~5.5M embarked for Brazil. The ~700,000+ Middle-Passage deaths on the Brazil route is derived (embarked minus disembarked), not stated verbatim.
- **Canudos forces and atrocities.** Fourth expedition of 8,000+ under Gen. Arthur Oscar; prisoner beheadings; Conselheiro's head on a pike; ~150 survivors. Well-attested via da Cunha's contemporaneous chronicle and Levine's scholarship.
- **Figueiredo Report.** 7,000-page 1967 inquiry, rediscovered 2013; documented mass murder, deliberate smallpox introduction, enslavement; 80+ tribes destroyed 1900–57; 134 officials charged, none jailed. Corroborated by Survival International and the National Truth Commission.
- **Dictatorship.** National Truth Commission (2014): 434 killed/disappeared, 377 agents named, ~20,000 tortured, 8,300+ indigenous deaths (explicitly an undercount), 1,654 peasants. Corroborated by Human Rights Watch.

## What is contested / could NOT be verified

- **Pre-contact indigenous population (bra-1).** Genuinely unresolved. Hemming (conservative) ~2.4M; Denevan (higher) ~5M+ for the Brazil/Amazon region. The toll bounds are the *disputed 1500 baseline* (population lost), NOT a body count — flagged in the note. Event status UNVERIFIED because no defensible single death figure exists; the ~90% mortality figure blends disease and violence.
- **Slave-trade death toll (bra-2).** The toll is a "scale of the atrocity" range, not a death count: low = ~700,000 Middle-Passage deaths (firm floor); high = ~5.5M total subjected to the trade (most enslaved, not killed in transit). Post-arrival plantation deaths are uncounted; the "~23-year average lifespan" figure carries weak citations. The "2 million worked to death in 38 years" claim (seen on a Substack) was NOT used — single weak source, treated as unverified. Event status UNVERIFIED.
- **Canudos toll (bra-3).** Spans 5,000 (Singer) to ~35,000, with Levine ~15,000 and da Cunha ~30,000. All numeric bounds trace to the single Wikipedia "War of Canudos" article in this session — effectively single-sourced numerically despite named scholarly attributions within it. Flagged in the source caveat.
- **Indigenous death toll under the SPI (bra-4).** No defensible aggregate death figure → toll low/high set to **null**. The "80+ tribes / 1M→200K" decline blends killing, disease, and dispossession. Event status RESEARCHED (the documented findings are solid) but the headline numbers are deliberately null.
- **Dictatorship death figures (bra-5).** Internally varying in sources: 191 killed + 243 disappeared vs. 434 combined vs. "nearing 1,000." Used 434 as the documented floor (low=high=434). Indigenous (8,300+) and peasant (1,654) deaths kept in the note rather than merged — different mechanisms, different certainty.

## Deliberately EXCLUDED

- **Putumayo / Amazon rubber-boom genocide** (~30,000–100,000 indigenous deaths, Casement's reports). The principal perpetrator was the **Peruvian** Amazon Company under Julio César Arana, in disputed Peru/Colombia territory — NOT the Brazilian state. Entering it against Brazil would be mis-attribution. Brazilian rubber estates inflicted parallel debt-bondage, but no clean Brazilian-state mass-death event of comparable documentation was found to enter. Noted in the country `note`.

## Schema note

Existing files use status "VERIFIED"; the task prompt's StructuredOutput enum requires RESEARCHED/UNVERIFIED/SEED, so this file uses RESEARCHED (solidly documented events) and UNVERIFIED (the two collapse/scale events whose headline tolls are baselines/ranges rather than counts). If the atlas standardizes on VERIFIED, bra-3/4/5 would map to VERIFIED and bra-1/2 stay UNVERIFIED.

## Real sources consulted (this session)

- SlaveVoyages — Trans-Atlantic Slave Trade Database (Emory et al.): https://www.slavevoyages.org/assessment/estimates/ (live tables JS-rendered, not readable via fetch; figures corroborated via secondary reporting)
- Emory News, "Documenting Slave Voyages" (2019): https://news.emory.edu/features/2019/06/slave-voyages/index.html
- Wikipedia: Slavery in Brazil; Atlantic slave trade to Brazil; Genocide of Indigenous peoples in Brazil; Indigenous peoples in Brazil; Population history of the Indigenous peoples of the Americas; War of Canudos; Figueiredo Report; Indian Protection Service; National Truth Commission; Military dictatorship in Brazil
- John Hemming, *Red Gold: The Conquest of the Brazilian Indians* (via Goodreads listing): https://www.goodreads.com/book/show/1489125
- Survival International, "'Lost' report exposes Brazilian Indian genocide" (2013): https://www.survivalinternational.org/news/9191
- Human Rights Watch, "Brazil: Panel Details 'Dirty War' Atrocities" (2014): https://www.hrw.org/news/2014/12/10/brazil-panel-details-dirty-war-atrocities
- (consulted, then excluded) Putumayo genocide / World Without Genocide / Wikipedia "Putumayo genocide"

## Audit

Adversarial source-integrity + tier audit, 2026-06-18 (Kai Denrei). Premise: every citation treated as fake until independently proven. All five events' sources were re-checked against non-Wikipedia primary/secondary sources where possible. Verdict: 5/5 sources real and supporting their claims; 5 events flagged for caveat/toll/tier issues; 0 invented sources found or added.

### Source integrity — falsification attempts (all survived)

- **bra-1 Hemming, *Red Gold***: VERIFIED real. Harvard UP 1978; confirmed via Internet Archive, Google Books, and AHR/HAHR/American Anthropologist reviews. The ~2.4M-in-1500 baseline and ~100K survivors-by-1970s are genuinely Hemming's. Goodreads ID 1489125 in the cite does resolve to *Red Gold* by Hemming (an alternate edition record; 1329791 is another). URL valid.
- **bra-1 Denevan, *Native Population of the Americas in 1492***: VERIFIED real (Univ. of Wisconsin Press; JSTOR, Google Books, library records). CORRECTION: the cite's "~3.6 million for the Amazon basin alone" was a stale/unsupported specific; Denevan's actual published Greater-Amazonia range is ~5.1–6.8M (he regards ~5–6M reasonable) per Project MUSE "Estimating Amazonian Indian Numbers in 1492." Cite rewritten; the ~5M+ baseline that toll.high rests on is squarely within Denevan's real estimates, so the claim it supports stands.
- **bra-2 SlaveVoyages**: VERIFIED. ~5.5M embarked / ~4.8M disembarked for Brazil and Brazil ~45–46% of all arrivals in the Americas corroborated via multiple independent sources (Statista, Wilson Center, Gilder Lehrman, Yale UP). Note: framed as ~40% of the *whole* trade vs. ~46% of *arrivals* — both framings exist; the JSON's "45–46% of all Africans landed in the Americas" is the correct, defensible one.
- **bra-2 Emory News (2019)**: VERIFIED real. Article exists; gives 12.5M embarked / 10.8M disembarked Atlantic-wide (implying ~1.7M Middle-Passage deaths overall, consistent with the cite). The Brazil-route ~700K crossing deaths remain a derived embark-minus-disembark figure, as the caveat already disclosed.
- **bra-3 Canudos (Singer / da Cunha / Levine)**: ALL THREE figures independently corroborated this session OUTSIDE Wikipedia — Oxford Research Encyclopedia of Latin American History, Encyclopedia.com "Canudos Campaign," and UC Press / Cambridge JLAS review of Levine's *Vale of Tears* (1992, real, verified). The prior caveat's "effectively single-sourced numerically" is now FALSE and was corrected. da Cunha's *Os Sertões* (1902) is a genuine contemporaneous chronicle.
- **bra-4 Figueiredo Report**: VERIFIED. 7,000 pp.; 80+ tribes destroyed 1900–57; deliberate smallpox; 134 officials charged, 38 dismissed, none jailed; Massacre at the 11th Parallel (~2 survivors) — corroborated via Survival International (advocacy stance disclosed in caveat, correctly) and Guardian-sourced "lost report" coverage. Survival International URL fetched and confirms 134/38/none-jailed verbatim.
- **bra-5 National Truth Commission + HRW (2014)**: BOTH VERIFIED real. 434 killed/disappeared (HRW decomposes as 191 killed + 210 disappeared + 33 disappeared-with-bodies-recovered), 377 agents, 8,300+ indigenous deaths — corroborated via HRW and TIME. HRW article fetched and confirms figures.

### Toll dual-source check

- bra-1: low (Hemming) + high (Denevan) both sourced + verified. Held UNVERIFIED as a *death toll* (population-baseline reconstructions, not body counts).
- bra-2: low (~700K, derived Middle-Passage floor) + high (~5.5M, SlaveVoyages total-subjected) both sourced. Held UNVERIFIED as a *death toll* (a floor + a ceiling spanning two different magnitudes, not a unified count).
- bra-3: low (Singer) / mid (Levine) / high (da Cunha) — now multi-sourced. VERIFIED.
- bra-4: null/null — correct; no defensible aggregate exists. VERIFIED on findings.
- bra-5: low=high=434. **SINGLE-NUMBER TOLL FLAGGED** — but it is a documented named floor, two-source corroborated (NTC + HRW), and the note discloses it is a floor (scholars argue toward ~1,000). Acceptable; flag recorded in toll.note.

### Tier re-derivation (done from facts before reading assigned tier)

- bra-1 STR — confirmed (disease-driven collapse, conquest-accelerated; NOT EXT).
- bra-2 STR — confirmed (structural mass-enslavement deaths; not group annihilation).
- bra-3 POL — confirmed (state crushing a perceived rebellion + prisoner executions; not ethnic EXT).
- bra-4 EXT — confirmed. This is the load-bearing STR-vs-EXT call: disease here was a DELIBERATELY WEAPONIZED instrument with documented intent to destroy groups → EXT, correctly distinguished from the accidental 1500 collapse (STR).
- bra-5 POL — confirmed (political repression of dissidents; the larger indigenous/development death toll correctly noted separately, not folded in).

All five tiers were already correct; none changed.

### Final verdict

- Events VERIFIED: 3 (bra-3, bra-4, bra-5) — promoted from RESEARCHED.
- Events UNVERIFIED: 2 (bra-1, bra-2) — retained; sources real but tolls are baselines/scale-ranges, not death counts (quarantine notes added to toll.note).
- Country status: **UNVERIFIED** (not all events VERIFIED).
- Sources invented or removed-as-fake: 0. One stale specific figure ("~3.6M Amazon basin") corrected within an otherwise-valid Denevan cite.
