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
module: exec-talks/agentic-labor
mdc: true
status: active
updated: 2026-02-12
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
</div>
<div class="abs-br m-6 flex gap-2 text-sm opacity-50">
  <span>Executive Talk: Agentic Labor</span>
</div>

---
layout: center
---

# Beyond the Keyboard

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
  <span class="text-xl font-bold text-white">This is where agents graduate from "faster typing" to multiplied capacity</span>
</div>

---

# The Software Delivery Labor Map

<div class="grid grid-cols-3 gap-2 text-xs mt-2">
<div class="p-3 bg-blue-900/60 rounded-lg border-2 border-blue-400">
  <div class="text-2xl mb-1">🔍</div>
  <div class="text-sm font-bold text-blue-300 mb-1">DISCOVERY</div>
  <div class="text-gray-300 text-xs">Issue triage · Duplicate detection · Impact analysis</div>
  <div class="mt-2 text-green-400 font-bold text-xs">⬆️ High Leverage</div>
</div>
<div class="p-3 bg-gray-800 rounded-lg border-2 border-gray-600">
  <div class="text-2xl mb-1">🗺️</div>
  <div class="text-sm font-bold text-gray-300 mb-1">PLANNING</div>
  <div class="text-gray-400 text-xs">Execution planning · Dependency mapping · Sequencing</div>
  <div class="mt-2 text-yellow-400 font-bold text-xs">↗️ Medium-High</div>
</div>
<div class="p-3 bg-gray-800 rounded-lg border-2 border-gray-600">
  <div class="text-2xl mb-1">📝</div>
  <div class="text-sm font-bold text-gray-300 mb-1">SPECIFICATION</div>
  <div class="text-gray-400 text-xs">Requirements · Acceptance criteria · Test strategy</div>
  <div class="mt-2 text-yellow-400 font-bold text-xs">↗️ Medium</div>
</div>
<div class="p-3 bg-gray-800 rounded-lg border-2 border-gray-600">
  <div class="text-2xl mb-1">💻</div>
  <div class="text-sm font-bold text-gray-300 mb-1">IMPLEMENTATION</div>
  <div class="text-gray-400 text-xs">Code generation · Refactoring · Bug fixing</div>
  <div class="mt-2 text-yellow-400 font-bold text-xs">↗️ Medium-High</div>
</div>
<div class="p-3 bg-blue-900/60 rounded-lg border-2 border-blue-400">
  <div class="text-2xl mb-1">🧪</div>
  <div class="text-sm font-bold text-blue-300 mb-1">VALIDATION</div>
  <div class="text-gray-400 text-xs">Test execution · Security scanning · Coverage</div>
  <div class="mt-2 text-green-400 font-bold text-xs">⬆️ High Leverage</div>
</div>
<div class="p-3 bg-gray-800 rounded-lg border-2 border-gray-600">
  <div class="text-2xl mb-1">🚀</div>
  <div class="text-sm font-bold text-gray-300 mb-1">DELIVERY</div>
  <div class="text-gray-400 text-xs">Release coordination · Deployment · Rollback</div>
  <div class="mt-2 text-yellow-400 font-bold text-xs">↗️ Medium</div>
</div>
<div class="p-3 bg-blue-900/60 rounded-lg border-2 border-blue-400">
  <div class="text-2xl mb-1">📚</div>
  <div class="text-sm font-bold-blue-300 mb-1">KNOWLEDGE</div>
  <div class="text-gray-300 text-xs">Doc sync · Onboarding · Decision records</div>
  <div class="mt-2 text-green-400 font-bold text-xs">⬆️ High Leverage</div>
</div>
<div class="p-3 bg-green-900/60 rounded-lg border-2 border-green-400">
  <div class="text-2xl mb-1">🔒</div>
  <div class="text-sm font-bold text-green-300 mb-1">GOVERNANCE</div>
  <div class="text-gray-300 text-xs">Compliance · Policy enforcement · Audits</div>
  <div class="mt-2 text-green-400 font-bold text-xs">⬆️⬆️ Very High</div>
