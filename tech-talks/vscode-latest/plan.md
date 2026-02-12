# Content Plan: vscode-latest

> Issue N/A | Generated from research artifacts
> **Format:** What's New tour — lap around Copilot features in VS Code v1.107-1.109

## Content Fitness Assessment

| Criterion | Assessment | Notes |
|-----------|-----------|-------|
| **Relevant** | 🟢 High | Every developer using Copilot in VS Code needs to know what shipped in the last 3 releases. These features are available today and change daily workflows. |
| **Compelling** | 🟢 High | Not a product announcement recap — organized by theme so practitioners see *how* features connect and reinforce each other. Concrete settings and demos for each. |
| **Actionable** | 🟢 High | Every feature shown is available now. Settings provided for each. Practitioners can enable features during or immediately after the talk. |

**Overall Status:** 🟢 Ready to use

## Title & Question

**Title:** What's New in Copilot for VS Code: A Lap Around v1.107 – v1.109

**Subtitle:** Multi-agent sessions, Claude integration, Agent Skills GA, terminal sandboxing, and more — everything that shipped November 2025 through January 2026

**The Question This Talk Answers:**
*"What are the most impactful new Copilot features in VS Code's last three releases, and how do I start using them today?"*

**Duration:** 30-45 minutes | **Target Audience:** Developers using GitHub Copilot in VS Code

## Problem Statement — Draft Content

Developers using AI assistants like GitHub Copilot face a critical scaling problem: single-agent interactions work brilliantly for focused tasks (code completion, quick refactors, explaining functions) but break down for complex, multi-file workflows. When tackling a 50,000-line legacy codebase refactor or migrating authentication across 30 microservices, developers hit three walls: **context overflow** (the agent "forgets" earlier decisions as the conversation grows), **workspace disruption** (autonomous changes conflict with active development work), and **lack of specialization** (one agent tries to handle planning, implementation, testing, and documentation simultaneously, leading to mediocre results in all areas).

The cost of this limitation is substantial: developers either avoid delegating complex tasks to AI (returning to manual, time-consuming approaches) or engage in "prompt babysitting" — spending hours in back-and-forth conversations to keep the AI on track. A refactor that could theoretically be automated still requires constant human oversight, eliminating the efficiency gains AI promises.

**Key Pain Points:**

- **Context Overload**: Single-agent conversations lose coherence beyond 10-15 file edits as earlier context gets pruned from the token window
- **Workspace Conflicts**: Autonomous agent changes disrupt active development work, causing merge conflicts and lost work
- **Unsafe Automation**: Running agent-suggested terminal commands without sandboxing risks accidental system damage (rm -rf, credential exposure, production database access)
- **Inconsistent Results**: Without team-wide customization, each developer gets different AI guidance on code style, architecture patterns, and security practices, leading to code review friction
- **Serial Execution**: Waiting for one agent to complete before starting the next task eliminates parallelization opportunities that could compress timelines

## Solution Overview — Draft Content

VS Code versions 1.107 through 1.109 transform the IDE from an AI-assisted editor into a **multi-agent development platform**. Instead of one conversational assistant, developers now orchestrate specialized AI workers: local agents for interactive planning and review, background agents that execute autonomously in isolated Git worktrees, cloud agents for scaled operations, and Claude agents with visible reasoning for complex architectural decisions. These agents coordinate through session handoffs, invoke specialized subagents for domain expertise, and operate under security guardrails (terminal sandboxing, workspace isolation, auto-approval rules).

The architecture shift is fundamental: from "developer asks AI for help" to "developer defines outcomes, AI team executes plan." A typical workflow now starts with a local plan agent that discovers the codebase and proposes an approach, hands off to a background agent that implements changes in a dedicated worktree (preventing workspace conflicts), while the developer continues other work in parallel. Agent Skills package team knowledge into reusable modules, org-level custom agents enforce consistency across 100+ developers, and Claude's thinking tokens make AI reasoning transparent for debugging and learning.

**Key Capabilities:**

- **Multi-Agent Orchestration**: Coordinate local, background, cloud, and Claude agents with isolated context windows and parallel execution
- **Git Worktree Isolation**: Background agents operate in dedicated worktrees, committing per turn without touching main workspace
- **Terminal Sandboxing**: OS-level restrictions limit agent commands to workspace-only file access with optional network allowlisting
- **Agent Skills & Org Customization**: Package domain expertise into reusable skills, enforce team standards via organization-level agents
- **Claude Extended Thinking**: Visible reasoning tokens show the AI's thought process for complex problems, improving trust and debuggability
- **Session Management**: Unified Agent HQ interface for monitoring, switching, and handing off work between agent types with preserved context

