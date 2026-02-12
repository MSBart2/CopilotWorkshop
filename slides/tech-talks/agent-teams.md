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
status: active
updated: 2026-02-12
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

# The Question

<div class="mt-8 p-6 bg-gradient-to-br from-cyan-900/40 to-blue-900/40 rounded-xl border-2 border-cyan-500/30">
  <div class="text-2xl font-bold text-cyan-300 mb-4">
    "How do I coordinate multiple specialized agents to handle complex development tasks that exceed single-agent capacity?"
  </div>
  <div class="text-gray-300 text-lg">
    When tasks require planning, implementation, review, and testing—different cognitive modes that single agents struggle to balance.
  </div>
</div>

---

# The Problem

<div class="mt-6 space-y-3 text-sm">

<div class="p-4 bg-red-900/30 rounded-lg border-l-4 border-red-500">
  <div class="font-bold text-red-400">Complex tasks exceed single-agent capacity</div>
  <div class="text-gray-300 mt-1">Real development requires planning, implementation, review, testing—different cognitive modes that single agents struggle to balance simultaneously</div>
</div>

<div class="p-4 bg-yellow-900/30 rounded-lg border-l-4 border-yellow-500">
  <div class="font-bold text-yellow-400">Context pollution degrades quality</div>
  <div class="text-gray-300 mt-1">One agent juggling planning and coding accumulates 50-80% of its context window on irrelevant information, reducing output quality by 30-40%</div>
</div>

<div class="p-4 bg-orange-900/30 rounded-lg border-l-4 border-orange-500">
  <div class="font-bold text-orange-400">Tool overload creates confusion</div>
  <div class="text-gray-300 mt-1">Agent with 15+ tools may misuse edit tools during planning or research tools during implementation → wasted iterations</div>
</div>

<div class="p-4 bg-purple-900/30 rounded-lg border-l-4 border-purple-500">
  <div class="font-bold text-purple-400">No specialization, no expertise</div>
  <div class="text-gray-300 mt-1">General-purpose agents: 60-70% effectiveness; specialists tuned for one mode: 90-95% effectiveness</div>
</div>

</div>

---

# The Solution: Squad

<div class="mt-4">

<div class="p-5 bg-gradient-to-br from-green-900/60 to-blue-900/60 rounded-lg border-2 border-green-400 mb-4">
  <div class="text-xl font-bold text-green-300 mb-3">Production-Ready Agent Teams</div>
  <div class="text-gray-200 space-y-2 text-sm">
    <div>✅ <b>Persistent Specialists</b> — Lead, Frontend, Backend, Tester agents that live in your repo and grow with your code</div>
    <div>✅ <b>Context Isolation</b> — Each agent in separate window (6.6% coordinator overhead, 93%+ available for work)</div>
    <div>✅ <b>Parallel Execution</b> — "Team, build the login page" fans out to all relevant agents simultaneously (3-5x throughput)</div>
    <div>✅ <b>Compounding Knowledge</b> — Agents write learnings to history.md after every session, read shared decisions.md before every task</div>
  </div>
</div>

<div class="text-center">
  <div class="text-sm text-cyan-300 font-medium mb-2">Install in under 10 minutes</div>
  <div class="p-3 bg-gray-900/80 rounded-lg font-mono text-green-400 text-sm inline-block">
    npx github:bradygaster/squad
  </div>
</div>

</div>

---

# Table of Contents

<div class="mt-6 grid grid-cols-2 gap-4">

<div @click="$nav.go(7)" class="cursor-pointer p-4 bg-gradient-to-br from-cyan-900/40 to-cyan-900/20 rounded-xl border border-cyan-500/30 hover:border-cyan-400 transition-all">
  <div class="text-2xl mb-2">🏗️</div>
  <div class="font-bold text-cyan-300">Core Architecture</div>
  <div class="text-sm text-gray-400 mt-1">Conductor-delegate pattern, context isolation, tool constraints</div>
</div>

<div @click="$nav.go(11)" class="cursor-pointer p-4 bg-gradient-to-br from-blue-900/40 to-blue-900/20 rounded-xl border border-blue-500/30 hover:border-blue-400 transition-all">
  <div class="text-2xl mb-2">🎯</div>
  <div class="font-bold text-blue-300">Squad System</div>
  <div class="text-sm text-gray-400 mt-1">Production-ready agent teams with persistent memory</div>
