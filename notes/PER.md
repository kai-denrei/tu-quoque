# Peru (PER) — research log

Built from scratch, 2026-06-18. Web tools (WebSearch/WebFetch) loaded and used for all events.

## Ledger shape
- **Victim (2):** Andean/Inca demographic collapse (STR); Chilean occupation of Lima in the War of the Pacific (WAR).
- **Perpetrator (3):** Putumayo genocide (EXT); state share of the 1980–2000 internal armed conflict (POL); Fujimori-era forced sterilizations (STR).

The standout dual-lens case is **Putumayo**: a Peruvian rubber baron (Julio César Arana) annihilating Peru's own Amazonian Indigenous peoples — perpetrator and victim are both Peruvian. Noted explicitly in the country `note`.

## What is solid
- **Putumayo (per-3):** Casement's contemporary FO estimate of ~30,000 killed over ~12 years is firm as the low; perpetrator (Arana / Peruvian Amazon Company, London 1907) and method are well attested across multiple sources (Wikipedia, World Without Genocide, Survival International). Status RESEARCHED.
- **Internal conflict state share (per-4):** CVR 2003 figure of ~69,280 dead/disappeared with ~37% to state agents, ~54% to Shining Path is canonical and well documented (CVR, WaPo 2003, NSArchive). Named massacres (Accomarca, Barrios Altos, La Cantuta) confirmed. Status RESEARCHED.
- **Forced sterilizations (per-5):** Official ~260,874 sterilizations + ~21,494 vasectomies (1996–2000); scholarly ~300,000; victims overwhelmingly poor Quechua women; 2024 CEDAW/OHCHR ruling. Status RESEARCHED.

## What is contested
- **Conflict toll:** Rendón's 2019 reanalysis revised the CVR total DOWN to ~48,000 while raising the state's RELATIVE share above Shining Path's. Both views recorded; numeric low/high left null because no clean absolute state-caused count exists (applying a % to the total would be an inference). Tier kept POL.
- **Putumayo high bound:** the ~100,000 figure spans the entire 1879–1912 Amazon rubber boom, wider than Arana's company alone — flagged as an outer ceiling, not this perpetrator's count.

## What could NOT be verified (→ null + UNVERIFIED)
- **Andean collapse (per-1):** absolute death count. Pre-conquest baseline is genuinely contested (Cook 1981: ecological max ~13.3M vs disease model ~3.25–8M; others 9–16M). Recorded as a ~90–93% population-DECLINE figure, numeric low/high null. Cook's monograph cited at second hand via aggregators — not directly fetched. Status UNVERIFIED. Tiered STR (disease-driven, not deliberate extermination).
- **War of the Pacific (per-2):** no verified separate civilian-massacre death count under the Chilean occupation. The ~11,000–14,000 figure is battle casualties (both armies, mostly combatants) at Chorrillos/Miraflores, not a civilian atrocity toll. Occupation harm well documented as pillage/extortion (National Library stripped to 378 of ~56,000 books). Numeric low null. Status UNVERIFIED.
- **Sterilization deaths:** individual deaths documented (Mamerita Mestanza → IACHR; Celia/Edith Ramos → Inter-American system) but no reliable aggregate death count, so numeric toll null; load-bearing harm is the sterilization count carried in the display string.

## Real sources consulted
- Wikipedia: Truth and Reconciliation Commission (Peru); Putumayo genocide; Peruvian Amazon Company; Spanish conquest of the Inca Empire; Forced sterilization in Peru; Occupation of Lima; War of the Pacific.
- Noble David Cook, *Demographic Collapse: Indian Peru, 1520–1620* (CUP, 1981) — via aggregators, not direct.
- Silvio Rendón (2019) reanalysis of CVR estimate — via National Security Archive briefing book.
- World Without Genocide — Putumayo Genocide.
- Survival International — "Death in the Devil's Paradise" (rubber boom).
- OHCHR (Oct 2024) — CEDAW forced-sterilisation ruling.
- The Conversation — Fujimori forced sterilizations.
- Washington Post (Aug 2003) — CVR report coverage.
- ScienceDaily/Phys.org (2011) — Yucay Valley population-decline study.

## NO invented sources or numbers
Every figure traces to a named source; every soft figure is null + noted. No citation, author, or URL was fabricated.

## Audit
Adversarial source-integrity + tier audit, 2026-06-18 (Opus 4.8). Premise: assume every citation fake until proven otherwise. Every source falsification-tested against the web; tiers re-derived from facts before reading the assigned tier.

**Result: country UNVERIFIED. 1 event VERIFIED (per-5), 4 UNVERIFIED. No fabricated sources found — the integrity problems are MISATTRIBUTED citations (right figure, wrong supporting source), not invented ones.**

