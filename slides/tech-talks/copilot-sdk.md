---
theme: default
background: https://source.unsplash.com/collection/94734566/1920x1080
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## GitHub Copilot SDK
  Embedding AI Agents in Your Applications
drawings:
  persist: false
transition: slide-left
title: Copilot SDK - Embedding AI Agents
mdc: true
---

<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-indigo-900/20"></div>
<div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-indigo-500/20 rounded-full blur-3xl"></div>
<div class="relative z-10">
<div class="absolute inset-0 blur-2xl opacity-50">
<img src="./sdp-logo.png" class="w-72" alt="" />
</div>
<img src="./sdp-logo.png" class="w-72 relative" alt="SDP Logo" />
</div>
<h1 class="!text-5xl !font-bold !mt-8 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent relative z-10">
GitHub Copilot SDK
</h1>
<div class="mt-4 relative z-10">
<span class="px-6 py-2 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xl font-medium shadow-lg shadow-cyan-500/25">
Embedding AI Agents in Your Applications
</span>
</div>
<div class="mt-8 text-lg opacity-70 relative z-10">From consuming AI to building with it</div>
<div class="mt-6 w-32 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full relative z-10"></div>
</div>

<div class="abs-br m-6 flex gap-2">
<span class="text-sm opacity-50">Tech Talk · 60 minutes</span>
</div>

---

# 🧠 The Problem: When General-Purpose AI Isn't Enough

GitHub Copilot in VS Code excels at code completion. Copilot CLI excels at terminal automation.
But what happens when your workflow doesn't fit these patterns?

<div class="grid grid-cols-2 gap-6 mt-8">
<div class="p-5 bg-red-900/30 rounded-lg border-2 border-red-500">
<div class="font-bold text-red-300 mb-3">❌ Real-World Gaps</div>
<div class="text-sm space-y-2">
<div>• Release notes from git history</div>
<div>• Test infrastructure monitoring</div>
<div>• Pre-review PRs against standards</div>
<div>• Auto-generate documentation</div>
<div>• Incident response automation</div>
<div>• Custom developer portals</div>
</div>
</div>
<div class="p-5 bg-green-900/30 rounded-lg border-2 border-green-500">
<div class="font-bold text-green-300 mb-3">✅ What's Needed</div>
<div class="text-sm space-y-2">
<div>• <strong>Programmatic control</strong> over AI</div>
<div>• <strong>Domain-specific</strong> workflows</div>
<div>• <strong>Embedded</strong> in existing tools</div>
<div>• <strong>Automation</strong>, not just chat</div>
<div>• <strong>Custom interfaces</strong> and bots</div>
<div>• AI as <strong>infrastructure</strong></div>
</div>
</div>
</div>

<div class="mt-6 p-4 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-lg text-center">
<div class="text-xl font-bold text-white">These workflows need AI embedded as infrastructure, not as a separate assistant</div>
</div>

---

# 💡 Introducing the GitHub Copilot SDK

<div class="text-lg mb-6">The same Copilot agentic core that powers GitHub Copilot CLI — now as a programmable interface you can embed in any application.</div>

<div class="grid grid-cols-3 gap-4 mb-6">
<div class="p-4 bg-gray-800 rounded-lg border-2 border-cyan-400">
<div class="text-2xl mb-2">📱</div>
<div class="font-bold text-cyan-300">Your Application</div>
<div class="text-xs text-gray-400 mt-2">Python, TypeScript, Go, .NET</div>
</div>
<div class="text-3xl text-gray-400 text-center flex items-center justify-center">→</div>
<div class="p-4 bg-gray-800 rounded-lg border-2 border-blue-400">
<div class="text-2xl mb-2">🤖</div>
<div class="font-bold text-blue-300">SDK Client</div>
<div class="text-xs text-gray-400 mt-2">github-copilot-sdk</div>
</div>
</div>

<div class="text-3xl text-gray-400 text-center">↓</div>

