---
theme: default
background: https://source.unsplash.com/collection/94734566/1920x1080
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## What's New in Copilot for VS Code: v1.107 – v1.109
  CopilotTraining Tech Talks
drawings:
  persist: false
transition: slide-left
title: What's New in Copilot for VS Code
module: tech-talks/vscode-latest
mdc: true
status: active
updated: 2026-02-12
---

<div class="relative h-full w-full flex items-center justify-center">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-indigo-900/20"></div>
<div class="relative z-10 text-center px-8">
<h1 class="text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent leading-tight pb-2">
What's New in Copilot for VS Code
</h1>
<p class="text-2xl text-gray-300 mb-4">v1.107 – v1.109</p>
<div class="mt-12 text-lg text-gray-400">
<p>CopilotTraining Tech Talks</p>
<p class="mt-2">Duration: 30-45 minutes</p>
</div>
</div>
</div>

---
layout: default
---

# 🎯 The Question This Talk Answers

<div class="mt-12 px-8">
<div class="bg-gradient-to-br from-cyan-900/30 to-blue-900/20 rounded-lg p-8 border border-cyan-500/30">
<p class="text-3xl text-cyan-300 font-semibold mb-6 italic">
"What are the most impactful new Copilot features in VS Code's last three releases, and how do I start using them today?"
</p>
<div class="mt-8 grid grid-cols-3 gap-6 text-center">
<div class="bg-black/30 rounded p-4">
<div class="text-cyan-400 text-4xl font-bold">v1.107</div>
<div class="text-gray-400 text-sm mt-2">November 2025</div>
</div>
<div class="bg-black/30 rounded p-4">
<div class="text-blue-400 text-4xl font-bold">v1.108</div>
<div class="text-gray-400 text-sm mt-2">December 2025</div>
</div>
<div class="bg-black/30 rounded p-4">
<div class="text-indigo-400 text-4xl font-bold">v1.109</div>
<div class="text-gray-400 text-sm mt-2">January 2026</div>
</div>
</div>
</div>
</div>

---
layout: default
---

# 📋 What We'll Cover

<div class="grid grid-cols-3 gap-3 mt-6">

<div class="bg-gradient-to-br from-cyan-900/40 to-cyan-800/20 rounded-lg p-4 border border-cyan-500/20">
<div class="text-cyan-400 font-bold text-lg mb-2">🤖 Agent Sessions</div>
<div class="text-gray-300 text-sm space-y-1">
<div>Multi-agent workflows</div>
<div>Background worktrees</div>
<div>Parallel subagents</div>
</div>
</div>

<div class="bg-gradient-to-br from-violet-900/40 to-violet-800/20 rounded-lg p-4 border border-violet-500/20">
<div class="text-violet-400 font-bold text-lg mb-2">⚙️ Customization</div>
<div class="text-gray-300 text-sm space-y-1">
<div>Skills (now GA)</div>
<div>Custom agent controls</div>
<div>Org-level instructions</div>
</div>
</div>

<div class="bg-gradient-to-br from-amber-900/40 to-amber-800/20 rounded-lg p-4 border border-amber-500/20">
<div class="text-amber-400 font-bold text-lg mb-2">🧠 Claude & Anthropic</div>
<div class="text-gray-300 text-sm space-y-1">
<div>Claude Agent SDK</div>
<div>Thinking tokens</div>
<div>Interleaved reasoning</div>
</div>
</div>

<div class="bg-gradient-to-br from-emerald-900/40 to-emerald-800/20 rounded-lg p-4 border border-emerald-500/20">
<div class="text-emerald-400 font-bold text-lg mb-2">🔒 Security & Trust</div>
<div class="text-gray-300 text-sm space-y-1">
<div>Terminal sandboxing</div>
<div>Auto-approval rules</div>
<div>Command isolation</div>
</div>
</div>

<div class="bg-gradient-to-br from-rose-900/40 to-rose-800/20 rounded-lg p-4 border border-rose-500/20">
<div class="text-rose-400 font-bold text-lg mb-2">✨ Chat UX</div>
<div class="text-gray-300 text-sm space-y-1">
<div>Mermaid diagrams</div>
<div>Copilot Memory</div>
<div>Integrated browser</div>
</div>
</div>

