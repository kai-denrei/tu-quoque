# Iceland (ISL) — research log

Built from scratch on 2026-06-19. Status: RESEARCHED.

## Ledger shape
- 2 victim events, 1 perpetrator event. The asymmetry is real, not a research gap.
- Iceland for almost all its history was a small, poor, non-imperial society: a stateless
  commonwealth (930-1262), then a tributary of Norway, then a Danish colony. No standing army,
  no navy, no overseas territory. There is little for an "In their name" ledger to hold.
- The one clear perpetrator record sits at the very founding: the Norse settlers were colonists
  AND slaveholders who brought enslaved Gaelic people with them.

## Victim side
1. **Móðuharðindin / Laki (1783-1786)** — STR. The defining mass-death event in Icelandic
   history. ~9,000-11,000 dead, ~20-25% of the population. Tiered STR (natural-disaster-driven
   famine + disease collapse), NOT a deliberate killing — included because the mass death is
   central to the country's story. Danish colonial relief was slow/inadequate but the deaths
   were not deliberately inflicted, so the agent is the eruption, not a human perpetrator.
2. **Tyrkjaránið / Turkish Abductions (1627)** — WAR. Barbary corsairs from Salé (Murat Reis /
   Jan Janszoon, a Dutch renegade) and Algiers killed ~40-50 and abducted ~300-400 into North
   African slavery. ~50 ever ransomed. The great trauma of Icelandic victim memory.

## Perpetrator side
3. **Norse settlers' enslavement of Gaelic captives (c.870-1100)** — STR. The founders brought
   enslaved Gaelic (Irish/Scottish) women and men as thralls. No death toll exists (toll = null,
   correctly, per the no-invented-numbers rule); harm = the enslavement itself. Backed by the
   2018 Science ancient-DNA paper: founding population ~57% Norse / ~43% Gaelic, Gaelic component
   largely enslaved women.

## Contested / range notes
- **Laki toll**: net population loss ~9,200-10,600; peak-years (1784-85) deaths ~11,000 with
  ~8,000 "excess". The round "9,000 / a quarter of the population" figure is the popular form;
  ~11,000 is the peak-years count. Bracketed low 9,000 / high 11,000. A 1785 smallpox epidemic
  (~1,500 deaths) overlapped and may be causally separate. Scholarship (NHESS 2024) finds
  fluorosis/air pollution contributed little directly — famine and disease did the killing.
- **1627 toll**: killed (~40-50) and captured (~300-400) are different harms bundled into one
  toll object; low=40 (killed), high=400 (abducted, the defining harm). Captive total ranges
  "almost 300" to "close to 400" across sources. Vestmannaeyjar alone: ~234-242 taken, ~34 killed.

## Could NOT fully verify
- **Science 2018 paper page (science.org/doi/10.1126/science.aar2625) returned HTTP 403.** The
  authors (Ebenesersdóttir et al.), journal (Science), year (2018), and the 57%/43% + ~70%-today
  figures were confirmed via The Irish Times and phys.org coverage, which attribute them to this
  exact paper. Citation kept with an explicit audit caveat in the source object.
- No surviving count of how many enslaved Gaels were brought to Iceland ("thousands" is the usual
  scholarly phrasing); toll left null.

## Considered but NOT given an event slot
- **Sturlungaöld (1220-1264)** — internal civil war among Icelandic chieftains. Real and brutal
  for its time but small absolute death counts (bloodiest battle, Haugsnes 1246, ~110 killed;
  Örlygsstaðir 1238, ~50+). Internal strife, not directed at another people. Noted in the country
  note rather than slotted, to keep to the most historically significant cases.

## Real sources consulted
- NHESS 24:2971, 2024 — "More poison than words can describe: what did people die of after the
  1783 Laki eruption?" (scholarly) — https://nhess.copernicus.org/articles/24/2971/2024/
- Wikipedia: History of Iceland; Turkish Abductions; Slavery in Iceland (Thrall); Age of the
  Sturlungs; Ólafur Egilsson (reference + primary captivity narrative pointer).
- Ebenesersdóttir et al., Science 360:6432, 2018, "Ancient genomes from Iceland reveal the making
  of a human population" (scholarly; page 403-blocked, confirmed via press coverage).
- The Irish Times (2018) and phys.org (2018) coverage of the Science DNA study.
- The Travels of Reverend Ólafur Egilsson (Reisubók), c.1628 — contemporary captive's account.

