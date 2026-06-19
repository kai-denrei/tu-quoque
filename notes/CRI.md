# Costa Rica (CRI) — research log

Built from scratch 2026-06-19. No prior seed file. Web tools (WebSearch/WebFetch) loaded and used.

## Ledger summary
- **Done to them (victim):** 1 event — `cri-1`, the demographic collapse of indigenous Costa Rica after Spanish contact (1502–c.1600). Tier STR (disease-driven structural collapse).
- **In their name (perpetrator):** 1 event — `cri-2`, the Codo del Diablo murders, 19 Dec 1948. Tier POL (targeted political killing by state agents).

The ledgers are deliberately asymmetric and the note explains why: Costa Rica has no documented state-organized mass killing on the scale of its Central American neighbors, and abolished its army in 1948. The Codo del Diablo case is the cleanest documented act of lethal state political violence.

## What I found

### Victim — indigenous demographic collapse
- Pre-contact population at Columbus's 1502 landfall is **genuinely contested**. Two bands appear repeatedly:
  - ~400,000–500,000 across ~19 chiefdoms (cacicazgos/señoríos: Nicoya, Guarco, Garabito, Voto, Corobicí, Boruca, Coto, Talamanca). Source: popular history sites; this is the upper band.
  - ~20,000 — foregrounded by English Wikipedia's "Indigenous peoples of Costa Rica" page. Much lower.
  - This is a real historiographical disagreement, flagged as `disputed: true` with both bands noted in the toll.note. Toll low/high bracket the 400,000–500,000 estimate; the 20,000 figure is named as a contesting view.
- Decline trajectory (corroborated across search results): ~120,000 by 1561; ~7,000–8,000 by end of 16th century; one colonial count of just 999 by 1714; ~70% workforce drop between the 1560s and 1611.
- Causes: smallpox/measles/influenza (primary), plus conquest violence, slave-raiding, and the encomienda. Classed STR per atlas rule (disease-driven collapse = STR).

### Perpetrator — Codo del Diablo murders
- Date 19 Dec 1948; 6 victims, precise and undisputed: Federico Picado Sáenz, Tobías Vaglio Sardi, Lucio Ibarra, Octavio Sáenz Soto, Álvaro Aguilar, Narciso Sotomayor (Nicaraguan). All linked to the communist Vanguardia Popular.
- Perpetrators named: Capt. Manuel Zúñiga Jirón and agent Luis Norberto Valverde Quirós (Public Force), plus Cuban-born driver Clarencio Auld Alvarado. Aligned with the victorious Figueristas under the de facto Founding Junta of the Second Republic.
- Method: taken from a train, shot at the Reventazón river bend ("the Devil's Elbow") near Siquirres, Limón; bodies thrown in the river.
- Aftermath: charged and convicted but fled the country, reportedly with government help; no prison time. received_lens set to "suppressed."

## Context not given its own event
- **1948 Costa Rican Civil War** (12 Mar–24 Apr 1948): ~2,000 dead, the bloodiest event of 20th-century Costa Rican history. Figueres's rebels vs. the Picado government + Communist (Vanguardia Popular) militias + Nicaraguan National Guard. NOT given its own ledger entry — agency in the wider war is shared and contested (both sides killed); it is summarized as context inside the perpetrator event and the country note. EBSCO research starter: "fewer than one hundred" of the ~2,000 dead were from the revolutionary ranks.

