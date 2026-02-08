---
theme: default
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## GitHub Copilot SDK: Build AI-Powered Tools for Your Workflows
  CopilotTraining Tech Talk
drawings:
  persist: false
transition: slide-left
title: GitHub Copilot SDK
module: tech-talks/copilot-sdk
mdc: true
status: active
updated: 2026-02-06
---

<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
  <!-- Gradient background -->
  <div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-indigo-900/10 to-blue-900/20"></div>

  <!-- Glowing orb -->
  <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-500/20 via-indigo-500/20 to-blue-500/20 rounded-full blur-3xl"></div>

  <!-- Logo with glow -->
  <div class="relative z-10">
    <div class="absolute inset-0 blur-2xl opacity-50">
      <img src="./sdp-logo.png" class="w-64" alt="" />
    </div>
    <img src="./sdp-logo.png" class="w-64 relative" alt="SDP Logo" />
  </div>

  <!-- Gradient text title -->
  <h1 class="!text-5xl !font-bold !mt-8 bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent relative z-10">
    GitHub Copilot SDK
  </h1>

  <!-- Pill subtitle -->
  <div class="mt-4 relative z-10">
    <span class="px-6 py-2 bg-gradient-to-r from-purple-600/80 to-indigo-600/80 rounded-full text-white text-xl font-medium shadow-lg shadow-purple-500/25">
      Build AI-Powered Tools for Your Workflows
    </span>
  </div>

  <!-- Tagline -->
  <div class="mt-8 text-lg opacity-70 relative z-10">
    ⏰ <strong>45 minutes</strong> • Developers • DevOps Engineers • Platform Engineers
  </div>

  <!-- Decorative line -->
  <div class="mt-6 w-32 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent rounded-full relative z-10"></div>
</div>

---

# The Central Question

<div class="h-full flex items-center justify-center">
  <div class="max-w-4xl">
    <div class="text-6xl text-center mb-8">🤔</div>
    <div class="text-4xl font-bold text-center bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent mb-6">
      "How do I embed Copilot's agentic capabilities directly into my own applications and workflows?"
    </div>
    <div class="text-xl text-center opacity-80 mt-8">
      Interactive tools are great, but automation requires programmatic control
    </div>
  </div>
</div>

---
layout: center
---

# 📖 Table of Contents

<div class="grid grid-cols-2 gap-6 mt-8">
  <div @click="$nav.go(7)" class="cursor-pointer p-6 bg-gradient-to-br from-purple-500/10 to-purple-600/5 rounded-xl border border-purple-500/30 hover:border-purple-400/60 transition-all hover:scale-105">
    <div class="text-3xl mb-2">🏗️</div>
    <div class="font-semibold text-lg">Architecture & Capabilities</div>
    <div class="text-sm opacity-70 mt-2">How the SDK works and what it provides</div>
  </div>

  <div @click="$nav.go(11)" class="cursor-pointer p-6 bg-gradient-to-br from-indigo-500/10 to-indigo-600/5 rounded-xl border border-indigo-500/30 hover:border-indigo-400/60 transition-all hover:scale-105">
    <div class="text-3xl mb-2">🚀</div>
    <div class="font-semibold text-lg">Getting Started</div>
    <div class="text-sm opacity-70 mt-2">Installation and basic usage</div>
  </div>

  <div @click="$nav.go(14)" class="cursor-pointer p-6 bg-gradient-to-br from-blue-500/10 to-blue-600/5 rounded-xl border border-blue-500/30 hover:border-blue-400/60 transition-all hover:scale-105">
    <div class="text-3xl mb-2">🔧</div>
    <div class="font-semibold text-lg">Integration Patterns</div>
    <div class="text-sm opacity-70 mt-2">Building tools with the SDK</div>
  </div>

  <div @click="$nav.go(19)" class="cursor-pointer p-6 bg-gradient-to-br from-cyan-500/10 to-cyan-600/5 rounded-xl border border-cyan-500/30 hover:border-cyan-400/60 transition-all hover:scale-105">
    <div class="text-3xl mb-2">⚡</div>
    <div class="font-semibold text-lg">Advanced Features</div>
    <div class="text-sm opacity-70 mt-2">MCP, memory, and production patterns</div>
  </div>
