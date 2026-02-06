---
theme: default
background: https://source.unsplash.com/collection/94734566/1920x1080
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## MCP Apps: Rich UI in Chat Responses
  CopilotTraining Tech Talk
drawings:
  persist: false
transition: slide-left
title: MCP Apps - Rich UI in Chat Responses
module: tech-talks/mcp-apps
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
MCP Apps
</h1>
<div class="mt-4 relative z-10">
<span class="px-6 py-2 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xl font-medium shadow-lg shadow-cyan-500/25">
Rich UI in Chat Responses
</span>
</div>
<div class="mt-8 text-lg opacity-70 relative z-10">Transform chat from text-only to interactive visual experiences</div>
<div class="mt-6 w-32 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full relative z-10"></div>
</div>

<div class="abs-br m-6 flex gap-2">
<span class="text-sm opacity-50">Tech Talk · 45 minutes</span>
</div>

---

# The Text-Only Limitation

<div class="mt-8 space-y-6">

<div class="p-4 bg-red-900/30 rounded-lg border-l-4 border-red-500">
<div class="flex items-center gap-3 mb-2">
<span class="text-3xl">📊</span>
<div class="font-bold text-lg text-red-300">Data Visualization Trapped in Text</div>
</div>
<div class="text-sm text-gray-300">
Tables, charts, and diagrams rendered as ASCII or markdown—hard to read, impossible to interact with
</div>
</div>

<div class="p-4 bg-red-900/30 rounded-lg border-l-4 border-red-500">
<div class="flex items-center gap-3 mb-2">
<span class="text-3xl">🖱️</span>
<div class="font-bold text-lg text-red-300">No Interactive Elements</div>
</div>
<div class="text-sm text-gray-300">
Can't click, filter, sort, or drill down into results
</div>
</div>

<div class="p-4 bg-red-900/30 rounded-lg border-l-4 border-red-500">
<div class="flex items-center gap-3 mb-2">
<span class="text-3xl">🔄</span>
<div class="font-bold text-lg text-red-300">Context Switching for Visuals</div>
</div>
<div class="text-sm text-gray-300">
Need to export data, open other tools, create visualizations manually
</div>
</div>

</div>

<div class="mt-8 p-4 bg-gradient-to-r from-red-900/40 to-gray-800 rounded-lg text-center">
<span class="text-white font-bold">⚠️ Traditional chat responses are text. Even when discussing visual data.</span>
</div>

---

# What Are MCP Apps?

<div class="mt-8">

<div class="p-6 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-lg text-center mb-8">
<div class="text-2xl font-bold text-white">MCP server tools that return rich UI components instead of plain text</div>
</div>

<div class="grid grid-cols-2 gap-8">

<div class="p-6 bg-red-900/30 rounded-lg border-2 border-red-500">
<div class="text-2xl mb-3 text-center">❌ Before</div>
<div class="space-y-2 text-sm text-gray-300">
<div>• Text/JSON responses</div>
<div>• ASCII tables</div>
<div>• Markdown formatting</div>
<div>• Copy to other tools</div>
<div>• Manual visualization</div>
</div>
</div>

<div class="p-6 bg-green-900/30 rounded-lg border-2 border-green-500">
<div class="text-2xl mb-3 text-center">✅ After</div>
<div class="space-y-2 text-sm text-gray-300">
<div>• Interactive charts</div>
<div>• Sortable tables</div>
<div>• Clickable elements</div>
<div>• Built-in filtering</div>
<div>• Instant exploration</div>
</div>
</div>

</div>

</div>

<div class="mt-6 text-center text-sm text-gray-400 italic">
VS Code 1.109 — Chat panel becomes a data exploration interface
</div>

---

# How It Works — Part 1/2

<div class="mt-8 flex flex-col gap-5">

