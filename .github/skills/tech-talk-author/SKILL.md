---
name: tech-talk-author
description: Generates tech talk README.md for CopilotTraining using TEMPLATE.md. Researches URLs to understand capabilities and creates technical deep-dive content. Use slide-generator agent to create presentation slides afterward.
---

# Tech Talk Author Skill

Generate comprehensive tech talk README.md files for CopilotTraining repository. This skill focuses on **technical deep-dives** that answer specific questions and provide actionable guidance for practitioners.

---

## When to Use This Skill

- Creating a new tech talk from scratch
- Researching GitHub Copilot capabilities and patterns
- Generating technical documentation from blog posts or docs
- Updating tech talk content with new capabilities

**Invocation examples:**

- "Create tech talk on Copilot CLI using https://github.blog/copilot-cli-announcement"
- "Generate tech talk about workspace context from https://code.visualstudio.com/docs/copilot/workspace-context"
- "Research https://gh.io/copilot-extensions and create tech talk on building MCP servers"

---

## Core Tech Talk Principles

### Three Essential Questions

Every tech talk must answer:

1. **What problem does this solve?** — Specific pain points with current state
2. **How does this feature work?** — Technical depth with architecture and examples
3. **When should I use this?** — Decision criteria and tradeoffs

### Content Requirements

Each tech talk README.md includes:

1. **Clear Question** — "The Question This Talk Answers" section
2. **Content Fitness Rubric** — Relevant/Compelling/Actionable assessment (all 🟢 required)
3. **Problem Statement** — Current challenges with specific examples
4. **Solution Overview** — Feature capabilities with architecture
5. **Key Artifacts** — Working files/configs/examples (REQUIRED)
6. **Mental Model Shift** — Move toward/away/against patterns
7. **Decision Tree** — When to use this pattern
8. **Major Sections** — 3-6 deep-dive sections (marked with 🎬 for TOC)
9. **Real-World Use Cases** — 3-5 scenarios with measurable outcomes
10. **Actionable Steps** — 15min/1hr/2-4hr implementation checklist
11. **Related Patterns** — Cross-references to complementary talks
12. **Official Documentation** — Minimum 2 first-party links (REQUIRED)

---

## Core Philosophy (from copilot-instructions.md)

Tech talks are for **practitioners exploring capabilities**, not newcomers. Key principles:

- **Expert-to-expert tone** — Assumes technical background
- **Practical over theoretical** — Focus on "how" and "why"
- **Honest about tradeoffs** — Acknowledge limitations and alternatives
- **Decision-focused** — Help readers choose right tool for the job
- **Evidence-based** — Show through concrete examples and metrics
- **Professional respect** — Treats readers as experienced engineers

Before generating, review `.github/copilot-instructions.md` for:

- Voice and tone guidelines for tech talks
- Emoji vocabulary for consistent visual language
- Section separators (`---` between all major sections)
- Formatting requirements for slide generation

---

## URL Research Workflow

### When URL is Provided

If the user provides a URL (blog post, docs page, announcement):

1. **Extract technical details:**
   - What capability is being introduced/updated?
   - What problem does it solve technically?
   - What are the key features, commands, or APIs?
   - Architecture diagrams or system flows?
   - Code examples or configuration samples?
   - Official documentation links referenced?

2. **Extract visual assets:**
   - Identify architecture diagrams showing system structure
   - Find screenshots demonstrating feature usage
   - Locate flow charts explaining processes
   - Note before/after comparison images
   - Record image URLs with descriptive context
   - Prioritize technical value: diagrams > flows > screenshots > decorative
   - Plan to download 3-7 most valuable images

3. **Identify decision criteria:**
   - When should practitioners use this vs. alternatives?
   - What are the tradeoffs and limitations?
   - What's the complexity vs. benefit calculation?
   - What scale or use case is this optimized for?

4. **Plan artifacts:**
   - What working files demonstrate the capability?
   - What configuration examples are needed?
   - What code samples prove the concept?
   - Should artifacts be shown inline or linked?

5. **Download images (if applicable):**
   - Create `tech-talks/[talk-name]/images/` directory
   - Download 3-7 most valuable images from source
   - Rename with descriptive filenames (e.g., `architecture-overview.png`, not `img1.png`)
   - Note: Only download if source has relevant technical images

6. **Find official docs:**
   - Primary documentation URL (VS Code docs preferred)
   - API/CLI reference if applicable
   - Best practices guide
   - Related GitHub documentation

5. **Identify related patterns:**
   - What other tech talks are complementary?
   - What features work together?
   - What alternative approaches exist?

---

## Template Structure

Use `tech-talks/TEMPLATE.md` as the base structure. The template includes all necessary sections with placeholder text and slide generation mapping.

### Critical Sections to Fill

**1. Question This Talk Answers**

- Single clear question the talk addresses
- Format: "How do I X without Y?" or "When should I use X instead of Y?"

**2. Visual Assets (Optional but Recommended)**

