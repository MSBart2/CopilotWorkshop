# Module 4: Custom Instructions

## ⏰ — The Context Problem

> *"My Python code needs different guidance than my JavaScript. My test files need different standards than my production code. But Copilot treats everything the same."*  
> — Elena, wishing Copilot understood context-specific rules

---

## 📖 Story So Far

In **Module 1**, the team created **`.github/copilot-instructions.md`**—a single repository-wide file that applies to all Copilot interactions. This established baseline standards for the entire codebase.

In **Module 2**, they used **plan mode** to research complex features before implementing, catching architectural issues during planning instead of PR review.

In **Module 3**, they created **prompt files** (`.prompt.md`)—invokable functions for specific tasks like `/test-suite` and `/react-review`. These turn repetitive prompts into instant, standardized function calls.

Now, in **Module 4**, they face a new challenge: **context-specific guidance that changes based on what you're working on**. Elena's Python files need PEP 8 standards, but JavaScript files need Airbnb style. Sarah's frontend components have different rules than backend APIs. Marcus's infrastructure-as-code needs validation patterns that don't apply to application code. How do you give Copilot instructions that automatically apply to the right files at the right time?

💡 **Integration Note:** This module builds on Module 1's `copilot-instructions.md` by adding **path-based `.instructions.md` files** that conditionally apply based on what you're editing. Repository-wide defaults + context-specific rules = comprehensive, automatic guidance.

---

⚠️ **Prerequisites**: 
- Complete [Module 00: Orientation](../00-orientation/README.md)
- Complete [Module 01: Repository Instructions](../01-repository-instructions/README.md)
- `.github/copilot-instructions.md` file created

---

## 🧠 Mindful Moment: From Global to Contextual

**Traditional thinking:** *"I'll keep all instructions in one file and hope Copilot figures out the context."*

**AI-native thinking:** *"Different files need different guidance. I'll use path-based instructions that automatically apply based on what I'm editing."*

This isn't about replacing repository-wide instructions—it's about **layering context-specific guidance on top**. Your global `copilot-instructions.md` provides baseline standards. Path-based `.instructions.md` files add specialized rules that only apply when relevant. The result: Copilot always has the right context, automatically.

---

💡 **Understanding .instructions.md Files**

**`.instructions.md` files** are path-based custom instructions that conditionally apply based on glob patterns. Unlike the repository-wide `copilot-instructions.md`, these target specific file types, directories, or naming patterns.

**Key characteristics:**
- **Conditional application** — Use `applyTo` glob patterns to specify when instructions activate
- **Multiple files** — Create as many as needed for different contexts (languages, layers, file types)
- **Automatic activation** — No manual invocation required; Copilot reads them when editing matching files
- **Layered with global** — Combined with `copilot-instructions.md` for comprehensive guidance
- **Scoped to workspace or user** — Store in `.github/instructions/` (team-shared) or user profile (personal)

**Two scopes available:**
- **Workspace instructions:** Stored in `.github/instructions/` — team conventions, project-specific patterns
- **User instructions:** Stored in your VS Code profile — personal preferences that apply across all projects

**How they differ from what you've learned:**

| Feature | copilot-instructions.md (Module 1) | .prompt.md (Module 3) | .instructions.md (Module 4) |
|---------|-----------------------------------|----------------------|---------------------------|
| **Scope** | Repository-wide, always active | On-demand invocation | Path-based, auto-applied |
| **Activation** | Automatic for all files | Manual: `/prompt-name` | Automatic when editing matching files |
| **Purpose** | Baseline standards for entire codebase | Specific tasks/functions | Context-specific guidance by file type/location |
| **Example** | "Use functional React components" | "/test-suite" → generate tests | "In Python files, follow PEP 8" |

---

## 📚 Key Concepts

### Path-Based Conditional Application

The power of `.instructions.md` files comes from the `applyTo` frontmatter field, which uses **glob patterns** to match files:

**Syntax:**
```yaml
---
applyTo: "glob pattern here"
---
```

**Common patterns:**

| Pattern | Matches | Use Case |
|---------|---------|----------|
| `**/*.py` | All Python files | Python-specific standards (PEP 8, type hints) |
| `**/__tests__/**` | All test directories | Testing conventions (naming, mocking, coverage) |
| `frontend/src/**` | All frontend files | UI patterns (React, accessibility, state management) |
| `backend/src/routes/**` | All API route files | REST conventions, error handling, auth patterns |
| `**/{Dockerfile,*.dockerfile}` | Docker files | Container best practices, security, multi-stage builds |
| `**/docs/**/*.md` | Documentation files | Writing style, audience focus, example-driven |
| `**/*.{ts,tsx}` | TypeScript files | Type safety, interface design, generics usage |

**Multiple patterns:**
```yaml
---
applyTo: "**/{*.test.js,*.spec.js,*.test.ts,*.spec.ts}"
---
```

### Layering Instructions

VS Code combines multiple instruction sources automatically:

**Order of application (all combined into context):**
1. **Repository-wide:** `.github/copilot-instructions.md` (baseline for all files)
2. **Path-specific:** Matching `.instructions.md` files (context-specific rules)
3. **User profile:** Personal `.instructions.md` files (individual preferences)

