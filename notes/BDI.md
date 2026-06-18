# Burundi (BDI) — research log

Built from scratch, 2026-06-18. Web tools (WebSearch/WebFetch) loaded and used for real research.

## The dual-lens shape

Burundi is an unusually clean dual-ledger case: the same two peoples (Hutu majority, Tutsi minority) alternate as victim and perpetrator, sometimes within a single year. The ledgers balance on their own — no inflation needed.

- **1972 Ikiza** sits on BOTH ledgers. From the Hutu side it is the victim event (bdi-1); from the Tutsi-dominated state's side it is the perpetrator event (bdi-3). Same event, same toll, two lenses. This is the strongest illustration of the atlas thesis in the entry.
- **1993** inverts the lens: Hutu peasants/FRODEBU officials massacre Tutsi civilians (victim event bdi-2), and the Tutsi-dominated army answers with reprisal massacres of Hutu (perpetrator event bdi-4) — within weeks each people is both victim and perpetrator.

## Events recorded

1. **bdi-1 (victim, 1972, EXT)** — Ikiza, Hutu as victims of the state. Toll 100,000-300,000.
2. **bdi-2 (victim, 1993, EXT)** — Tutsi massacres by Hutu populace. Toll 25,000-116,059 (high not pure-Tutsi).
3. **bdi-3 (perpetrator, 1972, EXT)** — Ikiza, the Micombero state as perpetrator. Same toll as bdi-1.
4. **bdi-4 (perpetrator, 1993-94, WAR)** — army reprisal massacres of Hutu. Documented floor 200+ (Kamenge raid); wider toll thousands but uncounted, high left null.

## What is solid

- **1972 toll range.** Conservative 100,000-150,000; higher 200,000-300,000. Lemarchand (Sciences Po) gives 150,000-300,000 and ~200,000 by late August. Consistent across Wikipedia, EBSCO, Sciences Po.
- **1972 agency.** Micombero government + army + UPRONA youth wing (Jeunesses Révolutionnaires Rwagasore); Foreign Minister Artémon Simbananiye named by Lemarchand as principal architect. Targeting of educated/elite Hutu (~75% killed or fled) is well attested.
- **Genocide classifications for 1972.** UN retroactive label 1985; Burundi's Truth & Reconciliation Commission (CVR) declared state genocide against Hutu on 20 Dec 2021. Lemarchand's term: "selective genocide." Chrétien: "veritable genocide of Hutu elites." Kuper and Des Forges also classified it as genocide.
- **1993 trigger and perpetration.** Assassination of President Ndadaye (21 Oct 1993) by Tutsi army faction; Tutsi killings by Hutu peasants and FRODEBU officials; army reprisals against Hutu, incl. the 6 March 1994 Kamenge raid (200+ Hutu killed, documented by Amnesty).
- **2002 study.** UNFPA + Burundian government counted 116,059 dead for 21 Oct-31 Dec 1993.

## What is contested / could NOT be cleanly verified

- **Genocide classification of 1993** is genuinely disputed: 1994 UN preliminary commission found NO premeditated plan; 1995 International Commission of Inquiry found an effort to destroy the Tutsi group but said evidence was insufficient to show it was planned/ordered. Tiered EXT (tagging the 1995 finding) but the dispute is shown in tier_reasoning and toll.note. Event marked UNVERIFIED.
- **The 116,059 figure is NOT a pure Tutsi count** — it spans both the Tutsi massacres and the army's Hutu reprisals across the whole period. Recorded as toll.high for bdi-2 with an explicit caveat that it is not cleanly attributable to one community. This is why bdi-2 is UNVERIFIED.
- **Army reprisal toll (bdi-4)** has only one firmly documented incident (Kamenge, 200+). The wider reprisal killings ran into the thousands but were never separately and reliably counted — folded into the period total. high left null rather than guessed. Event marked UNVERIFIED.
- **Burundian Civil War total (~300,000, 1993-2005)** is widely cited but is an aggregate across many years and actors; used only in the country note as context, not as an event toll, to avoid double-counting with the 1993 events.
- **No defensible pre-colonial mass-atrocity figure** for the Kingdom of Burundi exists; none invented.

## Real sources consulted (URLs in the JSON)

- René Lemarchand, "The Burundi Killings of 1972," Sciences Po Mass Violence and Resistance research network. (scholarly; foremost Burundi scholar; figures are his estimates)
- Wikipedia, "Ikiza" (reference/aggregator; traces to Lemarchand, Chrétien, Des Forges, Kuper)
- EBSCO Research Starters, "Ikiza or Burundi Killings of 1972" (scholarly summary)
- Wikipedia, "1993 ethnic violence in Burundi" (reference; records the 1994 vs 1995 commission dispute)
- Amnesty International, "Burundi: Struggle for survival — immediate action vital to stop killings" (1995, AFR 16/007/1995) (press/advocacy; documents army reprisals + Kamenge raid)
- Wikipedia, "Burundian Civil War" (context for the ~300,000 aggregate; note only)

## Status

Wrapper status RESEARCHED. Two events RESEARCHED (1972 victim + perpetrator, well-sourced and uncontested in the scholarship), two UNVERIFIED (1993 victim and perpetrator — sound in substance but the tolls are not cleanly attributable to one community / one incident, and the genocide classification of 1993 is openly disputed).

