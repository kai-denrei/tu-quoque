# Iraq (IRQ) — research log

Built from scratch 2026-06-18 via live web research (WebSearch + WebFetch). No seed file existed.

## Structure

Four events, symmetric: 2 victim ("Done to them"), 2 perpetrator ("In their name"). Country status RESEARCHED; one event (sanctions) flagged UNVERIFIED.

### Victim ledger
- **irq-1 — 1990–2003 UN sanctions mass mortality (STR, UNVERIFIED).** The hardest call in the file. Estimates run from the 1995 Lancet/Zaidi 567,000 child deaths and the 1999 UNICEF survey's 400,000–500,000 excess under-5 deaths, down to Garfield's ~227,000 (to 1998), down to the 2017 Dyson & Cetorelli BMJ Global Health argument that the 1999 UNICEF survey was rigged by the Iraqi government and that post-2003 surveys show no major rise in child mortality at all. Because the very existence of large-scale excess death is contested, the event is UNVERIFIED with toll low=0, high=500,000 and the dispute spelled out. Tier STR (structural collapse of health/water/food under embargo, if the deaths occurred).
- **irq-2 — 2003 invasion and occupation (WAR, RESEARCHED).** Iraq Body Count documented violent civilian deaths ~187,000–210,000 (a deliberate floor/undercount). Iraq Family Health Survey (2008): ~151,000 violent (range 104k–223k). Lancet 2006: ~655,000 total excess / ~601,000 violent. ORB 2007: ~1,033,000 violent — included as the high bound but flagged as widely discredited. toll low=151,000 (IFHS), high=1,033,000 (ORB).

### Perpetrator ledger
- **irq-3 — Anfal + Halabja, 1988 (EXT, RESEARCHED).** The flagship perpetrator event. HRW's comprehensive report: "by the most conservative estimates, 50,000 rural Kurds died," possibly twice that; ~2,000 villages destroyed; Halabja chemical attack (16 Mar 1988) killed 3,200–5,000. Kurdish sources cite up to ~182,000 (high end). Methods: chemical attacks, mass executions before bulldozer-filled pits, village razing. Directed by Ali Hassan al-Majid ("Chemical Ali"). Judged genocide by HRW and Iraqi courts. toll low=50,000 (HRW floor), high=182,000 (Kurdish figure).
- **irq-4 — 1991 uprisings suppression + draining of the marshes (POL, RESEARCHED).** Republican Guard crushed the post-Gulf-War Shia and Kurdish revolts: ~25,000–100,000 killed; ~200 mass graves later registered (one up to 10,000). Then the deliberate post-1991 drainage of the Mesopotamian marshes destroyed >90% of the wetlands, killed several thousand more Marsh Arabs, and displaced 200,000–500,000 (Marsh Arab population collapsed toward ~20,000). toll low=25,000, high=100,000 for the suppression; marsh deaths add an uncounted increment (the larger harm there is displacement/cultural destruction, not the counted dead).

## What is contested
- **Sanctions deaths (irq-1):** the central unresolved dispute — hundreds of thousands (UNICEF 1999, Garfield) vs. near-zero excess (Dyson & Cetorelli 2017, who call the 1999 survey fraudulent). Left UNVERIFIED.
- **2003 war deaths (irq-2):** order-of-magnitude spread between documented counts (IBC) and survey extrapolations (Lancet, ORB); ORB widely rejected.
- **Anfal total (irq-3):** HRW conservative 50,000 vs. Kurdish ~182,000.
- **1991 suppression (irq-4):** 25,000–100,000 range from a closed regime; Marsh Arab death count not precisely established.

## Could NOT verify / deliberately excluded
- A precise Marsh Arab death count — sources give "several thousand" plus large displacement; not pinned to a hard range, so carried in prose, not as a toll figure.
- The Iran–Iraq War (1980–88): Iraq was the aggressor, but this is recorded from the Iranian side in IRN.json (Iraqi chemical attacks on Iran) and was deliberately not duplicated in the IRQ perpetrator ledger to avoid double-counting; noted in the country `note`.

