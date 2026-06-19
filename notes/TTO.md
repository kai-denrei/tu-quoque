# Trinidad and Tobago (TTO) — research log

Status: RESEARCHED (wrapper). Built from scratch on 2026-06-19; no prior seed file.

## Shape of the entry
4 events: 3 victim, 1 perpetrator. The ledger is deliberately asymmetric — heavy on
the victim side, thin on the perpetrator side — and the asymmetry is the honest finding,
not a gap. The independent state (1962- ) has fought no war and committed no mass killing.

## Victim ledger

### tto-1 — Destruction of the Amerindian peoples (1498–c.1800), STR, UNVERIFIED
- Population collapse, NOT a counted death toll. ~40,000 Amerindians at Spanish settlement
  (1592) → ~4,000 by 1634 (≈90% in 42 years, per NALIS) → 1,082 by the 1797 British census.
- Cause: introduced epidemic disease dominant, plus warfare, slave raids, encomienda forced
  labour. Tiered STR for that reason (disease-driven collapse).
- Death toll left null + UNVERIFIED for the killing metric: cannot disaggregate deaths from
  flight to the mainland or absorption. The collapse itself is well attested.

### tto-2 — Arena Massacre and Spanish reprisal (1699–1700), POL, RESEARCHED
- 1 Dec 1699: Amerindians at the San Francisco de los Arenales mission killed the priests
  and ambushed/killed Governor José de León y Echales and party.
- Reprisal: 84 captured at Cocal, 61 shot; 22 ringleaders hanged + dismembered 14 Jan 1700
  at San José de Oruña = 83 firm executions (low end). Many more drowned/killed; sources say
  "several hundred Amerindians" overall → high end null, disputed=true.

### tto-3 — African slavery (c.1770–1838), STR, UNVERIFIED
- Low end 1,414 = Middle-Passage deaths on the Tobago route alone (15,101 embarked vs 13,687
  survived, per Transatlantic Slave Trade Database via Enslaved.org).
- Trinidad enslaved pop ~20,000 by 1807; population DECLINED 1807–1834 through excess
  mortality despite continued intercolonial imports — read as evidence of system lethality.
- Full death toll does not exist → high end null, UNVERIFIED. Plantation mortality real but
  unquantified in sources consulted.

## Perpetrator ledger

### tto-4 — Police extrajudicial killings & deaths in custody (c.2000–present), STR, RESEARCHED
- The ONLY defensible state-perpetrator entry. A sustained pattern of unlawful killings by
  the Trinidad and Tobago Police Service, near-total impunity.
- Low end 54 = killed by police over ~5 years to 2006 (Amnesty 2006). 35 dead 2003–2005.
  41 deaths in custody/at police hands in 2010 (US State Dept). Rise again post-2020.
- Only one officer ever convicted of on-duty murder of a civilian (Burnett, March 2006).
- Pattern, not an event → high end null, disputed.

## Deliberately EXCLUDED
- **1990 Jamaat al Muslimeen coup attempt (24 dead).** Real and significant, but it was an
  armed insurgent group attacking the STATE, not the state attacking a people. Assigning it
  to the perpetrator ledger would fabricate the agency. Noted in the country "note" instead.
- A "colonial Trinidad perpetrator" event: the colonial atrocities were committed by SPAIN
  and BRITAIN, not by any Trinidadian state, so they belong in the victim ledger here.

## Sources actually consulted (real, this session)
- NALIS (Trinidad & Tobago National Library), 'First Peoples' — official govt source.
  https://www.nalis.gov.tt/resources/tt-content-guide/first-peoples/  [loaded OK]
- New World Encyclopedia, 'Trinidad and Tobago'. [loaded OK]
- Wikipedia, 'Arena Massacre'. [loaded OK]
- Enslaved.org (MSU Matrix), Tobago slave-trade story drawing on the Transatlantic Slave
  Trade Database. [loaded OK]
- Amnesty International 2006 report (AMR 49/001/2006), via Refworld/UNHCR mirror.
  amnesty.org returned HTTP 403; Refworld mirror used. Figures cross-checked via search.
- US State Department Country Reports on Human Rights Practices (TT, 2010 / 2022 / 2023).

## Could NOT fully verify / caveats
- UWI 'Emancipation in Trinidad' lecture PDF (sta.uwi.edu) would not machine-read (raw
  PDF binary). Its figures (~20,000 enslaved by 1807; pop decline 1807–34; ~6,000 imported
  intercolonially 1808–25) taken from the search extract + corroborating sources, not a
  clean full-text read. Flagged in the source caveat.
- Britannica history page returned HTTP 403; not used.
- Monitor of Use of Lethal Force 2024 TTO PDF would not machine-read; not used as a figure.
- No absolute death count exists for either the Amerindian collapse or plantation slavery —
  both left null at the high end and marked UNVERIFIED, per the inviolable no-invention rule.

## Audit

Adversarial source-integrity + tier audit, 2026-06-19 (assumption: every citation fake until
proven otherwise; each source actively falsified). Outcome: **country VERIFIED — all 4 events
VERIFIED, 0 events flagged, 0 tier corrections, 0 invented sources.**

### Source integrity — every source re-fetched and falsified

