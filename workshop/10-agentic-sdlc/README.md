# Module 10: Agentic SDLC + Ship

## ⏰ — Background Agent Power

> *"We've mastered interactive agents and CLI automation. Now let's see what happens when agents work completely autonomously in the background—while we focus on the next task."*  
> — Marcus, ready to unleash background agent orchestration

---

## 📖 Story So Far

In **Module 8**, the team discovered GitHub Copilot Web workflows for automated PR creation and code reviews running in the background while continuing local development.

In **Module 9**, they mastered CLI automation with `gh copilot` commands for terminal-based workflows, infrastructure management, and deployment automation.

Throughout Modules 1-9, they built a comprehensive customization system with repository instructions, custom prompts, agents, skills, and MCP servers that work across all interfaces.

Now, in **Module 10**, they discover the final piece: background agents that run completely autonomously using Git worktrees for isolation, custom agent personas for specialized work, and seamless hand-off workflows from planning to execution.

💡 **Integration Note:** This module combines custom agents from Module 4 with CLI capabilities from Module 9, enabling autonomous background execution of specialized tasks while you continue other work.

---

⚠️ **Prerequisites**: 
- Complete [Module 00: Orientation](../00-orientation/README.md)
- Have working FanHub project from previous modules
- VS Code 1.108+ with background agents enabled
- Custom agents configured from Module 4
- GitHub Copilot CLI from Module 9

---

## 🧠 Mindful Moment: From Sequential to Autonomous

**Traditional thinking:** *"Development is interactive—I write code, test it, fix it, repeat. Even with agents, I need to guide every step."*

**AI-native thinking:** *"Development is autonomous—agents handle well-defined work independently while I focus on planning, architecture, and integration. True parallelism without supervision."*

This isn't just about running multiple agents—it's about agents that work completely independently in isolated environments, handling complex tasks from start to finish while you move on to the next challenge.

---

💡 **Understanding Background Agents**

**Background agents** are CLI-based agents that run completely autonomously on your local machine without requiring supervision or interaction. Unlike interactive agents that need your guidance, background agents handle well-defined tasks from start to finish.

Key capabilities that make background agents powerful:
- **Git worktree isolation** — Agents work in separate folders, preventing conflicts with your active work
- **Custom agent personas** — Your defined agents (from Module 4) can run autonomously in background
- **Hand-off workflows** — Seamlessly transition from interactive planning to autonomous execution
- **Session management** — Monitor and control multiple background agents from VS Code's unified interface

The breakthrough is autonomous execution: you define what needs to be done, then agents handle all implementation details independently.

---

## 📚 Key Concepts

### Background Agent Types

**Copilot CLI Background Agents**
- **Purpose**: Autonomous execution of well-defined development tasks
- **Value**: Complete implementation without supervision or interruption
- **Result**: Finished features ready for review while you work on other tasks
- **Best for**: Feature implementation from clear specifications, refactoring with defined patterns

**Custom Agent Background Execution**
- **Purpose**: Specialized autonomous work using your defined agent personas
- **Value**: Domain expertise applied automatically during development
- **Result**: Consistent application of standards and patterns without manual oversight
- **Best for**: Code reviews, architecture validation, specialized analysis

### Git Worktree Isolation

Background agents can use Git worktrees to create completely isolated environments:
- **Conflict Prevention**: Agents make changes in separate folders, never affecting your active work
- **Safe Experimentation**: Try multiple implementation approaches without risk
- **Easy Integration**: Review and merge agent work when ready, or discard if not needed

### Hand-off Workflows

The most powerful pattern is planning interactively, then executing autonomously:
1. **Plan phase**: Use interactive agents to clarify requirements and approach
2. **Hand-off**: Transition the complete context to background agent execution
3. **Autonomous work**: Agent implements independently while you start next task
4. **Integration**: Review and merge completed work when ready

> 📂 **Reference Examples**: The [`examples/completed-config/`](../../examples/completed-config/) folder contains sample files showing background agent integration:
> - [Custom agents for background use](../../examples/completed-config/.github/agents/)
> - [Worktree management scripts](../../examples/completed-config/scripts/)

---

## What You'll Learn

**Background agents** enable truly autonomous development through isolated execution environments and seamless hand-off workflows. You'll transition from supervised agent interaction to autonomous agent execution, measuring the productivity gains from unsupervised parallel work.

**Time:** ~60 minutes | **Exercises:** 3

