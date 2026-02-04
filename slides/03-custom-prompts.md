---
theme: default
background: https://source.unsplash.com/collection/94734566/1920x1080
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Module 3: Custom Prompts
  CopilotWorkshop Training - Transforming repetitive prompts into reusable functions
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

<div class="abs-br m-6 flex gap-2">
  <span class="text-sm opacity-50">CopilotWorkshop Training</span>
</div>

---

# 📖 The Problem

<div class="text-left space-y-4 mt-8">

<div class="p-4 bg-red-900/30 rounded-lg border-l-4 border-red-500">
  <div class="font-bold text-red-400 mb-2">😰 Elena's Frustration</div>
  <blockquote class="italic text-gray-300">
    "I've typed this same prompt five times today: 'Generate tests following our standards.' There has to be a better way."
  </blockquote>
</div>

<div class="mt-6 text-gray-400 text-sm space-y-2">
  <div>✅ <strong>Module 1:</strong> ARCHITECTURE.md and copilot-instructions.md established foundations</div>
  <div>✅ <strong>Module 2:</strong> Plan mode reduced planning time from 35 to 7 minutes</div>
  <div>❓ <strong>Module 3 Challenge:</strong> Repetitive, specialized prompts requiring specific context</div>
</div>

</div>

---

# 🧠 Mindful Moment

<div class="mt-12 space-y-8">

<div class="grid grid-cols-2 gap-8">
  <div class="p-6 bg-red-900/30 rounded-lg border-2 border-red-500">
    <div class="font-bold text-red-400 mb-3">❌ Traditional Thinking</div>
    <div class="text-gray-300">"I'll just type the prompt again—it's only a minute."</div>
  </div>
  <div class="p-6 bg-green-900/30 rounded-lg border-2 border-green-500">
    <div class="font-bold text-green-400 mb-3">✅ AI-Native Thinking</div>
    <div class="text-gray-300">"Document this prompt once, invoke it in 2 keystrokes, ensure the team uses the same standards."</div>
  </div>
</div>

<div class="p-5 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-lg text-center mt-8">
  <div class="text-xl font-bold text-white">Knowledge scales across the entire team.</div>
</div>

</div>

---

# 🎯 What You'll Learn

<div class="text-left space-y-3 mt-8 text-sm">

<div class="p-4 bg-blue-900/60 rounded-lg border-l-4 border-blue-400">
  <div class="font-bold text-blue-300 mb-2">Turn Best Prompts into Reusable Functions</div>
  <div class="text-gray-300">Create workspace prompts for code review and test generation</div>
</div>

<div class="p-4 bg-blue-900/60 rounded-lg border-l-4 border-blue-400">
  <div class="font-bold text-blue-300 mb-2">Configure YAML Frontmatter</div>
  <div class="text-gray-300">Control agent behavior, model selection, and tool availability</div>
</div>

<div class="p-4 bg-blue-900/60 rounded-lg border-l-4 border-blue-400">
  <div class="font-bold text-blue-300 mb-2">Measure Time Savings</div>
  <div class="text-gray-300">Track prompt reuse and consistency improvements</div>
</div>

<div class="p-4 bg-blue-900/60 rounded-lg border-l-4 border-blue-400">
  <div class="font-bold text-blue-300 mb-2">Document Specialized Functions</div>
  <div class="text-gray-300">Invoke complex workflows in seconds with standardized context</div>
</div>

</div>

<div class="mt-6 text-center text-gray-400">
  <strong>Time:</strong> ~20 minutes | <strong>Exercises:</strong> 3
</div>

---

# 💡 Understanding Prompt Files

<div class="text-left space-y-4 mt-6 text-sm">

<div class="p-4 bg-gray-800 rounded-lg">
  <div class="font-bold text-white mb-2">What are Prompt Files?</div>
  <div class="text-gray-300">Markdown files with <code>.prompt.md</code> extension that define reusable functions for common development tasks.</div>
</div>

<div class="grid grid-cols-2 gap-4">
  <div class="p-3 bg-green-900/60 rounded-lg border-2 border-green-400">
    <div class="text-green-300 font-bold mb-2">✨ Key Characteristics</div>
    <ul class="text-gray-300 space-y-1 text-xs">
      <li>• On-demand execution via <code>/command</code></li>
      <li>• Structured with YAML frontmatter</li>
      <li>• Reference your docs automatically</li>
      <li>• Scoped to workspace or user</li>
      <li>• Composable with variables</li>
    </ul>
  </div>
  <div class="p-3 bg-blue-900/60 rounded-lg border-2 border-blue-400">
    <div class="text-blue-300 font-bold mb-2">📦 Two Scopes</div>
    <ul class="text-gray-300 space-y-1 text-xs">
      <li><strong>Workspace:</strong> <code>.github/prompts/</code></li>
      <li>→ Team-wide, project-specific</li>
      <li><strong>User:</strong> VS Code profile</li>
      <li>→ Personal, synced across machines</li>
    </ul>
  </div>
