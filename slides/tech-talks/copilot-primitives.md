---
theme: default
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Copilot Configuration Primitives
  CopilotTraining Tech Talk
drawings:
  persist: false
transition: slide-left
title: Copilot Configuration Primitives - Making AI Understand Your Codebase
module: tech-talks/copilot-primitives
mdc: true
status: active
updated: 2026-02-08
---

<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
  <div class="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-teal-900/10 to-cyan-900/20"></div>
  <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-cyan-500/20 rounded-full blur-3xl"></div>
  <div class="relative z-10">
    <div class="absolute inset-0 blur-2xl opacity-50">
      <img src="./sdp-logo.png" class="w-64" alt="" />
    </div>
    <img src="./sdp-logo.png" class="w-64 relative" alt="SDP Logo" />
  </div>
  <h1 class="!text-5xl !font-bold !mt-8 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent relative z-10">
    Configuration Primitives
  </h1>
  <div class="mt-4 relative z-10">
    <span class="px-6 py-2 bg-gradient-to-r from-emerald-600/80 to-teal-600/80 rounded-full text-white text-xl font-medium shadow-lg shadow-emerald-500/25">
      Making AI Understand Your Codebase
    </span>
  </div>
  <div class="mt-8 text-lg opacity-70 relative z-10">
    Instructions · Skills · Prompts · Agents
  </div>
  <div class="mt-6 w-32 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent rounded-full relative z-10"></div>
</div>

<div class="abs-br m-6 flex gap-2">
  <span class="text-sm opacity-50">Tech Talk · 30 minutes</span>
</div>

---

# The Question This Talk Answers

<div class="mt-10 flex items-center justify-center">
  <div class="p-8 bg-gradient-to-br from-teal-900/60 to-emerald-900/60 rounded-xl border-2 border-emerald-400 max-w-3xl">
    <div class="text-4xl mb-4 text-center">💭</div>
    <div class="text-2xl font-bold text-emerald-200 text-center leading-relaxed">
      "How can I make GitHub Copilot understand my codebase better?"
    </div>
  </div>
</div>

<div class="mt-12 text-center">
  <div class="inline-block px-6 py-3 bg-teal-600/80 rounded-lg">
    <div class="text-lg font-medium text-white">Target: Developers & Engineering Teams</div>
  </div>
</div>

---
layout: center
name: toc
---

# Table of Contents

<div class="mt-8 grid grid-cols-2 gap-5">

<div class="p-5 bg-gradient-to-br from-emerald-900/40 to-emerald-900/20 rounded-xl border border-emerald-500/30">
  <div class="text-2xl mb-2">📋</div>
  <div class="font-bold text-emerald-300">Instructions</div>
  <div class="text-sm text-gray-400 mt-1">Always-on guardrails — coding standards and project context</div>
</div>

<div class="p-5 bg-gradient-to-br from-teal-900/40 to-teal-900/20 rounded-xl border border-teal-500/30">
  <div class="text-2xl mb-2">🧰</div>
  <div class="font-bold text-teal-300">Skills</div>
  <div class="text-sm text-gray-400 mt-1">On-demand expertise with scripts and resources</div>
</div>

<div class="p-5 bg-gradient-to-br from-cyan-900/40 to-cyan-900/20 rounded-xl border border-cyan-500/30">
  <div class="text-2xl mb-2">⚡</div>
  <div class="font-bold text-cyan-300">Custom Prompts</div>
  <div class="text-sm text-gray-400 mt-1">Reusable task workflows invoked via /command</div>
</div>

<div class="p-5 bg-gradient-to-br from-blue-900/40 to-blue-900/20 rounded-xl border border-blue-500/30">
  <div class="text-2xl mb-2">🤖</div>
  <div class="font-bold text-blue-300">Agents</div>
  <div class="text-sm text-gray-400 mt-1">Specialized AI personas with constrained tools</div>
</div>

</div>

---

# The Problem

<div class="mt-6 space-y-4">