</div>

---

# The Problem

<div class="grid grid-cols-2 gap-6 mt-6">

<div>

### General-Purpose AI Doesn't Fit Custom Workflows

<div class="text-sm space-y-3 mt-4">

**Interactive tools don't scale**
- Release notes: 2 hours manual work
- Test analysis: 45 min per failure
- Code review: 30 min checking standards

**Automation requires code**
- Need programmatic control
- Integration with existing systems
- Automatic execution without humans

</div>

</div>

<div>

### Building AI From Scratch Takes Months

<div class="text-sm space-y-3 mt-4">

**Before solving your problem:**
- Build context management
- Implement tool orchestration
- Create planning loops
- Handle error recovery
- Integrate MCP servers

**You're building a platform**
- Not solving actual problems
- Months of infrastructure work
- Reinventing production-tested systems

</div>

</div>

</div>

<div class="mt-6 p-5 bg-gradient-to-r from-red-600/40 to-orange-600/40 rounded-xl border border-red-500/50">
<div class="font-bold text-center">Custom workflows need programmatic AI embedded as infrastructure, not separate assistants</div>
</div>

---

# The Solution: GitHub Copilot SDK

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

### What It Provides

<div class="text-sm space-y-3 mt-3">

**Production-tested agent runtime**
- Same engine powering Copilot CLI
- Planning, tools, multi-turn execution
- Context management included

**Multi-language support**
- Python, TypeScript/Node.js
- Go, .NET SDKs
- Consistent APIs across languages

</div>

</div>

<div>

### Key Capabilities

<div class="text-sm space-y-3 mt-3">

✅ Full agent runtime (planning + tools)
✅ Streaming responses
✅ MCP server integration
✅ Tool permission control
✅ GitHub authentication
✅ Persistent memory
✅ BYOK support

</div>

</div>

</div>

<div class="mt-6 p-5 bg-gradient-to-r from-green-600/40 to-emerald-600/40 rounded-xl border border-green-500/50">
<div class="text-center">
<strong>Result:</strong> Install SDK → Write 10 lines of code → Embed Copilot agents in any application
</div>
</div>

<div class="text-sm mt-4 text-center opacity-70">
Technical Preview • January 2026 • <a href="https://github.com/github/copilot-sdk" class="text-purple-400">github.com/github/copilot-sdk</a>
</div>

---

# Mental Model Shift

<div class="grid grid-cols-3 gap-4 mt-6">

<div class="p-4 bg-gradient-to-br from-green-600/20 to-green-700/10 rounded-lg border border-green-500/30">
<div class="text-2xl mb-2 text-center">✅</div>
<div class="font-bold text-sm mb-2 text-center">Move Toward</div>
<div class="text-xs space-y-2">
<div>• AI as infrastructure, not tool</div>
<div>• Domain-specific automation</div>
<div>• SDK + CLI complementarity</div>
<div>• Production error handling</div>
</div>
</div>

<div class="p-4 bg-gradient-to-br from-yellow-600/20 to-yellow-700/10 rounded-lg border border-yellow-500/30">
<div class="text-2xl mb-2 text-center">⚠️</div>
<div class="font-bold text-sm mb-2 text-center">Move Away From</div>
<div class="text-xs space-y-2">
<div>• Manual repetitive analysis</div>
<div>• Building agents from scratch</div>
<div>• Copy-paste integration</div>
</div>
</div>

<div class="p-4 bg-gradient-to-br from-red-600/20 to-red-700/10 rounded-lg border border-red-500/30">
<div class="text-2xl mb-2 text-center">🛑</div>
<div class="font-bold text-sm mb-2 text-center">Move Against</div>
<div class="text-xs space-y-2">
<div>• Unrestricted tool permissions</div>
<div>• Synchronous blocking calls</div>
<div>• Zero error handling</div>
</div>
</div>

