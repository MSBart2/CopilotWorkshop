---
theme: default
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## GitHub Copilot Hooks
  Programmable governance and lifecycle control for AI agent workflows
drawings:
  persist: false
transition: slide-left
title: GitHub Copilot Hooks - Governance & Compliance
module: tech-talks/copilot-hooks
mdc: true
status: active
updated: 2026-02-11
---

<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
  <!-- Gradient background -->
  <div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-indigo-900/20"></div>

  <!-- Glowing orb -->
  <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-indigo-500/20 rounded-full blur-3xl"></div>

  <!-- Logo with glow -->
  <div class="relative z-10">
    <div class="absolute inset-0 blur-2xl opacity-50">
      <img src="./sdp-logo.png" class="w-64" alt="" />
    </div>
    <img src="./sdp-logo.png" class="w-64 relative" alt="SDP Logo" />
  </div>

  <!-- Gradient text title -->
  <h1 class="!text-5xl !font-bold !mt-8 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent relative z-10">
    GitHub Copilot Hooks
  </h1>

  <!-- Pill subtitle -->
  <div class="mt-4 relative z-10">
    <span class="px-6 py-2 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-lg font-medium shadow-lg shadow-cyan-500/25">
      Programmable Governance for Agent Workflows
    </span>
  </div>

  <!-- Decorative line -->
  <div class="mt-8 w-32 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full relative z-10"></div>
</div>

<div class="abs-br m-6 flex gap-2">
  <span class="text-sm opacity-50">Tech Talk · 45 minutes</span>
</div>

---

# The Question This Talk Answers

<div class="h-full flex items-center justify-center">
  <div class="text-center space-y-8">
    <div class="text-4xl font-bold text-cyan-400">
      "How do I govern AI agent workflows<br/>without blocking their velocity?"
    </div>
    
    <div class="text-xl text-gray-300 max-w-3xl mx-auto">
      Manual approval gates destroy speed.<br/>
      Post-incident review catches violations too late.<br/>
      We need programmable governance at the moment of action.
    </div>
  </div>
</div>

---
layout: center
---

# Table of Contents

<div class="grid grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
  <div>
    <h3 class="text-cyan-400 font-bold mb-4">Fundamentals</h3>
    <ul class="space-y-2 text-sm">
      <li>✅ The Problem & Solution</li>
      <li>✅ Lifecycle Control (8 Events)</li>
      <li>✅ When to Use Hooks</li>
    </ul>
  </div>
  
  <div>
    <h3 class="text-cyan-400 font-bold mb-4">Implementation</h3>
    <ul class="space-y-2 text-sm">
      <li>✅ Preventive Enforcement</li>
      <li>✅ Observability & Audit</li>
      <li>✅ Real-World Patterns</li>
      <li>✅ Advanced Integration</li>
    </ul>
  </div>
</div>

---

# The Problem (1/2)

<div class="space-y-4 text-sm mt-6">

<div class="p-4 bg-red-900/30 rounded-lg border-l-4 border-red-500">
  <div class="font-bold text-red-400">AI agents operate autonomously</div>
  <div class="text-gray-300 mt-2">Copilot creates files, runs commands, accesses APIs — all without pre-approval gates or manual review</div>
</div>

<div class="p-4 bg-yellow-900/30 rounded-lg border-l-4 border-yellow-500">
  <div class="font-bold text-yellow-400">Compliance requires audit trails</div>
  <div class="text-gray-300 mt-2">Regulated environments (finance, healthcare, government) need complete evidence of what happened, when, and who authorized it</div>
</div>

<div class="p-4 bg-orange-900/30 rounded-lg border-l-4 border-orange-500">
  <div class="font-bold text-orange-400">Security policies must be enforced in real-time</div>
  <div class="text-gray-300 mt-2">Can't rely on post-incident review to catch <code>rm -rf /</code> or <code>DROP TABLE</code> — violations must be prevented</div>
</div>

</div>

---

# The Problem (2/2)

<div class="space-y-4 text-sm mt-6">

<div class="p-4 bg-blue-900/30 rounded-lg border-l-4 border-blue-500">
  <div class="font-bold text-blue-400">Quality standards need validation at creation</div>
  <div class="text-gray-300 mt-2">Style violations, test failures, and policy breaches should block commits before they're created, not in CI review</div>
</div>

<div class="p-4 bg-purple-900/30 rounded-lg border-l-4 border-purple-500">
  <div class="font-bold text-purple-400">Agents need context injection</div>
  <div class="text-gray-300 mt-2">Project-specific information, environment details, and guidelines should be available without manual setup</div>
</div>

<div class="mt-8 p-6 bg-gradient-to-r from-red-900/40 to-orange-900/40 rounded-lg border-2 border-red-500">
  <div class="text-lg font-bold text-red-300">The Core Issue</div>
  <div class="text-gray-200 mt-2">Manual approval gates destroy velocity. Static policies in CI catch violations too late. We need <span class="text-cyan-400 font-bold">programmable governance at the moment of action</span>.</div>
</div>

</div>

---

# The Solution: GitHub Copilot Hooks

<div class="mt-6">

### What It Does

<div class="text-sm text-gray-300 mb-6">
Hooks execute custom shell commands at key lifecycle points during agent sessions — before tool execution, after completion, on session start/stop, when subagents spawn, and before context compaction.
</div>

