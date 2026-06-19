# Finland (FIN) — research log

Built from scratch on 2026-06-19. Dual-ledger: 2 victim events, 2 perpetrator events. Wrapper status RESEARCHED.

## Selection logic

Finland's history maps cleanly onto the dual lens:
- **Victim side** is dominated by demographic catastrophe (two great famines), not invasion/occupation in modern times. Both famines scored STR (structural/famine death), not EXT — the killer was failed harvests plus epidemic disease, with human policy aggravating rather than designing the deaths.
- **Perpetrator side** is internal and wartime, never colonial — Finland held no overseas empire. The two strongest events are the 1918 White Terror/prison camps (Finns killing defeated Finns) and the 1941–44 East Karelian camps (Finnish occupation interning ethnic-Russian civilians). Both scored POL (politically/ethnically targeted killing).

## Events

### fin-1 — Great Famine of 1695–1697 (victim, STR)
- ~150,000 dead, roughly a quarter to a third of then-Swedish Finland's ~500,000 population. Finland's worst demographic catastrophe.
- Caused by the coldest decade of the Little Ice Age; repeated harvest failure + epidemic disease.
- Toll range set 100,000 (conservative quarter-of-population reading) to 150,000 (third). Population-loss figure, not a murder count — noted in toll.note.
- Shared event with Sweden (Finland was then Swedish); SWE.json already notes the heaviest losses fell on Swedish Finland.

### fin-2 — Finnish Famine of 1866–1868 (victim, STR)
- ~270,000 total deaths over three years, ~150,000 excess; ~8.5% of population, up to 20% in worst regions. Last great famine in Northern Europe.
- Cold/wet 1866, coldest-on-record May 1867, September frosts halved the harvest.
- Aggravating human factor: finance minister J.V. Snellman delayed borrowing for grain imports to protect the new markka, so relief came late. This is contested as to blame, not magnitude — set disputed:false because the ~150,000 excess-death figure is well established; the dispute is about apportioning responsibility.

### fin-3 — White Terror & Civil War prison camps, 1918 (perpetrator, POL)
- White Terror executions ~7,000–10,000; ~80,000 Reds imprisoned in 60+ camps; ~12,000–14,000 camp deaths (hunger, Spanish flu, dysentery, shooting). Tammisaari camp 34% mortality. Overall Civil War toll ~38,000.
- Combined toll range here 19,000–24,000 (terror executions + camp deaths). Agent: the White Army under Mannerheim + the Senate government (camps run by the State Correctional Office from Sept 1918).
- received_lens "contested" — long a divisive memory in Finland (Red vs White).

### fin-4 — East Karelian concentration camps, 1941–1944 (perpetrator, POL)
- Finnish military administration of occupied East Karelia interned ~24,000 ethnic Russians (~30% of the remaining Russian population, mostly children/elderly). Finnish records: 4,361 deaths; earlier estimates 4,000–7,000; ~3,500 died of malnutrition spring–summer 1942; ~18% mortality at Petrozavodsk camps.
- Ethnic basis: Finnic Karelians treated as future citizens, ethnic Russians interned. Finnish historian Oula Silvennoinen: a tool for what would now be called ethnic cleansing.
- received_lens "contested."

## Contested / could-not-verify

- **East Karelia higher tolls.** Russia's Prosecutor General's Office / FSB allege over 8,000 civilians and 18,000 Soviet POWs killed, plus gas chambers and firing squads. Finnish historians dispute these as unsupported. I did NOT adopt the higher Russian figures into the toll range; the Yle source is flagged with a caveat and used only for the historian's characterisation and the framing of the dispute. Toll set to the Finnish-records / earlier-estimate band (4,000–7,000) with the dispute noted.
- **1695–97 famine.** Exact mortality rests on parish-register reconstruction with period uncertainty; "quarter to a third" is the standard scholarly band. No clean single number, so a range was used.
- **1918 Civil War counts.** Execution and camp-death figures vary by historian; ranges used. The fact of the terror and the camp deaths is not in dispute.