---

## 📋 Exercise Planning

The exercises below demonstrate autonomous background agent capabilities that weren't covered in previous modules. Each exercise shows measurable improvements through unsupervised execution.

| # | Exercise | Lead | Support | Problem | Solution | Key Metrics | Artifacts |
|---|----------|------|---------|---------|----------|-------------|-----------|
| [10.1](exercise-10.1.md) | Plan-to-Background Handoff | Rafael | Marcus, David | Planning blocks implementation: 45 min planning + 60 min supervised coding | Plan agent → background agent hand-off for autonomous execution | 105→45 min total, 0 supervision needed | Complete feature from plan |
| [10.2](exercise-10.2.md) | Isolated Worktree Experiments | Marcus | Elena | Experimental features risk main branch: 90 min rollback, merge conflicts | Background agents in Git worktrees for risk-free experimentation | 90→5 min rollback, 0 conflicts | Multiple implementation variants |
| [10.3](exercise-10.3.md) | Autonomous Architecture Review | David | Sarah | Manual code reviews: 30 min per review, inconsistent application | Custom review agent running autonomous background analysis | 30→2 min per review, 100% consistent standards | Real-time architecture compliance |

---

## 📚 What This Feature Does

**Background Agents:** Autonomous AI execution in isolated environments with custom personas, Git worktree isolation, and seamless hand-off from interactive planning to unsupervised implementation.

**When to use it:** When you have well-defined tasks that can be executed independently—feature implementation from specifications, experimental variations, or specialized analysis—allowing you to start the next task while agents work autonomously.

**What you'll build:** 
- **Autonomous execution workflows** — Agents that work independently from planning to completion
- **Isolated experimentation system** — Git worktrees for risk-free agent experimentation
- **Custom agent automation** — Your specialized agents running unsupervised background tasks

**Official Documentation:**
- 📖 [VS Code: Background Agents](https://code.visualstudio.com/docs/copilot/agents/background-agents) — Autonomous agent execution and worktree isolation
- 📖 [VS Code: Custom Agents](https://code.visualstudio.com/docs/copilot/customization/custom-agents) — Creating specialized agent personas for background work
- 📖 [VS Code: Git Worktrees](https://code.visualstudio.com/docs/sourcecontrol/branches-worktrees) — Isolated development environments

> 💡 **Important for this module:** Git worktree isolation is essential because it allows agents to work completely independently without any risk to your main workspace. This enables true autonomous execution that previous modules couldn't achieve.

---

## ➡️ Next Module

**[Module 11: Enterprise Patterns](../11-enterprise-patterns/README.md)** — Organization-wide adoption patterns, governance frameworks, and scaling autonomous agent workflows across development teams.

> *"We've proven agents can work autonomously for individual tasks. Now how do we scale this across an entire engineering organization without losing control?"*  
> — Sarah, ready to validate enterprise-scale autonomous AI adoption

---

## 📌 Practices Used

| Practice | How It Applied in This Module |
|----------|-------------------------------|
| 📚 **Autonomous Execution** | Demonstrated agents working independently from planning through completion without supervision |
| 🎯 **Worktree Isolation** | Used Git worktrees to enable risk-free experimentation and prevent conflicts with active work |
| 🔄 **Hand-off Workflows** | Established seamless transitions from interactive planning to autonomous background execution |

---

## 🎭 Behind the Scenes

*For those who want to understand the deeper mechanics:*

### Autonomous Agent Context Management

Background agents maintain context differently from interactive agents:

1. **Initial Context**: Complete conversation history and repository state at hand-off time
2. **Isolated Execution**: Agents work in separate Git worktrees with full repository access
3. **Progress Tracking**: VS Code monitors agent progress without requiring interaction
4. **Completion Handling**: Agents signal completion and present results for integration

### The Supervision Mathematics

Traditional supervised development creates constant context switching:
- Plan (15 min) + Code with guidance (60 min) + Review (15 min) = 90 minutes + supervision overhead

Background agent autonomy eliminates supervision:
- Plan (15 min) + Hand-off (2 min) + Autonomous execution (parallel) + Review (5 min) = 22 minutes active time
- Productivity gain: 4x active time reduction through autonomous execution

**Key Takeaway:** The bottleneck shifts from supervision time to planning clarity—the better you specify what needs to be done, the more effectively agents can work independently while you focus on the next challenge.

---
