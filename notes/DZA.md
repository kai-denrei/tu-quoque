# Algeria (DZA) — research notes

Built from scratch 2026-06-18 with live web research (WebSearch + WebFetch). Status: RESEARCHED (two events UNVERIFIED on toll grounds). Both ledgers populated, 2 events each.

## Ledger overview

**Done to them (victim)**
- `dza-1` French Conquest & Pacification (1830–1875) — STR. Demographic collapse from killing + scorched earth + famine + cholera.
- `dza-2` Algerian War of Independence (1954–1962) — WAR. French torture, napalm, regroupement camps; FLN reciprocal killing.

**In their name (perpetrator)**
- `dza-3` Massacres of the Harkis (1962) — POL. FLN/ALN + mobs killed Muslim auxiliaries of France post-independence.
- `dza-4` State atrocities of the Civil War / "dirty war" (1992–2002) — POL. Security-force enforced disappearances + torture. Deliberately isolated from GIA massacres.

## What is solid

- **Colonial collapse low end:** Kamel Kateb (INED demographer) — ~825,000 deaths 1830–1872, ~750,000 non-combatants (repression/disease/famine); population ~2.7M (1861) → ~2.1M (1871). A named, conservative anchor.
- **Colonial collapse high end:** Ben Kiernan (Yale), *Blood and Soil* — 500,000–1,000,000 of ~3M dead in the first three decades; genocide framing.
- **Harki low end:** John Keegan, "at least 30,000" (cited on Wikipedia Harki).
- **Civil War state perpetration:** Human Rights Watch (26 Feb 2003) — Algerian security forces "disappeared" at least ~7,000 people, more than any country that decade except wartime Bosnia; systematic torture and extrajudicial killing; 2006 amnesty shielded the forces. This is the firm, attributable state-perpetrated figure.

## What is contested / could NOT be verified

