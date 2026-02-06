---
theme: default
background: https://source.unsplash.com/collection/94734566/1920x1080
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Copilot Memory: Cross-Session Context Persistence
  CopilotTraining Tech Talk
drawings:
  persist: false
transition: slide-left
title: Copilot Memory
module: tech-talks/copilot-memory
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
Copilot Memory
</h1>
<div class="mt-4 relative z-10">
<span class="px-6 py-2 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xl font-medium shadow-lg shadow-cyan-500/25">
Cross-Session Context Persistence
</span>
</div>
<div class="mt-8 text-lg opacity-70 relative z-10">Enabling AI assistants to remember what matters</div>
<div class="mt-6 w-32 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full relative z-10"></div>
</div>

<div class="abs-br m-6 flex gap-2">
<span class="text-sm opacity-50">Tech Talk · 45 minutes</span>
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
<div><strong>Preferences get lost</strong></div>
<div class="text-gray-300">Stylistic decisions and conventions must be re-explained constantly</div>
</div>
</div>
<div class="p-6 bg-blue-900/30 rounded-lg border-2 border-blue-500">
<div class="text-4xl mb-4">💡</div>
<div class="space-y-3 text-sm">
<div><strong>The Core Issue</strong></div>
<div class="text-gray-300">Not a limitation of AI capability—it's ephemeral context</div>
<div><strong>Every developer's frustration:</strong></div>
<div class="text-gray-300">Spend 20 minutes explaining conventions. Next day—forgotten. Repeat forever.</div>
<div><strong>Copilot Memory changes this</strong></div>
<div class="text-gray-300">Persistent storage of what matters across all sessions</div>
</div>
</div>
</div>

<div class="mt-6 p-4 bg-gradient-to-r from-red-600/30 to-blue-600/30 rounded-lg text-center">
<span class="text-white font-bold">Onboarding that never ends isn't onboarding—it's inefficiency</span>
</div>

---

# How Copilot Memory Works

<div class="grid grid-cols-2 gap-6 mt-4">
<div class="p-4 bg-blue-900/60 rounded-lg border-2 border-blue-400">
<div class="text-lg font-bold text-blue-300 mb-3">📥 During Conversation</div>
<div class="space-y-2 text-sm">
<div class="flex items-center gap-2">
<span class="bg-blue-600 text-white text-xs px-2 py-0.5 rounded">1</span>
<span class="text-white">User provides important context</span>
</div>
<div class="text-gray-400 text-xs ml-6">"Always ask clarifying questions before implementing"</div>
<div class="text-xl text-gray-500 text-center">↓</div>
<div class="flex items-center gap-2">
<span class="bg-blue-600 text-white text-xs px-2 py-0.5 rounded">2</span>
<span class="text-white">Memory tool recognizes persistence-worthy info</span>
</div>
<div class="text-gray-400 text-xs ml-6">Agent: "I'll remember this preference for future chats"</div>
<div class="text-xl text-gray-500 text-center">↓</div>
<div class="flex items-center gap-2">
<span class="bg-blue-600 text-white text-xs px-2 py-0.5 rounded">3</span>
<span class="text-white">Context stored in Copilot Memory</span>
</div>
<div class="text-gray-400 text-xs ml-6">Linked to your GitHub account</div>
</div>
</div>

<div class="p-4 bg-green-900/60 rounded-lg border-2 border-green-400">
<div class="text-lg font-bold text-green-300 mb-3">📤 In Future Sessions</div>
<div class="space-y-2 text-sm">
<div class="flex items-center gap-2">
<span class="bg-green-600 text-white text-xs px-2 py-0.5 rounded">1</span>
<span class="text-white">New conversation starts</span>
</div>
<div class="text-gray-400 text-xs ml-6">Memory tool retrieves relevant stored context</div>
<div class="text-xl text-gray-500 text-center">↓</div>
<div class="flex items-center gap-2">
<span class="bg-green-600 text-white text-xs px-2 py-0.5 rounded">2</span>
<span class="text-white">AI applies remembered preferences</span>
</div>
<div class="text-gray-400 text-xs ml-6">No re-explanation needed</div>
<div class="text-xl text-gray-500 text-center">↓</div>
<div class="flex items-center gap-2">
<span class="bg-green-600 text-white text-xs px-2 py-0.5 rounded">3</span>
<span class="text-white">Personalized responses from the start</span>
</div>
<div class="text-gray-400 text-xs ml-6">Feels like working with a colleague who knows you</div>
</div>
</div>
</div>

