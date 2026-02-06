# Parallel Execution: When Agents Work Simultaneously

Run multiple agents on different branches without conflicts using Git worktree isolation

---

## 🤔 When to Use This Pattern

**Use parallel execution when:**
- You have multiple independent tasks that can run simultaneously
- You want to test different architectural approaches side-by-side
- You need agents working on different features without blocking each other
- You want autonomous execution without supervision overhead

**Don't use parallel execution when:**
- Tasks have dependencies and must run sequentially
- You just need task decomposition with context isolation (see [multi-step-tasks](../multi-step-tasks/))
- You need specialized roles working hand-in-hand (see [agent-teams](../agent-teams/))
- Tasks are simple enough for single agent execution

### Quick Decision Guide

```
Q: Can your work happen in parallel without conflicts?
├─ No →
│   Q: Do different parts need specialized roles?
│   ├─ Yes → Use agent-teams/ pattern
│   └─ No → Use multi-step-tasks/ pattern
└─ Yes → 👉 Use parallel-execution (you are here)

    Examples of parallel work:
    - Feature A, Feature B, Feature C (independent)
    - GraphQL approach vs. REST approach (experiments)
    - Refactor + Tests + Docs (non-conflicting)
```

---

## The Supervision Bottleneck

### Key Points

- **Interactive agents require constant supervision**
  Traditional AI workflows depend on continuous human guidance and feedback

- **Context switching destroys productivity**
  Every agent question interrupts flow, requiring mental context reload

- **Serial execution limits parallelism**
  Can't start next task while monitoring current agent progress

- **Supervision scales linearly with tasks**
  Two agents require twice the supervision overhead

### Narrative

Modern development tools provide powerful AI agents, but most operate interactively—requiring constant supervision. When an agent implements a feature, developers must remain engaged: answering clarification questions, approving approaches, monitoring progress. This creates a fundamental bottleneck: human attention becomes the limiting factor in AI-accelerated workflows. You cannot parallelize work because supervision doesn't scale. Starting a second task means abandoning the first agent or constant context switching. The productivity ceiling hits when supervision overhead exceeds implementation gains.

---

## Background Agents: Autonomous Execution

### Key Points

- **Complete autonomy from planning through delivery**
  Agents execute entire workflows without human intervention

- **Git worktree isolation**
  Independent working directories prevent conflicts with active development

- **Hand-off workflow pattern**
  Interactive planning transitions seamlessly to autonomous execution

- **Session management interface**
  Monitor multiple background agents from unified VS Code panel

### Narrative

Background agents fundamentally change the supervision equation. Instead of interactive guidance, you define intent and constraints once—then agents work completely autonomously until completion. The breakthrough is Git worktree isolation: each background agent operates in a separate filesystem location, a complete clone of your repository. Changes never touch your active workspace. You continue implementing the next feature while three agents work independently on refactoring, testing, and documentation. When agents complete, you review finished work and integrate selectively. Supervision shifts from continuous to final review.

---

## Git Worktree Isolation: Technical Architecture

### How It Works

**Traditional single workspace:**
```
repo/
├── .git/
└── src/
    └── main.js  ← only one checkout
```

**Worktree-based isolation:**
```
repo/
├── .git/  ← shared repository
├── main/src/main.js  ← your active work
├── worktree-agent-1/src/main.js  ← agent A workspace
└── worktree-agent-2/src/main.js  ← agent B workspace
```

### Key Benefits

- **True isolation:** File changes in agent worktrees never affect main workspace
- **Shared repository:** All worktrees use same .git, maintaining full history
- **Branch independence:** Each worktree checks out different branch
- **Parallel safety:** Multiple agents modify same files without conflicts

### Narrative

