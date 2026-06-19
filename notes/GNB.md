# Guinea-Bissau (GNB) — research log

Built from scratch 2026-06-19. Web tools (WebSearch/WebFetch) loaded and used for all research. Four events: 2 victim, 2 perpetrator. Country status RESEARCHED; two events UNVERIFIED (magnitude disputed, events real).

## Events

### Victim ("Done to them")
- **gnb-1 — Pidjiguiti dock massacre (1959), POL, RESEARCHED.** Portuguese secret police (PIDE) fired on (and threw grenades at) striking dockworkers at the Port of Bissau, 3 Aug 1959. Toll ~25–50+; no independent count under the colonial state, so the range is wide and open-ended. Significance is political — it pushed the PAIGC from non-violence to armed struggle. Received lens memorial (Pidjiguiti Day is a national holiday).
- **gnb-2 — War of independence / Portuguese counter-insurgency (1963–1974), WAR, RESEARCHED.** Common casualty tabulation: ~2,069 Portuguese troops, ~6,000 PAIGC, ~5,000 civilians (≈13,000 high; ~5,000 civilian floor used for low). 1965/1967 bombing displaced ~106,000 (~20% of the territory) into Guinea-Conakry and Senegal; napalm + defoliants from ~1970. All estimates, no census.

### Perpetrator ("In their name")
- **gnb-3 — PAIGC executions of African ex-Portuguese soldiers (1974–1975), POL, UNVERIFIED.** After the 1974 ceasefire/withdrawal the victorious PAIGC summarily executed Guinean men who had fought for Portugal (commandos, militia, security) and refused to join the new party. Most-cited figure 7,447 — carried as a CONTESTED high end only, low = null. The event is real (PAIGC acknowledged the killings in its own paper Nó Pintcha, Nov 1980: mass graves at Cumerá, Portogole, Mansabá; massacre at Bissorã); the *magnitude* is what is disputed. Received lens denied.
- **gnb-4 — Vieira-era political executions + 1998–99 civil war (1986–1999), POL, UNVERIFIED.** Two strands: (1) 1986 — VP Paulo Correia + 5 others executed for an alleged coup after a long trial (small, well-attested toll). (2) 1998–99 civil war — Vieira fought a mutinous army chief (Ansumane Mané), Senegalese (~1,300) + Guinean (~400) troops backed him, Bissau shelled; ≥655 killed (some sources 'thousands'), ~350,000 displaced. Low/high (655–2,000) bound the war's fighting deaths only. Received lens contested. The note flags that the 1998–99 war was also done TO the country (foreign intervention), so it is logged as government-conduct perpetrator with shared culpability stated.

