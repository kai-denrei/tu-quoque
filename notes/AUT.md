# Austria (AUT) — research notes

Built from scratch 2026-06-19. Dual ledger: 2 victim events, 2 perpetrator events. Country status RESEARCHED.

## The framing problem (and how it was resolved)

Austria's hard case is the Anschluss. From March 1938 to 1945 Austria was legally part of the
German Reich, so Nazi-era crimes braid into Germany's. The atlas needs Austria entered as a
distinct agent, not as a sub-clause of DEU. Two analytically clean Austrian threads make this
possible:

1. **Victim:** crimes done to Austrians / on Austrian soil — the Holocaust of Austria's Jews,
   and the Hartheim 'euthanasia' centre near Linz.
2. **Perpetrator:** the documented OVERREPRESENTATION of Austrians in the Nazi killing machinery
   (Bukey's figures: ~8% of the Reich's population, ~14% of the SS, ~40% of the staff of the
   killing operations; the chief organisers — Hitler, Eichmann, Kaltenbrunner, Globocnik,
   Brunner — were Austrian). Operation Reinhard, directed by the Austrian Globocnik, is the
   sharpest single event to carry this, even though its victims were overwhelmingly Polish Jews.
   Plus a pre-Nazi Austrian-state case: the k.u.k. army's 1914 atrocities in Serbia.

This also lets the entry do real work against the postwar Austrian "first victim" myth
(Moscow Declaration 1943 framing), which held until the 1980s–90s (Waldheim affair; Chancellor
Vranitzky's 1991 admission of Austrian co-responsibility — referenced in a Washington Post piece
surfaced in search but not used as a toll source).

## Events and what is/ isn't settled

### aut-1 — Holocaust of Austria's Jews (victim, EXT) — RESEARCHED
- Toll ~65,000–66,000. EHRI Portal: "around 66,000 Austrian Jews perished." USHMM gives the
  mechanism figures (192,000 in 1938; ~57,000 by Dec 1939 after emigration; ~35,000 deported from
  Vienna to eastern ghettos; >15,000 to Theresienstadt; ~7,000 left by Nov 1942) but no single
  total. ~65,000 is the commonly cited round figure; range kept narrow and undisputed.
- Prewar population given variously as 192,000 (USHMM) or ~206,000 (EHRI, incl. German refugees) —
  both noted in toll.note.

### aut-2 — Hartheim 'euthanasia' centre (victim, EXT) — RESEARCHED
- Official memorial (schloss-hartheim.at): ~30,000 murdered 1940–1944. Aktion T4 + Aktion 14f13 +
  Eastern forced labourers. The memorial does NOT break the 30,000 into T4 vs 14f13.
- Low end 18,269 = the contemporaneous internal "Hartheim Statistics" T4 count to the Aug 1941
  halt (via Wikipedia 'Hartheim killing centre', tracing to the captured T4 document). High end
  30,000 = memorial's full-period total. Tier EXT (deliberate killing of disabled people as such),
  not STR.

### aut-3 — Operation Reinhard / Globocnik (perpetrator, EXT) — RESEARCHED
- USHMM 'Operation Reinhard': ~1.7M total (~1.5M in the three camps: Belzec ≥434,508 [Höfle
  Telegram], Sobibor ≥167,000, Treblinka ~925,000). Globocnik directed it autumn 1941–late summer
  1943.
- Globocnik's Austrian nationality / Trieste (Austria-Hungary) birth confirmed via Wikipedia.
- The overrepresentation figures (8% / 14% / 40%) attributed to Evan Burr Bukey, *Hitler's
  Austria* (UNC Press, 2000) — confirmed real book via publisher catalogue (uncpress.org) and
  multiple reviews; the exact 8/14/40 phrasing surfaced in search snippets summarising the book
  and is also associated with the Simon Wiesenthal Center. CAVEAT recorded: per-camp staffing
  proportions vary by source; URL is the publisher page, not page-level. This is the load-bearing
  attribution for placing a non-Austrian-victim atrocity on Austria's ledger — flagged honestly.
- Explicitly NOT claiming the victims were Austrian; toll.note and relevance state plainly that
  this is an Austrian-LED crime against others.

### aut-4 — Austro-Hungarian atrocities in Serbia 1914 (perpetrator, WAR) — RESEARCHED
- ~3,500–4,000 Serb civilians killed in the 1914 invasion/short occupation; attributed to Alan
  Kramer, *Dynamic of Destruction* (Oxford, 2007), via Wikipedia 'Serbian campaign (1914)'.
