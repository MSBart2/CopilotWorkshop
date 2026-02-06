---
theme: default
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Agentic Delivery Repo Topology
  How to rewire repositories for AI-as-labor delivery agents (Gen-4 SDLC)
drawings:
  persist: false
transition: slide-left
title: Agentic Delivery Repo Topology
module: tech-talks/agentic-repos
mdc: true
---

<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
  <!-- Gradient background -->
  <div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-indigo-900/20"></div>

  <!-- Glowing orb -->
  <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-indigo-500/20 rounded-full blur-3xl"></div>

  <!-- Logo with glow -->
  <div class="relative z-10">
    <div class="absolute inset-0 blur-2xl opacity-50">
      <img src="./sdp-logo.png" class="w-64" alt="" />
    </div>
    <img src="./sdp-logo.png" class="w-64 relative" alt="SDP Logo" />
  </div>

  <!-- Gradient text title -->
  <h1 class="!text-5xl !font-bold !mt-8 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent relative z-10">
    Agentic Delivery Repo Topology
  </h1>

  <!-- Pill subtitle -->
  <div class="mt-4 relative z-10">
    <span class="px-6 py-2 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-lg font-medium shadow-lg shadow-cyan-500/25">
      Rewiring Repositories for AI-as-Labor Agents
    </span>
  </div>

  <!-- Decorative line -->
  <div class="mt-8 w-32 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full relative z-10"></div>
</div>

<div class="abs-br m-6 flex gap-2">
  <span class="text-sm opacity-50">Gen-4 SDLC • February 2026</span>
</div>

---
layout: center
class: text-center
---

# The Problem

<div class="flex flex-col gap-6 items-center max-w-4xl mx-auto">

<div class="text-2xl font-light">
  Our repo structure was designed for humans<br/>collaborating on <span class="text-blue-400 font-semibold">quarterly releases</span>.
</div>

<div class="text-3xl text-yellow-400 font-bold py-4">
  ⬇️
</div>

<div class="text-2xl font-light">
  Now we're running agents that ship features <span class="text-green-400 font-semibold">daily</span>.
</div>

<div class="mt-8 p-6 bg-gradient-to-r from-red-900/40 to-gray-800 rounded-xl text-center">
  <div class="text-3xl font-bold text-white">
    This is like running a Formula 1 car<br/>on roads designed for horses
  </div>
</div>

<div class="mt-4 text-gray-400 italic text-lg">
  The car is fast. The road wasn't built for that speed. Something breaks.
</div>

</div>

---
layout: center
---

# The Solution (TL;DR)

<div class="grid grid-cols-2 gap-6 max-w-5xl mx-auto text-sm mt-8">

<div class="p-4 bg-blue-900/60 rounded-lg border-l-4 border-blue-400">
  <div class="flex items-center gap-3 mb-2">
    <span class="text-3xl">📦</span>
    <div class="font-bold text-blue-300 text-base">Default: Agent-Native Monorepo</div>
  </div>
  <div class="text-gray-300">Enforced module boundaries (not suggestions)</div>
</div>

<div class="p-4 bg-green-900/60 rounded-lg border-l-4 border-green-400">
  <div class="flex items-center gap-3 mb-2">
    <span class="text-3xl">🏭</span>
    <div class="font-bold text-green-300 text-base">Pair: Control-Plane Repo</div>
  </div>
  <div class="text-gray-300">Policies, golden workflows, scaffolding</div>
</div>

<div class="p-4 bg-purple-900/60 rounded-lg border-l-4 border-purple-400">
  <div class="flex items-center gap-3 mb-2">
    <span class="text-3xl">⚡</span>
    <div class="font-bold text-purple-300 text-base">Optimize: Deterministic Signal</div>
  </div>
  <div class="text-gray-300">Hermetic builds, "affected" CI, caching</div>
</div>

<div class="p-4 bg-orange-900/60 rounded-lg border-l-4 border-orange-400">
  <div class="flex items-center gap-3 mb-2">
    <span class="text-3xl">📋</span>
    <div class="font-bold text-orange-300 text-base">Treat PRs as Evidence Bundles</div>
  </div>
  <div class="text-gray-300">Intent → diff → checks → attestations</div>
</div>

</div>

<div class="mt-8 text-center text-6xl">
  🎯
</div>

---
layout: default
---

# Gen-3 vs Gen-4: How We Work (Part 1)

<div class="grid grid-cols-2 gap-6">

<div>
  <h2 class="text-2xl mb-4">Gen-3 (Traditional)</h2>

  <div class="flex flex-col gap-3 text-xs">

  <div class="p-2 bg-gray-800 rounded-lg flex items-start gap-2">
    <span class="text-xl">👤</span>
    <div>
      <div class="text-white font-bold">Humans Produce Code</div>
      <div class="text-gray-400">10-50 lines/hour, context-switching every 23 minutes</div>
    </div>
  </div>

  <div class="p-2 bg-gray-800 rounded-lg flex items-start gap-2">
    <span class="text-xl">💬</span>
    <div>
      <div class="text-white font-bold">PRs Are Collaboration Forums</div>
      <div class="text-gray-400">"Can you explain this?" "Why did you...?" "LGTM 🚀"</div>
    </div>
  </div>

  <div class="p-2 bg-gray-800 rounded-lg flex items-start gap-2">
    <span class="text-xl">👥</span>
    <div>
      <div class="text-white font-bold">Repo Structure for Teams</div>
      <div class="text-gray-400">"Frontend in one repo, backend in another"</div>
    </div>
  </div>

  <div class="p-2 bg-gray-800 rounded-lg flex items-start gap-2">
    <span class="text-xl">🔧</span>
    <div>
      <div class="text-white font-bold">CI Is Supporting Infrastructure</div>
      <div class="text-gray-400">"The build is red again, someone look at it"</div>
    </div>
  </div>

  </div>
