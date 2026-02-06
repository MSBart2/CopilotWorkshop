---
theme: default
background: https://source.unsplash.com/collection/94734566/1920x1080
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Context Engineering Foundations
  CopilotTraining Tech Talk
drawings:
  persist: false
transition: slide-left
title: Context Engineering Foundations
module: tech-talks/context-engineering-foundations
mdc: true
---

<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-indigo-900/20"></div>
<div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-indigo-500/20 rounded-full blur-3xl"></div>
<div class="relative z-10">
<div class="absolute inset-0 blur-2xl opacity-50">
<img src="./sdp-logo.png" class="w-72" alt="" />
</div>
<img src="./sdp-logo.png" class="w-72 relative" alt="SDP Logo" />
</div>
<h1 class="!text-5xl !font-bold !mt-8 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent relative z-10">
Context Engineering Foundations
</h1>
<div class="mt-4 relative z-10">
<span class="px-6 py-2 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xl font-medium shadow-lg shadow-cyan-500/25">
The Foundation That Unlocks Everything
</span>
</div>
<div class="mt-6 w-32 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full relative z-10"></div>
</div>

<div class="abs-br m-6 flex gap-2">
<span class="text-sm opacity-50">Tech Talk · 2 hours (hands-on)</span>
</div>

---

# 🧠 The Core Insight

<div class="text-lg mt-8">

**The shift isn't from "no AI" to "AI"—it's from generic AI to expert AI.**

</div>

<div class="grid grid-cols-2 gap-8 mt-12">
<div class="p-6 bg-red-900/30 rounded-lg border-2 border-red-500">
<h3 class="text-2xl font-bold text-red-300 mb-4">❌ Without Context Engineering</h3>
<ul class="text-sm space-y-2">
<li>Plausible suggestions need heavy review</li>
<li>"That's not how we do it here" feedback loops</li>
<li>Each prompt is trial-and-error</li>
<li>AI doesn't understand your architecture</li>
</ul>
</div>
<div class="p-6 bg-green-900/30 rounded-lg border-2 border-green-500">
<h3 class="text-2xl font-bold text-green-300 mb-4">✨ With Context Engineering</h3>
<ul class="text-sm space-y-2">
<li>Expert-level assistance from first attempt</li>
<li>Suggestions embody your standards automatically</li>
<li>Quality doesn't degrade with complexity</li>
<li>Compounding value with each interaction</li>
</ul>
</div>
</div>

---

# 💭 Why This Matters (By Role)

<div class="grid grid-cols-1 gap-2 mt-6 text-xs">
<div class="grid grid-cols-3 gap-4 p-3 bg-gray-800 rounded-lg">
<div class="font-bold text-cyan-400">Role</div>
<div class="font-bold text-red-400">Without Strong Context</div>
<div class="font-bold text-green-400">With Strong Context</div>
</div>
<div class="grid grid-cols-3 gap-4 p-3 bg-gray-800/50 rounded-lg">
<div class="font-bold text-white">Senior Developer</div>
<div class="text-gray-300">Generic suggestions, 3 review rounds per PR</div>
<div class="text-gray-300">Standards-aware code, 1 review round</div>
</div>
<div class="grid grid-cols-3 gap-4 p-3 bg-gray-800/50 rounded-lg">
<div class="font-bold text-white">Architect</div>
<div class="text-gray-300">AI ignores architecture decisions</div>
<div class="text-gray-300">AI respects and extends patterns</div>
</div>
<div class="grid grid-cols-3 gap-4 p-3 bg-gray-800/50 rounded-lg">
<div class="font-bold text-white">DevOps Engineer</div>
<div class="text-gray-300">Generic troubleshooting, 15+ min debugging</div>
<div class="text-gray-300">Root cause identification in 90 seconds</div>
</div>
<div class="grid grid-cols-3 gap-4 p-3 bg-gray-800/50 rounded-lg">
<div class="font-bold text-white">QA Engineer</div>
<div class="text-gray-300">AI tests miss edge cases</div>
<div class="text-gray-300">Comprehensive coverage with human validation</div>
</div>
<div class="grid grid-cols-3 gap-4 p-3 bg-gray-800/50 rounded-lg">
<div class="font-bold text-white">Product Manager</div>
<div class="text-gray-300">Technical complexity unclear</div>
<div class="text-gray-300">Rapid scope analysis with constraints</div>
</div>
</div>

---

# 📋 Workshop Structure

<div class="mt-8">

| Time | Section | Focus | Key Outcome |
|------|---------|-------|-------------|
| 0:00-0:15 | Introduction | Why context matters | Understand the value proposition |
| 0:15-0:30 | Exercise 0 | Context primitives | Master `@`-mentions and `#`-mentions |
| 0:30-1:00 | Exercise 1 | Persistent context layers | ARCHITECTURE.md + instructions + `applyTo` |
| 1:00-1:25 | Exercise 2 | Prompts & enforcement | Reusable prompts + Standards Review Agent |
| 1:25-1:50 | Exercise 3 | Execution & validation | Implement + review + measure improvement |
| 1:50-2:00 | Wrap-Up | Measuring success | Document your baseline |

