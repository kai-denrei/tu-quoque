# Solomon Islands (SLB) — research notes

Built from scratch 2026-06-19. Web tools (WebSearch/WebFetch) loaded and used; all three events rest on real, fetched/searched sources. Ledgers are deliberately asymmetric in AGENCY (1 victim, 2 perpetrator), and the asymmetry is documented, not a gap — see below.

## Events

### Victim ledger ("Done to them")

**slb-1 — Blackbirding labour trade (1870–1911), tier STR, status RESEARCHED**
- European recruiters/ships' crews moved Solomon Islanders into indentured plantation labour in Queensland and Fiji by deception, coercion and outright kidnapping.
- **Toll is a "people taken" figure, not a clean death count** — kept explicit in the note. Britannica: ~30,000 recruited from the Solomons 1870–1910. ASSI/PJ scholarly reconstruction: ~24,865 contracts, probably ~16,000 individuals (Malaitans dominant: ≈9,186 Qld, ≈5,149 Fiji contracts).
- **Mortality figure** (separate, well-documented): of ~55,000–65,000 Melanesians taken to Queensland 1863–1904, ~15,000 (~30%) died. This is Queensland-wide Melanesian, NOT Solomon-only — used as the low (15,000) for documented mortality of the intake; high (30,000) = upper "taken" estimate. A Solomon-Islander-only death count is not isolable, so this is a sourced bracket, not a single verified killing total.
- Tier STR: mass death came from forced labour + disease, not a campaign to exterminate the islanders.

### Perpetrator ledger ("In their name")

**slb-2 — The Tensions, ethnic conflict on Guadalcanal (1998–2003), tier POL, status RESEARCHED**
- Solomon Islander militias: Isatabu Freedom Movement (Guadalcanal side) vs Malaita Eagle Force, plus police drawn in. Killings, torture, rape, forced eviction of ~15,000–20,000 Malaitans from Guadalcanal.
- **Toll: TRC found over 100 killed + 20,000+ displaced; broader narratives/victim register cite ~200 killed.** Low=100 (figure tied to the 20,000-displaced statistic), high=200 (fuller killed-count). Dispute is documentation completeness, not rival scholarly estimates.
- TRC collected 2,362 statements, 11 public + 102 closed hearings. Sexual-violence cases acknowledged as undercounted due to cultural taboo.

