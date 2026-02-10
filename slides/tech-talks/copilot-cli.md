---
theme: default
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Copilot CLI: Terminal-Native AI for DevOps Automation
  CopilotTraining Tech Talk
drawings:
  persist: false
transition: slide-left
title: Copilot CLI - Terminal AI
module: tech-talks/copilot-cli
mdc: true
status: active
updated: 2026-02-10
---

<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
  <!-- Gradient background -->
  <div class="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-teal-900/10 to-cyan-900/20"></div>

  <!-- Glowing orb -->
  <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-cyan-500/20 rounded-full blur-3xl"></div>

  <!-- Logo with glow -->
  <div class="relative z-10">
    <div class="absolute inset-0 blur-2xl opacity-50">
      <img src="./sdp-logo.png" class="w-64" alt="" />
    </div>
    <img src="./sdp-logo.png" class="w-64 relative" alt="SDP Logo" />
  </div>

  <!-- Gradient text title -->
  <h1 class="!text-5xl !font-bold !mt-8 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent relative z-10">
    Copilot CLI
  </h1>

  <!-- Pill subtitle -->
  <div class="mt-4 relative z-10">
    <span class="px-6 py-2 bg-gradient-to-r from-emerald-600/80 to-teal-600/80 rounded-full text-white text-xl font-medium shadow-lg shadow-emerald-500/25">
      Terminal-Native AI for DevOps Automation
    </span>
  </div>

  <!-- Tagline -->
  <div class="mt-8 text-lg opacity-70 relative z-10">
    ⏰ <strong>45 minutes</strong> • DevOps Engineers • Infrastructure Teams • CLI Power Users
  </div>

  <!-- Decorative line -->
  <div class="mt-6 w-32 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent rounded-full relative z-10"></div>
</div>

---

# The Central Question

<div class="h-full flex items-center justify-center">
  <div class="max-w-4xl">
    <div class="text-6xl text-center mb-8">🤔</div>
    <div class="text-4xl font-bold text-center bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-6">
      "How do I get Copilot assistance without leaving the terminal?"
    </div>
    <div class="text-xl text-center opacity-80 mt-8">
      Infrastructure lives in terminals — context-switching to IDE/web breaks flow
    </div>
  </div>
</div>

---
layout: center
---

# 📖 Table of Contents

<div class="grid grid-cols-2 gap-6 mt-8">
  <div @click="$nav.go(8)" class="cursor-pointer p-6 bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 rounded-xl border border-emerald-500/30 hover:border-emerald-400/60 transition-all hover:scale-105">
    <div class="text-3xl mb-2">🎯</div>
    <div class="font-semibold text-lg">Plan Mode & Steering</div>
    <div class="text-sm opacity-70 mt-2">Collaborative planning before implementation</div>
  </div>

  <div @click="$nav.go(11)" class="cursor-pointer p-6 bg-gradient-to-br from-teal-500/10 to-teal-600/5 rounded-xl border border-teal-500/30 hover:border-teal-400/60 transition-all hover:scale-105">
    <div class="text-3xl mb-2">⚙️</div>
    <div class="font-semibold text-lg">Operating Modes</div>
    <div class="text-sm opacity-70 mt-2">Interactive vs programmatic vs cloud delegation</div>
  </div>

  <div @click="$nav.go(14)" class="cursor-pointer p-6 bg-gradient-to-br from-cyan-500/10 to-cyan-600/5 rounded-xl border border-cyan-500/30 hover:border-cyan-400/60 transition-all hover:scale-105">
    <div class="text-3xl mb-2">🧠</div>
    <div class="font-semibold text-lg">Context Management</div>
    <div class="text-sm opacity-70 mt-2">Infinite sessions with repository memory</div>
  </div>

  <div @click="$nav.go(16)" class="cursor-pointer p-6 bg-gradient-to-br from-blue-500/10 to-blue-600/5 rounded-xl border border-blue-500/30 hover:border-blue-400/60 transition-all hover:scale-105">
    <div class="text-3xl mb-2">🤖</div>
    <div class="font-semibold text-lg">Built-in Agents</div>
    <div class="text-sm opacity-70 mt-2">Explore, Task, Plan, Code-review</div>
  </div>
