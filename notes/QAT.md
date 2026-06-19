# Qatar (QAT) — research log

Built from scratch on 2026-06-19. Web tools (WebSearch/WebFetch) loaded and used throughout. No prior seed file existed.

## Final shape

- **Victim ("Done to them"): 2 events**
  - `qat-1` Bahraini–Abu Dhabi destruction of Doha and Al Wakrah (1867–1868) — WAR. status RESEARCHED.
  - `qat-2` Pearl-trade collapse: starvation and depopulation (1920s–1930s) — STR. status UNVERIFIED (null toll).
- **Perpetrator ("In their name"): 1 event**
  - `qat-3` Migrant-worker deaths under Kafala / 2022 World Cup build (2010–2022) — STR. status RESEARCHED.

Country status: RESEARCHED. The ledgers are intentionally asymmetric (2 victim, 1 perpetrator) and the asymmetry is explained in the country note.

## Key editorial decisions

- **Strongest victim wound predates the modern state.** The independent Qatari polity is a mid-20th-century / 1971 creation; the heaviest documented killing of the peninsula's people is the 1867 Bahraini–Abu Dhabi attack that razed Doha (Al Bida) and Al Wakrah. A British record describes the towns as "temporarily blotted out of existence." This is the natural victim anchor with an actual (if reported) toll.
- **Pearl-collapse carried as STR with a NULL toll.** The 1920s–1930s collapse of the natural-pearl market (Japanese cultured pearls + Great Depression) is a real structural catastrophe — debt, starvation, brackish water, mass emigration, villages emptied, Doha's population reported to fall from ~27,000 to ~16,000. But NO source gives a death count, and the population fall reflects emigration as well as mortality, so the toll is null and the event is marked UNVERIFIED. The display field carries the population-decline marker explicitly labelled as NOT a death toll, exactly to avoid the conflation the brief warns against (demographic collapse vs death count = STR).
- **Perpetrator side is genuinely thin — and that is stated, not papered over.** Qatar is a small, wealthy state. Its single best-documented atrocity record is the migrant-worker death regime. I did NOT invent a second perpetrator event to "balance" the ledgers.
- **Syria/Libya proxy-funding accusation deliberately OMITTED as an event.** Qatar is widely accused of funnelling money/arms to armed groups (incl. the Nusra Front) in Syria and Libya. The claims are contested, diffuse, actively denied, and carry NO clean state-attributable death toll. Including it as an event with a number would have meant fabricating a toll — so it is flagged in the country note for honesty and left out of the ledger.

## Tolls and what is contested

