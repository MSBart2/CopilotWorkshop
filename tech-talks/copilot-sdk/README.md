---
status: active
updated: 2026-02-06
section: "Context & Customization"
---

# GitHub Copilot SDK: Build AI-Powered Tools for Your Workflows

> **The Question This Talk Answers:**
> *"How do I embed Copilot's agentic capabilities directly into my own applications and workflows?"*

**Duration:** 45 minutes | **Target Audience:** Developers / DevOps / Platform Engineers

---

## 📊 Content Fitness

| Criterion | Assessment | Notes |
|-----------|-----------|-------|
| **Relevant** | 🟢 High | Solves the "programmatic AI" gap — teams need custom automation beyond what IDE/CLI provide interactively |
| **Compelling** | 🟢 High | Production-tested agent runtime as a library; bypass months of building planning loops and tool orchestration |
| **Actionable** | 🟢 High | Install SDK in Python/TypeScript/Go/.NET, write 10 lines of code, and embed Copilot agents in any application |

**Overall Status:** 🟢 Ready to use

---

## 📽️ Slide Generation Mapping

### Slide Sequence (Generated Automatically)

1. **Title/Logo Slide** ← H1 title + subtitle
2. **Question/Objective Slide** ← "The Question This Talk Answers"
3. **Table of Contents Slide** ← Auto-generated from 🎬 sections
4. **Problem Slide** ← "The Problem"
5. **Solution Overview** ← "The Solution"
6. **Key Artifacts** ← "Key Artifacts" inventory
7. **Mental Model Shift** ← Move-Toward/Away/Against
8. **When to Use Decision Tree** ← "When to Use This Pattern"
9. **Architecture & Capabilities** ← 🎬 Section 1 (2-3 slides)
10. **Getting Started** ← 🎬 Section 2 (2-3 slides)
11. **Integration Patterns** ← 🎬 Section 3 (3-4 slides)
12. **Advanced Features** ← 🎬 Section 4 (2-3 slides)
13. **Use Cases** ← Real-World Use Cases (1-2 slides)
14. **Actionable Outcomes** ← What You Can Do Today
15. **Related Patterns** ← Related Patterns
16. **Official Documentation** ← 📚 section
17. **End Slide** ← Auto-generated

### Major Sections (TOC Entries)

```markdown
<!-- 🎬 MAJOR SECTION: Architecture & Capabilities -->
<!-- 🎬 MAJOR SECTION: Getting Started -->
<!-- 🎬 MAJOR SECTION: Integration Patterns -->
<!-- 🎬 MAJOR SECTION: Advanced Features -->
```

---

## The Problem

### Key Points

- **General-purpose AI doesn't fit custom workflows**
  Copilot excels at code completion (IDE) and terminal automation (CLI), but release notes generation, test report analysis, and custom automation require programmatic control.

- **Building agentic systems from scratch takes months**
  Context management, tool orchestration, multi-turn conversations, model routing, MCP integration, and error handling require building an entire AI platform before solving your actual problem.

- **Interactive tools don't scale to automation**
  Manually running Copilot commands for repetitive analysis (test failures, log correlation, duplicate detection) wastes developer time and doesn't integrate with existing systems.

- **Domain-specific workflows need domain-specific tools**
  Release engineering, code quality bots, incident response analyzers, and custom dashboards need AI embedded as infrastructure, not as a separate assistant.

### Narrative

You've heard about GitHub Copilot transforming development. Your team uses it daily for code completion in VS Code and terminal automation via Copilot CLI. But there's a gap.

Your release manager still spends 2 hours manually reviewing git commits to write customer-facing release notes. Your test infrastructure team manually analyzes failure patterns across builds, taking 45 minutes per failed CI run. Your code review process bottlenecks when senior engineers spend 30 minutes per PR checking standards that could be automated. Your incident response team manually correlates logs across services, taking 30+ minutes while customers are impacted.

These workflows need AI, but they don't fit the IDE or CLI patterns. They need **programmatic control** — code that calls Copilot's agentic capabilities on demand, integrates with existing systems, and runs automatically without human intervention.

Building this from scratch means months of work: context management across turns, tool orchestration, multi-turn execution loops, model routing, error handling, and safety boundaries. You're building an AI platform before you solve your actual problem.

**The GitHub Copilot SDK solves this.** It exposes the same production-tested agent runtime that powers Copilot CLI as a programmable library you can embed in any application. Instead of building an agentic platform, you import a package and start building your actual automation.

---

## The Solution: GitHub Copilot SDK

### What It Does

The GitHub Copilot SDK (Technical Preview, January 2026) provides a programmable interface to Copilot's production-tested agent runtime. Import the SDK in Python, TypeScript, Go, or .NET, and you get the full agentic execution loop — planning, tool invocation, multi-turn conversations, MCP servers, custom agents — ready to embed in any application.

### Key Capabilities

