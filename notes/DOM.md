# Dominican Republic (DOM) — research log

Built from scratch on 2026-06-18. Web tools (WebSearch/WebFetch) loaded and used; this is real research, not a seed.

## Ledger shape
Genuinely balanced: 2 victim, 2 perpetrator events.

- **Victim (done to them)**
  - `dom-1` Taino destruction under Spanish rule, 1492-1540s — the primary, vast colonial catastrophe (shared with Haiti).
  - `dom-2` Killing of Dominican insurgents under the US occupation, 1916-1924 — smaller, modern, marked UNVERIFIED.
- **Perpetrator (in their name)** — both concentrated in the Trujillo era (1930-1961):
  - `dom-3` Parsley Massacre / El Corte, 1937 — state-ordered ethnic massacre of Haitians.
  - `dom-4` Trujillo internal state terror, 1930-1961 — Dominicans killed/disappeared by the Dominican state.

## What is well-established
- **Parsley Massacre (dom-3):** Ordered by Trujillo, carried out by the Dominican Army 2-8 Oct 1937, machetes used to disguise it as civilian violence; the perejil/parsley language test. Turits (HAHR, 2002) is the strongest scholarly anchor: "perhaps 15,000" killed, and a 12,168-name victim list compiled by Haitian priests/officials from refugee testimony. Filed EXT.
- **Trujillo internal terror (dom-4):** Whole-regime death estimates 25,000 to 50,000+; SIM secret police under Johnny Abbes; Mirabal sisters murdered 25 Nov 1960 (concrete, well-documented). Filed POL.
- **Taino collapse (dom-1):** Decline from ~400,000 to ~26,334 by 1514, to ~200 by 1565, declared extinct 1802. First smallpox outbreak Dec 1518 — i.e. AFTER the population was already largely destroyed by forced labor, which is why the dominant early cause is human (enslavement/encomienda), not disease.

## What is contested
- **Taino pre-contact population:** estimates span tens of thousands to ~750,000-1,000,000; modern lean ~300,000-400,000; 2020 genetic analysis (Fernandes et al.) supports the lower end. These are decline estimates, not clean death counts → death low/high set null, decline figures in `low_alt`/`high_alt` and the note.
- **Parsley Massacre toll:** 12,168 (documented list) up to 20,000 (common scholarly figure), with broader claims to 30,000+ and a Wikipedia-cited outer span of 17,000-75,000. Used 12,168-20,000 as the firm band; higher figures flagged as less grounded.
- **Trujillo total toll:** 25,000-50,000 spans the whole regime and INCLUDES the 1937 Haitian massacre (filed separately as dom-3), so there is deliberate overlap; internal-Dominican-only deaths are imprecise because the SIM destroyed remains. Noted explicitly to avoid double-count confusion.

## What could NOT be verified
- **US occupation civilian/death count (dom-2):** The most-cited figure is ~950 Dominican insurgents "killed OR wounded" — a combined casualty count, not a death-only toll, and no separate civilian death figure was found. Death low/high left null; event marked **UNVERIFIED**. Prisoner mistreatment/torture is documented (US Senate select-committee investigations), but quantified deaths are not. Tier WAR.

## Tier reasoning notes
- Taino collapse → STR (per atlas rule: disease-involved demographic collapse = STR), but the note records the strong scholarly genocide argument (Resendez; Yale Genocide Studies Program) given that enslavement/forced labor — not disease — drove the bulk of the early collapse.
- Parsley Massacre → EXT (ethnically targeted destruction of a group).
- Trujillo internal terror → POL (political mass violence).
- US occupation → WAR (counterinsurgency between an army and armed guerrillas).

## Real sources consulted
- Richard Lee Turits, "A World Destroyed, A Nation Imposed: The 1937 Haitian Massacre in the Dominican Republic," Hispanic American Historical Review 82:3 (2002), Duke University Press — read.dukeupress.edu/hahr/article-abstract/82/3/589/34983
- Wikipedia: "Parsley massacre," "Taino genocide," "Hispaniola," "Rafael Trujillo," "United States occupation of the Dominican Republic (1916-1924)," "Military Government of Santo Domingo"
- GlobalSecurity.org — Dominican Republic Occupation (1916-24)
- Chicago Public Library — "About Trujillo"
- HISTORY — "Mirabal sisters assassinated by Trujillo regime" (This Day in History, 25 Nov 1960)
- Britannica "Parsley Massacre" page: HTTP 403 on direct fetch; contents cross-checked via search excerpts only (not cited as a source URL).

## Notes for a future pass
- Could add the 1965 US intervention / Dominican Civil War as a possible additional victim event (thousands killed) if the atlas wants more modern coverage — not added here to keep to the 1-3-per-ledger target and because the death toll needs its own sourcing pass.
- Lauren Derby ("The Dictator's Seduction") and the original border-region testimony archives would strengthen the Parsley toll's low/high beyond the present web-sourced figures.

## Audit
Adversarial source-integrity + tier audit, 2026-06-18 (assume-fake posture; every source attacked before acceptance). Tools: WebSearch + WebFetch.

**Verdict: country UNVERIFIED — 3 of 4 events VERIFIED, 1 quarantined.**

