---
theme: default
background: https://source.unsplash.com/collection/94734566/1920x1080
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Multi-Step Tasks
  CopilotTraining Tech Talk
drawings:
  persist: false
transition: slide-left
title: Multi-Step Tasks - When One Agent Needs to Become Many
module: tech-talks/multi-step-tasks
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
Multi-Step Tasks
</h1>
<div class="mt-4 relative z-10">
<span class="px-6 py-2 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xl font-medium shadow-lg shadow-cyan-500/25">
When One Agent Needs to Become Many
</span>
</div>
<div class="mt-8 text-lg opacity-70 relative z-10">
Break complex workflows into focused phases with isolated contexts
</div>
<div class="mt-6 w-32 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full relative z-10"></div>
</div>

<div class="abs-br m-6 flex gap-2">
<span class="text-sm opacity-50">Tech Talk · 45 minutes</span>
</div>

---

# 🤔 When to Use This Pattern

<div class="grid grid-cols-2 gap-6 mt-6">
<div class="p-4 bg-green-900/30 rounded-lg border-l-4 border-green-500">
<div class="text-lg font-bold text-green-300 mb-3">✅ Use When:</div>
<div class="text-sm text-gray-300 space-y-2">
<div>• Task requires distinct phases (research → analysis → implementation)</div>
<div>• Need to explore multiple approaches without cluttering context</div>
<div>• Different parts need focused investigation without cross-contamination</div>
<div>• Want parallel execution of independent tasks</div>
</div>
</div>
<div class="p-4 bg-red-900/30 rounded-lg border-l-4 border-red-500">
<div class="text-lg font-bold text-red-300 mb-3">❌ Don't Use When:</div>
<div class="text-sm text-gray-300 space-y-2">
<div>• Task is simple enough for one agent (use Plan Mode)</div>
<div>• Need specialized roles like planners/reviewers (use agent-teams)</div>
<div>• Need agents on different branches (use parallel-execution)</div>
</div>
</div>
</div>

<div class="mt-6 p-3 bg-gray-800 rounded-lg text-xs font-mono text-gray-300">
<div>Q: Is your task too complex for one agent?</div>
<div>├─ No → Use single agent in Plan Mode</div>
<div>└─ Yes → Q: Does it need multiple specialized roles?</div>
<div class="ml-8">├─ Yes → Use agent-teams/ pattern</div>
<div class="ml-8">└─ No → 👉 Use multi-step-tasks</div>
</div>

---

# The Context Problem

<div class="grid grid-cols-2 gap-4 mt-4">
<div class="p-3 bg-red-900/40 rounded-lg border-l-4 border-red-500">
<div class="text-base font-bold text-red-300 mb-2">🚨 Context Window Bloat</div>
<div class="text-xs text-gray-300">Every prompt and response accumulates, degrading quality over time</div>
</div>
<div class="p-3 bg-yellow-900/40 rounded-lg border-l-4 border-yellow-500">
<div class="text-base font-bold text-yellow-300 mb-2">⏱️ Sequential Bottlenecks</div>
<div class="text-xs text-gray-300">Tasks execute one-at-a-time without isolation</div>
</div>
<div class="p-3 bg-orange-900/40 rounded-lg border-l-4 border-orange-500">
<div class="text-base font-bold text-orange-300 mb-2">💭 Exploratory Pollution</div>
<div class="text-xs text-gray-300">Dead-end investigations clutter context permanently</div>
</div>
<div class="p-3 bg-purple-900/40 rounded-lg border-l-4 border-purple-500">
<div class="text-base font-bold text-purple-300 mb-2">💸 Token Inefficiency</div>
<div class="text-xs text-gray-300">Full conversation histories consume expensive tokens</div>
</div>
</div>

<div class="mt-6 p-4 bg-gradient-to-r from-cyan-900/60 to-blue-900/60 rounded-lg">
<div class="text-sm text-gray-200">
<span class="font-bold text-cyan-300">The Solution:</span> Task decomposition with context isolation — break work into phases, each running in its own context, returning only summaries to the orchestrating agent.
</div>
</div>

---

# Subagents: The Core Mechanism