### Tier re-derivation (all 5 independently re-derived; all CORRECT as assigned)
- **per-1 STR** — Andean collapse overwhelmingly Old World epidemics; no deliberate intent to exterminate a defined group → STR, NOT EXT. Correct. (STR-vs-EXT discipline holds.)
- **per-2 WAR** — foreign army invasion + occupation + sack of a defeated population → WAR. Correct.
- **per-3 EXT** — deliberate terror-killing of defined Indigenous groups to ~90% destruction → EXT, NOT STR (this was intentional killing, not disease). Correct.
- **per-4 POL** — state political violence against civilians in counterinsurgency; insurgent (Shining Path) majority share NOT absorbed into the state ledger → POL. Correct.
- **per-5 STR** — coercive state suppression of a group's reproduction by quota policy; structural, not a massacre → STR, NOT EXT/POL. Correct.

### Source falsification — what FAILED
1. **per-3 toll.low (Casement 30,000) — citation misattributed → FIXED, event UNVERIFIED.** The figure is real (World Without Genocide, directly fetched, explicitly attributes "30,000 killed in twelve years" to Casement). But the cited *Peruvian Amazon Company* Wikipedia article does NOT contain it — that article attributes 40,000/10yr to the Barbadian **John Brown**, and describes thirty Barbadian *interviews* in Casement's 1912 report (not "30 overseers" underpinning a 30,000 count). Re-pointed toll.low to World Without Genocide; re-scoped the Peruvian Amazon Company cite to "summary" (it does verify the 1907 London registration, £1M capital, ~200 Barbadians).
2. **per-4 tier (Rendón ~48,000) — citation misattributed → FIXED, event UNVERIFIED.** Rendón's reanalysis is real and verified via the **primary SAGE article** (*Research & Politics*, 2019: ~48,000 total, State a larger relative share than Shining Path; rebutted by Manrique-Vallier & Ball / HRDAG, defended in Rendón's rejoinder). But the originally cited **National Security Archive briefing book** (directly fetched) does NOT mention Rendón, the 48,000, or any reweighting — it repeats only the CVR ~69,000. Re-pointed the source to the SAGE primary article.
3. **per-4 source #3 (WaPo Aug 2003) — URL unconfirmed (flagged, not removed).** WaPo returned 403 (paywall/bot-block); search surfaced a *different* 2003 WaPo CVR article ("Blame and Shame on Display in Peru," 11 Sep 2003) rather than the cited "Peru Panel Details Toll Of Violent 2 Decades." A contemporaneous WaPo CVR article demonstrably exists and the ~69,280 it supports is independently verified, so the claim stands; the specific URL is marked unconfirmed in the caveat.
4. **per-2 toll wording — corrected.** The "~11,000–14,000" is killed+wounded COMBINED across Chorrillos + Miraflores (Chorrillos alone ~11,000–11,500 casualties per the Battle of San Juan and Chorrillos article), not "killed" alone as the note implied. Note tightened. Already UNVERIFIED (no civilian death count) — unchanged.

### Source falsification — what PASSED (real + supporting)
- per-1: Cook 1981 monograph (ISBN 9780521239950, CUP, CLAS #41 — confirmed extant); Wikipedia Spanish conquest of the Inca; ScienceDaily 2011 Yucay study (real; ~40% LOCAL decline, correctly caveated as mechanism-not-empire-toll).
- per-2: Occupation of Lima (Lynch as political chief; National Library 378 of 56,000 — confirmed); War of the Pacific (Treaty of Ancón / Tarapacá — confirmed); Battle of San Juan and Chorrillos casualty band confirmed.
- per-3: Putumayo genocide Wikipedia ("32,000 to 40,000+", 90% loss, Casement); Survival International "Death in the Devil's Paradise" (Arana methods, Bora/Witoto/Andoke, Casement); World Without Genocide (all three figures); Peruvian Amazon Company (1907 registration).
- per-4: CVR Wikipedia (~69,280; 37% state / 54% SP / 1.5% MRTA; Accomarca/Barrios Altos/La Cantuta — all confirmed); Rendón SAGE primary (verified).
- per-5 (**VERIFIED**): Forced sterilization in Peru Wikipedia (260,874 + 21,494 vasectomies; ~300,000 scholarly; Yong Motta; Mamerita Mestanza); OHCHR Oct 2024 CEDAW ruling (real — 403 was a bot-block, confirmed via search; intersectional discrimination, crime-against-humanity note, ~300,000); The Conversation (real; 272,028 / 1996–2001, quotas, Indigenous targeting).

### Why per-1 and per-2 stay UNVERIFIED
Not a source failure — both have all sources verified. They stay UNVERIFIED because their absolute tolls are genuinely unverifiable by design (per-1: contested pre-conquest baseline, decline-not-count; per-2: no separate civilian-massacre death count exists, only a both-armies battle casualty band). Honest null tolls, correctly flagged.

### Ledger / Law 1
Both ledgers populated where the record supports it (victim ×2, perpetrator ×3); no invented balance demanded. Putumayo's perpetrator-and-victim-both-Peruvian framing holds.