</div>

<div @click="$nav.go(17)" class="cursor-pointer p-4 bg-gradient-to-br from-indigo-900/40 to-indigo-900/20 rounded-xl border border-indigo-500/30 hover:border-indigo-400 transition-all">
  <div class="text-2xl mb-2">🚀</div>
  <div class="font-bold text-indigo-300">Getting Started</div>
  <div class="text-sm text-gray-400 mt-1">Zero to working AI team in 10 minutes</div>
</div>

<div @click="$nav.go(22)" class="cursor-pointer p-4 bg-gradient-to-br from-purple-900/40 to-purple-900/20 rounded-xl border border-purple-500/30 hover:border-purple-400 transition-all">
  <div class="text-2xl mb-2">🎭</div>
  <div class="font-bold text-purple-300">Orchestration Patterns</div>
  <div class="text-sm text-gray-400 mt-1">4 proven coordination strategies</div>
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
  <div class="p-2 bg-green-900/20 rounded border-l-3 border-green-500">Persistent agent memory</div>
  <div class="p-2 bg-green-900/20 rounded border-l-3 border-green-500">Parallel independent work</div>
</div>
</div>

<div>
<div class="font-bold text-red-400 mb-3">🛑 Move Away From</div>
<div class="space-y-2">
  <div class="p-2 bg-red-900/20 rounded border-l-3 border-red-500">Single agent for everything</div>
  <div class="p-2 bg-red-900/20 rounded border-l-3 border-red-500">Universal tool access</div>
  <div class="p-2 bg-red-900/20 rounded border-l-3 border-red-500">Implicit phase transitions</div>
  <div class="p-2 bg-red-900/20 rounded border-l-3 border-red-500">Raw data returns from subagents</div>
  <div class="p-2 bg-red-900/20 rounded border-l-3 border-red-500">Sequential when parallel possible</div>
</div>
</div>

</div>

<div class="mt-4 p-3 bg-cyan-900/20 rounded-lg border border-cyan-500/20 text-sm text-gray-300">
  <b class="text-cyan-300">Example:</b> Before: Single agent with 15 tools, 80% context on prep work, mediocre output after 4 hours. After: Coordinator delegates to specialists (isolated contexts), each at 90%+ effectiveness. Total time: 1.5 hours with approval gates.
</div>

</div>

---

# When to Use This Pattern

<div class="mt-4">

<div class="grid grid-cols-2 gap-4 text-sm">

<div>
<div class="font-bold text-green-400 mb-2">✅ Use Agent Teams When</div>
<div class="space-y-2">
  <div class="p-2 bg-green-900/20 rounded">3+ cognitive modes needed (plan/code/review)</div>
  <div class="p-2 bg-green-900/20 rounded">Context window hits 70-80%+ before implementation</div>
  <div class="p-2 bg-green-900/20 rounded">Separation of concerns matters</div>
  <div class="p-2 bg-green-900/20 rounded">Knowledge should compound across sessions</div>
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
name: core-architecture
---

<div class="relative">
  <div class="text-6xl mb-6">🏗️</div>
  <h1 class="!text-4xl bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
    Core Architecture
  </h1>
  <p class="text-gray-400 mt-4 text-lg">Conductor-delegate pattern with tool-enforced boundaries</p>
</div>

---

# The Coordinator Pattern

<div class="mt-2">

<div class="grid grid-cols-5 gap-2 text-center text-xs mb-3">

<div class="col-span-5 p-3 bg-gradient-to-r from-cyan-900/40 to-blue-900/40 rounded-lg border border-cyan-500/30">
  <div class="font-bold text-cyan-300 text-sm">🎼 COORDINATOR</div>
  <div class="text-gray-400 text-xs mt-1">Interprets requests → routes via table → spawns specialists → validates → aggregates</div>
  <div class="text-yellow-400 text-xs mt-1 font-bold">NEVER implements directly</div>
</div>

<div class="col-span-5 text-center text-gray-500 text-xs">↓ delegates to isolated subagents ↓</div>

<div class="p-2 bg-green-900/30 rounded-lg border border-green-500/30">
  <div class="font-bold text-green-300 text-xs">🏗️ Lead</div>
  <div class="text-xs text-gray-400 mt-1">Scope, review</div>
</div>