### Key Capabilities

<div class="grid grid-cols-2 gap-4 text-sm">
  <div class="p-3 bg-green-900/30 rounded border-l-2 border-green-500">
    <div class="font-bold text-green-400">✅ Preventive Control</div>
    <div class="text-gray-300 mt-1"><code>PreToolUse</code> can deny execution with <code>permissionDecision: "deny"</code></div>
  </div>
  
  <div class="p-3 bg-blue-900/30 rounded border-l-2 border-blue-500">
    <div class="font-bold text-blue-400">✅ Context Injection</div>
    <div class="text-gray-300 mt-1"><code>SessionStart</code> can inject project info via <code>additionalContext</code></div>
  </div>
  
  <div class="p-3 bg-purple-900/30 rounded border-l-2 border-purple-500">
    <div class="font-bold text-purple-400">✅ Complete Audit Trail</div>
    <div class="text-gray-300 mt-1">All 8 lifecycle events provide full observability</div>
  </div>
  
  <div class="p-3 bg-cyan-900/30 rounded border-l-2 border-cyan-500">
    <div class="font-bold text-cyan-400">✅ Agent Flow Control</div>
    <div class="text-gray-300 mt-1"><code>Stop</code> hooks can prevent agents from finishing</div>
  </div>
</div>

</div>

---

# Solution Architecture

<div class="text-sm mt-4">

### Configuration Locations

Hooks are configured in JSON files (workspace hooks take precedence):

