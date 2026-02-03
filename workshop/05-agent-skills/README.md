# Module 5: Agent Skills

## ⏰ — The Capability Gap

> *"Instructions tell Copilot how to behave, but they don't teach it how to do things it doesn't know how to do. I need custom capabilities—like validating against our TV show API schema or checking our specific deployment requirements."*  
> — David, discovering agent skills

---

## 📖 Story So Far

In **Module 1**, the team created **`.github/copilot-instructions.md`**—repository-wide standards that apply to all Copilot interactions. This established baseline coding guidelines.

In **Module 2**, they used **plan mode** to research complex features before implementing, using `@workspace` to gather context from multiple files and catch architectural issues during planning.

In **Module 3**, they created **prompt files** (`.prompt.md`)—invokable functions for specific tasks like `/test-suite` and `/react-review`, eliminating the need to retype complex prompts.

In **Module 4**, they added **custom instructions** (`.instructions.md`)—path-based guidance that automatically applies based on what you're editing. Frontend files get UI patterns, backend files get API standards, test files get testing conventions—all automatic.

Now, in **Module 5**, they face a new challenge: **teaching Copilot specialized capabilities it doesn't have built-in**. David needs to validate code against FanHub's TV show API schema. Elena wants to generate tests using the team's custom test template. Marcus needs deployment scripts that check FanHub's specific infrastructure requirements. Instructions can tell Copilot *how* to work, but they can't teach it *new tasks* that require specialized knowledge, scripts, or workflows.

💡 **Integration Note:** This module builds on Module 4's `.instructions.md` files by adding **agent skills** (`.github/skills/`)—folders containing instructions, scripts, examples, and resources that teach Copilot specialized capabilities. Instructions = behavior guidelines. Skills = new capabilities.

---

⚠️ **Prerequisites**: 
- Complete [Module 00: Orientation](../00-orientation/README.md)
- Complete [Module 01: Repository Instructions](../01-repository-instructions/README.md)
- Complete [Module 04: Custom Instructions](../04-custom-instructions/README.md)
- Setting enabled: `chat.useAgentSkills` (required for Agent Skills support in VS Code)

---

## 🧠 Mindful Moment: From Instructions to Capabilities

**Traditional thinking:** *"I'll write detailed instructions and hope Copilot figures out how to apply them correctly."*

**AI-native thinking:** *"I'll create a skill—instructions + scripts + examples + resources—that teaches Copilot a complete, repeatable workflow for specialized tasks."*

This isn't about replacing instructions—it's about **teaching new capabilities**. Instructions tell Copilot how to format code or which patterns to follow. Skills teach Copilot how to validate API schemas, generate deployment scripts, debug workflows, or perform any specialized task that requires more than just coding guidelines. The result: Copilot becomes a specialist in your domain-specific workflows.

---

💡 **Understanding Agent Skills**

**Agent Skills** are folders of instructions, scripts, examples, and resources that teach Copilot specialized capabilities. Each skill is stored in its own directory with a `SKILL.md` file that defines the skill's behavior.

**Key characteristics:**
- **Complete workflows** — Not just instructions, but scripts, templates, and examples that enable specialized tasks
- **Progressive loading** — Copilot reads skill descriptions first, loads full instructions only when relevant, accesses resources on-demand
- **Portable standard** — Works across VS Code, Copilot CLI, and Copilot coding agent (open standard at agentskills.io)
- **Automatic activation** — Copilot decides when to use skills based on your prompt matching the skill's description
- **Composable** — Multiple skills can work together to handle complex multi-step workflows

**Three-level loading system:**
1. **Discovery** — Copilot always knows which skills are available (reads `name` and `description` from YAML frontmatter)
2. **Instructions** — When your request matches a skill's description, Copilot loads the `SKILL.md` body
3. **Resources** — Copilot accesses additional files (scripts, examples, templates) only as needed

**Two skill scopes:**
- **Project skills:** `.github/skills/` (recommended) or `.claude/skills/` (legacy) — team-shared, version-controlled
- **Personal skills:** `~/.copilot/skills/` (recommended) or `~/.claude/skills/` (legacy) — individual preferences

**How they differ from what you've learned:**