<div class="bg-gradient-to-br from-indigo-900/40 to-indigo-800/20 rounded-lg p-4 border border-indigo-500/20">
<div class="text-indigo-400 font-bold text-lg mb-2">💡 Mental Model</div>
<div class="text-gray-300 text-sm space-y-1">
<div>One assistant →</div>
<div>team of specialized</div>
<div>agents</div>
</div>
</div>

</div>

---
layout: default
---

# 📅 Three Releases at a Glance

<div class="mt-8">
<div class="grid grid-cols-1 gap-4">

<div class="flex items-start bg-gradient-to-r from-cyan-900/30 to-cyan-800/20 rounded-lg p-6 border border-cyan-500/30">
<div class="text-cyan-400 font-bold text-2xl mr-6 min-w-[120px]">v1.107</div>
<div class="flex-1">
<div class="text-gray-400 text-sm mb-2">November 2025</div>
<div class="text-gray-200">Multi-agent orchestration — agent sessions, background agents in worktrees, org-level custom agents</div>
</div>
</div>

<div class="flex items-start bg-gradient-to-r from-blue-900/30 to-blue-800/20 rounded-lg p-6 border border-blue-500/30">
<div class="text-blue-400 font-bold text-2xl mr-6 min-w-[120px]">v1.108</div>
<div class="flex-1">
<div class="text-gray-400 text-sm mb-2">December 2025</div>
<div class="text-gray-200">Agent Skills (experimental), agent sessions UX improvements, terminal IntelliSense rework, 6,000 issues closed</div>
</div>
</div>

<div class="flex items-start bg-gradient-to-r from-indigo-900/30 to-indigo-800/20 rounded-lg p-6 border border-indigo-500/30">
<div class="text-indigo-400 font-bold text-2xl mr-6 min-w-[120px]">v1.109</div>
<div class="flex-1">
<div class="text-gray-400 text-sm mb-2">January 2026</div>
<div class="text-gray-200">Claude Agent preview, Agent Skills GA, terminal sandboxing, Copilot Memory, MCP Apps, integrated browser</div>
</div>
</div>

</div>
</div>

---
layout: center
---

# 🧠 The Core Insight

<div class="mt-8 px-12">
<div class="bg-gradient-to-br from-cyan-900/30 via-blue-900/20 to-indigo-900/30 rounded-xl p-12 border-2 border-cyan-500/40">
<p class="text-4xl text-center font-bold text-transparent bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-300 bg-clip-text leading-relaxed">
From <span class="text-cyan-400">one AI assistant</span> you converse with
<br/>
to
<br/>
<span class="text-indigo-400">a team of specialized AI agents</span> you orchestrate
</p>
<div class="mt-8 text-center text-gray-400 text-lg">
Local · Background · Cloud · Claude
</div>
</div>
</div>

---
layout: section
---

# 🤖 Agent Sessions & Orchestration

Multi-agent workflows with session management, background execution, and parallel subagents

---
layout: default
---

# Agent Sessions in Chat View (v1.107)

<div class="mt-6">

**Agent sessions are now integrated directly into the Chat view**

<div class="mt-8 grid grid-cols-2 gap-6">

<div class="bg-cyan-900/20 rounded-lg p-6 border border-cyan-500/30">
<h3 class="text-xl font-bold text-cyan-400 mb-4">📱 Compact Mode</h3>
<p class="text-gray-300">Shows the three most recent sessions when Chat view is narrow</p>
</div>

<div class="bg-blue-900/20 rounded-lg p-6 border border-blue-500/30">
<h3 class="text-xl font-bold text-blue-400 mb-4">📊 Side-by-Side Mode</h3>
<p class="text-gray-300">Full session list with search and filters when Chat view is wide</p>
</div>

</div>

<div class="mt-6 bg-black/30 rounded p-4 font-mono text-sm">
<div class="text-gray-500">// Control orientation</div>
<div class="text-cyan-300">"chat.viewSessions.orientation"<span class="text-gray-400">:</span> <span class="text-green-400">"sideBySide"</span></div>
<div class="text-gray-500">// or "stacked", "auto"</div>
</div>

<div class="mt-4 text-sm text-gray-400">
💡 Status indicators show in-progress, unread, and needs-attention states in the command center
</div>

</div>

---
layout: default
---

# Four Agent Types (v1.107 → v1.109)

<div class="mt-6">
<div class="grid grid-cols-2 gap-4">

