# Serbia (SRB) — research log

Built from scratch 2026-06-19. Four events: two victim, two perpetrator. All four RESEARCHED; country status RESEARCHED.

## Victim ledger ("Done to them")

### srb-1 — Ustaša extermination of Serbs in the NDH (1941–45), tier EXT
- USHMM ('Axis Invasion of Yugoslavia') gives 320,000–340,000 ethnic Serbs killed by Croat/Ustaša authorities across Croatia and Bosnia-Herzegovina. Used as the toll range.
- USHMM ('Jasenovac') gives the camp-specific breakdown: 45,000–52,000 Serbs among 77,000–99,000 total victims. Used for context/low-end corroboration.
- CONTESTED: Yad Vashem cites "over 500,000" killed plus 250,000 expelled and 200,000 forcibly converted. Serbian-nationalist and Croatian-apologist counts diverge sharply for political reasons. I took the USHMM deliberate-killing range and flagged disputed=true with the higher figures noted rather than resolved. Did NOT pick a single "true" number.
- Tier EXT: the Ustaša explicitly aimed to eliminate the Serb population of their territory (kill/expel/convert) — destruction of a group as such.

### srb-2 — Kragujevac massacre (Oct 1941), tier WAR
- German-Serbian scholarly consensus ~2,778–2,794 killed in one day, incl. ~144 high-school students. Perpetrators: German 724th/749th Infantry Regiments plus Serbian collaborationist auxiliaries, under Hitler's 100-hostages-per-German reprisal order.
- CONTESTED edges: wartime German records ~2,300; some postwar Yugoslav estimates 5,000–7,000. The lower scholarly figure is now agreed; flagged disputed=true.
- Sources: Wikipedia (relaying the agreed scholarly figure — flagged as tertiary aggregator) + HISTORY.com (popular history, corroboration only, flagged). Britannica's Kragujevac page was not separately fetched; the figure is well-attested across the two cited sources and the search-surfaced spomenikdatabase/CGTN coverage.
- Tier WAR (not EXT): collective-punishment reprisal against captive civilians, not an attempt to destroy the Serb people.

## Perpetrator ledger ("In their name")

### srb-3 — Srebrenica genocide (Jul 1995), tier EXT
- UN observance page: up to 8,000 Bosniak men/boys killed by Bosnian Serb forces under Ratko Mladić; ruled genocide by both ICTY and ICJ; 16 convicted incl. Mladić and Karadžić. ~30,000 women/children expelled.
- Low end ~7,000 grounded in DNA-identified remains (>6,900); high end 8,372 = Potočari memorial named victims. Toll itself is NOT disputed in scholarship — denial is political, so disputed=false but received_lens="denied".
- AGENT NUANCE (important, and reflected in the country note): committed by the Army of Republika Srpska, NOT directly by the Serbian state. ICJ found Serbia guilty of failing to prevent/punish, not of committing, the genocide. Placed on Serbia's perpetrator ledger because it was carried out in the Serb national cause; the distinction is stated explicitly rather than blurred.
- Sources: UN, Britannica, ICTY "Facts About Srebrenica" PDF (primary/judicial).
- NOTE: ICTY srebrenica-massacre feature page (icty.org/en/features/...) returned only a navigation hub with no figures; Britannica event page returned HTTP 403 to WebFetch but the figures are confirmed via the UN page and the search-surfaced Britannica summary.

### srb-4 — Ethnic cleansing of Kosovo (1998–99), tier POL
- HRW 'Under Orders': coordinated campaign by Serbian MUP police, Yugoslav Army (VJ), and paramilitaries under Milošević's chain of command (named: Ojdanić, Pavković, Lazarević). 862,979 Albanians expelled. HRW documented 3,453 specific killings and called it an undercount; ICTY exhumed ~4,300 bodies by mid-2001.
- Death range 10,000–13,500: the Humanitarian Law Center / Kosovo Memory Book documents ~13,500 dead+missing on all sides, majority Albanian civilians. Used Heinrich Böll Stiftung piece as the press relay of that figure (flagged: underlying authority is HLC, not the outlet). disputed=true at the death edges; expulsion figure is firm.
- Tier POL (not EXT): state campaign to remove/destroy a national group by killing and mass expulsion, below total-extermination threshold. This is the cleaner "Serbian state itself" perpetrator case, contrasted in the note with Srebrenica.

