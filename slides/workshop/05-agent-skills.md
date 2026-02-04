---
theme: default
background: https://source.unsplash.com/collection/94734566/1920x1080
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Module 5: Agent Skills
  CopilotWorkshop Training - Teaching Copilot specialized capabilities
drawings:
  persist: false
transition: slide-left
title: Module 5 - Agent Skills
mdc: true
---

# Module 5: Agent Skills

## ⏰ The Capability Gap

<div class="pt-12">
  <span class="text-6xl">🔨</span>
</div>

<div class="abs-br m-6 flex gap-2">
  <span class="text-sm opacity-50">CopilotWorkshop Training</span>
</div>

---

# 📖 The Story

<div class="text-lg leading-relaxed">

After establishing **repository instructions** (Module 1), **plan mode** research (Module 2), **prompt files** for reusable tasks (Module 3), and **custom instructions** for path-based guidance (Module 4)...

The team hits a new challenge: **teaching Copilot capabilities it doesn't have built-in**.

<div class="mt-8 p-4 bg-blue-900/30 rounded-lg border-l-4 border-blue-400">
  <div class="text-sm text-gray-400 mb-2">David's Challenge</div>
  <div class="text-white italic">
    "Instructions tell Copilot how to behave, but they don't teach it how to do things it doesn't know how to do. I need custom capabilities—like validating against our TV show API schema or checking our specific deployment requirements."
  </div>
</div>

</div>

---

# 🎯 What You'll Learn

<div class="grid grid-cols-2 gap-6 mt-8">

<div class="p-4 bg-gradient-to-br from-blue-900/60 to-blue-800/40 rounded-lg border-2 border-blue-400">
  <div class="text-3xl mb-2">📦</div>
  <h3 class="text-lg font-bold text-white mb-2">Complete Capabilities</h3>
  <p class="text-sm text-gray-300">Skills = instructions + scripts + examples + resources bundled together</p>
</div>

<div class="p-4 bg-gradient-to-br from-green-900/60 to-green-800/40 rounded-lg border-2 border-green-400">
  <div class="text-3xl mb-2">📈</div>
  <h3 class="text-lg font-bold text-white mb-2">Progressive Loading</h3>
  <p class="text-sm text-gray-300">Three-level system keeps context efficient while having many skills available</p>
</div>

<div class="p-4 bg-gradient-to-br from-purple-900/60 to-purple-800/40 rounded-lg border-2 border-purple-400">
  <div class="text-3xl mb-2">🌐</div>
  <h3 class="text-lg font-bold text-white mb-2">Cross-Platform</h3>
  <p class="text-sm text-gray-300">Works in VS Code, Copilot CLI, and coding agent (agentskills.io standard)</p>
</div>

<div class="p-4 bg-gradient-to-br from-orange-900/60 to-orange-800/40 rounded-lg border-2 border-orange-400">
  <div class="text-3xl mb-2">⚡</div>
  <h3 class="text-lg font-bold text-white mb-2">Domain Expertise</h3>
  <p class="text-sm text-gray-300">Teach specialized workflows: API validation, test generation, debugging procedures</p>
</div>

</div>

---
layout: two-cols
---

# ❌ The "Before"

<div class="space-y-4 text-sm">

**API Endpoint Creation:**
- 😰 12 min explaining standards
- 😰 Schema mismatches require 8 min rework
- 😰 Repetitive validation steps

**Bug Reproduction Tests:**
- 😰 25 min/bug writing tests
- 😰 Inconsistent mocking patterns
- 😰 Forget edge cases 40% of time

**Build Debugging:**
- 😰 30 min/failure analyzing logs
- 😰 15 min reproduce, 15 min trace
- 😰 5 failures/sprint

</div>

::right::

# ✨ The "After"

<div class="space-y-4 text-sm">

**API Endpoint Creation:**
- ✨ 2 min with schema validation
- ✨ 0 schema mismatches
- ✨ 80 min/sprint saved

**Bug Reproduction Tests:**
- ✨ 4 min/bug with templates
- ✨ 100% edge case coverage
- ✨ 126 min/sprint saved

