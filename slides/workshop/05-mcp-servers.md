---
theme: default
background: https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=1080&fit=crop
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Module 6: MCP Servers
  CopilotWorkshop Training
drawings:
  persist: false
transition: slide-left
title: Module 6 - MCP Servers
mdc: true
---

# Module 6: MCP Servers

<div class="mt-4 text-2xl text-gray-400 font-light">The Context Problem</div>

<div class="mt-12 flex justify-center">
<div class="relative">
<div class="absolute -inset-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full blur-xl opacity-50 animate-pulse"></div>
<div class="relative text-8xl">🔌</div>
</div>
</div>

<div class="mt-12 grid grid-cols-3 gap-6 max-w-2xl mx-auto text-sm">
<div class="text-center">
<div class="text-3xl mb-2">💾</div>
<div class="text-gray-400">Static <span class="text-red-400">files only</span></div>
</div>
<div class="text-center">
<div class="text-3xl mb-2">→</div>
</div>
<div class="text-center">
<div class="text-3xl mb-2">🌐</div>
<div class="text-gray-400">Live <span class="text-green-400">systems</span></div>
</div>
</div>

<div class="abs-br m-6 flex gap-2">
<span class="text-sm opacity-50">⏰ 45 minutes</span>
</div>

---

# 📖 The Story

<div class="grid grid-cols-1 gap-6 mt-6">

<div class="p-6 bg-gradient-to-r from-red-900/40 to-gray-800 rounded-lg border-l-4 border-red-500">
<div class="flex items-start gap-4">
<div class="text-4xl">😩</div>
<div>
<div class="text-lg font-bold text-red-300">Marcus is debugging database queries... again</div>
<div class="text-gray-300 mt-2">For the <span class="text-red-400 font-bold">third time today</span>, Copilot has no idea what's actually in the database. He keeps explaining the schema manually.</div>
</div>
</div>
</div>

<div class="p-6 bg-gray-800 rounded-lg">
<div class="text-lg font-bold text-yellow-300 mb-2">⚠️ The Problem</div>
<div class="text-gray-300">Copilot works with <span class="text-red-400">static files</span>, not <span class="text-blue-400">live systems</span></div>
</div>

<div class="p-6 bg-gradient-to-r from-green-900/40 to-gray-800 rounded-lg border-l-4 border-green-500">
<div class="text-lg font-bold text-green-300 mb-2">💡 The Insight</div>
<div class="text-gray-300">MCP servers connect Copilot to external resources — databases, APIs, tools — treating them as <span class="text-green-400 font-bold">first-class context sources</span></div>
</div>

</div>

---

# 🎯 Learning Objectives

<div class="grid grid-cols-3 gap-4 mt-6">

<div class="p-5 bg-gradient-to-br from-cyan-900/60 to-gray-800 rounded-lg border-2 border-cyan-500">
<div class="text-3xl mb-3">🔧</div>
<div class="text-lg font-bold text-cyan-300">Configure MCP</div>
<div class="text-sm text-gray-400 mt-2">Connect Copilot to databases, APIs, and external tools</div>
</div>

<div class="p-5 bg-gradient-to-br from-blue-900/60 to-gray-800 rounded-lg border-2 border-blue-500">
<div class="text-3xl mb-3">🔒</div>
<div class="text-lg font-bold text-blue-300">Stdio Transport</div>
<div class="text-sm text-gray-400 mt-2">Secure local connections for databases and tools</div>
</div>

<div class="p-5 bg-gradient-to-br from-purple-900/60 to-gray-800 rounded-lg border-2 border-purple-500">
<div class="text-3xl mb-3">💬</div>
<div class="text-lg font-bold text-purple-300">Query Live Data</div>
<div class="text-sm text-gray-400 mt-2">Access real system state directly from Copilot chat</div>
</div>

</div>

<div class="mt-8 p-4 bg-gradient-to-r from-cyan-600/30 to-purple-600/30 rounded-xl border border-cyan-500/30 text-center">
<div class="text-xl">🔌 MCP transforms Copilot from <span class="text-red-400">static files</span> to understanding your <span class="text-green-400">entire technical ecosystem</span></div>
</div>

