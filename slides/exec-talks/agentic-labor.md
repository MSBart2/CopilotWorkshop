---
theme: default
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## The Labor Multiplier: What Agents Actually Do
  A strategic guide for leaders expanding agentic AI beyond code generation
drawings:
  persist: false
transition: slide-left
title: The Labor Multiplier - What Agents Actually Do
mdc: true
---

<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
  <!-- Gradient background -->
  <div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-cyan-900/10 to-green-900/20"></div>

  <!-- Glowing orb -->
  <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-green-500/20 rounded-full blur-3xl"></div>

  <!-- Logo with glow -->
  <div class="relative z-10">
    <div class="absolute inset-0 blur-2xl opacity-50">
      <img src="./sdp-logo.png" class="w-64" alt="" />
    </div>
    <img src="./sdp-logo.png" class="w-64 relative" alt="SDP Logo" />
  </div>

  <!-- Gradient text title -->
  <h1 class="!text-5xl !font-bold !mt-8 bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 bg-clip-text text-transparent relative z-10">
    The Labor Multiplier
  </h1>

  <!-- Pill subtitle -->
  <div class="mt-4 relative z-10">
    <span class="px-6 py-2 bg-gradient-to-r from-blue-600/80 to-cyan-600/80 rounded-full text-white text-xl font-medium shadow-lg shadow-blue-500/25">
      What Agents Actually Do
    </span>
  </div>

  <!-- Tagline -->
  <div class="mt-8 text-lg opacity-70 relative z-10">
    Beyond Code Generation: The Invisible 80%
  </div>

  <!-- Decorative line -->
  <div class="mt-6 w-32 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full relative z-10"></div>
</div>

<div class="abs-br m-6 flex gap-2 text-sm opacity-50">
  <span>Executive Talk: Agentic Labor</span>
</div>

---
layout: center
---

# The 20/80 Illusion

<div class="grid grid-cols-2 gap-8 mt-8">

<div class="p-6 bg-blue-900/40 rounded-lg border-2 border-blue-400">
  <div class="text-4xl mb-4">⌨️</div>
  <div class="text-2xl font-bold text-blue-300 mb-4">The Visible 20%</div>
  <div class="text-sm text-gray-300">
    • Code autocomplete<br/>
    • Generated functions<br/>
    • Boilerplate elimination<br/>
    • Faster typing
  </div>
</div>

<div class="p-6 bg-green-900/40 rounded-lg border-2 border-green-400">
  <div class="text-4xl mb-4">🎯</div>
  <div class="text-2xl font-bold text-green-300 mb-4">The Invisible 80%</div>
  <div class="text-sm text-gray-300">
    • Issue triage & analysis<br/>
    • Dependency mapping<br/>
    • Security & compliance<br/>
    • Documentation sync<br/>
    • Knowledge transfer
  </div>
</div>

</div>

<div class="mt-8 p-4 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl text-center">
  <span class="text-xl font-bold text-white">This is where agents transform from "faster typing" to "multiplied capacity"</span>
</div>

---

# The Software Delivery Labor Map

<div class="grid grid-cols-3 gap-3 text-xs mt-4">

<div class="p-4 bg-blue-900/60 rounded-lg border-2 border-blue-400">
  <div class="text-2xl mb-2">🔍</div>
  <div class="text-lg font-bold text-blue-300 mb-2">DISCOVERY</div>
  <div class="text-gray-300">
    • Issue triage<br/>
    • Duplicate detection<br/>
    • Impact analysis<br/>
    • Stakeholder synthesis
  </div>
  <div class="mt-3 text-green-400 font-bold">⬆️ High Agent Leverage</div>
</div>

<div class="p-4 bg-gray-800 rounded-lg border-2 border-gray-600">
  <div class="text-2xl mb-2">🗺️</div>
  <div class="text-lg font-bold text-gray-300 mb-2">PLANNING</div>
  <div class="text-gray-400">
    • Execution planning<br/>
    • Dependency mapping<br/>
    • Sequencing decisions<br/>
    • Resource estimation
  </div>
  <div class="mt-3 text-yellow-400 font-bold">↗️ Medium-High Leverage</div>
</div>

<div class="p-4 bg-gray-800 rounded-lg border-2 border-gray-600">
  <div class="text-2xl mb-2">📝</div>
  <div class="text-lg font-bold text-gray-300 mb-2">SPECIFICATION</div>
  <div class="text-gray-400">
    • Requirements writing<br/>
    • Acceptance criteria<br/>
    • Test strategy<br/>
    • Architecture docs
  </div>
  <div class="mt-3 text-yellow-400 font-bold">↗️ Medium Leverage</div>
</div>

<div class="p-4 bg-gray-800 rounded-lg border-2 border-gray-600">
  <div class="text-2xl mb-2">💻</div>
  <div class="text-lg font-bold text-gray-300 mb-2">IMPLEMENTATION</div>
  <div class="text-gray-400">
    • Code generation<br/>
    • Refactoring<br/>
    • Bug fixing<br/>
    • Migration work
  </div>
  <div class="mt-3 text-yellow-400 font-bold">↗️ Medium-High Leverage</div>
</div>

