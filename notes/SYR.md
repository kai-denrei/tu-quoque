# Syria (SYR) — research log

Built from scratch 2026-06-18 via live web research (WebSearch + WebFetch). No prior seed file.

## Structure chosen

Five events, deliberately asymmetric toward the perpetrator side, because the dominant
fact of modern Syrian history is the Assad family's half-century war on its own population.

- **Victim ("Done to them") — 2 events:**
  - syr-1: French bombardment of Damascus / Great Syrian Revolt (1925–27, colonial, WAR)
  - syr-2: Mass civilian death of the Syrian Civil War (2011–present, contemporary, WAR)
- **Perpetrator ("In their name") — 3 events:**
  - syr-3: Hama massacre (1982, modern, POL)
  - syr-4: Ghouta chemical attack (2013, contemporary, POL)
  - syr-5: Systematic torture/mass execution in the prisons — Saydnaya + Caesar files (2011–24, contemporary, POL)

### The split-the-war decision
The biggest editorial call: the broad civil-war civilian toll goes in the VICTIM ledger
(Syrians killed in a war fought across their country by many hands — regime, Russia, Iran,
ISIS, rival rebels, US-led coalition), while the regime's discrete, deliberate atrocities
(Hama, Ghouta, the prisons) go in the PERPETRATOR ledger. This avoids double-counting the
same deaths while honouring that monitors (SNHR) attribute ~91% of civilian casualties to
the Assad government and its allies. The country note states this explicitly.

## What is well established
- **UN OHCHR civilian toll:** 306,887 civilian deaths Mar 2011–Mar 2021 (143,350 documented
  + 163,537 statistically estimated). This is a primary/UN source — strong. Confirmed via
  UN News (the OHCHR press release itself returned HTTP 403, so I used the UN News writeup
  of the same figure).
- **Ghouta 2013:** UN found "clear and convincing evidence" of sarin via surface-to-surface
  rockets; attribution to government forces is the consensus of UN inspectors, HRW, and many
  states. Date (21 Aug 2013) firm.
- **Caesar photos:** ~55,000 images / ~11,000 documented dead detainees (2011–2013),
  HRW-analysed. Firm.
- **Hama 1982:** date/duration (2–28 Feb), agents (Hafez al-Assad ordered; SAA + Rifaat's
  Defense Companies) firm.

## What is contested (sourced as ranges, both ends cited)
- **Hama toll:** 5,000–10,000 (HRW 1990) up to 30,000–40,000 (opposition / SNHR); Rifaat
  al-Assad reportedly boasted 38,000. Genuinely unresolved — used 5,000 low / 40,000 high.
- **Ghouta toll:** ~281 (MSF-treated confirmed ~355) up to ~1,429 (US govt, incl. 426
  children); range 281–1,729.
- **Saydnaya/prison toll:** Amnesty 5,000–13,000 hanged (2011–2015); SOHR ~30,000 killed
  since 2011; UN/HRW "tens of thousands" across the whole detention system. Used 5,000 /
  30,000 as Saydnaya bounds; note that the all-facilities toll is larger.
- **Civil war total:** UN civilian 306,887 (low) vs total-incl-combatants ~580,000 (2021) →
  ~656,493 (2025) per war monitors (high).
- **Great Syrian Revolt:** worst-documented event. October 1925 Damascus bombardment killed
  "hundreds" (HHR Atlas scholarly source); Maydan 1926 ~600–1,000; one Wikipedia tally gives
  ~4,213 total across the revolt. Used 4,000 low / 6,000 high to allow for under-counted
  rural/reprisal deaths. This is an order-of-magnitude estimate, flagged as such in the note.

## What could NOT be verified / excluded
- **Sayfo (Assyrian genocide, 1915):** touched the Jazira/northeast but fell mainly on
  Assyrian/Syriac Christians in Ottoman Anatolia, Iraq and Persia. Belongs to the
  Ottoman/Turkish successor state, not modern Syria's victim ledger. Deliberately EXCLUDED;
  rationale stated in the country note.
