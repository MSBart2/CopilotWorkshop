---
theme: default
background: https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=2128
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Module 3: Custom Prompts
  Transform repetitive prompts into reusable, standardized functions
drawings:
  persist: false
transition: slide-left
title: Module 3 - Custom Prompts
mdc: true
---

# Module 3: Custom Prompts

## ⏰ The Repetition Problem

<div class="pt-12">
  <span class="text-6xl">🔄</span>
</div>

<div class="mt-8 text-xl opacity-75">
  "I've typed this same prompt five times today. There has to be a better way."
</div>

<div class="abs-br m-6 flex gap-2">
  <span class="text-sm opacity-50">CopilotWorkshop Training</span>
</div>

---

# 📖 The Problem

<div class="grid grid-cols-2 gap-8 mt-8">

<div class="p-6 bg-red-900/30 rounded-lg border-l-4 border-red-500">
  <div class="text-3xl mb-4">😰</div>
  <h3 class="text-xl font-bold text-red-400 mb-3">The Pain of Repetition</h3>
  <ul class="text-sm text-gray-300 space-y-2">
    <li>✗ Same prompt typed 5× per day</li>
    <li>✗ 3 minutes each time to get it right</li>
    <li>✗ Inconsistent standards across team</li>
    <li>✗ Manual copying from standards docs</li>
    <li>✗ Junior devs missing key checks</li>
  </ul>
</div>

<div class="p-6 bg-gray-800 rounded-lg border-l-4 border-gray-600">
  <div class="text-3xl mb-4">💭</div>
  <h3 class="text-xl font-bold text-gray-300 mb-3">The Root Cause</h3>
  <blockquote class="text-sm text-gray-400 italic space-y-3">
    <p>"I've typed this same prompt five times today: 'Generate tests following our standards.' There has to be a better way."</p>
    <p class="text-xs text-gray-500">— Elena, Quality Champion (8 years)</p>
  </blockquote>
</div>

</div>

<div class="mt-8 text-center text-lg text-yellow-400">
  ⚠️ Your best prompts shouldn't require copy-paste
</div>

---

# 🎯 Learning Objectives

<div class="grid grid-cols-2 gap-6 mt-8">

<div class="p-5 bg-blue-900/60 rounded-lg border-2 border-blue-400">
  <div class="text-3xl mb-3">🔨</div>
  <h3 class="font-bold text-blue-300 mb-2">What You'll Create</h3>
  <ul class="text-sm text-gray-300 space-y-2">
    <li><code>.github/prompts/test-suite.prompt.md</code></li>
    <li><code>.github/prompts/react-review.prompt.md</code></li>
    <li><code>.github/prompts/debug-build.prompt.md</code></li>
  </ul>
</div>

<div class="p-5 bg-green-900/60 rounded-lg border-2 border-green-400">
  <div class="text-3xl mb-3">✨</div>
  <h3 class="font-bold text-green-300 mb-2">What You'll Achieve</h3>
  <ul class="text-sm text-gray-300 space-y-2">
    <li>3 min → 0.1 min per invocation</li>
    <li>14.5 minutes saved per day</li>
    <li>Standardized team practices</li>
    <li>Zero missed checks in reviews</li>
  </ul>
</div>

</div>

<div class="mt-8 p-4 bg-purple-900/40 rounded-lg border-l-4 border-purple-500 text-center">
  <span class="text-purple-300 font-semibold">Document prompts once. Invoke in 2 keystrokes. Scale across the team.</span>
</div>

---

# 👥 Key Personas

<div class="grid grid-cols-3 gap-4 mt-6">

<div class="p-4 bg-gradient-to-br from-green-900/60 to-green-800/40 rounded-lg border-2 border-green-500">
  <div class="text-4xl mb-2">👩‍🔬</div>
  <h3 class="text-lg font-bold text-white">Elena</h3>
  <p class="text-xs text-green-300 opacity-75 mb-2">Quality Champion · 8 years</p>
  <blockquote class="text-xs text-gray-300 italic">
    "I need test generation that follows our patterns every single time."
  </blockquote>
</div>

