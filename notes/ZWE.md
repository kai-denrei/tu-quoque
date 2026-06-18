# Zimbabwe (ZWE) — research log

Built from scratch on 2026-06-18. Four events: 2 victim, 2 perpetrator. Country status UNVERIFIED (one perpetrator event has an unresolvable toll; several tolls are contested).

## Ledger structure

### Done to them (victim)
- **zwe-1 — First Matabele War / conquest of the Ndebele kingdom (1893–94), WAR.** Cecil Rhodes's British South Africa Company crushed Lobengula's Mthwakazi with Maxim guns. ~4,400–4,500 Ndebele dead, concentrated at Shangani River (~1,500) and Bembesi (~2,500); ~100 BSAC dead. Kingdom dissolved; Lobengula died of smallpox Jan 1894.
- **zwe-2 — Rhodesian Bush War / cross-border massacres (1964–79), WAR.** White-minority Rhodesian state vs ZANLA/ZIPRA. ~20,000–30,000 dead, overwhelmingly Black civilians. Two flagship raids: Operation Eland (Nyadzonia, Aug 1976, ~1,000 killed) and Operation Dingo (Chimoio/Tembue, Nov 1977, over 1,000 killed). UN Security Council Resolution 411 condemned Nyadzonia; Amnesty International called it a war crime.

### In their name (perpetrator)
- **zwe-3 — Gukurahundi massacres in Matabeleland (1983–87), EXT.** Mugabe's ZANU-PF government and the North Korean-trained Fifth Brigade against the Ndebele and Nkomo's ZAPU base. Documented floor ~2,000 (CCJP), up to ~8,000 (CCJP speculation), IAGS 2005 ~20,000; some local figures to 40,000–80,000. Public executions, Bhalagwe camp, curfew-and-starvation. Classed as genocide by IAGS and Genocide Watch. Never prosecuted; discussion suppressed.
- **zwe-4 — Intervention and plunder in the Second Congo War (1998–2002), WAR.** Mugabe deployed the ZDF (peak ~12,000) to defend Laurent Kabila; UN Panel of Experts (S/2001/357) found systematic looting of Congolese diamonds/cobalt/coltan/gold via elite-controlled firms. Toll NULL — see below.

## What is contested
- **Gukurahundi toll** is the central dispute. CCJP/LRF "Breaking the Silence" documented ~2,000 and judged up to ~8,000; IAGS adopted ~20,000 (2005); higher local figures (40,000–80,000) are not as firmly sourced. Used low=2,000, high=20,000, disputed=true. State suppression means no real count exists; many bodies in mine shafts/mass graves; part of the toll is engineered starvation.
- **Nyadzonia & Chimoio composition** — refugees vs guerrillas. Rhodesia claimed guerrillas (~1,028 at Nyadzonia; 1,200–3,000 at Chimoio); ZANU/Amnesty say overwhelmingly unarmed refugees; historians (Moorcraft & McLaughlin) say camps held both. Flagged in the entry; combatant/civilian split unresolved.
- **First Matabele War toll** — battlefield estimates by the victors only; no Ndebele count. Range kept tight (4,400–4,500) per the commonly cited figure but flagged disputed.
- **Bush War total** — ranges from ~20,000 (conservative) to ~30,000 (mostly Black civilians) to a high outlier of 51,000. Used 20,000–30,000.

## What could NOT be verified
- **Zimbabwe's specific civilian-death toll in the DRC (zwe-4).** The Second Congo War's ~5.4M (mostly disease/hunger, war-wide) cannot be apportioned to Zimbabwe, and mainstream sources attribute to Zimbabwean forces combat + plunder rather than documented mass killings of civilians. Toll left NULL; event marked UNVERIFIED. Deliberately did NOT borrow the war-wide figure to fill the slot.
- Upper Gukurahundi figures (40,000–80,000) — real claims but not firmly enough sourced to set as the high; capped at IAGS 20,000.

## Real sources consulted
- Wikipedia, "First Matabele War" — https://en.wikipedia.org/wiki/First_Matabele_War
- South African History Online, "First Matabele War" — https://sahistory.org.za/article/first-matabele-war
- Wikipedia, "Rhodesian Bush War" — https://en.wikipedia.org/wiki/Rhodesian_Bush_War
- Wikipedia, "Operation Eland" (Nyadzonia) — https://en.wikipedia.org/wiki/Operation_Eland
- Wikipedia, "Operation Dingo" (Chimoio/Tembue) — https://en.wikipedia.org/wiki/Operation_Dingo
- Wikipedia, "Gukurahundi" — https://en.wikipedia.org/wiki/Gukurahundi (carries the CCJP/LRF "Breaking the Silence" figures and IAGS 2005 resolution)
- Genocide Watch, "Zimbabwe" report — https://www.genocidewatch.com/single-post/zimbabwe-genocide-watch-2023
- Wikipedia, "Second Congo War" — https://en.wikipedia.org/wiki/Second_Congo_War (carries UN Panel of Experts S/2001/357 findings)

## Notes on conventions
- Followed task instruction to use event status RESEARCHED/UNVERIFIED. The wider corpus uses VERIFIED/UNVERIFIED; index.json entry for ZWE set to UNVERIFIED (country wrapper status) consistent with corpus.
- Primary sources (CCJP report, UN Panel S/2001/357) cited via the Wikipedia pages that summarize them, with caveats noting the indirection — no direct copy of the underlying documents was fetched.
- Added ZWE to index.json (count 72 → 73).

## Audit

Adversarial source-integrity + tier audit, 2026-06-18 (assume-fake posture; every citation falsification-tested via live WebFetch/WebSearch).

