// geography.js — the educational on-ramp: a quiz on capitals + population, reusing the map.
// Data is World Bank-sourced (data/geo/reference.json); no values are invented (handover law 6).
import { geo, world } from './data.js';
import { createMap } from './map.js';

const el = (t, c, html) => { const e = document.createElement(t); if (c) e.className = c; if (html != null) e.innerHTML = html; return e; };
const shuffle = (a) => { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const pick = (a) => a[Math.floor(Math.random() * a.length)];
const fmt = (n) => Number(n).toLocaleString('en-US');
const ROUND = 8;

export async function mountLearn(container) {
  const [ref, worldData] = await Promise.all([geo(), world()]);
  const onMap = new Set(worldData.features.map((f) => f.iso));
  const pool = ref.countries.filter((c) => c.capital && c.population != null && onMap.has(c.iso));

  const map = createMap(worldData, { hasSet: new Set(pool.map((c) => c.iso)) });

  container.innerHTML = '';
  const wrap = el('div', 'learn');
  const mapCol = el('div', 'map-col');
  const side = el('div');

  const intro = el('div', 'learn-intro', `
    <h2>Learn the map</h2>
    <p>Capitals and populations · World Bank figures (${ref.year}).</p>`);
  const modeSwitch = el('div', 'mode-switch');
  const scoreLine = el('div', 'score-line');
  const qBox = el('div', 'quiz');

  let mode = 'capital';
  let i = 0, score = 0;
  let advanceTimer = null;

  // ---- magnifier: a zoomed circular lens of one country (so tiny states are visible) ----
  const NS = 'http://www.w3.org/2000/svg';
  const PW = 1000, PH = 500;
  const projX = (lon) => (lon + 180) / 360 * PW;
  const projY = (lat) => (90 - lat) / 180 * PH;
  const ringD = (ring) => {
    let s = '';
    for (let k = 0; k < ring.length; k++) { s += (k ? 'L' : 'M') + projX(ring[k][0]).toFixed(1) + ' ' + projY(ring[k][1]).toFixed(1); }
    return s + 'Z';
  };
  const featureD = (f) => { let d = ''; for (const poly of f.geometry) for (const ring of poly) d += ringD(ring); return d; };
  const bbox = (f) => {
    let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
    for (const poly of f.geometry) for (const ring of poly) for (const [lon, lat] of ring) {
      const x = projX(lon), y = projY(lat);
      if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y;
    }
    return { x0, y0, x1, y1 };
  };
  function buildMagnifier(iso) {
    const target = worldData.features.find((f) => f.iso === iso);
    if (!target) return null;
    const b = bbox(target);
    const size = Math.max(b.x1 - b.x0, b.y1 - b.y0, 2.5);   // min size for point-like countries
    const half = size * 1.7 / 2;                             // padding around the country
    const cx = (b.x0 + b.x1) / 2, cy = (b.y0 + b.y1) / 2;
    const vx0 = cx - half, vx1 = cx + half, vy0 = cy - half, vy1 = cy + half;
    const svg = document.createElementNS(NS, 'svg');
    svg.setAttribute('viewBox', `${vx0} ${vy0} ${half * 2} ${half * 2}`);
    svg.setAttribute('preserveAspectRatio', 'xMidYMid slice');
    for (const f of worldData.features) {                    // faint context — only what overlaps the lens
      if (f.iso === iso) continue;
      const fb = bbox(f);
      if (fb.x1 < vx0 || fb.x0 > vx1 || fb.y1 < vy0 || fb.y0 > vy1) continue;
      const p = document.createElementNS(NS, 'path');
      p.setAttribute('d', featureD(f)); p.setAttribute('class', 'mg-other');
      svg.appendChild(p);
    }
    const tp = document.createElementNS(NS, 'path');
    tp.setAttribute('d', featureD(target)); tp.setAttribute('class', 'mg-target');
    svg.appendChild(tp);
    const wrap = el('div', 'magnifier');
    wrap.appendChild(svg);
    return wrap;
  }

  // place the magnifier as an inset ON the world map (so you see the zoom AND where it is at once)
  function showLens(iso) {
    clearLens();
    const mg = buildMagnifier(iso);
    if (!mg) return;
    const lens = el('div', 'map-lens');
    lens.appendChild(mg);
    map.el.appendChild(lens);
  }
  function clearLens() { map.el.querySelectorAll('.map-lens').forEach((n) => n.remove()); }

  const MODES = [['capital', 'Find the capital'], ['population', 'Which is bigger?'], ['name', 'Name it · 3s']];
  function renderModes() {
    modeSwitch.innerHTML = '';
    for (const [m, label] of MODES) {
      const b = el('button', 'mode-btn' + (m === mode ? ' is-active' : ''));
      b.type = 'button'; b.textContent = label;
      b.onclick = () => { mode = m; start(); };
      modeSwitch.append(b);
    }
  }

  const start = () => { i = 0; score = 0; renderModes(); next(); };
  const updateScore = () => { scoreLine.textContent = `${Math.min(i + 1, ROUND)} / ${ROUND}  ·  score ${score}`; };

  function next() {
    clearTimeout(advanceTimer);
    map.clearMarks();
    clearLens();
    delete qBox.dataset.answered;
    if (i >= ROUND) return finish();
    updateScore();
    if (mode === 'capital') capitalQ();
    else if (mode === 'population') populationQ();
    else nameQ();
  }

  // "Name it": lens on the map (zoom) + pin (location), 3s countdown, flash the name, self-grade
  function nameQ() {
    const c = pick(pool);
    map.mark(c.iso, 'q-target');     // shape highlight
    map.pin(c.iso, 'victim');        // location ring (visible even for tiny countries)
    showLens(c.iso);                 // zoomed lens inset on the map
    let t = 3;
    qBox.innerHTML = `
      <div class="quiz-prog">name it · the country in the lens (see the map)</div>
      <div class="quiz-q name-count" id="ndown">${t}</div>
      <div class="quiz-ask">Recall its name before it flashes…</div>`;
    const dEl = qBox.querySelector('#ndown');
    const tick = () => {
      t--;
      if (t > 0) { dEl.textContent = t; advanceTimer = setTimeout(tick, 1000); }
      else reveal();
    };
    advanceTimer = setTimeout(tick, 1000);
    function reveal() {
      qBox.innerHTML = `
        <div class="quiz-prog">name it</div>
        <div class="quiz-q name-flash">${c.name}</div>
        <div class="quiz-ask">Did you get it? (honor system)</div>
        <div class="choices">
          <button class="choice" data-ok="1"><span class="opt">✓</span>Correct</button>
          <button class="choice" data-ok="0"><span class="opt">✗</span>Incorrect</button>
        </div>`;
      qBox.querySelectorAll('.choice').forEach((b) => (b.onclick = () => {
        if (qBox.dataset.answered) return;
        qBox.dataset.answered = '1';
        if (b.dataset.ok === '1') { b.classList.add('correct'); score++; } else b.classList.add('wrong');
        showFact(`${c.name} — capital ${c.capital}, population ${fmt(c.population)}.`);
      }));
    }
  }

  function showFact(text) {
    qBox.append(el('div', 'geo-fact', text));
    // auto-advance — no need to press next every time
    advanceTimer = setTimeout(() => { i++; next(); }, 1600);
  }

  function capitalQ() {
    const ans = pick(pool);
    map.mark(ans.iso, 'q-target');
    map.pin(ans.iso, 'victim');   // location ring on the world map
    showLens(ans.iso);            // zoomed lens inset so small countries are visible
    const sameRegion = pool.filter((c) => c.iso !== ans.iso && c.region === ans.region);
    const distractors = shuffle(sameRegion.length >= 3 ? sameRegion.slice() : pool.filter((c) => c.iso !== ans.iso)).slice(0, 3);
    const options = shuffle([ans, ...distractors]);
    // 3s recall window with NO choices, then reveal them one by one
    let t = 3;
    qBox.innerHTML = `
      <div class="quiz-prog">capital · the highlighted country</div>
      <div class="quiz-q">${ans.name}</div>
      <div class="quiz-ask">What is its capital? <span class="recall" id="rc">${t}</span></div>
      <div class="choices" id="choices"></div>`;
    const rc = qBox.querySelector('#rc');
    const tick = () => {
      t--;
      if (t > 0) { rc.textContent = t; advanceTimer = setTimeout(tick, 1000); }
      else { rc.textContent = ''; revealChoices(); }
    };
    advanceTimer = setTimeout(tick, 1000);

    function choose(o, b, choices) {
      if (qBox.dataset.answered) return;
      qBox.dataset.answered = '1';
      if (o.iso === ans.iso) { b.classList.add('correct'); score++; }
      else { b.classList.add('wrong'); choices.querySelector(`[data-iso="${ans.iso}"]`).classList.add('correct'); }
      showFact(`${ans.name} — capital ${ans.capital}, population ${fmt(ans.population)}.`);
    }
    function revealChoices() {
      const choices = qBox.querySelector('#choices');
      options.forEach((o, idx) => {
        const b = el('button', 'choice choice-in');
        b.style.animationDelay = (idx * 0.22) + 's';      // appear one by one
        b.type = 'button'; b.dataset.iso = o.iso;
        b.innerHTML = `<span class="opt">${String.fromCharCode(65 + idx)}</span>${o.capital}`;
        b.onclick = () => choose(o, b, choices);
        choices.append(b);
      });
    }
  }

  function populationQ() {
    const [a, b] = shuffle(pool.slice()).slice(0, 2);
    map.mark(a.iso, 'q-target');
    map.mark(b.iso, 'q-other');
    map.pin(a.iso, 'victim');     // teal ring
    map.pin(b.iso, 'perp');       // amber ring — both locations visible regardless of size
    qBox.innerHTML = `
      <div class="quiz-prog">population · teal vs amber on the map</div>
      <div class="quiz-q">Which has more people?</div>
      <div class="quiz-ask">&nbsp;</div>
      <div class="choices"></div>`;
    const choices = qBox.querySelector('.choices');
    const pair = [a, b];
    pair.forEach((o, idx) => {
      const btn = el('button', 'choice');
      btn.type = 'button';
      btn.innerHTML = `<span class="opt">${idx === 0 ? '◖' : '◗'}</span>${o.name}`;
      btn.onclick = () => {
        if (qBox.dataset.answered) return;
        qBox.dataset.answered = '1';
        const other = idx === 0 ? b : a;
        if (o.population >= other.population) { btn.classList.add('correct'); score++; }
        else btn.classList.add('wrong');
        [...choices.children].forEach((cEl, ci) => { if (pair[ci].population >= pair[1 - ci].population) cEl.classList.add('correct'); });
        showFact(`${a.name}: ${fmt(a.population)}  ·  ${b.name}: ${fmt(b.population)}  (${ref.year}).`, i === ROUND - 1);
      };
      choices.append(btn);
    });
  }

  function finish() {
    map.clearMarks();
    const verdict = score === ROUND ? 'Cartographer.' : score >= ROUND * 0.6 ? 'Well-travelled.' : 'The map rewards a second run.';
    qBox.innerHTML = `
      <div class="scorecard">
        <div class="big">${score} / ${ROUND}</div>
        <p class="note">${verdict}</p>
        <button class="btn quiz-next" type="button">play again</button>
      </div>`;
    qBox.querySelector('.quiz-next').onclick = start;
  }

  side.append(intro, modeSwitch, scoreLine, qBox);
  mapCol.append(map.el);
  wrap.append(mapCol, side);
  container.append(wrap);
  start();
}
