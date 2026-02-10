---
status: active
updated: 2026-02-10
section: "Copilot Surfaces"
---

# GitHub Copilot CLI: Terminal-Native AI for DevOps Automation

> **The Question This Talk Answers:**
> *"How do I get Copilot assistance without leaving the terminal?"*

**Duration:** 45 minutes | **Target Audience:** DevOps Engineers / Infrastructure Teams / CLI Power Users

---

## 📊 Content Fitness

| Criterion | Assessment | Notes |
|-----------|-----------|-------|
| **Relevant** | 🟢 High | DevOps, infrastructure, and automation workflows happen in terminals — context-switching to IDE/web breaks flow |
| **Compelling** | 🟢 High | Plan Mode transforms debugging from 8 attempts to 2; Docker troubleshooting drops from 45 min to 8 min |
| **Actionable** | 🟢 High | Install in 2 minutes, immediately usable for problem-solving, programmatic mode enables CI/CD automation |

**Overall Status:** 🟢 Ready to use

---

## 📽️ Slide Generation Mapping

### Slide Sequence (Generated Automatically)

1. **Title/Logo Slide** ← H1 title + subtitle
2. **Question/Objective Slide** ← "The Question This Talk Answers"
3. **Table of Contents Slide** ← Auto-generated from 🎬 sections
4. **Problem Slide** ← "The Problem"
5. **Solution Overview** ← "The Solution"
6. **Key Artifacts** ← Primary artifacts inventory
7. **Mental Model Shift** ← Move-Toward/Away/Against
8. **When to Use Decision Tree** ← "When to Use This Pattern"
9. **Plan Mode & Real-Time Steering** ← 🎬 Section 1 (3-4 slides)
10. **Operating Modes & Delegation** ← 🎬 Section 2 (3-4 slides)
11. **Context Management & Memory** ← 🎬 Section 3 (2-3 slides)
12. **Built-in Specialized Agents** ← 🎬 Section 4 (2-3 slides)
13. **Use Cases** ← Real-World Use Cases (2-3 slides)
14. **Actionable Outcomes** ← What You Can Do Today
15. **Related Patterns** ← Related Patterns
16. **Official Documentation** ← 📚 section
17. **End Slide** ← Auto-generated

### Major Sections (TOC Entries)

```markdown
<!-- 🎬 MAJOR SECTION: Plan Mode & Steering -->
<!-- 🎬 MAJOR SECTION: Operating Modes -->
<!-- 🎬 MAJOR SECTION: Context Management -->
<!-- 🎬 MAJOR SECTION: Built-in Agents -->
```

---

## The Problem

### Key Points

- **Terminal-centric workflows**
  DevOps, infrastructure, and system administration happen at the command line — not in IDEs

- **Manual investigation overhead**
  Debugging Docker containers, analyzing logs, troubleshooting deployments take 45+ minutes of manual work

- **Automation without understanding**
  Traditional CLI tools execute predefined commands without adapting to context or learning from failures

- **Context switching breaks flow**
  Moving between terminal and IDE/web for AI assistance costs 5-10 minutes per switch, disrupts concentration

### Narrative

Modern infrastructure lives in terminals—Docker orchestration, Kubernetes deployments, CI/CD pipelines, log analysis. Engineers spend hours manually investigating failures: parsing stack traces, checking configuration files, verifying environment variables, searching documentation. Traditional automation tools execute fixed scripts without contextual understanding—they can't adapt when unexpected errors occur or learn from past debugging sessions.

When problems arise, developers face a dilemma: continue manual investigation in the terminal (slow, error-prone), or context-switch to IDE or web for AI assistance (breaks flow, requires explaining context again). Neither option is optimal. What's needed is conversational AI that lives in the terminal, understands infrastructure context, and can both solve problems interactively and automate workflows programmatically.

---

## The Solution: GitHub Copilot CLI

### What It Does

GitHub Copilot CLI brings conversational AI directly into terminal workflows with two operating modes: interactive sessions for collaborative problem-solving and programmatic execution for CI/CD automation. Plan Mode enables collaborative planning before code generation, reducing debugging cycles from 8 attempts to 2.

### Key Capabilities

