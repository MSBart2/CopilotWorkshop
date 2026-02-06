---
theme: default
background: https://source.unsplash.com/collection/94734566/1920x1080
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## The Agentic Journey: Incremental Path from Issue to PR Automation
  CopilotTraining Tech Talk
drawings:
  persist: false
transition: slide-left
title: The Agentic Journey
module: tech-talks/agentic-journey
mdc: true
---

<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-indigo-900/20"></div>
<div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-indigo-500/20 rounded-full blur-3xl"></div>
<div class="relative z-10">
<div class="absolute inset-0 blur-2xl opacity-50">
<img src="./sdp-logo.png" class="w-64" alt="" />
</div>
<img src="./sdp-logo.png" class="w-64 relative" alt="SDP Logo" />
</div>
<h1 class="!text-5xl !font-bold !mt-8 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent relative z-10">
The Agentic Journey
</h1>
<div class="mt-4 relative z-10">
<span class="px-6 py-2 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xl font-medium shadow-lg shadow-cyan-500/25">
Incremental Path from Issue to PR Automation
</span>
</div>
<div class="mt-8 text-lg opacity-70 relative z-10">4-Workflow Issue Lifecycle with Historical Context Planning</div>
<div class="mt-6 w-32 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full relative z-10"></div>
</div>

<div class="abs-br m-6 flex gap-2">
<span class="text-sm opacity-50">Tech Talk · 45 minutes</span>
</div>

---
layout: default
---

# 🎯 The Question This Talk Answers

<div class="mt-12 flex justify-center">
<div class="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border-2 border-cyan-500/50 p-10 rounded-xl max-w-3xl">
<div class="text-3xl font-bold text-white text-center leading-relaxed">
"How do I start getting value from GitHub Copilot agents without rewiring my entire SDLC?"
</div>
</div>
</div>

<div class="grid grid-cols-2 gap-6 mt-10">
<div class="bg-red-900/20 rounded-lg p-4 border border-red-500/30">
<div class="font-bold text-red-400 mb-2">❌ "All In" Approach</div>
<div class="text-sm text-gray-300">Restructure repos, rewrite CI/CD → everything breaks, rollback</div>
</div>
<div class="bg-red-900/20 rounded-lg p-4 border border-red-500/30">
<div class="font-bold text-red-400 mb-2">❌ "Experiment Forever"</div>
<div class="text-sm text-gray-300">Pilot with one team, debate results → still in pilot after a year</div>
</div>
</div>

<div class="mt-6 p-4 bg-gradient-to-r from-green-600/80 to-blue-600/80 rounded-lg text-center">
<span class="text-white font-bold text-xl">✅ The Journey: Start small, prove value, scale incrementally</span>
</div>

---
layout: default
---

# 📖 Navigate by Phase

<div class="grid grid-cols-3 gap-4 mt-6">
<div @click="$nav.go(9)" class="cursor-pointer p-5 bg-cyan-900/40 rounded-lg border-2 border-cyan-500 hover:bg-cyan-900/60 transition-all no-underline">
<div class="text-2xl mb-2">📥</div>
<div class="text-lg font-bold text-cyan-300">Phase 1</div>
<div class="text-sm text-gray-300 mt-1">Agentic Intake</div>
<div class="text-xs text-gray-400 mt-2">20-30 min → 3 min per issue</div>
</div>

<div @click="$nav.go(12)" class="cursor-pointer p-5 bg-blue-900/40 rounded-lg border-2 border-blue-500 hover:bg-blue-900/60 transition-all no-underline">
<div class="text-2xl mb-2">🗺️</div>
<div class="text-lg font-bold text-blue-300">Phase 2</div>
<div class="text-sm text-gray-300 mt-1">Agentic Planning</div>
<div class="text-xs text-gray-400 mt-2">4 hours → 15 min with history</div>
</div>

<div @click="$nav.go(15)" class="cursor-pointer p-5 bg-indigo-900/40 rounded-lg border-2 border-indigo-500 hover:bg-indigo-900/60 transition-all no-underline">
<div class="text-2xl mb-2">⚡</div>
<div class="text-lg font-bold text-indigo-300">Phase 3</div>
<div class="text-sm text-gray-300 mt-1">Agentic Coding</div>
<div class="text-xs text-gray-400 mt-2">Already enabled → 6-10x faster</div>
</div>
</div>

<div class="grid grid-cols-2 gap-4 mt-4 px-16">
<div @click="$nav.go(17)" class="cursor-pointer p-5 bg-purple-900/40 rounded-lg border-2 border-purple-500 hover:bg-purple-900/60 transition-all no-underline">
<div class="text-2xl mb-2">🔍</div>
<div class="text-lg font-bold text-purple-300">Phase 4</div>
<div class="text-sm text-gray-300 mt-1">Code Review</div>
<div class="text-xs text-gray-400 mt-2">2-4 hours → 20 min per PR</div>
</div>

