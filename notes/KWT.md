# Kuwait (KWT) — research log

Built from scratch 2026-06-19 with live WebSearch/WebFetch. Status: RESEARCHED. 2 events (1 victim, 1 perpetrator).

## The dual ledger
Both events fall in the same year. They are causally entangled but the victim populations are different people.

### Victim — Iraqi invasion and occupation (1990–1991), kwt-1, WAR
- 2 Aug 1990: >100,000 Iraqi troops invade, take Kuwait City within a day; occupation ends 26 Feb 1991.
- Middle East Watch (HRW): at least ~600 Kuwaitis killed in the first three months; summary executions of suspected resisters (incl. physicians, aid workers) Sep–Oct 1990 and again Jan–Feb 1991; widespread torture and arbitrary detention.
- Kuwaiti sources: ~1,000 Kuwaiti deaths over the war (~1,200 "martyrs" over a longer span).
- ~600 people last seen in Iraqi custody registered "missing"; remains of many recovered from mass graves in Iraq AFTER the 2003 fall of Saddam.
- Toll carried as range 600–1,000 with disputed:true (low = killed in first 3 months; high = total war deaths — different spans).

### Perpetrator — post-liberation reprisals & expulsion of Palestinians/Iraqis/Bedoon (1991), kwt-2, POL
- On the government's return (26 Feb 1991), security forces (State Security Investigative Police) and irregular groups (some linked to the ruling family) ran a campaign of vengeance against residents accused of collaborating with Iraq — chiefly Palestinians (PLO had sided with Saddam), also Iraqis and stateless Bedoon.
- Middle East Watch, "A Victory Turned Sour" (Sep 1991): OVER FORTY extrajudicial killings, majority Palestinians; al-Rigga cemetery held 54 unidentified post-liberation bodies; >6,000 detained Feb–Nov 1991; torture by electric shock, burns, beatings; >1,500 deported Mar–Aug 1991.
- Displacement: ~200,000 Palestinians expelled Mar–Sep 1991; ~200,000 more denied return; pre-war community ~357,000–450,000 fell to ~10,000–22,000 by Sep 1991.
- Toll carried as range 40–4,000 with disputed:true.

## What is contested
- **The killing toll on the perpetrator side is the main dispute.** Firmly documented LOW = "over 40 extrajudicial killings" (Middle East Watch, 1991). The HIGH = ~4,000 killed / ~16,000 tortured comes from Steven J. Rosen, Middle East Quarterly (2012) — an order of magnitude larger, far less firmly sourced, and from a partisan outlet (Middle East Forum is a pro-Israel think tank; Rosen is a former AIPAC research director). Carried explicitly as the contested high with caveat, NOT as an established count.
- The displacement figures (~200,000 expelled / ~200,000 barred) ARE corroborated across multiple independent sources (Wikipedia, HRW, MEQ, press) and are treated as solid.
- Victim-side death breakdowns (civilian vs soldier vs non-national) vary by source; one figure seen was 113 civilians / 118 soldiers / 439 non-nationals, which conflicts with the ~600/~1,000 estimates — left out in favor of the sourced ranges.

## What could NOT be verified / deliberate omissions
- Several authoritative primary PDFs returned HTTP 403 on direct WebFetch: the HRW World Report 1992 Iraq/Kuwait page (Refworld) and the Amnesty MDE 14/16/90 PDF. Cited from indexed/catalogued content + corroborating reporting rather than full-text extraction; flagged in caveats.
- Pre-oil Kuwait (founded ~1756): pearling/trading sheikhdom with enslaved pearl divers and a role in the Gulf slave trade. NOT made into an event — in that system Kuwaiti merchants/Nakhudas/elite were perpetrators and enslaved East Africans/bonded divers the victims, and there is no discrete sourceable death toll. Flagged in the country note for honesty, not fabricated.
- The Bedoon (stateless, ~90,000–180,000) face ongoing structural discrimination and statelessness (HRW "Prisoners of the Past" 2011; Minority Rights Group; Open Society Justice Initiative) — a real and serious rights issue, but it is chronic discrimination/statelessness rather than a discrete mass-death atrocity event, so it informs the perpetrator framing (Bedoon among the 1991 detainees) but was not given its own event.