</div>

---

# The Problem

<div class="grid grid-cols-2 gap-6 mt-6">

<div>

### Terminal-Centric Workflows

<div class="text-sm space-y-3 mt-4">

**Infrastructure lives in terminals**
- DevOps happens at command line
- Not in IDEs or web interfaces

**Manual investigation overhead**
- Docker debugging: 45+ minutes
- Log analysis: repetitive, error-prone
- Traditional tools can't adapt to context

</div>

</div>

<div>

### Context Switching Breaks Flow

<div class="text-sm space-y-3 mt-4">

**The dilemma engineers face:**
- Continue manual work (slow, tedious)
- Switch to IDE/web for AI help (loses context)

**Cost of context switching:**
- 5-10 minutes per switch
- Re-explain problem each time
- Disrupts concentration and flow

</div>

</div>

</div>

<div class="mt-6 p-5 bg-gradient-to-r from-red-600/40 to-orange-600/40 rounded-xl border border-red-500/50">
<div class="font-bold text-center">Modern infrastructure needs conversational AI that lives in the terminal</div>
</div>

---

# The Solution: GitHub Copilot CLI

<div class="text-sm space-y-4 mt-6">

**Conversational AI directly in terminal workflows**

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 bg-emerald-900/40 rounded-lg border border-emerald-500/50">
<div class="text-2xl mb-2">💬</div>
<div class="font-semibold mb-2">Interactive Mode</div>
<div class="text-xs opacity-90">
Terminal-native conversations with persistent context — perfect for "figure this out" scenarios
</div>
</div>

<div class="p-4 bg-teal-900/40 rounded-lg border border-teal-500/50">
<div class="text-2xl mb-2">🤝</div>
<div class="font-semibold mb-2">Plan Mode</div>
<div class="text-xs opacity-90">
Collaborative planning with clarifying questions before code — reduces iterations from 8 to 2
</div>
</div>

<div class="p-4 bg-cyan-900/40 rounded-lg border border-cyan-500/50">
<div class="text-2xl mb-2">🔄</div>
<div class="font-semibold mb-2">Programmatic Mode</div>
<div class="text-xs opacity-90">
Single-command execution for CI/CD pipelines — headless automation
</div>
</div>

<div class="p-4 bg-blue-900/40 rounded-lg border border-blue-500/50">
<div class="text-2xl mb-2">☁️</div>
<div class="font-semibold mb-2">Cloud Delegation</div>
<div class="text-xs opacity-90">
Background execution with `&` prefix — terminal stays free while agents work
</div>
</div>

</div>

</div>

---

# Key Capabilities

<div class="grid grid-cols-2 gap-6 mt-6 text-sm">

<div class="space-y-4">

<div class="flex gap-3">
<div class="text-2xl">🎯</div>
<div>
<div class="font-semibold">Plan Mode</div>
<div class="text-xs opacity-80">Catch misunderstandings early, reduce iteration cycles</div>
</div>
</div>

<div class="flex gap-3">
<div class="text-2xl">🤖</div>
<div>
<div class="font-semibold">Built-in Agents</div>
<div class="text-xs opacity-80">Explore, Task, Plan, Code-review automatically handle common patterns</div>
</div>
</div>

<div class="flex gap-3">
<div class="text-2xl">🧠</div>
<div>
<div class="font-semibold">Repository Memory</div>
<div class="text-xs opacity-80">AI remembers team conventions across sessions</div>
</div>
</div>

</div>

<div class="space-y-4">