</div>

<div class="mt-6 p-4 bg-purple-600/20 rounded-lg border border-purple-500/30">
<div class="text-sm">
<strong>Example Transformation:</strong> Release manager spends 2 hours reviewing 200 commits manually → SDK-powered tool analyzes commits in 10 minutes, generates categorized release notes ready for GitHub releases
<div class="text-xs mt-2 opacity-80">Savings: 2 hours → 10 minutes (92% reduction)</div>
</div>
</div>

---
name: architecture-capabilities
---

<!-- 🎬 MAJOR SECTION: Architecture & Capabilities -->

# 🏗️ How the SDK Works

<div class="mt-4">

### Architecture Components

```
Your Application (Python/TypeScript/Go/.NET)
       ↓ API calls
  SDK Client (github-copilot-sdk)
       ↓ JSON-RPC over stdio
  Copilot CLI (server mode)
       ↓ API requests
  GitHub Copilot Service
```

<div class="grid grid-cols-2 gap-4 mt-6">

<div class="text-sm">

**Component Responsibilities:**

1. **Your Application**: Define prompts and consume responses
2. **SDK Client**: Manage CLI lifecycle and communication
3. **Copilot CLI**: Execute agent runtime (same as interactive CLI)
4. **Copilot Service**: Model inference and authentication

</div>

<div class="text-sm">

**Why This Architecture:**

- Reuse production-tested runtime
- GitHub handles updates automatically
- No agent infrastructure to maintain
- Same reliability as CLI sessions

</div>

</div>

</div>

---

# SDK Capabilities

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

### Core Agent Features

<div class="text-sm space-y-2 mt-3">

✅ **Planning and multi-turn execution**
- Agent creates plans before acting
- Iterates across multiple turns

✅ **Tool invocation**
- File operations, shell commands
- Git operations, web requests

✅ **Multiple AI models**
- GPT-4, Claude, and others
- Automatic model routing

✅ **Custom agents and skills**
- Specialized domain expertise
- Tool and skill configuration

</div>

</div>

<div>

### SDK-Specific Advantages

<div class="text-sm space-y-2 mt-3">

🎯 **Embed in any application**
- Web apps, desktop tools, CLIs

🎯 **Programmatic control**
- Define prompts and constraints
- Control context and scope

🎯 **System integration**
- Jira, Slack, monitoring tools
- Custom API connections

🎯 **Security controls**
- Tool permission restrictions
- Working directory sandboxing

</div>

</div>

</div>

---

# Tool Permissions & Security

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

### Configuration Example

```python
from github_copilot_sdk import CopilotClient

client = CopilotClient(
    allowed_tools=[
        'file_read', 
        'git_log'
    ],  # Read-only operations
    working_directory='/safe/dir'
)
```

<div class="text-xs mt-3 opacity-70">
Restrict to least-privilege operations
</div>

</div>

<div>

### Security Considerations

<div class="text-sm space-y-2 mt-3">

**Production checklist:**
- ✓ Review required tool permissions
- ✓ Use `allowed_tools` for restrictions
- ✓ Run in containerized environments
- ✓ Validate AI-generated code
- ✓ Limit file access scope

**Default behavior:**
- SDK runs CLI in permissive mode
- Most tools enabled by default
- Configure explicitly for production

</div>

</div>

</div>

---

# Billing & Resource Consumption

<div class="mt-6">

<div class="grid grid-cols-2 gap-6">

<div>

### How Billing Works

<div class="text-sm space-y-3 mt-4">

**Copilot premium request quota**
- Same model as Copilot CLI
- Each prompt = 1 premium request
- Multi-turn = separate requests per turn
- Streaming doesn't count as multiple

**BYOK option available**
- Bring Your Own Key
- Use your own LLM API keys
- Bypass GitHub quota

</div>

</div>

<div>

### Resource Tracking

<div class="text-sm space-y-3 mt-4">

**Monitor usage:**
- Track via GitHub Copilot dashboard
- Set organizational limits
- Review quota consumption