<div class="grid grid-cols-2 gap-6 mt-6">
<div class="p-4 bg-purple-900/40 rounded-lg">
<div class="text-lg font-bold text-purple-300 mb-3">💬 Implicit Invocation</div>
<div class="mb-3 p-2 bg-gray-800 rounded text-xs font-mono text-gray-300">
Run a subagent to research<br/>authentication patterns
</div>
<div class="text-xs text-gray-300 space-y-1">
<div>• Main agent interprets intent</div>
<div>• Ideal for exploratory tasks</div>
<div>• Inherits model and tools</div>
</div>
</div>
<div class="p-4 bg-blue-900/40 rounded-lg">
<div class="text-lg font-bold text-blue-300 mb-3">📄 Explicit Invocation</div>
<div class="mb-3 p-2 bg-gray-800 rounded text-xs font-mono text-gray-300">
<div class="opacity-60">───</div>
name: document-feature<br/>
tools: ['read', 'search']<br/>
<div class="opacity-60">───</div>
</div>
<div class="text-xs text-gray-300 space-y-1">
<div>• Declarative tool access</div>
<div>• Reproducible workflows</div>
<div>• Version controlled</div>
</div>
</div>
</div>

<div class="mt-6 p-4 bg-gradient-to-r from-green-600/80 to-blue-600/80 rounded-lg text-center">
<span class="text-white font-bold">🔑 Isolated context + Autonomous execution + Summary returns = Clean orchestration</span>
</div>

---

# Why This Pattern Matters

<div class="grid grid-cols-2 gap-4 mt-6">
<div class="p-3 bg-red-900/30 rounded-lg">
<div class="text-base font-bold text-red-300 mb-2">❌ Without Subagents</div>
<div class="text-xs text-gray-300 space-y-1">
<div>• Research clutters main context</div>
<div>• Sequential task execution</div>
<div>• Failed experiments persist</div>
<div>• Token costs compound</div>
<div>• Context quality degrades</div>
</div>
</div>
<div class="p-3 bg-green-900/30 rounded-lg">
<div class="text-base font-bold text-green-300 mb-2">✅ With Subagents</div>
<div class="text-xs text-gray-300 space-y-1">
<div>• Research stays isolated</div>
<div>• Parallel task execution</div>
<div>• Only successes return</div>
<div>• Token costs contained</div>
<div>• Context stays focused</div>
</div>
</div>
</div>

<div class="mt-6 grid grid-cols-2 gap-4">
<div class="p-3 bg-orange-900/40 rounded-lg">
<div class="text-sm font-bold text-orange-300 mb-1">Main Agent Role</div>
<div class="text-xs text-gray-300">
• High-level task breakdown<br/>
• Subagent coordination<br/>
• Result synthesis
</div>
</div>
<div class="p-3 bg-cyan-900/40 rounded-lg">
<div class="text-sm font-bold text-cyan-300 mb-1">Subagent Role</div>
<div class="text-xs text-gray-300">
• Focused investigation<br/>
• Exploratory analysis<br/>
• Isolated error handling
</div>
</div>
</div>

---

# Common Scenarios (1/2)

<div class="grid grid-cols-2 gap-4 mt-4">
<div class="p-3 bg-blue-900/40 rounded-lg border-l-4 border-blue-400">
<div class="text-base font-bold text-blue-300 mb-2">📚 Research Before Implementation</div>
<div class="text-xs text-gray-300 space-y-1 mb-2">
<div><span class="text-red-400">Problem:</span> Jumping into implementation without understanding patterns</div>
<div><span class="text-green-400">Solution:</span> Subagent researches existing patterns, identifies utilities, documents endpoints</div>
</div>
<div class="text-xs text-white font-bold">= Consistent implementation</div>
</div>
<div class="p-3 bg-purple-900/40 rounded-lg border-l-4 border-purple-400">
<div class="text-base font-bold text-purple-300 mb-2">⚡ Parallel Code Analysis</div>
<div class="text-xs text-gray-300 space-y-1 mb-2">
<div><span class="text-red-400">Problem:</span> Sequential analysis takes too long</div>
<div><span class="text-green-400">Solution:</span> Three subagents run simultaneously: Security ‖ Performance ‖ Architecture</div>
</div>
<div class="text-xs text-white font-bold">= 3x faster reviews</div>
</div>
</div>