<div class="p-4 bg-blue-900/60 rounded-lg border-2 border-blue-400">
<div class="flex items-center gap-3">
<span class="text-3xl">💬</span>
<div>
<div class="text-white font-bold">User Prompt</div>
<div class="text-sm text-blue-300">"Show me the sales data for Q4 2025"</div>
</div>
</div>
</div>

<div class="text-3xl text-gray-400 text-center">↓</div>

<div class="p-4 bg-purple-900/60 rounded-lg border-2 border-purple-400">
<div class="flex items-center gap-3">
<span class="text-3xl">🤖</span>
<div>
<div class="text-white font-bold">Model Decision</div>
<div class="text-sm text-purple-300">Calls sales-dashboard MCP tool</div>
</div>
</div>
</div>

</div>

---

# How It Works — Part 2/2

<div class="mt-8 flex flex-col gap-5">

<div class="p-4 bg-green-900/60 rounded-lg border-2 border-green-400">
<div class="flex items-center gap-3">
<span class="text-3xl">🎨</span>
<div>
<div class="text-white font-bold">MCP Server Returns Component</div>
<div class="text-sm text-green-300">{ type: "chart", chartType: "bar", data: [...] }</div>
</div>
</div>
</div>

<div class="text-3xl text-gray-400 text-center">↓</div>

<div class="p-4 bg-cyan-900/60 rounded-lg border-2 border-cyan-400">
<div class="flex items-center gap-3">
<span class="text-3xl">✨</span>
<div>
<div class="text-white font-bold">VS Code Renders Interactive Chart</div>
<div class="text-sm text-cyan-300">With hover, filter, export, drill-down</div>
</div>
</div>
</div>

</div>

---

# Component Types

<div class="grid grid-cols-2 gap-3 text-xs mt-6">

<div class="p-3 bg-gray-800 rounded-lg flex items-start gap-2">
<span class="text-2xl">📊</span>
<div>
<div class="text-white font-bold">Charts</div>
<div class="text-gray-400">Bar, line, pie, scatter plots with hover details</div>
</div>
</div>

<div class="p-3 bg-gray-800 rounded-lg flex items-start gap-2">
<span class="text-2xl">📋</span>
<div>
<div class="text-white font-bold">Tables</div>
<div class="text-gray-400">Sortable, filterable, paginated data grids</div>
</div>
</div>

<div class="p-3 bg-gray-800 rounded-lg flex items-start gap-2">
<span class="text-2xl">📝</span>
<div>
<div class="text-white font-bold">Forms</div>
<div class="text-gray-400">Input fields that send data back to MCP</div>
</div>
</div>

<div class="p-3 bg-gray-800 rounded-lg flex items-start gap-2">
<span class="text-2xl">🌳</span>
<div>
<div class="text-white font-bold">Trees</div>
<div class="text-gray-400">Expandable hierarchical views</div>
</div>
</div>

<div class="p-3 bg-gray-800 rounded-lg flex items-start gap-2">
<span class="text-2xl">🎴</span>
<div>
<div class="text-white font-bold">Cards</div>
<div class="text-gray-400">Rich content blocks with actions</div>
</div>
</div>

<div class="p-3 bg-gray-800 rounded-lg flex items-start gap-2">
<span class="text-2xl">🎨</span>
<div>
<div class="text-white font-bold">Custom</div>
<div class="text-gray-400">Any HTML/CSS within security sandbox</div>
</div>
</div>

</div>

<div class="mt-8 p-5 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-lg text-center">
<div class="text-2xl font-bold text-white">Built-in library + extensibility for specialized visualizations</div>
</div>

---

# MCP Apps Playground

<div class="mt-8">

<div class="p-4 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 rounded-lg mb-6">
<div class="text-lg font-bold text-white mb-2">📦 github.com/anthropics/mcp-apps-playground</div>
<div class="text-sm text-blue-100">Demo repository with all component types</div>
</div>

<div class="grid grid-cols-2 gap-4">

