---
theme: default
background: https://source.unsplash.com/collection/94734566/1920x1080
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## GitHub Copilot on the Web
  45-minute technical presentation about multi-interface AI assistance
drawings:
  persist: false
transition: slide-left
title: GitHub Copilot on the Web
mdc: true
---

# GitHub Copilot on the Web

## Multi-interface AI assistance for browser and mobile workflows

<div class="pt-12">
  <span class="text-6xl">🌐</span>
</div>

<div class="abs-br m-6 flex gap-2">
  <span class="text-sm opacity-50">45-minute Tech Talk</span>
</div>

---

# The Interface Problem

<div class="grid grid-cols-2 gap-8 mt-8">

<div class="p-6 bg-red-900/40 rounded-lg border-2 border-red-500">
  <h3 class="text-xl font-bold text-red-400 mb-4">❌ Current Reality</h3>
  <ul class="text-sm space-y-2">
    <li>🖥️ AI assistance constrained to IDE</li>
    <li>📱 Work happens everywhere</li>
    <li>🔄 Context-switching overhead</li>
    <li>🔒 Customizations trapped in VS Code</li>
  </ul>
</div>

<div class="p-6 bg-green-900/40 rounded-lg border-2 border-green-500">
  <h3 class="text-xl font-bold text-green-400 mb-4">✨ The Reality</h3>
  <ul class="text-sm space-y-2">
    <li>💼 PR reviews in browsers</li>
    <li>📊 Issue triage on mobile</li>
    <li>🤝 Stakeholder discussions without laptops</li>
    <li>⚡ AI needed everywhere, not just IDE</li>
  </ul>
</div>

</div>

<div class="mt-8 p-5 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-lg text-center">
  <div class="text-xl font-bold text-white">Modern development extends far beyond coding</div>
</div>

---
layout: center
---

# The Insight

<div class="text-3xl text-center leading-relaxed">
  <span class="text-blue-400">AI assistance</span> traditionally lives exclusively in the <span class="text-purple-400">IDE</span>,<br/>
  forcing <span class="text-red-400">awkward context switches</span> or<br/>
  <span class="text-yellow-400">abandoning AI help entirely</span>
</div>

<div class="text-2xl text-gray-400 text-center mt-8">↓</div>

<div class="mt-8 p-6 bg-gradient-to-r from-green-600 to-green-800 rounded-xl shadow-lg text-center">
  <div class="text-2xl font-bold text-white">
    GitHub Copilot on the Web brings full AI capabilities—<br/>
    including all repository customizations—<br/>
    to browser and mobile interfaces
  </div>
</div>

---

# Architecture: Same AI, Different Interface

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="space-y-3">
  <div class="p-4 bg-blue-900/60 rounded-lg border-2 border-blue-400">
    <div class="text-lg font-bold text-blue-300 mb-2">🧠 Same AI</div>
    <div class="text-sm text-gray-300">Identical model access as VS Code</div>
  </div>
  
  <div class="p-4 bg-green-900/60 rounded-lg border-2 border-green-400">
    <div class="text-lg font-bold text-green-300 mb-2">🔧 Full Portability</div>
    <div class="text-sm text-gray-300">Repository instructions, skills, agents work identically</div>
  </div>
</div>

<div class="space-y-3">
  <div class="p-4 bg-purple-900/60 rounded-lg border-2 border-purple-400">
    <div class="text-lg font-bold text-purple-300 mb-2">🛠️ Adapted Tools</div>
    <div class="text-sm text-gray-300">Code analysis, issue/PR creation, cross-repo queries</div>
  </div>
  
  <div class="p-4 bg-orange-900/60 rounded-lg border-2 border-orange-400">
    <div class="text-lg font-bold text-orange-300 mb-2">📱 Mobile-First</div>
    <div class="text-sm text-gray-300">Responsive UI for reviews and triage from phones</div>
  </div>
</div>

</div>

<div class="mt-6 p-5 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-lg text-center">
  <div class="text-xl font-bold text-white">Not a limited browser version—the complete AI platform with interface-appropriate tooling</div>
</div>

---

# What Works on Web

<div class="grid grid-cols-3 gap-4 mt-6">

<div class="p-4 bg-blue-900/40 rounded-lg border-l-4 border-blue-400">
  <div class="text-2xl mb-2">📚</div>
  <div class="font-bold text-blue-300 mb-2">Repository Instructions</div>
  <div class="text-xs text-gray-400">
    <code>.github/copilot-instructions.md</code>
    <div class="mt-2">✓ Auto-loads</div>
    <div>✓ Same standards</div>
    <div>✓ Zero config</div>
  </div>
</div>

<div class="p-4 bg-green-900/40 rounded-lg border-l-4 border-green-400">
  <div class="text-2xl mb-2">🎯</div>
  <div class="font-bold text-green-300 mb-2">Agent Skills</div>
  <div class="text-xs text-gray-400">
    <code>.github/skills/</code>
    <div class="mt-2">✓ Web accessible</div>
    <div>✓ Identical execution</div>
    <div>✓ Natural language</div>
  </div>
</div>

<div class="p-4 bg-purple-900/40 rounded-lg border-l-4 border-purple-400">
  <div class="text-2xl mb-2">🤖</div>
  <div class="font-bold text-purple-300 mb-2">Custom Agents</div>
  <div class="text-xs text-gray-400">
    <code>@review-enforcer</code>
    <div class="mt-2">✓ Agent dropdown</div>
    <div>✓ Same behavior</div>
    <div>✓ Mobile ready</div>
  </div>
</div>

</div>

<div class="mt-8 p-5 bg-gradient-to-r from-green-600 to-green-800 rounded-xl shadow-lg text-center">
  <div class="text-2xl font-bold text-white">Create once, use everywhere—maximize ROI on customization</div>