<div class="bg-gradient-to-br from-cyan-900/30 to-cyan-800/20 rounded-lg p-5 border border-cyan-500/30">
<div class="text-2xl font-bold text-cyan-400 mb-2">🏠 Local</div>
<div class="text-sm text-gray-400 mb-2">Interactive planning, exploration</div>
<div class="text-gray-300">Real-time in Chat view</div>
</div>

<div class="bg-gradient-to-br from-blue-900/30 to-blue-800/20 rounded-lg p-5 border border-blue-500/30">
<div class="text-2xl font-bold text-blue-400 mb-2">🔧 Background</div>
<div class="text-sm text-gray-400 mb-2">Autonomous multi-file tasks</div>
<div class="text-gray-300">Runs in isolated Git worktree</div>
</div>

<div class="bg-gradient-to-br from-indigo-900/30 to-indigo-800/20 rounded-lg p-5 border border-indigo-500/30">
<div class="text-2xl font-bold text-indigo-400 mb-2">☁️ Cloud</div>
<div class="text-sm text-gray-400 mb-2">Cross-repo operations at scale</div>
<div class="text-gray-300">GitHub-hosted infrastructure</div>
</div>

<div class="bg-gradient-to-br from-purple-900/30 to-purple-800/20 rounded-lg p-5 border border-purple-500/30">
<div class="text-2xl font-bold text-purple-400 mb-2">🧠 Claude</div>
<div class="text-sm text-gray-400 mb-2">Complex reasoning, architecture</div>
<div class="text-gray-300">Anthropic SDK with thinking tokens</div>
</div>

</div>

<div class="mt-6 bg-blue-900/20 rounded-lg p-4 border border-blue-500/30">
<p class="text-gray-200">
<span class="text-blue-400 font-semibold">Session handoffs:</span> Plan locally → click <span class="text-cyan-300 font-mono">Continue in → Background</span> → agent implements autonomously while you continue working
</p>
</div>

</div>

---
layout: default
---

# Background Agents & Parallel Subagents

<div class="mt-6 grid grid-cols-2 gap-6">

<div>
<h3 class="text-2xl font-bold text-cyan-400 mb-4">🌳 Git Worktree Isolation (v1.107)</h3>
<div class="space-y-3 text-gray-300">
<div>✅ Agent creates new worktree automatically</div>
<div>✅ Changes committed per turn — main workspace untouched</div>
<div>✅ Review via diff view when complete</div>
<div>✅ Multiple background agents in separate worktrees</div>
</div>

<div class="mt-4 bg-black/30 rounded p-3 font-mono text-xs">
<div class="text-gray-500">// Copy extra files into worktrees</div>
<div class="text-cyan-300">"git.worktreeIncludeFiles"<span class="text-gray-400">:</span></div>
<div class="text-gray-400 ml-4">["config/local.json"]</div>
</div>
</div>

<div>
<h3 class="text-2xl font-bold text-indigo-400 mb-4">⚡ Parallel Subagents (v1.109)</h3>
<div class="space-y-3 text-gray-300">
<div>🚀 Subtasks delegated to independent context windows</div>
<div>🚀 Subagents run in parallel for speed</div>
<div>🚀 Dedicated search subagent refines queries iteratively</div>
</div>

<div class="mt-6 bg-indigo-900/20 rounded-lg p-4 border border-indigo-500/30">
<p class="text-sm text-gray-400 italic">Significantly speeds up tasks that can be split into independent parts</p>
</div>
</div>

</div>

---
layout: section
---

# ⚙️ Agent Customization

Skills, custom agents, org-level instructions, and workspace bootstrapping

---
layout: default
---

# Agent Skills — Now GA (v1.109)

<div class="mt-6">

**Domain expertise packaged as reusable folders that agents load on-demand**

<div class="mt-6 grid grid-cols-2 gap-6">

<div>
<div class="bg-black/40 rounded p-4 font-mono text-sm mb-4">
<div class="text-gray-500">.github/skills/</div>
<div class="text-cyan-300 ml-4">api-design/</div>
<div class="text-gray-400 ml-8">SKILL.md</div>
<div class="text-cyan-300 ml-4">security-review/</div>
<div class="text-gray-400 ml-8">SKILL.md</div>
</div>

<div class="text-sm text-gray-400">
Each SKILL.md has frontmatter — agents match skills to tasks automatically
</div>
</div>

<div>
<div class="space-y-4">

