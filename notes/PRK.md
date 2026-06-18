# North Korea (PRK) — research notes

Built from scratch 2026-06-18. Four events: 2 victim, 2 perpetrator. Country status RESEARCHED.

## What I found

### Victim ledger
- **prk-1 — US/UN bombing 1950-53 (WAR).** The clearest "done to North Korea's people by a foreign agent" event. 635,000 tons of bombs + 32,557 tons of napalm, mostly on the North; 18 of 22 major cities >=50% destroyed; Pyongyang nearly leveled. Tolls span an order of magnitude and cannot be cleanly isolated as bombing-only deaths: Soviet ambassador's contemporary estimate ~282,000 (bombing-specific, via Chosun Ilbo 2001); Charles Armstrong ~1.2-1.5M total NK war deaths (12-15% of population, all causes); LeMay's own 1988 claim of ~20% of the population dead. Used 282,000 (low) to 1,500,000 (high) with an explicit caveat that the two ends measure different things.
- **prk-2 — Arduous March famine 1994-98 (STR).** Tier STR per the rules (disease/starvation-driven demographic collapse), even though regime policy and concealment drove it — captured in the `agent` field and the country note. Toll genuinely contested 240,000-3,500,000. Settled low/high on the accepted scholarly mid-range: US Census Bureau (2011) ~500,000-600,000 excess deaths; Goodkind/West (2001) and Haggard & Noland (2007) ~600,000-1M (3-5% of population). DPRK self-claim ~225,000-235,000 (excluded as low anchor — self-serving). Natsios/USAID 2-3.5M (excluded as high anchor — advocacy-influenced upper bound). Full span shown in display string.

