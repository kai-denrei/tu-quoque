# United Arab Emirates (ARE) — research log

Built from scratch on 2026-06-19. Web tools (WebSearch/WebFetch) loaded and used throughout.

## Final shape

- **Victim ("Done to them"): 1 event**
  - `are-1` British Persian Gulf campaign / sacking of Ras al-Khaimah (1819–1820) — WAR.
- **Perpetrator ("In their name"): 2 events**
  - `are-2` UAE co-leadership of the coalition air war & blockade in Yemen (2015–2022) — WAR.
  - `are-3` UAE-run secret prison network and torture in southern Yemen (2016–2019) — POL.

All three events: status RESEARCHED. Country status: RESEARCHED. The ledgers are intentionally asymmetric (1 victim, 2 perpetrator) and the asymmetry is explained in the country note.

## Key editorial decisions

- **Young state, old wound.** The UAE federation dates only to 1971, so the strongest mass-violence done TO the territory's people predates the state. The British 1819 campaign that sacked Qawasim Ras al-Khaimah (ancestors of today's Sharjah/RAK ruling houses) and imposed the 1820 General Maritime Treaty — the origin of the "Trucial States" — is the natural victim anchor.
- **Slave trade deliberately NOT placed in the victim ledger.** The 19th-century Gulf slave trade ran through this coast and the Qawasim were prominent slave traders/buyers. In that trade the Emiratis' ancestors were perpetrators and the enslaved East Africans the victims — so it would be a misfile in ARE's victim ledger. Flagged in the country note for honesty rather than silently dropped. Did not build it into a perpetrator event either: it predates the federation and is diffusely attributable across Gulf/Omani elites, with no clean state-attributable toll.
- **Yemen air war attributed as SHARED/coalition-wide, not faked as UAE-only.** The coalition was Saudi-LED with the UAE as co-leader; the UAE specifically led the 2018 Hodeidah offensive and southern ground/naval ops. No clean UAE-only civilian death count exists, so I refused to fabricate one — the toll is carried as coalition-wide with explicit shared-responsibility caveats.
- **Secret-prison deaths-in-custody figure left as null toll.** The ~49-deaths/5-gravesites claim comes from a single report sourced to coalition-internal Yemeni military figures (relayed by Al Jazeera) and is not independently corroborated. Described in prose as an allegation; numeric toll left null. The prison-COUNT (18 per AP, up to 27 later) and the documented torture/sexual-abuse pattern are better attested.

## Tolls and what is contested

- **1819 Ras al-Khaimah: contested / reported, not census-verified.** Carried 400 (low) – 1,000 (high) Qawasim killed. The range traces to British colonial sources (J.G. Lorimer, *Gazetteer of the Persian Gulf*, 1915; *United Service Magazine*), described as reported rather than verified; local Qawasim records are sparse. British losses minimal (~5 killed/wounded at RAK). The "piracy" pretext for the campaign is explicitly disputed by historians (noted even on the UAE-state-aligned The National).
- **Yemen air war: contested, shared responsibility.** Low ~8,983 civilians killed DIRECTLY by coalition airstrikes; high ~19,200 killed OR maimed by airstrikes (so the high mixes deaths + wounded — flagged in the note). Both from the Yemen Data Project as relayed by CAAT. Separately the UNDP 2021 modelled projection put TOTAL war deaths at ~377,000 by end-2021 (~40% direct, ~60% indirect from hunger/disease) — carried as context, not as a verified body count or a UAE-only figure.
- **Secret prisons: scale not reliably quantified.** 18 sites (AP, June 2018) to 27 (later reporting). Hundreds detained/disappeared. ~49 deaths in custody = single contested coalition-sourced claim. Death toll left null.

## Source-bias flags applied

- **Al Jazeera (Qatar state-funded)** carried the secret-prison reporting during the 2017–2021 Qatar–UAE blockade/rift — a direct conflict of interest. Caveated on every Al Jazeera citation; the underlying AP investigation is the load-bearing source.
- **The National (Abu Dhabi-owned, UAE state-aligned)** used only for the local memorial framing of the 1819 sacking and the piracy historiography, not for casualties.
- **CAAT** is an anti-arms-trade campaign group; its figures rest on the independent Yemen Data Project, but framing is advocacy.
- **Amnesty / HRW** are advocacy/monitoring NGOs; HRW explicitly could not always disaggregate Saudi vs. UAE strikes.

## Could NOT verify / left out

- A UAE-specific (as opposed to coalition-wide) civilian death count for the air war — does not exist in the sources; deliberately not invented.
- A verified deaths-in-custody figure for the prison network — left null.
- The Amnesty "Timeline: UAE's role in southern Yemen's secret prisons" page returned HTTP 403 on direct fetch; cited from its title + Amnesty's corroborating press release + the AP/HRW reporting it is consistent with, not from full-text extraction (caveated in the source entry).
- The Yemen Data Project's own summary stats page did not expose the headline numbers in fetchable text; the YDP figures are carried via CAAT's citation of them.

