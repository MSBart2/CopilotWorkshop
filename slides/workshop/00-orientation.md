---
theme: default
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Module 0: The Challenge
  Building FanHub in 8 Hours
drawings:
  persist: false
transition: slide-left
title: Module 0 - The Challenge
module: workshop/00-orientation
mdc: true
status: active
updated: 2026-02-06
---

<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
  <!-- Animated gradient background -->
  <div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-purple-900/20"></div>

  <!-- Glowing orb behind logo -->
  <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-orange-500/20 via-red-500/20 to-purple-500/20 rounded-full blur-3xl"></div>

  <!-- Logo with glow effect -->
  <div class="relative z-10">
    <div class="absolute inset-0 blur-2xl opacity-50">
      <img src="./sdp-logo.png" class="w-72" alt="" />
    </div>
    <img src="./sdp-logo.png" class="w-72 relative" alt="SDP Logo" />
  </div>

  <!-- Title with gradient text -->
  <h1 class="!text-5xl !font-bold !mt-8 bg-gradient-to-r from-orange-400 via-red-400 to-purple-400 bg-clip-text text-transparent relative z-10">
    Module 0: The Challenge
  </h1>

  <!-- Subtitle with accent -->
  <div class="mt-4 relative z-10">
    <span class="px-6 py-2 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xl font-medium shadow-lg shadow-orange-500/25">
      ⏰ Building FanHub in 8 Hours
    </span>
  </div>

  <!-- Quote -->
  <div class="mt-8 text-lg opacity-60 max-w-xl italic relative z-10">
    "Prove that AI-assisted development is worth the hype by building something real. Fast."
  </div>

  <!-- Decorative line -->
  <div class="mt-6 w-32 h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent rounded-full relative z-10"></div>
</div>

---

# 📖 The Story

<div class="text-left">

### Monday Morning, 9:00 AM

Sarah walks into standup and drops a challenge:

> "A contractor bailed halfway through building a generic fan site. The code works, barely, but it's a mess—no documentation, inconsistent patterns, completely generic. Pick your favorite show and turn this into a production-ready fan hub. Authentication, search, admin tools, deployment pipeline, the works."

**You have until end of day. Oh, and you're all using GitHub Copilot.**

</div>

---

# 👥 Meet the Team

<div class="grid grid-cols-2 gap-4 mt-8">

<div class="p-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/20 rounded-lg">
  <div class="text-3xl mb-2">👨‍💼</div>
  <h3 class="text-lg font-bold">Sarah</h3>
  <p class="text-sm opacity-75">Senior Dev · 15 years</p>
  <p class="text-xs mt-2 italic">"Prove me wrong about this AI hype"</p>
</div>

<div class="p-4 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/20 rounded-lg">
  <div class="text-3xl mb-2">👨‍💻</div>
  <h3 class="text-lg font-bold">Marcus</h3>
  <p class="text-sm opacity-75">DevOps · 5 years</p>
  <p class="text-xs mt-2 italic">"This will take days to understand"</p>
</div>

<div class="p-4 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/20 rounded-lg">
  <div class="text-3xl mb-2">👩‍💻</div>
  <h3 class="text-lg font-bold">Priya</h3>
  <p class="text-sm opacity-75">Junior Dev · 1 year</p>
  <p class="text-xs mt-2 italic">"I don't know where to start"</p>
</div>

<div class="p-4 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/30 dark:to-orange-800/20 rounded-lg">
  <div class="text-3xl mb-2">👴</div>
  <h3 class="text-lg font-bold">David</h3>
  <p class="text-sm opacity-75">Staff Engineer · 20 years</p>
  <p class="text-xs mt-2 italic">"No architecture decisions recorded"</p>
</div>

</div>

---
layout: center
---

# 🎯 The Mission

<div class="max-w-4xl mx-auto mt-8">

<div class="p-6 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-lg text-center mb-8">
  <div class="text-3xl font-bold text-white mb-2">
    Transform a generic mess into a production-ready fan hub
  </div>
  <div class="text-blue-200 text-lg">
    In 8 hours, using GitHub Copilot
  </div>
</div>

