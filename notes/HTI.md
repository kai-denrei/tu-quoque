# Haiti (HTI) — research notes

Built from scratch 2026-06-18. Web tools (WebSearch/WebFetch) loaded and used; all five events researched against live sources.

## Ledger structure
- 3 victim events, 2 perpetrator events. Both ledgers genuinely populated.
- Country status: RESEARCHED. All events: RESEARCHED.

## Victim ledger ("Done to them")
1. **hti-1 Taíno collapse of Hispaniola (1492–1540s), STR.** Population-decline figure, not a body count. Pre-contact estimate is genuinely unsettled (~300,000–400,000 favored by many moderns; high estimates ~1,000,000). Spanish counts: ~32,000 by 1514, a few hundred by the 1560s; 80–90% died within three decades. Cause is mixed — disease primarily, but Reséndez/Hickel argue enslavement and forced labor were major killers. Las Casas used only qualitatively (his numbers are polemically inflated). Tier STR per the rule that disease-driven demographic collapse is structural, not EXT.
2. **hti-2 Saint-Domingue slave system (1680s–1804), STR.** ~800,000+ Africans imported; ~1,000,000 cumulative deaths is the commonly cited figure; 6–10% annual mortality on sugar estates (highest in the hemisphere). Low (800k) = documented import total the system consumed; high (1M) = cumulative-death estimate. These are aggregates, not registers. Tier STR — lethal labor regime, not a single extermination campaign.
3. **hti-3 Parsley Massacre (Oct 1937), EXT.** Committed BY the Dominican Republic AGAINST Haitians — so it sits in Haiti's VICTIM ledger, not perpetrator. Toll genuinely uncertain: low ~14,000, mainstream band 17,000–35,000, scholarly consensus ~20,000, outlier up to ~75,000 (noted but not used as ceiling). Britannica gives ~9,000–30,000. Used 14,000 / 35,000 as the bracket.

## Perpetrator ledger ("In their name")
4. **hti-4 1804 massacre of the white population (Feb–Apr 1804), EXT.** Dessalines ordered the killing of remaining white French residents. 3,000–7,000 killed; Girard cautions the ~3,000 Cap-Haïtien figure is likely inflated (only ~1,700 white residents remained). Poles, some Germans, and useful professionals spared. The cleanest dual-lens case: freed slaves exterminating former enslavers.
5. **hti-5 Duvalier terror (1957–1971, dynasty to 1986), POL.** François "Papa Doc" Duvalier + Tonton Macoutes. 30,000–60,000 killed during his 14-year rule (Wikipedia figure, corroborated by COHA/Amnesty/Sciences Po context). Tier POL — political killing for control, not ethnic destruction. Figure is the elder Duvalier's presidency; dynasty terror continued under Jean-Claude to 1986, so the number is a floor for the dynasty.

## What is contested / could NOT be verified
- **Taíno pre-contact population**: order-of-magnitude disagreement; bracketed 300k–1M and flagged as decline, not deaths.
- **Saint-Domingue cumulative deaths**: ~1M is an estimate, not a count; flagged.
- **Parsley toll**: wildly divergent (14k to 75k); used mainstream 14k–35k, noted the 75k outlier.
- **Duvalier toll**: regime-era killings largely undocumented; Fort Dimanche prison deaths unknown; 30k–60k is an estimate.
- The 1804 toll.low and the Girard caveat are cited via the Wikipedia overview rather than directly from Girard's monograph (flagged in the source caveat).
- No invented sources or numbers. Where a direct monograph wasn't fetched (James, Dubois, Las Casas), it is cited for summary support only with url:null, not used to carry a toll.

## Real sources consulted (live)
- en.wikipedia.org/wiki/Slavery_in_Haiti
- en.wikipedia.org/wiki/Saint-Domingue
- en.wikipedia.org/wiki/Ta%C3%ADno_genocide
- en.wikipedia.org/wiki/1804_Haitian_massacre
- en.wikipedia.org/wiki/Parsley_massacre
- en.wikipedia.org/wiki/Fran%C3%A7ois_Duvalier
- britannica.com/event/Parsley-Massacre
- npr.org (2012, Parsley Massacre remembrance)
- amnesty.org (2014, Duvalier truth/impunity)
- sciencespo.fr Mass Violence and Resistance — 20th-century Haiti massacres
- Cross-referenced via search: Haitian Revolution / Rochambeau / yellow-fever material (context only, not used as a standalone event).

