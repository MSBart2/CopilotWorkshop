---
theme: default
background: https://source.unsplash.com/collection/94734566/1920x1080
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Agentic SDLC: Infrastructure for AI Velocity
  CopilotTraining Tech Talk
drawings:
  persist: false
transition: slide-left
title: Agentic SDLC - Infrastructure for AI Velocity
module: tech-talks/agentic-sdlc
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
Agentic SDLC
</h1>
<div class="mt-4 relative z-10">
<span class="px-6 py-2 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xl font-medium shadow-lg shadow-cyan-500/25">
Infrastructure for AI Velocity
</span>
</div>
<div class="mt-8 text-lg opacity-70 relative z-10">How to rewire repositories, PR workflows, and CI/CD for AI-as-labor delivery agents</div>
<div class="mt-6 w-32 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full relative z-10"></div>
</div>

<div class="abs-br m-6 flex gap-2">
<span class="text-sm opacity-50">Tech Talk · 60 minutes</span>
</div>

---

# 📖 Table of Contents

<div class="grid grid-cols-3 gap-6 mt-8">
<a href="#part1" class="p-4 bg-cyan-900/40 rounded-lg border-2 border-cyan-500 hover:bg-cyan-900/60 transition-all no-underline">
<div class="text-2xl mb-2">🏗️</div>
<div class="text-lg font-bold text-cyan-300">Part 1</div>
<div class="text-sm text-gray-300 mt-1">Repository Topology</div>
<div class="text-xs text-gray-400 mt-2">Rewiring repos for AI-native delivery</div>
</a>

<a href="#part2" class="p-4 bg-blue-900/40 rounded-lg border-2 border-blue-500 hover:bg-blue-900/60 transition-all no-underline">
<div class="text-2xl mb-2">📋</div>
<div class="text-lg font-bold text-blue-300">Part 2</div>
<div class="text-sm text-gray-300 mt-1">PR Workflows</div>
<div class="text-xs text-gray-400 mt-2">Feature-scale payloads governance</div>
</a>

<a href="#part3" class="p-4 bg-indigo-900/40 rounded-lg border-2 border-indigo-500 hover:bg-indigo-900/60 transition-all no-underline">
<div class="text-2xl mb-2">🏭</div>
<div class="text-lg font-bold text-indigo-300">Part 3</div>
<div class="text-sm text-gray-300 mt-1">Trust Manufacturing</div>
<div class="text-xs text-gray-400 mt-2">CI as trust factory</div>
</a>
</div>

<div class="mt-8 p-4 bg-gradient-to-r from-cyan-900/30 to-blue-900/30 rounded-lg text-center">
<span class="text-white font-bold">Each part is independent → Jump to what you need</span>
</div>

---

# Gen-4 SDLC: The Core Transformation

<div class="grid grid-cols-2 gap-6">
<div class="p-4 bg-red-900/30 rounded-lg border-l-4 border-red-500">
<div class="text-lg font-bold text-red-300 mb-3">Gen-3 (Traditional)</div>
<div class="text-sm text-gray-300 space-y-2">
<div>• Humans produce code (10-50 lines/hour)</div>
<div>• PRs as collaboration forums</div>
<div>• Repos optimized for teams</div>
<div>• CI as supporting infrastructure</div>
</div>
</div>

<div class="p-4 bg-green-900/30 rounded-lg border-l-4 border-green-500">
<div class="text-lg font-bold text-green-300 mb-3">Gen-4 (Agentic)</div>
<div class="text-sm text-gray-300 space-y-2">
<div>• Agents produce features (500-2000 lines/15min)</div>
<div>• Humans govern safety & outcomes</div>
<div>• Repos optimized for agents</div>
<div>• CI becomes the trust factory</div>
</div>
</div>
</div>

<div class="mt-6 p-4 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-lg text-center">
<span class="text-white font-bold">💡 The Shift: Humans delegate coding, review outcomes</span>
</div>

---

# The Four Generations

<div class="grid grid-cols-4 gap-3">
<div class="p-3 bg-gray-800 rounded-lg">
<div class="text-lg font-bold text-gray-300 mb-2">Gen-1</div>
<div class="text-xs text-gray-400">Manual coding by individual developers</div>
</div>

<div class="p-3 bg-gray-800 rounded-lg">
<div class="text-lg font-bold text-gray-300 mb-2">Gen-2</div>
<div class="text-xs text-gray-400">Team workflows with PRs and CI/CD</div>
</div>

<div class="p-3 bg-gray-800 rounded-lg">
<div class="text-lg font-bold text-gray-300 mb-2">Gen-3</div>
<div class="text-xs text-gray-400">AI assistance (autocomplete) with humans as authors</div>
</div>

<div class="p-3 bg-green-900/40 rounded-lg border-2 border-green-500">
<div class="text-lg font-bold text-green-300 mb-2">Gen-4</div>
<div class="text-xs text-gray-300">AI agents as primary producers from intent</div>
</div>
</div>

<div class="mt-8 p-4 bg-red-900/30 rounded-lg border-l-4 border-red-500">
<div class="text-white font-bold">⚠️ The Breakpoint</div>
<div class="text-sm text-gray-300 mt-2">When AI-generated code volume surpasses human review capacity</div>
</div>

<div class="mt-4 text-center text-lg font-bold text-cyan-400">This is happening right now.</div>

---
layout: center
name: part1
---

# Part 1

<div class="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
Repository Topology
</div>

<div class="mt-6 text-xl opacity-80">
Rewiring repositories for AI-native delivery
</div>

<div class="mt-8 text-sm text-gray-400">
🏗️ From human collaboration to agent autonomy
</div>

---

# The Problem

<div class="text-center mt-12">
<div class="text-3xl font-bold text-red-400 mb-6">
Our repo structure was designed for humans<br/>collaborating on quarterly releases.
</div>

<div class="text-2xl text-gray-300 mb-8">
Now we're running agents that ship features daily.
</div>

<div class="p-6 bg-gradient-to-r from-red-900/40 to-gray-800 rounded-lg">
<span class="text-white font-bold text-xl">
⚠️ This is like running a Formula 1 car on roads designed for horses.
</span>
</div>

<div class="mt-6 text-lg text-gray-400 italic">
The car is fast. The road wasn't built for that speed.<br/>Something breaks.
</div>
</div>

---

# Repository Topology: TL;DR

<div class="space-y-4">
<div class="p-4 bg-blue-900/30 rounded-lg border-l-4 border-blue-500">
<span class="text-blue-300 font-bold">Default:</span>
<span class="text-gray-300"> Agent-native product monorepo with enforced module boundaries</span>
</div>

<div class="p-4 bg-purple-900/30 rounded-lg border-l-4 border-purple-500">
<span class="text-purple-300 font-bold">Pair with:</span>
<span class="text-gray-300"> Separate control-plane repo for policies and golden workflows</span>
</div>

<div class="p-4 bg-green-900/30 rounded-lg border-l-4 border-green-500">
<span class="text-green-300 font-bold">Optimize for:</span>
<span class="text-gray-300"> Deterministic signal (hermetic builds, affected CI, caching)</span>
</div>

<div class="p-4 bg-cyan-900/30 rounded-lg border-l-4 border-cyan-500">
<span class="text-cyan-300 font-bold">Treat PRs as:</span>
<span class="text-gray-300"> Governance evidence bundles (intent → diff → checks → attestations)</span>
</div>
</div>

