# Turkmenistan (TKM) — research log

Built from scratch on 2026-06-19 using WebSearch/WebFetch. Dual ledger, 2 events per side, roughly symmetric in weight.

## Victim ledger ("Done to them")

1. **Geok Tepe, 1881 (tkm-1)** — Russian Imperial assault under Skobelev. Well documented. Toll is contested:
   Skobelev's own report = ~6,500 inside + ~8,000 in the pursuit (~14,500); other estimates 15,000-20,000.
   ~5,000 women/children spared, ~600 Persian slaves freed. Now state-commemorated at the Halk Hakydasy
   Memorial Complex (opened 2014), and 6 October is a Day of Remembrance — received_lens "memorial".
   Status RESEARCHED. NOTE: the RFE/RL page (26789027.html) returned HTTP 403 on direct fetch; used via
   search summary + corroborating Wikipedia/memorial sources.

2. **Soviet collectivization + Basmachi suppression + Great Terror, 1929-1938 (tkm-2)** — Forced
   sedentarization onto cotton collectives, crushing of Basmachi resistance (into mid-1930s), near-total
   destruction of religious life (441 mosques in 1911 → 5 by 1941), purge of leadership (Nedirbay Aytakov
   shot). **Could NOT verify a Turkmen-SSR-specific death toll** — sources say "large numbers" killed and
   mass flight to Iran/Afghanistan, but no quantified figure. Toll = null/null with caveat. Status
   UNVERIFIED for that reason. Khlevniuk 1998 (Cahiers du Monde russe) cited from search index only — the
   article itself was not read, so it supports framing, not a toll.

## Perpetrator ledger ("In their name")

3. **Turkmen slave raids / alaman, c.1700-1873 (tkm-3)** — Teke and Yomut tribes were Central Asia's
   principal slavers, feeding Khiva/Bukhara markets. ~29,300 Persian slaves found in Khiva at the 1873
   Russian conquest; ~1 million Persians enslaved across the khanates in the first half of the 19th c.;
   ~200 Russians/year by 1830. **Schema strain noted in toll.note**: these are CAPTIVES, not deaths —
   the harm is mass enslavement, killing incidental. Tier STR (structural predatory system). Status
   RESEARCHED. Caveat: some underlying accounts are hostile European/colonial travelogues; read tone
   critically.

4. **Enforced disappearances under Niyazov/Berdimuhamedow, 2002-present (tkm-4)** — After the Nov 2002
   motorcade attack, show trials and disappearances. Prove They Are Alive! 2021 report = **162 documented
   enforced-disappearance cases since 2002, 29 confirmed dead in custody** (disappearances mainly 2002-2018).
   **Schema strain noted**: 162 is cases, not deaths; 29 is the confirmed death floor. Tier POL. Status
   RESEARCHED. The regime's account of the 2002 attack is itself disputed (exile claims it was staged).

## What is contested / unverified

- Geok Tepe toll: genuine scholarly/source divergence (14,500 vs 20,000); shown as disputed range.
- Soviet-era Turkmen death toll: NOT verifiable from available sources → null + UNVERIFIED status on tkm-2.
- Slave-trade and disappearance "tolls" are not death counts; this is flagged explicitly in each toll.note
  rather than forced into a clean deaths figure.

## Real sources consulted

- Wikipedia: Battle of Geok Tepe; Khivan slave trade; Halk Hakydasy Memorial Complex; Nedirbay Aytakov;
  Central Asian revolt of 1916 (background only, not used as a Turkmen-specific event).
- RFE/RL: Geok-Tepe Massacre memory-day piece (403 on fetch; via search summary).
- Facts and Details: Turkmenistan under Russia/USSR; Rival Khanates/Slavery; Turkmen people.
- Prove They Are Alive! 2021 disappeared-list report (primary advocacy documentation).
- Eurasianet / OMCT: 2002 motorcade attack and ensuing repression.
- O. Khlevniuk, Cahiers du Monde russe 39 (1998) — citation from search index, article not directly read.

## Asymmetry note

Both ledgers are real and substantial — no invention needed to balance. Soviet-era toll precision is the
main gap; left as null rather than fabricated.

## Audit

Adversarial source-integrity + tier audit performed 2026-06-19. Premise: every citation FAKE until
proven otherwise. Every source attempted to be falsified via WebSearch/WebFetch. Result: NO fabricated
sources found. All works/authors/URLs exist and support the specific claims attached to them.

### Source integrity (per event)