## Key Artifacts

### Primary Artifacts
*(Shown inline with detailed explanation in major sections)*

- **`config/multi-agent-settings.json`** — Complete VS Code configuration enabling multi-agent orchestration, terminal sandboxing, and org-level customization (appears in Section: Getting Started)
- **`agents/architect.agent.md`** — Custom agent definition for architectural analysis and design guidance, demonstrating subagent invocation (appears in Section: Agent Customization)
- **`skills/api-design/SKILL.md`** — Example Agent Skill packaging API design best practices with templates and validation scripts (appears in Section: Agent Skills)
- **`workflows/multi-agent-refactor.md`** — Step-by-step workflow for delegating large-scale refactor from local → background agent with worktree review (appears in Section: Multi-Agent Orchestration)

### Supporting Files
*(Available in repository for reference)*

- **`examples/terminal-sandbox-config.json`** — Terminal sandboxing configuration with network allowlisting and auto-approval rules
- **`examples/thinking-tokens-demo.md`** — Transcript of Claude agent with extended thinking tokens for debugging complex refactor reasoning
- **`examples/session-handoff-transcript.md`** — Complete conversation showing local → cloud → background agent handoff with context preservation

## Mental Model Shift — Draft Complete

> **The Core Insight:** From **one AI assistant you converse with** to **a team of specialized AI workers you orchestrate**

### Move Toward ✅

- **Parallel Execution**: Run multiple background agents in separate worktrees simultaneously (refactor auth, update docs, improve test coverage) to compress timelines by 2-3x
  *Why:* Human developers benefit from parallelization — AI agents should too

- **Session Handoffs**: Start with local agent for planning, hand off to background for execution, switch to cloud for scaled operations
  *Why:* Different agent types excel at different workflows; seamless context transfer eliminates "explain it again" overhead

- **Visible Reasoning**: Enable Claude thinking tokens to see the AI's hypothesis formation, tool selection logic, and error recovery
  *Why:* Transparency builds trust and helps developers learn new patterns from the AI's approach

- **Domain-Specific Skills**: Create skills for API design, security patterns, observability to capture team knowledge once and apply automatically
  *Why:* Eliminates repetitive prompt engineering; skills serve as living documentation that evolves with codebase

- **Sandboxed Autonomy**: Enable terminal auto-approval for safe commands (git, npm workspace scripts) while sandboxing blocks system access
  *Why:* Reduces "prompt fatigue" (clicking approve 50 times) without sacrificing security

### Move Away From ⚠️

- **Single-Agent Everything**: Stop using one agent for planning, implementation, testing, and documentation
  *Why:* Context overflow and mediocre results; specialized agents with isolated contexts perform better

- **Workspace Inline Changes**: Avoid having agents edit active workspace directly during multi-hour autonomous tasks
  *Why:* Merge conflicts, disrupted work, and difficult rollback; worktree isolation prevents these issues

- **Blind Command Execution**: Stop approving terminal commands without understanding intent or seeing working directory
  *Why:* Risk of accidental system damage or credential exposure; modern UX shows command context inline

- **Per-Developer Customization**: Stop having each team member configure their own custom instructions differently
  *Why:* Inconsistent AI guidance leads to code review friction; org-level customization enforces standards

### Move Against 🛑

- **Unsandboxed Autonomous Agents**: Never run background agents with full system access and network unrestricted
  *Why:* Security nightmare — agents could exfiltrate credentials, access production databases, or damage system files

- **Context Dumping**: Never paste entire codebase into one agent conversation expecting coherent output
  *Why:* Guaranteed context overflow and hallucinations; use codeSearch, targeted file attachments, and subagents instead

- **Ignoring Thinking Tokens**: Never disable extended thinking for complex architectural decisions
  *Why:* Loses the ability to debug flawed AI reasoning; transparency is critical for trust and learning

- **Manual Agent Coordination**: Never manually copy-paste context between agents when you need specialized subtasks
  *Why:* Subagent invocation handles this automatically with proper context isolation

## Major Section 1: Multi-Agent Orchestration

**Section Name:** Multi-Agent Orchestration Architecture

**Key Talking Points:**