</div>

---

# Web-Specific Capabilities

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="p-3 bg-gray-800 rounded-lg flex items-center gap-3">
  <span class="text-3xl">🖼️</span>
  <div>
    <div class="text-white font-bold">Issue Creation from Images</div>
    <div class="text-gray-400">Drag screenshots, AI extracts details, generates structured issues</div>
  </div>
</div>

<div class="p-3 bg-gray-800 rounded-lg flex items-center gap-3">
  <span class="text-3xl">🌐</span>
  <div>
    <div class="text-white font-bold">Cross-Repository Access</div>
    <div class="text-gray-400">Query any repo without cloning, track work across org</div>
  </div>
</div>

<div class="p-3 bg-gray-800 rounded-lg flex items-center gap-3">
  <span class="text-3xl">📱</span>
  <div>
    <div class="text-white font-bold">Mobile PR Reviews</div>
    <div class="text-gray-400">Invoke custom agents from phone, unblock teams immediately</div>
  </div>
</div>

<div class="p-3 bg-gray-800 rounded-lg flex items-center gap-3">
  <span class="text-3xl">⚡</span>
  <div>
    <div class="text-white font-bold">GitHub Spark Prototyping</div>
    <div class="text-gray-400">Generate interactive UI prototypes, share live previews</div>
  </div>
</div>

<div class="p-3 bg-gray-800 rounded-lg flex items-center gap-3">
  <span class="text-3xl">🤖</span>
  <div>
    <div class="text-white font-bold">Coding Agent Delegation</div>
    <div class="text-gray-400">Assign routine tasks, monitor progress, review results</div>
  </div>
</div>

<div class="p-3 bg-gray-800 rounded-lg flex items-center gap-3">
  <span class="text-3xl">📝</span>
  <div>
    <div class="text-white font-bold">Documentation Generation</div>
    <div class="text-gray-400">Create user docs from code without context switch</div>
  </div>
</div>

</div>

<div class="mt-6 text-center text-gray-400 italic text-sm">
  Workflows impossible in IDE-only environments
</div>

---

# Use Case: Mobile PR Reviews

<div class="grid grid-cols-2 gap-8 mt-6">

<div>
  <h3 class="text-xl font-bold text-red-400 mb-4">❌ The Problem</h3>
  <div class="space-y-3 text-sm">
    <div class="p-3 bg-red-900/30 rounded-lg">
      <div class="font-bold text-white">Team Blocking</div>
      <div class="text-gray-400">PRs wait hours for reviewers to return to desk</div>
    </div>
    <div class="p-3 bg-red-900/30 rounded-lg">
      <div class="font-bold text-white">Quick Approvals</div>
      <div class="text-gray-400">Skip analysis to unblock team, risk bugs</div>
    </div>
    <div class="p-3 bg-red-900/30 rounded-lg">
      <div class="font-bold text-white">Context Loss</div>
      <div class="text-gray-400">Delayed reviews lose architectural context</div>
    </div>
  </div>
</div>

<div>
  <h3 class="text-xl font-bold text-green-400 mb-4">✅ The Solution</h3>
  <div class="space-y-3 text-sm">
    <div class="p-3 bg-green-900/30 rounded-lg">
      <div class="font-bold text-white">Open PR on Mobile</div>
      <div class="text-gray-400">During meeting or commute</div>
    </div>
    <div class="p-3 bg-green-900/30 rounded-lg">
      <div class="font-bold text-white">Invoke @review-enforcer</div>
      <div class="text-gray-400">Standards-based analysis in 3 minutes</div>
    </div>
    <div class="p-3 bg-green-900/30 rounded-lg">
      <div class="font-bold text-white">Team Unblocked</div>
      <div class="text-gray-400">Immediately with quality maintained</div>
    </div>
  </div>
</div>

</div>

<div class="mt-6 grid grid-cols-3 gap-4 text-center">
  <div class="p-3 bg-blue-900/60 rounded-lg">
    <div class="text-2xl font-bold text-blue-300">2 hours → 0 min</div>
    <div class="text-xs text-gray-400">Blocking time per PR</div>
  </div>
  <div class="p-3 bg-blue-900/60 rounded-lg">
    <div class="text-2xl font-bold text-blue-300">16 hrs/week</div>
    <div class="text-xs text-gray-400">Team velocity gained</div>
  </div>
  <div class="p-3 bg-blue-900/60 rounded-lg">
    <div class="text-2xl font-bold text-blue-300">Same quality</div>
    <div class="text-xs text-gray-400">As IDE-based reviews</div>
  </div>
</div>

---

# Use Case: Issue Triage from Screenshots

<div class="grid grid-cols-2 gap-8 mt-6">

<div>
  <h3 class="text-xl font-bold text-red-400 mb-4">❌ Manual Process</h3>
  <div class="space-y-3 text-sm">
    <div class="p-3 bg-red-900/30 rounded-lg">
      <div class="font-bold text-white">10-14 minutes</div>
      <div class="text-gray-400">Copying alert details into GitHub issues</div>
    </div>
    <div class="p-3 bg-red-900/30 rounded-lg">
      <div class="font-bold text-white">60% detail loss</div>
      <div class="text-gray-400">Screenshot context missed in manual entry</div>
    </div>
    <div class="p-3 bg-red-900/30 rounded-lg">
      <div class="font-bold text-white">Template skipped</div>
      <div class="text-gray-400">Manual filing loses metadata</div>
    </div>
  </div>
</div>

