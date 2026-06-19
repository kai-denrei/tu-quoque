# Tajikistan (TJK) — research log

Built from scratch 2026-06-19 via live web research (WebSearch + WebFetch). No seed file existed.

## Structure
Four events, balanced two-and-two. Tajikistan is a clean dual-lens case: the central
catastrophe (the 1992–97 civil war) splits along the SAME fault line on both ledgers —
the population as war victim, and the Kulobi-led state as perpetrator against its own
Pamiri and Garmi minorities.

**Victim ("Done to them")**
- tjk-1 — Soviet reconquest of Eastern Bukhara / crushing of the Basmachi, 1920–1925 (POL). Status UNVERIFIED.
- tjk-2 — The Tajik Civil War, 1992–1997 (WAR). Status RESEARCHED.

**Perpetrator ("In their name")**
- tjk-3 — Popular Front ethnic cleansing of Pamiris and Garmis, 1992–1993 (POL). Status RESEARCHED.
- tjk-4 — Gorno-Badakhshan (Pamir) crackdown, May 2022 (POL). Status RESEARCHED.

## What is contested
- **Civil war death toll.** Genuinely divergent: a later demographic recount put it at
  ~23,500 (≈20,000 in 1992 alone); contemporary/journalistic figures run 50,000 (May–Dec 1992),
  65,000, up to 150,000 (≈1–2% of population). Range in file is 23,500–150,000, disputed flagged.
  Displacement (~1.2M, ≈20% of population; 500k–1M refugees; ~100k to Afghanistan) is firmer.
- **2022 GBAO crackdown toll.** HRW: "up to 40" killed, 200+ detained/tortured. Independent
  monitors: ~24 confirmed dead. Local activists: 50+ killed, several hundred arrested. File
  uses 24–50 to bracket the competing estimates; the region was sealed, so no ground-truth count.
- **Popular Front campaign.** HRW/Helsinki Watch documented >300 summary executions plus
  "hundreds disappeared" specifically for the Dushanbe area after Dec 1992; the wider
  scorched-earth campaign in Qurghonteppa/Garm has no firm total, so toll.high is null.

## What could NOT be verified
- **No direct death count for the Basmachi suppression in the Tajik lands.** The best
  documented measure is displacement (~200,000 fled Eastern Bukhara in the first half of the
  1920s per the LoC Country Study; a broader 200,000–480,000 figure exists for the 1917–21
  revolutionary period but mixes Tajik/Uzbek/Turkmen flight). Death low/high left null;
  event marked UNVERIFIED. Did NOT invent a Tajik-specific famine or massacre death figure.
- **Stalinist purge / collectivization deaths for Tajikistan specifically** — only fragments
  surfaced (≈70% of Tajik CP expelled in the 1930s; 7,883 later rehabilitated). No sourceable
  death total, so not built into its own event rather than fabricate one.

## Sources actually consulted (real, reachable)
- LoC Country Studies, "Tajikistan — The Basmachi" — https://countrystudies.us/tajikistan/7.htm (FETCHED ok; ~200,000 flight figure)
- Wikipedia, "Tajikistani Civil War" — https://en.wikipedia.org/wiki/Tajikistani_Civil_War (FETCHED ok; dates, 20k–150k, 1.2M)
- Facts and Details, "Tajikistan Civil War" — https://factsanddetails.com/central-asia/Tajikistan/sub8_6a/entry-4858.html (FETCHED ok; 23,500 recount, displacement, Safarov ethnic cleansing)
- Wikipedia, "Popular Front of Tajikistan" — https://en.wikipedia.org/wiki/Popular_Front_of_Tajikistan (FETCHED ok; >300 killed/hundreds disappeared, Dec 1992 Dushanbe, Safarov, Russian 201st + Uzbek backing)
- HRW, "No Justice for Crackdown in Tajikistan's Autonomous Region Two Years On" (2024) — https://www.hrw.org/news/2024/05/15/no-justice-crackdown-tajikistans-autonomous-region-two-years (FETCHED ok; up to 40 killed, 200+ detained, no accountability)
- HRW/Helsinki Watch, "Human Rights in Tajikistan" (1993) — https://www.hrw.org/reports/Tajik93D.pdf (PDF would not render in fetch tool; used via catalog + corroborating secondary restatements)
- WebSearch aggregations: GBAO 2022 toll spread (Minority Rights Group, Amnesty, Eurasianet, RFE/RL); Soviet collectivization context.

## Fetch failures (403 / blocked — figures sourced elsewhere instead)
- Refworld (HRW World Report 1994), OHCHR 2022 press release, Eurasianet, RFE/RL, Minority Rights Group, migrationpolicy.org — all 403'd via WebFetch. The numbers they would have supplied were obtained from accessible HRW/Amnesty pages and search-result aggregation instead; nothing was taken on faith from a page that did not load.

## Notes for a future pass
- Could add a distinct Stalinist-repression victim event if a sourceable Tajikistan death/deportation figure can be found (1930s purges, forced lowland resettlement, dam-displacement).
- The 2012 Khorog operation (~22 civilians killed) is a candidate to fold into or alongside tjk-4 as part of the continuing Pamir repression pattern.

## Audit
Adversarial source-integrity + tier audit, 2026-06-19 (assume-fake posture; tried to falsify
every source). Result: country UNVERIFIED → **VERIFIED**; all four events now VERIFIED.

