# Module 2: Agent Plan Mode

## ⏰ — The Complexity Problem

> *"We have the foundation, but now I need to implement the character detail page. Where do I even start?"*  
> — Marcus, staring at a feature request spanning frontend, backend, and database

---

## 📖 Story So Far

In **Module 0**, the team experienced **The Struggle**—working with an unconfigured Copilot that gave generic suggestions because it didn't understand the codebase.

In **Module 1**, they established the foundation: **ARCHITECTURE.md** gave Copilot structural understanding (reducing context waste), and **.github/copilot-instructions.md** standardized patterns across the team. Now Copilot understands their tech stack and coding conventions.

Now, in **Module 2**, they face a new challenge: **complex, multi-file features** that span frontend, backend, and database layers. How do you break down a feature that touches 6+ files without missing requirements or creating implementation conflicts?

💡 **Integration Note:** This module builds on the ARCHITECTURE.md and copilot-instructions.md from Module 1 by using plan mode to analyze those artifacts and generate implementation plans that respect your documented architecture and standards.

---

⚠️ **Prerequisites**: 
- Complete [Module 00: Orientation](../00-orientation/README.md)
- Complete [Module 01: Repository Instructions](../01-repository-instructions/README.md)
- ARCHITECTURE.md and .github/copilot-instructions.md files created

---

## 🧠 Mindful Moment: From Implementation to Orchestration

**Traditional thinking:** *"I need to figure out all the steps before I start coding."*

**AI-native thinking:** *"AI can research my codebase and propose a plan—I validate the architecture, then execute."*

This isn't about letting AI make decisions for you. It's about using AI to do the comprehensive analysis (what files exist, what patterns are used, what dependencies matter), so you can focus on what requires human judgment: validating the approach, catching edge cases, and making architectural decisions.

---

💡 **Understanding the Plan Agent**

The **plan agent** is a specialized mode in VS Code Copilot Chat that helps you research and plan complex tasks before implementing them. Unlike the default agent that immediately starts making changes, the plan agent:

- **Analyzes comprehensively** using read-only tools—no code changes until you approve
- **Breaks down complexity** into manageable, sequenced steps with clear dependencies
- **Identifies open questions** where requirements are ambiguous or need clarification
- **Respects your architecture** by referencing ARCHITECTURE.md and copilot-instructions.md
- **Presents for review** so you validate the approach before any implementation

Think of the plan agent as your research assistant who maps the terrain before you start building. You get a detailed implementation roadmap that you can refine through conversation before executing.

---

## 📚 Key Concepts

### The Plan-First Workflow

Instead of jumping straight to implementation, the plan-first workflow separates research from execution:

**Traditional workflow:**
1. Read feature requirements
2. Start coding
3. Realize you missed dependencies
4. Refactor or start over

**Plan-first workflow:**
1. **Ask plan agent** to research the task
2. **Review the plan draft** — validate steps, identify issues
3. **Iterate on the plan** — clarify requirements, adjust scope
4. **Execute the plan** — implement with confidence

**Why this matters:**
- **Catch issues early** — Architectural conflicts surface during planning, not during PR review
- **Shared understanding** — The plan becomes documentation of what you're building and why
- **Better estimates** — Clear steps = accurate effort assessment
- **Learning tool** — Junior developers see how experienced devs think through implementation

### Plan Agent Features

**1. Read-Only Research**
- Uses `@workspace` to analyze your codebase
- Reads ARCHITECTURE.md, copilot-instructions.md, and relevant files
- Identifies patterns, dependencies, and constraints
- **Makes zero code changes** until you approve

**2. Structured Output**
- **Summary**: High-level overview of the task and approach
- **Implementation Steps**: Ordered, actionable tasks with file paths and rationale
- **Open Questions**: Ambiguities that need clarification before starting
- **Dependencies**: What needs to happen first, what can be parallelized

**3. Iterative Refinement**
- Stay in plan mode to refine before execution
- Add clarifications: *"Use Redis for caching"*
- Adjust scope: *"Skip the admin UI for now"*
- Reorder steps: *"Do database schema first"*

**4. Flexible Execution**
- Execute the entire plan automatically
- Start a background/cloud agent session for autonomous work
- Implement specific steps: *"Start with the UI"* or *"only steps 1 and 2"*
- Save the plan for team review or future reference

### How Plan Mode Uses Your Foundation

When you invoke the plan agent, it automatically reads:

1. **ARCHITECTURE.md** → Understands tech stack, folder structure, data flow
2. **.github/copilot-instructions.md** → Follows your coding standards and patterns
3. **Existing code** → Analyzes current implementations to match style
4. **Dependencies** → Identifies what files/modules are affected

**Result:** Plans that respect your architecture, follow your conventions, and integrate seamlessly with existing code.

> 📂 **Reference Examples**: The [`examples/completed-config/`](../../examples/completed-config/) folder contains sample files showing completed plans:
> - [`docs/character-detail-challenge.md`](../examples/completed-config/docs/character-detail-challenge.md) — Example feature plan output

---

## What You'll Learn

