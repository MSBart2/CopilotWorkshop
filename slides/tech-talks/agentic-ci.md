---
theme: default
background: https://source.unsplash.com/collection/94734566/1920x1080
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Agentic CI: The Trust Factory
  How AI agents transform CI from quality gate to trust manufacturing at scale
drawings:
  persist: false
transition: slide-left
title: Agentic CI - The Trust Factory
module: tech-talks/agentic-ci
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
Agentic CI
</h1>
<div class="mt-4 relative z-10">
<span class="px-6 py-2 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xl font-medium shadow-lg shadow-cyan-500/25">
The Trust Factory
</span>
</div>
<div class="mt-8 text-lg opacity-70 relative z-10">How AI agents transform CI from quality gate to trust manufacturing</div>
<div class="mt-6 w-32 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full relative z-10"></div>
</div>

<div class="abs-br m-6 flex gap-2">
<span class="text-sm opacity-50">Tech Talk · Barton Mathis</span>
</div>

---

# The Problem

<div class="text-center mt-8">
<div class="text-2xl mb-8">We're shipping <span class="text-cyan-400 font-bold">10-15 features per day</span> with AI agents.</div>
<div class="text-2xl mb-8">But our CI is still optimized for <span class="text-red-400 font-bold">2-3 features per week</span> from humans.</div>
</div>

<div class="mt-12 p-6 bg-gradient-to-r from-red-900/40 to-gray-800 rounded-xl">
<div class="text-2xl text-white font-bold text-center">The bottleneck isn't agent velocity—it's trust production.</div>
</div>

<div class="mt-8 text-center text-gray-400">
Agents can write code faster than CI can prove it's safe.
</div>

---

# The Core Insight

<div class="grid grid-cols-2 gap-8 mt-8">
<div class="p-6 bg-red-900/30 rounded-lg border-2 border-red-400">
<div class="text-xl font-bold text-red-300 mb-4">❌ Traditional CI (Quality Gate)</div>
<div class="text-sm space-y-2 text-gray-300">
<div>Write code → Run tests → Fix failures</div>
<div>→ Manual review → Deploy</div>
<div class="mt-4 pt-4 border-t border-red-600">
<div class="font-bold">Purpose:</div>
<div>Catch bugs before production</div>
<div class="mt-2 font-bold">Optimized for:</div>
<div>Infrequent changes, manual intervention</div>
</div>
</div>
</div>
<div class="p-6 bg-green-900/30 rounded-lg border-2 border-green-400">
<div class="text-xl font-bold text-green-300 mb-4">✅ Agentic CI (Trust Factory)</div>
<div class="text-sm space-y-2 text-gray-300">
<div>Agent writes code → CI manufactures trust</div>
<div>→ Human validates outcomes → Auto-deploy</div>
<div class="mt-4 pt-4 border-t border-green-600">
<div class="font-bold">Purpose:</div>
<div>Manufacture trust artifacts at agent velocity</div>
<div class="mt-2 font-bold">Optimized for:</div>
<div>10-15 changes/day, automated validation</div>
</div>
</div>
</div>
</div>

<div class="mt-8 p-5 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-lg text-center">
<div class="text-xl font-bold text-white">🏭 The Shift: From "did the tests pass?" to "do we have sufficient evidence to trust this change?"</div>
</div>

---

# Trust Factory Principles

<div class="grid grid-cols-3 gap-4 mt-6 text-xs">
<div class="p-4 bg-blue-900/60 rounded-lg border-2 border-blue-400">
<div class="text-2xl mb-2">🔄</div>
<div class="text-white font-bold mb-2">Repeatable Processes</div>
<div class="text-gray-300">Same checks, same order, every time. Zero variation = reliable trust signals.</div>
</div>
<div class="p-4 bg-blue-900/60 rounded-lg border-2 border-blue-400">
<div class="text-2xl mb-2">🚪</div>
<div class="text-white font-bold mb-2">Quality Gates</div>
<div class="text-gray-300">Can't proceed without passing inspection. No human bypass.</div>
</div>
<div class="p-4 bg-blue-900/60 rounded-lg border-2 border-blue-400">
<div class="text-2xl mb-2">🤖</div>
<div class="text-white font-bold mb-2">Automated Inspection</div>
<div class="text-gray-300">327 tests in 8 min. 10,000 security patterns in 45 sec.</div>
</div>
<div class="p-4 bg-blue-900/60 rounded-lg border-2 border-blue-400">
<div class="text-2xl mb-2">📋</div>
<div class="text-white font-bold mb-2">Evidence Trails</div>
<div class="text-gray-300">Auditable, reproducible, tamper-evident attestations.</div>
</div>
<div class="p-4 bg-blue-900/60 rounded-lg border-2 border-blue-400">
<div class="text-2xl mb-2">📈</div>
<div class="text-white font-bold mb-2">Continuous Improvement</div>
<div class="text-gray-300">Flake rate <2%, build time optimized monthly.</div>
</div>
<div class="p-4 bg-blue-900/60 rounded-lg border-2 border-blue-400">
<div class="text-2xl mb-2">💰</div>
<div class="text-white font-bold mb-2">Scale Economics</div>
<div class="text-gray-300">First feature: 8 min. 15th feature: 2 min. Marginal cost → zero.</div>
</div>
</div>

