# Tanzania (TZA) — research log

Built from scratch 2026-06-18 (no prior seed). Web tools (WebSearch/WebFetch) loaded and used; this is real research, not a SEED stub.

## Ledger shape
- **Victim (1 event):** Maji Maji rebellion / Great Hunger, 1905-1907 — the dominant entry.
- **Perpetrator (1 event):** Forced villagization (Operation Vijiji / Ujamaa), 1973-1976.

The two ledgers are deliberately asymmetric. Tanzania has one very heavy victim event and a comparatively light perpetrator record. I did NOT invent a symmetric perpetrator atrocity to balance it; the asymmetry is explained in the country note.

## tza-1 — Maji Maji rebellion (victim), EXT
- Imperial Germany (German East Africa) suppressed the 1905-07 revolt with scorched earth: burning crops, granaries, livestock, villages to starve the population. Governor Gustav Adolf von Götzen; strategy formalized in Hauptmann Curt von Wangenheim's Oct. 1905 memo ("only hunger and want can bring about a final submission").
- **Toll is contested across an order of magnitude.** Low = ~75,000 (German colonial records). High = ~250,000-300,000 (historians G. C. K. Gwassa and Tanja Bührer), overwhelmingly from famine, not combat. Set toll.low=75000, toll.high=300000, disputed=true.
- Tiered **EXT** because the deliberate weaponization of hunger against a defined population is the core act (prompt rule: "deliberate destruction of a group = EXT"). Whether it legally constitutes genocide is openly debated — Oxford Academic / Holocaust and Genocide Studies (2021) evaluation under international criminal law; scholars A. Dirk Moses and Klaus Bachmann call it genocidal. The tier source flags this as unsettled.
- Foundational scholarship: Gwassa & John Iliffe, *Records of the Maji Maji Rising* (1968); Iliffe, *Tanganyika under German Rule 1905-1912*.

## tza-2 — Forced villagization / Operation Vijiji (perpetrator), STR
- Tanzanian state under Julius Nyerere + TANU made resettlement compulsory from 1973 (after the voluntary ujamaa phase stalled). At least ~5 million forcibly relocated (James C. Scott, *Seeing Like a State*); other estimates put it at 80-90% of the rural population / ~10-13 million into 7,000+ planned villages. Homesteads (bomas) burned to prevent return; police/military enforcement.
- **No reliable death count exists.** Toll set to null/null with a note. The documented harm is displacement plus a food-production collapse (maize: ~540,000 t export in 1970 → ~300,000 t import in 1974; per-capita food output back to 1960 levels by 1975) and cholera/typhoid epidemics linked to resettlement.
- Tiered **STR** (structural disruption / forced displacement, not a killing campaign; no intent to kill). Event status = **UNVERIFIED** because the harm cannot be expressed as a sourced death toll.

## Considered and rejected
- **Uganda-Tanzania War (Kagera War), 1978-79:** NOT entered as a perpetrator atrocity. Tanzania was invaded first; the war is widely read as a justified ouster of Idi Amin. Most civilian deaths (~1,500 Tanzanian civilians in Kagera; Ugandan civilian deaths) were caused by Amin's and Libya's forces. TPDF misconduct (looting the Kampala International Hotel, some summary executions of suspected Amin loyalists during the fall of Kampala) was real but minor and not on the scale of a mass atrocity. Entering it would distort the ledger.

## Could NOT verify / soft points
- Exact Maji Maji death toll — irreducibly an estimate; the 75k vs 250-300k gap is colonial undercount vs scholarly reconstruction of famine mortality.
- Any death/excess-mortality figure for Operation Vijiji — none found; deliberately left null.
- The cholera/typhoid epidemic claim is reported in secondary summaries citing Scott; not independently quantified here.

## Real sources consulted (URLs that loaded)
- Wikipedia, Maji Maji Rebellion — https://en.wikipedia.org/wiki/Maji_Maji_Rebellion (fetched)
- Internet Archive, Gwassa, *Records of the Maji Maji Rising, Part One* — https://archive.org/details/maji-maji-1
- Oxford Academic, Holocaust and Genocide Studies 35:2 (2021), genocide/ICL evaluation — https://academic.oup.com/hgs/article/35/2/235/6330489
- Wikipedia, Operation Vijiji — https://en.wikipedia.org/wiki/Operation_Vijiji (fetched, stub)
- Wikipedia, Seeing Like a State — https://en.wikipedia.org/wiki/Seeing_Like_a_State
- African Arguments, "Remembering ujamaa" (Dec. 2020) — https://africanarguments.org/2020/12/tanzania-remembering-ujamaa-the-good-the-bad-and-the-buried/ (fetched)
- Wikipedia, Uganda–Tanzania War — https://en.wikipedia.org/wiki/Uganda%E2%80%93Tanzania_War (background, for the rejection decision)
- BlackPast, Maji Maji Uprising — https://blackpast.org/global-african-history/maji-maji-uprising-1905-1907/ (returned 403, not used as a citation)

