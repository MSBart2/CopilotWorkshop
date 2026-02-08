---
theme: default
background: https://source.unsplash.com/collection/94734566/1920x1080
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Agent Orchestration
  Multi-Agent Workflows in VS Code
drawings:
  persist: false
transition: slide-left
title: Agent Orchestration - Multi-Agent Workflows
module: tech-talks/agent-orchestration
mdc: true
status: archived
updated: 2026-02-06
---

<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-indigo-900/20"></div>
<div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-indigo-500/20 rounded-full blur-3xl"></div>
<div class="relative z-10">
<div class="absolute inset-0 blur-2xl opacity-50">
<img src="./sdp-logo.png" class="w-64" alt="" />
</div>
<img src="./sdp-logo.png" class="w-64 relative" alt="SDP Logo" />
</div>
<h1 class="!text-5xl !font-bold !mt-8 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent relative z-10">
Agent Orchestration
</h1>
<div class="mt-4 relative z-10">
<span class="px-6 py-2 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xl font-medium shadow-lg shadow-cyan-500/25">
Multi-Agent Workflows in VS Code
</span>
</div>
<div class="mt-8 text-lg opacity-70 relative z-10">Design and implement coordinated agent systems</div>
<div class="mt-6 w-32 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full relative z-10"></div>
</div>

<div class="abs-br m-6 flex gap-2">
<span class="text-sm opacity-50">Tech Talk · 45 minutes</span>
</div>

---

# The Problem: Single-Agent Ceiling (1/2)

<div class="grid grid-cols-2 gap-6 mt-8">
<div class="p-6 bg-red-900/30 rounded-lg border-2 border-red-500">
<div class="text-3xl mb-4">🚧</div>
<h3 class="text-xl font-bold text-red-400 mb-3">Context Pollution</h3>
<p class="text-sm text-gray-300">One agent juggling planning and coding loses focus, mixes concerns</p>
</div>
<div class="p-6 bg-red-900/30 rounded-lg border-2 border-red-500">
<div class="text-3xl mb-4">🛠️</div>
<h3 class="text-xl font-bold text-red-400 mb-3">Tool Overload</h3>
<p class="text-sm text-gray-300">An agent with all tools may use the wrong one for the current phase</p>
</div>
</div>

---

# The Problem: Single-Agent Ceiling (2/2)

<div class="grid grid-cols-2 gap-6 mt-8">
<div class="p-6 bg-red-900/30 rounded-lg border-2 border-red-500">
<div class="text-3xl mb-4">🔄</div>
<h3 class="text-xl font-bold text-red-400 mb-3">No Specialization</h3>
<p class="text-sm text-gray-300">General-purpose agents can't match specialists in any specific domain</p>
</div>
<div class="p-6 bg-red-900/30 rounded-lg border-2 border-red-500">
<div class="text-3xl mb-4">🎯</div>
<h3 class="text-xl font-bold text-red-400 mb-3">Task Complexity</h3>
<p class="text-sm text-gray-300">Real development requires planning, implementation, review, testing—different cognitive modes</p>
</div>
</div>

<div class="mt-8 p-4 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-lg text-center">
<div class="text-xl font-bold text-white">Single agents can plan OR implement well—rarely both in the same session</div>
</div>

---

# The Solution: Orchestrated Specialists

<div class="flex flex-col items-center gap-4">
<div class="p-4 bg-blue-900/60 rounded-lg border-2 border-blue-400 w-full max-w-2xl text-center">
<div class="text-2xl font-bold text-blue-300">USER / ENTRY POINT</div>
<div class="text-sm text-gray-400 mt-1">"Build a user authentication system"</div>
</div>
<div class="text-3xl text-gray-400">↓</div>
<div class="p-4 bg-green-900/60 rounded-lg border-2 border-green-400 w-full max-w-2xl">
<div class="text-xl font-bold text-green-300 text-center mb-2">CONDUCTOR AGENT</div>
<div class="grid grid-cols-2 gap-2 text-xs text-gray-300">
<div>• Interprets high-level request</div>
<div>• Delegates to specialists</div>
<div>• Breaks down into phases</div>
<div>• Aggregates results</div>
</div>
</div>
<div class="text-2xl text-gray-400">↓ ↓ ↓</div>
<div class="grid grid-cols-3 gap-4 w-full">
<div class="p-3 bg-cyan-900/60 rounded-lg border-2 border-cyan-400">
<div class="text-lg font-bold text-cyan-300">PLANNER</div>
<div class="text-xs text-gray-400 mt-1">Read only</div>
<div class="text-xs text-gray-400">Plan workflows</div>
</div>
<div class="p-3 bg-purple-900/60 rounded-lg border-2 border-purple-400">
<div class="text-lg font-bold text-purple-300">CODER</div>
<div class="text-xs text-gray-400 mt-1">Edit, Create</div>
<div class="text-xs text-gray-400">Delete files</div>
</div>
<div class="p-3 bg-orange-900/60 rounded-lg border-2 border-orange-400">
<div class="text-lg font-bold text-orange-300">REVIEWER</div>
<div class="text-xs text-gray-400 mt-1">Read, Lint</div>
<div class="text-xs text-gray-400">Analyze code</div>
</div>
</div>
</div>

