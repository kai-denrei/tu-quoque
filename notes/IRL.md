# Ireland (IRL) — research log

Built from scratch on 2026-06-19. No prior seed file. Web tools (WebSearch/WebFetch) loaded and used throughout.

## Dual-ledger design

Ireland is a hard case for the perpetrator side, and the asymmetry is real, not laziness.
For most of its history Ireland was a conquered island with **no sovereign state of its
own** to commit atrocity "in its name." The independent Irish Republic (1922–) has fought
no war of aggression and held no colony. So the victim ledger is rich and well-documented;
the perpetrator ledger is genuinely thin. I refused to invent anything to balance it and
explained the asymmetry in the country `note`.

- **Victim (2):** Great Famine (1845–52); Cromwellian conquest (1649–53). Both are already
  held as PERPETRATOR rows under GBR — the same events read from Ireland's side. Cross-lens
  point made explicit in each `relevance`.
- **Perpetrator (2):** 1641 rebellion massacres of Protestant settlers (the largest organised
  mass killing by Irish hands, though pre-state and a rising against colonisation); Mother and
  Baby Homes (the clear atrocity of the *actual* sovereign Irish state and the Catholic Church
  it empowered).

## What I found / what is solid

- **Great Famine:** ~1M excess deaths is the consensus (Ó Gráda's "informed guess," no civil
  registration existed). Mokyr's reconstructions give ~1.1–1.5M; averted births push demographic
  loss toward ~1.4M. ~1M more emigrated. Population 8.4M (1844) → 6.6M (1851). Tiered **STR**
  (famine/disease, not extermination); British policy culpability kept as the contested point.
- **Cromwellian conquest:** Petty's contemporary ~618,000 / ~40% loss is the upper bound;
  modern historians revise to ~15–20% loss → I set the range low≈200,000, high=618,000 and
  flagged the dispute. Drogheda (~3,000 garrison + civilians), Wexford (~2,000 + ~1,500 town),
  ~50,000 transported. Tiered **STR** (mass death by induced famine/plague; sieges noted).
- **1641 rebellion:** Modern scholarship ≈ 4,000 killed directly, up to ~12,000 with
  exposure/expulsion deaths (~10% of settlers, ~30% in Ulster). Tiered **WAR** (deliberate
  sectarian massacre, not sustained extermination). Agent: Phelim O'Neill's rebels + peasantry;
  no Irish state existed (era_band pre-colonial relative to the later British conquest/plantation
  consolidation).