<div>
  <h3 class="text-xl font-bold text-green-400 mb-4">✅ AI-Powered Flow</h3>
  <div class="space-y-3 text-sm">
    <div class="p-3 bg-green-900/30 rounded-lg">
      <div class="font-bold text-white">Drag Screenshot</div>
      <div class="text-gray-400">Into github.com/copilot</div>
    </div>
    <div class="p-3 bg-green-900/30 rounded-lg">
      <div class="font-bold text-white">AI Reads Image</div>
      <div class="text-gray-400">Errors, stack traces, timestamps, system state</div>
    </div>
    <div class="p-3 bg-green-900/30 rounded-lg">
      <div class="font-bold text-white">Generates Issue</div>
      <div class="text-gray-400">Template applied, labels assigned, links added</div>
    </div>
  </div>
</div>

</div>

<div class="mt-6 grid grid-cols-3 gap-4 text-center">
  <div class="p-3 bg-blue-900/60 rounded-lg">
    <div class="text-2xl font-bold text-blue-300">14 min → 2 min</div>
    <div class="text-xs text-gray-400">Per issue filed</div>
  </div>
  <div class="p-3 bg-blue-900/60 rounded-lg">
    <div class="text-2xl font-bold text-blue-300">95% capture</div>
    <div class="text-xs text-gray-400">vs 60% manual</div>
  </div>
  <div class="p-3 bg-blue-900/60 rounded-lg">
    <div class="text-2xl font-bold text-blue-300">60 min/week</div>
    <div class="text-xs text-gray-400">Saved on alerts</div>
  </div>
</div>

---

# Use Case: Real-Time Effort Estimation

<div class="grid grid-cols-2 gap-8 mt-6">

<div>
  <h3 class="text-xl font-bold text-red-400 mb-4">❌ Traditional Flow</h3>
  <div class="space-y-3 text-sm">
    <div class="p-3 bg-red-900/30 rounded-lg">
      <div class="font-bold text-white">Stakeholder Delays</div>
      <div class="text-gray-400">"Let me research and get back to you"</div>
    </div>
    <div class="p-3 bg-red-900/30 rounded-lg">
      <div class="font-bold text-white">90 minutes</div>
      <div class="text-gray-400">Investigating dependencies, complexity, risk</div>
    </div>
    <div class="p-3 bg-red-900/30 rounded-lg">
      <div class="font-bold text-white">Lost Momentum</div>
      <div class="text-gray-400">2-hour delay causes rescheduling</div>
    </div>
  </div>
</div>

<div>
  <h3 class="text-xl font-bold text-green-400 mb-4">✅ Web Copilot Flow</h3>
  <div class="space-y-3 text-sm">
    <div class="p-3 bg-green-900/30 rounded-lg">
      <div class="font-bold text-white">During the Call</div>
      <div class="text-gray-400">Stakeholder asks effort question</div>
    </div>
    <div class="p-3 bg-green-900/30 rounded-lg">
      <div class="font-bold text-white">Invoke effort-estimator</div>
      <div class="text-gray-400">AI analyzes codebase, dependencies, velocity</div>
    </div>
    <div class="p-3 bg-green-900/30 rounded-lg">
      <div class="font-bold text-white">3-minute Estimate</div>
      <div class="text-gray-400">Data-driven answer without leaving call</div>
    </div>
  </div>
</div>

</div>

<div class="mt-6 grid grid-cols-3 gap-4 text-center">
  <div class="p-3 bg-blue-900/60 rounded-lg">
    <div class="text-2xl font-bold text-blue-300">90 min → 3 min</div>
    <div class="text-xs text-gray-400">Per estimate</div>
  </div>
  <div class="p-3 bg-blue-900/60 rounded-lg">
    <div class="text-2xl font-bold text-blue-300">0 delay</div>
    <div class="text-xs text-gray-400">Real-time decisions</div>
  </div>
  <div class="p-3 bg-blue-900/60 rounded-lg">
    <div class="text-2xl font-bold text-blue-300">4.3 hrs/week</div>
    <div class="text-xs text-gray-400">Saved on inquiries</div>
  </div>
</div>

---

# Use Case: Documentation from Code

<div class="grid grid-cols-2 gap-8 mt-6">

<div>
  <h3 class="text-xl font-bold text-red-400 mb-4">❌ Context Switching</h3>
  <div class="space-y-3 text-sm">
    <div class="p-3 bg-red-900/30 rounded-lg">
      <div class="font-bold text-white">IDE ↔ Browser</div>
      <div class="text-gray-400">Reading code, then writing docs separately</div>
    </div>
    <div class="p-3 bg-red-900/30 rounded-lg">
      <div class="font-bold text-white">65 minutes total</div>
      <div class="text-gray-400">Read 15 min + Write 35 min + Format 10 min</div>
    </div>
    <div class="p-3 bg-red-900/30 rounded-lg">
      <div class="font-bold text-white">Docs lag behind</div>
      <div class="text-gray-400">Become inaccurate, only 60% coverage</div>
    </div>
  </div>
</div>

<div>
  <h3 class="text-xl font-bold text-green-400 mb-4">✅ Web Copilot Flow</h3>
  <div class="space-y-3 text-sm">
    <div class="p-3 bg-green-900/30 rounded-lg">
      <div class="font-bold text-white">Navigate to Code</div>
      <div class="text-gray-400">View implementation in browser</div>
    </div>
    <div class="p-3 bg-green-900/30 rounded-lg">
      <div class="font-bold text-white">Ask Copilot</div>
      <div class="text-gray-400">AI reads code, writes product language</div>
    </div>
    <div class="p-3 bg-green-900/30 rounded-lg">
      <div class="font-bold text-white">8 minutes review</div>
      <div class="text-gray-400">Refine and publish</div>
    </div>
  </div>
</div>

</div>

