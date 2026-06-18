# Nigeria (NGA) — research notes

Built from scratch on 2026-06-18. Four events, two per ledger, all RESEARCHED.

## Victim ledger ("Done to them")

### nga-1 — Biafran blockade and famine (1967–1970)
- The federal government's blockade of secessionist Biafra cut off food and medicine; starvation was openly declared a weapon by federal leaders (Awolowo: "starvation is one of the weapons of war"; Adekunle's even more extreme statement).
- **Toll is the most contested figure in the entry.** Sources span ~500,000 to ~3 million civilian deaths from starvation/disease; 1–2 million is most commonly cited. No reliable census of Biafra existed; bodies went into mass graves; both Biafran propaganda and the federal government had reasons to distort. I set low=500,000, high=3,000,000, disputed=true.
- This event is the "hinge": the victims were Nigerians (Igbo), but the perpetrating agent was the Nigerian state itself. Flagged in the country note as appearing on both sides.
- Sources: IEG Mainz Online Atlas (scholarly), Wikipedia "Blockade of Biafra" (federal-leader quotes + low bound), Moses/Heerten eds. in Journal of Genocide Research (high estimates + genocide debate).

### nga-2 — Boko Haram insurgency (2009–present)
- low=35,000 (direct battle/one-sided-violence deaths, Borno/Adamawa/Yobe since 2009); high=350,000 (UNDP 2021 estimate through end-2020, of which ~314,000 indirect, mostly under-fives dead from food scarcity/healthcare collapse).
- Independent trackers (Nigeria Security Tracker ~37,530; ACLED ~34,261 through 2018) corroborate the direct figure.
- Tier WAR (armed-conflict mortality, bulk indirect).
- Sources: UNDP report PDF (scholarly), CFR "Boko Haram's Deadly Impact" (NST/ACLED counts), Al Jazeera (press, reports the UN under-five toll).

## Perpetrator ledger ("In their name")

### nga-3 — Asaba massacre (October 1967)
- Nigerian Army 2nd Infantry Division under Murtala Muhammed; killings reportedly ordered by Major Ibrahim Taiwo. Men and boys separated from women under pretext of a "One Nigeria" gathering, then machine-gunned.
- low=373 (Asaba Development Council's incomplete 1981 named list); high=~800 (Bird & Ottanelli's scholarly estimate of 500–800; Quaker relief worker counted 759; Legum 700; eyewitnesses >1,000). No exact count ever made — mass graves, families wiped out down the male line.
- Tier EXT (deliberate destruction of the men/boys of a group in that place).
- Sources: Bird & Ottanelli, *The Asaba Massacre* (Cambridge UP 2017, via the Wikipedia reference that summarizes it); Wikipedia "Asaba massacre" (unit/command + low list).

