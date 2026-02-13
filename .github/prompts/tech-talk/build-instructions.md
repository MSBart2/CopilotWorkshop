# Build Instructions for Tech Talk

## ⚠️ CRITICAL INSTRUCTION — READ FIRST

You MUST produce the complete tech talk README.md as your output. Do NOT describe the task, summarize the prompt, or ask clarifying questions. Your entire response will be saved directly as `tech-talks/{{TOPIC}}/README.md`. Start your output with the YAML frontmatter below.

The content plan (plan.md) contains **near-final prose** for every section, section structures, and artifact mappings. Your job is to **assemble and polish** these into the final README following the TEMPLATE structure. The intellectual and creative work has been done in the plan — you are producing the finished, formatted product.

**Your output MUST be at least 500 lines. The plan already contains most of the content — you are adding formatting, transitions, inline artifact embedding, and citations.**

---

## Issue Context

| Field    | Value                |
| -------- | -------------------- |
| Issue    | #{{ISSUE_NUMBER}}    |
| Topic    | {{TOPIC}}            |
| Question | {{PRIMARY_QUESTION}} |
| Audience | {{AUDIENCE}}         |
| Duration | {{DURATION}}         |
| Section  | {{SECTION}}          |
| Guidance | {{GUIDANCE}}         |

## Available Artifacts on Branch

Read these files:

- `tech-talks/{{TOPIC}}/research.md` — Research findings
- `tech-talks/{{TOPIC}}/plan.md` — Approved content plan
- `tech-talks/{{TOPIC}}/images/` — Downloaded visual assets
- `tech-talks/{{TOPIC}}/examples/` — Code examples and configs

## Your Task

Generate `tech-talks/{{TOPIC}}/README.md` by following TEMPLATE.md exactly. The TEMPLATE.md is appended below this prompt — it defines every section, its purpose, and the expected format.

The content plan (plan.md) contains **near-final prose** for each TEMPLATE section. Your job is to **assemble the plan's content into the TEMPLATE structure**, adding:

- Smooth transitions between sections
- Inline artifact embedding (code from `examples/`, images from `images/`)
- Inline `[^n]` citations throughout
- Any minor gap-filling where sections need connecting tissue

> **Assembly, not invention:** If a section is well-written in plan.md, use it nearly verbatim. Don't rewrite from scratch.

### Key Rules

1. **Follow TEMPLATE.md section-by-section** — every section in TEMPLATE must appear in your output
2. **Assemble plan.md content** — the plan has near-final prose; you assemble into TEMPLATE format with light polish
3. **Embed artifacts inline** — code examples from `examples/` and images from `images/`
4. **Inline citations** — use `[^n]` footnotes from the references plan throughout
5. **Fill minor gaps only** — add transitions and connecting tissue, not new sections of analysis

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

---

## BEGIN YOUR OUTPUT NOW

Start with this exact YAML frontmatter and continue with the full README content:

```yaml
---
status: active
updated: { { TODAY_DATE } }
section: "{{SECTION}}"
---
```

Then write the complete README following ALL required sections above. Expand the draft content from plan.md into full, polished prose. Do NOT include meta-commentary about the task — produce only the README content.
