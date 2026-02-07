# CopilotTraining Scripts

Utility scripts for content generation and maintenance.

---

## 📸 download-images.py

Download technical images from source URLs for tech-talk content generation.

### Purpose

When creating tech talks, you often need to include screenshots, diagrams, and architecture images from source documentation. This script automates the process of:
- Extracting technical images from HTML pages
- Filtering out marketing/decorative content
- Downloading images with descriptive filenames
- Generating markdown snippets for README files

### Usage

```bash
python3 scripts/download-images.py <source_url> <output_dir> [--limit N] [--dry-run]
```

### Examples

```bash
# Download up to 7 images from VS Code updates page
python3 scripts/download-images.py \
  https://code.visualstudio.com/updates/v1_109 \
  tech-talks/copilot-updates/images \
  --limit 7

# Preview what would be downloaded (dry run)
python3 scripts/download-images.py \
  https://github.blog/copilot-announcement \
  tech-talks/copilot-new/images \
  --dry-run

# Download all technical images found (no limit)
python3 scripts/download-images.py \
  https://docs.github.com/copilot/features \
  tech-talks/copilot-features/images \
  --limit 20
```

### Features

**Smart Filtering:**
- ✅ Includes: screenshots, diagrams, architecture images, flow charts, code examples, terminal demos
- ❌ Excludes: logos, icons, banners, hero images, marketing content, decorative backgrounds

**Descriptive Filenames:**
- Generates filenames from image alt text (e.g., "ask-questions-screenshot.png")
- Falls back to meaningful names from URL path if no alt text
- Handles filename collisions automatically

**Markdown Generation:**
- Outputs ready-to-use markdown snippet
- Includes image references with alt text
- Adds captions for each image

**Safe Operation:**
- Dry-run mode to preview before downloading
- Configurable limit (default: 7 images)
- Creates output directory if needed
- Skips already-downloaded files

### When to Use

Use this script when:
- Creating a new tech talk from a blog post or documentation page
- The source has valuable screenshots or diagrams worth including
- You want to avoid manual download and rename work

Skip this script when:
- Source has no technical images (just text)
- Images are purely decorative or marketing-focused
- You need to create custom diagrams instead

### Integration with Tech-Talk Workflow

The tech-talk-generator agent references this script in Phase 3 (Build):

1. Research phase identifies source URLs with technical images
2. Planning phase notes which images are valuable
3. Build phase runs this script to download images
4. README.md includes the generated markdown snippet
5. Slide-generator uses images in presentation

See `.github/workflows/tech-talk-phase3-build.yml` for automation details.

---

## 📊 check-slides.js

*(Existing script - add documentation here as needed)*

---

## Contributing

When adding new scripts:
1. Include usage documentation in this README
2. Add examples showing common use cases
3. Follow the existing naming pattern (kebab-case)
4. Make Python scripts executable with `chmod +x`
5. Add shebang line for direct execution
