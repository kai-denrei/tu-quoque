// atlas.js — the dual-ledger country panel (the signature).
import { country, tiers } from './data.js';

let TIERS = null;

const esc = (s) => String(s ?? '').replace(/[&<>]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]));
const fmt = (n) => (n == null ? null : Number(n).toLocaleString('en-US'));

export function emptyPanel() {
  return `<div class="panel-empty">
    <span class="glyph">◖◗</span>
    Select a glowing country.<br>Each is shown twice — what was done to it,<br>and what was done in its name.
  </div>`;
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

export async function renderCountry(panel, iso, name) {
  if (!TIERS) TIERS = await tiers();
  let c;
  try {
    c = await country(iso);
  } catch (e) {
    panel.innerHTML = `<div class="panel-empty">No ledger file for ${esc(name || iso)} yet.</div>`;
    return;
  }
  const vic = c.events.filter((e) => e.role === 'victim');
  const perp = c.events.filter((e) => e.role === 'perpetrator');
  panel.innerHTML = `
    <div class="panel-head">
      <h2>${esc(c.name || name)}</h2>
      <div class="sub">${esc(c.iso)} · ${c.events.length} entries · both ledgers · <span class="status-badge status-${esc(c.status)}">${esc(c.status)}</span></div>
      ${c.note ? `<p class="note">${esc(c.note)}</p>` : ''}
    </div>
    <div class="hands">
      <section class="hand hand--victim">
        <div class="hand-label"><span>Done to them</span><span class="n">${vic.length}</span></div>
        ${vic.map(eventCard).join('') || '<p class="why">No victim entry yet in this seed set.</p>'}
      </section>
      <section class="hand hand--perp">
        <div class="hand-label"><span>In their name</span><span class="n">${perp.length}</span></div>
        ${perp.map(eventCard).join('') || '<p class="why">No perpetrator entry yet in this seed set.</p>'}
      </section>
    </div>
    <div class="panel-foot">Intent tiers classify the act, not the nation. There is no country score.</div>`;
  panel.scrollTop = 0;
}