- **Conquest causation (STR vs EXT):** genuinely split between deliberate killing (El Ouffia massacre; ~500–700 Ouled Riah suffocated in the 1845 Dahra enfumades; Bugeaud's razzias) and the 1866–68 famine/locust/cholera crisis. Tiered STR because disease/famine carried much of the toll; several scholars argue genocide. Endpoints sourced; range kept wide and disputed.
- **War of Independence toll:** the headline dispute. Algerian state claims ~1,500,000; French official counts ~23k soldiers + ~50k Harkis + ~6k European civilians; most independent scholarship ~400,000–700,000. Gap is so wide and politicised that no single agreed death count exists → marked UNVERIFIED, range 400,000–1,500,000 with the state claim flagged as exceeding scholarship.
- **Harki high end (150,000):** widely repeated but lacks a single firm scholarly attribution; flagged as a soft upper bound.
- **Civil War state-caused DEATHS:** cannot be cleanly separated from the ~100,000–200,000 all-sides total or from GIA-perpetrated village massacres (Rais, Bentalha 1997). So `dza-4` toll.high left null, event UNVERIFIED. Allegations that the security services committed/facilitated some massacres (army barracks near the villages that did not intervene; defector Souaidia) exist but are rejected by many researchers — NOT asserted as fact here.

## Deliberate scoping choice

The 1990s civil war was three-cornered (army / Islamist insurgents / civilians) and a large share of civilian killing was the GIA's. To avoid inflating the perpetrator ledger with insurgent crimes, `dza-4` counts ONLY documented state-perpetrated abuse (the ~7,000 disappearances, torture). The overall war toll is given as context in the note, not attributed to the state.

## Real sources consulted

- Wikipedia — "Pacification of Algeria" (Kiernan 500k–1M; El Ouffia; Ouled Riah/Dahra enfumades).
- Wikipedia — "Algerian War" (1.5M state claim; French official figures; ~400k–700k scholarly; torture/napalm/regroupement).
- Wikipedia — "Harki" (30,000–150,000; Keegan; French abandonment).
- Wikipedia — "Algerian Civil War" (100k–200k all-sides; Bouteflika 100k/150k; GIA massacres; security-service allegations).
- INED — Kamel Kateb, *Européens, « indigènes » et Juifs en Algérie, 1830–1962* (via INED publication page + EAPS/OpenEdition demographic summaries: ~825,000 deaths 1830–1872).
- Ben Kiernan, *Blood and Soil* (Yale UP, 2007) — via the Pacification citation.
- Alistair Horne, *A Savage War of Peace: Algeria 1954–1962* (1977) — standard English-language history.
- Human Rights Watch — "Algeria Led World in Forced Disappearances" / "Time for Reckoning: Enforced Disappearances in Algeria" (26 Feb 2003): ~7,000 disappeared by state forces.
- Al Jazeera — "Q&A: What really happened to Algeria's Harkis" (2015) — narrative context.

No figure, citation, author, or URL was invented. Where no defensible number exists, the field is null and the event is UNVERIFIED.

## Audit

Adversarial source-integrity + tier audit, 2026-06-18 (assume-fake-until-proven posture; live WebSearch + WebFetch). Verdict: **country UNVERIFIED** (2 of 4 events VERIFIED).

### Source integrity — every citation falsification-tested, all survived

- **Kateb (dza-1 low):** REAL. *Européens, « indigènes » et Juifs en Algérie (1830–1962)*, Cahier de l'INED no. 145 (2001) confirmed on ined.fr, Persée, Cairn, Google Books. Figure confirmed as **~825,000 indigenous deaths 1830–1875** (≈8× the ~117,000 French soldier deaths), with crisis-mortality (famine) explicitly part of the count. CORRECTION: the JSON said "1830–1872"; the verified range is **1830–1875**. Fixed in display, note, cite, low_source_note.
- **Kiernan (dza-1 high):** REAL. *Blood and Soil* (Yale UP, 2007) confirmed (Yale Books, H-Net reviews, JSTOR, Wikipedia "Blood and Soil (book)"). Wikipedia "Pacification of Algeria" directly cites it for "**500,000 to 1 million ... of ~3 million ... first three decades**." Supports toll.high exactly.
- **Wikipedia "Pacification of Algeria" (summary):** confirmed. El Ouffia ("all 500 men, women and children ... killed in one night") and Ouled Rhia ("500 to 700 ... killed by suffocation in a cave") present as stated; Bugeaud scorched-earth present. (Famine/cholera 1866–68 NOT explicitly in this article but is in the Kateb/demographic literature — citation realigned accordingly.)
- **Wikipedia "Algerian War" (dza-2):** confirmed — 1.5M state claim; French official 23,196 soldiers / 50,000 Harkis / 6,000 European civilians; **~400,000–700,000 scholarly** range cited to Horne and others; torture/napalm/~2M regroupement all present.
- **Horne, *A Savage War of Peace* (dza-2 low, dza-3 methods):** REAL, standard history; also the source (p.537) for the Harki killing methods quoted on the Harki page.
- **Keegan (dza-3):** REAL. CORRECTION: the JSON claimed the 150,000 high end "carries no single firm attribution." FALSE — Wikipedia "Harki" attributes **BOTH** endpoints to **John Keegan, *A History of Warfare*, p.55**: "at least 30,000 and possibly as many as 150,000 Harkis and their dependents." Cite, note, low/high_source_note all corrected to name the work and the shared attribution. The 150,000 ceiling remains a *soft* upper bound — but on the correct grounds: Pierre Daum's research (via Al Jazeera) calls it a French-organisation exaggeration, not "no attribution."
- **Al Jazeera "Q&A: What really happened to Algeria's Harkis" (2015) (dza-3):** REAL, title/date confirmed; notably *undercuts* the 150,000 figure (fewer than 30,000 reached France; Daum's revisionist research). Kept as narrative/contestation context.
- **HRW (dza-4):** REAL. BOTH outputs confirmed: news release "Algeria Led World in Forced Disappearances" (26 Feb 2003) and full report "Time for Reckoning: Enforced Disappearances in Algeria" (hrw.org/report/2003/02/26/...). Text: "**at least 7,000 persons ... more than ... any other country during the past decade except wartime Bosnia**," no state agent prosecuted. Supports toll.low exactly.
- **Wikipedia "Algerian Civil War" (dza-4 context):** confirmed — 100,000–200,000 all-sides; Bouteflika 100,000 (1999) → 150,000 (2005); LADDH/Ajami >200,000; GIA 1996–98 massacres (Rais, Bentalha); security-service-involvement allegations present but contested. The deliberate scoping (state share = disappearances/torture only, GIA massacres excluded) holds.

**No invented sources found. Every author, work, and URL exists and supports the specific claim attached to it.**

### Toll low/high sourcing

- dza-1: low (Kateb) and high (Kiernan) both independently sourced. PASS → VERIFIED.
- dza-2: low (~400k, scholarly via Wikipedia/Horne) and high (1.5M, state claim) both sourced, but the gap is irreconcilable → toll quarantined, UNVERIFIED (correct).
- dza-3: low and high both sourced (same Keegan citation). High contested by Daum but a source exists. PASS → VERIFIED.
- dza-4: low (HRW 7,000) sourced; **high is null** — no separable source for state-caused deaths → UNVERIFIED (correct, honest quarantine).

### Tier re-derivation (done before reading assigned tier) — all four correct

- dza-1 **STR** ✓ — largest share of mortality is disease/famine-driven (1866–68 cholera/famine) blended with deliberate killing; STR-not-EXT rule applied; Kiernan's genocide framing noted but does not promote to EXT.
- dza-2 **WAR** ✓ — mass death/abuse inside an armed conflict against an organised FLN insurgency, not an extermination campaign.
- dza-3 **POL** ✓ — targeted slaughter of a politically-defined collaborator group (and families), same ethnicity/nationality as perpetrators → POL, not EXT.
- dza-4 **POL** ✓ — state campaign of politically-targeted disappearance/torture (HRW: crimes against humanity); insurgent massacres correctly excluded.

No tier corrections required.

### Ledger balance (law 1)

Both ledgers populated (2 victim, 2 perpetrator) and each entry is supported by the record — no invented balance.

### Final verdict

- dza-1 VERIFIED · dza-2 UNVERIFIED (toll gap) · dza-3 VERIFIED · dza-4 UNVERIFIED (null high) → **country UNVERIFIED**.
- Events verified: 2. Events flagged/UNVERIFIED: 2.
- Corrections written back: Kateb date 1830–1872 → **1830–1875** (4 fields); Keegan high-end attribution corrected from "no attribution" to **shared Keegan p.55 citation** (note + cite + source notes); verification stamps added to all source caveats and to the two UNVERIFIED toll notes as explicit QUARANTINE flags.
