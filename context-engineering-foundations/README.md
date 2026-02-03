# Context Engineering Foundations Workshop

## 🎯 The Foundation That Unlocks Everything

> *"Context engineering is the difference between generic AI output and expert-level AI output. It's not a feature—it's the foundation that makes every other Copilot capability effective."*

---

## Workshop Overview

**Duration:** 2 hours (hands-on)  
**Format:** Customer workshop with live exercises  
**Prerequisites:** VS Code with GitHub Copilot extension installed

This workshop establishes the **foundational skills** that determine whether Copilot delivers generic autocomplete or expert-level assistance. Participants will build real context engineering artifacts and measure the difference.

---

## 🧠 The Core Insight

**The shift isn't from "no AI" to "AI"—it's from generic AI to expert AI.**

Without context engineering:
- Copilot gives plausible suggestions that need heavy review
- "That's not how we do it here" feedback loops repeat
- Each prompt is trial-and-error
- Suggestions don't understand your architecture, standards, or patterns

With context engineering:
- Copilot operates as an expert extension of your team
- Suggestions embody your standards from the first attempt
- Quality doesn't degrade as complexity increases
- Each good suggestion enables better next ones (compounding value)

---

## 💭 Why This Matters (By Role)

| Role | Without Strong Context | With Strong Context |
|------|----------------------|---------------------|
| **Senior Developer** | Generic suggestions, 3 review rounds per PR | Standards-aware code, 1 review round |
| **Architect** | AI ignores architecture decisions | AI respects and extends patterns |
| **DevOps Engineer** | Generic troubleshooting, 15+ min debugging | Root cause identification in 90 seconds |
| **QA Engineer** | AI tests miss edge cases | Comprehensive coverage with human validation |
| **Product Manager** | Technical complexity unclear | Rapid scope analysis with constraints |

---

## 📋 Workshop Structure

| Time | Section | Focus | Key Outcome |
|------|---------|-------|-------------|
| 0:00-0:15 | [Introduction](00-introduction.md) | Why context matters | Understand the value proposition |
| 0:15-0:30 | [Exercise 0](exercise-0-context-primitives.md) | Context primitives | Master `@`-mentions and `#`-mentions |
| 0:30-1:00 | [Exercise 1](exercise-1-project-context.md) | Persistent context layers | ARCHITECTURE.md + instructions + `applyTo` patterns |
| 1:00-1:25 | [Exercise 2](exercise-2-prompts-and-enforcement.md) | Prompts & enforcement | Reusable prompts + Standards Review Agent |
| 1:25-1:50 | [Exercise 3](exercise-3-execution-validation.md) | Execution & validation | Implement + review + measure improvement |
| 1:50-2:00 | [Wrap-Up](04-wrapup.md) | Measuring success | Document your context engineering baseline |

---

## 🎯 What You'll Build

By the end of this workshop, you'll have created:

1. **Context Primitive Mastery** — Know when to use `@workspace`, `#codebase`, `#file`, `#fetch`, and more
2. **`docs/ARCHITECTURE.md`** — Project structure documentation that gives Copilot immediate understanding
3. **`.github/copilot-instructions.md`** — Persistent context automatically included in all interactions
4. **`.github/instructions/*.instructions.md`** — File-pattern-specific instructions using `applyTo`
5. **`.github/prompts/*.prompt.md`** — Reusable prompts for common tasks
6. **`.github/agents/standards-review.agent.md`** — Agent that enforces your documented standards
7. **Baseline metrics** — Before/after measurements proving impact

---

## 🔧 Context Primitives Quick Reference

### @-Mentions (Chat Participants)
| Participant | Purpose |
|-------------|---------|
| `@workspace` | Full codebase understanding |
| `@vscode` | VS Code configuration and features |
| `@terminal` | Terminal commands and output |
| `@github` | GitHub features and workflows |

### #-Mentions (Context Variables)
| Variable | Purpose |
|----------|---------|
| `#file:path` | Attach specific file |
| `#selection` | Current selection |
| `#codebase` | Search entire codebase |
| `#problems` | Current errors/warnings |
| `#changes` | Uncommitted git changes |
| `#terminalLastCommand` | Last terminal command + output |
| `#usages` | Find references, implementations (Agent mode) |
| `#testFailure` | Test failure information (Agent mode) |
| `#fetch URL` | Web content |
| `#githubRepo owner/repo` | GitHub repository |

