---
theme: default
background: https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## GitHub Copilot Hooks
  Programmable AI Governance
  CopilotWorkshop Technical Deep Dive
drawings:
  persist: false
transition: slide-left
title: GitHub Copilot Hooks - Programmable AI Governance
mdc: true
---

# GitHub Copilot Hooks

## Programmable AI Governance

<div class="pt-12">
  <span class="text-6xl">🔧</span>
</div>

<div class="abs-br m-6 flex gap-2">
  <span class="text-sm opacity-50">CopilotWorkshop Technical Deep Dive</span>
</div>

---

# The Core Transformation

<div class="grid grid-cols-2 gap-8 mt-8">

<div class="p-6 bg-red-50 dark:bg-red-900/30 rounded-lg border-2 border-red-500">
  <div class="text-3xl mb-3">❌</div>
  <h3 class="text-xl font-bold text-red-400 mb-4">Unrestricted AI</h3>
  <div class="text-sm text-gray-300 space-y-2">
    <div>• Can do anything</div>
    <div>• Trust blindly</div>
    <div>• Review after the fact</div>
    <div>• Manual validation</div>
    <div>• Catch issues post-damage</div>
  </div>
</div>

<div class="p-6 bg-green-50 dark:bg-green-900/30 rounded-lg border-2 border-green-500">
  <div class="text-3xl mb-3">✅</div>
  <h3 class="text-xl font-bold text-green-400 mb-4">Governed Intelligence</h3>
  <div class="text-sm text-gray-300 space-y-2">
    <div>• Operates within boundaries</div>
    <div>• Programmable policies</div>
    <div>• Real-time enforcement</div>
    <div>• Automated validation</div>
    <div>• Prevent before execution</div>
  </div>
</div>

</div>

<div class="mt-8 p-5 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-lg text-center">
  <div class="text-2xl font-bold text-white">Hooks = Executable policies at critical lifecycle moments</div>
</div>

---

# The AI Governance Gap

<div class="grid grid-cols-2 gap-4 text-xs">

<div class="p-3 bg-red-900/40 rounded-lg border-l-4 border-red-500">
  <div class="flex items-center gap-2 mb-2">
    <span class="text-2xl">🔓</span>
    <div class="text-red-400 font-bold">Security Enforcement</div>
  </div>
  <div class="text-gray-300">
    Block dangerous operations (<code>rm -rf /</code>, <code>DROP TABLE</code>) before they execute
  </div>
</div>

<div class="p-3 bg-red-900/40 rounded-lg border-l-4 border-red-500">
  <div class="flex items-center gap-2 mb-2">
    <span class="text-2xl">📋</span>
    <div class="text-red-400 font-bold">Compliance Auditing</div>
  </div>
  <div class="text-gray-300">
    Complete, structured logs for SOC 2, HIPAA, regulatory requirements
  </div>
</div>

<div class="p-3 bg-red-900/40 rounded-lg border-l-4 border-red-500">
  <div class="flex items-center gap-2 mb-2">
    <span class="text-2xl">✓</span>
    <div class="text-red-400 font-bold">Quality Gates</div>
  </div>
  <div class="text-gray-300">
    Enforce coding standards, linting, test requirements at creation point
  </div>
</div>

<div class="p-3 bg-red-900/40 rounded-lg border-l-4 border-red-500">
  <div class="flex items-center gap-2 mb-2">
    <span class="text-2xl">💰</span>
    <div class="text-red-400 font-bold">Cost Tracking</div>
  </div>
  <div class="text-gray-300">
    Monitor tool usage to understand AI utilization and optimize workflows
  </div>
</div>

</div>

<div class="mt-6 text-sm text-gray-400">
  <div class="font-bold text-white mb-2">Traditional approaches fall short:</div>
  <div class="grid grid-cols-3 gap-4">
    <div>• <span class="text-red-400">Manual review:</span> Too slow, doesn't scale</div>
    <div>• <span class="text-red-400">Post-hoc analysis:</span> Can't prevent damage</div>
    <div>• <span class="text-red-400">CI/CD gates:</span> Too late in lifecycle</div>
  </div>
</div>

<div class="mt-6 p-4 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-lg text-center">
  <div class="text-xl font-bold text-white">Hooks close the gap: prevention, not detection</div>
</div>

---

# Hook Architecture

<div class="flex flex-col items-center gap-3 text-sm">

<div class="p-4 bg-purple-900/60 rounded-lg border-2 border-purple-400 w-96 text-center">
  <span class="text-xl">👤</span>
  <div class="text-white font-bold">User Prompt</div>
</div>

<div class="text-3xl text-gray-400">↓</div>

<div class="p-3 bg-blue-900/60 rounded-lg border-2 border-blue-400 w-80">
  <div class="text-blue-300 font-bold">sessionStart</div>
  <div class="text-xs text-gray-400">Initialize environment, logging</div>
</div>

<div class="text-2xl text-gray-400">↓</div>

<div class="p-3 bg-blue-900/60 rounded-lg border-2 border-blue-400 w-80">
  <div class="text-blue-300 font-bold">userPromptSubmitted</div>
  <div class="text-xs text-gray-400">Log request, track usage</div>
</div>

<div class="text-2xl text-gray-400">↓</div>

<div class="p-4 bg-green-900/60 rounded-lg border-2 border-green-400 w-96">
  <div class="text-green-300 font-bold text-lg">preToolUse ⭐</div>
  <div class="text-xs text-gray-400">CONTROL POINT: Approve/Deny</div>
  <div class="text-xs text-green-400 mt-1">Only hook that can prevent execution</div>
</div>

<div class="text-2xl text-gray-400">↓</div>

