# Agent Teams: When You Need Specialized Roles

Coordinate specialized agents like planners, reviewers, and testers working together

---

## 🤔 When to Use This Pattern

**Use agent teams when:**
- Different parts of your workflow need different expertise (planning vs. coding vs. reviewing)
- You want to enforce separation of concerns (prevent planners from implementing, coders from over-planning)
- You need quality checkpoints (dedicated review agent validates implementation)
- You're simulating how human teams work (architect, developer, QA)

**Don't use agent teams when:**
- Your task is simple phased work without role specialization (see [multi-step-tasks](../multi-step-tasks/))
- You need agents working on different branches simultaneously (see [parallel-execution](../parallel-execution/))
- The work can be done by one agent with Plan Mode (simplest option)

### Quick Decision Guide

```
Q: Does your task need multiple specialized roles?
├─ No →
│   Q: Does it need research → analysis → implementation phases?
│   ├─ Yes → Use multi-step-tasks/ pattern
│   └─ No → Use single agent in Plan Mode
└─ Yes → 👉 Use agent-teams (you are here)

    Examples of specialized roles:
    - Planner (strategic) vs. Implementer (tactical)
    - Coder (builds) vs. Reviewer (validates)
    - Security (vulnerabilities) vs. Testing (coverage)
```

---

## The Single-Agent Ceiling

### Key Points

- **Complex tasks exceed single-agent capacity**
  Real development requires planning, implementation, review, testing—different cognitive modes

- **Context pollution degrades quality**
  One agent juggling planning and coding loses focus, mixes concerns

- **Tool overload creates confusion**
  An agent with all tools may use the wrong one for the current phase

- **No specialization, no expertise**
  General-purpose agents can't match specialists in any specific domain

### Narrative

Single agents hit a ceiling. They can plan OR implement well—rarely both in the same session. As context accumulates, quality degrades. Instructions for one phase contaminate another. Tools available for implementation get misused during planning. The solution isn't a smarter single agent—it's coordinated specialists. An orchestration layer delegates work, specialists execute within their domains, and the system outperforms any individual agent. This is how human teams work. Now AI teams can work the same way.

---

## The Team Orchestration Pattern

### Core Architecture

```
┌─────────────────────────────────────────────────┐
│              USER / ENTRY POINT                 │
│         "Build a user authentication system"   │
└─────────────────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────┐
│              CONDUCTOR AGENT                    │
│  • Interprets high-level request                │
│  • Breaks down into phases                      │
│  • Delegates to specialists                     │
│  • Aggregates and validates results             │
│  • Manages workflow state                       │
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
```

### Key Principles

| Principle | Description |
|-----------|-------------|
| **Single responsibility** | Each agent does one thing excellently |
| **Minimal tools** | Agents only have tools for their role |
| **Clear boundaries** | Handoffs define when work transfers |
| **Context isolation** | Each agent gets fresh, focused context |
| **Conductor authority** | One agent coordinates, others execute |

### Why This Works

- **Focused context** — Each agent receives only relevant information
- **Right tools** — Planners can't accidentally edit; coders can't over-plan
- **Parallel execution** — Independent roles can work simultaneously
- **Quality checkpoints** — Review agents catch issues before they compound
- **Specialization** — Agents can be tuned for their specific domain

---

## Community Team Systems

### Copilot Orchestra

