# CopilotWorkshop Slide Decks

Slidev-based presentation materials for the CopilotWorkshop training modules.

## Overview

This directory contains slide presentations for each training module, automatically generated from module README files and designed for instructor-led or self-paced learning.

## Quick Start

### Installation

```bash
cd slides
npm install
```

### Development Mode

```bash
# View all slides with hot reload
npm run dev

# View specific module
npm run dev modules/01-repository-instructions.md
```

### Export Options

```bash
# Export to PDF
npm run export-pdf

# Export to PowerPoint
npm run export-pptx

# Build static site
npm run build
```

## Directory Structure

```
slides/
├── package.json              # Slidev dependencies
├── modules/                  # Individual module slide decks
│   ├── 00-orientation.md
│   ├── 01-repository-instructions.md
│   ├── 02-agent-plan-mode.md
│   └── ...
├── components/              # Reusable Vue components
│   ├── PersonaCard.vue     # Persona display cards
│   ├── MetricsTable.vue    # Before/After metrics
│   ├── ExerciseOverview.vue # Exercise summary
│   └── BeforeAfter.vue     # Side-by-side comparison
├── scripts/                # Automation scripts
│   └── generate-slides.js  # Generate slides from README
└── theme/                  # Custom theme (optional)
    └── styles.css
```

## Slide Generation

### Automated Generation

Generate slides from a module README:

```bash
# Generate slides for a specific module
npm run generate -- ../modules/01-repository-instructions

# Regenerate all module slides
npm run generate -- --all

# Update only stale slides (README newer than slides)
npm run generate -- --stale
```

### Manual Creation

You can also create slides manually. Each module slide deck follows this structure:

```markdown
---
theme: default
title: Module Title
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

## Slide Templates

### Cover Slide
```markdown
---
layout: cover
class: text-center
---

# Module 1: Repository Instructions
## ⏰ Establishing Foundations
```

### Two Column Layout
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

### Metrics Comparison
```markdown
<MetricsTable 
  :before="[
    '15 minutes per query',
    '3 review rounds',
    '8 violations per PR'
  ]"
  :after="[
    '2 minutes per query',
    '1 review round',
    '0 violations'
  ]"
/>
```

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
- More than 15 slides per module (attention span!)

## Aesthetics

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

## Maintenance

### Keeping Slides Fresh

Slides should be regenerated when module content changes:

1. **Automated check:** CI workflow flags stale slides
2. **Manual regeneration:** `npm run generate -- --stale`
3. **Review changes:** Preview before committing
4. **Commit together:** Update module README and slides in same PR

### Freshness Check

```bash
# Check which slides are out of date
npm run check-freshness

# Output:
# ✅ modules/01-repository-instructions.md (up to date)
# ⚠️  modules/02-agent-plan-mode.md (stale - README modified 2 days ago)
# ✅ modules/03-custom-prompts.md (up to date)
```

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

## Customization

### Custom Components

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

### Custom Theme

1. Create `theme/styles.css`
2. Override CSS variables
3. Reference in slide frontmatter:

```markdown
---
theme: default
themeConfig:
  primary: '#0969da'
---
```

## Troubleshooting

### Slides not updating?
- Clear browser cache
- Restart dev server
- Check for syntax errors in markdown

### Components not rendering?
- Ensure component is in `/components` directory
- Check component name matches file name
- Verify Vue syntax is correct

### Export failing?
- Install Playwright: `npx playwright install chromium`
- Check for markdown syntax errors
- Ensure all image paths are valid

## Resources

- [Slidev Documentation](https://sli.dev)
- [Slidev GitHub](https://github.com/slidevjs/slidev)
- [Vue Components Guide](https://vuejs.org/guide/components)
- [UnoCSS Documentation](https://unocss.dev)

## Contributing

When adding or updating slides:

1. Follow the module template structure
2. Maintain consistent emoji usage
3. Include concrete metrics in before/after
4. Keep slides concise (15 max per module)
5. Test in presenter mode
6. Export to PDF to verify formatting
7. Update this README if adding new patterns

## License

Same as the main CopilotWorkshop repository.
