# Agent Teams: Coordinating Specialized AI Roles for Complex Development

> **The Question This Talk Answers:**
> *"How do I coordinate multiple specialized agents to handle complex development tasks that exceed single-agent capacity?"*

**Duration:** 45 minutes | **Target Audience:** Developers / Architects / Engineering Managers

---

## 📊 Content Fitness

| Criterion | Assessment | Notes |
|-----------|-----------|-------|
| **Relevant** | 🟢 High | Complex development tasks require specialization—team patterns enable coordination without context pollution |
| **Compelling** | 🟢 High | Community-proven systems (Orchestra, Atlas) available today; working agent definitions you can deploy in < 1 hour |
| **Actionable** | 🟢 High | 4-agent conductor system deployable immediately; clear upgrade paths to larger teams |

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
10. **Community Systems** ← 🎬 Section 2 (3-4 slides)
11. **Building Your Team** ← 🎬 Section 3 (4-5 slides)
12. **Orchestration Patterns** ← 🎬 Section 4 (3-4 slides)
13. **Use Cases** ← Real-World Use Cases (1-2 slides)
14. **Actionable Outcomes** ← What You Can Do Today
15. **Related Patterns** ← Related Patterns
16. **Official Documentation** ← 📚 section
17. **End Slide** ← Auto-generated

### Major Sections (TOC Entries)

```markdown
<!-- 🎬 MAJOR SECTION: Core Architecture -->
<!-- 🎬 MAJOR SECTION: Community Systems -->
<!-- 🎬 MAJOR SECTION: Building Your Team -->
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

Agent team orchestration distributes complex development workflows across specialized AI agents, each optimized for a specific cognitive mode (planning, implementation, review, testing). A conductor agent coordinates the team, maintaining clean separation between phases while enabling parallel execution of independent tasks.

### Key Capabilities

- **Role-Based Specialization**: Each agent has dedicated tools, model selection, and instructions tuned for its domain—planners research, implementers code, reviewers validate
- **Context Isolation**: Subagents operate in separated context windows (70-80% reduction in main agent context), preventing information overflow and cross-contamination
- **Parallel Execution**: Independent agents run simultaneously (VS Code 1.109+), enabling 3-5x throughput on parallelizable work
- **Quality Checkpoints**: Dedicated review agents catch issues before they compound, with structured approval gates between phases

### Architecture Overview

The conductor pattern separates "what to do" (orchestration logic in the conductor) from "how to do it" (specialized execution in worker agents). The conductor never implements directly—it receives user requests, breaks them into phases, delegates to specialists, validates outputs, and aggregates results.

Each worker agent is intentionally constrained: planners have read-only tools and can't edit code; implementers have edit tools but can't access planning documentation; reviewers have analysis tools but can't modify files. These constraints prevent agents from mixing concerns and ensure clean phase boundaries.

Subagents run in isolated context windows, so research by the Explorer agent doesn't consume tokens from the Implementer's context. When agents complete, they return structured findings (not raw data), preserving the conductor's context for coordination, not storage.

**Official Documentation:**
- 📖 [Custom Agents in VS Code](https://code.visualstudio.com/docs/copilot/customization/custom-agents) — Agent structure, frontmatter configuration, and handoffs
- 📖 [Subagents](https://code.visualstudio.com/docs/copilot/agents/subagents) — Subagent invocation, parallel execution, and context isolation
- 📖 [VS Code 1.109 Release Notes](https://code.visualstudio.com/updates/v1_109#_agent-orchestration) — Agent orchestration features and invocation controls

---

## 📦 Key Artifacts

**This talk includes complete, working agent definitions from two community-proven systems** that you can adapt for your own multi-agent workflows.

### Primary Artifacts

*Shown inline with detailed explanation in the major sections*

- **[`conductor.agent.md`](#conductor-agent-definition)** — Orchestrates workflow phases, delegates to specialists, never implements directly
- **[`planner-subagent.agent.md`](#planner-subagent-definition)** — Creates implementation plans from research findings with read-only tools
- **[`implementer-subagent.agent.md`](#implementer-subagent-definition)** — Executes plans with TDD enforcement using edit/create tools
- **[`reviewer-subagent.agent.md`](#reviewer-subagent-definition)** — Validates implementation quality with analysis tools, returns structured feedback

### Supporting Files

*Referenced but not shown inline — available in community repositories*

- **[Copilot Orchestra](https://github.com/ShepAlderson/copilot-orchestra)** — Complete 4-agent system with ADR generation, TDD enforcement, phase tracking
- **[GitHub Copilot Atlas](https://github.com/bigguy345/Github-Copilot-Atlas)** — Extended 6-agent system with parallel research, context conservation focus, mythology-themed personas
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
| **Setup Time** | 4-6 hours (agent definitions) | 2-3 hours (phase configs) | 1-2 hours (branch setup) | 0 (built-in) |
| **Throughput** | 3-5x (parallel specialists) | 1.5-2x (phased execution) | 5-10x (branch parallelism) | 1x (baseline) |

---

<!-- 🎬 MAJOR SECTION: Core Architecture -->
## The Team Orchestration Pattern

*How conductor-delegate architecture enables specialized agents to collaborate without context pollution*

### The Core Architecture

```
┌─────────────────────────────────────────────────┐
│              USER / ENTRY POINT                 │
│         "Build user authentication system"      │
└─────────────────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────┐
│              CONDUCTOR AGENT                    │
│  • Interprets high-level request                │
│  • Breaks down into phases                      │
│  • Delegates to specialists (sequential/parallel)│
│  • Validates phase outputs                      │
│  • Aggregates and returns final results         │
│  • NEVER implements directly                    │
└─────────────────────────────────────────────────┘
         │           │           │
         ▼           ▼           ▼
    ┌─────────┐ ┌─────────┐ ┌─────────┐
    │ PLANNER │ │ CODER   │ │REVIEWER │
    │ Agent   │ │ Agent   │ │ Agent   │
    │         │ │         │ │         │
    │ • Read  │ │ • Edit  │ │ • Read  │
    │   only  │ │ • Create│ │ • Lint  │
    │ • Plan  │ │ • Delete│ │ • Analyze│
    └─────────┘ └─────────┘ └─────────┘
      Isolated     Isolated     Isolated
      Context      Context      Context
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