<div class="bg-cyan-900/20 rounded p-4 border border-cyan-500/30">
<div class="text-cyan-400 font-semibold mb-1">v1.108</div>
<div class="text-gray-300 text-sm">Experimental release</div>
</div>

<div class="bg-indigo-900/20 rounded p-4 border border-indigo-500/30">
<div class="text-indigo-400 font-semibold mb-1">v1.109</div>
<div class="text-gray-300 text-sm">Generally available, enabled by default</div>
</div>

</div>

<div class="mt-4 bg-black/30 rounded p-3 font-mono text-xs">
<div class="text-cyan-300">"chat.useAgentSkills"<span class="text-gray-400">:</span> <span class="text-green-400">true</span></div>
</div>

</div>

</div>

</div>

---
layout: default
---

# Custom Agent Controls (v1.109)

<div class="mt-4">

**New powerful attributes for `.agent.md` files**

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="space-y-3">

<div class="bg-cyan-900/20 rounded p-4 border border-cyan-500/30">
<div class="text-cyan-400 font-mono text-sm mb-2">user-invokable: false</div>
<div class="text-gray-300 text-sm">Create agents accessible only as subagents</div>
</div>

<div class="bg-blue-900/20 rounded p-4 border border-blue-500/30">
<div class="text-blue-400 font-mono text-sm mb-2">disable-model-invocation</div>
<div class="text-gray-300 text-sm">Prevent automatic invocation by other agents</div>
</div>

<div class="bg-indigo-900/20 rounded p-4 border border-indigo-500/30">
<div class="text-indigo-400 font-mono text-sm mb-2">agents: ['Modify', 'Search']</div>
<div class="text-gray-300 text-sm">Restrict which subagents can be invoked</div>
</div>

</div>

<div>
<div class="bg-black/40 rounded p-4 font-mono text-xs">
<div class="text-gray-500">---</div>
<div><span class="text-cyan-300">name</span><span class="text-gray-400">:</span> architect</div>
<div><span class="text-cyan-300">model</span><span class="text-gray-400">:</span> [<span class="text-green-400">'Claude Sonnet 4.5'</span>,</div>
<div class="ml-8"><span class="text-green-400">'GPT-5 (copilot)'</span>]</div>
<div><span class="text-cyan-300">tools</span><span class="text-gray-400">:</span> [<span class="text-green-400">'readFiles'</span>, <span class="text-green-400">'agent'</span>]</div>
<div><span class="text-cyan-300">agents</span><span class="text-gray-400">:</span> [<span class="text-green-400">'Modify'</span>, <span class="text-green-400">'Search'</span>]</div>
<div><span class="text-cyan-300">user-invokable</span><span class="text-gray-400">:</span> <span class="text-green-400">true</span></div>
<div class="text-gray-500">---</div>
</div>

<div class="mt-4 text-sm text-gray-400">
✨ Multiple model support with fallback order
</div>
</div>

</div>

</div>

---
layout: default
---

# Org-Level & Workspace Bootstrap

<div class="mt-6 grid grid-cols-2 gap-6">

<div>
<h3 class="text-xl font-bold text-cyan-400 mb-4">🏢 Organization-Wide Instructions</h3>
<div class="space-y-3 text-gray-300 text-sm">
<div>📋 Org-level custom agents (v1.107)</div>
<div>📋 Org-level custom instructions (v1.109)</div>
<div>📋 Enforce consistent AI guidance across all developers</div>
</div>

<div class="mt-4 bg-black/30 rounded p-3 font-mono text-xs">
<div class="text-gray-500">// Enabled by default in v1.109</div>
<div class="text-cyan-300">"github.copilot.chat</div>
<div class="text-cyan-300 ml-0">&nbsp;&nbsp;.organizationInstructions</div>
<div class="text-cyan-300 ml-0">&nbsp;&nbsp;.enabled"<span class="text-gray-400">:</span> <span class="text-green-400">true</span></div>
</div>
</div>

<div>
<h3 class="text-xl font-bold text-indigo-400 mb-4">🚀 /init Command (v1.109)</h3>
<div class="space-y-3 text-gray-300 text-sm">
<div>🎯 Analyzes your project structure</div>
<div>🎯 Generates tailored <span class="font-mono text-indigo-300">copilot-instructions.md</span></div>
<div>🎯 Creates <span class="font-mono text-indigo-300">AGENTS.md</span> automatically</div>
</div>

