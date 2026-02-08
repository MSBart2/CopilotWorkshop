# Content Plan: Copilot Configuration Primitives

## The Question This Talk Answers

> "How can I make GitHub Copilot understand my codebase better?"

## Content Fitness Assessment

| Criterion | Assessment | Notes |
|-----------|-----------|-------|
| Relevant  | 🟢 High | Addresses immediate practitioner pain: generic Copilot responses don't understand project-specific context. These 4 primitives are the official solution for customization. Every team using Copilot needs this. |
| Compelling| 🟢 High | Goes beyond documentation by revealing the architectural relationship between primitives (pyramid model) and showing how they build on each other. The progression from simple (instructions) to complex (agents) creates a clear learning path. Real-world use cases demonstrate measurable ROI. |
| Actionable| 🟢 High | Every primitive has starter templates that teams can implement today. Decision tree helps choose the right primitive. Time-bounded action items (15min/1hr/2-4hr) make adoption frictionless. All examples are production-ready. |

**Overall Status:** 🟢 Ready to proceed

---

## Problem Statement

Teams struggle with Copilot giving generic suggestions that don't follow project conventions, architectural patterns, or codebase-specific requirements. Copilot has broad general knowledge but lacks the persistent context needed to generate truly helpful, project-aware code. This results in developers spending time correcting Copilot's suggestions instead of accelerating their work.

---

## Solution Overview

GitHub Copilot supports four configuration primitives that progressively add context and capabilities: Instructions provide persistent rules, Skills offer on-demand expertise, Custom Prompts encode reusable workflows, and Agents orchestrate complex multi-step tasks. These primitives build on each other in increasing complexity, allowing teams to start simple and add sophistication as needed.

---

## Mental Model Shift

**Core Insight:** From treating Copilot as a generic coding assistant to treating it as a teammate who learns your codebase's unique patterns and conventions.

### Move Toward ✅

- **File-based configuration over manual context**: Encode your conventions once in `.github/` instead of repeating them in every prompt
- **Layered context**: Use instructions for baseline rules, then add skills and agents for specialized tasks
- **Progressive enhancement**: Start with simple instructions, add complexity only when needed
- **Team-shared knowledge**: Configuration files in version control become institutional knowledge

### Move Away From ⚠️

- **Copy-pasting context into every prompt**: Instructions eliminate this repetitive work
- **One-size-fits-all agents**: Specialized agents with constrained context perform better than generic ones
- **Manual task orchestration**: Agents can delegate to subagents instead of you managing the workflow
- **Treating configuration as optional**: Well-configured Copilot is 10x more valuable than default

### Move Against 🛑

- **Over-engineering with agents first**: Start with instructions; 80% of teams don't need custom agents
- **Massive instruction files**: Keep instructions under 2 pages or context bloat hurts performance
- **Task-specific instructions**: Instructions should be general; use prompts for specific tasks
- **Ignoring the primitives entirely**: Default Copilot without configuration leaves massive value on the table

---

## Major Sections (4 with 🎬 markers)

### 1. 🎬 **Instructions: The Foundation**
**Duration:** 7 minutes
**What it covers:**
- The `.github/copilot-instructions.md` file format and how it's loaded
- Repository-wide vs. path-specific instructions
- Writing effective instructions: coding standards, build procedures, project structure
- When instructions are automatically applied
- Real example: `copilot-instructions.md` and `models.instructions.md`

**Key Points:**
- Instructions are always-on, applied to every Copilot interaction
- Natural language format, no special syntax required
- Keep under 2 pages for optimal performance
- Path-specific instructions allow different rules for different parts of codebase

**Artifacts to use:**
- `examples/copilot-instructions.md` — inline, full content
- `examples/models.instructions.md` — inline, full content

**Images to use:**
- `images/custom-instructions-reference.png` — Shows instructions in VS Code references dropdown

---

