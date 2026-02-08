---
theme: default
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Scaling GitHub Copilot Across Organizations
  Enterprise patterns for organization-wide AI adoption and governance
  45-minute technical presentation for architects and leadership
drawings:
  persist: false
transition: slide-left
title: Enterprise Patterns for GitHub Copilot
module: tech-talks/enterprise-patterns
mdc: true
status: active
updated: 2026-02-06
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
    Scaling GitHub Copilot
  </h1>

  <!-- Pill subtitle -->
  <div class="mt-4 relative z-10">
    <span class="px-6 py-2 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-lg font-medium shadow-lg shadow-cyan-500/25">
      Enterprise Patterns for AI Adoption
    </span>
  </div>

  <!-- Decorative line -->
  <div class="mt-8 w-32 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full relative z-10"></div>
</div>

<div class="abs-br m-6 flex gap-2">
  <span class="text-sm opacity-50">45-minute tech talk</span>
</div>

---
layout: center
---

# The Scaling Challenge

<div class="grid grid-cols-2 gap-8 mt-8">

<div class="p-6 bg-red-900/30 rounded-lg border-l-4 border-red-500">
  <h3 class="text-xl font-bold text-red-400 mb-4">❌ Individual Success ≠ Org Capability</h3>
  <div class="text-sm text-gray-300 space-y-2">
    <div>✗ Knowledge trapped in team silos</div>
    <div>✗ Repeated pattern reinvention</div>
    <div>✗ Inconsistent quality standards</div>
    <div>✗ No measurable ROI</div>
  </div>
</div>

<div class="p-6 bg-blue-900/30 rounded-lg border-l-4 border-blue-400">
  <h3 class="text-xl font-bold text-blue-400 mb-4">✅ Enterprise Patterns Enable Scale</h3>
  <div class="text-sm text-gray-300 space-y-2">
    <div>✓ Standardized foundations</div>
    <div>✓ Shared knowledge systems</div>
    <div>✓ Consistent governance</div>
    <div>✓ Data-driven investment</div>
  </div>
</div>

</div>

<div class="mt-8 text-center text-gray-400 italic">
One team's Copilot mastery creates a template, not organizational capability
</div>

---
layout: two-cols
---

# 📚 Traditional Approach

<div class="mt-4 space-y-3">

```
repo-1/
  .github/
    copilot-instructions.md
    ← Team A's standards

repo-2/
  .github/
    copilot-instructions.md
    ← Team B's standards

repo-3/
  .github/
    copilot-instructions.md
    ← Team C's standards
```

<div class="mt-6 p-4 bg-red-900/30 rounded-lg">
  <div class="text-red-400 font-bold">Result:</div>
  <div class="text-sm text-gray-300 mt-2">
    • Inconsistent standards<br>
    • Repeated configuration<br>
    • Knowledge fragmentation
  </div>
</div>

</div>

::right::

# 🏢 Organization-Level

<div class="mt-4">

<div class="p-4 bg-blue-900/60 rounded-lg border-2 border-blue-400 mb-3">
  <div class="font-bold text-blue-300">Organization Settings</div>
  <div class="text-xs text-gray-400">Applied to all repos automatically</div>
</div>

<div class="text-2xl text-gray-400 text-center">↓</div>

<div class="grid grid-cols-2 gap-2 text-xs mb-3">
  <div class="p-2 bg-gray-800 rounded">Security</div>
  <div class="p-2 bg-gray-800 rounded">Frameworks</div>
  <div class="p-2 bg-gray-800 rounded">Standards</div>
  <div class="p-2 bg-gray-800 rounded">Compliance</div>
</div>

<div class="text-2xl text-gray-400 text-center">+</div>

<div class="p-3 bg-green-900/30 rounded-lg mt-3">
  <div class="text-green-400 text-sm font-bold">Repo-Specific Overrides</div>
  <div class="text-xs text-gray-400">Optional customization</div>
</div>

<div class="mt-6 p-4 bg-green-900/30 rounded-lg">
  <div class="text-green-400 font-bold">Result:</div>
  <div class="text-sm text-gray-300 mt-2">
    • Baseline consistency<br>
    • Repo flexibility<br>
    • Expertise scaling
  </div>
</div>

</div>

---

# 🎯 What to Standardize Organization-Wide

<div class="grid grid-cols-3 gap-4 mt-8">

<div class="p-5 bg-red-900/40 rounded-lg border-2 border-red-500">
  <div class="text-3xl mb-3">🔒</div>
  <h3 class="text-lg font-bold text-red-300 mb-3">Security & Compliance</h3>
  <div class="text-xs text-gray-300 space-y-1">
    <div>• Authentication patterns</div>
    <div>• Data handling rules</div>
    <div>• Approved cryptography</div>
    <div>• Logging requirements</div>
  </div>
</div>

<div class="p-5 bg-blue-900/40 rounded-lg border-2 border-blue-500">
  <div class="text-3xl mb-3">⚙️</div>
  <h3 class="text-lg font-bold text-blue-300 mb-3">Framework & Tooling</h3>
  <div class="text-xs text-gray-300 space-y-1">
    <div>• Technology stack preferences</div>
    <div>• Approved dependencies</div>
    <div>• Testing frameworks</div>
    <div>• CI/CD patterns</div>
  </div>
</div>

<div class="p-5 bg-green-900/40 rounded-lg border-2 border-green-500">
  <div class="text-3xl mb-3">✨</div>
  <h3 class="text-lg font-bold text-green-300 mb-3">Code Quality</h3>
  <div class="text-xs text-gray-300 space-y-1">
    <div>• Accessibility (WCAG 2.1)</div>
    <div>• Performance budgets</div>
    <div>• Error handling patterns</div>
    <div>• Documentation standards</div>
  </div>
</div>

</div>

<div class="mt-8 p-5 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-lg text-center">
  <div class="text-2xl font-bold text-white">Senior architects define once → 500 developers apply automatically</div>