<div class="grid grid-cols-2 gap-4 text-sm">
  <div class="p-4 bg-gray-800 rounded-lg border-l-4 border-green-500">
    <div class="font-bold text-green-400 mb-2">✅ By End of Day</div>
    <ul class="text-gray-300 space-y-1">
      <li>✓ Authentication & authorization</li>
      <li>✓ Advanced search</li>
      <li>✓ Admin dashboard</li>
      <li>✓ Comprehensive tests</li>
      <li>✓ Deployment pipeline</li>
      <li>✓ Show-specific branding</li>
    </ul>
  </div>
  <div class="p-4 bg-gray-800 rounded-lg border-l-4 border-blue-500">
    <div class="font-bold text-blue-400 mb-2">🎨 Your Choice</div>
    <div class="text-gray-300 space-y-1">
      <div>Pick your favorite show:</div>
      <div class="text-xs mt-2">
        📺 The Office • 🔦 Stranger Things<br/>
        🧪 Breaking Bad • 🛡️ The Mandalorian<br/>
        🐉 Game of Thrones • 🚀 The Expanse
      </div>
    </div>
  </div>
</div>

</div>

---
layout: two-cols
---

# The Evolution

<div class="space-y-6 mt-6">

<div class="p-4 bg-purple-900/40 rounded-lg border-l-4 border-purple-400">
  <div class="text-3xl mb-2">🧙‍♂️</div>
  <div class="font-bold text-purple-300 text-sm">1990-2015: Syntax Wizards</div>
  <ul class="text-xs text-gray-400 mt-2 space-y-1">
    <li>• Memorize language quirks</li>
    <li>• Clever solutions</li>
    <li>• Knowledge hoarding</li>
  </ul>
</div>

<div class="p-4 bg-yellow-900/40 rounded-lg border-l-4 border-yellow-400">
  <div class="text-3xl mb-2">🤠</div>
  <div class="font-bold text-yellow-300 text-sm">2015-2020: YAML Cowboys</div>
  <ul class="text-xs text-gray-400 mt-2 space-y-1">
    <li>• Configuration as code</li>
    <li>• Infrastructure everywhere</li>
    <li>• Copy-paste engineering</li>
  </ul>
</div>

</div>

::right::

<div class="ml-4 mt-6">

<div class="p-6 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg border-2 border-blue-400 shadow-xl">
  <div class="text-4xl mb-3">🧘</div>
  <div class="font-bold text-white text-xl mb-3">2020-Present:</div>
  <div class="font-bold text-blue-200 text-2xl mb-4">Markdown Whisperers</div>
  <ul class="text-sm text-blue-100 space-y-2">
    <li>✓ <strong>Clear intent</strong> over syntax</li>
    <li>✓ <strong>Understandable code</strong> over clever</li>
    <li>✓ <strong>Scaled knowledge</strong> via docs</li>
    <li>✓ <strong>Fast thinking</strong> over fast typing</li>
  </ul>
</div>

<div class="mt-6 p-4 bg-gray-800/60 rounded-lg text-center">
  <div class="text-xs text-gray-400 italic">
    "AI handles syntax.<br/>Humans handle judgment."
  </div>
</div>

<div class="mt-4 p-3 bg-gradient-to-r from-purple-600/40 to-blue-600/40 rounded-lg border border-purple-400/50 text-center">
  <div class="text-xs font-bold text-purple-200">💡 Markdown Is the Medium</div>
  <div class="text-[10px] text-gray-300 mt-1">
    Syntax is what AI writes for you.<br/>
    Markdown is what you write for AI.
  </div>
</div>

</div>

---
layout: center
---

# 🧠 The Mindset Shift

<div class="max-w-5xl mx-auto mt-6">

<div class="grid grid-cols-2 gap-6">

<div class="p-5 bg-red-900/30 rounded-lg border-2 border-red-500">
  <div class="text-center text-3xl mb-3">❌</div>
  <div class="font-bold text-red-400 text-center mb-4">The Old Way</div>
  <ul class="text-sm text-gray-300 space-y-2">
    <li>• Syntax mastery</li>
    <li>• Clever solutions</li>
    <li>• Knowledge hoarding</li>
    <li>• Fast typing</li>
  </ul>
  <div class="mt-4 p-3 bg-red-950/50 rounded text-xs text-red-300">
    Result: Onboarding takes months, fragile teams, hidden debt
  </div>
</div>

<div class="p-5 bg-green-900/30 rounded-lg border-2 border-green-500">
  <div class="text-center text-3xl mb-3">✅</div>
  <div class="font-bold text-green-400 text-center mb-4">The New Way</div>
  <ul class="text-sm text-gray-300 space-y-2">
    <li>• Clear intent</li>
    <li>• Understandable code</li>
    <li>• Scaled knowledge</li>
    <li>• Fast thinking</li>
  </ul>
  <div class="mt-4 p-3 bg-green-950/50 rounded text-xs text-green-300">
    Result: AI handles boilerplate, expertise matters more
  </div>