**Optimization strategies:**
- Cache responses when possible
- Use appropriate models (GPT-3.5 vs GPT-4)
- Batch similar requests
- Configure fallback models

</div>

</div>

</div>

<div class="mt-4 text-sm text-center opacity-70">
📖 <a href="https://docs.github.com/en/copilot/concepts/billing/copilot-requests" class="text-purple-400">Copilot Requests documentation</a> for quota details
</div>

</div>

---
name: getting-started
---

<!-- 🎬 MAJOR SECTION: Getting Started -->

# 🚀 Installing and Using the SDK

<div class="grid grid-cols-2 gap-6 mt-6">

<div>

### Prerequisites

```bash
# 1. Install Copilot CLI
brew install gh
gh extension install github/gh-copilot

# 2. Authenticate
copilot auth login
```

</div>

<div>

### Install SDK

<div class="text-sm space-y-3">

**Python:**
```bash
pip install github-copilot-sdk
```

**TypeScript/Node.js:**
```bash
npm install @github/copilot-sdk
```

**Go:**
```bash
go get github.com/github/copilot-sdk-go
```

**.NET:**
```bash
dotnet add package GitHub.Copilot.SDK
```

</div>

</div>

</div>

---

# Basic SDK Usage

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

### Simple Example (Python)

```python
from github_copilot_sdk import CopilotClient

# Initialize client
client = CopilotClient()

# Send a prompt
response = client.chat(
    "Explain OAuth in simple terms"
)

# Get the response
print(response.text)
```

<div class="text-xs mt-3 opacity-70">
SDK handles CLI lifecycle automatically
</div>

</div>

<div>

### Streaming Responses

```python
from github_copilot_sdk import CopilotClient

client = CopilotClient()

# Stream response chunks
for chunk in client.stream(
    "Generate release notes from git log"
):
    print(chunk.text, end='', flush=True)
```

<div class="text-xs mt-3 opacity-70">
Real-time output as agent generates response
</div>

</div>

</div>

<div class="mt-6 p-4 bg-green-600/20 rounded-lg border border-green-500/30">
<div class="text-sm text-center">
<strong>That's it!</strong> SDK spawns CLI, manages communication, and streams results back
</div>
</div>

---

# TypeScript/Node.js Example

```typescript
import { CopilotClient } from '@github/copilot-sdk';

// Initialize client
const client = new CopilotClient();

// Send prompt with options
const response = await client.chat({
  prompt: 'Analyze test failures in this log',
  model: 'gpt-4',
  stream: true
});

// Handle streaming response
for await (const chunk of response) {
  process.stdout.write(chunk.text);
}

// Clean up
await client.close();
```

<div class="mt-4 text-sm opacity-70">
Async/await pattern with TypeScript types and error handling
</div>

---
name: integration-patterns
---

<!-- 🎬 MAJOR SECTION: Integration Patterns -->

# 🔧 Integration Pattern 1: CLI Tool

<div class="grid grid-cols-2 gap-4 mt-2">

<div>

### Release Notes Generator

```python
#!/usr/bin/env python3
import argparse
from github_copilot_sdk import CopilotClient

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--from-tag', 
                        required=True)
    parser.add_argument('--to-tag', 
                        default='HEAD')
    args = parser.parse_args()

    client = CopilotClient()
    
    prompt = f"""
    Generate release notes from 
    {args.from_tag} to {args.to_tag}.
    
    Format with sections:
    - Features (customer value)
    - Fixes (user impact)
    - Breaking Changes
    - Security Updates
    """
    
    response = client.chat(prompt)
    print(response.text)

if __name__ == '__main__':
    main()
```

</div>

<div>

### Usage

```bash
$ python release-notes.py \
  --from-tag v1.2.0 \
  --to-tag v1.3.0

# Output in 10-15 seconds:
## Release Notes: v1.3.0

### Features
- Added OAuth support for 
  third-party integrations
- Improved dashboard 
  performance by 40%

### Fixes
- Fixed authentication timeout
  on slow connections
...
```

