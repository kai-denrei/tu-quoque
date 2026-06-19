// overlay.js — single modal host shared by Calibrate, About, etc.
const host = () => document.getElementById('overlay');
const card = () => host().querySelector('.overlay-card');

export function openOverlay() {
  const h = host();
  h.hidden = false;
  document.body.style.overflow = 'hidden';
  const c = card();
  c.scrollTop = 0;
  return c;
}

export function closeOverlay() {
  const h = host();
  if (h.hidden) return;
  h.hidden = true;
  const c = card();
  c.innerHTML = '';
  c.classList.remove('ledger-modal');
  document.body.style.overflow = '';
}
