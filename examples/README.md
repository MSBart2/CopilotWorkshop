# Examples: Completed Configuration Files

This folder contains reference implementations for everything you'll build in the FanHub workshop. Use these to:

- ✅ **Check your work** — Compare your output to the reference
- ✅ **Get unstuck** — See what "done" looks like
- ✅ **Fast-track learning** — Copy configs if you want to skip ahead

---

## 📁 Folder Structure

```
examples/
├── completed-config/          # Full "finished" state
│   ├── .github/
│   │   ├── copilot-instructions.md    # Repository instructions
│   │   ├── prompts/                    # Custom prompt templates
│   │   └── agents/                     # Custom agents
│   ├── docs/
│   │   └── ARCHITECTURE.md
│   ├── visual-context/                 # Using images with Copilot
│   │   └── README.md
│   └── skills/                         # Agent Skills examples
│       └── agent-skills.md
│
└── module-10/                 # Enterprise patterns templates
    ├── org-instructions-template.md
    ├── COPILOT-REVIEW-GUIDE.md
    ├── TEAM-ONBOARDING.md
    └── quarterly-report-template.md
```

---

## 🗺️ Module → Example Mapping

| Module | Feature | What You Create | Reference File |
|--------|---------|-----------------|----------------|
| **Module 1** | Repository Instructions | `copilot-instructions.md` | [completed-config/.github/copilot-instructions.md](completed-config/.github/copilot-instructions.md) |
| **Module 1** | Documentation | `ARCHITECTURE.md` | [completed-config/docs/ARCHITECTURE.md](completed-config/docs/ARCHITECTURE.md) |
| **Module 3** | Custom Prompts | Prompt files | [completed-config/.github/prompts/](completed-config/.github/prompts/) |
| **Module 4** | Custom Agents | Agent configuration files | [completed-config/.github/agents/](completed-config/.github/agents/) |
| **Module 5** | Custom Instructions | File-scoped instructions | [completed-config/.github/instructions/](completed-config/.github/instructions/) |
| **Module 6** | Agent Skills | Domain-specific skills | [completed-config/skills/agent-skills.md](completed-config/skills/agent-skills.md) |
| **Module 10** | Enterprise Patterns | Org templates | [module-10/](module-10/) |
| **Appendix** | Visual Context | Using images with Copilot | [completed-config/visual-context/README.md](completed-config/visual-context/README.md) |

---

## 🎯 The Key Customization Features

This workshop teaches multiple ways to customize GitHub Copilot:

| # | Feature | What It Does | Example |
|---|---------|--------------|---------|
| 1 | **Repository Instructions** | Global context for every Copilot interaction | [copilot-instructions.md](completed-config/.github/copilot-instructions.md) |
| 2 | **Custom Prompts** | Reusable prompt templates with variables | [prompts/](completed-config/.github/prompts/) |
| 3 | **Custom Agents** | Specialized AI assistants for specific tasks | [agents/](completed-config/.github/agents/) |
| 4 | **Custom Instructions** | File-scoped context via `applyTo` patterns | [instructions/](completed-config/.github/instructions/) |
| 5 | **Agent Skills** | Domain-specific knowledge Copilot loads automatically | [skills/](completed-config/skills/) |

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
