# Venezuela (VEN) — research log

Built from scratch, 2026-06-18. Web tools (WebSearch + WebFetch) loaded and used for real research. Four events: 2 victim, 2 perpetrator. Wrapper status RESEARCHED.

## Events

### Victim
- **ven-1 — Indigenous demographic collapse (c. 1520–1620, STR).** Pre-conquest population commonly estimated ~1 million; fell 50–75% in the first century after the Conquest (Encyclopedia.com / Encyclopedia of Latin American History and Culture). Caracas-valley smallpox epidemic of 1580 cut local population ~two-thirds (~30,000→~10,000). Disease-dominant → STR, not EXT. Both numeric bounds left **null**: only a contested percentage decline exists, against a soft baseline. Sourced range deliberately not invented into an absolute count.
- **ven-2 — Federal War (1859–1863, WAR).** Bloodiest post-independence civil war. Most-cited figure ~100,000 dead (war + hunger + disease) out of a population just over 1 million; estimates span ~20,000 to >100,000. Recorded as disputed range low 20,000 / high 100,000.

### Perpetrator
- **ven-3 — Caracazo (Feb–Mar 1989, POL).** Carlos Andrés Pérez government; army, National Guard, DISIP fired into slums under Decree 49 (suspension of guarantees). **Toll genuinely contested:** official ~277 (confirmed by a congressional commission at the time) vs. independent COFAVIC estimates "above 2,000," up to ~5,000 after unmarked graves (La Peste, Cementerio General del Sur) were found. Range set low 277 / high 3,000 (most-cited independent figure; up to 5,000 noted). NOTE the separate Inter-American Court figure of **44 litigated victims** — that is the court-proven floor, NOT the event toll; flagged as such in the source caveat.
- **ven-4 — Bolivarian-era extrajudicial killings / FAES (c. 2015–2020, POL).** Maduro government; FAES + CICPC in OLP operations. UN/Bachelet July 2019 report: government 5,287 "resistance to authority" deaths in 2018 + 1,569 to mid-2019; Venezuelan Violence Observatory ≥7,523 (2018) and ≥2,124 (2019). Range set low 5,287 (govt) / high 7,523 (NGO) for the best-bounded single year. 2020 UN Independent Fact-Finding Mission found reasonable grounds these amounted to **crimes against humanity** (supports tier).

## Contested / asymmetry notes
- Caracazo official-vs-independent toll gap is the central dispute; both sides cited, range spans them.
- Federal War toll unrecoverable with precision (guerrilla war, famine/disease deaths); wide honest range only.
- Ledgers are roughly balanced in count but sit in different eras: victim entries are colonial/19th-c., perpetrator entries are state-on-citizen in the modern/contemporary period. Explained in the country note.

## Could NOT verify / limitations
- **corteidh.or.cr Caracazo judgment PDF (seriec_95)** would not parse as text via WebFetch (returned as binary PDF). The 44-victim figure and Venezuela's acceptance of responsibility are corroborated via the IACHR case abstract and the Enforced Disappearance Legal Database summary, not a direct read of the judgment. Caveat recorded on the source.
- **ohchr.org and tandfonline.com** returned HTTP 403 (blocked). OHCHR/Bachelet findings substituted with PBS + NPR press summaries of the same report; tandfonline scholarly article on 16th-c. Caracas replaced by the Encyclopedia.com reference giving the same 50–75% decline figure.
- Pre-conquest population baseline (~1 million) is an order-of-magnitude estimate, not a count → ven-1 numeric bounds null.

## Real sources consulted (and used)
- Wikipedia: Caracazo; Federal War; Indigenous peoples in Venezuela
- Encyclopedia.com: "The Colonial Era" (Venezuela 50–75% decline, 1580 smallpox); "Federal War (Venezuela, 1859–1863)"
- PBS NewsHour (5 Jul 2019): 5,287 killed in 2018 security operations
- NPR (5 Jul 2019): "shockingly high" extrajudicial killings
- UN News (16 Sep 2020): crimes-against-humanity finding by UN Fact-Finding Mission
- corteidh.or.cr: Caracazo v. Venezuela judgment (PDF, not text-parseable; used via abstracts)
- Enforced Disappearance Legal Database (ehrac.org.uk): Caracazo v. Venezuela case summary (44 victims, full state acknowledgment)

## Sources checked but blocked
- ohchr.org press release (403)
- tandfonline.com scholarly article on 16th-c. Caracas indigenous history (403)

## Audit