</div>
<div class="p-3 bg-blue-900/60 rounded-lg border-2 border-blue-400">
  <div class="text-2xl mb-1">🔄</div>
  <div class="text-sm font-bold text-blue-300 mb-1">MAINTENANCE</div>
  <div class="text-gray-400 text-xs">Dependency updates · Tech debt · Monitoring</div>
  <div class="mt-2 text-green-400 font-bold text-xs">⬆️ High Leverage</div>
</div>
</div>
<div class="mt-4 text-center text-sm text-gray-400 italic">
  Code generation is just 1 of 9 categories—and not the highest leverage for agents
</div>

---

# 🔍 Discovery: Issue Triage

<div class="grid grid-cols-2 gap-4 mt-4 text-xs">
<div class="p-4 bg-gray-800 rounded-lg">
  <div class="font-bold text-blue-300 mb-2 text-sm">Monthly Backlog Reality</div>
  <div class="text-gray-400">
    • New issues: <span class="text-white font-bold">88</span><br/>
    • Triaged: <span class="text-yellow-400 font-bold">32 (36%)</span><br/>
    • Awaiting: <span class="text-red-400 font-bold">56 (64%)</span><br/>
    • Duplicates filed: <span class="text-white">12</span><br/>
    • Related unflagged: <span class="text-white">18</span><br/>
    • Wrong routing: <span class="text-white">8</span>
  </div>
</div>
<div class="p-4 bg-gradient-to-br from-red-900/40 to-gray-800 rounded-lg">
  <div class="font-bold text-red-300 mb-2 text-sm text-center">💰 Monthly Cost</div>
  <div class="text-gray-400">
    ~40 hrs: Manual triage<br/>
    ~15 hrs: Duplicate investigation<br/>
    ~10 hrs: Issue ping-pong
  </div>
  <div class="border-t border-gray-700 mt-2 pt-2 text-center">
    <div class="text-2xl text-red-400 font-bold">65 hrs/month</div>
  </div>
</div>
</div>
<div class="mt-4">
<div class="font-bold text-green-300 mb-2 text-sm">⚡ Agentic Issue Triage Speed</div>
  <div class="grid grid-cols-3 gap-2 text-xs">
    <div class="p-2 bg-blue-900/40 rounded">
      <div class="text-gray-400">Search duplicates</div>
      <div class="text-white font-bold">10 min → <2 sec</div>
    </div>
    <div class="p-2 bg-blue-900/40 rounded">
      <div class="text-gray-400">Check if fixed</div>
      <div class="text-white font-bold">15 min → <5 sec</div>
    </div>
    <div class="p-2 bg-blue-900/40 rounded">
      <div class="text-gray-400">Route correctly</div>
      <div class="text-white font-bold">5 min → <1 sec</div>
    </div>
  </div>
</div>
<div class="mt-4 p-4 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl text-center">
  <span class="text-lg font-bold text-white">30 minutes → 2 minutes per issue</span>
</div>

---

# 🔍 Discovery: Impact Analysis

<div class="text-xs mt-2">
<div class="mb-2 p-3 bg-blue-900/40 rounded-lg border-l-4 border-blue-400">
  <div class="font-bold text-blue-300 mb-1">📊 DIRECT REFERENCES (47 found)</div>
  <div class="text-gray-400">
    • src/auth/login.ts:142 - Used in authentication flow<br/>
    • src/api/users.ts:234 - Exposed in API response<br/>
    • src/admin/user-list.tsx:67 - Displayed in admin panel<br/>
    • ... and 44 more files
  </div>
</div>
<div class="mb-2 p-3 bg-green-900/40 rounded-lg border-l-4 border-green-400">
  <div class="font-bold text-green-300 mb-1">🔗 INDIRECT DEPENDENCIES (12 found)</div>
  <div class="text-gray-400">
    • email-service (external) - Checks verified status<br/>
    • mobile-app v2.3 - Caches this field locally<br/>
    • analytics-pipeline - Segment property depends on this
  </div>
