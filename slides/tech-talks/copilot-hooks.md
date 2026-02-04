---
theme: default
background: https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920
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
mdc: true
---

# GitHub Copilot Hooks

## Programmable Governance and Lifecycle Control for AI Agent Workflows

<div class="pt-12">
  <span class="text-6xl">🔒</span>
</div>

<div class="abs-br m-6 flex gap-2">
  <span class="text-sm opacity-50">Tech Talk · 45 minutes</span>
</div>

---

# The Governance Problem

<div class="grid grid-cols-2 gap-8 mt-8">

<div>

### 🤖 The Challenge

<div class="space-y-4 text-sm">
<div class="p-4 bg-red-900/30 rounded-lg border-l-4 border-red-500">
  <div class="font-bold text-red-400">AI agents operate autonomously</div>
  <div class="text-gray-300 mt-2">Copilot creates files, runs commands, accesses APIs—without pre-approval gates</div>
</div>

<div class="p-4 bg-yellow-900/30 rounded-lg border-l-4 border-yellow-500">
  <div class="font-bold text-yellow-400">Compliance requires audit trails</div>
  <div class="text-gray-300 mt-2">Regulated environments need evidence of what happened, when, and who authorized it</div>
</div>

<div class="p-4 bg-orange-900/30 rounded-lg border-l-4 border-orange-500">
  <div class="font-bold text-orange-400">Security policies must be enforced</div>
  <div class="text-gray-300 mt-2">Can't rely on post-incident review to catch <code>rm -rf /</code> or <code>DROP TABLE</code></div>
</div>

<div class="p-4 bg-blue-900/30 rounded-lg border-l-4 border-blue-500">
  <div class="font-bold text-blue-400">Quality standards need validation</div>
  <div class="text-gray-300 mt-2">Style violations should block commits at creation, not in CI review</div>
</div>
</div>

</div>

<div>

### 💡 The Solution

<div class="p-6 bg-gradient-to-br from-green-900/60 to-blue-900/60 rounded-lg border-2 border-green-400 mt-4">
  <div class="text-2xl font-bold text-green-300 mb-4">GitHub Copilot Hooks</div>
  <div class="text-gray-200 space-y-3 text-sm">
    <div>✅ Programmable control points at critical moments</div>
    <div>✅ Session start, before/after tool execution, on errors</div>
    <div>✅ Real-time prevention, not post-incident review</div>
    <div>✅ Complete audit trail with structured logging</div>
  </div>
</div>

<div class="mt-6 p-4 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-lg text-center">
  <div class="text-xl font-bold text-white">Velocity with visibility</div>
  <div class="text-blue-200 text-sm mt-1">Automation with accountability</div>
</div>

</div>

</div>

---

# Hook Architecture: Lifecycle Events

<div class="grid grid-cols-3 gap-4 mt-6 text-xs">

<div class="p-4 bg-blue-900/60 rounded-lg border-2 border-blue-400">
  <div class="text-2xl mb-2">🚀</div>
  <div class="font-bold text-blue-300 text-sm mb-2">sessionStart</div>
  <div class="text-gray-300 space-y-1">
    <div>• Validate project state</div>
    <div>• Initialize logging</div>
    <div>• Set environment variables</div>
  </div>
  <div class="mt-3 text-blue-400 italic text-xs">Ensure known-good state</div>
</div>

<div class="p-4 bg-purple-900/60 rounded-lg border-2 border-purple-400">
  <div class="text-2xl mb-2">📝</div>
  <div class="font-bold text-purple-300 text-sm mb-2">userPromptSubmitted</div>
  <div class="text-gray-300 space-y-1">
    <div>• Log original request</div>
    <div>• Track prompt patterns</div>
    <div>• Record user context</div>
  </div>
  <div class="mt-3 text-purple-400 italic text-xs">Compliance audit trails</div>
</div>

<div class="p-4 bg-green-900/60 rounded-lg border-2 border-green-400">
  <div class="text-2xl mb-2">🛡️</div>
  <div class="font-bold text-green-300 text-sm mb-2">preToolUse</div>
  <div class="text-gray-300 space-y-1">
    <div>• <strong>Approve or deny</strong> execution</div>
    <div>• Enforce security policies</div>
    <div>• Validate restrictions</div>
  </div>
  <div class="mt-3 text-green-400 italic text-xs font-bold">⭐ MOST POWERFUL</div>
</div>

<div class="p-4 bg-orange-900/60 rounded-lg border-2 border-orange-400">
  <div class="text-2xl mb-2">📊</div>
  <div class="font-bold text-orange-300 text-sm mb-2">postToolUse</div>
  <div class="text-gray-300 space-y-1">
    <div>• Log tool results</div>
    <div>• Collect metrics</div>
    <div>• Trigger alerts</div>
  </div>
  <div class="mt-3 text-orange-400 italic text-xs">Observability & monitoring</div>
</div>

<div class="p-4 bg-red-900/60 rounded-lg border-2 border-red-400">
  <div class="text-2xl mb-2">⚠️</div>
  <div class="font-bold text-red-300 text-sm mb-2">errorOccurred</div>
  <div class="text-gray-300 space-y-1">
    <div>• Capture error details</div>
    <div>• Alert teams</div>
    <div>• Log stack traces</div>
  </div>
  <div class="mt-3 text-red-400 italic text-xs">Operational monitoring</div>
</div>

