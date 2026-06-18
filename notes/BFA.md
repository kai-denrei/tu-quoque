# Burkina Faso (BFA) — research log

Built from scratch on 2026-06-18. Web tools (WebSearch/WebFetch) loaded and used; all four events have real, fetched sources.

## Final entry: 4 events, status RESEARCHED

### Victim ledger ("Done to them")
1. **bfa-1 — Volta-Bani War (1915-1917)** — colonial, WAR. French colonial reconquest of a ~1,000-village anti-colonial revolt; the largest expeditionary force France had ever fielded in West Africa. Toll: **at least ~30,000 Africans (low=30000, high=null)**, per the standard scholarly monograph (Saul & Royer, *West African Challenge to Empire*, 2001). High end left null — many engagements poorly documented, colonial undercounting incentive. French dead only a few hundred.
2. **bfa-2 — Barsalogho massacre (24 Aug 2024)** — contemporary, WAR. JNIM (al-Qaeda-aligned) killed civilians digging defensive trenches. Toll **disputed, ~133-600**: HRW verified ≥133 (low); French security assessment via CNN said up to 600 (high); UN SG said ~200. Deadliest single attack in Burkinabe history.

### Perpetrator ledger ("In their name")
3. **bfa-3 — Nondin and Soro massacre (25 Feb 2024)** — contemporary, WAR. Burkina Faso army summarily executed villagers accused of failing to report jihadists. Toll **at least 223 (low=223, high=null)**, incl. 56 children (HRW: 44 in Nondin, 179 in Soro). HRW: may amount to crimes against humanity.
4. **bfa-4 — Karma massacre (20 Apr 2023)** — contemporary, WAR. Army special-forces unit (BIR 3) killed villagers in apparent reprisal for a jihadist attack on militia. Toll **disputed, ~136-156**: CISC (Burkinabe NGO) ≥136 (low); HRW ≥156 incl. 45 children (high).

## What is contested
- **Barsalogho toll** is the most contested figure in the entry: a 133 (HRW, documented floor) to 600 (French intel via CNN) spread, with the UN at ~200. Shown as a range with the dispute flagged; low and high each independently sourced.
- **Karma toll**: 136 (CISC) vs 156 (HRW), with some press at 150-200. Used the two best-documented investigations as the band.
- **Volta-Bani toll**: "at least 30,000" is the scholarly floor; no defensible upper bound exists, so high=null. One search result confused a "~3,000" figure that actually refers to French casualties, not African — did NOT use it for the African toll.

## What could NOT be verified / deliberately omitted
- **Pre-colonial Mossi-kingdom atrocities** (slave-raiding, dynastic warfare): real but unquantified; no defensible death figure exists, so NO pre-colonial event was created rather than inventing one. Noted in the country "note".
- **Solhan/Tadaryat massacre (June 2021, ~100-170 dead, JNIM)**: a strong candidate victim event, but Barsalogho (2024) is larger and better-documented, so Barsalogho was chosen as the representative contemporary-victim event. Solhan is referenced in the country note context but not given its own object (kept to 2 events/ledger).
- **Broader army campaign toll**: HRW's 2026 report ("None Can Run Away") counts >1,800 civilians killed by state forces + VDP militias across 57 incidents, Jan 2023-Aug 2025, with ethnic Fulani communities targeted (described as ethnic cleansing). Used as the umbrella pattern in the country note and as a supporting source on bfa-3, rather than as a standalone event, because it aggregates many incidents.
- **Insurgency total**: Wikipedia infobox cites ~25,000 dead / ~2.06M displaced overall since 2015 (estimate). Used for context only, not as an event toll.

## Real sources consulted (all fetched/searched this session)
- Saul & Royer, *West African Challenge to Empire* (2001) — via Smithsonian catalog record + ResearchGate/Gale listings + dokumen.pub. Source of the ≥30,000 figure.
- Wikipedia: Volta-Bani War; Barsalogho massacre; Karma massacre; Solhan and Tadaryat massacre; Islamist insurgency in Burkina Faso.
- HRW: "Army Linked to Massacre of 156 Civilians" (Karma, May 2023); "Army Massacres 223 Villagers" (Nondin/Soro, Apr 2024); "Massacre Shows Need to Protect Civilians" (Barsalogho, Oct 2024); "Crimes Against Humanity by All Sides" + full report "None Can Run Away" (Apr 2026).
- CNN: Barsalogho 600 dead / French security assessment (Oct 2024).
- Africanews: Karma toll ≥136 per CISC (Apr 2023).
- Active History: "Africa's War" (WWI anti-colonial revolts / repression), context for Volta-Bani.
- Amnesty International, UN News, Al Jazeera, Bellingcat: cross-checks on Solhan/Barsalogho (not all cited in final JSON).