<div class="flex gap-3">
<div class="text-2xl">☁️</div>
<div>
<div class="font-semibold">Cloud Delegation</div>
<div class="text-xs opacity-80">Background execution with `&` prefix frees terminal</div>
</div>
</div>

<div class="flex gap-3">
<div class="text-2xl">♾️</div>
<div>
<div class="font-semibold">Auto-Compaction</div>
<div class="text-xs opacity-80">95% token limit triggers smart context compression</div>
</div>
</div>

<div class="flex gap-3">
<div class="text-2xl">🔄</div>
<div>
<div class="font-semibold">Programmatic Mode</div>
<div class="text-xs opacity-80">Structured output for CI/CD automation</div>
</div>
</div>

</div>

</div>

---

# Latest CLI Updates

<div class="grid grid-cols-3 gap-4 mt-6 text-xs">

<div class="p-4 bg-emerald-900/40 rounded-lg border border-emerald-500/50">
<div class="text-2xl mb-2">🧠</div>
<div class="font-bold mb-2">Configurable Reasoning Models</div>
<div class="opacity-90">GPT-5.2-Codex with effort tiers (low → extra high) and Ctrl+T reasoning visibility</div>
</div>

<div class="p-4 bg-teal-900/40 rounded-lg border border-teal-500/50">
<div class="text-2xl mb-2">⚡</div>
<div class="font-bold mb-2">Performance & UX Upgrades</div>
<div class="opacity-90">Faster, more concise output plus improved diffs/timelines and Windows/PowerShell polish</div>
</div>

<div class="p-4 bg-cyan-900/40 rounded-lg border border-cyan-500/50">
<div class="text-2xl mb-2">🧩</div>
<div class="font-bold mb-2">MCP Registry Integration</div>
<div class="opacity-90">Discover tools/agents via GitHub MCP Registry with org-level governance controls</div>
</div>

</div>

---
layout: center
name: plan-mode
---

<!-- 🎬 MAJOR SECTION: Plan Mode & Steering -->

<div class="text-center">
  <div class="text-6xl mb-6">🎯</div>
  <h1 class="text-5xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
    Plan Mode
  </h1>
  <div class="text-2xl mt-4 opacity-80">
    Collaborative Planning Before Implementation
  </div>
</div>

---

# Plan Mode: The Fundamental Shift

<div class="mt-8 space-y-6 text-sm">

<div class="p-5 bg-red-900/40 rounded-lg border-2 border-red-500/50">
<div class="text-xl font-bold mb-3">❌ Traditional Workflow</div>
<div class="flex items-center gap-3">
<div>Request</div>
<div class="text-2xl">→</div>
<div>AI generates solution</div>
<div class="text-2xl">→</div>
<div>Review and fix</div>
<div class="text-2xl">→</div>
<div>Repeat (8 attempts average)</div>
</div>
</div>

<div class="p-5 bg-emerald-900/40 rounded-lg border-2 border-emerald-500/50">
<div class="text-xl font-bold mb-3">✅ Plan Mode Workflow</div>
<div class="flex items-center gap-3">
<div>Request</div>
<div class="text-2xl">→</div>
<div>AI asks questions</div>
<div class="text-2xl">→</div>
<div>Collaborate on plan</div>
<div class="text-2xl">→</div>
<div>Generate (2 attempts average)</div>
</div>
</div>

<div class="p-5 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl text-center">
<div class="text-lg font-bold">Press Shift+Tab to toggle Plan Mode • Reduces debugging cycles by 75%</div>
</div>

</div>

---

# Real-Time Steering

<div class="grid grid-cols-2 gap-6 mt-6 text-sm">

<div class="p-5 bg-blue-900/40 rounded-lg border border-blue-500/50">
<div class="text-2xl mb-3">💬</div>
<div class="font-bold mb-3">Enqueue Messages</div>
<div class="space-y-2">
<div class="opacity-90">Send follow-up instructions mid-response:</div>
<div class="font-mono text-xs bg-black/40 p-3 rounded">
> "Also check if Redis is running"<br/>
> "Focus on auth errors first"
</div>
<div class="text-xs opacity-70 mt-2">Steer direction while Copilot is thinking</div>
</div>
</div>

