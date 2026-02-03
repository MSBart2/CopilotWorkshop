# Exercise 2: Prompts & Standards Enforcement

## 🔨 Create Reusable Prompts and a Standards Review Agent

**Time:** 25 minutes  
**Outcome:** Reusable prompt files + a custom agent that enforces your documented standards

---

## 📖 The Challenge

You've documented your standards in Exercise 1. But documentation only helps if it's actually followed. Teams often create guidelines that get ignored because:

- Nobody remembers to check them during code review
- New team members don't know they exist
- Manual enforcement is tedious and inconsistent

**The traditional approach:** Hope people read the docs. Catch violations in PR review. Repeat the same feedback.

**The context-engineered approach:** Automate enforcement with a Standards Review Agent that uses your documentation to catch violations before code review.

---

## 🔄 The Transformation

| Before ❌ | After ✨ |
|-----------|----------|
| Standards documented but not enforced | Standards automatically checked |
| Same PR feedback repeated weekly | Agent catches violations before review |
| "Did you check ARCHITECTURE.md?" | Agent references it automatically |
| Inconsistent review quality by reviewer | Consistent standards-based review |

**Metrics improvement:**
- PR review rounds: 3 → 1 (67% reduction)
- Standards violations reaching PR: Many → Near zero
- Reviewer time spent on standards: 15 min → 2 min

---

## 🎯 Your Goal

Create two types of artifacts:
1. **Reusable prompts** — Common tasks you invoke with `/command`
2. **Standards Review Agent** — Enforces your documented standards automatically

---

## 📋 Part 1: Create Reusable Prompts (10 min)

Prompts are on-demand tasks you invoke with `/command`. Unlike instructions (always applied), prompts run when you need them.

### Step 1: Create the Prompts Folder

Create the folder: `.github/prompts/`

### Step 2: Create a Test Generation Prompt

Create `.github/prompts/generate-tests.prompt.md`:

```markdown
---
description: Generate tests following project conventions
tools: ['codebase', 'search']
---

# Generate Tests

Generate comprehensive tests for the provided code following our testing standards.

## Instructions
1. Check `.github/instructions/testing.instructions.md` for our testing conventions
2. Follow the Arrange-Act-Assert pattern
3. Include tests for:
   - Happy path scenarios
   - Error states and edge cases
   - Boundary conditions

## Requirements
- Use our testing framework as documented
- Follow our naming conventions: `it('should [behavior] when [condition]')`
- Mock external dependencies, not internal modules
- Each test should be independent

Generate the test file with the same name as the source file plus `.test` extension.
```

**Usage:** Select code, then type `/generate-tests`

### Step 3: Create an Explain Code Prompt

Create `.github/prompts/explain.prompt.md`:

```markdown
---
description: Explain code in context of our architecture
tools: ['codebase']
---

# Explain Code

Explain the selected code in the context of our project architecture.

## Include
1. What this code does (functionality)
2. How it fits into our architecture (reference docs/ARCHITECTURE.md)
3. Key patterns it uses from our codebase
4. Any dependencies or side effects
5. How it's typically used (find usages if helpful)

Keep the explanation concise but complete. Use our project terminology.
```

**Usage:** Select code, then type `/explain`

### Step 4: Create an Add Documentation Prompt

Create `.github/prompts/add-docs.prompt.md`:

```markdown
---
description: Add documentation comments following our standards
tools: ['codebase']
---

# Add Documentation

Add documentation comments to the selected code following our project conventions.

## Documentation Standards
- Use JSDoc/TSDoc format for TypeScript/JavaScript
- Include @param, @returns, and @throws where applicable
- Add @example for complex functions
- Keep descriptions concise but informative

## Guidelines
- Describe WHAT the code does, not HOW (the code shows how)
- Document non-obvious behavior and edge cases
- Include any important context from ARCHITECTURE.md
```

**Usage:** Select code, then type `/add-docs`

---

## 📋 Part 2: Create Standards Review Agent (15 min)

Now create an agent that enforces your documented standards. This is more powerful than prompts because it:
- Has access to specific tools
- Can analyze code against multiple documents
- Provides structured, actionable feedback

### Understanding Agent Tools

Before creating the agent, understand the tools it will have access to:

| Tool | Purpose | Example Usage |
|------|---------|----------------|
| **codebase** | Search your entire codebase for patterns and examples | "Find how error handling is done elsewhere" |
| **search** | Find specific files or code snippets | "Find all files matching pattern X" |
| **problems** | Access current linting/type errors from VS Code | "Include any TypeScript errors in this file" |
| **usages** | Find where code is used (references, implementations) | "See how UserService is used in the codebase" |

These tools allow the agent to:
1. **Understand your patterns** — Search the codebase for how you actually do things
2. **Cite evidence** — Reference real code examples when suggesting changes
3. **See the full context** — Understand where and how code is used
4. **Catch real issues** — Include actual TypeScript/linting errors in review

**Key point:** The agent uses these tools automatically as needed. You don't need to invoke them manually—just describe what you want reviewed.

### Step 5: Create the Agents Folder

Create the folder: `.github/agents/`

### Step 6: Create the Standards Review Agent

Create `.github/agents/standards-review.agent.md`:

