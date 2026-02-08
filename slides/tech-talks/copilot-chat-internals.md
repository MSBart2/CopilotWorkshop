---
theme: default
class: text-center
highlighter: shiki
lineNumbers: false
drawings:
  persist: false
transition: slide-left
title: Copilot Chat Internals
mdc: true
status: active
updated: 2026-02-01
---

# 🔍 Copilot Chat Internals

## Debugging AI Interactions

⏰ **Duration** • 40 minutes | 👥 **Audience** • Developers / DevOps / Technical Leads

---
layout: center
---

# ❓ The Question

<div class="text-2xl mb-8">

> *"Why didn't Copilot do what I expected—*
>
> *and how do I systematically debug AI interactions?"*

</div>

<div class="text-lg opacity-80">

Every developer using Copilot encounters unexpected results.

This talk shows you how to investigate, not guess.

</div>

---
layout: center
---

# 📖 Table of Contents

<div class="grid grid-cols-2 gap-6">
  <div @click="$nav.go(7)" class="cursor-pointer p-6 rounded-lg border-2 border-blue-400 hover:border-blue-500 hover:bg-blue-400/10 transition-all">
    <div class="text-3xl mb-2">🔎</div>
    <div class="font-semibold text-lg">Chat Debug View</div>
    <div class="text-sm opacity-70">Complete request inspection</div>
  </div>
  <div @click="$nav.go(11)" class="cursor-pointer p-6 rounded-lg border-2 border-purple-400 hover:border-purple-500 hover:bg-purple-400/10 transition-all">
    <div class="text-3xl mb-2">🧠</div>
    <div class="font-semibold text-lg">Thinking Tokens</div>
    <div class="text-sm opacity-70">See model reasoning</div>
  </div>
  <div @click="$nav.go(13)" class="cursor-pointer p-6 rounded-lg border-2 border-green-400 hover:border-green-500 hover:bg-green-400/10 transition-all">
    <div class="text-3xl mb-2">⚙️</div>
    <div class="font-semibold text-lg">Diagnostics View</div>
    <div class="text-sm opacity-70">Configuration validation</div>
  </div>
  <div @click="$nav.go(15)" class="cursor-pointer p-6 rounded-lg border-2 border-orange-400 hover:border-orange-500 hover:bg-orange-400/10 transition-all">
    <div class="text-3xl mb-2">📋</div>
    <div class="font-semibold text-lg">Extension Logs & MCP</div>
    <div class="text-sm opacity-70">Deep troubleshooting</div>
  </div>
</div>

<div @click="$nav.go(17)" class="mt-6 cursor-pointer p-4 rounded-lg border-2 border-cyan-400 hover:border-cyan-500 hover:bg-cyan-400/10 transition-all">
  <div class="text-center">
    <span class="text-2xl mr-2">🔧</span>
    <span class="font-semibold">Troubleshooting Patterns</span>
    <span class="text-sm opacity-70 ml-2">• Systematic debugging workflows</span>
  </div>
</div>

---

# ⚠️ The Problem

<div class="text-xl mb-6">Why debugging AI interactions is hard</div>

<div class="grid grid-cols-1 gap-4">

<div class="p-4 bg-red-400/10 rounded border-l-4 border-red-400">
  <div class="font-semibold">🔒 Black box frustration</div>
  <div class="text-sm opacity-80">No visibility into what the model received</div>
</div>

<div class="p-4 bg-orange-400/10 rounded border-l-4 border-orange-400">
  <div class="font-semibold">❓ Context mystery</div>
  <div class="text-sm opacity-80">Which files were sent? Were custom instructions loaded?</div>
</div>

<div class="p-4 bg-yellow-400/10 rounded border-l-4 border-yellow-400">
  <div class="font-semibold">🔁 Trial-and-error debugging</div>
  <div class="text-sm opacity-80">20-40 minutes per failed interaction</div>
</div>

<div class="p-4 bg-purple-400/10 rounded border-l-4 border-purple-400">
  <div class="font-semibold">⚙️ Customization uncertainty</div>
  <div class="text-sm opacity-80">Are my agents and instructions actually working?</div>
</div>

</div>

---

# ✅ The Solution