<div class="space-y-3">
<div class="p-3 bg-gray-800 rounded-lg border-l-4 border-cyan-400">
<div class="text-white font-bold mb-1">📊 chart-demo</div>
<div class="text-xs text-gray-400">"Show me a sales chart"</div>
</div>
<div class="p-3 bg-gray-800 rounded-lg border-l-4 border-cyan-400">
<div class="text-white font-bold mb-1">📋 table-demo</div>
<div class="text-xs text-gray-400">"Display user table"</div>
</div>
<div class="p-3 bg-gray-800 rounded-lg border-l-4 border-cyan-400">
<div class="text-white font-bold mb-1">📝 form-demo</div>
<div class="text-xs text-gray-400">"Show me a contact form"</div>
</div>
</div>

<div class="space-y-3">
<div class="p-3 bg-gray-800 rounded-lg border-l-4 border-cyan-400">
<div class="text-white font-bold mb-1">🌳 tree-demo</div>
<div class="text-xs text-gray-400">"Show directory structure"</div>
</div>
<div class="p-3 bg-gray-800 rounded-lg border-l-4 border-cyan-400">
<div class="text-white font-bold mb-1">🎴 card-demo</div>
<div class="text-xs text-gray-400">"Display product cards"</div>
</div>
<div class="p-3 bg-gray-800 rounded-lg border-l-4 border-cyan-400">
<div class="text-white font-bold mb-1">📊 dashboard-demo</div>
<div class="text-xs text-gray-400">"Show me the full dashboard"</div>
</div>
</div>

</div>

</div>

<div class="mt-6 text-center text-sm text-gray-400 italic">
Clone → npm install → Add to .vscode/mcp.json → Test in chat
</div>

---

# Use Case: Data Exploration

<div class="mt-8 grid grid-cols-2 gap-8">

<div class="p-6 bg-red-50 dark:bg-red-900/30 rounded-lg">
<div class="text-2xl mb-4 text-center">❌ Before MCP Apps</div>
<ol class="space-y-3 text-sm">
<li class="flex gap-2">
<span class="text-red-400 font-bold">1.</span>
<span>Query database via MCP</span>
</li>
<li class="flex gap-2">
<span class="text-red-400 font-bold">2.</span>
<span>Receive text/JSON response</span>
</li>
<li class="flex gap-2">
<span class="text-red-400 font-bold">3.</span>
<span>Copy to spreadsheet</span>
</li>
<li class="flex gap-2">
<span class="text-red-400 font-bold">4.</span>
<span>Create pivot tables</span>
</li>
<li class="flex gap-2">
<span class="text-red-400 font-bold">5.</span>
<span>Generate charts</span>
</li>
</ol>
</div>

<div class="p-6 bg-green-50 dark:bg-green-900/30 rounded-lg">
<div class="text-2xl mb-4 text-center">✅ With MCP Apps</div>
<ol class="space-y-3 text-sm">
<li class="flex gap-2">
<span class="text-green-400 font-bold">1.</span>
<span>"Show me user signups by region"</span>
</li>
<li class="flex gap-2">
<span class="text-green-400 font-bold">2.</span>
<span>Interactive chart appears in chat</span>
</li>
<li class="flex gap-2">
<span class="text-green-400 font-bold">3.</span>
<span>Click to drill down</span>
</li>
<li class="flex gap-2">
<span class="text-green-400 font-bold">4.</span>
<span>Filter by date range</span>
</li>
<li class="flex gap-2">
<span class="text-green-400 font-bold">5.</span>
<span>Export if needed</span>
</li>
</ol>
</div>

</div>

<div class="mt-6 p-5 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-lg text-center">
<div class="text-2xl font-bold text-white">Eliminate context switching to external tools</div>
</div>

---

# Use Case: Dashboard Building

<div class="mt-6">

<div class="p-4 bg-gray-800 rounded-lg mb-6">
<div class="text-cyan-400 font-bold mb-2">User: "Show me a dashboard of our key metrics"</div>
<div class="text-gray-400 text-sm">Model calls: dashboard-mcp-tool</div>
</div>

