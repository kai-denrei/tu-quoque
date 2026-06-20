/* sw.js — hand-written service worker (no Workbox; handover §10 = no build step).
 * Cache names are KEYED TO THE CACHE-BUST TOKEN so a version bump wipes stale caches
 * automatically — this is where cache-busting and the PWA meet. */
const VERSION = '9919a3ba'; // rewritten by build/bump-version.mjs
const SHELL_CACHE = `tq-shell-${VERSION}`;
const DATA_CACHE = `tq-data-${VERSION}`;

const SHELL = [
  './', './index.html', './offline.html', './manifest.webmanifest',
  './assets/css/tokens.css', './assets/css/base.css', './assets/css/app.css',
  './assets/js/app.js', './assets/js/data.js', './assets/js/map.js', './assets/js/atlas.js',
  './assets/js/calibrate.js', './assets/js/geography.js', './assets/js/compare.js',
  './assets/js/essays.js', './assets/js/overlay.js', './assets/js/version.js', './assets/js/sw-register.js',
  './assets/js/cb-badge.js',
  './assets/icons/favicon.svg',
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(SHELL_CACHE).then((c) => c.addAll(SHELL)).catch(() => {}));
});

self.addEventListener('activate', (e) => {
  e.waitUntil((async () => {
    if (self.registration.navigationPreload) { try { await self.registration.navigationPreload.enable(); } catch {} }
    const keys = await caches.keys();
    await Promise.all(keys.filter((k) => !k.endsWith(VERSION)).map((k) => caches.delete(k)));
    await self.clients.claim();
  })());
});

self.addEventListener('message', (e) => { if (e.data && e.data.type === 'SKIP_WAITING') self.skipWaiting(); });

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return; // fonts etc. — leave to the browser

  // navigations: network-first (3s), then cached shell, then offline.html
  if (req.mode === 'navigate') {
    e.respondWith((async () => {
      try {
        const preload = await e.preloadResponse; if (preload) return preload;
        const net = await fetch(req);
        const c = await caches.open(SHELL_CACHE); c.put('./index.html', net.clone());
        return net;
      } catch {
        return (await caches.match('./index.html')) || (await caches.match('./offline.html')) || Response.error();
      }
    })());
    return;
  }

  // data JSON: network-first → cache (so a fresh build's ?v= URL pulls live, falls back offline)
  if (url.pathname.includes('/data/')) {
    e.respondWith((async () => {
      try { const net = await fetch(req); const c = await caches.open(DATA_CACHE); c.put(req, net.clone()); return net; }
      catch { return (await caches.match(req)) || Response.error(); }
    })());
    return;
  }

  // shell assets: cache-first → network
  e.respondWith((async () => {
    const hit = await caches.match(req); if (hit) return hit;
    try { const net = await fetch(req); const c = await caches.open(SHELL_CACHE); c.put(req, net.clone()); return net; }
    catch { return Response.error(); }
  })());
});