<div class="p-2 bg-blue-900/30 rounded-lg border border-blue-500/30">
  <div class="font-bold text-blue-300 text-xs">⚛️ Frontend</div>
  <div class="text-xs text-gray-400 mt-1">UI, React</div>
</div>

<div class="p-2 bg-indigo-900/30 rounded-lg border border-indigo-500/30">
  <div class="font-bold text-indigo-300 text-xs">🔧 Backend</div>
  <div class="text-xs text-gray-400 mt-1">API, DB</div>
</div>

<div class="p-2 bg-purple-900/30 rounded-lg border border-purple-500/30">
  <div class="font-bold text-purple-300 text-xs">🧪 Tester</div>
  <div class="text-xs text-gray-400 mt-1">Tests, QA</div>
</div>

<div class="p-2 bg-pink-900/30 rounded-lg border border-pink-500/30">
  <div class="font-bold text-pink-300 text-xs">📋 Scribe</div>
  <div class="text-xs text-gray-400 mt-1">Memory</div>
</div>

</div>

<div class="text-xs text-gray-400 text-center mb-2">Each specialist in <b class="text-cyan-300">isolated context window</b> — 6.6% coordinator overhead, 93%+ available for work</div>

<div class="grid grid-cols-2 gap-2 text-xs">
  <div class="p-2 bg-cyan-900/20 rounded border border-cyan-500/20">
    <div class="font-bold text-cyan-300">🎯 Focused Context</div>
    <div class="text-gray-300">Each agent gets only what it needs. Lead gets architecture, Frontend gets UI, Backend gets APIs.</div>
  </div>
  <div class="p-2 bg-blue-900/20 rounded border border-blue-500/20">
    <div class="font-bold text-blue-300">🔧 Right Tools</div>
    <div class="text-gray-300">Tool constraints = role enforcement. Planners can't edit; implementers can't over-research.</div>
  </div>
</div>

</div>

---

# Why This Works

<div class="mt-4 grid grid-cols-2 gap-3 text-xs">

<div class="p-3 bg-cyan-900/20 rounded-lg border border-cyan-500/20">
  <div class="font-bold text-cyan-300 mb-2">🎯 Focused Context</div>
  <div class="text-gray-300">Each agent gets only what it needs. No accumulated context from other domains. Lead at 1.7%, Frontend at 1.2%, Backend at 1.9% of 200K window.</div>
</div>

<div class="p-3 bg-blue-900/20 rounded-lg border border-blue-500/20">
  <div class="font-bold text-blue-300 mb-2">⚡ Parallel Execution</div>
  <div class="text-gray-300">"Team, build the login page" → all agents start simultaneously. 3-5x throughput on parallelizable work. Coordinator chains follow-up automatically.</div>
</div>

<div class="p-3 bg-indigo-900/20 rounded-lg border border-indigo-500/20">
  <div class="font-bold text-indigo-300 mb-2">✅ Quality Checkpoints</div>
  <div class="text-gray-300">Reviewer protocol: rejected work must be revised by a <i>different</i> agent. No self-review loops. 40-60% less rework.</div>
</div>

<div class="p-3 bg-purple-900/20 rounded-lg border border-purple-500/20">
  <div class="font-bold text-purple-300 mb-2">🧠 Persistent Memory</div>
  <div class="text-gray-300">Agents write learnings to history.md after every session. Knowledge compounds. Week 4 agents know your conventions, patterns, preferences.</div>
</div>

</div>

<div class="mt-3 p-3 bg-gradient-to-r from-green-900/30 to-blue-900/30 rounded-lg border border-green-500/20 text-xs">
  <div class="font-bold text-green-300 mb-1">💡 Specialization Advantage</div>
  <div class="text-gray-300">Backend agent tuned for APIs, auth, data modeling outperforms generalist by 20-30%. Same for Frontend (UI, state) and Testing (edge cases, integration). Team of specialists beats single generalist.</div>
</div>

---

# Tool Assignment Guidelines

<div class="mt-4">

<div class="text-xs">

| Agent Role | Appropriate Tools | Rationale |
|------------|-------------------|-----------|
| **Research / Discovery** | `search`, `fetch`, `githubRepo` | Read-only exploration, no modification risk |
| **Planning / Strategy** | `search`, `fetch`, `create` (docs only) | Can document plans, can't implement |
| **Implementation** | `edit`, `create`, `delete`, `search` | Full editing power, focused on execution |
| **Review / Validation** | `search`, `fetch`, `analysis`, `linter` | Read + analyze, can't modify implementation |
| **Testing** | `search`, `create`, `runTests` | Create tests + verify execution |

