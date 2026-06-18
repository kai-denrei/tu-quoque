# NLD — Netherlands research notes

Built from scratch 2026-06-18. Web tools (WebSearch/WebFetch) loaded successfully; all four events researched against real sources. Status: RESEARCHED.

## Ledger summary

**Victim ("Done to them"):**
1. **The Holocaust in the Netherlands (1942–45)** — EXT. ~107,000 Jews deported (mostly via Westerbork), ~102,000 of them murdered; counting all victims ~104,000 of ~140,000 (≈74%), the highest proportion in occupied Western Europe. Of 34,313 to Sobibor, 18 survived; of >60,000 to Auschwitz, <900 survived.
2. **Dutch Hunger Winter (1944–45)** — STR. German food-transport embargo on the occupied west (reprisal for the railway strike) + harsh winter → famine. ~20,000 deaths (range ~18,000–22,000), ~4.5 million affected, rations under 400 cal/day at the end.

**Perpetrator ("In their name"):**
3. **Dutch transatlantic slave trade (c.1600–1863)** — STR. Over 550,000 Africans embarked on Dutch ships; ~475,000 survived the crossing → ~75,000+ Middle Passage deaths (~13–14% mortality). Third-largest national carrier after Portugal and Britain. Toll reported as transit deaths only; deaths in capture and plantation slavery far larger and uncounted in a single sourced total.
4. **Indonesian War of Independence atrocities (1945–49)** — WAR. Rawagede massacre (~431 men, 9 Dec 1947, under Maj. Wijnen); Westerling's South Sulawesi campaign (thousands killed, 1946–47). Total Indonesian war deaths ~100,000 (Dutch field records, lower limit) up to ~300,000.

## What is contested / caveated

- **Indonesia war toll (nld-4):** marked `disputed: true`. The ~100,000–300,000 range covers ALL Indonesian deaths in the war (combat + executions + hardship + Indonesian internal violence), NOT only Dutch-perpetrated killings. The 2017 KITLV/Leiden figure of ~100,000 from Dutch field records is explicitly a LOWER limit. I bounded the toll with this range but flagged in the note that it is not a pure Dutch-perpetrated-death count; the concrete anchors (Rawagede ~431, Westerling thousands) are the documented massacres.
- **Slave trade toll (nld-3):** the numeric anchor is the trade VOLUME (>550,000 embarked), not a death count. toll.low/high both set to ~75,000 (Middle Passage deaths) because that is the one defensible sourced death figure; the note states plainly that total deaths (capture, plantation slavery in Suriname/Caribbean) are far higher and not captured in a single sourced number. Deliberately did NOT invent a plantation-mortality total to inflate the toll.
- **Holocaust survivor count:** small spread in survivor estimates (De Jong ~5,200; Westerbork Memorial ~5,000; Flim ~5,500) → murdered ~102,000–104,000. Not materially disputed; `disputed: false`.
- **Hunger Winter:** ~20,000 is the standard figure; ~22,000 is the upper end (Wikipedia). Not seriously disputed; `disputed: false`.

## What could NOT be fully verified

- Plantation/enslavement death totals for Dutch colonies (Suriname, Curaçao) — no single authoritative sourced figure found in this pass; left as a caveat rather than a number.
- Precise count of Westerling's South Sulawesi victims — sources say "more than 4,000" / "thousands"; Dutch inquiry figures differ. Reported qualitatively as "thousands" rather than a hard number.
- Bersiap period (1945–46, where Dutch/Indo-European civilians were killed by Indonesian revolutionaries — a potential SECOND Dutch-as-victim event): NIOD gives 3,500–30,000 deaths. Noted here as a candidate but NOT added as a separate event to keep to 2 per ledger and because the strongest, best-documented victim events are the Holocaust and Hunger Winter. Could be added later if the atlas wants a third victim entry.

## Real sources consulted

