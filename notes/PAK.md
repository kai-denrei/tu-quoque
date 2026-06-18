# PAK — Pakistan research log

Built from scratch (no prior seed). Dual-ledger: 1 victim event, 2 perpetrator events.

## What I found

### Victim — "Done to them"
- **pak-1: Partition violence (1947).** Pakistan's people (Muslims) were victims of the
  communal slaughter accompanying the 1947 division of British India, chiefly in East Punjab
  and during the westward flight into the new state. Crucial honesty point: this was a
  **reciprocal** bloodletting — Muslim mobs killed Hindus and Sikhs in the other direction, so
  the same event sits implicitly on the perpetrator side too (noted in `relevance` and the
  country `note`). I did NOT isolate a Muslim-only death figure because the record does not
  reliably support one; the toll given is the all-communities total.

### Perpetrator — "In their name"
- **pak-2: 1971 Bangladesh genocide / Operation Searchlight.** The flagship perpetrator event
  and one of the largest post-1945 atrocities. Pakistan Army (Tikka Khan, later Niazi) plus
  Razakar / Al-Badr / Al-Shams militias. Tier EXT (deliberate targeting of Bengali
  nationalists, Hindus, intellectuals; systematic mass rape; the December 1971 killing of
  intellectuals).
- **pak-3: Balochistan operations (1973–77 and 2004–present).** State counter-insurgency —
  army, Frontier Corps, ISI — with a documented enforced-disappearance and "kill-and-dump"
  pattern. Tier POL (repression of opponents, not group extermination). Marked event status
  UNVERIFIED because no reliable cumulative death count exists.

## What is contested
- **1971 death toll** is the most politically loaded number here. Bangladesh official: 3 million.
  Pakistan's Hamoodur Rahman Commission accepted the army's GHQ figure of ~26,000 (widely seen
  as a severe undercount). Independent scholarship sits in between and well below 3M:
  Rummel ~1.5M; Gerlach (2018) 500k–1M (many deaths from war-induced famine); BMJ 2008 study
  ~125k–505k conflict deaths; Sarmila Bose's low ~50k–100k drew heavy methodological criticism.
  Range in file: 300,000–3,000,000, with the spread explained in the toll note. Rape estimates
  ~200,000–400,000.
- **1947 Partition total** clusters at 200,000–1,000,000 for most historians; Bharadwaj/Khwaja/
  Mian (2008) census work finds ~3.4M "missing," which mixes deaths with displacement/excess
  mortality and is flagged as NOT a direct death count.
- **Balochistan** numbers diverge sharply by source: Baloch advocacy groups (VBMP ~5,228
  disappeared 2001–2017) vs Pakistan's official Commission of Inquiry (lower, claims most traced).
  BBC 2016 found ~1,000 bodies recovered 2010–2016.

## What could NOT be verified
- A separate Muslim-only death figure for 1947 — left as the all-communities total, by design.
- A single cumulative all-cause death count for the post-2004 Balochistan insurgency — toll.low
  and toll.high set to null deliberately; event status UNVERIFIED.

## Real sources consulted (URLs in the JSON)
- Wikipedia: Bangladesh genocide; Operation Searchlight; Partition of India; Insurgency in
  Balochistan; Human rights abuses in Balochistan; Hamoodur Rahman Commission.
- Christian Gerlach, "East Pakistan/Bangladesh 1971–1972…", *The Civilianization of War*
  (Cambridge, 2018) — cambridge.org chapter page.
- Bharadwaj, Khwaja & Mian, "The Partition of India: Demographic Consequences" (2008) — SSRN.
- Harvard Gazette (2018), Partition reappraisal.
- Human Rights Watch (2011), Balochistan disappearances.
- Hamoodur Rahman Commission Report (Govt of Pakistan, 1974) — official low-end / minimization.

## Notes for a future pass
- A dedicated Biharis-as-victims (1971–72, persecution of non-Bengalis) event would round out
  the mutual-violence picture but belongs primarily under a Bangladesh entry, not PAK.
- Partition could in principle be split into a paired perpetrator event; kept unified here with
  the reciprocity made explicit, to avoid double-counting the same dead.

## Audit

Adversarial source-integrity + tier audit, 2026-06-18 (assume-fake-until-proven posture). Every
source falsification-tested via live fetch/search. **Result: pak-1 VERIFIED, pak-2 VERIFIED,
pak-3 UNVERIFIED → country UNVERIFIED.** No invented sources found; no fabricated sources added.