Git worktrees provide the foundation for safe autonomous agent execution. Traditional approaches either risk your active workspace or require complex containerization. Worktrees offer native Git functionality: lightweight checkouts sharing repository data but with independent working directories. When a background agent starts, VS Code creates a new worktree, checks out a feature branch, and runs the agent there. Your main workspace continues unchanged. The agent makes commits in its worktree. When finished, you review the branch and merge—or discard the worktree if the approach didn't work. This enables risk-free experimentation at scale.

---

## The Hand-Off Workflow Pattern

### Phases

1. **Interactive planning (5-15 minutes)**
   Use VS Code chat to clarify requirements, discuss approach, identify risks

2. **Context capture (automatic)**
   System preserves full conversation history, repository state, and intent

3. **Background execution (0 minutes active time)**
   Agent implements autonomously in isolated worktree while you start next task

4. **Review and integration (5-10 minutes)**
   Examine finished work, run tests, merge or iterate based on results

### Before: Supervised Interactive Development

```
┌─────────────┐     ┌──────────────┐     ┌─────────────┐
│ Plan        │────▶│ Implement    │────▶│ Review      │
│ 15 min      │     │ 60 min       │     │ 10 min      │
│ (active)    │     │ (supervised) │     │ (active)    │
└─────────────┘     └──────────────┘     └─────────────┘
Total: 85 minutes, 85 minutes active supervision
```

### After: Hand-Off to Background Agent

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

### Narrative

The hand-off pattern transforms AI productivity economics. Traditional workflows require 85 minutes of active time: planning, supervised implementation, and review. Background agents reduce this to 27 minutes: plan interactively to establish clear intent, hand off to background execution with full context, then review finished work. The 60 minutes of implementation happens in parallel while you work on the next task. For teams handling 5-10 tasks daily, this compounds dramatically: instead of serial execution requiring 425 minutes, parallel execution needs 135 active minutes. The bottleneck shifts from supervision time to planning clarity.

---

## Multi-Agent Parallel Patterns

### Parallel Execution (Independent Tasks)

```
Task A → Agent 1 (worktree-1) → Branch A
Task B → Agent 2 (worktree-2) → Branch B
Task C → Agent 3 (worktree-3) → Branch C
```
All three agents work simultaneously without conflicts

**Best for:**
- Independent feature development
- Non-overlapping refactoring
- Parallel test/documentation generation

### Experimental Variants (A/B Approaches)

```
Requirement → Agent 1 (GraphQL approach) → Branch A
           ↘ Agent 2 (REST approach)   → Branch B
```
Compare finished implementations, choose best

**Best for:**
- Architecture decisions
- Performance optimization attempts
- API design exploration

### Specialized Parallel Work

```
                    ┌→ Refactoring Agent ─┐
                    │                     │
Feature Complete ──┼→ Testing Agent ─────┼→ Integration
                    │                     │
                    └→ Documentation Agent┘
```
Different agents tackle different concerns simultaneously

**Best for:**
- Post-implementation cleanup
- Cross-cutting improvements
- Quality enhancement cycles

### Narrative

Background agents enable sophisticated multi-agent workflows. For independent tasks—refactoring, testing, and documentation—launch three agents in parallel, each in isolated worktrees. They work simultaneously without conflicts. For architectural decisions, run experimental variants: two agents implement different approaches (GraphQL vs REST, microservices vs monolith), you compare finished results and choose the superior implementation. This transforms architecture decisions from theoretical debates into empirical comparisons.

---

## Session Management Interface (VS Code 1.109)

### Session Type Picker

The new session type picker in the chat input area serves two purposes:

- **Choose session type:** Start local, background, cloud, or Claude agent sessions
- **Hand off sessions:** Transfer an ongoing session to a different environment

**Example workflow:**
1. Plan interactively in local session
2. Use picker to "Continue in Cloud" for implementation
3. Cloud agent works while you start next local session

> 💡 **Tip:** Bind `workbench.action.chat.newLocalChat` to a keyboard shortcut for quick local session creation.

### Agent Sessions View

