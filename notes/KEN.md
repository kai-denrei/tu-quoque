# Kenya (KEN) — research log

Built from scratch 2026-06-18 (no prior seed). Real web research via WebSearch + WebFetch.

## Final entry
- **Victim ledger (1 event):** ken-1 — Mau Mau rebellion / Kenya Emergency (1952–1960), British colonial perpetrator.
- **Perpetrator ledger (2 events):** ken-2 — Shifta War counterinsurgency (1963–1968); ken-3 — Wagalla massacre (1984).
- Country status: RESEARCHED. All three events RESEARCHED.

The asymmetry (1 victim / 2 perpetrator) is real and is the dual-lens point: Kenya's mass victimhood was overwhelmingly authored by an external agent (the British Empire), while its strongest documented mass-atrocity record as a perpetrator was authored by the independent Kenyan state against its own northern, mostly ethnic-Somali pastoralist citizens. The note in the JSON explains this.

## What is well established
- **Mau Mau / Kenya Emergency.** British declared State of Emergency Oct 1952. Mass detention without trial (~70,000–150,000 in camps), torture, executions (1,090 hanged), forced villagization of ~1 million-plus Kikuyu. "Migrated archives" surfaced at Hanslope Park confirmed systematic abuse. 2013 settlement: Foreign Secretary William Hague's regret statement to Parliament (6 June 2013), £19.9m for 5,228 claimants, plus a Nairobi memorial — verified from GOV.UK primary source and Leigh Day (the claimants' firm).
- **Wagalla massacre.** 10 Feb 1984, Kenyan Army under Moi, against Degodia Somali men, at Wagalla airstrip; detained, denied food/water, shot. TJRC (est. 2008, reported 2013) called it the worst single human rights violation in Kenya's history.
- **Shifta War.** 1963–1968 secessionist conflict in the Northern Frontier District; Kenyatta government counterinsurgency via Kenya Army + paramilitary General Service Unit (GSU): forced "protected villages" (14 guarded manyattas), exclusion-zone shoot-to-kill, livestock destruction, collective punishment. TJRC Vol. IV classified it a crime against humanity.

## What is contested (tolls — shown as ranges in the JSON)
- **Mau Mau:** official British count ~11,000 killed (incl. 1,090 hanged); David Anderson (Histories of the Hanged, 2005) ~25,000; Caroline Elkins (Imperial Reckoning, 2005, Pulitzer 2006) up to ~300,000 from census extrapolation — DISPUTED by Anderson/Blacker as over-extrapolation. JSON range: low 11,000 (documented killings), high 300,000 (contested demographic estimate), disputed=true, caveat on the Elkins source.
- **Wagalla:** govt 57 (initial) → 380 (revised Oct 2000); TJRC "close to a thousand" but "unable to determine the precise number"; survivors ~5,000. JSON range: low 380, high 5,000, disputed=true.
- **Shifta War:** TJRC official ~2,000 (probably much higher); unofficial ~7,000; NGO 10,000+. JSON range: low 2,000, high 10,000, disputed=true.

## What could NOT be verified / deliberately excluded
- **Detention-camp death count (Mau Mau):** never systematically tallied (disease, starvation, hard labour, abuse). Acknowledged in toll.note rather than given a fabricated figure — this gap is the core of the Elkins-vs-Anderson dispute.
- **2007–08 post-election violence (~1,100–1,400 dead, ~300,000–600,000 displaced):** real and major, but agency was genuinely mixed — ethnic militias/mobs on multiple sides plus police shootings, not a single coordinated state campaign. ICC cases against Kenyatta and Ruto collapsed for weak evidence. Excluded as a discrete *state-perpetrator* event; noted in the country note for completeness. Could be revisited if a future maintainer wants to add it framed as mixed-agency intercommunal violence.
- **Exact forced-villagization population figures** for the Shifta War: sources say "14 manyattas" / "concentration camps" but no firm total displaced; not asserted as a number.

## Real sources consulted
- Wikipedia: Mau Mau rebellion; Wagalla massacre; Shifta War (reference-tier, cross-checked).
- GOV.UK — Statement to Parliament on settlement of Mau Mau claims, 6 June 2013 (primary).
- Leigh Day — "The Mau Mau claims" case page (£19.9m, 5,228/5,000 claimants, apology, memorial).
- David Anderson, Histories of the Hanged (2005) — via search summaries and review sources (~25,000 toll).
- Caroline Elkins, Imperial Reckoning (2005) — via Wikipedia/EBSCO (~300,000, disputed).
- Al Jazeera, "Kenya's Wagalla massacre 30 years later" (27 Feb 2014) — survivor ~5,000 figure, method.
- TJRC Final Report (2013) — via Al Jazeera/Daily Nation/Standard coverage and KNCHR/CSVR-hosted summaries for the Shifta and Wagalla findings.
- ReliefWeb / France 24 / ICC pages — for the excluded 2007–08 PEV context.

## Schema note
Existing files in this repo use event/country status "VERIFIED"; the task spec for this run specified the enum "RESEARCHED|UNVERIFIED" (events) and "RESEARCHED" (wrapper), so this entry uses "RESEARCHED" per the explicit instructions. A maintainer harmonizing the corpus may want to map RESEARCHED→VERIFIED for consistency with the other 27 entries.

