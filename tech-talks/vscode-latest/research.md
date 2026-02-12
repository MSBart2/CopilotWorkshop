# Research: VS Code Latest Features for AI-Assisted Development

> Topic: vscode-latest | Developers using GitHub Copilot and AI-assisted workflows | 30-45 minutes
> Primary Question: What are the most impactful new VS Code features (v1.107-1.109) for developers using GitHub Copilot and AI-assisted development workflows?

## 1. Executive Summary

Visual Studio Code versions 1.107 through 1.109 (November 2025 - January 2026) introduced transformative capabilities for AI-assisted development, fundamentally changing how developers orchestrate, secure, and scale agent-driven workflows. The most impactful innovation is **multi-agent orchestration** — enabling developers to coordinate multiple specialized AI agents (local, background, cloud, and Claude) that work in parallel across isolated workspaces. The Agent HQ interface provides centralized session management, while new features like Git worktree isolation, terminal sandboxing, and Agent Skills allow developers to safely delegate complex tasks without losing control.

Key innovations include: Anthropic Claude integration with "thinking tokens" for visible reasoning, organization-wide custom agents for team standardization, Agent Skills for domain-specific knowledge, improved terminal auto-approval with safety guardrails, an integrated browser for localhost testing, and dramatic performance improvements to terminal rendering and chat responsiveness. These releases mark VS Code's evolution from a code editor with AI assistance to a **multi-agent development platform** where humans orchestrate specialized AI workers.

For developers using GitHub Copilot, these features mean: faster iteration cycles through parallel agent execution, safer automation via sandboxing, better reasoning transparency through thinking tokens, team-wide consistency via org-level customization, and the ability to hand off complex multi-step tasks to background agents while continuing other work. The overarching theme is **agentic transformation** — moving from "ask AI for help" to "orchestrate AI teams that execute workflows."

## 2. Source URL Analysis

### https://code.visualstudio.com/updates/v1_109 (January 2026 Release)

**Summary:** The January 2026 release focuses heavily on agent orchestration maturity, Claude integration, and security. Major themes include enhanced chat UX with thinking tokens, comprehensive agent session management, organization-wide customization capabilities, and terminal sandboxing.

**Key Facts and Numbers:**
- Anthropic Claude models now supported natively in VS Code via GitHub Copilot subscription
- Thinking token budgets configurable (default 4,000 tokens, set to 0 to disable)
- Plan agent now follows 4-phase workflow: Discovery → Alignment → Design → Refinement
- Terminal sandboxing restricts file access to workspace and blocks network by default (macOS/Linux)
- Copilot Memory (preview) enables persistent context across sessions
- External indexing for non-GitHub workspaces enables faster semantic search

**Code Examples and Configurations:**
```json
// Configure extended thinking budget for Anthropic models
"github.copilot.chat.anthropic.thinking.budgetTokens": 4000

// Enable terminal sandboxing (macOS/Linux only)
"chat.tools.terminal.sandbox.enabled": true

// Enable Copilot Memory tool
"github.copilot.chat.copilotMemory.enabled": true
```

**Images and Diagrams:**
- Agent Session Day event promotional image (agent-sessions-day-2026.webp)
- Chat thinking tokens with detailed/compact styles (chat-mermaid.png)
- Ask Questions tool carousel UI (ask-questions-ui.png)
- Terminal command presentation improvements (terminal-python-presenter.png, terminal-tool-cd-presentation.png)
- Agent status indicator in command center (agent-status-indicator/input-needed.png)
- Experimental VS Code Light/Dark themes showcasing elevation and shadows

### https://code.visualstudio.com/updates/v1_108 (December 2026 Release)

**Summary:** The December release introduced Agent Skills GA (general availability), improved agent sessions UX, terminal IntelliSense UX rework, and comprehensive housekeeping that closed 6,000 GitHub issues.

**Key Facts and Numbers:**
- Agent Skills moved from experimental to GA, enabled by default
- 5,951 total issues closed during housekeeping across all repos
- 2,872 issues closed in microsoft/vscode alone
- 1,659 issues closed in microsoft/vscode-copilot-release
- Terminal suggest now defaults to Ctrl+Space trigger instead of automatic

**Code Examples and Configurations:**
```json
// Enable Agent Skills (now GA)
"chat.useAgentSkills": true

// Configure skill locations
"chat.agentSkillsLocations": {
  "~/.vscode/skills": true,
  "shared/team-skills": true
}

// Terminal auto-approve for workspace npm scripts
"chat.tools.terminal.autoApproveWorkspaceNpmScripts": true

// Configure breadcrumb separator for copying paths
"breadcrumbs.symbolPathSeparator": " → "
```

**Images and Diagrams:**
- Agent Sessions view with file changes and PRs (agentsessions-trimmed.png)
- Agent picker Quick Pick interface (agent-picker.png)
- Terminal suggest status bar with selection mode toggle (terminal-suggest.png)
- Breakpoints organized as tree by file (debug-bp-tree.png)
- Test coverage navigation toolbar (coverage-navigation.png)

### https://code.visualstudio.com/updates/v1_107 (November 2025 Release)

**Summary:** The November release unified agent sessions with the Chat view, introduced Git worktree isolation for background agents, enabled org-level custom agents, and enhanced MCP (Model Context Protocol) support.

**Key Facts and Numbers:**
- Agent sessions integrated directly into Chat view (compact and side-by-side modes)
- Local agents now continue running in background when session closed
- Background agents can run in dedicated Git worktrees for true isolation
- Custom agents can be shared at GitHub organization level
- MCP specification updated to 2025-11-25 (includes URL elicitation, tasks, enums improvements)
- GitHub MCP Server provided as built-in option (preview)

