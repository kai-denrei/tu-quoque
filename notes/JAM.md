# Jamaica (JAM) — research log

Built from scratch 2026-06-19. No prior seed file. Web tools (WebSearch/WebFetch) loaded and used.

## Final ledger

**Victim — "Done to them"**
- `jam-1` Collapse of the Taíno of Jamaica (1494–1600s) — STR. Spanish enslavement/forced labor + disease. ~60,000 at contact → near-extinction. **UNVERIFIED** (toll is a population-decline figure from popular/reference sources; no sourceable death count; low=null).
- `jam-2` The Morant Bay reprisals (Oct–Nov 1865) — POL. British colonial state under Gov. Eyre. ~439–469 killed, ~600 flogged, ~1,000 homes burned. **RESEARCHED**. Bridges both ledgers (Moore Town Maroons did some of the killing).

**Perpetrator — "In their name"**
- `jam-3` Tivoli Gardens incursion (May 2010) — POL. Independent Jamaican security forces (JDF + JCF). ~70–74 killed; 15 (official enquiry) to 40+ (Amnesty) alleged extrajudicial killings. **RESEARCHED**. Clearest Jamaica-on-Jamaica atrocity.
- `jam-4` Maroon slave-catching & revolt suppression (1739–1865) — STR. Jamaican Maroons enforced the slave system by treaty. **UNVERIFIED** (no countable toll; toll low/high = null).

