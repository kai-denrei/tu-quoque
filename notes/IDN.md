# Indonesia (IDN) — research notes

Built from scratch 2026-06-18. Status: RESEARCHED. Four events, two per ledger.

## Ledger structure

**Done to them (victim):**
- idn-1 — Japanese occupation 1942-45 (famine + romusha forced labour), tier STR
- idn-2 — Dutch conquest of Aceh 1873-1914, tier WAR

**In their name (perpetrator):**
- idn-3 — 1965-66 anti-communist mass killings, tier POL
- idn-4 — East Timor occupation 1975-99, tier EXT

The two ledgers are genuinely balanced for Indonesia: a people brutalised under
colonial conquest and wartime occupation, then a state that within two decades of
independence committed one of the century's largest political massacres and a
quarter-century occupation widely judged genocidal. No invention was needed to
populate either side.

## Tier choices

- **Japanese occupation = STR**, not EXT: the mass death was overwhelmingly famine
  (rice/resource requisitioning) and lethal forced-labour conditions, i.e. structural
  and forced-labour death of a subject population, not a program to destroy Indonesians
  as a group. Per the project rule (disease/famine-driven collapse = STR).
- **Aceh War = WAR**: a colonial war of conquest with mass civilian death as method;
  some scholars raise the genocide question (the Journal of Genocide Research piece
  literally asks "Genocide in the Kampongs?"), but a 40-year war of subjugation reads
  as WAR rather than EXT.
- **1965-66 = POL**: extermination organised around political identity (PKI / the left),
  with ethnic-Chinese and Bali dimensions some argue shade toward EXT.
- **East Timor = EXT**: deliberate destruction of a large fraction of a small people in
  their own land over 24 years; commonly termed the East Timor genocide.

## Tolls and what is contested

**idn-1 Japanese occupation.** The famine figure (~2.4M, Java 1944-45) is from a
peer-reviewed Australian Economic History Review paper (van der Eng, 2024). The ~4M
total-occupation figure is the long-circulated UN-report number repeated in reference
works (and cited via Dower 1986). These are demographic estimates over a starvation/
disease catastrophe, not body counts; baselines are debated ("Missing millions" debate
in Modern Asian Studies). Romusha: 4-10M conscripted on Java; of 200,000-500,000
(Ricklefs) sent off Java, ~70,000 survived. I set low=2.4M (Java famine, well-sourced)
and high=4M (whole-occupation total). Mixing a sub-figure (Java famine) as the "low"
against a whole-territory "high" is flagged in the toll note so it isn't misread.

**idn-2 Aceh.** Vickers gives 50,000-60,000 Acehnese dead from violence and disease;
other summaries say 60,000-70,000. I used 50,000-70,000. The 1904 van Daalen campaign
killed at least ~2,922 in one expedition (incl. ~1,149 women/children) — a concrete,
photographed atrocity within the larger war.

**idn-3 1965-66.** Strong scholarly consensus band 500,000-1,000,000. Cribb argues
~500,000 is the most defensible single figure (and that precision is unattainable);
1976 Indonesian army security-command estimate was 450,000-500,000; Anderson 500k-1M;
Bevins up to a million or more; outliers reach 2-3M. I set the consensus band as the
range and noted the wider spread.

**idn-4 East Timor.** CAVR (the UN-backed truth commission, 2005 "Chega!" report) is the
anchor: ~102,800 minimum conflict-related deaths (±12,000), of which ~18,600 violent
killings/disappearances and ~84,000 above-baseline hunger/illness (upper bound ~183,000
for hunger/illness). CAVR attributed ~70% of documented violent killings to Indonesian
forces. Amnesty cites ~200,000 (~1/3 of pre-invasion population); Defert ~308,000 for
1975-81. I set low=102,800 (CAVR central minimum), high=200,000 (the widely cited total).

## What could NOT be fully verified / caveats

- The ~4M Japanese-occupation total rests on a postwar UN report repeated secondhand
  through reference works; I could not pull the original UN document, so it is cited via
  the Wikipedia summary (which attributes it). Flagged as disputed.