</div>

<div class="mt-4 p-3 bg-yellow-900/20 rounded-lg border-l-4 border-yellow-500 text-xs">
  <div class="font-bold text-yellow-400">Why Tool Restrictions?</div>
  <div class="text-gray-300 mt-1">Without constraints: Planner "helpfully" fixes typos → now it's implementing. Reviewer "just fixes this one thing" → now it's implementing + biasing review. <b>With constraints:</b> VS Code validates tool availability before invocation. No accidental context mixing possible.</div>
</div>

</div>

---
layout: center
class: text-center
name: squad-system
---

<div class="relative">
  <div class="text-6xl mb-6">🎯</div>
  <h1 class="!text-4xl bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
    Squad: Production-Ready Teams
  </h1>
  <p class="text-gray-400 mt-4 text-lg">A persistent AI development team that lives in your repo</p>
</div>

---

# What Is Squad?

<div class="mt-2">

<div class="p-4 bg-gradient-to-r from-cyan-900/40 to-blue-900/40 rounded-lg border-2 border-cyan-500/30 mb-3">
  <div class="text-lg font-bold text-cyan-300 mb-2">github.com/bradygaster/squad</div>
  <div class="text-gray-200 text-sm">
    Squad gives you an AI development team through GitHub Copilot. Describe what you're building, and Squad proposes specialists—lead, frontend, backend, tester—that <b>persist as files in your repo</b>. Each agent runs in its own context window, reads its own history and shared team decisions, and writes back what it learned. <b>Knowledge compounds across sessions.</b>
  </div>
</div>

<div class="grid grid-cols-2 gap-3 text-xs">
  <div class="p-3 bg-green-900/20 rounded-lg border border-green-500/20">
    <div class="font-bold text-green-300 mb-1">✅ Not a Chatbot Wearing Hats</div>
    <div class="text-gray-300">Each team member is spawned as a real subagent with its own tools, memory, and expertise.</div>
  </div>
  <div class="p-3 bg-blue-900/20 rounded-lg border border-blue-500/20">
    <div class="font-bold text-blue-300 mb-1">✅ Production-Ready Today</div>
    <div class="text-gray-300">Install in &lt;10 minutes. Full team with routing, memory, ceremonies, and GitHub Issues integration.</div>
  </div>
</div>

</div>

---

# Squad Architecture

<div class="mt-2 text-xs">

```
┌─────────────────────────────────┐
│     "Team, build login page"    │  ← You
└─────────────────────────────────┘
              ↓
┌─────────────────────────────────┐
│      SQUAD COORDINATOR          │
│  • Routes via routing.md        │
│  • Spawns agents in parallel    │
│  • Enforces reviewer protocol   │
│  • Cost-first model selection   │
└─────────────────────────────────┘
     │       │       │       │
     ▼       ▼       ▼       ▼
┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐
│ Lead │ │  FE  │ │  BE  │ │ Test │
│ Scope│ │  UI  │ │ APIs │ │  QA  │
└──────┘ └──────┘ └──────┘ └──────┘
  Own      Own      Own      Own
 Context  Context  Context  Context
     │       │       │       │
     └───────┴───────┴───────┘
              ↓
┌─────────────────────────────────┐
│   📋 SCRIBE (silent)            │
│  • Merges decisions/inbox       │
│  • Logs sessions to log/        │
│  • Never speaks to user         │
└─────────────────────────────────┘
              ↓
┌─────────────────────────────────┐
│   🧠 SHARED MEMORY              │
│  • decisions.md (all read)      │
│  • history.md (personal)        │
│  • skills/ (earned over time)   │
└─────────────────────────────────┘
```

</div>

---

# Squad File Structure

<div class="mt-2">

<div class="grid grid-cols-2 gap-3 text-xs">

