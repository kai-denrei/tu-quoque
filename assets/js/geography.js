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
    delete qBox.dataset.answered;
    if (i >= ROUND) return finish();
    updateScore();
    if (mode === 'capital') capitalQ();
    else if (mode === 'population') populationQ();
    else nameQ();
  }

  // "Name it": highlight a country, 3-second countdown, flash the name, honor-system self-grade
  function nameQ() {
    const c = pick(pool);
    map.mark(c.iso, 'q-target');
    let t = 3;
    qBox.innerHTML = `
      <div class="quiz-prog">name it · the highlighted country</div>
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
    const sameRegion = pool.filter((c) => c.iso !== ans.iso && c.region === ans.region);
    const distractors = shuffle(sameRegion.length >= 3 ? sameRegion.slice() : pool.filter((c) => c.iso !== ans.iso)).slice(0, 3);
    const options = shuffle([ans, ...distractors]);
    qBox.innerHTML = `
      <div class="quiz-prog">capital · the highlighted country</div>
      <div class="quiz-q">${ans.name}</div>
      <div class="quiz-ask">What is its capital?</div>
      <div class="choices"></div>`;
    const choices = qBox.querySelector('.choices');
    options.forEach((o, idx) => {
      const b = el('button', 'choice');
      b.type = 'button'; b.dataset.iso = o.iso;
      b.innerHTML = `<span class="opt">${String.fromCharCode(65 + idx)}</span>${o.capital}`;
      b.onclick = () => {
        if (qBox.dataset.answered) return;
        qBox.dataset.answered = '1';
        if (o.iso === ans.iso) { b.classList.add('correct'); score++; }
        else { b.classList.add('wrong'); choices.querySelector(`[data-iso="${ans.iso}"]`).classList.add('correct'); }
        showFact(`${ans.name} — capital ${ans.capital}, population ${fmt(ans.population)}.`, i === ROUND - 1);
      };
      choices.append(b);
    });
  }

  function populationQ() {
    const [a, b] = shuffle(pool.slice()).slice(0, 2);
    map.mark(a.iso, 'q-target');
    map.mark(b.iso, 'q-other');
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