## Sources consulted (real, verified live)

- Wikipedia: Finnish famine of 1866–1868; Great Famine of 1695–1697; Finnish Civil War; Finnish Civil War prison camps; East Karelian concentration camps; List of disasters in Finland by death toll.
- Scholarly: Jutikkala/Lappalainen et al., "Death and Disease During the Great Finnish Famine 1695–1697," Scandinavian Journal of History 39:4 (2014), Taylor & Francis. Voutilainen, "Income inequality and famine mortality: Evidence from the Finnish famine of the 1860s," Economic History Review (2022), Wiley.
- Press: Yle (Finnish public broadcaster), "Russia launches 'genocide' probe into Karelian WW2 camps."

All four events status RESEARCHED. No figures or citations were invented; where scholarship diverges the range and dispute are shown, and contested higher claims (East Karelia) were excluded from the toll with the reasoning logged.

## Audit

Adversarial source-integrity + tier audit, 2026-06-19 (auditor: Kai Denrei). Premise: every citation FAKE until proven otherwise. All sources tested live via WebSearch/WebFetch.

### Verdict summary
- **fin-1 Great Famine 1695–1697 — STR — VERIFIED** (tier corrected nothing; toll low corrected; one source misattribution fixed).
- **fin-2 Finnish Famine 1866–1868 — STR — VERIFIED**.
- **fin-3 White Terror & Civil War prison camps 1918 — POL — VERIFIED**.
- **fin-4 East Karelian concentration camps 1941–1944 — POL — UNVERIFIED** (source misattribution; facts sound, citation as recorded was false).
- **Country status: UNVERIFIED** (fin-4 not clean → cannot be all-VERIFIED).

### Source integrity (falsification attempts)
- **fin-1 Wikipedia 'Great Famine of 1695–1697'** — REAL, supports toll.high. Confirmed "~150,000 of 500,000, about a third." Holds.
- **fin-1 scholarly 'Death and Disease During the Great Finnish Famine 1695–1697,' Scandinavian Journal of History 39:4 (2014)** — REAL (DOI 10.1080/03468755.2014.937740, pp. 425–447). BUT authorship was misattributed: the article is single-authored by **Mirkka Lappalainen**, not "Jutikkala / Lappalainen et al." (Eino Jutikkala died 2006 and is not an author of this paper). Corrected the cite to "Lappalainen, Mirkka."
- **fin-2 Wikipedia 'Finnish famine of 1866–1868'** — REAL, supports toll.low. 270,000 total / ~150,000 excess / ~8.5% / up to 20%; rainy 1866, cold May 1867, Snellman reluctant to borrow to protect the markka, Rothschild loan late 1867. All confirmed. Holds.
- **fin-2 scholarly Voutilainen, 'Income inequality and famine mortality,' Economic History Review 75(2) (2022)** — REAL (DOI 10.1111/ehr.13095, pp. 503–529, Univ. of Jyväskylä). Supports summary. Holds.
- **fin-3 Wikipedia 'Finnish Civil War'** — REAL, supports toll.low. ~38,000 total; ~9,000 Reds executed; ~12,500 prisoners died in camps. Confirmed. Holds.
- **fin-3 Wikipedia 'Finnish Civil War prison camps'** — REAL, supports toll.high. ~80,000 imprisoned across 13 main + 60+ sub-camps (4,700 women, 1,500 children); 12,000–14,000 dead; State Correctional Office from Sept 1918; Tammisaari/Ekenäs 34% mortality (~3,000 of ~8,700). Independently confirmed (Tammisaari 34% corroborated by multiple sources). Holds.
- **fin-4 Wikipedia 'East Karelian concentration camps'** — REAL, supports toll.low. ~24,000 interned of ~156,500 remaining Russians (~30%); Finnish records 4,361; earlier estimates 4,000–7,000; ~3,500 dead of malnutrition spring–summer 1942; ~18% Petrozavodsk mortality; Russian FSB/Prosecutor claims (gas chambers, higher tolls) disputed by Finland. All confirmed. Holds.
- **fin-4 press Yle 'Russia launches "genocide" probe into Karelian WW2 camps'** — article is REAL (yle.fi/a/3-11315786, 21 Apr 2020) BUT the citation FAILED falsification on its specific claim: it was recorded as carrying Oula Silvennoinen's "ethnic cleansing" characterisation. The article does NOT quote Silvennoinen — it quotes National Archives director **Jussi Nuorteva** (who said it could NOT be regarded as ethnic cleansing) and historian **Antti Laine**. The Silvennoinen characterisation is genuine but originates from **Silvennoinen (2011), 'Limits of Intentionality,' History of Warfare 69:386, Brill** (per the Wikipedia footnote). FIX: rewrote the Yle cite to describe what the article actually says (with audit caveat); added the correct Silvennoinen/Brill source; quarantine note in toll.note; event set UNVERIFIED.