- **Plan Mode**: Collaborative planning with clarifying questions before implementation — catch misunderstandings early, reduce iteration cycles
- **Configurable Reasoning Models**: Choose GPT-5.2-Codex and tune reasoning effort (low → extra high), with Ctrl+T to reveal reasoning steps
- **Interactive Mode**: Terminal-native conversations with context maintained across commands — perfect for "figure this out" scenarios
- **Programmatic Mode**: Single-command execution for scripts and pipelines — designed for headless CI/CD automation
- **Cloud Delegation**: Background execution frees terminal for other work — delegate large tasks with `&` prefix
- **Built-in Agents**: Specialized agents (Explore, Task, Plan, Code-review) automatically handle common patterns
- **Automatic Context Management**: Auto-compaction at 95% token limit enables virtually infinite sessions
- **Repository Memory**: AI remembers team conventions, patterns, and preferences across sessions
- **Performance & UX Upgrades**: Faster, more concise responses with improved diff/timeline views and better Windows/PowerShell support
- **MCP Registry Integration**: Discover and connect external tools/agents via GitHub MCP Registry with organization-level controls

### Architecture Overview

Copilot CLI operates as a terminal-native agent with three modes optimized for different workflows. **Interactive mode** enables conversational sessions where you ask questions, Copilot responds, and context persists across operations — ideal for debugging complex issues with unknown root causes. **Plan Mode** (toggle with Shift+Tab) transforms interaction into collaborative planning: Copilot asks clarifying questions, builds structured implementation plans, and generates code only after you approve the approach. **Programmatic mode** enables single-command execution designed for CI/CD pipelines, producing structured output for scripts to parse.

The architecture includes specialized built-in agents that Copilot automatically delegates to based on your request: Explore agent for fast codebase analysis, Task agent for command execution with smart output filtering, Plan agent for multi-step dependency analysis, and Code-review agent for high-signal issue detection. All modes support **cloud delegation** via `&` prefix — work moves to GitHub's coding agent running in the cloud, freeing your terminal for other tasks.

Context management is automatic: when conversations approach 95% of token limit, background compaction prunes redundant information while maintaining important context. Repository memory stores learned facts about your codebase across sessions, building institutional knowledge over time.

