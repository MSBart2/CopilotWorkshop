---
theme: default
background: https://source.unsplash.com/collection/94734566/1920x1080
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Agentic Sessions: Multi-Environment Agent Orchestration
  CopilotTraining Tech Talk
drawings:
  persist: false
transition: slide-left
title: Agentic Sessions - Multi-Environment Agent Orchestration
mdc: true
---

# Agentic Sessions

## Multi-Environment Agent Orchestration

<div class="pt-12">
  <span class="text-6xl">🎭</span>
</div>

<div class="pt-4 text-xl opacity-75">
  Delegate, monitor, and switch between local, background, and cloud agents
</div>

<div class="abs-br m-6 flex gap-2">
  <span class="text-sm opacity-50">CopilotTraining Tech Talk</span>
</div>

---

# The Problem: Supervision Bottleneck

<div class="grid grid-cols-2 gap-8 mt-8">

<div class="p-6 bg-red-50 dark:bg-red-900/30 rounded-lg border-2 border-red-400">

### ❌ Interactive Agents

- **Constant supervision required**
  Every agent question interrupts flow

- **Context switching destroys productivity**
  Mental reload for each interaction

- **Serial execution only**
  Can't parallelize supervised work

- **Supervision scales linearly**
  2 agents = 2x overhead

</div>

<div class="p-6 bg-green-50 dark:bg-green-900/30 rounded-lg border-2 border-green-400">

### ✅ Background Agents

- **Complete autonomy**
  Define intent once, review when done

- **Git worktree isolation**
  Independent working directories

- **Parallel execution enabled**
  3+ agents work simultaneously

- **Supervision shifts to final review**
  27 min active vs. 105 min total

</div>

</div>

<div class="mt-6 p-4 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-lg text-center">
  <div class="text-xl font-bold text-white">
    Supervision bottleneck → Review checkpoint
  </div>
</div>

---

# The Agent Environment Landscape

<div class="grid grid-cols-3 gap-4 mt-6 text-sm">

<div class="p-4 bg-blue-900/60 rounded-lg border-2 border-blue-400">
<div class="text-3xl mb-2">💻</div>
<div class="text-lg font-bold text-blue-300 mb-2">Local Agents</div>
<div class="text-gray-300">Interactive work in your IDE</div>
<div class="mt-3 text-xs text-gray-400">
• Creative exploration<br/>
• Debugging<br/>
• Architecture planning
</div>
</div>

<div class="p-4 bg-green-900/60 rounded-lg border-2 border-green-400">
<div class="text-3xl mb-2">🔄</div>
<div class="text-lg font-bold text-green-300 mb-2">Background Agents</div>
<div class="text-gray-300">Autonomous in Git worktrees</div>
<div class="mt-3 text-xs text-gray-400">
• Implementation<br/>
• Refactoring<br/>
• Test generation
</div>
</div>

<div class="p-4 bg-purple-900/60 rounded-lg border-2 border-purple-400">
<div class="text-3xl mb-2">☁️</div>
<div class="text-lg font-bold text-purple-300 mb-2">Cloud Agents</div>
<div class="text-gray-300">Large-scale on GitHub</div>
<div class="mt-3 text-xs text-gray-400">
• 100+ file changes<br/>
• Cross-repo operations<br/>
• Long-running tasks
</div>
</div>

</div>

<div class="mt-8 p-4 bg-gray-800 rounded-lg border-2 border-gray-600">
<div class="text-center">
<div class="text-2xl font-bold text-white mb-2">🎯 Session Type Picker (VS Code 1.109)</div>
<div class="text-gray-300">Unified interface to start, switch, and delegate between environments</div>
</div>
</div>

<div class="mt-4 text-center text-sm text-gray-400 italic">
Plan locally → Implement in background/cloud → Review finished work
</div>

---

# Git Worktree Isolation: Safe Autonomy

<div class="grid grid-cols-2 gap-8 mt-6">

<div>

### Traditional Single Workspace

```text
repo/
├── .git/
└── src/
    └── main.js  ← only one checkout
```

