# Module 3: Custom Prompts

## ⏰ — The Repetition Problem

> *"I've typed this same prompt five times today: 'Generate tests following our standards.' There has to be a better way."*  
> — Elena, copying and pasting her carefully-crafted test generation prompt for the fifth time

---

## 📖 Story So Far

In **Module 1**, the team established their foundation: **ARCHITECTURE.md** gave Copilot structural understanding, and **.github/copilot-instructions.md** standardized patterns across the team. Now Copilot understands their tech stack and coding conventions.

In **Module 2**, they learned to use **plan mode** to research complex multi-file features before implementing them. Planning time dropped from 35 minutes to 7 minutes, and architectural conflicts were caught during planning instead of PR review.

Now, in **Module 3**, they face a new challenge: **repetitive, specialized prompts** that require specific context, references, and instructions. Elena types the same test generation prompt repeatedly. Sarah keeps referencing React standards manually. David has a code review checklist he rewrites for every PR. How do you save and reuse prompts that work, without copying and pasting or losing context?

💡 **Integration Note:** This module builds on the ARCHITECTURE.md and copilot-instructions.md from Module 1 by creating reusable prompt files that reference those foundational documents, ensuring consistency every time you invoke a standardized task.

---

⚠️ **Prerequisites**: 
- Complete [Module 00: Orientation](../00-orientation/README.md)
- Complete [Module 01: Repository Instructions](../01-repository-instructions/README.md)
- ARCHITECTURE.md and .github/copilot-instructions.md files created

---

## 🧠 Mindful Moment: From Ad-Hoc to Reusable

**Traditional thinking:** *"I'll just type the prompt again—it's only a minute."*

**AI-native thinking:** *"Document this prompt once, invoke it in 2 keystrokes, ensure the team uses the same standards."*

This isn't just about saving typing time. It's about **standardizing practices**. When your best prompts are saved as prompt files, junior developers get the same quality results as seniors. Code reviews reference the same checklist. Test generation follows the same patterns. Knowledge scales across the entire team.

---

💡 **Understanding Prompt Files**

**Prompt files** are Markdown files with a `.prompt.md` extension that define reusable prompts for common development tasks. Unlike custom instructions that apply to all requests, prompt files are **triggered on-demand** for specific tasks.

Think of them as **functions you can invoke**: code review checklists, test generation templates, architecture analysis procedures—any specialized prompt you use repeatedly. Like functions, they accept inputs (variables), execute once, and return results.

**Key characteristics:**
- **On-demand execution** — Type `/` in chat followed by the prompt name to invoke
- **Structured with YAML frontmatter** — Configure agent, model, tools, and description
- **Reference your docs** — Use Markdown links to include ARCHITECTURE.md, standards, patterns
- **Scoped to workspace or user** — Workspace prompts live in `.github/prompts/`, user prompts sync across all projects
- **Composable with variables** — Reference `${file}`, `${selection}`, `${workspaceFolder}`, or custom input variables

**Two scopes available:**
- **Workspace prompt files:** Stored in `.github/prompts/` — team-wide, project-specific functions
- **User prompt files:** Stored in your VS Code profile — personal functions that work across all projects

---

## 📚 Key Concepts

### Prompt File Structure

Every prompt file has two parts: **header (YAML frontmatter)** and **body (prompt instructions)**.

**Header (Optional but Recommended):**
```yaml
---
name: react-review          # Command name after /
description: 'Review React component for standards compliance'
agent: 'ask'                # ask, edit, agent, or custom agent name
model: 'GPT-4o'            # Specific model to use
tools: ['githubRepo']       # Available tools for this prompt
---
```

**Body (The Actual Prompt):**
```markdown
Review this React component against our standards in [.github/copilot-instructions.md](../.github/copilot-instructions.md).

Check for:
* Proper TypeScript types
* Error boundary implementation
* Accessibility attributes
* Performance optimization patterns

Reference file: ${file}
```

**Key Fields:**
- **name**: What you type after `/` in chat (e.g., `/react-review`)
- **description**: Appears in autocomplete list
- **agent**: Which agent runs the prompt (`ask` for analysis, `edit` for changes, `agent` for multi-step)
- **model**: Force a specific model (GPT-4o, Claude Sonnet 4, etc.)
- **tools**: Limit or specify which tools the agent can use
- **argument-hint**: Placeholder text showing users how to invoke the prompt