1. **Agent Session Types**: VS Code now supports four agent types optimized for different workflows:
   - Local agents (interactive, real-time conversation in Chat view)
   - Background agents (autonomous, runs in isolated worktree, continues when session closed)
   - Cloud agents (GitHub-hosted, massive scale for cross-repo operations)
   - Claude agents (Anthropic SDK, extended thinking for complex reasoning)

2. **Session Lifecycle**: Agents are stateful, resumable conversations with persistent IDs. Background agents continue running even when VS Code closes; developers can switch back anytime to review progress or provide input.

3. **Context Isolation via Subagents**: Custom agents can invoke other agents as subagents with isolated context windows. Prevents "context pollution" where earlier conversation details interfere with current subtask.

4. **Agent HQ Interface**: Unified management view shows all active sessions with status indicators (in-progress, unread, needs attention). Developers can filter by agent type, switch between sessions, and hand off work seamlessly.

5. **Typical Workflow Pattern**:
   ```
   Developer: "Migrate legacy auth to OAuth 2.0"
   Local Plan Agent: [analyzes codebase, asks questions, proposes plan]
   Developer: "Approved" → Click "Continue in Background"
   Background Agent: [creates worktree, implements changes per service, commits per turn]
   Developer: [continues other work in parallel]
   Background Agent: "Migration complete, 30 services updated, all tests passing"
   Developer: [reviews worktree diff, applies to main workspace]
   ```

**Artifacts in This Section:**
- `workflows/multi-agent-refactor.md` — Complete step-by-step orchestration example
- Image: `all-sessions.png` — Agent HQ side-by-side view
- Image: `agentsessions-trimmed.png` — File changes in agent session
- Image: `session-type-picker-continue.png` — Handoff interface

**Opening Narrative (2-3 sentences):**
When developers hear "multi-agent system," they often imagine complex coordination logic and brittle message passing. VS Code's approach is radically simpler: agents are just conversations with different execution contexts. Local agents run in your Chat view for interactive planning; background agents run autonomously in isolated Git worktrees; cloud agents leverage GitHub's infrastructure for scale. The "orchestration" is session handoffs with preserved context — no custom frameworks required.

## Major Section 2: Git Worktree Isolation

**Section Name:** Background Agents with Git Worktree Isolation

**Key Talking Points:**

1. **The Workspace Conflict Problem**: Traditional autonomous agents edit files directly in the main workspace, causing merge conflicts when developers are actively working. Rollback is risky (what if you want *some* changes but not others?).

2. **How Worktrees Solve This**: VS Code automatically creates a Git worktree for background agent sessions. The agent operates in complete isolation — changes are committed per turn to the worktree but never touch the main workspace until you explicitly apply them.

3. **Worktree Structure**:
   ```
   .
   ├── main-workspace/          # Your active development
   └── .git/worktrees/
       ├── copilot-session-1/   # First background agent
       │   └── feature-a/
       └── copilot-session-2/   # Second background agent
           └── refactor-b/
   ```

4. **Review & Apply Workflow**: After background agent completes work, developers see a diff view comparing worktree against main workspace. Options: apply all changes, cherry-pick specific files, or discard entirely. No risk to active work.

5. **Parallel Execution**: Multiple background agents can run simultaneously in separate worktrees without conflicts. Example: Agent 1 refactors authentication while Agent 2 updates documentation while Agent 3 improves test coverage — all in parallel.

**Artifacts in This Section:**
- Image: `filechanges.png` — Worktree file changes visualization
- Image: `background_attachments.png` — Context attachments in background session
- Example: `examples/worktree-workflow.sh` — Script demonstrating worktree creation and management

**Opening Narrative:**
The #1 frustration with autonomous AI agents is simple: they mess up your workspace. You're in the middle of debugging a tricky edge case, and suddenly the agent has refactored the module you're working on, breaking your mental model and your debugger breakpoints. Git worktrees eliminate this problem entirely — background agents operate in parallel universes that don't touch your active development until you explicitly merge them back.

## Major Section 3: Terminal Sandboxing & Security

**Section Name:** Terminal Sandboxing and Security Controls

**Key Talking Points:**

1. **The Unsafe Automation Problem**: Autonomous agents need to run terminal commands (npm install, database migrations, test suites), but without constraints, they could accidentally: delete system files (rm -rf /), expose credentials (cat ~/.ssh/id_rsa), or access production databases.