## Asymmetry note
Victim events (esp. the colonial Volta-Bani War, ~30,000) dwarf the perpetrator events (hundreds each) in scale. The perpetrator ledger is entirely 2023-2024 junta/VDP work. This asymmetry was NOT smoothed over — no toll inflated, no event invented. The dual-lens hook is geographic: both ledgers' contemporary events occur in the same northern provinces, the same population killed by jihadists on one side and by its own army on the other.

## Audit
Adversarial source-integrity + tier audit, 2026-06-18. Premise: treat every citation as fake until proven otherwise. Every source URL was independently fetched or search-confirmed this session.

**Verdict: country VERIFIED — all 4 events VERIFIED after one correction.**

### Source integrity — what was falsified and fixed
- **bfa-1 (Volta-Bani War) — toll.low mis-attribution, CORRECTED.** The record bound the "at least 30,000" African-dead figure to **Saul & Royer (2001)** via a Smithsonian catalog URL. Falsification attempt succeeded against the attribution (not the figure):
  - The Smithsonian URL (`si.edu/object/...siris_sil_968548`) returns **HTTP 403** to direct fetch; its existence is confirmed via WebSearch (it surfaces as a real Smithsonian Institution catalog record), but it could **not** be verified to contain any death figure. It is a library listing, not a quantified source.
  - The precise "30,000 Africans killed" figure is documented as **Thomas Vennes's own estimate** ("Understanding Colonial Violence," p. 87-88; verified by direct fetch of the academia.edu paper). Vennes does **not** attribute the number to Saul & Royer. Wikipedia's Volta-Bani article cites the "at least 30,000" figure to **Vennes 2018, p. 94**, not Saul & Royer.
  - Active History (2017, fetched) corroborates "up to 30,000" and names Saul & Royer as the sole monograph but does not pin the exact number to them.
  - **Fix:** toll.low rebound to Vennes (verified, fetchable); Saul & Royer demoted to `supports: summary` with a caveat noting the 403 + unconfirmed figure; Wikipedia source replaced by Vennes; quarantine note added to `toll.note` documenting the correction. Saul & Royer confirmed real (Amaury Talbot Prize 2001). The figure itself was never in doubt — only the source-to-claim binding, now corrected. Event → VERIFIED.
- **bfa-2 (Barsalogho) — VERIFIED.** HRW (29 Oct 2024) verified, states "at least 133 killed, 200+ injured, JNIM, unarmed trench-diggers" → matches toll.low. CNN (4 Oct 2024) verified, "up to 600 / French security assessment" → matches toll.high. Both bounds independently sourced; dispute correctly flagged.
- **bfa-3 (Nondin/Soro) — VERIFIED.** HRW (25 Apr 2024) verified: 223 total (44 Nondin / 179 Soro), 56 children, 25 Feb 2024, Thiou district/Yatenga, "may amount to crimes against humanity" — exact match. HRW "None Can Run Away" report (2 Apr 2026) verified to exist (316 pp.) and to cite Nondin/Soro. Single-number toll (low=223, high=null) is a legitimate documented "at least" floor, not a quarantine concern.
- **bfa-4 (Karma) — VERIFIED.** HRW (4 May 2023) verified: ≥156 (83 men, 28 women, 45 children), BIR 3, reprisal for the 15 Apr Aorema attack → matches toll.high. Africanews/CISC (29 Apr 2023) verified: ≥136 (incl. 50 women, 21 children) → matches toll.low. Both bounds independently sourced.

### Country-note correction (factual, separate from any event)
The note claimed HRW "counts at more than 1,800 civilians killed **by state forces and militias** between 2023 and 2025." Falsified: the HRW 1,800+ figure (precisely "at least 1,840" across 57 incidents, Jan 2023-Aug 2025) is an **all-sides combined** total — Burkinabe forces + VDP + JNIM — and HRW does **not** publish a state-only sub-total. Attributing the entire 1,800+ to state forces overstates the state-side toll. Note rewritten to attribute the figure to all sides while preserving the (separately accurate) ethnic-cleansing-of-Fulani-by-government finding.

### Tier re-derivation (done before reading assigned tiers)
All four independently re-derive to **WAR**; no changes:
- bfa-1: organized colonial reconquest/counter-insurgency, aim = pacification not destruction of a people → WAR (not EXT). No disease driver, so STR not in play.
- bfa-2: non-state armed-group mass killing of civilians in an insurgency, framed as punishing collaborators → WAR.
- bfa-3: state summary execution of civilians; HRW flags possible crime against humanity and the existing tier_reasoning already notes the EXT/POL edge — WAR defensible and retained.
- bfa-4: army reprisal mass execution during counter-insurgency → WAR.
No disease-driven (STR-vs-EXT) confusions anywhere in this country file.

### Ledgers
Both ledgers populated (2 victim, 2 perpetrator). Law 1 satisfied without invented balance; the colonial victim event (~30,000) is left dwarfing the perpetrator events (hundreds), asymmetry intact. No invented sources introduced; one mis-attributed source corrected with a verified replacement.
