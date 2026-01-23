# Module 9: GitHub Copilot CLI

## ⏰ — Command Line Mastery

> *"I spend 8 hours a day in terminal windows. If Copilot can work where I work, that changes everything."*  
> — Marcus, DevOps Developer

---

## 📖 Story So Far

In **Module 7**, the team built custom agents that specialized in specific domains—transforming generic AI into expert advisors tailored to their exact workflow...

In **Module 8**, they leveraged Copilot for Web to research technologies and analyze external resources—bringing internet-scale knowledge into their development process...

Now, in **Module 9**, Marcus needs to bring all these capabilities directly into the command line where he lives—automating Docker workflows, debugging build failures, and managing deployment pipelines without ever leaving the terminal...

💡 **Integration Note:** This module brings the custom agents and skills from previous modules into CLI workflows, enabling Marcus to script and automate the same intelligent capabilities the team uses in VS Code.

---

⚠️ **Prerequisites**: 
- Complete [Module 00: Orientation](../00-orientation/README.md)
- Functional FanHub application from previous modules
- Docker and build tools installed locally
- GitHub CLI (`gh`) configured and authenticated

---

## 🧠 Mindful Moment: From Point-and-Click to Command-and-Conquer

**Traditional thinking:** *"CLI tools are for executing commands I already know—Git, Docker, build scripts. AI is for the IDE."*

**AI-native thinking:** *"The command line is where infrastructure lives. AI that speaks terminal-native workflows can automate entire pipelines, not just individual tasks."*

This isn't just about running AI commands in a terminal—it's about creating scriptable, composable AI workflows that can be integrated into CI/CD pipelines, deployment automation, and infrastructure management.

---

## 💭 Why This Matters

**Sarah (Skeptical Senior):** "I automated Docker debugging workflows that used to take 45 minutes—now they run in 8 minutes with Plan Mode collaboration. That's 37 minutes per incident × 12 incidents per month = 7.4 hours back. Documented the workflow once in a script, now the entire team benefits. ROI proven: terminal AI with planning reduces trial-and-error from 8 attempts to 2."

**David (Seasoned Architect):** "Plan Mode asks clarifying questions before generating infrastructure changes—exactly how I'd mentor a junior engineer. My 20 years of architectural knowledge guides the conversation: 'Should I check configs or logs first?' Plan Mode validates that AI amplifies expertise rather than bypassing it. Complex refactoring requires reasoning transparency, which Plan Mode delivers."

**Marcus (DevOps Developer):** "I live in the terminal. Plan Mode removed the friction from Docker debugging, CI/CD automation, and infrastructure documentation. Build failure investigation went from 25 minutes of manual checks to 5 minutes of automated analysis. Programmatic mode lets me script AI into pipelines—now our CI system automatically analyzes failures and suggests fixes without human intervention."

**Elena (Quality Champion):** "Plan Mode enables collaborative test planning directly in CLI workflows. When I generate test infrastructure scripts, Copilot asks: 'Should I include integration tests, unit tests, or both?' That clarification prevents generating incomplete test suites. Automated test environment validation reduced setup errors from 6 per sprint to 1."

**Rafael (Product Visionary):** "Infrastructure documentation lag went from 3 days to 30 minutes using CLI automation. Architecture diagrams generate automatically from docker-compose.yml, always current for stakeholder presentations. Plan Mode helps bridge technical infrastructure and business requirements—asking the right questions to ensure generated docs serve both audiences."

---

## 💡 **Understanding Copilot CLI Modes**

**GitHub Copilot CLI** operates in two distinct modes that serve different automation needs:

**Interactive Mode (`copilot`)**
- Start conversational sessions for iterative problem-solving
- Ideal for debugging complex issues or exploring solutions
- Maintains context across multiple commands and file operations
- Perfect for "figure this out" scenarios where you don't know the exact solution

**Programmatic Mode (`copilot -p "prompt" --allow-tools`)**
- Execute single commands directly in scripts and pipelines
- Designed for automation workflows and CI/CD integration
- Can be combined with approval options for headless operation
- Essential for "do this specific thing" scenarios with known requirements

