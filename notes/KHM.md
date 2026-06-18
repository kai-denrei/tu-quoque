# Cambodia (KHM) — research log

Date: 2026-06-18. Web tools (WebSearch/WebFetch) loaded and used; this was real research.

## Two ledgers
The seed already carried both sides, so Law 1 was satisfied without adding events:
- **Perpetrator** — `khm-1` The Khmer Rouge (1975–79).
- **Victim** — `khm-2` US bombing of Cambodia (1969–73).
Both upgraded from SEED to RESEARCHED with a sourced low and high for each toll.

## khm-1 — The Khmer Rouge (perpetrator, EXT)
- **Toll set to 1.2–2.8 million, median ~1.9 million.** Source for the modern bounded range:
  Patrick Heuveline, "The boundaries of genocide…", *Population Studies* (2015) — median 1.9M
  excess deaths, 95% interval 1.2–2.8M, of which ~1.1M violent killings. This is the best
  demographic reconstruction and supplies `toll.high` (and the bounded modern range).
- **Low end** anchored to Ben Kiernan's earlier extrapolated estimate of ~1.5M (The Pol Pot
  Regime, Yale UP). I could not pull a free full-text URL for the Kiernan book, so `url` is null
  but the citation is real and standard. Note: excess deaths over baseline, NOT a literal body
  count — flagged in the toll note.
- **Tier = EXT.** Justification: the regime was legally convicted of *genocide* by the ECCC in
  2019 (Nuon Chea, Khieu Samphan) specifically for the Cham Muslims and ethnic Vietnamese —
  deliberate destruction of groups "as such." The famine/overwork deaths on their own would be
  STR/POL, but they flowed from intent (forced collectivisation, emptying the cities), so they
  do not pull the headline tier down to STR. The disease/famine ≠ EXT rule was considered and
  the EXT call rests on the targeted-group destruction + intent, not on the famine.
- **Received lens = memorial.** Cambodia runs the state Tuol Sleng Genocide Museum (S-21) and
  the Choeung Ek killing fields as official memorials; ECCC study tours; widely commemorated.

## khm-2 — US bombing of Cambodia (victim, WAR)
- **Toll set to 50,000–150,000** (with a note that the outer literature runs 24,000 to several
  hundred thousand). Low/upper-end-of-Kiernan from Owen & Kiernan's work; the wide upper bound
  from The Conversation (2023). Tier WAR — interdiction bombing in the Vietnam War, civilian
  deaths a consequence of indiscriminate bombing, not group-destruction intent.
- **Tonnage caveat (important):** Owen & Kiernan's 2006 Walrus headline figure of 2,756,941 tons
  was *revised down by the authors themselves* to ~500,000 tons for 1969–73 (Asia-Pacific Journal,
  2015; Holly High et al. argue ≥472,313 tons). The atlas toll note states tonnage is not a death
  count to avoid the common conflation. The death figures are genuinely uncertain because the
  campaign was secret and records thin — `disputed: true`.
- **Received lens = contested.** Cambodian public memory of the bombing is not a single settled
  frame: it is acknowledged as a grievance and a destabilising cause, but politically entangled
  (the bombing-caused-the-Khmer-Rouge thesis is itself debated), so "contested" over "memorial".

## What is contested / could not be fully verified
- Exact death counts on BOTH events are inherently disputed; ranges are shown rather than a single
  number, per Law 3.
- The bombing→Khmer Rouge causation is real but debated among historians; the summary and
  relevance state it as argued, not settled.
- The Yale GSP PDF of "Bombs Over Cambodia" would not parse as text (binary). I used the
  Asia-Pacific Journal version and The Walrus reporting instead — same authors, same study.
- No source was invented. Two citations have `url: null` (Kiernan's book; the precise Walrus
  page) because I did not land a stable free full-text URL, but the works are real and standard.

## Real sources consulted
- Heuveline (2015), Population Studies — https://pmc.ncbi.nlm.nih.gov/articles/PMC4562795/
- Owen & Kiernan, "Making More Enemies than We Kill?", Asia-Pacific Journal (2015) — https://apjjf.org/ben-kiernan/4313
- The Conversation (2023), Kissinger bombing campaign — https://theconversation.com/henry-kissingers-bombing-campaign-likely-killed-hundreds-of-thousands-of-cambodians-and-set-path-for-the-ravages-of-the-khmer-rouge-209353
- Wikipedia, "Cambodian genocide" — https://en.wikipedia.org/wiki/Cambodian_genocide (tertiary; corroboration only)
- Wikipedia, "Operation Menu" / "Operation Freedom Deal" (tertiary; chronology only)
- Tuol Sleng Genocide Museum official site — https://tuolsleng.gov.kh/en/ (state memorial; lens)
- Ben Kiernan, The Pol Pot Regime (Yale UP) — standard scholarly toll source for the low end.

