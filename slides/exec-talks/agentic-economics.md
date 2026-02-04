---
theme: default
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Agentic Economics
  Making the Business Case for AI Agent Adoption
  CopilotTraining Executive Talk
drawings:
  persist: false
transition: slide-left
title: Agentic Economics - Making the Business Case
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
    The Agentic Economics
  </h1>

  <!-- Pill subtitle -->
  <div class="mt-4 relative z-10">
    <span class="px-6 py-2 bg-gradient-to-r from-blue-600/80 to-cyan-600/80 rounded-full text-white text-xl font-medium shadow-lg shadow-blue-500/25">
      Making the Business Case
    </span>
  </div>

  <!-- Decorative line -->
  <div class="mt-8 w-32 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full relative z-10"></div>
</div>

<div class="abs-br m-6 flex gap-2">
  <span class="text-sm opacity-50">CopilotTraining Executive Talk</span>
</div>

---

# The $2/Hour Engineer

<div class="p-8 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-lg text-center mb-8">
  <div class="text-4xl font-bold text-white mb-2">$2/hour</div>
  <div class="text-xl text-blue-100">Fully-engaged AI agent cost</div>
</div>

<div class="grid grid-cols-2 gap-6 text-sm">
  <div class="p-4 bg-gray-800 rounded-lg">
    <div class="text-2xl mb-2">👨‍💻</div>
    <div class="text-white font-bold">Junior Developer (US)</div>
    <div class="text-gray-400">$75-100/hour</div>
    <div class="text-red-400 mt-2">37-50x more expensive</div>
  </div>

  <div class="p-4 bg-gray-800 rounded-lg">
    <div class="text-2xl mb-2">🎯</div>
    <div class="text-white font-bold">Senior Developer (US)</div>
    <div class="text-gray-400">$125-175/hour</div>
    <div class="text-red-400 mt-2">62-87x more expensive</div>
  </div>

  <div class="p-4 bg-gray-800 rounded-lg">
    <div class="text-2xl mb-2">⭐</div>
    <div class="text-white font-bold">Staff Engineer (US)</div>
    <div class="text-gray-400">$175-250/hour</div>
    <div class="text-red-400 mt-2">87-125x more expensive</div>
  </div>

  <div class="p-4 bg-gray-800 rounded-lg">
    <div class="text-2xl mb-2">🌍</div>
    <div class="text-white font-bold">Offshore Developer</div>
    <div class="text-gray-400">$35-75/hour</div>
    <div class="text-red-400 mt-2">17-37x more expensive</div>
  </div>
</div>

<div class="mt-6 p-4 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-lg text-center">
  <div class="text-xl font-bold text-white">The question isn't whether agents are cheaper.</div>
  <div class="text-xl font-bold text-white">The question is: what work can we move to $2/hour?</div>
</div>

---

# The Labor Cost Spectrum

<div class="flex flex-col gap-4">

<div class="p-6 bg-blue-900/60 rounded-lg border-l-4 border-blue-400">
  <div class="flex items-center gap-3 mb-3">
    <span class="text-3xl">💰</span>
    <h3 class="text-xl font-bold text-blue-300">HIGH-VALUE WORK</h3>
  </div>
  <div class="text-sm text-gray-300 ml-12">
    <div class="mb-1">• Architecture decisions • Strategic planning • Complex debugging</div>
    <div class="text-blue-400 font-semibold">Must stay human • $150-250/hr is appropriate</div>
  </div>
</div>

<div class="p-6 bg-yellow-900/40 rounded-lg border-l-4 border-yellow-500">
  <div class="flex items-center gap-3 mb-3">
    <span class="text-3xl">⚙️</span>
    <h3 class="text-xl font-bold text-yellow-400">ROUTINE WORK</h3>
  </div>
  <div class="text-sm text-gray-300 ml-12">
    <div class="mb-1">• Code review • Test writing • Bug investigation • Documentation</div>
    <div class="text-yellow-400 font-semibold">Could be $2/hr • Pattern-based • Context-gathering</div>
  </div>
</div>

<div class="p-6 bg-green-900/60 rounded-lg border-l-4 border-green-400">
  <div class="flex items-center gap-3 mb-3">
    <span class="text-3xl">🔁</span>
    <h3 class="text-xl font-bold text-green-300">PURE TOIL</h3>
  </div>
  <div class="text-sm text-gray-300 ml-12">
    <div class="mb-1">• Issue triage • Compliance checking • Status reports • Audit prep</div>
    <div class="text-green-400 font-semibold">Best at $2/hr • Rule-following • Pattern matching</div>
  </div>
</div>

</div>

<div class="mt-6 p-4 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-lg text-center">
  <div class="text-lg font-bold text-white">The arbitrage: 98% cost reduction on routine work</div>
  <div class="text-sm text-blue-100 mt-1">But we cannot capture this without investment</div>
</div>

---

# Why Savings Don't Happen Automatically

<div class="grid grid-cols-2 gap-4 text-xs">

<div class="p-4 bg-red-900/40 rounded-lg border-2 border-red-500">
  <div class="flex items-center gap-2 mb-2">
    <span class="text-2xl">🚧</span>
    <div class="text-red-400 font-bold">No Instrumentation</div>
  </div>
  <div class="text-gray-300">
    Without automated tests and quality gates, teams can't verify output
  </div>
  <div class="text-red-400 mt-2">→ No time saved</div>
</div>

<div class="p-4 bg-red-900/40 rounded-lg border-2 border-red-500">
  <div class="flex items-center gap-2 mb-2">
    <span class="text-2xl">🧠</span>
    <div class="text-red-400 font-bold">Tribal Knowledge</div>
  </div>
  <div class="text-gray-300">
    Context lives in people's heads, not documentation
  </div>
  <div class="text-red-400 mt-2">→ Rework required</div>