**Key capabilities:**
- **Built-in agents**: Explore, Task, Plan, and Code-review agents for specialized workflows
- **File operations**: Read, modify, and execute files with context awareness
- **Shell integration**: Execute and manage command-line tools with intelligent suggestions
- **Context management**: Maintain conversation history and automatically compress when needed

---

## 🚀 **New: Plan Mode — "Plan Before You Build, Steer as You Go"**

**January 2026 Update:** GitHub Copilot CLI now includes **Plan Mode**, a collaborative workflow that emphasizes discussion and clarification before code generation—transforming terminal AI from reactive assistant to proactive collaborator.

### What Plan Mode Changes

**Traditional workflow:**  
Request → Copilot generates code → You review and fix → Repeat

**Plan Mode workflow:**  
Request → Copilot asks clarifying questions → You collaborate on plan → Review plan together → Generate implementation

### Key Capabilities

**1. Collaborative Planning**
- Copilot actively asks clarifying questions before building
- Confirm requirements and scope before any code is written
- Prevents misunderstandings and reduces iteration cycles
- Example: "Should I check the docker-compose config, examine logs, or both?"

**2. Advanced Reasoning Models**
- Access to advanced models optimized for complex code reasoning
- Select reasoning "depth" (speed vs. thoroughness) for your specific needs
- Toggle reasoning visibility to see how Copilot reaches solutions
- Essential for architectural decisions and multi-step refactoring

**3. Real-Time Steering**
- Queue follow-up prompts while Copilot is generating responses
- Provide inline feedback to adapt mid-generation without stopping
- Reject proposed actions with instant feedback
- Maintain conversation flow while correcting course

**4. Cloud Delegation**
- Delegate long-running or complex requests to background agents
- Frees your terminal for other tasks while agents work asynchronously
- Get notifications when background work completes
- Ideal for comprehensive codebase analysis or large-scale refactoring

**5. Automatic Context Management**
- Conversation histories auto-compact as they approach token limits
- Prevents workflow interruptions and keeps context relevant
- Seamless continuation without manual context cleanup
- Maintains important context while pruning redundant information

### Why This Matters

Plan Mode transforms Copilot from an autocomplete engine into a proactive pair-programmer. For complex, multi-step engineering work—especially when codebase understanding and architectural reasoning are critical—Plan Mode represents a fundamental shift in how AI assists development workflows.

**Measurable Impact:**
- Reduces iteration cycles from 8+ trial-and-error attempts to 2 planned attempts
- Eliminates ambiguity before code generation (preventing wasted work)
- Enables complex architectural changes with transparent reasoning
- Maintains productive terminal sessions without context limit interruptions

> 💡 **Pro Tip:** Use Plan Mode for architectural decisions, complex debugging, and multi-step refactoring where understanding requirements is crucial. Switch to direct programmatic mode (`-p`) for well-defined, straightforward tasks in automation scripts.

---

## 📚 Key Concepts

### Command Line AI Integration

GitHub Copilot CLI transforms terminal workflows by bringing conversational AI directly into command-line environments. Unlike traditional CLI tools that execute predefined commands, Copilot CLI understands context, maintains conversation state, and can perform complex multi-step operations.

**Interactive Sessions**
- **Purpose**: Collaborative problem-solving directly in the terminal
- **Value**: Maintains context across operations, learns from your specific environment
- **Result**: Complex infrastructure tasks completed through natural language conversation
- **What to include**: Debugging scenarios, exploratory analysis, iterative configuration
- **What NOT to include**: Simple one-off commands that don't benefit from context

**Programmatic Execution**
- **Purpose**: Scriptable AI operations for automation pipelines
- **Value**: Enables AI-powered steps in CI/CD and deployment workflows  
- **Result**: Intelligent automation that adapts to changing conditions

### Built-in Specialized Agents

Copilot CLI includes four specialized agents that automatically handle common DevOps scenarios:

- **Explore agent**: Fast codebase analysis without cluttering main context
- **Task agent**: Executes commands (tests, builds) with smart output filtering  
- **Plan agent**: Analyzes dependencies and creates implementation strategies
- **Code-review agent**: Reviews changes with focus on genuine issues only

