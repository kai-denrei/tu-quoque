#!/usr/bin/env bash
# make-icons.sh — render PWA icons from the duality mark via headless Chrome + sips. No deps.
set -euo pipefail
cd "$(dirname "$0")/.."
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
TMP=$(mktemp -d)

cat > "$TMP/any.html" <<'EOF'
<!doctype html><meta charset=utf-8><style>html,body{margin:0;padding:0}svg{display:block}</style>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="512" height="512">
  <rect width="64" height="64" rx="9" fill="#0a0a0c"/>
  <path d="M31 16 a16 16 0 0 0 0 32 Z" fill="#4db6ac"/>
  <path d="M33 16 a16 16 0 0 1 0 32 Z" fill="#d9a441"/>
  <line x1="32" y1="14" x2="32" y2="50" stroke="#0a0a0c" stroke-width="2"/>
</svg>
EOF

cat > "$TMP/mask.html" <<'EOF'
<!doctype html><meta charset=utf-8><style>html,body{margin:0;padding:0}svg{display:block}</style>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="512" height="512">
  <rect width="64" height="64" fill="#0a0a0c"/>
  <path d="M31 20 a12 12 0 0 0 0 24 Z" fill="#4db6ac"/>
  <path d="M33 20 a12 12 0 0 1 0 24 Z" fill="#d9a441"/>
  <line x1="32" y1="18" x2="32" y2="46" stroke="#0a0a0c" stroke-width="1.6"/>
</svg>
EOF

run() { "$CHROME" --headless=new --disable-gpu --hide-scrollbars --no-first-run \
  --no-default-browser-check --user-data-dir="$TMP/cr" --force-device-scale-factor=1 \
  --window-size=512,512 --screenshot="$1" "file://$2" >/dev/null 2>&1; }

run "assets/icons/icon-512.png" "$TMP/any.html"
run "assets/icons/icon-maskable-512.png" "$TMP/mask.html"
sips -z 192 192 assets/icons/icon-512.png --out assets/icons/icon-192.png >/dev/null
sips -z 180 180 assets/icons/icon-512.png --out assets/icons/icon-180.png >/dev/null
rm -rf "$TMP"
echo "icons:"; ls -1 assets/icons/