## Real sources consulted
- HRW / Middle East Watch, "A Victory Turned Sour: Human Rights in Kuwait since Liberation" (Sep 1991): https://www.hrw.org/report/1991/09/01/victory-turned-sour-human-rights-kuwait-liberation
- HRW World Report 1992, Kuwait chapter: https://www.hrw.org/reports/1992/WR92/MEW2.htm (fetched OK)
- HRW World Report 1992, Iraq and Occupied Kuwait (Refworld): https://www.refworld.org/reference/annualreport/hrw/1992/en/40507 (403 on direct fetch; cited via index)
- Amnesty International, Iraq/Occupied Kuwait MDE 14/16/90 (Dec 1990): https://www.amnesty.org/ar/wp-content/uploads/2021/05/MDE140161990ENGLISH.pdf (403 on fetch)
- Steven J. Rosen, "Kuwait Expels Thousands of Palestinians", Middle East Quarterly Fall 2012: https://www.meforum.org/middle-east-quarterly/kuwait-expels-palestinians (fetched OK; partisan — caveated)
- Wikipedia, "Expulsion of Palestinians from Kuwait (1990–91)": https://en.wikipedia.org/wiki/Expulsion_of_Palestinians_from_Kuwait_(1990%E2%80%9391) (fetched OK)
- HISTORY, "Iraq invades Kuwait | August 2, 1990": https://www.history.com/this-day-in-history/august-2/iraq-invades-kuwait
- Background only (not cited in JSON): Wikipedia "History of Kuwait"; HRW "Prisoners of the Past" (2011, Bedoon); Minority Rights Group (Bidoon); Open Society Justice Initiative (statelessness in Kuwait).

## Audit

Adversarial source-integrity + tier audit, 2026-06-19. Posture: assume every citation FAKE until proven otherwise. Country: RESEARCHED -> **VERIFIED** (both events VERIFIED).

### Method
Loaded WebSearch/WebFetch. Tried to FALSIFY every source: confirm the work/author exists, confirm it supports the SPECIFIC claim attached (toll low/high, tier, summary), confirm both ends of each contested toll are independently sourced, confirm bias is disclosed. Re-derived each tier from the facts BEFORE reading the assigned tier. No sources invented.

### Source-by-source verdict

**kwt-1 (victim, WAR)**
- HISTORY "Iraq invades Kuwait" (summary) — real page, popular-history outlet, correctly caveated. PASS.
- Amnesty MDE 14/16/90 (toll.high) — **VERIFIED to exist**: exact ref number, title "Iraq/Occupied Kuwait: Human Rights Violations Since 2 August", Dec 1990; documents arbitrary arrest of thousands, widespread torture, extrajudicial execution of hundreds of unarmed civilians incl. children. Supports the claim. **URL CORRECTED**: original cite pointed at the Arabic-path /ar/ PDF mirror (403s to fetch); replaced with Amnesty's canonical English document landing page `amnesty.org/en/documents/mde14/016/1990/en/`. Caveat updated to record the verification + URL swap.
- HRW/Middle East Watch World Report, "Iraq and Occupied Kuwait" (toll.low — "at least 600 killed in first three months") — figure is **REAL and located**, but **CITATION-YEAR DEFECT FOUND AND CORRECTED**. The original cite pinned toll.low to the *World Report 1992* chapter (refworld id 40507). Refworld's search-indexed full text shows the specific "at least 600 killed in the first three months… summary executions in Sep–Oct of physicians, hospital volunteers and food-distribution personnel" passage belongs to the *World Report 1990* "Iraq and Occupied Kuwait" (refworld id 43631 / docid 467fca3cc). URL corrected to 43631; the 1992 chapter (which corroborates the same occupation killings) retained as a secondary reference inside the cite/caveat. Both Refworld pages 403 to automated fetch — verified from indexed text + corroborating MEW reporting, disclosed in caveat. NOT quarantined: the source is real, the figure genuinely HRW/MEW, only the report-year of the URL was wrong.