**Key features (enhanced in 1.109):**
- **Resize sessions list:** Adjust when showing side-by-side
- **Multi-select sessions:** Bulk operations across sessions
- **Stacked view:** Better navigation with filter support
- **Active agents list:** See all running agents with status
- **Progress monitoring:** Real-time updates without interrupting agents
- **Log streaming:** Review agent decisions and reasoning

### Agent Status Indicator

The command center shows an **agent status indicator** (`chat.agentsControl.enabled`):

| Status | Meaning |
|--------|---------|
| 🔵 In-progress | Agent actively working |
| 🟡 Unread | Session has new updates |
| 🔴 Attention needed | Agent requires input or approval |

Click the indicator to quickly open and filter the sessions list.

### Narrative

VS Code 1.109 transforms session management from single-focus to multi-session orchestration. The session type picker enables seamless hand-offs: plan locally, implement in cloud, review results—all from one interface. The Agent Sessions view now supports bulk operations across multiple parallel sessions. The status indicator in the command center provides at-a-glance visibility: which sessions are working, which have updates, which need attention. This unified approach enables developers to run 5-10 parallel agent sessions without losing track of progress.

---

## Custom Agents in Background Mode

### Agent Architecture

**Repository-defined agents (`.github/agents/`):**
- Load automatically in VS Code and CLI
- Contain specialized instructions and tool restrictions
- Execute identically in background as in foreground

**Background execution model:**
- Agent receives full interactive context from hand-off
- Works in isolated Git worktree with branch checkout
- Has access to same tools: file operations, Git commands, testing
- Signals completion with status and artifact summary

### Use Cases

**`@review-enforcer` agent (architecture validation):**
- Run autonomous reviews on every PR before human review
- Background execution while team continues development
- Consistent application of standards without manual oversight

**`@test-generator` agent (coverage automation):**
- Generate comprehensive test suites from implementation
- Execute in parallel with next feature development
- Maintain 80%+ coverage without dedicated testing time

**`@refactor-specialist` agent (technical debt reduction):**
- Modernize patterns across large codebases
- Work autonomously on 50+ file changes
- Human reviews only final diff, not intermediate steps

### Narrative

Custom agents (from your agent configurations) become exponentially more valuable in background mode. The `@review-enforcer` agent you built for interactive code reviews now runs autonomously on every PR—checking architecture compliance, security patterns, and style guidelines without human triggering. The `@test-generator` agent creates test coverage in parallel while you implement the next feature. The `@refactor-specialist` modernizes deprecated patterns across 50 files independently. These agents execute with the same quality as interactive mode but without supervision cost.

---

## Cloud Agents: Large-Scale Operations

### Cloud Agent Capabilities (1.109)

When starting a cloud agent session:

- **Model selection:** Choose from available models for cloud execution
- **Custom agents:** Use repository-defined agents from default branch
- **Partner agents:** Access third-party agents where available
- **Multi-root support:** Select which folder to use in multi-root workspaces

### Cloud Agent Use Cases

**Large-scale refactoring:**
- Modify 100+ files without local resource constraints
- GitHub infrastructure handles compute

**Cross-repository operations:**
- Access multiple repos in a single session
- Coordinate changes across microservices

**Long-running tasks:**
- Operations that would timeout locally
- Continuous execution without IDE dependency

### Narrative

Cloud agents extend agent capabilities beyond local machine limitations. Large refactoring operations that would strain local resources run on GitHub infrastructure. The 1.109 release added model selection for cloud agents—choose the best model for your specific task. Custom agents defined in your repository work identically in cloud as locally. This enables massive parallel execution: run 10 cloud agents simultaneously while your local machine handles 3 background agents, all coordinated from VS Code's unified interface.

---

## Use Case: Isolated Worktree Experiments

### The Problem

- **Experimental features risk main branch:** Breaking changes affect active work
- **Rollback overhead:** 90 minutes reverting failed experiments
- **Merge conflicts:** Competing approaches create integration nightmares
- **Risk aversion:** Teams avoid experimentation due to costs

