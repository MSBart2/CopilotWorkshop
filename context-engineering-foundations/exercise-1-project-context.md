# Exercise 1: Persistent Context Layers

## 🔨 Build Your Project's Context Foundation

**Time:** 30 minutes  
**Outcome:** Documentation + repository instructions + file-pattern instructions that ground Copilot in your project

> 💡 **Builds on Exercise 0:** You learned to use `@workspace` and `#codebase` to provide context in individual prompts. Now we'll make some of that context **persistent**—so Copilot always has it without you typing it every time.

---

## 📖 The Challenge

Every codebase has tribal knowledge—patterns, conventions, and architectural decisions that exist in people's heads but aren't written down. When you ask Copilot a question, it has to guess at this context by analyzing hundreds or thousands of files.

**The result:** Slower responses, inconsistent suggestions, and the constant need to correct "that's not how we do it here."

**The solution:** Create layered persistent context that Copilot uses automatically.

---

## 📚 Understanding Persistent Context Layers

GitHub Copilot in VS Code supports **multiple layers** of persistent context, each serving a different purpose:

| Layer | File | Loaded When | Use For |
|-------|------|-------------|---------|
| **Repository Instructions** | `.github/copilot-instructions.md` | Every chat request (automatic) | Team standards, shared conventions |
| **File-Pattern Instructions** | `.github/instructions/*.instructions.md` | When `applyTo` matches the active file (automatic) | Language-specific rules, component conventions |
| **User Instructions** | User profile `.instructions.md` | All your workspaces (automatic) | Personal preferences |
| **Documentation** | `docs/ARCHITECTURE.md` | When referenced via `@workspace` or `#file` | Project structure, tech stack, decisions |

**Key insight:** Instructions load **automatically**. Documentation loads **on-demand** when you reference it.

```
┌─────────────────────────────────────────────────────┐
│                  Your Chat Request                   │
├─────────────────────────────────────────────────────┤
│  + Repository Instructions (.github/copilot-...)    │
│  + File-Pattern Instructions (if applyTo matches)   │
│  + User Instructions (from profile)                 │
│  + Documentation (when referenced)                 │
└─────────────────────────────────────────────────────┘
```

---

## 🔄 The Transformation

| Before ❌ | After ✨ |
|-----------|----------|
| "Where do database queries go?" → Analyzes 847 files → 8s → 3 patterns | "Where do database queries go?" → References docs → 2s → Correct pattern |
| Writing tests → Generic Jest patterns → Doesn't match conventions | Writing tests → `applyTo: **/*.test.ts` → Your exact patterns |
| New team member → Generic suggestions → "That's not how we do it" | New team member → Same instructions → Consistent from day one |

**Metrics improvement:**
- Response time: 8s → 2s (75% faster)
- Pattern consistency: Multiple suggestions → Single correct answer
- Onboarding time: Days of learning conventions → Immediate consistency

---

## 🎯 Your Goal

Create three layers of persistent context:
1. **`docs/ARCHITECTURE.md`** — Project structure, tech stack, key patterns
2. **`.github/copilot-instructions.md`** — Repository-wide instructions for all interactions
3. **`.github/instructions/*.instructions.md`** — File-pattern-specific instructions

---

## 📋 Part 1: Create ARCHITECTURE.md (10 min)

### Step 1: Generate Initial Documentation

Open Copilot Chat (`Ctrl+Shift+I` / `Cmd+Shift+I`) and use this prompt:

```
@workspace:fanhub Analyze this project and create a concise ARCHITECTURE.md that includes:

1. **Tech Stack** - Languages, frameworks, databases, key dependencies
2. **Folder Structure** - What goes where (keep it high-level)
3. **Data Flow** - How requests move through the system
4. **Key Patterns** - How we handle routing, database access, error handling, testing

Keep it under 150 lines. Focus on what someone (or an AI) needs to understand 
the project structure, not implementation details.

Save to docs/ARCHITECTURE.md
```
**Note** This prompt uses a scoped `@workspace:fanhub` to target the specific project folder, even if your workspace contains multiple projects.

### Step 2: Review and Refine

Open the generated `docs/ARCHITECTURE.md` and verify:

