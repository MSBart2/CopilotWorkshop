---
theme: default
background: https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Agentic SDLC: Agentic PRs
  Innovative software development powered by intelligent automation
drawings:
  persist: false
transition: slide-left
title: Agentic SDLC - Agentic PRs
mdc: true
---

# Agentic SDLC: Agentic PRs

## Innovative software development powered by intelligent automation

<div class="pt-12">
  <span class="text-6xl">🤖</span>
</div>

<div class="abs-br m-6 flex gap-2">
  <span class="text-sm opacity-50">Tech Talk · GitHub Copilot Workshop</span>
</div>

---

# The Gen-4 Transformation

<div class="grid grid-cols-2 gap-8 mt-8">

<div class="p-6 bg-blue-900/60 rounded-lg border-l-4 border-blue-400">
  <div class="text-3xl mb-3">🚀</div>
  <div class="font-bold text-blue-300 mb-2">The Shift</div>
  <div class="text-gray-300 text-sm">
    Agentic AI systems radically change software delivery by accelerating code production beyond human cognitive limits
  </div>
</div>

<div class="p-6 bg-purple-900/60 rounded-lg border-l-4 border-purple-400">
  <div class="text-3xl mb-3">🎯</div>
  <div class="font-bold text-purple-300 mb-2">The New Bottleneck</div>
  <div class="text-gray-300 text-sm">
    Human focus shifts from coding to governance: trust, compliance, and architectural coherence
  </div>
</div>

<div class="p-6 bg-green-900/60 rounded-lg border-l-4 border-green-400">
  <div class="text-3xl mb-3">📝</div>
  <div class="font-bold text-green-300 mb-2">Intent-Based Input</div>
  <div class="text-gray-300 text-sm">
    Humans specify goals and constraints rather than code, feeding intent-level artifacts into AI pipelines
  </div>
</div>

<div class="p-6 bg-yellow-900/60 rounded-lg border-l-4 border-yellow-400">
  <div class="text-3xl mb-3">✅</div>
  <div class="font-bold text-yellow-300 mb-2">Validation Focus</div>
  <div class="text-gray-300 text-sm">
    Humans verify AI outcomes against intent and safety, adjusting AI autonomy for continuous delivery
  </div>
</div>

</div>

---

# The Core Problem

<div class="mt-12 p-8 bg-gradient-to-r from-red-900/40 to-gray-800 rounded-xl text-center">
  <div class="text-4xl font-bold text-white mb-4">
    ⚠️ Traditional PRs Collapse at Feature-Scale Payloads
  </div>
  <div class="text-xl text-gray-300">
    Pull requests work for small incremental changes but struggle with large AI-generated diffs spanning many components
  </div>
</div>

<div class="grid grid-cols-3 gap-4 mt-8">

<div class="p-4 bg-red-900/40 rounded-lg border-2 border-red-500">
  <div class="font-bold text-red-400 mb-2">Abstraction Mismatch</div>
  <div class="text-gray-300 text-sm">PRs are code-first, Gen-4 is intent-first</div>
</div>

<div class="p-4 bg-red-900/40 rounded-lg border-2 border-red-500">
  <div class="font-bold text-red-400 mb-2">Cognitive Overload</div>
  <div class="text-gray-300 text-sm">Large diffs obscure semantic risks</div>
</div>

<div class="p-4 bg-red-900/40 rounded-lg border-2 border-red-500">
  <div class="font-bold text-red-400 mb-2">Ceremonial Review</div>
  <div class="text-gray-300 text-sm">Humans can't reliably infer intent from code</div>
</div>

</div>

---

# Four Generations of SDLC

<div class="flex flex-col items-center gap-4 mt-8">

<div class="p-4 bg-gray-800 rounded-lg w-full border-l-4 border-gray-500">
  <div class="flex items-center gap-4">
    <div class="text-3xl">1️⃣</div>
    <div>
      <div class="font-bold text-white">Gen-1: Manual Coding</div>
      <div class="text-gray-400 text-sm">Individual developers, artisan craft</div>
    </div>
  </div>