- Include if source documentation has relevant technical images
- Download 3-7 images to `images/` subdirectory
- Use descriptive filenames: `architecture-overview.png` not `image1.png`
- Reference with alt text: `![Architecture Overview](images/architecture-overview.png)`
- Add caption explaining what image shows
- Prioritize: architecture diagrams, flow charts, CLI screenshots
- Skip: marketing images, hero banners, purely decorative content

**3. Content Fitness Rubric (MUST BE ALL 🟢)**

- **Relevant:** Why this matters now / who needs this / what problem it solves
- **Compelling:** What makes this interesting beyond docs / unique angle / "aha" moment
- **Actionable:** Concrete takeaway / something readers can do today / measurable outcome
- Mark overall status: 🟢 Ready / 🟡 Needs work / 🔴 Revisit

**4. The Problem (Key Points + Narrative)**

- 4 bullet points highlighting current challenges
- 2-3 paragraph narrative setting the scene
- Specific examples, time costs, or failure scenarios

**5. The Solution (What It Does + Key Capabilities)**

- 2-3 sentences explaining the core capability
- 4 bullet points for key capabilities with benefits
- Architecture overview (2-3 paragraphs)
- Official documentation links (2-3 minimum)

**6. Key Artifacts (REQUIRED)**

- **Primary Artifacts:** 2-5 files shown inline with detailed explanation
- **Supporting Files:** Repository links for download/reference
- Each artifact needs one-line purpose statement
- Guidance: Inline artifacts ≤150 lines; longer files should be excerpts

**7. Mental Model Shift**

- Core insight statement (From [old] to [new])
- Move Toward: 3 new patterns to embrace with benefits
- Move Away From: 3 old habits to retire with consequences
- Move Against: 2 anti-patterns to actively avoid with risks
- Example transformation showing before/after

**8. When to Use This Pattern (Decision Tree)**

- Top-level question about use case fit
- Tree structure showing different scenarios
- Clear "when NOT to use" guidance
- Alternative solutions for non-matching scenarios

**9. Major Sections (3-6 sections marked with 🎬)**

- Deep technical dives into implementation
- Mark each with: `<!-- 🎬 MAJOR SECTION: [Short Name] -->`
- Each becomes TOC entry and section divider in slides
- Should include primary artifacts inline with explanation
- Embed relevant images inline where they illustrate concepts

**10. Real-World Use Cases (3-5 scenarios)**

- Title, challenge, solution, implementation, outcome format
- Each shows measurable before/after improvement
- Concrete examples from realistic work scenarios

**11. What You Can Do Today (Actionable Checklist)**

- Immediate Actions (15 minutes) - 3 quick wins
- Short-Term Implementation (1 hour) - 3 setup tasks
- Advanced Exploration (2-4 hours) - 3 deeper implementations
- Next Steps After Completion - progression path

**12. Related Patterns**

- Complementary features (3 links with brief descriptions)
- Decision flow for when this talk doesn't fit
- Reference to DECISION-GUIDE.md

**13. Official Documentation (REQUIRED - Minimum 2 links)**

- Primary: Main feature documentation
- Primary: API/CLI reference
- Optional: Best practices, tutorials, troubleshooting, community forums, videos, example repos

---

## Major Section Guidelines

### Marking Major Sections for TOC

**Requirements:**

- 3-6 major sections (fits 2×2 or 2×3 TOC grid)
- Each contains 2-5 content slides worth of material
- Major sections = "deep dive" technical content, not front matter
- Examples: "Core Architecture", "Implementation Patterns", "Advanced Features"

**Marking syntax:**

```markdown
<!-- 🎬 MAJOR SECTION: [Short Name for TOC Card] -->

## [Full Section Heading]
```

**Good major section topics:**

- Architecture deep-dives
- Implementation patterns
- Configuration strategies
- Integration approaches
- Advanced techniques
- Performance optimization

**NOT major sections:**

- Front matter (problem, solution, mental models)
- Use cases (separate section)
- Actionable steps (separate section)
- Related patterns (separate section)

---

## Content Quality Standards

### Minimum Requirements (All Must Pass)

- [ ] Question is specific and clear
- [ ] Content Fitness Rubric is all 🟢 (no 🟡 or 🔴)
- [ ] Key Artifacts section lists 2-5 primary artifacts
- [ ] Primary artifacts shown inline in major sections
- [ ] 3-6 major sections marked with 🎬 comments
- [ ] Move-Toward/Away/Against patterns are concrete
- [ ] Use cases show measurable outcomes
- [ ] Actionable items time-bounded (15min/1hr/2-4hr)
- [ ] Decision tree includes "when NOT to use"
- [ ] Minimum 2 official documentation links
- [ ] All links are current and working
- [ ] Code examples tested and functional

### Tone and Voice

**Correct tech talk voice:**

- ✅ "This pattern enables X by leveraging Y"
- ✅ "Consider this approach when you need Z"
- ✅ "Tradeoff: X improves performance but increases complexity"
- ✅ "Implementation requires understanding of A and B"

