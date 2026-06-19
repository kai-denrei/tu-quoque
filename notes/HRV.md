# Croatia (HRV) — research log

Built from scratch 2026-06-19. Status: RESEARCHED. 4 events, 2 per ledger.

## Editorial shape

Croatia is a near-ideal dual-ledger country: within ~50 years its people were both
agents of a genocide and targets of mass killing, and national memory is sharply
selective about which half it keeps. Both ledgers are genuinely full — no
asymmetry to explain away, no need to pad either side.

### Perpetrator ("In their name")
1. **hrv-1 — Ustaša genocide of Serbs, Jews, Roma / Jasenovac (1941–45), EXT.**
   The central perpetrator event. NDH puppet state under Pavelić; Jasenovac run by
   Croatians, not Germans — that detail matters and is stated plainly.
2. **hrv-2 — Operation Storm killings/expulsion of Krajina Serbs (1995), WAR.**
   The dual-lens sharpener: Croatia's triumphal Victory Day holiday vs. hundreds of
   civilian dead and up to ~200k Serbs expelled.

### Victim ("Done to them")
3. **hrv-3 — Fall of Vukovar + Ovčara hospital massacre (1991), WAR.**
   JNA + Serb paramilitaries. Founding wound of Croatian victim memory.
4. **hrv-4 — Bleiburg repatriations + death marches (1945), POL.**
   Tito's Partisans. The mirror of Jasenovac — many dead had served the NDH, so the
   same population sits on both ledgers. This is the key relevance line.

## Tolls and the contested numbers

- **Jasenovac / NDH (hrv-1) — heavily disputed, flagged disputed:true.**
  - Toll range entered is for *Serb victims of the whole regime*: USHMM 320,000–340,000;
    Friedländer 300,000–400,000 (1941–early 42). Used 300k–400k as low/high.
  - Plus >30,000 Croatian Jews, ~26,000 Roma (in note).
  - Jasenovac site specifically: USHMM 77,000–99,000; Memorial name-list ~83,145.
  - Political extremes documented and explicitly EXCLUDED from the toll: denialist
    ~1,500 (low end of propaganda) and Serbian-nationalist 700,000–1,100,000 (high).
    Kept in the note as propaganda, not as the figure.
- **Operation Storm (hrv-2) — disputed:true.** ICTY 324 civilians killed (low);
  Croatian Helsinki Committee 677 / sometimes 667 (high). Displacement (~150k–200k,
  up to 250k) kept in note as displacement, NOT folded into the death toll.
  Legal nuance flagged: Gotovina/Markač convicted 2011, acquitted on appeal 2012 (3–2)
  on command-responsibility grounds — the acquittal did not find that no civilians
  were killed. Lower-level convictions exist (Grubori killings).
- **Vukovar/Ovčara (hrv-3) — disputed:false.** Ovčara toll: ICTY-confirmed 194 killed
  (low) vs ~255–264 taken from hospital and not seen again (high); ~200 remains
  recovered. Siege total ~3,000 kept separate in note. Mrkšić & Šljivančanin convicted.
- **Bleiburg (hrv-4) — disputed:true.** 30,000–100,000 range (wide due to destroyed
  records + politicised counting, per Tomasevich, who himself estimated ~50,000).
  Tezno mass grave ~15,000 (discovered 1999 during highway construction).

## Could NOT fully verify / caveats

- **Friedländer 300k–400k figure**: real and standard, but accessed via secondary
  reference (Wikipedia "WWII persecution of Serbs") rather than a direct page image,
  so no page number is given and source URL is null. Flagged in source caveat.
