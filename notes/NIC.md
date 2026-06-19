# Nicaragua (NIC) — research log

Built from scratch 2026-06-19. Four events: 2 victim, 2 perpetrator. Country status RESEARCHED.

## Ledger structure

**Done to them (victim)**
- nic-1: Demographic collapse of indigenous Pacific Nicaragua, 1520s-1540s (STR).
- nic-2: Somoza dictatorship's war on the population during the 1972-1979 insurrection (POL).

**In their name (perpetrator)**
- nic-3: The "Red Christmas" — Sandinista forced relocation and killing of Miskito communities, 1981-1982 (POL).
- nic-4: The 2018 crackdown on protesters under Ortega/Murillo (POL).

## Key findings

- The ledger is genuinely symmetric and the dual lens is sharp: the Sandinista movement is the *liberator* in nic-2 (overthrowing Somoza) and the *perpetrator* in nic-3 and nic-4. Nicaraguans killing Nicaraguans runs through every modern entry.
- Colonial collapse (nic-1) is the largest die-off but the least commemorated; filed STR because disease was the primary killer even though the ~200,000-person slave trade to Panama/Peru (1528-1540) was deliberate. That cause-mixing is flagged in the toll note.

## What is contested

- **1972-1979 toll (nic-2):** "more than 30,000" (Britannica) up to 50,000 (partisan socialist source). Shown as a range 30,000-50,000. A U.S. DoD study gives 45,000-65,000 for the wider 1978-1990 frame (revolution + Contra War combined), which is a different scope.
- **Colonial collapse (nic-1):** pre-conquest population estimated anywhere from ~500,000 to over 1 million (~825,000 commonly cited); decline of ~400,000-600,000. Wide scholarly uncertainty.
- **Red Christmas (nic-3):** primary harm is displacement (~8,500 relocated, tens of thousands displaced); documented killings in the dozens. The "at least 64" figure comes from a specific legal complaint against Ortega that was later DROPPED — used as a documented floor, not an adjudicated total. Framing itself is disputed ("worst political mistake" vs. ethnic persecution).
- **2018 (nic-4):** IACHR documented "at least 355" killed (incl. 23 police); HRW says "more than 300." Range 300-355. Nicaraguan government denies responsibility, passed an amnesty, expelled monitors.

## What could NOT be verified / deliberate exclusions

- **Contra War NOT entered as a Nicaragua perpetrator event.** The Contras were a U.S.-financed insurgent force, not the Nicaraguan state; the war's documented atrocities split between the Contras (U.S.-directed) and the Sandinista state. The Miskito relocation captures the cleanest Sandinista-state perpetration of that period. Contra War figures (~31,000 dead total per UNM NoticeN; civilian casualty breakdown 10,473 incl. 3,218 dead 1980-Jun 1987) were reviewed but not used as a Nicaragua-attributed toll.
- **IACHR 2021 press release (the source of the 355 figure) returned HTTP 403 on direct WebFetch.** The figure and its breakdown (340 men / 15 women / 27 minors / 23 police) are consistently quoted across multiple IACHR releases and independent search results, so it is retained with a caveat noting the access block. URL kept as the canonical citation.
- **Britannica history page also returned 403 on direct fetch;** the "more than 30,000" figure came through search excerpts of the Britannica Sandinista-government page. Citation retained.
- **Linda Newson, 'Indian Survival in Colonial Nicaragua' (1987)** is the field's standard demographic authority and is cited as the underlying scholarly source (url: null — book, not directly accessed). Specific page figures are NOT quoted from it; only its standing is invoked. The numerical toll rests on the Wikipedia conquest article (which itself draws on Newson) and the LoC Country Study.
- The ~200,000 slave-export figure (1528-1540) traces to the U.S. Library of Congress "Nicaragua: A Country Study" (1993), accessed via a Brewminate republication (public domain). Reference-grade but an estimate; supports the slave-trade dimension of the toll, not an isolated death count.

## Real sources consulted

- Wikipedia, "Spanish conquest of Nicaragua" — pre-contact ~825,000; 400,000-600,000 dead, primarily disease. (fetched OK)
- LoC "Nicaragua: A Country Study" (1993) via Brewminate — 200,000 enslaved/exported 1528-1540. (fetched OK)
- Linda A. Newson, "Indian Survival in Colonial Nicaragua" (Univ. of Oklahoma Press, 1987) — cited as underlying authority; not directly accessed.
- Encyclopaedia Britannica, "Nicaragua: The Sandinista government" / "history of Nicaragua" — "more than 30,000." (via search; 403 on direct fetch)
- Time, "Nicaragua: Somoza's Reign of Terror" — National Guard repression, aerial bombing of cities. (via search)
- Socialist Party (UK), "Lessons of the Sandinista Revolution" — 50,000 high-end; partisan, caveated.
- Mateo Jarquin, "Red Christmases...", Cold War History 18:1 (2018), Taylor & Francis — ~8,500 relocated, dozens killed. (abstract via search)
- IACHR (Univ. of Minnesota HR Library), "Report on... Nicaraguan Population of Miskito Origin" (1983), Ch.3 — Coco River relocation, Leimus. (URL retained)
- Fox News / AP — complaint over "at least 64 Miskito" killings dropped against Ortega.
- IACHR/OAS 2021 release — "at least 355" killed 2018-2019. (403 on direct fetch; figure cross-confirmed)
- Human Rights Watch, "Crackdown in Nicaragua" (2019) and "Protests Leave Deadly Toll" (2018) — "more than 300" killed, 2,000+ injured. (fetched OK)

