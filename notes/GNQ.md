# Equatorial Guinea (GNQ) — research log

Built from scratch on 2026-06-19. Status: RESEARCHED (file-level); two events UNVERIFIED on toll.

## Ledger structure & the framing decision

The defining feature of GNQ's history is that the single worst atrocity was committed by its own first independent government against its own people. To avoid duplicating one event across both ledgers:

- **Victim (1):** Spanish colonial forced labour + Bubi demographic collapse (gnq-1). The cleanest pure-victim chapter.
- **Perpetrator (2):** the Macías Nguema terror (gnq-2) and the ongoing Obiang repression (gnq-3).

The Macías genocide is placed in the perpetrator ledger because the *state* was the agent, but the victims were Equatorial Guineans — so the country note and the event's `relevance` flag that this single regime collapses the dual lens (perpetrator and "done to them" name the same people). This mirrors the AGO pattern (civil war as both-roles). The result is an honestly asymmetric file: 1 victim, 2 perpetrator. I did NOT invent a second victim event to balance.

## What is solid

- **Bubi demographic collapse under Spanish rule:** Bubi fell from majority of Bioko to ~30% by the 1930s, now a minority. Driven by imported disease (yellow fever, sleeping sickness, smallpox, dysentery, whooping cough) plus coercive cocoa-plantation labour. Multiple sources corroborate the trend. Tiered STR because the deaths were overwhelmingly disease-driven collapse, not deliberate extermination (Inviolable Law 3).
- **1930 League of Nations Christy Commission:** confirmed Liberian contract labourers shipped to Fernando Pó under conditions "scarcely distinguishable from slave raiding and trading." Strong primary-anchor source for the colonial labour system (its main target was Liberian government complicity).
- **Macías mass exodus:** ~100,000–150,000 fled by 1978 (a third to nearly half the population) — firmly attested across sources.
- **Macías convicted of genocide** (against the Bubi) and on 474 counts of murder at his 1979 trial; executed Sept 1979.
- **1969 Christmas-Eve stadium executions** of alleged dissidents in Malabo — documented across multiple sources.
- **Obiang repression:** torture, Black Beach prison, incommunicado detention, deaths in custody, extrajudicial killings — documented by Amnesty International (AFR 24/001/1999), Human Rights Watch (2014), and U.S. State Dept country reports.

## What is contested / could NOT be verified

- **Macías death toll — the big dispute.** Popular/most-cited figure is 50,000–80,000 killed of ~300,000. But scholars Scott Straus and Max Liniger-Goumaz give a conservative floor of ~5,000. The estimates span more than an order of magnitude. I used 5,000 (low) and 80,000 (high), marked the event UNVERIFIED for toll, and flagged the divergence in the toll note. The ~5,000 floor was reached via Wikipedia's compilation of competing estimates, not the original monographs — caveated as such.
- **Colonial death count:** no reliable absolute death figure exists for the colonial Bubi collapse; left null, event UNVERIFIED for toll, demographic trend used instead.
- **Annobón 1973 cholera abandonment:** documented that Macías left the island cut off during a cholera outbreak (~100 deaths in one account), but I could not confirm deliberate intent as a killing strategy, so I folded it into the general Macías terror rather than asserting it as a separate engineered atrocity.
- **ICJ 1979 trial report PDF** (icj.org) would not extract as readable text (returned as binary) — could not pull figures directly from it, so I relied on secondary corroboration (JSTOR Daily citing Sundiata/Decalo/Okenve Martínez; Wikipedia).
- **"Auschwitz of Africa" nickname and "killed everyone who wore glasses"** appear widely but read as journalistic shorthand; not relied on for any toll or hard claim.

## Real sources consulted

- League of Nations Christy Commission 1930 (via liberiapastandpresent.org) — colonial forced labour. PRIMARY.
- Wikipedia: "Bubi people", "Francisco Macías Nguema", "Genocides in history (1946–1999)" — demographic and toll ranges. REFERENCE (tertiary; caveated).
- JSTOR Daily, "Grappling with Equatorial Guinea" — Macías trial figures, Black Beach, 1977 village killings; cites Sundiata, Decalo, Okenve Martínez. PRESS.
- Amnesty International, "Equatorial Guinea: A country subject to terror and harassment" (AFR 24/001/1999). SCHOLARLY/NGO.
- Human Rights Watch, "Equatorial Guinea: Halt Prisoner Torture" (2014); U.S. State Dept Country Reports. PRESS/GOV (State Dept caveated for geopolitical interest).
- Retrospect Journal, "A History of Spanish Colonial Control in Equatorial Guinea 1778–1968" — colonial labour context (background, not cited in file).
- ICJ 1979 trial report PDF — attempted, did not extract; noted above.

## Open items for a future pass

- Pull the ICJ 1979 report in a readable format to anchor the trial figures to a primary source.
- Find the original Liniger-Goumaz / Straus death-estimate citations to replace the Wikipedia-mediated low figure.
- Verify the Annobón cholera episode against a scholarly source if it is to be promoted to a standalone event.

