---
theme: default
background: https://source.unsplash.com/collection/94734566/1920x1080
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Module 5: Agent Skills
  CopilotWorkshop Training
drawings:
  persist: false
transition: slide-left
title: Module 5 - Agent Skills
mdc: true
---

# Module 5: Agent Skills

<div class="mt-4 text-2xl text-gray-400 font-light">The Capability Gap</div>

<div class="mt-12 flex justify-center">
<div class="relative">
<div class="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-xl opacity-50 animate-pulse"></div>
<div class="relative text-8xl">🎓</div>
</div>
</div>

<div class="mt-12 grid grid-cols-3 gap-6 max-w-2xl mx-auto text-sm">
<div class="text-center">
<div class="text-3xl mb-2">📝</div>
<div class="text-gray-400">Instructions tell <span class="text-blue-400">how</span></div>
</div>
<div class="text-center">
<div class="text-3xl mb-2">→</div>
</div>
<div class="text-center">
<div class="text-3xl mb-2">🎯</div>
<div class="text-gray-400">Skills teach <span class="text-green-400">capabilities</span></div>
</div>
</div>

<div class="abs-br m-6 flex gap-2">
<span class="text-sm opacity-50">⏰ 30 minutes</span>
</div>

---

# 📖 The Challenge

<div class="text-lg space-y-4">

**Where we've been:**
- Module 1: Repository-wide standards (copilot-instructions.md)
- Module 2: Plan mode for complex feature research
- Module 3: Prompt files for specific tasks
- Module 4: Path-based custom instructions

**The new problem:**
Instructions tell Copilot **how** to behave, but they can't teach it **how to do things it doesn't know**.

</div>

<div class="mt-8 p-4 bg-red-900/40 rounded-lg border-l-4 border-red-500">
  <div class="text-red-400">
    ⚠️ David needs to validate against FanHub's TV show API schema.<br/>
    ⚠️ Elena wants tests using the team's custom test template.<br/>
    ⚠️ Marcus needs deployment scripts for FanHub's infrastructure.
  </div>
</div>

---

# 🎯 Learning Objectives

<div class="grid grid-cols-2 gap-6 mt-8">

<div class="p-6 bg-blue-900/60 rounded-lg border-2 border-blue-400">
  <div class="text-3xl mb-3">🎓</div>
  <div class="text-lg font-bold text-blue-200">Teach New Capabilities</div>
  <div class="text-sm text-gray-300 mt-2">
    Create skills that combine instructions + scripts + examples to teach specialized workflows
  </div>
</div>

<div class="p-6 bg-green-900/60 rounded-lg border-2 border-green-400">
  <div class="text-3xl mb-3">⚡</div>
  <div class="text-lg font-bold text-green-200">Progressive Loading</div>
  <div class="text-sm text-gray-300 mt-2">
    3-level system: discovery → instructions → resources (loaded only when needed)
  </div>
</div>

<div class="p-6 bg-purple-900/60 rounded-lg border-2 border-purple-400">
  <div class="text-3xl mb-3">🌐</div>
  <div class="text-lg font-bold text-purple-200">Cross-Platform Skills</div>
  <div class="text-sm text-gray-300 mt-2">
    Works in VS Code, Copilot CLI, and coding agent using open standard
  </div>
</div>

<div class="p-6 bg-orange-900/60 rounded-lg border-2 border-orange-400">
  <div class="text-3xl mb-3">📊</div>
  <div class="text-lg font-bold text-orange-200">Measure Efficiency</div>
  <div class="text-sm text-gray-300 mt-2">
    Quantify time saved on specialized workflows (API design, testing, debugging)
  </div>
</div>

</div>

---

# 👥 Key Personas

<div class="grid grid-cols-3 gap-6 mt-8">

<div class="p-6 bg-gradient-to-br from-blue-900/80 to-blue-800/60 rounded-lg border-2 border-blue-400">
  <div class="text-4xl mb-3">👨‍💼</div>
  <h3 class="text-xl font-bold text-white">David</h3>
  <p class="text-sm text-blue-200">Staff Engineer · 20 years</p>
  <blockquote class="mt-4 text-sm italic text-gray-300">
    "Instructions tell Copilot how to behave, but they don't teach it how to do things it doesn't know how to do."
  </blockquote>
