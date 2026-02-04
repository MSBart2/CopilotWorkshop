---
theme: default
background: https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=1080&fit=crop
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Module 7: Custom Agents
  CopilotWorkshop Training
drawings:
  persist: false
transition: slide-left
title: Module 7 - Custom Agents
mdc: true
---

# Module 7: Custom Agents

<div class="mt-4 text-2xl text-gray-400 font-light">The Context-Switching Problem</div>

<div class="mt-12 flex justify-center">
<div class="relative">
<div class="absolute -inset-4 bg-gradient-to-r from-orange-500 via-red-500 to-purple-500 rounded-full blur-xl opacity-50 animate-pulse"></div>
<div class="relative text-8xl">🤖</div>
</div>
</div>

<div class="mt-12 grid grid-cols-3 gap-6 max-w-2xl mx-auto text-sm">
<div class="text-center">
<div class="text-3xl mb-2">🔄</div>
<div class="text-gray-400">Manual <span class="text-red-400">switching</span></div>
</div>
<div class="text-center">
<div class="text-3xl mb-2">→</div>
</div>
<div class="text-center">
<div class="text-3xl mb-2">⚡</div>
<div class="text-gray-400">Instant <span class="text-green-400">presets</span></div>
</div>
</div>

<div class="abs-br m-6 flex gap-2">
<span class="text-sm opacity-50">⏰ 75 minutes</span>
</div>

---

# 📖 The Story

<div class="grid grid-cols-1 gap-4 mt-6">

<div class="p-5 bg-gradient-to-r from-red-900/40 to-gray-800 rounded-lg border-l-4 border-red-500">
<div class="flex items-start gap-4">
<div class="text-4xl">😩</div>
<div>
<div class="text-lg font-bold text-red-300">Sarah switches between tasks 5 times per day</div>
<div class="grid grid-cols-3 gap-4 mt-3 text-sm text-gray-300">
<div>🔍 Planning <span class="text-gray-500">(read-only)</span></div>
<div>📝 Implementation <span class="text-gray-500">(full editing)</span></div>
<div>🔎 Review <span class="text-gray-500">(analysis)</span></div>
</div>
</div>
</div>
</div>

<div class="p-4 bg-gray-800 rounded-lg">
<div class="text-lg font-bold text-yellow-300 mb-2">⚠️ The Problem</div>
<div class="text-gray-300">Each switch = <span class="text-red-400 font-bold">5 minutes</span> reconfiguring Copilot's behavior</div>
<div class="text-sm text-gray-500 mt-1">= 25 min/day lost to context switching</div>
</div>

<div class="p-5 bg-gradient-to-r from-green-900/40 to-gray-800 rounded-lg border-l-4 border-green-500">
<div class="text-lg font-bold text-green-300 mb-2">💡 The Insight</div>
<div class="text-gray-300">Bundle tools, skills, and instructions into <span class="text-green-400 font-bold">role-based presets</span> you can switch instantly</div>
</div>

</div>

---

# 🎯 Learning Objectives

<div class="grid grid-cols-3 gap-4 mt-6">

<div class="p-5 bg-gradient-to-br from-orange-900/60 to-gray-800 rounded-lg border-2 border-orange-500">
<div class="text-3xl mb-3">📄</div>
<div class="text-lg font-bold text-orange-300">Create Agents</div>
<div class="text-sm text-gray-400 mt-2">Define specialized personas in <code>.agent.md</code> files</div>
</div>

<div class="p-5 bg-gradient-to-br from-red-900/60 to-gray-800 rounded-lg border-2 border-red-500">
<div class="text-3xl mb-3">🔧</div>
<div class="text-lg font-bold text-red-300">Configure Tools</div>
<div class="text-sm text-gray-400 mt-2">Set tool access, handoffs, and behavioral constraints</div>
</div>

<div class="p-5 bg-gradient-to-br from-purple-900/60 to-gray-800 rounded-lg border-2 border-purple-500">
<div class="text-3xl mb-3">🌐</div>
<div class="text-lg font-bold text-purple-300">Web Access</div>
<div class="text-sm text-gray-400 mt-2">Same agents work on github.com automatically</div>
</div>