## Audit

Adversarial source-integrity + tier audit, 2026-06-18 (auditor: every citation assumed FAKE until proven otherwise). WebSearch/WebFetch loaded and used.

### Source integrity — all 5 distinct citations VERIFIED, zero falsified, zero invented

| Source | Used by | Verification |
|---|---|---|
| Lemarchand, "The Burundi Killings of 1972" (Sciences Po) | bdi-1, bdi-3 | VERIFIED via WebFetch. Page extant, authored by Lemarchand (byline 27 Jun 2008). Confirms "150,000 to 300,000", "~200,000 reported killed" by late August, army + Jeunesses Révolutionnaires Rwagasore + Simbananiye ("Principal architect of mass murder"), and the term "selective genocide" (Lemarchand 1974). |
| Wikipedia, "Ikiza" | bdi-1, bdi-3 | VERIFIED via WebFetch. Confirms "100,000 and 150,000 … as high as 300,000", Tutsi-dominated army/govt under Micombero, Simbananiye, 1985 UN retroactive genocide label, 20 Dec 2021 CVR genocide finding, "No person has ever been pressed with criminal charges". |
| EBSCO Research Starters, "Ikiza or Burundi Killings of 1972" | bdi-1 | VERIFIED via WebFetch. Extant; "systematic executions of Hutu elite, public figures, civil servants"; gives "150,000 to 300,000". (Cite text loosely says "100,000 and 300,000" — within bounds, immaterial.) |
| Wikipedia, "1993 ethnic violence in Burundi" | bdi-2, bdi-4 | VERIFIED via WebFetch. Confirms 25,000-500,000 early range, 116,059 (2002 UNFPA/govt) with ≥100,000 in late October, Hutu peasants + FRODEBU perpetration, 1994 "not part of any premeditated plan" finding, 1995 "effort to completely destroy the Tutsi ethnic group", army reprisal killings, Hutu flight to Rwanda. |
| Amnesty International, AFR 16/007/1995 "Struggle for survival" | bdi-2, bdi-4 | VERIFIED via mirrors + search. The amnesty.org PDF returns HTTP 403 to automated fetch (access control, NOT non-existence); document is real and mirrored at amnesty.org/en/documents/afr16/007/1995/en/, refworld.org, reliefweb.int. Independent search confirms verbatim: "On 6 March 1994 soldiers massacred more than 200 unarmed Hutu — women, men and children — during a night raid on the Kamenge zone of Bujumbura"; and that the army was "more responsible than any other group" for Oct-1993–Dec-1995 deaths. |

No author/work was found to be fabricated. No source failed to support the specific claim it is attached to. All required caveats (Lemarchand's scholarly partisanship + "number unknowable"; Wikipedia tertiary; Amnesty advocacy-amid-conflict; 116,059 not pure-community) are present and accurate.

### Tier re-derivation (done independently before reading assigned tiers)

- **bdi-1 / bdi-3 (Ikiza 1972):** top-down, list-driven state campaign to eliminate a defined group (educated Hutu), ~75% destroyed, genocide per UN 1985 + CVR 2021. Eliminationist intent, NOT disease-driven → **EXT**. Matches assigned. No change.
- **bdi-2 (1993 Tutsi massacres):** 1995 commission found an effort to destroy the Tutsi group as such → EXT-supporting; dispute with 1994 "no premeditated plan" finding shown rather than resolved → **EXT** with disclosed dispute. Matches assigned. No change.
- **bdi-4 (army reprisals 1993-94):** punitive counter-insurgency reprisals by state forces inside an armed conflict, no established intent to destroy Hutu as such → **WAR**, correctly distinguished from the 1972 EXT. Matches assigned. No change.

No disease-driven events present; the STR-vs-EXT disease rule did not need to fire. All assigned tiers were already correct — none changed.

### Toll dual-source check

- bdi-1 / bdi-3: low (100,000, Wikipedia) and high (300,000, Lemarchand) both sourced. OK.
- bdi-2: low (25,000) and high (116,059) both within Wikipedia's range; high explicitly flagged not-pure-Tutsi. OK but standing attribution flag.
- bdi-4: low (200, Amnesty/Kamenge) sourced; high = null (deliberately not guessed). Flagged single-incident / single-source floor.

### Status outcome

- **bdi-1 → VERIFIED** (was RESEARCHED). Sources clean, tier correct, both toll ends sourced.
- **bdi-3 → VERIFIED** (was RESEARCHED). Same basis.
- **bdi-2 → UNVERIFIED (kept).** Sources VERIFIED; held UNVERIFIED on toll-attribution grounds (116,059 spans both communities) + open 1993 genocide-classification dispute. This is a data-quality flag, not a source-integrity failure. Quarantine marker added to toll.note + audit_note.
- **bdi-4 → UNVERIFIED (kept).** Sources VERIFIED; held UNVERIFIED because the toll is a single documented incident with a null high (single-source/single-number flag). Quarantine marker added to toll.note + audit_note.
- **Country → UNVERIFIED** (was RESEARCHED): not all events VERIFIED.

Bottom line: no fake/invented sources found — citation integrity is clean across the board. The two UNVERIFIED events are quarantined on honest toll-attribution limits, not on any falsified source.
