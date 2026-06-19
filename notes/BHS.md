# BHS — Bahamas — research log

Built from scratch (no seed). Status: RESEARCHED. 3 events: 2 victim, 1 perpetrator.

## Structure decision

The Bahamas is a deliberately ASYMMETRIC ledger, and the asymmetry is itself the finding — not a research shortfall.

- The two heaviest atrocities on Bahamian soil (Lucayan destruction; African chattel slavery) were committed by OTHER powers (Spain; Britain + American Loyalist planters).
- There was no self-governing Bahamian state for almost the entire victim period: majority rule 1967, independence 10 July 1973. So a "Bahamian state" perpetrator simply did not exist while the worst things happened.
- The modern independent Bahamas has NO documented mass-killing. The strongest real, externally adjudicated state wrongdoing is the IACHR-confirmed arbitrary detention + unlawful deportation of Cuban/Haitian asylum-seekers. Carried as STR with a NULL death toll — not inflated into a massacre.

## bhs-1 — Destruction of the Lucayans (1492–c.1520), victim, EXT

- Population at contact: scholarly range ~20,000–40,000. Genuinely disputed (no census; all extrapolation). Marked disputed=true.
- Peter Martyr d'Anghiera (contemporary chronicler): ~40,000 Lucayans removed from the islands in the early 1500s — essentially the whole nation. This is the high end and is a population DESTROYED, not a body-count. Noted explicitly.
- Ponce de León 1513: islands effectively empty, found one elderly woman ("La Vieja"). 1520 round-up reportedly found only eleven. Both from the scholarly source (citing Craton & Saunders 1999, p.56).
- Cause = enslavement + deportation to Spanish mines/pearl fisheries (Hispaniola, Venezuelan coast / Cubagua), NOT primarily disease per the sources consulted — hence EXT (deliberate destruction), not STR. This matters for the tier law.
- Best source: Forbes-Pateman, Yardumian, Vilar, Simms, Pateman & Keegan (2022), American Journal of Biological Anthropology, ancient-DNA paper (Keegan co-author — top Lucayan archaeologist). Verified by extracting text locally from the saved PDF (WebFetch returned binary). Confirms enslaved-en-masse framing, the 40,000 figure attribution to Peter Martyr, and the 1513 extinction report.

## bhs-2 — Chattel slavery in the colonial Bahamas (c.1648–1838), victim, STR

- STR, not a killing event. No discrete death toll is sourceable -> death low/high = NULL (per Law 2). Harm expressed as enslaved-population size.
- ~9,560 brought directly from Africa 1788–1807 (Afro-Bahamian / Wikipedia, tracing to Trans-Atlantic Slave Trade Database); "over 10,000" total before 1807 abolition of the trade.
- 1834 emancipation compensation: 1,057 awardees, 10,087 enslaved people (International Journal of Bahamian Studies, "Slave-owners' Compensation: The Bahamas Colony"; corroborated by Bahamianology compensation-records page). Drawn from triennial slave registers 1822–1834.
- ~7,000 "Liberated Africans" resettled 19th c. after Royal Navy interceptions.
- Slavery abolished 1 Aug 1834; full emancipation after apprenticeship, 1838.
- Perpetrator = British colonists + American Loyalist planters under the Crown — placed on VICTIM side because the enslaved population (now the Afro-Bahamian majority) is "Bahamas's people," and the perpetrator was the colonizing power, not a Bahamian state.

## bhs-3 — Arbitrary detention & unlawful deportation of Cuban/Haitian asylum-seekers (1990s–present), perpetrator, STR

