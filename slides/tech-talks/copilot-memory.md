---
theme: default
background: https://source.unsplash.com/collection/94734566/1920x1080
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Copilot Memory: Stateful AI That Remembers Your Preferences
  CopilotTraining Tech Talk
drawings:
  persist: false
transition: slide-left
title: Copilot Memory
module: tech-talks/copilot-memory
mdc: true
status: active
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
Copilot Memory
</h1>
<div class="mt-4 relative z-10">
<span class="px-6 py-2 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xl font-medium shadow-lg shadow-cyan-500/25">
Stateful AI That Remembers Your Preferences
</span>
</div>
<div class="mt-8 text-lg opacity-70 relative z-10">Stop re-explaining your coding style every session</div>
<div class="mt-6 w-32 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full relative z-10"></div>
</div>

<div class="abs-br m-6 flex gap-2">
<span class="text-sm opacity-50">Tech Talk · 40 minutes</span>
</div>

---

# The Question This Talk Answers

<div class="flex items-center justify-center h-full">
<div class="max-w-4xl">
<div class="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
"How do I stop re-explaining my coding style, workflow preferences, and project context to Copilot every session?"
</div>
<div class="grid grid-cols-3 gap-6 mt-12">
<div class="p-6 bg-cyan-900/40 rounded-lg border-2 border-cyan-500">
<div class="text-4xl mb-3">🔄</div>
<div class="text-lg font-bold text-cyan-300 mb-2">Context Resets</div>
<div class="text-sm text-gray-300">Every chat starts fresh</div>
</div>
<div class="p-6 bg-blue-900/40 rounded-lg border-2 border-blue-500">
<div class="text-4xl mb-3">⏰</div>
<div class="text-lg font-bold text-blue-300 mb-2">Time Wasted</div>
<div class="text-sm text-gray-300">Explaining preferences repeatedly</div>
</div>
<div class="p-6 bg-indigo-900/40 rounded-lg border-2 border-indigo-500">
<div class="text-4xl mb-3">💡</div>
<div class="text-lg font-bold text-indigo-300 mb-2">The Solution</div>
<div class="text-sm text-gray-300">Persistent memory storage</div>
</div>
</div>
</div>
</div>

---
layout: default
---

# 📖 Navigate by Section

<div class="grid grid-cols-3 gap-6 mt-8">
<div @click="$nav.go(10)" class="cursor-pointer p-4 bg-cyan-900/40 rounded-lg border-2 border-cyan-500 hover:bg-cyan-900/60 transition-all">
<div class="text-2xl mb-2">🧠</div>
<div class="text-lg font-bold text-cyan-300">How Memory Works</div>
<div class="text-sm text-gray-300 mt-1">Architecture & lifecycle</div>
<div class="text-xs text-gray-400 mt-2">Store & retrieve patterns</div>
</div>

<div @click="$nav.go(15)" class="cursor-pointer p-4 bg-blue-900/40 rounded-lg border-2 border-blue-500 hover:bg-blue-900/60 transition-all">
<div class="text-2xl mb-2">⚙️</div>
<div class="text-lg font-bold text-blue-300">Enabling & Managing</div>
<div class="text-sm text-gray-300 mt-1">Configuration & control</div>
<div class="text-xs text-gray-400 mt-2">Settings & UI management</div>
</div>

<div @click="$nav.go(19)" class="cursor-pointer p-4 bg-indigo-900/40 rounded-lg border-2 border-indigo-500 hover:bg-indigo-900/60 transition-all">
<div class="text-2xl mb-2">💾</div>
<div class="text-lg font-bold text-indigo-300">What to Remember</div>
<div class="text-sm text-gray-300 mt-1">Decision criteria</div>
<div class="text-xs text-gray-400 mt-2">Persist vs ephemeral</div>
</div>
</div>

<div class="grid grid-cols-2 gap-6 mt-6">
<div @click="$nav.go(24)" class="cursor-pointer p-4 bg-purple-900/40 rounded-lg border-2 border-purple-500 hover:bg-purple-900/60 transition-all">
<div class="text-2xl mb-2">⚖️</div>
<div class="text-lg font-bold text-purple-300">Memory vs Instructions</div>
<div class="text-sm text-gray-300 mt-1">Complementary features</div>
<div class="text-xs text-gray-400 mt-2">Personal vs team context</div>
</div>

<div @click="$nav.go(28)" class="cursor-pointer p-4 bg-pink-900/40 rounded-lg border-2 border-pink-500 hover:bg-pink-900/60 transition-all">
<div class="text-2xl mb-2">🔐</div>
<div class="text-lg font-bold text-pink-300">Privacy & Best Practices</div>
<div class="text-sm text-gray-300 mt-1">Security & effectiveness</div>
<div class="text-xs text-gray-400 mt-2">Data handling & hygiene</div>
</div>
</div>

<div class="mt-8 p-4 bg-gradient-to-r from-cyan-900/30 to-pink-900/30 rounded-lg text-center">
<span class="text-white font-bold">💡 Click any section to jump directly there</span>
</div>

---

# The Repetition Problem

