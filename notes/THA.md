# Thailand (THA) — research notes

Built from scratch on 2026-06-18. Three events: one victim, two perpetrator. Both ledgers populated.

## Ledger summary

**Done to them (victim)**
- `tha-1` Fall of Ayutthaya, 1765–67 — Burmese Konbaung army under Hsinbyushin sacks and burns the Siamese capital, deports tens of thousands. WAR tier. Status UNVERIFIED (toll).

**In their name (perpetrator)**
- `tha-2` Razing of Vientiane / Lao deportation, 1827–28 — Rama III's Siam destroys the Lao capital and forcibly deports the population. WAR tier. Status UNVERIFIED (toll).
- `tha-3` Tak Bai massacre, 2004 — Thai army/police kill 85 Malay Muslims (7 shot, 78 suffocated in trucks). POL tier. Status RESEARCHED.

## What is solid

- **Tak Bai (2004): 85 deaths, 7 shot + 78 asphyxiated/crushed.** This figure is consistent across the 2009 Songkhla provincial-court inquest, Human Rights Watch, Al Jazeera, and contemporary press. Not disputed. HRW (Oct 2024) also confirms named commanders and that the 20-year statute of limitations lapsed in Oct 2024 with the indicted having fled. This is the cleanest, best-documented event in the file.
- **Ayutthaya deportation magnitude (~30,000).** The figure of ~30,000 captives deported to Burma (royals, craftsmen, scholars among them) is consistent across Wikipedia, the KMUTT Library translated-chronicle chapter, and general histories. Burmese chronicles claim up to 100,000; historians settle on "tens of thousands." The physical destruction (palaces/temples burned, Buddha images melted for gold, 9–15 days of fires) is well-attested in chronicle and missionary sources.
- **Vientiane razing + Anouvong's fate.** That Siam under Rama III razed Vientiane (1827–28), abolished the kingdom, and that Anouvong was captured, caged in Bangkok and died there (early 1829) is solidly attested (Wikipedia, plus the widely-quoted John Crawfurd eyewitness account of the iron cage). Command structure (Sakdiphonlasep as supreme commander, Bodindecha leading ~8,000) confirmed.

## What is contested / could NOT be verified

- **Ayutthaya death count.** The dramatic "200,000 civilians killed" and "one million population" are Wikipedia INFOBOX figures with no cited scholarly source; widely treated as inflated. I refused to use them as a death count. The event is anchored on the deportation figure instead, and `tha-1` is marked **UNVERIFIED** on toll. The low/high in the toll object are explicitly captive counts (30k–100k), flagged in the note — NOT deaths.
- **Vientiane deportation death toll.** The frequently-repeated claim of "100,000–300,000 deported, two-thirds perished en route" traces ONLY to Grokipedia (an AI-generated reference site) in my searches — I did NOT use it. A Siamese inventory of Vientiane's immediate vicinity recorded ~8,500 captives; broader scholarly summaries say "over 100,000" / "tens of thousands" removed to the Khorat Plateau. Because no reliable death figure exists in the sources I reached, deaths are **null** and `tha-2` is **UNVERIFIED** on toll.
- I could NOT reach a paywalled/print scholarly anchor (Grant Evans, *A Short History of Laos*; Martin Stuart-Fox) for the Lao deportation death toll within this session. Britannica's Ayutthaya page returned HTTP 403.

## Omitted but real (candidates for expansion)

- **6 October 1976 Thammasat University massacre** (perpetrator, against own people). Strong, well-documented event: Royal Thai Police + paramilitaries (Village Scouts, Nawaphon, Red Gaurs) killed leftist students. Official toll ~45–46; scholarly/unofficial estimates "100+"; Ruam Katanyu Foundation claimed "500+". Omitted only to keep to the most significant three and to avoid stacking three perpetrator events; it would make a strong fourth event (era_band contemporary, POL tier). Sources: Wikipedia "6 October 1976 massacre"; TIME (2016); LA Review of Books.
- **Thaksin's 2003 "war on drugs"** (perpetrator). ~2,275–2,873 extrajudicial killings in three months; a 2007 official inquiry found >half (≈1,400) had no link to drugs. Sources: Human Rights Watch ("Not Enough Graves", 2004; 2008 follow-up). Real and well-sourced; a candidate POL-tier event.
- **WWII Thai-Burma "Death Railway"** — NOT added to either ledger. Thailand was a Japanese ally/co-belligerent, not an occupied victim; the railway's victims were Allied POWs and ~200,000 conscripted Asian (largely non-Thai) labourers, and the perpetrator was Imperial Japan. It does not cleanly belong in Thailand's victim OR perpetrator ledger and was deliberately excluded.

## Real sources consulted (this session)

- Wikipedia: "Siege of Ayutthaya (1766–1767)", "Burmese–Siamese War (1765–1767)", "Lao rebellion (1826–1828)", "Tak Bai incident", "6 October 1976 massacre".
- KMUTT Library, "Chapter 5: Events After the Fall of Ayutthaya to Burma" (translated chronicle/missionary accounts).
- Human Rights Watch, "Thailand: 20 Years of Injustice for Tak Bai Massacre Victims" (28 Oct 2024).
- HRW, "Thailand's 'war on drugs'" / "Not Enough Graves" (2004/2008) — for the omitted 2003 candidate.
- TIME, "Thailand Marks 40 Years Since the 1976 Thammasat Massacre" (2016); LA Review of Books, "Unforgettable, Unrememberable" — for the omitted 1976 candidate.
- Anzac Portal / Burma Railway materials — used only to confirm Thailand's WWII status and exclude the Death Railway.
- John Crawfurd eyewitness account of Anouvong's caging (quoted in later histories) — primary, hostile, used illustratively.