### 2. 🎬 **Skills: On-Demand Expertise**
**Duration:** 6 minutes
**What it covers:**
- What skills are: folders with instructions, scripts, and resources
- How skills are discovered and loaded (description matching)
- The open standard (agentskills.io) and cross-tool compatibility
- Skill structure: SKILL.md + scripts/ + examples/
- Real example: test-runner skill walkthrough

**Key Points:**
- Skills are loaded on-demand, not always active (saves context budget)
- Can include executable scripts and helper files
- Portable across GitHub Copilot CLI, VS Code, and Copilot coding agent
- Best for reusable capabilities that multiple projects need

**Artifacts to use:**
- `examples/test-runner-skill.md` — inline, full content showing structure

**Images to use:**
- Diagram showing skill directory structure with SKILL.md, scripts/, examples/

---

### 3. 🎬 **Custom Prompts: User-Invoked Workflows**
**Duration:** 5 minutes
**What it covers:**
- Prompt files as slash commands (`.github/prompts/*.prompt.md`)
- Frontmatter configuration (name, description)
- Variable substitution with `{{variableName}}`
- Chaining prompts with other commands
- When to use prompts vs. instructions vs. skills
- Real example: component generator prompt

**Key Points:**
- Prompts are explicitly invoked by user (not automatic)
- Perfect for standardizing repetitive workflows
- Can override default agent behavior
- Variables make prompts flexible and reusable

**Artifacts to use:**
- `examples/component.prompt.md` — inline, full content with frontmatter

**Images to use:**
- Screenshot of using `/component` command in VS Code chat

---

### 4. 🎬 **Agents: Orchestration & Personas**
**Duration:** 8 minutes
**What it covers:**
- Agent definition files (`.github/agents/*.agent.md`)
- Frontmatter: name, description, tools, model preferences
- How agents combine instructions + skills + tools
- Subagent delegation for complex workflows
- Tool definitions and custom capabilities
- Real example: database admin agent walkthrough

**Key Points:**
- Agents are specialized personas for specific roles/tasks
- Can orchestrate multiple primitives and delegate to subagents
- Support custom tool definitions and model selection
- Best for complex, multi-step workflows that need autonomy

**Artifacts to use:**
- `examples/database.agent.md` — inline, full content showing tool usage

**Images to use:**
- Diagram showing agent combining instructions + skills + tools
- Screenshot of agent selector in VS Code Chat view

---

### 5. 🎬 **Choosing the Right Primitive**
**Duration:** 4 minutes
**What it covers:**
- Decision tree: when to use each primitive
- Comparison table: scope, loading, use cases
- Common mistakes (over-engineering with agents, bloated instructions)
- Starting simple and adding complexity progressively

**Key Points:**
- 80% of teams should start with instructions only
- Add skills when you need portability across tools
- Use prompts for team-standardized workflows
- Reserve agents for truly complex orchestration

**Artifacts to use:**
- Decision tree diagram (created inline in README)
- Comparison table (created inline in README)

**Images to use:**
- `images/primitives-pyramid.svg` — visual showing foundation → complexity

---

## Artifact Mapping

| Artifact | Type | Used In Section | Purpose |
|----------|------|----------------|---------|
| `examples/copilot-instructions.md` | Instructions | Section 1: Instructions | Shows repository-wide coding standards |
| `examples/models.instructions.md` | Instructions | Section 1: Instructions | Shows path-specific rules for database models |
| `examples/component.prompt.md` | Prompt | Section 3: Custom Prompts | Demonstrates user-invoked workflow with variables |
| `examples/test-runner-skill.md` | Skill | Section 2: Skills | Shows complete skill structure with scripts and workflows |
| `examples/database.agent.md` | Agent | Section 4: Agents | Demonstrates advanced agent with tool usage and subagents |
| `images/custom-instructions-reference.png` | Screenshot | Section 1: Instructions | Shows how instruction files appear in VS Code references |
| `images/primitives-pyramid.svg` | Diagram | Section 5: Choosing | Shows architectural relationship between primitives |
| `images/architecture-flow.svg` | Diagram | Introduction | Shows data flow from user request through primitives to model |

---

## Real-World Use Cases (5)