- NIOD Institute for War, Holocaust and Genocide Studies — "Deported Jews (in numbers)": https://www.niod.nl/en/frequently-asked-questions/deported-jews-numbers
- NIOD — "Indonesian War of Independence (in numbers)": https://www.niod.nl/en/frequently-asked-questions/indonesian-war-independence-numbers
- Anne Frank House — "The Netherlands: the greatest number of Jewish victims in Western Europe": https://www.annefrank.org/en/anne-frank/go-in-depth/netherlands-greatest-number-jewish-victims-western-europe/
- Anne Frank House — "Hunger winter": https://www.annefrank.org/en/timeline/91/hunger-winter-hunger-and-cold-in-the-netherlands/
- USHMM Holocaust Encyclopedia — "Mass Deportation of Jews from the Netherlands Begins": https://encyclopedia.ushmm.org/content/en/timeline-event/holocaust/1942-1945/deportation-of-dutch-jews
- Wikipedia — "Dutch famine of 1944–1945": https://en.wikipedia.org/wiki/Dutch_famine_of_1944%E2%80%931945
- PubMed — "The Dutch famine of 1944-45: mortality and morbidity": https://pubmed.ncbi.nlm.nih.gov/11639327/
- African Studies Centre Leiden — "Dutch involvement in the transatlantic slave trade" (citing SlaveVoyages): https://www.ascleiden.nl/content/webdossiers/dutch-involvement-transatlantic-slave-trade
- Zeeuws Archief — "The Voyage – History" (Middle Passage mortality): https://www.zeeuwsarchief.nl/en/themepage/slave-voyage-aboard-the-unity/the-voyage-history/
- Wikipedia — "Dutch West India Company": https://en.wikipedia.org/wiki/Dutch_West_India_Company
- Wikipedia — "Rawagede massacre": https://en.wikipedia.org/wiki/Rawagede_massacre
- Wikipedia — "South Sulawesi campaign of 1946–1947": https://en.wikipedia.org/wiki/South_Sulawesi_campaign_of_1946%E2%80%931947
- Wikipedia — "Indonesian National Revolution": https://en.wikipedia.org/wiki/Indonesian_National_Revolution

## Audit

Adversarial source-integrity + tier audit, 2026-06-18. Posture: every citation assumed fake until proven otherwise. Each source was probed to falsify it (does the work/author exist; does it support the specific claim attached; both ends of contested tolls sourced; tier independently re-derived before reading the assigned one). Result: all four events VERIFIED after corrections; country status RESEARCHED → VERIFIED. No sources were invented; two events had real defects that were corrected to what sources actually support.

**nld-1 Holocaust in the Netherlands — VERIFIED, no change.**
- Anne Frank House: confirmed verbatim — "approximately 104,000 [of 140,000] did not survive German persecution (approx. 74%)", highest rate in Western Europe (Belgium ~38%, France ~25%). Supports toll.high.
- NIOD "Deported Jews (in numbers)": confirmed — ~107,000 deported; survivor estimates De Jong ~5,200 / Westerbork Memorial ~5,000 / Flim ~5,500 → ~102,000 murdered. Supports toll.low.
- USHMM: confirmed — "Between July 15, 1942 and September 3, 1944, transports carried more than 100,000 Jews" to Auschwitz-Birkenau, Sobibor, Theresienstadt, Bergen-Belsen; ~5,000 survived. Supports summary.
- Toll low AND high both independently sourced. Tier re-derived: deliberate organised program to destroy a group = extermination = EXT. Assigned tier correct.

**nld-2 Dutch Hunger Winter — VERIFIED after citation correction.**
- Wikipedia: confirmed — infobox 22,000 (high), main text ~20,000; affected now stated as 4.3M (was 4.5M in cite — both within range, not the toll anchor); German food-transport embargo on 27 Sept 1944 after the 17 Sept railway strike. Supports toll.high.
- Anne Frank House: confirmed — railway strike + six-week food block on North/South Holland; January ration "four hundred grams". Supports summary.
- Calorie claim ("below 750 then under 400 cal/day") independently confirmed: 1,400 cal Sept 1944 → 750/day by 26 Nov 1944 → ~370–400/day by April–May 1945. Accurate.
- **DEFECT FIXED:** the PubMed cite (PMID 11639327) was attributed to "G.C.M. Trienekens / L. Lumey et al." The linked record is authored by **L.H. Lumey & F.W. van Poppel** only (Soc Hist Med 7(2):229–46, 1994). Trienekens wrote a *separate* work on Dutch wartime food supply, not this paper. The work is real and supports the summary; author attribution corrected in the cite and a disclosing caveat added. This is a citation-accuracy error, not a fabricated source.
- Tier re-derived: famine from a deliberate blockade — death chiefly by starvation/cold/disease, structural mass death, NOT direct killing of a group → STR (not EXT). STR-vs-EXT rule enforced; assigned tier correct.

