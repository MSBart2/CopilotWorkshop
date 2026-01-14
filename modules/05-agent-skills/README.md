# Module 5: Agent Skills

## ⏰ Monday 3:30 PM — Teaching Copilot Your Domain

> *"We've created custom instructions for tests, API routes, and components. But what about business rules that aren't file-specific? How do I teach Copilot our domain knowledge—not just code patterns, but FanHub's data model?"*  
> — Elena, thinking ahead to Character Detail v2

---

## 🧵 The Golden Thread: From Code Patterns to Domain Knowledge

In **Module 04**, the team created custom instructions that activate based on file patterns. Tests get Elena's QA expertise. Dockerfiles get Marcus's security patterns. React components get Priya's standards.

But some knowledge isn't file-specific:
- *"Related characters should never have duplicates from the same show"*
- *"Quotes must reference valid episodes"*
- *"Character biographies should not exceed 2000 characters"*

These aren't code pattern problems—they're **domain knowledge** problems. When the agent builds Character Detail v2 in Module 07, it needs to understand FanHub's data model.

**This module's mission**: Create Agent Skills that encode FanHub's business rules—the TV show data model, feature requirements, and product standards that Copilot needs to truly understand your domain. When you mention "character data" or "episode validation" in a conversation, these skills will activate automatically.

---

## 🎯 Learning Objectives

By the end of this module, you will:

- Understand what Agent Skills are and how they differ from instructions and prompts
- Create custom skills with YAML frontmatter and markdown instructions
- Include scripts and resources within skill directories
- See how Copilot automatically loads skills when relevant
- Build domain-specific validation skills for the FanHub data model
- Leverage community skills from existing repositories

**Time**: ~90 minutes  
**Featured Personas**: Elena (Quality Champion), Rafael (Product Visionary), Marcus (DevOps Developer)

---

## 🧭 Choose Your Path

<table>
<tr>
<td width="33%" valign="top">

### 🎭 By Persona
*Focused on your role*