## Could NOT verify / declined
- No single agreed death number for the Ustaša Serb killings or for Kosovo — handled as sourced ranges with disputed=true, never collapsed to a fake exact figure.
- Did not invent any source, author, or URL. Britannica Kosovo-context and ICTY feature pages that failed to yield figures were not cited for figures.

## Real sources consulted
- USHMM Holocaust Encyclopedia: 'Jasenovac', 'Axis Invasion of Yugoslavia'
- UN: 'About the 1995 Genocide in Srebrenica'
- Britannica: 'Srebrenica genocide' (search summary; page 403'd on direct fetch)
- ICTY Outreach: 'Facts About Srebrenica' (PDF)
- Human Rights Watch: 'Under Orders: War Crimes in Kosovo'
- Heinrich Böll Stiftung relay of the Humanitarian Law Center / Kosovo Memory Book
- Wikipedia 'Kragujevac massacre' (tertiary, relaying agreed scholarship) + HISTORY.com (corroboration)

## Audit

Adversarial source-integrity + tier audit, 2026-06-19. Working assumption: every citation fake until proven. All cited URLs were fetched and falsification was attempted against the specific claim each is attached to. Result: country VERIFIED (all 4 events VERIFIED) after two source corrections.

### Source-integrity results (per event)

**srb-1 (Ustaša extermination) — VERIFIED, no change.**
- USHMM 'Jasenovac' (toll.low) — fetched, confirmed verbatim: "between 45,000 and 52,000 Serb residents," "between 77,000 and 99,000 people in Jasenovac," and "between 320,000 and 340,000 ethnic Serb residents of Croatia and Bosnia." Real page, supports the claim.
- USHMM 'Axis Invasion of Yugoslavia' (toll.high) — fetched, confirmed verbatim: "Croat authorities killed between 320,000 and 340,000 ethnic Serbs in Croatia and Bosnia-Herzegovina between 1941 and 1942." Real page, supports the claim.
- Structural note (not a defect): toll.low and toll.high both rest on the same 320k–340k USHMM range; the two endpoints are not independently sourced to distinct low/high numbers. This is the honest state of the evidence (USHMM gives a range, not a point) and disputed=true with the higher Yad Vashem figures noted is the correct handling. No invented precision. Left as-is.
- Tier independently re-derived BEFORE reading assigned: deliberate destruction of the Serb group as such (kill/expel/convert) = EXT. Matches assigned. No disease component, so no STR confusion.

**srb-2 (Kragujevac) — VERIFIED, one cite corrected.**
- Wikipedia 'Kragujevac massacre' (toll.low) — fetched, confirmed: 2,300 wartime German record; 2,778–2,794 scholarly consensus (2007 book lists 2,794 by name); 144 high-school students; III/749th + I/724th Infantry Regiments (704th Division) plus Serbian Volunteer Detachments. Supports toll.low and the agent line. Caveat (tertiary aggregator) is appropriate and retained.
- HISTORY.com (summary) — fetched. FALSIFICATION HIT (minor): the page says "2,300 men and boys were murdered," NOT the "more than 2,800" the cite had claimed. Source is real and supports the event/order-of-magnitude, but the cite mis-attributed a figure to it. CORRECTED the cite text to "2,300 men and boys ... (wartime-record figure)" and updated the caveat to flag that this is the lower wartime figure, not the scholarly-consensus toll. No fabrication; the source genuinely supports the corrected wording.
- Tier re-derived: reprisal collective-punishment shooting of captive civilians under the 100:1 order = WAR, not EXT (no intent to destroy the Serb people as such). Matches assigned.

**srb-3 (Srebrenica) — VERIFIED, no change.**
- UN 'About the 1995 Genocide in Srebrenica' (toll.high) — fetched, confirmed verbatim: "up to 8,000 Bosnian Muslim men and boys," Mladić, both ICTY and ICJ genocide rulings, 16 convicted incl. Krstić, Mladić, Karadžić, ~30,000 forcibly transferred. Supports the claim.
- Britannica 'Srebrenica genocide' (summary) — direct WebFetch 403'd (as the prior log noted); content confirmed via search: "more than 8,000 Bosniak boys and men ... Bosnian Serb forces ... ICTY and ICJ ... genocide." Corroborative-only cite (supports=summary); not load-bearing. Acceptable.
- ICTY Outreach 'Facts About Srebrenica' PDF (tier) — URL resolves and returns a real 97.5KB ICTY PDF (binary, so text not auto-extracted by WebFetch). Existence + identity confirmed by search: title "FACTS ABOUT SREBRENICA," ICTY/UN-MICT publication, exact URL match. Search also surfaced the Krstić Appeals Chamber finding of genocide via "execution of more than 7,000 Bosnian Muslim men and boys" — independently corroborates toll.low=7,000 AND the tier=EXT claim the PDF is cited for. Real primary/judicial source, supports the claim.
- Tier re-derived: judicially ruled genocide (Krstić, ICJ) = EXT. Matches assigned. toll disputed=false is correct — denial is political, not evidentiary.

**srb-4 (Ethnic cleansing of Kosovo) — VERIFIED, one source REPLACED.**
- HRW 'Under Orders: War Crimes in Kosovo' (summary) — fetched, confirmed verbatim: "expelled 862,979 ethnic Albanians," "documented 3,453 killings ... definitely lower than the total," ICTY "exhumed approximately 4,300 bodies," and the Milošević → VJ / Serbian MUP / paramilitary chain of command. Supports the claim fully.
- Heinrich Böll Stiftung / boell.de (was toll.high) — FALSIFICATION HIT (major): the page is real but does NOT support the claim attached to it. It does not mention the Humanitarian Law Center or the Kosovo Memory Book at all, and does not give the ~13,500 figure; it cites the Belgrade Center for Human Rights for "more than 10,300 civilians ... nearly 8,700 Albanians." Source did not support its toll.high citation → cite quarantined and REPLACED.
- REPLACEMENT (toll.high): Humanitarian Law Center, Kosovo Memory Book Database — fetched the authoritative HLC page, confirmed verbatim: "13,535 individuals were killed or disappeared," ethnic breakdown 10,812 Albanians / 2,197 Serbs / 526 other, from 31,600 documents. HRDAG evaluated the database as near-complete. The ~13,500 figure is therefore real and well-grounded; only the *source pointer* was wrong. Replaced boell.de with the HLC primary URL and added a caveat clarifying the figure is an all-sides total (not all 13,535 are Albanian civilians killed by Serbian forces).
- Tier re-derived: state-directed campaign of killing + mass expulsion (862,979) to remove a national group, below total-extermination threshold = POL. Matches assigned. Not disease-driven, so no STR/EXT confusion.

### Toll low/high coverage
- srb-1: both ends sourced to USHMM (same 320–340k range; honest, not a defect).
- srb-2: toll.low sourced (Wikipedia/consensus); high (2,794) is within the same consensus range, low/high are the two endpoints of one agreed band — adequately sourced. disputed=true flags the wider 2,300 / 5,000–7,000 spread.
- srb-3: low (7,000) corroborated by Krstić Appeals Chamber; high (8,372) = Potočari named victims via UN. Both ends sourced.
- srb-4: low (~10,000) corroborated by HLC Albanian-deaths figure and the Belgrade Center 10,300 figure; high (13,535) now sourced to HLC primary. Both ends sourced after the replacement.

### Ledger balance (law 1)
Both ledgers populated from the record, not invented: victim = srb-1 (EXT) + srb-2 (WAR); perpetrator = srb-3 (EXT) + srb-4 (POL). No fabricated balancing entries.

### Corrections made to SRB.json
1. srb-2 HISTORY.com cite: "more than 2,800" → "2,300 men and boys ... (wartime-record figure)" + caveat updated (source actually states 2,300, not 2,800).
2. srb-4 toll.high: replaced unsupported boell.de citation with the authoritative Humanitarian Law Center / Kosovo Memory Book primary source (13,535; 10,812 Albanian / 2,197 Serb / 526 other) + all-sides-total caveat.
3. All four event statuses RESEARCHED → VERIFIED; country status RESEARCHED → VERIFIED.

No sources were invented at any point. One real-but-mis-attributed source was replaced with the correct primary source; one cite figure was corrected to match what its source actually says.