<div class="mt-3 p-3 bg-gray-800 rounded-lg text-xs font-mono text-gray-300">
Analyze this PR using three parallel subagents:<br/>
1. Security subagent: Check vulnerabilities<br/>
2. Performance subagent: Review N+1 queries<br/>
3. Architecture subagent: Verify patterns<br/>
<br/>
Synthesize findings into unified review.
</div>

---

# Common Scenarios (2/2)

<div class="grid grid-cols-2 gap-4 mt-4">
<div class="p-3 bg-green-900/40 rounded-lg border-l-4 border-green-400">
<div class="text-base font-bold text-green-300 mb-2">🔍 Explore Multiple Solutions</div>
<div class="text-xs text-gray-300 space-y-1 mb-2">
<div><span class="text-red-400">Problem:</span> Exploring alternatives clutters context</div>
<div><span class="text-green-400">Solution:</span> Three subagents prototype different caching approaches in parallel</div>
</div>
<div class="text-xs text-white font-bold">= Clean comparison, one winner</div>
</div>
<div class="p-3 bg-cyan-900/40 rounded-lg border-l-4 border-cyan-400">
<div class="text-base font-bold text-cyan-300 mb-2">🎭 Specialized Analysis</div>
<div class="text-xs text-gray-300 space-y-1 mb-2">
<div><span class="text-red-400">Problem:</span> Different concerns need different expertise</div>
<div><span class="text-green-400">Solution:</span> Custom agents as subagents: Security agent + Testing agent + Docs agent</div>
</div>
<div class="text-xs text-white font-bold">= Domain expertise per task</div>
</div>
</div>

<div class="mt-3 p-3 bg-gray-800 rounded-lg text-xs font-mono text-gray-300">
Run three subagents to prototype caching approaches:<br/>
1. Redis-based caching<br/>
2. In-memory with LRU eviction<br/>
3. Hybrid disk/memory approach<br/>
<br/>
Compare tradeoffs and recommend best fit.
</div>

---

# Custom Agents as Subagents

<div class="mt-6 p-4 bg-gradient-to-r from-purple-900/60 to-blue-900/60 rounded-lg">
<div class="text-base font-bold text-purple-300 mb-2">🎭 Specialized Behavior for Subtasks</div>
<div class="text-sm text-gray-300">
Custom agents bring domain expertise to subagent execution:
</div>
</div>

<div class="grid grid-cols-3 gap-3 mt-4">
<div class="p-3 bg-red-900/40 rounded-lg">
<div class="text-sm font-bold text-red-300 mb-1">🔒 Security Agent</div>
<div class="text-xs text-gray-300">Knows OWASP risks, auth vulnerabilities, injection vectors</div>
</div>
<div class="p-3 bg-green-900/40 rounded-lg">
<div class="text-sm font-bold text-green-300 mb-1">🧪 Testing Agent</div>
<div class="text-xs text-gray-300">Understands coverage gaps, test patterns, fixtures</div>
</div>
<div class="p-3 bg-blue-900/40 rounded-lg">
<div class="text-sm font-bold text-blue-300 mb-1">📖 Docs Agent</div>
<div class="text-xs text-gray-300">Writes clear explanations, API docs, examples</div>
</div>
</div>

<div class="mt-4 p-3 bg-gray-800 rounded-lg text-xs font-mono text-gray-300">
<div class="opacity-60">───</div>
name: Security-Review<br/>
tools: ['read', 'search', 'grep']<br/>
<div class="opacity-60">───</div>
You are a security expert. Analyze for authentication<br/>
vulnerabilities, authorization bypass, injection vectors.
</div>

<div class="mt-3 text-center text-xs text-gray-400">
Invocation: <code class="text-cyan-400">Use Security-Review agent as subagent to audit auth module</code>
</div>

---

# Controlling Subagent Behavior