### Source integrity — all 10 sources are real and support their attached claims
- **pak-1 / Harvard Gazette (2018)** — REAL. Article exists (Alvin Powell, 6 Apr 2018). Supports
  "killed millions." Note: it actually cites HIGHER figures than the JSON's 1M high cap (Leaning
  2.3–3.2M; Bharadwaj et al. 3.4M). So the source over-supports toll.high rather than fabricating
  it — flagged in audit_note, not a falsification.
- **pak-1 / SSRN abstract_id=1294846** — REAL and correctly titled. Confirmed: "The Partition of
  India: Demographic Consequences," Bharadwaj, Khwaja & Mian (2009). 3.4M "missing" / ~17.9M
  migrants confirmed. (A sibling paper, "The Big March," is abstract_id=1124093 — the cited ID is
  the right one.) Caveat that the census "missing" figure blends death with displacement is
  accurate and disclosed.
- **pak-1 / Wikipedia "Partition of India"** — REAL. 200,000–2M deaths, 12–20M displaced. Supports
  toll.low. Both toll ends sourced. → VERIFIED.
- **pak-2 / Wikipedia "Bangladesh genocide"** — REAL. Confirms 300,000–3,000,000; Rummel ~1.5M;
  Bose 50k–100k; BMJ 2008 125k–505k; rape 200k–400k. Supports toll.high.
- **pak-2 / Gerlach chapter (Cambridge 2018)** — REAL. Exact title/author confirmed; 500k–1M and
  conflict-famine deaths as cited. Caveat for the EXT tier: Gerlach argues there was NO deliberate
  attempt to exterminate the Bengali intelligentsia. The EXT tier does not rest on that single
  claim — the genocidal targeting of Bengalis and the Hindu minority as groups is independently
  supported (Operation Searchlight + Wikipedia genocide article + international recognition).
- **pak-2 / Hamoodur Rahman Commission** — REAL. ~26,000 figure confirmed, correctly framed as the
  contested official-minimization low end (supports toll.low), not as a neutral count.
- **pak-2 / Operation Searchlight** — REAL. 25 Mar 1971, Tikka Khan, Dhaka University / Hindus /
  Awami League targeting confirmed. Both toll ends sourced. → VERIFIED.
- **pak-3 / Wikipedia "Insurgency in Balochistan"** — REAL. 1973–77 figures (~3,300 mil / ~5,300
  insurgents / ~6,000+ civilians; Bhutto, 1973) confirmed.
- **pak-3 / Wikipedia "Human rights abuses in Balochistan"** — REAL. BBC-2016 ~1,000 bodies
  (2010–2016), VBMP ~5,228 (2001–2017), Army/FC/ISI named — all confirmed.
- **pak-3 / HRW 2011** — REAL. Title "We Can Torture, Kill, or Keep You for Years": Enforced
  Disappearances by Pakistan Security Forces in Balochistan (28 Jul 2011); names ISI, Frontier
  Corps, Military Intelligence.

### Toll dual-sourcing
- pak-1 — low and high both sourced. OK.
- pak-2 — low (Hamoodur Rahman) and high (Wikipedia genocide) both sourced. OK.
- pak-3 — **toll.low and toll.high are null and CANNOT be source-confirmed.** Existing figures are
  single-source and sharply contested (advocacy vs government). This is why pak-3 stays UNVERIFIED.
  Quarantine recorded in toll.note. The hold is on toll grounds, not source-integrity grounds.

### Tier re-derivation (done before reading assigned tiers)
- pak-1 → **POL** (reciprocal communal identity-based killing, not one state's extermination
  program; EXT rejected because two-way and not state-directed). Upheld.
- pak-2 → **EXT** (deliberate destruction of targeted national/religious groups; disease-driven
  STR test n/a). Upheld.
- pak-3 → **POL** (extrajudicial killing + enforced disappearance to suppress nationalism = mass
  political repression, not group extermination; STR n/a). Upheld.
- No tier corrections required; STR-vs-EXT discipline holds (no disease-driven event mislabeled).

### Ledger balance (law 1)
Both ledgers populated where the record supports it: 1 victim event (Partition, with reciprocity
made explicit) + 2 perpetrator events (1971, Balochistan). No invented balance demanded; the
country note already explains the genuine asymmetry. OK.
