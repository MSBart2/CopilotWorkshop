---
theme: default
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Agent Teams: Coordinating Specialized AI Roles
  CopilotTraining Tech Talk
drawings:
  persist: false
transition: slide-left
title: Agent Teams - Coordinating Specialized AI Roles
module: tech-talks/agent-teams
mdc: true
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
    Agent Teams
  </h1>
  <div class="mt-4 relative z-10">
    <span class="px-6 py-2 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xl font-medium shadow-lg shadow-cyan-500/25">
      Coordinating Specialized AI Roles
    </span>
  </div>
  <div class="mt-8 text-lg opacity-70 relative z-10">
    From solo agents to specialist teams
  </div>
  <div class="mt-6 w-32 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full relative z-10"></div>
</div>

<div class="abs-br m-6 flex gap-2">
  <span class="text-sm opacity-50">Tech Talk · 45 minutes</span>
</div>

---

# The Problem

<div class="mt-6 space-y-4">

<div class="p-4 bg-red-900/30 rounded-lg border-l-4 border-red-500">
  <div class="font-bold text-red-400">Single agents hit a ceiling</div>
  <div class="text-gray-300 mt-1 text-sm">~300-500 LOC changes before context pollution degrades quality by 30-40%</div>
</div>

<div class="p-4 bg-yellow-900/30 rounded-lg border-l-4 border-yellow-500">
  <div class="font-bold text-yellow-400">Context pollution across phases</div>
  <div class="text-gray-300 mt-1 text-sm">Planning notes contaminate implementation; research clutter reduces coding focus</div>
</div>

<div class="p-4 bg-orange-900/30 rounded-lg border-l-4 border-orange-500">
  <div class="font-bold text-orange-400">Tool overload creates confusion</div>
  <div class="text-gray-300 mt-1 text-sm">15+ tools → agents misuse edit tools during planning, research tools during coding</div>
</div>

<div class="p-4 bg-blue-900/30 rounded-lg border-l-4 border-blue-500">
  <div class="font-bold text-blue-400">No specialization = mediocre at everything</div>
  <div class="text-gray-300 mt-1 text-sm">Generalists at 60-70% effectiveness; specialists tuned for one mode reach 90-95%</div>
</div>

</div>

---

# The Solution: Conductor-Delegate Teams

<div class="mt-4">

<div class="p-5 bg-gradient-to-br from-green-900/60 to-blue-900/60 rounded-lg border-2 border-green-400 mb-4">
  <div class="text-xl font-bold text-green-300 mb-3">Multi-Agent Team Orchestration</div>
  <div class="text-gray-200 space-y-2 text-sm">
    <div>✅ <b>Role-Based Specialization</b> — Each agent masters one cognitive mode</div>
    <div>✅ <b>Context Isolation</b> — Subagents in separate windows (70-80% savings)</div>
    <div>✅ <b>Parallel Execution</b> — Independent agents run simultaneously (3-5x throughput)</div>
    <div>✅ <b>Quality Checkpoints</b> — Dedicated review agents catch issues early</div>
  </div>
</div>

<div class="text-sm text-cyan-300 font-medium">The conductor never implements — it coordinates specialists who execute in isolated contexts</div>

</div>

---

# Table of Contents

<div class="mt-8 grid grid-cols-2 gap-6">

<div class="p-5 bg-gradient-to-br from-cyan-900/40 to-cyan-900/20 rounded-xl border border-cyan-500/30">
  <div class="text-2xl mb-2">🏗️</div>
  <div class="font-bold text-cyan-300">Core Architecture</div>
  <div class="text-sm text-gray-400 mt-1">Conductor-delegate pattern, tool constraints, context isolation</div>
</div>

<div class="p-5 bg-gradient-to-br from-blue-900/40 to-blue-900/20 rounded-xl border border-blue-500/30">
  <div class="text-2xl mb-2">🎭</div>
  <div class="font-bold text-blue-300">Community Systems</div>
  <div class="text-sm text-gray-400 mt-1">Orchestra & Atlas — deploy-ready teams</div>
</div>

<div class="p-5 bg-gradient-to-br from-indigo-900/40 to-indigo-900/20 rounded-xl border border-indigo-500/30">
  <div class="text-2xl mb-2">🔨</div>
  <div class="font-bold text-indigo-300">Building Your Team</div>
  <div class="text-sm text-gray-400 mt-1">4-agent starter system in 5 steps</div>
