# Georgia (GEO) — research log

Built from scratch 2026-06-19 via live web research (WebSearch + WebFetch). Status: RESEARCHED. 5 events: 3 victim, 2 perpetrator.

## Victim ledger ("Done to them")

1. **Red Army invasion of Georgia (1921)** — WAR. Soviet Russia's Red Army conquered the independent Democratic Republic of Georgia, engineered by Stalin and Ordzhonikidze. Toll: directly reported deaths ~3,200 Georgian military killed/captured + 3,800-5,000 civilians + ~5,500 Soviet troops; Kurganov estimate ~20,000 total for 1921-22 (high end). Toll set 8,700-20,000, disputed.
2. **Suppression of the August Uprising (1924)** — POL. After a failed anti-Soviet revolt, the Cheka and Red Army executed thousands without trial and deported ~20,000. Executions: 7,000-10,000 (Lang/Pethybridge, low) to 12,578 (recent accounts + Black Book of Communism, high); ~3,000 combat deaths separately. Beria rose to prominence here.
3. **The Great Terror in Soviet Georgia (1937-1938)** — POL. NKVD under the Georgian Beria. Initial quota 5,000; >15,000 repressed in Georgian SSR by year-end; >3,600 tried under Stalin's signed lists, >3,100 death sentences. Toll set 3,100 (confirmed death sentences) to 15,000 (total repressed, mixes execution/deportation/prison), disputed.

## Perpetrator ledger ("In their name")

4. **Georgian forces' atrocities in the War in Abkhazia (1992-1993)** — POL. Georgian National Guard + Mkhedrioni paramilitary committed ethnically targeted looting, house-to-house killings, hostage-taking, and terror against Abkhaz civilians (Ochamchira district; Sukhumi after its capture). Documented by HRW (1995) and the UN Oct 1993 fact-finding mission. Toll: NULL — no source isolates a death count for Georgian-perpetrated killings alone. Context: whole war ~10,000-30,000 dead (~5,000 Georgians, ~4,000 Abkhaz), ~250,000 Georgians displaced; atrocities on all sides.
5. **Indiscriminate shelling of Tskhinvali (2008)** — WAR. Georgian army opened the Russo-Georgian war by shelling a populated city with Grad rockets and heavy artillery; hit the hospital, residential blocks, outlying villages. HRW found "disregard for the protection of civilians" but no deliberate targeting; the EU Tagliavini mission found the attack not necessary/proportionate. Toll: NULL — HRW explicitly could not produce a conclusive civilian-casualty count for the Georgian attack; overall war figures mix causes/parties.

## Contested / could not verify

- **1924 execution figure**: the 12,578 figure (Black Book of Communism) is contested as possibly high; the 7,000-10,000 band is the more conservative scholarly estimate. Both ends sourced.
- **1937-38 Georgia-specific totals**: rest on incomplete Soviet/post-Soviet rehabilitation records. The ETH/CSS scholarly PDF ("The Great Terror of 1937-1938 in Georgia") could NOT be parsed — WebFetch returned raw PDF binary. Figures instead taken from the Communist Crimes / Estonian Institute of Historical Memory Georgia profile.
- **Abkhazia 1992-93 and Tskhinvali 2008**: deliberately left NULL on the perpetrator side. No authoritative source attributes a standalone death count to Georgian forces' abuses; inventing one to fill the cell would violate the no-fabrication law. The asymmetry is explained in the country note and toll notes.
- **HRW Abkhazia report (refworld)**: direct WebFetch returned HTTP 403; findings confirmed via search excerpts + the War in Abkhazia Wikipedia article's citations of the same report.
- **Tagliavini Report**: quoted via press summary (WSWS) rather than the primary PDF; the same coverage stresses the mission found Russian provocations and refused to assign sole blame to Georgia.

## Sources consulted (real)