<div class="mt-4 p-3 bg-red-900/40 rounded-lg text-center">
<span class="text-white font-bold">⚠️ Changes affect active work</span>
</div>

</div>

<div>

### Worktree-Based Isolation

```text
repo/
├── .git/  ← shared repository
├── main/src/main.js  ← your work
├── worktree-1/src/main.js  ← agent A
└── worktree-2/src/main.js  ← agent B
```

<div class="mt-4 p-3 bg-green-900/40 rounded-lg text-center">
<span class="text-white font-bold">✅ Complete isolation</span>
</div>

</div>

</div>

<div class="grid grid-cols-4 gap-3 mt-8 text-xs">
<div class="p-3 bg-blue-900/60 rounded-lg border-2 border-blue-400 text-center">
<div class="font-bold text-blue-300">True Isolation</div>
<div class="text-gray-400 mt-1">File changes never affect main</div>
</div>
<div class="p-3 bg-green-900/60 rounded-lg border-2 border-green-400 text-center">
<div class="font-bold text-green-300">Shared Repository</div>
<div class="text-gray-400 mt-1">All worktrees use same .git</div>
</div>
<div class="p-3 bg-purple-900/60 rounded-lg border-2 border-purple-400 text-center">
<div class="font-bold text-purple-300">Branch Independence</div>
<div class="text-gray-400 mt-1">Each worktree, different branch</div>
</div>
<div class="p-3 bg-yellow-900/60 rounded-lg border-2 border-yellow-400 text-center">
<div class="font-bold text-yellow-300">Parallel Safety</div>
<div class="text-gray-400 mt-1">Multiple agents, no conflicts</div>
</div>
</div>

---
layout: two-cols
---

# The Hand-Off Pattern

### Before: Supervised Interactive

<div class="mt-4 p-4 bg-red-900/30 rounded-lg text-sm">

```
┌─────────────┐
│ Plan        │ 15 min (active)
└──────┬──────┘
       ▼
┌─────────────┐
│ Implement   │ 60 min (supervised)
└──────┬──────┘
       ▼
┌─────────────┐
│ Review      │ 10 min (active)
└─────────────┘
```

**Total: 85 min active time**

</div>

::right::

<div class="ml-4">

### After: Background Hand-Off

<div class="mt-4 p-4 bg-green-900/30 rounded-lg text-sm">

```
┌─────────────┐
│ Plan        │ 15 min (active)
└──────┬──────┘
       ▼
┌─────────────┐
│ Hand-off    │ 2 min (active)
└──────┬──────┘
       │
       ├─────────────────┐
       ▼                 ▼
┌──────────┐      ┌────────────┐
│Background│      │Next Task   │
│60 min    │      │(parallel)  │
└──────┬───┘      └────────────┘
       ▼
┌─────────────┐
│ Review      │ 10 min (active)
└─────────────┘
```

**Total: 27 min active time**

</div>

</div>

---

# Session Management (VS Code 1.109)

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 bg-gray-800 rounded-lg border-2 border-gray-600">

### 🎯 Session Type Picker

**Choose environment:**
- Local (interactive)
- Background (autonomous)
- Cloud (large-scale)
- Claude Agent (extended reasoning)

**Hand-off workflow:**
1. Plan interactively in local
2. "Continue in Background"
3. Monitor from status indicator
4. Review finished work

</div>

<div class="p-5 bg-gray-800 rounded-lg border-2 border-gray-600">

### 📊 Agent Status Indicator

Command center badge shows:

<div class="mt-3 space-y-2">
<div class="p-2 bg-blue-900/40 rounded border-l-4 border-blue-400">
<span class="text-white font-bold">🔵 In-progress</span> — Agent actively working
</div>
<div class="p-2 bg-yellow-900/40 rounded border-l-4 border-yellow-400">
<span class="text-white font-bold">🟡 Unread</span> — Session has updates
</div>
<div class="p-2 bg-red-900/40 rounded border-l-4 border-red-400">
<span class="text-white font-bold">🔴 Attention</span> — Requires input
</div>
</div>

**Click to filter sessions list**

</div>

</div>

<div class="mt-6 p-4 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-lg text-center">
  <div class="text-xl font-bold text-white">
    Multi-session orchestration from unified interface
  </div>
