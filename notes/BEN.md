# Benin (BEN) — research notes

Built from scratch 2026-06-18. Web tools (WebSearch + WebFetch) loaded and used; this is real research, not a seed.

## Shape of the entry

- **Perpetrator ("In their name") — 2 events.** This is the heavy side of Benin's ledger.
  - `ben-1` Dahomey's slave-raiding and the Atlantic trade through Ouidah (c.1720s–1860s), EXT.
  - `ben-2` The Annual Customs: ritual killing of captives at Abomey (18th–late 19th c.), EXT.
- **Victim ("Done to them") — 1 event.**
  - `ben-3` The French conquest of Dahomey (1890–1894), WAR.
- `modern`: null. Country status: RESEARCHED.

The asymmetry (perpetrator-heavy) is deliberate and explained in the country `note`. The pre-colonial state on this soil, the Kingdom of Dahomey, was one of West Africa's foremost slave-raiding/exporting powers; the victim record is real but thinner and later. Nothing was invented to balance the columns.

## What I found (key figures, all sourced)

- **Slave trade (ben-1):** ~2 million embarked from the Slave Coast / Bight of Benin (~16% of the entire transatlantic trade), per Wikipedia's "Slave Coast of West Africa" citing the SlaveVoyages / Trans-Atlantic Slave Trade Database (Eltis & Richardson). Ouidah alone exported >1 million, second in Africa only to Luanda, peaking at ~15,000–20,000/year in the early 1700s (Slavery and Remembrance, a Colonial Williamsburg / NEH project). Dahomey conquered Allada and Ouidah in the 1720s and became the dominant regional supplier via raids on Yoruba towns, the Mahi, and Ketou (Ketou conquered 1886). Toll set as a DEPORTATION range (low = Ouidah-only ~1M; high = full Bight ~2M), NOT a death count — flagged everywhere.

- **Annual Customs (ben-2):** Scholarly estimates (drawing on Robin Law, J. African History 1989 "My Head Belongs to the King" and 1997) put the regular yearly customs at ~100–200 victims in the 18th c., ~300 under Ghezo (1830s–40s), falling to ~32 by the late 19th c. under British pressure. Contemporary European reports gave 500+, and a 1727 ceremony was REPORTED at up to 4,000 — widely treated as inflated anti-abolitionist propaganda. Law explicitly argues Europeans "greatly exaggerated" West African human sacrifice (conflating judicial executions with ritual killing). Toll = wide disputed range 100–4,000.

- **French conquest (ben-3):** Second Franco-Dahomean War (1892–1894): Dahomean ~1,753 killed / 2,680 wounded vs French ~85 killed / 440 wounded / 205 dead of disease (Wikipedia "Second Franco-Dahomean War," infobox from French colonial records). First war (1890): several hundred Fon dead (129 within French lines in one engagement; "hundreds" near Porto-Novo) vs minimal French combat losses. General Dodds vs King Behanzin; Abomey burned/evacuated; Behanzin surrendered Jan 1894, exiled to Martinique; kingdom annexed into French West Africa.

## What is contested

- Annual Customs numbers are the most contested element in the file — the European-source-exaggeration debate is the substance, captured in the disputed 100–4,000 range and the Robin Law caveat. The 4,000-for-1727 figure is retained only as the documented high-end *report*, explicitly flagged as probably exaggerated.
- Slave-trade attribution: not all ~2M Bight-of-Benin captives were taken by Dahomey specifically (Allada/Ouidah traded before the 1720s conquest, and other actors operated). The note and toll caveats make clear Dahomey was the dominant regional supplier, not the sole one.

## What could NOT be verified

- **Rummel, *Death by Government* — Dahomey figure.** Wikipedia's Annual Customs article references Rummel (1997, p.63) for this topic, but I could not independently confirm a specific Dahomey democide number in Rummel via search. It is therefore NOT used or cited; the toll rests on the Robin-Law-based scholarly range and the contemporary-report figures instead.
- **Exact SlaveVoyages region-query numbers.** The ~2M Bight figure and Ouidah counts are database outputs surfaced via secondary reporting; the raw SlaveVoyages site is a JS SPA that WebFetch cannot render. Corroborated through Wikipedia and Slavery and Remembrance rather than re-queried directly.
- **A modern mass-atrocity victim/perpetrator event.** Mathieu Kerekou's Marxist-Leninist military regime (1972–1989) ran the DDS secret police, jailed and tortured dissidents, and ordered troops to fire on student protesters (1985). But credible sources (incl. the Encyclopaedia Africana / Grokipedia summaries and US State Dept context) indicate NO systematic mass executions on a genocidal/mass-death scale. This is repression below the atlas's threshold, so it is recorded in the country `note`, not inflated into a tiered event. Slot deliberately left empty rather than padded.

## Real sources consulted

- Wikipedia: "Dahomey", "Slave Coast of West Africa", "Annual Customs of Dahomey", "First Franco-Dahomean War", "Second Franco-Dahomean War", "Dahomey raids on Yoruba".
- Slavery and Remembrance (Colonial Williamsburg Foundation / NEH), "Ouidah".
- SlaveVoyages / Trans-Atlantic Slave Trade Database (Eltis & Richardson) — underlying source for the Bight-of-Benin embarkation totals (accessed via secondary citation).
- Robin Law, *Journal of African History* (1989, 1997) — cited via the Annual Customs article for the sacrifice-numbers scholarship and the European-exaggeration argument.
- Background only (not cited in JSON): Encyclopaedia Africana and Grokipedia summaries on Mathieu Kerekou; US State Dept 1997 Benin human-rights report — used to confirm the modern period is below threshold.

