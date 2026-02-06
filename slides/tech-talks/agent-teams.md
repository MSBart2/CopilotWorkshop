---
theme: default
background: https://source.unsplash.com/collection/94734566/1920x1080
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Agent Teams: When You Need Specialized Roles
  CopilotTraining Tech Talk
drawings:
  persist: false
transition: slide-left
title: Agent Teams - When You Need Specialized Roles
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
When You Need Specialized Roles
</span>
</div>
<div class="mt-8 text-lg opacity-70 relative z-10">
Coordinate specialized agents working together like human teams
</div>
<div class="mt-6 w-32 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full relative z-10"></div>
</div>

<div class="abs-br m-6 flex gap-2">
<span class="text-sm opacity-50">Tech Talk · 45 minutes</span>
</div>

---

# 🤔 When to Use Agent Teams

<div class="grid grid-cols-2 gap-6">
<div class="p-4 bg-green-900/30 rounded-lg border-l-4 border-green-500">
<div class="text-lg font-bold text-green-300 mb-3">✅ Use Agent Teams When</div>
<div class="text-sm text-gray-300 space-y-2">
<div>• Different workflow parts need different expertise</div>
<div>• You want separation of concerns</div>
<div>• You need quality checkpoints</div>
<div>• Simulating human team workflows</div>
</div>
</div>

<div class="p-4 bg-red-900/30 rounded-lg border-l-4 border-red-500">
<div class="text-lg font-bold text-red-300 mb-3">❌ Don't Use When</div>
<div class="text-sm text-gray-300 space-y-2">
<div>• Simple phased work without specialization</div>
<div>• Need parallel branch work (use worktrees)</div>
<div>• One agent with Plan Mode is sufficient</div>
</div>
</div>
</div>

<div class="mt-6 p-4 bg-gray-800 rounded-lg">
<div class="text-sm text-gray-400 font-mono">
<span class="text-cyan-400">Q:</span> Does your task need multiple specialized roles?<br/>
<span class="ml-4 text-gray-500">├─ No →</span> <span class="text-orange-300">Use multi-step-tasks or single agent</span><br/>
<span class="ml-4 text-gray-500">└─ Yes →</span> <span class="text-green-300">Use agent-teams</span>
</div>
</div>

---

# The Single-Agent Ceiling

<div class="grid grid-cols-2 gap-4">
<div class="p-3 bg-red-900/40 rounded-lg border-l-4 border-red-500">
<div class="text-sm font-bold text-red-300 mb-2">❌ Single Agent Problems</div>
<div class="text-xs text-gray-300 space-y-1">
<div>• Complex tasks exceed capacity</div>
<div>• Context pollution degrades quality</div>
<div>• Tool overload creates confusion</div>
<div>• No specialization = no expertise</div>
</div>
</div>

<div class="p-3 bg-green-900/40 rounded-lg border-l-4 border-green-500">
<div class="text-sm font-bold text-green-300 mb-2">✅ Team Solution</div>
<div class="text-xs text-gray-300 space-y-1">
<div>• Coordinated specialists</div>
<div>• Fresh, focused context per agent</div>
<div>• Right tools for each role</div>
<div>• Domain expertise per agent</div>
</div>
</div>
</div>

<div class="mt-4 p-4 bg-gray-800 rounded-lg text-sm text-gray-300">
<span class="text-cyan-400 font-bold">Key Insight:</span> Single agents can plan OR implement well—rarely both.
As context accumulates, quality degrades. The solution isn't a smarter single agent—it's coordinated specialists.
</div>

<div class="mt-3 p-3 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-lg text-center">
<span class="text-white font-bold">This is how human teams work. Now AI teams can work the same way.</span>
</div>

---

# Core Team Architecture

<div class="flex flex-col items-center gap-3">
<div class="p-3 bg-purple-900/40 rounded-lg border-2 border-purple-400 w-full text-center">
<div class="text-lg font-bold text-purple-300">USER / ENTRY POINT</div>
<div class="text-xs text-gray-400 mt-1">"Build a user authentication system"</div>
</div>

