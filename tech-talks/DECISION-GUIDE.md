# Tech Talks Decision Guide

**Not sure which talk to start with?** Use this guide to find the right content for your needs.

---

## Quick Navigation

### I'm brand new to GitHub Copilot
**Start here:** [Copilot Chat](copilot-chat/) → Learn foundational context mechanisms

### I want to understand how Copilot works under the hood
**Start here:** [Copilot Chat Internals](copilot-chat-internals/) → Debug view, system prompts, tool invocations

### I want to use Copilot in the terminal
**Start here:** [Copilot CLI](copilot-cli/) → Terminal-native AI with Plan Mode

### I want to use Copilot in the browser
**Start here:** [Copilot Web](copilot-web/) → Browser/mobile workflows

### I want to embed Copilot in my own applications
**Start here:** [Copilot SDK](copilot-sdk/) → Programmatic agent integration

---

## Decision Trees

### "My agents need to work on complex tasks"

```
Q: What kind of complexity do you have?
├─ Task needs multiple phases (research → analysis → implementation)
│  └─ Choose: Multi-Step Tasks
│     📖 Pattern: Subagents with context isolation
│     🔗 Talk: tech-talks/multi-step-tasks/
│
├─ Task needs specialized roles (planner vs. coder vs. reviewer)
│  └─ Choose: Agent Teams
│     📖 Pattern: Conductor/worker orchestration
│     🔗 Talk: tech-talks/agent-teams/
│
└─ Task can run in parallel on different branches
   └─ Choose: Parallel Execution
      📖 Pattern: Worktree isolation, background agents
      🔗 Talk: tech-talks/parallel-execution/
```

### "I need to control what agents can do"

```
Q: What kind of control do you need?
├─ Lifecycle control (when agents act, approval gates)
│ └─ Choose: Copilot Hooks
│     📖 Feature: preToolUse, sessionStart, postToolUse hooks
│     🔗 Talk: tech-talks/copilot-hooks/
│
├─ Execution limits (network/filesystem restrictions)
│  └─ Choose: Terminal Sandboxing
│     📖 Feature: OS-level sandbox for agent commands
│     🔗 Talk: tech-talks/terminal-sandboxing/
│
└─ Both (defense in depth)
   └─ Use: Hooks + Sandboxing together
      📖 Pattern: Sandboxing for baseline, hooks for policies
      🔗 Talks: copilot-hooks/ + terminal-sandboxing/
```

### "I want quick wins without full SDLC transformation"

```
Q: What's your starting point?
├─ Just want to try agents with minimal risk
│  └─ Choose: Agentic Journey (Phase 1: Issue Triage)
│     📖 Pattern: "Assign to Copilot" automation
│     🔗 Talk: tech-talks/agentic-journey/
│     ⏱️ Setup: 2-3 hours | ROI: 6x faster triage
│
├─ Want end-to-end issue automation (research → code → review)
│  └─ Choose: Agentic Journey (Phases 1-4)
│     📖 Pattern: Full issue lifecycle with agents
│     🔗 Talk: tech-talks/agentic-journey/
│     ⏱️ Setup: 4-6 hours | ROI: 10-20x throughput
│
├─ Already using agents, hitting coordination limits
│  └─ Choose: Agentic SDLC (Full Transformation)
│     📖 Pattern: Gen-4 SDLC with monorepo, trust factory CI
│     🔗 Talk: tech-talks/agentic-sdlc/
│     ⏱️ Setup: 3-6 months | ROI: 100x at scale
│
└─ Need executive buy-in first
   └─ Start with: Agentic Labor (Getting Started section)
      📖 Context: Business case and first three agents
      🔗 Talk: exec-talks/agentic-labor/
      Then → Return here for tech-talks/agentic-journey/
```

### "I'm restructuring for AI delivery"