<div class="p-4 bg-blue-900/60 rounded-lg border-2 border-blue-400">
  <div class="text-2xl mb-2">🧪</div>
  <div class="text-lg font-bold text-blue-300 mb-2">VALIDATION</div>
  <div class="text-gray-400">
    • Test execution<br/>
    • Security scanning<br/>
    • Performance testing<br/>
    • Coverage analysis
  </div>
  <div class="mt-3 text-green-400 font-bold">⬆️ High Agent Leverage</div>
</div>

<div class="p-4 bg-gray-800 rounded-lg border-2 border-gray-600">
  <div class="text-2xl mb-2">🚀</div>
  <div class="text-lg font-bold text-gray-300 mb-2">DELIVERY</div>
  <div class="text-gray-400">
    • Release coordination<br/>
    • Deployment verification<br/>
    • Rollback assessment<br/>
    • Change communication
  </div>
  <div class="mt-3 text-yellow-400 font-bold">↗️ Medium Leverage</div>
</div>

<div class="p-4 bg-blue-900/60 rounded-lg border-2 border-blue-400">
  <div class="text-2xl mb-2">📚</div>
  <div class="text-lg font-bold text-blue-300 mb-2">KNOWLEDGE</div>
  <div class="text-gray-400">
    • Documentation sync<br/>
    • Onboarding materials<br/>
    • Decision records<br/>
    • Runbook updates
  </div>
  <div class="mt-3 text-green-400 font-bold">⬆️ High Agent Leverage</div>
</div>

<div class="p-4 bg-green-900/60 rounded-lg border-2 border-green-400">
  <div class="text-2xl mb-2">🔒</div>
  <div class="text-lg font-bold text-green-300 mb-2">GOVERNANCE</div>
  <div class="text-gray-400">
    • Compliance checking<br/>
    • Policy enforcement<br/>
    • Audit trail generation<br/>
    • Access review
  </div>
  <div class="mt-3 text-green-400 font-bold">⬆️⬆️ Very High Leverage</div>
</div>

<div class="p-4 bg-blue-900/60 rounded-lg border-2 border-blue-400">
  <div class="text-2xl mb-2">🔄</div>
  <div class="text-lg font-bold text-blue-300 mb-2">MAINTENANCE</div>
  <div class="text-gray-400">
    • Dependency updates<br/>
    • Technical debt triage<br/>
    • Health monitoring<br/>
    • Incident analysis
  </div>
  <div class="mt-3 text-green-400 font-bold">⬆️ High Agent Leverage</div>
</div>

</div>

<div class="mt-4 text-center text-sm text-gray-400 italic">
  Code generation is just 1 of 9 categories—and not even the highest leverage
</div>

---

# Why Agents Excel Outside the Editor

<div class="flex flex-col gap-4 mt-8">

<div class="p-5 bg-gray-800 rounded-lg border-l-4 border-blue-400">
  <div class="flex items-center gap-3">
    <span class="text-3xl">🔁</span>
    <div>
      <div class="text-lg font-bold text-white">Repetitive Tasks</div>
      <div class="text-sm text-gray-400">Agents excel at consistent execution without fatigue</div>
    </div>
  </div>
</div>

<div class="p-5 bg-gray-800 rounded-lg border-l-4 border-green-400">
  <div class="flex items-center gap-3">
    <span class="text-3xl">📊</span>
    <div>
      <div class="text-lg font-bold text-white">Information-Dense Work</div>
      <div class="text-sm text-gray-400">Agents can process more context than humans (thousands of issues, entire codebases)</div>
    </div>
  </div>
</div>

<div class="p-5 bg-gray-800 rounded-lg border-l-4 border-yellow-400">
  <div class="flex items-center gap-3">
    <span class="text-3xl">🛡️</span>
    <div>
      <div class="text-lg font-bold text-white">Low-Risk Operations</div>
      <div class="text-sm text-gray-400">Mistakes are caught before code exists—analysis errors have minimal blast radius</div>
    </div>
  </div>
</div>

<div class="p-5 bg-gray-800 rounded-lg border-l-4 border-red-400">
  <div class="flex items-center gap-3">
    <span class="text-3xl">⏱️</span>
    <div>
      <div class="text-lg font-bold text-white">Time-Consuming Toil</div>
      <div class="text-sm text-gray-400">Humans hate this work; agents don't complain</div>
    </div>
  </div>
</div>

</div>

---

# 🔍 Discovery: The Issue Triage Problem

<div class="grid grid-cols-2 gap-6 mt-4">

<div>
  <div class="text-sm font-bold text-blue-400 mb-3">THE BACKLOG REALITY</div>
  <div class="p-4 bg-gray-800 rounded-lg text-xs">
    <div class="mb-2 text-gray-400">New issues per month: <span class="text-white font-bold">88</span></div>
    <div class="mb-2 text-gray-400">Triaged this month: <span class="text-yellow-400 font-bold">32 (36%)</span></div>
    <div class="mb-4 text-gray-400">Awaiting triage: <span class="text-red-400 font-bold">56 (64%)</span></div>

    <div class="border-t border-gray-700 pt-3 mt-3">
      <div class="font-bold text-red-400 mb-2">⚠️ HIDDEN COSTS</div>
      <div class="text-gray-400">
        • Duplicate issues filed: <span class="text-white">12</span><br/>
        • Related issues unflagged: <span class="text-white">18</span><br/>
        • Stale issues needing closure: <span class="text-white">34</span><br/>
        • Wrong component assignments: <span class="text-white">8</span>
      </div>
    </div>
  </div>