<div class="grid grid-cols-2 gap-4 mt-4">
  <div class="p-3 bg-blue-900/30 rounded">
    <div class="font-bold text-blue-400">Workspace (Team-Shared)</div>
    <code class="text-xs text-gray-300">.github/hooks/*.json</code>
  </div>
  
  <div class="p-3 bg-purple-900/30 rounded">
    <div class="font-bold text-purple-400">Workspace (Local)</div>
    <code class="text-xs text-gray-300">.claude/settings.local.json</code>
  </div>
</div>

### Execution Flow

<div class="mt-4 space-y-2 text-xs">
  <div class="flex items-center gap-2">
    <div class="w-6 h-6 rounded-full bg-cyan-600 flex items-center justify-center font-bold">1</div>
    <div>Event Detection → Agent detects lifecycle event</div>
  </div>
  <div class="flex items-center gap-2">
    <div class="w-6 h-6 rounded-full bg-cyan-600 flex items-center justify-center font-bold">2</div>
    <div>Hook Discovery → Reads hook configurations</div>
  </div>
  <div class="flex items-center gap-2">
    <div class="w-6 h-6 rounded-full bg-cyan-600 flex items-center justify-center font-bold">3</div>
    <div>Script Invocation → Spawns shell process with JSON context via stdin</div>
  </div>
  <div class="flex items-center gap-2">
    <div class="w-6 h-6 rounded-full bg-green-600 flex items-center justify-center font-bold">4</div>
    <div>Output Parsing → For PreToolUse, reads <code>permissionDecision</code> (allow/deny/ask)</div>
  </div>
</div>

<div class="mt-4 p-3 bg-yellow-900/30 rounded border-l-2 border-yellow-500 text-xs">
  <span class="font-bold text-yellow-400">⚡ Critical:</span> <code>PreToolUse</code> is the only hook that can prevent actions before they happen
</div>

</div>

---

# Mental Model Shift

<div class="text-center my-8">
  <div class="text-2xl font-bold text-cyan-400">
    From "agents work and we review their output"
  </div>
  <div class="text-4xl my-4">↓</div>
  <div class="text-2xl font-bold text-green-400">
    To "agents propose actions and governance approves them in real-time"
  </div>
</div>

<div class="grid grid-cols-2 gap-6 text-sm mt-8">
  <div>
    <h3 class="text-green-400 font-bold mb-3">✅ Move Toward</h3>
    <ul class="space-y-2 text-xs">
      <li>Preventive governance (<code>PreToolUse</code> denies before execution)</li>
      <li>Context injection (<code>SessionStart</code> adds project info)</li>
      <li>Structured logging (JSON Lines for direct querying)</li>
      <li>Fast synchronous validation (keep hooks under 5 seconds)</li>
    </ul>
  </div>
  
  <div>
    <h3 class="text-red-400 font-bold mb-3">🛑 Move Against</h3>
    <ul class="space-y-2 text-xs">
      <li>Post-incident review (too late to prevent damage)</li>
      <li>Manual approval gates (destroys velocity)</li>
      <li>CI-only validation (catches violations after creation)</li>
      <li>Slow hooks (>30s degrades agent responsiveness)</li>
    </ul>
  </div>
</div>

---

# When to Use This Pattern

<div class="text-sm mt-4">

### Decision Tree

```
Q: What's your governance requirement?
├─ "Prevent dangerous operations before execution"
│  → Use: PreToolUse hook with security policies
│  └─ Best for: Security enforcement, regulated environments
│
├─ "Complete audit trail for compliance"
│  → Use: All 8 lifecycle hooks with JSON Lines logging
│  └─ Best for: Finance, healthcare, government compliance
│
├─ "Enforce code quality before commits"
│  → Use: PostToolUse hook with linter validation
│  └─ Best for: Quality gates, shift-left enforcement
│
└─ "Inject project context into agent sessions"
   → Use: SessionStart hook with additionalContext
   └─ Best for: Environment-aware agents, project metadata
```

</div>

---

# Lifecycle Control: The 8 Hook Events

<div class="text-xs mt-4">

| Hook Event | When It Fires | Key Use Cases |
|------------|---------------|---------------|
| **SessionStart** | First prompt of new session | Initialize resources, inject context, validate state |
| **UserPromptSubmit** | User submits a prompt | Audit user requests, inject system context |
| **PreToolUse** ⚡ | Before agent invokes tool | **Block dangerous operations, require approval** |
| **PostToolUse** | After tool completes | Run formatters, log results, inject context about results |
| **PreCompact** | Before context compaction | Export important context, save state before truncation |
| **SubagentStart** | Subagent spawns | Track nested agent usage, inject subagent guidelines |
| **SubagentStop** | Subagent completes | Aggregate results, verify output, block stopping if incomplete |
| **Stop** | Agent session ends | Generate reports, cleanup resources, block stopping if tests not run |

<div class="mt-4 p-3 bg-cyan-900/40 rounded border-2 border-cyan-500">
  <span class="font-bold text-cyan-300">NEW in 2026-02-11 Update:</span>
  <ul class="mt-2 space-y-1">
    <li>• Added 4 new events: <code>PreCompact</code>, <code>SubagentStart</code>, <code>SubagentStop</code>, <code>Stop</code></li>
    <li>• Removed <code>errorOccurred</code> (deprecated)</li>
    <li>• PascalCase naming convention now standard (<code>PreToolUse</code> not <code>preToolUse</code>)</li>
    <li>• New capabilities: <code>updatedInput</code>, <code>additionalContext</code>, permission priority, ask decision</li>
  </ul>
</div>

</div>

---

# SessionStart: Session Initialization

<div class="text-sm mt-4">

### When It Fires
When a new agent session begins (first user prompt)

### Input JSON
```json
{
  "timestamp": "2026-02-11T10:30:00.000Z",
  "cwd": "/path/to/workspace",
  "sessionId": "session-abc123",
  "hookEventName": "SessionStart",
  "source": "new"
}
```

### Output: Inject Context
```json
{
  "hookSpecificOutput": {
    "hookEventName": "SessionStart",
    "additionalContext": "Project: myapp v2.1.0 | Branch: main | Node: v20.0.0"
  }
}
```

<div class="mt-4 p-3 bg-blue-900/30 rounded">
  <span class="font-bold text-blue-400">Use Case:</span> Inject project-specific context (version, branch, environment) so agents make better decisions without manual setup
</div>

</div>

---

# PreToolUse: Pre-Execution Validation ⚡

<div class="text-xs mt-2">

### Why It's Most Powerful
The **only hook that can deny tool execution** before it happens. Can also modify input and inject context.

### Input JSON
```json
{
  "timestamp": "2026-02-11T10:30:00.000Z",
  "cwd": "/workspace/project",
  "sessionId": "abc123",
  "hookEventName": "PreToolUse",
  "tool_name": "runTerminalCommand",
  "tool_input": { "command": "rm -rf dist" },
  "tool_use_id": "tool-123"
}
```

### Output: Deny Execution
```json
{
  "hookSpecificOutput": {
    "hookEventName": "PreToolUse",
    "permissionDecision": "deny",
    "permissionDecisionReason": "Destructive operations outside approved directories"
  }
}
```

<div class="mt-2 grid grid-cols-3 gap-2">
  <div class="p-2 bg-green-900/30 rounded text-center">
    <code class="text-green-400">allow</code><br/>Auto-approve
  </div>
  <div class="p-2 bg-yellow-900/30 rounded text-center">
    <code class="text-yellow-400">ask</code><br/>Require user confirmation
  </div>
  <div class="p-2 bg-red-900/30 rounded text-center">
    <code class="text-red-400">deny</code><br/>Block execution
  </div>
</div>

</div>

---

# PreToolUse: Modify Input & Inject Context

<div class="text-sm mt-4">

### Output: Modify Tool Input
```json
{
  "hookSpecificOutput": {
    "hookEventName": "PreToolUse",
    "permissionDecision": "allow",
    "updatedInput": { "command": "rm -rf dist --dry-run" },
    "additionalContext": "Modified to dry-run mode per security policy"
  }
}
```

### Permission Decision Priority
When multiple hooks run for the same tool:
1. **`deny`** (most restrictive): blocks tool execution immediately
2. **`ask`**: requires user confirmation
3. **`allow`** (least restrictive): auto-approves execution

<div class="mt-4 p-3 bg-cyan-900/30 rounded border-l-2 border-cyan-500">
  <span class="font-bold text-cyan-400">NEW Capability:</span> <code>updatedInput</code> lets you enforce safe defaults (add flags, sanitize paths) while allowing execution
</div>

</div>

---

# PostToolUse: Post-Execution Tracking

<div class="text-sm mt-4">

### When It Fires
After tool completes successfully

### Input JSON (includes response)
```json
{
  "timestamp": "2026-02-11T10:30:25.000Z",
  "hookEventName": "PostToolUse",
  "tool_name": "editFiles",
  "tool_input": { "path": "src/auth.js" },
  "tool_response": "File edited successfully"
}
```

### Output: Inject Context About Results
```json
{
  "hookSpecificOutput": {
    "hookEventName": "PostToolUse",
    "additionalContext": "The edited file has lint errors: missing semicolon line 42"
  }
}
```

<div class="mt-4 p-3 bg-purple-900/30 rounded">
  <span class="font-bold text-purple-400">Use Case:</span> Run formatters, validate output, inject context back to agent (e.g., lint errors to fix)
</div>

</div>

---

# SubagentStart & SubagentStop

<div class="text-sm mt-4">

### SubagentStart: When Subagent Spawns

```json
{
  "hookEventName": "SubagentStart",
  "agent_id": "sub-456",
  "agent_type": "Plan"
}
```

**Output:** Can inject `additionalContext` into the subagent's conversation

<div class="mt-4 p-3 bg-cyan-900/30 rounded text-xs">
  <span class="font-bold text-cyan-400">Use Case:</span> Track nested agent usage, initialize subagent resources, inject guidelines
</div>

### SubagentStop: When Subagent Completes

```json
{
  "hookEventName": "SubagentStop",
  "agent_id": "sub-456",
  "agent_type": "Plan",
  "stop_hook_active": false
}
```

**Output:** Can block stopping with `decision: "block"` and `reason`

<div class="mt-4 p-3 bg-yellow-900/30 rounded text-xs">
  <span class="font-bold text-yellow-400">Use Case:</span> Verify subagent completed all required work, aggregate results
</div>

</div>

---

# Stop: Agent Session End

<div class="text-sm mt-4">

### When It Fires
When the agent session ends (or attempts to end)

### Input JSON
```json
{
  "hookEventName": "Stop",
  "stop_hook_active": false
}
```

### Output: Block Stopping
```json
{
  "hookSpecificOutput": {
    "hookEventName": "Stop",
    "decision": "block",
    "reason": "Run the test suite before finishing"
  }
}
```

<div class="mt-4 p-3 bg-red-900/30 rounded border-l-2 border-red-500">
  <span class="font-bold text-red-400">NEW Capability:</span> <code>Stop</code> hook can prevent agents from finishing, directing them to complete additional work (e.g., run tests, generate documentation)
</div>

<div class="mt-4 text-xs text-gray-400">
  <code>stop_hook_active</code> is <code>true</code> when agent is continuing from a previous stop hook (prevents infinite loops)
</div>

</div>

---

# Hook Configuration Format

<div class="text-xs mt-4">

### JSON Configuration (.github/hooks/security-hooks.json)

```json
{
  "hooks": {
    "PreToolUse": [
      {
        "type": "command",
        "command": "./scripts/validate-tool.sh",
        "timeout": 15,
        "cwd": ".github/hooks"
      }
    ],
    "PostToolUse": [
      {
        "type": "command",
        "command": "npx prettier --write \"$TOOL_INPUT_FILE_PATH\""
      }
    ]
  }
}
```

<div class="mt-4 p-3 bg-yellow-900/30 rounded border-l-2 border-yellow-500">
  <span class="font-bold text-yellow-400">BREAKING CHANGE:</span> New config format uses <code>command</code> property (not <code>bash</code>/<code>powershell</code>), <code>timeout</code> (not <code>timeoutSec</code>), and no <code>version</code> field
</div>

### OS-Specific Commands (Optional)

```json
{
  "type": "command",
  "command": "./scripts/format.sh",
  "windows": "powershell -File scripts\\format.ps1",
  "linux": "./scripts/format-linux.sh"
}
```

</div>

---

# Configuration Fields Reference

<div class="text-sm mt-4">

| Field | Type | Description |
|-------|------|-------------|
| `type` | string | Must be `"command"` |
| `command` | string | Default command (cross-platform) |
| `windows` | string | Windows-specific override |
| `linux` | string | Linux-specific override |
| `osx` | string | macOS-specific override |
| `cwd` | string | Working directory (relative to repo root) |
| `timeout` | number | Max execution time in seconds (default: 30) |
| `env` | object | Additional environment variables |

<div class="mt-4 p-3 bg-cyan-900/30 rounded">
  <span class="font-bold text-cyan-400">Environment Variables Available:</span>
  <ul class="mt-2 space-y-1 text-xs">
    <li>• <code>GITHUB_TOKEN</code> — For GitHub API calls (read-only)</li>
    <li>• <code>GITHUB_REPOSITORY</code> — Repository name (e.g., <code>owner/repo</code>)</li>
    <li>• <code>GITHUB_ACTOR</code> — User triggering the session</li>
  </ul>
</div>

</div>

---

# Preventive Enforcement: Security Check

<div class="text-xs mt-2">

### Block Dangerous Operations (.github/hooks/scripts/security-check.sh)

```bash
#!/bin/bash
INPUT=$(cat)
TOOL_NAME=$(echo "$INPUT" | jq -r '.tool_name')
COMMAND=$(echo "$INPUT" | jq -r '.tool_input.command // empty')

# Only validate terminal commands
if [ "$TOOL_NAME" != "runTerminalCommand" ]; then
  echo '{"continue":true}'
  exit 0
fi

# Block dangerous delete operations
if echo "$COMMAND" | grep -qE 'rm -rf /|del /s /q|format'; then
  echo '{"hookSpecificOutput":{"hookEventName":"PreToolUse","permissionDecision":"deny","permissionDecisionReason":"Destructive file operation blocked by security policy"}}'
  exit 0
fi

# Block privilege escalation
if echo "$COMMAND" | grep -qE '^sudo |^runas |^su '; then
  echo '{"hookSpecificOutput":{"hookEventName":"PreToolUse","permissionDecision":"deny","permissionDecisionReason":"Privilege escalation not allowed"}}'
  exit 0
fi

# Block database destruction
if echo "$COMMAND" | grep -qiE 'DROP TABLE|DROP DATABASE|TRUNCATE TABLE'; then
  echo '{"hookSpecificOutput":{"hookEventName":"PreToolUse","permissionDecision":"deny","permissionDecisionReason":"Database destructive operations require manual approval"}}'
  exit 0
fi

# Default: allow
echo '{"continue":true}'
exit 0
```

</div>

---

# Preventive Enforcement: File Path Restrictions

<div class="text-sm mt-4">

### Restrict Agent to Approved Directories

```bash
#!/bin/bash
INPUT=$(cat)
TOOL_NAME=$(echo "$INPUT" | jq -r '.tool_name')

# Only validate file editing tools
if [ "$TOOL_NAME" != "editFiles" ] && [ "$TOOL_NAME" != "createFile" ]; then
  echo '{"continue":true}'
  exit 0
fi

# Extract file path
PATH_ARG=$(echo "$INPUT" | jq -r '.tool_input.path // .tool_input.files[0] // empty')

# Check if path is in approved directories
if [[ ! "$PATH_ARG" =~ ^(src/|test/|docs/) ]]; then
  echo '{"hookSpecificOutput":{"hookEventName":"PreToolUse","permissionDecision":"deny","permissionDecisionReason":"Can only edit files in src/, test/, or docs/ directories"}}'
  exit 0
fi

# Allow approved paths
echo '{"continue":true}'
exit 0
```

</div>

---

# Preventive Enforcement: Environment-Aware Policies

<div class="text-sm mt-4">

### Stricter Rules in Production

```bash
#!/bin/bash
INPUT=$(cat)
CWD=$(echo "$INPUT" | jq -r '.cwd')
TOOL_NAME=$(echo "$INPUT" | jq -r '.tool_name')

# Stricter policies in production
if [[ "$CWD" =~ /production/ ]]; then
  # Require approval for all file writes
  if [[ "$TOOL_NAME" == "editFiles" || "$TOOL_NAME" == "createFile" ]]; then
    echo '{"hookSpecificOutput":{"hookEventName":"PreToolUse","permissionDecision":"ask","permissionDecisionReason":"Production changes require manual approval"}}'
    exit 0
  fi
fi

# Permissive in development
echo '{"continue":true}'
exit 0
```

<div class="mt-4 p-3 bg-purple-900/30 rounded text-xs">
  <span class="font-bold text-purple-400">Use Case:</span> Apply environment-specific policies — strict in prod, permissive in dev, <code>"ask"</code> in staging
</div>

</div>

---

# Observability: Structured Logging

<div class="text-sm mt-4">

### JSON Lines Format (.jsonl)

One JSON object per line — provides:
- ✅ Direct querying with `jq` (SQL-like filtering without parsing)
- ✅ Append safety (concurrent writes don't corrupt file)
- ✅ Tool compatibility (import to SQLite, Elasticsearch, Datadog)
- ✅ Incremental streaming (process logs as they're written)

### Session Lifecycle Logging

```bash
#!/bin/bash
# .github/hooks/scripts/log-session-start.sh
INPUT=$(cat)
LOG_FILE="logs/audit.jsonl"
mkdir -p logs

# Append structured log entry
echo "$INPUT" | jq -c '. + {
  event: "SessionStart",
  loggedAt: (now | todate)
}' >> "$LOG_FILE"
```

</div>

---

# Observability: Tool Usage Logging

<div class="text-sm mt-4">

### Track Every Tool Execution

```bash
#!/bin/bash
# .github/hooks/scripts/log-tool-use.sh
INPUT=$(cat)
LOG_FILE="logs/audit.jsonl"
mkdir -p logs

TOOL_NAME=$(echo "$INPUT" | jq -r '.tool_name')
TOOL_RESPONSE=$(echo "$INPUT" | jq -r '.tool_response // "N/A"')

# Log tool execution
jq -n \
  --arg tool "$TOOL_NAME" \
  --arg response "$TOOL_RESPONSE" \
  --arg ts "$(date -u +%Y-%m-%dT%H:%M:%SZ)" \
  '{
    timestamp: $ts,
    event: "PostToolUse",
    tool_name: $tool,
    response: $response
  }' >> "$LOG_FILE"
```

</div>

---

# Observability: Example Audit Log

<div class="text-xs mt-4">

### logs/audit.jsonl

```jsonl
{"timestamp":"2026-02-11T17:30:00Z","event":"SessionStart","sessionId":"abc123","source":"new"}
{"timestamp":"2026-02-11T17:30:15Z","event":"UserPromptSubmit","prompt":"Refactor authentication module"}
{"timestamp":"2026-02-11T17:30:20Z","event":"PreToolUse","tool_name":"editFiles","path":"src/auth.js","permissionDecision":"allow"}
{"timestamp":"2026-02-11T17:30:25Z","event":"PostToolUse","tool_name":"editFiles","response":"File edited successfully"}
{"timestamp":"2026-02-11T17:30:28Z","event":"SubagentStart","agent_id":"sub-456","agent_type":"Plan"}
{"timestamp":"2026-02-11T17:30:35Z","event":"SubagentStop","agent_id":"sub-456","agent_type":"Plan"}
{"timestamp":"2026-02-11T17:30:30Z","event":"Stop","toolsUsed":3,"violations":0}
```

### Querying Audit Logs

```bash
# Count tool usage by type
cat logs/audit.jsonl | jq -r '.tool_name // empty' | sort | uniq -c

# Find all denied operations
cat logs/audit.jsonl | jq 'select(.permissionDecision == "deny")'

# Track subagent usage
cat logs/audit.jsonl | jq 'select(.event == "SubagentStart" or .event == "SubagentStop")'
```

</div>

---

# Observability: Context Injection

<div class="text-sm mt-4">

### Inject Project Context on Session Start

```bash
#!/bin/bash
# .github/hooks/scripts/inject-context.sh

PROJECT_INFO=$(cat package.json 2>/dev/null | jq -r '.name + " v" + .version' || echo "Unknown")
BRANCH=$(git branch --show-current 2>/dev/null || echo "unknown")

cat <<EOF
{
  "hookSpecificOutput": {
    "hookEventName": "SessionStart",
    "additionalContext": "Project: $PROJECT_INFO | Branch: $BRANCH | Node: $(node -v 2>/dev/null || echo 'not installed')"
  }
}
EOF
```

<div class="mt-4 p-3 bg-cyan-900/30 rounded">
  <span class="font-bold text-cyan-400">Use Case:</span> Add project-specific information to the agent's conversation without manual setup — environment variables, project versions, branch info, team guidelines
</div>

</div>

---

# Real-World Pattern: Multi-Layer Security

<div class="text-sm mt-4">

### Combine Multiple Security Checks

```json
{
  "hooks": {
    "PreToolUse": [
      {
        "type": "command",
        "command": "./scripts/security-dangerous-commands.sh",
        "timeout": 3
      },
      {
        "type": "command",
        "command": "./scripts/security-file-permissions.sh",
        "timeout": 3
      },
      {
        "type": "command",
        "command": "./scripts/security-secret-scanning.sh",
        "timeout": 5
      }
    ]
  }
}
```

<div class="mt-4 p-3 bg-green-900/30 rounded text-xs">
  <span class="font-bold text-green-400">Execution:</span> Hooks run in order. The most restrictive permission decision wins — first <code>deny</code> blocks execution immediately.
</div>

</div>

---

# Real-World Pattern: Code Quality Gates

<div class="text-sm mt-4">

### Enforce Formatting After Code Changes

```bash
#!/bin/bash
# .github/hooks/scripts/format-changed-files.sh
INPUT=$(cat)
TOOL_NAME=$(echo "$INPUT" | jq -r '.tool_name')

if [ "$TOOL_NAME" = "editFiles" ] || [ "$TOOL_NAME" = "createFile" ]; then
  FILES=$(echo "$INPUT" | jq -r '.tool_input.files[]? // .tool_input.path // empty')

  for FILE in $FILES; do
    if [ -f "$FILE" ]; then
      npx prettier --write "$FILE" 2>/dev/null
    fi
  done
fi

echo '{"continue":true}'
```

<div class="mt-4 p-3 bg-blue-900/30 rounded text-xs">
  <span class="font-bold text-blue-400">Use Case:</span> Automatically format agent-created files with Prettier/Black/Go fmt after edit
</div>

</div>

---

# Real-World Pattern: Lint Validation with Context

<div class="text-sm mt-4">

### Inject Lint Errors Back to Agent

```bash
#!/bin/bash
INPUT=$(cat)
TOOL_NAME=$(echo "$INPUT" | jq -r '.tool_name')

if [ "$TOOL_NAME" = "editFiles" ]; then
  FILE=$(echo "$INPUT" | jq -r '.tool_input.files[0] // empty')
  if [ -f "$FILE" ]; then
    LINT_OUTPUT=$(npx eslint "$FILE" --quiet 2>&1)
    if [ $? -ne 0 ]; then
      echo "{\"hookSpecificOutput\":{\"hookEventName\":\"PostToolUse\",\"additionalContext\":\"The edited file has lint errors that need to be fixed: $LINT_OUTPUT\"}}"
      exit 0
    fi
  fi
fi

echo '{"continue":true}'
```

<div class="mt-4 p-3 bg-purple-900/30 rounded text-xs">
  <span class="font-bold text-purple-400">NEW Capability:</span> <code>PostToolUse</code> can inject context about results, allowing agents to self-correct lint errors
</div>

</div>

---

# Real-World Pattern: Cost Tracking

<div class="text-xs mt-2">

### Track Tool Usage for Cost Allocation

```bash
#!/bin/bash
# .github/hooks/scripts/metrics-tracker.sh
INPUT=$(cat)
LOG_FILE="logs/metrics.jsonl"
mkdir -p logs

TOOL_NAME=$(echo "$INPUT" | jq -r '.tool_name')
TIMESTAMP=$(echo "$INPUT" | jq -r '.timestamp')
SESSION_ID=$(echo "$INPUT" | jq -r '.sessionId')
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

### Query Monthly Costs

```bash
# Sum costs by user for current month
cat logs/metrics.jsonl | jq -s 'group_by(.user) | map({user: .[0].user, totalCost: (map(.estimatedCost) | add)})'
```

</div>

---

# Advanced Integration: Slack Notifications

<div class="text-xs mt-4">

### Send Alerts on Security Violations

```bash
#!/bin/bash
INPUT=$(cat)
COMMAND=$(echo "$INPUT" | jq -r '.tool_input.command // empty')

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
            \"text\": \"*Command:* \`$COMMAND\`\"
          }
        }
      ]
    }"

  echo '{"hookSpecificOutput":{"hookEventName":"PreToolUse","permissionDecision":"deny","permissionDecisionReason":"Security policy violation - team alerted"}}'
  exit 0
fi
```

</div>

---

# Advanced Integration: Ticketing Systems

<div class="text-xs mt-2">

### Create Jira Incidents on Violations

```bash
#!/bin/bash
INPUT=$(cat)
COMMAND=$(echo "$INPUT" | jq -r '.tool_input.command // empty')

# Create incident for blocked dangerous operations
if echo "$COMMAND" | grep -qE "rm -rf|DROP TABLE|sudo"; then
  JIRA_API="$JIRA_BASE_URL/rest/api/3/issue"

  curl -X POST "$JIRA_API" \
    -H "Authorization: Bearer $JIRA_TOKEN" \
    -H "Content-Type: application/json" \
    -d "{
      \"fields\": {
        \"project\": {\"key\": \"SEC\"},
        \"summary\": \"Security Violation Blocked: runTerminalCommand\",
        \"description\": \"Blocked command: $COMMAND\",
        \"issuetype\": {\"name\": \"Incident\"},
        \"priority\": {\"name\": \"P1\"}
      }
    }"

  echo '{"hookSpecificOutput":{"hookEventName":"PreToolUse","permissionDecision":"deny","permissionDecisionReason":"Dangerous operation blocked - incident created"}}'
  exit 0
fi
```

</div>

---

# Use Case: HIPAA Compliance Audit Trail

<div class="text-sm mt-4">

### The Problem
Healthcare app development requires complete audit trail for HIPAA compliance. Manual log collection takes 2-3 hours per audit with 60-70% completeness.

### The Solution
Hooks log every session event to JSON Lines with S3 archival:

```json
{
  "hooks": {
    "SessionStart": [{"type": "command", "command": "./audit/log-session-start.sh"}],
    "UserPromptSubmit": [{"type": "command", "command": "./audit/log-prompt.sh"}],
    "PreToolUse": [{"type": "command", "command": "./audit/log-tool-pre.sh"}],
    "PostToolUse": [{"type": "command", "command": "./audit/log-tool-post.sh"}],
    "Stop": [{"type": "command", "command": "./audit/archive-to-s3.sh"}]
  }
}
```

### Outcome
- Audit time: 2-3 hours → 5 minutes
- Coverage: 60-70% → 100%
- Retention: Manual → Automated S3 (7-year retention)

</div>

---

# Use Case: SOC 2 Security Enforcement

<div class="text-sm mt-4">

### The Problem
SaaS company needs SOC 2 proof that dangerous operations are prevented before execution. Manual review catches violations after-the-fact.

### The Solution
`PreToolUse` hook blocks dangerous operations with real-time denial:

```bash
#!/bin/bash
INPUT=$(cat)
COMMAND=$(echo "$INPUT" | jq -r '.tool_input.command // empty')

# Block operations that violate SOC 2 requirements
if echo "$COMMAND" | grep -qE 'rm -rf|DROP|TRUNCATE|sudo|chmod 777'; then
  echo '{"hookSpecificOutput":{"hookEventName":"PreToolUse","permissionDecision":"deny","permissionDecisionReason":"SOC 2 policy: Dangerous operation requires approval ticket"}}'
  echo "$INPUT" | jq -c '. + {violation: "SOC2_DANGEROUS_OP"}' >> logs/violations.jsonl
  exit 0
fi
```

### Outcome
- Violations: Post-incident → Real-time prevention
- Audit evidence: Manual → Automated log
- Security incidents: 3/year → 0

</div>

---

# Use Case: Code Quality Gates

<div class="text-sm mt-4">

### The Problem
Agent-generated code averaging 15 linting violations per PR. Rework cycles cost 7.5 hours per sprint.

### The Solution
`PreToolUse` hook runs linter before file edits, denies non-compliant code:

```bash
#!/bin/bash
INPUT=$(cat)
FILE_PATH=$(echo "$INPUT" | jq -r '.tool_input.path // empty')

# Run ESLint on proposed changes
TEMP_FILE=$(mktemp)
echo "$INPUT" | jq -r '.tool_input.newContent // empty' > "$TEMP_FILE"

if ! npx eslint --no-eslintrc -c .eslintrc.json "$TEMP_FILE" > /dev/null 2>&1; then
  echo '{"hookSpecificOutput":{"hookEventName":"PreToolUse","permissionDecision":"deny","permissionDecisionReason":"Code fails linting. Fix violations before applying."}}'
  rm "$TEMP_FILE"
  exit 0
fi
```

### Outcome
- Rework time: 7.5 hours/sprint → 0
- CI failures: 15/sprint → 0

</div>

---

# Use Case: Financial Services Role-Based Access

<div class="text-sm mt-4">

### The Problem
Bank requires separation of duties — junior engineers can't modify production config. Manual PR review catches violations post-implementation.

### The Solution
`PreToolUse` hook enforces role-based permissions:

```bash
#!/bin/bash
INPUT=$(cat)
USER_ROLE=${COPILOT_USER_ROLE:-"junior"}  # Set via environment
FILE_PATH=$(echo "$INPUT" | jq -r '.tool_input.path // empty')

# Junior engineers can't edit production configs
if [ "$USER_ROLE" = "junior" ] && [[ "$FILE_PATH" =~ ^(production/|config/prod) ]]; then
  echo '{"hookSpecificOutput":{"hookEventName":"PreToolUse","permissionDecision":"deny","permissionDecisionReason":"Junior engineers require senior approval for production changes"}}'
  exit 0
fi
```

### Outcome
- Policy enforcement: Post-review → Real-time prevention
- Wasted effort: 2-3 hours/week → 0
- Regulatory risk: Medium → Low

</div>

---

# What You Can Do Today

<div class="text-sm mt-4">

### Immediate Actions (15 minutes)
- ✅ Review [official hooks documentation](https://code.visualstudio.com/docs/copilot/customization/hooks)
- ✅ Create `.github/hooks/` directory in your repository
- ✅ Copy the security-check script to start with basic protection
- ✅ Try the `/hooks` slash command in VS Code chat

### Short-Term Implementation (1-2 hours)
- ✅ Deploy security enforcement hooks with dangerous command blocking
- ✅ Set up `SessionStart` context injection for project info
- ✅ Test hooks locally: `echo '{"tool_name":"runTerminalCommand","tool_input":{"command":"rm -rf /"}}' | ./security-check.sh`
- ✅ Verify `PreToolUse` successfully denies dangerous operations

### Advanced Exploration (2-4 hours)
- ✅ Implement complete audit trail with all 8 lifecycle hooks
- ✅ Use `SubagentStart`/`SubagentStop` to track nested agents
- ✅ Use `Stop` hook to enforce test suite execution before completion
- ✅ Integrate with Slack/Datadog/PagerDuty for alerts

</div>

---

# Related Patterns & Documentation

<div class="mt-6">

### Complementary Features

<div class="grid grid-cols-2 gap-4 text-sm">
  <div class="p-3 bg-blue-900/30 rounded">
    <div class="font-bold text-blue-400">Terminal Sandboxing</div>
    <div class="text-gray-300 text-xs mt-1">OS-level restrictions (network/filesystem) that complement hooks</div>
  </div>
  
  <div class="p-3 bg-purple-900/30 rounded">
    <div class="font-bold text-purple-400">Custom Instructions</div>
    <div class="text-gray-300 text-xs mt-1">Define agent behavior that hooks enforce through validation</div>
  </div>
</div>

### Official Documentation

<div class="mt-4 text-xs space-y-1">
  <div>📖 <a href="https://code.visualstudio.com/docs/copilot/customization/hooks">Agent Hooks in VS Code</a> — Complete configuration reference</div>
  <div>📖 <a href="https://docs.github.com/en/copilot/concepts/agents/coding-agent/about-hooks">About Hooks</a> — Core concepts and hook types</div>
  <div>📖 <a href="https://docs.github.com/en/copilot/reference/hooks-configuration">Hooks Configuration Reference</a> — Complete JSON schema</div>
  <div>📖 <a href="https://docs.github.com/en/copilot/how-tos/use-copilot-agents/coding-agent/use-hooks">Using Hooks</a> — Step-by-step setup guide</div>
</div>

</div>

---

# Performance & Troubleshooting

<div class="text-sm mt-4">

### Performance Targets
- **<2 seconds** for security checks and logging
- **<5 seconds** for linting and validation
- **<30 seconds** only for external API calls (use `timeout` override)

### Exit Code Behavior

| Exit Code | Behavior |
|-----------|----------|
| `0` | Success: VS Code parses stdout as JSON |
| `2` | Blocking error: stops processing, shows error to model |
| Other | Non-blocking warning: shows warning to user, continues |

### Troubleshooting

<div class="mt-4 space-y-2 text-xs">
  <div>✅ <strong>View diagnostics:</strong> Right-click in Chat view → Diagnostics → hooks section</div>
  <div>✅ <strong>View hook output:</strong> Output panel → "GitHub Copilot Chat Hooks" channel</div>
  <div>✅ <strong>Hook not executing:</strong> Verify file is in <code>.github/hooks/*.json</code> with <code>type: "command"</code></div>
  <div>✅ <strong>Permission denied:</strong> Ensure scripts have execute permissions (<code>chmod +x</code>)</div>
</div>

</div>

---
layout: center
class: text-center
---

# Thank You!

<div class="mt-8 text-xl text-gray-300">
  Questions?
</div>

<div class="mt-8 text-sm text-gray-400">
  📧 Contact: <span class="text-cyan-400">sdp@github.com</span><br/>
  📚 Slides: <span class="text-cyan-400">github.com/microsoft/CopilotTraining</span>
</div>