## Real sources consulted

- Wikipedia, "Persian Gulf campaign of 1819" — https://en.wikipedia.org/wiki/Persian_Gulf_campaign_of_1819 (fetched; dates, commander Keir Grant, casualty range, towns attacked; cites Lorimer 1915)
- Wikipedia, "History of Ras Al Khaimah" — https://en.wikipedia.org/wiki/History_of_Ras_Al_Khaimah (fetched; 1809 + 1819 attacks, 1820 treaty, disputed piracy framing)
- The National (Abu Dhabi), "RAK's sacking still reverberates" / "How the British exploited piracy to rule the Arabian Gulf" — https://www.thenationalnews.com/uae/rak-s-sacking-still-reverberates-1.560191
- CAAT, "The war on Yemen's civilians" / "Coalition air raids on civilian targets" — https://caat.org.uk/data/countries/saudi-arabia/the-war-on-yemens-civilians/ (Yemen Data Project figures: ~25,054 raids, ~8,983 civilians killed, >19,200 killed/maimed)
- ICTJ / UNDP, "Yemen War Deaths Will Reach 377,000 by End of the Year" — https://www.ictj.org/latest-news/yemen-war-deaths-will-reach-377000-end-year-un
- Human Rights Watch, "Yemen: Latest Round of Saudi-UAE-Led Attacks Targets Civilians" (Apr 2022) — https://www.hrw.org/news/2022/04/18/yemen-latest-round-saudi-uae-led-attacks-targets-civilians
- HRW World Report 2019, Yemen chapter — https://www.hrw.org/world-report/2019/country-chapters/yemen (fetched; ~90 unlawful coalition airstrikes; UAE informal detention facilities)
- Associated Press investigation via Al Jazeera, "Yemeni prisoners say UAE officers sexually torture them" (June 2018) — https://www.aljazeera.com/amp/news/2018/6/20/yemeni-prisoners-say-uae-officers-sexually-torture-them-ap
- Al Jazeera, "Report: Mass torture in network of UAE-run prisons in south Yemen" (Aug 2018) — https://www.aljazeera.com/news/2018/8/12/report-mass-torture-in-network-of-uae-run-prisons-in-south-yemen (fetched; 27 sites, alleged 49 deaths / 5 gravesites)
- Amnesty International, "Timeline: UAE's role in southern Yemen's secret prisons" (2018) — https://www.amnesty.org/en/latest/news/2018/07/timeline-uaes-role-in-southern-yemens-secret-prisons/ (HTTP 403 on direct fetch; cited via title + corroborating Amnesty press release)
- Oxford Research Encyclopedia / Matthew Hopper scholarship on African slaves in the Persian Gulf (background for the slave-trade omission note) — https://oxfordre.com/africanhistory (and Wikipedia "Suppression of the slave trade in the Persian Gulf")

## Audit

Adversarial source-integrity + tier audit, 2026-06-19 (auditor: Kai Denrei). Posture: every citation assumed FAKE until proven. Every source re-fetched or re-searched live. Result: country status RESEARCHED -> VERIFIED; all 3 events VERIFIED. No invented sources added.

