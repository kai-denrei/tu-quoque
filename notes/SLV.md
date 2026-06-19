# El Salvador (SLV) — research log

Built from scratch 2026-06-19. No seed file existed. Schema matched to neighbouring GTM.json (Guatemala), which shares the same regional history and dual-lens structure.

## Final structure
- **Victim ("Done to them")** — 2 events
  - slv-1 Spanish conquest demographic collapse (1524–c.1600), STR, RESEARCHED
  - slv-2 Persecution/expulsion of Salvadoran migrants in Honduras around the 1969 Football War, POL, **UNVERIFIED**
- **Perpetrator ("In their name")** — 3 events
  - slv-3 La Matanza, 1932, POL, RESEARCHED
  - slv-4 El Mozote massacre, 1981, POL, RESEARCHED
  - slv-5 State terror in the civil war, 1980–1992, POL, RESEARCHED

Country status: RESEARCHED.

## What is solid
- **La Matanza (1932):** Salvadoran military under Gen. Maximiliano Hernández Martínez crushed a Pipil-peasant/communist uprising (22–25 Jan 1932) and then conducted reprisal killings through February. Death toll genuinely disputed across an order of magnitude (~10,000–40,000; ~30,000 most common; lowest official claim 6,000–7,000 from Col. Osmín Aguirre y Salinas). Indigenous people specifically targeted by dress/appearance — genuine ethnocide dimension (near-extinction of public Pipil language/dress). Tiered POL (framed against "rebels/communists") with the ethnocidal dimension flagged in the toll note.
- **El Mozote (1981):** Atlácatl Battalion (US-funded/trained, created 1981) under Lt. Col. Domingo Monterrosa; 11–12 Dec 1981; ~811 named victims to ~1,000 killed; >200 remains confirmed by Argentine Forensic Anthropology Team (exhumations from Nov 1992) via UN Truth Commission. Government apology 2011.
- **Civil war (1980–1992):** ~75,000 killed (~1.4% of population) plus ~7,000 disappeared. 1993 UN Truth Commission ("From Madness to Hope" / "De la Locura a la Esperanza"), ~22,000 testimonies, attributed ~85% of violence against civilians to state armed forces and ~10% to allied death squads (FMLN much smaller share, commonly ~5%). El Mozote, Sumpul River (1980), El Calabozo (1982) are subsets of this total — handled like GTM's slv-4/slv-5 split to avoid double-counting.
- **Spanish conquest collapse:** Alvarado invaded from Guatemala 1524; smallpox preceded him (up to ~50% native population already dead by 1524); later epidemics (1545–48, 1576–81) cut to ~10% of pre-contact levels; ~90% decline within a century. Common Britannica-style figure: ~500,000 → ~75,000 in first ~50 years. STR (disease-driven), not EXT.

## What is contested / soft (numbers left null where unsourceable)
- **Conquest toll:** pre-contact baseline ranges ~130,000–1,000,000 for present-day El Salvador; low-to-mid more likely. Both baseline and absolute deaths soft → numeric low/high = null, decline recorded as percentages/soft range in display + note. No number fabricated.
- **La Matanza toll:** order-of-magnitude dispute; lowest figures from self-interested officials. Range 10,000–40,000 brackets mainstream scholarship; ~30,000 central.
- **Football War (slv-2) — the deliberate UNVERIFIED:** Up to ~300,000 Salvadoran migrants in Honduras by 1969; large-scale beatings, expulsions, forced flight are well-documented. BUT the "several thousand" deaths commonly cited cover the whole four-day war (both sides, combat) — there is **no clean death count for the anti-Salvadoran persecution specifically**. Compounding the awkwardness: El Salvador *started* the war by invading Honduras on 14 July 1969, so it is simultaneously victim (persecuted migrants) and aggressor (the war). Kept narrow, numeric toll fields null, status UNVERIFIED, and the asymmetry explained in the entry's note + the country note. Did NOT inflate it to "balance" the ledgers.

