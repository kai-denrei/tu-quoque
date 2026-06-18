# Canada (CAN) — research notes

Built from scratch on 2026-06-18. Three events: 2 perpetrator, 1 victim.

## Ledger structure & the asymmetry

Canada's atrocity record is lopsided toward the perpetrator side. The state's
documented mass-atrocity history runs against Indigenous peoples on its own
soil. As a victim of mass atrocity, Canada has comparatively little inflicted
on its civilian population at home — the strongest, best-documented victim case
is its soldiers and POWs killed by Imperial Japan at Hong Kong. I considered the
1917 Halifax Explosion (~1,782–1,963 dead) as a victim event but rejected it:
it was an accidental wartime collision, not a mass atrocity with a perpetrating
agent, so it does not fit the dual-ledger frame. The asymmetry is left honest
in the country note rather than balanced with an invented event.

## Perpetrator side

### can-1 — Indian residential school system (1880s–1996), EXT
- TRC Final Report (2015) named it "cultural genocide." Tiered EXT on the
  deliberate-destruction-of-a-group reading, with the disease-driven death
  mechanism (mostly TB) kept explicit in the toll note per the STR/EXT rule.
- Toll: 4,118 documented deaths (National Residential School Student Death
  Register) is a FLOOR. TRC chair Murray Sinclair estimated 6,000+. Survivor
  orgs cite higher unmarked-grave figures. High end is an estimate, not a count.
- ~150,000 children passed through. Last federally funded school closed 1996.
- Received lens: flagellated (this is now central to Canadian national reckoning
  — apologies, the 2021 unmarked-grave revelations, papal acknowledgement 2022,
  Commons genocide motion Oct 2022).

### can-2 — Prairie "politics of starvation" / Clearing the Plains (1878–1885), POL
- Source: James Daschuk, *Clearing the Plains* (U of Regina Press, 2013).
  Documents Macdonald's deliberate withholding of treaty rations after the bison
  collapse of 1879, food rotting in storehouses, "edge of starvation to reduce
  the expense" policy, health nadir ~1885.
- Tiered POL (starvation-as-state-coercion), distinct from disease-driven STR.
- **Toll left null (event status UNVERIFIED):** the starvation/TB deaths were
  never systematically counted. I did NOT invent a number. The ACT is well
  documented even where the death count is not. Daschuk's genocide framing is
  contested by some historians; the documentary core (withheld rations, stated
  policy, health collapse) is widely accepted — caveat noted in the source.

## Victim side

### can-3 — Hong Kong garrison & POWs / St. Stephen's College massacre (1941–45), WAR
- Imperial Japanese Army war crimes against Canadian "C Force."
- Figures corroborated across Veterans Affairs Canada (official), the Canadian
  Museum for Human Rights, and the Battle-of-Hong-Kong literature:
  - 1,975 Canadians sent; ~290 killed in the Dec 1941 battle; ~267 died in
    captivity; ~557 total (VAC figure). Slight source variance (260–272 POW
    deaths across sources) is captivity-death rounding, not a real dispute.
  - St. Stephen's College, 25 Dec 1941: wounded British/Canadian/Indian soldiers
    bayoneted in beds; nurses raped and murdered; Lt.-Gen. Takeo Itō held
    responsible.
  - Captivity deaths mostly from ~800 cal/day starvation rations under forced
    labour, untreated disease; some direct executions.
- low/high in toll = battle deaths vs. battle+captivity total, NOT a scholarly
  dispute (disputed:false).

## Contested / could not fully verify
- Residential-school death **high end** (6,000+) is an estimate, not a verified
  tally — flagged in toll note and source caveat.
- Starvation-policy death toll: no sourceable number found → null, event marked
  UNVERIFIED. This is the main gap; the country wrapper is still RESEARCHED
  because the events are documented and two of three carry verified figures.
- Daschuk's "genocide" characterization is academically contested; kept as a
  caveat rather than asserted as settled.

## Real sources consulted (URLs in CAN.json)
- TRC of Canada Final Report (2015), via Wikipedia summary.
- CBC News (2021): residential-school death counts.
- Wikipedia: Canadian Indian residential school system; Clearing the Plains;
  St. Stephen's College massacre.
- James Daschuk, *Clearing the Plains* (U of Regina Press, 2013) — publisher page.
- Veterans Affairs Canada: Defence of Hong Kong / POW fact sheet.
- Canadian Museum for Human Rights: "A cauldron of hell."
- (Cross-checked but not cited in JSON: Britannica/Wikipedia Halifax Explosion;
  Beothuk disappearance — Newfoundland Heritage; Native American disease &
  epidemics. Beothuk decline considered for a separate STR event but folded
  conceptually into the broader colonial record rather than given its own row,
  as the Newfoundland colony predates the Canadian state and the toll is tiny
  and uncertain — ~350 people in 1768 down to extinction by ~1829.)