<div class="p-4 bg-gradient-to-br from-red-900/60 to-red-800/40 rounded-lg border-2 border-red-500">
  <div class="text-4xl mb-2">👩‍💻</div>
  <h3 class="text-lg font-bold text-white">Sarah</h3>
  <p class="text-xs text-red-300 opacity-75 mb-2">Senior Developer · 15 years</p>
  <blockquote class="text-xs text-gray-300 italic">
    "Code reviews should reference our standards automatically."
  </blockquote>
</div>

<div class="p-4 bg-gradient-to-br from-blue-900/60 to-blue-800/40 rounded-lg border-2 border-blue-500">
  <div class="text-4xl mb-2">👨‍💼</div>
  <h3 class="text-lg font-bold text-white">Marcus</h3>
  <p class="text-xs text-blue-300 opacity-75 mb-2">DevOps Developer · 5 years</p>
  <blockquote class="text-xs text-gray-300 italic">
    "Debugging needs structured context gathering."
  </blockquote>
</div>

</div>

<div class="mt-6 text-center text-sm text-gray-400">
  <span class="text-xl">⭐</span> Elena leads Exercise 3.1, Sarah leads 3.2, Marcus leads 3.3
</div>

---
layout: two-cols
---

# ❌ The "Before"

<div class="mt-6 space-y-4">

<div class="p-4 bg-red-900/30 rounded-lg">
  <div class="font-bold text-red-400 mb-2">⏱️ Time Per Prompt</div>
  <div class="text-sm text-gray-300">
    <span class="text-2xl font-bold text-red-300">3 minutes</span>
    <div>typing same prompt carefully</div>
  </div>
</div>

<div class="p-4 bg-red-900/30 rounded-lg">
  <div class="font-bold text-red-400 mb-2">🔄 Daily Invocations</div>
  <div class="text-sm text-gray-300">
    <span class="text-2xl font-bold text-red-300">5 times</span>
    <div>copy-pasting from notes</div>
  </div>
</div>

<div class="p-4 bg-red-900/30 rounded-lg">
  <div class="font-bold text-red-400 mb-2">⚠️ Missed Checks</div>
  <div class="text-sm text-gray-300">
    <span class="text-2xl font-bold text-red-300">3 per review</span>
    <div>inconsistent standards</div>
  </div>
</div>

</div>

::right::

# ✨ The "After"

<div class="mt-6 space-y-4">

<div class="p-4 bg-green-900/30 rounded-lg">
  <div class="font-bold text-green-400 mb-2">⚡ Instant Invocation</div>
  <div class="text-sm text-gray-300">
    <span class="text-2xl font-bold text-green-300">0.1 minutes</span>
    <div>type <code>/test-suite</code></div>
  </div>
</div>

<div class="p-4 bg-green-900/30 rounded-lg">
  <div class="font-bold text-green-400 mb-2">📈 Time Saved</div>
  <div class="text-sm text-gray-300">
    <span class="text-2xl font-bold text-green-300">14.5 min/day</span>
    <div>per developer</div>
  </div>
</div>

<div class="p-4 bg-green-900/30 rounded-lg">
  <div class="font-bold text-green-400 mb-2">🎯 Consistency</div>
  <div class="text-sm text-gray-300">
    <span class="text-2xl font-bold text-green-300">0 missed</span>
    <div>automatic standards reference</div>
  </div>
</div>

</div>

---

# 📚 Key Concepts: Prompt Files

<div class="grid grid-cols-2 gap-6 mt-8">

<div class="p-5 bg-gray-800 rounded-lg border-l-4 border-blue-500">
  <h3 class="text-xl font-bold text-blue-400 mb-3">What Are Prompt Files?</h3>
  <div class="text-sm text-gray-300 space-y-2 mb-4">
    <div><strong class="text-blue-300">Definition:</strong> Reusable functions for common tasks</div>
    <div><strong class="text-blue-300">Extension:</strong> <code>.prompt.md</code> files</div>
    <div><strong class="text-blue-300">Invocation:</strong> Type <code>/prompt-name</code> in chat</div>
  </div>
  <div class="text-xs text-gray-400 space-y-1">
    <div class="text-green-400">✓ On-demand execution</div>
    <div class="text-green-400">✓ Structured with YAML frontmatter</div>
    <div class="text-green-400">✓ Reference your documentation</div>
    <div class="text-green-400">✓ Accept input variables</div>
  </div>