</div>

---
layout: center
---

# 🎓 Organizational Skill Libraries (Enterprise)

<div class="mt-8">

<div class="grid grid-cols-2 gap-6">

<div class="p-5 bg-gray-800 rounded-lg">
  <h3 class="text-lg font-bold text-purple-400 mb-4">📂 Domain-Specific Skills</h3>
  <div class="space-y-2 text-sm text-gray-300">
    <div class="p-2 bg-purple-900/30 rounded flex items-center gap-2">
      <span class="text-xl">💳</span>
      <div>
        <div class="font-bold text-purple-300">payment-processing</div>
        <div class="text-xs text-gray-400">PCI compliance validation</div>
      </div>
    </div>
    <div class="p-2 bg-blue-900/30 rounded flex items-center gap-2">
      <span class="text-xl">🏥</span>
      <div>
        <div class="font-bold text-blue-300">healthcare-data</div>
        <div class="text-xs text-gray-400">HIPAA data handling</div>
      </div>
    </div>
    <div class="p-2 bg-green-900/30 rounded flex items-center gap-2">
      <span class="text-xl">🏗️</span>
      <div>
        <div class="font-bold text-green-300">architecture-review</div>
        <div class="text-xs text-gray-400">System design standards</div>
      </div>
    </div>
  </div>
</div>

<div class="p-5 bg-gray-800 rounded-lg">
  <h3 class="text-lg font-bold text-orange-400 mb-4">🔄 Cross-Cutting Concerns</h3>
  <div class="space-y-2 text-sm text-gray-300">
    <div class="p-2 bg-red-900/30 rounded flex items-center gap-2">
      <span class="text-xl">🛡️</span>
      <div>
        <div class="font-bold text-red-300">security-scanner</div>
        <div class="text-xs text-gray-400">Vulnerability detection</div>
      </div>
    </div>
    <div class="p-2 bg-yellow-900/30 rounded flex items-center gap-2">
      <span class="text-xl">♿</span>
      <div>
        <div class="font-bold text-yellow-300">accessibility-check</div>
        <div class="text-xs text-gray-400">WCAG compliance</div>
      </div>
    </div>
    <div class="p-2 bg-cyan-900/30 rounded flex items-center gap-2">
      <span class="text-xl">💰</span>
      <div>
        <div class="font-bold text-cyan-300">cost-estimator</div>
        <div class="text-xs text-gray-400">Cloud resource costs</div>
      </div>
    </div>
  </div>
</div>

</div>

</div>

<div class="mt-6 text-center text-sm text-gray-400 italic">
Institutional knowledge transforms from documentation into executable systems
</div>

---

# 🔄 Skills: Version Control for Knowledge

<div class="mt-8 flex flex-col items-center gap-4">

<div class="p-4 bg-purple-900/60 rounded-lg border-2 border-purple-400 w-96 text-center">
  <div class="font-bold text-purple-300">Org Skill Library</div>
  <div class="text-xs text-gray-400">Centrally versioned & updated</div>
</div>

<div class="text-3xl text-gray-400">↓</div>

<div class="grid grid-cols-3 gap-3 w-full">
  <div class="p-3 bg-blue-900/40 rounded-lg border border-blue-500 text-center">
    <div class="text-sm font-bold text-blue-300">payment-api</div>
    <div class="text-xs text-gray-400">Auto-updated</div>
  </div>
  <div class="p-3 bg-blue-900/40 rounded-lg border border-blue-500 text-center">
    <div class="text-sm font-bold text-blue-300">fraud-detection</div>
    <div class="text-xs text-gray-400">Auto-updated</div>
  </div>
  <div class="p-3 bg-blue-900/40 rounded-lg border border-blue-500 text-center">
    <div class="text-sm font-bold text-blue-300">compliance-svc</div>
    <div class="text-xs text-gray-400">Auto-updated</div>
  </div>
</div>

<div class="text-2xl text-gray-400">↓ ↓ ↓</div>

<div class="p-4 bg-green-900/40 rounded-lg w-full text-center">
  <div class="text-lg font-bold text-green-300">✅ All repos inherit updates instantly</div>
  <div class="text-sm text-gray-400 mt-2">Compliance requirement changes? Update once, deploy everywhere.</div>
</div>

</div>

---
layout: center
---

# 🎛️ Model Governance & Auto Selection

<div class="grid grid-cols-2 gap-8 mt-8">

<div class="space-y-4">
  <h3 class="text-xl font-bold text-blue-400">Policy Framework</h3>

  <div class="p-4 bg-gray-800 rounded-lg">
    <div class="text-sm font-bold text-gray-300 mb-2">Organization Settings</div>
    <div class="space-y-2 text-xs">
      <div class="p-2 bg-green-900/30 rounded">✅ Allowed: GPT-4.1, Claude Sonnet 4</div>
      <div class="p-2 bg-yellow-900/30 rounded">⚠️ Restricted: Claude Opus 4</div>
      <div class="p-2 bg-blue-900/30 rounded">🤖 Auto-selection: Enabled</div>
      <div class="p-2 bg-purple-900/30 rounded">📊 Audit logging: Required</div>
    </div>
  </div>
</div>

<div class="space-y-4">
  <h3 class="text-xl font-bold text-green-400">Cost Optimization</h3>

  <div class="space-y-2 text-sm">
    <div class="p-3 bg-green-900/30 rounded-lg flex items-center gap-3">
      <span class="text-2xl">⚡</span>
      <div>
        <div class="font-bold text-green-300">Code completion</div>
        <div class="text-xs text-gray-400">Fast, cost-effective models</div>
      </div>
    </div>

    <div class="p-3 bg-blue-900/30 rounded-lg flex items-center gap-3">
      <span class="text-2xl">📝</span>
      <div>
        <div class="font-bold text-blue-300">Documentation</div>
        <div class="text-xs text-gray-400">Balanced models (Sonnet)</div>
      </div>
    </div>

    <div class="p-3 bg-purple-900/30 rounded-lg flex items-center gap-3">
      <span class="text-2xl">🏗️</span>
      <div>
        <div class="font-bold text-purple-300">Architecture analysis</div>
        <div class="text-xs text-gray-400">Premium (Opus) + budget controls</div>
      </div>
    </div>
  </div>