---

# Enabling Copilot Memory

<div class="grid grid-cols-2 gap-8 mt-6">
<div>
<div class="text-2xl font-bold mb-4">⚙️ Configuration</div>
<div class="p-4 bg-gray-800 rounded-lg">

```json
{
  "github.copilot.chat.copilotMemory.enabled": true
}
```

</div>
<div class="mt-4 space-y-2 text-sm">
<div class="flex items-center gap-2">
<span class="text-green-400">✅</span>
<span>Agent gains access to memory tool</span>
</div>
<div class="flex items-center gap-2">
<span class="text-green-400">✅</span>
<span>Store & retrieve persistent context</span>
</div>
<div class="flex items-center gap-2">
<span class="text-green-400">✅</span>
<span>Syncs across VS Code, GitHub, CLI</span>
</div>
</div>
</div>

<div>
<div class="text-2xl font-bold mb-4">🔧 Managing Memories</div>
<div class="space-y-3 text-sm">
<div class="p-3 bg-blue-900/40 rounded-lg">
<div class="font-bold text-blue-300">View & Manage</div>
<div class="text-gray-300">GitHub Settings → Copilot → Memory</div>
</div>
<div class="grid grid-cols-2 gap-2">
<div class="p-2 bg-gray-800 rounded-lg text-center">
<div class="text-xl mb-1">👁️</div>
<div class="text-xs">View all</div>
</div>
<div class="p-2 bg-gray-800 rounded-lg text-center">
<div class="text-xl mb-1">🗑️</div>
<div class="text-xs">Delete</div>
</div>
<div class="p-2 bg-gray-800 rounded-lg text-center">
<div class="text-xl mb-1">🔄</div>
<div class="text-xs">Clear all</div>
</div>
<div class="p-2 bg-gray-800 rounded-lg text-center">
<div class="text-xl mb-1">📦</div>
<div class="text-xs">Export</div>
</div>
</div>
</div>
</div>
</div>

<div class="mt-6 text-center text-sm text-gray-400 italic">
One setting. Full visibility. Complete control.
</div>

---

# What Gets Remembered

<div class="grid grid-cols-2 gap-6 mt-6">
<div class="p-5 bg-green-900/30 rounded-lg border-2 border-green-500">
<div class="text-2xl font-bold text-green-300 mb-4">✅ Ideal Candidates</div>
<div class="space-y-3 text-xs">
<div>
<div class="text-white font-bold">Coding preferences:</div>
<div class="text-gray-300">"Always use TypeScript strict mode"</div>
</div>
<div>
<div class="text-white font-bold">Workflow preferences:</div>
<div class="text-gray-300">"Ask clarifying questions before implementing"</div>
</div>
<div>
<div class="text-white font-bold">Project conventions:</div>
<div class="text-gray-300">"Error handling uses custom Result type"</div>
</div>
<div>
<div class="text-white font-bold">Communication style:</div>
<div class="text-gray-300">"Be concise—prefer bullet points"</div>
</div>
</div>
</div>

<div class="p-5 bg-red-900/30 rounded-lg border-2 border-red-500">
<div class="text-2xl font-bold text-red-300 mb-4">❌ What Doesn't Get Remembered</div>
<div class="space-y-3 text-xs">
<div>
<div class="text-white font-bold">Session-specific context:</div>
<div class="text-gray-300">"Fix the bug on line 47 of this file"</div>
</div>
<div>
<div class="text-white font-bold">Sensitive information:</div>
<div class="text-gray-300">Passwords, API keys, secrets</div>
</div>
<div>
<div class="text-white font-bold">Ephemeral decisions:</div>
<div class="text-gray-300">"Let's try approach A first"</div>
</div>
<div>
<div class="text-white font-bold">Belongs in instructions:</div>
<div class="text-gray-300">Team standards, project architecture</div>
</div>
</div>
</div>
</div>

<div class="mt-4 p-4 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-lg text-center">
<div class="text-xl font-bold text-white">The AI distinguishes persistent preferences from ephemeral context</div>
</div>

---

# Use Case: Personal Coding Style

