---
theme: default
background: https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2068&auto=format&fit=crop
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Subagents: Context Isolation for Complex Workflows
  Orchestrating autonomous agents with isolated context windows
drawings:
  persist: false
transition: slide-left
title: Subagents - Context Isolation for Complex Workflows
mdc: true
---

# Subagents

## Context Isolation for Complex Workflows

<div class="pt-12">
  <span class="text-6xl">🔀</span>
</div>

<div class="abs-br m-6 flex gap-2">
  <span class="text-sm opacity-50">Tech Talk · GitHub Copilot Workshop</span>
</div>

---
layout: default
---

# The Context Problem

<div class="grid grid-cols-2 gap-8 mt-8">

<div class="p-6 bg-red-900/60 rounded-lg border-l-4 border-red-400">
  <div class="text-3xl mb-3">📈</div>
  <div class="font-bold text-red-300 mb-2">Context Window Bloat</div>
  <div class="text-gray-300 text-sm">
    Every prompt and response accumulates, degrading quality over time
  </div>
</div>

<div class="p-6 bg-red-900/60 rounded-lg border-l-4 border-red-400">
  <div class="text-3xl mb-3">⏳</div>
  <div class="font-bold text-red-300 mb-2">Sequential Bottlenecks</div>
  <div class="text-gray-300 text-sm">
    Complex research and analysis tasks execute one-at-a-time
  </div>
</div>

<div class="p-6 bg-red-900/60 rounded-lg border-l-4 border-red-400">
  <div class="text-3xl mb-3">🗑️</div>
  <div class="font-bold text-red-300 mb-2">Exploratory Pollution</div>
  <div class="text-gray-300 text-sm">
    Dead-end investigations clutter the main context permanently
  </div>
</div>

<div class="p-6 bg-red-900/60 rounded-lg border-l-4 border-red-400">
  <div class="text-3xl mb-3">💸</div>
  <div class="font-bold text-red-300 mb-2">Token Inefficiency</div>
  <div class="text-gray-300 text-sm">
    Full conversation histories consume tokens even when only summaries are needed
  </div>
</div>

</div>

---
layout: center
---

# What Are Subagents?

<div class="text-center mt-8">
  <div class="text-6xl mb-8">🎯</div>
  <div class="text-2xl text-gray-300 max-w-3xl mx-auto">
    Autonomous agents with <span class="text-blue-400 font-bold">isolated context windows</span>
    <br/>that run tasks separately from the main chat session
  </div>
</div>

<div class="grid grid-cols-3 gap-6 mt-12">

<div class="p-4 bg-blue-900/40 rounded-lg text-center">
  <div class="text-2xl mb-2">🔒</div>
  <div class="text-blue-300 font-semibold">Isolated Context</div>
  <div class="text-sm text-gray-400">Separate from main session</div>
</div>

<div class="p-4 bg-purple-900/40 rounded-lg text-center">
  <div class="text-2xl mb-2">⚡</div>
  <div class="text-purple-300 font-semibold">Parallel Execution</div>
  <div class="text-sm text-gray-400">Multiple tasks simultaneously</div>
</div>

<div class="p-4 bg-green-900/40 rounded-lg text-center">
  <div class="text-2xl mb-2">📋</div>
  <div class="text-green-300 font-semibold">Summary Returns</div>
  <div class="text-sm text-gray-400">Only final results come back</div>
</div>

</div>

---

# The Orchestration Model

<div class="flex items-center justify-center mt-8 gap-4">

<div class="p-6 bg-blue-900/60 rounded-xl border-2 border-blue-400 w-64 text-center">
  <div class="text-4xl mb-3">🎼</div>
  <div class="font-bold text-blue-300 text-lg">Main Agent</div>
  <div class="text-gray-400 text-sm mt-2">Orchestrates & synthesizes</div>
</div>

<div class="text-4xl text-gray-500">→</div>

<div class="flex flex-col gap-3">
  <div class="p-4 bg-purple-900/40 rounded-lg border border-purple-400 flex items-center gap-3">
    <span class="text-2xl">🔍</span>
    <div>
      <div class="text-purple-300 font-semibold text-sm">Research Subagent</div>
      <div class="text-xs text-gray-400">Isolated context</div>
    </div>
  </div>
  <div class="p-4 bg-green-900/40 rounded-lg border border-green-400 flex items-center gap-3">
    <span class="text-2xl">📊</span>
    <div>
      <div class="text-green-300 font-semibold text-sm">Analysis Subagent</div>
      <div class="text-xs text-gray-400">Isolated context</div>
    </div>
  </div>
  <div class="p-4 bg-yellow-900/40 rounded-lg border border-yellow-400 flex items-center gap-3">
    <span class="text-2xl">🛡️</span>
    <div>
      <div class="text-yellow-300 font-semibold text-sm">Security Subagent</div>
      <div class="text-xs text-gray-400">Isolated context</div>
    </div>
  </div>