</div>

</div>

<div class="mt-8 p-5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-center">
  <div class="text-xl font-bold text-white">
    Experience doesn't become obsolete—it becomes the quality filter
  </div>
  <div class="text-sm text-blue-200 mt-2 italic">
    💡 Markdown is the medium — the best teams will be those with the best prose, not the most elegant syntax
  </div>
</div>

</div>

---

# The 5 Principles

<div class="grid grid-cols-1 gap-3 mt-6 text-sm">

<div class="p-4 bg-blue-900/40 rounded-lg border-l-4 border-blue-400 flex items-start gap-3">
  <div class="text-3xl">🔍</div>
  <div>
    <div class="font-bold text-blue-300 text-base">1. Clarity Over Cleverness</div>
    <div class="text-gray-400 mt-1">Clear thinking enables effective AI collaboration. If you can't explain it to a human, you can't explain it to AI.</div>
  </div>
</div>

<div class="p-4 bg-green-900/40 rounded-lg border-l-4 border-green-400 flex items-start gap-3">
  <div class="text-3xl">🎯</div>
  <div>
    <div class="font-bold text-green-300 text-base">2. Intent Over Implementation</div>
    <div class="text-gray-400 mt-1">Describe WHAT you want (outcomes, constraints), not HOW to build it. Your expertise is knowing what to build.</div>
  </div>
</div>

<div class="p-4 bg-purple-900/40 rounded-lg border-l-4 border-purple-400 flex items-start gap-3">
  <div class="text-3xl">📚</div>
  <div>
    <div class="font-bold text-purple-300 text-base">3. Documentation as Leverage</div>
    <div class="text-gray-400 mt-1">Write once, benefit infinitely. Documentation helps humans AND AI. Every piece pays dividends forever.</div>
  </div>
</div>

<div class="p-4 bg-orange-900/40 rounded-lg border-l-4 border-orange-400 flex items-start gap-3">
  <div class="text-3xl">🧩</div>
  <div>
    <div class="font-bold text-orange-300 text-base">4. Context is Everything</div>
    <div class="text-gray-400 mt-1">Quality of suggestions matches quality of context provided. AI reads context, not minds.</div>
  </div>
</div>

<div class="p-4 bg-red-900/40 rounded-lg border-l-4 border-red-400 flex items-start gap-3">
  <div class="text-3xl">⚖️</div>
  <div>
    <div class="font-bold text-red-300 text-base">5. Validate, Don't Automate</div>
    <div class="text-gray-400 mt-1">AI proposes; you decide. Your expertise catches what AI misses. Always review critically.</div>
  </div>
</div>

</div>

---

# 🗺️ The Customization Map

<div class="mt-6">

<div class="text-center mb-6 text-gray-400 text-sm italic">
  Five ways to customize GitHub Copilot—learn when to use what
</div>

<div class="grid grid-cols-5 gap-2 text-xs">

<div class="p-3 bg-blue-900/60 rounded-lg border-2 border-blue-400 text-center">
  <div class="text-2xl mb-2">📚</div>
  <div class="font-bold text-blue-300">Repo Instructions</div>
  <div class="text-gray-400 mt-2">Project README for AI</div>
  <div class="text-blue-200 mt-2 font-mono text-[10px]">copilot-instructions.md</div>
  <div class="mt-2 text-gray-500">Always on</div>
</div>

<div class="p-3 bg-green-900/60 rounded-lg border-2 border-green-400 text-center">
  <div class="text-2xl mb-2">📋</div>
  <div class="font-bold text-green-300">Custom Instructions</div>
  <div class="text-gray-400 mt-2">File-specific rules</div>
  <div class="text-green-200 mt-2 font-mono text-[10px]">*.instructions.md</div>
  <div class="mt-2 text-gray-500">By file pattern</div>
</div>

<div class="p-3 bg-purple-900/60 rounded-lg border-2 border-purple-400 text-center">
  <div class="text-2xl mb-2">⚡</div>
  <div class="font-bold text-purple-300">Prompts</div>
  <div class="text-gray-400 mt-2">Task template</div>
  <div class="text-purple-200 mt-2 font-mono text-[10px]">*.prompt.md</div>
  <div class="mt-2 text-gray-500">When invoked</div>
</div>