## What is contested
- **Taíno pre-contact population.** ~60,000 for Jamaica is widely repeated (Jamaicans.com and other Jamaican-history sites) but I could not find a peer-reviewed basis; Greater-Antilles estimates vary by an order of magnitude. Treated as population-decline high bound, low=null, event UNVERIFIED. (Same problem flagged in the HTI entry's Taíno event.)
- **Morant Bay death toll.** ~439 (killed by soldiers, Wikipedia) vs ~469 total (354 court-martial executions + ~85 killed without trial, History Guild). Both ends sourced; used as the range. Initial rising killed ~25 separately.
- **Tivoli extrajudicial killings.** 2016 West Kingston Commission of Enquiry found "at least 15"; Amnesty International alleged "more than 40." Total deaths ~70–74 across sources. Both ends sourced. No prosecutions to date.
- **Maroon role.** Real and well-documented qualitatively (bounty per runaway ~$2 under the 1739 treaty; killed rebel leader Tacky 1760; suppressed 1831–32 Baptist War; atrocities at Morant Bay 1865) but with NO sourceable body count — so toll left null and UNVERIFIED rather than invented.

## What could NOT be verified
- A scholarly (peer-reviewed) figure for Jamaica's specific Taíno population at contact.
- Any countable toll for Maroon slave-catching/suppression.
- The Amnesty 2011 PDF and the Minority Rights Group page returned HTTP 403 / access errors on direct fetch; their figures are cited from the search-surfaced summaries of those same documents, not invented.

## Real sources consulted
- Wikipedia: Taíno genocide; Morant Bay rebellion; Jamaican Maroons.
- Jamaicans.com — "The Taino of Jamaica" (~60,000 / ~200 villages at 1494).
- Minority Rights Group — "Yamaye Taíno People in Jamaica" (fetch 403; used via summary).
- History Guild — "Jamaica's Morant Bay Rebellion and its brutal repression" (469 / 354 / 85 / 600 / 1,000).
- Encyclopedia.com / Britannica — Morant Bay Rebellion & Eyre–Gordon controversy.
- PMC (PubMed Central) PMC6474581 — peer-reviewed forensic summary of the 2016 West Kingston Commission of Enquiry (Tivoli).
- Amnesty International AMR 38/003/2011, "A long road to justice?" (fetch 403; used via Amnesty summaries incl. UK Amnesty "No justice for 74 killed").
- Human Rights Watch — "Jamaica: Investigate Killings in Tivoli Gardens" (4 Jun 2010).
- Springer/Palgrave — "The Maroon Treaty of 1739" (treaty terms re: returning runaways).

## Notes on inviolable laws
- No invented numbers or sources. Unverifiable tolls → null + UNVERIFIED (jam-1 low, jam-4 both ends).
- Tolls given as ranges with both ends sourced where the record supports it (jam-2, jam-3).
- Tiers tag the act: STR for disease-driven Taíno collapse and for upholding the structural slave system; POL for the Morant Bay reprisal and the Tivoli security operation.
- The asymmetry note in the country wrapper explains why the colonial-era perpetrator slot is the Maroons (a Jamaican community), since the slave economy and the Taíno collapse were run by foreign crowns, not any Jamaican state.

## Audit

Adversarial source-integrity + tier audit, 2026-06-19. Method: every citation treated as fake until falsified; each source fetched and/or independently corroborated by search; each tier re-derived from facts before reading the assigned value. No sources invented.

**Outcome: country UNVERIFIED. 2 events VERIFIED (jam-2, jam-3), 2 UNVERIFIED (jam-1, jam-4). 1 event flagged for a source-integrity defect (jam-1).**

### jam-1 — Taíno collapse — UNVERIFIED (FLAGGED, source defect)
- **Source-integrity defect found.** The toll.high citation claimed Jamaicans.com (https://jamaicans.com/taino/) supports "~200 villages and a population around 60,000." On fetch, that page does NOT carry 60,000 — it gives ~6 million Arawak-speakers for the whole Greater Antilles/Bahamas and "over 200 village sites" for Jamaica. The 60,000 Jamaica-specific figure is real and search-surfaced from other popular Jamaican-history sites, but it is unsettled — Jamaica Global Online instead cites ~100,000 (exterminated within 40 years). No peer-reviewed Jamaica-specific contact population found.
- **Action:** corrected the cite text to state only what the URL supports (200 villages + qualitative collapse), kept toll.high=60,000 as an explicitly unverified popular high bound, added a QUARANTINE note to toll.note. toll.low stays null. Status remains UNVERIFIED — correct.
- Wikipedia 'Taíno genocide' (summary support) VERIFIED: 80–90% died within 30 years; disease + enslavement + forced labor + famine + massacre. Minority Rights Group page still returns HTTP 403 (cited via summary; qualitative only, no toll).
- **Tier:** independently re-derived as STR (disease-driven demographic collapse, not a single extermination program) — STR-vs-EXT rule applied; assigned STR is correct.

### jam-2 — Morant Bay reprisals — VERIFIED (was RESEARCHED)
- Wikipedia 'Morant Bay rebellion' VERIFIED for toll.low: 25 initial, 439 killed directly by soldiers, 354 arrested/executed, 600+ flogged, Moore Town Maroons under Alexander Fyfe committed atrocities. Matches cite exactly.
- History Guild VERIFIED for toll.high: direct fetch 403, but the article exists at the cited URL (search-confirmed) and the 469 total (354 court-martial executions + ~85 killed without trial) is independently corroborated (EBSCO, The Lapis). Both toll ends sourced.
- Encyclopedia.com (summary) VERIFIED: Eyre, ~500 deaths, Bogle, Gordon, Royal Commission, recall.
- **Tier:** re-derived as POL (mass political reprisal under martial law against a subject population) — assigned POL correct.

### jam-3 — Tivoli Gardens — VERIFIED (was RESEARCHED)
- PMC6474581 VERIFIED for toll.low: real peer-reviewed forensic-pathology article; ~70 civilians + 3 security killed, at least 15 extrajudicial killings, "disproportionate, unjustified and unjustifiable," 1,138 witness statements, 2016 enquiry. Matches cite.
- Amnesty AMR 38/003/2011 VERIFIED for toll.high: document exists (amnesty.org + amnistia.pt mirror), "at least 74 killed incl. one security member; more than 40 alleged extrajudicial executions." Updated cite to reflect Amnesty's split (74 incl. 1 security vs enquiry's ~3) — the civilian/security split is itself contested but the death range 70–74 is solid and both ends sourced.
- HRW (summary) VERIFIED: real June 2010 call for investigation, "more than 70 deaths," 3 security personnel.
- **Tier:** re-derived as POL (lethal state violence in an internal security operation, credible extrajudicial-killing findings) — assigned POL correct.

### jam-4 — Maroon slave-catching — UNVERIFIED (correctly; no countable toll)
- Wikipedia 'Jamaican Maroons' VERIFIED on every claim: $2-per-runaway bounty, Samuel Grant's runaway-hunting career, Lieutenant Davy killed Tacky (1760), Maroons suppressed the 1831–32 Baptist War under Fyfe, atrocities at Morant Bay 1865.
- Springer chapter VERIFIED to exist: Stephen Vasciannie, 'The Maroon Treaty of 1739,' ch. 2 of 'Maroon Claims to Sovereignty in Jamaican Territory' (Palgrave Macmillan 2024, DOI 10.1007/978-3-031-81880-6); supports the treaty-terms claim. Full text paywalled; corrected cite to name author/book. Earlier vague "Springer/Palgrave chapter" cite upgraded to a confirmed, attributable reference.
- toll.low and toll.high correctly null (no sourceable body count for captures or rebels killed). Status UNVERIFIED — correct. Both ledgers populated per the record (law 1 satisfied; no balance invented).
- **Tier:** re-derived as STR (treaty-bound enforcement of structural enslavement, not a single counted mass-killing) — assigned STR correct.

### Cross-cutting
- All four tiers independently re-derived and confirmed correct (no tier corrections needed). STR-vs-EXT enforced on jam-1.
- No invented sources or numbers. The only fabricated-feeling element was a misattributed cite on jam-1 (Jamaicans.com credited with a figure it doesn't carry); corrected, not deleted, since the URL still supports the other claims.
- 403/paywall fetches (History Guild, Amnesty PDF, Springer, Minority Rights Group) were all independently confirmed to exist and to support their attached claims via search corroboration — none are phantom sources.
