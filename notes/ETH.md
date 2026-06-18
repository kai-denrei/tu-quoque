# Ethiopia (ETH) — research notes

Researched 2026-06-18, from scratch (no prior seed file). Status: RESEARCHED. Four events: 1 victim, 3 perpetrator. Web tools (WebSearch/WebFetch) loaded and used throughout.

## Ledger design and the asymmetry

The two ledgers are deliberately lopsided (1 victim / 3 perpetrator), and that lopsidedness is the dual-lens point, not a gap:

- **Victim ("Done to them"):** Ethiopia's one clean case of large-scale atrocity by an *external* agent is Fascist Italy's 1935–41 war and occupation. This is the role the world remembers — Africa's proud uncolonized empire gassed and occupied by Mussolini.
- **Perpetrator ("In their name"):** Ethiopia's *heaviest* modern atrocity record was authored by Ethiopian states against Ethiopian peoples — the Derg's Red Terror, the Derg's weaponization of the 1983–85 famine, and the federal government's role in the 2020–22 Tigray war.

I considered placing Tigray in the victim ledger (Tigrayans, who were the chief victims of the 1984 famine, were victims again in 2020–22) but the Ethiopian federal state was a principal perpetrator there, so it belongs in "In their name" — that very rotation of the lens is captured in its `relevance`. I did NOT invent a second victim event to balance the ledgers; the note explains the asymmetry instead.

## What is contested (every toll here spans ~an order of magnitude)

- **eth-1 Italian war/occupation:** Italian military figure ~70,000 soldiers; Ethiopian govt ~275,000 combat deaths; Ethiopian 1945 memorandum total 760,300 (itemized). I used 275,000 (low) – 760,300 (high). The high is a state estimate for a post-war claim, not a body count (flagged in caveat). Yekatit 12 reprisal alone: 1,400–6,000 (foreign press) / ~3,000 (Del Boca, Mockler) / ~19,200 (Campbell 2017).
- **eth-2 Red Terror:** 10,000 (documented urban executions floor) to 500,000 (Amnesty for 1977–78), with cited outliers to 980,000 and an ERTDRC range of 30,000–750,000. Used 10,000–500,000.
- **eth-3 1983–85 famine:** USAID 300,000+; de Waal ~400,000–500,000; insider ~1.2m. The UN "one million" figure was explicitly rejected by de Waal as unscientific (noted). Used 300,000–1.2m. Scholarly consensus (de Waal / HRW *Evil Days*) attributes >half the mortality to Derg policy, which is why it is in the perpetrator ledger and tiered STR (famine/demographic collapse, not direct killing of a group), with the policy-driver finding in tier_reasoning.
- **eth-4 Tigray war:** 102,000 (peer-reviewed excess-deaths study, ~72% violent) to 600,000 (AU mediator Obasanjo), with estimates to ~800,000. Used 102,000–600,000. Wartime information blackout makes all counts soft (flagged).

## What could NOT be fully verified

- The 760,300 Italian-occupation total and the ~1.2m famine high are *estimates by interested parties* (Ethiopian govt / insiders), not independent counts — kept as the sourced high ends with explicit caveats, not presented as fact.
- Obasanjo's 600,000 Tigray figure is a mediator's public statement, not peer-reviewed — flagged in its source caveat.
- I did not obtain the exact page-level primary text of Del Boca's reproduction of the 1945 memorandum or Campbell's book directly; the itemized 760,300 breakdown and Campbell's 19,200 are reported via the reference overview pages cited. No citation, author, number, or URL was invented.

## Tier choices

- eth-1 WAR (war of aggression + occupation reprisals + banned gas; not a campaign to exterminate Ethiopians as such).
- eth-2 POL (extermination of a *political* category — rival Marxist movements).
- eth-3 STR (starvation/demographic collapse, but policy-multiplied — the act, not the nation, is tagged).
- eth-4 WAR (war crimes / crimes against humanity; genocidal intent raised by investigators but not legally settled, so not EXT).

## Real sources consulted