**Build Debugging:**
- ✨ 2 min to root cause
- ✨ Instant diagnostic analysis
- ✨ 140 min/sprint saved

</div>

---

# 👥 Key Personas

<div class="grid grid-cols-3 gap-4 mt-8">

<div class="p-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/40 dark:to-blue-800/40 rounded-lg border-2 border-blue-400">
  <div class="text-4xl mb-2">👨‍💼</div>
  <h3 class="text-lg font-bold">David</h3>
  <p class="text-xs opacity-75 mb-3">Staff Engineer · 20 years</p>
  <blockquote class="text-xs italic text-gray-700 dark:text-gray-300">
    "Instructions tell Copilot how to behave, but they don't teach it how to do things it doesn't know how to do."
  </blockquote>
</div>

<div class="p-4 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/40 dark:to-green-800/40 rounded-lg border-2 border-green-400">
  <div class="text-4xl mb-2">👩‍🔬</div>
  <h3 class="text-lg font-bold">Elena</h3>
  <p class="text-xs opacity-75 mb-3">Senior QA · 8 years</p>
  <blockquote class="text-xs italic text-gray-700 dark:text-gray-300">
    "I need test templates that capture our mocking patterns and edge case checklists."
  </blockquote>
</div>

<div class="p-4 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/40 dark:to-purple-800/40 rounded-lg border-2 border-purple-400">
  <div class="text-4xl mb-2">👨‍💻</div>
  <h3 class="text-lg font-bold">Marcus</h3>
  <p class="text-xs opacity-75 mb-3">DevOps Developer · 5 years</p>
  <blockquote class="text-xs italic text-gray-700 dark:text-gray-300">
    "Debugging build failures takes 30 minutes per failure. I need diagnostic automation."
  </blockquote>
</div>

</div>

---

# 📚 What Are Agent Skills?

<div class="text-base leading-relaxed">

**Folders** of instructions, scripts, examples, and resources that teach Copilot specialized capabilities.

<div class="grid grid-cols-2 gap-8 mt-8">

<div>
  <h3 class="text-lg font-bold text-blue-400 mb-3">Structure</h3>
  <div class="text-sm font-mono bg-gray-800 p-3 rounded-lg">
    .github/skills/<br/>
    &nbsp;&nbsp;api-endpoint-design/<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;SKILL.md<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;openapi-schema.yaml<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;example-endpoints/<br/>
    &nbsp;&nbsp;bug-test-generator/<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;SKILL.md<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;test-template.js<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;examples/
  </div>
</div>

<div>
  <h3 class="text-lg font-bold text-green-400 mb-3">Progressive Loading</h3>
  <div class="space-y-2 text-sm">
    <div class="p-2 bg-blue-900/40 rounded border-l-2 border-blue-400">
      <strong>Level 1:</strong> Discovery (metadata)
    </div>
    <div class="text-center text-gray-400">↓</div>
    <div class="p-2 bg-green-900/40 rounded border-l-2 border-green-400">
      <strong>Level 2:</strong> Instructions (SKILL.md)
    </div>
    <div class="text-center text-gray-400">↓</div>
    <div class="p-2 bg-purple-900/40 rounded border-l-2 border-purple-400">
      <strong>Level 3:</strong> Resources (on-demand)
    </div>
  </div>
</div>

</div>

</div>

---

# 🔑 Key Differences

<div class="grid grid-cols-3 gap-3 mt-6 text-xs">

<div class="p-3 bg-gray-800 rounded-lg border-2 border-gray-600">
  <div class="text-2xl mb-2">📝</div>
  <div class="text-white font-bold mb-2">Repository Instructions</div>
  <div class="space-y-1 text-gray-400">
    <div><strong>Scope:</strong> Repository-wide</div>
    <div><strong>Activation:</strong> Always active</div>
    <div><strong>Content:</strong> Instructions only</div>
    <div><strong>Purpose:</strong> Coding standards</div>
    <div class="text-blue-400 italic mt-2">"Use functional React"</div>
  </div>
</div>

