# Bosnia and Herzegovina (BIH) — research notes

Built from scratch, 2026-06-19. Dual-ledger entry: 3 victim events, 2 perpetrator events.

## Scope decision (important)

The 1992–1995 Bosnian war was fought ON Bosnian soil among three Bosnian peoples
(Bosniaks/Muslims, Serbs, Croats) plus the neighbouring states. Assigning the
perpetrator ledger required a rule:

- **Bosnian Serb forces (VRS / Republika Srpska)** committed the worst crimes —
  Srebrenica, the 1992 cleansing, the Sarajevo siege — but were politically,
  militarily and logistically an arm of Belgrade's war. Their crimes are carried
  here on BIH's **victim** ledger (done to Bosnia's people) and belong on
  **Serbia's** perpetrator ledger, not BIH's.
- **Bosnian Croat forces (HVO / Herceg-Bosna)** ran an ethnic-cleansing campaign
  against Bosniaks but, per the ICTY Prlić judgment, "in concert with the
  leadership of Croatia" toward a Greater Croatia. They are Bosnian people
  acting on Bosnian soil, so this IS a BIH perpetrator entry (bih-4) — while the
  Croatia state link is noted, and Croatia's own file (HRV.json) carries the
  separate Ustaša genocide.
- **Bosniak-led government forces (ARBiH / RBiH)** committed real, convicted
  crimes against Serbs and Croats (Čelebići, Grabovica, Uzdol) — clearly a BIH
  perpetrator entry (bih-5).

This keeps the dual lens honest: Bosnia's principal-victim peoples (Bosniaks and
Croats) each also appear as perpetrators, without inflating to "balance."

## Victim ledger

- **bih-1 Srebrenica genocide (1995), EXT** — ~8,000 Bosniak men/boys killed by
  VRS under Mladić; ICMP has DNA-identified 6,981 (7,017 all methods). Ruled
  genocide by ICTY and ICJ. disputed: false despite RS/Serbia denial — best-
  documented atrocity, DNA + exhumations. Sources: UN observances page, ICMP.
- **bih-2 1992 ethnic cleansing / Prijedor & camps, EXT, UNVERIFIED** — no single
  agreed campaign-wide death total exists. Used firm sub-figures: Prijedor >3,500
  dead, Omarska camp ~700 dead (~6,000 inmates). RDC Bosnian Book of the Dead:
  ~96,000 total war dead, ~half civilian, ~82% of civilian victims Bosniak.
  Marked **UNVERIFIED** precisely because the campaign-wide toll is not a single
  sourceable number — toll.low/high hold the two firm sub-tolls, not a total.
  Sources: Wikipedia Prijedor + Omarska (tracing to ICTY cases), Every Casualty.
- **bih-3 Siege of Sarajevo (1992–96), WAR** — ~11,500 city dead inc. ~1,600
  children; some total counts ~13,952. Longest siege of a capital in modern war.
  Galić and Dragomir Milošević convicted at ICTY for terrorising civilians.
  Sources: ICTY OTP demographic report, Britannica.

## Perpetrator ledger

- **bih-4 Herceg-Bosna / Lašva Valley / Ahmići (1992–94), POL** — HVO cleansing
  of Bosniaks from central Bosnia; Ahmići massacre (16 Apr 1993) ~117–120 Bosniak
  civilians killed; ~1,300 Bosniak deaths across the Lašva Valley campaign.
  Convictions: Kordić (25y), Blaškić, Čerkez, and Prlić et al. six Herceg-Bosna
  leaders (JCE to ethnically cleanse, final appeal 2017). Sources: Wikipedia
  Ahmići (tracing ICTY), ICTY "Six Senior Herceg-Bosna Officials Convicted."
- **bih-5 ARBiH / Čelebići, Grabovica, Uzdol (1992–93), WAR** — Čelebići camp:
  Serb prisoners murdered/tortured/raped, Delić + Mucić + Landžo convicted
  (Delalić acquitted), no fixed death total. Grabovica: ICTY found ≥13 killed
  (up to 33 alleged). Uzdol: ICTY found ≥25 killed (up to 29). Halilović
  acquitted on command responsibility; direct perpetrators convicted in Bosnian
  courts. toll.low/high = Grabovica range. Sources: IRMCT Čelebići, Wikipedia
  Grabovica/Uzdol (tracing ICTY Halilović).

## Contested / could not fully verify