</div>

<div class="p-4 bg-red-900/40 rounded-lg border-2 border-red-500">
  <div class="flex items-center gap-2 mb-2">
    <span class="text-2xl">⏸️</span>
    <div class="text-red-400 font-bold">Approval Bottlenecks</div>
  </div>
  <div class="text-gray-300">
    Agent finishes in 30 min, waits 2 days in review queue
  </div>
  <div class="text-red-400 mt-2">→ Total time unchanged</div>
</div>

<div class="p-4 bg-red-900/40 rounded-lg border-2 border-red-500">
  <div class="flex items-center gap-2 mb-2">
    <span class="text-2xl">❓</span>
    <div class="text-red-400 font-bold">Undefined Boundaries</div>
  </div>
  <div class="text-gray-300">
    Every task requires negotiating permissions and guardrails
  </div>
  <div class="text-red-400 mt-2">→ Paralysis</div>
</div>

<div class="p-4 bg-red-900/40 rounded-lg border-2 border-red-500">
  <div class="flex items-center gap-2 mb-2">
    <span class="text-2xl">🔧</span>
    <div class="text-red-400 font-bold">Fragmented Tooling</div>
  </div>
  <div class="text-gray-300">
    Context scattered across Jira, Slack, Confluence, GitHub
  </div>
  <div class="text-red-400 mt-2">→ Incomplete output</div>
</div>

</div>

<div class="mt-6 p-4 bg-gradient-to-r from-red-900/40 to-gray-800 rounded-lg text-center">
  <span class="text-white font-bold text-lg">⚠️ Most organizations are not ready to capture agentic economics</span>
</div>

---

# The 20% at $2/Hour Goal

<div class="p-6 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-lg mb-6">
  <div class="text-2xl font-bold text-white text-center">
    "We want 20% of our engineering labor to cost $2/hour within 18 months."
  </div>
</div>

<div class="grid grid-cols-2 gap-8">

<div>
  <h3 class="text-xl font-bold text-blue-400 mb-4">📊 The Math (50-person team)</h3>
  <div class="space-y-2 text-sm">
    <div class="p-3 bg-gray-800 rounded-lg">
      <div class="text-gray-400">Total labor hours/year</div>
      <div class="text-white font-bold">100,000 hours</div>
    </div>
    <div class="p-3 bg-gray-800 rounded-lg">
      <div class="text-gray-400">Current cost @ $150/hr</div>
      <div class="text-white font-bold">$15M/year</div>
    </div>
    <div class="p-3 bg-blue-900/60 rounded-lg border-2 border-blue-400">
      <div class="text-blue-300">20% target (20K hours)</div>
      <div class="text-white font-bold">$40K agent cost</div>
      <div class="text-gray-400">vs. $3M human cost</div>
    </div>
    <div class="p-3 bg-green-900/60 rounded-lg border-2 border-green-400">
      <div class="text-green-300">Annual savings</div>
      <div class="text-white font-bold text-xl">$2,960,000</div>
    </div>
  </div>
</div>

<div>
  <h3 class="text-xl font-bold text-blue-400 mb-4">💼 The Investment</h3>
  <div class="space-y-2 text-sm">
    <div class="p-2 bg-gray-800 rounded-lg flex justify-between">
      <span class="text-gray-300">Instrumentation</span>
      <span class="text-white">$350-600K</span>
    </div>
    <div class="p-2 bg-gray-800 rounded-lg flex justify-between">
      <span class="text-gray-300">Knowledge Codification</span>
      <span class="text-white">$125-250K</span>
    </div>
    <div class="p-2 bg-gray-800 rounded-lg flex justify-between">
      <span class="text-gray-300">Platform Engineering</span>
      <span class="text-white">$250-500K</span>
    </div>
    <div class="p-2 bg-gray-800 rounded-lg flex justify-between">
      <span class="text-gray-300">Organizational Change</span>
      <span class="text-white">$125-250K</span>
    </div>
    <div class="mt-4 p-3 bg-blue-900/60 rounded-lg border-2 border-blue-400">
      <div class="flex justify-between text-base">
        <span class="text-blue-300 font-bold">Total Investment</span>
        <span class="text-white font-bold">$800K-1.6M</span>
      </div>
    </div>
    <div class="p-3 bg-green-900/60 rounded-lg border-2 border-green-400">
      <div class="text-green-300 text-center font-bold">Payback: 4-8 months</div>
      <div class="text-white text-center font-bold">3-Year ROI: 450-900%</div>
    </div>
  </div>
</div>

</div>

---

# Attack Plan: Tier 1 Quick Wins

<div class="text-sm font-semibold text-gray-400 mb-4">Minimal infrastructure • Immediate value • 0-3 months</div>

<div class="grid grid-cols-3 gap-4">

<div class="p-4 bg-green-900/30 rounded-lg border-2 border-green-500">
  <div class="text-3xl mb-2">🔍</div>
  <div class="text-green-400 font-bold mb-2">Issue Triage</div>
  <div class="text-xs space-y-1">
    <div class="flex justify-between">
      <span class="text-gray-400">Current:</span>
      <span class="text-white">$75/issue</span>
    </div>
    <div class="flex justify-between">
      <span class="text-gray-400">Agent:</span>
      <span class="text-green-300">$0.17/issue</span>
    </div>
    <div class="mt-2 pt-2 border-t border-gray-700">
      <div class="text-green-300 font-bold text-center">$90K/year</div>
    </div>
  </div>
</div>