### Variables and Context

Prompt files become powerful when they reference **dynamic context**:

**Built-in variables:**
- `${workspaceFolder}` — Root path of your workspace
- `${file}` — Currently open file path
- `${selection}` — Selected text in the editor
- `${selectedText}` — Alias for selection

**Input variables:**
- `${input:componentName}` — Prompts user for a value
- `${input:featureName:default}` — Input with placeholder text

**Example:**
```markdown
Generate a React component named ${input:componentName} 
following patterns in [components/](${workspaceFolder}/src/components/)
```

### Referencing Documentation

The real power is **linking to your standards** so prompts always have current context:

```markdown
---
name: test-suite
description: 'Generate comprehensive test suite'
agent: 'agent'
tools: ['codebase']
---

Generate test suite for ${file} following:
* Testing standards: [copilot-instructions.md](../.github/copilot-instructions.md)
* Architecture patterns: [ARCHITECTURE.md](../../docs/ARCHITECTURE.md)
* Example tests: [__tests__/README.md](../../backend/__tests__/README.md)

Include:
- Unit tests for all public functions
- Integration tests for API endpoints
- Edge cases from our QA checklist
```

**Why this matters:** When copilot-instructions.md changes, all prompts automatically reference the latest version. No copying, no version drift, no inconsistency.

### Workspace vs. User Prompts

**Choose workspace prompts when:**
- ✅ Team-wide standardized functions (code review, test generation)
- ✅ Project-specific patterns (React component scaffolding, API endpoint design)
- ✅ Reference local files (ARCHITECTURE.md, team standards)
- ✅ Version controlled and shared via Git

**Location:** `.github/prompts/*.prompt.md`

**Choose user prompts when:**
- ✅ Personal functions that work across all projects (commit message formatting)
- ✅ Language-agnostic patterns (refactoring, documentation generation)
- ✅ Sync across all your machines via Settings Sync
- ✅ Not tied to specific project structure

**Location:** VS Code profile folder (synced automatically)

> 📂 **Reference Examples**: The [`examples/completed-config/`](../../examples/completed-config/) folder shows implemented prompt files in action.

---

## What You'll Learn

**Custom prompt files** turn your best prompts into reusable functions that standardize team practices and save repetitive typing. You'll create workspace prompts for code review and test generation, configure YAML frontmatter to control agent behavior, and measure time saved through prompt reuse. You'll document specialized functions once and invoke them in seconds.

**Time:** ~20 minutes | **Exercises:** 3

---

## 📋 Exercise Planning

The exercises below demonstrate how prompt files transform repetitive tasks into standardized, invokable functions. Each exercise shows measurable time savings and consistency improvements.

| # | Exercise | Lead | Support | Problem | Solution | Key Metrics | Artifacts |
|---|----------|------|---------|---------|----------|-------------|-----------|
| [3.1](exercise-3.1.md) | Creating Your First Prompt File | Elena | Marcus | Test generation prompt typed 5×/day: 3 min each, inconsistent standards | Create `.github/prompts/test-suite.prompt.md` for standardized test generation | 3→0.1 min per invocation, 5 invocations/day = 14.5 min/day saved | `.github/prompts/test-suite.prompt.md` |
| [3.2](exercise-3.2.md) | Referencing Standards and Docs | Sarah | David | React review prompt manually types standards: 8 lines, 3 min setup, missed checks | Create `/react-review` prompt that links to copilot-instructions.md | 8→1 lines, 3→0.1 min setup, 0 missed checks | `.github/prompts/react-review.prompt.md` |
| [3.3](exercise-3.3.md) | Variable-Driven Prompts | Marcus | Rafael, Elena | Build debugging prompt requires manual context: 5 min to gather logs, env vars, config | Create `/debug-build` with variables for current file and selection | 5→0.5 min context gathering, 10× faster debugging | `.github/prompts/debug-build.prompt.md` |

---

## 📚 What This Feature Does

**Custom Prompt Files:** Markdown files (`.prompt.md`) that define reusable, invokable functions for common development tasks. Like functions in code, they accept inputs (variables), execute with specific context, and return consistent results. Store them in `.github/prompts/` (workspace-wide) or your VS Code profile (personal, synced across machines).