<div class="text-2xl text-gray-400">↓</div>

<div class="p-4 bg-blue-900/40 rounded-lg border-2 border-blue-400 w-full">
<div class="text-lg font-bold text-blue-300 mb-2">CONDUCTOR AGENT</div>
<div class="text-xs text-gray-300 space-y-1">
<div>• Interprets high-level request</div>
<div>• Breaks down into phases</div>
<div>• Delegates to specialists</div>
<div>• Validates results</div>
</div>
</div>

<div class="text-2xl text-gray-400">↓ ↓ ↓</div>

<div class="grid grid-cols-3 gap-3 w-full">
<div class="p-3 bg-cyan-900/40 rounded-lg border border-cyan-400">
<div class="text-sm font-bold text-cyan-300 mb-2">PLANNER</div>
<div class="text-xs text-gray-400">• Read only<br/>• Strategic</div>
</div>
<div class="p-3 bg-green-900/40 rounded-lg border border-green-400">
<div class="text-sm font-bold text-green-300 mb-2">CODER</div>
<div class="text-xs text-gray-400">• Edit/Create<br/>• Tactical</div>
</div>
<div class="p-3 bg-orange-900/40 rounded-lg border border-orange-400">
<div class="text-sm font-bold text-orange-300 mb-2">REVIEWER</div>
<div class="text-xs text-gray-400">• Read/Lint<br/>• Validate</div>
</div>
</div>
</div>

---

# Key Orchestration Principles

<div class="grid grid-cols-2 gap-3">
<div class="p-3 bg-blue-900/40 rounded-lg">
<div class="text-sm font-bold text-blue-300 mb-2">🎯 Single Responsibility</div>
<div class="text-xs text-gray-300">Each agent does one thing excellently</div>
</div>

<div class="p-3 bg-cyan-900/40 rounded-lg">
<div class="text-sm font-bold text-cyan-300 mb-2">🔧 Minimal Tools</div>
<div class="text-xs text-gray-300">Only tools needed for their role</div>
</div>

<div class="p-3 bg-green-900/40 rounded-lg">
<div class="text-sm font-bold text-green-300 mb-2">🚧 Clear Boundaries</div>
<div class="text-xs text-gray-300">Handoffs define work transfers</div>
</div>

<div class="p-3 bg-purple-900/40 rounded-lg">
<div class="text-sm font-bold text-purple-300 mb-2">🔒 Context Isolation</div>
<div class="text-xs text-gray-300">Fresh, focused context per agent</div>
</div>

<div class="p-3 bg-orange-900/40 rounded-lg">
<div class="text-sm font-bold text-orange-300 mb-2">👑 Conductor Authority</div>
<div class="text-xs text-gray-300">One agent coordinates execution</div>
</div>

<div class="p-3 bg-indigo-900/40 rounded-lg">
<div class="text-sm font-bold text-indigo-300 mb-2">⚡ Parallel Execution</div>
<div class="text-xs text-gray-300">Independent roles work together</div>
</div>
</div>

<div class="mt-4 p-3 bg-gradient-to-r from-blue-600/80 to-cyan-600/80 rounded-lg text-center">
<span class="text-white font-bold text-sm">Why This Works: Focused context + Right tools + Quality checkpoints + Specialization</span>
</div>

---

# Community System: Copilot Orchestra

<div class="p-4 bg-gray-800 rounded-lg mb-4">
<div class="text-lg font-bold text-cyan-300 mb-2">Complete Development Workflow Orchestration</div>
<div class="text-xs text-gray-400">Repository: github.com/ShepAlderson/copilot-orchestra</div>
</div>