<div class="p-4 bg-green-900/30 rounded-lg border-2 border-green-500">
  <div class="text-3xl mb-2">📝</div>
  <div class="text-green-400 font-bold mb-2">PR Descriptions</div>
  <div class="text-xs space-y-1">
    <div class="flex justify-between">
      <span class="text-gray-400">Current:</span>
      <span class="text-white">$37.50/PR</span>
    </div>
    <div class="flex justify-between">
      <span class="text-gray-400">Agent:</span>
      <span class="text-green-300">$0.07/PR</span>
    </div>
    <div class="mt-2 pt-2 border-t border-gray-700">
      <div class="text-green-300 font-bold text-center">$90K/year</div>
    </div>
  </div>
</div>

<div class="p-4 bg-green-900/30 rounded-lg border-2 border-green-500">
  <div class="text-3xl mb-2">🔄</div>
  <div class="text-green-400 font-bold mb-2">Dependency Updates</div>
  <div class="text-xs space-y-1">
    <div class="flex justify-between">
      <span class="text-gray-400">Current:</span>
      <span class="text-white">$300/update</span>
    </div>
    <div class="flex justify-between">
      <span class="text-gray-400">Agent:</span>
      <span class="text-green-300">$0.50/update</span>
    </div>
    <div class="mt-2 pt-2 border-t border-gray-700">
      <div class="text-green-300 font-bold text-center">$72K/year</div>
    </div>
  </div>
</div>

</div>

<div class="mt-6 p-5 bg-gradient-to-r from-green-600 to-green-800 rounded-xl shadow-lg text-center">
  <div class="text-2xl font-bold text-white">Tier 1 Total: $251K/year</div>
  <div class="text-green-100 mt-1">With minimal infrastructure investment</div>
</div>

---

# Attack Plan: Tier 2 Medium Effort

<div class="text-sm font-semibold text-gray-400 mb-4">Some infrastructure investment • 3-6 months</div>

<div class="grid grid-cols-3 gap-4">

<div class="p-4 bg-blue-900/40 rounded-lg border-2 border-blue-500">
  <div class="text-3xl mb-2">🧪</div>
  <div class="text-blue-400 font-bold mb-2">Test Generation</div>
  <div class="text-xs space-y-1">
    <div class="flex justify-between">
      <span class="text-gray-400">Current:</span>
      <span class="text-white">$600/feature</span>
    </div>
    <div class="flex justify-between">
      <span class="text-gray-400">Agent:</span>
      <span class="text-blue-300">$1/feature</span>
    </div>
    <div class="mt-2 pt-2 border-t border-gray-700">
      <div class="text-blue-300 font-bold text-center">$216K/year</div>
    </div>
  </div>
</div>

<div class="p-4 bg-blue-900/40 rounded-lg border-2 border-blue-500">
  <div class="text-3xl mb-2">📋</div>
  <div class="text-blue-400 font-bold mb-2">Compliance Checking</div>
  <div class="text-xs space-y-1">
    <div class="flex justify-between">
      <span class="text-gray-400">Current:</span>
      <span class="text-white">$600/PR</span>
    </div>
    <div class="flex justify-between">
      <span class="text-gray-400">Agent:</span>
      <span class="text-blue-300">$0.33/PR</span>
    </div>
    <div class="mt-2 pt-2 border-t border-gray-700">
      <div class="text-blue-300 font-bold text-center">$360K/year</div>
    </div>
  </div>
</div>

<div class="p-4 bg-blue-900/40 rounded-lg border-2 border-blue-500">
  <div class="text-3xl mb-2">📚</div>
  <div class="text-blue-400 font-bold mb-2">Documentation Sync</div>
  <div class="text-xs space-y-1">
    <div class="flex justify-between">
      <span class="text-gray-400">Current:</span>
      <span class="text-white">$1,200/week</span>
    </div>
    <div class="flex justify-between">
      <span class="text-gray-400">Agent:</span>
      <span class="text-blue-300">$2/week</span>
    </div>
    <div class="mt-2 pt-2 border-t border-gray-700">
      <div class="text-blue-300 font-bold text-center">$62K/year</div>
    </div>
  </div>
</div>

</div>

<div class="mt-6 p-5 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-lg text-center">
  <div class="text-2xl font-bold text-white">Tier 2 Total: $638K/year</div>
  <div class="text-blue-100 mt-1">Requires test framework, coverage tools, CI integration</div>
</div>

---

# Attack Plan: Tier 3 High Investment

<div class="text-sm font-semibold text-gray-400 mb-4">Significant infrastructure • Largest returns • 6-12 months</div>

<div class="grid grid-cols-3 gap-4">

<div class="p-4 bg-purple-900/40 rounded-lg border-2 border-purple-500">
  <div class="text-3xl mb-2">💻</div>
  <div class="text-purple-400 font-bold mb-2">Code Implementation</div>
  <div class="text-xs space-y-1">
    <div class="flex justify-between">
      <span class="text-gray-400">Current:</span>
      <span class="text-white">$1,200/feature</span>
    </div>
    <div class="flex justify-between">
      <span class="text-gray-400">Agent:</span>
      <span class="text-purple-300">$154/feature</span>
    </div>
    <div class="mt-2 pt-2 border-t border-gray-700">
      <div class="text-purple-300 font-bold text-center">$502K/year</div>
    </div>
  </div>
</div>

<div class="p-4 bg-purple-900/40 rounded-lg border-2 border-purple-500">
  <div class="text-3xl mb-2">🐛</div>
  <div class="text-purple-400 font-bold mb-2">Bug Investigation</div>
  <div class="text-xs space-y-1">
    <div class="flex justify-between">
      <span class="text-gray-400">Current:</span>
      <span class="text-white">$900/bug</span>
    </div>
    <div class="flex justify-between">
      <span class="text-gray-400">Agent:</span>
      <span class="text-purple-300">$77/bug</span>
    </div>
    <div class="mt-2 pt-2 border-t border-gray-700">
      <div class="text-purple-300 font-bold text-center">$593K/year</div>
    </div>
  </div>