| Feature | copilot-instructions.md (Module 1) | .instructions.md (Module 4) | Agent Skills (Module 5) |
|---------|-----------------------------------|----------------------------|-------------------------|
| **Scope** | Repository-wide coding standards | Path-based context rules | Specialized task capabilities |
| **Activation** | Always active for all files | Auto-applied when editing matching files | Auto-loaded when task matches description |
| **Content** | Instructions only | Instructions only | Instructions + scripts + examples + resources |
| **Purpose** | How to write code | Context-specific guidelines | How to perform specialized workflows |
| **Example** | "Use functional React components" | "Frontend files follow UI patterns" | "Debug GitHub Actions using log analyzer script" |
| **Portability** | VS Code + GitHub.com | VS Code + GitHub.com | VS Code + Copilot CLI + coding agent |

---

## 📚 Key Concepts

### Skill Directory Structure

Each skill is a folder containing at minimum a `SKILL.md` file. Optionally include scripts, examples, templates, or other resources.

**Basic structure:**
```
.github/skills/
  webapp-testing/
    SKILL.md                   # Required: skill definition
    test-template.js           # Optional: script to reference
    examples/                  # Optional: example files
      api-test-example.js
      ui-test-example.js
```

**FanHub example:**
```
.github/skills/
  api-endpoint-design/
    SKILL.md                   # How to design FanHub API endpoints
    openapi-schema.yaml        # TV show API schema
    example-endpoints/
      get-character.js         # Example GET endpoint
      post-episode.js          # Example POST endpoint
  bug-reproduction-test-generator/
    SKILL.md                   # How to write bug reproduction tests
    test-template.js           # Jest template with mocking setup
    examples/
      concurrent-bug-test.js   # Example: testing race conditions
```

### SKILL.md File Format

**Complete structure:**
```markdown
---
name: skill-name
description: Description of what the skill does and when to use it
---

# Skill Instructions

Your detailed instructions, guidelines, and examples go here...

## When to Use This Skill

[Describe the scenarios where this skill is relevant]

## Step-by-Step Process

1. [First step with specific actions]
2. [Second step with specific actions]
3. [Third step with specific actions]

## Examples

[Show examples of expected input and output]

## References

You can reference files in this skill directory:
- [Example script](./example-script.js)
- [Template file](./template.md)
```

**YAML frontmatter fields:**

| Field | Required | Description | Max Length |
|-------|----------|-------------|------------|
| `name` | Yes | Unique identifier, lowercase with hyphens (e.g., `webapp-testing`) | 64 chars |
| `description` | Yes | What the skill does AND when to use it (both capabilities and use cases help Copilot decide when to load) | 1024 chars |
| `license` | No | License that applies to this skill | N/A |

**Body sections (recommended structure):**
- **What the skill accomplishes** — Clear capability statement
- **When to use the skill** — Specific scenarios and triggers
- **Step-by-step procedures** — Detailed workflow to follow
- **Examples** — Expected input and output patterns
- **References** — Links to included scripts or resources using relative paths

### Progressive Disclosure and Context Efficiency

Agent Skills use a three-level loading system to keep context efficient:

**Level 1: Skill Discovery (Always loaded)**
- Copilot reads `name` and `description` from all skills' YAML frontmatter
- Lightweight metadata helps Copilot decide which skills are relevant
- You can install many skills without consuming context

**Level 2: Instructions Loading (Loaded when relevant)**
- When your request matches a skill's description, Copilot loads the `SKILL.md` body
- Only then do the detailed instructions become available
- Non-relevant skills stay unloaded

**Level 3: Resource Access (Loaded on-demand)**
- Copilot accesses additional files (scripts, examples, templates) only as needed
- Resources don't load until Copilot references them
- Keeps context focused on what's actually being used

**Example workflow:**

1. You ask: "Generate API endpoint for fetching character details"
2. Copilot scans skill descriptions, finds match: `api-endpoint-design` skill
3. Copilot loads `api-endpoint-design/SKILL.md` instructions
4. Instructions reference `[example endpoint](./example-endpoints/get-character.js)`
5. Copilot loads `get-character.js` only when needed
6. Other skill resources remain unloaded

**Why this matters:** You can have 20+ skills installed. Only 1-2 load per task. Context stays efficient.

### Referencing Resources Within Skills

Use relative paths to reference files within your skill directory:

**Markdown links:**
```markdown
Follow the pattern in [this example](./example-file.js)
Use this [template script](./templates/test-template.js)
See [example outputs](./examples/) for reference
```

**Copilot will:**
- Read referenced files when needed
- Include their content in context
- Follow patterns shown in examples
- Use templates as starting points

