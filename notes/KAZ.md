# Kazakhstan (KAZ) — research log

Built from scratch on 2026-06-18 with live web research (WebSearch + WebFetch).

## Ledger shape and the asymmetry

- **Victim ledger (2 events):** the 1930–33 famine (Asharshylyq) and the 1986 Jeltoqsan crackdown. Both were inflicted by the **Soviet state**, not by Kazakhs — so they sit on the victim side with Moscow named as agent.
- **Perpetrator ledger (1 event):** Bloody January / Qandy Qantar 2022. Kazakhstan has only been an independent state since 1991, so its own perpetrator record is thin. The clearest documented case of the Kazakh state killing in numbers is 2022, when President Tokayev ordered "shoot to kill" and 200+ (mostly civilians) died. No perpetrator events were invented to balance the much heavier victim side; the asymmetry is stated plainly in the country `note`.

## kaz-1 — Kazakh famine 1930–1933 (victim, POL) — RESEARCHED

- Toll range used: **1.3M (low) – 2.3M (high)**, most-cited ~1.5M, ~38–42% of all ethnic Kazakhs.
- Agent: Soviet state under Stalin; collectivization driven locally by First Secretary **Filipp Goloshchyokin**.
- **Contested:** (a) the death count itself, and (b) whether it was genocide. Sarah Cameron (*The Hungry Steppe*, Cornell UP 2018): not UN-definition genocide but fits Lemkin's original concept / a crime against humanity. Isabelle Ohayon: no evidence/motive for deliberate starvation. A Kazakh parliamentary commission (chaired by Manash Kozybayev) concluded it WAS genocide. Pianciola, Payne, Kindler also validate ~1.5M.
- **Count vs. decline caveat:** total population decline mixes excess deaths with large-scale flight/emigration (to China, Mongolia, etc.), so death counts ≠ demographic loss. Kept explicit in the toll note. Tiered **POL** (not EXT) per the absence of an attested extermination order, with the genocide debate flagged.

## kaz-2 — Jeltoqsan 1986 (victim, POL) — UNVERIFIED

- Toll: **official 2 dead; disputed up to ~168–170; 2,000+ wounded.** Marked the event `UNVERIFIED` because the real toll was suppressed and never independently established.
- The high figure (168) rests on a single uncorroborated claim by writer Mukhtar Shakhanov citing an unnamed KGB officer — explicitly NOT verified. The official low (2) is widely regarded as an undercount. I refused to pick a middle "real" number; the range brackets official vs. highest claim with the caveat that neither is settled.
- Agent: Soviet MVD internal troops + OMON. Trigger: Moscow replacing ethnic-Kazakh party chief Kunaev with ethnic Russian Kolbin.

## kaz-3 — Bloody January 2022 (perpetrator, POL) — RESEARCHED