<div class="mt-4 bg-indigo-900/20 rounded-lg p-4 border border-indigo-500/30">
<p class="text-sm text-gray-300 font-semibold">Bootstrap your workspace for AI in seconds</p>
</div>

<div class="mt-4 text-xs text-gray-500">
💡 Right-click in Chat → Diagnostics to view all loaded customizations
</div>
</div>

</div>

---
layout: section
---

# 🧠 Claude & Anthropic Integration

Claude Agent SDK, thinking tokens, and interleaved reasoning

---
layout: default
---

# Claude Agent & Thinking Tokens

<div class="mt-6 grid grid-cols-2 gap-6">

<div>
<h3 class="text-2xl font-bold text-purple-400 mb-4">🤖 Claude Agent (Preview)</h3>
<div class="space-y-3 text-gray-300">
<div>✨ Anthropic agent harness directly in VS Code</div>
<div>✨ Uses models from your GitHub Copilot subscription</div>
<div>✨ Appears as session type alongside Local/Background/Cloud</div>
</div>
</div>

<div>
<h3 class="text-2xl font-bold text-cyan-400 mb-4">💭 Thinking Tokens</h3>
<div class="space-y-3 text-gray-300 text-sm">
<div>🧠 Visible reasoning shows hypothesis formation</div>
<div>🧠 See tool selection and error recovery in real-time</div>
<div>🧠 Interleaved thinking (v1.109) reasons between tool calls</div>
</div>

<div class="mt-4 bg-black/30 rounded p-3 font-mono text-xs">
<div class="text-gray-500">// Default: 4000, set 0 to disable</div>
<div class="text-cyan-300">"github.copilot.chat.anthropic</div>
<div class="text-cyan-300 ml-0">&nbsp;&nbsp;.thinking.budgetTokens"<span class="text-gray-400">:</span> <span class="text-yellow-400">10000</span></div>
<div class="mt-2 text-cyan-300">"chat.thinking.style"<span class="text-gray-400">:</span> <span class="text-green-400">"detailed"</span></div>
</div>
</div>

</div>

---
layout: section
---

# 🔒 Security & Trust

Terminal sandboxing, auto-approval rules, and command isolation

---
layout: default
---

# Terminal Sandboxing (v1.109)

<div class="mt-6">

**OS-level sandboxing restricts agent-executed terminal commands**

<div class="mt-6 grid grid-cols-2 gap-6">

<div>
<h3 class="text-xl font-bold text-cyan-400 mb-4">🛡️ Sandbox Restrictions</h3>
<div class="space-y-3">

<div class="bg-cyan-900/20 rounded p-4 border border-cyan-500/30">
<div class="text-cyan-400 font-semibold mb-1">📁 File System</div>
<div class="text-gray-300 text-sm">Read/write only within workspace directory</div>
</div>

<div class="bg-blue-900/20 rounded p-4 border border-blue-500/30">
<div class="text-blue-400 font-semibold mb-1">🌐 Network</div>
<div class="text-gray-300 text-sm">Blocked by default; allowlist specific domains</div>
</div>

<div class="bg-indigo-900/20 rounded p-4 border border-indigo-500/30">
<div class="text-indigo-400 font-semibold mb-1">💻 Platform Support</div>
<div class="text-gray-300 text-sm">macOS (sandbox-exec), Linux (Landlock/seccomp)</div>
</div>

</div>
</div>

<div>
<div class="bg-black/40 rounded p-4 font-mono text-sm">
<div class="text-gray-500 text-xs mb-2">// Enable sandboxing</div>
<div class="text-cyan-300">"chat.tools.terminal</div>
<div class="text-cyan-300 ml-0">&nbsp;&nbsp;.sandbox.enabled"<span class="text-gray-400">:</span> <span class="text-green-400">true</span>,</div>
<div class="text-cyan-300 mt-2">"chat.tools.terminal</div>
<div class="text-cyan-300 ml-0">&nbsp;&nbsp;.sandbox.network"<span class="text-gray-400">:</span> [</div>
<div class="text-green-400 ml-4">"github.com"</div>,
<div class="text-green-400 ml-4">"npmjs.com"</div>
<div class="text-gray-400">]</div>
</div>