<div class="mt-4 text-center text-gray-400">⏰ 45 minutes | 🔨 3 exercises</div>

---

# ❌ Before → ✨ After

<div class="grid grid-cols-3 gap-4 mt-6">

<div class="rounded-xl overflow-hidden border border-gray-700">
<div class="bg-gradient-to-r from-red-900/80 to-red-800/60 p-3 text-center">
<div class="text-lg font-bold">🗄️ Database Lookups</div>
</div>
<div class="p-4 space-y-3">
<div class="flex justify-between items-center">
<span class="text-red-400 line-through">2-5 min</span>
<span class="text-2xl">→</span>
<span class="text-green-400 font-bold text-xl">0 min</span>
</div>
<div class="h-2 bg-gray-700 rounded-full overflow-hidden">
<div class="h-full bg-gradient-to-r from-green-500 to-green-400 w-full"></div>
</div>
<div class="text-center text-green-300 font-bold">Eliminated</div>
<div class="text-xs text-gray-500 text-center">Query directly in chat</div>
</div>
</div>

<div class="rounded-xl overflow-hidden border border-gray-700">
<div class="bg-gradient-to-r from-red-900/80 to-red-800/60 p-3 text-center">
<div class="text-lg font-bold">🔍 PR Validation</div>
</div>
<div class="p-4 space-y-3">
<div class="flex justify-between items-center">
<span class="text-red-400 line-through">5 min</span>
<span class="text-2xl">→</span>
<span class="text-green-400 font-bold text-xl">30 sec</span>
</div>
<div class="h-2 bg-gray-700 rounded-full overflow-hidden">
<div class="h-full bg-gradient-to-r from-green-500 to-green-400 w-[90%]"></div>
</div>
<div class="text-center text-green-300 font-bold">90% faster</div>
<div class="text-xs text-gray-500 text-center">Automated checks</div>
</div>
</div>

<div class="rounded-xl overflow-hidden border border-gray-700">
<div class="bg-gradient-to-r from-red-900/80 to-red-800/60 p-3 text-center">
<div class="text-lg font-bold">📜 API Validation</div>
</div>
<div class="p-4 space-y-3">
<div class="flex justify-between items-center">
<span class="text-red-400 line-through">10 min</span>
<span class="text-2xl">→</span>
<span class="text-green-400 font-bold text-xl">30 sec</span>
</div>
<div class="h-2 bg-gray-700 rounded-full overflow-hidden">
<div class="h-full bg-gradient-to-r from-green-500 to-green-400 w-[95%]"></div>
</div>
<div class="text-center text-green-300 font-bold">95% faster</div>
<div class="text-xs text-gray-500 text-center">MCP-powered checks</div>
</div>
</div>

</div>

<div class="mt-6 p-4 bg-gradient-to-r from-green-600/30 to-green-800/30 rounded-xl border border-green-500/50 text-center">
<div class="text-2xl font-bold text-green-300">70 min → 5 min per sprint (93% time saved)</div>
</div>

---

# 💡 Understanding MCP (Model Context Protocol)

<div class="mt-4 p-4 bg-gradient-to-r from-blue-600/30 to-cyan-600/30 rounded-xl border border-blue-500/30 text-center mb-6">
<div class="text-xl font-bold">MCP is an <span class="text-cyan-300">open standard</span> that allows AI to communicate with external tools and services</div>
</div>

<div class="grid grid-cols-3 gap-4">

<div class="p-4 bg-gray-800 rounded-lg text-center">
<div class="text-4xl mb-3">🖥️</div>
<div class="font-bold text-cyan-300">MCP Servers</div>
<div class="text-sm text-gray-400 mt-2">Provide tools, resources, and prompts to AI clients</div>
</div>

