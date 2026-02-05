# FanHub Workshop: Complete Outline

> **Total Time**: 8-9 hours (self-paced)
> **Modules**: 7 modules (0-6)
> **Exercises**: 25 hands-on exercises
> **Target Audience**: Developers at all experience levels

---

## 🎯 The Customization Features

This workshop teaches ways to customize GitHub Copilot. Each module progressively adds customization, demonstrating how they compound.

| Feature                        | What It Does                                   | Introduced In |
| ------------------------------ | ---------------------------------------------- | ------------- |
| 📋 **Repository Instructions** | Team patterns in every response                | Module 1      |
| 🎯 **Agent Plan Mode**         | Structured thinking before implementation      | Module 2      |
| 📝 **Custom Prompts**          | Reusable, shareable prompt files               | Module 3      |
| � **Agent Skills**            | Domain-specific knowledge loaded when relevant | Module 4      |
| 🔌 **MCP Servers**             | External system access (databases, APIs)       | Module 5      |
| 🤖 **Custom Agents**           | Autonomous task specialists                    | Module 6      |

By Module 6, you'll have a complete understanding of the core customization features and how they compound.

---

## 👥 The FanHub Team

Six personas guide you through the workshop, each representing real developer archetypes:

| Persona    | Experience | Role in Workshop                      | Key Transformation                                            |
| ---------- | ---------- | ------------------------------------- | ------------------------------------------------------------- |
| **Sarah**  | 15 years   | Sets the challenge, validates results | Skeptic → Believer → Scaling Advocate                         |
| **David**  | 20 years   | Architecture, code review             | "Will AI replace me?" → "AI amplifies my legacy"              |
| **Marcus** | 5 years    | DevOps → Application code             | Infrastructure only → Full-stack confident → Knowledge sharer |
| **Elena**  | 8 years    | Testing, quality assurance            | AI-skeptical QA → AI-assisted QA → Quality at scale           |
| **Rafael** | 10 years   | Product, specifications               | Requirements → Execution bridge → Enabling all teams          |

**Full personas**: [modules/00-orientation/PERSONAS.md](workshop/00-orientation/PERSONAS.md)

---

## 📚 Module Map

| Module | Title                                                                   | Time      | Exercises | Tier   | Key Focus                                                                                                |
| ------ | ----------------------------------------------------------------------- | --------- | --------- | ------ | -------------------------------------------------------------------------------------------------------- |
| **0**  | [The Challenge — Building FanHub](workshop/00-orientation/README.md)     | 60 min    | 3         | 🆓     | Experience Copilot without customization; feel the frustration that drives transformation                |
| **1**  | [Instructions](workshop/01-instructions/README.md) | 50 min    | 5         | 🆓     | Create magic file + path-based instructions; transform from confused to context-aware |
| **2**  | [Agent Plan Mode](workshop/02-agent-plan-mode/README.md)                 | 90 min    | 3         | 🆓     | Master structured thinking; use AI to help you think, not just type                                      |
| **3**  | [Custom Prompts](workshop/03-custom-prompts/README.md)                   | 90 min    | 3         | 🆓     | Build reusable `.prompt.md` library; solved problems stay solved                                         |
| **4**  | [Agent Skills](workshop/04-agent-skills/README.md)                       | 90 min    | 3         | 🆓     | Teach specialized capabilities via `.github/skills/`; domain knowledge as AI-accessible resources        |
| **5**  | [MCP Servers](workshop/05-mcp-servers/README.md)                         | 45 min    | 3         | 🆓     | Connect to databases and APIs; transform from "knows things" to "can do things"                          |
| **6**  | [Custom Agents](workshop/06-custom-agents/README.md)                     | 60 min    | 5         | 🆓     | Bundle instructions, skills, and tools into role-based `.agent.md` presets                               |

**Total**: 7 modules, 25 exercises, ~8-9 hours

---

## 🔗 Quick Reference

### Key Files

| File                                     | Purpose                                 | Created In |
| ---------------------------------------- | --------------------------------------- | ---------- |
| `.github/copilot-instructions.md`        | Repository-wide team patterns           | Module 1   |
| `docs/ARCHITECTURE.md`                   | System design documentation             | Module 1   |
| `docs/AI-PLANNING-WORKFLOWS.md`          | Planning templates                      | Module 2   |
| `.github/prompts/*.prompt.md`            | Reusable prompt files                   | Module 3   |
| `.github/instructions/*.instructions.md` | File-scoped instructions with `applyTo` | Module 4   |
| `.github/skills/*/SKILL.md`              | Agent Skills with domain knowledge      | Module 4   |
| `.vscode/mcp.json`                       | MCP server configurations               | Module 5   |
| `.github/agents/*.agent.md`              | Custom agent definitions                | Module 6   |

### The Transformation Journey

| Stage            | When      | What Changes                                    |
| ---------------- | --------- | ----------------------------------------------- |
| **Before**       | Module 0  | Generic, confused suggestions                   |
| **Foundation**   | Module 1  | Architecture-aware, pattern-following           |
| **Strategic**    | Module 2  | Structured planning before implementation       |
| **Reusable**     | Module 3  | Prompt libraries, standardized workflows        |
| **Specialized**  | Module 4  | Domain expertise via Agent Skills               |
| **Connected**    | Module 5  | External system access via MCP                  |
| **Autonomous**   | Module 6  | Custom agents bundle everything together        |

---

## 🤝 Contributing

This workshop is open for contributions. Areas of opportunity:

- **Additional prompts** for the prompt library
- **More custom agents** for different domains
- **Alternative instruction patterns** as examples
- **Translations** to other languages

See [.github/copilot-instructions.md](.github/copilot-instructions.md) for content guidelines.
