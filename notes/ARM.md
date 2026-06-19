# ARM — Armenia research log

Built from scratch 2026-06-19 via live web research (WebSearch + WebFetch). No seed file existed.

## Result
- Status: RESEARCHED
- Victim ledger: 2 events (Hamidian massacres 1894-1896; Armenian Genocide 1915-1916)
- Perpetrator ledger: 1 event (Khojaly massacre 1992)
- All three events: status RESEARCHED. Wrapper: RESEARCHED.

## Victim side — what I found
- **Armenian Genocide (1915-1916), arm-2, EXT.** The defining event. Toll range
  664,000 (USHMM floor) to 1,500,000 (the widely cited Armenian/scholarly figure,
  ~two-thirds of the pre-war Ottoman Armenian population). USHMM gives "at least
  664,000 and possibly as many as 1.2 million." Perpetrator: the Committee of Union
  and Progress (Young Turks), via the Ottoman government, army, and auxiliaries.
  Received lens: denied (Turkey denies the genocide framing to this day).
- **Hamidian massacres (1894-1896), arm-1, POL.** The "prelude to genocide." Toll
  range ~80,000-300,000 (Britannica/Wikipedia historiography). Ottoman troops plus
  state-armed Kurdish Hamidiye irregulars under Abdul Hamid II. Also swept in
  Assyrians (~25,000 at Diyarbekir). Tiered POL not EXT: punitive empire-wide
  pogrom, not yet the total annihilation campaign of 1915.

## Perpetrator side — what I found
- **Khojaly massacre (1992), arm-3, POL.** The single strongest-documented
  Armenian-perpetrated atrocity. Karabakh Armenian forces (with the Russian/CIS
  366th regiment) killed fleeing Azerbaijani civilians as Khojaly fell.
  - Toll: HRW "at least 200," possibly 500-1,000 (1993 HRW report said at least
    161); Azerbaijani official figure 613 incl. 106 women, 63 children.
  - **Attribution is firm:** HRW's 1997 response letter states verbatim that it
    places "direct responsibility for the civilian deaths with Karabakh Armenian
    forces" (fetched directly — primary source). This is the perpetrator mirror of
    AZE.json's victim entry aze-3.

## Contested / caveats
- Every figure in both ledgers is politically charged. Turkey denies 1915.
  Azerbaijan calls Khojaly a "genocide" and uses the 613 figure; the Armenian side
  has at times minimized Khojaly. Figures use scholarly/HRW ranges over state
  claims, with divergence shown in toll notes.
- Genocide high-end (~1.5M) sourced partly to the Armenian Genocide Museum-Institute
  / Journal of Genocide Studies — flagged as Armenian state-affiliated, so treated
  as the maximalist bound, not neutral ground.

## Asymmetry (explained in country note, not papered over)
Armenia's record is genuinely lopsided: it is one of the archetypal victim nations
of the 20th century, while its perpetrator conduct is confined almost entirely to
the modern Nagorno-Karabakh conflict, where it is also a victim (cf. Azerbaijan's
2023 expulsion of Karabakh Armenians, aze-5). The modern Republic of Armenia has
existed only since 1991, limiting its state-perpetrator history. Khojaly is used as
the representative perpetrator entry; the broader First Nagorno-Karabakh War
(1988-1994) displaced an estimated 500,000-724,000 Azerbaijanis from Armenian-held
territory — flagged inside the Khojaly toll note rather than given its own event,
since Khojaly is the best-documented lethal massacre. No event was invented to
"balance" the ledgers.

## Could NOT verify / limitations
- Britannica's genocide page (britannica.com/event/Armenian-Genocide) returned
  HTTP 403 to automated fetch; the ~1.5M / two-thirds figure was corroborated via
  the Britannica summary surfaced in search and is uncontroversially the cited
  high-end. Noted as a caveat on that source.
- No single neutral total exists for Khojaly; HRW deliberately declined to fix one
  because Armenian forces controlled the ground afterward. Range reflects this.

## Real sources consulted
- USHMM, "The Armenian Genocide (1915-16): In Depth" — encyclopedia.ushmm.org (fetched)
- Encyclopaedia Britannica, "Armenian Genocide" and "Hamidian massacres" (summary via search; event page 403 on fetch)
- Wikipedia, "Hamidian massacres," "Khojaly massacre," "First Nagorno-Karabakh War" (cross-check)
- Cambridge World History of Genocide, ch. 25 (Ottoman massacres 1894-1896 and 1909)
- Armenian Genocide Museum-Institute / Journal of Genocide Studies (death-toll calculation; flagged partisan)
- Human Rights Watch, "Response to Armenian Government Letter on the town of Khojaly" (1997) — hrw.org (fetched; primary attribution)
- Human Rights Watch, "Azerbaijan: Seven Years of Conflict in Nagorno-Karabakh" (Dec 1994)
- Cross-referenced existing AZE.json for mirror consistency (aze-3 Khojaly victim entry).