**Focused Context**: Each subagent receives only information relevant to its task. Explorer gets user request + codebase context. Planner gets exploration results. Implementer gets plan + affected files. Reviewer gets implementation + quality criteria. No agent carries accumulated context from previous phases.

**Right Tools, Right Time**: Planners with read-only tools can't accidentally edit during research. Implementers with edit tools can't waste time on investigative reading. Reviewers with analysis tools focus on validation, not modification. Tool constraints = role enforcement.

**Parallel When Possible**: VS Code 1.109+ supports parallel subagent execution. Independent tasks run simultaneously: Explorer researches auth patterns while Oracle researches database schemas. Security reviewer and performance reviewer analyze implementation in parallel. 3-5x throughput on parallelizable work.

**Quality Checkpoints**: Dedicated review agent validates each phase output against criteria before proceeding. Issues caught early cost minutes to fix; issues caught late cost hours. Structured review gates reduce rework by 40-60%.

**Specialization Advantage**: An agent tuned for planning (strategic thinking, architectural decisions) outperforms a generalist at planning by 20-30%. Same for implementation (execution focus, code generation) and review (critical analysis, quality assessment). Team of specialists beats single generalist.

### Tool Assignment Guidelines

| Agent Role | Appropriate Tools | Rationale |
|------------|-------------------|-----------|
| **Research / Discovery** | `search`, `fetch`, `usages`, `githubRepo` | Read-only exploration, no modification risk |
| **Planning / Strategy** | `search`, `fetch`, `create` (plan docs only) | Can document plans, can't implement |
| **Implementation** | `edit`, `create`, `delete`, `search` | Full editing power, focused on execution |
| **Review / Validation** | `search`, `fetch`, `analysis`, `linter` | Read + analyze, can't modify implementation |
| **Testing** | `search`, `create`, `runTests` | Create tests + verify execution |