### Toll low/high coverage
- **fin-1**: low corrected from **100,000 → 125,000**. The prior 100,000 was unsourced and internally inconsistent — the note claimed it was "the conservative quarter-of-population reading," but a quarter of the ~500,000 population in the cited source is 125,000, not 100,000. High (~150,000, the one-third reading) is directly sourced. Both ends now sourced/derivable.
- **fin-2**: single-number toll (low=high=150,000), disputed:false — flagged as single-number but acceptable by design: the ~150,000 excess-death figure is well established and the dispute is over apportioning blame (Snellman), not magnitude. Both the 270,000 total and 150,000 excess are sourced.
- **fin-3**: low 19,000 / high 24,000 — both ends sourced (executions 7,000–10,000 + camp deaths 12,000–14,000). Clean.
- **fin-4**: low 4,000 / high 7,000 — both ends sourced (earlier estimates 4,000–7,000; Finnish records 4,361). Clean. Russian higher claims correctly excluded.

### Tier re-derivation (done before reading assigned tier)
- **fin-1 → STR.** Harvest failure + epidemic disease, no human author of the deaths. Disease-driven structural mass death = STR, not EXT. Assigned tier correct.
- **fin-2 → STR.** Crop failure + typhus/dysentery, policy (relief delay) aggravated but did not design deaths against a group. STR, not EXT. Assigned tier correct.
- **fin-3 → POL.** Summary execution of identified political enemies + deliberate-neglect camp deaths of fellow Finns. Political mass killing = POL; not STR (deliberate, not blameless structural), not EXT (no ethnic-extermination design). Assigned tier correct.
- **fin-4 → POL.** Ethnically-defined internment by an occupier with thousands dead from under-provisioning. Defensible as POL (politically/ethnically targeted internment; deaths from neglect/starvation, not a designed extermination — consistent with Silvennoinen's "preparing what would be called ethnic cleansing," i.e. preparation, not execution of genocide). Assigned tier correct; not upgraded to EXT.

### Ledgers (law 1)
Both ledgers populated and the asymmetry is honestly stated (2 victim / 2 perpetrator; perpetrator side explicitly domestic+regional, never colonial — no invented balance demanded or added).

### Net changes written to FIN.json
1. fin-1 toll.low 100,000 → 125,000; display + note updated; status RESEARCHED → VERIFIED.
2. fin-1 source author corrected "Jutikkala / Lappalainen et al." → "Lappalainen, Mirkka."
3. fin-2 status RESEARCHED → VERIFIED.
4. fin-3 status RESEARCHED → VERIFIED.
5. fin-4 Yle cite rewritten + caveat; Silvennoinen/Brill source added; quarantine note in toll.note; status RESEARCHED → UNVERIFIED.
6. Country status RESEARCHED → UNVERIFIED.