</div>

</div>

<div class="mt-6 text-center text-sm text-gray-400 italic">
Balance capability with cost—teams access appropriate AI power, leadership maintains budget control
</div>

---

# 💼 Flexible Licensing Strategies

<div class="grid grid-cols-3 gap-4 mt-8">

<div class="p-5 bg-blue-900/40 rounded-lg border-2 border-blue-500">
  <div class="text-3xl mb-3">👨‍💻</div>
  <h3 class="text-lg font-bold text-blue-300 mb-3">Full Seats</h3>
  <div class="text-xs text-gray-300 space-y-2">
    <div class="font-bold text-blue-400">Best for:</div>
    <div>• Core engineering teams</div>
    <div>• Platform engineers</div>
    <div>• Solution architects</div>
    <div class="pt-2 font-bold text-blue-400">Cost:</div>
    <div>Fixed monthly per seat</div>
  </div>
</div>

<div class="p-5 bg-green-900/40 rounded-lg border-2 border-green-500">
  <div class="text-3xl mb-3">⚡</div>
  <h3 class="text-lg font-bold text-green-300 mb-3">Usage-Based</h3>
  <div class="text-xs text-gray-300 space-y-2">
    <div class="font-bold text-green-400">Best for:</div>
    <div>• Contractors</div>
    <div>• Security analysts</div>
    <div>• Technical writers</div>
    <div class="pt-2 font-bold text-green-400">Cost:</div>
    <div>Pay for actual usage only</div>
  </div>
</div>

<div class="p-5 bg-purple-900/40 rounded-lg border-2 border-purple-500">
  <div class="text-3xl mb-3">👁️</div>
  <h3 class="text-lg font-bold text-purple-300 mb-3">Review-Only</h3>
  <div class="text-xs text-gray-300 space-y-2">
    <div class="font-bold text-purple-400">Best for:</div>
    <div>• Product managers</div>
    <div>• Design team</div>
    <div>• QA engineers</div>
    <div class="pt-2 font-bold text-purple-400">Cost:</div>
    <div>Free for unlicensed users</div>
  </div>
</div>

</div>

---

# 💼 Flexible Licensing: ROI Example

<div class="mt-8 p-5 bg-gradient-to-r from-green-600 to-green-800 rounded-xl shadow-lg">
  <div class="text-center">
    <div class="text-2xl font-bold text-white mb-4">Example: 200-person organization</div>
    <div class="grid grid-cols-3 gap-6 text-base">
      <div class="p-3 bg-green-900/30 rounded">
        <div class="font-bold">80 full seats</div>
        <div class="text-sm text-gray-200">Core developers</div>
      </div>
      <div class="p-3 bg-green-900/30 rounded">
        <div class="font-bold">40 usage-based</div>
        <div class="text-sm text-gray-200">Contractors</div>
      </div>
      <div class="p-3 bg-green-900/30 rounded">
        <div class="font-bold">80 review-only</div>
        <div class="text-sm text-gray-200">Product/QA</div>
      </div>
    </div>
    <div class="mt-6 text-2xl font-bold text-green-200">30-40% cost reduction vs. all full seats</div>
  </div>
</div>

<div class="mt-8 text-center text-sm text-gray-400 italic">
Optimize costs by aligning license types with actual usage patterns
</div>

---
layout: center
---

# 📚 Copilot Knowledge Bases (Enterprise)

<div class="mt-8">

<div class="flex flex-col items-center gap-4">

<div class="p-4 bg-yellow-900/40 rounded-lg border-2 border-yellow-500 w-96 text-center">
  <div class="font-bold text-yellow-300">❌ The Problem</div>
  <div class="text-sm text-gray-300 mt-2">Microservices split systems across 10-50 repos</div>
</div>

<div class="text-3xl text-gray-400">↓</div>

<div class="p-5 bg-blue-900/60 rounded-lg border-2 border-blue-400 w-full">
  <div class="text-center font-bold text-blue-300 mb-4">Knowledge Base: "Payment Platform"</div>
  <div class="grid grid-cols-5 gap-2 text-xs">
    <div class="p-2 bg-gray-800 rounded text-center">
      <div class="font-bold">payment-api</div>
      <div class="text-gray-400">REST contracts</div>
    </div>
    <div class="p-2 bg-gray-800 rounded text-center">
      <div class="font-bold">processor</div>
      <div class="text-gray-400">Business logic</div>
    </div>
    <div class="p-2 bg-gray-800 rounded text-center">
      <div class="font-bold">fraud-detect</div>
      <div class="text-gray-400">ML models</div>
    </div>
    <div class="p-2 bg-gray-800 rounded text-center">
      <div class="font-bold">compliance</div>
      <div class="text-gray-400">Regulations</div>
    </div>
    <div class="p-2 bg-gray-800 rounded text-center">
      <div class="font-bold">docs</div>
      <div class="text-gray-400">Architecture</div>
    </div>
  </div>
</div>

</div>

</div>

---
layout: center
---

# 📚 Knowledge Bases: Developer Experience

<div class="mt-8 flex flex-col items-center gap-4">

<div class="p-5 bg-green-900/40 rounded-lg w-full max-w-3xl">
  <div class="text-center">
    <div class="text-xl font-bold text-green-300 mb-3">Developer asks:</div>
    <div class="text-base text-gray-300 italic mb-4">"How does fraud detection integrate with payment flow?"</div>
    <div class="text-xl font-bold text-green-400">✅ Copilot answers with context from all 5 repos</div>
  </div>
</div>