<div class="p-4 bg-red-900/30 rounded-lg border-l-4 border-red-500">
  <div class="font-bold text-red-400">Generic responses that ignore your conventions</div>
  <div class="text-gray-300 mt-1 text-sm">You use Prisma — Copilot suggests raw SQL. You use Vitest — it generates Mocha patterns.</div>
</div>

<div class="p-4 bg-orange-900/30 rounded-lg border-l-4 border-orange-500">
  <div class="font-bold text-orange-400">Repeated context in every conversation</div>
  <div class="text-gray-300 mt-1 text-sm">"We use TypeScript with strict mode, our tests are in __tests__/, we use..." — every single time.</div>
</div>

<div class="p-4 bg-yellow-900/30 rounded-lg border-l-4 border-yellow-500">
  <div class="font-bold text-yellow-400">Inconsistent AI behavior across the team</div>
  <div class="text-gray-300 mt-1 text-sm">Same question, different developer, wildly different response quality — because context varies.</div>
</div>

<div class="p-4 bg-blue-900/30 rounded-lg border-l-4 border-blue-500">
  <div class="font-bold text-blue-400">One-size-fits-all doesn't fit anyone</div>
  <div class="text-gray-300 mt-1 text-sm">Default Copilot treats your React frontend and Python pipeline identically.</div>
</div>

</div>

<div class="absolute bottom-4 left-8 text-xs opacity-40">[1] code.visualstudio.com/docs/copilot/copilot-customization</div>

---

# The Solution: 4 Configuration Primitives

<div class="mt-4">

<div class="bg-gradient-to-r from-gray-900/80 to-gray-800/80 rounded-xl p-6 border border-gray-700">

<div class="space-y-3">
  <div class="flex items-center gap-4 p-3 bg-emerald-900/30 rounded-lg border border-emerald-500/30">
    <div class="text-2xl w-10">📋</div>
    <div>
      <span class="font-bold text-emerald-300">Instructions</span>
      <span class="text-gray-400 ml-2 text-sm">Always-on guardrails injected into every request</span>
    </div>
    <div class="ml-auto text-xs text-emerald-400 font-mono">.instructions.md</div>
  </div>

  <div class="flex items-center gap-4 p-3 bg-teal-900/30 rounded-lg border border-teal-500/30">
    <div class="text-2xl w-10">🧰</div>
    <div>
      <span class="font-bold text-teal-300">Skills</span>
      <span class="text-gray-400 ml-2 text-sm">On-demand capability packs loaded by relevance</span>
    </div>
    <div class="ml-auto text-xs text-teal-400 font-mono">SKILL.md</div>
  </div>

  <div class="flex items-center gap-4 p-3 bg-cyan-900/30 rounded-lg border border-cyan-500/30">
    <div class="text-2xl w-10">⚡</div>
    <div>
      <span class="font-bold text-cyan-300">Prompts</span>
      <span class="text-gray-400 ml-2 text-sm">Reusable task templates via /command</span>
    </div>
    <div class="ml-auto text-xs text-cyan-400 font-mono">.prompt.md</div>
  </div>

  <div class="flex items-center gap-4 p-3 bg-blue-900/30 rounded-lg border border-blue-500/30">
    <div class="text-2xl w-10">🤖</div>
    <div>
      <span class="font-bold text-blue-300">Agents</span>
      <span class="text-gray-400 ml-2 text-sm">Specialized personas with constrained tools</span>
    </div>
    <div class="ml-auto text-xs text-blue-400 font-mono">.agent.md</div>
  </div>
</div>

</div>

<div class="mt-4 text-center text-sm text-gray-500">All Markdown files · Version controlled · Team-shared</div>

</div>

<div class="absolute bottom-4 left-8 text-xs opacity-40">[3] code.visualstudio.com/docs/copilot/customization/overview</div>

---

# 🧠 The Shift

<div class="h-full flex flex-col items-center justify-center -mt-12">
  <div class="max-w-4xl w-full">