</div>

<div>
  <div class="text-sm font-bold text-green-400 mb-3">MONTHLY LABOR COST</div>
  <div class="p-4 bg-gradient-to-br from-red-900/40 to-gray-800 rounded-lg text-xs">
    <div class="mb-2">
      <div class="text-white font-bold">~40 engineer-hours</div>
      <div class="text-gray-400">Manual triage</div>
    </div>
    <div class="mb-2">
      <div class="text-white font-bold">~15 engineer-hours</div>
      <div class="text-gray-400">Duplicate investigation</div>
    </div>
    <div class="mb-2">
      <div class="text-white font-bold">~10 engineer-hours</div>
      <div class="text-gray-400">Issue ping-pong between teams</div>
    </div>
    <div class="border-t border-gray-700 pt-3 mt-3">
      <div class="text-2xl text-red-400 font-bold">65 hours/month</div>
      <div class="text-gray-400">of pure toil</div>
    </div>
  </div>
</div>

</div>

<div class="mt-4 text-center text-sm text-gray-400 italic">
  The backlog grows faster than humans can triage, creating compounding hidden costs
</div>

---

# Agentic Issue Triage: Speed Comparison

<div class="mt-6">

| Task | Human Time | Agent Time | Agent Advantage |
|------|------------|------------|-----------------|
| Read issue, understand intent | 3-5 min | <1 sec | ⚡ Consistent attention to every issue |
| Search for duplicates | 5-10 min | <2 sec | 🔍 Searches ALL issues, not just recent |
| Check if already fixed | 10-15 min | <5 sec | 💻 Examines actual code changes |
| Identify related issues | 5-10 min | <3 sec | 🧠 Pattern matching across entire history |
| Route to correct team | 2-5 min | <1 sec | 🎯 Knows component ownership from codebase |
| Suggest labels/priority | 3-5 min | <2 sec | ✅ Consistent application of criteria |

</div>

<div class="mt-6 p-5 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl text-center">
  <div class="text-2xl font-bold text-white mb-2">30 minutes → 2 minutes</div>
  <div class="text-sm text-blue-100">The human still makes the call. But instead of 30 min investigating, they spend 2 min reviewing.</div>
</div>

---

# Agentic Impact Analysis

<div class="text-xs mt-4">

<div class="mb-3 p-3 bg-blue-900/40 rounded-lg border-l-4 border-blue-400">
  <div class="font-bold text-blue-300 mb-1">📊 DIRECT REFERENCES (47 found)</div>
  <div class="text-gray-400">
    • <span class="text-white">src/auth/login.ts:142</span> - Used in authentication flow<br/>
    • <span class="text-white">src/api/users.ts:234</span> - Exposed in API response<br/>
    • <span class="text-white">src/admin/user-list.tsx:67</span> - Displayed in admin panel<br/>
    • ... and 44 more
  </div>
</div>

<div class="mb-3 p-3 bg-green-900/40 rounded-lg border-l-4 border-green-400">
  <div class="font-bold text-green-300 mb-1">🔗 INDIRECT DEPENDENCIES (12 found)</div>
  <div class="text-gray-400">
    • <span class="text-white">email-service</span> - Checks verified status before sending<br/>
    • <span class="text-white">mobile-app v2.3</span> - Caches this field locally<br/>
    • <span class="text-white">analytics-pipeline</span> - Segment property depends on this
  </div>
</div>

<div class="mb-3 p-3 bg-yellow-900/40 rounded-lg border-l-4 border-yellow-400">
  <div class="font-bold text-yellow-300 mb-1">📋 AFFECTED TEAMS (4 teams)</div>
  <div class="text-gray-400">
    @platform-team · @mobile-team · @data-team · @billing-team
  </div>
</div>

<div class="p-3 bg-gray-800 rounded-lg border-l-4 border-purple-400">
  <div class="font-bold text-purple-300 mb-1">⏱️ ESTIMATED SCOPE</div>
  <div class="text-gray-400">
    47 files · ~15 engineer-days · 3 teams coordination · <span class="text-white font-bold">Total: 4-6 weeks</span>
  </div>
</div>

</div>

<div class="mt-4 text-center text-sm text-gray-400 italic">
  What would take a senior engineer half a day—surfaced in minutes with higher confidence
</div>

---

# 🗺️ Planning: The Execution Gap

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 bg-red-900/30 rounded-lg border-2 border-red-500">
  <div class="text-3xl mb-3">❌</div>
  <div class="text-lg font-bold text-red-400 mb-3">Problem-Space Issue</div>
  <div class="text-sm text-gray-300">
    <strong>Issue #4521:</strong> Login doesn't work on mobile Safari
    <div class="mt-2 text-xs">
      Steps: Open app on iPhone → Try to log in → Get redirected<br/>
      Expected: Stay logged in<br/>
      Actual: Endless redirect loop
    </div>
  </div>
  <div class="mt-4 p-2 bg-red-900/40 rounded text-xs text-red-300">
    ⚠️ Valid but not actionable
  </div>