</div>

<div class="p-5 bg-gradient-to-br from-purple-900/40 to-purple-900/20 rounded-xl border border-purple-500/30">
  <div class="text-2xl mb-2">🎯</div>
  <div class="font-bold text-purple-300">Orchestration Patterns</div>
  <div class="text-sm text-gray-400 mt-1">4 proven strategies for different workflows</div>
</div>

</div>

---

# Mental Model Shift

<div class="mt-4">

<div class="grid grid-cols-2 gap-4 text-sm">

<div>
<div class="font-bold text-green-400 mb-3">✅ Move Toward</div>
<div class="space-y-2">
  <div class="p-2 bg-green-900/20 rounded border-l-3 border-green-500">Conductor-delegate architecture</div>
  <div class="p-2 bg-green-900/20 rounded border-l-3 border-green-500">Single responsibility per agent</div>
  <div class="p-2 bg-green-900/20 rounded border-l-3 border-green-500">Tool constraints = role enforcement</div>
  <div class="p-2 bg-green-900/20 rounded border-l-3 border-green-500">Parallel independent work</div>
</div>
</div>

<div>
<div class="font-bold text-red-400 mb-3">🛑 Move Away From</div>
<div class="space-y-2">
  <div class="p-2 bg-red-900/20 rounded border-l-3 border-red-500">Single agent for everything</div>
  <div class="p-2 bg-red-900/20 rounded border-l-3 border-red-500">Universal tool access for all agents</div>
  <div class="p-2 bg-red-900/20 rounded border-l-3 border-red-500">Implicit phase transitions</div>
  <div class="p-2 bg-red-900/20 rounded border-l-3 border-red-500">Raw data returns from subagents</div>
</div>
</div>

</div>

</div>

---

# When to Use This Pattern

<div class="mt-4">

<div class="grid grid-cols-2 gap-6 text-sm">

<div>
<div class="font-bold text-green-400 mb-2">✅ Use Agent Teams When</div>
<div class="space-y-2">
  <div class="p-2 bg-green-900/20 rounded">3+ cognitive modes needed (plan/code/review)</div>
  <div class="p-2 bg-green-900/20 rounded">Context window hits 70-80%+ before implementation</div>
  <div class="p-2 bg-green-900/20 rounded">Separation of concerns matters</div>
  <div class="p-2 bg-green-900/20 rounded">Quality checkpoints required</div>
</div>
</div>

<div>
<div class="font-bold text-red-400 mb-2">❌ Don't Use When</div>
<div class="space-y-2">
  <div class="p-2 bg-red-900/20 rounded">Simple task (&lt;200 LOC) → use Plan Mode</div>
  <div class="p-2 bg-red-900/20 rounded">Sequential phases only → multi-step-tasks</div>
  <div class="p-2 bg-red-900/20 rounded">Branch-level parallelism → parallel-execution</div>
  <div class="p-2 bg-red-900/20 rounded">&lt;5 agent tasks/week → overhead exceeds benefit</div>
</div>
</div>

</div>

</div>

---
layout: center
class: text-center
---

<div class="relative">
  <div class="text-6xl mb-6">🏗️</div>
  <h1 class="!text-4xl bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
    Core Architecture
  </h1>
  <p class="text-gray-400 mt-4 text-lg">Conductor-delegate pattern with tool-enforced boundaries</p>
</div>

---

# The Conductor Pattern

<div class="mt-4 grid grid-cols-5 gap-3 text-center text-sm">

<div class="col-span-5 p-3 bg-gradient-to-r from-cyan-900/40 to-blue-900/40 rounded-lg border border-cyan-500/30">
  <div class="font-bold text-cyan-300">🎼 CONDUCTOR</div>
  <div class="text-gray-400 text-xs mt-1">Interprets requests → breaks into phases → delegates → validates → aggregates</div>
  <div class="text-yellow-400 text-xs mt-1 font-bold">NEVER implements directly</div>
</div>

<div class="col-span-5 text-center text-gray-500">↓ delegates to isolated subagents ↓</div>

<div class="p-3 bg-green-900/30 rounded-lg border border-green-500/30">
  <div class="font-bold text-green-300">🔍 Explorer</div>
  <div class="text-xs text-gray-400 mt-1">search, fetch</div>
  <div class="text-xs text-green-400">Read-only</div>