<div class="p-3 bg-blue-900/60 rounded-lg border-2 border-blue-400 w-80">
  <div class="text-blue-300 font-bold">postToolUse</div>
  <div class="text-xs text-gray-400">Log results, collect metrics</div>
</div>

<div class="text-2xl text-gray-400">↓</div>

<div class="p-3 bg-blue-900/60 rounded-lg border-2 border-blue-400 w-80">
  <div class="text-blue-300 font-bold">sessionEnd</div>
  <div class="text-xs text-gray-400">Cleanup, archive logs, reports</div>
</div>

</div>

---

# Hook Types Deep Dive

<div class="flex flex-col gap-3">

<div class="p-4 bg-gray-800 rounded-lg border-l-4 border-blue-400">
  <div class="flex items-center gap-3 mb-2">
    <span class="text-2xl">🔄</span>
    <h3 class="text-lg font-bold text-blue-300">Session Lifecycle</h3>
  </div>
  <div class="text-xs text-gray-300 ml-11">
    <span class="font-mono text-yellow-400">sessionStart</span> • <span class="font-mono text-yellow-400">sessionEnd</span>
    <div class="mt-1">Environment validation, resource allocation, cleanup, reporting</div>
  </div>
</div>

<div class="p-4 bg-gray-800 rounded-lg border-l-4 border-purple-400">
  <div class="flex items-center gap-3 mb-2">
    <span class="text-2xl">👤</span>
    <h3 class="text-lg font-bold text-purple-300">User Interaction</h3>
  </div>
  <div class="text-xs text-gray-300 ml-11">
    <span class="font-mono text-yellow-400">userPromptSubmitted</span>
    <div class="mt-1">Audit logging, request tracking, user analytics</div>
  </div>
</div>

<div class="p-4 bg-gray-800 rounded-lg border-l-4 border-green-400">
  <div class="flex items-center gap-3 mb-2">
    <span class="text-2xl">🔧</span>
    <h3 class="text-lg font-bold text-green-300">Tool Execution</h3>
  </div>
  <div class="text-xs text-gray-300 ml-11">
    <span class="font-mono text-yellow-400">preToolUse</span> • <span class="font-mono text-yellow-400">postToolUse</span>
    <div class="mt-1"><span class="text-green-400 font-bold">CRITICAL:</span> preToolUse can return <code>permissionDecision: deny</code> to block execution</div>
  </div>
</div>

<div class="p-4 bg-gray-800 rounded-lg border-l-4 border-red-400">
  <div class="flex items-center gap-3 mb-2">
    <span class="text-2xl">⚠️</span>
    <h3 class="text-lg font-bold text-red-300">Error Handling</h3>
  </div>
  <div class="text-xs text-gray-300 ml-11">
    <span class="font-mono text-yellow-400">errorOccurred</span>
    <div class="mt-1">Error logging, alerting, debugging data collection</div>
  </div>
</div>

</div>

<div class="mt-4 p-4 bg-gradient-to-r from-green-600 to-green-800 rounded-xl shadow-lg text-center">
  <div class="text-lg font-bold text-white">preToolUse is the only interception point that prevents actions</div>
  <div class="text-sm text-green-100">All other hooks are observational</div>
</div>

---

# Use Case 1: Security Policy Enforcement

<div class="grid grid-cols-2 gap-6">

<div>
  <h3 class="text-lg font-bold text-red-400 mb-3">The Problem</h3>
  <div class="text-sm text-gray-300 space-y-2">
    <div>• AI agents can execute dangerous commands</div>
    <div>• <code>rm -rf /</code>, <code>DROP TABLE</code>, credential exposure</div>
    <div>• Manual review catches after damage</div>
    <div>• 30+ minutes per incident</div>
  </div>
  
  <div class="mt-4 p-3 bg-red-900/40 rounded-lg">
    <div class="text-xs text-red-400 font-bold mb-1">Impact without hooks:</div>
    <div class="text-xs text-gray-300">Data loss risk • Post-incident cleanup • Trust erosion</div>
  </div>
</div>

<div>
  <h3 class="text-lg font-bold text-green-400 mb-3">Hooks Solution</h3>
  <div class="text-xs text-gray-300">
    <div class="font-mono bg-gray-900 p-3 rounded-lg">
      <div class="text-blue-400"># preToolUse security check</div>
      <div class="mt-2">INPUT=$(cat)</div>
      <div>ARGS=$(echo "$INPUT" | jq -r '.arguments')</div>
      <div class="mt-2 text-red-400"># Block dangerous patterns</div>
      <div>if [[ "$ARGS" =~ rm\ -rf\ / ]]; then</div>
      <div class="ml-4">echo '{"permissionDecision": "deny"}'</div>
      <div>fi</div>
      <div class="mt-2 text-green-400"># Allow safe operations</div>
      <div>echo '{"permissionDecision": "allow"}'</div>
    </div>
  </div>
  
  <div class="mt-4 p-3 bg-green-900/40 rounded-lg">
    <div class="text-xs text-green-400 font-bold mb-1">Impact with hooks:</div>
    <div class="text-xs text-gray-300">Zero dangerous operations • 30-60 min saved per sprint</div>
  </div>
</div>

</div>

---

# Use Case 2: Compliance Audit Trail

<div class="grid grid-cols-2 gap-6">

<div>
  <h3 class="text-lg font-bold text-red-400 mb-3">The Problem</h3>
  <div class="text-sm text-gray-300 space-y-2">
    <div>• SOC 2, HIPAA require complete logs</div>
    <div>• Manual extraction: 20+ min per audit</div>
    <div>• Missed actions outside captured sessions</div>
    <div>• No structured query capability</div>
  </div>
</div>

