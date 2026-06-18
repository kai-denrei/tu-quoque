# Germany (DEU) — research log

Status: RESEARCHED. All four events fully sourced with low/high toll ranges. Web tools (WebSearch + WebFetch) were available and used; all sources below are real and were consulted in this session.

## What changed from the seed

- The seed had one perpetrator event (Holocaust) and one **conflated** victim event that mashed the Thirty Years' War and Allied bombing into a single row. I split that into two distinct events (deu-3, deu-4) so each gets its own tier, era_band, agent, and toll. This also strengthens the victim ledger.
- Added a second perpetrator event, the **Herero and Nama genocide** (deu-2), so the perpetrator ledger covers both the modern and colonial eras. Law 1 (two ledgers) satisfied with two events each side.
- Filled every §6 field: numeric low/high tolls, tier_reasoning, received_lens, era_band, upgraded sources with kind/supports/url/caveat, Carlin-register summaries, dual-lens relevance.

## Events and tiering

1. **Holocaust & Generalplan Ost (deu-1)** — EXT. Deliberate destruction of Jews (and Roma) as a people. Toll low 5.1M (Hilberg) / high 6M (USHMM, Yad Vashem); 11M+ with non-Jewish victims. received_lens: flagellated (German memory culture is built on confronting it).
2. **Herero and Nama genocide (deu-2)** — EXT. Von Trotha's explicit extermination order; desert encirclement; Shark Island camp. Toll ~50,000–90,000. NOT down-tiered to STR despite thirst/starvation/disease deaths, because those followed an extermination order — intent drives the tier. received_lens: contested (Germany acknowledged "genocide" in 2015, fuller acknowledgement + €1.1bn "gesture" in 2021, but refuses the word "reparation" and excluded Herero/Nama representatives).
3. **Thirty Years' War (deu-3)** — STR, not EXT. This was the critical call: ~4.5–8M dead, but the killing was overwhelmingly famine and epidemic disease spread by foraging armies, not a campaign to destroy a defined group. Disease-driven collapse = STR per project law. received_lens: memorial.
4. **Allied area bombing (deu-4)** — WAR. Deliberate civilian targeting as total-war strategy against an enemy state, not extermination of Germans as a people. received_lens: contested (memory is genuinely contested and the inflated Dresden toll became Holocaust-relativising propaganda).

## What is contested

- **Holocaust Jewish toll**: 5.1M (Hilberg) vs ~6M (USHMM/Yad Vashem). Other scholarly ranges: Gutman/Rozett 5.59–5.86M; Benz 5.29–6M. Dispute is about precision, not the fact. Marked disputed:true.
- **Herero/Nama toll**: Whitaker Report gives ~65,000 Herero + ~10,000 Nama; scholarly Herero range 40,000–80,000. Used 50,000–90,000 combined.
- **Thirty Years' War**: 4.5–8M is a population-collapse estimate, not a clean body count; some regions lost >50%, overall ~15–20%. Wide range reflects this.
- **Dresden bombing**: 2010 Historians' Commission set 22,700–25,000, down from Cold-War/Nazi-era inflated figures (up to hundreds of thousands). Far-right groups still push the inflated numbers — noted in toll.note and relevance.

## What could NOT be fully verified

- **Hilberg's exact 5.1M** and **Wilson/Parker page-level figures** were confirmed via reputable secondary reporting (USHMM, search aggregation, Wikipedia syntheses) rather than by opening the monographs directly; URLs left null where I only have the book citation, not a free full-text link. Citations are accurate to the published works.
- **Whitaker Report URL**: the figure (~65,000 / ~10,000) is well attested but I did not locate a stable canonical URL for E/CN.4/Sub.2/1985/6 in this session, so url is null and a caveat flags it.
- **Faber-Jonker (2023) Herero range**: accessed via Wikipedia's citation of the scholarly figure, not the primary monograph; caveat notes this.
- No source was invented. Where a number could not be tied to a real published source it was not used.

## Real sources consulted (this session)

- USHMM Holocaust Encyclopedia, "Documenting the Numbers of Victims of the Holocaust and Nazi Persecution": https://encyclopedia.ushmm.org/content/en/article/documenting-numbers-of-victims-of-the-holocaust-and-nazi-persecution
- Yad Vashem FAQ: https://www.yadvashem.org/holocaust/faqs.html
- Raul Hilberg, *The Destruction of the European Jews* (3rd ed., 2003) — ~5.1M figure
- Wikipedia, "Herero and Nama genocide" (citing Faber-Jonker 2023, Adhikari 2022): https://en.wikipedia.org/wiki/Herero_and_Nama_genocide
- UN Whitaker Report (1985), E/CN.4/Sub.2/1985/6 — Herero/Nama classification and toll
- NPR, "Germany Formally Acknowledges Colonial Genocide In Namibia, Will Pay Reparations" (28 May 2021): https://www.npr.org/2021/05/28/1001376494/germany-formally-acknowledges-colonial-genocide-in-namibia-will-pay-reparations
- Peter H. Wilson, *Europe's Tragedy: A History of the Thirty Years War* (2009) — 4.5–8M dead
- Geoffrey Parker (ed.), *The Thirty Years' War* (1997) — >50% regional decline
- Wikipedia, "Thirty Years' War": https://en.wikipedia.org/wiki/Thirty_Years%27_War
- The Local (Germany), "Official report: Dresden bombing killed 25,000" (17 Mar 2010): https://www.thelocal.de/20100317/25945
- Wikipedia, "Bombing of Dresden": https://en.wikipedia.org/wiki/Bombing_of_Dresden
- France 24, "On the 80th anniversary of the bombing of Dresden... hijacked by far right" (13 Feb 2025): https://www.france24.com/en/europe/20250213-on-the-80th-anniversary-of-the-bombing-of-dresden-tributes-to-victims-are-hijacked-by-far-right