---

# Key Principles

<div class="grid grid-cols-2 gap-4 mt-8 text-sm">
<div class="p-4 bg-gray-800 rounded-lg border-l-4 border-blue-400">
<div class="flex items-center gap-2 mb-2">
<span class="text-2xl">🎯</span>
<div class="text-lg font-bold text-white">Single Responsibility</div>
</div>
<div class="text-gray-400">Each agent does one thing excellently</div>
</div>
<div class="p-4 bg-gray-800 rounded-lg border-l-4 border-green-400">
<div class="flex items-center gap-2 mb-2">
<span class="text-2xl">🛠️</span>
<div class="text-lg font-bold text-white">Minimal Tools</div>
</div>
<div class="text-gray-400">Agents only have tools for their role</div>
</div>
<div class="p-4 bg-gray-800 rounded-lg border-l-4 border-purple-400">
<div class="flex items-center gap-2 mb-2">
<span class="text-2xl">🚪</span>
<div class="text-lg font-bold text-white">Clear Boundaries</div>
</div>
<div class="text-gray-400">Handoffs define when work transfers</div>
</div>
<div class="p-4 bg-gray-800 rounded-lg border-l-4 border-orange-400">
<div class="flex items-center gap-2 mb-2">
<span class="text-2xl">🔒</span>
<div class="text-lg font-bold text-white">Context Isolation</div>
</div>
<div class="text-gray-400">Each agent gets fresh, focused context</div>
</div>
<div class="p-4 bg-gray-800 rounded-lg border-l-4 border-cyan-400">
<div class="flex items-center gap-2 mb-2">
<span class="text-2xl">👑</span>
<div class="text-lg font-bold text-white">Conductor Authority</div>
</div>
<div class="text-gray-400">One agent coordinates, others execute</div>
</div>
<div class="p-4 bg-gray-800 rounded-lg border-l-4 border-red-400">
<div class="flex items-center gap-2 mb-2">
<span class="text-2xl">⚡</span>
<div class="text-lg font-bold text-white">Parallel Execution</div>
</div>
<div class="text-gray-400">Independent phases run simultaneously</div>
</div>
</div>

---

# Community System: Copilot Orchestra

<div class="grid grid-cols-2 gap-6 mt-6">
<div>
<h3 class="text-xl font-bold mb-4 text-cyan-400">ADR-Driven Workflow</h3>
<div class="flex flex-col gap-3">
<div class="p-3 bg-blue-900/60 rounded-lg border-2 border-blue-400">
<div class="font-bold text-blue-300">1. PLANNER</div>
<div class="text-sm text-gray-400">Creates Architecture Decision Records</div>
</div>
<div class="text-2xl text-gray-400 text-center">↓</div>
<div class="p-3 bg-green-900/60 rounded-lg border-2 border-green-400">
<div class="font-bold text-green-300">2. IMPLEMENTER</div>
<div class="text-sm text-gray-400">Executes plan step by step</div>
</div>
<div class="text-2xl text-gray-400 text-center">↓</div>
<div class="p-3 bg-orange-900/60 rounded-lg border-2 border-orange-400">
<div class="font-bold text-orange-300">3. REVIEWER</div>
<div class="text-sm text-gray-400">Validates against plan</div>
</div>
</div>
</div>
<div>
<h3 class="text-xl font-bold mb-4 text-purple-400">Key Features</h3>
<div class="space-y-2 text-sm">
<div class="p-3 bg-gray-800 rounded-lg flex items-start gap-2">
<span>✅</span>
<div>
<div class="font-bold text-white">Structured Planning</div>
<div class="text-gray-400">ADR-based architecture documentation</div>
</div>
</div>
<div class="p-3 bg-gray-800 rounded-lg flex items-start gap-2">
<span>✅</span>
<div>
<div class="font-bold text-white">Systematic Execution</div>
<div class="text-gray-400">Step-by-step implementation workflow</div>
</div>
</div>
<div class="p-3 bg-gray-800 rounded-lg flex items-start gap-2">
<span>✅</span>
<div>
<div class="font-bold text-white">Validation Loops</div>
<div class="text-gray-400">Reviewer can reject back to implementer</div>
</div>
</div>
<div class="p-3 bg-gray-800 rounded-lg flex items-start gap-2">
<span>✅</span>
<div>
<div class="font-bold text-white">Human Checkpoints</div>
<div class="text-gray-400">User approval between phases</div>
</div>
</div>
</div>
</div>
</div>