</div>

<div class="p-6 bg-gradient-to-br from-green-900/80 to-green-800/60 rounded-lg border-2 border-green-400">
  <div class="text-4xl mb-3">👩‍🔬</div>
  <h3 class="text-xl font-bold text-white">Elena</h3>
  <p class="text-sm text-green-200">QA Engineer · 8 years</p>
  <blockquote class="mt-4 text-sm italic text-gray-300">
    "I need bug reproduction tests using our custom test template, not generic examples."
  </blockquote>
</div>

<div class="p-6 bg-gradient-to-br from-purple-900/80 to-purple-800/60 rounded-lg border-2 border-purple-400">
  <div class="text-4xl mb-3">⚙️</div>
  <h3 class="text-xl font-bold text-white">Marcus</h3>
  <p class="text-sm text-purple-200">DevOps · 5 years</p>
  <blockquote class="mt-4 text-sm italic text-gray-300">
    "Debugging build failures takes 30 minutes per failure. I need specialized diagnostic workflows."
  </blockquote>
</div>

</div>

---

# ❌ Before → ✨ After

<div class="grid grid-cols-3 gap-4 mt-6">

<div class="rounded-xl overflow-hidden border border-gray-700">
<div class="bg-gradient-to-r from-red-900/80 to-red-800/60 p-3 text-center">
<div class="text-lg font-bold">🎨 API Design</div>
</div>
<div class="p-4 space-y-3">
<div class="flex justify-between items-center">
<span class="text-red-400 line-through">12 min</span>
<span class="text-2xl">→</span>
<span class="text-green-400 font-bold text-xl">2 min</span>
</div>
<div class="h-2 bg-gray-700 rounded-full overflow-hidden">
<div class="h-full bg-gradient-to-r from-green-500 to-green-400 w-[83%]"></div>
</div>
<div class="text-center text-green-300 font-bold">83% faster</div>
<div class="text-xs text-gray-500 text-center">0 schema mismatches</div>
</div>
</div>

<div class="rounded-xl overflow-hidden border border-gray-700">
<div class="bg-gradient-to-r from-red-900/80 to-red-800/60 p-3 text-center">
<div class="text-lg font-bold">🧪 Bug Tests</div>
</div>
<div class="p-4 space-y-3">
<div class="flex justify-between items-center">
<span class="text-red-400 line-through">25 min</span>
<span class="text-2xl">→</span>
<span class="text-green-400 font-bold text-xl">4 min</span>
</div>
<div class="h-2 bg-gray-700 rounded-full overflow-hidden">
<div class="h-full bg-gradient-to-r from-green-500 to-green-400 w-[84%]"></div>
</div>
<div class="text-center text-green-300 font-bold">84% faster</div>
<div class="text-xs text-gray-500 text-center">100% edge coverage</div>
</div>
</div>

<div class="rounded-xl overflow-hidden border border-gray-700">
<div class="bg-gradient-to-r from-red-900/80 to-red-800/60 p-3 text-center">
<div class="text-lg font-bold">⚙️ Build Debug</div>
</div>
<div class="p-4 space-y-3">
<div class="flex justify-between items-center">
<span class="text-red-400 line-through">30 min</span>
<span class="text-2xl">→</span>
<span class="text-green-400 font-bold text-xl">2 min</span>
</div>
<div class="h-2 bg-gray-700 rounded-full overflow-hidden">
<div class="h-full bg-gradient-to-r from-green-500 to-green-400 w-[93%]"></div>
</div>
<div class="text-center text-green-300 font-bold">93% faster</div>
<div class="text-xs text-gray-500 text-center">Instant root cause</div>
</div>
</div>

</div>

<div class="mt-6 p-4 bg-gradient-to-r from-green-600/30 to-green-800/30 rounded-xl border border-green-500/50 text-center">
<div class="text-2xl font-bold text-green-300">346 minutes saved per sprint</div>
<div class="text-sm text-gray-400 mt-1">That's nearly 6 hours of developer time recovered</div>
</div>

---

# 🧠 Key Insight