## Audit

Adversarial source-integrity + tier audit, 2026-06-18 (auditor: Kai Denrei / kainode). Premise: every citation FAKE until proven otherwise. Every source was attacked with the goal of falsifying it (does the work/author exist? does it support the *specific* claim it is pinned to?). Each tier was re-derived independently from the facts before reading the assigned tier. Result: **country status VERIFIED — all four events VERIFIED.** No fabricated sources found; no invented sources added.

### Per-event verdicts

**deu-1 — Holocaust & Generalplan Ost — EXT — VERIFIED**
- USHMM "Documenting the Numbers of Victims" fetched and confirmed *verbatim*: "six million Jews" murdered; non-Jewish tallies match the toll.note exactly (Soviet POWs ~3.3M, ethnic Poles ~1.8M, Roma 250k–500k, disabled 250k–300k, Serbs >310k). toll.high and the non-Jewish-victims source both supported.
- Hilberg, *The Destruction of the European Jews*, 5.1M Jewish dead — confirmed a real figure from the real work, accurately attributed to toll.low. (Note: 5.1M appendix is from the revised/3rd-edition lineage; the "3rd ed., 2003" Yale paperback dating is fine.)
- Yad Vashem FAQ — confirmed (via search; direct fetch hit a TLS cert error) it affirms the 5–6M range and names Hilberg 5.1M, Gutman/Rozett 5.59–5.86M, Benz 5.29–6M. Supports summary.
- Tier re-derived EXT (deliberate annihilation of groups as such). Agrees. Both ledgers OK.

**deu-2 — Herero and Nama genocide — EXT — VERIFIED**
- Whitaker Report (E/CN.4/Sub.2/1985/6): 65,000 Herero (80%) + 10,000 Nama (50%) — confirmed real and accurately attributed. FLAG (fixed, non-blocking): JSON had url null; a canonical text mirror exists (preventgenocide.org/prevent/UNdocs/whitaker/) and was added.
- Faber-Jonker 2023 — confirmed a *real* chapter ("Rivers of Blood and Rivers of Money") in *The Cambridge World History of Genocide* (2023), pp. 634–656, giving 40,000–80,000 Herero (~80%) and 10,000 Nama (~50%). Accurately attributed; not a fabricated author. The Wikipedia url in the source is the access path, not the primary, which the caveat already states.
- NPR (28 May 2021) — confirmed real: 2021 acknowledgement, €1.1bn ex-gratia, Herero/Nama exclusion + reparations refusal. Supports summary.
- Tier re-derived EXT. Critical STR-vs-EXT call confirmed correct: many died of thirst/disease in the Omaheke and in camps, but they followed von Trotha's explicit Vernichtungsbefehl, so intent (not disease) drives the tier — correctly NOT down-tiered to STR.

**deu-3 — Thirty Years' War — STR — VERIFIED**
- Wilson, *Europe's Tragedy* (2009) — confirmed real (full title "The Thirty Years War: Europe's Tragedy", Harvard/Penguin); ~8M-toll attribution confirmed. The JSON's title word-order inversion is cosmetic; work and author unambiguous.
- Parker (ed.), *The Thirty Years' War* (Routledge, 1997) — confirmed real; ~50% decline in worst-hit territories (Mecklenburg/Pomerania/Württemberg) confirmed.
- FLAG (non-blocking, disclosed in audit_note + caveat + disputed:true): the numeric **low AND high** (4.5M / 8M) both trace to Wilson; Parker corroborates *scale* via the regional-decline figure rather than supplying a distinct numeric high body count. Source's `supports:"toll.high"` is loosely true for the display string but not a second independent number for the 8M high — caveat updated to say so. Not severe enough for UNVERIFIED: the range is an openly-flagged population-collapse estimate, disputed:true is set, and a second real scholar corroborates the magnitude.
- Tier re-derived STR (famine + epidemic from foraging armies, no campaign to destroy a defined group). Agrees — correct application of disease-driven-collapse = STR.

**deu-4 — Allied area bombing — WAR — VERIFIED**
- The Local (17 Mar 2010) fetched and confirmed: Dresden Historians' Commission up-to-25,000, vs far-right claims up to 500,000. Supports toll.low.
- Hamburg 34,000–40,000 — independently confirmed (police-record floor ~34k; some estimates ~46k). Wikipedia source is tertiary but the figure traces to police records as the caveat states.
- France 24 (13 Feb 2025) — confirmed real (direct fetch 403/anti-bot; verified via search): 80th-anniversary human chain, far-right hijacking, 25,000 figure. Supports summary.
- Tier re-derived WAR (deliberate civilian targeting as total-war strategy against an enemy state, not extermination of Germans as a people). Agrees.

### Flags raised (summary)
1. deu-2 Whitaker Report url was null despite a stable canonical mirror existing — FIXED (url added).
2. deu-3 numeric toll low+high both originate from Wilson; Parker corroborates scale, not a second independent number — disclosed in audit_note and source caveat (non-blocking; disputed:true already set).
3. deu-3 Wilson title cited with word-order inverted vs published title — cosmetic, no action beyond noting.
4. deu-1 Yad Vashem direct fetch failed on a TLS cert error (not a missing page); content verified via search instead — no action.
No source was found to be fabricated, mis-attributed to a non-existent author, or failing to support its pinned claim. No source invented during this audit.