### Plan Mode in Practice

**When to Use Plan Mode:**

Use Plan Mode (interactive sessions with collaborative planning) for:
- **Complex debugging** where the root cause isn't obvious (Docker networking, multi-service issues)
- **Architectural decisions** requiring reasoning transparency and step-by-step exploration
- **Multi-step refactoring** where understanding dependencies is critical before making changes
- **Learning new systems** where you need context about unfamiliar codebases or infrastructure

**When to Use Direct/Programmatic Mode:**

Use direct commands (`copilot -p "prompt"`) for:
- **CI/CD automation** with well-defined, repeatable tasks
- **Simple one-off operations** where the requirement is clear and unambiguous
- **Scripted workflows** that need to run headlessly without human interaction
- **Fast iterations** when you already know exactly what you need

**Plan Mode Workflow Example:**

```bash
# Start interactive session with Plan Mode enabled
copilot

# Request with ambiguous requirements
> "Debug why the backend container won't start"

# Copilot responds with clarifying questions:
# "Should I check the docker-compose config, examine logs, or both?"
# "Do you want me to analyze environment variables as well?"

# You collaborate on the plan before execution
> "Start with logs, then check environment variables if needed"

# Copilot shows reasoning and creates investigation plan
# You approve or steer with follow-up prompts
# Implementation happens only after plan is confirmed
```

**Key Benefits:**
- **Reduces iteration cycles**: From 8+ trial-and-error attempts to 2 planned attempts
- **Prevents wasted work**: Clarifies requirements before generating code
- **Maintains transparency**: See how Copilot reasons through complex problems
- **Enables steering**: Queue follow-up prompts to guide execution mid-stream

### How They Work Together

The CLI seamlessly delegates to appropriate agents based on your request, often running multiple agents in parallel. Combined with custom instructions and skills, this creates a powerful infrastructure automation platform that speaks your team's specific workflows.

> 📂 **Reference Examples**: The [`examples/completed-config/`](../../examples/completed-config/) folder contains sample configurations:
> - [Docker build debugger skill](../../examples/completed-config/skills/docker-build-debugger/)
> - [Build pipeline analyzer skill](../../examples/completed-config/skills/build-pipeline-analyzer/)

---

## What You'll Learn

**GitHub Copilot CLI** brings conversational AI directly into terminal workflows, enabling intelligent automation of Docker operations, build debugging, and deployment pipelines. With the new **Plan Mode** (January 2026), you'll experience collaborative planning conversations before code generation, real-time steering of AI responses, and advanced reasoning for complex architectural decisions. You'll configure terminal-native AI workflows that integrate with existing DevOps tools, and measure concrete improvements in debugging speed and deployment reliability.

**Time:** ~45 minutes | **Exercises:** 3

---

## 📋 Exercise Planning

The exercises below use Copilot CLI capabilities to solve real DevOps workflow problems, with Exercise 9.1 specifically demonstrating Plan Mode's collaborative planning approach. Each exercise shows measurable improvements in terminal productivity.

| # | Exercise | Lead | Support | Problem | Solution | Key Metrics | Artifacts |
|---|----------|------|---------|---------|----------|-------------|-----------|
| [9.1](exercise-9.1.md) | Terminal Installation & Docker Workflow (Plan Mode) | Marcus ⭐ | Elena 🤝, Sarah 🤝 | Docker debug cycles: 45 min investigation, 8 trial-and-error attempts, manual log parsing | Interactive CLI sessions with Plan Mode for collaborative container troubleshooting | 45→8 min debug time, 8→2 attempts, automated log analysis with reasoning transparency | CLI config, Docker debugging workflows |
| [9.2](exercise-9.2.md) | Scripting CI/CD Automation | Marcus ⭐ | David 🤝 | Pipeline failures: 25 min manual investigation, 12-step debugging process, no failure pattern detection | Programmatic CLI automation with custom build analyzer skill | 25→5 min investigation, 12→3 automated steps, pattern recognition enabled | Automated build scripts, failure analysis automation |
| [9.3](exercise-9.3.md) | Infrastructure Documentation Generation | Marcus ⭐ | Rafael 🤝, Sarah 🤝 | Documentation lag: 3 days post-deployment, manual system diagram creation, outdated architecture docs | CLI-generated infrastructure analysis and documentation workflows | 3 days→30 min documentation, automated diagram generation, real-time architecture updates | Infrastructure docs, system diagrams, deployment reports |