<div class="mt-6 text-center text-sm text-gray-400 italic">Trust that scales linearly with agent output, not quadratically with human review time.</div>

---

# Problem 1: Compliance Is Contextual

<div class="grid grid-cols-2 gap-8 mt-6">
<div class="p-4 bg-red-900/30 rounded-lg">
<div class="text-lg font-bold text-red-300 mb-3">❌ Deterministic Tools</div>
<div class="text-xs text-gray-300 space-y-2">
<div>• 847 warnings across codebase</div>
<div>• 803 false positives</div>
<div>• Developers ignore all warnings</div>
<div>• Actual PII violation ships to production</div>
</div>
<div class="mt-4 p-3 bg-gray-800 rounded text-xs">
<pre class="text-yellow-400">patterns:
  - regex: "email"
    severity: high</pre>
</div>
</div>
<div class="p-4 bg-green-900/30 rounded-lg">
<div class="text-lg font-bold text-green-300 mb-3">✅ Context-Aware Agents</div>
<div class="text-xs text-gray-300 space-y-2">
<div>• 3 actual violations flagged</div>
<div>• 0 false positives</div>
<div>• Explains <em>why</em> each is a violation</div>
<div>• Suggests <em>how</em> to fix it</div>
</div>
<div class="mt-4 p-3 bg-gray-800 rounded text-xs">
<pre class="text-green-400">gh copilot suggest -t shell "
Check PII against policies in
docs/compliance/ ..."</pre>
</div>
</div>
</div>

<div class="mt-6 p-4 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg text-center">
<div class="text-lg font-bold text-white">💡 Key Insight: Agents understand context—<code>user.email</code> in logs vs. encrypted DB field</div>
</div>

---

# Problem 2: Security Reviews Are Slow

<div class="text-sm">

<div class="grid grid-cols-2 gap-6 mt-4">
<div class="space-y-3">
<div class="font-bold text-red-300">❌ Traditional Static Analysis</div>
<div class="text-xs text-gray-300">
<div>• Too many false positives (ignored)</div>
<div>• Too many false negatives (misses context)</div>
<div>• No explanation of <em>why</em></div>
<div>• No suggestion of <em>how to fix</em></div>
</div>
</div>
<div class="space-y-3">
<div class="font-bold text-green-300">✅ AI-Assisted Security Review</div>
<div class="text-xs text-gray-300">
<div>• Context-dependent vulnerability detection</div>
<div>• Explains the attack vector</div>
<div>• Suggests the fix with code examples</div>
<div>• Rates severity (Critical/High/Medium/Low)</div>
</div>
</div>
</div>

<div class="mt-6 p-4 bg-gray-800 rounded-lg text-xs">
<div class="text-red-400 font-bold mb-2">Example Output:</div>
<div class="text-gray-300">
<div class="mb-2"><span class="text-red-400">🚨 High Severity: SQL Injection Risk</span></div>
<div><strong>Location:</strong> src/api/users.ts:47</div>
<div><strong>Issue:</strong> User input directly concatenated into SQL query</div>
<div><strong>Attack Vector:</strong> <code>?name='; DROP TABLE users; --</code></div>
<div><strong>Fix:</strong> Use parameterized queries: <code>db.query('SELECT * FROM users WHERE name = $1', [name])</code></div>
</div>
</div>

</div>

<div class="mt-4 text-center text-xs text-gray-400 italic">Agents find vulnerabilities humans miss—and explain how to fix them</div>

---

# Problem 3: Policy Enforcement Is Manual