<div class="mt-4 text-center text-base text-gray-400 italic">
Enterprise-tier: Query across entire systems, not single repositories
</div>

</div>

---

# 🔍 Code Review: AI-Specific Concerns

<div class="grid grid-cols-2 gap-6 mt-8">

<div>
  <h3 class="text-lg font-bold text-blue-400 mb-4">Traditional Reviews Focus</h3>
  <div class="space-y-2 text-sm">
    <div class="p-2 bg-gray-800 rounded">✓ Business logic correctness</div>
    <div class="p-2 bg-gray-800 rounded">✓ Code style & formatting</div>
    <div class="p-2 bg-gray-800 rounded">✓ Test coverage</div>
    <div class="p-2 bg-gray-800 rounded">✓ Performance</div>
  </div>
</div>

<div>
  <h3 class="text-lg font-bold text-red-400 mb-4">AI Code Requires Additional Checks</h3>
  <div class="space-y-2 text-sm">
    <div class="p-2 bg-red-900/30 rounded border-l-4 border-red-500">
      <div class="font-bold text-red-300">Over-engineering</div>
      <div class="text-xs text-gray-400">Enterprise patterns for simple problems</div>
    </div>
    <div class="p-2 bg-yellow-900/30 rounded border-l-4 border-yellow-500">
      <div class="font-bold text-yellow-300">Edge case blindness</div>
      <div class="text-xs text-gray-400">Misses boundary conditions</div>
    </div>
    <div class="p-2 bg-orange-900/30 rounded border-l-4 border-orange-500">
      <div class="font-bold text-orange-300">Security oversights</div>
      <div class="text-xs text-gray-400">Subtle vulnerabilities</div>
    </div>
    <div class="p-2 bg-purple-900/30 rounded border-l-4 border-purple-500">
      <div class="font-bold text-purple-300">Test gaming</div>
      <div class="text-xs text-gray-400">Tests pass but don't validate</div>
    </div>
  </div>
</div>

</div>

<div class="mt-6 p-5 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-lg text-center">
  <div class="text-xl font-bold text-white">Treat AI as junior developer: perfect syntax, limited judgment</div>
</div>

---

# 📊 Adoption Metrics & ROI Measurement

<div class="grid grid-cols-3 gap-4 mt-8">

<div class="p-4 bg-blue-900/40 rounded-lg border-2 border-blue-500">
  <div class="text-2xl mb-2">📈</div>
  <h3 class="text-sm font-bold text-blue-300 mb-3">Leading Indicators</h3>
  <div class="text-xs text-gray-300 space-y-1">
    <div>• Acceptance rate (55-65%)</div>
    <div>• Active users / seats</div>
    <div>• AI contribution %</div>
    <div>• Feature adoption</div>
  </div>
</div>

<div class="p-4 bg-green-900/40 rounded-lg border-2 border-green-500">
  <div class="text-2xl mb-2">⚡</div>
  <h3 class="text-sm font-bold text-green-300 mb-3">Productivity Metrics</h3>
  <div class="text-xs text-gray-300 space-y-1">
    <div>• PR velocity (+40%)</div>
    <div>• Review time (-33%)</div>
    <div>• Bug fix time (-26%)</div>
    <div>• Docs coverage (+50%)</div>
  </div>
</div>

<div class="p-4 bg-purple-900/40 rounded-lg border-2 border-purple-500">
  <div class="text-2xl mb-2">💰</div>
  <h3 class="text-sm font-bold text-purple-300 mb-3">Business Impact</h3>
  <div class="text-xs text-gray-300 space-y-1">
    <div>• Time to market ↓</div>
    <div>• Dev satisfaction ↑</div>
    <div>• Onboarding time (-38%)</div>
    <div>• Cost per feature (-31%)</div>
  </div>
</div>

</div>

<div class="mt-8 p-4 bg-gray-800 rounded-lg">
  <div class="text-sm font-bold text-gray-300 mb-3">Sample Dashboard (Weekly)</div>
  <div class="grid grid-cols-4 gap-3 text-xs">
    <div class="p-2 bg-blue-900/30 rounded text-center">
      <div class="font-bold text-blue-300">62%</div>
      <div class="text-gray-400">Acceptance</div>
      <div class="text-green-400">↑ from 47%</div>
    </div>
    <div class="p-2 bg-green-900/30 rounded text-center">
      <div class="font-bold text-green-300">142/200</div>
      <div class="text-gray-400">Active Users</div>
      <div class="text-yellow-400">71% util</div>
    </div>
    <div class="p-2 bg-purple-900/30 rounded text-center">
      <div class="font-bold text-purple-300">127</div>
      <div class="text-gray-400">PRs/week</div>
      <div class="text-green-400">↑ from 89</div>
    </div>
    <div class="p-2 bg-orange-900/30 rounded text-center">
      <div class="font-bold text-orange-300">12hrs</div>
      <div class="text-gray-400">Review time</div>
      <div class="text-green-400">↓ from 18</div>
    </div>
  </div>
</div>

<div class="mt-4 text-center text-sm text-gray-400 italic">
Data-driven ROI storytelling secures continued investment and expansion
</div>

---
layout: center
---

# 🚀 Self-Service Onboarding Kit

<div class="mt-8">

<div class="flex flex-col items-center gap-4">

<div class="p-4 bg-gray-800 rounded-lg w-96">
  <div class="font-bold text-gray-300 mb-3">📁 team-onboarding/</div>
  <div class="space-y-1 text-xs text-gray-400">
    <div>├── README.md <span class="text-blue-400">(30-min quick start)</span></div>
    <div>├── repository-setup.md</div>
    <div>├── custom-instructions.md</div>
    <div>├── skills-catalog.md</div>
    <div>├── review-checklist.md</div>
    <div>└── examples/</div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;├── good-prompts.md</div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;├── custom-agent-template/</div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;└── sample-repository/</div>
  </div>
</div>

