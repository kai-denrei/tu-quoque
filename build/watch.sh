#!/usr/bin/env bash
# watch.sh — re-bump the cache-bust token whenever a source asset changes (dev loop).
set -euo pipefail
cd "$(dirname "$0")/.."
bump() { node build/bump-version.mjs --quiet && echo "bumped → $(cat VERSION)"; }
bump
if command -v fswatch >/dev/null 2>&1; then
  echo "watching (fswatch)…"
  fswatch -o assets data sw.js manifest.webmanifest | while read -r _; do bump; done
else
  echo "fswatch not found — polling every 2s (brew install fswatch for instant)"
  while true; do sleep 2; bump; done
fi