<div class="grid grid-cols-3 gap-3">
<div class="p-3 bg-blue-900/40 rounded-lg border-l-4 border-blue-400">
<div class="text-sm font-bold text-blue-300 mb-2">PLANNER</div>
<div class="text-xs text-gray-300 space-y-1">
<div>• Creates ADRs</div>
<div>• Structures workflow</div>
<div>• Defines phases</div>
</div>
</div>

<div class="p-3 bg-green-900/40 rounded-lg border-l-4 border-green-400">
<div class="text-sm font-bold text-green-300 mb-2">IMPLEMENTER</div>
<div class="text-xs text-gray-300 space-y-1">
<div>• Executes plan</div>
<div>• Step by step</div>
<div>• Systematic build</div>
</div>
</div>

<div class="p-3 bg-orange-900/40 rounded-lg border-l-4 border-orange-400">
<div class="text-sm font-bold text-orange-300 mb-2">REVIEWER</div>
<div class="text-xs text-gray-300 space-y-1">
<div>• Validates work</div>
<div>• Checks plan</div>
<div>• Can reject</div>
</div>
</div>
</div>

<div class="mt-4 text-sm text-gray-300">
<div class="font-bold text-cyan-300 mb-2">Key Features:</div>
<div class="grid grid-cols-2 gap-2 text-xs">
<div>✅ ADR-driven planning</div>
<div>✅ Step-by-step execution</div>
<div>✅ Validation loops</div>
<div>✅ Human checkpoints</div>
</div>
</div>

---

# Community System: GitHub Copilot Atlas

<div class="p-4 bg-gray-800 rounded-lg mb-4">
<div class="text-lg font-bold text-indigo-300 mb-2">Mythology-Themed Multi-Persona System</div>
<div class="text-xs text-gray-400">Repository: github.com/bigguy345/Github-Copilot-Atlas</div>
</div>

<div class="grid grid-cols-2 gap-3">
<div class="p-3 bg-purple-900/40 rounded-lg">
<div class="flex items-center gap-2 mb-2">
<span class="text-2xl">🔥</span>
<div>
<div class="text-sm font-bold text-purple-300">Prometheus</div>
<div class="text-xs text-gray-400">Strategic Planner</div>
</div>
</div>
<div class="text-xs text-gray-300">Requirements analysis, architecture decisions</div>
</div>

<div class="p-3 bg-blue-900/40 rounded-lg">
<div class="flex items-center gap-2 mb-2">
<span class="text-2xl">🔮</span>
<div>
<div class="text-sm font-bold text-blue-300">Oracle</div>
<div class="text-xs text-gray-400">Researcher</div>
</div>
</div>
<div class="text-xs text-gray-300">Knowledge gathering, documentation review</div>
</div>

<div class="p-3 bg-green-900/40 rounded-lg">
<div class="flex items-center gap-2 mb-2">
<span class="text-2xl">⚒️</span>
<div>
<div class="text-sm font-bold text-green-300">Sisyphus</div>
<div class="text-xs text-gray-400">Implementer</div>
</div>
</div>
<div class="text-xs text-gray-300">Persistent work, iterative refinement</div>
</div>

<div class="p-3 bg-cyan-900/40 rounded-lg">
<div class="flex items-center gap-2 mb-2">
<span class="text-2xl">🧭</span>
<div>
<div class="text-sm font-bold text-cyan-300">Explorer</div>
<div class="text-xs text-gray-400">Navigator</div>
</div>
</div>
<div class="text-xs text-gray-300">Codebase discovery, pattern identification</div>
</div>
</div>

<div class="mt-3 p-3 bg-gradient-to-r from-indigo-600/80 to-purple-600/80 rounded-lg text-center">
<span class="text-white font-bold text-sm">Key Innovation: Persona-based specialization + Iterative refinement + Cross-validation</span>
</div>

---

# Building Your Own Team: Define Phases

<div class="text-sm text-gray-300 mb-4">Identify distinct cognitive modes in your development process:</div>