<div class="text-sm mt-4 p-3 bg-green-600/20 rounded border border-green-500/30">
<strong>Before:</strong> 2 hours manual<br/>
<strong>After:</strong> 10 minutes automated<br/>
<strong>Savings:</strong> 92%
</div>

</div>

</div>

---

# Integration Pattern 2: Web API

<div class="grid grid-cols-2 gap-4 mt-2">

<div>

### Flask API Endpoint

```python
from flask import Flask, request, jsonify
from github_copilot_sdk import CopilotClient

app = Flask(__name__)
client = CopilotClient(
    allowed_tools=['file_read'],
    working_directory='/tmp/pr-diffs'
)

@app.route('/api/analyze-pr', 
           methods=['POST'])
def analyze_pr():
    pr_diff = request.json.get('diff')
    
    if not pr_diff:
        return jsonify({
            'error': 'Missing diff'
        }), 400

    prompt = f"""
    Review this PR for:
    - Security vulnerabilities
    - Logic errors
    - Performance concerns
    - Code quality
    
    {pr_diff}
    """
    
    try:
        response = client.chat(prompt)
        return jsonify({
            'analysis': response.text
        })
    except Exception as e:
        return jsonify({
            'error': str(e)
        }), 500
```

</div>

<div>

### REST API Usage

```bash
$ curl -X POST \
  http://localhost:5000/api/analyze-pr \
  -H "Content-Type: application/json" \
  -d '{
    "diff": "diff --git a/auth.py..."
  }'

# Response:
{
  "analysis": "## Security Review
  
  ⚠️ **HIGH**: SQL injection risk
  Line 42: Unsanitized input...
  
  ✅ Good: Authentication check...
  
  💡 Suggested fix:
  Use parameterized queries..."
}
```

<div class="text-sm mt-4 p-3 bg-blue-600/20 rounded border border-blue-500/30">
Integrate AI review into CI/CD pipeline or GitHub webhooks
</div>

</div>

</div>

---

# Integration Pattern 3: Scheduled Automation

```python
import schedule
import time
from github_copilot_sdk import CopilotClient

def analyze_test_failures():
    """Runs every morning to analyze overnight test failures"""
    client = CopilotClient()
    
    # Fetch test reports from CI
    report = fetch_latest_test_report()
    
    prompt = f"""
    Analyze test failures from last 24 hours:
    1. Root causes with confidence scores
    2. Flaky tests based on patterns
    3. Specific code locations to investigate
    4. Suggested fixes
    
    Test Report: {json.dumps(report)}
    """
    
    analysis = client.chat(prompt)
    
    # Notify team and create tickets
    notify_team_slack(analysis.text)
    create_jira_tickets(parse_issues(analysis.text))

# Schedule daily at 9:00 AM
schedule.every().day.at("09:00").do(analyze_test_failures)

while True:
    schedule.run_pending()
    time.sleep(60)
```

---

# Integration Pattern 4: Custom Agent Config

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

### Specialized Agent

```python
from github_copilot_sdk import CopilotClient

client = CopilotClient(
    agent_config={
        'name': 'release-engineer',
        'description': 'Specialized in '
                      'release management',
        'skills': [
            'git-analysis',
            'changelog-generation'
        ],
        'tools': [
            'git_log',
            'file_read',
            'file_write'
        ]
    }
)

response = client.chat("""
Analyze commits from v1.5.0 to HEAD.

Generate release notes:
- Categorize by type
- Explain customer value
- Highlight migration steps
""")

print(response.text)
```

</div>

<div>

### Benefits

<div class="text-sm space-y-3 mt-4">

**Domain expertise:**
- Agent knows release workflows
- Follows organization standards
- Uses consistent terminology

**Tool restrictions:**
- Only release-relevant tools
- Read-only Git operations
- Controlled file writes

**Reusable configuration:**
- Share across team
- Version control config
- Consistent behavior

</div>