### Source integrity — every source independently re-checked
- **tjk-1 / LoC Country Study** (`countrystudies.us/tajikistan/7.htm`) — FETCHED, REAL. Confirms
  "as many as 200,000 people, including noncombatants, fled eastern Bukhoro in the first half of the
  1920s" and "guerrilla fighting in Tajikistan ended by 1925." Supports summary. PASS.
- **tjk-1 / Basmachi Wikipedia** — FETCHED, REAL but PARTIAL MISMATCH. Page shows "200,000 people
  had fled Tajik lands"; it does NOT corroborate the "480,000" upper bound the cite asserted. Struck
  the 480,000 from the caveat and toll.note; the firm figure is the LoC ~200,000 displacement. No
  death low/high exists — both null, by design (disclosed, not a quarantine).
- **tjk-2 / Tajikistani Civil War Wikipedia** — FETCHED, REAL. 20,000–150,000 killed, ~1.2M refugees,
  dates 5 May 1992–27 Jun 1997, HRW-attributed Pamiri/Garmi ethnic cleansing. Supports toll.high. PASS.
- **tjk-2 / Facts and Details** — FETCHED, REAL. 23,500 recount (~20k in 1992), 65,000–150,000 range,
  100,000 early guesstimate, 1.2M displaced, 500k–1M refugees, ~100k to Afghanistan, Safarov ethnic
  cleansing. Supports toll.low. PASS. Both ends of the contested toll are sourced.
- **tjk-3 / HRW-Helsinki Watch + Memorial, "Human Rights in Tajikistan" (1993)** — PDF would not
  render in WebFetch, so it was DOWNLOADED and read directly via `pdftotext`. REAL: ISBN
  1-56432-119-3, LoC Card Catalogue 93-80983, Dec 1993. Body confirms chapters "Summary Executions
  and other Violence by pro-Government Paramilitary Groups" (Dushanbe, Subulak) and "Disappearances
  and Informal Prisons," region-of-origin targeting, bus/checkpoint screening, and systematic looting
  and burning of opposition villages. The earlier "PDF wouldn't render / used secondary restatements"
  caveat is now SUPERSEDED — verified firsthand. PASS.
- **tjk-3 / Popular Front Wikipedia** — FETCHED, REAL. Safarov & Kenjayev founders (Jun 1992),
  HRW-attributed ">300 killed" + disappearances of Pamiris/Garmis after entering Dushanbe, airport/bus
  targeting, Russian 201st + Uzbek backing. Supports toll.low. PASS.
- **tjk-4 / HRW 2024 "No Justice for Crackdown..."** — FETCHED, REAL. Police "killed up to 40,"
  200+ detained/tortured, May 16 2022 Khorog protests, "anti-terrorism operation" framing, no
  accountability, sentences (Mamadshoeva 21 yrs, Kholiqnazarov 16 yrs). Supports toll.high. PASS.
- **tjk-4 / Amnesty 2024** — the exact news URL in the file 403'd on direct fetch, BUT the underlying
  report ("Tajikistan: Reprisals against Pamiri Minority," EUR 60/8413/2024) is real and reachable via
  official mirrors (eurasia.amnesty.org PDF, ecoi.net #2114932, JURIST). Confirms ~40 Pamiri deaths +
  205 arbitrary detentions after the May 2022 demonstrations. Supports toll.low / the spread. PASS
  (content verified via authoritative mirror; caveat updated to record the 403).

### Toll low/high
- tjk-1: low/high null (no death count exists) — correct and disclosed; displacement-only headline.
- tjk-2: low 23,500 (Facts & Details) + high 150,000 (Wikipedia) — both ends sourced. OK.
- tjk-3: low 300 (HRW via Wikipedia) + high null — single documented floor for the Dushanbe area,
  transparently flagged; no campaign total exists, so high null is honest, not lazy.
- tjk-4: low 24 / high 50 brackets the competing estimates (independent ~24, HRW "up to 40",
  Amnesty ~40, activists 50+) — both ends sourced. OK.

### Tier re-derivation (done BEFORE reading the assigned tier)
- tjk-1 → POL (lethal political-military subjugation to impose Soviet rule + mass flight; not
  disease=STR, not annihilation-of-Tajiks-as-such=EXT). Matches assigned. No change.
- tjk-2 → WAR (five-year conflict between organized factions). Matches. No change.
- tjk-3 → POL (systematic ethnic-regional killing/expulsion of a population; correctly below EXT
  given localized, war-bound character + documented count). Matches. No change.
- tjk-4 → POL (lethal political repression of a minority community; below WAR/EXT in scale). Matches.
  No change.
- No disease-driven events present → no STR-vs-EXT correction required. All four tiers stand.

### Ledgers
Both ledgers populated (2 victim, 2 perpetrator), each grounded in real sources. No invented
balance. Law 1 satisfied without fabrication.

### Net changes written to TJK.json
- All four event statuses → VERIFIED; country status RESEARCHED/UNVERIFIED → VERIFIED.
- tjk-1: removed the unsupported "480,000" upper bound from source-2 caveat and toll.note.
- tjk-3 source-1 caveat rewritten to reflect direct pdftotext read of the 1993 HRW report.
- tjk-4 source-2 caveat updated to record the Amnesty news-URL 403 + mirror verification.
- Audit notes appended to every source caveat. No sources added, none invented.