### are-1 — British Persian Gulf campaign / sacking of Ras al-Khaimah (WAR, victim)
- **Wikipedia "Persian Gulf campaign of 1819"** — VERIFIED. Re-fetch confirms commander Maj.-Gen. William Keir Grant, dates 3 Nov–22 Dec 1819, towns attacked (RAK, Umm al-Quwain, Ajman, Sharjah, Abu Hail, Dubai, Lengeh; ships at Bahrain), Dhayah Fort losses (1 officer + 3 men killed, 16 wounded; 400 surrendered, 177 fighting men), and the disputed-'piracy' historiography (Sultan bin Mohammed Al Qasimi's causus-belli argument).
- **TOLL CORRECTION.** The source states "400 to 1000 casualties reportedly suffered by the Al Qasimi" — i.e. killed AND wounded, not deaths alone. JSON display said "killed". Corrected display to "casualties (reported; killed and wounded combined)" and documented in toll.note. The 400/1,000 low/high is effectively a single reported colonial-source range (traces to Lorimer's Gazetteer 1915), not independently sourced endpoints — `disputed:true` is appropriate.
- **Wikipedia "History of Ras Al Khaimah"** — VERIFIED. 1809 + 1819 attacks, 1820 General Peace Treaty, 151-year British supremacy to 1971, "piracy disputed by a number of writers and historians." Correct.
- **SOURCE-INTEGRITY CORRECTION (The National).** Cite credited author "Matthew MacLean" — unverifiable for this piece; actual byline is **Anna Zacharias**. Corrected. Second title ("How the British exploited piracy...") removed as unconfirmed at the URL. Also flagged: the article's primary commemorative focus is the **1809** sacking, with 1819 as later destruction — supports memorial/piracy framing, not a clean 1819-specific source. Article exists; URL valid; UAE-state-aligned caveat retained.
- TIER: independently re-derived as WAR (state punitive expedition, combat/bombardment killing, not extermination). Matches assigned. EXT correctly rejected.

### are-2 — UAE co-leadership of coalition air war + blockade in Yemen (WAR, perpetrator)
- **CAAT "The war on Yemen's civilians"** — toll.low VERIFIED. Re-fetch confirms 8,983 civilian deaths from direct coalition airstrike targeting (also 8,967 in the stats box; JSON uses 8,983, present in prose), ~25,054 air raids, markets/weddings targeting, UAE named in the coalition.
- **SOURCE-INTEGRITY FINDING (toll.high).** The ~19,200 killed-or-maimed figure is **NOT on the cited CAAT page** (confirmed absent on re-fetch). Independently verified via Yemen Data Project data as carried by the **Global Centre for the Responsibility to Protect** ("more than 19,200 civilians, including over 2,300 children, killed or maimed by coalition airstrikes alone"). Figure is real; cite/caveat corrected to attribute it correctly. High correctly flagged as mixing killed + maimed.
- **ICTJ/UNDP 377,000** — VERIFIED live. ICTJ page confirms the 377,000 end-2021 UNDP projection. The 40/60 direct-indirect split and ~70%-children-under-five detail are not on the ICTJ page itself but are confirmed by the underlying UNDP report and Nov-2021 coverage (Al Jazeera, France24, Middle East Eye); caveat updated. Correctly carried as a MODELLED projection / context, not a UAE-only body count.
- **HRW (Apr 2022)** — VERIFIED. Saudi-UAE-led strikes on civilian areas, "apparent violation of the laws of war," war-crimes framing, and the Saudi-vs-UAE disaggregation difficulty all confirmed.
- TIER: re-derived as WAR (conduct of hostilities — airstrikes on civilian targets). STR-vs-EXT check: the larger blockade/famine indirect toll is structural (STR) and is correctly handled as context in prose, with the event anchored on the air war = WAR. Matches assigned. Both toll endpoints sourced.

### are-3 — UAE-run secret prison network and torture in southern Yemen (POL, perpetrator)
- **AP via Al Jazeera (June 2018)** — VERIFIED. AP investigation (Maggie Michael byline correct), at least 18 hidden prisons, sexual torture/electrocution/beatings all confirmed verbatim. Qatar/Al-Jazeera conflict-of-interest caveat appropriate; underlying AP investigation is load-bearing.
- **Al Jazeera (Aug 2018)** — VERIFIED. 27 sites (Hadramout, Aden, Socotra, Mayyun Island, Eritrea base), >49 deaths in custody and 5 gravesites, sourced to "Yemeni military figures who worked with the Saudi-UAE coalition" — exactly as the JSON caveat states. Correctly carried as a single contested allegation in prose, NOT as a numeric toll.
- **Amnesty "Timeline" page** — URL confirmed live (was 403 at build time; honestly caveated). Amnesty's corroborating documentation (51 men, Mar 2016–May 2018, Aden/Lahj/Abyan/Hadramawt/Shabwa; enforced disappearance + torture amounting to war crimes; 19 still missing) fully supports the POL tier.
- **TOLL.** Deaths left null — correct. The 49-deaths allegation rests on a single coalition-internal source and is rightly quarantined to prose. No fabrication.
- TIER: re-derived as POL (enforced disappearance, arbitrary detention, systematic torture of perceived enemies outside legal process). Not STR (not disease-driven), not EXT. Matches assigned.

### Ledger / law-1 check
Asymmetric ledgers (1 victim, 2 perpetrator) are justified by the record (young federation, strongest victim-wound predates the 1971 state) and explained in the country note — this is documented asymmetry, not invented imbalance. No demand for fabricated balance.

### Verdict
3 events VERIFIED, 0 UNVERIFIED. Country VERIFIED. Corrections applied: 1 author attribution (are-1 The National), 1 toll display wording (are-1 casualties vs killed), 1 toll-high source attribution (are-2 19,200 -> GCR2P/YDP), 2 caveat verification updates (are-2 ICTJ, are-2 CAAT). No source was invented; one figure (19,200) whose cited page no longer carried it was re-anchored to the correct existing source rather than dropped or faked.
