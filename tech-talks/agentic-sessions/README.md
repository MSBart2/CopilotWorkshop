# Agentic Sessions: Multi-Environment Agent Orchestration

Delegate, monitor, and switch between local, background, and cloud agents from a unified interface

---

## The Agent Environment Landscape

### Key Points

- **Multiple execution environments**
  Local agents for interactive work, background agents for autonomous tasks, cloud agents for large-scale operations

- **Session type picker (VS Code 1.109)**
  Unified interface to start sessions across environments and hand off between them

- **Agent status indicator**
  Command center badge showing in-progress, unread, and attention-needed sessions

- **Parallel subagents**
  Break complex tasks into smaller parts running in dedicated context windows

### Narrative

VS Code has evolved into a unified agent UX supporting multiple execution environments. Local agents work interactively in your IDE. Background agents operate autonomously in Git worktrees. Cloud agents handle large-scale operations on GitHub infrastructure. The January 2026 release (v1.109) introduced the session type picker—a single interface to start, switch, and delegate between these environments. Plan a task locally, then hand off to cloud implementation with one click. Monitor multiple parallel sessions from the Agent Sessions view. The agent status indicator in the command center shows which sessions need attention. This transforms agent interaction from single-session focus to multi-session orchestration.

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

Custom agents (from Module 4 repository configurations) become exponentially more valuable in background mode. The `@review-enforcer` agent you built for interactive code reviews now runs autonomously on every PR—checking architecture compliance, security patterns, and style guidelines without human triggering. The `@test-generator` agent creates test coverage in parallel while you implement the next feature. The `@refactor-specialist` modernizes deprecated patterns across 50 files independently. These agents execute with the same quality as interactive mode but without supervision cost. Your investment in agent customization pays continuous dividends through autonomous application.

---

## Multi-Agent Orchestration

### Patterns

**Parallel execution (independent tasks):**
```
Task A → Agent 1 (worktree-1) → Branch A
Task B → Agent 2 (worktree-2) → Branch B
Task C → Agent 3 (worktree-3) → Branch C
```
All three agents work simultaneously without conflicts

**Sequential hand-offs (dependent tasks):**
```
Agent 1: Generate API spec → Branch A
   ↓ (merge to main)
Agent 2: Implement endpoints (from spec) → Branch B
   ↓ (merge to main)
Agent 3: Generate documentation → Branch C
```
Each agent starts after previous completes

**Experimental variants (A/B approaches):**
```
Requirement → Agent 1 (GraphQL approach) → Branch A
           ↘ Agent 2 (REST approach)   → Branch B
```
Compare finished implementations, choose best

### Narrative

Background agents enable sophisticated multi-agent workflows. For independent tasks—refactoring, testing, and documentation—launch three agents in parallel, each in isolated worktrees. They work simultaneously without conflicts. For dependent workflows, sequence agents: the first generates API specifications, you review and merge, then the second implements endpoints based on that spec, followed by automatic documentation generation. For architectural decisions, run experimental variants: two agents implement different approaches (GraphQL vs REST, microservices vs monolith), you compare finished results and choose the superior implementation. This transforms architecture decisions from theoretical debates into empirical comparisons.

---

## Session Management Interface (VS Code 1.109)

### Ask Questions Tool (Experimental)

Setting: `chat.askQuestions.enabled`

Instead of making assumptions, agents can now ask clarifying questions:

- **Single/multi-select options:** Choose from predefined answers
- **Free text input:** Provide custom responses
- **Recommended answers highlighted:** Quick decisions for common cases
- **Keyboard navigation:** Up/Down to navigate, number keys to select

**Example interaction:**
```
Agent: "I need clarification before proceeding:

        What authentication pattern should I use?
        [1] JWT tokens (recommended)
        [2] Session cookies
        [3] OAuth2
        [4] Custom - describe your requirements"
```

The Plan agent uses this extensively in its 4-phase workflow:
1. **Discovery** — Explores codebase autonomously
2. **Alignment** — Asks clarifying questions before committing
3. **Design** — Drafts implementation plan
4. **Refinement** — Adds verification criteria

> 💡 **Quick access:** Use `/plan` slash command to invoke the Plan agent directly.

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

The command center now shows an **agent status indicator** (`chat.agentsControl.enabled`):

| Status | Meaning |
|--------|---------|
| 🔵 In-progress | Agent actively working |
| 🟡 Unread | Session has new updates |
| 🔴 Attention needed | Agent requires input or approval |

Click the indicator to quickly open and filter the sessions list.

**Chat button behavior:** Configure `chat.agentsControl.clickBehavior` to cycle through sidebar, maximized, or hidden states.