- [ ] **Tech Stack** is accurate (correct versions, no hallucinated dependencies)
- [ ] **Folder Structure** matches your actual project layout
- [ ] **Key Patterns** reflects how your team actually works

**Review with your expertise:**
Copilot generates a solid starting point. Use your domain knowledge to validate:
- Accurate dependencies and versions
- Correct folder structure and naming
- All key patterns documented

### Step 3: Test the Improvement

Ask a structural question:

```
@workspace Where should I add a new API endpoint for user preferences?
```

**Expected result:** Copilot references your ARCHITECTURE.md and provides a specific, accurate answer.

---

## 📋 Part 2: Create Repository Instructions (10 min)

Repository instructions apply to **all chat requests** in your workspace. This is where you put team standards that everyone should follow.

### Step 4: Generate Repository Instructions

Use Copilot Chat to analyze your codebase and create the instructions file:

```
@workspace:fanhub Analyze this project and create .github/copilot-instructions.md 
that includes:

1. **Project Context** - How to reference our architecture docs
2. **Code Standards** - Languages, testing frameworks, linting tools we actually use
3. **Key Patterns** - How we structure API routes, database access, error handling, components
4. **What NOT to Do** - Common mistakes specific to our tech stack (be concrete, not generic)

Base this on patterns you see consistently in the codebase. Keep it under 100 lines.
Focus on standards that would help maintain consistency across the team.

Save to .github/copilot-instructions.md
```
**Note** This prompt uses a scoped `@workspace:fanhub` to target the specific project folder, even if your workspace contains multiple projects.

**Why this approach:** Let Copilot analyze your actual codebase patterns rather than starting from a generic template. You'll get project-specific content immediately.

### 💡 Alternative: Built-in "Generate Chat Instructions"

**Quick baseline approach:**
1. Click the settings cog (⚙️) in Copilot Chat
2. Select "Generate Chat Instructions"
3. Review and customize the output

**When to use each:**
- **Built-in command:** Quick baseline, unfamiliar with prompting
- **Custom prompt:** Targeted analysis, learning prompt engineering, specific needs

**Try both** and compare the results. The built-in command is great for getting started; custom prompts give you more control over what's analyzed and included.

### Step 5: Review and Customize

Open the generated `.github/copilot-instructions.md` and verify:

- [ ] **Code Standards are accurate** — Check framework versions, testing tools, linting setup
- [ ] **Key Patterns match reality** — Verify API routes, database access, error handling patterns
- [ ] **"What NOT to Do" is specific** — Generic anti-patterns won't help; ensure they're concrete
- [ ] **Project Context references are correct** — Verify links to ARCHITECTURE.md or other docs

**Apply your expertise:** Copilot generates based on code patterns it sees. You know:
- Team conventions that aren't obvious from code
- Decisions made in architecture reviews
- Pain points from past mistakes
- Standards you're moving toward (not just what exists)

Add or refine anything that will help maintain consistency.

### Step 5a: Reflection — Prompt Specificity (Optional)

**Compare generic vs. specific prompts** to see the difference:

**Generic prompt:**
```
Create copilot instructions for my project
```

**Specific prompt (what you just used):**
```
@workspace Analyze this codebase and create .github/copilot-instructions.md...
```

**Try both in separate chats.** Notice how the specific prompt produces:
- Actual framework versions (not placeholders like "[e.g., TypeScript 5.x]")
- Real patterns from your codebase (not generic examples)
- Concrete anti-patterns based on your tech stack

**This demonstrates the "Markdown Whisperer" principle:** Clear, specific intent → Better output.

---

### Step 6: Test Repository Instructions

Start a **new chat** (important—this loads fresh context) and ask:

```
What testing framework should I use for a new feature?
```

**Expected result:** Copilot gives a specific answer matching your instructions, not a generic "you could use Jest, Mocha, or Vitest" response.

---

## 📋 Part 3: Create File-Pattern Instructions (8 min)

File-pattern instructions apply to **specific file types** in your workspace. When you edit a React component, Copilot automatically loads your React-specific standards—no need to mention them manually.

### Step 6: Generate Component-Specific Instructions

Use Copilot Chat to analyze your codebase and create instructions for your primary file pattern:

```
@workspace:fanhub Analyze all React components in this codebase and create 
react-components.instructions.md with this exact file header:

---
description: React component standards and conventions
applyTo: '**/*.jsx'
---

Then include:

1. **Component Structure** - How we organize React components (functional, hooks, composition)
2. **Naming Conventions** - File naming, prop naming, event handler patterns
3. **State Management** - How we handle state (Context, Redux, local state preferences)
4. **Testing Patterns** - How we test React components (which testing library, common patterns)
5. **What NOT to Do** - Specific mistakes we've seen in PRs, concrete anti-patterns

Keep it under 80 lines. Base this on actual patterns in our codebase.

Save to .github/instructions/react-components.instructions.md
```

**Note:** The `applyTo: '**/*.jsx'` glob pattern applies these instructions to all `.jsx` files. Adjust if your components use a different extension (`.js`, `.tsx`, etc.).

### Step 7: Validate and Refine

Open the generated `.github/instructions/react-components.instructions.md` and verify:

- [ ] **Patterns are accurate** — Do these match your actual component structure?
- [ ] **Conventions are correct** — File naming, prop patterns, hooks usage?
- [ ] **State management approach is clear** — Matches how your team actually manages state?
- [ ] **Testing examples are realistic** — Based on real tests in your codebase?
- [ ] **"What NOT to Do" is concrete** — Specific mistakes, not generic anti-patterns?

**Apply your expertise:** Copilot analyzes code; you validate against team standards. Add missing context your team has but the code doesn't fully reveal.

### Step 8: Test File-Pattern Instructions

Create a new component file:

```
@workspace I'm creating a new component for [feature]. What structure and patterns should I follow?
```

**Expected result:** Copilot should reference your file-pattern instructions and provide guidance **specific to your project's patterns**—not generic React suggestions.

---

### 🔄 (Optional) Generate Additional File-Pattern Instructions

If your project has other key patterns (API routes, database queries, test files), repeat Steps 6-8 for each:

**For API routes:**
```
@workspace Analyze all API routes in this codebase and create 
.github/instructions/api-routes.instructions.md that includes:

1. **Route Structure** - Endpoint patterns, middleware usage
2. **Error Handling** - How we handle and return errors
3. **Validation** - Request validation patterns
4. **What NOT to Do** - Common route mistakes

Keep it under 80 lines.

Save to .github/instructions/api-routes.instructions.md
```

**For test files:**
```
@workspace Analyze all test files in this codebase and create 
.github/instructions/testing.instructions.md that includes:

1. **Test Organization** - How we structure test suites
2. **Naming Conventions** - Test naming patterns
3. **Mock Patterns** - How we mock dependencies
4. **Coverage Standards** - What we consider adequate coverage

Keep it under 80 lines.

Save to .github/instructions/testing.instructions.md
```

**Then validate and test each one** following Steps 7-8.

---

## 📖 Official Docs

- [GitHub: Copilot Instructions](https://docs.github.com/en/copilot/customizing-copilot/adding-custom-instructions-for-github-copilot)
- [VS Code: File-Pattern Instructions](https://code.visualstudio.com/docs/copilot/customize-copilot)
- [GitHub: Awesome Copilot](https://github.com/github/awesome-copilot) — Community-contributed instruction examples

---

## 🔗 What You Built

**In this exercise:**
- `docs/ARCHITECTURE.md` — Project structure documentation
- `.github/copilot-instructions.md` — Repository-wide standards
- `.github/instructions/*.instructions.md` — File-pattern-specific rules

**How they work together:**

| Layer | Applies When | Purpose |
|-------|--------------|---------|
| Architecture | `@workspace` queries, linked references | Structural understanding |
| Repository | Every chat request | Team-wide standards |
| File-Pattern | When `applyTo` matches current file | Context-specific rules |

---

## ➡️ Next: Exercise 2

**[Exercise 2: Prompts & Standards Enforcement →](exercise-2-prompts-and-enforcement.md)**

Now that Copilot understands your project structure and patterns, we'll create reusable prompts and a Standards Review Agent to enforce those patterns.

> *"Documentation is the foundation. Instructions are the guardrails. Enforcement makes it automatic."*
