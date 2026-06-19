# Greenland (GRL) — research log

Built from scratch, 2026-06-19. Status: RESEARCHED (country wrapper). Web tools (WebSearch/WebFetch) loaded and used.

## Shape of the entry

Deeply asymmetric, and the asymmetry is real — not a research gap.

- **Victim ledger: 3 events, heavy and well-documented.**
- **Perpetrator ledger: 1 event, thin / UNVERIFIED.** Greenland has never had its own army, never colonised anyone, and has no documented record of mass atrocity by Greenlandic forces or elites. The single candidate is medieval Inuit raiding on the dying Norse colony. Included so the dual-lens is visible; deliberately NOT inflated.

The crucial framing point: the principal AGENT of every major modern harm to Greenlanders was the **Danish state** (and, at Thule, the **US military**), not the Greenlandic people. So those harms sit in GRL's *victim* ledger with Denmark/USA named plainly — not as authorless tragedies, and not as Greenlandic perpetration.

## Events

1. **grl-1 — 1733–35 smallpox at Godthåb (Nuuk).** STR. Introduced via a Greenlander taken to Denmark in 1731, returned infected. Killed most of the local Inuit; Egede recorded only ~20 converts left alive. **No reliable absolute death count exists → toll low/high null, event UNVERIFIED.** Baseline 1730s population too poorly quantified to give a defensible range.

2. **grl-2 — 1919–21 influenza pandemic.** STR. Best-quantified victim event. **~697 excess deaths (95% CI 637–756), ≈5.2% of ~13,459 population; district range 0.1–11%.** Source: peer-reviewed Niegowska et al., Int. J. Circumpolar Health 83 (2024), via PMC + PubMed. Same study: 1889–92 pandemic ~422 deaths (≈3.5%). Status RESEARCHED. Toll low/high = CI bounds, not a dispute.

3. **grl-3 — Danish assimilation & population control (1951–1991), a cluster.** POL. **NO death toll — harm is reproductive coercion, child removal, forced displacement; numeric fields null with explicit unit caveat.**
   - *Spiral / coil campaign:* ~4,500 women & girls fitted with IUDs without consent c.1966–70 (≈half of childbearing-age women), some as young as 12–14; into the 1970s, cases into the 1990s/2000s. Surfaced via 2022 podcast "Spiralkampagnen"; joint investigation reported Sept 2025; Danish PM Frederiksen + Greenlandic PM Nielsen apologised; 143 women suing by 2024.
   - *"Little Danes" experiment:* 22 Inuit children taken to Denmark in 1951 to be raised as Danes; most not orphans; 6 adopted away, 16 returned to Danish-speaking institutions, largely never reunited. Apology 2020/2022.
   - *Thule/Pituffik relocation:* May 1953, at US request, Danish authorities forced 116 Inughuit (27 families) from Uummannaq to Qaanaaq ~130 km north on days' notice; tents through the polar winter to Nov 1953. 2003 Danish Supreme Court denied right of return; ECHR declared the case inadmissible (2006).

4. **grl-4 — Thule (Inuit) raids on the Norse Eastern Settlement, c.1379.** WAR. The ONLY perpetrator-side candidate. **Status UNVERIFIED.** Icelandic Annals report an Inuit raid in 1379 killing 18 Norse + 3 captives — recorded only by the Norse side, archaeologically uncorroborated, predates any Greenlandic polity. Toll low null / high 18. Modern scholarship attributes the Norse collapse overwhelmingly to climate cooling, drought, walrus-ivory trade collapse and out-migration, not Inuit attack.

## Contested / uncertain

- **1733 smallpox:** no absolute number anywhere — left null.
- **Spiral campaign total:** 4,500 is the most-cited figure for 1966–70; full multi-decade total still being established by the official investigation.
- **1379 Norse raid:** existence/scale uncertain; single Norse-side annalistic source, no archaeology.
- **Thule 1999 apology:** a 1999 Danish PM apology is mentioned in some web summaries but was NOT confirmed on the Wikipedia/Pituffik page I could verify, so it was OMITTED from the entry rather than asserted.

## Could NOT verify / dead ends

- tandfonline full text of the influenza study: HTTP 403. Worked around via the open PMC mirror (PMC10919313) and PubMed — got the figures cleanly.
- DIIS page on the Thule relocation: loaded but light on specifics; numbers taken from Nunatsiaq News + Pituffik Wikipedia instead.
- Hingitaq_53 Wikipedia: 404 (no such page title); Thule details taken from the Pituffik article and Nunatsiaq News.

## Real sources consulted

- Niegowska et al., "The 1919–21 influenza pandemic in Greenland," Int. J. Circumpolar Health 83 (2024) — PMC10919313 / PubMed 38446074. **(scholarly; toll anchor)**
- Wikipedia: Hans Egede; Forced contraception of women in Greenland; Little Danes experiment; Pituffik. **(reference)**
- BBC News, "Denmark apologises to Greenland's forced contraception victims" (2025). **(press)**
- Nunatsiaq News, "Taissumani: May 25, 1953 — The expulsion of the Inughuit." **(press/regional)**
- Archaeology Magazine, "The Fate of Greenland's Vikings" — 1379 raid + the no-archaeological-evidence caveat. **(reference)**
- Britannica, "Greenland: History" — colonial chronology. **(reference)**

## Schema note