</div>

<div class="p-5 bg-green-900/30 rounded-lg border-2 border-green-500">
  <div class="text-3xl mb-3">✅</div>
  <div class="text-lg font-bold text-green-400 mb-3">Agent-Generated Plan</div>
  <div class="text-xs text-gray-300">
    <strong>Root Cause:</strong> Safari ITP blocking cross-origin cookies<br/>
    <strong>Solution:</strong> SameSite=None + localStorage fallback<br/>
    <strong>Files to modify:</strong> 4 files identified<br/>
    <strong>Steps:</strong> 5-step implementation checklist<br/>
    <strong>Tests:</strong> Safari-specific test strategy<br/>
    <strong>Risks:</strong> 3 risks with mitigations<br/>
    <strong>Estimate:</strong> 6 hours (vs "1-2 days")
  </div>
</div>

</div>

<div class="mt-6 p-4 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl text-center">
  <span class="text-lg font-bold text-white">2-4 hours of investigation → Executable plan in minutes</span>
</div>

---

# 🔒 Governance: The Compliance Burden

<div class="grid grid-cols-2 gap-4 text-xs mt-4">

<div class="p-3 bg-gray-800 rounded-lg">
  <div class="font-bold text-blue-300 mb-2">📋 SOC 2</div>
  <div class="text-gray-400">
    ☐ Access logging on all PII<br/>
    ☐ Audit trail for data changes<br/>
    ☐ Encryption in transit<br/>
    ☐ Quarterly access reviews
  </div>
</div>

<div class="p-3 bg-gray-800 rounded-lg">
  <div class="font-bold text-green-300 mb-2">📋 HIPAA</div>
  <div class="text-gray-400">
    ☐ PHI encryption at rest<br/>
    ☐ Minimum necessary access<br/>
    ☐ Audit logs retained 6 years<br/>
    ☐ BAA with all vendors
  </div>
</div>

<div class="p-3 bg-gray-800 rounded-lg">
  <div class="font-bold text-yellow-300 mb-2">📋 PCI DSS</div>
  <div class="text-gray-400">
    ☐ No card data in logs<br/>
    ☐ Network segmentation<br/>
    ☐ Key rotation quarterly<br/>
    ☐ Vulnerability scanning
  </div>
</div>

<div class="p-3 bg-gray-800 rounded-lg">
  <div class="font-bold text-purple-300 mb-2">📋 GDPR</div>
  <div class="text-gray-400">
    ☐ Right to erasure<br/>
    ☐ Data portability API<br/>
    ☐ Consent tracking<br/>
    ☐ 72-hour breach notification
  </div>
</div>

</div>

<div class="mt-4 p-4 bg-gradient-to-r from-red-900/40 to-gray-800 rounded-lg text-xs">
  <div class="font-bold text-red-400 mb-2">💰 COST OF COMPLIANCE</div>
  <div class="text-gray-300">
    • Manual code review: <span class="text-white font-bold">2-4 hours per PR</span><br/>
    • Quarterly access review: <span class="text-white font-bold">20-40 engineer-hours</span><br/>
    • Audit preparation: <span class="text-white font-bold">80-160 hours annually</span><br/>
    • Remediation for findings: <span class="text-white font-bold">>100 hours</span>
  </div>
</div>

---

# Agentic Compliance Checking

<div class="text-xs mt-4">

<div class="grid grid-cols-2 gap-4 mb-4">

<div class="p-3 bg-green-900/30 rounded-lg border-l-4 border-green-400">
  <div class="font-bold text-green-300 mb-2">✅ PASSING CHECKS</div>
  <div class="text-gray-400">
    • PII encryption at rest: Uses EncryptedField<br/>
    • Audit logging: AuditLog.record() on mutations<br/>
    • Access control: @RequireRole decorator present<br/>
    • No card data in logs: Logger scrubs patterns
  </div>
</div>

<div class="p-3 bg-yellow-900/40 rounded-lg border-l-4 border-yellow-400">
  <div class="font-bold text-yellow-300 mb-2">⚠️ WARNINGS</div>
  <div class="text-gray-400">
    • GDPR: billing_history lacks cascade delete<br/>
    • SOC 2: No TTL on payment_attempts records
  </div>
</div>

</div>

<div class="p-3 bg-red-900/40 rounded-lg border-l-4 border-red-500 mb-4">
  <div class="font-bold text-red-400 mb-2">🔴 BLOCKING ISSUES</div>
  <div class="text-gray-400">
    <strong>PCI DSS violation:</strong> test/fixtures/billing.json contains test card number 4111111111111111<br/>
    <strong>Required action:</strong> Replace with tokenized test card before merge
  </div>
</div>

<div class="p-3 bg-blue-900/40 rounded-lg">
  <div class="font-bold text-blue-300 mb-1">📊 AUDIT TRAIL GENERATED</div>
  <div class="text-gray-400">
    Timestamp: 2024-01-15T14:32:00Z · PR #893 · Analyzer v2.3.1 · Logged to compliance dashboard
  </div>