</div>

---

# Subagents: Parallel Task Decomposition

<div class="grid grid-cols-2 gap-6 mt-6">

<div>

### The Problem: Context Bloat

<div class="p-4 bg-red-900/30 rounded-lg mt-3 text-sm">

**Complex task in single context:**
- Search iterations consume tokens
- Multiple file analyses pile up
- Context limit reached quickly
- Main agent loses focus

</div>

</div>

<div>

### The Solution: Subagents

<div class="p-4 bg-green-900/30 rounded-lg mt-3 text-sm">

**Each subagent in dedicated context:**
- Own isolated context window
- Parallel execution enabled
- Results returned cleanly
- Main agent orchestrates

</div>

</div>

</div>

<div class="mt-6 p-5 bg-gray-800 rounded-lg border-2 border-gray-600">

### 🔍 Search Subagent (Experimental)

```javascript
// Enable: github.copilot.chat.searchSubagent.enabled
```

<div class="grid grid-cols-4 gap-2 mt-3 text-xs">
<div class="p-2 bg-blue-900/60 rounded">Isolated agent loop</div>
<div class="p-2 bg-green-900/60 rounded">Refines queries</div>
<div class="p-2 bg-purple-900/60 rounded">Multiple approaches</div>
<div class="p-2 bg-yellow-900/60 rounded">Focused results</div>
</div>

**Visibility:** Task performed, custom agent used, tools, initial prompt, result

</div>

---

# Multi-Agent Orchestration Patterns

<div class="grid grid-cols-3 gap-4 mt-6 text-sm">

<div class="p-4 bg-blue-900/60 rounded-lg border-2 border-blue-400">
<div class="text-2xl mb-2">⚡</div>
<div class="text-lg font-bold text-blue-300 mb-2">Parallel Execution</div>
<div class="text-gray-300 mb-3">Independent tasks</div>
<div class="text-xs text-gray-400">
Task A → Agent 1 → Branch A<br/>
Task B → Agent 2 → Branch B<br/>
Task C → Agent 3 → Branch C<br/>
<br/>
All three work simultaneously
</div>
</div>

<div class="p-4 bg-green-900/60 rounded-lg border-2 border-green-400">
<div class="text-2xl mb-2">🔗</div>
<div class="text-lg font-bold text-green-300 mb-2">Sequential Hand-Offs</div>
<div class="text-gray-300 mb-3">Dependent tasks</div>
<div class="text-xs text-gray-400">
Agent 1: API spec → Merge<br/>
↓<br/>
Agent 2: Implement → Merge<br/>
↓<br/>
Agent 3: Document<br/>
<br/>
Each starts after previous
</div>
</div>

<div class="p-4 bg-purple-900/60 rounded-lg border-2 border-purple-400">
<div class="text-2xl mb-2">🔬</div>
<div class="text-lg font-bold text-purple-300 mb-2">Experimental Variants</div>
<div class="text-gray-300 mb-3">A/B approaches</div>
<div class="text-xs text-gray-400">
Requirement<br/>
├→ Agent 1: GraphQL<br/>
└→ Agent 2: REST<br/>
<br/>
Compare finished, choose best
</div>
</div>

</div>

<div class="mt-6 p-4 bg-gradient-to-r from-purple-600 to-purple-800 rounded-xl shadow-lg text-center">
  <div class="text-xl font-bold text-white">
    Architecture decisions → Empirical comparisons
  </div>
</div>

---

# Custom Agents in Background Mode

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 bg-gray-800 rounded-lg border-2 border-gray-600">

### 📚 Architecture

**Repository-defined agents:**
- Load from `.github/agents/`
- Specialized instructions
- Tool restrictions
- Work identically everywhere

**Background execution:**
- Receives full hand-off context
- Isolated Git worktree
- Same tools as foreground
- Signals completion with artifacts

</div>

<div class="p-5 bg-gray-800 rounded-lg border-2 border-gray-600">

### 🎯 Use Cases

<div class="space-y-3 text-sm mt-3">