<div class="p-4 bg-gray-700 rounded-lg border-2 border-gray-500">
  <div class="text-2xl mb-2">🏁</div>
  <div class="font-bold text-gray-300 text-sm mb-2">sessionEnd</div>
  <div class="text-gray-300 space-y-1">
    <div>• Archive logs</div>
    <div>• Send summary reports</div>
    <div>• Release resources</div>
  </div>
  <div class="mt-3 text-gray-400 italic text-xs">Resource management</div>
</div>

</div>

<div class="mt-8 p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-center">
  <span class="text-white font-bold text-lg">Only <code class="text-yellow-300">preToolUse</code> can PREVENT actions</span>
  <span class="text-blue-200 text-sm ml-3">All others are observational</span>
</div>

---

# Hook Execution Flow

<div class="flex flex-col gap-4 mt-6">

<div class="flex items-center gap-4">
  <div class="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">1</div>
  <div class="flex-1 p-4 bg-blue-900/40 rounded-lg border-l-4 border-blue-400">
    <div class="font-bold text-blue-300">Event Detection</div>
    <div class="text-gray-300 text-sm">Agent detects lifecycle event (session start, tool request, etc.)</div>
  </div>
</div>

<div class="text-3xl text-gray-400 text-center">↓</div>

<div class="flex items-center gap-4">
  <div class="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">2</div>
  <div class="flex-1 p-4 bg-purple-900/40 rounded-lg border-l-4 border-purple-400">
    <div class="font-bold text-purple-300">Hook Discovery & Invocation</div>
    <div class="text-gray-300 text-sm">Reads <code>.github/hooks/*.json</code> and spawns shell process with event context</div>
  </div>
</div>

<div class="text-3xl text-gray-400 text-center">↓</div>

<div class="flex items-center gap-4">
  <div class="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">3</div>
  <div class="flex-1 p-4 bg-green-900/40 rounded-lg border-l-4 border-green-400">
    <div class="font-bold text-green-300">Context Passing via JSON</div>
    <div class="text-gray-300 text-sm mt-2">
      <pre class="text-xs"><code>{
  "timestamp": "2025-06-15T17:30:00Z",
  "workingDirectory": "/workspace/project",
  "toolName": "bash",
  "args": {"command": "rm -rf data/"}
}</code></pre>
    </div>
  </div>
</div>

<div class="text-3xl text-gray-400 text-center">↓</div>

<div class="flex items-center gap-4">
  <div class="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold">4</div>
  <div class="flex-1 p-4 bg-orange-900/40 rounded-lg border-l-4 border-orange-400">
    <div class="font-bold text-orange-300">Execution & Decision</div>
    <div class="text-gray-300 text-sm">For <code>preToolUse</code>, reads stdout for permission:
      <code class="text-red-400">{"permissionDecision": "deny"}</code>
    </div>
  </div>
</div>

</div>

<div class="mt-6 text-center text-sm text-gray-400 italic">
  ⚡ Keep hooks fast (&lt;5s) to avoid degrading agent responsiveness
</div>

---

# Use Case 1: Security Policy Enforcement

<div class="grid grid-cols-2 gap-8 mt-6">

<div>

### ❌ The Problem

<div class="p-4 bg-red-900/40 rounded-lg border-l-4 border-red-500 mb-4">
  <div class="text-sm text-gray-300 space-y-2">
    <div>• Manual review catches violations <strong>after execution</strong></div>
    <div>• <strong>2 violations per sprint</strong></div>
    <div>• <strong>30 min</strong> manual investigation each</div>
    <div>• Too late for prevention</div>
  </div>
</div>

### 🛡️ The Solution

<div class="p-4 bg-green-900/40 rounded-lg border-l-4 border-green-500">
  <div class="font-bold text-green-300 mb-2">preToolUse Hook</div>
  <div class="text-xs text-gray-300 space-y-1">
    <div>✓ Block destructive file operations</div>
    <div>✓ Prevent privilege escalation</div>
    <div>✓ Stop database destruction</div>
    <div>✓ Control network exposure</div>
    <div>✓ Protect credential access</div>
  </div>
</div>

</div>

<div>

### 📝 Implementation

```bash {1-4|6-10|12-16|18-20}
#!/bin/bash
INPUT=$(cat)
TOOL_NAME=$(echo "$INPUT" | jq -r '.toolName')
COMMAND=$(echo "$INPUT" | jq -r '.args.command')

# Block dangerous delete operations
if echo "$COMMAND" | grep -qE 'rm -rf /'; then
  echo '{"permissionDecision": "deny"}'
  exit 0
fi

# Block privilege escalation
if echo "$COMMAND" | grep -qE '^sudo '; then
  echo '{"permissionDecision": "deny"}'
  exit 0
fi

# Default: allow
exit 0
```

### ✨ Results

<div class="grid grid-cols-3 gap-2 mt-4 text-xs">
  <div class="p-3 bg-blue-900/60 rounded-lg text-center">
    <div class="text-2xl font-bold text-blue-300">0 min</div>
    <div class="text-gray-400">Review time</div>
    <div class="text-gray-500 text-xs">was 60 min</div>
  </div>
  <div class="p-3 bg-green-900/60 rounded-lg text-center">
    <div class="text-2xl font-bold text-green-300">0</div>
    <div class="text-gray-400">Violations</div>
    <div class="text-gray-500 text-xs">was 2/sprint</div>
  </div>
  <div class="p-3 bg-purple-900/60 rounded-lg text-center">
    <div class="text-2xl font-bold text-purple-300">&lt;2s</div>
    <div class="text-gray-400">Detection</div>
    <div class="text-gray-500 text-xs">was 30 min</div>
  </div>
</div>

</div>

</div>

<div class="mt-6 p-4 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-lg text-center">
  <div class="text-xl font-bold text-white">Security policies as code, enforced at runtime</div>
</div>

---

# Use Case 2: Compliance Audit Trail

<div class="grid grid-cols-2 gap-8 mt-6">

<div>

### ❌ The Problem

<div class="p-4 bg-red-900/40 rounded-lg border-l-4 border-red-500 mb-4 text-sm">
  <div class="text-gray-300 space-y-2">
    <div>• Manual audit extraction: <strong>20 min per request</strong></div>
    <div>• Incomplete coverage: <strong>~70%</strong></div>
    <div>• Ad-hoc logging inconsistent</div>
  </div>
</div>

### 🎯 The Solution

<div class="p-4 bg-green-900/40 rounded-lg border-l-4 border-green-500 text-sm">
  <div class="font-bold text-green-300 mb-2">Structured JSON Lines Logging</div>
  <div class="text-gray-300 space-y-1 text-xs">
    <div>✓ Every session, prompt, tool execution logged</div>
    <div>✓ One JSON object per line (append-safe)</div>
    <div>✓ Direct querying with <code>jq</code></div>
    <div>✓ 100% coverage guaranteed</div>
  </div>
</div>

### 📊 Example Queries

```bash
# Count tool usage
cat audit.jsonl | jq -r '.toolName' | sort | uniq -c

# Find denied operations
cat audit.jsonl | jq 'select(.permissionDecision == "deny")'

# Export to CSV
cat audit.jsonl | jq -r '[.timestamp, .toolName] | @csv'
```

</div>

<div>

### 📋 Audit Log Format

```jsonl
{"timestamp":"2025-06-15T17:30:00Z",
 "event":"sessionStart","sessionId":"abc123"}

{"timestamp":"2025-06-15T17:30:15Z",
 "event":"userPromptSubmitted",
 "prompt":"Refactor authentication module"}

{"timestamp":"2025-06-15T17:30:20Z",
 "event":"preToolUse","toolName":"edit",
 "args":{"path":"src/auth.js"},
 "permissionDecision":"allow"}

{"timestamp":"2025-06-15T17:30:25Z",
 "event":"postToolUse","toolName":"edit",
 "result":"success"}

{"timestamp":"2025-06-15T17:30:30Z",
 "event":"sessionEnd",
 "toolsUsed":3,"violations":0}
```

### ✨ Results

<div class="grid grid-cols-3 gap-2 mt-4 text-xs">
  <div class="p-3 bg-blue-900/60 rounded-lg text-center">
    <div class="text-2xl font-bold text-blue-300">2 min</div>
    <div class="text-gray-400">Audit time</div>
    <div class="text-gray-500 text-xs">was 20 min</div>
  </div>
  <div class="p-3 bg-green-900/60 rounded-lg text-center">
    <div class="text-2xl font-bold text-green-300">100%</div>
    <div class="text-gray-400">Coverage</div>
    <div class="text-gray-500 text-xs">was ~70%</div>
  </div>
  <div class="p-3 bg-purple-900/60 rounded-lg text-center">
    <div class="text-2xl font-bold text-purple-300">SQL</div>
    <div class="text-gray-400">Query capability</div>
    <div class="text-gray-500 text-xs">was none</div>
  </div>
</div>

</div>

</div>

<div class="mt-6 p-4 bg-gradient-to-r from-purple-600 to-blue-800 rounded-xl shadow-lg text-center">
  <div class="text-xl font-bold text-white">Programmatic compliance replaces manual log parsing</div>
</div>

---

# Use Case 3: Quality Gate Integration

<div class="grid grid-cols-2 gap-8 mt-6">

<div>

### ❌ The Problem

<div class="p-4 bg-red-900/40 rounded-lg border-l-4 border-red-500 mb-4 text-sm">
  <div class="text-gray-300 space-y-2">
    <div>• Style violations reach CI, requiring rework</div>
    <div>• <strong>12 violations per sprint</strong></div>
    <div>• <strong>3 rework rounds</strong> × 25 min = 75 min</div>
  </div>
</div>

### 🎯 The Solution

<div class="p-4 bg-green-900/40 rounded-lg border-l-4 border-green-500 text-sm">
  <div class="font-bold text-green-300 mb-2">Shift-Left Validation</div>
  <div class="text-gray-300 text-xs space-y-1">
    <div>✓ Run linter <strong>before</strong> code edits</div>
    <div>✓ Deny non-compliant changes</div>
    <div>✓ Standards enforced at creation</div>
    <div>✓ Zero CI violations</div>
  </div>
</div>

### ✨ Results

<div class="grid grid-cols-3 gap-2 mt-4 text-xs">
  <div class="p-3 bg-blue-900/60 rounded-lg text-center">
    <div class="text-2xl font-bold text-blue-300">0 min</div>
    <div class="text-gray-400">Rework time</div>
    <div class="text-gray-500 text-xs">was 75 min</div>
  </div>
  <div class="p-3 bg-green-900/60 rounded-lg text-center">
    <div class="text-2xl font-bold text-green-300">1</div>
    <div class="text-gray-400">Rounds</div>
    <div class="text-gray-500 text-xs">was 3</div>
  </div>
  <div class="p-3 bg-purple-900/60 rounded-lg text-center">
    <div class="text-2xl font-bold text-purple-300">0</div>
    <div class="text-gray-400">CI violations</div>
    <div class="text-gray-500 text-xs">was 12</div>
  </div>
</div>

</div>

<div>

### 📝 Implementation

```bash {1-5|7-10|12-17|19-23}
#!/bin/bash
INPUT=$(cat)
TOOL_NAME=$(echo "$INPUT" | jq -r '.toolName')
FILE_PATH=$(echo "$INPUT" | jq -r '.args.path')

# Only lint code file edits
if [[ "$TOOL_NAME" != "edit" ]] || 
   [[ ! "$FILE_PATH" =~ \.(js|ts)$ ]]; then
  exit 0
fi

# Create temp file with proposed changes
TEMP_FILE=$(mktemp)
echo "$INPUT" | jq -r '.args.new_str' > "$TEMP_FILE"

# Run linter
if ! npx eslint "$TEMP_FILE" > /dev/null 2>&1; then
  echo '{"permissionDecision": "deny",
         "permissionDecisionReason": 
         "Code fails linting"}'
  rm "$TEMP_FILE"
  exit 0
fi
```

<div class="mt-6 p-4 bg-gradient-to-br from-yellow-900/60 to-orange-900/60 rounded-lg border-2 border-yellow-500">
  <div class="text-yellow-300 font-bold mb-2">💡 Key Insight</div>
  <div class="text-gray-300 text-sm">
    Validate at point of creation, not post-commit cleanup
  </div>
</div>

</div>

</div>

<div class="mt-6 p-4 bg-gradient-to-r from-green-600 to-blue-800 rounded-xl shadow-lg text-center">
  <div class="text-xl font-bold text-white">Agents generate compliant code on first attempt</div>
</div>

---

# Best Practices: Performance

<div class="grid grid-cols-2 gap-8 mt-8">

<div>

### ⚡ Target Execution Times

<div class="space-y-3">
  <div class="p-4 bg-green-900/40 rounded-lg border-l-4 border-green-500">
    <div class="font-bold text-green-300">&lt; 2 seconds</div>
    <div class="text-gray-300 text-sm">Security checks, logging</div>
  </div>
  
  <div class="p-4 bg-blue-900/40 rounded-lg border-l-4 border-blue-500">
    <div class="font-bold text-blue-300">&lt; 5 seconds</div>
    <div class="text-gray-300 text-sm">Linting, validation</div>
  </div>
  
  <div class="p-4 bg-yellow-900/40 rounded-lg border-l-4 border-yellow-500">
    <div class="font-bold text-yellow-300">&lt; 120 seconds</div>
    <div class="text-gray-300 text-sm">External API calls (use <code>timeoutSec</code>)</div>
  </div>
</div>

</div>

<div>

### 🚀 Optimization Patterns

<div class="space-y-4 text-sm">

<div class="p-3 bg-gray-800 rounded-lg flex items-start gap-3">
  <span class="text-2xl">💾</span>
  <div>
    <div class="text-white font-bold">Cache expensive computations</div>
    <div class="text-gray-400">Compiled regex, policy lookups</div>
  </div>
</div>

<div class="p-3 bg-gray-800 rounded-lg flex items-start gap-3">
  <span class="text-2xl">⚡</span>
  <div>
    <div class="text-white font-bold">Asynchronous logging</div>
    <div class="text-gray-400">Append to file, don't wait for I/O</div>
  </div>
</div>

<div class="p-3 bg-gray-800 rounded-lg flex items-start gap-3">
  <span class="text-2xl">🔄</span>
  <div>
    <div class="text-white font-bold">Background processing</div>
    <div class="text-gray-400">Offload slow work to jobs triggered by hooks</div>
  </div>
</div>

<div class="p-3 bg-gray-800 rounded-lg flex items-start gap-3">
  <span class="text-2xl">📊</span>
  <div>
    <div class="text-white font-bold">Profile scripts</div>
    <div class="text-gray-400"><code>time ./hook.sh &lt; test-input.json</code></div>
  </div>
</div>

</div>

</div>

</div>

<div class="mt-6 p-4 bg-gradient-to-r from-red-900/40 to-gray-800 rounded-lg text-center">
  <span class="text-white font-bold">⚠️ Slow hooks degrade agent responsiveness</span>
</div>

---

# Best Practices: Security

<div class="grid grid-cols-2 gap-8 mt-8">

<div>

### 🛡️ Deny by Default

<div class="p-4 bg-blue-900/60 rounded-lg border-2 border-blue-400 mb-4">
  <div class="font-bold text-blue-300 mb-3">Security Principle</div>
  <div class="text-gray-300 text-sm space-y-2">
    <div>✓ Deny operations unless <strong>explicitly approved</strong></div>
    <div>✓ Safer than allow-by-default with filtering</div>
    <div>✓ Reduces attack surface for policy bypass</div>
  </div>
</div>

### 🔐 Secret Handling

<div class="space-y-3 text-sm">
  <div class="p-3 bg-red-900/40 rounded-lg border-l-4 border-red-500">
    <div class="font-bold text-red-400">❌ Never</div>
    <div class="text-gray-300">Log credentials, tokens, sensitive data</div>
  </div>
  
  <div class="p-3 bg-green-900/40 rounded-lg border-l-4 border-green-500">
    <div class="font-bold text-green-400">✓ Always</div>
    <div class="text-gray-300">Use environment variables for secrets</div>
  </div>
  
  <div class="p-3 bg-green-900/40 rounded-lg border-l-4 border-green-500">
    <div class="font-bold text-green-400">✓ Always</div>
    <div class="text-gray-300">Scrub sensitive fields before logging</div>
  </div>
</div>

</div>

<div>

### 🔒 Script Security

<div class="space-y-4 text-sm">

<div class="p-3 bg-gray-800 rounded-lg flex items-start gap-3">
  <span class="text-2xl">✅</span>
  <div>
    <div class="text-white font-bold">Validate all input</div>
    <div class="text-gray-400">Don't trust JSON field values</div>
  </div>
</div>

<div class="p-3 bg-gray-800 rounded-lg flex items-start gap-3">
  <span class="text-2xl">✅</span>
  <div>
    <div class="text-white font-bold">Use parameterized commands</div>
    <div class="text-gray-400">Avoid shell injection</div>
  </div>
</div>

<div class="p-3 bg-gray-800 rounded-lg flex items-start gap-3">
  <span class="text-2xl">✅</span>
  <div>
    <div class="text-white font-bold">Least privilege</div>
    <div class="text-gray-400">Don't require sudo for hooks</div>
  </div>
</div>

</div>

### 🧪 Testing & Debugging

```bash
# Test hooks locally
echo '{"toolName":"bash","args":{"command":"rm -rf /"}}' \
  | ./security-check.sh

# Enable verbose logging
export DEBUG=true

# Monitor execution time
time ./hook.sh < test-input.json
```

</div>

</div>

---

# Metrics and Observability

<div class="grid grid-cols-2 gap-6 mt-6">

<div>

### 📊 Governance Effectiveness

<div class="space-y-3 text-xs">

<div class="p-3 bg-red-900/40 rounded-lg">
  <div class="font-bold text-red-300 mb-2">🔒 Security Enforcement</div>
  <div class="text-gray-300 space-y-1">
    <div>• Blocked operations by type</div>
    <div>• Time to detection (real-time vs. post-incident)</div>
    <div>• Policy coverage (% patterns caught)</div>
  </div>
</div>

<div class="p-3 bg-blue-900/40 rounded-lg">
  <div class="font-bold text-blue-300 mb-2">📋 Compliance Audit</div>
  <div class="text-gray-300 space-y-1">
    <div>• Audit log completeness (% sessions logged)</div>
    <div>• Query response time</div>
    <div>• Retention compliance</div>
  </div>
</div>

<div class="p-3 bg-green-900/40 rounded-lg">
  <div class="font-bold text-green-300 mb-2">✨ Quality Gates</div>
  <div class="text-gray-300 space-y-1">
    <div>• Violations prevented at creation</div>
    <div>• Rework time saved</div>
    <div>• Standards enforcement coverage</div>
  </div>
</div>

</div>

</div>

<div>

### ⚡ Operational Metrics

<div class="space-y-3 text-xs">

<div class="p-3 bg-purple-900/40 rounded-lg">
  <div class="font-bold text-purple-300 mb-2">🎯 Hook Performance</div>
  <div class="text-gray-300 space-y-1">
    <div>• Execution time (p50, p95, p99)</div>
    <div>• Timeout rate</div>
    <div>• Failure rate</div>
  </div>
</div>

<div class="p-3 bg-orange-900/40 rounded-lg">
  <div class="font-bold text-orange-300 mb-2">🤖 Agent Impact</div>
  <div class="text-gray-300 space-y-1">
    <div>• Session latency with/without hooks</div>
    <div>• User satisfaction</div>
    <div>• Adoption rate (% teams using hooks)</div>
  </div>
</div>

</div>

### 📈 Example Dashboard Queries

```bash
# Security blocks (last 7 days)
jq -r 'select(.permissionDecision == "deny") 
  | .permissionDecisionReason' audit.jsonl \
  | sort | uniq -c

# Tool usage distribution
jq -r '.toolName' audit.jsonl \
  | sort | uniq -c | sort -rn

# Session metrics
jq -s 'group_by(.sessionId) 
  | map({tools: length, 
         violations: map(select(
           .permissionDecision == "deny")) 
         | length})' audit.jsonl
```

</div>

</div>

<div class="mt-4 text-center text-sm text-gray-400 italic">
  Measurement drives improvement—track what's prevented, how fast, and coverage gaps
</div>

---

# Integration Patterns

<div class="grid grid-cols-2 gap-8 mt-6">

<div>

### 🔗 Combining with Other Customizations

<div class="space-y-4 text-sm">

<div class="p-4 bg-blue-900/40 rounded-lg border-l-4 border-blue-500">
  <div class="font-bold text-blue-300 mb-2">Hooks + Custom Instructions</div>
  <div class="text-gray-300">
    • Instructions define <strong>what</strong> agents should do<br/>
    • Hooks enforce <strong>boundaries</strong> on how they do it<br/>
    • Example: "Follow coding standards" + lint validation
  </div>
</div>

<div class="p-4 bg-green-900/40 rounded-lg border-l-4 border-green-500">
  <div class="font-bold text-green-300 mb-2">Hooks + Agent Skills</div>
  <div class="text-gray-300">
    • Skills provide domain capabilities<br/>
    • Hooks audit skill usage, enforce policies<br/>
    • Example: Deployment skill + production logs
  </div>
</div>

<div class="p-4 bg-purple-900/40 rounded-lg border-l-4 border-purple-500">
  <div class="font-bold text-purple-300 mb-2">Hooks + Custom Agents</div>
  <div class="text-gray-300">
    • Agents orchestrate complex workflows<br/>
    • Hooks ensure governance at each step<br/>
    • Example: PR agent + commit message validation
  </div>
</div>

</div>

</div>

<div>

### 🌐 External System Integration

<div class="space-y-4 text-xs">

<div class="p-3 bg-gray-800 rounded-lg">
  <div class="font-bold text-white mb-2">💬 Slack Notifications</div>
  <div class="text-gray-400">
    <pre class="text-xs"><code>curl -X POST "$SLACK_WEBHOOK" \
  -d '{"text":"Security violation blocked"}'</code></pre>
  </div>
</div>

<div class="p-3 bg-gray-800 rounded-lg">
  <div class="font-bold text-white mb-2">📊 Metrics (Datadog, New Relic)</div>
  <div class="text-gray-400">
    <pre class="text-xs"><code>echo "hook.execution.time:$DURATION|ms" \
  | nc -u -w0 statsd-host 8125</code></pre>
  </div>
</div>

<div class="p-3 bg-gray-800 rounded-lg">
  <div class="font-bold text-white mb-2">🎫 Ticketing (Jira, ServiceNow)</div>
  <div class="text-gray-400">
    <pre class="text-xs"><code>curl -X POST "$JIRA_API/issue" \
  -d '{"fields":{"project":{"key":"SEC"}}}'</code></pre>
  </div>
</div>

</div>

<div class="mt-6 p-4 bg-gradient-to-br from-blue-900/60 to-purple-900/60 rounded-lg border-2 border-blue-400">
  <div class="text-blue-300 font-bold mb-2">💡 Integration Philosophy</div>
  <div class="text-gray-300 text-sm">
    Hooks extend existing workflows—not replacing them.<br/>
    Enterprise observability through existing tools.
  </div>
</div>

</div>

</div>

---

# Advanced Patterns

<div class="grid grid-cols-2 gap-8 mt-6">

<div>

### 🎯 Conditional Policies by Context

<div class="mb-6">
<div class="font-bold text-blue-300 mb-2 text-sm">Environment-Aware Enforcement</div>

```bash
# Stricter policies in production
if [[ "$WORKING_DIR" =~ /production/ ]]; then
  if [[ "$TOOL_NAME" == "edit" ]]; then
    echo '{"permissionDecision": "deny",
           "permissionDecisionReason": 
           "Production requires approval"}'
    exit 0
  fi
fi
```
</div>

<div>
<div class="font-bold text-green-300 mb-2 text-sm">User-Based Permissions</div>

```bash
# Junior developers restricted
if [[ "$USER_ROLE" == "junior" ]] && 
   echo "$COMMAND" | grep -q "deploy"; then
  echo '{"permissionDecision": "deny"}'
  exit 0
fi
```
</div>

</div>

<div>

### 🔄 Multi-Hook Coordination

<div class="flex flex-col gap-2 text-xs">

<div class="p-2 bg-blue-900/60 rounded border-l-4 border-blue-400">
  <span class="font-bold text-blue-300">1. sessionStart</span>
  <span class="text-gray-400"> → Validate prerequisites</span>
</div>

<div class="text-2xl text-gray-400 text-center">↓</div>

<div class="p-2 bg-green-900/60 rounded border-l-4 border-green-400">
  <span class="font-bold text-green-300">2. preToolUse</span>
  <span class="text-gray-400"> → Check policies</span>
</div>

<div class="text-2xl text-gray-400 text-center">↓</div>

<div class="p-2 bg-orange-900/60 rounded border-l-4 border-orange-400">
  <span class="font-bold text-orange-300">3. postToolUse</span>
  <span class="text-gray-400"> → Log results</span>
</div>

<div class="text-2xl text-gray-400 text-center">↓</div>

<div class="p-2 bg-red-900/60 rounded border-l-4 border-red-400">
  <span class="font-bold text-red-300">4. errorOccurred</span>
  <span class="text-gray-400"> → Alert on failure</span>
</div>

<div class="text-2xl text-gray-400 text-center">↓</div>

<div class="p-2 bg-gray-700 rounded border-l-4 border-gray-500">
  <span class="font-bold text-gray-300">5. sessionEnd</span>
  <span class="text-gray-400"> → Archive logs</span>
</div>

</div>

### 📈 Policy Evolution Strategy

<div class="mt-4 space-y-2 text-xs">
  <div class="p-2 bg-gray-800 rounded">
    <span class="text-yellow-400">1️⃣</span> Start with <code>postToolUse</code> logging (observe)
  </div>
  <div class="p-2 bg-gray-800 rounded">
    <span class="text-yellow-400">2️⃣</span> Analyze patterns to define policies
  </div>
  <div class="p-2 bg-gray-800 rounded">
    <span class="text-yellow-400">3️⃣</span> Promote to <code>preToolUse</code> (prevent)
  </div>
  <div class="p-2 bg-gray-800 rounded">
    <span class="text-yellow-400">4️⃣</span> Monitor for false positives, iterate
  </div>
</div>

</div>

</div>

<div class="mt-4 text-center text-sm text-gray-400 italic">
  Crawl → Walk → Run: Log first, analyze patterns, enforce gradually
</div>

---

# Key Takeaways: Technical

<div class="grid grid-cols-2 gap-6 mt-8">

<div class="space-y-4">

<div class="p-4 bg-blue-900/60 rounded-lg border-l-4 border-blue-400">
  <div class="text-2xl mb-2">🔗</div>
  <div class="font-bold text-blue-300 mb-2">Lifecycle Control Points</div>
  <div class="text-gray-300 text-sm">
    Hooks provide control at strategic points: session start, before/after tool use, on errors
  </div>
</div>

<div class="p-4 bg-green-900/60 rounded-lg border-l-4 border-green-400">
  <div class="text-2xl mb-2">🛡️</div>
  <div class="font-bold text-green-300 mb-2">Real-time Prevention</div>
  <div class="text-gray-300 text-sm">
    <code>preToolUse</code> is uniquely powerful for real-time prevention via <code>permissionDecision: "deny"</code>
  </div>
</div>

</div>

<div class="space-y-4">

<div class="p-4 bg-purple-900/60 rounded-lg border-l-4 border-purple-400">
  <div class="text-2xl mb-2">📋</div>
  <div class="font-bold text-purple-300 mb-2">Programmatic Compliance</div>
  <div class="text-gray-300 text-sm">
    JSON Lines format enables direct querying and append-safe logging
  </div>
</div>

<div class="p-4 bg-orange-900/60 rounded-lg border-l-4 border-orange-400">
  <div class="text-2xl mb-2">⚡</div>
  <div class="font-bold text-orange-300 mb-2">Performance Matters</div>
  <div class="text-gray-300 text-sm">
    Keep hooks fast (&lt;5s typical) to avoid degrading agent responsiveness
  </div>
</div>

</div>

</div>

<div class="mt-8 p-5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg text-center">
  <div class="text-2xl font-bold text-white">Governance as code enables velocity with visibility</div>
  <div class="text-blue-200 text-lg mt-2">Automation with accountability</div>
</div>

---

# Key Takeaways: Strategic

<div class="grid grid-cols-2 gap-6 mt-8">

<div class="space-y-4">

<div class="p-4 bg-green-900/60 rounded-lg border-l-4 border-green-400">
  <div class="text-2xl mb-2">⬅️</div>
  <div class="font-bold text-green-300 mb-2">Shift-Left Enforcement</div>
  <div class="text-gray-300 text-sm">
    Validate at creation, not in post-commit review—eliminate rework cycles
  </div>
</div>

<div class="p-4 bg-red-900/60 rounded-lg border-l-4 border-red-400">
  <div class="text-2xl mb-2">🔒</div>
  <div class="font-bold text-red-300 mb-2">Deny-by-Default Security</div>
  <div class="text-gray-300 text-sm">
    Safer than allow-with-filtering—reduce attack surface for policy bypass
  </div>
</div>

</div>

<div class="space-y-4">

<div class="p-4 bg-blue-900/60 rounded-lg border-l-4 border-blue-400">
  <div class="text-2xl mb-2">📊</div>
  <div class="font-bold text-blue-300 mb-2">Measurement Drives Improvement</div>
  <div class="text-gray-300 text-sm">
    Track what's prevented, how fast, and coverage gaps—justify investment
  </div>
</div>

<div class="p-4 bg-purple-900/60 rounded-lg border-l-4 border-purple-400">
  <div class="text-2xl mb-2">🎯</div>
  <div class="font-bold text-purple-300 mb-2">Governance as Code</div>
  <div class="text-gray-300 text-sm">
    Automated compliance, self-enforcing security, creation-time quality gates
  </div>
</div>

</div>

</div>

<div class="mt-8 p-5 bg-gradient-to-r from-green-600 to-blue-800 rounded-xl shadow-lg text-center">
  <div class="text-2xl font-bold text-white">Prevention over detection</div>
  <div class="text-green-200 text-lg mt-2">Real-time governance for autonomous AI agents</div>
</div>

---

# Key Takeaways: Organizational

<div class="grid grid-cols-2 gap-8 mt-8">

<div class="space-y-6">

<div class="p-5 bg-gradient-to-br from-blue-900/60 to-blue-800/40 rounded-lg border-2 border-blue-400">
  <div class="text-3xl mb-3">🤖</div>
  <div class="font-bold text-blue-300 text-lg mb-3">Automated Compliance</div>
  <div class="text-gray-300 text-sm">
    Replace manual audit extraction with instant queries. 100% coverage guaranteed.
  </div>
</div>

<div class="p-5 bg-gradient-to-br from-green-900/60 to-green-800/40 rounded-lg border-2 border-green-400">
  <div class="text-3xl mb-3">🔐</div>
  <div class="font-bold text-green-300 text-lg mb-3">Self-Enforcing Security</div>
  <div class="text-gray-300 text-sm">
    Policies enforce themselves in real-time—no reliance on manual review processes.
  </div>
</div>

</div>

<div class="space-y-6">

<div class="p-5 bg-gradient-to-br from-purple-900/60 to-purple-800/40 rounded-lg border-2 border-purple-400">
  <div class="text-3xl mb-3">✨</div>
  <div class="font-bold text-purple-300 text-lg mb-3">Zero-Rework Quality</div>
  <div class="text-gray-300 text-sm">
    Standards validated at creation. Agents generate compliant code on first attempt.
  </div>
</div>

<div class="p-5 bg-gradient-to-br from-orange-900/60 to-orange-800/40 rounded-lg border-2 border-orange-400">
  <div class="text-3xl mb-3">🚀</div>
  <div class="font-bold text-orange-300 text-lg mb-3">Trusted Autonomy</div>
  <div class="text-gray-300 text-sm">
    AI agents operate within guardrails—trusted for autonomous work in regulated environments.
  </div>
</div>

</div>

</div>

<div class="mt-8 p-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg text-center">
  <div class="text-3xl font-bold text-white mb-2">Enable AI velocity in regulated industries</div>
  <div class="text-blue-200 text-xl">Finance · Healthcare · Government</div>
</div>

---

# Implementation Roadmap

<div class="flex flex-col gap-3 mt-8">

<div class="flex items-center gap-4">
  <div class="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">1</div>
  <div class="flex-1 p-4 bg-blue-900/40 rounded-lg border-l-4 border-blue-400">
    <div class="font-bold text-blue-300 text-lg">Start with Observability</div>
    <div class="text-gray-300 text-sm">Implement <code>postToolUse</code> logging for audit trails—observe patterns without blocking</div>
  </div>
</div>

<div class="text-2xl text-gray-400 text-center">↓</div>

<div class="flex items-center gap-4">
  <div class="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl">2</div>
  <div class="flex-1 p-4 bg-green-900/40 rounded-lg border-l-4 border-green-400">
    <div class="font-bold text-green-300 text-lg">Define Security Policies</div>
    <div class="text-gray-300 text-sm">Analyze logs to identify dangerous patterns—create <code>preToolUse</code> blocklist</div>
  </div>
</div>

<div class="text-2xl text-gray-400 text-center">↓</div>

<div class="flex items-center gap-4">
  <div class="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">3</div>
  <div class="flex-1 p-4 bg-purple-900/40 rounded-lg border-l-4 border-purple-400">
    <div class="font-bold text-purple-300 text-lg">Enforce Quality Gates</div>
    <div class="text-gray-300 text-sm">Add linting/validation hooks—prevent violations at creation</div>
  </div>
</div>

<div class="text-2xl text-gray-400 text-center">↓</div>

<div class="flex items-center gap-4">
  <div class="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xl">4</div>
  <div class="flex-1 p-4 bg-orange-900/40 rounded-lg border-l-4 border-orange-400">
    <div class="font-bold text-orange-300 text-lg">Integrate External Systems</div>
    <div class="text-gray-300 text-sm">Connect to Slack, metrics platforms, ticketing—enterprise observability</div>
  </div>
</div>

<div class="text-2xl text-gray-400 text-center">↓</div>

<div class="flex items-center gap-4">
  <div class="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl">5</div>
  <div class="flex-1 p-4 bg-red-900/40 rounded-lg border-l-4 border-red-400">
    <div class="font-bold text-red-300 text-lg">Iterate Based on Metrics</div>
    <div class="text-gray-300 text-sm">Monitor performance, adjust policies, optimize for velocity with safety</div>
  </div>
</div>

</div>

---

# Resources & Documentation

<div class="grid grid-cols-2 gap-8 mt-8">

<div>

### 📖 Official Documentation

<div class="space-y-3 text-sm">

<div class="p-3 bg-blue-900/40 rounded-lg border-l-4 border-blue-500">
  <div class="font-bold text-blue-300">About Hooks</div>
  <div class="text-gray-400 text-xs mt-1">Conceptual overview and hook types</div>
  <div class="text-blue-400 text-xs mt-2">docs.github.com/copilot/concepts/agents/coding-agent/about-hooks</div>
</div>

<div class="p-3 bg-green-900/40 rounded-lg border-l-4 border-green-500">
  <div class="font-bold text-green-300">Configuration Reference</div>
  <div class="text-gray-400 text-xs mt-1">Complete spec with input/output formats</div>
  <div class="text-green-400 text-xs mt-2">docs.github.com/copilot/reference/hooks-configuration</div>
</div>

<div class="p-3 bg-purple-900/40 rounded-lg border-l-4 border-purple-500">
  <div class="font-bold text-purple-300">Implementation Guide</div>
  <div class="text-gray-400 text-xs mt-1">Step-by-step how-to with examples</div>
  <div class="text-purple-400 text-xs mt-2">docs.github.com/copilot/how-tos/use-copilot-agents/coding-agent/use-hooks</div>
</div>

</div>

</div>

<div>

### 💻 Example Implementations

<div class="space-y-3 text-sm">

<div class="p-3 bg-gray-800 rounded-lg">
  <div class="flex items-center gap-2 mb-2">
    <span class="text-2xl">📋</span>
    <div class="font-bold text-white">audit-hooks.json</div>
  </div>
  <div class="text-gray-400 text-xs">Complete audit trail setup with JSON Lines logging</div>
</div>

<div class="p-3 bg-gray-800 rounded-lg">
  <div class="flex items-center gap-2 mb-2">
    <span class="text-2xl">🔒</span>
    <div class="font-bold text-white">security-hooks.json</div>
  </div>
  <div class="text-gray-400 text-xs">Security policy enforcement with deny-by-default patterns</div>
</div>

<div class="p-3 bg-gray-800 rounded-lg">
  <div class="flex items-center gap-2 mb-2">
    <span class="text-2xl">📜</span>
    <div class="font-bold text-white">Hook Scripts Library</div>
  </div>
  <div class="text-gray-400 text-xs">Reusable shell scripts for common governance patterns</div>
</div>

</div>

### 🔗 Related Topics

<div class="mt-4 flex flex-wrap gap-2 text-xs">
  <div class="px-3 py-1 bg-blue-900/60 rounded-full text-blue-300">Custom Instructions</div>
  <div class="px-3 py-1 bg-green-900/60 rounded-full text-green-300">Agent Skills</div>
  <div class="px-3 py-1 bg-purple-900/60 rounded-full text-purple-300">Enterprise Patterns</div>
</div>

</div>

</div>

---
layout: center
class: text-center
---

# Questions?

<div class="mt-12 space-y-4">

<div class="text-4xl">🔒</div>

<div class="text-2xl font-bold text-blue-300">
  GitHub Copilot Hooks
</div>

<div class="text-lg text-gray-400">
  Programmable governance for AI agent workflows
</div>

<div class="mt-8 flex gap-4 justify-center text-sm">
  <div class="px-4 py-2 bg-blue-900/60 rounded-lg text-blue-300">
    📖 docs.github.com/copilot
  </div>
  <div class="px-4 py-2 bg-green-900/60 rounded-lg text-green-300">
    💻 examples/completed-config/hooks
  </div>
</div>

</div>

---
layout: end
---

# Thank You

<div class="absolute bottom-10 right-10 text-sm opacity-50">
  CopilotWorkshop Tech Talk
</div>