</div>

</div>

<div class="mt-4 p-4 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl text-center">
  <span class="text-lg font-bold text-white">4-hour compliance review → 2-minute confirmation</span>
</div>

---

# 📚 Knowledge: Documentation Decay

<div class="flex flex-col items-center gap-3 mt-6">

<div class="p-3 bg-green-900/30 rounded-lg w-full max-w-lg text-center border-2 border-green-500">
  <div class="text-sm font-bold text-green-300">Day 0: Documentation written</div>
  <div class="text-xs text-gray-400">📗 Accurate</div>
</div>

<div class="text-2xl text-gray-400">↓</div>

<div class="p-3 bg-yellow-900/30 rounded-lg w-full max-w-lg text-center border-2 border-yellow-500">
  <div class="text-sm font-bold text-yellow-300">Month 3: Partially outdated</div>
  <div class="text-xs text-gray-400">📙 Feature changes not reflected</div>
</div>

<div class="text-2xl text-gray-400">↓</div>

<div class="p-3 bg-orange-900/30 rounded-lg w-full max-w-lg text-center border-2 border-orange-500">
  <div class="text-sm font-bold text-orange-300">Month 12: Actively misleading</div>
  <div class="text-xs text-gray-400">📕 Causes more harm than good</div>
</div>

<div class="text-2xl text-gray-400">↓</div>

<div class="p-3 bg-red-900/40 rounded-lg w-full max-w-lg text-center border-2 border-red-500">
  <div class="text-sm font-bold text-red-400">Month 18: Abandoned</div>
  <div class="text-xs text-gray-400">🚫 Team uses Slack/tribal knowledge instead</div>
</div>

</div>

<div class="mt-4 p-4 bg-gray-800 rounded-lg text-xs text-center">
  <div class="text-gray-400">
    Onboarding: <span class="text-red-400 font-bold">2-3 weeks</span> (should be 1) ·
    Finding "how X works": <span class="text-red-400 font-bold">30-60 min Slack archaeology</span> ·
    Knowledge loss on turnover: <span class="text-red-400 font-bold">~40%</span>
  </div>
</div>

---

# Agentic Documentation Sync

<div class="text-xs mt-4">

<div class="mb-4">
  <div class="font-bold text-blue-300 mb-2">📄 API Reference: docs/api/users.md</div>

  | Documented | Actual Code | Status | Fix |
  |------------|-------------|--------|-----|
  | `POST /users` returns `201` | Returns `200` | 🔴 Mismatch | ✅ Auto |
  | `email` field required | Now optional | 🔴 Mismatch | ✅ Auto |
  | Rate limit: 100/min | Now 50/min | 🔴 Mismatch | ✅ Auto |

</div>

<div class="mb-4">
  <div class="font-bold text-green-300 mb-2">🏗️ Architecture Doc: ARCHITECTURE.md</div>

  | Documented | Actual Code | Status |
  |------------|-------------|--------|
  | "Auth service uses JWT" | Now uses session tokens | 🔴 Major drift |
  | "Cache: Redis" | Now Memcached | 🔴 Major drift |

</div>

<div class="p-3 bg-blue-900/40 rounded-lg">
  <div class="font-bold text-blue-300 mb-2">🤖 Agent Action</div>
  <div class="text-gray-400">
    Compares what IS documented against what code ACTUALLY does<br/>
    <span class="text-green-400">→ Generates PRs for fixable issues</span><br/>
    <span class="text-yellow-400">→ Flags major changes for human review</span>
  </div>
</div>

</div>

---

# 🧪 Validation: Coverage vs. Risk

<div class="text-xs mt-4">

| Component | Line Coverage | Risk Level | Test Quality | Recommendation |
|-----------|---------------|------------|--------------|----------------|
| **Auth** | 92% | 🔴 Critical | ⚠️ Happy path only | Add failure mode tests |
| **Payment** | 45% | 🔴 Critical | 🔴 Minimal | **Priority 1: Add coverage** |
| **Search** | 78% | 🟡 Medium | ✅ Good | Maintain current level |
| **UI Components** | 85% | 🟢 Low | ✅ Good | Current coverage sufficient |

<div class="mt-4 grid grid-cols-2 gap-4">

<div class="p-3 bg-red-900/30 rounded-lg border-l-4 border-red-500">
  <div class="font-bold text-red-400 mb-2">❌ Payment Tests: Missing Critical Scenarios</div>
  <div class="text-gray-400">
    ✅ Successful charge<br/>
    <span class="text-red-400">❌ Declined card handling</span><br/>
    <span class="text-red-400">❌ Duplicate charge prevention</span><br/>
    <span class="text-red-400">❌ Webhook signature verification</span><br/>
    <span class="text-red-400">❌ Retry logic on timeout</span>
  </div>
</div>