**Example scenario:**

Editing `frontend/src/components/CharacterCard.tsx`:
- ✅ `.github/copilot-instructions.md` — General React standards
- ✅ `.github/instructions/frontend.instructions.md` (applyTo: `frontend/**`) — UI-specific patterns
- ✅ `.github/instructions/typescript.instructions.md` (applyTo: `**/*.{ts,tsx}`) — Type safety rules
- ❌ `.github/instructions/api.instructions.md` (applyTo: `backend/src/routes/**`) — Not applied

**Result:** Copilot gets comprehensive guidance layered from general to specific.

### File Structure and Organization

**Recommended structure:**
```
.github/
  copilot-instructions.md          # Repository-wide baseline (Module 1)
  prompts/                          # Invokable functions (Module 3)
    test-suite.prompt.md
    react-review.prompt.md
  instructions/                     # Path-based context (Module 4)
    frontend.instructions.md        # UI layer guidance
    backend.instructions.md         # API layer guidance
    tests.instructions.md           # Testing conventions
    python.instructions.md          # Language-specific
    docker.instructions.md          # Infrastructure patterns
    docs.instructions.md            # Documentation style
```

**Naming convention:**
- Use descriptive names: `frontend.instructions.md`, not `1.instructions.md`
- Group by concern: language, layer, file type, or domain
- Keep focused: one concern per file (easier to maintain)

### Instructions File Format

**Complete structure:**
```markdown
---
name: frontend-ui-patterns
description: 'React component patterns and UI conventions'
applyTo: 'frontend/src/**/*.{jsx,tsx}'
---

# Frontend UI Development Standards

## Component Structure
- Use functional components with hooks (no class components)
- One component per file, named exports
- Props interface defined above component

## State Management
- Use `useState` for local state
- Use React Query for server state
- Use Context only for truly global state

## Accessibility
- Every interactive element needs aria-label
- Use semantic HTML (`<button>`, `<nav>`, `<main>`)
- Test with screen reader mode

## Performance
- Memoize expensive computations with `useMemo`
- Wrap callbacks with `useCallback` when passed to memoized children
- Use `React.lazy` for code splitting large components
```

**Key fields:**
- **name**: Identifier shown in VS Code UI (optional)
- **description**: What this instruction file does (optional)
- **applyTo**: Glob pattern for automatic application (required for auto-activation)
- **Body**: Markdown-formatted instructions

> 📂 **Reference Examples**: The [`examples/completed-config/`](../../examples/completed-config/) folder shows layered instruction files in action.

---

## What You'll Learn

**Custom instructions files** (`.instructions.md`) provide path-based, automatically-applied guidance that changes based on what you're editing. You'll create instructions for frontend vs. backend code, language-specific standards, and testing conventions. You'll use glob patterns to target specific files and measure context accuracy improvements. You'll layer context-specific rules on top of repository-wide defaults.

**Time:** ~25 minutes | **Exercises:** 3

---

## 📋 Exercise Planning

The exercises below demonstrate how path-based instructions eliminate context mismatches and provide specialized guidance automatically. Each exercise shows measurable improvements in suggestion accuracy and time saved correcting irrelevant patterns.

**Implementation:** Use `@exercise-author` to generate each exercise file from these specifications.

| # | Exercise | Lead | Support | Problem | Solution | Key Metrics | Artifacts |
|---|----------|------|---------|---------|----------|-------------|-----------|
| [4.1](exercise-4.1.md) | Layer-Specific Instructions | Sarah | David | Frontend gets backend patterns: 3 min/file correcting context, 15 files/sprint | Create `frontend.instructions.md` and `backend.instructions.md` with layer-specific patterns | 3→0 min/file context correction, 45 min/sprint saved | `.github/instructions/frontend.instructions.md`, `.github/instructions/backend.instructions.md` |
| [4.2](exercise-4.2.md) | Language-Specific Standards | Elena | Marcus | Python files get JavaScript patterns: 5 min/file fixing style, inconsistent conventions | Create language-specific instructions for Python, JavaScript, TypeScript | 5→0 min/file style fixes, 100% convention consistency | `.github/instructions/python.instructions.md`, `.github/instructions/javascript.instructions.md` |
| [4.3](exercise-4.3.md) | File-Type Specialized Guidance | Marcus | Elena, David | Test files need different rules than source: 10 min/file refactoring tests to match conventions | Create tests, docker, docs instructions with applyTo patterns | 10→0 min/file test refactoring, 120 min/sprint saved | `.github/instructions/tests.instructions.md`, `.github/instructions/docker.instructions.md`, `.github/instructions/docs.instructions.md` |

---

## 📚 What This Feature Does

**Custom Instructions (.instructions.md):** Path-based instruction files that automatically apply based on glob patterns, providing context-specific guidance that changes depending on what you're editing. Store in `.github/instructions/` (team-shared) or user profile (personal).

**When to use it:** When different parts of your codebase need different guidance—frontend vs. backend, Python vs. JavaScript, production code vs. tests, application code vs. infrastructure, or code vs. documentation.

