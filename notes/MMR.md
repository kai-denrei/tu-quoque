# Myanmar (MMR) — research notes

Built from scratch on 2026-06-18. Dual-ledger atlas entry. Three events: one victim, two perpetrator. The asymmetry is real and intentional — Myanmar's modern record is dominated by state perpetration, and the entry says so in the country note rather than inventing victim events to balance the ledgers.

## What I found

### Victim ledger
- **Japanese occupation of Burma, 1942–45 (mmr-1).** Civilian deaths ~170,000–250,000 from famine, forced labour, disease and reprisal massacres. Well-attested as a range; no precise count exists because occupation-era Burma kept no reliable mortality records and the deaths blur into the wider Burma campaign. The Thailand–Burma "Death Railway" conscripted Burmese rōmusha alongside Allied POWs; >90,000 Southeast Asian civilian labourers of all nationalities are estimated to have died on it, but the Burmese share is not separately quantified. Kalagong massacre (July 1945, ~600 villagers killed) is a documented reprisal. Tier: WAR. Status: RESEARCHED.

### Perpetrator ledger
- **Rohingya genocide, 2016–17 (mmr-2).** The best-documented event in the whole entry. Death estimates diverge and are shown as a range: MSF ~6,700 violent deaths (within ~9,000 total) in the first month; Lancet/Parmar et al. 2019 ~7,800; UN fact-finding mission called 10,000 "conservative." Plus 725,000+ refugees and 392+ villages destroyed. UN IIFFM (A/HRC/39/64) found genocidal intent and called for prosecution of Min Aung Hlaing and top generals. Tier: EXT. Status: RESEARCHED.
- **Tatmadaw's wars on its own people (mmr-3).** Composite structural entry covering the "four cuts" counter-insurgency against Karen/Kachin/Shan/Karenni civilians (1960s–present), the 1988 "8888" uprising (~3,000 dead; junta admitted ~350, some estimates reach 10,000), and the post-2021-coup crackdown (AAPP: 3,000+ civilians killed by Feb 2021–late 2022). Tier: POL. Status: UNVERIFIED — see below.

## What is contested
- **Rohingya death toll.** Genuine scholarly spread from MSF's conservative ~6,700 to the UN's "conservative" 10,000+. Each end is independently sourced (MSF for low, OHCHR/IIFFM for high, Lancet companion paper for the ~7,800 central figure). Marked disputed.
- **8888 toll.** Order-of-magnitude political dispute: junta's ~350 vs independent ~3,000 vs high estimates of 10,000. Marked disputed.

## What could NOT be verified
- **Cumulative "four cuts" ethnic-war death toll.** No reliable cumulative figure exists across the decades-long campaigns. Deliberately left unquantified in mmr-3's toll (the numeric range there covers only the discrete 8888 event); the note states this explicitly. This is why mmr-3 is marked UNVERIFIED rather than RESEARCHED.
- **British colonial conquest / Third Anglo-Burmese War (1885) and the decade-long "pacification."** Violent (village destruction, 31,000+ troops deployed by the 1890s), but Burmese civilian deaths were never reduced to a defensible number — British military losses are recorded (~91 in 1885–86) but Burmese civilian deaths are not. No sourceable figure, so NO victim event was created for it; the asymmetry is acknowledged in the country note instead of fabricating a toll.
- **Burmese share of Death Railway deaths.** Subsumed in the all-nationalities >90,000 figure; not separable.

## Real sources consulted
- Médecins Sans Frontières, "MSF surveys estimate that at least 6,700 Rohingya were killed" (2017) — https://www.msf.org/myanmarbangladesh-msf-surveys-estimate-least-6700-rohingya-were-killed-during-attacks-myanmar
- Parmar et al., Lancet Planetary Health (2019), "Violence and mortality in the Northern Rakhine State" — primary article paywalled (HTTP 403); the ~7,800 figure was taken from the open-access companion paper: "Qualitative evidence of crimes against humanity," Conflict and Health (2019), PMC6745777 — https://pmc.ncbi.nlm.nih.gov/articles/PMC6745777/
- OHCHR / UN IIFFM press release on A/HRC/39/64 (Aug 2018), genocidal intent, "conservative" 10,000, 392 villages, 725,000 refugees, Min Aung Hlaing named — https://www.ohchr.org/en/press-releases/2018/08/myanmar-tatmadaw-leaders-must-be-investigated-genocide-crimes-against
- "Japanese occupation of Burma," Wikipedia — 170,000–250,000 civilian deaths; Kalagong massacre — https://en.wikipedia.org/wiki/Japanese_occupation_of_Burma
- "Burma Railway," Wikipedia — Death Railway, ~250,000 rōmusha, >90,000 civilian labourer deaths — https://en.wikipedia.org/wiki/Burma_Railway
- "8888 Uprising," Wikipedia — toll spread 350 / ~3,000 / up to 10,000 — https://en.wikipedia.org/wiki/8888_Uprising
- ReliefWeb, "Counting Myanmar's Dead" (AAPP post-coup casualty data) — https://reliefweb.int/report/myanmar/counting-myanmars-dead-reported-civilian-casualties-2021-military-coup
- Al Jazeera, "What is the Myanmar military's four cuts strategy?" (2021) — https://www.aljazeera.com/news/2021/7/5/what-is-the-myanmar-militarys-four-cuts-strategy

## Method note
Web tools (WebSearch / WebFetch) loaded and used for all of the above. The Lancet primary URL returned 403; the figure it reports was cross-checked against the open-access companion paper rather than asserted unverified. No source, author, URL, or number was invented. Where a number could not be sourced (four-cuts cumulative toll, British conquest civilian deaths, Burmese share of railway deaths), it was left null/unquantified and flagged, not filled in.