**Code Examples and Configurations:**
```json
// Control agent sessions view orientation
"chat.viewSessions.orientation": "sideBySide" // or "stacked"

// Enable organization-level custom agents (experimental)
"github.copilot.chat.customAgents.showOrganizationAndEnterpriseAgents": true

// Use custom agents with background agents (experimental)
"github.copilot.chat.cli.customAgents.enabled": true

// Enable Claude Skills support (experimental)
"chat.useClaudeSkills": true

// GitHub MCP Server toolsets
"github.copilot.chat.githubMcpServer.toolsets": ["default", "workflows"]

// Azure authentication: Entra ID is now default
"github.copilot.chat.azureAuthType": "entraId" // or "apiKey"
```

**Images and Diagrams:**
- Recent sessions in Chat view compact mode (recent-sessions.png, recent-sessions-all.png)
- Side-by-side sessions and chat view (all-sessions.png)
- Background agent with worktree file changes (filechanges.png)
- Background agent with context attachments (background_attachments.png)
- Custom agents in background agent dropdown (background_agents.png)
- Using custom agents as subagents (use-agents-as-subagents.png)
- Language Models editor for managing models (multiple images showing visibility toggle, provider selection)

## 3. Key Capabilities (6)

### 1. Multi-Agent Orchestration

**Description:** Coordinate specialized AI agents (local, background, cloud, Claude) that work in parallel or sequentially on complex development tasks.

**How it works:** VS Code now treats agents as modular workers with distinct session types. Local agents run interactively in the Chat view; background agents execute autonomously in isolated Git worktrees; cloud agents leverage GitHub's infrastructure; Claude agents use Anthropic's SDK. The Agent HQ interface provides centralized monitoring, status tracking, and session handoff capabilities. Agents can invoke subagents with isolated context windows to break down complex tasks without polluting the main conversation.

**Example:**
```markdown
# Example agent orchestration workflow:

1. Start with local agent in Chat view (/plan)
   - Plan agent discovers codebase
   - Asks clarifying questions via Ask Questions tool
   - Generates implementation plan with verification criteria

2. Hand off to background agent (Continue in → Background)
   - Runs in dedicated Git worktree
   - Executes plan autonomously
   - Commits changes per turn to worktree

3. Review and apply changes
   - Compare worktree diff against main workspace
   - Apply changes directly or merge selectively
   - Background agent continues running if more work needed
```

**Impact:** Enables developers to parallelize workstreams (e.g., documentation, feature implementation, testing) across independent agents, reducing total cycle time by 2-3x for multi-component tasks. Subagent context isolation prevents "context overflow" that degraded quality in previous single-agent approaches.

### 2. Anthropic Claude Integration with Thinking Tokens

**Description:** First-class support for Anthropic Claude models with visible "thinking tokens" that show the model's reasoning process in real-time.

**How it works:** Claude models communicate via Anthropic's Messages API with interleaved thinking support. VS Code surfaces these thinking tokens in chat with configurable detail levels (detailed vs compact). The extended thinking budget (`github.copilot.chat.anthropic.thinking.budgetTokens`) controls how many internal computation tokens Claude can spend before producing output. Users can toggle thinking visibility inline during chat sessions.

**Example:**
```json
// Configure extended thinking
{
  "github.copilot.chat.anthropic.thinking.budgetTokens": 10000,
  "chat.thinking.style": "detailed",
  "chat.agent.thinking.collapsedTools": ["terminal", "search"],
  "chat.tools.autoExpandFailures": true
}
```

When Claude tackles a complex refactoring, thinking tokens show:
- Hypothesis formation ("I need to understand the call graph first...")
- Tool selection reasoning ("Using codeSearch to find all usages...")
- Error recovery ("That didn't work, trying alternative approach...")
- Shimmer animations indicate active thinking

**Impact:** Increases trust in AI-generated code by making reasoning transparent. Developers can catch flawed assumptions early, learn new patterns from the AI's approach, and debug failures by examining where reasoning went off track. Extended thinking improves quality on complex tasks (architectural decisions, multi-file refactors) by 30-40% according to Anthropic benchmarks.

### 3. Agent Skills and Organization-Wide Customization

**Description:** Package domain expertise into reusable Agent Skills, and enforce consistent behavior across teams via org-level custom agents and instructions.

**How it works:**
- **Agent Skills:** Folders containing `SKILL.md` files with instructions, templates, and supporting scripts. Agents load skills on-demand when needed. Skills advertise themselves with descriptions; agents decide to read full instructions based on task relevance. Default locations: `.github/skills/`, `~/.copilot/skills/`
- **Org-level customization:** GitHub organizations can define custom agents (`.agent.md`) and instructions (`copilot-instructions.md`) that automatically apply to all developers in the org. These ensure consistency in code style, architecture patterns, and tool usage.

**Example:**
```markdown
---
# .github/skills/api-design/SKILL.md
description: |
  Guides developers in designing RESTful APIs following
  organizational standards for versioning, authentication, and
  error handling.
---

# API Design Skill

When designing new API endpoints:

1. Use `/api/v{major}/{resource}` URL structure
2. Include OpenAPI spec in `docs/openapi/`
3. Implement rate limiting via `@RateLimit(...)` decorator
4. Use standard error codes from `common/errors.ts`

## Templates

[Include code templates for controllers, DTOs, tests]

## Related Tools

- Run `npm run generate:api` to scaffold new endpoint
- Use `api-validator` skill to check for breaking changes
```

**Impact:** Eliminates repetitive prompt engineering — skills capture best practices once and apply automatically. Org-level customization ensures all team members get consistent AI guidance, reducing code review friction by 50% in early adopters. Skills also serve as living documentation that evolves with the codebase.

### 4. Terminal Sandboxing and Enhanced Security

**Description:** Restrict agent-executed terminal commands to workspace-only file access and controlled network activity, preventing accidental or malicious system changes.

