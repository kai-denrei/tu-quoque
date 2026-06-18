# Jordan (JOR) — research log

Built from scratch 2026-06-18 via live web research (WebSearch + WebFetch). No seed file existed.

## What I found

Jordan's dual ledger is asymmetric, and the asymmetry runs *against* the usual victim-heavy grain: the single best-documented mass-atrocity event in modern Jordanian history is one Jordan **committed** (Black September), not one it suffered.

### Perpetrator — Black September (1970–71) [RESEARCHED]
- King Hussein's army drove the PLO and armed Palestinian factions out of the kingdom after the PFLP hijacked and blew up airliners in the Jordanian desert (Sep 1970). Main fighting 16–27 Sep 1970, extended to July 1971.
- This is the dominant, well-sourced event. Tier WAR (army vs. an armed state-within-a-state; camp shelling killed civilians too, but it is an internal war, not extermination of a people).
- Toll is sharply contested — this is the key dispute:
  - Jordan: ~3,000 total dead (fighters + soldiers + civilians).
  - Scholarly: ~2,000–3,400. Joseph Massad, *Colonial Effects* (Columbia UP, 2001), cited for 3,400.
  - PLO / Arafat: **25,000** Palestinians killed — Palestinian national-memory figure, far above scholarly counts.
  - Jordanian military dead separately put at ~537.
  - Ledger uses low=2,000 (scholarly floor), high=25,000 (PLO maximum, flagged partisan).
- received_lens: triumphal (Jordan frames it as saving the state; Palestinians remember a slaughter — the splinter group "Black September Organization" took the name in revenge).

### Victim — Ottoman suppression of the Karak revolt (1910) [UNVERIFIED]
- Dec 1910: Ottoman census teams in al-Karak (a prelude to conscription/disarmament/taxes) triggered a revolt; townspeople killed the officials and burned the government quarter. Damascus governor Sami Pasha crushed it days later with an "indiscriminate massacre."
- Tier POL (state violence to break political resistance).
- **Could NOT verify a death count.** Every source describes it qualitatively as a massacre but gives only: 10 leaders executed (5 in al-Karak, 5 in Damascus) and "hundreds" imprisoned with hard-labour/life sentences. No body-count for the massacre exists in the sources I found. Toll set low=10 (documented executions, a hard floor), high=null, event marked UNVERIFIED. Did NOT invent a number to fill the gap.

## What is contested
- Black September toll: scholarly ~2,000–3,400 vs. PLO's 25,000. Order-of-magnitude disagreement, disclosed in the toll note with both ends sourced.
- Black September combatant-vs-civilian split is itself disputed (camp shelling put civilians among the dead).