<div class="grid grid-cols-3 gap-8 items-center">

<div class="text-center p-6 bg-red-900/20 rounded-xl border border-red-500/30">
  <div class="text-4xl mb-4">🔄</div>
  <div class="text-lg font-bold text-red-300">Repeating context</div>
  <div class="text-sm text-gray-400 mt-2">in every conversation</div>
</div>

<div class="text-center">
  <div class="text-5xl text-emerald-400">→</div>
</div>

<div class="text-center p-6 bg-emerald-900/20 rounded-xl border border-emerald-500/30">
  <div class="text-4xl mb-4">📁</div>
  <div class="text-lg font-bold text-emerald-300">Encode once</div>
  <div class="text-sm text-gray-400 mt-2">in configuration files</div>
</div>

</div>

<div class="mt-10 text-center">
  <div class="text-xl text-gray-300 italic">
    "Every interaction becomes smarter — automatically."
  </div>
</div>

  </div>
</div>

---

# 📋 Instructions: The Foundation

<div class="mt-4 grid grid-cols-2 gap-6">

<div>

### How It Works

<div class="mt-2 space-y-2 text-sm">

- Create `.github/copilot-instructions.md`
- Contents **automatically injected** into every request
- No special syntax — just Markdown
- Appears in **References** section of chat responses
- Use `/init` to auto-generate from your workspace

</div>

### Two Types

<div class="mt-2 space-y-2">

<div class="p-2 bg-emerald-900/30 rounded border border-emerald-500/20 text-sm">
  <span class="font-bold text-emerald-300">Repository-wide</span>
  <span class="text-gray-400 ml-1">.github/copilot-instructions.md</span>
</div>

<div class="p-2 bg-teal-900/30 rounded border border-teal-500/20 text-sm">
  <span class="font-bold text-teal-300">Path-specific</span>
  <span class="text-gray-400 ml-1">.github/instructions/*.instructions.md</span>
</div>

</div>

</div>

<div>

### Example

```markdown
# Repository Instructions

This repo uses TypeScript with strict
type checking enabled.

## Build and Test
- Build: `npm run build`
- Tests: `npm test` (Jest)
- Tests in `__tests__/` co-located

## Coding Standards
- Functional programming patterns
- Explicit return types
- JSDoc for exported functions
- Named exports only
```

</div>

</div>

<div class="absolute bottom-4 left-8 text-xs opacity-40">[2] code.visualstudio.com/docs/copilot/customization/custom-instructions</div>

---

# 📋 Path-Specific Instructions

<div class="mt-4 grid grid-cols-2 gap-6">

<div>

### Targeted Rules via Glob Patterns

Apply **different conventions** to different parts of your codebase automatically:

```markdown
---
applyTo: "src/models/**/*.ts"
---

# Database Model Instructions