<div class="grid grid-cols-3 gap-2">
<div class="p-2 bg-cyan-900/40 rounded-lg">
<div class="flex items-center gap-2">
<span class="text-xl">🔍</span>
<div>
<div class="text-xs font-bold text-cyan-300">Discovery</div>
<div class="text-xs text-gray-400">Exploration</div>
</div>
</div>
</div>

<div class="p-2 bg-blue-900/40 rounded-lg">
<div class="flex items-center gap-2">
<span class="text-xl">📋</span>
<div>
<div class="text-xs font-bold text-blue-300">Planning</div>
<div class="text-xs text-gray-400">Strategic</div>
</div>
</div>
</div>

<div class="p-2 bg-green-900/40 rounded-lg">
<div class="flex items-center gap-2">
<span class="text-xl">⚡</span>
<div>
<div class="text-xs font-bold text-green-300">Implementation</div>
<div class="text-xs text-gray-400">Execution</div>
</div>
</div>
</div>

<div class="p-2 bg-orange-900/40 rounded-lg">
<div class="flex items-center gap-2">
<span class="text-xl">🔎</span>
<div>
<div class="text-xs font-bold text-orange-300">Review</div>
<div class="text-xs text-gray-400">Critical</div>
</div>
</div>
</div>

<div class="p-2 bg-purple-900/40 rounded-lg">
<div class="flex items-center gap-2">
<span class="text-xl">🧪</span>
<div>
<div class="text-xs font-bold text-purple-300">Testing</div>
<div class="text-xs text-gray-400">Verification</div>
</div>
</div>
</div>

<div class="p-2 bg-indigo-900/40 rounded-lg">
<div class="flex items-center gap-2">
<span class="text-xl">📝</span>
<div>
<div class="text-xs font-bold text-indigo-300">Documentation</div>
<div class="text-xs text-gray-400">Communication</div>
</div>
</div>
</div>
</div>

<div class="mt-4 p-3 bg-gray-800 rounded-lg text-xs text-gray-300">
<span class="text-cyan-400 font-bold">Step 1:</span> Each phase is a distinct cognitive mode requiring different tools and approaches.
Match your workflow phases to specialized agent roles.
</div>

---

# Building Your Own Team: Tool Assignment

<div class="grid grid-cols-2 gap-4">
<div>
<div class="text-sm font-bold text-cyan-300 mb-3">Read-Only Agents</div>
<div class="space-y-2">
<div class="p-2 bg-gray-800 rounded text-xs">
<div class="text-blue-300 font-bold">Research/Discovery</div>
<div class="text-gray-400 font-mono">search, fetch, usages</div>
</div>
<div class="p-2 bg-gray-800 rounded text-xs">
<div class="text-purple-300 font-bold">Review</div>
<div class="text-gray-400 font-mono">search, fetch, analysis, linter</div>
</div>
</div>
</div>

<div>
<div class="text-sm font-bold text-green-300 mb-3">Write Agents</div>
<div class="space-y-2">
<div class="p-2 bg-gray-800 rounded text-xs">
<div class="text-green-300 font-bold">Implementation</div>
<div class="text-gray-400 font-mono">edit, create, delete, search</div>
</div>
<div class="p-2 bg-gray-800 rounded text-xs">
<div class="text-orange-300 font-bold">Testing</div>
<div class="text-gray-400 font-mono">create, run_tests, search</div>
</div>
</div>
</div>
</div>

<div class="mt-4 p-3 bg-gradient-to-r from-red-900/40 to-gray-800 rounded-lg text-center">
<span class="text-white font-bold text-sm">⚠️ Minimal tools prevent agents from overstepping their role</span>
</div>

---

# Building Your Own Team: The Conductor (1/2)

<div class="p-4 bg-gray-800 rounded-lg mb-4">
<div class="text-sm font-bold text-purple-300 mb-2">The conductor is the only user-invokable agent</div>
<div class="text-xs text-gray-400 font-mono">
user-invokable: true<br/>
disable-model-invocation: true
</div>
</div>