<div class="grid grid-cols-3 gap-3 w-full mt-4">
  <div class="p-4 bg-blue-900/40 rounded-lg border-2 border-blue-500 text-center">
    <div class="text-2xl mb-2">1️⃣</div>
    <div class="text-sm font-bold text-blue-300">Read Guide</div>
    <div class="text-xs text-gray-400">10 minutes</div>
  </div>
  <div class="p-4 bg-green-900/40 rounded-lg border-2 border-green-500 text-center">
    <div class="text-2xl mb-2">2️⃣</div>
    <div class="text-sm font-bold text-green-300">Configure Repo</div>
    <div class="text-xs text-gray-400">10 minutes</div>
  </div>
  <div class="p-4 bg-purple-900/40 rounded-lg border-2 border-purple-500 text-center">
    <div class="text-2xl mb-2">3️⃣</div>
    <div class="text-sm font-bold text-purple-300">First Exercise</div>
    <div class="text-xs text-gray-400">10 minutes</div>
  </div>
</div>

</div>

</div>

---
layout: center
---

# 🚀 Onboarding: Scale & Quality Targets

<div class="mt-12 p-6 bg-gradient-to-r from-green-600 to-green-800 rounded-xl shadow-lg">
  <div class="text-center">
    <div class="text-2xl font-bold text-white mb-4">50 teams onboard simultaneously</div>
    <div class="text-lg text-green-200">without platform team bottleneck</div>
  </div>
</div>

<div class="mt-8 grid grid-cols-2 gap-6 max-w-2xl mx-auto">
  <div class="p-5 bg-blue-900/40 rounded-lg border-2 border-blue-500 text-center">
    <div class="text-3xl mb-2">< 2</div>
    <div class="text-sm text-gray-300">Support tickets per team</div>
  </div>
  <div class="p-5 bg-green-900/40 rounded-lg border-2 border-green-500 text-center">
    <div class="text-3xl mb-2">90%+</div>
    <div class="text-sm text-gray-300">Satisfaction rating</div>
  </div>
</div>

---

# 🏛️ Governance & Compliance Frameworks

<div class="grid grid-cols-3 gap-4 mt-8">

<div class="p-4 bg-blue-900/40 rounded-lg border-2 border-blue-500">
  <div class="text-2xl mb-2">🔐</div>
  <h3 class="text-sm font-bold text-blue-300 mb-3">Access Governance</h3>
  <div class="text-xs text-gray-300 space-y-1">
    <div>• Org policies by feature</div>
    <div>• Repo-level controls</div>
    <div>• Model access restrictions</div>
    <div>• Audit logging</div>
  </div>
</div>

<div class="p-4 bg-red-900/40 rounded-lg border-2 border-red-500">
  <div class="text-2xl mb-2">🛡️</div>
  <h3 class="text-sm font-bold text-red-300 mb-3">Content Filtering</h3>
  <div class="text-xs text-gray-300 space-y-1">
    <div>• Block vulnerabilities</div>
    <div>• Filter copyrighted code</div>
    <div>• Approved libraries only</div>
    <div>• Prevent secret exposure</div>
  </div>
</div>

<div class="p-4 bg-purple-900/40 rounded-lg border-2 border-purple-500">
  <div class="text-2xl mb-2">📋</div>
  <h3 class="text-sm font-bold text-purple-300 mb-3">Data Governance</h3>
  <div class="text-xs text-gray-300 space-y-1">
    <div>• Training contribution</div>
    <div>• Data residency (EU/US)</div>
    <div>• Retention policies</div>
    <div>• GDPR/CCPA compliance</div>
  </div>
</div>

</div>

<div class="mt-6 text-center text-sm text-gray-400 italic">
Transform compliance from manual checklist to automated enforcement
</div>

---

# 🏛️ Compliance Automation Examples

<div class="mt-8">
  <h3 class="text-xl font-bold text-green-400 mb-6 text-center">Automated Validation Patterns</h3>

  <div class="grid grid-cols-2 gap-6">
    <div class="p-5 bg-gray-800 rounded-lg">
      <div class="text-base font-bold text-green-300 mb-3">@security-validator agent</div>
      <div class="text-sm text-gray-400 space-y-2">
        <div>✓ OWASP Top 10 vulnerabilities</div>
        <div>✓ Hardcoded secrets detection</div>
        <div>✓ Unapproved dependencies</div>
        <div>✓ Data exposure risks</div>
      </div>
    </div>
    <div class="p-5 bg-gray-800 rounded-lg">
      <div class="text-base font-bold text-blue-300 mb-3">hipaa-compliance-check skill</div>
      <div class="text-sm text-gray-400 space-y-2">
        <div>✓ PHI encryption requirements</div>
        <div>✓ Audit logging completeness</div>
        <div>✓ Access control enforcement</div>
        <div>✓ Data retention policies</div>
      </div>
    </div>
  </div>
</div>

---
layout: center
---

# 🤝 Federated Governance Model

<div class="mt-8 flex flex-col items-center gap-4">

<div class="p-5 bg-blue-900/60 rounded-lg border-2 border-blue-400 w-96 text-center">
  <div class="text-2xl mb-2">🏢</div>
  <div class="font-bold text-blue-300">Platform Team</div>
  <div class="text-xs text-gray-400 mt-2">
    Org standards • Shared libraries • Compliance • Metrics
  </div>
</div>

<div class="flex gap-8 items-center">
  <div class="text-2xl text-gray-400">←</div>
  <div class="text-sm text-gray-400">Governance & Support</div>
  <div class="text-2xl text-gray-400">→</div>
</div>

