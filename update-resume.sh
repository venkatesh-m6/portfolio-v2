#!/bin/bash
# ─────────────────────────────────────────────────────────────
# update-resume.sh
# Drop this script in: my portfolio/portfolio-v2/
#
# Usage:
#   ./update-resume.sh
#
# It will:
#  1. Find your latest resume PDF (searches Desktop & home)
#  2. Copy it into public/
#  3. Git commit + push to GitHub
#  4. Redeploy to Vercel
# ─────────────────────────────────────────────────────────────

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PUBLIC_DIR="$SCRIPT_DIR/public"
TARGET="$PUBLIC_DIR/venkatesh_resume.pdf"

echo "🔍 Looking for latest resume PDF..."

# Search common locations for the newest PDF named venkatesh_resume.pdf
SOURCE=$(find \
  "$HOME/Desktop/my portfolio" \
  "$HOME/Desktop" \
  "$HOME/Downloads" \
  "$HOME/Documents" \
  -maxdepth 2 -name "venkatesh_resume.pdf" \
  ! -path "*/portfolio-v2/*" \
  -newer "$TARGET" \
  2>/dev/null | head -1)

if [ -z "$SOURCE" ]; then
  echo "⚠️  No newer resume found outside portfolio-v2/public/."
  echo "   Make sure your new resume is named 'venkatesh_resume.pdf'"
  echo "   and placed anywhere on your Desktop or Downloads folder."
  exit 1
fi

echo "📄 Found: $SOURCE"
cp "$SOURCE" "$TARGET"
echo "✅ Copied to public/venkatesh_resume.pdf"

cd "$SCRIPT_DIR"
git add public/venkatesh_resume.pdf
git commit -m "chore: update resume ($(date '+%Y-%m-%d %H:%M'))"
git push origin main
echo "✅ Pushed to GitHub"

echo "🚀 Deploying to Vercel..."
vercel --prod --yes
echo ""
echo "🎉 Done! Your new resume is live at:"
echo "   https://venkatesh-manipati.vercel.app"