<div>
  <h3 class="text-lg font-bold text-green-400 mb-3">Hooks Solution</h3>
  <div class="text-xs text-gray-300">
    <div class="font-mono bg-gray-900 p-3 rounded-lg">
      <div class="text-blue-400"># JSON Lines logging</div>
      <div class="mt-2">echo '{"event":"toolUse",</div>
      <div class="ml-6">"timestamp":"$TS",</div>
      <div class="ml-6">"tool":"$TOOL",</div>
      <div class="ml-6">"args":$ARGS}' \</div>
      <div class="ml-2">>> /var/log/copilot-audit.jsonl</div>
      <div class="mt-3 text-green-400"># Query with standard tools</div>
      <div>cat audit.jsonl | jq 'select(.tool == "bash")'</div>
    </div>
  </div>
</div>

</div>

<div class="mt-6 grid grid-cols-3 gap-3 text-xs">
  <div class="p-3 bg-gray-800 rounded-lg">
    <div class="text-green-400 font-bold">100% Coverage</div>
    <div class="text-gray-400">Every action captured</div>
  </div>
  <div class="p-3 bg-gray-800 rounded-lg">
    <div class="text-green-400 font-bold">2 Minutes</div>
    <div class="text-gray-400">Query time (was 20 min)</div>
  </div>
  <div class="p-3 bg-gray-800 rounded-lg">
    <div class="text-green-400 font-bold">Structured Data</div>
    <div class="text-gray-400">CSV export, SQL import</div>
  </div>
</div>

---

# Use Case 3: Quality Gate Integration

<div class="grid grid-cols-2 gap-6">

<div>
  <h3 class="text-lg font-bold text-red-400 mb-3">The Problem</h3>
  <div class="text-sm text-gray-300 space-y-2">
    <div>• Style violations reach CI</div>
    <div>• 25 min per violation (3 rounds)</div>
    <div>• 12 violations/sprint = 5 hours rework</div>
    <div>• Validation happens too late</div>
  </div>
</div>

<div>
  <h3 class="text-lg font-bold text-green-400 mb-3">Hooks Solution</h3>
  <div class="text-xs text-gray-300">
    <div class="font-mono bg-gray-900 p-3 rounded-lg">
      <div class="text-blue-400"># preToolUse lint check</div>
      <div class="mt-2">if [[ "$TOOL" == "file_write" ]]; then</div>
      <div class="ml-4">TEMP=$(mktemp)</div>
      <div class="ml-4">echo "$CONTENT" > "$TEMP"</div>
      <div class="ml-4 mt-2 text-yellow-400"># Run linter</div>
      <div class="ml-4">if ! black --check "$TEMP"; then</div>
      <div class="ml-8 text-red-400">echo '{"permissionDecision": "deny"}'</div>
      <div class="ml-4">fi</div>
      <div>fi</div>
    </div>
  </div>
</div>

</div>

<div class="mt-6 p-5 bg-gradient-to-r from-green-600 to-green-800 rounded-xl shadow-lg text-center">
  <div class="text-xl font-bold text-white">Shift quality gates left: 5 hours rework → 0 hours</div>
  <div class="text-sm text-green-100">Violations blocked at creation, not in CI</div>
</div>

---

# Configuration Deep Dive

<div class="grid grid-cols-2 gap-6">

<div>
  <h3 class="text-lg font-bold text-blue-300 mb-3">Hook Definition</h3>
  <div class="text-xs">
    <div class="font-mono bg-gray-900 p-3 rounded-lg">
      <div class="text-gray-500">// .github/hooks/security.json</div>
      <div class="mt-2">{</div>
      <div class="ml-4">"hooks": [</div>
      <div class="ml-8">{</div>
      <div class="ml-12 text-yellow-400">"hookType": "preToolUse",</div>
      <div class="ml-12 text-yellow-400">"commandPath": ".github/hooks/scripts/check.sh",</div>
      <div class="ml-12 text-yellow-400">"timeoutSec": 5,</div>
      <div class="ml-12">"env": {</div>
      <div class="ml-16">"ENVIRONMENT": "production"</div>
      <div class="ml-12">}</div>
      <div class="ml-8">}</div>
      <div class="ml-4">]</div>
      <div>}</div>
    </div>
  </div>
</div>

<div>
  <h3 class="text-lg font-bold text-blue-300 mb-3">Hook Script</h3>
  <div class="text-xs">
    <div class="font-mono bg-gray-900 p-3 rounded-lg">
      <div class="text-gray-500">#!/bin/bash</div>
      <div class="mt-2 text-blue-400"># Read JSON from stdin</div>
      <div>INPUT=$(cat)</div>
      <div class="mt-2">TOOL=$(echo "$INPUT" | jq -r '.toolName')</div>
      <div>ARGS=$(echo "$INPUT" | jq -r '.arguments')</div>
      <div class="mt-2 text-blue-400"># Validate</div>
      <div>if [[ "$ARGS" =~ dangerous_pattern ]]; then</div>
      <div class="ml-4">echo '{"permissionDecision": "deny",</div>
      <div class="ml-10">"permissionDecisionReason": "Blocked"}'</div>
      <div class="ml-4">exit 0</div>
      <div>fi</div>
      <div class="mt-2 text-green-400"># Allow</div>
      <div>echo '{"permissionDecision": "allow"}'</div>
    </div>
  </div>
</div>

</div>

<div class="mt-4 text-xs text-gray-400">
  <div class="font-bold text-white mb-2">Key Configuration Points:</div>
  <div class="grid grid-cols-3 gap-3">
    <div>• Hooks load from <code>default branch</code></div>
    <div>• Scripts run with <code>user permissions</code></div>
    <div>• Input via <code>stdin</code>, output via <code>stdout</code></div>
  </div>
</div>

---

# Input/Output Contract