<div class="grid grid-cols-4 gap-3 w-full">
  <div class="p-3 bg-green-900/40 rounded-lg border border-green-500 text-center">
    <div class="text-2xl mb-1">👥</div>
    <div class="text-xs font-bold text-green-300">Team A</div>
    <div class="text-xs text-gray-400">Custom configs</div>
  </div>
  <div class="p-3 bg-green-900/40 rounded-lg border border-green-500 text-center">
    <div class="text-2xl mb-1">👥</div>
    <div class="text-xs font-bold text-green-300">Team B</div>
    <div class="text-xs text-gray-400">Domain skills</div>
  </div>
  <div class="p-3 bg-green-900/40 rounded-lg border border-green-500 text-center">
    <div class="text-2xl mb-1">👥</div>
    <div class="text-xs font-bold text-green-300">Team C</div>
    <div class="text-xs text-gray-400">Best practices</div>
  </div>
  <div class="p-3 bg-green-900/40 rounded-lg border border-green-500 text-center">
    <div class="text-2xl mb-1">👥</div>
    <div class="text-xs font-bold text-green-300">Team D</div>
    <div class="text-xs text-gray-400">Innovations</div>
  </div>
</div>

</div>

---
layout: center
---

# 🤝 Community of Practice

<div class="mt-12 flex flex-col items-center gap-6">

<div class="flex gap-8 items-center">
  <div class="text-sm text-gray-400">Teams contribute patterns</div>
  <div class="text-3xl text-gray-400">↑</div>
</div>

<div class="p-6 bg-purple-900/40 rounded-lg border-2 border-purple-500 w-96 text-center">
  <div class="text-3xl mb-3">🎓</div>
  <div class="text-xl font-bold text-purple-300 mb-3">Community of Practice</div>
  <div class="text-sm text-gray-400 mt-3">
    Monthly sessions • Skill catalog • Slack channel • Metrics reviews
  </div>
</div>

<div class="mt-8 text-center text-base text-gray-400 italic max-w-2xl">
Balance central governance with team autonomy—consistency AND velocity
</div>

</div>

---

# 📈 The Knowledge Multiplication Effect

<div class="mt-8">

<div class="grid grid-cols-2 gap-8">

<div>
  <h3 class="text-lg font-bold text-blue-400 mb-4">Initial Investment</h3>
  <div class="space-y-2 text-sm">
    <div class="p-3 bg-gray-800 rounded">
      <div class="font-bold text-blue-300">40 hours</div>
      <div class="text-xs text-gray-400">Organization instructions</div>
    </div>
    <div class="p-3 bg-gray-800 rounded">
      <div class="font-bold text-green-300">60 hours</div>
      <div class="text-xs text-gray-400">Shared skill library</div>
    </div>
    <div class="p-3 bg-gray-800 rounded">
      <div class="font-bold text-purple-300">80 hours</div>
      <div class="text-xs text-gray-400">Onboarding kit</div>
    </div>
    <div class="p-3 bg-blue-900/40 rounded border-2 border-blue-500">
      <div class="font-bold text-blue-300">180 hours total</div>
      <div class="text-xs text-gray-400">Platform team investment</div>
    </div>
  </div>
</div>

<div>
  <h3 class="text-lg font-bold text-green-400 mb-4">Returns at Scale (200 devs)</h3>
  <div class="space-y-2 text-sm">
    <div class="p-3 bg-green-900/30 rounded">
      <div class="font-bold text-green-300">400 hours saved</div>
      <div class="text-xs text-gray-400">Org instructions (2hrs × 200)</div>
    </div>
    <div class="p-3 bg-green-900/30 rounded">
      <div class="font-bold text-green-300">1,000 hours saved</div>
      <div class="text-xs text-gray-400">Shared skills (5hrs × 200)</div>
    </div>
    <div class="p-3 bg-green-900/30 rounded">
      <div class="font-bold text-green-300">1,500 hours saved</div>
      <div class="text-xs text-gray-400">Onboarding (7.5hrs × 200)</div>
    </div>
    <div class="p-3 bg-green-900/40 rounded border-2 border-green-500">
      <div class="font-bold text-green-300">2,900 hours saved</div>
      <div class="text-xs text-yellow-300">16x ROI in Year 1</div>
    </div>
  </div>
</div>

</div>

</div>

---

# 📈 Knowledge Multiplication: The Bottom Line

<div class="mt-12 p-6 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-lg text-center">
  <div class="text-2xl font-bold text-white mb-4">Knowledge stops fragmenting, starts compounding systematically</div>
  <div class="text-lg text-blue-200 mt-3">Every new developer benefits automatically • ROI increases with org growth</div>
</div>

---

# 🗺️ Migration Strategy: Pilot to Enterprise

<div class="grid grid-cols-4 gap-3 mt-8">

<div class="p-4 bg-blue-900/40 rounded-lg border-2 border-blue-500">
  <div class="text-2xl mb-2">1️⃣</div>
  <h3 class="text-sm font-bold text-blue-300 mb-2">Pilot (M1-3)</h3>
  <div class="text-xs text-gray-300 space-y-1">
    <div>• 2-3 enthusiastic teams</div>
    <div>• Build initial artifacts</div>
    <div>• Validate ROI</div>
    <div class="pt-2 font-bold text-blue-400">Target:</div>
    <div>60%+ acceptance rate</div>
  </div>
</div>

<div class="p-4 bg-green-900/40 rounded-lg border-2 border-green-500">
  <div class="text-2xl mb-2">2️⃣</div>
  <h3 class="text-sm font-bold text-green-300 mb-2">Expand (M4-6)</h3>
  <div class="text-xs text-gray-300 space-y-1">
    <div>• Scale to 10-15 teams</div>
    <div>• Org instructions</div>
    <div>• Metrics dashboard</div>
    <div class="pt-2 font-bold text-green-400">Target:</div>
    <div>80%+ seat utilization</div>
  </div>
</div>

<div class="p-4 bg-purple-900/40 rounded-lg border-2 border-purple-500">
  <div class="text-2xl mb-2">3️⃣</div>
  <h3 class="text-sm font-bold text-purple-300 mb-2">Org-Wide (M7-12)</h3>
  <div class="text-xs text-gray-300 space-y-1">
    <div>• All engineering teams</div>
    <div>• Mature governance</div>
    <div>• Knowledge Bases</div>
    <div class="pt-2 font-bold text-purple-400">Target:</div>
    <div>90%+ dev coverage</div>
  </div>