<div class="mt-4 text-center text-sm text-gray-400 italic">github.com/ShepAlderson/copilot-orchestra</div>

---

# Community System: GitHub Copilot Atlas

<div class="mt-6">
<h3 class="text-xl font-bold mb-4 text-center text-yellow-400">Mythology-Themed Multi-Persona System</h3>
<div class="grid grid-cols-4 gap-3">
<div class="p-3 bg-purple-900/60 rounded-lg border-2 border-purple-400">
<div class="text-2xl mb-2">🔥</div>
<div class="font-bold text-purple-300">Prometheus</div>
<div class="text-xs text-gray-400 mt-1">Strategic Planner</div>
<div class="text-xs text-gray-500">Requirements & architecture</div>
</div>
<div class="p-3 bg-cyan-900/60 rounded-lg border-2 border-cyan-400">
<div class="text-2xl mb-2">🔮</div>
<div class="font-bold text-cyan-300">Oracle</div>
<div class="text-xs text-gray-400 mt-1">Researcher</div>
<div class="text-xs text-gray-500">Knowledge gathering</div>
</div>
<div class="p-3 bg-orange-900/60 rounded-lg border-2 border-orange-400">
<div class="text-2xl mb-2">⛰️</div>
<div class="font-bold text-orange-300">Sisyphus</div>
<div class="text-xs text-gray-400 mt-1">Implementer</div>
<div class="text-xs text-gray-500">Persistent iteration</div>
</div>
<div class="p-3 bg-green-900/60 rounded-lg border-2 border-green-400">
<div class="text-2xl mb-2">🧭</div>
<div class="font-bold text-green-300">Explorer</div>
<div class="text-xs text-gray-400 mt-1">Navigator</div>
<div class="text-xs text-gray-500">Codebase discovery</div>
</div>
</div>
</div>

<div class="mt-6">
<h3 class="text-lg font-bold mb-3 text-blue-400">Key Innovation: Iterative Refinement</h3>
<div class="flex items-center justify-center gap-4">
<div class="p-3 bg-orange-900/60 rounded-lg border-2 border-orange-400 text-center">
<div class="font-bold text-orange-300">Sisyphus</div>
<div class="text-xs text-gray-400">Implements</div>
</div>
<span class="text-gray-400">→</span>
<div class="p-3 bg-green-900/60 rounded-lg border-2 border-green-400 text-center">
<div class="font-bold text-green-300">Explorer</div>
<div class="text-xs text-gray-400">Validates</div>
</div>
<span class="text-gray-400">→</span>
<div class="p-3 bg-red-900/40 rounded-lg border-2 border-red-500 text-center">
<div class="font-bold text-red-400">Issues?</div>
<div class="text-xs text-gray-400">Loop back</div>
</div>
</div>
<div class="text-center text-xs text-gray-400 mt-2">Loops until quality threshold met</div>
</div>

<div class="mt-4 text-center text-sm text-gray-400 italic">github.com/bigguy345/Github-Copilot-Atlas</div>

---

# Building Your Own: Workflow Phases (1/2)