---

# Goal: Max Throughput Without Losing Trust

<div class="text-center mt-8 mb-8">
<div class="text-2xl font-bold text-cyan-400">
Agent velocity × Human confidence = Sustainable delivery at scale
</div>
</div>

<div class="grid grid-cols-2 gap-6">
<div class="space-y-3">
<div class="p-3 bg-gray-800 rounded-lg">
<div class="text-sm font-bold text-orange-400">Minimize coordination</div>
<div class="text-xs text-gray-300">6 repos × 3 teams = 18 handoffs</div>
<div class="text-xs text-cyan-400">→ 1 repo × atomic merge = 0 handoffs</div>
</div>

<div class="p-3 bg-gray-800 rounded-lg">
<div class="text-sm font-bold text-orange-400">Maximize agent awareness</div>
<div class="text-xs text-gray-300">"Where's auth code?"</div>
<div class="text-xs text-cyan-400">→ 3 grep results, not 3 repo searches</div>
</div>
</div>

<div class="space-y-3">
<div class="p-3 bg-gray-800 rounded-lg">
<div class="text-sm font-bold text-orange-400">Make verification fast</div>
<div class="text-xs text-gray-300">4-hour CI runs</div>
<div class="text-xs text-cyan-400">→ 8-minute affected tests with caching</div>
</div>

<div class="p-3 bg-gray-800 rounded-lg">
<div class="text-sm font-bold text-orange-400">Scale governance</div>
<div class="text-xs text-gray-300">22 manual approval gates</div>
<div class="text-xs text-cyan-400">→ 4 human checkpoints + automated</div>
</div>
</div>
</div>

---

# War Story: The 6-Hour Feature

<div class="p-4 bg-red-900/20 rounded-lg border-2 border-red-500 mb-6">
<div class="text-lg font-bold text-red-300 mb-3">⚠️ 18 Microservice Repos</div>
<div class="text-sm text-gray-300 space-y-2">
<div><span class="font-bold text-red-400">Day 1:</span> Open PR in repo A, wait for CI (45 min), wait for review (4 hours)</div>
<div><span class="font-bold text-red-400">Day 2:</span> Open PR in repo B, discover contract mismatch, go back to repo A</div>
<div><span class="font-bold text-red-400">Day 3:</span> Coordinate deploy order, staging fails, debug across repos</div>
</div>
</div>

<div class="grid grid-cols-2 gap-4">
<div class="p-4 bg-red-900/30 rounded-lg">
<div class="text-sm font-bold text-red-300">Before: Multi-repo</div>
<div class="text-xs text-gray-400 mt-2">6 hours agent work, 3 days coordination, 2 rollbacks</div>
</div>

<div class="p-4 bg-green-900/30 rounded-lg">
<div class="text-sm font-bold text-green-300">After: Monorepo</div>
<div class="text-xs text-gray-400 mt-2">45 minutes, 1 atomic PR, 0 coordination overhead</div>
</div>
</div>

---

# Monorepo vs Multi-Repo

<div class="grid grid-cols-2 gap-6">
<div class="p-4 bg-green-900/30 rounded-lg">
<div class="text-lg font-bold text-green-300 mb-3">✅ Monorepo (Default)</div>
<div class="text-sm text-gray-300 space-y-2">
<div>• Atomic cross-module changes</div>
<div>• Shared patterns are local</div>
<div>• Agent navigation is grep</div>
<div>• One CI pipeline</div>
</div>
<div class="mt-3 text-xs text-green-400 font-bold">Use for 80% of product teams</div>
</div>

<div class="p-4 bg-orange-900/30 rounded-lg">
<div class="text-lg font-bold text-orange-300 mb-3">⚡ Multi-Repo (When Needed)</div>
<div class="text-sm text-gray-300 space-y-2">
<div>• Hard access boundaries (PCI)</div>
<div>• Truly independent products</div>
<div>• Regulatory mandates</div>
<div>• Organizational constraints</div>
</div>
<div class="mt-3 text-xs text-orange-400 font-bold">Only for specific use cases</div>
</div>
</div>

<div class="mt-6 p-4 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-lg text-center">
<span class="text-white font-bold">🎯 Decision Rule: If agents touch >1 repo for >30% of features → monorepo</span>
</div>

---

# Agent-Native Monorepo Structure

<div class="grid grid-cols-2 gap-4 text-xs">
<div>

```
product-monorepo/
├── .github/
│   ├── agents/
│   │   ├── feature-builder.agent.md
│   │   └── review-enforcer.agent.md
│   ├── workflows/
│   │   ├── pr-checks.yml (<10min)
│   │   └── deploy-prod.yml
│   └── policies/
│       ├── CODEOWNERS
│       └── security-scanning.yml
├── apps/
│   ├── web/
│   ├── api/
│   └── admin/
```

</div>
<div>

```
├── libs/
│   ├── auth/
│   ├── data-access/
│   ├── ui-components/
│   └── validation/
├── tools/
│   ├── generators/
│   └── scripts/
├── nx.json
├── package.json
└── tsconfig.base.json
```

</div>
</div>

<div class="mt-4 grid grid-cols-4 gap-2 text-xs">
<div class="p-2 bg-blue-900/40 rounded">
<div class="font-bold text-blue-300">apps/</div>
<div class="text-gray-400">Deployable units</div>
</div>
<div class="p-2 bg-green-900/40 rounded">
<div class="font-bold text-green-300">libs/</div>
<div class="text-gray-400">Shared code</div>
</div>
<div class="p-2 bg-purple-900/40 rounded">
<div class="font-bold text-purple-300">tools/</div>
<div class="text-gray-400">Build/dev tooling</div>
</div>
<div class="p-2 bg-orange-900/40 rounded">
<div class="font-bold text-orange-300">.github/</div>
<div class="text-gray-400">Agents & policies</div>
</div>
</div>

---

# Control-Plane Repo (Separate)

<div class="grid grid-cols-2 gap-6">
<div class="text-xs">

```
enterprise-control-plane/
├── templates/
│   ├── agent-workflows/
│   │   ├── feature-flow.md
│   │   ├── refactor-flow.md
│   │   └── security-review-flow.md
│   └── scaffolds/
│       ├── new-service/
│       └── new-feature/
├── policies/
│   ├── security-requirements.md
│   ├── compliance-checklist.md
│   └── architectural-standards.md
└── agents/
    ├── global-reviewer.agent.md
    └── compliance-validator.agent.md
```

</div>
<div>
<div class="space-y-3">
<div class="p-3 bg-cyan-900/40 rounded-lg">
<div class="text-sm font-bold text-cyan-300">Security</div>
<div class="text-xs text-gray-400">Policies don't live in product code</div>
</div>

<div class="p-3 bg-blue-900/40 rounded-lg">
<div class="text-sm font-bold text-blue-300">Consistency</div>
<div class="text-xs text-gray-400">One source of truth for standards</div>
</div>

<div class="p-3 bg-purple-900/40 rounded-lg">
<div class="text-sm font-bold text-purple-300">Auditability</div>
<div class="text-xs text-gray-400">Clear governance trail</div>
</div>

<div class="p-3 bg-green-900/40 rounded-lg">
<div class="text-sm font-bold text-green-300">Updates</div>
<div class="text-xs text-gray-400">Change policies without product deploys</div>
</div>
</div>
</div>
</div>