<div class="grid grid-cols-2 gap-3">
<div class="p-3 bg-blue-900/40 rounded-lg border-l-4 border-blue-400">
<div class="text-sm font-bold text-blue-300 mb-2">Conductor Role</div>
<div class="text-xs text-gray-300 space-y-1">
<div>• Receive user requests</div>
<div>• Break into phases</div>
<div>• Delegate to specialists</div>
<div>• Validate completion</div>
</div>
</div>

<div class="p-3 bg-cyan-900/40 rounded-lg border-l-4 border-cyan-400">
<div class="text-sm font-bold text-cyan-300 mb-2">Conductor Rules</div>
<div class="text-xs text-gray-300 space-y-1">
<div>• NEVER implement directly</div>
<div>• One agent at a time (sequential)</div>
<div>• Multiple agents (parallel work)</div>
<div>• Include previous context</div>
</div>
</div>
</div>

<div class="mt-4 text-xs text-gray-400">
Example workflow phases: Discovery → Planning → Implementation → Review → Testing
</div>

---

# Building Your Own Team: Worker Agents (2/2)

<div class="text-sm text-gray-300 mb-3">Each worker agent is specialized and constrained:</div>

<div class="grid grid-cols-2 gap-3">
<div class="p-3 bg-cyan-900/40 rounded-lg text-xs">
<div class="font-bold text-cyan-300 mb-2">Explorer Agent</div>
<div class="text-gray-400 space-y-1">
<div class="font-mono text-orange-300">user-invokable: false</div>
<div class="font-mono text-green-300">tools: [search, fetch, usages]</div>
<div class="mt-2">Analyzes codebase, reports findings, no implementation</div>
</div>
</div>

<div class="p-3 bg-blue-900/40 rounded-lg text-xs">
<div class="font-bold text-blue-300 mb-2">Planner Agent</div>
<div class="text-gray-400 space-y-1">
<div class="font-mono text-orange-300">user-invokable: false</div>
<div class="font-mono text-green-300">tools: [search, fetch, create]</div>
<div class="mt-2">Creates implementation plans, no execution</div>
</div>
</div>

<div class="p-3 bg-green-900/40 rounded-lg text-xs">
<div class="font-bold text-green-300 mb-2">Implementer Agent</div>
<div class="text-gray-400 space-y-1">
<div class="font-mono text-orange-300">user-invokable: false</div>
<div class="font-mono text-green-300">tools: [edit, create, delete]</div>
<div class="mt-2">Executes plans exactly, reports blockers</div>
</div>
</div>

<div class="p-3 bg-orange-900/40 rounded-lg text-xs">
<div class="font-bold text-orange-300 mb-2">Reviewer Agent</div>
<div class="text-gray-400 space-y-1">
<div class="font-mono text-orange-300">user-invokable: false</div>
<div class="font-mono text-green-300">tools: [search, fetch, analysis]</div>
<div class="mt-2">Validates implementation, can reject</div>
</div>
</div>
</div>

---

# Team Orchestration Patterns (1/2)

<div class="grid grid-cols-2 gap-4">
<div class="p-3 bg-blue-900/40 rounded-lg">
<div class="text-sm font-bold text-blue-300 mb-2">Pattern 1: Linear Pipeline</div>
<div class="text-xs text-gray-400 font-mono mb-2">Discovery → Planning → Implementation → Review</div>
<div class="text-xs text-gray-300">
<span class="text-cyan-400">Best for:</span> Well-defined features, single-track development
</div>
</div>

<div class="p-3 bg-green-900/40 rounded-lg">
<div class="text-sm font-bold text-green-300 mb-2">Pattern 2: Iterative Refinement</div>
<div class="text-xs text-gray-400 font-mono mb-2">Implement → Review → [Issues?] → Loop</div>
<div class="text-xs text-gray-300">
<span class="text-cyan-400">Best for:</span> Quality-critical code, learning from feedback
</div>
</div>

