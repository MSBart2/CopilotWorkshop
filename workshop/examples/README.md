# Examples: Completed Configuration Files

This folder contains reference implementations for everything you'll build in the FanHub workshop. Use these to:

- ✅ **Check your work** — Compare your output to the reference
- ✅ **Get unstuck** — See what "done" looks like
- ✅ **Fast-track learning** — Copy configs if you want to skip ahead

---

## 📁 Folder Structure

```
examples/
└── completed-config/          # Full "finished" state
    ├── .github/
    │   ├── copilot-instructions.md    # Repository instructions
    │   ├── prompts/                    # Custom prompt files
    │   │   ├── commit.prompt.md
    │   │   ├── create-api-tests.prompt.md
    │   │   ├── create-component-tests.prompt.md
    │   │   ├── create-detail-page.prompt.md
    │   │   ├── feature-request-template.prompt.md
    │   │   └── spec-to-implementation.prompt.md
    │   ├── agents/                     # Custom agents
    │   │   ├── architecture-reviewer.agent.md
    │   │   ├── devops-reviewer.agent.md
    │   │   └── fanhub-validator.agent.md
    │   └── instructions/               # Custom instructions
    │       ├── api-routes.instructions.md
    │       ├── infrastructure.instructions.md
    │       ├── react-components.instructions.md
    │       └── testing.instructions.md
    ├── .vscode/
    │   └── mcp.json                    # MCP server configuration
    ├── docs/
    │   ├── ARCHITECTURE.md
    │   ├── character-detail-challenge.md
    │   ├── org-instructions-template.md      # Module 11: Org-level instructions
    │   ├── COPILOT-REVIEW-GUIDE.md          # Module 11: Code review checklist
    │   ├── TEAM-ONBOARDING.md               # Module 11: Team onboarding guide
    │   └── quarterly-report-template.md      # Module 11: Metrics report template
    └── skills/                         # Agent Skills examples
        ├── agent-skills.md
        ├── api-endpoint-design/
        │   └── SKILL.md
        ├── bug-reproduction-test-generator/
        │   └── SKILL.md
        ├── effort-estimator/
        │   └── SKILL.md
        ├── feature-requirements/
        │   └── SKILL.md
        └── tv-show-data-validator/
            └── SKILL.md
```

---

## 🗺️ Module → Example Mapping

| Module | Feature | What You Create | Reference File |
|--------|---------|-----------------|----------------|
| **Module 1** | Repository Instructions | `copilot-instructions.md` | [completed-config/.github/copilot-instructions.md](completed-config/.github/copilot-instructions.md) |
| **Module 1** | Documentation | `ARCHITECTURE.md` | [completed-config/docs/ARCHITECTURE.md](completed-config/docs/ARCHITECTURE.md) |
| **Module 3** | Custom Prompts | Prompt files | [completed-config/.github/prompts/](completed-config/.github/prompts/) |
| **Module 4** | Custom Instructions | File-scoped instructions | [completed-config/.github/instructions/](completed-config/.github/instructions/) |
| **Module 5** | Agent Skills | Domain-specific skills | [completed-config/skills/](completed-config/skills/) |
| **Module 6** | MCP Servers | External system connections | [completed-config/.vscode/mcp.json](completed-config/.vscode/mcp.json) |
| **Module 7** | Custom Agents | Agent configuration files | [completed-config/.github/agents/](completed-config/.github/agents/) |
| **Module 11** | Enterprise Patterns | Organization templates | [completed-config/docs/](completed-config/docs/) (org-instructions-template.md, COPILOT-REVIEW-GUIDE.md, TEAM-ONBOARDING.md, quarterly-report-template.md) |

---

## 🎯 The Key Customization Features

This workshop teaches multiple ways to customize GitHub Copilot:

| # | Feature | What It Does | Example |
|---|---------|--------------|---------|
| 1 | **Repository Instructions** | Global context for every Copilot interaction | [copilot-instructions.md](completed-config/.github/copilot-instructions.md) |
| 2 | **Custom Prompts** | Reusable prompt templates with variables | [prompts/](completed-config/.github/prompts/) |
| 3 | **Custom Instructions** | File-scoped context via `applyTo` patterns | [instructions/](completed-config/.github/instructions/) |
| 4 | **Agent Skills** | Domain-specific knowledge in portable skill folders | [skills/](completed-config/skills/) |
| 5 | **MCP Servers** | Connect external tools and services to Copilot | [.vscode/mcp.json](completed-config/.vscode/mcp.json) |
| 6 | **Custom Agents** | Specialized AI assistants for specific tasks | [agents/](completed-config/.github/agents/) |

---

## 🚀 Quick Start Options

### Option 1: Start from Scratch (Recommended)
Follow the modules and create everything yourself. Use examples only to check your work.

### Option 2: Copy and Customize
Copy `completed-config/.github/` to your FanHub project, then customize for your chosen show.

---

## ⚠️ Important Notes

1. **Don't just copy-paste** — The learning happens in the creation process
2. **Adapt to your project** — These are templates, not one-size-fits-all solutions
3. **Examples may drift** — If examples don't match exercise instructions, trust the module content
4. **Your version may differ** — That's okay! These are references, not requirements

---

## 🎯 Best Practice

1. **Try the exercise first** without looking at examples
2. **Compare when stuck** or after completing
3. **Note differences** and understand why they exist
4. **Iterate and improve** your version based on what you learn

The goal isn't to match the examples exactly—it's to understand the patterns well enough to create your own.