## Could NOT verify directly
- **Britannica Football War page (https://www.britannica.com/event/Football-War):** WebFetch returned HTTP 403. Facts corroborated via search snippets and the EBSCO "Soccer War" research starter, but the page body was not directly read — another reason slv-2 is UNVERIFIED.
- Britannica colonial-period El Salvador page used for the ~500,000→~75,000 figure was reached via search snippet, not a full successful fetch; figure is a widely repeated population-decline estimate, recorded only in display/note with numeric low/high null.

## Real sources consulted (web research, 2026-06-19)
- Wikipedia: La Matanza; El Mozote massacre; Spanish conquest of El Salvador; Truth Commission for El Salvador (fetched — confirmed ~75,000 dead, 85% government attribution, 22,000 testimonies, "From Madness to Hope" March 1993).
- Amnesty International: "El Salvador massacre: a 30-year fight for justice" (2011); "No justice 20 years on from UN Truth Commission" (2013).
- SOA Watch summary of the 1993 UN Truth Commission report.
- Zinn Education Project (La Matanza); Minority Rights Group (Indigenous peoples in El Salvador).
- Encyclopædia Britannica (Football War — 403 on fetch; colonial period — via snippet); EBSCO Research Starters "Soccer War".

## Notes on schema choices
- Event status values used per prompt's allowed set: RESEARCHED / UNVERIFIED. (Note: existing files in the repo use "VERIFIED" for events; followed the prompt's explicit instruction instead.)
- All five entries tiered POL/STR; none EXT. La Matanza has a real ethnocide dimension but was framed by the state against "communists/rebels," so POL with the ethnocidal targeting flagged — kept distinct from the disease-driven STR of slv-1, per the "deliberate destruction of a group = EXT vs disease collapse = STR" rule.
- The perpetrator ledger has 3 events (within the allowed 1–3); victim has 2. Asymmetry is honest: El Salvador's gravest documented mass atrocities were committed by its own state against its own people.

## Audit
Adversarial source-integrity + tier audit, 2026-06-19. Posture: every citation assumed FAKE until independently re-verified against the live source.

### Verdict
- Country status: **UNVERIFIED** (gated by slv-2, which remains intentionally UNVERIFIED).
- Events: 4 VERIFIED (slv-1, slv-3, slv-4, slv-5), 1 UNVERIFIED (slv-2).
- Events flagged / changed: 1 substantive correction (slv-5 summary), plus 4 status promotions RESEARCHED → VERIFIED.
- No invented sources added. No tiers changed (all re-derived independently and confirmed correct).

### Source falsification results (every cite re-checked live)
- **slv-1 — Wikipedia "Spanish conquest of El Salvador":** EXACT MATCH on every numeric claim — 250 Spaniards (100 mounted), 5,000 Guatemalan allies, smallpox 1520–21 with up to ~50% native population dead before 1524, later epidemics 1545–48 and 1576–81 cutting to ~10% of pre-contact levels, ~90% decline within the first century. VERIFIED, supports="summary" holds.
- **slv-1 — Britannica "El Salvador / The colonial period":** URL real; the ~500,000 → ~75,000 over ~50 years figure corroborated via search (visitelsalvador/Britannica snippets). Direct fetch not needed; caveat already discloses it is a population-decline estimate. supports="toll.high" holds (low/high correctly null).
- **slv-3 — Wikipedia "La Matanza":** EXACT MATCH — 10,000–40,000 range; John Beverley ~30,000 / 4%; Col. Osmín Aguirre y Salinas "no more than 6,000 to 7,000"; army used "indigenous appearance, dress, and language" to designate targets; "ethnocide" + near-total loss of Pipil language; uprising 22–25 Jan, army killings 25 Jan–Feb 1932. Every attributed claim verified. VERIFIED.
- **slv-3 — Zinn Education Project + Minority Rights Group:** corroborate ~30,000 central estimate and Pipil targeting; used only as corroboration per caveat. supports="toll.low" holds (low 10,000 also backed by Thomas Anderson "no more than 10,000").
- **slv-4 — Wikipedia "El Mozote massacre":** VERIFIED — "more than 811 civilians," infobox 800–1,000; Atlácatl Battalion under Domingo Monterrosa; 11–12 Dec 1981, army arrived 10th; Truth Commission "full proof... a group of more than 200 men, women and children"; battalion "created in 1981 with US government funding and military training"; Dec 2011 government apology. NOTE: the cite/note phrase ">200 sets of remains" is the Truth Commission's finding language (more than 200 killed at one site, mostly children); forensic exhumation counts reported elsewhere as ~136+ at the El Mozote site specifically — the ">200" is defensible as the TC floor, not a falsification. supports="toll.high" holds.
- **slv-4 — Amnesty International (2011), "El Salvador massacre: a 30-year fight for justice":** EXISTS at the exact cited URL with the exact title; confirms El Mozote, Dec 1981, government forces, "at least 767" massacred (consistent with the >800 framing/named-victim count), 2011 apology. Direct WebFetch 403 (Amnesty anti-bot), confirmed real via search. supports="summary" holds.
- **slv-5 — Wikipedia "Truth Commission for El Salvador" + SOA Watch + USIP/transcend corroboration:** VERIFIED — ~75,000 killed; ~22,000 complaints/testimonies; **85% attributed to State agents**, ~5% to FMLN (the ~10% death-squad share is part of the state-allied total, broadly cited but not isolated on the WP page); "From Madness to Hope," presented 15 March 1993. supports="toll.high" holds. (Cite kind labelled "primary" but URL is Wikipedia — caveat already self-discloses this; the true primary is the report itself.)
- **slv-5 — Amnesty International (2013), "El Salvador: No justice 20 years on from UN Truth Commission":** EXISTS at the exact cited URL with the exact title; confirms ~75,000 dead, TC report 15 March 1993, the 1993 Amnesty Law one week later, persistent impunity. Direct WebFetch 403, confirmed real via search. supports="summary" holds.
- **slv-2 — Britannica "Football War" + EBSCO "Soccer War":** both URLs real. EBSCO confirms ~300,000 Salvadoran migrants, vandalism/boycotts/violence driving Salvadorans out, war deaths "two to three thousand" (i.e. "several thousand") covering the WHOLE war both sides, El Salvador attacked 14 July 1969. Britannica fetch 403 but corroborated. Sources support the entry; the entry is correctly held UNVERIFIED on toll grounds (below), not source grounds.

