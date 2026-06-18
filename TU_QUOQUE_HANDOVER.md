# TU QUOQUE — handover

> An educational atlas of human atrocity that refuses the single lens.
> Every people on the map appears twice: on the receiving hand and the dishing hand.
> Look history in the eye. No flinching, no flattening, no scoreboard.

Project name: **TU QUOQUE**. Map module: **Both Hands**. Calibration module: **Calibrate Yourself**.
Seed scaffold already built: `both_hands.html` (equirectangular SVG world, dual-ledger panel, intent tiers, calibration overlay). Extend it; do not restart it.

---

## 0. Provenance

This spec is the residue of a long design dialogue. The arguments below are not decoration — they are the editorial constitution. Read §3 and §4 before writing a line of data or copy. The whole project earns its credibility from one move: **symmetry of scrutiny**. Break that and it becomes propaganda with a map.

---

## 1. The thesis, in one breath

Public history defaults to one lens per nation — this one victim, that one villain. Almost always false. Where records survive, nearly every people has been both, often inside the same century. The atlas retires the clean victim and the clean villain **without retiring judgment**. "No one is innocent" is not "everyone is equally guilty." The first is true and humbling. The second is false and corrosive, and it is the failure mode this project exists to defeat.

---

## 2. Inviolable laws

These do not bend for any contributor, agent, or feature.

1. **Two ledgers, always.** Every country profile carries *Done to them* and *In their name*. A country with only one populated ledger is incomplete, not finished.
2. **Tiers classify the act, never the people.** The intent taxonomy (§6.2) tags an event. It never sums into a national score. There is no ranking of countries. Building one is a hard revert.
3. **Tolls are contested ranges, never settled single numbers.** Every figure ships as `[low, high]` with sources for both ends and a dispute note. A bare round number anywhere in the UI is a bug.
4. **Symmetry of scrutiny.** An unflattering fact about the West gets the same acceptance-and-scrutiny as one about anyone else — no inflation, no erasure. Idealising the other and refusing all criticism of home are the same error in two coats. Every essay must carry its own strongest counter (§8).
5. **Comparison class is a visible control, not a hidden default.** Any quantitative claim (§7) re-renders under a frame the user sets. We expose the contested scaffolding; we do not resolve it for the reader.
6. **No invented sources. Ever.** If a citation cannot be found, the claim is omitted or marked `UNVERIFIED`. Hallucinated attributions are the one unforgivable failure.
7. **No PII, fully anonymous outputs.** No contributor names, no personal data, anywhere in shipped files, data, or commit metadata.
8. **No reproduction of copyrighted source text.** Paraphrase. Quote only short, attributed fragments where exact wording carries legal/historical weight. Never reconstruct an article or book from excerpts.

---

## 3. Editorial voice

Target register: **Dan Carlin with a citation discipline.** Narrative, unflinching, morally serious, allergic to moralising. Concrete over abstract — a severed-hand quota receipt, not "colonial abuses." Let the specifics do the moral work; do not editorialise on top of them. The reader should feel the weight and be trusted to judge.

Hard tonal rules:
- Never sentimental, never lurid. Horror is conveyed by precision, not adjectives.
- Name the perpetrator and the victim plainly. Passive voice that hides agency ("mistakes were made", "lives were lost") is banned.
- When a fact is genuinely contested, say so and show the dispute. Manufactured certainty is a tell.
- No "both sides" reflex that flattens. Symmetry means equal scrutiny, not equal verdicts. The Holocaust and a siege-famine are both on the map and are not the same thing.

---

## 4. The two tu quoques (why the title is a knife, not an excuse)

- **Descriptive tu quoque** — "everyone's hands are dirty." True. This is the floor.
- **Fallacious tu quoque** — "you did it too, so my charge against you is void." This is the abuse we are accused of and must never commit.

The title rides the first. The subtitle must signal it, or readers hear the second: *"all the way down — until societies rise up."* The "rise up" is the normative exit. Some societies built institutions that broke the cycle; that is the project's hopeful spine and it lives in the essays and the historical-baseline frame (§7).

---

## 5. Information architecture

