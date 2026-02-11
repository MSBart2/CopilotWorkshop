# Tech Talks — Creation Guide

This directory contains technical deep-dive presentations for practitioners. Each talk lives in its own subdirectory (e.g., `copilot-cli/`, `agent-teams/`) and follows a consistent structure defined by [TEMPLATE.md](TEMPLATE.md).

There are **two ways** to create a tech talk: an automated GitHub Issue workflow and a local IDE workflow using Copilot agents. Both produce the same output structure and use the same prompt templates.

---

## 📁 Directory Structure

Every tech talk produces:

```
tech-talks/{topic}/
├── research.md          # Phase 1 — raw research and source analysis
├── plan.md              # Phase 2 — content outline mapped to TEMPLATE sections
├── README.md            # Phase 3 — the finished tech talk
├── images/              # Downloaded or referenced visuals
└── examples/            # Standalone code samples
```

The final `README.md` follows the structure in [TEMPLATE.md](TEMPLATE.md), which defines every required section — from Content Fitness rubric to Slide Generation Mapping to the References list.

---

## 🔄 Two Workflows, Same Output

| | **Issue-Based (CI)** | **Local IDE (Agent)** |
|---|---|---|
| **Trigger** | Open a GitHub Issue | Chat with `@Tech Talk Generator` |
| **Engine** | GitHub Actions + Copilot CLI | VS Code Copilot agent |
| **Review gates** | Label changes + `/approve-plan` comment | Interactive pauses between phases |
| **Branch/PR** | Auto-creates branch and PR | You manage files directly |
| **Slides** | Phase 4 auto-generates Slidev slides | Hand off to `@Slide Generator` or `@Slide Manager` |
| **Best for** | Hands-off batch creation | Iterative, hands-on refinement |

Both workflows use the **same prompt templates** in `.github/prompts/tech-talk/` and the **same TEMPLATE.md** structure, so output is consistent regardless of which path you choose.

---

## 🤖 Option 1: Issue-Based Workflow (Automated)

Create a tech talk by opening a GitHub Issue. Four automated phases run as GitHub Actions, each commenting status updates directly on the issue.

### How to Start

1. Go to **Issues → New Issue → 🎤 Tech Talk Request**
2. Fill in:
   - **Topic** — directory name (e.g., `copilot-memory`)
   - **Source URLs** — documentation, blog posts, repos to research
   - **Primary Question** — the ONE question the talk answers
   - **Audience**, **Section**, **Duration**
3. Submit — Phase 1 starts automatically

### The Four Phases

```
┌──────────────┐     ┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│  1. Research  │────▶│   2. Plan    │────▶│   3. Build   │────▶│  4. Slides   │
│              │     │              │     │              │     │              │
│ Label:       │     │ Label:       │     │ Trigger:     │     │ Label:       │
│ tech-talk:   │     │ tech-talk:   │     │ /approve-plan│     │ tech-talk:   │
│ intake       │     │ planned      │     │ comment      │     │ slides       │
└──────────────┘     └──────────────┘     └──────────────┘     └──────────────┘
     auto               auto            👤 you comment        👤 you add label
```

#### Phase 1: Research (`tech-talk:intake` label)

- **Trigger:** Issue is opened with `tech-talk:intake` label
- **What happens:** Copilot CLI fetches source URLs, runs web searches, downloads images, extracts code examples
- **Output:** `research.md`, `images/`, `examples/` committed to a new branch
- **Label swap:** `tech-talk:intake` → `tech-talk:planned` (triggers Phase 2 automatically)
- **👤 Your action:** None — Phase 2 starts automatically

#### Phase 2: Plan (`tech-talk:planned` label)

- **Trigger:** `tech-talk:planned` label (set by Phase 1)
- **What happens:** Copilot CLI reads research.md and TEMPLATE.md, creates a content outline with draft prose for every section
- **Output:** `plan.md` committed to the branch
- **👤 Your action:** Review the plan, then comment `/approve-plan` to trigger Phase 3

#### Phase 3: Build (`/approve-plan` comment)

- **Trigger:** You comment `/approve-plan` on the issue
- **What happens:** Copilot CLI reads research.md, plan.md, and TEMPLATE.md, generates the full README.md with inline citations
- **Output:** `README.md` committed to the branch, PR opened
- **Label swap:** → `tech-talk:ready`
- **👤 Your action:** Review the README. When ready for slides, add the `tech-talk:slides` label

#### Phase 4: Slides (`tech-talk:slides` label)

- **Trigger:** You add the `tech-talk:slides` label
- **What happens:** Copilot CLI generates a Slidev `.md` file from the README
- **Output:** Slide file committed to `slides/tech-talks/`
- **Label swap:** → `tech-talk:complete`
- **👤 Your action:** None — the talk is done! Review the PR and merge

### Issue Comments

Each phase posts a status comment on the issue with:
- A **Workflow Progress** table showing all 4 phases and their status
- A **quality indicator** (🟢/🟡/🔴) based on output line count
- Clear **👤 Action Required** or **👤 No action needed** callouts

---

