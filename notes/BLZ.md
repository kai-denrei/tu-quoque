# Belize (BLZ) — research notes

Built from scratch on 2026-06-19. Real web research (WebSearch + WebFetch).

## Structural finding: the asymmetry is real, not a gap
There was no sovereign Belizean state until independence in 1981. For the
entire span in which mass atrocity occurred on this soil the ruling power was
first **Spain** (Maya conquest) and then **Britain** (slavery, the colonial
wars on the Maya). So the **victim ledger** carries the documented mass-death;
the **perpetrator ledger** is genuinely thin. The closest thing to a LOCAL
ruling elite committing atrocity is the British settler-loggers ("Baymen") who
built the timber colony on enslaved African labour — so slavery is entered in
BOTH ledgers (blz-2 victim / blz-4 perpetrator). Independent Belize (post-1981)
is a small parliamentary democracy with no documented mass-atrocity event; US
State Dept human-rights reports name police killings / prison conditions, not
mass violence. **No Belizean state crime was invented to balance the ledger.**

## Events entered
- **blz-1 (victim, STR, UNVERIFIED)** — Maya collapse + 1707 removal of Tipu.
  Disease-driven demographic collapse after Spanish contact + the deliberate
  1707 forced reducción of the last free Maya of Tipu to Lake Petén Itzá,
  Guatemala. Concrete local numbers are settlement-scale only (Tipu >1,000 in
  1640s; ~300 families; 1638 rebellion; Spanish retake 1690s; 1707 removal).
  Marked UNVERIFIED because **no Belize-specific death count exists** — tolls
  left null.
- **blz-2 (victim, STR, RESEARCHED)** — Slavery in the Bay Settlement,
  c.1720s–1838. ~3,000 enslaved (≈3/4 of population) late 1700s; revolts 1765,
  1768, 1773, 1820; emancipation complete 1838. No aggregate death toll → null.
- **blz-3 (victim, WAR, RESEARCHED)** — British war on the northern Maya,
  1866–1872. 1866 Battle of San Pedro Yalbac (British routed); 1867 punitive
  expedition burned 7 villages with Congreve rockets (no death count); 1872
  Battle of Orange Walk — 30–50 Maya killed, Marcus Canul mortally wounded,
  2 British dead / 14 wounded.
- **blz-4 (perpetrator, STR, RESEARCHED)** — Same slavery event, masters' side.
  The Baymen as the slaveholding local elite. The sole perpetrator entry.

## Contested / uncertain
- **Maya demographic collapse magnitude.** Regional (Mesoamerica / Guatemala
  highlands) estimates range from ~1/3 to ~90% population decline in the first
  century of contact, but these are NOT Belize-specific and largely measure
  decline (death + collapsed birth rate + flight), not body counts. Hence null
  tolls and UNVERIFIED status on blz-1.
- **Orange Walk casualties (30–50 Maya).** A combat estimate from secondary
  accounts, not an exact count.
- **1707 Tipu removal numbers.** "Hundreds to low thousands" — no firm figure.
  English Wikipedia 'Tipu rebellion' article narrative ends ~1695 and does not
  itself cover the 1707 removal; the 1707 detail comes from the 'History of
  Belize (1506–1862)' article instead.

## Could NOT verify
- Any Belize-specific Maya death count for the conquest era.
- Any death/displacement count for the 1867 village burnings.
- Any aggregate slavery mortality figure for the settlement.

## Sources actually consulted
- Wikipedia, "History of Belize (1506–1862)" —
  https://en.wikipedia.org/wiki/History_of_Belize_(1506-1862) (fetched)
- Wikipedia, "Slavery in Belize" —
  https://en.wikipedia.org/wiki/Slavery_in_Belize (fetched)
- Wikipedia, "Tipu rebellion" —
  https://en.wikipedia.org/wiki/Tipu_rebellion (fetched)
- Wikipedia, "Battle of Orange Walk" —
  https://en.wikipedia.org/wiki/Battle_of_Orange_Walk (fetched)
- Britannica, "Belize / Early history" — HTTP 403, could not fetch; used search
  snippets only.
- Belize Hub, "Battle of Orange Walk" & "The Mayas of Belize and the Spanish
  Conquest" — https://www.belizehub.com/battle-of-orange-walk/ (popular-history;
  narrative corroboration only, flagged with caveat in JSON).
- W. George Lovell, smallpox in the Cuchumatán highlands —
  https://storicamente.org/lovell_smallpox_cuchumatan_highlands_of_guatemala
  (regional decline magnitudes only; flagged as non-Belize-specific).
- US State Dept Belize human-rights reports (via search) — confirmed no
  post-1981 mass-atrocity event; basis for leaving the perpetrator ledger thin.

## Audit
Adversarial source-integrity + tier audit, 2026-06-19 (Opus 4.8). Premise:
every citation treated as FAKE until proven otherwise. Method: re-fetched all
six source URLs and tried to falsify each (work exists? author exists? supports
the SPECIFIC claim attached? bias disclosed?). Re-derived every tier from the
facts before reading the assigned one.