<div class="grid grid-cols-2 gap-8 mt-8">
<div class="p-6 bg-red-900/30 rounded-lg border-2 border-red-500">
<div class="text-4xl mb-4">😰</div>
<div class="space-y-3 text-sm">
<div><strong>Context resets every session</strong></div>
<div class="text-gray-300">Each new chat starts with blank slate—AI forgets everything</div>
<div><strong>Repeated explanations waste time</strong></div>
<div class="text-gray-300">"Always use PEP 8." "Prefer functional components." Again. And again.</div>
<div><strong>Preferences never stick</strong></div>
<div class="text-gray-300">Personal style must be re-stated constantly, breaking flow</div>
</div>
</div>
<div class="p-6 bg-blue-900/30 rounded-lg border-2 border-blue-500">
<div class="text-4xl mb-4">💡</div>
<div class="space-y-3 text-sm">
<div><strong>The Core Issue</strong></div>
<div class="text-gray-300">Not a limitation of AI reasoning—it's ephemeral context</div>
<div><strong>Every developer's frustration:</strong></div>
<div class="text-gray-300">Spend 20 minutes explaining conventions. Next day—forgotten. Repeat forever.</div>
<div><strong>Copilot Memory changes this</strong></div>
<div class="text-gray-300">Persistent storage that survives across all sessions</div>
</div>
</div>
</div>

<div class="mt-6 p-4 bg-gradient-to-r from-red-600/30 to-blue-600/30 rounded-lg text-center">
<span class="text-white font-bold">Onboarding that never ends isn't onboarding—it's inefficiency</span>
</div>

---

# The Solution: Copilot Memory

<div class="grid grid-cols-2 gap-6 mt-6">
<div class="space-y-4">
<div class="p-4 bg-cyan-900/40 rounded-lg border-l-4 border-cyan-500">
<div class="text-lg font-bold text-cyan-300 mb-2">🎯 What It Does</div>
<div class="text-sm text-gray-300">
Persistent storage of preferences, conventions, and decisions that survives across chat sessions
</div>
</div>
<div class="p-4 bg-blue-900/40 rounded-lg border-l-4 border-blue-500">
<div class="text-lg font-bold text-blue-300 mb-2">🔄 Cross-Session Persistence</div>
<div class="text-sm text-gray-300">
Preferences saved in one chat automatically apply in all future sessions
</div>
</div>
<div class="p-4 bg-indigo-900/40 rounded-lg border-l-4 border-indigo-500">
<div class="text-lg font-bold text-indigo-300 mb-2">🧠 Intelligent Storage</div>
<div class="text-sm text-gray-300">
Agent recognizes memory-worthy preferences vs ephemeral context
</div>
</div>
</div>
<div class="space-y-4">
<div class="p-4 bg-purple-900/40 rounded-lg border-l-4 border-purple-500">
<div class="text-lg font-bold text-purple-300 mb-2">🎯 Automatic Retrieval</div>
<div class="text-sm text-gray-300">
Relevant memories surface contextually based on what you're working on
</div>
</div>
<div class="p-4 bg-pink-900/40 rounded-lg border-l-4 border-pink-500">
<div class="text-lg font-bold text-pink-300 mb-2">👤 Full User Control</div>
<div class="text-sm text-gray-300">
View, edit, delete any memory through GitHub settings—complete transparency
</div>
</div>
</div>
</div>

<div class="mt-6 p-4 bg-gradient-to-r from-cyan-600/80 to-pink-600/80 rounded-lg text-center">
<span class="text-white font-bold">From stateless assistant to stateful collaborator</span>
</div>

---

# Mental Model Shift

<div class="grid grid-cols-3 gap-4 mt-6">
<div class="p-4 bg-green-900/40 rounded-lg border-2 border-green-500">
<div class="text-2xl mb-2">✅</div>
<div class="text-sm font-bold text-green-300 mb-2">Move Toward</div>
<div class="text-xs text-gray-300 space-y-2">
<div>• Explicit persistence markers</div>
<div>• Curated memory profiles</div>
<div>• Memory-first communication</div>
<div>• Layered customization</div>
</div>
</div>
<div class="p-4 bg-yellow-900/40 rounded-lg border-2 border-yellow-500">
<div class="text-2xl mb-2">⚠️</div>
<div class="text-sm font-bold text-yellow-300 mb-2">Move Away From</div>
<div class="text-xs text-gray-300 space-y-2">
<div>• Session start context dumps</div>
<div>• Inline corrections without storage</div>
<div>• Preference duplication</div>
</div>
</div>
<div class="p-4 bg-red-900/40 rounded-lg border-2 border-red-500">
<div class="text-2xl mb-2">🛑</div>
<div class="text-sm font-bold text-red-300 mb-2">Move Against</div>
<div class="text-xs text-gray-300 space-y-2">
<div>• Storing secrets in memory</div>
<div>• Memory as documentation replacement</div>
</div>
</div>
</div>

<div class="mt-6 p-4 bg-gradient-to-r from-green-600/30 to-blue-600/30 rounded-lg">
<div class="text-sm font-bold text-white mb-2">Example Transformation</div>
<div class="text-xs text-gray-300">
Before: "I prefer concise bullet-point explanations" repeated in 40 chat sessions over 2 months (200 minutes wasted)
<br/>
After: Store once, agent applies automatically in all 40 sessions (2 minutes invested, 198 minutes saved — 99x ROI)
</div>
</div>

---

# When to Use This Pattern

<div class="grid grid-cols-2 gap-6 mt-6">
<div class="p-4 bg-green-900/30 rounded-lg border-l-4 border-green-500">
<div class="text-lg font-bold text-green-300 mb-3">✅ Use Memory When</div>
<div class="text-sm text-gray-300 space-y-2">
<div>• Personal preferences across projects</div>
<div>• Explained same preference 3+ times</div>
<div>• Communication format preferences</div>
<div>• Historical project decisions</div>
</div>
</div>
<div class="p-4 bg-red-900/30 rounded-lg border-l-4 border-red-500">
<div class="text-lg font-bold text-red-300 mb-3">❌ Don't Use Memory When</div>
<div class="text-sm text-gray-300 space-y-2">
<div>• Session-specific context</div>
<div>• Sensitive information (secrets, PII)</div>
<div>• Team-wide standards</div>
<div>• Unvalidated preferences</div>
</div>
</div>
</div>

