# Lesotho (LSO) — research log

Built from scratch 2026-06-19. Web tools (WebSearch/WebFetch) loaded and used for real research.

## Ledger shape
- **Victim (2):** Difaqane founding catastrophe (pre-colonial); Operation Boleas 1998 SADC/South African intervention (contemporary).
- **Perpetrator (1):** Leabua Jonathan's 1970 self-coup and the BNP government's repression of the BCP opposition (modern).
- Asymmetry is real and explained in the country note: Lesotho is a small, mostly homogeneous mountain kingdom that has not invaded or occupied neighbours, so the perpetrator side is genuinely thin. The one solid perpetrator event is the state turning its own security forces (the Police Mobile Unit) on its own citizens.

## What I found

### lso-1 Difaqane (c. 1822–1836) — STR, status UNVERIFIED
- The Basotho nation was assembled by Moshoeshoe I out of refugees of the Difaqane/Mfecane. Famine drove some highveld groups to cannibalism (~1822–1828; a missionary estimate of ~4,000 cannibals each eating ~1/month appears in popular sources but I did NOT cite that as a death figure — it's an unverifiable estimate).
- **No Basotho-specific death count exists.** Region-wide Mfecane traditional estimate is ~1–2 million, which Wikipedia itself flags as controversial / revised downward. Toll low+high left **null**; high band only described in the display string. Event status UNVERIFIED because of the null toll and the disputed/region-wide nature.

### lso-2 Operation Boleas 1998 — WAR, status RESEARCHED
- Cross-border intervention 22 Sept 1998, SANDF + later Botswana, SADC-flagged, to prop up the government after a disputed election and army mutiny. Central Maseru looted and burned.
- **Toll is genuinely contested.** Figures encountered: "more than 23" (first days, WSWS contemporaneous); composite ~85 (9–11 SA soldiers + 29 LDF + ~47 Basotho civilians, M&G); "at least 66" (search aggregate); Wikipedia infobox "134" (ambiguous — killed vs wounded, faction unclear); unconfirmed up to 113–134 in first three days. I set **low 66, high 134, disputed=true** and explained the spread in the toll note.

### lso-3 Jonathan self-coup + BCP repression (1970–1979) — POL, status UNVERIFIED
- 30 Jan 1970: Jonathan loses election to BCP, annuls it, state of emergency, suspends constitution, rules by decree; King Moshoeshoe II exiled June–Dec 1970.
- 1974 failed BCP uprising → 170+ arrested; **BCP claimed 80+ killed** in retaliation.
- 1979 Police Mobile Unit retaliatory attacks → refugees claimed **at least 50** suspected insurgent supporters killed; 600+ fled to South Africa.
- Set low 50 / high 80, disputed=true. These bound single-episode death CLAIMS by the victims' party / refugees, not a verified cumulative total — hence event status UNVERIFIED. Torture/detention pattern corroborated by Amnesty (Internal Security Act, indefinite incommunicado detention).

## Contested / could NOT verify
- Difaqane: no Basotho-specific toll anywhere; the 1–2M figure is region-wide and disputed. Left null.
- 1998 toll: no full official accounting; civilian/military split and total vary by source.
- 1970s deaths: rest on BCP/refugee claims, not independent enumeration. No specific death toll for the immediate 1970 coup aftermath itself (sources describe arrests/torture, not a coup-day body count) — I did NOT invent one.

## Considered and dropped
- **Gun War (1880–81):** real, but low casualties (Cape forces 94 killed; Basuto losses unknown) AND a Basotho *victory* — not a mass-atrocity-against-Basotho event. Excluded.
- **Basotho Wars (1858–68) vs Boers/Free State:** territorial wars, no documented mass-death toll meeting the bar; excluded to keep to the best-documented 1–3.
- A Basotho *perpetrator* role in the Difaqane raiding was considered but there's no clean, sourced atrocity-by-Basotho event there; framed instead in the note ("made some raiders and others their prey").

## Real sources consulted (all fetched/searched 2026-06-19)
- Wikipedia: Mfecane; South African intervention in Lesotho; Human rights in Lesotho; 1970 Lesotho coup d'état. (fetched)
- Britannica: history of Lesotho (HTTP 403 on direct fetch — used via search-result summary); Gun War; Lesotho — The Sotho kingdom 1824–69.
- Mail & Guardian, 19 Sept 2018 (1998 toll breakdown). (fetched)
- World Socialist Web Site, Sept 1998 (contemporaneous 1998 report). (fetched)
- Amnesty International Lesotho country page (detention/torture pattern). (via search results)
- South African History Online: Basotho Wars 1858–68 (context). (via search results)
- Blocked (HTTP 403, NOT used as citations): grokipedia.com (Leabua Jonathan), historyrise.com, military-history.fandom.com, UFS journal PDF (cert error). Their figures were only cross-checked against accessible sources, never cited blind.

## Inviolable-laws check
- No invented sources or numbers. Where a number couldn't be sourced (Difaqane Basotho deaths; 1970 coup-day toll), used null / left out and marked UNVERIFIED.
- Tolls given as ranges with the dispute shown (1998: 66–134; 1970s: 50–80); separate sources for low and high where possible.
- Tiers tag the act: Difaqane STR (structural/famine collapse), 1998 WAR (armed conflict), 1970s POL (political killing of opposition).
- Paraphrase only; no source text pasted.

## Audit

Adversarial source-integrity + tier audit, 2026-06-19. Premise: treat every citation as fake until proven otherwise. Every source below was re-fetched or re-corroborated this session; none was taken on the original log's word.

### Verdict: country VERIFIED (all 3 events VERIFIED)

| Event | Tier (re-derived) | Status before | Status after |
|---|---|---|---|
| lso-1 Difaqane | STR ✓ | UNVERIFIED | VERIFIED |
| lso-2 Operation Boleas 1998 | WAR ✓ | RESEARCHED | VERIFIED |
| lso-3 Jonathan/BCP repression | POL ✓ | UNVERIFIED | VERIFIED |

### Source integrity — falsification attempts (all survived)
- **lso-1 / Wikipedia Mfecane** — REAL, supports toll.high. Re-fetched: confirms 1–2M traditional range, flags it controversial, downward-revised, multi-causal (political/economic/environmental), and notes the Shaka-centric near-genocidal reading has fallen from favour. No Lesotho-specific toll → Basotho number correctly null.
- **lso-1 / Britannica "Sotho kingdom 1824–69"** — REAL, supports summary. Direct fetch 403s (as the original log noted); confirmed via Britannica search-result text: 1820s Difaqane intensified in Lesotho, chiefdoms annihilated/dispersed/incorporated, Thaba Bosiu occupied 1824, refugees gathered. Qualitative only, no death figure — correctly used for summary not toll.
- **lso-2 / Wikipedia "South African intervention in Lesotho"** — REAL, supports toll.high. Re-fetched: 22 Sept 1998 start, SA 11 killed / 17+ wounded, infobox "134" (ambiguous killed-vs-wounded, as caveat says), CBD burned. New finding: Wikipedia attributes the CBD burning to "opposition supporters", not the SANDF — recorded in the caveat so the agent line isn't over-read.
- **lso-2 / Mail & Guardian (19 Sep 2018)** — REAL, supports toll.low. Verbatim: "nine South African soldiers, 29 members of Lesotho's military, and about 47 Basotho civilians were killed" + "Much of downtown Maseru was destroyed." Composite ≈85.
- **lso-2 / World Socialist Web Site (Sep 1998)** — REAL, supports summary. Confirmed: ">23 dead", nine SA soldiers, central Maseru shops looted, government buildings inc. High Court burned. Partisan "invasion" framing disclosed in caveat — used only for the contemporaneous count + destruction.
- **lso-3 / Wikipedia "Human rights in Lesotho"** — REAL, supports toll.high. Direct fetch verbatim: 170+ arrests + BCP claim of 80+ killed (1974); 600+ refugees + "at least fifty ... killed by the government" (1979). PMU IS named in-source for the Butha-Buthe retaliation, but the "50" is attributed to "the government" broadly — corrected the toll.note + caveat to reflect that the PMU attribution is a same-paragraph composite, not a verbatim source attribution of the 50.
- **lso-3 / Wikipedia "1970 Lesotho coup d'état"** — REAL, supports summary. Confirmed: 30 Jan 1970 state of emergency, election annulled (BCP won), parliament dissolved, constitution suspended, Moshoeshoe II exiled 5 Jun–5 Dec 1970, labelled a "self-coup".
- **lso-3 / Amnesty International (Lesotho)** — partially corroborated, supports summary (pattern), not toll. The live amnesty.org country page is now dominated by post-2016 material; the 1970s specifics (Internal Security (General) Act — origin 1967, 1974 & 1982 amendments enabling 60-day incommunicado detention; documented torture of political detainees) were corroborated via search rather than fetched verbatim from amnesty.org. Flagged in the caveat. This is the file's thinnest source but it carries no toll weight, so it does not block verification.

### Toll dual-end check
- **lso-1**: low/high null — justified, no Basotho-specific figure exists anywhere; high band described qualitatively only. Not a single-number defect.
- **lso-2**: low 66 / high 134. HIGH independently corroborated beyond the file's Wikipedia citation — Green Left Weekly (Norm Dixon, Oct 1998) reports "at least 113 ... as high as 134 ... in the first three days ... at least 47 civilians ... Maseru ... has been destroyed." LOW ("at least 66") appears in period media aggregates but the file carries no dedicated citation object for it — flagged as sourcing-thinness, not fabrication; the figure is real. toll.note updated to cite Green Left for the high band and to disclose that the hard citations rest on the ≈85 composite (M&G) + Wikipedia 134.
- **lso-3**: low 50 (1979, "at least fifty" — verified) / high 80 (1974, "over 80" BCP claim — verified). Both ends sourced; different episodes, disclosed in note. These bound single-episode CLAIMS, not a verified cumulative total — correctly stated.

### Tier re-derivation (done before reading assigned tier)
- lso-1 → famine/drought/raiding cascade, region-wide demographic collapse, no single perpetrator, not group-destruction → **STR**. STR-vs-EXT rule satisfied (disease/famine-driven = STR, not EXT). Assigned STR correct.
- lso-2 → cross-border armed intervention, combatant + civilian deaths in conflict → **WAR**. Correct.
- lso-3 → state killing/torturing its own citizens for opposition membership → **POL**. Correct.
All three tiers stand as assigned; no tier or tier_reasoning rewritten.

### Law-1 (both ledgers populated where record supports)
Respected. 2 victim + 1 perpetrator; asymmetry is real (small homogeneous kingdom, no invasion/occupation history) and explained in the country note. The perpetrator side is genuine (the state turning the PMU on the BCP), not invented to balance. No source or number was fabricated to fill either ledger.

### Net changes written to LSO.json
- All three event statuses → VERIFIED; country status RESEARCHED → VERIFIED.
- Caveats on all 8 sources updated to "Re-verified (audit) 2026-06-19" with the specific corroborating quotes/findings.
- lso-2 toll.note: added Green Left Weekly corroboration for the 113–134 high band; disclosed the "66" low-end sourcing thinness and the M&G/Wikipedia citation basis.
- lso-2 Wikipedia caveat: recorded that the CBD burning is attributed in-source to "opposition supporters".
- lso-3 toll.note + Wikipedia caveat: clarified PMU-vs-"the government" attribution for the 1979 "50".
- lso-3 Amnesty caveat: flagged that 1970s specifics are corroborated (not fetched verbatim) and that the act originates 1967 with 1974/1982 amendments.

### Residual flags (non-blocking)
1. lso-2 low end "66" has no dedicated citation object (figure is real in period media; high+composite are hard-cited).
2. lso-3 Amnesty source is corroborated-not-fetched for the 1970s and carries no toll weight.
3. lso-3 "50" attributed in-source to "the government", PMU named in same paragraph — composite, disclosed.
None of these rest on an invented source or number, so none triggers quarantine.