<div class="p-5 bg-purple-900/40 rounded-lg border border-purple-500/50">
<div class="text-2xl mb-3">⏹️</div>
<div class="font-bold mb-3">Inline Feedback on Rejection</div>
<div class="space-y-2">
<div class="opacity-90">Reject with explanation:</div>
<div class="font-mono text-xs bg-black/40 p-3 rounded">
[Esc] "Don't delete tmp/ — it has<br/>
cached artifacts we need"
</div>
<div class="text-xs opacity-70 mt-2">Copilot adapts without stopping</div>
</div>
</div>

</div>

<div class="mt-6 p-4 bg-gradient-to-r from-blue-600/40 to-purple-600/40 rounded-lg">
<div class="font-semibold">Advanced: Ctrl+T toggles reasoning visibility to see AI's thought process</div>
</div>

---

# Example: Docker Debugging with Plan Mode

<div class="text-xs space-y-3 mt-4">

```bash
$ copilot
> "Debug why the backend container won't start"

🤔 Copilot (Plan Mode):
Before I start, a few questions:
1. Should I check docker-compose config, container logs, or both?
2. Do you want environment variable analysis?
3. Any recent changes to services or network?

> "Start with logs, then check config if needed"

🤔 Copilot: Here's my plan:
1. Retrieve container logs for backend service
2. Analyze error patterns and stack traces
3. If logs suggest config issue, inspect docker-compose.yml

Proceed? (y/n)
```

</div>

<div class="mt-4 p-4 bg-emerald-900/40 rounded-lg border border-emerald-500/50">
<div class="font-bold">✅ Outcome: 45 minutes → 8 minutes (83% reduction)</div>
<div class="text-sm mt-2">Root cause: Misconfigured port binding found in 2 targeted checks vs 8 trial-and-error attempts</div>
</div>

---
layout: center
name: operating-modes
---

<!-- 🎬 MAJOR SECTION: Operating Modes -->

<div class="text-center">
  <div class="text-6xl mb-6">⚙️</div>
  <h1 class="text-5xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
    Operating Modes
  </h1>
  <div class="text-2xl mt-4 opacity-80">
    Interactive • Programmatic • Cloud Delegation
  </div>
</div>

---

# Three Operating Modes

<div class="grid grid-cols-3 gap-4 mt-6 text-xs">

<div class="p-4 bg-emerald-900/40 rounded-lg border border-emerald-500/50">
<div class="text-3xl mb-2">💬</div>
<div class="font-bold text-lg mb-2">Interactive</div>
<div class="font-mono text-xs mb-2">$ copilot</div>
<div class="space-y-2 opacity-90">
<div>✓ Conversational sessions</div>
<div>✓ Persistent context</div>
<div>✓ Plan Mode support</div>
<div>✓ Multi-turn debugging</div>
</div>
<div class="mt-3 pt-3 border-t border-emerald-500/30 text-xs font-semibold">
Best for: Complex debugging, unknown root causes
</div>
</div>

<div class="p-4 bg-teal-900/40 rounded-lg border border-teal-500/50">
<div class="text-3xl mb-2">🔄</div>
<div class="font-bold text-lg mb-2">Programmatic</div>
<div class="font-mono text-xs mb-2">$ copilot -p</div>
<div class="space-y-2 opacity-90">
<div>✓ Single-command</div>
<div>✓ Structured output</div>
<div>✓ Headless operation</div>
<div>✓ CI/CD ready</div>
</div>
<div class="mt-3 pt-3 border-t border-teal-500/30 text-xs font-semibold">
Best for: Automation, pipelines, scripts
</div>
</div>

