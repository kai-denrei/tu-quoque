# Laos (LAO) — research notes

Built from scratch, 2026-06-19. Web tools (WebSearch/WebFetch) available and used. Dual-ledger atlas entry: 1 victim event, 1 perpetrator event.

## Ledger summary

- **Victim — lao-1: US 'Secret War' bombing (1964–1973).** Tier WAR. Status RESEARCHED.
- **Perpetrator — lao-2: persecution of the Hmong after the 1975 communist takeover.** Tier POL. Status UNVERIFIED (toll cannot be pinned down).

## What I found (and how solid it is)

### US bombing — well documented on SCALE, fuzzy on body count
- Multiple independent sources agree: **>2 million tons of ordnance**, **~580,000 bombing sorties**, "a planeload every 8 minutes, 24h/day, for 9 years," ~**30% dud rate**, **20,000+ killed/maimed by UXO since** the bombing ended. These scale figures are firmly corroborated (Legacies of War, History.com, Win Without War, TheCollector).
- The **death toll of the bombing itself is NOT cleanly established.** The figure cited everywhere — **~200,000 dead, ~one-tenth of the population** — covers civilians AND military across the WHOLE war, not bombing alone (History.com; tourismlaos.org). Wikipedia's Laotian Civil War article gives a much narrower **combat-death band of ~20,000–62,000**, plus Lao govt 2017 UXO data (29,522 deaths + 21,048 injuries from explosive ordnance during/since the war).
- I set the toll range low=20,000 / high=200,000 and marked it disputed, with a note that the bombing-only civilian toll is genuinely unknowable and sits inside the range. Tier WAR (method-of-war mass killing of civilians), NOT EXT (no intent to destroy the Lao as a group).

### Hmong persecution after 1975 — real, but toll deeply contested
- **Hin Heup massacre, 29 May 1975**: Pathet Lao fired on a column of ~10,000 fleeing Hmong; **14 killed, 100+ wounded** (Wikipedia). This is the one concretely dated/quantified incident — used as the anchor in the summary.
- **Re-education / 'seminar' camps**: former-govt officials, Secret Army members and suspected Hmong collaborators held without charge, forced labour, starvation, some >10 years (Amnesty ASA 26/003/2007; Facts and Details).
- **Refugees**: 300,000+ Lao (mostly Hmong) fled to Thailand, ~130,000 resettled in the US (Facts and Details). Well attested.
- **Death toll**: this is the weak point. Figures cited:
  - Roger Warner (The Nation): **>10,000 killed in 1975 alone** — used as low end.
  - World Without Genocide: **"at least 100,000 Hmong civilians" killed** by the Pathet Lao during and after the war — used as high end (advocacy, no stated method).
  - SIR Journal: **~17,000 Secret Army + ~50,000 civilians** in "ethnic cleansing campaigns" (≈67,000).
  - These overlap/conflict and mix categories. No independent monitoring of a closed highland conflict → marked the event **UNVERIFIED**.

## What could NOT be verified
- **No single reliable death toll** for the anti-Hmong campaign. Range 10,000–100,000+ is partisan/singly-sourced at each end. Hence event status UNVERIFIED.
- **"Exterminated to the last root"** quote attributed to the new regime's official newspaper is cited widely (e.g. Perrin 2003 via SIR Journal) but I could NOT find the original newspaper, date, or independent verification. I therefore did NOT put this quote in the entry as fact.
- **"Yellow rain" / chemical weapons** allegations (post-1975, Soviet-supplied trichothecene mycotoxins, US accusation in 1981): DELIBERATELY EXCLUDED as a counted atrocity. Scholarly consensus is sceptical — no physical evidence withstood scrutiny; US State Dept (1992) found no evidence of CW use post-1983; Grant Evans and the bee-feces explanation undercut it (Nonproliferation Review / Tucker; Britannica; Science History Institute). Carried only as a contested caveat in the country note, not as an event or toll.
- **Bombing-only civilian death count** — not isolable from the war-wide ~200,000 figure.

## Real sources consulted
- Legacies of War — legaciesofwar.org (tonnage, sorties, UXO toll)
- History.com — "Why Laos Has Been Bombed More Than Any Other Country" (200k war-era dead, displacement, UXO)
- Wikipedia — "Laotian Civil War" (20,000–62,000 combat deaths; 2017 UXO data)
- Wikipedia — "Hin Heup massacre" (14 killed, 100+ wounded, 29 May 1975)
- Wikipedia — "Hmong people" (general persecution framing; no toll figures)
- Facts and Details — "Hmong Insurgency in Laos" (Roger Warner 10,000; refugee figures)
- World Without Genocide (Mitchell Hamline) — "Laos" (≥100,000 claim; re-education camps)
- SIR Journal — "The Hmong Crisis" (17,000+50,000; Perrin 2003 quote attribution)
- Amnesty International — ASA 26/003/2007 "Hiding in the jungle" (detention/persecution pattern)
- GlobalSecurity.org — "Laos Hmong Insurgency" (joint Lao-Vietnamese ops; later incidents)
- Nonproliferation Review (Tucker), Britannica, Science History Institute — "yellow rain" scepticism (used to EXCLUDE, not include)

## Caveats baked into the JSON
- Every advocacy/biased source carries a mandatory `caveat`.
- Both contested tolls show distinct low-end and high-end sources.
- Country status RESEARCHED; perpetrator event UNVERIFIED due to irreducible toll uncertainty, not source-integrity failure.
- Asymmetry (exhaustively documented bombing vs. murky anti-Hmong toll) is evidence-quality, not moral, and is explained in the country note.

## Audit