<div class="text-xl mb-6">Built-in observability tools</div>

<div class="grid grid-cols-2 gap-6">

<div>

### What It Provides

- **Request Inspection**: View system prompts, context, and tool invocations
- **Reasoning Visibility**: See model thinking tokens
- **Configuration Validation**: Verify customizations loaded correctly
- **Network Diagnostics**: Troubleshoot connectivity issues

</div>

<div>

### Four Diagnostic Systems

1. **Chat Debug View** → Request/response details
2. **Thinking Tokens** → Model reasoning
3. **Diagnostics View** → Config validation
4. **Extension Logs** → Infrastructure debugging

</div>

</div>

<div class="mt-6 p-4 bg-blue-400/10 rounded border-l-4 border-blue-400">
  <div class="font-semibold">💡 Core Insight</div>
  <div class="text-sm">Transform AI debugging from guesswork into systematic investigation</div>
</div>

---
layout: center
name: chatdebugview
---

# 🔎 Chat Debug View

<div class="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
Complete Request Inspection
</div>

<div class="mt-6 text-xl opacity-80">
See exactly what every AI request sends and receives
</div>

<div class="mt-8 text-sm opacity-60">
Section 1 of 5 • No more black boxes
</div>

---

# 🔎 Chat Debug View: What It Shows

<div class="text-lg mb-4">Every component of each AI interaction</div>

<div class="grid grid-cols-2 gap-4">

<div class="space-y-3">

<div class="p-3 bg-blue-400/10 rounded">
  <div class="font-semibold">📝 System Prompt</div>
  <div class="text-sm opacity-80">Base instructions for AI behavior</div>
</div>

<div class="p-3 bg-green-400/10 rounded">
  <div class="font-semibold">💬 User Prompt</div>
  <div class="text-sm opacity-80">Your actual request as sent</div>
</div>

<div class="p-3 bg-purple-400/10 rounded">
  <div class="font-semibold">📁 Context</div>
  <div class="text-sm opacity-80">Files, instructions, and context sent</div>
</div>

</div>

<div class="space-y-3">

<div class="p-3 bg-orange-400/10 rounded">
  <div class="font-semibold">🔧 Tool Invocations</div>
  <div class="text-sm opacity-80">Which tools were called and results</div>
</div>

<div class="p-3 bg-cyan-400/10 rounded">
  <div class="font-semibold">✨ Model Response</div>
  <div class="text-sm opacity-80">Full response from language model</div>
</div>

</div>

</div>

<div class="mt-6 p-4 bg-yellow-400/10 rounded border-l-4 border-yellow-400">
  <div class="font-semibold">🎯 How to Open</div>
  <div class="text-sm">Command Palette → <code>Developer: Show Chat Debug View</code></div>
</div>

---

# 🔎 The Request Pipeline

<div class="text-sm mb-4">What happens when you send a chat message</div>

<div class="grid grid-cols-5 gap-2 text-xs">

<div class="p-3 bg-blue-400/10 rounded text-center">
  <div class="text-2xl mb-1">1️⃣</div>
  <div class="font-semibold">Your Prompt</div>
</div>

<div class="flex items-center justify-center">
  <div class="text-2xl">→</div>
</div>

<div class="p-3 bg-purple-400/10 rounded text-center">
  <div class="text-2xl mb-1">2️⃣</div>
  <div class="font-semibold">Context Assembly</div>
</div>

<div class="flex items-center justify-center">
  <div class="text-2xl">→</div>
</div>

<div class="p-3 bg-pink-400/10 rounded text-center">
  <div class="text-2xl mb-1">3️⃣</div>
  <div class="font-semibold">System Prompt</div>
</div>

</div>

<div class="grid grid-cols-5 gap-2 text-xs mt-2">

<div class="col-start-2 flex items-center justify-center">
  <div class="text-2xl">↓</div>
</div>

</div>

<div class="grid grid-cols-5 gap-2 text-xs">

<div class="col-start-2 p-3 bg-orange-400/10 rounded text-center">
  <div class="text-2xl mb-1">5️⃣</div>
  <div class="font-semibold">Response</div>
</div>

<div class="flex items-center justify-center">
  <div class="text-2xl">←</div>
</div>

