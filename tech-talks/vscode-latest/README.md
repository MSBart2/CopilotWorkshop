---
status: active
updated: 2026-02-12
section: "Copilot Surfaces"
---

# What's New in Copilot for VS Code: v1.107 – v1.109

> **The Question This Talk Answers:**
> *"What are the most impactful new Copilot features in VS Code's last three releases, and how do I start using them today?"*

**Duration:** 30-45 minutes | **Target Audience:** Developers using GitHub Copilot in VS Code

---

## 📊 Content Fitness

| Criterion | Assessment | Notes |
|-----------|-----------|-------|
| **Relevant** | 🟢 High | Every developer using Copilot in VS Code should know what shipped. These features are available today and change daily workflows. |
| **Compelling** | 🟢 High | Organized by theme so practitioners see how features connect. Concrete settings and demos for each capability. |
| **Actionable** | 🟢 High | Every feature is available now in VS Code 1.107+. Settings provided inline. Enable features during or right after the talk. |

**Overall Status:** 🟢 Ready to use

---

## 📽️ Slide Generation Mapping

### Slide Sequence (Generated Automatically)

1. **Title/Logo Slide** ← H1 title + subtitle
2. **Question/Objective Slide** ← "The Question This Talk Answers"
3. **Table of Contents Slide** ← Auto-generated from 🎬 sections
4. **Release Timeline** ← "Three Releases at a Glance"
5. **🧠 The Shift (Preview)** ← Core Insight one-liner
6. **[Agent Sessions & Orchestration] Divider** ← 🎬 Section 1
7. **[Agent Sessions Content]** ← 3-4 slides
8. **[Agent Customization] Divider** ← 🎬 Section 2
9. **[Skills & Custom Agents Content]** ← 3-4 slides
10. **[Claude & Anthropic] Divider** ← 🎬 Section 3
11. **[Claude Content]** ← 2-3 slides
12. **[Security & Trust] Divider** ← 🎬 Section 4
13. **[Sandboxing Content]** ← 2-3 slides
14. **[Chat UX & Productivity] Divider** ← 🎬 Section 5
15. **[UX Improvements Content]** ← 2-3 slides
16. **🧠 Mental Model Shift (Full)** ← Move-Toward/Away/Against grid
17. **Actionable Outcomes** ← "What You Can Do Today"
18. **📖 References** ← References section
19. **End Slide** ← Auto-generated

### Major Sections (TOC Entries)

```markdown
<!-- 🎬 MAJOR SECTION: Agent Sessions & Orchestration -->
<!-- 🎬 MAJOR SECTION: Agent Customization -->
<!-- 🎬 MAJOR SECTION: Claude & Anthropic Integration -->
<!-- 🎬 MAJOR SECTION: Security & Trust -->
<!-- 🎬 MAJOR SECTION: Chat UX & Productivity -->
```

---

## Three Releases at a Glance

| Release | Date | Headline Theme |
|---------|------|----------------|
| **v1.107** | November 2025 | Multi-agent orchestration — agent sessions, background agents in worktrees, org-level custom agents [^3] |
| **v1.108** | December 2025 | Agent Skills (experimental), agent sessions UX improvements, terminal IntelliSense rework, 6,000 issues closed [^2] |
| **v1.109** | January 2026 | Claude Agent preview, Agent Skills GA, terminal sandboxing, Copilot Memory, MCP Apps, integrated browser [^1] |

---

## 🧠 The Shift

> **The Core Insight:** From **one AI assistant you converse with** to **a team of specialized AI agents you orchestrate across local, background, cloud, and Claude sessions**

---

<!-- 🎬 MAJOR SECTION: Agent Sessions & Orchestration -->
## Agent Sessions & Orchestration

The biggest evolution across these three releases is how VS Code manages multiple agent sessions. What started as a single Chat view conversation is now a unified multi-agent platform [^6].

### Agent Sessions in the Chat View (v1.107)

Agent sessions are now integrated directly into the Chat view [^3]:

- **Compact mode** — Shows the three most recent sessions when Chat view is narrow
- **Side-by-side mode** — Full session list with search and filters when Chat view is wide
- **Status indicators** — In-progress, unread, needs attention (visible in the VS Code command center)