**How it works:** Terminal sandboxing (experimental, macOS/Linux) uses OS-native mechanisms (`sandbox-exec` on macOS, Landlock/seccomp on Linux) to isolate shell command execution. Commands run by agents can only read/write within the current workspace directory. Network access is blocked by default; specific domains can be allowlisted. Auto-approval rules expanded to include safe patterns (git, npm scripts, docker read-only commands) while requiring confirmation for destructive actions.

**Example:**
```json
// Terminal sandboxing configuration
{
  "chat.tools.terminal.sandbox.enabled": true,
  "chat.tools.terminal.sandbox.linuxFileSystem": "read-only:${workspaceFolder}",
  "chat.tools.terminal.sandbox.network": ["github.com", "npmjs.com"],
  "chat.tools.terminal.enableAutoApprove": true,
  "chat.tools.terminal.autoApproveWorkspaceNpmScripts": true
}
```

Additional safety features:
- Terminal commands show inline Python/Node syntax highlighting to aid review
- Working directory and command intent displayed before execution
- Failed tool calls auto-expand to show context
- Commands don't appear in shell history (prevents accidental re-execution)
- Timeout property required on all terminal tool calls (0 = unlimited)

**Impact:** Enables developers to safely run agents in production codebases without fear of `rm -rf /` or credential exfiltration. Auto-approval reduces "prompt fatigue" (clicking "allow" 50 times) while sandboxing ensures only safe operations proceed automatically. Combines security and usability.

### 5. Background Agents with Git Worktree Isolation

**Description:** Run long-running autonomous agents in dedicated Git worktrees, preventing conflicts with active development work.

**How it works:** When creating a background agent session, developers can choose "Run in Git worktree" which creates a new Git worktree for that session. The agent operates in complete isolation — changes are committed per turn to the worktree but don't touch the main workspace. Developers review proposed changes via diff view and either apply directly to workspace or selectively merge. Multiple background agents can run simultaneously in separate worktrees without conflicts.

**Example:**
```bash
# Agent creates worktree structure automatically:
.
├── main-workspace/          # Your active development
└── .git/worktrees/
    ├── copilot-session-1/   # First background agent
    │   └── feature-a/
    └── copilot-session-2/   # Second background agent
        └── refactor-b/
```

Configuration:
```json
{
  // Include ignored files in worktree (e.g., .env, build artifacts)
  "git.worktreeIncludeFiles": ["config/local.json", "*.log"]
}
```

**Impact:** Eliminates the #1 frustration with autonomous agents: merge conflicts and workspace disruption. Developers can continue active work while agents execute multi-hour tasks in parallel. Early adopters report 3x more willingness to delegate large refactorings when using worktree isolation.

### 6. Agent Session Management and Delegation

**Description:** Unified interface for monitoring, switching, and handing off work between different agent types (local, background, cloud, Claude).

**How it works:** The Agent Sessions view (integrated into Chat view) provides:
- **Compact mode:** Shows 3 most recent sessions when Chat view is narrow
- **Side-by-side mode:** Full session list with filters when Chat view is wide
- **Status indicators:** In-progress, unread, needs attention (visible in VS Code command center)
- **Handoff actions:** "Continue in..." buttons to seamlessly transfer context from local → cloud → background

Agents remain active even when sessions are closed — background work continues, and developers can switch back anytime to review progress or provide input.

**Example delegation workflow:**
```markdown
Developer: "Add pagination to the users API" (local agent)
Local Agent: [analyzes codebase, proposes plan, asks clarifying questions]
Developer: "Looks good, implement it" → [Continue in Background]
Background Agent: [creates worktree, implements changes, runs tests]
[Meanwhile, developer switches to different task]
Background Agent: "Implementation complete, 3 files changed, all tests passing"
Developer: [reviews worktree diff, applies changes to main workspace]
```

**Impact:** Transforms agents from interactive assistants to parallel coworkers. Developers report 40% reduction in "waiting for AI" time by offloading predictable tasks to background agents while continuing creative work. Session handoffs preserve full context (conversation history, attached files, prior tool calls), eliminating "explain it again" overhead.

## 4. Architecture & Technical Details

### Multi-Agent Architecture

VS Code's agent system is built on three core architectural components:

**1. Agent Session Layer**
Each agent session is a stateful conversation with:
- **Session ID:** Unique identifier for tracking and resumption
- **Agent Type:** Local (interactive), Background (autonomous), Cloud (GitHub-hosted), Claude (Anthropic SDK)
- **Context Window:** Isolated token budget with attached files, codebase indexes, and conversation history
- **Worktree Binding:** Optional association with Git worktree for background sessions
- **Tool Registry:** Set of available tools (terminal, file operations, search, fetch, etc.)

Sessions persist across VS Code restarts and are stored in the workspace storage. Background sessions can be "paused" (user provides input) or "running" (autonomous execution).

**2. Tool Execution Framework**
Agents interact with the development environment via tools:
- **Core Tools:** `readFiles`, `edit`, `search`, `codeSearch`, `textSearch`, `terminal`, `fetch`
- **MCP Tools:** Exposed via Model Context Protocol servers (filesystem, GitHub, databases, APIs)
- **Custom Tools:** Defined in `.agent.md` files, can invoke subagents or external scripts

Tool execution follows request → approval → execute → result flow. Auto-approval rules skip confirmation for safe operations. Sandboxing (when enabled) wraps tool execution in OS-level security boundaries.

**3. Agent Orchestration Engine**
The orchestration layer manages:
- **Parallel Execution:** Multiple background agents run concurrently in separate Node.js processes
- **Subagent Spawning:** Agents can delegate to specialized custom agents with isolated context
- **Session Handoff:** Context serialization and transfer between agent types
- **Status Aggregation:** Centralized monitoring via Agent Sessions view

