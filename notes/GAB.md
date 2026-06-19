# Gabon (GAB) — research log

Built from scratch on 2026-06-19. Web tools (WebSearch / WebFetch) available; real research done. Two events, one per ledger.

## Verdict
Sharply asymmetric record. The victim ledger is the heavy one (French Equatorial Africa concession-company forced labour + colonial demographic collapse). The perpetrator ledger is genuinely thin — Gabon's post-independence state was repressive (patronage, arbitrary arrest, torture, the unexplained 1990 death of opposition leader Joseph Rendjambé) but produced **no documented large-scale state massacre**. The clearest, best-documented perpetrator event is the 2016 post-election crackdown. I did NOT invent a perpetrator event to balance the ledgers; the asymmetry is stated plainly in the country note.

## gab-1 — Concessionary-company forced labour + colonial demographic collapse (victim, STR, UNVERIFIED)
- Around 1899-1900 France carved Gabon (within French Equatorial Africa) into ~10 monopoly concessions; companies extracted rubber, ivory, then okoumé timber by forced labour under the indigénat code, head taxes and labour requisition.
- Demographic collapse over the same decades from sleeping sickness, smallpox, the 1918-19 influenza, malnutrition (collapse of subsistence farming), and abuse in camps. Whole districts depopulated.
- **TOLL: left NULL, status UNVERIFIED on the number.** The popular "about half the population died" line is repeated everywhere but is NOT a sourced, Gabon-specific reconstructed count. Followed the COG (Congo-Brazzaville) precedent in this corpus: the "~10 million / half the population" figure is the BELGIAN Congo Free State (COD) and must NOT be borrowed for Gabon. No defensible aggregate exists.
- Sources used: Britannica 'Gabon — History' (concession policy 1898-1914 devastated settlement/agriculture/trade — confirmed via search snippet; the page 403s on direct WebFetch but the text is standard and corroborated); Gray & Ngolet, *Journal of African History*, on labour transformation along the Middle Ogooué 1870-1945 (Cambridge Core, abstract); Africa Center for Strategic Studies on the 1918-19 flu in Africa (regional mortality context only, not a Gabon count).