---

# Module Boundaries: Enforced vs Suggested

<div class="grid grid-cols-2 gap-6">
<div class="p-4 bg-red-900/30 rounded-lg border-l-4 border-red-500">
<div class="text-lg font-bold text-red-300 mb-3">❌ Suggested (Fails Gen-4)</div>
<div class="text-xs font-mono text-gray-300 bg-gray-900/50 p-2 rounded">
// Hope developers notice<br/>
// @internal - Don't import!<br/>
export class PaymentProcessor {}
</div>
<div class="text-xs text-gray-400 mt-3">Agents don't read comments</div>
</div>

<div class="p-4 bg-green-900/30 rounded-lg border-l-4 border-green-500">
<div class="text-lg font-bold text-green-300 mb-3">✅ Enforced (Works Gen-4)</div>
<div class="text-xs font-mono text-gray-300 bg-gray-900/50 p-2 rounded">
// nx.json boundary rule<br/>
{<br/>
  "sourceTag": "scope:payment",<br/>
  "onlyDependOnLibsWithTags": [<br/>
    "scope:shared"<br/>
  ]<br/>
}
</div>
<div class="text-xs text-gray-400 mt-3">Build-time failures prevent issues</div>
</div>
</div>

<div class="mt-4 p-3 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-lg text-center">
<span class="text-white font-bold">💡 Pattern: Use Nx, Lerna, or Bazel to enforce at build time</span>
</div>

---

# Deterministic Builds: Hermetic

<div class="grid grid-cols-2 gap-6">
<div class="p-4 bg-red-900/30 rounded-lg">
<div class="text-lg font-bold text-red-300 mb-3">❌ Non-Hermetic</div>
<div class="text-xs font-mono text-gray-300 bg-gray-900/50 p-2 rounded mb-2">
RUN npm install<br/>
# Uses latest today
</div>
<div class="text-xs font-mono text-gray-300 bg-gray-900/50 p-2 rounded">
RUN apt-get update<br/>
# Gets latest from internet
</div>
</div>

<div class="p-4 bg-green-900/30 rounded-lg">
<div class="text-lg font-bold text-green-300 mb-3">✅ Hermetic</div>
<div class="text-xs font-mono text-gray-300 bg-gray-900/50 p-2 rounded mb-2">
COPY package-lock.json ./<br/>
RUN npm ci  # Exact versions
</div>
<div class="text-xs font-mono text-gray-300 bg-gray-900/50 p-2 rounded">
RUN apt-get install<br/>
  curl=7.74.0-1.3+deb11u7
</div>
</div>
</div>

<div class="mt-4 space-y-2">
<div class="p-2 bg-gray-800 rounded text-sm text-gray-300">
<span class="text-cyan-400">✓ Reproducible failures</span> — Debug because build is identical
</div>
<div class="p-2 bg-gray-800 rounded text-sm text-gray-300">
<span class="text-green-400">✓ Cacheable artifacts</span> — Same inputs = same outputs
</div>
<div class="p-2 bg-gray-800 rounded text-sm text-gray-300">
<span class="text-blue-400">✓ Trust in green builds</span> — Green means safe, not "worked on this machine"
</div>
</div>

---

# Affected Analysis: Fast Feedback

<div class="grid grid-cols-2 gap-6">
<div class="p-4 bg-red-900/30 rounded-lg">
<div class="text-lg font-bold text-red-300 mb-3">❌ Test Everything</div>
<div class="text-xs font-mono text-gray-300 space-y-1">
<div>npm test        # 45 minutes</div>
<div>npm run lint    # 12 minutes</div>
<div>npm run build   # 23 minutes</div>
</div>
<div class="mt-3 text-sm font-bold text-red-400">Total: 80 minutes</div>
</div>

<div class="p-4 bg-green-900/30 rounded-lg">
<div class="text-lg font-bold text-green-300 mb-3">✅ Test What Changed</div>
<div class="text-xs font-mono text-gray-300 space-y-1">
<div>nx affected:test   # 4 minutes</div>
<div>nx affected:lint   # 1 minute</div>
<div>nx affected:build  # 3 minutes</div>
</div>
<div class="mt-3 text-sm font-bold text-green-400">Total: 8 minutes</div>
</div>
</div>

<div class="mt-6 p-4 bg-gradient-to-r from-green-600/80 to-blue-600/80 rounded-lg text-center">
<span class="text-white font-bold">⚡ Impact: 10x faster → Agents ship 10-15 features/day instead of 2-3</span>
</div>

---

# Repository Topology: Key Takeaways

<div class="grid grid-cols-5 gap-3 text-xs">
<div class="p-3 bg-cyan-900/40 rounded-lg">
<div class="text-2xl mb-2">🏗️</div>
<div class="font-bold text-cyan-300">Monorepo Default</div>
<div class="text-gray-400 mt-1">Multi-repo only for hard boundaries</div>
</div>

<div class="p-3 bg-blue-900/40 rounded-lg">
<div class="text-2xl mb-2">🔒</div>
<div class="font-bold text-blue-300">Enforced Boundaries</div>
<div class="text-gray-400 mt-1">Build-time failures, not comments</div>
</div>

<div class="p-3 bg-purple-900/40 rounded-lg">
<div class="text-2xl mb-2">🎯</div>
<div class="font-bold text-purple-300">Hermetic Builds</div>
<div class="text-gray-400 mt-1">Deterministic, reproducible, cacheable</div>
</div>

<div class="p-3 bg-green-900/40 rounded-lg">
<div class="text-2xl mb-2">⚡</div>
<div class="font-bold text-green-300">Affected Analysis</div>
<div class="text-gray-400 mt-1">Test what changed, cache the rest</div>
</div>

<div class="p-3 bg-orange-900/40 rounded-lg">
<div class="text-2xl mb-2">🔐</div>
<div class="font-bold text-orange-300">Control Plane</div>
<div class="text-gray-400 mt-1">Policies outside product code</div>
</div>
</div>

<div class="mt-6 text-center">
<a href="#part2" class="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg text-white font-bold hover:from-blue-500 hover:to-indigo-500 transition-all no-underline">
Continue to Part 2: PR Workflows →
</a>
</div>

---
layout: center
name: part2
---

# Part 2

<div class="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
PR Workflows
</div>

<div class="mt-6 text-xl opacity-80">
Why traditional pull requests collapse at feature-scale payloads
</div>

<div class="mt-8 text-sm text-gray-400">
📋 From collaboration forums to governance gates
</div>

---

# The Problem: PRs at Machine Scale

<div class="text-center mt-8">
<div class="text-2xl font-bold text-red-400 mb-6">
Traditional PRs designed for 50-line human changes
</div>

<div class="text-xl text-gray-300 mb-8">
AI agents generate 500-2000 line feature diffs in 15 minutes
</div>

<div class="p-6 bg-gradient-to-r from-red-900/40 to-gray-800 rounded-lg">
<span class="text-white font-bold text-xl">
⚠️ Human reviewers can't keep up.<br/>
The bottleneck isn't coding—it's governance.
</span>
</div>
</div>

---

# Why Traditional PRs Fail in Gen-4

