# Content Planning Instructions for Tech Talk

## ⚠️ CRITICAL INSTRUCTION — READ FIRST

You MUST produce the actual content plan as your output. Do NOT describe the task, summarize the prompt, or ask clarifying questions. Your entire response will be saved directly as `plan.md`. Start your output with the `# Content Plan:` heading and write the full content.

**Your output MUST be at least 150 lines of substantive content.** This plan is the blueprint that Phase 3 will follow to generate the full README — it must be detailed enough that Phase 3 is primarily expanding and polishing, not inventing new content.

---

## Issue Context

| Field | Value |
|-------|-------|
| Issue | #{{ISSUE_NUMBER}} |
| Topic | {{TOPIC}} |
| Question | {{PRIMARY_QUESTION}} |
| Audience | {{AUDIENCE}} |
| Duration | {{DURATION}} |
| Section | {{SECTION}} |
| Guidance | {{GUIDANCE}} |

## How This Plan Will Be Used

The TEMPLATE.md (appended below) defines the exact structure of the final README. Your plan must map research findings to each TEMPLATE section. In Phase 3, the build step will read this plan + TEMPLATE.md + research.md and produce the final README.

**Your job:** Read the research, then produce draft content for every major TEMPLATE section so Phase 3 does assembly and polish rather than design.

---

## BEGIN YOUR OUTPUT NOW

Start with this exact heading:

```
# Content Plan: {{TOPIC}}

> Issue #{{ISSUE_NUMBER}} | Generated from research artifacts
```

### For Each TEMPLATE Section, Produce This

Walk through every section in TEMPLATE.md and write **draft content** for it. Specifically:

#### Title & Question
- Write the actual title: `# [Feature Name]: [Subtitle]`
- Write the refined question (not a placeholder)

#### Content Fitness Assessment
Copy and refine from research.md. Every criterion must be 🟢 with specific justification.

#### Problem Statement — Write Draft Prose
Write 2-3 actual sentences (not placeholders) plus 3-4 key problem bullet points:
```markdown
### The Problem
Developers currently [specific frustration]. This leads to [measurable cost].

- **[Issue 1]**: [Specific description]
- **[Issue 2]**: [Specific description]
```

#### Solution Overview — Write Draft Prose
Write 2-3 actual sentences plus 3-5 key capabilities with one-line descriptions.

#### Key Artifacts
Map research examples to the Primary Artifacts structure from TEMPLATE. For each:
- Filename, one-line purpose, which section it appears in

#### Mental Model Shift — Write All Components
```markdown
> **The Core Insight:** From [specific old way] to [specific new way]

**Move Toward:**
- ✅ [Pattern]: [Why + benefit]

**Move Away From:**
- ⚠️ [Old pattern]: [Why + consequence]

**Move Against:**
- 🛑 [Anti-pattern]: [Why + risk]
```

#### Major Sections (3-6) — Write Detail for Each
For each section matching the TEMPLATE's `<!-- 🎬 MAJOR SECTION -->` pattern:
- Section name
- 3-5 key talking points (the actual points, not just titles)
- Which artifacts (code examples + images) belong here
- Draft 2-3 sentences of opening narrative

#### Decision Tree
Write the actual tree content (see TEMPLATE for format), plus "Use when..." and "Don't use when..." bullets.

#### Real-World Use Cases (3-5)
For each: scenario name, 2-sentence description, complexity level, capabilities used, measurable outcome.

#### References Plan
Map numbered references from research.md to the sections where they should be cited:

| Ref # | Source Title | Cite In Sections |
|-------|------------|------------------|
| [^1]  | [Title]    | Section 1, 3 |

#### Actionable Checklist (Draft)
- **15 minutes:** [2-3 quick wins]
- **1 hour:** [2-3 deeper explorations]
- **Half day:** [1-2 full implementations]

#### Artifact Mapping Table
Map EVERY file from `examples/` and `images/` to a TEMPLATE section:

| Artifact | Type | Section | How It's Used |
|----------|------|---------|---------------|

#### Gaps & Recommendations
- Missing examples Phase 3 should create
- Content areas needing more depth
- Research quality concerns

---

## Output Rules

- Reference actual files from `examples/` and `images/` — they exist on the branch
- All content fitness criteria must be 🟢
- Major sections should map cleanly to 15-20 total slides
- **Write draft prose for Problem, Solution, Mental Model, and Major Sections** — not just outlines
- **Minimum 150 lines of substantive content**
- Do NOT include meta-commentary — produce only the plan content