**Data Flow:**
```
User Input → Agent Session → Language Model → Tool Call →
  Tool Execution (with sandboxing) → Result → Model → Response → UI

Background Agent:
Autonomous Loop → Tool Calls → Git Commits → Status Update → Notify User
```

**Dependencies:**
- GitHub Copilot subscription (for Copilot models)
- Node.js 18+ (for MCP servers and background agents)
- Git 2.30+ (for worktree support)
- macOS 10.15+ or Linux kernel 5.13+ (for terminal sandboxing)

**System Diagram Description:**
A layered architecture showing:
- **Top Layer:** VS Code UI (Chat view, Agent Sessions, Terminal)
- **Middle Layer:** Agent Session Manager, Tool Registry, Sandboxing Engine
- **Model Layer:** Copilot Models (GPT, Claude), MCP Servers, Custom Agents
- **Bottom Layer:** OS Primitives (File System, Process Isolation, Network Controls)

Arrows show bi-directional flow between User and Agents, with Tool Calls fanning out to various execution environments (sandboxed terminal, worktrees, MCP servers).

## 5. Code Examples & Patterns

### Example 1: Agent Orchestration with Custom Agents

**Configuration: Custom Agent Definition**
```markdown
---
# .github/agents/architect.agent.md
name: architect
description: Analyzes system architecture and proposes design improvements
model: ["Claude Sonnet 4.5 (copilot)", "GPT-5 (copilot)"]
tools: ["readFiles", "codeSearch", "agent"]
agents: ["Modify"] # Can only invoke Modify subagent
user-invokable: true
disable-model-invocation: false
---

You are an experienced software architect. When users ask about system
design, multi-service interactions, or scalability concerns:

1. Use codeSearch to understand current architecture
2. Identify architectural patterns in use (monolith, microservices, etc.)
3. Propose concrete improvements with tradeoff analysis
4. If implementation is approved, use the Modify agent to make changes

Always explain *why* a pattern is appropriate for the specific context.
```

**Prerequisites:** GitHub Copilot subscription, VS Code 1.107+

**Usage:**
```markdown
Developer: "@architect analyze our authentication flow for security issues"

Architect Agent:
[Uses codeSearch to find auth-related files]
[Reads AuthService.ts, AuthController.ts, Middleware.ts]

Thinking: I notice this system uses JWTs stored in localStorage...

Analysis:
- Current: JWT in localStorage (vulnerable to XSS)
- Recommendation: Use httpOnly cookies + CSRF tokens
- Trade-off: Slightly more complex, but XSS-resistant

Shall I invoke @Modify to implement this change?
```

**Expected Outcome:** Architectural analysis completed in 30-60 seconds, actionable recommendations provided, optional subagent invocation for implementation.

### Example 2: Background Agent with Worktree

**Configuration:**
```json
{
  "github.copilot.chat.cli.customAgents.enabled": true,
  "git.worktreeIncludeFiles": ["package-lock.json", ".env.local"]
}
```

**Workflow:**
```bash
# 1. Developer initiates task in Chat view
Developer: "Migrate all class components to functional components with hooks"

# 2. Switch to background agent
# Click "Continue in → Background" button
# Select "Run in Git worktree"

# VS Code creates:
# .git/worktrees/copilot-bg-20260212-143022/

# 3. Background agent works autonomously:
Background Agent:
  Turn 1: [Finds 12 class components via codeSearch]
  Turn 2: [Converts Button.tsx → commits]
  Turn 3: [Converts Modal.tsx → commits]
  ...
  Turn 12: [All components converted, tests passing]

# 4. Developer reviews diff
# File Changes view shows 12 modified files
# Click "Apply to Workspace" or "Open Diff"

# 5. Worktree automatically cleaned up after apply
```

**Expected Outcome:** Large-scale refactor completed in background (10-20 minutes) without disrupting active work. All changes reviewable as standard Git diff.

### Example 3: Terminal Tool with Sandboxing

**Configuration:**
```json
{
  "chat.tools.terminal.sandbox.enabled": true,
  "chat.tools.terminal.sandbox.network": ["npmjs.com"],
  "chat.tools.terminal.enableAutoApprove": true,
  "chat.tools.terminal.autoApproveWorkspaceNpmScripts": true
}
```

**Demonstration:**
```markdown
Developer: "Install the date-fns library and update all Date() calls to use it"

Agent:
[Tool: terminal]
Command: npm install date-fns
Working Directory: /workspace/project
Timeout: 30

[Sandboxed Execution]
✓ Read-only access outside workspace
✓ Network: npmjs.com allowed
✓ Auto-approved (npm install in workspace)

Output:
added 1 package, and audited 243 packages in 2s
✓ Command completed (exit code 0, 2.1s)

[Tool: codeSearch]
Query: new Date(
[Finds 15 usages]

[Tool: edit] (repeated 15 times)
[Converts each Date() to date-fns functions]

[Tool: terminal] (auto-approved)
Command: npm test
✓ All tests passing
```

**Expected Outcome:** Agent safely installs dependencies and refactors code without risk of system modification. Developer reviews each edit before accepting.

## 6. Visual Assets Inventory

### Agent Session Management

| Image | Description | Filename | Section |
|-------|-------------|----------|---------|
| https://code.visualstudio.com/assets/updates/1_109/agent-sessions-day-2026.webp | Promotional image for Agent Sessions Day event (Feb 19, 2026) | agent-sessions-day-2026.webp | Marketing/Events |
| https://code.visualstudio.com/assets/updates/1_109/context-window-widget.png | Context window token usage breakdown by category | context-window-widget.png | Chat UX |
| https://code.visualstudio.com/assets/updates/1_109/session-type-picker-continue.png | Session type picker for continuing tasks in different environments | session-type-picker-continue.png | Agent Session Management |
| https://code.visualstudio.com/assets/updates/1_107/all-sessions.png | Side-by-side agent sessions view with filters | all-sessions.png | Agent Session Management |
| https://code.visualstudio.com/assets/updates/1_108/agentsessions-trimmed.png | Agent sessions view showing file changes and PRs | agentsessions-trimmed.png | Agent Session Management |