<div class="grid grid-cols-3 gap-4 mt-6">
<div class="p-4 bg-gray-800 rounded-lg border-2 border-indigo-400">
<div class="text-2xl mb-2">⚡</div>
<div class="font-bold text-indigo-300">CLI Server Mode</div>
<div class="text-xs text-gray-400 mt-2">JSON-RPC over stdio</div>
</div>
<div class="text-3xl text-gray-400 text-center flex items-center justify-center">→</div>
<div class="p-4 bg-gray-800 rounded-lg border-2 border-purple-400">
<div class="text-2xl mb-2">🧠</div>
<div class="font-bold text-purple-300">Agent Runtime</div>
<div class="text-xs text-gray-400 mt-2">Planning, tools, multi-turn</div>
</div>
</div>

<div class="mt-6 text-sm text-gray-400 italic text-center">
The SDK manages the CLI process lifecycle automatically. You write code, the SDK handles agent communication.
</div>

---

# 🎯 What You Get

<div class="grid grid-cols-2 gap-4">
<div class="p-4 bg-cyan-900/30 rounded-lg border-l-4 border-cyan-500">
<div class="text-sm font-bold mb-2 text-cyan-300">✅ Same as Copilot CLI</div>
<div class="text-xs space-y-1 text-gray-300">
<div>• Planning & multi-turn execution</div>
<div>• Tool invocation (files, shell, Git)</div>
<div>• Multiple models (GPT, Claude)</div>
<div>• Custom agents, skills, MCP servers</div>
<div>• Persistent memory & streaming</div>
</div>
</div>
<div class="p-4 bg-green-900/30 rounded-lg border-l-4 border-green-500">
<div class="text-sm font-bold mb-2 text-green-300">🎯 Plus Programmatic Control</div>
<div class="text-xs space-y-1 text-gray-300">
<div>• Embed in Python, TS, Go, .NET</div>
<div>• Build custom GUIs, CLIs, bots</div>
<div>• Integrate with existing workflows</div>
<div>• Automate analysis & reporting</div>
<div>• Schedule background jobs</div>
</div>
</div>
</div>

<div class="mt-4 grid grid-cols-4 gap-2 text-xs">
<div class="p-2 bg-gray-800 rounded text-center"><span class="text-2xl">📱</span><div class="mt-1">Custom Apps</div></div>
<div class="p-2 bg-gray-800 rounded text-center"><span class="text-2xl">🤖</span><div class="mt-1">Bots</div></div>
<div class="p-2 bg-gray-800 rounded text-center"><span class="text-2xl">📊</span><div class="mt-1">Dashboards</div></div>
<div class="p-2 bg-gray-800 rounded text-center"><span class="text-2xl">⚙️</span><div class="mt-1">Automation</div></div>
</div>

---

# 📊 When to Use: SDK vs CLI vs IDE

<div class="text-sm">

| Capability | VS Code/IDE | Copilot CLI | Copilot SDK |
|------------|-------------|-------------|-------------|
| **Code completion while editing** | ✅ Best | ❌ | ❌ |
| **Terminal automation (Git, Docker)** | ❌ | ✅ Best | ⚠️ Can embed |
| **Interactive debugging sessions** | ⚠️ Limited | ✅ Best | ⚠️ Can embed |
| **Custom tools for workflows** | ❌ | ❌ | ✅ Best |
| **Embed AI in existing apps** | ❌ | ❌ | ✅ Best |
| **Build bots, dashboards, automation** | ❌ | ❌ | ✅ Best |
| **GUI-based AI workflows** | ❌ | ❌ | ✅ Best |

</div>

<div class="mt-6 p-5 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-lg text-center">
<div class="text-xl font-bold text-white">Use SDK when you need domain-specific AI tools that integrate with your existing systems</div>
</div>

---

# 🎯 Use Case 1: Release Engineering

<div class="grid grid-cols-2 gap-4">
<div class="p-3 bg-red-900/30 rounded-lg border-l-4 border-red-500">
<div class="text-sm font-bold text-red-300 mb-2">❌ Problem</div>
<div class="text-xs text-gray-300 space-y-1">
<div>• Review hundreds of commits manually</div>
<div>• 2+ hours per release</div>
<div>• Quality varies by author</div>
</div>
</div>
<div class="p-3 bg-green-900/30 rounded-lg border-l-4 border-green-500">
<div class="text-sm font-bold text-green-300 mb-2">✅ Solution</div>
<div class="text-xs text-gray-300 space-y-1">
<div>• AI analyzes git history</div>
<div>• Categorizes: Features, Fixes, Security</div>
<div>• Outputs GitHub-ready markdown</div>
</div>
</div>
</div>

