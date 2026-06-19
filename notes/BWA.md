# Botswana (BWA) — research log

Built from scratch 2026-06-19. Web tools (WebSearch/WebFetch) loaded and used throughout.

## Ledger shape and the central judgement call

The ledgers are intentionally asymmetric: **1 victim event, 2 perpetrator events.** This was a deliberate, evidence-driven decision, not a gap.

The temptation with Botswana is to put a "San genocide" in the victim ledger. That would be **wrong for Botswana specifically**. The Cambridge World History of Genocide (Ch. 3, "Settler Genocides of San Peoples of Southern Africa, c.1700–c.1940") places the exterminatory campaigns against the San in the **Cape Colony, Transorangia, and Natal — i.e. modern South Africa**, and explicitly notes that late-nineteenth-century white pastoralists in **western Bechuanaland instead established relatively peaceful relations** with the San. Within Botswana's territory the San experience was **serfdom and (later) forced eviction**, not mass killing. So the San appear in Botswana's ledger as **victims of Tswana/state oppression (perpetrator side)**, and the killing-genocide belongs to South Africa's file, not here. Importing it would have been a fabrication-by-misattribution.

## What I found (and how solid it is)

### Victim — Difaqane (c.1820–1840) [bwa-1, UNVERIFIED]
- Ndebele under Mzilikazi and the migrating Bakololo under Sebetwane raided the Tswana merafe (Bakwena, Bangwaketse, Bangwato, Bahurutshe), seized people/cattle, scattered communities, broke up the **Kalanga kingdom**.
- **Well attested qualitatively; no Botswana-specific death count exists.** The region-wide Mfecane figure (1–2 million) is contested (Cobbing revisionism; Eldredge qualification) AND spans all of southern/central Africa — cannot be apportioned to Botswana. **Toll left null; event UNVERIFIED for the death metric.**
- GlobalSecurity gives an 80,000–100,000 figure but that is **migrating population on the move, not deaths** — used only to indicate scale, flagged in the source caveat.

### Perpetrator — Bolata serfdom (19th c.–c.1940s) [bwa-2, RESEARCHED]
- Tswana chiefdoms, esp. **Bamangwato under Khama III and Tshekedi Khama**, held San (Basarwa/Masarwa) and many Bakgalagadi as **hereditary serfs**.
- British officials called it "slavery" as early as **1887**; the **Tagart report (1931)** examined corporal punishment of the Masarwa in the Bamangwato Reserve.
- **No death toll (it was bondage, not killing); number held not precisely quantified → null.** Solidly sourced to Bennett (scholarly).

### Perpetrator — CKGR eviction (1997–2005) [bwa-3, RESEARCHED]
- Botswana government (Masire, then Mogae) forcibly removed almost all San and Bakgalagadi from the Central Kalahari Game Reserve in three clearances (1997, 2002, 2005).
- **~1,739 San relocated** to New !Xade and Kaudwane (US CRS report figure); Bakgalagadi also removed, no separate figure. Services cut **31 Jan 2002**; boreholes sealed (per critics).
- **Sesana and Others v Attorney-General [2006] BWHC 1 (13 Dec 2006)**: High Court found the removals forced/without consent and the bar on return unlawful and unconstitutional.
- **No deaths recorded — displacement, not slaughter → toll null by nature of the event.** Diamond-mining motive is alleged by advocacy groups but **denied by government and contested** — NOT asserted as fact in the entry.

## Contested / could not verify
- Botswana-specific Difaqane death toll: **does not exist**; left null (this is the honest answer, not a failure to find it).
- Mfecane 1–2 million: real figure, but region-wide and academically disputed — explicitly NOT used as a Botswana toll.
- Number of people held under bolata: not quantified in sources consulted → null.
- CKGR diamond motive: unresolved/contested; flagged, not asserted.

