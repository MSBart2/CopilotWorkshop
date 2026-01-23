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

**January 2026 Update:** GitHub Copilot CLI now includes **Plan Mode**, a collaborative workflow that emphasizes discussion and clarification before code generation.

**What Plan Mode Changes:**

**Traditional workflow:** Request → Copilot generates code → You review and fix → Repeat
**Plan Mode workflow:** Request → Copilot asks clarifying questions → You collaborate on plan → Review plan together → Generate implementation

**Key Features:**

1. **Collaborative Planning**
   - Copilot actively asks clarifying questions before building
   - Confirm requirements and scope before any code is written
   - Prevents misunderstandings and reduces iteration cycles

2. **Advanced Reasoning**
   - Access to advanced models optimized for code reasoning
   - Select reasoning "depth" (speed vs. thoroughness) for your needs
   - Toggle reasoning visibility to see how Copilot reaches solutions

3. **Real-Time Steering**
   - Queue follow-up prompts while Copilot is generating responses
   - Provide inline feedback to adapt mid-generation
   - Reject actions with instant feedback instead of stopping the flow

4. **Cloud Delegation**
   - Delegate long-running or complex requests to background agents
   - Frees your terminal for other tasks while agents work
   - Get notifications when background work completes

5. **Automatic Context Management**
   - Conversation histories auto-compact as they near token limits
   - Prevents workflow interruptions and keeps context relevant
   - Seamless continuation without manual context cleanup

**Why This Matters:**

Plan Mode transforms Copilot from an autocomplete engine into a proactive pair-programmer during planning. For complex, multi-step engineering work—or when codebase understanding and architectural reasoning are needed—these enhancements mark a significant leap for terminal-based AI agents.

> 💡 **Pro Tip:** Use Plan Mode for architectural decisions and complex refactoring where understanding requirements is crucial. Switch to direct mode for well-defined, straightforward tasks.

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

### How They Work Together

The CLI seamlessly delegates to appropriate agents based on your request, often running multiple agents in parallel. Combined with custom instructions and skills, this creates a powerful infrastructure automation platform that speaks your team's specific workflows.

> 📂 **Reference Examples**: The [`examples/completed-config/`](../../examples/completed-config/) folder contains sample configurations:
> - [Docker build debugger skill](../../examples/completed-config/skills/docker-build-debugger/)
> - [Build pipeline analyzer skill](../../examples/completed-config/skills/build-pipeline-analyzer/)

---

## What You'll Learn

**GitHub Copilot CLI** brings conversational AI directly into terminal workflows, enabling intelligent automation of Docker operations, build debugging, and deployment pipelines. You'll configure terminal-native AI workflows that integrate with existing DevOps tools, and measure concrete improvements in debugging speed and deployment reliability.

**Time:** ~45 minutes | **Exercises:** 3

---

## 📋 Exercise Planning

The exercises below use Copilot CLI capabilities to solve real DevOps workflow problems. Each exercise shows measurable improvements in terminal productivity.

| # | Exercise | Lead | Support | Problem | Solution | Key Metrics | Artifacts |
|---|----------|------|---------|---------|----------|-------------|-----------|
| [9.1](exercise-9.1.md) | Terminal Installation & Docker Workflow | Marcus ⭐ | Elena 🤝, Sarah 🤝 | Docker debug cycles: 45 min investigation, 8 trial-and-error attempts, manual log parsing | Interactive CLI sessions for container troubleshooting with built-in agents | 45→8 min debug time, 8→2 attempts, automated log analysis | CLI config, Docker debugging workflows |
| [9.2](exercise-9.2.md) | Scripting CI/CD Automation | Marcus ⭐ | David 🤝 | Pipeline failures: 25 min manual investigation, 12-step debugging process, no failure pattern detection | Programmatic CLI automation with custom build analyzer skill | 25→5 min investigation, 12→3 automated steps, pattern recognition enabled | Automated build scripts, failure analysis automation |
| [9.3](exercise-9.3.md) | Infrastructure Documentation Generation | Marcus ⭐ | Rafael 🤝, Sarah 🤝 | Documentation lag: 3 days post-deployment, manual system diagram creation, outdated architecture docs | CLI-generated infrastructure analysis and documentation workflows | 3 days→30 min documentation, automated diagram generation, real-time architecture updates | Infrastructure docs, system diagrams, deployment reports |

---

## 📚 What This Feature Does

**GitHub Copilot CLI:** Brings conversational AI directly into terminal environments, enabling natural language automation of DevOps workflows, infrastructure debugging, and deployment operations.

**When to use it:** When you need intelligent automation of command-line workflows, debugging complex infrastructure issues, or scripting AI-powered operations into CI/CD pipelines.

**What you'll build:** 
- **Interactive debugging workflows** — AI-assisted Docker and build troubleshooting sessions  
- **Programmatic automation scripts** — AI-powered CI/CD steps and deployment automation
- **Infrastructure analysis tools** — Automated documentation and system analysis workflows

**Official Documentation:**
- 📖 [About GitHub Copilot CLI](https://docs.github.com/en/copilot/concepts/agents/about-copilot-cli) — Core concepts and capabilities overview
- 📖 [Using GitHub Copilot CLI](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/use-copilot-cli) — Interactive and programmatic usage patterns
- 📖 [Installing GitHub Copilot CLI](https://docs.github.com/en/copilot/how-tos/set-up/install-copilot-cli) — Installation and authentication setup
- 🆕 [GitHub Copilot CLI: Plan before you build, steer as you go](https://github.blog/changelog/2026-01-21-github-copilot-cli-plan-before-you-build-steer-as-you-go/) — January 2026 announcement: Plan Mode, advanced reasoning, and real-time steering

> 💡 **Important for this module:** The `--allow-tool` and `--deny-tool` flags are essential because they control what operations Copilot can perform automatically. This enables CI/CD integration while maintaining security boundaries for production systems.

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