</div>

<div class="flex items-center justify-center">
  <div class="text-6xl">⬇️</div>
</div>

</div>

---
layout: default
---

# Gen-3 vs Gen-4: How We Work (Part 2)

<div class="grid grid-cols-2 gap-4">

<div class="flex items-center justify-center">
  <div class="text-6xl">⬇️</div>
</div>

<div>
  <h2 class="text-2xl mb-3">Gen-4 (Agentic)</h2>

  <div class="flex flex-col gap-1.5 text-xs">

  <div class="p-2 bg-green-900/60 rounded-lg flex items-start gap-2 border-2 border-green-400">
    <span class="text-xl">🤖</span>
    <div>
      <div class="text-green-300 font-bold">Agents Produce Feature-Scale Payloads</div>
      <div class="text-gray-300">500-2000 lines in 15 minutes, zero context switching</div>
    </div>
  </div>

  <div class="p-2 bg-blue-900/60 rounded-lg flex items-start gap-2 border-2 border-blue-400">
    <span class="text-xl">⚖️</span>
    <div>
      <div class="text-blue-300 font-bold">Humans Govern Safety & Outcomes</div>
      <div class="text-gray-300">"Ship it" or "Roll it back" (not "move this to line 47")</div>
    </div>
  </div>

  <div class="p-2 bg-purple-900/60 rounded-lg flex items-start gap-2 border-2 border-purple-400">
    <span class="text-xl">🎯</span>
    <div>
      <div class="text-purple-300 font-bold">Repo Structure for Agents</div>
      <div class="text-gray-300">"Everything this agent needs is in one atomic boundary"</div>
    </div>
  </div>

  <div class="p-2 bg-orange-900/60 rounded-lg flex items-start gap-2 border-2 border-orange-400">
    <span class="text-xl">🏭</span>
    <div>
      <div class="text-orange-300 font-bold">CI Becomes the Trust Factory</div>
      <div class="text-gray-300">"If CI is green, we ship. If CI is red, nobody moves."</div>
    </div>
  </div>

  </div>
</div>

</div>

<div class="mt-3 p-2 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl text-center">
  <div class="text-sm font-bold text-white">💡 The Shift: Humans used to write code and delegate review.<br/>Now humans delegate coding and review outcomes.</div>
</div>

---

# Max Throughput Without Losing Trust

<div class="p-4 bg-gradient-to-r from-green-600 to-green-800 rounded-xl text-center my-8">
  <div class="text-2xl font-bold text-white">Agent velocity × Human confidence = Sustainable delivery at scale</div>
</div>

<div class="grid grid-cols-2 gap-4 text-xs">

<div class="p-3 bg-blue-900/60 rounded-lg border-l-4 border-blue-400">
  <div class="font-bold text-blue-300 mb-2">Minimize Coordination Overhead</div>
  <div class="text-gray-300">6 repos × 3 teams = 18 handoffs</div>
  <div class="text-2xl my-2">↓</div>
  <div class="text-green-300 font-bold">1 repo × atomic merge = 0 handoffs</div>
</div>

<div class="p-3 bg-green-900/60 rounded-lg border-l-4 border-green-400">
  <div class="font-bold text-green-300 mb-2">Maximize Agent Awareness</div>
  <div class="text-gray-300">"Where's the auth code?"</div>
  <div class="text-2xl my-2">↓</div>
  <div class="text-green-300 font-bold">3 grep results, not 3 repo searches</div>
</div>

<div class="p-3 bg-purple-900/60 rounded-lg border-l-4 border-purple-400">
  <div class="font-bold text-purple-300 mb-2">Make Verification Fast</div>
  <div class="text-gray-300">4-hour CI runs</div>
  <div class="text-2xl my-2">↓</div>
  <div class="text-green-300 font-bold">8-minute affected tests with caching</div>
</div>

<div class="p-3 bg-orange-900/60 rounded-lg border-l-4 border-orange-400">
  <div class="font-bold text-orange-300 mb-2">Scale Governance</div>
  <div class="text-gray-300">22 manual approval gates</div>
  <div class="text-2xl my-2">↓</div>
  <div class="text-green-300 font-bold">4 human checkpoints + automation</div>
</div>

</div>

---
layout: center
---

# ⚠️ War Story: The 6-Hour Feature

<div class="flex flex-col gap-3 max-w-3xl mx-auto text-sm">

<div class="p-4 bg-red-900/40 rounded-lg border-2 border-red-500">
  <div class="font-bold text-red-300 mb-2">The Problem: 18 Microservice Repos</div>
  <div class="text-gray-300">SaaS company, feature touching 3 services...</div>
</div>

<div class="grid grid-cols-3 gap-2">

<div class="p-3 bg-gray-800 rounded-lg">
  <div class="font-bold text-yellow-400">Day 1</div>
  <div class="text-xs text-gray-300 mt-2">Open PR in repo A<br/>Wait for CI: 45 min<br/>Wait for review: 4 hours</div>
</div>

<div class="p-3 bg-gray-800 rounded-lg">
  <div class="font-bold text-yellow-400">Day 2</div>
  <div class="text-xs text-gray-300 mt-2">Open PR in repo B<br/>Contract mismatch!<br/>Go back to repo A</div>