---

## 📂 Persistent Context Layers

| Layer | File Location | Scope | Use For |
|-------|---------------|-------|---------|
| **Repository** | `.github/copilot-instructions.md` | All requests in workspace | Team standards |
| **File-Pattern** | `.github/instructions/*.instructions.md` | Matching files via `applyTo` | Language/component rules |
| **User** | Profile `.instructions.md` | All your workspaces | Personal preferences |
| **Documentation** | `docs/*.md` | Referenced via links | Architecture, decisions |

---

## 🧭 Customization Types (Quick Reference)

| Type | When to Use | This Workshop |
|------|-------------|---------------|
| **Instructions** | Passive guidelines that apply automatically | ✅ Covered |
| **Prompts** | On-demand tasks via `/command` | ✅ Covered |
| **Agents** | Specialized personas with specific tools | ✅ Introduced |
| **Skills** | Portable capabilities across VS Code, CLI, coding agent | 📍 Advanced topic |

> 💡 **Skills** are an advanced topic covered in the wrap-up. They're powerful for cross-tool portability but require the foundations covered here first.

---

## 📊 Success Metrics

A successful context engineering foundation delivers:

| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| Query response accuracy | 60-70% | 90%+ | Consistent correct answers |
| Response time (structural questions) | 6-10 seconds | 2-3 seconds | 60-70% faster |
| Review rounds per PR | 2-3 rounds | 1 round | 50-70% reduction |
| Pattern consistency | Multiple conflicting patterns | Single documented pattern | 100% consistency |
| Onboarding time | Hours reading code | Minutes reading docs | Immediate productivity |

---

## 📚 Official Documentation

- [VS Code: Context Engineering Guide](https://code.visualstudio.com/docs/copilot/guides/context-engineering-guide) — Complete workflow reference
- [VS Code: Custom Instructions](https://code.visualstudio.com/docs/copilot/customization/custom-instructions) — Persistent context configuration
- [VS Code: Prompt Files](https://code.visualstudio.com/docs/copilot/customization/prompt-files) — Reusable prompts
- [VS Code: Custom Agents](https://code.visualstudio.com/docs/copilot/customization/custom-agents) — Specialized persona creation
- [VS Code: Agent Skills](https://code.visualstudio.com/docs/copilot/customization/agent-skills) — Portable capabilities (advanced)
- [GitHub: Best Practices for Copilot](https://docs.github.com/en/copilot/using-github-copilot/best-practices-for-using-github-copilot) — Prompt engineering fundamentals

---

## ⚙️ Setup Requirements

Before the workshop:

1. **VS Code** — Latest stable version
2. **GitHub Copilot extension** — Installed and signed in
3. **GitHub Copilot Chat extension** — Installed
4. **Sample project** — Any codebase you work with (or use our sample)

> 💡 **Tip:** Bring a real project you work on. The value of context engineering is most visible when applied to a codebase you know well.

---

## 🚀 Getting Started

**[Begin with Introduction →](00-introduction.md)**

---

## 📂 Workshop Files

```
context-engineering-foundations/
├── README.md                              # This file - workshop overview
├── 00-introduction.md                     # Why context engineering matters
├── exercise-0-context-primitives.md       # @-mentions and #-mentions (15 min)
├── exercise-1-project-context.md          # Persistent context layers (30 min)
├── exercise-2-prompts-and-enforcement.md  # Prompts + Standards Review Agent (25 min)
├── exercise-3-execution-validation.md     # Execution & validation (25 min)
├── 04-wrapup.md                           # Measuring success, next steps
└── templates/                             # Reference templates
    ├── architecture-template.md
    ├── copilot-instructions-template.md
    ├── testing.instructions-template.md          # applyTo: **/*.test.*
    ├── react-components.instructions-template.md # applyTo: src/components/**
    └── api-routes.instructions-template.md       # applyTo: src/routes/**
```

---

## 🎭 The Transformation

**Before this workshop:** Copilot is a helpful but inconsistent assistant that requires constant correction.

**After this workshop:** Copilot operates with your project's context, patterns, and standards built in—delivering expert-level assistance on every interaction.

> *"The best code isn't written by the AI or the human—it's written by the human who knows how to give the AI the right context."*
