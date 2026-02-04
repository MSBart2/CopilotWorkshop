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
title: Copilot Chat - Context Mastery
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
    Copilot Chat
  </h1>

  <!-- Pill subtitle -->
  <div class="mt-4 relative z-10">
    <span class="px-6 py-2 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xl font-medium shadow-lg shadow-cyan-500/25">
      Context Mastery for AI Collaboration
    </span>
  </div>

  <!-- Tagline -->
  <div class="mt-8 text-lg opacity-70 relative z-10">
    The foundation of effective AI-assisted development
  </div>

  <!-- Decorative line -->
  <div class="mt-6 w-32 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full relative z-10"></div>
</div>

<div class="abs-br m-6 flex gap-2">
  <span class="text-sm opacity-50">CopilotTraining Tech Talk</span>
</div>

---

# The Context Problem

<div class="grid grid-cols-2 gap-8 mt-8">

<div class="p-6 bg-red-900/40 rounded-lg border-2 border-red-500">
<div class="text-3xl mb-4">❌</div>
<h3 class="text-xl font-bold mb-3 text-red-400">Without Context</h3>
<ul class="text-sm space-y-2">
<li>Generic textbook answers</li>
<li>Syntax examples in a vacuum</li>
<li>"Here's generic SQL" instead of your schema</li>
<li>Manual context management overhead</li>
</ul>
</div>

<div class="p-6 bg-green-900/40 rounded-lg border-2 border-green-500">
<div class="text-3xl mb-4">✅</div>
<h3 class="text-xl font-bold mb-3 text-green-400">With Context</h3>
<ul class="text-sm space-y-2">
<li>Codebase-specific solutions</li>
<li>Matches your patterns and architecture</li>
<li>"Based on your schema in database/schema.sql..."</li>
<li>Strategic, automatic context selection</li>
</ul>
</div>

</div>

<div class="mt-8 p-5 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-lg text-center">
<div class="text-xl font-bold text-white">AI quality is directly proportional to context quality</div>
</div>

---

# Two Chat Modalities

<div class="grid grid-cols-2 gap-8 mt-8">