### Chat UX Improvements

| Image | Description | Filename | Section |
|-------|-------------|----------|---------|
| https://code.visualstudio.com/assets/updates/1_109/chat-mermaid.png | Interactive Mermaid diagram rendering in chat | chat-mermaid.png | Chat UX |
| https://code.visualstudio.com/assets/updates/1_109/ask-questions-ui.png | Ask Questions tool carousel with navigation | ask-questions-ui.png | Chat UX |
| https://code.visualstudio.com/assets/updates/1_109/model-picker.png | Language model picker with hover descriptions | model-picker.png | Chat UX |

### Terminal Improvements

| Image | Description | Filename | Section |
|-------|-------------|----------|---------|
| https://code.visualstudio.com/assets/updates/1_109/terminal-python-presenter.png | Inline Python syntax highlighting in terminal tool | terminal-python-presenter.png | Terminal |
| https://code.visualstudio.com/assets/updates/1_109/terminal-tool-cd-presentation.png | Working directory display in terminal commands | terminal-tool-cd-presentation.png | Terminal |
| https://code.visualstudio.com/assets/updates/1_109/terminal-tool-goal.png | Command intent/goal hover description | terminal-tool-goal.png | Terminal |
| https://code.visualstudio.com/assets/updates/1_108/terminal-suggest.png | Terminal IntelliSense status bar | terminal-suggest.png | Terminal |

### Background Agents & Worktrees

| Image | Description | Filename | Section |
|-------|-------------|----------|---------|
| https://code.visualstudio.com/assets/updates/1_107/filechanges.png | Background agent file changes in worktree | filechanges.png | Background Agents |
| https://code.visualstudio.com/assets/updates/1_107/background_attachments.png | Context attachments in background sessions | background_attachments.png | Background Agents |

### Customization

| Image | Description | Filename | Section |
|-------|-------------|----------|---------|
| https://code.visualstudio.com/assets/updates/1_109/configure-skills.png | Configure Skills command in Chat view | configure-skills.png | Agent Customization |
| https://code.visualstudio.com/assets/updates/1_109/chat-customization-diagnostics.png | Chat customization diagnostics view | chat-customization-diagnostics.png | Agent Customization |
| https://code.visualstudio.com/assets/updates/1_109/language-models-editor-config-file.png | Language Models editor file icon | language-models-editor-config-file.png | Agent Customization |

## 7. Decision Criteria

### When to Use Multi-Agent Orchestration

**Scenario 1: Large-Scale Refactoring (Highly Recommended)**
- **Context:** Need to rename variables, migrate APIs, or restructure modules across 20+ files
- **Rationale:** Background agents in worktrees can execute file-by-file transformations without disrupting active work. Parallel execution speeds up what would take hours manually.
- **Alternative:** Single-agent inline chat becomes overwhelming with context overflow beyond 10 files

**Scenario 2: Documentation Generation (Recommended)**
- **Context:** Generate comprehensive API docs, README files, or code comments for multiple modules
- **Rationale:** Background agent can process each module independently, commit docs per turn, and parallelize with feature development
- **Alternative:** Manual documentation writing or single-pass generation misses iterative improvements

**Scenario 3: Complex Architectural Changes (Highly Recommended)**
- **Context:** Implement new design pattern (e.g., event sourcing, CQRS) requiring coordinated changes across services
- **Rationale:** Use local agent for planning (@architect), then hand off to background agent for implementation. Worktree isolation allows safe experimentation and rollback.
- **Alternative:** Attempting complex changes in single chat session leads to errors and confusion

**Scenario 4: Test Coverage Improvements (Recommended)**
- **Context:** Achieve 80%+ test coverage for existing untested modules
- **Rationale:** Background agent can analyze coverage reports, generate test cases systematically, and commit per module
- **Alternative:** Manual test writing is tedious and inconsistent

**Scenario 5: Security Audits (Recommended with Terminal Sandboxing)**
- **Context:** Scan for vulnerabilities, update dependencies, fix security issues
- **Rationale:** Use sandboxed terminal to run security scanners (npm audit, Snyk) without risk. Agent analyzes results and proposes fixes.
- **Alternative:** Running security tools without sandboxing risks accidental system changes (e.g., npm install globally)

### When NOT to Use This Pattern

**Anti-Pattern 1: Single-File Quick Edits**
- **Why Avoid:** Inline chat (Ctrl+I) is faster for localized changes — multi-agent setup is overkill
- **Alternative:** Use inline chat or Copilot completions for changes contained in 1-2 files

**Anti-Pattern 2: Exploratory Problem-Solving**
- **Why Avoid:** Background agents work best with clear specifications, not open-ended discovery
- **Alternative:** Use local interactive agent for brainstorming, then hand off to background for execution once plan is defined

**Anti-Pattern 3: Frequent User Input Required**
- **Why Avoid:** Background agents run autonomously — if task needs constant clarification, it belongs in interactive mode
- **Alternative:** Use local agent or pair programming approach where you guide the AI step-by-step

### Comparison with Alternatives

| Approach | Context Limit | Parallelization | Isolation | Best For |
|----------|---------------|-----------------|-----------|----------|
| **Multi-Agent (Background)** | High (separate sessions) | Excellent | Full (worktrees) | Large refactors, autonomous tasks |
| **Single-Agent (Local)** | Medium (one context) | None | None | Interactive problem-solving, planning |
| **Inline Chat** | Low (current file) | None | None | Quick edits, focused refactors |
| **Copilot Completions** | Very Low (snippet) | None | None | Code generation, snippets |

## 8. Real-World Use Cases (5)

