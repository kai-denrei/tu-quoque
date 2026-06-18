# Vietnam (VNM) — research log

Built from scratch on 2026-06-18. Web tools (WebSearch/WebFetch) loaded and used throughout. Four events, two per ledger; country status RESEARCHED.

## Structure chosen

**Victim ("Done to them")**
- vnm-1 — 1944-45 famine in northern Vietnam (STR). Japanese occupation + Vichy-French administration.
- vnm-2 — Vietnamese civilian dead of the American war, 1965-75 (WAR), with My Lai as the emblematic atrocity. US + allied forces.

**Perpetrator ("In their name")**
- vnm-3 — North Vietnam land-reform executions, 1953-56 (POL). Vietnamese Workers' Party (Lao Dong).
- vnm-4 — Hue Massacre, 1968 (POL). Viet Cong + PAVN during Tet.

Both ledgers are genuinely populated; no fabrication needed to balance. The only asymmetry, noted in the country `note`, is that Vietnam's perpetrator record is internal political violence rather than external conquest.

## What is contested (all four tolls are disputed)

- **Famine 1944-45**: ~400,000 to 2 million. Low end from French colonial/military reports and Decoux's memoirs (~500k-1M) plus the May 1945 provincial reports (~380k starvation + ~20k disease). High end is Ho Chi Minh's 2 September 1945 independence proclamation / Viet Minh claim of 2 million — a nationalist wartime figure. Starvation-mortality estimate, not a body count.
- **American war civilian deaths**: civilian-only estimates ~360,000 (Rummel) / ~405,000-627,000 (Lewy) up to Vietnam's official ~2 million (1955-75). Total Vietnamese war dead: Hirschman-Preston-Loi 1995 demographic study 791,000-1,141,000 (most likely ~882,000); Vietnam's official total ~3.4 million. My Lai itself: US Army Peers inquiry 175-200; Son My memorial 504 names. Only Calley convicted (served 3.5 yrs house arrest).
- **Land reform 1953-56**: Moise (standard scholarly source) "almost certainly between 3,000 and 15,000" executions; Porter 800-2,500; once-common ~50,000; outer claims to 200,000. Declassified Vietnamese + Hungarian archives point below the inflated Cold-War numbers. May 1953 Politburo directive set ~1-per-1,000 execution quota. 1956 "Rectification of Errors."
- **Hue Massacre 1968**: official/Pike ~2,800-6,000; ~2,800 bodies recovered from mass graves 1968-69; South Vietnam listed 4,062 murdered/abducted. Skeptics: Porter "several hundred," Ngo Vinh Long ~710, Ackland ~300-400. Willbanks: mass executions did occur, exact number unresolved. Officially denied/minimised in Hanoi — hence received_lens "denied."

## Could NOT verify / caveats applied

