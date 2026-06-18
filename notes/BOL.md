# Bolivia (BOL) — research log

Built from scratch 2026-06-18. Dual-ledger entry: 1 victim event, 2 perpetrator events.

## Ledger summary

### Done to them (victim)
- **bol-1 — Potosi mita / Cerro Rico (1573-1825), STR.** Spanish colonial forced-labor draft + disease at the silver mountain. Status UNVERIFIED on toll grounds.

### In their name (perpetrator)
- **bol-2 — Catavi massacre (1942), POL.** Bolivian army fires on striking Patino tin miners under President Penaranda. Status VERIFIED.
- **bol-3 — Garcia Meza dictatorship / "Cocaine Coup" (1980-1981), POL.** Military regime killings, disappearances, torture. Status VERIFIED.

## What is contested / could not be verified

- **Potosi toll is the central problem.** Death-count low/high left null. The famous "eight million" figure comes from Eduardo Galeano's *Open Veins of Latin America* and is treated by many historians as inflated and/or conflating the whole Viceroyalty of Peru with the mines specifically. The Wikipedia Cerro Rico article itself carries both the 8M high and a "hundreds of thousands" conservative low and flags the conflation. Recorded as a disputed order-of-magnitude range (~100k-8M) in low_alt/high_alt, NOT as a death count. Event marked UNVERIFIED.
- **Catavi toll diverges by an order of magnitude:** official report 19 dead / ~400 wounded vs workers' estimate up to ~400 dead. Both bounds sourced; true figure unknown. The gap (state minimization vs labor-movement memory) is itself the record.
- **Garcia Meza toll:** the "~1,000 killed in 13 months" is a single round estimate widely repeated, not a verified register, so low left null, high set at 1,000 with caveat. APDHB recorded ~164 disappeared 1979-1982; Amnesty cites ~150 disappeared / ~200 executed across the full 1964-1982 dictatorship span (other scholarship: up to ~650 assassinated).
- **HRW Bolivia 1992 PDF could not be parsed** (returned as binary content via WebFetch). Cited as the underlying human-rights documentation, but the specific figures were corroborated through its summaries in secondary/reference sources rather than direct full-text extraction. Flagged in the source caveat.

## Chaco War — deliberately NOT a ledger event (recorded in country note)

The Chaco War (1932-1935) is a genuine borderline case. Bolivia helped start it (President Daniel Salamanca ordered the escalation; Gen. Hans Kundt commanded). Bolivian dead: ~50,000-65,000 (Wikipedia infobox 50k-80k; Britannica ~57k), ~2% of population, many from dehydration/disease in the Chaco lowlands. ~90% of Bolivian infantry were Aymara/Quechua conscripts forcibly pressed into the army by the Criollo elite despite "little or no connection to the nation." This is the sharpest dual-lens angle — the state sending its own forcibly-conscripted highland Indigenous men to die — but the canonical framing is an interstate WAR, so it is recorded as context in the country note rather than forced into either ledger. Could be promoted to a perpetrator (forced conscription) or WAR event in a later pass if the atlas wants it.

## Real sources consulted

- Cerro Rico — Wikipedia: https://en.wikipedia.org/wiki/Cerro_Rico (8M high + "hundreds of thousands" low + conflation flag)
- The Man-Eating Mines of Potosi — Cultural Survival Quarterly: https://www.culturalsurvival.org/publications/cultural-survival-quarterly/man-eating-mines-potosi
- Eduardo Galeano, *Open Veins of Latin America* excerpts (UKy PDF): https://www.uky.edu/~tmute2/nature-society/password-protect/nature-society-pdfs/eduardo-galeano-open-veins-excerpts.pdf
- Catavi massacre — Wikipedia: https://en.wikipedia.org/wiki/Catavi_massacre
- Catavi Massacre — Encyclopedia.com: https://www.encyclopedia.com/humanities/encyclopedias-almanacs-transcripts-and-maps/catavi-massacre
- Luis Garcia Meza — Wikipedia: https://en.wikipedia.org/wiki/Luis_Garc%C3%ADa_Meza
- HRW/Americas Watch Bolivia report, Dec 1992 (PDF, not parseable in full): https://www.hrw.org/reports/pdfs/b/bolivia/bolivia92d.pdf
- The Globe and Mail, Garcia Meza obituary (2018): https://www.theglobeandmail.com/world/article-bolivias-former-military-dictator-luis-garcia-meza-dies-at-88/
- Chaco War — Wikipedia: https://en.wikipedia.org/wiki/Chaco_War (context only)
- Chaco War — Britannica: https://www.britannica.com/event/Chaco-War (context only)

## Schema note

