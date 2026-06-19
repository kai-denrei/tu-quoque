# Togo (TGO) — research notes

Built from scratch 2026-06-19. Web tools (WebSearch + WebFetch) loaded and used; this is real research, not a seed. (Several target pages — ReliefWeb, VOA, Britannica, Amnesty PDFs, The New Humanitarian articles — return HTTP 403 to automated WebFetch; for those, load-bearing claims were confirmed via WebSearch result synthesis and cross-corroboration across multiple independent sources, noted per-source in the JSON caveats.)

## Shape of the entry

- **Victim ("Done to them") — 2 events.**
  - `tgo-1` German forced-labour rule in Togoland (1884–1914), STR — **UNVERIFIED** (no sourceable death toll).
  - `tgo-2` The Pya-Hodo massacre (1957, French colonial army), POL — RESEARCHED.
- **Perpetrator ("In their name") — 2 events.**
  - `tgo-3` The 1998 "Reign/Rule of Terror" election killings (Eyadema regime), POL — RESEARCHED.
  - `tgo-4` The 2005 post-election violence (Faure Gnassingbe / FAT, gendarmerie, police, RPT militias), POL — RESEARCHED.
- `modern`: null. Country status: RESEARCHED.

Both columns are real and roughly balanced in count. The eras differ sharply: victim = colonial (German + French), perpetrator = post-independence (the Gnassingbe state against its own citizens). Nothing was invented to balance the columns.

## What I found (key figures, all sourced)