</div>

<div class="mt-6 p-4 bg-gradient-to-r from-orange-600/30 to-purple-600/30 rounded-xl border border-orange-500/30 text-center">
<div class="text-xl">Custom agents orchestrate <span class="text-orange-300">Modules 1-6</span> into <span class="text-green-400">role-based presets</span> with instant switching</div>
</div>

<div class="mt-4 text-center text-gray-400">⏰ 75 minutes | 🔨 5 exercises</div>

---

# ❌ Before → ✨ After

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="rounded-xl overflow-hidden border border-red-500/50">
<div class="bg-gradient-to-r from-red-900/80 to-red-800/60 p-4 text-center">
<div class="text-xl font-bold">❌ Manual Role Switching</div>
</div>
<div class="p-5 space-y-3">
<div class="flex justify-between items-center text-sm">
<span class="text-gray-300">Loading planning context</span>
<span class="text-red-400 font-bold">5 min</span>
</div>
<div class="flex justify-between items-center text-sm">
<span class="text-gray-300">Accidental edits during research</span>
<span class="text-red-400 font-bold">3 errors</span>
</div>
<div class="flex justify-between items-center text-sm">
<span class="text-gray-300">Setting up security review</span>
<span class="text-red-400 font-bold">6 min</span>
</div>
<div class="flex justify-between items-center text-sm">
<span class="text-gray-300">Consistent analysis approach</span>
<span class="text-red-400 font-bold">Inconsistent</span>
</div>
<div class="mt-4 pt-4 border-t border-gray-700">
<div class="text-center text-red-300 font-bold">25 min/day on context switching</div>
</div>
</div>
</div>

<div class="rounded-xl overflow-hidden border border-green-500/50">
<div class="bg-gradient-to-r from-green-900/80 to-green-800/60 p-4 text-center">
<div class="text-xl font-bold">✨ Agent-Based Presets</div>
</div>
<div class="p-5 space-y-3">
<div class="flex justify-between items-center text-sm">
<span class="text-gray-300">Setup time</span>
<span class="text-green-400 font-bold">0 min (instant)</span>
</div>
<div class="flex justify-between items-center text-sm">
<span class="text-gray-300">Accidental edits</span>
<span class="text-green-400 font-bold">0 (read-only enforced)</span>
</div>
<div class="flex justify-between items-center text-sm">
<span class="text-gray-300">Review setup</span>
<span class="text-green-400 font-bold">0 min (preset ready)</span>
</div>
<div class="flex justify-between items-center text-sm">
<span class="text-gray-300">Workflow consistency</span>
<span class="text-green-400 font-bold">100%</span>
</div>
<div class="mt-4 pt-4 border-t border-gray-700">
<div class="text-center text-green-300 font-bold">Zero switching overhead</div>
</div>
</div>
</div>

</div>

---

# 💡 Understanding Custom Agents

<div class="mt-4 p-4 bg-gradient-to-r from-orange-600/30 to-red-600/30 rounded-xl border border-orange-500/30 text-center mb-6">
<div class="text-xl font-bold">Custom agents are <span class="text-orange-300">role-based configurations</span> stored in <code>.agent.md</code> files</div>
</div>

<div class="grid grid-cols-2 gap-4">

<div class="p-4 bg-gray-800 rounded-lg">
<div class="font-bold text-orange-300 mb-3">🛠️ Key Characteristics</div>
<div class="space-y-2 text-sm">
<div class="flex items-center gap-2"><span class="text-blue-400">●</span> <strong>YAML frontmatter</strong> — Tools, model, handoffs, MCP</div>
<div class="flex items-center gap-2"><span class="text-green-400">●</span> <strong>Markdown body</strong> — Agent-specific instructions</div>
<div class="flex items-center gap-2"><span class="text-purple-400">●</span> <strong>Handoffs</strong> — Guided transitions between agents</div>
<div class="flex items-center gap-2"><span class="text-cyan-400">●</span> <strong>Two scopes</strong> — Workspace or User level</div>
<div class="flex items-center gap-2"><span class="text-yellow-400">●</span> <strong>Web accessible</strong> — Works on github.com too!</div>
</div>
</div>