<div class="p-3 bg-blue-900/40 rounded border-l-4 border-blue-400">
<div class="font-bold text-blue-300">@review-enforcer</div>
<div class="text-gray-400">Autonomous architecture reviews on every PR</div>
</div>

<div class="p-3 bg-green-900/40 rounded border-l-4 border-green-400">
<div class="font-bold text-green-300">@test-generator</div>
<div class="text-gray-400">Comprehensive test suites in parallel</div>
</div>

<div class="p-3 bg-purple-900/40 rounded border-l-4 border-purple-400">
<div class="font-bold text-purple-300">@refactor-specialist</div>
<div class="text-gray-400">Modernize patterns across 50+ files</div>
</div>

</div>

</div>

</div>

<div class="mt-4 text-center text-sm text-gray-400 italic">
Investment in agent customization → Continuous autonomous application
</div>

---

# Use Case: Plan-to-Background Hand-Off

<div class="grid grid-cols-2 gap-8 mt-6">

<div class="p-5 bg-red-50 dark:bg-red-900/30 rounded-lg border-2 border-red-400">

### ❌ Before

**Supervised development:**
- 45 min planning requirements
- 60 min guiding implementation
- 10 min reviewing results

<div class="mt-4 p-3 bg-gradient-to-r from-red-900/60 to-gray-800 rounded text-center">
<div class="text-white font-bold">105 minutes per feature</div>
<div class="text-red-300 text-sm">Serial execution only</div>
</div>

</div>

<div class="p-5 bg-green-50 dark:bg-green-900/30 rounded-lg border-2 border-green-400">

### ✅ After

**Background hand-off:**
- 15 min interactive planning
- 2 min hand-off with context
- 10 min review finished work
- *60 min parallel execution*

<div class="mt-4 p-3 bg-gradient-to-r from-green-600 to-green-800 rounded text-center">
<div class="text-white font-bold">27 minutes active time</div>
<div class="text-green-200 text-sm">2-3x throughput via parallel work</div>
</div>

</div>

</div>

<div class="mt-6 p-5 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-lg text-center">
  <div class="text-2xl font-bold text-white">
    57% reduction in active time per feature
  </div>
</div>

---

# Use Case: Isolated Worktree Experiments

<div class="grid grid-cols-2 gap-8 mt-6">

<div class="p-5 bg-red-50 dark:bg-red-900/30 rounded-lg border-2 border-red-400">

### ❌ Before

**Single workspace risk:**
- Experimental features risk main
- 90 min rollback overhead
- Merge conflicts from competing approaches
- Teams avoid experimentation

<div class="mt-4 text-center text-red-300 text-sm font-bold">
Risk aversion limits innovation
</div>

</div>

<div class="p-5 bg-green-50 dark:bg-green-900/30 rounded-lg border-2 border-green-400">

### ✅ After

**Multi-agent experiments:**
- Launch 2-3 agents with different approaches
- Isolated worktrees, independent branches
- Complete implementations without interference
- Compare empirically, merge winner

<div class="mt-4 text-center text-green-300 text-sm font-bold">
Negligible cost enables exploration
</div>

</div>

</div>

<div class="mt-6 grid grid-cols-3 gap-4 text-xs">
<div class="p-3 bg-blue-900/60 rounded-lg border-2 border-blue-400 text-center">
<div class="text-2xl mb-1">⚡</div>
<div class="font-bold text-blue-300">90 min → 5 min</div>
<div class="text-gray-400">Rollback time</div>
</div>
<div class="p-3 bg-green-900/60 rounded-lg border-2 border-green-400 text-center">
<div class="text-2xl mb-1">✅</div>
<div class="font-bold text-green-300">0 conflicts</div>
<div class="text-gray-400">Isolation prevents</div>
</div>
<div class="p-3 bg-purple-900/60 rounded-lg border-2 border-purple-400 text-center">
<div class="text-2xl mb-1">🔬</div>
<div class="font-bold text-purple-300">3x experiments</div>
<div class="text-gray-400">Exploration rate</div>
</div>
</div>

---

# Use Case: Autonomous Architecture Review

<div class="mt-6 p-5 bg-gray-800 rounded-lg border-2 border-gray-600">