- Wikipedia: Red Terror (Ethiopia); Second Italo-Ethiopian War; Yekatit 12; 1983–1985 famine in Ethiopia; Tigray war; Casualties of the Tigray war; Mengistu Haile Mariam.
- EBSCO Research Starters — Red Terror in Ethiopia (toll clustering, ERTDRC range, Amnesty).
- VOA News (2008) — Mengistu sentenced to death on appeal (genocide conviction in absentia 2006).
- Alex de Waal & Human Rights Watch, *Evil Days: Thirty Years of War and Famine in Ethiopia* (1991) — famine-as-counterinsurgency thesis.
- Alex de Waal, "Steal, Burn, Rape, Kill" (London Review of Books, 2021).
- PMC / University of London health-metrics study — Tigray excess deaths (~102,000).
- Ian L. Campbell, *The Addis Ababa Massacre: Italy's National Shame* (2017) — Yekatit 12 ~19,200 (via reference overview).
- Angelo Del Boca — Ethiopia's 1945 memorandum, 760,300 itemized total (via reference overview).

## Audit

Adversarial source-integrity + tier audit, 2026-06-18 (assumption: every citation fake until proven otherwise). Web tools (WebSearch/WebFetch) used to falsify each source, author, work, figure, and tier. **Verdict: country VERIFIED — all 4 events VERIFIED after two citation corrections. No invented sources found.**

### Per-event source falsification

- **eth-1 (Italian war/occupation):** Sources real and substance verified.
  - Angelo Del Boca is a real historian; the 1945/46 Ethiopian memorandum's **760,300 itemized total** (275,000 battle / 300,000 refugee hunger / 75,000 patriots / 35,000 camps / 30,000 Feb-1937 massacre / 24,000 executions / 17,800 air) was independently reproduced and attributed to Del Boca's *The Ethiopian War 1935–1941* — confirmed. Del Boca himself regards the Ethiopian totals as exaggerated for reparations; the existing caveat already flags this as an interested-party estimate. ✔
  - Ian L. Campbell, *The Addis Ababa Massacre: Italy's National Shame* (Oxford/Hurst 2017, ISBN 9780190674724, 478pp, FT History Book of the Year) is real; the **~19,000–20,000** Yekatit-12 figure (~20% of the city) is genuinely his. ✔
  - The ~70,000 Italian military figure is in the Wikipedia article (which currently shows ~70,000 military + 250,000–270,000 civilian in its infobox, not the 275,000/760,300 breakdown). The toll-source Wikipedia URL is therefore an imperfect locator for the 275,000/760,300 figures, but those figures are correctly attributed *in the cite text* to Del Boca and were independently verified — NOT invented, so no quarantine.
  - **Tier WAR — re-derived independently and confirmed.** War of aggression + military occupation + banned mustard gas + reprisal massacres, not a campaign to exterminate Ethiopians as such. (Campbell argues the *massacre specifically* was extermination-like; but the event spans the whole 1935–41 war/occupation, so WAR holds.)

- **eth-2 (Red Terror):** Sources real; **one citation corrected.**
  - Wikipedia toll.high source verified verbatim: **10,000–980,000**, dates **23 Sept 1976–22 March 1978**, **Amnesty "could be as high as 500,000"**, Derg/Mengistu. ✔
  - VOA source verified: Mengistu convicted of **genocide in absentia 12 Dec 2006**, life sentence Jan 2007, **death sentence on appeal 26 May 2008**; exact URL live. ✔
  - **DEFECT FOUND (corrected):** the EBSCO toll.low cite claimed EBSCO gives "ERTDRC 30,000–750,000" and "Amnesty ~500,000 for 1977–78." EBSCO does NOT — it gives only the **10,000–150,000** range and the ~2,500 first-wave figure. Those other figures live in the Wikipedia source. Over-attribution corrected: EBSCO cite rewritten to state only what it actually supports (the 10,000 documented-execution floor), with an audit caveat. Toll remains double-sourced (low 10,000 EBSCO; high 500,000 Wikipedia/Amnesty) → not a single-source toll.
  - **Tier POL — re-derived and confirmed.** Extermination of a *political* category (rival Marxist movements EPRP/MEISON), not ethnic/national.