</div>

<div class="text-4xl text-gray-500">→</div>

<div class="p-4 bg-green-900/60 rounded-lg border-2 border-green-400 w-48 text-center">
  <div class="text-3xl mb-2">✨</div>
  <div class="text-green-300 font-semibold">Synthesized Result</div>
  <div class="text-xs text-gray-400">Only summaries returned</div>
</div>

</div>

---

# Context Comparison

<div class="mt-8">

<div class="grid grid-cols-2 gap-8">

<div class="p-6 bg-red-900/30 rounded-xl border-2 border-red-500">
  <div class="text-xl font-bold text-red-400 mb-4 flex items-center gap-2">
    <span>❌</span> Without Subagents
  </div>
  <div class="space-y-3 text-sm">
    <div class="flex items-center gap-2 text-gray-300">
      <span class="text-red-400">•</span> Research clutters main context
    </div>
    <div class="flex items-center gap-2 text-gray-300">
      <span class="text-red-400">•</span> Sequential task execution
    </div>
    <div class="flex items-center gap-2 text-gray-300">
      <span class="text-red-400">•</span> Failed experiments persist
    </div>
    <div class="flex items-center gap-2 text-gray-300">
      <span class="text-red-400">•</span> Token costs compound
    </div>
    <div class="flex items-center gap-2 text-gray-300">
      <span class="text-red-400">•</span> Context quality degrades
    </div>
  </div>
</div>

<div class="p-6 bg-green-900/30 rounded-xl border-2 border-green-500">
  <div class="text-xl font-bold text-green-400 mb-4 flex items-center gap-2">
    <span>✅</span> With Subagents
  </div>
  <div class="space-y-3 text-sm">
    <div class="flex items-center gap-2 text-gray-300">
      <span class="text-green-400">•</span> Research stays isolated
    </div>
    <div class="flex items-center gap-2 text-gray-300">
      <span class="text-green-400">•</span> Parallel task execution
    </div>
    <div class="flex items-center gap-2 text-gray-300">
      <span class="text-green-400">•</span> Only successes return
    </div>
    <div class="flex items-center gap-2 text-gray-300">
      <span class="text-green-400">•</span> Token costs contained
    </div>
    <div class="flex items-center gap-2 text-gray-300">
      <span class="text-green-400">•</span> Context stays focused
    </div>
  </div>
</div>

</div>

</div>

---

# Invoking Subagents

<div class="grid grid-cols-2 gap-8 mt-6">

<div class="p-6 bg-blue-900/40 rounded-xl border border-blue-500">
  <div class="text-xl font-bold text-blue-300 mb-4">💬 Chat Hints</div>
  <div class="bg-gray-900 rounded-lg p-4 text-sm font-mono text-gray-300">
    Run a subagent to research the best<br/>
    authentication patterns for this project
  </div>
  <div class="mt-4 text-sm text-gray-400">
    <div>• Main agent interprets & delegates</div>
    <div>• Ideal for exploratory tasks</div>
    <div>• Inherits model and tools</div>
  </div>
</div>

<div class="p-6 bg-purple-900/40 rounded-xl border border-purple-500">
  <div class="text-xl font-bold text-purple-300 mb-4">📄 Prompt Files</div>
  <div class="bg-gray-900 rounded-lg p-4 text-xs font-mono text-gray-300">
    ---<br/>
    name: document-feature<br/>
    tools: ['agent', 'read', 'search']<br/>
    ---<br/>
    Run a subagent to research the<br/>
    feature implementation details.
  </div>
  <div class="mt-4 text-sm text-gray-400">
    <div>• Declarative tool access</div>
    <div>• Version controlled workflows</div>
    <div>• Reproducible & auditable</div>
  </div>
</div>

</div>

---

# Scenario: Parallel Code Review

<div class="mt-6">