<div class="font-mono bg-gray-900/60 p-3 rounded-lg">
<div class="text-cyan-400">.ai-team/</div>
<div class="ml-3 text-gray-300">├── team.md</div>
<div class="ml-3 text-gray-300">├── routing.md</div>
<div class="ml-3 text-gray-300">├── ceremonies.md</div>
<div class="ml-3 text-gray-300">├── decisions.md</div>
<div class="ml-3 text-gray-300">├── decisions/inbox/</div>
<div class="ml-3 text-gray-300">├── agents/</div>
<div class="ml-5 text-gray-400">│   ├── {name}/</div>
<div class="ml-7 text-gray-500">│   │   ├── charter.md</div>
<div class="ml-7 text-gray-500">│   │   └── history.md</div>
<div class="ml-3 text-gray-300">├── skills/</div>
<div class="ml-3 text-gray-300">└── log/</div>
</div>

<div class="space-y-2">
  <div class="p-2 bg-cyan-900/20 rounded border border-cyan-500/20">
    <div class="font-bold text-cyan-300">team.md</div>
    <div class="text-gray-400">Roster — who's on the team</div>
  </div>
  <div class="p-2 bg-blue-900/20 rounded border border-blue-500/20">
    <div class="font-bold text-blue-300">routing.md</div>
    <div class="text-gray-400">Who handles what (routing table)</div>
  </div>
  <div class="p-2 bg-indigo-900/20 rounded border border-indigo-500/20">
    <div class="font-bold text-indigo-300">charter.md</div>
    <div class="text-gray-400">Identity, expertise, boundaries, voice</div>
  </div>
  <div class="p-2 bg-purple-900/20 rounded border border-purple-500/20">
    <div class="font-bold text-purple-300">history.md</div>
    <div class="text-gray-400">What agent knows about YOUR project</div>
  </div>
</div>

</div>

<div class="mt-2 p-2 bg-green-900/20 rounded-lg border-l-4 border-green-500 text-xs">
  <b class="text-green-400">Commit this folder.</b> <span class="text-gray-300">Anyone who clones your repo gets the team—with all accumulated knowledge.</span>
</div>

</div>

---

# Squad Memory System

<div class="mt-2">

<div class="text-xs">

| Layer | What | Who Writes | Who Reads |
|-------|------|-----------|-----------|
| `charter.md` | Identity, expertise, voice | Squad (at init) | The agent itself |
| `history.md` | Project-specific learnings | Each agent, after every session | That agent only |
| `decisions.md` | Team-wide decisions | Any agent (via inbox) | All agents |
| `skills/` | Reusable patterns (earned) | Agents from real work | All agents |
| `log/` | Session history | Scribe | Anyone (searchable) |

</div>

<div class="mt-3 p-3 bg-gradient-to-r from-cyan-900/30 to-blue-900/30 rounded-lg border border-cyan-500/20 text-xs">
  <div class="font-bold text-cyan-300 mb-2">💡 How Knowledge Compounds Over Time</div>
  <div class="grid grid-cols-3 gap-2 text-gray-300">
    <div>
      <div class="font-bold text-green-400">🌱 Week 1</div>
      <div>Project description, tech stack, user name</div>
    </div>
    <div>
      <div class="font-bold text-blue-400">🌿 Week 4</div>
      <div>Conventions, patterns, API design, test strategies</div>
    </div>
    <div>
      <div class="font-bold text-purple-400">🌳 Week 12</div>
      <div>Full architecture, tech debt, regressions, performance</div>
    </div>
  </div>
</div>

</div>

---

# Key Squad Innovations

<div class="mt-3 space-y-2 text-xs">

<div class="p-3 bg-cyan-900/20 rounded-lg border border-cyan-500/20">
  <div class="font-bold text-cyan-300 mb-1">🎯 Per-Agent Model Selection (Cost-First)</div>
  <div class="text-gray-300">Writing code → Claude Sonnet 4.5 (Standard). Non-code work (docs, planning, triage) → Claude Haiku 4.5 (Fast). Visual/design → Claude Opus 4.5 (Premium).</div>
</div>

<div class="p-3 bg-blue-900/20 rounded-lg border border-blue-500/20">
  <div class="font-bold text-blue-300 mb-1">✅ Reviewer Protocol — No Self-Review Loops</div>
  <div class="text-gray-300">Agent A submits work → Reviewer rejects → <b>Agent A locked out</b> → Agent B must revise. If Agent B also rejected, Agent C takes over. Prevents circular "fixing" loops.</div>
</div>