2. **OS-Level Sandboxing**: VS Code uses native OS security primitives (sandbox-exec on macOS, Landlock/seccomp on Linux) to restrict agent-executed commands:
   - File system: Read/write only within workspace directory
   - Network: Blocked by default, specific domains can be allowlisted (npmjs.com, github.com)
   - Prevents: System modifications, credential access, production database connections

3. **Auto-Approval Rules**: Developers can configure which commands auto-approve (safe, predictable operations) vs. require confirmation (destructive, system-level changes):
   - Auto-approve: git status, npm run workspace scripts, docker ps
   - Require confirmation: rm -rf, sudo, database writes, network requests

4. **Enhanced Command UX**: Terminal tool calls now show:
   - Inline syntax highlighting (Python/JavaScript code appears styled)
   - Working directory display (shows where command runs)
   - Command intent hover (explains why agent chose this command)
   - Timeout property (prevents hung processes)

5. **Configuration Example**:
   ```json
   {
     "chat.tools.terminal.sandbox.enabled": true,
     "chat.tools.terminal.sandbox.network": ["github.com", "npmjs.com"],
     "chat.tools.terminal.enableAutoApprove": true,
     "chat.tools.terminal.autoApproveWorkspaceNpmScripts": true
   }
   ```

**Artifacts in This Section:**
- `examples/terminal-sandbox-config.json` — Complete sandboxing configuration with network rules
- Image: `terminal-python-presenter.png` — Inline syntax highlighting in terminal
- Image: `terminal-tool-cd-presentation.png` — Working directory visualization
- Image: `terminal-tool-goal.png` — Command intent hover

**Opening Narrative:**
"Just let the AI run commands automatically" sounds efficient until the first disaster. Production database wiped. SSH keys sent to a log aggregator. System Python broken by a wayward pip install. Terminal sandboxing brings sanity to agent autonomy: agents get the freedom to execute workflows without constant approval prompts, but OS-level restrictions guarantee they can't escape the workspace sandbox.

## Major Section 4: Agent Skills & Organization Customization

**Section Name:** Agent Skills and Organization-Wide Customization

**Key Talking Points:**

1. **The Repetitive Prompting Problem**: Every developer on a team ends up writing similar custom instructions: "always use TypeScript strict mode," "follow our API versioning standard," "include OpenAPI specs for new endpoints." This leads to inconsistency when developers phrase instructions differently.

2. **Agent Skills Architecture**: Skills are folders containing `SKILL.md` files with instructions, templates, and supporting scripts. Agents load skills on-demand when the task matches the skill's description. Default locations: `.github/skills/`, `~/.copilot/skills/`

3. **Skill Structure**:
   ```markdown
   ---
   # .github/skills/api-design/SKILL.md
   description: |
     Guides developers in designing RESTful APIs following
     organizational standards for versioning, authentication, error handling
   ---

   # API Design Skill

   When designing new API endpoints:
   1. Use `/api/v{major}/{resource}` URL structure
   2. Include OpenAPI spec in `docs/openapi/`
   3. Implement rate limiting via `@RateLimit(...)` decorator
   4. Use standard error codes from `common/errors.ts`

   ## Templates
   [Include code templates for controllers, DTOs, tests]
   ```

4. **Organization-Level Custom Agents**: GitHub organizations can define `.agent.md` files and `copilot-instructions.md` that automatically apply to all developers in the org. Ensures consistency in code style, architecture patterns, and tool usage across 100+ team members.

5. **Skill Discovery**: Agents automatically scan configured skill locations. When a developer asks "add pagination to the API," the agent detects the API design skill is relevant, loads the full instructions, and applies organizational standards automatically.

**Artifacts in This Section:**
- `skills/api-design/SKILL.md` — Complete skill with templates and validation
- `agents/architect.agent.md` — Custom agent definition with skill integration
- Image: `configure-skills.png` — Configure Skills UI
- Image: `chat-customization-diagnostics.png` — Diagnostics view for customization

**Opening Narrative:**
The best development teams codify their practices — API design standards, security checklist templates, architectural decision records. But these documents sit in wikis gathering dust while developers ask AI for help and get generic advice. Agent Skills flip this dynamic: capture your team's expertise once in a skill definition, and every AI agent in the organization automatically applies those patterns. It's living documentation that actually gets used.

## Major Section 5: Claude Integration with Extended Thinking

**Section Name:** Anthropic Claude with Visible Reasoning Tokens

**Key Talking Points:**