<div class="p-3 bg-purple-900/40 rounded-lg">
<div class="text-sm font-bold text-purple-300 mb-2">Pattern 3: Parallel Specialists</div>
<div class="text-xs text-gray-400 font-mono mb-2">Security + Performance + Docs → Integration</div>
<div class="text-xs text-gray-300">
<span class="text-cyan-400">Best for:</span> Large features, cross-cutting concerns
</div>
</div>

<div class="p-3 bg-orange-900/40 rounded-lg">
<div class="text-sm font-bold text-orange-300 mb-2">Pattern 4: Hierarchical</div>
<div class="text-xs text-gray-400 font-mono mb-2">Master → [Frontend, Backend] Conductors</div>
<div class="text-xs text-gray-300">
<span class="text-cyan-400">Best for:</span> Full-stack features, domain separation
</div>
</div>
</div>

---

# VS Code 1.109 Team Features

<div class="grid grid-cols-2 gap-4">
<div>
<div class="text-sm font-bold text-cyan-300 mb-3">Invocation Controls</div>
<div class="space-y-2 text-xs">
<div class="p-2 bg-gray-800 rounded">
<div class="text-blue-300 font-mono mb-1">user-invokable: false</div>
<div class="text-gray-400">Worker agents hidden from user dropdown</div>
</div>
<div class="p-2 bg-gray-800 rounded">
<div class="text-green-300 font-mono mb-1">disable-model-invocation: true</div>
<div class="text-gray-400">User-only agents can't be subagents</div>
</div>
</div>
</div>

<div>
<div class="text-sm font-bold text-green-300 mb-3">Agent Restrictions</div>
<div class="space-y-2 text-xs">
<div class="p-2 bg-gray-800 rounded">
<div class="text-purple-300 font-mono mb-1">agents.allow: [list]</div>
<div class="text-gray-400">Explicit allow list for invocations</div>
</div>
<div class="p-2 bg-gray-800 rounded">
<div class="text-orange-300 font-mono mb-1">agents.deny: [list]</div>
<div class="text-gray-400">Block specific dangerous agents</div>
</div>
</div>
</div>
</div>

<div class="mt-4 p-3 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-lg text-center">
<span class="text-white font-bold text-sm">VS Code 1.109 adds parallel subagents + proper orchestration controls</span>
</div>

---

# Best Practices

<div class="grid grid-cols-3 gap-2">
<div class="p-2 bg-blue-900/40 rounded-lg">
<div class="flex items-center gap-2 mb-1">
<span class="text-xl">👑</span>
<div class="text-xs font-bold text-blue-300">Conductor</div>
</div>
<div class="text-xs text-gray-300">Never implement directly, only delegate</div>
</div>

<div class="p-2 bg-cyan-900/40 rounded-lg">
<div class="flex items-center gap-2 mb-1">
<span class="text-xl">🎯</span>
<div class="text-xs font-bold text-cyan-300">Workers</div>
</div>
<div class="text-xs text-gray-300">Single responsibility, minimal tools</div>
</div>

<div class="p-2 bg-green-900/40 rounded-lg">
<div class="flex items-center gap-2 mb-1">
<span class="text-xl">✅</span>
<div class="text-xs font-bold text-green-300">Validation</div>
</div>
<div class="text-xs text-gray-300">Check output before proceeding</div>
</div>

<div class="p-2 bg-purple-900/40 rounded-lg">
<div class="flex items-center gap-2 mb-1">
<span class="text-xl">🤝</span>
<div class="text-xs font-bold text-purple-300">Handoffs</div>
</div>
<div class="text-xs text-gray-300">Clear contracts for each phase</div>
</div>

