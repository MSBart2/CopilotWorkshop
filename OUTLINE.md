# GitHub Copilot Training Outline

> **Total Estimated Time**: 10–12 hours (for slower readers)
> **Modules**: 8 + 2 Appendices
> **Exercises**: 57
> **Target Audience**: Developers at all experience levels

---

## 🎯 The Four Principles

This training is built on four principles that define effective AI-assisted development. Every module and exercise connects back to these foundational ideas.

| Principle                               | Core Message                                                                               | Module Focus       |
| --------------------------------------- | ------------------------------------------------------------------------------------------ | ------------------ |
| 🔍 **Clarity Beats Cleverness**         | The best code is code anyone can understand. Write what you mean, simply.                  | Module 02          |
| 🎯 **Intent Over Implementation**       | Describe WHAT you want, not HOW to build it. Let AI handle implementation details.         | Module 04          |
| 📚 **Documentation Is Leverage**        | Write once, benefit infinitely. Documentation scales your knowledge to both humans and AI. | Modules 03, 06     |
| ⚖️ **Human Judgment Is Non-Negotiable** | AI proposes; you decide. Your expertise is the filter that catches what AI misses.         | Modules 05, 07, 08 |

**Full explanation**: [Module 00 — The Four Principles](modules/00-orientation/README.md#the-four-principles)

---

## 📊 Legend

### Tier Markers

| Icon | Tier       | Description                         |
| ---- | ---------- | ----------------------------------- |
| 🆓   | Free       | Available to all Copilot users      |
| 💼   | Business   | Requires Copilot Business license   |
| 🏢   | Enterprise | Requires Copilot Enterprise license |

### Status Markers

| Icon | Status      | Description                                                   |
| ---- | ----------- | ------------------------------------------------------------- |
| ✅   | Complete    | Exercise fully implemented with all sections                  |
| 🚧   | In Progress | Exercise structure exists, some content missing               |
| 📝   | Planned     | Exercise described in philosophy section, not yet implemented |

---

## 👥 Personas Quick Reference

| Persona    | Experience | Key Characteristic | Fears                       | Goals                         |
| ---------- | ---------- | ------------------ | --------------------------- | ----------------------------- |
| **Sarah**  | 15 years   | Skeptical Senior   | Wasting time on hype        | Verify real value             |
| **Marcus** | 5 years    | DevOps Developer   | Being "just ops"            | Write app code confidently    |
| **Priya**  | 1 year     | Recent Graduate    | Appearing incompetent       | Learn without judgment        |
| **David**  | 20 years   | Seasoned Architect | AI replacing expertise      | Augment, not replace          |
| **Elena**  | 8 years    | Quality Champion   | Tests that miss edge cases  | Comprehensive coverage        |
| **Rafael** | 10 years   | Product Visionary  | Misunderstanding complexity | Bridge business and tech      |
| **Jordan** | 12 years   | DevOps Expert      | Security vulnerabilities    | Automation with understanding |

**Full personas**: [Training Personas](modules/00-orientation/PERSONAS.md)

---

## 📚 Module Map

### Module 00: Orientation — Redefining Developer Success

**Time**: 20–25 minutes | **Principle**: All Four | **Status**: ✅

> Why the definition of developer excellence has changed, and how to measure success in the age of AI.

| #   | Exercise                        | Persona | Time      | Tier | Status |
| --- | ------------------------------- | ------- | --------- | ---- | ------ |
| 1   | Define Your New Success Metrics | David   | 15-20 min | 🆓   | ✅     |

---

### Module 01: Getting Started — Your First Wins with Copilot

**Time**: 40–50 minutes | **Principle**: Clarity Beats Cleverness | **Status**: ✅

> Install, configure, and experience your first "wow" moments with Copilot.

| #   | Exercise                                          | Persona | Time      | Tier | Status |
| --- | ------------------------------------------------- | ------- | --------- | ---- | ------ |
| 1   | Installation Verification — "The Moment of Truth" | Sarah   | 5-10 min  | 🆓   | ✅     |
| 2   | Comment-Driven Development — "The New Workflow"   | Marcus  | 10-15 min | 🆓   | ✅     |
| 3   | Copilot Chat — "The Conversation"                 | Priya   | 10-15 min | 🆓   | ✅     |
| 4   | Context is Everything — "The Connected Codebase"  | David   | 10-15 min | 🆓   | ✅     |
| 5   | Explain and Improve — "Understanding Before Changing" | Priya   | 5 min     | 🆓   | ✅     |
| 6   | Next Edit Suggestions — "Copilot Reads Your Mind" | Priya   | 15-20 min | 🆓   | ✅     |

---

### Module 02: Clarity as a Foundation

**Time**: 45–60 minutes | **Principle**: Clarity Beats Cleverness | **Status**: ✅

> Master context management and configuration to give Copilot the clarity it needs.

| #   | Exercise                                               | Persona | Time      | Tier | Status |
| --- | ------------------------------------------------------ | ------- | --------- | ---- | ------ |
| 1   | Context Discovery — "Workspace Indexing & #codebase"   | David   | 10-15 min | 🆓   | ✅     |
| 2   | Context Precision — "Implicit vs Explicit Context"     | Marcus  | 10-15 min | 🆓   | ✅     |
| 3   | External & Visual Context — "#fetch and Images"        | Priya   | 10-15 min | 🆓   | ✅     |
| 4   | Configuration Standards — "Personal & Repository"      | Sarah   | 15-20 min | 🆓   | ✅     |
| 5   | Workflow Efficiency — "Chat Participants & Slash Commands" | Elena   | 10-15 min | 🆓   | ✅     |

---

### Module 03: Documentation as Leverage

**Time**: 45–60 minutes | **Principle**: Documentation Is Leverage | **Status**: 🚧

> Create documentation that benefits both humans AND AI, multiplying your team's knowledge.

| #   | Exercise                                                             | Persona | Time      | Tier | Status |
| --- | -------------------------------------------------------------------- | ------- | --------- | ---- | ------ |
| 1   | Architecture Documentation — "Map the System Once, Navigate Forever" | Marcus  | 20-25 min | 🆓   | ✅     |
| 2   | Pattern Documentation — "Solve Once, Apply Everywhere"               | Sarah   | 20-25 min | 🆓   | ✅     |
| 3   | Convention Documentation — "Standards That Stick"                    | Elena   | 15-20 min | 🆓   | 📝     |
| 4   | Living Documentation — "Docs That Stay Current"                      | David   | 15-20 min | 🆓   | 📝     |
| 5   | AI-First Documentation — "Writing for Humans and Machines"           | All     | 15-20 min | 🆓   | 📝     |
| 6   | Multi-File Leverage — "Connected Knowledge"                          | David   | 15-20 min | 🆓   | 📝     |

---

### Module 04: Intent Over Implementation

**Time**: 45–60 minutes | **Principle**: Intent Over Implementation | **Status**: ✅

> Express WHAT you want, not HOW to build it. Learn the CRISPE framework and build reusable prompt libraries.

| #   | Exercise                                                   | Persona | Time      | Tier | Status |
| --- | ---------------------------------------------------------- | ------- | --------- | ---- | ------ |
| 1   | The Prompt Transformation — "From Vague to Precise"        | Marcus  | 15-20 min | 🆓   | ✅     |
| 2   | Building a Prompt Library — "The Team Toolkit"             | David   | 20-25 min | 🆓   | ✅     |
| 3   | Prompt Variables and Customization — "The Template System" | Sarah   | 15-20 min | 🆓   | ✅     |
| 4   | Prompt Chains — "The Workflow"                             | Priya   | 15-20 min | 🆓   | ✅     |
| —   | _(Quick)_ Tighten the Prompt                               | Priya   | 5 min     | 🆓   | ✅     |
| —   | _(Quick)_ Examples and Non-Examples                        | David   | 5 min     | 🆓   | ✅     |

---

### Module 05: AI-Assisted Design Thinking

**Time**: 60–75 minutes | **Principle**: Human Judgment Is Non-Negotiable | **Status**: ✅

> Use AI to amplify your design thinking—explore possibilities, evaluate tradeoffs, and plan before you code.

| #   | Exercise                                                      | Persona | Time      | Tier | Status |
| --- | ------------------------------------------------------------- | ------- | --------- | ---- | ------ |
| 1   | Problem Decomposition — "From Vague to Precise"               | Marcus  | 20-25 min | 🆓   | ✅     |
| 2   | Solution Exploration — "One Good Idea vs. Many Great Options" | Sarah   | 20-25 min | 🆓   | ✅     |
| 3   | Architectural Design — "Expertise Amplified, Not Replaced"    | David   | 25-30 min | 🆓   | ✅     |
| 4   | Requirements Engineering — "From Ambiguity to Precision"      | Rafael  | 20-25 min | 🆓   | ✅     |
| 5   | Tactical Planning — "Think Before You Code"                   | Marcus  | 25-30 min | 🆓   | ✅     |

---

### Module 06: Collaborative Development Workflows

**Time**: 50–60 minutes | **Principle**: Documentation Is Leverage | **Status**: ✅

> Turn individual AI gains into team velocity through shared prompts, review practices, and collective learning.

| #   | Exercise                                                         | Persona       | Time      | Tier | Status |
| --- | ---------------------------------------------------------------- | ------------- | --------- | ---- | ------ |
| 1   | Building a Shared Prompt Library — "Wisdom That Travels"         | Marcus        | 20-25 min | 🆓   | ✅     |
| 2   | AI Code Review Practices — "Quality at Scale"                    | Sarah         | 15-20 min | 🆓   | ✅     |
| 3   | Pair Programming with AI — "Three-Way Collaboration"             | Priya & David | 15-20 min | 🆓   | ✅     |
| 4   | Team Learning Loops — "Getting Better Together"                  | All           | 15-20 min | 🆓   | ✅     |

---

### Module 07: Agent Fundamentals

**Time**: 60–80 minutes | **Principle**: Human Judgment Is Non-Negotiable | **Status**: ✅

> Unlock autonomous AI assistance with Agent Mode, model selection, and MCP tools.

| #   | Exercise                                                | Persona | Time      | Tier | Status |
| --- | ------------------------------------------------------- | ------- | --------- | ---- | ------ |
| 1   | Your First Agent Workflow — "Autonomous Implementation" | Marcus  | 20-30 min | 🆓   | ✅     |
| 2   | Model Selection Strategy — "Right Tool for the Job"     | All     | 15-20 min | 🆓   | ✅     |
| 3   | Tools & MCP — "Extending Copilot's Reach"               | Sarah   | 30-45 min | 🆓   | ✅     |

---

### Module 08: Enterprise Agents & Debugging

**Time**: 80–105 minutes | **Principle**: Human Judgment Is Non-Negotiable | **Status**: ✅

> Master enterprise agent features, checkpoints, and debugging AI behavior.

| #   | Exercise                                      | Persona | Time      | Tier | Status |
| --- | --------------------------------------------- | ------- | --------- | ---- | ------ |
| 1   | Background Agents — "Work While You Wait"     | David   | 15-20 min | 🏢   | ✅     |
| 2   | Cloud Agents — "Enterprise-Scale AI"          | Jordan  | 15-20 min | 🏢   | ✅     |
| 3   | Custom Agents — "Your Team's Expert"          | Elena   | 20-25 min | 💼   | ✅     |
| 4   | Checkpoints — "Save Your Progress"            | Sarah   | 15-20 min | 🆓   | ✅     |
| 5   | Chat Debug View — "Understanding AI Behavior" | David   | 15-20 min | 🆓   | ✅     |

---

## 📎 Appendices

### Appendix A: Copilot on the Web (GitHub.com)

**Time**: 30–45 minutes | **Principle**: Documentation Is Leverage | **Status**: ✅

> Use Copilot where your code lives: GitHub.com for PRs, issues, and code review.

| #   | Exercise                            | Persona | Time      | Tier | Status |
| --- | ----------------------------------- | ------- | --------- | ---- | ------ |
| 1   | Pull Request Description Generation | All     | 10-15 min | 💼   | ✅     |
| 2   | Code Review with Copilot            | Sarah   | 10-15 min | 💼   | ✅     |
| 3   | Quick Edits with github.dev         | Marcus  | 10-15 min | 🆓   | ✅     |
| 4   | Issue Enhancement                   | Priya   | 10-15 min | 💼   | ✅     |
| 5   | Repository Exploration              | David   | 10-15 min | 💼   | ✅     |
| 6   | Collaborative Review Session        | All     | 15-20 min | 💼   | ✅     |
| —   | _(Quick)_ Tight PR Review           | Sarah   | 5 min     | 💼   | ✅     |
| —   | _(Quick)_ From Logs to Issue        | Priya   | 5 min     | 💼   | ✅     |

---

### Appendix B: Copilot in the CLI

**Time**: 50–60 minutes | **Principle**: Clarity Beats Cleverness | **Status**: ✅

> Use Copilot in your terminal for command suggestions, explanations, and shell workflows.

| #   | Exercise                                                | Persona | Time      | Tier | Status |
| --- | ------------------------------------------------------- | ------- | --------- | ---- | ------ |
| 1   | CLI Installation & Setup — "Your Terminal, Now Smarter" | Jordan  | 10-15 min | 🆓   | ✅     |
| 2   | Command Suggestions — "What's the Command?"             | Marcus  | 10-15 min | 🆓   | ✅     |
| 3   | Command Explanation — "What Does This Do?"              | Priya   | 10-15 min | 🆓   | ✅     |
| 4   | Shell Scripting with Copilot — "Automate the Tedious"   | Jordan  | 15-20 min | 🆓   | ✅     |
| 5   | Git Workflow Automation — "Git Without the Guesswork"   | Marcus  | 15-20 min | 🆓   | ✅     |

---

## 🎓 Learning Paths

### Beginner Track (3–4 hours)

For developers new to Copilot or AI-assisted development.

| Order | Module                             | Focus                            |
| ----- | ---------------------------------- | -------------------------------- |
| 1     | Module 00: Orientation             | Understand the mindset shift     |
| 2     | Module 01: Getting Started         | First hands-on experience        |
| 3     | Module 02: Clarity as a Foundation | Master context and configuration |

**Outcome**: Comfortable using Copilot for daily development tasks.

---

### Advanced Track (5–6 hours)

For developers ready to go deeper with AI-assisted development.

| Order | Module                                   | Focus                       |
| ----- | ---------------------------------------- | --------------------------- |
| 1     | Module 04: Intent Over Implementation    | Master prompt engineering   |
| 2     | Module 05: AI-Assisted Design Thinking   | Use AI for design decisions |
| 3     | Module 07: Agent Fundamentals            | Autonomous AI assistance    |
| 4     | Module 08: Enterprise Agents & Debugging | Advanced agent features     |

**Outcome**: Leverage AI for complex, multi-step development workflows.

---

### Team Lead Track (4–5 hours)

For tech leads, architects, and team managers establishing AI practices.

| Order | Module                                   | Focus                          |
| ----- | ---------------------------------------- | ------------------------------ |
| 1     | Module 03: Documentation as Leverage     | Scale knowledge with docs      |
| 2     | Module 06: Collaborative Workflows       | Team-wide AI practices         |
| 3     | Module 08: Enterprise Agents & Debugging | Understand enterprise features |
| 4     | Module 00: Orientation                   | Set team expectations          |

**Outcome**: Establish effective AI-assisted development practices across your team.

---

### Platform Integration (Optional, 1.5 hours)

For developers who want to use Copilot beyond VS Code.

| Order | Content                        | Focus                    |
| ----- | ------------------------------ | ------------------------ |
| 1     | Appendix A: Copilot on the Web | PRs, issues, code review |
| 2     | Appendix B: Copilot in the CLI | Terminal workflows       |

**Outcome**: Use Copilot across your entire development workflow.

---

## 📊 Summary Statistics

### Exercises by Module

| Module                        | Total Exercises | Complete | In Progress | Planned |
| ----------------------------- | --------------- | -------- | ----------- | ------- |
| 00 Orientation                | 1               | 1        | 0           | 0       |
| 01 Getting Started            | 6               | 6        | 0           | 0       |
| 02 Clarity as a Foundation    | 5               | 5        | 0           | 0       |
| 03 Documentation as Leverage  | 6               | 2        | 0           | 4       |
| 04 Intent Over Implementation | 6               | 6        | 0           | 0       |
| 05 AI-Assisted Design         | 5               | 5        | 0           | 0       |
| 06 Collaborative Development  | 4               | 4        | 0           | 0       |
| 07 Agent Fundamentals         | 3               | 3        | 0           | 0       |
| 08 Enterprise Agents          | 5               | 5        | 0           | 0       |
| **Modules Subtotal**          | **41**          | **37**   | **0**       | **4**   |
| Appendix A: Web               | 8               | 8        | 0           | 0       |
| Appendix B: CLI               | 5               | 5        | 0           | 0       |
| **TOTAL**                     | **54**          | **50**   | **0**       | **4**   |

### Exercises by Tier

| Tier          | Count | Percentage |
| ------------- | ----- | ---------- |
| 🆓 Free       | 44    | 81%        |
| 💼 Business   | 8     | 15%        |
| 🏢 Enterprise | 2     | 4%         |

### Exercises by Principle

| Principle                        | Primary Modules | Exercise Count |
| -------------------------------- | --------------- | -------------- |
| Clarity Beats Cleverness         | 01, 02          | ~11            |
| Intent Over Implementation       | 04              | ~6             |
| Documentation Is Leverage        | 03, 06          | ~10            |
| Human Judgment Is Non-Negotiable | 05, 07, 08      | ~13            |

### Time by Track

| Track                | Estimated Time | Content        |
| -------------------- | -------------- | -------------- |
| Beginner             | 3–4 hours      | 00, 01, 02     |
| Advanced             | 5–6 hours      | 04, 05, 07, 08 |
| Team Lead            | 4–5 hours      | 03, 06, 08, 00 |
| Platform Integration | 1.5 hours      | Appendix A, B  |
| Complete             | 10–12 hours    | All            |

---

## 🤝 Contributing

Exercises marked with 📝 (Planned) are opportunities for contribution. See [.github/copilot-instructions.md](.github/copilot-instructions.md) for content guidelines.

**Priority areas**:

- Module 03: Exercises 3-6 need implementation (Convention, Living, AI-First, Multi-File documentation)

---

<!-- TODO: Cross-Reference Link Audit
After folder renaming, audit all modules/*/README.md files for:
- Broken "Next Steps" links (e.g., old Module 05 references non-existent path)
- Outdated module number references
- Prerequisites referencing old module numbers
Known issue: Old Module 05 references `modules/04-agents-and-tools/` which doesn't exist
-->