## 💻 Option 2: Local IDE Workflow (Agent)

Create a tech talk interactively in VS Code using Copilot Chat agents. This gives you more control — you can review and iterate between phases.

### How to Start

Open Copilot Chat and invoke:

```
@Tech Talk Generator create tech talk for [topic] using [URLs]
```

### The Three Phases

The agent follows the same prompt templates but pauses after each phase for your review:

#### Phase 1: Research
- Agent fetches URLs, runs web searches, downloads images
- Creates `tech-talks/{topic}/research.md` with full analysis
- **⏸️ Pauses** — shows you a summary, asks if you want to proceed

#### Phase 2: Plan
- Agent reads research.md and creates `plan.md`
- Maps content to every TEMPLATE.md section
- **⏸️ Pauses** — shows the plan, asks for approval

#### Phase 3: Build
- Agent reads everything and generates `README.md`
- Sets frontmatter (`status`, `updated`, `section`)
- **⏸️ Pauses** — shows the completed talk, offers handoff to slides

### Generating Slides (Separate Step)

Slides are **not** part of the agent's workflow. After Phase 3, use the handoff buttons or invoke directly:

```
@Slide Generator generate slides for tech-talks/{topic}
```

Or for generation + verification:

```
@Slide Manager generate and verify slides for tech-talks/{topic}
```

### Alternative: Skill-Based Workflow

You can also use the `@tech-talk-author` skill for a lighter-weight version:

```
@tech-talk-author create tech talk for [topic] using [URLs]
```

This follows the same 3-phase process but without the interactive pauses.

---

## 🔑 Key Differences

| Aspect | Issue Workflow | IDE Workflow |
|--------|---------------|--------------|
| **Review model** | Async — comment/label when ready | Synchronous — approve inline |
| **Branching** | Auto-creates `tech-talk/{topic}-*` branch | You manage your own branch |
| **Slides** | Built-in Phase 4 | Separate agent handoff |
| **Iteration** | Re-run phases via label manipulation | Edit and re-prompt naturally |
| **Collaboration** | Multiple reviewers via issue comments | Single author in IDE |
| **Automation** | Fully automated between human gates | Semi-automated with pauses |

---

## 📐 TEMPLATE.md — The Source of Truth

Both workflows reference [TEMPLATE.md](TEMPLATE.md) as the canonical structure. Every tech talk README must include these sections:

1. **Title + Primary Question** — the ONE question the talk answers
2. **📊 Content Fitness** — quality rubric (Relevant / Compelling / Actionable)
3. **📽️ Slide Generation Mapping** — how sections map to slides
4. **🧠 Mental Model Shift** — before/after transformation table
5. **The Problem** — what practitioners struggle with today
6. **The Solution** — the pattern or capability that solves it
7. **🔑 Key Artifacts** — configs, files, commands to know
8. **🎬 Major Sections** (3-6) — deep technical content with examples
9. **Use Cases** — real-world scenarios
10. **✅ Actionable Checklist** — what to do Monday morning
11. **📖 References** — numbered citations (`[^1]`, `[^2]`, etc.)

---

## 🗂️ Existing Tech Talks

| Directory | Topic |
|-----------|-------|
| `agent-teams/` | Multi-agent collaboration patterns |
| `agentic-journey/` | The evolution toward agentic development |
| `agentic-sdlc/` | AI across the software development lifecycle |
| `context-engineering-foundations/` | Foundational context engineering patterns |
| `copilot-chat/` | GitHub Copilot Chat fundamentals |
| `copilot-chat-internals/` | Under-the-hood: debug view, system prompts |
| `copilot-cli/` | Terminal-native AI with Copilot CLI |
| `copilot-hooks/` | Pre/post-processing hooks for Copilot |
| `copilot-acp/` | Agent Client Protocol for universal AI integration |
| `copilot-memory/` | Copilot memory and persistent context |
| `copilot-primitives/` | Core Copilot building blocks |
| `copilot-sdk/` | Programmatic Copilot integration |
| `copilot-web/` | Browser and mobile Copilot workflows |
| `enterprise-patterns/` | Enterprise-scale adoption patterns |
| `mcp-apps/` | Model Context Protocol applications |
| `multi-step-tasks/` | Complex multi-step agent tasks |
| `parallel-execution/` | Parallel agent execution strategies |
| `terminal-sandboxing/` | Sandboxed terminal execution |

For help choosing which talk to explore, see [DECISION-GUIDE.md](DECISION-GUIDE.md).

---

## 🛠️ Prompt Templates

The shared prompt templates live in `.github/prompts/tech-talk/`:

| File | Used In | Purpose |
|------|---------|---------|
| `research-instructions.md` | Phase 1 | URL analysis, web search, artifact extraction |
| `planning-instructions.md` | Phase 2 | Content outline mapped to TEMPLATE sections |
| `build-instructions.md` | Phase 3 | Full README generation with citations |
| `slides-instructions.md` | Phase 4 | Slidev slide generation from README |

These are the **single source of truth** for what each phase produces. Both the GitHub Actions workflow and the IDE agent read from these same files.