### Toll low/high coverage
- slv-1: low/high null — soft baseline (130k–1M) and decline-not-count; correctly recorded as % in display/note. OK.
- slv-2: low/high null — NO clean death count exists for the anti-Salvadoran persecution specifically (the "several thousand" is whole-war combat, both sides). Quarantined. OK.
- slv-3: low 10,000 (Anderson; Aguirre's 6–7k is a self-interested official floor, correctly excluded from the structured low) / high 40,000 (WP range). Both ends sourced. OK.
- slv-4: low 811 (named-victim count) / high 1,000 (estimate). Both ends sourced. OK.
- slv-5: high 75,000 robustly multi-sourced; **low 70,000 is weakly attributed** — described as "a commonly used slightly lower figure" with no single source cited for exactly 70,000. Not fabricated (it is a conservative round-down of the same estimate), and disclosed in the note. FLAGGED as soft but acceptable; left as-is rather than inventing a precise source.

### Tier re-derivation (done BEFORE reading assigned tier — all confirmed)
- slv-1 → STR. Disease-driven collapse (~90% epidemic mortality, smallpox preceding Alvarado). Correctly STR, NOT EXT. CONFIRMED.
- slv-2 → POL. Collective persecution + forced displacement of a national group abroad. CONFIRMED.
- slv-3 → POL. State mass killing framed against "communists/rebels," with a genuine ethnocidal dimension (Indigenous targeting by dress/language) flagged in the toll note — the EXT tension is honestly surfaced but the rebel-framing keeps it POL. CONFIRMED (defensible).
- slv-4 → POL. Deliberate counter-insurgency massacre of unarmed civilians. CONFIRMED.
- slv-5 → POL. Twelve years of state mass killing/disappearance of civilians; El Mozote split out under slv-4 to avoid double-counting. CONFIRMED.
No tier or tier_reasoning corrections required.

### Corrections written to SLV.json
1. **slv-5 summary** — changed "about 95% of the documented violence against civilians" to "about 85% ... to government armed forces, with allied death squads accounting for roughly a further 10% and the FMLN a much smaller share." The "95%" contradicted every other field in the same event (toll.display, toll.note, tier_reasoning, the cite all say ~85%/+10%) AND the actual Truth Commission finding (85% to State agents). Corrected to the verified figure.
2. **Statuses** — slv-1, slv-3, slv-4, slv-5 promoted RESEARCHED → VERIFIED; slv-2 left UNVERIFIED; country promoted from RESEARCHED to **UNVERIFIED** (it cannot be VERIFIED while slv-2 is UNVERIFIED).

### Ledger check (law 1)
Both ledgers populated where the record supports it — victim (slv-1 large/solid, slv-2 deliberately thin and quarantined) and perpetrator (slv-3/4/5). The asymmetry (perpetrator side heavier) is honest and not padded; no invented balance demanded. OK.