</div>

<div class="p-4 bg-purple-900/40 rounded-lg border-2 border-purple-500">
  <div class="text-3xl mb-2">🔄</div>
  <div class="text-purple-400 font-bold mb-2">Refactoring</div>
  <div class="text-xs space-y-1">
    <div class="flex justify-between">
      <span class="text-gray-400">Current:</span>
      <span class="text-white">$2,400/refactor</span>
    </div>
    <div class="flex justify-between">
      <span class="text-gray-400">Agent:</span>
      <span class="text-purple-300">$308/refactor</span>
    </div>
    <div class="mt-2 pt-2 border-t border-gray-700">
      <div class="text-purple-300 font-bold text-center">$251K/year</div>
    </div>
  </div>
</div>

</div>

<div class="mt-6 p-5 bg-gradient-to-r from-purple-600 to-purple-800 rounded-xl shadow-lg text-center">
  <div class="text-2xl font-bold text-white">Tier 3 Total: $1,346K/year</div>
  <div class="text-purple-100 mt-1">Full test coverage, security scanning, comprehensive docs</div>
</div>

---

# Total Savings Potential

<div class="grid grid-cols-3 gap-6 mb-6">
  <div class="p-5 bg-green-900/30 rounded-lg border-2 border-green-500 text-center">
    <div class="text-green-400 text-sm mb-2">Tier 1: Quick Wins</div>
    <div class="text-white text-2xl font-bold">$251K</div>
    <div class="text-gray-400 text-xs mt-1">0-3 months</div>
  </div>

  <div class="p-5 bg-blue-900/40 rounded-lg border-2 border-blue-500 text-center">
    <div class="text-blue-400 text-sm mb-2">Tier 2: Medium Effort</div>
    <div class="text-white text-2xl font-bold">$638K</div>
    <div class="text-gray-400 text-xs mt-1">3-6 months</div>
  </div>

  <div class="p-5 bg-purple-900/40 rounded-lg border-2 border-purple-500 text-center">
    <div class="text-purple-400 text-sm mb-2">Tier 3: High Investment</div>
    <div class="text-white text-2xl font-bold">$1,346K</div>
    <div class="text-gray-400 text-xs mt-1">6-12 months</div>
  </div>
</div>

<div class="p-8 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-lg text-center">
  <div class="text-4xl font-bold text-white mb-2">$2,235,000/year</div>
  <div class="text-xl text-blue-100">Total Annual Savings (50-person team)</div>
  <div class="text-lg text-blue-200 mt-3">~15% of total labor cost</div>
</div>

<div class="mt-6 text-center text-gray-400 italic text-sm">
  With continued optimization, 20%+ labor arbitrage is achievable within 18-24 months
</div>

---

# The Critical Constraints

<div class="grid grid-cols-2 gap-6">

<div class="p-5 bg-red-900/40 rounded-lg border-l-4 border-red-500">
  <h3 class="text-red-400 font-bold text-lg mb-3">⚠️ Headcount ≠ Savings</h3>
  <div class="text-sm text-gray-300 space-y-2">
    <p>Most organizations won't reduce headcount</p>
    <div class="text-xs text-gray-400 mt-2">
      ✓ Maintain headcount, increase throughput<br/>
      ✓ Shift talent to high-value work<br/>
      ✓ Reduce contractor reliance<br/>
      ✓ Slow hiring while growing faster
    </div>
  </div>
  <div class="mt-3 p-2 bg-red-800/40 rounded text-xs text-red-300">
    Economics work through capability multiplication
  </div>
</div>

<div class="p-5 bg-yellow-900/40 rounded-lg border-l-4 border-yellow-500">
  <h3 class="text-yellow-400 font-bold text-lg mb-3">⚠️ Quality Control Costs</h3>
  <div class="text-sm text-gray-300 space-y-2">
    <div class="flex justify-between text-xs">
      <span class="text-gray-400">Without automation:</span>
      <span class="text-red-400">-$2 LOSS!</span>
    </div>
    <div class="flex justify-between text-xs">
      <span class="text-gray-400">With automation:</span>
      <span class="text-green-400">$260 savings (87%)</span>
    </div>
  </div>
  <div class="mt-3 p-2 bg-yellow-800/40 rounded text-xs text-yellow-300">
    Automated verification is the multiplier
  </div>
</div>

<div class="p-5 bg-orange-900/40 rounded-lg border-l-4 border-orange-500">
  <h3 class="text-orange-400 font-bold text-lg mb-3">⚠️ Context Acquisition</h3>
  <div class="text-sm text-gray-300">
    <p class="mb-2">30 min gathering context = $75 burned</p>
    <div class="text-xs text-gray-400">
      Manual: $50-112 per task<br/>
      Automated: Near-zero
    </div>
  </div>
  <div class="mt-3 p-2 bg-orange-800/40 rounded text-xs text-orange-300">
    Knowledge infrastructure eliminates "context tax"
  </div>
</div>

<div class="p-5 bg-blue-900/60 rounded-lg border-l-4 border-blue-400">
  <h3 class="text-blue-400 font-bold text-lg mb-3">⚠️ Iteration Costs</h3>
  <div class="text-sm text-gray-300">
    <div class="flex justify-between text-xs mb-1">
      <span class="text-gray-400">Unclear requirements:</span>
      <span class="text-red-400">$380 (LOSS)</span>
    </div>
    <div class="flex justify-between text-xs">
      <span class="text-gray-400">Clear requirements:</span>
      <span class="text-green-400">$76 (74% savings)</span>
    </div>
  </div>
  <div class="mt-3 p-2 bg-blue-800/40 rounded text-xs text-blue-300">
    Clear specs = fewer iterations = better ROI
  </div>