</div>
<div class="mb-2 p-3 bg-yellow-900/40 rounded-lg border-l-4 border-yellow-400">
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
<div class="mt-3 text-center text-sm text-gray-400 italic">
  What would take a senior engineer half a day—surfaced in minutes with higher confidence
</div>

---

# 🗺️ Planning: The Execution Gap

<div class="grid grid-cols-2 gap-6 mt-4">
<div class="p-5 bg-red-900/30 rounded-lg border-2 border-red-500">
  <div class="text-3xl mb-3">❌</div>
  <div class="text-lg font-bold text-red-400 mb-3">Problem-Space Issue</div>
  <div class="text-xs text-gray-300">
    <strong>Issue #4521:</strong> Login doesn't work on mobile Safari
    <div class="mt-2">
      Steps: Open app → Try login → Get redirected<br/>
      Expected: Stay logged in<br/>
      Actual: Endless redirect loop
    </div>
  </div>
  <div class="mt-3 p-2 bg-red-900/40 rounded text-xs text-red-300">
    ⚠️ Valid but not actionable
  </div>
</div>
<div class="p-5 bg-green-900/30 rounded-lg border-2 border-green-500">
  <div class="text-3xl mb-3">✅</div>
  <div class="text-lg font-bold text-green-400 mb-3">Agent-Generated Plan</div>
  <div class="text-xs text-gray-300">
    <strong>Root Cause:</strong> Safari ITP blocking cookies<br/>
    <strong>Solution:</strong> SameSite=None + localStorage<br/>
    <strong>Files:</strong> 4 files identified<br/>
    <strong>Steps:</strong> 5-step checklist<br/>
    <strong>Tests:</strong> Safari-specific strategy<br/>
    <strong>Risks:</strong> 3 risks with mitigations<br/>
    <strong>Estimate:</strong> 6 hours (vs "1-2 days")
  </div>
</div>
</div>
<div class="mt-4 p-4 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl text-center">
  <span class="text-lg font-bold text-white">2-4 hours investigation → Executable plan in minutes</span>
</div>

---

# 🔒 Governance: Compliance at Scale

<div class="text-xs mt-2">
<div class="grid grid-cols-2 gap-2 mb-3">
<div class="p-2 bg-green-900/30 rounded-lg border-l-4 border-green-400">
  <div class="font-bold text-green-300 mb-1">✅ PASSING CHECKS</div>
  <div class="text-gray-400">
    • PII encryption: Uses EncryptedField<br/>
    • Audit logging: AuditLog.record() on mutations<br/>
    • Access control: @RequireRole decorator<br/>
    • No card data in logs: Logger scrubs patterns
  </div>
</div>
<div class="p-2 bg-yellow-900/40 rounded-lg border-l-4 border-yellow-400">
  <div class="font-bold text-yellow-300 mb-1">⚠️ WARNINGS</div>
  <div class="text-gray-400">
    • GDPR: billing_history lacks cascade delete<br/>
    • SOC 2: No TTL on payment_attempts
  </div>
</div>
</div>
<div class="p-2 bg-red-900/40 rounded-lg border-l-4 border-red-500 mb-2">
  <div class="font-bold text-red-400 mb-1">🔴 BLOCKING ISSUES</div>
  <div class="text-gray-400">
    <strong>PCI DSS violation:</strong> test/fixtures/billing.json contains test card 4111111111111111<br/>
    <strong>Required action:</strong> Replace with tokenized test card before merge
  </div>
</div>
<div class="p-2 bg-gray-800 rounded-lg">
  <div class="font-bold text-gray-300 mb-1">💰 Cost Reduction</div>
  <div class="text-gray-400">
    Manual review: <span class="text-red-400">2-4 hrs/PR</span> → <span class="text-green-400">10 min</span> ·
    Audit prep: <span class="text-red-400">160 hrs/year</span> → <span class="text-green-400">40 hrs</span> ·
    Prod issues: <span class="text-red-400">5/quarter</span> → <span class="text-green-400">0</span>
  </div>