<div class="grid grid-cols-2 gap-8 mt-8">
<div class="p-6 bg-red-900/30 rounded-lg">
<div class="text-xl font-bold text-red-300 mb-4">❌ Manual Enforcement</div>
<div class="text-sm text-gray-300 space-y-3">
<div>
<div class="font-bold">Policy Document:</div>
<div>"All API changes require architecture review"</div>
</div>
<div>
<div class="font-bold">Reality:</div>
<div>Depends who reviews the PR</div>
</div>
<div>
<div class="font-bold">Result:</div>
<div class="text-red-400">60% of API changes skip review</div>
</div>
</div>
</div>
<div class="p-6 bg-green-900/30 rounded-lg">
<div class="text-xl font-bold text-green-300 mb-4">✅ Automated Policy Check</div>
<div class="text-sm text-gray-300 space-y-3">
<div>
<div class="font-bold">Workflow:</div>
<div>Agent reads API design standards from docs/</div>
</div>
<div>
<div class="font-bold">Detection:</div>
<div>Flags all API contract changes automatically</div>
</div>
<div>
<div class="font-bold">Result:</div>
<div class="text-green-400">100% enforcement, @architecture-team auto-assigned</div>
</div>
</div>
</div>
</div>

<div class="mt-8 p-5 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-lg text-center">
<div class="text-xl font-bold text-white">Zero "oops, we didn't review that" incidents</div>
</div>

---

# Real-World Example: GDPR Compliance

<div class="text-sm mt-6">

<div class="p-4 bg-blue-900/40 rounded-lg mb-4">
<div class="font-bold text-blue-300 mb-2">🇪🇺 The Challenge</div>
<div class="grid grid-cols-3 gap-2 text-xs text-gray-300">
<div>• Right to access</div>
<div>• Right to deletion</div>
<div>• Data minimization</div>
<div>• Consent tracking</div>
<div>• Data inventory</div>
<div>• Breach notification (72 hrs)</div>
</div>
</div>

<div class="grid grid-cols-2 gap-4">
<div class="p-4 bg-gray-800 rounded-lg">
<div class="text-red-300 font-bold mb-2">❌ Traditional</div>
<div class="text-xs text-gray-300">47-page compliance PDF + manual audits</div>
</div>
<div class="p-4 bg-gray-800 rounded-lg">
<div class="text-green-300 font-bold mb-2">✅ Agentic</div>
<div class="text-xs text-gray-300">CI workflow checks every PR against docs/compliance/gdpr-*</div>
</div>
</div>

<div class="mt-4 p-4 bg-gradient-to-r from-green-900/40 to-gray-800 rounded-lg">
<div class="text-sm text-white">
<div class="font-bold mb-2">Example Output: GDPR Compliance Review</div>
<div class="text-xs space-y-1 text-gray-300">
<div>✅ Encryption at rest configured (AES-256)</div>
<div>✅ Access controls: admin + billing roles only</div>
<div>✅ User rights implemented: /api/user/data-export, /api/user/delete-account</div>
<div>⚠️ Recommendation: Update retention policy (soft delete → hard delete after 30 days)</div>
</div>
</div>
</div>

</div>

<div class="mt-4 text-center text-xs text-gray-400 italic">🏭 Trust Factory Impact: Auditor asks "how do you ensure GDPR compliance?" → Point them to CI logs</div>

---

# Real-World Example: PCI-DSS Payment Security

<div class="text-xs mt-4">

<div class="p-3 bg-blue-900/40 rounded-lg mb-3">
<div class="font-bold text-blue-300 mb-1">💳 PCI-DSS Requirements</div>
<div class="grid grid-cols-3 gap-1 text-gray-300">
<div>• Never log credit card numbers</div>
<div>• Encrypt cardholder data at rest</div>
<div>• Mask PAN (show last 4 only)</div>
<div>• Secure transmission (TLS 1.2+)</div>
<div>• Access controls (need-to-know)</div>
<div>• Audit trails for all access</div>
</div>
</div>

<div class="grid grid-cols-2 gap-3">
<div class="p-3 bg-red-900/30 rounded-lg">
<div class="font-bold text-red-300 mb-2">❌ Traditional</div>
<div class="text-gray-300">Annual audit finds violations → 3 weeks frozen to fix</div>
</div>
<div class="p-3 bg-green-900/30 rounded-lg">
<div class="font-bold text-green-300 mb-2">✅ Agentic</div>
<div class="text-gray-300">PCI checks on every PR → violations caught before merge</div>
</div>
</div>