- Toll: **227 (official) – 238 (other counts)**; Prosecutor General said 232 died, of whom **213 civilians**, 19 security forces.
- Agent: the Kazakh state — **President Tokayev** confirmed a "shoot to kill without warning" order (televised 7 Jan); National Guard, army, police ran the "counterterrorism operation." (Note: the Prosecutor General also said forces did not need a special command and fire was opened on 5 Jan, before Tokayev's statement.)
- HRW documented a one-sided investigation: 1,000+ protesters convicted, only one military officer charged over a death; torture of detained/hospitalized protesters; Kazakhstan rejected an independent international inquiry.
- CSTO (~3,800, mostly Russian) deployed to guard infrastructure and claimed it fired no shots — so the killing is attributed to Kazakh forces, which is why this is a clean Kazakh-state perpetrator event.

## What could NOT be verified

- Exact Jeltoqsan death toll — genuinely unknowable from available sources; left as a disputed range, event marked UNVERIFIED.
- Pianciola exact-figure citation has `url: null` — the ~1.5M validated figure and his herdsmen-policy analysis came via secondary summaries of the scholarship, not a single canonical open source I fetched directly. Flagged in the source caveat. Not fabricated.

## Real sources consulted

- Wikipedia, *Kazakh famine of 1930–1933* — https://en.wikipedia.org/wiki/Kazakh_famine_of_1930%E2%80%931933
- Sarah Cameron, *The Hungry Steppe* (Cornell UP, 2018) — https://www.cornellpress.cornell.edu/book/9781501730436/the-hungry-steppe/
- Wikipedia, *Jeltoqsan* — https://en.wikipedia.org/wiki/Jeltoqsan
- Eurasianet, Zheltoksan retrospective — https://eurasianet.org/kazakhstan-a-look-back-at-the-zheltoksan-protest-a-quarter-century-ago
- Wikipedia, *2022 Kazakh unrest* — https://en.wikipedia.org/wiki/2022_Kazakh_unrest
- Human Rights Watch, *No Justice for January Protest Abuses* (2022) — https://www.hrw.org/news/2022/12/20/kazakhstan-no-justice-january-protest-abuses
- (Search-surface corroboration: Harvard Ukrainian Studies Journal famine article, Yale Review of International Studies, RFE/RL Jeltoqsan coverage, additional HRW January-2022 statements.)

## Audit

**Adversarial source-integrity + tier audit — 2026-06-18 (Kai Denrei / kainode).** Method: assume every citation fake until proven; tried to falsify each source by independent fetch/search; re-derived each tier from facts before reading the assigned one. Final: country **UNVERIFIED** (kaz-1 VERIFIED, kaz-2 UNVERIFIED, kaz-3 VERIFIED).

### kaz-1 — Famine 1930–1933 → VERIFIED (was RESEARCHED)
- **Cameron, *The Hungry Steppe* (Cornell UP, 2018):** book confirmed real (Cornell page is JS-rendered and returned only chrome on fetch, but title/author/publisher/2018, "more than 1.5 million dead / a quarter of Kazakhstan's population," the genocide-fits-Lemkin's-expanded-definition position, and four book awards all confirmed via independent search incl. T&F *Central Asian Survey* review and the Cornell catalog listing). Supports the summary as claimed.
- **Wikipedia famine article:** direct fetch confirms 1.3–2.3M range, 38–42% of ethnic Kazakhs, Goloshchyokin as First Secretary, and the four-scholar genocide debate (Ohayon = not genocide under int'l law; Pianciola = deliberate destruction of nomad "class"; Cameron = fits expanded definition; Kindler = disagrees). Supports toll.high. Verified.
- **Pianciola (was `url: null`):** scholar is REAL; his canonical, frequently-cited work is "Famine in the Steppe: The Collectivization of Agriculture and the Kazak Herdsmen, 1928–1934" (*Cahiers du Monde russe*, 2004). Supplied the real citation + a Cairn URL for that article. The *exact deaths number* attached to him still reaches the record via secondary summaries (not a full-text fetch), so the caveat flags the figure as secondhand while author/work/thesis are verified. **No source invented** — replaced a null with a genuine, verifiable canonical citation. toll.low is also independently backed by Cameron.
- **Tier:** re-derived independently as **POL** — disease/starvation-driven mass death by state policy (collectivization + requisitioning), NOT EXT (STR-vs-EXT discipline: famine/disease-driven death is not EXT absent an attested extermination order; scholarly consensus finds none). Assigned POL correct; reasoning already flags the genocide debate. Both ledgers: correctly a victim event (agent = Soviet state/Moscow); perpetrator-side asymmetry is honest, not a gap.

### kaz-2 — Jeltoqsan 1986 → remains UNVERIFIED (correctly quarantined)
- **Wikipedia *Jeltoqsan*:** confirmed (16–19 Dec 1986, Alma-Ata, trigger = Kunaev replaced by Kolbin, official 2 deaths, Shakhanov/KGB-officer 168 claim, internal troops + OMON). BUT the current infobox now lists **"200–1,000 civilians killed"** (citing a US Library of Congress account: "at least 200 died… some accounts even estimate casualties at more than 1,000"), which is HIGHER than the JSON's high=170. The high end is itself unstable.
- **Eurasianet retrospective:** exists and is real (direct fetch 403'd on bot-block, but confirmed via search snippet — 2011 quarter-century piece, Dec 17 1986, Kolbin trigger, suppressed/contested toll). Supports summary.
- The 168 high figure rests on a single uncorroborated Shakhanov→KGB-officer attribution; the 200–1,000 figures are equally unverified; official 2 is a known undercount. Toll genuinely unestablished → **single-source / unverifiable high → status stays UNVERIFIED**, with an expanded quarantine note added to `toll.note`. Refused to manufacture a "real" middle number. Tier POL correct (lethal repression of a political protest, not EXT).

### kaz-3 — Bloody January 2022 → VERIFIED (was RESEARCHED) — with a citation defect FIXED
- **DEFECT FOUND:** the source cite attributed "General Prosecutor's Office: 232 died, 213 civilians" to **HRW "No Justice for January Protest *Abuses*" (20 Dec 2022)**. Direct fetch of that page shows it actually states **"238 people were killed"** per official figures and gives the 1,113-convicted / one-officer-convicted figures — it does NOT carry the 232/213 breakdown. The 232/213/19 breakdown is in the **HRW "No Justice for January Protest *Victims*" (5 May 2022)** report (direct fetch confirms "232 people died… 213 civilians"), tracing to the Prosecutor General's Office (also reported by Astana Times, Mar/Apr 2022). **Corrected the URL to the May 2022 page** and rewrote the cite so the 232/213 claim sits on the page that supports it, while noting the Dec page supplies the 238 high and the conviction figures. Both HRW pages are real; this was a mis-attachment, not a fabrication.
- **Wikipedia *2022 Kazakh unrest*:** direct fetch confirms 227 primary official figure (a "238" figure also appears), Tokayev's 7 Jan shoot-to-kill-without-warning order, National Guard/army/police, CSTO deployment, 9,900+ arrested. Supports toll.high.
- **Toll:** low (227) and high (238) now each independently sourced; the 213-civilian majority is sourced to the Prosecutor General via HRW May. Tier **POL** correct (lethal state repression of own population). Clean perpetrator/Kazakh-state event (CSTO claimed it fired no shots).

### Verdict
2 events VERIFIED, 1 UNVERIFIED, 1 source-integrity defect found and corrected (kaz-3 HRW URL mis-attribution), 1 null URL replaced with a verified real citation (kaz-1 Pianciola). No sources invented. Country status: **UNVERIFIED** (kaz-2 toll unverifiable).
