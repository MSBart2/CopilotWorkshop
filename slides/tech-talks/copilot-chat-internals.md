---
theme: default
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Under the Hood: Copilot Chat Internals
  CopilotTraining Tech Talk
drawings:
  persist: false
transition: slide-left
title: Under the Hood - Copilot Chat Internals
mdc: true
---

<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
  <!-- Gradient background -->
  <div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-indigo-900/20"></div>

  <!-- Glowing orb -->
  <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-indigo-500/20 rounded-full blur-3xl"></div>

  <!-- Logo with glow -->
  <div class="relative z-10">
    <div class="absolute inset-0 blur-2xl opacity-50">
      <img src="./sdp-logo.png" class="w-64" alt="" />
    </div>
    <img src="./sdp-logo.png" class="w-64 relative" alt="SDP Logo" />
  </div>

  <!-- Gradient text title -->
  <h1 class="!text-5xl !font-bold !mt-8 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent relative z-10">
    Under the Hood
  </h1>

  <!-- Pill subtitle -->
  <div class="mt-4 relative z-10">
    <span class="px-6 py-2 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xl font-medium shadow-lg shadow-cyan-500/25">
      Copilot Chat Internals
    </span>
  </div>

  <!-- Decorative line -->
  <div class="mt-8 w-32 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full relative z-10"></div>
</div>

<div class="abs-br m-6 flex gap-2">
  <span class="text-sm opacity-50">CopilotTraining Tech Talk</span>
</div>

---

# The Visibility Problem

<div class="grid grid-cols-2 gap-8 mt-8">

<div class="p-6 bg-red-900/40 rounded-lg border-2 border-red-500">
<h3 class="text-xl font-bold text-white mb-4">❌ Black Box Frustration</h3>
<ul class="text-sm text-gray-300 space-y-2">
<li>Prompts don't produce expected results</li>
<li>Can't see why AI responded incorrectly</li>
<li>Which files were actually sent?</li>
<li>Were instructions loaded?</li>
</ul>
</div>

<div class="p-6 bg-yellow-900/40 rounded-lg border-2 border-yellow-500">
<h3 class="text-xl font-bold text-white mb-4">⚠️ Trial-and-Error Cycle</h3>
<ul class="text-sm text-gray-300 space-y-2">
<li>Improving prompts becomes guesswork</li>
<li>Context mystery—what did Copilot see?</li>
<li>Tool invocations hidden</li>
<li>No systematic debugging approach</li>
</ul>
</div>

</div>

<div class="mt-8 p-5 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-lg text-center">
<div class="text-xl font-bold text-white">Without visibility, debugging AI interactions is guesswork.</div>
</div>

---

# Chat Debug View: Your X-Ray Vision

<div class="grid grid-cols-3 gap-4 mt-8 text-xs">

<div class="p-3 bg-gray-800 rounded-lg flex items-start gap-2">
<span class="text-2xl">📋</span>
<div>
<div class="text-white font-bold">System Prompt</div>
<div class="text-gray-400">Base instructions for AI behavior</div>
</div>
</div>

<div class="p-3 bg-gray-800 rounded-lg flex items-start gap-2">
<span class="text-2xl">💬</span>
<div>
<div class="text-white font-bold">User Prompt</div>
<div class="text-gray-400">Your actual request as sent</div>
</div>
</div>

<div class="p-3 bg-gray-800 rounded-lg flex items-start gap-2">
<span class="text-2xl">📚</span>
<div>
<div class="text-white font-bold">Context</div>
<div class="text-gray-400">Files and instructions sent</div>
</div>
</div>

<div class="p-3 bg-gray-800 rounded-lg flex items-start gap-2">
<span class="text-2xl">🔧</span>
<div>
<div class="text-white font-bold">Tool Invocations</div>
<div class="text-gray-400">Which tools were called</div>
</div>
</div>

<div class="p-3 bg-gray-800 rounded-lg flex items-start gap-2">
<span class="text-2xl">🤖</span>
<div>
<div class="text-white font-bold">Model Response</div>
<div class="text-gray-400">Full response from LLM</div>
</div>
</div>

<div class="p-3 bg-gray-800 rounded-lg flex items-start gap-2">
<span class="text-2xl">🎯</span>
<div>
<div class="text-white font-bold">Token Usage</div>
<div class="text-gray-400">Context window consumption</div>
</div>
</div>

</div>