```markdown
---
description: Review code against documented team standards
tools: ['codebase', 'search', 'problems', 'usages']
---

# Standards Review Agent

You are a code reviewer focused on enforcing documented team standards. Your job is to catch violations BEFORE code reaches human review.

## Your Standards Sources

Always reference these documents when reviewing:
- **Architecture**: [fanhub/docs/ARCHITECTURE.md](../fanhub/docs/ARCHITECTURE.md) — Project structure, patterns, conventions
- **Repository Standards**: [../copilot-instructions.md](../copilot-instructions.md) — Team-wide coding standards
- **File-Specific Rules**: `.github/instructions/*.instructions.md` — Rules for specific file types

## Available Tools

This agent has access to the following tools and uses them automatically:
- **codebase** — Search the entire project for patterns and examples
- **search** — Find specific files and code
- **problems** — Access current TypeScript/linting errors
- **usages** — Find code references and implementations

## Review Process

### 1. Identify Applicable Standards
- Use the `codebase` tool to search for relevant standards for the code being reviewed
- Check if file-specific instructions apply (based on file path/type)
- Load the relevant sections from ARCHITECTURE.md

### 2. Analyze the Code
- Check structural patterns (file location, naming, organization)
- Check coding patterns (error handling, typing, conventions)
- Check testing patterns (if test files are included)
- Use the `usages` tool to understand how similar code is written elsewhere in the project

### 3. Report Findings

For each violation found, provide:

**Violation**: [Brief description]
**Standard**: [Quote the specific rule from documentation]
**Location**: [File and line reference]
**Current Code**: [The problematic code]
**Suggested Fix**: [How to correct it]

### 4. Summary

End with a summary:
- Total violations found
- Severity breakdown (Critical / Warning / Suggestion)
- Overall compliance assessment

## Important Guidelines

- Only flag violations of DOCUMENTED standards
- Don't invent rules that aren't in our documentation
- If a pattern isn't documented but seems wrong, suggest adding it to documentation
- Be specific — quote the exact standard being violated
- Be helpful — always provide a fix, not just criticism
- Check the `problems` tool for any existing linting/type errors to include

## What NOT to Review

- Personal style preferences not in documentation
- Suggestions for "better" approaches not backed by our standards
- Performance optimizations (unless documented as a standard)
```

### Step 7: Test the Standards Review Agent

Switch to your new Agent and try it on some code:

```
@standards-review Review this file for compliance with our documented standards

#file:src/components/CharacterCard.jsx
```

Or review recent changes:

```
@standards-review Review #changes against our coding standards
```

**Expected behavior:**
- Agent references your ARCHITECTURE.md and instructions
- Violations cite specific documented rules
- Suggestions are actionable and specific

---

## 📋 Part 3: Verify Everything Works (5 min)

### Step 8: Test Your Prompts

Try each prompt you created:

1. Select some code in the editor
2. Open chat and type `/generate-tests`
3. Verify the output follows your testing conventions

Repeat for `/explain` and `/add-docs`.

**How to know prompts are working:**
- Look for the prompt name in the chat (e.g., "Generate Tests")
- Check the "References" section to see which prompt file was used
- Verify the output follows your conventions from Exercise 1

### Step 9: Test the Standards Review Agent

1. Open a file that might have violations
2. Type `@standards-review Review #selection for standards compliance`
3. Verify the agent:
   - References your documentation
   - Cites specific rules
   - Provides actionable fixes

---

## ✅ Success Criteria

Before moving on, verify:

- [ ] At least 2 prompt files created in `.github/prompts/`
- [ ] Standards Review Agent created in `.github/agents/`
- [ ] Prompts can be invoked with `/command`
- [ ] Agent references your Exercise 1 documentation
- [ ] Agent provides specific, actionable feedback
- [ ] Violations cite documented standards (not invented rules)

---

## 📊 Measure Your Baseline

| Metric | Before | After |
|--------|--------|-------|
| Time to generate tests | ___ minutes | ___ minutes |
| Time to review code for standards | ___ minutes | ___ minutes |
| Standards violations caught before PR | ___ | ___ |

---

## 💡 Pro Tips

### Prompts vs. Instructions vs. Agents

| Type | When to Use | Example |
|------|-------------|---------|
| **Instructions** | Always-on guidelines | Coding standards |
| **Prompts** | On-demand tasks | `/generate-tests` |
| **Agents** | Complex workflows with tools | Standards review |

### Keep Prompts Focused
Each prompt should do ONE thing well. Better to have `/generate-tests`, `/explain`, `/add-docs` than one mega-prompt that does everything.

### Agent Tool Selection
Only give agents the tools they need:
- `codebase` — For searching patterns
- `search` — For finding specific files
- `problems` — For including lint/type errors
- `usages` — For understanding code usage

### Standards Review Timing
Run `@standards-review` on:
- New files before committing
- Changes before creating a PR
- Code you're unsure about

---

## 📚 Official Docs

- [VS Code: Prompt Files](https://code.visualstudio.com/docs/copilot/customization/prompt-files) — Creating reusable prompts
- [VS Code: Custom Agents](https://code.visualstudio.com/docs/copilot/customization/custom-agents) — Building specialized personas
- [VS Code: Chat Tools](https://code.visualstudio.com/docs/copilot/chat/chat-tools) — Available tools for agents

---

## ➡️ Next: Exercise 3

**[Exercise 3: Execution & Validation →](exercise-3-execution-validation.md)**

Now we'll implement a feature, run the standards review, and measure the full context engineering workflow.

> *"Documentation without enforcement is just hope. The Standards Review Agent turns hope into consistency."*
