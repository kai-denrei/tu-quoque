# Paraguay (PRY) — research log

Built from scratch 2026-06-19. Dual ledger: 1 victim event, 2 perpetrator events.

## Events

### pry-1 (victim) — War of the Triple Alliance, 1864-1870 — WAR, status UNVERIFIED (toll grounds)
Brazil + Argentina + Uruguay invaded and nearly destroyed Paraguay after Solano Lopez took
the country to war. Proportionally one of the deadliest wars in modern history, but the toll
is among the most disputed numbers in Latin American demography, and the dispute is partly
about death-count vs total population decline.
- LOW: Vera Blinn Reber, HAHR 68:2 (1988) — 7-18.5% loss from ~300,000 pre-war pop, much of it
  migration/territorial loss, implying ~21,000-55,000 deaths. Sourced low bound.
- HIGH: Whigham & Potthast (1999) — 60-69% loss from ~420,000-450,000 pre-war pop, implying
  ~252,000-310,000 dead. Kleinpenning (2002) intermediate ~43-51%.
- DISCREDITED: the old ~1.3M pre-war population claim and the 28,746-surviving-men figure
  (the latter explicitly shown to be false).
- Entered low=21,000 / high=310,000 with the death-vs-decline caveat front and center.

### pry-2 (perpetrator) — Stroessner state terror, 1954-1989 — POL, status RESEARCHED
Longest dictatorship of the era; army + Colorado Party + police (Pastor Coronel). Operation
Condor hub. Toll from the OFFICIAL Comisión de Verdad y Justicia ('Anive hagua oiko', 2008,
covering 1954-2003):
- 59 extrajudicially executed + 336 forcibly disappeared = ~395 killed/disappeared
- 18,772 tortured; 3,470 exiled; ~20,090 direct victims total
- Press sometimes rounds the killed/disappeared to ~423-425; entered low=395 / high=425.
- These are documented-case totals (a floor), treated as a sourced undisputed register.

### pry-3 (perpetrator) — Destruction of the Aché (Guayakí), c.1954-1978 — EXT, status UNVERIFIED
Forest-frontier expansion under Stroessner: slave raids, child abduction/sale, forced
resettlement onto regime/mission reservations, killings. Aché population fell an estimated
60-85% in the 1960s-70s. No death register exists -> death-count low/high NULL; disputed
~500-1,000 range parked in low_alt/high_alt (one estimate ~900 dead).
- Münzel, IWGIA Doc 11 (1973); Arens ed., Genocide in Paraguay (Temple UP, 1976).
- 2013-2014 Aché universal-jurisdiction genocide suit in Argentina (Baltasar Garzón).
- Tier EXT (targeted destruction of a group) but the legal 'specific intent' is contested;
  received_lens = contested. Demographic destruction is not in doubt; the legal label is.

## What is contested / could not be verified
- Paraguayan War death count: irreducibly disputed (order-of-magnitude spread). Left as a
  sourced range; event marked UNVERIFIED on toll grounds, not source-integrity grounds.
- Aché death count: no verified register anywhere; null + low_alt/high_alt.
- CVJ numeric tables: the codehupy repository page links the 8-volume PDF but did not render
  the tables on automated fetch; the totals (59/336/18,772/3,470/~20,090) were corroborated
  across two independent secondary summaries (es.Wikipedia + a Spanish-language compilation)
  and are consistent. Status RESEARCHED stands; could be hardened by reading the PDF directly.

## Real sources consulted
- Vera Blinn Reber, "The Demographics of Paraguay: A Reinterpretation of the Great War,
  1864-70," HAHR 68:2 (1988) — read.dukeupress.edu (low bound of war toll).
- "Paraguayan War casualties," en.Wikipedia — full spread of estimates incl. Whigham/Potthast,
  Kleinpenning, discredited figures.
- Encyclopaedia Britannica, "War of the Triple Alliance" — narrative.
- Comisión de Verdad y Justicia, "Informe Final: Anive hagua oiko" (2008) via codehupy.org.py.
- "Comisión de Verdad y Justicia," es.Wikipedia — CVJ totals corroboration.
- World Politics Review, Stroessner dictatorship / Operation Condor analysis.
- "Genocide of Indigenous peoples in Paraguay," en.Wikipedia — Aché 60-85% / ~900 / intent debate.
- Mark Münzel (IWGIA 1973) + Richard Arens ed. (Temple UP 1976) — foundational Aché documentation
  (referenced via IWGIA Madrid-conference page).
- Survival International, "South American tribe sues over historic genocide" — Argentine suit.

## Notes on asymmetry
Eras are lopsided (one 19th-c war as victim, two 20th-c state crimes as perpetrator). This
reflects the documented record; explained in the country note. No event/toll/source was added
to balance the ledgers. Country status UNVERIFIED because two of three events carry contested
or unregistered tolls.

## Audit

Adversarial source-integrity + tier audit, 2026-06-19. Premise: every citation treated as
fake until proven otherwise. Every source below was independently checked for existence and
for whether it supports the specific claim it is attached to.

