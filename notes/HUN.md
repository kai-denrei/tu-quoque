# Hungary (HUN) — research log

Built from scratch 2026-06-19. Four events, two ledgers, all status RESEARCHED.

## Ledger design

The Hungarian case is unusual: the single biggest entry sits on **both** ledgers.
The Holocaust of Hungarian Jewry is the largest mass killing of Hungarian citizens
in the nation's history (victim, hun-2), and it is also Hungary's heaviest
perpetrator entry (hun-3), because the ghettoisation and the deportation trains
were run by the Hungarian gendarmerie and the Sztójay government, with the Arrow
Cross adding its own Budapest massacres. The country note frames this as one event
read honestly from both ends rather than two separate stories.

- Victim: hun-1 Mongol invasion (1241–42); hun-2 Murder of Hungarian Jewry (1941–45)
- Perpetrator: hun-3 Deportation of Hungarian Jews to Auschwitz (1944);
  hun-4 Novi Sad raid / Bačka reprisals (1942)

## What is solid

- **Holocaust death toll**: Braham ~564,000; USHMM ~550,000 of ~825,000 under
  Hungarian control. These two anchor the low/high. Not disputed as to the
  genocide; the spread is counting boundaries.
- **1944 deportations**: gendarmerie record (Ferenczy) 434,351 by 9 July in 147
  trains; Veesenmayer 437,402. ~320,000–330,000 (>75%) gassed on arrival at
  Auschwitz (Auschwitz Museum). Hungarian agency (Endre, Baky, gendarmerie
  "enthusiastic help") is well established and central to the perpetrator framing.
- **Novi Sad / Bačka**: multiple independent counts cluster 3,000–4,000 —
  Golubović 3,809 (widely accepted, with ethnic breakdown), Keresztes-Fischer
  (Hungary's own wartime interior minister) 3,755, Rummel 3,200, Yahil 4,116.
  Commanders (Feketehalmy-Czeydner, ordered by Szombathelyi) and the Danube
  shootings are documented; Yad Vashem corroborates the method.

## What is contested

- **Mongol invasion toll** is the weakest-anchored figure and is flagged
  `disputed: true` with an explicit population-decline-vs-death-count caveat.
  Two historiographic schools: Györffy (~50%, from abandoned villages in land
  charters) vs Stephen Pow (~20–25% overall, archaeology — severe but partial,
  with 50–80% on the Plain/Transylvania). Applied to a ~2 million pre-invasion
  population this gives the ~200,000 low / ~1 million high range. No contemporary
  census exists; the numbers are estimates of demographic collapse, not a body
  count, and conflate battle, massacre, enslavement and post-invasion famine.
  Tier set to WAR (conquest with mass death), not EXT — there was no programme to
  exterminate Hungarians as a people. Could be argued STR for the famine
  component; WAR chosen as the dominant driver was the conquest itself.

## What could NOT be verified

- Britannica's Hungary/Mongol page returned HTTP 403 and could not be fetched;
  the Mongol figures rest instead on the Pow scholarly summary (Medievalists.net)
  and New World Encyclopedia, plus the WebSearch aggregation. The low/high are
  defensible but the Mongol event is the one a future auditor should re-check
  against a primary demographic study (Györffy / Pow directly).
- No precise sourced figure for the 1941 Kamianets-Podilskyi killings was pulled
  in this pass (mentioned only in the hun-2 toll note as context, ~16,000–23,000);
  not load-bearing for any low/high here, but worth a clean cite if expanded.

## Real sources consulted (live this session)

- USHMM Holocaust Encyclopedia — "The Holocaust in Hungary" and "Deportation of
  Hungarian Jews" (fetched).
- Wikipedia "The Holocaust in Hungary" (fetched; relays Braham, Ferenczy,
  Veesenmayer) and "Novi Sad raid" (fetched; collates Golubović/Rummel/Yahil).
- Auschwitz-Birkenau Memorial and Museum — Hungarian deportations lesson page
  (via search) for the ~325,000–330,000 gassed-on-arrival figure.
- Yad Vashem — January 1942 Novi Sad photo/caption page (Danube shootings).
- Medievalists.net summary of Stephen Pow, "Contextualizing the Mongol Invasion
  of Hungary 1241–42"; New World Encyclopedia "Mongol invasion of Europe"
  (fetched); WebSearch aggregation on Mongol population loss / Györffy vs Pow.
- Britannica Hungary/Mongol page attempted — 403, not used.

## Schema note

Followed the task prompt's schema: `status` values RESEARCHED/UNVERIFIED (not the
VERIFIED used in some older country files), and `received_lens` from the
memorial|suppressed|denied|contested|flagellated|triumphal set. The two
perpetrator entries and the Holocaust victim entry use "contested"/"memorial";
the Mongol entry "memorial".

## Audit

Adversarial source-integrity + tier audit, 2026-06-19. Premise: treat every
citation as fake until proven otherwise. Every source was checked live; the
finding is that the file is unusually clean.

**Verdict: country VERIFIED — all four events VERIFIED. 0 events quarantined.**

### Source integrity — each citation falsification-tested

