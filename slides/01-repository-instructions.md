---
theme: default
background: https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Module 1: Repository Instructions
  Establishing foundations for AI-assisted development through documentation
drawings:
  persist: false
transition: slide-left
title: Module 1 - Repository Instructions
mdc: true
---

# Module 1: Repository Instructions

## ⏰ Establishing Foundations

<div class="pt-12">
  <span class="text-6xl">📚</span>
</div>

<div class="mt-8 text-xl opacity-75">
  "We've all felt it—Copilot giving wildly different suggestions to each of us. Let's fix that."
</div>

<div class="abs-br m-6 flex gap-2">
  <span class="text-sm opacity-50">CopilotWorkshop Training</span>
</div>

---

# 📖 The Problem

<div class="grid grid-cols-2 gap-8 mt-8">

<div class="p-6 bg-red-900/30 rounded-lg border-l-4 border-red-500">
  <div class="text-3xl mb-4">😰</div>
  <h3 class="text-xl font-bold text-red-400 mb-3">Before Documentation</h3>
  <ul class="text-sm text-gray-300 space-y-2">
    <li>✗ Everyone gets different Copilot suggestions</li>
    <li>✗ Three different async patterns in codebase</li>
    <li>✗ AI analyzes entire repo to understand structure</li>
    <li>✗ Code reviews catch inconsistencies</li>
    <li>✗ Junior developers produce inconsistent code</li>
  </ul>
</div>

<div class="p-6 bg-gray-800 rounded-lg border-l-4 border-gray-600">
  <div class="text-3xl mb-4">💭</div>
  <h3 class="text-xl font-bold text-gray-300 mb-3">The Root Cause</h3>
  <blockquote class="text-sm text-gray-400 italic space-y-3">
    <p>"Before anyone writes another line of code, we need to document what we have. Otherwise Copilot is just guessing—and so are we."</p>
    <p class="text-xs text-gray-500">— David, Staff Engineer (20 years)</p>
  </blockquote>
</div>

</div>

<div class="mt-8 text-center text-lg text-yellow-400">
  ⚠️ The AI is as confused as a new hire with no onboarding docs
</div>

---

# 🎯 Learning Objectives

<div class="grid grid-cols-2 gap-6 mt-8">

<div class="p-5 bg-blue-900/60 rounded-lg border-2 border-blue-400">
  <div class="text-3xl mb-3">🏗️</div>
  <h3 class="font-bold text-blue-300 mb-2">What You'll Create</h3>
  <ul class="text-sm text-gray-300 space-y-2">
    <li><code>ARCHITECTURE.md</code> — Structural understanding</li>
    <li><code>.github/copilot-instructions.md</code> — Pattern standardization</li>
  </ul>
</div>

<div class="p-5 bg-green-900/60 rounded-lg border-2 border-green-400">
  <div class="text-3xl mb-3">✨</div>
  <h3 class="font-bold text-green-300 mb-2">What You'll Achieve</h3>
  <ul class="text-sm text-gray-300 space-y-2">
    <li>Consistent AI suggestions across team</li>
    <li>Faster responses with less context waste</li>
    <li>Automated pattern enforcement</li>
    <li>Reduced review cycles</li>
  </ul>
</div>

</div>

<div class="mt-8 p-4 bg-purple-900/40 rounded-lg border-l-4 border-purple-500 text-center">
  <span class="text-purple-300 font-semibold">Documentation isn't a tax. It's a multiplier.</span>
</div>

---

# 👥 Key Personas

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 bg-gradient-to-br from-blue-900/60 to-blue-800/40 rounded-lg border-2 border-blue-500">
  <div class="text-4xl mb-2">👨‍💼</div>
  <h3 class="text-xl font-bold text-white">David</h3>
  <p class="text-sm text-blue-300 opacity-75 mb-3">Staff Engineer · 20 years</p>
  <blockquote class="text-xs text-gray-300 italic">
    "I've been documenting architecture for years because it helps junior devs. I never realized it also helps the AI. Same investment, double the payoff."
  </blockquote>
</div>

<div class="p-5 bg-gradient-to-br from-red-900/60 to-red-800/40 rounded-lg border-2 border-red-500">
  <div class="text-4xl mb-2">👩‍💻</div>
  <h3 class="text-xl font-bold text-white">Sarah</h3>
  <p class="text-sm text-red-300 opacity-75 mb-3">Senior Developer · 15 years</p>
  <blockquote class="text-xs text-gray-300 italic">
    "See how the backend routes use three different async patterns? That's because the contractor had no standards. Let's fix that—and teach Copilot at the same time."
  </blockquote>