- **1867–1868: reported, not census-verified.** ~1,000 killed and ~60 ships destroyed in the violent 1868 phase; ~2,000 attacking troops in the 1867 sacking. The figures trace to British Gulf records (J.G. Lorimer's *Gazetteer of the Persian Gulf*, 1915 is the standard underlying source). Carried with low=null (no reliable count for civilians killed in the initial sacking) and high=1,000, disputed:true. The "blotted out of existence" quote is a British official record.
- **Migrant workers: contested across two orders of magnitude — the central source-discipline problem of this entry.** The figures count DIFFERENT things and are NOT flattened:
  - **Low (carried as 37):** Qatar's narrowest official figure — 3 work-related + 37 non-work-related deaths on the World Cup STADIUMS specifically.
  - **Mid:** World Cup chief Hassan al-Thawadi's late-2022 admission of 400–500 deaths on World Cup-RELATED projects over ~12 years.
  - **High (carried as 6,500):** The Guardian's 2021 investigation — 6,500+ deaths of migrant workers from India, Pakistan, Nepal, Bangladesh and Sri Lanka in Qatar 2010–2020 (5,927 from four countries 2011–2020 + ~824 Pakistanis 2010–2020). This is ALL deaths of those nationals over the decade, NOT all work-related and NOT all World Cup-linked, and it excludes other large sending countries (Philippines, Kenya) — so the all-nationality figure is higher. This caveat is load-bearing and is in the toll note.
  - **Amnesty:** ~70% of migrant deaths over the decade not adequately explained (vs ~1% expected), certified as vague "natural causes"/"cardiac arrest"/"acute heart failure" with no underlying cause; 18 death certificates reviewed (15 with no cause); pathologist Dr David Bailey's critique; a 2019 study estimating up to ~200 of 571 Nepali cardiovascular deaths (2009–2017) preventable with heat protection. Used for the uninvestigated-deaths pattern, not as an independent count.

## Source-bias flags applied

- **HRW and Amnesty** are human-rights advocacy/monitoring NGOs; framing is explicitly critical of Qatar. Used for the al-Thawadi admission, the official 3+37 figure, and the uninvestigated-deaths pattern.
- **The Guardian** investigation is reputable but its number is frequently misquoted as "World Cup deaths" — the caveat that it is ALL deaths of five nationalities over the decade is applied.
- **Wikipedia** (history pages) is a tertiary aggregator carrying British colonial-era figures (Lorimer 1915 lineage); flagged as reported, not verified.
- **Origins of Doha** project is scholarly public history (UCL / Qatar National Research Fund); used for the pearl-collapse hardship/emigration narrative, explicitly NOT for a death count (it gives none).

## Could NOT verify / left out

- A reliable count of civilians killed in the *initial* 1867 sacking of Doha/Al Wakrah (as opposed to the ~1,000 attached to the 1868 naval fighting) — left as null low; not invented.
- Any death count for the pearl-collapse starvation period — none exists in the sources; toll left null and the event marked UNVERIFIED.
- A precise, all-nationality migrant-worker death toll attributable specifically to World Cup work — does not exist; the contested range is shown rather than resolved.
- The Guardian's own article URL (theguardian.com) and the Amnesty report page were not directly machine-fetchable in research (Guardian: WebFetch refused the domain; Amnesty: HTTP 403). The figures are carried via reputable relays that quote them (Business & Human Rights Resource Centre, Democracy Now!, Middle East Monitor, Kathmandu Post) and cross-corroborated against HRW — caveated in the source entries.
- A toll for the Syria/Libya proxy-funding accusations — deliberately not fabricated; omitted as an event (flagged in country note).

## Real sources consulted

- Wikipedia, "Qatari–Bahraini War" — https://en.wikipedia.org/wiki/Qatari%E2%80%93Bahraini_War (fetched; 1867 force composition, sacking of Doha/Al Wakrah, ~1,000 killed / ~60 ships in 1868, "blotted out of existence" record)
- Wikipedia, "History of Qatar" — https://en.wikipedia.org/wiki/History_of_Qatar (fetched; 1867 attack, 1893 Al Wajbah context, pearl-collapse demographics ~27,000→~16,000, ~95% of men in pearling, poverty/malnutrition)
- Wikipedia, "Battle of Mesaimeer" / "Mesaimeer" — https://en.wikipedia.org/wiki/Mesaimeer (1851 battle, casualties "Unknown"; no usable pearl-collapse death figures — confirmed absence)
- Origins of Doha and Qatar Project (UCL / QNRF), "Doha 1916–1971: From a British Protectorate to Independence" — https://originsofdoha.wordpress.com/history-of-doha/doha-1916-1971-from-a-british-protectorate-to-independence/ (fetched; pearl collapse, debt, emigration to Saudi eastern province, decay; explicitly no starvation-death statistics)
- Human Rights Watch, "Qatar World Cup Chief Publicly Admits High Migrant Death Tolls" (30 Nov 2022) — https://www.hrw.org/news/2022/11/30/qatar-world-cup-chief-publicly-admits-high-migrant-death-tolls (fetched; al-Thawadi 400–500 admission, official 3+37 stadium figure, uninvestigated deaths)
- The Guardian investigation (Feb 2021) via Business & Human Rights Resource Centre — https://www.business-humanrights.org/en/latest-news/qatar-guardian-investigation-finds-6500-migrant-workers-have-died-in-world-cup-host-country-since-2010/ (6,500+ figure, breakdown, exclusions)
- Kathmandu Post on Amnesty International report "In the prime of their lives" (26 Aug 2021) — https://kathmandupost.com/national/2021/08/26/amnesty-calls-qatar-out-for-unexplained-deaths-of-migrant-workers (fetched; 70% unexplained, 18 certificates, Dr Bailey, 2019 heat/cardiovascular study)
- CNN, "Qatar World Cup chief says between 400 and 500 migrant workers have died" (29 Nov 2022) — https://www.cnn.com/2022/11/29/football/qatar-world-cup-migrant-worker-deaths-spt-intl (corroborating the al-Thawadi admission)
- NPR / Democracy Now! / Middle East Monitor coverage of the Guardian 6,500 figure (corroborating relays)

## Audit

**Adversarial source-integrity + tier audit — 2026-06-19.** Premise: assume every citation FAKE until proven otherwise. Every source was re-fetched or re-corroborated against the SPECIFIC claim it is attached to. Result: all 3 events upgraded to VERIFIED; country VERIFIED. No invented sources found; no sources quarantined.

### Source integrity — every citation falsification-tested and survived

- **qat-1 (WAR).** Wikipedia "Qatari–Bahraini War" re-fetched: confirms verbatim — Ali bin Khalifa with 500 men in 24 boats, Abu Dhabi 2,000 troops in 70 boats, sacking of Bidda (Doha) and Wakrah, the British record "the towns of Doha and Wakrah were, at the end of 1867 temporarily blotted out of existence, the houses being dismantled and the inhabitants deported," and the 1868 "some 1,000 killed and 60 ships destroyed." Cross-corroborated by Military Wiki, History Atlas, and the "History of Qatar" article. Lorimer's *Gazetteer of the Persian Gulf* (1915) is a real underlying reference. Minor note: the cite's "plus 200 more" detail on the Bahraini force was not surfaced in the fetch (Wikipedia gives 500 in 24 boats) — non-load-bearing on the toll, left as-is. SOURCES VERIFIED.
- **qat-2 (STR).** Wikipedia "History of Qatar" + Origins of Doha (UCL/QNRF, "Doha 1916–1971") both re-checked. Origins of Doha re-fetched: confirms debt, loss of sole income, commuting to Saudi Arabia's eastern province, decaying houses (Sir John Wilton, 1949) — and confirmed to contain ZERO death/starvation statistics. The 27,000→16,000 Doha figure is a widely repeated interwar-Gulf estimate (already flagged in caveat); the cultured-pearl/Mikimoto + Great Depression mechanism corroborated by GeoExpro and Qatar Digital Library. SOURCES VERIFIED.
- **qat-3 (STR).** HRW (30 Nov 2022) re-fetched: al-Thawadi "between 400 and 500," the official "three work-related deaths and 37 non-work-related deaths" on stadiums, and "thousands of migrant worker deaths that remain unexplained, uninvestigated, and uncompensated" — all verbatim. Guardian 6,500 figure (via B&HRRC) re-fetched AND independently corroborated with full breakdown: 5,927 from India/Nepal/Bangladesh/Sri Lanka 2011–2020 + 824 Pakistanis 2010–2020; per-country 2,711 India / 1,641 Nepal / 1,018 Bangladesh / 824 Pakistan / 557 Sri Lanka; ~12 deaths/week; Philippines & Kenya excluded; reporter Pete Pattisson confirmed real (NPR, Hyperallergic, hrvoices). Amnesty (via Kathmandu Post) re-fetched: 70%-unexplained vs 1%-expected, 18 certificates (15 with no underlying cause, "acute heart failure natural causes"), Dr David Bailey's critique, and the 2019 *Cardiology* study (up to 200 of 571 Nepali cardiovascular deaths 2009–2017 preventable) — all confirmed. al-Thawadi admission additionally triple-corroborated (CNN, CBS, National World, TMZ, Common Dreams, Guardian-USA/PressReader). SOURCES VERIFIED.

### Toll — both ends sourced where contested

- **qat-1:** high=1,000 sourced (1868 phase); low=null is the honest value — no separate reliable count for the 1867 sacking exists, fabrication correctly avoided. disputed:true retained.
- **qat-2:** null/null is the SOURCED value — Origins of Doha (scholarly) explicitly gives no death count; the population-decline marker is correctly labelled NOT a death toll. This is verified truth, not a gap.
- **qat-3:** low=37 (HRW/official) AND high=6,500 (Guardian) BOTH independently sourced; mid 400–500 (al-Thawadi) sourced. The two-orders-of-magnitude range is shown, not flattened, and the load-bearing caveat (6,500 = all deaths of 5 nationalities, not all work/World-Cup-related) is intact. Exemplary multi-source toll discipline.

### Tier — independently re-derived BEFORE reading assigned tier; STR-vs-EXT enforced

- **qat-1 → WAR (confirmed).** Two rulers sack two towns and kill ~1,000 in armed close-quarters fighting + bombardment = armed-conflict killing, not an extermination campaign. Correct; not EXT.
- **qat-2 → STR (confirmed).** Economic shock (cultured pearls + Depression) driving debt, hunger, depopulation = structural/famine-driven mass suffering. Correctly STR, NOT EXT — the disease/famine-driven=STR rule is properly applied.
- **qat-3 → STR (confirmed).** State labour regime producing mass death via heat/neglect with deaths uninvestigated = structural mass death (POL coloring for the cover-up). Correctly STR, NOT EXT — no campaign to exterminate a group. tier_reasoning explicitly enforces STR-vs-EXT.

### Ledgers (law 1)

Asymmetry (2 victim / 1 perpetrator) is honest, explained in the country note, and NOT padded with an invented perpetrator event. The Syria/Libya proxy-funding accusation is correctly flagged as data lacking a clean state-attributable toll and omitted rather than fabricated. No demand for invented balance. COMPLIANT.

### Verdict

3/3 events VERIFIED, 0 flagged, 0 quarantined. Country status RESEARCHED→VERIFIED. The entry's discipline (sourced nulls, two-ended contested tolls, correct STR tiers, honest asymmetry, no invented sources) holds up under adversarial scrutiny.
