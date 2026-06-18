# Ghana (GHA) — research log

Built from scratch (no seed). Web tools (WebSearch/WebFetch) loaded and used for real research.

## Ledger summary
- **Victim ("Done to them")** — 2 events:
  - `gha-1` Atlantic slave trade from the Gold Coast (c.1500–1867), tier EXT.
  - `gha-2` British conquest of Asante / sack of Kumasi / wars of the Golden Stool (1873–1900), tier WAR.
- **Perpetrator ("In their name")** — 1 event:
  - `gha-3` Asante slave-raiding and tributary enslavement of northern Ghana (1732–1897), tier EXT.

## What I found (key figures and their sources)
- **Gold Coast slave exports ≈ 1.209 million embarked**, ~10% of the entire transatlantic trade — attributed to SlaveVoyages (Eltis & Richardson), quoted via History Reclaimed which names slavevoyages.org as the source. Port-level corroboration: Anomabo ~168,348; Cape Coast ~100,434; Elmina ~85,636 exports.
- **Trade-wide context**: ~12.5 million embarked / ~10.7 million disembarked; up to ~2 million died in the Middle Passage (Eltis/Richardson via Wikipedia). Used only as denominator/context.
- **British conquest of Asante**: 1873–74 Wolseley expedition burned Kumasi and demolished the royal palace (British losses ~18 combat, ~55 disease); 1896 expedition deposed/exiled Asantehene Prempeh I; 1900 War of the Golden Stool under Yaa Asantewaa — ~1,070 British/allied fatalities, ~2,000+ ("several thousand") Asante dead. Sources: Wikipedia (Anglo-Ashanti wars; War of the Golden Stool), BlackPast.
- **Asante as perpetrator**: invaded Gonja (1732–33) and Dagomba (1744–45); compelled tribute of ~1,000–1,500 slaves per division/chieftainship/year; **>500,000 northerners sold into slavery 1732–1897**, "thousands" killed in raids; Salaga market turnover ~15,000 slaves/year at its height (Heinrich Klose, 1899). Sources: Joachim Jack Agamba, "Beyond Elmina: The Slave Trade in Northern Ghana" (eScholarship); History Reclaimed; Mises Institute (for Asante as largest regional slave power + ritual killing at royal funerals).

## What is contested / caveated
- **Export vs death counts.** Both the slave-trade events are quantified by people DEPORTED/SOLD, not killed. This is flagged explicitly in every toll note. The true death tolls (raid deaths, march/dungeon deaths, Middle Passage share) are real but unrecoverable as separate figures. low=high set to the deportation count, with the death range left unquantified by design rather than invented.
- **African complicity / reparations debate.** History Reclaimed and Mises are advocacy/ideologically-leaning sources; each is caveated and used ONLY for figures they attribute to named primary/scholarly sources, never for interpretive framing.
- **Asante conquest toll.** No comprehensive count exists for the 30-year conquest; only the 1900 episode (~2,000 Asante dead) is defensibly quantifiable. The Lloyd George "festering corpses" parliamentary remark indicates heavy but uncounted Asante dead. The War of the Golden Stool Wikipedia infobox flags its own British casualty figure as uncited.
- **Asante human sacrifice at royal funerals.** Documented (Bowdich 1819; Rattray; debated by Wilks, "Human Sacrifice or Capital Punishment?") but NO defensible aggregate number found. Folded into the gha-3 summary as a practice; deliberately NOT given a standalone tier or a fabricated count.

## Could NOT verify / deliberately excluded
- **No aggregate Gold Coast death toll** (as opposed to export count) — not separately sourceable; left null-equivalent in the note.
- **"Beyond Elmina" PDF** is image/binary; could not full-text extract. Author/title confirmed via metadata + corroborating search; its figures cross-checked against History Reclaimed.
- **Modern mass atrocity: none qualifying.** Per the Early Warning Project / Statista risk data, **Ghana has had no episode of state-led mass killing since 1945.** Post-independence violence is real but sub-threshold for this atlas: 1979 AFRC firing-squad executions of three former heads of state (Acheampong, Akuffo, Afrifa); 1982 abduction and murder of three High Court judges + a retired major at Bundase range (Rawlings/PNDC era — direct responsibility of Rawlings himself remains legally contested). These are political repression at single/low-double-digit scale, NOT mass-death events, so they are noted in the country `note` and here, not tiered as events.