</div>

</div>

<div class="mt-6 p-4 bg-gradient-to-r from-red-900/40 to-gray-800 rounded-lg text-center">
  <span class="text-white font-bold">Without addressing these constraints, agents cost money instead of saving it</span>
</div>

---

# Phased Investment Strategy

<div class="grid grid-cols-3 gap-4 text-xs">

<div class="p-4 bg-green-900/30 rounded-lg border-2 border-green-500">
  <div class="text-green-400 font-bold mb-3 text-sm">Phase 1: Foundation</div>
  <div class="text-gray-300 mb-2">Months 1-3</div>
  <div class="space-y-1 text-xs">
    <div class="flex justify-between">
      <span>Issue triage</span>
      <span class="text-white">$25K</span>
    </div>
    <div class="flex justify-between">
      <span>PR descriptions</span>
      <span class="text-white">$10K</span>
    </div>
    <div class="flex justify-between">
      <span>Dependency updates</span>
      <span class="text-white">$25K</span>
    </div>
    <div class="flex justify-between">
      <span>Basic CI/CD</span>
      <span class="text-white">$50K</span>
    </div>
  </div>
  <div class="mt-3 pt-3 border-t border-gray-700">
    <div class="flex justify-between text-sm">
      <span class="text-green-400 font-bold">Investment</span>
      <span class="text-white font-bold">$110K</span>
    </div>
    <div class="flex justify-between text-sm mt-1">
      <span class="text-green-400 font-bold">Returns</span>
      <span class="text-white font-bold">$252K/yr</span>
    </div>
    <div class="text-green-400 font-bold text-center mt-2">Payback: 5 months</div>
  </div>
</div>

<div class="p-4 bg-blue-900/40 rounded-lg border-2 border-blue-500">
  <div class="text-blue-400 font-bold mb-3 text-sm">Phase 2: Scaling</div>
  <div class="text-gray-300 mb-2">Months 4-6</div>
  <div class="space-y-1 text-xs">
    <div class="flex justify-between">
      <span>Test coverage</span>
      <span class="text-white">$150K</span>
    </div>
    <div class="flex justify-between">
      <span>Test generation</span>
      <span class="text-white">$50K</span>
    </div>
    <div class="flex justify-between">
      <span>Compliance rules</span>
      <span class="text-white">$75K</span>
    </div>
    <div class="flex justify-between">
      <span>Doc infrastructure</span>
      <span class="text-white">$100K</span>
    </div>
  </div>
  <div class="mt-3 pt-3 border-t border-gray-700">
    <div class="flex justify-between text-sm">
      <span class="text-blue-400 font-bold">Investment</span>
      <span class="text-white font-bold">$375K</span>
    </div>
    <div class="flex justify-between text-sm mt-1">
      <span class="text-blue-400 font-bold">Returns</span>
      <span class="text-white font-bold">$638K/yr</span>
    </div>
    <div class="text-blue-400 font-bold text-center mt-2">Payback: 7 months</div>
  </div>
</div>

<div class="p-4 bg-purple-900/40 rounded-lg border-2 border-purple-500">
  <div class="text-purple-400 font-bold mb-3 text-sm">Phase 3: Transform</div>
  <div class="text-gray-300 mb-2">Months 7-12</div>
  <div class="space-y-1 text-xs">
    <div class="flex justify-between">
      <span>Code impl infra</span>
      <span class="text-white">$275K</span>
    </div>
    <div class="flex justify-between">
      <span>Bug investigation</span>
      <span class="text-white">$150K</span>
    </div>
    <div class="flex justify-between">
      <span>Refactoring tools</span>
      <span class="text-white">$150K</span>
    </div>
  </div>
  <div class="mt-3 pt-3 border-t border-gray-700">
    <div class="flex justify-between text-sm">
      <span class="text-purple-400 font-bold">Investment</span>
      <span class="text-white font-bold">$575K</span>
    </div>
    <div class="flex justify-between text-sm mt-1">
      <span class="text-purple-400 font-bold">Returns</span>
      <span class="text-white font-bold">$1,346K/yr</span>
    </div>
    <div class="text-purple-400 font-bold text-center mt-2">Payback: 5 months</div>
  </div>
</div>

</div>

<div class="mt-6 grid grid-cols-3 gap-4 text-center">
  <div class="p-3 bg-gray-800 rounded-lg">
    <div class="text-gray-400 text-xs">Year 1 Total Investment</div>
    <div class="text-white text-xl font-bold">$1,060K</div>
  </div>
  <div class="p-3 bg-gray-800 rounded-lg">
    <div class="text-gray-400 text-xs">Year 1 Realized Savings</div>
    <div class="text-white text-xl font-bold">$956K</div>
  </div>
  <div class="p-3 bg-green-900/60 rounded-lg border-2 border-green-400">
    <div class="text-green-300 text-xs">Year 1 Net Position</div>
    <div class="text-white text-xl font-bold">-$104K</div>
    <div class="text-green-400 text-xs">Nearly break-even!</div>
  </div>
</div>

---

# 3-Year Financial Outlook

<div class="space-y-4">

<div class="p-6 bg-gray-800 rounded-lg">
  <div class="flex justify-between items-center mb-2">
    <div class="text-xl font-bold text-white">Year 1</div>
    <div class="text-gray-400">Foundation + Scaling + Transform</div>
  </div>
  <div class="grid grid-cols-3 gap-4 text-sm">
    <div>
      <div class="text-gray-400">Investment</div>
      <div class="text-white font-bold">$1,060,000</div>
    </div>
    <div>
      <div class="text-gray-400">Savings</div>
      <div class="text-white font-bold">$956,000</div>
    </div>
    <div>
      <div class="text-gray-400">Net Position</div>
      <div class="text-yellow-400 font-bold">-$104,000</div>
    </div>
  </div>
