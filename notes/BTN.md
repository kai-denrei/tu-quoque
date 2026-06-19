# Bhutan (BTN) — research notes

Built from scratch on 2026-06-19. Status: RESEARCHED. Two events, one per ledger.

## Summary of findings

Bhutan's two ledgers are strongly asymmetric, and the asymmetry is the point:

- **Perpetrator (heavy, well documented):** the 1988–mid-1990s expulsion of the
  Lhotshampa (ethnic Nepalis of southern Bhutan). Roughly one-sixth of the
  population — over 100,000 people — was stripped of citizenship and driven
  into refugee camps in Nepal. Human Rights Watch calls it ethnic cleansing.
- **Victim (genuinely thin):** Bhutan, a small never-colonised Himalayan
  Buddhist kingdom, has little documented history of being on the receiving end
  of mass atrocity. The clearest case is the 1864–65 Duar War, a British war of
  conquest that cost Bhutan a fifth of its territory but only ~100–200
  battlefield casualties. It is entered as a WAR-tier event, not a mass-death one.

No victim event was invented to balance the much heavier perpetrator ledger.
The asymmetry is explained in the country `note`.

## btn-1 — Expulsion of the Lhotshampa (perpetrator, POL, 1988–1996)

- **Agent:** Bhutanese government under King Jigme Singye Wangchuck + Royal Bhutan
  Army / state security forces. Instruments: 1985 Citizenship Act, 1988 southern
  census (reclassified Nepali-heritage residents as illegal immigrants), and the
  "One Nation, One People" / Driglam Namzha cultural-and-dress code (made
  mandatory 1989; Nepali dropped as a language of instruction the same year).
- **Toll:** expressed as PEOPLE EXPELLED / MADE STATELESS, **not deaths.**
  Low 100,000 / high 108,000. By end-1992 already >80,000 in UNHCR camps in
  southeastern Nepal; HRW cites ~108,000; ~85,544 still in camps by 2010.
  Resettlement to third countries began 2007 (Core Group of 8 states).
- **Documented violence (anchors the POL tier):** Amnesty International reported
  several thousand southern Bhutanese imprisoned and **more than 2,000 tortured**;
  credible refugee/HR accounts of mass rape of ethnic Nepali women in 1991–92,
  some reported to have died as a result. Abuses peaked in the 18 months after
  the September 1990 disturbances and declined significantly from mid-1992.
- **Why POL not EXT:** deliberate expulsion of an ethnolinguistic group with
  documented torture/rape, but no established mass-killing programme — ethnic
  cleansing rather than extermination.

### Contested / could NOT be verified
- **No reliable death count exists** for the campaign or the camps. This is the
  key gap. The toll is therefore a displacement count, and the toll `note`
  carries the caveat explicitly. (The schema's `unit` field is "deaths" by
  template, but the note states the figure is displacement.)
- Exact share of population is cited variously as "one-sixth" (HRW, contemporary)
  up to "~35%" (2008 US State Department, of the Lhotshampa population at that
  time). Used the conservative one-sixth framing in the summary.

## btn-2 — Duar War / British annexation of the Duars (victim, WAR, 1864–65)

- **Agent:** British Empire / British Indian Army (punitive expedition under
  Sir Henry Tombs), invading after the collapse of Ashley Eden's 1863 mission.
- **Toll:** ~100–200 Bhutanese casualties (killed + wounded; no clean killed-only
  split recorded) vs ~40 British killed and 100–150 wounded. Small five-month war.
- **Larger consequence:** Bhutan lost ~20% of its territory (Assam Duars, Bengal
  Duars, Dewangiri tract) under the Treaty of Sinchula (11 Nov 1865), in exchange
  for a 50,000-rupee annual subsidy. The fertile lowlands were gone permanently.
- **Why WAR:** conventional war of imperial conquest, modest battlefield toll, no
  group-destruction or demographic-collapse component.

### Contested / could NOT be verified
- Bhutan did conduct earlier border raids into Assam/Cooch Behar/Sikkim, but
  modern historians read the British invasion as imperialist expansion (tea-land
  and trade interests) using the raids as pretext. So Bhutan is the victim of
  conquest, not the clean aggressor.

## Events considered and NOT entered (no sourceable toll)
- **17th-century Tibetan and Tibetan-Mongol invasions** (seven Tibetan wars
  1616–1679; later incursions through ~1714). Real and recorded, but **no
  sourceable death tolls** — left out rather than guessed.
- **18th-/19th-century internal civil wars** (succession conflicts among regional
  governors, e.g. from 1728). Recorded but no documented mass-death figures.
- No documented famine or epidemic mass-death event surfaced for Bhutan.

## Real sources consulted
- Human Rights Watch, "Bhutan's ethnic cleansing" (1 Feb 2008) —
  https://www.hrw.org/news/2008/02/01/bhutans-ethnic-cleansing
- Wikipedia, "Ethnic cleansing of Lhotshampa in Bhutan" —
  https://en.wikipedia.org/wiki/Ethnic_cleansing_of_Lhotshampa_in_Bhutan