</div>

</div>

<div class="mt-6 text-center text-sm text-gray-400">
  <span class="text-xl">⭐</span> Both lead exercises in this module
</div>

---
layout: two-cols
---

# ❌ The "Before"

<div class="mt-6 space-y-4">

<div class="p-4 bg-red-900/30 rounded-lg">
  <div class="font-bold text-red-400 mb-2">⏱️ Time Wasted</div>
  <div class="text-sm text-gray-300">
    <span class="text-2xl font-bold text-red-300">15 minutes</span>
    <div>analyzing context per query</div>
  </div>
</div>

<div class="p-4 bg-red-900/30 rounded-lg">
  <div class="font-bold text-red-400 mb-2">🔄 Review Cycles</div>
  <div class="text-sm text-gray-300">
    <span class="text-2xl font-bold text-red-300">3 rounds</span>
    <div>catching style inconsistencies</div>
  </div>
</div>

<div class="p-4 bg-red-900/30 rounded-lg">
  <div class="font-bold text-red-400 mb-2">⚠️ Pattern Violations</div>
  <div class="text-sm text-gray-300">
    <span class="text-2xl font-bold text-red-300">8 per PR</span>
    <div>different async patterns used</div>
  </div>
</div>

</div>

::right::

# ✨ The "After"

<div class="mt-6 space-y-4">

<div class="p-4 bg-green-900/30 rounded-lg">
  <div class="font-bold text-green-400 mb-2">⚡ Fast Context</div>
  <div class="text-sm text-gray-300">
    <span class="text-2xl font-bold text-green-300">2 minutes</span>
    <div>context-aware responses</div>
  </div>
</div>

<div class="p-4 bg-green-900/30 rounded-lg">
  <div class="font-bold text-green-400 mb-2">✅ Streamlined Reviews</div>
  <div class="text-sm text-gray-300">
    <span class="text-2xl font-bold text-green-300">1 round</span>
    <div>focusing on logic, not style</div>
  </div>
</div>

<div class="p-4 bg-green-900/30 rounded-lg">
  <div class="font-bold text-green-400 mb-2">🎯 Consistency</div>
  <div class="text-sm text-gray-300">
    <span class="text-2xl font-bold text-green-300">0 violations</span>
    <div>standardized patterns automatically</div>
  </div>
</div>

</div>

---

# 📚 Key Concepts: The Two-File Foundation

<div class="grid grid-cols-2 gap-6 mt-8">

<div class="p-5 bg-gray-800 rounded-lg border-l-4 border-blue-500">
  <h3 class="text-xl font-bold text-blue-400 mb-3">ARCHITECTURE.md</h3>
  <div class="text-sm text-gray-300 space-y-2 mb-4">
    <div><strong class="text-blue-300">Purpose:</strong> Structural understanding + context efficiency</div>
    <div><strong class="text-blue-300">Result:</strong> Less tokens wasted, faster responses</div>
  </div>
  <div class="text-xs text-gray-400 space-y-1">
    <div class="text-green-400">✓ Tech stack</div>
    <div class="text-green-400">✓ Folder structure</div>
    <div class="text-green-400">✓ Data flow</div>
    <div class="text-red-400">✗ Implementation details</div>
    <div class="text-red-400">✗ Code examples</div>
  </div>
</div>

<div class="p-5 bg-gray-800 rounded-lg border-l-4 border-purple-500">
  <h3 class="text-xl font-bold text-purple-400 mb-3">.github/copilot-instructions.md</h3>
  <div class="text-sm text-gray-300 space-y-2 mb-4">
    <div><strong class="text-purple-300">Purpose:</strong> Automatic pattern standardization</div>
    <div><strong class="text-purple-300">Result:</strong> Consistent code, fewer review cycles</div>
  </div>
  <div class="text-xs text-gray-400 space-y-1">
    <div class="text-green-400">✓ Coding conventions</div>
    <div class="text-green-400">✓ Library preferences</div>
    <div class="text-green-400">✓ Error patterns</div>
    <div class="text-red-400">✗ Project structure</div>
    <div class="text-red-400">✗ Task-specific rules</div>
  </div>
</div>

</div>

<div class="mt-6 text-center text-sm text-gray-400">
  📂 Reference examples: <code>examples/completed-config/</code>
</div>

---

# 🔗 How They Work Together

<div class="flex flex-col items-center gap-4 mt-8">