</div>

<div class="p-4 bg-orange-900/40 rounded-lg border-2 border-orange-500">
  <div class="text-2xl mb-2">4️⃣</div>
  <h3 class="text-sm font-bold text-orange-300 mb-2">Optimize (Ongoing)</h3>
  <div class="text-xs text-gray-300 space-y-1">
    <div>• Continuous improvement</div>
    <div>• Advanced patterns</div>
    <div>• Cross-functional</div>
    <div class="pt-2 font-bold text-orange-400">Target:</div>
    <div>Sustained productivity</div>
  </div>
</div>

</div>

<div class="mt-8 p-4 bg-red-900/30 rounded-lg border-l-4 border-red-500">
  <div class="text-red-300 font-bold mb-2">⚠️ Common Mistake</div>
  <div class="text-sm text-gray-300">
    Skipping pilot to deploy organization-wide immediately → Poor adoption due to lack of proven patterns
  </div>
</div>

<div class="mt-4 text-center text-sm text-gray-400 italic">
12-month timeline balances urgency with learning—200+ devs, high satisfaction, measurable ROI
</div>

---
layout: center
---

# 🚫 Common Pitfalls & Anti-Patterns

<div class="grid grid-cols-2 gap-6 mt-8">

<div class="space-y-3">
  <div class="p-4 bg-red-900/30 rounded-lg border-l-4 border-red-500">
    <div class="text-red-400 font-bold mb-2">❌ Over-standardization</div>
    <div class="text-xs text-gray-300">Mandate identical configs for all teams</div>
    <div class="text-xs text-green-400 mt-2">✅ Baseline + flexibility</div>
  </div>

  <div class="p-4 bg-red-900/30 rounded-lg border-l-4 border-red-500">
    <div class="text-red-400 font-bold mb-2">❌ Under-governance</div>
    <div class="text-xs text-gray-300">No org policies, teams reinvent everything</div>
    <div class="text-xs text-green-400 mt-2">✅ Federated model</div>
  </div>

  <div class="p-4 bg-red-900/30 rounded-lg border-l-4 border-red-500">
    <div class="text-red-400 font-bold mb-2">❌ Metrics theater</div>
    <div class="text-xs text-gray-300">Track 50 metrics, take no action</div>
    <div class="text-xs text-green-400 mt-2">✅ 5-8 actionable metrics</div>
  </div>
</div>

<div class="space-y-3">
  <div class="p-4 bg-yellow-900/30 rounded-lg border-l-4 border-yellow-500">
    <div class="text-yellow-400 font-bold mb-2">⚠️ Low acceptance (<45%)</div>
    <div class="text-xs text-gray-300">Fix: Interactive training, prompt examples</div>
  </div>

  <div class="p-4 bg-yellow-900/30 rounded-lg border-l-4 border-yellow-500">
    <div class="text-yellow-400 font-bold mb-2">⚠️ High support (>5 tickets)</div>
    <div class="text-xs text-gray-300">Fix: Improve onboarding, add FAQs</div>
  </div>

  <div class="p-4 bg-yellow-900/30 rounded-lg border-l-4 border-yellow-500">
    <div class="text-yellow-400 font-bold mb-2">⚠️ Stalled adoption (<60%)</div>
    <div class="text-xs text-gray-300">Fix: ROI case studies, exec sponsorship</div>
  </div>
</div>

</div>

<div class="mt-6 text-center text-sm text-gray-400 italic">
Warning signs are measurable—identify issues early through metrics, adjust proactively
</div>

---
layout: center
---

# 💡 Key Takeaways

<div class="mt-8 grid grid-cols-2 gap-4 text-sm">

<div class="p-4 bg-blue-900/30 rounded-lg border-l-4 border-blue-400">
  <div class="font-bold text-blue-300 mb-2">🏢 Organization-wide instructions</div>
  <div class="text-gray-300">Define security, frameworks, quality once → apply to 500+ developers automatically</div>
</div>

<div class="p-4 bg-green-900/30 rounded-lg border-l-4 border-green-400">
  <div class="font-bold text-green-300 mb-2">🎓 Shared skill libraries</div>
  <div class="text-gray-300">Institutional knowledge becomes executable code, updates centrally, scales infinitely</div>
</div>

<div class="p-4 bg-purple-900/30 rounded-lg border-l-4 border-purple-400">
  <div class="font-bold text-purple-300 mb-2">📚 Knowledge Bases (Enterprise)</div>
  <div class="text-gray-300">Copilot answers questions spanning microservices, infrastructure, docs repos</div>
</div>

<div class="p-4 bg-orange-900/30 rounded-lg border-l-4 border-orange-400">
  <div class="font-bold text-orange-300 mb-2">📊 Metrics justify investment</div>
  <div class="text-gray-300">Acceptance rate, productivity gains, business impact create data-driven ROI</div>
</div>

<div class="p-4 bg-cyan-900/30 rounded-lg border-l-4 border-cyan-400">
  <div class="font-bold text-cyan-300 mb-2">🚀 Self-service onboarding</div>
  <div class="text-gray-300">30-minute quick starts enable 50+ teams without platform bottleneck</div>
</div>

<div class="p-4 bg-red-900/30 rounded-lg border-l-4 border-red-400">
  <div class="font-bold text-red-300 mb-2">🤝 Federated governance</div>
  <div class="text-gray-300">Central standards + team autonomy + community sharing = consistency AND velocity</div>
</div>

</div>

<div class="mt-8 p-5 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-lg text-center">
  <div class="text-2xl font-bold text-white">180-hour platform investment → 2,900+ hours saved → 16x ROI</div>
  <div class="text-lg text-blue-200 mt-2">Knowledge multiplies rather than fragments</div>
</div>

---

