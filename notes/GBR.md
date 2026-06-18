# United Kingdom (GBR) — research log

Date: 2026-06-18. Web tools (WebSearch / WebFetch) loaded and used; this is real research, not seed text.

## What changed from the seed

The seed had two rows: one perpetrator row (`gbr-1`) that **bundled three distinct atrocities** — Bengal 1943, Amritsar 1919, Boer camps — and one victim row (the Blitz). Both ledgers were already present, so Law 1 (two ledgers) was satisfied from the start; the victim event is the Blitz.

I split the bundled row into separate schema-valid events (one act per row) and added a fifth, the Great Irish Famine, because it is a defining case of British governance culpability and rounds out the perpetrator ledger:

- `gbr-1` Bengal famine 1943 — perpetrator, STR
- `gbr-2` Jallianwala Bagh / Amritsar massacre 1919 — perpetrator, WAR
- `gbr-3` Boer War concentration camps 1900–1902 — perpetrator, STR
- `gbr-4` The Blitz 1940–41 — victim, WAR
- `gbr-5` Great Irish Famine 1845–52 — perpetrator, STR

## Tiering decisions (the load-bearing calls)

- **Famines (Bengal, Ireland) → STR, not EXT.** Mass death came from starvation and epidemic disease, not a campaign to destroy a group as such. Per project law, disease/starvation collapse is STR; the contested question is how much British *policy* (denial measures, refusal to divert shipping; laissez-faire relief and continued food exports) turned a shock into catastrophe. That is policy culpability, kept explicit in the toll `note` and the `tier_reasoning`, but it is not exterminatory intent. Mis-tiering either as EXT would libel; ignoring the policy dimension would whitewash.
- **Amritsar → WAR.** A deliberate, one-sided massacre of unarmed civilians on direct order (Dyer's own stated aim was to "punish" Indians). Intentional killing, not disease — but not a campaign to exterminate a group, so WAR not EXT.
- **Boer camps → STR.** Deaths overwhelmingly from measles/typhoid/dysentery and malnutrition in camps created by scorched-earth internment. Mass civilian death by negligent confinement, not deliberate killing — STR.
- **Blitz → WAR.** Enemy aerial bombardment in wartime.

## What is contested

- **Bengal famine toll: 0.8M–3.8M.** Low-end demographic reconstructions vs. high-end (Famine Inquiry Commission / Sen / Maharatna / Dyson cited); Ó Gráda's ~2.1M is the rough consensus. Deeper dispute is *causal*: Mukerjee (backed by Hastings, Sengoopta) argues Churchill's War Cabinet bears heavy blame for refusing grain diversion; Amartya Sen faults Mukerjee's data as thin (two rice stations, two of 27 districts) and frames it as an entitlement/demand failure plus local mismanagement. I presented both, did not adjudicate.
- **Amritsar toll: 379 (Hunter, British official, treated as a floor) to ~1,000 (INC inquiry); Datta ~700; Wagner 500–600.** Genuine spread between the implicated state's count and the aggrieved party's count.
- **Boer Black African deaths** are badly under-recorded: 14,154 documented minimum (81% children) up to ~20,000 estimated, of ~107,000 interned. Boer deaths better recorded at 27,927. Combined range 42,000–48,000.
- **Irish Famine: ~1M deaths standard, some estimates to ~1.5M** depending on how famine-era epidemic mortality is counted; +~1M emigration; population 8.5M → 4.4M by 1901. British culpability (relief withdrawal, food exports) is the live debate.

## What could NOT be verified / caveats

- Britannica's Bengal-famine page returned HTTP 403 to WebFetch; I relied on the Wikipedia article (which attributes figures to named scholars) and the Mukerjee/Sen secondary literature for that toll. Britannica was reachable for the Irish Famine.
- Black African Boer-camp deaths are inherently uncertain — the British kept few records — so the high end is an estimate, flagged in the toll note.
- Biased-source caveats added where required: Hunter Commission (British state inquiry into a British atrocity — the contested low figure); IWM (UK state-linked museum) for the Blitz high; UK Parliament heritage page (institution implicated in Irish relief failure) used only for policy chronology; Mukerjee flagged as a strong culpability thesis with scholarly pushback.

## Real sources consulted

- Bengal famine of 1943 — Wikipedia: https://en.wikipedia.org/wiki/Bengal_famine_of_1943
- Churchill's Secret War (Mukerjee) — Wikipedia: https://en.wikipedia.org/wiki/Churchill's_Secret_War
- Harper's, "Churchill's Dark Side: Six Questions for Madhusree Mukerjee" (2010): https://harpers.org/2010/11/churchills-dark-side-six-questions-for-madhusree-mukerjee/
- Hillsdale / Churchill Project critique of the genocide framing: https://winstonchurchill.hillsdale.edu/masani-bengal-famine/
- Jallianwala Bagh massacre — Wikipedia: https://en.wikipedia.org/wiki/Jallianwala_Bagh_massacre
- Amritsar 1919 (Kim Wagner) — Wikipedia: https://en.wikipedia.org/wiki/Amritsar_1919
- The Week, "Jallianwala Bagh @100: How many people actually died?": https://www.theweek.in/theweek/cover/2019/04/12/jallianwala-bagh-100-how-many-people-actually-died-a-numbers-tale.html
- Second Boer War concentration camps — Wikipedia: https://en.wikipedia.org/wiki/Second_Boer_War_concentration_camps
- South African History Online — White concentration camps 1900–1902: https://sahistory.org.za/article/women-and-children-white-concentration-camps-during-anglo-boer-war-1900-1902
- van Heyningen, History Compass review of the camps: https://compass.onlinelibrary.wiley.com/doi/10.1111/j.1478-0542.2008.00562.x
- The Blitz — Wikipedia: https://en.wikipedia.org/wiki/The_Blitz
- Imperial War Museums — The Blitz Around Britain: https://www.iwm.org.uk/history/the-blitz-around-britain
- Great Famine (Ireland) — Wikipedia: https://en.wikipedia.org/wiki/Great_Famine_(Ireland)
- Britannica — Great Famine (Irish history): https://www.britannica.com/event/Great-Famine-Irish-history
- UK Parliament — "The great famine": https://www.parliament.uk/about/living-heritage/evolutionofparliament/legislativescrutiny/parliamentandireland/overview/the-great-famine/

## Audit

Date: 2026-06-18. Adversarial source-integrity + tier audit (GBR). Posture: assume every citation fabricated until independently confirmed. Web tools (WebSearch / WebFetch) used throughout. Result: all 5 events pass integrity → each event `status: VERIFIED`, country `status: VERIFIED`. No fabricated sources found. Two non-fatal citation defects corrected (see flags).

### What was checked, per event

- **gbr-1 Bengal famine 1943 (STR, perpetrator).** Verified via Wikipedia (Bengal famine of 1943): 0.8M–3.8M range and Ó Gráda's "scholarly consensus ~2.1M" both confirmed; rice denial, boat denial (~45,000 boats), War Cabinet shipping refusals, Oct 1942 cyclone + crop disease, Burma loss all confirmed. Mukerjee, *Churchill's Secret War* (2010, Basic Books) confirmed real; Max Hastings ("broad thrust … sound as it is shocking") and Sengoopta ("forensic rigour") backing confirmed; Amartya Sen's "thin data — two rice research stations in two of 27 districts" critique confirmed via NYRB/NYT exchange coverage. Tier independently re-derived = STR (starvation + epidemic collapse, policy-culpability dispute, NOT exterminatory intent) — matches assigned tier. Both toll ends sourced; toll.disputed=true is correct.
- **gbr-2 Amritsar 1919 (WAR, perpetrator).** Verified via Wikipedia (Jallianwala Bagh massacre): Hunter Commission 379, INC ~1,000, Datta ~700 all confirmed; Dyer ordered exits blocked + ~10 min of fire; his stated aim "to punish … not to disperse" confirmed verbatim in source. Kim Wagner, *Amritsar 1919* (Yale UP, 2019) confirmed real; his 500–600 "plausible estimate" confirmed (via Amritsar 1919 page + LSE/AHA reviews). Tier re-derived = WAR (deliberate one-sided massacre, not group extermination) — matches. Both ends sourced.
- **gbr-3 Boer camps 1900–1902 (STR, perpetrator).** Verified via Wikipedia (Second Boer War concentration camps) + SAHO: 27,927 Boer deaths (~24,074 children under 16), Black minimum 14,154 (81% children) up to ~20,000 of ~107,000 interned, Kitchener scorched-earth, measles/typhoid/dysentery, ~1-in-4 Boer mortality all confirmed. Niall Ferguson's "not a deliberately genocidal policy … lack of foresight and rank incompetence" confirmed — supports STR over EXT. Tier re-derived = STR (disease-driven death by negligent confinement) — matches. Both ends sourced (SAHO carries the ~28k Boer count = part of the 42k low; Wikipedia carries the Black figures + 48k high).
- **gbr-4 The Blitz 1940–41 (WAR, victim).** Verified via Wikipedia (The Blitz): dates 7 Sep 1940 – 16 May 1941, 40,000–43,000 civilian dead, London "almost half", Coventry/Liverpool/Hull/Glasgow/Belfast hit, ~2M homes damaged/destroyed, Luftwaffe/Nazi Germany all confirmed. IWM "over 43,500 civilians killed" confirmed via search of the live IWM page. Tier re-derived = WAR (enemy aerial bombardment, not group extermination) — matches. Both ends sourced. This is the victim ledger — Law 1 (two ledgers) satisfied.
- **gbr-5 Great Irish Famine 1845–52 (STR, perpetrator).** Verified via Wikipedia (Great Famine, Ireland) + search: ~1M deaths with a real 1.0M–1.5M excess-death range confirmed, ~1M emigration, population 8.5M → 4.4M by 1901, Whig administration under Russell, Trevelyan's laissez-faire relief, continued food exports, potato blight trigger all confirmed. Tier re-derived = STR (blight + starvation + epidemic collapse; relief/export policy is structural culpability, not exterminatory intent) — matches. Both ends sourced (Wikipedia low, Britannica high; Britannica 403'd to WebFetch but the high-end range is independently corroborated and Britannica was reachable in prior research).