</div>

<div class="p-6 bg-blue-900/40 rounded-lg border-2 border-blue-500">
  <div class="flex justify-between items-center mb-2">
    <div class="text-xl font-bold text-blue-300">Year 2</div>
    <div class="text-blue-400">Infrastructure complete, full returns</div>
  </div>
  <div class="grid grid-cols-3 gap-4 text-sm">
    <div>
      <div class="text-blue-300">Investment</div>
      <div class="text-white font-bold">$0</div>
    </div>
    <div>
      <div class="text-blue-300">Annual Savings</div>
      <div class="text-white font-bold">$2,236,000</div>
    </div>
    <div>
      <div class="text-blue-300">Cumulative Net</div>
      <div class="text-green-400 font-bold">+$2,132,000</div>
    </div>
  </div>
</div>

<div class="p-6 bg-green-900/60 rounded-lg border-2 border-green-400">
  <div class="flex justify-between items-center mb-2">
    <div class="text-xl font-bold text-green-300">Year 3</div>
    <div class="text-green-400">Compounding returns</div>
  </div>
  <div class="grid grid-cols-3 gap-4 text-sm">
    <div>
      <div class="text-green-300">Investment</div>
      <div class="text-white font-bold">$0</div>
    </div>
    <div>
      <div class="text-green-300">Annual Savings</div>
      <div class="text-white font-bold">$2,236,000</div>
    </div>
    <div>
      <div class="text-green-300">Cumulative Net</div>
      <div class="text-green-400 font-bold">+$4,368,000</div>
    </div>
  </div>
</div>

</div>

<div class="mt-6 p-8 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-lg text-center">
  <div class="text-4xl font-bold text-white mb-2">412% ROI</div>
  <div class="text-xl text-blue-100">Over 3 years</div>
</div>

---

# The Multiplier Effect at Scale

<div class="grid grid-cols-2 gap-8">

<div>
  <h3 class="text-xl font-bold text-blue-400 mb-4">📈 Infrastructure Amortization</h3>
  <div class="space-y-3 text-sm">
    <div class="p-4 bg-gray-800 rounded-lg">
      <div class="text-gray-400 mb-2">50-person team</div>
      <div class="flex justify-between">
        <span class="text-white">Investment:</span>
        <span class="text-white font-bold">$1.06M</span>
      </div>
      <div class="flex justify-between">
        <span class="text-white">Savings:</span>
        <span class="text-green-400 font-bold">$2.24M/yr</span>
      </div>
      <div class="flex justify-between mt-2 pt-2 border-t border-gray-700">
        <span class="text-blue-300">Payback:</span>
        <span class="text-blue-300 font-bold">6 months</span>
      </div>
    </div>

    <div class="p-4 bg-blue-900/60 rounded-lg border-2 border-blue-400">
      <div class="text-blue-300 mb-2">500-person team (10x scale)</div>
      <div class="flex justify-between">
        <span class="text-white">Investment:</span>
        <span class="text-white font-bold">~$1.06M</span>
      </div>
      <div class="flex justify-between">
        <span class="text-white">Savings:</span>
        <span class="text-green-400 font-bold">$22.4M/yr</span>
      </div>
      <div class="flex justify-between mt-2 pt-2 border-t border-blue-700">
        <span class="text-green-300">Payback:</span>
        <span class="text-green-300 font-bold">&lt; 1 month</span>
      </div>
    </div>
  </div>
</div>

<div>
  <h3 class="text-xl font-bold text-blue-400 mb-4">🚀 Capacity Multiplication</h3>
  <div class="space-y-3 text-sm">
    <div class="p-4 bg-red-900/30 rounded-lg">
      <div class="text-red-400 font-bold mb-2">❌ Before Agents</div>
      <div class="text-gray-300 text-xs mb-1">Per developer, annually:</div>
      <div class="text-xs">
        <div>Routine: 1,200 hrs @ $150 = <span class="text-white">$180K</span></div>
        <div>Strategic: 800 hrs @ VALUE</div>
      </div>
    </div>

    <div class="text-3xl text-gray-400 text-center">↓</div>

    <div class="p-4 bg-green-900/60 rounded-lg border-2 border-green-400">
      <div class="text-green-400 font-bold mb-2">✨ After Agents</div>
      <div class="text-gray-300 text-xs mb-1">Per developer, annually:</div>
      <div class="text-xs">
        <div>Routine: 400 hrs @ $150 = <span class="text-white">$60K</span></div>
        <div>Agent-assisted: 800 hrs @ $2-50 = <span class="text-white">$16-40K</span></div>
        <div class="text-green-400">Strategic: 1,200 hrs (50% more!)</div>
      </div>
      <div class="mt-3 pt-3 border-t border-green-700 text-green-300 font-bold">
        $120K saved + 50% more strategic output
      </div>
    </div>
  </div>
</div>

</div>

<div class="mt-6 text-center text-sm text-gray-400 italic">
  Savings on routine work fund MORE high-value work, compounding over time
</div>

---

# Build vs. Buy vs. Wait

<div class="grid grid-cols-3 gap-4 text-xs">

