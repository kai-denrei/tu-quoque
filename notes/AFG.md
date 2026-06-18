# Afghanistan (AFG) — research notes

Built from scratch 2026-06-18. Web tools (WebSearch/WebFetch) loaded and used; all four events rest on real, fetched sources. Two ledgers, roughly balanced: 2 victim + 2 perpetrator.

## Events

### Victim ledger ("Done to them")

**afg-1 — Mongol destruction of the Afghan cities (1221), tier WAR, status UNVERIFIED (toll grounds)**
- Genghis Khan's campaign against the Khwarazmian Empire emptied Herat, Balkh and Bamiyan.
- Bamiyan: after grandson Mutugen was killed in the siege, Genghis ordered every living thing in the valley killed; Mongols called the ruin "the city of screams" / "city of sorrows." (Wikipedia, Siege of Bamyan.)
- **Toll left NULL.** Chronicles claim 1.6M–2.4M "put to the sword" at Herat and total annihilation at Bamiyan, but modern historians (per Wikipedia "Destruction under the Mongol Empire," citing Smith) concede Middle Eastern chroniclers produced exaggerated estimates — the cities could not have held such populations. Event itself is well-attested; only the number is unverifiable, hence status UNVERIFIED.

**afg-2 — Soviet-Afghan War (1979–1989), tier WAR, status RESEARCHED**
- Soviet Army + PDPA government counter-insurgency; mass killing of rural civilians, mined countryside, depopulated districts.
- **Toll low = 562,000** (Lacina & Gleditsch battle-deaths demographic analysis, the low end). **Toll high = 2,000,000** civilian (often summarized 1–3M total).
- Mid-range scholarly attributions verified via Wikipedia "Atrocity crimes in the Soviet–Afghan War": Khalidi ~876,825 (to 1987); Rummel ~1M total (250,000 Soviet + 228,000 PDPA democidal); Sliwinski median 1.25M (9% of pre-war pop), accepted by Braithwaite & Wardak.
- ~5M refugees (1/3 of pre-war population) + ~2M IDPs. Both toll ends sourced.

### Perpetrator ledger ("In their name")

**afg-3 — Hazara genocide under Abdur Rahman Khan (1888–1893), tier EXT, status UNVERIFIED (toll grounds)**
- The "Iron Amir" declared jihad against the Shia Hazara; army crushed the Uruzgan revolt by 1892; mass massacre, enslavement, forced conversion, depopulation; Hazara land handed to Pashtun loyalists.
- **Toll left NULL** — no reliable absolute killing count for the 1890s. The well-attested figure is PROPORTIONAL: ~50–60% of the Hazara population killed, enslaved or displaced (preserved in display/note, not as a numeric toll).
- Scholarly basis: Mousavi (>half driven from villages); Ibrahimi, *The Hazaras and the Afghan State* (Oxford, 2017); Hakimi, "The Afghan State and the Hazara Genocide," Harvard Human Rights Journal Vol. 37 (2023/24) — PDF fetched and cited. Encyclopaedia Iranica notes difficulty of precise figures while affirming the event's reality.

**afg-4 — Taliban massacre of Hazaras at Mazar-i-Sharif (1998), tier EXT, status RESEARCHED**
- 8–11 Aug 1998; Taliban under governor Mulla Manon Niazi took the city and hunted Hazara civilians house to house; executions, killing of detainees in shipping containers; Niazi publicly branded Shia Hazaras infidels.
- **Toll low = 2,000** (HRW documented minimum, "true figure likely much higher"). **Toll high = 10,000** (upper cited range ~8,000–10,000). Disputed; Taliban controlled the city and restricted access.
- Primary documentation: Human Rights Watch, "Afghanistan: The Massacre in Mazar-i Sharif" (Nov 1998, Vol. 10 No. 7) — fetched and cited.