```
[ MAP ]  default view — equirectangular SVG world
  ├─ click country → COUNTRY PANEL
  │     ├─ Done to them   (victim ledger)
  │     ├─ In their name  (perpetrator ledger)
  │     └─ Modern profile (links to comparison-class engine, §7)
  ├─ "Calibrate Yourself"  → guess-first numbers exercise (built)
  └─ "About / Method"      → the constitution, tiers, pitfalls (built)

[ COMPARE ]  second top-level view — comparison-class engine (§7)

[ ESSAYS ]   third top-level view — longform (§8)
  the honest essays: Oikophobia, the Western model & its East Asian
  variants, Singapore's illiberal route, Brussels as symbol,
  revealed preference & migration, institutions vs substrate.
```

Three top-level views: **Map**, **Compare**, **Essays**. The map is the hero. Compare is the quantitative companion. Essays are the prose that the map and numbers can't hold.

---

## 6. Data contracts

Pull all data out of the HTML into JSON modules. The HTML is the renderer; the JSON is the truth. Schema is the contract between the renderer and the research agents (§9), so freeze it before dispatch.

### 6.1 `event` (one row in a ledger)

```json
{
  "id": "cod-leopold",
  "country": "COD",
  "role": "victim | perpetrator",
  "title": "The Congo Free State",
  "era": "1885–1908",
  "era_band": "pre-colonial | colonial | modern | contemporary",
  "tier": "EXT | POL | WAR | STR",          // §6.2
  "agent": "Leopold II (personal rule)",     // who did it, plainly
  "toll": { "low": 1000000, "high": 15000000, "unit": "deaths",
            "display": "~1–15 million", "disputed": true,
            "note": "10M is a population-decline estimate often quoted as a death count" },
  "received_lens": "memorial | suppressed | denied | contested | flagellated | triumphal",
  "summary": "1–3 sentences, Carlin register, concrete.",
  "relevance": "why it matters to the dual-lens thesis, 1 sentence.",
  "sources": [ /* §6.4 */ ],
  "status": "SEED | RESEARCHED | VERIFIED"
}
```

`received_lens` is new and load-bearing: it records how that society's *own* public memory frames the event. It makes distortion visible content rather than our editorialising — and it is where the Oikophobia/triumphalism argument becomes data instead of opinion.

### 6.2 Intent tiers (the act, never the nation)

| code | label | definition |
|------|-------|------------|
| EXT | extermination | deliberate destruction of a group as such |
| POL | policy violence | mass killing, forced labour, or repression as deliberate state policy |
| WAR | war atrocity | civilian-targeting violence inside warfare |
| STR | structural / mixed | death dominated by famine, disease, displacement; intent diffuse or contested |

Disease is not intent. A demographic collapse driven by epidemic (e.g. much of the post-1492 Americas) is STR, not EXT, even when conquest is entangled with it. Mis-tiering this is the single most common way to either whitewash or libel — get it right and cite the reasoning.

### 6.3 `country`

```json
{ "iso": "COD", "name": "DR Congo",
  "events": ["cod-leopold", "cod-kongo-slave", "cod-congo-wars"],
  "modern": "compare-engine key (§7)",
  "note": "anything a reader needs to read the ledgers honestly" }
```

### 6.4 `source`

```json
{ "kind": "primary | scholarly | reference | press",
  "cite": "Hochschild, King Leopold's Ghost (1998)",
  "supports": "toll.high | toll.low | summary | tier",
  "url": "optional, archived if possible",
  "caveat": "e.g. 'colonial chronicler, motive to exaggerate'" }
```

Primary sources are the goal (§9). The `caveat` field is mandatory for any source with a known bias — colonial chroniclers, state propaganda organs, partisan NGOs. This is how source-laundering gets caught in the data layer.

### 6.5 `essay` (§8)

```json
{ "id": "oikophobia", "title": "...", "thesis": "one line",
  "body_md": "longform markdown",
  "steelman": "the strongest version of the view",
  "opposing": "the strongest case AGAINST the thesis — mandatory, non-empty",
  "sources": [ /* §6.4 */ ] }
```

`opposing` cannot be empty. An essay without its own best counter does not ship. This field is law 4 made structural.

---

## 7. The comparison-class engine (COMPARE view)

