# Romania (ROU) — research log

Built from scratch on 2026-06-18. Web tools (WebSearch/WebFetch) loaded and used for all events.

## Ledger shape

- **Perpetrator ("In their name"): 3 events** — the Holocaust in Romania (overall), the Odessa massacre, the Roma deportations to Transnistria.
- **Victim ("Done to them"): 2 events** — communist-era repression, and the 1907 peasant-revolt suppression.

The asymmetry of *kind* (not weight) is deliberate and explained in the country note: Romania's biggest perpetrator chapter is the Holocaust, while its biggest documented atrocities *against its own people* are the communist repression and 1907 — a state killing its own. Conventional foreign-inflicted victimhood (Ottoman/Phanariot rule, occupation, WWI/WWII military losses) exists but is either thin on atrocity-specific death counts or primarily military, so it's noted, not ledgered.

## What is solid (RESEARCHED)

- **Holocaust toll 280,000–380,000 Jews + over 11,000 Roma.** This is the conclusion of the 2004 Elie Wiesel International Commission, *commissioned and accepted by the Romanian government*. Cross-checked against USHMM (~220,000 Romanian Jews — narrower scope) and Yad Vashem. The "deadliest Axis perpetrator after Germany" framing is the Wiesel Commission's own.
- **Iasi pogrom**: Romanian govt count 13,266; Jewish community ~15,000; USHMM "at least 4,000 in the pogrom itself." Folded into rou-1 rather than given its own event to avoid double-counting.
- **Odessa massacre**: 25,000–34,000 in the 22–24 Oct 1941 reprisal; 100,000+ for the broader Odessa/Dniester–Bug killings. Antonescu's direct reprisal order after the HQ bombing is well documented (USHMM, Wikipedia).
- **Roma**: ~25,000 deported, at least ~11,000 dead (USHMM Transnistria Governorate + Wiesel Commission). Note that Roma deaths were overwhelmingly from deprivation, not mass shooting.

## What is contested / could NOT be fully verified (UNVERIFIED)