```
Q: What aspect of infrastructure needs work?
├─ Repository structure
│  └─ Choose: Agentic SDLC (Part 1: Repository Topology)
│     📖 Topics: Monorepo vs. multi-repo, module boundaries
│     🔗 Talk: tech-talks/agentic-sdlc/ (jump to Part 1)
│
├─ Pull request workflows
│  └─ Choose: Agentic SDLC (Part 2: PR Workflows)
│     📖 Topics: Intent-based PRs, evidence bundles
│     🔗 Talk: tech-talks/agentic-sdlc/ (jump to Part 2)
│
├─ CI/CD pipelines
│  └─ Choose: Agentic SDLC (Part 3: Trust Manufacturing)
│     📖 Topics: Fast feedback, context-aware validation
│     🔗 Talk: tech-talks/agentic-sdlc/ (jump to Part 3)
│
└─ All of the above
   └─ Read: Complete Agentic SDLC talk
      📖 Topics: Gen-4 SDLC transformation end-to-end
      🔗 Talk: tech-talks/agentic-sdlc/
```

### "I want advanced Copilot features"

```
Q: What feature are you exploring?
├─ Cross-session memory and context persistence
│  └─ Choose: Copilot Memory
│     📖 Feature: Persistent context across sessions
│     🔗 Talk: tech-talks/copilot-memory/
│
├─ Rich UI components in chat (charts, tables, interactive elements)
│  └─ Choose: MCP Apps
│     📖 Feature: Model Context Protocol for rich interfaces
│     🔗 Talk: tech-talks/mcp-apps/
│
├─ Running agents in CI/CD, PRs, and GitHub infrastructure
│  └─ Choose: Agentic CI
│     📖 Pattern: CI as trust factory for agent velocity
│     🔗 Talk: tech-talks/agentic-sdlc/ (Part 3)
│
├─ Integrating agents with external tools and APIs
│  └─ Choose: MCP Apps
│     📖 Feature: Model Context Protocol servers
│     🔗 Talk: tech-talks/mcp-apps/
│
└─ Delegating to specialized sub-agents
   └─ Choose: Multi-Step Tasks or Agent Teams
      📖 Pattern: Depends on your use case (see "complex tasks" tree above)
      🔗 Talks: multi-step-tasks/ or agent-teams/
```

---

## By Role

### Individual Developer
**Focus on productivity and workflow:**
1. [Copilot Chat](copilot-chat/) — Master context mechanisms
2. [Copilot CLI](copilot-cli/) — Terminal productivity with Plan Mode
3. [Multi-Step Tasks](multi-step-tasks/) — Break down complex work
4. [Parallel Execution](parallel-execution/) — Work on multiple features simultaneously

### Team Lead / Tech Lead
**Focus on team patterns and collaboration:**
1. [Agent Teams](agent-teams/) — Coordinate specialized agents
2. [Copilot Chat Internals](copilot-chat-internals/) — Debug team issues
3. [Agentic PRs](agentic-sdlc/) (Part 2) — Scale PR workflows for AI velocity
4. [Enterprise Patterns](enterprise-patterns/) — Organization-wide adoption

### Security / Compliance
**Focus on governance and safety:**
1. [Terminal Sandboxing](terminal-sandboxing/) — Execution controls
2. [Copilot Hooks](copilot-hooks/) — Lifecycle governance
3. [Agentic SDLC](agentic-sdlc/) (Part 3) — Trust manufacturing at scale
4. [Enterprise Patterns](enterprise-patterns/) — Policy enforcement

### Platform / Infrastructure Engineer
**Focus on infrastructure and tooling:**
1. [Agentic SDLC](agentic-sdlc/) — Complete Gen-4 transformation
2. [Agentic Repos](agentic-sdlc/) (Part 1) — Repository topology
3. [Agentic CI](agentic-sdlc/) (Part 3) — CI as trust factory
4. [Copilot SDK](copilot-sdk/) — Build custom integrations

### Executive / Leadership
**Focus on strategy and transformation:**
**Note:** See `exec-talks/` folder for executive-focused content:
- [Agentic Delivery](../exec-talks/agentic-delivery/) — Strategic framing
- [Agentic Economics](../exec-talks/agentic-economics/) — ROI and transformation
- [Agentic Labor](../exec-talks/agentic-labor/) — Workforce implications

---

## By Use Case

### "I want quick wins with agents before full transformation"

