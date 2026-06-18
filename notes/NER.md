# Niger (NER) — research notes

Built from scratch 2026-06-18. No prior seed file. Web tools (WebSearch/WebFetch) used throughout; all three events are RESEARCHED.

## Ledger summary

- **Victim (1 event):** Voulet–Chanoine mission, 1898–99 — French colonial conquest column.
- **Perpetrator (2 events):** Tchin-Tabaraden crackdown (1990) and extrajudicial killings during the 2007–09 Tuareg rebellion — both Nigerien state forces against the Tuareg minority.

The ledgers are genuinely asymmetric in scale and that asymmetry is the dual-lens point (see country note). The country's defining victimhood is external (French conquest); its own perpetrator record is real but narrower — hundreds at most per episode, concentrated against the Tuareg of the north.

## ner-1 — Voulet–Chanoine mission (victim)

- Two French captains (Voulet, Chanoine) marched a tirailleur column east across the future Niger 1898–99 to claim land between the Niger River and Lake Chad. Trail of burned villages, hanged civilians, looting.
- **Documented incidents:** 101 killed at Sansanné-Haoussa (8 Jan 1899, ~30 women/children); Birni-N'Konni destroyed (8 May 1899) — relieving officer Klobb reported hanged girls and "over a thousand corpses." Press/documentary cite up to ~12,000 at Konni (UNVERIFIED).
- **Total toll is unknowable.** Aggregate estimates run "thousands" to "tens of thousands" (Taithe, OUP) up to ~20,000 across Niger + northern Nigeria (commemoration/reparations coverage). I set low=1,000 (conservative floor consistent with documented massacres), high=20,000 (upper press bound), disputed=true. Both ends flagged as estimates, not counts.
- Klobb killed by Voulet's men; Voulet and Chanoine then killed by their own troops. 1902 French inquiry excused it as "heat madness." France has recently signalled openness to reparations talks → received_lens = memorial.
- **Tier POL:** conquest violence / collective terror against a subjugated population, not group-extermination per se. (Arguable EXT for specific incidents; chose POL for the campaign as a whole.)

## ner-2 — Tchin-Tabaraden crackdown 1990 (perpetrator)

- 7 May 1990: Tuareg returnees attacked the gendarmerie post at Tchin-Tabaraden (~31 dead, ~25 of them attackers). Army reprisal swept Tchin-Tabaraden, Gharo, In-Gall — arrests, torture, killings of civilians incl. women/children.
- **Toll heavily disputed (>1 order of magnitude):** government 63 / humanitarian orgs 600–700 / Tuareg 1,500. low=63, high=1,500, disputed=true.
- Amnesty International (AFR 43/001/1991) confirms arrests of prominent Tuareg (ex-minister Abdoulahi Mohamed), torture in Tahoua barracks, ≥4 detainees dead in custody — but the 1991 summary does NOT itself give the full death toll; it corroborates the pattern, not the number. The disputed range comes via the rebellion overview citing humanitarian orgs and Tuareg sources.
- Triggered the 1990–95 rebellion. received_lens = suppressed.

## ner-3 — 2007–09 rebellion extrajudicial killings (perpetrator)

- MNJ took up arms Feb 2007. Niger army reprisals in the north: summary executions, rape, livestock slaughter, often after landmine strikes.
- **HRW (19 Dec 2007)** and **Amnesty (Dec 2007)** each documented ≥13 civilians unlawfully killed in ~4 weeks of late 2007. Documented incidents: 4 men arrested at Tchintébizguint (22 Nov) found shot in a common grave; 7 travellers to Agadez (9 Dec) with cigarette burns/whipping/bullet wounds; earlier killings near Tezirzayt (3, 2 June), Iferouane-Gougaram road (~7, 26 Aug), north of Iferouane (~10, 27 Sep).
- low=13 (documented minimum for the late-2007 window), high=null (no reliable aggregate for the full rebellion). disputed=false on the documented minimum. received_lens = suppressed.

## What could NOT be verified / excluded