</div>

<div class="p-5 bg-gray-800 rounded-lg border-l-4 border-purple-500">
  <h3 class="text-xl font-bold text-purple-400 mb-3">Structure</h3>
  <div class="text-xs text-gray-300 space-y-3">
    <div>
      <div class="font-bold text-purple-300 mb-1">Header (YAML):</div>
      <div class="text-gray-400">name, description, agent, model, tools</div>
    </div>
    <div>
      <div class="font-bold text-purple-300 mb-1">Body (Prompt):</div>
      <div class="text-gray-400">Instructions + links to standards</div>
    </div>
    <div>
      <div class="font-bold text-purple-300 mb-1">Variables:</div>
      <div class="text-gray-400"><code>${file}</code>, <code>${selection}</code>, <code>${input:name}</code></div>
    </div>
  </div>
</div>

</div>

<div class="mt-6 text-center text-sm text-gray-400">
  💡 Think of prompts as functions: invoke by name, accept parameters, return results
</div>

---

# 🔗 Workspace vs. User Prompts

<div class="flex flex-col items-center gap-4 mt-8">

<div class="p-5 bg-blue-900/60 rounded-lg border-2 border-blue-400 w-full max-w-2xl">
  <div class="text-2xl mb-2">🏢 Workspace Prompts</div>
  <div class="text-sm text-blue-300 font-semibold mb-2">Location: <code>.github/prompts/</code></div>
  <div class="text-xs text-gray-300 space-y-1">
    <div>✓ Team-wide standardized functions</div>
    <div>✓ Project-specific patterns</div>
    <div>✓ Reference local files (ARCHITECTURE.md)</div>
    <div>✓ Version controlled via Git</div>
  </div>
</div>

<div class="text-2xl text-gray-400">vs</div>

<div class="p-5 bg-purple-900/60 rounded-lg border-2 border-purple-400 w-full max-w-2xl">
  <div class="text-2xl mb-2">👤 User Prompts</div>
  <div class="text-sm text-purple-300 font-semibold mb-2">Location: VS Code profile folder</div>
  <div class="text-xs text-gray-300 space-y-1">
    <div>✓ Personal functions across all projects</div>
    <div>✓ Language-agnostic patterns</div>
    <div>✓ Synced automatically via Settings Sync</div>
    <div>✓ Not tied to specific project structure</div>
  </div>
</div>

</div>

---

# 💡 Variables and Context

<div class="grid grid-cols-2 gap-6 mt-8">

<div class="p-5 bg-gray-800 rounded-lg">
  <h3 class="font-bold text-blue-300 mb-3">Built-in Variables</h3>
  <div class="text-sm text-gray-300 space-y-2">
    <div class="flex items-start gap-2">
      <code class="text-blue-400">${workspaceFolder}</code>
      <span class="text-xs text-gray-400">Root path</span>
    </div>
    <div class="flex items-start gap-2">
      <code class="text-blue-400">${file}</code>
      <span class="text-xs text-gray-400">Current file path</span>
    </div>
    <div class="flex items-start gap-2">
      <code class="text-blue-400">${selection}</code>
      <span class="text-xs text-gray-400">Selected text</span>
    </div>
  </div>
</div>

<div class="p-5 bg-gray-800 rounded-lg">
  <h3 class="font-bold text-green-300 mb-3">Input Variables</h3>
  <div class="text-sm text-gray-300 space-y-2">
    <div class="flex items-start gap-2">
      <code class="text-green-400">${input:name}</code>
      <span class="text-xs text-gray-400">Prompts user for value</span>
    </div>
    <div class="flex items-start gap-2">
      <code class="text-green-400">${input:name:default}</code>
      <span class="text-xs text-gray-400">With placeholder</span>
    </div>
  </div>
</div>

</div>

<div class="mt-8 p-5 bg-gradient-to-r from-blue-900/40 to-purple-900/40 rounded-lg text-center">
  <div class="text-lg text-white font-semibold mb-2">
    Variables make prompts both consistent and flexible
  </div>
  <div class="text-sm text-gray-400">
    Built-ins for context, inputs for parameters
  </div>
</div>

---

# 🔨 Exercises