<div class="mt-6 bg-green-900/20 rounded-lg p-4 border border-green-500/30">
<p class="text-sm text-gray-300">
✅ When sandboxing is enabled, commands run without confirmation dialogs
</p>
</div>
</div>

</div>

</div>

---
layout: default
---

# Terminal Auto-Approval Evolution

<div class="mt-6">

**Progressive expansion of auto-approved commands across releases**

<div class="mt-6 grid grid-cols-1 gap-4">

<div class="flex items-start bg-gradient-to-r from-cyan-900/30 to-cyan-800/20 rounded-lg p-5 border border-cyan-500/30">
<div class="text-cyan-400 font-bold text-xl mr-6 min-w-[100px]">v1.107</div>
<div class="flex-1 text-gray-300">
<span class="text-cyan-400 font-semibold">"Allow all commands in this session"</span> option added
</div>
</div>

<div class="flex items-start bg-gradient-to-r from-blue-900/30 to-blue-800/20 rounded-lg p-5 border border-blue-500/30">
<div class="text-blue-400 font-bold text-xl mr-6 min-w-[100px]">v1.108</div>
<div class="flex-1">
<div class="text-gray-300 mb-2"><span class="font-mono text-blue-300">git ls-files</span>, <span class="font-mono text-blue-300">rg</span>, <span class="font-mono text-blue-300">sed</span></div>
<div class="text-gray-300">Workspace npm scripts via <span class="font-mono text-blue-300">npm</span>/<span class="font-mono text-blue-300">pnpm</span>/<span class="font-mono text-blue-300">yarn</span></div>
</div>
</div>

<div class="flex items-start bg-gradient-to-r from-indigo-900/30 to-indigo-800/20 rounded-lg p-5 border border-indigo-500/30">
<div class="text-indigo-400 font-bold text-xl mr-6 min-w-[100px]">v1.109</div>
<div class="flex-1 text-gray-300">
<span class="font-mono text-indigo-300">Set-Location</span>, <span class="font-mono text-indigo-300">dir</span>, <span class="font-mono text-indigo-300">docker</span> (safe sub-commands), <span class="font-mono text-indigo-300">npm/yarn/pnpm</span> (safe sub-commands)
</div>
</div>

</div>

<div class="mt-6 bg-black/30 rounded p-4 font-mono text-sm">
<div class="text-cyan-300">"chat.tools.terminal.enableAutoApprove"<span class="text-gray-400">:</span> <span class="text-green-400">true</span></div>
<div class="text-cyan-300">"chat.tools.terminal.autoApproveWorkspaceNpmScripts"<span class="text-gray-400">:</span> <span class="text-green-400">true</span></div>
</div>

</div>

---
layout: section
---

# ✨ Chat UX & Productivity

Mermaid diagrams, Copilot Memory, integrated browser, and more

---
layout: default
---

# Chat Experience Enhancements (1/2)

<div class="mt-4 grid grid-cols-2 gap-5">

<div class="bg-cyan-900/20 rounded-lg p-5 border border-cyan-500/30">
<h3 class="text-xl font-bold text-cyan-400 mb-3">📊 Mermaid Diagrams</h3>
<div class="text-gray-300 text-sm space-y-2">
<div>✨ Interactive diagrams in chat responses</div>
<div>✨ Pan, zoom, and open in full editor</div>
<div>✨ Flowcharts, sequence diagrams, and more</div>
</div>
</div>

<div class="bg-blue-900/20 rounded-lg p-5 border border-blue-500/30">
<h3 class="text-xl font-bold text-blue-400 mb-3">❓ Ask Questions Tool</h3>
<div class="text-gray-300 text-sm space-y-2">
<div>🤔 Agent presents clarifying questions</div>
<div>🤔 Single/multi-select, free text options</div>
<div>🤔 Plan agent: Discovery → Alignment → Design → Refinement</div>
</div>
</div>

<div class="bg-indigo-900/20 rounded-lg p-5 border border-indigo-500/30">
<h3 class="text-xl font-bold text-indigo-400 mb-3">📈 Context Window Details</h3>
<div class="text-gray-300 text-sm space-y-2">
<div>📊 Token usage breakdown on hover</div>
<div>📊 See usage by category</div>
<div>📊 Understand context budget allocation</div>
</div>
</div>