## Audit

Adversarial source-integrity + tier audit, 2026-06-18. Every citation was
treated as fake until proven otherwise via independent web verification.

### Verdict
- Country status: **UNVERIFIED** (one of three events cannot reach VERIFIED).
- can-1 (residential schools): **VERIFIED**
- can-2 (Clearing the Plains / starvation policy): **UNVERIFIED** (toll-only gap)
- can-3 (Hong Kong garrison & POWs): **VERIFIED**

### Source integrity (falsification attempts)
- **can-1.** TRC Final Report (2015) is real. The 4,118 documented-deaths
  figure was independently confirmed: NCTR/TRC research states "at least
  4,118 students had died, mostly from disease," and Sinclair's 6,000+
  estimate was confirmed. ~150,000 children and the "cultural genocide"
  finding both verified. Both toll endpoints carry a source. The CBC cite
  (residential-school-children-deaths-numbers-1.6182456) returned HTTP 403 to
  automated fetch — anti-bot blocking, not a dead link: the URL and headline
  appear as a live search result and match the JSON cite exactly. NOT
  quarantined.
- **can-2.** James Daschuk, *Clearing the Plains* (U of Regina Press, 2013;
  current ed. "Loss of Indigenous Life") is a real book, verified against the
  publisher page, Wikipedia, Google Books, and Oxford Academic. The cited
  title matches the current edition (note: original 2013 subtitle was "Loss of
  Aboriginal Life"; the 2019 edition and publisher page use "Indigenous
  Life" — the JSON cite is the current form, accurate). The Clearing the
  Plains Wikipedia entry confirms the ration-withholding policy, ~1885 nadir,
  and that the genocide framing is Daschuk's argument (caveat correctly flags
  it contested). Sources are SOUND. The event stays UNVERIFIED only because
  the toll is fully null and an auditor has no figure to confirm — held for
  irreducible toll uncertainty, expressly NOT for any source failure. A
  quarantine line to that effect was added to toll.note.
- **can-3.** Veterans Affairs Canada "Defence of Hong Kong" corroborates the
  figures verbatim: "290 men died" (battle), "267 more perished" (captivity)
  = 557 total, from "1,975 Canadians." St. Stephen's College massacre verified
  (wounded British/Canadian/Indian bayoneted; nurses gang-raped and murdered;
  Lt.-Gen. Takeo Itō, 38th Division, held responsible). CMHR "A cauldron of
  hell" is a real, live article matching the cited content. All sources
  verified.

### Toll dual-source check
- can-1: low (4,118) → CBC + TRC; high (6,000) → Sinclair/TRC estimate. Both
  ends sourced. PASS.
- can-2: low and high both null — correctly left null, no invented number.
  This is the reason the event cannot be VERIFIED.
- can-3: low (290) and high (557) both → Veterans Affairs. disputed:false is
  correct; the endpoints are battle-only vs. battle-plus-captivity, not a
  scholarly dispute. PASS.

### Tier re-derivation (derived from facts before reading the assigned tier)
- can-1 → **EXT upheld.** STR-vs-EXT edge case handled correctly: deaths were
  disease-driven (TB), but the tier is keyed to the deliberate destruction of
  a group (forced child removal to erase language/culture — TRC "cultural
  genocide"), with the disease death mechanism kept explicit in the toll note.
  This is exactly the required handling, not a misclassification of a disease
  event as EXT.
- can-2 → **POL upheld.** Defining act is deliberate state policy of
  withholding food to coerce treaty compliance — coercion by deprivation, not
  direct killing and not an uncontrolled epidemic. Not STR.
- can-3 → **WAR upheld.** Combat deaths plus war crimes against soldiers and
  POWs; not a campaign to exterminate Canadians as a group.
No tier corrections were required.

### Ledger / law-1 check
Perpetrator side carries 2 events, victim side 1. The asymmetry is documented
honestly in the country note and these notes (Halifax Explosion rejected as
accidental; no perpetrating agent). No fabricated balancing event — compliant
with law 1; invented balance was not demanded.

### Net changes written to CAN.json
- can-1 status RESEARCHED → VERIFIED; added audit_note.
- can-2 status held UNVERIFIED; added audit_note and a quarantine line in
  toll.note clarifying the gap is toll-only, not source integrity.
- can-3 status RESEARCHED → VERIFIED; added audit_note.
- Country status RESEARCHED → UNVERIFIED (not all events VERIFIED).
- No sources were invented, added, or altered. JSON re-validated as well-formed.