</div>

<div class="p-3 bg-blue-900/30 rounded-lg border border-blue-500/30">
  <div class="font-bold text-blue-300">📋 Planner</div>
  <div class="text-xs text-gray-400 mt-1">search, create</div>
  <div class="text-xs text-blue-400">Plans only</div>
</div>

<div class="p-3 bg-indigo-900/30 rounded-lg border border-indigo-500/30">
  <div class="font-bold text-indigo-300">⚡ Implementer</div>
  <div class="text-xs text-gray-400 mt-1">edit, create, delete</div>
  <div class="text-xs text-indigo-400">Full edit</div>
</div>

<div class="p-3 bg-purple-900/30 rounded-lg border border-purple-500/30">
  <div class="font-bold text-purple-300">🔬 Reviewer</div>
  <div class="text-xs text-gray-400 mt-1">search, analyze</div>
  <div class="text-xs text-purple-400">Read + lint</div>
</div>

<div class="p-3 bg-pink-900/30 rounded-lg border border-pink-500/30">
  <div class="font-bold text-pink-300">🧪 Tester</div>
  <div class="text-xs text-gray-400 mt-1">search, create, test</div>
  <div class="text-xs text-pink-400">Test only</div>
</div>

</div>

<div class="mt-4 text-sm text-gray-400 text-center">Each subagent runs in an <b class="text-cyan-300">isolated context window</b> — 70-80% reduction in conductor context usage</div>

---

# Why This Works

<div class="mt-6 grid grid-cols-2 gap-4 text-sm">

<div class="p-4 bg-cyan-900/20 rounded-lg border border-cyan-500/20">
  <div class="font-bold text-cyan-300 mb-2">🎯 Focused Context</div>
  <div class="text-gray-300">Each agent gets only what it needs. Explorer sees the request; Planner sees findings; Implementer sees the plan.</div>
</div>

<div class="p-4 bg-blue-900/20 rounded-lg border border-blue-500/20">
  <div class="font-bold text-blue-300 mb-2">🔧 Right Tools, Right Time</div>
  <div class="text-gray-300">Planners can't accidentally edit. Implementers can't waste time researching. <b>Tool constraints = role enforcement.</b></div>
</div>

<div class="p-4 bg-indigo-900/20 rounded-lg border border-indigo-500/20">
  <div class="font-bold text-indigo-300 mb-2">⚡ Parallel When Possible</div>
  <div class="text-gray-300">VS Code 1.109+ runs independent agents simultaneously — <b>3-5x throughput</b> on parallelizable work</div>
</div>

<div class="p-4 bg-purple-900/20 rounded-lg border border-purple-500/20">
  <div class="font-bold text-purple-300 mb-2">✅ Quality Checkpoints</div>
  <div class="text-gray-300">Dedicated review gates between phases. Early catches cost minutes; late catches cost hours. <b>40-60% less rework.</b></div>
</div>

</div>

---
layout: center
class: text-center
---

<div class="relative">
  <div class="text-6xl mb-6">🎭</div>
  <h1 class="!text-4xl bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
    Community Systems
  </h1>
  <p class="text-gray-400 mt-4 text-lg">Two production-ready teams you can deploy today</p>
</div>

---

# Copilot Orchestra

<div class="mt-2">
<div class="text-sm text-gray-400 mb-3">
  <a href="https://github.com/ShepAlderson/copilot-orchestra" class="text-cyan-400">github.com/ShepAlderson/copilot-orchestra</a> — ADR-driven development with TDD enforcement
</div>

<div class="grid grid-cols-3 gap-3 text-sm mb-4">
  <div class="p-3 bg-blue-900/30 rounded-lg border border-blue-500/30 text-center">
    <div class="font-bold text-blue-300">📋 Planner</div>
    <div class="text-xs text-gray-400 mt-1">ADR docs + 3-10 phase plan</div>
  </div>
  <div class="p-3 bg-indigo-900/30 rounded-lg border border-indigo-500/30 text-center">
    <div class="font-bold text-indigo-300">⚡ Implementer</div>
    <div class="text-xs text-gray-400 mt-1">TDD: fail → code → pass</div>
  </div>
  <div class="p-3 bg-purple-900/30 rounded-lg border border-purple-500/30 text-center">
    <div class="font-bold text-purple-300">🔬 Reviewer</div>
    <div class="text-xs text-gray-400 mt-1">APPROVED / REVISION / FAILED</div>
  </div>