- **Full Agent Runtime**: Planning, tool orchestration, multi-turn execution, and context management from Copilot CLI, accessible programmatically
- **Multi-Language Support**: Python, TypeScript/Node.js, Go, and .NET SDKs with consistent APIs
- **Production-Ready Features**: Model routing, streaming responses, persistent memory, GitHub authentication, MCP server integration, BYOK (Bring Your Own Key)
- **Tool Permission Control**: Configure which tools agents can use (file operations, shell commands, Git operations) and restrict working directories for security

### Architecture Overview

The SDK communicates with Copilot CLI running in server mode via JSON-RPC over stdio. When you create a `CopilotClient`, the SDK spawns (or connects to) the CLI process, manages the communication protocol, and streams results back to your application. This architecture means you get all of CLI's capabilities without rebuilding the agent runtime, and GitHub handles authentication, model management, and updates automatically.

The separation is intentional: Copilot CLI is the agent runtime (planning, tools, memory), and the SDK is how you programmatically control that runtime from any application. Your code defines prompts and constraints, the SDK routes requests to CLI, and agents execute with the same reliability as interactive CLI sessions.

**Official Documentation:**
- 📖 [GitHub Copilot SDK Repository](https://github.com/github/copilot-sdk) — Installation, API reference, and language-specific examples
- 📖 [SDK Blog Announcement](https://github.blog/news-insights/company-news/build-an-agent-into-any-app-with-the-github-copilot-sdk/) — Technical preview announcement and use cases
- 📖 [Copilot CLI Documentation](https://docs.github.com/en/copilot/using-github-copilot/using-github-copilot-in-the-command-line) — Understanding the agent runtime

---

## 📷 Visual Assets

*This tech talk currently has no visual assets. If relevant diagrams, architecture flows, or screenshots exist in official documentation, they can be added to an `images/` subdirectory.*

**Recommended additions (if available):**
- Architecture diagram showing SDK → CLI → Service communication flow
- Screenshot of SDK code example with streaming output
- Comparison diagram: Interactive CLI vs Programmatic SDK

---

## 📦 Key Artifacts

**This talk includes complete, working code examples** demonstrating SDK integration patterns across different use cases. Primary artifacts are shown inline in major sections below.

### Primary Artifacts

*Shown inline with detailed explanation in the major sections*

- **Basic SDK Client** — Initialize SDK, send prompts, receive responses (shown in Getting Started)
- **Streaming Response Handler** — Process real-time agent output (shown in Getting Started)
- **CLI Tool with SDK Backend** — Command-line tool powered by SDK (shown in Integration Patterns)
- **Web API with SDK** — REST API endpoint using SDK for AI workflows (shown in Integration Patterns)
- **Scheduled Automation** — Periodic task automation with SDK (shown in Integration Patterns)
- **Custom Agent Configuration** — SDK with specialized agent and skill setup (shown in Advanced Features)
- **MCP Server Integration** — Extending SDK with Model Context Protocol servers (shown in Advanced Features)
- **Error Handling with Retries** — Production-ready error handling patterns (shown in Advanced Features)

### Supporting Files

*Referenced but not shown inline — available in SDK repository*

- **[SDK Examples Repository](https://github.com/github/copilot-sdk)** — Release automation, test analysis, code review bots
- **[Python SDK Cookbook](https://github.com/github/awesome-copilot/blob/main/cookbook/copilot-sdk/python/README.md)** — Python-specific patterns and recipes
- **[Getting Started Guide](https://github.com/github/copilot-sdk/blob/main/docs/getting-started.md)** — Complete installation and setup walkthrough

---

## 🎯 Mental Model Shift

> **The Core Insight:** From "using Copilot tools" to "building with the Copilot engine"

### Move Toward (Embrace These Patterns)

- ✅ **Programmatic AI Control**: Embed agents in applications and automation → AI becomes infrastructure, not a separate tool
- ✅ **Domain-Specific Tools**: Build focused tools for your workflows (release notes, test analysis, review bots) → 80% faster than general-purpose solutions
- ✅ **SDK + CLI Complementarity**: Use CLI for interactive work, SDK for automation → Right tool for each context
- ✅ **Production Patterns**: Error handling, retries, tool permissions, sandboxing → Reliable automation at scale

### Move Away From (Retire These Habits)

- ⚠️ **Manual Repetitive Analysis**: Running Copilot commands manually for recurring tasks (test failures, log analysis) → Doesn't scale, wastes developer time
- ⚠️ **Building Agentic Systems from Scratch**: Writing your own planning loops, tool orchestration, context management → Months of work before solving the actual problem
- ⚠️ **Copy-Paste Integration**: Manually copying CLI output into other systems → Error-prone, breaks automation chains

### Move Against (Active Resistance Required)

- 🛑 **Unrestricted Tool Permissions**: Running SDK with all tools enabled in untrusted contexts → Security risk, uncontrolled file access and command execution
- 🛑 **Synchronous Blocking**: Waiting for agents without streaming or async handling → Poor UX, timeouts, wasted resources
- 🛑 **Zero Error Handling**: Assuming agents always succeed without retries or fallbacks → Production failures when API limits hit or network issues occur

> **Example Transformation:** Before: Release manager spends 2 hours reviewing 200 commits, categorizing changes, writing customer-facing summaries, and formatting release notes. After: SDK-powered tool analyzes commits in 10 minutes, generates categorized release notes (Features, Fixes, Breaking Changes), and outputs markdown ready for GitHub releases. Savings: 2 hours → 10 minutes per release, 92% time reduction.

---

## When to Use This Pattern

### Decision Tree

```
Q: What are you trying to build?
├─ "Interactive terminal workflows (Git, Docker, debugging)"
│  → Use: Copilot CLI directly
│  └─ Best for: Ad-hoc tasks, exploration, interactive sessions
│
├─ "Code completion and inline suggestions while editing"
│  → Use: Copilot in VS Code/IDE
│  └─ Best for: Writing and refactoring code
│
├─ "Custom tools, bots, or automation with domain-specific logic"
│  → Use: Copilot SDK (this talk)
│  └─ Best for: Release automation, test analysis, review bots, dashboards
│
└─ "Embed AI in existing applications or build custom GUIs"
   → Use: Copilot SDK (this talk)
   └─ Best for: Web apps, internal tools, scheduled automation
```

### Use This Pattern When

- You need to automate workflows that require AI reasoning (release notes, test analysis, code review)
- You want to embed Copilot capabilities in existing applications or systems
- You're building custom developer tools, bots, or dashboards
- You need programmatic control over prompts, context, and tool permissions
- Your workflow requires integration with external systems (Jira, Slack, monitoring tools)

### Don't Use This Pattern When

- You need interactive terminal assistance → Use **Copilot CLI** directly
- You need code completion while editing → Use **Copilot in VS Code/IDE**
- Your task is one-off exploration → Use **CLI or IDE** for faster iteration
- You're building a non-developer-facing product → Consider OpenAI API or other general LLM SDKs instead

### Comparison with Related Features

| Aspect | Copilot SDK (This Talk) | Copilot CLI | Copilot in VS Code |
|--------|-------------------------|-------------|-------------------|
| **Best For** | Automation, custom tools, bots | Interactive terminal workflows | Code completion while editing |
| **Control Model** | Programmatic API calls | Interactive commands | Inline suggestions + chat |
| **Integration** | Embed in any application | Terminal-based | IDE-based |
| **Setup Time** | 15-30 minutes (install + code) | 5 minutes (install + auth) | 2 minutes (extension install) |
| **Use Case** | Release automation, test analysis bots | Git workflows, Docker commands | Writing and refactoring code |

---

<!-- 🎬 MAJOR SECTION: Architecture & Capabilities -->
## How the SDK Works

### Architecture Components

The SDK provides a language-specific interface to Copilot's agent runtime through a clean separation of concerns:

```
Your Application (Python/TypeScript/Go/.NET)
       ↓ API calls
  SDK Client (github-copilot-sdk)
       ↓ JSON-RPC over stdio
  Copilot CLI (server mode)
       ↓ API requests
  GitHub Copilot Service
```

**Component responsibilities:**

1. **Your Application**: Defines prompts, constraints, and business logic; consumes agent responses
2. **SDK Client**: Manages CLI process lifecycle, handles JSON-RPC communication, provides streaming APIs
3. **Copilot CLI (Server Mode)**: Executes agent runtime (planning, tools, memory), same engine as interactive CLI
4. **GitHub Copilot Service**: Model inference, authentication, rate limiting, model routing

### SDK Capabilities

All features from Copilot CLI are available programmatically:

**Core Agent Features:**
- ✅ Planning and multi-turn execution loops
- ✅ Tool invocation (file operations, shell commands, Git operations)
- ✅ Multiple AI models (GPT-4, Claude, etc.)
- ✅ Custom agents, skills, and tools
- ✅ MCP (Model Context Protocol) server integration
- ✅ Persistent memory across sessions
- ✅ Real-time streaming responses
- ✅ GitHub authentication

**SDK-Specific Advantages:**
- 🎯 Embed in any application (web, desktop, CLI, bots)
- 🎯 Programmatic control over prompts and context
- 🎯 Integration with existing systems (Jira, Slack, monitoring tools)
- 🎯 Tool permission control and sandboxing
- 🎯 Error handling, retries, and observability

### Tool Permissions and Security

By default, SDK operates CLI in permissive mode with most tools enabled. For production use, configure permissions explicitly:

```python
from github_copilot_sdk import CopilotClient

client = CopilotClient(
    allowed_tools=['file_read', 'git_log'],  # Restrict to read-only operations
    working_directory='/path/to/safe/dir'     # Limit file access scope
)
```

**Security considerations:**
- Review which tools your application needs (file operations, shell commands, Git operations, web requests)
- Use `allowed_tools` to create least-privilege configurations
- Run SDK in containerized environments for untrusted inputs
- Validate AI-generated code before execution in production contexts

### Billing and Resource Consumption

SDK usage counts toward your **GitHub Copilot premium request quota**:

- Same billing model as Copilot CLI
- Each prompt counts as a premium request (multi-turn conversations count as individual requests per turn)
- Streaming responses don't count as multiple requests
- BYOK (Bring Your Own Key) supported for using your own LLM API keys

See [Copilot Requests documentation](https://docs.github.com/en/copilot/concepts/billing/copilot-requests) for quota details and usage tracking.

---

<!-- 🎬 MAJOR SECTION: Getting Started -->
## Installing and Using the SDK

### Prerequisites

Before using the SDK, install and authenticate Copilot CLI:

```bash
# Install Copilot CLI (platform-specific steps)
# See: https://docs.github.com/en/copilot/using-github-copilot/using-github-copilot-in-the-command-line

# Verify installation
copilot --version

# Authenticate with GitHub
copilot auth login
```

You also need:
- Python 3.8+ (or TypeScript/Node.js 18+, Go 1.20+, .NET 6.0+)
- GitHub Copilot subscription
- Internet connection for Copilot API access

### Installation

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

### Basic Usage Example

**Python SDK:**

```python
from github_copilot_sdk import CopilotClient

# Initialize client (spawns CLI in server mode automatically)
client = CopilotClient()

# Simple chat interaction
response = client.chat("Explain the difference between OAuth and JWT")
print(response.text)

# Multi-turn conversation
conversation = client.start_conversation()
conversation.send("I have a Python function that's running slowly")
response1 = conversation.get_response()
print(response1.text)

conversation.send("Here's the code: [paste code]")
response2 = conversation.get_response()
print(response2.text)
```

**TypeScript SDK:**

```typescript
import { CopilotClient } from "@github/copilot-sdk";

const client = new CopilotClient();
await client.start();

const session = await client.createSession({
    model: "gpt-4",
});

await session.send({ prompt: "Generate a README for this project" });
const response = await session.getResponse();
console.log(response.text);
```

### Streaming Responses

Process agent output in real-time:

```python
from github_copilot_sdk import CopilotClient

client = CopilotClient()

# Stream response chunks as they arrive
for chunk in client.chat_stream("Analyze this repository and suggest improvements"):
    print(chunk.text, end='', flush=True)
```

**Why streaming matters:**
- Better UX for long-running agent tasks (user sees progress)
- Lower perceived latency (first tokens arrive quickly)
- Early error detection (can cancel if agent goes off-track)

---

<!-- 🎬 MAJOR SECTION: Integration Patterns -->
## Building Tools with the SDK

### Pattern 1: CLI Tool with SDK Backend

Build command-line tools powered by Copilot agents:

```python
#!/usr/bin/env python3
import argparse
from github_copilot_sdk import CopilotClient

def main():
    parser = argparse.ArgumentParser(description='Release notes generator')
    parser.add_argument('--from-tag', required=True, help='Starting git tag')
    parser.add_argument('--to-tag', default='HEAD', help='Ending git tag')
    parser.add_argument('--format', choices=['markdown', 'text'], default='markdown')
    args = parser.parse_args()

    client = CopilotClient()

    prompt = f"""
    Generate release notes from {args.from_tag} to {args.to_tag}.
    Format as {args.format} with sections:
    - Features (customer-facing new capabilities)
    - Fixes (bug fixes with user impact)
    - Breaking Changes (API changes requiring migration)
    - Security Updates (CVEs and security fixes)

    For each item, explain customer value, not technical implementation.
    """

    response = client.chat(prompt)
    print(response.text)

if __name__ == '__main__':
    main()
```

**Usage:**
```bash
$ python release-notes.py --from-tag v1.2.0 --to-tag v1.3.0
# Copilot analyzes commits and generates notes in ~10-15 seconds
```

### Pattern 2: Web API with SDK

Expose SDK capabilities via REST API:

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
    - Security vulnerabilities (SQL injection, XSS, authentication issues)
    - Logic errors and edge cases
    - Performance concerns (N+1 queries, unnecessary loops)
    - Code quality (readability, maintainability, test coverage)

    Provide actionable feedback with specific line numbers:

    {pr_diff}
    """

    try:
        response = client.chat(prompt)
        return jsonify({
            'analysis': response.text,
            'timestamp': response.timestamp
        })
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
```

**Usage:**
```bash
$ curl -X POST http://localhost:5000/api/analyze-pr \
  -H "Content-Type: application/json" \
  -d '{"diff": "diff --git a/auth.py..."}'
```

### Pattern 3: Scheduled Automation

Run SDK-powered analysis on a schedule:

```python
import schedule
import time
import json
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

### Pattern 4: Custom Agent Configuration

Configure SDK with specialized agents and skills:

```python
from github_copilot_sdk import CopilotClient

client = CopilotClient(
    agent_config={
        'name': 'release-engineer',
        'description': 'Specialized in release management and documentation',
        'skills': ['git-analysis', 'changelog-generation'],
        'tools': ['git_log', 'file_read', 'file_write']
    }
)

response = client.chat("""
Analyze commits from v1.5.0 to HEAD.
Generate release notes following our standard format:
- Categorize by Features, Fixes, Breaking Changes, Security
- Explain customer value for each change
- Highlight migration steps for breaking changes
""")

print(response.text)
```

---

<!-- 🎬 MAJOR SECTION: Advanced Features -->
## Advanced SDK Capabilities

### MCP Server Integration

Extend SDK capabilities with Model Context Protocol servers:

```python
from github_copilot_sdk import CopilotClient

client = CopilotClient(
    mcp_servers=[
        {
            'name': 'jira-server',
            'command': 'mcp-jira',
            'env': {
                'JIRA_URL': 'https://company.atlassian.net',
                'JIRA_TOKEN': os.environ['JIRA_TOKEN']
            }
        },
        {
            'name': 'slack-server',
            'command': 'mcp-slack',
            'env': {'SLACK_TOKEN': os.environ['SLACK_TOKEN']}
        }
    ]
)

# SDK can now interact with Jira and Slack
response = client.chat("""
Create a Jira ticket for the auth.py security issue,
assign to the security team, and post a summary to #security-alerts
""")
```

**Use cases for MCP:**
- Access internal APIs (Jira, ServiceNow, Confluence)
- Query databases or data warehouses
- Integrate with monitoring tools (Datadog, Grafana)
- Connect to cloud services (AWS, Azure, GCP)

See [MCP Apps tech talk](../mcp-apps/) for complete guide.

### Persistent Memory

Enable memory across SDK sessions:

```python
from github_copilot_sdk import CopilotClient

client = CopilotClient(
    memory_enabled=True,
    memory_path='~/.copilot-sdk/memory'
)

# First session: Teach agent about your system
client.chat("Remember: Our API uses JWT tokens with 1-hour expiry")
client.chat("Remember: Database queries must use parameterized statements")

# Later session (same client config): Agent recalls context
response = client.chat("How does our API authenticate?")
# Response will reference JWT tokens from memory

response = client.chat("Write a database query for user lookup")
# Response will use parameterized statements based on stored context
```

**Memory use cases:**
- Team coding standards and conventions
- Architecture patterns and decisions
- Domain-specific terminology
- Common troubleshooting steps

### BYOK (Bring Your Own Key)

Use your own LLM provider API keys:

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

**Supported providers:**
- OpenAI (GPT-4, GPT-3.5)
- Anthropic (Claude 3/4)
- Azure OpenAI
- Custom endpoints (OpenAI-compatible APIs)

**When to use BYOK:**
- Need higher rate limits than Copilot quota provides
- Want direct cost control and billing visibility
- Prefer specific model versions or providers
- Testing unreleased models

### Production-Ready Error Handling

Implement retries with exponential backoff:

```python
from github_copilot_sdk import CopilotClient, SDKError
import time
import logging

logger = logging.getLogger(__name__)

def chat_with_retry(client: CopilotClient, prompt: str, max_retries: int = 3) -> str:
    """Execute SDK request with exponential backoff retry logic"""
    for attempt in range(max_retries):
        try:
            response = client.chat(prompt)
            return response.text
        except SDKError as e:
            if attempt == max_retries - 1:
                logger.error(f"SDK request failed after {max_retries} attempts: {e}")
                raise

            wait_time = 2 ** attempt  # Exponential backoff: 1s, 2s, 4s
            logger.warning(f"Attempt {attempt + 1} failed: {e}. Retrying in {wait_time}s...")
            time.sleep(wait_time)

# Usage
client = CopilotClient()
try:
    result = chat_with_retry(client, "Analyze this repository")
    process_result(result)
except SDKError as e:
    handle_fatal_error(e)
```

**Error scenarios to handle:**
- Rate limiting (HTTP 429)
- Network timeouts
- Invalid API keys
- CLI process crashes
- Model unavailability

---

## Real-World Use Cases

### Use Case 1: Release Engineering Automation

---

## Real-World Use Cases

### Use Case 1: Release Engineering Automation

**The Problem:** Release notes require reviewing 100-200 commits, understanding customer impact, and translating technical changes into user-facing language. Manual process takes 2+ hours per release and quality varies by author.

**The Solution:** SDK-powered release notes generator that analyzes git commit history, identifies customer-facing changes, and generates categorized release notes automatically.

**Implementation:**

```python
from github_copilot_sdk import CopilotClient
import subprocess

def generate_release_notes(from_tag: str, to_tag: str = 'HEAD') -> str:
    # Get commit history
    commits = subprocess.check_output(
        ['git', 'log', f'{from_tag}..{to_tag}', '--pretty=format:%H|%s|%b'],
        text=True
    )

    client = CopilotClient()
    response = client.chat(f"""
    Analyze these commits and generate customer-facing release notes.
    Categorize as:
    - **Features**: New capabilities users can leverage
    - **Fixes**: Bug fixes with user impact
    - **Breaking Changes**: API changes requiring migration
    - **Security Updates**: CVEs and security improvements

    For each item:
    - Explain customer value, not technical implementation
    - Include issue references if present
    - Highlight migration steps for breaking changes

    Commits:
    {commits}

    Format as markdown ready for GitHub releases.
    """)

    return response.text

# Generate and save
notes = generate_release_notes('v1.2.0', 'v1.3.0')
with open('RELEASE_NOTES.md', 'w') as f:
    f.write(notes)
```

**Outcome:** 2+ hours → 10 minutes. Consistent quality every release. Release managers focus on strategy instead of git archaeology.

---

### Use Case 2: Intelligent Test Infrastructure Monitoring

**The Problem:** Test failures require manual analysis of logs, stack traces, and historical patterns. Flaky tests go undetected until multiple failures, blocking PRs and wasting CI time. Average analysis time: 45 minutes per failed build.

**The Solution:** SDK-powered test report analyzer that parses test output, identifies failure patterns, detects flaky tests, and suggests specific fixes based on error messages and code context.

**Implementation:**

```python
import json
from github_copilot_sdk import CopilotClient
from pathlib import Path

def analyze_test_report(report_path: Path) -> dict:
    with open(report_path) as f:
        report = json.load(f)

    client = CopilotClient()
    response = client.chat(f"""
    Analyze this test report and provide:

    1. **Root Causes** (with confidence scores: high/medium/low)
       - Actual cause, not just symptom
       - Affected component/module

    2. **Flaky Test Detection**
       - Tests with intermittent failures
       - Error pattern analysis (timeout? race condition? external dependency?)

    3. **Investigation Targets**
       - Specific file paths and line numbers
       - Related tests that might be affected

    4. **Suggested Fixes**
       - Concrete code changes or configuration adjustments
       - Priority order (quick wins first)

    Test Report:
    {json.dumps(report, indent=2)}
    """)

    return {
        'analysis': response.text,
        'failed_count': report['stats']['failed'],
        'timestamp': report['timestamp']
    }

# Usage
analysis = analyze_test_report(Path('test-results/junit.xml'))
post_to_slack(analysis)
create_jira_tickets_for_high_confidence_issues(analysis)
```

**Outcome:** 45 minutes → 5 minutes per failed build. Flaky tests caught on first failure (not third). 60% reduction in CI blockage time.

---

### Use Case 3: Code Quality Enforcement Bots

**The Problem:** Code reviews bottleneck on senior engineers checking coding standards, architecture patterns, and common mistakes. Junior developers wait 2-3 days for feedback on basic issues that could be caught automatically.

**The Solution:** Pre-review bot that analyzes PR diffs before human review, checks team-specific standards, identifies common mistakes, and posts inline comments via GitHub API.

**Implementation:**

```python
from github_copilot_sdk import CopilotClient
import requests

def review_pr(repo: str, pr_number: int, github_token: str):
    # Fetch PR diff
    pr_url = f'https://api.github.com/repos/{repo}/pulls/{pr_number}'
    headers = {
        'Accept': 'application/vnd.github.v3.diff',
        'Authorization': f'token {github_token}'
    }
    pr_diff = requests.get(pr_url, headers=headers).text

    client = CopilotClient()
    response = client.chat(f"""
    Review this code against our standards:

    **Security:**
    - All database queries must use parameterized statements (SQL injection risk)
    - User input must be validated (XSS, injection attacks)
    - Authentication required on all API endpoints

    **Error Handling:**
    - Async functions must have try/catch blocks
    - Network requests must have timeout and retry logic
    - User-facing errors must include actionable messages

    **Testing:**
    - New features require unit tests (minimum 80% coverage)
    - API changes require integration tests
    - Breaking changes require migration tests

    **Performance:**
    - Database queries in loops (N+1 problem)
    - Missing pagination on list endpoints
    - Unnecessary synchronous operations in async contexts

    For each issue found:
    - Line number or file path
    - Severity (blocking / should-fix / suggestion)
    - Specific suggestion with code example

    PR Diff:
    {pr_diff}
    """)

    # Parse response and post GitHub comments
    issues = parse_review_issues(response.text)
    for issue in issues:
        if issue['severity'] == 'blocking':
            post_github_review_comment(repo, pr_number, issue, github_token)

# Usage (in CI or webhook handler)
review_pr('myorg/myrepo', 1234, os.environ['GITHUB_TOKEN'])
```

**Outcome:** Review time cut by 50%. PR throughput doubled. Senior engineers focus on architecture and design, not standards enforcement. Junior developers get instant feedback.

---

### Use Case 4: Incident Response Automation

**The Problem:** Production incidents require analyzing logs across multiple services, correlating errors, and identifying root causes under time pressure. Manual triage takes 30+ minutes while customers are impacted, and misdiagnosis extends outages.

**The Solution:** SDK-powered incident analyzer that ingests logs from multiple sources, correlates errors using AI reasoning, suggests probable root causes with confidence scores, and recommends immediate mitigation steps.

**Implementation:**

```python
from github_copilot_sdk import CopilotClient
import json

def analyze_incident(logs: dict) -> dict:
    """
    logs: {
        'app': [...],
        'database': [...],
        'nginx': [...],
        'metrics': {...}
    }
    """
    client = CopilotClient()

    response = client.chat(f"""
    Production incident analysis - prioritize speed and accuracy.

    Analyze logs from multiple sources and provide:

    1. **Root Cause** (with confidence: high/medium/low)
       - Most likely cause based on error correlation
       - Alternative hypotheses if confidence < high

    2. **Impact Assessment**
       - Affected services and endpoints
       - Customer impact (partial degradation / full outage)
       - Data integrity concerns (if any)

    3. **Immediate Mitigation Steps**
       - Command to run or config to change
       - Expected outcome of each step
       - Rollback procedure if mitigation fails

    4. **Investigation Steps**
       - Specific log queries to run next
       - Metrics to check for confirmation
       - Code paths to investigate

    Logs:
    {json.dumps(logs, indent=2)}
    """)

    return {
        'analysis': response.text,
        'timestamp': time.time(),
        'log_sources': list(logs.keys())
    }

# Usage (called by monitoring alert webhook)
incident_data = fetch_logs_from_last_15_minutes()
analysis = analyze_incident(incident_data)
post_to_incident_channel(analysis)
trigger_mitigation_runbook_if_high_confidence(analysis)
```

**Outcome:** Mean time to resolution (MTTR) reduced by 40%. Faster root cause identification. Fewer escalations. Incident responders work with AI assistant, not alone.

---

### Use Case 5: Documentation Generation from Code

**The Problem:** API documentation gets out of sync with code. Architecture diagrams are manually created and rarely updated. Onboarding docs require constant maintenance as codebase evolves.

**The Solution:** SDK-powered documentation generator that analyzes codebase structure, generates API reference docs, creates architecture diagrams, and produces onboarding guides tailored to different roles.

**Implementation:**

```python
from github_copilot_sdk import CopilotClient
from pathlib import Path

def generate_api_docs(src_dir: Path) -> str:
    # Collect all API files
    api_files = list(src_dir.glob('**/*_api.py'))

    code_content = {}
    for file in api_files:
        code_content[str(file)] = file.read_text()

    client = CopilotClient()
    response = client.chat(f"""
    Generate comprehensive API documentation from this codebase.

    For each endpoint:
    - HTTP method and path
    - Request parameters (query, body, headers)
    - Response format with example
    - Authentication requirements
    - Error codes and meanings
    - Rate limiting

    Also include:
    - Overview of API architecture
    - Authentication flow diagram (markdown)
    - Common usage patterns with code examples
    - Troubleshooting guide

    Source Code:
    {json.dumps(code_content, indent=2)}
    """)

    return response.text

# Generate and save
docs = generate_api_docs(Path('src/api'))
Path('docs/API_REFERENCE.md').write_text(docs)
```

**Outcome:** Always-current documentation. New developers onboard 50% faster. Reduced support tickets. API changes automatically reflected in docs.

---

## ✅ What You Can Do Today

**Immediate Actions (15 minutes):**
- [ ] Install Copilot CLI and authenticate: `copilot auth login`
- [ ] Install SDK for your language: `pip install github-copilot-sdk` (Python)
- [ ] Run the basic example: Create a simple script that calls `client.chat("Hello")` and prints the response

**Short-Term Implementation (1 hour):**
- [ ] Identify one repetitive analysis workflow (release notes, test failures, log analysis)
- [ ] Build a basic CLI tool using Pattern 1 (CLI Tool with SDK Backend)
- [ ] Test with real data from your repository or CI system

**Advanced Exploration (2-4 hours):**
- [ ] Implement error handling with retries (see Production-Ready Error Handling section)
- [ ] Add MCP server integration for your internal tools (Jira, Slack, monitoring)
- [ ] Deploy as scheduled task or webhook handler in your CI/CD pipeline
- [ ] Configure tool permissions and sandboxing for production security

**Next Steps After Completion:**
1. ✅ Share your SDK tool with the team and gather feedback
2. 📖 Review related talk: [MCP Apps](../mcp-apps/) for extending SDK capabilities
3. 💬 Explore examples: [SDK Repository Examples](https://github.com/github/copilot-sdk)
4. 🚀 Scale to organization: See [Enterprise Patterns](../enterprise-patterns/) for multi-team deployment

---

## Related Patterns

### Complementary Features

- **[GitHub Copilot CLI](../copilot-cli/)** — Interactive terminal experience; SDK enables programmatic control of the same runtime
- **[MCP Apps](../mcp-apps/)** — Extend SDK capabilities by connecting to internal systems and APIs
- **[Agentic SDLC](../agentic-sdlc/)** — Full repository automation; SDK is the building block for custom agent workflows
- **[Custom Agents](../agent-teams/)** — Specialized agents for specific domains; SDK provides the runtime to host them

### Decision Flow

**If SDK doesn't fit your needs:**

```
Q: What's your actual goal?
├─ "Interactive terminal workflows (Git, Docker, kubectl)"
│  → See: Copilot CLI (interactive mode, not SDK)
│
├─ "Code completion while editing files"
│  → See: Copilot in VS Code/IDE (not SDK)
│
├─ "Embed AI in non-developer products (customer-facing apps)"
│  → Consider: OpenAI API, Anthropic API (general LLM SDKs)
│
└─ "Full SDLC automation (issue → PR → merge)"
   → See: Agentic SDLC + SDK combination
```

See [DECISION-GUIDE.md](../DECISION-GUIDE.md) for complete navigation help.

---

## 📚 Official Documentation

**Primary Documentation:**
- 📖 **[GitHub Copilot SDK Repository](https://github.com/github/copilot-sdk)** — Installation guides, API reference, language-specific examples
- 📖 **[SDK Blog Announcement](https://github.blog/news-insights/company-news/build-an-agent-into-any-app-with-the-github-copilot-sdk/)** — Technical preview announcement, use cases, and architecture overview
- 📖 **[Copilot CLI Documentation](https://docs.github.com/en/copilot/using-github-copilot/using-github-copilot-in-the-command-line)** — Understanding the agent runtime that SDK wraps

**Additional Resources:**
- 🎓 **[Python SDK Cookbook](https://github.com/github/awesome-copilot/blob/main/cookbook/copilot-sdk/python/README.md)** — Python-specific patterns and recipes
- 🎓 **[Getting Started Guide](https://github.com/github/copilot-sdk/blob/main/docs/getting-started.md)** — Complete installation and setup walkthrough
- 🔧 **[SDK Custom Instructions](https://github.com/github/awesome-copilot/blob/main/collections/copilot-sdk.md)** — Speed up SDK development with Copilot assistance
- 📋 **[Copilot Requests Documentation](https://docs.github.com/en/copilot/concepts/billing/copilot-requests)** — Understanding billing, quotas, and usage tracking

**GitHub Resources:**
- 🐙 **[SDK Examples Repository](https://github.com/github/copilot-sdk)** — Release automation toolkit, test analytics bot, code review assistant
- 📋 **[GitHub Issues](https://github.com/github/copilot-sdk/issues)** — Report bugs, request features, track SDK development

---

## 🎭 Behind the Scenes

*For those who want to understand the deeper mechanics*

### How SDK Manages CLI Lifecycle

The SDK handles three lifecycle scenarios automatically:

1. **Spawn Mode (default)**: SDK spawns a new CLI process when `CopilotClient()` is initialized, communicates via stdio, and terminates the process on client close.

2. **Connect Mode**: SDK connects to an already-running CLI server (useful for long-lived daemons or shared CLI instances across multiple SDK clients).

3. **Subprocess Management**: SDK monitors CLI health, restarts on crashes, handles graceful shutdown, and cleans up resources.

**Why This Matters:** You never manage CLI processes manually. SDK abstracts the complexity, but understanding the model helps debug issues (e.g., "why is CLI process not terminating?").

### JSON-RPC Protocol Details

SDK and CLI communicate using JSON-RPC 2.0 over stdio:

**Request Example:**
```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "chat",
  "params": {
    "prompt": "Explain OAuth",
    "model": "gpt-4",
    "stream": true
  }
}
```

**Response Example (streaming):**
```json
{"jsonrpc": "2.0", "id": 1, "result": {"chunk": "OAuth is..."}}
{"jsonrpc": "2.0", "id": 1, "result": {"chunk": " a protocol..."}}
{"jsonrpc": "2.0", "id": 1, "result": {"done": true}}
```

**Why This Matters:** Understanding the protocol helps with advanced use cases like custom transport layers, logging/observability, or debugging SDK-CLI communication issues.

### Model Selection and Routing

SDK supports multiple model selection strategies:

- **Explicit**: Specify model per request (`model='gpt-4'`)
- **Default**: Use account default model (set in Copilot settings)
- **Fallback**: Automatically try alternative models on failure
- **BYOK**: Route to custom providers (OpenAI, Anthropic, Azure)

**Model routing flow:**
```
SDK Request → CLI → Copilot Service → Model API
                   ↓ (if BYOK)
                   → Your API Key → Model API
```

**Why This Matters:** Helps optimize cost vs. quality tradeoffs and understand why certain requests use specific models.