<div class="p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg border-2 border-cyan-400/50">
<div class="text-center text-lg font-bold text-white mb-4">📊 Key Metrics Dashboard</div>
<div class="grid grid-cols-3 gap-4 mb-4">
<div class="p-3 bg-blue-900/60 rounded-lg text-center">
<div class="text-2xl font-bold text-white">12,450</div>
<div class="text-xs text-blue-300">Active Users</div>
<div class="text-xs text-green-400">+12% ▲</div>
</div>
<div class="p-3 bg-green-900/60 rounded-lg text-center">
<div class="text-2xl font-bold text-white">$847K</div>
<div class="text-xs text-green-300">Revenue MTD</div>
<div class="text-xs text-green-400">+8% ▲</div>
</div>
<div class="p-3 bg-purple-900/60 rounded-lg text-center">
<div class="text-2xl font-bold text-white">2.4M/day</div>
<div class="text-xs text-purple-300">API Calls</div>
<div class="text-xs text-red-400">-2% ▼</div>
</div>
</div>
<div class="p-3 bg-gray-900 rounded-lg">
<div class="text-xs text-gray-400 space-y-1">
<div>• User signup spike detected</div>
<div>• API latency increased 15ms</div>
<div>• Payment processing normal</div>
</div>
</div>
</div>

</div>

<div class="mt-4 text-center text-sm text-gray-400 italic">
Quick dashboards without leaving chat
</div>

---

# Use Case: Code Analysis

<div class="mt-6">

<div class="p-4 bg-gray-800 rounded-lg mb-6">
<div class="text-cyan-400 font-bold mb-2">User: "Analyze the complexity of this module"</div>
<div class="text-gray-400 text-sm">Model calls: code-complexity-tool</div>
</div>

<div class="p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg border-2 border-purple-400/50">
<div class="text-center text-lg font-bold text-white mb-4">📈 Complexity Analysis: auth/</div>
<div class="grid grid-cols-2 gap-3 mb-4">
<div class="p-4 bg-red-900/60 rounded-lg border-2 border-red-500">
<div class="text-white font-bold">login.ts</div>
<div class="text-sm text-red-300">High: 45</div>
</div>
<div class="p-4 bg-yellow-900/60 rounded-lg border-2 border-yellow-500">
<div class="text-white font-bold">session.ts</div>
<div class="text-sm text-yellow-300">Medium: 28</div>
</div>
<div class="p-4 bg-yellow-900/60 rounded-lg border-2 border-yellow-500">
<div class="text-white font-bold">oauth.ts</div>
<div class="text-sm text-yellow-300">Medium: 32</div>
</div>
<div class="p-4 bg-green-900/60 rounded-lg border-2 border-green-500">
<div class="text-white font-bold">middleware.ts</div>
<div class="text-sm text-green-300">Low: 18</div>
</div>
</div>
</div>

</div>

---

# Use Case: Code Analysis — Insight

<div class="mt-12 text-center">

<div class="p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg border-2 border-purple-400/50 max-w-2xl mx-auto">
<div class="text-xs text-gray-400 mb-2">[Click file to see detailed breakdown]</div>
<div class="text-lg text-gray-300 italic">
Visualize codebase structure and metrics
</div>
</div>

</div>

---

# Use Case: Form-Based Workflows

<div class="p-3 bg-gray-800 rounded-lg mb-3">
<div class="text-cyan-400 font-bold mb-2">User: "I need to create a new API endpoint"</div>
<div class="text-gray-400 text-sm">Model calls: api-generator-form</div>
</div>