## Audit

Adversarial source-integrity + tier audit, 2026-06-19. Premise: every citation fake until proven. Each source attacked for existence, authorship, and whether it supports the SPECIFIC claim attached.

**Country status: UNVERIFIED** (2 of 3 events VERIFIED; arm-2 UNVERIFIED).

### arm-1 — Hamidian Massacres (1894-1896) — VERIFIED, tier POL (unchanged)
- Britannica "Hamidian massacres" (topic/Hamidian-massacres): event genuine; 403 to automated fetch (anti-bot) but content corroborated via search — Ottoman forces + Kurdish irregulars under Abdul Hamid II, Sasun resistance, Urfa cathedral burning, hundreds of thousands killed. OK.
- Wikipedia "Hamidian massacres": confirmed; 80,000-300,000 range, ~50,000 orphaned, ~25,000 Assyrians at Diyarbekir all present. toll.high OK.
- Cambridge World History of Genocide ch. 25 "The Ottoman Massacres of Armenians, 1894-1896 and 1909": confirmed real (Kiernan et al., CUP); >200,000 killed 1894-96. tier OK.
- toll.low (80k) and toll.high (300k) both sourced. Tier independently re-derived as POL (state-political ethnic massacre, punitive empire-wide pogrom, not total annihilation, not disease-driven) — matches assigned. No change.

### arm-2 — Armenian Genocide (1915-1916) — UNVERIFIED (quarantined), tier EXT (unchanged)
- USHMM "In Depth": fetched directly, verified VERBATIM — "At least 664,000 and possibly as many as 1.2 million died"; CUP/Young Turks named. toll.low solid.
- Britannica "Armenian Genocide": 1.5M / two-thirds figure corroborated via search (event page 403 to fetch — anti-bot, not falsification). toll.high genuinely sourced HERE.
- **FAILURE — AGMI / Tatoyan, Journal of Genocide Studies (2025), "Calculations of the Armenian Death Toll...":** article is REAL, but was attached to `toll.high` and described as supporting ~1.5M as the "maximalist Armenian bound." Verified twice (abstract + ResearchGate): the article actually argues the most widely accepted main-phase toll is **~1 million** (~600k in 1915 + ~400k in 1916) — it does NOT support 1.5M and is NOT maximalist. A citation that does not support the claim it is attached to. CORRECTED: re-cited with accurate title/author, `supports` changed to `toll.note`, caveat rewritten, quarantine note added to toll.note. Event set UNVERIFIED per audit rule.
- Tier re-derived independently as EXT (intentional total destruction of a national-religious group; the paradigm case). STR-vs-EXT rule checked: starvation/disease here were instruments of a deliberate extermination campaign, not an incidental epidemic, so EXT stands — NOT STR. No tier change.
- Note: the underlying toll range remains well-founded (USHMM floor + Britannica high); the UNVERIFIED status is a source-attribution defect, not a claim that the numbers are wrong.

### arm-3 — Khojaly Massacre (1992) — VERIFIED, tier POL (unchanged)
- HRW 1997 "Response to Armenian Government Letter...": fetched directly, verified VERBATIM — "we place direct responsibility for the civilian deaths with Karabakh Armenian forces." summary solid.
- Wikipedia "Khojaly massacre": confirmed; HRW "at least 200," up to 500-1,000, 1993 report 161; Azerbaijani official 613 (106 women, 63 children); 366th regiment. toll.high (613) OK.
- HRW Dec-1994 "Seven Years of Conflict in Nagorno-Karabakh": report real (also at /report/1994/12/01/...); "more than 200 civilians killed, largest massacre to date," Karabakh Armenian forces responsible. toll.low OK. (Minor: JSON labels this `kind:"scholarly"` — it is an NGO/primary report, not scholarly; classification nuance only, not a falsification.)
- toll.low (200, HRW) and toll.high (613, AZ official) both sourced. Tier re-derived as POL (deliberate killing of fleeing ethnic civilians in territorial conquest; not incidental WAR toll, not full EXT) — matches. No change.

### Net result
- 1 source-integrity failure (arm-2 AGMI mis-attribution) corrected in place; arm-2 quarantined UNVERIFIED.
- 0 tier changes — all three tiers independently re-derived and confirmed correct.
- 0 single-source/single-number toll defects — every contested toll has independent low and high sources.
- 0 invented sources introduced. The mis-attributed source was real but mis-described; fixed by correcting the attribution, not by inventing a replacement.