**[Elena's Path →](personas/elena.md)**  
Data validation, testing skills  
*~45 minutes*

**[Rafael's Path →](personas/rafael.md)**  
Feature requirements, effort estimation  
*~50 minutes*

**[Marcus's Path →](personas/marcus.md)**  
Application complexity understanding  
*~30 minutes*

</td>
<td width="33%" valign="top">

### 📖 Full Story
*Complete narrative*

**[EXERCISES.md →](EXERCISES.md)**  
All exercises in story order  
*~90 minutes*

Best for: First-time learners, instructor-led sessions

</td>
<td width="33%" valign="top">

### ⚡ Quick Navigator
*Jump to what you need*

| Exercise | Focus | Time |
|----------|-------|------|
| [5.1](EXERCISES.md#exercise-51-understand-skills-through-examples--exploring-the-ecosystem) | Explore Skills | 20m |
| [5.2](EXERCISES.md#exercise-52-create-your-first-skill--tv-show-data-validation) | Data Validation | 25m |
| [5.3](EXERCISES.md#exercise-53-create-domain-specific-skills--feature-requirements) | Feature Requirements | 25m |
| [5.4](EXERCISES.md#exercise-54-effort-estimator-skill--planning-episode-detail-page) | Episode Detail Effort | 20m |

</td>
</tr>
</table>

---

## 📚 Key Concepts

### What Are Agent Skills?

**Agent Skills** are folders containing:
- `SKILL.md` file with instructions (YAML frontmatter + markdown)
- Optional scripts, examples, and resources
- Domain-specific knowledge Copilot loads when relevant

Skills are part of an [open standard](https://agentskills.io) supported by GitHub Copilot, Claude, Cursor, and other AI coding tools.

### When to Use What: A Decision Guide

| I want Copilot to... | Use | Example |
|---------------------|-----|---------|
| **Know our project basics** | Repo Instructions | "This is a React/Node app, use these patterns" |
| **Apply rules to specific files** | Custom Instructions | "For test files, use Jest with these conventions" |
| **Run a specific task I trigger** | Prompts | "Generate a React component with tests" |
| **Act as a specialist persona** | Agents | "Be a security reviewer with read-only access" |
| **Know our domain automatically** | Skills | "Validate TV show data against our schema" |

### How Copilot Loads Skills (Progressive Disclosure)

Skills use a three-level loading system:

1. **Level 1: Discovery** — Copilot always knows which skills exist by reading `name` and `description`
2. **Level 2: Instructions** — When your request matches a skill, Copilot loads the full `SKILL.md`
3. **Level 3: Resources** — Scripts and examples load only when Copilot references them

### Where Skills Live

**Project Skills** (repository-specific):
- `.github/skills/` in your repository
- Shared with everyone working on the project
- Version controlled with your code

**Personal Skills** (across all projects):
- `~/.github/skills/` in your home directory
- Available in all your projects
- Your personal toolkit

### Community Skills

You don't have to build every skill from scratch:

- **Anthropic's Skills Repository**: [github.com/anthropics/skills](https://github.com/anthropics/skills)
- **GitHub's Awesome Copilot Collection**: [github.com/github/awesome-copilot](https://github.com/github/awesome-copilot)

---

## 🧠 Mindful Moment: The Right Tool for the Job

| Tool | Best For | Example |
|------|----------|---------|
| **Instructions** | General standards applied everywhere | "Use async/await, not promises" |
| **Prompts** | Reusable templates for common tasks | "Generate test suite for component" |
| **Agents** | Autonomous multi-step workflows | "Review architecture and suggest improvements" |
| **Skills** | Specialized domain knowledge | "Validate TV show data follows our schema" |

Skills are perfect for domain-specific expertise that's too detailed for instructions but needs to be applied systematically.

---

## 🔗 Compounding Value

**What we create in this module:**

```
.github/skills/
├── bug-reproduction-test-generator/  # Elena's testing expertise
│   └── SKILL.md
├── feature-requirements/             # Rafael's product standards
│   └── SKILL.md
└── effort-estimator/                 # Rafael's prioritization tool
    └── SKILL.md
```

> 📂 **Compare Your Work**: See [`examples/completed-config/skills/`](../../examples/completed-config/skills/) for reference implementations of all skills.

**How skills integrate with previous modules:**

- **Module 1** (Instructions): Skills add domain-specific knowledge on top of general standards
- **Module 3** (Prompts): Skills are auto-loaded; prompts are manually invoked
- **Module 4** (Custom Instructions): Skills are topic-focused; instructions are file-focused

**How skills prepare for Module 07:**

When the agent builds Character Detail v2, both your **custom instructions** (Module 04) and your **agent skills** (Module 05) will combine. The agent will get:
- File-specific patterns for tests, routes, components
- Domain-specific knowledge about TV show data validation

---

## ✅ Module Checklist

Before moving to Module 6, verify:

- [ ] Understand how skills differ from instructions and prompts
- [ ] Explored at least one community skill repository
- [ ] Created at least one custom skill for your domain
- [ ] Tested that Copilot auto-loads skills when relevant
- [ ] Have a plan for your team's skills library

---

## 📚 Official Documentation

- [VS Code: Agent Skills](https://code.visualstudio.com/docs/copilot/customization/agent-skills)
- [Agent Skills Open Standard](https://agentskills.io)
- [Anthropic Skills Repository](https://github.com/anthropics/skills)
- [GitHub Awesome Copilot Collection](https://github.com/github/awesome-copilot)

---

## ➡️ Next Up

**[Module 6: MCP Servers](../06-mcp-servers/README.md)** (Monday 4:30 PM)

Skills encode knowledge, but what if Copilot could query your actual database to validate data? MCP (Model Context Protocol) connects Copilot to external systems—databases, APIs, and deployment infrastructure. In Module 07, the agent will have access to EVERYTHING.