<div class="p-3 bg-indigo-900/20 rounded-lg border border-indigo-500/20">
  <div class="font-bold text-indigo-300 mb-1">🤖 Ralph — Autonomous Work Monitor</div>
  <div class="text-gray-300">Continuously checks for pending work—open issues, draft PRs, review feedback, CI failures. Self-chains: agents complete → Ralph checks → triage → assign → spawn → repeat. Team never sits idle.</div>
</div>

<div class="p-3 bg-purple-900/20 rounded-lg border border-purple-500/20">
  <div class="font-bold text-purple-300 mb-1">🎭 Ceremonies — Structured Team Meetings</div>
  <div class="text-gray-300"><b>Design Review:</b> Triggers before multi-agent tasks. Lead gets each agent's perspective on interfaces, risks, contracts. <b>Retrospective:</b> Triggers after failures. Focused root-cause analysis.</div>
</div>

</div>

---
layout: center
class: text-center
name: getting-started
---

<div class="relative">
  <div class="text-6xl mb-6">🚀</div>
  <h1 class="!text-4xl bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
    Getting Started with Squad
  </h1>
  <p class="text-gray-400 mt-4 text-lg">From zero to a working AI team in under 10 minutes</p>
</div>

---

# Step 1: Install Squad

<div class="mt-4">

<div class="p-4 bg-gray-900/80 rounded-lg border-2 border-cyan-500/30 mb-4">
  <div class="font-mono text-green-400 text-sm mb-2">
    mkdir my-project && cd my-project<br/>
    git init<br/>
    npx github:bradygaster/squad
  </div>
</div>

<div class="text-sm text-gray-300">
  This copies <span class="font-mono text-cyan-400">squad.agent.md</span> into <span class="font-mono text-cyan-400">.github/agents/</span> and installs templates. Your actual team (<span class="font-mono text-cyan-400">.ai-team/</span>) is created at runtime when you first talk to Squad.
</div>

</div>

---

# Step 2: Form Your Team

<div class="mt-2 text-xs">

<div class="p-3 bg-blue-900/20 rounded-lg border border-blue-500/20 mb-3">
  <div class="font-mono text-cyan-300 mb-2">
    You: "I'm starting a new project. Set up the team.<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Here's what I'm building: a recipe sharing app with React and Node."
  </div>
</div>

<div class="p-3 bg-gradient-to-r from-cyan-900/30 to-blue-900/30 rounded-lg border border-cyan-500/20">
  <div class="font-bold text-cyan-300 mb-2">Squad proposes:</div>
  <div class="grid grid-cols-2 gap-2 text-gray-300">
    <div>🏗️ <b>Ripley</b> — Lead</div>
    <div class="text-xs opacity-70">Scope, decisions, code review</div>
    <div>⚛️ <b>Dallas</b> — Frontend Dev</div>
    <div class="text-xs opacity-70">React, UI, components</div>
    <div>🔧 <b>Kane</b> — Backend Dev</div>
    <div class="text-xs opacity-70">APIs, database, services</div>
    <div>🧪 <b>Lambert</b> — Tester</div>
    <div class="text-xs opacity-70">Tests, quality, edge cases</div>
    <div>📋 <b>Scribe</b> — (silent)</div>
    <div class="text-xs opacity-70">Memory, decisions, logs</div>
  </div>
</div>

<div class="mt-3 text-sm text-gray-300">
  You confirm (or adjust roles/add someone), and Squad creates the full <span class="font-mono text-cyan-400">.ai-team/</span> directory with charters, histories, and routing rules.
</div>

</div>

---

# Step 3: Put the Team to Work

<div class="mt-2 text-xs">

<div class="grid grid-cols-2 gap-3">

<div class="p-3 bg-cyan-900/20 rounded-lg border border-cyan-500/20">
  <div class="font-bold text-cyan-300 mb-2">Name an agent directly</div>
  <div class="font-mono text-green-400 mb-2">
    > Ripley, fix the error handling
  </div>
  <div class="text-gray-400">Squad spawns Ripley specifically.</div>
</div>

<div class="p-3 bg-blue-900/20 rounded-lg border border-blue-500/20">
  <div class="font-bold text-blue-300 mb-2">Fan out to the whole team</div>
  <div class="font-mono text-green-400 mb-2">
    > Team, build the login page
  </div>
  <div class="text-gray-400">All relevant agents launch in parallel. Coordinator chains follow-up automatically.</div>
</div>