### Source integrity (per source, attempted falsification)
- **dom-1 / Taino genocide (Wikipedia, supports summary):** REAL, supports claim. Reverified: pre-contact 10,000–1,000,000 span, ~80–90% died in first 30 years, declared extinct 1802, Resendez + Yale Genocide Studies Program both cited. Minor drift: the *Taino genocide* page itself gives "32,000 by 1514" / "60,000 by 1507" and notes smallpox not mentioned until 1519; the JSON's 26,334 (1514) and "60,000 by 1508" / "Dec 1518" come from the *Hispaniola* page (see next), which is the correct source for those exact figures — attribution is internally consistent. PASS.
- **dom-1 / Hispaniola (Wikipedia, supports toll.note):** REAL, supports claim. Reverified verbatim: 400,000→60,000 by 1508, 26,334 by 1514, 1492 range "tens of thousands (2020 genetic analysis) to ~750,000," encomienda + repartimiento, smallpox Dec 1518, one-third dead by May 1519, up to 95% decline in a century. PASS.
- **dom-2 / US occupation 1916-1924 (Wikipedia, supports toll.note):** REAL, supports claim. Reverified verbatim: 144 USMC KIA, 74 native-constabulary casualties, 950 insurgents "killed or wounded," Ramon Natera, El Seibo/San Pedro de Macoris, 1917-1922, Senate investigations of captive abuse, Constabulary Guard torture. PASS.
- **dom-2 / GlobalSecurity.org (supports summary):** REAL, supports claim. Reverified: gavilleros 1917-1921, "superior firepower, air power (a squadron of six Curtis Jennies), and determined (often brutal) counterinsurgent methods," Senate Select Committee on Haiti and Santo Domingo. PASS.
- **dom-3 / Turits HAHR 82:3 (2002), supports toll.low:** REAL author + REAL article, supports claim. URL itself 403s (publisher paywall) but existence confirmed via William & Mary faculty page, Project MUSE (article/12744), Semantic Scholar; won the AHA Robertson Memorial Prize; pp. 589-635; "perhaps 15,000" and the 12,168-name refugee-testimony list both confirmed in independent excerpts. PASS — strongest anchor in the file.
- **dom-3 / Parsley massacre (Wikipedia, supports toll.high):** REAL, supports claim. Reverified: Trujillo's order, Dominican Army 2-8 Oct 1937, NW frontier + Cibao, "genocidal massacre"/antihaitianismo, ~20,000 common scholarly figure, 17,000-75,000 outer span, $525,000 reparations / survivors ~2 cents each, perejil test. Drift: page's current main range is "14,000-40,000," not the "30,000+" in the cite — caveat updated; the 12,168-20,000 band stays conservative and within range. PASS.
- **dom-4 / Rafael Trujillo (Wikipedia, supports toll.low):** REAL, supports claim. Reverified verbatim: "25,000 deaths and disappearances to over 50,000 deaths," SIM under Johnny Abbes, Mirabal sisters 25 Nov 1960, Galindez 1956, April 1962 AG report of 5,700 deaths in prior five years, clandestine body disposal. PASS — and independently carries the 50,000 upper bound.
- **dom-4 / Chicago Public Library "About Trujillo" (supports toll.high):** QUARANTINED. Page exists and confirms the secret-police network + 1956 Galindez disappearance, but returned blank on repeated fetch and the specific "more than 50,000 deaths" figure attributed to it could NOT be independently confirmed (absent from all search excerpts; one search explicitly noted its absence). The 50,000 high is salvaged by the verified Trujillo Wikipedia source, so the *number* stands — only this citation's attribution is unverified.
- **dom-4 / HISTORY Mirabal (supports summary):** REAL, supports claim. Reverified: secret police beat the three sisters + driver to death, staged car-over-cliff accident, became martyrs of the resistance. PASS.

### Toll dual-end check
- dom-1: low/high correctly null (decline estimates, not death counts); low_alt/high_alt both sourced. OK.
- dom-2: low/high null; the 950 is a SINGLE combined killed-or-wounded number — flagged single-number toll (source-honest, not a falsification). OK.
- dom-3: low 12,168 (Turits / Haitian refugee list) and high 20,000 (Wikipedia scholarly consensus) — both ends independently sourced. OK.
- dom-4: low 25,000 and high 50,000 BOTH carried by the verified Trujillo Wikipedia source; the CPL second source for the high end is quarantined but does not leave the high unsourced. OK.

### Tier re-derivation (derived from facts before reading assigned tier)
- dom-1 → STR. Bulk of collapse human-caused (encomienda/enslavement pre-1518) but disease (smallpox 1518) is a documented compounding driver of a demographic collapse → STR per the disease-driven rule, NOT EXT. Assigned STR. CORRECT.
- dom-2 → WAR. Occupying army vs. armed guerrillas, ~950 combined casualties, prisoner abuse but no systematic destruction of a civilian group. Assigned WAR. CORRECT.
- dom-3 → EXT. State-ordered ethnically targeted destruction of Haitians via language test. Assigned EXT. CORRECT.
- dom-4 → POL. Political mass killing/disappearance to crush dissent; distinct from the ethnic Parsley EXT. Assigned POL. CORRECT.
All four tiers stand; no tier or tier_reasoning rewritten.

### Status changes written to DOM.json
- dom-1: RESEARCHED → VERIFIED.
- dom-2: UNVERIFIED → VERIFIED (both sources verified; null toll is correctly disclosed, not a source-integrity failure — the original UNVERIFIED was a toll-precision flag, which is now recorded in toll.note instead).
- dom-3: RESEARCHED → VERIFIED.
- dom-4: RESEARCHED → UNVERIFIED (CPL toll.high attribution unverifiable; quarantine note in toll.note + caveat).
- country: RESEARCHED → UNVERIFIED (not all events VERIFIED).

No sources were invented. One pre-existing source (CPL) quarantined; no sources added or removed.