1. Use Prisma schema definitions
2. Include JSDoc with field descriptions
3. Define relationships with @relation
4. Add indexes for foreign keys
5. snake_case DB columns, camelCase TS
6. Always include createdAt, updatedAt
```

<div class="mt-4 text-sm text-gray-400">Path-specific + repo-wide instructions combine when both match.</div>

</div>

<div>

### Common Patterns

<div class="space-y-3 mt-2">

<div class="p-3 bg-gray-800/60 rounded-lg text-sm">
  <div class="font-mono text-emerald-400 text-xs">applyTo: "**/*.test.ts"</div>
  <div class="text-gray-300 mt-1">Test writing standards</div>
</div>

<div class="p-3 bg-gray-800/60 rounded-lg text-sm">
  <div class="font-mono text-teal-400 text-xs">applyTo: "src/api/**/*.ts"</div>
  <div class="text-gray-300 mt-1">API route conventions</div>
</div>

<div class="p-3 bg-gray-800/60 rounded-lg text-sm">
  <div class="font-mono text-cyan-400 text-xs">applyTo: "**/*.css"</div>
  <div class="text-gray-300 mt-1">Styling guidelines</div>
</div>

<div class="p-3 bg-gray-800/60 rounded-lg text-sm">
  <div class="font-mono text-blue-400 text-xs">applyTo: "docs/**/*.md"</div>
  <div class="text-gray-300 mt-1">Documentation standards</div>
</div>

</div>

<div class="mt-4 p-3 bg-amber-900/20 rounded-lg border border-amber-500/30 text-sm">
  <span class="text-amber-400">💡 Tip:</span> Keep instructions under 2 pages — context budget matters
</div>

</div>

</div>

<div class="absolute bottom-4 left-8 text-xs opacity-40">[6] docs.github.com/copilot/customizing-copilot/adding-repository-custom-instructions</div>

---

# 🧰 Skills: On-Demand Expertise

<div class="mt-4 grid grid-cols-2 gap-6">

<div>

### Progressive 3-Level Loading

<div class="space-y-3 mt-2">

<div class="p-3 bg-teal-900/30 rounded-lg border border-teal-500/20">
  <div class="font-bold text-teal-300 text-sm">Level 1: Discovery</div>
  <div class="text-xs text-gray-400 mt-1">Name + description always visible (lightweight)</div>
</div>

<div class="p-3 bg-teal-900/40 rounded-lg border border-teal-500/30">
  <div class="font-bold text-teal-200 text-sm">Level 2: Instructions</div>
  <div class="text-xs text-gray-400 mt-1">Full SKILL.md loaded when prompt matches</div>
</div>

<div class="p-3 bg-teal-900/50 rounded-lg border border-teal-500/40">
  <div class="font-bold text-teal-100 text-sm">Level 3: Resources</div>
  <div class="text-xs text-gray-400 mt-1">Scripts, templates, examples on-demand</div>
</div>

</div>

### Open Standard

<div class="mt-3 p-3 bg-gray-800/60 rounded-lg text-sm">
  Works across <span class="text-teal-300 font-bold">VS Code</span>,
  <span class="text-teal-300 font-bold">Copilot CLI</span>, and
  <span class="text-teal-300 font-bold">coding agent</span>
  <div class="text-xs text-gray-500 mt-1">agentskills.io</div>
</div>

</div>

<div>

### Skill Structure

```
.github/skills/
  test-runner/
    SKILL.md           # Instructions
    test-template.ts   # Template file
    scripts/
      run-tests.sh     # Executable
    examples/
      api-test.ts      # Reference
```

### Example SKILL.md

```markdown
---
name: test-runner
description: Run tests, analyze
  failures, suggest fixes
---

# Test Runner Skill