<div class="mt-4 p-4 bg-gray-800 rounded-lg text-xs font-mono text-gray-300">
<div class="mb-2 text-white font-bold">Decision Flow:</div>
<div>Q: Who needs to follow this guideline?</div>
<div class="ml-4">├─ Just me → Use Memory</div>
<div class="ml-4">├─ Entire team → Use Custom Instructions</div>
<div class="ml-4">└─ Depends on role → Split: mandate → Instructions, style → Memory</div>
</div>

---
layout: center
name: how-memory-works
---

# How Memory Works

<div class="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
Architecture & Lifecycle
</div>

<div class="mt-6 text-xl opacity-80">
Agent-accessible memory tool with semantic retrieval
</div>

<div class="mt-8 text-sm opacity-60">
Section 1 of 5 • Store & retrieve patterns
</div>

---

# Memory Tool Architecture

<div class="grid grid-cols-2 gap-6 mt-4">
<div class="p-4 bg-blue-900/60 rounded-lg border-2 border-blue-400">
<div class="text-lg font-bold text-blue-300 mb-3">📥 Store Operation</div>
<div class="space-y-2 text-sm">
<div class="text-gray-400 text-xs">User provides preference:</div>
<div class="bg-gray-800 p-2 rounded text-xs font-mono text-gray-300">
"Always ask clarifying questions when requirements seem ambiguous"
</div>
<div class="text-xl text-gray-500 text-center">↓</div>
<div class="text-gray-400 text-xs">Agent confirms storage:</div>
<div class="bg-gray-800 p-2 rounded text-xs font-mono text-gray-300">
"I'll remember this preference for future sessions"
</div>
<div class="text-xl text-gray-500 text-center">↓</div>
<div class="bg-green-700/30 p-2 rounded text-xs text-center">
✅ Stored: "Ask clarifying questions when ambiguous"
</div>
</div>
</div>
<div class="p-4 bg-green-900/60 rounded-lg border-2 border-green-400">
<div class="text-lg font-bold text-green-300 mb-3">📤 Retrieve Operation</div>
<div class="space-y-2 text-sm">
<div class="text-gray-400 text-xs">New chat session starts:</div>
<div class="bg-gray-800 p-2 rounded text-xs font-mono text-gray-300">
"Help me implement user authentication"
</div>
<div class="text-xl text-gray-500 text-center">↓</div>
<div class="text-gray-400 text-xs">Memory tool retrieves:</div>
<div class="bg-gray-800 p-2 rounded text-xs font-mono text-gray-300">
Found: "Rollback strategy in plans"<br/>
Found: "TypeScript strict mode"<br/>
Found: "Bullet points with code"
</div>
<div class="text-xl text-gray-500 text-center">↓</div>
<div class="bg-green-700/30 p-2 rounded text-xs text-center">
✅ Applied automatically
</div>
</div>
</div>
</div>

---

# Storage Decision Logic

<div class="mt-6">
<table class="w-full text-sm">
<thead>
<tr class="bg-gray-800">
<th class="p-3 text-left text-cyan-300">Input Type</th>
<th class="p-3 text-left text-cyan-300">Storage Decision</th>
<th class="p-3 text-left text-cyan-300">Reason</th>
</tr>
</thead>
<tbody>
<tr class="bg-green-900/20">
<td class="p-3 text-gray-300">"Always use X pattern"</td>
<td class="p-3 text-green-400">✅ Store</td>
<td class="p-3 text-gray-400">Explicit future-tense instruction</td>
</tr>
<tr class="bg-green-900/20">
<td class="p-3 text-gray-300">"I prefer Y format"</td>
<td class="p-3 text-green-400">✅ Store</td>
<td class="p-3 text-gray-400">Personal style preference</td>
</tr>
<tr class="bg-green-900/20">
<td class="p-3 text-gray-300">"We chose Z because..."</td>
<td class="p-3 text-green-400">✅ Store</td>
<td class="p-3 text-gray-400">Historical decision context</td>
</tr>
<tr class="bg-red-900/20">
<td class="p-3 text-gray-300">"Fix bug on line 47"</td>
<td class="p-3 text-red-400">❌ Don't store</td>
<td class="p-3 text-gray-400">Session-specific</td>
</tr>
<tr class="bg-red-900/20">
<td class="p-3 text-gray-300">"API key: abc123"</td>
<td class="p-3 text-red-400">❌ Don't store</td>
<td class="p-3 text-gray-400">Security risk</td>
</tr>
</tbody>
</table>
</div>

<div class="mt-6 p-4 bg-blue-900/30 rounded-lg text-center">
<span class="text-white font-bold">Tool asks permission when ambiguous: "Should I remember this for future sessions?"</span>
</div>

---

# Semantic Retrieval & Sync

