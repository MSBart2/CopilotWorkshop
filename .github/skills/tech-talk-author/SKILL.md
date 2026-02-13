---
name: tech-talk-author
description: Generates tech talk content (research.md, plan.md, README.md) using the same phased workflow as the GitHub Issue pipeline. Does NOT generate slides — use Slide Generator or Slide Manager agents for that.
infer: true
---

# Tech Talk Author Skill

Generate tech talks following the same 4-phase structure as the GitHub Issue workflow.

## Usage

```
@tech-talk-author create tech talk for [topic] using [URLs]
```

## Process

Follow the prompt templates in `.github/prompts/tech-talk/`:

1. **Research** (`research-instructions.md`) — Fetch URLs + web search for additional references → `research.md`
2. **Plan** (`planning-instructions.md`) — Create near-final prose for all sections → `plan.md` (300+ lines). Create any missing examples identified in gaps.
3. **Build** (`build-instructions.md`) — Assemble README.md incrementally (scaffold → major sections → closing). Plan already has the content; build adds formatting, transitions, and artifact embedding.

> **Note:** Slides are generated separately via the Slide Generator or Slide Manager agents after reviewing the completed tech talk.

## Key Requirements

- Follow `tech-talks/TEMPLATE.md` structure
- Produce intermediate artifacts (research.md, plan.md) before README
- **Plan phase does the heavy content work** — near-final prose, not outlines
- **Build phase assembles incrementally** — write in 3 steps, not one massive generation
- Include 8-15 numbered references with inline citations
- Web search for additional references beyond provided URLs
- Pause for review between phases