```json
// Control orientation
"chat.viewSessions.orientation": "sideBySide"  // or "stacked", "auto"
```

### Switching and Delegating Between Agent Types (v1.107 → v1.109)

VS Code now supports four agent types optimized for different workflows [^1] [^3]:

| Agent Type | Best For | Key Trait |
|-----------|---------|-----------|
| **Local** | Interactive planning, exploration | Real-time in Chat view |
| **Background** | Autonomous multi-file tasks | Runs in isolated Git worktree |
| **Cloud** | Cross-repo operations at scale | GitHub-hosted infrastructure |
| **Claude** | Complex reasoning, architecture | Anthropic SDK with thinking tokens |

The session type picker lets you start in one mode and hand off to another — plan locally, then click **Continue in → Background** to let the agent implement autonomously while you continue working [^1].

### Background Agents with Git Worktree Isolation (v1.107)

Background agents can now run in dedicated Git worktrees, preventing conflicts with your active workspace [^3]:

- Agent creates a new worktree automatically for the session
- Changes are committed per turn to the worktree — your main workspace is untouched
- Review via diff view when the agent completes; apply all, cherry-pick, or discard
- Multiple background agents can run simultaneously in separate worktrees

```json
// Copy extra files into worktrees (e.g., git-ignored config)
"git.worktreeIncludeFiles": ["config/local.json", ".env.local"]
```

### Parallel Subagents (v1.107 → v1.109)

Agents can now delegate subtasks to **subagents** that operate in their own context windows [^1] [^3]. In v1.109, subagents run in parallel, significantly speeding up tasks that can be split into independent parts. A dedicated **search subagent** iteratively refines codebase searches without consuming the main agent's context window [^1].

### Agent Sessions Welcome Page (v1.109)

A new experimental welcome page surfaces your agent sessions front and center when you open VS Code [^1]:

```json
"workbench.startupEditor": "agentSessionsWelcomePage"
```

---

<!-- 🎬 MAJOR SECTION: Agent Customization -->
## Agent Customization

### Agent Skills — From Experimental to GA (v1.107 → v1.109)

Agent Skills package domain expertise into reusable folders that agents load on-demand. Skills went from experimental in v1.108 to **generally available and enabled by default** in v1.109 [^1] [^2]:

```
.github/skills/
  api-design/
    SKILL.md          # Instructions, templates, validation
  security-review/
    SKILL.md
```

Each `SKILL.md` has a description in its frontmatter — agents match skills to tasks automatically.

```json
// Skills are enabled by default in v1.109
"chat.useAgentSkills": true,

// Add custom skill locations
"chat.agentSkillsLocations": {
  "~/.copilot/skills": true,
  "shared/team-skills": true
}
```

Extension authors can also package skills using the `chatSkills` contribution point [^1].

### Custom Agent Controls (v1.109)

Custom agents (`.agent.md` files) gained powerful new attributes [^1]:

- **`user-invokable: false`** — Create agents accessible only as subagents, not from the agents dropdown
- **`disable-model-invocation`** — Prevent an agent from being invoked automatically by other agents
- **`agents: ['Modify', 'Search']`** — Restrict which subagents a given agent can invoke
- **Multiple model support** — Specify fallback models in order of preference

```markdown
---
name: architect
model: ['Claude Sonnet 4.5 (copilot)', 'GPT-5 (copilot)']
tools: ['readFiles', 'codeSearch', 'agent']
agents: ['Modify', 'Search']
user-invokable: true
---

You are an experienced software architect...
```

### Organization-Wide Instructions (v1.107 → v1.109)

**Org-level custom agents** (v1.107) and **org-level custom instructions** (v1.109) let GitHub organizations enforce consistent AI guidance across all developers [^1] [^3]:

```json
// Enabled by default in v1.109
"github.copilot.chat.organizationInstructions.enabled": true
```

### `/init` — Bootstrap Your Workspace for AI (v1.109)

The new `/init` slash command analyzes your project structure and generates a tailored `copilot-instructions.md` or `AGENTS.md` file automatically [^1].

### Chat Customization Diagnostics (v1.109)

A new diagnostics view (right-click in Chat → **Diagnostics**) shows all currently loaded custom agents, prompt files, instructions, and skills, along with any loading errors [^1].