<div class="p-4 bg-cyan-900/40 rounded-lg border border-cyan-500/50">
<div class="text-3xl mb-2">☁️</div>
<div class="font-bold text-lg mb-2">Cloud Delegation</div>
<div class="font-mono text-xs mb-2">$ copilot<br/>> "&task"</div>
<div class="space-y-2 opacity-90">
<div>✓ Background execution</div>
<div>✓ Terminal stays free</div>
<div>✓ GitHub cloud agents</div>
<div>✓ PR created on completion</div>
</div>
<div class="mt-3 pt-3 border-t border-cyan-500/30 text-xs font-semibold">
Best for: Large refactors, security audits
</div>
</div>

</div>

---

# CI/CD Build Failure Automation

<div class="text-xs mt-4">

```yaml
# .github/workflows/build.yml
name: Build and Analyze
on: [push, pull_request]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Build application
        run: npm run build

      - name: Analyze failure with Copilot CLI
        if: failure()
        env:
          GITHUB_TOKEN: ${{ secrets.COPILOT_GITHUB_TOKEN }}
        run: |
          npm install -g @github/copilot
          copilot -p "Analyze build failure. Check commits, deps, error patterns." \
            --allow-tool 'shell(gh)' --allow-tool 'shell(git)' > analysis.txt

      - name: Post analysis as comment
        if: failure()
        run: gh pr comment ${{ github.event.pull_request.number }} --body-file analysis.txt
```

</div>

<div class="mt-4 p-4 bg-emerald-900/40 rounded-lg border border-emerald-500/50">
<div class="font-bold">Impact: 25 minutes → 5 minutes investigation time</div>
<div class="text-sm mt-1">Zero human intervention for known failure types • Pattern recognition across historical failures</div>
</div>

---
layout: center
name: context-management
---

<!-- 🎬 MAJOR SECTION: Context Management -->

<div class="text-center">
  <div class="text-6xl mb-6">🧠</div>
  <h1 class="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
    Context Management
  </h1>
  <div class="text-2xl mt-4 opacity-80">
    Infinite Sessions • Repository Memory
  </div>
</div>

---

# Automatic Context Management

<div class="grid grid-cols-2 gap-6 mt-6 text-sm">

<div>

### ♾️ Infinite Sessions

<div class="space-y-3 mt-4">

**The problem:**
- Traditional AI: 12-20 exchanges then loses context

**The solution:**
- Auto-compaction at 95% token limit
- Important context persists
- Redundant details pruned
- No interruptions

**Monitoring tools:**
```bash
/context   # Token usage breakdown
/usage     # Session statistics
```

</div>

</div>

<div>

### 🧠 Repository Memory

<div class="space-y-3 mt-4">

**What gets remembered:**
- Coding standards and conventions
- Project architecture patterns
- Preferred debugging approaches
- Configuration patterns

**Cross-session learning:**
```bash
Session 1 (Monday):
> [Explain docker-compose networking]

Session 2 (Wednesday):
> "Service A can't reach Service B"
✅ Copilot remembers network setup
```

</div>

</div>

</div>

---
layout: center
name: built-in-agents
---

<!-- 🎬 MAJOR SECTION: Built-in Agents -->

<div class="text-center">
  <div class="text-6xl mb-6">🤖</div>
  <h1 class="text-5xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
    Built-in Agents
  </h1>
  <div class="text-2xl mt-4 opacity-80">
    Automatic Expert Delegation
  </div>
</div>

---

# Four Specialized Agents

<div class="grid grid-cols-2 gap-4 mt-6 text-xs">

<div class="p-4 bg-blue-900/40 rounded-lg border border-blue-500/50">
<div class="text-2xl mb-2">🔍</div>
<div class="font-bold mb-2">Explore Agent</div>
<div class="opacity-90 mb-3">Fast codebase analysis</div>
<div class="space-y-1 text-xs">
<div>• Returns concise answers (&lt;300 words)</div>
<div>• Safe parallel execution</div>
<div>• Doesn't pollute main context</div>
</div>
<div class="font-mono text-xs mt-3 bg-black/40 p-2 rounded">
> "How does auth work?"
</div>
</div>