## Real sources consulted (all live-fetched 2026-06-18)
- Human Rights Watch, "Genocide in Iraq: The Anfal Campaign Against the Kurds" (1993) — https://www.hrw.org/reports/1993/iraqanfal/ANFALINT.htm (fetched directly; confirms 50,000 floor, Halabja 3,200–5,000, dates, methods)
- Human Rights Watch, "Endless Torment: The 1991 Uprising in Iraq" (1992) — https://www.hrw.org/reports/1992/Iraq926.htm
- Wikipedia: Anfal campaign; Halabja massacre; 1991 Iraqi uprisings; Draining of the Mesopotamian Marshes; Casualties of the Iraq War; International sanctions against Iraq (all used as aggregators, originators cross-referenced)
- Tim Dyson & Valeria Cetorelli, BMJ Global Health (2017) — https://pubmed.ncbi.nlm.nih.gov/29225933/
- Richard Garfield, "Morbidity and Mortality among Iraqi Children 1990–1998" — https://reliefweb.int/sites/reliefweb.int/files/resources/A2E2603E5DC88A4685256825005F211D-garfie17.pdf
- Iraq Body Count — https://www.iraqbodycount.org/
- Roberts/Burnham et al., The Lancet (2006) — https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(06)69491-9/abstract

## Inviolable-laws compliance
No invented sources or numbers. Contested tolls given as sourced ranges with both ends attributed. Sanctions event flagged UNVERIFIED because the figure itself is unresolved. Tiers tag the act (EXT for Anfal genocide, POL for 1991 reprisals, WAR for 2003, STR for sanctions). All source text paraphrased.

## Audit
Adversarial source-integrity + tier audit, 2026-06-18. Posture: assume every citation fake until proven otherwise. Every source was independently re-checked (live WebSearch/WebFetch); tiers re-derived from facts before reading the assigned tier. Result: all sources real and supporting their attached claims; all four tiers correct. Country downgraded RESEARCHED → UNVERIFIED because irq-1 remains UNVERIFIED by design.

### Source falsification attempts (every source survived)
- **Dyson & Cetorelli, BMJ Global Health (2017)** — VERIFIED exact: title "Changing views on child mortality and economic sanctions in Iraq: a history of lies, damned lies and statistics," authors, journal, 2017, published 24 Jul 2017. Confirmed it calls the 1999 UNICEF survey a "masterful fraud"/manipulation and that post-2003 surveys show "no sign of a huge and enduring rise in the under-5 death rate." Correctly supports toll.low (near-zero). Mirror at LSE eprints 73136.
- **Garfield, "Morbidity and Mortality among Iraqi Children from 1990 through 1998"** — VERIFIED. Columbia's Richard Garfield; most-likely ~227,000 excess under-5 deaths to March 1998, later revised toward ~350,000 by 2000. Supports toll.high. The reliefweb PDF URL is real (top search hit) but returns HTTP 403 to the fetcher (bot protection, not a dead/fake link); content cross-confirmed via search + CASI/4th-Freedom-Forum/GlobalPolicy mirrors. Not a falsification.
- **"International sanctions against Iraq" — Wikipedia** — VERIFIED. Confirmed every number in the citation/toll.note: UNICEF 1999 56→131 per 1,000 (→400k–500k), Garfield 227k, Zaidi/FAO 1995 567k, Dyson & Cetorelli post-2003 ~40/1,000 "no major rise." Supports toll.high.
- **"Casualties of the Iraq War" — Wikipedia** — VERIFIED. IBC 186,901–210,296; IFHS ~151,000 violent; Lancet 2006 654,965 excess / 601,027 violent; ORB 2007 ~1,033,000. ORB correctly carried as a flagged outlier, not a central estimate.
- **Iraq Body Count (iraqbodycount.org)** — VERIFIED. Real running tally; documented range 186,901–210,296 confirmed via Statista/Every-Casualty/Wikipedia (the homepage itself returned a transient HTTP 500 to the fetcher — server error, not a fake URL).
- **Roberts/Burnham et al., The Lancet (2006)** — VERIFIED. "Mortality after the 2003 invasion of Iraq: a cross-sectional cluster sample survey," 21 Oct 2006, 654,965 excess (CI 392,979–942,636), 601,027 violent (CI 426,369–793,663). The thelancet.com abstract URL returns 403/500 to the fetcher (paywall/bot), but the article is real; PubMed 17055943 + JHU Bloomberg confirm. The citation's CI "393,000–943,000" rounds correctly.
- **HRW, "Genocide in Iraq: The Anfal Campaign Against the Kurds" (1993)** — VERIFIED exact via direct fetch: "by the most conservative estimates, 50,000 rural Kurds died," possibly twice that; ~2,000 villages; Halabja 3,200–5,000; dates Feb 23–Sep 6 1988. Supports toll.low.
- **"Anfal campaign" — Wikipedia** — VERIFIED. 50,000 floor ("may well be twice"), Kurdish 182,000 (raised with al-Majid in 1991, who disputed it), genocide/ethnic-cleansing characterization. Supports toll.high. Caveat: a 2007 Hague civil ruling found documentary evidence insufficient for the genocide charge in that specific case, but the Iraqi High Tribunal convicted on Anfal genocide (2007) and IAGS recognizes it — the "judged genocide by HRW and Iraqi courts" language stands.
- **HRW, "Endless Torment: The 1991 Uprising in Iraq and Its Aftermath" (1992)** — VERIFIED exact via direct fetch: Middle East Watch/HRW, June 1992; documents mass killings, summary executions, helicopter attacks on fleeing civilians, disappearances. Supports summary.
- **"1991 Iraqi uprisings" — Wikipedia** — VERIFIED. Infobox now reads "c. 25,000–180,000 killed"; ~200 mass graves registered 2003–06, one believed to hold up to 10,000. Supports toll.high.
- **"Halabja massacre" — Wikipedia** — VERIFIED. 16 Mar 1988; 3,200–5,000 killed, 7,000–10,000 injured; mustard + nerve agents (tabun/sarin/VX); al-Majid death-sentenced Jan 2010; Saddam executed 30 Dec 2006 (Dujail case). Supports summary.
- **"Draining of the Mesopotamian Marshes" — Wikipedia** — VERIFIED with one correction. >90% of marshes gone (UNEP, 90% by 2000); "several thousand Marsh Arabs killed"; population collapse ~500,000 → ~20,000. Correction logged: the ~500,000 in the toll display is the *pre-drainage population*, not a displacement figure — sources support "more than 200,000 displaced" (80k–120k reaching Iran). A clarifying caveat was added to the source; toll.low/high are unaffected (marsh deaths are carried as an uncounted increment, not in the range).