<div class="p-3 bg-orange-900/60 rounded-lg border-2 border-orange-400 text-center">
  <div class="text-2xl mb-2">🤖</div>
  <div class="font-bold text-orange-300">Agents</div>
  <div class="text-gray-400 mt-2">Specialist persona</div>
  <div class="text-orange-200 mt-2 font-mono text-[10px]">*.agent.md</div>
  <div class="mt-2 text-gray-500">@ mentioned</div>
</div>

<div class="p-3 bg-pink-900/60 rounded-lg border-2 border-pink-400 text-center">
  <div class="text-2xl mb-2">🎓</div>
  <div class="font-bold text-pink-300">Skills</div>
  <div class="text-gray-400 mt-2">Domain expert</div>
  <div class="text-pink-200 mt-2 font-mono text-[10px]">SKILL.md</div>
  <div class="mt-2 text-gray-500">Auto-loaded</div>
</div>

</div>

<div class="mt-6 p-4 bg-gray-800 rounded-lg">
  <div class="font-bold text-white mb-2 text-sm">Quick Decision</div>
  <div class="text-gray-400 text-xs space-y-1">
    <div>• <strong class="text-blue-300">Project-wide context?</strong> → Repo Instructions</div>
    <div>• <strong class="text-green-300">Specific file types?</strong> → Custom Instructions</div>
    <div>• <strong class="text-purple-300">Reusable task?</strong> → Prompts</div>
    <div>• <strong class="text-orange-300">Specialist role?</strong> → Agents</div>
    <div>• <strong class="text-pink-300">Domain knowledge?</strong> → Skills</div>
  </div>
</div>

</div>

---

# 👥 Meet The Team

<div class="grid grid-cols-3 gap-4 mt-6 text-xs">

<div class="p-4 bg-gradient-to-br from-blue-900/60 to-blue-800/40 rounded-lg border-2 border-blue-400">
  <div class="text-3xl mb-2 text-center">👨‍💼</div>
  <div class="font-bold text-blue-300 text-center text-base">Sarah</div>
  <div class="text-gray-400 text-center mb-3">Senior Dev · 15 years</div>
  <div class="text-gray-300 italic text-center">
    "I've seen hype cycles. Prove this is different."
  </div>
</div>

<div class="p-4 bg-gradient-to-br from-green-900/60 to-green-800/40 rounded-lg border-2 border-green-400">
  <div class="text-3xl mb-2 text-center">🔧</div>
  <div class="font-bold text-green-300 text-center text-base">Marcus</div>
  <div class="text-gray-400 text-center mb-3">DevOps Dev · 5 years</div>
  <div class="text-gray-300 italic text-center">
    "Can this help me build apps, not just infrastructure?"
  </div>
</div>

<div class="p-4 bg-gradient-to-br from-purple-900/60 to-purple-800/40 rounded-lg border-2 border-purple-400">
  <div class="text-3xl mb-2 text-center">👨‍💻</div>
  <div class="font-bold text-purple-300 text-center text-base">David</div>
  <div class="text-gray-400 text-center mb-3">Staff Engineer · 20 years</div>
  <div class="text-gray-300 italic text-center">
    "Will AI make my 20 years of expertise obsolete?"
  </div>
</div>

<div class="p-4 bg-gradient-to-br from-orange-900/60 to-orange-800/40 rounded-lg border-2 border-orange-400">
  <div class="text-3xl mb-2 text-center">🧪</div>
  <div class="font-bold text-orange-300 text-center text-base">Elena</div>
  <div class="text-gray-400 text-center mb-3">QA Engineer · 8 years</div>
  <div class="text-gray-300 italic text-center">
    "Will AI tests miss critical edge cases?"
  </div>
</div>

<div class="p-4 bg-gradient-to-br from-pink-900/60 to-pink-800/40 rounded-lg border-2 border-pink-400">
  <div class="text-3xl mb-2 text-center">📱</div>
  <div class="font-bold text-pink-300 text-center text-base">Rafael</div>
  <div class="text-gray-400 text-center mb-3">Product Manager · 10 years</div>
  <div class="text-gray-300 italic text-center">
    "Can this bridge business and technical faster?"
  </div>
</div>

<div class="p-4 bg-gradient-to-br from-yellow-900/60 to-yellow-800/40 rounded-lg border-2 border-yellow-400">
  <div class="text-3xl mb-2 text-center">👩‍💻</div>
  <div class="font-bold text-yellow-300 text-center text-base">Priya</div>
  <div class="text-gray-400 text-center mb-3">Junior Dev · 1 year</div>
  <div class="text-gray-300 italic text-center">
    "How do I avoid asking 'dumb' questions?"
  </div>