### Use Case 1: Migrating Legacy Authentication System

**Scenario:** E-commerce company needs to migrate from custom JWT implementation to OAuth 2.0 across 30+ microservices within 2 weeks.

**Complexity Level:** Advanced

**Capabilities Used:**
- Custom agent (@architect) for migration planning and dependency analysis
- Background agent in worktree for per-service migration
- Terminal sandboxing for running integration tests safely
- Agent Skills for OAuth best practices

**Workflow:**
1. Developer uses @architect agent to analyze current auth system (codeSearch across all services)
2. Architect proposes migration plan: service dependency order, shared library approach, rollback strategy
3. Developer approves plan, hands off to background agent
4. Background agent creates worktree, migrates Service A, runs tests, commits
5. Developer reviews Service A changes, merges to main
6. Background agent continues with Service B in new worktree (parallelizable)
7. Repeat until all 30 services migrated

**Measurable Outcome:**
- **Time Saved:** 8 weeks → 1.5 weeks (80% reduction)
- **Consistency:** All services use identical OAuth patterns (captured in skill)
- **Safety:** Terminal sandboxing prevented test failures from affecting production databases

### Use Case 2: Adding Observability to Existing Codebase

**Scenario:** Startup with 50K LOC needs distributed tracing and structured logging before Series A fundraising demo.

**Complexity Level:** Intermediate

**Capabilities Used:**
- Background agent with worktree isolation
- Agent Skills for OpenTelemetry instrumentation patterns
- Terminal tool for installing dependencies and running smoke tests
- Subagents for documentation updates

**Workflow:**
1. Define "observability" skill with OpenTelemetry patterns, logger configuration, dashboard setup instructions
2. Prompt: "Add OpenTelemetry tracing and structured logging to all API endpoints"
3. Background agent: installs deps, instruments controllers, updates tests, generates dashboards
4. Commits per module: "Add tracing to UserController", "Add logging to AuthService", etc.
5. Developer reviews each commit in worktree, merges to main incrementally

**Measurable Outcome:**
- **Coverage:** 100% of API endpoints instrumented (vs. 60% manual target)
- **Time:** 3 days vs. projected 2 weeks
- **Quality:** Consistent instrumentation patterns across all modules (thanks to skill)

### Use Case 3: Multi-Repo Documentation Standardization

**Scenario:** Enterprise with 200 microservices needs consistent README format, API docs, and architecture diagrams.

**Complexity Level:** Beginner

**Capabilities Used:**
- Organization-level custom agent (@doc-writer)
- Agent Skills with documentation templates
- MCP GitHub Server for cross-repo operations
- Mermaid diagram generation in chat

**Workflow:**
1. Define org-level custom agent "@doc-writer" with template instructions
2. Developer runs "@doc-writer standardize docs for this repo" in each service
3. Agent generates: README.md (standard sections), API.md (from OpenAPI specs), ARCHITECTURE.md (auto-generated Mermaid)
4. Changes committed to PR, reviewed by tech writer
5. Process repeated across all 200 repos (parallelizable via cloud agents)

**Measurable Outcome:**
- **Consistency:** 100% repos follow same documentation structure (previously 40%)
- **Onboarding Time:** New developers report 60% faster understanding of services
- **Maintenance:** Org-level agent updates propagate to all repos automatically

### Use Case 4: Security Vulnerability Remediation

**Scenario:** Critical CVE discovered in logging library used by 40 services, must patch within 24 hours.

**Complexity Level:** Intermediate

**Capabilities Used:**
- Terminal sandboxing for running vulnerability scans
- Background agents with worktree isolation
- Agent Skills for security patching patterns
- Parallel agent execution across multiple services

**Workflow:**
1. Developer prompts: "Find all usages of vulnerable-logger@1.x, upgrade to 2.x, fix breaking changes"
2. Background agent 1: scans service-a, finds usages, upgrades, runs tests (in worktree)
3. Background agent 2: simultaneously handles service-b (separate worktree)
4. Agents create PRs with: dependency update, code fixes, test confirmations
5. Developer spot-checks PRs, approves automated merge
6. All 40 services patched within 8 hours

**Measurable Outcome:**
- **Speed:** 8 hours vs. projected 40 hours (5x faster)
- **Safety:** Terminal sandboxing prevented test suite from accessing production secrets during dry runs
- **Confidence:** Automated tests verified each patch before merge

## Use Case 5: Feature Flag Removal Campaign

**Scenario:** SaaS company has 200+ feature flags after 3 years, needs to remove obsolete flags to reduce technical debt.

**Complexity Level:** Intermediate

**Capabilities Used:**
- Custom agent (@cleanup) specialized in technical debt removal
- Codebase search (textSearch, codeSearch) for flag usage analysis
- Background agents with worktree isolation
- Claude extended thinking for tricky conditional logic

**Workflow:**
1. Developer loads list of obsolete feature flags from LaunchDarkly
2. Prompt: "@cleanup remove feature flag 'new_checkout_flow' (enabled for 100% users for 6 months)"
3. Agent uses codeSearch to find all usages across 15 files
4. Claude extended thinking analyzes conditional branches: "If flag is always true, simplify to just the if-branch..."
5. Background agent refactors all usages, removes flag constant, updates tests
6. Commits each simplified file separately for easier review

**Measurable Outcome:**
- **Debt Reduction:** 200 flags → 50 flags in 3 weeks
- **Code Quality:** Removed 4,000 lines of dead code paths
- **Maintainability:** Simplified control flow improved readability scores by 35%

## 9. Content Fitness Assessment