Adversarial source-integrity + tier audit, 2026-06-18. Posture: every citation assumed FAKE until verified against the live source. All four events re-derived tier-first, then sources falsification-tested. Result: **country VERIFIED** (all 4 events VERIFIED) after one source correction.

### Source verification (each tried-to-falsify)
- **ven-1 (indigenous collapse, STR).** VERIFIED. Encyclopedia.com "The Colonial Era" fetched directly — confirms verbatim "The Venezuelan indigenous population fell by 50 to 75 percent during the first century after the Conquest" AND the 1580 Caracas-valley smallpox decline "from perhaps 30,000 to 10,000." Wikipedia "Indigenous peoples in Venezuela" confirms verbatim the ~1 million pre-conquest estimate and disease-driven reduction. Both sources real; both support the exact claims attached (tier / summary). Numeric bounds correctly left null (percentage decline only). Tier re-derived independently as STR (disease-dominant demographic collapse, not deliberate extermination) — matches assigned. No change.
- **ven-2 (Federal War, WAR).** VERIFIED after correction. Wikipedia "Federal War" fetched — confirms verbatim "around a hundred thousand people died... in a country with a population of just over a million" and Treaty of Coche; supports toll.high. **FALSIFICATION HIT:** the Encyclopedia.com "Federal War (Venezuela, 1859–1863)" page originally cited as supporting **toll.low (~15,000–20,000)** was fetched directly and contains **NO casualty figures whatsoever** — the source did not support the claim attached to it. The low end was therefore single-/zero-sourced. Located a real replacement: EBSCO Research Starters "Venezuelan Civil Wars," fetched directly, confirms verbatim "between 1858 and 1860, 15,000–20,000 died" and an overall "some 50,000 lives." **Correction applied:** swapped the toll.low source URL/cite/caveat to EBSCO; toll range (20,000–100,000) now genuinely double-sourced (low EBSCO, high Wikipedia). Tier re-derived as WAR (organized civil war, factional armies) — matches. 
- **ven-3 (Caracazo, POL).** VERIFIED. Wikipedia "Caracazo" fetched — confirms verbatim official 277, congressional-commission confirmation, "above 2,000 and up to 5,000" after unmarked graves, 97%-killed-at-home (COFAVIC), Feb 27–Mar 5 1989, National Guard/army/DISIP firing into apartment blocks. IACHR Caracazo v. Venezuela (1999) corroborated via worldcourts/hrlibrary/edld abstracts: 44 victims, full state acknowledgment of international responsibility 11 Nov 1999 — correctly flagged as litigated FLOOR, not event toll. La Peste / Cementerio General del Sur, COFAVIC, and Pérez's suspension of constitutional guarantees independently corroborated (cofavic.org, PROVEA, amnesty). Both toll bounds sourced (277 official via Wikipedia+IACHR floor; high via Wikipedia independent). Tier POL (politically motivated state killing of civilians under suspension of guarantees) — matches. No change.
- **ven-4 (Bolivarian/FAES killings, POL).** VERIFIED. PBS NewsHour fetched — confirms verbatim govt 5,287 (2018) + 1,569 (to 19 May 2019) and Venezuelan Violence Observatory ≥7,523 (2018) + ≥2,124 (2019), FAES identified. NPR (fetch timed out twice; content corroborated via search + cross-checked against Al Jazeera/CBC reporting the same UN report) confirms "nearly 7,000," "death squads," shot in chest, planted weapons/staged scenes. UN News (16 Sep 2020) fetched — confirms verbatim crimes-against-humanity finding, since 2014, command responsibility; supports tier. Both toll bounds sourced (govt low / NGO high). Tier POL (state-organized extrajudicial killing) — matches; correctly kept POL, not EXT. No change.

### Tier re-derivation summary (done before reading assigned)
STR / WAR / POL / POL — all four independently re-derived match the assigned tiers. STR-vs-EXT enforced on ven-1 (disease-driven = STR). No tier corrections needed.

### Toll integrity
All disputed tolls now have a verified source at BOTH ends. The only gap found — ven-2 toll.low resting on a source with no casualty data — is closed (EBSCO). ven-1 bounds correctly null (no defensible absolute count). No single-source contested tolls remain.

### Changes written
1. ven-2 toll.low source: Encyclopedia.com (no figures → did not support claim) → EBSCO "Venezuelan Civil Wars" (verifiably supports 15,000–20,000 / ~50,000).
2. All four event statuses RESEARCHED → VERIFIED.
3. Country status RESEARCHED → VERIFIED.

No invented sources. One real source substituted for a non-supporting one; no fabrication.