<div class="p-4 bg-blue-900/40 rounded-lg border-2 border-blue-500">
  <div class="text-blue-400 font-bold mb-3 text-sm">🔨 Build Now</div>
  <div class="space-y-2">
    <div class="text-green-400 flex items-start gap-1">
      <span>✓</span>
      <span>Fastest path to savings</span>
    </div>
    <div class="text-green-400 flex items-start gap-1">
      <span>✓</span>
      <span>Competitive advantage</span>
    </div>
    <div class="text-green-400 flex items-start gap-1">
      <span>✓</span>
      <span>Infrastructure benefits humans</span>
    </div>
    <div class="text-red-400 flex items-start gap-1">
      <span>✗</span>
      <span>Highest upfront investment</span>
    </div>
    <div class="text-red-400 flex items-start gap-1">
      <span>✗</span>
      <span>Execution risk</span>
    </div>
  </div>
  <div class="mt-3 pt-3 border-t border-gray-700">
    <div class="text-blue-300 font-bold">Best for:</div>
    <div class="text-gray-300">Strong platform eng, competitive pressure, exec commitment</div>
  </div>
</div>

<div class="p-4 bg-purple-900/40 rounded-lg border-2 border-purple-500">
  <div class="text-purple-400 font-bold mb-3 text-sm">🛒 Buy Solutions</div>
  <div class="space-y-2">
    <div class="text-green-400 flex items-start gap-1">
      <span>✓</span>
      <span>Lower upfront investment</span>
    </div>
    <div class="text-green-400 flex items-start gap-1">
      <span>✓</span>
      <span>Faster time to value</span>
    </div>
    <div class="text-green-400 flex items-start gap-1">
      <span>✓</span>
      <span>Reduced execution risk</span>
    </div>
    <div class="text-red-400 flex items-start gap-1">
      <span>✗</span>
      <span>Vendor lock-in risk</span>
    </div>
    <div class="text-red-400 flex items-start gap-1">
      <span>✗</span>
      <span>Ongoing licensing costs</span>
    </div>
  </div>
  <div class="mt-3 pt-3 border-t border-gray-700">
    <div class="text-purple-300 font-bold">Best for:</div>
    <div class="text-gray-300">Limited platform capacity, urgency, comfort with SaaS</div>
  </div>
</div>

<div class="p-4 bg-gray-800 rounded-lg border-2 border-gray-600">
  <div class="text-gray-400 font-bold mb-3 text-sm">⏳ Wait & Learn</div>
  <div class="space-y-2">
    <div class="text-green-400 flex items-start gap-1">
      <span>✓</span>
      <span>Learn from others' mistakes</span>
    </div>
    <div class="text-green-400 flex items-start gap-1">
      <span>✓</span>
      <span>Lower risk of early tech</span>
    </div>
    <div class="text-green-400 flex items-start gap-1">
      <span>✓</span>
      <span>Staff has time to adapt</span>
    </div>
    <div class="text-red-400 flex items-start gap-1">
      <span>✗</span>
      <span>Competitors gain advantage</span>
    </div>
    <div class="text-red-400 flex items-start gap-1">
      <span>✗</span>
      <span>Technical debt accumulates</span>
    </div>
  </div>
  <div class="mt-3 pt-3 border-t border-gray-700">
    <div class="text-gray-400 font-bold">Best for:</div>
    <div class="text-gray-300">Non-competitive contexts, significant tech debt</div>
  </div>
</div>

</div>

<div class="mt-6 p-5 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-lg">
  <div class="text-white font-bold text-lg mb-2">💡 The Hybrid Path (Recommended)</div>
  <div class="text-blue-100 text-sm space-y-1">
    <div>1. Quick wins now: Deploy agents for triage, PRs, deps (minimal infra)</div>
    <div>2. Platform investment: Build/buy verification infrastructure (6 months)</div>
    <div>3. Scale systematically: Expand use cases as infrastructure matures</div>
  </div>
</div>

---

# Executive Summary

<div class="grid grid-cols-2 gap-8">

<div class="space-y-4">
  <div class="p-5 bg-blue-900/60 rounded-lg border-l-4 border-blue-400">
    <div class="text-blue-300 font-bold text-lg mb-3">💎 The Opportunity</div>
    <div class="text-sm text-gray-300 space-y-1">
      <div>• Agent labor costs <span class="text-white font-bold">$2/hr</span> vs. <span class="text-white font-bold">$150/hr</span> for humans</div>
      <div>• <span class="text-white font-bold">20%</span> of engineering work suitable for agents</div>
      <div>• Potential savings: <span class="text-green-400 font-bold">$2-3M per 50 engineers</span></div>
    </div>
  </div>

  <div class="p-5 bg-green-900/60 rounded-lg border-l-4 border-green-400">
    <div class="text-green-300 font-bold text-lg mb-3">💰 The Investment</div>
    <div class="text-sm text-gray-300 space-y-1">
      <div>• Infrastructure: <span class="text-white font-bold">$800K-1.6M</span></div>
      <div>• Timeline: <span class="text-white font-bold">12-18 months</span> to full deployment</div>
      <div>• Payback: <span class="text-green-400 font-bold">4-8 months</span></div>
      <div>• 3-year ROI: <span class="text-green-400 font-bold">400-900%</span></div>
    </div>
  </div>
</div>

<div class="space-y-4">
  <div class="p-5 bg-red-900/40 rounded-lg border-l-4 border-red-500">
    <div class="text-red-400 font-bold text-lg mb-3">⚠️ The Constraints</div>
    <div class="text-sm text-gray-300 space-y-1">
      <div>• Requires automated verification</div>
      <div>• Requires knowledge codification</div>
      <div>• Requires org change management</div>
      <div>• Savings via <span class="text-yellow-400">capacity multiplication</span>, not headcount cuts</div>
    </div>
  </div>

  <div class="p-5 bg-purple-900/40 rounded-lg border-l-4 border-purple-500">
    <div class="text-purple-300 font-bold text-lg mb-3">🎯 The Recommendation</div>
    <div class="text-sm text-gray-300 space-y-1">
      <div>• Start with quick wins to build confidence</div>
      <div>• Invest in instrumentation (benefits all)</div>
      <div>• Measure iteration & verification costs</div>
      <div>• Plan for capability multiplication</div>
    </div>
  </div>