<div class="p-5 bg-blue-900/60 rounded-lg border-2 border-blue-400 w-full max-w-2xl">
  <div class="text-2xl mb-2">📖 ARCHITECTURE.md</div>
  <div class="text-sm text-blue-300 font-semibold mb-2">Gives Copilot the "WHAT" and "WHERE"</div>
  <div class="text-xs text-gray-300 italic">
    "This is a React frontend with Express backend, here's the folder structure"
  </div>
</div>

<div class="text-3xl text-gray-400">↓</div>

<div class="p-5 bg-purple-900/60 rounded-lg border-2 border-purple-400 w-full max-w-2xl">
  <div class="text-2xl mb-2">⚙️ copilot-instructions.md</div>
  <div class="text-sm text-purple-300 font-semibold mb-2">Gives Copilot the "HOW"</div>
  <div class="text-xs text-gray-300 italic">
    "Always use async/await, prefer functional components, handle errors with our middleware"
  </div>
</div>

<div class="text-3xl text-gray-400">↓</div>

<div class="p-5 bg-green-900/60 rounded-lg border-2 border-green-400 w-full max-w-2xl text-center">
  <div class="text-2xl mb-2">✨ Result</div>
  <div class="text-lg text-green-300 font-bold">
    Consistent, Context-Aware AI Suggestions
  </div>
</div>

</div>

---

# 💡 Understanding @workspace

<div class="grid grid-cols-3 gap-4 mt-8">

<div class="p-4 bg-gray-800 rounded-lg border-l-4 border-blue-500">
  <div class="text-3xl mb-2">🔍</div>
  <div class="text-sm font-bold text-white mb-2">Bird's-Eye View</div>
  <div class="text-xs text-gray-400">Access entire project structure</div>
</div>

<div class="p-4 bg-gray-800 rounded-lg border-l-4 border-blue-500">
  <div class="text-3xl mb-2">🔗</div>
  <div class="text-sm font-bold text-white mb-2">Cross-File Analysis</div>
  <div class="text-xs text-gray-400">Understand component relationships</div>
</div>

<div class="p-4 bg-gray-800 rounded-lg border-l-4 border-blue-500">
  <div class="text-3xl mb-2">🎯</div>
  <div class="text-sm font-bold text-white mb-2">Accurate Context</div>
  <div class="text-xs text-gray-400">Project-specific documentation</div>
</div>

</div>

<div class="mt-8 p-5 bg-gradient-to-r from-blue-900/40 to-purple-900/40 rounded-lg text-center">
  <div class="text-xl text-white font-semibold mb-2">
    <code>@workspace</code> gives Copilot the same context you have as a developer
  </div>
  <div class="text-sm text-gray-400">
    Instead of seeing one file, it sees the whole system
  </div>
</div>

---

# 🔨 Exercises

<div class="mt-6">

| # | Exercise | Lead | Time | Topic |
|---|----------|------|------|-------|
| **1.1** | Create ARCHITECTURE.md | David ⭐ | 15 min | Documentation as Leverage |
| **1.2** | Create copilot-instructions.md | Sarah ⭐ | 20 min | Intent Over Implementation |

</div>

<div class="mt-8 grid grid-cols-2 gap-6">

<div class="p-4 bg-blue-900/30 rounded-lg border-2 border-blue-400">
  <h3 class="font-bold text-blue-300 mb-2">Exercise 1.1: ARCHITECTURE.md</h3>
  <div class="text-xs text-gray-300 space-y-1">
    <div>• Use <code>@workspace</code> to analyze codebase</div>
    <div>• Document tech stack and folder structure</div>
    <div>• Explain data flow patterns</div>
    <div>• Validate faster AI responses</div>
  </div>
</div>

<div class="p-4 bg-purple-900/30 rounded-lg border-2 border-purple-400">
  <h3 class="font-bold text-purple-300 mb-2">Exercise 1.2: copilot-instructions.md</h3>
  <div class="text-xs text-gray-300 space-y-1">
    <div>• Document coding conventions</div>
    <div>• Define library preferences</div>
    <div>• Specify error handling patterns</div>
    <div>• Test consistent suggestions</div>
  </div>
</div>

</div>

<div class="mt-6 text-center text-sm text-gray-400">
  📖 Detailed instructions in module folder
</div>

---
layout: center
---

# 💭 David's Realization

<div class="p-8 bg-gradient-to-br from-blue-900/60 to-blue-800/40 rounded-xl shadow-lg max-w-3xl">
  <div class="text-6xl mb-4 text-center">👨‍💼</div>
  <blockquote class="text-2xl text-center text-white italic leading-relaxed">
    "I've been documenting architecture for years because it helps junior devs. I never realized it also helps the AI. Same investment, double the payoff."
  </blockquote>
  <div class="mt-4 text-center text-blue-300">
    — David, Staff Engineer (20 years)
  </div>