<div class="mt-8 p-4 bg-blue-900/60 rounded-lg border-2 border-blue-400">
<div class="text-white font-bold mb-2">💡 How to Open</div>
<div class="text-sm text-gray-300">Chat view → Overflow menu <code>...</code> → <strong>Show Chat Debug View</strong></div>
<div class="text-sm text-gray-300 mt-1">OR: Command Palette → <strong>Developer: Show Chat Debug View</strong></div>
</div>

---

# Anatomy of a Chat Request

<div class="flex flex-col items-center gap-3 mt-4 text-sm">

<div class="p-3 bg-blue-900/60 rounded-lg border-2 border-blue-400 w-full">
<div class="text-white font-bold">1. YOUR PROMPT</div>
<div class="text-gray-300 italic">"Add error handling to this function"</div>
</div>

<div class="text-2xl text-gray-400">↓</div>

<div class="p-3 bg-green-900/60 rounded-lg border-2 border-green-400 w-full">
<div class="text-white font-bold">2. CONTEXT ASSEMBLY</div>
<div class="text-gray-300">Active file, selections, #file, @workspace, instructions, agent definitions, skills</div>
</div>

<div class="text-2xl text-gray-400">↓</div>

<div class="p-3 bg-purple-900/60 rounded-lg border-2 border-purple-400 w-full">
<div class="text-white font-bold">3. SYSTEM PROMPT CONSTRUCTION</div>
<div class="text-gray-300">Base Copilot instructions + agent-specific + custom instructions + tool definitions</div>
</div>

<div class="text-2xl text-gray-400">↓</div>

<div class="p-3 bg-orange-900/60 rounded-lg border-2 border-orange-400 w-full">
<div class="text-white font-bold">4. MODEL INFERENCE</div>
<div class="text-gray-300">Model processes request → may invoke tools → tool results fed back → response generated</div>
</div>

<div class="text-2xl text-gray-400">↓</div>

<div class="p-3 bg-blue-900/60 rounded-lg border-2 border-blue-400 w-full">
<div class="text-white font-bold">5. RESPONSE DELIVERY</div>
<div class="text-gray-300">Streamed to Chat view with formatted code blocks and actions</div>
</div>

</div>

---

# What to Look For in Debug View

<div class="grid grid-cols-3 gap-6 mt-8">

<div class="p-4 bg-blue-900/60 rounded-lg border-l-4 border-blue-400">
<h3 class="text-lg font-bold text-white mb-3">📚 Context Section</h3>
<ul class="text-sm text-gray-300 space-y-2">
<li>✓ Are the right files included?</li>
<li>✓ Is context window full?</li>
<li>✓ Are instructions loaded?</li>
<li>✓ Check token usage</li>
</ul>
</div>

<div class="p-4 bg-green-900/60 rounded-lg border-l-4 border-green-400">
<h3 class="text-lg font-bold text-white mb-3">🔧 Tool Invocations</h3>
<ul class="text-sm text-gray-300 space-y-2">
<li>✓ Which tools were called?</li>
<li>✓ Did they succeed or fail?</li>
<li>✓ What data did they return?</li>
<li>✓ Error messages?</li>
</ul>
</div>

<div class="p-4 bg-purple-900/60 rounded-lg border-l-4 border-purple-400">
<h3 class="text-lg font-bold text-white mb-3">🤖 Response</h3>
<ul class="text-sm text-gray-300 space-y-2">
<li>✓ Does model reference instructions?</li>
<li>✓ Are codebase patterns followed?</li>
<li>✓ Context properly applied?</li>
<li>✓ Response quality matches expectations?</li>
</ul>
</div>

</div>

---

# Customization Diagnostics

<div class="grid grid-cols-2 gap-8 mt-8">

<div>
<h3 class="text-xl font-bold text-white mb-4">🔍 What Diagnostics Reveals</h3>
<ul class="text-sm text-gray-300 space-y-2">
<li>📁 All active customization files</li>
<li>✅ Load status for each file</li>
<li>❌ Error messages for failed files</li>
<li>📋 Application order for instructions</li>
</ul>

<div class="mt-4 p-3 bg-blue-900/60 rounded-lg border-2 border-blue-400">
<div class="text-white font-bold text-sm">How to Open</div>
<div class="text-xs text-gray-300 mt-1">Right-click in Chat → <strong>Diagnostics</strong></div>
</div>
</div>