### The Solution

- Launch 2-3 background agents with different architectural approaches
- Each agent works in isolated Git worktree with independent branch
- Agents implement complete solutions without interference
- Compare finished implementations empirically
- Merge winning approach, discard worktrees for failed experiments

### Impact

- **90 minutes → 5 minutes** rollback time (remove worktree vs. complex revert)
- **0 merge conflicts** (isolation prevents interference)
- **3x experimentation rate** (negligible cost enables exploration)

### Narrative

Experimentation traditionally carries high risk. Testing an architectural approach in your main workspace means potential breaking changes, difficult rollbacks, and merge conflicts if the approach fails. This discourages exploration—teams stick with known patterns even when better alternatives exist. Git worktrees eliminate this friction. Launch three background agents to test different approaches: GraphQL vs REST vs gRPC. Each works in isolated worktree with independent branch. They implement complete solutions including tests and documentation. When finished, compare the implementations empirically—performance, complexity, maintainability. Merge the winner. Discard failed worktrees with a single command. The cost of experimentation becomes negligible, enabling data-driven architectural decisions.

---

## Use Case: Autonomous Architecture Review

### The Problem

- **Manual review overhead:** 30 minutes per PR for architecture validation
- **Inconsistent application:** Different reviewers apply standards differently
- **Review bottleneck:** PRs wait hours/days for senior architect availability
- **Scaling limitation:** Can't review 20+ PRs daily with manual process

### The Solution

- Configure `@review-enforcer` custom agent with architecture standards
- PR creation triggers background agent review in isolated worktree
- Agent analyzes code against patterns, dependencies, performance budgets
- Posts structured review comments with specific violations and recommendations
- Human reviewers focus on business logic, not standards enforcement

### Impact

- **30 minutes → 2 minutes** per PR for standards validation
- **100% consistent** application of architecture rules
- **Real-time reviews** (no waiting for architect availability)
- **20+ PRs daily** handled without scaling review team

### Narrative

Manual architecture reviews don't scale. Senior architects spend 30 minutes per PR validating patterns, checking dependencies, and ensuring performance budgets. Different reviewers apply standards inconsistently. PRs wait hours for availability. Background agents solve this bottleneck. When a PR is created, the `@review-enforcer` agent automatically checks out the branch in an isolated worktree and runs comprehensive architecture analysis: Are approved patterns used correctly? Do dependencies match the architecture decision record? Are performance budgets violated? The agent posts structured comments with specific violations and recommended fixes. Human reviewers focus on business logic and creative problem-solving, not mechanical standards enforcement.

---

## Background Agent Enhancements (1.109)

### New Capabilities

**Custom agents for background:**
- Use repository-defined agents (`.github/agents/`) in background mode
- Same agent configuration works across all execution environments

**Image context support:**
- Attach images as context in background agent sessions
- Useful for UI implementation from mockups

**Multi-root workspace support:**
- Select which folder to use in multi-root workspaces
- Clear scope for agent operations

**Auto-commit per turn:**
- Changes committed to Git worktree at end of each turn
- Simplified working set display
- Keep/Undo actions removed (Git history provides rollback)

### Worktree File Inclusion

New setting `git.worktreeIncludeFiles`:
- Specify additional files copied to worktree after creation
- Useful for git-ignored files (local config, build artifacts)
- Ensures agents have complete working environment

---

## Best Practices

### When to Use Background Agents

**Ideal scenarios:**
- Well-defined requirements with clear acceptance criteria
- Refactoring with established patterns to apply
- Test generation from implementation
- Documentation from code
- Standards enforcement and architecture validation

**Not recommended:**
- Ambiguous requirements requiring iterative clarification
- Novel architecture requiring creative exploration
- Complex debugging needing interactive hypothesis testing
- Security-critical changes requiring continuous oversight

### Planning for Autonomy