**Verdict: country UNVERIFIED. 2 events VERIFIED (zwe-1, zwe-3), 2 UNVERIFIED (zwe-2, zwe-4). 1 toll quarantined (zwe-2 high).**

### zwe-1 — First Matabele War (WAR) → VERIFIED
- Every figure confirmed against the live Wikipedia 'First Matabele War' article: total 4,400–4,500 Ndebele killed; ~1,500 at Shangani River (25 Oct 1893); ~2,500 at Bembesi (1 Nov 1893); ~100 BSAC dead; Maxim guns "decisive impact" / "mow them down literally like grass"; Mthwakazi dissolved; Lobengula died of smallpox 22/23 Jan 1894. All exact.
- SAHO source (sahistory.org.za/article/first-matabele-war) confirmed to EXIST and to support the conquest/Rudd Concession/kingdom-collapse narrative it is attached to. No 404.
- Tier independently re-derived: colonial war of conquest aimed at subjugation, not extermination of the Ndebele as a people → WAR. Matches assigned. Toll is a single commonly-cited range but both ends sit within one attributed infobox figure; acceptable, flagged disputed already.

### zwe-2 — Rhodesian Bush War (WAR) → UNVERIFIED (toll.high quarantined)
- **TOLL INTEGRITY FAILURE on the high end.** The cited Wikipedia 'Rhodesian Bush War' article states ONLY "c. 20,000 people killed overall" and 1,361 security-force dead. It does NOT state ~30,000 and gives NO racial percentage. Falsification searches found ~30,000 only on a partisan hobbyist site (rhodesians.co) — no secondary/scholarly source. GlobalSecurity corroborates the ~20,000 floor but its breakdown (more than half of the dead were guerrillas killed in combat; ~3,500 black civilians by guerrilla action; ~3,500 crossfire; ~500 white civilians; ~1,120 security forces) CONTRADICTS the former "~97% Black civilian" claim.
- Actions: removed the unsourced "~97% of total losses" claim and softened "overwhelmingly Black civilians" to "disproportionate share" in note/summary/tier_reasoning; rewrote the toll display and added a QUARANTINE block to toll.note; corrected the Wikipedia source caveat to state it supports only the ~20,000 floor; added GlobalSecurity as a second, verified source for the low; set status UNVERIFIED.
- Raids fully verified and retained: Operation Eland/Nyadzonia (~1,000; Rhodesia "1,028 guerrillas" vs AI/ZANU "unarmed refugees"; UNSC Res 411 condemned unanimously; AI 1993 "gross human rights violation and a war crime") and Operation Dingo/Chimoio-Tembue (Rhodesia 1,200–3,000 ZANLA; most sources >1,000 incl. hundreds of civilians; mixed camp with hospital/schools). All confirmed against live pages.
- Tier independently re-derived: counter-insurgency armed conflict, killing of insurgents and the population among them → WAR. Correct; unaffected by the toll flag.

### zwe-3 — Gukurahundi (EXT) → VERIFIED
- All three sources confirmed live: Wikipedia carries CCJP/LRF 'Breaking the Silence' (≥2,000 documented, up to ~8,000), IAGS 2005 resolution ~20,000, local 20,000–40,000, Heidi Holland's 8,000-as-conservative; Fifth Brigade North Korean-trained and subordinated directly to Mugabe's office; 1983–1987; Ndebele/Nkomo targets; Bhalagwe; victims forced to dig own graves; bodies in mine shafts; Unity Accord 22 Dec 1987. Genocide Watch single-post URL (zimbabwe-genocide-watch-2023) confirmed to EXIST and to class it genocide, "over 20,000," Mugabe ordered, never prosecuted, discussion forbidden. NGO bias now explicitly disclosed in caveat.
- Both toll ends sourced (CCJP low, IAGS high). Tier re-derived BEFORE reading assigned: deliberate state campaign to destroy a defined ethnic group, with engineered curfew-and-starvation used as a METHOD of group destruction — this is NOT the "disease-driven = STR" disaster case; it is genocide → EXT. Matches assigned. STR-vs-EXT rule explicitly considered and resolved in favour of EXT.

### zwe-4 — Second Congo War intervention (WAR) → UNVERIFIED (honest null)
- Both sources verified live: Zimbabwean deployment peaking ~12,000 (Jan 2001) defending Kabila; war-wide ~5.4M (1998–2008, mostly disease/malnutrition/war crimes); 350,000+ violent deaths (1998–2001); UN Panel of Experts (Apr 2001) accused Zimbabwe, Rwanda, Uganda of systematic resource exploitation (diamonds/cobalt/coltan/gold). UN report S/2001/357 cited via Wikipedia with indirection disclosed.
- Toll correctly NULL — the Zimbabwe-attributable civilian death share is genuinely not separable from the war-wide figure. The record does NOT invent a number to fill the slot (law-compliant). Status correctly UNVERIFIED on the death metric; this is an honest non-verifiability, not a defect. Tier re-derived: combatant participation in another state's war + systematic plunder, no separable group-destruction → WAR. Correct.

### Ledger law (law 1) check
Country note populates both sides (victim: zwe-1, zwe-2; perpetrator: zwe-3, zwe-4) from the record, with zwe-4's toll honestly left null rather than balanced with an invented figure. No invented balance demanded; no invented sources added at any point.

### Sources added in audit (verified, real)
- GlobalSecurity.org, "Rhodesian Bush War / Second Chimurenga / Zimbabwe Liberation Struggle" — https://www.globalsecurity.org/military/world/war/zimbabwe.htm (corroborates ~20,000 floor; supplies casualty breakdown that disproves the ~97% claim).
