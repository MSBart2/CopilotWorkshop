---
theme: default
background: https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=1080&fit=crop
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Module 2: Agent Plan Mode
  CopilotWorkshop Training - From Complexity to Clarity
drawings:
  persist: false
transition: slide-left
title: Module 2 - Agent Plan Mode
mdc: true
---

# Module 2: Agent Plan Mode
## ⏰ The Complexity Problem

<div class="pt-12">
  <span class="text-6xl">🎯</span>
</div>

<div class="mt-8 text-xl opacity-75 italic">
"We have the foundation, but now I need to implement the character detail page.<br>Where do I even start?"
</div>

<div class="mt-4 text-sm opacity-60">— Marcus, DevOps Developer</div>

<div class="abs-br m-6 flex gap-2">
  <span class="text-sm opacity-50">CopilotWorkshop Training</span>
</div>

---

# 📖 The Challenge

<div class="grid grid-cols-1 gap-6 mt-8">

<div class="p-6 bg-gradient-to-r from-red-900/40 to-gray-800 rounded-lg">
  <div class="text-3xl mb-3">😰</div>
  <div class="text-xl font-bold text-white mb-3">Complex Multi-File Features</div>
  <div class="text-gray-300 text-sm leading-relaxed">
    Features that span frontend, backend, and database layers—6+ files with unclear dependencies, missing requirements, and integration conflicts waiting to happen.
  </div>
</div>

<div class="p-6 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg border-l-4 border-purple-500">
  <div class="text-lg font-bold text-purple-300 mb-2">The Traditional Approach</div>
  <div class="text-gray-400 text-sm space-y-1">
    <div>1. Read feature requirements</div>
    <div>2. Start coding</div>
    <div>3. Realize you missed dependencies</div>
    <div>4. Refactor or start over</div>
  </div>
</div>

</div>

<div class="mt-6 text-center text-gray-400 text-sm">
Result: Wasted time, missed requirements, conflicts in PR review
</div>

---

# 🧠 Mindful Moment

<div class="flex flex-col items-center justify-center h-full">

<div class="p-8 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-lg max-w-4xl">
  <div class="text-2xl font-bold text-white mb-6 text-center">
    From Implementation to Orchestration
  </div>

  <div class="grid grid-cols-2 gap-8 text-sm">
    <div class="space-y-3">
      <div class="font-bold text-red-300">Traditional Thinking:</div>
      <div class="text-white italic">"I need to figure out all the steps before I start coding."</div>
    </div>

    <div class="space-y-3">
      <div class="font-bold text-green-300">AI-Native Thinking:</div>
      <div class="text-white italic">"AI can research my codebase and propose a plan—I validate the architecture, then execute."</div>
    </div>
  </div>
</div>

<div class="mt-6 text-center text-sm text-gray-400 italic max-w-3xl">
This isn't about letting AI make decisions for you. It's about using AI to do comprehensive analysis so you can focus on what requires human judgment.
</div>

</div>

---

# 🎯 What You'll Learn

<div class="grid grid-cols-1 gap-4 mt-8 text-sm">

<div class="p-4 bg-gradient-to-r from-blue-900/60 to-gray-800 rounded-lg border-l-4 border-blue-400">
  <div class="font-bold text-blue-300 mb-2">📋 Separate Research from Implementation</div>
  <div class="text-gray-300">Let plan agent analyze your codebase comprehensively before proposing changes</div>
</div>

<div class="p-4 bg-gradient-to-r from-blue-900/60 to-gray-800 rounded-lg border-l-4 border-blue-400">
  <div class="font-bold text-blue-300 mb-2">✅ Validate AI-Generated Plans</div>
  <div class="text-gray-300">Review implementation steps with your expertise to catch edge cases and architectural issues</div>
</div>

<div class="p-4 bg-gradient-to-r from-blue-900/60 to-gray-800 rounded-lg border-l-4 border-blue-400">
  <div class="font-bold text-blue-300 mb-2">🚀 Execute with Confidence</div>
  <div class="text-gray-300">Implement validated plans knowing dependencies are mapped and scope is clear</div>
</div>