<div class="p-3 bg-green-400/10 rounded text-center">
  <div class="text-2xl mb-1">4️⃣</div>
  <div class="font-semibold">Model Inference</div>
</div>

</div>

<div class="mt-6 text-sm">
  <strong>Key Assembly Steps:</strong> Active files + #file refs + @workspace + instructions + agent defs + tools
</div>

---

# 🔎 What to Look For

<div class="text-lg mb-4">Key things to check in Debug View</div>

<div class="space-y-4">

<div class="p-4 bg-blue-400/10 rounded border-l-4 border-blue-400">
  <div class="font-semibold mb-2">📁 Context Section</div>
  <div class="text-sm opacity-90">
    • Are the right files included?<br/>
    • Is the context window full? (check token usage)<br/>
    • Are instructions being loaded?
  </div>
</div>

<div class="p-4 bg-purple-400/10 rounded border-l-4 border-purple-400">
  <div class="font-semibold mb-2">🔧 Tool Invocations</div>
  <div class="text-sm opacity-90">
    • Which tools were called?<br/>
    • Did they succeed or fail?<br/>
    • What data did they return?
  </div>
</div>

<div class="p-4 bg-green-400/10 rounded border-l-4 border-green-400">
  <div class="font-semibold mb-2">✨ Response</div>
  <div class="text-sm opacity-90">
    • Does the model reference your instructions?<br/>
    • Are patterns from your codebase being followed?
  </div>
</div>

</div>

---
layout: center
name: thinkingtoken
---

# 🧠 Thinking Tokens

<div class="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
See the Model Reason
</div>

<div class="mt-6 text-xl opacity-80">
Watch the model's reasoning process in real-time
</div>

<div class="mt-8 text-sm opacity-60">
Section 2 of 5 • VS Code 1.109+
</div>

---

# 🧠 Thinking Tokens: What They Reveal

<div class="grid grid-cols-2 gap-6">

<div>

### What Are Thinking Tokens?

Some models (Claude, o-series) produce **internal reasoning steps** before generating a response.

VS Code 1.109+ can display these tokens, showing *how* the model approaches your request.

### Enable Thinking Display

Setting: `chat.renderThinking`

- **"collapsed"** (default) — Shown collapsed
- **"expanded"** — Shown expanded
- **"hidden"** — Not displayed

</div>

<div>

### What Thinking Reveals

<div class="space-y-3">

<div class="p-3 bg-blue-400/10 rounded">
  <div class="font-semibold text-sm">Problem decomposition</div>
  <div class="text-xs opacity-80">How the model breaks down your request</div>
</div>

<div class="p-3 bg-purple-400/10 rounded">
  <div class="font-semibold text-sm">Tool selection reasoning</div>
  <div class="text-xs opacity-80">Why specific tools were chosen</div>
</div>

<div class="p-3 bg-green-400/10 rounded">
  <div class="font-semibold text-sm">Context evaluation</div>
  <div class="text-xs opacity-80">How files influenced decisions</div>
</div>

<div class="p-3 bg-orange-400/10 rounded">
  <div class="font-semibold text-sm">Uncertainty signals</div>
  <div class="text-xs opacity-80">When multiple approaches considered</div>
</div>

</div>

</div>

</div>

---
layout: center
name: diagnosticsview
---

# ⚙️ Diagnostics View

<div class="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
Configuration Validation
</div>

<div class="mt-6 text-xl opacity-80">
Verify custom agents, instructions, and skills are loading correctly
</div>

<div class="mt-8 text-sm opacity-60">
Section 3 of 5 • Catch config errors early
</div>

---

# ⚙️ Diagnostics View: What It Shows

<div class="grid grid-cols-2 gap-6">

<div>

### When Customizations Don't Apply

Custom agents, instructions, prompts, and skills can fail to load **silently**.

### What Diagnostics Reveals

- All active customization files
- Load status (loaded, failed, skipped)
- Error messages for failed files
- Application order for instructions

### How to Open

Right-click in Chat view → **Diagnostics**

</div>

<div>

### Common Issues Revealed

<div class="space-y-3 text-sm">