- **Tadmor (Palmyra) prison massacre 1980** (~1,000 killed by the Defense Companies,
  27 June 1980): real and well-sourced, but folded conceptually into the prison-system theme;
  to keep to 1–3 events per ledger I led with Hama (larger, more iconic) for the Hafez era
  and the Saydnaya/Caesar complex for the Bashar era. Tadmor is a candidate to add if the
  perpetrator ledger is later expanded.
- **Excess deaths from collapsed healthcare/food/water:** OHCHR explicitly says its 306,887
  excludes these; no clean sourceable number found, so not separately tolled.

## Real sources consulted
- UN News (OHCHR figure): https://news.un.org/en/story/2022/06/1121532
- OHCHR press release (HTTP 403, not fetched directly): the 306,000 estimate page
- Wikipedia: Casualties of the Syrian civil war; 1982 Hama massacre; Ghouta chemical attack;
  Great Syrian Revolt; Sednaya Prison; Sayfo
- HHR Atlas (IEG Mainz), "Damascus, 1925": https://hhr-atlas.ieg-mainz.de/articles/bogliolo-damascus
- HRW, "If the Dead Could Speak" (2015): https://www.hrw.org/report/2015/12/16/if-dead-could-speak/mass-deaths-and-torture-syrias-detention-facilities
- HRW, "Attacks on Ghouta" (2013): https://www.hrw.org/report/2013/09/10/attacks-ghouta/analysis-alleged-use-chemical-weapons-syria
- France 24 / AFP, Hama 40th-anniversary survivor reporting (2025)
- SNHR / SOHR figures via Wikipedia casualties aggregation and search summaries

## Status
Country status: RESEARCHED. All five events RESEARCHED (sourced low/high, no UNVERIFIED
gaps left). No figure or citation invented; every contested toll carries both ends with the
originating source named.

## Audit
**Auditor:** adversarial source-integrity + tier auditor, 2026-06-18. Method: every source
treated as fake until independently falsified via live WebFetch/WebSearch. Verdict: country
**VERIFIED**, all 5 events **VERIFIED**. No invented sources found; no UNVERIFIED quarantine
needed.

### Source integrity (all sources confirmed to exist AND support their attached claim)
- **syr-1 Wikipedia "Great Syrian Revolt"** — VERIFIED. Confirms ~4,213 total revolt deaths
  with a per-governorate breakdown (731 Damascus/Ghouta; 2,064 Jabal al-Druze), Damascus
  bombed by air for 24 continuous hours, High Commissioner Maurice Sarrail. Supports toll.low.
- **syr-1 HHR Atlas (IEG Mainz), "Damascus, 1925"** — VERIFIED. Real article by Luís Paulo
  Bogliolo (Melbourne Law School). Confirms exact wording "Hundreds of people were killed
  during the bombardment and entire districts were flattened," dates 18–21 Oct 1925, and the
  mandate-delegitimization framing. Supports summary.
- **syr-2 UN News 1121532 (OHCHR)** — VERIFIED. Confirms 306,887 civilians (143,350 documented
  + 163,537 statistically estimated), ~83/day, OHCHR/Bachelet. Supports toll.low. Primary.
- **syr-2 Wikipedia "Casualties of the Syrian civil war"** — VERIFIED. Confirms 580,000 floor
  (GCR2P, May 2021) and 656,493 (SOHR, Mar 2025) and SNHR ~91% government-attribution.
  Supports toll.high.
- **syr-3 Wikipedia "1982 Hama massacre"** — VERIFIED. Confirms 2–28 Feb 1982, Hafez ordered /
  Rifaat's Defense Companies + SAA, and every toll estimate cited (HRW 5,000–10,000; Amnesty
  10,000–25,000; Fisk ~20,000; opposition/SNHR 30,000–40,000; Rifaat's 38,000 boast). Supports
  toll.high.