## Audit

Adversarial source-integrity + tier audit, 2026-06-18 (assume-fake-until-proven methodology; WebSearch/WebFetch used to falsify every citation).

### Verdict
- **Country status: UNVERIFIED** (tza-1 VERIFIED, tza-2 UNVERIFIED — one unverified event forces the country down).
- 1 event VERIFIED, 1 event flagged UNVERIFIED.

### tza-1 — Maji Maji / Great Hunger (victim, EXT) → VERIFIED
- **Tier independently re-derived BEFORE reading the assigned one: EXT.** Deliberate weaponization of starvation against defined populations = extermination-class. The STR-vs-EXT rule (disease/famine-driven = STR) does NOT downgrade this: the famine was *engineered* by scorched-earth, not a natural epidemic. Assigned tier EXT confirmed; added a clause to the summary making the engineered-famine distinction explicit.
- **Toll: both ends independently sourced and confirmed.** Low 75,000 = German colonial records (Wikipedia, corroborated). High 250,000–300,000 = Gwassa + Tanja Bührer (corroborated by independent search). Disputed=true is correct.
- **Source falsification results:**
  - #1 Wikipedia (toll.low): real, supports the German-colonial 75,000 figure, names von Götzen, the Wangenheim "only hunger and want" memo, and A. Dirk Moses / Klaus Bachmann as calling it genocidal. PASS.
  - #2 archive.org Gwassa & Iliffe, *Records of the Maji Maji Rising, Part One* (1968) (toll.high): URL resolves to the genuine named volume. Tanja Bührer confirmed a real historian (*Die Kaiserliche Schutztruppe für Deutsch-Ostafrika*, 2011) giving ~250,000. PASS.
  - #3 genocide article (tier): **CITATION DEFECT FOUND AND CORRECTED.** Original cite credited "Felix Schürmann et al." — FALSE. Verified authors are **Klaus Bachmann and Gerhard Kemp**, *Holocaust and Genocide Studies* 35:2 (2021), pp. 235–249. Journal/volume/issue/pages/year/title/URL all otherwise correct. Also corrected the framing: the authors do not merely "frame the debate" — they conclude the conduct *deserves the label of genocide* under modern ICL (with caveats on the concept post-dating the events and state immunity). Author corrected in-record; defect logged in caveat.

### tza-2 — Forced villagization / Operation Vijiji (perpetrator, STR) → UNVERIFIED (quarantined)
- **Tier independently re-derived: STR.** Mass forced displacement + homestead burning + food-production collapse, no killing campaign, no intent to kill, no reliable toll → structural. Assigned tier STR confirmed.
- **Toll: null/null is correct and honest** — no credible death figure exists; correctly not invented. Single-/zero-number toll is the reason the event cannot reach VERIFIED.
- **Source falsification results:**
  - #1 Scott, *Seeing Like a State* (summary): book + Tanzania chapter (ch. 7) are real; the five-million figure is corroborated independently. BUT the cited Wikipedia URL is a thin proxy that only names "forced villagization in 1970s Tanzania" in passing and does not itself carry the five-million figure or the "largest in independent Africa" quote — that quote could not be verbatim-verified at the URL and was REMOVED. Substantive claim rests on the genuine book. PARTIAL — over-attributed to the URL, trimmed.
  - #2 African Arguments (Dec. 2020) (summary): real; verified to contain the EXACT figures cited (540,000 t export 1970 → 300,000 t import 1974, bomas burned, ≥5 million relocated, 80–90% of rural pop, Arusha Declaration, TANU 1972). Bias disclosed. Strongest source for the event. PASS.
  - #3 Operation Vijiji Wikipedia (summary): page exists but is a STUB. Confirms the 1973–1976 forced-villagization framing only; does NOT contain the "11–13 million / ~90% / 7,000+ planned villages / homestead destruction / police-military enforcement" specifics the original cite attributed to it. OVER-ATTRIBUTION — cite trimmed to what the stub actually supports (the magnitude is separately attested by African Arguments/Scott).
- **Quarantine reason (toll.note):** the original note's "cholera and typhoid epidemics linked to the resettlement" OVERSTATES the evidence. Tanzania's first reported cholera epidemic was indeed 1974 (temporally coincident), but no consulted source establishes a causal link to resettlement, and no 1974 typhoid epidemic tied to villagization could be verified. The disease claim is downgraded in-record to an unverified temporal coincidence; the displacement itself is well-attested. Event stays UNVERIFIED because the atrocity cannot be expressed as a sourced toll — not because the displacement is in doubt.

### Ledger / law-1 check
- Both ledgers populated (1 victim, 1 perpetrator). The deliberate victim-heavy / perpetrator-light asymmetry is justified in the country note and was NOT papered over with an invented balancing event. PASS — no invented sources or events added at any point.
