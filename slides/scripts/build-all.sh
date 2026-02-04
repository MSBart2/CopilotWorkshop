#!/bin/bash
set -e

# Build script for all Slidev presentations
# This script builds each .md file in the slides directory as a separate presentation

SLIDES_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
OUTPUT_DIR="${SLIDES_DIR}/dist"

echo "🚀 Building all Slidev presentations..."
echo "📁 Slides directory: ${SLIDES_DIR}"
echo "📦 Output directory: ${OUTPUT_DIR}"
echo ""

# Create output directory
mkdir -p "${OUTPUT_DIR}"

# Find all .md files except README.md, GLOBAL-LAYERS.md, and DEPLOYMENT.md
SLIDE_FILES=$(find "${SLIDES_DIR}" -maxdepth 1 -name "*.md" ! -name "README.md" ! -name "GLOBAL-LAYERS.md" ! -name "DEPLOYMENT.md" | sort)

if [ -z "${SLIDE_FILES}" ]; then
    echo "❌ No slide files found!"
    exit 1
fi

# Count total files
TOTAL_FILES=$(echo "${SLIDE_FILES}" | wc -l)
CURRENT=0

echo "📊 Found ${TOTAL_FILES} slide decks to build"
echo ""

# Build each presentation
for SLIDE_FILE in ${SLIDE_FILES}; do
    CURRENT=$((CURRENT + 1))
    BASENAME=$(basename "${SLIDE_FILE}" .md)
    
    echo "[${CURRENT}/${TOTAL_FILES}] 🔨 Building ${BASENAME}..."
    
    # Build the presentation
    cd "${SLIDES_DIR}"
    npx slidev build "${BASENAME}.md" \
        --base "/${BASENAME}/" \
        --out "dist/${BASENAME}" \
        2>&1 | grep -v "[@vue/compiler-sfc]" || true
    
    echo "   ✅ ${BASENAME} built successfully"
    echo ""
done

# Copy index.html to dist root
echo "📄 Copying index.html to dist root..."
cp "${SLIDES_DIR}/index.html" "${OUTPUT_DIR}/index.html"

echo ""
echo "✨ All presentations built successfully!"
echo "📦 Output location: ${OUTPUT_DIR}"
echo ""
echo "To preview locally, run: cd dist && python3 -m http.server 8080"