<div class="grid grid-cols-2 gap-4 mt-6 text-sm">
<div class="p-3 bg-gray-800 rounded-lg">
<div class="flex items-center gap-2 mb-2">
<span class="text-2xl">🔍</span>
<div>
<div class="font-bold text-white">Discovery</div>
<div class="text-xs text-gray-400">Exploration mode</div>
</div>
</div>
<div class="text-xs text-gray-500">Reading code, finding patterns</div>
</div>
<div class="p-3 bg-gray-800 rounded-lg">
<div class="flex items-center gap-2 mb-2">
<span class="text-2xl">📋</span>
<div>
<div class="font-bold text-white">Planning</div>
<div class="text-xs text-gray-400">Strategic mode</div>
</div>
</div>
<div class="text-xs text-gray-500">Architecture decisions, task breakdown</div>
</div>
<div class="p-3 bg-gray-800 rounded-lg">
<div class="flex items-center gap-2 mb-2">
<span class="text-2xl">⚙️</span>
<div>
<div class="font-bold text-white">Implementation</div>
<div class="text-xs text-gray-400">Execution mode</div>
</div>
</div>
<div class="text-xs text-gray-500">Writing code, making changes</div>
</div>
<div class="p-3 bg-gray-800 rounded-lg">
<div class="flex items-center gap-2 mb-2">
<span class="text-2xl">🔎</span>
<div>
<div class="font-bold text-white">Review</div>
<div class="text-xs text-gray-400">Critical mode</div>
</div>
</div>
<div class="text-xs text-gray-500">Finding issues, validating quality</div>
</div>
</div>

---

# Building Your Own: Workflow Phases (2/2)

<div class="flex flex-col gap-6 mt-8 max-w-2xl mx-auto">
<div class="p-4 bg-gray-800 rounded-lg">
<div class="flex items-center gap-3 mb-2">
<span class="text-3xl">✅</span>
<div>
<div class="text-lg font-bold text-white">Testing</div>
<div class="text-sm text-gray-400">Verification mode</div>
</div>
</div>
<div class="text-sm text-gray-500 ml-12">Writing tests, running checks</div>
</div>
<div class="p-4 bg-gray-800 rounded-lg">
<div class="flex items-center gap-3 mb-2">
<span class="text-3xl">📖</span>
<div>
<div class="text-lg font-bold text-white">Documentation</div>
<div class="text-sm text-gray-400">Communication mode</div>
</div>
</div>
<div class="text-sm text-gray-500 ml-12">Writing docs, explaining decisions</div>
</div>
</div>

<div class="mt-8 text-center text-sm text-gray-400 italic">Each phase requires different tools and cognitive approaches</div>

---

# Tool Assignment Guidelines

<div class="mt-6">
<table class="text-sm w-full">
<thead>
<tr class="bg-gray-800">
<th class="p-2 text-left text-blue-400">Agent Type</th>
<th class="p-2 text-left text-green-400">Appropriate Tools</th>
</tr>
</thead>
<tbody>
<tr class="border-b border-gray-700">
<td class="p-2 font-bold">Research/Discovery</td>
<td class="p-2 text-gray-400"><code>search</code>, <code>fetch</code>, <code>usages</code>, <code>githubRepo</code></td>
</tr>
<tr class="border-b border-gray-700">
<td class="p-2 font-bold">Planning</td>
<td class="p-2 text-gray-400"><code>search</code>, <code>fetch</code>, <code>create</code> (for plan docs only)</td>
</tr>
<tr class="border-b border-gray-700">
<td class="p-2 font-bold">Implementation</td>
<td class="p-2 text-gray-400"><code>edit</code>, <code>create</code>, <code>delete</code>, <code>search</code></td>
</tr>
<tr class="border-b border-gray-700">
<td class="p-2 font-bold">Review</td>
<td class="p-2 text-gray-400"><code>search</code>, <code>fetch</code>, <code>analysis</code>, <code>linter</code></td>
</tr>
<tr class="border-b border-gray-700">
<td class="p-2 font-bold">Testing</td>
<td class="p-2 text-gray-400"><code>search</code>, <code>create</code>, <code>run_tests</code></td>
</tr>
</tbody>
</table>
</div>

<div class="mt-6 grid grid-cols-2 gap-4">
<div class="p-4 bg-green-900/30 rounded-lg border-2 border-green-500">
<div class="text-xl font-bold text-green-400 mb-2">✅ Right Tools</div>
<div class="text-sm text-gray-300">Planners can't accidentally edit; coders can't over-plan</div>
</div>
<div class="p-4 bg-blue-900/30 rounded-lg border-2 border-blue-500">
<div class="text-xl font-bold text-blue-400 mb-2">🎯 Focused Context</div>
<div class="text-sm text-gray-300">Each agent receives only relevant information</div>
</div>
</div>