- **Bleiburg low/high** rest on tertiary aggregators (Wikipedia "Bleiburg
  repatriations" / "Tezno massacre"), which themselves carry Tomasevich and the
  Slovenian Commission on Concealed Mass Graves (2007). Flagged as caveats; the
  underlying scholarship is sound but I did not reach the primary documents directly.
- Did not separately tabulate the broader 1914–45 Croatian Jewish death toll beyond
  USHMM's ">30,000"; left as note text rather than its own event (subsumed under hrv-1).

## Real sources consulted (web research, June 2026)

- USHMM Holocaust Encyclopedia, "Jasenovac" —
  https://encyclopedia.ushmm.org/content/en/article/jasenovac
- Balkan Insight, "Croatia's Jasenovac Death Toll: A Political Numbers Game" (2018) —
  https://balkaninsight.com/2018/01/31/croatia-s-jasenovac-death-toll-a-political-numbers-game-01-31-2018/btj/
- UN IRMCT, "Vukovar Crimes" — https://www.irmct.org/en/mip/features/vukovar
- Balkan Insight, "The Fall of Vukovar" (2021) —
  https://balkaninsight.com/2021/11/18/the-fall-of-vukovar-oral-history-of-a-croatian-towns-destruction/
- Balkan Insight, "Croatian Serbs Commemorate Victims of 1995 Operation Storm" (2021) —
  https://balkaninsight.com/2021/08/04/croatian-serbs-commemorate-victims-of-1995-operation-storm/
- ICTY Appeals Chamber press release, Gotovina/Markač acquittal (2012) —
  https://www.icty.org/en/press/appeals-chamber-acquits-and-orders-release-ante-gotovina-and-mladen-marka%C4%8D
- Wikipedia, "Bleiburg repatriations" — https://en.wikipedia.org/wiki/Bleiburg_repatriations
- Wikipedia, "Tezno massacre" — https://en.wikipedia.org/wiki/Tezno_massacre
- (background) Wikipedia "World War II persecution of Serbs" for the Friedländer figure.

## Audit

Adversarial source-integrity + tier audit, 2026-06-19. Premise: every citation
fake until proven otherwise. Every source was independently re-fetched/re-searched
and each tier re-derived from the facts before reading the assigned one.

**Verdict: country VERIFIED. All 4 events VERIFIED. No invented sources found.**

### Source integrity (each source falsification-tested)
- **hrv-1 / USHMM "Jasenovac"** — fetched live. Confirms Jasenovac 77,000–99,000
  (Serbs 45–52k, Jews 12–20k, Roma 15–20k, Croat/Muslim opponents 5–12k) and
  broader regime 320,000–340,000 Serbs + >30,000 Jews. Cite is **exact**. VERIFIED.
- **hrv-1 / Balkan Insight "Jasenovac Death Toll: A Political Numbers Game" (2018)** —
  direct fetch 403 (bot block, not absence). Confirmed real via search: article
  exists, Memorial name-list **83,145** confirmed, political-claim span 1,500 to
  1.1 million confirmed. Supports toll.high. VERIFIED. Bias (journalism, used for the
  numbers-game survey) disclosed in caveat. Good.
- **hrv-1 / Saul Friedländer, The Years of Extermination (2007)** — book and author
  confirmed real and standard. The 300,000–400,000 (1941–early 1942) figure is the
  one attributed to Friedländer in Wikipedia "World War II in Yugoslavia." Cite is
  honest that access is secondary and URL null. Faithfully represented. VERIFIED;
  caveat tightened to record the audit finding.
- **hrv-2 / Balkan Insight "Croatian Serbs Commemorate Victims of 1995 Operation
  Storm" (2021)** — confirmed real. 677 (Croatian Helsinki Committee), ~200,000
  displaced, ICTY 324 all attributed in the piece. Supports toll.high. VERIFIED.
- **hrv-2 / ICTY Appeals Chamber acquittal of Gotovina & Markač (16 Nov 2012)** —
  fetched live. Confirms 2011 conviction for JCE to forcibly remove Serb civilians
  from Krajina, 2012 reversal, 2 dissenting judges (= the 3–2 in the toll note).
  Supports summary. VERIFIED. Caveat (acquittal ≠ finding no crimes) is accurate.
- **hrv-3 / UN IRMCT "Vukovar Crimes"** — fetched live. Confirms >200 non-Serbs
  taken from hospital, **194 killed** near Ovčara, Mrkšić & Šljivančanin convicted.
  Cite **exact**. Supports toll.low. VERIFIED.
- **hrv-3 / Balkan Insight "The Fall of Vukovar" (2021)** — confirmed real. 86-day
  siege, ~3,000 dead incl. 86 children. Supports summary. VERIFIED.
- **hrv-4 / Wikipedia "Bleiburg repatriations"** — fetched live. Confirms 30,000–
  100,000, Partisan perpetrators, Croatian/Slovene/Montenegrin/Serb collaborationist
  victims, Tezno ~15,000, and Tomasevich's inflation/minimization caveat. VERIFIED.
- **hrv-4 / Wikipedia "Tezno massacre"** — fetched live. Confirms ~15,000, Yugoslav
  Partisans, NDH POW/civilian victims, antitank trench found 1999 during motorway
  construction near Maribor. VERIFIED; caveat extended.

### Toll dual-source check
- hrv-1: low (300k) via USHMM 320–340k bracket; high (400k) via Friedländer +
  Balkan Insight. Both ends sourced. OK.
- hrv-2: low (324) = ICTY (attributed in the BIRN piece + grounded in the court
  record); high (677) = Croatian Helsinki Cttee via BIRN. Both ends sourced. OK.
- hrv-3: low (194) = IRMCT court figure; high (264) = "taken and not seen again,"
  grounded in the same IRMCT/ICTY record (">200 taken"). OK. disputed:false stands.
- hrv-4: **single-range caveat noted** — both 30,000 and 100,000 come from the one
  Bleiburg tertiary range (Tezno ~15k is a corroborating sub-figure, not an
  independent high/low). Range traces to Tomasevich and is honestly flagged tertiary;
  acceptable, not a fail, but it is the weakest sourcing in the file. Recorded in the
  Tezno source caveat in the JSON.

### Tier re-derivation (done before reading assigned tiers)
- hrv-1 → EXT. Deliberate destruction of Serbs/Jews/Roma as groups (camps, massacres,
  forced conversion). Genocide, NOT disease-driven. Assigned EXT. **Correct.**
- hrv-2 → WAR. Wartime atrocity + expulsion against enemy civilians, not ethnic
  annihilation as such; expulsion correctly kept in note, not folded into deaths.
  Assigned WAR. **Correct.**
- hrv-3 → WAR. Siege + execution of captured wounded/POWs/civilians. Assigned WAR.
  **Correct.**
- hrv-4 → POL. Political liquidation of defeated/presumed collaborators by victors,
  not ethnic destruction; not disease-driven (no STR/EXT trap). Assigned POL.
  **Correct.**
- No tier corrections required.

### Ledger balance (law 1)
Both ledgers genuinely populated from the record: 2 perpetrator (hrv-1, hrv-2),
2 victim (hrv-3, hrv-4). No invented balance; the doubling is real (NDH dead at
Bleiburg sit on both ledgers). OK.

### Net changes written
- All 4 event statuses RESEARCHED → VERIFIED.
- Country status RESEARCHED → VERIFIED.
- hrv-1 Friedländer caveat and hrv-4 Tezno caveat extended with audit findings.
- JSON re-validated (well-formed) after edits.