<div>
<h3 class="text-xl font-bold text-white mb-4">⚠️ Common Issues</h3>
<div class="space-y-2 text-xs">
<div class="p-2 bg-red-900/40 rounded-lg">
<div class="text-white font-bold">Agent not available</div>
<div class="text-gray-400">→ Syntax error in YAML frontmatter</div>
</div>
<div class="p-2 bg-yellow-900/40 rounded-lg">
<div class="text-white font-bold">Instructions ignored</div>
<div class="text-gray-400">→ File in wrong location (needs .github/)</div>
</div>
<div class="p-2 bg-orange-900/40 rounded-lg">
<div class="text-white font-bold">Skills not triggering</div>
<div class="text-gray-400">→ applyTo pattern doesn't match</div>
</div>
<div class="p-2 bg-red-900/40 rounded-lg">
<div class="text-white font-bold">Duplicate agents</div>
<div class="text-gray-400">→ Multiple files with same name</div>
</div>
</div>
</div>

</div>

---

# Troubleshooting Patterns

<div class="grid grid-cols-2 gap-4 mt-6 text-xs">

<div class="p-3 bg-gray-800 rounded-lg">
<div class="text-white font-bold mb-2">🚫 "Copilot Ignores My Instructions"</div>
<div class="text-gray-400">
<strong>Check:</strong><br/>
1. Diagnostics → verify file loaded<br/>
2. Debug View → check context section<br/>
3. Look for References in response<br/>
<strong>Common causes:</strong> Wrong location, syntax error, too long
</div>
</div>

<div class="p-3 bg-gray-800 rounded-lg">
<div class="text-white font-bold mb-2">📁 "Wrong Files in Context"</div>
<div class="text-gray-400">
<strong>Check:</strong><br/>
1. Debug View → expand context<br/>
2. Review actual files included<br/>
<strong>Common causes:</strong> @workspace returned unexpected, #file path incorrect, implicit context wrong
</div>
</div>

<div class="p-3 bg-gray-800 rounded-lg">
<div class="text-white font-bold mb-2">🔧 "Tool Invocation Failed"</div>
<div class="text-gray-400">
<strong>Check:</strong><br/>
1. Debug View → tool invocations<br/>
2. Check error message<br/>
<strong>Common causes:</strong> MCP server not running, auth required, input format incorrect
</div>
</div>

<div class="p-3 bg-gray-800 rounded-lg">
<div class="text-white font-bold mb-2">🎯 "Response Doesn't Match Patterns"</div>
<div class="text-gray-400">
<strong>Check:</strong><br/>
1. Debug View → what context sent<br/>
2. Verify instructions mention patterns<br/>
<strong>Common causes:</strong> Relevant files not in context, instructions weak, context truncated
</div>
</div>

</div>

---

# Context Window Awareness

<div class="mt-8">

<div class="p-5 bg-yellow-900/40 rounded-lg border-2 border-yellow-500 mb-6">
<h3 class="text-lg font-bold text-white mb-3">⚠️ Token Limits Matter</h3>
<div class="text-sm text-gray-300">
When context window is exceeded:
<ul class="mt-2 space-y-1">
<li>• Oldest context is truncated</li>
<li>• Instructions may be dropped</li>
<li>• File contents may be incomplete</li>
</ul>
</div>
</div>

<div class="grid grid-cols-2 gap-8">

<div>
<h3 class="text-lg font-bold text-white mb-3">📊 Monitor Usage</h3>
<div class="text-sm text-gray-300">
<strong>New in VS Code 1.109:</strong> Context window indicator in chat input
</div>
<div class="mt-3 p-3 bg-blue-900/60 rounded-lg text-xs">
<div class="text-white">Hover to see breakdown:</div>
<ul class="text-gray-300 mt-2 space-y-1">
<li>• System prompt tokens</li>
<li>• User message tokens</li>
<li>• Context tokens</li>
<li>• Remaining capacity</li>
</ul>
</div>
</div>

<div>
<h3 class="text-lg font-bold text-white mb-3">🎯 Optimize Context</h3>
<div class="space-y-2 text-xs">
<div class="p-2 bg-gray-800 rounded-lg flex items-start gap-2">
<span>🔹</span>
<div>
<div class="text-white font-bold">Context window full</div>
<div class="text-gray-400">Use specific #file instead of @workspace</div>
</div>
</div>
<div class="p-2 bg-gray-800 rounded-lg flex items-start gap-2">
<span>🔹</span>
<div>
<div class="text-white font-bold">Important context dropped</div>
<div class="text-gray-400">Reference critical files explicitly</div>
</div>
</div>
<div class="p-2 bg-gray-800 rounded-lg flex items-start gap-2">
<span>🔹</span>
<div>
<div class="text-white font-bold">Long conversations</div>
<div class="text-gray-400">Start new session or use /compact</div>
</div>
</div>
</div>
</div>