<div class="p-4 bg-gradient-to-r from-blue-900/60 to-gray-800 rounded-lg border-l-4 border-blue-400">
  <div class="font-bold text-blue-300 mb-2">📊 Measure Real Impact</div>
  <div class="text-gray-300">Track time saved, conflicts avoided, and review cycles reduced</div>
</div>

</div>

<div class="mt-6 text-center">
  <span class="text-gray-400 text-sm">⏱️ Time: ~25 minutes | 🔨 Exercises: 3</span>
</div>

---

# 👥 Meet the Team

<div class="grid grid-cols-3 gap-6 mt-8">

<div class="p-5 bg-gradient-to-br from-blue-900/50 to-blue-800/30 rounded-lg border-2 border-blue-500">
  <div class="text-4xl mb-3 text-center">👨‍💼</div>
  <h3 class="text-lg font-bold text-blue-300 text-center">Marcus</h3>
  <p class="text-xs text-blue-200 text-center mb-3">DevOps Developer · 5 years</p>
  <blockquote class="text-xs italic text-gray-300">
    "Where do I even start with this complex feature?"
  </blockquote>
</div>

<div class="p-5 bg-gradient-to-br from-purple-900/50 to-purple-800/30 rounded-lg border-2 border-purple-500">
  <div class="text-4xl mb-3 text-center">🏛️</div>
  <h3 class="text-lg font-bold text-purple-300 text-center">David</h3>
  <p class="text-xs text-purple-200 text-center mb-3">Staff Engineer · 20 years</p>
  <blockquote class="text-xs italic text-gray-300">
    "Will AI plans miss the edge cases my experience catches?"
  </blockquote>
</div>

<div class="p-5 bg-gradient-to-br from-green-900/50 to-green-800/30 rounded-lg border-2 border-green-500">
  <div class="text-4xl mb-3 text-center">👩‍🔬</div>
  <h3 class="text-lg font-bold text-green-300 text-center">Sarah</h3>
  <p class="text-xs text-green-200 text-center mb-3">Senior Developer · 15 years</p>
  <blockquote class="text-xs italic text-gray-300">
    "Show me the time saved and conflicts avoided—then I'm convinced."
  </blockquote>
</div>

</div>

---
layout: two-cols
---

# ❌ The "Before"

<div class="space-y-4 mt-6">

<div class="p-4 bg-red-50 dark:bg-red-900/30 rounded-lg">
  <div class="font-bold text-red-600 dark:text-red-400 mb-2">⏱️ Manual Analysis</div>
  <div class="text-sm text-gray-700 dark:text-gray-300">35 minutes analyzing codebase, tracing dependencies, mapping file relationships</div>
</div>

<div class="p-4 bg-red-50 dark:bg-red-900/30 rounded-lg">
  <div class="font-bold text-red-600 dark:text-red-400 mb-2">🐛 Missed Dependencies</div>
  <div class="text-sm text-gray-700 dark:text-gray-300">5 missed dependencies per sprint causing integration conflicts</div>
</div>

<div class="p-4 bg-red-50 dark:bg-red-900/30 rounded-lg">
  <div class="font-bold text-red-600 dark:text-red-400 mb-2">🔄 Multiple Review Cycles</div>
  <div class="text-sm text-gray-700 dark:text-gray-300">3 architectural issues per plan, 2 review rounds to fix</div>
</div>

<div class="p-4 bg-red-50 dark:bg-red-900/30 rounded-lg">
  <div class="font-bold text-red-600 dark:text-red-400 mb-2">🧩 Integration Debugging</div>
  <div class="text-sm text-gray-700 dark:text-gray-300">25 minutes debugging integration issues, 40% test coverage gaps</div>
</div>

</div>

::right::

# ✨ The "After"

<div class="space-y-4 mt-6">

<div class="p-4 bg-green-50 dark:bg-green-900/30 rounded-lg">
  <div class="font-bold text-green-600 dark:text-green-400 mb-2">⚡ AI-Powered Research</div>
  <div class="text-sm text-gray-700 dark:text-gray-300">7 minutes with plan agent analyzing codebase comprehensively</div>
</div>

<div class="p-4 bg-green-50 dark:bg-green-900/30 rounded-lg">
  <div class="font-bold text-green-600 dark:text-green-400 mb-2">✅ Complete Mapping</div>
  <div class="text-sm text-gray-700 dark:text-gray-300">1 or fewer missed dependencies—AI catches what humans forget</div>
