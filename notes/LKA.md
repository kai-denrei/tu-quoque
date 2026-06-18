# Sri Lanka (LKA) — research log

Built from scratch on 2026-06-18. Web tools (WebSearch/WebFetch) loaded and used for all of this.

## Structure chosen
- 2 victim events, 2 perpetrator events.
- The honest reality drove the design: Sri Lanka's only large **external-agent** victim event is colonial (1818 British). Almost all of its modern mass killing was **self-inflicted** — the state and Sinhalese majority killing Sri Lanka's own people, both Tamil and Sinhalese. The 2009 finale is placed under "victim" because the dead were Sri Lankan Tamil civilians (Sri Lanka's own people), with the agent (the state) named plainly — this is the dual-lens crux. The asymmetry (far more documented as perpetrator-against-its-own than victim-of-outsiders) is stated in the country note rather than papered over.

## Events
1. **lka-1 — 1818 Uva-Wellassa rebellion suppression (victim, colonial, STR).** British scorched earth under Gov. Robert Brownrigg: burned paddy, destroyed irrigation tanks/channels, killed cattle and adult men. ~10,000 Kandyans killed (inherited contemporary English estimate) vs ~900-2,000 British, against a national population under 3 million. High end null — no reliable upper bound. STR because the lasting catastrophe was engineered famine from destroyed irrigation, not extermination per se. Status RESEARCHED.

2. **lka-2 — Mullivaikkal / 2009 final phase (victim, contemporary, WAR).** Tamil civilians killed by indiscriminate SL Army shelling of declared No-Fire Zones; LTTE used them as human shields. Toll is an order-of-magnitude dispute — this is the most contested number in the file. Status UNVERIFIED.

3. **lka-3 — Black July 1983 pogrom (perpetrator, contemporary, POL).** Sinhalese mobs, partly directed by UNP figures (Cyril Mathew named), using government voter rolls to find Tamil homes; police/army largely stood aside. ~400-600 (govt) to ~3,000 (Tamil/NGO), TCHR outlier 5,638. 18,000 homes / 5,000 businesses destroyed, ~90,000-150,000 displaced, ~500,000 eventual exodus. Triggered the 26-year war. Status RESEARCHED.

4. **lka-4 — JVP insurrection suppression, 1971 + 1987-89 (perpetrator, contemporary, POL).** Combined into one event (two episodes of the same state pattern against its own Sinhalese youth). 1971: official 1,200, unofficial 4,000-5,000, summary executions (Premawathi Manamperi), up to ~20,000 arrests. 1987-89 (the *bheeshanaya*): ~35,000-60,000 dead, mostly killed by army + UNP-backed death squads (Black Cats, Eagles of the Central Hills), thousands of disappearances logged by the UN working group. Status UNVERIFIED.

## Contested / disputed figures
- **2009 toll** is the headline dispute. Bracketing UN figures used as low/high: ~6,500-7,000 confirmed by UN country team (mid-Jan to mid-Apr 2009, conservative wartime floor) → 40,000 (UN Panel of Experts 2011, "as many as") / >70,000 unaccounted (UN). Higher figures noted in the toll.note but NOT adopted as the displayed high: local census/family records ~146,679 unaccounted; ITJP highest ~169,796. Displayed range set to 7,000-70,000 (the UN bracket); census/advocacy highs reported but not adopted. Event marked UNVERIFIED because the body count is an irreducible order-of-magnitude political dispute.
- **Black July**: govt 400-600 vs ~3,000 (common higher estimate). TCHR's 5,638 treated as a contested outlier, noted not adopted. Displayed range 400-3,000.
- **1987-89 JVP**: 60,000 (European delegation) vs ~35,000-40,000 (more conservative scholarship). Displayed high 60,000.
- **1818**: 10,000 is a single inherited contemporary English estimate; no census. High end left null deliberately.

## Could NOT verify
- No independent census of 1818 dead exists; the 10,000 is colonial-era and uncorroborated by a modern count.
- The 2009 high-end figures (146,679 census-gap; ~169,796 ITJP) could not be reconciled with the UN's lower confirmed counts — different methodologies (unaccounted/missing vs confirmed dead), so they are reported as upper bounds, not adopted.
- 1971 toll uncertain because it was gathered under emergency censorship.

## Real sources consulted
- Wikipedia: "Great Rebellion of 1817-1818", "Black July", "1971 JVP insurrection", "1987-1989 JVP insurrection", "Mullivaikkal massacre", "Casualties of the Sri Lankan civil war", "Tamil genocide".
- The Sunday Times (Sri Lanka), "Pride and tears of Uva Wellassa", 8 Apr 2018 (commemorative register — flagged).
- Al Jazeera, "What are Black July massacres…", 27 Jul 2023.
- UN Secretary-General's Panel of Experts on Accountability in Sri Lanka (2011) — cited for attribution of responsibility and the "40,000" framing (UN-hosted PDF URL used; advisory panel, not judicial; rejected by Colombo — flagged).
- Human Rights Watch, "Still No Justice on Sri Lanka War Anniversary", 16 May 2023; Amnesty International, Mullivaikkal 15th-anniversary statement, May 2024.
- EBSCO Research Starters, "Government-Supported Death Squads Quash Sri Lanka Insurrection".
- Cross-referenced (read but not all cited): International Crisis Group "Sri Lanka's dead and missing", HRDAG Sri Lanka project, OHCHR OISL 2015 investigation page.

## Notes for a future auditor
- The UN Panel of Experts URL (un.org/News/dh/infocus/Sri_Lanka/POE_Report_Full.pdf) is the canonical 2011 report path; confirm it still resolves on audit. All other URLs are stable Wikipedia / major-press / NGO pages.
- No source, author, URL, or number was invented. Where a number could not be sourced, the high end was set to null (1818).

## Audit
Adversarial source-integrity + tier audit, 2026-06-18 (Opus 4.8). Premise: every citation FAKE until proven otherwise. Every source was attacked via WebSearch/WebFetch. Outcome: country status **UNVERIFIED** (2 events VERIFIED, 2 events UNVERIFIED). No sources invented.

### Source-integrity defects found and corrected
1. **DEAD URL (lka-2, source #3, UN Panel of Experts).** The originally cited canonical URL `un.org/News/dh/infocus/Sri_Lanka/POE_Report_Full.pdf` now returns **HTTP 404**. The original research notes explicitly flagged "confirm it still resolves on audit" — it does not. The report itself is genuine (the 2011 Darusman Report; the "as many as 40,000" finding and the shelling-attribution finding are both confirmed). Replaced the URL with a resolving authoritative UN-documents host (`securitycouncilreport.org/un-documents/document/poc-rep-on-account-in-sri-lanka.php`), which links to the full report at UN Digital Library record 3961113. Caveat updated to record the swap.
2. **Cite over-claim (lka-2, source #2, 'Mullivaikkal massacre' Wikipedia).** Original cite attributed the ">70,000 unaccounted" statement, the "~146,679 unaccounted" figure, and the "ITJP ~169,796" figure to this page. On fetch, the article supports only the "40,000 to 70,000 killed by the actions of government forces and the LTTE" framing (which DOES back the displayed high of 70,000) plus the ITJP 169,796 *disappeared* figure; it does NOT carry the 146,679 figure (that is in 'Casualties of the Sri Lankan civil war', attributed to Bishop of Mannar Rayappu Joseph, not a formal census). Cite narrowed to what the page actually contains.
3. **Cite over-claim (lka-3, source #2, Al Jazeera).** Original cite attributed voter-lists, "at least 3,000 killed", "18,000 homes", "90,000-150,000 displaced", and "~500,000 fled" to this article. On fetch, AJ supports only the 400-600 government figure, "toll could be in the thousands", and the 13-soldier ambush trigger (AJ actually says ~1.3 million Tamils fled over the whole war, not 500,000). Those granular figures are correctly sourced to the 'Black July' Wikipedia article (source #1, which fully verifies them). Cite narrowed; toll.high (3,000) remains sourced.

### Per-event verdicts
- **lka-1 (1818 Uva-Wellassa, victim, STR) → VERIFIED.** Wikipedia confirms scorched earth + >10,000 Sinhalese killed vs ~1,000 British; Sunday Times feature confirmed to exist at cited URL/title via search index (direct fetch 403 = anti-scraping, not missing). Single inherited contemporary toll; high end correctly null. Tier STR upheld on independent re-derivation: lasting catastrophe was engineered famine from destroyed irrigation (famine-driven = STR, not EXT — no attempt to exterminate the population as such).
- **lka-2 (Mullivaikkal 2009, victim, WAR) → UNVERIFIED.** Substance verified (UN ~6,500-7,000 floor; POE 40,000; HR-groups 70,000 high; ITJP 169,796 disappeared; Bishop-of-Mannar 146,679 unaccounted; HRW 2023 fetched and confirmed; Amnesty May-2024 confirmed via search index, fetch 403). Tier WAR upheld: indiscriminate shelling of declared No-Fire Zones = laws-of-war violations against civilians killed by military action (WAR, not POL/EXT). Stays UNVERIFIED because (a) the toll is an irreducible order-of-magnitude political dispute and (b) the dead URL + over-claiming cite (now both fixed) were genuine integrity defects.
- **lka-3 (Black July 1983, perpetrator, POL) → VERIFIED.** 'Black July' Wikipedia fully corroborates 400-3,000 range, TCHR 5,638 outlier, voter-list targeting, Cyril Mathew, 18,000 homes / 5,000 shops, 150,000-250,000 displaced. AJ verified for the subset it carries. Both toll ends sourced. Tier POL upheld: targeted assault on an ethnic minority for political ends, state-enabled (security forces stood aside). The AJ over-claim was a citation-accuracy fix, not a falsification — every figure is genuinely sourced in #1.
- **lka-4 (JVP 1971+1987-89, perpetrator, POL) → UNVERIFIED.** All three sources verified: 1971 WP (1,200 official / 4,000-5,000 unofficial / up-to-20,000 arrests / Manamperi execution / censorship); 1987-89 WP (60,000-80,000 total-killed range — displayed high of 60,000 is conservative — plus Black Cats/Eagles death squads and 20,000+ disappeared); EBSCO Research Starters confirmed to exist, authored by Robert C. Oberst (2021). Both toll ends sourced. Tier POL upheld: political mass killing of perceived internal enemies (Sinhalese youth), NOT disease/famine-driven, so STR/EXT inapplicable. Stays UNVERIFIED only for the irreducible toll dispute, not for any source defect.

### Tier check (STR-vs-EXT enforcement)
No tier changes required. STR correctly reserved for the famine-driven 1818 case; the disease/famine-vs-extermination distinction holds (1818 = engineered starvation = STR). No event was mis-tiered as EXT. WAR (lka-2) and POL (lka-3, lka-4) all re-derive correctly from the facts.

### Both-ledgers / law-1 check
Both ledgers are populated: victim (lka-1 colonial, lka-2 dual-lens 2009) and perpetrator (lka-3 Black July, lka-4 JVP). The asymmetry (better documented as perpetrator-against-its-own than victim-of-outsiders) is honestly stated in the country note; no balance was invented. Compliant.
