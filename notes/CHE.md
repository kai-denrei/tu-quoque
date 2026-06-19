# Switzerland (CHE) — research log

Built from scratch on 2026-06-19. Web research via WebSearch/WebFetch.

## Verdict on the dual ledger

Switzerland is a genuinely **asymmetric** case. Never colonized, no overseas
empire, armed-neutral and largely spared the mass killing of its neighbours in
the 19th–20th centuries. So **"Done to them" is thin** and **"In their name" is
the heavier, better-documented side** — but its victims were overwhelmingly
people *on Swiss soil at the hands of Swiss authorities*. No event/toll/source
was invented to balance the ledgers; the asymmetry is explained in the country
`note`.

## Events recorded

### che-1 (victim) — Nidwalden massacre, 1798 — WAR
- French Revolutionary army (Schauenburg) crushed Nidwalden's refusal to swear
  to the Helvetic constitution on 9 Sept 1798, then massacred civilians.
- Toll **contested**: "~100 each side in fighting + >300 civilians massacred"
  (Wikipedia) vs **435 total dead incl. 118 women, 25 children, ~5% of canton**
  (Swiss Spectator). Sources disagree on whether the 435 separates combatants
  from civilians — hence `disputed: true`, low 300 / high 435.

### che-2 (perpetrator) — Swiss witch trials, 1429–1782 — POL
- Among Europe's earliest (Valais hunt began 1428) and most intense per head;
  Europe's **last** legal witch execution was Anna Göldi, Glarus, 1782.
- Toll **contested**: Guido Bader (older scholarship) documented 8,888
  accusations / **5,417 executed**; Kathrin Utz-Tremp estimates **~6,000**
  executed 15th–18th c. The "10,000" figure that circulates = *trials*, not
  deaths. 70–80% of those executed were women; ~60% of accused executed.
- Low 5,400 / high 6,000.

### che-3 (perpetrator) — Yenish "Children of the Open Road", 1926–1973 — POL
- Pro Juventute's *Hilfswerk Kinder der Landstrasse* + cantonal/federal
  authorities seized ~**590–600 Yenish children**; govt estimate ~**2,000**
  Traveller children overall (incl. Sinti/Manouche). Victims also placed under
  guardianship, institutionalised, banned from marrying, some forcibly
  sterilised.
- **UNIT CAVEAT**: this is a *removal count, not a death toll*. `unit:deaths`
  kept only for schema consistency; display+note say so.
- **Swiss Federal Council recognised it as a crime against humanity (Feb 2025)**;
  a 2024 Federal Office of Culture review found the genocidal *act* but not
  genocidal *intent* (goal = assimilation), hence crime-against-humanity not
  genocide.

## Strong candidates considered but NOT given separate slots
(real and documented; left out to keep to the most significant 1–3 per ledger)
- **Anabaptist persecution (1520s–1700s)**: Zurich drowned Felix Manz (1527,
  first martyr) and ~5 others in the Limmat; Bern executed elders "with the
  sword"; Martyrs' Mirror lists ~40 Bern executions. A clear Swiss-state
  perpetrator record but a smaller death count than che-2.
- **Verdingkinder / "contract children" indenture (c.1800–1960s/81)**: tens of
  thousands (est. >100,000 over 1920–1970) of poor children placed as cheap
  farm labour, often abused. Govt apology 2013; 300m CHF compensation fund
  (2016). Harm = forced labour/abuse, not a death toll; overlaps che-3.
- **Swiss Peasant War of 1653**: ruling city aristocracies crushed the revolt
  and executed leaders (Niklaus Leuenberger beheaded + quartered, Bern, 6 Sept
  1653; 7 ringleaders executed at Basel). Repression, not mass death.

## Could NOT verify / limitations
- **Council of Europe** page on the 2025 crime-against-humanity recognition
  returned HTTP 403 — could not fetch directly. The recognition is corroborated
  by Wikipedia (Kinder der Landstrasse) and swissinfo, so it stands, but the
  primary CoE statement was not read firsthand.
- **Guido Bader's 5,417-executed figure** reached only via secondary summaries,
  not the original early-20th-c. text — source URL left `null`, flagged in
  caveat. Used only for the low end.
- Nidwalden civilian-vs-combatant split in the 435 figure is genuinely unclear
  in the available sources.

## Real sources consulted
- SWI swissinfo.ch — "No one tortured witches like the Swiss"
  https://www.swissinfo.ch/eng/culture/no-one-tortured-witches-like-the-swiss/32908
- SWI swissinfo.ch — "How Switzerland, Scotland and Norway seized children from
  itinerant families"
  https://www.swissinfo.ch/eng/history/how-switzerland-scotland-and-norway-seized-children-from-itinerant-families/89310763
- Wikipedia — French invasion of Switzerland
  https://en.wikipedia.org/wiki/French_invasion_of_Switzerland
- The Swiss Spectator — "The Helvetic Republic and Nidwalden"
  https://www.swiss-spectator.ch/die-helvetische-republik-und-nidwalden/
- Wikipedia — Kinder der Landstrasse
  https://en.wikipedia.org/wiki/Kinder_der_Landstrasse
- Wikipedia — Verdingkinder (context, not a slot)
  https://en.wikipedia.org/wiki/Verdingkinder