**What you'll build:** 
- **Layer-specific instructions** — Frontend UI patterns and backend API standards that apply to the right architectural layer
- **Language-specific instructions** — Python PEP 8, JavaScript Airbnb, TypeScript strict mode that activate for the right file extensions
- **File-type instructions** — Testing conventions, Docker best practices, documentation style that target specific file types or directories

> 💡 **Key distinction:** Unlike `copilot-instructions.md` (applies everywhere) or `.prompt.md` files (invoke manually), `.instructions.md` files **automatically activate based on file patterns**. Edit a test file → test conventions apply. Edit a Python file → PEP 8 applies. No manual invocation, no global noise.

**Official Documentation:**
- 📖 [Custom Instructions in VS Code](https://code.visualstudio.com/docs/copilot/customization/custom-instructions) — Complete guide to creating and using `.instructions.md` files
- 📖 [Your First Custom Instructions](https://docs.github.com/en/copilot/tutorials/customization-library/custom-instructions/your-first-custom-instructions) — GitHub's tutorial on path-based instructions
- 📖 [Glob Pattern Reference](https://code.visualstudio.com/docs/editor/glob-patterns) — Understanding glob patterns for `applyTo` field

> 💡 **Important for this module:** The `applyTo` field uses **glob patterns relative to workspace root**. Pattern `frontend/**` matches any files under the `frontend/` directory. Pattern `**/*.py` matches Python files anywhere in the workspace. Patterns are flexible—you can target layers, languages, file types, or any combination.

---

## ➡️ Next Module

**[Module 5: Agent Skills](../05-agent-skills/README.md)** — While instructions and prompts provide guidance, agent skills give Copilot new capabilities—custom tools and functions that extend what agents can do beyond built-in features.

> *"Instructions tell Copilot how to behave, but what if I need it to do something it doesn't know how to do? Like validate against our custom API schema or check our specific deployment requirements?"*  
> — David, about to discover agent skills

---

## 📌 Practices Used

| Practice | How It Applied in This Module |
|----------|-------------------------------|
| 📚 **Layered Context** | Path-based instructions combine with repository-wide copilot-instructions.md—general standards + specific rules = comprehensive guidance |
| 🎯 **Right Tool, Right Job** | Different file types get different guidance automatically—no manual switching, no global noise in irrelevant contexts |
| 🔄 **Separation of Concerns** | Frontend, backend, tests, infrastructure each have dedicated instruction files—easier to maintain, update independently |
| 🧩 **Composable Guidance** | Instructions layer on top of each other—general (copilot-instructions.md) + specific (.instructions.md) = complete context |

---

## 🎭 Behind the Scenes

*For those who want to understand the deeper mechanics:*

### How Copilot Matches applyTo Patterns

When you edit a file, VS Code determines which `.instructions.md` files to apply:

1. **File Discovery**: Scans `.github/instructions/` (workspace) and user profile folder for `*.instructions.md`
2. **Pattern Matching**: For each file found, evaluates the `applyTo` glob pattern against current file path
3. **Path Normalization**: Converts file path to workspace-relative format (e.g., `frontend/src/App.tsx`)
4. **Glob Evaluation**: Tests pattern using minimatch algorithm (same as `.gitignore`)
5. **Context Assembly**: Combines all matching instruction files + `copilot-instructions.md` + user instructions
6. **LLM Context**: Sends combined instructions with every chat request for matching files

**Example matching:**

Editing: `/workspaces/CopilotTraining/frontend/src/components/CharacterCard.tsx`

- Pattern `frontend/**` → **MATCH** (file under frontend directory)
- Pattern `**/*.tsx` → **MATCH** (file ends with .tsx)
- Pattern `backend/**` → **NO MATCH** (file not under backend)
- Pattern `**/__tests__/**` → **NO MATCH** (file not in tests directory)

**Key Takeaway:** Glob patterns are powerful—use directory structure (`frontend/**`), file extensions (`**/*.py`), naming patterns (`**/*.test.js`), or combinations (`backend/src/**/*.{js,ts}`) to target exactly the right files.

### Instruction Priority and Conflicts

When multiple `.instructions.md` files apply to the same file, VS Code combines them **additively** (no specific precedence order):

**Scenario:** Editing `frontend/src/App.tsx`

Matching instructions:
- `.github/copilot-instructions.md` — General: "Use TypeScript, write tests"
- `.github/instructions/frontend.instructions.md` — "Use React hooks, component-per-file"
- `.github/instructions/typescript.instructions.md` — "Strict type safety, no `any`"

**Result:** All three are included in LLM context. If there's a contradiction (e.g., one says "use any when needed", another says "never use any"), the LLM attempts to reconcile, but **more specific instructions typically take precedence in practice**.

**Best practice:** Avoid contradictions by keeping concerns separated:
- `copilot-instructions.md` → General repository-wide standards
- `frontend.instructions.md` → Frontend-specific patterns (not duplicating general standards)
- `typescript.instructions.md` → Language-specific rules (not duplicating frontend or general)

**Key Takeaway:** Instructions are cumulative, not override-based. Design them to complement each other, not conflict. Each file should add new context, not contradict existing context.

---