<div class="p-3 bg-gray-800 rounded-lg border-2 border-gray-600">
  <div class="text-2xl mb-2">📍</div>
  <div class="text-white font-bold mb-2">Custom Instructions</div>
  <div class="space-y-1 text-gray-400">
    <div><strong>Scope:</strong> Path-based</div>
    <div><strong>Activation:</strong> When editing files</div>
    <div><strong>Content:</strong> Instructions only</div>
    <div><strong>Purpose:</strong> Context rules</div>
    <div class="text-green-400 italic mt-2">"Frontend gets UI patterns"</div>
  </div>
</div>

<div class="p-3 bg-gradient-to-br from-blue-900/60 to-blue-800/40 rounded-lg border-2 border-blue-400">
  <div class="text-2xl mb-2">🔨</div>
  <div class="text-white font-bold mb-2">Agent Skills</div>
  <div class="space-y-1 text-gray-300">
    <div><strong>Scope:</strong> Task capabilities</div>
    <div><strong>Activation:</strong> When task matches</div>
    <div><strong>Content:</strong> Instructions + scripts</div>
    <div><strong>Purpose:</strong> New workflows</div>
    <div class="text-yellow-400 italic mt-2">"Validate API schemas"</div>
  </div>
</div>

</div>

<div class="mt-6 p-4 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-lg text-center">
  <div class="text-lg font-bold text-white">Instructions guide behavior • Skills teach capabilities</div>
</div>

---

# 🔨 Exercises Overview

| # | Exercise | Lead | Time | Key Outcome |
|---|----------|------|------|-------------|
| **5.1** | API Endpoint Design Skill | Sarah ⭐ | 10 min | 12→2 min/endpoint, 0 schema mismatches |
| **5.2** | Bug Reproduction Test Generator | Elena ⭐ | 10 min | 25→4 min/bug, 100% edge case coverage |
| **5.3** | Build Pipeline Analyzer | Marcus ⭐ | 10 min | 30→2 min/failure, instant diagnostics |

<div class="mt-8 p-4 bg-blue-900/30 rounded-lg border-l-4 border-blue-400">
  <div class="text-sm">
    <strong class="text-blue-300">📦 What You'll Build:</strong> Three complete agent skills with instructions, scripts, examples, and resources that teach Copilot specialized FanHub workflows
  </div>
</div>

---

# 💭 David's Realization

<div class="flex flex-col items-center justify-center h-full">

<div class="max-w-2xl">

<div class="text-6xl mb-8 text-center">💡</div>

<blockquote class="text-2xl italic text-center leading-relaxed text-gray-300">
  "I spent 20 years learning how to validate API schemas, debug build failures, and generate comprehensive tests. With agent skills, I can package that expertise—instructions, scripts, examples—into reusable capabilities that the whole team benefits from."
</blockquote>

<div class="mt-8 text-center">
  <div class="text-lg font-bold text-blue-400">David, Staff Engineer</div>
  <div class="text-sm text-gray-500">After creating 3 agent skills</div>
</div>

</div>

</div>

---

# 📊 Success Metrics

<div class="grid grid-cols-3 gap-6 mt-8">

<div class="text-center">
  <div class="text-5xl font-bold text-green-400 mb-2">346 min</div>
  <div class="text-sm text-gray-400">Total time saved per sprint</div>
  <div class="text-xs text-gray-500 mt-2">(API: 80 min + Tests: 126 min + Build: 140 min)</div>
</div>

<div class="text-center">
  <div class="text-5xl font-bold text-blue-400 mb-2">83%</div>
  <div class="text-sm text-gray-400">Average time reduction</div>
  <div class="text-xs text-gray-500 mt-2">(12→2 min, 25→4 min, 30→2 min)</div>
</div>

<div class="text-center">
  <div class="text-5xl font-bold text-purple-400 mb-2">100%</div>
  <div class="text-sm text-gray-400">Quality improvements</div>
  <div class="text-xs text-gray-500 mt-2">(0 schema mismatches, full edge case coverage)</div>
</div>

</div>

<div class="mt-8 grid grid-cols-2 gap-4">

<div class="p-4 bg-gray-800 rounded-lg">
  <div class="text-lg font-bold text-white mb-2">⚡ Workflow Acceleration</div>
  <div class="text-sm text-gray-400">
    API endpoints: <span class="text-green-400 font-bold">6x faster</span><br/>
    Bug tests: <span class="text-green-400 font-bold">6.25x faster</span><br/>
    Build debugging: <span class="text-green-400 font-bold">15x faster</span>
  </div>
