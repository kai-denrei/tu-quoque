# Turkey (TUR) — research notes

Researched 2026-06-18. Web tools (WebSearch + WebFetch) ran successfully. Both
seed events were upgraded from SEED to RESEARCHED with independent low/high
sourcing. Both ledgers (perpetrator + victim) were already present in the seed,
so Law 1 was satisfied without adding events.

## tur-1 — The Armenian Genocide (perpetrator, EXT)

- **Tier**: EXT. The CUP set out to destroy the Ottoman Armenians as a group —
  deliberate destruction of a people as such. Not disease-driven; the deaths were
  from massacre, engineered death marches, starvation, and exposure that the
  state organized. This is the textbook EXT call.
- **Toll**: low 600,000 / high 1,500,000, disputed.
  - Low: Justin McCarthy's deflationary ~600,000; U.S. Holocaust Memorial Museum
    floor "at least 664,000."
  - High: mainstream scholarly consensus 1.3–1.5 million for 1915–18 deaths;
    Hovannisian cites a span up to 2 million.
  - The Turkish state's ~300,000 was deliberately EXCLUDED from the toll range:
    Wikipedia's casualties article notes "there is no indication as to how those
    figures were obtained." Recorded it as a denialist claim in the toll note,
    not as a scholarly low bound.
- **Received lens**: denied. Official, continuous Turkish state policy since the
  1920s. Documented via "Armenian genocide denial" (Wikipedia) and corroborating
  searches (Akçam, ANCA, USHMM-adjacent coverage).

## tur-2 — Expulsion and Killing of Balkan Muslims (victim, POL)

- **Tier**: POL (not EXT). The Balkan League armies and irregulars cleared the
  conquered European provinces of their Muslim/Turkish population by massacre,
  terror, and forced flight. The intent was to clear the land of the group, which
  is ethnic cleansing / POL — distinct from the empire-wide annihilation logic
  that defines EXT. Renamed from "Expulsion of Balkan Muslims" to "Expulsion and
  Killing of Balkan Muslims" to reflect that mass killing, not only deportation,
  is in the record.