- Wikipedia: "Red Army invasion of Georgia" / Soviet-Georgian War — https://en.wikipedia.org/wiki/Red_Army_invasion_of_Georgia
- Wikipedia: "August Uprising" — https://en.wikipedia.org/wiki/August_Uprising
- Wikipedia: "War in Abkhazia (1992-1993)" — https://en.wikipedia.org/wiki/War_in_Abkhazia_(1992%E2%80%931993)
- RFE/RL: "Georgia Marks 1921 Red Army Occupation By Flying National Flags At Half-Staff" — https://www.rferl.org/a/georgia-marks-1921-red-army-occupation-flags-half-staff/30454540.html
- Eric Lee, "The August Uprising, 1924" (book, catalogue listing) — https://books.google.com/books/about/The_August_Uprising_1924.html?id=ThOQEQAAQBAJ
- Communist Crimes / Estonian Institute of Historical Memory: "Communism in Georgia" — https://communistcrimes.org/en/countries/georgia
- Al Jazeera (2024): "Georgians identify victims in Stalin's mass graves" — https://www.aljazeera.com/features/2024/1/28/georgias-mass-graves-the-forensic-experts-uncovering-victims-of-stalins-purge
- Human Rights Watch (1995): "Georgia/Abkhazia: Violations of the Laws of War and Russia's Role in the Conflict" — https://www.refworld.org/reference/countryrep/hrw/1995/en/22166 (403 on fetch; via excerpts)
- Human Rights Watch (2009): "Up In Flames" (South Ossetia) — https://www.hrw.org/report/2009/01/23/flames/humanitarian-law-violations-and-civilian-victims-conflict-over-south
- EU Tagliavini Report (2009), via WSWS summary — https://www.wsws.org/en/articles/2009/10/geor-o02.html
- ETH/CSS, "The Great Terror of 1937-1938 in Georgia" PDF — https://css.ethz.ch/content/dam/ethz/special-interest/gess/cis/center-for-securities-studies/pdfs/CAD-22-2-6.pdf (could NOT parse; binary)

## Audit

Adversarial source-integrity + tier audit, 2026-06-19 (Kai Denrei / kainode). Posture: assume every citation fake until proven. Result: country **VERIFIED** — all 5 events VERIFIED. Two citation defects found and corrected; no fabricated sources detected; no tier errors.

### Per-event source falsification

- **geo-1 (1921 invasion) — VERIFIED.** Wikipedia infobox re-fetched: 3,200 Georgian killed/captured, 3,800-5,000 civilians, 5,500 Soviet killed — exact match. I.A. Kurganov ~20,000 total for 1921-22 operations confirmed present and correctly attributed (supports toll.high). RFE/RL half-staff article confirmed real (Soviet Occupation Day, Feb 25). Minor: the Wikipedia article was retitled "Soviet invasion of Georgia"; the cited `Red_Army_invasion_of_Georgia` URL still resolves via redirect, so not broken — caveat annotated. Toll has sources for BOTH ends (low = summed reported deaths, high = Kurganov). Tier WAR re-derived independently: conquest/campaign deaths, not group-targeted = WAR. Correct.

- **geo-2 (1924 August Uprising) — VERIFIED (cite corrected).** Wikipedia re-fetched: ~3,000 combat, 7,000-10,000 executed (Lang/Pethybridge), 12,578 (Black Book of Communism, Harvard 1999), ~20,000 deported, Beria/Pugachev/Stalin/Ordzhonikidze all named — exact match. Both toll ends sourced. **Defect found:** the Eric Lee book subtitle was cited as "...and the Birth of the Resistance" — FALSE. Verified against the Google Books record (id ThOQEQAAQBAJ): the real subtitle is "...and the Birth of Democratic Socialism" (McFarland). Cite corrected; book is genuine and supports the summary. Tier POL re-derived: mass execution of a political/social class to decapitate the independence movement, not ethnic annihilation = POL not EXT. Correct.

