#!/bin/bash
set -e

# Build script for all Slidev presentations
# This script builds each .md file in the slides subdirectories
# Usage: build-all.sh [-v|--verbose] [folder]
#   folder: optional category to build (workshop, tech-talks, exec-talks)
#   Examples:
#     build-all.sh                    # build all categories
#     build-all.sh exec-talks         # build only exec-talks
#     build-all.sh -v tech-talks      # build only tech-talks (verbose)

VERBOSE=false
FOLDER=""

for arg in "$@"; do
    case "$arg" in
        -v|--verbose) VERBOSE=true ;;
        *) FOLDER="$arg" ;;
    esac
done

# Validate folder if specified
if [[ -n "$FOLDER" && "$FOLDER" != "workshop" && "$FOLDER" != "tech-talks" && "$FOLDER" != "exec-talks" ]]; then
    echo "❌ Unknown folder: $FOLDER"
    echo "   Valid options: workshop, tech-talks, exec-talks"
    exit 1
fi

START_TIME=$(date +%s)
SLIDES_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
OUTPUT_DIR="${SLIDES_DIR}/dist"

if [[ -n "$FOLDER" ]]; then
    echo "🚀 Building ${FOLDER} Slidev presentations..."
else
    echo "🚀 Building all Slidev presentations..."
fi
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
if [[ -z "$FOLDER" || "$FOLDER" == "workshop" ]]; then
    echo "📚 Building workshop slides..."
    for SLIDE_FILE in "${SLIDES_DIR}"/workshop/*.md; do
        if [ -f "$SLIDE_FILE" ]; then
            BASENAME=$(basename "$SLIDE_FILE" .md)
            build_slide "workshop" "${BASENAME}"
            TOTAL_BUILT=$((TOTAL_BUILT + 1))
        fi
    done
    echo ""
fi

# Build tech-talks slides
if [[ -z "$FOLDER" || "$FOLDER" == "tech-talks" ]]; then
    echo "🔬 Building tech-talks slides..."
    for SLIDE_FILE in "${SLIDES_DIR}"/tech-talks/*.md; do
        if [ -f "$SLIDE_FILE" ]; then
            BASENAME=$(basename "$SLIDE_FILE" .md)
            build_slide "tech-talks" "${BASENAME}"
            TOTAL_BUILT=$((TOTAL_BUILT + 1))
        fi
    done
    echo ""
fi

# Build exec-talks slides
if [[ -z "$FOLDER" || "$FOLDER" == "exec-talks" ]]; then
    echo "💼 Building exec-talks slides..."
    for SLIDE_FILE in "${SLIDES_DIR}"/exec-talks/*.md; do
        if [ -f "$SLIDE_FILE" ]; then
            BASENAME=$(basename "$SLIDE_FILE" .md)
            build_slide "exec-talks" "${BASENAME}"
            TOTAL_BUILT=$((TOTAL_BUILT + 1))
        fi
    done
    echo ""
fi

# Copy index.html and 404.html to dist root
echo "📄 Copying index-custom.html and 404.html to dist root..."
cp "${SLIDES_DIR}/index-custom.html" "${OUTPUT_DIR}/index.html"
cp "${SLIDES_DIR}/404.html" "${OUTPUT_DIR}/404.html"

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