---

<!-- 🎬 MAJOR SECTION: Community Systems -->
## Community-Proven Team Systems

*Two production-ready multi-agent systems you can deploy today*

### Copilot Orchestra: ADR-Driven Development Workflow

**Repository:** [github.com/ShepAlderson/copilot-orchestra](https://github.com/ShepAlderson/copilot-orchestra)

A complete 4-agent orchestration system focused on structured planning and TDD enforcement:

**Architecture:**

```
┌──────────────────────────────────────────────────┐
│                 CONDUCTOR                        │
│  "Build a REST API for user management"          │
│  - Breaks request into 3-10 phases               │
│  - Enforces TDD: write tests → see fail → code   │
│  - Tracks progress in plans/ directory           │
└──────────────────────────────────────────────────┘
        │              │              │
        ▼              ▼              ▼
┌──────────────┐ ┌──────────────┐ ┌──────────────┐
│   PLANNER    │ │ IMPLEMENTER  │ │   REVIEWER   │
│              │ │              │ │              │
│ • Researches │ │ • Follows    │ │ • Validates  │
│   codebase   │ │   plan steps │ │   vs. plan   │
│ • Creates    │ │ • TDD cycle  │ │ • Returns    │
│   ADR docs   │ │ • Git commit │ │   APPROVED/  │
│ • 3-10 phase │ │   per phase  │ │   REVISION   │
│   plan       │ │              │ │   /FAILED    │
└──────────────┘ └──────────────┘ └──────────────┘
```

**Key Features:**

- **ADR-Driven Planning**: Planner delegates to `planning-subagent` for research, generates Architecture Decision Records documenting choices
- **Strict TDD Enforcement**: Implementer (`implement-subagent`) must write failing tests, see them fail, write minimal code, verify pass—enforced in instructions
- **Validation Loops**: Reviewer can return `NEEDS_REVISION` → Conductor re-invokes Implementer with feedback
- **Human Checkpoints**: Mandatory stops for plan approval and phase commits—user stays in control
- **Progress Documentation**: Generates `plans/<task>-plan.md`, `plans/<task>-phase-N-complete.md`, `plans/<task>-complete.md` for audit trail

**Workflow Sequence:**

1. **Planning Phase**: User describes request → Conductor invokes `planning-subagent` → Subagent researches codebase → Returns findings → Conductor creates multi-phase plan → User reviews and approves
2. **Implementation Phases (per phase)**: Conductor invokes `implement-subagent` with phase objective → Subagent writes failing tests → Runs tests (fail) → Writes code → Runs tests (pass) → Returns summary
3. **Review Phase (per phase)**: Conductor invokes `code-review-subagent` → Subagent examines changes → Returns `APPROVED` / `NEEDS_REVISION` / `FAILED`
4. **Commit Phase (per phase)**: Conductor presents summary + commit message → User commits → Conductor proceeds to next phase
5. **Completion**: All phases done → Conductor generates completion report → User has fully tested, reviewed, committed feature

**Metrics from Community Use:**

| Metric | Before Orchestra | After | Improvement |
|--------|------------------|-------|-------------|
| Implementation quality | 70% first-pass | >90% first-pass | 28% improvement |
| Rework iterations | 3-5 per feature | 1-2 per feature | 60% reduction |
| Test coverage | 60% | >85% | TDD enforcement |
| Audit trail | None | Complete | Plan + phase docs |

### GitHub Copilot Atlas: Context-Conscious Multi-Agent System

**Repository:** [github.com/bigguy345/Github-Copilot-Atlas](https://github.com/bigguy345/Github-Copilot-Atlas)

An extended 6-agent system optimized for context conservation and parallel research:

**Agent Roster:**

| Agent | Cognitive Mode | Tools | Model | Specialty |
|-------|---------------|-------|-------|-----------|
| **Atlas** | Orchestrator | `agent` (delegates only) | Claude Sonnet 4.5 | Coordinates full lifecycle |
| **Prometheus** | Strategic Planner | `agent`, `search`, `fetch` | GPT-5.2 High | Requirements analysis, plan creation |
| **Oracle** | Researcher | `agent`, `search`, `fetch` | GPT-5.2 | Knowledge gathering, can delegate to Explorer |
| **Sisyphus** | Implementer | `edit`, `create`, `runTests` | Claude Sonnet 4.5 | Persistent TDD-driven coding |
| **Explorer** | Scout | `search`, `fetch`, `usages` | Gemini 3 Flash | Rapid file discovery (read-only) |
| **Code-Review** | Validator | `search`, `fetch`, `analysis` | GPT-5.2 | Quality + coverage assessment |

**Architecture:**

```
User Request
     │
     ▼
┌─────────────┐
│    ATLAS    │ ← Orchestrator (never implements)
└─────────────┘
     │
     ├─→ Prometheus (plan) ─→ [Oracle + Explorer in parallel] → Plan with context
     │
     ├─→ Sisyphus (implement) → TDD cycle → Changes
     │
     └─→ Code-Review (validate) → APPROVED/REVISION/FAILED
```

**Key Innovation — Context Conservation:**

Traditional single-agent: 80-90% context consumed by research → 10-20% left for implementation
Atlas system: Each subagent runs in isolated context → Main agent retains 70-80% context for coordination

Quantified savings:
- Oracle researches 50+ files, returns 2-page summary → Main agent sees summary only
- Explorer discovers 30+ files in parallel searches → Returns file list + brief analysis
- Sisyphus implements 500 LOC → Main agent sees "Phase 1 complete" status
- Code-Review analyzes changes → Returns structured APPROVED/findings

**Additional Features:**

- **Parallel Research**: Oracle can launch 3-10 parallel Explorer searches in first batch
- **Iterative Refinement**: Sisyphus loops on implementation until quality threshold met (can be invoked multiple times with feedback)
- **Handoff from Prometheus to Atlas**: Prometheus can auto-invoke Atlas after plan creation (optional `send: true` in handoff)

**When to Use Each System:**

- **Use Copilot Orchestra when**: You need structured ADR documentation, strict TDD enforcement, or audit trail for compliance
- **Use GitHub Copilot Atlas when**: Context window is constraining, you need parallel research, or you want mythology-themed personas

Both systems provide complete, working agent definitions you can adapt for your needs.

---

<!-- 🎬 MAJOR SECTION: Building Your Team -->
## Building Your Own Agent Team

*Step-by-step guide to creating a 4-agent conductor system from scratch*

### Step 1: Define Workflow Phases

Identify distinct cognitive modes in your development process:

| Phase | Cognitive Mode | Example Activities | Tools Needed |
|-------|----------------|-------------------|--------------|
| **Discovery** | Exploration | File discovery, pattern identification, architecture analysis | `search`, `fetch`, `usages` |
| **Planning** | Strategic Thinking | Requirements breakdown, task sequencing, risk assessment | `search`, `fetch`, `create` |
| **Implementation** | Execution Focus | Code generation, test writing, file modifications | `edit`, `create`, `delete` |
| **Review** | Critical Analysis | Quality validation, security check, coverage assessment | `search`, `fetch`, `analysis` |
| **Testing** | Verification | Test creation, execution, result interpretation | `create`, `runTests` |
| **Documentation** | Communication | README updates, API docs, architecture diagrams | `create`, `edit` |

**Start with 3-4 phases** (Discovery → Planning → Implementation → Review). Add more as you validate the pattern.

### Step 2: Create the Conductor Agent

The conductor is user-invokable only—it never implements directly:

```yaml
# .github/agents/conductor.agent.md
---
name: Conductor
description: Orchestrates development workflow
user-invokable: true
disable-model-invocation: true  # Only users can start
tools: ['agent']  # Required for subagent delegation
agents:
  allow: ['explorer', 'planner', 'implementer', 'reviewer']
model:
  - Claude Opus 4.5
  - Claude Sonnet 4
handoffs:
  - label: Start Discovery
    agent: explorer
    prompt: Analyze the codebase for relevant structures
    send: false
---

# Conductor: Multi-Phase Workflow Orchestrator

You orchestrate complex development workflows by delegating to specialist agents.
You NEVER implement directly—you coordinate.

## Your Role
- Receive user requests and clarify requirements
- Break work into distinct phases (Discovery → Planning → Implementation → Review)
- Delegate each phase to the appropriate specialist agent
- Validate phase outputs before proceeding
- Aggregate results and present final summary

## Delegation Strategy
1. **Discovery**: Use @explorer for codebase analysis
2. **Planning**: Use @planner to create implementation plan from findings
3. **Implementation**: Use @implementer to execute the plan
4. **Review**: Use @reviewer to validate against plan + quality standards

## Parallel Execution (VS Code 1.109+)
When tasks are independent, invoke multiple agents simultaneously:
- "In parallel: @explorer analyze auth patterns, @explorer analyze data models"
- "In parallel: @reviewer check security, @reviewer check performance"

## Constraints
- NEVER edit files yourself
- NEVER execute implementation directly
- Always validate subagent outputs before next phase
- Include context from previous phases in next delegation
- Ask user for approval between major phase transitions
```

### Step 3: Create Specialist Worker Agents

**Planner Subagent:**

```yaml
# .github/agents/planner.agent.md
---
name: Planner
description: Creates detailed implementation plans from research findings
user-invokable: false
tools: ['search', 'fetch', 'create']
model: Claude Opus 4.5
---

# Planner: Strategic Implementation Planning

You create structured implementation plans based on codebase findings.

## Your Outputs
Generate plans in this format:

IMPLEMENTATION PLAN: [Feature Name]

Context:
- Relevant files identified by Explorer
- Existing patterns to follow
- Dependencies to consider

Phases: (3-10 phases, each completable in 1-3 hours)
1. Phase Name
   - Files to modify
   - Changes required
   - Tests to write
   - Risks

Success Criteria:
- Specific validation points
- Expected test outcomes
- Performance/security requirements

## Constraints
- Planning only—no implementation
- Reference Explorer findings explicitly
- Be specific: exact file paths, function names
- Each phase should compile/test independently
```

**Implementer Subagent:**

```yaml
# .github/agents/implementer.agent.md
---
name: Implementer
description: Executes implementation plans with TDD enforcement
user-invokable: false
tools: ['edit', 'create', 'delete', 'search', 'runTests']
model: Claude Sonnet 4
---

# Implementer: Plan Execution Specialist

You execute implementation plans created by Planner.

## Your Process
1. Read the plan phase carefully
2. Write failing tests first (TDD)
3. Run tests to verify failure
4. Implement minimal code to pass tests
5. Run tests to verify pass
6. Report completion with file changes

## Quality Standards
- Follow existing code style and patterns
- Keep functions focused and single-purpose
- Add error handling for edge cases
- Use descriptive variable/function names
- Make atomic commits per logical change

## Constraints
- Execute plan exactly as specified
- Don't add unrequested features
- Don't skip test-first approach
- Report blockers immediately (missing dependencies, ambiguous requirements)
```

**Reviewer Subagent:**

```yaml
# .github/agents/reviewer.agent.md
---
name: Reviewer
description: Validates implementation quality against plan and standards
user-invokable: false
tools: ['search', 'fetch', 'analysis', 'linter', 'runTests']
model: Claude Sonnet 4
---

# Reviewer: Quality Validation Specialist

You validate implementations against the original plan and quality standards.

## Review Checklist
1. **Plan Adherence**: Does implementation match plan objectives?
2. **Code Quality**: Clean, readable, follows project patterns?
3. **Test Coverage**: All new code covered by tests?
4. **Error Handling**: Edge cases handled appropriately?
5. **Security**: No hardcoded secrets, SQL injection, XSS vulnerabilities?
6. **Performance**: No obvious inefficiencies (N+1 queries, O(n²) algorithms)?

## Return Structure
STATUS: [APPROVED | NEEDS_REVISION | FAILED]

FINDINGS:
- [Critical issues that block approval]
- [Suggestions for improvement]
- [Praise for good practices]

DECISION RATIONALE:
- [Why this status was chosen]

## Status Meanings
- APPROVED: Ready to proceed, meets all criteria
- NEEDS_REVISION: Fixable issues, specific feedback provided
- FAILED: Fundamental problems, may need re-planning
```

### Step 4: Test Your Agents Individually

Before orchestration, verify each specialist works correctly:

```bash
# Explorer test
@explorer Analyze authentication patterns in src/auth/

# Planner test
@planner Create plan for adding OAuth support based on [Explorer findings]]

# Implementer test
@implementer Execute Phase 1 of the OAuth plan

# Reviewer test
@reviewer Validate the OAuth implementation against plan criteria
```

### Step 5: Enable Parallel Execution (VS Code 1.109+)

Update conductor instructions to use parallel invocation:

```yaml
## Parallel Execution Patterns

# Research multiple subsystems simultaneously
"In parallel: @explorer analyze src/auth/, @explorer analyze src/database/"

# Review multiple aspects independently
"In parallel: @reviewer check security, @reviewer check performance"

# Maximum 10 parallel agents per phase
```

### Advanced Configuration

**Agent Restrictions** — Control which agents can invoke which:

```yaml
# Conductor with explicit allow list
agents:
  allow: ['explorer', 'planner', 'implementer', 'reviewer']

# Worker that can only hand off to conductor
agents:
  allow: ['conductor']  # Only reports back

# Block dangerous agents
agents:
  deny: ['production-deploy', 'database-admin']
```

**Model Fallback** — Ensure availability across models:

```yaml
model:
  - Claude Opus 4.5     # Preferred for complex reasoning
  - Claude Sonnet 4     # Fallback
  - GPT-5               # Final fallback
```

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

### Use Case 1: OAuth Provider Integration

**The Problem:** Adding a new OAuth provider (Microsoft) to an existing auth system required researching existing providers (Google, GitHub), understanding token refresh patterns, planning database schema changes, implementing the integration, and validating security. Developer estimated 12 hours; actual time was 18 hours with 3 rounds of rework.

**The Solution:** Conductor agent orchestrates 4-phase workflow:
1. Explorer researches existing OAuth implementations (Google, GitHub) → identifies common patterns
2. Planner creates 5-phase plan based on findings → includes token refresh edge cases from history
3. Implementer executes plan → TDD cycle for each phase
4. Reviewer validates security, token handling, error cases → catches race condition in token refresh

**Outcome:**
- Planning time: 4 hours → 30 minutes (research + plan generation)
- Implementation time: 10 hours → 6 hours (TDD + structured plan)
- Rework iterations: 3 → 1 (reviewer caught race condition before commit)
- Total: 18 hours → 7 hours (61% time savings)
- Quality: 0 production incidents vs. 1 in previous OAuth integration

---

### Use Case 2: API Redesign for Performance

**The Problem:** Legacy API had N+1 query problems causing 3-5 second response times. Needed comprehensive analysis of 15 endpoints, performance profiling, redesign plan, implementation, and validation. Cross-cutting concern: changes affected multiple subsystems (API layer, data access, caching).

**The Solution:** Parallel Specialists pattern with 3 reviewers:

1. Explorer identifies all endpoint implementations → 15 files
2. Planner creates phased optimization plan → Groups related endpoints
3. Implementer executes optimizations → Query batching, caching layer
4. **Parallel Validation:**
   - Performance Reviewer → Validates query counts, response times
   - Security Reviewer → Ensures caching doesn't leak data
   - Code Quality Reviewer → Validates maintainability

**Outcome:**
- Analysis time: 6 hours → 2 hours (automated pattern detection)
- Validation time: 8 hours (serial) → 3 hours (parallel)
- Response times: 3-5s → 200-400ms (90% improvement)
- Coverage: 15/15 endpoints optimized vs. 9/15 in previous manual attempt
- Security incidents: 0 (caching reviewer caught potential user data leak)

---

### Use Case 3: Compliance Documentation Generation

**The Problem:** Required security compliance audit docs for 20 backend services. Each service needed: architecture diagram, data flow documentation, security controls inventory, and test coverage report. Manual process: 2 hours per service × 20 = 40 hours.

**The Solution:** Hierarchical Orchestration with domain-specific sub-conductors:

1. Master Conductor delegates per-service documentation to Service Conductors
2. Each Service Conductor coordinates 4 specialists:
   - Architecture Analyzer
   - Security Controls Auditor
   - Test Coverage Reporter
   - Documentation Writer

**Outcome:**
- Total time: 40 hours → 12 hours (70% reduction)
- Consistency: 100% (same format across all services vs. 60% in manual approach)
- Coverage gaps identified: 23 (automated test reviewer vs. 8 found manually)
- Audit result: Pass first attempt (previous audit required 2 remediation rounds)
- Reusability: Templates generated, future audits < 4 hours

---

## ✅ What You Can Do Today

**Immediate Actions (15 minutes):**
- [ ] Review the 4-agent conductor system definition in [Building Your Team](#building-your-own-agent-team)
- [ ] Choose a community system to explore: [Copilot Orchestra](https://github.com/ShepAlderson/copilot-orchestra) or [GitHub Copilot Atlas](https://github.com/bigguy345/Github-Copilot-Atlas)
- [ ] Identify one complex task in your backlog that requires 3+ cognitive modes (planning, coding, reviewing)

**Short-Term Implementation (2-4 hours):**
- [ ] Create `.github/agents/` directory in your workspace
- [ ] Implement the Conductor agent definition from Step 2 above
- [ ] Create 2-3 specialist agents (Planner, Implementer, Reviewer minimum)
- [ ] Test each agent individually with isolated prompts before orchestrating
- [ ] Run your first orchestrated workflow on a small feature

**Advanced Exploration (1-2 weeks):**
- []] Deploy Copilot Orchestra or Atlas system in your repo
- [ ] Customize agent models based on your budget (Opus for planning, Sonnet for implementation, Haiku for simple reviews)
- [Add domain-specific specialists (Security Reviewer, Performance Analyzer, Documentation Writer)
- [ ] Measure before/after metrics: implementation time, rework iterations, test coverage, defect density
- [ ] Monitor for graduation signals (>50% tasks orchestrated, coordination overhead exceeds benefits)

**Next Steps After Completion:**
1. ✅ Complete 4-agent conductor deployment and validate on 3-5 tasks
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

**Additional Resources:**
- 🎓 [Chat Sessions](https://code.visualstudio.com/docs/copilot/chat/chat-sessions) — Managing context windows and agent sessions
- 🔧 [Agent Invocation Controls](https://code.visualstudio.com/updates/v1_109#_control-how-custom-agents-are-invoked) — `user-invokable`, `disable-model-invocation`, `agents` field
- 💬 [VS Code Discussions - Agent Teams](https://github.com/microsoft/vscode-discussions/discussions) — Community questions and patterns

**Community Resources:**
- 🐙 [Copilot Orchestra Repository](https://github.com/ShepAlderson/copilot-orchestra) — Complete 4-agent system with ADR generation, TDD enforcement
- 🐙 [GitHub Copilot Atlas Repository](https://github.com/bigguy345/Github-Copilot-Atlas) — Extended 6-agent system with parallel research, context conservation
- 📋 [VS Code Agent Orchestration Diagram](https://github.com/ShepAlderson/copilot-orchestra/blob/main/docs/orchestration-diagram.png) — Visual reference from Orchestra author

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

**Agent Teams (Orchestration):**
```
Conductor context: 200K tokens
Delegation overhead: 20K (10%) - Coordinating phases
Available for aggregation: 180K (90%)

Each subagent: Fresh 200K context
Explorer: 200K fully focused on codebase analysis
Planner: 200K fully focused on strategic planning
Implementer: 200K fully focused on code generation
Reviewer: 200K fully focused on quality validation
↓
Output quality per agent: 90-95% (no context pollution)
Total system tokens: 800K (4 agents × 200K)
Effective utilization: 85-90% vs. 40% for single agent
```

**ROI: 70-80% context savings in conductor + 4x parallel specialist capacity**

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