---

## 📚 What This Feature Does

**GitHub Copilot CLI:** Brings conversational AI directly into terminal environments, enabling natural language automation of DevOps workflows, infrastructure debugging, and deployment operations. With **Plan Mode** (January 2026), Copilot CLI now offers collaborative planning conversations that clarify requirements before code generation, reducing iteration cycles and enabling complex architectural work with transparent reasoning.

**When to use it:** When you need intelligent automation of command-line workflows, debugging complex infrastructure issues with collaborative planning (Plan Mode), or scripting AI-powered operations into CI/CD pipelines (programmatic mode).

**What you'll build:** 
- **Interactive debugging workflows with Plan Mode** — AI-assisted Docker and build troubleshooting sessions with collaborative planning and clarifying questions
- **Programmatic automation scripts** — AI-powered CI/CD steps and deployment automation for headless operation
- **Infrastructure analysis tools** — Automated documentation and system analysis workflows

**Official Documentation:**
- 📖 [About GitHub Copilot CLI](https://docs.github.com/en/copilot/concepts/agents/about-copilot-cli) — Core concepts and capabilities overview
- 📖 [Using GitHub Copilot CLI](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/use-copilot-cli) — Interactive and programmatic usage patterns
- 📖 [Installing GitHub Copilot CLI](https://docs.github.com/en/copilot/how-tos/set-up/install-copilot-cli) — Installation and authentication setup
- 🆕 [GitHub Copilot CLI: Plan before you build, steer as you go](https://github.blog/changelog/2026-01-21-github-copilot-cli-plan-before-you-build-steer-as-you-go/) — January 2026 announcement: Plan Mode, advanced reasoning, real-time steering, cloud delegation, and automatic context management

> 💡 **Important for this module:** The `--allow-tool` and `--deny-tool` flags are essential because they control what operations Copilot can perform automatically. This enables CI/CD integration while maintaining security boundaries for production systems. Plan Mode adds collaborative planning before tool execution, ensuring you approve complex operations before they run.

---

## ➡️ Next Module

**[Module 10: Agentic SDLC](../10-agentic-sdlc/README.md)** — Orchestrating the complete development lifecycle with AI agents from planning through deployment.

> *"We've built all these individual capabilities—now how do we orchestrate them into a complete development workflow?"*  
> — Sarah, evaluating the full AI-assisted development pipeline

---

## 📌 Practices Used

| Practice | How It Applied in This Module |
|----------|-------------------------------|
| 📚 **Terminal-native AI** | Conversational AI integrated directly into command-line workflows without context switching |
| 🎯 **Programmatic automation** | AI operations scripted into CI/CD pipelines using programmatic mode with approval controls |
| 🔄 **Context-aware debugging** | Interactive sessions that maintain state across complex multi-step infrastructure troubleshooting |

---

## 🎭 Behind the Scenes

*For those who want to understand the deeper mechanics:*

### Built-in Agent Delegation

When you make a request to Copilot CLI, it automatically analyzes your prompt and delegates to the most appropriate specialized agent:

1. **Request Analysis**: Copilot determines if this is exploration, task execution, planning, or code review
2. **Agent Selection**: Routes to Explore, Task, Plan, or Code-review agent based on context
3. **Parallel Execution**: Multiple agents can work simultaneously on different aspects of your request

### Security and Permission Model

Copilot CLI uses a comprehensive permission system to control AI actions:

1. **Trusted Directories**: Only operates in explicitly trusted folder hierarchies
2. **Tool Approval**: Each potentially dangerous command requires explicit approval or pre-authorization
3. **Path & URL Controls**: Heuristic detection prevents access to unauthorized resources

**Key Takeaway:** The permission model enables both interactive exploration and automated CI/CD integration while maintaining security boundaries appropriate for production infrastructure.

---