<div class="p-4 bg-gray-800 rounded-lg text-center">
<div class="text-4xl mb-3">🔄</div>
<div class="font-bold text-blue-300">Transport</div>
<div class="text-sm text-gray-400 mt-2">stdio (local) or HTTP (remote) communication</div>
</div>

<div class="p-4 bg-gray-800 rounded-lg text-center">
<div class="text-4xl mb-3">🌐</div>
<div class="font-bold text-purple-300">Standard Protocol</div>
<div class="text-sm text-gray-400 mt-2">Any MCP server works with any compatible client</div>
</div>

</div>

<div class="mt-6 p-4 bg-gray-800/60 rounded-lg">
<div class="font-bold text-yellow-300 mb-2">🎯 Why this matters for FanHub:</div>
<div class="grid grid-cols-3 gap-4 text-sm text-gray-300">
<div>🗄️ Connect to PostgreSQL directly</div>
<div>🐙 Access GitHub repos for context</div>
<div>🔗 Query external APIs seamlessly</div>
</div>
</div>

---

# 📚 MCP Architecture

<div class="flex justify-center mt-4">
<div class="flex items-center gap-4">
<div class="p-4 bg-blue-900/60 rounded-lg border-2 border-blue-400 text-center">
<div class="text-3xl mb-2">🤖</div>
<div class="font-bold text-blue-300">Copilot</div>
<div class="text-xs text-gray-400">MCP Client</div>
</div>
<div class="text-3xl text-gray-500">↔</div>
<div class="p-4 bg-purple-900/60 rounded-lg border-2 border-purple-400 text-center">
<div class="text-3xl mb-2">🔌</div>
<div class="font-bold text-purple-300">MCP Server</div>
<div class="text-xs text-gray-400">stdio/HTTP</div>
</div>
<div class="text-3xl text-gray-500">↔</div>
<div class="p-4 bg-green-900/60 rounded-lg border-2 border-green-400 text-center">
<div class="text-3xl mb-2">🗄️</div>
<div class="font-bold text-green-300">External</div>
<div class="text-xs text-gray-400">DB/API/Tools</div>
</div>
</div>
</div>

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-4 bg-gray-800 rounded-lg">
<div class="font-bold text-cyan-300 mb-3">📡 Transport Methods</div>
<div class="space-y-2 text-sm">
<div class="flex items-center gap-2"><span class="text-green-400">●</span> <code>stdio</code> — Local processes (databases, CLI tools)</div>
<div class="flex items-center gap-2"><span class="text-blue-400">●</span> <code>HTTP/SSE</code> — Remote services (cloud APIs)</div>
</div>
</div>

<div class="p-4 bg-gray-800 rounded-lg">
<div class="font-bold text-orange-300 mb-3">🎯 Capabilities</div>
<div class="space-y-2 text-sm">
<div class="flex items-center gap-2"><span class="text-purple-400">●</span> <strong>Tools</strong> — Functions Copilot can invoke</div>
<div class="flex items-center gap-2"><span class="text-cyan-400">●</span> <strong>Resources</strong> — Data sources to read</div>
<div class="flex items-center gap-2"><span class="text-yellow-400">●</span> <strong>Prompts</strong> — Pre-configured workflows</div>
</div>
</div>

</div>

<div class="mt-4 text-center text-sm text-gray-400">
Config: <code class="bg-gray-800 px-2 py-1 rounded">.vscode/mcp.json</code> (workspace) or user settings (global)
</div>

---

# 👥 Key Personas

<div class="grid grid-cols-3 gap-5 mt-6">

<div class="p-5 bg-gradient-to-br from-blue-900/80 to-blue-800/60 rounded-xl border-2 border-blue-400">
<div class="text-4xl mb-3">💻</div>
<h3 class="text-xl font-bold text-white">Marcus</h3>
<p class="text-sm text-blue-200">DevOps Developer · 5 years</p>
<blockquote class="mt-4 text-sm italic text-gray-300 border-l-2 border-blue-400 pl-3">
"Manual schema lookups took 2-5 minutes. MCP server gives instant database access—0 context switches."
</blockquote>
<div class="mt-3 flex items-center gap-2">
<div class="h-1.5 flex-1 bg-green-500 rounded"></div>
<span class="text-green-400 text-xs">100% eliminated</span>
</div>
</div>