- **syr-3 France 24 / AFP "40 years on… Hama survivors"** — VERIFIED via syndication. The
  france24.com URL returns HTTP 403 to the fetcher, but the AFP wire story (Jan 2025) is real
  and widely syndicated (Al-Monitor, Arab News, et al.), citing the 10,000–40,000 range plus
  survivor testimony (e.g. Camellia Boutros). Supports summary. NOTE: original URL 403s — a
  syndicated mirror would be a more reliable link.
- **syr-4 Wikipedia "Ghouta chemical attack"** — VERIFIED. Confirms 21 Aug 2013, sarin via
  surface-to-surface rockets, 281–1,729 toll range, UN "clear and convincing evidence."
  Supports toll.high. US 1,429 / 426 children figure separately confirmed (White House
  assessment, 30 Aug 2013) via search.
- **syr-4 HRW "Attacks on Ghouta" (Sept 2013)** — VERIFIED. Real report; attributes the attack
  to government forces on munitions (140mm/330mm rockets), trajectories (Mezzeh airport / 4th
  Armored Division), and chemical capability. Supports summary.
- **syr-5 HRW "If the Dead Could Speak" (Dec 2015)** — VERIFIED. Real report; confirms ~11,000
  bodies (6,786 individually identified; 28,707 detainee-death photos of 53,275 files),
  starvation/blunt-trauma/strangulation marks, May 2011–Aug 2013. Supports summary.
- **syr-5 Wikipedia "Sednaya Prison"** — VERIFIED. Confirms Amnesty 5,000–13,000 hanged
  (Sep 2011–Dec 2015, Feb 2017 report) and SOHR ~30,000 killed since 2011. Supports toll.high.

### Toll dual-end check
- syr-2, syr-3, syr-4, syr-5: both low and high ends carry a confirmed source. PASS.
- **syr-1: FLAG (single-source toll).** Only the low (~4,213) has a hard source; the high
  (~6,000) is an analytic allowance for under-counted rural/reprisal deaths, not a sourced
  number. This is transparently disclosed in toll.note and is an honest extrapolation, not an
  invented figure — so it does NOT trigger UNVERIFIED, but it is flagged. An audit marker was
  added inline to toll.note. (1 event flagged.)

### Tier re-derivation (done from the facts BEFORE reading the assigned tier — all confirmed)
- syr-1 → **WAR**: civilian-targeting violence inside a counter-insurgency war; not group
  destruction (not EXT), not peacetime policy (not POL), not famine/disease (not STR). Correct.
- syr-2 → **WAR**: mass civilian death inside multi-party warfare. The tolled OHCHR figure is
  explicitly *direct war-operations* deaths; collapse-of-healthcare excess deaths (which would
  lean STR) are excluded by OHCHR and not tolled here, so WAR is right. Correct.
- syr-3 → **POL**: deliberate state mass killing to crush an internal uprising; political
  suppression, not ethnic extermination-as-such (EXT line considered and rejected). Correct.
- syr-4 → **POL**: deliberate mass killing of an opposition civilian population with a banned
  weapon — sits on the WAR/POL boundary; POL holds given the deliberateness and targeting.
  Correct (defensible either way; assigned tier accepted).
- syr-5 → **POL**, with explicit STR-vs-EXT enforcement: deaths here are partly by starvation/
  denial-of-care, but the deprivation is *deliberately inflicted as a method of killing* with
  concentrated, documented intent — NOT diffuse structural collapse — so STR is wrong and POL
  is right. Not EXT (political detainees, not a group "as such"). Correct.

### Ledgers (law 1)
Both populated: victim = 2 (syr-1, syr-2), perpetrator = 3 (syr-3/4/5). The asymmetry is
record-supported (Assad-dynasty atrocities dominate the documentary record), not invented
balance. PASS.

### Verdict
events_verified = 5, events_flagged = 1 (syr-1 single-sourced high end, disclosed), country =
VERIFIED. No source failed falsification; no quarantine applied.
