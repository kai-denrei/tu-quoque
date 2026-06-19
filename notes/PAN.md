# Panama (PAN) — research notes

Built from scratch, June 2026. Web research via WebSearch + WebFetch (several
target pages returned HTTP 403 to WebFetch — IACHR, Grokipedia, Justapedia —
and were confirmed instead through search-engine summaries of their contents,
noted in the relevant source caveats).

## Final shape
- 2 victim events, 1 perpetrator event. Country status RESEARCHED.
- The ledgers are deliberately asymmetric. Panama's victim record is heavy and
  well-documented; its perpetrator record is real but an order of magnitude
  smaller. The asymmetry is explained in the country `note` rather than
  papered over with an invented or inflated perpetrator event.

## Victim ledger
### pan-1 — Cueva / Darién collapse, c. 1510–1550 (STR)
- Pre-contact isthmus population: ~200,000 (recent scholarship) up to ~2
  million (older estimates). Largest group = the Cueva of eastern Panama /
  Darién, effectively extinct as a people by c. 1535–1550.
- Cause: overwhelmingly Old World disease (no immunity), compounded by Spanish
  slaving, forced gold-mining labour, and warfare under Pedrarias Dávila
  ("Furor Domini," per Las Casas). Disease-dominated → STR, not EXT.
- Toll left null/null: no defensible absolute death count; baseline itself
  contested. Recorded as a collapse, not a number.
- Sources: Wikipedia "Indigenous peoples of Panama," "History of Panama,"
  "Cueva people"; Carl Sauer, *The Early Spanish Main* (1966, via reference
  summaries + Andagoya primary narrative). Sauer not read in full — flagged.

### pan-2 — 1989 U.S. invasion / El Chorrillo (WAR)
- Operation Just Cause, 20 Dec 1989, to depose Noriega. Combat centred on the
  PDF HQ in El Chorrillo (poor, largely Afro-Panamanian barrio), which burned.
- CONTESTED TOLL — the central difficulty of this entry:
  - U.S. official: ~202 civilians + 314 PDF + 23 U.S. troops.
  - Americas Watch: ~300 civilians.
  - UN: ~500. Catholic Church: 673 total Panamanians.
  - Ramsey Clark (former U.S. AG): 3,000 (much disputed, high end).
  - Grassroots groups: "thousands," bodies bulldozed into mass graves.
  - Range encoded 202 (low, U.S. official) → 3,000 (high, Clark).
  - ~15,000–20,000 left homeless.
- Sources: Wikipedia "United States invasion of Panama"; IACHR Case 10.573
  (records the dispute; page 403 on direct fetch, confirmed via summary);
  Americas Watch/HRW Jan 1990 mission report (Geneva Convention violations).

## Perpetrator ledger
### pan-3 — Military dictatorship repression, 1968–1989 (POL)
- National Guard / PDF / G-2 under Torrijos and Noriega: torture, murder,
  forced disappearance of dissidents. Most cases 1968–1972, targeting Arias
  supporters. Hugo Spadafora beheaded 1985.
- Truth Commission (Comisión de la Verdad), April 2002: 148 cases examined,
  110 documented (70 murdered, 40 disappeared), 24 clandestine graves, 40
  cases uninvestigated. Named list: 132 killed/disappeared. Range 110–132.
- Sources: Wikipedia "Panama Truth Commission"; USIP "Truth Commission:
  Panama"; Amnesty International (2011, Noriega extradition / Spadafora).

## Considered but NOT given their own event
- **1925 Tule (Guna) Revolution / forced acculturation.** The young republic's
  police occupation and forced-acculturation campaign in San Blas (Guna Yala)
  provoked the Feb 1925 rising; ~27 police killed in the revolt, with reported
  police abuses against the Guna beforehand. Real state coercion, but the
  documented death toll is too small to carry a mass-atrocity event. Folded
  into the country note as the secondary perpetrator episode.
- **Individual Noriega-era assassinations** (Giroldi 1989, Portugal 1970) are
  subsumed under pan-3 rather than itemized.

## Could NOT verify / left null
- No absolute death count for the indigenous collapse (pan-1) — null/null.
- No single agreed civilian toll for the 1989 invasion — encoded as a wide
  contested range (202–3,000), not a point figure.
- IACHR Case 10.573 and a couple of wiki-mirror pages would not load directly
  (403); their contents were taken from search summaries, flagged in caveats.

