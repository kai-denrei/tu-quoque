# Montenegro (MNE) — research log

Built from scratch 2026-06-19. Web tools (WebSearch/WebFetch) loaded and used throughout; this is real research, not a seed. Status: **RESEARCHED**.

## Final ledger (4 events, balanced 2/2)

**Victim ("Done to them")**
- **mne-1 — WWI conquest, occupation & demographic collapse (1914–1918), WAR.** Austria-Hungary invaded/occupied from Jan 1916. Losses ~20,000 (≈10% of population) up to ~39,000 (≈16%) — among the worst per-capita of any WWI combatant. Toll mixes military + civilian (internment, hunger, disease) and is not precisely reconciled; shown as a range.
- **mne-2 — SS massacres of Montenegro's Orthodox population: Andrijevica & Velika (1944), WAR.** SS Skanderbeg (Albanian recruits) killed 400+ at Andrijevica (June 1944); Skanderbeg + Prinz Eugen killed 428 (Antonijević documented min.) to ~550 at Velika near Plav (28 July 1944). Combined ~830–950.

**Perpetrator ("In their name")**
- **mne-3 — Plav–Gusinje massacres & forced conversions (1912–1913), POL.** Kingdom of Montenegro's military administration (Vasojevići tribe; Brig. Avro Cemović, Vukota Pantović) killed Albanian Muslims/Bosniaks and forcibly converted ~12,000 after annexing the districts in the First Balkan War. Toll ~800 (executions of refusers) / 1,800+ (Bosniak orgs) / up to 8,000 (Mark Krasniqi). Stopped by Austro-Hungarian pressure, April 1913.
- **mne-4 — Chetnik 'cleansing' of Muslims in the Sandžak & Bosnia (1943), EXT.** Montenegrin Chetniks under Pavle Đurišić, on Mihailović's Dec 1941 directive to cleanse the Sandžak of Muslims. ~9,000–10,000 Muslim civilians killed Jan–Feb 1943 across Bijelo Polje, Pljevlja (incl. Bukovica, 500+), Čajniče, Foča. Tier EXT — explicit cleansing directive + deliberate slaughter of women/children/elderly.

## What is contested / disputed
- **Plav–Gusinje toll:** the single most disputed figure here — ~800 to ~8,000, politically charged (Albanian/Bosniak vs Montenegrin historiography). Wikipedia page carries a reliability flag (June 2020). Kept as a wide sourced range; not averaged.
- **1943 Chetnik toll:** low end is Đurišić's own combined self-reported civilian count (~9,000: ~1,000 Jan + ~8,000 Feb); high end is Tomasevich's overall ~10,000 (incl. ~1,200 combatants). A perpetrator's own boast is the primary doc for the low — flagged in the source caveat.
- **Velika toll:** 428 (Antonijević documented minimum) vs ~550 (other accounts).
- **WWI loss:** ~10% vs ~16% of population, military-vs-total ambiguity.
- **Identity:** WWI dead and the 1944 SS victims are recorded ethnically as **Serbs**. Montenegrin/Serb identity in this region is intertwined and contested. The atlas treats them as Montenegro's people in the *territorial* sense; flagged explicitly in the country note. This is the main reason a careful reader might quibble — handled openly rather than hidden.

## What could NOT be fully verified
- **Tomasevich (The Chetniks, 1975) direct text:** could not access the book directly. The ~10,000 / ~9,000-civilian figures and the "pp. ~258–259" attribution come via Wikipedia and search relays. Cited as `scholarly` with `url: null` and a caveat noting indirect access. Figure is consistent across multiple independent relays, so order of magnitude is solid; exact page unverified firsthand.
- **1914-1918-Online encyclopedia (Montenegro):** consulted via search summary, not full text; used only to corroborate the occupation narrative, not a specific number.
- **ResearchGate "Real demographic losses of Montenegro" (Vego?) and Balkan Insight genocide-controversy article:** both returned HTTP 403 to WebFetch. Not relied upon. WWI figures instead taken from the Wikipedia occupation page (which carried the same numbers as the search-surfaced demographic study).