## Audit
Date: 2026-06-18. Adversarial source-integrity + tier audit. Web tools loaded; every citation treated as fake until proven. Result: country VERIFIED (both events VERIFIED). One factual error corrected (ECCC conviction year); no fabricated sources found.

### khm-1 — The Khmer Rouge (EXT)
- **Heuveline (2015), Population Studies — VERIFIED.** Fetched PMC4562795. Author Patrick Heuveline (UCLA CCPR), title exact. Median ~1.9M excess deaths, 95% interval 1.2–2.8M, violent median ~1.09M. Supports the displayed toll exactly. FLAG (corrected in caveat, not a failure): this source anchors BOTH ends of the range (low 1.2M + high 2.8M), so the toll is not single-sourced; the Kiernan low is corroborating.
- **Kiernan, The Pol Pot Regime (Yale UP 1996) — VERIFIED real.** Standard scholarly work; 2009 UN Demographic Expert Report to the ECCC called his estimates "methodologically sound." FLAG (corrected in cite/caveat): his detailed estimate is 1.671–1.871M, ABOVE the displayed low of 1.2M. The "~1.5M" in the original cite is the jacket-level shorthand, not his detailed figure — cite reworded to disclose this. url remains null (no stable free full text); citation is genuine, so not a quarantine.
- **Wikipedia 'Cambodian genocide' (tier) — VERIFIED, but date error CORRECTED.** Original said "2019 ECCC genocide convictions." Independently confirmed (UN News, CJA, Asser ICD): the Trial Chamber genocide verdict against Nuon Chea and Khieu Samphan was **16 Nov 2018**, upheld on **appeal Sept 2022**. There is no 2019 genocide conviction. Cite corrected to 2018/2022.
- **Tuol Sleng Genocide Museum (summary) — VERIFIED.** tuolsleng.gov.kh is the genuine official S-21 memorial site; caveat already discloses it is a state memorial, not a neutral toll source. Appropriate.
- **Tier re-derived independently = EXT (agree).** Adjudicated genocide of Cham Muslims and ethnic Vietnamese "as such" + mass political killing. STR-vs-EXT rule applied: famine/overwork deaths flowed from regime intent (forced collectivisation), not disease spread, so they do not pull the headline tier down to STR. EXT stands; reasoning sound.

### khm-2 — US bombing of Cambodia (WAR)
- **Owen & Kiernan, apjjf.org/ben-kiernan/4313 (toll.low) — VERIFIED.** URL 403s to automated WebFetch but the article is real (confirmed via search + Truthout/Cambridge Core/ResearchGate mirrors): Kiernan & Owen, "Making More Enemies than We Kill?", Asia-Pacific Journal vol. 13 (2015). Tonnage ~500,000 tons for 1969–73 confirmed; Holly High et al. ≥472,313 tons confirmed. FLAG (corrected in caveat, not a failure): the apjjf article is a bomb-TONNAGE study, not a death-count source. The 50,000–150,000 DEATH range is Kiernan's separate attribution ("closer to the upper limit") — independently verified — and it supports BOTH the displayed low (50k) and high (150k). Cite reworded to state the death attribution explicitly.
- **The Conversation (2023) (toll.high) — VERIFIED, author named.** Author is **Sophal Ear** (Arizona State / Thunderbird), himself a Khmer Rouge survivor — disclosed in the caveat (bias now stated). Range 24,000 to ~1 million, "most estimates" in the hundreds of thousands. Supports toll.high as an outer bound. Caveat appropriate.
- **Wikipedia 'Operation Menu'/'Freedom Deal' (summary) — accepted as tertiary chronology; figures cross-checked against Owen/Kiernan.** Appropriate.
- **Tier re-derived independently = WAR (agree).** Aerial interdiction in the Vietnam War; civilian deaths a byproduct of indiscriminate bombing, no group-destruction intent. WAR stands.

### Flags raised (summary)
1. CORRECTED — ECCC genocide conviction year was wrong (said 2019; actually Trial Chamber 2018, appeal upheld 2022).
2. NOTED/CORRECTED IN CITE — Heuveline anchors both ends of khm-1's range; the toll is not single-sourced (good), but the original tagging implied Kiernan was the sole low source.
3. NOTED/CORRECTED IN CITE — Kiernan's detailed Pol Pot toll (1.67–1.87M) is higher than the "~1.5M" shorthand originally cited.
4. NOTED/CORRECTED IN CITE — the apjjf source for khm-2 is a tonnage paper, not a death-toll paper; death range comes from Kiernan's separate attribution (verified). Tonnage ≠ death count, already flagged in toll.note.
5. NOTED — The Conversation author (Sophal Ear, KR survivor) now disclosed in caveat per bias-disclosure requirement.

### Verdict
No invented sources. No quarantines required. All four/three citations per event resolve to real works that support their attached claims. Both ledgers populated (Law 1 satisfied: perpetrator + victim). Both events have a sourced low AND high. Country status: VERIFIED.