## Audit

Adversarial source-integrity + tier audit, 2026-06-19 (assume-fake-until-proven methodology). All five distinct sources across the three events were independently checked against live web sources; tiers were re-derived from the facts before reading the assigned tier.

**Source integrity — every source verified as real and supporting its attached claim:**

- **gnq-1 / Christy Commission 1930 (primary):** VERIFIED. Real League of Nations inquiry, chaired by Cuthbert Christy with Arthur Barclay and Charles S. Johnson; the "scarcely distinguishable from slave raiding and slave trading" wording is confirmed verbatim (search + liberiapastandpresent.org fetch). Correctly supports the forced-labour summary, not a death count.
- **gnq-1 / Wikipedia "Bubi people" (reference):** REAL, but the cite OVERSTATED the article. The current article supports once-majority/now-minority and foreigner-borne disease (whooping cough, smallpox, dysentery) but does NOT carry the "roughly 30% by the 1930s" figure, the yellow-fever attribution, or the plantation-labour attribution the cite had claimed. CORRECTED: cite text trimmed to what the source actually says; caveat now records the trim. The trimmed-out specifics (yellow fever on Fernando Pó from 1829; coerced cocoa-plantation labour "effectively constituting slavery" from the 1880s) are independently attested elsewhere but not by this article.
- **gnq-2 / Straus + Liniger-Goumaz ~5,000 floor (toll.low):** VERIFIED. The Wikipedia "Francisco Macías Nguema" article does cite these scholars at ~5,000. toll.low is sourced.
- **gnq-2 / "Genocides in history (1946–1999)" ~80,000 (toll.high):** VERIFIED. Article gives 80,000 of 300,000 and confirms the Bubi minority was particularly targeted. toll.high is sourced. (Minor: this URL does not itself carry the 1969 stadium-execution or 101k–150k flight detail also attributed to it; those are corroborated by the Macías article and JSTOR Daily — citation-precision note, not a fabrication.)
- **gnq-2 / JSTOR Daily "Grappling with Equatorial Guinea" (press):** VERIFIED. Real article by Rob Crossan, 18 Apr 2025. Confirms 474 counts of murder, ~50,000 killed / ~125,000 fled of ~300,000, 157 prisoners beaten to death at Black Beach (citing Baynham), 1977 village massacres, and the Sundiata / Decalo / Okenve Martínez citations.
- **gnq-3 / Amnesty International AFR 24/001/1999 (scholarly/NGO):** VERIFIED. Exact title and index number confirmed; documents torture, confession-by-torture trials, abuses against the Bubi, prison conditions, impunity. PDF URL matches.
- **gnq-3 / HRW "Equatorial Guinea: Halt Prisoner Torture" 2014 + US State Dept (press/gov):** VERIFIED. HRW release confirmed (30 Jul 2014), documents torture (Esono, Berardi cases), life-threatening prison conditions, incommunicado detention. State Dept appropriately caveated for geopolitical interest.

**Toll — both ends sourced where contested:** gnq-2's contested toll has a real source for BOTH the low (5,000, Straus/Liniger-Goumaz) and high (80,000, Genocides-in-history) ends — no single-source/single-number failure. gnq-1 has no toll by design (no count exists); left null with a quarantine note. gnq-3 carries no death toll (repression record) — correct.

**Tier — independently re-derived, all three confirmed correct:**
- gnq-1 STR: deaths overwhelmingly disease-driven demographic collapse + predatory labour, not a campaign to exterminate a group. STR enforced (disease-driven ≠ EXT). CORRECT.
- gnq-2 EXT: 1979 court convicted Macías of genocide; deliberate targeted destruction of the Bubi and perceived-enemy groups, mass engineered death + flight. EXT, not POL or STR. CORRECT.
- gnq-3 POL: torture, arbitrary/incommunicado detention, disappearance, occasional extrajudicial killing aimed at silencing dissent; no mass-death toll. POL. CORRECT.

**Ledgers (Law 1):** Both ledgers populated where the record supports it — 1 victim (colonial), 2 perpetrator (Macías, Obiang). The asymmetry is honest to the record; no invented balancing event. Confirmed appropriate.

**Status outcomes:**
- gnq-1: UNVERIFIED — sources verified, but the toll genuinely cannot be counted (kept UNVERIFIED for the toll metric, not for source failure).
- gnq-2: UNVERIFIED — sources verified and both toll ends sourced, but the death estimate spans more than an order of magnitude (kept UNVERIFIED for the toll, not for source failure).
- gnq-3: RESEARCHED → **VERIFIED** (all sources verified, no contested toll, tier correct).
- Country: RESEARCHED → **UNVERIFIED** (not all events VERIFIED).

No invented sources were added at any point. The only data change beyond status fields was trimming the gnq-1 Bubi-Wikipedia cite to match the source, plus audit annotations in the two toll notes.
