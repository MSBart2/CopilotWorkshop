# Module 10: Agentic SDLC + Ship

## ⏰ Monday 7:00 PM — Parallel Development Power

> *"We've learned to use agents one at a time. Now let's see what happens when we run them everywhere at once."*  
> — Marcus, ready to unleash the full potential of multi-interface agents

---

## 📖 Overview

You've learned to customize Copilot with instructions, prompts, agents, skills, and MCP servers. But so far, you've been working sequentially—one task at a time, one interface at a time.

**Agentic SDLC** changes that. With agents running across VS Code, GitHub.com, and the CLI simultaneously, you can build features in parallel.

**Time**: ~90 minutes  
**Personas**: Marcus (parallel orchestration), David (background tasks), Rafael (sprint planning)

---

## 🎯 Learning Objectives

By the end of this module, you will:

- Run multiple agents simultaneously across different interfaces
- Use VS Code Agent Mode for complex, interactive development
- Use GitHub Copilot Web (Coding Agent) for background PR workflows
- Use `copilot` CLI for terminal-based automation
- Orchestrate parallel development workflows
- Use checkpoints to safely review and roll back changes

---

## 📚 Key Concepts

### The Three Agent Interfaces

| Interface | Best For | Runs In |
|-----------|----------|---------|
| **VS Code Agent Mode** | Complex, interactive development | Foreground |
| **GitHub Web (Coding Agent)** | Well-defined autonomous tasks | Background |
| **GitHub Copilot CLI** | Terminal/infrastructure work | Terminal |

### Interface Selection Guide

| Need | Best Interface | Why |
|------|----------------|-----|
| Complex feature with iteration | VS Code Agent Mode | Interactive feedback loop |
| Well-defined task, run autonomously | GitHub Web Coding Agent | Creates PR in background |
| Terminal/DevOps tasks | Copilot CLI | Agentic terminal capabilities |
| Quick questions | Any | All handle explanations well |

### The Parallel Workflow

```
Sprint Start
    │
    ├─── VS Code Agent Mode ─────────── (Interactive, you + agent)
    │
    ├─── GitHub Web Agent ────────────── (Background, autonomous)
    │
    └─── Copilot CLI ─────────────────── (Terminal, scripted)
    │
Sprint End ◄── All streams converge
```

---

## 🔨 Exercises

> 📂 **Full exercise content**: [EXERCISES.md](./EXERCISES.md)

### Exercise Overview

| Exercise | Persona | Focus | Time |
|----------|---------|-------|------|
| 5.1 | Marcus | VS Code Agent Mode | 20 min |
| 5.2 | David | GitHub Web Coding Agent | 20 min |
| 5.3 | Marcus | GitHub Copilot CLI | 20 min |
| 5.4 | Team | The Convergence | 15 min |
| 5.5 | Rafael | Sprint Orchestration | 25 min |
| 5.6 | Sarah | Checkpoints (Safety) | 10 min |

### Quick Links

- [Exercise 5.1: VS Code Agent Mode](./EXERCISES.md#exercise-51-vs-code-agent-mode--the-feature-build) — Marcus builds search feature
- [Exercise 5.3: Copilot CLI](./EXERCISES.md#exercise-53-github-copilot-cli--the-infrastructure-sprint) — Marcus's infrastructure sprint
- [Exercise 5.5: Sprint Orchestration](./EXERCISES.md#exercise-55-sprint-orchestration--rafael-directs-the-symphony) — Rafael prioritizes and orchestrates

---

## 🧑‍💼 Choose Your Path

| Your Role | Recommended Focus | Start Here |
|-----------|------------------|------------|
| **Developer** | Interactive development | [Marcus's Path](./personas/marcus.md) |
| **Product/Lead** | Sprint orchestration | [Rafael's Path](./personas/rafael.md) |
| **DevOps** | Parallel infrastructure | [Marcus's Path](./personas/jordan.md) |

---

## 🧠 Key Takeaways

### What Changed

| Traditional Development | Agentic SDLC |
|------------------------|--------------|
| One task at a time | Multiple tasks in parallel |
| Developer writes code | Developer orchestrates agents |
| Sequential workflow | Parallel workflow |
| Bottleneck: typing speed | Bottleneck: orchestration skill |

### The Productivity Math

```
Sequential: Task A (30 min) + Task B (30 min) + Task C (30 min) = 90 min
Parallel:   Max(Task A, Task B, Task C) + Integration (10 min) = 40 min
Speedup:    2.25x
```

### The New Skills

1. **Task decomposition** — Breaking work into parallelizable chunks
2. **Interface selection** — Choosing the right agent for each task
3. **Context preparation** — Setting up agents for success
4. **Integration** — Merging parallel work streams
5. **Quality review** — Validating agent output before shipping

---

## 📚 Quick Reference

### Interface Selection

| Task Type | Interface | Why |
|-----------|-----------|-----|
| Search feature | VS Code Agent | Needs iteration |
| Analytics endpoints | GitHub Web Agent | Well-defined, autonomous |
| Test fixtures | Copilot CLI | Terminal scripting |
| Database migrations | Copilot CLI | Infrastructure |
| Bug fix with investigation | VS Code Agent | Needs human judgment |
| Documentation update | GitHub Web Agent | Straightforward |

### Official Documentation

- [VS Code: Copilot Agent Mode](https://code.visualstudio.com/docs/copilot/chat/chat-agent-mode)
- [GitHub Copilot Coding Agent](https://docs.github.com/en/copilot/using-github-copilot/using-copilot-coding-agent)
- [GitHub Copilot CLI](https://docs.github.com/en/copilot/github-copilot-in-the-cli)

---

## 🎉 Workshop Complete!

### What You Learned Across All Modules

| Module | Concept | Key Artifact |
|--------|---------|--------------|
| 1 | Repository Instructions | `copilot-instructions.md` |
| 2 | Agent Plan Mode | Structured thinking |
| 3 | Custom Prompts | `.github/prompts/` |
| 4 | Custom Agents | `.github/agents/` |
| 5 | Custom Instructions | `.github/instructions/` |
| 6 | Agent Skills | `.github/skills/` |
| 7 | MCP Servers | `.vscode/mcp.json` |
| 8 | Copilot Web | GitHub.com workflows |
| 9 | Copilot CLI | Terminal automation |
| 10 | Agentic SDLC | Parallel orchestration |

### The Transformation

**Before**: Value came from knowing syntax  
**After**: Value comes from clarity of thought

Developers who thrive with AI:
- Express intent clearly
- Document patterns consistently
- Review output critically
- Design systems thoughtfully

---

## ➡️ What's Next?

### Apply to Your Real Projects

1. **Start with `copilot-instructions.md`** — The highest-leverage change
2. **Build your prompt library** — Capture what works
3. **Share with your team** — Patterns scale through documentation
4. **Keep experimenting** — AI tools evolve; stay curious

### Continue Learning

- [Module 11: Enterprise Patterns](../11-enterprise-patterns/README.md) — Organization-wide adoption
- [Module 0: Orientation](../00-orientation/README.md) — Review personas and philosophy

*Now go build something amazing—with AI as your partner, not your replacement.*