<div class="grid grid-cols-2 gap-6 mt-8">
<div class="space-y-4">
<div class="p-4 bg-purple-900/40 rounded-lg border-l-4 border-purple-500">
<div class="text-lg font-bold text-purple-300 mb-2">🧠 Contextual Retrieval</div>
<div class="text-sm text-gray-300 space-y-2">
<div><strong>Working on auth</strong> → Surfaces security memories</div>
<div><strong>Writing validation</strong> → Applies coding style preferences</div>
<div><strong>Explaining concepts</strong> → Uses communication format</div>
</div>
</div>
<div class="p-4 bg-blue-900/40 rounded-lg border-l-4 border-blue-500">
<div class="text-lg font-bold text-blue-300 mb-2">🎯 Semantic Matching</div>
<div class="text-sm text-gray-300">
Stored "prefer functional components" applies when discussing React architecture—even without keyword "functional"
</div>
</div>
</div>
<div class="p-4 bg-cyan-900/40 rounded-lg border-2 border-cyan-500">
<div class="text-lg font-bold text-cyan-300 mb-3">🔄 Cross-Environment Sync</div>
<div class="text-xs font-mono bg-gray-800 p-3 rounded text-gray-300">
Store in VS Code Chat<br/>
&nbsp;&nbsp;↓<br/>
[GitHub Account Storage]<br/>
&nbsp;&nbsp;↓<br/>
Available in:<br/>
&nbsp;&nbsp;• VS Code on other machines<br/>
&nbsp;&nbsp;• GitHub.com Copilot Chat<br/>
&nbsp;&nbsp;• GitHub CLI (gh copilot)
</div>
</div>
</div>

---
layout: center
name: enabling-managing
---

# Enabling & Managing

<div class="text-5xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
Configuration & Control
</div>

<div class="mt-6 text-xl opacity-80">
Settings, visibility, and memory lifecycle
</div>

<div class="mt-8 text-sm opacity-60">
Section 2 of 5 • One-time setup
</div>

---

# Enabling Memory

<div class="grid grid-cols-2 gap-6 mt-8">
<div class="space-y-4">
<div class="p-4 bg-green-900/40 rounded-lg border-l-4 border-green-500">
<div class="text-lg font-bold text-green-300 mb-3">⚙️ VS Code Configuration</div>
<div class="text-xs font-mono bg-gray-800 p-3 rounded text-gray-300 mb-3">
{<br/>
&nbsp;&nbsp;"github.copilot.chat.copilotMemory.enabled": true<br/>
}
</div>
<div class="text-sm text-gray-400">Single setting enables memory tool</div>
</div>
<div class="p-4 bg-blue-900/40 rounded-lg border-l-4 border-blue-500">
<div class="text-lg font-bold text-blue-300 mb-2">✅ What Happens</div>
<div class="text-sm text-gray-300 space-y-1">
<div>• Agent gains memory tool access</div>
<div>• Can store persistent context</div>
<div>• Retrieval activates automatically</div>
</div>
</div>
</div>
<div class="p-4 bg-indigo-900/40 rounded-lg border-2 border-indigo-500">
<div class="text-lg font-bold text-indigo-300 mb-3">🌐 Multi-Environment</div>
<div class="text-sm text-gray-300 space-y-2">
<div><strong>VS Code:</strong> Setting above</div>
<div><strong>GitHub.com:</strong> Copilot settings page</div>
<div><strong>CLI:</strong> Inherits from GitHub account</div>
</div>
<div class="mt-4 p-3 bg-gradient-to-r from-green-600/80 to-blue-600/80 rounded-lg text-center">
<span class="text-white font-bold text-sm">Enable once, works everywhere</span>
</div>
</div>
</div>

---

# Managing Stored Memories

<div class="grid grid-cols-2 gap-6 mt-6">
<div class="space-y-4">
<div class="p-4 bg-cyan-900/40 rounded-lg border-l-4 border-cyan-500">
<div class="text-lg font-bold text-cyan-300 mb-2">👀 Viewing Memories</div>
<div class="text-sm text-gray-300 space-y-2">
<div>1. Navigate to github.com/settings/copilot</div>
<div>2. Scroll to "Memory" section</div>
<div>3. See chronological list</div>
</div>
</div>
<div class="p-4 bg-blue-900/40 rounded-lg border-l-4 border-blue-500">
<div class="text-lg font-bold text-blue-300 mb-2">🗑️ Delete Operations</div>
<div class="text-sm text-gray-300 space-y-2">
<div>• Click trash icon (individual)</div>
<div>• Select multiple (bulk delete)</div>
<div>• "Clear All" button (reset)</div>
</div>
</div>
</div>
<div class="p-4 bg-purple-900/40 rounded-lg border-2 border-purple-500">
<div class="text-lg font-bold text-purple-300 mb-3">⏰ Memory Lifecycle</div>
<div class="text-sm text-gray-300">
Memories auto-expire after 28 days to prevent stale preferences. Important preferences get reconfirmed periodically.
</div>
<div class="mt-3 p-3 bg-yellow-700/30 rounded-lg text-xs text-center">
<span class="text-white font-bold">💡 Best Practice:</span> Review monthly, delete obsolete, refresh important
</div>
</div>
</div>

---
layout: center
name: what-to-remember
---

# What to Remember

<div class="text-5xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
Decision Criteria
</div>

<div class="mt-6 text-xl opacity-80">
Persistence-worthy vs ephemeral context
</div>

<div class="mt-8 text-sm opacity-60">
Section 3 of 5 • The "Persistence Test"
</div>

---

# Ideal Memory Candidates (1/2)

