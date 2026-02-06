# GitHub Copilot Hooks: Programmable Governance for Agent Workflows

> **The Question This Talk Answers:**
> *"How do I govern AI agent workflows without blocking their velocity?"*

**Duration:** 45 minutes | **Target Audience:** DevOps Engineers / Security Architects / Compliance Officers

---

## 📊 Content Fitness

| Criterion | Assessment | Notes |
|-----------|-----------|-------|
| **Relevant** | 🟢 High | Every team with agents needs governance — security, compliance, quality enforcement — without manual gates |
| **Compelling** | 🟢 High | Only `preToolUse` can prevent violations before they happen; all other observability tools are post-incident |
| **Actionable** | 🟢 High | Working hook configurations you can deploy in 1-2 hours; immediate security/compliance value |

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
9. **Lifecycle Control** ← 🎬 Section 1 (3-4 slides)
10. **Preventive Enforcement** ← 🎬 Section 2 (3-4 slides)
11. **Observability & Audit** ← 🎬 Section 3 (2-3 slides)
12. **Real-World Patterns** ← 🎬 Section 4 (3-4 slides)
13. **Advanced Integration** ← 🎬 Section 5 (2-3 slides)
14. **Use Cases** ← Real-World Use Cases (1-2 slides)
15. **Actionable Outcomes** ← What You Can Do Today
16. **Related Patterns** ← Related Patterns
17. **Official Documentation** ← 📚 section
18. **End Slide** ← Auto-generated

### Major Sections (TOC Entries)

```markdown
<!-- 🎬 MAJOR SECTION: Lifecycle Control -->
<!-- 🎬 MAJOR SECTION: Preventive Enforcement -->
<!-- 🎬 MAJOR SECTION: Observability & Audit -->
<!-- 🎬 MAJOR SECTION: Real-World Patterns -->
<!-- 🎬 MAJOR SECTION: Advanced Integration -->
```

---

## The Problem

### Key Points

- **AI agents operate autonomously**
  Copilot creates files, runs commands, accesses APIs — all without pre-approval gates or manual review

- **Compliance requires audit trails**
  Regulated environments (finance, healthcare, government) need complete evidence of what happened, when, and who authorized it

- **Security policies must be enforced in real-time**
  Can't rely on post-incident review to catch `rm -rf /` or `DROP TABLE` commands — violations must be prevented

- **Quality standards need validation at creation**
  Style violations, test failures, and policy breaches should block commits before they're created, not in CI review

### Narrative

AI agents move fast — creating files, running commands, deploying changes. This autonomy creates value through velocity, but it also creates risk in regulated environments.

Security teams ask: "How do we prevent dangerous operations before they execute?" Post-incident review doesn't work when the damage is done. Audit teams need: "Complete evidence trail of every agent action" for compliance reporting and investigation. Quality teams demand: "Enforcement of standards at the point of creation, not in CI review" to eliminate rework cycles.

Manual approval gates destroy velocity. Static policies in CI catch violations too late. What's needed is programmable governance at the moment of action — control points that execute synchronously, validate operations against policies, and either allow or deny execution before anything happens.

GitHub Copilot Hooks provide exactly that: programmable control points at six critical lifecycle moments. This enables velocity with visibility, automation with accountability, and agent autonomy within governed boundaries.

---

## The Solution: GitHub Copilot Hooks

### What It Does

Hooks execute custom shell commands at strategic lifecycle points in agent workflows — before tool execution, after completion, on session start/end, and on errors. Each hook receives JSON context via stdin, processes it, and can output decisions (for `preToolUse`) or log/alert as needed.

### Key Capabilities

- **Preventive Control**: `preToolUse` hook can deny tool execution before it happens with `{"permissionDecision": "deny"}` — the only hook with veto power
- **Complete Audit Trail**: All six lifecycle events (`sessionStart`, `userPromptSubmitted`, `preToolUse`, `postToolUse`, `errorOccurred`, `sessionEnd`) provide full observability
- **Synchronous Execution**: Hooks run in the agent execution path with configurable timeouts (default 30s) — agents wait for hook completion
- **JSON Lines Logging**: Structured append-only format enables direct querying with `jq`, SQL imports, and log aggregation platform compatibility

### Architecture Overview

Hooks are configured in `.github/hooks/*.json` files on the repository's default branch. When an event occurs, Copilot discovers hook configurations, spawns shell processes (bash or PowerShell), writes JSON context to stdin, waits for completion, and for `preToolUse` hooks, reads stdout to determine permission.

The critical distinction: **`preToolUse` is the only hook that can prevent actions** — all others are observational. This makes it uniquely powerful for security enforcement, compliance validation, and quality gates. Keep hooks fast (<5 seconds ideal) to avoid degrading agent responsiveness. Use asynchronous logging and background processing for expensive operations.