</div>

<div class="p-4 bg-green-50 dark:bg-green-900/30 rounded-lg">
  <div class="font-bold text-green-600 dark:text-green-400 mb-2">🎯 Validated Plans</div>
  <div class="text-sm text-gray-700 dark:text-gray-300">0 architectural issues after review, 1 review cycle</div>
</div>

<div class="p-4 bg-green-50 dark:bg-green-900/30 rounded-lg">
  <div class="font-bold text-green-600 dark:text-green-400 mb-2">🚀 Clean Execution</div>
  <div class="text-sm text-gray-700 dark:text-gray-300">5 minutes debugging, 85% initial test coverage</div>
</div>

</div>

---

# 💡 Understanding the Plan Agent

<div class="mt-6 space-y-4">

<div class="p-5 bg-gradient-to-r from-blue-900/60 to-gray-800 rounded-lg border-l-4 border-blue-400">
  <div class="grid grid-cols-12 gap-4">
    <div class="col-span-2 text-4xl text-center">🔍</div>
    <div class="col-span-10">
      <div class="font-bold text-blue-300 mb-1">Analyzes Comprehensively</div>
      <div class="text-gray-300 text-sm">Uses read-only tools—no code changes until you approve</div>
    </div>
  </div>
</div>

<div class="p-5 bg-gradient-to-r from-blue-900/60 to-gray-800 rounded-lg border-l-4 border-blue-400">
  <div class="grid grid-cols-12 gap-4">
    <div class="col-span-2 text-4xl text-center">🧩</div>
    <div class="col-span-10">
      <div class="font-bold text-blue-300 mb-1">Breaks Down Complexity</div>
      <div class="text-gray-300 text-sm">Sequences steps with clear dependencies and rationale</div>
    </div>
  </div>
</div>

<div class="p-5 bg-gradient-to-r from-blue-900/60 to-gray-800 rounded-lg border-l-4 border-blue-400">
  <div class="grid grid-cols-12 gap-4">
    <div class="col-span-2 text-4xl text-center">❓</div>
    <div class="col-span-10">
      <div class="font-bold text-blue-300 mb-1">Identifies Open Questions</div>
      <div class="text-gray-300 text-sm">Surfaces ambiguities that need clarification before coding</div>
    </div>
  </div>
</div>

<div class="p-5 bg-gradient-to-r from-blue-900/60 to-gray-800 rounded-lg border-l-4 border-blue-400">
  <div class="grid grid-cols-12 gap-4">
    <div class="col-span-2 text-4xl text-center">🏗️</div>
    <div class="col-span-10">
      <div class="font-bold text-blue-300 mb-1">Respects Your Architecture</div>
      <div class="text-gray-300 text-sm">References ARCHITECTURE.md and copilot-instructions.md automatically</div>
    </div>
  </div>
</div>

</div>

<div class="mt-4 text-center text-sm text-gray-400 italic">
Think of the plan agent as your research assistant who maps the terrain before you start building.
</div>

---

# � The Plan-First Workflow

<div class="flex flex-col items-center gap-4 mt-6">

<div class="grid grid-cols-4 gap-3 w-full">
  <div class="p-4 bg-blue-900/60 rounded-lg border-2 border-blue-400 text-center">
    <div class="text-3xl mb-2">🔍</div>
    <div class="font-bold text-blue-300 text-sm">Ask Plan Agent</div>
    <div class="text-gray-400 text-xs mt-2">Research the task comprehensively</div>
  </div>

  <div class="p-4 bg-purple-900/60 rounded-lg border-2 border-purple-400 text-center">
    <div class="text-3xl mb-2">👀</div>
    <div class="font-bold text-purple-300 text-sm">Review Draft</div>
    <div class="text-gray-400 text-xs mt-2">Validate steps, identify issues</div>
  </div>

  <div class="p-4 bg-yellow-900/60 rounded-lg border-2 border-yellow-400 text-center">
    <div class="text-3xl mb-2">🔄</div>
    <div class="font-bold text-yellow-300 text-sm">Iterate on Plan</div>
    <div class="text-gray-400 text-xs mt-2">Clarify requirements, adjust scope</div>
  </div>

  <div class="p-4 bg-green-900/60 rounded-lg border-2 border-green-400 text-center">
    <div class="text-3xl mb-2">✅</div>
    <div class="font-bold text-green-300 text-sm">Execute Plan</div>
    <div class="text-gray-400 text-xs mt-2">Implement with confidence</div>
  </div>