- **Overall war death toll**: wartime figure ~200,000 was ~double the later
  documented ~96,000 (RDC Bosnian Book of the Dead, judged "highly reliable" by
  an independent 2007 assessment). Used the name-based count, flagged in country
  note.
- **1992 campaign-wide death total**: genuinely unestablished as a single number;
  bih-2 left UNVERIFIED rather than inventing one.
- **Grabovica count**: ICTY found 13, local/press accounts up to 33 — kept as a
  disputed range.
- Genocide denial of Srebrenica is active in Republika Srpska and Serbia; not
  treated as a scholarly dispute (disputed: false), only noted.

## Real sources consulted

- UN, "About the 1995 Genocide in Srebrenica" — un.org observances.
- ICMP, "Srebrenica" — icmp.int (6,981 DNA / 7,017 / ~8,000 estimate).
- ICTY OTP, "Death Toll in the Siege of Sarajevo" demographic report (PDF).
- Britannica, "Siege of Sarajevo (1992–96)" and "Bosnian War."
- ICTY press, "Six Senior Herceg-Bosna Officials Convicted" (Prlić et al.).
- UN IRMCT, "Čelebići crimes" feature.
- Every Casualty Counts, "Bosnia-Herzegovina" (summarising RDC Book of the Dead).
- Wikipedia (tertiary, tracing to ICTY judgments): Ahmići massacre, Lašva Valley
  ethnic cleansing, Prijedor ethnic cleansing, Omarska camp, Grabovica massacre,
  Uzdol massacre, Operation Neretva '93, Čelebići camp, Naser Orić case.
- ICTY/RFE-RL background on Naser Orić (ARBiH crimes around Srebrenica) — noted
  but NOT used as a standalone event: his 2006 conviction (failing to prevent
  killing of Serb prisoners) was overturned on appeal in 2008, so it does not
  support a firm BIH-perpetrator toll; the Čelebići/Grabovica/Uzdol convictions
  carry bih-5 instead.

## Audit

Adversarial source-integrity + tier audit, 2026-06-19. Posture: every citation
treated as fake until proven otherwise. All 10 source objects were tested against
their live pages (or, where a page blocked automated fetch, against independent
search). **No source was found fabricated.** Every author/work/court record exists
and supports the specific field it is attached to. Two structural defects were
found and fixed; one event remains UNVERIFIED by design.

### Source-integrity results (all 10 sources real)
- **bih-1** UN observances page → confirms "up to 8,000" killed, ~30,000
  transferred, ICTY+ICJ genocide, 16 convicted. ICMP page → confirms "just over
  8,000" estimate, 6,981 DNA / 7,017 all methods. Both exact. **VERIFIED.**
- **bih-2** Prijedor (Wikipedia) → confirms >3,500 deaths (RDC 4,868 killed/missing,
  incl. 3,515 Bosniak civilians) and ~56,000→~9,000 non-Serb population drop.
  Omarska (Wikipedia) → confirms VRS operator, 25 May–21 Aug 1992, ~6,000 inmates,
  ~700 killed. Every Casualty → confirms 95,940 named dead, ~half civilian, ~82%
  of civilian victims Bosniak, total ~half of the 200,000 claim. All real.
- **bih-3** ICTY OTP Sarajevo demographic PDF → confirmed LIVE at the exact cited
  URL (title matches) via ICTY War-Demographics listing; PDF is binary-encoded so
  its text was not machine-read, existence/identity verified. Britannica →
  HTTP 403 to automated fetch but the page exists and content-verified via search
  (5 Apr 1992–29 Feb 1996, longest siege of a capital, ~11,540 killed, ~1,600
  children). Both real.
- **bih-4** Ahmići (Wikipedia) → confirms 16 Apr 1993, HVO, 117–120 Bosniak
  civilians, Lašva Valley culmination, Kordić 25y / Blaškić (reduced to 9y) /
  Čerkez. ICTY Prlić press release → confirms 29 May 2013, six convicted, JCE to
  permanently remove the Muslim population, "in concert with the leadership of
  Croatia" (Tuđman, Šušak named). Both real.
- **bih-5** IRMCT Čelebići feature → confirms camp near Konjic (Apr–Dec 1992),
  Serb prisoners murdered/tortured/raped by Bosnian Croat + Bosnian Muslim forces,
  Delić/Landžo/Mucić convicted, Delalić acquitted, no death total stated.
  Grabovica (Wikipedia) → confirms ARBiH 9th Brigade, 8–9 Sept 1993, ≥13 killed
  (up to 33), Halilović acquitted, Vlahovljak/Karagić/Rajkić convicted 13y each.
  Both real.