<div class="p-6 bg-blue-900/60 rounded-lg border-2 border-blue-400">
<div class="text-3xl mb-3">💬</div>
<h3 class="text-xl font-bold mb-3 text-blue-300">Sidebar Chat</h3>
<div class="text-sm space-y-2">
<div class="flex items-center gap-2">
<span class="text-green-400">✓</span>
<span>Persistent conversation history</span>
</div>
<div class="flex items-center gap-2">
<span class="text-green-400">✓</span>
<span>Multi-turn context accumulation</span>
</div>
<div class="flex items-center gap-2">
<span class="text-green-400">✓</span>
<span>All context mechanisms (#, @, images)</span>
</div>
<div class="flex items-center gap-2">
<span class="text-green-400">✓</span>
<span>Complex discussions and planning</span>
</div>
</div>
</div>

<div class="p-6 bg-purple-900/60 rounded-lg border-2 border-purple-400">
<div class="text-3xl mb-3">⚡</div>
<h3 class="text-xl font-bold mb-3 text-purple-300">Inline Chat</h3>
<div class="text-sm space-y-2">
<div class="flex items-center gap-2">
<span class="text-green-400">✓</span>
<span>Quick contextual edits</span>
</div>
<div class="flex items-center gap-2">
<span class="text-green-400">✓</span>
<span>Auto-includes current file/selection</span>
</div>
<div class="flex items-center gap-2">
<span class="text-green-400">✓</span>
<span>Lightweight refactoring</span>
</div>
<div class="flex items-center gap-2">
<span class="text-green-400">✓</span>
<span>New in VS Code 1.109: Revamped UX</span>
</div>
</div>
</div>

</div>

<div class="mt-6 text-center text-sm text-gray-400 italic">
Choose based on task: exploration vs. quick edits
</div>

---

# Core Context Mechanisms

<div class="grid grid-cols-2 gap-4 text-sm mt-6">

<div class="p-4 bg-gray-800 rounded-lg">
<div class="flex items-center gap-2 mb-2">
<span class="text-2xl">✨</span>
<div>
<div class="text-white font-bold">Implicit Context (Auto)</div>
<div class="text-gray-400">Current file, selection, errors</div>
</div>
</div>
</div>

<div class="p-4 bg-gray-800 rounded-lg">
<div class="flex items-center gap-2 mb-2">
<span class="text-2xl">📄</span>
<div>
<div class="text-white font-bold">#file</div>
<div class="text-gray-400">Specific files you know about</div>
</div>
</div>
</div>

<div class="p-4 bg-gray-800 rounded-lg">
<div class="flex items-center gap-2 mb-2">
<span class="text-2xl">🌍</span>
<div>
<div class="text-white font-bold">@workspace</div>
<div class="text-gray-400">Project-wide understanding</div>
</div>
</div>
</div>

<div class="p-4 bg-gray-800 rounded-lg">
<div class="flex items-center gap-2 mb-2">
<span class="text-2xl">🔍</span>
<div>
<div class="text-white font-bold">#codebase</div>
<div class="text-gray-400">Semantic search across files</div>
</div>
</div>
</div>

<div class="p-4 bg-gray-800 rounded-lg">
<div class="flex items-center gap-2 mb-2">
<span class="text-2xl">🌐</span>
<div>
<div class="text-white font-bold">#fetch</div>
<div class="text-gray-400">External documentation</div>
</div>
</div>
</div>

<div class="p-4 bg-gray-800 rounded-lg">
<div class="flex items-center gap-2 mb-2">
<span class="text-2xl">🖼️</span>
<div>
<div class="text-white font-bold">Images</div>
<div class="text-gray-400">Drag mockups, screenshots, diagrams</div>
</div>
</div>
</div>

</div>

<div class="mt-6 p-4 bg-blue-900/40 rounded-lg text-center text-sm">
<span class="text-blue-300 font-bold">Master these six mechanisms to unlock codebase-specific AI responses</span>
</div>

---

# Context Decision Guide

| When you... | Use... | Example |
|-------------|--------|---------|
| Know the exact file | `#file:path/to/file` | `#file:src/components/Header.jsx` |
| Need project overview | `@workspace` | `@workspace What's the folder structure?` |
| Looking for something | `#codebase` | `#codebase Where is error handling?` |
| Need current docs | `#fetch <URL>` | `#fetch https://react.dev` |
| Have UI mockup/error | Drag image | [image] "Implement this design" |
| Working on current file | Nothing! (implicit) | File auto-included |

<div class="mt-6 p-4 bg-gradient-to-r from-green-600 to-green-800 rounded-lg text-center">
<div class="text-white font-bold">Start broad (@workspace), narrow down (#codebase), focus (#file)</div>
</div>

---

# Example: #file

<div class="mt-6">

<div class="p-4 bg-red-900/40 rounded-lg mb-4">
<div class="text-sm text-red-400 font-bold mb-2">❌ Without Context</div>
<div class="text-sm text-gray-300">"What database tables exist in this project?"</div>
<div class="text-xs text-gray-500 mt-2 italic">→ Generic SQL theory</div>
</div>

<div class="p-4 bg-green-900/40 rounded-lg">
<div class="text-sm text-green-400 font-bold mb-2">✅ With #file</div>
<div class="text-sm text-gray-300">"What database tables exist? <span class="text-blue-300">#file:backend/database/schema.sql</span>"</div>
<div class="text-xs text-gray-500 mt-2 italic">→ Shows your exact schema structure</div>
</div>

</div>

<div class="mt-8 p-4 bg-gray-800 rounded-lg">
<div class="text-sm font-bold text-white mb-2">Multiple Files:</div>
<div class="text-xs text-gray-300">
"How do character routes connect to the database?<br/>
<span class="text-blue-300">#file:backend/routes/characters.js</span><br/>
<span class="text-blue-300">#file:backend/database/connection.js</span>"
</div>
</div>

<div class="mt-4 text-center text-sm text-gray-400 italic">
Use when you know exactly which file contains the information
</div>

---

# Example: @workspace

<div class="mt-6 p-5 bg-blue-900/60 rounded-lg border-l-4 border-blue-400">
<div class="text-sm font-bold text-blue-300 mb-3">Project-Wide Understanding</div>
<div class="text-sm text-gray-300">
"<span class="text-blue-300">@workspace</span> What is the overall architecture of this application? What technologies are used?"
</div>
</div>

<div class="mt-6">
<h3 class="text-lg font-bold mb-3">What @workspace Does:</h3>
<div class="grid grid-cols-2 gap-3 text-sm">
<div class="p-3 bg-gray-800 rounded-lg flex items-center gap-2">
<span class="text-green-400">✓</span>
<span>Searches entire codebase</span>
</div>
<div class="p-3 bg-gray-800 rounded-lg flex items-center gap-2">
<span class="text-green-400">✓</span>
<span>Finds relevant files automatically</span>
</div>
<div class="p-3 bg-gray-800 rounded-lg flex items-center gap-2">
<span class="text-green-400">✓</span>
<span>Project-specific responses</span>
</div>
<div class="p-3 bg-gray-800 rounded-lg flex items-center gap-2">
<span class="text-green-400">✓</span>
<span>Great for newcomers</span>
</div>
</div>
</div>

<div class="mt-6 text-center text-sm text-gray-400 italic">
Use when you're new to a codebase or need the big picture
</div>

---

# Example: #codebase

<div class="mt-6 p-5 bg-purple-900/60 rounded-lg border-l-4 border-purple-400">
<div class="text-sm font-bold text-purple-300 mb-3">Semantic Search</div>
<div class="text-sm text-gray-300 space-y-2">
<div>"<span class="text-purple-300">#codebase</span> Where is authentication configured?"</div>
<div>"<span class="text-purple-300">#codebase</span> Show me all API routes related to characters"</div>
</div>
</div>

<div class="mt-6 grid grid-cols-3 gap-4 text-xs">
<div class="p-3 bg-gray-800 rounded-lg text-center">
<div class="text-2xl mb-2">🔍</div>
<div class="text-white font-bold">Searches by Meaning</div>
<div class="text-gray-400">Not just keywords</div>
</div>
<div class="p-3 bg-gray-800 rounded-lg text-center">
<div class="text-2xl mb-2">🎯</div>
<div class="text-white font-bold">Finds Without Names</div>
<div class="text-gray-400">Don't need exact file paths</div>
</div>
<div class="p-3 bg-gray-800 rounded-lg text-center">
<div class="text-2xl mb-2">⚡</div>
<div class="text-white font-bold">More Targeted</div>
<div class="text-gray-400">Than @workspace</div>
</div>
</div>

<div class="mt-6 p-3 bg-gradient-to-r from-purple-600 to-purple-800 rounded-lg text-center text-sm">
<div class="text-white font-bold">New in VS Code 1.109: External indexing for non-GitHub workspaces</div>
</div>

---

# Example: #fetch

<div class="mt-6 p-5 bg-green-900/60 rounded-lg border-l-4 border-green-400">
<div class="text-sm font-bold text-green-300 mb-3">External Documentation</div>
<div class="text-sm text-gray-300 space-y-2">
<div>"How should I structure React components?<br/><span class="text-green-300">#fetch https://react.dev/learn/thinking-in-react</span>"</div>
<div class="mt-3">"Latest Express.js error handling best practices?<br/><span class="text-green-300">#fetch https://expressjs.com/en/guide/error-handling.html</span>"</div>
</div>
</div>

<div class="mt-6">
<h3 class="text-lg font-bold mb-3">When to Use #fetch:</h3>
<div class="grid grid-cols-3 gap-3 text-xs">
<div class="p-3 bg-gray-800 rounded-lg">
<div class="text-white font-bold mb-1">📚 Current Docs</div>
<div class="text-gray-400">Framework updates</div>
</div>
<div class="p-3 bg-gray-800 rounded-lg">
<div class="text-white font-bold mb-1">🔄 Changed APIs</div>
<div class="text-gray-400">Recent changes</div>
</div>
<div class="p-3 bg-gray-800 rounded-lg">
<div class="text-white font-bold mb-1">✅ Official Guidance</div>
<div class="text-gray-400">Align with standards</div>
</div>
</div>
</div>

<div class="mt-4 text-center text-sm text-gray-400 italic">
Brings authoritative external sources into the conversation
</div>

---

# VS Code 1.109 Enhancements

<div class="grid grid-cols-2 gap-4 text-xs mt-6">

<div class="p-3 bg-gray-800 rounded-lg">
<div class="flex items-center gap-2 mb-2">
<span class="text-2xl">🧠</span>
<div>
<div class="text-white font-bold">Thinking Tokens</div>
<div class="text-gray-400">See Claude model reasoning</div>
</div>
</div>
</div>

<div class="p-3 bg-gray-800 rounded-lg">
<div class="flex items-center gap-2 mb-2">
<span class="text-2xl">📊</span>
<div>
<div class="text-white font-bold">Context Window Indicator</div>
<div class="text-gray-400">Monitor token usage</div>
</div>
</div>
</div>

<div class="p-3 bg-gray-800 rounded-lg">
<div class="flex items-center gap-2 mb-2">
<span class="text-2xl">❓</span>
<div>
<div class="text-white font-bold">Ask Questions Tool</div>
<div class="text-gray-400">AI asks clarifying questions</div>
</div>
</div>
</div>

<div class="p-3 bg-gray-800 rounded-lg">
<div class="flex items-center gap-2 mb-2">
<span class="text-2xl">📈</span>
<div>
<div class="text-white font-bold">Mermaid Diagrams</div>
<div class="text-gray-400">Interactive visual responses</div>
</div>
</div>
</div>

<div class="p-3 bg-gray-800 rounded-lg">
<div class="flex items-center gap-2 mb-2">
<span class="text-2xl">🎯</span>
<div>
<div class="text-white font-bold">Plan Agent 4-Phase</div>
<div class="text-gray-400">Discovery → Alignment → Design → Refinement</div>
</div>
</div>
</div>

<div class="p-3 bg-gray-800 rounded-lg">
<div class="flex items-center gap-2 mb-2">
<span class="text-2xl">⚡</span>
<div>
<div class="text-white font-bold">Inline Chat Revamp</div>
<div class="text-gray-400">Lighter, contextual editing</div>
</div>
</div>
</div>

</div>

<div class="mt-6 p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-center">
<div class="text-white font-bold">January 2026 release makes context mastery easier than ever</div>
</div>

---

# Context Layering Strategy

<div class="flex flex-col items-center gap-4 mt-8">

<div class="p-4 bg-blue-100 dark:bg-blue-900/60 rounded-lg w-full text-center border-2 border-blue-400">
<div class="text-xl font-bold text-blue-300">1. Start Broad: @workspace</div>
<div class="text-sm text-gray-400 mt-1">Understand overall structure</div>
</div>

<div class="text-3xl text-gray-400">↓</div>

<div class="p-4 bg-purple-100 dark:bg-purple-900/60 rounded-lg w-full text-center border-2 border-purple-400">
<div class="text-xl font-bold text-purple-300">2. Identify Areas: #codebase</div>
<div class="text-sm text-gray-400 mt-1">Find relevant files semantically</div>
</div>

<div class="text-3xl text-gray-400">↓</div>

<div class="p-4 bg-green-100 dark:bg-green-900/60 rounded-lg w-full text-center border-2 border-green-400">
<div class="text-xl font-bold text-green-300">3. Focus: #file</div>
<div class="text-sm text-gray-400 mt-1">Target specific implementations</div>
</div>

<div class="text-3xl text-gray-400">↓</div>

<div class="p-4 bg-yellow-100 dark:bg-yellow-900/60 rounded-lg w-full text-center border-2 border-yellow-400">
<div class="text-xl font-bold text-yellow-300">4. Add Docs: #fetch</div>
<div class="text-sm text-gray-400 mt-1">Bring in external standards</div>
</div>

</div>

---

# Before vs. After Metrics

<div class="grid grid-cols-2 gap-6 mt-8">

<div class="p-4 bg-red-900/40 rounded-lg border-2 border-red-500">
<div class="text-2xl mb-3 text-center">❌</div>
<h3 class="text-lg font-bold mb-3 text-red-400 text-center">Before Mastery</h3>
<div class="text-sm space-y-2">
<div>• 5-8 attempts for useful response</div>
<div>• Generic code needing modification</div>
<div>• Constant context-switching</div>
<div>• Documentation lookup interrupts</div>
</div>
</div>

<div class="p-4 bg-green-900/40 rounded-lg border-2 border-green-500">
<div class="text-2xl mb-3 text-center">✅</div>
<h3 class="text-lg font-bold mb-3 text-green-400 text-center">After Mastery</h3>
<div class="text-sm space-y-2">
<div>• 1-2 attempts with right context</div>
<div>• Codebase-specific implementations</div>
<div>• AI discovers files automatically</div>
<div>• Docs integrated into conversation</div>
</div>
</div>

</div>

<div class="mt-8 p-5 bg-gradient-to-r from-orange-600 to-red-600 rounded-xl shadow-lg text-center">
<div class="text-2xl font-bold text-white">Same AI, 3-4x better results with context mastery</div>
</div>

---

# Team Impact

<div class="grid grid-cols-3 gap-4 text-xs mt-8">

<div class="p-4 bg-gradient-to-br from-blue-900/60 to-blue-800 rounded-lg border-l-4 border-blue-400">
<div class="text-3xl mb-3 text-center">🚀</div>
<div class="text-center">
<div class="text-white font-bold mb-2">Faster Onboarding</div>
<div class="text-gray-400">New team members understand codebases faster with @workspace</div>
</div>
</div>

<div class="p-4 bg-gradient-to-br from-purple-900/60 to-purple-800 rounded-lg border-l-4 border-purple-400">
<div class="text-3xl mb-3 text-center">📚</div>
<div class="text-center">
<div class="text-white font-bold mb-2">Knowledge Scaling</div>
<div class="text-gray-400">Context mechanisms surface institutional knowledge</div>
</div>
</div>

<div class="p-4 bg-gradient-to-br from-green-900/60 to-green-800 rounded-lg border-l-4 border-green-400">
<div class="text-3xl mb-3 text-center">✅</div>
<div class="text-center">
<div class="text-white font-bold mb-2">Fewer Review Cycles</div>
<div class="text-gray-400">Context-aware suggestions match team patterns</div>
</div>
</div>

</div>

<div class="mt-8 text-center text-sm text-gray-400 italic">
Context mastery compounds across the entire team
</div>

---
layout: center
---

# Key Takeaways

<div class="text-left max-w-3xl mx-auto space-y-4 text-sm">

<div class="flex items-start gap-3">
<span class="text-2xl">🎯</span>
<div>
<div class="font-bold text-white">Context is the differentiator</div>
<div class="text-gray-400">Same AI, dramatically different results based on context quality</div>
</div>
</div>

<div class="flex items-start gap-3">
<span class="text-2xl">🔧</span>
<div>
<div class="font-bold text-white">Master the mechanisms</div>
<div class="text-gray-400">#file, @workspace, #codebase, #fetch, images—each has optimal use cases</div>
</div>
</div>

<div class="flex items-start gap-3">
<span class="text-2xl">⚡</span>
<div>
<div class="font-bold text-white">Leverage automatic features</div>
<div class="text-gray-400">Auto model selection, context indicators, thinking tokens</div>
</div>
</div>

<div class="flex items-start gap-3">
<span class="text-2xl">📊</span>
<div>
<div class="font-bold text-white">Layer strategically</div>
<div class="text-gray-400">Broad to narrow, implicit to explicit</div>
</div>
</div>

<div class="flex items-start gap-3">
<span class="text-2xl">🚀</span>
<div>
<div class="font-bold text-white">Use VS Code 1.109 features</div>
<div class="text-gray-400">Plan agent, Ask Questions, Mermaid diagrams enhance collaboration</div>
</div>
</div>

</div>

---

# Getting Started

<div class="grid grid-cols-2 gap-8 mt-8">

<div>
<h3 class="text-xl font-bold mb-4 text-blue-300">Immediate Actions</h3>
<div class="space-y-3 text-sm">
<div class="p-3 bg-gray-800 rounded-lg">
<div class="font-bold text-white mb-1">1. Try the mechanisms</div>
<div class="text-gray-400">Experiment with #file, @workspace, #codebase</div>
</div>
<div class="p-3 bg-gray-800 rounded-lg">
<div class="font-bold text-white mb-1">2. Enable features</div>
<div class="text-gray-400">Turn on chat.askQuestions.enabled</div>
</div>
<div class="p-3 bg-gray-800 rounded-lg">
<div class="font-bold text-white mb-1">3. Monitor usage</div>
<div class="text-gray-400">Watch context window indicator</div>
</div>
</div>
</div>

<div>
<h3 class="text-xl font-bold mb-4 text-purple-300">Next Steps</h3>
<div class="space-y-3 text-sm">
<div class="p-3 bg-gray-800 rounded-lg">
<div class="font-bold text-white mb-1">1. Set up instructions</div>
<div class="text-gray-400">.github/copilot-instructions.md</div>
</div>
<div class="p-3 bg-gray-800 rounded-lg">
<div class="font-bold text-white mb-1">2. Explore agents</div>
<div class="text-gray-400">Build on context with domain expertise</div>
</div>
<div class="p-3 bg-gray-800 rounded-lg">
<div class="font-bold text-white mb-1">3. Layer customizations</div>
<div class="text-gray-400">Instructions → prompts → agents → skills</div>
</div>
</div>
</div>

</div>

<div class="mt-8 p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-center">
<div class="text-white font-bold">Each layer compounds your effectiveness</div>
</div>

---
layout: end
---

# Context Mastery Unlocked

<div class="pt-8">
  <span class="text-6xl">🎯</span>
</div>

<div class="pt-6 text-xl opacity-75">
  Every AI interaction becomes more productive
</div>

<div class="pt-12 text-sm opacity-50">
  For more: code.visualstudio.com/docs/copilot/chat/copilot-chat-context
</div>