---

# Conductor Agent Pattern (1/2)

```yaml
# .github/agents/conductor.agent.md
---
name: Conductor
description: Orchestrates development workflow
user-invokable: true
disable-model-invocation: true  # Only users start workflows
agents:
  allow: ['explorer', 'planner', 'implementer', 'reviewer']
model:
  - Claude Opus 4.5
  - Claude Sonnet 4
handoffs:
  - label: Start Workflow
    agent: explorer
    prompt: Analyze the codebase for this request
```

<div class="mt-4 text-sm text-center text-gray-400 italic">Conductors coordinate but never implement directly</div>

---

# Conductor Agent Pattern (2/2)

```yaml
---
You orchestrate multi-phase development workflows.
You NEVER implement directly.

## Workflow Phases
1. Discovery → @explorer analyzes relevant codebase areas
2. Planning → @planner creates implementation plan
3. Implementation → @implementer executes the plan
4. Review → @reviewer validates the implementation
```

<div class="mt-6 grid grid-cols-2 gap-4">
<div class="p-4 bg-purple-900/30 rounded-lg border-2 border-purple-500">
<div class="text-xl font-bold text-purple-400 mb-2">🎭 Role</div>
<div class="text-sm text-gray-300">Delegates tasks; never executes</div>
</div>
<div class="p-4 bg-blue-900/30 rounded-lg border-2 border-blue-500">
<div class="text-xl font-bold text-blue-400 mb-2">🔄 Flow</div>
<div class="text-sm text-gray-300">4-phase development cycle</div>
</div>
</div>

---

# Worker Agent Pattern: Planner

<div class="text-xs">

```yaml
---
name: Planner
description: Creates implementation plans
user-invokable: false
tools: ['search', 'fetch', 'create']
model: Claude Opus 4.5
---

You create detailed implementation
plans based on discovery findings.

## Your Outputs
- Step-by-step implementation plan
- File change specifications
- Dependency analysis
- Risk assessment

## Constraints
- Planning only, no implementation
- Reference explorer findings
```

</div>

---

# Worker Agent Pattern: Implementer

<div class="text-xs">

```yaml
---
name: Implementer
description: Executes implementation plans
user-invokable: false
tools: ['edit', 'create', 'delete']
model: Claude Sonnet 4
---

You execute implementation plans
created by the planner.

## Your Process
1. Read the plan carefully
2. Execute each step in order
3. Verify each change compiles
4. Report completion status

## Constraints
- Follow the plan exactly
```

</div>

---

# Orchestration Patterns

<div class="grid grid-cols-2 gap-6 mt-6">
<div class="p-4 bg-gray-800 rounded-lg">
<h3 class="text-lg font-bold text-blue-400 mb-3">1. Linear Pipeline</h3>
<div class="flex items-center gap-2 text-xs">
<div class="p-2 bg-blue-900/60 rounded">Discovery</div>
<span>→</span>
<div class="p-2 bg-green-900/60 rounded">Planning</div>
<span>→</span>
<div class="p-2 bg-purple-900/60 rounded">Implement</div>
<span>→</span>
<div class="p-2 bg-orange-900/60 rounded">Review</div>
</div>
<div class="text-xs text-gray-400 mt-3">Best for: Well-defined features, single-track development</div>
</div>
<div class="p-4 bg-gray-800 rounded-lg">
<h3 class="text-lg font-bold text-green-400 mb-3">2. Iterative Refinement</h3>
<div class="flex items-center justify-center gap-2 text-xs">
<div class="p-2 bg-purple-900/60 rounded">Implement</div>
<span>→</span>
<div class="p-2 bg-orange-900/60 rounded">Review</div>
<span>→</span>
<div class="p-2 bg-red-900/40 rounded">Loop?</div>
</div>
<div class="text-xs text-gray-400 mt-3">Best for: Quality-critical code, learning from feedback</div>
</div>
<div class="p-4 bg-gray-800 rounded-lg">
<h3 class="text-lg font-bold text-purple-400 mb-3">3. Parallel Specialists</h3>
<div class="text-xs">
<div class="mb-1">Plan →</div>
<div class="ml-4 space-y-1">
<div>├→ Security Review ─┐</div>
<div>├→ Performance Opt ─┤→ Integration</div>
<div>└→ Documentation ───┘</div>
</div>
</div>
<div class="text-xs text-gray-400 mt-3">Best for: Large features, cross-cutting concerns</div>
</div>
<div class="p-4 bg-gray-800 rounded-lg">
<h3 class="text-lg font-bold text-orange-400 mb-3">4. Hierarchical</h3>
<div class="text-xs">
<div class="mb-1">Master Conductor</div>
<div class="ml-4 space-y-1">
<div>├→ Frontend Conductor</div>
<div>│  ├→ Component Builder</div>
<div>│  └→ Style Agent</div>
<div>└→ Backend Conductor</div>
</div>
</div>
<div class="text-xs text-gray-400 mt-3">Best for: Full-stack features, domain separation</div>
</div>
</div>