</div>

<div class="text-2xl text-gray-400">↓</div>

<div class="p-4 bg-gray-800 rounded-lg w-full border-l-4 border-blue-500">
  <div class="flex items-center gap-4">
    <div class="text-3xl">2️⃣</div>
    <div>
      <div class="font-bold text-white">Gen-2: Team Workflows</div>
      <div class="text-gray-400 text-sm">PRs, CI/CD, version control collaboration</div>
    </div>
  </div>
</div>

<div class="text-2xl text-gray-400">↓</div>

<div class="p-4 bg-gray-800 rounded-lg w-full border-l-4 border-purple-500">
  <div class="flex items-center gap-4">
    <div class="text-3xl">3️⃣</div>
    <div>
      <div class="font-bold text-white">Gen-3: AI-Assisted</div>
      <div class="text-gray-400 text-sm">Autocomplete, refactoring—humans still author</div>
    </div>
  </div>
</div>

<div class="text-2xl text-gray-400">↓</div>

<div class="p-4 bg-gradient-to-r from-green-900/60 to-green-800 rounded-lg w-full border-l-4 border-green-400">
  <div class="flex items-center gap-4">
    <div class="text-3xl">4️⃣</div>
    <div>
      <div class="font-bold text-white">Gen-4: AI-Centric</div>
      <div class="text-green-300 text-sm">AI agents become primary code producers, humans govern intent and outcomes</div>
    </div>
  </div>
</div>

</div>

<div class="mt-6 text-center text-sm text-gray-400 italic">
  The breakpoint: when AI code volume exceeds human review capacity
</div>

---
layout: two-cols
---

# The Scarcity Shift

<div class="mt-8">

## ❌ Gen-3 Scarcity

<div class="p-6 bg-red-900/30 rounded-lg mt-4">
  <div class="space-y-3">
    <div class="flex items-start gap-3">
      <div class="text-2xl">⏱️</div>
      <div>
        <div class="font-bold text-red-300">Developer Time</div>
        <div class="text-sm text-gray-400">Coding capacity limited by human bandwidth</div>
      </div>
    </div>
    <div class="flex items-start gap-3">
      <div class="text-2xl">💻</div>
      <div>
        <div class="font-bold text-red-300">Code Production</div>
        <div class="text-sm text-gray-400">Slow, deliberate, bottlenecked</div>
      </div>
    </div>
    <div class="flex items-start gap-3">
      <div class="text-2xl">✅</div>
      <div>
        <div class="font-bold text-red-300">Trust</div>
        <div class="text-sm text-gray-400">Implicit—humans wrote it</div>
      </div>
    </div>
  </div>
</div>

</div>

::right::

<div class="mt-8">

## ✨ Gen-4 Scarcity

<div class="p-6 bg-green-900/30 rounded-lg mt-4">
  <div class="space-y-3">
    <div class="flex items-start gap-3">
      <div class="text-2xl">🔒</div>
      <div>
        <div class="font-bold text-green-300">Trust</div>
        <div class="text-sm text-gray-400">AI reliability, alignment, predictability</div>
      </div>
    </div>
    <div class="flex items-start gap-3">
      <div class="text-2xl">🎯</div>
      <div>
        <div class="font-bold text-green-300">Intent Clarity</div>
        <div class="text-sm text-gray-400">Well-defined constraints and goals</div>
      </div>
    </div>
    <div class="flex items-start gap-3">
      <div class="text-2xl">🛡️</div>
      <div>
        <div class="font-bold text-green-300">Governance Capacity</div>
        <div class="text-sm text-gray-400">Validating outcomes at AI speed</div>
      </div>
    </div>
  </div>
</div>

</div>

---

# Gen-4 Control Surfaces

<div class="grid grid-cols-3 gap-6 mt-12">