</div>

</div>

---

# Extension Logs: Deep Debugging

<div class="grid grid-cols-2 gap-8 mt-8">

<div>
<h3 class="text-xl font-bold text-white mb-4">🔍 Enable Trace Logs</h3>
<div class="p-4 bg-gray-800 rounded-lg">
<ol class="text-sm text-gray-300 space-y-2">
<li><strong>1.</strong> Command Palette → <code>Ctrl+Shift+P</code></li>
<li><strong>2.</strong> Run <strong>Developer: Set Log Level</strong></li>
<li><strong>3.</strong> Set to <strong>Trace</strong> for:
<ul class="ml-4 mt-1">
<li>• GitHub Copilot</li>
<li>• GitHub Copilot Chat</li>
</ul>
</li>
</ol>
</div>

<div class="mt-4 p-3 bg-blue-900/60 rounded-lg text-xs">
<div class="text-white font-bold">View Logs</div>
<div class="text-gray-300 mt-1">Output: Show Output Channels → Select GitHub Copilot</div>
</div>
</div>

<div>
<h3 class="text-xl font-bold text-white mb-4">📋 What Logs Reveal</h3>
<div class="space-y-2">
<div class="p-2 bg-gray-800 rounded-lg text-sm">
<div class="text-white">🌐 Network requests and responses</div>
</div>
<div class="p-2 bg-gray-800 rounded-lg text-sm">
<div class="text-white">⚙️ Extension initialization</div>
</div>
<div class="p-2 bg-gray-800 rounded-lg text-sm">
<div class="text-white">🔐 Authentication status</div>
</div>
<div class="p-2 bg-gray-800 rounded-lg text-sm">
<div class="text-white">❌ Error stack traces</div>
</div>
<div class="p-2 bg-gray-800 rounded-lg text-sm">
<div class="text-white">⏱️ Performance timing</div>
</div>
</div>
</div>

</div>

---

# MCP Server Troubleshooting

<div class="mt-8">

<div class="p-5 bg-gradient-to-r from-purple-600 to-purple-800 rounded-xl mb-6 text-center">
<div class="text-xl font-bold text-white">MCP servers extend Copilot with external capabilities</div>
</div>

<div class="grid grid-cols-2 gap-8">

<div>
<h3 class="text-lg font-bold text-white mb-3">🔍 Diagnostic Commands</h3>
<div class="p-4 bg-gray-800 rounded-lg">
<div class="text-sm text-white mb-2"><strong>Command Palette:</strong></div>
<div class="text-sm text-gray-300 mb-4">Run <strong>MCP: List Servers</strong></div>
<div class="text-sm text-white mb-2"><strong>For each server:</strong></div>
<ul class="text-xs text-gray-300 space-y-1">
<li>• Status (running, stopped, error)</li>
<li>• Show Output (view logs)</li>
<li>• Restart Server</li>
<li>• Stop Server</li>
</ul>
</div>
</div>

<div>
<h3 class="text-lg font-bold text-white mb-3">⚠️ Common Issues</h3>
<div class="space-y-2 text-xs">
<div class="p-2 bg-red-900/40 rounded-lg">
<div class="text-white font-bold">Server not starting</div>
<div class="text-gray-400">Check output logs → Fix config/dependencies</div>
</div>
<div class="p-2 bg-yellow-900/40 rounded-lg">
<div class="text-white font-bold">Tools not appearing</div>
<div class="text-gray-400">Verify status → Restart server</div>
</div>
<div class="p-2 bg-orange-900/40 rounded-lg">
<div class="text-white font-bold">Timeout errors</div>
<div class="text-gray-400">Check performance → Optimize or increase timeout</div>
</div>
<div class="p-2 bg-red-900/40 rounded-lg">
<div class="text-white font-bold">Auth failures</div>
<div class="text-gray-400">Review logs → Update API keys</div>
</div>
</div>
</div>

</div>

</div>

---

# Best Practices for Observability

<div class="grid grid-cols-2 gap-8 mt-8">