<div class="p-4 bg-gray-800 rounded-lg mb-6">
  <div class="font-mono text-sm text-gray-300">
    Analyze this pull request using three parallel subagents:<br/>
    <span class="text-blue-400">1.</span> Security subagent: Check for vulnerabilities<br/>
    <span class="text-purple-400">2.</span> Performance subagent: Review for N+1 queries<br/>
    <span class="text-green-400">3.</span> Architecture subagent: Verify pattern compliance<br/><br/>
    <span class="text-yellow-400">Synthesize findings into a unified review.</span>
  </div>
</div>

<div class="flex items-center justify-center gap-4">

<div class="flex flex-col gap-2">
  <div class="p-3 bg-blue-900/50 rounded border border-blue-400 text-center w-40">
    <div class="text-xl">🛡️</div>
    <div class="text-xs text-blue-300">Security Review</div>
  </div>
  <div class="p-3 bg-purple-900/50 rounded border border-purple-400 text-center w-40">
    <div class="text-xl">⚡</div>
    <div class="text-xs text-purple-300">Performance Review</div>
  </div>
  <div class="p-3 bg-green-900/50 rounded border border-green-400 text-center w-40">
    <div class="text-xl">🏗️</div>
    <div class="text-xs text-green-300">Architecture Review</div>
  </div>
</div>

<div class="text-3xl text-gray-500">⟹</div>

<div class="p-4 bg-yellow-900/50 rounded-lg border-2 border-yellow-400 w-64 text-center">
  <div class="text-3xl mb-2">📋</div>
  <div class="text-yellow-300 font-semibold">Unified Review</div>
  <div class="text-xs text-gray-400 mt-1">Synthesized findings</div>
</div>

</div>

<div class="text-center text-sm text-gray-500 mt-4">
  Three analyses run simultaneously · Each in isolated context · Results synthesized by main agent
</div>

</div>

---

# Custom Agents as Subagents

<div class="grid grid-cols-2 gap-6 mt-6">

<div>
  <div class="text-lg font-bold text-purple-300 mb-3">Define Specialized Agent</div>
  <div class="bg-gray-900 rounded-lg p-4 text-xs font-mono">
    <span class="text-gray-500">---</span><br/>
    <span class="text-blue-400">name:</span> Security-Review<br/>
    <span class="text-blue-400">description:</span> Security-focused analysis<br/>
    <span class="text-blue-400">tools:</span> ['read', 'search', 'grep']<br/>
    <span class="text-gray-500">---</span><br/>
    <span class="text-green-400">You are a security expert. Analyze for:</span><br/>
    <span class="text-gray-400">- Authentication vulnerabilities</span><br/>
    <span class="text-gray-400">- Authorization bypass risks</span><br/>
    <span class="text-gray-400">- Injection attack vectors</span><br/>
    <span class="text-gray-400">- Secrets exposure</span>
  </div>
</div>

<div>
  <div class="text-lg font-bold text-green-300 mb-3">Invoke as Subagent</div>
  <div class="bg-gray-900 rounded-lg p-4 text-sm font-mono text-gray-300 mb-4">
    Use the Security-Review agent as a<br/>
    subagent to audit the auth module
  </div>

  <div class="p-4 bg-green-900/30 rounded-lg border border-green-500">
    <div class="text-green-300 font-semibold mb-2">🎯 Benefits</div>
    <div class="text-sm text-gray-400 space-y-1">
      <div>• Domain-specific instructions</div>
      <div>• Specialized tool access</div>
      <div>• Focused expertise per task</div>
    </div>
  </div>
</div>

</div>

---

# Controlling Subagent Behavior

<div class="grid grid-cols-2 gap-8 mt-6">

<div>
  <div class="text-lg font-bold text-blue-300 mb-4">🔐 Visibility Controls</div>

  <div class="bg-gray-900 rounded-lg p-4 text-xs font-mono mb-4">
    <span class="text-gray-500">---</span><br/>
    <span class="text-blue-400">name:</span> internal-helper<br/>
    <span class="text-yellow-400">user-invokable:</span> false<br/>
    <span class="text-gray-500">---</span><br/>
    <span class="text-gray-400">Only invokable as a subagent</span>
  </div>

  <table class="w-full text-xs">
    <tr class="border-b border-gray-700">
      <td class="py-2 text-blue-300">user-invokable</td>
      <td class="text-gray-400">Show in dropdown</td>
    </tr>
    <tr>
      <td class="py-2 text-blue-300">disable-model-invocation</td>
      <td class="text-gray-400">Prevent AI invocation</td>
    </tr>
  </table>