</div>

<div class="p-3 bg-gray-800 rounded-lg">
  <div class="font-bold text-yellow-400">Day 3</div>
  <div class="text-xs text-gray-300 mt-2">Coordinate deploy order<br/>Staging fails<br/>Debug across repos</div>
</div>

</div>

<div class="p-4 bg-red-900/60 rounded-lg text-center">
  <div class="font-bold text-red-300 text-lg">Result: 6 hours agent work + 3 days human coordination + 2 rollbacks</div>
</div>

<div class="text-2xl text-center">⬇️</div>

<div class="p-4 bg-green-900/60 rounded-lg text-center border-2 border-green-400">
  <div class="font-bold text-green-300 text-lg">After Monorepo: 45 minutes + 1 atomic PR + 0 coordination</div>
</div>

</div>

---

# Monorepo vs Multi-Repo Decision

<div class="grid grid-cols-2 gap-4 mt-6">

<div>
  <div class="text-xl font-bold text-green-400 mb-4">✅ Monorepo (Default for 80%)</div>

  <div class="flex flex-col gap-2 text-xs">
    <div class="p-2 bg-green-900/60 rounded-lg">
      <div class="font-bold text-green-300">Atomic Cross-Module Changes</div>
      <div class="text-gray-300">Change API + 7 call sites in 1 PR, not 8 PRs</div>
    </div>
    <div class="p-2 bg-green-900/60 rounded-lg">
      <div class="font-bold text-green-300">Shared Patterns Are Local</div>
      <div class="text-gray-300">import from '@libs/validation', not "which version?"</div>
    </div>
    <div class="p-2 bg-green-900/60 rounded-lg">
      <div class="font-bold text-green-300">Agent Navigation = grep</div>
      <div class="text-gray-300">"Where's auth?" → One rg command</div>
    </div>
    <div class="p-2 bg-green-900/60 rounded-lg">
      <div class="font-bold text-green-300">One CI Pipeline</div>
      <div class="text-gray-300">Unified standards, shared cache</div>
    </div>
  </div>
</div>

<div>
  <div class="text-xl font-bold text-yellow-400 mb-4">⚠️ Multi-Repo (When Justified)</div>

  <div class="flex flex-col gap-2 text-xs">
    <div class="p-2 bg-yellow-900/40 rounded-lg">
      <div class="font-bold text-yellow-300">Hard Access Boundaries</div>
      <div class="text-gray-300">PCI payment processing ≠ marketing site</div>
    </div>
    <div class="p-2 bg-yellow-900/40 rounded-lg">
      <div class="font-bold text-yellow-300">Truly Independent Products</div>
      <div class="text-gray-300">Mobile (6-month cycles) + web (daily deploys)</div>
    </div>
    <div class="p-2 bg-yellow-900/40 rounded-lg">
      <div class="font-bold text-yellow-300">Regulatory Mandates</div>
      <div class="text-gray-300">"The auditor said these must be separate"</div>
    </div>
    <div class="p-2 bg-yellow-900/40 rounded-lg">
      <div class="font-bold text-yellow-300">Organizational Constraints</div>
      <div class="text-gray-300">Acquired company not ready to merge (yet)</div>
    </div>
  </div>
</div>

</div>

<div class="mt-4 p-4 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl text-center">
  <div class="text-lg font-bold text-white">🎯 Decision Rule: If agents touch >1 repo for >30% of features → monorepo</div>
</div>

---

# Agent-Native Monorepo Structure

<div class="grid grid-cols-2 gap-8 mt-6">

<div>

```plaintext
/apps
  ├── deployables
  ├── service boundaries
  └── release units

/libs
  ├── shared modules
  ├── public APIs
  └── version-less internal deps

/platform
  ├── standards
  ├── SDKs
  └── runtime contracts

/infra
  ├── pipelines
  ├── environment templates
  └── infrastructure-as-code

/docs
  ├── ADRs
  ├── intent specs
  └── agent context
```

</div>

<div class="flex flex-col gap-3 text-xs">

<div class="p-3 bg-blue-900/60 rounded-lg border-l-4 border-blue-400">
  <div class="font-bold text-blue-300">/apps</div>
  <div class="text-gray-300">Deployable services, clear boundaries, independent release</div>
</div>

<div class="p-3 bg-green-900/60 rounded-lg border-l-4 border-green-400">
  <div class="font-bold text-green-300">/libs</div>
  <div class="text-gray-300">Shared code, public APIs, no versioning needed</div>
</div>

<div class="p-3 bg-purple-900/60 rounded-lg border-l-4 border-purple-400">
  <div class="font-bold text-purple-300">/platform</div>
  <div class="text-gray-300">Standards, SDKs, contracts all services follow</div>
</div>

<div class="p-3 bg-orange-900/60 rounded-lg border-l-4 border-orange-400">
  <div class="font-bold text-orange-300">/infra</div>
  <div class="text-gray-300">CI/CD, environment configs, IaC templates</div>
</div>

<div class="p-3 bg-gray-800 rounded-lg border-l-4 border-gray-400">
  <div class="font-bold text-gray-300">/docs</div>
  <div class="text-gray-300">Architecture decisions, agent context, specifications</div>
</div>

<div class="mt-2 p-3 bg-gradient-to-r from-yellow-900/40 to-gray-800 rounded-lg">
  <div class="font-bold text-yellow-400">+ Separate Control-Plane Repo</div>
  <div class="text-gray-300">Policies, golden workflows, scaffolding templates</div>
</div>

</div>

</div>

---