</div>

<div class="p-4 bg-gray-800 rounded-lg">
  <div class="text-lg font-bold text-white mb-2">🎯 Quality Gains</div>
  <div class="text-sm text-gray-400">
    Schema compliance: <span class="text-blue-400 font-bold">Perfect</span><br/>
    Edge case coverage: <span class="text-blue-400 font-bold">Complete</span><br/>
    Root cause speed: <span class="text-blue-400 font-bold">Instant</span>
  </div>
</div>

</div>

---

# 🧠 Mindful Moment

<div class="flex flex-col items-center justify-center h-full">

<div class="max-w-3xl">

<div class="text-center mb-8">
  <div class="text-5xl mb-4">🧠</div>
  <h2 class="text-2xl font-bold text-blue-400">From Instructions to Capabilities</h2>
</div>

<div class="grid grid-cols-2 gap-8">

<div class="p-6 bg-red-900/30 rounded-lg border-2 border-red-500">
  <div class="text-sm text-red-400 font-bold mb-2">Traditional Thinking</div>
  <div class="text-gray-300 italic">
    "I'll write detailed instructions and hope Copilot figures out how to apply them correctly."
  </div>
</div>

<div class="p-6 bg-green-900/30 rounded-lg border-2 border-green-500">
  <div class="text-sm text-green-400 font-bold mb-2">AI-Native Thinking</div>
  <div class="text-gray-300 italic">
    "I'll create a skill—instructions + scripts + examples + resources—that teaches Copilot a complete, repeatable workflow."
  </div>
</div>

</div>

<div class="mt-8 p-5 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-lg text-center">
  <div class="text-xl font-bold text-white">Skills teach new capabilities, not just coding guidelines</div>
</div>

</div>

</div>

---

# 🔗 How It Compounds

<div class="mt-8 space-y-6">

<div class="flex items-center gap-4">
  <div class="p-3 bg-blue-900/60 rounded-lg border-2 border-blue-400 flex-shrink-0">
    <span class="text-2xl">📚</span>
  </div>
  <div class="flex-grow">
    <div class="text-white font-bold">Repository Instructions (Module 1)</div>
    <div class="text-sm text-gray-400">Set baseline: "Use functional React, async/await patterns"</div>
  </div>
  <span class="text-2xl text-gray-400">+</span>
</div>

<div class="flex items-center gap-4">
  <div class="p-3 bg-green-900/60 rounded-lg border-2 border-green-400 flex-shrink-0">
    <span class="text-2xl">📍</span>
  </div>
  <div class="flex-grow">
    <div class="text-white font-bold">Custom Instructions (Module 4)</div>
    <div class="text-sm text-gray-400">Context rules: "Frontend → UI patterns, Backend → API conventions"</div>
  </div>
  <span class="text-2xl text-gray-400">+</span>
</div>

<div class="flex items-center gap-4">
  <div class="p-3 bg-purple-900/60 rounded-lg border-2 border-purple-400 flex-shrink-0">
    <span class="text-2xl">🔨</span>
  </div>
  <div class="flex-grow">
    <div class="text-white font-bold">Agent Skills (Module 5)</div>
    <div class="text-sm text-gray-400">Specialized workflows: "Validate APIs with OpenAPI schema + examples"</div>
  </div>
</div>

<div class="text-3xl text-gray-400 text-center">↓</div>

<div class="p-5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg text-center">
  <div class="text-xl font-bold text-white">Copilot knows standards + context + specialized capabilities</div>
</div>

</div>

---

# ⭐ Prerequisites

<div class="grid grid-cols-2 gap-6 mt-8">