<div class="p-4 bg-indigo-900/40 rounded-lg border border-indigo-500/50">
<div class="text-2xl mb-2">⚡</div>
<div class="font-bold mb-2">Task Agent</div>
<div class="opacity-90 mb-3">Smart output filtering</div>
<div class="space-y-1 text-xs">
<div>• Brief summary on success</div>
<div>• Full output on failure</div>
<div>• Reduces conversation clutter</div>
</div>
<div class="font-mono text-xs mt-3 bg-black/40 p-2 rounded">
> "Run tests, tell me if failed"
</div>
</div>

<div class="p-4 bg-purple-900/40 rounded-lg border border-purple-500/50">
<div class="text-2xl mb-2">📋</div>
<div class="font-bold mb-2">Plan Agent</div>
<div class="opacity-90 mb-3">Multi-step strategies</div>
<div class="space-y-1 text-xs">
<div>• Analyzes dependencies</div>
<div>• Creates structured plans</div>
<div>• Surfaces risks upfront</div>
</div>
<div class="font-mono text-xs mt-3 bg-black/40 p-2 rounded">
> "Plan API versioning refactor"
</div>
</div>

<div class="p-4 bg-pink-900/40 rounded-lg border border-pink-500/50">
<div class="text-2xl mb-2">👀</div>
<div class="font-bold mb-2">Code-Review Agent</div>
<div class="opacity-90 mb-3">High signal-to-noise</div>
<div class="space-y-1 text-xs">
<div>• Only bugs and security issues</div>
<div>• Never style/formatting</div>
<div>• Focuses human attention</div>
</div>
<div class="font-mono text-xs mt-3 bg-black/40 p-2 rounded">
/review
</div>
</div>

</div>

<div class="mt-4 text-center text-sm">
<div class="font-semibold">✨ Copilot automatically routes tasks to the right agent — no explicit calls needed</div>
</div>

---

# Real-World Use Cases

<div class="grid grid-cols-2 gap-5 mt-6 text-xs">

<div class="p-4 bg-emerald-900/40 rounded-lg border border-emerald-500/50">
<div class="font-bold text-sm mb-2">🐳 Docker Debugging</div>
<div class="opacity-90 mb-2">Container won't start investigation</div>
<div class="space-y-1">
<div>⏱️ <strong>45 min → 8 min</strong> (83% reduction)</div>
<div>🎯 <strong>8 attempts → 2 attempts</strong></div>
<div>✅ Automated log analysis with reasoning</div>
</div>
</div>

<div class="p-4 bg-teal-900/40 rounded-lg border border-teal-500/50">
<div class="font-bold text-sm mb-2">🔄 CI/CD Build Failures</div>
<div class="opacity-90 mb-2">Programmatic failure analysis</div>
<div class="space-y-1">
<div>⏱️ <strong>25 min → 5 min</strong> investigation</div>
<div>🎯 <strong>12 steps → 3 automated steps</strong></div>
<div>✅ Pattern recognition across failures</div>
</div>
</div>

<div class="p-4 bg-cyan-900/40 rounded-lg border border-cyan-500/50">
<div class="font-bold text-sm mb-2">📚 Infrastructure Docs</div>
<div class="opacity-90 mb-2">Auto-generated from IaC</div>
<div class="space-y-1">
<div>⏱️ <strong>3 days → 30 min</strong> documentation</div>
<div>🎯 <strong>Automated diagram generation</strong></div>
<div>✅ Always-current architecture docs</div>
</div>
</div>

<div class="p-4 bg-blue-900/40 rounded-lg border border-blue-500/50">
<div class="font-bold text-sm mb-2">🧠 Team Onboarding</div>
<div class="opacity-90 mb-2">Repository memory accumulation</div>
<div class="space-y-1">
<div>⏱️ <strong>2 weeks → 3 days</strong> productivity</div>
<div>🎯 <strong>5-6 explanations → 1 explanation</strong></div>
<div>✅ Institutional knowledge persists</div>
</div>
</div>

