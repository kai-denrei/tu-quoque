// map.js — builds an equirectangular SVG world from data/world.json.
// Returns an API so a fresh map can serve both the atlas and the geography quiz.
const NS = 'http://www.w3.org/2000/svg';
const W = 1000, H = 500;
const proj = ([lon, lat]) => [(lon + 180) / 360 * W, (90 - lat) / 180 * H];

function ringPath(ring) {
  let s = '';
  for (let i = 0; i < ring.length; i++) {
    const [x, y] = proj(ring[i]);
    s += (i ? 'L' : 'M') + x.toFixed(1) + ' ' + y.toFixed(1);
  }
  return s + 'Z';
}

export function createMap(worldData, opts = {}) {
  const { hasSet = new Set(), onHover, onSelect } = opts;

  const frame = document.createElement('div');
  frame.className = 'map-frame';

  const svg = document.createElementNS(NS, 'svg');
  svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
  svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
  svg.classList.add('map-svg');
  svg.setAttribute('role', 'img');
  svg.setAttribute('aria-label', 'Equirectangular world map');

  const centroids = {};
  const byIso = {};

  for (const f of worldData.features) {
    let d = '', cx = 0, cy = 0, np = 0;
    for (const poly of f.geometry) for (const ring of poly) {
      d += ringPath(ring);
      for (const p of ring) { const [x, y] = proj(p); cx += x; cy += y; np++; }
    }
    const path = document.createElementNS(NS, 'path');
    path.setAttribute('d', d);
    path.setAttribute('class', 'country' + (hasSet.has(f.iso) ? ' has' : ''));
    path.dataset.iso = f.iso;
    path.dataset.name = f.name;
    svg.appendChild(path);
    byIso[f.iso] = path;
    if (np) centroids[f.iso] = [cx / np, cy / np];
  }

  for (const iso of hasSet) {
    if (!centroids[iso]) continue;
    const [cx, cy] = centroids[iso];
    const c = document.createElementNS(NS, 'circle');
    c.setAttribute('cx', cx); c.setAttribute('cy', cy); c.setAttribute('r', 2.6);
    c.setAttribute('class', 'dot'); c.dataset.iso = iso;
    svg.appendChild(c);
  }

  const hov = document.createElement('div');
  hov.className = 'map-hover';
  frame.appendChild(svg);
  frame.appendChild(hov);

  svg.addEventListener('mousemove', e => {
    const t = e.target.closest('.country');
    if (t) {
      hov.textContent = t.dataset.name + (hasSet.has(t.dataset.iso) ? '' : ' · no entry');
      const r = frame.getBoundingClientRect();
      hov.style.left = (e.clientX - r.left) + 'px';
      hov.style.top = (e.clientY - r.top) + 'px';
      hov.style.opacity = 1;
      if (onHover) onHover(t.dataset.iso, t.dataset.name);
    } else hov.style.opacity = 0;
  });
  svg.addEventListener('mouseleave', () => (hov.style.opacity = 0));

  if (onSelect) svg.addEventListener('click', e => {
    const t = e.target.closest('.country');
    if (t) onSelect(t.dataset.iso, t.dataset.name, t);
  });

  let selEl = null;
  const api = {
    el: frame, svg, centroids, byIso,
    has: (iso) => hasSet.has(iso),
    setSelected(iso) {
      if (selEl) selEl.classList.remove('sel');
      const p = byIso[iso];
      if (p) { p.classList.add('sel'); selEl = p; }
    },
    clearMarks() {
      svg.querySelectorAll('.q-target,.q-other,.sel').forEach(p => p.classList.remove('q-target', 'q-other', 'sel'));
      svg.querySelectorAll('.map-pin').forEach(p => p.remove());
      selEl = null;
    },
    mark(iso, cls) { if (byIso[iso]) byIso[iso].classList.add(cls); },
    // prominent location ring at a country's centroid — visible even for tiny countries
    pin(iso, cls = '') {
      const c = centroids[iso];
      if (!c) return;
      const ring = document.createElementNS(NS, 'circle');
      ring.setAttribute('cx', c[0]); ring.setAttribute('cy', c[1]); ring.setAttribute('r', 11);
      ring.setAttribute('class', 'map-pin ' + cls);
      svg.appendChild(ring);
    },
  };
  return api;
}