# Non-Negotiables for Agent-Native Repos (Part 1)

<div class="text-center text-red-400 font-bold mb-4 text-sm">
  ⚠️ If you skip these, agents will wreck your codebase
</div>

<div class="grid grid-cols-2 gap-3 text-xs">

<div class="p-3 bg-gray-800 rounded-lg">
  <div class="flex items-center gap-2 mb-2">
    <span class="text-2xl">🚧</span>
    <div class="font-bold text-blue-300">1. Enforced Boundaries</div>
  </div>
  <div class="text-red-400">❌ "Please don't import from /internal"</div>
  <div class="text-green-400">✅ ESLint rules that fail CI</div>
  <div class="text-gray-400 mt-1">Agents don't read comments. They follow signals.</div>
</div>

<div class="p-3 bg-gray-800 rounded-lg">
  <div class="flex items-center gap-2 mb-2">
    <span class="text-2xl">👥</span>
    <div class="font-bold text-green-300">2. Codified Ownership</div>
  </div>
  <div class="text-red-400">❌ "Sarah reviews backend stuff"</div>
  <div class="text-green-400">✅ CODEOWNERS + branch protection</div>
  <div class="text-gray-400 mt-1">Agents ship at 3 AM. Auto-route reviews.</div>
</div>

<div class="p-3 bg-gray-800 rounded-lg">
  <div class="flex items-center gap-2 mb-2">
    <span class="text-2xl">🔒</span>
    <div class="font-bold text-purple-300">3. Deterministic Builds</div>
  </div>
  <div class="text-red-400">❌ "Works on my machine"</div>
  <div class="text-green-400">✅ Hermetic builds, pinned deps</div>
  <div class="text-gray-400 mt-1">Flaky tests = infinite agent loops.</div>
</div>

</div>

---

# Non-Negotiables for Agent-Native Repos (Part 2)

<div class="text-center text-red-400 font-bold mb-4 text-sm">
  ⚠️ If you skip these, agents will wreck your codebase
</div>

<div class="grid grid-cols-2 gap-3 text-xs">

<div class="p-3 bg-gray-800 rounded-lg">
  <div class="flex items-center gap-2 mb-2">
    <span class="text-2xl">⚡</span>
    <div class="font-bold text-orange-300">4. Affected CI Only</div>
  </div>
  <div class="text-red-400">❌ Change 1 file → 4-hour rebuild</div>
  <div class="text-green-400">✅ Test only impacted → 8 minutes</div>
  <div class="text-gray-400 mt-1">Slow CI = blocked agents = blocked humans.</div>
</div>

<div class="p-3 bg-gray-800 rounded-lg">
  <div class="flex items-center gap-2 mb-2">
    <span class="text-2xl">📐</span>
    <div class="font-bold text-yellow-300">5. Consistent Repository Shape</div>
  </div>
  <div class="text-red-400">❌ Each team invents structure (17 patterns)</div>
  <div class="text-green-400">✅ Standard /apps, /libs, /platform everywhere</div>
  <div class="text-gray-400 mt-1">Agents navigate by pattern. Inconsistency = hallucinations.</div>
</div>

</div>

<div class="mt-4 p-3 bg-gradient-to-r from-red-900/40 to-gray-800 rounded-lg text-center">
  <span class="text-white font-bold">🚨 Red Flag: CI longer than retrospectives = agents can't help</span>
</div>

---

# Governance Guardrails

<div class="text-center text-sm text-gray-400 mb-3">
  Scale review without humans everywhere
</div>

<div class="grid grid-cols-2 gap-3 text-xs">