</div>

<div class="text-2xl text-gray-400 text-center mt-2">↓ ↓ ↓</div>

<div class="grid grid-cols-4 gap-4 w-full text-xs">
  <div class="p-3 bg-gray-800 rounded-lg">
    <div class="text-green-400 font-bold">✓ Catch issues early</div>
    <div class="text-gray-400">Architecture conflicts surface during planning</div>
  </div>

  <div class="p-3 bg-gray-800 rounded-lg">
    <div class="text-green-400 font-bold">✓ Shared understanding</div>
    <div class="text-gray-400">Plan becomes documentation</div>
  </div>

  <div class="p-3 bg-gray-800 rounded-lg">
    <div class="text-green-400 font-bold">✓ Better estimates</div>
    <div class="text-gray-400">Clear steps = accurate effort</div>
  </div>

  <div class="p-3 bg-gray-800 rounded-lg">
    <div class="text-green-400 font-bold">✓ Learning tool</div>
    <div class="text-gray-400">See how experts think</div>
  </div>
</div>

</div>

---

# 🔨 Exercises Overview

<div class="mt-8">

| # | Exercise | Lead | Time | Key Outcome |
|---|----------|------|------|-------------|
| **2.1** | Invoking Plan Mode | Marcus ⭐ | 10 min | Planning time: 35→7 minutes |
| **2.2** | Validating Plans | David ⭐ | 8 min | Architectural issues: 3→0 |
| **2.3** | Executing Plans | Marcus ⭐ | 7 min | Test coverage: 40%→85% |

</div>

<div class="mt-8 p-6 bg-gradient-to-r from-purple-900/40 to-gray-800 rounded-lg">
  <div class="font-bold text-purple-300 mb-3 text-lg">What You'll Build</div>
  <div class="grid grid-cols-3 gap-4 text-sm">
    <div class="space-y-1">
      <div class="text-blue-400 font-bold">📄 Implementation Plan</div>
      <div class="text-gray-400">Character detail feature breakdown</div>
    </div>
    <div class="space-y-1">
      <div class="text-blue-400 font-bold">✅ Validated Roadmap</div>
      <div class="text-gray-400">Expert-reviewed execution steps</div>
    </div>
    <div class="space-y-1">
      <div class="text-blue-400 font-bold">🚀 Feature Code</div>
      <div class="text-gray-400">Frontend, backend, database, tests</div>
    </div>
  </div>
</div>

---

# 📊 Success Metrics

<div class="grid grid-cols-2 gap-6 mt-8">

<div class="p-6 bg-gradient-to-br from-blue-900/40 to-gray-800 rounded-lg border-2 border-blue-500">
  <div class="text-4xl mb-3 text-center">⏱️</div>
  <div class="text-center">
    <div class="text-3xl font-bold text-blue-300">35 → 7 min</div>
    <div class="text-sm text-gray-400 mt-2">Planning Time Saved</div>
  </div>
  <div class="mt-4 text-xs text-gray-500 text-center">
    80% reduction in feature analysis time
  </div>
</div>

<div class="p-6 bg-gradient-to-br from-green-900/40 to-gray-800 rounded-lg border-2 border-green-500">
  <div class="text-4xl mb-3 text-center">🐛</div>
  <div class="text-center">
    <div class="text-3xl font-bold text-green-300">5 → 1</div>
    <div class="text-sm text-gray-400 mt-2">Missed Dependencies</div>
  </div>
  <div class="mt-4 text-xs text-gray-500 text-center">
    80% reduction in integration conflicts
  </div>
</div>

<div class="p-6 bg-gradient-to-br from-purple-900/40 to-gray-800 rounded-lg border-2 border-purple-500">
  <div class="text-4xl mb-3 text-center">🔄</div>
  <div class="text-center">
    <div class="text-3xl font-bold text-purple-300">2 → 1</div>
    <div class="text-sm text-gray-400 mt-2">Review Cycles</div>
  </div>
  <div class="mt-4 text-xs text-gray-500 text-center">
    50% reduction in PR iteration
  </div>