- Could not access the paywalled Hirschman-Preston-Loi 1995 PDR article directly; cited via the Wikipedia "Vietnam War casualties" summary which names authors/journal/year/figures. Flagged in source caveat.
- Moise's exact refined figure (~13,500) appears in secondary summaries but I anchored to his published "3,000-15,000" range from the book; cited via the author's own Clemson book page.
- Hue and land-reform low-end figures come from Gareth Porter, an anti-war revisionist who minimises both — flagged with caveats as contested low bounds, not settled fact. High-end Hue figures come from South Vietnamese government counts and Douglas Pike (US/RVN-aligned) — also flagged for propaganda incentive.
- Famine high end (Ho Chi Minh's 2M) flagged as nationalist political claim.

## Considered and excluded

- **Vietnamese invasion/occupation of Cambodia (1978-89)**: ended the Khmer Rouge genocide; documented occupation-era abuses exist but are smaller-scale and the dominant historiography frames the intervention as ending an atrocity rather than committing one. Excluded to keep the perpetrator ledger to the two strongest, clearest internal cases; the Cambodia link is already covered from the KHM side (Vietnam's 1979 invasion ending Pol Pot).
- **Post-1975 re-education camps / boat people**: real and significant but death tolls are diffuse and harder to source as a discrete mass-atrocity figure; land reform and Hue are the better-documented perpetrator entries.

## Real sources consulted

- Geoffrey Gunn, "The Great Vietnamese Famine of 1944-45 Revisited," Asia-Pacific Journal: Japan Focus 9(5), 2011 — https://apjjf.org/2011/9/5/geoffrey-gunn/3483/article
- Wikipedia, "Vietnamese famine of 1944-45"
- Wikipedia, "Vietnam War casualties" (cites Hirschman-Preston-Loi 1995; Lewy; Rummel; Vietnam official figures)
- Wikipedia, "My Lai massacre" (Peers Inquiry; Son My memorial; Calley conviction)
- Edwin E. Moise, Land Reform in China and North Vietnam (UNC Press, 1983) — https://edmoise.sites.clemson.edu/landbook.html
- Wikipedia, "Land reform in North Vietnam"
- Wikipedia, "Massacre at Hue" (Pike; Willbanks; official lists)
- Gareth Porter, "The 1968 Hue Massacre" — https://msuweb.montclair.edu/~furrg/porterhue1.html

## Audit

Adversarial source-integrity + tier audit, 2026-06-18 (assume-fake posture; WebSearch/WebFetch loaded and used). Result: country **VERIFIED**, all 4 events **VERIFIED**. No corrections to tiers, tier_reasoning, tolls, or sources were required. No source failed falsification; no quarantine notes added.

### Source integrity (tried to falsify every citation — all survived)
- **vnm-1 famine.** Gunn, "The Great Vietnamese Famine of 1944-45 Revisited," APJ:Japan Focus 9(5) 2011 — REAL, peer-reviewed; author is emeritus prof (Nagasaki Univ.), also wrote *Rice Wars in Colonial Vietnam*; supports summary. Wikipedia "Vietnamese famine of 1944-45" confirms provincial reports (380k starvation + 20k disease), French military ~500k, Decoux ~1M, opening range "400,000 and 2 million" → supports toll.low. Ho Chi Minh 2 Sep 1945 proclamation — verified explicit text: "more than two million of our fellow-citizens died from starvation" → supports toll.high. All three real and on-claim.
- **vnm-2 American war / My Lai.** Hirschman-Preston-Loi, "Vietnamese Casualties During the American War," *Population and Development Review* 21(4) 1995, p.783 — REAL; finds ~1 million ±175,000 (= 791k-1,141k; ~882k midpoint). Anchors toll.low; caveat correctly flags it as the demographic conservative anchor cited via the encyclopaedia summary. Wikipedia "Vietnam War casualties" supports toll.high (official ~2M civ / ~3.4M total). Wikipedia "My Lai massacre" confirms Peers count 175-200, 504 memorial names, Calley 3.5 yrs house arrest. All on-claim.
- **vnm-3 land reform.** Moise, *Land Reform in China and North Vietnam* (UNC Press 1983) — REAL; official Clemson author page live (rev. Apr 2024), confirms "3,000 and 15,000" execution range → supports toll.low. Wikipedia "Land reform in North Vietnam" confirms Moise range (+later ~13,500), Porter 800-2,500, once-common ~50,000, May 1953 one-per-1,000 Politburo quota, 1956 Rectification of Errors → supports toll.high. On-claim.
- **vnm-4 Hue.** Willbanks, *The Tet Offensive: A Concise History* (Columbia UP 2007) — REAL; "mass executions did occur" but exact number unresolved → supports summary, correctly cited as middle position. Wikipedia "Massacre at Hue" confirms ~2,800 bodies recovered, RVN list of 4,062, 2,800-6,000 range, Ngo Vinh Long 710, Ackland 300-400 → supports toll.high. Gareth Porter, "The 1968 Hue Massacre," *Indochina Chronicle* #33 (1974), reproduced at msuweb.montclair.edu — REAL, page live; argues RVN inflated by "a factor of ten or more" (Vennema 68 vs claimed 477 bodies) → supports toll.low. Caveat correctly discloses Porter's anti-war revisionist bias and Pike/RVN propaganda incentive on the high end.

### Toll (both ends sourced)
Every disputed toll carries a distinct low source AND a distinct high source. No single-source or single-number tolls. PASS for all four.

### Tier (re-derived independently from facts before reading assigned tier)
- vnm-1 → **STR** (starvation from requisition/price policy/flood = structural/disease-driven collapse, not a campaign to destroy a group → correctly NOT EXT). Matches assigned. STR-vs-EXT enforced.
- vnm-2 → **WAR** (civilian death as a consequence of war conduct + discrete atrocity at My Lai, not an extermination programme → not EXT). Matches assigned.
- vnm-3 → **POL** (state class-based denunciation tribunals + executions by ruling party = political/class killing → not EXT, not STR). Matches assigned.
- vnm-4 → **POL** (deliberate summary executions of officials/collaborators on prepared lists during occupation = political purge, not collateral war damage). Matches assigned.
All four tiers correct as assigned; no re-tiering needed.

### Ledgers (law 1)
Both ledgers populated from the record: victim (vnm-1, vnm-2) and perpetrator (vnm-3, vnm-4). No invented balance demanded; asymmetry (internal political violence vs external conquest) is honestly disclosed in the country note.

### Verdict
4/4 events VERIFIED, 0 flagged/quarantined. Country status set VERIFIED. JSON re-serialised and validated.
