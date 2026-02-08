---
status: active
updated: 2026-02-01
section: "Agent Architecture"
---

# Parallel Execution: Autonomous Agents Working Simultaneously

> **The Question This Talk Answers:**
> *"How do I run multiple AI agents on different tasks at the same time without them interfering with each other or requiring constant supervision?"*

**Duration:** 45 minutes | **Target Audience:** Developers / DevOps / Engineering Managers

---

## 📊 Content Fitness

| Criterion | Assessment | Notes |
|-----------|-----------|-------|
| **Relevant** | 🟢 High | Solves the supervision bottleneck—enables parallel agent execution without context switching or workspace conflicts |
| **Compelling** | 🟢 High | Git worktrees + background agents = 3-10x parallel capacity with zero interference; shifts 85 active minutes → 27 minutes |
| **Actionable** | 🟢 High | Use VS Code 1.109 features today: session picker, worktree isolation, custom agents in background mode—no repo restructuring required |

**Overall Status:** 🟢 Ready to use

---

## 📽️ Slide Generation Mapping

### Slide Sequence (Generated Automatically)

1. **Title/Logo Slide** ← H1 title + subtitle
2. **Question/Objective Slide** ← "The Question This Talk Answers"
3. **Table of Contents Slide** ← Auto-generated from 🎬 sections
4. **Problem Slide** ← "The Problem"
5. **Solution Overview** ← "The Solution"
6. **Key Artifacts** ← Architecture diagrams and workflow examples
7. **Mental Model Shift** ← Move-Toward/Away/Against
8. **When to Use Decision Tree** ← "When to Use This Pattern"
9. **Git Worktree Architecture** ← 🎬 Section 1 (3-4 slides)
10. **Hand-Off Workflow** ← 🎬 Section 2 (2-3 slides)
11. **Session Management** ← 🎬 Section 3 (3-4 slides)
12. **Multi-Agent Patterns** ← 🎬 Section 4 (2-3 slides)
13. **Custom & Cloud Agents** ← 🎬 Section 5 (2-3 slides)
14. **Use Cases** ← Real-World Use Cases (1-2 slides)
15. **Actionable Outcomes** ← What You Can Do Today
16. **Related Patterns** ← Related Patterns
17. **Official Documentation** ← 📚 section
18. **End Slide** ← Auto-generated

### Major Sections (TOC Entries)

```markdown
<!-- 🎬 MAJOR SECTION: Worktree Architecture -->
<!-- 🎬 MAJOR SECTION: Hand-Off Workflow -->
<!-- 🎬 MAJOR SECTION: Session Management -->
<!-- 🎬 MAJOR SECTION: Multi-Agent Patterns -->
<!-- 🎬 MAJOR SECTION: Custom & Cloud Agents -->
```

---

## The Problem

### Key Points

- **Interactive agents require constant supervision**
  Traditional AI workflows demand continuous human guidance—answering questions, approving approaches, monitoring progress

- **Context switching destroys productivity**
  Every agent interruption breaks flow; mental reload cost exceeds implementation gains

- **Serial execution limits parallelism**
  Can't start next task while monitoring current agent; supervision becomes the bottleneck

- **Workspace conflicts prevent multi-agent work**
  Multiple agents modifying the same codebase create merge conflicts and file collision risks

### Narrative

You've assigned an agent to refactor the authentication module. It completes in 60 minutes—but requires your active supervision throughout. You answer clarification questions. You approve approaches. You monitor progress. When it finishes, you realize you could have started the testing agent or documentation agent in parallel—but supervision doesn't scale. Starting a second task means abandoning the first agent or constant context switching between them.

The productivity ceiling hits fast: human attention becomes the limiting factor in AI-accelerated workflows. Two agents require twice the supervision overhead. Three agents? Impossible without abandoning work or splitting focus so thin that quality suffers. And even if you had unlimited attention, multiple agents working in the same workspace create file conflicts and merge nightmares.

---

## The Solution: Background Agents with Git Worktree Isolation

### What It Does

Background agents run autonomously in isolated Git worktrees—separate filesystem locations sharing the same repository history. Plan once, hand off, and agents execute independently while you continue other work. Review finished results, merge selectively, or discard experiments with zero risk to your active workspace.

### Key Capabilities

- **Autonomous execution**: Agents work from planning through delivery without human intervention—supervision shifts from continuous to final review
- **Git worktree isolation**: Each agent operates in independent working directory; changes never touch your active workspace
- **Hand-off workflow**: Interactive planning transitions seamlessly to background execution with full context preservation
- **Unified session management**: VS Code 1.109 provides session picker, status indicators, and progress monitoring across local/background/cloud agents