- **German Togoland (tgo-1):** Forced-labour colony — poll tax (6s./head) to push men into wage labour, corvee gangs marched across the country to build the railways (Aneho, Kpalime, Blitta), Lome wharf (1904) and roads "under conditions which caused a high rate of mortality," enforced by flogging and punitive expeditions; conquest of the Konkomba (1896–1901) and Kabye (c.1900) with machine guns; 1911 Ewe uprising against labour conditions. **No death toll exists** — mortality was real and remarked on but never counted, so toll = null and the event is UNVERIFIED. The "model colony" label is treated sceptically by scholars (Dennis Laumann's historiography).

- **Pya-Hodo massacre (tgo-2):** 21 June 1957, French colonial army fired on protesters at the Hoda market in Pya (Kozah Prefecture, Kabye north) during a UN visiting mission led by Charles T. O. King; ~20 killed, several dozen wounded. Protest was against colonial rule and the arrest of nationalist Bouyo Moukpe. Toll undisputed at ~20 (low=high=20).

- **1998 "Rule of Terror" (tgo-3):** Amnesty International report AFR 57/01/99 (May 1999), from a late-1998 delegation: security forces (FAT + paramilitary police) extrajudicially executed **hundreds** around the June 1998 election (Eyadema declared winner on returns from just 35 of 617 polling stations). Bodies — some handcuffed, some in uniform — washed up on beaches in Togo AND Benin for days, reportedly dumped at sea from planes/helicopters. Government "vigorously disputed" it and threatened to sue Amnesty. Corroborated by US State Dept 1998 report. Toll set as a disputed ~100–500 range ("hundreds," uncountable because bodies were disposed of). Received lens = denied.

- **2005 post-election violence (tgo-4):** Eyadema died Feb 2005; army installed son Faure; election 24 April called rigged; security forces + RPT militias killed opposition supporters house-by-house. **Disputed toll:** Interior Ministry 69; diplomats "100+"; Togolese League of Human Rights (LTDH) 790 killed / 4,345 wounded (28 Mar–5 May); UN/OHCHR investigation (Sept 2005, Louise Arbour) 400–500 dead. UN blamed government security forces primarily, noted opposition abuses too. Toll set as range 400 (UN floor) – ~800 (LTDH). Received lens = contested.

## What is contested

- **2005 toll** is the most contested element: credible investigations diverge by ~2× (UN 400–500 vs LTDH ~790). Both retained as the bounds of the range, neither presented as settled. The UN noting opposition abuses (not just government) is why the lens is "contested" rather than flatly "denied."
- **1998 toll** is "hundreds" with no exact number — the regime deliberately disposed of bodies at sea, making a precise count impossible. Government denied the whole episode.
- **"Tens of thousands" aggregate:** Some sources loosely describe Eyadema-era total deaths/disappearances over ~38 years as "tens of thousands" (e.g. an africasacountry.com essay). This traces to non-rigorous sourcing and is NOT used as a toll; the perpetrator events are pinned to the two best-documented episodes (1998, 2005). Noted in the country note.

## What could NOT be verified

- **Any German-colonial death toll.** Forced-labour and conquest mortality was real and contemporaneously remarked on but never quantified. Left null + event UNVERIFIED rather than estimated. (This is the single deliberate gap in the file.)
- **Bè lagoon massacre (April 1991, ~28 bodies, attributed to the Togolese Armed Forces by the National Human Rights Commission).** Real and sourced (Wikipedia "1990–1991 Togo protests"), but below the headline threshold of the 1998/2005 events; folded into the country note's account of the Eyadema-era repression pattern rather than given its own tiered event, to keep the perpetrator column to the two strongest episodes.
- **Exact attribution detail inside the Amnesty 1998 PDF and the UN 2005 report.** Both primary PDFs/pages 403 to automated fetch; load-bearing claims confirmed via Amnesty's catalogue listing, US State Dept corroboration, and multiple independent press syntheses (VOA, IRIN/New Humanitarian, ReliefWeb, WSWS).

## Real sources consulted

- Wikipedia: "Pya-Hodo Massacre", "2005 Togolese coup d'état", "1990–1991 Togo protests", "Togoland campaign".
- GlobalSecurity.org: "1884-1919 German Togoland" (fetched successfully; corvee/mortality/flogging description).
- Amnesty International: "Togo: Rule of Terror" (AFR 57/01/99, May 1999) — catalogue listing + secondary syntheses (PDF 403'd).
- US Department of State: "Togo" 1998 Country Reports on Human Rights Practices.
- The New Humanitarian / IRIN: 13 May 2005 (LTDH 790) and 26 Sept 2005 (UN 400–500) reports.
- Voice of America: "UN Accuses Government of Togo of Human Rights Abuse" (26 Sept 2005).
- ReliefWeb: syndications of the LTDH and UN reports (403'd; used as corroboration via search).
- Dennis Laumann, "A Historiography of German Togoland... 'Model Colony'" (History in Africa, Cambridge Core) — abstract for the tier/historiography point.
- Dwayne Wong (Omowale), "From Slavery to Dictatorship" (Medium) — self-published, used only for uncontroversial corroborated facts, no tolls.
- Calenda: academic call-for-papers on the Pya-Hodo massacre (corroboration of the event's scholarly recognition).

## Audit

Adversarial source-integrity + tier audit, 2026-06-19. Stance: assume every citation FAKE until proven otherwise. Every source below was independently re-checked (existence of work/author, and whether it supports the specific claim it is attached to). No sources were invented or removed; three events upgraded RESEARCHED → VERIFIED, one held UNVERIFIED by design, country held UNVERIFIED.

**Source integrity — all citations confirmed REAL and on-claim:**

- **GlobalSecurity.org "1884-1919 German Togoland" (tgo-1):** Fetched live. Verbatim-accurate to the JSON — "6s. per head" poll tax, corvee "transported from one part of the country to another," "under conditions which caused a high rate of mortality," "abuse of the lash," "punishments without inquiry," the three railway lines (Anêho/Kpalimé/Blitta), Lomé wharf 1904. Gives NO death toll, exactly as the record states. Caveat (tertiary aggregator reproducing a partly-polemical colonial-era British/League survey) is fair and disclosed.
- **Dennis Laumann, "A Historiography of German Togoland, or The Rise and Fall of a 'Model Colony'" (tgo-1):** REAL — History in Africa vol. 30 (2003), pp. 195–211; author is a University of Memphis historian of West Africa. Confirmed on Cambridge Core, ProQuest, ResearchGate. Supports "tier"/historiographical-critique point only; abstract-only caveat correct.
- **Dwayne Wong (Omowale), "From Slavery to Dictatorship" (Medium) (tgo-1):** Author REAL (Pan-African historian, Guyana-born; same essay also ran on HuffPost, 14 Nov 2017). Correctly fenced as self-published/non-peer-reviewed, used only for uncontroversial corroborated facts (forced labour, flogging, Konkomba/Kabye conquests, 1911 Ewe uprising) and NO toll. Acceptable.
- **Wikipedia "Pya-Hodo Massacre" + Calenda/hégémone CFP (tgo-2):** REAL. Wikipedia rests on a SCHOLARLY book — Nicoué Gayibor, *Histoire des Togolais* (Karthala, 2011), p. 281 — not merely on itself; date (21 Jun 1957), Hoda market/Kozah, French colonial army, 20 killed + few dozen wounded, Charles T. O. King (UN delegation), Bouyo Moukpé arrest, and the "tense, bitter and deadly" quote all confirmed across en/fr Wikipedia, Calenda, bibliomonde, CESTOM, TOGO SCOOP, World Council of Churches. Calenda CFP exists (corroborates scholarly recognition, supplies no count). On-claim.
- **Amnesty International, "Togo: Rule of terror" AFR 57/01/99 (tgo-3):** REAL. Confirmed published 5 May 1999 on a Nov–Dec 1998 fact-finding visit (matches "late 1998"); found "hundreds" extrajudicially executed by security forces around the June 1998 election, bodies dumped at sea by military aircraft, corpses on Togo's (and Benin's) beaches. PDF 403s to automated fetch (disclosed); claim confirmed via Amnesty's own catalogue + State Dept. Supports toll.high. On-claim.
- **US State Department, 1998 Country Reports — Togo (tgo-3):** REAL. The live state.gov page renders a "Technical Difficulties" placeholder to WebFetch (a Refworld mirror at refworld.org/docid/3ae6aa5d8.html exists as backup), but the load-bearing text was confirmed verbatim via search: "the security forces during and after the June 1998 presidential election campaign killed hundreds of persons, including members of the opposition and members of the army," and "Corpses, some handcuffed and some in military uniform, washed up on the beaches of Togo and Benin for days afterwards." Also "some hundred extrajudicial killings" — independently supports BOTH the ~100 floor (toll.low) and the "hundreds" high. On-claim. NOTE: the State Dept report names the Amnesty title as "Togo: Reign of Terror" while Amnesty's index AFR 57/01/99 reads "Rule of terror" — the JSON already discloses this exact same-report naming discrepancy; honest, not an error.
- **The New Humanitarian/IRIN (26 Sep 2005, UN 400–500) + VOA (tgo-4):** REAL. UN/OHCHR finding of 400–500 dead and Louise Arbour's "massive nature and gravity … between 400 and 500 dead" confirmed across UN News, ReliefWeb, VOA, New Humanitarian. The 403s on these pages are disclosed; content cross-corroborated. Supports toll.low + summary. On-claim.
- **The New Humanitarian/IRIN (13 May 2005, LTDH 790) (tgo-4):** REAL. LTDH count of 790 killed / 4,345 wounded (28 Mar–5 May) confirmed by New Humanitarian + ReliefWeb; the disputed alternates (Interior Ministry 69; diplomats "100+") also confirmed. Supports toll.high. On-claim; correctly framed as the partisan high end of a disputed range.

**Toll dual-sourcing:** Both contested tolls have a source for BOTH ends. tgo-3: low (~100) = State Dept "some hundred"; high (hundreds) = Amnesty + State Dept. tgo-4: low (400) = UN/OHCHR; high (~800) = LTDH 790. tgo-2 is a single-number toll (20=20) but genuinely undisputed across all sources — acceptable and disclosed, not flagged. tgo-1 toll is null by design (no sourceable figure) — correctly UNVERIFIED.

**Tier re-derivation (done before reading assigned tiers):**

- tgo-1 → **STR** (CONFIRMED). Death is a by-product of a coercive labour/economic system + conquest, no group marked for destruction. NOT EXT. Also not disease-driven, so the STR-vs-EXT disease rule is moot here.
- tgo-2 → **POL** (CONFIRMED). State security force shooting unarmed political demonstrators; not battlefield, not group-extermination.
- tgo-3 → **POL** (CONFIRMED). Political killing by affiliation, bodies disposed at sea; targeting was political, not ethnic/national destruction → not EXT.
- tgo-4 → **POL** (CONFIRMED). Political killing of opposition supporters by affiliation → not EXT.

No tier corrections required.

**Status changes:**
- tgo-1: UNVERIFIED (held — honest null toll by design; quarantine rationale already in toll.note).
- tgo-2: RESEARCHED → **VERIFIED**.
- tgo-3: RESEARCHED → **VERIFIED**.
- tgo-4: RESEARCHED → **VERIFIED**.
- Country: RESEARCHED → **UNVERIFIED** (cannot be VERIFIED while tgo-1 is UNVERIFIED).

**Verdict:** 3 events verified, 1 quarantined (tgo-1, by design). No fabricated or mis-attributed sources found; bias caveats present where needed (Amnesty/LTDH advocacy posture, State Dept/VOA government sourcing, Wong self-publication, GlobalSecurity polemical colonial-era origin all disclosed). Both ledgers populated as the record supports. JSON re-validated as well-formed after edits.
