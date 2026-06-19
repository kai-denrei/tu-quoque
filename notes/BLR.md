# BLR — Belarus research log

Built from scratch (no seed). Web tools (WebSearch/WebFetch) loaded and used for real research on 2026-06-19.

## Structural finding that shapes the whole ledger
Belarus was never a sovereign actor through the modern atrocity era: Byelorussian SSR inside the USSR → German occupation 1941–1944 → Soviet again until 1991. So the victim ledger is deep and the perpetrator ledger is genuinely thin — not a research gap. Documented in the country `note`, not invented around.

## Events written

### Victim
1. **blr-1 — German occupation & destruction of Belarus (1941–1944), POL.**
   Toll carried as a range: ~1.6M murdered (scholarly component breakdown: ~700k POWs, ~500–550k Jews, ~345k anti-partisan, ~100k other) → ~2.2–2.3M total war dead / ~25% of prewar population. Low and high have separate sources. Population fell ~9.2M (1941) → ~6.3M (1944). Khatyn (22 Mar 1943, 149 dead) and village-destruction figures (629 annihilated, 5,454 burned) used for the summary. Status RESEARCHED.
2. **blr-2 — The Holocaust in Belarus (1941–1943), EXT.**
   ~500,000–550,000 (~80%) low → ~800,000 (~90%) high; dispute turns on border definitions and counting Jews from elsewhere killed on Belarusian soil. Both ends sourced. Status RESEARCHED.
3. **blr-3 — Kurapaty & Stalinist NKVD terror (1937–1941), POL.**
   Agent is the **Soviet NKVD**, not a Belarusian state — made explicit in the `agent` field and `relevance`. Count genuinely unverifiable: ~7,000 (Belarusian prosecutor low) / ~30,000 (1988–95 investigation min) → ~250,000 (Pazniak high), with KGB/NKVD archives in Belarus sealed. Marked **UNVERIFIED** per inviolable law 1/2.

### Perpetrator
4. **blr-4 — Belarusian collaborator participation in the occupation terror (1941–1944), EXT (act).**
   The one real perpetrator entry: Belarusian Auxiliary Police / Schuma (~30,000 by 1943) identifying Jews, leading them to pits, ghetto liquidations from 1942, Operation Cottbus 1943 with Dirlewanger. **Toll left null** — no defensible figure exists for deaths attributable to Belarusian units alone (they were a junior part of a German-led machine alongside Baltic/Ukrainian/SS forces). Inventing a number would balance the ledger dishonestly. Marked **UNVERIFIED**.

## Contested / could not verify
- **Kurapaty count.** Range spans 7k–250k; archives closed → unverifiable, not just disputed. Lowest figures are Belarusian-state prosecutors (likely understatement); highest are national-movement-era estimates (Pazniak). Both caveated.
- **WWII total.** ~1.6M (murdered-in-Belarus breakdown) vs ~2.2M (Soviet Extraordinary State Commission) vs ~2.3M (death-by-country tabulation). The Soviet figure is victor/occupied-state-compiled and partly population-loss-based; flagged.
- **Holocaust total.** 500k–800k spread is real scholarly variance over borders + who is counted; not resolvable to one number.
- **No Belarusian-attributable collaborator toll exists.** Deliberately null.
- **Khatyn attribution caveat:** the unit most identified with Khatyn (Schutzmannschaft Battalion 118) was majority-**Ukrainian**, not Belarusian — so Khatyn is carried under blr-1 (German-led occupation) and NOT cited as a Belarusian perpetrator act. Noted in blr-4 source caveat.

## Not elevated to an event (recorded in country note instead)
- **Lukashenka-era state repression (2020 crackdown onward):** the first genuinely Belarusian state acting against its own people — ~6,700+ detained in days, UN-recorded torture (≥450 cases by Sep 2020), sexual violence with batons, a documented dozen-plus protest-linked deaths, ~1,500 political prisoners (Vyasna). Real and ongoing, but below the mass-death scale of the atlas tiers — so noted, not inflated into a fabricated toll.

## Real sources consulted
- Wikipedia: World War II casualties; The Holocaust in Belarus; Kurapaty; Khatyn massacre; Belarusian Auxiliary Police; Schutzmannschaft Battalion 118; National Memorial of the Republic of Belarus.
- Sciences Po Mass Violence & Resistance — "Kurapaty (1937–1941): NKVD Mass Killings in Soviet Belarus".
- worldpopulationreview.com — WWII casualties by country (Belarus ~2.3M, ~25.3% of prewar pop).
- Human Rights Watch (2020/2021) and UN reporting on the 2020 crackdown — used only for the note.

## Schema note
Used event/country status values `RESEARCHED` / `UNVERIFIED` per the task schema (existing files like BEL.json use `VERIFIED`; followed the explicit instruction).

## Audit
Adversarial source-integrity + tier audit, 2026-06-19 (assumption: every citation fake until proven otherwise). WebSearch/WebFetch used to falsify each source. Result: **country UNVERIFIED** — 2 events VERIFIED, 2 events UNVERIFIED (for sound, substantive reasons, not source failures).

