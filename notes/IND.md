# India (IND) — research log

Built from scratch on 2026-06-18. Dual-ledger entry: 3 victim events, 2 perpetrator events. All five marked RESEARCHED; wrapper RESEARCHED. Web tools (WebSearch + WebFetch) loaded and used.

## Victim ledger ("Done to them")

### ind-1 — Great Famine of 1876–1878 (STR)
- Agent: British Raj, Viceroy Lord Lytton's administration.
- Toll: range ~5.6M–9.6M excess deaths; a careful recent demographic reconstruction yields ~8.2M.
- Contested point is causal, not whether millions died: monsoon failure / Deccan drought vs colonial policy. A record ~320,000 tons of grain exported during the crisis; Lytton's laissez-faire relief and punitive work-camp rations widely cited as aggravating.
- Sources: Wikipedia "Great Famine of 1876–1878" (range + export detail), Mike Davis *Late Victorian Holocausts* (policy-culpability thesis, flagged as polemical/contested), Wikipedia "Famine in India" (low bound).

### ind-2 — 1943 Bengal famine (STR)
- Agent: British Raj / Churchill's War Cabinet.
- Toll: ~0.8M–3.8M; Ó Gráda scholarly consensus ~2.1M; Famine Inquiry Commission excess ~1.5M; Greenough's upward revision of Sen reaches ~3.8M.
- This is the SAME event GBR.json already carries as a *perpetrator* row (gbr-1). Deliberately mirrored here as India's victim facet — the atlas dual lens working as designed.
- Causal dispute: fall of Burma + Oct 1942 cyclone + crop disease + provincial hoarding vs British "denial" policies (rice/boat seizure) and shipping refusal. Mukerjee (*Churchill's Secret War*) pushes strong culpability; Sen and Tauger dispute parts.
- Sources: Wikipedia "Bengal famine of 1943" (verified via WebFetch — range, scholar attribution, policy role), Ó Gráda consensus, Mukerjee (flagged).

### ind-3 — Partition communal violence 1947–48 (WAR)
- Agent: communal mobs/militias of all three communities (Hindu, Muslim, Sikh) amid British withdrawal and the new India/Pakistan states.
- Toll: contested. Older estimates ~180,000/200,000 to 1M; recent census-comparison demographic work (Bharadwaj/Khwaja/Mian 2008; Harvard scholarship reported 2018) argues 2–3M, with ~14–18M displaced. I set low=200,000, high=2,000,000 to bracket the conventional and the upper demographic range conservatively.
- KEY FRAMING NOTE: Partition is the cleanest example of the atlas premise — same communities victim AND perpetrator. Only the *victim* facet of India's people is recorded here; the perpetrator share is shared with Pakistan and is intentionally NOT double-counted on India's perpetrator ledger. Documented this in the country note.
- Sources: Wikipedia "Partition of India" (conventional low range), Harvard Gazette 2018 / Bharadwaj-Khwaja-Mian (high range).

## Perpetrator ledger ("In their name")

### ind-4 — Anti-Sikh pogrom 1984 (POL)
- Agent: Congress (I) organisers + mobs, Delhi police passive/complicit.
- Toll: official Delhi ~2,733 (initial ~325 revised up years later); nationwide official ~3,350; unofficial up to ~8,000 and as high as ~17,000. Official figure treated as a floor.
- Organised, not spontaneous: voter/ration lists used to find Sikh homes, iron rods/fuel/money distributed; Congress MP Sajjan Kumar convicted (life) Dec 2018, later acquitted in one case 2023.
- Sources: Wikipedia "1984 anti-Sikh riots" (verified via WebFetch — official 2,733, unofficial 8,000–17,000, organisation, Sajjan Kumar), HRW 2014, Sciences Po Mass Violence & Resistance.

### ind-5 — 2002 Gujarat violence (POL)
- Agent: Hindu nationalist mobs + complicity of Gujarat state govt and police (Modi administration as CM).
- Toll: official 1,044 (790 Muslims, 254 Hindus), ~223 missing; Concerned Citizens Tribunal ~1,926; some sources >2,000, majority Muslim.
- Multiple inquiries found premeditation and state/police complicity. Trigger: Godhra train fire 27 Feb 2002, 59 Hindu pilgrims dead — cause (arson vs accident) remains contested, noted in toll.note.
- Sources: Wikipedia "2002 Gujarat violence" (verified via WebFetch — official breakdown, CCT, premeditation/complicity, Godhra), HRW 2002 "We Have No Orders To Save You" (via Refworld), Al Jazeera 2023.

## Contested / could-not-fully-verify
- Every toll on this entry is a genuine range with active scholarly or official dispute; none is a single settled number. All ranges are sourced at both ends.
- Bengal 1943 and the Great Famine causal attribution (drought vs policy) is unsettled scholarship — handled by keeping tier STR and putting the dispute in toll.note + source caveats, not by picking a side.
- Partition toll has a wide gap between eyewitness-era and modern demographic figures; bracketed conservatively rather than adopting the highest claims.
- 1984 high toll (~17,000) and the Godhra cause are both contested; flagged in toll.note and caveats.

## Notes on schema
- Per the task's explicit event schema I used status values RESEARCHED / (UNVERIFIED available, none needed) and wrapper status RESEARCHED. The existing repo files use "VERIFIED" instead — flagging the divergence; followed the task instruction. If the project wants consistency with the other files, swap RESEARCHED → VERIFIED across IND.json and update index.json accordingly.
- index.json was NOT modified (count still 12, IND not listed). If IND should appear in the index, add an entry and bump count to 13.

## Real sources consulted
- WebSearch: Bengal famine 1943 toll; 1984 anti-Sikh pogrom; Partition 1947 toll; 2002 Gujarat; Great Famine 1876–78.
- WebFetch (full read): en.wikipedia.org Bengal_famine_of_1943; 1984_anti-Sikh_riots; 2002_Gujarat_violence.
- Cross-checked against existing GBR.json (shares the Bengal 1943 event from the perpetrator side).

## Audit
Adversarial source-integrity + tier audit, 2026-06-18. Working assumption: every citation FAKE until proven otherwise. WebSearch + WebFetch loaded and used to try to falsify each source. Result: **all 5 events VERIFIED; country VERIFIED.** One source-integrity defect found and corrected; no invented sources detected; no tier corrections required.

### Source existence + claim-support (each source attacked individually)
- **ind-1 Great Famine 1876–78.** Mike Davis, *Late Victorian Holocausts* — REAL (Verso, 2001; won the World History Association Book Prize 2002). Supports the policy-culpability/export summary as cited. Wikipedia toll figures (5.6M–9.6M, ~8.2M recent, ~320,000 tons grain exported) confirmed. "Famine in India" Wikipedia confirmed for the low bound. Both ends of the range sourced. PASS.
- **ind-2 Bengal famine 1943.** Ó Gráda consensus ~2.1M CONFIRMED; range 0.8M–3.8M CONFIRMED via WebFetch of the Wikipedia article; ~45,000 boats confirmed. Madhusree Mukerjee, *Churchill's Secret War* — REAL (Basic Books / Tranquebar, 2010); boat-denial and shipping-refusal claims confirmed; Sen/Tauger dispute is real (correctly flagged in caveat). Both ends sourced. Consistent with GBR.json gbr-1 (same STR tier, same range, same Ó Gráda anchor) — dual lens intact. PASS.
- **ind-3 Partition 1947–48.** Bharadwaj/Khwaja/Mian, "The Big March" (Harvard Kennedy School Faculty Research Working Paper, June 2008) — REAL; yields ~17.8M migrants and ~3.4M "missing"/killed, confirming the high end. Harvard Gazette 2018 article exists at the cited URL. Note: the record's high is conservatively capped at 2.0M (actual scholarship reaches ~3.4M) — a defensible under-claim, not an over-claim. Both ends sourced. PASS.
- **ind-4 Anti-Sikh 1984.** Wikipedia: official Delhi 2,733 (Ahuja Committee) + nationwide ~3,350 + unofficial 8,000–17,000 all CONFIRMED; Sajjan Kumar life sentence Dec 2018 CONFIRMED (note: a *second* conviction landed Feb 2025 — the older log line saying "later acquitted in one case 2023" is imprecise; the JSON does not carry that claim so no JSON edit needed). HRW 2014 — REAL, page fetched, supports the organised-killing/Congress/police-complicity summary and treats 2,733 as a floor. Sciences Po Mass Violence & Resistance (Lionel Baixas, 2009) — REAL, page fetched, explicitly supports the **tier** claim: "an organized, politically engineered action involving Congress politicians, Delhi police officers and Hindu civilians" with electoral-roll targeting. Excellent match for supports:"tier". PASS.
- **ind-5 Gujarat 2002.** Official 1,044 (790 Muslim / 254 Hindu) + CCT ~1,926 + >2,000 CONFIRMED via WebSearch. HRW 2002 "We Have No Orders To Save You" — REAL (exact title + state/police complicity content confirmed against the canonical hrw.org report and the HRW PDF). **DEFECT FOUND + FIXED:** the Al Jazeera (2023) source was tagged supports:"toll.high" but its cite text claimed the article carries the "official 1,044 toll with Muslim/Hindu breakdown." WebFetch of the article shows it does NOT — it says "At least 1,000... Activists put the toll at over twice that number." The toll.high tag is correct (the "over twice" = >2,000 is what supports the high), but the cite description misrepresented the source, so it was rewritten to quote what the article actually says and a verification caveat was added. The precise 1,044/790/254 breakdown is sourced from the Wikipedia reference, which does carry it. PASS after fix.

### Tier re-derivation (done before reading assigned tiers; taxonomy from data/tiers.json)
- ind-1 → famine + epidemic, intent contested → **STR** (assigned STR ✓). Disease-driven, not EXT — STR-vs-EXT enforced.
- ind-2 → famine + epidemic, intent diffuse/contested → **STR** (assigned STR ✓).
- ind-3 → deliberate civilian-targeting killing along religious lines during state breakup; not a single state's policy (≠POL), not destruction of a group as such (≠EXT), not famine (≠STR) → **WAR** (assigned WAR ✓).
- ind-4 → politically organised mass killing of a targeted minority as de facto party/state policy, not exterminatory → **POL** (assigned POL ✓).
- ind-5 → premeditated, politically organised mass killing with state/police complicity, not exterminatory → **POL** (assigned POL ✓).
All five tiers correct as assigned; no tier or tier_reasoning rewritten.

### Law 1 / ledger balance
Both ledgers populated as the record supports (3 victim: 1876–78, Bengal 1943, Partition; 2 perpetrator: 1984, Gujarat 2002). No invented event/toll/source to manufacture symmetry. Partition's perpetrator facet is intentionally not double-counted here (shared with PAK) — correct.

### Toll coverage
Every toll is a genuine disputed range with BOTH ends sourced. No single-source/single-number tolls. ind-4's 17,000 high lives inside the same Wikipedia reference tagged toll.low (it carries both 2,733 and 8,000–17,000) rather than getting its own tag — acceptable, the figure is sourced.

### Edits written to IND.json
1. ind-5 Al Jazeera source: cite text corrected to quote the article accurately ("at least 1,000... over twice that number"); verification caveat added noting it does NOT carry the 1,044/790/254 breakdown.
2. ind-5 HRW (Refworld) source: caveat added — report genuine (verified against canonical hrw.org copy + PDF); the Refworld mirror URL returns HTTP 403, so the canonical HRW URL is the authoritative live link.
3. All 5 event statuses RESEARCHED → VERIFIED; country status RESEARCHED → VERIFIED. JSON re-validated (python json.load: VALID).

### Residual flags (notes-level, no JSON impact)
- Old log line "Sajjan Kumar ... later acquitted in one case 2023" is imprecise vs the Feb 2025 second conviction; not in the JSON.
- Godhra trigger death count appears as both 58 and 59 across sources; JSON uses 59 (matches Wikipedia). Minor, within source variance.
- ind-3 high (2.0M) is conservative vs the ~3.4M demographic high; under-claim, left as-is by design.
