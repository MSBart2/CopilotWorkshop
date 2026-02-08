# Tech Talks Decision Guide

**Not sure which talk to start with?** Find the right content for your role and goals.

---

## 🚀 Quick Start

| I want to... | Start with |
|--------------|------------|
| Learn Copilot basics | [Copilot Chat](copilot-chat/) — context mechanisms (#file, @workspace, #codebase) |
| Understand how Copilot works under the hood | [Copilot Chat Internals](copilot-chat-internals/) — debug view, system prompts |
| Use Copilot in the terminal | [Copilot CLI](copilot-cli/) — natural language to shell, Plan Mode |
| Use Copilot in the browser | [Copilot Web](copilot-web/) — cross-device, PR reviews, issue triage |
| Embed Copilot in my own apps | [Copilot SDK](copilot-sdk/) — programmatic agent integration |
| Get quick wins with agents | [Agentic Journey](agentic-journey/) — issue-to-PR automation in hours |
| Implement agent safety controls | [Terminal Sandboxing](terminal-sandboxing/) + [Copilot Hooks](copilot-hooks/) |

---

## 🗺️ By Role

| Role | Recommended Talks (in order) |
|------|------------------------------|
| **Individual Developer** | [Copilot Chat](copilot-chat/) → [Copilot CLI](copilot-cli/) → [Multi-Step Tasks](multi-step-tasks/) → [Parallel Execution](parallel-execution/) |
| **Team / Tech Lead** | [Agent Teams](agent-teams/) → [Chat Internals](copilot-chat-internals/) → [Agentic SDLC](agentic-sdlc/) (Part 2) → [Enterprise Patterns](enterprise-patterns/) |
| **Security / Compliance** | [Terminal Sandboxing](terminal-sandboxing/) → [Copilot Hooks](copilot-hooks/) → [Agentic SDLC](agentic-sdlc/) (Part 3) → [Enterprise Patterns](enterprise-patterns/) |
| **Platform Engineer** | [Agentic SDLC](agentic-sdlc/) (all parts) → [Agent Teams](agent-teams/) → [Parallel Execution](parallel-execution/) → [Copilot SDK](copilot-sdk/) |
| **Executive / Leadership** | See [exec-talks/](../exec-talks/) — [Agentic Delivery](../exec-talks/agentic-delivery/), [Agentic Economics](../exec-talks/agentic-economics/), [Agentic Labor](../exec-talks/agentic-labor/) |

---

## 🧭 Learning Paths

### Path 0 — Quick Wins with Agents
> [Agentic Journey](agentic-journey/) Phase 1 → Phase 2 → Phases 3-4 → Evaluate → [Agentic SDLC](agentic-sdlc/) when hitting limits

### Path 1 — Individual Productivity
> [Copilot Chat](copilot-chat/) → [Copilot CLI](copilot-cli/) → [Multi-Step Tasks](multi-step-tasks/) → [Parallel Execution](parallel-execution/)

### Path 2 — Team Orchestration
> [Copilot Chat](copilot-chat/) → [Multi-Step Tasks](multi-step-tasks/) → [Agent Teams](agent-teams/) → [Chat Internals](copilot-chat-internals/)

### Path 3 — Enterprise Governance
> [Terminal Sandboxing](terminal-sandboxing/) → [Copilot Hooks](copilot-hooks/) → [Agentic SDLC](agentic-sdlc/) (Part 3) → [Enterprise Patterns](enterprise-patterns/)

### Path 4 — Platform Engineering
> [Agentic SDLC](agentic-sdlc/) (all parts) → [Agent Teams](agent-teams/) → [Parallel Execution](parallel-execution/) → [Copilot SDK](copilot-sdk/)

---

## 📊 Comparison Tables

### Copilot Interfaces

| Interface | Best For | Talk |
|-----------|----------|------|
| **VS Code Chat** | Interactive development, complex tasks, exploration | [Copilot Chat](copilot-chat/) |
| **Terminal (CLI)** | DevOps automation, Plan Mode, scripting | [Copilot CLI](copilot-cli/) |
| **Browser/Mobile** | Cross-device, lightweight queries, web workflows | [Copilot Web](copilot-web/) |
| **Programmatic (SDK)** | Custom apps, embedded agents, specialized tools | [Copilot SDK](copilot-sdk/) |

### Agent Patterns

| Pattern | When to Use | Talk |
|---------|-------------|------|
| **Multi-Step Tasks** | Phased work needing context isolation (research → analysis → implementation) | [Multi-Step Tasks](multi-step-tasks/) |
| **Agent Teams** | Specialized roles working together (planner / coder / reviewer) | [Agent Teams](agent-teams/) |
| **Parallel Execution** | Independent features running simultaneously on different branches | [Parallel Execution](parallel-execution/) |

### Governance Controls

| Tool | Controls | Talk |
|------|----------|------|
| **Terminal Sandboxing** | _What_ agents can access — network, filesystem restrictions | [Terminal Sandboxing](terminal-sandboxing/) |
| **Copilot Hooks** | _When_ agents act — lifecycle gates, approval policies, audit trails | [Copilot Hooks](copilot-hooks/) |

💡 **Defense in depth:** Use both together — sandboxing for baseline safety, hooks for policy enforcement.

### Agentic Transformation Stages

| Stage | Scope | Talk | Expected ROI |
|-------|-------|------|-------------|
| **Try agents** | Issue triage automation | [Agentic Journey](agentic-journey/) (Phase 1) | 6× faster triage |
| **Automate workflows** | Full issue-to-PR lifecycle | [Agentic Journey](agentic-journey/) (Phases 1-4) | 10-20× throughput |
| **Transform SDLC** | Repos, PRs, CI/CD for AI velocity | [Agentic SDLC](agentic-sdlc/) | 100× at scale |
| **Scale organization** | Enterprise-wide adoption | [Enterprise Patterns](enterprise-patterns/) | Measurable org ROI |
| **Need executive buy-in?** | Business case first | [Agentic Labor](../exec-talks/agentic-labor/) | — |

---

## ❓ Common Questions

| Question | Answer |
|----------|--------|
| "I just want to be more productive" | [Copilot Chat](copilot-chat/) → [Copilot CLI](copilot-cli/) |
| "I need agents to work together" | [Multi-Step Tasks](multi-step-tasks/) (phases) or [Agent Teams](agent-teams/) (roles) |
| "I'm worried about security" | [Terminal Sandboxing](terminal-sandboxing/) + [Copilot Hooks](copilot-hooks/) |
| "Agents are shipping too fast and things break" | [Agentic SDLC](agentic-sdlc/) (all three parts) |
| "I want cross-session memory" | [Copilot Memory](copilot-memory/) |
| "I want rich UI in chat responses" | [MCP Apps](mcp-apps/) |
| "I need the 4 config primitives explained" | [Copilot Primitives](copilot-primitives/) |