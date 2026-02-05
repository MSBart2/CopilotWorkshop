#!/bin/bash
set -e

# Build script for all Slidev presentations
# This script builds each .md file in the slides subdirectories
# Usage: build-all.sh [-v|--verbose]

VERBOSE=false
if [[ "$1" == "-v" || "$1" == "--verbose" ]]; then
    VERBOSE=true
fi

START_TIME=$(date +%s)
SLIDES_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
OUTPUT_DIR="${SLIDES_DIR}/dist"

echo "🚀 Building all Slidev presentations..."
echo "📁 Slides directory: ${SLIDES_DIR}"
echo "📦 Output directory: ${OUTPUT_DIR}"
if $VERBOSE; then
    echo "📢 Verbose mode enabled"
fi
echo ""

# Create output directory structure
mkdir -p "${OUTPUT_DIR}/workshop"
mkdir -p "${OUTPUT_DIR}/tech-talks"
mkdir -p "${OUTPUT_DIR}/exec-talks"

TOTAL_BUILT=0

# Helper function to build a slide
build_slide() {
    local CATEGORY=$1
    local BASENAME=$2
    local SLIDE_START=$(date +%s)

    if $VERBOSE; then
        echo "   🔨 ${CATEGORY}/${BASENAME}..."
        cd "${SLIDES_DIR}"
        npx slidev build "${CATEGORY}/${BASENAME}.md" \
            --base "/CopilotTraining/${CATEGORY}/${BASENAME}/" \
            --out "${OUTPUT_DIR}/${CATEGORY}/${BASENAME}" 2>&1 | sed 's/^/      /'
        local SLIDE_END=$(date +%s)
        local ELAPSED=$((SLIDE_END - SLIDE_START))
        echo "   ✅ ${CATEGORY}/${BASENAME} built (${ELAPSED}s)"
    else
        printf "   🔨 %s/%s... " "${CATEGORY}" "${BASENAME}"
        cd "${SLIDES_DIR}"
        if npx slidev build "${CATEGORY}/${BASENAME}.md" \
            --base "/CopilotTraining/${CATEGORY}/${BASENAME}/" \
            --out "${OUTPUT_DIR}/${CATEGORY}/${BASENAME}" > /dev/null 2>&1; then
            local SLIDE_END=$(date +%s)
            local ELAPSED=$((SLIDE_END - SLIDE_START))
            echo "✅ ${ELAPSED}s"
        else
            echo "❌ (run with -v for details)"
        fi
    fi
}

# Build workshop slides
echo "📚 Building workshop slides..."
for SLIDE_FILE in "${SLIDES_DIR}"/workshop/*.md; do
    if [ -f "$SLIDE_FILE" ]; then
        BASENAME=$(basename "$SLIDE_FILE" .md)
        build_slide "workshop" "${BASENAME}"
        TOTAL_BUILT=$((TOTAL_BUILT + 1))
    fi
done
echo ""

# Build tech-talks slides
echo "🔬 Building tech-talks slides..."
for SLIDE_FILE in "${SLIDES_DIR}"/tech-talks/*.md; do
    if [ -f "$SLIDE_FILE" ]; then
        BASENAME=$(basename "$SLIDE_FILE" .md)
        build_slide "tech-talks" "${BASENAME}"
        TOTAL_BUILT=$((TOTAL_BUILT + 1))
    fi
done
echo ""

# Build exec-talks slides
echo "💼 Building exec-talks slides..."
for SLIDE_FILE in "${SLIDES_DIR}"/exec-talks/*.md; do
    if [ -f "$SLIDE_FILE" ]; then
        BASENAME=$(basename "$SLIDE_FILE" .md)
        build_slide "exec-talks" "${BASENAME}"
        TOTAL_BUILT=$((TOTAL_BUILT + 1))
    fi
done
echo ""

# Copy index.html to dist root
echo "📄 Copying index-custom.html to dist root..."
cp "${SLIDES_DIR}/index-custom.html" "${OUTPUT_DIR}/index.html"

END_TIME=$(date +%s)
TOTAL_ELAPSED=$((END_TIME - START_TIME))
MINUTES=$((TOTAL_ELAPSED / 60))
SECONDS=$((TOTAL_ELAPSED % 60))

echo ""
echo "✨ All ${TOTAL_BUILT} presentations built successfully!"
if [ $MINUTES -gt 0 ]; then
    echo "⏱️  Total time: ${MINUTES}m ${SECONDS}s"
else
    echo "⏱️  Total time: ${TOTAL_ELAPSED}s"
fi
echo "📦 Output location: ${OUTPUT_DIR}"
echo ""
echo "To preview locally, run: cd dist && python3 -m http.server 8080"