<div class="mt-3 p-3 bg-gray-800 rounded-lg text-xs font-mono text-gray-300">
client = CopilotClient()<br/>
response = client.chat("Analyze commits v1.2.0..v1.3.0, generate release notes")
</div>

<div class="mt-3 p-2 bg-gradient-to-r from-green-600/80 to-blue-600/80 rounded-lg text-center">
<span class="text-white font-bold text-sm">Impact: 2+ hours → 10 minutes</span>
</div>

---

# 🎯 Use Case 2: Test Monitoring

<div class="grid grid-cols-2 gap-4">
<div class="p-3 bg-red-900/30 rounded-lg border-l-4 border-red-500">
<div class="text-sm font-bold text-red-300 mb-2">❌ Problem</div>
<div class="text-xs text-gray-300 space-y-1">
<div>• Manual log analysis: 45 min</div>
<div>• Flaky tests undetected</div>
<div>• Blocks PRs, wastes CI time</div>
</div>
</div>
<div class="p-3 bg-green-900/30 rounded-lg border-l-4 border-green-500">
<div class="text-sm font-bold text-green-300 mb-2">✅ Solution</div>
<div class="text-xs text-gray-300 space-y-1">
<div>• Parse JUnit/Jest/pytest output</div>
<div>• Identify patterns & flaky tests</div>
<div>• Generate actionable reports</div>
</div>
</div>
</div>

<div class="mt-3 p-3 bg-gray-800 rounded-lg text-xs font-mono text-gray-300">
report = json.load(open('test-report.json'))<br/>
response = client.chat(f"Analyze failures, find root causes: {report}")
</div>

<div class="mt-3 p-2 bg-gradient-to-r from-green-600/80 to-blue-600/80 rounded-lg text-center">
<span class="text-white font-bold text-sm">Impact: 45 min → 5 min. Flaky tests caught immediately.</span>
</div>

---

# 🎯 Use Case 3: Code Quality Bots

<div class="grid grid-cols-2 gap-4">
<div class="p-3 bg-red-900/30 rounded-lg border-l-4 border-red-500">
<div class="text-sm font-bold text-red-300 mb-2">❌ Problem</div>
<div class="text-xs text-gray-300 space-y-1">
<div>• Senior engineers bottlenecked</div>
<div>• 30+ min per PR review</div>
<div>• Standards inconsistently applied</div>
</div>
</div>
<div class="p-3 bg-green-900/30 rounded-lg border-l-4 border-green-500">
<div class="text-sm font-bold text-green-300 mb-2">✅ Solution</div>
<div class="text-xs text-gray-300 space-y-1">
<div>• Pre-review PRs against standards</div>
<div>• Post inline GitHub comments</div>
<div>• Escalate architecture to seniors</div>
</div>
</div>
</div>

<div class="mt-3 p-3 bg-gray-800 rounded-lg text-xs font-mono text-gray-300">
response = client.chat(f"Review PR against standards: {pr_diff}")<br/>
for issue in parse_review(response): post_github_comment(pr_num, issue)
</div>

<div class="mt-3 p-2 bg-gradient-to-r from-green-600/80 to-blue-600/80 rounded-lg text-center">
<span class="text-white font-bold text-sm">Impact: Review time halved. PR throughput doubled.</span>
</div>

---

# 🎯 More Use Cases