<div class="grid grid-cols-2 gap-6">

<div>
  <h3 class="text-lg font-bold text-purple-300 mb-3">Hook Input (stdin)</h3>
  <div class="text-xs">
    <div class="font-mono bg-gray-900 p-3 rounded-lg">
      <div>{</div>
      <div class="ml-4 text-blue-400">"timestamp": "2026-02-04T02:54:09.838Z",</div>
      <div class="ml-4 text-blue-400">"sessionId": "abc123",</div>
      <div class="ml-4 text-blue-400">"workingDirectory": "/path/to/repo",</div>
      <div class="ml-4 text-green-400">"toolName": "bash",</div>
      <div class="ml-4 text-green-400">"arguments": {</div>
      <div class="ml-8">"command": "npm install lodash"</div>
      <div class="ml-4">}</div>
      <div>}</div>
    </div>
  </div>
  
  <div class="mt-3 p-2 bg-purple-900/40 rounded text-xs text-purple-300">
    All hooks receive context as JSON
  </div>
</div>

<div>
  <h3 class="text-lg font-bold text-green-300 mb-3">preToolUse Output (stdout)</h3>
  <div class="text-xs">
    <div class="font-mono bg-gray-900 p-3 rounded-lg">
      <div class="text-red-400"># Deny execution</div>
      <div>{</div>
      <div class="ml-4 text-red-400">"permissionDecision": "deny",</div>
      <div class="ml-4 text-red-400">"permissionDecisionReason": "Blocked by policy"</div>
      <div>}</div>
      <div class="mt-3 text-green-400"># Allow execution</div>
      <div>{</div>
      <div class="ml-4 text-green-400">"permissionDecision": "allow"</div>
      <div>}</div>
      <div class="mt-3 text-gray-500"># No output = allow (default)</div>
    </div>
  </div>
  
  <div class="mt-3 p-2 bg-green-900/40 rounded text-xs text-green-300">
    Only preToolUse controls execution
  </div>
</div>

</div>

---

# Performance Considerations

<div class="flex flex-col gap-4">

<div class="p-4 bg-gray-800 rounded-lg">
  <h3 class="text-lg font-bold text-yellow-400 mb-3">Hooks run synchronously in execution path</h3>
  <div class="grid grid-cols-3 gap-3 text-xs">
    <div class="p-3 bg-green-900/60 rounded-lg border-2 border-green-400">
      <div class="text-green-300 font-bold">Target: < 2 seconds</div>
      <div class="text-gray-300 mt-1">Security checks, logging</div>
    </div>
    <div class="p-3 bg-yellow-900/40 rounded-lg border-2 border-yellow-500">
      <div class="text-yellow-400 font-bold">Maximum: 5 seconds</div>
      <div class="text-gray-300 mt-1">Linting, validation users expect</div>
    </div>
    <div class="p-3 bg-red-900/40 rounded-lg border-2 border-red-500">
      <div class="text-red-400 font-bold">Timeout: 30-120 sec</div>
      <div class="text-gray-300 mt-1">External APIs, complex operations</div>
    </div>
  </div>
</div>