# 🎯 Getting Started: This Week

<div class="mt-8">

<h3 class="text-xl font-bold text-blue-400 mb-6 text-center">Immediate Actions (Week 1)</h3>

<div class="space-y-4 max-w-3xl mx-auto">
  <div class="p-4 bg-blue-900/30 rounded-lg flex items-start gap-4">
    <span class="text-2xl">1️⃣</span>
    <div>
      <div class="font-bold text-blue-300 text-base">Assess current state</div>
      <div class="text-sm text-gray-400 mt-1">Survey teams for existing configs & pain points</div>
    </div>
  </div>

  <div class="p-4 bg-blue-900/30 rounded-lg flex items-start gap-4">
    <span class="text-2xl">2️⃣</span>
    <div>
      <div class="font-bold text-blue-300 text-base">Define org instructions</div>
      <div class="text-sm text-gray-400 mt-1">Security, frameworks, coding standards</div>
    </div>
  </div>

  <div class="p-4 bg-blue-900/30 rounded-lg flex items-start gap-4">
    <span class="text-2xl">3️⃣</span>
    <div>
      <div class="font-bold text-blue-300 text-base">Build metrics baseline</div>
      <div class="text-sm text-gray-400 mt-1">Acceptance rate, active users, PR velocity</div>
    </div>
  </div>
</div>

</div>

---

# 🎯 Getting Started: Next 4 Weeks

<div class="mt-8">

<h3 class="text-xl font-bold text-green-400 mb-6 text-center">Building Foundation (Weeks 2-5)</h3>

<div class="space-y-4 max-w-3xl mx-auto">
  <div class="p-4 bg-green-900/30 rounded-lg flex items-start gap-4">
    <span class="text-2xl">4️⃣</span>
    <div>
      <div class="font-bold text-green-300 text-base">Create onboarding template</div>
      <div class="text-sm text-gray-400 mt-1">30-min quick start with working examples</div>
    </div>
  </div>

  <div class="p-4 bg-green-900/30 rounded-lg flex items-start gap-4">
    <span class="text-2xl">5️⃣</span>
    <div>
      <div class="font-bold text-green-300 text-base">Establish governance</div>
      <div class="text-sm text-gray-400 mt-1">Model policies, content filtering, audit</div>
    </div>
  </div>

  <div class="p-4 bg-green-900/30 rounded-lg flex items-start gap-4">
    <span class="text-2xl">6️⃣</span>
    <div>
      <div class="font-bold text-green-300 text-base">Pilot with 2-3 teams</div>
      <div class="text-sm text-gray-400 mt-1">Validate approach, document results</div>
    </div>
  </div>
</div>

<div class="mt-8 text-center text-base text-gray-400 italic">
6-month timeline achieves full organizational adoption with proven ROI
</div>

</div>

---

# 📚 Resources & Documentation

<div class="grid grid-cols-2 gap-8 mt-8">

<div>
  <h3 class="text-lg font-bold text-blue-400 mb-4">Official Documentation</h3>
  <div class="space-y-2 text-sm text-gray-300">
    <div class="p-2 bg-gray-800 rounded">
      <a href="https://docs.github.com/en/copilot/managing-copilot" class="text-blue-400">
        Managing Copilot in Organizations
      </a>
    </div>
    <div class="p-2 bg-gray-800 rounded">
      <a href="https://docs.github.com/en/copilot/customizing-copilot/adding-custom-instructions-for-github-copilot" class="text-blue-400">
        Organization-wide Custom Instructions
      </a>
    </div>
    <div class="p-2 bg-gray-800 rounded">
      <a href="https://docs.github.com/en/enterprise-cloud@latest/copilot/github-copilot-enterprise/copilot-knowledge-bases" class="text-blue-400">
        Copilot Knowledge Bases (Enterprise)
      </a>
    </div>
    <div class="p-2 bg-gray-800 rounded">
      <a href="https://docs.github.com/en/rest/copilot/copilot-metrics" class="text-blue-400">
        Copilot Metrics API
      </a>
    </div>
  </div>
</div>

<div>
  <h3 class="text-lg font-bold text-green-400 mb-4">Best Practices & Guides</h3>
  <div class="space-y-2 text-sm text-gray-300">
    <div class="p-2 bg-gray-800 rounded">
      <a href="https://github.blog/developer-skills/github/how-to-scale-github-copilot-across-your-organization/" class="text-green-400">
        Scaling Copilot Adoption (GitHub Blog)
      </a>
    </div>
    <div class="p-2 bg-gray-800 rounded">
      <a href="https://resources.github.com/copilot/enterprise-adoption-guide/" class="text-green-400">
        Enterprise Adoption Guide
      </a>
    </div>
    <div class="p-2 bg-gray-800 rounded">
      <a href="https://docs.github.com/en/copilot/using-github-copilot/best-practices-for-using-github-copilot" class="text-green-400">
        Code Review Best Practices
      </a>
    </div>
  </div>

  <h3 class="text-lg font-bold text-purple-400 mb-4 mt-6">Related Tech Talks</h3>
  <div class="space-y-2 text-sm text-gray-300">
    <div class="p-2 bg-gray-800 rounded">
      <span class="text-purple-400">Agentic SDLC:</span> Background agents & autonomous workflows
    </div>
    <div class="p-2 bg-gray-800 rounded">
      <span class="text-purple-400">GitHub Copilot Web:</span> Multi-interface AI assistance
    </div>
  </div>
</div>

</div>

---
layout: end
---

# Questions?

<div class="text-center mt-12">
  <div class="text-6xl mb-8">🚀</div>
  <div class="text-2xl font-bold mb-4">
    Transform Individual Expertise into<br>Organizational Capability
  </div>
  <div class="text-lg text-gray-400">
    Enterprise patterns for scaling GitHub Copilot adoption
  </div>
</div>

<div class="abs-br m-6 text-sm opacity-50">
  Thank you!
</div>