## Audit
Adversarial source-integrity + tier audit, 2026-06-18 (assume-fake-until-proven posture). Every source attacked; every toll checked for dual-end sourcing; every tier re-derived from facts before reading the assigned value.

### Verdict: country VERIFIED — all 3 events VERIFIED. 0 quarantined. 1 source URL corrected.

### Source integrity (per event)
- **ken-1 Mau Mau — all 3 sources real and load-bearing.**
  - Anderson, *Histories of the Hanged* (2005): book real (multiple editions, Internet Archive, Pulitzer-finalist author). The ~25,000 conflict toll is correctly attributed ("David Anderson estimates 25,000 people died"; official 12,000 combat figure "likely more than 20,000"); 1,090 executions and ~70,000 detained without trial confirmed. Supports the scholarly mid/low of the contested range — sound.
  - Elkins, *Imperial Reckoning* (2005, Pulitzer 2006): real; ~300,000 figure confirmed on Wikipedia and explicitly disputed by Anderson and demographer John Blacker (Blacker's own counter-estimate ~50,000, mostly children, from malnutrition/disease). Caveat present and accurate. Supports toll.high — sound.
  - Hague statement (GOV.UK, 6 June 2013): PRIMARY source verified verbatim — "sincerely regrets," £19.9m, 5,228 claimants, Nairobi memorial. Both toll ends separately sourced. No quarantine.
- **ken-2 Shifta War — substance fully verified; ONE source URL defect found and corrected.**
  - Original toll.low cite attributed a "TJRC ~2,000" figure but pinned it to the Wikipedia *Shifta War* URL, which does NOT carry any TJRC figure (Wikipedia gives only "thousands"/"4,200+"/">10,000 NGO"). Mis-pinned source → would have failed falsification as-attached.
  - FIX: re-pinned toll.low to the TJRC primary source (KNCHR-hosted Summary of the Final Report, Aug. 2013), text-extracted directly via pdftotext, which states verbatim: "it is estimated that between 2,000 and 7,000 people were killed during the War," plus mass killings/torture/sexual violence by the Military force, forced "restricted villages" (detention camps), cattle poisoning (70–90% loss), Indemnity Act cover-up, and named perpetrators (Brigadiers Ndolo, Mulinge). The ~2,000 low end is now the documented low of the TJRC's own range.
  - toll.high (>10,000 NGO) genuinely appears on the cited Wikipedia page — correct.
  - Crime-against-humanity / "mass punishment of entire communities" framing independently corroborated (TJRC Vol. IV coverage; Daily Nation). Both toll ends sourced.
- **ken-3 Wagalla — all sources real and load-bearing.**
  - Wikipedia: confirms date (10 Feb 1984), Degodia/Degoodi target, official tolls 57 → 380 (revised Oct 2000), survivor ~5,000, airstrip method (denied food/water then executed), and "worst human rights violation in Kenya's history" (verbatim).
  - Al Jazeera (27 Feb 2014): article confirmed live, dated correctly; supports survivor ~5,000, airstrip detention, denial of food/water, decades of state silence; also independently carries the TJRC "close to a thousand."
  - TJRC "close to a thousand" / "unable to determine the precise number": doubly attested (Al Jazeera + JusticeInfo + others). The cite honestly says "as reported." Both toll ends sourced.

### Toll dual-end check
All three events pass the dual-end requirement — low and high are separately sourced, none is a single-source single-number toll. Mau Mau low=11,000 (British official) / high=300,000 (Elkins, caveated as a contested demographic estimate, not a body count); Shifta low=2,000 (TJRC primary) / high=10,000 (NGO, Wikipedia); Wagalla low=380 (revised govt) / high=5,000 (survivors), TJRC ~1,000 noted as the mid.

### Tier re-derivation (done before reading assigned tier — all confirmed POL)
- ken-1: counterinsurgency repression of a colonized population (detention without trial, torture, villagization to break support for the rebellion), not extermination-as-such and not a structurally engineered famine/epidemic, despite Blacker attributing much of the high toll to disease/malnutrition — the campaign's character is political suppression → POL (assigned POL correct; STR correctly NOT applied even though disease drove deaths, because the deaths were a by-product of repression, not the weapon).
- ken-2: state counterinsurgency / collective punishment of an ethnic-regional secessionist population → POL (correct; not EXT — no intent to exterminate the group as such; not STR).
- ken-3: targeted round-up and mass execution of men of one clan as a state security operation → POL (correct; considered EXT given ethnic targeting but rejected — a single operation framed as disarmament/security against a clan in an inter-clan-violence context, not a campaign to destroy the Degodia as a people).
No disease-driven STR miscategorisation present; no EXT inflation. No tier_reasoning rewritten.

### Ledger / law-1 check
Both ledgers populated (1 victim, 2 perpetrator). Asymmetry is genuine and is the dual-lens point; no invented balance demanded.

### Method notes
- KNCHR and CSVR TJRC PDFs are 403/binary to WebFetch; the KNCHR summary was downloaded and text-extracted locally with pdftotext to read the Shifta/Wagalla chapters directly — this is the strongest (primary) corroboration in the file.
- No sources were invented. The only mutation to the data was re-pinning one mis-attributed URL to a verified primary source; all factual claims pre-existed and survived falsification.