## Sources consulted (real, this session)
- en.wikipedia.org/wiki/United_States_invasion_of_Panama
- en.wikipedia.org/wiki/History_of_Panama
- en.wikipedia.org/wiki/Indigenous_peoples_of_Panama
- en.wikipedia.org/wiki/Cueva_people
- en.wikipedia.org/wiki/Panama_Truth_Commission
- en.wikipedia.org/wiki/San_Blas_Rebellion (1925 Tule Revolution context)
- en.wikipedia.org/wiki/Hugo_Spadafora
- cidh.oas.org/annualrep/93eng/usa.10573.htm (IACHR Case 10.573 — 403, via summary)
- usip.org/publications/2001/01/truth-commission-panama
- amnesty.org (2011 Noriega extradition release)
- hrw.org/legacy/campaigns/iraq/panama91_appen.htm (Americas Watch 1990 report)
- archive.org/details/earlyspanishmain00saue_0 (Carl Sauer, *The Early Spanish Main*)

## Audit
Adversarial source-integrity + tier audit, 2026-06-19. Every citation treated
as fake until proven otherwise. Country status: **UNVERIFIED** (1 of 3 events
fails clean sourcing).

### Verdict by event
- **pan-1 (Cueva/Darién collapse, STR) → UNVERIFIED.** Tier correct (disease-
  driven collapse = STR, not EXT — STR-vs-EXT rule holds). Toll null/null
  justified (contested baseline, no defensible count). BUT one citation
  FAILED: the source marked `supports: summary`, Wikipedia "Indigenous
  peoples of Panama", was re-fetched and no longer contains any of the claim
  it backed — it now covers only the 2023-census population, with no pre-
  contact figures, no "Cueva largest group", no c.1535–1550 extinction date.
  Citation–claim mismatch → quarantine. FIX applied: re-pointed that slot to
  Wikipedia "Cueva language" (verified: supports the ~1535 extinction + the
  disease/violence/enslavement mechanism), with a caveat noting the "Cueva
  the single largest group" and ~200,000 baseline are NOT in that stub and
  remain only loosely sourced. Underlying facts still independently verified:
  "History of Panama" carries the exact ~200,000–2,000,000 range + encomienda
  collapse + African-slave replacement (toll.high — VERIFIED); Sauer 1966
  confirmed real (306 pp, Internet Archive) and the Andagoya primary narrative
  + "Furor Domini" (Las Casas) confirmed (tier — VERIFIED). Event left
  UNVERIFIED until a clean primary citation backs the "largest group / extinct
  as a people" claim. Quarantine note written into toll.note.
- **pan-2 (1989 invasion / El Chorrillo, WAR) → VERIFIED.** Tier correct
  (foreign military heavy-weapons assault on a populated urban barrio in an
  armed invasion = wartime civilian killing = WAR; IACHR's IHL findings —
  failure of distinction/proportionality — are consistent). Both toll ends
  sourced: low 202 via IACHR Case 10.573 (verified real — José Isabel Salas
  Galindo et al. v. USA, Admissibility Report No. 31/93, 1993; later Merits
  Report No. 121/18) + Wikipedia; high 3,000 via Wikipedia (Ramsey Clark);
  HRW/Americas Watch verified real, states "at least 280 to 305 civilians …
  ≈300" and a Geneva Conventions violation. All Wikipedia toll figures
  (US 202+314, UN ~500, AW ~300, Church 673, Clark 3,000, ~20,000 homeless)
  confirmed against the live article.
- **pan-3 (dictatorship repression, POL) → VERIFIED.** Tier correct (two
  decades of targeted torture/murder/disappearance of dissidents by state
  security forces = POL, not WAR or EXT). Toll 110–132 both ends from the
  Truth Commission record (110 documented = 70 murdered + 40 disappeared, 24
  grave sites, 1968–72 concentration — all confirmed against live Wikipedia).
  USIP page verified real (Moscoso, Exec. Decree No. 2 of 18 Jan 2001;
  returns 403 to automated fetch only). Amnesty Dec 2011 release verified real
  (Spadafora 1985, convictions, Portugal 1970).

### Sources falsified / corrected
- Wikipedia "Indigenous peoples of Panama" — REMOVED from pan-1 summary slot:
  no longer supports the cited historical claim. Replaced with "Cueva
  language".

### 403s that are anti-bot, not fabrication (content confirmed via search)
- cidh.oas.org/.../usa.10573.htm (IACHR) — real, confirmed via OAS press
  release + Merits Report PDF.
- usip.org/.../truth-commission-panama — real, confirmed via USIP/search index.
- amnesty.org Dec-2011 Noriega release — real, confirmed via search.

### No invented sources introduced. All replacements point to verified pages.