### Source integrity — ALL SIX SOURCES VERIFIED
1. Wikipedia "History of Belize (1506–1862)" — EXISTS. Confirms verbatim: the
   1527 Yucatán conquest and smallpox/yellow-fever/malaria devastation of the
   indigenous population; "Between 1638 and 1695, the Maya living in the area of
   Tipu enjoyed autonomy"; "In 1707, the Spanish forcibly resettled the
   inhabitants of Tipu to the area near Lago Petén Itzá"; the 1724 missionary
   account of importing slaves from Jamaica and Bermuda; slave population
   "around 3,000 ... about three-quarters of the total population"; the 1820
   Will-and-Sharper revolt; 1833 Act / 1838 emancipation. Supports blz-1 and
   blz-2 summaries. PASS.
2. Wikipedia "Tipu rebellion" — EXISTS and is the correct article (Maya/Bacalar,
   NOT Tipu Sultan of India). Confirms "eight reducción settlements (totalling
   some 300 Maya families) had resettled in Tipu" (5 March 1643), the 1638
   revolt against encomienda/reducción, and Spanish control collapsing until
   1695. Supports blz-1 settlement-scale figures. PASS.
3. Wikipedia "Slavery in Belize" — EXISTS. Confirms Baymen importing from the
   early 18th c.; ~3,000 / three-quarters; origins "Bight of Biafra, the Congo,
   and Angola"; "extreme inhumanity" (1820 report) and chaplain's "instances ...
   of horrible barbarity"; revolts 1765/1768/1773 and 1820. Supports blz-2 and
   blz-4. PASS.
4. Wikipedia "Battle of Orange Walk" — EXISTS. Confirms 150–180 Icaiche vs a
   39-man West India Regiment detachment; "30 to 50 men killed"; 2 British
   killed / 14 severely wounded; Canul mortally wounded; the 1866 San Pedro
   Yalbac rout; and the 1867 Congreve-rocket burning of all seven named villages
   (Cerro, Chunbalche, Naranjal, San José, San Pedro, Santa Cruz, Santa Teresa).
   Supports blz-3 toll and summary. PASS.
5. W. George Lovell, "smallpox in the Cuchumatán highlands" (Storicamente, 2021)
   — EXISTS, real scholar, real journal. Documents a >90% regional decline
   (~260,000 → ~16,000, 1520–1683). Supports blz-1 toll.high as a REGIONAL bound
   only; the non-Belize-specific caveat is accurate and load-bearing. PASS.
6. Belize Hub, "The Battle of Orange Walk" — EXISTS. Corroborates the 1866 raid,
   the 1867 village burnings (all seven named), and the 1872 battle. Minor
   correction: the page presents Canul sympathetically/as-resistance but stops
   short of "national hero"; caveat softened accordingly. It supports only
   narrative/dates/place-names, not figures, so this does not weaken any toll.
   PASS.

No invented or unverifiable sources found. No author or work failed to exist.

### Toll audit
- blz-1: tolls correctly NULL — no Belize-specific death count exists anywhere;
  the regional Lovell figure bounds scale only and is caveated. Honest absence,
  not a gap to be guessed.
- blz-2 / blz-4: tolls NULL — no aggregate slavery death tally was ever
  recorded; ~3,000 is a STANDING-ENSLAVED population count, not a death toll.
  The "toll.low" tag on the Wikipedia source in blz-2 is nominal (low is null);
  noted in the caveat, not a fabrication.
- blz-3: low=30 / high=50 — both ends sourced. Single source but a genuine
  reported RANGE (not a single number dressed as two), so not flagged as a
  single-number toll.

### Tier audit (re-derived independently)
- blz-1 STR — CONFIRMED. Disease-driven demographic collapse = STR per the
  disease rule (NOT EXT); the 1707 removal is coercive conquest with indirect
  lethality. Correct.
- blz-2 STR — CONFIRMED. Chattel slavery as structural mass death/suffering in
  an economic order; not a single massacre (WAR) and not extermination (EXT).
- blz-3 WAR — CONFIRMED. Colonial counter-insurgency, atrocity embedded in armed
  conflict to break Maya resistance, not to exterminate a people.
- blz-4 STR — CONFIRMED. Same slavery system, perpetrator lens.
No tier corrections required.

### Ledger / law-1 check
Both ledgers are populated to the extent the record supports: victim ledger
carries the documented mass-death (Spanish-era Maya collapse, slavery, the
1867–72 wars); perpetrator ledger holds the one genuine local ruling elite (the
Baymen). No Belizean state crime invented to force balance. Compliant.

### Status changes
- blz-1: UNVERIFIED → **VERIFIED**. Prior UNVERIFIED conflated "no toll count
  exists" with "source unverifiable." All three sources verify and support their
  claims; the null tolls are an honest, disclosed absence of data, which is
  law-1-compliant, not a verification failure.
- blz-2, blz-3, blz-4: RESEARCHED → **VERIFIED**.
- Country: RESEARCHED → **VERIFIED** (all four events VERIFIED).

Events verified: 4 / 4. Events flagged: 0.