## Cross-consistency note
Velika/Andrijevica appear on **Albania's perpetrator ledger** (ALB.json, alb-4: SS Skanderbeg) as the *agent*; here they sit on Montenegro's *victim* ledger. Deliberate mirror — same events, opposite columns. Plav–Gusinje likewise mirrors ALB's Balkan Wars victim entry (alb-1). The two files are internally consistent on agent/victim direction.

## Real sources consulted (live this session)
- Wikipedia: Bukovica massacre; Velika massacre; Pavle Đurišić; 21st Waffen Mountain Division of the SS Skanderbeg; Plav–Gusinje massacres (1912–1913); Massacres of Albanians in the Balkan Wars / in WWI; Austro-Hungarian occupation of Montenegro; Christmas Uprising. (all fetched/verified live 2026-06-19)
- Wikimedia Commons: scan of Đurišić's 13 Feb 1943 report to Mihailović.
- 1914-1918-Online encyclopedia (Montenegro handbook) — via search summary.
- Jozo Tomasevich, *The Chetniks* (1975) — via secondary relay only (book not directly accessed).
- Failed/blocked (403, not used): ResearchGate demographic-losses PDF; Balkan Insight 2021 genocide-controversy article.

## Events considered and NOT included
- **Christmas Uprising / Podgorica Assembly reprisals (1919):** real but small-scale (handfuls killed in documented incidents) — below the mass-atrocity threshold for a top-3 entry; folded into context only.
- **Italian occupation reprisals / internment (1941–43):** real and large (10,000–20,000 interned after the July 1941 uprising; deaths at Bar, Rab) but the death toll *specific to Montenegro* is hard to pin to a clean sourced range distinct from the wider Yugoslav internment total; WWI (mne-1) and the 1944 SS massacres (mne-2) chosen as cleaner, better-bounded victim entries.
- **Battle of Krusi / 18th–19th c. Ottoman wars:** combat, not civilian atrocity; Podgorica slaughter (1870s) too small (~17 killed).

## Audit

**Adversarial source-integrity + tier audit — 2026-06-19 (auditor: Kai Denrei).** Method: assume every citation FAKE until proven otherwise; re-fetch each live source and attempt to falsify it against the specific claim it is attached to; independently re-derive each tier before reading the assigned one; confirm both toll ends are sourced. Result: **all 4 events VERIFIED, country VERIFIED.**

### Source integrity — falsification attempted on every source
- **mne-1 / Austro-Hungarian occupation (Wikipedia):** PASS. Re-fetched live; confirms verbatim "20,000 soldiers... 40% of all mobilized... 10% of the total population" (toll.low) and "39,000 dead and a 16% total losses, making Montenegro the most severely affected participant" (toll.high), plus 40,000+ garrison. Both toll ends sourced from one page.
- **mne-1 / 1914-1918-Online (Montenegro):** PASS at claim level. Encyclopedia + article confirmed real; attached only to `summary`, not a toll number → indirect access non-load-bearing.
- **mne-2 / Velika massacre (Wikipedia):** PASS. Confirms 28 Jul 1944, "at least 428 victims" (Antonijević, toll.low), "around 550" (other historians), Serb civilians, joint SS Prinz Eugen + Skanderbeg, "roughly half of Velika's population".
- **mne-2 / SS Skanderbeg division (Wikipedia):** PASS. Confirms "more than 400 Orthodox Christian civilians" at Andrijevica (Jun 1944), "around 550 Serb villagers... Velika" (toll.high), and Paul Mojzes's "better known for committing atrocities against Serbs" line.
- **mne-3 / Plav–Gusinje massacres (Wikipedia):** PASS. Confirms Cemović + Pantović + Vasojevići battalion, "800... executed by February 1913" (toll.low), 1,800+ (Bosniak orgs), "up to 8,000 (Mark Krasniqi, Academy of Sciences of Kosovo)" (toll.high), ~12,000 conversions (Šekularac), April 1913 Austro-Hungarian intervention. Reliability flag on page confirmed live and disclosed in caveat.
- **mne-3 / Massacres of Albanians in the Balkan Wars (Wikipedia):** PASS at claim level. Real page; attached only to `summary` (broad pattern), not a contested toll → non-load-bearing.
- **mne-4 / Tomasevich, *The Chetniks* (1975):** PASS with residual caveat. Book + author confirmed canonical and real; ~10,000 total corroborated independently via the Đurišić Wikipedia article and balkan-history.org. Full text NOT directly accessed (`url: null`) — this is the **one** source in the file resting on indirect access; the high toll end therefore carries a flagged residual sourcing caveat. Figure survives falsification across multiple independent relays; order of magnitude solid. Not grounds for UNVERIFIED — the claim is independently corroborated and the limitation is disclosed.
- **mne-4 / Đurišić 13 Feb 1943 report (Wikimedia Commons primary scan):** PASS. **Primary document confirmed to physically exist** on Commons (public domain, digitized 2006), described as "Chetniks killed about 1,200 Muslim fighters and about 8,000 old people, women, and children; Chetnik losses... 22 killed and 32 wounded" (toll.low). Đurišić Wikipedia article independently confirms the same figures + the verbatim line "complete annihilation of the Muslim population was undertaken, regardless of sex and age".
- **mne-4 / Bukovica massacre (Wikipedia):** PASS. Confirms 4–7 Feb 1943, Đurišić's Chetniks, "more than 576 civilians" / "443... children under the age of 18", Mihailović cleansing order. Attached to `summary`.

