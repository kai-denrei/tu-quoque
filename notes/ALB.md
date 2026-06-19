# Albania (ALB) — research log

Built from scratch (no seed file). Web tools (WebSearch/WebFetch) loaded and used for all events.

## Ledger structure

Five events: 2 victim, 3 perpetrator.

- **Victim ("Done to them")**
  - `alb-1` Massacres of Albanians in the Balkan Wars (1912–13) — Serbia/Montenegro.
  - `alb-2` Borovë massacre + German reprisals (1943).
- **Perpetrator ("In their name")**
  - `alb-3` Communist regime terror under Enver Hoxha (1944–91).
  - `alb-4` SS Skanderbeg Division atrocities in Kosovo/Montenegro (1944).
  - `alb-5` Cham Albanian collaborationist massacres in Greece (1943–44).

## Key framing decision: where the communist terror goes

The single heaviest event touching Albania's people is the Hoxha regime's terror — but the perpetrator was Albania's *own* state and the victims were Albanians. To avoid double-counting the same deaths across both columns (and cancelling them out), it is placed once, on the **perpetrator** ledger, because the agent acted in the national name. This is stated explicitly in the country `note`. This is the cleanest example in the entry of the dual lens turned inward.

## What is well-documented

- **Borovë (alb-2):** 107 killed at Borovë on 6 July 1943 by the German 98th Regt / 1st Mountain Division, ~18 more at Barmash. Consistently reported, not disputed → event status RESEARCHED.
- **Communist executions (alb-3):** ~6,000+ executed; former-political-prisoners' association count 5,577 men + 450 women (1946–91); ISKK documents 34,135 imprisoned and 59,009 deported/persecuted. Execution count firm; broader death toll (camp/prison deaths) disputed and incompletely documented (Sigurimi archives only partly opened). The 1951 Tirana executions (23 intellectuals on fabricated charges) used as the illustrative case.
- **SS Skanderbeg (alb-4):** 400+ civilians at Andrijevica + ~550 at Velika (Montenegro, 1944); 281 Jews arrested in Pristina 14 May 1944, deported via Germans to Bergen-Belsen; up to ~510 Jews/communists/anti-fascists apprehended overall. Noel Malcolm's "most shameful episode" line. Serb-civilian massacres well documented.
- **Cham collaboration (alb-5):** ~1,065 Greeks killed (incl. ~600 in Operation Augustus July–Aug 1943, ~200 at Paramythia Sept 1943) under the Dino brothers; 70 villages destroyed.

## What is contested / could NOT be verified

- **Balkan Wars toll (alb-1):** marked event status **UNVERIFIED**. No scholarly consensus. Range used: ~25,000 (low, contemporary early-1913 Kosovo Vilayet count) to ~120,000 (high scholarly estimate across Serbian-occupied regions). Higher contemporary Albanian/nationalist claims (200,000+ for 1913–15) noted only as the upper bound of the dispute, not as established fact. Note also flags that this violence was centred on Kosovo and "Old Serbia," not the modern Albanian state — included because it concerns Albanians as a people.
- **Skanderbeg deportation role:** Albanian historian Shaban Sinani disputes that the division participated in deportations; recorded as the contested element in the source caveat.
- **Cham responsibility:** Greek–Albanian historiographical dispute over both the casualty figures and the degree of *collective* Cham responsibility (not all Chams collaborated); flagged in the caveat.

## Deliberate omission

Albania-proper is one of the few Axis-occupied countries where **most Jews survived** (only ~5 native Jews killed; population grew ~11x as refugees were sheltered under the *besa* code). This is noted in the country `note` as context but **not** entered as an event — it is the absence of an atrocity, not an atrocity. Did not invent anything to "balance" the ledgers.

## Real sources consulted

- Wikipedia: "Massacres of Albanians in the Balkan Wars", "Massacres of Albanians in World War I", "Borovë massacre", "Cham Albanian collaboration with the Axis", "Communist purges in Albania in 1944-1947", "1951 executions in Albania", "The Holocaust in Albania", "21st Waffen Mountain Division of the SS Skanderbeg".
- Britannica: "Enver Hoxha".
- Balkan Insight / AP: "Albania to Start Searching for Remains of Communist Camp Victims" (2023); related Balkan Insight reporting on communist-era victims.
- Institute for a Greater Europe: "Albania 30 years after the fall of the most radical communist regime" (relays ISKK 2020 figures: 34,135 imprisoned, 59,009 deported/persecuted).

Wikipedia is treated as a tertiary aggregator throughout (caveats on every Wikipedia-sourced toll); used for the ranges and the named perpetrators, not as a single authoritative figure. No figure or citation was invented.

## Audit

Adversarial source-integrity + tier audit, 2026-06-19 (assume-fake posture). Every cited source was re-fetched/re-searched live; every tier was independently re-derived from the facts before reading the assigned value. Result: **country VERIFIED — all 5 events VERIFIED.** No source found fabricated; no tier found wrong; no invented sources added.