</div>

<div>
  <div class="text-lg font-bold text-purple-300 mb-4">🎛️ Restrict Available Agents</div>

  <div class="bg-gray-900 rounded-lg p-4 text-xs font-mono mb-4">
    <span class="text-gray-500">---</span><br/>
    <span class="text-blue-400">name:</span> TDD<br/>
    <span class="text-blue-400">tools:</span> ['agent']<br/>
    <span class="text-yellow-400">agents:</span> ['Red', 'Green', 'Refactor']<br/>
    <span class="text-gray-500">---</span><br/>
    <span class="text-gray-400">Only use TDD-specific subagents</span>
  </div>

  <table class="w-full text-xs">
    <tr class="border-b border-gray-700">
      <td class="py-2 text-purple-300">['Red', 'Green']</td>
      <td class="text-gray-400">Only specific agents</td>
    </tr>
    <tr class="border-b border-gray-700">
      <td class="py-2 text-purple-300">*</td>
      <td class="text-gray-400">All agents (default)</td>
    </tr>
    <tr>
      <td class="py-2 text-purple-300">[]</td>
      <td class="text-gray-400">No subagents</td>
    </tr>
  </table>
</div>

</div>

---

# Anti-Patterns to Avoid

<div class="grid grid-cols-3 gap-6 mt-8">

<div class="p-5 bg-red-900/30 rounded-lg border border-red-500">
  <div class="text-2xl mb-3">🔬</div>
  <div class="font-bold text-red-400 mb-2">Over-Delegation</div>
  <div class="text-sm text-gray-400 mb-3">
    Delegating trivially small tasks adds overhead
  </div>
  <div class="bg-gray-900 rounded p-2 text-xs font-mono text-red-300">
    ❌ Run subagent to read config<br/>
    ❌ Run subagent to count lines
  </div>
</div>

<div class="p-5 bg-red-900/30 rounded-lg border border-red-500">
  <div class="text-2xl mb-3">🌫️</div>
  <div class="font-bold text-red-400 mb-2">Vague Tasks</div>
  <div class="text-sm text-gray-400 mb-3">
    Vague subagent tasks return vague results
  </div>
  <div class="bg-gray-900 rounded p-2 text-xs font-mono text-red-300">
    ❌ "Research authentication"
  </div>
</div>

<div class="p-5 bg-red-900/30 rounded-lg border border-red-500">
  <div class="text-2xl mb-3">🚫</div>
  <div class="font-bold text-red-400 mb-2">Ignoring Results</div>
  <div class="text-sm text-gray-400 mb-3">
    Subagents research but main agent doesn't synthesize
  </div>
  <div class="bg-gray-900 rounded p-2 text-xs font-mono text-red-300">
    ❌ No synthesis step
  </div>
</div>

</div>

---

# Best Practices

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 bg-green-900/30 rounded-lg border border-green-500">
  <div class="flex items-center gap-3 mb-3">
    <span class="text-2xl">🧩</span>
    <span class="font-bold text-green-300">Task Decomposition</span>
  </div>
  <div class="text-sm text-gray-400">
    Break complex work into focused, independent subtasks
  </div>
  <div class="mt-3 text-xs text-gray-500">
    Research → Analysis → Planning
  </div>
</div>

<div class="p-5 bg-green-900/30 rounded-lg border border-green-500">
  <div class="flex items-center gap-3 mb-3">
    <span class="text-2xl">📝</span>
    <span class="font-bold text-green-300">Clear Output Expectations</span>
  </div>
  <div class="text-sm text-gray-400">
    Specify what the subagent should return
  </div>
  <div class="mt-3 text-xs text-gray-500">
    "Return markdown with key findings..."
  </div>
</div>

<div class="p-5 bg-green-900/30 rounded-lg border border-green-500">
  <div class="flex items-center gap-3 mb-3">
    <span class="text-2xl">⚡</span>
    <span class="font-bold text-green-300">Appropriate Parallelization</span>
  </div>
  <div class="text-sm text-gray-400">
    Run independent analyses in parallel
  </div>
  <div class="mt-3 text-xs text-gray-500">
    Security ‖ Performance ‖ Architecture
  </div>
</div>

