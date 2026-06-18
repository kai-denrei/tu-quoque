# Cameroon (CMR) — research notes

Built from scratch on 2026-06-18 via web research (WebSearch + WebFetch). Status: RESEARCHED.

## Ledger summary

**Done to them (victim):**
- `cmr-1` German colonial conquest & forced labour (1884–1916) — POL, toll **null** (UNVERIFIED metric)
- `cmr-2` Bamileke War / French "dirty war" against the UPC (1955–1964) — WAR, toll 61,300–400,000 (disputed)

**In their name (perpetrator):**
- `cmr-3` Ahidjo's post-independence repression of the UPC (1960–1971) — POL, toll **null** (folded into cmr-2 to avoid double-count)
- `cmr-4` Government security forces in the Anglophone crisis (2016–present) — WAR, ~6,000–6,500 war-wide total

## What is solid

- **German-era atrocity pattern** is well attested across Britannica, Wikipedia ('Kamerun'), and biographical sources: forced-labour with high mortality, punitive expeditions / village-burnings, the 8 Aug 1914 executions of Rudolf Duala Manga Bell (hanged) and Martin-Paul Samba (firing squad). Execution dates corroborated across multiple sources.
- **Ngarbuh massacre (14 Feb 2020)** is very well documented by HRW: at least 21 killed incl. 13 children + a pregnant woman; Rapid Intervention Battalion soldiers + Fulani militia; no separatists present; false report filed; government later admitted soldiers killed 13. Soldiers later convicted (10-year sentences in 2020; further sentencing reported Feb 2026, criticised by HRW as inadequate).
- **Anglophone crisis war-wide toll** ~6,000–6,500+ since 2016, 200+ villages burned by security forces, ~334,000 IDPs + ~76,000 refugees in Nigeria (Global Centre for R2P). HRW documents abuses by BOTH government AND separatists — hence the dual-lens framing.

## What is contested

- **Bamileke War toll** spans wildly:
  - British embassy (1964): 61,300–76,300 civilian deaths, ~80% Bamileke (used as low anchor)
  - Gen. Max Briand (French commander): ~20,000 in Bamileke region in 1960 alone
  - Le Monde journalist: ~120,000 since 1959 (Bamileke region)
  - Julie Owono (Cameroonian lawyer): 100,000–400,000 for 1959–1964 (used as high anchor)
  - Bernard Droz: ~10,000 in 1955–1959 pre-independence phase
  - Marc Michel: "several tens of thousands"
  - Meredith Terretta: judges hundred-of-thousands figures **"not credible"** — explicit scholarly doubt on the high end, flagged in the toll note.
  - Note: a "France acknowledges 250,000+ Cameroonians killed" headline circulates (globalgong/2015) but is a single secondary claim; I did not adopt it as an anchor. Macron in 2022 acknowledged French "massacres"/"abuses" in Cameroon (AA.com.tr) — used as context, not a toll source.

## What could NOT be verified

- **No reliable aggregate death count for German Kamerun (1884–1916).** Wikipedia's 'Kamerun' article carries its own citation-quality maintenance notice and gives no quantified toll; Britannica describes the pattern but no number. Left toll low/high **null**, event status **UNVERIFIED** for the death metric only (the atrocity pattern is solid). Did NOT invent a figure.
- **Ahidjo-state share of the Bamileke War deaths** is not separable from the wider war toll (most of which fell in the post-1960 years anyway), so cmr-3 toll is **null** by design to avoid double-counting cmr-2. Anchored instead on concrete documented acts (Jan 1964 public executions in Douala/Bafoussam/Edéa; Ouandié firing-squad 15 Jan 1971).

## Dual-lens / structural notes

- The **Bamileke War is genuinely cross-ledger**: French colonial war (victim) that the independent Cameroonian state under Ahidjo continued and finished (perpetrator). Handled as victim event cmr-2 with the perpetrator dimension flagged in `relevance` + the country `note`, plus the discrete state-repression acts isolated in cmr-3.
- The **Anglophone crisis is cross-ledger**: government forces (perpetrator, cmr-4) vs. separatist fighters who also kidnap/kill civilians and attack schools (a victim dimension), flagged in `relevance` and `note` rather than invented as a separate event.

## Real sources consulted

- Encyclopaedia Britannica — "Cameroon: German Kamerun, 1884–1916"
- Wikipedia — "Kamerun", "Cameroon War", "Ngarbuh massacre", "Rudolf Duala Manga Bell", "Martin-Paul Samba", "Ernest Ouandié"
- Human Rights Watch — Ngarbuh reports (Feb & Apr 2020), "These Killings Can Be Stopped" (2018), "Separatist Abuses in Anglophone Regions" (2022)
- Global Centre for the Responsibility to Protect — Cameroon country page
- France 24 / AFP — "Survivors tell of France's 'dirty war' in Cameroon independence" (28 Dec 2019)
- (context only, not cited in JSON: US Holocaust Memorial Museum risk brief, Amnesty International satellite-imagery report 2021, Anadolu/Macron 2022)

## Caveats applied to biased/limited sources

- Global Centre for R2P flagged as atrocity-prevention advocacy org; its 6,500 figure flagged as war-wide, all-sides.
- Wikipedia entries flagged as tertiary aggregators; 'Kamerun' specifically flagged for its citation-quality notice.
- France 24/AFP flagged as journalistic reconstruction decades after events; used for conduct not toll.

## Audit