<div class="mt-6 grid grid-cols-3 gap-4 text-center">
  <div class="p-3 bg-blue-900/60 rounded-lg">
    <div class="text-2xl font-bold text-blue-300">65 min → 8 min</div>
    <div class="text-xs text-gray-400">Per feature documented</div>
  </div>
  <div class="p-3 bg-blue-900/60 rounded-lg">
    <div class="text-2xl font-bold text-blue-300">100% coverage</div>
    <div class="text-xs text-gray-400">vs 60% manual</div>
  </div>
  <div class="p-3 bg-blue-900/60 rounded-lg">
    <div class="text-2xl font-bold text-blue-300">1.9 hrs/week</div>
    <div class="text-xs text-gray-400">Saved for product teams</div>
  </div>
</div>

---

# Multi-Model Selection

<div class="grid grid-cols-3 gap-4 mt-6">

<div class="p-4 bg-blue-900/40 rounded-lg border-2 border-blue-400">
  <div class="text-2xl mb-2">⚡</div>
  <div class="font-bold text-blue-300 text-lg mb-2">GPT-4.1</div>
  <div class="text-sm text-gray-300 space-y-1">
    <div>✓ Fast inference</div>
    <div>✓ Cost-effective</div>
    <div>✓ Strong code analysis</div>
  </div>
  <div class="mt-3 p-2 bg-blue-800/60 rounded text-xs text-blue-200">
    Best for: Routine queries
  </div>
</div>

<div class="p-4 bg-purple-900/40 rounded-lg border-2 border-purple-400">
  <div class="text-2xl mb-2">📝</div>
  <div class="font-bold text-purple-300 text-lg mb-2">Claude Sonnet 4</div>
  <div class="text-sm text-gray-300 space-y-1">
    <div>✓ Balanced performance</div>
    <div>✓ Excellent writing</div>
    <div>✓ Technical docs</div>
  </div>
  <div class="mt-3 p-2 bg-purple-800/60 rounded text-xs text-purple-200">
    Best for: Documentation
  </div>
</div>

<div class="p-4 bg-orange-900/40 rounded-lg border-2 border-orange-400">
  <div class="text-2xl mb-2">🧠</div>
  <div class="font-bold text-orange-300 text-lg mb-2">Claude Opus 4</div>
  <div class="text-sm text-gray-300 space-y-1">
    <div>✓ Highest reasoning</div>
    <div>✓ Complex analysis</div>
    <div>✓ Architecture</div>
  </div>
  <div class="mt-3 p-2 bg-orange-800/60 rounded text-xs text-orange-200">
    Best for: Critical decisions
  </div>
</div>

</div>

<div class="mt-6 p-4 bg-gray-800 rounded-lg">
  <div class="font-bold text-white mb-2">When to Switch Models:</div>
  <div class="grid grid-cols-3 gap-4 text-sm text-gray-300">
    <div><span class="text-blue-400">→</span> PR reviews, issue triage</div>
    <div><span class="text-purple-400">→</span> Release notes, user guides</div>
    <div><span class="text-orange-400">→</span> System design, refactoring</div>
  </div>
</div>

<div class="mt-4 text-center text-sm text-gray-400 italic">
  Match model capabilities to task requirements—optimize quality and cost
</div>

---

# Integration with IDE Workflows

<div class="grid grid-cols-3 gap-4 mt-6 text-sm">

<div class="p-4 bg-blue-900/40 rounded-lg border-l-4 border-blue-400">
  <div class="text-3xl mb-2">💻</div>
  <div class="font-bold text-blue-300 text-lg mb-3">VS Code</div>
  <div class="text-xs text-gray-400 mb-2 font-semibold">Implementation</div>
  <div class="text-xs text-gray-300 space-y-1">
    <div>• Write and edit code</div>
    <div>• Run tests and debugger</div>
    <div>• Local file system access</div>
    <div>• Full repository editing</div>
  </div>
</div>

<div class="p-4 bg-green-900/40 rounded-lg border-l-4 border-green-400">
  <div class="text-3xl mb-2">🌐</div>
  <div class="font-bold text-green-300 text-lg mb-3">Web</div>
  <div class="text-xs text-gray-400 mb-2 font-semibold">Coordination</div>
  <div class="text-xs text-gray-300 space-y-1">
    <div>• Plan features across repos</div>
    <div>• Review PRs from anywhere</div>
    <div>• Triage issues with visuals</div>
    <div>• Generate documentation</div>
  </div>
</div>

<div class="p-4 bg-purple-900/40 rounded-lg border-l-4 border-purple-400">
  <div class="text-3xl mb-2">⚙️</div>
  <div class="font-bold text-purple-300 text-lg mb-3">CLI</div>
  <div class="text-xs text-gray-400 mb-2 font-semibold">Automation</div>
  <div class="text-xs text-gray-300 space-y-1">
    <div>• Script repetitive tasks</div>
    <div>• CI/CD integration</div>
    <div>• Infrastructure management</div>
    <div>• Batch operations</div>
  </div>
</div>

</div>

<div class="mt-6 p-5 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-lg text-center">
  <div class="text-xl font-bold text-white">Web Copilot doesn't replace the IDE—it extends AI to coordination workflows</div>
</div>

<div class="mt-4 text-center text-sm text-gray-400 italic">
  Same AI and customizations across interfaces—consistent intelligence throughout
</div>

---

# GitHub Spark: Rapid Prototyping

<div class="grid grid-cols-2 gap-8 mt-6">