**Repository:** [github.com/ShepAlderson/copilot-orchestra](https://github.com/ShepAlderson/copilot-orchestra)

A complete development workflow orchestration system:

```
┌──────────────────────────────────────────────────┐
│                 CONDUCTOR                        │
│  "Build a REST API for user management"          │
└──────────────────────────────────────────────────┘
                       │
        ┌──────────────┼──────────────┐
        ▼              ▼              ▼
┌──────────────┐ ┌──────────────┐ ┌──────────────┐
│   PLANNER    │ │ IMPLEMENTER  │ │   REVIEWER   │
│              │ │              │ │              │
│ Creates ADR  │ │ Executes plan│ │ Validates    │
│ structures   │ │ step by step │ │ against plan │
└──────────────┘ └──────────────┘ └──────────────┘
```

**Key features:**
- **ADR-driven planning** — Generates Architecture Decision Records
- **Step-by-step execution** — Implements plan systematically
- **Validation loops** — Reviewer can reject back to implementer
- **Human checkpoints** — User approval between phases

**Agent definitions:**
```yaml
# conductor.agent.md
---
name: Conductor
description: Orchestrates development workflow
user-invokable: true
agents:
  allow: ['planner', 'implementer', 'reviewer']
model: Claude Opus 4.5
handoffs:
  - label: Start Planning
    agent: planner
    prompt: Create an implementation plan for the user's request
---

You orchestrate the development workflow. Break requests into phases:
1. Planning - Delegate to @planner for ADR and implementation plan
2. Implementation - Delegate to @implementer to execute the plan
3. Review - Delegate to @reviewer to validate the implementation

Never implement directly. Always delegate to specialists.
```

---

### GitHub Copilot Atlas

**Repository:** [github.com/bigguy345/Github-Copilot-Atlas](https://github.com/bigguy345/Github-Copilot-Atlas)

A mythology-themed multi-persona system with distinct roles:

| Agent | Role | Specialty |
|-------|------|-----------|
| **Prometheus** | Strategic Planner | Requirements analysis, architecture decisions |
| **Oracle** | Researcher | Knowledge gathering, documentation review |
| **Sisyphus** | Implementer | Persistent implementation work, iterative refinement |
| **Explorer** | Navigator | Codebase discovery, pattern identification |

**Workflow pattern:**
```
User Request
     │
     ▼
┌─────────────┐
│ PROMETHEUS  │ ← Strategic planning
│ (Planner)   │   "What should we build?"
└─────────────┘
     │
     ▼
┌─────────────┐
│   ORACLE    │ ← Research phase
│ (Researcher)│   "What do we need to know?"
└─────────────┘
     │
     ▼
┌─────────────┐
│  SISYPHUS   │ ← Implementation
│(Implementer)│   "Build it iteratively"
└─────────────┘
     │
     ▼
┌─────────────┐
│  EXPLORER   │ ← Validation
│ (Navigator) │   "Verify integration"
└─────────────┘
```

**Key innovation:**
- **Persona-based specialization** — Each agent has distinct "personality"
- **Iterative refinement** — Sisyphus loops until quality threshold met
- **Cross-validation** — Explorer verifies Sisyphus's work integrates correctly

---

## Building Your Own Agent Team

### Step 1: Define the Workflow Phases

Identify distinct cognitive modes in your development process:

| Phase | Cognitive Mode | Example Activities |
|-------|----------------|-------------------|
| **Discovery** | Exploration | Reading code, finding patterns |
| **Planning** | Strategic | Architecture decisions, task breakdown |
| **Implementation** | Execution | Writing code, making changes |
| **Review** | Critical | Finding issues, validating quality |
| **Testing** | Verification | Writing tests, running checks |
| **Documentation** | Communication | Writing docs, explaining decisions |

### Step 2: Design Agent Boundaries

For each phase, define:

```yaml
# Example: Discovery Agent
---
name: Explorer
description: Discovers patterns and structures in codebase
user-invokable: false    # Only conductor invokes
tools: ['search', 'fetch', 'usages', 'githubRepo']  # Read-only
model: Claude Sonnet 4   # Good at pattern recognition
---
```

**Tool assignment guidelines:**

| Agent Type | Appropriate Tools |
|------------|-------------------|
| Research/Discovery | `search`, `fetch`, `usages`, `githubRepo` |
| Planning | `search`, `fetch`, `create` (for plan docs only) |
| Implementation | `edit`, `create`, `delete`, `search` |
| Review | `search`, `fetch`, `analysis`, `linter` |
| Testing | `search`, `create`, `run_tests` |

### Step 3: Create the Conductor

The conductor is the only user-invokable agent:

```yaml
# .github/agents/conductor.agent.md
---
name: Conductor
description: Orchestrates development workflow
user-invokable: true
disable-model-invocation: true  # Only users start workflows
agents:
  allow: ['explorer', 'planner', 'implementer', 'reviewer', 'tester']
model:
  - Claude Opus 4.5
  - Claude Sonnet 4
handoffs:
  - label: Start Workflow
    agent: explorer
    prompt: Analyze the codebase for this request
    send: false
---

# Conductor Instructions

You orchestrate multi-phase development workflows. You NEVER implement directly.

## Your Role
- Receive user requests
- Break them into phases
- Delegate to specialist agents
- Validate phase completion
- Aggregate final results

## Workflow Phases
1. **Discovery** → @explorer analyzes relevant codebase areas
2. **Planning** → @planner creates implementation plan
3. **Implementation** → @implementer executes the plan
4. **Review** → @reviewer validates the implementation
5. **Testing** → @tester adds/updates tests

## Delegation Rules
- One agent at a time for sequential phases
- Multiple agents in parallel for independent work
- Always include context from previous phases
- Validate each phase output before proceeding
```

### Step 4: Define Worker Agents

Each worker agent is specialized and constrained:

```yaml
# .github/agents/explorer.agent.md
---
name: Explorer
description: Analyzes codebase structure and patterns
user-invokable: false
tools: ['search', 'fetch', 'usages', 'githubRepo']
model: Claude Sonnet 4
---

# Explorer Instructions

You analyze codebases to support planning and implementation.

## Your Outputs
- Relevant file locations
- Code patterns in use
- Architectural structures
- Integration points

## Constraints
- Read-only operations
- No implementation suggestions
- Focus on facts, not opinions
- Report findings, don't plan
```

```yaml
# .github/agents/planner.agent.md
---
name: Planner
description: Creates detailed implementation plans
user-invokable: false
tools: ['search', 'fetch', 'create']  # Can create plan docs
model: Claude Opus 4.5  # Best for complex reasoning
---

# Planner Instructions

You create detailed implementation plans based on discovery findings.

## Your Outputs
- Step-by-step implementation plan
- File change specifications
- Dependency analysis
- Risk assessment

## Constraints
- Planning only, no implementation
- Reference explorer findings
- Be specific about file paths
- Include validation criteria
```

```yaml
# .github/agents/implementer.agent.md
---
name: Implementer
description: Executes implementation plans
user-invokable: false
tools: ['edit', 'create', 'delete', 'search', 'fetch']
model: Claude Sonnet 4  # Good balance of speed and quality
---

# Implementer Instructions

You execute implementation plans created by the planner.

## Your Process
1. Read the plan carefully
2. Execute each step in order
3. Verify each change compiles/runs
4. Report completion status

## Constraints
- Follow the plan exactly
- Don't add unrequested features
- Don't skip steps
- Report any blockers immediately
```

### Step 5: Enable Parallel Execution

VS Code 1.109 supports parallel subagent execution:

```yaml
# In conductor instructions
## Parallel Phases
When phases are independent, invoke multiple subagents simultaneously:

Example: Explorer and Oracle can research different aspects in parallel
Example: Reviewer and Tester can work independently after implementation

Use parallel invocation syntax:
"In parallel: @explorer analyze the auth module, @oracle research JWT best practices"
```

---

## Team Orchestration Patterns

### Pattern 1: Linear Pipeline

Simple sequential workflow:

```
Discovery → Planning → Implementation → Review → Testing
```

**Best for:**
- Well-defined features
- Single-track development
- Clear phase boundaries

### Pattern 2: Iterative Refinement

Loop until quality threshold:

```
     ┌──────────────────────────────────┐
     │                                  │
     ▼                                  │
Implementation → Review → [Issues?] ───┘
                            │
                            ▼ (No issues)
                         Testing
```

**Best for:**
- Quality-critical code
- Complex implementations
- Learning from feedback

### Pattern 3: Parallel Specialists

Independent roles work simultaneously:

```
                    ┌→ Security Review ─┐
                    │                   │
Discovery → Plan ──┼→ Performance Opt ─┼→ Integration
                    │                   │
                    └→ Documentation ───┘
```

**Best for:**
- Large features
- Cross-cutting concerns
- Maximizing throughput

### Pattern 4: Hierarchical Orchestration

Conductors managing sub-conductors:

```
Master Conductor
     │
     ├→ Frontend Conductor
     │      ├→ Component Builder
     │      └→ Style Agent
     │
     └→ Backend Conductor
            ├→ API Designer
            └→ Database Agent
```

**Best for:**
- Full-stack features
- Large team simulations
- Domain separation

---

## VS Code 1.109 Team Features

### Invocation Controls

New frontmatter fields enable proper orchestration:

```yaml
# Worker agents: subagent-only
user-invokable: false       # Hidden from user dropdown
disable-model-invocation: false  # Conductor CAN invoke

# Conductor: user-only
user-invokable: true        # Visible in dropdown
disable-model-invocation: true  # Can't be a subagent

# Dangerous operations: explicit user approval
user-invokable: true
disable-model-invocation: true
# User must explicitly choose this agent
```

### Agent Restrictions

Control which agents can invoke which:

```yaml
# Conductor with explicit allow list
agents:
  allow: ['explorer', 'planner', 'implementer', 'reviewer']

# Worker that can only hand off to specific agents
agents:
  allow: ['conductor']  # Only reports back to conductor

# Block specific agents
agents:
  deny: ['dangerous-ops', 'production-deploy']
```

### Model Fallback

Ensure agents work across availability:

```yaml
model:
  - Claude Opus 4.5     # Preferred for complex reasoning
  - Claude Sonnet 4     # Fallback
  - GPT-5               # Final fallback
```

---

## Best Practices

### Conductor Design

1. **Never implement directly** — Conductors delegate, never execute
2. **Clear phase definitions** — Each phase has explicit entry/exit criteria
3. **Validation between phases** — Check output before proceeding
4. **Human checkpoints** — Allow user approval at key transitions
5. **Aggregate intelligently** — Combine outputs into coherent result

### Worker Design

1. **Single responsibility** — One cognitive mode per agent
2. **Minimal tools** — Only what's needed for the role
3. **Clear constraints** — Explicit about what agent should NOT do
4. **Structured outputs** — Consistent format for conductor consumption
5. **Report status** — Clear completion/blocker signals

### Team Design

1. **Start simple** — 3-4 agents before adding complexity
2. **Test each agent independently** — Verify before orchestration
3. **Define handoff contracts** — What each phase receives/produces
4. **Plan for failures** — How to recover from phase failures
5. **Iterate based on usage** — Refine based on real patterns

---

## Debugging Agent Teams

### Common Issues

| Issue | Symptom | Solution |
|-------|---------|----------|
| Wrong agent invoked | Unexpected behavior | Check `agents.allow` restrictions |
| Phase skipped | Incomplete work | Verify handoff prompts |
| Context lost | Agent doesn't know previous work | Pass phase outputs explicitly |
| Infinite loop | Never completes | Add iteration limits, exit criteria |
| Quality degradation | Late phases worse | Reduce context accumulation |

### Diagnostics

Use Chat Diagnostics to verify:
- Which agents were invoked
- What context each received
- Tool usage per agent
- Handoff execution

---

## Key Takeaways

### 🎯 Team Orchestration Beats Single Agents
Specialists outperform generalists when coordinated properly

### 🎭 Role Separation Prevents Context Pollution
Each agent focuses on one cognitive mode without distraction

### 🔧 Tool Constraints Enforce Specialization
Read-only for research, edit for implementation, analysis for review

### ⚡ Parallel Execution Multiplies Throughput
Independent roles can work simultaneously when properly designed

### 🛡️ Quality Checkpoints Catch Issues Early
Dedicated review agents validate before issues compound

---

## Related Patterns

- **Need task decomposition?** → See [multi-step-tasks](../multi-step-tasks/) for research/analysis phases
- **Need parallel branches?** → See [parallel-execution](../parallel-execution/) for worktree-based execution
- **Building custom agents?** → See [workshop/06-custom-agents](../../workshop/06-custom-agents/)

---

## Resources

**Community Projects:**
- [Copilot Orchestra](https://github.com/ShepAlderson/copilot-orchestra) — Complete development workflow orchestration
- [GitHub Copilot Atlas](https://github.com/bigguy345/Github-Copilot-Atlas) — Multi-persona agent system

**Official Documentation:**
- [Custom Agents](https://code.visualstudio.com/docs/copilot/customization/custom-agents) — Agent structure and configuration
- [Chat Sessions](https://code.visualstudio.com/docs/copilot/chat/chat-sessions) — Subagent and session management
- [Agentic Mode](https://code.visualstudio.com/docs/copilot/chat/agentic-mode) — Agent execution environment

**VS Code 1.109 Release Notes:**
- [Parallel Subagents](https://code.visualstudio.com/updates/v1_109#_parallel-subagents) — Simultaneous agent execution
- [Invocation Controls](https://code.visualstudio.com/updates/v1_109#_agent-invocation-controls) — New frontmatter fields