</div>

---

# 🎯 What You'll Build

<div class="grid grid-cols-2 gap-4 mt-8 text-sm">
<div class="p-4 bg-gray-800 rounded-lg border-l-4 border-cyan-400">
<div class="text-cyan-300 font-bold mb-2">1. Context Primitive Mastery</div>
<div class="text-gray-300">Know when to use @workspace, #codebase, #file, #fetch</div>
</div>
<div class="p-4 bg-gray-800 rounded-lg border-l-4 border-cyan-400">
<div class="text-cyan-300 font-bold mb-2">2. docs/ARCHITECTURE.md</div>
<div class="text-gray-300">Project structure documentation for immediate understanding</div>
</div>
<div class="p-4 bg-gray-800 rounded-lg border-l-4 border-cyan-400">
<div class="text-cyan-300 font-bold mb-2">3. .github/copilot-instructions.md</div>
<div class="text-gray-300">Persistent context automatically included</div>
</div>
<div class="p-4 bg-gray-800 rounded-lg border-l-4 border-cyan-400">
<div class="text-cyan-300 font-bold mb-2">4. File-Pattern Instructions</div>
<div class="text-gray-300">Specific rules using applyTo patterns</div>
</div>
<div class="p-4 bg-gray-800 rounded-lg border-l-4 border-cyan-400">
<div class="text-cyan-300 font-bold mb-2">5. Reusable Prompts</div>
<div class="text-gray-300">.github/prompts/*.prompt.md for common tasks</div>
</div>
<div class="p-4 bg-gray-800 rounded-lg border-l-4 border-cyan-400">
<div class="text-cyan-300 font-bold mb-2">6. Standards Review Agent</div>
<div class="text-gray-300">Enforces documented standards automatically</div>
</div>
</div>

---

# 🔧 Context Primitives Quick Reference

<div class="grid grid-cols-2 gap-8 mt-8">
<div>
<h3 class="text-xl font-bold text-cyan-300 mb-4">@-Mentions (Chat Participants)</h3>
<div class="space-y-2 text-sm">
<div class="p-2 bg-gray-800 rounded flex justify-between">
<span class="font-mono text-cyan-400">@workspace</span>
<span class="text-gray-300">Full codebase understanding</span>
</div>
<div class="p-2 bg-gray-800 rounded flex justify-between">
<span class="font-mono text-cyan-400">@vscode</span>
<span class="text-gray-300">VS Code features</span>
</div>
<div class="p-2 bg-gray-800 rounded flex justify-between">
<span class="font-mono text-cyan-400">@terminal</span>
<span class="text-gray-300">Terminal commands</span>
</div>
<div class="p-2 bg-gray-800 rounded flex justify-between">
<span class="font-mono text-cyan-400">@github</span>
<span class="text-gray-300">GitHub workflows</span>
</div>
</div>
</div>
<div>
<h3 class="text-xl font-bold text-indigo-300 mb-4">#-Mentions (Context Variables)</h3>
<div class="space-y-2 text-sm">
<div class="p-2 bg-gray-800 rounded flex justify-between">
<span class="font-mono text-indigo-400">#file:path</span>
<span class="text-gray-300">Attach specific file</span>
</div>
<div class="p-2 bg-gray-800 rounded flex justify-between">
<span class="font-mono text-indigo-400">#codebase</span>
<span class="text-gray-300">Search entire codebase</span>
</div>
<div class="p-2 bg-gray-800 rounded flex justify-between">
<span class="font-mono text-indigo-400">#problems</span>
<span class="text-gray-300">Current errors/warnings</span>
</div>
<div class="p-2 bg-gray-800 rounded flex justify-between">
<span class="font-mono text-indigo-400">#fetch URL</span>
<span class="text-gray-300">Web content</span>
</div>
</div>
</div>
</div>

---

# 📂 Persistent Context Layers

<div class="mt-8 space-y-4">
<div class="p-4 bg-gradient-to-r from-blue-900/60 to-blue-800/40 rounded-lg border-2 border-blue-400">
<div class="flex items-center gap-3">
<span class="text-3xl">📚</span>
<div class="flex-1">
<div class="font-bold text-blue-300 text-lg">Repository Instructions</div>
<div class="text-sm text-gray-300">.github/copilot-instructions.md — Team standards for all requests</div>
</div>
</div>
</div>
<div class="p-4 bg-gradient-to-r from-green-900/60 to-green-800/40 rounded-lg border-2 border-green-400">
<div class="flex items-center gap-3">
<span class="text-3xl">🎯</span>
<div class="flex-1">
<div class="font-bold text-green-300 text-lg">File-Pattern Instructions</div>
<div class="text-sm text-gray-300">.github/instructions/*.instructions.md — Rules via applyTo patterns</div>
</div>
</div>
</div>
<div class="p-4 bg-gradient-to-r from-purple-900/60 to-purple-800/40 rounded-lg border-2 border-purple-400">
<div class="flex items-center gap-3">
<span class="text-3xl">📖</span>
<div class="flex-1">
<div class="font-bold text-purple-300 text-lg">Documentation</div>
<div class="text-sm text-gray-300">docs/*.md — Architecture, ADRs, patterns</div>
</div>
</div>
</div>
<div class="p-4 bg-gradient-to-r from-yellow-900/60 to-yellow-800/40 rounded-lg border-2 border-yellow-400">
<div class="flex items-center gap-3">
<span class="text-3xl">👤</span>
<div class="flex-1">
<div class="font-bold text-yellow-300 text-lg">User Instructions</div>
<div class="text-sm text-gray-300">Profile .instructions.md — Personal preferences across workspaces</div>
</div>
</div>
</div>
</div>

---

# 🧭 Customization Types (Quick Reference)

<div class="mt-8 space-y-3">
<div class="grid grid-cols-4 gap-4 p-3 bg-gray-800 rounded-lg">
<div class="font-bold text-cyan-400">Type</div>
<div class="font-bold text-cyan-400">When to Use</div>
<div class="font-bold text-cyan-400">This Workshop</div>
<div class="font-bold text-cyan-400">Example</div>
</div>
<div class="grid grid-cols-4 gap-4 p-3 bg-gray-800/50 rounded-lg items-center">
<div class="font-bold text-white">Instructions</div>
<div class="text-gray-300 text-sm">Passive guidelines that apply automatically</div>
<div class="text-green-400 text-xl">✅ Covered</div>
<div class="text-gray-300 text-sm">copilot-instructions.md</div>
</div>
<div class="grid grid-cols-4 gap-4 p-3 bg-gray-800/50 rounded-lg items-center">
<div class="font-bold text-white">Prompts</div>
<div class="text-gray-300 text-sm">On-demand tasks via /command</div>
<div class="text-green-400 text-xl">✅ Covered</div>
<div class="text-gray-300 text-sm">add-tests.prompt.md</div>
</div>
<div class="grid grid-cols-4 gap-4 p-3 bg-gray-800/50 rounded-lg items-center">
<div class="font-bold text-white">Agents</div>
<div class="text-gray-300 text-sm">Specialized personas with specific tools</div>
<div class="text-yellow-400 text-xl">📍 Introduced</div>
<div class="text-gray-300 text-sm">standards-review.agent.md</div>
</div>
<div class="grid grid-cols-4 gap-4 p-3 bg-gray-800/50 rounded-lg items-center">
<div class="font-bold text-white">Skills</div>
<div class="text-gray-300 text-sm">Portable capabilities across tools</div>
<div class="text-blue-400 text-xl">🌐 Advanced</div>
<div class="text-gray-300 text-sm">Cross-tool portability</div>
</div>
</div>

---

# 📊 Success Metrics

<div class="mt-8">

| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| Query response accuracy | 60-70% | 90%+ | Consistent correct answers |
| Response time (structural) | 6-10 seconds | 2-3 seconds | 60-70% faster |
| Review rounds per PR | 2-3 rounds | 1 round | 50-70% reduction |
| Pattern consistency | Multiple conflicting | Single documented | 100% consistency |
| Onboarding time | Hours reading code | Minutes reading docs | Immediate productivity |

</div>

<div class="mt-8 p-5 bg-gradient-to-r from-cyan-600 to-blue-800 rounded-xl shadow-lg text-center">
<div class="text-2xl font-bold text-white">Context engineering transforms Copilot from autocomplete to expert assistant.</div>
</div>

---

# 🎭 The Transformation

<div class="flex flex-col gap-8 mt-12">
<div class="p-6 bg-red-900/30 rounded-lg border-l-4 border-red-500">
<div class="text-red-400 font-bold text-xl mb-3">Before this workshop</div>
<div class="text-gray-300 text-lg">
Copilot is a helpful but inconsistent assistant that requires constant correction.
</div>
</div>
<div class="text-4xl text-center text-gray-400">↓</div>
<div class="p-6 bg-green-900/30 rounded-lg border-l-4 border-green-500">
<div class="text-green-400 font-bold text-xl mb-3">After this workshop</div>
<div class="text-gray-300 text-lg">
Copilot operates with your project's context, patterns, and standards built in—delivering expert-level assistance on every interaction.
</div>
</div>
</div>

---
layout: center
---

<div class="text-center">
<div class="text-5xl mb-8">💡</div>
<blockquote class="text-2xl italic text-gray-300">
"The best code isn't written by the AI or the human—<br/>
it's written by the human who knows how<br/>
to give the AI the right context."
</blockquote>
</div>

---
layout: end
---

# Ready to Transform Your AI Experience?

<div class="mt-12 text-center">
<div class="text-lg text-gray-300">
Start with Exercise 0: Context Primitives
</div>
<div class="mt-4 text-sm text-gray-400">
Master @-mentions and #-mentions in 15 minutes
</div>
</div>