<div class="p-6 bg-gradient-to-br from-blue-900/60 to-blue-800 rounded-lg">
  <div class="text-4xl mb-3 text-center">📝</div>
  <h3 class="text-xl font-bold text-center text-blue-200 mb-3">Intent Declaration</h3>
  <div class="text-sm text-gray-300 space-y-2">
    <div>✓ Desired behavior</div>
    <div>✓ Constraints</div>
    <div>✓ Acceptance criteria</div>
    <div>✓ Risks & non-goals</div>
  </div>
</div>

<div class="p-6 bg-gradient-to-br from-purple-900/60 to-purple-800 rounded-lg">
  <div class="text-4xl mb-3 text-center">🛡️</div>
  <h3 class="text-xl font-bold text-center text-purple-200 mb-3">Policy Enforcement</h3>
  <div class="text-sm text-gray-300 space-y-2">
    <div>✓ Architectural rules</div>
    <div>✓ Security constraints</div>
    <div>✓ Performance budgets</div>
    <div>✓ Compliance checks</div>
  </div>
</div>

<div class="p-6 bg-gradient-to-br from-green-900/60 to-green-800 rounded-lg">
  <div class="text-4xl mb-3 text-center">✅</div>
  <h3 class="text-xl font-bold text-center text-green-200 mb-3">Outcome Validation</h3>
  <div class="text-sm text-gray-300 space-y-2">
    <div>✓ Behavioral tests</div>
    <div>✓ Scenario validation</div>
    <div>✓ Intent alignment</div>
    <div>✓ Stability assessment</div>
  </div>
</div>

</div>

<div class="mt-8 p-4 bg-gray-800 rounded-lg text-center">
  <div class="text-lg text-gray-300">
    <span class="text-blue-400 font-bold">Intent</span> → 
    <span class="text-purple-400 font-bold">Policy</span> → 
    <span class="text-green-400 font-bold">Validation</span>
  </div>
</div>

---

# The Gen-4 SDLC Loop

<div class="flex flex-col items-center gap-3 mt-8">

<div class="p-4 bg-blue-900/60 rounded-lg w-full max-w-2xl border-2 border-blue-400 text-center">
  <div class="text-2xl font-bold text-blue-300">1️⃣ Intent Declaration</div>
  <div class="text-sm text-gray-300 mt-2">Define feature purpose, constraints, dependencies, risk</div>
</div>

<div class="text-2xl text-gray-400">↓</div>

<div class="p-4 bg-green-900/60 rounded-lg w-full max-w-2xl border-2 border-green-400 text-center">
  <div class="text-2xl font-bold text-green-300">2️⃣ Agentic Production</div>
  <div class="text-sm text-gray-300 mt-2">AI agents plan, generate, test, refactor, self-correct</div>
</div>

<div class="text-2xl text-gray-400">↓</div>

<div class="p-4 bg-purple-900/60 rounded-lg w-full max-w-2xl border-2 border-purple-400 text-center">
  <div class="text-2xl font-bold text-purple-300">3️⃣ Automated Governance</div>
  <div class="text-sm text-gray-300 mt-2">Static analysis, compliance, semantic diffing enforce safety</div>
</div>

<div class="text-2xl text-gray-400">↓</div>

<div class="p-4 bg-yellow-900/60 rounded-lg w-full max-w-2xl border-2 border-yellow-400 text-center">
  <div class="text-2xl font-bold text-yellow-300">4️⃣ Human Outcome Validation</div>
  <div class="text-sm text-gray-300 mt-2">Validate behavior against intent using acceptance tests</div>
</div>

<div class="text-2xl text-gray-400">↓</div>

<div class="p-4 bg-orange-900/60 rounded-lg w-full max-w-2xl border-2 border-orange-400 text-center">
  <div class="text-2xl font-bold text-orange-300">5️⃣ Trust Recalibration</div>
  <div class="text-sm text-gray-300 mt-2">Adjust agent autonomy based on performance and safety</div>