The quantitative companion, and the operational answer to the entire violence argument. **The frame is the primary control, as prominent as the place selector.** Same datum, four frames, watch the verdict move.

Frames:
- `peer` — peer democracies / OECD-rich
- `regional` — geographic neighbours
- `global` — all countries
- `historical` — the same place across time (this is where "until societies rise up" lives — El Salvador's collapse to ~2/100k, California's 1990s vs now)

Datum schema:
```json
{ "place": "Orange County, US", "scope": "subnational | national | city",
  "metric": "homicide_per_100k",
  "value": 2.5, "year": 2023, "source": { /* §6.4 */ },
  "symbolic": false,            // see Brussels note
  "symbolic_note": "" }
```

The UI must render, for a chosen place + metric + frame:
1. the number and its year/source,
2. a **verdict sentence that changes with the frame** ("beats a European capital" → "ordinary for a rich-democracy suburb"),
3. a **frame note** stating what the frame includes and excludes.

**`symbolic` flag** (the Brussels resolution): some comparisons are chosen for symbolic weight, not representativeness — e.g. Brussels as the icon of the European institutional project. When `symbolic: true`, the UI must label it "selected as a symbolic case, not a regional average" so the reader is never misled into reading it as a base rate. This is how a pointed, legitimate comparison stays honest.

Seed metric: `homicide_per_100k` (most internationally comparable; UNODC for nations). Add others later only with equal sourcing discipline. Carry the **migration / revealed-preference** signal as a separate, explicitly-bounded metric — label it as measuring the whole bundle (wages, opportunity, safety, networks), never safety alone.

---

## 8. Essays to write (ESSAYS view)

Each must contain its steelman **and** its strongest counter (§6.5, law 4). These are the distillation of the design dialogue. Theses below; agents draft, a human edits.

1. **The two tu quoques.** Descriptive vs fallacious; why the project rides the first and guards against the second. Counter: when does complicating the lens shade into excusing?
2. **Institutions, not essences.** The humane outcomes cluster in a portable institutional package (rule of law, pluralism, welfare state), not a civilisation or a bloodline. Belgium-now vs Leopold's Belgium: same people, changed institutions. Counter: are institutions really portable, or do they need a substrate that isn't?
3. **The substrate problem.** Japan's high trust predates the Meiji imports and may be what makes them work; constitutions-in-a-box fail without it. Counter: Singapore manufactured order without organic trust — so how necessary is the substrate really?
4. **Singapore's illiberal route.** Peer-beating safety via caning, capital punishment, constrained press, "Asian values" against Western liberalism. Breaks the "liberal → safe" link: several routes up the mountain. Counter: at what cost, and does it scale beyond a city-state?
5. **Japan: in the club, insistent it isn't.** *Wakon yōsai* — Western institutions, Japanese spirit. Institutionally Western, civilisationally adamant it is not. Why this separation is the thing the atlas must protect. Counter: is "Western institutions" even a coherent category once you subtract the West?
6. **Oikophobia.** Scruton's coinage, Bruckner's penitence thesis; the noble-savage reflex and its academic descendants. Counter: "at its peak" is unmeasurable, and the louder current force across the West may be its opposite — sovereigntist triumphalism. Both are single-lens errors.
7. **Brussels as symbol.** The flagship capital of the European project visibly underperforming on basic safety — noteworthy precisely because of what it symbolises. Counter: it is not the European average; symbolic cases must not be read as base rates.
8. **Revealed preference and the feet.** Mass migration toward the US/West as a hard-to-game signal of where the bundle is better. Counter: migration tracks wages+opportunity+safety+networks together, and people migrate toward danger for a big enough economic delta — it is not a clean safety proxy.
9. **The reader's own pitfalls.** Anchoring, the ceiling reflex, "huge" with no referent, proportion-neglect, source-laundering. The epistemics of reading atrocity numbers honestly. (Ties to Calibrate Yourself.)

---

## 9. Sub-agent dispatch protocol

The CLI orchestrates. Freeze the §6 schema first, then fan out.

### Roles