Adversarial source-integrity + tier audit, 2026-06-18 (Opus 4.8). Posture: assume every citation FAKE until proven otherwise; try to falsify each source against the specific claim it backs.

### Method
Loaded WebSearch + WebFetch. Independently re-fetched or cross-searched every source URL, re-derived each tier from the facts before reading the assigned tier, and confirmed both the low AND high anchors of each contested toll are separately sourced.

### Source-integrity results — ALL CITED WORKS EXIST AND SUPPORT THEIR CLAIMS
- **cmr-1 Britannica '/place/Cameroon/German-Kamerun-1884-1916'** — page returned HTTP 403 to the fetcher (anti-bot), but confirmed REAL via search: it appears as a live Britannica URL and the substance (Douala annexation, labour competition, force used to obtain labour, Puttkammer harshness/flogging/forced labour) is corroborated. Not a fabrication.
- **cmr-1 Wikipedia 'Kamerun'** — real; confirmed it carries the citation-quality maintenance notice (correctly disclosed in the caveat), and that it documents forced labour with "extremely high rates of death," the Nachtigal Falls massacre, and extreme corporal punishments (severed hands/genitals, eye-gouging, decapitation). It does NOT cover the 1914 executions — those are carried by the biographical pages instead; cite is attached to the general summary, acceptable.
- **cmr-1 Bell/Samba cite** — URL is the Manga Bell page only though the cite names both leaders. Verified: Manga Bell hanged 8 Aug 1914 (Manga Bell page); Samba shot by firing squad 8 Aug 1914 (separate 'Martin-Paul Samba' page). Both dates hold. Caveat updated to disclose the combined-cite/single-URL split.
- **cmr-2 Wikipedia 'Cameroon War'** — every toll figure re-verified against the live article: British embassy 61,300–76,300 (~80% Bamileke); Briand ~20,000 (1960); Le Monde ~120,000 (1962 conference, since 1959); Owono 100,000–400,000 (1959–64); Droz ~10,000 (1955–59); Michel "several tens of thousands"; Terretta "not considered credible" for the high end. Low (British) AND high (Owono) anchors are both independently sourced — passes the two-ended-toll requirement.
- **cmr-2 France 24/AFP** — real, exact title confirmed (28 Dec 2019); "tens of thousands killed 1955–1964," survivor testimony. Used for conduct, not toll. OK.
- **cmr-3 Wikipedia 'Ernest Ouandié'** — verified: firing-squad execution 15 Jan 1971 at Bafoussam (public, ~40,000 summoned); Jan 1964 public executions of fifteen captured rebels in Douala/Bafoussam/Edéa. Holds.
- **cmr-4 HRW Ngarbuh (25 Feb 2020)** — verified: at least 21 civilians incl. 13 children + 1 pregnant woman, 14 Feb 2020; 10–15 security-force members incl. Rapid Intervention Battalion + ~30 Fulani; no separatist confrontation; deliberate; false official narrative. Holds.
- **cmr-4 Global Centre for R2P** — verified: "more than 6,500 killed since 2016, actual numbers believed higher"; IDP 334,098; refugees 76,493; 1.5M needing aid. (Page did NOT give a numeric villages-burned figure; the "200+ villages" claim is carried by HRW reporting, which is also cited — acceptable.)
- **cmr-4 HRW 'These Killings Can Be Stopped' (2018)** — verified: documents abuses by BOTH government (EJKs, torture, hundreds of homes burned) AND separatists (school arson, kidnappings, killings) — supports the dual-ledger framing.

No invented sources found. No author/work failed an existence check.

### Tier re-derivation (done before reading assigned tiers) — NO CHANGES
- cmr-1 → POL (colonial domination/forced labour/punitive raids, not group-extermination). Matches.
- cmr-2 → WAR (decade-long counter-insurgency, village-razing, civilians+fighters; NOT EXT — no defined-group-destruction intent; Terretta rejects the genocide framing). Matches.
- cmr-3 → POL (state political killing/executions of opponents). Matches.
- cmr-4 → WAR (armed-conflict atrocity vs civilians; NOT EXT). Matches.
- STR-vs-EXT rule not triggered — no disease-driven event in this record.

### Toll corrections / flags
- **cmr-4 single-source flag ADDED** to toll.note: the 6,000–6,500 war-wide figure rests on Global R2P alone; the 6,000 low is a conservative rounding below the single cited "more than 6,500," NOT an independently-sourced minimum. Flagged, not invalidated. Audit-confirmed displacement figures inlined.
- **cmr-1 quarantine note clarified**: quarantine is on the NUMBER (null toll, genuinely uncounted), not on the sources. Also flagged that the "Hickory Town 1884–85" and "Buea 1894" village examples could NOT be confirmed in the cited pages — relabelled illustrative-pattern only; Nachtigal Falls IS in the cited article.
- cmr-2 / cmr-3 null and two-ended tolls all correctly anchored; cmr-3 null is by anti-double-count design (law 1 respected — both ledgers populated where supported).

### Status decisions
- cmr-1 → **UNVERIFIED** (held: death metric genuinely uncounted/null; sources fine but the number cannot be verified because none exists).
- cmr-2, cmr-3, cmr-4 → promoted RESEARCHED → **VERIFIED** (all sources verified, tolls anchored or appropriately null).
- Country → **UNVERIFIED** (one event, cmr-1, remains UNVERIFIED).

JSON re-validated as well-formed after edits.
