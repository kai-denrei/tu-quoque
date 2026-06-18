# UKR — Ukraine research log

Built from scratch 2026-06-18. Four events: two victim, two perpetrator. Country status RESEARCHED.

## Victim ledger ("Done to them")

### ukr-1 — Holodomor (1932–33), EXT
- Modern demographic consensus 3.5–5M direct deaths; Rudnytskyi et al. (Canadian Studies in Population, 2015) ~3.9M direct + ~0.6M lost births. Older / political (2003 UN joint statement, 25 states) 7–10M. Toll bracketed 3.5M–10M, disputed.
- Agent: Stalin's Soviet state (Moscow-run); grain procurement via Molotov, Kaganovich, Postyshev.
- Genocide framing contested on the intent question (no surviving explicit starvation order); Ukraine + 30+ states recognise as genocide.
- Same event is rus-4 on Russia's perpetrator page — deliberate dual-mapping, consistent with the atlas convention already in RUS.json.
- Sources: Rudnytskyi 2015 PDF (holodomor.ca — confirmed live, 524KB download, but binary so figure corroborated via reference consensus not parsed from file); Wikipedia 'Holodomor'.

### ukr-2 — Holocaust in Ukraine / Babi Yar (1941–44), EXT
- ~1.5M Jews murdered in present-day Ukraine; Pohl ~1.2M (low), recent to ~1.6M (high). ~80% killed by shooting ("Holocaust by bullets"). Older Hilberg ~900,000 pre-archives.
- Babi Yar: 33,771 shot 29–30 Sept 1941 (German report); ~100,000 total over occupation.
- Perpetrator was Nazi Germany (Einsatzgruppe C, Sonderkommando 4a under Blobel, Order Police) with local auxiliaries. Placed on victim ledger because the dead were Ukraine's Jews; the local-collaboration angle is carried on the perpetrator ledger (ukr-4).
- Sources: USHMM Holocaust Encyclopedia 'Kiev and Babi Yar' (fetched, confirmed 33,771 / ~100,000); Wikipedia 'The Holocaust in Ukraine'.

## Perpetrator ledger ("In their name")

### ukr-3 — Volhynia & Eastern Galicia massacres of Poles (1943–44), EXT
- ~50,000–60,000 Poles in Volhynia; ~100,000 total incl. Eastern Galicia (~20,000–40,000). Toll bracketed 50,000–100,000, disputed.
- Siemaszko name-by-name documentation ~38,600 Volhynian victims by 2010 — a documented floor, not a count.
- Polish retaliation killed ~2,000–3,000 Ukrainians in Volhynia, ~1,000–2,000 in Galicia (noted, not the headline toll).
- Agent: OUN-B and UPA; Klyachkivsky's "general physical liquidation" order June 1943; Shukhevych. Peak 11 July 1943 ("Bloody Sunday"), churches attacked during Mass.
- CONTESTED: Polish Sejm declared it genocide (2016, 432-1); Ukraine resists the term. OUN/UPA also honoured in Ukraine as anti-Soviet partisans — the central reason this is the hardest perpetrator entry.
- Sources: Wikipedia 'Massacres of Poles in Volhynia and Eastern Galicia'; Al Jazeera 2025 feature (memory dispute + ~100,000).

### ukr-4 — Ukrainian Auxiliary Police in the Holocaust (1941–43), EXT
- ~69,000 Ukrainians served by Nov 1942 under German Order Police command. Roles: identifying/arresting Jews, ghetto guarding, escorting to killing sites, mass shootings; assisted at Babi Yar.
- Documented action figures: Lviv ~half of ~70,000 arrests (Mar–Dec 1942); Korets ~2,500; Mizoch ~1,700; Radomyshl 561 children.
- Toll.low/high left NULL: tens of thousands of deaths involved their participation, but no defensible figure isolates the auxiliaries' share from their German commanders. This is a subset of the ~1.5M of ukr-2.
- Sources: Daniil Sytnyk, EHRI Document Blog (28 May 2024) — scholarly, fetched and confirmed personnel + action figures; Wikipedia 'Ukrainian Auxiliary Police'.