<div class="grid grid-cols-2 gap-4 text-sm">
<div class="p-4 bg-gray-800 rounded-lg">
<div class="flex items-center gap-2 mb-2">
<span class="text-2xl">📚</span>
<div class="font-bold text-blue-300">Documentation Generation</div>
</div>
<div class="text-gray-300 space-y-1">
<div>• API docs from code and comments</div>
<div>• Architecture diagrams</div>
<div>• Role-specific onboarding guides</div>
<div>• Keep docs synced via CI hooks</div>
</div>
<div class="mt-2 text-xs text-green-400">→ Always-current docs. 50% faster onboarding.</div>
</div>
<div class="p-4 bg-gray-800 rounded-lg">
<div class="flex items-center gap-2 mb-2">
<span class="text-2xl">🚨</span>
<div class="font-bold text-red-300">Incident Response</div>
</div>
<div class="text-gray-300 space-y-1">
<div>• Ingest logs from multiple sources</div>
<div>• Correlate errors and patterns</div>
<div>• Suggest probable root causes</div>
<div>• Generate incident reports</div>
</div>
<div class="mt-2 text-xs text-green-400">→ MTTR reduced by 40%.</div>
</div>
<div class="p-4 bg-gray-800 rounded-lg">
<div class="flex items-center gap-2 mb-2">
<span class="text-2xl">🌐</span>
<div class="font-bold text-purple-300">Developer Portal</div>
</div>
<div class="text-gray-300 space-y-1">
<div>• Chat interface for your codebase</div>
<div>• AI-powered doc search</div>
<div>• Guided workflows (deploy, repos, CI)</div>
<div>• Personalized recommendations</div>
</div>
<div class="mt-2 text-xs text-green-400">→ Reduced support tickets. Faster self-service.</div>
</div>
<div class="p-4 bg-gray-800 rounded-lg">
<div class="flex items-center gap-2 mb-2">
<span class="text-2xl">🔄</span>
<div class="font-bold text-cyan-300">CI/CD Integration</div>
</div>
<div class="text-gray-300 space-y-1">
<div>• Auto-analyze build failures</div>
<div>• Suggest performance optimizations</div>
<div>• Security vulnerability scanning</div>
<div>• Automated dependency updates</div>
</div>
<div class="mt-2 text-xs text-green-400">→ Faster builds. Proactive security.</div>
</div>
</div>

<div class="mt-6 p-4 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-lg text-center">
<div class="text-lg font-bold text-white">The SDK shines for domain-specific tools that integrate with existing systems</div>
</div>

---

# 🔧 Getting Started

<div class="grid grid-cols-2 gap-6">
<div>
<div class="font-bold text-cyan-300 mb-3">📋 Prerequisites</div>
<div class="space-y-2 text-sm">
<div class="p-2 bg-gray-800 rounded-lg">✅ Python 3.8+ (or TS/Go/.NET)</div>
<div class="p-2 bg-gray-800 rounded-lg">✅ GitHub Copilot subscription</div>
<div class="p-2 bg-gray-800 rounded-lg">✅ Copilot CLI installed</div>
<div class="p-2 bg-gray-800 rounded-lg">✅ CLI authenticated</div>
</div>
</div>
<div>
<div class="font-bold text-green-300 mb-3">⚙️ Installation</div>
<div class="text-xs font-mono space-y-2">
<div class="p-3 bg-gray-800 rounded-lg">
<div class="text-gray-400"># Install CLI first</div>
<div>copilot --version</div>
<div>copilot auth login</div>
</div>
<div class="p-3 bg-gray-800 rounded-lg">
<div class="text-gray-400"># Install SDK</div>
<div>pip install github-copilot-sdk</div>
</div>
<div class="p-3 bg-gray-800 rounded-lg">
<div class="text-gray-400"># Other languages</div>
<div>npm install @github/copilot-sdk</div>
<div>go get github.com/github/copilot-sdk</div>
</div>
</div>
</div>
</div>

<div class="mt-6 p-4 bg-gray-800 rounded-lg">
<div class="font-bold mb-2">💡 Basic Usage</div>
<div class="text-xs font-mono">
```python
from github_copilot_sdk import CopilotClient

# Initialize client (spawns CLI automatically)
client = CopilotClient()

# Simple chat
response = client.chat("Explain OAuth vs JWT")
print(response.text)

# Streaming responses
for chunk in client.chat_stream("Generate a README"):
    print(chunk.text, end='', flush=True)
```
</div>
</div>

---

# 🎨 Integration Patterns