<div>
  <h3 class="text-xl font-bold text-purple-400 mb-4">⚡ Key Capabilities</h3>
  <div class="space-y-3 text-sm">
    <div class="p-3 bg-purple-900/30 rounded-lg">
      <div class="font-bold text-white">Natural Language UI</div>
      <div class="text-gray-400">Describe interface, AI creates interactive prototype</div>
    </div>
    <div class="p-3 bg-purple-900/30 rounded-lg">
      <div class="font-bold text-white">Live Sharing</div>
      <div class="text-gray-400">Send preview link, collect feedback immediately</div>
    </div>
    <div class="p-3 bg-purple-900/30 rounded-lg">
      <div class="font-bold text-white">Design Iteration</div>
      <div class="text-gray-400">Test concepts before committing dev resources</div>
    </div>
    <div class="p-3 bg-purple-900/30 rounded-lg">
      <div class="font-bold text-white">Code Export</div>
      <div class="text-gray-400">Convert validated prototypes to production</div>
    </div>
  </div>
</div>

<div>
  <h3 class="text-xl font-bold text-green-400 mb-4">🎯 Use Cases</h3>
  <div class="space-y-3 text-sm">
    <div class="p-3 bg-green-900/30 rounded-lg">
      <div class="font-bold text-white">Design Validation</div>
      <div class="text-gray-400">Test UX ideas with users before building</div>
    </div>
    <div class="p-3 bg-green-900/30 rounded-lg">
      <div class="font-bold text-white">Stakeholder Alignment</div>
      <div class="text-gray-400">Show live prototypes during planning meetings</div>
    </div>
    <div class="p-3 bg-green-900/30 rounded-lg">
      <div class="font-bold text-white">Requirements Clarification</div>
      <div class="text-gray-400">Concrete examples vs abstract descriptions</div>
    </div>
    <div class="p-3 bg-green-900/30 rounded-lg">
      <div class="font-bold text-white">Onboarding</div>
      <div class="text-gray-400">Create interactive demos of proposed features</div>
    </div>
  </div>
</div>

</div>

<div class="mt-6 p-5 bg-gradient-to-r from-purple-600 to-purple-800 rounded-xl shadow-lg text-center">
  <div class="text-xl font-bold text-white">Design-driven development: prove concepts with users before committing resources</div>
</div>

---

# Coding Agent: Autonomous Execution

<div class="grid grid-cols-2 gap-8 mt-6">

<div>
  <h3 class="text-xl font-bold text-orange-400 mb-4">🤖 How It Works</h3>
  <div class="space-y-3 text-sm">
    <div class="p-3 bg-orange-900/30 rounded-lg">
      <div class="font-bold text-white">Task Delegation</div>
      <div class="text-gray-400">Assign routine implementation to autonomous agent</div>
    </div>
    <div class="p-3 bg-orange-900/30 rounded-lg">
      <div class="font-bold text-white">Progress Monitoring</div>
      <div class="text-gray-400">Track work from task pane, review decisions real-time</div>
    </div>
    <div class="p-3 bg-orange-900/30 rounded-lg">
      <div class="font-bold text-white">PR-Based Workflow</div>
      <div class="text-gray-400">Agent creates branch, makes changes, opens PR</div>
    </div>
    <div class="p-3 bg-orange-900/30 rounded-lg">
      <div class="font-bold text-white">Custom Integration</div>
      <div class="text-gray-400">Respects repository instructions and skills</div>
    </div>
  </div>
</div>

<div>
  <h3 class="text-xl font-bold text-blue-400 mb-4">🎯 Best For</h3>
  <div class="space-y-3 text-sm">
    <div class="p-3 bg-blue-900/30 rounded-lg">
      <div class="font-bold text-white">Routine Refactoring</div>
      <div class="text-gray-400">Update API patterns across multiple files</div>
    </div>
    <div class="p-3 bg-blue-900/30 rounded-lg">
      <div class="font-bold text-white">Boilerplate Generation</div>
      <div class="text-gray-400">Create CRUD endpoints, test scaffolding</div>
    </div>
    <div class="p-3 bg-blue-900/30 rounded-lg">
      <div class="font-bold text-white">Documentation Updates</div>
      <div class="text-gray-400">Sync docs with implementation changes</div>
    </div>
    <div class="p-3 bg-blue-900/30 rounded-lg">
      <div class="font-bold text-white">Dependency Upgrades</div>
      <div class="text-gray-400">Update libraries with migration patterns</div>
    </div>
  </div>
</div>

</div>

<div class="mt-6 p-5 bg-gradient-to-r from-orange-600 to-orange-800 rounded-xl shadow-lg text-center">
  <div class="text-xl font-bold text-white">Humans focus on architecture and review—agents handle mechanical execution</div>
</div>

---

# Best Practices

<div class="grid grid-cols-2 gap-8 mt-6">

<div>
  <h3 class="text-xl font-bold text-blue-400 mb-4">🔧 Customization Strategy</h3>
  <div class="space-y-3 text-sm">
    <div class="p-3 bg-blue-900/30 rounded-lg border-l-4 border-blue-400">
      <div class="font-bold text-white mb-1">Create in IDE, use everywhere</div>
      <div class="text-gray-400">Build in VS Code, auto-works on web</div>
    </div>
    <div class="p-3 bg-blue-900/30 rounded-lg border-l-4 border-blue-400">
      <div class="font-bold text-white mb-1">Test portability</div>
      <div class="text-gray-400">Verify agents/skills in browser before rollout</div>
    </div>
    <div class="p-3 bg-blue-900/30 rounded-lg border-l-4 border-blue-400">
      <div class="font-bold text-white mb-1">Mobile-first agents</div>
      <div class="text-gray-400">Design for quick decisions on phones</div>
    </div>
  </div>
</div>