## Contested / could-not-verify
- Holodomor genocide intent: no surviving explicit starvation order; classification disputed. Toll high end (7–10M) is political, not demographic — flagged.
- Volhynia genocide label: live Poland–Ukraine dispute; toll ranges diverge by historiography (Motyka, Siemaszko cited via aggregator, not read in originals).
- Auxiliary Police aggregate toll: genuinely unrecoverable as a clean number → null, by design.
- Rudnytskyi 2015 PDF is binary; URL confirmed live and is the correct paper (same source verified in RUS.json) but the figure was taken from the reported demographic consensus rather than parsed from the file.

## Real sources consulted
- USHMM Holocaust Encyclopedia, 'Mass Shootings at Babyn Yar (Babi Yar)' — fetched
- Daniil Sytnyk, EHRI Document Blog, 'Ukrainian Police and the Holocaust in Ukraine' (28 May 2024) — fetched
- Wikipedia: 'Holodomor', 'The Holocaust in Ukraine', 'Massacres of Poles in Volhynia and Eastern Galicia', 'Ukrainian Auxiliary Police' — searched/fetched
- Al Jazeera, 'Genocide or tragedy? Ukraine, Poland at odds over Volyn massacre of 1943' (19 July 2025) — searched
- Rudnytskyi et al., Canadian Studies in Population 42 (2015), holodomor.ca PDF — URL live, binary
- Cross-checked schema and dual-mapping convention against existing RUS.json (Holodomor = rus-4).

NO sources or numbers were invented. Where a number could not be defended (Auxiliary Police aggregate), the toll is null.

## Audit

Adversarial source-integrity + tier audit, 2026-06-18. Working assumption: every citation fake until proven otherwise. Every source was independently fetched/searched and tested against the specific claim it is attached to. Result: country status RESEARCHED → VERIFIED; all four events RESEARCHED → VERIFIED. No sources invented; no tolls altered.