<div class="grid grid-cols-3 gap-4 text-xs">
<div class="p-4 bg-gray-800 rounded-lg border-2 border-cyan-400">
<div class="text-lg mb-2">🔧</div>
<div class="font-bold text-cyan-300 mb-2">CLI Tool</div>
<div class="font-mono text-[10px] space-y-1">
<div>#!/usr/bin/env python3</div>
<div>import argparse</div>
<div>from github_copilot_sdk</div>
<div>  import CopilotClient</div>
<div></div>
<div>def main():</div>
<div>  parser = argparse...</div>
<div>  client = CopilotClient()</div>
<div>  response = client.chat(...)</div>
</div>
<div class="mt-2 text-gray-400">Perfect for team scripts</div>
</div>
<div class="p-4 bg-gray-800 rounded-lg border-2 border-blue-400">
<div class="text-lg mb-2">🌐</div>
<div class="font-bold text-blue-300 mb-2">Web API</div>
<div class="font-mono text-[10px] space-y-1">
<div>from flask import Flask</div>
<div>app = Flask(__name__)</div>
<div>client = CopilotClient()</div>
<div></div>
<div>@app.route('/analyze')</div>
<div>def analyze():</div>
<div>  diff = request.json['diff']</div>
<div>  return client.chat(diff)</div>
</div>
<div class="mt-2 text-gray-400">Embed in web apps</div>
</div>
<div class="p-4 bg-gray-800 rounded-lg border-2 border-indigo-400">
<div class="text-lg mb-2">⏰</div>
<div class="font-bold text-indigo-300 mb-2">Scheduled Jobs</div>
<div class="font-mono text-[10px] space-y-1">
<div>import schedule</div>
<div>from github_copilot_sdk</div>
<div>  import CopilotClient</div>
<div></div>
<div>def analyze_tests():</div>
<div>  client = CopilotClient()</div>
<div>  report = fetch_tests()</div>
<div>  notify_team(...)</div>
</div>
<div class="mt-2 text-gray-400">Background automation</div>
</div>
</div>

<div class="grid grid-cols-2 gap-4 mt-4 text-xs">
<div class="p-4 bg-gray-800 rounded-lg border-2 border-purple-400">
<div class="text-lg mb-2">🤖</div>
<div class="font-bold text-purple-300 mb-2">GitHub Bot</div>
<div class="text-gray-300 space-y-1">
<div>• Listen to PR webhooks</div>
<div>• Analyze with Copilot SDK</div>
<div>• Post comments via GitHub API</div>
<div>• Auto-label and triage</div>
</div>
<div class="mt-2 text-gray-400">Automate code review</div>
</div>
<div class="p-4 bg-gray-800 rounded-lg border-2 border-green-400">
<div class="text-lg mb-2">📊</div>
<div class="font-bold text-green-300 mb-2">Dashboard</div>
<div class="text-gray-300 space-y-1">
<div>• Real-time build analytics</div>
<div>• AI-powered insights</div>
<div>• Interactive chat interface</div>
<div>• Historical trend analysis</div>
</div>
<div class="mt-2 text-gray-400">Internal tools</div>
</div>
</div>

---

# 🧠 Advanced Features

<div class="grid grid-cols-2 gap-6">
<div>
<div class="text-lg font-bold mb-4 text-cyan-300">🔌 MCP Server Integration</div>
<div class="text-xs font-mono p-3 bg-gray-800 rounded-lg">
```python
client = CopilotClient(
  mcp_servers=[{
    'name': 'jira-server',
    'command': 'mcp-jira',
    'env': {
      'JIRA_URL': '...'
    }
  }]
)

# Now SDK can interact with Jira
response = client.chat(
  "Create ticket for auth.py bug"
)
```
</div>
<div class="mt-2 text-sm text-gray-400">Extend capabilities with custom servers</div>
</div>
<div>
<div class="text-lg font-bold mb-4 text-green-300">🧠 Persistent Memory</div>
<div class="text-xs font-mono p-3 bg-gray-800 rounded-lg">
```python
client = CopilotClient(
  memory_enabled=True,
  memory_path='~/.copilot/memory'
)

# First run
client.chat(
  "Remember: API uses JWT"
)

# Later run (same config)
client.chat(
  "How does our API auth?"
)
# Recalls JWT information
```
</div>
<div class="mt-2 text-sm text-gray-400">Memory persists across sessions</div>
</div>
</div>

<div class="grid grid-cols-2 gap-6 mt-4">
<div>
<div class="text-lg font-bold mb-4 text-purple-300">🔑 Bring Your Own Key</div>
<div class="text-xs font-mono p-3 bg-gray-800 rounded-lg">
```python
client = CopilotClient(
  byok_config={
    'provider': 'openai',
    'api_key': 'sk-...',
    'model': 'gpt-4'
  }
)
```
</div>
<div class="mt-2 text-sm text-gray-400">Use your own LLM provider</div>
</div>
<div>
<div class="text-lg font-bold mb-4 text-blue-300">🎯 Custom Agents</div>
<div class="text-xs font-mono p-3 bg-gray-800 rounded-lg">
```python
client = CopilotClient(
  agent_config={
    'name': 'release-engineer',
    'description': '...',
    'skills': ['git-analysis'],
    'tools': ['git_log']
  }
)
```
</div>
<div class="mt-2 text-sm text-gray-400">Specialized agents for workflows</div>
</div>
</div>

