# Build Instructions for Tech Talk

You are generating the complete tech talk README.md based on an approved content plan and research artifacts.

## Issue Details

- **Issue Number:** {{ISSUE_NUMBER}}
- **Topic:** {{TOPIC}}
- **Primary Question:** {{PRIMARY_QUESTION}}
- **Target Audience:** {{AUDIENCE}}
- **Duration:** {{DURATION}}
- **Index Section:** {{SECTION}}
- **Guidance:** {{GUIDANCE}}

## Available Artifacts on Branch

Read these files:
- `tech-talks/{{TOPIC}}/research.md` — Research findings
- `tech-talks/{{TOPIC}}/plan.md` — Approved content plan
- `tech-talks/{{TOPIC}}/images/` — Downloaded visual assets
- `tech-talks/{{TOPIC}}/examples/` — Code examples and configs

## Your Task

Generate `tech-talks/{{TOPIC}}/README.md` following `tech-talks/TEMPLATE.md`.

### Required Sections

1. **Title and subtitle** with the question this talk answers
2. **Content Fitness Rubric** (all 🟢)
3. **Slide Generation Mapping** with `<!-- 🎬 MAJOR SECTION -->` markers
4. **Problem Statement** — key points + narrative
5. **Solution Overview** — capabilities + architecture
6. **Key Artifacts** section (2-5 primary artifacts with purposes)
7. **Mental Model Shift** — Must include a standalone Core Insight one-liner (`> **The Core Insight:** From X to Y`) that works as a clean thesis statement. Then full Move Toward / Away From / Against sections. The Core Insight is used twice in slides: as an early preview and as the anchor for the full reinforcement.
8. **Decision Tree** — when to use / when NOT to use
9. **Major Sections** (3-6, each with `<!-- 🎬 MAJOR SECTION: [Name] -->`)
   - Embed code examples from `examples/` inline using actual file contents
   - Reference images from `images/` with relative paths
10. **Real-World Use Cases** (3-5 with measurable outcomes)
11. **Actionable Checklist** (15min / 1hr / 2-4hr time-bounded actions)
12. **Related Patterns** (cross-references to other tech talks)
13. **📖 References** — Numbered reference list from research.md, with inline `[^n]` citations woven throughout the content (see References section below)
14. **📚 Official Documentation** (minimum 2 links, pulled from References where type is Official Docs)

### Using Research Artifacts

- **Images**: Reference as `![description](images/filename.png)`
- **Code examples**: Include inline in major sections, referencing `examples/filename.ext`
- **References**: Use inline footnote citations `[^n]` throughout the text where sources support claims, examples, or architecture descriptions. Include the full numbered reference list in a `## 📖 References` section at the bottom.
- **Create new examples** if the plan's "Gaps & Recommendations" identifies missing ones — save to `examples/`

### References Format

Inline citation example:
```markdown
Copilot CLI supports three operating modes: interactive, programmatic, and cloud delegation[^3].
```

References section at bottom:
```markdown
## 📖 References

[^1]: **GitHub Copilot in the CLI** — https://docs.github.com/copilot/github-copilot-in-the-cli — Official getting started guide
[^2]: **Copilot CLI Deep Dive** — https://github.blog/... — Announcement with architecture details
```

Aim for 8-15 references. Every major claim and code example should cite its source.

### Quality Checklist

- [ ] Question is specific and clear
- [ ] Content Fitness Rubric is all 🟢
- [ ] Key Artifacts section lists 2-5 artifacts with file paths
- [ ] All artifacts shown inline in their major sections
- [ ] 3-6 major sections marked with 🎬
- [ ] Images referenced with correct relative paths
- [ ] Move-Toward/Away/Against patterns are concrete
- [ ] Use cases show measurable outcomes
- [ ] Actionable items are time-bounded
- [ ] Decision tree includes "when NOT to use"
- [ ] Minimum 2 official documentation links
- [ ] 8-15 numbered references with inline `[^n]` citations throughout content
- [ ] All links are current and working

### Frontmatter

The README **must** begin with YAML frontmatter:

```yaml
---
status: active
updated: <today's date YYYY-MM-DD>
section: "{{SECTION}}"
---
```

## Output

- `tech-talks/{{TOPIC}}/README.md` (the complete tech talk)
- Any additional artifact files identified in plan's Gaps section