</div>

<div class="p-6 bg-gradient-to-br from-yellow-900/40 to-gray-800 rounded-lg border-2 border-yellow-500">
  <div class="text-4xl mb-3 text-center">✅</div>
  <div class="text-center">
    <div class="text-3xl font-bold text-yellow-300">40% → 85%</div>
    <div class="text-sm text-gray-400 mt-2">Initial Test Coverage</div>
  </div>
  <div class="mt-4 text-xs text-gray-500 text-center">
    Quality baked in from the start
  </div>
</div>

</div>

---
layout: center
---

# 💭 Marcus's Realization

<div class="flex flex-col items-center">

<div class="p-8 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-lg max-w-3xl">
  <div class="text-6xl mb-6 text-center">👨‍💼</div>
  <blockquote class="text-2xl text-white italic text-center leading-relaxed">
    "I used to spend 35 minutes mapping dependencies manually, checking imports, tracing data flow. Now plan mode does that research in 7 minutes and catches dependencies I would have missed. That's 28 minutes saved per feature—multiply by 8 features per sprint, that's 3.7 hours back every two weeks."
  </blockquote>
  <div class="text-right text-blue-200 mt-6 text-lg">
    — Marcus, DevOps Developer
  </div>
</div>

<div class="mt-8 text-center text-gray-400 text-sm italic max-w-2xl">
From manual analysis to AI-powered research—catching what humans miss while saving hours per sprint
</div>

</div>

---
layout: center
---

# 💭 David's Validation

<div class="flex flex-col items-center">

<div class="p-8 bg-gradient-to-r from-purple-600 to-purple-800 rounded-xl shadow-lg max-w-3xl">
  <div class="text-6xl mb-6 text-center">🏛️</div>
  <blockquote class="text-2xl text-white italic text-center leading-relaxed">
    "The plan agent generated the implementation steps in minutes—would've taken me 30 to map manually. But my 20 years of experience caught three architectural issues: missing error boundary, incorrect state management pattern, and a race condition. AI gives me the 80% fast; my expertise ensures the 20% is production-ready."
  </blockquote>
  <div class="text-right text-purple-200 mt-6 text-lg">
    — David, Staff Engineer
  </div>
</div>

<div class="mt-8 text-center text-gray-400 text-sm italic max-w-2xl">
AI amplifies expertise—it doesn't replace it. Senior judgment validates what AI proposes.
</div>

</div>

---

# 🔗 How Plan Mode Uses Your Foundation

<div class="mt-6 space-y-3">

<div class="flex items-start gap-4">
  <div class="text-4xl">📚</div>
  <div class="flex-1">
    <div class="p-4 bg-gradient-to-r from-blue-900/60 to-gray-800 rounded-lg border-l-4 border-blue-400">
      <div class="font-bold text-blue-300">ARCHITECTURE.md (Module 1)</div>
      <div class="text-gray-300 text-sm mt-2">Plan agent understands tech stack, folder structure, and data flow patterns</div>
    </div>
  </div>
</div>

<div class="flex items-start gap-4">
  <div class="text-4xl">⚙️</div>
  <div class="flex-1">
    <div class="p-4 bg-gradient-to-r from-green-900/60 to-gray-800 rounded-lg border-l-4 border-green-400">
      <div class="font-bold text-green-300">.github/copilot-instructions.md (Module 1)</div>
      <div class="text-gray-300 text-sm mt-2">Plans follow your coding standards and established patterns automatically</div>
    </div>
  </div>
</div>

<div class="flex items-start gap-4">
  <div class="text-4xl">🔍</div>
  <div class="flex-1">
    <div class="p-4 bg-gradient-to-r from-purple-900/60 to-gray-800 rounded-lg border-l-4 border-purple-400">
      <div class="font-bold text-purple-300">Existing Codebase</div>
      <div class="text-gray-300 text-sm mt-2">Analyzes current implementations to match style and identify dependencies</div>
    </div>
  </div>
</div>

<div class="text-2xl text-gray-400 text-center">↓</div>

