# Guatemala (GTM) — research log

Built from scratch 2026-06-18. Dual-ledger entry: 1 victim event, 2 perpetrator events.

## What I found

### Victim ledger
- **gtm-1 — Spanish conquest & Maya highland demographic collapse (1524–c.1680), STR.**
  Pedro de Alvarado invaded in 1524 with ~400 Spaniards + thousands of Nahua allies; broke the Kʼicheʼ near Quetzaltenango, executed their lords, burned the capital Qʼumarkaj; siege of Zaculeu 1525. Collapse was overwhelmingly disease (smallpox arriving c.1519–20 *before* Alvarado), compounded by war, enslavement and tribute → tiered STR, not EXT, consistent with the atlas's treatment of Peru (per-1) and Mexico.
  Best-documented regional figure is W. George Lovell's Cuchumatán study: ~260,000 (mid-1520s) → ~16,000 by c.1680, a >90% fall over 160 years; recovery to ~28,000 by 1779; region didn't regain its 1500 level until the 20th century. Highland-wide, scholars estimate 33–50% died of disease alone.

### Perpetrator ledger
- **gtm-2 — Maya genocide / "Silent Holocaust" (1981–83 peak), EXT.**
  Army + civil patrols (PAC) under Gen. Efraín Ríos Montt razed ~626 villages; ~134,600 Maya killed in the 1981–83 peak per CEH; 48% of all conflict deaths fell in 1982. Ríos Montt convicted of genocide 10 May 2013 for 1,771 Ixil deaths, 80-yr sentence (first domestic genocide conviction of a former head of state); Constitutional Court annulled it 20 May 2013 (3–2, due-process). He died 2018, retrial unfinished.
- **gtm-3 — State terror across the 1960–1996 internal armed conflict, POL.**
  ~200,000 killed or disappeared (incl. ~40,000–50,000 disappeared); CEH attributed ~93% of violations to state forces, ~3% to guerrillas. War: 13 Nov 1960 → peace accord 29 Dec 1996.

## What is contested / disputed
- **Genocide label.** Judicially proven (2013 conviction) AND officially contested: the Constitutional Court vacated the verdict on procedure (not facts), and Guatemalan governments + military veterans actively deny that genocide occurred → `received_lens: contested`.
- **Tolls.** The 200,000 total is a CEH extrapolation from 42,275 documented victims; the ~40,000–50,000 disappeared is itself an estimate. The 1981–83 Maya figure (~134,600) is statistical, not a name count. The 1,771 Ixil count is the specific adjudicated indictment figure, not the whole campaign.
- **Overlap discipline.** gtm-2's deaths are a SUBSET of gtm-3's ~200,000, recorded separately only because that peak is what was adjudicated as genocide. Noted explicitly in both `toll.note`s to avoid double-counting.

## What could NOT be verified
- A single authoritative absolute death count for the colonial collapse (gtm-1) does not exist; pre-conquest baselines are inferred. Left `low/high: null`, percentage-decline + Cuchumatán regional range only → event `status: UNVERIFIED`.
- Did not directly fetch the full CEH "Memoria del Silencio" report PDF; figures taken from reference/press summaries that track it. CEH cited as primary kind with that caveat in `caveat` fields.