</div>
</div>
<div class="mt-2 p-4 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl text-center">
  <span class="text-lg font-bold text-white">4-hour compliance review → 2-minute confirmation</span>
</div>

---

# 📚 Knowledge: Documentation Drift

<div class="flex items-center justify-center gap-2 mb-4 text-xs mt-4">
<div class="p-3 bg-green-900/30 rounded border-2 border-green-500 w-44 text-center">
  <div class="font-bold text-green-300">Day 0</div>
  <div class="text-gray-400">📗 Accurate</div>
</div>
<div class="text-gray-400 text-2xl">→</div>
<div class="p-3 bg-yellow-900/30 rounded border-2 border-yellow-500 w-44 text-center">
  <div class="font-bold text-yellow-300">Month 3</div>
  <div class="text-gray-400">📙 Outdated</div>
</div>
<div class="text-gray-400 text-2xl">→</div>
<div class="p-3 bg-orange-900/30 rounded border-2 border-orange-500 w-44 text-center">
  <div class="font-bold text-orange-300">Month 12</div>
  <div class="text-gray-400">📕 Misleading</div>
</div>
<div class="text-gray-400 text-2xl">→</div>
<div class="p-3 bg-red-900/40 rounded border-2 border-red-500 w-44 text-center">
  <div class="font-bold text-red-400">Month 18</div>
  <div class="text-gray-400">🚫 Abandoned</div>
</div>
</div>
<div class="text-xs">
<div class="mb-3">
  <div class="font-bold text-blue-300 mb-2">📄 Agentic Documentation Sync Example</div>
  <div class="grid grid-cols-2 gap-2">
    <div class="p-2 bg-gray-800 rounded">
      <div class="font-bold text-red-400 mb-1">Documented</div>
      <div class="text-gray-400">POST /users returns 201<br/>email field required<br/>Rate limit: 100/min</div>
    </div>
    <div class="p-2 bg-gray-800 rounded">
      <div class="font-bold text-green-400 mb-1">Actual Code</div>
      <div class="text-gray-400">Returns 200 🔴<br/>Now optional 🔴<br/>Now 50/min 🔴</div>
    </div>
  </div>
</div>
<div class="p-3 bg-blue-900/40 rounded-lg">
  <div class="text-gray-400">
    <strong>Agent action:</strong> Compares docs against code · Generates PRs for fixes · Flags major changes for review
  </div>
</div>
</div>

---

# 🧪 Validation: Coverage vs. Risk

<div class="text-xs mt-3">
<div class="mb-3">
  <div class="grid grid-cols-4 gap-1 text-center font-bold text-gray-300 mb-1">
    <div>Component</div>
    <div>Coverage</div>
    <div>Risk</div>
    <div>Recommendation</div>
  </div>
  <div class="grid grid-cols-4 gap-1 text-center mb-1">
    <div class="p-2 bg-gray-800 rounded text-white">Auth</div>
    <div class="p-2 bg-gray-800 rounded text-yellow-400">92%</div>
    <div class="p-2 bg-red-900/40 rounded text-red-400">🔴 Critical</div>
    <div class="p-2 bg-yellow-900/40 rounded text-yellow-300">Add failure tests</div>
  </div>
  <div class="grid grid-cols-4 gap-1 text-center mb-1">
    <div class="p-2 bg-gray-800 rounded text-white">Payment</div>
    <div class="p-2 bg-red-900/40 rounded text-red-400">45%</div>
    <div class="p-2 bg-red-900/40 rounded text-red-400">🔴 Critical</div>
    <div class="p-2 bg-red-900/40 rounded text-red-300 font-bold">Priority 1</div>
  </div>
  <div class="grid grid-cols-4 gap-1 text-center mb-1">
    <div class="p-2 bg-gray-800 rounded text-white">Search</div>
    <div class="p-2 bg-green-900/40 rounded text-green-400">78%</div>
    <div class="p-2 bg-yellow-900/40 rounded text-yellow-400">🟡 Medium</div>
    <div class="p-2 bg-green-900/40 rounded text-green-300">Maintain</div>
  </div>