<div @click="$nav.go(20)" class="cursor-pointer p-5 bg-pink-900/40 rounded-lg border-2 border-pink-500 hover:bg-pink-900/60 transition-all no-underline">
<div class="text-2xl mb-2">🚀</div>
<div class="text-lg font-bold text-pink-300">Phase 5</div>
<div class="text-sm text-gray-300 mt-1">Graduate to Full SDLC</div>
<div class="text-xs text-gray-400 mt-2">When quick wins hit their limits</div>
</div>
</div>

---
layout: default
---

# The Problem

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="bg-red-900/20 rounded-lg p-5 border-l-4 border-red-500">
<div class="font-bold text-red-300 text-lg mb-2">Manual Issue Investigation</div>
<div class="text-sm text-gray-300">Every issue requires duplicate detection, classification, priority assessment, routing — <span class="text-red-400 font-bold">20-30 min each</span></div>
</div>

<div class="bg-red-900/20 rounded-lg p-5 border-l-4 border-red-500">
<div class="font-bold text-red-300 text-lg mb-2">Expensive Planning</div>
<div class="text-sm text-gray-300">Research codebase, identify files, estimate effort — without learning from past work — <span class="text-red-400 font-bold">2-4 hours each</span></div>
</div>

<div class="bg-red-900/20 rounded-lg p-5 border-l-4 border-red-500">
<div class="font-bold text-red-300 text-lg mb-2">Code Review Bottleneck</div>
<div class="text-sm text-gray-300">Agent code arrives faster than humans can review — <span class="text-red-400 font-bold">500-2000 lines, 10-15x volume</span></div>
</div>

<div class="bg-red-900/20 rounded-lg p-5 border-l-4 border-red-500">
<div class="font-bold text-red-300 text-lg mb-2">Adoption Paralysis</div>
<div class="text-sm text-gray-300">"All in" fails fast, "experiment forever" stalls — <span class="text-red-400 font-bold">neither delivers ROI</span></div>
</div>

</div>

---
layout: default
---

# The Solution: 4-Workflow Issue Lifecycle

<div class="text-sm mt-4">

<div class="bg-slate-800/50 p-4 rounded-lg border border-cyan-500/30">

```
Issue Created
  ↓ (triggers)
┌────────────────────────────────────────────┐
│ 1-issue-triage.yml    → status:triaged     │
└────────────────────────────────────────────┘
  ↓ (label triggers)
┌────────────────────────────────────────────┐
│ 2-issue-planning.yml  → status:planned     │
└────────────────────────────────────────────┘
  ↓ (/approve-plan comment)
┌────────────────────────────────────────────┐
│ 3-issue-execution.yml → status:in-review   │
└────────────────────────────────────────────┘
  ↓ (PR triggers)
┌────────────────────────────────────────────┐
│ 4-pr-review.yml       → status:reviewed    │
└────────────────────────────────────────────┘
  ↓ (human approval)
```

</div>

