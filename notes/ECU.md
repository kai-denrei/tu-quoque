# Ecuador (ECU) — research notes

Built from scratch, 2026-06-18. Web tools (WebSearch/WebFetch) loaded and used for real research.

## What was built

Dual ledger, 3 events:

- **Done to them (victim) — 1 event**
  - `ecu-1` Spanish conquest and disease collapse of the peoples of Ecuador, 1530s-1600s (STR).
- **In their name (perpetrator) — 2 events**
  - `ecu-2` Aztra massacre of striking sugar workers, 1977 (POL).
  - `ecu-3` State terror and death squads under Leon Febres Cordero, 1984-1988 (POL).

## Key findings

### Victim side — colonial demographic collapse (ecu-1)
- The standard scholarly work is **Linda A. Newson, "Life and Death in Early Colonial Ecuador"** (Univ. of Oklahoma Press, 1995). Reviews/summaries give: decline from **~1.5 million at contact to ~217,000 by end of the 16th century**, an overall **depopulation of ~72-95%**, with the Sierra collapsing ~4x faster than the Coast (highland ratio ~5.2:1, 1520-1600).
- A competing/lower baseline: contact population **~1 million (1534)**; a **1778 census** of ~439,000 total (63% Indigenous). Used for the low-baseline end of the decline range.
- Driver was disease (smallpox ran ahead of the conquistadors and killed Inca Huayna Capac) plus mita/encomienda/obraje forced labor. Filed **STR** per atlas rules (disease-driven collapse, not deliberate extermination).
- Toll entered as a **population-decline range (~700k-1.3M)** in `low_alt`/`high_alt`; death-count `low`/`high` left **null** because population decline ≠ death count. Event status **UNVERIFIED** for that reason.

### Perpetrator side — Aztra massacre (ecu-2)
- 18 Oct 1977, Aztra sugar mill, La Troncal, Canar province. **National Police** (~100 officers, cmdrs Eduardo Diaz, Lenin Cruz) fired on striking, mostly Indigenous sugar workers under the Supreme Council of Government dictatorship.
- **Toll is genuinely disputed and was actively obscured:** dictatorship admitted **26** ("drowned," blamed an invented "international terrorist plot"); union/historian/Ecumenical Commission accounts say **>100 killed**; combined dead+disappeared "official" tally cited at **~120** (incl. women and children). Bodies destroyed — reportedly thrown into the mill boilers or buried in the canal — so a firm count is impossible. Range entered as **26-120**, status **UNVERIFIED**.
- No one was ever tried.

### Perpetrator side — Febres Cordero state terror (ecu-3)
- 1984-1988 presidency of Leon Febres Cordero. National Police clandestine units: **SIC-10** and **escuadrones volantes** ("flying squads"/death squads), created May 1985 with backing of Gov. of Guayas Jaime Nebot and Interior Min. Luis Robles Plaza. Defining case: abduction/murder of the teenage **Restrepo brothers** (Jan 1988).
- **Ecuador's official Truth Commission (Comision de la Verdad), 2010 report:** **456 victims** documented for 1984-2008, ~two-thirds under Febres Cordero.
- Category breakdowns vary between summaries (noted in toll.note): one gives 68 extrajudicial executions / 269 illegal detentions / 365 tortured; another gives 32 executions / 9 disappearances / 12 attempted homicides / 214 detentions / 275 tortured (+72 sexual-abuse cases for the flying squads). Unit is **victims**, not deaths. Status **RESEARCHED** (official state figure, not in dispute as to order of magnitude).

## What is contested
- **Colonial toll:** population-decline estimates diverge (~1M vs ~1.5M contact baseline) and fold disease/war/labor/famine together — no death count exists.
- **Aztra toll:** 26 (regime) vs ~100-120 (labor/historians); deliberately destroyed bodies prevent verification.
- **Truth Commission breakdown:** the sub-category numbers differ between secondary summaries; the 456 total is firm.

## What could NOT be verified
- A precise death count for the colonial collapse (none exists; left null).
- A reconciled exact Aztra death toll (irreducibly disputed; entered as a range).
- The full Newson monograph itself was not accessed directly — figures are from reviews (H-Net, HAHR/Duke UP), the publisher page, and corroborating searches. Duke UP and Britannica pages returned HTTP 403 to WebFetch; relied on search-result extracts and the H-Net/OU Press summaries instead.

## Real sources consulted
- Linda A. Newson, *Life and Death in Early Colonial Ecuador* (1995) — via OU Press page, H-Net review, HAHR/Duke UP review listing, and Semantic Scholar.
- Wikipedia: "Indigenous peoples in Ecuador", "Aztra massacre", "Masacre de Aztra" (es), "Escuadrones volantes", "La Comision de la Verdad".
- Center for Justice and Accountability (CJA) — Ecuador transitional-justice page (Truth Commission, 456 victims, 1984-2008).
- USIP "Truth Commission: Ecuador 07" (listing), GK City and es.wikipedia "Caso Restrepo" (context for the Restrepo case and death squads).
- Britannica "Ecuador / The colonial period" (403 on fetch; context only).

## Open items / asymmetry note
The victim ledger holds a single dominant event (colonial collapse); the asymmetry is explained in the country `note`. No perpetrator event was invented to balance — the modern republic's documented atrocities (Aztra, Febres Cordero) are real and stand on their own. A possible additional victim entry (1941 Ecuadorian-Peruvian War) was considered and rejected: territorial loss, not a mass-atrocity/mass-death event of comparable scale.