<div class="flex flex-col items-center justify-center h-full space-y-8">

<div class="text-2xl text-gray-300 text-center max-w-2xl">
  Traditional thinking: Write detailed instructions and hope Copilot figures it out
</div>

<div class="text-3xl text-gray-400">↓</div>

<div class="p-6 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-lg text-center max-w-2xl">
  <div class="text-2xl font-bold text-white">
    AI-native thinking: Create complete capabilities—instructions + scripts + examples + resources
  </div>
</div>

<div class="mt-6 text-center text-base text-gray-400 italic">
  Instructions = behavior guidelines | Skills = new capabilities
</div>

</div>

---

# 📚 What Are Agent Skills?

<div class="grid grid-cols-2 gap-8 mt-6">

<div>
  <h3 class="text-xl font-bold text-blue-300 mb-4">Structure</h3>
  <div class="text-sm space-y-2 text-gray-300">
    <div class="p-3 bg-gray-800 rounded">
      <code>.github/skills/build-analyzer/</code>
    </div>
    <div class="pl-6 space-y-1">
      <div class="p-2 bg-gray-800/60 rounded"><code>SKILL.md</code> — Instructions</div>
      <div class="p-2 bg-orange-900/40 rounded border border-orange-500/30"><code>scripts/</code> — <span class="text-orange-300">Executable scripts</span></div>
      <div class="p-2 bg-gray-800/60 rounded"><code>examples/</code> — Reference patterns</div>
      <div class="p-2 bg-gray-800/60 rounded"><code>templates/</code> — Starting points</div>
    </div>
  </div>
</div>

<div>
  <h3 class="text-xl font-bold text-green-300 mb-4">Characteristics</h3>
  <div class="space-y-2 text-sm">
    <div class="p-3 bg-orange-900/30 rounded-lg flex items-start gap-2">
      <span class="text-xl">⚡</span>
      <div>
        <div class="font-bold text-orange-200">Script Execution</div>
        <div class="text-gray-400">Run scripts, not just read them</div>
      </div>
    </div>
    <div class="p-3 bg-green-900/30 rounded-lg flex items-start gap-2">
      <span class="text-xl">🔄</span>
      <div>
        <div class="font-bold text-green-200">Complete Workflows</div>
        <div class="text-gray-400">Instructions + scripts + templates</div>
      </div>
    </div>
    <div class="p-3 bg-blue-900/30 rounded-lg flex items-start gap-2">
      <span class="text-xl">📊</span>
      <div>
        <div class="font-bold text-blue-200">Progressive Loading</div>
        <div class="text-gray-400">3 levels: discovery → instructions → resources</div>
      </div>
    </div>
    <div class="p-3 bg-purple-900/30 rounded-lg flex items-start gap-2">
      <span class="text-xl">🌐</span>
      <div>
        <div class="font-bold text-purple-200">Portable Standard</div>
        <div class="text-gray-400">Works across VS Code, CLI, coding agent</div>
      </div>
    </div>
  </div>
</div>

</div>

---

# ⚡ Script Execution: The Power Feature

<div class="grid grid-cols-2 gap-6 mt-4">

<div>
<div class="text-lg font-bold text-orange-300 mb-4">Skills can run scripts!</div>
<div class="p-4 bg-gray-800 rounded-lg text-sm space-y-2">
<div class="text-gray-400 mb-2">Example skill structure:</div>
<code class="text-green-300">.github/skills/build-analyzer/</code>
<div class="pl-4 space-y-1 text-gray-300">
<div>📄 SKILL.md</div>
<div>📁 scripts/</div>
<div class="pl-4">🔧 analyze-logs.sh</div>
<div class="pl-4">🐍 parse-errors.py</div>
</div>
</div>

<div class="mt-4 p-3 bg-orange-900/30 rounded-lg border border-orange-500/50 text-sm">
<div class="font-bold text-orange-300">In SKILL.md:</div>
<div class="text-gray-300 mt-1">"Run <code>./scripts/analyze-logs.sh</code> to diagnose the failure"</div>
</div>
</div>