<div>
  <h3 class="text-xl font-bold text-green-400 mb-4">📱 Access Patterns</h3>
  <div class="space-y-3 text-sm">
    <div class="p-3 bg-green-900/30 rounded-lg border-l-4 border-green-400">
      <div class="font-bold text-white mb-1">Web: Coordination</div>
      <div class="text-gray-400">Planning, docs, cross-repo analysis</div>
    </div>
    <div class="p-3 bg-green-900/30 rounded-lg border-l-4 border-green-400">
      <div class="font-bold text-white mb-1">IDE: Implementation</div>
      <div class="text-gray-400">Coding, debugging, refactoring, testing</div>
    </div>
    <div class="p-3 bg-green-900/30 rounded-lg border-l-4 border-green-400">
      <div class="font-bold text-white mb-1">Mobile: Unblocking</div>
      <div class="text-gray-400">PR reviews, issue triage, quick answers</div>
    </div>
  </div>
</div>

</div>

<div class="mt-6 p-5 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-lg text-center">
  <div class="text-xl font-bold text-white">AI benefits distribute broadly—customization effort centralizes with engineering</div>
</div>

---

# Common Pitfalls

<div class="grid grid-cols-3 gap-4 mt-6 text-sm">

<div class="space-y-3">
  <div class="p-3 bg-red-900/40 rounded-lg border-2 border-red-500">
    <div class="text-red-400 font-bold mb-2">❌ Wrong</div>
    <div class="text-gray-300">Different instructions for web vs IDE</div>
  </div>
  <div class="p-3 bg-green-900/40 rounded-lg border-2 border-green-500">
    <div class="text-green-400 font-bold mb-2">✅ Right</div>
    <div class="text-gray-300">Single repository instructions work everywhere</div>
  </div>
</div>

<div class="space-y-3">
  <div class="p-3 bg-red-900/40 rounded-lg border-2 border-red-500">
    <div class="text-red-400 font-bold mb-2">❌ Wrong</div>
    <div class="text-gray-300">Trying to write code in github.com/copilot</div>
  </div>
  <div class="p-3 bg-green-900/40 rounded-lg border-2 border-green-500">
    <div class="text-green-400 font-bold mb-2">✅ Right</div>
    <div class="text-gray-300">Use web for planning, IDE for coding</div>
  </div>
</div>

<div class="space-y-3">
  <div class="p-3 bg-red-900/40 rounded-lg border-2 border-red-500">
    <div class="text-red-400 font-bold mb-2">❌ Wrong</div>
    <div class="text-gray-300">Assuming all work happens on laptops</div>
  </div>
  <div class="p-3 bg-green-900/40 rounded-lg border-2 border-green-500">
    <div class="text-green-400 font-bold mb-2">✅ Right</div>
    <div class="text-gray-300">Design agents for phones (reviews/triage)</div>
  </div>
</div>

</div>

<div class="mt-6 p-4 bg-gradient-to-r from-yellow-900/40 to-gray-800 rounded-lg text-center">
  <span class="text-white font-bold">⚠️ Biggest missed opportunity: ignoring mobile workflows</span>
</div>

<div class="mt-4 text-center text-sm text-gray-400 italic">
  Modern teams are distributed and mobile—design for it
</div>

---

# Enterprise Considerations

<div class="grid grid-cols-2 gap-8 mt-6">

<div>
  <h3 class="text-xl font-bold text-red-400 mb-4">🔒 Security & Compliance</h3>
  <div class="space-y-3 text-sm">
    <div class="p-3 bg-gray-800 rounded-lg">
      <div class="font-bold text-white mb-1">Same Access Controls</div>
      <div class="text-gray-400">Web Copilot respects repository permissions</div>
    </div>
    <div class="p-3 bg-gray-800 rounded-lg">
      <div class="font-bold text-white mb-1">Audit Trail</div>
      <div class="text-gray-400">All AI interactions logged like VS Code</div>
    </div>
    <div class="p-3 bg-gray-800 rounded-lg">
      <div class="font-bold text-white mb-1">Custom Agent Enforcement</div>
      <div class="text-gray-400">Security-focused agents work on web</div>
    </div>
  </div>
</div>

<div>
  <h3 class="text-xl font-bold text-green-400 mb-4">🚀 Organizational Rollout</h3>
  <div class="space-y-3 text-sm">
    <div class="p-3 bg-gray-800 rounded-lg">
      <div class="font-bold text-white mb-1">Lower Barrier to Entry</div>
      <div class="text-gray-400">Non-engineers access AI without IDE setup</div>
    </div>
    <div class="p-3 bg-gray-800 rounded-lg">
      <div class="font-bold text-white mb-1">Broad Productivity Gains</div>
      <div class="text-gray-400">Product, design, operations benefit</div>
    </div>
    <div class="p-3 bg-gray-800 rounded-lg">
      <div class="font-bold text-white mb-1">Centralized Customization</div>
      <div class="text-gray-400">Engineering creates, organization benefits</div>
    </div>
  </div>
</div>

</div>

<div class="mt-6 p-5 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-lg text-center">
  <div class="text-xl font-bold text-white">Democratize AI assistance beyond engineering—entire org benefits from customizations</div>
</div>

---

# Metrics and ROI

<div class="grid grid-cols-4 gap-3 mt-6 text-center">
  <div class="p-3 bg-blue-900/60 rounded-lg">
    <div class="text-2xl font-bold text-blue-300">85%</div>
    <div class="text-xs text-gray-400">Issue filing time saved</div>
  </div>
  <div class="p-3 bg-blue-900/60 rounded-lg">
    <div class="text-2xl font-bold text-blue-300">2 hrs → 0</div>
    <div class="text-xs text-gray-400">PR blocking time</div>
  </div>
  <div class="p-3 bg-blue-900/60 rounded-lg">
    <div class="text-2xl font-bold text-blue-300">97%</div>
    <div class="text-xs text-gray-400">Estimation time saved</div>
  </div>
  <div class="p-3 bg-blue-900/60 rounded-lg">
    <div class="text-2xl font-bold text-blue-300">88%</div>
    <div class="text-xs text-gray-400">Documentation time saved</div>
  </div>