## Asymmetry note
Unlike most colonized nations, Ghana's perpetrator ledger is deep and well-documented (the Asante slave state), while its modern record is conspicuously clean. The asymmetry runs opposite to the usual victim-heavy colonial profile, and is explained in the country `note`. Nothing was invented to balance the columns.

## Sources consulted (real, reachable)
- SlaveVoyages / Trans-Atlantic Slave Trade Database — https://www.slavevoyages.org/
- Wikipedia: Atlantic slave trade; Anglo-Ashanti wars; War of the Golden Stool; Asante Empire; 1982 murders of Ghanaian judges
- BlackPast.org — Anglo-Ashanti Wars (1823–1900)
- History Reclaimed — "The Gravest Crime: Ghana and Slavery" (advocacy-leaning; caveated)
- Joachim Jack Agamba, "Beyond Elmina: The Slave Trade in Northern Ghana" — eScholarship/UC
- Mises Institute — "Slavery in the Asante Empire of West Africa" (ideological; caveated)
- Statista / Early Warning Project — Ghana mass-killing risk (basis for "no mass killing since 1945")

Status: **RESEARCHED** (all 3 events RESEARCHED; 0 UNVERIFIED).

## Audit

**Adversarial source-integrity + tier audit — 2026-06-18 (auditor: Kai Denrei).** Premise: every citation assumed FAKE until proven otherwise. Every source was fetched/searched live this session. **Verdict: country VERIFIED; all 3 events VERIFIED; 0 quarantined. No invented sources found; no tier errors found.**

### Source falsification results (per source)
- **gha-1 — SlaveVoyages (slavevoyages.org):** REAL. Homepage is a JS SPA WebFetch can't render, but existence + Eltis/Richardson authorship corroborated via Wikipedia's "Voyages" database article. The 1.209m Gold Coast number is a database region-query result, *not* reproducible by a raw web search — consistent with a query output, not a fabrication. Single-best-aggregate, single-sourced by design (low==high), death count left unquantified rather than invented. PASS.
- **gha-1 — History Reclaimed, "The Gravest Crime: Ghana and Slavery":** REAL. Author confirmed: **Alistair Parker** (09 May 2026). Quotes "1.209 million... taken from the Gold Coast" attributed to slavevoyages.org *verbatim*. CORRECTION APPLIED: the original cite/caveat claimed this essay also carries the port-level export records — **it does not**. Port figures (Anomabo 168,348 / Cape Coast 100,434 / Elmina 85,636) are SlaveVoyages-derived and surfaced via separate reporting (The Conversation, "Appolonia", June 2026); the gha-1 toll.note and cite were rewritten to reflect the true provenance. PASS after correction.
- **gha-1 — Wikipedia, Atlantic slave trade:** REAL; ~12.5m embarked / ~2m Middle Passage deaths confirmed on-page. PASS.
- **gha-2 — Wikipedia, War of the Golden Stool:** REAL. Confirms "several thousand" Asante, ~1,070 British (on-page citation-needed tag, as the original caveat said), and the Lloyd George "corpses of savages festering round the fort of Coomassie" quote *verbatim*. PASS.
- **gha-2 — Wikipedia, Anglo-Ashanti wars:** REAL. Confirms palace demolition, **18 combat / 55 disease / 185 wounded** (1873–74), Prempeh I deposition/exile, AND "Ashanti casualties estimated around 2,000" for 1900 — so this article independently supports toll.high, upgraded from summary-only support in the caveat. PASS.
- **gha-2 — BlackPast, Anglo-Ashanti Wars (1823–1900):** REAL at the exact cited URL. Direct WebFetch returned HTTP 403 (bot-block, *not* a dead link); content confirmed via search index, which surfaces the page text: "death of 1,000 British and Allied soldiers and 2,000 Ashanti." PASS. → **toll.high for gha-2 is now triple-corroborated** (Golden Stool + Anglo-Ashanti + BlackPast), no longer resting on one "several thousand" reading.
- **gha-3 — Agamba, "Beyond Elmina: The Slave Trade in Northern Ghana":** REAL. Confirmed as Joachim Jack Agamba, *Ufahamu: A Journal of African Studies* 32(1-2), 2006. PDF downloaded (35pp, Adobe Acrobat Paper-Capture image scan → no text layer, exactly matching the "image/binary" caveat). Author/title/venue verified; supports the *qualitative* northern-trade narrative but its numeric figures can't be machine-extracted. PASS (narrative only).
- **gha-3 — History Reclaimed (same essay):** REAL. ">500,000... 1732 to 1897," "1000–1500 slaves per division," and Klose's Salaga "15,000 slaves annually" all confirmed *verbatim*. PASS.
- **gha-3 — Mises Institute, "Slavery in the Asante Empire of West Africa":** REAL; author **Lipton Matthews**; confirms slavery's economic centrality and "during special celebrations, it was typical for slaves to be sacrificed." CORRECTION APPLIED: the original cite credited Mises with the "largest slave state in modern Ghana" claim — **the article makes no such comparative claim.** That framing was stripped from the cite; the "largest/dominant" characterisation now rests on mainstream scholarship + the country note, not Mises. PASS after correction.