### Source integrity — every source survived falsification
All cited works were confirmed to EXIST and to SUPPORT the specific claim attached:
- **blr-1 / National Memorial page** — confirmed; carries the exact toll.low breakdown (700k POWs, 500–550k Jews, 345k anti-partisan, 100k others = 1.6–1.7M).
- **blr-1 / WWII casualties page** — confirmed toll.high: Erlikman 2.29M / 25.3% of ~9.05M prewar. Separately confirmed the ChGK (Soviet Extraordinary State Commission) figure is **2,219,316** — so the "~2.2M" claim is real (corrected the cite from "~2.3M / Soviet commission ~2.2M" to attribute 2.29M to Erlikman and 2,219,316 to ChGK).
- **blr-1 / Khatyn page** — confirmed Khatyn facts (149 killed, ~70–75 children) and burned-settlement scale. Citation-fit flag: the page carries **627 totally destroyed / 5,295 burned**, not the summary's **629 / 5,454**. The 629/5,454 pair is nonetheless a genuine, widely-published Belarusian commemoration set (Smithsonian-confirmed) — so the claim is true and verifiable, just slightly off the cited tertiary page. Added a caveat rather than treating it as fabrication.
- **blr-2 / Holocaust-in-Belarus page** — confirmed BOTH ends explicitly: 500–550k (~80%) low and 800k (~90%) high.
- **blr-2 / Trostenets ~206,500** — confirmed as the ChGK (Aug 1944) figure including non-Jews and deportees; noted Belarus's Prosecutor General now claims ≥546,000 for the wider complex.
- **blr-3 / Kurapaty page** — confirmed full range (7,000 Bozhelko; 30,000 Tarnaŭski / 1989 commission; 102,000–250,000 Pazniak), NKVD, 1937–1941, archives classified.
- **blr-3 / Sciences Po** — confirmed: real document, "Kurapaty (1937–1941): NKVD Mass Killings in Soviet Belarus" by **Alexandra Goujon**, surveys the 7k→30k→250k range.
- **blr-4 / Belarusian Auxiliary Police page** — confirmed: formed July 1941 (von Schenckendorf order 7 July), ~30,000 by 1943, decisive local role, escalation in the Feb–Mar 1942 ghetto-liquidation wave, Operation Cottbus (20 May 1943, battalions 46/47/49/51) with Dirlewanger; no Belarusian-only toll.
- **blr-4 / Battalion 118 page** — confirmed: core Ukrainian nationalists from Bukovina + Soviet POWs + Kyiv-region volunteers; carried out Khatyn 22 Mar 1943. Validates the caveat that keeps Khatyn OUT of the Belarusian perpetrator ledger.

**No invented sources. No source removed. One cite corrected for numeric attribution (ChGK/Erlikman); one citation-fit caveat added (629/5,454 vs 627/5,295).**

### Toll — both ends sourced where a toll exists
- blr-1: low (1.6–1.7M) and high (2.2–2.29M) each independently sourced. ✓
- blr-2: low (500–550k) and high (800k) both on the same confirmed page. ✓
- blr-3: contested 7k–250k range fully sourced at both ends — but the underlying count is epistemically unknowable (sealed NKVD archives). Quarantine note added to toll.note.
- blr-4: toll deliberately **null** — no separable Belarusian-attributable figure exists; inventing one would dishonestly balance the ledger. Correct.

### Tier — independently re-derived BEFORE reading assigned tiers; all correct
- blr-1 German occupation (mass shooting / POW starvation / anti-partisan village-burning to subjugate a population) → **POL**. Assigned POL ✓. (Jewish genocide split out to blr-2.)
- blr-2 Holocaust (destruction of a people as such) → **EXT**. Assigned EXT ✓.
- blr-3 Kurapaty (NKVD killing political enemies in the Great Terror; not ethnic destruction; not disease-driven) → **POL**. Assigned POL ✓. Agent correctly the **USSR/NKVD**, not a Belarusian state.
- blr-4 Belarusian auxiliaries participating in extermination + pacification massacres → **EXT** for the act. Assigned EXT ✓, with honest "junior, German-led share" caveat. STR-vs-EXT rule not triggered (no disease-driven event).

### Ledgers (law 1)
Victim ledger genuinely deep (blr-1, blr-2, blr-3); perpetrator ledger one honest entry (blr-4, null toll). Asymmetry is historical fact (no sovereign Belarusian state in the atrocity era), not a research gap. No invented balance demanded.

### Status decisions
- **blr-1 → VERIFIED** (sources + both toll ends + tier all confirmed).
- **blr-2 → VERIFIED** (sources + both toll ends + tier all confirmed).
- **blr-3 → UNVERIFIED** (sources sound, but toll unknowable while archives sealed — substantive quarantine, recorded in toll.note).
- **blr-4 → UNVERIFIED** (sources sound, tier correct, but no toll to confirm — honest null, not a fabrication).
- **Country → UNVERIFIED** (not all events VERIFIED).
