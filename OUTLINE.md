# FanHub Workshop: Complete Outline

> **Total Time**: 11-13 hours (self-paced)
> **Modules**: 13 modules (0-12)
> **Exercises**: 38 hands-on exercises
> **Target Audience**: Developers at all experience levels

---

## 🎯 The Customization Features

This workshop teaches ways to customize GitHub Copilot. Each module progressively adds customization, demonstrating how they compound.

| Feature                        | What It Does                                   | Introduced In |
| ------------------------------ | ---------------------------------------------- | ------------- |
| 📋 **Repository Instructions** | Team patterns in every response                | Module 1      |
| 🎯 **Agent Plan Mode**         | Structured thinking before implementation      | Module 2      |
| 📝 **Custom Prompts**          | Reusable, shareable prompt files               | Module 3      |
| 🎨 **Custom Instructions**     | File-scoped context via `applyTo`              | Module 4      |
| 🎓 **Agent Skills**            | Domain-specific knowledge loaded when relevant | Module 5      |
| 🔌 **MCP Servers**             | External system access (databases, APIs)       | Module 6      |
| 🤖 **Custom Agents**           | Autonomous task specialists                    | Module 7      |
| 🌐 **Web Interface**           | Customizations work beyond VS Code             | Module 8      |
| 🖥️ **CLI Integration**         | Terminal-native AI workflows                   | Module 9      |
| 🔄 **Agentic SDLC**            | Background agents for autonomous work          | Module 10     |
| 🏢 **Enterprise Patterns**     | Organization-wide standards and governance     | Module 11     |

By Module 11, you'll have a complete understanding of the entire customization landscape and how all features work together.

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
| **1**  | [Repository Instructions](workshop/01-repository-instructions/README.md) | 90 min    | 2         | 🆓     | Create `.github/copilot-instructions.md` and `ARCHITECTURE.md`; transform from confused to context-aware |
| **2**  | [Agent Plan Mode](workshop/02-agent-plan-mode/README.md)                 | 90 min    | 3         | 🆓     | Master structured thinking; use AI to help you think, not just type                                      |
| **3**  | [Custom Prompts](workshop/03-custom-prompts/README.md)                   | 90 min    | 3         | 🆓     | Build reusable `.prompt.md` library; solved problems stay solved                                         |
| **4**  | [Custom Instructions](workshop/04-custom-instructions/README.md)         | 90 min    | 3         | 🆓     | Create file-scoped `.instructions.md` with `applyTo` patterns; context activates automatically           |
| **5**  | [Agent Skills](workshop/05-agent-skills/README.md)                       | 90 min    | 3         | 🆓     | Teach specialized capabilities via `.github/skills/`; domain knowledge as AI-accessible resources        |
| **6**  | [MCP Servers](workshop/06-mcp-servers/README.md)                         | 45 min    | 3         | 🆓     | Connect to databases and APIs; transform from "knows things" to "can do things"                          |
| **7**  | [Custom Agents](workshop/07-custom-agents/README.md)                     | 60 min    | 5         | 🆓     | Bundle instructions, skills, and tools into role-based `.agent.md` presets                               |
| **8**  | [Copilot on the Web](workshop/08-copilot-web/README.md)                  | 50-60 min | 4         | 🏢     | Use customizations beyond VS Code; work where you already are                                            |
| **9**  | [GitHub Copilot CLI](workshop/09-copilot-cli/README.md)                  | 60 min    | 3         | 💼     | Terminal-native AI workflows; automate Git, shell, and GitHub operations                                 |
| **10** | [Agentic SDLC](workshop/10-agentic-sdlc/README.md)                       | 90 min    | 3         | 🆓     | Background agents with Git worktrees; autonomous parallel work                                           |
| **11** | [Enterprise Patterns](workshop/11-enterprise-patterns/README.md)         | 30-90 min | Variable  | 🆓💼🏢 | Scale success org-wide; choose exercises by role                                                         |
                         |
                        |

**Standalone/Bonus Modules:**

| Module | Title                                                           | Time   | Exercises | Tier | Key Focus                                                                  |
| ------ | --------------------------------------------------------------- | ------ | --------- | ---- | -------------------------------------------------------------------------- |
| **SDK** | [Copilot SDK](tech-talks/copilot-sdk/README.md) | 45 min | 3         | 💼   | Embed Copilot's engine in custom Python tools; build domain-specific automation |

**Total**: 14 modules, 46 exercises, ~12-14 hours

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
| `.github/skills/*/SKILL.md`              | Agent Skills with domain knowledge      | Module 5   |
| `.vscode/mcp.json`                       | MCP server configurations               | Module 6   |
| `.github/agents/*.agent.md`              | Custom agent definitions                | Module 7   |

### The Transformation Journey

| Stage            | When      | What Changes                                    |
| ---------------- | --------- | ----------------------------------------------- |
| **Before**       | Module 0  | Generic, confused suggestions                   |
| **Foundation**   | Module 1  | Architecture-aware, pattern-following           |
| **Strategic**    | Module 2  | Structured planning before implementation       |
| **Reusable**     | Module 3  | Prompt libraries, standardized workflows        |
| **Contextual**   | Module 4  | File-scoped instructions activate automatically |
| **Specialized**  | Module 5  | Domain expertise via Agent Skills               |
| **Connected**    | Module 6  | External system access via MCP                  |
| **Autonomous**   | Module 7  | Custom agents bundle everything together        |
| **Portable**     | Module 8  | Customizations work beyond VS Code              |
| **Automated**    | Module 9  | Terminal-native AI workflows                    |
| **Orchestrated** | Module 10 | Background agents, parallel work                |
| **Scaled**       | Module 11 | Organization-wide patterns                      |

---

## 🤝 Contributing

This workshop is open for contributions. Areas of opportunity:

- **Additional prompts** for the prompt library
- **More custom agents** for different domains
- **Alternative instruction patterns** as examples
- **Translations** to other languages

See [.github/copilot-instructions.md](.github/copilot-instructions.md) for content guidelines.