<div class="p-3 bg-blue-900/60 rounded-lg border-2 border-blue-400">
  <div class="font-bold text-blue-300 mb-2 flex items-center gap-2">
    <span class="text-xl">🎯</span>
    Auto-Routing with CODEOWNERS
  </div>
  <div class="bg-gray-900 p-2 rounded font-mono text-xs mb-2">
    /apps/payment/**  @payments<br/>
    /libs/auth/**     @security
  </div>
  <div class="text-green-300">Agent opens PR → Auto-assign → No Slack "who reviews?"</div>
</div>

<div class="p-3 bg-green-900/60 rounded-lg border-2 border-green-400">
  <div class="font-bold text-green-300 mb-2 flex items-center gap-2">
    <span class="text-xl">🛡️</span>
    Branch Protection
  </div>
  <div class="text-gray-300">
    ✅ 1 approval from CODEOWNERS<br/>
    ✅ All CI checks green<br/>
    ✅ Up-to-date branch<br/>
    ❌ NOT 3 approvals (velocity poison)
  </div>
</div>

<div class="p-3 bg-purple-900/60 rounded-lg border-2 border-purple-400">
  <div class="font-bold text-purple-300 mb-2 flex items-center gap-2">
    <span class="text-xl">📜</span>
    Policy-as-Code
  </div>
  <div class="text-gray-300">
    🔒 Security: No secrets, no SQL injection<br/>
    📜 Compliance: PII handling, audit trails<br/>
    ⚖️ Licensing: No GPL in proprietary<br/>
    🎯 Quality: 80% coverage, complexity < 15
  </div>
</div>

<div class="p-3 bg-orange-900/60 rounded-lg border-2 border-orange-400">
  <div class="font-bold text-orange-300 mb-2 flex items-center gap-2">
    <span class="text-xl">📊</span>
    Evidence, Not Line Review
  </div>
  <div class="text-gray-300">
    Agent generates:<br/>
    • 327 tests, 89% coverage<br/>
    • 12 API contracts validated<br/>
    • 0 critical security issues<br/>
    • Rollback plan documented
  </div>
</div>

</div>

<div class="mt-4 p-3 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl text-center">
  <div class="text-base font-bold text-white">💡 Agents prove it's safe. Humans decide if it's right.</div>
</div>

---

# CI as Our Assembly Line

<div class="text-center text-red-400 font-bold mb-4">
  ⚠️ No Flaky Bolts Allowed
</div>

<div class="grid grid-cols-2 gap-4 text-xs">

<div class="p-3 bg-blue-900/60 rounded-lg border-l-4 border-blue-400">
  <div class="font-bold text-blue-300 mb-2">Affected Execution Only</div>
  <div class="bg-gray-900 p-2 rounded font-mono mb-2">
    <span class="text-red-400"># Wrong</span><br/>
    $ npm run build  # 4 hours 🐌<br/><br/>
    <span class="text-green-400"># Right</span><br/>
    $ nx affected:build  # 8 min ⚡
  </div>
  <div class="text-gray-300">Build only what changed</div>
</div>

<div class="p-3 bg-green-900/60 rounded-lg border-l-4 border-green-400">
  <div class="font-bold text-green-300 mb-2">Remote Caching</div>
  <div class="text-gray-300">
    Agent A builds @libs/auth → uploads<br/>
    Agent B needs @libs/auth → downloads (3s vs 4min)<br/>
    Our laptops → same cache (thanks 🙏)
  </div>
  <div class="text-green-400 mt-2">Never rebuild the same thing twice</div>
</div>

<div class="p-3 bg-purple-900/60 rounded-lg border-l-4 border-purple-400">
  <div class="font-bold text-purple-300 mb-2">Dependency Graph Aware</div>
  <div class="text-gray-300 font-mono text-[10px]">
    @libs/validation changed<br/>
    &nbsp;&nbsp;↓ affects<br/>
    @libs/api-client (rebuild)<br/>
    &nbsp;&nbsp;↓ affects<br/>
    @apps/web (test)<br/>
    &nbsp;&nbsp;↓ skips<br/>
    @apps/mobile (unaffected)
  </div>
</div>

<div class="p-3 bg-red-900/60 rounded-lg border-l-4 border-red-500">
  <div class="font-bold text-red-300 mb-2">Flaky Tests = Production Incidents</div>
  <div class="text-gray-300">
    🚨 Page the owning team<br/>
    🔥 Fix within 24h or disable<br/>
    📊 Track flake rate as KPI
  </div>
  <div class="text-red-400 mt-2">1 flaky test = 12 blocked agents = $3k/day wasted</div>
</div>

</div>

<div class="mt-4 p-3 bg-gradient-to-r from-red-900/40 to-gray-800 rounded-lg text-center">
  <span class="text-white font-bold">⚡ If CI fails 1 in 10 times for no reason, you don't have CI—you have a coin flip</span>
</div>

---

# What a Good PR Looks Like

<div class="grid grid-cols-2 gap-4">

<div class="text-xs">

```markdown
## Intent
Add character bio expansion on hover (FAN-472)

## Changes
- New CharacterBioPopover component (127 lines)
- Hook into CharacterCard click handler
- 15 unit tests, 3 integration tests

## Evidence
✅ All tests pass (332/332)
✅ Coverage: 91% (+3%)
✅ Security scan: 0 issues
✅ Bundle size: +2.3kb (within budget)
✅ Lighthouse: 94 perf (no regression)

## Risk: Low
- No schema changes
- No auth modifications
- Feature flag: character-bio-hover (off)

## Rollback
Revert commit f3a90bc, toggle flag off
```

</div>

<div class="flex flex-col gap-3 text-xs">

<div class="p-3 bg-blue-900/60 rounded-lg">
  <div class="font-bold text-blue-300 mb-1">What Humans Review:</div>
  <div class="text-gray-300">
    1. Does implementation match intent? ✅<br/>
    2. Are automated checks sufficient? ✅<br/>
    3. What's the blast radius? 5K users<br/>
    4. Increase agent autonomy? Yes
  </div>
</div>

<div class="p-3 bg-red-900/40 rounded-lg">
  <div class="font-bold text-red-300 mb-1">What Humans DON'T Review:</div>
  <div class="text-gray-400">
    ❌ "Why useState vs useReducer?"<br/>
    <span class="text-xs">(That's what automation enforces)</span>
  </div>
</div>

<div class="p-4 bg-gradient-to-r from-green-600 to-green-800 rounded-xl text-center">
  <div class="font-bold text-white">📦 PRs are evidence bundles,<br/>not collaboration forums</div>
</div>

</div>

</div>

---

# Control-Plane Repo Structure

<div class="text-center text-sm text-gray-400 mb-4">
  The Factory That Builds Factories
</div>

<div class="grid grid-cols-2 gap-4">

<div class="text-xs">

```plaintext
platform-standards/
├── golden-workflows/
│   ├── ci-pipeline.yml
│   ├── security-scan.yml
│   └── deploy-production.yml
├── scaffolding/
│   ├── new-service-template/
│   ├── new-app-template/
│   └── new-library-template/
├── policies/
│   ├── security-baseline.yml
│   ├── licensing-rules.yml
│   └── quality-gates.yml
└── platform-contracts/
    ├── auth-service.proto
    ├── logging-sdk/
    └── error-handling/
```

</div>

<div class="flex flex-col gap-3 text-xs">

<div class="p-3 bg-green-900/60 rounded-lg border-l-4 border-green-400">
  <div class="font-bold text-green-300">Golden Workflows</div>
  <div class="text-gray-300">Reusable CI templates, consistent across all repos</div>
</div>

<div class="p-3 bg-blue-900/60 rounded-lg border-l-4 border-blue-400">
  <div class="font-bold text-blue-300">Scaffolding</div>
  <div class="text-gray-300">nx generate @company/service → Full repo in 10 min</div>
</div>

<div class="p-3 bg-purple-900/60 rounded-lg border-l-4 border-purple-400">
  <div class="font-bold text-purple-300">Policies</div>
  <div class="text-gray-300">Security baselines, quality gates, licensing rules</div>
</div>

<div class="p-3 bg-orange-900/60 rounded-lg border-l-4 border-orange-400">
  <div class="font-bold text-orange-300">Platform Contracts</div>
  <div class="text-gray-300">Shared SDKs, gRPC contracts, standard patterns</div>
</div>

<div class="mt-2 p-3 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl text-center">
  <div class="font-bold text-white">🏭 Change once → all repos inherit</div>
</div>

</div>

</div>

---

# Migration: Minimal Drama

<div class="grid grid-cols-3 gap-3 text-xs mt-4">

<div class="p-3 bg-gray-800 rounded-lg">
  <div class="font-bold text-blue-300 mb-2">Phase 1: Standardize (Weeks 1-2)</div>
  <div class="text-gray-300">
    • Pick reference repo<br/>
    • Establish /apps, /libs structure<br/>
    • Document patterns<br/>
    • Create templates
  </div>
</div>

<div class="p-3 bg-gray-800 rounded-lg">
  <div class="font-bold text-green-300 mb-2">Phase 2: Extract Control (Weeks 3-4)</div>
  <div class="text-gray-300">
    • Create platform-standards repo<br/>
    • Move CI templates<br/>
    • Extract policies<br/>
    • Repos consume templates
  </div>
</div>

<div class="p-3 bg-gray-800 rounded-lg">
  <div class="font-bold text-purple-300 mb-2">Phase 3: Merge Coupled (Weeks 5-8)</div>
  <div class="text-gray-300">
    • Start with 2-3 tight repos<br/>
    • Use monorepo migration tools<br/>
    • Keep git history<br/>
    • Test incrementally
  </div>
</div>

</div>

<div class="grid grid-cols-2 gap-3 text-xs mt-3">

<div class="p-3 bg-gray-800 rounded-lg">
  <div class="font-bold text-orange-300 mb-2">Phase 4: Enforce (Weeks 9-12)</div>
  <div class="text-gray-300">
    • Add ESLint boundary rules<br/>
    • Implement CODEOWNERS<br/>
    • Enable branch protection<br/>
    • Monitor compliance
  </div>
</div>

<div class="p-3 bg-gray-800 rounded-lg">
  <div class="font-bold text-yellow-300 mb-2">Phase 5: Optimize (Ongoing)</div>
  <div class="text-gray-300">
    • Add affected detection<br/>
    • Set up remote caching<br/>
    • Fix flaky tests<br/>
    • Tune performance
  </div>
</div>

</div>

<div class="mt-4 p-4 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl">
  <div class="font-bold text-white mb-2">📊 Measure Success:</div>
  <div class="grid grid-cols-4 gap-2 text-xs text-white">
    <div>Cycle time: Feature → prod</div>
    <div>CI efficiency: Useful/total</div>
    <div>Failure rate: Aim < 2%</div>
    <div>Rollback rate: Aim < 1%</div>
  </div>
</div>

---

# 🚩 Red Flags Our Repo Isn't Ready (Part 1)

<div class="grid grid-cols-2 gap-2 text-xs">

<div class="p-2 bg-red-900/40 rounded-lg flex items-start gap-2">
  <span class="text-xl">❌</span>
  <div>
    <div class="text-red-300 font-bold">CI > Retrospectives</div>
    <div class="text-gray-400">Our CI takes longer than sprint retros</div>
  </div>
</div>

<div class="p-2 bg-red-900/40 rounded-lg flex items-start gap-2">
  <span class="text-xl">❌</span>
  <div>
    <div class="text-red-300 font-bold">"Works on My Machine"</div>
    <div class="text-gray-400">Said more than twice a week</div>
  </div>
</div>

<div class="p-2 bg-red-900/40 rounded-lg flex items-start gap-2">
  <span class="text-xl">❌</span>
  <div>
    <div class="text-red-300 font-bold">#build-is-broken</div>
    <div class="text-gray-400">We have a Slack channel for this</div>
  </div>
</div>

<div class="p-2 bg-red-900/40 rounded-lg flex items-start gap-2">
  <span class="text-xl">❌</span>
  <div>
    <div class="text-red-300 font-bold">CODEOWNERS from 2022</div>
    <div class="text-gray-400">Last updated before agents existed</div>
  </div>
</div>

<div class="p-2 bg-red-900/40 rounded-lg flex items-start gap-2">
  <span class="text-xl">❌</span>
  <div>
    <div class="text-red-300 font-bold">Direct main Commits</div>
    <div class="text-gray-400">To "save time" (spoiler: doesn't)</div>
  </div>
</div>

<div class="p-2 bg-red-900/40 rounded-lg flex items-start gap-2">
  <span class="text-xl">❌</span>
  <div>
    <div class="text-red-300 font-bold">>5 Repos, <5 People</div>
    <div class="text-gray-400">Coordination > team size</div>
  </div>
</div>

</div>

---

# 🚩 Red Flags Our Repo Isn't Ready (Part 2)

<div class="grid grid-cols-2 gap-2 text-xs">

<div class="p-2 bg-red-900/40 rounded-lg flex items-start gap-2">
  <span class="text-xl">❌</span>
  <div>
    <div class="text-red-300 font-bold">"Which Library Version?"</div>
    <div class="text-gray-400">Asked daily in Slack</div>
  </div>
</div>

<div class="p-2 bg-red-900/40 rounded-lg flex items-start gap-2">
  <span class="text-xl">❌</span>
  <div>
    <div class="text-red-300 font-bold">>10% Flaky Tests</div>
    <div class="text-gray-400">And we're not fixing them</div>
  </div>
</div>

<div class="p-2 bg-red-900/40 rounded-lg flex items-start gap-2">
  <span class="text-xl">❌</span>
  <div>
    <div class="text-red-300 font-bold">Ping 4 People for Merge</div>
    <div class="text-gray-400">Slack archaeological dig required</div>
  </div>
</div>

<div class="p-2 bg-red-900/40 rounded-lg flex items-start gap-2">
  <span class="text-xl">❌</span>
  <div>
    <div class="text-red-300 font-bold">Build Everything Every Time</div>
    <div class="text-gray-400">Change 1 file → 3 hour build</div>
  </div>
</div>

</div>

---

# Common Failure Modes

<div class="grid grid-cols-2 gap-4 text-xs">

<div class="p-3 bg-red-900/40 rounded-lg border-2 border-red-500">
  <div class="font-bold text-red-300 mb-2">🌊 The Monorepo Swamp</div>
  <div class="text-gray-300 mb-2">
    <strong>Symptom:</strong> Everything depends on everything, 4hr builds
  </div>
  <div class="text-yellow-400 mb-2">
    <strong>Root Cause:</strong> No enforced boundaries
  </div>
  <div class="text-green-300">
    <strong>Fix:</strong> ESLint enforce-module-boundaries rules
  </div>
</div>

<div class="p-3 bg-red-900/40 rounded-lg border-2 border-red-500">
  <div class="font-bold text-red-300 mb-2">🚧 The Review Bottleneck</div>
  <div class="text-gray-300 mb-2">
    <strong>Symptom:</strong> PRs sit for days, "waiting for review" tops blockers
  </div>
  <div class="text-yellow-400 mb-2">
    <strong>Root Cause:</strong> Unclear ownership, too many approvals
  </div>
  <div class="text-green-300">
    <strong>Fix:</strong> CODEOWNERS + 1 required approval (not 3)
  </div>
</div>

<div class="p-3 bg-red-900/40 rounded-lg border-2 border-red-500">
  <div class="font-bold text-red-300 mb-2">🎲 The Flaky Test Death Spiral</div>
  <div class="text-gray-300 mb-2">
    <strong>Symptom:</strong> Tests fail randomly, devs re-run until pass
  </div>
  <div class="text-yellow-400 mb-2">
    <strong>Root Cause:</strong> Treating flakes as annoyances, not incidents
  </div>
  <div class="text-green-300">
    <strong>Fix:</strong> Track flake rate, page team, fix in 24h or disable
  </div>
</div>

<div class="p-3 bg-red-900/40 rounded-lg border-2 border-red-500">
  <div class="font-bold text-red-300 mb-2">🔀 Multi-Repo Coordination Hell</div>
  <div class="text-gray-300 mb-2">
    <strong>Symptom:</strong> Simple feature = 3 days, 5 repos, 12 handoffs
  </div>
  <div class="text-yellow-400 mb-2">
    <strong>Root Cause:</strong> Repos organized by team, not product
  </div>
  <div class="text-green-300">
    <strong>Fix:</strong> Merge repos that change together >50% of time
  </div>
</div>

</div>

<div class="mt-4 p-3 bg-gradient-to-r from-red-900/40 to-gray-800 rounded-lg text-center">
  <span class="text-white font-bold">⚠️ Monorepos fail when everything depends on everything. Fix boundaries, not structure.</span>
</div>

---

# Before vs After: Measurable Outcomes

<div class="grid grid-cols-2 gap-6">

<div>
  <div class="text-xl font-bold text-red-400 mb-4">Before Agentic Delivery</div>

  <div class="flex flex-col gap-2 text-xs">
    <div class="p-2 bg-gray-800 rounded-lg flex items-center gap-2">
      <span class="text-xl">📅</span>
      <div>
        <div class="font-bold text-gray-300">Feature Cycle Time</div>
        <div class="text-red-400">2-3 weeks</div>
      </div>
    </div>
    <div class="p-2 bg-gray-800 rounded-lg flex items-center gap-2">
      <span class="text-xl">🐌</span>
      <div>
        <div class="font-bold text-gray-300">CI Feedback</div>
        <div class="text-red-400">45 minutes (with retries)</div>
      </div>
    </div>
    <div class="p-2 bg-gray-800 rounded-lg flex items-center gap-2">
      <span class="text-xl">👥</span>
      <div>
        <div class="font-bold text-gray-300">Review Bottleneck</div>
        <div class="text-red-400">18-24 hour median wait</div>
      </div>
    </div>
    <div class="p-2 bg-gray-800 rounded-lg flex items-center gap-2">
      <span class="text-xl">🔄</span>
      <div>
        <div class="font-bold text-gray-300">Rollback Rate</div>
        <div class="text-red-400">8% of deploys</div>
      </div>
    </div>
    <div class="p-2 bg-gray-800 rounded-lg flex items-center gap-2">
      <span class="text-xl">😰</span>
      <div>
        <div class="font-bold text-gray-300">Developer Stress</div>
        <div class="text-red-400">"Did I break production?"</div>
      </div>
    </div>
  </div>
</div>

<div>
  <div class="text-xl font-bold text-green-400 mb-4">After Optimization</div>

  <div class="flex flex-col gap-2 text-xs">
    <div class="p-2 bg-green-900/60 rounded-lg flex items-center gap-2 border-2 border-green-400">
      <span class="text-xl">⚡</span>
      <div>
        <div class="font-bold text-green-300">Feature Cycle Time</div>
        <div class="text-green-300">Same-day ship for green builds</div>
      </div>
    </div>
    <div class="p-2 bg-green-900/60 rounded-lg flex items-center gap-2 border-2 border-green-400">
      <span class="text-xl">🚀</span>
      <div>
        <div class="font-bold text-green-300">CI Feedback</div>
        <div class="text-green-300">8 minutes (affected + caching)</div>
      </div>
    </div>
    <div class="p-2 bg-green-900/60 rounded-lg flex items-center gap-2 border-2 border-green-400">
      <span class="text-xl">🤖</span>
      <div>
        <div class="font-bold text-green-300">Review Bottleneck</div>
        <div class="text-green-300">2-hour median (auto-assigned)</div>
      </div>
    </div>
    <div class="p-2 bg-green-900/60 rounded-lg flex items-center gap-2 border-2 border-green-400">
      <span class="text-xl">✅</span>
      <div>
        <div class="font-bold text-green-300">Rollback Rate</div>
        <div class="text-green-300"><1% (automation catches)</div>
      </div>
    </div>
    <div class="p-2 bg-green-900/60 rounded-lg flex items-center gap-2 border-2 border-green-400">
      <span class="text-xl">😌</span>
      <div>
        <div class="font-bold text-green-300">Developer Focus</div>
        <div class="text-green-300">"What outcome do we want?"</div>
      </div>
    </div>
  </div>
</div>

</div>

---

# The New Normal

<div class="grid grid-cols-3 gap-4 text-xs mt-4">

<div class="p-3 bg-green-900/60 rounded-lg border-2 border-green-400">
  <div class="font-bold text-green-300 mb-2">Agents Iterate Rapidly</div>
  <div class="text-gray-300">
    • 10-15 feature PRs/day per team<br/>
    • 300-800 lines, fully tested<br/>
    • Security-scanned automatically<br/>
    • Humans review outcomes
  </div>
</div>

<div class="p-3 bg-blue-900/60 rounded-lg border-2 border-blue-400">
  <div class="font-bold text-blue-300 mb-2">Inside Deterministic Rails</div>
  <div class="text-gray-300">
    • CI is green or red (never "maybe")<br/>
    • Policies enforced by code<br/>
    • Rollback is one click<br/>
    • Everything tracked as metric
  </div>
</div>

<div class="p-3 bg-purple-900/60 rounded-lg border-2 border-purple-400">
  <div class="font-bold text-purple-300 mb-2">Trust Scales Through Proof</div>
  <div class="text-gray-300">
    • Week 1: Review every line<br/>
    • Week 4: Review outcomes<br/>
    • Week 12: Review high-risk only<br/>
    • Agent earns autonomy
  </div>
</div>

</div>

<div class="mt-6 p-5 bg-gradient-to-r from-green-600 to-green-800 rounded-xl text-center">
  <div class="text-xl font-bold text-white">
    🎯 The Goal: Feature-per-day delivery where humans govern<br/>and agents execute—sustainably, safely, at scale
  </div>
</div>

---
layout: center
class: text-center
---

# The Bottom Line

<div class="flex flex-col gap-4 items-center max-w-3xl mx-auto">

<div class="text-xl font-light">
  Our repo structure is our agent's world.
</div>

<div class="grid grid-cols-2 gap-4 w-full text-sm">

<div class="p-3 bg-green-900/60 rounded-lg border-2 border-green-400">
  <div class="font-bold text-green-300 mb-1">If that world has:</div>
  <div class="text-left text-gray-300 text-xs">
    ✅ Clear boundaries<br/>
    ✅ Fast feedback loops<br/>
    ✅ Automated guardrails<br/>
    ✅ Deterministic outcomes
  </div>
</div>

<div class="p-3 bg-blue-900/60 rounded-lg border-2 border-blue-400">
  <div class="font-bold text-blue-300 mb-1">Then agents can:</div>
  <div class="text-left text-gray-300 text-xs">
    🚀 Run fast<br/>
    🎯 Ship confidently<br/>
    📊 Prove safety<br/>
    🔄 Iterate rapidly
  </div>
</div>

</div>

<div class="mt-3 p-4 bg-gradient-to-r from-red-900/40 to-gray-800 rounded-xl text-center">
  <div class="text-base font-bold text-white">
    If it doesn't?<br/>
    <span class="text-lg text-red-400">They'll run fast anyway—right off a cliff.</span>
  </div>
</div>

<div class="mt-4 text-3xl">
  🏎️
</div>

<div class="text-base font-bold text-blue-400">
  Build roads for Formula 1 cars, not horses.<br/>
  Our agents are already here.
</div>

</div>

---
layout: center
class: text-center
---

# Thank You

<div class="pt-12">
  <span class="text-6xl">
    🏁
  </span>
</div>

<div class="mt-8 text-xl text-gray-400">
  Questions?
</div>

<div class="abs-br m-6 flex gap-2">
  <span class="text-sm opacity-50">Agentic Delivery Repo Topology • February 2026</span>
</div>