Existing country files use event-level status `VERIFIED`/`UNVERIFIED` (not the prompt's `RESEARCHED`); followed the codebase convention for events. Country wrapper status set to `RESEARCHED` per the wrapper spec. One toll uses the `low_alt`/`high_alt` pattern (as in CHL.json) to record a disputed order-of-magnitude range while keeping death-count low/high null.

## Audit

Adversarial source-integrity + tier audit, 2026-06-18 (Opus 4.8). Premise: assume every citation FAKE until proven otherwise. Each source was fetched/searched and tested against the specific claim it is attached to.

### Source integrity — every source verified to EXIST and SUPPORT its claim
- **bol-1 / Cerro Rico, Wikipedia (`supports: toll.note`)** — VERIFIED. Carries verbatim the 8M high estimate, the "hundreds of thousands" conservative low, AND the explicit flag that the 8M may be the whole Viceroyalty of Peru rather than Potosi. Exactly as cited; used to document the dispute, not assert a number.
- **bol-1 / Cultural Survival "The Man-Eating Mines of Potosi" (`supports: summary`)** — VERIFIED. Title correct; carries the "estimated eight million" colonial death claim and the silicosis / "life expectancy not above forty" detail. Advocacy framing already disclosed in caveat.
- **bol-1 / Galeano, "Open Veins of Latin America" UKy excerpt PDF (`supports: toll.high`)** — VERIFIED (with parsing caveat added). The PDF is the genuine excerpt file (appears in independent search results); its binary content could not be parsed by automated fetch, so the attribution of the "8M at Potosi over three centuries" claim to Galeano was independently corroborated via multiple secondary sources. Caveat in the file updated to record this. Galeano's polemical status was already disclosed.
- **bol-2 / Catavi massacre, Wikipedia (`supports: toll.low`)** — VERIFIED. Confirms 19 killed / 400 wounded official vs up to 400 workers' estimate, Patino company, President Penaranda, ~7,000 strikers, 21 Dec 1942. Both toll bounds present.
- **bol-2 / Catavi Massacre, Encyclopedia.com (`supports: summary`)** — VERIFIED. Exists; confirms Patino wage demands, soldiers firing on marchers, wide international protest (US State Dept, AFL/CIO delegation). (Note: it frames 21 Dec casualties as "35 killed or wounded" — a lower framing than the toll range, but it is cited only for the summary narrative, which it supports; the 19/400 toll bounds come from the Wikipedia source, which carries both.) Maria Barzola the palliri, killed carrying the flag, independently corroborated.
- **bol-3 / Luis Garcia Meza, Wikipedia (`supports: toll.high`)** — VERIFIED. Confirms "some 1,000 estimated killed in 13 months," 17 Jul 1980 Cocaine Coup, Arce Gomez as chief repressor, Quiroga Santa Cruz murdered/disappeared, 30-year sentence.
- **bol-3 / HRW / Americas Watch Bolivia report Dec 1992, bolivia92d.pdf (`supports: toll.note`)** — VERIFIED to exist (confirmed in HRW's own search index as "December 1992 Volume IV, Number 11 BOLIVIA"). PDF binary, unparseable by fetch — caveat already honest about this. The ~1,000-killed and APDHB ~164-disappeared (1979-1982) figures corroborated via secondary sources incl. USIP Truth Commission Bolivia.
- **bol-3 / Globe and Mail obituary (`supports: summary`)** — VERIFIED. Exists; confirms 1980 bloody coup deposing Lidia Gueiler, 2017 Rome conviction over 23 victims of Italian origin, 30-year imprisonment, death 2018 at 88.

No fabricated, mis-attributed, or claim-mismatched sources found. No invented sources added.

### Toll dual-source check
- **bol-1** — low/high correctly null (toll is irreducibly uncountable); low_alt (~100k) and high_alt (~8M) both sourced. Sound; this is honest non-counting, not a single-number toll.
- **bol-2** — low (19) and high (400) BOTH independently sourced. Dual-source satisfied.
- **bol-3** — high (1,000) sourced; low null (single round estimate, honestly flagged). Not a hidden single-number toll — the null is disclosed.

### Tier re-derivation (derived from facts BEFORE reading assigned tier)
- **bol-1 STR** — forced-labor draft + mercury/silicosis/cave-ins/epidemics = mass death as byproduct of extraction and disease, NOT a declared program to annihilate a defined group. Disease-driven ⇒ STR, not EXT (rule enforced). CORRECT, unchanged.
- **bol-2 POL** — state security forces firing on unarmed strikers/families to crush a labor movement = political repression, not WAR, not EXT. CORRECT, unchanged.
- **bol-3 POL** — systematic killing/disappearance/torture of political opponents to seize and hold power = political mass violence, not WAR, not EXT. CORRECT, unchanged.

All three tiers independently re-derived as already correct; no tier or tier_reasoning changed.

### Verdict
- **bol-1: UNVERIFIED** — retained, SOLELY on toll grounds (death count irreducibly contested, intentionally null). Source integrity is clean; an audit note to that effect was added to `toll.note` so the UNVERIFIED is not mistaken for a sourcing failure.
- **bol-2: VERIFIED.**
- **bol-3: VERIFIED.**
- **Country: UNVERIFIED** (downgraded from RESEARCHED) — VERIFIED requires ALL events verified; bol-1 is not.

### Edits written to BOL.json
1. Country `status` RESEARCHED → UNVERIFIED.
2. bol-1 `toll.note` — appended audit note confirming source integrity and clarifying UNVERIFIED is toll-only.
3. bol-1 Galeano source `caveat` — appended note on the PDF parsing limitation + independent corroboration.
JSON re-validated as well-formed after edits.