<div class="p-3 bg-red-400/10 rounded">
  <div class="font-semibold">Agent not available</div>
  <div class="text-xs opacity-80">File failed to load due to syntax error</div>
  <div class="text-xs text-green-400">→ Check YAML frontmatter</div>
</div>

<div class="p-3 bg-orange-400/10 rounded">
  <div class="font-semibold">Instructions ignored</div>
  <div class="text-xs opacity-80">File in wrong location</div>
  <div class="text-xs text-green-400">→ Move to .github/ folder</div>
</div>

<div class="p-3 bg-yellow-400/10 rounded">
  <div class="font-semibold">Skills not triggering</div>
  <div class="text-xs opacity-80">Not matching applyTo pattern</div>
  <div class="text-xs text-green-400">→ Update glob pattern</div>
</div>

</div>

</div>

</div>

---
layout: center
name: extensionlogs
---

# 📋 Extension Logs & MCP

<div class="text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
Deep Troubleshooting
</div>

<div class="mt-6 text-xl opacity-80">
Infrastructure-level debugging for network, auth, and external tools
</div>

<div class="mt-8 text-sm opacity-60">
Section 4 of 5 • When things really break
</div>

---

# 📋 Extension Logs: Trace Mode

<div class="grid grid-cols-2 gap-6">

<div>

### Enable Detailed Logging

1. Command Palette (`Ctrl+Shift+P`)
2. **Developer: Set Log Level**
3. Set to **Trace** for:
   - GitHub Copilot
   - GitHub Copilot Chat

### View Logs

1. **Output: Show Output Channels**
2. Select **GitHub Copilot** from dropdown
3. Review detailed logs

</div>

<div>

### What Logs Reveal

<div class="space-y-3 text-sm">

<div class="p-3 bg-blue-400/10 rounded">
  <div class="font-semibold">Network requests</div>
  <div class="text-xs opacity-80">Request/response patterns, timeouts</div>
</div>

<div class="p-3 bg-purple-400/10 rounded">
  <div class="font-semibold">Authentication</div>
  <div class="text-xs opacity-80">Auth status, token validation</div>
</div>

<div class="p-3 bg-green-400/10 rounded">
  <div class="font-semibold">Extension lifecycle</div>
  <div class="text-xs opacity-80">Initialization, crashes, restarts</div>
</div>

<div class="p-3 bg-orange-400/10 rounded">
  <div class="font-semibold">Performance timing</div>
  <div class="text-xs opacity-80">Identify bottlenecks</div>
</div>

</div>

</div>

</div>

---
layout: center
name: troubleshooting
---

# 🔧 Troubleshooting Patterns

<div class="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
Systematic Debugging Workflows
</div>

<div class="mt-6 text-xl opacity-80">
Proven diagnostic workflows for common AI interaction problems
</div>

<div class="mt-8 text-sm opacity-60">
Section 5 of 5 • From symptoms to solutions
</div>

---

# 🔧 Pattern 1: Instructions Ignored

<div class="space-y-4">

<div class="p-4 bg-red-400/10 rounded border-l-4 border-red-400">
  <div class="font-semibold mb-2">❌ Symptom</div>
  <div class="text-sm">Copilot generates code that violates your custom instructions</div>
</div>

<div class="p-4 bg-blue-400/10 rounded border-l-4 border-blue-400">
  <div class="font-semibold mb-2">🔍 Diagnostic Steps</div>
  <div class="text-sm space-y-1">
    1. Open <strong>Diagnostics</strong> (right-click in Chat)<br/>
    2. Verify instruction file is listed and loaded<br/>
    3. Open <strong>Chat Debug View</strong><br/>
    4. Check if instructions appear in context section<br/>
    5. Look for "References" section in response
  </div>
</div>

<div class="p-4 bg-green-400/10 rounded border-l-4 border-green-400">
  <div class="font-semibold mb-2">✅ Common Causes</div>
  <div class="text-sm">
    • File not in <code>.github/copilot-instructions.md</code><br/>
    • Syntax error in YAML frontmatter<br/>
    • Instructions too long, truncated by context limits
  </div>
</div>

</div>

---

# 🔧 Pattern 2: Wrong Files in Context

<div class="space-y-4">

