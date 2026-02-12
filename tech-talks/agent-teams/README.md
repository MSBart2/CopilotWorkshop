---
status: active
updated: 2026-02-12
section: "Agent Architecture"
---

# Agent Teams: Coordinating Specialized AI Roles for Complex Development

> **The Question This Talk Answers:**
> *"How do I coordinate multiple specialized agents to handle complex development tasks that exceed single-agent capacity?"*

**Duration:** 45 minutes | **Target Audience:** Developers / Architects / Engineering Managers

---

## 📊 Content Fitness

| Criterion | Assessment | Notes |
|-----------|-----------|-------|
| **Relevant** | 🟢 High | Complex development tasks require specialization—team patterns enable coordination without context pollution |
| **Compelling** | 🟢 High | Production-ready system ([Squad](https://github.com/bradygaster/squad)) available today; persistent AI teams you can deploy in < 10 minutes |
| **Actionable** | 🟢 High | `npx github:bradygaster/squad` gives you a full team immediately; agents learn your codebase and compound knowledge over time |

**Overall Status:** 🟢 Ready to use

---

## 📽️ Slide Generation Mapping

### Slide Sequence (Generated Automatically)

1. **Title/Logo Slide** ← H1 title + subtitle
2. **Question/Objective Slide** ← "The Question This Talk Answers"
3. **Table of Contents Slide** ← Auto-generated from 🎬 sections
4. **Problem Slide** ← "The Problem"
5. **Solution Overview** ← "The Solution"
6. **Key Artifacts** ← "Key Artifacts" inventory
7. **Mental Model Shift** ← Move-Toward/Away/Against
8. **When to Use Decision Tree** ← "When to Use This Pattern"
9. **Core Architecture** ← 🎬 Section 1 (2-3 slides)
10. **Squad: Production-Ready Agent Teams** ← 🎬 Section 2 (3-4 slides)
11. **Getting Started with Squad** ← 🎬 Section 3 (4-5 slides)
12. **Orchestration Patterns** ← 🎬 Section 4 (3-4 slides)
13. **Use Cases** ← Real-World Use Cases (1-2 slides)
14. **Actionable Outcomes** ← What You Can Do Today
15. **Related Patterns** ← Related Patterns
16. **Official Documentation** ← 📚 section
17. **End Slide** ← Auto-generated

### Major Sections (TOC Entries)

```markdown
<!-- 🎬 MAJOR SECTION: Core Architecture -->
<!-- 🎬 MAJOR SECTION: Squad: Production-Ready Agent Teams -->
<!-- 🎬 MAJOR SECTION: Getting Started with Squad -->
<!-- 🎬 MAJOR SECTION: Orchestration Patterns -->
```

---

## The Problem

### Key Points

- **Complex tasks exceed single-agent capacity**
  Real development requires planning, implementation, review, testing—different cognitive modes that single agents struggle to balance simultaneously.

- **Context pollution degrades quality**
  One agent juggling planning and coding accumulates 50-80% of its context window on information irrelevant to the current phase, reducing output quality by 30-40%.

- **Tool overload creates confusion**
  An agent with 15+ tools may misuse edit tools during planning phase or research tools during implementation, leading to wasted iterations.

- **No specialization, no expertise**
  General-purpose agents perform at 60-70% effectiveness across all tasks; specialists tuned for one cognitive mode operate at 90-95% effectiveness within their domain.

### Narrative

Single agents hit a ceiling around 300-500 lines of change or 3-4 hours of work. They can plan OR implement well—rarely both in the same session. As context accumulates, quality degrades: instructions for planning contaminate implementation, implementation details clutter planning sessions, and the agent loses focus.

The traditional solution—better prompts or smarter models—treats the symptom, not the cause. The real issue is cognitive overload. Asking one agent to research, strategize, execute, and validate is like asking a single developer to be architect, coder, QA, and tech writer simultaneously. They'll do each job adequately, but none excellently.

The solution isn't a smarter single agent—it's coordinated specialists. An orchestration layer delegates work, specialists execute within their domains, and the system outperforms any individual agent. This is how human teams work. Now AI teams can work the same way.

---

## The Solution: Multi-Agent Team Orchestration

### What It Does

Agent team orchestration distributes complex development workflows across specialized AI agents, each optimized for a specific cognitive mode (planning, implementation, review, testing). A coordinator agent manages the team, maintaining clean separation between phases while enabling parallel execution of independent tasks.

[Squad](https://github.com/bradygaster/squad) is a production-ready implementation of this pattern. It gives you a persistent AI development team through GitHub Copilot—specialists that live in your repo as files, learn your codebase, share decisions, and compound knowledge across sessions.

### Key Capabilities

- **Role-Based Specialization**: Each agent has a charter defining its identity, expertise, boundaries, and voice—lead architects, frontend devs, backend devs, and testers each operate within their domain
- **Context Isolation**: Each agent runs in its own context window (6.6% coordinator overhead, 93%+ available for work), preventing information overflow and cross-contamination
- **Parallel Execution**: Independent agents run simultaneously—"Team, build the login page" fans out to frontend, backend, tester, and scribe in parallel
- **Persistent Memory**: Agents write learnings to `history.md` after every session, read shared `decisions.md` before every task—knowledge compounds over time
- **Quality Checkpoints**: Reviewer protocol enforces that rejected work must be revised by a *different* agent—no self-review loops

### Architecture Overview

The coordinator pattern separates "what to do" (orchestration logic) from "how to do it" (specialized execution in worker agents). The coordinator never implements directly—it routes work based on defined rules, spawns specialists, validates outputs, and aggregates results.

Each agent is intentionally scoped: charters define identity, expertise, boundaries, and voice. Agents read their own `history.md` (personal knowledge) and team `decisions.md` (shared knowledge) before working. This ensures domain focus without cross-contamination.

Agents run in isolated context windows — the coordinator uses only 6.6% of its 200K context, leaving 93%+ for coordination. Each spawned agent gets nearly its entire 200K window for the actual task. Fan out to 5 agents and you're working with ~1M tokens of total reasoning capacity.

**Official Documentation:**
- 📖 [Custom Agents in VS Code](https://code.visualstudio.com/docs/copilot/customization/custom-agents) — Agent structure, frontmatter configuration, and handoffs
- 📖 [Subagents](https://code.visualstudio.com/docs/copilot/agents/subagents) — Subagent invocation, parallel execution, and context isolation
- 📖 [VS Code 1.109 Release Notes](https://code.visualstudio.com/updates/v1_109#_agent-orchestration) — Agent orchestration features and invocation controls

---

## 📦 Key Artifacts

**This talk references [Squad](https://github.com/bradygaster/squad)**, a complete agent team system that implements all patterns discussed here with persistent, learning agents.

### Primary Artifacts (Squad)

*Shown inline with detailed explanation in the major sections*

- **[`.ai-team/team.md`](#squad-file-structure)** — Team roster with roles, capabilities, and project context
- **[`.ai-team/agents/{name}/charter.md`](#squad-agent-charters)** — Identity, expertise, boundaries, voice, and model preferences per agent
- **[`.ai-team/agents/{name}/history.md`](#squad-memory-system)** — Personal knowledge accumulated across sessions
- **[`.ai-team/routing.md`](#squad-routing)** — Work routing table defining who handles what
- **[`.ai-team/decisions.md`](#squad-memory-system)** — Shared decision log all agents read before working

### Supporting Files

*Referenced but not shown inline — available in the Squad repository*

- **[Squad Repository](https://github.com/bradygaster/squad)** — Complete agent team system with persistent memory, parallel execution, GitHub Issues integration, ceremonies, and skills system
- **[Squad Product Guide](https://github.com/bradygaster/squad/blob/main/docs/guide.md)** — Comprehensive usage guide covering all features
- **[workshop/06-custom-agents](../../workshop/06-custom-agents/)** — Hands-on exercises for building custom agents

---

## 🎯 Mental Model Shift

> **The Core Insight:** From "one smart agent handles everything" to "specialized agents collaborate, each excellent at one thing"

### Move Toward (Embrace These Patterns)

- ✅ **Conductor-Delegate Architecture**: Conductor never implements—only coordinates specialists who execute in isolated contexts → 70-80% context window savings, cleaner phase separation
- ✅ **Single Responsibility Agents**: Each agent masters one cognitive mode (research/plan/implement/review) → 20-30% quality improvement within each domain
- ✅ **Tool Constraints = Role Enforcement**: Planners have read-only tools; implementers have edit tools; reviewers have analysis tools → Prevents accidental context mixing and tool misuse
- ✅ **Parallel Independent Work**: Launch Explorer + Oracle simultaneously for research; run Security + Performance reviewers in parallel → 3-5x throughput on parallelizable tasks
- ✅ **Structured Handoffs with Approval**: Explicit handoff points with human review gates between planning → implementation → review → commit → Predictable workflow, controlled decision points

### Move Away From (Retire These Habits)

- ⚠️ **Single Agent for Everything**: Using one agent to research, plan, implement, and review → Context pollution, cognitive overload, 30-40% quality degradation after 300+ LOC
- ⚠️ **Universal Tool Access**: Giving all agents all tools → Accidental edits during planning, inappropriate research during implementation, wasted iterations
- ⚠️ **Implicit Phase Transitions**: Moving from planning to implementation without explicit handoff / approval → Scope creep, missed validation, hard to recover from wrong direction

### Move Against (Active Resistance Required)

- 🛑 **Embedded Instructions in Conductor**: Hardcoding implementation/review logic inside conductor prompts → Makes conductor do specialist work, pollutes context, unmaintainable
- 🛑 **Sequential When Parallel Possible**: Running Explorer research → Oracle research sequentially when they're independent → 3-5x longer total time, wasted opportunity for parallelism
- 🛑 **Raw Data Returns from Subagents**: Subagents returning full file contents / raw search results instead of structured findings → Explodes conductor context, defeats isolation benefits

> **Example Transformation:** Before: Single agent with 15 tools spends 80% context on accumulated research/planning notes, outputs mediocre implementation after 4 hours. After: Conductor delegates research to Explorer (isolated context), planning to Planner (fresh context), implementation to Implementer (only plan + files), review to Reviewer (only changes). Each agent operates at 90%+ effectiveness. Total time: 1.5 hours including human approval gates.

---

## When to Use This Pattern

### Decision Tree

```
Q: Does your task exceed single-agent capacity?
├─ Simple feature (< 200 LOC, 1-2 files) → Use Plan Mode (single agent)
│  └─ No orchestration needed
│
├─ Phased work without role specialization → Use multi-step-tasks pattern
│  └─ Research → Analysis → Implementation phases
│
├─ Multiple specialized roles needed → 👉 Use agent-teams (you are here)
│  └─ Examples: Planner + Implementer + Reviewer
│      Security + Performance + Testing
│      Frontend + Backend + Integration
│
└─ Parallel branches + independent features → Use parallel-execution pattern
   └─ Multiple worktrees, concurrent PRs
```

### Use This Pattern When

- Your workflow requires 3+ distinct cognitive modes (research vs. planning vs. coding vs. reviewing)
- Single-agent context window hits 70-80%+ on preparatory work before implementation begins
- You need separation of concerns (prevent planners from implementing, coders from over-planning)
- Quality checkpoints matter (dedicated review agent validates before next phase)
- You're coordinating work across 3+ subsystems that can be researched/implemented in parallel

### Don't Use This Pattern When

- Task is simple (< 200 LOC, 1-2 files) — Single agent with Plan Mode is faster, simpler
- Work is linear phases without specialization (research → analysis → implementation) — Use multi-step-tasks pattern for simpler orchestration
- You need branch-level parallelism — Use parallel-execution for worktree-based concurrency
- Team has < 5 agent-driven tasks/week — Coordination overhead exceeds benefits; stick to single agents until volume justifies infrastructure

### Comparison with Related Features

| Aspect | Agent Teams | Multi-Step Tasks | Parallel Execution | Plan Mode |
|--------|-------------|------------------|-------------------|-----------|
| **Best For** | Role-based specialization | Sequential phases | Branch-level concurrency | Simple features |
| **Coordination** | High (conductor required) | Medium (phase handoffs) | Low (independent branches) | None |
| **Context Isolation** | High (subagent contexts) | Medium (phase separation) | High (separate worktrees) | None |
| **Setup Time** | 10 minutes (Squad) | 2-3 hours (phase configs) | 1-2 hours (branch setup) | 0 (built-in) |
| **Throughput** | 3-5x (parallel specialists) | 1.5-2x (phased execution) | 5-10x (branch parallelism) | 1x (baseline) |

---

<!-- 🎬 MAJOR SECTION: Core Architecture -->
## The Team Orchestration Pattern

*How coordinator-delegate architecture enables specialized agents to collaborate without context pollution*

### The Core Architecture

The coordinator pattern separates "what to do" (orchestration logic) from "how to do it" (specialized execution). The coordinator never implements directly—it receives user requests, routes to specialists based on defined rules, validates outputs, and aggregates results. [Squad](https://github.com/bradygaster/squad) implements this pattern as a complete, production-ready system.

```
┌─────────────────────────────────────────────────┐
│              USER / ENTRY POINT                 │
│     "Team, build user authentication system"    │
└─────────────────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────┐
│              COORDINATOR AGENT                  │
│  • Routes work via routing table                │
│  • Spawns specialists (sequential/parallel)     │
│  • Enforces reviewer protocol                   │
│  • Selects models per-task (cost-first)         │
│  • NEVER implements directly                    │
└─────────────────────────────────────────────────┘
         │           │           │
         ▼           ▼           ▼
    ┌─────────┐ ┌─────────┐ ┌─────────┐
    │  LEAD   │ │ DEV(S)  │ │ TESTER  │
    │ Agent   │ │ Agents  │ │ Agent   │
    │         │ │         │ │         │
    │ • Scope │ │ • Build │ │ • Test  │
    │ • Review│ │ • Code  │ │ • QA    │
    │ • Decide│ │ • Debug │ │ • Edge  │
    └─────────┘ └─────────┘ └─────────┘
      Isolated     Isolated     Isolated
      Context      Context      Context
         │           │           │
         ▼           ▼           ▼
    ┌─────────────────────────────────┐
    │       🧠 SHARED MEMORY         │
    │  decisions.md + history.md     │
    │  (persistent across sessions)  │
    └─────────────────────────────────┘
```

**Key Design Principles:**

| Principle | Implementation | Benefit |
|-----------|----------------|---------|
| **Single Responsibility** | Each agent masters one cognitive mode | 20-30% quality improvement in that domain |
| **Minimal Tools** | Agents only have tools for their role | Prevents tool misuse, enforces boundaries |
| **Context Isolation** | Subagents run in isolated context windows | 70-80% reduction in main conductor context |
| **Structured Handoffs** | Explicit transitions between phases | Clear approval gates, predictable workflow |
| **Conductor Authority** | Conductor coordinates, never executes | Clean separation of "what" from "how" |

### Why This Works

**Focused Context**: Each agent receives only information relevant to its task. In Squad, each agent loads its charter + history + team decisions — nothing from other agents' work. The Lead gets architecture context, the Frontend Dev gets UI context, the Backend Dev gets API context. No agent carries accumulated context from other domains.

**Right Tools, Right Time**: Squad's routing table ensures work goes to the right specialist. The coordinator answers quick questions directly (no agent spawn), routes domain work to specialists, and fans out "Team, ..." requests to all relevant agents in parallel.

**Parallel When Possible**: When you say "Team, build the login page," Squad launches Lead, Frontend, Backend, Tester, and Scribe simultaneously. When agents finish, the coordinator immediately chains follow-up work — tests reveal edge cases, the backend agent picks them up. 3-5x throughput on parallelizable work.

**Quality Checkpoints**: Squad's reviewer protocol prevents the common failure mode where an agent keeps "fixing" its own work in circles. On rejection, the original author is locked out — a different agent must revise. If that revision is also rejected, a third agent takes over.

**Specialization Advantage**: An agent with a charter tuned for backend development (API design, data modeling, auth patterns) outperforms a generalist by 20-30% within that domain. Same for frontend (UI components, state management) and testing (edge cases, integration patterns). Team of specialists beats single generalist — especially when their knowledge compounds over time.

### Tool Assignment Guidelines

| Agent Role | Appropriate Tools | Rationale |
|------------|-------------------|-----------|
| **Research / Discovery** | `search`, `fetch`, `usages`, `githubRepo` | Read-only exploration, no modification risk |
| **Planning / Strategy** | `search`, `fetch`, `create` (plan docs only) | Can document plans, can't implement |
| **Implementation** | `edit`, `create`, `delete`, `search` | Full editing power, focused on execution |
| **Review / Validation** | `search`, `fetch`, `analysis`, `linter` | Read + analyze, can't modify implementation |
| **Testing** | `search`, `create`, `runTests` | Create tests + verify execution |

---

<!-- 🎬 MAJOR SECTION: Squad: Production-Ready Agent Teams -->
## Squad: Production-Ready Agent Teams

*A persistent AI development team that lives in your repo and grows with your code*

### What Is Squad?

**Repository:** [github.com/bradygaster/squad](https://github.com/bradygaster/squad)

Squad gives you an AI development team through GitHub Copilot. Describe what you're building, and Squad proposes a team of specialists—lead, frontend, backend, tester—that persist as files in your repo. Each agent runs in its own context window, reads its own history and shared team decisions, and writes back what it learned. Knowledge compounds across sessions.

It's not a chatbot wearing hats. Each team member is spawned as a real subagent with its own tools, memory, and area of expertise.

### Squad Architecture

```
┌─────────────────────────────────────────────────┐
│              YOU / ENTRY POINT                   │
│   "Team, build the login page"                  │
└─────────────────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────┐
│              SQUAD COORDINATOR                   │
│  • Routes work based on routing.md              │
│  • Spawns agents in parallel                    │
│  • Enforces reviewer protocol                   │
│  • Selects models per task (cost-first)         │
│  • NEVER implements directly                    │
└─────────────────────────────────────────────────┘
     │          │          │          │
     ▼          ▼          ▼          ▼
┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐
│🏗️ Lead │ │⚛️ FE   │ │🔧 BE   │ │🧪 Test │
│        │ │ Dev    │ │ Dev    │ │ er     │
│ Scope  │ │ UI     │ │ APIs   │ │ Tests  │
│ Review │ │ Comps  │ │ Data   │ │ QA     │
└────────┘ └────────┘ └────────┘ └────────┘
  Own        Own        Own        Own
  Context    Context    Context    Context
     │          │          │          │
     ▼          ▼          ▼          ▼
┌─────────────────────────────────────────────────┐
│              📋 SCRIBE (silent)                  │
│  • Merges decisions from inbox                  │
│  • Logs sessions to log/                        │
│  • Propagates cross-agent updates               │
│  • Never speaks to user                         │
└─────────────────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────┐
│              🧠 SHARED MEMORY                    │
│  decisions.md — team-wide decisions (all read)  │
│  history.md — per-agent learnings (personal)    │
│  log/ — session history (searchable archive)    │
│  skills/ — reusable knowledge (earned over time)│
└─────────────────────────────────────────────────┘
```

### Squad File Structure

```
.ai-team/
├── team.md              # Roster — who's on the team
├── routing.md           # Who handles what (routing table)
├── ceremonies.md        # Team meeting definitions
├── decisions.md         # Shared brain — team decisions
├── decisions/inbox/     # Drop-box for parallel decision writes
├── casting/
│   ├── policy.json      # Universe allowlist and capacity
│   ├── registry.json    # Persistent agent name registry
│   └── history.json     # Universe usage history
├── agents/
│   ├── {name}/
│   │   ├── charter.md   # Identity, expertise, boundaries, voice
│   │   └── history.md   # What they know about YOUR project
│   └── scribe/
│       └── charter.md   # Silent memory manager
├── skills/              # Shared skill files (earned over time)
├── orchestration-log/   # Per-spawn log entries
└── log/                 # Session history
```

**Commit this folder.** Anyone who clones your repo gets the team—with all their accumulated knowledge.

### Squad Agent Charters

Each agent gets a charter defining identity, expertise, boundaries, and voice. This is far richer than a simple system prompt:

```markdown
# Ripley — Lead

> The one who keeps everyone honest and the scope tight.

## Identity
- **Name:** Ripley
- **Role:** Lead
- **Expertise:** Architecture, scope management, code review
- **Style:** Direct. Doesn't sugarcoat. Asks hard questions.

## What I Own
- Architecture decisions and trade-offs
- Scope and priority management
- Code review and quality gates

## Boundaries
**I handle:** Scope, decisions, code review, architecture.
**I don't handle:** Implementation. That belongs to the devs.
**When I'm unsure:** I say so and suggest who might know.
**If I review others' work:** On rejection, I may require a
different agent to revise (not the original author).

## Model
- **Preferred:** auto
- **Rationale:** Cost first unless writing code

## Voice
Opinionated about architecture. Will push back if scope creeps.
Prefers small PRs over big bangs. Thinks "YAGNI" is a feature.
```

### Squad Routing

The routing table determines which agent handles each type of work:

| Work Type | Route To | Examples |
|-----------|----------|----------|
| UI/Frontend | Frontend Dev | Components, layouts, styling |
| APIs/Backend | Backend Dev | Endpoints, data models, auth |
| Code review | Lead | Review PRs, architecture decisions |
| Testing | Tester | Write tests, find edge cases |
| Scope & priorities | Lead | What to build next, trade-offs |
| `"Team, ..."` | All relevant | Fan-out parallel execution |
| Quick questions | Coordinator | Answers directly, no agent spawn |

**Routing rules:**
1. **Eager by default** — spawn all agents who could usefully start work, including anticipatory downstream work
2. **"Team, ..." → fan-out** — spawn all relevant agents in parallel
3. **Quick facts → coordinator answers directly** — don't spawn an agent for "what port does the server run on?"
4. **Anticipate downstream work** — if a feature is being built, spawn tester to write test cases from requirements simultaneously

### Squad Memory System

Memory is layered. Knowledge compounds with use.

| Layer | What | Who Writes | Who Reads |
|-------|------|-----------|-----------|
| `charter.md` | Identity, expertise, voice | Squad (at init) | The agent itself |
| `history.md` | Project-specific learnings | Each agent, after every session | That agent only |
| `decisions.md` | Team-wide decisions | Any agent (via inbox) | All agents |
| `skills/` | Reusable patterns (earned) | Agents from real work | All agents |
| `log/` | Session history | Scribe | Anyone (searchable archive) |

**How knowledge compounds over time:**

| Stage | What Agents Know |
|-------|-----------------|
| 🌱 First session | Project description, tech stack, user name |
| 🌿 After a few sessions | Conventions, component patterns, API design, test strategies |
| 🌳 Mature project | Full architecture, tech debt map, regression patterns, performance conventions |

### Key Innovations in Squad

**Per-Agent Model Selection (Cost-First):**

| Task Output | Model | Tier |
|-------------|-------|------|
| Writing code (implementation, refactoring, tests) | `claude-sonnet-4.5` | Standard |
| Writing prompts or agent designs | `claude-sonnet-4.5` | Standard |
| Non-code work (docs, planning, triage) | `claude-haiku-4.5` | Fast |
| Visual/design work requiring image analysis | `claude-opus-4.5` | Premium |

**Reviewer Protocol — No Self-Review Loops:**
1. Agent A submits work → Reviewer rejects
2. Agent A is **locked out** — cannot revise their own rejected work
3. Agent B must handle the revision
4. If Agent B is also rejected, Agent C takes over
5. If all agents are locked out, Squad escalates to you

**Ralph — Autonomous Work Monitor:**
Ralph continuously checks for pending work—open issues, draft PRs, review feedback, CI failures—and keeps the squad moving. He self-chains: agents complete work → Ralph checks for more → triage → assign → spawn → repeat. The team never sits idle when there's work to do.

**Ceremonies — Structured Team Meetings:**
- **Design Review** (automatic): Triggers before multi-agent tasks. Lead facilitates, gets each agent's perspective on interfaces, risks, and contracts.
- **Retrospective** (automatic): Triggers after build failures or reviewer rejections. Focused root-cause analysis.

---

<!-- 🎬 MAJOR SECTION: Getting Started with Squad -->
## Getting Started with Squad

*From zero to a working AI team in under 10 minutes*

### Step 1: Install Squad

```bash
mkdir my-project && cd my-project
git init
npx github:bradygaster/squad
```

This copies `squad.agent.md` into `.github/agents/` and installs templates. Your actual team (`.ai-team/`) is created at runtime when you first talk to Squad.

### Step 2: Form Your Team

Open Copilot, select **Squad**, and describe your project:

```
You: "I'm starting a new project. Set up the team.
      Here's what I'm building: a recipe sharing app with React and Node."

Squad proposes:
  🏗️ Ripley   — Lead          Scope, decisions, code review
  ⚛️ Dallas   — Frontend Dev  React, UI, components
  🔧 Kane     — Backend Dev   APIs, database, services
  🧪 Lambert  — Tester        Tests, quality, edge cases
  📋 Scribe   — (silent)      Memory, decisions, session logs
```

You confirm (or adjust roles/add someone), and Squad creates the full `.ai-team/` directory structure with charters, histories, and routing rules. Each agent's `history.md` is seeded with your project description and tech stack for day-1 context.

### Step 3: Put the Team to Work

**Name an agent directly:**
```
> Ripley, fix the error handling in the API
```
Squad spawns Ripley specifically.

**Fan out to the whole team:**
```
> Team, build the login page

  🏗️ Lead — analyzing requirements...          ⎤
  ⚛️ Frontend — building login form...          ⎥ all launched
  🔧 Backend — setting up auth endpoints...     ⎥ in parallel
  🧪 Tester — writing test cases from spec...   ⎥
  📋 Scribe — logging everything...             ⎦
```

When agents finish, the coordinator immediately chains follow-up work—tests reveal edge cases, the backend agent picks them up, no waiting for you to ask.

**General requests get smart routing:**
```
> Add input validation to the form
```
Squad checks `routing.md`, picks the best match, and may launch anticipatory agents (e.g., tester writes validation test cases while the implementer builds).

### Step 4: Grow the Team as Needed

**Add new members:**
```
> I need a DevOps person
```
Squad allocates a name from the current casting universe, generates a charter and history seeded with project context. Immediately productive.

**Remove members gracefully:**
```
> Remove the designer — we're past that phase
```
Agents are never deleted. Charter and history move to `.ai-team/agents/_alumni/`. If you need them back later, they remember everything.

**Integrate with GitHub Issues:**
```
> Connect to myorg/myrepo
> Show the backlog
> Work on #12
```
Squad supports label-based triage (`squad` label → Lead triages → assigns `squad:{member}`), branch creation, PR generation, and even autonomous work via `@copilot` coding agent integration.

### Step 5: Export and Share Teams

```bash
# Export your trained team
npx github:bradygaster/squad export

# Import to another repo
npx github:bradygaster/squad import squad-export.json
```

Agent histories are split into **portable knowledge** (general learnings that transfer) and **project-specific learnings** (which stay context-tagged). Imported agents bring their skills without assuming your project works the same way.

### Advanced Configuration

**Response Modes** — Squad uses tiered response modes automatically:

| Mode | Time | What Happens | When Used |
|------|------|-------------|-----------|
| **Direct** | ~2–3s | Coordinator answers from memory | Quick factual questions |
| **Lightweight** | ~8–12s | Agent spawned with reduced overhead | Simple tasks |
| **Standard** | ~25–35s | Full agent spawn with charter/history/decisions | Most work |
| **Full** | ~40–60s | Multi-agent parallel spawn with design review | Complex multi-domain tasks |

**Model Overrides:**
```
> "use opus for this"            — one-off premium
> "always use haiku"             — session-wide cost savings
> "use gpt-5.2-codex for Kane"  — agent-specific override
```

**Skills System** — Agents earn reusable knowledge over time:
- **Starter skills**: Bundled at init (e.g., Squad conventions)
- **Earned skills**: Written by agents from real work, with confidence lifecycle: `low → medium → high`
- Agents read relevant skill files before working on a task

---

<!-- 🎬 MAJOR SECTION: Orchestration Patterns -->
## Four Proven Orchestration Patterns

*Common team coordination strategies for different development scenarios*

### Pattern 1: Linear Pipeline

**Structure:**
```
Discovery → Planning → Implementation → Review → Testing → Documentation
```

**When to Use:**
- Well-defined features with clear requirements
- Single-track development (no branching concerns)
- Each phase depends strictly on previous phase output

**Implementation:**
```yaml
# Conductor delegates sequentially
1. @explorer → findings
2. @planner (with findings) → plan
3. @implementer (with plan) → code
4. @reviewer (with plan + code) → validation
```

**Pros:** Simple, predictable, easy to debug
**Cons:** Serial execution, slower on parallelizable work
**Example Use Case:** Adding a single REST endpoint to existing API

---

### Pattern 2: Iterative Refinement Loop

**Structure:**
```
     ┌──────────────────────────────────┐
     │                                  │
     ▼                                  │
Implementation → Review → [Pass?] ──No──┘
                            │
                            Yes
                            ▼
                         Testing
```

**When to Use:**
- Quality-critical code (security, performance, correctness)
- Complex implementations with high failure risk
- Learning from feedback improves subsequent iterations

**Implementation:**
```yaml
# Reviewer returns NEEDS_REVISION → loop
loop:
  @implementer execute phase
  @reviewer validate
  if reviewer.status == "NEEDS_REVISION":
    @implementer fix issues from reviewer.findings
    continue loop
  elif reviewer.status == "APPROVED":
    break loop
```

**Pros:** High quality, issues caught early, adaptive
**Cons:** Unpredictable duration, potential infinite loops
**Example Use Case:** OAuth integration with token refresh edge cases

---

### Pattern 3: Parallel Specialists

**Structure:**
```
                    ┌→ Security Reviewer ─┐
                    │                     │
Discovery → Plan ──┼→ Performance Reviewer┼→ Integration
                    │                     │
                    └→ Documentation ─────┘
```

**When to Use:**
- Large features with independent cross-cutting concerns
- Maximizing throughput on multi-aspect validation
- Different specialists needed (security vs. performance vs. docs)

**Implementation:**
```yaml
# VS Code 1.109+ parallel invocation
findings = @explorer analyze codebase
plan = @planner create plan from findings
code = @implementer execute plan

# Parallel specialists
"In parallel: @security-reviewer check vulnerabilities, @performance-reviewer check efficiency"
```

**Pros:** 3-5x faster validation, comprehensive coverage
**Cons:** Coordination complexity, potential conflicting feedback
**Example Use Case:** Full-st feature touching auth, DB, API, UI

---

### Pattern 4: Hierarchical Orchestration

**Structure:**
```
Master Conductor
     │
     ├→ Frontend Conductor
     │      ├→ UI Specialist
     │      ├→ State Mgmt Specialist
     │      └→ Style Specialist
     │
     └→ Backend Conductor
            ├→ API Specialist
            ├→ DB Specialist
            └→ Auth Specialist
```

**When to Use:**
- Full-stack features spanning 5+ subsystems
- Large team simulations (10+ specialist roles)
- Clear domain boundaries (frontend vs. backend vs. infra)

**Implementation:**
```yaml
# Master conductor delegates to sub-conductors
@frontend-conductor handle UI for user dashboard
@backend-conductor handle API + DB for user dashboard

# Each sub-conductor manages its specialists
# Frontend Conductor:
  @ui-specialist build components
  @state-specialist add Redux slice
  @style-specialist responsive layout

# Backend Conductor:
  @api-specialist add REST endpoints
  @db-specialist create schema migration
```

**Pros:** Scales to very large projects, clean domain separation
**Cons:** High coordination overhead, complex debugging
**Example Use Case:** Building complete e-commerce checkout flow

---

## Real-World Use Cases

### Use Case 1: Full-Stack Feature with Squad

**The Problem:** Building a user authentication system requires coordinated work across frontend (login form, session management), backend (auth endpoints, token handling), testing (security edge cases), and architecture (token refresh, session storage). A single agent juggling all four domains loses context and produces mediocre results.

**The Solution:** Squad fan-out with parallel specialists:

```
You: "Team, build the authentication system"

  🏗️ Lead — scoping requirements, defining contracts...
  ⚛️ Frontend — building login form, session UI...
  🔧 Backend — setting up auth endpoints, JWT handling...
  🧪 Tester — writing test cases from spec...
  📋 Scribe — logging decisions...

  ↓ (agents finish, coordinator chains follow-up)

  🧪 Tester — edge cases from backend reveal token refresh gap
  🔧 Backend — picks up edge case, no waiting for you to ask
  🏗️ Lead — reviews contracts between frontend/backend
```

**Outcome:**
- Parallel execution: 4 agents working simultaneously vs. 1 agent context-switching
- Knowledge compounds: After a few sessions, agents know your auth patterns, conventions, and preferences
- Quality gate: Lead reviews and can reject → different agent must revise (no self-review loops)
- Decision trail: `decisions.md` captures JWT format, session storage strategy, endpoint contracts

---

### Use Case 2: Issue-Driven Development at Scale

**The Problem:** Team has 30+ open issues in the backlog. Manually triaging, assigning, implementing, and reviewing each one creates a bottleneck. Developers spend more time on coordination than coding.

**The Solution:** Squad with Ralph (work monitor) + GitHub Issues integration:

1. Label issues with `squad` → Lead auto-triages, assigns `squad:{member}`
2. Ralph monitors the board: untriaged issues, stalled PRs, failing CI
3. Agents pick up assigned issues, create branches, implement, open PRs
4. Simple issues routed to `@copilot` coding agent for fully autonomous work
5. Ralph keeps cycling: work done → check for more → triage → assign → repeat

**Outcome:**
- Triage time: Hours → seconds (Lead auto-analyzes and assigns)
- Idle time: Zero (Ralph ensures team never sits idle when work exists)
- Autonomous loop: `@copilot` handles well-defined bugs, test coverage, lint fixes without human intervention
- Full audit trail: Every decision, every session, every triage note logged and searchable

---

### Use Case 3: API Redesign for Performance

**The Problem:** Legacy API had N+1 query problems causing 3-5 second response times. Needed comprehensive analysis of 15 endpoints, performance profiling, redesign plan, implementation, and validation. Cross-cutting concern: changes affected multiple subsystems (API layer, data access, caching).

**The Solution:** Squad parallel specialists with design review ceremony:

1. Design Review ceremony triggers before work begins — Lead gets each agent's perspective on interfaces and risks
2. Backend Dev analyzes all endpoint implementations → identifies N+1 patterns
3. Lead creates phased optimization plan → groups related endpoints
4. Backend Dev executes optimizations → query batching, caching layer
5. Tester validates performance, edge cases, and data integrity in parallel

**Outcome:**
- Analysis time: 6 hours → 2 hours (automated pattern detection)
- Validation time: 8 hours (serial) → 3 hours (parallel)
- Response times: 3-5s → 200-400ms (90% improvement)
- Knowledge captured: Backend agent's `history.md` now contains caching patterns, query optimization strategies — future optimizations start faster
- Retrospective: If tests fail, automatic retro identifies root cause

---

## ✅ What You Can Do Today

**Immediate Actions (10 minutes):**
- [ ] Install Squad in a project: `npx github:bradygaster/squad`
- [ ] Form your team by describing your project to the Squad agent
- [ ] Give your first task: `"Team, build [something small]"` and watch parallel execution in action

**Short-Term Exploration (1-2 hours):**
- [ ] Run 3-5 tasks to let agents accumulate `history.md` knowledge — notice how they stop asking questions they've already answered
- [ ] Try naming agents directly (`"Ripley, fix the error handling"`) vs. fan-out (`"Team, build the dashboard"`)
- [ ] Check `.ai-team/decisions.md` to see captured team decisions
- [ ] Add a new team member: `"I need a DevOps person"`
- [ ] Try the reviewer protocol: have Lead review work and observe the rejection/reassignment flow

**Advanced Adoption (1-2 weeks):**
- [ ] Enable GitHub Issues integration with `squad` label-based triage
- [ ] Add `@copilot` coding agent for autonomous handling of well-defined tasks
- [ ] Activate Ralph (work monitor) for continuous backlog processing
- [ ] Export your trained team (`npx github:bradygaster/squad export`) and import into another project
- [ ] Measure before/after metrics: implementation time, rework iterations, test coverage, context switching overhead
- [ ] Monitor knowledge compounding: compare agent behavior at week 1 vs. week 4

**Next Steps After Completion:**
1. ✅ Validate Squad on 3-5 real tasks and observe knowledge compounding
2. 📖 Review [Agentic SDLC](../agentic-sdlc/) for organization-wide scaling patterns
3. 📊 Track team velocity improvements (tasks/week, time-to-delivery, quality metrics)
4. 🚀 Present results to leadership using [Agentic Delivery](../../exec-talks/agentic-delivery/) framing

---

## Related Patterns

### Complementary Features

- **[Multi-Step Tasks](../multi-step-tasks/)** — When you need sequential phases without role specialization (research → analysis → implementation)
- **[Parallel Execution](../parallel-execution/)** — When you need branch-level parallelism with git worktrees, not agent-level parallelism
- **[Agentic SDLC](../agentic-sdlc/)** — When agent volume exceeds repo/CI capacity: monorepo topology, outcome-based PRs, trust factory CI
- **[Custom Agents (Workshop)](../../workshop/06-custom-agents/)** — Hands-on exercises for creating, testing, and deploying custom agent definitions

### Decision Flow

**If this talk doesn't fit your needs:**

```
Q: What's your actual goal?
├─ Simple feature (< 200 LOC) → Use Plan Mode (single agent)
├─ Sequential phases, no specialization → See: Multi-Step Tasks
├─ Branch-level parallelism → See: Parallel Execution
├─ Cross-repo coordination → See: Agentic SDLC
└─ Enterprise-wide adoption → See: Enterprise Patterns
```

See [DECISION-GUIDE.md](../DECISION-GUIDE.md) for complete navigation help.

---

## 📚 Official Documentation

**Primary Documentation:**
- 📖 **[Custom Agents in VS Code](https://code.visualstudio.com/docs/copilot/customization/custom-agents)** — Agent structure, YAML frontmatter, tools, models, handoffs
- 📖 **[Subagents](https://code.visualstudio.com/docs/copilot/agents/subagents)** — Subagent invocation, parallel execution, context isolation benefits
- 📖 **[VS Code 1.109 Release Notes](https://code.visualstudio.com/updates/v1_109#_agent-orchestration)** — Agent orchestration features, invocation controls, parallel execution support

**Squad Resources:**
- 🐙 **[Squad Repository](https://github.com/bradygaster/squad)** — Production-ready agent team system with persistent memory, parallel execution, GitHub Issues integration
- 📖 [Squad Product Guide](https://github.com/bradygaster/squad/blob/main/docs/guide.md) — Comprehensive usage guide covering all features
- 📖 [Squad Model Selection](https://github.com/bradygaster/squad/blob/main/docs/features/model-selection.md) — Cost-first per-agent model routing
- 📖 [Squad Skills System](https://github.com/bradygaster/squad/blob/main/docs/features/skills.md) — Earned knowledge with confidence lifecycle
- 📖 [Ralph Work Monitor](https://github.com/bradygaster/squad/blob/main/docs/features/ralph.md) — Autonomous backlog processing

**Additional Resources:**
- 🎓 [Chat Sessions](https://code.visualstudio.com/docs/copilot/chat/chat-sessions) — Managing context windows and agent sessions
- 🔧 [Agent Invocation Controls](https://code.visualstudio.com/updates/v1_109#_control-how-custom-agents-are-invoked) — `user-invokable`, `disable-model-invocation`, `agents` field
- 💬 [VS Code Discussions - Agent Teams](https://github.com/microsoft/vscode-discussions/discussions) — Community questions and patterns

---

## 🎭 Behind the Scenes

### Context Window Mathematics

**Single Agent (Traditional):**
```
Total context: 200K tokens
Research: 80K (40%) - Reading files, understanding architecture
Planning: 40K (20%) - Creating implementation strategy
Available for implementation: 80K (40%)
↓
Output quality: 70% (context pollution from phases 1-2)
```

**Agent Teams (Orchestration — Squad):**
```
Coordinator context: 200K tokens
Squad coordinator overhead: ~13,200 tokens (6.6%)
Available for coordination: ~187,000 (93%+)

Each spawned agent: Own 200K context window
Agent at Week 1:  ~1,250 tokens (0.6%) — charter + seed history
Agent at Week 4:  ~3,300 tokens (1.7%) — + 15 learnings, 8 decisions
Agent at Week 12: ~9,000 tokens (4.5%) — + 50 learnings, 47 decisions
Remaining per agent: ~191,000-199,000 (95%+) for actual work
↓
Output quality per agent: 90-95% (no context pollution)
Fan out to 5 agents: ~1M tokens total reasoning capacity
Effective utilization: 93%+ vs. 40% for single agent
```

**ROI: 93%+ context available for work + 5x parallel specialist capacity**

---

### Parallel Execution Trade-offs

VS Code 1.109 allows up to 10 parallel subagents. When should you parallelize?

**Good Parallel Candidates:**
- ✅ Independent research tasks (Explorer analyzing different subsystems)
- ✅ Independent validation aspects (Security + Performance + Documentation reviewers)
- ✅ Independent implementation phases (Frontend + Backend for separate concerns)

**Poor Parallel Candidates:**
- ❌ Sequential dependencies (can't implement before planning)
- ❌ Shared resource conflicts (both agents editing same file)
- ❌ Context exchange required (Agent B needs Agent A's output before starting)

**When Parallelism Hurts:**
- Overhead of launching 10 agents > time saved on small tasks
- Coordinating conflicting results costs more than sequential execution
- Context window for aggregating 10 results explodes conductor capacity

**Rule of thumb:** Parallelize when (total_sequential_time > 10 minutes) AND (tasks are independent) AND (result aggregation < 5 minutes)

---

### Handoff Mechanics

VS Code 1.109+ supports structured handoffs using frontmatter:

```yaml
handoffs:
  - label: "Start Implementation"
    agent: "implementer"
    prompt: "Execute the plan above"
    send: false  # Requires user click
    model: "Claude Sonnet 4"  # Override default model
```

**Label:** Shows as button in chat UI ("Start Implementation")
**Agent:** Target agent identifier (must exist in workspace)
**Prompt:** Pre-filled message sent to target agent
**Send:** `false` = user reviews before sending, `true` = auto-executes
**Model:** Optional override for target agent's default model

**When `send: false`**: User sees handoff button → clicks → reviews prompt → can edit → sends
**When `send: true`**: Handoff auto-executes immediately (use for trusted, safe transitions)

**Use Cases:**
- Plan → Implement handoff: `send: false` (user reviews plan first)
- Security pass → Next phase: `send: true` (trusted checkpoint)
- Research → Planning: `send: false` (user validates findings before plan)

---

### Tool Restriction Benefits

Why give Planner only `['search', 'fetch', 'create']` and not `edit`?

**Without Tool Restrictions:**
- Planner might "helpfully" fix a typo during research → now it's implementing
- Implementer might "quickly check" something outside plan → now it's researching
- Reviewer might "just fix this one thing" → now it's implementing + biasing review

**With Tool Restrictions:**
- Planner CAN'T edit even if it wants to → boundaries enforced by system
- Implementer CAN'T create plan docs → stays focused on execution
- Reviewer CAN'T modify code → maintains objectivity

**Enforcement Level:** VS Code validates tool availability before agent invocation. If agent attempts disallowed tool, request fails immediately. No "accidentally implementing during planning" possible.

**Result:** 40-60% reduction in context mixing, cleaner phase outputs, predictable behavior