<div class="mt-3 p-3 bg-gray-800 rounded-lg">
<div class="text-red-400 font-bold mb-1">Example Violation Found:</div>
<div class="text-gray-300 space-y-1">
<div><strong>🚨 Cardholder Data in Logs</strong></div>
<div><strong>Location:</strong> src/payments/checkout.ts:127</div>
<div><code>logger.info('Processing payment', {cardNumber: req.body.cardNumber})</code></div>
<div><strong>Fix:</strong> Log only last 4 digits: <code>{cardNumberLast4: req.body.cardNumber.slice(-4)}</code></div>
<div><strong>Status:</strong> ❌ NOT PCI-COMPLIANT - Blocking merge</div>
</div>
</div>

</div>

<div class="mt-3 text-center text-xs text-gray-400 italic">🏭 Trust Factory Impact: 100% of payment code changes checked. Zero violations shipped.</div>

---

# Real-World Example: FedRAMP Security Controls

<div class="text-xs mt-4">

<div class="p-3 bg-blue-900/40 rounded-lg mb-3">
<div class="font-bold text-blue-300 mb-1">🛡️ FedRAMP Requirements</div>
<div class="text-gray-300">300+ security controls from NIST 800-53, continuous monitoring, evidence collection</div>
</div>

<div class="grid grid-cols-3 gap-2 mb-3">
<div class="p-2 bg-gray-800 rounded-lg">
<div class="text-green-300 font-bold">✅ AC-2</div>
<div class="text-gray-400">Account Management</div>
</div>
<div class="p-2 bg-gray-800 rounded-lg">
<div class="text-green-300 font-bold">✅ AU-2</div>
<div class="text-gray-400">Audit Events</div>
</div>
<div class="p-2 bg-yellow-800 rounded-lg">
<div class="text-yellow-300 font-bold">⚠️ CM-2</div>
<div class="text-gray-400">Baseline Config</div>
</div>
</div>

<div class="grid grid-cols-2 gap-3">
<div class="p-3 bg-gray-800 rounded-lg">
<div class="font-bold text-white mb-2">Traditional Approach</div>
<div class="text-gray-300">Spreadsheet with 300 rows, manual checks, hope for the best</div>
</div>
<div class="p-3 bg-gray-800 rounded-lg">
<div class="font-bold text-white mb-2">Agentic Solution</div>
<div class="text-gray-300">Each control tested via CI workflow, evidence stored in S3 Glacier for auditors</div>
</div>
</div>

<div class="mt-3 p-3 bg-gradient-to-r from-green-900/40 to-gray-800 rounded-lg">
<div class="text-white font-bold mb-1">Evidence Package Generated</div>
<div class="text-gray-300">
<div>• Control test results (AC-2, AU-2, CM-2, IA-5)</div>
<div>• Configuration snapshots (before/after)</div>
<div>• Approval chain (PR reviewers)</div>
<div>• Storage: s3://fedramp-audit-logs/2026/02/04/abc123def.json</div>
</div>
</div>

</div>

<div class="mt-3 text-center text-xs text-gray-400 italic">🏭 Annual audit becomes "here's 12 months of CI logs" instead of "let me find those spreadsheets"</div>

---

# Embedding Copilot CLI in Actions: Key Patterns

<div class="grid grid-cols-2 gap-4 mt-6 text-xs">
<div class="p-4 bg-blue-900/60 rounded-lg border-l-4 border-blue-400">
<div class="text-lg mb-2">📋</div>
<div class="text-white font-bold mb-2">Pattern 1: Policy Interpreter</div>
<div class="text-gray-300 mb-2">Turn natural language policies into automated checks</div>
<div class="p-2 bg-gray-800 rounded text-green-400">
<pre>POLICIES=$(cat docs/policies.md)
gh copilot suggest -t shell "
  Review PR against: $POLICIES"</pre>
</div>
</div>
<div class="p-4 bg-green-900/60 rounded-lg border-l-4 border-green-400">
<div class="text-lg mb-2">🔍</div>
<div class="text-white font-bold mb-2">Pattern 2: Contextual Analyzer</div>
<div class="text-gray-300 mb-2">Analyze changes with full repository context</div>
<div class="p-2 bg-gray-800 rounded text-green-400">
<pre>gh copilot suggest -t shell "
  What services depend on
  src/api/users.ts?"</pre>