</div>
<div class="grid grid-cols-2 gap-3">
<div class="p-3 bg-red-900/30 rounded-lg border-l-4 border-red-500">
  <div class="font-bold text-red-400 mb-2">❌ Payment: Missing Critical Tests</div>
  <div class="text-gray-400">
    ✅ Successful charge<br/>
    <span class="text-red-400">❌ Declined card handling</span><br/>
    <span class="text-red-400">❌ Duplicate prevention</span><br/>
    <span class="text-red-400">❌ Webhook verification</span>
  </div>
</div>
<div class="p-3 bg-yellow-900/40 rounded-lg border-l-4 border-yellow-500">
  <div class="font-bold text-yellow-300 mb-2">⚠️ Auth: Happy Path Only</div>
  <div class="text-gray-400">
    ✅ Successful login<br/>
    ✅ Invalid password<br/>
    <span class="text-yellow-400">❌ Session expiration</span><br/>
    <span class="text-yellow-400">❌ Rate limiting</span>
  </div>
</div>
</div>
</div>

---

# The Labor Allocation Matrix

<div class="grid grid-cols-3 gap-2 text-xs mt-4">
<div class="p-3 bg-green-900/60 rounded-lg border-2 border-green-400">
  <div class="text-lg font-bold text-green-300 mb-1">🤖 AUTOMATE</div>
  <div class="text-gray-400 text-xs mb-2">High leverage, low judgment</div>
  <div class="text-gray-300 text-xs">
    Issue triage · Compliance · Doc sync · Audit logging
  </div>
  <div class="mt-2 p-1 bg-green-900/40 rounded text-green-300 text-center text-xs">End-to-end</div>
</div>
<div class="p-3 bg-blue-900/60 rounded-lg border-2 border-blue-400">
  <div class="text-lg font-bold text-blue-300 mb-1">🤝 AUGMENT</div>
  <div class="text-gray-400 text-xs mb-2">High leverage, medium judgment</div>
  <div class="text-gray-300 text-xs">
    Test strategy · Code review · Impact analysis · Planning
  </div>
  <div class="mt-2 p-1 bg-blue-900/40 rounded text-blue-300 text-center text-xs">Agent prepares</div>
</div>
<div class="p-3 bg-yellow-900/40 rounded-lg border-2 border-yellow-500">
  <div class="text-lg font-bold text-yellow-300 mb-1">👁️ ASSIST</div>
  <div class="text-gray-400 text-xs mb-2">Medium leverage, high judgment</div>
  <div class="text-gray-300 text-xs">
    Architecture · Design · Priority calls · Strategy
  </div>
  <div class="mt-2 p-1 bg-yellow-900/40 rounded text-yellow-300 text-center text-xs">Human decides</div>
</div>
<div class="p-3 bg-purple-900/40 rounded-lg border-2 border-purple-500">
  <div class="text-lg font-bold text-purple-300 mb-1">🔁 BATCH</div>
  <div class="text-gray-400 text-xs mb-2">Medium leverage, low judgment</div>
  <div class="text-gray-300 text-xs">
    Dependency updates · Migrations · Formatting
  </div>
  <div class="mt-2 p-1 bg-purple-900/40 rounded text-purple-300 text-center text-xs">Bulk off-hours</div>
</div>
<div class="p-3 bg-gray-800 rounded-lg border-2 border-gray-600">
  <div class="text-lg font-bold text-gray-300 mb-1">🔄 ACCELERATE</div>
  <div class="text-gray-400 text-xs mb-2">Medium leverage, medium judgment</div>
  <div class="text-gray-300 text-xs">
    Bug investigation · Features · Refactoring
  </div>
  <div class="mt-2 p-1 bg-gray-700 rounded text-gray-300 text-center text-xs">Agent speeds up</div>