**Incorrect (too casual/workshop style):**

- ❌ "You'll learn how to..."
- ❌ "Let's explore together..."
- ❌ "This is exciting because..."
- ❌ "Follow along with these steps..."

**Professional, direct, authoritative:**

- Assume reader has technical context
- Focus on "how" and "why" not "what"
- Acknowledge tradeoffs and alternatives
- Provide decision criteria, not prescriptions

---

## Slide Generation Compatibility

Content must follow structure for automatic slide generation:

- **H1 title** → Title slide
- **Question section** → Objective slide
- **Major sections (🎬)** → TOC + section dividers
- **Bullet lists ≤5 items** → Single slide (more will split)
- **Tables** → Comparison slides
- **Code blocks** → Code slides with highlighting
- **Decision trees** → Flowchart slides

**Slide-friendly writing:**

- Keep bullet points concise (5 or fewer per section)
- Use comparison tables instead of long paragraphs
- Break long code examples into separate subsections
- Front-load key points in each section
- Use concrete metrics ("3x faster" not "much faster")

---

## Usage Guide

### 1. Research Phase (If URL Provided)

```bash
# User provides URL for research
"@tech-talk-author Create tech talk on Copilot CLI from https://github.blog/cli-announcement"
```

**Research workflow:**

1. Fetch and read the provided URL content
2. Extract technical capabilities and architecture
3. Identify decision criteria and tradeoffs
4. Plan artifacts to demonstrate functionality
5. Note official documentation links
6. Find related tech talks for cross-references

### 2. Generate README.md

Using `tech-talks/TEMPLATE.md`, create complete talk with:

- **Question + Fitness Rubric** — Problem framing
- **Problem + Solution** — Context and overview
- **Key Artifacts** — Inventory of working files
- **Mental Model + Decision Tree** — Strategic guidance
- **Major Sections (3-6)** — Technical deep-dives with artifacts shown inline
- **Use Cases** — Real-world scenarios with metrics
- **Actionable Steps** — Time-bounded checklist
- **Related Patterns** — Cross-references
- **Official Documentation** — Authoritative links

### 3. Validate Against Checklist

Use the "Content Quality Checklist" from TEMPLATE.md:

- [ ] Question is specific
- [ ] Fitness scorecard is all 🟢
- [ ] Key Artifacts section complete (2-5 primary artifacts)
- [ ] Artifacts shown inline in major sections
- [ ] 3-6 major sections marked with `<!-- 🎬 MAJOR SECTION -->`
- [ ] Move-Toward/Away/Against is concrete
- [ ] Use cases have measurable outcomes
- [ ] Actionable items are time-bounded
- [ ] Decision tree prevents misuse
- [ ] Minimum 2 official docs links
- [ ] All links current and working
- [ ] Code examples tested

### 4. File Creation

Create file at: `tech-talks/[topic-name]/README.md`

Topic name should be:

- Lowercase with hyphens
- Brief but descriptive
- Examples: `copilot-cli`, `workspace-context`, `mcp-servers`, `parallel-execution`

---

## Example Invocation

```
@tech-talk-author Create tech talk on GitHub Copilot CLI. Research https://docs.github.com/en/copilot/using-github-copilot/using-github-copilot-in-the-command-line

Focus on:
- Problem: Context-switching between terminal and editor
- Solution: AI assistance directly in terminal workflows
- Artifacts: Shell integration configs, example commands, workflow scripts
- Use cases: Complex git operations, system admin tasks, debugging workflows
```

**Result:**

- `tech-talks/copilot-cli/README.md` with:
  - Question: "How do I get Copilot assistance without leaving the terminal?"
  - Fitness rubric: All 🟢 (relevant, compelling, actionable)
  - Problem section with current workflow friction
  - Solution overview with CLI capabilities
  - Key Artifacts section listing shell configs and example scripts
  - Mental model shift from "switch to editor" to "stay in terminal"
  - Decision tree for when CLI is better than editor
  - 3-6 major sections showing installation, commands, integration patterns
  - Use cases with measurable time savings
  - Official documentation links to GitHub CLI docs

**Next steps:**

- User can invoke `slide-generator` to create slides
- Or use `slide-manager` for full generation + verification workflow

---

## Key Benefits of This Approach

**Research Integration:**

- ✅ Learn capabilities from official sources
- ✅ Extract technical architecture and patterns
- ✅ Identify decision criteria and tradeoffs
- ✅ Find authoritative documentation

**Quality Standards:**

- ✅ Content fitness rubric ensures value
- ✅ Required artifacts make talks actionable
- ✅ Major section markers enable slide generation
- ✅ All talks follow consistent structure

**Maintainability:**

- ✅ Templates ensure consistency
- ✅ Checklists validate completeness
- ✅ Slide compatibility built-in
- ✅ Clear separation from workshop content

**Clear Purpose:**

- ✅ Tech talks = practitioner deep-dives (30-60 min)
- ✅ Workshop modules = hands-on training with personas
- ✅ Different audiences, different formats