---

<!-- 🎬 MAJOR SECTION: Claude & Anthropic Integration -->
## Claude & Anthropic Integration

### Claude Agent (Preview, v1.109)

VS Code now supports the **Claude Agent SDK** directly — delegate tasks using the Anthropic agent harness with models from your GitHub Copilot subscription [^1] [^5]. Claude Agent appears as a session type alongside Local, Background, and Cloud.

### Thinking Tokens (v1.107 → v1.109)

Anthropic models now show **thinking tokens** — visible reasoning that shows hypothesis formation, tool selection, and error recovery in real-time [^1] [^7]:

```json
// Configure extended thinking budget (default: 4000, set 0 to disable)
"github.copilot.chat.anthropic.thinking.budgetTokens": 10000,

// Choose detailed or compact thinking style
"chat.thinking.style": "detailed",

// Collapse tool sections to reduce noise
"chat.agent.thinking.collapsedTools": ["terminal", "search"],

// Auto-expand failing tool calls
"chat.tools.autoExpandFailures": true
```

In v1.109, the Messages API with **interleaved thinking** enables Claude to reason between tool calls, providing more contextual multi-step responses [^1].

### Additional Anthropic Features (v1.109)

- **Tool search tool** — Helps Claude discover the most relevant tools from a large pool [^1]
- **Context editing (Experimental)** — Clears tool results and thinking tokens from previous turns to maintain more context [^1]

---

<!-- 🎬 MAJOR SECTION: Security & Trust -->
## Security & Trust

### Terminal Sandboxing (Experimental, v1.109)

OS-level sandboxing restricts agent-executed terminal commands [^1]:

- **File system**: Read/write only within the workspace directory
- **Network**: Blocked by default; specific domains can be allowlisted
- **Supported on**: macOS (`sandbox-exec`) and Linux (Landlock/seccomp)

```json
{
  "chat.tools.terminal.sandbox.enabled": true,
  "chat.tools.terminal.sandbox.network": ["github.com", "npmjs.com"]
}
```

When sandboxing is enabled, commands run without the standard confirmation dialog because they operate in a controlled environment [^1].

### Terminal Auto-Approval Rules (v1.107 → v1.109)

Auto-approval has expanded progressively across releases [^1] [^2] [^3]:

| Release | New Auto-Approved Commands |
|---------|---------------------------|
| v1.107 | "Allow all commands in this session" option added |
| v1.108 | `git ls-files`, `rg`, `sed`, workspace npm scripts via `npm`/`pnpm`/`yarn` |
| v1.109 | `Set-Location`, `dir`, `docker` (safe sub-commands), `npm`/`yarn`/`pnpm` (safe sub-commands) |

```json
"chat.tools.terminal.enableAutoApprove": true,
"chat.tools.terminal.autoApproveWorkspaceNpmScripts": true
```

### Terminal Tool Improvements (v1.109)

- **Richer command details** — Inline syntax highlighting for Python/Node/Ruby, working directory display, command intent description on hover [^1]
- **Output streaming** — Long-running commands auto-expand to show progress; quick commands stay collapsed [^1]
- **Interactive input** — Embedded terminals support direct typing for confirmation prompts [^1]
- **Timeout property** — Required on all terminal tool calls; prevents hung processes [^1]
- **Background management** — New `awaitTerminal` and `killTerminal` tools for proper lifecycle control [^1]
- **No shell history** — Agent-executed commands no longer appear in shell history (v1.108) [^2]

---

<!-- 🎬 MAJOR SECTION: Chat UX & Productivity -->
## Chat UX & Productivity

### Mermaid Diagrams in Chat (v1.109)

Chat responses can now render interactive Mermaid diagrams — flowcharts, sequence diagrams, and more. Pan, zoom, and open in a full-sized editor [^1].

### Ask Questions Tool (Experimental, v1.109)

Instead of making assumptions, the agent can present clarifying questions with single/multi-select options, free text, and recommended answers. The **Plan agent** now uses this in a structured 4-phase workflow: Discovery → Alignment → Design → Refinement [^1].

### Context Window Details (v1.109)

A new context window indicator in the chat input area shows a breakdown of token usage by category on hover — see exactly how the model is using its context budget [^1].