### CLI Management

```powershell
# List active background agents
gh copilot agents list

# View agent progress
gh copilot agents status <agent-id>

# Review agent logs
gh copilot agents logs <agent-id>

# Terminate agent
gh copilot agents stop <agent-id>
```

### Narrative

VS Code 1.109 transforms session management from single-focus to multi-session orchestration. The session type picker enables seamless hand-offs: plan locally, implement in cloud, review results—all from one interface. The Agent Sessions view now supports bulk operations across multiple parallel sessions. The status indicator in the command center provides at-a-glance visibility: which sessions are working, which have updates, which need attention. This unified approach enables developers to run 5-10 parallel agent sessions without losing track of progress.

---

## Subagents: Parallel Task Decomposition

### How Subagents Work

Agents can spawn **subagents** to break complex tasks into smaller parts:

- Each subagent operates in its own **dedicated context window**
- Subagents don't consume the main agent's context budget
- **Parallel execution (1.109):** Independent subagents now run simultaneously, not sequentially
- Full visibility into subagent tasks, tools used, and results

### Custom Agents in Subagents (1.109)

Setting: `chat.customAgentInSubagent.enabled`

Subagents can now use your custom agents:
- Main agent delegates to specialized `@code-reviewer` subagent
- Each subagent gets the full custom agent configuration
- Chain specialized agents for complex workflows

**New frontmatter controls for orchestration:**
```yaml
---
name: implementation-agent
user-invokable: false           # Hidden from UI, only callable as subagent
agents: ['Modify', 'Search']    # Can only invoke these subagents
---
```

### Search Subagent (Experimental)

Setting: `github.copilot.chat.searchSubagent.enabled`

The search subagent handles iterative codebase searches:

- Runs in isolated agent loop
- Refines queries, tries multiple approaches
- Explores different parts of workspace
- Returns focused results without polluting main context
- Preserves main agent's context window for orchestration

### Subagent Visibility (Enhanced in 1.109)

Chat shows expanded subagent information:
- Task being performed
- Custom agent used (if any)
- Current tool in use
- Full initial prompt (expandable)
- Returned result
- **Active spinner** showing parallel execution

### Narrative

Subagents solve the context overflow problem in complex tasks. When an agent needs to search, analyze, or implement across many files, spawning subagents keeps each operation contained. The main agent's context stays clean for high-level orchestration. The 1.109 release transforms subagents with **parallel execution**—independent subagents run simultaneously, dramatically speeding up tasks that decompose into parts. Custom agent support means your specialized agents work as subagents too, enabling sophisticated orchestration patterns. The search subagent is particularly valuable: instead of consuming main context with iterative queries, it refines searches independently and returns only the relevant results.

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

### Checkout Workflow

The **Checkout** option now works without GitHub Pull Requests extension pre-installed:
1. Select Checkout action
2. Extension installs automatically if needed
3. Hands off to extension for checkout

### Narrative

Cloud agents extend agent capabilities beyond local machine limitations. Large refactoring operations that would strain local resources run on GitHub infrastructure. The 1.109 release added model selection for cloud agents—choose the best model for your specific task. Custom agents defined in your repository work identically in cloud as locally. The seamless checkout workflow means you can start reviewing cloud agent work immediately without manual extension setup.

---

## Claude Agent Integration (Preview)

### Native Claude Agent SDK

VS Code 1.109 introduces Claude Agent support:

- **Official Anthropic harness:** Same prompts, tools, and architecture as other Claude Agent implementations
- **Copilot subscription models:** Use Claude models included in your GitHub Copilot subscription
- **Session type picker:** Claude Agent appears alongside Local, Background, and Cloud options

### When to Use Claude Agent

**Ideal for:**
- Tasks benefiting from Claude's reasoning strengths
- Extended thinking for complex architectural decisions
- Interleaved thinking with tool calls

**Configuration:**
- `github.copilot.chat.anthropic.thinking.budgetTokens`: Configure thinking token budget
- `github.copilot.chat.anthropic.toolSearchTool.enabled`: Enable tool discovery
- `github.copilot.chat.anthropic.contextEditing.enabled`: Efficient context management

### Narrative

Claude Agent integration brings Anthropic's agent SDK directly into VS Code. This isn't just model access—it's the full Claude Agent harness with specialized prompts, tools, and architecture. For tasks requiring extended reasoning, Claude Agent provides interleaved thinking between tool calls, giving visibility into model decision-making. The integration leverages your existing Copilot subscription, requiring no additional setup. Select Claude Agent from the session type picker and experience a different approach to agentic workflows.

---

## Agent Orchestration Patterns

### Community Orchestration Systems