---

# VS Code 1.109 Features

<div class="grid grid-cols-2 gap-6 mt-8">
<div>
<h3 class="text-xl font-bold mb-4 text-cyan-400">Invocation Controls</h3>
<div class="space-y-3 text-sm">
<div class="p-3 bg-gray-800 rounded-lg">
<div class="font-bold text-white mb-1">Worker Agents</div>
<code class="text-xs text-green-400">user-invokable: false</code>
<div class="text-xs text-gray-400 mt-1">Hidden from user dropdown</div>
</div>
<div class="p-3 bg-gray-800 rounded-lg">
<div class="font-bold text-white mb-1">Conductor Only</div>
<code class="text-xs text-blue-400">disable-model-invocation: true</code>
<div class="text-xs text-gray-400 mt-1">Can't be a subagent</div>
</div>
<div class="p-3 bg-gray-800 rounded-lg">
<div class="font-bold text-white mb-1">Agent Restrictions</div>
<code class="text-xs text-purple-400">agents: allow: ['planner']</code>
<div class="text-xs text-gray-400 mt-1">Control who invokes whom</div>
</div>
</div>
</div>
<div>
<h3 class="text-xl font-bold mb-4 text-green-400">Parallel Execution</h3>
<div class="p-4 bg-green-900/20 rounded-lg border-2 border-green-500">
<div class="font-bold text-green-300 mb-2">Simultaneous Agents</div>
<div class="text-sm text-gray-300 mb-3">Independent phases run simultaneously, multiplying throughput</div>
<div class="bg-gray-900 p-2 rounded text-xs font-mono text-gray-400">
"In parallel: @explorer analyze auth,<br/>
@oracle research JWT patterns"
</div>
</div>
<h3 class="text-lg font-bold mt-4 mb-2 text-yellow-400">Model Fallback</h3>
<div class="text-xs bg-gray-800 p-3 rounded-lg">
<code class="text-blue-400">model:</code><br/>
<code class="text-gray-400 ml-2">- Claude Opus 4.5</code><br/>
<code class="text-gray-400 ml-2">- Claude Sonnet 4</code><br/>
<code class="text-gray-400 ml-2">- GPT-5</code>
</div>
</div>
</div>

---

# Best Practices

<div class="grid grid-cols-2 gap-4 mt-6 text-sm">
<div>
<h3 class="text-lg font-bold mb-3 text-blue-400">Conductor Design</h3>
<div class="space-y-2">
<div class="flex items-start gap-2 p-2 bg-gray-800 rounded">
<span>✅</span>
<div class="text-gray-300">Never implement directly—delegate all work</div>
</div>
<div class="flex items-start gap-2 p-2 bg-gray-800 rounded">
<span>✅</span>
<div class="text-gray-300">Clear phase definitions with entry/exit criteria</div>
</div>
<div class="flex items-start gap-2 p-2 bg-gray-800 rounded">
<span>✅</span>
<div class="text-gray-300">Validate output before proceeding to next phase</div>
</div>
<div class="flex items-start gap-2 p-2 bg-gray-800 rounded">
<span>✅</span>
<div class="text-gray-300">Human checkpoints at key transitions</div>
</div>
<div class="flex items-start gap-2 p-2 bg-gray-800 rounded">
<span>✅</span>
<div class="text-gray-300">Aggregate results into coherent output</div>
</div>
</div>
</div>
<div>
<h3 class="text-lg font-bold mb-3 text-green-400">Worker Design</h3>
<div class="space-y-2">
<div class="flex items-start gap-2 p-2 bg-gray-800 rounded">
<span>✅</span>
<div class="text-gray-300">Single responsibility—one cognitive mode</div>
</div>
<div class="flex items-start gap-2 p-2 bg-gray-800 rounded">
<span>✅</span>
<div class="text-gray-300">Minimal tools—only what's needed for role</div>
</div>
<div class="flex items-start gap-2 p-2 bg-gray-800 rounded">
<span>✅</span>
<div class="text-gray-300">Clear constraints about what NOT to do</div>
</div>
<div class="flex items-start gap-2 p-2 bg-gray-800 rounded">
<span>✅</span>
<div class="text-gray-300">Structured outputs for conductor consumption</div>
</div>
<div class="flex items-start gap-2 p-2 bg-gray-800 rounded">
<span>✅</span>
<div class="text-gray-300">Clear completion/blocker signals</div>
</div>
</div>
</div>
</div>