<div class="grid grid-cols-2 gap-4">
<div class="p-4 bg-red-900/30 rounded-lg border-l-4 border-red-500">
<div class="text-lg font-bold text-red-300 mb-2">❌ The Problem</div>
<div class="text-xs space-y-1 text-gray-300">
<div>• Prefer patterns not in team instructions</div>
<div>• Re-explain personal preferences each session</div>
<div>• Generic suggestions miss your style</div>
</div>
</div>

<div class="p-4 bg-green-900/30 rounded-lg border-l-4 border-green-500">
<div class="text-lg font-bold text-green-300 mb-2">✨ The Solution</div>
<div class="text-xs text-gray-300">
<div><strong class="text-white">User:</strong> "I prefer early returns over nested conditionals."</div>
<div class="mt-2"><strong class="text-cyan-300">Agent:</strong> "I'll remember your preference for early returns."</div>
<div class="mt-2 text-gray-500 italic">[Memory saved: "Prefers early returns..."]</div>
</div>
</div>
</div>

<div class="mt-4 p-3 bg-blue-900/40 rounded-lg">
<div class="grid grid-cols-3 gap-4 text-xs text-center">
<div><span class="text-red-400 font-bold">Before:</span> Re-explain every session</div>
<div><span class="text-green-400 font-bold">After:</span> Preferences persist</div>
<div><span class="text-cyan-400 font-bold">Saved:</span> 5-10 min/session</div>
</div>
</div>

---

# Use Case: Project Context

<div class="grid grid-cols-2 gap-4">
<div class="p-4 bg-red-900/30 rounded-lg border-l-4 border-red-500">
<div class="text-lg font-bold text-red-300 mb-2">❌ The Problem</div>
<div class="text-xs space-y-1 text-gray-300">
<div>• Project decisions aren't documented</div>
<div>• Historical context gets lost</div>
<div>• AI doesn't know why patterns were chosen</div>
</div>
</div>

<div class="p-4 bg-green-900/30 rounded-lg border-l-4 border-green-500">
<div class="text-lg font-bold text-green-300 mb-2">✨ The Solution</div>
<div class="text-xs text-gray-300">
<div><strong class="text-white">User:</strong> "We use Redis (not Memcached) for pub/sub. See ADR-047."</div>
<div class="mt-2"><strong class="text-cyan-300">Agent:</strong> "I'll remember this architectural decision."</div>
<div class="mt-2 text-gray-500 italic">[Memory saved: "Uses Redis for caching..."]</div>
</div>
</div>
</div>

<div class="mt-4 p-3 bg-blue-900/40 rounded-lg">
<div class="grid grid-cols-3 gap-4 text-xs text-center">
<div><span class="text-red-400 font-bold">Before:</span> AI suggests Memcached</div>
<div><span class="text-green-400 font-bold">After:</span> AI knows Redis patterns</div>
<div><span class="text-cyan-400 font-bold">Result:</span> Decisions persist</div>
</div>
</div>

---

# Memory vs. Instructions

<div class="mt-4">
<table class="w-full text-xs">
<thead>
<tr class="bg-gray-800">
<th class="p-2 text-left">Aspect</th>
<th class="p-2 text-left border-l-2 border-cyan-500">Copilot Memory</th>
<th class="p-2 text-left border-l-2 border-orange-500">Custom Instructions</th>
</tr>
</thead>
<tbody>
<tr class="border-t border-gray-700">
<td class="p-2 font-bold">Scope</td>
<td class="p-2 border-l-2 border-cyan-500/30">Personal preferences</td>
<td class="p-2 border-l-2 border-orange-500/30">Team/project standards</td>
</tr>
<tr class="border-t border-gray-700">
<td class="p-2 font-bold">Persistence</td>
<td class="p-2 border-l-2 border-cyan-500/30">All sessions, all projects</td>
<td class="p-2 border-l-2 border-orange-500/30">Per-repository or per-path</td>
</tr>
<tr class="border-t border-gray-700">
<td class="p-2 font-bold">Management</td>
<td class="p-2 border-l-2 border-cyan-500/30">GitHub Settings UI</td>
<td class="p-2 border-l-2 border-orange-500/30">Files in repository</td>
</tr>
<tr class="border-t border-gray-700">
<td class="p-2 font-bold">Sharing</td>
<td class="p-2 border-l-2 border-cyan-500/30">Individual only</td>
<td class="p-2 border-l-2 border-orange-500/30">Version controlled, team-shared</td>
</tr>
<tr class="border-t border-gray-700">
<td class="p-2 font-bold">Best for</td>
<td class="p-2 border-l-2 border-cyan-500/30">Personal style, communication preferences</td>
<td class="p-2 border-l-2 border-orange-500/30">Coding standards, architecture</td>
</tr>
</tbody>
</table>
</div>

