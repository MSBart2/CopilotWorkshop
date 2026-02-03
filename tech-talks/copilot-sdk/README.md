# Copilot SDK: Building Custom AI Tools

## 🔧 — Embed Copilot's Engine in Your Applications

> *"We've used Copilot in VS Code and the terminal. What if we could embed that same intelligence in our own custom tools?"*  
> — Sarah, exploring SDK possibilities

---

## 📖 What This Module Is About

This is a **standalone/bonus module** — separate from the main workshop sequence. It explores the **GitHub Copilot SDK** (Technical Preview, January 2026), which lets you embed Copilot's agentic workflows directly into your own Python applications.

**Key Difference:**
- **Module 9 (CLI):** Use Copilot in the terminal for DevOps workflows
- **This Module (SDK):** Embed Copilot's engine in custom applications to build domain-specific AI tools

The SDK exposes the same production-tested agent runtime that powers GitHub Copilot CLI — planning, tool invocation, file edits, multi-turn conversations — as a programmable layer you can integrate into any application.

---

⚠️ **Prerequisites**: 
- Complete [Module 9: GitHub Copilot CLI](../../workshop/09-copilot-cli/README.md) for context on Copilot's agentic capabilities
- Python 3.8+ installed
- GitHub Copilot subscription (SDK uses same billing model as CLI)
- Basic understanding of Python development

---

## 🧠 Mindful Moment: From Consumer to Creator

**Traditional thinking:** *"I use Copilot in my IDE and terminal. That's where AI lives."*

**SDK thinking:** *"I can embed Copilot's intelligence in tools tailored to my exact workflow — release note generators, test analyzers, code review bots, deployment dashboards. AI becomes infrastructure, not just an assistant."*

This isn't about replacing VS Code or CLI — it's about extending Copilot into domain-specific tools that solve problems unique to your team.

---

## 💭 Why This Matters

**Rafael (Product Visionary):** "Release notes used to take 2 hours of reviewing commits and writing customer-friendly summaries. Now the SDK tool generates them in 10 minutes with better customer value framing than I wrote manually. Product launches went from 'scramble for docs' to 'docs ready before code merges.' That's 110 hours saved per year just for release notes."

**Elena (Quality Champion):** "Test failure analysis was 45 minutes of grep and guesswork per failed build. The SDK analyzer identifies flaky tests automatically, cross-references previous failures, and suggests fixes with 85% accuracy. Build failures that used to block teams for hours now get diagnosed in 5 minutes. Failed builds: 3-4 per week × 40 min saved = 2.6 hours back weekly."

**Sarah (Skeptical Senior):** "I was the code review bottleneck — 30 minutes per PR, couldn't review more than 8 per day. The SDK bot pre-reviews against our standards, catches 90% of pattern violations before I even look. My review time went to 15 minutes focusing on architecture, not formatting. Team throughput doubled: from 8 PRs/day to 16 PRs/day. That's not automation for automation's sake — that's removing the human bottleneck without sacrificing quality."

---

## 💡 **Understanding the GitHub Copilot SDK**

The **GitHub Copilot SDK** (Technical Preview) allows you to take the same Copilot agentic core that powers GitHub Copilot CLI and embed it in any application.

### Architecture

```
Your Python Application
       ↓
  SDK Client (github-copilot-sdk)
       ↓ JSON-RPC
  Copilot CLI (server mode)
       ↓
  GitHub Copilot Service
```

The SDK manages the CLI process lifecycle automatically. You write Python code, the SDK handles communication with Copilot's agent runtime.

### What You Get

**Same capabilities as Copilot CLI:**
- ✅ Planning and multi-turn execution loops
- ✅ Tool invocation (file operations, shell commands, Git operations)
- ✅ Multiple AI models (GPT, Claude, etc.)
- ✅ Custom agents, skills, and tools
- ✅ MCP server integration
- ✅ Persistent memory across sessions
- ✅ Real-time streaming responses
- ✅ GitHub authentication

**Plus programmatic control:**
- 🎯 Embed in any Python application
- 🎯 Build custom GUIs, CLIs, bots, dashboards
- 🎯 Integrate with existing workflows and systems
- 🎯 Create domain-specific AI tools

### When to Use SDK vs CLI vs IDE