- **eth-3 (1983–85 famine):** Sources real; **one dead URL corrected.**
  - HRW/de Waal *Evil Days* (1991, ISBN 9781564320384) real; the **"come earlier, strike harder and extend further"** phrasing and **"at least half a million civilians"** / "more than half its mortality" attribution verified verbatim. ✔
  - de Waal's rejection of the UN one-million figure as having **"absolutely no scientific basis whatsoever"** verified verbatim; **~400,000–500,000** estimate confirmed. ✔
  - Wikipedia famine source verified: USAID **300,000+**, insider **1.2 million**, **~50,000+** deaths in the **~600,000**-person 1985–86 forced resettlement. ✔
  - **DEFECT FOUND (corrected):** the *Evil Days* source URL `hrw.org/legacy/reports/1991/ethiopia/` returned **HTTP 404**. Replaced with the live URL `hrw.org/report/1991/09/01/evil-days/30-years-war-and-famine-ethiopia`.
  - **Tier STR — re-derived and confirmed; STR-vs-EXT enforcement upheld.** Mass death by starvation / demographic collapse, NOT direct killing of a defined group → STR, not EXT — even though >half the mortality is policy-attributable. The act (engineered famine), not the nation, is tagged.

- **eth-4 (Tigray war):** Sources real; figures verified.
  - PMC/LSHTM study confirmed: **Catherine R. McGowan et al.**, London School of Hygiene & Tropical Medicine, **>102,000** deaths, **72.3%** from intentional injury. (Study window runs to April 2023; the cite's "mid-2022" is a defensible war-period framing — minor imprecision, non-falsifying.) ✔
  - Ghent **162,000–378,000**, Obasanjo **~600,000** (flagged as a mediator's public statement, not peer-reviewed) verified. ✔
  - The **~800,000 "deadliest conflict of the 21st century"** figure is sourceable in academic literature (ResearchGate / Manchester / ScienceDirect), even though the live Wikipedia casualties article currently caps its high estimate at 600,000. The toll.note presents 800,000 only as "some accounts" with 600,000 as the display high — defensible. ✔
  - Tigray-war source confirms massacres (Axum, Mai Kadra, Mahbere Dego, etc.), systematic rape, ethnic cleansing, starvation siege, "all sides, particularly the ENDF, EDF, Amhara forces and TDF," and TPLF-loyal forces' Mai Kadra killings. ✔
  - **Tier WAR — re-derived and confirmed.** War crimes / crimes against humanity in armed conflict; genocidal intent raised by investigators but not legally settled → WAR, not EXT.

### Toll double-sourcing check (flag single-source / single-number tolls)
All four tolls are contested ranges with **both** ends separately sourced:
- eth-1: low 275,000 (Del Boca line item) / high 760,300 (Del Boca memorandum) — both real.
- eth-2: low 10,000 (EBSCO, post-correction) / high 500,000 (Amnesty via Wikipedia).
- eth-3: low 300,000 (USAID) / high 1.2m (insider, via Wikipedia); de Waal mid-range corroborates.
- eth-4: low 102,000 (peer-reviewed LSHTM) / high 600,000 (Obasanjo), 800,000 as outlier. 
No single-source or single-number tolls. No demand for invented balance (law 1): the deliberate 1-victim/3-perpetrator asymmetry is the dual-lens point and is explained, not padded.

### Corrections written back to ETH.json
1. eth-2 EBSCO toll.low cite — removed false attribution of ERTDRC/Amnesty figures; restated to what EBSCO actually supports + audit caveat.
2. eth-3 *Evil Days* source 1 — replaced 404 legacy URL with live HRW URL + audit caveat.
3. All event `status` RESEARCHED → VERIFIED; country `status` RESEARCHED → VERIFIED. JSON re-validated as well-formed.

No source was unverifiable; nothing quarantined; no source invented.
