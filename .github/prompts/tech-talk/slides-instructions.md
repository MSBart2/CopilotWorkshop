# Slide Generation Instructions for Tech Talk

## ⚠️ CRITICAL INSTRUCTION — READ FIRST

You MUST produce the actual Slidev markdown file as your output. Do NOT describe the task, summarize the prompt, or ask clarifying questions. Your entire response will be saved directly as `slides/tech-talks/{{TOPIC}}.md`. Start your output with the Slidev frontmatter below.

## Details

- **Issue Number:** {{ISSUE_NUMBER}}
- **Topic:** {{TOPIC}}
- **Primary Question:** {{PRIMARY_QUESTION}}
- **Target Audience:** {{AUDIENCE}}
- **Duration:** {{DURATION}}
- **Index Section:** {{SECTION}}

## Source Content

Read these files from the branch:
- `tech-talks/{{TOPIC}}/README.md` — Primary source for slides
- `tech-talks/{{TOPIC}}/images/` — Visual assets to reference

## Your Task

Generate `slides/tech-talks/{{TOPIC}}.md` following the Slidev slide generation guidelines.

### Slide Requirements

- **Maximum 15-20 slides** — force focused, essential content only
- **Extract from README** — preserve quotes, metrics, and exercise objectives
- **Visual hierarchy** — use emoji vocabulary consistently (🎯, ⏰, 📊, etc.)
- **Dark cockpit-style design** with Tailwind CSS
- **Never use Mermaid diagrams**
- Map slides from the `<!-- 🎬 MAJOR SECTION -->` markers in the README
- Reference images using paths relative to the slides directory

### Slide Sequence

1. Title/Logo Slide ← from H1 title + subtitle
2. Question/Objective Slide ← "The Question" section
3. Table of Contents ← from 🎬 major sections
4. Problem Slide ← "The Problem" section
5. Solution Overview ← "The Solution" section
6. Key Artifacts ← artifact inventory
7. **🧠 The Shift (Preview)** ← Core Insight one-liner ONLY. Simple "From X → To Y" visual. No bullets. Plants the thesis before the evidence.
8. Decision Tree ← When to use / not use
9-14. Major Section slides (2-4 per section)
15. Use Cases ← real-world examples
16. **🧠 Mental Model Shift (Full)** ← Complete Move Toward ✅ / Away ⚠️ / Against 🛑 grid. This is the reinforcement after the audience has seen the evidence.
17. Actionable Outcomes ← checklist
18. Related Patterns
19. **📖 References** ← Numbered reference list (REQUIRED)
20. End Slide

### Mental Model: Shown Twice

The mental model **must appear twice**:
- **Slide 7 "The Shift"**: Only the Core Insight one-liner from `> **The Core Insight:**` in the README. Clean, visual, minimal. Use a large "From → To" layout. No detail bullets.
- **Slide 16 "Mental Model Shift"**: The full Move Toward / Away / Against content. Two-column grid layout with ✅ and 🛑 items. This lands with authority because the audience now has context.

### References in Slides

The README contains inline `[^n]` citations and a `## 📖 References` section. Handle them as follows:

- **On content slides**: Where the README cites a source, add a small footnote at the bottom of the slide:
  ```html
  <div class="absolute bottom-4 left-8 text-xs opacity-40">[3] docs.github.com/copilot/...</div>
  ```
  Show only 1-2 footnotes per slide max. Use shortened URLs (domain + path prefix).

- **References slide (#19)**: Dedicated slide showing all references in a compact grid:
  ```markdown
  # 📖 References
  <div class="grid grid-cols-2 gap-2 text-xs mt-4">
  <div>[1] <strong>Title</strong> — domain.com/path</div>
  <div>[2] <strong>Title</strong> — domain.com/path</div>
  ...
  </div>
  ```
  Group by type (Official Docs, Blog Posts, Community). Keep it readable — abbreviate URLs.

### Formatting Rules

- Each slide starts with `---` separator
- Use frontmatter for layout: `layout: default`, `layout: center`, `layout: end`
- Keep bullet points to 4-6 per slide max
- Code blocks should be small (8-12 lines max per slide)
- Use `v-click` for progressive reveal sparingly

## Output

Create: `slides/tech-talks/{{TOPIC}}.md`

If the file already exists, overwrite it with the new version.

> **Note:** The navigation card in `index-custom.html` and the `SLIDE_DATES`
> sync are handled automatically by the workflow after your output is saved.
> You do NOT need to produce index HTML — only produce the slide markdown.

---

## BEGIN YOUR OUTPUT NOW

Start with Slidev frontmatter and write the complete slide deck. Do NOT include meta-commentary about the task — produce only the slide markdown content.
