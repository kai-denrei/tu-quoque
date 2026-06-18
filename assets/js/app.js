// app.js — bootstrap, hash router, overlay wiring, About/Method.
import { world, countryIndex } from './data.js';
import { createMap } from './map.js';
import { renderCountry, emptyPanel } from './atlas.js';
import { openCalibrate } from './calibrate.js';
import { mountLearn } from './geography.js';
import { renderCompare } from './compare.js';
import { renderEssays } from './essays.js';
import { openOverlay, closeOverlay } from './overlay.js';
import { VERSION } from './version.js';

const el = (t, c, html) => { const e = document.createElement(t); if (c) e.className = c; if (html != null) e.innerHTML = html; return e; };

/* ---------- Map view (atlas) ---------- */
async function mountMap(container, arg) {
  const [worldData, idx] = await Promise.all([world(), countryIndex()]);
  const hasSet = new Set(idx.countries.map((c) => c.iso));

  const atlas = el('div', 'atlas');
  const mapCol = el('div', 'map-col');

  const toolbar = el('div', 'map-toolbar');
  const calBtn = el('button', 'btn btn--accent');
  calBtn.type = 'button'; calBtn.textContent = 'Calibrate yourself';
  calBtn.onclick = () => openCalibrate();
  toolbar.append(calBtn, el('span', 'toolbar-hint', 'Tap a glowing country — each appears on both hands.'));

  const panel = el('aside', 'panel');
  panel.id = 'panel';
  panel.innerHTML = emptyPanel();

  const select = (iso, name) => {
    map.setSelected(iso);
    renderCountry(panel, iso, name);
    history.replaceState(null, '', `#/map/${iso}`); // shareable, no remount
  };
  const map = createMap(worldData, { hasSet, onSelect: (iso, name) => { if (hasSet.has(iso)) select(iso, name); } });

  // keyboard-accessible entry to the (few) lit countries — the map paths are mouse/touch only
  const list = el('div', 'geo-fact');
  list.append(el('span', null, 'ledgers&nbsp;·&nbsp;'));
  idx.countries.forEach((c) => {
    const b = el('button', 'chip');
    b.type = 'button'; b.textContent = c.name; b.style.cursor = 'pointer';
    b.onclick = () => select(c.iso, c.name);
    list.append(b);
  });

  mapCol.append(toolbar, map.el, list);
  atlas.append(mapCol, panel);
  container.append(atlas);

  // deep-link: #/map/<ISO> opens that country's ledgers directly
  if (arg && hasSet.has(arg)) {
    const c = idx.countries.find((x) => x.iso === arg);
    select(arg, c ? c.name : arg);
  }
}

/* ---------- ⓘ About this site (identity + method) ---------- */
function openInfo() {
  const card = openOverlay();
  card.innerHTML = `<button class="ov-close" data-close>esc</button>
    <div class="about">
      <h2 id="ovTitle">Tu Quoque</h2>
      <p class="about-tagline">All the Way Down — Until Societies can Climb Out</p>
      <p class="about-sub">escaping the cycles of historical blame</p>
      <p class="about-epi" lang="ja" title="It is better to light a candle than to curse the darkness.">「闇を呪うより、一本の蝋燭を」</p>
      <p>An atlas that refuses the single lens. Every people appears twice — <span class="ink-teal">what was done to them</span> and <span class="ink-amber">what was done in their name</span>. No ranking, no scoreboard.</p>
      <h4>Tiers — the act, never the people</h4>
      <div class="legrow"><span class="chip tier t1">extermination</span><span class="d">Deliberate destruction of a group as such.</span></div>
      <div class="legrow"><span class="chip tier t2">policy violence</span><span class="d">Mass killing or forced labour as deliberate state policy.</span></div>
      <div class="legrow"><span class="chip tier t3">war atrocity</span><span class="d">Civilian-targeting violence inside warfare.</span></div>
      <div class="legrow"><span class="chip tier t4">structural / mixed</span><span class="d">Death dominated by famine, disease, or displacement.</span></div>
      <h4>The numbers</h4>
      <p>Tolls are contested ranges, never settled single figures. <b>Calibrate yourself</b> tests your own anchoring.</p>
      <h4>The exit</h4>
      <p>“All the way down” is the floor, not the verdict. Some societies broke the cycle through institutions — see Compare and Essays.</p>
      <h4>Status</h4>
      <p>v1 prototype. Entries badged <b>SEED</b> / <b>UNVERIFIED</b> until sourced. No invented citations, ever.</p>
    </div>`;
}

/* ---------- router ---------- */
const VIEWS = {
  map: mountMap,
  learn: mountLearn,
  compare: (c) => { c.innerHTML = renderCompare(); },
  essays: (c) => { c.innerHTML = renderEssays(); },
};

function parseHash() {
  const parts = location.hash.replace(/^#\/?/, '').split('/');
  return { view: VIEWS[parts[0]] ? parts[0] : 'map', arg: parts[1] || null };
}

async function route() {
  const { view: v, arg } = parseHash();
  document.querySelectorAll('.navlink[data-view]').forEach((a) => a.classList.toggle('is-active', a.dataset.view === v));
  const view = document.getElementById('view');
  view.innerHTML = '';
  view.classList.remove('view-fade'); void view.offsetWidth; view.classList.add('view-fade');
  try {
    await VIEWS[v](view, arg);
  } catch (e) {
    view.innerHTML = `<p class="dim" style="padding:2rem 0">Could not load this view — ${e.message}</p>`;
    console.error(e);
  }
}

/* ---------- init ---------- */
function init() {
  document.addEventListener('click', (e) => { if (e.target.closest('[data-close]')) closeOverlay(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeOverlay(); });
  document.getElementById('infoBtn').onclick = openInfo;

  window.addEventListener('hashchange', route);
  if (!location.hash) location.hash = '#/map';
  route();

  // cache-bust confirmation badge — same token shown ⇒ you're on the fresh build
  const badge = el('button', 'cb-badge');
  badge.type = 'button';
  badge.textContent = `build ${VERSION}`;
  badge.title = 'Build token (cache-bust). Click to copy.';
  badge.onclick = () => navigator.clipboard && navigator.clipboard.writeText(VERSION);
  document.body.appendChild(badge);

  if ('serviceWorker' in navigator) {
    import('./sw-register.js').catch(() => { /* added in the PWA phase */ });
  }
}
init();