</div>

</div>

<div class="mt-6 text-center text-sm text-gray-400">
  Each persona has a transformation arc throughout this 8-hour journey
</div>

---

# 🔨 Exercises

<div class="mt-6">

<table class="text-xs w-full">
  <thead>
    <tr class="bg-gray-800">
      <th class="p-2 text-left">#</th>
      <th class="p-2 text-left">Exercise</th>
      <th class="p-2 text-left">Lead</th>
      <th class="p-2 text-center">Time</th>
      <th class="p-2 text-left">What You'll Do</th>
    </tr>
  </thead>
  <tbody>
    <tr class="bg-gray-900/50">
      <td class="p-2 font-bold text-blue-400">0.1</td>
      <td class="p-2">Master Context Variables</td>
      <td class="p-2">All ⭐</td>
      <td class="p-2 text-center">10 min</td>
      <td class="p-2 text-gray-400">Learn #file, @workspace, #codebase, #fetch, images</td>
    </tr>
    <tr class="bg-gray-900/30">
      <td class="p-2 font-bold text-blue-400">0.2</td>
      <td class="p-2">Experience "The Struggle"</td>
      <td class="p-2">All ⭐</td>
      <td class="p-2 text-center">10 min</td>
      <td class="p-2 text-gray-400">Build with unconfigured Copilot—feel the pain</td>
    </tr>
  </tbody>
</table>

<div class="mt-6 p-4 bg-yellow-900/30 rounded-lg border-l-4 border-yellow-500">
  <div class="font-bold text-yellow-400 mb-2">💡 Exercise 0.2 is Critical</div>
  <div class="text-gray-300 text-sm">
    You <strong>must</strong> experience frustration with generic Copilot suggestions before Module 1.
    This "before" state makes the transformation meaningful.
  </div>
</div>

</div>

---
layout: two-cols
---

# ❌ The "Before"

<div class="mt-6 space-y-3">

<div class="p-4 bg-red-900/30 rounded-lg border-l-4 border-red-500">
  <div class="font-bold text-red-400 mb-2">What You'll Experience</div>
  <ul class="text-sm text-gray-300 space-y-2">
    <li>❌ Generic suggestions</li>
    <li>❌ Wrong architectural patterns</li>
    <li>❌ Show-generic content</li>
    <li>❌ Inconsistent styles</li>
    <li>❌ Multiple failed attempts</li>
  </ul>
</div>

<div class="p-4 bg-gray-800 rounded-lg">
  <div class="font-bold text-gray-400 mb-2 text-sm">💭 Team Reactions</div>
  <div class="text-xs text-gray-400 space-y-2">
    <div><strong>Marcus:</strong> "Fighting with autocomplete..."</div>
    <div><strong>Priya:</strong> "Am I using it wrong?"</div>
    <div><strong>Sarah:</strong> "Generic garbage."</div>
    <div><strong>David:</strong> "AI doesn't know our patterns."</div>
  </div>
</div>

</div>

::right::

# ✨ The Promise

<div class="ml-4 mt-6 space-y-3">

<div class="p-4 bg-green-900/30 rounded-lg border-l-4 border-green-500">
  <div class="font-bold text-green-400 mb-2">After Configuration</div>
  <ul class="text-sm text-gray-300 space-y-2">
    <li>✅ Context-aware suggestions</li>
    <li>✅ Follows your architecture</li>
    <li>✅ Show-specific content</li>
    <li>✅ Consistent patterns</li>
    <li>✅ First-try success</li>
  </ul>
</div>

<div class="p-5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
  <div class="font-bold text-white text-base mb-2">The Transformation</div>
  <div class="text-blue-100 text-sm">
    From frustration to flow.<br/>
    From generic to domain-specific.<br/>
    From guessing to understanding.
  </div>
</div>

</div>

---
layout: center
---

# 📊 Success Metrics

<div class="max-w-4xl mx-auto mt-6">

<div class="text-center mb-6 text-gray-400">
  By the end of Module 0, you'll have...
</div>

<div class="grid grid-cols-2 gap-6">