| Capability | VS Code/IDE | Copilot CLI | Copilot SDK |
|------------|-------------|-------------|-------------|
| **Code completion while editing** | ✅ Best | ❌ | ❌ |
| **Terminal automation (Git, Docker, etc.)** | ❌ | ✅ Best | ⚠️ Can build |
| **Interactive debugging sessions** | ⚠️ Limited | ✅ Best | ⚠️ Can build |
| **Custom tools for your team** | ❌ | ❌ | ✅ Best |
| **Embed AI in existing applications** | ❌ | ❌ | ✅ Best |
| **Build bots, dashboards, automation** | ❌ | ❌ | ✅ Best |
| **GUI-based AI workflows** | ❌ | ❌ | ✅ Best |

**Use SDK when:** You want to build custom AI-powered tools tailored to your team's specific workflows that go beyond what IDE/CLI provide out of the box.

---

## 📚 Key Concepts

### SDK vs CLI: What's the Difference?

**GitHub Copilot CLI:**
- Interactive terminal experience
- You type prompts, Copilot responds
- Built-in commands (`/review`, `/plan`, etc.)
- Great for one-off tasks and interactive workflows

**GitHub Copilot SDK:**
- Programmatic Python interface
- Your code controls Copilot
- Build custom tools and applications
- Great for automation, bots, and domain-specific tools

**Example:**
```python
# CLI: Interactive session
$ copilot
> "Generate release notes from last 10 commits"

# SDK: Programmatic control
from github_copilot_sdk import CopilotClient

client = CopilotClient()
response = client.chat("Generate release notes from last 10 commits")
print(response)
```

### What the SDK Enables

**1. Custom AI Tools**
- Build release note generators, test analyzers, code review bots
- Create domain-specific assistants for your team's workflows
- Integrate AI into existing internal tools

**2. Application Integration**
- Embed Copilot in Slack bots, web dashboards, desktop apps
- Add AI capabilities to CI/CD pipelines
- Create custom GUIs for AI-powered workflows

**3. Workflow Automation**
- Automate repetitive tasks with AI assistance
- Build intelligent monitoring and alerting systems
- Create self-service tools for non-developers

### Technical Preview Status