### Defects found and fixed
1. **bih-2 inverted toll band (structural bug).** Record stored `low: 3500,
   high: 700` — low GREATER than high — and the two source supports-tags were
   cross-wired (Prijedor >3,500 tagged toll.low, Omarska ~700 tagged toll.high).
   These are two DISTINCT sub-tolls (Prijedor municipality vs Omarska camp), not
   a band of one quantity. **Fixed:** re-ordered to `low: 700` (Omarska) /
   `high: 3500` (Prijedor) so low ≤ high, and swapped the supports-tags to match
   each figure to its source. Note rewritten to flag it as a quarantined
   non-range. Event kept **UNVERIFIED** — the campaign-wide total is genuinely
   unestablished as a single sourceable number, which is the correct reason for
   the flag (not a fake source).
2. **bih-5 over-claiming cite scope.** The Grabovica source cite claimed the
   single Grabovica URL covered "Grabovica massacre AND Uzdol massacre"; that URL
   covers only Grabovica (audit confirmed it does not mention Uzdol). **Fixed:**
   cite narrowed to Grabovica; Uzdol figures (≥25 court-found, up to 29 alleged)
   re-attributed to their actual separate sources (Wikipedia 'Uzdol massacre' +
   ICTY Halilović trial judgment), independently confirmed in the audit. Toll
   range 13–33 (Grabovica) remains fully sourced by the retained URL.

### Both-ends-of-toll check
- bih-1: low (ICMP) + high (UN) both sourced. OK.
- bih-2: two sub-figures, both sourced (Omarska, Prijedor). Non-range by design.
- bih-3: low (ICTY/Britannica ~11,500) + high (13,952 = RDC siege count: 9,429
  Bosniaks / 3,573 Serbs / 810 Croats / 140 others). High end previously had no
  explicit source object; provenance was unestablished in-file and is now
  recorded in the note (RDC), confirmed via search. NO source invented.
- bih-4: low (Ahmići 117, sourced) + high (~1,300 Lašva Valley campaign). High
  end has no dedicated source object; provenance recorded in note (Wikipedia
  'Lašva Valley ethnic cleansing' / ICTY Kordić & Čerkez), confirmed via search,
  held as an estimate consistent with disputed: true. NO source invented.
- bih-5: low/high (13–33 Grabovica) both sourced. OK.

### Tier re-derivation (done from facts BEFORE reading assigned tier)
All five tiers independently re-derived and CONFIRMED correct; no change:
- bih-1 EXT — judicially established genocide (ICTY+ICJ), mass extermination.
- bih-2 EXT — systematic killing/camps/deportation to destroy & remove a group.
  Explicitly checked STR-vs-EXT: these are KILLINGS (executions, camp murder,
  beatings/starvation as method of murder), NOT a disease/famine-driven toll, so
  EXT not STR.
- bih-3 WAR — sustained terror-shelling/sniping of a besieged civilian
  population; war crime, not a campaign to destroy the group as such.
- bih-4 POL — ethnic-cleansing campaign (massacres + expulsion + camps) to remove
  a group from claimed territory.
- bih-5 WAR — POW murder/torture + massacres of enemy civilians in offensives;
  dozens killed, no group-destruction intent.
No disease-driven event present, so no EXT→STR reclassification was warranted.

### Dual-ledger / law-1 check
Both ledgers are populated and the populated entries are evidence-backed, not
invented for balance: 3 victim events (bih-1/2/3) + 2 perpetrator events
(bih-4 Bosnian Croat HVO, bih-5 Bosniak-led ARBiH). The scope rule (VRS/RS crimes
carried on BIH victim + Serbia perpetrator, not double-counted here) is sound and
left intact.

### Final verdict
- bih-1 VERIFIED · bih-2 UNVERIFIED (quarantined non-range toll; sources real) ·
  bih-3 VERIFIED · bih-4 VERIFIED · bih-5 VERIFIED.
- **Country status: UNVERIFIED** (one event — bih-2 — not VERIFIED).
- Sources verified: 10. Events flagged (UNVERIFIED): 1 (bih-2). Fabricated
  sources found: 0.