<div class="space-y-4">
<div class="p-4 bg-blue-900/60 rounded-lg border-l-4 border-blue-400">
<h3 class="text-lg font-bold text-white mb-2">🔍 Develop with Debug View Open</h3>
<ul class="text-sm text-gray-300 space-y-1">
<li>• Keep in split editor</li>
<li>• Watch context assembly real-time</li>
<li>• Iterate based on what you see</li>
</ul>
</div>

<div class="p-4 bg-green-900/60 rounded-lg border-l-4 border-green-400">
<h3 class="text-lg font-bold text-white mb-2">✅ Regular Diagnostics Checks</h3>
<ul class="text-sm text-gray-300 space-y-1">
<li>• After adding customizations</li>
<li>• Verify loading status</li>
<li>• Confirm application</li>
</ul>
</div>
</div>

<div class="space-y-4">
<div class="p-4 bg-purple-900/60 rounded-lg border-l-4 border-purple-400">
<h3 class="text-lg font-bold text-white mb-2">📊 Log Strategic Moments</h3>
<ul class="text-sm text-gray-300 space-y-1">
<li>• Setting up new MCP servers</li>
<li>• Debugging auth issues</li>
<li>• Investigating performance</li>
</ul>
</div>

<div class="p-4 bg-yellow-900/60 rounded-lg border-l-4 border-yellow-400">
<h3 class="text-lg font-bold text-white mb-2">📝 Document Working Patterns</h3>
<ul class="text-sm text-gray-300 space-y-1">
<li>• Note context included</li>
<li>• Record active instructions</li>
<li>• Save Debug View output</li>
</ul>
</div>
</div>

</div>

---

# Key Takeaways

<div class="mt-8 space-y-4">

<div class="p-5 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-lg">
<div class="text-xl font-bold text-white text-center">🔍 Visibility enables improvement — You can't fix what you can't see</div>
</div>

<div class="grid grid-cols-2 gap-4 text-sm">

<div class="p-4 bg-gray-800 rounded-lg border-l-4 border-blue-400">
<div class="text-white font-bold mb-2">🎯 Debug View is Essential</div>
<div class="text-gray-300">System prompts, context, tool invocations—all visible and inspectable</div>
</div>

<div class="p-4 bg-gray-800 rounded-lg border-l-4 border-green-400">
<div class="text-white font-bold mb-2">✅ Diagnostics Catches Config Issues</div>
<div class="text-gray-300">Load failures, syntax errors, wrong paths revealed immediately</div>
</div>

<div class="p-4 bg-gray-800 rounded-lg border-l-4 border-purple-400">
<div class="text-white font-bold mb-2">📊 Context Window Matters</div>
<div class="text-gray-300">Monitor token usage, optimize what's sent to avoid truncation</div>
</div>

<div class="p-4 bg-gray-800 rounded-lg border-l-4 border-yellow-400">
<div class="text-white font-bold mb-2">🔧 Logs for Deep Issues</div>
<div class="text-gray-300">Network, auth, and extension problems require trace logging</div>
</div>

</div>

<div class="mt-4 text-center text-sm text-gray-400 italic">
Make opening the Debug View a habit—understanding what Copilot sees is the fastest path to better results
</div>

</div>

---
layout: center
---

# Getting Started

<div class="mt-8 space-y-4 text-left max-w-2xl mx-auto">

<div class="p-4 bg-blue-900/60 rounded-lg border-2 border-blue-400">
<h3 class="text-lg font-bold text-white mb-3">🚀 Immediate Actions</h3>
<ol class="text-sm text-gray-300 space-y-2">
<li><strong>1.</strong> Open Chat Debug View now — Make a request and examine every section</li>
<li><strong>2.</strong> Check Diagnostics — Right-click in Chat to verify your customizations</li>
<li><strong>3.</strong> Monitor context window — Watch the indicator as you add context</li>
</ol>
</div>

<div class="p-4 bg-green-900/60 rounded-lg border-2 border-green-400">
<h3 class="text-lg font-bold text-white mb-3">➡️ Next Steps</h3>
<ul class="text-sm text-gray-300 space-y-2">
<li>• Enable trace logs when debugging complex issues</li>
<li>• Review MCP server status if using external tools</li>
<li>• Develop with Debug View visible to iterate faster</li>
</ul>
</div>

</div>

---
layout: end
---

# Master the Tools

<div class="text-center mt-8">
<div class="text-2xl text-gray-300 mb-4">Systematic debugging beats trial-and-error</div>
<div class="text-lg text-gray-400">Use Chat Debug View, Diagnostics, and Extension Logs to see what Copilot actually sees</div>
</div>
