# South Korea (KOR) — research log

Built from scratch on 2026-06-18. Web tools (WebSearch/WebFetch) loaded and used throughout.

## Ledger shape

- **Victim ("Done to them"): 1 event** — No Gun Ri massacre (1950), US 7th Cavalry killed Korean refugees.
- **Perpetrator ("In their name"): 3 events** — Jeju 4.3 suppression (1948-49), Bodo League executions (1950), ROK massacres of Vietnamese civilians (1966-69).

The asymmetry is deliberate and explained in the country `note`: South Korea's perpetrator record (overwhelmingly its own state killing its own citizens in 1948-50, plus its army abroad in Vietnam) is heavier and better-documented than its victim record. The cleanest case of a *foreign* agent killing Koreans is No Gun Ri, so that anchors the victim side. Jeju and Bodo could be read as "victim" events for the Korean civilians who died, but the *agent* in both is the ROK state, so by the atlas's agency rule they sit in the perpetrator ledger — this overlap is the dual-lens point and is called out in the note, not hidden.

## What is solid

- **No Gun Ri**: 2005 South Korean government inquest certified 150 dead + 13 missing; No Gun Ri Peace Foundation ~250-300; survivors/North Korean reporters ~400. Unit (2nd Bn, 7th Cavalry, 1st Cav Div) and dates (26-29 July 1950) firm. Broke via Pulitzer-winning AP investigation (1999). No US prosecution.
- **Jeju 4.3**: Truth and Reconciliation Commission confirmed 14,373 named victims, estimated up to 30,000 (~10% of island population), attributed 86% of deaths to security forces / 14% to rebels. US Military Government commanded Jeju security until Aug 1948. ~70% of villages burned. President Roh apologised 2003.
- **Bodo League**: scholarly range 60,000-200,000; TRC commissioner Kim Dong-choon estimates at least 100,000. Rhee ordered executions as the war began (late June 1950). League enrolled ~300,000. Concealed for 40 years.
- **Vietnam massacres**: Ha My 135 killed (25 Feb 1968), Phong Nhi-Phong Nhat ~69-79 (12 Feb 1968), both by 2nd ROK Marine Brigade ("Blue Dragon"). 2023 Seoul court first held the state liable; appeal upheld Jan 2025.

## What is contested

- **Bodo League toll** is the widest single range (60k-200k); the government destroyed records and the TRC has confirmed only a fraction (e.g. several thousand at Daejeon) by name. Kept as a sourced range with both ends cited.
- **Jeju toll**: TRC confirmed/estimated 14,000-30,000 used as low/high; Bruce Cumings and others cite up to 80,000 (flagged as the contested upper bound in the toll note, not used as the high anchor).
- **No Gun Ri toll**: ~400 high end leans on North Korean wartime reporting (propaganda incentive flagged in caveat) and survivor estimates.
- **Vietnam total**: Ku Su-jeong ~9,000 across ~80 incidents; 1980s Vietnamese military report ~5,000; later Korean civil-society surveys up to ~10,000 across ~130 incidents. Used 5,000-9,000 as low/high; total is an estimate, not a verified body count, which the toll note states.

## Could NOT verify / limitations