</div>
</div>
<div class="p-4 bg-purple-900/60 rounded-lg border-l-4 border-purple-400">
<div class="text-lg mb-2">📊</div>
<div class="text-white font-bold mb-2">Pattern 3: Evidence Generator</div>
<div class="text-gray-300 mb-2">Produce audit-ready compliance evidence</div>
<div class="p-2 bg-gray-800 rounded text-green-400">
<pre>gh copilot suggest -t shell "
  Create audit evidence:
  what changed, why, who..."</pre>
</div>
</div>
<div class="p-4 bg-orange-900/60 rounded-lg border-l-4 border-orange-400">
<div class="text-lg mb-2">🧠</div>
<div class="text-white font-bold mb-2">Pattern 4: Learning Checker</div>
<div class="text-gray-300 mb-2">Checks that improve from feedback</div>
<div class="p-2 bg-gray-800 rounded text-green-400">
<pre>HISTORY=$(cat security-learning.json)
gh copilot suggest -t shell "
  Learn from: $HISTORY"</pre>
</div>
</div>
</div>

<div class="mt-6 text-center text-sm text-gray-400 italic">Your policies change more often than your CI. Agents read the latest version every time.</div>

---

# The ROI of Agentic CI

<div class="grid grid-cols-2 gap-8 mt-8">
<div class="p-6 bg-red-900/30 rounded-lg border-2 border-red-500">
<div class="text-2xl font-bold text-red-300 mb-4">❌ Before: Compliance Theater</div>
<div class="text-sm text-gray-300 space-y-2">
<div>• 47-page GDPR compliance PDF (nobody reads)</div>
<div>• Annual PCI audit finds 12 violations</div>
<div>• 3 weeks to fix (all features frozen)</div>
<div>• $45K audit + $120K dev time</div>
<div>• Compliance is a burden</div>
</div>
</div>
<div class="p-6 bg-green-900/30 rounded-lg border-2 border-green-500">
<div class="text-2xl font-bold text-green-300 mb-4">✅ After: Trust Factory</div>
<div class="text-sm text-gray-300 space-y-2">
<div>• GDPR checks on every PR (2 minutes)</div>
<div>• PCI violations caught before merge</div>
<div>• Compliance evidence auto-generated</div>
<div>• $0 violation remediation cost</div>
<div>• Compliance is a byproduct</div>
</div>
</div>
</div>

<div class="mt-8 p-6 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-lg">
<div class="text-xl font-bold text-white mb-3 text-center">📊 Impact Metrics</div>
<div class="grid grid-cols-3 gap-4 text-center text-sm">
<div>
<div class="text-3xl font-bold text-cyan-300">480hrs/yr</div>
<div class="text-gray-300">Time Saved</div>
</div>
<div>
<div class="text-3xl font-bold text-green-300">100%</div>
<div class="text-gray-300">Violations Caught</div>
</div>
<div>
<div class="text-3xl font-bold text-blue-300">60%</div>
<div class="text-gray-300">Audit Cost Reduction</div>
</div>
</div>
</div>

---

# Implementation Roadmap

<div class="grid grid-cols-4 gap-3 mt-6 text-xs">
<div class="p-3 bg-blue-900/60 rounded-lg border-2 border-blue-400">
<div class="text-lg mb-2">1️⃣</div>
<div class="text-white font-bold mb-2">Week 1: Foundation</div>
<div class="text-gray-300 space-y-1">
<div>• Pick one compliance area</div>
<div>• Document policies in markdown</div>
<div>• Create first workflow</div>
<div>• Test on 5-10 PRs</div>
</div>
</div>
<div class="p-3 bg-green-900/60 rounded-lg border-2 border-green-400">
<div class="text-lg mb-2">2️⃣</div>
<div class="text-white font-bold mb-2">Weeks 2-4: Expand</div>
<div class="text-gray-300 space-y-1">
<div>• Add more domains</div>
<div>• Build evidence collection</div>
<div>• Integrate PR comments</div>
<div>• Train team</div>
</div>
</div>
<div class="p-3 bg-purple-900/60 rounded-lg border-2 border-purple-400">
<div class="text-lg mb-2">3️⃣</div>
<div class="text-white font-bold mb-2">Weeks 5-8: Scale</div>
<div class="text-gray-300 space-y-1">
<div>• Add feedback loops</div>
<div>• Measure false rates</div>
<div>• Optimize for speed</div>
<div>• Connect dashboard</div>
</div>
</div>
<div class="p-3 bg-orange-900/60 rounded-lg border-2 border-orange-400">
<div class="text-lg mb-2">4️⃣</div>
<div class="text-white font-bold mb-2">Ongoing: Factory</div>
<div class="text-gray-300 space-y-1">
<div>• Every policy has check</div>
<div>• Every check = evidence</div>
<div>• Every violation blocked</div>
<div>• Continuous improvement</div>
</div>
</div>
</div>