</div>
<div class="p-3 bg-gray-900/60 rounded-lg border-2 border-gray-700">
  <div class="text-lg font-bold text-gray-400 mb-1">🧠 HUMAN</div>
  <div class="text-gray-400 text-xs mb-2">Low leverage, high judgment</div>
  <div class="text-gray-300 text-xs">
    Strategy · Stakeholder mgmt · Team dynamics
  </div>
  <div class="mt-2 p-1 bg-gray-800 rounded text-gray-400 text-center text-xs">Human only</div>
</div>
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
  <div class="text-xl font-bold text-white mb-2">Humans focus on judgment</div>
  <div class="text-sm text-blue-100">Agents handle preparation and execution</div>
</div>

---

# Measuring Agent Labor ROI

<div class="grid grid-cols-2 gap-2 text-xs mt-3">
<div class="p-2 bg-gray-800 rounded-lg">
  <div class="font-bold text-blue-300 mb-1">🔍 Discovery</div>
  <div class="text-gray-400">
    Triage time: <span class="text-red-400">30 min</span> → <span class="text-green-400">5 min</span><br/>
    Duplicates: <span class="text-red-400">15%</span> → <span class="text-green-400"><5%</span><br/>
    Correct routing: <span class="text-red-400">60%</span> → <span class="text-green-400">90%+</span>
  </div>
</div>
<div class="p-2 bg-gray-800 rounded-lg">
  <div class="font-bold text-green-300 mb-1">🗺️ Planning</div>
  <div class="text-gray-400">
    Issue to plan: <span class="text-red-400">4-8 hrs</span> → <span class="text-green-400"><1 hr</span><br/>
    Plan accuracy: <span class="text-red-400">±50%</span> → <span class="text-green-400">±20%</span><br/>
    Blocked PRs: <span class="text-red-400">15%</span> → <span class="text-green-400"><5%</span>
  </div>
</div>
<div class="p-2 bg-gray-800 rounded-lg">
  <div class="font-bold text-yellow-300 mb-1">🔒 Governance</div>
  <div class="text-gray-400">
    Prod issues: <span class="text-red-400">5/qtr</span> → <span class="text-green-400">0</span><br/>
    Review time: <span class="text-red-400">4 hrs</span> → <span class="text-green-400">10 min</span><br/>
    Audit prep: <span class="text-red-400">160 hrs/yr</span> → <span class="text-green-400">40 hrs</span>
  </div>
</div>
<div class="p-2 bg-gray-800 rounded-lg">
  <div class="font-bold text-purple-300 mb-1">📚 Knowledge</div>
  <div class="text-gray-400">
    Doc accuracy: <span class="text-red-400">~60%</span> → <span class="text-green-400">90%+</span><br/>
    Onboarding: <span class="text-red-400">3 weeks</span> → <span class="text-green-400">1 week</span><br/>
    Find info: <span class="text-red-400">30 min</span> → <span class="text-green-400">5 min</span>
  </div>
</div>
</div>
<div class="mt-3 p-4 bg-gradient-to-r from-green-600 to-green-800 rounded-xl text-center">
  <div class="text-lg font-bold text-white">50-person team: 194 hours/week saved = $19,400/week @ $100/hr</div>
</div>

---
layout: center
---

# The Organizational Shift

<div class="mt-4">
<div class="p-5 bg-red-900/30 rounded-lg border-2 border-red-500 mb-6">
  <div class="text-lg font-bold text-red-400 mb-3">❌ Old Model: Human-Constrained Pipeline</div>
  <div class="text-sm text-gray-300 font-mono">
    Work → Assign → Investigate → Implement → Validate
  </div>
  <div class="mt-2 text-xs text-gray-400 text-center">
    (bottleneck) · (slow) · (sequential) · (fatiguing)
  </div>