<div>
<div class="text-lg font-bold text-purple-300 mb-4">Pre-approve with allowed-tools</div>
<div class="p-4 bg-gray-900 rounded-lg text-sm font-mono">
<div class="text-gray-500">---</div>
<div><span class="text-blue-400">name:</span> build-analyzer</div>
<div><span class="text-blue-400">description:</span> Diagnose CI/CD failures</div>
<div><span class="text-yellow-400">allowed-tools:</span> <span class="text-green-300">Bash(./scripts/*) Bash(gh:*)</span></div>
<div class="text-gray-500">---</div>
</div>

<div class="mt-4 space-y-2 text-sm">
<div class="flex items-center gap-2">
<span class="text-green-400">✓</span>
<span class="text-gray-300"><code>Bash(git:*)</code> — all git commands</span>
</div>
<div class="flex items-center gap-2">
<span class="text-green-400">✓</span>
<span class="text-gray-300"><code>Bash(./scripts/*)</code> — skill's scripts</span>
</div>
<div class="flex items-center gap-2">
<span class="text-green-400">✓</span>
<span class="text-gray-300"><code>Read</code> — file reading</span>
</div>
</div>
</div>

</div>

<div class="mt-4 p-3 bg-gradient-to-r from-orange-600/30 to-purple-600/30 rounded-xl border border-orange-500/30 text-center">
<div class="text-lg">📝 Instructions tell Copilot <span class="text-blue-300">what to do</span> → ⚡ Scripts let Copilot <span class="text-orange-300">actually do it</span></div>
</div>

---

# 📊 Three-Level Loading System

<div class="flex flex-col items-center gap-4 mt-8">

<div class="w-full max-w-4xl">
  <div class="grid grid-cols-3 gap-4">
    <div class="p-4 bg-blue-900/60 rounded-lg border-2 border-blue-400">
      <div class="text-2xl mb-2">1️⃣</div>
      <div class="font-bold text-blue-200 mb-2">Discovery</div>
      <div class="text-xs text-gray-300">
        Copilot reads <code>name</code> and <code>description</code> from YAML frontmatter
      </div>
      <div class="mt-2 text-xs text-blue-300">Always loaded (lightweight)</div>
    </div>
    <div class="p-4 bg-green-900/60 rounded-lg border-2 border-green-400">
      <div class="text-2xl mb-2">2️⃣</div>
      <div class="font-bold text-green-200 mb-2">Instructions</div>
      <div class="text-xs text-gray-300">
        Loads <code>SKILL.md</code> body when task matches description
      </div>
      <div class="mt-2 text-xs text-green-300">Loaded when relevant</div>
    </div>
    <div class="p-4 bg-purple-900/60 rounded-lg border-2 border-purple-400">
      <div class="text-2xl mb-2">3️⃣</div>
      <div class="font-bold text-purple-200 mb-2">Resources</div>
      <div class="text-xs text-gray-300">
        Accesses scripts, examples, templates only as needed
      </div>
      <div class="mt-2 text-xs text-purple-300">Loaded on-demand</div>
    </div>

  </div>
</div>

<div class="text-3xl text-gray-400 my-2">↓</div>

<div class="p-6 bg-gradient-to-r from-green-600 to-green-800 rounded-xl shadow-lg text-center max-w-2xl">
  <div class="text-xl font-bold text-white">
    Install 20+ skills, only 1-2 load per task → 65-80% context saved
  </div>
</div>

</div>

---

# 🔄 Skills vs Instructions

<div class="grid grid-cols-3 gap-4 mt-6">

<div class="rounded-xl border-2 border-blue-500/50 overflow-hidden">
<div class="bg-blue-900/60 p-3 text-center border-b border-blue-500/30">
<div class="text-lg font-bold text-blue-200">copilot-instructions.md</div>
<div class="text-xs text-blue-400">Module 1</div>
</div>
<div class="p-4 space-y-3 text-sm">
<div class="flex items-center gap-2"><span class="text-blue-400">📍</span> Repository-wide</div>
<div class="flex items-center gap-2"><span class="text-blue-400">⚡</span> Always active</div>
<div class="flex items-center gap-2"><span class="text-blue-400">📄</span> Instructions only</div>
<div class="mt-3 p-2 bg-gray-800/60 rounded text-xs text-gray-400 italic">"Use functional React components"</div>
</div>
</div>

<div class="rounded-xl border-2 border-green-500/50 overflow-hidden">
<div class="bg-green-900/60 p-3 text-center border-b border-green-500/30">
<div class="text-lg font-bold text-green-200">.instructions.md</div>
<div class="text-xs text-green-400">Module 4</div>
</div>
<div class="p-4 space-y-3 text-sm">
<div class="flex items-center gap-2"><span class="text-green-400">📂</span> Path-based</div>
<div class="flex items-center gap-2"><span class="text-green-400">⚡</span> Auto-applied by file</div>
<div class="flex items-center gap-2"><span class="text-green-400">📄</span> Instructions only</div>
<div class="mt-3 p-2 bg-gray-800/60 rounded text-xs text-gray-400 italic">"Frontend: Follow UI patterns"</div>
</div>
</div>

<div class="rounded-xl border-2 border-purple-500/50 overflow-hidden bg-purple-900/20">
<div class="bg-purple-900/60 p-3 text-center border-b border-purple-500/30">
<div class="text-lg font-bold text-purple-200">Agent Skills</div>
<div class="text-xs text-purple-400">Module 5 ⭐</div>
</div>
<div class="p-4 space-y-3 text-sm">
<div class="flex items-center gap-2"><span class="text-purple-400">🎯</span> Task-based</div>
<div class="flex items-center gap-2"><span class="text-purple-400">⚡</span> Auto-loaded by match</div>
<div class="flex items-center gap-2"><span class="text-purple-400">📦</span> Instructions + scripts + examples</div>
<div class="mt-3 p-2 bg-gray-800/60 rounded text-xs text-gray-400 italic">"Debug Actions with log analyzer"</div>
</div>
</div>

</div>

<div class="mt-6 p-4 bg-gradient-to-r from-blue-600/30 via-green-600/30 to-purple-600/30 rounded-xl border border-gray-600 text-center">
<div class="text-lg font-bold">📝 Instructions guide <span class="text-blue-300">behavior</span> → 🎓 Skills teach <span class="text-purple-300">capabilities</span></div>
</div>

---

# 🔨 Exercises

<div class="grid grid-cols-3 gap-4 mt-6">

<div class="rounded-xl overflow-hidden border border-blue-500/50 hover:border-blue-400 transition-colors">
<div class="bg-gradient-to-r from-blue-900 to-blue-800 p-4">
<div class="flex justify-between items-start">
<div class="text-3xl">🎨</div>
<div class="px-2 py-1 bg-blue-600 rounded text-xs">10 min</div>
</div>
<div class="text-lg font-bold mt-2">5.1 API Design Skill</div>
<div class="text-xs text-blue-300">Sarah ⭐ leads</div>
</div>
<div class="p-4 text-sm space-y-2">
<div class="text-gray-300">Create skill with OpenAPI schema + example endpoints</div>
<div class="flex items-center gap-2 mt-3">
<div class="h-1.5 flex-1 bg-green-500 rounded"></div>
<span class="text-green-400 text-xs font-bold">83% faster</span>
</div>
</div>
</div>

<div class="rounded-xl overflow-hidden border border-green-500/50 hover:border-green-400 transition-colors">
<div class="bg-gradient-to-r from-green-900 to-green-800 p-4">
<div class="flex justify-between items-start">
<div class="text-3xl">🧪</div>
<div class="px-2 py-1 bg-green-600 rounded text-xs">10 min</div>
</div>
<div class="text-lg font-bold mt-2">5.2 Bug Test Generator</div>
<div class="text-xs text-green-300">Elena ⭐ leads</div>
</div>
<div class="p-4 text-sm space-y-2">
<div class="text-gray-300">Create skill with Jest template + edge case patterns</div>
<div class="flex items-center gap-2 mt-3">
<div class="h-1.5 flex-1 bg-green-500 rounded"></div>
<span class="text-green-400 text-xs font-bold">84% faster</span>
</div>
</div>
</div>

<div class="rounded-xl overflow-hidden border border-purple-500/50 hover:border-purple-400 transition-colors">
<div class="bg-gradient-to-r from-purple-900 to-purple-800 p-4">
<div class="flex justify-between items-start">
<div class="text-3xl">⚙️</div>
<div class="px-2 py-1 bg-purple-600 rounded text-xs">10 min</div>
</div>
<div class="text-lg font-bold mt-2">5.3 Pipeline Analyzer</div>
<div class="text-xs text-purple-300">Marcus ⭐ leads</div>
</div>
<div class="p-4 text-sm space-y-2">
<div class="text-gray-300">Create skill with diagnostic script + log patterns</div>
<div class="flex items-center gap-2 mt-3">
<div class="h-1.5 flex-1 bg-green-500 rounded"></div>
<span class="text-green-400 text-xs font-bold">93% faster</span>
</div>
</div>
</div>

</div>

<div class="mt-6 text-center text-gray-400">
<span class="text-2xl">⏰</span> Total: <span class="text-white font-bold">30 minutes</span> of hands-on practice
</div>

---

# 💭 Persona Transformations

<div class="grid grid-cols-2 gap-6 mt-8">

<div class="space-y-4">
  <div class="p-4 bg-gradient-to-r from-red-900/40 to-gray-800 rounded-lg">
    <div class="text-red-400 font-bold mb-2">😰 David's Fear</div>
    <div class="text-sm text-gray-300">
      "Instructions can't teach domain-specific validation workflows"
    </div>
  </div>

  <div class="p-4 bg-gradient-to-r from-red-900/40 to-gray-800 rounded-lg">
    <div class="text-red-400 font-bold mb-2">😰 Elena's Worry</div>
    <div class="text-sm text-gray-300">
      "Generic test generation misses our specific mocking patterns"
    </div>
  </div>

  <div class="p-4 bg-gradient-to-r from-red-900/40 to-gray-800 rounded-lg">
    <div class="text-red-400 font-bold mb-2">😰 Marcus's Concern</div>
    <div class="text-sm text-gray-300">
      "Debugging build failures requires specialized diagnostic scripts"
    </div>
  </div>
</div>

<div class="space-y-4">
  <div class="p-4 bg-gradient-to-r from-green-900/60 to-gray-800 rounded-lg">
    <div class="text-green-300 font-bold mb-2">✨ David's Realization</div>
    <div class="text-sm text-gray-300">
      "Skills combine instructions with actual schemas and examples—Copilot validates correctly every time"
    </div>
  </div>

  <div class="p-4 bg-gradient-to-r from-green-900/60 to-gray-800 rounded-lg">
    <div class="text-green-300 font-bold mb-2">✨ Elena's Discovery</div>
    <div class="text-sm text-gray-300">
      "Test generator skill includes our templates and edge case examples—100% coverage, 84% time saved"
    </div>
  </div>

  <div class="p-4 bg-gradient-to-r from-green-900/60 to-gray-800 rounded-lg">
    <div class="text-green-300 font-bold mb-2">✨ Marcus's Insight</div>
    <div class="text-sm text-gray-300">
      "Pipeline analyzer skill with diagnostic script reduced 30-min debugging to 2 minutes"
    </div>
  </div>
</div>

</div>

---

# 📊 Success Metrics

<div class="grid grid-cols-3 gap-6 mt-8">

<div class="p-6 bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg text-center">
  <div class="text-4xl font-bold text-white mb-2">83%</div>
  <div class="text-sm text-blue-200">Time saved on API endpoint design</div>
  <div class="text-xs text-gray-400 mt-2">(12 min → 2 min)</div>
</div>

<div class="p-6 bg-gradient-to-br from-green-900 to-green-800 rounded-lg text-center">
  <div class="text-4xl font-bold text-white mb-2">84%</div>
  <div class="text-sm text-green-200">Time saved on bug test generation</div>
  <div class="text-xs text-gray-400 mt-2">(25 min → 4 min)</div>
</div>

<div class="p-6 bg-gradient-to-br from-purple-900 to-purple-800 rounded-lg text-center">
  <div class="text-4xl font-bold text-white mb-2">93%</div>
  <div class="text-sm text-purple-200">Time saved on build debugging</div>
  <div class="text-xs text-gray-400 mt-2">(30 min → 2 min)</div>
</div>

</div>

<div class="mt-8 text-center">
  <div class="text-2xl font-bold text-white">346 minutes saved per sprint</div>
  <div class="text-sm text-gray-400 mt-2">Across 3 specialized workflow types</div>
</div>

<div class="mt-6 p-4 bg-gradient-to-r from-green-600 to-green-800 rounded-xl shadow-lg text-center">
  <div class="text-lg font-bold text-white">
    Skills teach specialized capabilities that compound with every use
  </div>
</div>

---

# 🔗 Compounding Value

<div class="space-y-6 mt-8">

<div class="flex items-center gap-4">
  <div class="flex-shrink-0 w-32 p-3 bg-blue-900/60 rounded text-center text-sm font-bold text-blue-200">Module 1</div>
  <div class="text-gray-400">→</div>
  <div class="flex-1 text-sm text-gray-300">Repository instructions set coding standards</div>
</div>

<div class="flex items-center gap-4">
  <div class="flex-shrink-0 w-32 p-3 bg-green-900/60 rounded text-center text-sm font-bold text-green-200">Module 4</div>
  <div class="text-gray-400">→</div>
  <div class="flex-1 text-sm text-gray-300">Custom instructions apply path-based context</div>
</div>

<div class="flex items-center gap-4">
  <div class="flex-shrink-0 w-32 p-3 bg-purple-900/60 rounded text-center text-sm font-bold text-purple-200">Module 5</div>
  <div class="text-gray-400">→</div>
  <div class="flex-1 text-sm text-gray-300">Agent skills teach specialized workflows with scripts + examples</div>
</div>

<div class="text-3xl text-center text-gray-400 my-4">↓</div>

<div class="p-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-center">
  <div class="text-xl font-bold text-white mb-2">Copilot becomes a domain specialist</div>
  <div class="text-sm text-gray-200">Standards + Context + Specialized Capabilities = Expert-level assistance</div>
</div>

</div>

---

# ➡️ Next Up: MCP Servers

<div class="flex items-center justify-center h-full">
<div class="max-w-3xl space-y-6">

<div class="text-center text-xl text-gray-300">
Skills teach Copilot specialized workflows with static resources...
</div>

<div class="text-4xl text-center text-gray-400">↓</div>

<div class="p-6 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl text-center">
<div class="text-2xl font-bold text-white mb-3">
What if you need runtime integration with live data?
</div>
<div class="text-base text-blue-100">
MCP servers connect Copilot to databases, APIs, and cloud platforms
</div>
</div>

<div class="mt-8 p-4 bg-gray-800 rounded-lg border-l-4 border-purple-500">
<div class="text-sm italic text-gray-300">
"Skills taught Copilot how to validate against our API schema. But the schema is static. What if I need Copilot to query our actual PostgreSQL database or call our live TV show API?"
</div>
<div class="text-xs text-gray-500 mt-2">— Marcus, about to discover MCP servers</div>
</div>

</div>
</div>

---
layout: center
class: text-center
---

# ✅ Module 5 Complete

<div class="mt-8 space-y-6">

<div class="text-2xl text-gray-300">You've learned to teach Copilot specialized capabilities</div>

<div class="flex justify-center gap-8 mt-8">
<div class="text-center">
<div class="text-4xl font-bold text-blue-400">3</div>
<div class="text-sm text-gray-500">Skills Created</div>
</div>
<div class="text-center">
<div class="text-4xl font-bold text-green-400">346</div>
<div class="text-sm text-gray-500">Min Saved/Sprint</div>
</div>
<div class="text-center">
<div class="text-4xl font-bold text-purple-400">87%</div>
<div class="text-sm text-gray-500">Avg Time Saved</div>
</div>
</div>

<div class="mt-8 p-4 bg-gradient-to-r from-purple-600/30 to-blue-600/30 rounded-xl border border-purple-500/30 max-w-xl mx-auto">
<div class="text-lg">
<span class="text-purple-300">Next:</span> Module 6 - MCP Servers
</div>
<div class="text-sm text-gray-400 mt-1">Connect Copilot to live databases, APIs, and cloud platforms</div>
</div>

</div>