<div class="mt-4 p-3 bg-purple-600/20 rounded border border-purple-500/30 text-sm">
Custom agents = domain-specific AI assistants
</div>

</div>

</div>

---
name: advanced-features
---

<!-- 🎬 MAJOR SECTION: Advanced Features -->

# ⚡ Advanced Feature 1: MCP Integration

<div class="grid grid-cols-2 gap-4 mt-2">

<div>

### Connect MCP Servers

```python
from github_copilot_sdk import CopilotClient

client = CopilotClient(
    mcp_servers=[
        {
            'name': 'jira',
            'command': 'npx',
            'args': [
                '@modelcontextprotocol/server-jira'
            ],
            'env': {
                'JIRA_URL': 'https://...',
                'JIRA_TOKEN': os.environ['JIRA_TOKEN']
            }
        }
    ]
)

response = client.chat("""
Review open P0 tickets in Jira.
Identify blockers for v2.0 release.
Suggest prioritization.
""")

# Agent uses Jira MCP server
# to fetch and analyze tickets
```

</div>

<div>

### Available MCP Servers

<div class="text-sm space-y-2 mt-3">

**Official servers:**
- GitHub (repos, issues, PRs)
- Jira (tickets, workflows)
- Slack (messages, channels)
- PostgreSQL (database queries)
- Filesystem (secure file access)

**Custom servers:**
- Build your own MCP server
- Connect internal tools
- Expose proprietary data

**Use cases:**
- Integrate with existing systems
- Access real-time data
- Automate cross-tool workflows

</div>

<div class="text-xs mt-3 opacity-70">
📖 MCP: Model Context Protocol — standard for tool integration
</div>

</div>

</div>

---

# Advanced Feature 2: Persistent Memory

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

### Enable Memory

```python
from github_copilot_sdk import CopilotClient

client = CopilotClient(
    memory_enabled=True,
    memory_scope='repository'
)

# First conversation
client.chat("""
This codebase uses FastAPI
with PostgreSQL backend.
Remember this architecture.
""")

# Later conversation (new session)
client.chat("""
Generate API endpoint for users.
""")

# Agent remembers architecture
# and generates FastAPI + PostgreSQL
```

</div>

<div>

### Memory Scopes

<div class="text-sm space-y-3 mt-4">

**Repository scope:**
- Shared across all sessions
- Persists architecture decisions
- Remembers coding patterns

**Session scope:**
- Isolated to one conversation
- No cross-session memory
- Clean slate each time

**Global scope:**
- Organization-wide knowledge
- Shared conventions
- Team standards

</div>

<div class="mt-4 p-3 bg-indigo-600/20 rounded border border-indigo-500/30 text-sm">
Memory eliminates repeated context explanations
</div>

</div>

</div>

---

# Advanced Feature 3: Production Error Handling

```python
from github_copilot_sdk import CopilotClient
from tenacity import retry, stop_after_attempt, wait_exponential

@retry(
    stop=stop_after_attempt(3),
    wait=wait_exponential(multiplier=1, min=2, max=10)
)
def ai_analysis_with_retry(prompt: str) -> str:
    client = CopilotClient()
    
    try:
        response = client.chat(prompt, timeout=30)
        return response.text
        
    except TimeoutError:
        # API rate limit or slow response
        raise  # Retry via tenacity
        
    except Exception as e:
        # Log error for observability
        logger.error(f"SDK error: {e}")
        raise

# Usage with fallback
try:
    result = ai_analysis_with_retry("Analyze logs...")
except Exception:
    # Fallback to manual review or alert
    result = "AI analysis unavailable - manual review required"
```

---

# Real-World Use Case 1: Release Automation

<div class="grid grid-cols-2 gap-4 mt-3">

<div class="text-sm">

### The Problem

**Manual release process:**
- 2 hours reviewing 200+ commits
- Categorizing changes manually
- Writing customer-facing summaries
- Formatting for GitHub releases
- Error-prone, inconsistent

**Pain points:**
- Blocks deployment pipeline
- Release manager bottleneck
- Inconsistent note quality
- Delayed customer communication