## What could NOT be verified / rejected candidates
- **Karak 1910 massacre death count** — unsourceable as a number (see above).
- **WWI Great Syrian/Lebanese famine (1915–18)** — killed perhaps ~500,000 in Greater Syria, but that fell mainly on Mount Lebanon and the coast. Scholarship on Transjordan (e.g. the Oxford Middle East Review piece on al-Salt) describes severe hardship, requisitioning, locust-gathering conscription and the 1918 al-Salt Christian exodus (6,000+ fled; ~14 elderly died at al-Fuhays) — but NOT mass starvation death on the Mount-Lebanon scale. So no large famine toll is attributed to Jordan. Rejected as a major victim event to avoid inventing a Transjordan-specific toll.
- **1834 Siege of al-Karak** (Ibrahim Pasha / Egyptian forces under Muhammad Ali destroyed the town as collective punishment during the Peasants' Revolt) — real and an atrocity against Karak's people, but pre-modern and unquantified (no casualty figures). Noted in country note as a second, lesser victim datapoint rather than a separate event.
- **Jordanian rule of the West Bank 1948–67** — documented destruction/desecration of Jewish synagogues and the Mount of Olives cemetery (property/heritage destruction), but I found no mass-death atrocity, so it is not a mass-atrocity ledger event.

## Real sources consulted
- Wikipedia, "Black September" — https://en.wikipedia.org/wiki/Black_September (casualties section: Jordan ~3,000; scholarly 2,000–3,400; Massad 3,400; Arafat/PLO 25,000; military ~537)
- Wikipedia, "Karak revolt" — https://en.wikipedia.org/wiki/Karak_revolt
- Karak Resources Project, "Ottoman Period" — https://www.karakresourcesproject.org/ottoman-period
- France 24 / AFP, "Fifty years ago: Black September for PLO" (2020) — https://www.france24.com/en/20200915-fifty-years-ago-black-september-for-plo (URL 403'd on direct fetch; figures confirmed via search index + AFP syndications: Dhaka Tribune, Gulf News, Ynetnews)
- Joseph A. Massad, *Colonial Effects* (Columbia UP, 2001) — https://cup.columbia.edu/book/colonial-effects/9780231123235/
- Wikipedia, "Siege of Al-Karak (1834)" — https://en.wikipedia.org/wiki/Siege_of_Al-Karak_(1834) (background only)
- Oxford Middle East Review, "Remembered One Hundred Years Later: Al-Salt, Transjordan, and the First World War" (2020) — https://omerjournal.com/2020/07/03/remembered-one-hundred-years-later-al-salt-transjordan-and-the-first-world-war/ (WWI hardship context; basis for rejecting a famine event)
- Wikipedia, "1915 Ottoman Syria locust plague" / "Great Famine of Mount Lebanon" (famine scale context)
- A CIA Center for the Study of Intelligence study, "Fifty Years after 'Black September' in Jordan" exists (cia.gov PDF) but returned HTTP 403; not citable as fetched, so not used as a ledger source.

## Status
Country status: RESEARCHED. Perpetrator event RESEARCHED (well-sourced, contested toll disclosed). Victim event UNVERIFIED (real event, no sourceable death count). 1 unverified event.

## Audit
Adversarial source-integrity + tier audit, 2026-06-18 (assume every citation fake until proven otherwise).

### Source integrity — every citation tested for existence and claim-support
- **jor-1 / Karak revolt 1910:**
  - Wikipedia "Karak revolt" — VERIFIED live. Confirms suppression as "indiscriminate massacre," 10 leaders executed (5 in Damascus, 5 in al-Karak), "hundreds" imprisoned with harsh sentences, Sami Pasha (governor of Damascus) led it, and gives NO body-count for the massacre. Supports `summary`. ✓
  - Karak Resources Project, "Ottoman Period" — VERIFIED live. Real scholarly regional-history page; covers the 4 Dec 1910 attack at ‛Irāq, public execution of leading rebels, and the revolt becoming "a symbol of Ottoman oppression" for Arab nationalists. No casualty figure. Supports `summary`. ✓
  - Both sources real; both support what they're attached to. The cite's "indiscriminate massacre" phrasing is the Wikipedia wording, accurately flagged in caveats as qualitative with no death count.
- **jor-2 / Black September 1970–71:**
  - Wikipedia "Black September" — VERIFIED live. Re-confirmed exact figures: scholarly "between 2,000 and 3,400," Massad "3,400 killed," "Arafat claimed ... 25,000 Palestinians," military "~537 dead." ✓
  - France 24 / AFP "Fifty years ago: Black September for PLO" (15 Sep 2020) — VERIFIED via search index + AFP syndications (Gulf News, Dhaka Tribune, Ynetnews). Direct URL 403s but article is real; Jordan's ~3,000 (fighters+soldiers+civilians) and PLO "tens of thousands" both restated. Supports `summary`. ✓
  - Massad, *Colonial Effects* (Columbia UP, 2001) — VERIFIED to exist via the cited Columbia UP catalog page (author, title, publisher, ISBN 9780231123235, 2001 all confirmed). ✓

### DEFECT FOUND AND CORRECTED — toll source mis-mapping (jor-2)
- The Massad citation was mapped `supports: "toll.high"`, but toll.high=25,000 and Massad's figure is ~3,400. The 25,000 derives from Arafat/the PLO, reported only by the Wikipedia source. So toll.high had NO source actually supporting that number while a scholarly source was falsely pointed at the partisan maximum.
- Correction: Massad re-mapped to `supports: "toll.low"` (anchors the scholarly 2,000–3,400 cluster); Wikipedia re-mapped to `supports: "toll.high"` (it is the only source carrying the 25,000 PLO claim, and also reports the 2,000 floor — both ends sourced there). toll.note updated to record the correction and the wider scholarly spread surfaced in audit search (1,500–2,000 to 7,000–8,000).
- Both ends of the contested toll are now sourced. Single-source flag: the 25,000 high rests on a single (tertiary) source reporting a partisan claim — disclosed in caveat and note.

### Toll — both-ends check
- jor-2: low=2,000 ✓ sourced (scholarly floor, Wikipedia + Massad cluster); high=25,000 ✓ sourced (PLO claim via Wikipedia), flagged partisan. PASS.
- jor-1: high=null (honest — no sourceable massacre body-count); low=10 is the documented-executions floor, a single-number hard floor, NOT a true toll. Correctly quarantined in toll.note. This is why the event stays UNVERIFIED — not a source failure but an unfillable quantitative gap. No number invented.

### Tier — independently re-derived BEFORE reading assigned tier (defs from TU_QUOQUE_HANDOVER.md §6.2)
- jor-1: state repression of a tax/conscription revolt by massacre + exemplary executions + mass imprisonment = "repression as deliberate state policy" → **POL**. Assigned POL. ✓ CORRECT.
- jor-2: state army vs. an armed adversary (PLO/fedayeen) in urban combat + camp shelling; civilian deaths inside an internal armed conflict, not destruction of Palestinians as a people, not disease/famine → **WAR**. Assigned WAR. ✓ CORRECT. STR-vs-EXT trap N/A (no disease driver); the live risk here was over-tiering to EXT (libel), correctly avoided.

### Ledger balance (law 1)
- Asymmetric by design and honestly so: perpetrator (Black September) is the better-documented side; victim (Karak 1910) is real but quantitatively null. Both ledgers populated where the record supports it; no invented balance demanded.

### Verdict
- jor-1: UNVERIFIED (sources real and verified; toll unsourceable as a number — honest null, quarantined).
- jor-2: RESEARCHED → **VERIFIED** (all sources verified real and correctly re-mapped; both toll ends sourced; tier correct).
- Country: RESEARCHED → **UNVERIFIED** (not all events VERIFIED — jor-1 carries an honest null toll).
- Events verified: 1 (jor-2). Events flagged/left unverified: 1 (jor-1).
- NO sources invented or removed. One source mis-mapping corrected.