**Official Documentation:**
- 📖 [About GitHub Copilot CLI](https://docs.github.com/en/copilot/concepts/agents/about-copilot-cli) — Core concepts and capabilities
- 📖 [Using GitHub Copilot CLI](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/use-copilot-cli) — Command syntax, options, and workflows
- 📖 [Installing GitHub Copilot CLI](https://docs.github.com/en/copilot/how-tos/set-up/install-copilot-cli) — Setup instructions for all platforms

---

## 📽️ Visual Assets

*This talk does not include extracted diagrams from source documentation. Visual content will be generated during slide creation using styled HTML components for architecture diagrams and workflow illustrations.*

**Potential visual assets to generate:**
- Interactive vs Programmatic mode comparison diagram
- Plan Mode workflow sequence
- Context management lifecycle (auto-compaction visualization)
- Built-in agent specialization matrix

---

## 📦 Key Artifacts

**Primary Artifacts** — *Shown inline in major sections with detailed explanation*

- **Interactive debugging session** — Terminal conversation demonstrating Plan Mode for Docker debugging
- **Programmatic CI/CD automation** — GitHub Actions workflow using `copilot -p` for build failure analysis
- **Context management commands** — `/compact`, `/context`, `/usage` for monitoring token usage
- **Cloud delegation example** — Using `&` prefix for background codebase analysis
- **Reasoning configuration** — Selecting GPT-5.2-Codex and tuning reasoning effort for depth vs speed

### Supporting Files

*Available in documentation references*

- **[Custom instructions guide](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/use-copilot-cli#use-custom-instructions)** — Repository-specific behavior configuration
- **[MCP server setup](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/use-copilot-cli#add-an-mcp-server)** — Extending functionality with external tools
- **[Configure an MCP registry](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-mcp-usage/configure-mcp-registry)** — Organization-wide discovery and governance for MCP tools
- **[Built-in agents reference](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/use-copilot-cli#use-custom-agents)** — Explore, Task, Plan, Code-review agent details

---

## 🎯 Mental Model Shift

> **The Core Insight:** From "execute commands manually and search docs when stuck" to "collaborate with AI in the terminal for planning, execution, and learning"

### Move Toward (Embrace These Patterns)

- ✅ **Collaborative Planning Before Coding**: Use Plan Mode to ask clarifying questions and approve strategy before implementation → Reduces debugging cycles from 8 attempts to 2
- ✅ **Terminal as Collaboration Space**: Keep infrastructure work in the terminal with conversational AI → Eliminates context-switching overhead (5-10 min per switch)
- ✅ **Programmatic AI for Automation**: Use `copilot -p` in CI/CD pipelines for intelligent build failure analysis → 25 min → 5 min investigation time
- ✅ **Cloud Delegation for Parallel Work**: Prefix prompts with `&` to delegate large tasks to background agents → Terminal stays free while agents work
- ✅ **Repository Memory Accumulation**: Let AI learn and remember team conventions across sessions → Future interactions leverage institutional knowledge automatically

### Move Away From (Retire These Habits)

- ⚠️ **Immediate Code Generation**: Jumping straight to implementation without clarifying requirements → Leads to 6-8 iteration cycles when 2 would suffice with planning
- ⚠️ **Context-Switching to IDE for AI Help**: Leaving terminal to use IDE Copilot for infrastructure questions → Breaks flow, requires re-explaining context (5-10 min cost per switch)
- ⚠️ **Manual Log Parsing and Documentation Search**: Reading stack traces and searching docs manually for 45+ minutes → Automated analysis with Copilot CLI completes in 8 minutes
- ⚠️ **Fixed Automation Scripts**: Writing brittle shell scripts that can't adapt to context → Programmatic Copilot CLI understands failures and suggests fixes dynamically

### Move Against (Active Resistance Required)

- 🛑 **Using Interactive Mode in CI/CD**: Running interactive `copilot` sessions in automated pipelines → Use programmatic mode (`copilot -p`) designed for headless operation
- 🛑 **Over-Approving Permissions in Production**: Using `--yolo` flag in production environments without understanding scope → Maintain security boundaries; use targeted `--allow-tool` for specific commands only
- 🛑 **Ignoring Repository Memory**: Starting every session from scratch without leveraging learned conventions → Wastes time re-explaining patterns that AI could remember across sessions

> **Example Transformation:** Before: Docker container won't start, spend 45 minutes manually checking logs → configuration files → environment variables → network settings → try 8 different fixes. After: `copilot` → "Debug why backend container won't start" → Copilot asks clarifying questions (Plan Mode), you collaborate on investigation strategy, AI analyzes logs and config, identifies misconfigured port binding in 8 minutes with 2 targeted fixes. **Savings: 37 minutes, 6 fewer failed attempts.**

---

## When to Use This Pattern

### Decision Tree

```
Q: What's your primary workflow environment?
├─ "Terminal/CLI for infrastructure & DevOps"
│  → Use: Copilot CLI (this talk)
│  └─ Best for: Docker debugging, CI/CD automation, log analysis, infrastructure operations
│
├─ "IDE for application development"
│  → Use: VS Code Copilot or IDE extensions
│  └─ Best for: Code completion, in-editor assistance, rapid development
│
├─ "Web for cross-repository analysis & PR review"
│  → Use: github.com/copilot
│  └─ Best for: Multi-repo context, architectural planning, stakeholder collaboration
│
└─ "Need AI across all interfaces"
   → Combine: All three interfaces
   └─ Repository instructions, agents, and memory work identically everywhere
```

### Use This Pattern When

- DevOps and infrastructure work happens primarily in terminals
- Debugging complex issues where root cause is unknown (Docker, networking, deployments)
- Automating CI/CD build failure analysis and triage
- Need intelligent command execution without leaving terminal flow
- Want AI to remember team conventions and patterns over time
- Building automation that adapts to context (not fixed scripts)

### Don't Use This Pattern When

- Primary workflow is code editing in IDE → Use VS Code Copilot (in-editor assistance)
- Need cross-repository architectural analysis → Use Copilot Web (multi-repo context)
- Want graphical debugging with breakpoints → Use IDE tools
- Workflow is already optimized and doesn't involve terminals → No benefit to CLI-specific features

### Comparison with Related Features

| Aspect | Copilot CLI | VS Code Copilot | Copilot Web |
|--------|-------------|-----------------|-------------|
| **Best For** | Terminal workflows, infrastructure | Code editing, rapid development | Cross-repo analysis, PR review |
| **Strengths** | Plan Mode, programmatic automation, terminal-native | Inline suggestions, edits in context | Multi-repo queries, architectural context |
| **Limitations** | No graphical UI, requires terminal comfort | IDE-bound, not for infrastructure | No local file operations |
| **Setup Time** | 2 minutes (install + auth) | Built into VS Code | Zero (web browser) |

---

<!-- 🎬 MAJOR SECTION: Plan Mode & Steering -->
## Plan Mode: Collaborative Planning Before Implementation

*Transform debugging from trial-and-error to collaborative strategy*

### The Fundamental Shift

**Traditional workflow:**
Request → AI generates solution → You review and fix → Repeat (8 attempts average)

**Plan Mode workflow:**
Request → AI asks clarifying questions → Collaborate on plan → Review plan → Generate implementation (2 attempts average)

### How It Works

Press **Shift+Tab** to toggle Plan Mode on/off. In Plan Mode, Copilot uses the `ask_user` tool to ask clarifying questions before any code is written:

- **"Should I check docker-compose config, logs, or both?"**
- **"Do you want environment variable analysis included?"**
- **"Start with network configuration or service dependencies?"**

This collaborative planning clarifies requirements and scope before implementation begins, catching misunderstandings when they're cheapest to fix — before any code is written.

### Real-Time Steering

While Copilot is thinking, you can steer the conversation:

**Enqueue additional messages:**
Send follow-up instructions to adjust direction mid-response:
```bash
# While Copilot analyzes Docker logs:
> "Also check if Redis is running"
> "Focus on authentication-related errors first"
```

**Inline feedback on rejection:**
Reject tool permissions and explain why in one step:
```bash
# Copilot wants to run `rm -rf tmp/*`
> [Press Esc] "Don't delete tmp/ — it has cached artifacts we need"
```
Copilot adapts approach without stopping entirely.

### Example: Docker Debugging with Plan Mode

```bash
$ copilot
> "Debug why the backend container won't start"

🤔 Copilot (Plan Mode):
I can help with that. Before I start, a few questions:

1. Should I check docker-compose configuration, container logs, or both?
2. Do you want environment variable analysis?
3. Any recent changes to services or network configuration?

> "Start with logs, then check config if needed"

🤔 Copilot:
Understood. Here's my plan:
1. Retrieve container logs for backend service
2. Analyze error patterns and stack traces
3. If logs suggest config issue, inspect docker-compose.yml
4. Check environment variables if authentication/connection errors found

Proceed with this plan? (y/n)

> y

✅ Copilot:
[Executes plan, finds misconfigured port binding in docker-compose.yml]
Found: Port 5000 mapped to 5001, but app expects 5000 internally.
Fix: Change service.ports from "5001:5000" to "5000:5000"

Apply this fix? (y/n)
```

**Outcome:** Root cause identified in 8 minutes with 2 targeted checks (vs 45 minutes with 8 trial-and-error attempts manually).

### Advanced Reasoning Models

**GPT-5.2-Codex** optimized for code generation is available with configurable reasoning effort:

- **Low**: Fast responses for straightforward queries
- **Medium**: Balanced speed and depth (default)
- **High**: Extended reasoning for complex problems
- **Extra High**: Maximum depth for critical architectural decisions

**Toggle reasoning visibility:**
Press **Ctrl+T** to show/hide the model's thought process. Setting persists across sessions — useful for understanding how Copilot approaches complex problems and learning optimal prompting patterns.

**When to use High/Extra High reasoning:**
- Architectural refactoring decisions
- Multi-service debugging with unknown root cause
- Critical security or performance investigations

---

<!-- 🎬 MAJOR SECTION: Operating Modes -->
## Interactive Mode vs Programmatic Mode vs Cloud Delegation

*Choose the right mode for the task — collaborative debugging, headless automation, or background execution*

### Two Core Operating Modes

#### Interactive Mode (`copilot`)

**Purpose:** Conversational sessions for iterative problem-solving

```bash
$ copilot
> "Analyze the last 100 lines of application logs"
> "What's causing the memory spike?"
> "List all environment variables related to database connections"
```

**Characteristics:**
- Maintains context across commands and file operations
- Ideal for debugging with unknown root causes
- Perfect for "figure this out collaboratively" scenarios
- Supports Plan Mode, real-time steering, and clarifying questions

**Best for:**
- Complex Docker networking issues
- Multi-service failures requiring investigation
- Configuration problems across multiple files
- Learning unfamiliar codebases or architectures

#### Programmatic Mode (`copilot -p`)

**Purpose:** Single-command execution for scripts and CI/CD pipelines

```bash
# In GitHub Actions workflow
- name: Analyze build failure
  if: failure()
  run: |
    copilot -p "Analyze build failure and suggest fixes" \
      --allow-tool 'shell(gh)' \
      --allow-tool 'shell(git)' \
      > analysis.txt
```

**Characteristics:**
- Designed for headless, non-interactive operation
- Produces structured output for script parsing
- Combined with approval options (`--allow-tool`, `--allow-all-tools`)
- No conversation history — stateless execution

**Best for:**
- CI/CD build failure analysis
- Automated test result interpretation
- Deployment validation checks in pipelines
- Scripted operations without human interaction

### Cloud Delegation with `&` Prefix

**Purpose:** Background execution frees terminal for other work

```bash
$ copilot
> "&Analyze entire codebase for security vulnerabilities"

✅ Copilot:
Task delegated to GitHub Copilot coding agent in the cloud.
I'll commit any unstaged changes and create a new branch.

Agent session: https://github.com/owner/repo/agent/session/abc123
Pull request will be created when analysis completes.

[Your terminal is now free for other work]
```

**Characteristics:**
- Work moves to GitHub's coding agent running in cloud
- Terminal stays free for local development
- Notifications when background work completes
- Ideal for comprehensive codebase analysis or large-scale refactoring

**Use cases:**
- Codebase-wide security audits (20+ minutes)
- Large refactoring across 50+ files
- Documentation generation from entire service
- Test scaffolding for multiple modules simultaneously

### Permission Management

**Session-level approvals:**
"Approve for session" auto-approves pending parallel requests of same type:
```bash
# First file edit request:
> [Approve for session]
# All subsequent file edits in this session: auto-approved
```

**Convenience flags** (use carefully in trusted environments):
```bash
copilot --allow-all-tools  # All permissions enabled
copilot --yolo              # Maximum autonomy (alias for --allow-all)
```

**Inline feedback on rejection:**
```bash
# AI wants to delete a file:
[Esc] "No, don't edit that file — it's auto-generated from schema"
# AI adapts without stopping
```

### Example: CI/CD Build Failure Automation

```yaml
# .github/workflows/build.yml
name: Build and Analyze

on: [push, pull_request]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Build application
        run: npm run build

      - name: Analyze failure with Copilot CLI
        if: failure()
        env:
          GITHUB_TOKEN: ${{ secrets.COPILOT_GITHUB_TOKEN }}
        run: |
          npm install -g @github/copilot
          copilot -p "Analyze the build failure. \
            Check recent commits, dependencies, and error patterns. \
            Suggest specific fixes." \
            --allow-tool 'shell(gh)' \
            --allow-tool 'shell(git)' \
            > failure-analysis.txt

      - name: Post analysis as comment
        if: failure()
        run: |
          gh pr comment ${{ github.event.pull_request.number }} \
            --body-file failure-analysis.txt
```

**Impact:** Investigation time drops from 25 minutes (manual) to 5 minutes (automated). Pattern recognition across historical failures. Zero human intervention for known failure types.

---

<!-- 🎬 MAJOR SECTION: Context Management -->
## Automatic Context Management and Repository Memory

*Virtually infinite sessions with cross-session learning*

### Infinite Sessions via Auto-Compaction

**The problem:** Traditional AI conversations hit token limits and lose context after 12-20 exchanges.

**The solution:** When conversation approaches 95% of token limit, Copilot CLI automatically compresses history in the background:

- **Important context persists:** Decisions made, approaches tried, facts learned
- **Redundant details pruned:** Verbose command outputs, repetitive exchanges
- **No interruptions:** Happens transparently during normal operation
- **Manual control available:** `/compact` command to compress anytime, `Escape` to cancel

**Monitoring tools:**
```bash
/context   # Visual token usage breakdown
/usage     # Session statistics: duration, lines edited, token usage per model
```

### Repository Memory: Cross-Session Learning

Copilot CLI builds a persistent understanding of your codebase by storing "memories" — pieces of information about conventions, patterns, and preferences:

**What gets remembered:**
- Coding standards and team conventions
- Project structure and architectural patterns
- Preferred approaches for common tasks
- Configuration patterns and debugging procedures

**Example memory accumulation:**
```bash
Session 1 (Monday):
> "Debug Docker networking issue"
[You explain that services use docker-compose networking, not host networking]

Session 2 (Wednesday):
> "Service A can't reach Service B"
✅ Copilot: "Checking docker-compose networking configuration..."
[AI remembers network architecture from Monday without re-explaining]
```

**Benefits:**
- Reduces need to re-explain context in future sessions
- New team members leverage institutional knowledge immediately
- AI gets smarter about your specific codebase over time
- Cross-session consistency in solutions and approaches

### Shell Mode Improvements

**History filtering:**
Shell command history (`!` prefix) now filters by prefix:
```bash
!docker [↑]  # Cycles only through previous docker commands
!git [↑]     # Cycles only through previous git commands
```

**Clean environment:**
Copilot excludes shell commands from Bash/PowerShell history files — terminal history stays clean for manual work.

**Tab title display:**
Current AI intent shows in terminal tab title — useful for monitoring multiple sessions.

### Output & Navigation Upgrades

**Faster, more concise output:**
Median completion time down ~45% with fewer input/output tokens per task.

**Improved timelines and diffs:**
Richer file-diff and edit timeline displays make review loops faster.

**Platform polish:**
Better Windows/PowerShell ergonomics plus accessibility-friendly shortcuts.

---

<!-- 🎬 MAJOR SECTION: Built-in Agents -->
## Built-in Specialized Agents

*Copilot automatically delegates to expert agents based on your request*

### Four Agent Types

Copilot CLI includes built-in agents that handle common patterns automatically — you don't explicitly call them, Copilot routes tasks based on intent.

#### Explore Agent

**Purpose:** Fast codebase analysis without cluttering main context

```bash
> "How does authentication work in this service?"
[Explore agent searches files, analyzes patterns, returns focused answer <300 words]
```

**Characteristics:**
- Fast analysis (searches, finds patterns, explains architecture)
- Returns concise answers under 300 words
- Safe to call in parallel with other operations
- Doesn't pollute main conversation context

#### Task Agent

**Purpose:** Execute commands with smart output filtering

```bash
> "Run the test suite and tell me if anything failed"
[Task agent runs tests, returns brief summary on success, full output on failure]
```

**Characteristics:**
- Executes tests, builds, lints with minimal noise
- Brief summary on success, full output on failure
- Ideal for "run this and tell me if it worked"
- Reduces conversation clutter from verbose command output

#### Plan Agent

**Purpose:** Analyze dependencies and create implementation strategies

```bash
> "Plan how to refactor the API to support versioning"
[Plan agent analyzes dependencies, creates multi-step strategy]
```

**Characteristics:**
- Multi-step planning for complex changes
- Creates structured plans you review before execution
- Best for architectural decisions and large refactorings
- Surfaces dependencies and risks upfront

#### Code-Review Agent

**Purpose:** Review changes with extremely high signal-to-noise ratio

```bash
/review
[Code-review agent analyzes changes, surfaces only genuine issues]
```

**Characteristics:**
- Only surfaces bugs, security issues, logic errors
- Never comments on style or formatting (use linters)
- Focuses human attention where it matters
- Works on staged or unstaged changes

### Parallel Agent Execution

Multiple agents can work simultaneously:

```bash
> "Explore how auth works, run the test suite, and plan how to add OAuth"

✅ Explore agent: Analyzes auth implementation
✅ Task agent: Runs tests in parallel
✅ Plan agent: Creates OAuth integration strategy
```

**Result:** Three operations complete in the time of one — agents don't block each other.

### Custom Agents

Beyond built-in agents, create specialized versions for your workflows:

**Locations:**
- **User-level:** `~/.copilot/agents/` (all projects)
- **Repository-level:** `.github/agents/` (current project)
- **Organization-level:** `.github-private/agents/` (all org projects)

**Usage:**
```bash
/agent               # Select from available agents
> "Use refactoring agent to improve this code block"
copilot --agent=refactor-agent  # Command-line option
```

For more information, see [Creating custom agents](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/coding-agent/create-custom-agents).

---

## Real-World Use Cases

### Use Case 1: Docker Debugging with Plan Mode

**The Problem:** Backend container won't start. Traditional investigation: 45 minutes manually checking logs, configuration files, environment variables. 8 trial-and-error attempts before finding root cause.

**The Solution:** Use Copilot CLI with Plan Mode for collaborative investigation

```bash
$ copilot
> "Debug why the backend container won't start"

# Copilot asks clarifying questions:
# "Should I check docker-compose config, logs, or both?"
# "Do you want environment variable analysis?"

> "Start with logs, then check config if needed"

# Copilot creates plan, executes after approval
# Identifies misconfigured port binding in docker-compose.yml
```

**Outcome:**
- **45 minutes → 8 minutes** debug time (83% reduction)
- **8 attempts → 2 attempts** (AI asks right questions first)
- **Automated log analysis** with reasoning transparency
- **Documented workflow** reusable by entire team

---

### Use Case 2: CI/CD Build Failure Analysis

**The Problem:** Build fails in CI pipeline. Manual investigation: 25 minutes analyzing logs, checking recent commits, verifying dependencies. 12-step debugging process executed manually each time. No pattern recognition across similar failures.

**The Solution:** Programmatic Copilot CLI in GitHub Actions workflow

```yaml
# .github/workflows/build.yml
- name: Analyze build failure
  if: failure()
  run: |
    copilot -p "Analyze build failure and suggest fixes" \
      --allow-tools \
      --model gpt-5.2-codex > analysis.txt
    gh pr comment --body-file analysis.txt
```

**Outcome:**
- **25 minutes → 5 minutes** investigation time
- **12 manual steps → 3 automated steps**
- **Pattern recognition enabled** across historical failures
- **Zero human intervention** for known failure types

---

### Use Case 3: Infrastructure Documentation Generation

**The Problem:** Infrastructure documentation lags deployments by 3 days because engineers prioritize working systems over updated docs. Manual diagram creation from docker-compose.yml and Kubernetes configs is tedious. Outdated architecture docs for stakeholder presentations.

**The Solution:** Automated generation directly from infrastructure-as-code

```bash
# Generate docs from docker-compose.yml
$ copilot "Generate architecture documentation from docker-compose.yml"

# Create system diagrams
$ copilot "Create deployment diagram showing service dependencies"

# Update docs when config changes
$ copilot "Update architecture.md to reflect new Redis cache service"
```

**Outcome:**
- **3 days → 30 minutes** documentation time
- **Automated diagram generation** from infrastructure code
- **Real-time architecture updates** when configs change
- **Always-current docs** for stakeholder presentations

---

### Use Case 4: Cross-Session Learning with Repository Memory

**The Problem:** New team member joins, asks questions about deployment process every few days. Senior engineer re-explains same conventions 5-6 times. Onboarding takes 2 weeks before new member is productive with infrastructure.

**The Solution:** Repository memory accumulates institutional knowledge

```bash
# Week 1: Senior explains conventions to Copilot during work
$ copilot
> "Deploy to staging"
# Copilot learns: staging uses blue-green deployment, requires approval, runs smoke tests

# Week 2: New team member uses same commands
$ copilot
> "Deploy to staging"
✅ Copilot: "Running blue-green deployment to staging..."
[Automatically follows learned conventions without re-explaining]
```

**Outcome:**
- **2 weeks → 3 days** onboarding for infrastructure work
- **5-6 explanations → 1 explanation** (AI remembers for team)
- **Consistent practices** across all team members
- **Institutional knowledge** persists beyond individual engineers

---

## ✅ What You Can Do Today

**Immediate Actions (15 minutes):**
- [ ] Install Copilot CLI: `gh copilot` (auto-installs on first run) or `npm install -g @github/copilot`
- [ ] Try interactive mode: `copilot` and ask about your project
- [ ] Test Plan Mode: Press Shift+Tab and request a complex debugging task

**Short-Term Implementation (1 hour):**
- [ ] Add Copilot CLI to one CI/CD pipeline for build failure analysis (see Use Case 2)
- [ ] Practice cloud delegation with `&` prefix for a large codebase analysis task
- [ ] Create `.github/copilot-instructions.md` with your team's debugging procedures
- [ ] Run `/context` and `/usage` commands to understand session management

**Advanced Exploration (2-4 hours):**
- [ ] Configure automatic build failure analysis in all CI/CD workflows
- [ ] Create custom agents in `.github/agents/` for specialized workflows
- [ ] Set up MCP servers via the GitHub MCP Registry (`/mcp add`)
- [ ] Measure ROI: Track before/after metrics for debugging time and iteration cycles

**Next Steps After Completion:**
1. ✅ Complete immediate actions and validate Copilot CLI solves your workflow needs
2. 📖 Review [Copilot CLI Best Practices](https://docs.github.com/en/copilot/how-tos/copilot-cli/cli-best-practices) for optimization patterns
3. 💬 Share wins with team: document time savings and present Plan Mode workflows
4. 🚀 Explore complementary talk: [Copilot Hooks](../copilot-hooks/) for governance and control mechanisms

---

## Related Patterns

### Complementary Features

- **[Copilot Hooks](../copilot-hooks/)** — Add validation, logging, and security scanning at key execution points in CLI workflows
- **[MCP Apps](../mcp-apps/)** — Extend Copilot CLI with external tools and data sources via Model Context Protocol
- **[Terminal Sandboxing](../terminal-sandboxing/)** — Secure execution environments for untrusted Copilot CLI operations
- **[Context Engineering Foundations](../context-engineering-foundations/)** — Optimize prompt design for better Copilot CLI results

### Decision Flow

**If this talk doesn't fit your needs:**

```
Q: What's your actual goal?
├─ In-editor code assistance → See: VS Code Copilot documentation
├─ Cross-repository architectural analysis → See: Copilot Web (github.com/copilot)
├─ Organization-wide governance → See: Copilot Hooks
└─ Extending with external tools → See: MCP Apps
```

See [DECISION-GUIDE.md](../DECISION-GUIDE.md) for complete navigation help.

---

## 📚 Official Documentation

**Primary Documentation:**
- 📖 **[About GitHub Copilot CLI](https://docs.github.com/en/copilot/concepts/agents/about-copilot-cli)** — Core concepts, capabilities, modes of use
- 📖 **[Using GitHub Copilot CLI](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/use-copilot-cli)** — Command syntax, options, workflows, and slash commands
- 📖 **[Installing GitHub Copilot CLI](https://docs.github.com/en/copilot/how-tos/set-up/install-copilot-cli)** — Setup instructions for npm, Homebrew, WinGet, and install scripts

**Additional Resources:**
- 🎓 [Copilot CLI Best Practices](https://docs.github.com/en/copilot/how-tos/copilot-cli/cli-best-practices) — Optimization patterns and anti-patterns
- 🎓 [Adding Custom Instructions for Copilot CLI](https://docs.github.com/en/copilot/how-tos/copilot-cli/add-custom-instructions) — Repository-specific behavior configuration
- 🔧 [GitHub Copilot CLI Command Reference](https://docs.github.com/en/copilot/reference/cli-command-reference) — Complete slash command and option reference
- 🔧 [Copilot CLI ACP Server](https://docs.github.com/en/copilot/reference/acp-server) — Using Copilot CLI via Agent Client Protocol

**GitHub Resources:**
- 📋 [GitHub Blog: Plan Mode Announcement](https://github.blog/changelog/2026-01-21-github-copilot-cli-plan-before-you-build-steer-as-you-go/) — Plan Mode, reasoning models, and latest features
- 📋 [GitHub Blog: Faster, more concise, and prettier](https://github.blog/changelog/2025-10-10-github-copilot-cli-faster-more-concise-and-prettier/) — Performance improvements and output polish
- 🐙 [Copilot CLI Public Repository](https://github.com/github/copilot-cli) — Issue tracking and community discussions
- 📹 [About Agent Skills](https://docs.github.com/en/copilot/concepts/agents/about-agent-skills) — Enhancing Copilot with specialized tasks

---

## 🎭 Behind the Scenes

### Plan Mode Technical Mechanics

Plan Mode uses the `ask_user` tool to pause generation and prompt for clarification. This is **not** just a prompt engineering trick — it's a first-class capability built into the model:

1. **Model predicts need for clarification** based on prompt ambiguity
2. **Triggers `ask_user` tool call** with specific questions
3. **Waits for user response** before continuing generation
4. **Incorporates feedback** into implementation plan
5. **Repeats if needed** until plan is clear

**Why This Matters:** Traditional AI chat completes requests immediately, even when requirements are unclear. Plan Mode recognizes ambiguity and collaborates before committing to an approach. This reduces the "assume and implement wrong" failure mode that causes 6-8 iteration cycles.

### Programmatic Mode Architecture

Programmatic mode (`copilot -p`) is **fundamentally different** from interactive mode:

- **Stateless execution:** No conversation history, each invocation is independent
- **Structured output:** Designed for parsing by scripts (not human reading)
- **Permission model:** Requires explicit `--allow-tool` or `--allow-all-tools` flags
- **Exit codes:** Success (0) or failure (non-zero) for automation workflows

```bash
# Interactive mode: maintains context
$ copilot
> "What's in logs?"
> "Check config too"
> "Now analyze both"

# Programmatic mode: one-shot execution
$ copilot -p "Analyze logs and config, suggest fixes" --allow-tools
```

**Key Takeaway:** Don't use interactive mode in CI/CD (builds break when it prompts for input). Don't use programmatic mode for iterative debugging (loses context each time).

### Context Auto-Compaction Algorithm

When conversation reaches 95% of token limit:

1. **Identify compressible segments:** Verbose command outputs, repeated tool calls, redundant explanations
2. **Extract key decisions:** User approvals, chosen approaches, important facts learned
3. **Generate compressed summary:** High-information content in fewer tokens
4. **Replace old segments with summary:** Maintains essential context, frees tokens
5. **Continue conversation:** User experiences no interruption

**Benefits:** Sessions can run indefinitely (tested: 200+ exchanges). Important decisions persist. Verbose details (full log outputs, repeated explanations) are intelligently pruned.

### Repository Memory Storage

Memories are stored in `.copilot/memory/` directory (local to repository):

```
.copilot/
└── memory/
    ├── conventions.json      # Coding standards
    ├── architecture.json     # System patterns
    └── workflows.json        # Common procedures
```

**Privacy model:** Memories never leave your local machine except when explicitly referenced in prompts (then sent to GitHub API like any other context). You can review/edit memory files anytime. Delete `.copilot/memory/` to reset learned knowledge.

---

**Terminal-native AI for DevOps automation and interactive problem-solving**