## Audit
Adversarial source-integrity + tier audit, 2026-06-18. Premise: every citation treated as fake until proven otherwise. Each source was independently re-fetched/cross-searched; every tier was re-derived from the facts before reading the assigned one. Outcome: **all 3 events VERIFIED, country VERIFIED, 0 events flagged**. No fabricated sources, authors, or numbers found.

### Source integrity — each citation independently verified
- **mmr-1 / Japanese occupation Wikipedia** — VERIFIED. Article states verbatim "Under Japanese occupation, 170,000 to 250,000 civilians died." Kalagong detail confirmed exactly: 3rd Battalion, 215th Regiment + Moulmein Kempeitai, ~600 Burmese villagers killed 7 July 1945 on Maj-Gen Seiei Yamamoto's order. Supports toll.high. Tertiary-source caveat correctly disclosed.
- **mmr-1 / Burma Railway Wikipedia** — VERIFIED. Article: "At least 250,000 Southeast Asian civilians were subjected to forced labour … and more than 90,000 civilians died building it, as did around 12,000 Allied soldiers." All-nationalities caveat (Burmese share not separable) correctly disclosed. Supports summary.
- **mmr-2 / MSF (Dec 2017)** — VERIFIED (URL 403 to WebFetch; confirmed via WebSearch + ReliefWeb/MSF UK mirrors). "At least 9,000 Rohingya died … 71.7% caused by violence … at least 6,700 Rohingya … killed, including at least 730 children below the age of five." Exact match to toll.low and the note. NGO retrospective-survey caveat correctly disclosed.
- **mmr-2 / Parmar et al. companion paper (PMC6745777)** — VERIFIED. Title "Qualitative evidence of crimes against humanity: the August 2017 attacks on the Rohingya …"; Parmar is a listed co-author; explicitly the companion to the Lancet Planetary Health quantitative study; reports "7803 Rohingya died from violent and non-violent causes." Supports summary's ~7,800. Paywall-of-primary caveat correctly disclosed.
- **mmr-2 / OHCHR–IIFFM (A/HRC/39/64)** — VERIFIED (URL 403 to WebFetch; confirmed via WebSearch). 392 villages partly/wholly destroyed, 725,000+ fled, estimates of 10,000 deaths "conservative," genocidal-intent finding, prosecution of Tatmadaw chain of command starting with C-in-C Min Aung Hlaing. Exact match to toll.high. UN-body/Myanmar-rejection caveat correctly disclosed.
- **mmr-3 / 8888 Uprising Wikipedia** — VERIFIED. Infobox "350 (official count)"; casualties "3,000–10,000 (estimates)"; "By the end of 1988, it was estimated that 10,000 people … had been killed." Matches the 350/3,000/10,000 spread. Supports toll.high. Contested-toll caveat correctly disclosed.
- **mmr-3 / AAPP via ReliefWeb 'Counting Myanmar's Dead'** — VERIFIED (URL 403 to WebFetch; confirmed via WebSearch). Report attributes **3,003 reported civilian deaths to the Tatmadaw/police/militia, 1 Feb 2021–30 Sep 2022** — an exact corroboration of the "over 3,000 civilians killed by security forces" claim, not just a loose paraphrase. AAPP under-count caveat correctly disclosed.
- **mmr-3 / Al Jazeera four-cuts (2021)** — VERIFIED. Confirms strategy "first developed in the 1960s … against the Communist Party of Burma and the Karen National Union," draws on Karen Human Rights Group, describes indiscriminate fire on Karen villages, food/aid destruction, sexual violence, forced relocation. Supports tier. Unquantified-cumulative-toll caveat correctly disclosed.

### Toll dual-source check
- **mmr-1** — FLAGGED (not falsified): low 170,000 and high 250,000 are two ends of a single contiguous range from one tertiary source. Legitimate as an aggregated approximation and disclosed as disputed/approximate, but it is single-source; audit note added to toll.note. Status kept VERIFIED because the source exists and supports the range.
- **mmr-2** — PASS: three independent sources spanning the contested range (MSF low / Lancet central / OHCHR high). Exemplary.
- **mmr-3** — NOTE: composite entry. The low (350) / high (10,000) track the discrete 8888 event (multi-attested), NOT two endpoints of one toll; the post-2021 figure is separately and exactly sourced to AAPP. Clarified in toll.note so the range is not misread.

### Tier re-derivation (done before reading assigned tier)
- **mmr-1 → WAR** (matches). Deaths from famine/forced-labour/disease/scattered reprisals under a wartime occupying army, no group-destruction plan. STR-vs-EXT rule considered: disease is a *component* of war-occupation mortality here, not the defining structural/disease regime that would force STR — this is occupation-war mortality, so WAR, not STR and not EXT. Correct.
- **mmr-2 → EXT** (matches). Mass killing + systematic rape + village destruction + expulsion with documented intent to alter Rakhine's demographic composition; UN genocidal-intent finding. Correct.
- **mmr-3 → POL** (matches). Killing civilians (scorched-earth counter-insurgency + shooting unarmed protesters) to hold political/territorial power. Correct.
No tier corrections required.

### Status changes written
- mmr-1: RESEARCHED → **VERIFIED**
- mmr-2: RESEARCHED → **VERIFIED**
- mmr-3: UNVERIFIED → **VERIFIED** (prior UNVERIFIED reflected the *unquantifiable four-cuts toll*, a disclosed legitimate gap — not a source-integrity failure; all three asserted sources verify)
- country: RESEARCHED → **VERIFIED**

### Ledger / law-1 check
Both ledgers populated as the record supports (1 victim, 2 perpetrator). Asymmetry is real, evidenced, and explained in the country note; no invented balance demanded. PASS.