- Wikipedia, "Lhotshampa" — https://en.wikipedia.org/wiki/Lhotshampa
- The Record (Nepal), "Bhutan's shame: why the world must continue to remember
  the expulsion of ethnic Nepalis" (relays Amnesty International findings) —
  https://www.recordnepal.com/bhutans-shame-why-the-world-must-continue-to-remember-the-expulsion-of-ethnic-nepalis
- US State Department, "Bhutanese Refugees in Nepal" (corroborates >100,000 in
  camps; resettlement program from 2006) —
  https://2009-2017.state.gov/j/prm/policyissues/issues/protracted/countries/157400.htm
- Wikipedia, "Duar War" — https://en.wikipedia.org/wiki/Duar_War
- FIBIwiki (Families in British India Society), "Duar War" —
  https://wiki.fibis.org/w/Duar_War

### Sources attempted but blocked
- The Diplomat, "Bhutan's Dark Secret: The Lhotshampa Expulsion" — HTTP 403.
- Refworld 1995 WriteNet report on the exodus from southern Bhutan — HTTP 403.
  (Both corroborated indirectly via search-result excerpts; not relied on for
  any unique number.)
- USHMM Early Warning Project Bhutan page — fetch returned only nav chrome, no
  analysis content.

## Audit

Adversarial source-integrity + tier audit, 2026-06-19. Premise: every citation
fake until proven otherwise. Verdict: **country VERIFIED** (both events VERIFIED
after two citation corrections). No invented sources; no fabricated tolls.

### Sources falsified / verified

**btn-1 — Lhotshampa expulsion (POL)**
- **HRW 'Bhutan's ethnic cleansing' (2008)** — VERIFIED. Page live and by HRW
  (Bill Frelick). Confirmed verbatim: title term "ethnic cleansing", "about
  108,000 of these stateless Bhutanese … in seven refugee camps in Nepal",
  "stripped about one-sixth of the population of their citizenship", and the
  forced renunciation ("sign forms renouncing claims to their homes"). Supports
  the summary as cited.
- **Wikipedia 'Ethnic cleansing of Lhotshampa'** — VERIFIED for toll.high.
  Confirms "over 100,000 by the end of 1993", "85,544 refugees remained" (Jan
  2010), 1988–1993 peak, 35% population share. Anchors the displacement range.
- **The Record (Nepal) 'Bhutan's shame'** — **FALSIFIED as a citation / CORRECTED.**
  The article is real (Prasansha Rimal, 3 Feb 2022) but does NOT carry the
  ">2,000 tortured / several thousand imprisoned" figures attributed to it; it
  relays AI framing only. Those numbers trace to **Amnesty International's own
  reports** — 'Human Rights Violations Against the Nepali-speaking Population in
  the South' (ASA 14/004/1992) and 'Forcible Exile' (ASA 14/004/1994), both
  confirmed to exist and to document arbitrary detention, torture incl. rape,
  and deaths in custody. Citation re-pointed to the AI primary source
  (amnesty.org/en/documents/asa14/004/1992/en/); `supports` stays "tier".

**btn-2 — Duar War (WAR)**
- **Wikipedia 'Duar War'** — VERIFIED. States both ends: "100 to 200" Bhutanese
  vs "40 killed in action and 100 to 150 wounded" British; Treaty of Sinchula
  (11 Nov 1865), ~one-fifth territory, 50,000-rupee subsidy. Re-pointed from
  "summary" to **toll.high** so the contested toll has a real source carrying
  both low (100) and high (200). Corroborated by onwar.com (same figures).
- **FIBIwiki 'Duar War'** — **FALSIFIED as a toll citation / CORRECTED.** Page
  is real and covers the campaign (12 Nov 1864 declaration, four-column advance)
  and Treaty terms (Assam/Bengal Duars + 83 km² Dewangiri, 50,000-rupee
  subsidy), but carries **NO casualty numbers** — so it cannot support toll.high
  as originally claimed. Re-pointed to "summary", which it genuinely corroborates.

### Toll low/high check
- btn-1: low 100,000 / high 108,000 — both ends sourced (low: HRW + Wikipedia +
  end-1992 >80,000; high: HRW "about 108,000"). Displacement count, not deaths;
  the death-count gap is quarantined in toll.note as designed — correct.
- btn-2: low 100 / high 200 — both ends carried by the Wikipedia Duar War source,
  corroborated by onwar.com. Not single-number; not single-source.

### Tier re-derivation (done before reading assigned tiers)
- btn-1: ethnic expulsion + documented torture/rape but no mass-killing
  programme, not disease-driven → **POL**. Matches assigned. STR/EXT rule n/a.
- btn-2: conventional inter-state war of conquest, modest battlefield toll, no
  group-destruction → **WAR**. Matches assigned.
- No tier changes required.

### Ledger / law-1 check
Both ledgers populated (perpetrator btn-1, victim btn-2). Asymmetry is genuine
and explained in the country note; no balance was invented. Compliant.