- NULL death toll. Rights-abuse case, not mass death. Refused to invent a body-count.
- IACHR merits report Case 12.071 (facts pre-Aug 1998; report published 2021/2022): ~200 Cuban + ~130 Haitian victims (~330). Findings: arbitrary indefinite detention, inhumane/overcrowded conditions, denial of consular access, deportation without individual asylum assessment, criminalization of undocumented entry.
- Global Detention Project profile: Carmichael Road overcrowding (2014 UN Special Rapporteur — 133 detainees, 70 beds in men's section); detentions over 12 months; IACHR observation of ~13,000 deportations of irregular migrants (notably Haitians) in under four years.
- Migrant deaths at sea (e.g. 17 Haitians drowned 24 July 2022 when their vessel sank) EXCLUDED from toll — deaths in the migration route, not killings by the Bahamian state.
- received_lens = contested (the Bahamas defends the practice; rights bodies condemn it).

## Could NOT verify / caveats

- IACHR original merits PDF (oas.org/.../BAPU12.071EN.pdf) returned HTTP 403 — could not read the primary document directly. Used CEJIL (petitioners' counsel — flagged as advocate) and Global Detention Project as secondary routes to its findings. The case number, ~330 victim count, and findings are consistent across both.
- US State Dept 2018 Bahamas human-rights report: WebFetch returned garbled/binary content; not used as a source.
- Pateman 2022 PDF: WebFetch could not parse the binary; extracted text locally with pypdf to verify the key claims (worked).
- Lucayan contact population is genuinely contested (20k–40k, some sources reach higher); no firm number exists. Marked disputed; low/high span the mainstream range.
- No discrete death tolls exist for either Bahamian slavery OR the Lucayan deportation as a counted body-count; both are demographic measures (population destroyed / population enslaved), handled per the schema's population-vs-death-count guidance.

## Sources actually consulted

- Forbes-Pateman et al. 2022, Am J Biol Anthropol — https://anth.umd.edu/sites/anth.umd.edu/files/pubs/Pateman2022.pdf (scholarly; primary basis for bhs-1)
- Wikipedia, "Lucayan people" — https://en.wikipedia.org/wiki/Lucayan_people
- Smithsonian Magazine, Bahamas first inhabitants — https://www.smithsonianmag.com/history/how-archaeologists-are-unearthing-the-secrets-of-the-bahamas-first-inhabitants-180983548/
- Wikipedia, "Afro-Bahamian" — https://en.wikipedia.org/wiki/Afro-Bahamian
- "Slave-owners' Compensation: The Bahamas Colony", International Journal of Bahamian Studies — https://journals.sfu.ca/cob/index.php/files/article/view/343
- CEJIL press release, IACHR Carmichael Road merits report — https://cejil.org/en/press-releases/iachr-issues-merits-report-in-the-case-cuban-and-haitian-nationals-detained-at-and-deported-from-the-carmichael-road-detention-center-vs-commonwealth-of-the-bahamas/
- Global Detention Project, Bahamas profile — https://www.globaldetentionproject.org/countries/americas/bahamas
- Background (independence 1973, abolition dates): historycentral.com, schoolhistory.co.uk, Caribbean News Global, Bahamianology slavery-compensation page (cross-checks, not cited in JSON)

## Audit

Adversarial source-integrity + tier audit, 2026-06-19 (auditor: assume-fake-until-proven). Country status: RESEARCHED -> **UNVERIFIED** (1 of 3 events fails on a toll-sourcing defect; the other 2 verify cleanly).

### Method
Every source treated as fake until proven. Each work/author checked for real existence; each citation checked for whether it actually states the specific claim it is pinned to (toll.low / toll.high / tier / summary); each tier independently re-derived from the facts before reading the assigned tier; both toll ends checked for an actually-supporting source.

### Source existence — all real, none invented
- **Pateman 2022** ("A population history of indigenous Bahamian islanders", Am J Biol Anthropol) — REAL. Confirmed via Wiley DOI 10.1002/ajpa.24488, Semantic Scholar, academia.edu, ResearchGate. Author list (Forbes-Pateman, Yardumian, Vilar, Simms, Pateman, Keegan) matches. Keegan is the leading Lucayan archaeologist. Wiley page itself paywalled (HTTP 402) but existence/authorship/title triple-confirmed; notes record local pypdf text extraction of key claims.
- **Wikipedia "Lucayan people"** — REAL; supports summary verbatim (40,000 population, "Spanish may have carried away as many as 40,000 by 1513", "only eleven in all of the Bahamas" in 1520). Does NOT contain a 20,000 figure (relevant below).
- **Smithsonian Magazine "...Bahamas' First Inhabitants"** — REAL; states ~40,000 in 1492 and ~40,000 enslaved, near-extinction by 1530.
- **Wikipedia "Afro-Bahamian"** — REAL; supports summary verbatim (9,560 brought 1788–1807; ~7,000 Liberated Africans; abolition 1 Aug 1834).
- **IJBS "Slave-owners' Compensation: The Bahamas Colony"** — REAL; confirms exactly 1,057 awardees / 10,087 enslaved (data from UCL Legacies of British Slave-ownership). Supports toll.high verbatim.
- **CEJIL press release (Carmichael Road merits report)** — REAL; states ~200 Cuban + ~130 Haitian asylum-seekers and all four findings (arbitrary detention, inhumane conditions, denial of consular contact, deportation without asylum review). Advocate (petitioners' counsel) — caveat correctly discloses this.
- **Global Detention Project, Bahamas profile** — REAL; supports toll.high verbatim (133 detainees / 70 beds, 2014 UN SR; detentions over 12 months; IACHR observation ~13,000 deportations in under four years).
- **Primary IACHR doc** — Report No. 459/21, Case 12.071, OAS, CONFIRMED to exist (BAPU12.071EN.pdf). Direct fetch still 403 (as before); findings corroborated by CEJIL + IACHR's own 2021 merits-report index + search corpus.

### Tier re-derivation (independent, pre-read) — all 3 assigned tiers CORRECT
- **bhs-1 EXT** — driver is deliberate mass enslavement + deportation to mines/pearl fisheries, NOT disease. Disease-driven would be STR; this is deliberate destruction of a people as such = EXT. Correct. STR-vs-EXT line held.
- **bhs-2 STR** — ~2 centuries of legal chattel bondage, no discrete killing event, harm = enslaved-population size. Structural = STR. Correct.
- **bhs-3 STR** — sustained arbitrary detention + summary deportation, null state death toll; not mass-killing (not EXT), not purge (not POL). Structural coercion = STR. Correct.

### Toll low/high source coverage
- **bhs-1 — DEFECT (cause of UNVERIFIED).** toll.high (40,000) is double-sourced (Pateman/Peter Martyr + Wikipedia) — solid. toll.low (20,000) was pinned to the Smithsonian source, but Smithsonian states ~40,000, NOT 20,000 — so the low bound had NO citation that states it. The 20,000 contact-population estimate is itself genuine and widely attested (museum sources, scholarly 20k–40k range) but is uncited in-record. Corrective action taken: Smithsonian source relabelled supports='toll.low' -> 'summary' with an honest caveat; quarantine note added to toll.note; status_note added; event status -> UNVERIFIED. NO source invented to paper over the gap.
- **bhs-2** — toll fields null by design (no death-count exists; population-based harm). Both populated descriptors (import figures; 10,087 at emancipation) are sourced. Sound; Law 1 satisfied (victim ledger populated as record supports; perpetrator was external Crown/Loyalists, correctly placed victim-side).
- **bhs-3** — toll null by design (rights-abuse, not mass death); refusal to invent a body-count is correct. Both ledgers honest: perpetrator entry carried at true non-lethal weight, not inflated.

### Verdict
- bhs-1 Destruction of the Lucayans — **UNVERIFIED** (toll.low uncited; tier + high end + all sources otherwise verify). Remedy: cite an explicit ~20,000 contact-population source (e.g. Granberry & Vescelius; Craton & Saunders) then restore VERIFIED.
- bhs-2 Chattel slavery — **VERIFIED**.
- bhs-3 Cuban/Haitian detention & deportation — **VERIFIED**.
- Country BHS — **UNVERIFIED** (not all events verified).
- Events flagged: 1. Events verified: 2. No invented sources.