- **Communist-era death toll.** No defensible total exists. Documented in-custody deaths: at least ~20,000 (historians' consensus per Balkan Insight). Black Sea Canal: ~6,355 documented deaths 1949–1953 (former-prisoner associations). The Tismaneanu Commission (2006) figure of "up to two million persecuted" / 600,000+ sentenced is **persecution, not deaths** — I did not convert it to a death count. Set toll.high = null; event status UNVERIFIED.
- **1907 peasant revolt.** Death toll genuinely unknowable: official 419 (undercounted), Austrian diplomats 3,000–5,000, French embassy 10,000–20,000, historians' range 3,000–18,000, most-cited ~11,000 (never documentary-proven). Used the 3,000–18,000 range; status UNVERIFIED.

## Sources actually consulted

- Elie Wiesel International Commission on the Holocaust in Romania, Final Report 2004 (via en.wikipedia.org/wiki/Wiesel_Commission)
- USHMM Holocaust Encyclopedia: "Romania", "Odessa", "Transnistria Governorate"
- Yad Vashem, "Murder of the Jews of Romania"
- Wikipedia: "1941 Odessa massacre", "Iași pogrom", "1907 Romanian peasants' revolt", "Re-education in Communist Romania", "Presidential Commission for the Study of the Communist Dictatorship in Romania" (Tismaneanu)
- Balkan Insight, "Romania Commemorates Political Prisoners of Communist Regime" (2026) — communist-era detention death floor

## Notes on tiering

- Holocaust, Odessa, Roma deportations = **EXT** (deliberate destruction of a defined group, including death-by-deprivation in deportation).
- Communist repression and 1907 = **POL** (state political killing of its own population). 1907 is closer to political mass killing than to a structural famine, so POL not STR.

No invented sources, numbers, authors, or URLs. Every toll figure traces to a cited source; where no sourceable number exists the field is null with a note.

## Audit

Adversarial source-integrity + tier audit, 2026-06-18. Method: every source assumed FAKE until independently verified via WebSearch/WebFetch; tiers re-derived from the facts BEFORE reading the assigned tier.

### Source integrity — what was falsification-tested

- **rou-1 (Holocaust):** ALL THREE sources confirmed.
  - Wiesel Commission (2004 Final Report) — verified: it reports 280,000–380,000 Jews "murdered or died under the supervision and as a result of the deliberate policies of Romanian civilian and military authorities," AND "over 11,000 Romani killed," AND the Romanian government recognized the findings. Supports toll.low exactly. ✓
  - USHMM "Romania" — verified: "Approximately 220,000 Romanian Jews were killed or died from mistreatment," confirming the narrower-scope cross-check; Iasi pogrom (≥4,000), Bessarabia/Bukovina killings, Transnistria deportations all confirmed. ✓
  - Yad Vashem "Murder of the Jews of Romania" — the .html page failed via WebFetch (TLS cert error), but the content was independently confirmed by search: "380,000–400,000 Jews … were murdered in Romanian-controlled areas under … Antonescu." Supports toll.high (380,000). ✓
  - Verdict: VERIFIED (was RESEARCHED).

- **rou-2 (Odessa massacre):** BOTH sources confirmed.
  - Wikipedia "1941 Odessa massacre" — verified: "25,000 to 34,000 Jews were shot or burned" in the 22–24 Oct 1941 reprisal; "well over 100,000" for the broader Dniester–Bug killings; Antonescu's "immediate reprisals" order after the HQ bombing (Gen. Glogojeanu killed). Supports toll.high and the display string verbatim. ✓
  - USHMM "Odessa" — verified: Antonescu ordered the reprisal; ~25,000 killed in the massacre phase plus 25,000–30,000 death-marched to Bogdanovka. Supports summary. ✓
  - Verdict: VERIFIED (was RESEARCHED).

- **rou-3 (Roma deportation):** BOTH sources confirmed.
  - USHMM "Transnistria Governorate" — verified: "deported some 25,000 Roma to Transnistria between June and September 1942" and "at least 11,000 of these deportees died of maltreatment or were murdered," deaths from "disease, starvation, or the cold." Supports summary and the toll. Minor note: USHMM frames the selection as "nomadic, chronically unemployed, or having criminal histories" rather than a "1942 police census / problem Gypsies" — same substance, summary phrasing is defensible. ✓
  - Wiesel Commission — verified "over 11,000 Romani" (see rou-1). Supports toll.low. ✓
  - Verdict: VERIFIED (was RESEARCHED).

- **rou-4 (Communist repression):** sources REAL, but event correctly stays UNVERIFIED on the merits.
  - Tismaneanu Commission (2006) — verified: real 660-page Presidential Commission report, presented to Parliament 18 Dec 2006, headed by Vladimir Tismăneanu; President Băsescu officially declared the regime "illegitimate and criminal." Supports summary. ✓
  - Balkan Insight (2026) "Romania Commemorates Political Prisoners…" — the article EXISTS and supports the claim ("most historians agree that at least 20,000 political prisoners died in detention in Romania's prisons, labour camps and places of detention"), BUT the URL in the JSON was WRONG: a spurious trailing `/bi/` made it 403/dead. **Corrected** to the canonical `…/romania-commemorates-political-prisoners-of-communist-regime/`. ✓ (source) / fixed (URL)
  - toll.low ~20,000 is SINGLE-SOURCE; toll.high correctly null (no defensible upper bound). The "600,000 sentenced / two million persecuted" figures are correctly flagged as persecution, NOT deaths. Quarantine/audit note added to toll.note.
  - Verdict: UNVERIFIED (unchanged) — contested toll, single source for the floor, no sourceable ceiling.

- **rou-5 (1907 peasant revolt):** source REAL, event correctly stays UNVERIFIED.
  - Wikipedia "1907 Romanian peasants' revolt" — verified: confirms official 419 (Brătianu), King Carol I's "several thousand," Austrian and French diplomatic estimates (incl. French embassy 10,000–20,000), the 3,000–18,000 historians' range, and ~11,000 most-cited; records were deliberately destroyed, so no definitive count. Supports toll.high and note. ✓
  - SINGLE tertiary source; toll genuinely contested and unknowable. Audit note added.
  - Verdict: UNVERIFIED (unchanged).

### Tier re-derivation (independent, before reading assigned tiers)

- rou-1 Holocaust → EXT (deliberate destruction of Jews as a group). Matches.
- rou-2 Odessa → EXT (mass extermination of a group on reprisal order). Matches.
- rou-3 Roma deportation → EXT. STR-vs-EXT test applied: deaths were overwhelmingly from engineered starvation/disease, NOT shooting — but the driver was deliberate ethnic-group destruction by deportation into death conditions, not an autonomous epidemic. This is genocide-by-attrition, not a disease-driven STR. EXT correct. Matches.
- rou-4 Communist repression → POL (political killing of perceived enemies; deaths from execution, torture, labor — not a structural famine/epidemic, so not STR). Matches.
- rou-5 1907 revolt → POL (active army suppression of an uprising; not structural deprivation, so not STR). Matches.

All five assigned tiers survived independent re-derivation. NO tier corrections required.

### Changes written

- rou-1, rou-2, rou-3: status RESEARCHED → **VERIFIED**.
- rou-4: Balkan Insight URL corrected (removed spurious `/bi/`); audit/quarantine note appended to toll.note; status stays UNVERIFIED.
- rou-5: audit note appended to toll.note; status stays UNVERIFIED.
- Country status RESEARCHED → **UNVERIFIED** (not all events verified — rou-4 and rou-5 remain UNVERIFIED).

### Both-ledgers check (law 1)

Both ledgers ARE populated: perpetrator side = rou-1/2/3 (Holocaust, Odessa, Roma); victim side = rou-4/5 (communist repression, 1907). No invented balance demanded. No fabricated sources, authors, numbers, or URLs introduced; one existing URL was repaired to its real canonical form.