1. **The Black Box Problem**: Traditional AI code generation works or doesn't — when it fails, developers can't see *why* the approach went wrong. Was the codebase understanding incorrect? Did the agent miss a critical constraint? No visibility into reasoning.

2. **Extended Thinking Tokens**: Claude models can now allocate internal "thinking tokens" (default 4,000, configurable up to 10,000+) to work through complex problems before producing output. VS Code surfaces these thinking tokens in real-time with shimmer animations showing active reasoning.

3. **What Thinking Shows**:
   - Hypothesis formation: "I need to understand the call graph first..."
   - Tool selection reasoning: "Using codeSearch to find all usages..."
   - Error recovery: "That didn't work, trying alternative approach by checking interfaces..."
   - Architecture analysis: "This system uses dependency injection, so I'll need to update the service container..."

4. **Configuration**:
   ```json
   {
     "github.copilot.chat.anthropic.thinking.budgetTokens": 10000,
     "chat.thinking.style": "detailed", // or "compact"
     "chat.agent.thinking.collapsedTools": ["terminal", "search"],
     "chat.tools.autoExpandFailures": true
   }
   ```

5. **Impact on Quality**: Anthropic benchmarks show extended thinking improves accuracy on complex tasks (architectural decisions, multi-file refactors, security analysis) by 30-40%. Developers report higher trust in AI suggestions when they can follow the reasoning process.

**Artifacts in This Section:**
- `examples/thinking-tokens-demo.md` — Transcript of Claude reasoning through complex refactor
- Image: `chat-mermaid.png` — Thinking tokens with detailed/compact styles
- Configuration: `config/claude-settings.json` — Extended thinking configuration

**Opening Narrative:**
Imagine debugging a coworker's code change by reading their commit message versus watching them explain their thought process in a code review. The latter gives you confidence, teaches you their mental model, and helps you spot flawed assumptions. Claude's extended thinking does this for AI code generation — you see the hypotheses, the tool choices, the pivots when something doesn't work. It transforms AI from a mysterious oracle to a transparent collaborator.

## Major Section 6: Agent Session Management

**Section Name:** Unified Agent Session Management

**Key Talking Points:**

1. **Multi-Agent Coordination Challenge**: With local, background, cloud, and Claude agents running simultaneously, developers need visibility into: which agents are active, what they're working on, when they need input, how to switch between sessions without losing context.

2. **Agent Sessions View**: Integrated into Chat view with two display modes:
   - Compact mode: Shows 3 most recent sessions when Chat view is narrow
   - Side-by-side mode: Full session list with filters when Chat view is wide

3. **Session Status Indicators** (visible in VS Code command center):
   - In-progress: Agent actively executing
   - Unread: Agent completed work, developer hasn't reviewed
   - Needs attention: Agent waiting for user input (clarifying question, approval)

4. **Session Handoff Workflow**: "Continue in..." buttons enable seamless transfers:
   - Local → Background: Move from planning to autonomous execution
   - Local → Cloud: Scale to cross-repo operations
   - Background → Local: Bring autonomous work back for interactive refinement

5. **Context Preservation**: Handoffs preserve full conversation history, attached files, prior tool calls, and model state. No "explain it again" required when switching agent types.

**Artifacts in This Section:**
- Image: `recent-sessions.png` — Compact mode recent sessions
- Image: `all-sessions.png` — Side-by-side full session view
- Image: `agent-picker.png` — Agent type picker interface
- Example: `examples/session-handoff-transcript.md` — Complete handoff conversation

**Opening Narrative:**
Orchestrating multiple agents isn't useful if you can't see what they're doing. The Agent Sessions view brings sanity to multi-agent development: a unified interface showing every active conversation, what it's working on, and whether it needs your attention. The killer feature is session handoff — start a conversation in local mode for planning, click "Continue in Background" to let it execute autonomously while you move to the next task. Your context moves with you.

## Decision Tree

### When to Use Multi-Agent Orchestration