<div class="p-3 bg-yellow-900/40 rounded-lg border-l-4 border-yellow-500">
  <div class="font-bold text-yellow-300 mb-2">⚠️ Auth Tests: Happy Path Only</div>
  <div class="text-gray-400">
    ✅ Successful login<br/>
    ✅ Invalid password<br/>
    <span class="text-yellow-400">❌ Session expiration handling</span><br/>
    <span class="text-yellow-400">❌ Concurrent session limits</span><br/>
    <span class="text-yellow-400">❌ Rate limiting behavior</span>
  </div>
</div>

</div>

</div>

<div class="mt-4 text-center text-sm text-gray-400 italic">
  Agents analyze what coverage MEANS—identifying high-risk areas with missing failure-mode tests
</div>

---

# The Labor Allocation Matrix

<div class="text-xs mt-4">

<div class="grid grid-cols-3 gap-2">

<div class="p-3 bg-green-900/60 rounded-lg border-2 border-green-400">
  <div class="text-lg font-bold text-green-300 mb-2">🤖 AUTOMATE</div>
  <div class="text-gray-400 mb-2">High leverage, low judgment</div>
  <div class="text-gray-300">
    • Issue triage<br/>
    • Compliance checks<br/>
    • Doc sync<br/>
    • Audit logging
  </div>
  <div class="mt-2 p-2 bg-green-900/40 rounded text-green-300 text-center">End-to-end</div>
</div>

<div class="p-3 bg-blue-900/60 rounded-lg border-2 border-blue-400">
  <div class="text-lg font-bold text-blue-300 mb-2">🤝 AUGMENT</div>
  <div class="text-gray-400 mb-2">High leverage, medium judgment</div>
  <div class="text-gray-300">
    • Test strategy<br/>
    • Code review<br/>
    • Impact analysis<br/>
    • Execution planning
  </div>
  <div class="mt-2 p-2 bg-blue-900/40 rounded text-blue-300 text-center">Agent prepares</div>
</div>

<div class="p-3 bg-yellow-900/40 rounded-lg border-2 border-yellow-500">
  <div class="text-lg font-bold text-yellow-300 mb-2">👁️ ASSIST</div>
  <div class="text-gray-400 mb-2">Medium leverage, high judgment</div>
  <div class="text-gray-300">
    • Architecture decisions<br/>
    • Design trade-offs<br/>
    • Priority calls<br/>
    • Strategy
  </div>
  <div class="mt-2 p-2 bg-yellow-900/40 rounded text-yellow-300 text-center">Human decides</div>
</div>

<div class="p-3 bg-purple-900/40 rounded-lg border-2 border-purple-500">
  <div class="text-lg font-bold text-purple-300 mb-2">🔁 BATCH</div>
  <div class="text-gray-400 mb-2">Medium leverage, low judgment</div>
  <div class="text-gray-300">
    • Dependency updates<br/>
    • Migration scripts<br/>
    • Code formatting<br/>
    • Dead code removal
  </div>
  <div class="mt-2 p-2 bg-purple-900/40 rounded text-purple-300 text-center">Bulk off-hours</div>
</div>

<div class="p-3 bg-gray-800 rounded-lg border-2 border-gray-600">
  <div class="text-lg font-bold text-gray-300 mb-2">🔄 ACCELERATE</div>
  <div class="text-gray-400 mb-2">Medium leverage, medium judgment</div>
  <div class="text-gray-300">
    • Bug investigation<br/>
    • Feature implementation<br/>
    • Refactoring<br/>
    • Performance tuning
  </div>
  <div class="mt-2 p-2 bg-gray-700 rounded text-gray-300 text-center">Agent speeds up</div>
</div>

<div class="p-3 bg-gray-900/60 rounded-lg border-2 border-gray-700">
  <div class="text-lg font-bold text-gray-400 mb-2">🧠 HUMAN</div>
  <div class="text-gray-400 mb-2">Low leverage, high judgment</div>
  <div class="text-gray-300">
    • Strategy<br/>
    • Stakeholder mgmt<br/>
    • Team dynamics<br/>
    • Politics
  </div>
  <div class="mt-2 p-2 bg-gray-800 rounded text-gray-400 text-center">Human only</div>
</div>

</div>

</div>

<div class="mt-4 text-center text-sm text-gray-400 italic">
  Highest ROI: upper-left quadrant (high agent leverage, low human judgment required)
</div>

---
layout: center
---

# The Handoff Pattern

<div class="flex items-center justify-center gap-6 mt-8">

<div class="p-5 bg-blue-900/60 rounded-lg border-2 border-blue-400 w-56">
  <div class="text-3xl mb-2 text-center">🤖</div>
  <div class="text-lg font-bold text-blue-300 text-center mb-3">PREPARATION</div>
  <div class="text-xs text-gray-300">
    Agent does:<br/>
    • Gather context<br/>
    • Analyze options<br/>
    • Surface risks<br/>
    • Propose plan
  </div>
  <div class="mt-2 text-center text-xs text-blue-400">⏱️ Minutes</div>
</div>

<div class="text-4xl text-gray-400">→</div>