- **Voulet–Chanoine total death count:** genuinely unrecoverable; column operated beyond independent observation. The ~12,000-at-Konni and ~20,000-total figures are repeated in press/documentary but not from an independent count — handled as a disputed range with caveats, not asserted.
- **1990 toll:** could not find a single authoritative count; left as the three-way disputed range (govt/NGO/Tuareg).
- **Pre-colonial slave-raiding** (Maradi vs Sokoto Caliphate frontier, Sokoto raids on non-Muslim communities): real but agency is diffuse/cross-border and tolls undocumented — not entered as a discrete event.
- **Famine mortality** (Sahel droughts): real mass death but STR-diffuse, no clean agent or sourced toll — not entered.
- **Contemporary jihadist massacres** (Boko Haram, ISGS/ISWAP, e.g. Inates/Chinégodar military attacks): these target the Niger state/military or are non-state-perpetrated; the large civilian-massacre cases are by armed groups, not the Niger state, so they don't fit either ledger cleanly as a state-victim mass-atrocity event. Omitted to stay within the dual-ledger frame.

## Real sources consulted

- Wikipedia: Voulet–Chanoine Mission — https://en.wikipedia.org/wiki/Voulet%E2%80%93Chanoine_Mission
- OUP Blog on Bertrand Taithe, *The Killer Trail* (OUP 2009) — https://blog.oup.com/2009/11/killer-trail/
- Reparations Commission coverage of Voulet-Chanoine — https://reparationscomm.org/reparations-news/france-signals-willingness-to-discuss-reparations-for-colonial-massacres-in-niger/
- Wikipedia: Tuareg rebellion (1990–1995) — https://en.wikipedia.org/wiki/Tuareg_rebellion_(1990%E2%80%931995)
- Amnesty International, Niger concerns 1991 (AFR 43/001/1991) — https://www.amnesty.org/en/documents/afr43/001/1991/en/
- Human Rights Watch, Niger: Warring Sides Must End Abuses of Civilians (19 Dec 2007) — https://www.hrw.org/news/2007/12/19/niger-warring-sides-must-end-abuses-civilians
- Amnesty International, Niger: Extrajudicial executions... (Dec 2007) — https://www.amnesty.org/en/latest/press-release/2007/12/niger-extrajudicial-executions-and-population-displacement-north-country/

Sources that failed to load (did not rely on): UCA DADM project page (404), tuaregs.online.fr memorial (connection refused).

## Audit

Adversarial source-integrity + tier audit, 2026-06-18 (assume-fake-until-proven posture). Every source independently re-fetched and tested against the specific claim it backs; every tier re-derived from facts before reading the assigned one, against `data/tiers.json`. Result: **country VERIFIED — all 3 events VERIFIED.** No fabricated sources found; all cited works exist and support their claims (one mis-attribution corrected, see below). All three tiers (POL) confirmed.

### Source integrity — per event