<div class="mt-6 grid grid-cols-2 gap-4">
<div class="p-4 bg-cyan-900/30 rounded-lg border-2 border-cyan-500">
<div class="font-bold text-cyan-300 mb-2">✅ Use Memory For:</div>
<div class="space-y-1 text-xs text-gray-300">
<div>• Personal coding style preferences</div>
<div>• Communication format</div>
<div>• Individual workflow preferences</div>
<div>• Cross-project preferences that follow you</div>
</div>
</div>
<div class="p-4 bg-orange-900/30 rounded-lg border-2 border-orange-500">
<div class="font-bold text-orange-300 mb-2">✅ Use Instructions For:</div>
<div class="space-y-1 text-xs text-gray-300">
<div>• Team coding standards</div>
<div>• Project-specific architecture patterns</div>
<div>• Security and compliance requirements</div>
<div>• Patterns that apply to everyone</div>
</div>
</div>
</div>

<div class="mt-4 text-center text-sm text-gray-400 italic">
Instructions = "how we code here" | Memory = "how I prefer to work"
</div>

---

# Privacy and Security

<div class="grid grid-cols-2 gap-6 mt-6">
<div class="p-5 bg-blue-900/40 rounded-lg border-2 border-blue-500">
<div class="text-xl font-bold text-blue-300 mb-4">🔒 Data Handling</div>
<div class="space-y-3 text-xs">
<div>
<div class="text-white font-bold">What gets stored:</div>
<div class="text-gray-300">Text summaries of preferences and decisions</div>
<div class="text-gray-300">Linked to your GitHub account</div>
<div class="text-gray-300">Encrypted at rest and in transit</div>
</div>
<div>
<div class="text-white font-bold">What NEVER gets stored:</div>
<div class="text-gray-300">❌ File contents or code snippets</div>
<div class="text-gray-300">❌ Secrets, API keys, credentials</div>
<div class="text-gray-300">❌ Personal identifying information</div>
</div>
</div>
</div>

<div class="p-5 bg-green-900/40 rounded-lg border-2 border-green-500">
<div class="text-xl font-bold text-green-300 mb-4">👤 User Control</div>
<div class="space-y-3 text-xs">
<div>
<div class="text-white font-bold">You can always:</div>
<div class="space-y-1 text-gray-300">
<div>✅ View all stored memories</div>
<div>✅ Delete individual memories</div>
<div>✅ Clear all memories completely</div>
<div>✅ Disable memory entirely</div>
<div>✅ Export your memory data</div>
</div>
</div>
</div>
</div>
</div>

<div class="mt-4 p-5 bg-purple-900/30 rounded-lg border-2 border-purple-500">
<div class="text-lg font-bold text-purple-300 mb-2">🏢 Enterprise Considerations</div>
<div class="grid grid-cols-3 gap-4 text-xs text-gray-300">
<div>
<div class="font-bold text-white">Privacy:</div>
<div>Memory is personal—not visible to org admins</div>
</div>
<div>
<div class="font-bold text-white">Policy:</div>
<div>Organizations can disable via policy</div>
</div>
<div>
<div class="font-bold text-white">Audit:</div>
<div>No memory content in audit logs</div>
</div>
</div>
</div>

<div class="mt-4 p-4 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-lg text-center">
<div class="text-lg font-bold text-white">Privacy by design. You control what's stored and who sees it.</div>
</div>

---

# Best Practices

<div class="grid grid-cols-2 gap-6 mt-4">
<div>
<div class="text-xl font-bold mb-4 text-green-300">✅ Effective Usage</div>
<div class="space-y-3 text-xs">
<div class="p-3 bg-green-900/30 rounded-lg">
<div class="font-bold text-white">Be explicit:</div>
<div class="text-gray-300">"Remember for future sessions: I prefer..."</div>
</div>
<div class="p-3 bg-green-900/30 rounded-lg">
<div class="font-bold text-white">Be specific:</div>
<div class="text-gray-300">❌ "I like clean code"</div>
<div class="text-gray-300">✅ "Functions under 20 lines, single responsibility"</div>
</div>
<div class="p-3 bg-green-900/30 rounded-lg">
<div class="font-bold text-white">Provide context:</div>
<div class="text-gray-300">❌ "Use Redis"</div>
<div class="text-gray-300">✅ "Use Redis because we need pub/sub"</div>
</div>
</div>
</div>