</div>

</div>

---

# Three PR Models for Gen-4

<div class="grid grid-cols-3 gap-6 mt-12">

<div class="p-5 bg-blue-900/40 rounded-lg border-2 border-blue-500">
  <div class="text-3xl mb-3 text-center">🚦</div>
  <h3 class="text-lg font-bold text-center text-blue-300 mb-3">Model A:<br/>PRs as Checkpoints</h3>
  <div class="text-sm text-gray-300 space-y-2">
    <div>• AI produces small diffs</div>
    <div>• For regulated environments</div>
    <div>• Early adoption stage</div>
    <div>• Gradual trust building</div>
  </div>
</div>

<div class="p-5 bg-purple-900/40 rounded-lg border-2 border-purple-500">
  <div class="text-3xl mb-3 text-center">📚</div>
  <h3 class="text-lg font-bold text-center text-purple-300 mb-3">Model B:<br/>Stacked PRs</h3>
  <div class="text-sm text-gray-300 space-y-2">
    <div>• Decomposed semantic units</div>
    <div>• Independent review</div>
    <div>• Parallel validation</div>
    <div>• Maintains coherence</div>
  </div>
</div>

<div class="p-5 bg-green-900/40 rounded-lg border-2 border-green-500">
  <div class="text-3xl mb-3 text-center">📋</div>
  <h3 class="text-lg font-bold text-center text-green-300 mb-3">Model C:<br/>PRs as Audit Artifacts</h3>
  <div class="text-sm text-gray-300 space-y-2">
    <div>• Immutable compliance records</div>
    <div>• Not pre-merge gates</div>
    <div>• Traceability focus</div>
    <div>• Post-deployment audit</div>
  </div>
</div>

</div>

<div class="mt-8 text-center text-gray-400 italic text-sm">
  Balance throughput, safety, and interpretability based on maturity and risk posture
</div>

---

# Enterprise Governance at AI Speed

<div class="grid grid-cols-2 gap-6 mt-8">

<div class="p-5 bg-gray-800 rounded-lg border-l-4 border-blue-400">
  <div class="flex items-start gap-3">
    <div class="text-3xl">📜</div>
    <div>
      <div class="font-bold text-blue-300 mb-2">Policy-as-Code</div>
      <div class="text-sm text-gray-400">Architecture, API stability, compliance enforced automatically</div>
    </div>
  </div>
</div>

<div class="p-5 bg-gray-800 rounded-lg border-l-4 border-green-400">
  <div class="flex items-start gap-3">
    <div class="text-3xl">👁️</div>
    <div>
      <div class="font-bold text-green-300 mb-2">Observability</div>
      <div class="text-sm text-gray-400">Runtime behavior verified under real workloads</div>
    </div>
  </div>
</div>

<div class="p-5 bg-gray-800 rounded-lg border-l-4 border-purple-400">
  <div class="flex items-start gap-3">
    <div class="text-3xl">⚖️</div>
    <div>
      <div class="font-bold text-purple-300 mb-2">Dynamic Trust Scoring</div>
      <div class="text-sm text-gray-400">Agent oversight scaled based on historical performance</div>
    </div>
  </div>
</div>

<div class="p-5 bg-gray-800 rounded-lg border-l-4 border-yellow-400">
  <div class="flex items-start gap-3">
    <div class="text-3xl">🔄</div>
    <div>
      <div class="font-bold text-yellow-300 mb-2">Proactive Governance</div>
      <div class="text-sm text-gray-400">Shift from reactive review to automated enforcement</div>
    </div>
  </div>
</div>

</div>

<div class="mt-8 p-5 bg-gradient-to-r from-blue-900/40 to-purple-900/40 rounded-lg text-center">
  <div class="text-xl font-bold text-white">
    Replace slow, human-centric controls with multilayered automated governance
  </div>
</div>