<div class="p-5 bg-gradient-to-br from-red-900/80 to-red-800/60 rounded-xl border-2 border-red-400">
<div class="text-4xl mb-3">📊</div>
<h3 class="text-xl font-bold text-white">Sarah</h3>
<p class="text-sm text-red-200">Senior Engineer · 15 years</p>
<blockquote class="mt-4 text-sm italic text-gray-300 border-l-2 border-red-400 pl-3">
"GitHub MCP server—PR validation in 30 seconds vs 5 minutes manually checking criteria."
</blockquote>
<div class="mt-3 flex items-center gap-2">
<div class="h-1.5 flex-1 bg-green-500 rounded"></div>
<span class="text-green-400 text-xs">90% faster</span>
</div>
</div>

<div class="p-5 bg-gradient-to-br from-green-900/80 to-green-800/60 rounded-xl border-2 border-green-400">
<div class="text-4xl mb-3">🧪</div>
<h3 class="text-xl font-bold text-white">Elena</h3>
<p class="text-sm text-green-200">QA Engineer · 8 years</p>
<blockquote class="mt-4 text-sm italic text-gray-300 border-l-2 border-green-400 pl-3">
"API contract validation—10 min per cycle down to 30 seconds with MCP-powered checks."
</blockquote>
<div class="mt-3 flex items-center gap-2">
<div class="h-1.5 flex-1 bg-green-500 rounded"></div>
<span class="text-green-400 text-xs">95% faster</span>
</div>
</div>

</div>

---

# 🔨 Exercises

<div class="grid grid-cols-3 gap-4 mt-6">

<div class="rounded-xl overflow-hidden border border-blue-500/50 hover:border-blue-400 transition-colors">
<div class="bg-gradient-to-r from-blue-900 to-blue-800 p-4">
<div class="flex justify-between items-start">
<div class="text-3xl">🗄️</div>
<div class="px-2 py-1 bg-blue-600 rounded text-xs">20 min</div>
</div>
<div class="text-lg font-bold mt-2">6.1 Database Connection</div>
<div class="text-xs text-blue-300">Marcus ⭐ leads</div>
</div>
<div class="p-4 text-sm space-y-2">
<div class="text-gray-300">Connect Copilot to FanHub's SQLite database</div>
<div class="flex items-center gap-2 mt-3">
<div class="h-1.5 flex-1 bg-green-500 rounded"></div>
<span class="text-green-400 text-xs font-bold">5→0 min</span>
</div>
</div>
</div>

<div class="rounded-xl overflow-hidden border border-red-500/50 hover:border-red-400 transition-colors">
<div class="bg-gradient-to-r from-red-900 to-red-800 p-4">
<div class="flex justify-between items-start">
<div class="text-3xl">🐙</div>
<div class="px-2 py-1 bg-red-600 rounded text-xs">15 min</div>
</div>
<div class="text-lg font-bold mt-2">6.2 PR Validation</div>
<div class="text-xs text-red-300">Sarah ⭐ leads</div>
</div>
<div class="p-4 text-sm space-y-2">
<div class="text-gray-300">Automate PR review with GitHub MCP server</div>
<div class="flex items-center gap-2 mt-3">
<div class="h-1.5 flex-1 bg-green-500 rounded"></div>
<span class="text-green-400 text-xs font-bold">90% faster</span>
</div>
</div>
</div>