## What could NOT be verified / caveats
- Britannica pages (history-of-Costa-Rica, Costa-Rica/People) returned **HTTP 403** to WebFetch; the colonial demographic figures attributed to Britannica in `cri-1` come from the search-result summary, not full-text read. Flagged in the source caveat.
- Grokipedia page returned 403; not used.
- Pre-contact population baseline is the single biggest uncertainty — bracketed as disputed rather than asserted.
- No scholarly monograph URL secured for the indigenous collapse (unlike CUB's Tone/Reséndez); sources here are reference + popular-history. Decline-trajectory figures are nonetheless corroborated across multiple independent search results.

## Real sources consulted
- en.wikipedia.org/wiki/Indigenous_peoples_of_Costa_Rica
- en.wikipedia.org/wiki/Costa_Rican_Civil_War
- en.wikipedia.org/wiki/Codo_del_Diablo_murders
- es.wikipedia.org/wiki/Asesinatos_del_Codo_del_Diablo
- costaricaspecialists.co.uk/costa-rica-information/history/ (popular history, 400k–500k band)
- ebsco.com research starter: "Costa Rica Endures Its Bloodiest Civil War" (1948 war toll)
- britannica.com/topic/history-of-Costa-Rica (via search summary only; direct fetch 403)
- en.wikipedia.org/wiki/Demographics_of_Costa_Rica (modern census only; no historical collapse data)

## Audit

Adversarial source-integrity + tier audit, 2026-06-19. Premise: every citation FAKE until proven otherwise. Every attached URL was re-fetched directly (not trusted from prior research); each cite checked against what the page actually says.

### Verdict: country VERIFIED — both events VERIFIED. 1 falsified source replaced, 1 cite corrected, 1 academic source added.

### cri-1 — Indigenous demographic collapse → VERIFIED (was RESEARCHED), tier STR upheld
- **FALSIFIED SOURCE (removed):** `costaricaspecialists.co.uk/.../history/` was attached to `toll.high` claiming "~400,000–500,000 across roughly nineteen chiefdoms ... Nicoya, Guarco, Garabito, Boruca, Coto, Talamanca." Direct fetch shows the page contains NONE of that — it only says Costa Rica "was sparsely inhabited by indigenous people when Christopher Columbus came ashore in 1502." The citation did not support its claim. **Replaced** with `anywhere.com/costa-rica/travel-guide/history`, directly verified to state verbatim "approximately nineteen different chieftainships ... a mixture of both cacicazgos and señorios – accommodating a combined population of between 400,000 and 500,000" and the fall to ~120,000 by 1561. The figure itself was always real; the original URL just didn't back it.
- **CITE CORRECTED:** the en.wikipedia "Indigenous peoples" source (`toll.low`) had been credited with "~7,000–8,000 remaining by the end of the 16th century." Direct fetch: the page gives ~20,000 at contact and names disease/smallpox + enslavement, but does NOT contain the 7,000–8,000 endpoint. Cite rewritten to match the page's real content; still validly supports `toll.low`.
- **ACADEMIC SOURCE ADDED:** Solórzano Fonseca, "The indigenous population of Costa Rica in the 16th century..." (SciELO Costa Rica, 2017, S2215-41752017000100313). Substantiates `toll.note` / the `disputed:true` framing: it explicitly contrasts the conventional ~400,000 estimate with Bishop Thiel's ~27,000 figure (which it favors). This is the scholarly anchor the original research lacked (notes line 34) and confirms BOTH ends of the disputed baseline.
- **Britannica (`summary`):** 403 on direct fetch, re-confirmed — exactly as the existing caveat disclosed. The ~120,000 (1561), ~7,000–8,000 (end of 16th c.), and ~70% workforce drop (1560s–1611) figures are corroborated by independent search results (anywhere.com; multiple aggregates). Honest caveat kept; acceptable.
- **TIER:** independently re-derived before reading assigned — driver is Old World epidemic disease (smallpox/measles/influenza) compounded by enslavement and the encomienda. Disease-driven structural/demographic collapse = STR, NOT EXT. Assigned STR is correct. No change.
- **TOLL:** disputed range now has a verified source at each end (low ~20k/27k: Wikipedia + SciELO; high ~400–500k: anywhere.com + SciELO). `disputed:true` correct. Population-decline (not counted-body) framing honestly flagged in display + note.

### cri-2 — Codo del Diablo murders → VERIFIED (was RESEARCHED), tier POL upheld
- **ALL SOURCES VERIFIED.** en.wikipedia and es.wikipedia pages both exist and were directly fetched. Both confirm: the six victims (Federico Picado Sáenz, Tobías Vaglio Sardi, Lucio Ibarra, Octavio Sáenz Soto, Narciso Sotomayor [Nicaraguan], Álvaro Aguilar); the three perpetrators (Capt. Manuel Zúñiga Jirón, Luis Norberto Valverde Quirós, driver Clarencio Auld Alvarado); Vanguardia Popular affiliation; Siquirres/Reventazón "Codo del Diablo" location; convicted-but-fled-abroad-with-government-help outcome. es.wikipedia adds the de facto Junta Fundadora de la Segunda República / figuerista context and calls it "the only known case after 1948" of citizens killed for political ideas by persons linked to the State.
- **Corroboration beyond the two cited pages:** 2014 documentary "El Codo del Diablo" (dir. Ernesto & Antonio Jara) confirmed via Programa Ibermedia and Centro Costarricense de Producción Cinematográfica; Costa Rican outlets El Espíritu del 48, La República, SURCOS Digital all cover the case consistently.
- **TIER:** independently re-derived — targeted extrajudicial killing of 6 imprisoned political opponents for communist affiliation; small-scale, not group-elimination. POL is correct. No change.
- **TOLL:** 6, precise and undisputed across every source. Single number is appropriate here (not a flag-worthy single-source toll) because it is an exact, multiply-corroborated count, not a contested estimate.

### Ledger balance (law 1)
Asymmetry (1 victim STR / 1 perpetrator POL) is genuine and well-explained in the country note — Costa Rica has no documented state mass-killing on the regional scale; the Codo del Diablo case is the cleanest lethal state political violence on record. No invented balance demanded or added.

### Sources newly fetched/verified during audit
- en.wikipedia.org/wiki/Indigenous_peoples_of_Costa_Rica (direct fetch — confirmed ~20k + disease/enslavement; does NOT contain 7–8k endpoint)
- en.wikipedia.org/wiki/Codo_del_Diablo_murders (direct fetch — all names/facts confirmed)
- es.wikipedia.org/wiki/Asesinatos_del_Codo_del_Diablo (direct fetch — names + Junta context confirmed)
- anywhere.com/costa-rica/travel-guide/history (direct fetch — 400–500k / 19 chiefdoms / 120k-by-1561 verbatim; NEW replacement source)
- scielo.sa.cr/...S2215-41752017000100313 (academic abstract — disputed baseline 400k vs ~27k; NEW source)
- costaricaspecialists.co.uk/.../history/ (direct fetch — FALSIFIED: does not contain its attributed claim; REMOVED)
- britannica.com/topic/history-of-Costa-Rica (re-confirmed HTTP 403; summary-only, caveat retained)