<div class="p-4 bg-gray-800 rounded-lg">
<div class="font-bold text-purple-300 mb-3">🔄 How They Differ</div>
<div class="space-y-3 text-sm">
<div class="p-2 bg-blue-900/40 rounded border-l-2 border-blue-400">
<span class="text-blue-300 font-bold">Instructions</span> = behavior for all contexts
</div>
<div class="p-2 bg-purple-900/40 rounded border-l-2 border-purple-400">
<span class="text-purple-300 font-bold">Skills</span> = specialized capabilities
</div>
<div class="p-2 bg-orange-900/40 rounded border-l-2 border-orange-400">
<span class="text-orange-300 font-bold">Agents</span> = complete working modes (tools + skills + instructions)
</div>
</div>
</div>

</div>

---

# 📚 Agent File Structure

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="rounded-xl overflow-hidden border border-blue-500/50">
<div class="bg-gradient-to-r from-blue-900 to-blue-800 p-3">
<div class="font-bold text-blue-200">📄 YAML Frontmatter</div>
</div>
<div class="p-4 bg-gray-900 font-mono text-xs">
<div><span class="text-blue-400">name:</span> Planner</div>
<div><span class="text-blue-400">description:</span> Generate implementation plan</div>
<div><span class="text-blue-400">tools:</span> ['search', 'fetch', 'githubRepo']</div>
<div><span class="text-blue-400">model:</span> Claude Sonnet 4</div>
<div><span class="text-blue-400">handoffs:</span></div>
<div class="pl-2">- <span class="text-green-400">label:</span> Start Implementation</div>
<div class="pl-4"><span class="text-green-400">agent:</span> implement</div>
<div class="pl-4"><span class="text-green-400">prompt:</span> Implement this plan</div>
</div>
</div>

<div class="rounded-xl overflow-hidden border border-green-500/50">
<div class="bg-gradient-to-r from-green-900 to-green-800 p-3">
<div class="font-bold text-green-200">📝 Markdown Body</div>
</div>
<div class="p-4 bg-gray-900 font-mono text-xs">
<div class="text-purple-400"># Planning Instructions</div>
<div class="mt-2">You are in planning mode.</div>
<div>Your task is to generate</div>
<div>implementation plans.</div>
<div class="mt-2 text-red-400">Do not make code edits,</div>
<div class="text-red-400">research and analysis only.</div>
<div class="mt-2">Include:</div>
<div>- Feature overview</div>
<div>- Implementation steps</div>
<div>- Testing strategy</div>
</div>
</div>

</div>

<div class="mt-4 text-center text-sm text-gray-400">
Location: <code class="bg-gray-800 px-2 py-1 rounded">.github/agents/planner.agent.md</code>
</div>

---

# 👥 Key Personas

<div class="grid grid-cols-3 gap-5 mt-6">

<div class="p-5 bg-gradient-to-br from-blue-900/80 to-blue-800/60 rounded-xl border-2 border-blue-400">
<div class="text-4xl mb-3">📝</div>
<h3 class="text-xl font-bold text-white">David</h3>
<p class="text-sm text-blue-200">Staff Engineer · 20 years</p>
<blockquote class="mt-4 text-sm italic text-gray-300 border-l-2 border-blue-400 pl-3">
"Feature planning agent—read-only tools prevent accidental edits during research."
</blockquote>
<div class="mt-3 px-2 py-1 bg-blue-600/30 rounded text-xs text-blue-300 inline-block">
@feature-plan
</div>
</div>

<div class="p-5 bg-gradient-to-br from-red-900/80 to-red-800/60 rounded-xl border-2 border-red-400">
<div class="text-4xl mb-3">🛠️</div>
<h3 class="text-xl font-bold text-white">Sarah</h3>
<p class="text-sm text-red-200">Senior Engineer · 15 years</p>
<blockquote class="mt-4 text-sm italic text-gray-300 border-l-2 border-red-400 pl-3">
"Implementation agent—full editing tools + API skill + ADR workflow."
</blockquote>
<div class="mt-3 px-2 py-1 bg-red-600/30 rounded text-xs text-red-300 inline-block">
@implement
</div>
</div>

