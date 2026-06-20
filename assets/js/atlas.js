// atlas.js — the dual-ledger as a full-screen two-column modal (the signature).
import { country, tiers } from './data.js';
import { openOverlay } from './overlay.js';

let TIERS = null;

const esc = (s) => String(s ?? '').replace(/[&<>]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]));
const fmt = (n) => (n == null ? null : Number(n).toLocaleString('en-US'));

// country note → one sentence + a "more"/"−" toggle (native <details>) so it doesn't eat the screen
function noteHTML(note) {
  if (!note) return '';
  const t = note.trim();
  const m = t.match(/^(.*?[.!?])\s+(.+)$/s);
  if (!m || !m[2].trim()) return `<p class="note">${esc(t)}</p>`;
  return `<details class="note note-collapse"><summary>${esc(m[1])}</summary> ${esc(m[2])}</details>`;
}

function tollLine(toll = {}) {
  let val = esc(toll.display || '');
  if (toll.low != null && toll.high != null) {
    val = `${fmt(toll.low)}–${fmt(toll.high)}${toll.unit ? ' ' + esc(toll.unit) : ''}`;
  }
  return `<div class="toll"><span class="lab">toll</span><span class="val">${val || '—'}</span>${
    toll.disputed ? '<span class="disp">disputed</span>' : ''
  }${toll.note ? `<span class="note">${esc(toll.note)}</span>` : ''}</div>`;
}

function srcLine(sources) {
  if (!sources || !sources.length) return '';
  const items = sources.map((s) => {
    const cite = s.url ? `<a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.cite)}</a>` : esc(s.cite);
    return cite + (s.caveat ? ` <span class="src-caveat">(${esc(s.caveat)})</span>` : '');
  }).join(' · ');
  return `<div class="src"><span class="lab">sources</span> ${items}</div>`;
}

function eventCard(ev) {
  const t = TIERS[ev.tier] || { label: ev.tier || '—', cls: 't4' };
  const reason = ev.tier_reasoning ? ` title="${esc(ev.tier_reasoning)}"` : '';
  const lens = ev.received_lens
    ? `<span class="chip lens" title="how this society's own public memory frames the event">received: ${esc(ev.received_lens)}</span>`
    : '';
  return `<div class="event">
    <h3>${esc(ev.title)}</h3>
    <div class="era">${esc(ev.era)}${ev.era_band ? ' · ' + esc(ev.era_band) : ''}</div>
    <div class="chips">
      <span class="chip tier ${t.cls}"${reason}>${esc(t.label)}</span>
      <span class="chip agent">${esc(ev.agent)}</span>
      ${lens}
      <span class="status-badge status-${esc(ev.status)}">${esc(ev.status)}</span>
    </div>
    ${tollLine(ev.toll)}
    <p>${esc(ev.summary)}</p>
    ${ev.relevance ? `<p class="why">${esc(ev.relevance)}</p>` : ''}
    ${srcLine(ev.sources)}
  </div>`;
}

export async function openLedger(iso, name) {
  if (!TIERS) TIERS = await tiers();
  const card = openOverlay();
  card.classList.add('ledger-modal');
  let c;
  try {
    c = await country(iso);
  } catch (e) {
    card.innerHTML = `<button class="ov-close" data-close>esc</button>
      <div class="ledger-head"><h2 id="ovTitle">${esc(name || iso)}</h2><p class="note">No ledger file for this country yet.</p></div>`;
    return;
  }
  const vic = c.events.filter((e) => e.role === 'victim');
  const perp = c.events.filter((e) => e.role === 'perpetrator');
  card.innerHTML = `
    <button class="ov-close" data-close>esc</button>
    <div class="ledger-head">
      <h2 id="ovTitle">${esc(c.name || name)}</h2>
      <div class="sub">${esc(c.iso)} · ${c.events.length} entries · both ledgers · <span class="status-badge status-${esc(c.status)}">${esc(c.status)}</span></div>
      ${noteHTML(c.note)}
    </div>
    <div class="ledger-cols">
      <section class="ledger-col ledger-col--victim">
        <div class="ledger-col-head"><span>Done to them</span><span class="n">${vic.length}</span></div>
        ${vic.map(eventCard).join('') || '<p class="why">No victim entry yet.</p>'}
      </section>
      <div class="ledger-spine" aria-hidden="true"></div>
      <section class="ledger-col ledger-col--perp">
        <div class="ledger-col-head"><span>In their name</span><span class="n">${perp.length}</span></div>
        ${perp.map(eventCard).join('') || '<p class="why">No perpetrator entry yet.</p>'}
      </section>
    </div>
    <div class="ledger-foot">Intent tiers classify the act, not the nation. There is no country score.</div>`;
}