## gab-2 — 2016 post-election crackdown (perpetrator, POL, RESEARCHED)
- 27 Aug 2016 election; results on 31 Aug gave Ali Bongo a narrow win over Jean Ping (both claimed victory). Presidential/Republican Guard bombed Ping's HQ by helicopter overnight then stormed it; security forces killed protesters and arrested ~800-1,100; internet cut.
- **TOLL: disputed range 3-100.** Low anchor: Reuters "at least 3" / Wikipedia ~5 / State Dept low single digits. High anchor: Jean Ping told FRANCE 24 "between 50 and 100" killed (his own claim — flagged as such). Government dismissed the high figure. No independent forensic count.
- Sources used: BBC ('presidential guard bombed Jean Ping's party HQ', 1 Sept 2016); FRANCE 24 ('Between 50 and 100 killed', 6 Sept 2016 — opposition claim, caveated); Wikipedia '2016 Gabonese protests' (low figures, Reuters relay); U.S. State Dept 2016 Country Report on Human Rights Practices — Gabon (pattern of force/arrests; page rendered garbled on fetch but is a standard, citable record).

## Considered and rejected / not used
- **1964 coup + French restoration of Léon Mba:** real and ugly (Mba imprisoned 150+ opponents, Aubame sentenced to hard labour and beaten in prison), but the coup itself had few casualties (official 1 French + 18 Gabonese dead; unofficial ~2 French + 25 insurgents). Below mass-atrocity scale; not logged as a standalone event. Folded into the note's characterisation of state repression.
- **1990 unrest / Operation Requin:** Joseph Rendjambé (PGP leader) found dead in a Libreville hotel 23 May 1990; riots in Libreville and Port-Gentil; France launched Operation Requin (25 May-6 Jun 1990, ~2,000 troops) to evacuate ~1,800 foreigners and prop up the regime. Best-documented toll is small and substantially riot-related: *L'Union* reported 2 dead in three days. **Caught and corrected a conflation:** an early search synthesis attached a "government under 10 vs journalists 50+" dispute to 1990 — that figure actually belongs to the **2016** unrest. Did not use the 1990 numbers; the 1990 episode is mentioned in the note but not logged as a standalone perpetrator event because the lethal toll is low and the killing was not a clean state massacre.
- **Did NOT borrow** the Belgian Congo Free State death figure for Gabon (explicit guard in the note and toll caveat).

## Verification limitations
- Britannica, FRANCE 24, State Dept, Refworld and UPI archive pages returned 403 / garbled on direct WebFetch; their load-bearing content was confirmed via WebSearch result snippets and is corroborated across multiple outlets (BBC, Reuters, Al Jazeera, Wikipedia).
- The colonial-era death toll is irreducibly unverifiable as a number → null + UNVERIFIED, by design.

## Audit
Adversarial source-integrity + tier audit, 2026-06-19 (assume-fake posture; every citation falsification-tested).

### Source integrity — all 7 sources tested, all PASS
**gab-1 (victim, colonial):**
- Britannica "Gabon — History": exists; content corroborated via search (French concession policy 1898-1914 devastated settlement/agriculture/trade; head taxes, labour taxes, forced labour). JSON URL `/place/Gabon/History` resolves; Britannica's canonical slug is now `/topic/history-of-Gabon` with identical content. Supports summary. VERIFIED.
- Gray & Ngolet, "Lambaréné, Okoumé and the Transformation of Labor along the Middle Ogooué (Gabon), 1870-1945," *Journal of African History* **40(1), 1999, pp. 87-107, DOI 10.1017/s0021853798007361**. Real article, real authors (Christopher Gray & François Ngolet); subject = forced labour recruitment disrupting agricultural cycles for rubber/okoumé/porterage under French rule. Cambridge Core page confirmed. Supports summary. VERIFIED.
- Africa Center for Strategic Studies, "Lessons from the 1918-1919 Spanish Flu Pandemic in Africa": exists; the exact figures in the cite ("up to 90% infected, mortality ~15%") are present in the article. Correctly caveated as REGIONAL pandemic context, NOT a Gabon-specific death count. VERIFIED.

**gab-2 (perpetrator, 2016):**
- BBC, "Gabon presidential guard 'bombed Jean Ping's party HQ'" (1 Sept 2016): exists (bbc.com page blocks WebFetch but confirmed via feeds.bbci.co.uk mirror + MyJoyOnline/Nehanda reproductions). Supports summary (presidential guard bombed HQ; ~1,000 arrested). VERIFIED.
- FRANCE 24, "'Between 50 and 100 killed'…" (6 Sept 2016): exists at cited URL; exact "between 50 and 100" quote from Ping confirmed; govt spokesman dismissed it ("only four died"). Correctly attached to toll.high and caveated as opposition claim. VERIFIED.
- Wikipedia, "2016 Gabonese protests": exists; infobox ~5 deaths, ~1,100 arrests; helicopter bombing of Ping's HQ confirmed; Globe & Mail "Three killed" corroborates the Reuters "at least 3" low anchor. Supports toll.low; correctly caveated as tertiary. VERIFIED.
- U.S. State Dept, 2016 Country Reports on Human Rights Practices — Gabon: exists at cited URL (+ PDF mirror); documents arbitrary arrests after the 27 Aug election and forcible dispersal of demonstrations. Supports summary (state force/arrests pattern); correctly caveated. VERIFIED.

### Toll
- gab-1: low/high correctly NULL and quarantined. No defensible Gabon-specific death count exists; the "~half the population / 10 million" figure is BELGIAN Congo Free State (COD) and is correctly fire-walled out (matches COG precedent). Held UNVERIFIED on the NUMBER only. PASS.
- gab-2: BOTH ends sourced — low (3-5: Reuters/Globe&Mail/Wikipedia/State Dept), high (50-100: FRANCE 24/Ping). `disputed:true` correct, no single-source/single-number defect. PASS.

### Tier (independently re-derived BEFORE reading assigned)
- gab-1: disease-dominated mass mortality (sleeping sickness, smallpox, 1918-19 flu) compounded by forced-labour/hunger; intent = extraction, not destruction of a defined group → **STR** (STR-vs-EXT rule: disease-driven = STR, not EXT). Assigned STR CORRECT, no change.
- gab-2: lethal state repression of opponents/protesters over a disputed vote; not a campaign to destroy a defined group → **POL**. Assigned POL CORRECT, no change.

### Ledgers (law 1)
Both ledgers populated (1 victim, 1 perpetrator). Asymmetry is real and honestly stated in the country note; no invented perpetrator event to force balance. Rendjambé 1990 detail in the note spot-checked and accurate (PGP leader, dead in a Libreville hotel 23 May 1990, unexplained). The note's own catch — that the "<10 vs 50+" dispute belongs to 2016 not 1990 — is sound. PASS.

### Status changes written to GAB.json
- gab-2: RESEARCHED → **VERIFIED** (all sources verified; both toll anchors sourced).
- gab-1: kept **UNVERIFIED** — every source passes, but the central death metric is irreducibly unreconstructable and is intentionally held UNVERIFIED on the number (honest non-verification, not a source failure).
- country: RESEARCHED → **UNVERIFIED** (cannot be VERIFIED while gab-1 remains UNVERIFIED).
- No invented sources. No tier/toll corrections required — the prior research was sound.