</div>

<div class="mt-6">
  <h3 class="text-xl font-bold text-green-400 mb-4 text-center">📊 Team Velocity Gains</h3>
  <div class="grid grid-cols-3 gap-4 text-sm">
    <div class="p-4 bg-green-900/30 rounded-lg text-center">
      <div class="text-3xl font-bold text-green-300">16 hrs/week</div>
      <div class="text-gray-400 mt-2">Capacity from mobile PR reviews</div>
    </div>
    <div class="p-4 bg-green-900/30 rounded-lg text-center">
      <div class="text-3xl font-bold text-green-300">60 min/week</div>
      <div class="text-gray-400 mt-2">Saved on issue triage</div>
    </div>
    <div class="p-4 bg-green-900/30 rounded-lg text-center">
      <div class="text-3xl font-bold text-green-300">4.3 hrs/week</div>
      <div class="text-gray-400 mt-2">Saved on stakeholder comms</div>
    </div>
  </div>
</div>

<div class="mt-6 p-5 bg-gradient-to-r from-green-600 to-green-800 rounded-xl shadow-lg text-center">
  <div class="text-xl font-bold text-white">ROI from eliminating context switches and enabling mobile workflows</div>
</div>

---
layout: center
---

# The Multi-Interface Vision

<div class="grid grid-cols-4 gap-4 mt-8 text-sm">

<div class="p-4 bg-blue-900/40 rounded-lg text-center">
  <div class="text-3xl mb-2">💻</div>
  <div class="font-bold text-blue-300 mb-2">IDE</div>
  <div class="text-xs text-gray-400 space-y-1">
    <div>Implementation</div>
    <div>Debugging</div>
    <div>Local file editing</div>
    <div>Test execution</div>
  </div>
</div>

<div class="p-4 bg-green-900/40 rounded-lg text-center">
  <div class="text-3xl mb-2">🌐</div>
  <div class="font-bold text-green-300 mb-2">Web</div>
  <div class="text-xs text-gray-400 space-y-1">
    <div>Planning</div>
    <div>Coordination</div>
    <div>PR reviews</div>
    <div>Documentation</div>
  </div>
</div>

<div class="p-4 bg-purple-900/40 rounded-lg text-center">
  <div class="text-3xl mb-2">📱</div>
  <div class="font-bold text-purple-300 mb-2">Mobile</div>
  <div class="text-xs text-gray-400 space-y-1">
    <div>Reviews anywhere</div>
    <div>Quick unblocking</div>
    <div>Stakeholder response</div>
    <div>Issue triage</div>
  </div>
</div>

<div class="p-4 bg-orange-900/40 rounded-lg text-center">
  <div class="text-3xl mb-2">⚙️</div>
  <div class="font-bold text-orange-300 mb-2">CLI</div>
  <div class="text-xs text-gray-400 space-y-1">
    <div>Scripting</div>
    <div>Automation</div>
    <div>CI/CD integration</div>
    <div>Infrastructure</div>
  </div>
</div>

</div>

<div class="mt-8 p-6 bg-gradient-to-r from-blue-600 to-purple-800 rounded-xl shadow-lg text-center">
  <div class="text-2xl font-bold text-white mb-3">Complete AI Coverage Across Every Interface</div>
  <div class="text-lg text-blue-100">Same customizations work identically everywhere</div>
</div>

<div class="mt-6 text-center text-gray-400 italic">
  Build expertise once—apply throughout your workflow
</div>

---

# Key Takeaways

<div class="grid grid-cols-2 gap-6 mt-6 text-sm">

<div class="p-4 bg-blue-900/30 rounded-lg border-l-4 border-blue-400">
  <div class="text-2xl mb-2">🔄</div>
  <div class="font-bold text-white mb-2">Portability is Built-In</div>
  <div class="text-gray-400">Repository customizations automatically work across IDE, web, mobile, and CLI</div>
</div>

<div class="p-4 bg-green-900/30 rounded-lg border-l-4 border-green-400">
  <div class="text-2xl mb-2">🎯</div>
  <div class="font-bold text-white mb-2">Context-Appropriate Tools</div>
  <div class="text-gray-400">Each interface optimizes for its natural workflows—no forced abstractions</div>
</div>

<div class="p-4 bg-purple-900/30 rounded-lg border-l-4 border-purple-400">
  <div class="text-2xl mb-2">🌍</div>
  <div class="font-bold text-white mb-2">Democratized AI Access</div>
  <div class="text-gray-400">Non-engineers benefit from repository customizations without IDE training</div>
</div>

<div class="p-4 bg-orange-900/30 rounded-lg border-l-4 border-orange-400">
  <div class="text-2xl mb-2">⚡</div>
  <div class="font-bold text-white mb-2">Workflow Continuity</div>
  <div class="text-gray-400">AI assistance follows you wherever work happens—no artificial boundaries</div>
</div>

<div class="p-4 bg-yellow-900/30 rounded-lg border-l-4 border-yellow-400 col-span-2">
  <div class="text-2xl mb-2">💰</div>
  <div class="font-bold text-white mb-2">ROI Multiplication</div>
  <div class="text-gray-400">Single investment in customization serves entire organization across all interfaces</div>
</div>

</div>

<div class="mt-6 p-5 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-lg text-center">
  <div class="text-2xl font-bold text-white">AI assistance is no longer constrained to the IDE</div>
</div>

---

# Getting Started

<div class="grid grid-cols-2 gap-8 mt-6">