<div class="p-5 bg-gradient-to-br from-green-900/80 to-green-800/60 rounded-xl border-2 border-green-400">
<div class="text-4xl mb-3">🔒</div>
<h3 class="text-xl font-bold text-white">Elena</h3>
<p class="text-sm text-green-200">QA Engineer · 8 years</p>
<blockquote class="mt-4 text-sm italic text-gray-300 border-l-2 border-green-400 pl-3">
"Security review agent—catches 5 issues per review vs previous 2."
</blockquote>
<div class="mt-3 px-2 py-1 bg-green-600/30 rounded text-xs text-green-300 inline-block">
@security-review
</div>
</div>

</div>

---

# 🔨 Exercises

<div class="grid grid-cols-5 gap-3 mt-4">

<div class="rounded-lg overflow-hidden border border-gray-600">
<div class="bg-gray-700 p-2 text-center">
<div class="text-xs text-gray-400">15 min</div>
<div class="font-bold text-sm">7.1</div>
</div>
<div class="p-3 text-xs">
<div class="text-gray-300">Default Plan Agent</div>
<div class="text-gray-500 mt-1">All 🤝</div>
</div>
</div>

<div class="rounded-lg overflow-hidden border border-blue-500/50">
<div class="bg-blue-900 p-2 text-center">
<div class="text-xs text-blue-400">15 min</div>
<div class="font-bold text-sm">7.2</div>
</div>
<div class="p-3 text-xs">
<div class="text-gray-300">Feature Planning</div>
<div class="text-blue-400 mt-1">David ⭐</div>
</div>
</div>

<div class="rounded-lg overflow-hidden border border-red-500/50">
<div class="bg-red-900 p-2 text-center">
<div class="text-xs text-red-400">15 min</div>
<div class="font-bold text-sm">7.3</div>
</div>
<div class="p-3 text-xs">
<div class="text-gray-300">Implementation</div>
<div class="text-red-400 mt-1">Sarah ⭐</div>
</div>
</div>

<div class="rounded-lg overflow-hidden border border-green-500/50">
<div class="bg-green-900 p-2 text-center">
<div class="text-xs text-green-400">15 min</div>
<div class="font-bold text-sm">7.4</div>
</div>
<div class="p-3 text-xs">
<div class="text-gray-300">Security Review</div>
<div class="text-green-400 mt-1">Elena ⭐</div>
</div>
</div>

<div class="rounded-lg overflow-hidden border border-purple-500/50">
<div class="bg-purple-900 p-2 text-center">
<div class="text-xs text-purple-400">15 min</div>
<div class="font-bold text-sm">7.5</div>
</div>
<div class="p-3 text-xs">
<div class="text-gray-300">Web Access</div>
<div class="text-purple-400 mt-1">Rafael ⭐</div>
</div>
</div>

</div>

<div class="mt-6 grid grid-cols-3 gap-4">
<div class="p-3 bg-gray-800 rounded-lg text-center">
<div class="text-green-400 font-bold">5 min → 0 min</div>
<div class="text-xs text-gray-500">Setup time eliminated</div>
</div>
<div class="p-3 bg-gray-800 rounded-lg text-center">
<div class="text-green-400 font-bold">3 → 0</div>
<div class="text-xs text-gray-500">Accidental edits</div>
</div>
<div class="p-3 bg-gray-800 rounded-lg text-center">
<div class="text-green-400 font-bold">2 → 5</div>
<div class="text-xs text-gray-500">Security issues caught</div>
</div>
</div>

---

# 📊 Success Metrics

<div class="grid grid-cols-3 gap-6 mt-8">

<div class="p-6 bg-gradient-to-br from-green-900 to-green-800 rounded-xl text-center">
<div class="text-5xl font-bold text-white mb-2">100%</div>
<div class="text-sm text-green-200">Context switching eliminated</div>
<div class="text-xs text-gray-400 mt-2">Instant role changes</div>
<div class="mt-4 h-2 bg-gray-700 rounded-full overflow-hidden">
<div class="h-full bg-green-400 w-full"></div>
</div>
</div>