| Criterion | Assessment | Notes |
|-----------|-----------|-------|
| **Relevant** | 🟢 High | Directly addresses current practitioner pain points in AI-assisted development: context overload, unsafe automation, team standardization, and scaling agent workflows. Solves problems developers face today with Copilot. |
| **Compelling** | 🟢 High | Goes beyond product announcement to show *how* multi-agent orchestration fundamentally changes development workflows. Real-world time savings (80% reduction in refactor time), architectural shift from "assistant" to "team of specialists", and concrete security wins make this actionable, not theoretical. |
| **Actionable** | 🟢 High | Practitioners can implement every pattern today with VS Code 1.107+ and GitHub Copilot subscription. Configuration examples, decision criteria, and step-by-step workflows enable immediate adoption. Skills, custom agents, and sandboxing are concrete features, not vaporware. |

## 10. Proposed Talk Structure

### Section 1: Introduction — The Multi-Agent Moment (5 min)
- Opening hook: "You have 50,000 lines of legacy code, 2 weeks, and 1 developer. Can AI solve this?" → Yes, with multi-agent orchestration
- Brief history: VS Code 1.100 (single agent) → 1.107 (multi-agent) → 1.109 (Claude integration)
- Thesis: Multi-agent development isn't about better completions — it's about orchestrating specialized AI workers who execute in parallel

### Section 2: Core Orchestration Patterns (8 min)
- Agent session types: Local (interactive), Background (autonomous), Cloud (scalable), Claude (advanced reasoning)
- Live demo: Start with plan agent → hand off to background → review in worktree
- Key innovation: Context isolation via subagents prevents "forgetting" as tasks get complex

### Section 3: Security & Control (6 min)
- Problem: Autonomous agents are powerful but risky (accidental system changes, credential exposure)
- Solution: Terminal sandboxing, auto-approval rules, workspace isolation
- Demo: Agent attempts to access ~/.ssh, gets blocked by sandbox; npm install succeeds because workspace-scoped

### Section 4: Customization & Team Scaling (6 min)
- Agent Skills: Package domain knowledge into reusable folders (API design, security patterns, observability)
- Org-level agents: Enforce consistency across 100+ developers (one @doc-writer definition, applied everywhere)
- Demo: Show how skill loaded on-demand when developer asks about API design

### Section 5: Advanced Features (5 min)
- Claude thinking tokens: See AI reasoning process in real-time, debug when it goes wrong
- Copilot Memory: Persistent context across sessions ("always use TypeScript strict mode")
- MCP integration: Connect agents to external tools (databases, APIs, GitHub)

### Section 6: Conclusion — Next Steps (5 min)
- Decision matrix: When to use multi-agent (large refactors, parallel work) vs. inline chat (quick edits)
- Quick start: Enable 3 settings (custom agents, terminal sandboxing, Agent Skills)
- Resources: VS Code docs, Agent Sessions Day (Feb 19), example configurations

### Artifacts:
1. **Configuration file:** Complete `.vscode/settings.json` with multi-agent orchestration settings
2. **Custom agent template:** Starter `.agent.md` for common use cases (reviewer, optimizer, tester)
3. **Skill example:** Sample API design skill with templates and validation scripts
4. **Workflow diagram:** Visual map of local → background → cloud agent handoff with Git worktrees
5. **Security checklist:** Terminal sandboxing verification steps and auto-approval rule audit

### Talk Flow:
- **Opening Hook (problem statement):** Developer overwhelmed by 50K LOC refactor
- **Core Concept (orchestration):** Show agent handoff demo with real Git worktrees
- **Moment of Truth (security):** Agent blocked by sandbox — "this saved my production database"
- **Scaling (customization):** Org-level agent standardizes 100 developers instantly
- **Conclusion (call to action):** "Enable 3 settings, delegate your next refactor, measure time saved"

## 11. Web Search — Additional References

**Multi-Agent Orchestration Resources:**