<div class="mt-8 text-center">
<div class="text-3xl text-gray-400">↓ ↓ ↓</div>
</div>

<div class="mt-4 p-5 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-lg text-center">
<div class="text-xl font-bold text-white">Build the trust factory. Everything else depends on it.</div>
</div>

---
layout: center
---

# The Bottom Line

<div class="text-xl mt-12 space-y-6">
<div class="p-4 bg-red-900/30 rounded-lg border-l-4 border-red-400">
<span class="text-red-300 font-bold">Traditional CI:</span> <span class="text-gray-300">"Did this code pass the tests?"</span>
</div>

<div class="text-4xl text-center text-gray-400">↓</div>

<div class="p-4 bg-green-900/30 rounded-lg border-l-4 border-green-400">
<span class="text-green-300 font-bold">Agentic CI:</span> <span class="text-gray-300">"Do we have sufficient evidence to trust this change?"</span>
</div>
</div>

<div class="mt-12 text-center text-lg text-gray-400 italic">
The difference isn't subtle—it's transformational.
</div>

---

# When CI Becomes a Trust Factory

<div class="grid grid-cols-2 gap-4 mt-8 text-sm">
<div class="p-4 bg-gray-800 rounded-lg flex items-center gap-3">
<span class="text-3xl">✅</span>
<div>
<div class="text-white font-bold">Velocity Unlocked</div>
<div class="text-gray-400">Agents ship 10-15 features/day safely</div>
</div>
</div>
<div class="p-4 bg-gray-800 rounded-lg flex items-center gap-3">
<span class="text-3xl">✅</span>
<div>
<div class="text-white font-bold">Automated Compliance</div>
<div class="text-gray-400">Not manual burden, but byproduct</div>
</div>
</div>
<div class="p-4 bg-gray-800 rounded-lg flex items-center gap-3">
<span class="text-3xl">✅</span>
<div>
<div class="text-white font-bold">Proactive Security</div>
<div class="text-gray-400">Violations caught before merge, not in audits</div>
</div>
</div>
<div class="p-4 bg-gray-800 rounded-lg flex items-center gap-3">
<span class="text-3xl">✅</span>
<div>
<div class="text-white font-bold">Outcome Governance</div>
<div class="text-gray-400">Humans validate outcomes, not implementations</div>
</div>
</div>
<div class="p-4 bg-gray-800 rounded-lg flex items-center gap-3">
<span class="text-3xl">✅</span>
<div>
<div class="text-white font-bold">Linear Trust Scaling</div>
<div class="text-gray-400">Trust scales with velocity, not review time</div>
</div>
</div>
<div class="p-4 bg-gray-800 rounded-lg flex items-center gap-3">
<span class="text-3xl">🏭</span>
<div>
<div class="text-white font-bold">Evidence Manufacturing</div>
<div class="text-gray-400">Audit trails as CI artifacts, not afterthoughts</div>
</div>
</div>
</div>

<div class="mt-8 p-6 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-lg text-center">
<div class="text-2xl font-bold text-white">🏭 Build the trust factory. Everything else depends on it.</div>
</div>

---
layout: end
---

# Thank You

<div class="text-center mt-12">
<div class="text-2xl mb-8">Questions?</div>
<div class="text-lg text-gray-400">This is the foundation. Master the trust factory, then scale agent delivery.</div>
</div>

<div class="mt-16 text-sm text-gray-500">
<div class="font-bold mb-2">Further Reading:</div>
<div>• GitHub CLI Copilot Extension</div>
<div>• Policy-as-Code: Open Policy Agent, HashiCorp Sentinel</div>
<div>• Compliance Automation: NIST 800-53, GDPR, PCI-DSS</div>
<div>• Trust Architectures: SLSA (Supply Chain Levels for Software Artifacts)</div>
</div>
