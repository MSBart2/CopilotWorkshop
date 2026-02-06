---
theme: default
background: https://cover.sli.dev
title: GitHub Copilot SDK
class: text-center
highlighter: shiki
drawings:
  persist: false
transition: slide-left
mdc: true
module: tech-talks/copilot-sdk
---

<style>
.beautified-title {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 1rem;
}
.subtitle {
  font-size: 1.5rem;
  color: #64748b;
  font-weight: 500;
}
.tech-badge {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 2rem;
  font-weight: 600;
  margin-top: 1rem;
}
</style>

<div class="beautified-title">
GitHub Copilot SDK
</div>

<div class="subtitle">
Build AI-Powered Tools for Your Workflows
</div>

<div class="tech-badge">
⏰ 45 minutes | 🎯 Developers / DevOps / Platform Engineers
</div>

---
layout: center
---

# The Question This Talk Answers

<div style="font-size: 2rem; font-weight: 600; color: #667eea; margin: 2rem 0; line-height: 1.5;">
"How do I embed Copilot's agentic capabilities directly into my own applications and workflows?"
</div>

---
layout: center
---

# Table of Contents

<div class="grid grid-cols-2 gap-4 mt-8">
  <a href="#architecture-capabilities" class="toc-card">
    <div class="card-header">Architecture & Capabilities</div>
    <div class="card-desc">How the SDK works and what it provides</div>
  </a>
  <a href="#getting-started" class="toc-card">
    <div class="card-header">Getting Started</div>
    <div class="card-desc">Installation and basic usage</div>
  </a>
  <a href="#integration-patterns" class="toc-card">
    <div class="card-header">Integration Patterns</div>
    <div class="card-desc">Building tools with the SDK</div>
  </a>
  <a href="#advanced-features" class="toc-card">
    <div class="card-header">Advanced Features</div>
    <div class="card-desc">MCP, memory, and production patterns</div>
  </a>
</div>