### The Workflow

<div class="grid grid-cols-4 gap-3 mt-4 text-xs">
<div class="p-3 bg-blue-900/60 rounded-lg border-2 border-blue-400 text-center">
<div class="text-2xl mb-1">📝</div>
<div class="font-bold text-blue-300">PR Created</div>
<div class="text-gray-400 mt-1">Automatic trigger</div>
</div>
<div class="text-3xl text-gray-400 text-center">→</div>
<div class="p-3 bg-green-900/60 rounded-lg border-2 border-green-400 text-center">
<div class="text-2xl mb-1">🤖</div>
<div class="font-bold text-green-300">Agent Reviews</div>
<div class="text-gray-400 mt-1">Background worktree</div>
</div>
<div class="text-3xl text-gray-400 text-center">→</div>
<div class="p-3 bg-purple-900/60 rounded-lg border-2 border-purple-400 text-center">
<div class="text-2xl mb-1">💬</div>
<div class="font-bold text-purple-300">Structured Comments</div>
<div class="text-gray-400 mt-1">Violations + fixes</div>
</div>
<div class="text-3xl text-gray-400 text-center">→</div>
<div class="p-3 bg-yellow-900/60 rounded-lg border-2 border-yellow-400 text-center">
<div class="text-2xl mb-1">👤</div>
<div class="font-bold text-yellow-300">Human Review</div>
<div class="text-gray-400 mt-1">Business logic only</div>
</div>
</div>

</div>

<div class="grid grid-cols-4 gap-4 mt-6 text-xs">
<div class="p-3 bg-blue-900/60 rounded-lg text-center">
<div class="font-bold text-blue-300">30 min → 2 min</div>
<div class="text-gray-400">Per PR validation</div>
</div>
<div class="p-3 bg-green-900/60 rounded-lg text-center">
<div class="font-bold text-green-300">100% consistent</div>
<div class="text-gray-400">Standards application</div>
</div>
<div class="p-3 bg-purple-900/60 rounded-lg text-center">
<div class="font-bold text-purple-300">Real-time reviews</div>
<div class="text-gray-400">No architect wait</div>
</div>
<div class="p-3 bg-yellow-900/60 rounded-lg text-center">
<div class="font-bold text-yellow-300">20+ PRs daily</div>
<div class="text-gray-400">Without scaling team</div>
</div>
</div>

---

# Best Practices

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 bg-green-50 dark:bg-green-900/30 rounded-lg border-2 border-green-400">

### ✅ When to Use Background Agents

<div class="space-y-2 text-sm mt-3">

**Ideal scenarios:**
- Well-defined requirements
- Refactoring with established patterns
- Test generation from implementation
- Documentation from code
- Standards enforcement

</div>

<div class="mt-4 p-3 bg-green-900/40 rounded text-center text-xs">
<span class="text-white font-bold">Mechanical execution with clear acceptance criteria</span>
</div>

</div>

<div class="p-5 bg-red-50 dark:bg-red-900/30 rounded-lg border-2 border-red-400">

### ❌ Not Recommended For

<div class="space-y-2 text-sm mt-3">

**Avoid for:**
- Ambiguous requirements
- Novel architecture exploration
- Complex debugging
- Security-critical changes
- Iterative clarification needed

</div>

<div class="mt-4 p-3 bg-red-900/40 rounded text-center text-xs">
<span class="text-white font-bold">Creative exploration requiring interactive guidance</span>
</div>

</div>

</div>

<div class="mt-6 p-4 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-lg text-center">
  <div class="text-lg font-bold text-white">
    Success = Planning quality × Clear boundaries × Explicit acceptance criteria
  </div>
</div>

---

# Cloud Agents: Large-Scale Operations

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 bg-gray-800 rounded-lg border-2 border-gray-600">

### ☁️ Capabilities (1.109)

<div class="space-y-3 text-sm mt-3">

**When starting cloud agent:**
- Model selection for task
- Custom agents from default branch
- Partner agents (where available)
- Multi-root workspace support

**Seamless checkout:**
- Select Checkout action
- Extension auto-installs if needed
- Immediate review workflow

</div>

</div>