- Šabac specifics (~200 dead, ~80 shot in a churchyard 17 Aug 1914) from the habsburger.net
  "war crimes of the Habsburg army" page (Austrian National Library resource).
- Tier WAR: collective reprisal terror against an enemy population, not extermination of Serbs as
  a people (not EXT).

## What could NOT be fully verified / caveats carried in the JSON

- **habsburger.net page (aut-4 source):** returned HTTP 403 on a direct WebFetch attempt; its
  content was nonetheless retrieved via an earlier successful fetch and via search snippets. URL
  kept with a caveat. Not treated as a toll-anchoring source — the 3,500–4,000 number is carried
  by the Kramer-via-Wikipedia citation; habsburger.net only supports the Šabac summary detail.
- **Anu Museum page** (spotlight.anumuseum.org.il) returned 403 on fetch; its overrepresentation
  figures matched Bukey, so Bukey is used as the scholarly anchor instead.
- **1914–18 full Serbian occupation toll:** a much larger figure circulates (~30,000 civilians
  killed by Austro-Hungarian forces over the whole war, per a popular-history source) but I did
  NOT find a clean scholarly anchor for it in this session, so the event is scoped to the 1914
  campaign with a well-sourced number and the broader toll left explicitly unquantified in
  toll.note. No number invented to inflate.
- **Bukey 8/14/40 figures:** real book, figures widely cited, but I read summaries/reviews, not
  the page itself; caveat recorded in the source object.

## Real sources consulted this session
- USHMM Holocaust Encyclopedia: 'Austria'; 'Operation Reinhard (Einsatz Reinhard)' (fetched).
- EHRI Portal, country page 'Austria' (fetched).
- Lern- und Gedenkort Schloss Hartheim, official memorial 'Euthanasia Centre 1940–1944' (fetched).
- Wikipedia: 'Hartheim killing centre'; 'Odilo Globocnik'; 'Serbian campaign (1914)' (fetched).
- Evan Burr Bukey, *Hitler's Austria* (UNC Press, 2000) — publisher catalogue + reviews (search).
- habsburger.net (Welt der Habsburger / ONB), 'war crimes of the Habsburg army' (fetched; later 403).
- Alan Kramer, *Dynamic of Destruction* (Oxford, 2007) — cited via Wikipedia for the 1914 toll.
- (Surfaced, not used as toll sources: Washington Post 1991 'Austria Admits Role in Holocaust';
  Anu Museum 'Holocaust / Jewish Communities of Austria' [403 on fetch].)

## Audit

Adversarial source-integrity + tier audit, 2026-06-19 (kai-denrei). Working assumption:
every citation FAKE until proven otherwise. Every source independently re-fetched/re-searched
this session; every author and work confirmed real and confirmed to support its specific claim.
Country status promoted RESEARCHED → VERIFIED (all 4 events VERIFIED). No sources invented;
no numbers changed; no events quarantined.

### aut-1 — Holocaust of Austria's Jews (victim, EXT) → VERIFIED
- **EHRI Portal** (toll.high) re-fetched: confirms "around 66,000 Austrian Jews perished in the
  Holocaust" verbatim, ~206,000 Jews in 1938 (incl. German refugees), ~130,000 fled by Sept 1939.
  Supports toll.high exactly.
- **USHMM 'Austria'** (summary) re-fetched: confirms 192,000 in 1938, 57,000 by Dec 1939, ~35,000
  deported to eastern ghettos (Minsk/Riga/Lodz), >15,000 to Theresienstadt, ~7,000 by Nov 1942 —
  every mechanism figure verbatim. The ~65,000 low end is the conventional round figure consistent
  with USHMM's mechanism; ~66,000 high is EHRI. Both ends sourced.
- **Tier re-derived independently before reading assigned:** deliberate destruction of a group as
  such = EXT. Not disease-driven (the note already says "hunted, not collapsed by disease"). EXT
  CORRECT, unchanged.

### aut-2 — Hartheim 'euthanasia' centre (victim, EXT) → VERIFIED
- **Schloss Hartheim memorial** (toll.high, kind=primary) re-fetched: confirms "Between 1940 and
  1944 around 30,000 people were murdered in Hartheim Castle" and the four victim groups (T4,
  14f13, special-treatment prisoners, Eastern forced labourers). Supports toll.high exactly.
- **Wikipedia 'Hartheim killing centre'** (toll.low) re-fetched: confirms 18,269 killed May 1940 –
  1 Sept 1941 per the captured T4 "Hartheim Statistics," and 30,000 total estimate. Caveat
  (tertiary aggregator tracing to the contemporaneous T4 document) is accurate and retained.
  Both toll ends sourced.