## Audit
Adversarial source-integrity + tier audit, 2026-06-18. Premise: assume every citation is fake until proven otherwise. Web tools (WebSearch/WebFetch) used to attempt to falsify each source. Result: country status flipped RESEARCHED -> **VERIFIED**; all 3 events VERIFIED.

### ecu-1 — Spanish conquest / disease collapse (STR) — UNVERIFIED -> VERIFIED
- **Source integrity:** Linda A. Newson, *Life and Death in Early Colonial Ecuador* (Univ. of Oklahoma Press, 1995) is a **real** book by a real author. Confirmed via the H-Net review (Gallagher on Newson), the OU Press page, Google Books, WorldCat (OCLC 31605562), Amazon, Internet Archive, and the American Ethnologist review (Whitten 1996). Headline figures independently corroborated: decline from ~1.5M at contact to ~217,000 by end of the 16th c., overall depopulation ~72-95%, Sierra collapse ~4x the Coast. The source genuinely supports the `toll.note` claim it is attached to. Wikipedia secondary source supports the `summary` (lower ~1M baseline, 1778 census ~439k, Huayna Capac smallpox death). Caveats honest.
- **Toll:** death-count low/high correctly **null** (these are population-decline estimates, not death counts); both ends of the decline range (`low_alt` ~700k / `high_alt` ~1.3M) are sourced to the two contact baselines. Not a single-source single-number toll.
- **Tier:** independently re-derived as **STR** before reading the assigned tier — dominant killer was Old World epidemic disease (smallpox/measles/diphtheria) compounded by conquest + forced labor; disease-driven collapse = STR, not EXT. Assigned tier correct. STR-vs-EXT rule enforced and passes.
- **Verdict:** sources verifiable, claims supported, tier correct -> **VERIFIED**. Added `toll.audit_note`.

### ecu-2 — Aztra massacre (POL) — UNVERIFIED -> VERIFIED
- **Source integrity:** Both en/es Wikipedia citations are real and the massacre is independently corroborated by Ecuadorian outlets (El Telegrafo "La matanza de Aztra," Primicias "Las victimas de Aztra," La Hora, Diario Los Andes, Extra) and CONAIE's 47th-anniversary commemoration. Confirmed: 18 Oct 1977; Aztra mill, La Troncal, Canar; ~100 National Police; commanders Eduardo Diaz and Lenin Cruz; ~2,000 workers occupied the plant; families/children present; canal drownings; boiler body-disposal accounts; invented "international terrorist plot"; no one tried.
- **Toll (disputed, both ends sourced):** high end (~120 dead and disappeared) strongly corroborated, incl. CONAIE ("mas de 120 obreros"). **Finding:** the exact *official low* is itself murky across sources — variously 16 (en.wiki extract), 24 bodies found, 25 "recognized" by police, or 26. "26" is one defensible minimizing figure and is retained as the low end of an already-disputed range; this variation is now flagged in `toll.note` for transparency. The load-bearing fact (a ~20s official figure vs a ~120 labor/HR tally) holds. Not a single-source toll — low and high both backed.
- **Tier:** independently re-derived as **POL** — security forces killing unarmed strikers en masse under a dictatorship is state political mass violence, not WAR or EXT. Assigned tier correct.
- **Verdict:** sources verifiable, claims supported, contested toll dual-sourced, tier correct -> **VERIFIED**.

### ecu-3 — Febres Cordero state terror (POL) — RESEARCHED -> VERIFIED
- **Source integrity:** CJA "Ecuador" page is **real** and independently confirms 456 victims, the 1984-2008 mandate, and the two-thirds concentration under Febres Cordero. Further corroborated by El Universo (8 June 2010, "Informe senala 456 victimas"), USIP "Truth Commission: Ecuador 07," and academic syntheses (Cambridge "Ecuador's Truth Commission," PEPSIC), which give the 68 executions / 269 detentions / 365 torture breakdown and place 310/456 (~two-thirds) under Febres Cordero. SIC-10 (1984) and escuadrones volantes (23 May 1985, El Guasmo, Guayaquil) confirmed; Jaime Nebot's presence at the creation event and Luis Robles Plaza's role as Minister of Government backing the squads confirmed; flying-squad breakdown (32/9/214/275/72/12) and the Restrepo brothers case confirmed. Both citations support the claims they are attached to.
- **Toll:** unit correctly **victims**, not deaths; 456 is an official state figure (Comision de la Verdad), not in dispute as to order of magnitude. `disputed:false` is appropriate; the varying sub-category breakdowns are honestly recorded as a range in `toll.note`. Not a fabricated balance figure.
- **Tier:** independently re-derived as **POL** — systematic torture/disappearance/execution of political opponents by security services = political mass violence, not WAR or EXT. Assigned tier correct.
- **Verdict:** sources verifiable, claims supported, tier correct -> **VERIFIED**. Added audit detail to `toll.note`.

### Ledger / balance check (law 1)
Both ledgers populated where the record supports it: victim side = ecu-1 (colonial collapse); perpetrator side = ecu-2 + ecu-3. The 1-vs-2 asymmetry is genuine and explained in the country `note`; no invented event was demanded or added to force balance.

### Falsification summary
No fabricated sources found. Every cited work exists and supports its attached claim. Only material adjustment: the Aztra official-low figure is one of several minimizing counts (16/24/25/26) rather than a single uncontested "26" — flagged in-record, does not invalidate the source or the disputed-range treatment. All 3 events -> VERIFIED; country -> VERIFIED.
