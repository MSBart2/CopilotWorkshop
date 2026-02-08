---
theme: default
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Copilot Chat: Context Mastery for AI Collaboration
  CopilotTraining Tech Talk
drawings:
  persist: false
transition: slide-left
title: Copilot Chat - Context Mastery for AI Collaboration
module: tech-talks/copilot-chat
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
    Copilot Chat
  </h1>
  <div class="mt-4 relative z-10">
    <span class="px-6 py-2 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xl font-medium shadow-lg shadow-cyan-500/25">
      Context Mastery for AI Collaboration
    </span>
  </div>
  <div class="mt-8 text-lg opacity-70 relative z-10">
    From generic responses to codebase-specific solutions
  </div>
  <div class="mt-6 w-32 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full relative z-10"></div>
</div>

<div class="abs-br m-6 flex gap-2">
  <span class="text-sm opacity-50">Tech Talk · 45 minutes</span>
</div>

---

# The Question This Talk Answers

<div class="mt-10 flex items-center justify-center">
  <div class="p-8 bg-gradient-to-br from-blue-900/60 to-cyan-900/60 rounded-xl border-2 border-blue-400 max-w-3xl">
    <div class="text-4xl mb-4 text-center">💭</div>
    <div class="text-2xl font-bold text-blue-200 text-center leading-relaxed">
      "How do I get relevant, codebase-specific answers from Copilot instead of generic responses?"
    </div>
  </div>
</div>

<div class="mt-12 text-center">
  <div class="inline-block px-6 py-3 bg-cyan-600/80 rounded-lg">
    <div class="text-lg font-medium text-white">Target: Developers & Engineering Teams</div>
  </div>
</div>

---
layout: center
name: toc
---

# Table of Contents

<div class="mt-8 grid grid-cols-2 gap-6">

<div class="p-5 bg-gradient-to-br from-cyan-900/40 to-cyan-900/20 rounded-xl border border-cyan-500/30 cursor-pointer hover:scale-105 transition-transform" @click="$nav.go($nav.currentPage+1)">
  <div class="text-2xl mb-2">🎯</div>
  <div class="font-bold text-cyan-300">Context Mechanisms</div>
  <div class="text-sm text-gray-400 mt-1">Implicit, #file, @workspace, #codebase, #fetch, images</div>
</div>

<div class="p-5 bg-gradient-to-br from-blue-900/40 to-blue-900/20 rounded-xl border border-blue-500/30 cursor-pointer hover:scale-105 transition-transform" @click="$nav.go($nav.currentPage+7)">
  <div class="text-2xl mb-2">🏗️</div>
  <div class="font-bold text-blue-300">Chat Architecture</div>
  <div class="text-sm text-gray-400 mt-1">Sidebar vs inline, auto model selection, context window</div>
</div>

<div class="p-5 bg-gradient-to-br from-indigo-900/40 to-indigo-900/20 rounded-xl border border-indigo-500/30 cursor-pointer hover:scale-105 transition-transform" @click="$nav.go($nav.currentPage+10)">
  <div class="text-2xl mb-2">✨</div>
  <div class="font-bold text-indigo-300">VS Code 1.109 Enhancements</div>
  <div class="text-sm text-gray-400 mt-1">Thinking tokens, Mermaid diagrams, ask questions, /plan</div>
</div>

<div class="p-5 bg-gradient-to-br from-purple-900/40 to-purple-900/20 rounded-xl border border-purple-500/30 cursor-pointer hover:scale-105 transition-transform" @click="$nav.go($nav.currentPage+13)">
  <div class="text-2xl mb-2">📊</div>
  <div class="font-bold text-purple-300">Context Strategy</div>
  <div class="text-sm text-gray-400 mt-1">Layering, efficiency, conversation management</div>
</div>

</div>

---

# The Problem

<div class="mt-6 space-y-4">

<div class="p-4 bg-red-900/30 rounded-lg border-l-4 border-red-500">
  <div class="font-bold text-red-400">Generic responses from incomplete context</div>
  <div class="text-gray-300 mt-1 text-sm">AI without context answers in a vacuum—textbook syntax examples, not solutions that fit your codebase patterns</div>
</div>

<div class="p-4 bg-orange-900/30 rounded-lg border-l-4 border-orange-500">
  <div class="font-bold text-orange-400">Quality proportional to context</div>
  <div class="text-gray-300 mt-1 text-sm">The difference between "Here's generic SQL" and "Based on your schema in database/schema.sql, here's the migration..."</div>
</div>

<div class="p-4 bg-yellow-900/30 rounded-lg border-l-4 border-yellow-500">
  <div class="font-bold text-yellow-400">Manual context management is cognitive overhead</div>
  <div class="text-gray-300 mt-1 text-sm">Developers shouldn't spend mental energy deciding which files to include for every interaction</div>
</div>

<div class="p-4 bg-blue-900/30 rounded-lg border-l-4 border-blue-500">
  <div class="font-bold text-blue-400">Context window limitations at scale</div>
  <div class="text-gray-300 mt-1 text-sm">Large codebases exceed model token limits—strategic context selection becomes essential as projects grow</div>