</div>

<div class="grid grid-cols-4 gap-3 text-center text-xs">
  <div class="p-2 bg-green-900/20 rounded border border-green-500/20">
    <div class="font-bold text-green-300">Quality</div>
    <div class="text-gray-300">70% → 90%+</div>
  </div>
  <div class="p-2 bg-green-900/20 rounded border border-green-500/20">
    <div class="font-bold text-green-300">Rework</div>
    <div class="text-gray-300">3-5x → 1-2x</div>
  </div>
  <div class="p-2 bg-green-900/20 rounded border border-green-500/20">
    <div class="font-bold text-green-300">Coverage</div>
    <div class="text-gray-300">60% → 85%+</div>
  </div>
  <div class="p-2 bg-green-900/20 rounded border border-green-500/20">
    <div class="font-bold text-green-300">Audit Trail</div>
    <div class="text-gray-300">None → Full</div>
  </div>
</div>
</div>

---

# GitHub Copilot Atlas

<div class="mt-2">
<div class="text-sm text-gray-400 mb-3">
  <a href="https://github.com/bigguy345/Github-Copilot-Atlas" class="text-cyan-400">github.com/bigguy345/Github-Copilot-Atlas</a> — Context-conscious 6-agent system with parallel research
</div>

<div class="grid grid-cols-3 gap-2 text-sm mb-4">
  <div class="p-2 bg-cyan-900/30 rounded border border-cyan-500/30 text-center">
    <div class="font-bold text-cyan-300 text-xs">🌐 Atlas</div>
    <div class="text-xs text-gray-400">Orchestrator</div>
  </div>
  <div class="p-2 bg-blue-900/30 rounded border border-blue-500/30 text-center">
    <div class="font-bold text-blue-300 text-xs">🔥 Prometheus</div>
    <div class="text-xs text-gray-400">Strategic Planner</div>
  </div>
  <div class="p-2 bg-indigo-900/30 rounded border border-indigo-500/30 text-center">
    <div class="font-bold text-indigo-300 text-xs">🔮 Oracle</div>
    <div class="text-xs text-gray-400">Researcher</div>
  </div>
  <div class="p-2 bg-purple-900/30 rounded border border-purple-500/30 text-center">
    <div class="font-bold text-purple-300 text-xs">⚡ Sisyphus</div>
    <div class="text-xs text-gray-400">Implementer</div>
  </div>
  <div class="p-2 bg-green-900/30 rounded border border-green-500/30 text-center">
    <div class="font-bold text-green-300 text-xs">🔍 Explorer</div>
    <div class="text-xs text-gray-400">Scout (read-only)</div>
  </div>
  <div class="p-2 bg-pink-900/30 rounded border border-pink-500/30 text-center">
    <div class="font-bold text-pink-300 text-xs">🔬 Code-Review</div>
    <div class="text-xs text-gray-400">Validator</div>
  </div>
</div>

<div class="p-3 bg-gradient-to-r from-cyan-900/30 to-blue-900/30 rounded-lg border border-cyan-500/20 text-sm">
  <div class="font-bold text-cyan-300 mb-1">💡 Key Innovation: Context Conservation</div>
  <div class="text-gray-300 text-xs">Oracle researches 50+ files → returns 2-page summary. Conductor sees summary only. Each subagent in isolated context → conductor retains 70-80% for coordination.</div>
</div>
</div>

---

# Orchestra vs Atlas

<div class="mt-6">

<div class="text-sm">

| Aspect | Copilot Orchestra | GitHub Copilot Atlas |
|--------|------------------|---------------------|
| **Agents** | 4 (conductor + 3) | 6 (conductor + 5) |
| **Focus** | ADR docs + strict TDD | Context conservation |
| **Parallel** | Sequential phases | Oracle + Explorer parallel |
| **Best For** | Audit trails, compliance | Large codebases, research-heavy |
| **Deploy Time** | ~15 minutes | ~30 minutes |

</div>

<div class="mt-4 grid grid-cols-2 gap-4 text-sm">
  <div class="p-3 bg-blue-900/20 rounded-lg border border-blue-500/20">
    <div class="font-bold text-blue-300">Use Orchestra when</div>
    <div class="text-gray-400 text-xs mt-1">You need structured docs, TDD enforcement, or compliance audit trails</div>
  </div>
  <div class="p-3 bg-cyan-900/20 rounded-lg border border-cyan-500/20">
    <div class="font-bold text-cyan-300">Use Atlas when</div>
    <div class="text-gray-400 text-xs mt-1">Context window is constraining, you need parallel research, or multi-domain analysis</div>
  </div>