<div class="p-6 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-lg text-center">
  <div class="text-xl font-bold text-white">
    Plans that respect your architecture, follow your conventions, and integrate seamlessly
  </div>
</div>

</div>

---

# 🎯 Key Takeaways

<div class="grid grid-cols-1 gap-4 mt-8">

<div class="p-5 bg-gradient-to-r from-blue-900/60 to-gray-800 rounded-lg border-l-4 border-blue-400">
  <div class="flex items-start gap-4">
    <div class="text-3xl">🔍</div>
    <div>
      <div class="font-bold text-blue-300 mb-2">Research Before Implementation</div>
      <div class="text-gray-300 text-sm">Plan agent analyzes comprehensively (read-only) so you validate before committing</div>
    </div>
  </div>
</div>

<div class="p-5 bg-gradient-to-r from-green-900/60 to-gray-800 rounded-lg border-l-4 border-green-400">
  <div class="flex items-start gap-4">
    <div class="text-3xl">👨‍💼</div>
    <div>
      <div class="font-bold text-green-300 mb-2">Human Expertise Validates</div>
      <div class="text-gray-300 text-sm">AI proposes, senior developers review—catching edge cases and architectural issues early</div>
    </div>
  </div>
</div>

<div class="p-5 bg-gradient-to-r from-purple-900/60 to-gray-800 rounded-lg border-l-4 border-purple-400">
  <div class="flex items-start gap-4">
    <div class="text-3xl">📊</div>
    <div>
      <div class="font-bold text-purple-300 mb-2">Measurable Time Savings</div>
      <div class="text-gray-300 text-sm">80% reduction in planning time, 50% fewer review cycles, 45% better test coverage</div>
    </div>
  </div>
</div>

<div class="p-5 bg-gradient-to-r from-yellow-900/60 to-gray-800 rounded-lg border-l-4 border-yellow-400">
  <div class="flex items-start gap-4">
    <div class="text-3xl">🔗</div>
    <div>
      <div class="font-bold text-yellow-300 mb-2">Compounds Module 1 Foundation</div>
      <div class="text-gray-300 text-sm">Plan mode automatically reads ARCHITECTURE.md and copilot-instructions.md—better foundation = better plans</div>
    </div>
  </div>
</div>

</div>

---

# ➡️ Next Up

<div class="flex flex-col items-center justify-center h-full">

<div class="p-8 bg-gradient-to-r from-purple-900/60 to-gray-800 rounded-xl max-w-3xl text-center">
  <div class="text-5xl mb-4">📝</div>
  <div class="text-2xl font-bold text-purple-300 mb-4">Module 3: Custom Prompts</div>
  <div class="text-lg text-gray-300 mb-6">
    Turn repeated requests into reusable prompt templates that capture domain expertise and accelerate common workflows.
  </div>
  <div class="text-sm text-gray-400 italic">
    "I just ran the same planning workflow three times. There has to be a way to template this..."
  </div>
  <div class="text-xs text-gray-500 mt-2">— Sarah, noticing patterns</div>
</div>

<div class="mt-8 grid grid-cols-3 gap-4 text-xs w-full max-w-3xl">
  <div class="p-3 bg-gray-800 rounded-lg text-center">
    <div class="text-green-400 font-bold">✓ Module 1</div>
    <div class="text-gray-400">Foundation set</div>
  </div>
  <div class="p-3 bg-blue-900/60 rounded-lg text-center border-2 border-blue-400">
    <div class="text-blue-300 font-bold">→ Module 2</div>
    <div class="text-gray-300">Plan mode mastered</div>
  </div>
  <div class="p-3 bg-gray-800 rounded-lg text-center">
    <div class="text-gray-500 font-bold">Module 3</div>
    <div class="text-gray-600">Custom prompts next</div>
  </div>
</div>

</div>

---
layout: end
---

# Module 2 Complete! 🎉

<div class="text-center mt-12">
  <div class="text-4xl mb-6">✅</div>
  <div class="text-xl text-gray-400 mb-8">
    You've learned to research before implementing, validate with expertise, and execute with confidence.
  </div>
  <div class="text-lg text-gray-500">
    Time to turn repeated workflows into reusable templates in Module 3!
  </div>
</div>