<div class="mt-6 p-4 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-lg text-center">
<div class="text-xl font-bold text-white">Start simple: 3-4 agents before adding complexity</div>
</div>

---

# Common Debugging Issues

<table class="text-xs w-full mt-6">
<thead>
<tr class="bg-gray-800">
<th class="p-2 text-left text-red-400">Issue</th>
<th class="p-2 text-left text-yellow-400">Symptom</th>
<th class="p-2 text-left text-green-400">Solution</th>
</tr>
</thead>
<tbody>
<tr class="border-b border-gray-700">
<td class="p-2 font-bold">Wrong agent invoked</td>
<td class="p-2 text-gray-400">Unexpected behavior</td>
<td class="p-2 text-gray-400">Check <code>agents.allow</code> restrictions</td>
</tr>
<tr class="border-b border-gray-700">
<td class="p-2 font-bold">Phase skipped</td>
<td class="p-2 text-gray-400">Incomplete work</td>
<td class="p-2 text-gray-400">Verify handoff prompts</td>
</tr>
<tr class="border-b border-gray-700">
<td class="p-2 font-bold">Context lost</td>
<td class="p-2 text-gray-400">Agent doesn't know previous work</td>
<td class="p-2 text-gray-400">Pass phase outputs explicitly</td>
</tr>
<tr class="border-b border-gray-700">
<td class="p-2 font-bold">Infinite loop</td>
<td class="p-2 text-gray-400">Never completes</td>
<td class="p-2 text-gray-400">Add iteration limits, exit criteria</td>
</tr>
<tr class="border-b border-gray-700">
<td class="p-2 font-bold">Quality degradation</td>
<td class="p-2 text-gray-400">Late phases worse</td>
<td class="p-2 text-gray-400">Reduce context accumulation</td>
</tr>
</tbody>
</table>

<div class="mt-6 p-4 bg-blue-900/20 rounded-lg border-2 border-blue-500">
<div class="text-lg font-bold text-blue-300 mb-2">💡 Use Chat Diagnostics</div>
<div class="text-sm text-gray-300">Verify which agents were invoked, what context each received, and tool usage per agent</div>
</div>

---
layout: center
---

# Key Takeaways

<div class="space-y-4 text-lg max-w-3xl mx-auto">
<div class="flex items-start gap-3">
<span class="text-2xl">🎯</span>
<div>
<div class="font-bold text-blue-400">Orchestration beats single agents</div>
<div class="text-sm text-gray-400">Specialists outperform generalists</div>
</div>
</div>
<div class="flex items-start gap-3">
<span class="text-2xl">👑</span>
<div>
<div class="font-bold text-green-400">Conductor authority is essential</div>
<div class="text-sm text-gray-400">One agent coordinates, others execute</div>
</div>
</div>
<div class="flex items-start gap-3">
<span class="text-2xl">🛠️</span>
<div>
<div class="font-bold text-purple-400">Tool constraints enforce roles</div>
<div class="text-sm text-gray-400">Read-only for research, edit for implementation</div>
</div>
</div>
<div class="flex items-start gap-3">
<span class="text-2xl">⚡</span>
<div>
<div class="font-bold text-orange-400">Parallel execution multiplies throughput</div>
<div class="text-sm text-gray-400">Independent phases run simultaneously</div>
</div>
</div>
<div class="flex items-start gap-3">
<span class="text-2xl">🔒</span>
<div>
<div class="font-bold text-cyan-400">Invocation controls enable trust</div>
<div class="text-sm text-gray-400">Right agents, right times, right permissions</div>
</div>
</div>
</div>