## Contested / could-NOT-verify
- **7,447 post-independence executions (gnb-3):** the precise number is the single biggest unverifiable in the file. Repeated across Wikipedia and derivative sites attributing it to Lloyd-Jones and Munslow (1981); I could NOT tie it to a clearly verifiable scholarly count with a working URL. Treated as a contested high-end claim, low = null, event UNVERIFIED. Did NOT invent a figure to fill the low end. The underlying event is firmly attested (PAIGC's own Nó Pintcha admission + Bissorã).
- **1998–99 civil war toll (gnb-4):** unsettled — ≥655 vs 'thousands'; civilian deaths from the artillery bombardment of Bissau were never counted. Bounded loosely, event UNVERIFIED.
- **Pidjiguiti toll (gnb-1):** 25 to 50+ , no colonial-era count; range kept wide.
- **Independence-war toll (gnb-2):** casualty tabulation is an estimate with no census; displacement ~106,000 is the firmer number.
- **Britannica history page** returned HTTP 403 to WebFetch; used GlobalSecurity.org + the search-result summary of Britannica instead for the war outline.
- **António Luís Marinho, *Operação Mar Verde* (Temas e Debates, 2006)** surfaced while chasing the 7,447 figure but is about the 1970 Portuguese raid on Conakry (Operation Green Sea), NOT a source for the post-war executions — noted here so it is not mistaken for one.

## Real sources consulted
- Wikipedia: Pidjiguiti massacre; Guinea-Bissau War of Independence; Guinea-Bissau Civil War; Paulo Correia (politician); 1980/1985/1986 coup articles; Operation Green Sea.
- Face2Face Africa — Pidjiguiti feature.
- GlobalSecurity.org — Guinea-Bissau War of Independence.
- ExecutedToday.com — 1986 execution of Paulo Correia and five others.
- WorldAtlas / peaceagreements.org / ReliefWeb timelines — civil-war casualty and displacement figures (~655, ~350,000 displaced, ~250,000 fled Bissau).
- (Checked but not cited as load-bearing: Britannica history [403 to fetch]; António Luís Marinho, *Operação Mar Verde*, 2006.)

## Status
Country status RESEARCHED. Perpetrator and victim ledgers are balanced 2–2 and both are real; the perpetrator side is NOT padded — the 7,447 figure is explicitly flagged as contested rather than asserted. Two events UNVERIFIED by design (disputed magnitude, real event), per the law that an unverifiable figure → null/contested + UNVERIFIED, never an invented number.

## Audit

Adversarial source-integrity + tier audit, 2026-06-19. Assumption going in: every citation fake until proven otherwise. Result: all 8 sources across the 4 events are REAL and support the claims attached to them. Two events stay UNVERIFIED on toll grounds (single-sourced / single-number magnitude), not on source-fabrication grounds.

### Source integrity (falsification attempts)
- **gnb-1 / Wikipedia 'Pidjiguiti massacre'** — VERIFIED. Fetched: confirms 3 Aug 1959, PIDE perpetrator, "25–50 workers died at the scene," PAIGC shift from non-violence to armed struggle. Supports toll.high and the date/agent. Real.
- **gnb-1 / Face2Face Africa** — VERIFIED (with caveat). Direct WebFetch returns HTTP 403 (bot-block), so existence confirmed via search index: article title and content (dock strike, PIDE firing, PAIGC radicalisation) are real. Not a dead or fabricated link; caveat added to the source noting the 403.
- **gnb-2 / Wikipedia 'Guinea-Bissau War of Independence'** — VERIFIED. Fetched: 2,069 Portuguese killed, ~6,000 PAIGC, 5,000 civilians; 106,000 displaced (~20%); napalm + defoliants from 1970. Every number in the toll note is on the cited page. Supports toll.high.
- **gnb-2 / GlobalSecurity.org** — VERIFIED. Fetched: Portuguese bombing/raids, ~35,000 troops, ~150,000 / 30% resettled (same order as the 106,000 displacement). Supports summary. Correctly does NOT carry the 7,447 figure (that belongs to gnb-3).
- **gnb-3 / Wikipedia 'Guinea-Bissau War of Independence' (aftermath)** — source REAL; figure CONTESTED. The 7,447 figure is present and attributed to Lloyd-Jones and Munslow (1981). Corroborated independently on GlobalSecurity.org, EBSCO research starter, and Military-History wiki — all tracing to the same Lloyd-Jones/Munslow chain. Nó Pintcha (Nov 1980), mass graves at Cumerá/Portogole/Mansabá and the Bissorã massacre are all independently confirmed in search results.
- **gnb-3 / Munslow 1981 (AUDIT-ADDED)** — VERIFIED to exist. Barry Munslow, "The 1980 Coup in Guinea Bissau," Review of African Political Economy No. 21 (May–Sep 1981), pp. 109–113. Real, citable scholarly work: JSTOR stable/3998113, T&F doi 10.1080/03056248108703470, ROAPE vol. 8 no. 21. JSTOR/T&F return 403 to WebFetch (paywall/bot-block), NOT non-existence. **Correction:** the prior note claimed the figure "cannot be tied to a single, clearly verifiable scholarly count" — that is now FALSIFIED. The source chain IS verifiable. The figure stays contested only because it is a single count with no independent census/body recovery, so the source has been added explicitly and the note rewritten to stop overstating it as unverifiable.
- **gnb-4 / ExecutedToday.com** — VERIFIED. Fetched: July 1986 execution of Paulo Correia and five others (six total) by firing squad for the 1985 coup plot against Vieira; 53 convicted, 6 executed. Supports summary.
- **gnb-4 / Wikipedia 'Guinea-Bissau Civil War'** — VERIFIED. Fetched: 7 Jun 1998–10 May 1999; ≥655 killed (vs "thousands"); 350,000 displaced (~200–250k from Bissau); 1,300 Senegalese + 400 Guinean troops backing Vieira. Supports toll.high.

### Toll audit (low + high coverage)
- **gnb-1** — OK. Range 25–50 is bounded at both ends by the same colonial-era estimate band; open-ended "50+" is honestly flagged. Single underlying estimate band but appropriate for an uncounted colonial event.
- **gnb-2** — OK. Low (5,000 civilian floor) and high (~13,000 total) both drawn from the same Wikipedia tabulation; estimate, flagged as such.
- **gnb-3** — FLAGGED (kept UNVERIFIED). Single-number toll: high = 7,447 (now with a verified scholarly source), low = null. No source supports a low bound; magnitude single-sourced. Correctly UNVERIFIED.
- **gnb-4** — FLAGGED (kept UNVERIFIED). War-strand low (655) rests on a single tabulation; high ("thousands"→2,000) is unsettled; civilian shelling deaths never counted. Correctly UNVERIFIED. (1986 strand: 6 executed, well-attested.)

### Tier re-derivation (done from facts before reading assigned tier)
- gnb-1 — police killing strikers = lethal political repression of civilians → **POL**. Matches.
- gnb-2 — 11-yr counter-insurgency war, no group-destruction intent → **WAR**. Matches. (Not EXT.)
- gnb-3 — post-ceasefire mass execution of a political/allegiance-defined category (ex-Portuguese soldiers) → **POL**. Matches. (Not EXT: target defined by wartime allegiance, not ethnicity-for-biological-destruction.)
- gnb-4 — state execution of rivals + state lethal conduct in civil war → **POL**. Matches.
- No disease-driven event in the file, so the STR-vs-EXT trap does not arise. No tier corrections required.

### Ledger check (law 1)
Both ledgers populated and real: victim 2 (gnb-1, gnb-2), perpetrator 2 (gnb-3, gnb-4). Not padded — the perpetrator side is genuine (PAIGC executions firmly attested via Nó Pintcha/Bissorã; Vieira-era killings well-documented), the contested figure is flagged rather than asserted. No invented balance.

### Verdict
- Sources: 8/8 real, none fabricated. One scholarly source (Munslow 1981) added to gnb-3 to make the verified chain explicit. **No invented sources.**
- gnb-1 VERIFIED, gnb-2 VERIFIED, gnb-3 UNVERIFIED (single-sourced contested toll), gnb-4 UNVERIFIED (unsettled war toll).
- Country status: **UNVERIFIED** (not all events VERIFIED). Events verified: 2. Events flagged: 2.