<div class="rounded-xl overflow-hidden border border-green-500/50 hover:border-green-400 transition-colors">
<div class="bg-gradient-to-r from-green-900 to-green-800 p-4">
<div class="flex justify-between items-start">
<div class="text-3xl">📜</div>
<div class="px-2 py-1 bg-green-600 rounded text-xs">10 min</div>
</div>
<div class="text-lg font-bold mt-2">6.3 API Validation</div>
<div class="text-xs text-green-300">Elena ⭐ leads</div>
</div>
<div class="p-4 text-sm space-y-2">
<div class="text-gray-300">Validate backend API contracts with MCP</div>
<div class="flex items-center gap-2 mt-3">
<div class="h-1.5 flex-1 bg-green-500 rounded"></div>
<span class="text-green-400 text-xs font-bold">95% faster</span>
</div>
</div>
</div>

</div>

<div class="mt-6 text-center text-gray-400">
<span class="text-2xl">⏰</span> Total: <span class="text-white font-bold">45 minutes</span> of hands-on practice
</div>

---

# 📊 Success Metrics

<div class="grid grid-cols-3 gap-6 mt-8">

<div class="p-6 bg-gradient-to-br from-green-900 to-green-800 rounded-xl text-center">
<div class="text-5xl font-bold text-white mb-2">93%</div>
<div class="text-sm text-green-200">Time saved on lookups</div>
<div class="text-xs text-gray-400 mt-2">70 min → 5 min/sprint</div>
<div class="mt-4 h-2 bg-gray-700 rounded-full overflow-hidden">
<div class="h-full bg-green-400 w-[93%]"></div>
</div>
</div>

<div class="p-6 bg-gradient-to-br from-cyan-900 to-cyan-800 rounded-xl text-center">
<div class="text-5xl font-bold text-white mb-2">0</div>
<div class="text-sm text-cyan-200">Context switches</div>
<div class="text-xs text-gray-400 mt-2">Query directly from chat</div>
<div class="mt-4 flex justify-center gap-1">
<div class="w-3 h-3 bg-cyan-400 rounded-full"></div>
<div class="w-3 h-3 bg-gray-600 rounded-full"></div>
<div class="w-3 h-3 bg-gray-600 rounded-full"></div>
</div>
</div>

<div class="p-6 bg-gradient-to-br from-purple-900 to-purple-800 rounded-xl text-center">
<div class="text-5xl font-bold text-white mb-2">100%</div>
<div class="text-sm text-purple-200">Live data accuracy</div>
<div class="text-xs text-gray-400 mt-2">No stale documentation</div>
<div class="mt-4 h-2 bg-gray-700 rounded-full overflow-hidden">
<div class="h-full bg-purple-400 w-full"></div>
</div>
</div>

</div>

<div class="mt-6 p-4 bg-gradient-to-r from-green-600/30 to-cyan-600/30 rounded-xl border border-green-500/30 text-center">
<div class="text-xl font-bold">MCP servers: from <span class="text-red-400">manual lookups</span> to <span class="text-green-400">instant live access</span></div>
</div>

---

# 💭 Marcus's Transformation

<div class="flex flex-col items-center justify-center h-full">

<div class="p-8 bg-gradient-to-r from-blue-600 to-cyan-700 rounded-xl shadow-lg max-w-3xl">
<div class="text-6xl mb-6 text-center">💻</div>
<blockquote class="text-xl text-white italic text-center leading-relaxed">
"Manual schema lookups used to take 2-5 minutes per query, with constant context switching between IDE and database tools. SQLite MCP server eliminated that entirely—I query the FanHub database directly from chat. Zero context switches, zero time wasted."
</blockquote>
<div class="text-right text-cyan-200 mt-6 text-lg">
— Marcus, DevOps Developer
</div>
</div>

<div class="mt-8 flex gap-8 text-center">
<div>
<div class="text-3xl font-bold text-red-400 line-through">2-5 min</div>
<div class="text-sm text-gray-500">Before</div>
</div>
<div class="text-3xl text-gray-500">→</div>
<div>
<div class="text-3xl font-bold text-green-400">0 min</div>
<div class="text-sm text-gray-500">After</div>
</div>
</div>

</div>

---

# 🔗 Compounding Value

<div class="space-y-4 mt-6">