</div>

</div>

---

# The Solution: Context Mechanisms

<div class="mt-4">

<div class="p-5 bg-gradient-to-br from-green-900/60 to-blue-900/60 rounded-lg border-2 border-green-400 mb-4">
  <div class="text-xl font-bold text-green-300 mb-3">Multiple Context Mechanisms Working Together</div>
  <div class="text-gray-200 space-y-2 text-sm">
    <div>✅ <b>Implicit Context</b> — Automatic inclusion of active file, selection, visible errors</div>
    <div>✅ <b>Explicit File Context (#file)</b> — Direct file references when you know what AI needs</div>
    <div>✅ <b>Workspace Discovery (@workspace)</b> — Project-wide understanding for architectural questions</div>
    <div>✅ <b>Semantic Search (#codebase)</b> — Intent-based discovery when you don't know which files</div>
    <div>✅ <b>External Documentation (#fetch)</b> — Current, authoritative framework docs</div>
    <div>✅ <b>Visual Context</b> — Drag-and-drop images for UI mockups, error screenshots</div>
  </div>
</div>

<div class="text-sm text-cyan-300 font-medium">Transforms Copilot from "sometimes helpful" to "consistently productive"</div>

</div>

---

# Mental Model Shift

<div class="mt-4">

<div class="grid grid-cols-2 gap-4 text-sm">

<div>
<div class="font-bold text-green-400 mb-3">✅ Move Toward</div>
<div class="space-y-2">
  <div class="p-2 bg-green-900/20 rounded border-l-3 border-green-500"><b>Start Broad, Then Narrow:</b> @workspace → #codebase → #file</div>
  <div class="p-2 bg-green-900/20 rounded border-l-3 border-green-500"><b>Layer Context Strategically:</b> Implicit → Explicit → Semantic search when uncertain</div>
  <div class="p-2 bg-green-900/20 rounded border-l-3 border-green-500"><b>External Documentation as Context:</b> #fetch current API docs vs stale training data</div>
  <div class="p-2 bg-green-900/20 rounded border-l-3 border-green-500"><b>Monitor Context Budget:</b> Watch indicator, start new sessions before limits</div>
</div>
</div>

<div>
<div class="font-bold text-red-400 mb-3">🛑 Move Away From</div>
<div class="space-y-2">
  <div class="p-2 bg-red-900/20 rounded border-l-3 border-red-500"><b>Context Overload:</b> Attaching 10+ files "just in case"</div>
  <div class="p-2 bg-red-900/20 rounded border-l-3 border-red-500"><b>Guessing Which Files:</b> Manually attaching without using #codebase</div>
  <div class="p-2 bg-red-900/20 rounded border-l-3 border-red-500"><b>Generic Questions:</b> "How do I add a field?" without context</div>
  <div class="p-2 bg-red-900/20 rounded border-l-3 border-red-500"><b>Assuming AI Knows Your Codebase:</b> Domain questions without explicit context</div>
</div>
</div>

</div>

</div>

<div class="mt-6 p-4 bg-blue-900/40 rounded-lg border-l-4 border-blue-400">
  <div class="text-sm text-blue-200"><b>Example:</b> Before: "How do I add authentication?" → After: "@workspace What authentication patterns exist? #codebase Where is user validation configured? #fetch https://docs.example.com/auth/latest"</div>
</div>

---
name: context-mechanisms
---

# Core Context Mechanisms

<div class="mt-4 text-sm">

<div class="grid grid-cols-2 gap-4">

<div class="space-y-3">

<div class="p-3 bg-cyan-900/40 rounded-lg border border-cyan-500/30">
  <div class="font-bold text-cyan-300 mb-1">🔷 Implicit Context (Automatic)</div>
  <ul class="text-xs space-y-1 text-gray-300">
    <li>✓ Currently selected text</li>
    <li>✓ Active file name and path</li>
    <li>✓ Active file contents (in inline chat)</li>
    <li>✓ Visible errors and diagnostics</li>
  </ul>
  <div class="text-xs text-cyan-200 mt-2"><b>When:</b> Working on current file with clear selection</div>
</div>

<div class="p-3 bg-blue-900/40 rounded-lg border border-blue-500/30">
  <div class="font-bold text-blue-300 mb-1">📄 #file (Explicit File Reference)</div>
  <div class="text-xs text-gray-300 mb-1"><code class="bg-black/40 px-1 py-0.5 rounded">#file:backend/routes/characters.js</code></div>
  <div class="text-xs text-gray-300">Reference specific files when you know exactly what Copilot needs</div>
  <div class="text-xs text-blue-200 mt-2"><b>When:</b> Know exact file, cross-referencing specific implementations</div>
</div>

<div class="p-3 bg-indigo-900/40 rounded-lg border border-indigo-500/30">
  <div class="font-bold text-indigo-300 mb-1">🌐 @workspace (Project-wide)</div>
  <div class="text-xs text-gray-300 mb-1"><code class="bg-black/40 px-1 py-0.5 rounded">@workspace What is the architecture?</code></div>
  <div class="text-xs text-gray-300">Searches entire codebase for big picture understanding</div>
  <div class="text-xs text-indigo-200 mt-2"><b>When:</b> Onboarding, architectural questions, finding patterns</div>
</div>

</div>

<div class="space-y-3">

<div class="p-3 bg-purple-900/40 rounded-lg border border-purple-500/30">
  <div class="font-bold text-purple-300 mb-1">🔍 #codebase (Semantic Search)</div>
  <div class="text-xs text-gray-300 mb-1"><code class="bg-black/40 px-1 py-0.5 rounded">#codebase Where is authentication configured?</code></div>
  <div class="text-xs text-gray-300">Intent-based discovery when you don't know file names</div>
  <div class="text-xs text-purple-200 mt-2"><b>When:</b> "Where is X?", "Show me all Y patterns"</div>
</div>

<div class="p-3 bg-pink-900/40 rounded-lg border border-pink-500/30">
  <div class="font-bold text-pink-300 mb-1">🌐 #fetch (External Docs)</div>
  <div class="text-xs text-gray-300 mb-1"><code class="bg-black/40 px-1 py-0.5 rounded">#fetch https://react.dev/learn</code></div>
  <div class="text-xs text-gray-300">Reference current, authoritative framework documentation</div>
  <div class="text-xs text-pink-200 mt-2"><b>When:</b> Need latest docs, recent API changes, official guidance</div>
</div>

<div class="p-3 bg-green-900/40 rounded-lg border border-green-500/30">
  <div class="font-bold text-green-300 mb-1">🖼️ Visual Context (Images)</div>
  <div class="text-xs text-gray-300 mb-1">Drag-and-drop images to Chat view</div>
  <div class="text-xs text-gray-300">UI mockups, error screenshots, architecture diagrams</div>
  <div class="text-xs text-green-200 mt-2"><b>When:</b> Implementing designs, debugging visual issues</div>
</div>

</div>

</div>

</div>

---

# Context Decision Guide

<div class="mt-6">

<table class="text-xs">
<thead>
  <tr class="bg-cyan-900/40">
    <th class="p-2 text-left text-cyan-300">When you...</th>
    <th class="p-2 text-left text-cyan-300">Use...</th>
    <th class="p-2 text-left text-cyan-300">Example</th>
  </tr>
</thead>
<tbody class="text-gray-300">
  <tr class="border-b border-gray-700">
    <td class="p-2">Know the exact file</td>
    <td class="p-2"><code class="bg-black/40 px-1 py-0.5 rounded">#file:path/to/file</code></td>
    <td class="p-2"><code class="bg-black/40 px-1 py-0.5 rounded">#file:src/components/Header.jsx What does this do?</code></td>
  </tr>
  <tr class="border-b border-gray-700">
    <td class="p-2">Need project overview</td>
    <td class="p-2"><code class="bg-black/40 px-1 py-0.5 rounded">@workspace</code></td>
    <td class="p-2"><code class="bg-black/40 px-1 py-0.5 rounded">@workspace What's the folder structure?</code></td>
  </tr>
  <tr class="border-b border-gray-700">
    <td class="p-2">Looking for something specific</td>
    <td class="p-2"><code class="bg-black/40 px-1 py-0.5 rounded">#codebase</code></td>
    <td class="p-2"><code class="bg-black/40 px-1 py-0.5 rounded">#codebase Where is error handling configured?</code></td>
  </tr>
  <tr class="border-b border-gray-700">
    <td class="p-2">Need current external docs</td>
    <td class="p-2"><code class="bg-black/40 px-1 py-0.5 rounded">#fetch &lt;URL&gt;</code></td>
    <td class="p-2"><code class="bg-black/40 px-1 py-0.5 rounded">#fetch https://react.dev How to handle state?</code></td>
  </tr>
  <tr class="border-b border-gray-700">
    <td class="p-2">Have UI mockup/error screenshot</td>
    <td class="p-2">Drag image to chat</td>
    <td class="p-2">[image] "Implement this design"</td>
  </tr>
  <tr>
    <td class="p-2">Working on current file</td>
    <td class="p-2">Nothing! (implicit)</td>
    <td class="p-2">File is auto-included in inline chat</td>
  </tr>
</tbody>
</table>

</div>

---
name: chat-architecture
---

# Chat Architecture: Two Modalities

<div class="mt-6 grid grid-cols-2 gap-6">

<div class="p-5 bg-blue-900/60 rounded-lg border-2 border-blue-400">
  <div class="text-3xl mb-3">💬</div>
  <h3 class="text-xl font-bold mb-3 text-blue-300">Sidebar Chat (Chat View)</h3>
  <div class="text-sm space-y-2 text-gray-300">
    <div>✓ <b>Persistent conversation history</b> across sessions</div>
    <div>✓ <b>Multi-turn conversations</b> with context accumulation</div>
    <div>✓ <b>All context mechanisms</b> (#-mentions, @-mentions, images)</div>
    <div class="mt-3 p-2 bg-blue-800/40 rounded text-xs">
      <b>Best for:</b> Exploratory work, planning, complex discussions, learning codebases
    </div>
  </div>
</div>

<div class="p-5 bg-indigo-900/60 rounded-lg border-2 border-indigo-400">
  <div class="text-3xl mb-3">⚡</div>
  <h3 class="text-xl font-bold mb-3 text-indigo-300">Inline Chat (Editor-Integrated)</h3>
  <div class="text-sm space-y-2 text-gray-300">
    <div>✓ <b>Quick, contextual edits</b> directly in editor</div>
    <div>✓ <b>Automatically includes</b> current file and selection</div>
    <div>✓ <b>Lightweight UX</b> for refactoring, docs, quick fixes</div>
    <div class="mt-3 p-2 bg-indigo-800/40 rounded text-xs">
      <b>Best for:</b> Quick edits, adding comments, refactoring single function
    </div>
  </div>
</div>

</div>

<div class="mt-6 p-4 bg-cyan-900/30 rounded-lg border-l-4 border-cyan-400">
  <div class="text-sm text-cyan-200"><b>New in VS Code 1.109:</b> Revamped inline chat rendering (<code>inlineChat.renderMode</code>) for lighter, more contextual editing</div>
</div>

---

# Auto Model Selection & Context Window

<div class="mt-4 space-y-4">

<div class="p-5 bg-gradient-to-r from-purple-900/60 to-blue-900/60 rounded-lg border-2 border-purple-400">
  <div class="text-xl font-bold text-purple-300 mb-3">🤖 Auto Model Selection</div>
  <div class="text-sm text-gray-200 space-y-2">
    <div>Automatically selects the best available model based on:</div>
    <ul class="ml-4 space-y-1">
      <li>✓ Your subscription tier (Free, Pro, Pro+, Enterprise)</li>
      <li>✓ Model availability and current load</li>
      <li>✓ Organizational policies (if applicable)</li>
    </ul>
    <div class="mt-2 p-2 bg-purple-800/40 rounded text-xs">
      <b>Pro+ subscribers:</b> 10% discount on premium requests when using Auto
    </div>
  </div>
</div>

<div class="p-5 bg-gradient-to-r from-cyan-900/60 to-indigo-900/60 rounded-lg border-2 border-cyan-400">
  <div class="text-xl font-bold text-cyan-300 mb-3">📊 Context Window Visibility</div>
  <div class="text-sm text-gray-200 space-y-2">
    <div><b>New in VS Code 1.109:</b> Real-time token usage indicator</div>
    <ul class="ml-4 space-y-1">
      <li>✓ <b>Visual fill bar:</b> Proportion of context window in use</li>
      <li>✓ <b>Hover for breakdown:</b> Token count by category (conversation, files, tools)</li>
      <li>✓ <b>Per-model limits:</b> GPT-4: 128K, Claude Opus: 200K</li>
    </ul>
    <div class="mt-2 p-2 bg-cyan-800/40 rounded text-xs">
      <b>Why it matters:</b> When context fills up, VS Code auto-summarizes. Start new sessions to reset.
    </div>
  </div>
</div>

</div>

---
name: vs-code-1109-enhancements
---

# VS Code 1.109: Anthropic Models with Thinking Tokens

<div class="mt-4">

<div class="p-5 bg-gradient-to-br from-violet-900/60 to-purple-900/60 rounded-lg border-2 border-violet-400 mb-4">
  <div class="text-xl font-bold text-violet-300 mb-3">🧠 Thinking Tokens: See Claude's Reasoning</div>
  <div class="text-sm text-gray-200 space-y-2">
    <div>Claude models now surface thinking tokens for visibility into reasoning process:</div>
    <ul class="ml-4 space-y-1">
      <li>✓ <b>Configurable thinking styles:</b> <code class="bg-black/40 px-1 py-0.5 rounded">chat.thinking.style</code> (detailed or compact)</li>
      <li>✓ <b>Interleaved thinking:</b> See model reasoning between tool calls</li>
      <li>✓ <b>Auto-expand failures:</b> Failing tool calls show more context automatically</li>
      <li>✓ <b>Visual enhancements:</b> Scrollable thinking content, shimmer animations</li>
    </ul>
  </div>
</div>

<div class="grid grid-cols-2 gap-4 text-xs">
  <div class="p-3 bg-green-900/40 rounded border border-green-500/30">
    <div class="font-bold text-green-300 mb-1">Why This Matters</div>
    <div class="text-gray-300">See <i>why</i> Claude made specific decisions during complex tasks—valuable for debugging unexpected agent behavior</div>
  </div>
  <div class="p-3 bg-blue-900/40 rounded border border-blue-500/30">
    <div class="font-bold text-blue-300 mb-1">Use Cases</div>
    <div class="text-gray-300">Understanding agent decisions, debugging tool selection, learning reasoning patterns</div>
  </div>
</div>

</div>

---

# VS Code 1.109: Mermaid Diagrams & Ask Questions

<div class="mt-4 space-y-4">

<div class="p-5 bg-gradient-to-r from-blue-900/60 to-cyan-900/60 rounded-lg border-2 border-blue-400">
  <div class="text-xl font-bold text-blue-300 mb-3">📊 Mermaid Diagrams in Chat</div>
  <div class="text-sm text-gray-200 space-y-2">
    <div>Chat responses can render interactive diagrams with <code class="bg-black/40 px-1 py-0.5 rounded">renderMermaidDiagram</code> tool:</div>
    <ul class="ml-4 space-y-1">
      <li>✓ <b>Pan and zoom:</b> Alt/Option + mouse wheel</li>
      <li>✓ <b>Click to zoom:</b> Alt/Option + click (add Shift to zoom out)</li>
      <li>✓ <b>Open in editor:</b> Full-sized view for larger diagrams</li>
      <li>✓ <b>Copy source:</b> Right-click to copy Mermaid source code</li>
    </ul>
    <div class="mt-2 text-xs text-blue-200"><b>Use cases:</b> Flowcharts, sequence diagrams, architecture visualizations</div>
  </div>
</div>

<div class="p-5 bg-gradient-to-r from-green-900/60 to-teal-900/60 rounded-lg border-2 border-green-400">
  <div class="text-xl font-bold text-green-300 mb-3">❓ Ask Questions Tool (Experimental)</div>
  <div class="text-sm text-gray-200 space-y-2">
    <div>Agent can ask clarifying questions with interactive UI:</div>
    <ul class="ml-4 space-y-1">
      <li>✓ <b>Interactive prompts:</b> Single/multi-select, free text input</li>
      <li>✓ <b>Keyboard navigation:</b> Up/Down arrows, number keys</li>
      <li>✓ <b>Catches ambiguity early:</b> Prevents misunderstandings before code generation</li>
    </ul>
    <div class="mt-2 text-xs text-green-200"><b>Enable:</b> <code class="bg-black/40 px-1 py-0.5 rounded">chat.askQuestions.enabled</code></div>
  </div>
</div>

</div>

---

# VS Code 1.109: Plan Agent & Terminal Improvements

<div class="mt-4 space-y-4">

<div class="p-5 bg-gradient-to-r from-indigo-900/60 to-purple-900/60 rounded-lg border-2 border-indigo-400">
  <div class="text-xl font-bold text-indigo-300 mb-3">🗺️ Plan Agent Enhancements</div>
  <div class="text-sm text-gray-200">
    <div class="mb-2">Built-in Plan agent now follows structured 4-phase workflow:</div>
    <div class="grid grid-cols-4 gap-2 text-xs">
      <div class="p-2 bg-indigo-800/40 rounded">
        <div class="font-bold text-indigo-200">1. Discovery</div>
        <div class="text-gray-300 mt-1">Explore codebase, find files</div>
      </div>
      <div class="p-2 bg-indigo-800/40 rounded">
        <div class="font-bold text-indigo-200">2. Alignment</div>
        <div class="text-gray-300 mt-1">Ask clarifying questions</div>
      </div>
      <div class="p-2 bg-indigo-800/40 rounded">
        <div class="font-bold text-indigo-200">3. Design</div>
        <div class="text-gray-300 mt-1">Draft implementation plan</div>
      </div>
      <div class="p-2 bg-indigo-800/40 rounded">
        <div class="font-bold text-indigo-200">4. Refinement</div>
        <div class="text-gray-300 mt-1">Add verification criteria</div>
      </div>
    </div>
    <div class="mt-2 text-xs text-indigo-200"><b>Quick access:</b> Use <code class="bg-black/40 px-1 py-0.5 rounded">/plan</code> command in chat to invoke directly</div>
  </div>
</div>

<div class="p-5 bg-gradient-to-r from-orange-900/60 to-red-900/60 rounded-lg border-2 border-orange-400">
  <div class="text-xl font-bold text-orange-300 mb-3">💻 Terminal Command Improvements</div>
  <div class="text-sm text-gray-200">
    <ul class="space-y-1">
      <li>✓ <b>Syntax highlighting</b> for inline Node, Python, Ruby</li>
      <li>✓ <b>Working directory</b> shown in title</li>
      <li>✓ <b>Command intent description</b> on hover</li>
      <li>✓ <b>Output streaming:</b> Auto-expands for long-running commands</li>
      <li>✓ <b>Interactive input:</b> Embedded terminals are fully interactive</li>
    </ul>
    <div class="mt-2 text-xs text-orange-200"><b>Why it matters:</b> Builds trust, understand <i>what</i> agents run and <i>why</i></div>
  </div>
</div>

</div>

---
name: context-strategy
---

# Best Practices: Context Layering Strategy

<div class="mt-4">

<div class="p-5 bg-gradient-to-br from-cyan-900/60 to-blue-900/60 rounded-lg border-2 border-cyan-400 mb-4">
  <div class="text-xl font-bold text-cyan-300 mb-3">📐 Start Broad, Then Narrow</div>
  <div class="text-sm text-gray-200">
    <div class="space-y-3">
      <div class="flex items-start gap-3">
        <div class="text-2xl">1️⃣</div>
        <div>
          <div class="font-bold text-cyan-200">@workspace</div>
          <div class="text-xs text-gray-300">Understand overall structure first</div>
          <code class="text-xs bg-black/40 px-1 py-0.5 rounded">@workspace What's the authentication architecture?</code>
        </div>
      </div>
      <div class="flex items-start gap-3">
        <div class="text-2xl">2️⃣</div>
        <div>
          <div class="font-bold text-blue-200">#codebase</div>
          <div class="text-xs text-gray-300">Identify relevant areas with semantic search</div>
          <code class="text-xs bg-black/40 px-1 py-0.5 rounded">#codebase Show me JWT token validation logic</code>
        </div>
      </div>
      <div class="flex items-start gap-3">
        <div class="text-2xl">3️⃣</div>
        <div>
          <div class="font-bold text-indigo-200">#file</div>
          <div class="text-xs text-gray-300">Focus with specific file references for targeted work</div>
          <code class="text-xs bg-black/40 px-1 py-0.5 rounded">#file:auth/jwt-validator.ts How do I add expiration checking?</code>
        </div>
      </div>
      <div class="flex items-start gap-3">
        <div class="text-2xl">4️⃣</div>
        <div>
          <div class="font-bold text-purple-200">#fetch</div>
          <div class="text-xs text-gray-300">Add external docs for current best practices</div>
          <code class="text-xs bg-black/40 px-1 py-0.5 rounded">#fetch https://jwt.io/introduction</code>
        </div>
      </div>
    </div>
  </div>
</div>

</div>

---

# Context Efficiency & Conversation Management

<div class="mt-4 space-y-4">

<div class="p-5 bg-gradient-to-r from-red-900/60 to-orange-900/60 rounded-lg border-2 border-red-400">
  <div class="text-xl font-bold text-red-300 mb-3">⚠️ Avoid Context Overload</div>
  <div class="text-sm text-gray-200">
    <ul class="space-y-1">
      <li>❌ Don't include every file "just in case"—be strategic and targeted</li>
      <li>❌ Let Copilot discover with @workspace or #codebase before manually attaching</li>
      <li>✓ Use the context window indicator to monitor usage</li>
      <li>✓ Start a new session when approaching token limits</li>
    </ul>
  </div>
</div>

<div class="grid grid-cols-2 gap-4">

<div class="p-4 bg-green-900/40 rounded-lg border border-green-500/30">
  <div class="font-bold text-green-300 mb-2">✅ Leverage Persistent Context</div>
  <div class="text-xs text-gray-300 space-y-1">
    <li>Instructions files (<code>.github/copilot-instructions.md</code>) auto-loaded</li>
    <li>Agent definitions provide domain-specific context</li>
    <li>Skills package reusable expertise</li>
  </div>
</div>

<div class="p-4 bg-blue-900/40 rounded-lg border border-blue-500/30">
  <div class="font-bold text-blue-300 mb-2">🔄 Conversation Management</div>
  <div class="text-xs text-gray-300 space-y-1">
    <li>Context accumulates within a session</li>
    <li>Start new sessions for unrelated topics</li>
    <li>Use <code>/compact</code> to compress history (experimental)</li>
    <li><b>New in 1.109:</b> Local, background, cloud agent sessions</li>
  </div>
</div>

</div>

</div>

---

# Real-World Use Case: Onboarding to New Codebase

<div class="mt-4">

<div class="grid grid-cols-2 gap-4">

<div>
  <div class="p-4 bg-red-900/40 rounded-lg border-l-4 border-red-500 mb-3">
    <div class="font-bold text-red-300 mb-1">The Problem</div>
    <div class="text-xs text-gray-300">New developer joins team, needs to understand 50K-line React app with unfamiliar state management. Manual code reading takes weeks.</div>
  </div>
  
  <div class="p-4 bg-green-900/40 rounded-lg border-l-4 border-green-500">
    <div class="font-bold text-green-300 mb-1">The Outcome</div>
    <div class="text-xs text-gray-300">
      <b>New developer productive in 2 days instead of 2 weeks</b><br/>
      Understands architecture, patterns, can start contributing to similar features
    </div>
  </div>
</div>

<div class="p-4 bg-blue-900/40 rounded-lg border border-blue-500/30">
  <div class="font-bold text-blue-300 mb-2">The Solution: Progressive Context Discovery</div>
  <div class="text-xs text-gray-300 space-y-2">
    <div class="p-2 bg-black/30 rounded">
      <code class="text-cyan-300">1. @workspace What is the overall architecture?</code>
      <div class="text-gray-400 mt-1">→ React + Redux Toolkit, API in services/, components in features/</div>
    </div>
    <div class="p-2 bg-black/30 rounded">
      <code class="text-cyan-300">2. #codebase How is global state managed?</code>
      <div class="text-gray-400 mt-1">→ Finds: store/configureStore.ts, 8 slice files</div>
    </div>
    <div class="p-2 bg-black/30 rounded">
      <code class="text-cyan-300">3. #file:store/configureStore.ts Explain this</code>
      <div class="text-gray-400 mt-1">→ Detailed walkthrough of middleware, dev tools, persistence</div>
    </div>
    <div class="p-2 bg-black/30 rounded">
      <code class="text-cyan-300">4. #codebase Show example feature using this pattern</code>
      <div class="text-gray-400 mt-1">→ Points to features/user-profile/ as reference</div>
    </div>
  </div>
</div>

</div>

</div>

---

# Real-World Use Case: Implementing OAuth Provider

<div class="mt-4">

<div class="grid grid-cols-2 gap-4">

<div>
  <div class="p-4 bg-red-900/40 rounded-lg border-l-4 border-red-500 mb-3">
    <div class="font-bold text-red-300 mb-1">The Problem</div>
    <div class="text-xs text-gray-300">Add Microsoft OAuth to existing auth system. Has Google and GitHub OAuth, but no docs on adding new providers.</div>
  </div>
  
  <div class="p-4 bg-green-900/40 rounded-lg border-l-4 border-green-500">
    <div class="font-bold text-green-300 mb-1">The Outcome</div>
    <div class="text-xs text-gray-300">
      <b>Implementation in 2 hours instead of 8 hours</b><br/>
      Code follows existing patterns, includes token refresh edge cases, uses current Microsoft API (not outdated training data)
    </div>
  </div>
</div>

<div class="p-4 bg-blue-900/40 rounded-lg border border-blue-500/30">
  <div class="font-bold text-blue-300 mb-2">The Solution: Pattern Discovery + Current Docs</div>
  <div class="text-xs text-gray-300 space-y-2">
    <div class="p-2 bg-black/30 rounded">
      <code class="text-purple-300">1. #codebase Show me existing OAuth implementations</code>
      <div class="text-gray-400 mt-1">→ Finds: auth/providers/google-oauth.ts, github-oauth.ts</div>
    </div>
    <div class="p-2 bg-black/30 rounded">
      <code class="text-purple-300">2. #file:google-oauth.ts #file:github-oauth.ts<br/>What pattern do these follow?</code>
      <div class="text-gray-400 mt-1">→ Explains interface, token refresh, multi-tenant config</div>
    </div>
    <div class="p-2 bg-black/30 rounded">
      <code class="text-purple-300">3. #fetch https://learn.microsoft.com/.../oauth2-auth-code-flow<br/>How do I adapt this for Microsoft OAuth?</code>
      <div class="text-gray-400 mt-1">→ Generates provider following existing patterns with current MS API</div>
    </div>
  </div>
</div>

</div>

</div>

---

# Real-World Use Case: Debugging Production Error

<div class="mt-4">

<div class="grid grid-cols-2 gap-4">

<div>
  <div class="p-4 bg-red-900/40 rounded-lg border-l-4 border-red-500 mb-3">
    <div class="font-bold text-red-300 mb-1">The Problem</div>
    <div class="text-xs text-gray-300">Production error: "Cannot read property 'id' of undefined" in checkout flow. Codebase has 200+ files—finding root cause manually would take hours.</div>
  </div>
  
  <div class="p-4 bg-green-900/40 rounded-lg border-l-4 border-green-500">
    <div class="font-bold text-green-300 mb-1">The Outcome</div>
    <div class="text-xs text-gray-300">
      <b>Bug found in 15 minutes, fix deployed within the hour</b><br/>
      Visual error context + semantic search + targeted file analysis prevented hours of manual debugging
    </div>
  </div>
</div>

<div class="p-4 bg-blue-900/40 rounded-lg border border-blue-500/30">
  <div class="font-bold text-blue-300 mb-2">The Solution: Visual + Semantic Search + File Context</div>
  <div class="text-xs text-gray-300 space-y-2">
    <div class="p-2 bg-black/30 rounded">
      <code class="text-pink-300">1. [Drag screenshot of error stack trace to Chat]</code>
    </div>
    <div class="p-2 bg-black/30 rounded">
      <code class="text-pink-300">2. #codebase Find the checkout flow code</code>
      <div class="text-gray-400 mt-1">→ Identifies: checkout/cart-checkout.ts, payment/process-payment.ts</div>
    </div>
    <div class="p-2 bg-black/30 rounded">
      <code class="text-pink-300">3. #file:checkout/cart-checkout.ts #file:payment/process-payment.ts<br/>Based on this error, what's causing undefined 'id'?</code>
      <div class="text-gray-400 mt-1">→ Identifies: Payment object missing user.id when guest checkout<br/>→ Suggests: Add null check before accessing user.id property</div>
    </div>
  </div>
</div>

</div>

</div>

---

# What You Can Do Today

<div class="mt-4">

<div class="grid grid-cols-3 gap-4 text-xs">

<div class="p-4 bg-green-900/40 rounded-lg border border-green-500/30">
  <div class="font-bold text-green-300 mb-2">⚡ Immediate (15 minutes)</div>
  <ul class="space-y-1 text-gray-300">
    <li>☐ Try each context mechanism: <code>#file</code>, <code>@workspace</code>, <code>#codebase</code>, <code>#fetch</code></li>
    <li>☐ Enable experimental features: <code>chat.askQuestions.enabled</code></li>
    <li>☐ Watch context window indicator as you add files</li>
  </ul>
</div>

<div class="p-4 bg-blue-900/40 rounded-lg border border-blue-500/30">
  <div class="font-bold text-blue-300 mb-2">🛠️ Short-Term (1 hour)</div>
  <ul class="space-y-1 text-gray-300">
    <li>☐ Set up <code>.github/copilot-instructions.md</code> for persistent project context</li>
    <li>☐ Experiment with <code>/plan</code> command for feature planning</li>
    <li>☐ Try dragging image (UI mockup or error) to chat</li>
  </ul>
</div>

<div class="p-4 bg-purple-900/40 rounded-lg border border-purple-500/30">
  <div class="font-bold text-purple-300 mb-2">🚀 Advanced (2-4 hours)</div>
  <ul class="space-y-1 text-gray-300">
    <li>☐ Create custom agents building on context mastery</li>
    <li>☐ Set up organization-wide instructions (Enterprise)</li>
    <li>☐ Layer customizations: Instructions → Prompts → Agents → Skills</li>
  </ul>
</div>

</div>

<div class="mt-6 p-4 bg-cyan-900/40 rounded-lg border-l-4 border-cyan-400">
  <div class="font-bold text-cyan-300 mb-1">Next Steps After Completion</div>
  <div class="text-xs text-gray-300">
    1. Master context mechanisms through daily use (1-2 weeks) →
    2. Learn troubleshooting: <b>Copilot Chat Internals</b> →
    3. Build domain agents: <b>Custom Agents Workshop</b> →
    4. Track efficiency: Time to answer vs. accuracy
  </div>
</div>

</div>

---

# Related Patterns & Documentation

<div class="mt-4">

<div class="grid grid-cols-2 gap-4 text-xs">

<div class="p-4 bg-blue-900/40 rounded-lg border border-blue-500/30">
  <div class="font-bold text-blue-300 mb-2">🔗 Complementary Features</div>
  <ul class="space-y-1 text-gray-300">
    <li><b>Copilot Chat Internals</b> — Debug View, troubleshooting failed prompts</li>
    <li><b>Custom Agents</b> — Building specialized agents leveraging context</li>
    <li><b>Custom Instructions</b> — Persistent context for every chat session</li>
    <li><b>Context Engineering Foundations</b> — Deep dive into prompt optimization</li>
  </ul>
</div>

<div class="p-4 bg-green-900/40 rounded-lg border border-green-500/30">
  <div class="font-bold text-green-300 mb-2">📚 Official Documentation</div>
  <ul class="space-y-1 text-gray-300">
    <li><b>Manage Context for AI</b><br/><code class="text-cyan-300">code.visualstudio.com/docs/copilot/chat/copilot-chat-context</code></li>
    <li><b>Copilot Chat in VS Code</b><br/><code class="text-cyan-300">code.visualstudio.com/docs/copilot/copilot-chat</code></li>
    <li><b>Chat Tools Reference</b><br/><code class="text-cyan-300">code.visualstudio.com/docs/copilot/reference/copilot-vscode-features</code></li>
  </ul>
</div>

</div>

<div class="mt-4 p-4 bg-purple-900/40 rounded-lg border-l-4 border-purple-400">
  <div class="font-bold text-purple-300 mb-2">📖 Behind the Scenes: How It Works</div>
  <div class="text-gray-300 grid grid-cols-2 gap-4">
    <div>
      <b>Context Window Management:</b> System prioritizes tokens (system prompt → user → files → history), auto-summarizes on overflow
    </div>
    <div>
      <b>Workspace Indexing:</b> GitHub repos (instant), local workspaces (30s first time), large workspaces (2-5s basic)
    </div>
  </div>
</div>

</div>

---
layout: center
class: text-center
---

# 🎉 You Now Understand Context Mastery

<div class="mt-8 space-y-6">

<div class="text-2xl font-bold text-cyan-300">
From generic responses to codebase-specific solutions
</div>

<div class="flex justify-center gap-6 text-sm">
  <div class="p-4 bg-cyan-900/40 rounded-lg border border-cyan-500/30">
    <div class="text-3xl mb-2">🎯</div>
    <div class="font-bold text-cyan-300">Context Mechanisms</div>
    <div class="text-gray-400 text-xs">6 tools for precise context control</div>
  </div>
  <div class="p-4 bg-blue-900/40 rounded-lg border border-blue-500/30">
    <div class="text-3xl mb-2">🏗️</div>
    <div class="font-bold text-blue-300">Chat Architecture</div>
    <div class="text-gray-400 text-xs">Sidebar + inline modalities</div>
  </div>
  <div class="p-4 bg-indigo-900/40 rounded-lg border border-indigo-500/30">
    <div class="text-3xl mb-2">✨</div>
    <div class="font-bold text-indigo-300">VS Code 1.109</div>
    <div class="text-gray-400 text-xs">Thinking tokens, diagrams, /plan</div>
  </div>
  <div class="p-4 bg-purple-900/40 rounded-lg border border-purple-500/30">
    <div class="text-3xl mb-2">📊</div>
    <div class="font-bold text-purple-300">Strategy Patterns</div>
    <div class="text-gray-400 text-xs">Layering, efficiency, management</div>
  </div>
</div>

<div class="mt-8 text-gray-400">
  Start applying these patterns in your next chat session
</div>

<div class="mt-6 w-32 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full mx-auto"></div>

</div>