## Process
1. Locate test files
2. Run with `npm test`
3. Analyze failure traces
4. Suggest targeted fixes
```

</div>

</div>

<div class="absolute bottom-4 left-8 text-xs opacity-40">[4] code.visualstudio.com/docs/copilot/customization/agent-skills</div>

---

# ⚡ Custom Prompts: Reusable Workflows

<div class="mt-4 grid grid-cols-2 gap-6">

<div>

### How Prompts Work

<div class="mt-2 space-y-2 text-sm">

- Create `.github/prompts/*.prompt.md`
- Invoke in chat: type `/` + prompt name
- **On-demand** — only runs when you call it
- Supports variables: `${selection}`, `${file}`, `${input:name}`
- Can reference instructions via Markdown links
- Specifies agent and tools in frontmatter

</div>

### Usage

```
/component MyButtonGroup
/test UserService
/security-review
```

<div class="mt-3 p-3 bg-cyan-900/20 rounded-lg border border-cyan-500/30 text-sm">
  <span class="text-cyan-400">Key difference:</span> Instructions are always-on.
  Prompts are <span class="text-white font-bold">user-invoked</span>.
</div>

</div>

<div>

### Example Prompt File

```markdown
---
name: component
description: Scaffold a React component
  with tests and documentation
tools: ['editFiles', 'createFile']
agent: agent
---

# Component Generator

Create a new React component:

src/components/{{componentName}}/
  {{componentName}}.tsx
  {{componentName}}.types.ts
  {{componentName}}.module.css
  __tests__/
    {{componentName}}.test.tsx
  index.ts

## Requirements
- Functional component with hooks
- TypeScript props interface
- Follow [coding standards](
    ../../copilot-instructions.md)
```

</div>

</div>

<div class="absolute bottom-4 left-8 text-xs opacity-40">[3] code.visualstudio.com/docs/copilot/customization/prompt-files</div>

---

# 🤖 Agents: Specialized Personas

<div class="mt-4 grid grid-cols-2 gap-6">

<div>

### What Agents Do

<div class="mt-2 space-y-2 text-sm">

- Define **who** the AI becomes for a session
- Constrain available **tools** (read-only, full access, etc.)
- Set **model** preferences per role
- Enable **handoffs** between agents
- Support **subagent** delegation

</div>

### Why Constrain Tools?

<div class="mt-3 space-y-2">

<div class="p-2 bg-blue-900/30 rounded text-sm border border-blue-500/20">
  <span class="text-blue-300 font-bold">Planner:</span>
  <span class="text-gray-400">search, readFile, listFiles</span>
  <span class="text-xs text-blue-400 ml-1">(read-only)</span>
</div>

<div class="p-2 bg-blue-900/30 rounded text-sm border border-blue-500/20">
  <span class="text-blue-300 font-bold">Implementer:</span>
  <span class="text-gray-400">editFiles, terminal, search</span>
  <span class="text-xs text-blue-400 ml-1">(full access)</span>
</div>

<div class="p-2 bg-blue-900/30 rounded text-sm border border-blue-500/20">
  <span class="text-blue-300 font-bold">Reviewer:</span>
  <span class="text-gray-400">search, readFile, fetch</span>
  <span class="text-xs text-blue-400 ml-1">(analysis only)</span>
</div>

</div>

</div>

<div>

### Example Agent

```markdown
---
name: planner
description: Generate implementation
  plans. Read-only.
tools:
  - search
  - readFile
  - listFiles
  - fetch
model: Claude Sonnet 4 (copilot)
handoffs:
  - label: Start Implementation
    agent: agent
    prompt: Implement the plan above.
---

# Planning Agent

You are a senior software architect.

## Rules
- NEVER modify files
- Cite specific files and lines
- Include effort estimates
- Flag decisions needing discussion
```

</div>

</div>

<div class="absolute bottom-4 left-8 text-xs opacity-40">[5] code.visualstudio.com/docs/copilot/customization/custom-agents</div>

---

# 🤖 Handoffs: Multi-Agent Workflows

<div class="mt-6">

<div class="flex items-center justify-center gap-4">

<div class="p-4 bg-blue-900/40 rounded-xl border border-blue-500/30 text-center w-44">
  <div class="text-3xl mb-2">📋</div>
  <div class="font-bold text-blue-300">Plan</div>
  <div class="text-xs text-gray-400 mt-1">Read-only research</div>
  <div class="text-xs text-blue-400 mt-1">search, readFile</div>
</div>

<div class="text-2xl text-emerald-400">→</div>

<div class="p-4 bg-emerald-900/40 rounded-xl border border-emerald-500/30 text-center w-44">
  <div class="text-3xl mb-2">🔨</div>
  <div class="font-bold text-emerald-300">Implement</div>
  <div class="text-xs text-gray-400 mt-1">Full editing access</div>
  <div class="text-xs text-emerald-400 mt-1">editFiles, terminal</div>
</div>

<div class="text-2xl text-emerald-400">→</div>

<div class="p-4 bg-purple-900/40 rounded-xl border border-purple-500/30 text-center w-44">
  <div class="text-3xl mb-2">🔍</div>
  <div class="font-bold text-purple-300">Review</div>
  <div class="text-xs text-gray-400 mt-1">Security analysis</div>
  <div class="text-xs text-purple-400 mt-1">search, fetch</div>
</div>

</div>

<div class="mt-8 p-4 bg-gray-800/60 rounded-lg text-sm max-w-xl mx-auto">

```yaml
# In planner.agent.md
handoffs:
  - label: Start Implementation
    agent: agent
    prompt: Implement the plan outlined above.
    send: false
  - label: Review Code
    agent: security-reviewer
    prompt: Review for security issues.
```

</div>

<div class="mt-4 text-center text-sm text-gray-500">Each agent has its own tools and constraints — context flows between them</div>

</div>

---

# Choosing the Right Primitive

<div class="mt-4">

<table class="w-full text-sm">
<thead>
<tr class="border-b border-gray-700">
  <th class="text-left p-2 text-gray-400">Aspect</th>
  <th class="text-left p-2 text-emerald-300">Instructions</th>
  <th class="text-left p-2 text-teal-300">Skills</th>
  <th class="text-left p-2 text-cyan-300">Prompts</th>
  <th class="text-left p-2 text-blue-300">Agents</th>
</tr>
</thead>
<tbody>
<tr class="border-b border-gray-800">
  <td class="p-2 text-gray-400 font-medium">Loading</td>
  <td class="p-2">Always-on</td>
  <td class="p-2">AI matches</td>
  <td class="p-2">User invokes /</td>
  <td class="p-2">User selects</td>
</tr>
<tr class="border-b border-gray-800">
  <td class="p-2 text-gray-400 font-medium">Scope</td>
  <td class="p-2">Every request</td>
  <td class="p-2">When relevant</td>
  <td class="p-2">Single task</td>
  <td class="p-2">Full session</td>
</tr>
<tr class="border-b border-gray-800">
  <td class="p-2 text-gray-400 font-medium">Includes</td>
  <td class="p-2">Markdown</td>
  <td class="p-2">Scripts, files</td>
  <td class="p-2">Variables</td>
  <td class="p-2">Tool restrictions</td>
</tr>
<tr class="border-b border-gray-800">
  <td class="p-2 text-gray-400 font-medium">Portability</td>
  <td class="p-2">VS Code + GH</td>
  <td class="p-2">VS Code + CLI</td>
  <td class="p-2">VS Code</td>
  <td class="p-2">VS Code</td>
</tr>
<tr>
  <td class="p-2 text-gray-400 font-medium">Setup</td>
  <td class="p-2 text-emerald-400">5 min</td>
  <td class="p-2 text-teal-400">15 min</td>
  <td class="p-2 text-cyan-400">10 min</td>
  <td class="p-2 text-blue-400">20 min</td>
</tr>
</tbody>
</table>

<div class="mt-6 p-4 bg-amber-900/20 rounded-lg border border-amber-500/30">
  <div class="font-bold text-amber-300 text-sm">💡 Start Here for Most Teams</div>
  <div class="text-sm text-gray-300 mt-2">
    <span class="text-emerald-400 font-bold">Week 1:</span> copilot-instructions.md →
    <span class="text-teal-400 font-bold">Week 2:</span> path-specific instructions →
    <span class="text-cyan-400 font-bold">Week 3:</span> first prompt →
    <span class="text-blue-400 font-bold">Month 2+:</span> skills & agents
  </div>
</div>

</div>

---

# Real-World Use Cases

<div class="mt-4 grid grid-cols-2 gap-4">

<div class="p-4 bg-emerald-900/20 rounded-lg border border-emerald-500/20">
  <div class="font-bold text-emerald-300">🏗️ Monorepo Conventions</div>
  <div class="text-xs text-gray-400 mt-1 font-medium">Primitive: Path-specific Instructions</div>
  <div class="text-sm text-gray-300 mt-2">React frontend, Node backend, React Native mobile — each gets its own conventions via applyTo globs</div>
  <div class="mt-2 text-sm text-emerald-400 font-bold">40% fewer code review style comments</div>
</div>

<div class="p-4 bg-teal-900/20 rounded-lg border border-teal-500/20">
  <div class="font-bold text-teal-300">🧪 Test Standardization</div>
  <div class="text-xs text-gray-400 mt-1 font-medium">Primitive: Prompt + Skill</div>
  <div class="text-sm text-gray-300 mt-2">/test command generates conformant tests. Test-runner skill analyzes failures and suggests fixes.</div>
  <div class="mt-2 text-sm text-teal-400 font-bold">Conformant tests from day 1</div>
</div>

<div class="p-4 bg-cyan-900/20 rounded-lg border border-cyan-500/20">
  <div class="font-bold text-cyan-300">🗄️ Database Safety</div>
  <div class="text-xs text-gray-400 mt-1 font-medium">Primitive: Agent</div>
  <div class="text-sm text-gray-300 mt-2">Database admin agent enforces 3NF, generates up/down migrations, suggests strategic indexes</div>
  <div class="mt-2 text-sm text-cyan-400 font-bold">Zero migration rollbacks in 6 months</div>
</div>

<div class="p-4 bg-blue-900/20 rounded-lg border border-blue-500/20">
  <div class="font-bold text-blue-300">🚀 Fast Onboarding</div>
  <div class="text-xs text-gray-400 mt-1 font-medium">Primitive: Instructions + Prompt</div>
  <div class="text-sm text-gray-300 mt-2">Instructions document architecture. /onboard prompt provides guided codebase tour.</div>
  <div class="mt-2 text-sm text-blue-400 font-bold">2 weeks → 3 days to first commit</div>
</div>

</div>

---

# 🧠 Mental Model Shift

<div class="mt-4 grid grid-cols-2 gap-6">

<div>

### ✅ Move Toward

<div class="space-y-2 mt-2 text-sm">

<div class="p-2 bg-emerald-900/20 rounded border border-emerald-500/20">
  <span class="text-emerald-300 font-bold">File-based config</span>
  <div class="text-gray-400 text-xs mt-1">Encode conventions once in .github/ instead of repeating in every prompt</div>
</div>

<div class="p-2 bg-emerald-900/20 rounded border border-emerald-500/20">
  <span class="text-emerald-300 font-bold">Progressive enhancement</span>
  <div class="text-gray-400 text-xs mt-1">Start simple, add complexity only when clear need emerges</div>
</div>

<div class="p-2 bg-emerald-900/20 rounded border border-emerald-500/20">
  <span class="text-emerald-300 font-bold">Team-shared AI knowledge</span>
  <div class="text-gray-400 text-xs mt-1">Config in version control = reviewable institutional knowledge</div>
</div>

</div>

</div>

<div>

### 🛑 Move Against

<div class="space-y-2 mt-2 text-sm">

<div class="p-2 bg-red-900/20 rounded border border-red-500/20">
  <span class="text-red-300 font-bold">Over-engineering with agents first</span>
  <div class="text-gray-400 text-xs mt-1">80% of teams get most value from instructions alone</div>
</div>

<div class="p-2 bg-red-900/20 rounded border border-red-500/20">
  <span class="text-red-300 font-bold">Massive instruction files</span>
  <div class="text-gray-400 text-xs mt-1">Keep under 2 pages — bloat consumes your context budget</div>
</div>

<div class="p-2 bg-red-900/20 rounded border border-red-500/20">
  <span class="text-red-300 font-bold">Task-specific content in instructions</span>
  <div class="text-gray-400 text-xs mt-1">General conventions only — use prompts for specific tasks</div>
</div>

</div>

### ⚠️ Move Away

<div class="p-2 bg-amber-900/20 rounded border border-amber-500/20 mt-2 text-sm">
  <span class="text-amber-300 font-bold">Copy-pasting context every conversation</span>
  <div class="text-gray-400 text-xs mt-1">Instructions eliminate this entirely</div>
</div>

</div>

</div>

---

# ✅ What You Can Do Today

<div class="mt-4 grid grid-cols-3 gap-4">

<div class="p-4 bg-emerald-900/20 rounded-xl border border-emerald-500/30">
  <div class="text-sm font-bold text-emerald-300 mb-3">⏱️ 5 Minutes</div>
  <div class="space-y-2 text-sm text-gray-300">
    <div>☐ Create <code class="text-xs">.github/copilot-instructions.md</code></div>
    <div>☐ Add tech stack + build commands + coding standards</div>
    <div>☐ Try <code class="text-xs">/init</code> to auto-generate</div>
  </div>
</div>

<div class="p-4 bg-teal-900/20 rounded-xl border border-teal-500/30">
  <div class="text-sm font-bold text-teal-300 mb-3">⏱️ 1 Hour</div>
  <div class="space-y-2 text-sm text-gray-300">
    <div>☐ Add path-specific instructions</div>
    <div>☐ Create first <code class="text-xs">.prompt.md</code></div>
    <div>☐ Browse <a href="https://github.com/github/awesome-copilot" class="text-teal-400">Awesome Copilot</a> examples</div>
  </div>
</div>

<div class="p-4 bg-blue-900/20 rounded-xl border border-blue-500/30">
  <div class="text-sm font-bold text-blue-300 mb-3">⏱️ 2-4 Hours</div>
  <div class="space-y-2 text-sm text-gray-300">
    <div>☐ Build a skill for a common task</div>
    <div>☐ Create planning agent</div>
    <div>☐ Set up multi-agent workflow</div>
  </div>
</div>

</div>

<div class="mt-8 p-4 bg-gradient-to-r from-emerald-900/30 to-teal-900/30 rounded-lg text-center">
  <div class="text-lg font-bold text-emerald-300">Start with instructions. Get value in 5 minutes.</div>
  <div class="text-sm text-gray-400 mt-1">Add complexity only when clear need emerges.</div>
</div>

---

# 📖 References

<div class="grid grid-cols-2 gap-3 text-xs mt-6">

<div class="space-y-2">
  <div class="font-bold text-emerald-300 mb-1">Official Documentation</div>
  <div>[1] <strong>Customize AI in VS Code</strong> — code.visualstudio.com/docs/copilot/copilot-customization</div>
  <div>[2] <strong>Custom instructions</strong> — code.visualstudio.com/docs/copilot/customization/custom-instructions</div>
  <div>[3] <strong>Prompt files</strong> — code.visualstudio.com/docs/copilot/customization/prompt-files</div>
  <div>[4] <strong>Agent Skills</strong> — code.visualstudio.com/docs/copilot/customization/agent-skills</div>
  <div>[5] <strong>Custom agents</strong> — code.visualstudio.com/docs/copilot/customization/custom-agents</div>
  <div>[6] <strong>Repository instructions</strong> — docs.github.com/copilot/customizing-copilot</div>
</div>

<div class="space-y-2">
  <div class="font-bold text-teal-300 mb-1">Standards & Community</div>
  <div>[7] <strong>Agent Skills standard</strong> — agentskills.io</div>
  <div>[8] <strong>Awesome Copilot</strong> — github.com/github/awesome-copilot</div>
  <div>[9] <strong>Response customization</strong> — docs.github.com/copilot/concepts/prompting</div>
  <div>[10] <strong>Instructions support</strong> — docs.github.com/copilot/reference</div>
  <div>[11] <strong>Instructions library</strong> — docs.github.com/copilot/tutorials</div>
  <div>[12] <strong>VS Code Chat docs</strong> — code.visualstudio.com/docs/copilot/chat</div>
</div>

</div>

---
layout: end
---

<div class="h-full flex flex-col items-center justify-center">
  <div class="text-6xl mb-6">📋 🧰 ⚡ 🤖</div>
  <h1 class="!text-4xl bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
    Configuration Primitives
  </h1>
  <div class="mt-4 text-xl text-gray-300">
    Making AI Understand Your Codebase
  </div>
  <div class="mt-8 text-gray-500 text-sm">
    Start with instructions → Add complexity when needed
  </div>
  <div class="mt-6 w-32 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent rounded-full"></div>
</div>