⚠️ **Important:** The SDK is currently in **Technical Preview**:
- Functional and usable for development and testing
- May not be suitable for production use yet
- APIs may change as the SDK evolves
- Report issues at [github.com/github/copilot-sdk/issues](https://github.com/github/copilot-sdk/issues)

---

## What You'll Build

In this module, you'll create **3 practical Python tools** using the Copilot SDK:

**Time:** ~45 minutes | **Exercises:** 3

---

## 📋 Exercise Planning

Each exercise solves a real problem the FanHub team faces, demonstrating how the SDK enables custom tools that wouldn't be possible with IDE/CLI alone.

| # | Exercise | Lead | Support | Problem | Solution | Key Metrics | Artifacts |
|---|----------|------|---------|---------|----------|-------------|-----------|
| [SDK.1](exercise-sdk.1.md) | Release Notes Generator | Rafael ⭐ | Sarah 🤝 | 2+ hours manually creating release notes from git history, inconsistent format | Python script auto-generates customer-facing release notes using SDK | 2 hours → 10 min generation, consistent formatting, customer value included | `release-notes-generator.py` |
| [SDK.2](exercise-sdk.2.md) | Test Report Analyzer | Elena ⭐ | Marcus 🤝 | 45 min manually reviewing test failures, no pattern detection, missed flaky tests | Python tool analyzes test reports, identifies flakiness patterns, suggests fixes | 45 min → 5 min analysis, automatic flaky test detection, 85% fix accuracy | `test-analyzer.py` |
| [SDK.3](exercise-sdk.3.md) | Code Review Assistant Bot | Sarah ⭐ | David 🤝, Elena 🤝 | Sarah can't scale reviews across 12 team members, 30 min per PR, repeats same feedback | Bot pre-reviews PRs against team standards before human review | 30 → 15 min review time, 90% pattern violation detection, team throughput doubled | `code-review-bot.py` |

---

## 📚 What This Feature Does

**GitHub Copilot SDK:** Embeds the same production-tested agent runtime that powers GitHub Copilot CLI into your Python applications. Enables building custom AI tools, bots, dashboards, and automation that leverage Copilot's planning, tool invocation, and multi-turn execution capabilities.

**When to use it:** When you need to build domain-specific AI tools tailored to your team's workflows, integrate AI into existing applications, or create custom automation that goes beyond what IDE/CLI provide.

**What you'll build:**
- **Release notes generator** — Auto-generate customer-facing docs from git history
- **Test report analyzer** — Identify flaky tests and suggest fixes automatically
- **Code review assistant bot** — Pre-review PRs against team standards

**Official Documentation:**
- 📖 [GitHub Copilot SDK Repository](https://github.com/github/copilot-sdk) — Installation, API reference, examples
- 📖 [SDK Blog Announcement](https://github.blog/news-insights/company-news/build-an-agent-into-any-app-with-the-github-copilot-sdk/) — Overview and use cases
- 📖 [Python SDK Cookbook](https://github.com/github/awesome-copilot/blob/main/cookbook/copilot-sdk/python/README.md) — Python-specific examples and patterns
- 📖 [Getting Started Guide](https://github.com/github/copilot-sdk/blob/main/docs/getting-started.md) — Complete walkthrough
- 📖 [SDK Custom Instructions](https://github.com/github/awesome-copilot/blob/main/collections/copilot-sdk.md) — Speed up SDK development with Copilot

> 💡 **Important for this module:** The SDK requires Copilot CLI to be installed separately. The SDK communicates with CLI in server mode via JSON-RPC. Billing is based on the same premium request quota model as Copilot CLI.

---

## ➡️ What's Next

After completing this module, you'll understand how to:
- ✅ Embed Copilot's agentic capabilities in Python applications
- ✅ Build custom AI tools tailored to your team's workflows
- ✅ Integrate AI into existing systems (bots, dashboards, automation)
- ✅ Choose the right tool (IDE, CLI, or SDK) for each use case

**Explore more SDKs:**
- **TypeScript/Node.js:** `npm install @github/copilot-sdk`
- **Go:** `go get github.com/github/copilot-sdk/go`
- **.NET:** `dotnet add package GitHub.Copilot.SDK`

See the [SDK repository](https://github.com/github/copilot-sdk) for language-specific documentation.

---

## 📌 Practices Used

| Practice | How It Applied in This Module |
|----------|-------------------------------|
| 🔧 **Programmatic AI** | Embed Copilot's agent runtime in custom Python applications |
| 🎯 **Domain-specific tools** | Build AI-powered tools tailored to exact team workflows |
| 🤖 **Automation at scale** | Create bots and automation that leverage AI planning and execution |

---

## 🎭 Behind the Scenes

*For those who want to understand the deeper mechanics:*

### How the SDK Works

1. **SDK Client Initialization:** Your Python code imports `github_copilot_sdk` and creates a client
2. **CLI Server Mode:** SDK automatically spawns Copilot CLI in server mode (or connects to external server)
3. **JSON-RPC Communication:** SDK sends requests to CLI via JSON-RPC protocol
4. **Agent Execution:** CLI's agent runtime handles planning, tool invocation, multi-turn execution
5. **Response Streaming:** Results stream back to your Python application in real-time

### Tool Permissions

By default, the SDK operates CLI in the equivalent of `--allow-all` mode:
- All first-party tools enabled (file operations, Git, shell commands, web requests)
- You can customize tool availability in SDK client configuration
- Important for security: review which tools your application needs

### Billing Model

SDK usage counts toward your **GitHub Copilot premium request quota**:
- Same billing as Copilot CLI
- Each prompt counts as a premium request
- See [Copilot Requests documentation](https://docs.github.com/en/copilot/concepts/billing/copilot-requests) for details

### BYOK Support

The SDK supports **Bring Your Own Key (BYOK)**:
- Configure SDK to use your own API keys from LLM providers (OpenAI, Azure, Anthropic)
- Access models through your own provider accounts
- Refer to SDK documentation for BYOK configuration

**Key Takeaway:** The SDK removes the complexity of building agent orchestration from scratch. You focus on your application logic, Copilot handles planning, tool execution, and multi-turn workflows.

---

## 🆘 FAQ

**Q: Do I need a GitHub Copilot subscription?**  
A: Yes, a GitHub Copilot subscription is required. The SDK uses the same billing model as Copilot CLI. See [GitHub Copilot pricing](https://github.com/features/copilot#pricing).

**Q: Do I need to install Copilot CLI separately?**  
A: Yes, the SDK communicates with Copilot CLI in server mode. Install CLI first: [Installation guide](https://docs.github.com/en/copilot/how-tos/set-up/install-copilot-cli)

**Q: Can I use custom agents and skills with the SDK?**  
A: Yes! The SDK allows you to define custom agents, skills, and tools. You can extend functionality by implementing your own logic and integrating additional tools.

**Q: What models are supported?**  
A: All models available via Copilot CLI are supported. The SDK exposes a method to get available models at runtime.

**Q: Is the SDK production-ready?**  
A: The SDK is currently in **Technical Preview**. While functional for development and testing, it may not be suitable for production use yet.

**Q: How do I report issues or request features?**  
A: Use the [GitHub Issues page](https://github.com/github/copilot-sdk/issues) to report bugs or request features.

---