- World History Encyclopedia / swissinfo — Anabaptist persecution (context)
- Wikipedia / executedtoday — Swiss peasant war of 1653 (context)
- Council of Europe — Yenish crime-against-humanity statement (403, not fetched)

## Audit

Adversarial source-integrity + tier audit, 2026-06-19 (kai-denrei). Posture:
every citation assumed FAKE until independently re-verified via WebSearch/WebFetch.
**Country verdict: VERIFIED** (all 3 events VERIFIED). No source was invented; two
citation defects were corrected in place, neither severe enough to quarantine
because the underlying facts are independently confirmed.

### che-1 — Nidwalden massacre, 1798 — WAR — VERIFIED
- **Source-integrity DEFECT (corrected).** The toll.high citation was The Swiss
  Spectator, claimed to carry "435 dead incl. 118 women and 25 children." On
  fetch, that article does NOT contain those figures — it gives only "~100
  Nidwaldeners + ~100 French + >300 in the subsequent massacre," i.e. the SAME
  low-end bracket as the EN-Wikipedia source already cited for toll.low. The
  high-end source therefore did not support its claim.
- **Fact is real.** The 435 total (292 men + 118 women + 25 children, ~5% of the
  canton) is corroborated independently: DE-Wikipedia "Schreckenstage von
  Nidwalden" infobox (435 = 292/118/25), the Swiss National Museum blog, and
  nidwalden.com. Toll.high re-cited to the DE-Wikipedia article, which verifiably
  carries the figure. Both toll ends now sourced.
- **Tier re-derived independently → WAR (confirmed).** Invading army crushes
  armed cantonal resistance, then massacres civilians in captured villages:
  wartime massacre by an occupying army during a military campaign, not a drive
  to exterminate the Swiss as a people. Not EXT. Not STR (not disease/famine).

### che-2 — Swiss witch trials, 1429–1782 — POL — VERIFIED
- **Both ends verified.** toll.high (~6,000, Utz-Tremp) confirmed in the cited
  swissinfo article (also 70–80% women, ~60% of accused executed, 10,000 trials,
  Anna Göldi 1782 — all present). toll.low (~5,400) traced to Guido Bader, "Die
  Hexenprozesse in der Schweiz" (1945): the work, author, and 8,888-accusations /
  5,417-executed figures are all real and independently confirmed (recognized
  reference in the scholarly bibliography, e.g. historicum.net; WorldCat OCLC
  631826862). historicum.net independently corroborates the "~10,000 trials in
  Switzerland" framing, confirming the JSON's note that 10,000 = trials not deaths.
- **DEFECT (corrected).** toll.low URL was null. Upgraded to the verifiable
  WorldCat bibliographic record (OCLC 631826862) — no longer an unverifiable
  source. Valais start: the first systematic hunt began 1428 (per sources); the
  event era reads 1429–1782, a minor one-year boundary nuance left as-is.
- **Tier re-derived independently → POL (confirmed).** State/cantonal courts
  torture and execute thousands under colour of law, targeting an alleged CRIME
  (witchcraft), not a fixed birth-group → atrocity by authority/policy. Not EXT
  (no fixed ethnic/religious target). Not STR (not disease-driven).

### che-3 — Yenish "Children of the Open Road", 1926–1973 — POL — VERIFIED
- **All claims verified.** ~590 Yenish removed, 1926–1973, 2024 Federal Office of
  Culture review (genocidal ACT but no genocidal INTENT → assimilation), and the
  Feb 2025 Federal Council crime-against-humanity recognition — all confirmed
  verbatim in the cited EN-Wikipedia article. toll.high (~2,000 Traveller children
  incl. Sinti/Manouche) confirmed in the cited swissinfo article. Both ends sourced.
- **Minor caveat-accuracy note (not quarantined).** The toll.high caveat says the
  swissinfo article supplies "the detail on guardianship and sterilisation"; on
  fetch, that article attributes forced STERILISATION to Norway, not Switzerland.
  Swiss forced sterilisation of Yenish under Pro Juventute is itself well
  documented elsewhere, so the underlying fact stands, but this specific source
  does not carry it. Left as a flag rather than a correction since sterilisation
  is not a toll-supporting claim.
- **Unit handling correct.** display/note/caveat make explicit this is a count of
  CHILDREN REMOVED, not deaths; "unit: deaths" retained only for schema
  consistency, as documented. No death toll exists for this event.
- **Tier re-derived independently → POL (confirmed).** Sustained state-backed
  program to destroy a travelling minority by removing its children; official
  finding is explicitly NO exterminatory intent (assimilation) → atrocity by
  authority/policy, not EXT. Not STR (not disease-driven). STR-vs-EXT rule N/A.

### Net result
- 3/3 events VERIFIED; 0 quarantined.
- Defects corrected: che-1 toll.high re-cited from a non-supporting source to a
  supporting one; che-2 toll.low null URL replaced with a verifiable record.
- 1 minor caveat flag retained (che-3 sterilisation attribution).
- All tiers independently re-derived and confirmed (WAR / POL / POL). No EXT
  miscoding; STR-vs-EXT enforcement not triggered (no disease-driven event).
- Both ledgers populated as the record supports (1 victim, 2 perpetrator); the
  asymmetry is genuine and documented, not a gap. No invented sources.