<div class="p-3 bg-indigo-900/20 rounded-lg border border-indigo-500/20">
  <div class="font-bold text-indigo-300 mb-2">Smart routing</div>
  <div class="font-mono text-green-400 mb-2">
    > Add input validation
  </div>
  <div class="text-gray-400">Squad checks routing.md, may launch anticipatory agents (tester writes validation test cases).</div>
</div>

<div class="p-3 bg-purple-900/20 rounded-lg border border-purple-500/20">
  <div class="font-bold text-purple-300 mb-2">Grow the team</div>
  <div class="font-mono text-green-400 mb-2">
    > I need a DevOps person
  </div>
  <div class="text-gray-400">Squad generates charter with project context. Immediately productive.</div>
</div>

</div>

</div>

---
layout: center
class: text-center
name: orchestration-patterns
---

<div class="relative">
  <div class="text-6xl mb-6">🎭</div>
  <h1 class="!text-4xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
    Orchestration Patterns
  </h1>
  <p class="text-gray-400 mt-4 text-lg">4 proven coordination strategies for different workflows</p>
</div>

---

# Four Orchestration Patterns

<div class="mt-3 grid grid-cols-2 gap-3 text-xs">

<div class="p-3 bg-cyan-900/20 rounded-lg border border-cyan-500/20">
  <div class="font-bold text-cyan-300 mb-2">1️⃣ Linear Pipeline</div>
  <div class="text-gray-400 text-xs mb-2">Discovery → Plan → Implement → Review → Test</div>
  <div class="text-gray-300">Well-defined features, clear requirements. Simple, predictable, easy to debug.</div>
  <div class="text-cyan-400 text-xs mt-2">Example: Adding a single REST endpoint</div>
</div>

<div class="p-3 bg-blue-900/20 rounded-lg border border-blue-500/20">
  <div class="font-bold text-blue-300 mb-2">2️⃣ Iterative Refinement</div>
  <div class="text-gray-400 text-xs mb-2">Implement → Review → [Pass?] → Loop or Continue</div>
  <div class="text-gray-300">Quality-critical code. Reviewer returns NEEDS_REVISION → loop until APPROVED.</div>
  <div class="text-blue-400 text-xs mt-2">Example: OAuth with token refresh edge cases</div>
</div>

<div class="p-3 bg-indigo-900/20 rounded-lg border border-indigo-500/20">
  <div class="font-bold text-indigo-300 mb-2">3️⃣ Parallel Specialists</div>
  <div class="text-gray-400 text-xs mb-2">Plan → [Security + Perf + Docs in parallel] → Integrate</div>
  <div class="text-gray-300">Independent cross-cutting concerns. 3-5x faster validation, comprehensive coverage.</div>
  <div class="text-indigo-400 text-xs mt-2">Example: Full-stack feature touching auth, DB, API</div>
</div>

<div class="p-3 bg-purple-900/20 rounded-lg border border-purple-500/20">
  <div class="font-bold text-purple-300 mb-2">4️⃣ Hierarchical</div>
  <div class="text-gray-400 text-xs mb-2">Master → [Frontend + Backend Conductors] → Specialists</div>
  <div class="text-gray-300">Full-stack spanning 5+ subsystems. Sub-conductors manage domain specialists.</div>
  <div class="text-purple-400 text-xs mt-2">Example: Complete e-commerce checkout flow</div>
</div>

</div>

---

# Use Case: Full-Stack Auth with Squad

<div class="mt-2 text-xs">

<div class="p-3 bg-gradient-to-r from-cyan-900/30 to-blue-900/30 rounded-lg border border-cyan-500/20 mb-3">
  <div class="font-bold text-cyan-300 mb-2">The Scenario</div>
  <div class="text-gray-300">
    Building a user authentication system requires coordinated work across frontend (login form, session management), backend (auth endpoints, token handling), testing (security edge cases), and architecture (token refresh, session storage). A single agent juggling all four domains loses context and produces mediocre results.
  </div>
</div>