<div class="grid grid-cols-2 gap-4 text-xs">
  <div class="p-3 bg-blue-900/60 rounded-lg">
    <div class="text-blue-300 font-bold mb-2">Optimization Tips</div>
    <div class="text-gray-300 space-y-1">
      <div>• Cache expensive computations</div>
      <div>• Use async logging (append, don't wait)</div>
      <div>• Offload slow work to background jobs</div>
      <div>• Profile with: <code>time ./hook.sh < test.json</code></div>
    </div>
  </div>
  
  <div class="p-3 bg-purple-900/60 rounded-lg">
    <div class="text-purple-300 font-bold mb-2">Timeout Behavior</div>
    <div class="text-gray-300 space-y-1">
      <div>• If hook exceeds timeout: execution continues</div>
      <div>• Design to <span class="text-green-400">fail open</span> for non-critical checks</div>
      <div>• Design to <span class="text-red-400">fail closed</span> for security policies</div>
    </div>
  </div>
</div>

</div>

<div class="mt-4 p-4 bg-gradient-to-r from-yellow-600 to-yellow-800 rounded-xl shadow-lg text-center">
  <div class="text-lg font-bold text-white">Keep hooks fast: Every second adds to user latency</div>
</div>

---

# JSON Lines Logging Pattern

<div class="grid grid-cols-2 gap-6">

<div>
  <h3 class="text-lg font-bold text-blue-300 mb-3">Why JSON Lines (.jsonl)?</h3>
  <div class="text-sm text-gray-300 space-y-3">
    <div class="flex items-start gap-2">
      <span class="text-green-400">✓</span>
      <div>
        <div class="font-bold text-green-300">Append-safe</div>
        <div class="text-xs">No risk of corrupting JSON structure</div>
      </div>
    </div>
    <div class="flex items-start gap-2">
      <span class="text-green-400">✓</span>
      <div>
        <div class="font-bold text-green-300">Streaming-friendly</div>
        <div class="text-xs">Process incrementally without loading entire file</div>
      </div>
    </div>
    <div class="flex items-start gap-2">
      <span class="text-green-400">✓</span>
      <div>
        <div class="font-bold text-green-300">Query-ready</div>
        <div class="text-xs">Works with jq, grep, SQL imports, log platforms</div>
      </div>
    </div>
  </div>
</div>

<div>
  <h3 class="text-lg font-bold text-green-300 mb-3">Example Usage</h3>
  <div class="text-xs">
    <div class="font-mono bg-gray-900 p-3 rounded-lg">
      <div class="text-blue-400"># Write logs (one JSON per line)</div>
      <div class="mt-2">echo '{"event":"sessionStart",...}' >> audit.jsonl</div>
      <div>echo '{"event":"toolUse",...}' >> audit.jsonl</div>
      <div class="mt-3 text-green-400"># Query with standard tools</div>
      <div class="mt-2">cat audit.jsonl | jq 'select(.tool == "bash")'</div>
      <div class="mt-2">grep '"event":"toolUse"' audit.jsonl \</div>
      <div class="ml-4">| jq -r '.tool' | sort | uniq -c</div>
      <div class="mt-3 text-yellow-400"># Export to CSV</div>
      <div class="mt-2">cat audit.jsonl | jq -r '[.timestamp, .tool] | @csv'</div>
    </div>
  </div>
</div>

</div>

---

# Security Best Practices

<div class="grid grid-cols-2 gap-4 text-xs">

<div class="p-3 bg-green-900/60 rounded-lg border-l-4 border-green-400">
  <div class="flex items-center gap-2 mb-2">
    <span class="text-2xl">🔒</span>
    <div class="text-green-300 font-bold">Principle of Least Privilege</div>
  </div>
  <div class="text-gray-300">
    Hooks run with user's permissions. Run with minimal permissions needed for validation
  </div>
</div>

<div class="p-3 bg-green-900/60 rounded-lg border-l-4 border-green-400">
  <div class="flex items-center gap-2 mb-2">
    <span class="text-2xl">✓</span>
    <div class="text-green-300 font-bold">Input Validation</div>
  </div>
  <div class="text-gray-300">
    Always validate JSON input before processing. Never trust user data
  </div>
</div>

<div class="p-3 bg-red-900/40 rounded-lg border-l-4 border-red-500">
  <div class="flex items-center gap-2 mb-2">
    <span class="text-2xl">⚠️</span>
    <div class="text-red-400 font-bold">Never Use eval</div>
  </div>
  <div class="text-gray-300">
    <div class="font-mono bg-gray-900 p-2 rounded mt-1">
      <div class="text-red-400"># BAD - Command injection</div>
      <div>eval $COMMAND</div>
      <div class="mt-2 text-green-400"># GOOD - Safe validation</div>
      <div>if [[ "$CMD" =~ ^[a-zA-Z0-9_-]+$ ]]</div>
    </div>
  </div>
</div>

<div class="p-3 bg-green-900/60 rounded-lg border-l-4 border-green-400">
  <div class="flex items-center gap-2 mb-2">
    <span class="text-2xl">📋</span>
    <div class="text-green-300 font-bold">Audit Hook Changes</div>
  </div>
  <div class="text-gray-300">
    Treat hooks as security-critical code. Use CODEOWNERS, branch protection
  </div>
</div>

</div>

<div class="mt-4 p-4 bg-gradient-to-r from-red-600 to-red-800 rounded-xl shadow-lg text-center">
  <div class="text-lg font-bold text-white">Hooks have full user permissions: Design defensively</div>
</div>

---

# Getting Started: Quick Setup

<div class="grid grid-cols-2 gap-6 text-xs">

<div>
  <h3 class="text-base font-bold text-blue-300 mb-3">1. Create Directory Structure</h3>
  <div class="font-mono bg-gray-900 p-3 rounded-lg">
    <div>mkdir -p .github/hooks/scripts</div>
  </div>
  
  <h3 class="text-base font-bold text-blue-300 mb-3 mt-4">2. Define Hook Config</h3>
  <div class="font-mono bg-gray-900 p-3 rounded-lg">
    <div class="text-gray-500">// .github/hooks/security.json</div>
    <div>{</div>
    <div class="ml-4">"hooks": [{</div>
    <div class="ml-8 text-yellow-400">"hookType": "preToolUse",</div>
    <div class="ml-8 text-yellow-400">"commandPath": ".github/hooks/scripts/check.sh",</div>
    <div class="ml-8 text-yellow-400">"timeoutSec": 5</div>
    <div class="ml-4">}]</div>
    <div>}</div>
  </div>
</div>

<div>
  <h3 class="text-base font-bold text-green-300 mb-3">3. Write Hook Script</h3>
  <div class="font-mono bg-gray-900 p-3 rounded-lg">
    <div class="text-gray-500">#!/bin/bash</div>
    <div>INPUT=$(cat)</div>
    <div>ARGS=$(echo "$INPUT" | jq -r '.arguments')</div>
    <div class="mt-2">if [[ "$ARGS" =~ rm\ -rf\ / ]]; then</div>
    <div class="ml-4">echo '{"permissionDecision": "deny"}'</div>
    <div class="ml-4">exit 0</div>
    <div>fi</div>
    <div class="mt-2">echo '{"permissionDecision": "allow"}'</div>
  </div>
  
  <h3 class="text-base font-bold text-green-300 mb-3 mt-4">4. Test & Commit</h3>
  <div class="font-mono bg-gray-900 p-3 rounded-lg">
    <div>chmod +x .github/hooks/scripts/check.sh</div>
    <div>echo '{"arguments":"rm -rf /"}' | ./check.sh</div>
    <div class="mt-2">git add .github/hooks/</div>
    <div>git commit -m "Add security hooks"</div>
    <div>git push</div>
  </div>
</div>

</div>

---

# Common Hook Patterns

<div class="flex flex-col gap-3 text-xs">

<div class="p-3 bg-gray-800 rounded-lg">
  <div class="text-blue-300 font-bold mb-2">Pattern 1: Allowlist-based Security</div>
  <div class="font-mono bg-gray-900 p-2 rounded-lg">
    <div>ALLOWED_COMMANDS=("git status" "git log" "npm test")</div>
    <div>if [[ " ${ALLOWED_COMMANDS[@]} " =~ " ${COMMAND} " ]]; then</div>
    <div class="ml-4">echo '{"permissionDecision": "allow"}'</div>
    <div>else</div>
    <div class="ml-4">echo '{"permissionDecision": "deny", "permissionDecisionReason": "Not in allowlist"}'</div>
    <div>fi</div>
  </div>
</div>

<div class="p-3 bg-gray-800 rounded-lg">
  <div class="text-blue-300 font-bold mb-2">Pattern 2: Directory-based Restrictions</div>
  <div class="font-mono bg-gray-900 p-2 rounded-lg">
    <div>ALLOWED_DIRS=("/src/" "/docs/" "/tests/")</div>
    <div>for DIR in "${ALLOWED_DIRS[@]}"; do</div>
    <div class="ml-4">if [[ "$FILE_PATH" =~ ^$DIR ]]; then ALLOWED=true; fi</div>
    <div>done</div>
    <div>if [ "$ALLOWED" = false ]; then echo '{"permissionDecision": "deny"}'; fi</div>
  </div>
</div>

<div class="p-3 bg-gray-800 rounded-lg">
  <div class="text-blue-300 font-bold mb-2">Pattern 3: Multi-stage Validation</div>
  <div class="font-mono bg-gray-900 p-2 rounded-lg">
    <div>if ! validate_security "$INPUT"; then echo '{"permissionDecision": "deny"}'; exit 0; fi</div>
    <div>if ! validate_compliance "$INPUT"; then echo '{"permissionDecision": "deny"}'; exit 0; fi</div>
    <div>if ! validate_quality "$INPUT"; then echo '{"permissionDecision": "deny"}'; exit 0; fi</div>
    <div>echo '{"permissionDecision": "allow"}'</div>
  </div>
</div>

</div>

---

# Advanced: External System Integration

<div class="grid grid-cols-2 gap-4 text-xs">

<div class="p-3 bg-gray-800 rounded-lg">
  <div class="text-purple-300 font-bold mb-2">Send to Slack</div>
  <div class="font-mono bg-gray-900 p-2 rounded-lg">
    <div>curl -X POST "$SLACK_WEBHOOK_URL" \</div>
    <div class="ml-4">-H 'Content-Type: application/json' \</div>
    <div class="ml-4">-d '{"text":"Hook event: $EVENT_TYPE"}'</div>
  </div>
</div>

<div class="p-3 bg-gray-800 rounded-lg">
  <div class="text-purple-300 font-bold mb-2">Send to DataDog</div>
  <div class="font-mono bg-gray-900 p-2 rounded-lg">
    <div>curl -X POST "https://api.datadoghq.com/api/v1/events" \</div>
    <div class="ml-4">-H "DD-API-KEY: $DD_API_KEY" \</div>
    <div class="ml-4">-d '{"title":"Copilot Hook","text":"$MESSAGE"}'</div>
  </div>
</div>

<div class="p-3 bg-gray-800 rounded-lg">
  <div class="text-purple-300 font-bold mb-2">Query Database</div>
  <div class="font-mono bg-gray-900 p-2 rounded-lg">
    <div>USER=$(whoami)</div>
    <div>PERMISSION=$(mysql -u "$DB_USER" -p"$DB_PASS" \</div>
    <div class="ml-4">-e "SELECT can_write FROM permissions \</div>
    <div class="ml-8">WHERE user='$USER'" -s)</div>
    <div>if [ "$PERMISSION" != "1" ]; then deny; fi</div>
  </div>
</div>

<div class="p-3 bg-gray-800 rounded-lg">
  <div class="text-purple-300 font-bold mb-2">Call REST API</div>
  <div class="font-mono bg-gray-900 p-2 rounded-lg">
    <div>RESPONSE=$(curl -s "$API_ENDPOINT/validate" \</div>
    <div class="ml-4">-H "Authorization: Bearer $TOKEN" \</div>
    <div class="ml-4">-d "$INPUT")</div>
    <div>ALLOWED=$(echo "$RESPONSE" | jq -r '.allowed')</div>
    <div>if [ "$ALLOWED" != "true" ]; then deny; fi</div>
  </div>
</div>

</div>

<div class="mt-4 text-center text-sm text-gray-400">
  Hooks can integrate with any system accessible via HTTP, database, or command-line
</div>

---

# Multi-Repository Governance

<div class="flex flex-col gap-4">

<div class="p-4 bg-gray-800 rounded-lg">
  <h3 class="text-lg font-bold text-blue-300 mb-3">Organization-wide Policy Enforcement</h3>
  <div class="grid grid-cols-3 gap-3 text-xs">
    <div class="p-3 bg-blue-900/60 rounded-lg">
      <div class="text-blue-300 font-bold mb-1">1. Centralized Hook Repository</div>
      <div class="text-gray-300">
        Create org/copilot-governance repo with approved hooks. Teams reference via submodule
      </div>
    </div>
    <div class="p-3 bg-blue-900/60 rounded-lg">
      <div class="text-blue-300 font-bold mb-1">2. Template Repositories</div>
      <div class="text-gray-300">
        Include hooks in repo templates. New repos automatically get policies
      </div>
    </div>
    <div class="p-3 bg-blue-900/60 rounded-lg">
      <div class="text-blue-300 font-bold mb-1">3. GitHub Actions Enforcement</div>
      <div class="text-gray-300">
        CI job verifies hooks present/unchanged. Block merges if hooks disabled
      </div>
    </div>
  </div>
</div>

<div class="p-4 bg-gray-800 rounded-lg">
  <h3 class="text-lg font-bold text-green-300 mb-2">Example: Fetch Central Hooks</h3>
  <div class="text-xs font-mono bg-gray-900 p-3 rounded-lg">
    <div class="text-gray-500">#!/bin/bash</div>
    <div class="text-blue-400"># In .github/hooks/scripts/fetch-central-hooks.sh</div>
    <div class="mt-2">CENTRAL_REPO="https://github.com/org/copilot-governance"</div>
    <div>HOOKS_URL="$CENTRAL_REPO/raw/main/hooks"</div>
    <div class="mt-2">curl -o .github/hooks/scripts/security-check.sh "$HOOKS_URL/security-check.sh"</div>
    <div>curl -o .github/hooks/scripts/audit-log.sh "$HOOKS_URL/audit-log.sh"</div>
    <div class="mt-2">chmod +x .github/hooks/scripts/*.sh</div>
  </div>
</div>

</div>

---

# When to Use Hooks vs Other Features

<div class="text-xs">

| Need | Solution | Why |
|------|----------|-----|
| **Block operations before execution** | Hooks (`preToolUse`) | Only control point that can deny |
| **Audit trail for compliance** | Hooks (all types) | Captures every action with structured logging |
| **Teach domain knowledge** | Agent Skills | Knowledge transfer, not governance |
| **Role-based behavior** | Custom Agents | Persona configuration, not policy enforcement |
| **External system access** | MCP Servers | Data/API integration, not validation |
| **Quality gates (lint/format)** | Hooks (`preToolUse`) | Enforce before commit, not in CI |
| **Cost tracking** | Hooks (`postToolUse`) | Observe usage patterns |
| **Incident alerting** | Hooks (all types) | Real-time notification on suspicious patterns |

</div>

<div class="mt-6 p-5 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-lg text-center">
  <div class="text-xl font-bold text-white">Use hooks when you need to validate, control, audit, or enforce policies at runtime</div>
</div>

---

# Debugging & Troubleshooting

<div class="grid grid-cols-2 gap-4 text-xs">

<div>
  <h3 class="text-base font-bold text-yellow-300 mb-3">Enable Verbose Logging</h3>
  <div class="font-mono bg-gray-900 p-3 rounded-lg">
    <div class="text-gray-500">#!/bin/bash</div>
    <div class="text-blue-400"># Add at top of hook scripts</div>
    <div>set -x  # Print commands as they execute</div>
    <div>exec 2>> /tmp/hook-debug.log</div>
    <div class="mt-2">INPUT=$(cat)</div>
    <div>echo "DEBUG: Received: $INPUT" >&2</div>
  </div>
  
  <h3 class="text-base font-bold text-yellow-300 mb-3 mt-4">Test Locally</h3>
  <div class="font-mono bg-gray-900 p-3 rounded-lg">
    <div>cat > test-input.json <<EOF</div>
    <div>{"toolName": "bash", "arguments": "npm install"}</div>
    <div>EOF</div>
    <div class="mt-2">cat test-input.json | ./hook.sh</div>
    <div>echo $?  # Check exit code</div>
  </div>
</div>

<div>
  <h3 class="text-base font-bold text-red-300 mb-3">Common Issues</h3>
  <div class="space-y-3">
    <div class="p-2 bg-red-900/40 rounded-lg">
      <div class="text-red-400 font-bold">Hook not executing</div>
      <div class="text-gray-300">Check file permissions (<code>chmod +x</code>), verify in default branch</div>
    </div>
    <div class="p-2 bg-red-900/40 rounded-lg">
      <div class="text-red-400 font-bold">Timeout errors</div>
      <div class="text-gray-300">Reduce <code>timeoutSec</code> or optimize script performance</div>
    </div>
    <div class="p-2 bg-red-900/40 rounded-lg">
      <div class="text-red-400 font-bold">JSON parsing errors</div>
      <div class="text-gray-300">Validate output with <code>jq</code> before returning</div>
    </div>
    <div class="p-2 bg-red-900/40 rounded-lg">
      <div class="text-red-400 font-bold">Permission denied</div>
      <div class="text-gray-300">Hooks run with user permissions. Check file/directory access</div>
    </div>
  </div>
</div>

</div>

---

# FAQ Highlights

<div class="grid grid-cols-2 gap-4 text-xs">

<div class="p-3 bg-gray-800 rounded-lg">
  <div class="text-blue-300 font-bold mb-1">Q: Do hooks work in VS Code, CLI, Web?</div>
  <div class="text-gray-300">A: Yes, hooks are repository-based and work across all Copilot interfaces</div>
</div>

<div class="p-3 bg-gray-800 rounded-lg">
  <div class="text-blue-300 font-bold mb-1">Q: What happens if a hook times out?</div>
  <div class="text-gray-300">A: For preToolUse, operation is <span class="text-green-400">allowed</span> (fail-open). Use shorter timeouts for security checks</div>
</div>

<div class="p-3 bg-gray-800 rounded-lg">
  <div class="text-blue-300 font-bold mb-1">Q: Can hooks access network resources?</div>
  <div class="text-gray-300">A: Yes, hooks can make HTTP requests, query databases, etc. Be mindful of timeouts</div>
</div>

<div class="p-3 bg-gray-800 rounded-lg">
  <div class="text-blue-300 font-bold mb-1">Q: Do hooks increase latency?</div>
  <div class="text-gray-300">A: Yes, by hook execution time. Keep hooks fast (<2s). Use async logging</div>
</div>

<div class="p-3 bg-gray-800 rounded-lg">
  <div class="text-blue-300 font-bold mb-1">Q: Can hooks modify agent behavior?</div>
  <div class="text-gray-300">A: Currently only approve/deny via preToolUse. Future: modify tool arguments</div>
</div>

<div class="p-3 bg-gray-800 rounded-lg">
  <div class="text-blue-300 font-bold mb-1">Q: How to roll out hooks gradually?</div>
  <div class="text-gray-300">A: Start with audit/logging hooks. Analyze logs. Then add preToolUse controls</div>
</div>

</div>

---

# Resources & Documentation

<div class="grid grid-cols-2 gap-6">

<div>
  <h3 class="text-lg font-bold text-blue-300 mb-3">📖 Official Resources</h3>
  <div class="text-sm text-gray-300 space-y-2">
    <div class="p-2 bg-gray-800 rounded-lg">
      <a href="https://docs.github.com/en/copilot/concepts/agents/coding-agent/about-hooks" class="text-blue-400 hover:text-blue-300">About hooks</a>
      <div class="text-xs text-gray-400">Conceptual overview and types</div>
    </div>
    <div class="p-2 bg-gray-800 rounded-lg">
      <a href="https://docs.github.com/en/copilot/reference/hooks-configuration" class="text-blue-400 hover:text-blue-300">Hooks configuration reference</a>
      <div class="text-xs text-gray-400">Complete specification</div>
    </div>
    <div class="p-2 bg-gray-800 rounded-lg">
      <a href="https://docs.github.com/en/copilot/how-tos/use-copilot-agents/coding-agent/use-hooks" class="text-blue-400 hover:text-blue-300">Using hooks guide</a>
      <div class="text-xs text-gray-400">Step-by-step setup</div>
    </div>
  </div>
</div>

<div>
  <h3 class="text-lg font-bold text-green-300 mb-3">🔗 Related Topics</h3>
  <div class="text-sm text-gray-300 space-y-2">
    <div class="flex items-center gap-2">
      <span>🖥️</span>
      <div><span class="font-bold">GitHub Copilot CLI</span> — Respects repository hooks</div>
    </div>
    <div class="flex items-center gap-2">
      <span>🤖</span>
      <div><span class="font-bold">Custom Agents</span> — Hooks apply to all agents</div>
    </div>
    <div class="flex items-center gap-2">
      <span>🎯</span>
      <div><span class="font-bold">Agent Skills</span> — Hooks govern skill usage</div>
    </div>
    <div class="flex items-center gap-2">
      <span>🔌</span>
      <div><span class="font-bold">MCP Servers</span> — Hooks validate MCP operations</div>
    </div>
  </div>
</div>

</div>

---

# The Fundamental Shift

<div class="flex flex-col items-center justify-center h-full gap-8">

<div class="text-4xl text-center text-gray-300 leading-relaxed">
  From <span class="text-red-400 font-bold">trusting AI blindly</span><br/>
  to <span class="text-green-400 font-bold">programming AI governance</span>
</div>

<div class="grid grid-cols-3 gap-4 text-xs mt-8">
  <div class="p-4 bg-blue-900/60 rounded-lg border-2 border-blue-400 text-center">
    <div class="text-2xl mb-2">🔒</div>
    <div class="text-blue-300 font-bold">Security Policies</div>
    <div class="text-gray-300">Catch issues before execution</div>
  </div>
  <div class="p-4 bg-blue-900/60 rounded-lg border-2 border-blue-400 text-center">
    <div class="text-2xl mb-2">📋</div>
    <div class="text-blue-300 font-bold">Audit Trails</div>
    <div class="text-gray-300">Compliance without overhead</div>
  </div>
  <div class="p-4 bg-blue-900/60 rounded-lg border-2 border-blue-400 text-center">
    <div class="text-2xl mb-2">✓</div>
    <div class="text-blue-300 font-bold">Quality Gates</div>
    <div class="text-gray-300">Enforce at point of creation</div>
  </div>
</div>

<div class="mt-8 p-6 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-lg text-center max-w-3xl">
  <div class="text-2xl font-bold text-white mb-2">Hooks aren't about distrust</div>
  <div class="text-lg text-blue-100">They enable AI agents to operate at scale in production environments where governance isn't optional</div>
</div>

</div>

---

# Recommended Adoption Path

<div class="flex flex-col gap-4">

<div class="p-4 bg-gray-800 rounded-lg border-l-4 border-blue-400">
  <div class="flex items-center gap-3 mb-2">
    <span class="text-3xl">1️⃣</span>
    <h3 class="text-xl font-bold text-blue-300">Start with Audit Hooks</h3>
  </div>
  <div class="text-sm text-gray-300 ml-12">
    Deploy <code>sessionStart</code>, <code>userPromptSubmitted</code>, <code>postToolUse</code> hooks to understand what agents actually do. Analyze logs for patterns.
  </div>
</div>

<div class="p-4 bg-gray-800 rounded-lg border-l-4 border-yellow-400">
  <div class="flex items-center gap-3 mb-2">
    <span class="text-3xl">2️⃣</span>
    <h3 class="text-xl font-bold text-yellow-300">Add Security Controls</h3>
  </div>
  <div class="text-sm text-gray-300 ml-12">
    Implement <code>preToolUse</code> hooks for high-risk operations. Block dangerous commands, restrict file access, enforce directory boundaries.
  </div>
</div>

<div class="p-4 bg-gray-800 rounded-lg border-l-4 border-green-400">
  <div class="flex items-center gap-3 mb-2">
    <span class="text-3xl">3️⃣</span>
    <h3 class="text-xl font-bold text-green-300">Shift Quality Gates Left</h3>
  </div>
  <div class="text-sm text-gray-300 ml-12">
    Move linting, formatting, test validation from CI to point of creation. Catch issues before they're committed.
  </div>
</div>

</div>

<div class="mt-6 text-center text-lg text-blue-300 italic">
  Build governance that matches your organization's unique risk profile
</div>

---
layout: end
---

# What boundaries will you define?

<div class="text-center text-gray-400 mt-8">
  GitHub Copilot Hooks: Programmable AI Governance
</div>