---

# 🔒 Security and Permissions

<div class="grid grid-cols-2 gap-6">
<div class="p-5 bg-yellow-900/30 rounded-lg border-2 border-yellow-500">
<div class="font-bold text-yellow-300 mb-3">⚠️ Default Permissions</div>
<div class="text-sm space-y-2">
<div>• File operations (read, write, edit)</div>
<div>• Shell commands (arbitrary execution)</div>
<div>• Git operations (commits, branches)</div>
<div>• Web requests (if configured)</div>
</div>
<div class="mt-3 text-xs text-yellow-400">SDK operates CLI in permissive mode</div>
</div>
<div class="p-5 bg-green-900/30 rounded-lg border-2 border-green-500">
<div class="font-bold text-green-300 mb-3">✅ Best Practices</div>
<div class="text-sm space-y-2">
<div>• Review required tools for your app</div>
<div>• Configure tool permissions explicitly</div>
<div>• Run in sandboxed environments</div>
<div>• Validate AI output before execution</div>
</div>
<div class="mt-3 text-xs text-green-400">Security-first design</div>
</div>
</div>

<div class="mt-6 p-4 bg-gray-800 rounded-lg">
<div class="font-bold mb-2 text-blue-300">🔐 Restricting Tools</div>
<div class="text-xs font-mono">
```python
from github_copilot_sdk import CopilotClient

client = CopilotClient(
    allowed_tools=['file_read', 'git_log'],     # Only these
    working_directory='/path/to/safe/dir'       # Restrict scope
)
```
</div>
</div>

<div class="mt-4 p-3 bg-gradient-to-r from-yellow-600/80 to-red-600/80 rounded-lg text-center">
<span class="text-white font-bold">⚠️ Consider sandboxing for untrusted inputs or production contexts</span>
</div>

---

# 💰 Billing and Resources

<div class="grid grid-cols-2 gap-6">
<div class="p-5 bg-blue-900/30 rounded-lg border-2 border-blue-400">
<div class="font-bold text-blue-300 mb-3">💳 Billing Model</div>
<div class="text-sm space-y-2">
<div>• Counts toward Copilot premium request quota</div>
<div>• Same as Copilot CLI usage</div>
<div>• Each prompt = one premium request</div>
<div>• Streaming ≠ multiple requests</div>
<div>• BYOK supported for own LLM keys</div>
</div>
</div>
<div class="p-5 bg-purple-900/30 rounded-lg border-2 border-purple-400">
<div class="font-bold text-purple-300 mb-3">🔧 Technical Preview</div>
<div class="text-sm space-y-2">
<div>• Released January 2026</div>
<div>• Functional for dev and testing</div>
<div>• APIs may evolve</div>
<div>• Review SDK repo for current status</div>
<div>• Production use: evaluate stability</div>
</div>
</div>
</div>

<div class="mt-6 p-4 bg-gray-800 rounded-lg">
<div class="font-bold mb-3 text-cyan-300">📚 Key Resources</div>
<div class="grid grid-cols-2 gap-2 text-xs">
<div class="p-2 bg-gray-700 rounded">📖 <a href="https://github.com/github/copilot-sdk" class="text-cyan-400">SDK Repository</a></div>
<div class="p-2 bg-gray-700 rounded">📖 <a href="https://github.blog/news-insights/company-news/build-an-agent-into-any-app-with-the-github-copilot-sdk/" class="text-cyan-400">SDK Blog Announcement</a></div>
<div class="p-2 bg-gray-700 rounded">📖 <a href="https://github.com/github/awesome-copilot/blob/main/cookbook/copilot-sdk/python/README.md" class="text-cyan-400">Python Cookbook</a></div>
<div class="p-2 bg-gray-700 rounded">📖 <a href="https://docs.github.com/en/copilot/concepts/billing/copilot-requests" class="text-cyan-400">Billing Documentation</a></div>
</div>
</div>

---
layout: center
---