</div>

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">
<div class="bg-cyan-900/20 p-3 rounded border border-cyan-500/30">
<span class="font-bold text-cyan-300">Label-Based State Machine:</span> Each workflow adds a label that triggers the next
</div>
<div class="bg-blue-900/20 p-3 rounded border border-blue-500/30">
<span class="font-bold text-blue-300">Externalized Prompts:</span> Agent instructions in <code>.github/prompts/*.md</code>, not in YAML
</div>
</div>

---
layout: default
---

# 📦 Key Artifacts

<div class="grid grid-cols-2 gap-6 mt-6">

<div>
<div class="font-bold text-cyan-300 text-lg mb-4">Primary Workflow Files</div>
<div class="space-y-3">
<div class="bg-slate-800/50 p-3 rounded border-l-4 border-cyan-500 text-sm">
<code class="text-cyan-400">1-issue-triage.yml</code>
<div class="text-xs text-gray-400 mt-1">Duplicate detection, classification, routing</div>
</div>
<div class="bg-slate-800/50 p-3 rounded border-l-4 border-blue-500 text-sm">
<code class="text-blue-400">2-issue-planning.yml</code>
<div class="text-xs text-gray-400 mt-1">Historical context, codebase analysis, plans</div>
</div>
<div class="bg-slate-800/50 p-3 rounded border-l-4 border-indigo-500 text-sm">
<code class="text-indigo-400">3-issue-execution.yml</code>
<div class="text-xs text-gray-400 mt-1">Implementation from plan, tests, PR creation</div>
</div>
<div class="bg-slate-800/50 p-3 rounded border-l-4 border-purple-500 text-sm">
<code class="text-purple-400">4-pr-review.yml</code>
<div class="text-xs text-gray-400 mt-1">Security, logic, performance, test coverage</div>
</div>
</div>
</div>

<div>
<div class="font-bold text-blue-300 text-lg mb-4">Architecture</div>
<div class="bg-slate-800/50 p-4 rounded border border-blue-500/30 text-xs">

```
.github/
├── workflows/
│   ├── 1-issue-triage.yml
│   ├── 2-issue-planning.yml
│   ├── 3-issue-execution.yml
│   └── 4-pr-review.yml
└── prompts/
    ├── triage-instructions.md
    ├── planning-instructions.md
    ├── implementation-instructions.md
    └── review-instructions.md
```

</div>
<div class="mt-4 bg-cyan-900/20 p-3 rounded border border-cyan-500/30 text-xs">
<span class="font-bold text-cyan-300">Usage:</span>

```bash
sed -e "s|{{VAR}}|${VALUE}|g" \
  .github/prompts/template.md > tmp.txt
copilot -p @tmp.txt
```

</div>
</div>

</div>

---
layout: default
---

# 🎯 Mental Model Shift

<div class="grid grid-cols-3 gap-4 mt-6 text-sm">

<div class="space-y-3">
<div class="font-bold text-green-300 text-lg mb-2">✅ Move Toward</div>
<div class="bg-green-900/20 p-3 rounded border-l-4 border-green-500">
<div class="font-bold text-green-300">Label-Driven Orchestration</div>
<div class="text-xs text-gray-300 mt-1">Labels as state transitions between phases</div>
</div>
<div class="bg-green-900/20 p-3 rounded border-l-4 border-green-500">
<div class="font-bold text-green-300">Externalized Prompts</div>
<div class="text-xs text-gray-300 mt-1">Markdown files, not embedded YAML</div>
</div>
<div class="bg-green-900/20 p-3 rounded border-l-4 border-green-500">
<div class="font-bold text-green-300">Historical Context</div>
<div class="text-xs text-gray-300 mt-1">60% better estimates from past work</div>
</div>
</div>

<div class="space-y-3">
<div class="font-bold text-yellow-300 text-lg mb-2">⚠️ Move Away From</div>
<div class="bg-yellow-900/20 p-3 rounded border-l-4 border-yellow-500">
<div class="font-bold text-yellow-300">Manual Triage</div>
<div class="text-xs text-gray-300 mt-1">20-30 min classifying every issue</div>
</div>
<div class="bg-yellow-900/20 p-3 rounded border-l-4 border-yellow-500">
<div class="font-bold text-yellow-300">Planning from Scratch</div>
<div class="text-xs text-gray-300 mt-1">Ignoring patterns from past work</div>
</div>
<div class="bg-yellow-900/20 p-3 rounded border-l-4 border-yellow-500">
<div class="font-bold text-yellow-300">Line-by-Line Review</div>
<div class="text-xs text-gray-300 mt-1">Can't scale to 10-15x volume</div>
</div>
</div>

<div class="space-y-3">
<div class="font-bold text-red-300 text-lg mb-2">🛑 Move Against</div>
<div class="bg-red-900/20 p-3 rounded border-l-4 border-red-500">
<div class="font-bold text-red-300">All-or-Nothing</div>
<div class="text-xs text-gray-300 mt-1">Full Gen-4 before proving value</div>
</div>
<div class="bg-red-900/20 p-3 rounded border-l-4 border-red-500">
<div class="font-bold text-red-300">Embedded Prompts</div>
<div class="text-xs text-gray-300 mt-1">Hardcoded instructions in YAML</div>
</div>
</div>

</div>

<div class="mt-4 p-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg text-center text-sm">
<span class="text-cyan-300 font-bold">Core Insight:</span> <span class="text-white">Agents handle the routine, humans govern the outcomes</span>
</div>

---
layout: default
---

# When to Use This Pattern

<div class="text-sm mt-4">

```
Q: Where are you in your agentic adoption journey?
│
├─ "Haven't started yet"
│  → Start here with Phase 1 (Agentic Intake)
│  └─ Any team, any repo, 2-3 hours setup
│
├─ "Already assigning issues to Copilot"
│  → Add Phases 2 + 4 (Planning + Code Review)
│  └─ Best for teams with 20+ issues/month
│
├─ "Hitting coordination limits across repos"
│  → Graduate to Full SDLC → Agentic SDLC talk
│  └─ Agents touching 2+ repos per feature
│
└─ "Already have full Gen-4 SDLC"
   → See Enterprise Patterns talk
```

</div>

<div class="grid grid-cols-4 gap-3 mt-4 text-xs">
<div class="bg-cyan-900/30 p-3 rounded border border-cyan-500/30 text-center">
<div class="font-bold text-cyan-300">This Talk</div>
<div class="text-gray-400 mt-1">Getting started</div>
<div class="text-gray-400">2-3 hours setup</div>
</div>
<div class="bg-blue-900/30 p-3 rounded border border-blue-500/30 text-center">
<div class="font-bold text-blue-300">Agentic SDLC</div>
<div class="text-gray-400 mt-1">Full transformation</div>
<div class="text-gray-400">3-6 months</div>
</div>
<div class="bg-indigo-900/30 p-3 rounded border border-indigo-500/30 text-center">
<div class="font-bold text-indigo-300">Agentic Sessions</div>
<div class="text-gray-400 mt-1">Interactive agents</div>
<div class="text-gray-400">Minutes per session</div>
</div>
<div class="bg-purple-900/30 p-3 rounded border border-purple-500/30 text-center">
<div class="font-bold text-purple-300">Enterprise</div>
<div class="text-gray-400 mt-1">Org-wide scaling</div>
<div class="text-gray-400">Strategic planning</div>
</div>
</div>

---
layout: center
name: phase1
---

# Phase 1

<div class="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
Agentic Intake
</div>

<div class="mt-6 text-xl opacity-80">
Intelligent Issue Triage & Enrichment
</div>

<div class="mt-8 text-sm opacity-60">
Phase 1 of 4 · 20-30 min → 3 min · 2-3 hours setup
</div>

---
layout: default
---

# Phase 1: What the Agent Does

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="space-y-4">

<div class="bg-slate-800/50 p-4 rounded border border-cyan-500/30">
<div class="font-bold text-cyan-300 mb-2">1. Context Gathering</div>
<div class="text-sm text-gray-300">Reads issue title, description, related files, recent similar issues</div>
</div>

<div class="bg-slate-800/50 p-4 rounded border border-cyan-500/30">
<div class="font-bold text-cyan-300 mb-2">2. Duplicate Detection</div>
<div class="text-sm text-gray-300">Searches open + closed issues from last 6 months, calculates similarity</div>
</div>

</div>

<div class="space-y-4">

<div class="bg-slate-800/50 p-4 rounded border border-blue-500/30">
<div class="font-bold text-blue-300 mb-2">3. Routing & Labeling</div>
<div class="text-sm text-gray-300">Classifies type, priority, component; suggests assignee</div>
</div>

<div class="bg-slate-800/50 p-4 rounded border border-blue-500/30">
<div class="font-bold text-blue-300 mb-2">4. Context Summary</div>
<div class="text-sm text-gray-300">Generates analysis with affected files, root cause, suggested approach</div>
</div>

</div>

</div>

<div class="grid grid-cols-2 gap-6 mt-6 text-sm">
<div class="bg-red-900/20 border-l-4 border-red-500 p-3 rounded-r">
<div class="font-bold text-red-300">❌ Before</div>
<div class="text-xs text-gray-300 mt-1">Issue #4821 → developer spends 45 min → discovers it's a duplicate of #4203</div>
</div>
<div class="bg-green-900/20 border-l-4 border-green-500 p-3 rounded-r">
<div class="font-bold text-green-300">✅ After</div>
<div class="text-xs text-gray-300 mt-1">Issue #4821 → agent finds 88% match to #4203 in 3 min → auto-labels duplicate</div>
</div>
</div>

---
layout: default
---

# Phase 1: Metrics & ROI

<div class="grid grid-cols-2 gap-8 mt-6">

<div>
<div class="font-bold text-cyan-300 text-lg mb-4">📊 Success Metrics</div>
<div class="text-sm">

| Metric | Before | After |
|--------|--------|-------|
| **Time to triage** | 30 min | <5 min |
| **Duplicate detection** | 60% | >90% |
| **Correct routing** | 60% | >90% |
| **Context gathering** | 45 min | <10 min |

</div>
</div>

<div>
<div class="font-bold text-cyan-300 text-lg mb-4">💰 ROI (50 issues/month)</div>
<div class="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-6 rounded-lg border border-cyan-500/30 space-y-3">
<div class="text-sm"><strong>Investment:</strong> 2-3 hours one-time setup</div>
<div class="text-sm"><strong>Time saved:</strong> ~25 min/issue</div>
<div class="text-sm"><strong>Monthly savings:</strong> 20 hours (2.5 dev days)</div>
<div class="text-2xl font-bold text-cyan-300 mt-4 text-center">$2,000/month</div>
</div>
</div>

</div>

---
layout: center
name: phase2
---

# Phase 2

<div class="text-5xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
Agentic Planning
</div>

<div class="mt-6 text-xl opacity-80">
Historical Context Research & Execution Plans
</div>

<div class="mt-8 text-sm opacity-60">
Phase 2 of 4 · 4 hours → 15 min · 60% better estimates
</div>

---
layout: default
---

# Phase 2: The Key Innovation — Historical Context

<div class="mt-4 text-base">
<div class="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border-l-4 border-blue-500 p-4 rounded-r mb-6">
<span class="font-bold text-blue-300">💡 The planning agent doesn't just analyze the current issue</span> — it searches for similar past issues and their associated PRs
</div>
</div>

<div class="grid grid-cols-3 gap-4 text-sm">

<div class="bg-cyan-900/20 p-4 rounded border border-cyan-500/30">
<div class="font-bold text-cyan-300 mb-2">🔍 Research</div>
<div class="text-xs text-gray-300">Search similar past issues from last 6 months + associated merged PRs</div>
</div>

<div class="bg-blue-900/20 p-4 rounded border border-blue-500/30">
<div class="font-bold text-blue-300 mb-2">📚 Learn</div>
<div class="text-xs text-gray-300">Extract lessons: edge cases, effort estimates, patterns that worked</div>
</div>

<div class="bg-indigo-900/20 p-4 rounded border border-indigo-500/30">
<div class="font-bold text-indigo-300 mb-2">📋 Plan</div>
<div class="text-xs text-gray-300">Generate plan with affected files, dependencies, risks, informed estimates</div>
</div>

</div>

<div class="bg-slate-800/50 p-4 rounded border border-blue-500/30 mt-6 text-xs">

```
Historical Context Search:
- "Add Google OAuth" (#2847) → PR #2851: 6 hours, 8 files
  Lesson: Token refresh edge case required extra test
- "Add GitHub OAuth" (#3104) → PR #3109: 5 hours, 7 files
  Lesson: Multi-tenant config needed for enterprise

Result: Estimate accuracy ±20% (vs ±50% without historical context)
```

</div>

---
layout: two-cols
---

# Phase 2: Plan Example

<div class="text-xs space-y-2">

```markdown
📋 EXECUTION PLAN: Add Microsoft OAuth

Historical Context:
✓ Issue #2847 "Add Google OAuth"
  → PR #2851 (6h, 8 files)
✓ Issue #3104 "Add GitHub OAuth"
  → PR #3109 (5h, 7 files)

Key Learnings:
✓ Token refresh edge cases
✓ Multi-tenant config for enterprise
✓ Rate limiting from start
```

**Affected Files:**
1. `microsoft-oauth.ts` (new)
2. `oauth-handler.ts` (modify)
3. `auth-config.ts` (modify)
4. `microsoft-oauth.test.ts` (new)

</div>

::right::

<div class="pl-6 text-xs space-y-2">

**Estimate:** 6-8 hours
<div class="text-gray-400">(Based on Google: 6h, GitHub: 5h)</div>

**Risk:** Medium
**Rollback:** `MS_OAUTH_ENABLED` flag

<div class="bg-blue-900/20 p-3 rounded border border-blue-500/30 mt-4">
<div class="font-bold text-blue-300 mb-2">Human Approval Gate</div>
<div class="text-gray-300">Plan posts as issue comment</div>
<div class="text-gray-300 mt-1">Type <code>/approve-plan</code> to proceed</div>
<div class="text-gray-400 mt-2 text-xs">Agents plan, humans decide</div>
</div>

<div class="mt-6">

**📊 Metrics:**

| Metric | Before | After |
|--------|--------|-------|
| Planning time | 4h | <30m |
| Estimate accuracy | ±50% | ±20% |
| Missing requirements | 25% | <10% |

</div>

<div class="bg-gradient-to-r from-blue-600/80 to-indigo-600/80 rounded-lg p-3 mt-4 text-center">
<span class="text-white font-bold">$7,000/month savings</span>
</div>

</div>

---
layout: center
name: phase3
---

# Phase 3

<div class="text-5xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
Agentic Coding
</div>

<div class="mt-6 text-xl opacity-80">
Automated Implementation & PR Creation
</div>

<div class="mt-8 text-sm opacity-60">
Phase 3 of 4 · Already enabled · 6-10x faster implementation
</div>

---
layout: default
---

# Phase 3: Agentic Coding

<div class="mt-6 text-base">

<div class="bg-gradient-to-r from-green-500/10 to-green-500/5 p-5 rounded-lg border border-green-500/30 mb-6">
<div class="text-xl font-bold text-green-300 mb-2">✅ You Already Have This</div>
<div class="text-sm text-gray-300">Assigning issues to <code>copilot-swe-agent[bot]</code> enables implementation. This workflow formalizes it by connecting to the approved plan from Phase 2.</div>
</div>

<div class="bg-slate-800/50 p-4 rounded border border-indigo-500/30 mb-6">
<div class="font-bold text-indigo-300 mb-2">Implementation Flow</div>
<div class="text-sm text-gray-300">
Read approved plan → Write code → Run tests → Fix failures → All tests pass → Create PR with evidence
</div>
</div>

<div class="grid grid-cols-2 gap-6">

<div>
<div class="font-bold text-indigo-300 mb-3">📊 Metrics</div>
<div class="text-sm">

| Metric | Before | After |
|--------|--------|-------|
| **Implementation** | 8-12h | 1-2h |
| **Time to first PR** | 1-2 days | 2-4h |
| **Test pass rate** | 70% | >90% |

</div>
</div>

<div>
<div class="font-bold text-indigo-300 mb-3">💰 ROI</div>
<div class="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 p-4 rounded border border-indigo-500/30">
<div class="text-sm"><strong>Time saved:</strong> 7-10 hours/feature</div>
<div class="text-sm mt-1"><strong>Monthly (20 features):</strong> 140-200 hours</div>
<div class="text-xl font-bold text-indigo-300 mt-3 text-center">$17,000/month</div>
</div>
</div>

</div>

</div>

---
layout: center
name: phase4
---

# Phase 4

<div class="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
Code Review
</div>

<div class="mt-6 text-xl opacity-80">
Intelligent PR Analysis & Risk Detection
</div>

<div class="mt-8 text-sm opacity-60">
Phase 4 of 4 · 2-4 hours → 20 min · Near-complete bug detection
</div>

---
layout: default
---

# Phase 4: What the Agent Reviews

<div class="mt-4 text-sm">

<div class="bg-gradient-to-r from-purple-500/10 to-purple-500/5 border-l-4 border-purple-500 p-3 rounded-r mb-6">
<span class="font-bold text-purple-300">The Problem:</span> Agents create 10-15x more PRs, each 500-2000 lines. Code review becomes the bottleneck.
</div>

<div class="grid grid-cols-4 gap-4">

<div class="bg-red-900/20 p-4 rounded border border-red-500/30">
<div class="font-bold text-red-300 mb-2">🔒 Security</div>
<div class="text-xs text-gray-300">SQL injection, XSS, auth bypasses, secrets, unsafe deps</div>
<div class="text-xs text-gray-400 mt-2">~2 min</div>
</div>

<div class="bg-cyan-900/20 p-4 rounded border border-cyan-500/30">
<div class="font-bold text-cyan-300 mb-2">🧠 Logic</div>
<div class="text-xs text-gray-300">Error handling, edge cases, race conditions, resource leaks</div>
<div class="text-xs text-gray-400 mt-2">~2 min</div>
</div>

<div class="bg-blue-900/20 p-4 rounded border border-blue-500/30">
<div class="font-bold text-blue-300 mb-2">⚡ Performance</div>
<div class="text-xs text-gray-300">O(n²) algorithms, N+1 queries, blocking ops, caching</div>
<div class="text-xs text-gray-400 mt-2">~1 min</div>
</div>

<div class="bg-indigo-900/20 p-4 rounded border border-indigo-500/30">
<div class="font-bold text-indigo-300 mb-2">🧪 Tests</div>
<div class="text-xs text-gray-300">Coverage on new code, edge cases, integration, flaky detection</div>
<div class="text-xs text-gray-400 mt-2">~1 min</div>
</div>

</div>

<div class="mt-6 p-3 bg-gradient-to-r from-purple-600/80 to-blue-600/80 rounded-lg text-center">
<span class="text-white font-bold">Human review shifts: "read every line" → "validate outcomes against intent"</span>
</div>

</div>

---
layout: default
---

# Phase 4: Before vs After

<div class="grid grid-cols-2 gap-8 mt-6">

<div>
<div class="font-bold text-red-300 text-lg mb-3">❌ Before Code Review Agent</div>
<div class="bg-red-900/20 border-l-4 border-red-500 p-4 rounded-r text-sm space-y-2">
<div><strong>PR #2481: "Add MS OAuth"</strong></div>
<div class="text-gray-300">Human reviewer: <span class="text-red-400 font-bold">3 hours</span></div>
<div class="text-xs text-gray-400">45 min understanding + 60 min security + 30 min edge cases + 45 min tests</div>
<div class="mt-3 text-red-400 font-bold">Missed race condition in token refresh</div>
<div class="text-xs text-gray-400">Bug found in production 2 weeks later</div>
</div>
</div>

<div>
<div class="font-bold text-green-300 text-lg mb-3">✅ With Code Review Agent</div>
<div class="bg-green-900/20 border-l-4 border-green-500 p-4 rounded-r text-sm space-y-2">
<div><strong>Same PR #2481</strong></div>
<div class="text-gray-300">Agent analysis: <span class="text-green-400 font-bold">5 min</span></div>
<div class="text-gray-300">Human validates: <span class="text-green-400 font-bold">15 min</span></div>
<div class="mt-3 text-green-400 font-bold">Race condition flagged and fixed</div>
<div class="text-xs text-gray-400">Zero security incidents next quarter</div>
</div>
</div>

</div>

<div class="grid grid-cols-3 gap-4 mt-6 text-xs">
<div class="bg-purple-900/20 p-3 rounded border border-purple-500/30 text-center">
<div class="text-gray-400">Time per PR</div>
<div class="text-lg font-bold text-purple-300">2-4h → 20m</div>
</div>
<div class="bg-purple-900/20 p-3 rounded border border-purple-500/30 text-center">
<div class="text-gray-400">Critical bugs caught</div>
<div class="text-lg font-bold text-purple-300">60% → >95%</div>
</div>
<div class="bg-purple-900/20 p-3 rounded border border-purple-500/30 text-center">
<div class="text-gray-400">Savings (40 PRs/mo)</div>
<div class="text-lg font-bold text-purple-300">$10,000/month</div>
</div>
</div>

---
layout: center
name: phase5
---

# Phase 5

<div class="text-5xl font-bold bg-gradient-to-r from-pink-400 to-amber-400 bg-clip-text text-transparent">
Graduating to Full SDLC
</div>

<div class="mt-6 text-xl opacity-80">
When Quick Wins Hit Their Limits
</div>

<div class="mt-8 text-sm opacity-60">
The inflection point · 5-10 features/week → 10-15 features/day
</div>

---
layout: default
---

# Phase 5: Graduation Signals & Upgrade Path

<div class="grid grid-cols-2 gap-6 mt-4 text-sm">

<div>
<div class="font-bold text-pink-300 text-lg mb-3">⚠️ Watch for These Signals</div>
<div class="space-y-3">
<div class="bg-red-900/20 border-l-4 border-red-500 p-3 rounded-r">
<div class="font-bold text-red-300">Repository Chaos</div>
<div class="text-xs text-gray-300">Agents touching 3-5 repos per feature</div>
</div>
<div class="bg-orange-900/20 border-l-4 border-orange-500 p-3 rounded-r">
<div class="font-bold text-orange-300">CI Bottleneck</div>
<div class="text-xs text-gray-300">Queue time >60 minutes</div>
</div>
<div class="bg-yellow-900/20 border-l-4 border-yellow-500 p-3 rounded-r">
<div class="font-bold text-yellow-300">Review Overwhelm</div>
<div class="text-xs text-gray-300">50+ PRs open, 10+ days to review</div>
</div>
</div>
</div>

<div>
<div class="font-bold text-cyan-300 text-lg mb-3">✅ Upgrade Solutions</div>
<div class="space-y-3">
<div class="bg-cyan-900/20 border-l-4 border-cyan-500 p-3 rounded-r">
<div class="font-bold text-cyan-300">Monorepo Consolidation</div>
<div class="text-xs text-gray-300">Single controlled boundary for agents</div>
</div>
<div class="bg-blue-900/20 border-l-4 border-blue-500 p-3 rounded-r">
<div class="font-bold text-blue-300">Trust Factory CI</div>
<div class="text-xs text-gray-300"><10 min cycles, hermetic builds</div>
</div>
<div class="bg-indigo-900/20 border-l-4 border-indigo-500 p-3 rounded-r">
<div class="font-bold text-indigo-300">Intent-Based PRs</div>
<div class="text-xs text-gray-300">Outcome validation vs line-by-line review</div>
</div>
</div>
</div>

</div>

<div class="bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-indigo-500/10 p-5 rounded-lg border border-cyan-500/30 mt-4 text-center">
<span class="text-slate-300">Phase 1-4:</span>
<span class="text-cyan-300 font-bold text-xl"> 5-10 features/week</span>
<span class="text-slate-400 text-xl"> → </span>
<span class="text-slate-300">Phase 5:</span>
<span class="text-blue-300 font-bold text-xl"> 10-15 features/day</span>
</div>

---
layout: default
---

# Expected ROI by Phase

<div class="text-sm mt-4">

**For a team processing 50 issues/month ($100/hour developer cost):**

<div class="mt-4">

| Phase | Setup | Monthly Savings | Annual Savings |
|-------|-------|-----------------|----------------|
| **Phase 1: Intake** | 2-3 hours | $2,000 | $24,000 |
| **Phase 2: Planning** | 2-3 hours | $7,000 | $84,000 |
| **Phase 3: Coding** | 0 hours | $17,000 | $204,000 |
| **Phase 4: Review** | 1-2 hours | $10,000 | $120,000 |
| **Combined 1-4** | **~8 hours** | **$36,000** | **$432,000** |

</div>

</div>

<div class="grid grid-cols-2 gap-6 mt-6">
<div class="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-5 rounded-lg border border-cyan-500/30">
<div class="font-bold text-cyan-300 mb-2">Phases 1-4: Quick Wins</div>
<div class="text-2xl font-bold text-white">$432K/year</div>
<div class="text-xs text-slate-300 mt-1">Hours to setup · Immediate value · Low risk</div>
</div>
<div class="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 p-5 rounded-lg border border-indigo-500/30">
<div class="font-bold text-indigo-300 mb-2">Phase 5: Full SDLC</div>
<div class="text-2xl font-bold text-white">+$1.8M/year</div>
<div class="text-xs text-slate-300 mt-1">3-6 month investment · Organizational transformation</div>
</div>
</div>

---
layout: default
---

# ✅ What You Can Do Today

<div class="grid grid-cols-3 gap-6 mt-6 text-sm">

<div class="bg-cyan-900/40 p-5 rounded-lg border border-cyan-500/30">
<div class="text-2xl mb-3">🚀</div>
<div class="font-bold text-cyan-300 text-lg mb-3">Just Starting</div>
<div class="space-y-2 text-xs">
<div>1. Copy <code>1-issue-triage.yml</code></div>
<div>2. Create prompts in <code>.github/prompts/</code></div>
<div>3. Configure <code>COPILOT_GITHUB_TOKEN</code></div>
<div>4. Create a test issue and validate</div>
</div>
<div class="mt-3 text-xs text-gray-400">Setup: 2-3 hours</div>
</div>

<div class="bg-blue-900/40 p-5 rounded-lg border border-blue-500/30">
<div class="text-2xl mb-3">🔧</div>
<div class="font-bold text-blue-300 text-lg mb-3">Already Using Copilot</div>
<div class="space-y-2 text-xs">
<div>1. Add Phase 2 (planning with history)</div>
<div>2. Add Phase 4 (code review agent)</div>
<div>3. Track metrics for 2-4 weeks</div>
<div>4. Monitor for graduation signals</div>
</div>
<div class="mt-3 text-xs text-gray-400">Add Phases 2+4: 3-4 hours</div>
</div>

<div class="bg-indigo-900/40 p-5 rounded-lg border border-indigo-500/30">
<div class="text-2xl mb-3">🎯</div>
<div class="font-bold text-indigo-300 text-lg mb-3">Ready for Full SDLC</div>
<div class="space-y-2 text-xs">
<div>1. Review graduation criteria</div>
<div>2. Get executive sponsorship</div>
<div>3. Start with Agentic SDLC Part 1</div>
<div>4. Plan 6-month transformation</div>
</div>
<div class="mt-3 text-xs text-gray-400">See: Agentic SDLC talk</div>
</div>

</div>

<div class="mt-6 p-4 bg-gradient-to-r from-cyan-900/30 via-blue-900/30 to-indigo-900/30 rounded-lg text-center text-sm">
<span class="text-white font-bold">All 4 workflow files are available in this talk's repository directory — ready to copy and customize</span>
</div>

---
layout: center
class: text-center
---

<div class="flex flex-col items-center justify-center">
<div class="relative w-full max-w-4xl">
<div class="absolute inset-0 bg-gradient-to-r from-cyan-900/20 via-blue-900/10 to-indigo-900/20 rounded-3xl blur-3xl"></div>
<div class="relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl rounded-3xl border-2 border-cyan-500/30 shadow-2xl p-16">

<div class="text-6xl mb-8">🎯</div>

<h1 class="text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
Start with 4 YAML Files
</h1>

<div class="text-2xl text-slate-200 leading-relaxed mb-8 space-y-4">
<p>The journey to agentic SDLC doesn't require</p>
<p>ripping everything out and starting over.</p>
</div>

<div class="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border-2 border-cyan-500/50 p-8 rounded-xl my-8">
<div class="text-3xl font-bold text-white mb-2">
Copy 4 workflows. Create a test issue.
</div>
<div class="text-4xl font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
Agents start working in under 3 hours.
</div>
</div>

<div class="text-xl text-slate-300 space-y-3">
<p>Prove value with agents. Build confidence. Show ROI.</p>
<p><strong class="text-cyan-300">When you hit the limits — you're ready for full transformation.</strong></p>
</div>

</div>
</div>
</div>