## What is contested / could NOT be verified
- **Pre-modern tolls (afg-1, afg-3):** no reliable absolute death counts exist. Mongol figures are chronicle exaggerations; Hazara-genocide killings are not isolable from enslavement/displacement. Both left NULL with the proportional/qualitative record preserved in the note. Both events flagged UNVERIFIED on toll grounds only — the events themselves are solidly attested.
- **Soviet war toll:** genuinely a 562,000–2,000,000 spread (1–3M total in common summary), method-dependent; preserved as a sourced range with named scholars for points within it.
- **Mazar 1998 toll:** HRW's conservative ~2,000 floor vs. the widely repeated ~8,000–10,000 — kept as a disputed range.

## Dual-lens point
The Hazara are victims of Afghan power in BOTH perpetrator events (1890s state, 1998 Taliban) — Afghanistan's worst internal violence repeatedly falls on the same minority, even as the country is itself repeatedly overrun from outside (Mongols, Soviets). Country `note` carries this; ledgers are roughly balanced, no padding.

## Real sources consulted
- Wikipedia: "Soviet–Afghan War"; "Atrocity crimes in the Soviet–Afghan War"; "Hazara genocide"; "1998 Mazar-i-Sharif massacre"; "Siege of Bamyan"; "Destruction under the Mongol Empire".
- Human Rights Watch, "Afghanistan: The Massacre in Mazar-i Sharif" (Nov 1998).
- Mehdi J. Hakimi, "The Afghan State and the Hazara Genocide," Harvard Human Rights Journal 37 (2023/24) — PDF.
- Scholar attributions surfaced via the above: Khalidi, Rummel, Sliwinski, Braithwaite & Wardak, Lacina & Gleditsch (Soviet war); Mousavi, Ibrahimi (Hazara genocide).