**No invented or unverifiable sources found. No quarantine notes required.** Every author, work, and document cited exists; every source supports the specific claim attached to it; biases (perpetrator self-report, reliability flag, identity dispute, indirect Tomasevich access) are disclosed in the relevant caveats.

### Toll dual-sourcing
- **mne-1:** low (20k/10%) + high (39k/16%) both on occupation page. ✓
- **mne-2:** low (428, Antonijević) + high (~550 / 400+ Andrijevica) across two pages. ✓
- **mne-3:** low (~800) + high (8,000, Krasniqi) both on Plav–Gusinje page. ✓
- **mne-4:** low (~9,000, Đurišić's own combined count — primary scan + WP) + high (~10,000, Tomasevich — indirect, multi-relay, flagged). Both ends sourced; high carries disclosed indirect-access caveat. ✓
No single-source / single-number tolls. All four are sourced ranges shown rather than averaged.

### Tier — independently re-derived, then compared to assigned
- **mne-1 = WAR (assigned WAR, CONFIRMED).** Catastrophic war loss via invasion/occupation/mobilization/internment/hunger/disease; no intent to destroy the group. STR exception checked and rejected: disease is one component of broad war catastrophe, not the *defining/dominant* driver, so it does not flip to STR. WAR holds.
- **mne-2 = WAR (assigned WAR, CONFIRMED).** Localized SS reprisal / collective punishment of captive civilians; not destruction of the whole group. WAR holds.
- **mne-3 = POL (assigned POL, CONFIRMED).** State killing + forced religious conversion to consolidate and religiously reshape annexed territory; coerced absorption below total-extermination threshold. POL holds (not EXT, not WAR).
- **mne-4 = EXT (assigned EXT, CONFIRMED).** Ordered, village-by-village killing under an explicit written cleansing directive for a homogeneous Greater Serbia; ~9,000 women/children/elderly deliberately killed; perpetrator's own words document intent to "complete annihilation... regardless of sex and age". Intent to destroy the group in those districts = EXT. STR exception inapplicable (deliberate killing, not epidemic). EXT holds.

**No tier corrections required — all four assigned tiers re-derive correctly from the facts.**

### Ledger balance (law 1)
Both ledgers populated 2 victim / 2 perpetrator, each supported by the record — not invented for symmetry. Country note explicitly states no figure was invented to balance the columns; audit confirms this holds. Identity caveat (WWI + 1944 SS dead recorded as Serbs; Montenegrin/Serb identity contested; treated territorially) is disclosed in the country note and remains the only legitimate quibble — handled openly, not hidden.

**Verdict: 4/4 events VERIFIED, 0 flagged/quarantined, country status VERIFIED. JSON re-validated (parses clean).**