- **Mother and Baby Homes:** 2021 Commission of Investigation final report — ~9,000 child deaths
  across 18 institutions, 1922–1998 (≈15%, one in seven, ~double the national infant-mortality
  rate). Tuam: 978 dead, remains in a decommissioned sewage structure (Catherine Corless's work,
  confirmed by the Commission's 2019 interim report). Bessborough 1943: ~75% of admitted/born
  children died. Sean Ross/Roscrea: 1,090 of 6,079. Tiered **STR** (structural neglect/stigma
  mortality the state knew of and tolerated). received_lens = flagellated (Ireland has publicly
  reckoned with it — state apology by Taoiseach Micheál Martin, Jan 2021).

## Contested / caveats

- Famine and Cromwell tolls are **population-decline reconstructions**, not death counts — noted
  in each `toll.note`.
- 1641 toll was wildly inflated by contemporary Protestant propaganda (Milton: 154,000 in Ulster;
  pamphlets: 100,000–200,000). Those are rejected; the modern 4,000–12,000 range is in the file
  and the propaganda inflation is flagged as exactly the pretext Cromwell later used.
- Petty (Cromwell high bound) was an English official who profited from the post-conquest land
  survey — caveat marked.
- Mother and Baby Homes 9,000 is a settled Commission count (low=high=9,000), but the report
  itself has been criticised by survivors over tone/findings — caveat marked; figure cross-checked
  via two Irish Times reports.

## Could NOT verify directly

- **gov.ie executive-summary URL** (Commission final report): the canonical gov.ie page
  (`22c0e-executive-summary...`) returned HTTP 405 to WebFetch — gov.ie blocks automated fetch
  methods, not a dead page. It is the live publication URL surfaced in search, and the 9,000
  figure is independently corroborated by two Irish Times articles in the same event's sources.
- **Britannica Tuam page** returned 403 to WebFetch; relied on search-result content + Irish Times
  instead. (Not used as a cited URL.)

## Real sources consulted

- Cormac Ó Gráda, "Ireland's Great Famine," EH.net Encyclopedia — https://eh.net/encyclopedia/irelands-great-famine/
- UCC, Atlas of the Great Irish Famine 1845–1852 — https://www.ucc.ie/en/cacsss/research/researchimpact/atlasofthegreatirishfamine1845-1852/
- Great Famine (Ireland) — Wikipedia (for Mokyr range synthesis) — https://en.wikipedia.org/wiki/Great_Famine_(Ireland)
- Cromwellian conquest of Ireland — Wikipedia — https://en.wikipedia.org/wiki/Cromwellian_conquest_of_Ireland
- TCD, The Down Survey of Ireland — https://downsurvey.tchpc.tcd.ie/history.html
- Irish Rebellion of 1641 — Wikipedia — https://en.wikipedia.org/wiki/Irish_Rebellion_of_1641
- Portadown massacre — Wikipedia — https://en.wikipedia.org/wiki/Portadown_massacre
- RTÉ Brainstorm, "What happened during the Irish rebellion of 1641?" — https://www.rte.ie/brainstorm/2021/0209/1196035-irish-rebellion-1641/
- Commission of Investigation into Mother and Baby Homes, Final Report (Executive Summary), gov.ie — https://www.gov.ie/en/publication/22c0e-executive-summary-of-the-final-report-of-the-commission-of-investigation-into-mother-and-baby-homes/
- Irish Times, "9,000 children died amid high infant mortality rate" (12 Jan 2021) — https://www.irishtimes.com/news/social-affairs/mother-and-baby-homes-report-9-000-children-died-amid-high-infant-mortality-rate-1.4456382
- Irish Times, "978 children died at Tuam facility" (12 Jan 2021) — https://www.irishtimes.com/news/social-affairs/mother-and-baby-homes-commission-finds-that-978-children-died-at-tuam-facility-1.4456694

## Audit

Adversarial source-integrity + tier audit, 2026-06-19. Posture: every citation treated as fake until proven otherwise. Each source fetched/searched and tested against the specific claim attached to it. No sources invented; no figures fabricated to balance ledgers.

### Verdict
- Country status: **UNVERIFIED** (one event failed source verification).
- irl-1 Great Famine — **UNVERIFIED** (toll.high source defect).
- irl-2 Cromwellian conquest — **VERIFIED** (URL corrected).
- irl-3 1641 massacres — **VERIFIED** (caveat attribution corrected).
- irl-4 Mother and Baby Homes — **VERIFIED**.

### Source integrity — findings
- **irl-1 toll.high (Mokyr ~1.1–1.5M) — FAILED.** The book *Why Ireland Starved* (1983, Allen & Unwin) is real, but the URL cited for the figure (the Great Famine Wikipedia article) contains NO mention of Mokyr or the 1.1–1.5M range — the URL does not support its claim. Worse, Mokyr's OWN bounds are contested: RTÉ's famine-mortality history piece puts Mokyr nearer ~0.8–1.0M+ and attributes the 1–1.4M (with averted births) figure to historians broadly, not to Mokyr specifically. High bound is not cleanly sourced to the work named. Event quarantined: status UNVERIFIED, quarantine note added to toll.note and a withdrawal flag to the source caveat. The ~1M low end (Ó Gráda, EH.net — verified live, "one million, one-eighth of the population, an informed guess") stands.
- **irl-1 Ó Gráda EH.net — VERIFIED.** Page live, authored by Cormac Ó Gráda (UCD), states ~1M excess deaths = one-eighth of the population, "an informed guess."
- **irl-1 UCC Atlas — VERIFIED.** Page live; "~1 million perished 1845–52," "~1.25 million fled." Does not itself give the 8.4M→6.6M census decline (corroborated separately via Wikipedia census 8.17M→6.55M).
- **irl-2 Petty toll.high (~618,000 / ~40%) — VERIFIED.** Cromwellian-conquest Wikipedia article live; Petty ~618,000 / ~40% (over 400,000 Catholics; 167,000 killed directly, rest by war disease). Bias caveat independently confirmed and strengthened: Petty profited enormously from the post-conquest survey (270,000 acres in Co. Kerry, estates ~£6,000/yr, knighted 1661, and was charged with survey fraud). Upper-bound treatment justified.
- **irl-2 modern range / sieges / transportation — VERIFIED.** Wikipedia: modern ~20% loss; Wexford ~2,000 soldiers + ~1,500 townspeople; ~50,000 transported. Drogheda independently checked: garrison ~2,550, Cromwell reported ~3,500 total dead (~2,800 soldiers + civilians/priests killed) — file's "~3,000 garrison" is at the upper edge but consistent.
- **irl-2 Down Survey (TCD) — URL CORRECTED, VERIFIED.** Cited URL `downsurvey.tchpc.tcd.ie/history.html` now 301-redirects and the target `/history.html` 404s — the specific page is dead. The project root `downsurvey.ie` is live, confirmed TCD-run, and covers the Cromwellian conquest, land confiscation/redistribution, and Petty's 1656–58 survey. URL corrected to the working root; figures unchanged.
- **irl-3 1641 Wikipedia toll.high — VERIFIED, caveat corrected.** Article live; 4,000 killed directly, up to ~12,000 with exposure deaths, ~10% of settlers / ~30% in Ulster, >200,000 propaganda claim — all confirmed. CORRECTION: the article attributes the modern figures to Kenyon & Ohlmeyer (1998) and Marshall (2006), NOT to "Canny, Gillespie, Ó Siochrú" as the original caveat stated. Inaccurate attribution withdrawn.
- **irl-3 Portadown — VERIFIED, mapping noted.** Article live; ~100 killed at River Bann (drowned/shot), largest single 1641 massacre (eyewitness Clarke; range 68–196). Corroborates the character/largest-incident, but does NOT by itself establish toll.low=4,000 (that aggregate is from the 1641 Depositions scholarship + RTÉ's 4,000–12,000 range). Noted in caveat.
- **irl-3 RTÉ Brainstorm — VERIFIED.** Article live, by Eamon Darcy (Maynooth); gives 4,000–12,000 range and the 154,000 propaganda-myth figure, matching the file.
- **irl-4 gov.ie Commission report — VERIFIED (fetch-blocked, not dead).** URL returns HTTP 405 (method blocked), NOT 404; the publication is genuine and live. 9,000 deaths / one in seven / 1922–1998 / 18 institutions / ~57,000 throughput / double national infant mortality all independently corroborated by both Irish Times reports and the gov.ie department publication page. Not quarantined — content verified, only the scripted-GET method is blocked.
- **irl-4 Irish Times (9,000) — VERIFIED.** Live; 9,000 deaths, 15% of ~57,000, Bessborough 75.19% (1943), Sean Ross 1,090/6,079.
- **irl-4 Irish Times (Tuam 978) — VERIFIED.** Live; 978 deaths at Tuam, remains in decommissioned sewage tank, confirmed by the Commission's 2019 fifth interim report (corroborating Corless).

### Toll low/high two-source check
- irl-1: low VERIFIED (Ó Gráda ~1M); high FAILED (Mokyr source unsupported) → drives the UNVERIFIED.
- irl-2: low (modern ~20%→~200K, Wikipedia) + high (Petty ~618K) both sourced. OK.
- irl-3: low (4,000, 1641 Depositions scholarship via Wikipedia + RTÉ) + high (12,000, Wikipedia) both sourced. OK.
- irl-4: low=high=9,000 — legitimately a single settled Commission count, not a disputed range; not flagged as a single-source defect. OK.

### Tier re-derivation (done blind, before reading assigned tiers)
- irl-1 Great Famine → **STR** (blight + starvation + epidemic disease; structural-policy culpability, intent contested; disease-driven = STR, not EXT). Matches assigned. No change.
- irl-2 Cromwellian conquest → **STR** (death toll dominated by induced famine/plague from scorched earth; sieges lethal but the demographic collapse is structural). Matches assigned. No change.
- irl-3 1641 massacres → **WAR** (deliberate sectarian killing/expulsion of unarmed civilians; one-sided massacre but not sustained extermination → WAR, not EXT; violent act, not structural neglect → not STR). Matches assigned. No change.
- irl-4 Mother and Baby Homes → **STR** (mass infant death from disease/prematurity/neglect the state knew of and tolerated; structural institutional mortality, explicitly not EXT). Matches assigned. No change.
- All four tiers independently re-derived match the assigned tiers. No tier or tier_reasoning corrections required.

### Ledger balance (law 1)
Both ledgers populated as the record supports: victim (Famine, Cromwell) and perpetrator (1641, Mother and Baby Homes). The perpetrator-side thinness is the genuine historical asymmetry (no sovereign Irish state for most of history), honestly explained in the country note. No invented balance demanded or added.