<div class="p-5 bg-gray-800 rounded-lg border-2 border-gray-600">

### 🎯 Use Cases

<div class="space-y-3 text-sm mt-3">

<div class="p-3 bg-blue-900/40 rounded border-l-4 border-blue-400">
<div class="font-bold text-blue-300">Large-scale refactoring</div>
<div class="text-gray-400">100+ files without local constraints</div>
</div>

<div class="p-3 bg-green-900/40 rounded border-l-4 border-green-400">
<div class="font-bold text-green-300">Cross-repository</div>
<div class="text-gray-400">Coordinate changes across microservices</div>
</div>

<div class="p-3 bg-purple-900/40 rounded border-l-4 border-purple-400">
<div class="font-bold text-purple-300">Long-running tasks</div>
<div class="text-gray-400">Continuous execution without IDE</div>
</div>

</div>

</div>

</div>

---

# Claude Agent Integration (Preview)

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 bg-gray-800 rounded-lg border-2 border-gray-600">

### 🤖 Native Claude Agent SDK

**Official Anthropic harness:**
- Same prompts, tools, architecture
- Copilot subscription models
- Session type picker integration

**When to use:**
- Extended reasoning tasks
- Complex architectural decisions
- Interleaved thinking with tool calls

</div>

<div class="p-5 bg-gray-800 rounded-lg border-2 border-gray-600">

### ⚙️ Configuration

<div class="text-xs mt-3 space-y-2">

```javascript
// Thinking token budget
github.copilot.chat.anthropic.thinking.budgetTokens

// Tool discovery
github.copilot.chat.anthropic.toolSearchTool.enabled

// Context management
github.copilot.chat.anthropic.contextEditing.enabled
```

</div>

<div class="mt-4 p-3 bg-purple-900/40 rounded text-center text-xs">
<span class="text-white font-bold">Visibility into model decision-making</span>
</div>

</div>

</div>

<div class="mt-6 p-4 bg-gradient-to-r from-purple-600 to-purple-800 rounded-xl shadow-lg text-center">
  <div class="text-lg font-bold text-white">
    Full Claude Agent harness with Copilot subscription
  </div>
</div>

---

# ROI: Time & Quality Metrics

<div class="grid grid-cols-3 gap-4 mt-6 text-sm">

<div class="p-4 bg-blue-900/60 rounded-lg border-2 border-blue-400">
<div class="text-3xl mb-2">⏱️</div>
<div class="text-lg font-bold text-blue-300 mb-3">Time Savings</div>
<div class="space-y-2 text-xs text-gray-300">
<div>Per feature: <span class="text-blue-300 font-bold">57% reduction</span></div>
<div>105 min → 27 min active</div>
<div class="mt-3 pt-3 border-t border-blue-400/30">
<div>Weekly capacity:</div>
<div><span class="text-blue-300 font-bold">10 hours reclaimed</span></div>
<div>Enables 20+ features vs. 10</div>
</div>
</div>
</div>

<div class="p-4 bg-green-900/60 rounded-lg border-2 border-green-400">
<div class="text-3xl mb-2">✅</div>
<div class="text-lg font-bold text-green-300 mb-3">Quality</div>
<div class="space-y-2 text-xs text-gray-300">
<div>Architecture reviews:</div>
<div>30 min → <span class="text-green-300 font-bold">2 min/PR</span></div>
<div><span class="text-green-300 font-bold">100% consistency</span></div>
<div class="mt-3 pt-3 border-t border-green-400/30">
<div>Test coverage:</div>
<div>60% → <span class="text-green-300 font-bold">85%</span></div>
<div>25% improvement, 0 active time</div>
</div>
</div>
</div>

<div class="p-4 bg-purple-900/60 rounded-lg border-2 border-purple-400">
<div class="text-3xl mb-2">📈</div>
<div class="text-lg font-bold text-purple-300 mb-3">Team Scaling</div>
<div class="space-y-2 text-xs text-gray-300">
<div>Review capacity:</div>
<div>5-6 PRs → <span class="text-purple-300 font-bold">20+ PRs daily</span></div>
<div class="mt-3 pt-3 border-t border-purple-400/30">
<div><span class="text-purple-300 font-bold">3-4x capacity</span></div>
<div>Without hiring</div>
<div>Automated enforcement</div>
</div>
</div>
</div>

