# Philippines (PHL) — research log

Built from scratch on 2026-06-18. Status: RESEARCHED. Four events: 2 victim, 2 perpetrator. Both ledgers are well-populated; no invention required.

## Done to them (victim)

### phl-1 — Philippine-American War (1899–1902), WAR
- US war of colonial conquest against the First Philippine Republic.
- **Contested toll.** Mainstream / US Office of the Historian: ~200,000 civilian dead, most from famine and disease (incl. ~150,000 in a late-war cholera epidemic). Wikipedia: modern historians generally 200,000–250,000. High end: Filipino historian Luzviminda Francisco argues ~1 million; some claims go higher (the "genocide" framing is itself disputed — see Couttie blog, not cited). Used 200,000 low / 1,000,000 high to span the live debate.
- Combatant context: Filipino ~16,000–20,000 (US estimates) vs Aguinaldo's ~10,000; US combat dead ~1,020.
- Samar / Balangiga reprisal (Gen. Jacob Smith) is the atrocity-leaning episode.

### phl-2 — Japanese occupation & Manila massacre (1941–1945), WAR
- Occupation (forced labour, food seizure, famine) + the Feb–Mar 1945 Manila massacre by trapped IJN marines under Rear Adm. Sanji Iwabuchi, under Yamashita's overall command.
- **Contested toll.** Manila massacre core figure ~100,000; some historians 100,000–500,000. Total occupation deaths: conservative Philippine estimates 500,000–1,000,000; one cited breakdown ~527,000 total (≈141,000 massacred, ≈336,500 war-famine, ≈22,500 forced labour, ≈27,000 military). Used 100,000 low (Manila core) / 1,000,000 high (total occupation upper bound) — the two ends measure different scopes, flagged in the toll note.
- American artillery blamed for ~40% of Filipino battle deaths (Japanese estimate) and most architectural destruction — a wrinkle worth keeping honest.
- Yamashita tried and hanged (1946); Mutō executed (1948). received_lens = memorial (strong national memory).

## In their name (perpetrator)

### phl-3 — Marcos martial-law abuses (1972–1986), POL
- Documented by Amnesty International + Task Force Detainees of the Philippines: ~3,257 extrajudicial killings (≈2,520 tortured first — "salvaging"), 737 disappearances, ~35,000 tortures, ~70,000 detentions.
- **Mixed-unit toll.** Low = 3,257 documented killings. High = 11,103 victims officially recognized/compensated under RA 10368 (2013) — NOT all deaths. Flagged explicitly in the toll note that the two ends measure different things and "deaths" applies cleanly only to ~3,257. This is the one place the low/high are not both death counts; kept it because the 11,103 is the most concrete state-acknowledged victim figure.
- received_lens = contested (Marcos family back in power; active historical revisionism).

### phl-4 — Duterte "war on drugs" (2016–2022), POL
- PNP + state-linked vigilantes/death squads. Official ops count 6,252 (Jul 2016–May 2022). Human rights / academics: 12,000–30,000; ICC prosecutor + advocates ~30,000.
- Cross-checks: UP Dahas/research team verified 3,859 (2016–2021, media reports); ACLED 7,843 (2016–2022). These are partial-method counts, used as corroboration not as the headline range.
- Used 6,252 low (official) / 30,000 high (HR + ICC upper). Duterte arrested on ICC warrant 2025; ICC confirmed crimes-against-humanity charges (per Al Jazeera, Apr 2026).

## Could NOT verify / left out
- Did not include the Moro/Bangsamoro conflicts (e.g., Jabidah massacre 1968, AFP operations in Mindanao) as a separate perpetrator event — real and documented, but tolls are fragmented across decades and I prioritized the two best-quantified state-perpetrator campaigns. A future pass could add a Mindanao/Moro event if a defensible sourced range can be assembled.
- Did not attempt a single "total" Philippine-American War figure beyond the sourced range; the >1M and "3 million" claims surface in search summaries but I could not tie the very high end to a citable scholarly source, so the high was capped at the Francisco ~1M figure.
- "modern" field left null (consistent with sibling files).

## Real sources consulted
- US Dept of State, Office of the Historian — Philippine-American War milestone page.
- Wikipedia: Philippine–American War; Manila massacre; Japanese occupation of the Philippines; Human rights abuses of the Marcos dictatorship; Philippine drug war.
- The National WWII Museum — Liberation of the Philippines.
- CNN (2022) — martial law 50 years / 11,103 compensated victims.
- Amnesty International (2022) — "Five things to know about Martial Law."
- Al Jazeera (2025) — Duterte ICC warrant / war on drugs explainer; Al Jazeera (2026) — ICC confirms crimes-against-humanity trial.
- Paul A. Kramer, *The Blood of Government* (2006) — cited for tier/character of US war methods.

