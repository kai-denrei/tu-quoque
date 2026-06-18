# Belgium (BEL) — research log

Built from scratch on 2026-06-18. Web tools (WebSearch/WebFetch) loaded and used throughout.

## Final shape

- **Perpetrator ("In their name"): 1 event**
  - `bel-1` The Congo Free State (1885–1908) — POL.
- **Victim ("Done to them"): 2 events**
  - `bel-2` The Rape of Belgium (1914–1918) — WAR.
  - `bel-3` The Holocaust in Belgium (1942–1944) — EXT.

All three events: status RESEARCHED. Country status: RESEARCHED.

## Key editorial decisions

- **Congo Free State attribution.** The Free State (1885–1908) was legally Leopold II's *personal* possession, not the Belgian state. It is nonetheless placed in Belgium's perpetrator ledger: it was a Belgian sovereign's enterprise, financed and staffed through Belgium, and Belgium annexed it in 1908 and ran it as the Belgian Congo until 1960. The country `note` states this attribution explicitly. The same event appears in the Congolese ledger (COD.json `cod-1`) as a victim event — the intended dual-lens mirror.
- **Tier of the Congo Free State = POL, not EXT or STR.** Aligned with the existing COD.json entry. Most of the demographic loss came from disease, a collapsed birth rate, and flight driven by a deliberate forced-labor extraction regime — atrocity in service of plunder, not a campaign to exterminate a people. Vansina's local study attributed under 5% of deaths to direct violence; most historians reject the "genocide" label while documenting the lethal coercion system. POL (deliberate predatory policy) fits better than STR (passive structural/disease collapse) because the regime was deliberate, and better than EXT because there was no intent to destroy the group as such.
- **Did not add a separate post-1908 Belgian Congo perpetrator event.** Forced labor continued under direct Belgian rule (1908–1960), but sources (Wikipedia "Belgian Congo", Oxford Research Encyclopedia) indicate outright brutalization was curbed and no discrete, sourceable mass-death toll comparable to the Free State exists for that period. Folding it into the asymmetry note rather than inventing a toll.

## Tolls and what is contested

- **Congo Free State: heavily contested.** Range carried as 1.2M (low) – 10M (high).
  - High ~10M: Hochschild, *King Leopold's Ghost* (1998) — a population DECLINE figure, not a body count; flagged as such with a caveat (popular history, explicit moral case, challenged by demographers).
  - Low ~1.2M: Jean-Paul Sanderson demographic reconstruction (2020), most-likely estimate, plausible range 1–5M.
  - Other estimates in the literature (mapped, not all carried as toll endpoints): Casement ~3M; Forbath 5M+; Ndaywel è Nziem 5–10M. No baseline census before 1924, so all figures are extrapolations.