**Recommended sequence:**
1. [Agentic Journey](agentic-journey/) (Phase 1) — Issue triage automation
2. [Agentic Journey](agentic-journey/) (Phase 2) — Execution planning agents
3. [Agentic Journey](agentic-journey/) (Phase 3-4) — Code generation + review
4. Evaluate limits → [Agentic SDLC](agentic-sdlc/) when ready

**Time investment:** 4-6 hours setup
**Expected outcome:** 10-20x improvement on issue-to-PR workflow
**When to upgrade:** See [Phase 5 graduation criteria](agentic-journey/#phase-5-when-to-upgrade-to-full-sdlc)

---

### "I want to speed up my development workflow"

**Recommended sequence:**
1. [Copilot Chat](copilot-chat/) — Foundation
2. [Copilot CLI](copilot-cli/) — Terminal automation
3. [Multi-Step Tasks](multi-step-tasks/) — Complex work decomposition
4. [Parallel Execution](parallel-execution/) — Work on multiple things at once

**Time investment:** 2-3 hours
**Expected outcome:** 2-3x productivity improvement

---

### "I want to build a team of specialized agents"

**Recommended sequence:**
1. [Copilot Chat](copilot-chat/) — Understand context mechanisms
2. [Multi-Step Tasks](multi-step-tasks/) — Learn subagent basics
3. [Agent Teams](agent-teams/) — Build conductor/worker patterns
4. [Copilot Chat Internals](copilot-chat-internals/) — Debug agent interactions

**Time investment:** 4-5 hours
**Expected outcome:** Reusable agent orchestration patterns

---

### "I need to implement agent governance"

**Recommended sequence:**
1. [Terminal Sandboxing](terminal-sandboxing/) — Baseline execution safety
2. [Copilot Hooks](copilot-hooks/) — Lifecycle control and policies
3. [Agentic SDLC](agentic-sdlc/) (Part 3) — Trust manufacturing patterns
4. [Enterprise Patterns](enterprise-patterns/) — Organization-wide rollout

**Time investment:** 3-4 hours
**Expected outcome:** Secure, auditable agent workflows

---

### "I'm migrating to AI-first SDLC"

**Recommended sequence:**
1. [Agentic SDLC](agentic-sdlc/) (all parts) — Complete transformation guide
   - Part 1: Repository topology and monorepo patterns
   - Part 2: PR workflows for feature-scale payloads
   - Part 3: CI as trust factory
2. [Agent Teams](agent-teams/) — Specialized agent patterns
3. [Parallel Execution](parallel-execution/) — Background and cloud agents
4. [Enterprise Patterns](enterprise-patterns/) — Scaling across organization

**Time investment:** 6-8 hours
**Expected outcome:** Roadmap for Gen-4 SDLC adoption

---

## Interface Comparison

| Interface | Best For | Talk |
|-----------|----------|------|
| **VS Code Chat** | Interactive development, complex tasks, exploratory work | [Copilot Chat](copilot-chat/) |
| **Terminal (CLI)** | DevOps automation, Plan Mode, scripting workflows | [Copilot CLI](copilot-cli/) |
| **Browser/Mobile** | Cross-device work, lightweight queries, web-based workflows | [Copilot Web](copilot-web/) |
| **Programmatic (SDK)** | Custom applications, embedded agents, specialized tools | [Copilot SDK](copilot-sdk/) |

---

## Agent Pattern Comparison

| Pattern | When to Use | Talk |
|---------|-------------|------|
| **Multi-Step Tasks** | Research → analysis → implementation phases | [Multi-Step Tasks](multi-step-tasks/) |
| **Agent Teams** | Specialized roles (planner/coder/reviewer) | [Agent Teams](agent-teams/) |
| **Parallel Execution** | Multiple independent features simultaneously | [Parallel Execution](parallel-execution/) |

**Decision criteria:**
- Need phases with context isolation? → Multi-Step Tasks
- Need different expertise (planner vs. coder)? → Agent Teams
- Work happens in parallel on different branches? → Parallel Execution

---

## Governance Tool Comparison

| Tool | Purpose | Best Combined With | Talk |
|------|---------|-------------------|------|
| **Terminal Sandboxing** | Limit what agents can access (network/filesystem) | Copilot Hooks | [Terminal Sandboxing](terminal-sandboxing/) |
| **Copilot Hooks** | Control when agents act (lifecycle governance) | Terminal Sandboxing | [Copilot Hooks](copilot-hooks/) |

**Defense in depth:** Use both together for comprehensive agent governance.

---

## Foundational vs. Advanced

### Start Here (Foundational)

**Everyone should understand:**
1. [Copilot Chat](copilot-chat/) — Context mechanisms
2. [Copilot Chat Internals](copilot-chat-internals/) — Debugging fundamentals

**Pick your interface:**
- Terminal users: [Copilot CLI](copilot-cli/)
- Browser users: [Copilot Web](copilot-web/)
- SDK developers: [Copilot SDK](copilot-sdk/)

**Quick wins with agents:**
- [Agentic Journey](agentic-journey/) — Issue-to-PR automation (start here for immediate value)

### Advanced Topics (After Foundations)

**Multi-agent workflows:**
- [Multi-Step Tasks](multi-step-tasks/)
- [Agent Teams](agent-teams/)
- [Parallel Execution](parallel-execution/)

**Governance and security:**
- [Terminal Sandboxing](terminal-sandboxing/)
- [Copilot Hooks](copilot-hooks/)

**Infrastructure transformation:**
- [Agentic SDLC](agentic-sdlc/) (all parts)
- [Enterprise Patterns](enterprise-patterns/)

**Specialized features:**
- [Copilot Memory](copilot-memory/)
- [MCP Apps](mcp-apps/)

---

## Still Not Sure?

### Common Questions

**Q: "I want quick wins with agents without a big transformation"**
→ Start with [Agentic Journey](agentic-journey/) — Phase 1 (issue triage) takes 2-3 hours

**Q: "I just want to be more productive with Copilot"**
→ Start with [Copilot Chat](copilot-chat/), then [Copilot CLI](copilot-cli/)

**Q: "I need agents to work together on complex tasks"**
→ Decision tree: See ["My agents need to work on complex tasks"](#my-agents-need-to-work-on-complex-tasks) above

**Q: "I'm worried about security and compliance"**
→ Start with [Terminal Sandboxing](terminal-sandboxing/) + [Copilot Hooks](copilot-hooks/)

**Q: "My team is shipping 10+ features/day with agents and things are breaking"**
→ Read [Agentic SDLC](agentic-sdlc/) (all three parts)

**Q: "I want to understand the big picture transformation"**
→ Start with [Agentic SDLC](agentic-sdlc/) intro, then jump to relevant sections

---

## Learning Paths

### Path 0: Quick Wins with Agents (4-6 hours)
```
Agentic Journey - Phase 1 (2h)
  ↓ Issue triage automation
Agentic Journey - Phase 2 (1h)
  ↓ Execution planning
Agentic Journey - Phases 3-4 (1-2h)
  ↓ Code generation + review
Evaluate → Agentic SDLC when hitting limits
```

### Path 1: Individual Productivity (4-6 hours)
```
Copilot Chat (1h)
  ↓
Copilot CLI (1h)
  ↓
Multi-Step Tasks (1.5h)
  ↓
Parallel Execution (1.5h)
```

### Path 2: Team Orchestration (5-7 hours)
```
Copilot Chat (1h)
  ↓
Multi-Step Tasks (1.5h)
  ↓
Agent Teams (2h)
  ↓
Copilot Chat Internals (1.5h)
```

### Path 3: Enterprise Governance (6-8 hours)
```
Terminal Sandboxing (1.5h)
  ↓
Copilot Hooks (2h)
  ↓
Agentic SDLC Part 3 (2h)
  ↓
Enterprise Patterns (1.5h)
```

### Path 4: Platform Engineering (8-10 hours)
```
Agentic SDLC - All Parts (4h)
  ↓
Agent Teams (2h)
  ↓
Parallel Execution (1.5h)
  ↓
Copilot SDK (1.5h)
```

---

## Feedback

**Found this guide helpful?** Help us improve it:
- Which decision tree helped you most?
- What questions weren't answered?
- What would make this more useful?

**Contribute:** Submit a PR to improve this guide for others.