Followed the prompt's event statuses (RESEARCHED/UNVERIFIED) rather than the "VERIFIED" value used in some existing files (e.g. AUS.json), per the explicit instruction in this task.

## Audit

Adversarial source-integrity + tier audit, 2026-06-19. Posture: assume every citation fake until proven otherwise; try to falsify each source against the specific claim it is attached to. Web tools (WebSearch/WebFetch) loaded and used.

**Verdict: country UNVERIFIED. 3 of 4 events VERIFIED; grl-4 quarantined UNVERIFIED.**

### Source integrity — every source falsification-tested

- **grl-2 — Niegowska byline was WRONG.** The cited influenza study is real and on-claim, BUT its lead author is **Ingholt** (Ingholt, Simonsen, Mamelund, Noahsen & van Wijhe, *Int. J. Circumpolar Health* 83, 2024), not "Niegowska et al." as both source entries labelled it. Byline **corrected** in both cites. PMC10919313 full text confirms 697 excess deaths (95% CI 637–756), 5.2% of population, 0.1–11% district range, 13,459 (1911 census) and the 422-death 1889–92 figure; PubMed 38446074 abstract confirms 5.2% and 0.1–11%.
- **grl-1 — smallpox.** Both sources real and on-claim. Hans Egede Wikipedia confirms the 1733 colonial vector (a returning convert / "Carl"), the epidemic raging by 1734, and Gertrud Egede's 1735 death. The "~twenty baptised survivors" detail is NOT on that exact page but is independently corroborated (multiple accounts tracing to Egede's own report). Britannica returned HTTP 403 (anti-scraping), so the page could not be fetched directly — but its existence and content (1721 colonisation under Egede, 1733 smallpox devastation) were confirmed via the search index ("Greenland - Viking, Inuit, Colonization | Britannica") and the claim is independently carried by the Egede source. Not quarantined on a scraping block alone.
- **grl-3 — Danish assimilation/population control.** All four sources real and on-claim. Wikipedia + Frederiksen's apology (BBC + wire press) confirm "half of 9,000 childbearing-age women" (≈4,500) given IUDs c.1966–70, the 2022 "Spiralkampagnen" podcast, the March 2024 lawsuit by 143 women, the September 2025 report. Little Danes Wikipedia confirms 22 children (1951), only six orphans, 6 adopted, 16 returned to a Danish-speaking institution, 2020 apology + 2022 in-person apology with compensation. The **116 people / 27 families** Thule figure is verified in the **Nunatsiaq News** "Taissumani: May 25, 1953" article (Pituffik Wikipedia confirms 27 houses/families, US request, tents May–Nov 1953, 2003 Supreme Court, 2006 ECHR — but does NOT itself state the 116 headcount, which is exactly why both sources are cited; the dual citation is justified). The BBC fetch was blocked by the host, but the article's existence and content were confirmed via the search index and the canonical feeds.bbci.co.uk mirror.
- **grl-4 — 1379 Inuit raid.** Source (Archaeology Magazine, "The Fate of Greenland's Vikings") verified real and on-point: it reports the Annals' 18-killed / 3-captured figure AND quotes McGhee that there is no physical evidence of massacres or Inuit site-takeover, framing climate/economic collapse as the cause.

### Toll — low/high coverage

- **grl-2:** toll.low 637 / high 756 are the 95% CI bounds from ONE peer-reviewed study (two source entries = same paper via two mirrors). **Single-source flag raised** — but appropriate here: these are statistical bounds on a single best estimate, not two contested claims; `disputed:false` is honest.
- **grl-1 & grl-3:** tolls null by design (no defensible count / harm is not death). Honest nulls, not source failures.
- **grl-4:** toll low null / high 18 — single-source, single-number, one-sided. Correctly flagged disputed.

### Tier — re-derived independently before reading the assigned value

- grl-1 STR ✓ (disease-driven collapse = STR, not EXT — rule enforced).
- grl-2 STR ✓ (introduced epidemic disease = STR, not EXT — rule enforced).
- grl-3 POL ✓ (deliberate group-targeting state policy, no death campaign; not EXT, not STR).
- grl-4 WAR ✓ (small-scale lethal raiding between competing peoples; tiered for the act, not the people).
All four assigned tiers independently re-derived as correct; no tier corrections needed.

### Ledgers (law 1)

Asymmetry is real and honestly recorded: victim ledger heavy and documented (3 events), perpetrator ledger thin and quarantined (1 event). No invented balance demanded; both ledgers populated where the record supports it.

### Quarantine

- **grl-4 stays UNVERIFIED** — not because the citation is fake (it is genuine) but because the underlying event cannot be independently corroborated: a single one-sided Norse annalistic entry, zero archaeology, no clear Inuit-tradition confirmation, predating any Greenlandic polity. Quarantine note added to toll.note.

### Net changes written to GRL.json

- grl-1: UNVERIFIED → **VERIFIED** (sources verify; null toll is an honest null, not a source failure).
- grl-2: RESEARCHED → **VERIFIED**; author byline corrected Niegowska → Ingholt et al. in both cites; single-source-CI note added.
- grl-3: RESEARCHED → **VERIFIED**; audit note added.
- grl-4: **UNVERIFIED** (unchanged); quarantine reasoning sharpened.
- country: RESEARCHED → **UNVERIFIED** (not all events VERIFIED).
- No sources invented or removed; one factual citation byline corrected.