<div class="p-5 bg-green-900/30 rounded-lg border border-green-500">
  <div class="flex items-center gap-3 mb-3">
    <span class="text-2xl">🔗</span>
    <span class="font-bold text-green-300">Result Synthesis</span>
  </div>
  <div class="text-sm text-gray-400">
    Always instruct main agent to combine results
  </div>
  <div class="mt-3 text-xs text-gray-500">
    "Synthesize into unified plan..."
  </div>
</div>

</div>

---

# Performance Benefits

<div class="grid grid-cols-3 gap-6 mt-8">

<div class="p-6 bg-blue-900/40 rounded-xl border border-blue-500 text-center">
  <div class="text-4xl mb-4">💰</div>
  <div class="text-xl font-bold text-blue-300 mb-2">Token Efficiency</div>
  <div class="text-sm text-gray-400">
    Subagent contexts don't compound main context costs
  </div>
  <div class="mt-4 p-2 bg-blue-900/60 rounded text-xs text-blue-200">
    Only summaries count
  </div>
</div>

<div class="p-6 bg-purple-900/40 rounded-xl border border-purple-500 text-center">
  <div class="text-4xl mb-4">⚡</div>
  <div class="text-xl font-bold text-purple-300 mb-2">Execution Speed</div>
  <div class="text-sm text-gray-400">
    Parallel execution for independent tasks
  </div>
  <div class="mt-4 p-2 bg-purple-900/60 rounded text-xs text-purple-200">
    3 tasks at once
  </div>
</div>

<div class="p-6 bg-green-900/40 rounded-xl border border-green-500 text-center">
  <div class="text-4xl mb-4">🎯</div>
  <div class="text-xl font-bold text-green-300 mb-2">Context Quality</div>
  <div class="text-sm text-gray-400">
    Main context stays focused on orchestration
  </div>
  <div class="mt-4 p-2 bg-green-900/60 rounded text-xs text-green-200">
    No pollution
  </div>
</div>

</div>

---
layout: center
---

# Key Takeaways

<div class="grid grid-cols-2 gap-6 mt-8 max-w-4xl mx-auto">

<div class="flex items-center gap-4 p-4 bg-blue-900/30 rounded-lg">
  <span class="text-3xl">🔒</span>
  <div>
    <div class="font-bold text-blue-300">Context Isolation</div>
    <div class="text-sm text-gray-400">Keep research separate from main context</div>
  </div>
</div>

<div class="flex items-center gap-4 p-4 bg-purple-900/30 rounded-lg">
  <span class="text-3xl">⚡</span>
  <div>
    <div class="font-bold text-purple-300">Parallel Execution</div>
    <div class="text-sm text-gray-400">Multiple subagents run simultaneously</div>
  </div>
</div>

<div class="flex items-center gap-4 p-4 bg-green-900/30 rounded-lg">
  <span class="text-3xl">🧹</span>
  <div>
    <div class="font-bold text-green-300">Token Efficiency</div>
    <div class="text-sm text-gray-400">Only final results return</div>
  </div>
</div>

<div class="flex items-center gap-4 p-4 bg-yellow-900/30 rounded-lg">
  <span class="text-3xl">🎭</span>
  <div>
    <div class="font-bold text-yellow-300">Specialization</div>
    <div class="text-sm text-gray-400">Custom agents for domain expertise</div>
  </div>
</div>

</div>

<div class="mt-12 text-center">
  <span class="text-5xl">🔀</span>
  <div class="text-xl text-gray-400 mt-4">
    Orchestrate complexity · Isolate context · Accelerate workflows
  </div>
</div>

---
layout: center
---

# Resources

<div class="mt-8 space-y-4 text-lg">

<div class="flex items-center gap-4">
  <span class="text-2xl">📚</span>
  <a href="https://code.visualstudio.com/docs/copilot/agents/subagents" class="text-blue-400 hover:underline">
    VS Code Subagents Documentation
  </a>
</div>

<div class="flex items-center gap-4">
  <span class="text-2xl">🎭</span>
  <a href="https://code.visualstudio.com/docs/copilot/customization/custom-agents" class="text-purple-400 hover:underline">
    Custom Agents Documentation
  </a>
</div>

<div class="flex items-center gap-4">
  <span class="text-2xl">🤖</span>
  <a href="https://code.visualstudio.com/docs/copilot/agents/overview" class="text-green-400 hover:underline">
    Agents Overview
  </a>
</div>

</div>

<div class="abs-br m-6">
  <span class="text-sm opacity-50">Tech Talk · GitHub Copilot Workshop</span>
</div>
