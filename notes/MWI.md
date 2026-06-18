# Malawi (MWI) — research notes

Built from scratch 2026-06-18. No prior seed file. Web tools (WebSearch/WebFetch) loaded and used for real research.

## Final entry shape
- **Victim ledger (2):** mwi-1 Lake Malawi slave trade (c.1840–1895, STR); mwi-2 First World War forced military porterage / tenga-tenga (1914–1918, STR).
- **Perpetrator ledger (1):** mwi-3 Repression under the Banda one-party state (1964–1994, POL).
- Country status: RESEARCHED. Events mwi-1 and mwi-2: UNVERIFIED (toll undocumented). mwi-3: RESEARCHED.

## What I found

### Victim side
1. **Lake Malawi slave trade.** The dominant pre-colonial atrocity affecting the people of present-day Malawi. Swahili-Arab traders (the Jumbe at Nkhotakota from c.1840; Mlozi in the north/Karonga) plus Yao chiefs (Makanjira, Mponda, Zarafi) who raided Chewa and others. Cited scale: ~20,000 captives/year shipped across the lake to Kilwa by the 1850s; Johnston estimated the middle Luangwa alone supplied >2,000 victims/year; ~20% caravan mortality en route. Livingstone (1861) described the Nkhotakota shore strewn with human remains. KEY DUAL-LENS POINT: the Yao were both prey and the principal African raiders/brokers — same event, both ledgers.
2. **WWI Carrier Corps (tenga-tenga).** British Nyasaland conscripted men en masse as military porters for the East African campaign. Mobilisation was extreme — estimates of 150,000–200,000 men from a population of ~1 million; one source notes porter-to-soldier ratios over 15:1. One reference figure: ~4,400 Nyasaland carriers killed or died of disease on service. The recruitment burden fed the 1915 Chilembwe rising.

### Perpetrator side
3. **Banda regime (1964–1994).** Hastings Kamuzu Banda's one-party MCP state: detention without trial, torture, exile, assassination; enforced by Special Branch and the paramilitary Malawi Young Pioneers. Human-rights groups: at least ~6,000 killed/tortured/jailed; one estimate up to ~18,000 killed. Documented discrete atrocity: the 1983 "Mwanza Four" (Matenje, Gadama, Sangala, Chiwanga) murdered and staged as a car accident; confirmed by 1994–95 Commission of Inquiry and court proceedings.

## What is contested / could NOT be verified
- **Slave-trade death toll:** No reliable count exists. The 20,000/year figure is people *trafficked*, not deaths; the ~20% caravan mortality is an observer estimate. toll.low and toll.high left **null**; event UNVERIFIED. NOT fabricated to fill the schema.
- **WWI Nyasaland carrier deaths:** Records explicitly described as "unreliable" by the 1914-1918-Online War Losses (Africa) handbook. Documented low ~4,400; no defensible Nyasaland-specific upper bound found, so toll.high left **null**; event UNVERIFIED.
- **Banda toll:** Regime kept no records of killings. 6,000 (killed+tortured+jailed) and 18,000 (deaths-only) are not strictly commensurable — flagged disputed. The 18,000 figure is attributed only to "one estimate" in the source; original authorship not located.

## Events considered and NOT included (and why)
- **Chilembwe uprising (1915):** Real and significant but small in scale (~36–40 rebels executed, ~3 settlers killed). Folded into context of mwi-2 rather than given its own ledger slot.
- **Nyasaland famine of 1949:** Official toll only ~200 starvation deaths; colonial policy worsened it but the death count is too small for a major mass-atrocity entry. Mentioned here for completeness, not in the file.
- **1959 Nyasaland State of Emergency / Nkhata Bay:** 51 Africans killed (20 at Nkhata Bay) by British forces; Devlin Commission doubted the "murder plot" pretext. Real colonial-state atrocity but smaller than the two victim events chosen; noted here.
- No documented Malawian-state cross-border / foreign-victim mass atrocity was found, so the perpetrator ledger is domestic (Banda) only — explained in the country note. The asymmetry (2 victim / 1 perpetrator) is genuine, not padding.

## Real sources consulted
- Wikipedia: Nyasaland famine of 1949; Hastings Banda; Chilembwe uprising; Nyasaland Volunteer Reserve; Jumbes of Nkhotakota; History of Malawi; Nyasaland emergency of 1959.
- 1914-1918-Online International Encyclopedia of the First World War: "Carrier Corps"; "War Losses (Africa)".
- UNESCO World Heritage tentative list: Malawi Slave Heritage Route and Dr David Livingstone Trail (direct fetch 403; used via search summary + corroboration).
- Steve Bennett compilation on slavery in Nyasaland (drawing on Johnston/Livingstone) — secondary web compilation, flagged as such.
- Human Rights Watch World Report 1989, Malawi chapter (contemporaneous monitoring of Banda repression).
- New World Encyclopedia, Explaining History podcast article — consulted for Banda toll attribution (no firmer numeric attribution found than the Wikipedia figures).