- **tkm-1 (Geok Tepe)** — All 3 sources verified. Wikipedia "Battle of Geok Tepe" casualty figures
  confirmed VERBATIM: 6,500 inside + 8,000 in pursuit (= ~14,500), 15,000–20,000 high estimates,
  Skobelev's own "nearly 20,000" boast, 5,000 women/children spared, 600 Persian slaves freed.
  Halk Hakydasy Memorial Complex confirmed (opened 6 Oct 2014, commemorates Geok Tepe dead). RFE/RL
  page exists (403 on fetch, already disclosed; surfaces in search). Both ends of the toll range are
  independently sourced. → **VERIFIED**.

- **tkm-2 (Soviet collectivization / Terror)** — All 3 sources verified.
  - Facts and Details confirms VERBATIM: "death of large numbers of Turkmen", flight to Iran/Afghanistan,
    "441 mosques counted in 1911 only five remained by 1941", Basmachi into the mid-1930s.
  - Nedirbay Aytakov confirmed: chairman Turkmen CEC 1925–1937, executed by firing squad 28 Oct 1938,
    rehabilitated 1956.
  - **CITATION CORRECTION**: the Khlevniuk article is REAL (openly hosted on Persée — URL now added),
    but the original cite had two errors now fixed: page range was "197-209", corrected to **197-207**
    per the journal record; and it omitted the translator **Olga Bobrinskoy** (author Oleg Hlevnjuk).
    Supports framing of the Terror in Turkmenistan, not a toll.
  - Status remains **UNVERIFIED** — NOT for any bad source, but solely because NO numeric death toll is
    sourced on either end (low=null, high=null). Honest gap quarantined in toll.note; not fabricated.

- **tkm-3 (Alaman slave raids)** — Both sources verified. Wikipedia "Khivan slave trade" confirms
  VERBATIM: 29,300 Persian slaves at the 1873 conquest "captured by Turkmen raiders"; ~1 million
  Persians enslaved in the first half of the 19th c.; 200 Russians/yr by 1830; Teke/Yomut alaman raids.
  Facts and Details corroborates (Vambéry travelogue cited — caveat about hostile European observers is
  apt). high=1,000,000 sourced (captives, schema-strain disclosed); low=null is honest. → **VERIFIED**.

- **tkm-4 (Enforced disappearances)** — Both sources verified. Prove They Are Alive! 2021 report
  confirmed at the cited URL: 162 documented cases since 2002, 29 died in custody — EXACT match. The
  2002 motorcade attack corroborated across RFE/RL, CACI, Eurasianet. Eurasianet source URL returned
  HTTP 403 on direct fetch but appears verbatim in search indexing — exists, blocking bots like RFE/RL;
  caveat updated to note this. Single-source toll (both ends from the same primary report) flagged in
  toll.note, but the source is rigorous primary advocacy documentation that calls itself a floor.
  → **VERIFIED**.

### Tier audit (independently re-derived BEFORE reading assigned tier)

- tkm-1 → **WAR** (colonial military conquest with mass slaughter of fleeing civilians; not EXT — no
  intent to destroy the Turkmen as a people). Assigned tier correct.
- tkm-2 → **POL** (political-economic terror campaign: collectivization, dekulakization, purge; not EXT,
  not STR). Assigned tier correct.
- tkm-3 → **STR** (multi-generational structural predatory raiding system, not a single massacre).
  Assigned tier correct.
- tkm-4 → **POL** (targeted state political crime; not EXT, not STR). Assigned tier correct.
- STR-vs-EXT disease rule: N/A — no disease-driven event in this record. No tier corrections needed.

### Toll audit

- tkm-1: dual-sourced range (low and high both sourced). OK.
- tkm-2: null/null — genuinely unquantified, the reason for UNVERIFIED. OK (no invented precision).
- tkm-3: high sourced (captives), low null (raid deaths unquantified) — schema strain disclosed. OK.
- tkm-4: both ends from ONE primary report (single-source toll) — FLAGGED, but a high-integrity floor.

### Ledger balance (law 1)

Both ledgers populated and supported by the record (2 victim, 2 perpetrator events). No invented balance.

### Verdict

3 of 4 events VERIFIED (tkm-1, tkm-3, tkm-4); tkm-2 UNVERIFIED (null toll only). Country status
UNVERIFIED (one event not fully verified). Corrections written back to TKM.json: Khlevniuk page range
209→207 + translator added + Persée URL added; audit notes added to all four toll.note fields and the
Eurasianet caveat (403 disclosure).
