# Azerbaijan (AZE) — research log

Built from scratch 2026-06-19 via live WebSearch/WebFetch. No prior seed file.

## Outcome
- 5 events total: 3 victim, 2 perpetrator. Both ledgers populated and roughly balanced.
- Country status: RESEARCHED. All event statuses: RESEARCHED.

## Victim ledger ("Done to them")
1. **aze-1 — March Days (1918), POL.** Bolshevik Baku Soviet (Shahumyan) + Dashnak militia killed Azerbaijani/Muslim civilians in Baku and nearby districts, 30 Mar–2 Apr 1918. Toll **3,000–12,000** (scholarly). Azerbaijan's 1998 decree calls it "genocide" and cites far higher regional totals (up to ~50,000) — excluded as state commemorative claim, not consensus.
2. **aze-2 — Black January (1990), POL.** Soviet Army (Gorbachev/Yazov) stormed Baku 19–20 Jan 1990 to crush the Popular Front independence movement; **131–170** civilians killed (official Azerbaijani figure 147), 700–800 wounded. Least-disputed event here.
3. **aze-3 — Khojaly massacre (1992), POL.** Armenian (Karabakh) forces + Russian/CIS 366th regiment killed fleeing Azerbaijani civilians, 26 Feb 1992. Toll **200–613**: HRW floor "at least 200" (up to 500–1,000); Azerbaijani official 613. Azerbaijan calls it the "Khojaly genocide"; HRW/Memorial do not.

## Perpetrator ledger ("In their name")
1. **aze-4 — September Days (1918), POL.** JOINT atrocity: Ottoman Army of Islam (Nuri Pasha, under Enver) + local Azerbaijani forces massacred Baku's Armenians on taking the city, mid-Sept 1918, as avowed reprisal for the March Days. Toll **~8,988–30,000** (Armenian National Council commission 8,988 low; Armenian Genocide Museum ~30,000 high; scholarly mid 10,000–20,000). Included because Azerbaijani fighters were co-perpetrators; lead agent was the Ottoman force — flagged in country note and agent field.
2. **aze-5 — Expulsion of Nagorno-Karabakh Armenians (2023), POL.** Azerbaijani state under Aliyev: 9-month Lachin-corridor blockade + 1-day offensive (19 Sep 2023) drove out ~100,617 Armenians (~99% of population) within two weeks. **~288 deaths** linked to the exodus (~218 in the Berkadzor fuel-depot explosion, ~70 en route). Death low/high (70/288) sourced; the load-bearing harm is the displacement figure. Freedom House fact-finding mission + European Parliament + Luis Moreno Ocampo characterized it as ethnic cleansing (Ocampo argued genocide). Azerbaijan denies the characterization.

## What is contested / hard to verify
- **Every 1918 toll is politicized.** March Days and September Days are mirror events; Azerbaijani and Armenian national narratives each inflate the toll of their own victims and minimize/deny the other's. I used scholarly ranges and attributed maximalist endpoints to their partisan sources (Anadolu/AA for March Days high; Armenian Genocide Museum for September Days high).
- **Khojaly** count is genuinely uncertain — Armenian forces controlled the ground afterward, so HRW could not produce an exact figure. Armenian denialism (claiming Azerbaijanis caused their own casualties) is documented and rejected by HRW.
- **Khojaly HRW figure** was accessed via the Wikipedia citation, not the primary HRW report directly — noted as a caveat in the source object. The primary HRW report ("Bloodshed in the Caucasus") was not fetched directly this session.
- **September Days lead agent.** The Ottoman Army of Islam was the primary force; Azerbaijani units were co-perpetrators. Attributed honestly rather than pinned solely on Azerbaijan.

## Real sources consulted (this session)
- Wikipedia: "March Days", "September Days", "Black January", "Khojaly massacre", "Expulsion of Nagorno-Karabakh Armenians" — all fetched/searched directly.
- RFE/RL: Black January 30th-anniversary report.
- Anadolu Agency (AA): "March 31: 'Bloody massacre' day of Azerbaijanis" — flagged as Turkish-state partisan framing.
- Armenian Genocide Museum-Institute: Baku 1918 page — flagged as Armenian-state partisan (used for high end only).
- Freedom House: ethnic-cleansing fact-finding-mission report.
- Eurasianet: coverage of the Freedom House report.

## Notes for a future audit
- No invented sources or numbers. Every toll endpoint is tied to a named source; maximalist/partisan ends are flagged with caveats.
- Consider fetching the primary HRW Khojaly report and a peer-reviewed source (e.g., de Waal, *Black Garden*) to firm up aze-3 and aze-4 beyond Wikipedia-mediated figures.
- All five events tagged POL; none rises to EXT on the evidence used. The 2023 expulsion (aze-5) has scholars arguing for genocide — worth revisiting if the legal characterization consolidates.

## Audit

Adversarial source-integrity + tier audit, 2026-06-19 (Kai Denrei, AZE auditor). Premise: every citation treated as fake until proven otherwise. Every source was re-fetched/re-searched this session and checked against the specific claim it is attached to. **Result: all 5 events promoted RESEARCHED → VERIFIED; country promoted RESEARCHED → VERIFIED. No corrections to tier, tier_reasoning, or toll values were required. No invented sources found.**

