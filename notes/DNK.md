# Denmark (DNK) — research log

Built from scratch (no seed). Web tools (WebSearch/WebFetch) loaded and used for real research on 2026-06-19.

## Final entries

### Victim — "Done to them"
1. **dnk-1 Black Death in Denmark (1349-1350)** — STR. Pandemic, no human perpetrator. Largest mass death in Danish history.
2. **dnk-2 German occupation in WWII (1940-1945)** — WAR. ~3,000 occupation deaths; dominant memory is the rescue of the Danish Jews.

### Perpetrator — "In their name"
3. **dnk-3 Danish slave trade & Danish West Indies slavery (1672-1848)** — EXT.
4. **dnk-4 Forced contraception / assimilation of the Inuit in Greenland (1950s-1990s)** — POL.

## What is solid
- **Slave trade scale**: National Museum of Denmark gives ~120,000 transported by Danish ships, ~100,000 disembarked, ~8-10% died per voyage, and plantation deaths exceeding births. University of Gothenburg research cites ~130,000 and "largest stakeholder relative to population." Slavery abolished 1848; trade banned 1792 (effective 1803). Multiple independent sources agree on order of magnitude.
- **Greenland forced contraception**: ~4,500 women/girls fitted with IUDs without consent, mainly 1966-1970/75, some as young as 12, birth rate halved. Danish PM Mette Frederiksen formally apologized in 2025; compensation/reconciliation fund and lawsuits underway. Corroborated by Wikipedia, BBC, CFR, PBS, multiple wires.
- **WWII Danish deaths**: National Museum of Denmark — war/occupation cost ~7,000 lives, ~3,000 direct occupation deaths, ~4,000 volunteers killed in German service. USHMM — >7,000 Jews ferried to Sweden, ~120 Danish Jews died.

## What is contested / could NOT be fully verified
- **Black Death toll**: Wikipedia ("Black Death in Denmark") explicitly states the toll "is not possible to estimate" — there are NO contemporary Danish witness statements. The 40-50% mortality figure comes from skeletal/demographic analysis (Sharrah et al. 2021, Journal of Archaeological Science: Reports) and secondary summaries, NOT a counted death toll. Pre-plague population is itself a range (~750,000-1,000,000). I marked this event **UNVERIFIED**, toll disputed=true, with the population-decline-vs-death-count caveat in toll.note. The ScienceDirect abstract returned HTTP 403 (paywalled) — I relied on the search-result summary of its findings plus the Wikipedia overview, and flagged the paywall in the source caveat. The 300,000-500,000 toll range is a derived estimate (40-50% of the population base), not a hard figure.
- **Slave trade total embarked** ranges across sources: ~111,000 (voyage-database tallies) / ~120,000 (Nat. Museum) / ~130,000 (Gothenburg). Presented as a range, disputed=true. Cumulative plantation death toll is genuinely uncountable (deaths > births across ~175 years), so I anchored toll.low on the defensible Middle Passage minimum (~10,000+) and toll.high on the trafficked total, with a note that the high end is NOT a death count.
- The Wikipedia "Danish slave trade" page's "approximately half dying due to inhumane conditions" is an aggregate transit+plantation estimate, flagged as illustrative in the source caveat.

## Asymmetry note
The heaviest event done TO Denmark is a pandemic (no perpetrator); its 20th-c. victimhood was mild by European standards and is remembered for the rescue. The perpetrator side is heavier than the gentle national self-image: intensive slave trading relative to population, and a within-living-memory covert mass-contraception campaign on Inuit women. No event/toll/source was invented to balance the columns.

## Real sources consulted (URLs verified reachable except where noted)
- National Museum of Denmark — slavery: https://en.natmus.dk/historical-knowledge/historical-themes/danish-colonies/the-danish-west-indies/slavery/
- National Museum of Denmark — German occupation: https://en.natmus.dk/historical-knowledge/denmark/german-occupation-1940-1945/
- University of Gothenburg — Denmark as a colonial power: https://www.gu.se/en/news/denmark-as-a-colonial-power
- Wikipedia — Danish slave trade: https://en.wikipedia.org/wiki/Danish_slave_trade
- Wikipedia — Forced contraception of women in Greenland: https://en.wikipedia.org/wiki/Forced_contraception_of_women_in_Greenland
- Wikipedia — Black Death in Denmark: https://en.wikipedia.org/wiki/Black_Death_in_Denmark
- Sharrah et al. 2021, J. Archaeol. Sci.: Reports (paywalled, 403): https://www.sciencedirect.com/science/article/abs/pii/S2352409X21003011
- USHMM Holocaust Encyclopedia — Denmark: https://encyclopedia.ushmm.org/content/en/article/denmark
- BBC News — Denmark apologises to Greenland's forced contraception victims (2025): https://feeds.bbci.co.uk/news/articles/c5yelp5466no
- Council on Foreign Relations — Denmark issues apology to Greenland over forced sterilization