<div class="p-5 bg-green-900/60 rounded-lg border-2 border-green-400 w-56">
  <div class="text-3xl mb-2 text-center">👤</div>
  <div class="text-lg font-bold text-green-300 text-center mb-3">DECISION</div>
  <div class="text-xs text-gray-300">
    Human does:<br/>
    • Review analysis<br/>
    • Make judgment<br/>
    • Approve/modify<br/>
    • Set constraints
  </div>
  <div class="mt-2 text-center text-xs text-green-400">⏱️ Minutes</div>
</div>

<div class="text-4xl text-gray-400">→</div>

<div class="p-5 bg-purple-900/60 rounded-lg border-2 border-purple-400 w-56">
  <div class="text-3xl mb-2 text-center">🤖</div>
  <div class="text-lg font-bold text-purple-300 text-center mb-3">EXECUTION</div>
  <div class="text-xs text-gray-300">
    Agent does:<br/>
    • Implement plan<br/>
    • Run validations<br/>
    • Report results<br/>
    • Handle routine
  </div>
  <div class="mt-2 text-center text-xs text-purple-400">⏱️ Variable</div>
</div>

</div>

<div class="mt-8 p-5 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl text-center">
  <div class="text-xl font-bold text-white mb-2">Keeps humans where they add value: judgment</div>
  <div class="text-sm text-blue-100">Agents handle preparation and execution</div>
</div>

---

# Measuring Agent Labor ROI

<div class="grid grid-cols-2 gap-4 text-xs mt-4">

<div class="p-3 bg-gray-800 rounded-lg">
  <div class="font-bold text-blue-300 mb-2">🔍 Discovery Metrics</div>
  <div class="text-gray-400">
    • Issue triage time: <span class="text-red-400">30 min</span> → <span class="text-green-400">5 min</span><br/>
    • Duplicate issue rate: <span class="text-red-400">15%</span> → <span class="text-green-400"><5%</span><br/>
    • Correct initial routing: <span class="text-red-400">60%</span> → <span class="text-green-400">90%+</span><br/>
    • Issues closed "already fixed": <span class="text-red-400">10%</span> → <span class="text-green-400"><3%</span>
  </div>
</div>

<div class="p-3 bg-gray-800 rounded-lg">
  <div class="font-bold text-green-300 mb-2">🗺️ Planning Metrics</div>
  <div class="text-gray-400">
    • Issue to actionable plan: <span class="text-red-400">4-8 hrs</span> → <span class="text-green-400"><1 hr</span><br/>
    • Plan accuracy (±): <span class="text-red-400">50%</span> → <span class="text-green-400">20%</span><br/>
    • Missing requirements late: <span class="text-red-400">25%</span> → <span class="text-green-400"><10%</span><br/>
    • PRs blocked by unclear scope: <span class="text-red-400">15%</span> → <span class="text-green-400"><5%</span>
  </div>
</div>

<div class="p-3 bg-gray-800 rounded-lg">
  <div class="font-bold text-yellow-300 mb-2">🔒 Governance Metrics</div>
  <div class="text-gray-400">
    • Compliance issues in prod: <span class="text-red-400">5/qtr</span> → <span class="text-green-400">0</span><br/>
    • Compliance review time: <span class="text-red-400">4 hrs</span> → <span class="text-green-400">10 min</span><br/>
    • Audit preparation: <span class="text-red-400">160 hrs/yr</span> → <span class="text-green-400">40 hrs</span><br/>
    • Violations caught pre-merge: <span class="text-red-400">30%</span> → <span class="text-green-400">95%+</span>
  </div>
</div>

<div class="p-3 bg-gray-800 rounded-lg">
  <div class="font-bold text-purple-300 mb-2">📚 Knowledge Metrics</div>
  <div class="text-gray-400">
    • Documentation accuracy: <span class="text-red-400">~60%</span> → <span class="text-green-400">90%+</span><br/>
    • New engineer onboarding: <span class="text-red-400">3 weeks</span> → <span class="text-green-400">1 week</span><br/>
    • "Ask in Slack" queries: <span class="text-red-400">50/wk</span> → <span class="text-green-400"><15/wk</span><br/>
    • Time to find "how X works": <span class="text-red-400">30 min</span> → <span class="text-green-400">5 min</span>
  </div>
</div>

</div>

---
layout: center
---

# The Organizational Shift

<div class="mt-6">

<div class="p-5 bg-red-900/30 rounded-lg border-2 border-red-500 mb-6">
  <div class="text-lg font-bold text-red-400 mb-3">❌ Old Model: Human Labor Pool</div>
  <div class="text-sm text-gray-300 font-mono">
    Work → Assign to human → Human investigates → Human implements → Human validates
  </div>
  <div class="mt-2 text-xs text-gray-400 text-center">
    (bottleneck) · (expensive) · (slow) · (tired)
  </div>
</div>

<div class="p-5 bg-green-900/30 rounded-lg border-2 border-green-500">
  <div class="text-lg font-bold text-green-400 mb-3">✅ New Model: Agent-Augmented Labor</div>
  <div class="text-sm text-gray-300 font-mono">
    Work → Agent prepares → Human decides → Agent executes → Agent validates
  </div>
  <div class="mt-2 text-xs text-gray-400 text-center">
    (fast) · (focused) · (parallel) · (consistent)
  </div>
  <div class="mt-3 text-xs text-blue-300 text-center">
    ↳ Human intervenes only when agent surfaces uncertainty
  </div>