</div>

<div class="text-sm">

### The SDK Solution

```python
from github_copilot_sdk import CopilotClient

def generate_release_notes(
    from_tag: str, 
    to_tag: str
) -> str:
    client = CopilotClient(
        allowed_tools=['git_log']
    )
    
    return client.chat(f"""
    Generate release notes 
    {from_tag} to {to_tag}.
    
    Categories:
    - Features (customer value)
    - Fixes (user impact)
    - Breaking Changes (migration)
    - Security Updates
    """).text

# Automated in CI/CD pipeline
notes = generate_release_notes(
    'v1.2.0', 'v1.3.0'
)
create_github_release(notes)
```

**Outcome:**
- 2 hours → 10 minutes (92% faster)
- Consistent format
- Customer-focused language

</div>

</div>

---

# Real-World Use Case 2: Test Failure Analysis

<div class="text-sm space-y-3">

### The Problem
Test infrastructure team manually analyzes failure patterns across builds — 45 minutes per failed CI run. Identify flaky tests, correlate errors, suggest fixes.

### The Solution

```python
from github_copilot_sdk import CopilotClient

def analyze_test_failures(test_report: dict) -> dict:
    client = CopilotClient()
    
    response = client.chat(f"""
    Analyze test failures and identify:
    1. Root causes (high/medium/low confidence)
    2. Flaky tests based on failure patterns
    3. Specific code locations to investigate
    4. Suggested fixes for each failure
    
    Test Report: {json.dumps(test_report, indent=2)}
    """)
    
    return parse_analysis(response.text)

# Runs automatically after each CI build
analysis = analyze_test_failures(fetch_ci_report())
post_to_slack(analysis)
create_jira_tickets_for_blockers(analysis)
```

**Outcome:** 45 minutes → 5 minutes per analysis. Faster root cause identification. Fewer escalations.

</div>

---

# Real-World Use Case 3: Code Review Bot

<div class="grid grid-cols-2 gap-4 mt-2">

<div class="text-sm">

### Implementation

```python
from github_copilot_sdk import CopilotClient
import os

def review_pr(
    repo: str, 
    pr_number: int,
    github_token: str
):
    # Fetch PR diff
    diff = get_pr_diff(
        repo, pr_number, github_token
    )
    
    client = CopilotClient(
        allowed_tools=['file_read']
    )
    
    response = client.chat(f"""
    Review PR for:
    - Security (SQL injection, XSS)
    - Logic errors and edge cases
    - Performance (N+1, loops)
    - Code quality
    
    {diff}
    """)
    
    # Post blocking issues as comments
    issues = parse_review_issues(
        response.text
    )
    for issue in issues:
        if issue['severity'] == 'blocking':
            post_github_review_comment(
                repo, pr_number, issue
            )
```

</div>

<div class="text-sm">

### Integration

**Webhook handler:**
```python
@app.route('/github/pr', 
           methods=['POST'])
def handle_pr_webhook():
    payload = request.json
    
    if payload['action'] == 'opened':
        review_pr(
            payload['repository']['full_name'],
            payload['pull_request']['number'],
            os.environ['GITHUB_TOKEN']
        )
    
    return '', 200
```

**Outcome:**
- Review time cut by 50%
- PR throughput doubled
- Instant feedback for juniors
- Seniors focus on architecture

</div>

</div>

---

# What You Can Do Today

<div class="grid grid-cols-2 gap-6 mt-6">

<div>

### Immediate (15 minutes)

<div class="text-sm space-y-2 mt-3">

✓ **Install and authenticate**
```bash
copilot auth login
pip install github-copilot-sdk
```

✓ **Run basic example**
```python
from github_copilot_sdk import CopilotClient
client = CopilotClient()
print(client.chat("Hello").text)
```

✓ **Test streaming**
```python
for chunk in client.stream("Explain Docker"):
    print(chunk.text, end='')
```

</div>

</div>

<div>

### Short-Term (1 hour)

<div class="text-sm space-y-2 mt-3">