### nga-4 — Zaria massacre of Shia Muslims (December 2015)
- Nigerian Army killed members of the Islamic Movement in Nigeria (Shia, led by Ibrahim Zakzaky) over 12–14 Dec 2015.
- low=347 (Kaduna state official's admission of bodies in a mass grave near Mando); high=350+ (Amnesty International). Figures converge tightly; the real dispute is the army's denial/cover-up (razed compound, washed bloodstains, removed cartridges — Amnesty findings via satellite + testimony).
- Tier POL. received_lens = "denied" (the state denied and concealed).
- Sources: Amnesty International press release (press, advocacy caveat noted); Wikipedia "2015 Zaria massacre" (corroborated low figure + timeline).

## What is contested / could not be verified
- **Biafra famine toll**: genuinely unresolvable to a precise number — factor-of-six spread. Sourced low and high; kept disputed=true. Did NOT pick a single headline number.
- **Asaba toll**: no exact count exists; highest eyewitness figures (>1,000) exceed the scholarly high (800), so I bounded high at 800 (the defensible scholarly estimate) rather than the eyewitness maximum.
- Considered but NOT included as separate events (to keep to 1–3 per ledger, most significant/best-documented):
  - 1966 anti-Igbo pogrom (8,000–50,000 killed, well-documented victim event) — folded contextually into the country note as the prelude to Biafra rather than a standalone entry; could be added later as a third victim event if the atlas wants more depth.
  - I treated the Biafra blockade as both the canonical victim famine and the state's perpetrator act (noted in the country note) rather than duplicating it as a separate perpetrator event object.

## Real sources consulted (URLs in the JSON)
- IEG Mainz Online Atlas on Humanitarianism — Biafra 1967–1970
- Wikipedia: Blockade of Biafra; Asaba massacre; 2015 Zaria massacre; Boko Haram insurgency; 1966 anti-Igbo pogrom
- Journal of Genocide Research / Routledge — Moses & Heerten, postcolonial conflict & question of genocide
- UNDP, "Assessing the Impact of Conflict on Development in North-East Nigeria" (2021)
- Council on Foreign Relations — "Boko Haram's Deadly Impact"
- Al Jazeera — 24 June 2021, UN/UNDP northeast death toll
- Amnesty International — 2017 Zaria justice press release
- Bird & Ottanelli, *The Asaba Massacre* (Cambridge University Press, 2017)

## Note on status convention
Task spec required event/country status of "RESEARCHED|UNVERIFIED". Existing country files in this repo use "VERIFIED|UNVERIFIED" instead. I followed the task spec (RESEARCHED) as instructed; if the repo convention should win, swap RESEARCHED -> VERIFIED in NGA.json and the index.

## Audit
Adversarial source-integrity + tier audit, 2026-06-18 (assume-fake-until-proven posture). Every source was tested for existence, authorship, and whether it actually supports the specific claim attached to it. Toll low/high were each required to have a backing source. Tiers were re-derived independently from the facts before reading the assigned tier.

**Source integrity — all four events PASS. No fabricated sources found.**
- nga-1 Biafra: IEG Mainz / Online Atlas article confirmed real — author Mie Vestergaard (Roskilde), describes the FMG blockade, 1968 famine, and ~2 million dead. Heerten & Moses, *The Nigeria–Biafra war: postcolonial conflict and the question of genocide* (Journal of Genocide Research 16:2–3, 2014, 169–203) confirmed real and surveys the up-to-3-million high estimate and the genocide-intent debate; the cite also folds in the authors' Routledge edited volume, which is likewise real. Wikipedia 'Blockade of Biafra' confirmed to carry the Awolowo and Adekunle starvation-as-weapon quotes and 'one million or more' deaths.
- nga-2 Boko Haram: UNDP report confirmed real on undp.org — ~350,000 deaths through end-2020, 314,000 indirect, ~35,000 direct, ~324,000 under-fives. CFR 'Boko Haram's Deadly Impact' confirmed — NST 37,530 and ACLED 34,261 deaths 2011–2018, figures matching exactly. Al Jazeera (24 Jun 2021) confirmed.
- nga-3 Asaba: Bird & Ottanelli, *The Asaba Massacre* (Cambridge UP 2017, ISBN 9781107140783, 2018 OHA Book Award) confirmed real; 500–800 estimate and the men/boys-separated-and-machine-gunned account corroborated. Wikipedia 'Asaba massacre' confirms 373 ADC list, 500–800 scholarly, >1,000 eyewitness, and the 2nd Infantry Division / Murtala Muhammed / Major Ibrahim Taiwo command facts.
- nga-4 Zaria: Amnesty International 2017 press release confirmed real — states '>350 IMN members killed 12–14 December 2015' and the Kaduna official's admission of '347 IMN members dumped in a mass grave near Mando.' Wikipedia '2015 Zaria massacre' confirms timeline, perpetrator, victim group, 347 mass grave, ~350 Amnesty, 348 commission.

**Toll — all events have both ends sourced.** Flags raised and fixed:
- nga-1: the cited Wikipedia source supports the ~1-million lower bound, NOT the 500,000 outer-low specifically. Range kept (1–3M is the well-sourced core; 500K is a documented scholarly outlier) but a transparency AUDIT NOTE was added to toll.note and the source caveat, since I will not invent a source for the exact 500,000 figure.

**Tier corrections (re-derived independently, then compared):**
- nga-1 Biafra: POL -> **STR**. Deaths ~90% from starvation/disease and genocidal intent is an unresolved scholarly debate (Heerten & Moses); the tier definition assigns famine/disease-dominated mortality with contested intent to STR. Weaponised starvation does not by itself promote it to POL when the dominant mortality channel is famine and intent is disputed.
- nga-2 Boko Haram: WAR -> **STR**. UNDP's own decomposition puts ~314,000 of ~350,000 (≈90%) as indirect deaths from food scarcity, healthcare collapse and displacement. Per the standing rule that disease/famine-driven mortality is STR (not folded into WAR), the toll-as-a-whole is STR; the ~35,000 direct deaths are the minority channel.
- nga-3 Asaba: **EXT** kept. Deliberate machine-gunning of the men and boys of a town for being Igbo — destruction of a group as such in that place, not disease-driven. STR-vs-EXT test correctly resolves to EXT.
- nga-4 Zaria: **POL** kept. State mass killing of a religious-political movement over three days as deliberate policy; not disease-driven, not group-as-such.

**Other integrity fixes:**
- nga-3: corrected the Bird & Ottanelli source URL from the Wikipedia page to the Cambridge UP book page (the work itself is the cited authority).
- nga-4: removed the over-attribution in toll.note of the 'razed compound / washed bloodstains / removed cartridges' concealment detail to the specific 2017 press release — that finding is from Amnesty's broader 2016 reporting, not the URL cited. The concealment is genuine and Amnesty-documented; only the precise attribution was corrected.

**Result:** all four events VERIFIED; country status VERIFIED. Both ledgers populated (2 victim, 2 perpetrator). No invented sources. JSON re-validated as parseable.