## Audit

Adversarial source-integrity + tier audit, 2026-06-18 (assume-fake-until-proven posture). Outcome: **country VERIFIED** — all 4 events VERIFIED after one source-integrity correction.

### Source integrity (every citation falsification-tested)
- **phl-1** — all 3 sources real and supporting their claims. State Dept Office of the Historian ("as many as 200,000 Filipino civilians died from violence, famine, and disease") supports toll.low ✓. Wikipedia confirms modern-historian range 200,000–250,000 (incl. ~150,000 cholera) and "some estimates ... reach up to a million" supports toll.high ✓ — note the article says modern historians *reject* the ~1M figure; the toll.note already discloses its nationalist (Francisco) provenance, so adequately caveated. Kramer book verified real (UNC Press, 2006; ISBN 9780807856536 matches the URL; NBA finalist; Rawley & Bernath prizes) supports tier ✓. Publisher page returned 403 to the fetcher but existence/edition confirmed via independent search.
- **phl-2** — **one integrity defect found and corrected.** Manila massacre Wikipedia (≥100,000 killed; some historians 100,000–500,000; Iwabuchi/Yamashita responsibility) supports toll.low ✓. National WWII Museum (Gaerlan) article real, supports summary AND independently states "approximately one million Philippine civilians died" + Manila "100,000" ✓. **Defect:** the toll.high citation claimed the 'Japanese occupation of the Philippines' Wikipedia article "summariz[es] ~500,000–1,000,000 total occupation deaths" — but that article caps at ~500,000 / ~527,000 and mentions **no 1,000,000 figure anywhere**. The cite text overstated the source. **Fix:** rewrote that cite to match the source (~500,000 / 527,000 breakdown) with an audit caveat; **re-tagged the WWII Museum source from `summary` to `toll.high`** so the 1,000,000 upper bound now carries an explicit verified supporting source; updated toll.note to record the correction and the true provenance of the 1M figure.
- **phl-3** — Wikipedia supports toll.low (3,257 / 737 / ~35,000 / ~70,000, attributed to AI + TFDP) ✓. CNN supports toll.high (11,103 compensated under RA 10368) — CNN page geo-blocked (HTTP 451) to the fetcher, so the 11,103 figure was **independently corroborated**: the Human Rights Victims' Claims Board awarded compensation to exactly 11,103 victims under RA 10368 before its sunset clause (multiple PH legal/press sources). Caveat present and accurate. Amnesty supports summary (50,000 arrested 1972–1975, verbatim verified) ✓; advocacy-org caveat present and fair.
- **phl-4** — Wikipedia supports toll.low (6,252 official; 12,000–30,000 HR/academic) ✓. Al Jazeera 2025 supports toll.high ("human rights advocates and the ICC prosecutor estimated some 30,000 people were killed") ✓; caveat accurate. Al Jazeera 2026 supports summary — ICC confirmed all three counts of murder as crimes against humanity, committed Duterte to trial ✓.

### Toll low/high two-source check
All four events now have a distinct source for BOTH ends. phl-2 was the only single-real-source-for-high case at audit start (high mis-pointed at a source that didn't carry the number); resolved by re-tagging the WWII Museum source. phl-3's mixed-unit toll (deaths low vs. all-violations-victims high) is already flagged in its toll.note — left as is (real, concrete, state-acknowledged figure), not treated as a defect.

### Tier re-derivation (derived independently before reading assigned tier)
- phl-1 → WAR (colonial conquest; mass death from famine/disease/reprisals as method of war, not a destroy-the-group program). Matches assigned. ✓
- phl-2 → WAR (occupation + deliberate civilian massacre as war method/reprisal; famine is occupation-caused wartime death, **not** a peacetime disease catastrophe, so correctly WAR, not STR). Matches. ✓
- phl-3 → POL (targeted repression by political identity/dissent). Matches. ✓
- phl-4 → POL (systematic state killing of a targeted social category as policy; ICC crime against humanity). Matches. ✓
No tier corrections required; no STR-vs-EXT misclassification found.

### Ledger balance (law 1)
Both ledgers populated organically: 2 victim (US war, Japanese occupation), 2 perpetrator (Marcos, Duterte). No invention; no demand for false balance. country.note's framing of an overwhelmingly state-against-citizen perpetrator ledger is supported by the record.

### Verdict
4/4 events VERIFIED; 1 event flagged-and-fixed (phl-2 high-end source integrity). Country status set VERIFIED. No invented sources introduced.