The VS Code agent ecosystem has produced sophisticated orchestration frameworks:

**[Copilot Orchestra](https://github.com/ShepAlderson/copilot-orchestra):**
- **Conductor agent** orchestrates the workflow
- **Planning subagent** creates implementation plans
- **Implementation subagent** executes code changes
- **Code review subagent** validates results
- Complete development cycle in one coordinated flow

**[GitHub Copilot Atlas](https://github.com/bigguy345/Github-Copilot-Atlas):**
- **Prometheus** — Strategic planning and requirements analysis
- **Oracle** — Research and knowledge gathering
- **Sisyphus** — Persistent implementation work
- **Explorer** — Rapid codebase discovery

### Building Your Own Orchestration

VS Code provides the building blocks:

1. **Custom agents** (`.github/agents/`) — Specialized personas with tool restrictions
2. **Subagents** — Context-isolated task delegation
3. **Agent invocation controls** — `user-invokable`, `disable-model-invocation`, `agents`
4. **Model selection** — Different models for different agent roles

**Example orchestration pattern:**
```
┌─────────────────┐
│   Conductor     │  ← User-invokable, orchestrates workflow
│   (Claude 4.5)  │
└────────┬────────┘
         │
    ┌────┴────┬────────────┐
    ▼         ▼            ▼
┌───────┐ ┌───────┐  ┌───────────┐
│Planner│ │Coder  │  │ Reviewer  │  ← Not user-invokable,
│(GPT-5)│ │(Sonnet)│ │(Claude 4.5)│    subagent-only
└───────┘ └───────┘  └───────────┘
```

### Narrative

Agent orchestration represents the frontier of AI-assisted development. Instead of one agent handling everything, specialized agents collaborate—each optimized for its role. The conductor manages workflow, the planner creates structure, the implementer writes code, the reviewer validates quality. This mirrors human team organization, but with agents that scale infinitely. The community systems demonstrate what's possible; VS Code provides the primitives to build your own.

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

### Narrative

Background agents in 1.109 gain feature parity with local and cloud environments. Custom agents now work identically across all session types—define once, use everywhere. Image context support enables background agents to implement UI from design mockups autonomously. The auto-commit behavior per turn creates granular Git history, enabling precise rollback if needed. For projects with git-ignored dependencies, the worktree include files setting ensures agents have everything they need without manual intervention.

---

## Agent Sessions Welcome Page (Experimental)

### Session-Centric Startup

Enable with `workbench.startupEditor: agentSessionsWelcomePage`:

- **Recent sessions:** Front-and-center display of agent sessions
- **Quick actions:** Common operations accessible immediately
- **Embedded chat widget:** Start new sessions without navigation

### When to Use

**Ideal for:**
- Developers running multiple parallel agents daily
- Teams with agent-first workflows
- Environments where session tracking matters most

### Narrative

The Agent Sessions Welcome Page represents VS Code's evolution toward session-centric development. Instead of starting with files or folders, you start with your agent sessions—what's running, what completed, what needs attention. This experimental feature signals the direction: agents as first-class development primitives, not add-ons to traditional workflows.

---

---

## Use Case: Plan-to-Background Hand-Off

### The Problem

- **Planning blocks implementation:** 45 minutes clarifying requirements
- **Supervised coding overhead:** 60 minutes guiding agent through implementation
- **Serial execution:** Must finish Task A before starting Task B
- **Total time:** 105 minutes per feature

### The Solution

- Spend 15 minutes planning interactively with agent in VS Code
- Hand off complete context to background agent with intent and constraints
- Agent implements autonomously in isolated Git worktree
- Review finished feature in 10 minutes
- Start next task immediately after hand-off

### Impact

- **105 minutes → 45 minutes** total time per feature (57% reduction)
- **0 supervision needed** during implementation (60 minutes reclaimed)
- **Parallel task execution** enabled (2-3x effective throughput)

### Narrative

Traditional agent-assisted development requires continuous supervision. You spend 45 minutes planning, then 60 minutes guiding the agent through implementation—answering questions, approving approaches, fixing mistakes. The hand-off pattern changes this economics. Plan for 15 minutes interactively to establish clear intent. Hand off to background execution. The agent works autonomously in an isolated worktree for 60 minutes while you immediately start planning the next feature. Review the finished implementation in 10 minutes. Your active time drops from 105 to 45 minutes. More importantly: you execute 2-3 tasks in parallel instead of serially, multiplying effective throughput.

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

Manual architecture reviews don't scale. Senior architects spend 30 minutes per PR validating patterns, checking dependencies, and ensuring performance budgets. Different reviewers apply standards inconsistently. PRs wait hours for availability. Background agents solve this bottleneck. When a PR is created, the `@review-enforcer` agent automatically checks out the branch in an isolated worktree and runs comprehensive architecture analysis: Are approved patterns used correctly? Do dependencies match the architecture decision record? Are performance budgets violated? The agent posts structured comments with specific violations and recommended fixes. Human reviewers focus on business logic and creative problem-solving, not mechanical standards enforcement. The result: 2-minute automated reviews with 100% consistency, handling 20+ PRs daily.

---

## Best Practices: Effective Background Agent Usage

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

Background agents excel at well-defined execution, not ambiguous exploration. The key to success is planning quality. Spend 15 minutes interactively clarifying requirements, discussing approach, and identifying edge cases. When handing off, explicitly state acceptance criteria: "Generate tests achieving 80%+ coverage for the authentication module, covering happy path and error cases." Define non-goals: "Do not modify the database schema or change existing API contracts." Provide context: link to architecture decision records, similar implementations, and relevant documentation. This upfront investment ensures autonomous execution succeeds. The inverse is also true: poorly defined hand-offs lead to rework, consuming the time saved through parallelism.

---

## Integration with CI/CD Pipelines

### Automated Agent Triggering

**PR creation triggers:**
```yaml
# .github/workflows/pr-agent-review.yml
on:
  pull_request:
    types: [opened, synchronize]

jobs:
  agent-review:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Run review agent
        run: gh copilot agent run @review-enforcer
```

**Scheduled refactoring:**
```yaml
# .github/workflows/weekly-refactor.yml
on:
  schedule:
    - cron: '0 2 * * 1'  # Every Monday at 2 AM

jobs:
  refactor:
    runs-on: ubuntu-latest
    steps:
      - name: Run refactoring agent
        run: gh copilot agent run @refactor-specialist
```

### Narrative

Background agents integrate seamlessly with CI/CD pipelines. Configure GitHub Actions to trigger `@review-enforcer` on every PR—automated architecture validation before human review. Schedule weekly refactoring agents to modernize deprecated patterns continuously. Run test generation agents after feature merges to maintain coverage. This transforms background agents from developer productivity tools into autonomous infrastructure components, providing continuous quality enforcement without human intervention.

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

### Team Scaling

**Review bottleneck elimination:**
- Before: 1 senior architect, 5-6 PRs/day capacity
- After: Automated agent reviews, 20+ PRs/day
- **3-4x review capacity without hiring**

### Narrative

Background agents deliver measurable ROI across time, quality, and scaling dimensions. Individual developers reclaim 10 hours weekly by eliminating supervision overhead, enabling 2x feature throughput. Teams maintain higher code quality through consistent automated enforcement—100% of PRs receive architecture validation vs. selective manual review. Organizations scale review capacity 3-4x without hiring senior architects. The compounding effect: faster execution, higher quality, and better scaling combine to transform development velocity fundamentally.

---

## Common Pitfalls

### Anti-Patterns to Avoid

**Insufficient planning:**
- ❌ Wrong: Hand off vague requirements hoping agent figures it out
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

### Narrative

The most common failure mode is insufficient planning followed by over-supervision. Teams hand off vague requirements, then interrupt agents constantly with clarifications—negating the autonomy benefits. The solution: invest upfront in clear planning, then trust autonomous execution. Another pitfall: using background agents for creative exploration requiring iteration. These tasks need interactive guidance. Background agents excel at defined execution: "Refactor these 30 files to use the new authentication pattern." Finally, resist the temptation to manually merge agent changes during execution. Worktree isolation provides safety—breaking it reintroduces conflict risks.

---

## Security and Compliance Considerations

### Worktree Isolation as Security Boundary

**Benefits:**
- Agent changes can't affect production workspace
- Failed experiments don't leave partial modifications
- Risky operations contained to disposable worktrees
- Branch-level review before any main integration

**Limitations:**
- Agents still access full repository data
- Secret management requires same controls as interactive sessions
- Worktrees share .git directory and configuration

### Audit and Traceability

**Background agent sessions generate:**
- Complete execution logs with reasoning steps
- Git commits with agent attribution
- File modification history in isolated branches
- Decision rationale for each code change

**Compliance benefits:**
- Every agent action auditable
- Full context preserved for security review
- Rollback capability through Git history
- Clear separation of human vs. agent contributions

### Narrative

Git worktree isolation provides a security boundary for experimental agent work. Changes remain contained until explicitly reviewed and merged. Failed attempts delete cleanly without affecting production code. However, isolation is workspace-level, not data-level—agents access full repository history and secrets. Apply the same access controls as interactive sessions. For compliance, background agents generate comprehensive audit trails: execution logs, attributed commits, decision rationale. This enables post-execution review meeting SOC 2, ISO 27001, and regulatory requirements. The separation of agent contributions from human work clarifies responsibility for changes.

---

## The Autonomous Development Vision

### Complete AI Coverage

**Interactive development (VS Code):**
- Creative problem-solving
- Architecture exploration
- Complex debugging
- Planning and specification

**Background execution (agents):**
- Implementation from specifications
- Refactoring with defined patterns
- Test and documentation generation
- Standards enforcement

**Autonomous orchestration (workflows):**
- Multi-agent task coordination
- Dependency-aware sequencing
- Parallel execution management
- Integration and rollback handling

### Narrative

Background agents represent the transition from AI-assisted development to autonomous development. Humans focus on creative work: defining intent, exploring architectures, making strategic decisions. Agents handle mechanical execution: implementing from specifications, applying patterns at scale, generating tests and documentation. Orchestration layers coordinate multi-agent workflows: managing dependencies, sequencing tasks, handling parallel execution. The result is a development model where human creativity and strategic thinking amplify through autonomous AI execution, achieving throughput impossible with either alone.

---

## Key Takeaways

### Core Insights

- **Session type picker unifies environments**
  Local, background, cloud, and Claude agents from one interface with seamless hand-offs

- **Status indicator enables parallel work**
  Track multiple sessions at a glance without context switching

- **Subagents preserve context**
  Complex tasks decompose into parallel subtasks in dedicated context windows

- **Git worktrees enable safe autonomy**
  Isolated execution prevents conflicts and enables risk-free experimentation

- **Custom agents work everywhere**
  Define once in `.github/agents/`, use across local, background, and cloud

- **Hand-off pattern is transformative**
  Plan locally → implement in background/cloud → review finished work

### Narrative

VS Code 1.109 transforms agent interaction from single-session focus to multi-environment orchestration. The session type picker enables seamless transitions between local planning, background execution, and cloud-scale operations. The status indicator in the command center tracks parallel sessions without consuming attention. Subagents preserve main context while handling complex subtasks. Git worktree isolation provides safety for autonomous execution. Custom agents work identically across all environments. The result: developers orchestrate 5-10 parallel agent sessions, achieving throughput impossible with interactive-only workflows.

---

## Getting Started

### Immediate Actions

1. **Try the session type picker**
   Start a local chat, then use the picker to continue in background or cloud

2. **Enable the agent status indicator**
   `chat.agentsControl.enabled: true` — monitor sessions from command center

3. **Test worktree isolation**
   Hand off simple refactoring task, observe isolated execution

4. **Explore subagents**
   Enable `github.copilot.chat.searchSubagent.enabled` for iterative searches

5. **Try Claude Agent (Preview)**
   Select Claude Agent from session picker for extended reasoning tasks

### Next Steps

- Implement multi-agent parallel execution for independent tasks
- Integrate background agents into CI/CD for automated reviews
- Enable Agent Sessions Welcome Page for session-centric workflow
- Scale to 5-10 parallel sessions across local, background, and cloud

### Narrative

Start with the session type picker—the gateway to multi-environment orchestration. Plan locally, hand off to background, review results. Enable the status indicator to track parallel sessions at a glance. As proficiency grows, leverage subagents for complex tasks and Claude Agent for extended reasoning. The Agent Sessions Welcome Page signals where VS Code is heading: sessions as first-class development primitives.

---

## Resources

**Official Documentation:**
- [VS Code 1.109 Release Notes: Agent Session Management](https://code.visualstudio.com/updates/v1_109#_agent-session-management) — Session type picker, status indicator, subagents
- [VS Code: Background Agents](https://code.visualstudio.com/docs/copilot/agents/background-agents) — Autonomous agent execution and worktree isolation
- [VS Code: Cloud Agents](https://code.visualstudio.com/docs/copilot/agents/cloud-agents) — Large-scale operations on GitHub infrastructure
- [VS Code: Subagents](https://code.visualstudio.com/docs/copilot/agents/subagents) — Parallel task decomposition
- [VS Code: Custom Agents](https://code.visualstudio.com/docs/copilot/customization/custom-agents) — Creating specialized agent personas
- [Git Worktrees](https://git-scm.com/docs/git-worktree) — Technical reference for worktree management

**Related Talks:**
- [Agentic PRs](../agentic-prs/README.md) — Gen-4 SDLC and AI-driven delivery
- [Copilot Chat Internals](../copilot-chat-internals/README.md) — Understanding what agents see

---

**Multi-environment agent orchestration for autonomous development**