---
layout: center
---

# The Vision

<div class="max-w-3xl mx-auto">
<div class="text-xl leading-relaxed text-gray-300 space-y-4">
<p>
Agent orchestration represents the frontier of AI-assisted development. Instead of asking one agent to do everything—and watching quality degrade as context accumulates—we create teams of specialists.
</p>
<p>
The conductor understands the big picture. The planner thinks strategically. The implementer executes precisely. The reviewer catches what others miss.
</p>
<p class="text-blue-400 font-semibold">
Each agent does one thing excellently, and the orchestration layer coordinates their work.
</p>
<p>
This mirrors how effective human teams operate, but with agents that scale infinitely.
</p>
</div>
</div>

---

# Getting Started

<div class="grid grid-cols-2 gap-6 mt-6">
<div>
<h3 class="text-xl font-bold mb-4 text-blue-400">Immediate Actions</h3>
<div class="space-y-2 text-sm">
<div class="flex items-start gap-2 p-3 bg-gray-800 rounded-lg">
<span class="text-xl">1️⃣</span>
<div>
<div class="font-bold text-white">Study community examples</div>
<div class="text-gray-400">Review Copilot Orchestra and Atlas repos</div>
</div>
</div>
<div class="flex items-start gap-2 p-3 bg-gray-800 rounded-lg">
<span class="text-xl">2️⃣</span>
<div>
<div class="font-bold text-white">Identify workflow phases</div>
<div class="text-gray-400">What cognitive modes do you use?</div>
</div>
</div>
<div class="flex items-start gap-2 p-3 bg-gray-800 rounded-lg">
<span class="text-xl">3️⃣</span>
<div>
<div class="font-bold text-white">Create simple pipeline</div>
<div class="text-gray-400">Planner → Implementer → Reviewer</div>
</div>
</div>
<div class="flex items-start gap-2 p-3 bg-gray-800 rounded-lg">
<span class="text-xl">4️⃣</span>
<div>
<div class="font-bold text-white">Enable subagents</div>
<div class="text-gray-400 font-mono text-xs">chat.customAgentInSubagent.enabled: true</div>
</div>
</div>
</div>
</div>
<div>
<h3 class="text-xl font-bold mb-4 text-green-400">Next Steps</h3>
<div class="space-y-2 text-sm">
<div class="flex items-start gap-2 p-3 bg-gray-800 rounded-lg">
<span>→</span>
<div>
<div class="font-bold text-white">Add parallel phases</div>
<div class="text-gray-400">Independent work runs simultaneously</div>
</div>
</div>
<div class="flex items-start gap-2 p-3 bg-gray-800 rounded-lg">
<span>→</span>
<div>
<div class="font-bold text-white">Implement iteration loops</div>
<div class="text-gray-400">Review → Implement cycles</div>
</div>
</div>
<div class="flex items-start gap-2 p-3 bg-gray-800 rounded-lg">
<span>→</span>
<div>
<div class="font-bold text-white">Create domain conductors</div>
<div class="text-gray-400">Frontend, Backend, DevOps orchestrators</div>
</div>
</div>
<div class="flex items-start gap-2 p-3 bg-gray-800 rounded-lg">
<span>→</span>
<div>
<div class="font-bold text-white">Document handoff contracts</div>
<div class="text-gray-400">What each phase produces</div>
</div>
</div>
</div>
</div>
</div>

---
layout: end
---

# Thank You

<div class="text-center">
<div class="text-2xl mb-8 text-gray-400">Build teams of specialists, not exhausted generalists</div>

<div class="grid grid-cols-2 gap-4 max-w-2xl mx-auto text-sm">
<div class="p-4 bg-gray-800 rounded-lg">
<div class="font-bold text-cyan-400 mb-2">Community Projects</div>
<div class="text-xs text-gray-400">github.com/ShepAlderson/copilot-orchestra</div>
<div class="text-xs text-gray-400">github.com/bigguy345/Github-Copilot-Atlas</div>
</div>
<div class="p-4 bg-gray-800 rounded-lg">
<div class="font-bold text-green-400 mb-2">Related Content</div>
<div class="text-xs text-gray-400">Tech Talk: Agentic Sessions</div>
<div class="text-xs text-gray-400">Workshop: Custom Agents</div>
</div>
</div>
</div>
