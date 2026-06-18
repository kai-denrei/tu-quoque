# Guinea (GIN) — research log

Built from scratch on 2026-06-18. Web tools (WebSearch/WebFetch) loaded and used throughout.

## Shape of the ledgers
The two columns are intentionally lopsided. Guinea's worst-documented mass atrocities were inflicted by Guinean rulers on Guineans, not by outsiders. One firm victim event (French conquest); three perpetrator events (Camp Boiro/Touré terror, the 1976 anti-Fula campaign, the 2009 stadium massacre). The asymmetry is left standing and explained in the country note. Nothing was invented to balance.

## Events
- **gin-1 (victim, WAR, RESEARCHED)** — French conquest of Fouta Djallon + Upper Guinea, 1896-1898. Only one engagement is quantified (Porédaka, 13 Nov 1896: ~150 Fula dead, 300 wounded vs 3 French wounded). Wider conquest toll (Samori's resistance, forest-zone campaigns to 1911) is undocumented in sources consulted → high left null.
- **gin-2 (perpetrator, POL, UNVERIFIED)** — Camp Boiro / Sékou Touré state terror, 1960-1984. Toll range 5,000-50,000, an order-of-magnitude dispute. Low (~5,000) = US House of Representatives report (cited via Wikipedia, not traced to the primary doc). High (~50,000) = Amnesty Intl / Camp Boiro Memorial / victims' association (AVCB) advocacy estimate, victim lists >50,000 names. 2002 exhumation found mass graves (one ~400 bodies). Marked UNVERIFIED because both bounds are relayed through tertiary sources and the high is an advocacy figure, not a forensic count.
- **gin-3 (perpetrator, POL, UNVERIFIED)** — 1976 campaign against the Fula (Peul). Touré (Malinke) publicly called for Fula elimination ("Peul racism must be given a first-class burial"), executed Fula elites (Diallo Telli, OAU founding sec-gen, starved at Camp Boiro 1977), purged Fula from office, drove Fula into exile (majority of ~2 million Guineans abroad by end of his rule). No sourceable discrete death count → toll null; deaths fold into gin-2. Tiered POL not EXT: documented record is incitement + elite executions + exile, not a verified extermination programme — though the eliminationist rhetoric puts it at the EXT edge. This is the literal dual-lens crux: victims are themselves Guineans.
- **gin-4 (perpetrator, POL, RESEARCHED)** — 28 September 2009 Conakry stadium massacre. Junta (Moussa Dadis Camara) Presidential Guard ("red berets") under Lt. "Toumba" Diakité. Toll: junta 56/57; civil society ≥157; HRW estimate ~150-200. 100+ women raped (UN panel: 109). HRW found it premeditated, likely crime against humanity. July 2024: Guinean court convicted Camara et al. of crimes against humanity (20-yr sentence; Camara later given a humanitarian pardon March 2025). Rare accountability — chosen received_lens "memorial."

## Contested / could not be verified
- Camp Boiro / Touré regime total death toll: genuinely disputed 5,000 vs 50,000; no independent forensic count exists. Both figures relayed via Wikipedia, not traced to the US House report or Amnesty's own publication directly. → UNVERIFIED.
- 1976 anti-Fula campaign: no discrete death count exists; some Fula advocacy frames the incitement as a genocide precursor — that characterization is contested and is NOT asserted as a number here.
- Porédaka casualty figures (150/300) come from Wikipedia only; not confirmed against primary/scholarly source.
- Amnesty 2024 verdict page (amnesty.org) returned HTTP 403 to direct fetch; verdict details corroborated via search-result summaries of the same release and consistent press reporting.

## Real sources consulted
- Wikipedia: Camp Boiro; Ahmed Sékou Touré; 2009 Guinean protests; Battle of Porédaka; Samori Ture; Samorian state; Mandingo Wars.
- Human Rights Watch, "Guinea: September 28 Massacre Was Premeditated" (27 Oct 2009) — fetched.
- NYU Gallatin Confluence, "Guinea's Ethnic Conflict" — fetched.
- Amnesty International, July 2024 verdict release — search-summary only (403 on fetch).
- Search corroboration: ReliefWeb, FIDH, Africanews, France 24, WebGuinee.Net, konakryexpress.org, MAR (Univ. Maryland), globalsecurity.org.

## Verification
JSON validated with python json.load: 4 events (1 victim, 3 perpetrator), 2 events UNVERIFIED, country status RESEARCHED.

## Audit
Adversarial source-integrity + tier audit, 2026-06-18 (assume-fake posture; every source attacked before acceptance). WebSearch/WebFetch used throughout.

### Source integrity — every cited source falsification-tested
- **gin-1 / Porédaka** — Wikipedia 'Battle of Porédaka' re-fetched: confirms 150 dead, 300 wounded (Imamate) vs 3 French wounded, 13 Nov 1896, French victory. CORRECTION surfaced: the French column included Fulbe allies under Umaru Bademba Barry, not tirailleurs alone — added an audit note to relevance and softened the agent's "tirailleurs (Senegalese riflemen)" framing in the caveat. Samorian-state source confirmed as narrative-only (no toll). Both sources real and supportive. → VERIFIED.
- **gin-2 / Camp Boiro** — Both Wikipedia sources re-fetched. Camp Boiro article attributes ~5,000 to a US Congress report and ~50,000 to **RFI (27 Mar 2008)** — NOT to Amnesty/Memorial/AVCB as the original caveat implied; corrected the caveat to state the true attribution. Sékou Touré article independently attributes ~50,000 to Amnesty + Camp Boiro Memorial and ~5,000 to a US House report, plus Amnesty's 4,000 detained / 2,900 unaccounted (1969-76) and ~1.5M exile — all confirmed. AVCB ">50,000 names" list CORROBORATED independently (camp-boiro.org, Global Voices). **Flag:** the 2002 mass-grave / ~400-body claim in toll.note is real (corroborated via search — graves near Kindia, discovered Oct 2002 by the Children of the Victims of Boiro Camp) but is NOT in the cited Wikipedia article, and the "17-18 Oct 1971" framing for those bodies could not be independently confirmed — toll.note rewritten to disclose this and hold the date loosely. Both bounds now traceable; dispute genuine and openly labelled. → VERIFIED.
- **gin-3 / 1976 anti-Fula** — NYU Gallatin Confluence essay (Aisatou Diallo, FY research seminar) re-fetched: confirms the "we will annihilate them ... by radical revolutionary war" quote, Telli's execution, Malinkaization (Fula at 11% of admin posts). **Key source-integrity catch:** the agent field quotes "Peul racism must be given a first-class burial," which is supported by NEITHER cited source (the Sékou Touré Wikipedia article contains no eliminationist quote at all). The quote is REAL — traced to its primary source, Touré's 22 Aug 1976 Palais du Peuple speech, *Horoya* no. 2237 (29 Aug–4 Sep 1976), verbatim French confirmed at WebGuinée.Net. ADDED WebGuinée.Net as a third source (no invented citation; a genuine primary-text archive) so the quote is now anchored. → VERIFIED.
- **gin-4 / 2009 stadium massacre** — HRW 2009 report re-fetched: 150-200 dead vs govt 57, premeditated (sealed exits, coordinated sustained fire), 27 sexual-violence victims interviewed, "may have been a crime against humanity." 2009-protests Wikipedia: 56 govt, ≥157 civil society, 1,253 injured, UN panel 109 raped. Amnesty 2024 release re-checked (still 403 on direct fetch, but it EXISTS) and the verdict independently corroborated by HRW (31 Jul 2024 landmark-verdict release), WaPo, Al Jazeera: Camara guilty of crimes against humanity by command responsibility, 20-year sentence, UN figures ≥156 killed / 109 raped; later pardoned 28 Mar 2025. → VERIFIED.

### Toll two-sidedness
- gin-1: high correctly null (wider conquest unquantified in any consulted source) — not a single-number flag, an honest floor. low sourced.
- gin-2: low (~5,000, US Congress) and high (~50,000, RFI / Amnesty / Memorial) each separately sourced — both ends covered.
- gin-3: toll correctly null both ends; no discrete 1976 death count exists; displacement (~2M exile) is the quantified harm. Honest.
- gin-4: low (57, junta self-report) and high (150-200, HRW) each sourced — both ends covered.

### Tier re-derivation (done independently before reading the assigned tier)
- gin-1 → WAR (organized colonial war of subjugation). MATCHES.
- gin-2 → POL (political mass murder by a one-party state; targeting by political loyalty). MATCHES. Explicitly NOT STR: the diète-noire starvation is a deliberate instrument of political killing, not a disease/famine event, so the disease-driven=STR rule does not apply.
- gin-3 → POL (ethnic persecution via incitement + elite executions + exile; documented record is not a verified extermination programme). MATCHES. Correctly held at POL rather than EXT despite eliminationist rhetoric — the rhetoric is logged as the EXT edge, not asserted as a realized extermination.
- gin-4 → POL (deliberate mass killing of assembled political opposition). MATCHES.
All four assigned tiers are correct; no tier or tier_reasoning was changed.

### Ledger balance (law 1)
Both ledgers populated where the record supports it (1 victim, 3 perpetrator). The lopsidedness is the documented truth; no toll inflated and no event invented to balance. Compliant.

### Outcome
All 4 events moved to VERIFIED (gin-1 and gin-4 from RESEARCHED; gin-2 and gin-3 from UNVERIFIED). Country status RESEARCHED → VERIFIED. JSON re-validated (python json.load OK). No invented sources; one real primary source (WebGuinée.Net / Horoya) added to anchor a previously-unsupported quote.