<div class="mt-6">

| # | Exercise | Lead | Time | Key Metric |
|---|----------|------|------|------------|
| **3.1** | Creating Your First Prompt File | Elena ⭐ | 10 min | 3→0.1 min per invocation |
| **3.2** | Referencing Standards and Docs | Sarah ⭐ | 8 min | 8→1 lines, 0 missed checks |
| **3.3** | Variable-Driven Prompts | Marcus ⭐ | 7 min | 5→0.5 min context gathering |

</div>

<div class="mt-8 grid grid-cols-3 gap-4">

<div class="p-3 bg-green-900/30 rounded-lg border-2 border-green-400">
  <h3 class="font-bold text-green-300 mb-2 text-sm">3.1: Test Suite</h3>
  <div class="text-xs text-gray-300 space-y-1">
    <div>• Create <code>test-suite.prompt.md</code></div>
    <div>• Reference testing standards</div>
    <div>• Invoke with <code>/test-suite</code></div>
  </div>
</div>

<div class="p-3 bg-red-900/30 rounded-lg border-2 border-red-400">
  <h3 class="font-bold text-red-300 mb-2 text-sm">3.2: React Review</h3>
  <div class="text-xs text-gray-300 space-y-1">
    <div>• Link to copilot-instructions.md</div>
    <div>• Automated standards checking</div>
    <div>• Zero manual setup</div>
  </div>
</div>

<div class="p-3 bg-blue-900/30 rounded-lg border-2 border-blue-400">
  <h3 class="font-bold text-blue-300 mb-2 text-sm">3.3: Debug Build</h3>
  <div class="text-xs text-gray-300 space-y-1">
    <div>• Use <code>${file}</code> and <code>${selection}</code></div>
    <div>• Structured debugging</div>
    <div>• 10× faster analysis</div>
  </div>
</div>

</div>

<div class="mt-6 text-center text-sm text-gray-400">
  📖 Detailed instructions in module folder
</div>

---
layout: center
---

# 💭 Elena's Realization

<div class="p-8 bg-gradient-to-br from-green-900/60 to-green-800/40 rounded-xl shadow-lg max-w-3xl">
  <div class="text-6xl mb-4 text-center">👩‍🔬</div>
  <blockquote class="text-2xl text-center text-white italic leading-relaxed">
    "I was spending 15 minutes per day just typing the same test generation prompt. Now I type <code>/test-suite</code> and it's done. That's 60+ hours per year saved."
  </blockquote>
  <div class="mt-4 text-center text-green-300">
    — Elena, Quality Champion (8 years)
  </div>
</div>

<div class="mt-8 text-center text-lg text-gray-400">
  Document once. Invoke forever. Scale across the team.
</div>

---

# 📊 Success Metrics

<div class="grid grid-cols-3 gap-4 mt-8">

<div class="p-5 bg-gradient-to-br from-red-900/40 to-gray-800 rounded-lg text-center">
  <div class="text-sm text-red-400 font-bold mb-2">Before</div>
  <div class="text-4xl font-bold text-white mb-1">3 min</div>
  <div class="text-xs text-gray-400">per prompt invocation</div>
  <div class="text-3xl text-gray-400 my-3">↓</div>
  <div class="text-sm text-green-400 font-bold mb-2">After</div>
  <div class="text-4xl font-bold text-white mb-1">0.1 min</div>
  <div class="text-xs text-gray-400">with <code>/prompt-name</code></div>
</div>

<div class="p-5 bg-gradient-to-br from-red-900/40 to-gray-800 rounded-lg text-center">
  <div class="text-sm text-red-400 font-bold mb-2">Before</div>
  <div class="text-4xl font-bold text-white mb-1">8 lines</div>
  <div class="text-xs text-gray-400">manual standards typing</div>
  <div class="text-3xl text-gray-400 my-3">↓</div>
  <div class="text-sm text-green-400 font-bold mb-2">After</div>
  <div class="text-4xl font-bold text-white mb-1">1 line</div>
  <div class="text-xs text-gray-400">automatic doc reference</div>
</div>