### Source integrity (tried to falsify each)
- **alb-1 (Balkan Wars):** Both Wikipedia articles exist and were fetched live. Toll *low* (~20,000–25,000, Kosovo Vilayet, contemporary — Freundlich/Trotsky/Mjeda Jan 1913) and *high* (~120,000, Kosta Novaković) are BOTH independently sourced — contested toll, but not single-source. WWI article correctly relays nationalist 200,000+ claims only as the disputed upper bound (Wikipedia itself flags those with `failed verification`/`full citation needed`). Dispute disclosed in caveat. PASS.
- **alb-2 (Borovë):** Article fetched live; 107 at Borovë + 18 at Barmash, 98th Regiment / 1st Mountain Division, reprisal for partisan ambush, victims mostly women/children/elderly — all confirmed verbatim. Single source but undisputed; figure consistently reported. PASS.
- **alb-3 (Hoxha terror):** Balkan Insight URL returns HTTP 403 to the fetcher but is a real, live article (confirmed via search index + the 2023/09 follow-up piece); the ~6,000 executed and 5,000+ in unmarked mass graves figures are confirmed from the search snippet. Britannica "Enver Hoxha" returns 403 to fetcher but exists and supports the summary (Stalinist regime, imprisoned/executed/exiled thousands of clergy, landowners, officials). 1951-executions article fetched live: 23 killed (22 + Kaceli) on fabricated Soviet-embassy-bombing charge, on Hoxha's order, victims posthumously declared innocent 1991 — supports the `tier` illustration. PASS (note: two pages 403 to the automated fetcher only; both verified to exist and support their claims via search).
- **alb-4 (Skanderbeg):** Article fetched live; 400+ Andrijevica, ~550 Velika (28 Jul 1944, w/ Prinz Eugen), 281 Jews arrested Pristina 14 May 1944 → Bergen-Belsen, 510 Jews/communists/anti-fascists apprehended 28 May–5 Jul, Noel Malcolm "most shameful episode," Shaban Sinani disputes the deportation role — all confirmed. PASS.
- **alb-5 (Cham):** Article fetched live; ~1,065 Greeks killed, ~600 Operation Augustus (Jul–Aug 1943), ~201 Paramythia (Sep 1943), Dino brothers (Nuri/Mazar), 70 villages destroyed — confirmed. Greek–Albanian historiographical dispute over casualty figures and *collective* responsibility independently confirmed via separate scholarship (academia.edu, Historical Dialogues network). PASS.

### Toll low/high coverage
Both ends sourced for the contested tolls: alb-1 (25k low / 120k high), alb-4 (950 low / 1,000 high — both inside documented massacre totals), alb-5 (1,000 low / 1,065 high). alb-2 undisputed (107 firm). alb-3 low (~5,000–6,000 executed) well-attested; high (~25,000 incl. camp/prison deaths) properly quarantined as disputed/incompletely documented (Sigurimi archives only partly opened) in `toll.note`. No single-number toll passed off as firm without disclosure.

### Tier re-derivation (independent, before reading assigned)
- alb-1 → **POL** (ethnic-targeted killing + expulsion of a national group, below total extermination). Matches.
- alb-2 → **WAR** (reprisal collective punishment of captive civilians). Matches.
- alb-3 → **POL**. *Scrutinised against the STR-vs-EXT rule.* STR in this atlas is reserved exclusively for structural/conditions-driven death — famine, epidemic disease, forced-labour mortality, demographic collapse (verified across 94 STR uses: all famine/disease/labour). The Hoxha terror is **deliberate** state political killing of opponents and "class enemies," which the atlas consistently tiers POL — cf. the Soviet Great Terror ("mass execution... for fabricated political crimes... POL") and post-WWII Bulgarian communist killing of "class enemies" ("destruction of a political category, so POL"). STR would be WRONG here. **Assigned POL is correct.**
- alb-4 → **WAR** (war crimes against civilians + Holocaust complicity). Matches.
- alb-5 → **WAR** (collaborationist war crimes against civilians). Matches.
No tier or tier_reasoning required correction.

### Status changes
- alb-1: `UNVERIFIED` → **VERIFIED**. The prior UNVERIFIED reflected the unresolved *toll dispute*, not a source-integrity failure. Under the audit rubric, both sources are real and support their claims, both toll ends are sourced, and the dispute is correctly disclosed rather than invented around — so the record is verified *as a record of a contested event*.
- alb-2, alb-3, alb-4, alb-5: `RESEARCHED` → **VERIFIED**.
- Country: `RESEARCHED` → **VERIFIED** (all events VERIFIED).

### Ledgers (law 1)
Both populated (2 victim, 3 perpetrator); no invented balance. PASS.

No invented sources. JSON re-validated (`python3 -m json.tool`) after edits.