## Audit

Adversarial source-integrity + tier audit, 2026-06-18 (assume-fake-until-proven posture). Every source attempted to be falsified against live sources.

### Source integrity — all sources are REAL
- All Wikipedia URLs resolve and support their attached claims (verified by fetch): Taíno genocide, Slavery in Haiti, Saint-Domingue, Parsley massacre, 1804 Haitian massacre, François Duvalier.
- Britannica /event/Parsley-Massacre returned HTTP 403 to the fetcher (bot-blocking, NOT a 404) — confirmed live and real via search; title "Parsley Massacre | El Corte, The Cutting…", range ~9,000–30,000 (to ~40,000), consensus ~20,000. Matches the cite.
- NPR "Remembering To Never Forget" (2012-10-01) timed out on fetch but confirmed live via search: correct title/date, describes the perejil method and ~20,000 figure.
- Amnesty "Haiti: The truth must not die with Jean-Claude Duvalier" (Oct 2014) returned 403 but confirmed real via search: documents torture, killings, impunity, tonton macoutes.
- Sciences Po Mass Violence "Massacres perpetrated in the 20th Century in Haiti" — real, fetched; independently gives 30,000–50,000 for the Duvalier regime (corroborates the 30k–60k band's floor).
- Book/scholar sources with url:null all verified to EXIST and to be correctly characterised: Las Casas, *A Short Account of the Destruction of the Indies* (1542; advocate — polemical-inflation caveat is accurate and present); C.L.R. James, *The Black Jacobins* (1938); Laurent Dubois, *Avengers of the New World* (Harvard, 2004); Andrés Reséndez, *The Other Slavery* (Houghton Mifflin Harcourt, 2016, Bancroft Prize); Jason Hickel (labor-mortality estimate, cited via overview); Philippe Girard (real Caribbean historian, McNeese State — the 3,000/1,700 Cap-Haïtien caution is accurate and is correctly the source carrying hti-4 toll.low).
- No invented sources found. No undisclosed bias found; the one advocate source (Las Casas) carries the required caveat.

### Tier re-derivation (done independently before reading assigned tiers) — ALL CORRECT
- hti-1 STR ✓ (disease-driven demographic collapse + forced labor; STR not EXT per the disease rule).
- hti-2 STR ✓ (lethal labor regime; structural, not a single extermination campaign).
- hti-3 EXT ✓ (state physically eliminating an ethnic group as such).
- hti-4 EXT ✓ (ordered campaign to near-eradicate the white-French group as such).
- hti-5 POL ✓ (sustained state political killing for control/dissent, not ethnic destruction).
No tier corrections required.

### Toll dual-end sourcing
- hti-2 ✓ low (800k import total → Saint-Domingue page: 790k/860k imported) + high (1M cumulative → Slavery-in-Haiti page). Both ends sourced.
- hti-3 ✓ low (14k bracket within Britannica's 9k–30k) + high (35k within mainstream band, Parsley page to 75k). Both ends sourced; 75k outlier correctly excluded as ceiling.
- hti-4 ✓ low (3k, Girard) + high (7k, overview). Both ends sourced.
- hti-5 ✓ low (30k) corroborated by BOTH François-Duvalier page and Sciences Po (30k–50k) + high (60k, Duvalier page). Both ends sourced.
- hti-1 ✗ FAIL. toll.high (~1,000,000) is sourced (overview range "10,000 to 1,000,000"), but toll.LOW (300,000) is carried by NO cited source. Modern pre-contact estimates for Hispaniola do not converge on 300,000 (Rosenblat ~100,000; Moya Pons ~400,000; Cook & Borah ~7–8M). The chosen low is an unsupported editorial figure → both-end sourcing fails.

### Ledger / law-1 check
3 victim + 2 perpetrator events; both ledgers genuinely populated from the record. No invented balance demanded. ✓

### Verdict
- hti-1 → UNVERIFIED (toll.low 300,000 unsourced; quarantine note added to toll.note; fix = attach a source for the low or revise to ~400,000 [Moya Pons] / ~100,000 [Rosenblat]).
- hti-2, hti-3, hti-4, hti-5 → VERIFIED.
- Country HTI → UNVERIFIED (not all events verified).
- Events verified: 4. Events flagged: 1.