### Flags raised (all non-fatal; corrected in place, none required UNVERIFIED)

1. **gbr-3 van Heyningen cite/URL mismatch — CORRECTED.** Cite read "*The Concentration Camps of the Anglo-Boer War: A Social History* (2013)" (her Jacana book, which is real) but the attached URL is DOI 10.1111/j.1478-0542.2008.00562.x, which resolves to a *different* real van Heyningen work: "The Concentration Camps of the South African (Anglo-Boer) War, 1900–1902", *History Compass* 7 (2009), pp. 22–43 (verified via DOI search; article is paywalled — returned 402/payment-required to WebFetch, consistent with a real Wiley article). Same author, same subject, but the cite named the wrong publication for the link. Corrected the cite to match the linked article and added a caveat noting the book exists separately.
2. **gbr-4 IWM URL stale — CORRECTED.** The cited path /history/the-blitz-around-britain returns HTTP 403. The canonical live IWM page is /history/second-world-war/blitz/blitz-around-britain (confirmed via search; carries the "over 43,500 civilians killed" figure). URL corrected; caveat updated.
3. **gbr-1 source-to-field mapping (noted, not changed).** Source 1 (Ó Gráda, ~2.1M consensus) is tagged `supports: toll.low`, but 2.1M is the consensus, not the 0.8M floor. The actual low/high spread is carried by source 2 (Wikipedia, tagged toll.high but covering the full 0.8M–3.8M range), so both numeric ends remain sourced and no figure is unsupported — left as-is to avoid over-editing a defensible mapping; flagged for transparency.
4. **Bias caveats checked.** Hunter Commission (British state inquiry into a British atrocity, contested low), IWM (UK state-linked museum), UK Parliament heritage page (institution implicated in Irish relief), and Mukerjee (strong culpability thesis with scholarly pushback) all carry the required disclosure caveats. No missing bias disclosures found.

### Sources that blocked automated fetch (not integrity failures)
- IWM (iwm.org.uk): 403 to WebFetch — state museum bot-block; figure confirmed via search instead.
- Britannica (britannica.com): 403 to WebFetch — paywall/bot-block; figures independently corroborated.
- Wiley History Compass DOI: 402 Payment Required — genuine paywalled article; identity/author confirmed via DOI search.