</div>

<div class="p-4 bg-gradient-to-r from-purple-900/40 to-gray-800 rounded-lg text-center">
  <span class="text-white font-bold">💡 Think of prompts as functions you can invoke</span>
</div>

</div>

---

# 📚 Prompt File Structure

<div class="mt-6 space-y-4">

<div class="grid grid-cols-2 gap-6 text-xs">
  <div>
    <div class="font-bold text-blue-300 mb-2">Header (YAML Frontmatter)</div>
    <pre class="bg-gray-900 p-3 rounded-lg text-gray-300"><code>---
name: react-review
description: 'Review React component'
agent: 'ask'
model: 'GPT-4o'
tools: ['githubRepo']
---</code></pre>
  </div>
  <div>
    <div class="font-bold text-green-300 mb-2">Body (Prompt Instructions)</div>
    <pre class="bg-gray-900 p-3 rounded-lg text-gray-300"><code>Review this React component against
our standards in copilot-instructions.md.

Check for:
* TypeScript types
* Error boundaries
* Accessibility
* Performance

Reference file: $&#123;file&#125;</code></pre>
  </div>
</div>

<div class="grid grid-cols-3 gap-3 mt-6">
  <div class="p-3 bg-gray-800 rounded-lg">
    <div class="text-white font-bold text-xs mb-1">name</div>
    <div class="text-gray-400 text-xs">Command after <code>/</code></div>
  </div>
  <div class="p-3 bg-gray-800 rounded-lg">
    <div class="text-white font-bold text-xs mb-1">agent</div>
    <div class="text-gray-400 text-xs">ask, edit, or agent</div>
  </div>
  <div class="p-3 bg-gray-800 rounded-lg">
    <div class="text-white font-bold text-xs mb-1">tools</div>
    <div class="text-gray-400 text-xs">Available tools</div>
  </div>
</div>

</div>

---

# 🔧 Variables and Context

<div class="mt-8 space-y-4 text-sm">

<div class="grid grid-cols-2 gap-6">
  <div class="p-4 bg-blue-900/60 rounded-lg">
    <div class="font-bold text-blue-300 mb-3">Built-in Variables</div>
    <ul class="text-gray-300 space-y-2 text-xs">
      <li><code>$&#123;workspaceFolder&#125;</code> — Root path</li>
      <li><code>$&#123;file&#125;</code> — Current file path</li>
      <li><code>$&#123;selection&#125;</code> — Selected text</li>
    </ul>
  </div>
  <div class="p-4 bg-green-900/60 rounded-lg">
    <div class="font-bold text-green-300 mb-3">Input Variables</div>
    <ul class="text-gray-300 space-y-2 text-xs">
      <li><code>$&#123;input:componentName&#125;</code></li>
      <li>→ Prompts user for value</li>
      <li><code>$&#123;input:featureName:default&#125;</code></li>
      <li>→ With placeholder text</li>
    </ul>
  </div>
</div>

<div class="p-4 bg-gray-800 rounded-lg">
  <div class="font-bold text-white mb-2">Example: Dynamic Component Generator</div>
  <pre class="text-gray-300 text-xs"><code>Generate a React component named $&#123;input:componentName&#125;