<div class="p-2 bg-orange-900/40 rounded-lg">
<div class="flex items-center gap-2 mb-1">
<span class="text-xl">🚀</span>
<div class="text-xs font-bold text-orange-300">Start Simple</div>
</div>
<div class="text-xs text-gray-300">3-4 agents before complexity</div>
</div>

<div class="p-2 bg-indigo-900/40 rounded-lg">
<div class="flex items-center gap-2 mb-1">
<span class="text-xl">🔄</span>
<div class="text-xs font-bold text-indigo-300">Iterate</div>
</div>
<div class="text-xs text-gray-300">Refine based on usage patterns</div>
</div>
</div>

<div class="mt-4 text-xs text-gray-400">
<div class="font-bold text-cyan-300 mb-2">Testing Strategy:</div>
Test each agent independently before orchestration. Define handoff contracts. Plan for phase failures.
</div>

---

# Common Issues & Diagnostics

<div class="grid grid-cols-2 gap-4">
<div class="p-3 bg-red-900/40 rounded-lg border-l-4 border-red-500">
<div class="text-sm font-bold text-red-300 mb-2">Common Issues</div>
<div class="text-xs text-gray-300 space-y-2">
<div><span class="text-red-400">•</span> Wrong agent invoked → Check agents.allow</div>
<div><span class="text-red-400">•</span> Phase skipped → Verify handoff prompts</div>
<div><span class="text-red-400">•</span> Context lost → Pass outputs explicitly</div>
<div><span class="text-red-400">•</span> Infinite loop → Add iteration limits</div>
</div>
</div>

<div class="p-3 bg-blue-900/40 rounded-lg border-l-4 border-blue-400">
<div class="text-sm font-bold text-blue-300 mb-2">Diagnostic Tools</div>
<div class="text-xs text-gray-300 space-y-2">
<div><span class="text-cyan-400">•</span> Chat Diagnostics panel</div>
<div><span class="text-cyan-400">•</span> Which agents were invoked</div>
<div><span class="text-cyan-400">•</span> Context each received</div>
<div><span class="text-cyan-400">•</span> Tool usage per agent</div>
</div>
</div>
</div>

<div class="mt-4 text-xs text-gray-400 italic text-center">
Use Chat Diagnostics to trace agent invocations and debug orchestration issues
</div>

---

# 🎯 Key Takeaways

<div class="space-y-3">
<div class="p-3 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-lg">
<div class="text-white font-bold text-sm">Team Orchestration Beats Single Agents</div>
<div class="text-xs text-cyan-100 mt-1">Specialists outperform generalists when coordinated properly</div>
</div>

<div class="p-3 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 rounded-lg">
<div class="text-white font-bold text-sm">Role Separation Prevents Context Pollution</div>
<div class="text-xs text-blue-100 mt-1">Each agent focuses on one cognitive mode without distraction</div>
</div>

<div class="p-3 bg-gradient-to-r from-indigo-600/80 to-purple-600/80 rounded-lg">
<div class="text-white font-bold text-sm">Tool Constraints Enforce Specialization</div>
<div class="text-xs text-indigo-100 mt-1">Read-only for research, edit for implementation, analysis for review</div>
</div>

<div class="p-3 bg-gradient-to-r from-purple-600/80 to-cyan-600/80 rounded-lg">
<div class="text-white font-bold text-sm">Parallel Execution Multiplies Throughput</div>
<div class="text-xs text-purple-100 mt-1">Independent roles work simultaneously when properly designed</div>
</div>
</div>

---
layout: end
---

# Build Your Agent Team

<div class="text-center">
<div class="text-2xl mb-4">🎭</div>
<div class="text-xl mb-4">Start with 3-4 specialized roles</div>
<div class="text-sm text-gray-400 space-y-2">
<div>Explore: github.com/ShepAlderson/copilot-orchestra</div>
<div>Explore: github.com/bigguy345/Github-Copilot-Atlas</div>
<div>Related: multi-step-tasks | parallel-execution | custom-agents</div>
</div>
</div>