### Toll low/high integrity
- **All three tolls are single-NUMBER (low==high), `disputed:true`, and explicitly justified** as best-available deportation/sale aggregates with the true death range deliberately left unquantified. This is honest single-sourcing, not invented balance — accepted under law 1 / "do not demand invented balance."
- **gha-2** is single-number but now multi-SOURCE (three independent corroborators for ~2,000 Asante / ~1,070 British). Strengthened.
- **gha-3 >500,000 — SINGLE-SOURCE FLAG raised:** the headline rests on one secondary essay (History Reclaimed), which itself only says "others suggest." No peer-reviewed primary giving this exact aggregate was located; the Agamba paper corroborates the narrative, not the number. Figure retained as best available but explicitly flagged in toll.note as thinly sourced — not promoted beyond the evidence, not quarantined (it is real and attributed, just thin).

### Tier re-derivation (done BEFORE reading assigned tiers)
- **gha-1** Atlantic slave trade → organized seizure/removal of a defined population for sale = targeted group-destruction = **EXT**. Not disease-driven, not armed conflict. Assigned EXT → **CORRECT**.
- **gha-2** British conquest of Asante → armed colonial invasion, deaths concentrated among combatants = **WAR**. (Disease killed more British than combat, but the event is armed conflict, so WAR holds — not STR, not EXT.) Assigned WAR → **CORRECT**.
- **gha-3** Asante slave-raiding/tributary enslavement → same group-seizure-for-bondage logic as gha-1 = **EXT**; disease is not the driver, so the STR-vs-EXT rule is not triggered. Assigned EXT → **CORRECT**.
- No STR/EXT misclassification anywhere. No tier changes required.

### Ledgers / modern record
- Both ledgers populated (victim ×2, perpetrator ×1); the entanglement (Asante as both supplier-victim and raider-perpetrator) is real and documented, not invented balance.
- Modern null confirmed: 1979 AFRC firing-squad executions (Acheampong, Akuffo, Afrifa) and 1982 murder of three judges independently corroborated as real but sub-threshold political repression — correctly noted in the country note, correctly NOT tiered.

### Net changes written to GHA.json
1. gha-1 toll.note: port figures re-attributed to SlaveVoyages (corrected to 168,348 / 100,434 / 85,636) with explicit "not from History Reclaimed" note; audit provenance added.
2. gha-1 History Reclaimed cite: removed false "port-level export records" claim; author named; VERIFIED stamp.
3. gha-1 SlaveVoyages + Wikipedia caveats: VERIFIED stamps.
4. gha-2 toll.note + all 3 caveats: triple-corroboration of ~2,000/~1,070 recorded; VERIFIED stamps; BlackPast 403/bot-block documented.
5. gha-3 toll.note: SINGLE-SOURCE flag on >500,000.
6. gha-3 Agamba caveat: paper identity/venue verified, image-scan limitation restated.
7. gha-3 Mises cite: "largest slave state" claim removed (not in source); author named; scope narrowed to ritual-sacrifice + economic-centrality.
8. All 3 events → `status: VERIFIED`; country → `status: VERIFIED`. JSON re-validated.

Status after audit: **VERIFIED** (3/3 events VERIFIED; 0 UNVERIFIED; 0 quarantined; 2 attribution corrections; 1 single-source flag raised; 0 tier changes).
