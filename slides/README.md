# CopilotWorkshop Slide Decks

Slidev-based presentation materials for the CopilotWorkshop training modules and tech talks.

> **🌐 View Online**: These slides are automatically deployed to GitHub Pages! See [DEPLOYMENT.md](./DEPLOYMENT.md) for setup instructions.

---

## What is Slidev?

**Slidev** is a presentation framework for developers that lets us create beautiful slides using Markdown. Key features:

- 📝 **Markdown-based** — Write slides in `.md` files with frontmatter
- 🎨 **Themeable** — Customizable layouts, components, and styles
- 🧑‍💻 **Developer-friendly** — Syntax highlighting, live coding, embedded components
- 📤 **Exportable** — Generate PDFs, PPTXs, or static sites
- 🔥 **Live reload** — Changes appear instantly during development

---

## Quick Start

### Installation

```bash
cd slides
npm install
```

### Running Presentations

Start a specific slide deck with live reload:

```bash
# Run the orientation module
npm run dev 00-orientation.md

# Run the repository instructions module
npm run dev 01-repository-instructions.md

# Run a tech talk
npm run dev tech-talks-repo-config.md
```

This starts a local server (usually at `http://localhost:3030`) with hot module reload.

### Keyboard Navigation

| Key | Action |
|-----|--------|
| `Space` / `→` | Next slide |
| `←` | Previous slide |
| `P` | Presenter mode (notes, timer, next slide preview) |
| `O` | Slide overview (grid view) |
| `D` | Toggle dark mode |
| `F` | Fullscreen |
| `Esc` | Exit overview/presenter mode |

### Export to PDF

Generate a PDF version of any slide deck:

```bash
# Export a specific module
npm run export 00-orientation.md

# Export with custom output name
npm run export 01-repository-instructions.md -- --output ./exports/repo-instructions.pdf

# Export with dark theme
npm run export 02-agent-plan-mode.md -- --dark
```

### Export to PowerPoint

Generate a PowerPoint presentation:

```bash
# Export to PPTX
npm run export 00-orientation.md -- --format pptx

# With custom output
npm run export tech-talks-repo-config.md -- --format pptx --output ./exports/repo-topology.pptx
```

### Export Options

Common export flags:

```bash
# Wait for specific timeout (for complex slides)
npm run export <file> -- --timeout 60000

# Export specific slide range
npm run export <file> -- --range 1-10

# Export with higher resolution
npm run export <file> -- --scale 2
```

### Build for Production

Generate a static site for hosting:

```bash
# Build specific slide deck
npm run build 00-orientation.md

# Output goes to dist/ folder
# Deploy dist/ to any static hosting (GitHub Pages, Netlify, etc.)
```

---

## Directory Structure

```
slides/
├── package.json              # Slidev dependencies and scripts
├── 00-orientation.md         # Module 0: Training overview
├── 01-repository-instructions.md
├── 02-agent-plan-mode.md
├── 03-custom-prompts.md
├── ...                       # Additional module slides
├── tech-talks-repo-config.md # Tech talk: Agentic delivery topology
├── agentic-delivery.md       # Executive briefing
├── components/               # Reusable Vue components
│   ├── PersonaCard.vue
│   ├── MetricsTable.vue
│   └── SlideNumber.vue
├── layouts/                  # Custom slide layouts
│   ├── center.vue
│   └── default.vue
├── setup/                    # Slidev configuration
│   └── main.ts
├── style.css                 # Global styles
├── GLOBAL-LAYERS.md          # Layer configuration
└── README.md                 # This file
```

---
---

## Workshop Module Mapping

| Slide File | Workshop Module | Description |
|------------|----------------|-------------|
| `00-orientation.md` | Module 0 | Training overview, personas, principles |
| `01-repository-instructions.md` | Module 1 | Repository-level instructions |
| `02-agent-plan-mode.md` | Module 2 | Agent plan mode thinking |
| `03-custom-prompts.md` | Module 3 | Custom prompt engineering |
| `04-custom-instructions.md` | Module 4 | Custom instructions |
| `05-agent-skills.md` | Module 5 | Domain-specific Agent Skills |
| `06-mcp-servers.md` | Module 6 | Model Context Protocol servers |
| `07-custom-agents.md` | Module 7 | Building custom agents |
| `08-copilot-web.md` | Module 8 | Copilot for web workflows |
| `09-copilot-cli.md` | Module 9 | Copilot CLI automation |
| `10-agentic-sdlc.md` | Module 10 | Agentic software delivery |
| `11-enterprise-patterns.md` | Module 11 | Enterprise customization patterns |
| `12-copilot-hooks.md` | Module 12 | Copilot Hooks integration |
| `13-context-engineering.md` | Module 13 | Context engineering foundations |

### Tech Talks

| Slide File | Topic |
|------------|-------|
| `tech-talks-repo-config.md` | Agentic Delivery Repo Topology |
| `agentic-delivery.md` | Executive briefing on agentic workflows |

---

## Slide Generation

### Automated Generation

Generate slides from a module README:

```bash
# Generate slides for a specific module
npm run generate -- ../workshop/01-repository-instructions

# Regenerate all module slides
npm run generate -- --all

# Update only stale slides (README newer than slides)
npm run generate -- --stale
```

### Manual Creation

Create slides manually by following this structure:

```markdown
---
theme: default
title: Module Title
highlighter: shiki
lineNumbers: false
---

# Module Title
## Subtitle

---

# Slide 2
Content here

---

# Slide 3
More content
```

---

## Slide Structure and Layouts

Each slide deck follows this frontmatter structure:

