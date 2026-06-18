// sw-register.js — registers the SW and wires the consent-gated update toast
// (never skipWaiting() unconditionally — that breaks in-flight sessions).
const run = async () => {
  if (!('serviceWorker' in navigator)) return;
  try {
    const reg = await navigator.serviceWorker.register('sw.js', { scope: './' });

    const promptUpdate = (worker) => {
      if (document.querySelector('.update-toast')) return;
      const bar = document.createElement('div');
      bar.className = 'update-toast';
      bar.innerHTML = 'A newer build is available. <button type="button">Refresh</button>';
      bar.querySelector('button').onclick = () => worker.postMessage({ type: 'SKIP_WAITING' });
      document.body.appendChild(bar);
    };

    if (reg.waiting) promptUpdate(reg.waiting);
    reg.addEventListener('updatefound', () => {
      const nw = reg.installing;
      if (nw) nw.addEventListener('statechange', () => {
        if (nw.state === 'installed' && navigator.serviceWorker.controller) promptUpdate(nw);
      });
    });

    let refreshing = false;
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (refreshing) return; refreshing = true; location.reload();
    });
  } catch { /* service worker is an enhancement; ignore failures */ }
};

if (document.readyState === 'complete') run();
else window.addEventListener('load', run);