</div>

<div class="mt-6 p-4 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-lg text-center">
  <div class="text-xl font-bold text-white">
    Faster execution + Higher quality + Better scaling = Transformed velocity
  </div>
</div>

---

# Key Takeaways

<div class="grid grid-cols-2 gap-4 mt-6 text-sm">

<div class="p-3 bg-gray-800 rounded-lg flex items-start gap-3">
<span class="text-3xl">🎯</span>
<div>
<div class="text-white font-bold">Session type picker unifies environments</div>
<div class="text-gray-400 mt-1">Local, background, cloud, Claude from one interface</div>
</div>
</div>

<div class="p-3 bg-gray-800 rounded-lg flex items-start gap-3">
<span class="text-3xl">📊</span>
<div>
<div class="text-white font-bold">Status indicator enables parallel work</div>
<div class="text-gray-400 mt-1">Track 5-10 sessions without context switching</div>
</div>
</div>

<div class="p-3 bg-gray-800 rounded-lg flex items-start gap-3">
<span class="text-3xl">🔄</span>
<div>
<div class="text-white font-bold">Subagents preserve context</div>
<div class="text-gray-400 mt-1">Dedicated windows for complex subtasks</div>
</div>
</div>

<div class="p-3 bg-gray-800 rounded-lg flex items-start gap-3">
<span class="text-3xl">🔒</span>
<div>
<div class="text-white font-bold">Git worktrees enable safe autonomy</div>
<div class="text-gray-400 mt-1">Isolated execution prevents conflicts</div>
</div>
</div>

<div class="p-3 bg-gray-800 rounded-lg flex items-start gap-3">
<span class="text-3xl">🤖</span>
<div>
<div class="text-white font-bold">Custom agents work everywhere</div>
<div class="text-gray-400 mt-1">Define once, use across all environments</div>
</div>
</div>

<div class="p-3 bg-gray-800 rounded-lg flex items-start gap-3">
<span class="text-3xl">⚡</span>
<div>
<div class="text-white font-bold">Hand-off pattern is transformative</div>
<div class="text-gray-400 mt-1">Plan → Background/cloud → Review finished work</div>
</div>
</div>

</div>

---

# Getting Started

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 bg-blue-50 dark:bg-blue-900/30 rounded-lg border-2 border-blue-400">

### 🚀 Immediate Actions

<div class="space-y-3 text-sm mt-3">

1. **Try session type picker**
   Start local, continue in background

2. **Enable status indicator**
   `chat.agentsControl.enabled: true`

3. **Test worktree isolation**
   Hand off simple refactoring task

4. **Explore subagents**
   Enable search subagent feature

5. **Try Claude Agent (Preview)**
   Extended reasoning from picker

</div>

</div>

<div class="p-5 bg-green-50 dark:bg-green-900/30 rounded-lg border-2 border-green-400">

### ⭐ Next Steps

<div class="space-y-3 text-sm mt-3">

- **Multi-agent parallel execution**
  Independent tasks simultaneously

- **CI/CD integration**
  Automated reviews in pipelines

- **Agent Sessions Welcome Page**
  Session-centric startup

- **Scale to 5-10 parallel sessions**
  Across local, background, cloud

</div>

</div>

</div>

<div class="mt-6 p-5 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-lg text-center">
  <div class="text-2xl font-bold text-white mb-2">
    Sessions as first-class development primitives
  </div>
  <div class="text-blue-200 text-sm">
    Not add-ons to traditional workflows
  </div>
</div>

---
layout: end
---

# Multi-Environment Agent Orchestration

<div class="text-center mt-12">
  <div class="text-6xl mb-4">🎭</div>
  <div class="text-2xl opacity-75 mb-8">
    Plan locally → Implement autonomously → Review finished work
  </div>

  <div class="text-sm opacity-50">
    VS Code 1.109+ | Background Agents | Cloud Agents | Subagents | Claude Agent
  </div>
</div>