<div class="grid grid-cols-2 gap-6 mt-6">
<div class="p-4 bg-orange-900/40 rounded-lg">
<div class="text-lg font-bold text-orange-300 mb-3">👁️ Visibility Controls</div>
<div class="mb-2 p-2 bg-gray-800 rounded text-xs font-mono text-gray-300">
<div class="opacity-60">───</div>
name: internal-helper<br/>
user-invokable: false<br/>
<div class="opacity-60">───</div>
</div>
<div class="text-xs text-gray-300">
<div class="mb-2"><span class="text-orange-400">user-invokable:</span> Show in dropdown</div>
<div><span class="text-orange-400">disable-model-invocation:</span> Prevent AI invocation</div>
</div>
</div>
<div class="p-4 bg-cyan-900/40 rounded-lg">
<div class="text-lg font-bold text-cyan-300 mb-3">🎯 Agent Restrictions</div>
<div class="mb-2 p-2 bg-gray-800 rounded text-xs font-mono text-gray-300">
<div class="opacity-60">───</div>
name: TDD<br/>
agents: ['Red', 'Green']<br/>
<div class="opacity-60">───</div>
</div>
<div class="text-xs text-gray-300">
<div class="mb-2"><span class="text-cyan-400">agents: ['X', 'Y']:</span> Allow specific</div>
<div><span class="text-cyan-400">agents: []:</span> Prevent all</div>
</div>
</div>
</div>

<div class="mt-4 p-3 bg-gradient-to-r from-orange-600/80 to-cyan-600/80 rounded-lg text-center">
<span class="text-white font-bold text-sm">Fine-grained controls transform ad-hoc delegation into structured workflows</span>
</div>

---

# Anti-Patterns to Avoid

<div class="grid grid-cols-3 gap-3 mt-6">
<div class="p-3 bg-red-900/40 rounded-lg">
<div class="text-base font-bold text-red-300 mb-2">❌ Over-Delegation</div>
<div class="text-xs text-gray-300 mb-2">
Delegating trivially small tasks adds overhead
</div>
<div class="text-xs font-mono bg-gray-800 p-2 rounded mb-2">
Run subagent to<br/>read config file
</div>
<div class="text-xs text-green-400">
✅ Delegate coherent work units
</div>
</div>
<div class="p-3 bg-red-900/40 rounded-lg">
<div class="text-base font-bold text-red-300 mb-2">❌ Vague Tasks</div>
<div class="text-xs text-gray-300 mb-2">
Vague subagent tasks return vague results
</div>
<div class="text-xs font-mono bg-gray-800 p-2 rounded mb-2">
Research<br/>authentication
</div>
<div class="text-xs text-green-400">
✅ Specify scope, output, criteria
</div>
</div>
<div class="p-3 bg-red-900/40 rounded-lg">
<div class="text-base font-bold text-red-300 mb-2">❌ Ignoring Results</div>
<div class="text-xs text-gray-300 mb-2">
Subagents research but no synthesis happens
</div>
<div class="text-xs font-mono bg-gray-800 p-2 rounded mb-2">
Findings not<br/>acted upon
</div>
<div class="text-xs text-green-400">
✅ Always synthesize findings
</div>
</div>
</div>

<div class="mt-6 p-4 bg-gradient-to-r from-red-900/40 to-gray-800 rounded-lg text-center">
<span class="text-white font-bold">⚠️ Delegate meaningful work, specify clearly, synthesize results</span>
</div>

---

# Best Practices

<div class="grid grid-cols-2 gap-4 mt-6">
<div class="p-3 bg-blue-900/40 rounded-lg border-l-4 border-blue-400">
<div class="text-sm font-bold text-blue-300 mb-2">✅ Task Decomposition</div>
<div class="text-xs text-gray-300">
Break complex work into focused, independent subtasks
</div>
</div>
<div class="p-3 bg-green-900/40 rounded-lg border-l-4 border-green-400">
<div class="text-sm font-bold text-green-300 mb-2">✅ Clear Output Expectations</div>
<div class="text-xs text-gray-300">
Specify what subagent should return: findings, recommendations, risks
</div>
</div>
<div class="p-3 bg-purple-900/40 rounded-lg border-l-4 border-purple-400">
<div class="text-sm font-bold text-purple-300 mb-2">✅ Appropriate Parallelization</div>
<div class="text-xs text-gray-300">
Run independent analyses in parallel: Security ‖ Performance ‖ Style
</div>
</div>
<div class="p-3 bg-cyan-900/40 rounded-lg border-l-4 border-cyan-400">
<div class="text-sm font-bold text-cyan-300 mb-2">✅ Result Synthesis</div>
<div class="text-xs text-gray-300">
Always instruct main agent to combine subagent findings
</div>
</div>
</div>