```
Start Here: Do you need AI assistance?
│
├─ Single File Edit (< 50 lines)
│  → Use: Inline chat (Ctrl+I) or Copilot completions
│     Why: Fastest for localized changes, no orchestration overhead
│
├─ Multi-File Refactor (5-20 files, clear scope)
│  → Use: Local chat agent with /workspace context
│     Why: Interactive refinement, straightforward enough for single session
│
├─ Large-Scale Refactor (20+ files, hours of work)
│  → Use: Plan agent → Background agent in worktree
│     Why: Parallel execution, workspace isolation, resumable
│
├─ Complex Architectural Decision
│  → Use: Claude agent with extended thinking enabled
│     Why: Visible reasoning for complex tradeoffs, better quality
│
├─ Team Standardization (consistent patterns across devs)
│  → Use: Organization-level custom agents + Agent Skills
│     Why: Enforces consistency automatically, living documentation
│
└─ High Security Risk (production systems, credentials)
   → Use: Terminal sandboxing + auto-approval rules
      Why: Prevents accidental system damage or credential exposure
```

**Use When:**
- Task spans 20+ files or multiple components
- Autonomous execution would save hours of manual work
- Workspace isolation needed (ongoing development can't be disrupted)
- Team needs consistent AI guidance on standards
- Terminal commands required but security is critical

**Don't Use When:**
- Quick edits contained in 1-2 files (inline chat is faster)
- Exploratory problem-solving with unclear requirements (local interactive agent better)
- Task requires constant user input every 2-3 turns (defeats autonomous benefit)
- Team unfamiliar with Git worktrees and uncomfortable with the abstraction

## Real-World Use Cases

### Use Case 1: Migrating Legacy Authentication System

**Scenario:** E-commerce company needs to migrate from custom JWT implementation to OAuth 2.0 across 30+ microservices within 2 weeks

**Complexity Level:** Advanced

**Capabilities Used:**
- Custom agent (@architect) for migration planning and dependency analysis
- Background agents in worktrees for per-service migration
- Terminal sandboxing for running integration tests safely
- Agent Skills for OAuth best practices

**Workflow:**
1. Developer: "@architect analyze our auth system and propose migration to OAuth 2.0"
2. Architect agent: Uses codeSearch to map JWT usages, analyzes service dependencies, proposes migration order with rollback strategy
3. Developer approves plan, creates skill from OAuth patterns
4. Developer: "Migrate Service A" → Continue in Background
5. Background agent: Creates worktree, migrates Service A, runs tests, commits
6. Developer reviews Service A changes, merges to main
7. Repeat for remaining 29 services (parallelizable with multiple background agents)

**Measurable Outcome:**
- Time: 8 weeks → 1.5 weeks (80% reduction)
- Consistency: 100% services use identical OAuth patterns (captured in skill)
- Safety: Terminal sandboxing prevented test failures from affecting production databases

### Use Case 2: Adding Observability to Existing Codebase

**Scenario:** Startup with 50K LOC needs distributed tracing and structured logging before Series A fundraising demo

**Complexity Level:** Intermediate

**Capabilities Used:**
- Agent Skills for OpenTelemetry instrumentation patterns
- Background agent with worktree isolation
- Terminal tool for installing dependencies and running smoke tests
- Subagents for documentation updates

**Workflow:**
1. Developer defines "observability" skill with OpenTelemetry patterns, logger configuration
2. Developer: "Add OpenTelemetry tracing and structured logging to all API endpoints"
3. Background agent: Installs deps, instruments controllers, updates tests, generates dashboards
4. Commits per module: "Add tracing to UserController", "Add logging to AuthService"
5. Developer reviews each commit, merges incrementally

**Measurable Outcome:**
- Coverage: 100% of API endpoints instrumented (vs. 60% manual target)
- Time: 3 days vs. projected 2 weeks
- Quality: Consistent instrumentation patterns across all modules (from skill)

### Use Case 3: Multi-Repo Documentation Standardization

**Scenario:** Enterprise with 200 microservices needs consistent README format, API docs, and architecture diagrams

**Complexity Level:** Beginner

**Capabilities Used:**
- Organization-level custom agent (@doc-writer)
- Agent Skills with documentation templates
- MCP GitHub Server for cross-repo operations

**Workflow:**
1. Define org-level custom agent "@doc-writer" with template instructions
2. Developer runs "@doc-writer standardize docs for this repo" in each service
3. Agent generates: README.md (standard sections), API.md (from OpenAPI specs), ARCHITECTURE.md (auto-generated Mermaid)
4. Changes committed to PR, reviewed by tech writer
5. Process repeated across all 200 repos (parallelizable via cloud agents)

**Measurable Outcome:**
- Consistency: 100% repos follow same documentation structure (previously 40%)
- Onboarding: New developers report 60% faster understanding of services
- Maintenance: Org-level agent updates propagate to all repos automatically

### Use Case 4: Security Vulnerability Remediation

**Scenario:** Critical CVE discovered in logging library used by 40 services, must patch within 24 hours

**Complexity Level:** Intermediate

**Capabilities Used:**
- Terminal sandboxing for running vulnerability scans
- Background agents with worktree isolation
- Agent Skills for security patching patterns
- Parallel agent execution across multiple services

**Workflow:**
1. Developer: "Find all usages of vulnerable-logger@1.x, upgrade to 2.x, fix breaking changes"
2. Background agent 1: Scans service-a, finds usages, upgrades, runs tests (in worktree)
3. Background agent 2: Simultaneously handles service-b (separate worktree)
4. Agents create PRs with: dependency update, code fixes, test confirmations
5. Developer spot-checks PRs, approves automated merge
6. All 40 services patched within 8 hours

**Measurable Outcome:**
- Speed: 8 hours vs. projected 40 hours (5x faster)
- Safety: Terminal sandboxing prevented test suite from accessing production secrets during dry runs
- Confidence: Automated tests verified each patch before merge

### Use Case 5: Feature Flag Removal Campaign

**Scenario:** SaaS company has 200+ feature flags after 3 years, needs to remove obsolete flags to reduce technical debt

**Complexity Level:** Intermediate

**Capabilities Used:**
- Custom agent (@cleanup) specialized in technical debt removal
- Codebase search (codeSearch) for flag usage analysis
- Background agents with worktree isolation
- Claude extended thinking for tricky conditional logic

**Workflow:**
1. Developer loads list of obsolete feature flags from LaunchDarkly
2. Developer: "@cleanup remove feature flag 'new_checkout_flow' (enabled for 100% users for 6 months)"
3. Agent uses codeSearch to find all usages across 15 files
4. Claude extended thinking analyzes conditional branches: "If flag is always true, simplify to just the if-branch..."
5. Background agent refactors all usages, removes flag constant, updates tests
6. Commits each simplified file separately for easier review

**Measurable Outcome:**
- Debt Reduction: 200 flags → 50 flags in 3 weeks
- Code Quality: Removed 4,000 lines of dead code paths
- Maintainability: Simplified control flow improved readability scores by 35%

## References Plan

Map numbered references from research.md to the sections where they should be cited:

| Ref # | Source Title | Cite In Sections |
|-------|-------------|------------------|
| [^1] | VS Code Updates: January 2026 (v1.109) | Introduction, Terminal Sandboxing, Claude Integration, Session Management |
| [^2] | VS Code Updates: December 2025 (v1.108) | Agent Skills, Terminal UX |
| [^3] | VS Code Updates: November 2025 (v1.107) | Multi-Agent Orchestration, Worktrees, Org Customization |
| [^4] | GitHub Copilot in VS Code: Official Documentation | Getting Started, Core Concepts |
| [^5] | GitHub Blog: Copilot in VS Code v1.109 | Claude Integration, Thinking Tokens |
| [^6] | InfoWorld: Visual Studio Code Adds Multi-Agent Orchestration | Problem Statement, Industry Context |
| [^7] | Anthropic: Claude's Extended Thinking | Claude Integration section, Technical Details |
| [^8] | VS Code Multi-Agent Orchestration Guide | Multi-Agent Orchestration, Workflow Examples |
| [^9] | Microsoft Learn: Multi-Agent Patterns | Architecture section, Best Practices |
| [^10] | DEV Community: Sandboxing AI Coding Agents with Devcontainers | Terminal Sandboxing, Security |
| [^11] | NVIDIA Developer Blog: Practical Security Guidance | Terminal Sandboxing, Security Best Practices |
| [^12] | GitHub: AgenticWorkflow | Multi-Agent Orchestration examples |
| [^13] | GitHub: copilot-multi-agent Extension | Community patterns, extensibility |
| [^14] | GitHub Issue: Terminal Sandboxing Discussion | Terminal Sandboxing technical details |
| [^15] | Cursor Documentation: Terminal Agent Controls | Terminal Sandboxing comparison |

## Actionable Checklist (Draft)

### 15 Minutes: Quick Wins

- Enable Agent Skills: Set `"chat.useAgentSkills": true` in VS Code settings
- Try session handoff: Start a conversation in Chat, click "Continue in Background" to see worktree isolation
- Enable thinking tokens: Set `"github.copilot.chat.anthropic.thinking.budgetTokens": 4000` for Claude models

### 1 Hour: Configure Your Environment

- Set up terminal sandboxing (macOS/Linux): Enable `"chat.tools.terminal.sandbox.enabled": true` and configure network allowlist
- Create your first Agent Skill: Package a common team pattern (API design, testing standards) into `.github/skills/`
- Configure auto-approval rules: Enable `"chat.tools.terminal.autoApproveWorkspaceNpmScripts": true` for safe npm commands

### Half Day: Implement Full Multi-Agent Workflow

- Migrate a medium-sized refactor (10-20 files) using plan agent → background agent → worktree review
- Build a custom agent: Define an @architect or @reviewer agent in `.agent.md` with subagent invocation
- Set up org-level customization: If you're an admin, define organization-wide custom instructions for your GitHub org

## Artifact Mapping Table

Map EVERY file from `examples/` and `images/` to a TEMPLATE section:

| Artifact | Type | Section | How It's Used |
|----------|------|---------|---------------|
| `config/multi-agent-settings.json` | Config | Getting Started | Complete configuration enabling all multi-agent features |
| `agents/architect.agent.md` | Agent Definition | Agent Customization | Example custom agent with subagent invocation |
| `skills/api-design/SKILL.md` | Skill | Agent Skills | Package team API design standards |
| `workflows/multi-agent-refactor.md` | Workflow | Multi-Agent Orchestration | Step-by-step orchestration example |
| `examples/terminal-sandbox-config.json` | Config | Terminal Sandboxing | Sandboxing with network rules |
| `examples/thinking-tokens-demo.md` | Transcript | Claude Integration | Claude reasoning demonstration |
| `examples/session-handoff-transcript.md` | Transcript | Session Management | Local → background handoff |
| `all-sessions.png` | Screenshot | Session Management | Agent HQ side-by-side view |
| `agentsessions-trimmed.png` | Screenshot | Multi-Agent Orchestration | File changes in agent session |
| `session-type-picker-continue.png` | Screenshot | Multi-Agent Orchestration | Handoff interface |
| `filechanges.png` | Screenshot | Worktree Isolation | Worktree file changes visualization |
| `background_attachments.png` | Screenshot | Worktree Isolation | Context attachments in background session |
| `terminal-python-presenter.png` | Screenshot | Terminal Sandboxing | Inline syntax highlighting |
| `terminal-tool-cd-presentation.png` | Screenshot | Terminal Sandboxing | Working directory display |
| `terminal-tool-goal.png` | Screenshot | Terminal Sandboxing | Command intent hover |
| `configure-skills.png` | Screenshot | Agent Skills | Configure Skills UI |
| `chat-customization-diagnostics.png` | Screenshot | Agent Customization | Diagnostics view |
| `chat-mermaid.png` | Screenshot | Claude Integration | Thinking tokens visualization |
| `recent-sessions.png` | Screenshot | Session Management | Compact mode sessions |
| `agent-picker.png` | Screenshot | Session Management | Agent type picker |
| `context-window-widget.png` | Screenshot | Advanced Features | Token usage breakdown |
| `ask-questions-ui.png` | Screenshot | Advanced Features | Ask Questions tool carousel |
| `terminal-suggest.png` | Screenshot | Terminal UX | Terminal IntelliSense status bar |

## Gaps & Recommendations

### Missing Examples Phase 3 Should Create:

1. **`examples/worktree-workflow.sh`** — Shell script demonstrating Git worktree creation, background agent execution, and merge workflow (for Worktree Isolation section)

2. **`config/claude-settings.json`** — Complete Claude-specific configuration with extended thinking budgets and thinking style options (for Claude Integration section)

### Content Areas Needing More Depth:

1. **MCP Integration**: Research mentions MCP servers and GitHub MCP Server but doesn't dive deep. Phase 3 should add 1-2 paragraphs on how MCP servers enable agents to interact with external tools (databases, APIs) with specific GitHub MCP Server example.

2. **Copilot Memory**: Mentioned briefly in research but underexplored. Phase 3 should explain how persistent context across sessions works and provide configuration example.

3. **Performance Improvements**: Research mentions "dramatic performance improvements to terminal rendering and chat responsiveness" but no specifics. Phase 3 should quantify (e.g., "50% faster chat response time") if possible from source docs.

### Research Quality Concerns:

None — research quality is excellent with 15 references covering official documentation, industry analysis, community tutorials, and security best practices. All content fitness criteria are 🟢 green.