<div class="p-3 bg-blue-900/20 rounded-lg border border-blue-500/20 mb-3">
  <div class="font-bold text-blue-300 mb-2">The Solution: Squad Fan-Out</div>
  <div class="font-mono text-green-400 text-xs mb-2">
    You: "Team, build the authentication system"
  </div>
  <div class="text-gray-300">
    🏗️ Lead — scoping requirements, defining contracts<br/>
    ⚛️ Frontend — building login form, session UI<br/>
    🔧 Backend — auth endpoints, JWT handling<br/>
    🧪 Tester — writing test cases from spec<br/>
    ↓ agents finish, coordinator chains follow-up<br/>
    🧪 Tester — edge cases reveal token refresh gap<br/>
    🔧 Backend — picks up edge case automatically
  </div>
</div>

<div class="grid grid-cols-2 gap-2">
  <div class="p-2 bg-green-900/20 rounded border border-green-500/20">
    <b class="text-green-400">Result:</b> <span class="text-gray-300">4 agents in parallel vs. 1 context-switching. Knowledge compounds after sessions. Lead reviews, can reject → different agent must revise.</span>
  </div>
  <div class="p-2 bg-cyan-900/20 rounded border border-cyan-500/20">
    <b class="text-cyan-400">Artifact:</b> <span class="text-gray-300">decisions.md captures JWT format, session storage, endpoint contracts for future reference.</span>
  </div>
</div>

</div>

---

# What You Can Do Today

<div class="mt-3 grid grid-cols-3 gap-3 text-xs">

<div class="p-3 bg-green-900/20 rounded-lg border border-green-500/20">
  <div class="font-bold text-green-300 mb-2">⏱️ 10 Minutes</div>
  <div class="space-y-2 text-gray-300">
    <div>• Install Squad: <code>npx github:bradygaster/squad</code></div>
    <div>• Form your team by describing your project</div>
    <div>• Give first task: "Team, build [something small]"</div>
  </div>
</div>

<div class="p-3 bg-blue-900/20 rounded-lg border border-blue-500/20">
  <div class="font-bold text-blue-300 mb-2">🔧 1-2 Hours</div>
  <div class="space-y-2 text-gray-300">
    <div>• Run 3-5 tasks to let agents accumulate history.md knowledge</div>
    <div>• Try direct naming vs. fan-out ("Team, build...")</div>
    <div>• Check .ai-team/decisions.md for captured decisions</div>
    <div>• Add a new team member: "I need a DevOps person"</div>
  </div>
</div>

<div class="p-3 bg-purple-900/20 rounded-lg border border-purple-500/20">
  <div class="font-bold text-purple-300 mb-2">🚀 1-2 Weeks</div>
  <div class="space-y-2 text-gray-300">
    <div>• Enable GitHub Issues integration with label-based triage</div>
    <div>• Activate Ralph (work monitor) for autonomous backlog processing</div>
    <div>• Export/import trained teams across projects</div>
    <div>• Measure before/after: time, rework, quality metrics</div>
  </div>
</div>


</div>

---

# Related Patterns & Resources

<div class="mt-3 grid grid-cols-2 gap-3 text-xs">

<div>
<div class="font-bold text-cyan-300 mb-2">🔗 Related Patterns</div>
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
  <div class="p-2 bg-gray-800/50 rounded">
    <span class="text-blue-300 font-medium">Custom Agents (Workshop)</span>
    <span class="text-gray-500"> — Hands-on exercises for building agents</span>
  </div>
</div>
</div>

<div>
<div class="font-bold text-cyan-300 mb-2">📚 Official Docs</div>
<div class="space-y-2">
  <div class="p-2 bg-gray-800/50 rounded">
    📖 <a href="https://code.visualstudio.com/docs/copilot/customization/custom-agents" class="text-cyan-400">Custom Agents in VS Code</a>
  </div>
  <div class="p-2 bg-gray-800/50 rounded">
    📖 <a href="https://code.visualstudio.com/docs/copilot/agents/subagents" class="text-cyan-400">Subagents & Context Isolation</a>
  </div>
  <div class="p-2 bg-gray-800/50 rounded">
    📖 <a href="https://code.visualstudio.com/updates/v1_109#_agent-orchestration" class="text-cyan-400">VS Code 1.109 Agent Orchestration</a>
  </div>
  <div class="p-2 bg-gray-800/50 rounded">
    🐙 <a href="https://github.com/bradygaster/squad" class="text-cyan-400">Squad Repository</a>
  </div>
  <div class="p-2 bg-gray-800/50 rounded">
    📖 <a href="https://github.com/bradygaster/squad/blob/main/docs/guide.md" class="text-cyan-400">Squad Product Guide</a>
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
