# Image Download Script - Usage Example

This document demonstrates how to use `scripts/download-images.py` when creating tech-talk content.

## Example Scenario

You're creating a tech talk about the new GitHub Copilot features announced in the VS Code January 2026 update. The announcement page at `https://code.visualstudio.com/updates/v1_109` has several valuable screenshots and diagrams.

---

## Step 1: Review Source Content

First, review the source page to identify valuable technical images:
- ✅ Screenshots showing features in action
- ✅ Architecture diagrams explaining system design  
- ✅ Flow charts showing workflows
- ✅ Before/after comparisons
- ❌ Skip marketing images, logos, hero banners

---

## Step 2: Run Dry-Run Mode

Preview what images would be downloaded without actually downloading them:

```bash
python3 scripts/download-images.py \
  https://code.visualstudio.com/updates/v1_109 \
  tech-talks/copilot-vscode-jan-2026/images \
  --dry-run \
  --limit 7
```

**Output:**
```
🔍 Extracting images from: https://code.visualstudio.com/updates/v1_109
✅ Found 5 technical images
📊 Limiting to top 5 images

[1/5] ask-questions-feature-showing-inline-code-queries.png
  URL: https://code.visualstudio.com/.../ask-questions-demo.png
  Alt: Ask questions feature showing inline code queries in VS Code editor
  Section: Ask Questions About Code
  [DRY RUN - would download]

[2/5] context-window-architecture-diagram-showing-token.png
  URL: https://code.visualstudio.com/.../context-window-diagram.png
  Alt: Context window architecture diagram showing token limits...
  Section: Context Window Visualization
  [DRY RUN - would download]

...
```

---

## Step 3: Download Images

Once satisfied with the preview, download the images:

```bash
python3 scripts/download-images.py \
  https://code.visualstudio.com/updates/v1_109 \
  tech-talks/copilot-vscode-jan-2026/images \
  --limit 7
```

**Output:**
```
🔍 Extracting images from: https://code.visualstudio.com/updates/v1_109
✅ Found 5 technical images
📁 Output directory: tech-talks/copilot-vscode-jan-2026/images

[1/5] ask-questions-feature-showing-inline-code-queries.png
  URL: https://code.visualstudio.com/.../ask-questions-demo.png
  Alt: Ask questions feature showing inline code queries in VS Code editor
  Section: Ask Questions About Code
  ✅ Saved to: tech-talks/copilot-vscode-jan-2026/images/ask-questions-feature-showing-inline-code-queries.png

[2/5] context-window-architecture-diagram-showing-token.png
  URL: https://code.visualstudio.com/.../context-window-diagram.png
  Alt: Context window architecture diagram showing token limits and file boundaries
  Section: Context Window Visualization
  ✅ Saved to: tech-talks/copilot-vscode-jan-2026/images/context-window-architecture-diagram-showing-token.png

...

============================================================
📊 Summary: 5/7 images processed

📝 Markdown snippet for README.md:
============================================================
## Visual Assets

The following images illustrate key concepts:

![Ask questions feature showing inline code queries in VS Code editor](images/ask-questions-feature-showing-inline-code-queries.png)
*Ask questions feature showing inline code queries in VS Code editor*

![Context window architecture diagram showing token limits and file boundaries](images/context-window-architecture-diagram-showing-token.png)
*Context window architecture diagram showing token limits and file boundaries*

![Copilot assistance in integrated terminal with command suggestions](images/copilot-assistance-in-integrated-terminal-with.png)
*Copilot assistance in integrated terminal with command suggestions*

![Flowchart showing code action workflow with Copilot suggestions](images/flowchart-showing-code-action-workflow-with.png)
*Flowchart showing code action workflow with Copilot suggestions*

![System architecture showing Copilot service integration with VS Code](images/system-architecture-showing-copilot-service.svg)
*System architecture showing Copilot service integration with VS Code*

============================================================

✅ Images saved to: tech-talks/copilot-vscode-jan-2026/images
💡 Copy the markdown snippet above into your tech-talk README.md
```