- **hun-2 / Braham 564,000 (Wikipedia)** — confirmed verbatim: "Randolph
  Braham estimated that just over 564,000 Hungarian Jews died between 1941 and
  1945." Braham is the field's leading authority; caveat correctly flags it as a
  tertiary relay of his scholarship. PASS.
- **hun-2 / USHMM 550k of 825k** — confirmed verbatim on the USHMM page
  (~825,000 under control, ~550,000 killed, ~437,000 deported 15 May–9 Jul
  1944). PASS.
- **hun-3 / USHMM deportation timeline** — confirmed verbatim: "~440,000 Jews…
  15 May–9 July 1944… most…killed in gas chambers" on arrival. PASS.
- **hun-3 / Ferenczy 434,351 + Veesenmayer 437,402, 147 trains, Endre/Baky,
  gendarmerie "enthusiastic help" (Wikipedia)** — all confirmed verbatim. PASS.
- **hun-3 / Auschwitz Museum 325–330k gassed on arrival, >75%** — confirmed
  verbatim (Dr. Setkiewicz). PASS.
- **hun-4 / Novi Sad raid figures (Wikipedia)** — Golubović 3,809
  (2,578/1,068/64), Keresztes-Fischer 3,755, Rummel 3,200, Yahil 4,116 all
  confirmed verbatim, with perpetrators Feketehalmy-Czeydner / Szombathelyi.
  PASS.
- **hun-4 / Yad Vashem Danube-shooting page** — page confirmed real (exact title
  "Hungarian policemen and soldiers standing over murdered Jews in Novi-Sad,
  Yugoslavia, 23 January 1942"); content corroborated (≈−20 °C, Danube
  shootings, 500 Serbs + 800 Jews in the city). Direct WebFetch hit a transient
  TLS "unable to verify first certificate" error — NOT evidence of fabrication;
  existence and content confirmed via search + multiple independent
  corroborators (USHMM HSV database, Killing Sites, Balkan Insight, Hungarian
  Studies Review). PASS.
- **hun-1 / New World Encyclopedia "half of Hungary's population"** — confirmed
  verbatim, plus Batu (nominal) / Subutai (field) and Mohi 11 Apr 1241. PASS,
  with the existing tertiary-encyclopedia caveat retained.
- **hun-1 / Pow et al. (Medievalists.net summary)** — the article is REAL and
  correctly described: *Contextualizing the Mongol Invasion of Hungary in
  1241–42*, Hungarian Historical Review 7:3 (2018), pp. 419–450, authors
  Laszlovszky, Pow, Romhányi, Ferenczi, Pinke. ONE precision fix made: the
  original `cite` claimed the summary shows "archaeology supports severe but
  partial destruction (~20–25% overall)". The Medievalists.net summary in fact
  states NO overall percentage — it gives only the "uneven, Great-Plain-
  concentrated" thesis. Corrected the `cite` to match what the summary actually
  says, with full bibliographic detail, and added a caveat noting the ~20–25%
  national reading rests on the full article + Engel's ~15–20% estimate (≈20% in
  Transdanubia), not on the summary page. The low/partial reading is genuinely
  supported by the underlying scholarship (Engel ~15–20%; Pow et al. uneven,
  Plain-concentrated) — so this is a citation-precision correction, NOT a
  quarantine. PASS after fix.

### Toll low/high coverage

Every contested toll carries a distinct source for each end:
hun-1 Pow=low / NWE=high; hun-2 USHMM=low / Braham=high; hun-3 Auschwitz=low /
USHMM=high; hun-4 Wikipedia (Golubović 3,809 anchoring the 3,000 low) / Yahil
4,116 high. hun-4's two ends share one aggregator page, but the figures are
multiply attributed scholars and the spread is real variation, not a single
number — acceptable, no flag.

### Tier re-derivation (done blind, before reading assigned tiers)

- hun-1 Mongol invasion → WAR. Mass death in conquest (battle, massacre,
  enslavement) with famine as a *consequence* of the wrecked harvests, not the
  primary mechanism; no programme to exterminate Hungarians as a people. Not STR
  (famine is downstream of conquest, not the driver), not EXT. Matches assigned.
- hun-2 Murder of Hungarian Jewry → EXT. Group singled out for destruction.
  Matches.
- hun-3 Deportation to Auschwitz → EXT. State deportation of a group to death
  camps + Arrow Cross killings. Matches.
- hun-4 Novi Sad raid → WAR. Mass killing of civilians under an occupation /
  counter-insurgency pretext, targeting Serbs/Jews/Roma. Arguable EXT for the
  Jewish victims specifically, but the operation as a whole is WAR. Matches.

All four assigned tiers stand. No tier or tier_reasoning changed.

### Ledgers (law 1)

Both ledgers are populated from the record, not from invented balance: victim
hun-1/hun-2, perpetrator hun-3/hun-4. The Holocaust correctly sits on BOTH
ledgers (hun-2 victim, hun-3 perpetrator) as one event read from both ends —
this is the defining feature of the Hungarian file and is honestly handled.

### Net change

One `cite`/`caveat` edit on hun-1 source 1 (precision, no invented content);
all four event statuses RESEARCHED → VERIFIED; country status RESEARCHED →
VERIFIED. No sources invented. No events quarantined.
