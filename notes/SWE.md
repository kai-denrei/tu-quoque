# Sweden (SWE) — research log

Built from scratch on 2026-06-19. Web tools (WebSearch/WebFetch) loaded and used for real research.

## Final structure
- **Victim ("Done to them"):** 2 events
  - `swe-1` Stockholm Bloodbath, 1520 (POL) — RESEARCHED
  - `swe-2` Great Famine of 1695–1697 in the Swedish realm (STR) — UNVERIFIED (toll caveat)
- **Perpetrator ("In their name"):** 3 events
  - `swe-3` Swedish devastation of Germany in the Thirty Years' War, 1630–1648 (WAR) — RESEARCHED
  - `swe-4` Compulsory sterilisation / eugenics programme, 1934–1976 (STR) — RESEARCHED
  - `swe-5` Saint-Barthélemy slave colony & Swedish slave trade, 1785–1847 (STR) — RESEARCHED

Wrapper status: **RESEARCHED**.

## What is solid
- **Stockholm Bloodbath (1520):** Best-documented Swedes-as-victims event. Chief executioner Jörgen Homuth counted 82 executed (7–10 Nov 1520); other accounts give close to 100. Agent is unambiguous: Danish king Christian II via Archbishop Gustav Trolle's heresy verdict. Confirmed across Wikipedia, Britannica and the Swedish History Museum (Historiska museet). Foundational to Swedish independence under Gustav Vasa.
- **Thirty Years' War devastation:** The "Swedish army alone destroyed ~2,000–2,200 castles, 18,000 villages, 1,500 towns" tally traces to historian William Langer and is repeated by the ICRC blog, New World Encyclopedia and History Learning. It is a PROPERTY-destruction count, not a death count — flagged as such. Sweden was a primary belligerent on German soil 1630–1648.
- **Forced sterilisation (1934–1976):** ~63,000 sterilised (~90% women), ~32,000 involuntary. Corroborated across Wikipedia, an Indiana Int'l & Comparative Law Review article (vol. 8 p.475, 1998), Nature, NPR, BioEdge, WSWS. Unit is bodily violation, NOT death — death toll deliberately null.
- **Saint-Barthélemy slave colony:** Gustav III acquired the island 1784/85; Swedish West India Company (1786) ran Gustavia as a duty-free slave entrepôt; crown took 1/4 of profits. Slave trade banned 1813 (Treaty of Stockholm w/ Britain); slavery abolished 9 Oct 1847, when 523 enslaved people were bought free at 80 riksdaler each. Swedish direct shipping was tiny in Atlantic terms (~0.02% of ships).

## What is contested / could NOT be verified
- **Famine toll for Sweden PROPER:** No clean sourced number exists. Sources state only that the crude death rate in northern/central Sweden "more than doubled" in 1696–1698 (Norrland worst-hit). The well-quantified losses are in OTHER parts of the same Swedish realm: Finland ~150,000 (≈1/3 of ~500,000) and Estonia/Livonia ~70,000–100,000 (≈1/5). Hence `swe-2` toll.low/high = null and event status = UNVERIFIED. The event is real and well documented; only the Sweden-proper death count is unsourceable.
- **Stockholm Bloodbath exact count:** 82 vs ~100 — genuine dispute over the count, not the event. Captured as a range with `disputed: true`.
- **Thirty Years' War Swedish-attributed DEATHS:** Cannot be isolated from total war mortality (German population fell ~15–16M → ~11M; total deaths ~4–8M from all armies, famine, plague). Death toll therefore null; anchors are the property tally + war-wide demographic decline.

## Boundary correction (avoided a common error)
- **Sack of Magdeburg (1631, ~20,000 dead)** — the worst single massacre of the Thirty Years' War — was committed by the **Catholic Imperial/League army under Tilly** against a city ALLIED to Sweden. It is NOT a Swedish act and is explicitly EXCLUDED from the perpetrator ledger; it appears only as a `tier`-supporting source in `swe-3` to mark the boundary.

