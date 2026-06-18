# Angola (AGO) — research log

Built from scratch 2026-06-18. Web tools (WebSearch/WebFetch) loaded and used for all research. Five events: 3 victim, 2 perpetrator.

## Events

### Victim ("Done to them")
- **ago-1 — Atlantic slave trade from the Angolan coast (16th–19th c.), POL, UNVERIFIED.** West Central Africa (Angola–Kongo coast + St. Helena) was the single largest embarkation region of the whole Atlantic trade: ~5.7M of ~12.5M embarked Africans (1501–1867), per Slave Voyages; Luanda the busiest single port. Tolls left NULL: the verifiable numbers are trafficking volumes (embarkations), not deaths — a discrete death toll for the Angolan trade is genuinely unsourceable, so status UNVERIFIED for the death metric only. Caveat carried in the note + relevance: African intermediary polities (Imbangala, Mbundu) supplied captives, so the same event has an African-agency dimension (dual lens inside one catastrophe). Mirrors the COD.json treatment of the slave trade.
- **ago-2 — Ovambo genocide (1915), EXT, RESEARCHED.** Portuguese army under Gen. Pereira d'Eça, ~10,000 troops, against Ovambo king Mandume ya Undemufayo after the Naulila defeat (Dec 1914). Village-burning + engineered famine. Scholar Arturo Zoffmann Rodriguez (Journal of African History, Cambridge) classes it as genocide, most-plausible ~35,000–78,000 deaths. 1919 Portuguese reparations commission span: 17,000–130,000 (used for low/high). Strongest single scholarly source in the file.
- **ago-3 — War of independence / Baixa de Cassanje repression (1961–1974), WAR, RESEARCHED.** Toll bounded only for the Jan 1961 Cassanje episode (the best-documented): ~400 (low) to ~20,000 (wider counter-insurgency by Sept 1961); MPLA wartime claim of ~10,000 in air raids flagged as a partisan claim. Note that the same year's northern UPA uprising killed ~1,000 white settlers — violence ran both ways from the start (dual lens).