**slb-3 — Weather Coast killings / Harold Keke & Guadalcanal Liberation Front (2002–2003), tier POL, status RESEARCHED**
- Keke refused the 2000 peace deal, ran a murder/abduction/arson campaign on southern Guadalcanal's Weather Coast.
- **Toll: 50+ murders personally implicated; convicted 2005 of murdering cabinet minister/priest Augustine Geve, life sentence.** Notable victims: seven Melanesian Brotherhood members (2003) — Br. Nathaniel Sado tortured/killed as a suspected spy, six more killed when they came to find him.
- Low=50 (Keke's personally-implicated floor); **high left NULL** — no verified total for all GLF killings, not invented.

## What is contested / could NOT be verified

- **Blackbirding toll:** the headline ~30,000 is people TAKEN, not deaths; the ~15,000 deaths is Queensland-wide Melanesian, not Solomon-only. Kept as a sourced range with the unit caveat explicit. The TRC primary PDF could not be directly fetched (60s timeout x2) — figures taken from search summaries of that document and corroborated against the TRC Wikipedia entry and ICTJ; flagged in the slb-2 source caveat.
- **Tensions killed-count:** 100 (TRC documented, tied to displacement stat) vs ~200 (fuller victim register). Documentation gap, not estimate dispute. Kept as a range.
- **Keke total killings:** only the 50+ "personally implicated" floor is firm; GLF aggregate not established → high NULL.
- **WWII (Japanese occupation + 1942–43 Guadalcanal campaign):** the islands were physically devastated and islanders served as Coastwatchers/scouts, but reliable Solomon Islander CIVILIAN death counts could not be isolated from the (overwhelmingly military) casualty record (Japanese ~24,000, US ~1,600+ at Guadalcanal). NOT given its own event rather than carry an invented toll. This is the main deliberate omission.

## Dual-lens point
A people trafficked OUT of the islands in the colonial era (blackbirding, external agent) became, in their own independent state, the AUTHORS of atrocity against one another along island/ethnic lines (Tensions; Weather Coast). Unusually clean victim→perpetrator inversion. Country `note` carries this; ledgers are asymmetric by design, not padded.

## Real sources consulted
- Encyclopaedia Britannica, "Solomon Islands: History" (search summary; page 403s to direct fetch) — ~30,000 recruited 1870–1910.
- Australian South Sea Islanders / Pacific Journeys (ASSI/PJ), "Solomon Islanders in Queensland, 1870–1906/1911" PDF — ~24,865 contracts, ~16,000 individuals, contract breakdown.
- Blackbirding — Wikipedia (fetched) — ~55,000–65,000 to Queensland, ~15,000 died, coercion/deception/kidnapping.
- RNZ News, "Blackbirding: legacy of anger in Solomon Islands" (2019, fetched) — Dr David Gegeo on kidnapping from harbours/beaches.
- Solomon Islands TRC Final Report Vol. 1 (pacificpolicy.org PDF; direct fetch timed out, used via search summaries) — over 100 killed, 20,000+ displaced, 2,362 statements.
- Truth and Reconciliation Commission (Solomon Islands) — Wikipedia (fetched) — corroborates 100 killed / 20,000 displaced.
- ICTJ, "The Solomon Islands TRC: Confronting the Past" (PDF binary, not parseable via fetch) — located but not extractable; not cited for a figure.
- GlobalSecurity.org / FAS, "Malaita Eagles Force / Isatabu Freedom Movement" + Freedom House "Freedom in the World 2003 — Solomon Islands" (search summaries) — 15,000–20,000 displaced, torture by both sides.
- Harold Keke — Wikipedia (fetched) — 50+ murders, Geve conviction 2005, seven Melanesian Brotherhood members 2003.

## Audit

Adversarial source-integrity + tier audit, 2026-06-19 (WebSearch/WebFetch loaded; every citation treated as fake until proven). Country status set **UNVERIFIED** (1 of 3 events failed). Tiers independently re-derived from facts before reading the assigned ones — all three tier assignments hold.

**slb-1 Blackbirding (victim, STR) → VERIFIED.**
- Britannica ~30,000 recruited 1870–1910 (toll.high): corroborated via search; page 403s to direct fetch (existing caveat accurate). URL was wrong (`/place/Solomon-Islands/History`) → corrected to live `/place/history-of-Solomon-Islands`.
- Blackbirding Wikipedia (toll.low): re-fetched — ~55,000–62,500 to Queensland 1863–1904, ~15,000 (~30%) died, coercion/deception/kidnapping explicit. Both toll ends sourced. Display upper bound '55,000–65,000' sits slightly above current source (62,500) — immaterial, noted in caveat.
- ASSI/PJ scholarly source: publisher (Australian South Sea Islanders – Port Jackson) and Clive Moore's authorship verified GENUINE; corroborating ASSI figure (Solomon Is. ≈18,000 / just over a quarter of the intake; 62,475 Qld contracts) confirmed. The specific Solomon-only 24,865-contracts/~16,000-individuals number lives in a binary PDF scan not extractable via WebFetch — source real and consistent, exact internal figure rests on the un-refetchable PDF (caveat updated).
- RNZ / David Gegeo: REAL, re-fetched — kidnapping from harbours, cursed harbours, retaliatory killings.
- Tier STR correct: disease/forced-labour-driven mass death, not extermination (STR-not-EXT enforced).

**slb-2 The Tensions (perpetrator, POL) → VERIFIED.**
- TRC primary report: cited pacificpolicy.org URL was dead (timed out) → URL updated to the live McMaster Truth Commissions archive copy of Vol. 1. PDF is a binary scan (not text-extractable), so figures verified independently rather than re-read verbatim.
- toll.low (over 100 killed, 20,000+ displaced): confirmed via TRC Wikipedia (re-fetched) and GlobalSecurity displacement figures ('nearly 23,000 fled'; 'up to 20,000 Malaitans repatriated'). toll.high (200 killed): corroborated by Participedia + USIP summaries ('killed over 200'). Both ends sourced; range = documentation completeness, not rival estimates.
- Tier POL correct: organised internal ethnic/political violence, not extermination.

**slb-3 Weather Coast / Harold Keke (perpetrator, POL) → UNVERIFIED (quarantined).** Two grounds:
1. **Factual error corrected:** record called Augustine Geve an "Anglican priest." He was a **CATHOLIC** priest and politician (MP South Guadalcanal; Minister for Youth, Women & Sports). The Anglican order in the event is the Melanesian Brotherhood — the two were conflated. Fixed in tier_reasoning, toll.note, summary.
2. **Source over-attribution:** the GlobalSecurity.org citation was attached to a Keke-specific "campaign of killing and terror" claim, but on re-fetch that page does NOT mention Harold Keke or the Weather Coast at all — it covers the IFM/MEF conflict generally. It does not support the specific claim it was cited for; caveat rewritten to flag it as misattributed/background only.
- Substantive killings are NOT in doubt and were independently re-confirmed: Keke 50+ murders (Wikipedia, re-fetched); convicted March 2005 of Geve's murder with co-accused Cawa and Lela, life sentence; seven Melanesian Brothers killed Weather Coast April 2003 — Br. Nathaniel Sado tortured/killed first as accused spy, six more killed 24–25 April (multiple Anglican sources, re-fetched).
- toll low=50 floor / high=null defensible (no verified GLF aggregate — not invented). Tier POL correct: targeted assassination/terror, not extermination.
- Note: source uses "Guadalcanal Revolutionary Army (GRA)"; the GLF name (later, same Keke faction) corroborated in broader literature — consistent, not an error.

**No invented sources added.** All edits either corrected URLs to live copies, corrected a factual error, flagged a misattributed source, or appended audit-verification notes to existing caveats. Events VERIFIED: 2 (slb-1, slb-2). Events flagged UNVERIFIED: 1 (slb-3).