</div>

<div class="mt-8 text-center text-lg text-gray-400">
  Documentation as leverage, not bureaucracy
</div>

---

# 📊 Success Metrics

<div class="grid grid-cols-3 gap-4 mt-8">

<div class="p-5 bg-gradient-to-br from-red-900/40 to-gray-800 rounded-lg text-center">
  <div class="text-sm text-red-400 font-bold mb-2">Before</div>
  <div class="text-4xl font-bold text-white mb-1">15 min</div>
  <div class="text-xs text-gray-400">context analysis time</div>
  <div class="text-3xl text-gray-400 my-3">↓</div>
  <div class="text-sm text-green-400 font-bold mb-2">After</div>
  <div class="text-4xl font-bold text-white mb-1">2 min</div>
  <div class="text-xs text-gray-400">with ARCHITECTURE.md</div>
</div>

<div class="p-5 bg-gradient-to-br from-red-900/40 to-gray-800 rounded-lg text-center">
  <div class="text-sm text-red-400 font-bold mb-2">Before</div>
  <div class="text-4xl font-bold text-white mb-1">3 rounds</div>
  <div class="text-xs text-gray-400">code review cycles</div>
  <div class="text-3xl text-gray-400 my-3">↓</div>
  <div class="text-sm text-green-400 font-bold mb-2">After</div>
  <div class="text-4xl font-bold text-white mb-1">1 round</div>
  <div class="text-xs text-gray-400">with copilot-instructions</div>
</div>

<div class="p-5 bg-gradient-to-br from-red-900/40 to-gray-800 rounded-lg text-center">
  <div class="text-sm text-red-400 font-bold mb-2">Before</div>
  <div class="text-4xl font-bold text-white mb-1">8 violations</div>
  <div class="text-xs text-gray-400">pattern violations per PR</div>
  <div class="text-3xl text-gray-400 my-3">↓</div>
  <div class="text-sm text-green-400 font-bold mb-2">After</div>
  <div class="text-4xl font-bold text-white mb-1">0 violations</div>
  <div class="text-xs text-gray-400">automated enforcement</div>
</div>

</div>

<div class="mt-8 p-5 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-lg text-center">
  <div class="text-2xl font-bold text-white">
    That's 2 hours saved per feature × every sprint × every developer
  </div>
</div>

---

# 🔗 Compounding Value

<div class="mt-8">

<div class="p-4 bg-blue-900/40 rounded-lg border-l-4 border-blue-500 mb-4">
  <h3 class="text-lg font-bold text-blue-300 mb-2">What We Created</h3>
  <div class="grid grid-cols-2 gap-4 text-sm text-gray-300">
    <div>✓ <code>docs/ARCHITECTURE.md</code> — Project context</div>
    <div>✓ <code>.github/copilot-instructions.md</code> — Team patterns</div>
  </div>
</div>

<div class="p-4 bg-purple-900/40 rounded-lg border-l-4 border-purple-500">
  <h3 class="text-lg font-bold text-purple-300 mb-3">How This Helps Future Modules</h3>
  <div class="text-xs text-gray-300 space-y-2">
    <div class="flex items-start gap-2">
      <span class="text-purple-400">→</span>
      <div><strong>Module 2:</strong> Custom prompts reference ARCHITECTURE.md</div>
    </div>
    <div class="flex items-start gap-2">
      <span class="text-purple-400">→</span>
      <div><strong>Module 3:</strong> Custom agents know your patterns</div>
    </div>
    <div class="flex items-start gap-2">
      <span class="text-purple-400">→</span>
      <div><strong>Module 4:</strong> Custom instructions build on repository instructions</div>
    </div>
    <div class="flex items-start gap-2">
      <span class="text-purple-400">→</span>
      <div><strong>Module 5+:</strong> All customizations compound together</div>
    </div>
  </div>
</div>

</div>

<div class="mt-6 text-center text-lg text-yellow-300">
  ⏰ Every minute invested here saves hours later
</div>

---

# 🧠 The Transformation

<div class="grid grid-cols-2 gap-8 mt-8">

<div class="p-6 bg-red-900/30 rounded-lg">
  <h3 class="text-xl font-bold text-red-400 mb-4">❌ Before This Module</h3>
  <ul class="text-sm text-gray-300 space-y-2">
    <li>Copilot gave everyone different suggestions</li>
    <li>Code reviews caught inconsistencies</li>
    <li>Junior developers felt lost</li>
    <li>Codebase heading toward entropy</li>
  </ul>
</div>

