# Mauritania (MRT) — research log

Built from scratch (no prior seed). Dual-ledger entry: 1 victim event, 2 perpetrator events.

## The dual lens, in one country

Mauritania is an unusually clean case where victim and perpetrator are the *same nation* within living memory, and the dividing line runs through its own population (Arab-Berber "Bidan" ruling order vs. Black Mauritanians — Haratin slaves and the Halpulaar/Soninke/Wolof of the south). The documented mass atrocities are overwhelmingly committed BY the Mauritanian state/elite against part of its own people. The asymmetry (heavier perpetrator ledger) is real and left standing — not balanced with invented victim events.

## Events

### mrt-1 (victim) — French colonial conquest, 1903-1934
- France pushed north of the Senegal River from 1903 (Xavier Coppolani's marabout-alliance strategy; assassinated 1905), Col. Henri Gouraud took the Adrar 1908-1909, French forces razed the holy city of Smara and its manuscript library in 1913; Sahrawi/tribal resistance under Ma al-Aynayn and successors continued into the 1930s.
- **TOLL: null.** The African death toll was never honestly counted by the colonial archive and no credible aggregate exists in the sources consulted. Deliberately left null rather than invented. This is the main "gap" in the entry.
- Sources: Wikipedia (Colonial Mauritania; Xavier Coppolani), US Library of Congress Country Studies — all narrative/chronology only, no toll.

### mrt-2 (perpetrator) — descent-based chattel slavery of the Haratin
- Centuries-old hereditary chattel slavery, status passed down maternal line. Mauritania was the LAST country on earth to abolish slavery (decree 1981), did not criminalize until 2007 (again 2015), near-zero prosecutions.
- **TOLL: 90,000-149,000 — these are PEOPLE ENSLAVED, not deaths.** The "deaths" unit is schema-conformity only; flagged explicitly in toll.note. Cumulative historical death cost is real but unquantifiable → no death figure asserted.
- Global Slavery Index 2023 (Walk Free): ~149,000 in modern slavery, ~32 per 1,000 (3rd-highest prevalence worldwide, behind North Korea and Eritrea). Activists argue far higher (up to several hundred thousand in slave-like dependency); government denies slavery persists.
- Sources: Walk Free GSI 2023 Mauritania snapshot (PDF confirmed to exist, did NOT parse to text on fetch — figure corroborated via Statista relay and Walk Free findings pages); Statista; Wikipedia (legal chronology).

### mrt-3 (perpetrator) — "passif humanitaire": 1989-1991 ethnic purge + Inal massacre
- Under Pres. Maaouya Ould Sid'Ahmed Taya. Using the 1989 Senegal border dispute as cover, the state expelled tens of thousands of Black citizens to Senegal/Mali (stripped of nationality, land, livestock), then in late 1990-early 1991 arrested ~3,000 Afro-Mauritanians and killed 500-600 via execution/torture in custody.
- Emblem: 28 Afro-Mauritanian soldiers hanged at the Inal camp on independence day, 28 Nov 1990. 1993 amnesty shielded perpetrators (many kept high office).
- **TOLL: 500-600 killed** (HRW WR1992: "five to six hundred"; MENA Rights Group: 500-600). Separately ~60,000-80,000 expelled (UN registered ~52,500 refugees in Senegal, 7,000-13,000 in Mali by 1991-1993) — a displacement count, NOT added to the killed toll.
- Sources: HRW World Report 1992 (fetched, exact quote "five to six hundred black political prisoners executed or tortured to death"; "one to three thousand" arrested; ~53,000 Senegal / 7,000-8,000 Mali); MENA Rights Group (28 at Inal, ~3,000 arrested, 500-600 killed); Global Voices 2018 (Inal specifics); HRW WR1989 (expulsions).

## Contested / uncertain
- **Colonial toll: completely unquantified** — the single biggest gap; toll left null by design.
- **Slavery count**: estimates diverge widely (90k GSI lower-bound range ↔ 149k GSI 2023 headline ↔ activist claims of several hundred thousand ↔ government denial). The number is of *enslaved persons*, not deaths.
- **1989 cross-border killing total**: the deaths during the April 1989 Nouakchott/Senegal riots and reciprocal expulsions are reported ("hundreds" killed/injured on each side, black Moors burned in Senegal, Senegalese killed in Mauritania) but not reliably aggregated. NOT included in the killed toll to avoid an invented figure.
- Expulsion counts range 40,000-80,000 depending on source.

## Sources actually consulted (real, fetched or searched)
- Human Rights Watch, World Report 1992 — Mauritania: https://www.hrw.org/reports/1992/WR92/AFW-05.htm (FETCHED — exact figures)
- Human Rights Watch, World Report 1989 — Mauritania: https://www.hrw.org/reports/1989/WR89/Mauritan.htm
- HRW, "Mauritania's Campaign of Terror" (PDF MAURITAN944.PDF) — exists, did NOT parse (binary)
- MENA Rights Group, Inal/passif humanitaire 29-years article: https://menarights.org/en/articles/mauritania-survivors-passif-humanitaire-demand-truth-and-justice-29-years-after-inal (FETCHED)
- Global Voices, 28 soldiers hanged on Independence Day (2018): https://globalvoices.org/2018/12/23/the-untold-tragedy-of-28-mauritanians-soldiers-hanged-on-independence-day/ (FETCHED)
- Walk Free, Global Slavery Index 2023 Mauritania snapshot: https://cdn.walkfree.org/content/uploads/2023/09/28082229/GSI-Snapshot-Mauritania.pdf (exists, did NOT parse — corroborated elsewhere)
- Statista, prevalence-of-slavery chart (GSI 2023 relay): https://www.statista.com/chart/30666/estimated-number-of-people-in-modern-slavery-per-1000/
- Wikipedia: Colonial Mauritania; Xavier Coppolani; Slavery in Mauritania; Ma al-'Aynayn; Mauritania-Senegal Border War
- US Library of Congress Country Studies, Mauritania — Pacification: https://countrystudies.us/mauritania/11.htm
- Amnesty International, AFR 38/013/1989 (Mauritania 1986-1989 background): searched, not separately fetched

## Audit

**Adversarial source-integrity + tier audit — 2026-06-19 (Kai Denrei / kainode).** Assumption: every citation fake until proven otherwise. Every source fetched or independently corroborated; tiers re-derived from facts before reading the assigned tier.

### Source-falsification results (per event)

**mrt-1 — French colonial conquest (VERIFIED after correction).**
- HRW-style fetch of Wikipedia 'Colonial Mauritania', Wikipedia 'Xavier Coppolani', and LoC Country Studies /mauritania/11.htm.
- Coppolani 1901-1905 expansion, marabout alliances, Gouraud's 1908-1909 Atar/Adrar capture, pacification to last raid 1934 — ALL confirmed.
- DEFECT FOUND + FIXED: the cited 'Colonial Mauritania' page does NOT mention Smara at all. The 1913 Smara razing is real (confirmed via Wikipedia 'Smara'/'Saguia el-Hamra': Ma al-Aynayn's capital from 1902, sacked by the French Army in 1913, library destroyed) but Smara is in the Saguia el-Hamra (Western Sahara), not Mauritania proper. Added a dedicated 'Smara' source and a geography caveat; summary reworded to flag the location.
- DEFECT FOUND + FIXED: 'Tidjikja / May 1905' is NOT in the cited Coppolani Wikipedia page. Fact is true (12 May 1905, Tidjikja — confirmed via ImagesDéfense gouv.fr + Larousse); caveat added noting the corroborating sources.
- TOLL null = correct and honest. Both sources confirm NO aggregate human death count exists (LoC gives only livestock losses). No invented figure.

**mrt-2 — Haratin chattel slavery (VERIFIED).**
- toll.high (149,000 @ 32/1,000, 3rd globally) — GSI 2023 PDF still does not parse to text (pre-existing, disclosed), but figure independently confirmed via web search of the GSI 2023. Statista page redirect-blocked on fetch; prevalence figure confirmed elsewhere.
- toll.low (~90,000) had NO source binding — only mentioned in the note. FIXED: confirmed via web search that this is the Walk Free GSI 2018 estimate (90,000, ~2.4% of population, conservative lower bound); added an explicit toll.low source. Contested toll now has BOTH ends sourced.
- Legal chronology (matrilineal chattel slavery; 1981 abolition as last country on earth; 2007 criminalization; 2015 expansion; only ONE conviction ever — Oumoulmoumnine Mint Bakar Vall, 2011) verbatim-confirmed on Wikipedia 'Slavery in Mauritania'.
- 'deaths' unit correctly flagged as schema-conformity only (count is of enslaved PERSONS).

**mrt-3 — passif humanitaire / Inal (VERIFIED after correction).**
- HRW World Report 1992 fetched: verbatim 'five to six hundred black political prisoners were executed or tortured to death by government forces between November 1990 and March 1991'; 'one to three thousand' arrested; ~53,000 refugees Senegal, 7-8k Mali. Exact match to JSON cite (toll.high). CLEAN.
- MENA Rights Group fetched: 28 hanged at Inal 28 Nov 1990; ~3,000 arrested Oct 1990-mid-Jan 1991; 500-600 summary-executed. Exact match (toll.low). CLEAN.
- Global Voices fetched: 28 soldiers hanged at Inal on independence day, accused of coup plot; secret 1993 amnesty. Confirmed.
- DEFECT FOUND + FIXED: source 4 (HRW World Report 1989) was MIS-CITED. The page actually says '40,000 to 50,000 black Mauritanians ... expelled' and gives NO UN refugee-registration figures — the JSON cite claimed '60,000-80,000' expelled plus UN registrations of 52,500 Senegal / 13,000 Mali, none of which appear on that page. Citation rewritten to quote the real page (40k-50k); toll.note reworded so the 53k/7-8k refugee figures are attributed to HRW WR1992 (where they actually appear), not WR1989.

### Tier re-derivation (independent, before reading assigned tier)
- mrt-1 → WAR. Decades-long organized colonial military conquest/counter-insurgency; aim = subjugation, not destruction of a people. NOT EXT. Matches assigned. No change.
- mrt-2 → STR. Multi-generational hereditary chattel bondage; aim = exploitation, death not the mechanism; structural deprivation of a caste. NOT EXT despite racialized/descent basis. Matches assigned. No change. (STR-vs-EXT correctly applied.)
- mrt-3 → POL. State purge: mass expulsion + extrajudicial killing/torture targeting a racial/ethnic group within its own population; identity-based selection edges toward EXT but purge/deportation intent and scale keep it POL. Matches assigned. No change.
- All three tiers correct as originally assigned; tier_reasoning left intact.

### Disposition
- No invented sources. No fabricated figures. Every defect was a citation-accuracy / source-binding error where the underlying fact was independently TRUE; all were corrected in place (citations rewritten to match sources, two sources added for previously-unbound claims), not left standing.
- Both ledgers populated where the record supports it (1 victim, 2 perpetrator); asymmetry is real and left unbalanced by design (law 1 — no invented balance).
- Final: mrt-1 VERIFIED, mrt-2 VERIFIED, mrt-3 VERIFIED → country status VERIFIED. JSON re-validated as well-formed.