**Official Documentation:**
- 📖 [About Hooks](https://docs.github.com/en/copilot/concepts/agents/coding-agent/about-hooks) — Core concepts and hook types
- 📖 [Hooks Configuration Reference](https://docs.github.com/en/copilot/reference/hooks-configuration) — Complete spec with input/output formats
- 📖 [Using Hooks with GitHub Copilot Agents](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/coding-agent/use-hooks) — Step-by-step implementation guide

---

## 📦 Key Artifacts

**This talk includes 5 complete working hook configurations** demonstrating security enforcement, compliance audit, and quality gates.

### Primary Artifacts

*Shown inline with detailed explanation in the major sections below*

- **`security-hooks.json`** — Security policy enforcement: blocks dangerous commands, privilege escalation, destructive operations
- **`audit-hooks.json`** — Complete compliance audit trail: logs all lifecycle events to JSON Lines format
- **`quality-hooks.json`** — Code quality gates: enforces linting before file edits, blocks non-compliant code
- **`session-hooks.sh`** — Session lifecycle management: initialization, cleanup, resource allocation
- **`security-check.sh`** — Pre-execution validation script: pattern matching for dangerous operations

### Supporting Files

*Referenced but not shown inline — available in repository*

- **[Example Hook Scripts](../../examples/completed-config/hooks/scripts/)** — Reusable bash/PowerShell scripts for common patterns
- **[Hook Configuration Examples](../../examples/completed-config/hooks/)** — Complete working configurations for multiple use cases
- **[Terminal Sandboxing Talk](../terminal-sandboxing/)** — Complementary OS-level execution controls

---

## 🎯 Mental Model Shift

> **The Core Insight:** From "agents work and we review their output" to "agents propose actions and governance approves them in real-time"

### Move Toward (Embrace These Patterns)

- ✅ **Preventive Governance**: Use `preToolUse` to deny operations before they execute → Stop violations before damage occurs, not after
- ✅ **Structured Logging**: JSON Lines format (`.jsonl`) for all audit trails → Direct querying with `jq`, append safety, tool compatibility
- ✅ **Deny-by-Default Security**: Hooks block operations unless explicitly approved by policy → Safer than allow-with-filtering
- ✅ **Fast Synchronous Validation**: Keep hooks under 5 seconds → Governance without velocity impact
- ✅ **Separation of Concerns**: Hook logic in versioned scripts, not embedded in YAML → Reviewable, testable, maintainable governance

### Move Away From (Retire These Habits)

- ⚠️ **Post-Incident Review**: Manual log parsing after violations occur → Too late to prevent damage, expensive investigation
- ⚠️ **Manual Approval Gates**: Human review before every agent action → Destroys velocity, creates bottlenecks
- ⚠️ **Unstructured Logging**: Plain text logs without query capability → Hours of `grep`/`awk`, incomplete audit trails
- ⚠️ **CI-Only Validation**: Catching policy violations in CI pipelines → Rework cycles, wasted compute, frustrated teams

### Move Against (Active Resistance Required)

- 🛑 **Allow-by-Default Security**: Permissive policies that filter violations → Attack surface for policy bypass, incomplete coverage
- 🛑 **Slow Hooks**: Expensive operations in the execution path (>30s) → Agent timeouts, degraded responsiveness, poor experience
- 🛑 **Logging Sensitive Data**: Credentials, tokens, or PII in audit logs → Compliance violations, security incidents

> **Example Transformation:** Before: Developer manually reviews 50 issues, 8 are duplicates caught in sprint retrospective (wasted 6 hours). After: Triage agent with `sessionStart` hook validates state, `postToolUse` logs all actions, catches duplicates in 3 minutes with 100% coverage. Savings: 5.75 hours per sprint, real-time detection, complete audit trail.

---

## When to Use This Pattern

### Decision Tree

```
Q: What's your governance requirement?
├─ "Prevent dangerous operations before execution"
│  → Use: preToolUse hook with security policies
│  └─ Best for: Security enforcement, regulated environments
│
├─ "Complete audit trail for compliance"
│  → Use: All 6 lifecycle hooks with JSON Lines logging
│  └─ Best for: Finance, healthcare, government compliance
│
├─ "Enforce code quality before commits"
│  → Use: preToolUse hook with linter validation
│  └─ Best for: Quality gates, shift-left enforcement
│
└─ "Blanket network/filesystem restrictions"
   → Use: Terminal Sandboxing (see related talk)
   └─ Best for: Defense-in-depth, prompt injection protection
```

### Use This Pattern When

- You need real-time prevention (not post-incident review)
- Compliance requires complete audit trails (SOC 2, HIPAA, etc.)
- Quality standards must be enforced at creation (shift-left)
- Agents operate in regulated/sensitive environments
- You want observability into every agent action

### Don't Use This Pattern When

- You need OS-level execution controls → Use [Terminal Sandboxing](../terminal-sandboxing/)
- Agents don't touch sensitive systems → Observability overhead may not be worth it
- You have <5 agent sessions/week → Manual review may be sufficient

### Comparison with Related Features

| Aspect | Copilot Hooks | Terminal Sandboxing | Custom Instructions |
|--------|---------------|---------------------|---------------------|
| **Best For** | Real-time governance & audit | OS-level restrictions | Agent behavior guidance |
| **Control Timing** | Before/after each action | Blanket runtime limits | Pre-action intent setting |
| **Veto Power** | Yes (`preToolUse` only) | Yes (blocks via OS) | No (suggestions only) |
| **Setup Time** | 1-2 hours | 30 minutes | 15 minutes |
| **Performance Impact** | <5s per action typical | None (native OS) | None |

---

<!-- 🎬 MAJOR SECTION: Lifecycle Control -->
## Phase 1: Lifecycle Control

*Understanding the six hook types and when each executes*

### The Six Lifecycle Events

### The Six Lifecycle Events

**1. `sessionStart`** — Agent session initialization
- Executes when a new session begins or when resuming an existing session
- Input: `timestamp`, `cwd`, `source` ("new", "resume", or "startup"), `initialPrompt`
- Output: Ignored (observational only)
- **Use case**: Validate project state (clean working directory, required tools installed), initialize logging, set environment variables

**2. `sessionEnd`** — Agent session cleanup
- Executes when session completes or is terminated
- Input: `timestamp`, `cwd`, `reason` ("complete", "error", "abort", "timeout", "user_exit")
- Output: Ignored (observational only)
- **Use case**: Archive logs to persistent storage, send summary reports, release resources

**3. `userPromptSubmitted`** — User request capture
- Executes when user submits a prompt to the agent
- Input: `timestamp`, `cwd`, `prompt` (exact user text)
- Output: Ignored (prompt modification not supported)
- **Use case**: Log requests for audit compliance, track prompt patterns for usage analysis

**4. `preToolUse`** — Pre-execution validation ⚡ **MOST POWERFUL**
- Executes before agent uses any tool (`bash`, `edit`, `view`, `create`, etc.)
- Input: `timestamp`, `cwd`, `toolName`, `toolArgs` (JSON string with tool arguments)
- Output: `{"permissionDecision": "deny", "permissionDecisionReason": "..."}` to block
- **Use case**: Real-time security enforcement, approve/deny before execution, policy validation

**5. `postToolUse`** — Post-execution tracking
- Executes after tool completes (success or failure)
- Input: `timestamp`, `cwd`, `toolName`, `toolArgs`, `toolResult` (with `resultType` and `textResultForLlm`)
- Output: Ignored (result modification not supported)
- **Use case**: Log execution results, collect metrics (time, resource usage), trigger alerts

**6. `errorOccurred`** — Failure handling
- Executes when an error occurs during agent execution
- Input: `timestamp`, `cwd`, `error` (with `message`, `name`, `stack`)
- Output: Ignored (error handling modification not supported)
- **Use case**: Capture error details for debugging, alert teams to failures, track error patterns

### Hook Configuration Format

Hooks are defined in `.github/hooks/*.json` files:

```json
{
  "version": 1,
  "hooks": {
    "sessionStart": [
      {
        "type": "command",
        "bash": "./scripts/session-start.sh",
        "powershell": "./scripts/session-start.ps1",
        "cwd": "scripts",
        "timeoutSec": 30,
        "env": {
          "LOG_LEVEL": "INFO"
        }
      }
    ],
    "preToolUse": [
      {
        "type": "command",
        "bash": "./scripts/security-check.sh",
        "timeoutSec": 5
      }
    ]
  }
}
```

**Configuration fields:**
- `type`: Must be `"command"`
- `bash`: Path to bash script (required on Unix)
- `powershell`: Path to PowerShell script (required on Windows)
- `cwd`: Working directory (optional, relative to repo root)
- `timeoutSec`: Maximum execution time (default: 30 seconds)
- `env`: Additional environment variables (optional)

### Execution Flow

1. **Event Detection** — Agent detects lifecycle event (session start, tool request, etc.)
2. **Hook Discovery** — Reads `.github/hooks/*.json` from repository default branch
3. **Script Invocation** — Spawns shell process with event context
4. **Context Passing** — Writes JSON payload to script stdin
5. **Execution** — Waits for script completion (up to `timeoutSec`)
6. **Output Parsing** — For `preToolUse`, reads stdout for permission decision
7. **Action** — Proceeds (allow) or aborts (deny) based on hook response

**Example input JSON to script:**

```json
{
  "timestamp": 1704614600000,
  "cwd": "/workspace/project",
  "toolName": "bash",
  "toolArgs": "{\"command\":\"rm -rf dist\",\"description\":\"Clean build directory\"}"
}
```

**Example output JSON from `preToolUse` hook:**

```json
{
  "permissionDecision": "deny",
  "permissionDecisionReason": "Destructive operations outside approved directories"
}
```

### Performance Considerations

Hooks run synchronously in the agent execution path. Keep them fast to avoid degrading responsiveness:

- **Target execution times:**
  - <2 seconds for security checks and logging
  - <5 seconds for linting and validation
  - <30 seconds only for external API calls (use `timeoutSec` override)

- **Performance patterns:**
  - Cache expensive computations (compiled regex, policy lookups)
  - Use asynchronous logging (append to file, don't wait for I/O)
  - Offload slow work to background jobs triggered by hooks
  - Profile scripts: `time ./hook.sh < test-input.json`

---

<!-- 🎬 MAJOR SECTION: Preventive Enforcement -->
## Phase 2: Preventive Enforcement with `preToolUse`

## Phase 2: Preventive Enforcement with `preToolUse`

*The only hook that can deny operations before they happen*

### Why `preToolUse` is Uniquely Powerful

All other hooks are **observational** — they log, alert, and track, but they can't stop actions. Only `preToolUse` can output a `permissionDecision: "deny"` response that prevents tool execution.

This makes it ideal for:
- **Security enforcement**: Block dangerous commands before they run
- **Compliance validation**: Require approval for sensitive operations
- **Quality gates**: Enforce standards before code is written
- **Policy enforcement**: Validate operations against project-specific rules

### Security Check Implementation

Block dangerous operations before execution:

```bash
#!/bin/bash
# .github/hooks/scripts/security-check.sh

INPUT=$(cat)
TOOL_NAME=$(echo "$INPUT" | jq -r '.toolName')
TOOL_ARGS=$(echo "$INPUT" | jq -r '.toolArgs')

# Only validate bash commands
if [ "$TOOL_NAME" != "bash" ]; then
  exit 0  # Allow all non-bash tools
fi

# Extract command from tool args
COMMAND=$(echo "$TOOL_ARGS" | jq -r '.command')

# Block dangerous delete operations
if echo "$COMMAND" | grep -qE 'rm -rf /|del /s /q|rmdir /s|format'; then
  echo '{"permissionDecision":"deny","permissionDecisionReason":"Destructive file operation blocked by security policy"}'
  exit 0
fi

# Block privilege escalation
if echo "$COMMAND" | grep -qE '^sudo |^runas |^su '; then
  echo '{"permissionDecision":"deny","permissionDecisionReason":"Privilege escalation not allowed"}'
  exit 0
fi

# Block database destruction
if echo "$COMMAND" | grep -qiE 'DROP TABLE|DROP DATABASE|TRUNCATE TABLE'; then
  echo '{"permissionDecision":"deny","permissionDecisionReason":"Database destructive operations require manual approval"}'
  exit 0
fi

# Default: allow (no output means allow)
exit 0
```

### Hook Configuration

```json
{
  "version": 1,
  "hooks": {
    "preToolUse": [
      {
        "type": "command",
        "bash": "./scripts/security-check.sh",
        "powershell": "./scripts/security-check.ps1",
        "cwd": ".github/hooks",
        "timeoutSec": 5
      }
    ]
  }
}
```

### File Path Restrictions

Restrict agent operations to approved directories:

```bash
#!/bin/bash
# Only allow editing files in specific directories

INPUT=$(cat)
TOOL_NAME=$(echo "$INPUT" | jq -r '.toolName')

# Only validate file editing tools
if [ "$TOOL_NAME" != "edit" ] && [ "$TOOL_NAME" != "create" ]; then
  exit 0
fi

# Extract file path from tool args
PATH_ARG=$(echo "$INPUT" | jq -r '.toolArgs' | jq -r '.path // empty')

# Check if path is in approved directories
if [[ ! "$PATH_ARG" =~ ^(src/|test/|docs/) ]]; then
  echo '{"permissionDecision":"deny","permissionDecisionReason":"Can only edit files in src/, test/, or docs/ directories"}'
  exit 0
fi

# Allow approved paths
exit 0
```

### Environment-Aware Policies

Apply stricter rules in production environments:

```bash
#!/bin/bash
INPUT=$(cat)
CWD=$(echo "$INPUT" | jq -r '.cwd')
TOOL_NAME=$(echo "$INPUT" | jq -r '.toolName')

# Stricter policies in production
if [[ "$CWD" =~ /production/ ]]; then
  # Require approval for all file writes
  if [[ "$TOOL_NAME" == "edit" || "$TOOL_NAME" == "create" ]]; then
    echo '{"permissionDecision":"deny","permissionDecisionReason":"Production changes require manual approval"}'
    exit 0
  fi
fi

# Permissive in development
exit 0
```

### Key Principles

**Deny by Default:**
- Hooks should deny operations unless explicitly approved
- Safer than allow-by-default with violation filtering
- Reduces attack surface for policy bypass

**Fast Execution:**
- Keep validation logic simple and cached
- Target <2 seconds for security checks
- Use regex compilation and policy lookup caching

**Clear Denial Messages:**
- `permissionDecisionReason` should explain what was blocked and why
- Help developers understand policy violations
- Include guidance on how to proceed correctly

---

<!-- 🎬 MAJOR SECTION: Observability & Audit -->
## Phase 3: Observability & Audit Trail

*Complete lifecycle logging for compliance and debugging*

### Structured Logging with JSON Lines

JSON Lines format (`.jsonl`) — one JSON object per line — provides:
- **Direct querying**: Use `jq` for SQL-like filtering without parsing
- **Append safety**: Concurrent writes don't corrupt file
- **Tool compatibility**: Import to SQLite, Elasticsearch, Datadog, etc.
- **Incremental streaming**: Process logs as they're written

### Session Lifecycle Logging

Log every session event for complete audit trail:

```bash
#!/bin/bash
# .github/hooks/scripts/log-session-start.sh

INPUT=$(cat)
LOG_FILE="logs/audit.jsonl"
mkdir -p logs

# Append structured log entry
echo "$INPUT" | jq -c '. + {
  event: "sessionStart",
  loggedAt: (now | todate)
}' >> "$LOG_FILE"
```

### Tool Usage Logging

Track every tool execution with results:

```bash
#!/bin/bash
# .github/hooks/scripts/log-tool-use.sh

INPUT=$(cat)
LOG_FILE="logs/audit.jsonl"
mkdir -p logs

TOOL_NAME=$(echo "$INPUT" | jq -r '.toolName')
RESULT_TYPE=$(echo "$INPUT" | jq -r '.toolResult.resultType')

# Log tool execution with timestamp
jq -n \
  --arg tool "$TOOL_NAME" \
  --arg result "$RESULT_TYPE" \
  --arg ts "$(date -u +%Y-%m-%dT%H:%M:%SZ)" \
  '{
    timestamp: $ts,
    event: "toolUse",
    toolName: $tool,
    resultType: $result
  }' >> "$LOG_FILE"
```

### Complete Audit Configuration

Wire up all six lifecycle hooks for full observability:

```json
{
  "version": 1,
  "hooks": {
    "sessionStart": [
      {
        "type": "command",
        "bash": "./scripts/log-session-start.sh",
        "cwd": ".github/hooks"
      }
    ],
    "userPromptSubmitted": [
      {
        "type": "command",
        "bash": "./scripts/log-prompt.sh",
        "cwd": ".github/hooks"
      }
    ],
    "preToolUse": [
      {
        "type": "command",
        "bash": "./scripts/log-tool-pre.sh",
        "cwd": ".github/hooks"
      }
    ],
    "postToolUse": [
      {
        "type": "command",
        "bash": "./scripts/log-tool-post.sh",
        "cwd": ".github/hooks"
      }
    ],
    "errorOccurred": [
      {
        "type": "command",
        "bash": "./scripts/log-error.sh",
        "cwd": ".github/hooks"
      }
    ],
    "sessionEnd": [
      {
        "type": "command",
        "bash": "./scripts/log-session-end.sh",
        "cwd": ".github/hooks"
      }
    ]
  }
}
```

### Example Audit Log Output

```jsonl
{"timestamp":"2026-02-06T17:30:00Z","event":"sessionStart","sessionId":"abc123","source":"new"}
{"timestamp":"2026-02-06T17:30:15Z","event":"userPrompt","prompt":"Refactor authentication module"}
{"timestamp":"2026-02-06T17:30:20Z","event":"preToolUse","toolName":"edit","path":"src/auth.js","permissionDecision":"allow"}
{"timestamp":"2026-02-06T17:30:25Z","event":"postToolUse","toolName":"edit","result":"success"}
{"timestamp":"2026-02-06T17:30:30Z","event":"sessionEnd","toolsUsed":3,"violations":0}
```

### Querying Audit Logs

**Count tool usage by type:**
```bash
cat logs/audit.jsonl | jq -r '.toolName' | sort | uniq -c
```

**Find all denied operations:**
```bash
cat logs/audit.jsonl | jq 'select(.permissionDecision == "deny")'
```

**Export to CSV for compliance reporting:**
```bash
cat logs/audit.jsonl | jq -r '[.timestamp, .toolName, .result] | @csv' > report.csv
```

**Track error patterns:**
```bash
cat logs/audit.jsonl | jq 'select(.event == "error") | .error.name' | sort | uniq -c
```

### Error Logging

Capture error details for debugging and alerting:

```bash
#!/bin/bash
# .github/hooks/scripts/log-error.sh

INPUT=$(cat)
LOG_FILE="logs/errors.jsonl"
mkdir -p logs

ERROR_MSG=$(echo "$INPUT" | jq -r '.error.message')
ERROR_NAME=$(echo "$INPUT" | jq -r '.error.name')

# Log error with context
echo "$INPUT" | jq -c '. + {
  loggedAt: (now | todate),
  severity: "error"
}' >> "$LOG_FILE"

# Alert on critical errors (optional)
if echo "$ERROR_NAME" | grep -qE "FatalError|SecurityViolation"; then
  # Send alert to monitoring system
  curl -X POST "$ALERT_WEBHOOK" -d "{\"text\":\"Critical agent error: $ERROR_MSG\"}"
fi
```

---

<!-- 🎬 MAJOR SECTION: Real-World Patterns -->
## Phase 4: Real-World Implementation Patterns

*Proven patterns for security, compliance, and quality*

### Pattern 1: Multi-Layer Security Enforcement

Combine multiple security checks in sequence:

```json
{
  "version": 1,
  "hooks": {
    "preToolUse": [
      {
        "type": "command",
        "bash": "./scripts/security-dangerous-commands.sh",
        "comment": "Block dangerous system commands",
        "timeoutSec": 3
      },
      {
        "type": "command",
        "bash": "./scripts/security-file-permissions.sh",
        "comment": "Validate file access permissions",
        "timeoutSec": 3
      },
      {
        "type": "command",
        "bash": "./scripts/security-secret-scanning.sh",
        "comment": "Prevent credential leaks",
        "timeoutSec": 5
      }
    ]
  }
}
```

**Execution**: Hooks run in order. First denial stops execution immediately.

### Pattern 2: Code Quality Gates

Enforce linting before code changes:

### Pattern 2: Code Quality Gates

Enforce linting before code changes:

```bash
#!/bin/bash
# .github/hooks/scripts/quality-lint-check.sh

INPUT=$(cat)
TOOL_NAME=$(echo "$INPUT" | jq -r '.toolName')

# Only lint code file edits
if [ "$TOOL_NAME" != "edit" ] && [ "$TOOL_NAME" != "create" ]; then
  exit 0
fi

# Extract file path
FILE_PATH=$(echo "$INPUT" | jq -r '.toolArgs' | jq -r '.path // empty')

# Only check code files
if [[ ! "$FILE_PATH" =~ \.(js|ts|jsx|tsx|py|go|rs)$ ]]; then
  exit 0
fi

# Run linter (use existing project config)
if [[ "$FILE_PATH" =~ \.(js|ts|jsx|tsx)$ ]]; then
  npx eslint "$FILE_PATH" --quiet > /dev/null 2>&1
elif [[ "$FILE_PATH" =~ \.py$ ]]; then
  ruff check "$FILE_PATH" > /dev/null 2>&1
fi

if [ $? -ne 0 ]; then
  echo '{"permissionDecision":"deny","permissionDecisionReason":"Code fails linting. Run linter locally to see violations."}'
  exit 0
fi

exit 0
```

### Pattern 3: Conditional Policies by Environment

Apply different rules based on working directory:

```bash
#!/bin/bash
INPUT=$(cat)
CWD=$(echo "$INPUT" | jq -r '.cwd')
TOOL_NAME=$(echo "$INPUT" | jq -r '.toolName')

# Production environment: strict controls
if [[ "$CWD" =~ /production/ ]]; then
  # Block all writes
  if [[ "$TOOL_NAME" =~ ^(edit|create|bash)$ ]]; then
    echo '{"permissionDecision":"deny","permissionDecisionReason":"Production changes require manual deployment process"}'
    exit 0
  fi
fi

# Staging environment: require approval for destructive operations
if [[ "$CWD" =~ /staging/ ]]; then
  COMMAND=$(echo "$INPUT" | jq -r '.toolArgs.command // empty')
  if echo "$COMMAND" | grep -qE "rm |delete |drop "; then
    echo '{"permissionDecision":"deny","permissionDecisionReason":"Destructive operations in staging require approval"}'
    exit 0
  fi
fi

# Development environment: permissive (allow all)
exit 0
```

### Pattern 4: Cost Tracking & Metrics

Track tool usage for cost allocation and performance monitoring:

```bash
#!/bin/bash
# .github/hooks/scripts/metrics-tracker.sh

INPUT=$(cat)
LOG_FILE="logs/metrics.jsonl"
mkdir -p logs

TOOL_NAME=$(echo "$INPUT" | jq -r '.toolName')
TIMESTAMP=$(echo "$INPUT" | jq -r '.timestamp')
USER=${GITHUB_ACTOR:-unknown}

# Calculate cost estimate (example: $0.01 per tool use)
COST=0.01

# Log usage metrics
jq -n \
  --arg ts "$TIMESTAMP" \
  --arg user "$USER" \
  --arg tool "$TOOL_NAME" \
  --arg cost "$COST" \
  '{
    timestamp: $ts,
    user: $user,
    toolName: $tool,
    estimatedCost: ($cost | tonumber)
  }' >> "$LOG_FILE"
```

**Query monthly costs:**
```bash
# Sum costs by user for current month
cat logs/metrics.jsonl | jq -s '
  group_by(.user) |
  map({user: .[0].user, totalCost: (map(.estimatedCost) | add)})
'
```

---

<!-- 🎬 MAJOR SECTION: Advanced Integration -->
## Phase 5: Advanced Integration Patterns

*Connecting hooks to external systems and workflows*

### Slack Notifications

Send alerts on security violations or failures:

```bash
#!/bin/bash
INPUT=$(cat)
TOOL_NAME=$(echo "$INPUT" | jq -r '.toolName')
COMMAND=$(echo "$INPUT" | jq -r '.toolArgs.command // empty')

# Check for security violation
if echo "$COMMAND" | grep -qE "rm -rf|sudo|DROP TABLE"; then
  WEBHOOK_URL="$SLACK_WEBHOOK_URL"  # Set in hook env

  curl -X POST "$WEBHOOK_URL" \
    -H 'Content-Type: application/json' \
    -d "{
      \"text\": \"🚨 Security Violation Blocked\",
      \"blocks\": [
        {
          \"type\": \"section\",
          \"text\": {
            \"type\": \"mrkdwn\",
            \"text\": \"*Tool:* \`$TOOL_NAME\`\n*Command:* \`$COMMAND\`\"
          }
        }
      ]
    }"

  echo '{"permissionDecision":"deny","permissionDecisionReason":"Security policy violation - team alerted"}'
  exit 0
fi

exit 0
```

### Metrics Platforms (Datadog, New Relic)

Send performance metrics in real-time:

```bash
#!/bin/bash
INPUT=$(cat)
TOOL_NAME=$(echo "$INPUT" | jq -r '.toolName')
RESULT_TYPE=$(echo "$INPUT" | jq -r '.toolResult.resultType')

# Send metric to Datadog (StatsD protocol)
STATSD_HOST=${STATSD_HOST:-localhost}
STATSD_PORT=${STATSD_PORT:-8125}

# Increment counter
echo "copilot.tool.executed:1|c|#tool:$TOOL_NAME,result:$RESULT_TYPE" | \
  nc -u -w0 "$STATSD_HOST" "$STATSD_PORT"

# Track timing (if available)
if [ "$RESULT_TYPE" = "success" ]; then
  DURATION=$(echo "$INPUT" | jq -r '.toolResult.duration // 0')
  echo "copilot.tool.duration:$DURATION|ms|#tool:$TOOL_NAME" | \
    nc -u -w0 "$STATSD_HOST" "$STATSD_PORT"
fi
```

### Ticketing Systems (Jira, ServiceNow)

Create incidents on critical errors:

```bash
#!/bin/bash
INPUT=$(cat)
ERROR_NAME=$(echo "$INPUT" | jq -r '.error.name')
ERROR_MSG=$(echo "$INPUT" | jq -r '.error.message')

# Create incident for critical errors
if echo "$ERROR_NAME" | grep -qE "FatalError|SecurityViolation|DataLoss"; then
  JIRA_API="$JIRA_BASE_URL/rest/api/3/issue"

  curl -X POST "$JIRA_API" \
    -H "Authorization: Bearer $JIRA_TOKEN" \
    -H "Content-Type: application/json" \
    -d "{
      \"fields\": {
        \"project\": {\"key\": \"SEC\"},
        \"summary\": \"Critical Agent Error: $ERROR_NAME\",
        \"description\": \"$ERROR_MSG\",
        \"issuetype\": {\"name\": \"Incident\"},
        \"priority\": {\"name\": \"P1\"}
      }
    }"
fi
```

### PagerDuty Alerts

Trigger on-call alerts for production errors:

```bash
#!/bin/bash
INPUT=$(cat)
ERROR_MSG=$(echo "$INPUT" | jq -r '.error.message')
CWD=$(echo "$INPUT" | jq -r '.cwd')

# Only alert for production errors
if [[ ! "$CWD" =~ /production/ ]]; then
  exit 0
fi

# Send to PagerDuty
PAGERDUTY_URL="https://events.pagerduty.com/v2/enqueue"

curl -X POST "$PAGERDUTY_URL" \
  -H "Content-Type: application/json" \
  -d "{
    \"routing_key\": \"$PAGERDUTY_INTEGRATION_KEY\",
    \"event_action\": \"trigger\",
    \"payload\": {
      \"summary\": \"Agent error in production\",
      \"severity\": \"critical\",
      \"source\": \"copilot-hooks\",
      \"custom_details\": {
        \"error\": \"$ERROR_MSG\",
        \"cwd\": \"$CWD\"
      }
    }
  }"
```

### Database Logging (PostgreSQL, MySQL)

Store audit logs in database for advanced querying:

```bash
#!/bin/bash
INPUT=$(cat)
TOOL_NAME=$(echo "$INPUT" | jq -r '.toolName')
TIMESTAMP=$(echo "$INPUT" | jq -r '.timestamp')
RESULT=$(echo "$INPUT" | jq -r '.toolResult.resultType // "unknown"')

# Insert into PostgreSQL
psql "$DATABASE_URL" -c "
  INSERT INTO agent_audit_log (timestamp, tool_name, result_type, raw_json)
  VALUES (to_timestamp($TIMESTAMP/1000), '$TOOL_NAME', '$RESULT', '$INPUT'::jsonb)
"
```

### Multi-Hook Coordination

Track session state across multiple hooks:

```bash
#!/bin/bash
# .github/hooks/scripts/session-tracker.sh

INPUT=$(cat)
SESSION_ID=$(echo "$INPUT" | jq -r '.sessionId // "unknown"')
EVENT=$(echo "$INPUT" | jq -r '.event')
SESSION_STATE="/tmp/copilot-session-$SESSION_ID.json"

case "$EVENT" in
  sessionStart)
    # Initialize session tracking
    echo "$INPUT" | jq '{
      sessionId: .sessionId,
      startTime: .timestamp,
      toolsUsed: 0,
      violations: 0
    }' > "$SESSION_STATE"
    ;;

  preToolUse)
    # Track tool usage
    if [ -f "$SESSION_STATE" ]; then
      jq '.toolsUsed += 1' "$SESSION_STATE" > "${SESSION_STATE}.tmp"
      mv "${SESSION_STATE}.tmp" "$SESSION_STATE"
    fi
    ;;

  sessionEnd)
    # Generate summary report
    if [ -f "$SESSION_STATE" ]; then
      jq -c '. + {endTime: now}' "$SESSION_STATE" >> logs/session-summary.jsonl
      rm "$SESSION_STATE"
    fi
    ;;
esac
```

---

## Real-World Use Cases

### Use Case 1: HIPAA Compliance Audit Trail

**The Problem:** Healthcare application development requires complete audit trail of all code changes for HIPAA compliance. Manual log collection takes 2-3 hours per audit request with 60-70% completeness.

**The Solution:** Hooks log every session event to JSON Lines format with automatic archival to S3 for long-term retention:

```json
{
  "version": 1,
  "hooks": {
    "sessionStart": [{"type": "command", "bash": "./audit/log-session-start.sh"}],
    "userPromptSubmitted": [{"type": "command", "bash": "./audit/log-prompt.sh"}],
    "preToolUse": [{"type": "command", "bash": "./audit/log-tool-pre.sh"}],
    "postToolUse": [{"type": "command", "bash": "./audit/log-tool-post.sh"}],
    "errorOccurred": [{"type": "command", "bash": "./audit/log-error.sh"}],
    "sessionEnd": [{"type": "command", "bash": "./audit/archive-to-s3.sh"}]
  }
}
```

**Outcome:**
- Audit time: 2-3 hours → 5 minutes (automated queries)
- Coverage: 60-70% → 100% (complete lifecycle logging)
- Retention: Manual → Automated S3 archival (7-year retention)
- Query capability: Manual `grep` → SQL-like `jq` filtering

---

### Use Case 2: SOC 2 Security Enforcement

**The Problem:** SaaS company needs SOC 2 compliance proof that dangerous operations are prevented before execution. Manual review catches violations after-the-fact (not acceptable for audit).

**The Solution:** `preToolUse` hook blocks dangerous operations with real-time denial:

```bash
#!/bin/bash
INPUT=$(cat)
COMMAND=$(echo "$INPUT" | jq -r '.toolArgs.command // empty')

# Block operations that violate SOC 2 requirements
if echo "$COMMAND" | grep -qE 'rm -rf|DROP|TRUNCATE|sudo|chmod 777'; then
  echo '{"permissionDecision":"deny","permissionDecisionReason":"SOC 2 policy: Dangerous operation requires approval ticket"}'
  # Log violation for audit trail
  echo "$INPUT" | jq -c '. + {violation: "SOC2_DANGEROUS_OP"}' >> logs/violations.jsonl
  exit 0
fi

exit 0
```

**Outcome:**
- Violations detected: Post-incident → Real-time prevention
- Audit evidence: Manual → Automated violation log
- Compliance cost: 40 hours/year auditor time → 5 hours (automated reports)
- Security incidents: 3/year → 0 (preventive enforcement)

---

### Use Case 3: Multi-Tenant SaaS Quality Gates

**The Problem:** Agent-generated code for customer tenants averaging 15 linting violations per PR. Rework cycles cost 30-45 minutes per violation (average 7.5 hours per sprint).

**The Solution:** `preToolUse` hook runs linter before file edits, denies non-compliant code:

```bash
#!/bin/bash
INPUT=$(cat)
TOOL_NAME=$(echo "$INPUT" | jq -r '.toolName')
FILE_PATH=$(echo "$INPUT" | jq -r '.toolArgs.path // empty')

# Only lint code file edits
if [ "$TOOL_NAME" != "edit" ] || [[ ! "$FILE_PATH" =~ \.(js|ts)$ ]]; then
  exit 0
fi

# Run ESLint on proposed changes
TEMP_FILE=$(mktemp)
echo "$INPUT" | jq -r '.toolArgs.newContent // empty' > "$TEMP_FILE"

if ! npx eslint --no-eslintrc -c .eslintrc.json "$TEMP_FILE" > /dev/null 2>&1; then
  echo '{"permissionDecision":"deny","permissionDecisionReason":"Code fails linting. Fix violations before applying."}'
  rm "$TEMP_FILE"
  exit 0
fi

rm "$TEMP_FILE"
exit 0
```

**Outcome:**
- Rework time: 7.5 hours/sprint → 0 (violations blocked at creation)
- Rework rounds: 3 average → 1 (standards enforced before commit)
- CI failures: 15/sprint → 0 (shift-left validation)
- Developer experience: Frustration → Immediate feedback

---

### Use Case 4: Financial Services Regulatory Compliance

**The Problem:** Bank requires separation of duties — junior engineers can't modify production configuration. Manual enforcement relies on PR review (post-implementation, already wasted effort).

**The Solution:** `preToolUse` hook enforces role-based permissions:

```bash
#!/bin/bash
INPUT=$(cat)
USER_ROLE=${COPILOT_USER_ROLE:-"junior"}  # Set via environment
FILE_PATH=$(echo "$INPUT" | jq -r '.toolArgs.path // empty')

# Junior engineers can't edit production configs
if [ "$USER_ROLE" = "junior" ] && [[ "$FILE_PATH" =~ ^(production/|config/prod) ]]; then
  echo '{"permissionDecision":"deny","permissionDecisionReason":"Junior engineers require senior approval for production changes"}'
  exit 0
fi

exit 0
```

**Outcome:**
- Policy enforcement: Post-review → Real-time prevention
- Wasted effort: 2-3 hours/week → 0 (blocked immediately)
- Audit compliance: Manual verification → Automated log evidence
- Regulatory risk: Medium → Low (technical controls enforced)

---

## ✅ What You Can Do Today

**Immediate Actions (15 minutes):**
- [ ] Review [official hooks documentation](https://docs.github.com/en/copilot/concepts/agents/coding-agent/about-hooks) to understand lifecycle events
- [ ] Create `.github/hooks/` directory in your test repository
- [ ] Copy the [example security-check script](#preventive-enforcement-with-pretooluse) to start with basic protection

**Short-Term Implementation (1-2 hours):**
- [ ] Deploy security enforcement hooks with dangerous command blocking
- [ ] Set up `sessionStart`/`sessionEnd` logging for basic observability
- [ ] Test hooks locally: `echo '{"toolName":"bash","toolArgs":"{\"command\":\"rm -rf /\"}"}' | ./security-check.sh`
- [ ] Verify `preToolUse` hook successfully denies dangerous operations

**Advanced Exploration (2-4 hours):**
- [ ] Implement complete audit trail with all 6 lifecycle hooks logging to JSON Lines
- [ ] Integrate with external systems (Slack, Datadog, PagerDuty) for alerts
- [ ] Add environment-aware policies (stricter in production, permissive in dev)
- [ ] Set up query dashboards: tool usage stats, violation trends, performance metrics

**Next Steps After Completion:**
1. ✅ Complete the immediate actions above
2. 📖 Review related talk: [Terminal Sandboxing](../terminal-sandboxing/) for complementary OS-level controls
3. 💬 Share results with your security/compliance team
4. 🚀 Expand to organization-wide hook policies

---

## Related Patterns

### Complementary Features

- **[Terminal Sandboxing](../terminal-sandboxing/)** — OS-level execution controls (network/filesystem restrictions) that complement hook-based governance
- **[Custom Instructions](../../workshop/01-instructions/)** — Define agent behavior guidelines that hooks enforce through validation
- **[Agent Skills](../../workshop/04-agent-skills/)** — Domain-specific capabilities with hook-based audit trails
- **[Enterprise Patterns](../enterprise-patterns/)** — Organization-wide governance frameworks using hooks at scale

### Decision Flow

**If this talk doesn't fit your needs:**

```
Q: What's your governance requirement?
├─ "Block network/filesystem access at OS level"
│  → See: Terminal Sandboxing (blanket restrictions)
│
├─ "Guide agent behavior without enforcement"
│  → See: Custom Instructions (suggestions, not validation)
│
└─ "Organization-wide policy management"
   → See: Enterprise Patterns (centralized governance)
```

See [DECISION-GUIDE.md](../DECISION-GUIDE.md) for complete navigation help.

---

## 📚 Official Documentation

**Primary Documentation:**
- 📖 **[About Hooks](https://docs.github.com/en/copilot/concepts/agents/coding-agent/about-hooks)** — Core concepts, hook types, and when to use each
- 📖 **[Hooks Configuration Reference](https://docs.github.com/en/copilot/reference/hooks-configuration)** — Complete JSON schema, input/output formats, and script examples
- 📖 **[Using Hooks with GitHub Copilot Agents](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/coding-agent/use-hooks)** — Step-by-step setup, troubleshooting, and debugging

**Additional Resources:**
- 💬 [GitHub Community Discussions](https://github.com/orgs/community/discussions) — Get help and share experiences
- 📹 [GitHub Copilot Documentation](https://docs.github.com/en/copilot) — Complete product documentation

---

## 🎭 Behind the Scenes

*For those who want to understand the deeper mechanics*

### Hook Execution Environment

**Environment variables available to hooks:**
- `GITHUB_TOKEN`: For GitHub API calls (read-only access to repository)
- `GITHUB_REPOSITORY`: Repository name (e.g., `owner/repo`)
- `GITH UB_ACTOR`: User triggering the session
- Custom variables via `env` field in hook configuration

**Working directory:**
- Specified by `cwd` field (relative to repository root)
- Defaults to repository root if not specified
- Scripts can access any file in the repository

**Security context:**
- Hooks run with same permissions as the agent
- No elevated privileges by default
- Use environment variables for secrets (never hardcode)

### Input JSON Schema

All hooks receive JSON via stdin with different fields based on event type:

**Common fields (all hooks):**
```typescript
{
  timestamp: number;      // Unix timestamp in milliseconds
  cwd: string;           // Current working directory
}
```

**`preToolUse` / `postToolUse` additions:**
```typescript
{
  toolName: string;          // "bash", "edit", "view", "create", etc.
  toolArgs: string;          // JSON string with tool-specific arguments
  toolResult?: {             // Only in postToolUse
    resultType: "success" | "failure" | "denied";
    textResultForLlm: string;
  }
}
```

**`sessionStart` addition:**
```typescript
{
  source: "new" | "resume" | "startup";
  initialPrompt?: string;
}
```

**`sessionEnd` addition:**
```typescript
{
  reason: "complete" | "error" | "abort" | "timeout" | "user_exit";
}
```

**`errorOccurred` addition:**
```typescript
{
  error: {
    message: string;
    name: string;
    stack?: string;
  }
}
```

### Output JSON Schema (preToolUse only)

Only `preToolUse` hooks can output JSON to control execution:

```typescript
{
  permissionDecision: "allow" | "deny" | "ask";  // Only "deny" currently processed
  permissionDecisionReason?: string;             // Human-readable explanation
}
```

**No output = allow** (implicit approval)

### Timeout Behavior

- Default timeout: 30 seconds
- Configurable via `timeoutSec` field
- Timeout triggers: Hook is killed, agent continues (treated as allow)
- Best practice: Set `timeoutSec` based on expected execution time

**Timeout considerations:**
- Network calls: 60-120 seconds
- Linting/validation: 5-15 seconds
- Logging: 1-3 seconds
- Security checks: 2-5 seconds

### Multiple Hooks Execution Order

When multiple hooks are defined for the same event:
1. Execute in array order (first to last)
2. For `preToolUse`: First `deny` wins (stops execution immediately)
3. For other events: All hooks execute regardless of errors
4. Each hook runs independently (no shared state except filesystem)

**Why This Matters:** You can layer security checks (dangerous commands → file permissions → secret scanning) with first denial stopping the pipeline. For logging hooks, all execute even if one fails, ensuring audit completeness.