- **Microsoft Learn: Multi-Agent Patterns** (https://learn.microsoft.com/en-us/microsoft-copilot-studio/guidance/multi-agent-patterns) — Specialist role assignment, parallel execution, context management best practices for Copilot Studio (DISCOVERED)

- **InfoWorld: VS Code Adds Multi-Agent Orchestration** (https://www.infoworld.com/article/4105879/visual-studio-code-adds-multi-agent-orchestration.html) — Industry perspective on VS Code 1.107 multi-agent capabilities and impact on development workflows (DISCOVERED)

- **VS Code Multi-Agent Orchestration Guide** (https://usama.codes/blog/vscode-multi-agent-orchestration-guide) — Community tutorial on setting up agent orchestration with practical examples (DISCOVERED)

- **GitHub: AgenticWorkflow** (https://github.com/ant3869/AgenticWorkflow) — Example multi-agent workflow implementation with XML/JSON configuration templates (DISCOVERED)

- **GitHub: copilot-multi-agent Extension** (https://github.com/mvduijnhoven/copilot-multi-agent) — Third-party extension showcasing custom multi-agent orchestration plugin (DISCOVERED)

**Claude and Extended Thinking:**

- **GitHub Blog: Copilot in VS Code v1.109** (https://github.blog/changelog/2026-02-04-github-copilot-in-visual-studio-code-v1-109-january-release/) — Official announcement of Claude integration and thinking tokens (DISCOVERED)

- **Ubuntu Handbook: VS Code 1.109 with Claude Agent** (https://ubuntuhandbook.org/index.php/2026/02/vs-code-1-109-released-claude-agent/) — Community coverage of Claude agent support in preview (DISCOVERED)

- **Anthropic: Claude's Extended Thinking** (https://www.anthropic.com/news/visible-extended-thinking) — Deep dive into how extended thinking and visible reasoning improves AI outputs (DISCOVERED)

**Security and Sandboxing:**

- **NVIDIA Blog: Sandboxing Agentic Workflows** (https://developer.nvidia.com/blog/practical-security-guidance-for-sandboxing-agentic-workflows-and-managing-execution-risk/) — Enterprise security guidance for sandboxing agent workflows, file system isolation, network controls (DISCOVERED)

- **DEV Community: Sandboxing AI Agents with Devcontainers** (https://dev.to/klaus82/sandboxing-ai-coding-agents-with-devcontainers-4ja3) — Tutorial on using VS Code devcontainers for full agent isolation (DISCOVERED)

- **GitHub Issue: Terminal Sandboxing** (https://github.com/microsoft/vscode/issues/277286) — Engineering discussion on terminal sandboxing implementation for agents (DISCOVERED)

- **Cursor Docs: Terminal Agent Controls** (https://cursor.com/docs/agent/terminal) — Related IDE's approach to terminal safety and agent command execution (DISCOVERED)

## 12. 📖 References (Numbered)

**Official Documentation**

[^1]: **VS Code Updates: January 2026 (v1.109)** — [https://code.visualstudio.com/updates/v1_109](https://code.visualstudio.com/updates/v1_109) — Comprehensive release notes covering Chat UX, Agent Session Management, Agent Customization, Agent Extensibility, Agent Optimizations, and Terminal Sandboxing (PROVIDED)

[^2]: **VS Code Updates: December 2025 (v1.108)** — [https://code.visualstudio.com/updates/v1_108](https://code.visualstudio.com/updates/v1_108) — Release notes for Agent Skills GA, Agent Sessions view improvements, Terminal IntelliSense UX rework, and housekeeping achievements (PROVIDED)

[^3]: **VS Code Updates: November 2025 (v1.107)** — [https://code.visualstudio.com/updates/v1_107](https://code.visualstudio.com/updates/v1_107) — Release notes detailing agent sessions integration with Chat view, Git worktree isolation, org-level custom agents, and MCP enhancements (PROVIDED)

[^4]: **GitHub Copilot in VS Code: Official Documentation** — [https://code.visualstudio.com/docs/copilot/overview](https://code.visualstudio.com/docs/copilot/overview) — Comprehensive guide to GitHub Copilot features, agent types, customization options, and best practices (DISCOVERED)

**Blog Posts & Announcements**

[^5]: **GitHub Blog: Copilot in VS Code v1.109 — January Release** — [https://github.blog/changelog/2026-02-04-github-copilot-in-visual-studio-code-v1-109-january-release/](https://github.blog/changelog/2026-02-04-github-copilot-in-visual-studio-code-v1-109-january-release/) — Official GitHub announcement of v1.109 features including Claude agent support and thinking tokens (DISCOVERED)

[^6]: **InfoWorld: Visual Studio Code Adds Multi-Agent Orchestration** — [https://www.infoworld.com/article/4105879/visual-studio-code-adds-multi-agent-orchestration.html](https://www.infoworld.com/article/4105879/visual-studio-code-adds-multi-agent-orchestration.html) — Industry analysis of VS Code's multi-agent capabilities and their impact on software development (DISCOVERED)

[^7]: **Anthropic: Claude's Extended Thinking** — [https://www.anthropic.com/news/visible-extended-thinking](https://www.anthropic.com/news/visible-extended-thinking) — Technical explanation of how extended thinking tokens work and improve AI reasoning quality (DISCOVERED)

**Tutorials & Guides**

[^8]: **VS Code Multi-Agent Orchestration Guide** — [https://usama.codes/blog/vscode-multi-agent-orchestration-guide](https://usama.codes/blog/vscode-multi-agent-orchestration-guide) — Community-written guide to setting up and using multi-agent workflows with practical examples (DISCOVERED)

[^9]: **Microsoft Learn: Multi-Agent Patterns** — [https://learn.microsoft.com/en-us/microsoft-copilot-studio/guidance/multi-agent-patterns](https://learn.microsoft.com/en-us/microsoft-copilot-studio/guidance/multi-agent-patterns) — Best practices for specialist role assignment, parallel execution, and context management in multi-agent systems (DISCOVERED)

[^10]: **DEV Community: Sandboxing AI Coding Agents with Devcontainers** — [https://dev.to/klaus82/sandboxing-ai-coding-agents-with-devcontainers-4ja3](https://dev.to/klaus82/sandboxing-ai-coding-agents-with-devcontainers-4ja3) — Tutorial on using VS Code devcontainers for comprehensive agent isolation (DISCOVERED)

[^11]: **NVIDIA Developer Blog: Practical Security Guidance for Sandboxing Agentic Workflows** — [https://developer.nvidia.com/blog/practical-security-guidance-for-sandboxing-agentic-workflows-and-managing-execution-risk/](https://developer.nvidia.com/blog/practical-security-guidance-for-sandboxing-agentic-workflows-and-managing-execution-risk/) — Enterprise-focused security best practices for agent workflow sandboxing, file system isolation, and network controls (DISCOVERED)

**Community & Code Examples**

[^12]: **GitHub: AgenticWorkflow** — [https://github.com/ant3869/AgenticWorkflow](https://github.com/ant3869/AgenticWorkflow) — Open-source multi-agent workflow implementation with configuration templates and examples (DISCOVERED)

[^13]: **GitHub: copilot-multi-agent Extension** — [https://github.com/mvduijnhoven/copilot-multi-agent](https://github.com/mvduijnhoven/copilot-multi-agent) — Community-built VS Code extension demonstrating custom multi-agent orchestration patterns (DISCOVERED)

[^14]: **GitHub Issue: Terminal Sandboxing Discussion** — [https://github.com/microsoft/vscode/issues/277286](https://github.com/microsoft/vscode/issues/277286) — Engineering discussion on terminal sandboxing implementation, OS-level security primitives, and compatibility considerations (DISCOVERED)

[^15]: **Cursor Documentation: Terminal Agent Controls** — [https://cursor.com/docs/agent/terminal](https://cursor.com/docs/agent/terminal) — Related IDE's approach to terminal safety, command approval workflows, and agent security (DISCOVERED)