</div>

---

# Mental Model Shift

<div class="grid grid-cols-2 gap-6 mt-6 text-sm">

<div class="space-y-4">

### ✅ Move Toward

<div class="space-y-2 text-xs">
<div class="flex gap-2">
<span>✓</span>
<div><strong>Collaborative Planning:</strong> Use Plan Mode before coding → 75% fewer iterations</div>
</div>
<div class="flex gap-2">
<span>✓</span>
<div><strong>Terminal as Collaboration Space:</strong> Eliminate context-switching overhead</div>
</div>
<div class="flex gap-2">
<span>✓</span>
<div><strong>Programmatic AI:</strong> copilot -p in CI/CD for intelligent analysis</div>
</div>
<div class="flex gap-2">
<span>✓</span>
<div><strong>Cloud Delegation:</strong> Background execution with & prefix</div>
</div>
</div>

</div>

<div class="space-y-4">

### 🛑 Move Against

<div class="space-y-2 text-xs">
<div class="flex gap-2">
<span>✗</span>
<div><strong>Interactive Mode in CI/CD:</strong> Use copilot -p instead</div>
</div>
<div class="flex gap-2">
<span>✗</span>
<div><strong>Over-Approving Permissions:</strong> Avoid --yolo in production</div>
</div>
<div class="flex gap-2">
<span>✗</span>
<div><strong>Ignoring Repository Memory:</strong> Leverage learned conventions</div>
</div>
<div class="flex gap-2">
<span>✗</span>
<div><strong>Context-Switching for AI Help:</strong> Stay in terminal workflow</div>
</div>
</div>

</div>

</div>

---

# When to Use Copilot CLI

<div class="mt-6 text-sm">

<div class="grid grid-cols-2 gap-6">

<div class="space-y-3">

### ✅ Use This Pattern When

<div class="text-xs space-y-2">
<div>✓ DevOps work happens in terminals</div>
<div>✓ Debugging complex Docker/networking issues</div>
<div>✓ Automating CI/CD build failure analysis</div>
<div>✓ Need terminal-native AI assistance</div>
<div>✓ Want AI to remember team conventions</div>
</div>

</div>

<div class="space-y-3">

### ❌ Don't Use When

<div class="text-xs space-y-2">
<div>✗ Primary workflow is IDE code editing</div>
<div>✗ Need cross-repository analysis</div>
<div>✗ Want graphical debugging with breakpoints</div>
<div>✗ Workflow doesn't involve terminals</div>
</div>

</div>

</div>

<div class="mt-6 p-4 bg-gradient-to-r from-emerald-600/40 to-teal-600/40 rounded-lg border border-emerald-500/50">
<div class="font-bold mb-2">Quick Comparison</div>
<div class="grid grid-cols-3 gap-4 text-xs">
<div><strong>Copilot CLI:</strong> Terminal workflows, infrastructure</div>
<div><strong>VS Code Copilot:</strong> Code editing, rapid development</div>
<div><strong>Copilot Web:</strong> Cross-repo analysis, PR review</div>
</div>
</div>

</div>

---

# ✅ What You Can Do Today

<div class="grid grid-cols-3 gap-4 mt-6 text-xs">

<div class="p-5 bg-blue-900/40 rounded-lg border border-blue-500/50">
<div class="text-2xl mb-3">⚡</div>
<div class="font-bold mb-3">Immediate (15 min)</div>
<div class="space-y-2">
<div>□ Install: <code class="text-xs">gh copilot</code></div>
<div>□ Try interactive mode</div>
<div>□ Test Plan Mode (Shift+Tab)</div>
</div>
</div>