## Schema note

Existing country files in this repo use status "VERIFIED"; the task instructions for THA specified the vocabulary "RESEARCHED | UNVERIFIED", which I followed. If the atlas standard is "VERIFIED", `tha-3` and the wrapper would map to that; the two toll-UNVERIFIED events should stay flagged regardless.

## Audit

Adversarial source-integrity + tier audit, 2026-06-18. Every citation was treated as fake until proven otherwise. Tiers were re-derived independently from the facts before reading the assigned tier.

### Verdict
- Country status: **UNVERIFIED** (not all events verified).
- `tha-1` Fall of Ayutthaya — **UNVERIFIED** (toll). Sources OK; no clean death count.
- `tha-2` Razing of Vientiane — **UNVERIFIED** (toll + two source defects fixed). 
- `tha-3` Tak Bai massacre — **VERIFIED** (was RESEARCHED).

### Source integrity — what was checked and found
- **tha-3 (Tak Bai) — PASS.** The HRW report "Thailand: 20 Years of Injustice for Tak Bai Massacre Victims" (28 Oct 2024) was fetched and exists; it gives exactly 85 dead (7 shot + 78 asphyxiated/crushed in trucks) and names the commanders (Pisal Wittanawongkiri/Wattanawongkiri, et al.) — matching the record. Cross-confirmed by Al Jazeera, Wikipedia "Tak Bai incident", and the 29 May 2009 Songkhla provincial-court inquest (death by suffocation in military custody). Toll is a settled single number (85, not disputed) corroborated by ≥4 independent sources, so the single-figure toll is justified, not a single-source defect. Promoted to VERIFIED.
- **tha-1 (Ayutthaya) — sources PASS, toll stays UNVERIFIED.** Both cites exist and support their claims: the KMUTT Library "Chapter 5" page explicitly gives ~30,000 captives and describes temple-burning, gold-stripping of Buddha images, and indiscriminate killing; the Wikipedia siege page confirms commanders (Maha Nawrahta, Ne Myo Thihapate), king (Hsinbyushin), and that the "200,000 civilians killed / one million population" figures are unsourced infobox claims (the 30,000 deportation is cited to a 2013 Bangkok Post article). The toll.low/high (30k Siamese / 100k Burmese-chronicle captives) both have sources and the caveat honestly states these are captive counts, not deaths — so UNVERIFIED-on-toll is the correct, honest call. No change.
- **tha-2 (Vientiane) — TWO DEFECTS, both fixed/quarantined.**
  1. **Misattributed primary source (removed).** The record carried a "John Crawfurd eyewitness account" of Anouvong confined in an iron cage in Bangkok, `url: null`. Crawfurd is a real figure, but his embassy to Siam was in **1822** and his *Journal* published in **1828** — both **predate** Anouvong's capture, caging and death in Bangkok in **January 1829**. He was chronologically incapable of eyewitnessing it. Search instead surfaced the genuine contemporary witness: the French archbishop **Bruguière**, who reported the king's 15 Jan 1829 arrival in a letter dated 1 April 1829. The Crawfurd citation was a load-bearing misattribution and has been replaced with a verifiable scholarly anchor (Ngaosyvathn & Ngaosyvathn, *Paths to Conflagration*, Cornell UP 1998 — confirmed to exist via Cornell University Press and reviewed by Michael Charney), with the misattribution documented in the source caveat.
  2. **Grokipedia-derived figure (quarantined).** The toll.note and display string cited "~8,500 captives from a Siamese inventory of Vientiane's immediate vicinity." On re-check this precise number traces ONLY to Grokipedia — the same AI-generated site the original researcher had already (correctly) rejected for the "two-thirds perished" claim. It appears in no reliable scholarship. Removed from both display and note; the sourced "100,000+ to ~300,000" magnitude (Ngaosyvathn & Ngaosyvathn 1998) is retained. Toll stays UNVERIFIED (deaths null — correct, this was depopulation, not a recorded mass killing).

### Tier re-derivation (independent, against handover §6.2)
- `tha-1` → **WAR** (confirmed). Civilian-targeting violence inside an interstate war; killing flowed from the sack/conquest, not from intent to destroy a people. Not EXT, not STR.
- `tha-2` → **WAR** (confirmed). War-suppression plus deliberate mass deportation to break the polity; intent was depopulation/political destruction of Vientiane, not extermination of the Lao as such. Deaths were not disease-dominated, so not STR; no genocidal intent, so not EXT.
- `tha-3` → **POL** (confirmed). Deliberate state repression of an unarmed civilian protest plus lethal custodial maltreatment. The 78 truck deaths were asphyxiation/crushing from a deliberate, foreseeable state act — custodial killing, NOT a diffuse disease/famine collapse — so the STR-vs-EXT disease trap does not apply; POL is correct.
- No tier corrections required.

### Ledgers (law 1)
Both ledgers populated: victim (tha-1) and perpetrator (tha-2, tha-3). Satisfied without invented balance.

### No invented sources
No source was fabricated. One existing source (Crawfurd) was removed for misattribution and replaced with a verified scholarly work; one figure (8,500) was removed for tracing to an AI-generated site.