<div class="grid grid-cols-2 gap-6">
<div class="p-4 bg-red-900/30 rounded-lg border-l-4 border-red-500">
<div class="text-lg font-bold text-red-300 mb-3">Gen-3 PR Assumptions</div>
<div class="text-sm text-gray-300 space-y-2">
<div>• Small changes (50-200 lines)</div>
<div>• Line-by-line review</div>
<div>• Synchronous collaboration</div>
<div>• Trust through scrutiny</div>
</div>
</div>

<div class="p-4 bg-orange-900/30 rounded-lg border-l-4 border-orange-500">
<div class="text-lg font-bold text-orange-300 mb-3">Gen-4 Agent Reality</div>
<div class="text-sm text-gray-300 space-y-2">
<div>• Feature payloads (500-2000 lines)</div>
<div>• Intent-driven generation</div>
<div>• Machine velocity (15 min/feature)</div>
<div>• Volume explosion (10-15/day)</div>
</div>
</div>
</div>

<div class="mt-6 p-4 bg-gradient-to-r from-red-900/40 to-gray-800 rounded-lg text-center">
<span class="text-white font-bold">⚠️ Humans can't review 15,000 lines/day at Gen-3 detail level</span>
</div>

---

# Where Code Is No Longer Scarce, Trust Is

<div class="grid grid-cols-2 gap-6 mt-8">
<div class="space-y-4">
<div class="p-4 bg-gray-800 rounded-lg">
<div class="text-lg font-bold text-gray-300 mb-2">Gen-3 Economics</div>
<div class="text-sm text-gray-400 space-y-1">
<div><span class="text-red-400">Bottleneck:</span> Writing code</div>
<div><span class="text-orange-400">Solution:</span> Hire more developers</div>
<div><span class="text-blue-400">Control:</span> Code reviews catch bugs</div>
</div>
</div>
</div>

<div class="space-y-4">
<div class="p-4 bg-green-900/30 rounded-lg border-2 border-green-500">
<div class="text-lg font-bold text-green-300 mb-2">Gen-4 Economics</div>
<div class="text-sm text-gray-300 space-y-1">
<div><span class="text-cyan-400">Bottleneck:</span> Trusting code</div>
<div><span class="text-blue-400">Solution:</span> Automate trust manufacturing</div>
<div><span class="text-purple-400">Control:</span> Policy enforcement + validation</div>
</div>
</div>
</div>
</div>

<div class="mt-6 p-4 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-lg text-center">
<span class="text-white font-bold">💡 From "can we write it fast?" to "can we trust it at this velocity?"</span>
</div>

---

# Gen-4 Control Surfaces

<div class="grid grid-cols-3 gap-4">
<div class="p-4 bg-blue-900/40 rounded-lg border-2 border-blue-500">
<div class="text-lg font-bold text-blue-300 mb-3">1️⃣ Intent Specification</div>
<div class="text-xs text-gray-300 space-y-1">
<div>• Feature goals</div>
<div>• Constraints</div>
<div>• Acceptance criteria</div>
<div>• Non-functional requirements</div>
</div>
<div class="mt-2 text-xs text-blue-400 font-bold">What humans provide</div>
</div>

<div class="p-4 bg-green-900/40 rounded-lg border-2 border-green-500">
<div class="text-lg font-bold text-green-300 mb-3">2️⃣ Policy Enforcement</div>
<div class="text-xs text-gray-300 space-y-1">
<div>• Security scans (SAST)</div>
<div>• Architecture compliance</div>
<div>• Compliance validation (GDPR, PCI)</div>
<div>• Quality gates (coverage, perf)</div>
</div>
<div class="mt-2 text-xs text-green-400 font-bold">Automated checks</div>
</div>

<div class="p-4 bg-purple-900/40 rounded-lg border-2 border-purple-500">
<div class="text-lg font-bold text-purple-300 mb-3">3️⃣ Outcome Validation</div>
<div class="text-xs text-gray-300 space-y-1">
<div>• Matches intent?</div>
<div>• Edge cases handled?</div>
<div>• Integration correct?</div>
<div>• Non-functional met?</div>
</div>
<div class="mt-2 text-xs text-purple-400 font-bold">Human review focus</div>
</div>
</div>

---

# The Gen-4 SDLC Loop

<div class="flex flex-col items-center gap-4 mt-8">
<div class="p-4 bg-blue-900/60 rounded-lg w-96 border-2 border-blue-400">
<div class="text-center text-white font-bold">1. Human specifies INTENT</div>
</div>

<div class="text-3xl text-gray-400">↓</div>

<div class="p-4 bg-green-900/60 rounded-lg w-96 border-2 border-green-400">
<div class="text-center text-white font-bold">2. Agent generates IMPLEMENTATION</div>
</div>

<div class="text-3xl text-gray-400">↓</div>

<div class="p-4 bg-yellow-900/60 rounded-lg w-96 border-2 border-yellow-400">
<div class="text-center text-white font-bold">3. Automated POLICY CHECKS</div>
</div>

<div class="text-3xl text-gray-400">↓</div>

<div class="p-4 bg-purple-900/60 rounded-lg w-96 border-2 border-purple-400">
<div class="text-center text-white font-bold">4. Human validates OUTCOMES</div>
</div>

<div class="text-3xl text-gray-400">↓</div>

<div class="flex gap-4">
<div class="p-3 bg-green-900/60 rounded-lg border-2 border-green-400">
<div class="text-white font-bold">Ship ✅</div>
</div>
<div class="p-3 bg-orange-900/60 rounded-lg border-2 border-orange-400">
<div class="text-white font-bold">Iterate 🔄</div>
</div>
</div>
</div>

<div class="mt-6 text-center text-sm text-cyan-400 font-bold">Cycle time: 2-4 hours (vs. 2-4 days in Gen-3)</div>

---

# Three PR Models That Survive Gen-4

<div class="space-y-4">
<div class="p-4 bg-cyan-900/40 rounded-lg border-l-4 border-cyan-500">
<div class="font-bold text-cyan-300 mb-2">Model 1: Intent-Based PRs</div>
<div class="text-xs text-gray-300">Intent specification + AI-generated implementation + acceptance validation</div>
</div>

<div class="p-4 bg-blue-900/40 rounded-lg border-l-4 border-blue-500">
<div class="font-bold text-blue-300 mb-2">Model 2: Evidence-Bundle PRs</div>
<div class="text-xs text-gray-300">Required artifacts proving checks passed (intent, diff, tests, security, compliance)</div>
</div>

<div class="p-4 bg-purple-900/40 rounded-lg border-l-4 border-purple-500">
<div class="font-bold text-purple-300 mb-2">Model 3: Policy-Gated PRs</div>
<div class="text-xs text-gray-300">Automated gates must pass before human review (security, coverage, performance, architecture)</div>
</div>
</div>

<div class="mt-6 p-3 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-lg text-center">
<span class="text-white font-bold">Review Question: "Do we have sufficient evidence to trust this change?"</span>
</div>

---

# Enterprise Governance at Scale