- The CAVR figures for East Timor are cited via the reference entry rather than the
  primary "Chega!" PDF itself; the originating body (CAVR truth commission) is named in
  the citation and caveat. Numbers are consistent with CAVR's published findings.
- For idn-2 and idn-4 I leaned on reference-tier (Wikipedia/Britannica) sources that
  themselves cite named scholars (Vickers; CAVR; Amnesty; Defert) plus peer-reviewed
  Journal of Genocide Research pieces for context. No figure here is unsourced; none was
  invented.
- No source was fabricated. Where a number could not be pinned to a hard primary, it is
  marked disputed=true with the provenance and caveat in the toll note.

## Real sources consulted

- Pierre van der Eng, "Mortality from the 1944–1945 famine in Java, Indonesia,"
  Australian Economic History Review (2024) — onlinelibrary.wiley.com/doi/10.1111/aehr.12287
- "Missing millions: Java's 1944–45 famine," Modern Asian Studies (Cambridge Core) — context
- Wikipedia: "Japanese occupation of the Dutch East Indies," "Rōmusha," "Aceh War,"
  "Indonesian mass killings of 1965–66," "East Timor genocide,"
  "Indonesian occupation of East Timor," "Indonesian invasion of East Timor"
- "Genocide in the Kampongs? Dutch nineteenth century colonial warfare in Aceh,"
  Journal of Genocide Research 14:3-4 (2012) — tandfonline.com/doi/abs/10.1080/14623528.2012.719367
- "Mass violence and the end of the Dutch colonial empire in Indonesia,"
  Journal of Genocide Research (2012) — tandfonline.com/doi/full/10.1080/14623528.2012.719362
- Robert Cribb, "Unresolved Problems in the Indonesian Killings of 1965-1966,"
  Asian Survey (2002) — library.fes.de/libalt/journals/swetsfulltext/15592814.pdf
- "New Directions in the Historiography of Indonesia's Mass Killings, 1965–66," Project MUSE
- Encyclopaedia Britannica, "1975 invasion of East Timor"
- (East Timor toll cross-checks: CAVR "Chega!" findings as summarized; Amnesty International;
  Gabriel Defert; Holocaust Museum Houston "East Timor, 1975-1999")

## Audit

Adversarial source-integrity + tier audit, 2026-06-18 (assume-fake-until-proven posture).
Every source and number was attacked for falsification; every tier independently re-derived
from the facts before reading the assigned one.

**Country status: UNVERIFIED** (1 of 4 events failed; rule: country VERIFIED only if all events VERIFIED).

### idn-1 Japanese occupation — UNVERIFIED (corrected + quarantined)

The one real integrity failure in the file. The cited source is genuine; the CLAIM attached
to it was not.

- The prior `toll.low` = 2,400,000 was labelled "~2.4 million **famine deaths** in Java 1944-45"
  and pinned to van der Eng (2024). Pulling the actual paper (ANU CEH WP2024-01 = the published
  Wiley article) shows this is a mischaracterization:
  - van der Eng's own estimate is **~1.8–1.9 million EXCESS DEATHS** in Java for 1942–45, and
    **~3.3–3.4 million NET POPULATION LOSS** once ~1.5 million missing births are added.
  - The **2.45 million figure is Egbert de Vries's (1946) NET POPULATION LOSS** (120,000 in
    1943 + 813,000 in 1944 + 1.5M in 1945) — deaths PLUS missing births — which van der Eng
    *validates as a net-loss figure*, not as a body count of famine deaths.
  - So "2.4 million famine deaths" conflated a net-population-loss number with a death count.
  - **Correction:** `toll.low` set to 1,800,000 (the excess-deaths figure the cited source
    actually supports); display, summary, note and caveats rewritten to state the distinction.
- `toll.high` = 4,000,000 is a real, widely-cited figure (Wikipedia → Dower 1986, p. 296,
  → postwar UN-era number) — confirmed present on the cited page. BUT the very paper cited for
  the low (van der Eng 2024) **explicitly judges 4 million "too high"** (it folded in an
  unsubstantiated 1946 extrapolation). High retained as the widely-cited upper bound but now
  flagged disputed/rejected-by-current-scholarship in the note + caveat.