<style>
.toc-card {
  padding: 1.5rem;
  background: linear-gradient(135deg, #667eea15 0%, #764ba215 100%);
  border: 2px solid #667eea40;
  border-radius: 0.5rem;
  text-decoration: none;
  transition: all 0.3s;
}
.toc-card:hover {
  transform: translateY(-4px);
  border-color: #667eea;
  box-shadow: 0 8px 16px rgba(102, 126, 234, 0.2);
}
.card-header {
  font-size: 1.2rem;
  font-weight: 700;
  color: #667eea;
  margin-bottom: 0.5rem;
}
.card-desc {
  font-size: 0.9rem;
  color: #64748b;
}
</style>

---

# The Problem

<div class="grid grid-cols-2 gap-6">
<div>

### 🚫 General AI Doesn't Fit

Copilot excels at IDE completion and CLI, but **release notes**, **test analysis**, and **custom automation** need programmatic control

### 🏗️ Building Takes Months

Context management, tool orchestration, multi-turn conversations, model routing — building an **AI platform** before solving your actual problem

</div>
<div>

### 📉 Interactive Doesn't Scale

Manually running Copilot for repetitive analysis (test failures, logs) **wastes time** and doesn't integrate with systems

### 🎯 Need Domain Tools

Release engineering, code quality bots, incident response — **AI as infrastructure**, not separate assistant

</div>
</div>

<div class="mt-6 p-4" style="background: #fef3c7; border-left: 4px solid #f59e0b; border-radius: 0.5rem;">
<strong>The Gap:</strong> 2 hours per release for manual commit review. 45 minutes per failed CI run. 30+ minutes for log correlation during incidents. These need <strong>programmatic AI</strong>.
</div>

---

# The Solution: GitHub Copilot SDK

<div class="grid grid-cols-2 gap-6">
<div>

### What It Does

**Programmable interface** to Copilot's production-tested agent runtime

Import SDK in **Python, TypeScript, Go, or .NET** → Full agentic execution loop ready to embed

### Key Capabilities

- ✅ **Full Agent Runtime** - Planning, tools, multi-turn, context
- ✅ **Multi-Language** - Python, TypeScript, Go, .NET
- ✅ **Production-Ready** - Streaming, memory, auth, MCP
- ✅ **Security Controls** - Tool permissions, directory limits

</div>
<div>

### Architecture Overview

```
Your Application
    ↓ SDK API calls
SDK Client
    ↓ JSON-RPC
Copilot CLI (server mode)
    ↓ API requests
GitHub Copilot Service
```

**The Pattern:** CLI is the agent runtime, SDK is how you programmatically control it

**Technical Preview** - January 2026

</div>
</div>

---

# Key Artifacts

<div class="grid grid-cols-2 gap-4">

<div class="artifact-card">
<div class="artifact-title">Basic SDK Client</div>
Initialize SDK, send prompts, receive responses
</div>

<div class="artifact-card">
<div class="artifact-title">Streaming Response Handler</div>
Process real-time agent output
</div>

<div class="artifact-card">
<div class="artifact-title">CLI Tool with SDK Backend</div>
Command-line tool powered by SDK
</div>

<div class="artifact-card">
<div class="artifact-title">Web API with SDK</div>
REST API endpoint using SDK for AI workflows
</div>

<div class="artifact-card">
<div class="artifact-title">Scheduled Automation</div>
Periodic task automation with SDK
</div>

<div class="artifact-card">
<div class="artifact-title">Custom Agent Configuration</div>
SDK with specialized agent and skill setup
</div>

<div class="artifact-card">
<div class="artifact-title">MCP Server Integration</div>
Extending SDK with Model Context Protocol
</div>

<div class="artifact-card">
<div class="artifact-title">Error Handling with Retries</div>
Production-ready error handling patterns
</div>

</div>

<style>
.artifact-card {
  padding: 1rem;
  background: linear-gradient(135deg, #667eea10 0%, #764ba210 100%);
  border-left: 3px solid #667eea;
  border-radius: 0.5rem;
}
.artifact-title {
  font-weight: 700;
  color: #667eea;
  margin-bottom: 0.3rem;
}
</style>

---

# Mental Model Shift

<div class="grid grid-cols-3 gap-4">

<div class="shift-card move-toward">
<div class="shift-header">✅ Move Toward</div>

- **Programmatic AI Control** - AI as infrastructure
- **Domain-Specific Tools** - 80% faster than general AI
- **SDK + CLI Together** - Right tool per context
- **Production Patterns** - Retries, permissions, sandboxing

</div>

<div class="shift-card move-away">
<div class="shift-header">⚠️ Move Away From</div>

- **Manual Repetition** - Running commands for recurring tasks
- **Building from Scratch** - Months before solving actual problem
- **Copy-Paste Integration** - Breaks automation chains

</div>

<div class="shift-card move-against">
<div class="shift-header">🛑 Move Against</div>

- **Unrestricted Tools** - Security risk in untrusted contexts
- **Synchronous Blocking** - Poor UX, timeouts
- **Zero Error Handling** - Production failures

</div>

</div>

<div class="mt-4 p-4" style="background: #dcfce7; border-left: 4px solid #22c55e; border-radius: 0.5rem;">
<strong>Transformation:</strong> Release notes: 2 hours → 10 minutes (92% reduction). SDK-powered tool analyzes commits, generates categorized notes automatically.
</div>

<style>
.shift-card {
  padding: 1rem;
  border-radius: 0.5rem;
  font-size: 0.85rem;
}
.move-toward {
  background: #dcfce7;
  border: 2px solid #22c55e;
}
.move-away {
  background: #fef3c7;
  border: 2px solid #f59e0b;
}
.move-against {
  background: #fee2e2;
  border: 2px solid #ef4444;
}
.shift-header {
  font-weight: 700;
  font-size: 1rem;
  margin-bottom: 0.5rem;
}
</style>

---

# When to Use This Pattern

<div class="grid grid-cols-2 gap-6">
<div>

### ✅ Use SDK When

- Automate AI reasoning workflows (release notes, test analysis)
- Embed Copilot in existing applications
- Build custom dev tools, bots, dashboards
- Need programmatic control over prompts and context
- Integrate with external systems (Jira, Slack, monitoring)

### ❌ Don't Use SDK When

- Need interactive terminal assistance → **Copilot CLI**
- Need code completion while editing → **VS Code**
- One-off exploration → **CLI or IDE** faster
- Non-developer product → **OpenAI API** instead

</div>
<div>

### Decision Tree

```
Q: What are you building?

├─ Interactive terminal workflows
│  → Use: Copilot CLI
│
├─ Code completion while editing
│  → Use: Copilot in VS Code/IDE
│
├─ Custom tools, bots, automation
│  → Use: Copilot SDK ✓
│
└─ Embed AI in existing apps
   → Use: Copilot SDK ✓
```

</div>
</div>

---
name: architecture-capabilities
---

<div class="section-divider">
<h1>Architecture & Capabilities</h1>
<p>How the SDK works and what it provides</p>
</div>

<style>
.section-divider {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-align: center;
}
.section-divider h1 {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;
}
.section-divider p {
  font-size: 1.5rem;
  opacity: 0.9;
}
</style>

---

# Architecture Components

<div class="grid grid-cols-2 gap-6">
<div>

### Communication Flow

```
Your Application
  (Python/TypeScript/Go/.NET)
        ↓ API calls
  SDK Client
  (github-copilot-sdk)
        ↓ JSON-RPC over stdio
  Copilot CLI
  (server mode)
        ↓ API requests
  GitHub Copilot Service
```

### Component Responsibilities

1. **Your App** - Prompts, logic, responses
2. **SDK Client** - CLI lifecycle, JSON-RPC, streaming
3. **Copilot CLI** - Agent runtime (same as interactive CLI)
4. **Copilot Service** - Models, auth, rate limits

</div>
<div>

### SDK Capabilities

**Core Agent Features:**
- ✅ Planning & multi-turn execution
- ✅ Tool invocation (files, shell, Git)
- ✅ Multiple AI models (GPT-4, Claude)
- ✅ Custom agents, skills, tools
- ✅ MCP server integration
- ✅ Persistent memory
- ✅ Real-time streaming
- ✅ GitHub authentication

**SDK-Specific Advantages:**
- 🎯 Embed in any application
- 🎯 Programmatic prompt control
- 🎯 System integration (Jira, Slack)
- 🎯 Tool permission control
- 🎯 Error handling & observability

</div>
</div>

---

# Tool Permissions & Security

<div class="grid grid-cols-2 gap-6">
<div>

### Security Configuration

```python
from github_copilot_sdk import CopilotClient

client = CopilotClient(
    # Restrict to read-only operations
    allowed_tools=[
        'file_read',
        'git_log'
    ],
    # Limit file access scope
    working_directory='/path/to/safe/dir'
)
```

### Security Considerations

- ✅ Review which tools your app needs
- ✅ Use `allowed_tools` for least-privilege
- ✅ Run SDK in containers for untrusted inputs
- ✅ Validate AI-generated code before execution

</div>
<div>

### Billing & Resource Usage

**SDK usage counts toward Copilot premium quota:**

- Same billing model as Copilot CLI
- Each prompt = premium request
- Multi-turn = individual requests per turn
- Streaming doesn't count as multiple requests
- **BYOK supported** for your own LLM keys

📖 [Copilot Requests documentation](https://docs.github.com/en/copilot/concepts/billing/copilot-requests)

### Default vs Restricted

| Mode | Tools Enabled | Use Case |
|------|---------------|----------|
| **Default** | Most tools | Development, trusted environments |
| **Restricted** | Explicit list | Production, untrusted inputs |

</div>
</div>

---
name: getting-started
---

<div class="section-divider">
<h1>Getting Started</h1>
<p>Installation and basic usage</p>
</div>

<style>
.section-divider {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-align: center;
}
.section-divider h1 {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;
}
.section-divider p {
  font-size: 1.5rem;
  opacity: 0.9;
}
</style>

---

# Prerequisites & Installation

<div class="grid grid-cols-2 gap-6">
<div>

### Prerequisites

**Before using SDK:**

```bash
# Install Copilot CLI
# See: docs.github.com/copilot/cli

# Verify installation
copilot --version

# Authenticate with GitHub
copilot auth login
```

**You also need:**
- Python 3.8+ / Node.js 18+ / Go 1.20+ / .NET 6.0+
- GitHub Copilot subscription
- Internet connection for API access

</div>
<div>

### SDK Installation

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
go get github.com/github/copilot-sdk/go
```

**.NET:**
```bash
dotnet add package GitHub.Copilot.SDK
```

</div>
</div>

---

# Basic Usage Example

<div class="grid grid-cols-2 gap-6">
<div>

### Python SDK

```python
from github_copilot_sdk import CopilotClient

# Initialize client
# (spawns CLI in server mode automatically)
client = CopilotClient()

# Simple chat interaction
response = client.chat(
    "Explain OAuth vs JWT"
)
print(response.text)

# Multi-turn conversation
conversation = client.start_conversation()
conversation.send(
    "I have a slow Python function"
)
response1 = conversation.get_response()
print(response1.text)

conversation.send("Here's the code: ...")
response2 = conversation.get_response()
print(response2.text)
```

</div>
<div>

### TypeScript SDK

```typescript
import { CopilotClient } from "@github/copilot-sdk";

const client = new CopilotClient();
await client.start();

const session = await client.createSession({
    model: "gpt-4",
});

await session.send({
    prompt: "Generate a README for this project"
});

const response = await session.getResponse();
console.log(response.text);
```

### Key Patterns

- **Client initialization** - SDK manages CLI lifecycle
- **Simple prompts** - `.chat()` for one-shot requests
- **Conversations** - Multi-turn context maintained
- **Model selection** - Specify per request or use default

</div>
</div>

---

# Streaming Responses

<div class="grid grid-cols-2 gap-6">
<div>

### Python Streaming

```python
from github_copilot_sdk import CopilotClient

client = CopilotClient()

# Stream response chunks as they arrive
for chunk in client.chat_stream(
    "Analyze this repository and suggest improvements"
):
    print(chunk.text, end='', flush=True)
```

### Why Streaming Matters

- ✅ **Better UX** - Users see progress in real-time
- ✅ **Lower Latency** - First tokens arrive quickly
- ✅ **Early Detection** - Cancel if agent goes off-track
- ✅ **Long Tasks** - Better for multi-step agent operations

</div>
<div>

### TypeScript Streaming

```typescript
const client = new CopilotClient();
await client.start();

const session = await client.createSession();

const stream = await session.sendStream({
    prompt: "Analyze codebase for issues"
});

for await (const chunk of stream) {
    process.stdout.write(chunk.text);
}
```

### Streaming vs Non-Streaming

| Aspect | Non-Streaming | Streaming |
|--------|---------------|-----------|
| **Response Time** | Wait for complete | Immediate chunks |
| **User Perception** | Slower | Faster, progressive |
| **Cancellation** | After completion | During generation |
| **Memory** | Full response in RAM | Process chunks |

</div>
</div>

---
name: integration-patterns
---

<div class="section-divider">
<h1>Integration Patterns</h1>
<p>Building tools with the SDK</p>
</div>

<style>
.section-divider {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-align: center;
}
.section-divider h1 {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;
}
.section-divider p {
  font-size: 1.5rem;
  opacity: 0.9;
}
</style>

---

# Pattern 1: CLI Tool with SDK Backend

<div class="grid grid-cols-2 gap-6">
<div>

### Release Notes Generator

```python
#!/usr/bin/env python3
import argparse
from github_copilot_sdk import CopilotClient

def main():
    parser = argparse.ArgumentParser(
        description='Release notes generator'
    )
    parser.add_argument(
        '--from-tag', required=True
    )
    parser.add_argument(
        '--to-tag', default='HEAD'
    )
    parser.add_argument(
        '--format',
        choices=['markdown', 'text'],
        default='markdown'
    )
    args = parser.parse_args()

    client = CopilotClient()
```

</div>
<div>

```python
    prompt = f"""
    Generate release notes from
    {args.from_tag} to {args.to_tag}.

    Format as {args.format} with sections:
    - Features (new capabilities)
    - Fixes (bug fixes)
    - Breaking Changes (API changes)
    - Security Updates (CVEs)

    Explain customer value,
    not technical implementation.
    """

    response = client.chat(prompt)
    print(response.text)

if __name__ == '__main__':
    main()
```

**Usage:**
```bash
$ python release-notes.py \
    --from-tag v1.2.0 --to-tag v1.3.0
# ~10-15 seconds for full analysis
```

</div>
</div>

---

# Pattern 2: Web API with SDK

```python
from flask import Flask, request, jsonify
from github_copilot_sdk import CopilotClient

app = Flask(__name__)
client = CopilotClient(
    allowed_tools=['file_read'],  # Read-only for security
    working_directory='/tmp/pr-diffs'
)

@app.route('/api/analyze-pr', methods=['POST'])
def analyze_pr():
    pr_diff = request.json.get('diff')
    if not pr_diff:
        return jsonify({'error': 'Missing diff'}), 400

    prompt = f"""
    Review this PR diff for:
    - Security vulnerabilities (SQL injection, XSS, auth issues)
    - Logic errors and edge cases
    - Performance concerns (N+1 queries, unnecessary loops)
    - Code quality (readability, maintainability, test coverage)

    {pr_diff}
    """

    try:
        response = client.chat(prompt)
        return jsonify({'analysis': response.text, 'timestamp': response.timestamp})
    except Exception as e:
        return jsonify({'error': str(e)}), 500
```

---

# Pattern 3: Scheduled Automation

```python
import schedule, time, json
from github_copilot_sdk import CopilotClient

def analyze_test_failures():
    """Runs every morning to analyze overnight test failures"""
    client = CopilotClient()

    # Fetch latest test reports from CI system
    report = fetch_latest_test_report()  # External function

    prompt = f"""
    Analyze test failures from last 24 hours and identify:
    1. Root causes with confidence scores (high/medium/low)
    2. Flaky tests based on failure patterns
    3. Specific code locations to investigate
    4. Suggested fixes for each failure

    Test Report (JSON):
    {json.dumps(report, indent=2)}
    """

    analysis = client.chat(prompt)

    # Send to team Slack channel, create Jira tickets, etc.
    notify_team(analysis.text)
    create_jira_tickets(parse_issues(analysis.text))

# Schedule daily at 9:00 AM
schedule.every().day.at("09:00").do(analyze_test_failures)

print("Test analysis scheduler started...")
while True:
    schedule.run_pending()
    time.sleep(60)
```

---

# Pattern 4: Custom Agent Configuration

<div class="grid grid-cols-2 gap-6">
<div>

### Specialized Agent

```python
from github_copilot_sdk import CopilotClient

client = CopilotClient(
    agent_config={
        'name': 'release-engineer',
        'description': '''
            Specialized in release management
            and documentation
        ''',
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
```

</div>
<div>

```python
response = client.chat("""
Analyze commits from v1.5.0 to HEAD.
Generate release notes following our format:

- Categorize by Features, Fixes,
  Breaking Changes, Security
- Explain customer value for each change
- Highlight migration steps
  for breaking changes
""")

print(response.text)
```

### Benefits

- 🎯 **Domain expertise** - Agents specialized for tasks
- 🎯 **Tool constraints** - Limit what agents can access
- 🎯 **Skill composition** - Reusable capabilities
- 🎯 **Consistent behavior** - Same agent across requests

</div>
</div>

---
name: advanced-features
---

<div class="section-divider">
<h1>Advanced Features</h1>
<p>MCP, memory, and production patterns</p>
</div>

<style>
.section-divider {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-align: center;
}
.section-divider h1 {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;
}
.section-divider p {
  font-size: 1.5rem;
  opacity: 0.9;
}
</style>

---

# MCP Server Integration

<div class="grid grid-cols-2 gap-6">
<div>

### Extending SDK with MCP

```python
from github_copilot_sdk import CopilotClient

client = CopilotClient(
    mcp_servers=[
        {
            'name': 'jira-server',
            'command': 'mcp-jira',
            'env': {
                'JIRA_URL': 'company.atlassian.net',
                'JIRA_TOKEN': os.environ['JIRA_TOKEN']
            }
        },
        {
            'name': 'slack-server',
            'command': 'mcp-slack',
            'env': {
                'SLACK_TOKEN': os.environ['SLACK_TOKEN']
            }
        }
    ]
)
```

</div>
<div>

```python
# SDK can now interact with Jira and Slack
response = client.chat("""
Create a Jira ticket for the auth.py security issue,
assign to the security team,
and post a summary to #security-alerts
""")
```

### MCP Use Cases

- ✅ Access internal APIs (Jira, ServiceNow, Confluence)
- ✅ Query databases or data warehouses
- ✅ Integrate with monitoring (Datadog, Grafana)
- ✅ Connect to cloud services (AWS, Azure, GCP)

📖 See [MCP Apps tech talk](../mcp-apps/) for complete guide

</div>
</div>

---

# Persistent Memory

<div class="grid grid-cols-2 gap-6">
<div>

### Enable Memory Across Sessions

```python
from github_copilot_sdk import CopilotClient

client = CopilotClient(
    memory_enabled=True,
    memory_path='~/.copilot-sdk/memory'
)

# First session: Teach agent about your system
client.chat("""
Remember: Our API uses JWT tokens
with 1-hour expiry
""")

client.chat("""
Remember: Database queries must use
parameterized statements
""")
```

</div>
<div>

```python
# Later session (same client config)
# Agent recalls context
response = client.chat(
    "How does our API authenticate?"
)
# Response references JWT tokens from memory

response = client.chat(
    "Write a database query for user lookup"
)
# Response uses parameterized statements
```

### Memory Use Cases

- ✅ Team coding standards and conventions
- ✅ Architecture patterns and decisions
- ✅ Domain-specific terminology
- ✅ Common troubleshooting steps

</div>
</div>

---

# BYOK & Production Error Handling

<div class="grid grid-cols-2 gap-6">
<div>

### Bring Your Own Key

```python
from github_copilot_sdk import CopilotClient

client = CopilotClient(
    byok_config={
        'provider': 'openai',
        'api_key': 'sk-...',
        'model': 'gpt-4-turbo'
    }
)

# SDK routes requests to your OpenAI account
response = client.chat("Analyze this codebase")
```

**Supported providers:** OpenAI, Anthropic, Azure OpenAI, Custom endpoints

**When to use:**
- Higher rate limits than Copilot quota
- Direct cost control and billing visibility
- Specific model versions or providers

</div>
<div>

### Error Handling with Retries

```python
from github_copilot_sdk import (
    CopilotClient, SDKError
)
import time, logging

logger = logging.getLogger(__name__)

def chat_with_retry(
    client: CopilotClient,
    prompt: str,
    max_retries: int = 3
) -> str:
    for attempt in range(max_retries):
        try:
            response = client.chat(prompt)
            return response.text
        except SDKError as e:
            if attempt == max_retries - 1:
                logger.error(f"Failed: {e}")
                raise

            wait = 2 ** attempt  # 1s, 2s, 4s
            logger.warning(f"Retry in {wait}s")
            time.sleep(wait)
```

</div>
</div>

---

# Real-World Use Cases

<div class="grid grid-cols-2 gap-4">

<div class="use-case-card">
<div class="use-case-title">1. Release Engineering Automation</div>
<div class="use-case-before">❌ Before: 2+ hours reviewing 100-200 commits per release</div>
<div class="use-case-after">✨ After: 10 minutes with SDK-powered generator</div>
<div class="use-case-impact">📊 92% time reduction, consistent quality</div>
</div>

<div class="use-case-card">
<div class="use-case-title">2. Test Infrastructure Monitoring</div>
<div class="use-case-before">❌ Before: 45 minutes analyzing failed builds manually</div>
<div class="use-case-after">✨ After: 5 minutes with SDK test report analyzer</div>
<div class="use-case-impact">📊 60% reduction in CI blockage time</div>
</div>

<div class="use-case-card">
<div class="use-case-title">3. Code Quality Enforcement Bots</div>
<div class="use-case-before">❌ Before: 2-3 days waiting for senior engineer review</div>
<div class="use-case-after">✨ After: Instant pre-review bot analysis</div>
<div class="use-case-impact">📊 50% faster reviews, 2x PR throughput</div>
</div>

<div class="use-case-card">
<div class="use-case-title">4. Incident Response Automation</div>
<div class="use-case-before">❌ Before: 30+ minutes manual log correlation during incidents</div>
<div class="use-case-after">✨ After: SDK-powered incident analyzer with AI reasoning</div>
<div class="use-case-impact">📊 40% reduction in MTTR (Mean Time To Resolution)</div>
</div>

</div>

<style>
.use-case-card {
  padding: 1rem;
  background: linear-gradient(135deg, #667eea10 0%, #764ba210 100%);
  border-left: 3px solid #667eea;
  border-radius: 0.5rem;
}
.use-case-title {
  font-weight: 700;
  color: #667eea;
  margin-bottom: 0.5rem;
  font-size: 1rem;
}
.use-case-before {
  color: #ef4444;
  font-size: 0.85rem;
}
.use-case-after {
  color: #22c55e;
  font-size: 0.85rem;
}
.use-case-impact {
  color: #667eea;
  font-weight: 600;
  font-size: 0.85rem;
  margin-top: 0.3rem;
}
</style>

---

# What You Can Do Today

<div class="grid grid-cols-3 gap-4">

<div class="action-card immediate">
<div class="action-header">⚡ Immediate (15 min)</div>

- [ ] Install Copilot CLI and authenticate
- [ ] Install SDK: `pip install github-copilot-sdk`
- [ ] Run basic example: `client.chat("Hello")`

</div>

<div class="action-card short-term">
<div class="action-header">🚀 Short-Term (1 hour)</div>

- [ ] Identify one repetitive workflow (release notes, test analysis)
- [ ] Build basic CLI tool (Pattern 1)
- [ ] Test with real data from your repo

</div>

<div class="action-card advanced">
<div class="action-header">💎 Advanced (2-4 hours)</div>

- [ ] Implement error handling with retries
- [ ] Add MCP integration for internal tools
- [ ] Deploy as scheduled task or webhook
- [ ] Configure tool permissions for production

</div>

</div>

<div class="mt-6 p-4" style="background: #dbeafe; border-left: 4px solid #3b82f6; border-radius: 0.5rem;">
<strong>Next Steps:</strong>
<ol style="margin: 0.5rem 0 0 1.5rem; font-size: 0.9rem;">
<li>✅ Share your SDK tool with the team</li>
<li>📖 Review <a href="../mcp-apps/">MCP Apps</a> for extending capabilities</li>
<li>💬 Explore <a href="https://github.com/github/copilot-sdk">SDK Examples Repository</a></li>
<li>🚀 Scale: See <a href="../enterprise-patterns/">Enterprise Patterns</a></li>
</ol>
</div>

<style>
.action-card {
  padding: 1rem;
  border-radius: 0.5rem;
  font-size: 0.85rem;
}
.immediate {
  background: #dcfce7;
  border: 2px solid #22c55e;
}
.short-term {
  background: #dbeafe;
  border: 2px solid #3b82f6;
}
.advanced {
  background: #fce7f3;
  border: 2px solid #ec4899;
}
.action-header {
  font-weight: 700;
  font-size: 1rem;
  margin-bottom: 0.5rem;
}
</style>

---

# Related Patterns

<div class="grid grid-cols-2 gap-6">
<div>

### Complementary Features

<div class="related-card">
<strong>GitHub Copilot CLI</strong><br/>
Interactive terminal experience; SDK enables programmatic control of same runtime
</div>

<div class="related-card">
<strong>MCP Apps</strong><br/>
Extend SDK capabilities by connecting to internal systems and APIs
</div>

<div class="related-card">
<strong>Agentic SDLC</strong><br/>
Full repository automation; SDK is the building block for custom workflows
</div>

<div class="related-card">
<strong>Custom Agents</strong><br/>
Specialized agents for specific domains; SDK provides the runtime to host them
</div>

</div>
<div>

### If SDK Doesn't Fit

```
Q: What's your actual goal?

├─ Interactive terminal workflows
│  (Git, Docker, kubectl)
│  → See: Copilot CLI
│
├─ Code completion while editing
│  → See: Copilot in VS Code/IDE
│
├─ Embed AI in customer-facing apps
│  (non-developer products)
│  → Consider: OpenAI API, Anthropic API
│
└─ Full SDLC automation
   (issue → PR → merge)
   → See: Agentic SDLC + SDK
```

📖 [DECISION-GUIDE.md](../DECISION-GUIDE.md)

</div>
</div>

<style>
.related-card {
  padding: 1rem;
  background: linear-gradient(135deg, #667eea10 0%, #764ba210 100%);
  border-left: 3px solid #667eea;
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
}
</style>

---

# Official Documentation

<div class="grid grid-cols-2 gap-6">
<div>

### Primary Resources

**[GitHub Copilot SDK Repository](https://github.com/github/copilot-sdk)**  
Installation guides, API reference, language-specific examples

**[SDK Blog Announcement](https://github.blog/news-insights/company-news/build-an-agent-into-any-app-with-the-github-copilot-sdk/)**  
Technical preview announcement, use cases, architecture

**[Copilot CLI Documentation](https://docs.github.com/en/copilot/using-github-copilot/using-github-copilot-in-the-command-line)**  
Understanding the agent runtime that SDK wraps

### Additional Resources

**[Python SDK Cookbook](https://github.com/github/awesome-copilot/blob/main/cookbook/copilot-sdk/python/README.md)**  
Python-specific patterns and recipes

**[Getting Started Guide](https://github.com/github/copilot-sdk/blob/main/docs/getting-started.md)**  
Complete installation and setup walkthrough

</div>
<div>

**[SDK Custom Instructions](https://github.com/github/awesome-copilot/blob/main/collections/copilot-sdk.md)**  
Speed up SDK development with Copilot assistance

**[Copilot Requests Documentation](https://docs.github.com/en/copilot/concepts/billing/copilot-requests)**  
Billing, quotas, and usage tracking

### GitHub Resources

**[SDK Examples Repository](https://github.com/github/copilot-sdk)**  
Release automation, test analytics bot, code review assistant

**[GitHub Issues](https://github.com/github/copilot-sdk/issues)**  
Report bugs, request features, track development

</div>
</div>

---
layout: center
---

<div style="text-align: center;">

# ✅ You've Completed: GitHub Copilot SDK

<div style="font-size: 1.5rem; margin: 2rem 0; color: #667eea;">
Build AI-Powered Tools for Your Workflows
</div>

<div style="font-size: 1.1rem; color: #64748b; margin: 2rem 0;">
<strong>Key Takeaway:</strong> Embed Copilot's production-tested agent runtime in any application. Install SDK in Python/TypeScript/Go/.NET, write 10 lines of code, and automate AI workflows.
</div>

<div style="margin-top: 2rem; padding: 1.5rem; background: linear-gradient(135deg, #667eea15 0%, #764ba215 100%); border-radius: 0.5rem; display: inline-block;">
<div style="font-weight: 600; margin-bottom: 0.5rem;">Start building today:</div>
<div style="font-size: 0.9rem;">
📖 <a href="https://github.com/github/copilot-sdk">github.com/github/copilot-sdk</a><br/>
💬 Install: <code>pip install github-copilot-sdk</code><br/>
🚀 Next: Review MCP Apps and Enterprise Patterns
</div>
</div>

</div>