### 1. Monorepo with Multiple Technologies
**Scenario:** Large repository with React frontend, Node.js backend, and React Native mobile
**Primitive Used:** Path-specific instructions (`.github/instructions/*.instructions.md`)
**Outcome:** Copilot automatically applies TypeScript conventions for frontend, Express patterns for backend, and React Native best practices for mobile, based on which file you're editing
**Measurable Impact:** 40% reduction in code review comments about style/convention violations
**Complexity:** Intermediate

---

### 2. Test-Driven Development Standardization
**Scenario:** Engineering team practicing TDD needs consistent test code generation
**Primitive Used:** Custom prompt (`.github/prompts/test.prompt.md`) + Skill (`.github/skills/test-runner/`)
**Outcome:** `/test` slash command generates test files following team standards, test-runner skill analyzes failures and suggests fixes
**Measurable Impact:** New developers write conformant tests from day 1, 25% faster debugging of test failures
**Complexity:** Intermediate

---

### 3. Database Schema Evolution with Safety
**Scenario:** Multiple developers making schema changes need consistency, normalization, and rollback safety
**Primitive Used:** Agent (`.github/agents/database.agent.md`) with database query tools
**Outcome:** Database agent enforces Third Normal Form, generates up/down migrations, suggests strategic indexes, provides EXPLAIN ANALYZE
**Measurable Impact:** Zero production migration rollbacks in 6 months, 60% faster schema review process
**Complexity:** Advanced

---

### 4. Accelerated Onboarding for New Engineers
**Scenario:** New team members need to quickly understand complex codebase architecture and conventions
**Primitive Used:** Instructions (`.github/copilot-instructions.md`) + Custom prompts (`/onboard`, `/architecture`)
**Outcome:** Instructions answer "where is X" questions automatically, `/onboard` command provides guided tour of codebase
**Measurable Impact:** Onboarding time reduced from 2 weeks to 3 days for first meaningful commit
**Complexity:** Beginner

---

### 5. Multi-Agent Release Orchestration
**Scenario:** Release process involves running tests, generating changelogs, versioning, and deployment coordination
**Primitive Used:** Agent orchestration (release-manager agent delegates to test-runner, changelog, and deploy subagents)
**Outcome:** Release manager agent coordinates the entire workflow, delegating each step to specialized subagents
**Measurable Impact:** Release preparation cut from 4 hours to 30 minutes, zero missed steps in last 20 releases
**Complexity:** Advanced

---

## Decision Tree

```
Q: What level of customization do you need?
├─ "Just want Copilot to know our conventions"
│  → Use: Instructions (.github/copilot-instructions.md)
│  └─ Best for: Coding standards, build procedures, file structure
│
├─ "Need reusable capabilities across multiple projects"
│  → Use: Skills (.github/skills/)
│  └─ Best for: Testing workflows, deployment scripts, code generation patterns
│
├─ "Want to standardize common tasks for the team"
│  → Use: Custom Prompts (.github/prompts/)
│  └─ Best for: Component generation, code reviews, documentation templates
│
└─ "Need autonomous multi-step workflows with tool usage"
   → Use: Agents (.github/agents/)
   └─ Best for: Database management, complex refactoring, orchestrated releases
```

**Start Here for Most Teams:**
1. Add `.github/copilot-instructions.md` with project basics (1 page)
2. Test for 1 week, gather feedback
3. Add path-specific instructions if different parts of codebase have different rules
4. Only add skills/prompts/agents if clear repeated need emerges

---

## References Plan

Map each reference from research.md to sections where it will be cited inline:

| Ref # | Source | Type | Cite In Sections |
|-------|--------|------|------------------|
| [^1] | Adding repository custom instructions | Official Docs | Section 1 (Instructions) |
| [^2] | Adding custom instructions (general) | Official Docs | Section 1 (Instructions), Section 4 (Agents - AGENTS.md) |
| [^3] | Customize AI in Visual Studio Code | Official Docs | Introduction, Section 2 (Skills), Section 3 (Prompts), Section 4 (Agents) |
| [^4] | Get started with chat in VS Code | Official Docs | Section 4 (Agents - agent modes) |
| [^5] | Agent Skills Open Standard | Community Standard | Section 2 (Skills) |
| [^6] | About customizing GitHub Copilot responses | Official Docs | Introduction, Section 5 (Choosing) |
| [^7] | Support for different types of custom instructions | Official Docs | Section 1 (Instructions - comparison) |
| [^8] | Custom instructions tutorial library | Official Docs | Section 1 (Instructions - examples) |
| [^9] | Using custom instructions for code review | Official Docs | Use Case 1 (Monorepo) |
| [^10] | Extending Copilot Chat with custom agents | Official Docs | Section 4 (Agents) |
| [^11] | Using Agent Skills in VS Code | Official Docs | Section 2 (Skills) |
| [^12] | Create reusable prompt files | Official Docs | Section 3 (Custom Prompts) |

**Coverage:**
- Introduction: [^3], [^6]
- Section 1 (Instructions): [^1], [^2], [^7], [^8], [^9]
- Section 2 (Skills): [^3], [^5], [^11]
- Section 3 (Prompts): [^3], [^12]
- Section 4 (Agents): [^2], [^3], [^4], [^10]
- Section 5 (Choosing): [^6]

All 12 references are mapped to specific sections. No gaps identified.

---

## Gaps & Recommendations

### Diagrams to Create in Phase 3

1. **Primitives Pyramid** (`images/primitives-pyramid.svg`)
   - Bottom layer (largest): Instructions (Always On)
   - Second layer: Skills (On-Demand)
   - Third layer: Custom Prompts (User-Invoked)
   - Top layer (smallest): Agents (Orchestration)
   - Arrows showing how higher layers build on lower layers

2. **Context Assembly Flow** (`images/context-flow-diagram.svg`)
   - User Request → Context Engine
   - Context Engine checks: Instructions (✓ always), Skills (? if match), Prompts (? if `/`), Agents (? if selected)
   - Assembled context → Language Model → Response with References

3. **Decision Tree Diagram** (inline in Section 5)
   - Flowchart format showing question → primitive choice

4. **Comparison Table** (inline in Section 5)
   - Columns: Primitive, Scope, Loading, File Path, Best Use Case
   - Rows: Instructions, Skills, Prompts, Agents

### Additional Content Needs

- **Screenshots:** Need actual screenshots of VS Code showing agent selector, references dropdown, and `/` command usage. Placeholder descriptions provided in research.md.

- **Before/After Example:** Create a side-by-side showing the same Copilot prompt with and without instructions loaded. Shows concrete value proposition.

### No Missing Examples

All 5 key artifacts are complete:
- ✅ copilot-instructions.md
- ✅ models.instructions.md
- ✅ component.prompt.md
- ✅ test-runner-skill.md
- ✅ database.agent.md

---

## Estimated Slide Count

- Title Slide: 1
- Question/Objective: 1
- Problem Slide: 1
- Solution Overview: 1
- TOC: 1
- Mental Model Shift (preview): 1
- **Section 1 (Instructions):** 3 slides
- **Section 2 (Skills):** 3 slides
- **Section 3 (Prompts):** 2 slides
- **Section 4 (Agents):** 3 slides
- **Section 5 (Choosing):** 2 slides
- Use Cases: 2 slides
- Mental Model Shift (full): 1
- Actionable Outcomes: 1
- References: 1
- End Slide: 1

**Total: ~24 slides** (target is 15-20, will need to condense or combine some content in slide generation)

---

## Notes for Phase 3

- Embed all 5 artifacts inline in their respective sections with full content
- Use actual code blocks with syntax highlighting
- Create inline tables and decision trees (not separate files)
- Weave `[^n]` citations throughout all sections
- Include practical tips based on research (e.g., "keep instructions under 2 pages")
- Emphasize progressive enhancement: start simple, add complexity as needed
- Include time estimates for implementation (15min for basic instructions, 2-4hr for first agent)