<div class="mt-6 p-3 bg-gray-800 rounded-lg text-xs font-mono text-gray-300">
Return a markdown summary with:<br/>
- Key findings (bullet points)<br/>
- Recommended approach<br/>
- Risks and mitigations
</div>

---

# Performance Considerations

<div class="grid grid-cols-3 gap-4 mt-6">
<div class="p-4 bg-green-900/40 rounded-lg">
<div class="text-base font-bold text-green-300 mb-3">💰 Token Efficiency</div>
<div class="text-xs text-gray-300 space-y-2">
<div>❌ Single agent: Full history in one context</div>
<div>✅ Subagents: Only summaries in main</div>
<div>✅ Specialized: Focused contexts per domain</div>
</div>
</div>
<div class="p-4 bg-blue-900/40 rounded-lg">
<div class="text-base font-bold text-blue-300 mb-3">⚡ Execution Speed</div>
<div class="text-xs text-gray-300 space-y-2">
<div>• Subagents run in parallel</div>
<div>• Main agent coordinates</div>
<div>• Faster than sequential</div>
</div>
</div>
<div class="p-4 bg-purple-900/40 rounded-lg">
<div class="text-base font-bold text-purple-300 mb-3">📊 Cost Optimization</div>
<div class="text-xs text-gray-300 space-y-2">
<div>• No context compounding</div>
<div>• Dead-ends don't inflate costs</div>
<div>• Only valuable findings return</div>
</div>
</div>
</div>

<div class="mt-6 p-4 bg-gradient-to-r from-green-600/80 to-blue-600/80 rounded-lg text-center">
<span class="text-white font-bold">Subagents = Better performance + Lower costs + Faster execution</span>
</div>

---

# Key Takeaways

<div class="grid grid-cols-2 gap-4 mt-6">
<div class="p-4 bg-gradient-to-br from-cyan-900/60 to-blue-900/60 rounded-lg">
<div class="text-2xl mb-2">🧹</div>
<div class="text-base font-bold text-cyan-300 mb-1">Context Isolation</div>
<div class="text-sm text-gray-300">Keep research and exploration separate from main context</div>
</div>
<div class="p-4 bg-gradient-to-br from-blue-900/60 to-indigo-900/60 rounded-lg">
<div class="text-2xl mb-2">⚡</div>
<div class="text-base font-bold text-blue-300 mb-1">Parallel Execution</div>
<div class="text-sm text-gray-300">Multiple subagents run simultaneously for faster workflows</div>
</div>
<div class="p-4 bg-gradient-to-br from-indigo-900/60 to-purple-900/60 rounded-lg">
<div class="text-2xl mb-2">💰</div>
<div class="text-base font-bold text-indigo-300 mb-1">Token Efficiency</div>
<div class="text-sm text-gray-300">Only final results return—intermediate work stays isolated</div>
</div>
<div class="p-4 bg-gradient-to-br from-purple-900/60 to-cyan-900/60 rounded-lg">
<div class="text-2xl mb-2">🎭</div>
<div class="text-base font-bold text-purple-300 mb-1">Specialization</div>
<div class="text-sm text-gray-300">Custom agents bring domain expertise to subtasks</div>
</div>
</div>

<div class="mt-6 p-4 bg-gradient-to-r from-cyan-600 to-blue-800 rounded-xl shadow-lg text-center">
<div class="text-xl font-bold text-white">Break complex work into focused phases with isolated contexts</div>
</div>

---
layout: end
---

# Thank You

<div class="text-center mt-8">
<div class="text-4xl mb-4">🎯</div>
<div class="text-2xl font-bold mb-4">Multi-Step Tasks</div>
<div class="text-lg opacity-75 mb-8">Context isolation for complex workflows</div>

<div class="grid grid-cols-3 gap-4 text-sm">
<div>
<div class="font-bold mb-1">Related Patterns</div>
<div class="opacity-75">agent-teams/</div>
<div class="opacity-75">parallel-execution/</div>
</div>
<div>
<div class="font-bold mb-1">Workshop</div>
<div class="opacity-75">06-custom-agents</div>
</div>
<div>
<div class="font-bold mb-1">Resources</div>
<div class="opacity-75">VS Code Docs</div>
</div>
</div>
</div>

<div class="abs-br m-6 text-sm opacity-50">
CopilotTraining Tech Talk
</div>
