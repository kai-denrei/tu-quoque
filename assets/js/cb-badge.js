// cb-badge.js — visual cache-bust confirmation (cache-busting skill encoding).
// The build token's first 3 bytes map to 3 glyphs (8 colors × 8 shapes, byte mod 64).
// Same glyphs after reload ⇒ you're on the same build; different glyphs ⇒ a new build shipped.
// Clicking asks the service worker to check for a new version, then reloads.
const COLORS = ['#0080FF', '#4CC4FF', '#99EEFF', '#CCFFFF', '#FFFFCC', '#FFEE99', '#FFC44C', '#FF8000'];
const SHAPES = [
  '<rect x="16" y="16" width="96" height="96" fill="currentColor"/>',                                                                          // filled-square
  '<polygon points="64,16 112,112 16,112" fill="currentColor"/>',                                                                               // filled-triangle
  '<circle cx="64" cy="64" r="48" fill="currentColor"/>',                                                                                       // filled-circle
  '<rect x="16" y="16" width="96" height="40" fill="currentColor"/><rect x="16" y="72" width="96" height="40" fill="currentColor"/>',          // filled-bars
  '<rect x="20" y="20" width="88" height="32" fill="none" stroke="currentColor" stroke-width="8"/><rect x="20" y="76" width="88" height="32" fill="none" stroke="currentColor" stroke-width="8"/>', // hollow-bars
  '<polygon points="64,20 108,108 20,108" fill="none" stroke="currentColor" stroke-width="8"/>',                                                // hollow-triangle
  '<circle cx="64" cy="64" r="44" fill="none" stroke="currentColor" stroke-width="8"/>',                                                        // hollow-circle
  '<rect x="20" y="20" width="88" height="88" fill="none" stroke="currentColor" stroke-width="8"/>',                                            // hollow-square
];

const glyph = (byte) => {
  const cell = byte % 64;
  const color = COLORS[Math.floor(cell / 8)];
  return `<svg viewBox="0 0 128 128" class="cb-glyph" style="color:${color}" aria-hidden="true">${SHAPES[cell % 8]}</svg>`;
};

const firstBytes = (hex, n = 3) => {
  const out = [];
  for (let i = 0; i + 1 < hex.length && out.length < n; i += 2) out.push(parseInt(hex.slice(i, i + 2), 16));
  return out;
};

export function mountBadge(version) {
  const btn = document.createElement('button');
  btn.className = 'cb-badge';
  btn.type = 'button';
  btn.title = `Build ${version} — click to check for the latest version`;
  btn.setAttribute('aria-label', `Build ${version}. Click to reload and check for the latest version.`);
  btn.innerHTML = `<span class="cb-glyphs">${firstBytes(version).map(glyph).join('')}</span><span class="cb-token">${version}</span>`;
  btn.onclick = async () => {
    btn.classList.add('cb-checking');
    try {
      if ('serviceWorker' in navigator) {
        const reg = await navigator.serviceWorker.getRegistration();
        if (reg) await reg.update();      // make the SW re-check for a new version
      }
    } catch { /* ignore */ }
    location.reload();                     // HTML is no-cache → re-fetches with the latest ?v asset tokens
  };
  document.body.appendChild(btn);
}