- **Country researchers** (one per country or tight region). Populate both ledgers against `event` schema. Find primary sources first, scholarly second. Tier each event with written reasoning. Fill `toll` as a real range with sources for both ends. Set `received_lens`. Output: a `country/{iso}.json` + a short `notes/{iso}.md` log of what was found, what is contested, what could not be verified.
- **Toll-range auditor.** For every `toll`, confirm low and high each have a source. Flag any single-source or single-number toll. Confirm `disputed` is set wherever scholarship diverges by >~2×. Cross-check against the calibration set.
- **Source-integrity auditor (adversarial).** Attempt to falsify every citation: does the source exist, does it say what is claimed, is its bias flagged in `caveat`? Any unverifiable cite → `status: UNVERIFIED` and quarantine. This agent assumes every citation is fake until proven otherwise.
- **Tier auditor.** Re-tier independently without seeing the first tier; reconcile disagreements with reasoning. Special watch: STR vs EXT confusion (disease vs intent).
- **Essay drafters.** One per §8 essay. Must produce non-empty `opposing`. A second agent writes *only* the counter, blind to the drafter's framing, to keep the steelman honest.
- **Compare-data researcher.** Populate §7 datums from UNODC (nations) and national statistical offices (subnational). Set `symbolic` honestly. Write frame notes.

### Sourcing standard (all research agents)

1. Primary > scholarly synthesis > reference work > reputable press. Record `kind`.
2. Every contested toll: a source for the low end AND the high end.
3. Bias is disclosed, not hidden: colonial chroniclers, state organs, partisan NGOs all get a `caveat`.
4. Paraphrase. Never paste source text. Short attributed fragments only where exact wording matters.
5. Cannot verify → omit or mark `UNVERIFIED`. Never invent.
6. Anonymity: no PII in any output, including logs and commits.

### Definition of done (per country)

Both ledgers populated · every toll a sourced range · every tier reasoned · `received_lens` set · source-integrity pass green · notes log written.

---

## 10. Tech & aesthetic

- **Stack:** vanilla ES modules, no build step. SVG + Canvas 2D. Runs as static files; no framework, no bundler. (Target runner: kainode via Claude Code CLI.)
- **Data:** JSON modules per §6, loaded at runtime; HTML is renderer only.
- **Palette:** near-black `#0a0a0c`; teal `#4db6ac` = victim ledger; amber `#d9a441` = perpetrator ledger; intent-tier ramp rose→steel (`#d1495b` EXT, `#e08a3c` POL, `#c9a227` WAR, `#6c8ea0` STR). OKLCH where practical.
- **Type:** Cormorant (display), EB Garamond (prose), JetBrains Mono (labels, data, tiers).
- **Floor:** responsive to mobile, visible keyboard focus, `prefers-reduced-motion` respected. Already met in the seed.
- **Signature:** the dual ledger — every nation rendered twice, both hands. Keep it the one bold thing; everything around it stays quiet.

---

## 11. Named dead-ends (do not rebuild these)

- A "most evil nations" ranking or any national score. The equivalence machine. Hard no.
- Single-number tolls. Always ranges with dispute shown.
- AI-generated citations. The one unforgivable failure.
- Tiering disease-driven collapse as deliberate extermination (or vice versa).
- Letting the project resolve into "…but the West is actually best." That is the single lens flipped, and it forfeits the credibility the sourcing buys. The honest landing is high-variance and institutional, not triumphal.
- Treating migration as a pure safety proxy. It measures the bundle.
- A hidden default comparison class. The frame is always a visible control.
- Reproducing source paragraphs to "be thorough." Paraphrase, cite, move on.
- Sentimental or lurid prose. Precision carries the horror.

---

## 12. Build order

1. Refactor seed `both_hands.html` to load §6 JSON instead of inline data. (Renderer/data split.)
2. Freeze schemas. Dispatch country researchers + auditors (§9) on the existing 12, then expand.
3. Build COMPARE view + comparison-class engine (§7). Seed with homicide_per_100k.
4. Build ESSAYS view; dispatch essay drafters + blind counter-writers (§8).
5. Adversarial source-integrity pass across everything before any publish.
6. Ship static. Keep `status` fields honest — `SEED`/`UNVERIFIED` content is visibly marked until a human signs off.

---

*Constitution first, data second, polish last. The map is easy; the symmetry is the hard part and the whole point.*
