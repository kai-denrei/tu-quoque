# North Macedonia (MKD) — Research Notes

Built from scratch (no seed file). Status: RESEARCHED.

## Framing

North Macedonia is a young state (independent 1991, renamed from "former Yugoslav
Republic of Macedonia" to "North Macedonia" in 2019). The heaviest atrocities on
its territory were committed by ruling empires and occupying powers, not by a
Macedonian state that did not yet exist. The ledger is therefore deliberately
asymmetric: deep victim history, a single well-documented perpetrator event from
the modern state. The asymmetry is explained in the country `note`, not papered
over.

## Events entered

### Victim
- **mkd-1 — Ottoman Suppression of the Ilinden Uprising (1903), POL.**
  Aug–Oct 1903 revolt by IMARO; Ottoman army (~200,000 troops) crushed it,
  killing civilians and burning villages indiscriminately. Foundational to
  Macedonian national identity (Ilinden = the republic's statehood day).
- **mkd-2 — Deportation of Macedonian Jews to Treblinka (1943), EXT.**
  Bulgarian occupation authorities deported ~7,144 Jews in March 1943; ~98%
  murdered, only ~200 survivors. Near-total annihilation of Skopje/Bitola/Štip
  communities.

### Perpetrator
- **mkd-3 — Ljuboten Killings (2001), WAR.**
  Macedonian Interior Ministry police killed 10 ethnic Albanian civilians over
  10–12 Aug 2001, burned houses, beat >100 detainees. ICTY convicted police
  commander Johan Tarčulovski (12 years) for 3 proven murders + destruction +
  cruel treatment; Interior Minister Ljube Boškoski acquitted.

## What is contested

- **Ilinden toll.** Death count (~4,500–4,700) is reasonably consistent across
  contemporary relief bodies and IMARO/Khadzhiev (4,694). Destruction and
  displacement figures vary widely (villages 200; houses 9,830–12,440; homeless
  61,000–100,000+) and partly come from Bulgarian/IMARO advocacy sources with a
  stake in the count. Marked `disputed: true`. The uprising is also claimed by
  Bulgarian national history — a live memory dispute.
- **Holocaust toll.** Minor spread only: 7,144 (most-cited / IHRA) vs ~7,215
  (USHMM, three-transport tally). Not seriously disputed; marked
  `disputed: false`, range 7,000–7,215.
- **Ljuboten.** 10 dead total vs the 3 murders the ICTY found proven to
  Tarčulovski's individual responsibility — distinction noted in the toll `note`
  so the "3" is not misread as the death count. Not disputed.

## What could NOT be verified / dead ends

- **Yad Vashem** (yadvashem.org/holocaust/this-month/march/1943-2.html) —
  WebFetch failed on a TLS certificate error. Toll cross-checked instead via
  USHMM + IHRA, which agree.
- **IHRA page** — returned HTTP 403 to WebFetch; figures (7,144 / 98% / ~200
  survivors) were obtained from the WebSearch snippet of the same IHRA page and
  are consistent with USHMM. URL retained in the source cite.
- **ICTY case-party URL** (icty.org/en/cases/party/710/4) — 404. Replaced with
  the verified ICTY press-release URL for the trial judgment
  (Boškoski acquitted / Tarčulovski 12 years), which loaded cleanly via search.
- **2001 conflict total deaths** — overall conflict toll (~72 security forces,
  ~64–100s NLA, civilian count "speculative" per Balkan Insight) is too
  uncertain and too distributed across both sides to enter as a single
  perpetrator atrocity; only the discretely documented Ljuboten operation was
  entered.

## Real sources consulted

- USHMM Holocaust Encyclopedia — "The Holocaust in Macedonia: Deportation of
  Monastir Jewry" (fetched directly; ~7,215, three transports 22/25/29 Mar 1943,
  Skopje Tobacco Monopoly transit camp).
- IHRA — "North Macedonia commemorates the 80th anniversary of the deportation
  of the Macedonian Jews" (via search snippet; 7,144 / 98% / ~200 survivors).
- ICTY press release — "Boškoski Acquitted and Tarčulovski Sentenced to 12 Years'
  Imprisonment" (Prosecutor v. Boškoski & Tarčulovski, IT-04-82).
- Wikipedia — "Ilinden Uprising" (fetched; toll/destruction ranges).
- Wikipedia — "Ljuboten incident" (fetched; 10 dead, >100 detained, ~14 houses).
- EBSCO Research Starters — "Ilinden Uprising in Macedonia" (summary support).
- Balkan Insight — 2001 conflict casualty reporting (used to rule out a broader
  perpetrator entry; not cited in the JSON).

## Inviolable-laws check

- No invented sources or numbers. Every figure traces to a named real source.
- Tolls are ranges with disputes shown; low and high each sourced.
- Tiers tag the act (EXT for the genocidal deportation; POL for the imperial
  suppression; WAR for the police reprisal), never the nation.
- Paraphrase only; no source text pasted.

## Audit

Adversarial source-integrity + tier audit, 2026-06-19. Posture: assume every
citation fake until proven otherwise. Result: **all 3 events VERIFIED; country
VERIFIED.** No invented sources or numbers found; no tier corrections required.

### Source integrity — every citation falsification-tested

- **mkd-1 Wikipedia 'Ilinden Uprising'** — VERIFIED by direct WebFetch. Every
  figure in the toll note traces to the live page: relief >4,500 dead; IMARO/
  Khadzhiev 4,694 killed; houses 9,830 (Bulgarian) to 12,440 (IMARO); homeless
  60,953–100,000+; ~30,000 fled to Bulgaria; ~201 villages. Ottoman commander
  Hüseyin Hilmi Pasha confirmed real (page also names Nasir Pasha, Omer Ruchidi
  Pasha). Caveat already discloses IMARO/Bulgarian advocacy bias — adequate.
- **mkd-1 EBSCO Research Starters** — VERIFIED by WebFetch. Page exists, supports
  the summary (IMRO-led revolt, 2 Aug 1903 / St. Elijah's Day, Ottoman reprisals,
  thousands dead, tens of thousands of refugees). Caveat added (was null).
- **mkd-2 USHMM 'Holocaust in Macedonia'** — VERIFIED by direct WebFetch. ~7,215
  in three transports (22/25/29 Mar 1943), Tobacco Monopoly (Monopol) transit
  camp in Skopje → Treblinka, German soldiers assisting the loading. Supports
  toll.high exactly. Caveat added documenting the confirmation.
- **mkd-2 IHRA 80th-anniversary page** — source itself returned HTTP 403 to direct
  WebFetch (same as original research). Figures (7,144 / 98% murdered / ~200
  survivors / Skopje, Bitola, Štip) confirmed via the IHRA page's own search
  snippet AND independently triple-corroborated by European Jewish Congress and
  Balkan Insight coverage of the same March 2023 commemoration. Supports toll.low.
  403 is an access block, not a falsification — figures stand. Caveat added.
- **mkd-3 ICTY press release (IT-04-82)** — VERIFIED by direct WebFetch (primary).
  Tarčulovski guilty: murder of three named civilians (Rami Jusufi, Sulejman
  Bajrami, Muharem Ramadani), wanton destruction of property of twelve residents,
  cruel treatment of thirteen detainees at Ametovski's house; 12 years. Boškoski
  acquitted of all charges. Conviction/sentence upheld on appeal 19 May 2010.
- **mkd-3 Wikipedia 'Ljuboten incident'** — VERIFIED by WebFetch. Ten civilians
  killed incl. a child, fourteen houses burned, ~60–70 reserve police + 'Kometa'
  unit under Tarčulovski, triggered by 10 Aug 2001 landmine killing eight
  soldiers. Aligns with the ICTY record. Caveat added.

### Toll low/high both-end check

- **mkd-1** — low (relief >4,500) and high (IMARO/Khadzhiev 4,694 → 4,700) each
  independently sourced. Destruction/displacement spreads well-sourced.
  `disputed: true` correct. PASS.
- **mkd-2** — low (7,144, IHRA) and high (~7,215, USHMM three-transport tally)
  each sourced. `disputed: false` correct; spread is rounding only. PASS.
- **mkd-3** — single hard number (10/10), not a contested range. Documented
  beyond dispute by the ICTY record; the note correctly separates the 10 dead
  from the 3 murders proven to Tarčulovski's individual responsibility.
  `disputed: false`. Acceptable single-number toll. PASS.

### Tier re-derivation (derived from facts BEFORE reading assigned tier)

- **mkd-1** — imperial army collective punishment / mass killing to restore
  control, no intent to destroy the group as such → **POL**. Matches. CORRECT.
- **mkd-2** — deportation of a near-whole community to a death camp, deliberate
  destruction of a group as such → **EXT**. Not disease-driven, so EXT (not STR)
  is right. Matches. CORRECT.
- **mkd-3** — police killing of captive civilians + destruction + cruel treatment
  during an internal armed conflict, war crimes (ICTY war-crimes statute) →
  **WAR**. Matches. CORRECT.

### Ledger / law-1 check

- Both ledgers populated as the record supports: deep victim column (mkd-1,
  mkd-2), one documented perpetrator event (mkd-3). Asymmetry is genuine and
  explained in the country note — not padded, not invented. PASS.

### Corrections made

- mkd-1 summary: "Secret Macedonian-Adrianople Revolutionary Organisation" →
  "Internal Macedonian-Adrianople Revolutionary Organisation" (the cited sources
  give IMARO/IMRO = *Internal*; "Secret" was inaccurate to the expansion used).
- All six source caveats updated/added with the 2026-06-19 verification result.
- All three event statuses RESEARCHED → VERIFIED; country status RESEARCHED →
  VERIFIED. JSON re-validated with python3 json.load (well-formed).

### Discrepancy investigated, no change

- One WebFetch summary of the ICTY release aggregated the cruel-treatment count
  as 23 (13 at Ametovski's + 10 at Braca's house). On follow-up search the ICTY's
  own headline conviction count is "cruel treatment of thirteen ethnic Albanian
  civilians" (the 13 at Ametovski's house), with the 10 at Braca's cited
  separately. The JSON's "thirteen detainees" matches the ICTY's stated
  headline count, so it was left as-is rather than changed to 23.