<div class="bg-purple-900/20 rounded-lg p-5 border border-purple-500/30">
<h3 class="text-xl font-bold text-purple-400 mb-3">🧠 Copilot Memory</h3>
<div class="text-gray-300 text-sm space-y-2">
<div>💾 Persistent context across sessions</div>
<div>💾 Store preferences and conventions</div>
<div>💾 Recall project context automatically</div>
</div>
<div class="mt-3 bg-black/30 rounded p-2 font-mono text-xs">
<div class="text-purple-300">"github.copilot.chat</div>
<div class="text-purple-300 ml-0">&nbsp;&nbsp;.copilotMemory.enabled"</div>
<div class="text-gray-400 ml-0"><span class="text-gray-400">:</span> <span class="text-green-400">true</span></div>
</div>
</div>

</div>

---
layout: default
---

# Chat Experience Enhancements (2/2)

<div class="mt-4 grid grid-cols-2 gap-5">

<div class="bg-cyan-900/20 rounded-lg p-5 border border-cyan-500/30">
<h3 class="text-xl font-bold text-cyan-400 mb-3">🌐 Integrated Browser</h3>
<div class="text-gray-300 text-sm space-y-2">
<div>🌍 Full browser replaces Simple Browser</div>
<div>🌍 Sign into websites, use DevTools</div>
<div>🌍 Send elements to chat for AI assistance</div>
</div>
<div class="mt-3 bg-black/30 rounded p-2 font-mono text-xs">
<div class="text-cyan-300">"workbench.browser</div>
<div class="text-cyan-300 ml-0">&nbsp;&nbsp;.openLocalhostLinks"<span class="text-gray-400">:</span></div>
<div class="ml-4"><span class="text-green-400">true</span></div>
</div>
</div>

<div class="bg-blue-900/20 rounded-lg p-5 border border-blue-500/30">
<h3 class="text-xl font-bold text-blue-400 mb-3">🎨 MCP Apps</h3>
<div class="text-gray-300 text-sm space-y-2">
<div>📊 Rich interactive UI in the client</div>
<div>📊 Flame graphs, custom visualizations</div>
<div>📊 MCP servers display UI elements</div>
</div>
</div>

<div class="bg-indigo-900/20 rounded-lg p-5 border border-indigo-500/30">
<h3 class="text-xl font-bold text-indigo-400 mb-3">🔍 External Indexing</h3>
<div class="text-gray-300 text-sm space-y-2">
<div>🔎 Non-GitHub workspaces get remote indexing</div>
<div>🔎 Fast semantic search via <span class="font-mono text-indigo-300">#codebase</span></div>
<div>🔎 Same experience as GitHub-hosted repos</div>
</div>
</div>

<div class="bg-purple-900/20 rounded-lg p-5 border border-purple-500/30">
<h3 class="text-xl font-bold text-purple-400 mb-3">⚙️ Language Models Editor</h3>
<div class="text-gray-300 text-sm space-y-2">
<div>🎛️ Centralized model management</div>
<div>🎛️ Toggle visibility, configure API keys</div>
<div>🎛️ Stored in <span class="font-mono text-purple-300">chatLanguageModels.json</span></div>
</div>
</div>

</div>

---
layout: default
---

# 🧠 Mental Model Shift: The Complete Picture

<div class="mt-6 grid grid-cols-3 gap-4">

<div>
<h3 class="text-xl font-bold text-green-400 mb-4">Move Toward ✅</h3>
<div class="space-y-2 text-sm text-gray-300">
<div>✅ Multi-session workflows with handoffs</div>
<div>✅ Domain-specific Skills for team expertise</div>
<div>✅ Visible reasoning with thinking tokens</div>
<div>✅ Sandboxed autonomy with auto-approval</div>
<div>✅ Organization consistency via org-level config</div>
</div>
</div>

<div>
<h3 class="text-xl font-bold text-yellow-400 mb-4">Move Away From ⚠️</h3>
<div class="space-y-2 text-sm text-gray-300">
<div>⚠️ Single long conversations</div>
<div>⚠️ Manual approval fatigue</div>
<div>⚠️ Per-developer customization divergence</div>
<div>⚠️ Context window overflow</div>
</div>
</div>

<div>
<h3 class="text-xl font-bold text-red-400 mb-4">Move Against 🛑</h3>
<div class="space-y-2 text-sm text-gray-300">
<div>🛑 Unsandboxed autonomous agents</div>
<div>🛑 Context dumping entire codebases</div>
<div>🛑 Unrestricted system/network access</div>
</div>
</div>