<div class="p-6 bg-gradient-to-br from-blue-900 to-blue-800 rounded-xl text-center">
<div class="text-5xl font-bold text-white mb-2">0</div>
<div class="text-sm text-blue-200">Accidental modifications</div>
<div class="text-xs text-gray-400 mt-2">Tool restrictions enforced</div>
<div class="mt-4 flex justify-center gap-1">
<div class="w-3 h-3 bg-blue-400 rounded-full"></div>
<div class="w-3 h-3 bg-gray-600 rounded-full"></div>
<div class="w-3 h-3 bg-gray-600 rounded-full"></div>
</div>
</div>

<div class="p-6 bg-gradient-to-br from-purple-900 to-purple-800 rounded-xl text-center">
<div class="text-5xl font-bold text-white mb-2">150%</div>
<div class="text-sm text-purple-200">Security issue detection</div>
<div class="text-xs text-gray-400 mt-2">2 → 5 issues caught</div>
<div class="mt-4 h-2 bg-gray-700 rounded-full overflow-hidden">
<div class="h-full bg-purple-400 w-[150%] max-w-full"></div>
</div>
</div>

</div>

<div class="mt-6 p-4 bg-gradient-to-r from-orange-600/30 to-purple-600/30 rounded-xl border border-orange-500/30 text-center">
<div class="text-xl font-bold">Agents: from <span class="text-red-400">manual switching</span> to <span class="text-green-400">instant role presets</span></div>
</div>

---

# 💭 David's Transformation

<div class="flex flex-col items-center justify-center h-full">

<div class="p-8 bg-gradient-to-r from-blue-600 to-purple-700 rounded-xl shadow-lg max-w-3xl">
<div class="text-6xl mb-6 text-center">📝</div>
<blockquote class="text-xl text-white italic text-center leading-relaxed">
"Manual planning setup took 5 minutes—loading context, preventing accidental edits. The @feature-plan agent has read-only tools configured, feature requirements skill loaded, and GitHub MCP connected. Instant switch, zero setup, perfect focus."
</blockquote>
<div class="text-right text-purple-200 mt-6 text-lg">
— David, Staff Engineer
</div>
</div>

<div class="mt-8 flex gap-8 text-center">
<div>
<div class="text-3xl font-bold text-red-400 line-through">5 min</div>
<div class="text-sm text-gray-500">Setup before</div>
</div>
<div class="text-3xl text-gray-500">→</div>
<div>
<div class="text-3xl font-bold text-green-400">0 min</div>
<div class="text-sm text-gray-500">Instant switch</div>
</div>
</div>

</div>

---

# 🌐 Web Accessibility Insight

<div class="mt-4 p-4 bg-gradient-to-r from-purple-600/30 to-blue-600/30 rounded-xl border border-purple-500/30 text-center mb-6">
<div class="text-xl font-bold">Custom agents in <code>.github/agents/</code> work <span class="text-green-400">automatically</span> on both platforms!</div>
</div>

<div class="grid grid-cols-2 gap-6">

<div class="p-5 bg-gray-800 rounded-xl border-2 border-blue-500">
<div class="flex items-center gap-3 mb-3">
<div class="text-3xl">💻</div>
<div class="text-xl font-bold text-blue-300">VS Code</div>
</div>
<div class="text-gray-300">Full implementation capabilities</div>
<div class="mt-3 text-sm text-gray-500">Best for: Editing, debugging, terminal</div>
</div>

<div class="p-5 bg-gray-800 rounded-xl border-2 border-purple-500">
<div class="flex items-center gap-3 mb-3">
<div class="text-3xl">🌐</div>
<div class="text-xl font-bold text-purple-300">github.com/copilot</div>
</div>
<div class="text-gray-300">Planning & analysis (no IDE needed)</div>
<div class="mt-3 text-sm text-gray-500">Best for: Meetings, mobile, quick access</div>
</div>

</div>

<div class="mt-6 p-4 bg-gray-800 rounded-lg border-l-4 border-purple-500">
<div class="text-sm italic text-gray-300">
"I can use @feature-plan during meetings from my browser—no VS Code launch, no context-switching. Feature analysis went from 5-6 minutes to 1.5 minutes because I'm already in the right interface."
</div>
<div class="text-xs text-gray-500 mt-2">— Rafael, Product Manager</div>
</div>

