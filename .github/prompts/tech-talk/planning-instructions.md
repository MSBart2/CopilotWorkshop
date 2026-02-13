# Content Planning Instructions for Tech Talk

## ⚠️ CRITICAL INSTRUCTION — READ FIRST

You MUST produce the actual content plan as your output. Do NOT describe the task, summarize the prompt, or ask clarifying questions. Your entire response will be saved directly as `plan.md`. Start your output with the `# Content Plan:` heading and write the full content.

**Your output MUST be at least 300 lines of substantive content.** This plan is the blueprint that Phase 3 will follow to assemble the final README. Phase 3 should be **assembly and polish only** — not content creation. That means this plan must contain **near-final prose** for every section, not outlines or bullet sketches.

> **The 80/20 rule:** This plan should be ~80% of the final README's intellectual content. Phase 3 adds formatting, transitions, and inline artifact embedding — it does NOT invent new arguments, examples, or analysis.

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

## How This Plan Will Be Used

The TEMPLATE.md (appended below) defines the exact structure of the final README. Your plan must map research findings to each TEMPLATE section. In Phase 3, the build step will assemble this plan's content into the final README format.

**Your job:** Read the research, then produce **near-final prose** for every major TEMPLATE section. Phase 3 should be able to copy-paste most of your prose with only light editing for flow and transitions.

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

#### Problem Statement — Write NEAR-FINAL Prose

Write the **complete Problem section** as it should appear in the README — 2-3 narrative paragraphs plus 3-4 key problem bullet points. This should be ready to paste directly:

```markdown
## The Problem

### Key Points

- **[Issue 1]**: [Full sentence describing the challenge]
- **[Issue 2]**: [Full sentence describing the challenge]
- **[Issue 3]**: [Full sentence describing the challenge]

### Narrative

[2-3 full paragraphs — not outlines. Tell the complete story of the problem.]
```

#### Solution Overview — Write NEAR-FINAL Prose

Write the **complete Solution section** — "What It Does" paragraph, 3-5 key capabilities with full descriptions, and 2-3 paragraphs of architecture overview. Include official doc links.

#### Key Artifacts

Map research examples to the Primary Artifacts structure from TEMPLATE. For each:

- Filename, one-line purpose, which section it appears in

#### Mental Model Shift — Write COMPLETE Section

Write the **full Mental Model Shift section** ready for direct inclusion:

```markdown
## 🎯 Mental Model Shift

> **The Core Insight:** From [specific old way] to [specific new way]

### Move Toward (Embrace These Patterns)

- ✅ **[Pattern 1]**: [Full explanation] → [Specific benefit]
- ✅ **[Pattern 2]**: [Full explanation] → [Specific benefit]
- ✅ **[Pattern 3]**: [Full explanation] → [Specific benefit]

### Move Away From (Retire These Habits)

- ⚠️ **[Old pattern 1]**: [Full explanation] → [Consequence]
- ⚠️ **[Old pattern 2]**: [Full explanation] → [Consequence]

### Move Against (Active Resistance Required)

- 🛑 **[Anti-pattern 1]**: [Full explanation] → [Risk]
- 🛑 **[Anti-pattern 2]**: [Full explanation] → [Risk]

> **Example Transformation:** [Complete before/after scenario]
```

#### Decision Tree — Write COMPLETE Section

Write the **full Decision Tree section** with the tree diagram, "Use when" bullets, "Don't use when" bullets, and comparison table. Ready for direct inclusion.

#### Major Sections (3-6) — Write SUBSTANTIAL Content for Each

For each section matching the TEMPLATE's `<!-- 🎬 MAJOR SECTION -->` pattern:

- Full section heading with `<!-- 🎬 MAJOR SECTION: [Name] -->` marker
- **Full opening paragraph** (not just 2-3 sentences — write the complete opening)
- **All key talking points expanded into prose** (full paragraphs, not bullet sketches)
- Subsection structure with headings
- Which artifacts (code examples + images) belong here with placement notes
- Any inline code examples written out in full

> **Target:** Each major section draft should be 40-80 lines. Phase 3 should only need to add transitions and embed referenced artifacts.

#### Real-World Use Cases (3-5) — Write COMPLETE for Each

For each use case, write the **full section** matching TEMPLATE format:

```markdown
### Use Case N: [Descriptive Title]

**The Problem:** [2-3 sentences]
**The Solution:** [2-3 sentences]
**Implementation:** [code block or command sequence]
**Outcome:** [Measurable improvement]
```

#### References Plan

Map numbered references from research.md to the sections where they should be cited:

| Ref # | Source Title | Cite In Sections |
| ----- | ------------ | ---------------- |
| [^1]  | [Title]      | Section 1, 3     |

#### Actionable Checklist — Write COMPLETE Section

Write the **full What You Can Do Today section** with all three tiers:

```markdown
## ✅ What You Can Do Today

**Immediate Actions (15 minutes):**

- [ ] [Specific action with command/link]
- [ ] [Specific action]

**Short-Term Implementation (1 hour):**

- [ ] [Action with setup steps]

**Advanced Exploration (2-4 hours):**

- [ ] [Complex implementation]
```

#### Artifact Mapping Table

Map EVERY file from `examples/` and `images/` to a TEMPLATE section:

| Artifact | Type | Section | How It's Used |
| -------- | ---- | ------- | ------------- |

#### Gaps & Recommendations

- Missing examples Phase 3 should create
- Content areas needing more depth
- Research quality concerns

---

## Output Rules

- Reference actual files from `examples/` and `images/` — they exist on the branch
- All content fitness criteria must be 🟢
- Major sections should map cleanly to 15-20 total slides
- **Write near-final prose for ALL sections** — Problem, Solution, Mental Model, Decision Tree, Major Sections, Use Cases, Actionable Checklist. Not outlines, not bullet sketches — actual paragraphs ready for the README
- **Minimum 300 lines of substantive content**
- **Phase 3 assembly test:** Could someone assemble the README by mostly copy-pasting from this plan? If not, add more detail
- Do NOT include meta-commentary — produce only the plan content