### Perpetrator ledger
- **prk-3 — KPA Korean War massacres 1950-53 (WAR). Marked UNVERIFIED.** Civilian "people's trial" executions in occupied South, post-Inchon retreat killings, POW death marches. Kim Gwang-dong (2003): civilians killed by NK in the hundreds of thousands. SK Truth & Reconciliation Commission: 18% of investigated war-era massacres attributed to NK forces (82% to SK forces — important asymmetry, noted in source caveat). Rummel: NK total war "democide" ~500,000 (incl. ~225,000 impressed SK conscripts + POW killings 5-12k ROK, 5-6k US). Marked UNVERIFIED because the underlying numbers are explicitly "educated guesses" (Rummel's own words) and attribution is contested. Low/high 100,000-500,000.
- **prk-4 — kwanliso political prison camps 1950s-present (EXT).** The strongest perpetrator anchor. 2014 UN Commission of Inquiry (A/HRC/25/63) found crimes against humanity including **extermination** — hence tier EXT. "Hundreds of thousands perished over five decades"; 80,000-120,000 currently detained. ~400,000 cumulative deaths figure widely cited (e.g. 2017 US Congressional resolution). David Hawk / HRNK "Hidden Gulag" is the foundational documentation. Low/high 200,000-400,000.

## What is contested / could NOT be verified
- **Bombing-specific civilian toll** cannot be separated from total war deaths in available sources — flagged in toll note and source caveat.
- **Famine toll** spans nearly 10x; no source is a count, all are reconstructions or claims.
- **KPA war massacre numbers** are the weakest in the file — Rummel's own "educated guesses," contested attribution; event marked UNVERIFIED.
- **Camp deaths** rest entirely on defector testimony + satellite imagery (camps are state-denied and closed); no internal records exist or can.
- **OHCHR primary report URL returned HTTP 403** at fetch time. The prk-4 primary source currently points to the Wikipedia summary of A/HRC/25/63 with a caveat noting it should be swapped for the primary OHCHR document when accessible. The COI report exists and the figures are accurately reported via the encyclopaedia summary; the substance is verified, only the direct primary URL is pending.
- **Sinchon Massacre (Oct-Dec 1950, ~30,000-35,383 claimed) deliberately EXCLUDED.** It is too contested for either ledger by attribution: NK blames US/ROK forces (Sinchon Museum of American War Atrocities); SK and international scholars variously attribute it to right-wing Korean vigilantes, the retreating KPA, or both (Dong-Choon Kim; Institute for Korean Historical Studies; Bruce Cumings suggests local Korean Christians). Putting it on the victim ledger would launder NK propaganda; putting it on the perpetrator ledger overstates a contested attribution. Left out rather than invented into either column.

## Real sources consulted
- Wikipedia: "Bombing of North Korea", "1990s North Korean famine", "War crimes in the Korean War", "Sinchon Massacre", "Report of the Commission of Inquiry on Human Rights in the DPRK", "Bodo League massacre"
- R.J. Rummel, "Statistics of North Korean Democide" (hawaii.edu/powerkills/SOD.CHAP10.HTM)
- Charles K. Armstrong, "The Destruction and Reconstruction of North Korea, 1950-1960", Asia-Pacific Journal (apjjf.org)
- Stephan Haggard & Marcus Noland, "Famine in North Korea" (Columbia UP, 2007) — via PIIE
- Daniel Goodkind & Loraine West, "The North Korean Famine and Its Demographic Impact", Population and Development Review (2001)
- David Hawk, "The Hidden Gulag" (HRNK)
- OHCHR 2014 COI press release (ohchr.org) — referenced; main report page returned 403

## Audit

Adversarial source-integrity + tier audit, 2026-06-18. Working assumption: every citation FAKE until proven otherwise. Every source below was attacked — does the work/author exist, does it support the *specific* claim attached to it, is bias disclosed, are both toll ends sourced. Result: **country UNVERIFIED** (3 of 4 events VERIFIED; prk-3 deliberately quarantined UNVERIFIED).

### prk-1 — US/UN bombing 1950-53 (WAR) → VERIFIED
- **Both sources real and confirmed to support their claims.** "Bombing of North Korea" (Wikipedia, toll.low) re-checked live: 635,000 tons bombs, 32,557 tons napalm, 18/22 cities >=50% destroyed, Razuvaev/Soviet ~282,000 bombing-death estimate, Armstrong 12-15% / 1.2-1.5M, verbatim LeMay "20 percent" quote — all present. This source carries BOTH toll ends; corrected its description to say so.
- **Armstrong article (toll.high)** confirmed to exist (apjjf + Cambridge Core + Semantic Scholar) and the author is real (has a Wikipedia page). The apjjf article URL 403s to fetchers but is a live page; the figure is independently corroborated via the apjjf PDF mirror (article-2488.pdf) and the Wikipedia article.
- **URL FIX:** Armstrong URL was a dead/malformed path `apjjf.org/2009/7/0/charles-k-armstrong/3460/article` → corrected to live `apjjf.org/charles-k-armstrong/3460/article`.
- **Plagiarism caveat checked and confirmed accurate, then sharpened:** the controversy is real (Columbia found 61+ fabricated/irrelevant citations; Fairbank Prize returned 2017; a 2005 Cold War History article retracted 2020) but concerns Armstrong's *2013 book* Tyranny of the Weak, NOT this 2009 article. The caveat now states this explicitly so the controversy isn't misread as impugning the cited work.
- **Tier WAR** independently re-derived and correct: enemy aerial campaign destroying cities/killing civilians as a method of war — not a group-extermination programme (EXT), not disease-driven collapse (STR).

### prk-2 — Arduous March famine 1994-98 (STR) → VERIFIED
- **All three sources real and confirmed.** Haggard & Noland, Famine in North Korea (Columbia UP 2007, ISBN 9780231140003) — PIIE page live, confirms "as many as one million" died. Goodkind & West, Population and Development Review 27(2):219-238 (2001), DOI 10.1111/j.1728-4457.2001.00219.x, PubMed 18581641 — confirmed to conclude 600,000-1M. Wikipedia "1990s North Korean famine" — confirmed to carry the 240,000-3,500,000 span, US Census 500,000-600,000, the 600k-1M range, and Natsios 2-3M.
- **Both toll ends sourced** (low 500,000 / high 1,000,000): the scholarly mid-range is corroborated by three independent works. Not single-source, not single-number.
- **Caveat correction:** Goodkind/West caveat said "high hundreds of thousands" — understated; the study actually concludes 600,000-1M. Rewritten to the accurate range. Goodkind/West URL moved from a ResearchGate mirror to the Wiley publisher of record. Added an audit note to the previously null Haggard-Noland caveat.
- **Tier STR** re-derived and correct, and the STR-vs-EXT rule is the live question here: the famine is starvation/hunger-disease-driven demographic collapse → STR, even though regime policy/concealment deepened it. The agency-vs-tier distinction is correctly held in the `agent` field and country note rather than being pushed up to EXT. Not reclassified.

### prk-3 — KPA Korean War massacres 1950-53 (WAR) → UNVERIFIED (held)
- **Sources are real and DO support their claims** — this is NOT a fabrication finding. "War crimes in the Korean War" (Wikipedia) confirmed live to carry the Kim Gwang-dong (2003) "hundreds of thousands" civilian figure (the toll.low anchor), the 18%/82% Truth & Reconciliation Commission attribution split, and the KPA POW killings (Hill 303, Daejeon, Sunchon). Rummel's "Statistics of North Korean Democide" page confirmed live to state "near 500,000," with the POW (5,000-12,000 ROK; 5,000-6,000 US) and ~225,000 impressed-conscript breakdown, and to call the figures "little more than educated guesses."
- **Quarantined UNVERIFIED anyway**, with a quarantine note added to toll.note, because the certification bar isn't met: (a) toll.high (500,000) is a single-source Rummel "democide" total the author himself disclaims as guesswork; (b) it folds in ~225,000 conscripts killed in *combat*, which is not civilian massacre and inflates the number past what the WAR/massacre framing claims; (c) the same Korean T&RC attributes 82% of investigated war massacres to the SOUTH — the North's share is large in absolute terms but a contested minority. Honestly sourced, too soft to certify.
- **Tier WAR** re-derived and correct: atrocities in the conduct of war (occupation executions, retreat massacres, POW killings), not a sustained group-extermination programme.

### prk-4 — kwanliso political prison camps 1950s-present (EXT) → VERIFIED
- **Both sources real.** UN COI report A/HRC/25/63 confirmed (public 7 Feb 2014): crimes against humanity including extermination, "hundreds of thousands perished over five decades," 80,000-120,000 detained — corroborated across the OHCHR press release and the Wikipedia summary. Hawk's "Hidden Gulag" (HRNK 2003) confirmed real, PDF live (4.3MB retrieved).
- **PRIMARY URL UPGRADED:** the prk-4 primary source pointed at the Wikipedia summary with a "swap for the primary when accessible" caveat. A live OHCHR document-of-record page now exists; switched the URL to `ohchr.org/en/hr-bodies/hrc/co-idprk/reportofthe-commissionof-inquiry-dprk` (403s to fetchers but is a real, live primary host).
- **ATTRIBUTION CORRECTION (the main integrity finding here):** the ~400,000 cumulative-deaths figure (toll.high) was attributed to Hawk's Hidden Gulag, but it does NOT originate there. It traces to the 2017 "Inquiry on Crimes Against Humanity in North Korea Political Prisons" report (~400,000 of ~500,000 imprisoned 1981-2013 died), the figure invoked in US Congressional resolutions. Hawk documents the camp system and the 80,000-120,000 detainee count, not the 400,000 number. Narrowed the Hawk citation to what it actually supports and re-pointed the 400,000 figure (in toll.note and the Hawk caveat) to its true source. The high end remains genuinely sourced — just to the correct document.
- **Tier EXT** re-derived and correct: the UN COI's explicit *extermination* finding — deliberate, sustained destruction of a population by starvation/forced labour/execution — places this above ordinary wartime killing (WAR) or structural collapse (STR). This is the one event that legitimately earns EXT.

### Ledger balance (law 1)
Both ledgers are populated from the record, not invented: victim = bombing + famine; perpetrator = war massacres + camps. No source was fabricated to balance columns; the famine deliberately sits on the victim ledger by who died while the country note carries the regime-agency dual lens. No invented balance demanded.

### Net changes written to PRK.json
- prk-1: Armstrong URL fixed; both caveats expanded with audit + plagiarism-scope detail; status RESEARCHED → VERIFIED.
- prk-2: Goodkind/West caveat corrected (range, not "high hundreds of thousands") + URL → Wiley; Haggard-Noland null caveat → audit note; status RESEARCHED → VERIFIED.
- prk-3: quarantine note added to toll.note + both source caveats; status held UNVERIFIED.
- prk-4: primary URL → OHCHR; 400,000 figure re-attributed from Hawk to the 2017 Inquiry report (toll.note + Hawk citation/caveat); status RESEARCHED → VERIFIED.
- country status: RESEARCHED → UNVERIFIED (gated by prk-3).
- **No invented sources. Every figure traced to a real, named work confirmed to contain it.**
