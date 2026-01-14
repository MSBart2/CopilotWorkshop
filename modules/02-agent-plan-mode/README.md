# Module 2: Agent Plan Mode

## ⏰ Monday 10:30 AM — Planning Before Implementing

> *"Before we start generating code, let's plan what we're doing. The best AI results come from the clearest thinking."*  
> — Sarah, introducing the team to structured AI collaboration

---

⚠️ **Prerequisites**: Complete [Module 01](../01-repository-instructions/README.md) and have `fanhub/docs/character-detail-challenge.md` tracking file with entries for Modules 00, 01a, and 01b.

---

## 📖 The Story

In **Module 01**, the FanHub team added structure: `docs/ARCHITECTURE.md` documented their system design, and `.github/copilot-instructions.md` established coding standards. The Character Detail Challenge became dramatically easier.

But Sarah notices something: **even with better context, the team still jumps straight to implementation**. They ask Copilot to build, get code, realize they missed something, iterate. It works, but it's reactive.

*"We've learned to give Copilot context about our codebase, but we haven't learned to use AI to help us **think** about the problems first."*

**The challenge**: The team asks for implementation directly, and edge cases surface AFTER code is written. What if a character has no photo? How does navigation work? What about loading states? Error handling?

**Your mission**: Master GitHub Copilot's agent plan mode to structure your thinking BEFORE implementation. Complete the Character Detail Challenge one final time and experience how planning transforms reactive iteration into first-try success.

---

## 🎯 Learning Objectives

By the end of this module, you will:

- Understand the difference between agent plan mode and implementation mode
- Use plan mode to ask clarifying questions before implementing
- Save planning results to files for team collaboration
- Apply iterative planning workflows to both code and Copilot configuration
- Experience how structured thinking improves AI output quality

**Time**: ~90 minutes (or follow your persona's focused path for less)  
**Featured Personas**: Sarah (Skeptical Senior), David (Seasoned Architect), Marcus (DevOps Developer)

---

💡 **Understanding Plan Mode vs Implementation Mode**

GitHub Copilot operates in two distinct modes when you use the `@agent` prefix:

**Plan Mode**: Focus on analysis, strategy, and structured thinking
- Asks clarifying questions about requirements
- Identifies potential approaches and tradeoffs
- Creates detailed action plans and highlights edge cases
- Outputs structured planning documents

**Implementation Mode**: Focus on execution and code generation
- Generates specific code solutions and makes concrete file changes
- Provides ready-to-use implementations
- Assumes planning decisions have been made

**When to use plan mode**: Problem exploration, approach comparison, configuration design, architecture decisions, workflow optimization, debugging strategy

---

## 🧠 Mindful Moment: The Planning Paradox

Traditional thinking: *"Planning slows us down—let's just start coding."*

AI-native thinking: *"Planning speeds us up—AI helps us think, not just type."*

This isn't about creating project management overhead. It's about leveraging AI for the hardest part of development: **figuring out what to build and how to build it.**

---

## 📚 Key Concepts

### Agent Plan Mode vs Implementation Mode

**Plan Mode** focuses on analysis, strategy, and structured thinking:
- Asks clarifying questions
- Identifies potential approaches and tradeoffs
- Creates detailed action plans
- Highlights considerations and edge cases

**Implementation Mode** focuses on execution:
- Generates specific code solutions
- Makes concrete changes to files
- Assumes planning decisions have been made

### The Planning-to-Implementation Flow

1. **Plan**: Use `@agent` to think through the problem
2. **Save**: Store the plan in a file for reference
3. **Implement**: Switch to implementation mode with clear direction
4. **Iterate**: Return to planning when you need to adjust course

---

## 🎯 Choose Your Path

### Option 1: Follow Your Persona

**Sarah (Skeptical Senior)** — [35 minutes focused path](personas/sarah.md)
- Lead: Exercise 2.1 (Character Detail with plan mode) + 2.4 (Debug investigation)
- **Transformation**: From "prove this isn't hype" to "structured thinking delivers ROI"

**David (Seasoned Architect)** — [25 minutes focused path](personas/david.md)
- Lead: Exercise 2.2 (Architecture assistant design)
- **Transformation**: From "will AI replace me?" to "my expertise makes AI powerful"
- **Creates**: `AGENT-architecture-assistant.md` for Modules 04 & 07

**Marcus (DevOps Developer)** — [20 minutes focused path](personas/marcus.md)
- Lead: Exercise 2.3 (Systematic test failure investigation)
- **Transformation**: From "I'll just rerun the tests" to "I understand what I'm testing"
- **Creates**: `TEST-FAILURE-INVESTIGATION.md` for Module 03

### Option 2: Experience the Full Story

[View all exercises →](EXERCISES.md) (~90 minutes with complete team narrative, Golden Thread checkpoint, and behind-the-scenes insights)

### Option 3: Quick Navigator

| Exercise | Lead Persona | Time | Topic |
|----------|--------------|------|-------|
| [2.1](EXERCISES.md#exercise-21-plan-before-you-code--the-character-detail-challenge-final-form) | Sarah | 25 min | Character Detail Challenge: Final Form |
| [2.2](EXERCISES.md#exercise-22-iterate-on-configuration--david-designs-an-architecture-assistant) | David | 25 min | Design Architecture Assistant Agent |
| [2.3](EXERCISES.md#exercise-23-diagnose-test-failures-systematically--marcus-investigates-the-build) | Marcus | 20 min | Systematic Test Failure Investigation |
| [2.4](EXERCISES.md#exercise-24-debug-investigation--sarah-investigates-before-fixing) | Sarah | 10 min | Systematic Bug Investigation |

---

## 📚 Official Documentation

- [GitHub Copilot: Agent Mode](https://docs.github.com/en/copilot/using-github-copilot/copilot-chat/copilot-chat-in-github)
- [VS Code: Copilot Chat Modes](https://code.visualstudio.com/docs/copilot/copilot-chat#_chat-modes)
- [GitHub Docs: Best practices for prompting](https://docs.github.com/en/copilot/using-github-copilot/best-practices-for-using-github-copilot)

---

## ➡️ Next Up

**[Module 3: Custom Prompts](../03-custom-prompts/README.md)** — Reusable AI Instructions

> *"What if we could save our best AI conversations and reuse them for every similar task?"*  
> — Elena, discovering prompt engineering

Apply your plan mode foundation to create custom prompts that embody your team's patterns. Elena will use Marcus's test investigation methodology to design reusable test generation prompts.

---

## ✅ Module Checklist

- [ ] Completed at least one persona path or full EXERCISES.md
- [ ] Updated `docs/character-detail-challenge.md` with Module 02 metrics
- [ ] Created at least one planning artifact (FEATURE-PLAN, AGENT-design, or TEST-FAILURE-INVESTIGATION)
- [ ] Can explain plan mode vs implementation mode
- [ ] Can articulate how structured thinking improves AI output
- [ ] Understand how Module 02 artifacts connect to Modules 03, 04, and 07