</div>

<div class="mt-8 bg-gradient-to-r from-cyan-900/30 via-blue-900/20 to-indigo-900/30 rounded-lg p-6 border border-cyan-500/30 text-center">
<p class="text-2xl font-bold text-transparent bg-gradient-to-r from-cyan-300 to-indigo-300 bg-clip-text">
From one assistant → to a team of specialized agents you orchestrate
</p>
</div>

---
layout: default
---

# ✅ What You Can Do Today

<div class="mt-6 grid grid-cols-3 gap-5">

<div>
<h3 class="text-lg font-bold text-cyan-400 mb-3">⚡ Immediate (5 min)</h3>
<div class="space-y-2 text-sm text-gray-300">
<div>📦 Update VS Code to v1.109+</div>
<div>🚀 Try <span class="font-mono text-cyan-300">/init</span> to bootstrap workspace instructions</div>
<div>💭 Enable thinking tokens (budget: 4000)</div>
</div>
</div>

<div>
<h3 class="text-lg font-bold text-blue-400 mb-3">🔨 Short-Term (30 min)</h3>
<div class="space-y-2 text-sm text-gray-300">
<div>🛡️ Enable terminal sandboxing</div>
<div>📚 Create first Agent Skill in <span class="font-mono text-blue-300">.github/skills/</span></div>
<div>🔄 Try multi-session workflow with worktree handoff</div>
</div>
</div>

<div>
<h3 class="text-lg font-bold text-indigo-400 mb-3">🎯 Explore (1 hour)</h3>
<div class="space-y-2 text-sm text-gray-300">
<div>🤖 Define custom agent with subagent invocation</div>
<div>🧠 Enable Copilot Memory</div>
<div>🌐 Try integrated browser for localhost dev</div>
<div>🔌 Enable GitHub MCP Server</div>
</div>
</div>

</div>

<div class="mt-6 bg-gradient-to-r from-cyan-900/20 to-indigo-900/20 rounded-lg p-4 border border-cyan-500/30">
<p class="text-center text-gray-300">
💡 <span class="text-cyan-400 font-semibold">Pro tip:</span> Start with thinking tokens and sandboxing — immediate impact with minimal configuration
</p>
</div>

---
layout: default
---

# 📖 Key References

<div class="mt-6 space-y-3 text-sm">

<div class="bg-indigo-900/20 rounded p-4 border border-indigo-500/30">
<div class="font-mono text-indigo-300 mb-1">VS Code Release Notes: January 2026 (v1.109)</div>
<div class="text-gray-400">Chat UX, Agent Sessions, Claude Agent, terminal sandboxing, Copilot Memory, MCP Apps</div>
</div>

<div class="bg-blue-900/20 rounded p-4 border border-blue-500/30">
<div class="font-mono text-blue-300 mb-1">VS Code Release Notes: December 2025 (v1.108)</div>
<div class="text-gray-400">Agent Skills experimental, Agent Sessions view, terminal IntelliSense rework</div>
</div>

<div class="bg-cyan-900/20 rounded p-4 border border-cyan-500/30">
<div class="font-mono text-cyan-300 mb-1">VS Code Release Notes: November 2025 (v1.107)</div>
<div class="text-gray-400">Multi-agent orchestration, background agents in worktrees, org-level custom agents</div>
</div>

<div class="bg-purple-900/20 rounded p-4 border border-purple-500/30">
<div class="font-mono text-purple-300 mb-1">GitHub Copilot in VS Code Documentation</div>
<div class="text-gray-400">Comprehensive guide to Copilot features, agent types, and customization</div>
</div>

<div class="bg-pink-900/20 rounded p-4 border border-pink-500/30">
<div class="font-mono text-pink-300 mb-1">Anthropic: Claude's Extended Thinking</div>
<div class="text-gray-400">Technical explanation of extended thinking tokens and visible reasoning</div>
</div>

</div>

---
layout: center
---

<div class="text-center">
<h1 class="text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
Thank You
</h1>

<div class="text-2xl text-gray-300 mb-12">
Questions?
</div>

<div class="text-lg text-gray-400">
<p>Update VS Code to v1.109 and start experimenting today</p>
<p class="mt-4 text-cyan-400 font-semibold">From one assistant to a team of specialized agents</p>
</div>
</div>