## Status
File `status: VERIFIED` after adversarial audit 2026-06-18 (see ## Audit). Index not updated (left to maintainer; current index.json count=29 does not yet list AFG).

## Audit
Adversarial source-integrity + tier audit, 2026-06-18 (Opus 4.8). Standing assumption: every citation FAKE until proven. Every source re-fetched and attacked; result below.

**Verdict: country VERIFIED. 4/4 events VERIFIED, 0 flagged. All 8 sources verified real and supportive of their attached claims.**

### Source integrity (all 8 sources stand)
- **afg-1 / Wikipedia 'Siege of Bamyan'** — REAL, SUPPORTS summary. Re-fetched: 1221 spring siege under Genghis Khan; Mutukan (Mutugen) struck by an arrow and died; yasak commanding every person/animal/bird/wild creature killed, no booty, "not even pregnant women spared"; no quarter for ~a month; no specific death number. Confirmed verbatim.
- **afg-1 / Wikipedia 'Destruction under the Mongol Empire'** — REAL, SUPPORTS summary. Herat/Balkh/Bamiyan among devastated cities; chronicle figures conceded exaggerated. Caveat (chronicle tolls cited only to show scale, not as count) is accurate and disclosed.
  - **Correction made:** display/note/summary said the Mongols called Bamiyan "the city of screams"; the source actually says "city of sorrows" / "city of cries." Wording corrected in JSON to match source. No bearing on toll or tier.
- **afg-2 / Wikipedia 'Soviet–Afghan War'** — REAL, SUPPORTS toll.high. War dates 25 Dec 1979–15 Feb 1989; civilian estimates 562,000 / 1M / 1.5M / 2M; "1–3 million" summary; 6.5–11.5% of 13.5M (1979 census); 5M external + 2M internal displaced. All confirmed verbatim.
- **afg-2 / Wikipedia 'Atrocity crimes in the Soviet–Afghan War'** — REAL, SUPPORTS toll.low. All four scholar attributions confirmed verbatim: Khalidi 876,825 (to 1987); Rummel 250,000 Soviet + 228,000 PDPA democide, ~1M total; Sliwinski 1.25M median (9%), accepted by Braithwaite & Wardak (1.2M); Lacina & Gleditsch 562,000 low end. No fabrication found.
- **afg-3 / Wikipedia 'Hazara genocide'** — REAL, SUPPORTS summary. 1888–1893; Abdur Rahman; "50% to 60%" / "over 60 percent" killed/enslaved/displaced; jihad vs Shia; Oruzgan crushed by 1892; 9,000 Hazara women enslaved in Kabul + sales in Kabul/Qandahar; towers of heads; land to non-Hazara loyalists. Cites Mousavi, Ibrahimi (Oxford 2017), Hakimi (Harvard HRJ 2023), Encyclopaedia Iranica. Confirmed verbatim.
- **afg-3 / Hakimi, 'The Afghan State and the Hazara Genocide,' Harvard Human Rights Journal Vol. 37** — REAL, SUPPORTS summary. The scholarly citation is the easiest to fake, so verified three ways: (a) PDF fetched as binary (548.9KB) and text-extracted with pdftotext — title, author "Mehdi J. Hakimi*", journal/volume header "Harvard Human Rights Journal / Vol. 37", and the thesis that the 1890s Abdur Rahman campaign meets the Genocide Convention with ~60% of Hazaras massacred/enslaved/displaced all present in the actual document; (b) SSRN abstract 4516797; (c) Semantic Scholar. Genuine.
- **afg-4 / HRW 'Afghanistan: The Massacre in Mazar-i Sharif' (Nov 1998)** — REAL, SUPPORTS toll.low. Exact quote confirmed: "at least 2,000 may have been killed in the city and possibly many more." Hazara/Shia particularly targeted; systematic search for male Hazara/Tajik/Uzbek; container asphyxiation deaths. (Vol. 10 No. 7 not shown in fetched body but the report itself is genuine and is the principal documentation.)
- **afg-4 / Wikipedia '1998 Mazar-i-Sharif massacre'** — REAL, SUPPORTS toll.high. 8–11 Aug 1998; Mulla Manon Niazi; Shia Hazara targeted; "at least 10,000 killed." Confirmed.

### Toll
- **afg-2:** both ends independently sourced (low 562,000 = Lacina & Gleditsch; high 2,000,000 = Wikipedia range). Not single-source. OK.
- **afg-4:** both ends independently sourced (low 2,000 = HRW; high 10,000 = Wikipedia). Not single-source. OK.
- **afg-1, afg-3:** tolls legitimately NULL. No reliable absolute count exists (Mongol chronicle figures are conceded exaggerations; Hazara killings are not isolable from enslavement/displacement). This is a deliberate integrity quarantine with the proportional/qualitative record preserved in display/note — NOT a verification failure and NOT a fabrication. Correct call; left null.

### Tier (re-derived from facts before reading assigned tier — all correct)
- afg-1 WAR ✓ — siege-reprisal mass killing of inhabited cities in a war of conquest, not destruction of a defined group. Not disease-driven (STR n/a).
- afg-2 WAR ✓ — mass civilian killing in counter-insurgency, broad targeting, with documented democidal elements; not group-extermination. Not disease-driven (STR n/a).
- afg-3 EXT ✓ — state campaign to destroy a defined ethnic-religious group (Hakimi argues Genocide Convention threshold met). Not disease-driven (STR n/a).
- afg-4 EXT ✓ — targeted killing of Hazara as Shia "infidels." Not disease-driven (STR n/a).
- No EXT misapplied to a disease-driven event; no STR events present; no tier corrections required.

### Ledgers (law 1)
Both ledgers populated and genuinely supported: 2 victim (afg-1 Mongols, afg-2 Soviets) + 2 perpetrator (afg-3 Hazara genocide, afg-4 Mazar 1998). The Hazara appear as victims in BOTH perpetrator events — a real, sourced dual-lens point, not invented balance.

### Status change
All four events promoted UNVERIFIED/RESEARCHED → **VERIFIED** (every source verified; null tolls on afg-1/afg-3 are legitimate integrity quarantines, not unverifiable sources). Country promoted RESEARCHED → **VERIFIED**. One wording correction (city of screams → city of sorrows). No sources invented; none removed.