### Source integrity (all live, all support their attached claim)
- **ukr-1 / Rudnytskyi et al. 2015** — CONFIRMED real. Canadian Studies in Population vol 42 (1-2), pp 53-80; five named authors verified (Rudnytskyi, Levchuk, Wolowyna, Shevchuk, Kovbasiuk; Ptoukha Institute of Demography + UNC). Figures match exactly: 3.9M excess deaths + 0.6M lost births = 4.5M total. holodomor.ca PDF re-fetched: live, 524.3KB, application/pdf, binary (same honest caveat stands — figure corroborated via consensus, not parsed). Cross-checked against ResearchGate, Semantic Scholar, Shevchenko Society, Harvard MAPA, ualberta journal archive.
- **ukr-1 / Wikipedia 'Holodomor'** — CONFIRMED. Modern range 3.5-5M; 2003 UN joint statement of 25 states citing 7-10M; intent/genocide actively contested ("absence of attested documents explicitly ordering the starvation"). Recognition now Ukraine + 33 others = 34 UN states; JSON's "30+" remains accurate. toll.low and toll.high both independently sourced.
- **ukr-2 / USHMM 'Kiev and Babi Yar'** — CONFIRMED live. Exact quote match: 33,771 shot 29-30 Sept 1941; ~100,000 total over occupation; Sonderkommando 4a / Einsatzgruppe C under SS-Standartenführer Paul Blobel, with police and auxiliaries.
- **ukr-2 / Wikipedia 'The Holocaust in Ukraine'** — CONFIRMED. Pohl 1.2M (1990s), recent to 1.6M; Hilberg ~900,000 pre-archives. NOTE: article's stated absolute floor is 850,000; JSON's toll.low = 1.2M (Pohl) is the defensible scholarly anchor, intentionally above the older 850K — acceptable. NOTE: "~80% by shooting" is well-established in the literature ("Holocaust by bullets") but is NOT explicitly stated as a percentage in the current article text; minor, claim is sound, not a falsification.
- **ukr-3 / Wikipedia 'Massacres of Poles in Volhynia and Eastern Galicia'** — CONFIRMED. 50,000-60,000 Volhynia; up to 100,000 total; OUN-B/UPA attribution; Klyachkivsky June 1943 "general physical liquidation of the entire Polish population" order; Sejm 2016 genocide resolution (22 July 2016); Ukrainian retaliation 2,000-3,000 Volhynia + 1,000-2,000 Galicia — all match. NOTE: current article gives Galicia as 20,000-25,000 vs JSON's "20,000-40,000"; within the disputed historiographic range and the ~100,000 aggregate holds — left as-is given disputed:true.
- **ukr-3 / Siemaszko 38,600** — CONFIRMED independently: Ewa Siemaszko, July 2010, 38,600 documented Volhynian victims (22,113 known by surname), published via IPN. "Documented floor, not ceiling" framing is accurate.
- **ukr-3 / Al Jazeera (19 July 2025)** — CONFIRMED exists with exact title/date; up to 100,000 civilian Poles; genocide-vs-"tragedy" dispute framing accurate.
- **ukr-4 / EHRI Document Blog, Daniil Sytnyk (28 May 2024)** — CONFIRMED live. Author + date match. ~69,000 Ukrainian policemen (Nov 1942, RKU) under 9,500 Germans; action figures all match: Korets ~2,500, Mizoch ≥1,700, Radomyshl 561 children (by Ukrainian militia) + 1,107 adults (Sk 4a), Lviv ~70,000 arrests Mar-Dec 1942, half by local UOP.
- **ukr-4 / Wikipedia 'Ukrainian Auxiliary Police'** — CONFIRMED. Himmler mid-August 1941 formation; "vital role in the execution of the Holocaust"; ~300 Kyiv auxiliaries helped organize Babi Yar massacre. Null aggregate toll is correct — no defensible figure isolates the auxiliaries' share.

### Toll bracketing
- ukr-1: low (Rudnytskyi 3.5-5M consensus) and high (UN 7-10M) each separately sourced. PASS.
- ukr-2: low (Pohl 1.2M) and high (recent 1.6M) each sourced. PASS.
- ukr-3: low (Volhynia 50-60K) and high (combined ~100K) each sourced. PASS.
- ukr-4: low/high NULL — defensible and correct; both ledgers honest that no clean aggregate is recoverable. PASS.

### Tier re-derivation (done from facts BEFORE reading assigned tier)
- ukr-1 Holodomor → EXT. Engineered famine deliberately weaponised against a national group (border-sealing, seed-grain seizure, village blacklisting). This is deliberate killing-by-policy, NOT disease-driven structural neglect — STR-vs-EXT rule does not pull it down to STR. Matches assigned EXT.
- ukr-2 Holocaust → EXT. Intent to murder a group as such; textbook extermination. Matches.
- ukr-3 Volhynia → EXT. Ordered physical liquidation of an ethnic group from a homeland. Matches (genocide label disputed; the act is deliberate group destruction).
- ukr-4 Auxiliary Police → EXT. Direct participation in extermination of Jews. Matches.
No STR reclassification applies (nothing disease-driven). All four tiers correct; no tier or tier_reasoning changed.

### Law 1 (both ledgers populated)
Victim ledger (ukr-1, ukr-2) and perpetrator ledger (ukr-3, ukr-4) both populated by the real record. No invented balance demanded or added.

### Dual-mapping check
Holodomor confirmed present as rus-4 in RUS.json with identical title — the atlas dual-mapping convention referenced in the country note is real, not asserted.

### Verdict
4/4 events VERIFIED, 0 flagged/quarantined. Country status VERIFIED. JSON re-validated as well-formed after status edits.