- **ner-1 (Voulet–Chanoine).**
  - Wikipedia (supports toll.low): re-fetched. Confirms 101 killed at Sansanné-Haoussa (8 Jan 1899, incl. ~30 women/children), Birni-N'Konni "one of the worst massacres in French colonial history... possibly thousands", Klobb's trail of hanged women / roasted children, Voulet shooting Klobb, Voulet & Chanoine killed by their own troops, 1902 "soudanite aiguë" inquiry. The exact phrase "over a thousand corpses" is not in the WP body but is attested in press coverage (TalkAfricana / reparations). VERIFIED.
  - OUP blog / Taithe, *The Killer Trail* (supports toll.high): book and author real and correctly cited. Note: the "certainly in the tens of thousands" phrasing sits in the comments / accompanying material of the post, not Taithe's main excerpt — the cite already says "an accompanying note states", which is accurate. Caveat present. VERIFIED with that nuance.
  - **Reparations page (supports summary) — DEFECT FOUND & FIXED.** The original cite claimed this page "reports estimates ranging from thousands to over 20,000 civilian deaths." Re-fetch shows the page states only "thousands" and "~400 in a day at Birni-N'Konni"; it does **not** state 20,000. The 20,000 figure was real but mis-attributed. Cite rewritten to match what the page actually says (thousands; ~400 at Konni; UN complaint by 4 communities; France's non-retroactivity stance) and a dated audit note added.
  - **NEW SOURCE ADDED to give toll.high a real home:** Rob Lemkin, "In May Jirgui", LRB blog (Aug 2023) — re-fetched, states verbatim "More than twenty thousand Africans were killed in a six-month operation... that secured for France the territory that is now Niger." This now backs `toll.high` (=20,000); caveat flags it as an estimate of scale, not a count. So low and high are each now backed by a distinct verified source.
- **ner-2 (Tchin-Tabaraden 1990).**
  - Tuareg rebellion (1990–95) Wikipedia (supports toll.low=63 and toll.high=1,500): VERIFIED. The page does carry the full three-way dispute — "figures range from 63 according to the government through 600 to 700 estimated by humanitarian organizations to 1,500 advanced by the Tuareg" — plus a footnoted Amnesty range 650–1500. (A first WebFetch read missed the enumerated figures; a second read + search snippet of the same article confirmed them. No change needed.) Also confirms the 7 May 1990 attack (31 dead, 25 attackers) and the reprisal across Tchin-Tabaraden / Gharo / In-Gall.
  - Amnesty AFR 43/001/1991 (supports summary): VERIFIED. Confirms arrests of ex-minister Abdoulahi Mohamed and village leader Khamed Ibrahim El Moumine, torture in Tahoua barracks, ≥4 prisoners (incl. teacher Abdoulmoumine Ag Mohamed) dying in detention, under Saïbou's government. Corroborates the pattern, not the death count — correctly scoped to `summary`.
- **ner-3 (2007–09 rebellion killings).**
  - HRW (19 Dec 2007, supports summary): VERIFIED. Confirms Tzintebarac (elderly man + nephew), Tezirzayt (3 elderly men, 2 Jun), Iferouane-Gougaram road (~7, 26 Aug), north of Iferouane (~10, 27 Sep), 7 near Agadez (9 Dec, incl. 2 businessmen), one confirmed gang-rape (girl ~16–17 near Gougaram), and extensive livestock killing.
  - Amnesty (Dec 2007, supports toll.low=13): VERIFIED. Confirms "at least thirteen civilians... unlawfully killed... over the past four weeks", the four named men at Tchintébizguint (22 Nov) shot in a common grave, seven travellers near Agadez (9 Dec) with cigarette burns / whipping / bullet wounds, and the flight of the entire population of Iférouane (350 km N of Agadez).

### Toll — both-ends check

- **ner-1:** low (~1,000, conservative floor from documented massacres via Wikipedia) and high (~20,000 via LRB) now each separately sourced. disputed=true retained. PASS.
- **ner-2:** low=63 (government) and high=1,500 (Tuareg) both carried in the cited WP page; humanitarian 600–700 sits between. disputed=true. PASS.
- **ner-3:** low=13 (documented minimum, Amnesty) with high=null — legitimately a single-number documented floor for the Nov–Dec 2007 window, explicitly flagged as a minimum not a total. disputed=false is correct (the *documented minimum* is not contested; the absent aggregate is acknowledged as unknown). Acceptable single-number-by-design, not a hidden single-source toll.

### Tier — independent re-derivation (against data/tiers.json)

- **ner-1 → POL (confirmed).** Conquest column deliberately massacring/terrorising subjugated populations as instrumental terror to secure territory — not destruction of a defined group "as such" (so not EXT), not disease/famine-driven (so not STR). WAR is arguable (it was a military expedition) but the deliberate terror-massacre-as-policy character is the dominant act → POL.
- **ner-2 → POL (confirmed).** State army reprisal: arrest, torture, extrajudicial killing of Tuareg civilians as collective punishment = repression as deliberate state policy. Not extermination of the group as such, not disease-driven. POL.
- **ner-3 → POL (kept; WAR considered).** Extrajudicial executions of detained/unarmed civilians + rape + livestock destruction as counterinsurgency reprisal. This is the one genuinely WAR-vs-POL borderline call (it occurs *inside* the 2007–09 armed rebellion). Kept POL because the killings were summary executions of detained/unarmed civilians (collective punishment) rather than combat-adjacent civilian harm, and the relevance argument (recurring state practice mirroring 1990) is POL-shaped. Noted as defensible-either-way.
- **STR-vs-EXT enforcement:** none of the three is disease/famine-driven, so none is STR; none is destruction-of-a-group-as-such, so none is EXT. The disease=STR-not-EXT rule is satisfied vacuously here (no EXT/STR claims to police).

### Net changes written to NER.json

1. ner-1 reparations-page cite rewritten to match the page's actual content; mis-attributed 20,000 removed from it.
2. ner-1 new LRB (Lemkin 2023) press source added to back `toll.high` with the verbatim ">20,000" quote.
3. ner-1 toll.note updated to attribute low/high to their distinct verified sources + dated audit note.
4. All event statuses RESEARCHED → VERIFIED; country status RESEARCHED → VERIFIED.

JSON re-validated (`python3 -c json.load`): VALID. 0 events flagged UNVERIFIED, 0 quarantines.