**Maximize success rates:**
- Spend adequate time on interactive planning (15+ minutes)
- Define explicit acceptance criteria in hand-off
- Specify non-goals and constraints clearly
- Provide architectural context and relevant examples
- Include links to related code and documentation

**Set clear boundaries:**
- Define scope limits (files/directories to modify)
- Specify testing requirements
- Identify integration points that must remain stable
- List external dependencies to avoid

### Narrative

Background agents excel at well-defined execution, not ambiguous exploration. The key to success is planning quality. Spend 15 minutes interactively clarifying requirements, discussing approach, and identifying edge cases. When handing off, explicitly state acceptance criteria: "Generate tests achieving 80%+ coverage for the authentication module, covering happy path and error cases." Define non-goals: "Do not modify the database schema or change existing API contracts." This upfront investment ensures autonomous execution succeeds.

---

## Common Pitfalls

### Anti-Patterns to Avoid

**Insufficient planning:**
- ❌ Wrong: H and off vague requirements hoping agent figures it out
- ✅ Right: Spend 15 minutes clarifying intent, constraints, acceptance criteria

**Over-supervision:**
- ❌ Wrong: Check agent progress every 5 minutes, interrupt with guidance
- ✅ Right: Let agents work autonomously, review finished results

**Inappropriate tasks:**
- ❌ Wrong: Use background agents for creative architecture exploration
- ✅ Right: Use for well-defined execution (refactoring, testing, documentation)

**Ignoring worktree isolation:**
- ❌ Wrong: Manually merge agent changes into main workspace during execution
- ✅ Right: Wait for completion, review branch, merge through normal process

---

## Metrics and ROI

### Time Savings

**Per-feature development:**
- Traditional supervised: 105 minutes active time
- Background agent: 45 minutes active time
- **Savings: 57% per feature**

**Weekly capacity gains:**
- 10 features/week: 600 minutes (10 hours) reclaimed
- Enables 20+ features/week at same active time investment

### Quality Improvements

**Architecture compliance:**
- Manual reviews: 30 min/PR, inconsistent application
- Background agents: 2 min/PR, 100% consistency
- **20+ PRs daily vs. 5-6 with manual process**

**Test coverage:**
- Manual writing: 60% average coverage due to time constraints
- Background agents: 85% coverage through parallel generation
- **25% coverage improvement with zero active time**

---

## Key Takeaways

### 🚀 Hand-Off Pattern Transforms Productivity
Plan locally → execute autonomously → review finished work

### 💡 Git Worktrees Enable Safe Parallelism
Multiple agents work simultaneously without conflicts

### ⚡ Supervision Shifts from Continuous to Review
27 minutes active time vs. 85 minutes with traditional approach

### 🎯 Custom Agents Scale Through Automation
Same configurations work across local, background, and cloud

### 🛡️ Isolation Enables Risk-Free Experimentation
Failed experiments discard with one command, no merge conflicts

---

## Related Patterns

- **Need task decomposition?** → See [multi-step-tasks](../multi-step-tasks/) for research/analysis phases
- **Need specialized roles?** → See [agent-teams](../agent-teams/) for planner/coder/reviewer patterns
- **Building custom agents?** → See [workshop/06-custom-agents](../../workshop/06-custom-agents/)

---

## Resources

**Official Documentation:**
- [VS Code: Background Agents](https://code.visualstudio.com/docs/copilot/agents/background-agents) — Autonomous agent execution
- [VS Code: Cloud Agents](https://code.visualstudio.com/docs/copilot/agents/cloud-agents) — Large-scale operations
- [VS Code 1.109: Agent Session Management](https://code.visualstudio.com/updates/v1_109#_agent-session-management) — Session picker and status
- [Git Worktrees](https://git-scm.com/docs/git-worktree) — Technical reference

**Related Talks:**
- [Agentic SDLC](../agentic-sdlc/) (Part 2) — Gen-4 SDLC workflows
- [Copilot CLI](../copilot-cli/) — Plan Mode and hand-off patterns