# 💭 The Shift: From Using AI to Building With It

<div class="text-xl mb-8 text-gray-300">The SDK represents a fundamental transformation</div>

<div class="grid grid-cols-3 gap-6 mb-8 text-sm">
<div class="p-4 bg-gray-800 rounded-lg border-2 border-red-400">
<div class="font-bold text-red-300 mb-2">Old Paradigm</div>
<div class="text-gray-300 space-y-1">
<div>• AI as separate assistant</div>
<div>• Manual prompting</div>
<div>• Context switching</div>
<div>• One-off interactions</div>
</div>
</div>
<div class="text-3xl text-gray-400 flex items-center justify-center">→</div>
<div class="p-4 bg-gray-800 rounded-lg border-2 border-green-400">
<div class="font-bold text-green-300 mb-2">New Paradigm</div>
<div class="text-gray-300 space-y-1">
<div>• AI embedded as infrastructure</div>
<div>• Programmatic control</div>
<div>• Seamless integration</div>
<div>• Automated workflows</div>
</div>
</div>
</div>

<div class="p-6 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-lg">
<div class="text-2xl font-bold text-white mb-3">The value isn't replacing judgment—it's eliminating repetition</div>
<div class="text-base text-blue-100">Release notes: 2 hours → 10 minutes · Test diagnosis: automatic · Code review: continuous</div>
</div>

<div class="mt-8 text-sm text-gray-400 italic text-center">
Start small. Pick one workflow. Build a tool. Measure impact. Iterate.
</div>

---
layout: center
---

# 🚀 What Will You Build?

<div class="text-xl mb-6 text-gray-300">The SDK's power emerges when you solve problems unique to your domain</div>

<div class="grid grid-cols-2 gap-4 mb-6 text-sm">
<div class="p-4 bg-gradient-to-br from-cyan-900/40 to-blue-900/40 rounded-lg">
<div class="font-bold text-cyan-300 mb-2">✅ Start Here</div>
<div class="text-gray-300 space-y-1">
<div>• Identify repetitive analysis workflows</div>
<div>• Pick one high-friction problem</div>
<div>• Build focused tool with SDK</div>
<div>• Measure concrete impact</div>
<div>• Expand to adjacent workflows</div>
</div>
</div>
<div class="p-4 bg-gradient-to-br from-purple-900/40 to-indigo-900/40 rounded-lg">
<div class="font-bold text-purple-300 mb-2">🎯 Examples to Explore</div>
<div class="text-gray-300 space-y-1">
<div>• Release notes generator</div>
<div>• Test failure analyzer</div>
<div>• PR pre-review bot</div>
<div>• Documentation generator</div>
<div>• Incident response automation</div>
</div>
</div>
</div>

<div class="p-6 bg-gradient-to-r from-green-600 to-blue-600 rounded-xl shadow-lg text-center">
<div class="text-2xl font-bold text-white">Build tools that scale your team's expertise, not replace it</div>
</div>

---
layout: end
---

# Thank You

<div class="text-xl text-gray-400 mb-6">Questions? Explore the SDK and start building.</div>

<div class="grid grid-cols-2 gap-4 text-sm">
<div class="p-4 bg-gray-800 rounded-lg">
<div class="font-bold text-cyan-300 mb-2">📚 Resources</div>
<div class="space-y-1 text-xs">
<div>• <a href="https://github.com/github/copilot-sdk" class="text-cyan-400">SDK Repository</a></div>
<div>• <a href="https://github.com/github/awesome-copilot/blob/main/cookbook/copilot-sdk/python/README.md" class="text-cyan-400">Python Cookbook</a></div>
<div>• <a href="https://docs.github.com/en/copilot/concepts/billing/copilot-requests" class="text-cyan-400">Billing Docs</a></div>
</div>
</div>
<div class="p-4 bg-gray-800 rounded-lg">
<div class="font-bold text-green-300 mb-2">🔗 Related Topics</div>
<div class="space-y-1 text-xs">
<div>• Custom Agents</div>
<div>• Model Context Protocol (MCP)</div>
<div>• BYOK (Bring Your Own Key)</div>
<div>• GitHub Copilot CLI</div>
</div>
</div>
</div>

<div class="abs-br m-6 text-sm opacity-50">
CopilotTraining Tech Talk
</div>