<div class="p-4 bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg border-2 border-blue-400/50 max-w-2xl mx-auto">
<div class="text-center text-lg font-bold text-white mb-2">🔧 New API Endpoint</div>
<div class="space-y-2">
<div class="grid grid-cols-2 gap-1 text-sm">
<div class="text-gray-400">Endpoint Path:</div>
<div class="p-1.5 bg-gray-800 rounded border border-gray-600 text-white">/api/v1/users</div>
<div class="text-gray-400">HTTP Method:</div>
<div class="p-1.5 bg-gray-800 rounded border border-gray-600 text-white">GET ▼</div>
<div class="text-gray-400">Description:</div>
<div class="p-1.5 bg-gray-800 rounded border border-gray-600 text-white">Get user by ID</div>
</div>
<div class="p-2 bg-gray-800/50 rounded-lg">
<div class="text-white font-bold text-sm mb-1">Parameters:</div>
<div class="flex gap-1 text-xs text-gray-300">
<div class="flex-1 p-1.5 bg-gray-900 rounded">id</div>
<div class="flex-1 p-1.5 bg-gray-900 rounded">string</div>
<div class="p-1.5 bg-gray-900 rounded">✓ Required</div>
</div>
</div>
<button class="w-full p-2 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg text-white font-bold">
Generate Endpoint
</button>
</div>
</div>

<div class="mt-2 text-center text-sm text-gray-400 italic">
Structured input collection within chat
</div>

---

# Building MCP Apps

**MCP server with tools that return component specifications**

<div class="text-xs mt-4">

```typescript
// Return component instead of text
return {
  content: [{
    type: "component",  // Key: component, not text
    component: {
      type: "chart",
      chartType: "line",
      title: "Project Metrics",
      data: [...],
      options: { interactive: true }
    }
  }]
};
```

</div>

---

# Building MCP Apps — Security & Theming

<div class="mt-12">

<div class="grid grid-cols-2 gap-6">
<div class="p-4 bg-gray-800 rounded-lg">
<div class="text-green-400 font-bold text-lg mb-3">✅ Built-in Security</div>
<div class="text-sm text-gray-400">Components run in sandboxed iframes</div>
</div>
<div class="p-4 bg-gray-800 rounded-lg">
<div class="text-green-400 font-bold text-lg mb-3">✅ Theme Aware</div>
<div class="text-sm text-gray-400">Use VS Code CSS variables</div>
</div>
</div>

</div>

---

# Integration Patterns

<div class="mt-8 space-y-4">

<div class="p-4 bg-blue-900/60 rounded-lg border-l-4 border-blue-400">
<div class="flex items-center gap-3 mb-2">
<span class="text-3xl">🔧</span>
<div class="font-bold text-lg text-blue-300">With Agent Skills</div>
</div>
<div class="text-sm text-gray-300">
Agent skills can leverage MCP Apps for visualization
</div>
<div class="mt-2 text-xs text-blue-200 font-mono">
tools: ['analytics-dashboard/*']
</div>
</div>

<div class="p-4 bg-purple-900/60 rounded-lg border-l-4 border-purple-400">
<div class="flex items-center gap-3 mb-2">
<span class="text-3xl">🤖</span>
<div class="font-bold text-lg text-purple-300">With Custom Agents</div>
</div>
<div class="text-sm text-gray-300">
Agents can specify MCP Apps in their tool set
</div>
<div class="mt-2 text-xs text-purple-200 font-mono">
tools: ['charts-mcp/*', 'tables-mcp/*']
</div>
</div>

<div class="p-4 bg-green-900/60 rounded-lg border-l-4 border-green-400">
<div class="flex items-center gap-3 mb-2">
<span class="text-3xl">🧠</span>
<div class="font-bold text-lg text-green-300">With Copilot Memory</div>
</div>
<div class="text-sm text-gray-300">
Persistent dashboards: "Remember my preferred dashboard layout"
</div>
</div>

</div>

---

# Best Practices

<div class="grid grid-cols-2 gap-8 mt-8">

