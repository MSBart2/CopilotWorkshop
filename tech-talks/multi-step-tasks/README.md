---
status: active
updated: 2026-02-01
section: "Agent Architecture"
---

# Multi-Step Tasks: Context Isolation with Subagents

> **The Question This Talk Answers:**
> *"How do I prevent context pollution when my agent task requires multiple phases of research, analysis, and implementation?"*

**Duration:** 45 minutes | **Target Audience:** Developers / Technical Leads / AI-Assisted Development Teams

---

## 📊 Content Fitness

| Criterion | Assessment | Notes |
|-----------|-----------|-------|
| **Relevant** | 🟢 High | Complex multi-phase tasks accumulate context rapidly — subagents keep main context focused while enabling parallel execution |
| **Compelling** | 🟢 High | Context isolation unlocks 3-5x throughput via parallel subagents without degrading main agent quality |
| **Actionable** | 🟢 High | Can use subagent hints in chat today; prompt files enable reproducible workflows tomorrow |

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
9. **Subagent Fundamentals** ← 🎬 Section 1 (3-4 slides)
10. **Custom Agents as Subagents** ← 🎬 Section 2 (3-4 slides)
11. **Controlling Subagent Behavior** ← 🎬 Section 3 (2-3 slides)
12. **Prompt File Integration** ← 🎬 Section 4 (2-3 slides)
13. **Anti-Patterns & Best Practices** ← 🎬 Section 5 (2-3 slides)
14. **Use Cases** ← Real-World Use Cases (1-2 slides)
15. **Actionable Outcomes** ← What You Can Do Today
16. **Related Patterns** ← Related Patterns
17. **Official Documentation** ← 📚 section
18. **End Slide** ← Auto-generated

### Major Sections (TOC Entries)

```markdown
<!-- 🎬 MAJOR SECTION: Subagent Fundamentals -->
<!-- 🎬 MAJOR SECTION: Custom Agents as Subagents -->
<!-- 🎬 MAJOR SECTION: Controlling Subagent Behavior -->
<!-- 🎬 MAJOR SECTION: Prompt File Integration -->
<!-- 🎬 MAJOR SECTION: Anti-Patterns & Best Practices -->
```

---

## The Problem

### Key Points

- **Context window bloat degrades agent quality**
  Every prompt and response accumulates — failed experiments, exploratory tangents, verbose research all dilute focus and consume tokens.

- **Sequential bottlenecks waste time**
  Complex workflows (research → analysis → implementation) execute one-at-a-time when phases could run in parallel.

- **Exploratory pollution persists permanently**
  Dead-end investigations and rejected approaches clutter the main context forever, degrading all subsequent responses.

- **Token costs compound without benefit**
  Full conversation histories consume expensive tokens even when only summary findings matter.

### Narrative

You ask the agent to research authentication patterns, analyze existing code structure, and review security documentation before implementing a login feature. The agent does all three tasks sequentially in one context window — reading 30+ files, exploring 5 different architectural approaches (rejecting 4), fetching documentation, and finally proposing an implementation.

By the time implementation starts, the context window contains:

- 18,000 tokens of research notes (only 800 tokens were actually relevant)
- 4 rejected architectural explorations (only the winner mattered)
- 12 dead-end file investigations (wrong modules entirely)
- 3,500 tokens of documentation excerpts (only 200 tokens influenced the final design)

The main agent struggles to distinguish signal from noise. The token cost is 4x higher than necessary. And most critically — the agent can't easily reference the "why" behind decisions because it's buried in exploration clutter.

**The solution:** Task decomposition with context isolation. Break work into phases, run each in its own subagent context, return only summaries to the orchestrating agent.

---

## The Solution: Subagents

### What It Does

Subagents provide isolated context windows separate from the main chat session. The main agent delegates tasks — "research authentication patterns" — and the subagent works autonomously: reading files, searching codebases, exploring options. When complete, only the final summary returns to the main agent. All intermediate exploration stays isolated.

### Key Capabilities

- **Context Isolation**: Each subagent runs in its own context window — research, dead-ends, and exploration don't pollute the main session
- **Parallel Execution**: Multiple subagents run simultaneously for improved throughput (3 independent research tasks → 3 parallel subagents)
- **Summary-Only Returns**: Main agent receives final results only — no intermediate work, failed experiments, or verbose exploration logs
- **Custom Agent Integration**: Run specialized custom agents as subagents — security reviewer, test generator, documentation writer — each with focused tools and instructions

### Architecture Overview

Subagents operate like autonomous assistants. The main agent breaks down complex work—"Implement OAuth with historical context research"—into focused subtasks. It spawns subagents: one researches past OAuth implementations in the codebase, another analyzes security patterns, a third reviews existing test coverage. Each subagent works in isolation with its own context window.

When subagents complete, they return structured summaries: "Found 3 prior OAuth implementations; token refresh is commonly forgotten; tests are typically integration-level." The main agent synthesizes these findings without ever seeing the 40+ files read or the 6 dead-end explorations that occurred.

**The architectural insight:** Separate "orchestration context" (main agent) from "execution context" (subagents). The main agent coordinates and decides. Subagents investigate and report. This separation multiplies throughput via parallelization and improves quality by keeping the main context focused.

