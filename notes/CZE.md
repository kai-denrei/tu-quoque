# Czechia (CZE) — research notes

Built from scratch, 2026-06-18. Status: RESEARCHED.

## Structure
- Victim ledger (2): Holocaust of Protectorate Jews; Romani genocide (Porajmos) in Bohemia and Moravia.
- Perpetrator ledger (1): expulsion of the Germans from Czechoslovakia, 1945–46.

The dual lens is unusually tight here — all three events fall within a single decade (1939–1946), and the same population is victim then agent. The Romani genocide is itself a hybrid: a Nazi-ordered genocide on Czech soil with Czech gendarmes running the camps, so a perpetrator thread sits inside a victim entry.

## What is solid
- **Jewish Holocaust toll.** USHMM Holocaust Encyclopedia: ~82,309 Jews deported from the Protectorate, ~71,000 killed in deportation, ~7,000 more killed within Bohemia/Moravia (total ~78,000), ~14,000 survivors. Theresienstadt/Terezín as transit ghetto, ~73,603 funneled through. Deportations run by German authorities "assisted by local Czech gendarmerie." Well documented; not disputed in broad strokes.
- **Romani camps and administration.** Lety (Bohemia) and Hodonín (Moravia), ordered July 1942, run and guarded entirely by Czech gendarmes; none punished after 1945 (holocaust.cz / Terezín Initiative Institute; Wikipedia 'Lety concentration camp'). ~326 died at Lety incl. ~30 children born there; ≥511 deported from Lety to Auschwitz; 4,493 Protectorate Roma named in the Auschwitz Gypsy Camp files.
- **Expulsion of Germans.** 1995 joint German-Czech historians' commission: "at least 15,000" up to ~30,000 dead. German records ~18,889 deaths (3,411 suicides); Czech records ~22,247 (6,667 unexplained/suicides). ~3 million expelled. Official expulsions 25 Jan–Oct 1946 after the "wild" expulsions of summer 1945. Massacres: Postoloprty (~763), Přerov (265), Brno death march (~800 of ~20,000), Ústí (≥43). Perpetrators: armed volunteers, soldiers, police, officials, Revolutionary Guards.

## What is contested
- **Romani total death toll.** No clean count survives because the community was nearly annihilated and few records/survivors remained. Anchored as ~5,000–6,000 from the ~90% destruction figure against the ~6,500 recorded in 1942, with ~600 native Czech Roma surviving (Romea.cz; consistent with Council of Europe framing). Marked disputed:true, status RESEARCHED but the range is a reconstruction.
- **Expulsion death toll.** Politically charged: German expellee organizations cite higher figures (the old 1958 West German estimate of ~270,000 is now considered substantially overstated); some historians give 24,000–40,000. The 15,000–30,000 binational commission band is used as the consensus. disputed:true.