</div>
<div class="p-5 bg-green-900/30 rounded-lg border-2 border-green-500">
  <div class="text-lg font-bold text-green-400 mb-3">✅ New Model: Agent-Amplified Teams</div>
  <div class="text-sm text-gray-300 font-mono">
    Work → Agent prepares → Human decides → Agent executes → Agent validates
  </div>
  <div class="mt-2 text-xs text-gray-400 text-center">
    (instant) · (informed) · (parallel) · (thorough)
  </div>
  <div class="mt-3 text-xs text-blue-300 text-center">
    ↳ Human intervenes only for judgment calls
  </div>
</div>
</div>
<div class="mt-4 grid grid-cols-2 gap-4 text-xs">
  <div class="p-3 bg-gray-800 rounded-lg">
    <div class="text-gray-400">Bottleneck shifts from</div>
    <div class="text-white font-bold">Human availability → Decision quality</div>
  </div>
  <div class="p-3 bg-gray-800 rounded-lg">
    <div class="text-gray-400">Scaling means</div>
    <div class="text-white font-bold">Deploy agents → Not hire more people</div>
  </div>
</div>

---

# Getting Started: The First Three Agents

<div class="grid grid-cols-3 gap-4 mt-4 text-xs">
<div class="p-4 bg-blue-900/60 rounded-lg border-2 border-blue-400">
  <div class="text-3xl mb-2 text-center">🔍</div>
  <div class="text-base font-bold text-blue-300 text-center mb-3">1. Issue Triage</div>
  <div class="text-gray-300 mb-3">
    <strong>What it does:</strong><br/>
    • Analyzes vs codebase<br/>
    • Checks duplicates<br/>
    • Suggests routing<br/>
    • Generates context
  </div>
  <div class="p-2 bg-blue-900/40 rounded">
    <div class="text-blue-300 font-bold">Success:</div>
    <div class="text-gray-400">30 min → 5 min</div>
  </div>
</div>
<div class="p-4 bg-green-900/60 rounded-lg border-2 border-green-400">
  <div class="text-3xl mb-2 text-center">🗺️</div>
  <div class="text-base font-bold text-green-300 text-center mb-3">2. Planning</div>
  <div class="text-gray-300 mb-3">
    <strong>What it does:</strong><br/>
    • Analyzes → plan<br/>
    • Identifies files<br/>
    • Estimates effort<br/>
    • Creates spec
  </div>
  <div class="p-2 bg-green-900/40 rounded">
    <div class="text-green-300 font-bold">Success:</div>
    <div class="text-gray-400">4 hrs → 30 min</div>
  </div>
</div>
<div class="p-4 bg-purple-900/60 rounded-lg border-2 border-purple-400">
  <div class="text-3xl mb-2 text-center">🔒</div>
  <div class="text-base font-bold text-purple-300 text-center mb-3">3. Code Review</div>
  <div class="text-gray-300 mb-3">
    <strong>What it does:</strong><br/>
    • Pre-reviews PRs<br/>
    • Surfaces risks<br/>
    • Checks coverage<br/>
    • Enables validation
  </div>
  <div class="p-2 bg-purple-900/40 rounded">
    <div class="text-purple-300 font-bold">Success:</div>
    <div class="text-gray-400">4 hrs → 15 min</div>
  </div>
</div>
</div>
<div class="mt-4 text-center text-xs text-gray-400 italic">
  Start with these three for immediate visibility and low risk · See "The Journey to Agentic SDLC" for implementation details
</div>

---
layout: center
---

# The Most Profound Change

<div class="mt-6 space-y-6">
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
      <span class="text-green-400 font-bold text-4xl">judgment, creativity, and innovation</span>
    </div>
    <div class="mt-12 text-sm text-gray-500">
      The Labor Multiplier · CopilotTraining
    </div>
  </div>
</div>
