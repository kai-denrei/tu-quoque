// app.js — bootstrap, hash router, overlay wiring, About/Method.
import { world, countryIndex } from './data.js';
import { createMap } from './map.js';
import { openLedger } from './atlas.js';
import { openCalibrate } from './calibrate.js';
import { mountLearn } from './geography.js';
import { renderCompare } from './compare.js';
import { renderEssays } from './essays.js';
import { openOverlay, closeOverlay } from './overlay.js';
import { VERSION } from './version.js';
import { mountBadge } from './cb-badge.js';

const el = (t, c, html) => { const e = document.createElement(t); if (c) e.className = c; if (html != null) e.innerHTML = html; return e; };

/* ---------- Map view (atlas) ---------- */
async function mountMap(container, arg) {
  const [worldData, idx] = await Promise.all([world(), countryIndex()]);
  const hasSet = new Set(idx.countries.map((c) => c.iso));

  const view = el('div', 'map-view');

  const toolbar = el('div', 'map-toolbar');
  const calBtn = el('button', 'btn btn--accent');
  calBtn.type = 'button'; calBtn.textContent = 'Calibrate yourself';
  calBtn.onclick = () => openCalibrate();
  toolbar.append(calBtn, el('span', 'toolbar-hint', 'Tap a glowing country — its full ledger opens.'));

  const select = (iso, name) => {
    map.setSelected(iso);
    openLedger(iso, name);                        // full-screen 2-column ledger
    history.replaceState(null, '', `#/map/${iso}`); // shareable
  };
  const map = createMap(worldData, { hasSet, onSelect: (iso, name) => { if (hasSet.has(iso)) select(iso, name); } });

  // country search — compact, scales to 165, and the reliable way to open a country
  // that's too small to finger-tap on the map (replaces the old all-countries chip wall)
  const searchWrap = el('div', 'country-search');
  const input = el('input');
  input.type = 'text'; input.id = 'cpick'; input.autocomplete = 'off';
  input.placeholder = `Search ${idx.count} countries → open its ledger`;
  input.setAttribute('list', 'country-options');
  input.setAttribute('aria-label', 'Search a country to open its ledger');
  const dl = el('datalist'); dl.id = 'country-options';
  const byName = {};
  idx.countries.forEach((c) => { const o = el('option'); o.value = c.name; dl.append(o); byName[c.name.toLowerCase()] = c; });
  const pickFromInput = () => {
    const c = byName[input.value.trim().toLowerCase()];
    if (c) { select(c.iso, c.name); input.value = ''; }
  };
  input.addEventListener('change', pickFromInput);
  input.addEventListener('keydown', (e) => { if (e.key === 'Enter') pickFromInput(); });
  searchWrap.append(input, dl);

  view.append(toolbar, map.el, searchWrap);
  container.append(view);

  // deep-link: #/map/<ISO> opens that country's ledger directly
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
  closeOverlay(); // navigating views dismisses any open ledger/About/Calibrate modal
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
  // close any overlay; if it was a deep-linked country ledger, drop the ISO from the hash
  const dismiss = () => {
    closeOverlay();
    if (/^#\/map\/.+/.test(location.hash)) history.replaceState(null, '', '#/map');
  };
  document.addEventListener('click', (e) => { if (e.target.closest('[data-close]')) dismiss(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') dismiss(); });
  document.getElementById('infoBtn').onclick = openInfo;

  window.addEventListener('hashchange', route);
  if (!location.hash) location.hash = '#/map';
  route();

  // cache-bust confirmation: 3 glyphs keyed to the build token; click = check for latest + reload
  mountBadge(VERSION);

  if ('serviceWorker' in navigator) {
    import('./sw-register.js').catch(() => { /* added in the PWA phase */ });
  }
}
init();