### Perpetrator ("In their name")
- **ago-4 — 27 May / Nitista purge (1977), POL, RESEARCHED.** MPLA gov of Agostinho Neto + Cuban troops, after Nito Alves's failed coup. Range ~2,000 (floor) to ~70,000 (high); Amnesty International ~30,000. Secret trials under Iko Carreira, unmarked graves, May–Nov 1977. Lara Pawson, *In the Name of the People: Angola's Forgotten Massacre* (2014) cited for the scale and the state's denial. Received lens: denied.
- **ago-5 — Government conduct in the civil war (1975–2002), WAR, RESEARCHED.** War total 500,000–800,000 deaths, >1M displaced — explicitly NOT apportioned to the government alone (UNITA's atrocities at least as grave; both laid mines). Sourced via Wikipedia (war total) + USIP 1999 and US State Dept 1998 HR report, with a mandatory caveat that USIP/State are US gov bodies that backed UNITA during the war.

## Contested / could-not-verify
- **Slave-trade death toll:** unsourceable as a single figure → null + UNVERIFIED. Trafficking volumes solid (~5.7M region embarkations).
- **1977 purge toll:** range spans 2,000–70,000 (35x); reflects total absence of any official accounting, not a settled figure.
- **Cassanje / independence-war toll:** no independent count; MPLA's 10,000 air-raid claim is partisan. Only the 1961 episode is bounded; the full 13-year civilian toll is not reliably aggregated anywhere I found.
- **Civil war toll:** 500k–800k is war-wide; cannot be attributed to government forces specifically.
- **SlaveVoyages estimates page** is JS-rendered and returned no data via WebFetch; the 5.7M / 12.5M figures came from the WebSearch summary citing slavevoyages + corroboration from the Voyages database Wikipedia article (total 12.5M embarked, 1501–1867) and the 'Slavery in Angola' article (Angola the principal source; Luanda ~203,000 exported 1723–1771).

## Real sources consulted
- Arturo Zoffmann Rodriguez, "The Ovambo Genocide…," *Journal of African History*, Cambridge Core.
- Slave Voyages (Trans-Atlantic Slave Trade Database), Estimates.
- Wikipedia: Slavery in Angola; Voyages: The Trans-Atlantic Slave Trade Database; Baixa de Cassanje revolt; Angolan War of Independence; 1977 Angolan coup attempt; Angolan Civil War.
- Lara Pawson, *In the Name of the People: Angola's Forgotten Massacre* (2014) — via the coup-attempt article.
- United States Institute of Peace, "Angola's Deadly War" (1999); U.S. State Dept 1998 Human Rights Report on Angola — both flagged as US-gov sources that backed UNITA.

## Status
Country status RESEARCHED. One event (ago-1, slave trade) UNVERIFIED for the death metric only — by design, not a gap in research. Perpetrator ledger is genuinely thinner than victim ledger; asymmetry explained in the country note (and both perpetrator events are real and state-attributed).

## Audit
Adversarial source-integrity + tier audit, 2026-06-18 (kai-denrei). Premise: every citation FAKE until proven otherwise. Tools: WebSearch/WebFetch. Country status set to UNVERIFIED (one event UNVERIFIED → law: country VERIFIED only if all events VERIFIED).

### Source falsification — results
- **ago-1 (slave trade).** Both sources real and supportive. SlaveVoyages estimates page is JS-rendered (no body via WebFetch), but the 5.7M-of-12.5M West Central Africa + St. Helena figure is independently corroborated (Statista citing SlaveVoyages; ~12.5M total embarked 1501–1867). 'Slavery in Angola' (Wikipedia) WebFetch confirms verbatim: "Angola was the principal source of slaves," "~203,000 slaves were exported from Luanda" (1723–1771, per a 1972 study), "Mortality at sea was 9.5% for adult slaves and 6.2% for child slaves." Death toll correctly null. **Status held UNVERIFIED** (death metric only, by design — quarantine note already present in toll.note).
- **ago-2 (Ovambo genocide).** Cambridge Core article CONFIRMED to exist: Arturo Zoffmann Rodriguez, Journal of African History vol. 67 (2026), NOVA University of Lisbon. Article confirms the 1919 reparations-commission span (~17,000–130,000) and the genocide classification ("arguably constituted genocide"; "comparable to" acknowledged genocides). **DEFECT FOUND + CORRECTED:** the original toll.high cite attributed a "most-plausible ~35,000–78,000" range to Rodriguez. The article shows this range is actually **Emmanuel Kreike's** population figure (Lower Cunene ~78,000→35,000, 1915–25), which Rodriguez merely discusses; Rodriguez declines to fix his own number ("whatever the exact number…") and calls the commission figures possibly "somewhat conservative." Corrected the toll.note and the toll.high cite to attribute Kreike correctly and flag the misattribution. Toll low/high (17,000/130,000) both sourced to the 1919 commission. **Status → VERIFIED.**
- **ago-3 (independence war / Cassanje).** Both Wikipedia sources real; Cassanje toll bounds (400 low / ~20,000 high; MPLA's 10,000 air-raid claim flagged partisan) corroborated by independent search (range 400–7,000; MPLA claimed ~10,000). ~1,000 white settlers killed in the March 1961 UPA uprising confirmed. **Status → VERIFIED.**
- **ago-4 (Nitista purge).** Lara Pawson, *In the Name of the People: Angola's Forgotten Massacre* (I.B. Tauris, 2014) CONFIRMED real (BBC Angola correspondent; multiple award listings). Range 2,000–70,000 and Amnesty International ~30,000 corroborated independently. Secret trials under Iko Carreira confirmed. **Status → VERIFIED.**
- **ago-5 (govt conduct, civil war).** Wikipedia 'Angolan Civil War' toll (500,000–800,000; >1M displaced; ~70,000 landmine amputees) corroborated. USIP report CONFIRMED real: "Angola's Deadly War: Dealing with Savimbi's Hell on Earth," John Prendergast, USIP Special Report SR 991012, 12 Oct 1999 (live WebFetch returned 403 anti-scrape, but existence + authorship verified via search and the PDF at usip.org/sites/default/files/sr991012.pdf). US-gov-source / pro-UNITA bias correctly disclosed in caveat. **Status → VERIFIED.**

### Toll two-sidedness
All contested tolls have a source for both ends: ago-2 (1919 commission spans 17k–130k), ago-3 (400 low / 20k high), ago-4 (2k floor / 70k high, AI 30k mid), ago-5 (war-wide 500k–800k, explicitly not apportioned to govt). ago-1 tolls intentionally null (trafficking count, not deaths). No single-number tolls passed off as bounded.

### Tier re-derivation (derived BEFORE reading assigned; all confirmed correct)
- ago-1 POL — predatory trafficking system, not group-extermination. ✓
- ago-2 EXT — deliberate destruction of a people; engineered famine is a *method*, not a disease event → EXT not STR. ✓ (STR-vs-EXT enforced.)
- ago-3 WAR — colonial counter-insurgency mortality. ✓
- ago-4 POL — political mass killing of perceived internal enemies (not a defined ethnic group → not EXT; not armed conflict → not WAR). ✓
- ago-5 WAR — armed-conflict atrocity; the famine/displacement/disease deaths are *consequences of war*, not a standalone disease-driven STR event → WAR. ✓
No tier corrections required.

### Verdict
Events VERIFIED: 4 (ago-2, ago-3, ago-4, ago-5). UNVERIFIED: 1 (ago-1, death metric only — quarantined by design). Flagged/corrected: 1 (ago-2 Kreike-vs-Rodriguez misattribution). Country status: **UNVERIFIED**. No invented sources introduced.