**When to use it:** When you find yourself typing the same detailed prompt repeatedly—code reviews, test generation, architecture analysis, scaffolding components, debugging tasks, or any specialized work requiring specific context and standards.

**What you'll build:** 
- **Test generation prompt** — Standardized test suite creation following team patterns, invoked via `/test-suite`
- **Code review prompt** — Automated React standards validation referencing copilot-instructions.md, invoked via `/react-review`
- **Build debugging prompt** — Structured build failure analysis using context variables, invoked via `/debug-build`

> 💡 **Think of prompts as functions:** They're invoked by name, accept parameters (variables), execute once, and return results. Custom agents (Module 7) are more like workflows—multi-step processes that maintain state and iterate over time.

**Official Documentation:
- 📖 [Prompt Files in VS Code](https://code.visualstudio.com/docs/copilot/customization/prompt-files) — Complete guide to creating and using prompt files
- 📖 [Workspace Context Reference](https://code.visualstudio.com/api/references/workspace-context) — Variables available in prompt files
- 📖 [Awesome Copilot Repository](https://github.com/stars/aaravnavani/lists/copilot-customization) — Community-contributed prompt examples

> 💡 **Important for this module:** Prompt files reference your documentation using **relative Markdown links**. This ensures prompts always have current context from ARCHITECTURE.md and copilot-instructions.md without manual copying. When your standards evolve, prompts automatically reference the latest version.

---

## ➡️ Next Module

**[Module 4: Custom Instructions](../04-custom-instructions/README.md)** — While prompt files handle specific tasks, custom instructions apply context to every Copilot interaction, shaping how AI understands your role, codebase, and preferences.

> *"I love the prompt files, but I'm still explaining the same context in every chat session. Can I make Copilot remember who I am and what I care about?"*  
> — David, about to discover how custom instructions work

---

## 📌 Practices Used

| Practice | How It Applied in This Module |
|----------|-------------------------------|
| 📚 **Documentation as Leverage** | Prompt files reference ARCHITECTURE.md and copilot-instructions.md—standards documented once, enforced automatically through prompts |
| 🎯 **Outcome-Focused Prompts** | Each prompt specifies what to produce (test suite, review analysis) and success criteria (standards compliance, edge case coverage) |
| 🔄 **Iterative Refinement** | Prompt files evolve with your team—add checks when issues surface, improve based on what works |
| 🧩 **Composable Functions** | Prompts build on foundation from Module 1—they reference your architecture and standards to deliver consistent results |

---

## 🎭 Behind the Scenes

*For those who want to understand the deeper mechanics:*

### How Copilot Processes Prompt Files

When you invoke a prompt file via `/prompt-name`:

1. **File Discovery**: VS Code looks in `.github/prompts/` (workspace) and your profile folder (user prompts)
2. **YAML Parsing**: Reads frontmatter to determine agent, model, tools, and configuration
3. **Variable Substitution**: Replaces `${file}`, `${selection}`, `${input:*}` with actual values
4. **Link Resolution**: Resolves relative Markdown links to include referenced documentation
5. **Context Assembly**: Combines prompt body + referenced files + current context (open files, selection)
6. **Agent Invocation**: Routes assembled prompt to specified agent (ask, edit, agent, custom)
7. **Tool Availability**: Makes specified tools accessible during execution

**Key Takeaway:** Prompt files are **context orchestrators**. They don't just save typing—they ensure the right context (your standards, architecture, patterns) is always included, consistently.

### Variable Resolution Order

VS Code resolves variables in this sequence:

1. **Workspace variables** — `${workspaceFolder}`, `${workspaceFolderBasename}` (read from environment)
2. **File context variables** — `${file}`, `${fileBasename}` (read from active editor)
3. **Selection variables** — `${selection}`, `${selectedText}` (read from current selection)
4. **Input variables** — `${input:name}` (prompts user for value when invoked)

**Input variables enable interactive prompts:**
```markdown
Generate API endpoint for ${input:resourceName:user} 
with operations: ${input:operations:CRUD}
```

When invoked, user is prompted to provide values before execution begins.

**Key Takeaway:** Use built-in variables for context (what file, what's selected), use input variables for parameters (component name, feature scope). This makes prompts both consistent and flexible.

---
