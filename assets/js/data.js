// data.js — runtime loaders. Appends ?v=VERSION for cache-busting; memoizes the promise.
import { VERSION } from './version.js';

const cache = new Map();

export async function loadJSON(path) {
  if (cache.has(path)) return cache.get(path);
  const p = fetch(`${path}?v=${VERSION}`).then(r => {
    if (!r.ok) throw new Error(`${r.status} loading ${path}`);
    return r.json();
  });
  cache.set(path, p);
  return p;
}

export const world        = () => loadJSON('data/world.json');
export const countryIndex = () => loadJSON('data/countries/index.json');
export const country      = (iso) => loadJSON(`data/countries/${iso}.json`);
export const tiers        = () => loadJSON('data/tiers.json');
export const calibrate    = () => loadJSON('data/calibrate.json');
export const geo          = () => loadJSON('data/geo/reference.json');