- **geo-3 (Great Terror 1937-38) — VERIFIED.** Communist Crimes / Estonian Institute of Historical Memory page re-fetched: limit 5,000; >15,000 repressed in Georgian SSR; >3,600 tried under Stalin's lists; >3,100 death sentences; ~0.75% of population — exact match. Al Jazeera 2024 article confirmed (forensic anthropologist Meri Gonashvili / GAFA; Khelvachauri-Batumi military-base mass graves; ~15,000 figure). The death-vs-repression distinction (low = ~3,100 death sentences, high = ~15,000 total repressed incl. deportation/prison) is correctly disclosed in toll.note. Tier POL re-derived: lethal political repression by quota — NOT EXT (no ethnic annihilation), NOT STR (not disease-driven). Correct; STR-vs-EXT rule not triggered here.

- **geo-4 (Abkhazia 1992-93) — VERIFIED (URL corrected).** HRW 1995 report confirmed genuine and supportive: Ochamchira "daily intimidation, widespread looting and house-to-house murder," Sukhumi looting/murder of ethnic Abkhaz. **Defect found:** the cited Refworld mirror (refworld.org/.../22166) returns HTTP 403. Replaced with the stable canonical HRW host (hrw.org/reports/1995/Georgia2.htm; full PDF hrw.org/reports/pdfs/g/georgia/georgia953.pdf). Null toll is correct and law-compliant: no source isolates a Georgian-only death count; inventing one would breach the no-fabrication law. Tier POL re-derived: ethnically targeted house-to-house killing/terror of civilians beyond combat = POL (not WAR battlefield toll, not EXT extermination). Correct.

- **geo-5 (Tskhinvali 2008) — VERIFIED.** HRW "Up In Flames" (2009) re-fetched: Grad/artillery on the South Ossetian hospital and residential areas confirmed; HRW states it "did not have the capacity or expertise to ... determine a conclusive number of civilian casualties" and "found no evidence that Georgian forces sought to deliberately target civilians" but found "disregard for the protection of civilians." This directly underpins both the null toll and the WAR tier. Tagliavini/IIFFMCG findings independently confirmed against authoritative hosts (ReliefWeb, Carnegie, Council of Europe, Internet Archive): Georgian shelling began the war and was not legally justifiable, blame not assigned to Georgia alone. JSON cites a WSWS press summary — honestly caveated as a summary; findings accurate. Tier WAR re-derived: indiscriminate attack with no deliberate targeting = WAR distinction violation, not POL/EXT. Correct.

### Tier audit summary
All 5 tiers independently re-derived BEFORE reading the assigned value; all 5 matched. STR-vs-EXT rule checked on the disease-relevant candidate (none applied — no disease-driven event). No EXT mislabeling (geo-2/geo-3 correctly POL, not EXT).

### Toll audit summary
- Two-ended tolls (geo-1, geo-2, geo-3): each has a distinct source for low and high; all flagged disputed. No single-source two-number fabrication found.
- Null tolls (geo-4, geo-5): correct and required — no authoritative source provides a Georgian-perpetrator-only death count; nulls are honest, not lazy.

### Ledger / law-1 check
Both ledgers populated from the record (3 victim, 2 perpetrator). The asymmetry (victim history Soviet-era, perpetrator history post-Soviet) reflects the real record and is disclosed in the country note. No invented balance demanded or added.

### Corrections written to GEO.json
1. geo-2 Eric Lee cite: subtitle "...the Birth of the Resistance" -> "...the Birth of Democratic Socialism"; publisher McFarland added.
2. geo-4 HRW Abkhazia URL: dead 403 Refworld mirror -> canonical hrw.org URL.
3. geo-1 caveat: noted Wikipedia rename to "Soviet invasion of Georgia" (URL still redirects); figures re-verified.
4. All 5 event statuses RESEARCHED -> VERIFIED; country status RESEARCHED -> VERIFIED.

No fabricated sources detected at any point.