**Example from bug-reproduction-test-generator skill:**
```markdown
Generate a reproduction test following [this template](./test-template.js).
Reference [concurrent bug example](./examples/concurrent-bug-test.js) for 
race condition patterns.
```

### Skills vs. Custom Instructions

**Use Agent Skills when you want to:**
- Create reusable capabilities that work across VS Code, Copilot CLI, and coding agent
- Include scripts, examples, or templates alongside instructions
- Teach specialized workflows (testing strategies, debugging processes, deployment procedures)
- Share capabilities with the wider AI community (open standard)
- Define complete, multi-step workflows that require resources

**Use Custom Instructions when you want to:**
- Define project-specific coding standards (how to format code)
- Set language or framework conventions (which patterns to use)
- Specify code review or commit message guidelines
- Apply rules based on file types using glob patterns (`applyTo`)

**Key difference:** Instructions guide behavior; skills teach capabilities.

> 📂 **Reference Examples**: The [`examples/completed-config/skills/`](../../examples/completed-config/skills/) folder contains sample agent skills showing complete implementations with scripts and examples.

---

## What You'll Learn

**Agent Skills** teach Copilot specialized capabilities through folders containing instructions, scripts, examples, and resources. You'll create skills for API endpoint design, bug reproduction test generation, and deployment validation. You'll learn progressive disclosure (efficient context loading), resource referencing (linking scripts and templates), and cross-platform portability (works in VS Code, CLI, and coding agent). You'll measure time saved on specialized workflows and accuracy improvements from domain-specific templates.

**Time:** ~30 minutes | **Exercises:** 3

---

## 📋 Exercise Planning

The exercises below demonstrate how agent skills teach Copilot specialized capabilities beyond basic coding guidelines. Each exercise shows measurable improvements in workflow efficiency and output quality for domain-specific tasks.

**Implementation:** Use `@exercise-author` to generate each exercise file from these specifications.

| # | Exercise | Lead | Support | Problem | Solution | Key Metrics | Artifacts |
|---|----------|------|---------|---------|----------|-------------|-----------|
| [5.1](exercise-5.1.md) | API Endpoint Design Skill | Sarah | David | New API endpoints: 12 min/endpoint explaining standards, schema mismatches require 8 min rework | Create `api-endpoint-design` skill with OpenAPI schema, example endpoints, validation checklist | 12→2 min/endpoint, 0 schema mismatches, 80 min/sprint saved | `.github/skills/api-endpoint-design/SKILL.md`, `openapi-schema.yaml`, `example-endpoints/` |
| [5.2](exercise-5.2.md) | Bug Reproduction Test Generator | Elena | Marcus | Writing bug reproduction tests: 25 min/bug, inconsistent mocking patterns, forget edge cases 40% of time | Create `bug-reproduction-test-generator` skill with test template, mocking examples, edge case checklist | 25→4 min/bug, 100% edge case coverage, 126 min/sprint saved | `.github/skills/bug-reproduction-test-generator/SKILL.md`, `test-template.js`, `examples/` |
| [5.3](exercise-5.3.md) | Build Pipeline Analyzer | Marcus | Elena, Sarah | Debugging build failures: 30 min/failure (15 min reproduce, 15 min trace), 5 failures/sprint | Create `build-pipeline-analyzer` skill with diagnostic script, log pattern examples, troubleshooting workflow | 30→2 min/failure, 140 min/sprint saved, instant root cause identification | `.github/skills/build-pipeline-analyzer/SKILL.md`, `analyze-logs.sh`, `log-patterns/` |

---

## 📚 What This Feature Does

**Agent Skills:** Folders of instructions, scripts, examples, and resources that teach Copilot specialized capabilities for domain-specific workflows. Based on the open standard at agentskills.io, skills work across VS Code, Copilot CLI, and Copilot coding agent.

**When to use it:** When you need to teach Copilot a complete workflow that requires more than just coding guidelines—API validation against custom schemas, test generation using specific templates, debugging with specialized scripts, or any task that combines instructions with executable resources.

**What you'll build:** 
- **API Endpoint Design Skill** — Complete workflow for creating REST endpoints that validate against FanHub's TV show API schema, with OpenAPI spec and example endpoints
- **Bug Reproduction Test Generator** — Test creation workflow using Jest templates, mocking patterns, and edge case examples from past bugs
- **Build Pipeline Analyzer** — Debugging workflow with log analysis script, common failure patterns, and troubleshooting decision tree