## Asymmetry note
The victim side is genuinely thinner: Sweden has not been invaded/occupied in modern times, so well-documented mass-death events with Swedes as principal victims are few, and the strongest famine event resists a Sweden-proper number. This is stated in the country `note`, not balanced with invented figures.

## Real sources consulted
- Wikipedia: Stockholm Bloodbath; Great Famine of 1695–1697; Great Famine of Estonia; Swedish intervention in the Thirty Years' War; Thirty Years' War; Sack of Magdeburg; Compulsory sterilisation in Sweden; Swedish slave trade; Swedish West India Company.
- Britannica: Stockholm Bloodbath; Sack of Magdeburg.
- Historiska museet (Swedish History Museum): The Stockholm Bloodbath.
- ICRC Law & Policy blog (2017): "The Thirty Years' War: the first modern war?"
- Scandinavian Journal of History 39(4) (2014): Voutilainen et al., Great Finnish Famine (abstract).
- Indiana Int'l & Comparative Law Review 8(2):475 (1998): Sweden's forced sterilization policy.
- Journal of Slavery and Data Preservation 6(3):113: Swedish Caribbean Colonialism / St. Barthélemy archive.
- WSWS (1999) — used only for corroborated ~62,000 sterilisation figure, flagged as a politically committed outlet.

## Note on status vocabulary
Per task spec, event statuses use RESEARCHED/UNVERIFIED and wrapper uses RESEARCHED. The existing atlas index.json uses VERIFIED/UNVERIFIED; SWE was added to index.json with status "RESEARCHED" to match this entry's wrapper. If the maintainer normalises to VERIFIED, SWE should map to VERIFIED.

## Audit

**Auditor pass — 2026-06-19 (adversarial source-integrity + tier audit). Posture: every citation assumed FAKE until proven real.**

### Verdict
- Events VERIFIED: 4 of 5 (swe-1, swe-3, swe-4, swe-5).
- Events UNVERIFIED: 1 (swe-2).
- Country status: **UNVERIFIED** (forced by the single UNVERIFIED event; country is VERIFIED only if ALL events are).
- Statuses migrated from RESEARCHED -> VERIFIED where falsification failed; swe-2 kept UNVERIFIED.

### Source integrity (tried to falsify all 15 citations across 5 events)
Every source was independently re-checked. All works/authors/URLs are REAL — none invented. Findings:

- **swe-1 (Stockholm Bloodbath) — VERIFIED.** Wikipedia (executioner Jörgen Homuth's count of 82 + full victim breakdown), Historiska museet ("nearly 100" -> toll.high), Britannica (summary). Britannica returned HTTP 403 to the automated fetch but the page is live (anti-bot block, not a dead/fake URL) and its content matches the cite, re-confirmed via search. Both toll ends independently sourced.
- **swe-2 (Great Famine 1695–97) — UNVERIFIED, quarantine UPHELD.** All three sources real and supporting their claims (Wikipedia GF 1695–97: >double crude death rate in N/central Sweden, Finland ~150,000/~500,000; Wikipedia GF of Estonia: ~70,000–100,000 / ~one-fifth; Voutilainen, *Scand. J. Hist.* 39(4):425–447 (2014) — confirmed real via journal listing/abstract; killed >quarter of Finland's population). BUT no source yields a **Sweden-proper death total** — that number is genuinely unsourceable. toll.low/high stay null; status stays UNVERIFIED. This is a real evidentiary gap, NOT to be papered over with an invented figure.
- **swe-3 (Thirty Years' War devastation) — VERIFIED.** ICRC blog re-confirmed verbatim (2,200 castles / 18,000 villages / 1,500 towns / one-third of German towns). Important nuance: the ICRC text does NOT itself name Langer, so the caveat correctly frames the Langer attribution as "traced/widely repeated," not as stated by ICRC. Wikipedia TYW confirms the war-wide decline. Boundary source (Sack of Magdeburg) re-confirmed: ~20,000 dead by the Imperial/League army under Tilly/Pappenheim against a Swedish-allied city — correctly EXCLUDED from the Swedish ledger.
- **swe-4 (compulsory sterilisation) — VERIFIED, with a citation-fidelity FIX.** ~63,000 (1934/35–1976), ~90% women, 1997 Dagens Nyheter scandal corroborated across Anadolu, BioEdge, Nature, EDF + Wikipedia. The 2000 Swedish govt report (~21,000 forced + ~6,000 coerced + ~4,000 undetermined ≈ 31,000) matches the ~32,000 involuntary claim. **Correction:** the law-review source's real author/title is **Stephanie Hyatt, "A Shared History of Shame: Sweden's Four Decade Policy of Forced Sterilization and the Eugenics Movement in the United States," Indiana Int'l & Comp. L. Rev. 8(2):475–503 (1998).** The original cite dropped the author and paraphrased the title; vol/issue/page were correct and the work is genuine, so this is a fidelity fix, not a falsification. WSWS bias (Trotskyist) is disclosed in caveat — adequate.
- **swe-5 (Saint-Barthélemy slave colony) — VERIFIED, with an author-attribution FIX.** Wikipedia (Swedish slave trade + Swedish West India Company) confirms every structural claim (1784 acquisition, 1786 company, Gustav III largest shareholder 10%, 3/4–1/4 profit split, ~0.02%/~0.14% shipping fractions, 1813 ban, 1847 abolition, ~2,000 Gold Coast enslaved). **Correction:** the JSDP archive's real creators are **Fredrik Thomasson, Ale Pålsson & Victor Wilson** (Uppsala / Åbo Akademi), JSDP 6(3):113–128 (2025) — the original "Holroyd et al." attribution was WRONG and has been corrected. The work itself is genuine (confirmed via JSDP listing + the SweCarCol project, swecarcol.ub.uu.se).

### Tier re-derivation (done independently from facts BEFORE reading assigned tiers)
- swe-1 -> **POL** (targeted killing of identified political/clerical elite to crush opposition). Assigned POL. ✓
- swe-2 -> **STR** (climate famine + disease, no human agent — disease-driven = STR, never EXT). Assigned STR. ✓ STR-vs-EXT correctly enforced.
- swe-3 -> **WAR** (sustained army devastation of towns/villages/civilians across a war). Assigned WAR. ✓
- swe-4 -> **STR** (state programme of forced bodily violation of a targeted population; not a killing campaign). Assigned STR. ✓ Correctly NOT EXT.
- swe-5 -> **STR** (organised state-sanctioned chattel slavery/trafficking). Assigned STR. ✓
- **No tier changes required.** All five independently re-derived tiers matched the assigned tiers.

### Toll two-sided sourcing
- swe-1: low (82, Wikipedia/executioner) + high (~100, Historiska museet) — both ends sourced. ✓
- swe-2: low/high null by design (Sweden-proper count unsourceable) — correct, drives UNVERIFIED.
- swe-3/swe-4/swe-5: death tolls correctly null (deaths not separable / unit is not deaths — property destruction, sterilisations, enslavement respectively). Display anchors are appropriately caveated. No single-number death toll is being passed off as a verified count.

### Ledger balance (law 1)
Both ledgers populated: victim (swe-1, swe-2) and perpetrator (swe-3, swe-4, swe-5). The country `note` states the victim-side asymmetry honestly (Sweden not invaded/occupied in modern times; famine resists a Sweden-proper number) rather than inventing balance. No demand for invented events.

### Net changes written to SWE.json
1. swe-1, swe-3, swe-4, swe-5: status RESEARCHED -> VERIFIED.
2. swe-2: status UNVERIFIED retained; quarantine note expanded to record that re-verification confirms the sources are real but the Sweden-proper toll remains unsourceable.
3. swe-4 source cite corrected to add author (Stephanie Hyatt) + full title; caveat added.
4. swe-5 source cite corrected (Thomasson/Pålsson/Wilson, not "Holroyd et al."); caveat added.
5. Per-event `audit` fields added to all five events; corroboration/boundary caveats refreshed.
6. Country `status` -> UNVERIFIED.
7. No sources invented, removed, or fabricated. Two citation-fidelity corrections; zero falsified-source quarantines (all sources proved real).