### Copilot Memory (Preview, v1.109)

Persistent context across sessions — the agent can store and recall important information like preferences, conventions, and project context [^1]:

```json
"github.copilot.chat.copilotMemory.enabled": true
```

### Integrated Browser (Preview, v1.109)

A full integrated browser replaces the limited Simple Browser. Sign into websites, use DevTools, send elements to chat for AI assistance [^1]:

```json
"workbench.browser.openLocalhostLinks": true,
"simpleBrowser.useIntegratedBrowser": true
```

### MCP Apps (v1.109)

MCP servers can now display rich interactive UI in the client — flame graphs, custom visualizations, and more [^1].

### External Indexing for Non-GitHub Workspaces (v1.109)

Workspaces not hosted on GitHub can now be remotely indexed for fast semantic search (`#codebase`), providing the same code search experience as GitHub-hosted repos [^1].

### Language Models Editor (v1.107 → v1.109)

A centralized editor for managing all language models — toggle visibility, add providers, configure API keys, manage multiple configurations per provider [^1] [^3]. Model configurations are now stored in a dedicated `chatLanguageModels.json` file.

### Inline Chat UX Revamp (v1.107 → v1.109)

Inline chat is now optimized for quick single-file code changes, with a new affordance for triggering and a lightweight contextual rendering mode [^1] [^3].

---

## 🧠 Mental Model Shift

> **The Core Insight:** From **one AI assistant you converse with** to **a team of specialized AI agents you orchestrate**

### Move Toward ✅

- ✅ **Multi-session workflows**: Plan locally → implement in background → review worktree diff → merge selectively
- ✅ **Domain-specific Skills**: Capture team expertise once in `SKILL.md` files; agents apply it automatically
- ✅ **Visible reasoning**: Enable thinking tokens on complex tasks to see hypotheses, tool choices, and error recovery
- ✅ **Sandboxed autonomy**: Auto-approve safe commands while sandboxing blocks system access
- ✅ **Organization consistency**: Org-level agents and instructions enforce standards across teams

### Move Away From ⚠️

- ⚠️ **Single long conversations**: Context overflow degrades quality; use subagents and session handoffs instead
- ⚠️ **Manual approval fatigue**: Configure auto-approval rules and sandboxing instead of clicking "allow" 50 times
- ⚠️ **Per-developer customization**: Org-level customization replaces individual `copilot-instructions.md` divergence

### Move Against 🛑

- 🛑 **Unsandboxed autonomous agents**: Never run background agents with unrestricted system and network access
- 🛑 **Context dumping**: Never paste an entire codebase into one conversation — use `#codebase`, subagents, and targeted context

---

## ✅ What You Can Do Today

**Immediate (5 minutes):**
- [ ] Update VS Code to v1.109+
- [ ] Try `/init` to bootstrap workspace instructions for your project
- [ ] Enable thinking tokens: `"github.copilot.chat.anthropic.thinking.budgetTokens": 4000`

**Short-Term (30 minutes):**
- [ ] Enable terminal sandboxing: `"chat.tools.terminal.sandbox.enabled": true`
- [ ] Create your first Agent Skill in `.github/skills/` for a common team pattern
- [ ] Try the multi-session workflow: plan locally → hand off to background agent → review worktree diff

**Explore Further (1 hour):**
- [ ] Define a custom agent (`.agent.md`) with subagent invocation and model fallback
- [ ] Enable Copilot Memory: `"github.copilot.chat.copilotMemory.enabled": true`
- [ ] Try the integrated browser for localhost development
- [ ] Enable the GitHub MCP Server: `"github.copilot.chat.githubMcpServer.enabled": true`

---

## Key Settings Reference

Quick reference for all settings mentioned in this talk:

```json
{
  // Agent Sessions & Orchestration
  "chat.viewSessions.orientation": "sideBySide",
  "git.worktreeIncludeFiles": [],

  // Agent Customization
  "chat.useAgentSkills": true,
  "chat.agentSkillsLocations": {},
  "chat.customAgentInSubagent.enabled": true,
  "github.copilot.chat.organizationInstructions.enabled": true,

  // Claude & Anthropic
  "github.copilot.chat.anthropic.thinking.budgetTokens": 4000,
  "chat.thinking.style": "detailed",
  "chat.tools.autoExpandFailures": true,

  // Security & Trust
  "chat.tools.terminal.sandbox.enabled": true,
  "chat.tools.terminal.sandbox.network": [],
  "chat.tools.terminal.enableAutoApprove": true,
  "chat.tools.terminal.autoApproveWorkspaceNpmScripts": true,

  // Productivity
  "github.copilot.chat.copilotMemory.enabled": true,
  "workbench.browser.openLocalhostLinks": true,
  "github.copilot.chat.githubMcpServer.enabled": true
}
```

---

## Related Patterns

- **[Copilot Chat](../copilot-chat/)** — Deep dive on context mechanisms and chat architecture
- **[Copilot CLI](../copilot-cli/)** — Command-line Copilot experience
- **[Custom Agents & Skills](../copilot-primitives/)** — Comprehensive guide to agent customization primitives
- **[Terminal Sandboxing](../terminal-sandboxing/)** — Deep dive on sandboxing configuration
- **[Copilot Memory](../copilot-memory/)** — Detailed exploration of persistent context

See [DECISION-GUIDE.md](../DECISION-GUIDE.md) for complete navigation help.

---

## 📖 References

[^1]: **[VS Code Release Notes: January 2026 (v1.109)](https://code.visualstudio.com/updates/v1_109)** — Chat UX, Agent Sessions, Agent Customization, Claude Agent, terminal sandboxing, Copilot Memory, MCP Apps

[^2]: **[VS Code Release Notes: December 2025 (v1.108)](https://code.visualstudio.com/updates/v1_108)** — Agent Skills experimental, Agent Sessions view, terminal IntelliSense rework, housekeeping

[^3]: **[VS Code Release Notes: November 2025 (v1.107)](https://code.visualstudio.com/updates/v1_107)** — Multi-agent orchestration, background agents in worktrees, org-level custom agents, MCP enhancements

[^4]: **[GitHub Copilot in VS Code Documentation](https://code.visualstudio.com/docs/copilot/overview)** — Comprehensive guide to Copilot features, agent types, and customization

[^5]: **[GitHub Blog: Copilot in VS Code v1.109](https://github.blog/changelog/2026-02-04-github-copilot-in-visual-studio-code-v1-109-january-release/)** — Official announcement of Claude agent support and thinking tokens

[^6]: **[InfoWorld: VS Code Adds Multi-Agent Orchestration](https://www.infoworld.com/article/4105879/visual-studio-code-adds-multi-agent-orchestration.html)** — Industry analysis of VS Code's multi-agent capabilities

[^7]: **[Anthropic: Claude's Extended Thinking](https://www.anthropic.com/news/visible-extended-thinking)** — Technical explanation of extended thinking tokens and visible reasoning

[^8]: **[Agent Skills Documentation](https://code.visualstudio.com/docs/copilot/customization/agent-skills)** — Creating and using Agent Skills in VS Code

[^9]: **[Custom Agents Documentation](https://code.visualstudio.com/docs/copilot/customization/custom-agents)** — Defining custom agents with `.agent.md` files

[^10]: **[Background Agents Documentation](https://code.visualstudio.com/docs/copilot/agents/background-agents)** — Using background agents with Git worktree isolation

---

## 🎭 Behind the Scenes

### The Copilot Extension Unification

In v1.107, inline suggestions began being served from the GitHub Copilot **Chat** extension. By v1.109, the original GitHub Copilot extension was **fully deprecated** and auto-uninstalled on update [^1]. All AI functionality now lives in a single extension: GitHub Copilot Chat.

### Engineering Highlights

- **v1.108 Housekeeping**: The VS Code team closed **5,951 issues** across all repositories, including 2,872 in the core `microsoft/vscode` repo and 1,659 in `microsoft/vscode-copilot-release` [^2]
- **Build scripts in TypeScript**: VS Code now runs build scripts directly as TypeScript (Node 22.18+), deleting ~15,000 lines of compiled JS [^3]
- **macOS DMG installer**: VS Code ships DMG images for native drag-and-drop installation [^1]
- **Windows 11 context menu**: Right-click in File Explorer now shows VS Code in the top-level context menu [^1]