## Audit

Adversarial source-integrity + tier audit, 2026-06-18. Posture: assume every citation FAKE until proven otherwise. Every source was re-fetched or re-searched; every load-bearing number was independently confirmed against the cited page or a corroborating source. Country status moved RESEARCHED → **VERIFIED** (all 3 events VERIFIED after correction).

### ben-1 — Dahomey slave trade / Ouidah (EXT) → VERIFIED
- **Tier re-derived independently before reading the assigned one: EXT.** State-run seizure and permanent removal of defined populations into bondage, with killing across raids/march/Middle Passage — deliberate targeted human destruction, not disease-driven (STR) and not battlefield (WAR). Assigned EXT correct. Toll is correctly an export/deportation count, not a death count, flagged everywhere.
- **toll.high (~2M Bight / ~16%):** number CONFIRMED on-page at Wikipedia 'Slave Coast of West Africa' ("approximately two million ... representing about 16% of the estimated 12.5 million"). **FALSIFIED the attribution:** the prior cite claimed the page attributes this to SlaveVoyages / Eltis & Richardson. It does NOT — the on-page citation is **Fuglestad (2018)**. Corrected the cite and toll.note; removed the unverifiable SlaveVoyages/Eltis attribution.
- **toll.low (>1M Ouidah, second only to Luanda):** CONFIRMED verbatim via the search index quoting Slavery and Remembrance (the page itself 403s to automated fetch). The site is a real Colonial Williamsburg Foundation / NEH project. The previously-attached "15,000–20,000/yr peak at Ouidah" detail could NOT be confirmed and was removed from both the cite and the note rather than retained unsourced.
- **summary source (Wikipedia 'Dahomey'):** re-verified — raids/captives sold to Europeans, the export monopoly, Ghezo's palm-oil shift all on-page.

### ben-2 — Annual Customs at Abomey (EXT) → VERIFIED
- **Tier re-derived independently: EXT.** Deliberate ceremonial killing of a defined class (war-captives, condemned prisoners) year after year as a state institution — intentional targeted human destruction. Assigned EXT correct.
- **Both toll ends sourced.** toll.high (500; up to 4,000 in 1727) re-verified on-page at Wikipedia 'Dahomey' and 'Annual Customs of Dahomey'.
- **FALSIFIED the toll.low source location.** The prior cite claimed the 100–200 / 300 / ~32 scholarly range AND Robin Law's "Europeans exaggerated" wording are "carried on Wikipedia's 'Annual Customs of Dahomey' article." Re-fetch shows they are NOT there — that page carries only the 500 and 1727 '4,000' figures and cites Rummel for the latter. The figures and the Law quotation ("through ignorance or malice, often interpreted as human sacrifices killings which were really of a different character") DO exist and are legitimate — found in the secondary survey 'The kingdom of Dahomey and the Atlantic world' (africanhistoryextra.com), which cites Robin Law directly and flags the numbers as unreliable "guestimates," and corroborated by independent web search. Re-pointed the toll.low source to africanhistoryextra.com and corrected the toll.note.
- **Rummel 'Death by Government' Dahomey figure:** still could NOT be independently verified; remains explicitly NOT relied on. (Confirmed Wikipedia's Annual Customs article does cite Rummel for the 1727 figure, but no usable independent Dahomey democide number surfaced.)

### ben-3 — French conquest of Dahomey (WAR) → VERIFIED
- **Tier re-derived independently: WAR.** Two short colonial wars; an expeditionary force defeats an army; dead concentrated among combatants; no deliberate civilian group-destruction (not EXT), not disease-driven (not STR). Assigned WAR correct.
- **toll.low / Second War:** CONFIRMED on-page (Dahomey 1,753 killed / 2,680 wounded; France 85 killed / 440 wounded / 205 dead of disease), commander Dodds, Abomey burned & entered 17 Nov 1892, Behanzin surrender 15 Jan 1894 → Martinique.
- **toll.high / First War:** CONFIRMED on-page (Fon "several hundred dead (129 within the French lines)" at the Battle of Cotonou; 3 Oct 1890 Porto-Novo protectorate treaty). **CORRECTED a factual imprecision:** the prior draft placed the 129/several-hundred figure "near Porto-Novo" against "~33 French wounded"; the source locates it at the **Battle of Cotonou** and gives war-total French casualties of **16 killed / 83 wounded**. Cite and note corrected.

### Ledger / balance (law 1)
- Both ledgers populated as the record supports: perpetrator ×2 (ben-1, ben-2), victim ×1 (ben-3). The perpetrator-heavy asymmetry is grounded in the documented historical record (Dahomey as a dominant slave-raiding/exporting state), is explained in the country `note`, and was NOT padded to force balance. Modern slot correctly left null (Kerekou-era repression is below the atlas mass-death threshold). No invented sources were added at any point; two source attributions were CORRECTED to match what the cited pages actually say, and two unverifiable details were removed.