<div class="grid grid-cols-2 gap-6 mt-6">
<div class="space-y-3">
<div class="p-3 bg-green-900/40 rounded-lg border-l-4 border-green-500">
<div class="text-sm font-bold text-green-300 mb-2">💻 Coding Style</div>
<div class="text-xs text-gray-300 space-y-1">
<div>✅ "Use TypeScript strict mode"</div>
<div>✅ "Prefer functional components"</div>
<div>✅ "Functions under 20 lines"</div>
<div>✅ "Include JSDoc for public APIs"</div>
</div>
</div>
<div class="p-3 bg-blue-900/40 rounded-lg border-l-4 border-blue-500">
<div class="text-sm font-bold text-blue-300 mb-2">🔄 Workflow Preferences</div>
<div class="text-xs text-gray-300 space-y-1">
<div>✅ "Ask clarifying questions first"</div>
<div>✅ "Show me a plan before changes"</div>
<div>✅ "Explain reasoning for decisions"</div>
<div>✅ "Include rollback strategy"</div>
</div>
</div>
</div>
<div class="space-y-3">
<div class="p-3 bg-indigo-900/40 rounded-lg border-l-4 border-indigo-500">
<div class="text-sm font-bold text-indigo-300 mb-2">💬 Communication Style</div>
<div class="text-xs text-gray-300 space-y-1">
<div>✅ "Prefer bullet points"</div>
<div>✅ "Include code examples"</div>
<div>✅ "Mention tradeoffs always"</div>
<div>✅ "Skip lengthy introductions"</div>
</div>
</div>
<div class="p-3 bg-purple-900/40 rounded-lg border-l-4 border-purple-500">
<div class="text-sm font-bold text-purple-300 mb-2">🏗️ Architectural Decisions</div>
<div class="text-xs text-gray-300 space-y-1">
<div>✅ "Use Redis for caching (pub/sub needed)"</div>
<div>✅ "Repository pattern for DB queries"</div>
<div>✅ "JSON:API spec for responses"</div>
</div>
</div>
</div>
</div>

---

# What NOT to Store

<div class="grid grid-cols-2 gap-6 mt-6">
<div class="space-y-3">
<div class="p-3 bg-red-900/40 rounded-lg border-l-4 border-red-500">
<div class="text-sm font-bold text-red-300 mb-2">🚫 Session-Specific Context</div>
<div class="text-xs text-gray-300 space-y-1">
<div>❌ "Fix bug on line 47"</div>
<div>❌ "Refactor the function we discussed"</div>
<div>❌ Current file contents</div>
<div>❌ "Let's try approach A first"</div>
</div>
<div class="text-xs text-gray-400 mt-2">Ephemeral—only relevant to current task</div>
</div>
<div class="p-3 bg-orange-900/40 rounded-lg border-l-4 border-orange-500">
<div class="text-sm font-bold text-orange-300 mb-2">🔐 Sensitive Information</div>
<div class="text-xs text-gray-300 space-y-1">
<div>❌ Passwords, API keys, tokens</div>
<div>❌ Personal identifying information</div>
<div>❌ Repository-specific security details</div>
<div>❌ Connection strings with credentials</div>
</div>
<div class="text-xs text-gray-400 mt-2">Security risk—use secret management</div>
</div>
</div>
<div class="space-y-3">
<div class="p-3 bg-yellow-900/40 rounded-lg border-l-4 border-yellow-500">
<div class="text-sm font-bold text-yellow-300 mb-2">⚠️ Temporary Debugging</div>
<div class="text-xs text-gray-300 space-y-1">
<div>❌ "Skip tests for now"</div>
<div>❌ "Ignore linting temporarily"</div>
<div>❌ "Use console.log for debugging"</div>
</div>
<div class="text-xs text-gray-400 mt-2">Bad habits shouldn't persist</div>
</div>
<div class="p-3 bg-blue-900/40 rounded-lg border-l-4 border-blue-500">
<div class="text-sm font-bold text-blue-300 mb-2">👥 Team Standards</div>
<div class="text-xs text-gray-300 space-y-1">
<div>❌ Team-wide coding standards</div>
<div>❌ Mandatory architecture patterns</div>
<div>❌ Compliance requirements</div>
</div>
<div class="text-xs text-gray-400 mt-2">Use Custom Instructions instead</div>
</div>
</div>
</div>

---

# The "Persistence Test"

<div class="flex items-center justify-center h-full">
<div class="max-w-3xl">
<div class="text-xl font-bold text-cyan-300 mb-6 text-center">Ask yourself before storing:</div>
<div class="space-y-4">
<div class="p-4 bg-cyan-900/40 rounded-lg border-l-4 border-cyan-500">
<div class="text-lg font-bold text-cyan-300 mb-2">1️⃣ Will this apply to multiple future sessions?</div>
<div class="text-sm text-gray-400">If not, don't store</div>
</div>
<div class="p-4 bg-blue-900/40 rounded-lg border-l-4 border-blue-500">
<div class="text-lg font-bold text-blue-300 mb-2">2️⃣ Is this personal preference or team requirement?</div>
<div class="text-sm text-gray-400">Personal → Memory, Team → Instructions</div>
</div>
<div class="p-4 bg-indigo-900/40 rounded-lg border-l-4 border-indigo-500">
<div class="text-lg font-bold text-indigo-300 mb-2">3️⃣ Would I explain this to a new teammate?</div>
<div class="text-sm text-gray-400">If no, probably not memory-worthy</div>
</div>
<div class="p-4 bg-purple-900/40 rounded-lg border-l-4 border-purple-500">
<div class="text-lg font-bold text-purple-300 mb-2">4️⃣ Is this sensitive or security-related?</div>
<div class="text-sm text-gray-400">If yes, never store in memory</div>
</div>
</div>
</div>
</div>

---
layout: center
name: memory-vs-instructions
---

# Memory vs Instructions

<div class="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
Complementary Features
</div>

<div class="mt-6 text-xl opacity-80">
Personal vs team context—working together
</div>

<div class="mt-8 text-sm opacity-60">
Section 4 of 5 • Layered customization
</div>

---

# Comparison Table