**kwt-2 (perpetrator, POL)**
- HRW/Middle East Watch "A Victory Turned Sour" (Sep 1991, toll.low) — **FULLY VERIFIED**: real 64-page report, exact date, "over forty extrajudicial killings" (majority Palestinians), al-Rigga 54 unidentified bodies (most March, six April, one May), targets Palestinians/Iraqis/Bedoon. Supports toll.low exactly. PASS.
- HRW World Report 1992 Kuwait chapter (summary) — **FULLY VERIFIED via direct fetch** (this page does NOT 403): every figure confirmed verbatim — "over forty extrajudicial killings", 54 al-Rigga bodies, ">six thousand detained between February 27 and the end of November", torture by live electric wires / lit kerosene heater / cigarette burns / severe beatings, State Security Investigative Police as "most notorious source of abuse", "more than 1,500 residents… deported" March–August. PASS.
- Rosen, Middle East Quarterly, Fall 2012 (toll.high) — **VERIFIED to exist** (Vol 19 No 4). **PROVENANCE DOUBLE-FLAG ADDED**: the ~4,000-killed / ~16,000-tortured high end is NOT Rosen's own estimate — in the article he attributes it to **Badil**, a Palestinian advocacy organisation ("About 4,000 people were killed, and 16,000 tortured"). So the contested high is a partisan-origin (Palestinian-advocacy) figure relayed through a partisan (pro-Israel Middle East Forum / ex-AIPAC author) outlet — both ends of the chain are partisan, and the number is an order of magnitude above the documented "40+". Caveat and toll.note corrected to state this. Carried ONLY as the contested high. Displacement figures (~200,000 expelled / ~200,000 barred; pre-war ~400,000–450,000 down to ~20,000) confirmed in-article and corroborated by Wikipedia (pre-war ~357,000; ~200,000 remaining 14 Mar 1991; 287,000+ forced out). PASS.

### Toll dual-end check
- kwt-1: low (Amnesty/MEW occupation killings + HRW 600/3-months) and high (Amnesty hundreds executed / ~1,000 Kuwaiti-source war total + ~600 missing) each independently sourced. PASS.
- kwt-2: low (MEW "40+", fully verified) and high (Badil-via-Rosen ~4,000, partisan, flagged) each sourced; dispute shown. PASS.

### Tier re-derivation (done before reading assigned tiers)
- kwt-1: interstate armed invasion + 7-month belligerent occupation killing combatants and civilians, summary executions of resisters, disappearances → **WAR**. Matches. Not disease-driven; not EXT. CONFIRMED.
- kwt-2: reinstated state + irregulars murdering/torturing/mass-detaining/expelling a political-ethnic category branded collaborators; dominant character is expulsion plus ~40+ targeted killings, not extermination → **POL**. Matches; EXT brush correctly addressed and correctly declined. Not disease-driven. CONFIRMED.

### Ledger / law-1 check
Both ledgers populated by the record: a victim event (Iraqi occupation) and a perpetrator event (post-liberation reprisals) for the same seven months, against different victim populations. Genuine, not invented balance. PASS.

### Outcome
0 events flagged UNVERIFIED, 2 VERIFIED. Two citation corrections (no fabrication): (1) kwt-1 toll.low URL re-pointed from HRW WR1992 to the WR1990 chapter that actually carries the "600 in first three months" figure; (2) kwt-1 Amnesty URL re-pointed from the 403ing Arabic PDF mirror to the canonical English landing page. One provenance correction: kwt-2 toll.high ~4,000 figure re-attributed to Badil (its true origin) rather than to Rosen, with a partisan double-flag. Country status -> VERIFIED.