</div>

</div>

<div class="mt-6 grid grid-cols-2 gap-4 text-xs">
  <div class="p-3 bg-gray-800 rounded-lg">
    <div class="text-gray-400">Bottleneck shifts from</div>
    <div class="text-white font-bold">Human availability → Decision quality</div>
  </div>
  <div class="p-3 bg-gray-800 rounded-lg">
    <div class="text-gray-400">Scaling means</div>
    <div class="text-white font-bold">Deploy agents → Not hire people</div>
  </div>
</div>

---

# Getting Started: The First Three Agents

<div class="grid grid-cols-3 gap-4 mt-6 text-xs">

<div class="p-4 bg-blue-900/60 rounded-lg border-2 border-blue-400">
  <div class="text-3xl mb-2 text-center">🔍</div>
  <div class="text-lg font-bold text-blue-300 text-center mb-3">1. Issue Triage Agent</div>
  <div class="text-gray-300 mb-3">
    <strong>What it does:</strong><br/>
    • Analyzes new issues vs codebase<br/>
    • Checks for duplicates<br/>
    • Suggests routing & priority<br/>
    • Generates context summary
  </div>
  <div class="p-2 bg-blue-900/40 rounded">
    <div class="text-blue-300 font-bold">Success metric:</div>
    <div class="text-gray-400">Triage time: 30 min → 5 min</div>
  </div>
</div>

<div class="p-4 bg-green-900/60 rounded-lg border-2 border-green-400">
  <div class="text-3xl mb-2 text-center">🔒</div>
  <div class="text-lg font-bold text-green-300 text-center mb-3">2. Compliance Check Agent</div>
  <div class="text-gray-300 mb-3">
    <strong>What it does:</strong><br/>
    • Validates PRs vs requirements<br/>
    • Surfaces specific violations<br/>
    • Generates audit trail<br/>
    • Blocks critical issues
  </div>
  <div class="p-2 bg-green-900/40 rounded">
    <div class="text-green-300 font-bold">Success metric:</div>
    <div class="text-gray-400">Prod compliance issues → 0</div>
  </div>
</div>

<div class="p-4 bg-purple-900/60 rounded-lg border-2 border-purple-400">
  <div class="text-3xl mb-2 text-center">🗺️</div>
  <div class="text-lg font-bold text-purple-300 text-center mb-3">3. Execution Planning Agent</div>
  <div class="text-gray-300 mb-3">
    <strong>What it does:</strong><br/>
    • Analyzes issue → plan<br/>
    • Identifies affected files<br/>
    • Estimates effort breakdown<br/>
    • Creates ready-to-implement spec
  </div>
  <div class="p-2 bg-purple-900/40 rounded">
    <div class="text-purple-300 font-bold">Success metric:</div>
    <div class="text-gray-400">Issue to impl: 4 hrs → 30 min</div>
  </div>
</div>

</div>

<div class="mt-4 text-center text-sm text-gray-400 italic">
  Start with these three for immediate visibility and low risk
</div>

---
layout: center
---

# The Most Profound Change

<div class="mt-8 space-y-6">

<div class="text-2xl text-center text-gray-300">
  The most profound change agent labor brings<br/>
  <span class="text-white font-bold">isn't speed—it's visibility</span>
</div>

<div class="grid grid-cols-3 gap-4 text-sm mt-8">

<div class="p-4 bg-blue-900/40 rounded-lg border-l-4 border-blue-400">
  <div class="font-bold text-blue-300 mb-2">Agent triages issue</div>
  <div class="text-gray-400">→ Documents reasoning</div>
</div>

<div class="p-4 bg-green-900/40 rounded-lg border-l-4 border-green-400">
  <div class="font-bold text-green-300 mb-2">Agent plans execution</div>
  <div class="text-gray-400">→ Shows its work</div>
</div>

<div class="p-4 bg-purple-900/40 rounded-lg border-l-4 border-purple-400">
  <div class="font-bold text-purple-300 mb-2">Agent validates compliance</div>
  <div class="text-gray-400">→ Leaves audit trail</div>
</div>

</div>

<div class="mt-8 p-6 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl text-center">
  <div class="text-2xl font-bold text-white mb-3">You can't optimize what you can't see</div>
  <div class="text-lg text-blue-100">
    All the invisible labor that used to happen in developers' heads<br/>
    becomes <span class="text-white font-bold">visible, reviewable, and improvable</span>
  </div>
</div>

</div>

---
layout: end
---

# The Organizations That Win

<div class="flex items-center justify-center h-full">
  <div class="text-center space-y-8">
    <div class="text-3xl text-gray-300">
      The organizations that win aren't those with<br/>
      <span class="text-white font-bold text-4xl">the most developers</span>
    </div>

    <div class="text-6xl">↓</div>

    <div class="text-3xl text-gray-300">
      They're those whose developers spend their time on<br/>
      <span class="text-green-400 font-bold text-4xl">judgment, not toil</span>
    </div>

    <div class="mt-12 text-sm text-gray-500">
      The Labor Multiplier · CopilotTraining
    </div>
  </div>
</div>