- Romusha figures (200,000–500,000 off Java, ~70,000 survivors; Ricklefs/Satō) corroborated
  by van der Eng (2.6M mobilised on Java). Source real, supports summary.
- Journal name corrected: the journal is now "Asia-Pacific Economic History Review" (vol. 64:2,
  pp. 192–212), not "Australian Economic History Review."
- **Tier STR = correct.** Death was famine (rice/resource requisitioning) + lethal forced-labour
  conditions — structural/forced-labour death of a subject population, not a program to destroy
  Indonesians as a group. STR-vs-EXT rule (famine/disease-driven = STR) holds.
- Status set UNVERIFIED to flag the original citation–claim mismatch; it is now quarantined and
  corrected, with an `audit_note` on the event.

### idn-2 Aceh War — VERIFIED

- "Aceh War" Wikipedia confirmed to carry: Vickers 50,000–60,000 Acehnese dead (violence +
  disease), the 60,000–70,000 infobox figure, and van Daalen 1904 (≥2,922 dead incl. 1,149
  women/children). Both toll ends sourced.
- "Genocide in the Kampongs?" — REAL: Emmanuel Kreike (Princeton), J. Genocide Research 14:3-4
  (2012), pp. 297–315. Argues "indirect genocide" via environmental destruction.
- "Mass violence and the end of the Dutch colonial empire in Indonesia" — REAL: Luttikhuis &
  Moses, same journal/issue, pp. 257–276 (issue introduction).
- tandfonline returns 403 to bots (paywall, not fabrication); both articles' existence confirmed
  via Princeton / Semantic Scholar / EUI Cadmus / ResearchGate. Cite authorship added.
- **Tier WAR = correct.** 40-year colonial war of subjugation with mass civilian death as method;
  genocide question raised by scholars but WAR (with atrocity episodes) is the defensible read.

### idn-3 1965–66 killings — VERIFIED

- Cribb "Unresolved Problems in the Indonesian Killings of 1965-1966" — REAL (FES library mirror;
  PDF metadata + extracted body confirm authorship/title). Cribb's documented position (~500,000
  most defensible, range 200,000–1,000,000) corroborated across his corpus and search.
- Wikipedia "Indonesian mass killings of 1965–66" confirmed to carry the 500,000–1,000,000 band,
  1976 army estimate, Anderson, Bevins and 2–3M outliers. Both toll ends sourced.
- "New Directions in the Historiography…" — REAL, journal *Indonesia* no. 116 (Oct 2023),
  Project MUSE special issue. Cite expanded.
- **Tier POL = correct.** Extermination organized around political identity (PKI/the left);
  ethnic-Chinese dimension properly hedged as shading toward EXT.

### idn-4 East Timor — VERIFIED

- "East Timor genocide" Wikipedia confirmed to carry CAVR ~102,800 (±12,000) minimum
  conflict-related deaths, ~18,600 violent, ~84,000 hunger/illness (upper bound ~183,000),
  ~70% attribution to Indonesian forces, plus Amnesty/HRW ~200,000 and Defert ~308,000.
  Both toll ends sourced.
- Britannica "1975 invasion of East Timor" — REAL (403 to bots; content confirmed via search:
  7 Dec 1975 invasion, ~25-yr occupation, "one-third of the population" estimate).
- **Tier EXT = correct.** Deliberate destruction of a large fraction of a specific people in
  their own land over 24 years; distinct from idn-1's general subject-population famine because
  it targets the Timorese AS a people. EXT over STR is defensible.

### Verdict

- Events verified: 3 (idn-2, idn-3, idn-4).
- Events flagged UNVERIFIED: 1 (idn-1 — source real, claim mischaracterized; corrected + quarantined).
- No fabricated sources found. No invented sources added. All eight non-primary URLs resolve to
  real works; the only failure was a citation–claim mismatch on idn-1's toll, now fixed.
- Ledger balance (law 1): both ledgers genuinely populated (2 victim, 2 perpetrator); no invented
  balance demanded.