<div>
  <h3 class="text-xl font-bold text-blue-400 mb-4">🚀 Immediate Actions</h3>
  <div class="space-y-2 text-sm">
    <div class="p-3 bg-gray-800 rounded-lg flex items-start gap-3">
      <span class="text-xl">1️⃣</span>
      <div>
        <div class="font-bold text-white">Open github.com/copilot</div>
        <div class="text-gray-400">Verify repository instructions and agents appear</div>
      </div>
    </div>
    <div class="p-3 bg-gray-800 rounded-lg flex items-start gap-3">
      <span class="text-xl">2️⃣</span>
      <div>
        <div class="font-bold text-white">Test mobile access</div>
        <div class="text-gray-400">Review PR using custom agent from phone</div>
      </div>
    </div>
    <div class="p-3 bg-gray-800 rounded-lg flex items-start gap-3">
      <span class="text-xl">3️⃣</span>
      <div>
        <div class="font-bold text-white">File issue from screenshot</div>
        <div class="text-gray-400">Try image-based issue creation workflow</div>
      </div>
    </div>
    <div class="p-3 bg-gray-800 rounded-lg flex items-start gap-3">
      <span class="text-xl">4️⃣</span>
      <div>
        <div class="font-bold text-white">Generate documentation</div>
        <div class="text-gray-400">Create user docs from code without IDE switch</div>
      </div>
    </div>
    <div class="p-3 bg-gray-800 rounded-lg flex items-start gap-3">
      <span class="text-xl">5️⃣</span>
      <div>
        <div class="font-bold text-white">Delegate to Coding Agent</div>
        <div class="text-gray-400">Assign routine refactoring and review PR</div>
      </div>
    </div>
  </div>
</div>

<div>
  <h3 class="text-xl font-bold text-green-400 mb-4">📈 Next Steps</h3>
  <div class="space-y-3 text-sm">
    <div class="p-3 bg-green-900/30 rounded-lg">
      <div class="font-bold text-white mb-1">Explore GitHub Spark</div>
      <div class="text-gray-400">For design prototyping and stakeholder demos</div>
    </div>
    <div class="p-3 bg-green-900/30 rounded-lg">
      <div class="font-bold text-white mb-1">Configure mobile agents</div>
      <div class="text-gray-400">Optimize for team reviews on phones</div>
    </div>
    <div class="p-3 bg-green-900/30 rounded-lg">
      <div class="font-bold text-white mb-1">Integrate web workflows</div>
      <div class="text-gray-400">Into stakeholder communication patterns</div>
    </div>
    <div class="p-3 bg-green-900/30 rounded-lg">
      <div class="font-bold text-white mb-1">Measure improvements</div>
      <div class="text-gray-400">Track team velocity gains from eliminating PR blocking</div>
    </div>
  </div>
  
  <div class="mt-6 p-4 bg-blue-900/40 rounded-lg border-2 border-blue-500">
    <div class="font-bold text-blue-300 mb-2">💡 Fast Path to Value</div>
    <div class="text-xs text-gray-300">Identify biggest context-switching pain points (PR reviews, issue triage, stakeholder questions) and shift those workflows to web</div>
  </div>
</div>

</div>

---

# Resources

<div class="grid grid-cols-2 gap-8 mt-6 text-sm">

<div>
  <h3 class="text-lg font-bold text-blue-400 mb-4">📚 Official Documentation</h3>
  <div class="space-y-2">
    <div class="p-3 bg-gray-800 rounded-lg">
      <a href="https://docs.github.com/en/copilot/get-started/quickstart" class="text-blue-300 hover:text-blue-200">
        GitHub Copilot Web Quickstart →
      </a>
    </div>
    <div class="p-3 bg-gray-800 rounded-lg">
      <a href="https://docs.github.com/en/copilot/github-copilot-chat/copilot-chat-in-github/using-github-copilot-chat-in-githubcom" class="text-blue-300 hover:text-blue-200">
        Using Copilot Chat in GitHub.com →
      </a>
    </div>
    <div class="p-3 bg-gray-800 rounded-lg">
      <a href="https://docs.github.com/en/copilot/github-copilot-chat/copilot-chat-in-github-mobile/using-github-copilot-chat-in-github-mobile" class="text-blue-300 hover:text-blue-200">
        Copilot on Mobile →
      </a>
    </div>
  </div>
</div>

<div>
  <h3 class="text-lg font-bold text-green-400 mb-4">🚀 Advanced Features</h3>
  <div class="space-y-2">
    <div class="p-3 bg-gray-800 rounded-lg">
      <a href="https://githubnext.com/projects/github-spark" class="text-green-300 hover:text-green-200">
        GitHub Spark Documentation →
      </a>
    </div>
    <div class="p-3 bg-gray-800 rounded-lg">
      <a href="https://docs.github.com/en/copilot/concepts/coding-agent/coding-agent" class="text-green-300 hover:text-green-200">
        Coding Agent Guide →
      </a>
    </div>
    <div class="p-3 bg-gray-800 rounded-lg">
      <a href="https://github.blog/ai-and-ml/github-copilot/how-to-use-github-copilot-on-github-com-a-power-users-guide/" class="text-green-300 hover:text-green-200">
        Power User's Guide to Web Copilot →
      </a>
    </div>
  </div>
</div>

</div>

<div class="mt-8 text-center text-gray-400">
  <div class="text-sm italic">Scan QR codes in handout for direct access to resources</div>
</div>

---
layout: end
---

# Thank You

<div class="text-center mt-12">
  <div class="text-6xl mb-6">🌐</div>
  <div class="text-2xl text-gray-300 mb-4">Multi-interface AI assistance for modern software teams</div>
  <div class="text-xl text-blue-400">github.com/copilot</div>
</div>

<div class="mt-12 text-center text-sm text-gray-400">
  Questions? Let's discuss how web Copilot can transform your team's workflows.
</div>