> 💡 **Key distinction:** Unlike instructions (behavior guidelines) or prompts (specific task invocations), skills are **complete capabilities**—instructions + executable scripts + example resources. They teach Copilot *how to do something it doesn't know how to do*, not just how to format or follow patterns.

**Official Documentation:**
- 📖 [Use Agent Skills in VS Code](https://code.visualstudio.com/docs/copilot/customization/agent-skills) — Complete guide to creating and using agent skills
- 📖 [About Agent Skills (GitHub Docs)](https://docs.github.com/en/copilot/concepts/agents/about-agent-skills) — Understanding skills across Copilot products
- 📖 [Agent Skills Standard](https://agentskills.io/) — Open standard specification and portability details

> 💡 **Important for this module:** Enable the `chat.useAgentSkills` setting in VS Code to use Agent Skills. Skills use progressive disclosure—Copilot always knows which skills are available (level 1: discovery), loads full instructions only when relevant (level 2), and accesses scripts/examples on-demand (level 3). This means you can install many skills without consuming context until they're actually needed.

---

## ➡️ Next Module

**[Module 6: MCP Servers](../06-mcp-servers/README.md)** — Agent skills teach Copilot specialized workflows, but what if you need to connect Copilot to external services—databases, APIs, cloud platforms? MCP servers provide runtime integration with live data sources.

> *"Skills taught Copilot how to validate against our API schema. But the schema is static. What if I need Copilot to query our actual PostgreSQL database or call our live TV show API to validate real data?"*  
> — Marcus, about to discover MCP servers

---

## 📌 Practices Used

| Practice | How It Applied in This Module |
|----------|-------------------------------|
| 📚 **Progressive Disclosure** | Skills load in three levels: discovery (metadata) → instructions (SKILL.md body) → resources (scripts/examples on-demand) |
| 🎯 **Capability Teaching** | Skills teach *how to perform workflows*, not just *how to format code*—complete processes with executable components |
| 🔄 **Composable Workflows** | Multiple skills can activate for complex tasks; each handles specialized aspect of overall workflow |
| 🌐 **Cross-Platform Portability** | Skills work across VS Code, Copilot CLI, and coding agent using open standard at agentskills.io |

---

## 🎭 Behind the Scenes

*For those who want to understand the deeper mechanics:*

### How Copilot Decides Which Skills to Use

When you make a request in Copilot Chat:

1. **Scan Phase**: Copilot reads the `description` field from all available skills' YAML frontmatter
2. **Relevance Matching**: Compares your prompt to skill descriptions using semantic similarity
3. **Skill Selection**: Loads the `SKILL.md` body for skills with high relevance scores
4. **Instruction Following**: Uses loaded instructions to guide response generation
5. **Resource Access**: References scripts/examples from skill directory only when instructions mention them

**Example:**
- Prompt: "Generate API endpoint for fetching episode details"
- Matched skill: `api-endpoint-design` (description includes "design REST API endpoints")
- Loaded: `api-endpoint-design/SKILL.md` instructions
- Referenced: `example-endpoints/get-episode.js` (because SKILL.md mentions it)
- Not loaded: `bug-reproduction-test-generator` skill (not relevant to this task)

### Context Window Efficiency

**Without progressive disclosure:**
- 10 skills × 2KB each = 20KB always in context
- Tokens consumed even when skills aren't used
- Reduces space for actual code and responses

**With progressive disclosure:**
- Level 1: 10 skills × 100 bytes metadata = 1KB (discovery)
- Level 2: 1-2 relevant skills × 2KB = 2-4KB (instructions)
- Level 3: 1-2 resource files × 1KB = 1-2KB (examples)
- **Total:** 4-7KB vs. 20KB (65-80% context saved)

**Key Takeaway:** You can install dozens of skills. Only what's relevant loads. Context stays efficient.

### Skill Naming Best Practices

**Good skill names:**
- Descriptive and action-oriented
- Use hyphens for spaces (lowercase)
- Match the primary capability

**Examples:**
- ✅ `api-endpoint-design` — Clear what it does
- ✅ `bug-reproduction-test-generator` — Specific workflow
- ✅ `github-actions-failure-debugging` — Targeted capability
- ❌ `helper` — Too vague
- ❌ `skill1` — No semantic meaning
- ❌ `API_Design` — Wrong format (use hyphens, lowercase)

**Why it matters:** Skill names appear in VS Code UI and help you (and teammates) understand what skills do at a glance.

---