<div class="mt-6">
<table class="w-full text-xs">
<thead>
<tr class="bg-gray-800">
<th class="p-2 text-left text-cyan-300">Aspect</th>
<th class="p-2 text-left text-cyan-300">Copilot Memory</th>
<th class="p-2 text-left text-cyan-300">Custom Instructions</th>
</tr>
</thead>
<tbody>
<tr class="bg-blue-900/20">
<td class="p-2 font-bold text-gray-300">Scope</td>
<td class="p-2 text-gray-400">Personal across all projects</td>
<td class="p-2 text-gray-400">Team/project within repository</td>
</tr>
<tr class="bg-indigo-900/20">
<td class="p-2 font-bold text-gray-300">Persistence</td>
<td class="p-2 text-gray-400">Follows your GitHub account</td>
<td class="p-2 text-gray-400">Scoped to repository path</td>
</tr>
<tr class="bg-purple-900/20">
<td class="p-2 font-bold text-gray-300">Management</td>
<td class="p-2 text-gray-400">GitHub Settings UI</td>
<td class="p-2 text-gray-400">.github/copilot-instructions.md</td>
</tr>
<tr class="bg-pink-900/20">
<td class="p-2 font-bold text-gray-300">Sharing</td>
<td class="p-2 text-gray-400">Individual only</td>
<td class="p-2 text-gray-400">Version controlled, team-shared</td>
</tr>
<tr class="bg-blue-900/20">
<td class="p-2 font-bold text-gray-300">Best For</td>
<td class="p-2 text-gray-400">Personal style, communication</td>
<td class="p-2 text-gray-400">Coding standards, architecture</td>
</tr>
<tr class="bg-indigo-900/20">
<td class="p-2 font-bold text-gray-300">Visibility</td>
<td class="p-2 text-gray-400">Private to you</td>
<td class="p-2 text-gray-400">Public to team in VCS</td>
</tr>
</tbody>
</table>
</div>

<div class="mt-6 p-4 bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-lg text-center">
<span class="text-white font-bold">Memory and instructions work together, not in competition</span>
</div>

---

# Layered Customization Pattern

<div class="flex items-center justify-center h-full">
<div class="max-w-3xl w-full">
<div class="text-xs font-mono bg-gray-800 p-6 rounded-lg text-gray-300 space-y-2">
<div class="text-white font-bold mb-4">[Copilot Assistance]</div>
<div>&nbsp;&nbsp;&nbsp;&nbsp;↓</div>
<div class="text-blue-300">&nbsp;&nbsp;[Step 1: Apply Custom Instructions]</div>
<div>&nbsp;&nbsp;Team standards: TypeScript strict mode, Airbnb style</div>
<div>&nbsp;&nbsp;&nbsp;&nbsp;↓</div>
<div class="text-purple-300">&nbsp;&nbsp;[Step 2: Apply Memory]</div>
<div>&nbsp;&nbsp;Personal preferences: Early returns, concise explanations</div>
<div>&nbsp;&nbsp;&nbsp;&nbsp;↓</div>
<div class="text-green-300">&nbsp;&nbsp;[Result: Team consistency + individual customization]</div>
</div>
<div class="mt-6 p-4 bg-gradient-to-r from-green-600/80 to-blue-600/80 rounded-lg text-center">
<span class="text-white font-bold">Everyone follows team standards with their personal style on top</span>
</div>
</div>
</div>

---
layout: center
name: privacy-best-practices
---

# Privacy & Best Practices

<div class="text-5xl font-bold bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">
Security & Effectiveness
</div>

<div class="mt-6 text-xl opacity-80">
Data handling and memory hygiene
</div>

<div class="mt-8 text-sm opacity-60">
Section 5 of 5 • Privacy-first architecture
</div>

---

# Privacy & Security Model

<div class="grid grid-cols-2 gap-6 mt-6">
<div class="space-y-4">
<div class="p-4 bg-green-900/40 rounded-lg border-l-4 border-green-500">
<div class="text-lg font-bold text-green-300 mb-2">✅ What Gets Stored</div>
<div class="text-sm text-gray-300 space-y-2">
<div>• Text summaries of preferences</div>
<div>• Linked to GitHub account</div>
<div>• Encrypted at rest and in transit</div>
<div>• Same protection as GitHub data</div>
</div>
</div>
<div class="p-4 bg-red-900/40 rounded-lg border-l-4 border-red-500">
<div class="text-lg font-bold text-red-300 mb-2">❌ Never Stored</div>
<div class="text-sm text-gray-300 space-y-2">
<div>• File contents or code snippets</div>
<div>• Secrets, API keys, credentials</div>
<div>• PII beyond GitHub account</div>
<div>• Workspace state or file paths</div>
</div>
</div>
</div>
<div class="p-4 bg-blue-900/40 rounded-lg border-2 border-blue-500">
<div class="text-lg font-bold text-blue-300 mb-3">🔐 Privacy Boundaries</div>
<div class="text-sm text-gray-300 space-y-2">
<div><strong>Individual privacy:</strong> Memory content is private—not visible to org admins</div>
<div><strong>Enterprise governance:</strong> Orgs can disable memory feature via policy</div>
<div><strong>Data portability:</strong> Export memories anytime as JSON</div>
<div><strong>Right to deletion:</strong> Delete individual or clear all with one click</div>
</div>
</div>
</div>

---

# Best Practices for Effective Memory