- **STR-vs-EXT stress test (flagged by the audit brief):** victims were GASSED — deliberately
  killed for who they were (disabled) or for being worn-out prisoners — NOT killed by disease or
  structural neglect. The "disease-driven = STR" rule does NOT apply. EXT CORRECT, unchanged.

### aut-3 — Operation Reinhard / Globocnik (perpetrator, EXT) → VERIFIED
- **USHMM 'Operation Reinhard'** (toll.high) re-fetched: confirms ~1.7M total and ~1.5M in the
  three camps with exact per-camp figures (Belzec ≥434,508, Sobibor ≥167,000, Treblinka ~925,000),
  and "Globocnik directed Operation Reinhard between the autumn of 1941 and the late summer of
  1943" verbatim. Supports toll.high exactly.
- **Wikipedia 'Odilo Globocnik'** (toll.low): confirms born Trieste (Austria-Hungary), nationality
  Austrian, leader of Operation Reinhard, "complicit in the extermination of more than 1.5 million
  Jews." Supports toll.low and the Austrian-attribution rationale. Caveat accurate.
- **Bukey, *Hitler's Austria* (UNC Press)** (summary, scholarly): book CONFIRMED REAL via multiple
  independent academic reviews (Cambridge Core *Central European History* & *Austrian History
  Yearbook*; *Journal of Modern History* via uchicago; H-Net review; Internet Archive full text;
  ISBN 0-8078-2516-6 hardback / 9780807853634 paperback). The 8%/14%/40% figures CONFIRMED and
  explicitly attributed to this book in independent search results ("although Austrians comprised
  only 8 percent of the population of Hitler's Reich, they made up 14 percent of SS members and
  40 percent of those involved in the Nazis' killing operations"). NOTE: the cited URL
  (uncpress.org publisher catalogue) now returns HTTP 403 — but the book and figures are
  independently corroborated, so this is a dead-link nuisance, not a fabrication. Caveat in the
  source object already flags the URL is the catalogue page, not page-level; left as-is.
- **Tier re-derived:** purpose-built extermination of a people = the defining EXT case. EXT
  CORRECT, unchanged. Both toll ends sourced.

### aut-4 — Austro-Hungarian atrocities in Serbia 1914 (perpetrator, WAR) → VERIFIED
- **Wikipedia 'Serbian campaign (1914)'** (toll.high) re-fetched: confirms verbatim "between 3,500
  and 4,000 Serb civilians were killed in executions and acts of random violence by marauding
  troops," footnote attributing to Kramer, *Dynamic of Destruction* (OUP), p. 140. Supports both
  toll ends (the figure IS a range). NOTE: Wikipedia's footnote cites the 2008 OUP printing; the
  JSON says "Oxford, 2007" (the original publication year). The work is real in both years — this
  is an edition-year nuance, not a falsification; left as-is. Kramer (TCD) and the book are real
  and widely cited.
- **habsburger.net / Welt der Habsburger (ONB)** (summary, scholarly): re-fetched SUCCESSFULLY this
  session (the prior 403 cleared). Confirms Šabac ~200 civilians killed, ~80 shot in the church
  square on 17 Aug 1914, Anton Holzer quote that reprisals were "arranged and planned at the
  highest level." Independently corroborated by a parallel web search. The "403 on direct fetch"
  caveat is now stale but harmless; left as-is for the record.
- **Single-anchor toll flag:** the 3,500–4,000 range rests on a SINGLE scholarly source (Kramer) —
  it is a low/high range from one author, not two independent endpoints. This is honestly handled:
  `disputed: true` is set and toll.note scopes the figure strictly to the 1914 campaign, leaving
  the broader 1914–18 occupation toll explicitly unquantified rather than inventing a number.
  Acceptable; no invented second source added.
- **Tier re-derived:** collective reprisal terror against an enemy civilian population during
  invasion — not a project to exterminate Serbs as a people, not disease-driven. WAR CORRECT
  (not EXT, not STR), unchanged.

### Cross-cutting findings
- **Ledger balance (law 1):** both ledgers populated by the record itself — victim (aut-1, aut-2)
  and perpetrator (aut-3, aut-4). No invented balance.
- **No source failed falsification.** Every work, author, and figure was confirmed against a live
  source this session. Two cited URLs are degraded (uncpress.org 403; habsburger.net's old 403
  noted in a caveat that has since cleared) but neither undermines a claim — both are corroborated
  elsewhere. No event downgraded to UNVERIFIED; no toll.note quarantine required.
- **Tiers:** all four independently re-derived BEFORE reading the assigned tier; all four matched
  the assigned value. No tier or tier_reasoning changed.