- **Toll**: low 632,000 / high 1,500,000, disputed. CONTESTED on two axes:
  1. The widely cited "~1.5 million" usually counts deaths AND exile together,
     not deaths alone — flagged explicitly in the toll note.
  2. A large share of deaths were from starvation and disease among refugees, not
     direct killing — also flagged. This is the deaths-vs-population-decline
     caveat the brief specifically warned about.
  - Low: 632,000 (death range floor in the Wikipedia "Persecution of Muslims
    during the Ottoman contraction" article).
  - High: McCarthy's ~640,000 dead + ~860,000 fled (Death and Exile) feeding the
    ~1.5M combined headline.
- **Received lens**: memorial. Turkish national memory cherishes the muhacir
  (Balkan Muslim refugees) as "the dear memory of lost territory" — they were
  rapidly naturalized and settled, often on land taken from displaced non-Muslims.
  Sourced via "Muhacir" (Wikipedia) and EHNE migration-policy article.

## What is contested / could not be fully nailed down

- **McCarthy reliability**: He is the single most-cited source for the Balkan
  Muslim death toll, but he is a pro-Turkish scholar widely criticized (Vryonis:
  "defective methodology") and a documented Armenian-genocide denier. His numbers
  are flagged with a mandatory caveat and used as the partisan HIGH end only, not
  as neutral ground.
- **Balkan Wars deaths vs. exile**: the published figures blur outright killing,
  refugee-deaths from disease/starvation, and simple displacement. The toll note
  preserves this ambiguity rather than collapsing it into a false precision.
- **Britannica** death-toll page returned HTTP 403 and could not be fetched;
  USHMM and Wikipedia (cross-checked against named scholars) carried the load
  instead, so no figure depends on the inaccessible page.
- USHMM in-depth article fetched cleanly and confirmed the 664,000–1.2 million
  institutional range used for the Armenian Genocide low bound.

## Real sources consulted (URLs verified reachable except where noted)

- U.S. Holocaust Memorial Museum — "The Armenian Genocide (1915–16): In Depth":
  https://encyclopedia.ushmm.org/content/en/article/the-armenian-genocide-1915-16-in-depth
- "Casualties of the Armenian genocide" — Wikipedia:
  https://en.wikipedia.org/wiki/Casualties_of_the_Armenian_genocide
- "Armenian genocide denial" — Wikipedia:
  https://en.wikipedia.org/wiki/Armenian_genocide_denial
- "Persecution of Muslims during the Ottoman contraction" — Wikipedia:
  https://en.wikipedia.org/wiki/Persecution_of_Muslims_during_the_Ottoman_contraction
- "Muhacir" — Wikipedia: https://en.wikipedia.org/wiki/Muhacir
- EHNE — "Immigration and Migration Policy in Post-Ottoman Turkey":
  https://ehne.fr/en/encyclopedia/themes/migrations-in-europe/changed-borders-changed-nationalities/immigration-and-migration-policy-in-post-ottoman-turkey
- Books cited (not fetched, standard scholarly references):
  - Ronald Grigor Suny, They Can Live in the Desert but Nowhere Else (Princeton UP, 2015)
  - Justin McCarthy, Death and Exile (Darwin Press, 1995) — partisan; see caveat
  - Britannica death-toll page attempted but returned 403 (not used).

## Audit

Adversarial source-integrity + tier audit, 2026-06-18. Posture: assume every
citation fake until proven otherwise; try to falsify each source against the
specific claim it is attached to.

### Sources falsification-tested (all survived)

- **Suny, "They Can Live in the Desert but Nowhere Else" (Princeton UP, 2015)** —
  CONFIRMED REAL. Verified via Princeton UP author page, multiple journal reviews
  (Journal of Levantine Studies, JRAS/Cambridge, H-Net, Project MUSE). Citation
  exact (publisher, year). Supports summary. PASS.
- **USHMM "Armenian Genocide (1915–16): In Depth"** — CONFIRMED. Fetched the
  page; it states verbatim "at least 664,000 and possibly as many as 1.2 million
  died during the genocide." Directly supports toll.low floor. PASS.
- **"Casualties of the Armenian genocide" (Wikipedia)** — CONFIRMED. Fetched;
  gives Hovannisian 600,000–2 million, McCarthy "a little less than 600,000,"
  Talaat's 300,000 with "no indication as to how those figures were obtained,"
  and mainstream 1.3–1.5 million. Every figure the JSON attributes to it is on
  the page. Supports toll.high. PASS.
- **"Armenian genocide denial" (Wikipedia)** — CONFIRMED. Fetched; states "Since
  the 1920s, denial has been the policy of every government of... the Republic of
  Turkey." Supports the denied lens / summary. PASS.
- **McCarthy, Death and Exile (Darwin Press, 1995)** — CONFIRMED REAL. Verified
  via Cambridge IJMES review, AHR (Oxford), Wellcome, IWM, Google Books. Citation
  exact. Author's pro-Turkish/denialist reputation INDEPENDENTLY CORROBORATED:
  Colin Imber ("Turkish nationalistic agenda"); Encyclopedia of Genocide
  ("shoddy and desperate books," revises demography to minimize Armenians).
  Supports toll.high. PASS.
- **"Persecution of Muslims during the Ottoman contraction" (Wikipedia)** —
  CONFIRMED. Fetched; states "between 632,000 and 1,500,000 Ottoman Muslim
  civilians killed" and refugee range 400,000–813,000 — exactly as cited.
  Supports toll.low. PASS.
- **"Muhacir" (Wikipedia) + EHNE** — CONFIRMED. Muhacir page documents the
  Balkan/Ottoman Muslim refugee influx, the "protective motherland" framing, and
  ~one-third of modern Turkey descending from muhacir. Supports summary. PASS.

### Flags raised

1. **McCarthy caveat over-attribution (tur-2, corrected).** The seed caveat
   attributed the methodological criticism specifically to "Vryonis." Web search
   could not directly confirm a Vryonis review of Death and Exile with that
   wording. The SUBSTANCE of the bias critique is solidly documented by other
   named sources (Imber, Encyclopedia of Genocide), so the caveat was rewritten
   to cite those verifiable sources instead of the unconfirmed Vryonis name. No
   fabricated source remains.
2. **tur-2 high end is single-partisan-sourced (disclosed, kept disputed).** The
   1.5M high relies principally on McCarthy, a documented partisan. The Wikipedia
   death range tops out at the same 1,500,000, giving a second touchpoint, but the
   high end remains the weakest link. Retained with disputed=true and an explicit
   caveat; not grounds for UNVERIFIED since the figure is genuinely published.
3. **"Cherished memory" framing (tur-2, disclosed).** This is editorial gloss on
   the muhacir national-memory standing, not a direct source quote. Flagged in the
   source caveat so it is not mistaken for a sourced phrase.

### Tier re-derivation (done before reading assigned tier)

- **tur-1 → EXT.** Deliberate state intent to destroy Armenians as a group;
  deaths from organized massacre + engineered death marches/starvation, NOT an
  unintended disease collapse. EXT confirmed; STR rejected. Assigned tier correct.
- **tur-2 → POL.** Aim was to clear conquered territory of the Muslim/Turkish
  group (regional ethnic cleansing), not annihilate the group everywhere — POL,
  not EXT. Substantial refugee deaths from disease/starvation weigh against EXT;
  the deliberate massacre/expulsion component keeps it out of a pure-STR read.
  POL confirmed. Assigned tier correct.

### Law 1 (both ledgers)

Satisfied: tur-1 perpetrator + tur-2 victim. Both populated.

### Verdict

Both events pass integrity → status VERIFIED. Country status VERIFIED. Two events
verified, zero flagged UNVERIFIED (three advisory flags raised and resolved
in-place; no quarantine needed). JSON rewritten with corrected caveats and
verification notes.