<div class="flex items-center gap-4">
<div class="flex-shrink-0 w-28 p-3 bg-purple-900/60 rounded text-center text-sm font-bold text-purple-200">Module 5</div>
<div class="text-gray-400">→</div>
<div class="flex-1 p-3 bg-gray-800 rounded text-sm text-gray-300">Skills provide <span class="text-purple-300">domain knowledge</span> (static patterns)</div>
</div>

<div class="flex items-center gap-4">
<div class="flex-shrink-0 w-28 p-3 bg-cyan-900/60 rounded text-center text-sm font-bold text-cyan-200">Module 6</div>
<div class="text-gray-400">→</div>
<div class="flex-1 p-3 bg-gray-800 rounded text-sm text-gray-300">MCP provides <span class="text-cyan-300">live data</span> (dynamic state)</div>
</div>

<div class="text-3xl text-center text-gray-400 my-2">↓</div>

<div class="p-4 bg-gradient-to-r from-purple-600/30 to-cyan-600/30 rounded-xl border border-purple-500/30 text-center">
<div class="text-lg font-bold">Static knowledge + Dynamic data = <span class="text-green-400">Complete context</span></div>
</div>

<div class="text-3xl text-center text-gray-400 my-2">↓</div>

<div class="flex items-center gap-4">
<div class="flex-shrink-0 w-28 p-3 bg-orange-900/60 rounded text-center text-sm font-bold text-orange-200">Module 7</div>
<div class="text-gray-400">→</div>
<div class="flex-1 p-3 bg-gray-800 rounded text-sm text-gray-300">Custom agents <span class="text-orange-300">bundle MCP servers</span> for specialized access</div>
</div>

</div>

---

# ➡️ Next Up: Custom Agents

<div class="flex items-center justify-center h-full">
<div class="max-w-3xl space-y-6">

<div class="text-center text-xl text-gray-300">
You have skills, MCP servers, prompts, instructions...
</div>

<div class="p-4 bg-red-900/30 rounded-lg border border-red-500/50 text-center">
<div class="text-red-300">But you're constantly switching contexts:</div>
<div class="text-lg text-gray-400 mt-2">Planning mode → Implementation mode → Review mode</div>
</div>

<div class="text-4xl text-center text-gray-400">↓</div>

<div class="p-6 bg-gradient-to-r from-orange-600 to-orange-800 rounded-xl text-center">
<div class="text-2xl font-bold text-white mb-3">
Module 7: Custom Agents
</div>
<div class="text-base text-orange-100">
Bundle everything into role-based agents you can switch between instantly
</div>
</div>

<div class="mt-6 p-4 bg-gray-800 rounded-lg border-l-4 border-orange-500">
<div class="text-sm italic text-gray-300">
"I keep reconfiguring Copilot for different tasks—planning needs different context than reviewing. Can I save these configurations?"
</div>
<div class="text-xs text-gray-500 mt-2">— Sarah, ready for role-based presets</div>
</div>

</div>
</div>

---
layout: center
class: text-center
---

# ✅ Module 6 Complete

<div class="mt-8 space-y-6">

<div class="text-2xl text-gray-300">You've connected Copilot to live systems</div>

<div class="flex justify-center gap-8 mt-8">
<div class="text-center">
<div class="text-4xl font-bold text-cyan-400">93%</div>
<div class="text-sm text-gray-500">Time Saved</div>
</div>
<div class="text-center">
<div class="text-4xl font-bold text-green-400">0</div>
<div class="text-sm text-gray-500">Context Switches</div>
</div>
<div class="text-center">
<div class="text-4xl font-bold text-purple-400">3</div>
<div class="text-sm text-gray-500">MCP Connections</div>
</div>
</div>

<div class="mt-8 p-4 bg-gradient-to-r from-orange-600/30 to-cyan-600/30 rounded-xl border border-orange-500/30 max-w-xl mx-auto">
<div class="text-lg">
<span class="text-orange-300">Next:</span> Module 7 - Custom Agents
</div>
<div class="text-sm text-gray-400 mt-1">Bundle skills, MCP servers & prompts into role-based presets</div>
</div>

</div>