</div>

</div>

---
layout: center
class: text-center
---

<div class="relative">
  <div class="text-6xl mb-6">🔨</div>
  <h1 class="!text-4xl bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
    Building Your Team
  </h1>
  <p class="text-gray-400 mt-4 text-lg">5-step guide to your own 4-agent system</p>
</div>

---

# Build in 5 Steps

<div class="mt-4 space-y-3 text-sm">

<div class="flex gap-4 items-start">
  <div class="w-8 h-8 bg-cyan-600 rounded-full flex items-center justify-center font-bold shrink-0">1</div>
  <div>
    <div class="font-bold text-cyan-300">Define Workflow Phases</div>
    <div class="text-gray-400">Map your development flow: Discovery → Planning → Implementation → Review</div>
  </div>
</div>

<div class="flex gap-4 items-start">
  <div class="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold shrink-0">2</div>
  <div>
    <div class="font-bold text-blue-300">Create the Conductor</div>
    <div class="text-gray-400">Coordinates phases, delegates to specialists, validates outputs. <b>Never implements.</b></div>
  </div>
</div>

<div class="flex gap-4 items-start">
  <div class="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center font-bold shrink-0">3</div>
  <div>
    <div class="font-bold text-indigo-300">Create Specialist Workers</div>
    <div class="text-gray-400">Planner (read-only), Implementer (edit), Reviewer (analyze) — each with constrained tools</div>
  </div>
</div>

<div class="flex gap-4 items-start">
  <div class="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center font-bold shrink-0">4</div>
  <div>
    <div class="font-bold text-purple-300">Test Agents Individually</div>
    <div class="text-gray-400">Run each agent in isolation to validate tool access and output quality before orchestrating</div>
  </div>
</div>

<div class="flex gap-4 items-start">
  <div class="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center font-bold shrink-0">5</div>
  <div>
    <div class="font-bold text-pink-300">Enable Parallel Execution</div>
    <div class="text-gray-400">VS Code 1.109+: run independent agents simultaneously for 3-5x throughput</div>
  </div>
</div>

</div>

---
layout: center
class: text-center
---

<div class="relative">
  <div class="text-6xl mb-6">🎯</div>
  <h1 class="!text-4xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
    Orchestration Patterns
  </h1>
  <p class="text-gray-400 mt-4 text-lg">4 proven strategies for different workflows</p>
</div>

---

# Four Patterns

<div class="mt-4 grid grid-cols-2 gap-4 text-sm">

<div class="p-4 bg-cyan-900/20 rounded-lg border border-cyan-500/20">
  <div class="font-bold text-cyan-300 mb-2">1️⃣ Linear Pipeline</div>
  <div class="text-gray-400 text-xs mb-2">Discovery → Plan → Implement → Review → Test</div>
  <div class="text-gray-300">Well-defined features, clear requirements. Simple, predictable, easy to debug.</div>
  <div class="text-cyan-400 text-xs mt-2">Example: Adding a single REST endpoint</div>
</div>

<div class="p-4 bg-blue-900/20 rounded-lg border border-blue-500/20">
  <div class="font-bold text-blue-300 mb-2">2️⃣ Iterative Refinement</div>
  <div class="text-gray-400 text-xs mb-2">Implement → Review → [Pass?] → Loop or Continue</div>
  <div class="text-gray-300">Quality-critical code. Reviewer returns NEEDS_REVISION → loop until APPROVED.</div>
  <div class="text-blue-400 text-xs mt-2">Example: OAuth with token refresh edge cases</div>
</div>

<div class="p-4 bg-indigo-900/20 rounded-lg border border-indigo-500/20">
  <div class="font-bold text-indigo-300 mb-2">3️⃣ Parallel Specialists</div>
  <div class="text-gray-400 text-xs mb-2">Plan → [Security + Perf + Docs in parallel] → Integrate</div>
  <div class="text-gray-300">Independent cross-cutting concerns. 3-5x faster validation, comprehensive coverage.</div>
  <div class="text-indigo-400 text-xs mt-2">Example: Full-stack feature touching auth, DB, API</div>