## Failed fetches
- ScienceDirect abstract (403 Forbidden, paywall) — used search summary + Wikipedia instead.
- malaymail.com apology article (403 Forbidden) — corroborated via BBC/CFR/PBS/Wikipedia instead.

## Audit
Adversarial source-integrity + tier audit, 2026-06-19 (assume every citation fake until proven). Each source was attacked individually; tiers were re-derived from facts before reading the assigned tier.

### Finding 1 — MISATTRIBUTED AUTHOR (dnk-1, corrected)
The scholarly source on the Black Death was cited as **"Sharrah et al., 'Urban and rural survivorship in Pre- and Post-Black Death Denmark,' J. Archaeol. Sci.: Reports (2021)."** No author named "Sharrah" exists on this paper. The real paper is genuine but its authors are **Kelmelis S. & DeWitte S.N.**, J. Archaeol. Sci.: Reports, vol. 38, art. 103089 (2021). Verified via the CU Boulder VIVO publication record (https://vivo.colorado.edu/display/pubid_363687) and Sharon DeWitte's publication list. The likely corruption path is "Sharon" (DeWitte's first name) → "Sharrah." Citation corrected in JSON; caveat now flags the correction. The paper is a paleodemographic survivorship study and does NOT itself state the "40-50% of the kingdom's population" toll — that figure is from secondary summaries only.

### Finding 2 — SINGLE-ANCHOR / DERIVED TOLL (dnk-1, quarantined)
The 300,000-500,000 toll is not two independently sourced low/high numbers; it is one derivation (40-50% applied to a 750,000-1,000,000 population base). The primary Danish-history position, confirmed live on the Wikipedia article, is that "The death toll is not possible to estimate" and "There are no contemporary witness statements." Event held **UNVERIFIED**; quarantine note added to toll.note. This is a true data limit, not a fabrication — no invented source was used to manufacture a hard count.

### Sources confirmed genuine and on-point
- **dnk-2 (WWII occupation, WAR):** USHMM "Denmark" verified live — ~7,500 Jewish population, ~7,200 Jews + 700 relatives ferried to Sweden, ~120 died. The ~3,000 direct occupation deaths / ~4,000 volunteers in German service / ~7,000 total figures corroborated across the National Museum of Denmark, Aarhus University history module, and Free Corps Denmark sources. Both toll ends supported. → **VERIFIED**.
- **dnk-3 (slave trade/slavery, EXT):** National Museum of Denmark slavery page verified live (~120,000 transported by Danish ships; "more died than were born"). University of Gothenburg page verified live (~130,000 sent from the Danish Gold Coast fort 1680-1803, ~50,000 to the Danish West Indies; "largest stakeholder relative to population"; researcher Klas Rönnbäck). Wikipedia "Danish slave trade" verified live (>100,000 transported, ~half dying, 26,500 enslaved on St. Croix by 1803). toll.low and toll.high both independently sourced. → **VERIFIED**.
- **dnk-4 (Greenland forced contraception, POL):** Wikipedia "Forced contraception of women in Greenland" verified live (~half of ~9,000 fertile women, 1966-1975, some as young as 12, birth rate halved, cases past 1991). BBC apology article corroborated via France24, Washington Post, PBS, AOL (Mette Frederiksen apology in Nuuk, Sept 2025; ~4,500 affected; lawsuit by 143 women). Correctly a non-death-toll event with null numeric fields. → **VERIFIED**.

### Tier re-derivation (all four independently re-derived BEFORE reading assigned tier — all correct)
- dnk-1 Black Death → **STR**. Disease-driven demographic collapse, no human perpetrator. STR-vs-EXT rule enforced: this is STR, NOT EXT, because it is pestilence with no agent. Correct.
- dnk-2 German occupation → **WAR**. Deaths from invasion/occupation/wartime repression by a foreign belligerent. Correct.
- dnk-3 Danish slave trade → **EXT**. Systematic, generations-long, lethal enslavement of a defined group (deaths > births). Correct.
- dnk-4 Greenland forced contraception → **POL**. Coerced birth control + cultural assimilation of an Indigenous population; reproductive-coercion harm, not mass-killing. Correct.

### Ledger balance (law 1)
Both ledgers are populated from the actual record (2 victim, 2 perpetrator). The asymmetry note correctly states no event/toll/source was invented to balance the columns. The audit confirms this — no fabricated balance found.

### Verdict
- dnk-1 **UNVERIFIED** (author misattribution corrected; derived single-anchor toll quarantined; primary record says toll uncountable).
- dnk-2 **VERIFIED**, dnk-3 **VERIFIED**, dnk-4 **VERIFIED**.
- Country **UNVERIFIED** (one event not fully verifiable).
- Events flagged: 1 (dnk-1). Sources corrected: 1 (Sharrah → Kelmelis & DeWitte). No invented sources introduced.