<div class="grid grid-cols-2 gap-6 mt-6">
<div class="space-y-3">
<div class="p-3 bg-green-900/40 rounded-lg border-l-4 border-green-500">
<div class="text-sm font-bold text-green-300 mb-2">✅ Use Explicit Markers</div>
<div class="text-xs text-gray-300 space-y-1">
<div>"Remember for future sessions: ..."</div>
<div>"From now on, always ..."</div>
<div>"In all conversations, please ..."</div>
</div>
</div>
<div class="p-3 bg-blue-900/40 rounded-lg border-l-4 border-blue-500">
<div class="text-sm font-bold text-blue-300 mb-2">🎯 Be Specific</div>
<div class="text-xs text-gray-300 space-y-1">
<div>✅ "Functions under 20 lines"</div>
<div>✅ "Early returns—check failures first"</div>
<div>❌ "I like good code" (too vague)</div>
</div>
</div>
</div>
<div class="space-y-3">
<div class="p-3 bg-purple-900/40 rounded-lg border-l-4 border-purple-500">
<div class="text-sm font-bold text-purple-300 mb-2">📝 Provide Context</div>
<div class="text-xs text-gray-300 space-y-1">
<div>✅ "Use Redis—need pub/sub (ADR-047)"</div>
<div>❌ "Use Redis" (why? when?)</div>
</div>
</div>
<div class="p-3 bg-pink-900/40 rounded-lg border-l-4 border-pink-500">
<div class="text-sm font-bold text-pink-300 mb-2">🧹 Memory Hygiene</div>
<div class="text-xs text-gray-300 space-y-1">
<div>• Review monthly</div>
<div>• Delete obsolete preferences</div>
<div>• Update evolved conventions</div>
<div>• Reconfirm critical preferences</div>
</div>
</div>
</div>
</div>

---

# Building Your Memory Profile

<div class="mt-6">
<div class="grid grid-cols-2 gap-4">
<div class="p-3 bg-cyan-900/40 rounded-lg border-l-4 border-cyan-500">
<div class="text-sm font-bold text-cyan-300 mb-2">Week 1: Communication</div>
<div class="text-xs text-gray-300">
Format (bullet points vs paragraphs), verbosity, example style
</div>
</div>
<div class="p-3 bg-blue-900/40 rounded-lg border-l-4 border-blue-500">
<div class="text-sm font-bold text-blue-300 mb-2">Week 2: Coding Style</div>
<div class="text-xs text-gray-300">
Function length, conditional structure, comment style
</div>
</div>
<div class="p-3 bg-indigo-900/40 rounded-lg border-l-4 border-indigo-500">
<div class="text-sm font-bold text-indigo-300 mb-2">Week 3: Workflow</div>
<div class="text-xs text-gray-300">
Planning style, review approach, debugging methodology
</div>
</div>
<div class="p-3 bg-purple-900/40 rounded-lg border-l-4 border-purple-500">
<div class="text-sm font-bold text-purple-300 mb-2">Week 4: Project Context</div>
<div class="text-xs text-gray-300">
Technology choices, historical context, ADR references
</div>
</div>
</div>
<div class="mt-6 p-4 bg-gradient-to-r from-cyan-600/80 to-purple-600/80 rounded-lg text-center">
<span class="text-white font-bold">After 4 weeks: 10-15 curated memories provide consistent, personalized assistance</span>
</div>
</div>

---

# Real-World Use Cases (1/2)

<div class="grid grid-cols-2 gap-6 mt-6">
<div class="p-4 bg-red-900/30 rounded-lg border-l-4 border-red-500">
<div class="text-lg font-bold text-red-300 mb-2">❌ Before</div>
<div class="text-sm text-gray-300 space-y-2">
<div><strong>Problem:</strong> Developer explains early returns preference + bullet-point explanations every session</div>
<div><strong>Time wasted:</strong> 10 min/session × 3 sessions/day × 5 days</div>
<div><strong>Total:</strong> 150 minutes/week wasted</div>
</div>
</div>
<div class="p-4 bg-green-900/30 rounded-lg border-l-4 border-green-500">
<div class="text-lg font-bold text-green-300 mb-2">✅ After</div>
<div class="text-sm text-gray-300 space-y-2">
<div><strong>Solution:</strong> Store two memories (5 minutes one-time)</div>
<div><strong>Result:</strong> Preferences apply automatically</div>
<div><strong>Time saved:</strong> 145 min/week = 12.5 hrs/month = 150 hrs/year</div>
</div>
</div>
</div>

<div class="mt-4 p-4 bg-gradient-to-r from-red-600/30 to-green-600/30 rounded-lg text-center">
<span class="text-white font-bold">Eliminating Style Re-Explanation: 99x ROI</span>
</div>

---

# Real-World Use Cases (2/2)

<div class="grid grid-cols-2 gap-6 mt-6">
<div class="space-y-4">
<div class="p-4 bg-orange-900/30 rounded-lg border-l-4 border-orange-500">
<div class="text-sm font-bold text-orange-300 mb-2">🏗️ Architectural Decision Persistence</div>
<div class="text-xs text-gray-300">
<strong>Problem:</strong> AI suggested Memcached, team chose Redis for pub/sub (ADR-047)—correction needed monthly
</div>
<div class="text-xs text-gray-300 mt-2">
<strong>Solution:</strong> Store "Use Redis for caching—pub/sub needed (ADR-047)"
</div>
<div class="text-xs text-green-300 mt-2">
<strong>Result:</strong> AI references Redis automatically with correct justification
</div>
</div>
</div>
<div class="space-y-4">
<div class="p-4 bg-purple-900/30 rounded-lg border-l-4 border-purple-500">
<div class="text-sm font-bold text-purple-300 mb-2">💬 Communication Format Optimization</div>
<div class="text-xs text-gray-300">
<strong>Problem:</strong> AI defaulted to lengthy explanations—40-60 "make shorter" follow-ups/week
</div>
<div class="text-xs text-gray-300 mt-2">
<strong>Solution:</strong> Store "Be concise: summary → why → code → gotchas"
</div>
<div class="text-xs text-green-300 mt-2">
<strong>Result:</strong> Zero follow-ups needed—responses in preferred format
</div>
</div>
</div>
</div>