### Tier re-derivation (independent, before reading assigned)
- irq-1 sanctions: structural collapse of health/water/food/sanitation under embargo → disease/malnutrition-driven excess mortality = **STR** (not EXT). Assigned STR. CORRECT.
- irq-2 2003: mass death in/around invasion, occupation, insurgency, sectarian civil war = **WAR**. Assigned WAR. CORRECT.
- irq-3 Anfal/Halabja: deliberate destruction of a people as such (gassing, 2,000 villages razed, mass executions; genocide) = **EXT**. Assigned EXT. CORRECT.
- irq-4 1991 + marshes: political mass-reprisal killing of rebels/civilians after a revolt = **POL** (marsh destruction edges toward EXT but the counted low/high is the suppression). Assigned POL. CORRECT.

### Toll dual-source check
No single-number tolls. Both ends sourced for every event: irq-1 low=0 (Dyson & Cetorelli) / high=500,000 (Wiki sanctions + Garfield); irq-2 low=151,000 (IFHS via Casualties-of-the-Iraq-War Wiki) / high=1,033,000 (Casualties Wiki + Lancet, ORB flagged outlier) — IBC's "supports toll.low" is loose (its own figure ~187k is above the 151k IFHS floor) but harmless, the 151k low is sourced by the Casualties Wiki entry; irq-3 low=50,000 (HRW) / high=182,000 (Anfal Wiki); irq-4 low=25,000 / high=100,000 (both from 1991-uprisings Wiki, a genuine range, conservative vs. the page's current 180k upper bound).

### Ledger / law-1 check
Both ledgers populated and roughly symmetric (2 victim, 2 perpetrator) across the same recent decades; balance is real, not invented. Iran–Iraq War correctly recorded from the Iranian side in IRN, not duplicated here.

### Verdict
- irq-1 sanctions → **UNVERIFIED** (kept; all sources real, but the underlying scale-of-death fact is genuinely unresolved — quarantine is by-design, already reflected in toll.note).
- irq-2 2003 → **VERIFIED** (was RESEARCHED).
- irq-3 Anfal/Halabja → **VERIFIED** (was RESEARCHED).
- irq-4 1991 + marshes → **VERIFIED** (was RESEARCHED).
- Country → **UNVERIFIED** (was RESEARCHED): not all events VERIFIED while irq-1 stands UNVERIFIED.
No invented sources or numbers introduced. 3 events verified, 1 event flagged/quarantined.