<div class="p-5 bg-gradient-to-br from-red-900/40 to-gray-800 rounded-lg text-center">
  <div class="text-sm text-red-400 font-bold mb-2">Before</div>
  <div class="text-4xl font-bold text-white mb-1">5 min</div>
  <div class="text-xs text-gray-400">context gathering for debug</div>
  <div class="text-3xl text-gray-400 my-3">↓</div>
  <div class="text-sm text-green-400 font-bold mb-2">After</div>
  <div class="text-4xl font-bold text-white mb-1">0.5 min</div>
  <div class="text-xs text-gray-400">with variables</div>
</div>

</div>

<div class="mt-8 p-5 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-lg text-center">
  <div class="text-2xl font-bold text-white">
    14.5 minutes saved per developer per day
  </div>
  <div class="mt-2 text-sm text-blue-200">
    That's 60+ hours per year per person
  </div>
</div>

---

# 🔗 How Prompt Files Reference Standards

<div class="flex flex-col items-center gap-4 mt-6">

<div class="p-4 bg-blue-900/60 rounded-lg border-2 border-blue-400 w-full max-w-2xl">
  <div class="text-lg mb-2">📚 Module 1: Created Documentation</div>
  <div class="text-xs text-gray-300 space-y-1">
    <div>✓ <code>ARCHITECTURE.md</code> — Structural understanding</div>
    <div>✓ <code>copilot-instructions.md</code> — Team patterns</div>
  </div>
</div>

<div class="text-3xl text-gray-400">↓</div>

<div class="p-4 bg-purple-900/60 rounded-lg border-2 border-purple-400 w-full max-w-2xl">
  <div class="text-lg mb-2">🔗 Module 3: Prompt Files Link to Docs</div>
  <div class="text-xs text-gray-300">
    <code class="text-purple-300">[copilot-instructions.md](../../.github/copilot-instructions.md)</code>
  </div>
</div>

<div class="text-3xl text-gray-400">↓</div>

<div class="p-4 bg-green-900/60 rounded-lg border-2 border-green-400 w-full max-w-2xl text-center">
  <div class="text-lg mb-2">✨ Result</div>
  <div class="text-sm text-green-300 font-bold">
    Standards documented once, enforced automatically through prompts
  </div>
  <div class="text-xs text-gray-400 mt-2">
    When your standards evolve, prompts automatically reference the latest version
  </div>
</div>

</div>

---

# 🔗 Compounding Value

<div class="mt-8">

<div class="p-4 bg-blue-900/40 rounded-lg border-l-4 border-blue-500 mb-4">
  <h3 class="text-lg font-bold text-blue-300 mb-2">What We Created</h3>
  <div class="grid grid-cols-3 gap-3 text-xs text-gray-300">
    <div>✓ <code>test-suite.prompt.md</code></div>
    <div>✓ <code>react-review.prompt.md</code></div>
    <div>✓ <code>debug-build.prompt.md</code></div>
  </div>
</div>

<div class="p-4 bg-purple-900/40 rounded-lg border-l-4 border-purple-500">
  <h3 class="text-lg font-bold text-purple-300 mb-3">How This Helps Future Modules</h3>
  <div class="text-xs text-gray-300 space-y-2">
    <div class="flex items-start gap-2">
      <span class="text-purple-400">→</span>
      <div><strong>Module 4:</strong> Custom instructions work alongside prompt files</div>
    </div>
    <div class="flex items-start gap-2">
      <span class="text-purple-400">→</span>
      <div><strong>Module 7:</strong> Custom agents can invoke your prompt files</div>
    </div>
    <div class="flex items-start gap-2">
      <span class="text-purple-400">→</span>
      <div><strong>Module 8:</strong> Agent skills build on prompt patterns</div>
    </div>
    <div class="flex items-start gap-2">
      <span class="text-purple-400">→</span>
      <div><strong>All Modules:</strong> Standardized functions compound over time</div>
    </div>
  </div>
</div>

</div>

<div class="mt-6 text-center text-lg text-yellow-300">
  ⏰ Every prompt saved is time multiplied
</div>

---

# 🧠 The Transformation

<div class="grid grid-cols-2 gap-8 mt-8">