## Audit
Adversarial source-integrity + tier audit, 2026-06-19. Assumption going in: every citation fake until proven. Result: country VERIFIED (all 3 events VERIFIED) after one source-integrity correction.

### Source integrity (tried to falsify each)
- **isl-1 / NHESS 2024** — VERIFIED with a correction. The cite mis-attributed authorship to "Þórðardóttir et al." The real authors are **Wieners, C. E. & Hálfdanarson, G.**, NHESS 24:2971-2994, 2024 (confirmed via the journal page and Copernicus metadata search). Every factual claim attached to it checks out against the article: population ~49,609 → ~40,381; ~11,000 deaths in 1784-85; ~8,000 excess; famine + disease the primary causes; fluorosis and air-pollution contributions "weak". Cite + caveat corrected in the JSON. (A wrong author name is exactly the kind of fake-citation tell the audit hunts for — caught and fixed.)
- **isl-1 / History of Iceland (Wikipedia)** — VERIFIED. Page states verbatim "killed 9,000 people and 80% of the livestock... starvation killed a quarter of Iceland's population". Supports toll.low exactly. Tertiary, disclosed.
- **isl-2 / Turkish Abductions (Wikipedia)** — VERIFIED. ~50 killed, close to 400 captured; raiders from Salé under Murat Reis (Jan Janszoon) + a second Algiers fleet; Vestmannaeyjar took 234 / killed 34; ~50 ransomed 9-18 yrs later. Matches the source object exactly. Supports toll.high.
- **isl-2 / History of Iceland (Wikipedia)** — VERIFIED. "almost 300 Icelanders" — supports toll.low, brackets the higher count.
- **isl-2 / Ólafur Egilsson primary captivity narrative** — accepted. The Reisubók is a real, well-attested contemporary eyewitness account by the minister taken at Vestmannaeyjar (corroborated by the independently verified Turkish Abductions record). Correctly cited to "summary", NOT to toll, with an honest single-witness caveat.
- **isl-3 / Ebenesersdóttir et al., Science 2018** — VERIFIED via cross-corroboration. The Science page still returns HTTP 403, but the paper (S. Sunna Ebenesersdóttir et al., Science 360:6432, p.1028, 2018), the **57%-at-settlement → 70%-today** Norse-ancestry shift, and the "Gaelic settlers, many taken to Iceland as slaves" framing are confirmed independently via the PubMed/Science abstract (PMID 29853688) and The Irish Times. The 403 is disclosed in an updated caveat; the figure is no longer single-source.
- **isl-3 / The Irish Times 2018** — VERIFIED. "thousands of slaves – mostly women – taken by Norse Vikings from Ireland and Scotland"; founders "roughly even split"; ~70% Norse today. Press reporting on the named Science study; supports the enslavement framing.
- **isl-3 / Slavery in Iceland (Wikipedia)** — accepted as a reference for legal status/timeline (Grágás laws; slavery faded late 12th-13th c.), not for any toll. Consistent with the record.

### Toll integrity (both ends sourced?)
- **isl-1**: low (9,000, Wikipedia) and high (11,000, NHESS) each independently sourced. PASS.
- **isl-2**: low (40-50 killed) and high (400 captured) each sourced; the "two different harms in one toll object" issue is honestly flagged in toll.note and the unit-field caveat. PASS — not a hidden single-number toll.
- **isl-3**: toll null by design (enslavement, no death count survives). Correct under the no-invented-numbers rule. PASS.

### Tier re-derivation (derived from facts BEFORE reading assigned tier)
- **isl-1** → independently STR. Famine + disease demographic collapse from a natural disaster; disease-driven, so STR not EXT (rule enforced). Assigned STR — CORRECT, kept.
- **isl-2** → independently WAR. External slave raid: kill resisters, mass-abduct for sale; not group extermination. Assigned WAR — CORRECT, kept.
- **isl-3** → independently STR. Sustained, group-based chattel slavery, no massacre. Assigned STR — CORRECT, kept.
No tier changes required.

### Ledger (law 1)
2 victim + 1 perpetrator events; both ledgers populated where the record supports it. The asymmetry is genuine (small non-imperial society) and no balance was invented — confirmed, not flagged.

### Verdict
1 source-integrity defect found and corrected (NHESS author mis-attribution). No invented sources. All 3 events VERIFIED; country status VERIFIED.