## Real sources consulted
- GlobalSecurity.org, "The Difaqane wars – Botswana" — https://www.globalsecurity.org/military/world/botswana/history-5.htm (fetched OK)
- Wikipedia, "Mfecane" — https://en.wikipedia.org/wiki/Mfecane (fetched OK; toll range + Cobbing/Eldredge)
- South African History Online, "Political changes from 1750 to 1835" — https://sahistory.org.za/article/political-changes-1750-1835 (fetched OK)
- Bruce S. Bennett, "Some historical background on minorities in Botswana" (HTML) — https://www.brucebennett.net/ac/archive/BENNETT-Minorities-revised-HTML.htm (fetched OK; PDF version was binary/uncorrupted-but-unparseable, HTML used instead)
- Cambridge World History of Genocide, Ch. 3, "Settler Genocides of San Peoples..." — https://www.cambridge.org/core/books/abs/cambridge-world-history-of-genocide/settler-genocides-of-san-peoples-of-southern-africa-c1700c1940/BE4F9A6675BAD77F49378886611D4E08 (fetched OK; established the peaceful-relations-in-Bechuanaland point)
- U.S. Congressional Research Service, "Botswana: The San (Bushmen) Rights Case" (RS21956, 2004) — https://www.everycrsreport.com/reports/RS21956.html (fetched OK; ~1,739 relocated, 2002 service cut-off)
- Sesana v Attorney-General case summary, AustLII — https://www.austlii.edu.au/cgi-bin/viewdoc/au/journals/AUIndigLawRw/2007/16.html (search-confirmed; 2006 unconstitutional ruling)
- Mongabay (2015) + allAfrica (2013) on CKGR evictions — https://news.mongabay.com/2015/08/harsh-treatment-for-indigenous-botswanans-ousted-from-kalahari-wildlife-reserve/ (press, advocacy-leaning, caveated)

## Notes for a future auditor
- allAfrica's "Difaqane Or Time of Tumult (1820-40)" article (allafrica.com/stories/200609020071.html) returned HTTP 403 — could not fetch; its content was partially captured via search snippets only. Not relied on for any hard figure.
- Event statuses follow the task spec (RESEARCHED/UNVERIFIED), not the older VERIFIED label seen in some neighbour files (e.g. AGO.json).

## Audit

Adversarial source-integrity + tier audit, 2026-06-19. Premise: every citation FAKE until proven otherwise. Each source was independently falsification-tested via WebSearch/WebFetch; tiers re-derived from facts before reading the assigned tier.