## Real sources consulted
- W. George Lovell, *Conquest and Survival in Colonial Guatemala* (McGill-Queen's UP) + Lovell, "Destroying Generation after Generation: Outbreaks of Smallpox in the Cuchumatán Highlands (1780–1810)", Storicamente — https://storicamente.org/lovell_smallpox_cuchumatan_highlands_of_guatemala
- Wikipedia, "Spanish conquest of Guatemala" — https://en.wikipedia.org/wiki/Spanish_conquest_of_Guatemala
- Wikipedia, "Guatemalan genocide" — https://en.wikipedia.org/wiki/Guatemalan_genocide
- Wikipedia, "Guatemalan Civil War" — https://en.wikipedia.org/wiki/Guatemalan_Civil_War
- International Justice Monitor (2013), Constitutional Court overturns Ríos Montt conviction — https://www.ijmonitor.org/2013/05/constitutional-court-overturns-rios-montt-conviction-and-sends-trial-back-to-april-19/
- Center for Justice and Accountability (CJA), "Guatemala" — https://cja.org/where-we-work/guatemala/ (advocacy/litigation party — caveated)
- CEH, "Guatemala: Memory of Silence" (1999) — the underlying primary source for the conflict figures, accessed via the above summaries.

## Sourcing notes
- CJA flagged as an interested litigation party in every citation (`caveat`).
- The genocide is real and judicially established; the atlas records the dispute as institutional denial inside Guatemala, not as scholarly doubt about whether the killings happened.

## Audit

**Adversarial source-integrity + tier audit — 2026-06-18 (Kai Denrei, kainode).** Assumption going in: every citation is fake until proven otherwise. Verdict: **country VERIFIED — all 3 events VERIFIED.** No fabricated sources found. No tier corrections needed. Every source confirmed to exist, be correctly attributed, and support the specific claim it is attached to.

### gtm-1 — Spanish conquest & Maya highland collapse (STR) → VERIFIED (was UNVERIFIED)
- **Lovell, Storicamente article** — URL live and authentic. Falsification attempt failed: the article exists, is by W. George Lovell, and contains the *verbatim* figure cited: "A population of perhaps 260,000 on the eve of conquest... by 1680 had declined to around 16,000, a fall of more than 90 per cent over a period of 160 years," plus recovery to ~28,000 by 1779. The book *Conquest and Survival in Colonial Guatemala* (McGill-Queen's UP) independently confirmed via Duke UP / Project MUSE / publisher catalogues.
- **Wikipedia 'Spanish conquest of Guatemala'** — confirms 33–50% highland disease mortality, Alvarado's 1524 campaign, execution of Kʼicheʼ lords + burning of Qʼumarkaj, and smallpox preceding Alvarado (1518–1521). Minor: JSON says "smallpox arriving c.1519–20"; source gives a 1518/1519 first wave + 1520–21 second wave — within tolerance, not an error.
- **Toll:** low/high null is correct and honest — baselines are inferred, no absolute count exists; the percentage-decline + Cuchumatán regional range is the only defensible framing. No invented number.
- **Tier:** independently re-derived as STR (disease-driven collapse + secondary war/enslavement/tribute, no intent to destroy a defined group) BEFORE reading the assigned tier; matches. Correct.
- The prior `UNVERIFIED` status reflected the null toll, not a source problem — both sources are solid, so upgraded to VERIFIED.

### gtm-2 — Maya genocide / 'Silent Holocaust' (EXT) → VERIFIED (was RESEARCHED)
- **Wikipedia 'Guatemalan genocide'** (toll.high) — confirms "162,000 total, including 134,600 Maya" for 1981–83 and "48% of deaths occurring in 1982 alone"; also 83% Maya, 626 massacres. The 134,600 figure is genuinely on the page. **Flag (disclosed, not disqualifying):** this source is labelled `kind:"primary"` but the URL is a tertiary Wikipedia summary, not the CEH report. The true primary (CEH *Memoria del Silencio*) genuinely exists — located the full English PDF at hrdag.org. Caveat updated to state the mismatch plainly.
- **IJ Monitor** (toll.low) — URL live, title matches exactly. Confirms conviction 10 May 2013 of genocide + crimes against humanity, 1,771 Maya Ixil deaths (15 massacres), 80-year sentence, Constitutional Court 3–2 annulment on due-process grounds ~20 May 2013. Cross-checked against HRW, ASIL, National Security Archive — all consistent.
- **CJA** (summary) — page live; confirms ~70,000 killed/disappeared in the 1982–83 peak, 93% state responsibility, 626 massacres, CEH genocide finding. Already caveated as an interested litigation party. Good.
- **Toll:** both ends sourced (low 1,771 = adjudicated Ixil count; high 134,600 = CEH 1981–83 estimate). Overlap-with-gtm-3 discipline correctly noted to prevent double-counting.
- **Tier:** re-derived as EXT (court + truth commission found deliberate intent to destroy Maya as such) before reading assignment; matches. Correct — and correctly kept apart from gtm-1's STR.

### gtm-3 — State terror, 1960–1996 internal armed conflict (POL) → VERIFIED (was RESEARCHED)
- **Wikipedia 'Guatemalan Civil War'** (toll.high) — confirms the infobox range "40,000–200,000 dead and missing" (the actual basis for the JSON's low=40,000 / high=200,000), the 40,000–50,000 disappeared estimate, 93% state / 3% guerrilla attribution, and dates 13 Nov 1960 – 29 Dec 1996. Same `kind:"primary"`/Wikipedia-URL mismatch as gtm-2 source #1 — disclosed in caveat. 42,275 documented-victims figure not in the fetched excerpt but is the standard well-attested CEH count.
- **CJA** (summary) — confirms 200,000+ killed/disappeared, 83% Indigenous, 93% state. Interested party, caveated. Good.
- **Toll:** both ends drawn from the same authoritative range — low and high are both sourced, not a single-number toll.
- **Tier:** re-derived as POL (36-year political mass killing of own civilians; ethnic-targeting peak split out to gtm-2 as EXT) before reading assignment; matches. Correct.

### Ledger / law-1 check
Both ledgers populated and supported by the record: victim (gtm-1) and perpetrator (gtm-2, gtm-3). No invented balance demanded. Overlap (gtm-2 ⊂ gtm-3) handled explicitly in both `toll.note`s — no double-count.

### Residual items (transparency, non-blocking)
1. Two sources carry `kind:"primary"` while pointing at Wikipedia summaries of the CEH report rather than the CEH report itself. The underlying primary (CEH *Memoria del Silencio*, full English PDF at hrdag.org/wp-content/uploads/2013/01/CEHreport-english.pdf) is real and the claims are accurate; both caveats now disclose the mismatch. Future hardening: repoint these two URLs to the CEH PDF directly.
2. gtm-1's "626 villages destroyed by army massacres" phrasing in gtm-2's note: the CEH documented **626 massacres**; the army separately acknowledged razing ~440 villages 1981–83. Both framings appear in the literature and are within tolerance; no change made.