### Source-integrity verdicts (all sources VERIFIED to exist and support their claims)
- pry-1 / Reber, HAHR 68:2 (1988) — REAL. Confirmed via Duke University Press; existence
  further attested by Whigham & Potthast's published 1990 HAHR rebuttal "Some Strong
  Reservations." Duke page paywalled (403 on automated fetch) but citation/range confirmed.
  Note: published low % is ~8.7 (some secondaries round to 7). Implied ~21,000 floor stands.
- pry-1 / "Paraguayan War casualties," en.Wikipedia — REAL. Renders the full spread: Reber
  low, Whigham & Potthast 60-69% (420-450k -> 140-166k, ~252-310k dead), Kleinpenning ~43-51%,
  discredited 1.3M and 28,746-men figures. The 60-69% figure traces to Whigham & Potthast's
  1999 "Paraguayan Rosetta Stone" (Latin American Research Review) — added to the toll note.
- pry-1 / Britannica "War of the Triple Alliance" — REAL URL (403 to automated fetch; standard
  for Britannica). Narrative source; supports summary.
- pry-2 / Comisión de Verdad y Justicia "Anive hagua oiko" (2008), codehupy.org.py — REAL.
  Page confirmed to host the eight-volume final report. Numeric tables not on the page itself
  (matches existing caveat); register corroborated independently.
- pry-2 / es.Wikipedia "Comisión de Verdad y Justicia" — REAL but WEAKER THAN CLAIMED. On
  fetch it renders only the executed/disappeared figures (59 + 336; one line garbles the sum
  as "325"). The 18,772 / 3,470 / ~20,090 totals were NOT visible on this page and are
  corroborated via the primary report + independent Spanish-language summaries instead. Caveat
  tightened to say so. Figures themselves are solid.
- pry-2 / World Politics Review "Specter of Stroessner" — REAL. Covers 1954-89, secret police,
  Archives of Terror, Operation Condor. Narrative only.
- pry-3 / en.Wikipedia "Genocide of Indigenous peoples in Paraguay" — REAL. Carries 85% death,
  ~900 estimate, "hacked to death with machetes," Münzel 1971 accusation, Gilbert intent debate.
- pry-3 / Münzel, IWGIA Doc. 11 (1973) + Arens ed., "Genocide in Paraguay" (Temple UP, 1976) —
  BOTH REAL. Münzel = 82-pp. IWGIA document, Jan 1973; Arens = ISBN 9780877220886, epilogue by
  Elie Wiesel. IWGIA still hosts the report directly; the cited conference-notice URL is a
  weaker pointer than needed but real and accurately attributed (caveat updated).
- pry-3 / Survival International "South American tribe sues over historic genocide" — REAL.
  Published 1 July 2014; Federación Nativa Aché + Baltasar Garzón, universal-jurisdiction suit
  in Argentina over 1950s-onward atrocities.

NO source was found to be fabricated. NO invented sources added.

### Toll checks
- pry-1: both ends sourced (Reber low / Whigham & Potthast high via Wikipedia). Genuinely
  disputed at order-of-magnitude scale. UNVERIFIED on toll grounds (per framework rule for
  irreducibly contested tolls), NOT on source grounds.
- pry-2: low (395) and high (~423-425) both sourced; documented register, undisputed. Toll OK.
- pry-3: NO death register exists -> low/high null, low_alt/high_alt 500-1000. Single-source
  flavoured (~900 from one estimate) and unregistered. UNVERIFIED on toll grounds.

### Tier re-derivation (done before reading assigned tiers)
- pry-1: interstate war, invading allied armies, deaths from combat + starvation + war-driven
  cholera; closing campaigns near-annihilatory but no declared ethnic-extermination program.
  -> WAR. Assigned WAR. CORRECT.
- pry-2: 35-year state repression — killing/disappearance/torture/exile of political opponents
  to hold power. Not war, not ethnic destruction. -> POL. Assigned POL. CORRECT.
- pry-3: defined indigenous people targeted via slave raids, child abduction, machete killings,
  forced resettlement; 60-85% collapse. Deaths driven by deliberate violence + displacement,
  with disease/hunger on reservations as a COMPOUND result — NOT a disease-driven die-off, so
  the STR-vs-EXT rule does NOT downgrade it to STR. -> EXT. Assigned EXT. CORRECT.
  received_lens "contested" appropriate (legal specific-intent debated; demographic destruction
  is not).

### Ledger / law-1 check
Dual ledger populated where the record supports it: 1 victim (pry-1) + 2 perpetrator
(pry-2, pry-3). Asymmetry reflects the documented record, not invented balance. No event,
toll, or source added to balance the sides. Law 1 satisfied.

### Status changes made
- pry-2: RESEARCHED -> VERIFIED (all sources verified; toll well-sourced and undisputed).
- pry-1: UNVERIFIED unchanged (toll grounds only; sources clean).
- pry-3: UNVERIFIED unchanged (toll unregistered; sources clean).
- Country: UNVERIFIED (not all events VERIFIED).