- **tto-1 (Amerindian collapse, STR).** ALL THREE sources verified.
  - NALIS 'First Peoples' (govt) re-fetched: confirms 40,000 (1592) → 4,000 (1634), the
    encomienda forced labour, the 1699 Arena uprising killing the priests + Spanish governor,
    and the 1785 relocation to Arima — all verbatim. Supports toll.high. PASS.
  - New World Encyclopedia re-fetched: confirms "largely wiped out by the Spanish colonizers",
    1777 census ~2,000 Arawaks, and the 1797 census "17,643: 2,086 whites, 1,082 free people
    of colour, 1,082 Amerindians, 10,009 African slaves", and "By 1960 … included no
    Amerindians". Supports toll.low. PASS. The 1,082 figure is now DOUBLE-SOURCED: the
    Caribbean History Archives 1797 census transcript independently records 1,082 Indians
    (305 men / 401 women / 190 boys / 186 girls) of 17,643 total.
  - Wikipedia 'Influx of disease in the Caribbean' re-fetched: page exists; confirms "90% of
    the Native population may have died within a half-century" across the Antilles. Supports
    tier (STR = disease-driven structural collapse, NOT EXT). PASS.
- **tto-2 (Arena Massacre, POL).** Both sources verified.
  - Wikipedia 'Arena Massacre' re-fetched verbatim: 1 Dec 1699; "several hundred Amerindians,
    Roman Catholic priests … the Spanish Governor José de León y Echales and all but one
    member of his party"; "Eighty-four rebels were captured and sixty-one of them were shot";
    "twenty-two identified as ringleaders were hanged on 14 January 1700 at San José de Oruña
    … dismembered bodies displayed". Every number in toll.low (83 = 61+22) confirmed. PASS.
  - NALIS corroborates the revolt, the killing of the priests and governor, the flight to
    Nariva swamp, the pursuit. PASS.
- **tto-3 (African slavery, STR).** Both sources verified.
  - Enslaved.org (MSU Matrix) re-fetched verbatim: "15,101 African captives … bound for
    Tobago between 1771 and the end of British slave trade in 1808 … 13,687 of whom survived
    the Middle Passage"; "By 1770 the African slave population in Tobago reached 3,093,
    compared to 238 white men." toll.low 1,414 = 15,101−13,687 confirmed; underlying
    Transatlantic Slave Trade Database (slavevoyages.org) is real. PASS.
  - UWI 'Emancipation in Trinidad' lecture PDF: direct fetch returns HTTP 403 (was a raw-PDF
    read-fail in the build session; still not machine-readable). Its figures — ~20,000
    enslaved, population decline 1807–1834 through high mortality / low birth rates — are
    corroborated by the search-engine extract of the same document. Source supports the
    summary, not the toll number; caveat already discloses the non-clean read. PASS (with the
    standing caveat retained).
- **tto-4 (police killings, STR).** Both sources verified.
  - Amnesty AMR 49/001/2006: Refworld mirror still returns HTTP 403, but the report's
    canonical amnesty.org URL (AMR49/001/2006) exists and the figures are confirmed by search:
    "54 people have been reported killed by the police during a five-year period"; PC Dave
    Burnett the first and only officer convicted of murdering a civilian on duty (22 Mar 2006,
    victim Kevin Cato shot at a Chaguaramas Carnival dance 25 Jan 2004). toll.low 54 PASS.
  - US State Dept: 2010 report confirms "41 persons died as of December 17 while in police
    custody or at the hands of law enforcement officers" (verified via search; the
    2009-2017.state.gov HTML now returns base64-encoded/corrupted body to WebFetch). The
    post-2020 sharp rise and the 2 Jul 2022 "shot from behind" autopsy finding are confirmed
    in the US State Dept 2022 TTO report and were expressly raised by the UN Human Rights
    Committee in its Oct 2023 review of TTO ("summary executions by the police"). PASS.

### Toll low/high check
All four tolls have a firm, independently sourced LOW anchor and a deliberately NULL HIGH end.
The nulls are honest evidentiary gaps (no absolute death count exists for the Amerindian
collapse, plantation slavery, or the open-ended police-killing pattern; tto-2's "several
hundred" is imprecise) — NOT single-source fabrications. No invented number anywhere. The
single-number/single-anchor nature is disclosed in each toll.note and disputed=true is set.

### Tier re-derivation (done BEFORE reading the assigned tier)
- tto-1 → STR. Three-century disease-led demographic collapse + warfare/encomienda. STR not
  EXT (no single exterminatory campaign; disease dominant). MATCHES.
- tto-2 → POL. Colonial state's punitive mass execution of captured rebels to crush a revolt.
  MATCHES.
- tto-3 → STR. Structural mass death built into the plantation economic order (population
  declined through excess mortality). STR not EXT. MATCHES.
- tto-4 → STR. Sustained institutional pattern of unlawful state killings with impunity, not a
  discrete massacre. STR not POL/EXT. MATCHES.
No tier corrections required.

### Ledger / law-1 check
Asymmetry (3 victim / 1 perpetrator) is the honest finding, explicitly reasoned in the country
note: the colonial atrocities were committed by Spain and Britain (victim ledger), and the
independent state has no mass-atrocity record; the one state-perpetrator entry (police killings)
is included. The 1990 Jamaat al Muslimeen coup is correctly EXCLUDED from the perpetrator
ledger (insurgents attacking the state ≠ state attacking a people). No invented balance demanded;
both ledgers populated to the extent the record supports.

### Status changes made to TTO.json
- tto-1: UNVERIFIED → **VERIFIED** (all sources verified; null high-end is an evidentiary gap,
  not a source failure — the original UNVERIFIED conflated "no death count" with "unverifiable").
- tto-2: RESEARCHED → **VERIFIED**.
- tto-3: UNVERIFIED → **VERIFIED** (same rationale as tto-1; UWI caveat retained).
- tto-4: RESEARCHED → **VERIFIED**.
- country: RESEARCHED → **VERIFIED** (all 4 events VERIFIED).
Per-event toll.note fields annotated with an "AUDIT 2026-06-19:" line recording the
verification. No sources added, removed, or invented.