```markdown
---
theme: default
background: https://example.com/image.jpg
class: text-center
highlighter: shiki
lineNumbers: false
title: Module Title
mdc: true
---
```

### Available Layouts

Our slides use these common layouts:

#### Cover Slide
```markdown
---
layout: cover
class: text-center
---

# Module 1: Repository Instructions
## ⏰ Establishing Foundations
```

#### Centered Content
```markdown
---
layout: center
---

# Key Message
Centered for emphasis
```

#### Two Column Layout
```markdown
---
layout: two-cols
---

# Left Side
Content

::right::

# Right Side
More content
```

#### Default Layout
```markdown
---
layout: default
---

# Standard Slide
Regular content with header/footer
```

---

---

## Custom Components

### Persona Card
```markdown
<PersonaCard
  name="Sarah"
  role="Skeptical Senior"
  experience="15"
  emoji="🔍"
  quote="Show me the metrics or I'm not interested"
/>
```

### Creating Custom Components

Create Vue components in `/components`:

```vue
<!-- components/MyComponent.vue -->
<template>
  <div class="my-component">
    {{ content }}
  </div>
</template>

<script setup>
const props = defineProps({
  content: String
})
</script>

<style scoped>
.my-component {
  /* styles */
}
</style>
```

Use in slides:
```markdown
<MyComponent content="Hello!" />
```

---

---

## Styling and Aesthetics

### Global Styles

Edit `style.css` for global styling across all slides.

### Theme

We use the default Slidev theme with custom colors matching GitHub branding:
- Primary: GitHub Blue (#0969da)
- Secondary: GitHub Purple (#8250df)
- Code background: GitHub Dark (#161b22)

### Typography
- **Headings:** System fonts (clean, professional)
- **Body:** -apple-system, BlinkMacSystemFont, "Segoe UI"
- **Code:** Fira Code, Cascadia Code, monospace

### Visual Elements
- **Emojis:** Use consistently with module READMEs (⏰, 📖, 🎯, 🔨, etc.)
- **Color coding:**
  - Red/❌ for "before" problems
  - Green/✨ for "after" solutions
  - Blue for concepts
  - Purple for actions
- **Whitespace:** Keep slides uncluttered

### Custom Theme Overrides

Modify frontmatter in each slide file:

```yaml
---
theme: default
highlighter: shiki
lineNumbers: true
drawings:
  persist: false
themeConfig:
  primary: '#0969da'
---
```

---

---

## Content Guidelines

### What to Include
- **Module title and timing** - Context for when this fits in the workshop
- **Learning objectives** - Clear outcomes (2-4 items)
- **Persona perspectives** - Show relevant personas (1-3 per module)
- **Before/After metrics** - Concrete, quantifiable improvements
- **Key concepts** - 2-3 main ideas with visuals
- **Exercise overview** - Brief summary of hands-on work
- **Success metrics** - Specific measurements of transformation
- **Next steps** - Preview of next module

### What to Exclude
- Detailed exercise instructions (keep in module README)
- Complete code examples (use snippets only)
- Exhaustive documentation (link to it instead)
- More than 15-20 slides per module (attention span!)

---

## Maintenance

### Keeping Slides Fresh

Slides should be regenerated when module content changes:

1. **Automated check:** CI workflow flags stale slides
2. **Manual regeneration:** `npm run generate -- --stale`
3. **Review changes:** Preview before committing
4. **Commit together:** Update module README and slides in same PR

---

## Presentation Tips

### Instructor-Led
- Use **presenter mode** (press `P`) for speaker notes
- Enable **drawing mode** (press `D`) for annotations
- Control remotely via phone/tablet (QR code in presenter view)
- Record with built-in recorder if needed

### Self-Paced
- Export to PDF for offline viewing
- Include detailed speaker notes
- Add "pause points" for exercises
- Link back to module README for full context

---

## Troubleshooting

### Port Already in Use

If port 3030 is busy:

```bash
npm run dev <file> -- --port 3031
```

### Slides Not Updating

- Clear browser cache
- Restart dev server
- Check for syntax errors in markdown

### Components Not Rendering

- Ensure component is in `/components` directory
- Check component name matches file name
- Verify Vue syntax is correct

### Export Hangs or Times Out

Increase timeout for complex slides:

```bash
npm run export <file> -- --timeout 120000
```

### Export Failing

- Install Playwright: `npx playwright install chromium`
- Check for markdown syntax errors
- Ensure all image paths are valid

### Missing Dependencies

Reinstall from slides directory:

```bash
cd slides
rm -rf node_modules package-lock.json
npm install
```

---

## Resources

- 📚 [Slidev Documentation](https://sli.dev/)
- 🎨 [Slidev Themes Gallery](https://sli.dev/themes/gallery.html)
- 🧩 [Built-in Components](https://sli.dev/builtin/components.html)
- 💡 [Slidev Showcases](https://sli.dev/showcases.html)
- 🎓 [Vue Components Guide](https://vuejs.org/guide/components)

---

## Quick Reference

```bash
# Common workflow
cd slides
npm install                          # One-time setup
npm run dev 00-orientation.md        # Develop with live reload
npm run export 00-orientation.md     # Export to PDF
npm run export 00-orientation.md -- --format pptx  # Export to PowerPoint
npm run build 00-orientation.md      # Build static site
```

---

## Contributing

When adding or updating slides:

1. Follow the module template structure
2. Maintain consistent emoji usage
3. Include concrete metrics in before/after comparisons
4. Keep slides concise (15-20 max per module)
5. Test in presenter mode
6. Export to PDF to verify formatting
7. Update this README if adding new patterns

---

## License

Same as the main CopilotWorkshop repository.

---

For questions or issues, see the [main workshop README](../README.md).