<div class="p-6 bg-green-900/30 rounded-lg">
  <h3 class="text-xl font-bold text-green-400 mb-4">✨ After This Module</h3>
  <ul class="text-sm text-gray-300 space-y-2">
    <li>Copilot gives everyone the SAME suggestions</li>
    <li>Code reviews focus on logic, not style</li>
    <li>Junior devs produce senior-quality code</li>
    <li>Codebase has gravity—pulls toward consistency</li>
  </ul>
</div>

</div>

<div class="mt-8 p-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg text-center">
  <div class="text-3xl font-bold text-white mb-2">
    Documentation isn't a tax. It's a multiplier.
  </div>
  <div class="text-lg text-blue-100 italic">
    Clarity beats cleverness
  </div>
</div>

---

# ✅ Module Checklist

<div class="grid grid-cols-2 gap-6 mt-8">

<div class="p-5 bg-gray-800 rounded-lg">
  <h3 class="font-bold text-blue-300 mb-3">Files Created</h3>
  <div class="text-sm text-gray-300 space-y-2">
    <div class="flex items-center gap-2">
      <input type="checkbox" class="w-4 h-4" />
      <span><code>fanhub/docs/ARCHITECTURE.md</code> exists</span>
    </div>
    <div class="flex items-center gap-2">
      <input type="checkbox" class="w-4 h-4" />
      <span><code>.github/copilot-instructions.md</code> exists</span>
    </div>
    <div class="flex items-center gap-2">
      <input type="checkbox" class="w-4 h-4" />
      <span>Both include required sections</span>
    </div>
  </div>
</div>

<div class="p-5 bg-gray-800 rounded-lg">
  <h3 class="font-bold text-green-300 mb-3">Validated Improvements</h3>
  <div class="text-sm text-gray-300 space-y-2">
    <div class="flex items-center gap-2">
      <input type="checkbox" class="w-4 h-4" />
      <span>AI queries run faster (compare before/after)</span>
    </div>
    <div class="flex items-center gap-2">
      <input type="checkbox" class="w-4 h-4" />
      <span>Suggestions follow documented patterns</span>
    </div>
    <div class="flex items-center gap-2">
      <input type="checkbox" class="w-4 h-4" />
      <span>Team agrees on both documents</span>
    </div>
  </div>
</div>

</div>

<div class="mt-8 text-center">
  <div class="text-sm text-gray-400 mb-2">Practices Applied</div>
  <div class="flex justify-center gap-4 text-xs">
    <span class="px-3 py-1 bg-blue-900/40 rounded-full">📚 Documentation as Leverage</span>
    <span class="px-3 py-1 bg-purple-900/40 rounded-full">🎯 Context is Everything</span>
    <span class="px-3 py-1 bg-green-900/40 rounded-full">🔄 Iterate and Refine</span>
  </div>
</div>

---
layout: center
---

# ➡️ Next Up: Module 2

<div class="p-8 bg-gradient-to-br from-purple-900/60 to-purple-800/40 rounded-xl shadow-lg max-w-3xl">
  <div class="text-5xl mb-4 text-center">🧠</div>
  <h2 class="text-3xl text-center text-white font-bold mb-4">
    Agent Plan Mode
  </h2>
  <div class="text-lg text-center text-purple-200 mb-6">
    Monday 11:30 AM
  </div>
  <div class="text-base text-gray-300 text-center mb-4">
    Now that Copilot knows our structure and patterns, let's teach it to <strong>think through problems before coding</strong>.
  </div>
  <blockquote class="text-lg text-center text-white italic">
    "Copilot knows our patterns now. But can it think through complex problems like we do?"
  </blockquote>
  <div class="mt-2 text-center text-purple-300">
    — David, ready to test Copilot's reasoning
  </div>
</div>

---
layout: end
---

# Module 1 Complete! 🎉

<div class="text-center mt-12">
  <div class="text-6xl mb-6">✅</div>
  <div class="text-2xl text-gray-300 mb-4">
    You've established the foundation for AI-assisted development
  </div>
  <div class="text-lg text-gray-400">
    Documentation created. Patterns documented. Team aligned.
  </div>
</div>

<div class="mt-12 text-center text-sm text-gray-500">
  Continue to Module 2: Agent Plan Mode →
</div>

# Module 1 Complete! ✅

## Ready for Module 2?

<div class="mt-8">
  <a href="/modules/02-agent-plan-mode" class="text-blue-600 hover:underline">
    Continue to Module 2: Agent Plan Mode →
  </a>
</div>

<div class="abs-br m-6 text-sm opacity-50">
  Questions? Check the README or ask in chat
</div>