<div class="p-5 bg-indigo-900/40 rounded-lg border border-indigo-500/50">
<div class="text-2xl mb-3">🚀</div>
<div class="font-bold mb-3">Short-term (1 hour)</div>
<div class="space-y-2">
<div>□ Add to one CI/CD pipeline</div>
<div>□ Try cloud delegation with &</div>
<div>□ Create .github/copilot-instructions.md</div>
<div>□ Run /context and /usage</div>
</div>
</div>

<div class="p-5 bg-purple-900/40 rounded-lg border border-purple-500/50">
<div class="text-2xl mb-3">🎓</div>
<div class="font-bold mb-3">Advanced (2-4 hours)</div>
<div class="space-y-2">
<div>□ Configure all CI/CD workflows</div>
<div>□ Create custom agents</div>
<div>□ Set up MCP servers</div>
<div>□ Measure ROI metrics</div>
</div>
</div>

</div>

<div class="mt-6 p-4 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl text-center">
<div class="font-bold text-lg">Installation: 2 minutes • Immediate value for terminal workflows</div>
</div>

---

# Related Patterns

<div class="grid grid-cols-2 gap-6 mt-6 text-sm">

<div class="space-y-4">

### Complementary Features

<div class="space-y-3 text-xs">
<div class="flex gap-2">
<div class="text-lg">🪝</div>
<div><strong>Copilot Hooks:</strong> Add validation, logging, security scanning at execution points</div>
</div>
<div class="flex gap-2">
<div class="text-lg">🔌</div>
<div><strong>MCP Apps:</strong> Extend CLI with external tools via Model Context Protocol</div>
</div>
<div class="flex gap-2">
<div class="text-lg">🔒</div>
<div><strong>Terminal Sandboxing:</strong> Secure execution for untrusted operations</div>
</div>
</div>

</div>

<div class="space-y-4">

### Decision Flow

<div class="text-xs space-y-2 font-mono bg-black/40 p-4 rounded">
<div>Q: What's your actual goal?</div>
<div>├─ In-editor assistance</div>
<div>│  → VS Code Copilot</div>
<div>├─ Cross-repo analysis</div>
<div>│  → Copilot Web</div>
<div>├─ Organization governance</div>
<div>│  → Copilot Hooks</div>
<div>└─ Extending with tools</div>
<div>   → MCP Apps</div>
</div>

</div>

</div>

---

# 📚 Official Documentation

<div class="grid grid-cols-2 gap-6 mt-6 text-sm">

<div class="space-y-3">

### Primary Docs

<div class="text-xs space-y-2">
<div>📖 <strong>About GitHub Copilot CLI</strong><br/>Core concepts, capabilities, modes</div>
<div>📖 <strong>Using GitHub Copilot CLI</strong><br/>Command syntax, options, workflows</div>
<div>📖 <strong>Installing GitHub Copilot CLI</strong><br/>Setup for npm, Homebrew, WinGet</div>
</div>

</div>

<div class="space-y-3">

### Additional Resources

<div class="text-xs space-y-2">
<div>🎓 <strong>CLI Best Practices</strong><br/>Optimization patterns and anti-patterns</div>
<div>🎓 <strong>Custom Instructions</strong><br/>Repository-specific configuration</div>
<div>📋 <strong>GitHub Blog</strong><br/>Plan Mode announcement and features</div>
</div>

</div>

</div>

<div class="mt-6 text-center text-xs opacity-70">
docs.github.com/en/copilot
</div>

---
layout: center
class: text-center
---

<div class="text-6xl mb-8">🎉</div>

# Thank You!

<div class="text-2xl mt-6 opacity-80">
  Terminal-Native AI for DevOps Automation
</div>

<div class="mt-8 text-lg">
  <strong>Next Steps:</strong> Install Copilot CLI and try Plan Mode
</div>

<div class="mt-6 text-sm opacity-70">
  Questions? Let's discuss terminal workflows and AI collaboration
</div>