<div>
<div class="text-xl font-bold mb-4 text-red-300">❌ Anti-Patterns</div>
<div class="space-y-3 text-xs">
<div class="p-3 bg-red-900/30 rounded-lg">
<div class="font-bold text-white">Don't store:</div>
<div class="text-gray-300">❌ Sensitive data or credentials</div>
<div class="text-gray-300">❌ Temporary debugging preferences</div>
<div class="text-gray-300">❌ Session-specific context</div>
<div class="text-gray-300">❌ Info that belongs in instructions</div>
</div>
<div class="p-3 bg-red-900/30 rounded-lg">
<div class="font-bold text-white">Avoid:</div>
<div class="text-gray-300">❌ Conflicting memories</div>
<div class="text-gray-300">❌ Too many memories</div>
<div class="text-gray-300">❌ Vague preferences</div>
</div>
</div>
</div>
</div>

<div class="mt-4 p-4 bg-yellow-900/30 rounded-lg border-2 border-yellow-500">
<div class="text-sm font-bold text-yellow-300 mb-2">🔄 Memory Hygiene</div>
<div class="text-xs text-gray-300">
Periodically review and prune memories. Preferences evolve, projects change. Treat memory as a curated collection, not a dumping ground.
</div>
</div>

---

# Integration with Other Features

<div class="grid grid-cols-3 gap-3 mt-4">
<div class="p-3 bg-gradient-to-r from-orange-900/40 to-gray-800 rounded-lg">
<div class="text-sm font-bold text-orange-300 mb-2">📚 Memory + Instructions</div>
<div class="text-xs text-gray-300 space-y-1">
<div><span class="text-orange-400">Repo:</span> "TypeScript strict"</div>
<div><span class="text-cyan-400">Personal:</span> "Early returns"</div>
</div>
<div class="mt-2 text-xs text-white font-bold">= Team + personal style</div>
</div>

<div class="p-3 bg-gradient-to-r from-blue-900/40 to-gray-800 rounded-lg">
<div class="text-sm font-bold text-blue-300 mb-2">🤖 Memory + Agents</div>
<div class="text-xs text-gray-300 space-y-1">
<div><span class="text-blue-400">Agent:</span> "Security review"</div>
<div><span class="text-cyan-400">Personal:</span> "Line references"</div>
</div>
<div class="mt-2 text-xs text-white font-bold">= Agent + preferences</div>
</div>

<div class="p-3 bg-gradient-to-r from-green-900/40 to-gray-800 rounded-lg">
<div class="text-sm font-bold text-green-300 mb-2">🎯 Memory + Plan Mode</div>
<div class="text-xs text-gray-300 space-y-1">
<div><span class="text-green-400">Plan:</span> "Structured output"</div>
<div><span class="text-cyan-400">Personal:</span> "Rollback strategy"</div>
</div>
<div class="mt-2 text-xs text-white font-bold">= Plans + your elements</div>
</div>
</div>

<div class="mt-6 p-4 bg-gradient-to-r from-purple-600/30 to-blue-600/30 rounded-lg text-center">
<div class="text-white font-bold">Memory enhances other features—doesn't replace them</div>
</div>

---

# Getting Started

<div class="grid grid-cols-2 gap-6 mt-4">
<div class="p-5 bg-blue-900/40 rounded-lg border-2 border-blue-500">
<div class="text-xl font-bold text-blue-300 mb-4">⚡ Immediate Actions</div>
<div class="space-y-3 text-xs">
<div class="flex items-start gap-2">
<span class="text-xl">1️⃣</span>
<div>
<div class="font-bold text-white">Enable Copilot Memory</div>
<div class="text-gray-300 bg-gray-900 p-2 rounded mt-1 text-[10px]">
"github.copilot.chat.copilotMemory.enabled": true
</div>
</div>
</div>
<div class="flex items-start gap-2">
<span class="text-xl">2️⃣</span>
<div>
<div class="font-bold text-white">Store your first preference</div>
<div class="text-gray-300">"Remember: I prefer concise explanations with code examples"</div>
</div>
</div>
<div class="flex items-start gap-2">
<span class="text-xl">3️⃣</span>
<div>
<div class="font-bold text-white">Verify persistence</div>
<div class="text-gray-300">Start new chat, observe format</div>
</div>
</div>
</div>
</div>