## Audit

Adversarial source-integrity + tier audit, 2026-06-19. Posture: assume every citation fake until proven. Result: all 4 events VERIFIED; country VERIFIED.

### Source integrity (tried to falsify each; all survived)
- **nic-1.** Wikipedia "Spanish conquest of Nicaragua" fetched directly — confirms pre-contact ~825,000 and "400,000–600,000 dead, primarily due to disease" verbatim, Pedrarias Dávila 1524–1527 Pacific. LoC "Nicaragua: A Country Study" via Brewminate fetched directly — confirms "an estimated 200,000 native Nicaraguans were exported as slaves to South America from 1528 to 1540" and "almost completely wiped out by the rapid spread of new diseases" verbatim, public-domain attribution correct. Newson 1987 confirmed REAL (Univ. of Oklahoma Press, Civilization of the American Indian Series, 466pp; AHR review vol. 95 no. 1); url:null with honest "not directly accessed" caveat — acceptable, not an invented quote.
- **nic-2.** Britannica "more than 30,000 killed" confirmed via search excerpt (page 403s on direct fetch, as the original log noted). Time "Somoza's Reign of Terror" confirmed REAL and on-claim (National Guard torture/rape/summary execution per bishops' letter; León aerial bombardment) — 403 on fetch, verified by search. Socialist Party (UK) confirmed REAL and verbatim ("50,000 were killed in the two years before the fall"; "Leon Esteli, Chinandega and Masaya were bombed by the National Guard, killing 6,000") — partisan bias openly disclosed in caveat; used only for high end.
- **nic-3.** Jarquin "Red Christmases," Cold War History 18:1 — author REAL (Dr. Mateo Jarquin, Chapman Univ.); abstract verbatim ("forcibly resettled some 8,500 Miskito Indians, killing dozens and displacing thousands… la Navidad Roja"). Fox/AP "at least 64 Miskito" complaint-dropped story confirmed REAL and verbatim; bias caveated, framed as dropped-complaint floor. IACHR 1983 Miskito report Ch.3 fetched directly — confirms 42 villages relocated 28 Dec 1981, ~8,500 to Tasba Pri (1 Jan–20 Feb 1982), Leimus killings "in retaliation for the killings in San Carlos, in violation of Article 4." Strong corroboration.
- **nic-4.** IACHR 2021 "at least 355" (18 Apr 2018–31 Jul 2019) confirmed consistently across multiple OAS releases (page 403/blocked on direct fetch, as logged). HRW "Crackdown in Nicaragua" fetched directly — confirms "more than 300 people killed and more than 2,000 injured," extrajudicial executions and torture verbatim.

### Toll dual-end check
- nic-1: low (Wikipedia/Newson) + high (Wikipedia) — both ends sourced. PASS.
- nic-2: low 30,000 (Britannica) + high 50,000 (Socialist Party) — both ends sourced. PASS.
- nic-3: **FLAGGED — single-source, single-number toll (low=high=64).** Derives from one legal complaint (dropped). Honestly disclosed in toll.note as "a documented floor… not a comprehensive total," with displacement (~8,500) foregrounded as the real scale. Not a falsification; retained VERIFIED with the flag standing.
- nic-4: low 300 (HRW) + high 355 (IACHR) — both ends sourced. PASS.

### Tier re-derivation (done before reading assigned tier)
- nic-1 → STR (disease-driven demographic collapse; STR-not-EXT rule enforced — slave trade deliberate but disease primary killer). Matches assigned. CORRECT.
- nic-2 → POL (state bombing/torturing/executing its own civilians to hold power). Matches. CORRECT.
- nic-3 → POL (forced relocation + killings of suspected support base; dozens dead, not planned destruction of a people → not EXT). Matches. CORRECT.
- nic-4 → POL (lethal repression of a political protest movement; "crimes against humanity" findings do not make it EXT — no ethnic-group destruction). Matches. CORRECT.
No tier corrections required.

### Ledger balance (law 1)
Both ledgers populated from the record: 2 victim (nic-1, nic-2), 2 perpetrator (nic-3, nic-4). No invented balance. PASS.

### Minor residual
- IACHR 2021 demographic breakdown (340 men / 15 women / 27 minors / 23 police) not returned verbatim by search; aggregate 355 is rock-solid and the earlier 325-count breakdown (21 police / 24 minors) corroborates the structure. Does not affect VERIFIED status.
- Three citation URLs (Britannica, Time, IACHR-2021) return 403/blocked on direct WebFetch but are confirmed real and on-claim via search; URLs retained as canonical, access caveats already present.

**Verdict: 4/4 events VERIFIED, 1 toll flag (nic-3 single-source/single-number, disclosed). Country VERIFIED.**