## What could NOT be verified / not used
- Council of Europe Roma Genocide factsheet (coe.int/en/web/roma-genocide/czech-republic) returned HTTP 403 on fetch; its survivor/death proportions were cross-confirmed via Romea.cz and holocaust.cz instead, so the COE page is not cited.
- Lidice and Ležáky (1942 Nazi reprisal massacres after Heydrich's assassination, ~340 dead combined) are real and emblematic but smaller in scale; folded into the broader occupation context rather than given a separate event, to keep to 1–3 events per ledger and lead with the largest, best-documented atrocities. Could be added later as a fourth victim event if the atlas wants the symbolic case.
- No separate communist-era (1948–89) perpetrator event included: the StB/political repression and forced-labor deaths (uranium mines, executed political prisoners in the hundreds) are documented but an order of magnitude smaller than the expulsion and harder to pin to a sourced mass-death range in this pass; flagged as a candidate for expansion, not invented.

## Sources actually consulted
- USHMM Holocaust Encyclopedia, "The Holocaust in Bohemia and Moravia" — https://encyclopedia.ushmm.org/content/en/article/the-holocaust-in-bohemia-and-moravia
- holocaust.cz (Terezín Initiative Institute), "The Persecution of Roma and Sinti in the Protectorate of Bohemia and Moravia" — https://www.holocaust.cz/en/history/the-genocide-of-the-roma-and-sinti-during-the-second-world-war/the-persecution-of-roma-and-sinti-in-the-protectorate-of-bohemia-and-moravia/
- Wikipedia, "Lety concentration camp" — https://en.wikipedia.org/wiki/Lety_concentration_camp
- Romea.cz, "The forgotten Holocaust: Romani victims of the Holocaust..." — https://romea.cz/en/czech-republic/the-forgotten-holocaust-romani-victims-of-the-holocaust-and-their-place-in-the-czech-past-and-present
- Wikipedia, "Expulsion of Germans from Czechoslovakia" — https://en.wikipedia.org/wiki/Expulsion_of_Germans_from_Czechoslovakia
- (Attempted, blocked 403) Council of Europe Roma Genocide factsheet, Czech Republic — https://www.coe.int/en/web/roma-genocide/czech-republic

## Audit

Adversarial source-integrity + tier audit, 2026-06-18 (assume-fake posture; every citation tested against the live page).

**Country verdict: UNVERIFIED** (2 of 3 events VERIFIED; cze-2 held UNVERIFIED on a citation-attribution defect, not a toll or tier error).

### cze-1 — Holocaust of Protectorate Jews — VERIFIED, tier EXT confirmed
- Both citations resolve to the real USHMM "Holocaust in Bohemia and Moravia" page. Every figure confirmed verbatim on fetch: 82,309 deported, ~71,000 killed in deportation, ~7,000 killed within Bohemia/Moravia, ~14,000 survivors, 73,603 to Theresienstadt, deportations "assisted by local Czech gendarmerie."
- Toll: low and high both USHMM-sourced; narrow, uncontested range. OK.
- Tier: deliberate destruction of a people as such = EXT. Independently re-derived; correct.

### cze-2 — Romani genocide (Porajmos) — UNVERIFIED (citation defect), tier EXT confirmed
- **Defect found:** the summary source cited the holocaust.cz overview page "Persecution of Roma and Sinti in the Protectorate of Bohemia and Moravia" and attributed three specifics to it — "run solely by Czech personnel," "none punished after 1945," and "4,493 Protectorate Roma named in the Auschwitz Gypsy Camp files." Direct fetch of that page (twice, including a verbatim term-search pass) shows it contains NONE of those three statements. The page is real and on-topic but does not support the quotes pinned to it.
- **Where the claims actually live (corroborated, not invented):** the holocaust.cz camp pages ("The gypsy camp at Lety," "The Gypsy Camp at Hodonín u Kunštátu") state supervisory staff were "recruited from the police force of the Protectorate of Bohemia and Moravia" and give ~1,309 interned / 326 survived at Lety and ~5,000 Czech-lands Roma murdered overall. The "run solely by Czech personnel / none punished after 1945" phrasing traces to the English Wikipedia "Concentration camps Lety and Hodonín" article (postwar outcomes: Janovský acquitted, Luňáček an official warning, Blahynka uninvestigated — i.e. effectively unpunished). The 4,493 figure traces to the Council of Europe Roma Genocide factsheet (coe.int — HTTP 403 on fetch, same block noted in the original research pass).
- **Action taken:** summary citation re-pointed to the holocaust.cz Lety camp page with an accurate cite string; a full AUDIT caveat on that source and a QUARANTINE note in toll.note disclose the original misattribution. Event status set UNVERIFIED to flag the defect; the substance is sound.
- **Toll:** verifies independently. Camp-level low (326 deaths, ~30 children, transports 94 on 4 Dec 1942 / 417 on 14 May 1943, ~6,500 recorded, Czech gendarme guards) confirmed verbatim on the Wikipedia "Lety concentration camp" page. High end (~600 survived, ~90% perished, >5,000 imprisoned) confirmed on Romea.cz ("only about 10% ... survived"). Both ends sourced. disputed:true is appropriate.
- **Tier:** EXT confirmed. Re-derived before reading the assigned tier. The STR-vs-EXT rule was specifically tested: although hundreds died of typhus/malnutrition in the camps, the event is genocidal extermination (gassing at Auschwitz-Birkenau, near-total destruction of the group for who they were), so EXT is correct and a downgrade to STR (disease-driven) would be wrong. No change.

### cze-3 — Expulsion of the Germans — VERIFIED, tier POL confirmed
- Both citations resolve to the real Wikipedia "Expulsion of Germans from Czechoslovakia" page. Confirmed verbatim: 1995 German-Czech commission "at least 15,000" to ~30,000; German records 18,889 (3,411 suicides); Czech records 22,247 (6,667 unexplained/suicides); 1958 West German estimate ~270,000 (now overstated); Postoloprty 763, Přerov 265 (71 men/120 women/74 children), Brno death march ~800 of ~20,000, Ústí ≥43; official expulsions 25 Jan–Oct 1946; ~3 million expelled (~1.3M to US zone, ~800k to Soviet zone).
- Toll: both ends of the contested band are sourced to the binational commission consensus. OK.
- Tier: POL confirmed. State-directed forced removal of an ethnic group, not extermination as such (rules out EXT); deaths were a byproduct of expulsion conditions and revenge violence rather than a primary famine/epidemic driver (rules out STR). Independently re-derived; correct.

### Notes
- No invented sources. The single corrective action re-points a citation to pages that genuinely carry the claim and discloses the original page-to-claim mismatch in caveat + toll.note.
- COE Roma Genocide factsheet (coe.int) still returns HTTP 403 — consistent with the original research pass; it is referenced as the origin of the 4,493 figure but not fetchable, so the live-verifiable anchors are holocaust.cz, Wikipedia, and Romea.cz.
- Both ledgers are populated as the record supports (law 1); the perpetrator side is legitimately single-event and smaller in toll, which is the historical record, not an imbalance to "fix." No invented balance added.