**nld-3 Dutch transatlantic slave trade — VERIFIED after caveat additions.**
- African Studies Centre Leiden (citing SlaveVoyages): confirmed verbatim — "over 550,000 ... on Dutch vessels", "only an estimated 475,000 reached the other shore alive", Dutch third after Portugal (~5.8M) and Britain (~3M). Supports toll.low. The ~75,000 transit-death anchor is the sourced arithmetic 550,000 − 475,000; defensible.
- Dutch West India Company (Wikipedia): confirmed live — WIC slave-trading role, Curaçao as Atlantic slave-trade hub, 1662 asiento for 24,000. The specific per-period volumes in the cite ('1624–1738 and 1658–1674') are not all stated verbatim; caveat added noting the source supports the qualitative claim, not those exact figures.
- Zeeuws Archief "The Voyage – History": the zeeuwsarchief.nl domain is behind a Cloudflare browser-check that blocks automated fetch, so page text could NOT be read directly. The archive, the Unity ('De Eenigheid', 1761–63) dossier and this exact URL were independently confirmed live via search; the archive's materials give ~13–19% Middle Passage mortality, bracketing the cited ~12.5–14%. Source is real; verification indirect due to the bot gate. Disclosing caveat added. Not flagged UNVERIFIED on a bot-gate basis alone since the source's existence and content were corroborated.
- Toll low=high=75,000 (single defensible transit-death figure) is the honest reporting choice already disclosed in the note; plantation/capture deaths deliberately NOT invented. Acceptable under law 1 (do not demand invented balance).
- Tier re-derived: organised commercial mass enslavement, death chiefly from lethal Middle Passage/captivity conditions = sustained structural atrocity → STR. Assigned tier correct.

**nld-4 Indonesian War of Independence atrocities — VERIFIED after TOLL correction.**
- NIOD "Indonesian War of Independence (in numbers)": confirmed verbatim — Dutch field commanders reported "almost one hundred thousand Indonesian casualties", explicitly the "lower limit"; Dutch military dead 2,479 KIA + 2,106 disease/accident = 4,585. Supports toll.low.
- Rawagede massacre (Wikipedia): confirmed verbatim — 9 Dec 1947, unit of ~100 conscripts under Major Alphons Wijnen, 431 executed; 14 Sept 2011 court ruled no statute of limitations, state fully liable, €20,000/widow. Supports summary.
- South Sulawesi campaign (Wikipedia): confirmed — Captain Raymond Westerling's campaign Dec 1946–Feb 1947; toll contested (Indonesian claims 15,000–40,000; Dutch historian Willem IJzereef ~3,000 total, ~1,500 Dutch-attributed). Caveat added recording the contested range.
- **DEFECT FIXED:** toll.high was 300,000, cited to "Indonesian National Revolution, Wikipedia (~100,000 to over 300,000)". The cited article actually states "97,421 (confirmed killed)" and "100,000–150,000 (highest estimate)" — it does NOT support 300,000. Cross-checks: New World Encyclopedia caps the combined high at ~200,000 (Vickers: 45,000–100,000 military + 25,000–100,000 civilian); the 300,000 figure appears only in loose web snippets, not in a citable reliable source. Per the "both ends must be sourced" rule, toll.high was corrected from 300,000 → **150,000** to match what the cited source states, rather than relying on an unsourced upper bound. Display and note updated; disclosing caveat added on the high source. Event remains disputed:true.
- Tier re-derived: summary executions of non-combatants/POWs and village massacres by armed forces during a colonial reconquest war = war crimes against civilians → WAR. Assigned tier correct.

**Net source-integrity verdict:** 0 fabricated sources found. 2 toll/citation defects corrected (nld-2 author misattribution; nld-4 unsupported 300,000 high lowered to the sourced 150,000). 1 source (Zeeuws Archief) unreadable by automated fetch but corroborated as real and on-point via independent search. All tier assignments survived independent re-derivation (EXT / STR / STR / WAR), with the STR-vs-EXT disease/famine-driven rule explicitly checked on nld-2 and nld-3. All four events set to VERIFIED; country set to VERIFIED.