---
layout: center
class: text-center
---

# The Enterprise Takeaway

<div class="mt-12 space-y-8">

<div class="p-6 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-lg">
  <div class="text-3xl font-bold text-white">
    PRs Move Up-Stack, Not Away
  </div>
</div>

<div class="grid grid-cols-3 gap-4 max-w-4xl mx-auto text-sm">
  <div class="p-4 bg-blue-900/60 rounded-lg">
    <div class="font-bold text-blue-300 mb-2">From Code Review</div>
    <div class="text-gray-300">to governance artifacts</div>
  </div>
  <div class="p-4 bg-purple-900/60 rounded-lg">
    <div class="font-bold text-purple-300 mb-2">Humans Define</div>
    <div class="text-gray-300">intent & validate outcomes</div>
  </div>
  <div class="p-4 bg-green-900/60 rounded-lg">
    <div class="font-bold text-green-300 mb-2">AI Handles</div>
    <div class="text-gray-300">implementation details</div>
  </div>
</div>

</div>

<div class="mt-12 text-center text-gray-400 italic">
  Preserve accountability while adapting to AI-scale production
</div>

---
layout: center
class: text-center
---

# AI Produces, Humans Govern

<div class="mt-12 max-w-3xl mx-auto">

<div class="grid grid-cols-2 gap-8">

<div class="p-6 bg-gradient-to-br from-green-900/60 to-green-800 rounded-lg">
  <div class="text-4xl mb-3">🤖</div>
  <div class="font-bold text-green-200 text-xl mb-3">AI Role</div>
  <div class="text-gray-300 text-sm space-y-2">
    <div>✓ Primary code producer</div>
    <div>✓ Feature-scale generation</div>
    <div>✓ Self-correction loops</div>
    <div>✓ Rapid iteration</div>
  </div>
</div>

<div class="p-6 bg-gradient-to-br from-blue-900/60 to-blue-800 rounded-lg">
  <div class="text-4xl mb-3">👥</div>
  <div class="font-bold text-blue-200 text-xl mb-3">Human Role</div>
  <div class="text-gray-300 text-sm space-y-2">
    <div>✓ Define purpose & intent</div>
    <div>✓ Set constraints & policy</div>
    <div>✓ Validate outcomes</div>
    <div>✓ Govern systemic integrity</div>
  </div>
</div>

</div>

<div class="mt-10 p-6 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl shadow-lg">
  <div class="text-2xl font-bold text-white">
    Speed and safety coexist through automation and trust calibration
  </div>
</div>

</div>

---
layout: center
class: text-center
---

# The Gen-4 Partnership

<div class="mt-16 space-y-8">

<div class="text-6xl">🤝</div>

<div class="text-3xl font-bold text-white max-w-3xl mx-auto">
  Organizations that master this balance achieve unprecedented throughput without sacrificing trust, reliability, or principles
</div>

<div class="mt-12 grid grid-cols-3 gap-4 max-w-3xl mx-auto text-sm">
  <div class="p-3 bg-blue-900/60 rounded-lg">
    <div class="font-bold text-blue-300">AI Accelerates</div>
  </div>
  <div class="p-3 bg-purple-900/60 rounded-lg">
    <div class="font-bold text-purple-300">Humans Direct</div>
  </div>
  <div class="p-3 bg-green-900/60 rounded-lg">
    <div class="font-bold text-green-300">Trust Scales</div>
  </div>
</div>

</div>

<div class="abs-br m-6 text-sm opacity-50">
  Gen-4 SDLC: A profound reallocation of responsibility
</div>

---
layout: end
---

# Thank You

<div class="mt-12">
  <div class="text-4xl mb-4">🚀</div>
  <div class="text-xl text-gray-400">
    Ready to transform your software delivery?
  </div>
</div>

<div class="abs-br m-6 flex gap-2">
  <span class="text-sm opacity-50">GitHub Copilot Workshop</span>
</div>