</div>

</div>

<div class="mt-8 p-8 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-lg text-center">
  <div class="text-2xl font-bold text-white mb-2">Organizations that invest now will achieve 20%+ labor arbitrage within 18 months.</div>
  <div class="text-xl text-blue-100">Organizations that wait will face a widening competitive gap.</div>
</div>

---

# Connecting the Trilogy

<div class="grid grid-cols-3 gap-4 mb-8">

<div class="p-5 bg-blue-900/40 rounded-lg border-2 border-blue-500 text-center">
  <div class="text-3xl mb-3">✈️</div>
  <div class="text-blue-400 font-bold text-lg mb-2">Agentic Flight</div>
  <div class="text-sm text-gray-300 mb-2">How do we operate safely?</div>
  <div class="text-xs text-blue-300">Developers are pilots; instruments enable safe flight</div>
</div>

<div class="p-5 bg-purple-900/40 rounded-lg border-2 border-purple-500 text-center">
  <div class="text-3xl mb-3">⚙️</div>
  <div class="text-purple-400 font-bold text-lg mb-2">Agentic Labor</div>
  <div class="text-sm text-gray-300 mb-2">What work can agents do?</div>
  <div class="text-xs text-purple-300">80% of delivery labor is outside the code editor</div>
</div>

<div class="p-5 bg-green-900/60 rounded-lg border-2 border-green-400 text-center">
  <div class="text-3xl mb-3">💰</div>
  <div class="text-green-400 font-bold text-lg mb-2">Agentic Economics</div>
  <div class="text-sm text-gray-300 mb-2">How do we save money?</div>
  <div class="text-xs text-green-300">$2/hour labor requires infrastructure investment</div>
</div>

</div>

<div class="p-6 bg-gray-800 rounded-lg">
  <div class="text-xl font-bold text-white mb-4 text-center">Together: A Complete Strategic Framework</div>
  <div class="grid grid-cols-3 gap-4 text-sm">
    <div class="text-center">
      <div class="text-blue-400 font-bold mb-1">Flight</div>
      <div class="text-gray-300 text-xs">Structure the human-agent relationship</div>
    </div>
    <div class="text-2xl text-gray-400 text-center">→</div>
    <div class="text-center">
      <div class="text-purple-400 font-bold mb-1">Labor</div>
      <div class="text-gray-300 text-xs">Identify where to deploy agents</div>
    </div>
  </div>
  <div class="text-3xl text-gray-400 text-center my-2">↓</div>
  <div class="text-center">
    <div class="text-green-400 font-bold mb-1">Economics</div>
    <div class="text-gray-300 text-xs">Build the business case</div>
  </div>
</div>

---

# The $2/Hour Future

<div class="p-8 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-lg mb-8">
  <div class="text-3xl font-bold text-white text-center mb-4">The math is unambiguous.</div>
  <div class="text-2xl text-blue-100 text-center">$2/hour labor exists.</div>
  <div class="text-xl text-blue-200 text-center mt-2">The only question is whether our organizations can access it.</div>
</div>

<div class="grid grid-cols-2 gap-6 mb-8">
  <div class="p-5 bg-green-900/30 rounded-lg">
    <div class="text-green-400 font-bold text-lg mb-3">✅ Barriers Are Surmountable</div>
    <div class="text-sm text-gray-300 space-y-1">
      <div>• Instrumentation can be built</div>
      <div>• Knowledge can be codified</div>
      <div>• Processes can be redesigned</div>
      <div>• People can be retrained</div>
    </div>
  </div>

  <div class="p-5 bg-blue-900/60 rounded-lg">
    <div class="text-blue-400 font-bold text-lg mb-3">🚀 Different Cost Structure</div>
    <div class="text-sm text-gray-300">
      <p class="mb-2">Organizations that do this work will operate fundamentally differently.</p>
      <p class="text-blue-300 font-semibold">Not 10% more efficient—50-100% more efficient on significant portions of engineering labor.</p>
    </div>
  </div>
</div>

<div class="p-8 bg-gradient-to-r from-red-600 to-red-800 rounded-xl shadow-lg text-center">
  <div class="text-2xl font-bold text-white mb-3">The question isn't whether we can afford to invest in agentic infrastructure.</div>
  <div class="text-3xl font-bold text-white">The question is whether we can afford NOT to.</div>
</div>

<div class="mt-8 text-center text-gray-400 italic text-lg">
  The organizations that win aren't those that hire the most engineers.<br/>
  They're those that multiply the capacity of the engineers they have.
</div>

---
layout: end
---

# Thank You

<div class="text-center">
  <div class="text-6xl mb-4">💰</div>
  <div class="text-2xl text-gray-400 mb-8">Making the Business Case for Agentic AI</div>

  <div class="grid grid-cols-3 gap-4 text-sm max-w-4xl mx-auto">
    <div class="p-4 bg-gray-800 rounded-lg">
      <div class="text-blue-400 font-bold mb-2">The Opportunity</div>
      <div class="text-white text-2xl font-bold">$2/hour</div>
      <div class="text-gray-400">vs. $150/hour</div>
    </div>

    <div class="p-4 bg-gray-800 rounded-lg">
      <div class="text-green-400 font-bold mb-2">The Target</div>
      <div class="text-white text-2xl font-bold">20%</div>
      <div class="text-gray-400">labor arbitrage</div>
    </div>

    <div class="p-4 bg-gray-800 rounded-lg">
      <div class="text-purple-400 font-bold mb-2">The Timeline</div>
      <div class="text-white text-2xl font-bold">18 months</div>
      <div class="text-gray-400">to full deployment</div>
    </div>
  </div>
</div>