<div class="p-4 bg-red-400/10 rounded border-l-4 border-red-400">
  <div class="font-semibold mb-2">❌ Symptom</div>
  <div class="text-sm">Generated code ignores critical utilities or patterns</div>
</div>

<div class="p-4 bg-blue-400/10 rounded border-l-4 border-blue-400">
  <div class="font-semibold mb-2">🔍 Diagnostic Steps</div>
  <div class="text-sm space-y-1">
    1. Open <strong>Chat Debug View</strong><br/>
    2. Expand the <strong>context section</strong><br/>
    3. Review which files were actually included<br/>
    4. Check token usage percentage
  </div>
</div>

<div class="p-4 bg-green-400/10 rounded border-l-4 border-green-400">
  <div class="font-semibold mb-2">✅ Common Causes & Fixes</div>
  <div class="text-sm">
    • <code>@workspace</code> returned unexpected results → Use explicit <code>#file</code><br/>
    • Context window 95% full → Critical files truncated<br/>
    • Implicit context (active file) wasn't expected
  </div>
</div>

</div>

---

# 🔧 Pattern 3: Tool Invocation Failed

<div class="space-y-4">

<div class="p-4 bg-red-400/10 rounded border-l-4 border-red-400">
  <div class="font-semibold mb-2">❌ Symptom</div>
  <div class="text-sm">Agent produces generic code without using external tools</div>
</div>

<div class="p-4 bg-blue-400/10 rounded border-l-4 border-blue-400">
  <div class="font-semibold mb-2">🔍 Diagnostic Steps</div>
  <div class="text-sm space-y-1">
    1. Open <strong>Chat Debug View</strong><br/>
    2. Expand <strong>tool invocations section</strong><br/>
    3. Check error message or response<br/>
    4. Run <strong>MCP: List Servers</strong><br/>
    5. Select server → <strong>Show Output</strong>
  </div>
</div>

<div class="p-4 bg-green-400/10 rounded border-l-4 border-green-400">
  <div class="font-semibold mb-2">✅ Common Causes</div>
  <div class="text-sm">
    • MCP server not running → Restart server<br/>
    • Tool requires authentication → Update credentials<br/>
    • Timeout due to VPN latency → Increase timeout config
  </div>
</div>

</div>

---

# 📊 Real-World Impact

<div class="text-lg mb-4">Measurable improvements from diagnostic tools</div>

<div class="grid grid-cols-2 gap-6">

<div class="p-4 bg-blue-400/10 rounded border-l-4 border-blue-400">
  <div class="text-3xl font-bold mb-2">41 min</div>
  <div class="font-semibold">Time saved per config error</div>
  <div class="text-sm opacity-80 mt-2">Using Diagnostics View instead of trial-and-error</div>
</div>

<div class="p-4 bg-purple-400/10 rounded border-l-4 border-purple-400">
  <div class="text-3xl font-bold mb-2">80%</div>
  <div class="font-semibold">Reduction in missed context</div>
  <div class="text-sm opacity-80 mt-2">Monitoring context indicator proactively</div>
</div>

<div class="p-4 bg-green-400/10 rounded border-l-4 border-green-400">
  <div class="text-3xl font-bold mb-2">1-1.5 hrs</div>
  <div class="font-semibold">Daily time saved (team of 4)</div>
  <div class="text-sm opacity-80 mt-2">MCP server timeout debugging</div>
</div>

<div class="p-4 bg-orange-400/10 rounded border-l-4 border-orange-400">
  <div class="text-3xl font-bold mb-2">80%</div>
  <div class="font-semibold">Faster prompt debugging</div>
  <div class="text-sm opacity-80 mt-2">Using thinking tokens to identify ambiguity</div>
</div>

</div>

---

# ✅ What You Can Do Today

<div class="grid grid-cols-2 gap-6">

<div>

### Immediate (5 minutes)

- ✅ Open **Chat Debug View** now
- ✅ Enable thinking display: `chat.renderThinking` → "expanded"
- ✅ Check **Diagnostics** (right-click in Chat)
- ✅ Bookmark key commands

### Short-Term (30 minutes)

- ✅ Develop with Debug View open
- ✅ Monitor context window indicator
- ✅ Enable trace logs if needed
- ✅ Validate customizations after changes

</div>