✓ **Identify workflow to automate**
- Release notes generation
- Test failure analysis
- Log correlation

✓ **Build CLI tool** (Pattern 1)
- Use SDK backend
- Test with real data

✓ **Add error handling**
- Retry logic
- Timeout configuration
- Fallback behavior

</div>

</div>

</div>

<div class="mt-6 p-4 bg-purple-600/20 rounded-lg border border-purple-500/30">
<div class="text-sm text-center">
<strong>Next Steps:</strong> Share with team → Review <a href="../mcp-apps/" class="text-purple-400">MCP Apps</a> → Explore <a href="https://github.com/github/copilot-sdk" class="text-purple-400">SDK examples</a> → Scale to organization
</div>
</div>

---

# Related Patterns & Decision Flow

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

### Complementary Features

<div class="text-sm space-y-2 mt-3">

**Copilot CLI**
- Interactive terminal workflows
- SDK provides programmatic control

**MCP Apps**
- Extend SDK with internal systems
- Connect to APIs and databases

**Agentic SDLC**
- Full repository automation
- SDK is the building block

**Custom Agents**
- Domain-specific expertise
- SDK provides the runtime

</div>

</div>

<div>

### When to Use SDK vs Alternatives

```
Q: What are you building?

├─ Interactive terminal workflows
│  → Use: Copilot CLI
│
├─ Code completion while editing
│  → Use: Copilot in VS Code/IDE
│
├─ Custom tools/bots/automation
│  → Use: Copilot SDK (this talk)
│
└─ Non-developer products
   → Consider: OpenAI API
```

<div class="text-sm mt-4 p-3 bg-blue-600/20 rounded border border-blue-500/30">
SDK = Programmatic AI for developer tools
</div>

</div>

</div>

---

# Official Documentation & Resources

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

### Primary Documentation

<div class="text-sm space-y-2 mt-3">

📖 **[GitHub Copilot SDK Repository](https://github.com/github/copilot-sdk)**
- Installation guides
- API reference
- Language-specific examples

📖 **[SDK Blog Announcement](https://github.blog/news-insights/company-news/build-an-agent-into-any-app-with-the-github-copilot-sdk/)**
- Technical preview details
- Use cases and architecture

📖 **[Copilot CLI Documentation](https://docs.github.com/en/copilot/using-github-copilot/using-github-copilot-in-the-command-line)**
- Understand the agent runtime

</div>

</div>

<div>

### Additional Resources

<div class="text-sm space-y-2 mt-3">

🎓 **[Python SDK Cookbook](https://github.com/github/awesome-copilot/blob/main/cookbook/copilot-sdk/python/README.md)**
- Python-specific patterns

🔧 **[SDK Custom Instructions](https://github.com/github/awesome-copilot/blob/main/collections/copilot-sdk.md)**
- Speed up SDK development

📋 **[Copilot Requests Docs](https://docs.github.com/en/copilot/concepts/billing/copilot-requests)**
- Billing and quotas

🐙 **[SDK Examples Repository](https://github.com/github/copilot-sdk)**
- Working code samples

</div>

</div>

</div>

---
layout: center
class: text-center
---

<div class="relative">
  <div class="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-indigo-900/20 to-blue-900/30 blur-3xl"></div>
  
  <div class="relative z-10">
    <div class="text-6xl mb-8">✅</div>
    
    <h1 class="!text-5xl !font-bold bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent mb-6">
      You're Ready to Build with Copilot SDK
    </h1>
    
    <div class="text-xl opacity-80 mb-8">
      Transform custom workflows with programmatic AI
    </div>
    
    <div class="flex justify-center gap-4 text-sm">
      <div class="px-6 py-3 bg-purple-600/20 rounded-lg border border-purple-500/30">
        Install SDK → Write code → Automate workflows
      </div>
    </div>
    
    <div class="mt-8 text-sm opacity-60">
      Questions? Explore the <a href="https://github.com/github/copilot-sdk" class="text-purple-400">SDK repository</a>
    </div>
  </div>
</div>