---

# 🔗 Your Complete AI-Assisted Development Stack

<div class="space-y-3 mt-4">

<div class="flex items-center gap-4">
<div class="flex-shrink-0 w-28 p-3 bg-blue-900/60 rounded text-center text-sm font-bold text-blue-200">Module 1</div>
<div class="text-gray-400">→</div>
<div class="flex-1 p-3 bg-gray-800 rounded text-sm text-gray-300"><span class="text-blue-300">Repository instructions</span> — coding standards for all interactions</div>
</div>

<div class="flex items-center gap-4">
<div class="flex-shrink-0 w-28 p-3 bg-green-900/60 rounded text-center text-sm font-bold text-green-200">Module 2</div>
<div class="text-gray-400">→</div>
<div class="flex-1 p-3 bg-gray-800 rounded text-sm text-gray-300"><span class="text-green-300">Plan mode</span> — research before implementation</div>
</div>

<div class="flex items-center gap-4">
<div class="flex-shrink-0 w-28 p-3 bg-yellow-900/60 rounded text-center text-sm font-bold text-yellow-200">Module 3</div>
<div class="text-gray-400">→</div>
<div class="flex-1 p-3 bg-gray-800 rounded text-sm text-gray-300"><span class="text-yellow-300">Custom prompts</span> — reusable task templates</div>
</div>

<div class="flex items-center gap-4">
<div class="flex-shrink-0 w-28 p-3 bg-orange-900/60 rounded text-center text-sm font-bold text-orange-200">Module 4</div>
<div class="text-gray-400">→</div>
<div class="flex-1 p-3 bg-gray-800 rounded text-sm text-gray-300"><span class="text-orange-300">Custom instructions</span> — path-based context</div>
</div>

<div class="flex items-center gap-4">
<div class="flex-shrink-0 w-28 p-3 bg-purple-900/60 rounded text-center text-sm font-bold text-purple-200">Module 5</div>
<div class="text-gray-400">→</div>
<div class="flex-1 p-3 bg-gray-800 rounded text-sm text-gray-300"><span class="text-purple-300">Agent skills</span> — specialized capabilities with scripts</div>
</div>

<div class="flex items-center gap-4">
<div class="flex-shrink-0 w-28 p-3 bg-cyan-900/60 rounded text-center text-sm font-bold text-cyan-200">Module 6</div>
<div class="text-gray-400">→</div>
<div class="flex-1 p-3 bg-gray-800 rounded text-sm text-gray-300"><span class="text-cyan-300">MCP servers</span> — live data connections</div>
</div>

<div class="flex items-center gap-4">
<div class="flex-shrink-0 w-28 p-3 bg-red-900/60 rounded text-center text-sm font-bold text-red-200">Module 7</div>
<div class="text-gray-400">→</div>
<div class="flex-1 p-3 bg-gray-800 rounded text-sm text-gray-300"><span class="text-red-300">Custom agents</span> — role-based orchestration</div>
</div>

</div>

---

# 🎉 Workshop Complete!

<div class="flex items-center justify-center h-full">
<div class="max-w-4xl text-center space-y-6">

<div class="relative inline-block">
<div class="absolute -inset-4 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 rounded-full blur-xl opacity-60 animate-pulse"></div>
<div class="relative text-8xl">🏆</div>
</div>

<div class="text-3xl font-bold text-white mt-6">Congratulations!</div>
<div class="text-xl text-gray-300">You've completed the entire CopilotWorkshop training</div>