<div class="grid grid-cols-2 gap-6">
<div class="p-4 bg-red-900/30 rounded-lg">
<div class="text-lg font-bold text-red-300 mb-3">❌ Traditional (Doesn't Scale)</div>
<div class="text-sm text-gray-300 space-y-2">
<div>• 22 manual approval gates per feature</div>
<div>• Architect reviews every decision</div>
<div>• Security reviews every auth change</div>
<div>• Compliance officer reviews every data change</div>
</div>
<div class="mt-3 text-sm font-bold text-red-400">Result: 4-7 days from PR to merge</div>
</div>

<div class="p-4 bg-green-900/30 rounded-lg">
<div class="text-lg font-bold text-green-300 mb-3">✅ Gen-4 (Scales to 10-15/day)</div>
<div class="text-sm text-gray-300 space-y-2">
<div>• 4 human checkpoints</div>
<div>• 90% automated enforcement</div>
<div>• Architect reviews violations only</div>
<div>• Security/compliance automated</div>
</div>
<div class="mt-3 text-sm font-bold text-green-400">Result: 2-4 hours from PR to merge</div>
</div>
</div>

---

# The Governance Pyramid

<div class="flex flex-col items-center gap-3 mt-8">
<div class="p-4 bg-purple-900/60 rounded-lg w-96 border-2 border-purple-400">
<div class="text-center text-white font-bold">Human Governance (10%)</div>
<div class="text-xs text-center text-gray-300 mt-1">Strategic decisions · High-risk changes</div>
</div>

<div class="text-3xl text-gray-400">↓ ↓ ↓</div>

<div class="p-6 bg-green-900/60 rounded-lg w-full border-2 border-green-400">
<div class="text-center text-white font-bold mb-3">Automated Governance (90%)</div>
<div class="grid grid-cols-3 gap-2 text-xs text-gray-300">
<div>• Security scanning</div>
<div>• Test coverage</div>
<div>• Performance benchmarks</div>
<div>• Architecture rules</div>
<div>• Compliance checks</div>
<div>• Dependency audits</div>
</div>
</div>
</div>

---

# The Human Role Shifts

<div class="grid grid-cols-2 gap-6 mt-8">
<div class="p-4 bg-red-900/30 rounded-lg">
<div class="text-lg font-bold text-red-300 mb-3">Gen-3 PR Review</div>
<div class="text-sm text-gray-300 space-y-2">
<div>❌ "Why did you use a Map here?"</div>
<div>❌ "Can you extract this function?"</div>
<div>❌ "Add more comments"</div>
<div>❌ "LGTM 🚀"</div>
</div>
</div>

<div class="p-4 bg-green-900/30 rounded-lg">
<div class="text-lg font-bold text-green-300 mb-3">Gen-4 PR Review</div>
<div class="text-sm text-gray-300 space-y-2">
<div>✅ "Does this meet the intent?"</div>
<div>✅ "Are edge cases handled?"</div>
<div>✅ "Is this compliant?"</div>
<div>✅ "Evidence bundle complete?"</div>
</div>
</div>
</div>

<div class="mt-6 p-4 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-lg text-center">
<span class="text-white font-bold">PRs don't go away—they move up-stack to outcome-level review</span>
</div>

---

# PR Workflows: Key Takeaways

<div class="grid grid-cols-5 gap-3 text-xs">
<div class="p-3 bg-cyan-900/40 rounded-lg">
<div class="text-2xl mb-2">🎯</div>
<div class="font-bold text-cyan-300">Intent-First</div>
<div class="text-gray-400 mt-1">Specify goals, not implementation</div>
</div>

<div class="p-3 bg-blue-900/40 rounded-lg">
<div class="text-2xl mb-2">📊</div>
<div class="font-bold text-blue-300">Evidence-Based</div>
<div class="text-gray-400 mt-1">Trust through automated checks</div>
</div>

<div class="p-3 bg-purple-900/40 rounded-lg">
<div class="text-2xl mb-2">✅</div>
<div class="font-bold text-purple-300">Outcome-Focused</div>
<div class="text-gray-400 mt-1">Does it meet requirements?</div>
</div>

<div class="p-3 bg-green-900/40 rounded-lg">
<div class="text-2xl mb-2">🚪</div>
<div class="font-bold text-green-300">Policy-Gated</div>
<div class="text-gray-400 mt-1">90% automated, 10% human</div>
</div>

<div class="p-3 bg-orange-900/40 rounded-lg">
<div class="text-2xl mb-2">⬆️</div>
<div class="font-bold text-orange-300">Move Up-Stack</div>
<div class="text-gray-400 mt-1">Review outcomes, not lines</div>
</div>
</div>

<div class="mt-6 text-center">
<a href="#part3" class="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg text-white font-bold hover:from-blue-500 hover:to-indigo-500 transition-all no-underline">
Continue to Part 3: Trust Manufacturing →
</a>
</div>

---
layout: center
name: part3
---

# Part 3

<div class="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
Trust Manufacturing
</div>

<div class="mt-6 text-xl opacity-80">
How AI agents transform CI from quality gate to trust factory
</div>

<div class="mt-8 text-sm text-gray-400">
🏭 CI as trust manufacturing at scale
</div>

---

# The Problem: Trust at Agent Velocity

<div class="text-center mt-12">
<div class="text-3xl font-bold text-red-400 mb-6">
We're shipping 10-15 features per day with AI agents
</div>

<div class="text-2xl text-gray-300 mb-8">
But our CI is still optimized for 2-3 features per week
</div>

<div class="p-6 bg-gradient-to-r from-red-900/40 to-gray-800 rounded-lg">
<span class="text-white font-bold text-xl">
⚠️ The bottleneck isn't agent velocity—it's trust production.
</span>
</div>

<div class="mt-6 text-lg text-gray-400 italic">
Agents can write code faster than CI can prove it's safe.
</div>
</div>

---

# The Core Insight: CI Is a Factory

<div class="grid grid-cols-2 gap-6">
<div class="p-4 bg-red-900/30 rounded-lg">
<div class="text-lg font-bold text-red-300 mb-3">❌ Traditional CI (Quality Gate)</div>
<div class="text-xs font-mono text-gray-300 mb-3">
Write code → Run tests → Fix → Review → Deploy
</div>
<div class="text-sm text-gray-400 space-y-1">
<div><span class="text-orange-400">Purpose:</span> Catch bugs</div>
<div><span class="text-orange-400">Optimized for:</span> Infrequent changes, manual intervention</div>
</div>
</div>

<div class="p-4 bg-green-900/30 rounded-lg">
<div class="text-lg font-bold text-green-300 mb-3">✅ Agentic CI (Trust Factory)</div>
<div class="text-xs font-mono text-gray-300 mb-3">
Agent writes → CI manufactures trust → Validate → Auto-deploy
</div>
<div class="text-sm text-gray-300 space-y-1">
<div><span class="text-cyan-400">Purpose:</span> Manufacture trust evidence</div>
<div><span class="text-cyan-400">Optimized for:</span> 10-15 changes/day, automated validation</div>
</div>
</div>
</div>

<div class="mt-6 p-4 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-lg text-center">
<span class="text-white font-bold">🏭 From "did tests pass?" to "do we have sufficient evidence to trust?"</span>
</div>

---

# Manufacturing Principles Applied to CI

<div class="grid grid-cols-3 gap-3 text-xs">
<div class="p-3 bg-gray-800 rounded-lg">
<div class="text-lg mb-1">🔄</div>
<div class="font-bold text-cyan-300">Repeatable Processes</div>
<div class="text-gray-400 mt-1">Same checks, same order, every time</div>
</div>

<div class="p-3 bg-gray-800 rounded-lg">
<div class="text-lg mb-1">🚪</div>
<div class="font-bold text-blue-300">Quality Gates</div>
<div class="text-gray-400 mt-1">Can't proceed without passing</div>
</div>

<div class="p-3 bg-gray-800 rounded-lg">
<div class="text-lg mb-1">🤖</div>
<div class="font-bold text-purple-300">Automated Inspection</div>
<div class="text-gray-400 mt-1">327 tests in 8 minutes</div>
</div>

<div class="p-3 bg-gray-800 rounded-lg">
<div class="text-lg mb-1">📜</div>
<div class="font-bold text-green-300">Evidence Trails</div>
<div class="text-gray-400 mt-1">Auditable, reproducible attestations</div>
</div>

<div class="p-3 bg-gray-800 rounded-lg">
<div class="text-lg mb-1">📈</div>
<div class="font-bold text-orange-300">Continuous Improvement</div>
<div class="text-gray-400 mt-1">Flake rate <2%, optimized monthly</div>
</div>

<div class="p-3 bg-gray-800 rounded-lg">
<div class="text-lg mb-1">💰</div>
<div class="font-bold text-yellow-300">Scale Economics</div>
<div class="text-gray-400 mt-1">15th feature: 2 min (cached)</div>
</div>
</div>

<div class="mt-4 p-3 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-lg text-center">
<span class="text-white font-bold">🎯 Trust scales linearly with agent output, not quadratically with review time</span>
</div>

---

# Agent Advantage: Context-Aware Validation

<div class="grid grid-cols-2 gap-6">
<div class="p-4 bg-red-900/30 rounded-lg">
<div class="text-lg font-bold text-red-300 mb-3">❌ Deterministic Rules</div>
<div class="text-xs font-mono text-gray-300 bg-gray-900/50 p-2 rounded mb-2">
patterns:<br/>
  - regex: "email"<br/>
    severity: high
</div>
<div class="text-sm text-gray-400 space-y-1">
<div>• 847 warnings</div>
<div>• 803 false positives</div>
<div>• Developers ignore warnings</div>
<div>• Real violations ship</div>
</div>
</div>

<div class="p-4 bg-green-900/30 rounded-lg">
<div class="text-lg font-bold text-green-300 mb-3">✅ Context-Aware Agent</div>
<div class="text-xs text-gray-300 mb-2">
Agent reads context to understand if email is in test fixtures, documentation, or production code handling real user data
</div>
<div class="text-sm text-gray-300 space-y-1">
<div>• 44 warnings (real issues)</div>
<div>• 2 false positives</div>
<div>• Developers trust signal</div>
<div>• Violations caught before merge</div>
</div>
</div>
</div>

---

# Fast Feedback: The 10-Minute Rule

<div class="grid grid-cols-2 gap-6">
<div class="p-4 bg-red-900/30 rounded-lg">
<div class="text-lg font-bold text-red-300 mb-3">❌ Slow CI (60 minutes)</div>
<div class="text-sm text-gray-300 space-y-2">
<div>4 iterations = 4 hours</div>
<div>Agent idle 80% of time</div>
<div>Effective velocity: 2-3 features/day</div>
</div>
</div>

<div class="p-4 bg-green-900/30 rounded-lg">
<div class="text-lg font-bold text-green-300 mb-3">✅ Fast CI (8 minutes)</div>
<div class="text-sm text-gray-300 space-y-2">
<div>4 iterations = 52 minutes</div>
<div>Agent productive 95% of time</div>
<div>Effective velocity: 10-15 features/day</div>
</div>
</div>
</div>

<div class="mt-6 space-y-2 text-sm">
<div class="p-3 bg-gray-800 rounded-lg">
<span class="text-cyan-400 font-bold">1. Affected analysis</span> — Test only changed modules
</div>
<div class="p-3 bg-gray-800 rounded-lg">
<span class="text-blue-400 font-bold">2. Distributed execution</span> — Parallelize across runners
</div>
<div class="p-3 bg-gray-800 rounded-lg">
<span class="text-purple-400 font-bold">3. Aggressive caching</span> — Cache dependencies, builds, tests
</div>
</div>

---

# The Trust Pipeline (3 Stages)

<div class="flex flex-col gap-4">
<div class="p-4 bg-green-900/40 rounded-lg border-l-4 border-green-500">
<div class="flex items-center justify-between">
<div>
<div class="font-bold text-green-300 text-lg">Stage 1: Fast Feedback</div>
<div class="text-xs text-gray-400 mt-1">Build, unit tests, lint, basic security</div>
</div>
<div class="text-green-400 font-bold text-xl">&lt; 10 min</div>
</div>
<div class="text-xs text-gray-300 mt-2">On failure: Block PR, fast feedback to agent</div>
</div>

<div class="p-4 bg-blue-900/40 rounded-lg border-l-4 border-blue-500">
<div class="flex items-center justify-between">
<div>
<div class="font-bold text-blue-300 text-lg">Stage 2: Comprehensive Validation</div>
<div class="text-xs text-gray-400 mt-1">Full test suite, deep security, performance, compliance</div>
</div>
<div class="text-blue-400 font-bold text-xl">&lt; 30 min</div>
</div>
<div class="text-xs text-gray-300 mt-2">On failure: Block merge, detailed report for human</div>
</div>

<div class="p-4 bg-purple-900/40 rounded-lg border-l-4 border-purple-500">
<div class="flex items-center justify-between">
<div>
<div class="font-bold text-purple-300 text-lg">Stage 3: Pre-Production</div>
<div class="text-xs text-gray-400 mt-1">Staging deploy, smoke tests, migrations, load testing</div>
</div>
<div class="text-purple-400 font-bold text-xl">&lt; 60 min</div>
</div>
<div class="text-xs text-gray-300 mt-2">On failure: Block production deploy, page on-call</div>
</div>
</div>

---

# Evidence Attestations

<div class="grid grid-cols-2 gap-6">
<div class="text-xs">
<div class="text-lg font-bold text-cyan-300 mb-3">What Are Attestations?</div>
<div class="text-gray-300 mb-3">Machine-readable artifacts proving checks ran and passed</div>

```json
{
  "predicate": {
    "builder": "GitHub Actions",
    "materials": [
      {"uri": "pkg:npm/@types/node@18"}
    ],
    "metadata": {
      "completeness": true,
      "reproducible": true
    }
  }
}
```

</div>
<div>
<div class="text-lg font-bold text-blue-300 mb-3">Why They Matter</div>
<div class="space-y-3">
<div class="p-3 bg-gray-800 rounded-lg">
<div class="text-sm font-bold text-cyan-400">Auditability</div>
<div class="text-xs text-gray-400">"Prove this was compliant"</div>
</div>
<div class="p-3 bg-gray-800 rounded-lg">
<div class="text-sm font-bold text-blue-400">Supply Chain Security</div>
<div class="text-xs text-gray-400">SLSA compliance</div>
</div>
<div class="p-3 bg-gray-800 rounded-lg">
<div class="text-sm font-bold text-purple-400">Regulatory</div>
<div class="text-xs text-gray-400">SOC 2, ISO 27001</div>
</div>
<div class="p-3 bg-gray-800 rounded-lg">
<div class="text-sm font-bold text-green-400">Reproducibility</div>
<div class="text-xs text-gray-400">Re-run identical checks</div>
</div>
</div>
</div>
</div>

---

# Flake Management: Zero Tolerance

<div class="grid grid-cols-2 gap-6">
<div class="p-4 bg-red-900/30 rounded-lg">
<div class="text-lg font-bold text-red-300 mb-3">❌ The Problem</div>
<div class="text-sm text-gray-300 space-y-2">
<div>Single flaky test (5% failure rate):</div>
<div>• 20 PRs/day × 5% = 1 spurious failure/day</div>
<div>• 10 flaky tests = 10 failures/day</div>
<div>• Developers lose trust in CI</div>
<div>• "Just rerun it" becomes default</div>
</div>
</div>

<div class="p-4 bg-green-900/30 rounded-lg">
<div class="text-lg font-bold text-green-300 mb-3">✅ Zero Tolerance Policy</div>
<div class="text-sm text-gray-300 space-y-2">
<div>• Quarantine on first flake</div>
<div>• Fix within 2 days</div>
<div>• After 2 days: Auto-disabled</div>
<div>• Track flake rate: &lt;2% target</div>
<div>• Measure weekly, optimize monthly</div>
</div>
</div>
</div>

<div class="mt-4 p-3 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-lg text-center">
<span class="text-white font-bold">🎯 Goal: Zero flaky tests in critical path (PR checks)</span>
</div>

---

# Caching Strategies

<div class="grid grid-cols-3 gap-4 text-xs">
<div class="p-4 bg-cyan-900/40 rounded-lg">
<div class="text-lg font-bold text-cyan-300 mb-2">Dependencies</div>
<div class="font-mono text-gray-300 text-xs">
path: ~/.npm<br/>
key: ${{hashFiles('**/package-lock.json')}}
</div>
<div class="text-gray-400 mt-2">Invalidate on lockfile change</div>
</div>

<div class="p-4 bg-blue-900/40 rounded-lg">
<div class="text-lg font-bold text-blue-300 mb-2">Build Artifacts</div>
<div class="font-mono text-gray-300 text-xs">
path: ./dist<br/>
key: ${{github.sha}}
</div>
<div class="text-gray-400 mt-2">Invalidate on source change</div>
</div>

<div class="p-4 bg-purple-900/40 rounded-lg">
<div class="text-lg font-bold text-purple-300 mb-2">Test Results</div>
<div class="font-mono text-gray-300 text-xs">
path: ./.test-cache<br/>
key: ${{hashFiles('**/src/**')}}
</div>
<div class="text-gray-400 mt-2">Invalidate on test/source change</div>
</div>
</div>

<div class="mt-6 p-4 bg-gradient-to-r from-green-600/80 to-blue-600/80 rounded-lg text-center">
<span class="text-white font-bold">Impact: First build 23 min → Cached build 3 min (7.6x speedup)</span>
</div>

---

# Continuous Improvement Metrics

<div class="text-xs">

| Metric | Target | Action |
|--------|--------|--------|
| PR check time | &lt; 10 min | Optimize if > 10 min |
| Full pipeline | &lt; 30 min | Optimize if > 30 min |
| Flake rate | &lt; 2% | Quarantine if > 2% |
| Cache hit rate | &gt; 80% | Investigate if < 80% |
| False positive rate | &lt; 5% | Tune rules if > 5% |
| Throughput | 10-15 PRs/day | Scale infrastructure |

</div>

<div class="mt-6 grid grid-cols-2 gap-4">
<div class="p-3 bg-gray-800 rounded-lg">
<div class="text-sm font-bold text-cyan-400">Weekly Reviews</div>
<div class="text-xs text-gray-400 mt-1">Slowest checks, flaky tests, cache efficiency</div>
</div>

<div class="p-3 bg-gray-800 rounded-lg">
<div class="text-sm font-bold text-blue-400">Monthly Reviews</div>
<div class="text-xs text-gray-400 mt-1">Parallelize, fix/delete, tune strategies</div>
</div>
</div>

---

# Trust Manufacturing: Key Takeaways

<div class="grid grid-cols-6 gap-2 text-xs">
<div class="p-2 bg-cyan-900/40 rounded-lg">
<div class="text-xl mb-1">🏭</div>
<div class="font-bold text-cyan-300">CI Factory</div>
<div class="text-gray-400">Manufacturing trust at agent velocity</div>
</div>

<div class="p-2 bg-blue-900/40 rounded-lg">
<div class="text-xl mb-1">⚡</div>
<div class="font-bold text-blue-300">Fast Feedback</div>
<div class="text-gray-400">&lt;10 min PR checks</div>
</div>

<div class="p-2 bg-purple-900/40 rounded-lg">
<div class="text-xl mb-1">🚫</div>
<div class="font-bold text-purple-300">Zero Flakes</div>
<div class="text-gray-400">Quarantine, fix in 2 days</div>
</div>

<div class="p-2 bg-green-900/40 rounded-lg">
<div class="text-xl mb-1">🤖</div>
<div class="font-bold text-green-300">Context-Aware</div>
<div class="text-gray-400">Agents for compliance</div>
</div>

<div class="p-2 bg-orange-900/40 rounded-lg">
<div class="text-xl mb-1">📜</div>
<div class="font-bold text-orange-300">Evidence</div>
<div class="text-gray-400">Attestations for audit</div>
</div>

<div class="p-2 bg-yellow-900/40 rounded-lg">
<div class="text-xl mb-1">📈</div>
<div class="font-bold text-yellow-300">Improve</div>
<div class="text-gray-400">Track, optimize weekly</div>
</div>
</div>

<div class="mt-6 text-center">
<a href="#summary" class="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg text-white font-bold hover:from-blue-500 hover:to-indigo-500 transition-all no-underline">
See Complete System Summary →
</a>
</div>

---
name: summary
---

# The Complete Gen-4 System

<div class="text-center mt-6 mb-6">
<div class="text-xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
Three interconnected transformations
</div>
</div>

<div class="flex flex-col items-center gap-3">
<div class="p-4 bg-cyan-900/40 rounded-lg w-full border-l-4 border-cyan-500">
<div class="font-bold text-cyan-300 text-lg">🏗️ Repository Topology</div>
<div class="text-xs text-gray-300 mt-1">Agent-native monorepo · Enforced boundaries · Hermetic builds · Affected analysis</div>
</div>

<div class="text-2xl text-gray-400">↓ Enables ↓</div>

<div class="p-4 bg-blue-900/40 rounded-lg w-full border-l-4 border-blue-500">
<div class="font-bold text-blue-300 text-lg">📋 PR Workflows</div>
<div class="text-xs text-gray-300 mt-1">Intent-first specs · Evidence bundles · Policy gates · Outcome review</div>
</div>

<div class="text-2xl text-gray-400">↓ Validated by ↓</div>

<div class="p-4 bg-indigo-900/40 rounded-lg w-full border-l-4 border-indigo-500">
<div class="font-bold text-indigo-300 text-lg">🏭 Trust Manufacturing</div>
<div class="text-xs text-gray-300 mt-1">Fast feedback &lt;10 min · Context-aware validation · Evidence attestations · Zero flakes</div>
</div>

<div class="text-2xl text-gray-400">=</div>

<div class="p-4 bg-gradient-to-r from-green-600/80 to-blue-600/80 rounded-lg w-full text-center">
<span class="text-white font-bold text-lg">Sustainable 10-15 features/day with confidence</span>
</div>
</div>

---

# Success Metrics

<div class="grid grid-cols-3 gap-4 text-xs">
<div>
<div class="text-lg font-bold text-cyan-300 mb-3">Engineering Velocity</div>
<div class="space-y-2">
<div class="p-2 bg-gray-800 rounded">
<div class="text-gray-400">Features/week</div>
<div class="text-white font-bold">2-3 → 50-75 (15-20x)</div>
</div>
<div class="p-2 bg-gray-800 rounded">
<div class="text-gray-400">PR-to-merge</div>
<div class="text-white font-bold">4-7 days → 2-4 hours (20-40x)</div>
</div>
<div class="p-2 bg-gray-800 rounded">
<div class="text-gray-400">CI time</div>
<div class="text-white font-bold">80 min → 8 min (10x)</div>
</div>
</div>
</div>

<div>
<div class="text-lg font-bold text-blue-300 mb-3">Trust & Quality</div>
<div class="space-y-2">
<div class="p-2 bg-gray-800 rounded">
<div class="text-gray-400">Manual gates</div>
<div class="text-white font-bold">22 → 4 (80% reduction)</div>
</div>
<div class="p-2 bg-gray-800 rounded">
<div class="text-gray-400">Flaky tests</div>
<div class="text-white font-bold">15% → &lt;2% (7x improvement)</div>
</div>
<div class="p-2 bg-gray-800 rounded">
<div class="text-gray-400">False positives</div>
<div class="text-white font-bold">803 → 2 (400x accuracy)</div>
</div>
</div>
</div>

<div>
<div class="text-lg font-bold text-purple-300 mb-3">Human Experience</div>
<div class="space-y-2">
<div class="p-2 bg-gray-800 rounded">
<div class="text-gray-400">Review focus</div>
<div class="text-white font-bold">Lines → Outcomes</div>
</div>
<div class="p-2 bg-gray-800 rounded">
<div class="text-gray-400">Time/PR</div>
<div class="text-white font-bold">4 hours → 20 min (12x)</div>
</div>
<div class="p-2 bg-gray-800 rounded">
<div class="text-gray-400">Coordination</div>
<div class="text-white font-bold">90% reduction</div>
</div>
</div>
</div>
</div>

---

# Common Pitfalls

<div class="grid grid-cols-2 gap-4 text-xs">
<div class="space-y-2">
<div class="p-3 bg-red-900/30 rounded-lg border-l-4 border-red-500">
<div class="font-bold text-red-300 mb-1">❌ Human-Scale Processes</div>
<div class="text-gray-400">Reviewing 15K lines/day at Gen-3 detail</div>
</div>

<div class="p-3 bg-red-900/30 rounded-lg border-l-4 border-red-500">
<div class="font-bold text-red-300 mb-1">❌ Tolerating Flaky CI</div>
<div class="text-gray-400">"Just rerun it until it passes"</div>
</div>

<div class="p-3 bg-red-900/30 rounded-lg border-l-4 border-red-500">
<div class="font-bold text-red-300 mb-1">❌ Multi-Repo Without Reason</div>
<div class="text-gray-400">"We've always had separate repos"</div>
</div>
</div>

<div class="space-y-2">
<div class="p-3 bg-green-900/30 rounded-lg border-l-4 border-green-500">
<div class="font-bold text-green-300 mb-1">✅ Intent & Outcome Validation</div>
<div class="text-gray-400">Move up-stack, review outcomes not lines</div>
</div>

<div class="p-3 bg-green-900/30 rounded-lg border-l-4 border-green-500">
<div class="font-bold text-green-300 mb-1">✅ Quarantine & Fix Fast</div>
<div class="text-gray-400">Quarantine on first flake, fix within 2 days</div>
</div>

<div class="p-3 bg-green-900/30 rounded-lg border-l-4 border-green-500">
<div class="font-bold text-green-300 mb-1">✅ Monorepo for Agent Velocity</div>
<div class="text-gray-400">If agents touch >1 repo >30% → consolidate</div>
</div>
</div>
</div>

---

# The Strategic Imperative

<div class="text-center mt-8 mb-8">
<div class="text-2xl font-bold text-red-400 mb-4">
⚠️ The window is narrowing
</div>
<div class="text-lg text-gray-300">
Organizations using Gen-4 practices are shipping 10-15x faster
</div>
</div>

<div class="grid grid-cols-2 gap-6">
<div class="p-6 bg-red-900/30 rounded-lg border-2 border-red-500">
<div class="text-lg font-bold text-red-300 mb-3">Gen-3 Velocity</div>
<div class="text-3xl font-bold text-white mb-2">150</div>
<div class="text-sm text-gray-400">features/year/team</div>
<div class="text-xs text-gray-500 mt-3">(2-3 features/week)</div>
</div>

<div class="p-6 bg-green-900/30 rounded-lg border-2 border-green-500">
<div class="text-lg font-bold text-green-300 mb-3">Gen-4 Velocity</div>
<div class="text-3xl font-bold text-white mb-2">3,600</div>
<div class="text-sm text-gray-400">features/year/team</div>
<div class="text-xs text-gray-500 mt-3">(10-15 features/day)</div>
</div>
</div>

<div class="mt-6 p-4 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-lg text-center">
<span class="text-white font-bold text-xl">100x annual output difference</span>
</div>

---

# What Success Looks Like

<div class="flex flex-col gap-4">
<div class="p-4 bg-cyan-900/40 rounded-lg border-l-4 border-cyan-500">
<div class="font-bold text-cyan-300 text-lg mb-2">In 6 Months</div>
<div class="text-sm text-gray-300 space-y-1">
<div>• Shipping 10-15 features/day with confidence</div>
<div>• Human reviewers focused on strategic decisions</div>
<div>• CI manufacturing trust at agent velocity</div>
<div>• Compliance and security automated</div>
</div>
</div>

<div class="p-4 bg-blue-900/40 rounded-lg border-l-4 border-blue-500">
<div class="font-bold text-blue-300 text-lg mb-2">In 12 Months</div>
<div class="text-sm text-gray-300 space-y-1">
<div>• Gen-4 SDLC is muscle memory</div>
<div>• Agents handle 90% of feature implementation</div>
<div>• Humans govern outcomes and set direction</div>
<div>• Organization achieves sustainable AI velocity</div>
</div>
</div>
</div>

---
layout: end
---

# Building infrastructure for sustainable AI velocity

<div class="mt-12 p-6 bg-gradient-to-r from-cyan-900/30 to-blue-900/30 rounded-lg">
<div class="text-center text-xl text-gray-300 mb-4">
Three transformations working together
</div>
<div class="grid grid-cols-3 gap-4 text-sm">
<div class="text-center">
<div class="text-3xl mb-2">🏗️</div>
<div class="font-bold text-cyan-400">Repository Topology</div>
</div>
<div class="text-center">
<div class="text-3xl mb-2">📋</div>
<div class="font-bold text-blue-400">PR Workflows</div>
</div>
<div class="text-center">
<div class="text-3xl mb-2">🏭</div>
<div class="font-bold text-indigo-400">Trust Manufacturing</div>
</div>
</div>
</div>

<div class="mt-8 text-center text-sm text-gray-400">
Barton Mathis · CopilotTraining Tech Talk
</div>