### Source integrity — all 9 sources confirmed real and claim-supporting
- **aze-1 March Days:** Wikipedia "March Days" re-fetched — confirms 30 Mar–2 Apr 1918, Shahumyan's Baku Soviet Bolsheviks + ARF/Dashnak, scholarly range ~3,000 (Shahumyan "more than 3,000 both sides") to 12,000 ("several historians put the total at 12,000"), and Heydar Aliyev's 1998 "genocide" decree. The high end (12,000) rests on the same Wikipedia source as the low — not a single-number toll. Anadolu Agency article re-fetched — exists, title verified, confirms it pushes the maximalist ~50,000 / "Day of Genocide" framing exactly as the caveat warns; correctly attached to summary, not toll.
- **aze-2 Black January:** Wikipedia "Black January" re-fetched — confirms 26,000+ troops, 19–20 Jan 1990, official 147 killed / ~800 wounded / 5 missing, Gorbachev decree + Yazov command. The toll endpoints 131 (low) and 170 (high) initially looked unsupported (body text gives 133–137 + official 147 + unofficial 300), but a targeted search confirmed Wikipedia's **infobox** documents exactly "Deaths: 131–170, Injured: 700–800." Endpoints stand. RFE/RL 30th-anniversary article returned HTTP 403 to WebFetch (bot block, not absence) — existence confirmed via WebSearch (URL, title, and >200-killed framing all match).
- **aze-3 Khojaly:** Wikipedia "Khojaly massacre" re-fetched — confirms 26 Feb 1992, Karabakh Armenian forces + 366th CIS regiment, HRW "at least 200" (up to 500–1,000), Azerbaijani official 613 (106 women, 63 children), Azerbaijani parliament 485, Memorial investigation, "Xocalı soyqırımı"/genocide framing not adopted by HRW/Memorial. Both toll ends independently sourced (HRW floor 200 / official 613). HRW figure is still Wikipedia-mediated, not primary — noted in the existing source caveat; not a blocker for VERIFIED.
- **aze-4 September Days:** Wikipedia "September Days" re-fetched — confirms Sept 1918, Army of Islam under Enver/Nuri Pasha + local Azerbaijani allies, "said by some scholars to have been carried out in retaliation for the March Days," Armenian National Council commission 8,988 (5,248 residents + 1,500 refugees + 2,240 unidentified), scholarly ~10,000, up to ~30,000. Armenian Genocide Museum page re-fetched — exists, confirms commission figure 29,063 and ~30,000 headline. Both ends sourced; high-end correctly flagged as the Armenian-state maximalist bound.
- **aze-5 Expulsion 2023:** Wikipedia "Expulsion of Nagorno-Karabakh Armenians" re-fetched — confirms 100,617 displaced (99% of ~120,000), 24 Sep–3 Oct 2023, 288 deaths (218 Berkadzor fuel-depot explosion + 70 en route from exhaustion/malnutrition/lack of medicine, up to 40-hour journey), nine-month Lachin blockade (Dec 2022–Sep 2023). Freedom House re-fetched — confirms fact-finding mission (FH + 6 partners) finding "ethnic cleansing using forced displacement," aligned with the UN/Yugoslavia definition + war-crimes/crimes-against-humanity findings. Eurasianet 403'd to WebFetch but confirmed via WebSearch (URL + title exact match).

### Toll integrity
Every toll has a source for BOTH the low and the high end; no single-source single-number tolls were found. The only endpoint that required extra verification (Black January 131/170) was confirmed in the Wikipedia infobox via follow-up search.

### Tier — independently re-derived, then compared
Tiers were re-derived from the facts before reading the assigned values. No event is disease-driven, so the STR-vs-EXT guardrail is not triggered anywhere. All five resolve to **POL** independently: March Days (localized communal/political killing, not annihilation); Black January (lethal repression of a political movement); Khojaly (deliberate killing of a fleeing ethnic civilian population on conquest — POL over WAR); September Days (ethnically targeted reprisal massacre on conquest, localized — POL over EXT despite the high toll); 2023 expulsion (textbook ethnic cleansing / forced displacement, low death count — POL over EXT despite some scholars arguing genocide). All five match the assigned tiers; **no tier or tier_reasoning corrections made.**

### Ledger balance (law 1)
Both ledgers populated where the record supports it (3 victim, 2 perpetrator). No invented balance demanded; the September Days perpetrator entry is honestly flagged as a JOINT atrocity led by the Ottoman Army of Islam with Azerbaijani co-perpetrators.

### Residual caveats (do not block VERIFIED)
- Khojaly HRW figure remains Wikipedia-mediated; fetching the primary HRW "Bloodshed in the Caucasus" report would harden aze-3.
- Most toll endpoints rest on Wikipedia as the aggregating source (cross-checked against the cited commissions/HRW/official figures and, for partisan ends, attributed to Anadolu / Armenian Genocide Museum). A peer-reviewed anchor (e.g., de Waal, *Black Garden*) would further firm aze-3/aze-4.
- RFE/RL and Eurasianet could not be WebFetched (403 bot blocks) but were existence-verified via WebSearch — not quarantined.