<div class="space-y-3">
  <h3 class="text-lg font-bold text-blue-400">Required Modules</h3>
  <div class="space-y-2 text-sm">
    <div class="p-2 bg-gray-800 rounded flex items-center gap-2">
      <span class="text-green-400">✅</span>
      <span>Module 00: Orientation</span>
    </div>
    <div class="p-2 bg-gray-800 rounded flex items-center gap-2">
      <span class="text-green-400">✅</span>
      <span>Module 01: Repository Instructions</span>
    </div>
    <div class="p-2 bg-gray-800 rounded flex items-center gap-2">
      <span class="text-green-400">✅</span>
      <span>Module 04: Custom Instructions</span>
    </div>
  </div>
</div>

<div class="space-y-3">
  <h3 class="text-lg font-bold text-blue-400">Required Setting</h3>
  <div class="p-4 bg-yellow-900/40 rounded-lg border-2 border-yellow-500">
    <div class="font-mono text-sm text-yellow-300 mb-2">chat.useAgentSkills</div>
    <div class="text-xs text-gray-300">Enable in VS Code settings for Agent Skills support</div>
  </div>
  <div class="text-xs text-gray-400 italic mt-2">
    Without this setting, skills won't load in Copilot Chat
  </div>
</div>

</div>

---

# 🌐 Cross-Platform Power

<div class="flex flex-col items-center justify-center h-full">

<div class="max-w-3xl">

<div class="text-center mb-8">
  <div class="text-5xl mb-4">🌐</div>
  <h2 class="text-2xl font-bold text-blue-400">Based on Open Standard: agentskills.io</h2>
</div>

<div class="grid grid-cols-3 gap-4 mb-8">

<div class="p-4 bg-blue-900/40 rounded-lg text-center border-2 border-blue-400">
  <div class="text-3xl mb-2">💻</div>
  <div class="text-white font-bold">VS Code</div>
  <div class="text-xs text-gray-400 mt-2">Copilot Chat integration</div>
</div>

<div class="p-4 bg-green-900/40 rounded-lg text-center border-2 border-green-400">
  <div class="text-3xl mb-2">⌨️</div>
  <div class="text-white font-bold">Copilot CLI</div>
  <div class="text-xs text-gray-400 mt-2">Terminal workflows</div>
</div>

<div class="p-4 bg-purple-900/40 rounded-lg text-center border-2 border-purple-400">
  <div class="text-3xl mb-2">🤖</div>
  <div class="text-white font-bold">Coding Agent</div>
  <div class="text-xs text-gray-400 mt-2">Autonomous execution</div>
</div>

</div>

<div class="p-5 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-lg text-center">
  <div class="text-lg font-bold text-white">Write once, use everywhere • Share with AI community</div>
</div>

</div>

</div>

---

# ➡️ What's Next

<div class="flex flex-col items-center justify-center h-full">

<div class="max-w-3xl">

<div class="text-center mb-8">
  <h2 class="text-3xl font-bold text-blue-400">Module 6: MCP Servers</h2>
  <div class="text-gray-400 mt-2">Runtime integration with external services</div>
</div>

<div class="mb-8 p-5 bg-blue-900/30 rounded-lg border-l-4 border-blue-400">
  <div class="text-sm text-gray-400 mb-2">Marcus asks...</div>
  <div class="text-lg italic text-white">
    "Skills taught Copilot how to validate against our API schema. But the schema is static. What if I need Copilot to query our actual PostgreSQL database or call our live TV show API to validate real data?"
  </div>
</div>

<div class="grid grid-cols-2 gap-4 text-sm">

<div class="p-4 bg-gray-800 rounded-lg">
  <div class="text-purple-400 font-bold mb-2">🔨 Agent Skills</div>
  <div class="text-gray-400">Teach specialized workflows with static resources</div>
</div>

<div class="p-4 bg-gradient-to-br from-blue-900/60 to-blue-800/40 rounded-lg border-2 border-blue-400">
  <div class="text-blue-300 font-bold mb-2">🔌 MCP Servers</div>
  <div class="text-gray-300">Connect to live databases, APIs, cloud platforms</div>
</div>

</div>

</div>

</div>

---
layout: end
---

# ✨ Module 5 Complete

<div class="text-center">
  <div class="text-6xl mb-6">🎉</div>
  <div class="text-2xl mb-4">You've taught Copilot specialized capabilities!</div>
  <div class="text-gray-400">Continue to Module 6: MCP Servers</div>
</div>
