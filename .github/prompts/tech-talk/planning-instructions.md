# Content Planning Instructions for Tech Talk

You are creating a content plan based on research artifacts. The research, images, and examples have already been gathered in `tech-talks/{{TOPIC}}/`.

## Issue Details

- **Issue Number:** {{ISSUE_NUMBER}}
- **Topic:** {{TOPIC}}
- **Primary Question:** {{PRIMARY_QUESTION}}
- **Target Audience:** {{AUDIENCE}}
- **Duration:** {{DURATION}}
- **Index Section:** {{SECTION}}
- **Guidance:** {{GUIDANCE}}

## Available Artifacts

Read these files from the branch:
- `tech-talks/{{TOPIC}}/research.md` — Research findings from Phase 1 (includes References section)
- `tech-talks/{{TOPIC}}/images/` — Downloaded visual assets
- `tech-talks/{{TOPIC}}/examples/` — Code examples and configs

## Your Task

Create a detailed content plan that follows `tech-talks/TEMPLATE.md` structure. This plan will be reviewed by a human before Phase 3 generates the final README.

### Required Plan Sections

```markdown
## Content Plan: {{TOPIC}}

### The Question This Talk Answers
> "[Single clear question — derived from the Primary Question and research]"

### Content Fitness Assessment
| Criterion | Assessment | Notes |
|-----------|-----------|-------|
| Relevant  | 🟢/🟡/🔴 | [Justification] |
| Compelling| 🟢/🟡/🔴 | [Justification] |
| Actionable| 🟢/🟡/🔴 | [Justification] |

**All criteria must be 🟢 to proceed.**

### Problem Statement
[2-3 sentences describing the pain point this talk addresses]

### Solution Overview
[2-3 sentences describing the core solution/capability]

### Mental Model Shift
- **Move Toward:** [What practitioners should adopt]
- **Move Away From:** [What practitioners should stop doing]
- **Move Against:** [Common misconceptions to counter]

### Major Sections (3-6 with 🎬 markers)
1. 🎬 **[Section Name]** — [What it covers, key points, which examples/images to use]
2. 🎬 **[Section Name]** — [What it covers, key points, which examples/images to use]
3. 🎬 **[Section Name]** — [What it covers, key points, which examples/images to use]
...

### Artifact Mapping
Map each artifact from examples/ and images/ to its section:
| Artifact | Type | Used In Section |
|----------|------|----------------|
| `examples/config.yml` | Config | Section 1: Setup |
| `images/architecture.png` | Diagram | Section 2: Architecture |
...

### Real-World Use Cases (3-5)
1. **[Scenario]** — [Outcome] — Complexity: [beginner/intermediate/advanced]
2. **[Scenario]** — [Outcome]
...

### Decision Tree
**When to use:** [specific scenarios]
**When NOT to use:** [specific scenarios]

### References Plan
Review the numbered references from `research.md` and map each to the sections where it should be cited inline. Flag any gaps (e.g., missing official docs, no community examples).

| Ref # | Source | Cite In Sections |
|-------|--------|------------------|
| [^1]  | [Title] | Section 1, Section 3 |
| [^2]  | [Title] | Section 2 |
...

### Gaps & Recommendations
- [Any missing examples that should be created in Phase 3]
- [Any images that need to be generated or sourced]
- [Content areas that need more depth]
```

## Guidelines

- Reference actual files from `examples/` and `images/` — they exist on the branch
- All content fitness criteria must be 🟢
- Major sections should map cleanly to 15-20 total slides
- Each artifact must be mapped to at least one section
- Decision tree must include "when NOT to use"
- Be specific — use actual filenames and paths