Adversarial source-integrity + tier audit, 2026-06-19. Premise: every citation fake until proven otherwise. Each source falsification-tested at its live URL via WebFetch/WebSearch; tiers re-derived from facts before reading the assigned values.

### Sources — verification results (7 of 7 real; all support their attached claims)

**lao-1 (US bombing — WAR):**
- **Legacies of War** (legaciesofwar.org) — REAL org (US nonprofit, founded 2004, Channapha Khamvongsa, fiscally sponsored by NEO Philanthropy). Homepage verbatim carries "over two million tons of ordnance … 580,000 bombing sorties — equal to a planeload of bombs every 8 minutes, 24 hours a day, for 9 years" and "over 270 million cluster munitions … 30% failed to detonate." **PARTIAL MISMATCH FOUND:** the cite also attributed "20,000+ killed/injured by UXO since the bombing ended" to this page — the homepage does NOT carry that cumulative figure (only "UXO continue to claim and injure lives" + one recent accident). FIX: cite trimmed to what the homepage supports; the 20,000+ figure (real, well-attested) is sourced to History.com, which does carry it. Caveat annotated.
- **History.com**, "Why Laos Has Been Bombed More Than Any Other Country" — VERIFIED verbatim at URL: "By 1975, one-tenth of the population of Laos, or 200,000 civilians and members of the military, were dead"; 750,000 refugees ("a full quarter"); 30% dud rate; "80 million bombs left behind"; "20,000 people have been killed or maimed" since. Supports toll.high. Confirmed.
- **Wikipedia, "Laotian Civil War"** — VERIFIED at URL: infobox "20,000–62,000 total dead"; article "According to the Laotian government in 2017, there were 29,522 deaths and 21,048 injuries from explosive ordnance during the war or as result of UXO." Supports toll.low. Confirmed.

**lao-2 (Hmong persecution — POL):**
- **Roger Warner via Facts and Details**, "Hmong Insurgency in Laos" — VERIFIED at URL: "over 10,000 Hmong were slaughtered by Laos' new communist regime" (1975); refugee figures (300,000+ to Thailand, ~130,000 to US, ~17,000 in jungle as of 2004) all present. Supports toll.low. Confirmed.
- **World Without Genocide** (Mitchell Hamline) — VERIFIED at URL: "At least 100,000 Hmong civilians have been killed by the Pathet Lao during the war and after"; re-education camps with forced labour and starvation. Supports toll.high. Confirmed. (Advocacy estimate, no method — caveat already in place.)
- **Wikipedia, "Hin Heup massacre"** — VERIFIED at URL: 29 May 1975, ~10,000-strong Hmong column, "14 civilians were killed and over 100 wounded." Supports summary. Confirmed.
- **Amnesty International, ASA 26/003/2007** "Hiding in the jungle — Hmong under threat" — REAL (published 23 March 2007; also on Refworld and the UW Hmong Studies collection). The cited PDF mirror URL returned **HTTP 403** to the fetcher (access control, not fabrication). FIX: URL switched to the canonical Amnesty document page (amnesty.org/en/documents/asa26/003/2007/en/), which is reachable. Supports tier. Confirmed.

### Toll low/high coverage
- lao-1: low (20,000, Laotian Civil War Wiki) and high (200,000, History.com) — distinct sources, both verified. Dual-sourced; no single-number flag.
- lao-2: low (10,000, Warner) and high (100,000, World Without Genocide) — distinct sources, both verified at source. BUT the two ends differ by an order of magnitude, mix incompatible categories (1975 reporter estimate vs. cumulative advocacy total), and come from a closed/unmonitored conflict → toll cannot be confirmed.

### Tier re-derivation (done before reading assigned tiers)
- **lao-1 → WAR (assigned WAR, CORRECT).** Mass civilian death as a method of war (trail interdiction, anti-Pathet-Lao bombing), no intent to destroy the Lao as a people. Not EXT. Not disease-driven, so the STR-vs-EXT rule does not apply.
- **lao-2 → POL (assigned POL, CORRECT).** Collective reprisal / political elimination of a wartime-allied faction (CIA Secret Army + Hmong); genocidal framing exists (advocacy) but the documented driver is political reprisal, not proven extermination intent, and the toll is unverified. POL holds; genocidal framing already acknowledged in tier_reasoning. Not disease-driven; STR n/a.
- No tier corrections required.

### Status decisions
- **lao-1 → VERIFIED.** All 3 sources real and on-claim, both toll ends independently sourced, tier correct. (One cite over-attribution corrected, not a source failure.)
- **lao-2 → UNVERIFIED (toll grounds, NOT source-integrity grounds).** All 4 sources real and support their claims; the event fails verification because the death toll is irreducibly uncertain (order-of-magnitude spread, partisan/single-reporter estimates, no independent monitoring). Quarantine note added to toll.note.
- **Country LAO → UNVERIFIED** (one event UNVERIFIED, so not all-VERIFIED).

### Corrections written to JSON
1. lao-1 Legacies of War cite trimmed (removed unsupported 20,000+ UXO attribution); caveat annotated.
2. lao-2 Amnesty URL switched from 403 PDF mirror to canonical document page; cite given full title + date; caveat annotated.
3. lao-1 toll.note: added dual-source verification line.
4. lao-2 toll.note: added audit quarantine line.
5. Statuses: lao-1 RESEARCHED→VERIFIED, country RESEARCHED→UNVERIFIED (lao-2 stays UNVERIFIED).

### Not changed (held the line — no invented sources or balance)
- No sources invented. The "exterminated to the last root" quote remains excluded (still unverifiable to an original). "Yellow rain" remains a caveat-only exclusion. No toll fabricated to balance the two ledgers.