following patterns in [components/]($&#123;workspaceFolder&#125;/src/components/)</code></pre>
</div>

</div>

---

# 📖 Referencing Documentation

<div class="mt-8 space-y-4">

<div class="p-5 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-lg text-center">
  <div class="text-xl font-bold text-white">The real power: linking to your standards</div>
</div>

<div class="p-4 bg-gray-800 rounded-lg text-xs">
<pre class="text-gray-300"><code>---
name: test-suite
description: 'Generate comprehensive test suite'
agent: 'agent'
tools: ['codebase']
---

Generate test suite for $&#123;file&#125; following:
* Testing standards: [copilot-instructions.md](../../.github/copilot-instructions.md)
* Architecture patterns: [ARCHITECTURE.md](../docs/ARCHITECTURE.md)
* Example tests: [__tests__/README.md](../../fanhub/frontend/__tests__/README.md)

Include unit tests, integration tests, edge cases from QA checklist</code></pre>
</div>

<div class="mt-4 text-center text-sm text-gray-400 italic">
  When copilot-instructions.md changes, all prompts automatically reference the latest version.
</div>

</div>

---
layout: two-cols
---

# ❌ The "Before"

<div class="space-y-4 mt-8 text-sm">

<div class="p-4 bg-red-900/30 rounded-lg">
  <div class="font-bold text-red-400 mb-2">Elena's Test Generation</div>
  <ul class="text-gray-300 space-y-2 text-xs">
    <li>⏱️ 3 minutes per invocation</li>
    <li>🔁 5 invocations per day</li>
    <li>❌ Inconsistent standards</li>
    <li>📋 Manual typing of patterns</li>
  </ul>
</div>

<div class="p-4 bg-red-900/30 rounded-lg">
  <div class="font-bold text-red-400 mb-2">Sarah's React Review</div>
  <ul class="text-gray-300 space-y-2 text-xs">
    <li>📝 8 lines manually typed</li>
    <li>⏱️ 3 minutes setup time</li>
    <li>⚠️ Missed checks</li>
  </ul>
</div>

<div class="p-4 bg-red-900/30 rounded-lg">
  <div class="font-bold text-red-400 mb-2">Marcus' Build Debugging</div>
  <ul class="text-gray-300 space-y-2 text-xs">
    <li>⏱️ 5 minutes gathering context</li>
    <li>📂 Manual log collection</li>
    <li>🔍 Env var copy/paste</li>
  </ul>
</div>

</div>

::right::

# ✨ The "After"

<div class="space-y-4 mt-8 text-sm">

<div class="p-4 bg-green-900/30 rounded-lg">
  <div class="font-bold text-green-400 mb-2">/test-suite Prompt</div>
  <ul class="text-gray-300 space-y-2 text-xs">
    <li>⚡ 0.1 minutes per invocation</li>
    <li>🎯 Same 5 invocations/day</li>
    <li>✅ Consistent standards</li>
    <li>💾 <strong>14.5 min/day saved</strong></li>
  </ul>
</div>

<div class="p-4 bg-green-900/30 rounded-lg">
  <div class="font-bold text-green-400 mb-2">/react-review Prompt</div>
  <ul class="text-gray-300 space-y-2 text-xs">
    <li>📝 1 line: <code>/react-review</code></li>
    <li>⚡ 0.1 minutes setup</li>
    <li>✅ 0 missed checks</li>
  </ul>
</div>

<div class="p-4 bg-green-900/30 rounded-lg">
  <div class="font-bold text-green-400 mb-2">/debug-build Prompt</div>
  <ul class="text-gray-300 space-y-2 text-xs">
    <li>⚡ 0.5 minutes context</li>
    <li>🚀 10× faster debugging</li>
    <li>📊 Auto-gathered vars</li>
  </ul>
</div>

</div>

---

# 🔨 Exercises

<div class="mt-8">

| # | Exercise | Lead | Support | Key Metrics |
|---|----------|------|---------|-------------|
| **3.1** | Creating Your First Prompt File | Elena ⭐ | Marcus | 3→0.1 min per invocation<br/>14.5 min/day saved |
| **3.2** | Referencing Standards and Docs | Sarah ⭐ | David | 8→1 lines<br/>3→0.1 min setup<br/>0 missed checks |
| **3.3** | Variable-Driven Prompts | Marcus ⭐ | Rafael, Elena | 5→0.5 min context<br/>10× faster debugging |

<div class="mt-6 p-4 bg-blue-900/60 rounded-lg">
  <div class="font-bold text-blue-300 mb-2">What You'll Build</div>
  <div class="text-gray-300 text-sm space-y-1">
    <div>✅ <code>.github/prompts/test-suite.prompt.md</code> — Standardized test generation</div>
    <div>✅ <code>.github/prompts/react-review.prompt.md</code> — Automated standards validation</div>
    <div>✅ <code>.github/prompts/debug-build.prompt.md</code> — Structured build analysis</div>
  </div>
</div>

</div>

---

# � Persona Journeys

<div class="grid grid-cols-3 gap-4 mt-8">

<div class="p-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/40 dark:to-blue-800/40 rounded-lg">
  <div class="text-3xl mb-2">👩‍💻</div>
  <h3 class="text-lg font-bold text-blue-800 dark:text-blue-300">Elena</h3>
  <p class="text-xs opacity-75 mb-3">Quality Champion · 8 years</p>
  <blockquote class="text-xs italic text-gray-700 dark:text-gray-300">
    "I've typed this same prompt five times today. There has to be a better way."
  </blockquote>
  <div class="mt-3 text-xs text-green-700 dark:text-green-400 font-bold">
    → Saves 14.5 min/day with /test-suite
  </div>
</div>

<div class="p-4 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/40 dark:to-purple-800/40 rounded-lg">
  <div class="text-3xl mb-2">👩‍💼</div>
  <h3 class="text-lg font-bold text-purple-800 dark:text-purple-300">Sarah</h3>
  <p class="text-xs opacity-75 mb-3">Skeptical Senior · 15 years</p>
  <blockquote class="text-xs italic text-gray-700 dark:text-gray-300">
    "React reviews now reference our standards automatically—no more manual typing."
  </blockquote>
  <div class="mt-3 text-xs text-green-700 dark:text-green-400 font-bold">
    → 0 missed checks, standards enforced
  </div>
</div>

<div class="p-4 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/40 dark:to-orange-800/40 rounded-lg">
  <div class="text-3xl mb-2">👨‍💻</div>
  <h3 class="text-lg font-bold text-orange-800 dark:text-orange-300">Marcus</h3>
  <p class="text-xs opacity-75 mb-3">DevOps Developer · 5 years</p>
  <blockquote class="text-xs italic text-gray-700 dark:text-gray-300">
    "Build debugging went from 5 minutes of context gathering to 30 seconds."
  </blockquote>
  <div class="mt-3 text-xs text-green-700 dark:text-green-400 font-bold">
    → 10× faster with /debug-build
  </div>
</div>

</div>

---

# 📊 Success Metrics

<div class="mt-8 space-y-4">

<div class="grid grid-cols-3 gap-4 text-center">
  <div class="p-4 bg-gradient-to-br from-green-900/60 to-green-800/60 rounded-lg border-2 border-green-400">
    <div class="text-3xl font-bold text-green-300">14.5 min</div>
    <div class="text-sm text-gray-300 mt-2">Daily time saved</div>
    <div class="text-xs text-gray-400 mt-1">(Elena's test generation)</div>
  </div>
  <div class="p-4 bg-gradient-to-br from-blue-900/60 to-blue-800/60 rounded-lg border-2 border-blue-400">
    <div class="text-3xl font-bold text-blue-300">0</div>
    <div class="text-sm text-gray-300 mt-2">Missed checks</div>
    <div class="text-xs text-gray-400 mt-1">(Sarah's React review)</div>
  </div>
  <div class="p-4 bg-gradient-to-br from-purple-900/60 to-purple-800/60 rounded-lg border-2 border-purple-400">
    <div class="text-3xl font-bold text-purple-300">10×</div>
    <div class="text-sm text-gray-300 mt-2">Faster debugging</div>
    <div class="text-xs text-gray-400 mt-1">(Marcus' build analysis)</div>
  </div>
</div>

<div class="grid grid-cols-2 gap-6 mt-6 text-sm">
  <div class="p-4 bg-gray-800 rounded-lg">
    <div class="font-bold text-white mb-2">Prompt Invocations</div>
    <div class="text-gray-300 text-xs space-y-1">
      <div>• Before: 3 min × 5/day = 15 min</div>
      <div>• After: 0.1 min × 5/day = 0.5 min</div>
      <div class="text-green-400 font-bold mt-2">→ 97% time reduction</div>
    </div>
  </div>
  <div class="p-4 bg-gray-800 rounded-lg">
    <div class="font-bold text-white mb-2">Consistency Impact</div>
    <div class="text-gray-300 text-xs space-y-1">
      <div>• Standards referenced automatically</div>
      <div>• Junior devs get senior-level results</div>
      <div class="text-blue-400 font-bold mt-2">→ Knowledge scales team-wide</div>
    </div>
  </div>
</div>

</div>

---

# 🔗 Integration & Compounding

<div class="mt-8 space-y-4">

<div class="flex flex-col items-center gap-3">
  <div class="p-4 bg-purple-900/60 rounded-lg border-2 border-purple-400 w-96 text-center">
    <div class="font-bold text-purple-300">Module 1: Repository Instructions</div>
    <div class="text-xs text-gray-300 mt-1">ARCHITECTURE.md + copilot-instructions.md</div>
  </div>
  <div class="text-2xl text-gray-400">↓</div>
  <div class="p-4 bg-blue-900/60 rounded-lg border-2 border-blue-400 w-96 text-center">
    <div class="font-bold text-blue-300">Module 2: Plan Mode</div>
    <div class="text-xs text-gray-300 mt-1">35 → 7 min planning time</div>
  </div>
  <div class="text-2xl text-gray-400">↓</div>
  <div class="p-4 bg-green-900/60 rounded-lg border-2 border-green-400 w-96 text-center">
    <div class="font-bold text-green-300">Module 3: Custom Prompts</div>
    <div class="text-xs text-gray-300 mt-1">Reusable functions reference standards automatically</div>
  </div>
</div>

<div class="p-5 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-lg text-center mt-6">
  <div class="text-lg font-bold text-white">Prompts build on your foundation—they reference your architecture and standards to deliver consistent results.</div>
</div>

</div>

---

# 🎭 How It Works Behind the Scenes

<div class="mt-8 space-y-4 text-xs">

<div class="p-4 bg-gray-800 rounded-lg">
  <div class="font-bold text-white mb-3">When you invoke <code>/prompt-name</code>:</div>
  <div class="grid grid-cols-4 gap-2">
    <div class="p-2 bg-blue-900/60 rounded border-2 border-blue-400 text-center">
      <div class="font-bold text-blue-300">1. Discover</div>
      <div class="text-gray-300 mt-1">Find .prompt.md files</div>
    </div>
    <div class="p-2 bg-blue-900/60 rounded border-2 border-blue-400 text-center">
      <div class="font-bold text-blue-300">2. Parse</div>
      <div class="text-gray-300 mt-1">Read YAML config</div>
    </div>
    <div class="p-2 bg-blue-900/60 rounded border-2 border-blue-400 text-center">
      <div class="font-bold text-blue-300">3. Substitute</div>
      <div class="text-gray-300 mt-1">Replace variables</div>
    </div>
    <div class="p-2 bg-blue-900/60 rounded border-2 border-blue-400 text-center">
      <div class="font-bold text-blue-300">4. Resolve</div>
      <div class="text-gray-300 mt-1">Include linked docs</div>
    </div>
  </div>
  <div class="grid grid-cols-3 gap-2 mt-2">
    <div class="p-2 bg-green-900/60 rounded border-2 border-green-400 text-center">
      <div class="font-bold text-green-300">5. Assemble</div>
      <div class="text-gray-300 mt-1">Combine context</div>
    </div>
    <div class="p-2 bg-green-900/60 rounded border-2 border-green-400 text-center">
      <div class="font-bold text-green-300">6. Invoke</div>
      <div class="text-gray-300 mt-1">Route to agent</div>
    </div>
    <div class="p-2 bg-green-900/60 rounded border-2 border-green-400 text-center">
      <div class="font-bold text-green-300">7. Execute</div>
      <div class="text-gray-300 mt-1">Run with tools</div>
    </div>
  </div>
</div>

<div class="p-4 bg-gradient-to-r from-purple-900/40 to-gray-800 rounded-lg text-center">
  <span class="text-white font-bold">💡 Key Takeaway: Prompt files are context orchestrators</span>
  <div class="text-gray-400 text-xs mt-2">They ensure the right context (standards, architecture, patterns) is always included, consistently.</div>
</div>

</div>

---

# ➡️ Next Up: Module 4

<div class="mt-12 space-y-6">

<div class="p-6 bg-gradient-to-r from-blue-900/60 to-purple-900/60 rounded-lg border-2 border-blue-400">
  <div class="text-xl font-bold text-white mb-3">Custom Instructions</div>
  <div class="text-gray-300 text-sm mb-4">
    While prompt files handle specific tasks, custom instructions apply context to <strong>every Copilot interaction</strong>, shaping how AI understands your role, codebase, and preferences.
  </div>
  <blockquote class="text-sm italic text-gray-400 border-l-4 border-blue-400 pl-4">
    "I love the prompt files, but I'm still explaining the same context in every chat session. Can I make Copilot remember who I am and what I care about?"
  </blockquote>
  <div class="text-right text-sm text-gray-400 mt-2">— David</div>
</div>

<div class="text-center">
  <a href="../04-custom-instructions/README.md" class="text-blue-400 hover:text-blue-300 font-bold">
    Continue to Module 4 →
  </a>
</div>

</div>

---
layout: end
---

# Ready to Transform Repetition into Reuse?

<div class="mt-8">
  <div class="text-2xl text-gray-400 mb-4">Start with Exercise 3.1</div>
  <div class="text-sm text-gray-500">Create your first prompt file and save 14.5 minutes per day</div>
</div>

<div class="abs-br m-6 text-sm opacity-50">
  CopilotWorkshop Training
</div>