<div>
<div class="text-lg font-bold text-blue-400 mb-4">📐 Design</div>
<div class="space-y-2 text-sm">
<div class="p-2 bg-gray-800 rounded-lg">Progressive disclosure</div>
<div class="p-2 bg-gray-800 rounded-lg">Responsive layout</div>
<div class="p-2 bg-gray-800 rounded-lg">Theme awareness</div>
<div class="p-2 bg-gray-800 rounded-lg">Loading states</div>
<div class="p-2 bg-gray-800 rounded-lg">Error handling</div>
</div>
</div>

<div>
<div class="text-lg font-bold text-green-400 mb-4">⚡ Performance</div>
<div class="space-y-2 text-sm">
<div class="p-2 bg-gray-800 rounded-lg">Paginate large datasets</div>
<div class="p-2 bg-gray-800 rounded-lg">Lazy load images</div>
<div class="p-2 bg-gray-800 rounded-lg">Cache expensive queries</div>
<div class="p-2 bg-gray-800 rounded-lg">Optimize re-renders</div>
</div>
</div>

</div>

<div class="mt-6 p-4 bg-yellow-900/40 rounded-lg border-l-4 border-yellow-500">
<div class="text-yellow-400 font-bold mb-2">🔒 Security</div>
<div class="text-sm text-yellow-200">
Always sandbox custom HTML • Validate inputs • No sensitive data in URLs • Rate limit MCP calls
</div>
</div>

---
layout: center
---

# Key Takeaways

<div class="space-y-3 mt-6 text-left max-w-3xl mx-auto">

<div class="p-3 bg-gradient-to-r from-cyan-900/60 to-blue-900/60 rounded-lg border-l-4 border-cyan-400">
<div class="text-lg font-bold text-white mb-1">📊 Chat Becomes Visual</div>
<div class="text-sm text-gray-300">Rich components replace text-only responses</div>
</div>

<div class="p-3 bg-gradient-to-r from-blue-900/60 to-indigo-900/60 rounded-lg border-l-4 border-blue-400">
<div class="text-lg font-bold text-white mb-1">🔍 Interactive Exploration</div>
<div class="text-sm text-gray-300">Sort, filter, drill down without new prompts</div>
</div>

<div class="p-3 bg-gradient-to-r from-indigo-900/60 to-purple-900/60 rounded-lg border-l-4 border-indigo-400">
<div class="text-lg font-bold text-white mb-1">🎨 Component Library + Extensibility</div>
<div class="text-sm text-gray-300">Built-in charts, tables, forms, trees, cards + custom HTML</div>
</div>

<div class="p-3 bg-gradient-to-r from-purple-900/60 to-pink-900/60 rounded-lg border-l-4 border-purple-400">
<div class="text-lg font-bold text-white mb-1">🔗 Seamless Integration</div>
<div class="text-sm text-gray-300">Works with agents, skills, and memory</div>
</div>

</div>

<div class="mt-6 p-4 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-lg text-center">
<div class="text-xl font-bold text-white">Complete development environment within the chat panel</div>
</div>

---
layout: end
---

# Getting Started

<div class="mt-8 space-y-6">

<div class="p-5 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-lg">
<div class="text-lg font-bold text-white mb-3">🚀 Immediate Actions</div>
<div class="grid grid-cols-2 gap-3 text-sm text-white">
<div>1. Clone mcp-apps-playground</div>
<div>2. Add to .vscode/mcp.json</div>
<div>3. Try each demo</div>
<div>4. Explore interactions</div>
</div>
</div>

<div class="p-5 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 rounded-lg">
<div class="text-lg font-bold text-white mb-3">📚 Resources</div>
<div class="grid grid-cols-2 gap-3 text-sm text-white">
<div>github.com/anthropics/mcp-apps-playground</div>
<div>modelcontextprotocol.io</div>
<div>Workshop: Module 05 - MCP Servers</div>
<div>Tech Talk: Agentic Sessions</div>
</div>
</div>

</div>

<div class="abs-br m-6 flex gap-2">
<span class="text-sm opacity-50">VS Code 1.109+</span>
</div>