---

## Step 4: Add to README.md

Copy the generated markdown snippet into your tech-talk README.md in the Visual Assets section:

```markdown
## Visual Assets

The following images illustrate key concepts:

![Ask questions feature showing inline code queries in VS Code editor](images/ask-questions-feature-showing-inline-code-queries.png)
*Ask questions feature showing inline code queries in VS Code editor*

![Context window architecture diagram showing token limits and file boundaries](images/context-window-architecture-diagram-showing-token.png)
*Context window architecture diagram showing token limits and file boundaries*

...
```

---

## Key Features Demonstrated

### Smart Filtering

The script automatically filters images:

**Included (5 images):**
- ✅ `ask-questions-demo.png` → Has "screenshot" pattern and descriptive alt text
- ✅ `context-window-diagram.png` → Has "diagram" pattern  
- ✅ `terminal-copilot-screenshot.png` → Has "screenshot" and "terminal" patterns
- ✅ `code-actions-flow.png` → Has "flow" pattern
- ✅ `architecture-overview.svg` → Has "architecture" pattern

**Excluded (2 images):**
- ❌ `hero-banner.jpg` → Matches "banner" skip pattern
- ❌ `vscode-logo.png` → Matches "logo" skip pattern

### Descriptive Filenames

The script generates meaningful filenames from alt text:
- Alt: "Ask questions feature showing inline code queries" → `ask-questions-feature-showing-inline-code-queries.png`
- Alt: "Context window architecture diagram" → `context-window-architecture-diagram-showing-token.png`

### Section Context

The script tracks which section each image appeared in:
- Images under "Ask Questions About Code" heading → labeled with that section
- Images under "Context Window Visualization" → labeled with that section

This context helps you understand where each image fits in the content flow.

---

## Integration with Tech-Talk Workflow

This script is referenced in the automated tech-talk workflow:

1. **Phase 1 (Intake)**: Issue created with source URLs
2. **Phase 2 (Planning)**: Research identifies valuable images
3. **Phase 3 (Build)**: 
   - Agent runs `scripts/download-images.py <url> <dir> --limit 7`
   - Copies generated markdown into README.md
   - Creates PR with content + images
4. **Phase 4 (Slides)**: Slide generator uses images in presentation

See `.github/workflows/tech-talk-phase3-build.yml` for implementation.

---

## Troubleshooting

### No images found

**Problem:** Script returns "No technical images found"

**Solutions:**
- Source page may have no screenshots/diagrams (common for text-only docs)
- Images may be loaded via JavaScript (script only parses static HTML)
- Try different source URL (blog posts usually have more images than reference docs)

### URL not accessible

**Problem:** "Error fetching URL" message

**Solutions:**
- Check if URL is correct and publicly accessible
- Some domains may be blocked in the execution environment
- Download HTML manually and use local file: `file:///path/to/page.html`

### Wrong images downloaded

**Problem:** Script downloads decorative/marketing images

**Solutions:**
- Use `--dry-run` first to preview
- Adjust `--limit` to download fewer images
- Manually delete unwanted images after download
- File an issue to improve filtering logic

---

## Best Practices

1. **Always use dry-run first**: Preview what will be downloaded
2. **Limit to 3-7 images**: Too many images bloat the repo and overwhelm slides
3. **Prioritize technical value**: Diagrams > screenshots > decorative
4. **Check alt text**: Images with good alt text are usually more valuable
5. **Manual curation**: Review downloaded images and remove any that don't add value
6. **Update captions**: Edit the generated markdown to improve image descriptions

---

## Example: Complete Tech-Talk with Images

See `tech-talks/copilot-cli/` for an example tech talk that would benefit from this script (though it was created before the script existed, so it doesn't have images yet).

A future tech talk created with this workflow will have:
- `README.md` with Visual Assets section
- `images/` directory with 3-7 technical images
- Descriptive filenames and captions
- Images referenced throughout major sections
- Slides that include the images automatically