### Source-integrity results (per source)
- **bwa-1 / GlobalSecurity, "The Difaqane wars – Botswana"** — VERIFIED. Page real; text confirmed verbatim: "ravaged a great part of Bechuanaland" and conquered peoples moving "in vast numbers (80,000 - 100,000) destroying everything in their path." Figure is correctly characterised as a migrating population, not a death count.
- **bwa-1 / Wikipedia "Mfecane"** — VERIFIED. Confirms "1 million to 2 million; however, these numbers are controversial"; Cobbing's "Black-on-Black destruction" revisionism; Eldredge agreeing the Zulu-centric explanation "is not reliable"; Mzilikazi raiding the Bangwaketse. Supports="tier" holds.
- **bwa-1 / SAHO "Political changes 1750–1835"** — VERIFIED. Confirms "In 1825 he attacked and defeated the Ngwaketse," campaigns vs Rolong/Kwena/Ngwaketse, and captives incorporated as dependent groups.
- **bwa-2 / Bruce S. Bennett, "Some historical background on minorities in Botswana"** — VERIFIED (strongest source in file). Real author, real document; page directly supports every attached claim — Basarwa/Bakgalagari as serfs, Khama III + Tshekedi, the 1887 inquiry using "slavery," and the 1931 Tagart report. Caveat updated to record verification.
- **bwa-2 / Wikipedia (second source)** — FLAGGED + CORRECTED. As originally cited the URL was `Ngwato_tribe`, but that page does NOT contain the Sarwa/Kgalagadi/Yei serf material or "farm Bushmen" — a misattribution (source-integrity defect). The "farm Bushmen"/Ghanzi material was independently located and verified on the Wikipedia **"San people"** page; the URL and cite were corrected accordingly. The formal bolata claim independently rests on Bennett (verified), so no claim was left unsupported and nothing was invented. Serf status further corroborated externally (malata = Sarwa/Kgalagadi serfs).
- **bwa-3 / U.S. CRS RS21956 (2004)** — VERIFIED. Real report (19 Oct 2004, supervised by Nicolas Cook). Confirms verbatim "Approximately 1,739 San were relocated to New !Xade and Kaudwane" and services to RADs ceasing "January 31, 2002." Supports="toll.low" holds (harm metric = people relocated, not deaths).
- **bwa-3 / Sesana and Others v Attorney-General [2006] BWHC 1 (13 Dec 2006)** — VERIFIED via multiple independent channels (SAFLII, Oxford OPIL, GlobalHealthRights, AustLII). Case real; court ruled the removals/denial of return unlawful and unconstitutional. (The AustLII summary URL in the file returned HTTP 403 to the fetcher — an access artifact, not a dead link; primary judgment confirmed elsewhere.)
- **bwa-3 / Mongabay (2015)** — VERIFIED. Real article (Michael Schwartz, 21 Aug 2015). Confirms 1997 start, Jan 2002 service cut-off, 2005 arrests, New Xade/Kaudwane camps, and the diamond-mining motive "denied" by government and even a San advocacy group. Correctly caveated as contested in the file.
- **Country note / Cambridge World History of Genocide, Ch. "Settler Genocides of San Peoples..." (Adhikari, 2023)** — VERIFIED. Real chapter by Mohamed Adhikari. Abstract confirms the exterminatory campaigns in Cape Colony / Transorangia / Natal AND that "late-nineteenth-century white pastoralists established peaceful relations with San in western Bechuanaland." This is the load-bearing source for the note's central judgment (no San genocide on Botswana soil) and it holds firm.

### Toll discipline
- bwa-1: death toll genuinely UNVERIFIABLE — no Botswana-specific count exists; the region-wide 1–2 m figure is contested and unapportionable. Null is the honest answer; both "figure exists" (Mfecane) and "scale" (GlobalSecurity) ends are sourced. No fabricated number.
- bwa-2 / bwa-3: nulls are "null by nature of the event" (bondage / displacement, not killing), not single-source gaps. Non-death harm metrics (1,739 relocated; thousands in bondage) are properly sourced. No numeric contested toll requires dual-end sourcing here.

### Tier re-derivation (done before reading assigned tier)
- bwa-1 Difaqane → **WAR** (conquest-raiding/displacement between African polities; deaths via raid/famine/flight; no exterminatory intent against a defined group). Assigned WAR. Correct.
- bwa-2 Bolata → **STR** (hereditary institutional bondage grinding a people over generations; not a discrete killing). Assigned STR. Correct.
- bwa-3 CKGR eviction → **STR** (state-directed forced displacement via coercion, no killing). Assigned STR. Correct. STR-vs-EXT discipline properly held throughout — neither perpetrator event inflated to EXT/genocide; no disease-driven event mislabeled.

### Ledger / law-1 check
Both ledgers populated (1 victim, 2 perpetrator). The asymmetry is evidence-driven and explicitly defended (no fabricated "Botswana San genocide" to force balance). Pass.

### Status outcome
- bwa-1: **UNVERIFIED** (sources all verify, but the death-metric toll is inherently unverifiable; quarantine retained in toll.note).
- bwa-2: **VERIFIED** (Bennett fully verifies all claims; misattributed second source corrected to a verified page).
- bwa-3: **VERIFIED** (CRS + Sesana judgment + Mongabay all verified).
- **Country: UNVERIFIED** — one event (bwa-1) remains UNVERIFIED, so the country cannot be VERIFIED.

Events flagged: 1 source misattribution corrected (bwa-2 Wikipedia URL). Events with verified sources: 3/3. No invented sources introduced at any point.