**Agent plan mode** separates research from implementation, letting AI analyze your codebase comprehensively before proposing changes. You'll learn to leverage plan mode for complex multi-file features, validate AI-generated plans with your expertise, and execute implementations with confidence. You'll measure time saved in planning, conflicts avoided, and review cycles reduced.

**Time:** ~25 minutes | **Exercises:** 3

---

## 📋 Exercise Planning

The exercises below use plan mode to tackle increasingly complex implementation challenges. Each exercise demonstrates how planning before coding saves time and prevents errors.

| # | Exercise | Lead | Support | Problem | Solution | Key Metrics | Artifacts |
|---|----------|------|---------|---------|----------|-------------|-----------|
| [2.1](exercise-2.1.md) | Invoking Plan Mode | Marcus | Sarah | Feature planning: 35 min manual analysis, 5 missed dependencies per sprint | Use plan agent to research character detail feature implementation | 35→7 min planning, 5→1 missed dependencies | Plan output in Chat |
| [2.2](exercise-2.2.md) | Validating and Refining Plans | David | Elena, Sarah | AI plans miss edge cases: 3 architectural issues per plan, 2 review cycles | Review plan output, identify missing requirements, iterate before execution | 3→0 architectural issues, 2→1 review cycles | Refined plan with annotations |
| [2.3](exercise-2.3.md) | Executing Plans | Marcus | Elena | Implementation conflicts: 25 min debugging integration issues, 40% test coverage gaps | Execute validated plan with test-first approach | 25→5 min debugging, 40%→85% initial coverage | Character detail feature files |

---

## 📚 What This Feature Does

**Plan Agent:** A specialized Copilot mode that researches complex tasks comprehensively before proposing implementation steps, using read-only analysis of your codebase, architecture, and conventions.

**When to use it:** When implementing features that span multiple files or layers, refactoring code with unclear dependencies, or breaking down ambiguous requirements into actionable steps.

**What you'll build:** 
- **Character detail page feature** — Full-stack implementation plan spanning frontend, backend, and database
- **Validated implementation roadmap** — Plan reviewed and refined by experienced developers
- **Executed feature code** — Frontend components, API endpoints, database queries, and tests

**Official Documentation:**
- 📖 [Planning in VS Code Chat](https://code.visualstudio.com/docs/copilot/chat/chat-planning) — How to use the plan agent and iterate on plans
- 📖 [Context Engineering Guide](https://code.visualstudio.com/docs/copilot/guides/context-engineering-guide) — How Copilot uses workspace context
- 📖 [Configure Tools for Agents](https://code.visualstudio.com/docs/copilot/chat/chat-tools) — Understanding agent capabilities and tool access

> 💡 **Important for this module:** The plan agent uses `@workspace` context automatically, which means it reads your ARCHITECTURE.md and copilot-instructions.md without you needing to reference them explicitly. This enables plans that respect your documented architecture and follow your coding standards from the start.

---

## ➡️ Next Module

**[Module 3: Custom Prompts](../03-custom-prompts/README.md)** — Turn repeated requests into reusable prompt templates that capture domain expertise and accelerate common workflows.

> *"I just ran the same planning workflow three times. There has to be a way to template this..."*  
> — Sarah, noticing patterns in her Copilot usage

---

## 📌 Practices Used

| Practice | How It Applied in This Module |
|----------|-------------------------------|
| 📚 **Documentation as Input** | Plan agent reads ARCHITECTURE.md and copilot-instructions.md to generate architecture-aligned plans |
| 🎯 **Separation of Concerns** | Research (plan mode) separated from execution (implementation) for better validation |
| 🔄 **Iterative Refinement** | Plans refined through conversation before code changes, catching issues early |

---

## 🎭 Behind the Scenes

*For those who want to understand the deeper mechanics:*

### How the Plan Agent Works

The plan agent uses a different workflow than the default Copilot agent:

1. **Read-Only Research Phase**: Uses specialized tools to analyze your codebase without making changes—reads files, searches patterns, maps dependencies, identifies constraints
2. **Structured Planning**: Organizes findings into a standardized format—summary, implementation steps, open questions, dependencies
3. **Iterative Refinement Loop**: Stays in plan mode for multiple turns, allowing you to clarify requirements and adjust scope before committing to implementation
4. **Execution Handoff**: Once approved, transitions to implementation mode (default agent or background agent) with the plan as context

### Why Read-Only Research Matters

Traditional Copilot workflow makes changes immediately, which means:
- You see proposed changes mixed with context analysis
- It's harder to validate the approach before committing
- Architectural issues surface late (during PR review, not planning)

Plan mode separates analysis from action:
- You validate the *approach* before seeing *implementation*
- Architectural conflicts caught early (during planning, not coding)
- The plan becomes documentation of *why* code exists

### Todo Lists vs Plans

You'll also encounter **todo lists** in Copilot—what's the difference?

- **Plans** = Research-first, comprehensive breakdown of complex tasks *before* implementation
- **Todos** = Progress tracking *during* implementation for keeping agent focused on long-running tasks

Plans happen *before* coding; todos happen *during* coding. Both help with complexity, but at different stages.

**Key Takeaway:** Use plan mode when you need to understand the full scope before starting. Use default mode with todos when you're ready to execute and need progress tracking.

---