<div class="p-5 bg-green-900/40 rounded-lg border-2 border-green-500">
<div class="text-xl font-bold text-green-300 mb-4">📅 Building Your Profile</div>
<div class="space-y-2 text-xs">
<div class="p-2 bg-gray-800 rounded-lg">
<div class="font-bold text-green-300">Week 1: Communication</div>
<div class="text-gray-300">Explanation format, verbosity level</div>
</div>
<div class="p-2 bg-gray-800 rounded-lg">
<div class="font-bold text-cyan-300">Week 2: Coding Style</div>
<div class="text-gray-300">Patterns, conventions, personal style</div>
</div>
<div class="p-2 bg-gray-800 rounded-lg">
<div class="font-bold text-blue-300">Week 3: Workflow</div>
<div class="text-gray-300">Planning style, review approach</div>
</div>
<div class="p-2 bg-gray-800 rounded-lg">
<div class="font-bold text-purple-300">Week 4: Project Context</div>
<div class="text-gray-300">Key decisions, architectural rationale</div>
</div>
</div>
</div>
</div>

<div class="mt-4 p-4 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-lg text-center">
<div class="text-lg font-bold text-white">Build gradually. Curate intentionally. Refine continuously.</div>
</div>

---

# Key Takeaways

<div class="grid grid-cols-2 gap-2 mt-6 text-xs">
<div class="p-3 bg-gray-800 rounded-lg flex items-center gap-3">
<span class="text-3xl">💾</span>
<div>
<div class="text-white font-bold">Memory persists preferences</div>
<div class="text-gray-400">No more re-explaining style and context</div>
</div>
</div>
<div class="p-3 bg-gray-800 rounded-lg flex items-center gap-3">
<span class="text-3xl">🧠</span>
<div>
<div class="text-white font-bold">Intelligent storage decisions</div>
<div class="text-gray-400">Persistent vs. session-specific context</div>
</div>
</div>
<div class="p-3 bg-gray-800 rounded-lg flex items-center gap-3">
<span class="text-3xl">🔧</span>
<div>
<div class="text-white font-bold">Full user control</div>
<div class="text-gray-400">View, edit, delete anytime via GitHub settings</div>
</div>
</div>
<div class="p-3 bg-gray-800 rounded-lg flex items-center gap-3">
<span class="text-3xl">🔗</span>
<div>
<div class="text-white font-bold">Complements other features</div>
<div class="text-gray-400">Instructions, agents, and other customizations</div>
</div>
</div>
<div class="p-3 bg-gray-800 rounded-lg flex items-center gap-3">
<span class="text-3xl">🔒</span>
<div>
<div class="text-white font-bold">Privacy by design</div>
<div class="text-gray-400">Personal memories stay personal</div>
</div>
</div>
<div class="p-3 bg-gray-800 rounded-lg flex items-center gap-3">
<span class="text-3xl">⚡</span>
<div>
<div class="text-white font-bold">Stateless to stateful</div>
<div class="text-gray-400">Transforms AI from ephemeral to persistent</div>
</div>
</div>
</div>

<div class="mt-8 p-6 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-lg text-center">
<div class="text-2xl font-bold text-white mb-2">Memory eliminates the constant re-explanation</div>
<div class="text-lg text-blue-100">Your preferences persist. Your context carries forward. Your flow stays unbroken.</div>
</div>

---
layout: end
---

# Resources

<div class="mt-8 space-y-4">
<div class="p-4 bg-blue-900/40 rounded-lg">
<div class="font-bold text-blue-300 mb-2">📚 Official Documentation</div>
<div class="text-sm space-y-1 text-gray-300">
<div>• GitHub Docs: Copilot Memory</div>
<div>• GitHub Settings: Manage Memory</div>
</div>
</div>

<div class="p-4 bg-green-900/40 rounded-lg">
<div class="font-bold text-green-300 mb-2">🔗 Related Features</div>
<div class="text-sm space-y-1 text-gray-300">
<div>• Custom Instructions — Team and project standards</div>
<div>• Custom Agents — Specialized agent behaviors</div>
</div>
</div>
</div>

<div class="mt-8 text-center text-lg opacity-70">
Enabling AI assistants to remember what matters across conversations
</div>