<div class="space-y-3">
  <div class="p-4 bg-blue-900/40 rounded-lg border-l-4 border-blue-400">
    <div class="flex items-center gap-3">
      <div class="text-2xl">🎯</div>
      <div>
        <div class="font-bold text-blue-300">Environment Ready</div>
        <div class="text-xs text-gray-400 mt-1">FanHub running locally</div>
      </div>
    </div>
  </div>

  <div class="p-4 bg-green-900/40 rounded-lg border-l-4 border-green-400">
    <div class="flex items-center gap-3">
      <div class="text-2xl">📺</div>
      <div>
        <div class="font-bold text-green-300">Show Selected</div>
        <div class="text-xs text-gray-400 mt-1">Your fan site theme chosen</div>
      </div>
    </div>
  </div>
</div>

<div class="space-y-3">
  <div class="p-4 bg-purple-900/40 rounded-lg border-l-4 border-purple-400">
    <div class="flex items-center gap-3">
      <div class="text-2xl">😤</div>
      <div>
        <div class="font-bold text-purple-300">Frustration Felt</div>
        <div class="text-xs text-gray-400 mt-1">Experienced generic AI struggles</div>
      </div>
    </div>
  </div>

  <div class="p-4 bg-orange-900/40 rounded-lg border-l-4 border-orange-400">
    <div class="flex items-center gap-3">
      <div class="text-2xl">🧠</div>
      <div>
        <div class="font-bold text-orange-300">Mindset Shifted</div>
        <div class="text-xs text-gray-400 mt-1">5 principles internalized</div>
      </div>
    </div>
  </div>
</div>

</div>

<div class="mt-8 p-4 bg-gray-800 rounded-lg text-center">
  <div class="text-sm text-gray-300">
    Ready to see everything change in <strong class="text-blue-400">Module 1</strong>
  </div>
</div>

</div>

---
layout: center
---

# 🔗 The Compounding Effect

<div class="max-w-3xl mx-auto mt-8">

<div class="p-6 bg-gradient-to-r from-purple-900/60 to-blue-900/60 rounded-lg border-2 border-purple-400">
  <div class="text-center mb-4 text-xl font-bold text-white">
    Each module builds on the previous
  </div>
  <div class="text-sm text-gray-300 space-y-2">
    <div>📚 <strong>Module 1:</strong> Repository Instructions → Project-wide context</div>
    <div>📋 <strong>Module 2:</strong> Custom Instructions → File-specific rules</div>
    <div>⚡ <strong>Module 3:</strong> Prompts → Reusable task templates</div>
    <div>🤖 <strong>Module 4:</strong> Agents → Specialist personas</div>
    <div>🎓 <strong>Module 5:</strong> Skills → Domain expertise</div>
  </div>
</div>

<div class="mt-8 text-center text-gray-400 text-sm italic">
  By Module 9, all five customizations work together—that's when the magic happens
</div>

</div>

---
layout: center
---

# ➡️ Next Steps

<div class="max-w-3xl mx-auto mt-8 space-y-6">

<div class="p-6 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl text-center">
  <div class="text-2xl font-bold text-white mb-2">
    Module 1: Repository Instructions
  </div>
  <div class="text-blue-200">
    Watch Marcus show how configuration changes everything
  </div>
</div>

<div class="grid grid-cols-3 gap-4 text-sm">
  <div class="p-4 bg-gray-800 rounded-lg text-center">
    <div class="text-2xl mb-2">⏰</div>
    <div class="font-bold text-gray-300">10:00 AM</div>
    <div class="text-xs text-gray-500 mt-1">Monday continues</div>
  </div>
  <div class="p-4 bg-gray-800 rounded-lg text-center">
    <div class="text-2xl mb-2">📚</div>
    <div class="font-bold text-gray-300">First Configuration</div>
    <div class="text-xs text-gray-500 mt-1">copilot-instructions.md</div>
  </div>
  <div class="p-4 bg-gray-800 rounded-lg text-center">
    <div class="text-2xl mb-2">✨</div>
    <div class="font-bold text-gray-300">Everything Changes</div>
    <div class="text-xs text-gray-500 mt-1">Same code, better AI</div>
  </div>
</div>

<div class="mt-6 p-4 bg-yellow-900/30 rounded-lg border-l-4 border-yellow-500 text-center">
  <div class="text-yellow-400 font-bold mb-2">⚠️ Don't Skip Exercise 0.2</div>
  <div class="text-gray-300 text-sm">
    The transformation only matters if you experience the problem first
  </div>
</div>

</div>

---
layout: end
---

# Ready to Begin?

<div class="text-center mt-12">
  <div class="text-6xl mb-6">🚀</div>
  <div class="text-2xl text-gray-300 mb-4">
    The 8-hour transformation starts now
  </div>
  <div class="text-gray-500">
    Module 0: Orientation — Complete
  </div>
</div>