<div class="p-6 bg-red-900/30 rounded-lg">
  <h3 class="text-xl font-bold text-red-400 mb-4">❌ Before This Module</h3>
  <ul class="text-sm text-gray-300 space-y-2">
    <li>Typing same prompts repeatedly</li>
    <li>Copy-pasting from personal notes</li>
    <li>Inconsistent standards application</li>
    <li>Junior devs missing key checks</li>
    <li>15 minutes wasted per day</li>
  </ul>
</div>

<div class="p-6 bg-green-900/30 rounded-lg">
  <h3 class="text-xl font-bold text-green-400 mb-4">✨ After This Module</h3>
  <ul class="text-sm text-gray-300 space-y-2">
    <li>Invoke best prompts in 2 keystrokes</li>
    <li>Automatic standards enforcement</li>
    <li>Everyone uses the same functions</li>
    <li>Junior devs get senior-quality results</li>
    <li>14.5 minutes saved per day</li>
  </ul>
</div>

</div>

<div class="mt-8 p-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg text-center">
  <div class="text-3xl font-bold text-white mb-2">
    Your best prompts are now team functions
  </div>
  <div class="text-lg text-blue-100 italic">
    Document once. Invoke forever. Scale knowledge.
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
      <span><code>test-suite.prompt.md</code> exists</span>
    </div>
    <div class="flex items-center gap-2">
      <input type="checkbox" class="w-4 h-4" />
      <span><code>react-review.prompt.md</code> exists</span>
    </div>
    <div class="flex items-center gap-2">
      <input type="checkbox" class="w-4 h-4" />
      <span><code>debug-build.prompt.md</code> exists</span>
    </div>
  </div>
</div>

<div class="p-5 bg-gray-800 rounded-lg">
  <h3 class="font-bold text-green-300 mb-3">Validated Improvements</h3>
  <div class="text-sm text-gray-300 space-y-2">
    <div class="flex items-center gap-2">
      <input type="checkbox" class="w-4 h-4" />
      <span>Prompts invoke in <0.1 min</span>
    </div>
    <div class="flex items-center gap-2">
      <input type="checkbox" class="w-4 h-4" />
      <span>Standards automatically referenced</span>
    </div>
    <div class="flex items-center gap-2">
      <input type="checkbox" class="w-4 h-4" />
      <span>Team uses consistent functions</span>
    </div>
  </div>
</div>

</div>

<div class="mt-8 text-center">
  <div class="text-sm text-gray-400 mb-2">Practices Applied</div>
  <div class="flex justify-center gap-4 text-xs">
    <span class="px-3 py-1 bg-blue-900/40 rounded-full">📚 Documentation as Leverage</span>
    <span class="px-3 py-1 bg-purple-900/40 rounded-full">🎯 Outcome-Focused Prompts</span>
    <span class="px-3 py-1 bg-green-900/40 rounded-full">🔄 Iterative Refinement</span>
  </div>
</div>

---
layout: center
---

# ➡️ Next Up: Module 4

<div class="p-8 bg-gradient-to-br from-purple-900/60 to-purple-800/40 rounded-xl shadow-lg max-w-3xl">
  <div class="text-5xl mb-4 text-center">🎯</div>
  <h2 class="text-3xl text-center text-white font-bold mb-4">
    Custom Instructions
  </h2>
  <div class="text-lg text-center text-purple-200 mb-6">
    Monday 1:30 PM
  </div>
  <div class="text-base text-gray-300 text-center mb-4">
    Prompt files handle specific tasks. Now let's teach Copilot about <strong>you</strong>—your role, preferences, and context that applies to every interaction.
  </div>
  <blockquote class="text-lg text-center text-white italic">
    "I love the prompt files, but I'm still explaining the same context in every chat session. Can I make Copilot remember who I am?"
  </blockquote>
  <div class="mt-2 text-center text-purple-300">
    — David, about to discover custom instructions
  </div>
</div>

---
layout: end
---

# Module 3 Complete! 🎉

<div class="text-center mt-12">
  <div class="text-6xl mb-6">✅</div>
  <div class="text-2xl text-gray-300 mb-4">
    You've transformed repetitive prompts into reusable functions
  </div>
  <div class="text-lg text-gray-400">
    Prompt files created. Standards referenced. Time saved.
  </div>
</div>

<div class="mt-12 text-center text-sm text-gray-500">
  Continue to Module 4: Custom Instructions →
</div>