<div class="grid grid-cols-4 gap-4 mt-8">
<div class="p-4 bg-gradient-to-br from-blue-900/60 to-blue-800/40 rounded-xl">
<div class="text-3xl font-bold text-blue-300">7</div>
<div class="text-xs text-gray-400">Modules Completed</div>
</div>
<div class="p-4 bg-gradient-to-br from-green-900/60 to-green-800/40 rounded-xl">
<div class="text-3xl font-bold text-green-300">20+</div>
<div class="text-xs text-gray-400">Exercises Practiced</div>
</div>
<div class="p-4 bg-gradient-to-br from-purple-900/60 to-purple-800/40 rounded-xl">
<div class="text-3xl font-bold text-purple-300">85%</div>
<div class="text-xs text-gray-400">Avg Time Saved</div>
</div>
<div class="p-4 bg-gradient-to-br from-orange-900/60 to-orange-800/40 rounded-xl">
<div class="text-3xl font-bold text-orange-300">∞</div>
<div class="text-xs text-gray-400">Potential Unlocked</div>
</div>
</div>

<div class="mt-6 p-4 bg-gradient-to-r from-green-600/30 to-blue-600/30 rounded-xl border border-green-500/30">
<div class="text-lg italic text-gray-300">
"From skeptic to advocate. From manual to AI-assisted. From individual to team multiplier."
</div>
</div>

</div>
</div>

---
layout: center
class: text-center
---

# 🌟 The FanHub Team's Transformation

<div class="mt-6 grid grid-cols-5 gap-3">

<div class="p-3 bg-gradient-to-br from-red-900/60 to-red-800/40 rounded-xl text-center">
<div class="text-2xl mb-1">📊</div>
<div class="text-sm font-bold text-red-300">Sarah</div>
<div class="text-xs text-gray-400">"Prove it" → Convinced</div>
</div>

<div class="p-3 bg-gradient-to-br from-blue-900/60 to-blue-800/40 rounded-xl text-center">
<div class="text-2xl mb-1">🏗️</div>
<div class="text-sm font-bold text-blue-300">David</div>
<div class="text-xs text-gray-400">20 yrs amplified</div>
</div>

<div class="p-3 bg-gradient-to-br from-purple-900/60 to-purple-800/40 rounded-xl text-center">
<div class="text-2xl mb-1">⚙️</div>
<div class="text-sm font-bold text-purple-300">Marcus</div>
<div class="text-xs text-gray-400">Full-stack confident</div>
</div>

<div class="p-3 bg-gradient-to-br from-green-900/60 to-green-800/40 rounded-xl text-center">
<div class="text-2xl mb-1">🧪</div>
<div class="text-sm font-bold text-green-300">Elena</div>
<div class="text-xs text-gray-400">AI-assisted QA</div>
</div>

<div class="p-3 bg-gradient-to-br from-orange-900/60 to-orange-800/40 rounded-xl text-center">
<div class="text-2xl mb-1">📝</div>
<div class="text-sm font-bold text-orange-300">Rafael</div>
<div class="text-xs text-gray-400">Execution enabler</div>
</div>

</div>

<div class="mt-8 p-6 bg-gradient-to-r from-green-600 to-blue-600 rounded-xl max-w-2xl mx-auto">
<div class="text-2xl font-bold text-white mb-2">You Are Now AI-Native Developers</div>
<div class="text-base text-green-100">Instructions • Plan Mode • Prompts • Custom Instructions • Skills • MCP • Agents</div>
</div>

<div class="mt-6 text-gray-400 text-sm">
Go forth and build amazing things! 🚀
</div>

---
layout: center
class: text-center
---

<div class="space-y-8">

<div class="text-6xl">🚀</div>

<div class="text-4xl font-bold bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
Thank You!
</div>

<div class="text-xl text-gray-300">CopilotWorkshop Training Complete</div>

<div class="grid grid-cols-3 gap-8 mt-8 max-w-2xl mx-auto">
<div class="text-center">
<div class="text-3xl">📚</div>
<div class="text-sm text-gray-400 mt-2">Keep Learning</div>
<div class="text-xs text-gray-500">docs.github.com/copilot</div>
</div>
<div class="text-center">
<div class="text-3xl">🤝</div>
<div class="text-sm text-gray-400 mt-2">Share Knowledge</div>
<div class="text-xs text-gray-500">Train your team</div>
</div>
<div class="text-center">
<div class="text-3xl">🛠️</div>
<div class="text-sm text-gray-400 mt-2">Build Great Things</div>
<div class="text-xs text-gray-500">AI + Human = Magic</div>
</div>
</div>

</div>