---

# What You Can Do Today

<div class="grid grid-cols-3 gap-4 mt-6">
<div class="p-4 bg-cyan-900/40 rounded-lg border-2 border-cyan-500">
<div class="text-lg font-bold text-cyan-300 mb-3">⚡ 15 Minutes</div>
<div class="text-xs text-gray-300 space-y-2">
<div>☐ Enable in VS Code</div>
<div>☐ Store first preference</div>
<div>☐ Verify in new chat</div>
</div>
</div>
<div class="p-4 bg-blue-900/40 rounded-lg border-2 border-blue-500">
<div class="text-lg font-bold text-blue-300 mb-3">⏱️ 1 Hour</div>
<div class="text-xs text-gray-300 space-y-2">
<div>☐ Store 3-5 core preferences</div>
<div>☐ Review at github.com/settings/copilot</div>
<div>☐ Test memory application</div>
<div>☐ Refine as needed</div>
</div>
</div>
<div class="p-4 bg-indigo-900/40 rounded-lg border-2 border-indigo-500">
<div class="text-lg font-bold text-indigo-300 mb-3">🚀 2-4 Hours</div>
<div class="text-xs text-gray-300 space-y-2">
<div>☐ Build 4-week memory profile</div>
<div>☐ Distinguish memory vs instructions</div>
<div>☐ Set monthly review reminder</div>
<div>☐ Share strategy with team</div>
</div>
</div>
</div>

<div class="mt-6 p-4 bg-gradient-to-r from-cyan-600/80 to-indigo-600/80 rounded-lg text-center">
<span class="text-white font-bold">Start today: Enable → Store → Validate → Build progressively</span>
</div>

---

# Related Patterns

<div class="grid grid-cols-2 gap-6 mt-8">
<div class="space-y-3">
<div class="p-3 bg-green-900/40 rounded-lg border-l-4 border-green-500">
<div class="text-sm font-bold text-green-300 mb-1">📋 Custom Instructions</div>
<div class="text-xs text-gray-300">Team standards that complement personal memory</div>
</div>
<div class="p-3 bg-blue-900/40 rounded-lg border-l-4 border-blue-500">
<div class="text-sm font-bold text-blue-300 mb-1">🤖 Custom Agents</div>
<div class="text-xs text-gray-300">Specialized behaviors working with memory</div>
</div>
<div class="p-3 bg-indigo-900/40 rounded-lg border-l-4 border-indigo-500">
<div class="text-sm font-bold text-indigo-300 mb-1">💬 Copilot Chat</div>
<div class="text-xs text-gray-300">Primary interface where memory operates</div>
</div>
</div>
<div class="p-4 bg-purple-900/40 rounded-lg border-2 border-purple-500">
<div class="text-lg font-bold text-purple-300 mb-3">🗺️ Decision Flow</div>
<div class="text-xs text-gray-300 space-y-2">
<div>• Define team standards → Custom Instructions</div>
<div>• Create specialized behaviors → Custom Agents</div>
<div>• Optimize large codebases → Context Engineering</div>
<div>• Overall strategy → Enterprise Patterns</div>
</div>
<div class="mt-3 text-xs text-gray-400">See DECISION-GUIDE.md for navigation</div>
</div>
</div>

---

# Official Documentation

<div class="mt-8 space-y-4">
<div class="p-4 bg-cyan-900/40 rounded-lg border-l-4 border-cyan-500">
<div class="text-lg font-bold text-cyan-300 mb-2">📖 Primary Documentation</div>
<div class="text-sm text-gray-300 space-y-2">
<div><strong>GitHub Docs: Copilot Memory</strong></div>
<div class="text-xs text-gray-400">Core concepts, enabling memory, curation guide</div>
<div class="text-xs font-mono text-blue-400">docs.github.com/en/copilot/how-tos/use-copilot-agents/copilot-memory</div>
<div class="mt-2"><strong>GitHub Settings: Manage Memory</strong></div>
<div class="text-xs text-gray-400">View, edit, delete stored memories; privacy controls</div>
<div class="text-xs font-mono text-blue-400">github.com/settings/copilot</div>
</div>
</div>

<div class="p-4 bg-blue-900/40 rounded-lg border-l-4 border-blue-500">
<div class="text-lg font-bold text-blue-300 mb-2">🔗 Additional Resources</div>
<div class="text-sm text-gray-300 space-y-1">
<div class="text-xs">• Custom Instructions Guide (complementary feature)</div>
<div class="text-xs">• GitHub Privacy Statement (data handling)</div>
</div>
</div>
</div>

---
layout: end
---

# Start Building Your Memory Profile

<div class="flex flex-col items-center justify-center h-full">
<div class="text-6xl mb-8">✅</div>
<div class="text-2xl font-bold mb-4">Next Steps</div>
<div class="text-lg opacity-80 max-w-2xl text-center">
Enable memory → Store your first preference → Validate in new chat → Build progressively over 4 weeks
</div>
<div class="mt-8 p-4 bg-gradient-to-r from-cyan-600/80 to-purple-600/80 rounded-lg">
<span class="text-white font-bold">From stateless to stateful: AI that remembers what matters</span>
</div>
</div>
