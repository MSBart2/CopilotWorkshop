# Module 6: Agent Skills

## ⏰ Monday 4:00 PM — Teaching Copilot Your Domain

> *"Character Detail v2 shipped. Users love it. But now the bug reports are coming in, and I'm re-explaining our testing patterns every single time. How do I teach Copilot our domain knowledge—not just code patterns, but business rules?"*  
> — Elena, staring at Bug #142 from the feature the team just shipped

---

## 🧵 The Golden Thread: From Code Patterns to Domain Knowledge

**Character Detail v2** from Module 04 was a breakthrough. The agent built a complete feature. Module 05's custom instructions would have made the code even better.

But now users are finding bugs:
- Bug #142: *"Duplicate Jesse Pinkman entries in related characters"*
- Bug #147: *"Quote shows 'Episode not found' for valid episode"*

These aren't code pattern problems—they're **domain knowledge** problems. The agent didn't know that related characters should never have duplicates from the same show, or that quotes must reference valid episodes.

**This module's mission**: Create Agent Skills that encode FanHub's business rules—the TV show data model, bug reproduction workflows, and product standards that Copilot needs to truly understand your domain.

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
**Personas**: Elena (Quality Champion), Rafael (Product Visionary)

---

## 🧭 Choose Your Path

<table>
<tr>
<td width="33%" valign="top">

### 🎭 By Persona
*Focused on your role*

**[Elena's Path →](personas/elena.md)**  
Bug reproduction, testing skills  
*~45 minutes*

**[Rafael's Path →](personas/rafael.md)**  
Feature requirements, effort estimation  
*~50 minutes*

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
| [6.1](EXERCISES.md#exercise-61-understand-skills-through-examples--elena-explores-the-ecosystem) | Explore Skills | 20m |
| [6.2](EXERCISES.md#exercise-62-create-your-first-skill--the-character-detail-bug) | Character Detail Bug | 25m |
| [6.3](EXERCISES.md#exercise-63-create-domain-specific-skills--what-character-detail-v2-was-missing) | What Was Missing | 25m |
| [6.4](EXERCISES.md#exercise-64-effort-estimator-skill--whats-next-after-character-detail) | Episode Detail Effort | 20m |

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

**How skills integrate with previous modules:**

- **Module 1** (Instructions): Skills add domain-specific knowledge on top of general standards
- **Module 3** (Prompts): Skills are auto-loaded; prompts are manually invoked
- **Module 4** (Agents): Skills provide knowledge; agents provide workflows
- **Module 5** (Custom Instructions): Skills are task-focused; instructions are file-focused

---

## ✅ Module Checklist

Before moving to Module 7, verify:

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

**[Module 7: MCP Servers](../07-mcp-servers/README.md)** (Monday 5:00 PM)

Skills encode knowledge, but what if Copilot could query your actual database to understand bugs? MCP (Model Context Protocol) connects Copilot to external systems—databases, APIs, and deployment infrastructure.