- **Rape of Belgium: not seriously contested at the scholarly level.** 6,000 killed in the 1914 reprisal massacres (Horne & Kramer, *German Atrocities, 1914*, the definitive study); ~23,700 total civilian deaths across the whole occupation (6,000 murdered + 17,700 in expulsion/deportation/imprisonment/execution). Excluded from the carried range: ~90,000 indirect "excess" deaths from occupation food shortages, and 3,000+ at the "Wire of Death" electric border fence. Noted that the wartime "Rape of Belgium" label was also Allied propaganda — figures drawn from the modern scholarly consensus, not contemporary atrocity claims.
- **Holocaust in Belgium: well documented, low dispute.** ~24,000 of the 24,916 Jews + 351 Roma deported via Kazerne Dossin (Mechelen) on 28 trains were killed (only ~1,240 survived). Total Belgian Jews murdered ~28,000 (28,902 in Belgium's own state reckoning), out of ~66,000 pre-war; about half were hidden and survived. Mechelen transport records are among the best-kept in occupied Europe.

## Could NOT verify / left out

- No discrete, sourceable death toll for the post-1908 Belgian Congo period — deliberately NOT given a number; addressed only in prose in the country note.
- Total Belgian Jewish death figure has a spread (~23,838 names on the Mechelen memorial wall vs. ~28,000 / 28,902 overall) reflecting different counting bases (named-and-confirmed vs. estimated total); carried the ~28,000 consensus as the high end with the 24,000-via-Mechelen as the low end.

## Real sources consulted

- Wikipedia, "Atrocities in the Congo Free State" — https://en.wikipedia.org/wiki/Atrocities_in_the_Congo_Free_State
- Wikipedia, "Congo Free State" and "Belgian Congo" (timeline, annexation, post-1908)
- Adam Hochschild, *King Leopold's Ghost* (1998) — via Wikipedia summary page
- Jean-Paul Sanderson (2020) demographic reconstruction — cited in the Atrocities article
- Wikipedia, "Rape of Belgium" — https://en.wikipedia.org/wiki/Rape_of_Belgium
- Wikipedia, "German atrocities of 1914" (Horne & Kramer 6,000 figure)
- Wikipedia, "Mechelen transit camp" — https://en.wikipedia.org/wiki/Mechelen_transit_camp
- Kazerne Dossin Memorial — https://kazernedossin.eu/en/ (transport/survivor figures)
- USHMM Holocaust Encyclopedia, "Belgium" — https://encyclopedia.ushmm.org/content/en/article/belgium
- Wikipedia, "The Holocaust in Belgium"
- Cross-checked against existing COD.json (`cod-1`) for consistent Congo Free State framing and tier.

No sources, numbers, authors, or URLs were invented. Where a figure was unsourceable (post-1908 Belgian Congo toll), it was omitted rather than estimated.

## Audit

Adversarial source-integrity + tier re-derivation, 2026-06-18. Posture: assume every citation FAKE until proven. WebSearch/WebFetch used to attempt falsification of each source and each toll endpoint. Result: **country VERIFIED — all 3 events VERIFIED.**

### bel-1 — Congo Free State (POL) — VERIFIED
- **Hochschild, *King Leopold's Ghost* (1998), toll.high ~10M** — book real; confirmed it asserts Leopold's policies halved the population (~10M decline, not a counted body count). Existing caveat (popular history, population-decline not body-count, challenged by demographers) is accurate and disclosed. SUPPORTS toll.high.
- **Sanderson demographic reconstruction (2020), toll.low ~1.2M, range 1–5M** — author real (Jean-Paul Sanderson, UCLouvain demographer). The cited "(2020)" matches the attribution carried in Wikipedia "Atrocities in the Congo Free State"; the underlying monograph is *Démographie coloniale congolaise* (PUL, 2018). NOT a fabricated date — it tracks the cited source page. Figure (1.2M most-likely, 1–5M range) confirmed. SUPPORTS toll.low.
- **Wikipedia "Atrocities in the Congo Free State", supports summary** — confirmed it carries the full estimate spread (Casement ~3M, Forbath 5M+, Ndaywel è Nziem 5–10M, Hochschild/Vansina ~10M), the Vansina "violence < 5% of deaths" finding, and "no census before 1924 (first taken 1924)." All summary claims supported.
- **Toll coverage:** both ends independently sourced. No single-source/single-number problem.
- **Tier re-derivation (blind):** deliberate forced-labor rubber-extraction regime; demographic loss dominated by disease + collapsed birth rate + flight; <5% of deaths from direct violence; intent = plunder, not destruction of a people. → **POL.** Not EXT (no group-destruction intent). Not STR (deaths driven by a *deliberate* coercion regime, not passive structural/disease neglect — STR-vs-EXT rule and its POL corollary respected). Assigned tier POL is CORRECT; reasoning unchanged.

### bel-2 — Rape of Belgium (WAR) — VERIFIED
- **Horne & Kramer, *German Atrocities, 1914: A History of Denial* (2001), toll.low** — book and both authors real (Trinity College Dublin), Yale UP. CAVEAT TIGHTENED: the book's headline figure is ~6,500 civilians killed across Belgium *and* France combined; the ~6,000 carried here is the Belgium-only count as reported in the "Rape of Belgium" literature drawing on this study. Attribution defensible (H&K is the underlying scholarship) but now flagged in the source caveat. SUPPORTS toll.low.
- **Wikipedia "Rape of Belgium", toll.high** — confirmed verbatim: "23,700 Belgian civilians (6,000 murdered, 17,700 died during expulsion, deportation, in prison or sentenced to death)." Dinant 674, Tamines 383, Wire of Death 3,000+, ~90,000 indirect excess deaths, ~120,000 deported — all confirmed. Leuven library burning (25 Aug 1914, ~230,000 books) independently confirmed via "Sack of Louvain." SUPPORTS toll.high.
- **Tier re-derivation (blind):** civilian reprisal massacres + occupation killings embedded in armed conflict, aimed at terrorizing not exterminating. → **WAR.** Correct.

### bel-3 — Holocaust in Belgium (EXT) — VERIFIED
- **Wikipedia "Mechelen transit camp", toll.low** — confirmed EXACTLY: 24,916 Jews + 351 Roma, 28 trains (4 Aug 1942–31 Jul 1944), only 1,240 survived. SUPPORTS toll.low.
- **USHMM "Belgium" / Wikipedia "The Holocaust in Belgium", toll.high** — USHMM confirms framing (65–70k pre-war, ~25k deported, <2k deportee survivors, 25k+ hidden) but does NOT itself state a ~28,000 total. The "around 28,000" total is from Wikipedia "The Holocaust in Belgium"; the precise **28,902** is Belgium's own official state reckoning, independently corroborated (Times of Israel reporting on Belgium's acknowledgment of complicity; direct fetch 403'd but figure confirmed via search). CAVEAT TIGHTENED and source URL corrected from the USHMM page to the Wikipedia article that actually carries the figure. SUPPORTS toll.high.
- **Tier re-derivation (blind):** systematic round-up + deportation to Auschwitz for extermination, deliberate destruction of a people. → **EXT.** Correct. (Disease-driven STR rule N/A here — this is industrial killing, not epidemic collapse.)

### Changes written
1. bel-2 Horne & Kramer caveat: added audit note distinguishing the ~6,500 combined Belgium+France figure from the ~6,000 Belgium-only count carried.
2. bel-3 toll.high: corrected URL (USHMM → Wikipedia "The Holocaust in Belgium") and tightened caveat on where the ~28,000 / 28,902 figures actually originate.
3. All three event statuses RESEARCHED → VERIFIED; country status RESEARCHED → VERIFIED.

### Not changed (held the line)
- No tiers altered — all three independently re-derived to the assigned value.
- No invented sources, numbers, or balance. Asymmetric ledger (1 perpetrator / 2 victim) left as-is; law 1 satisfied by the record, no fabricated counterweight added.
- Post-1908 Belgian Congo still carries no toll — correct, remains unsourceable.

Flagged (non-blocking, disclosed via caveat, did not force UNVERIFIED): the Horne & Kramer 6,000-vs-6,500 attribution nuance, and the USHMM-doesn't-carry-28,902 attribution nuance. Both resolved by tightening caveats + fixing the URL rather than quarantining, because the underlying claims are independently sourced and correct.