- No precise, name-confirmed body count exists for Bodo League or for the Vietnam massacres in aggregate; both remain sourced ranges, not exact figures. All four events kept `status: RESEARCHED` because each has both a low and a high source from credible reporting/scholarship and a named agent; none required a `null` toll.
- CNN's Vietnam-massacre feature (cnn.com/2018/02/23) returned HTTP 451 (legal block) and was not used; the FES Asia and NPR pieces and the Ku Su-jeong conference figures (via Wikipedia's "South Korea in the Vietnam War") covered the same ground.
- Gwangju Uprising (May 1980, Chun Doo-hwan's military killed 200 official / up to ~2,000 claimed) was researched as a candidate perpetrator event but NOT included — the four selected events are the most historically significant and best-documented for a 1-3-per-ledger entry, and Jeju/Bodo are the dominant internal-perpetrator cases. Gwangju is a strong future addition if the entry is expanded.

## Real sources consulted

- en.wikipedia.org/wiki/No_Gun_Ri_massacre
- en.wikipedia.org/wiki/Bodo_League_massacre
- en.wikipedia.org/wiki/Jeju_uprising
- en.wikipedia.org/wiki/Phong_Nhị_and_Phong_Nhất_massacre
- en.wikipedia.org/wiki/Hà_Mỹ_massacre
- en.wikipedia.org/wiki/South_Korea_in_the_Vietnam_War (Ku Su-jeong figures)
- en.wikipedia.org/wiki/Gwangju_Uprising (candidate, not used)
- pulitzer.org/winners/sang-hun-choe-charles-j-hanley-and-martha-mendoza (AP No Gun Ri investigation)
- scholarspace.manoa.hawaii.edu — Tae-Ung Baik, legal analysis of No Gun Ri
- apjjf.org/do-khiem/2848/article — Do Khiem & Kim Sung-soo on the TRC and Bodo League
- inkstickmedia.com — Jeju 4.3 75th-anniversary piece
- asia.fes.de — Friedrich-Ebert-Stiftung on ROK Vietnam massacres
- npr.org/2023/04/12/1167951366 — 2023 Seoul court ruling on Phong Nhi

## Note on status field

The atlas's existing files (e.g. VNM.json) use `status: "VERIFIED"`, but this task's spec restricts event/wrapper status to `RESEARCHED|UNVERIFIED`. Followed the task spec and used `RESEARCHED` throughout. If alignment with sibling files is preferred, swap `RESEARCHED` → `VERIFIED`.

## Audit

Adversarial source-integrity + tier audit, 2026-06-18. Default assumption: every citation FAKE until proven otherwise. Every source below was falsification-tested via WebFetch/WebSearch against its specific attached claim. Result: **all 4 events VERIFIED; country VERIFIED.** No invented sources found. No tier corrections required. `RESEARCHED` → `VERIFIED` on all four events and the wrapper.

### Source-by-source falsification results

**kor-1 No Gun Ri (3 sources, all real, all support their claims):**
- Wikipedia `No_Gun_Ri_massacre` — confirmed verbatim: 2005 SK inquest "150 dead, 13 missing, 55 wounded"; Peace Foundation 250-300 (2011); survivors + two NK journalists ~400; perpetrator = 2nd Bn, 7th Cavalry, 1st Cav Div; 2001 Army report "an unfortunate tragedy inherent to war and not a deliberate killing." `supports: toll.high` justified; NK-propaganda caveat on the ~400 end is appropriate and present.
- Pulitzer `pulitzer.org/winners/...` — URL returns HTTP 403 to the fetcher (anti-bot), but existence + citation confirmed via WebSearch: AP team (Choe Sang-hun, Charles J. Hanley, Martha Mendoza) won the **2000 Pulitzer for Investigative Reporting** "for revealing... how American soldiers early in the Korean War killed hundreds of Korean civilians... at the No Gun Ri Bridge." Real, supports `summary`. The 403 is access-only, not a fabrication signal — left as-is, not quarantined.
- Baik scholarly article — confirmed real: "A War Crime against an Ally's Civilians: The No Gun Ri Massacre," Tae-Ung Baik, *Notre Dame Journal of Law, Ethics & Public Policy* vol. 15 iss. 2 (2001). The cited `scholarspace.manoa.hawaii.edu` URL is a legitimate full-text copy (canonical also at `scholarship.law.nd.edu/ndjlepp/vol15/iss2/3`). The fetcher couldn't decompress the PDF stream, but title/author/journal/issue all confirmed via WebSearch. Supports `summary`.

**kor-2 Jeju 4.3 (2 sources, both real):**
- Wikipedia `Jeju_uprising` — confirmed verbatim: TRC 14,373 confirmed (86% security forces / 14% insurgents), up to 30,000; Cumings up to 80,000 (*The Korean War: A History*); ~70% of 230 villages burned, 39,000+ houses destroyed; US Army Military Government + KMAG shared responsibility, American colonel commanded Jeju security until Aug 1948. `supports: toll.low` justified. 80,000 correctly flagged as contested upper bound, NOT used as the high anchor.
- Inkstick `75-years-after-jeju-4-3...` — confirmed exists: Jon Letman, 3 Apr 2023; covers ~30,000 / 10% of population, village razing, and the contested US-responsibility question. Advocacy-leaning caveat present and accurate; used for narrative only.

**kor-3 Bodo League (2 sources, both real):**
- Wikipedia `Bodo_League_massacre` — confirmed: "between 60,000 and 200,000 people were killed"; ~300,000 enrolled (article carries a [citation needed] on the enrolment figure — noted, not disqualifying); "Syngman Rhee ordered the massacre"; "concealed... for four decades." `supports: toll.high` justified; the genuinely-contested wide range is honestly flagged.
- APJJF `do-khiem/2848/article` — confirmed real: "Crimes, Concealment and South Korea's Truth and Reconciliation Commission," Japan Focus, 1 Aug 2008. It is an **interview by Do Khiem of Dr Kim Sung-soo** (TRC International Cooperation Team head); cites Commissioner **Kim Dong-choon's at-least-100,000** estimate and the 28 June 1950 start. The cite's "Do Khiem & Kim Sung-soo" authorship is accurate (interviewer + interviewee). Supports `summary`.

**kor-4 ROK in Vietnam (3 sources, all real):**
- Wikipedia `Phong_Nhị_and_Phong_Nhất_massacre` — confirmed: 69 (range 69-79) killed, perpetrator 2nd ROK Marine Brigade, 12 Feb 1968. Supports `summary`.
- FES Asia article — confirmed exists (published 11 Dec 2024): Ho Chi Minh University researcher "more than 80 massacres... about 9,000 victims"; Ha My "killed 151 villagers." `supports: toll.high` justified. Political-foundation caveat present.
- NPR `2023/04/12/1167951366` — confirmed: exact title "A Vietnam War massacre case from 1968 forces a new reckoning in South Korea"; reports the Feb 2023 Seoul court order to compensate Nguyen Thi Thanh (Phong Nhi), state liability, government appeal. Supports `summary`.

### Toll dual-source check (both ends must be sourced)
- kor-1: low 150 (SK inquest) ✓ / high 400 (survivors + NK reporters) ✓ — both sourced; 400-end propaganda risk caveated.
- kor-2: low 14,373 (TRC confirmed) ✓ / high 30,000 (TRC estimate) ✓ — both from official TRC; 80,000 (Cumings) kept as flagged contested ceiling, not the anchor.
- kor-3: low 60,000 ✓ / high 200,000 ✓ — genuinely contested scholarly range, both ends in Wikipedia/scholarship; note honestly states only a fraction is name-confirmed.
- kor-4: low 5,000 ✓ (1980s Vietnamese military report — independently confirmed via WebSearch) / high 9,000 ✓ (Ku Su-jeong, confirmed via 2000 Jeju conference reporting + FES). Both ends sourced; aggregate is an estimate, which the note states.

No single-source / single-number tolls. Every contested toll has independent low and high backing.

### Tier re-derivation (done from facts BEFORE reading assigned tier)
- kor-1: foreign army kills unarmed refugees in wartime retreat → **WAR** (not EXT, not STR, not POL/internal). Assigned WAR. **Correct.**
- kor-2: state counter-insurgency mass killing of own civilians for suspected communism → **POL** (not EXT — political not ethnic-destruction target; not STR — no disease/famine). Assigned POL. **Correct.**
- kor-3: state execution of registered political suspects → **POL** (not EXT, not STR). Assigned POL. **Correct.**
- kor-4: expeditionary army kills villagers abroad in counter-insurgency → **WAR** (not EXT — not a programme to destroy the group as such; not POL — not killing its own citizens). Assigned WAR. **Correct.**
- STR-vs-EXT guard: no disease-driven event present, so no EXT/STR confusion possible here. No corrections.

### Ledger balance (law 1)
Both ledgers populated where the record supports it: 1 victim (No Gun Ri) vs 3 perpetrator (Jeju, Bodo, Vietnam). The asymmetry is real (ROK perpetrator record is heavier/better-documented) and is honestly explained in the country `note` and ledger-shape section — no invented event was added to force balance. Compliant.

### Could-not-fully-fetch (access only, NOT integrity failures — none quarantined)
- Pulitzer URL → HTTP 403 (anti-bot); existence + citation confirmed via WebSearch.
- Baik PDF → fetcher could not decompress the FlateDecode stream; title/author/journal/issue confirmed via WebSearch.
- NPR article → WebFetch timed out twice; existence, exact title, URL, and ruling content confirmed via WebSearch.
None of these are fabrication; all three works are independently real and support their attached claims. No `UNVERIFIED` status and no `toll.note` quarantine were warranted for any event.

**Verdict: 4/4 events VERIFIED, 0 flagged, country VERIFIED.**