</div>

<div class="p-4 bg-purple-900/20 rounded-lg border border-purple-500/20">
  <div class="font-bold text-purple-300 mb-2">4️⃣ Hierarchical</div>
  <div class="text-gray-400 text-xs mb-2">Master → [Frontend + Backend Conductors] → Specialists</div>
  <div class="text-gray-300">Full-stack spanning 5+ subsystems. Sub-conductors manage domain specialists.</div>
  <div class="text-purple-400 text-xs mt-2">Example: Complete e-commerce checkout flow</div>
</div>

</div>

---

# What You Can Do Today

<div class="mt-4 grid grid-cols-3 gap-4 text-sm">

<div class="p-4 bg-green-900/20 rounded-lg border border-green-500/20">
  <div class="font-bold text-green-300 mb-2">⏱️ 15 Minutes</div>
  <div class="space-y-2 text-gray-300 text-xs">
    <div>• Review the 4-agent conductor system</div>
    <div>• Pick Orchestra or Atlas to explore</div>
    <div>• Identify one complex task in your backlog</div>
  </div>
</div>

<div class="p-4 bg-blue-900/20 rounded-lg border border-blue-500/20">
  <div class="font-bold text-blue-300 mb-2">🔧 2-4 Hours</div>
  <div class="space-y-2 text-gray-300 text-xs">
    <div>• Create .github/agents/ directory</div>
    <div>• Implement Conductor + 3 specialists</div>
    <div>• Test each agent individually</div>
    <div>• Run first orchestrated workflow</div>
  </div>
</div>

<div class="p-4 bg-purple-900/20 rounded-lg border border-purple-500/20">
  <div class="font-bold text-purple-300 mb-2">🚀 1-2 Weeks</div>
  <div class="space-y-2 text-gray-300 text-xs">
    <div>• Deploy full Orchestra or Atlas system</div>
    <div>• Add domain-specific specialists</div>
    <div>• Measure before/after metrics</div>
    <div>• Present results to leadership</div>
  </div>
</div>

</div>

---

# Related Patterns & Resources

<div class="mt-4 grid grid-cols-2 gap-4 text-sm">

<div>
<div class="font-bold text-cyan-300 mb-3">🔗 Related Patterns</div>
<div class="space-y-2">
  <div class="p-2 bg-gray-800/50 rounded">
    <span class="text-blue-300 font-medium">Multi-Step Tasks</span>
    <span class="text-gray-500"> — Sequential phases without role specialization</span>
  </div>
  <div class="p-2 bg-gray-800/50 rounded">
    <span class="text-blue-300 font-medium">Parallel Execution</span>
    <span class="text-gray-500"> — Branch-level parallelism with worktrees</span>
  </div>
  <div class="p-2 bg-gray-800/50 rounded">
    <span class="text-blue-300 font-medium">Agentic SDLC</span>
    <span class="text-gray-500"> — Org-wide agent scaling patterns</span>
  </div>
</div>
</div>

<div>
<div class="font-bold text-cyan-300 mb-3">📚 Official Docs</div>
<div class="space-y-2 text-xs">
  <div class="p-2 bg-gray-800/50 rounded">
    📖 <a href="https://code.visualstudio.com/docs/copilot/customization/custom-agents" class="text-cyan-400">Custom Agents in VS Code</a>
  </div>
  <div class="p-2 bg-gray-800/50 rounded">
    📖 <a href="https://code.visualstudio.com/docs/copilot/agents/subagents" class="text-cyan-400">Subagents & Context Isolation</a>
  </div>
  <div class="p-2 bg-gray-800/50 rounded">
    🐙 <a href="https://github.com/ShepAlderson/copilot-orchestra" class="text-cyan-400">Copilot Orchestra</a>
  </div>
  <div class="p-2 bg-gray-800/50 rounded">
    🐙 <a href="https://github.com/bigguy345/Github-Copilot-Atlas" class="text-cyan-400">GitHub Copilot Atlas</a>
  </div>
</div>
</div>

</div>

---
layout: end
---

<div class="h-full flex flex-col items-center justify-center">
  <h1 class="!text-4xl bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
    Agent Teams
  </h1>
  <p class="text-gray-400 mt-4">Coordinating Specialized AI Roles</p>
  <div class="mt-8 text-sm text-gray-500">CopilotTraining · Tech Talk</div>
</div>