<div>

### Advanced (1-2 hours)

- ✅ Build personal debugging runbook
- ✅ Analyze thinking patterns
- ✅ Set up MCP monitoring routine
- ✅ Create team documentation

### Next Steps

1. Make Debug View a habit
2. Review [Copilot Chat](../copilot-chat/) foundations
3. Share diagnostic wins with team
4. Explore [Custom Agents Workshop](../../workshop/06-custom-agents/)

</div>

</div>

---

# 🎯 Mental Model Shift

<div class="text-xl mb-6 text-center">
From <span class="text-red-400">"AI is unpredictable"</span> to <span class="text-green-400">"every interaction is debuggable"</span>
</div>

<div class="grid grid-cols-2 gap-6">

<div>

### ✅ Move Toward

<div class="space-y-2 text-sm">

- **Debug-View-First**: Keep it open during iteration
- **Thinking Token Analysis**: Read model reasoning
- **Diagnostics-As-Validation**: Check after every change
- **Evidence-Based Refinement**: Base improvements on actual data

</div>

</div>

<div>

### 🛑 Move Away From

<div class="space-y-2 text-sm">

- **Blind Iteration**: Tweaking without checking context
- **Assuming Loads**: Not verifying instructions applied
- **Reload as First Step**: Masks root causes
- **Black Box Acceptance**: AI is fundamentally unpredictable

</div>

</div>

</div>

<div class="mt-6 p-4 bg-blue-400/10 rounded border-l-4 border-blue-400">
  <div class="font-semibold">Example Transformation</div>
  <div class="text-sm">Before: 35 minutes of prompt tweaking and window reloads • After: 4 minutes to identify YAML syntax error in line 14</div>
</div>

---

# 📚 Official Documentation

<div class="grid grid-cols-1 gap-4">

<div class="p-4 bg-blue-400/10 rounded">
  <div class="font-semibold mb-2">📖 Primary Documentation</div>
  <div class="text-sm space-y-1">
    • <a href="https://code.visualstudio.com/docs/copilot/chat/chat-debug-view" class="text-blue-400">Chat Debug View</a> — Complete guide to request inspection<br/>
    • <a href="https://code.visualstudio.com/docs/copilot/troubleshooting" class="text-blue-400">Troubleshoot AI in VS Code</a> — Comprehensive troubleshooting reference<br/>
    • <a href="https://code.visualstudio.com/docs/copilot/customization/mcp-servers" class="text-blue-400">MCP Servers</a> — Configuring and debugging external tools
  </div>
</div>

<div class="p-4 bg-purple-400/10 rounded">
  <div class="font-semibold mb-2">🔧 Additional Resources</div>
  <div class="text-sm space-y-1">
    • <a href="https://code.visualstudio.com/docs/copilot/customization/custom-instructions" class="text-blue-400">Custom Instructions</a> — Writing and debugging instruction files<br/>
    • <a href="https://code.visualstudio.com/docs/copilot/customization/custom-agents" class="text-blue-400">Copilot Agents</a> — Building and troubleshooting agents<br/>
    • <a href="https://github.com/microsoft/vscode-discussions/discussions/categories/copilot" class="text-blue-400">VS Code Discussions</a> — Community troubleshooting patterns
  </div>
</div>

</div>

---
layout: center
---

# 🎉 You're Ready!

<div class="text-2xl mb-8">

**Make AI interactions transparent and debuggable**

</div>

<div class="grid grid-cols-3 gap-6 text-center">

<div>
  <div class="text-4xl mb-2">🔎</div>
  <div class="font-semibold">Chat Debug View</div>
  <div class="text-sm opacity-70">See every request</div>
</div>

<div>
  <div class="text-4xl mb-2">🧠</div>
  <div class="font-semibold">Thinking Tokens</div>
  <div class="text-sm opacity-70">Understand reasoning</div>
</div>

<div>
  <div class="text-4xl mb-2">⚙️</div>
  <div class="font-semibold">Diagnostics</div>
  <div class="text-sm opacity-70">Validate configs</div>
</div>

</div>

<div class="mt-12 text-center opacity-70">
  <div>Start with <code>Developer: Show Chat Debug View</code> today!</div>
</div>