**Official Documentation:**
- 📖 [VS Code Subagents Documentation](https://code.visualstudio.com/docs/copilot/agents/subagents) — Core concepts, invocation patterns, and usage scenarios
- 📖 [Custom Agents Documentation](https://code.visualstudio.com/docs/copilot/customization/custom-agents) — Create specialized agents for subagent roles
- 📖 [Agents Overview](https://code.visualstudio.com/docs/copilot/agents/overview) — Understanding agent types and when to use each

---

## 📦 Key Artifacts

**This talk focuses on usage patterns rather than files to download**, but includes complete examples you can copy into your workflow.

### Primary Artifacts

*Shown inline with detailed explanation in the major sections*

- **Implicit Invocation Patterns** — Chat prompts that trigger subagent delegation for research and analysis tasks
- **Explicit Prompt File Workflows** — `.md` files with frontmatter defining tools, agents, and multi-phase workflows
- **Custom Agent Definitions** — `.agent.md` files configured for specialized subagent roles (security, testing, documentation)
- **Control Configurations** — Frontmatter properties for visibility (`user-invokable`) and restrictions (`agents`, `disable-model-invocation`)

### Supporting Concepts

*Referenced throughout with inline examples*

- **Parallel Research Prompts** — Templates for spawning multiple simultaneous subagents
- **Synthesis Instructions** — Patterns for main agents to combine subagent results into actionable recommendations
- **Anti-Pattern Examples** — Common mistakes (over-delegation, vague tasks, ignoring results) with corrected alternatives

---

## 🎯 Mental Model Shift

> **The Core Insight:** From "one agent handles everything sequentially in one context" to "orchestrator coordinates specialists, each working in isolation"

### Move Toward (Embrace These Patterns)

- ✅ **Delegation Over Monolithic Execution**: Break complex tasks into focused phases and delegate to subagents → Keeps main context clean, enables parallelization, isolates failures
- ✅ **Summary-Only Information Flow**: Subagents return structured findings, not full exploration logs → Reduces token costs 4-6x, improves main agent decision quality
- ✅ **Specialized Subagents**: Use custom agents as subagents for domain-specific tasks (security review, test generation) → Brings focused expertise and tools to each subtask
- ✅ **Parallel Research**: Run independent subagents simultaneously (auth research ‖ performance analysis ‖ security review) → 3-5x throughput improvement on multi-concern tasks

### Move Away From (Retire These Habits)

- ⚠️ **Everything in Main Context**: Doing research, analysis, and implementation all in one agent session → Context bloat degrades quality, wastes tokens, prevents parallelization
- ⚠️ **Sequential Deep Research**: Waiting for one research task to complete before starting next → Misses parallelization opportunities, extends timelines unnecessarily
- ⚠️ **Keeping Failed Experiments**: Leaving dead-end explorations and rejected approaches in context → Confuses subsequent prompts, increases token costs without value

### Move Against (Active Resistance Required)

- 🛑 **Vague Subagent Tasks**: Delegating "research authentication" without scope or output format → Returns unusable summaries, requires re-delegation, wastes time
- 🛑 **Over-Delegation**: Spawning subagents for trivial tasks like "read config file" → Overhead exceeds benefit, complicates workflows unnecessarily
- 🛑 **Ignoring Subagent Results**: Main agent doesn't synthesize or act on subagent findings → Defeats the purpose, research effort is wasted

> **Example Transformation:** Before: Single agent researches 30 files, explores 5 architectures, rejects 4, and implements — 18K tokens, 45 minutes sequential. After: Main agent spawns 3 parallel subagents (research past implementations ‖ analyze security patterns ‖ review test coverage), receives 3 structured summaries (total 2K tokens), synthesizes in 3 minutes, implements with full context — 35 minutes total, clearer decision rationale, 4x lower token cost.

---

## When to Use This Pattern

### Decision Tree

```
Q: Is your task too complex for one agent in one go?
├─ No (simple, single-phase task)
│  → Use single agent in Plan Mode
│  └─ Best for: Well-defined tasks with <10 file context
│
└─ Yes (multi-phase or exploratory)
   │
   Q: Does it need multiple specialized roles (planner/coder/reviewer)?
   ├─ Yes → Use agent-teams pattern
   │  └─ Best for: Structured workflows with role-specific approvals
   │
   └─ No (same role, different phases)
      │
      Q: Can parts run in parallel on different branches?
      ├─ Yes → Use parallel-execution pattern
      │  └─ Best for: Independent feature variants or experiments
      │
      └─ No → 👉 Use multi-step-tasks (subagents)
         └─ Best for: Research → analysis → implementation workflows
```

### Use This Pattern When

- Your task has distinct phases (research → analysis → planning → implementation)
- You need to explore multiple approaches without cluttering main context
- Independent subtasks can run in parallel (security review ‖ performance analysis)
- Different concerns require specialized focus (use custom agents as subagents)

### Don't Use This Pattern When

- The task is simple enough for one agent in one go — Use Plan Mode instead
- You need different agent types (local → background → cloud) — Use agent handoffs
- You need specialized roles with separate personas — Use agent-teams pattern
- Phases must work on different Git branches — Use parallel-execution pattern

### Comparison with Related Features

| Aspect | Multi-Step Tasks (Subagents) | Agent Teams | Parallel Execution |
|--------|------------------------------|-------------|--------------------|
| **Best For** | Context isolation within one session | Role separation (planner/coder/reviewer) | Independent branches/experiments |
| **Parallelization** | Yes (independent subagents) | Sequential (role handoffs) | Yes (separate worktrees) |
| **Context Management** | Isolated subagent contexts | One continuous context | Separate Git branches |
| **Typical Use Case** | Research → analysis → implementation | TDD workflows, staged approvals | Feature variants, POCs |

---

<!-- 🎬 MAJOR SECTION: Subagent Fundamentals -->
## Subagent Fundamentals

*Understanding how subagents isolate context and enable parallel execution*

### Core Mechanism

Subagents run in isolated context windows separate from the main chat session. The `runSubagent` or `agent` tool must be enabled (default in most configurations). The main agent delegates a task—syntax can be implicit via chat hints or explicit via prompt files—and VS Code spawns a new agent with its own context.

**Key characteristics:**
- **Isolated Context**: Subagent reads files, searches code, explores options — none of this accumulates in main context
- **Autonomous Execution**: Subagent works independently using available tools until task completes
- **Summary Return**: Only the final result passes back to main agent (typically 100-500 tokens vs. 5K-20K tokens if done in main context)
- **Inherits Configuration**: By default, subagents use the same agent and model as main session (override with custom agents)

### Two Invocation Patterns

#### Pattern 1: Implicit Invocation (Chat Hints)

**Usage:**
```
Run a subagent to research OAuth2 implementation patterns in Node.js,
focusing on token storage best practices and refresh rotation strategies.
Return a structured summary with recommended libraries, tradeoffs, and risks.
```

**When to use:**
- Exploratory, research-heavy tasks
- Ad-hoc delegation during interactive work
- Quick investigative subtasks

**How it works:**
The main agent interprets intent and spawns a subagent with the research task. Subagent searches files, fetches documentation, explores patterns. Returns structured findings. Main context never sees the 15 files read or 4 rejected approaches.

#### Pattern 2: Explicit Invocation (Prompt Files)

**Usage:**
```markdown
---
name: feature-research
tools: ['agent', 'read', 'search', 'edit']
---
## Research Phase
Run a subagent to research:
- Existing patterns in the codebase for similar features
- Industry best practices for this feature type
- Security considerations and common pitfalls

Return findings in markdown with "Patterns", "Best Practices", and "Risks" sections.

## Implementation Phase
Using the research findings, implement the feature following established patterns.
Update tests and documentation.
```

**When to use:**
- Reproducible workflows (same research process every time)
- Version-controlled investigation procedures
- Multi-phase workflows with defined structures

**How it works:**
Prompt file declares tools in frontmatter. When executed, the `agent` tool enables subagent invocation. Main agent follows the structured workflow—spawn research subagent, wait for summary, implement based on findings. All intermediate research stays isolated.

### Context Isolation Benefits

| Without Subagents | With Subagents |
|-------------------|----------------|
| Research clutters main context (15K tokens) | Research stays isolated (500 token summary) |
| Sequential execution (Phase 1 → Phase 2 → Phase 3) | Parallel execution (Phase 1 ‖ Phase 2 ‖ Phase 3) |
| Failed experiments persist (4 rejected approaches) | Only successes return (1 recommended approach) |
| Token costs compound (25K tokens total) | Token costs contained (6K tokens total) |
| Context quality degrades (signal buried in noise) | Context stays focused (only relevant summaries) |

### Parallel Execution Example

**Prompt:**
```
Analyze this authentication module using three parallel subagents:
1. Security subagent: Check for vulnerabilities, secrets exposure, auth bypass risks
2. Performance subagent: Review for N+1 queries, memory leaks, token validation overhead
3. Testing subagent: Assess test coverage, identify missing edge cases, suggest tests

Synthesize their findings into prioritized action items with severity levels.
```

**What happens:**
- 3 subagents spawn simultaneously
- Each works in its own context: reading code, running analysis, forming conclusions
- Main agent receives 3 summaries: "Security: 2 high-risk issues found...", "Performance: 3 optimizations recommended...", "Testing: Coverage at 45%, missing..."
- Main agent synthesizes: "High priority: Fix auth bypass risk in line 47. Medium priority: Add refresh token tests. Low priority: Optimize token validation caching."

**Throughput improvement:** 3 concerns analyzed in ~8 minutes (parallel) vs. ~20 minutes (sequential).

---

<!-- 🎬 MAJOR SECTION: Custom Agents as Subagents -->
## Custom Agents as Subagents

*Applying specialized behavior, tools, and instructions to subtasks*

### The Pattern

By default, subagents inherit the main session's agent and model. To apply specialized behavior—security-focused analysis, strict TDD enforcement, documentation generation—run a custom agent as a subagent. Custom agents define focused instructions, limited tool sets, and specific personas.

### Example: Security Review Custom Agent

```markdown
---
name: Security-Review
description: Security-focused code analysis with OWASP lens
tools: ['read', 'search', 'grep']
---
You are a security expert specializing in OWASP Top 10 vulnerabilities.

Analyze code for:
- **Authentication vulnerabilities**: Weak password policies, missing MFA, session fixation
- **Authorization bypass risks**: IDOR, privilege escalation, missing access controls
- **Injection attack vectors**: SQL injection, XSS, command injection, path traversal
- **Secrets exposure**: Hardcoded credentials, API keys in code, insecure environment variable handling

Return findings in structured format:
- **Critical**: Immediate security risks requiring urgent fixes
- **High**: Significant vulnerabilities but with some mitigating factors
- **Medium**: Security improvements recommended but not urgent
- **Low**: Best practice violations, informational findings
```

### Invocation

**In chat:**
```
Use the Security-Review agent as a subagent to audit the authentication module
in src/auth/. Return critical and high findings only.
```

**In prompt file:**
```markdown
---
name: code-review-workflow
tools: ['agent', 'read', 'edit']
---
When reviewing code, use specialized subagents:

1. Use Security-Review agent to check for vulnerabilities
2. Use Testing agent to assess test coverage
3. Use Documentation agent to verify API docs are current

Synthesize findings into a unified PR review comment.
```

### Why This Works

**Focused Tools**: Security agent only has `read`, `search`, `grep` — can't accidentally modify code during review. Testing agent has `read` + `runTests`. Documentation agent has `read` + `edit` (for docs only).

**Specialized Instructions**: Each agent brings domain expertise. Security agent knows OWASP patterns. Testing agent understands coverage metrics and edge cases. Documentation agent writes clear explanations.

**Persona Consistency**: Custom agent instructions persist across invocations. Every security review uses the same checklist. No need to re-explain "check for IDOR vulnerabilities" each time.

### Real-World Workflow: Multi-Concern PR Review

```markdown
---
name: comprehensive-pr-review
tools: ['agent', 'read', 'githubRepo']
---
Review PR #{{PR_NUMBER}} using specialized subagents:

## Security Analysis
Use Security-Review agent as subagent to identify vulnerabilities.
Return critical/high findings with line numbers and remediation steps.

## Performance Analysis
Use Performance-Optimizer agent as subagent to check for:
- N+1 queries in database access
- Memory leaks in long-lived objects
- Inefficient algorithms (O(n²) or worse)

## Test Coverage Analysis
Use Testing agent as subagent to:
- Calculate coverage delta from this PR
- Identify untested edge cases
- Suggest missing test scenarios

## Final Synthesis
Combine all findings into a structured PR review:
1. **Blockers** (critical security + major performance issues)
2. **Recommended** (high-priority improvements)
3. **Optional** (nice-to-have enhancements)
```

**Outcome**: 3 specialized reviews run in parallel, each in isolated context with focused expertise. Main agent receives 3 structured reports, synthesizes into one coherent PR review. Total time: ~12 minutes vs. ~35 minutes sequential generic review.

---

<!-- 🎬 MAJOR SECTION: Controlling Subagent Behavior -->
## Controlling Subagent Behavior

*Fine-grained orchestration with visibility and restriction controls*

### Visibility Controls

Custom agents can be hidden from the user-facing agents dropdown while remaining available as subagents. Use `user-invokable: false` to create internal helper agents.

**Example: Internal Helper Agent**

```markdown
---
name: internal-helper
description: Parses log files and extracts error patterns (internal use only)
user-invokable: false
tools: ['read', 'grep']
---
You parse application logs to identify error patterns.
Extract stack traces, error messages, and timestamps.
Return structured JSON output.
```

**Why this matters:**
- Keeps agent dropdown clean (only user-facing agents visible)
- Enforces workflow structure (helper only called by orchestrating agent, not directly by user)
- Prevents accidental misuse (user doesn't invoke internal tool for wrong purpose)

### Control Properties

| Property | Default | Purpose | Example Use Case |
|----------|---------|---------|------------------|
| `user-invokable` | `true` | Show agent in dropdown | Set to `false` for internal helpers |
| `disable-model-invocation` | `false` | Prevent AI from using as subagent | Set to `true` for user-only agents (e.g., root orchestrator) |

### Restricting Available Subagents

By default, all custom agents (except those with `disable-model-invocation: true`) are available as subagents. If two agents have similar names/descriptions, the AI might select the wrong one. Use the `agents` property to restrict choices.

**Example: TDD Workflow Agent**

```markdown
---
name: TDD
description: Implement features using test-driven development
tools: ['agent', 'read', 'edit', 'runTests']
agents: ['Red', 'Green', 'Refactor']
---
Implement the following feature using test-driven development.

**Workflow:**
1. Use **Red** agent as subagent to write failing tests that specify desired behavior
2. Use **Green** agent as subagent to implement minimal code to pass tests
3. Use **Refactor** agent as subagent to improve code quality while keeping tests green

Iterate through this cycle until feature is complete and maintainable.
```

**Why restriction matters:**
Without `agents` restriction, the TDD agent might select a generic `Implementation` agent for step 2 instead of the specialized `Green` agent that understands "minimal code to pass tests only."

**Possible `agents` values:**
- `['Red', 'Green', 'Refactor']` — Only allow specific agents
- `*` — Allow all agents (default)
- `[]` — Prevent any subagent use (agent can't delegate)

### Real-World Orchestration: Feature Implementation Pipeline

```markdown
---
name: Feature-Pipeline
description: End-to-end feature implementation with staged approvals
tools: ['agent', 'read', 'edit', 'search', 'runTests']
agents: ['Research', 'Planner', 'TDD', 'Documentation']
user-invokable: true
---
Implement feature #{{ISSUE_NUMBER}} using staged pipeline:

## Stage 1: Research
Use **Research** agent as subagent to:
- Identify similar features in codebase
- Find reusable utilities and patterns
- Document architectural constraints

## Stage 2: Planning
Use **Planner** agent as subagent with research findings to:
- Design implementation approach
- Identify files to modify
- Estimate complexity and risks

[HUMAN APPROVAL REQUIRED: Review plan before proceeding]

## Stage 3: Implementation
Use **TDD** agent as subagent with approved plan to:
- Implement feature following TDD workflow
- Ensure all tests pass
- Follow established patterns from research

## Stage 4: Documentation
Use **Documentation** agent as subagent to:
- Update API documentation
- Add usage examples
- Update changelog

Return summary of all stages with links to modified files.
```

**Control benefits:**
- Only specified agents available at each stage (no wrong agent selection)
- Human approval gate between planning and implementation (orchestrator can pause for review)
- Clear audit trail (which agent did what in which stage)
- Reproducible workflow (same pipeline structure every time)

---

<!-- 🎬 MAJOR SECTION: Prompt File Integration -->
## Prompt File Integration

*Version-controlled, reproducible multi-phase workflows*

### Complete Subagent Workflow Example

```markdown
---
name: feature-research-workflow
description: Research-driven feature implementation
tools: ['agent', 'read', 'search', 'edit']
---
# Research-Driven Feature Implementation

## Phase 1: Codebase Research
Run a subagent to research:
- **Existing patterns**: How do similar features handle this concern in the current codebase?
- **Reusable utilities**: What helper functions, middleware, or components already exist?
- **Architectural constraints**: What patterns must we follow? What patterns should we avoid?

**Output format**: Markdown with "Patterns", "Utilities", and "Constraints" sections.

---

## Phase 2: Industry Best Practices
Run a subagent to research:
- **Library recommendations**: What npm packages are commonly used for this feature type?
- **Security considerations**: What OWASP concerns apply? Any common vulnerabilities?
- **Performance patterns**: What are known performance pitfalls? How to avoid them?

**Output format**: Markdown with "Libraries", "Security", and "Performance" sections.

---

## Phase 3: Test Coverage Analysis
Run a subagent to analyze:
- **Current test structure**: How are similar features tested? Unit vs. integration split?
- **Coverage gaps**: What edge cases are commonly missed?
- **Test utilities**: What test helpers, fixtures, or mocks already exist?

**Output format**: Markdown with "Test Structure", "Edge Cases", and "Test Utilities" sections.

---

## Phase 4: Implementation
Using research findings from phases 1-3:

1. Implement the feature following established patterns
2. Use recommended libraries from industry research
3. Include security mitigations from security research
4. Write tests following test structure from coverage analysis

## Phase 5: Documentation
Update relevant documentation:
- `docs/architecture.md` — Add design decisions and rationale
- `docs/api.md` — Document new endpoints or API changes
- `README.md` — Add feature overview and usage examples
```

### Why Prompt Files + Subagents Scale

**Version Control**: Workflow evolves with codebase. When you discover a new security concern, add it to Phase 2 research. All future feature implementations benefit.

**Reproducibility**: Every feature goes through same research process. No shortcuts, no forgotten steps. Junior developers get same research thoroughness as senior developers.

**Composability**: Prompt files can invoke other prompt files. Build library of research workflows, then compose them:

```markdown
---
name: backend-feature
tools: ['agent', 'read']
---
# Backend Feature Implementation

Use feature-research-workflow prompt for initial research.

Then run database-migration-workflow prompt if schema changes needed.

Finally run deployment-checklist prompt before marking complete.
```

**Auditability**: Clear record of what research happened. Git history shows when workflow changed and why. Compliance teams can review investigation procedures.

### Real-World Example: Security-First API Development

```markdown
---
name: secure-api-endpoint
description: Create new API endpoint with security-first approach
tools: ['agent', 'read', 'edit', 'search', 'runTests']
---
# Security-First API Endpoint Creation

Target endpoint: {{ENDPOINT_PATH}}

## Phase 1: Security Research (Runs as Subagent)
Use Security-Review agent as subagent to research:
- Authentication requirements: JWT? API key? Session-based?
- Authorization model: RBAC? ABAC? Resource-level permissions?
- Input validation: What injection risks apply to this endpoint's inputs?
- Rate limiting: What are appropriate limits for this endpoint type?
- Audit logging: What security events must be logged?

## Phase 2: Existing Pattern Analysis (Runs as Subagent)
Run a subagent to analyze existing API endpoints:
- How are auth checks implemented in similar endpoints?
- What middleware stack is used (auth → validation → rate limiting)?
- How are errors handled securely (no info leakage)?
- What response headers are set (CORS, CSP, etc.)?

## Phase 3: Implementation
Using findings from Phases 1-2, implement the endpoint:
1. Add route definition following existing patterns
2. Apply auth middleware and permission checks
3. Implement input validation with schema
4. Add rate limiting
5. Implement business logic
6. Add security audit logging
7. Write integration tests covering auth failures, validation errors, and success cases

## Phase 4: Security Review (Runs as Subagent)
Use Security-Review agent as subagent to audit the implementation:
- Verify all security requirements from Phase 1 are met
- Check for common vulnerabilities (OWASP Top 10)
- Validate error handling doesn't leak sensitive info
- Confirm audit logging is comprehensive

Return any critical or high findings for immediate fix.
```

**Benefits demonstrated:**
- Two subagent phases run in parallel (security research ‖ pattern analysis)
- Main agent receives structured findings, implements with full context
- Final security review catches any missed requirements
- Entire workflow is version-controlled and reproducible
- Future API endpoints follow same rigor automatically

---

<!-- 🎬 MAJOR SECTION: Anti-Patterns & Best Practices -->
## Anti-Patterns & Best Practices

*Common mistakes and how to avoid them*

### ❌ Anti-Pattern 1: Over-Delegation

**Problem:** Delegating trivially small tasks to subagents adds more overhead than value.

**Bad Example:**
```
Run a subagent to read the config file
Run a subagent to count the lines
Run a subagent to check the file extension
```

**Why it fails:**
- Each subagent invocation has ~2-3 second overhead (context setup, tool initialization)
- Reading one config file takes <1 second directly
- You spend 6-9 seconds on subagent overhead for 1 second of work

**✅ Better Approach:**
```
Read config.json and analyze:
- What authentication providers are configured?
- Are refresh tokens enabled?
- What's the session timeout setting?

Return structured summary with configuration values and any security concerns.
```

**Rule of thumb:** Delegate tasks that involve 5+ file reads, complex analysis, or exploration of multiple approaches. Don't delegate tasks that take <5 seconds to execute directly.

---

### ❌ Anti-Pattern 2: Vague Subagent Tasks

**Problem:** Underspecified tasks return vague, unusable summaries.

**Bad Example:**
```
Run a subagent to research authentication
```

**What you get back:**
> "I researched authentication. There are many approaches: OAuth, SAML, JWT, session-based. Each has tradeoffs. OAuth is popular for third-party auth. JWT is stateless. Sessions require server-side storage."

**Why it fails:**
- No scope constraints (research could span 50 topics)
- No output format specified (unstructured prose)
- No success criteria (what does "complete research" mean?)

**✅ Better Approach:**
```
Run a subagent to research OAuth2 implementation patterns in Node.js backends:

**Scope:**
- Focus on Express.js middleware patterns
- Token storage best practices (access + refresh)
- Refresh token rotation strategies

**Output format:**
- Recommended libraries with pros/cons table
- Token storage approach (DB? Redis? In-memory?) with security implications
- Refresh rotation implementation pattern (code example)

**Success criteria:**
- Enough detail to make library selection decision
- Concrete code example for refresh rotation
```

**What you get back:**
> **Recommended Libraries**
>
> | Library | Pros | Cons | Best For |
> |---------|------|------|----------|
> | passport-oauth2 | Mature, widely used | Complex config | Full-featured apps |
> | simple-oauth2 | Lightweight, clear API | Manual token mgmt | Custom flows |
>
> **Token Storage**: Redis for refresh tokens (TTL for auto-expiry), never in DB...
>
> **Refresh Rotation Example**: `[Code showing rotation + revocation on refresh]`

**Rule of thumb:** Specify scope, output format, and success criteria for every subagent task.

---

### ❌ Anti-Pattern 3: Ignoring Subagent Results

**Problem:** Subagents do research, but main agent doesn't synthesize or act on findings.

**Bad Example:**
```
Run three subagents to research authentication, performance optimization, and test coverage.
```

**What happens:**
- 3 subagents run, return 3 summaries
- Main agent posts all 3 summaries to chat without interpretation
- User must manually synthesize findings and decide next steps

**Why it fails:**
- Research effort is wasted (findings not acted upon)
- User does cognitive work that agents should handle (synthesis)
- No prioritization or recommendation (just raw info dump)

**✅ Better Approach:**
```
Run three subagents to research:
1. Authentication patterns in our codebase
2. Performance optimization opportunities
3. Test coverage gaps

**After all subagents complete, synthesize findings into:**
- **High Priority**: Issues that must be addressed before launch
- **Medium Priority**: Improvements recommended for next sprint
- **Low Priority**: Nice-to-have enhancements for future consideration

For High Priority items, propose specific implementation steps.
```

**What you get:**
> **High Priority (Must Address Before Launch):**
> 1. **Auth Issue**: Current JWT validation doesn't check token expiry. Implement in middleware. (See line 47 in auth.js)
> 2. **Security Issue**: Refresh tokens not rotated, enabling replay attacks. Add rotation in token refresh endpoint.
>
> **Medium Priority (Next Sprint):**
> - Performance: N+1 query in user profile fetch (add eager loading)
> - Test Coverage: Auth error cases at 30%, target 80%
>
> **Implementation Steps for #1**: [Detailed steps...]

**Rule of thumb:** Always instruct the main agent to synthesize subagent results into prioritized, actionable recommendations.

---

### ✅ Best Practice 1: Task Decomposition

**Break complex work into focused, independent subtasks:**

```
# Good decomposition:
Research → One subagent (investigate existing patterns)
Analysis → One subagent (evaluate tradeoffs of 3 approaches)
Implementation planning → One subagent (design file structure and interfaces)
```

**Why this works:**
- Each subagent has clear scope and deliverable
- Phases can run sequentially with human checkpoints
- Failures are isolated (research failure doesn't corrupt implementation)

---

### ✅ Best Practice 2: Clear Output Expectations

**Specify exactly what the subagent should return:**

```
Return a markdown summary with:

**Key Findings** (3-5 bullet points — most important discoveries)

**Recommended Approach** (1 paragraph — which option to pursue and why)

**Risks & Mitigations**
| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| ... | Medium | High | ... |
```

**Why this works:**
- Subagent knows what "done" looks like
- Output is immediately actionable (no follow-up clarification needed)
- Structured format enables automated parsing if needed

---

### ✅ Best Practice 3: Appropriate Parallelization

**Run independent analyses in parallel:**

```
Analyze this pull request using three parallel subagents:
1. Security subagent: Vulnerabilities, secrets exposure, auth bypass risks
2. Performance subagent: N+1 queries, memory leaks, algorithmic complexity
3. Architecture subagent: Pattern consistency, separation of concerns, maintainability

Each subagent works independently. When all complete, synthesize findings into unified PR review.
```

**Why this works:**
- 3 concerns analyzed in parallel (~8 min) vs. sequential (~22 min) = 2.75x faster
- Each subagent forms conclusions independently (no bias from other analyses)
- Main agent synthesizes after all data available (sees full picture)

**When NOT to parallelize:**
- Phase 2 depends on Phase 1 output (sequential required)
- Shared mutable state (e.g., both editing same file)
- Budget constraints (parallel = more simultaneous API calls = higher momentary cost)

---

### ✅ Best Practice 4: Result Synthesis

**Always instruct the main agent to combine and interpret subagent results:**

```
After subagents complete:

1. Identify conflicts or contradictions between findings
2. Prioritize by impact and effort (high-impact, low-effort first)
3. Group related findings (e.g., all security issues together)
4. Propose concrete next steps with owners and timelines

Present as:
- Executive summary (2-3 sentences)
- Prioritized recommendations (High/Medium/Low)
- Implementation plan (specific steps, estimated effort)
```

**Why this works:**
- Transforms raw research into actionable decisions
- Saves user cognitive load (don't make them synthesize manually)
- Creates clear next steps (no "now what?" moment)

---

## Real-World Use Cases

### Use Case 1: Pre-Implementation Research

**The Problem:** Jumping straight into implementation without understanding existing codebase patterns leads to inconsistent code that doesn't match architectural conventions.

**The Solution:**
```
Before implementing the user profile feature, run a subagent to research:

**Scope:**
- How do existing features handle user data? (Check users, accounts, settings modules)
- What profile-related utilities exist? (Avatar handling, bio parsing, etc.)
- What patterns are used for API endpoints? (REST structure, error handling, validation)

**Deliverable:**
- "Established Patterns" section with code examples
- "Reusable Components" section with import paths
- "Constraints" section with must-follow and must-avoid patterns

Then implement the feature following these patterns.
```

**Outcome:** Implementation matches codebase conventions automatically. No refactoring needed after code review. **Metric:** Pattern-inconsistent code reviews dropped from 40% to <10%.

---

### Use Case 2: Parallel Concern Analysis

**The Problem:** Evaluating multiple concerns (security, performance, maintainability) sequentially takes 45+ minutes and risks fatigue-induced oversights.

**The Solution:**
```
Review this authentication module using three parallel subagents:

1. **Security-Review** agent as subagent:
   Check for: vulnerabilities, secrets exposure, auth bypass risks, token handling issues

2. **Performance-Optimizer** agent as subagent:
   Check for: N+1 queries, excessive hashing, token validation overhead, memory leaks

3. **Maintainability-Checker** agent as subagent:
   Check for: code complexity, separation of concerns, test coverage, documentation clarity

When all subagents complete, synthesize into prioritized action items:
- **Blockers**: Critical issues preventing deployment
- **High Priority**: Should fix before next release
- **Medium Priority**: Improvements for next sprint
- **Low Priority**: Nice-to-have enhancements
```

**Outcome:** 3 specialized reviews run in 12 minutes (parallel) vs. 45 minutes (sequential). **Throughput:** 3.75x faster. **Quality:** Each specialized agent catches domain-specific issues generic reviews miss.

---

### Use Case 3: Solution Exploration Without Context Pollution

**The Problem:** Exploring 3 caching approaches (Redis, in-memory LRU, hybrid disk/memory) in main context creates 24K tokens of comparison prose. Final decision context is buried in exploration noise.

**The Solution:**
```
Evaluate caching strategies using three parallel subagents:

1. **Redis Approach Subagent**:
   - Prototype Redis integration
   - Estimate infra cost, latency, complexity
   - Identify failure modes (Redis down, network partition)

2. **In-Memory LRU Subagent**:
   - Prototype LRU cache with eviction policy
   - Estimate memory requirements, GC impact
   - Identify failure modes (insufficient memory, cache stampede)

3. **Hybrid Disk/Memory Subagent**:
   - Design two-tier caching (memory L1, disk L2)
   - Estimate complexity, latency, storage needs
   - Identify failure modes (disk I/O bottleneck, consistency issues)

Each subagent returns:
- **Pros** (3-5 bullets)
- **Cons** (3-5 bullets)
- **Best For** (which use cases suit this approach)
- **Cost Estimate** (infra, development effort, operational complexity)

After all subagents report, synthesize into:
- **Recommended Approach** with rationale
- **Runner-Up** for future consideration
- **Rejected Approaches** with reasons

DO NOT implement—just recommend. Wait for human approval before coding.
```

**Outcome:** 3 prototypes explored in parallel (isolated contexts). Main agent receives only 3 structured summaries (~2K tokens total). Decision rationale is clear, not buried in 24K tokens of exploration. **Final context:** 2K tokens vs. 24K without subagents = 92% reduction.

---

### Use Case 4: Multi-Repo Dependency Research

**The Problem:** Feature requires changes to authentication service, user service, and API gateway. Understanding impact across 3 repos takes 2+ hours of sequential investigation.

**The Solution:**
```
Research cross-service impact using parallel subagents:

1. **Auth Service Subagent** (in auth-service repo):
   - What changes needed for new OAuth provider?
   - What integration tests require updates?
   - What deployment dependencies exist?

2. **User Service Subagent** (in user-service repo):
   - What user profile fields need OAuth data?
   - What caching invalidation required?
   - What backward compatibility concerns?

3. **API Gateway Subagent** (in api-gateway repo):
   - What routing rules need OAuth provider?
   - What rate limiting applies?
   - What logging/monitoring changes required?

Each subagent analyzes its own repo independently. When all complete, synthesize into:
- **Implementation Order** (which service to change first and why)
- **Integration Points** (where services interact)
- **Rollout Plan** (how to deploy safely across services)
```

**Outcome:** 3 repo investigations run in parallel (20 min) vs. sequential (2+ hours) = 6x faster. Cross-service dependencies identified early. Rollout plan accounts for all integration points.

---

### Use Case 5: Regulatory Compliance Research

**The Problem:** Implementing payment processing requires understanding PCI-DSS, GDPR, and SOC2 requirements. Researching all three sequentially is time-consuming and error-prone.

**The Solution:**
```
Research compliance requirements using specialized subagents:

1. **PCI-DSS Subagent** (use Compliance-Checker custom agent):
   - What cardholder data can we store?
   - What encryption requirements apply?
   - What logging/audit requirements exist?

2. **GDPR Subagent** (use Compliance-Checker custom agent):
   - What consent requirements for payment data?
   - What data retention limits?
   - What "right to deletion" implications?

3. **SOC2 Subagent** (use Compliance-Checker custom agent):
   - What access control requirements?
   - What change management procedures?
   - What incident response requirements?

Each subagent returns:
- **MUST DO** (hard requirements, non-optional)
- **SHOULD DO** (strong recommendations)
- **NICE TO HAVE** (best practices beyond minimum)

Synthesize into implementation checklist with requirement sources (which regulation requires which control).
```

**Outcome:** 3 compliance frameworks researched in parallel. Implementation checklist shows which requirements overlap (implement once, satisfy multiple regulations). **Risk reduction:** All requirements identified upfront, not discovered during audit.

---

## ✅ What You Can Do Today

**Immediate Actions (15 minutes):**
- [ ] Try implicit subagent invocation in chat: `"Run a subagent to research how authentication works in this codebase and return a summary"`
- [ ] Check if `runSubagent` tool is enabled: Open chat, type `@workspace /tools`, verify `agent` or `runSubagent` appears
- [ ] Review an existing complex task: Identify phases that could run as parallel subagents (research ‖ analysis ‖ review)

**Short-Term Implementation (1 hour):**
- [ ] Create your first prompt file with subagent workflow: Copy "Research-Driven Feature Implementation" example from this talk, adapt to your project
- [ ] Define one custom agent for specialized subagent role: Create `.github/agents/security-review.agent.md` with focused tools and instructions
- [ ] Test parallel subagent execution: Try "Analyze this PR using three parallel subagents" pattern on a real pull request

**Advanced Exploration (2-4 hours):**
- [ ] Build a reproducible research workflow: Create prompt file that runs research → analysis → synthesis as three sequential subagents
- [ ] Implement visibility controls: Create an internal helper agent (`user-invokable: false`) that other agents use as subagent
- [ ] Design a multi-phase pipeline: Use `agents` property to restrict which subagents are available at each stage (Research → Planning → Implementation)

**Next Steps After Completion:**
1. ✅ Complete the immediate actions above
2. 📖 Review related talk: [Custom Agents](../workshop/06-custom-agents/) to create specialized subagent roles
3. 💬 Share your results: What throughput improvement did you see with parallel subagents?
4. 🚀 Explore advanced pattern: [Agent Teams](../agent-teams/) for role-based workflows vs. context isolation

---

## Related Patterns

### Complementary Features

- **[Agent Teams](../agent-teams/)** — When you need specialized roles (planner/coder/reviewer) vs. just context isolation for multi-phase work
- **[Custom Agents](../../workshop/06-custom-agents/)** — Create specialized agents to run as subagents with focused tools and instructions
- **[Parallel Execution](../parallel-execution/)** — When phases need separate Git branches (worktrees) vs. just isolated contexts
- **[Prompt Files](../../workshop/03-custom-prompts/)** — Externalize subagent workflows for reproducibility and version control

### Decision Flow

**If this talk doesn't fit your needs:**

```
Q: What's your actual goal?
├─ "Run same agent on different branches simultaneously"
│  → See: Parallel Execution (uses worktrees, not just context isolation)
│
├─ "Separate planner, coder, and reviewer roles"
│  → See: Agent Teams (different personas, sequential handoffs)
│
├─ "Just want to research before implementing"
│  → Use: Single subagent for research, main agent for implementation (simpler)
│
└─ "Automate entire issue-to-PR lifecycle"
   → See: Agentic Journey (GitHub Actions workflows with agents)
```

See [DECISION-GUIDE.md](../DECISION-GUIDE.md) for complete navigation help.

---

## 📚 Official Documentation

**Primary Documentation:**
- 📖 **[VS Code Subagents Documentation](https://code.visualstudio.com/docs/copilot/agents/subagents)** — Core concepts, invocation patterns, usage scenarios, and custom agent integration
- 📖 **[Custom Agents Documentation](https://code.visualstudio.com/docs/copilot/customization/custom-agents)** — Create specialized agents for subagent roles with focused tools and instructions
- 📖 **[Agents Overview](https://code.visualstudio.com/docs/copilot/agents/overview)** — Understanding agent types (local, background, cloud) and when to use each

**Additional Resources:**
- 🎓 [Chat Sessions](https://code.visualstudio.com/docs/copilot/chat/chat-sessions) — Managing agent sessions and context across conversations
- 🔧 [Prompt Files](https://code.visualstudio.com/docs/copilot/customization/prompt-files) — Create reusable prompt templates with subagent workflows
- 📋 [Tools in Chat](https://code.visualstudio.com/docs/copilot/chat/chat-tools) — Understanding tools available to agents and subagents