## Audit

Adversarial source-integrity + tier audit, 2026-06-18. Every citation was treated as fake until proven otherwise; each source was re-fetched or re-searched live. Tiers were independently re-derived from the facts before reading the assigned values.

**Country status: UNVERIFIED** (only 1 of 3 events fully verifiable).

### mwi-1 — Lake Malawi slave trade — STR — status UNVERIFIED (quarantined)
- **Tier:** independently re-derived STR (sustained predatory raiding/removal for export, not extermination of a defined group). Matches assigned. Not EXT.
- **Sources:** UNESCO tentative list 6904 confirmed REAL — it is the current entry (submitted 2025-10-06), superseding the older entry 5603; 403s on direct fetch but supports the summary and the ~20,000 slaves/year figure (corroborated independently by the Jumbes of Nkhotakota Wikipedia article). Steve Bennett page fetched directly: confirms the 1,000-captive batching and Johnston's >2,000/year Luangwa estimate.
- **Defect found and FIXED:** the Steve Bennett cite and the toll.note asserted "~20% caravan mortality en route." That figure is NOT on the Bennett page (verified by direct fetch) and 20% is in fact a trans-Saharan-route figure; East African / Lake Malawi caravan mortality is generally held to be far higher (~50%+). The 20% claim was a source-claim mismatch; it has been removed from the cite and the toll.note rewritten with a QUARANTINE prefix. No mortality percentage is now asserted.
- **Toll:** genuinely uncountable; low and high remain null. UNVERIFIED is correct.

### mwi-2 — WWI forced porterage (tenga-tenga) — STR — status UNVERIFIED
- **Tier:** independently re-derived STR (death via forced labour + structural neglect: disease/exhaustion). Explicitly NOT EXT — this is the disease-driven-is-STR rule in action. Matches assigned.
- **Sources:** all three verified verbatim. ~4,400 carrier deaths confirmed on the Nyasaland Volunteer Reserve article. War Losses (Africa) confirms: Nyasaland records "unreliable", 80%+ adult-male mobilisation, 15:1 laborer ratio, >154,800 East African carrier deaths (>12.4%). Carrier Corps article confirms Nyasaland recruitment, ≥95,000 deaths (~10%), and the "least studied" characterisation. Chilembwe context corroborated.
- **Toll:** low (4,400) solidly sourced; high cannot be bounded — the source itself calls the records unreliable — so toll.high stays null. UNVERIFIED rests ONLY on the null/unbounded high end; the low end and every source are sound. No defect.

### mwi-3 — Banda one-party repression — POL — status VERIFIED
- **Tier:** independently re-derived POL (political repression of opponents, not destruction of a defined ethnic/national group). Matches assigned.
- **Sources:** all verified. The at-least-6,000 (killed+tortured+jailed) and as-many-as-18,000 (deaths, "one estimate") figures and the Mwanza Four tent-pin killings are confirmed verbatim on the Hastings Banda Wikipedia article. HRW 1989 Malawi chapter: PDF is real (49.5KB) but fetched as compressed binary; contents confirmed via the Refworld mirror (torture, extrajudicial killings, detention without trial, Orton/Vera Chirwa case). Mwanza Four: 1994 Commission of Inquiry and 1995 trial confirmed via the Malawi Supreme Court of Appeal record and Malawi press.
- **Defect found and FIXED:** toll.note and summary claimed the Mwanza killings were "confirmed by … court proceedings." In fact the 1994 Commission of Inquiry established state responsibility, but the 1995 criminal trial of Banda, Tembo and others ended in ACQUITTAL for lack of evidence. Both the toll.note and the summary were corrected to distinguish the Commission's finding from the court's acquittal.
- **Toll:** both ends sourced (low 6,000, high 18,000); commensurability caveat already flagged via disputed=true. Both ledgers populated. VERIFIED.

### Summary of changes written to MWI.json
1. mwi-1 toll.note: QUARANTINE prefix; removed the unsupported/incorrect 20% mortality claim; noted 20,000/year is corroborated and the death count is null.
2. mwi-1 Steve Bennett source: removed "~20% caravan mortality" from the cite; added audit caveat documenting the misattribution.
3. mwi-3 toll.note + summary: corrected "confirmed by court proceedings" to reflect the 1994 Commission finding vs the 1995 acquittal.
4. mwi-3 HRW source caveat: documented PDF-was-binary, verified via Refworld mirror.
5. mwi-3 18,000-figure source caveat: noted confirmed-verbatim-but-single-unattributed-estimate.
6. Added `_audit` fields to all three events.
7. Statuses: mwi-1 UNVERIFIED, mwi-2 UNVERIFIED, mwi-3 VERIFIED → country UNVERIFIED.
- No sources were invented. No tier corrections were needed (all three were correctly derived).