### Architecture Overview

Git worktrees provide native isolation: lightweight checkouts sharing repository data (`.git/`) but with independent working directories. When you start a background agent, VS Code creates a worktree, checks out a feature branch, and runs the agent there. Your main workspace continues unchanged. The agent makes commits in its worktree. When finished, you review the branch and merge—or discard the worktree if the approach didn't work.

The hand-off workflow divides supervision into three phases: **interactive planning** (15 minutes defining intent), **background execution** (0 minutes active time, agent works in parallel), **review and integration** (10 minutes examining finished work). Traditional workflows require 85 minutes of active supervision; background agents reduce this to 27 minutes active time.

**Official Documentation:**
- 📖 [VS Code: Background Agents](https://code.visualstudio.com/docs/copilot/agents/background-agents) — Autonomous agent execution with worktree isolation
- 📖 [Git Worktrees](https://git-scm.com/docs/git-worktree) — Technical reference for worktree capabilities
- 📖 [VS Code 1.109 Release Notes](https://code.visualstudio.com/updates/v1_109#_agent-session-management) — Latest session management and agent features

---

## 📦 Key Artifacts

**This talk demonstrates architectural patterns and workflows** for parallel agent execution using VS Code's built-in features. No custom code required—use session picker, worktree integration, and agent configurations directly.

### Primary Artifacts

*Shown inline with detailed explanation in the major sections*

- **Git Worktree Architecture Diagram** — Visual comparison of traditional single-workspace vs. worktree-based isolation
- **Hand-Off Workflow Patterns** — Before/after comparison showing supervision time reduction (85 min → 27 min)
- **Multi-Agent Execution Patterns** — Three parallel patterns: independent tasks, experimental variants, specialized roles
- **VS Code 1.109 Session Picker** — Unified interface for starting/handing-off local, background, and cloud agents

### Supporting Files

*Available in VS Code and documentation*

- **[Custom Agent Definitions](../../workshop/06-custom-agents/)** — Create repository-defined agents that work in background mode
- **[Copilot CLI Documentation](https://cli.github.com/manual/gh_copilot)** — Command-line interface for background agent sessions
- **[Agent Skills Examples](../../workshop/04-agent-skills/)** — Specialized domain knowledge for agent capabilities

---

## 🎯 Mental Model Shift

> **The Core Insight:** From "supervise each agent continuously" to "delegate in parallel, review finished work"

### Move Toward (Embrace These Patterns)

- ✅ **Hand-Off Workflow**: Plan interactively (15 min), hand off to background agent (2 min), review finished work (10 min) → 27 active minutes vs. 85 minutes supervised execution
- ✅ **Worktree Isolation**: Launch 3-5 background agents in separate worktrees simultaneously → Zero file conflicts, independent branches, risk-free experimentation
- ✅ **Outcome-Based Review**: Judge finished implementations by correctness and quality, not intermediate steps → Faster iteration, less micromanagement
- ✅ **Planning Clarity**: Invest 15 minutes defining acceptance criteria, constraints, and non-goals → Agents succeed autonomously without mid-task intervention

### Move Away From (Retire These Habits)

- ⚠️ **Supervised Interactive Development**: Monitoring agent progress continuously, answering every question, approving each step → Can't parallelize work, supervision becomes bottleneck
- ⚠️ **Serial Task Execution**: Finishing one agent task completely before starting the next → Wastes parallel capacity, limits throughput to single-agent speed
- ⚠️ **Single Workspace Development**: All agents work in the same active workspace → File conflicts, merge chaos, risky experimentation

### Move Against (Active Resistance Required)

- 🛑 **Vague Hand-Offs**: Starting background agents without clear acceptance criteria → Mid-task clarification requests, incomplete results, wasted cycles
- 🛑 **Mixing Worktrees Manually**: Manually merging agent changes from worktree to main workspace during execution → Defeats isolation, creates conflicts, loses rollback safety

> **Example Transformation:** Before: Start refactoring agent (60 min supervised), then start testing agent (45 min supervised), then documentation agent (30 min supervised) = 135 minutes active time, serial execution. After: Plan all three (15 min total), hand off to 3 background agents in parallel worktrees (2 min), review all three finished results (30 min) = 47 minutes active time, parallel execution. Savings: 88 minutes (65%) with 3x throughput.

---

## When to Use This Pattern

### Decision Tree

```
Q: Can your tasks run in parallel without dependencies?
├─ Yes, independent tasks (Feature A, B, C)
│  → Use: Parallel Execution (this talk)
│  └─ Best for: 3-10 simultaneous background agents
│
├─ Yes, but need to test competing approaches
│  → Use: Experimental Variants (section in this talk)
│  └─ Best for: Compare 2-3 architectural options empirically
│
├─ No, tasks have sequential dependencies
│  → Use: Multi-Step Tasks pattern
│  └─ Best for: Research → Analysis → Implementation workflows
│
└─ No, tasks need specialized roles collaborating
   → Use: Agent Teams pattern
   └─ Best for: Planner + Coder + Reviewer coordination
```

### Use This Pattern When

- You have 3-10 independent tasks that can run simultaneously (refactoring, testing, documentation)
- You want to compare 2-3 architectural approaches empirically (GraphQL vs REST vs gRPC)
- You need autonomous execution without supervision overhead—agents work while you focus on planning or next tasks
- Risk-free experimentation is critical—failed approaches discard without merge conflicts

### Don't Use This Pattern When

- Tasks have strict dependencies—output from Task A feeds into Task B (use [Multi-Step Tasks](../multi-step-tasks/))
- You need specialized agents with hand-off between roles—planner designs, coder implements, reviewer validates (use [Agent Teams](../agent-teams/))
- Requirements are ambiguous—agents need iterative clarification, not autonomous execution
- Tasks are simple enough for single interactive agent—overhead of worktree setup exceeds execution time

### Comparison with Related Features

| Aspect | Parallel Execution (this talk) | Multi-Step Tasks | Agent Teams |
|--------|-------------------------------|------------------|-------------|
| **Best For** | Independent simultaneous tasks | Sequential dependent phases | Specialized role coordination |
| **Agent Count** | 3-10 background agents | 1 agent, multi-phase | 3-5 role-specific agents |
| **Key Mechanism** | Git worktree isolation | Context carryover | Hand-off with role transition |
| **Supervision Model** | Plan once, review all | Interactive between phases | Monitor role transitions |

---

<!-- 🎬 MAJOR SECTION: Worktree Architecture -->
## Git Worktree Isolation: Technical Foundation

*How worktrees enable safe parallel agent execution*

### Traditional Single Workspace Problem

**Single workspace constraint:**
```
repo/
├── .git/
└── src/
    └── main.js  ← only one checkout, multiple agents conflict
```

When two agents work in the same workspace:
- File modifications collide (Agent A edits `main.js` while Agent B also edits it)
- Merge conflicts require continuous manual resolution
- Breaking changes from experimental agent affect active work
- Rollback means reverting commits, not discarding workspace

### Worktree-Based Isolation Solution

**Multiple independent workspaces:**
```
repo/
├── .git/  ← shared repository (single source of truth)
├── main/src/main.js  ← your active work (untouched)
├── worktree-agent-1/src/main.js  ← Agent A workspace
└── worktree-agent-2/src/main.js  ← Agent B workspace
```

**Key architecture benefits:**
- **True isolation**: File changes in `worktree-agent-1` never touch `main/` or `worktree-agent-2`
- **Shared repository**: All worktrees use same `.git/`, maintaining full history and objects
- **Branch independence**: Each worktree checks out different branch (feature-A, feature-B, feature-C)
- **Parallel safety**: Agent A can modify `main.js` while Agent B modifies the same file—different worktrees, zero conflicts

### How VS Code Creates Worktrees

When you start a background agent session in VS Code 1.109:

1. **Worktree creation**: `git worktree add worktree-agent-1 -b feature-branch`
2. **Branch checkout**: New branch created from current `HEAD`, independent history
3. **Agent execution**: Copilot CLI runs in `worktree-agent-1`, makes commits there
4. **Isolation guarantee**: Your `main/` workspace never changes during agent execution

**Settings and control:**
- `git.worktreeIncludeFiles`: Copy git-ignored files (local config, build artifacts) to worktrees
- Auto-commit per turn: Agent commits changes at end of each turn, aligning session history with Git history
- View worktrees: Source Control Repositories view (`scm.repositories.explorer`) shows all active worktrees

### Worktree Lifecycle Management

**After agent completes:**
- **Review branch**: Check code quality, run tests, validate approach
- **Merge**: `git merge feature-branch` if implementation succeeds
- **Discard**: `git worktree remove worktree-agent-1` for failed experiments—no merge conflicts, no revert overhead

**Rollback comparison:**
| Scenario | Traditional Workspace | Worktree Isolation |
|----------|----------------------|-------------------|
| **Failed experiment** | 90 minutes reverting commits, resolving conflicts | 5 minutes removing worktree |
| **Breaking changes** | Affects active work immediately | Isolated, main workspace unaffected |
| **Merge conflicts** | High risk with parallel work | Zero—each agent has independent branch |

---

<!-- 🎬 MAJOR SECTION: Hand-Off Workflow -->
## The Hand-Off Workflow Pattern

*Transform supervision from continuous to review-based*

### Three-Phase Execution Model

**Phase 1: Interactive Planning (15 minutes active)**
- Clarify requirements, identify edge cases, discuss architectural approach
- Define explicit acceptance criteria: "Generate tests achieving 80%+ coverage for authentication module"
- Specify constraints and non-goals: "Do not modify database schema or change API contracts"
- Provide links to related code, documentation, and historical context

**Phase 2: Background Execution (0 minutes active)**
- Agent receives full conversation history and planning context automatically
- Works autonomously in isolated Git worktree with feature branch
- Makes commits at end of each turn, progressing toward acceptance criteria
- Signals completion with status update and artifact summary

**Phase 3: Review and Integration (10 minutes active)**
- Review finished implementation: code quality, test coverage, edge case handling
- Run tests and validation checks
- Merge to main branch if successful, iterate with additional context if needed

### Before/After Productivity Comparison

**Before: Supervised Interactive Development**
```
┌─────────────┐     ┌──────────────┐     ┌─────────────┐
│ Plan        │────▶│ Implement    │────▶│ Review      │
│ 15 min      │     │ 60 min       │     │ 10 min      │
│ (active)    │     │ (supervised) │     │ (active)    │
└─────────────┘     └──────────────┘     └─────────────┘
Total: 85 minutes active supervision (serial execution)
```

**After: Hand-Off to Background Agent**
```
┌─────────────┐     ┌──────────────┐     ┌─────────────┐
│ Plan        │────▶│ Hand-off     │────▶│ Review      │
│ 15 min      │     │ 2 min        │     │ 10 min      │
│ (active)    │     │ (active)     │     │ (active)    │
└─────────────┘     └──────────────┘     └─────────────┘
                           │
                           ▼
                    ┌──────────────┐
                    │ Background   │
                    │ execution    │
                    │ (parallel)   │
                    └──────────────┘
Total: 27 minutes active time, 60 minutes parallel work
```

**Productivity multiplier:**
- Single task: 85 min → 27 min (68% reduction in active time)
- Three parallel tasks: 255 min → 47 min (82% reduction, 5.4x faster)
- Ten tasks/week: 850 min → 270 min (9.7 hours reclaimed)

### Key to Autonomous Success

**Planning quality determines execution success:**
- ✅ **Clear acceptance criteria**: "Tests must cover happy path, error cases, and edge cases (invalid tokens, expired sessions)"
- ✅ **Explicit constraints**: "Use existing auth library, maintain backward compatibility with v2 API"
- ✅ **Context provision**: "See similar implementation in `` for pattern reference"

❌ **Vague hand-offs fail:** "Make the auth module better" → Agent asks clarifying questions mid-execution, breaking autonomy

---

<!-- 🎬 MAJOR SECTION: Session Management -->
## Unified Session Management (VS Code 1.109)

*Orchestrate multiple parallel agents from single interface*

### Session Type Picker

**New in VS Code 1.109:** Session type picker in chat input area

**Serves two purposes:**
1. **Choose session type**: Start local, background, cloud, or third-party agent sessions
2. **Hand off sessions**: Transfer ongoing conversation to different environment

**Example workflow:**
```
1. Plan interactively in local session (Ctrl+Alt+I)
2. Select "Continue in Background" from session type picker
3. Background agent works while you start next local session
4. Monitor progress via Agent Sessions view
```

**Keyboard shortcut:** Bind `workbench.action.chat.newLocalChat` for instant local session creation

### Agent Sessions View

**Enhanced features in 1.109:**
- **Filter by type**: Show only background agents, cloud agents, or all sessions
- **Multi-select operations**: Bulk actions across multiple sessions (archive, delete, export)
- **Resize sessions list**: Adjust when showing chat side-by-side with editor
- **Stacked view**: Improved navigation with filter/search support
- **Diff statistics**: Each session shows files changed, lines added/removed

**Monitoring capabilities:**
- **Real-time progress**: See agent actions without interrupting execution
- **Log streaming**: Review agent decisions, tool calls, and reasoning
- **Status indicators**: Visual state (in-progress, completed, attention-needed)

### Agent Status Indicator

**Command center integration (`chat.agentsControl.enabled`):**

| Indicator | Meaning | Action |
|-----------|---------|--------|
| 🔵 In-progress | Agents actively working | Click to filter active sessions |
| 🟡 Unread | Sessions have new updates | Click to review unread sessions |
| 🔴 Attention needed | Agents require input/approval | Click to view sessions needing attention |

**Status indicator behavior (`chat.agentsControl.clickBehavior`):**
- Default: Cycles through Chat view states (sidebar, maximized, hidden)
- Alternative: Opens Agent Sessions view filtered by status type

### Multi-Session Orchestration Example

**Scenario:** Three parallel background agents + interactive local agent

```
Agent Sessions View:
┌─────────────────────────────────────────┐
│ 🔵 background-1: Refactor auth module   │
│ 🔵 background-2: Generate test coverage │
│ 🔵 background-3: Update documentation   │
│ ⚪ local-1: Plan next feature (YOU)     │
└─────────────────────────────────────────┘
```

**Workflow:**
1. Plan Feature D in local session (15 min)
2. Hand off Feature D to background-4 agent via session picker (2 min)
3. Start planning Feature E in new local session while 4 agents work
4. Agent Sessions view shows progress on all 4 background agents
5. Status indicator: 🔵 4 in-progress → Review when first completes

**Result:** 4x parallel capacity without losing track of progress

---

<!-- 🎬 MAJOR SECTION: Multi-Agent Patterns -->
## Multi-Agent Parallel Patterns

*Three architectural patterns for parallel agent execution*

### Pattern 1: Independent Tasks (Parallel Execution)

**When to use:** Tasks have zero dependencies, can run simultaneously

**Architecture:**
```
Task A → Agent 1 (worktree-1) → Branch feature-A
Task B → Agent 2 (worktree-2) → Branch feature-B
Task C → Agent 3 (worktree-3) → Branch feature-C

All three agents work simultaneously, merge independently
```

**Best for:**
- Independent feature development (OAuth, payment gateway, notification service)
- Non-overlapping refactoring (auth module, logging module, error handling)
- Parallel quality improvements (test generation, documentation, linting fixes)

**Example:** After implementing new API endpoint:
- Agent 1: Generate integration tests in `worktree-test` → merge to `main`
- Agent 2: Write API documentation in `worktree-docs` → merge to `main`
- Agent 3: Add observability (logging, metrics) in `worktree-observability` → merge to `main`

Result: 3 tasks completed in parallel time of 1 task

### Pattern 2: Experimental Variants (A/B Comparison)

**When to use:** Architectural decision requires empirical comparison

**Architecture:**
```
Requirement → Agent 1 (GraphQL implementation) → Branch approach-A
           ↘ Agent 2 (REST implementation)     → Branch approach-B
           ↘ Agent 3 (gRPC implementation)     → Branch approach-C

Compare finished implementations, merge winner, discard losers
```

**Best for:**
- Architecture decisions (GraphQL vs REST vs gRPC)
- Performance optimization attempts (different caching strategies)
- API design exploration (multiple interface approaches)

**Example:** Design new search API:
- Agent 1: GraphQL with nested queries → measure: flexibility, client complexity
- Agent 2: REST with hypermedia → measure: simplicity, cacheability
- Agent 3: gRPC with streaming → measure: performance, type safety

**Evaluation criteria:**
- Performance: Latency p50/p95, throughput under load
- Complexity: Lines of code, client integration difficulty
- Maintainability: Testability, documentation clarity

**Decision:** Compare finished implementations empirically, not theoretically. Merge winner, `git worktree remove` for losers—zero merge conflict risk.

### Pattern 3: Specialized Parallel Work

**When to use:** Cross-cutting concerns applied post-implementation

**Architecture:**
```
                    ┌→ Refactoring Agent (worktree-refactor) ─┐
                    │                                          │
Feature Complete ──┼→ Testing Agent (worktree-test) ─────────┼→ Integration
                    │                                          │
                    └→ Documentation Agent (worktree-docs) ───┘

Three specialized agents tackle different concerns simultaneously
```

**Best for:**
- Post-implementation cleanup: New feature complete, needs tests + docs + refactoring
- Cross-cutting improvements: Apply new pattern across auth, payment, notification modules
- Quality enhancement cycles: Security audit + performance optimization + accessibility fixes

**Example:** After implementing user profile feature:
- Refactoring agent: Apply new error handling pattern to profile service
- Testing agent: Generate 80%+ test coverage for profile endpoints
- Documentation agent: Write user guide and API reference for profile features

**Coordination:** Each agent works independently, merges non-overlapping changes. Review all three branches together before integration.

---

<!-- 🎬 MAJOR SECTION: Custom & Cloud Agents -->
## Scaling with Custom and Cloud Agents

*Extend parallel capacity with specialized and cloud-based agents*

### Custom Agents in Background Mode

**Repository-defined agents (`.github/agents/`):**
- Load automatically in VS Code and Copilot CLI
- Define specialized instructions, tool restrictions, and behavior patterns
- Execute identically in background mode as in interactive mode

**Background execution model:**
- Agent receives full interactive context from hand-off
- Works in isolated Git worktree with branch checkout
- Has access to same tools as interactive mode: file operations, Git commands, testing
- Signals completion with status update and artifact summary

**Enable custom agents for background:** `github.copilot.chat.cli.customAgents.enabled`

### Example: Architecture Review Agent

**Custom agent definition (`.github/agents/review-enforcer.agent.md`):**
```markdown
---
name: review-enforcer
tools: ['analyze', 'shell(npm test)', 'file']
model: 'Claude Sonnet 4.5 (copilot)'
---

You are an architecture review agent enforcing team standards.

**Your responsibilities:**
- Check approved patterns are used correctly (dependency injection, error handling)
- Validate dependencies match architecture decision records
- Ensure performance budgets are not violated (bundle size, query count)
- Post structured review comments with specific violations and fixes

**Acceptance criteria:**
- Zero critical violations
- All warnings include specific file/line references
- Suggested fixes include code examples
```

**Usage pattern:**
1. PR created → Trigger background agent via workflow: `copilot @review-enforcer "Review PR #123"`
2. Agent checks out PR branch in isolated worktree
3. Agent runs architecture analysis: patterns, dependencies, performance
4. Agent posts structured review comment on PR
5. Human reviewer focuses on business logic, not mechanical standards

**Impact:**
- Manual review: 30 min/PR, inconsistent application
- Background agent: 2 min/PR, 100% consistency
- Capacity: 5-6 PRs/day manual → 20+ PRs/day with agent

### Cloud Agents for Large-Scale Operations

**When to use cloud agents (vs. background agents):**
- **Large refactoring:** Modify 100+ files without local resource constraints
- **Cross-repository operations:** Coordinate changes across multiple repos
- **Long-running tasks:** Operations that would timeout locally (8+ hours)

**Cloud agent capabilities (VS Code 1.109):**
- **Model selection:** Choose from available models for task-specific optimization
- **Custom agents:** Use repository-defined agents from default branch
- **Multi-root support:** Select which folder in multi-root workspace
- **Partner agents:** Access third-party agents (Claude, Codex) where available

**Hybrid architecture example:**
```
Local planning:
- Interactive local session (15 min): Define large refactoring scope

Parallel execution:
- 3 background agents: Modify auth, payment, notification modules in isolation
- 10 cloud agents: Process remaining 70+ modules on GitHub infrastructure

Review:
- Background agents complete in 2 hours (local machine)
- Cloud agents complete in 1.5 hours (GitHub infrastructure)
- Review all 73 branches together, merge in logical order
```

**Result:** Massive parallel capacity (13 agents simultaneously) without local machine limitations.

---

## Real-World Use Cases

### Use Case 1: Risk-Free Architectural Experimentation

**The Problem:**
- Experimentation carries high cost: Breaking changes affect active work, rollback requires 90 minutes reverting commits
- Merge conflicts from competing approaches create integration nightmares
- Teams avoid exploration, stick with known patterns even when better alternatives exist

**The Solution:**
- Launch 3 background agents testing architectural variants: GraphQL, REST, gRPC
- Each agent works in isolated worktree with independent branch
- Agents implement complete solutions including tests and documentation
- Compare finished implementations empirically: performance, complexity, maintainability

**Implementation:**
```bash
# Hand off three experimental variants
1. Local session: Plan API requirements (15 min)
2. Session picker → Background: Agent 1 implements GraphQL in worktree-graphql
3. Session picker → Background: Agent 2 implements REST in worktree-rest
4. Session picker → Background: Agent 3 implements gRPC in worktree-grpc
5. Review all three branches when complete (30 min)
```

**Outcome:**
- **90 minutes → 5 minutes** rollback time (remove worktree vs. complex revert)
- **0 merge conflicts** (isolation prevents interference)
- **3x experimentation rate** (negligible cost enables data-driven decisions)

---

### Use Case 2: Autonomous Architecture Review at Scale

**The Problem:**
- Manual architecture reviews don't scale: Senior architects spend 30 min/PR validating patterns
- Inconsistent application: Different reviewers apply standards differently
- Review bottleneck: PRs wait hours/days for senior architect availability
- Capacity limitation: Can't review 20+ PRs daily with manual process

**The Solution:**
- Configure `@review-enforcer` custom agent with architecture standards
- PR creation triggers background agent review in isolated worktree
- Agent analyzes code: approved patterns, dependency compliance, performance budgets
- Agent posts structured review comments with specific violations and recommended fixes
- Human reviewers focus on business logic and creative problem-solving

**Implementation:**
```yaml
# GitHub Actions workflow trigger
on:
  pull_request:
    types: [opened, synchronize]

jobs:
  architecture-review:
    runs-on: ubuntu-latest
    steps:
      - run: gh copilot @review-enforcer "Review PR ${{ github.event.pull_request.number }}"
```

**Outcome:**
- **30 minutes → 2 minutes** per PR for standards validation
- **100% consistent** application of architecture rules
- **Real-time reviews** (no waiting for architect availability)
- **20+ PRs daily** handled without scaling review team

---

### Use Case 3: Parallel Quality Enhancement (Post-Implementation)

**The Problem:**
- After implementing feature, need tests + documentation + refactoring—serial execution takes 8+ hours
- Test generation waits for documentation, documentation waits for refactoring—artificial dependencies

**The Solution:**
- Launch 3 background agents in parallel worktrees:
  - Testing agent: Generate 80%+ test coverage for new profile feature
  - Documentation agent: Write user guide and API reference for endpoints
  - Refactoring agent: Apply new error handling pattern to profile service

**Implementation:**
```bash
# After feature completion in main branch
1. Background agent 1: @test-generator → worktree-test → 85% coverage achieved
2. Background agent 2: @doc-writer → worktree-docs → API reference complete
3. Background agent 3: @refactor-specialist → worktree-refactor → Pattern applied

All three complete in 2 hours parallel time (vs. 6 hours serial)
```

**Outcome:**
- **8 hours serial → 2 hours parallel** (75% time reduction)
- **Test coverage: 60% manual → 85% agent** (25% improvement)
- **Zero active time spent** on quality enhancement (parallel while starting next feature)

---

## ✅ What You Can Do Today

**Immediate Actions (15 minutes):**
- [ ] Update to VS Code 1.109 to access session type picker and enhanced Agent Sessions view
- [ ] Review [Background Agents documentation](https://code.visualstudio.com/docs/copilot/agents/background-agents) to understand worktree isolation model
- [ ] Try creating a background agent session: Open Chat view (Ctrl+Alt+I) → Select "Background" from session type picker

**Short-Term Implementation (1-2 hours):**
- [ ] Start first parallel workflow: Plan 2 independent tasks in local session, hand both off to background agents
- [ ] Enable custom agents for background: Set `github.copilot.chat.cli.customAgents.enabled` to `true`
- [ ] Create first custom agent in `.github/agents/` for task you frequently delegate (test generation, documentation, code review)
- [ ] Monitor sessions using Agent Sessions view—filter by "Background Agents", observe progress without interrupting

**Advanced Exploration (1 week):**
- [ ] Implement 3-agent parallel pattern: Refactoring + Testing + Documentation after next feature completion
- [ ] Run experimental variants: Launch 2-3 background agents testing different architectural approaches, compare empirically
- [ ] Configure `git.worktreeIncludeFiles` to copy necessary git-ignored files (local config, build artifacts) to agent worktrees
- [ ] Measure ROI: Track active supervision time before/after adopting background agents (target: 50-70% reduction)

**Next Steps After Completion:**
1. ✅ Run 3-5 parallel background agents successfully for one sprint
2. 📊 Document time savings and present ROI to team/management
3. 📖 Review [Agent Teams](../agent-teams/) for specialized role patterns when parallel execution isn't sufficient
4. 🚀 Scale to cloud agents for large refactoring (100+ files) using [Cloud Agents](https://code.visualstudio.com/docs/copilot/agents/cloud-agents) guide

---

## Related Patterns

### Complementary Features

- **[Multi-Step Tasks](../multi-step-tasks/)** — When tasks have sequential dependencies (research → analysis → implementation)
- **[Agent Teams](../agent-teams/)** — When specialized roles must collaborate (planner → coder → reviewer hand-offs)
- **[Agentic SDLC](../agentic-sdlc/)** — When parallel execution hits organizational limits (cross-repo coordination, CI bottlenecks)

### Decision Flow

**If this talk doesn't fit your needs:**

```
Q: What's your actual constraint?
├─ Tasks have dependencies → See: Multi-Step Tasks
├─ Need specialized roles → See: Agent Teams
├─ Hitting repo/CI limits → See: Agentic SDLC
└─ Need interactive iteration → Don't use background agents (use local agents)
```

See [DECISION-GUIDE.md](../DECISION-GUIDE.md) for complete navigation help.

---

## 📚 Official Documentation

**Primary Documentation:**
- 📖 **[VS Code: Background Agents](https://code.visualstudio.com/docs/copilot/agents/background-agents)** — Autonomous agent execution with worktree isolation, core concepts and workflows
- 📖 **[Git Worktrees](https://git-scm.com/docs/git-worktree)** — Technical reference for worktree commands, architecture, and best practices
- 📖 **[VS Code 1.109 Release Notes](https://code.visualstudio.com/updates/v1_109#_agent-session-management)** — Latest session management features: picker, status indicator, multi-select operations

**Additional Resources:**
- 🎓 [VS Code: Cloud Agents](https://code.visualstudio.com/docs/copilot/agents/cloud-agents) — Large-scale operations on GitHub infrastructure
- 🔧 [Custom Agents Guide](https://code.visualstudio.com/docs/copilot/customization/custom-agents) — Create repository-defined agents for specialized tasks
- 💬 [Copilot CLI Manual](https://cli.github.com/manual/gh_copilot) — Command-line interface for background agent sessions

**GitHub Resources:**
- 🐙 [Agent Orchestration Examples](https://github.com/ShepAlderson/copilot-orchestra) — Community multi-agent systems with conductor patterns
- 📋 [GitHub Copilot Changelog](https://github.blog/changelog/label/copilot/) — Latest updates and capabilities

---

## 🎭 Behind the Scenes

*For those who want to understand the deeper mechanics*

### Why Worktrees Solve the Parallel Agent Problem

**Traditional approaches and their failures:**

1. **Single workspace, multiple agents:**
   - Problem: File collisions require continuous merge conflict resolution
   - Example: Agent A modifies `auth.ts` line 50 while Agent B modifies same line
   - Result: Manual intervention breaks autonomy

2. **Docker containers per agent:**
   - Problem: Full repository clone per container (resource intensive)
   - Example: 5 agents = 5 full clones, high disk/memory usage
   - Result: Doesn't scale beyond 2-3 agents on typical developer machine

3. **Git branches without worktrees:**
   - Problem: Switching branches affects entire workspace
   - Example: Can't review Agent A's work while Agent B continues
   - Result: Serial execution, not parallel

**Why worktrees succeed:**
- Lightweight: Share `.git/` objects, only working directory differs
- Native Git: No containerization overhead, works with existing tools
- Independent: Each worktree has own `HEAD`, index, working files
- Scalable: 10 worktrees use ~1.2x disk space of single clone, not 10x

### Auto-Commit Per Turn Design Decision

**VS Code 1.109 change:** Background agents now commit changes at end of each turn (previously used Keep/Undo UI actions)

**Why this matters:**
- **Alignment:** Session history matches Git commit history—easier to understand agent's progression
- **Rollback:** Use `git reset` to undo specific turns, not custom undo mechanism
- **Review:** `git log` in worktree shows agent's incremental progress, not monolithic final commit
- **Merge:** Cleaner integration—merge specific turns, not all-or-nothing

**Trade-off accepted:** Slightly noisier commit history in worktree (one commit per agent turn). Benefit: Standard Git workflows for review/rollback.

### Session Type Picker Implementation

**Design goal:** Seamless hand-off between local, background, cloud agents without losing context

**How it works:**
1. User plans in local session: Chat history, attached files, selected code ranges captured
2. User selects "Continue in Background" from session type picker
3. VS Code serializes full conversation context (messages, attachments, workspace state)
4. Background agent receives context via Copilot CLI programmatic mode (`-p` flag)
5. Agent continues conversation as if it was always in background mode

**Key insight:** Context serialization is bidirectional—can also hand off background → cloud or cloud → local. This enables "plan locally, implement in cloud, debug locally" workflows.
