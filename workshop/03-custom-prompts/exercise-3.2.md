# Exercise 3.2: Referencing Standards and Docs

## 🔨 Exercise

### Exercise 3.2: Referencing Standards and Docs — "Link Once, Use Forever"

**Lead:** Sarah ⭐ | **Support:** David 🤝 | **Time:** 7 min

#### 📖 The Challenge

Sarah has been typing her React component review prompt manually: 8 lines explaining functional components, hooks rules, TypeScript types, error boundaries, accessibility, and performance patterns. Takes 3 minutes to type, and she occasionally misses a check. Meanwhile, all these standards are _already documented_ in `.github/copilot-instructions.md` from Module 1.

David faces the same problem with architecture reviews—he types patterns that are already in ARCHITECTURE.md. The team is duplicating documentation: once in the foundational files, again in every prompt.

Sarah realizes: _"Why am I copying standards into prompts? I should link to the source of truth. When standards evolve, prompts automatically reference the latest version."_

#### 🔄 The Transformation

| Before ❌                                                                                                                                                                            | After ✨                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Sarah types 8-line React review prompt manually. Lists standards she remembers, occasionally forgets accessibility checks. When copilot-instructions.md updates, prompt stays stale. | Sarah types `/react-review` (1 line). Prompt links to copilot-instructions.md and always uses current standards. Never forgets checks because they're in the linked document. |
| **Lines typed:** 8<br>**Setup time:** 3 min<br>**Missed checks:** 2-3 per week<br>**Version drift:** Constant                                                                        | **Lines typed:** 1<br>**Setup time:** 6 seconds<br>**Missed checks:** 0<br>**Version drift:** Impossible (always references latest)                                           |

**Impact:** 3 minutes saved per review × 12 reviews/week = **36 minutes/week**. More importantly: **0 violations make it through** because prompts never forget documented standards.

#### 🎯 Your Goal

Create a code review prompt that links to your existing documentation, ensuring reviews always reference current standards.

#### 📋 Steps

1. **Create a documentation-linked prompt file**

   Create `.github/prompts/react-review.prompt.md`:

   ```markdown
   ---
   name: react-review
   description: "Review React component against team standards"
   agent: "ask"
   ---

   Review the React component in ${file} against our standards documented in [.github/copilot-instructions.md](../.github/copilot-instructions.md).

   Check for compliance with:

   **React Standards** (from copilot-instructions.md):

   - Functional components with proper hooks usage
   - TypeScript types for all props and state
   - Error boundary implementation for user-facing components
   - Accessibility attributes (ARIA labels, semantic HTML)
   - Performance optimization (memoization, lazy loading)

   **Architecture Patterns** (from ARCHITECTURE.md):

   - Component location matches [docs/ARCHITECTURE.md](../../docs/ARCHITECTURE.md) folder structure
   - API calls use centralized services layer
   - State management follows established patterns

   Provide:

   1. **Compliance summary** — Which standards are met, which are violated
   2. **Specific issues** — Line numbers and exact problems
   3. **Fix recommendations** — Code examples showing corrections
   4. **Priority** — Critical (blocks merge) vs. Nice-to-have (optional improvement)
   ```

   **Key elements:**
   - **Relative Markdown links**: `[.github/copilot-instructions.md](../.github/copilot-instructions.md)` references the actual file
   - **Multiple document references**: Links both copilot-instructions.md and ARCHITECTURE.md
   - **Structured output**: Specifies exactly what format you want returned
   - **agent: 'ask'**: Uses analysis agent (no code changes, just review)

2. **Invoke the documentation-aware review**

   Open a React component (e.g., `frontend/src/components/CharacterCard.js`) and run:

   ```
   /react-review
   ```

   Watch Copilot:
   - Read the prompt file
   - Fetch content from `.github/copilot-instructions.md` and `docs/ARCHITECTURE.md`
   - Analyze the current file against both documents
   - Return structured review with line numbers and priorities

   **Expected output:**

   ```
   ✅ COMPLIANCE SUMMARY:
   Met: Functional component, TypeScript types, hooks rules
   Violated: Missing error boundary, no ARIA labels, not memoized

   ❌ SPECIFIC ISSUES:
   Line 47: <div> should be <section> for semantic HTML
   Line 82: onClick missing aria-label for screen readers
   Component: Not wrapped in error boundary

   🔧 FIX RECOMMENDATIONS:
   [Detailed code examples with corrections]

   🚨 PRIORITY:
   Critical: Add error boundary (blocks merge)
   Nice-to-have: Memoization optimization
   ```

3. **Test automatic documentation updates**

   Make a change to `.github/copilot-instructions.md`. For example, add:

   ```markdown
   - **Data fetching**: Always use React Query for server state management
   ```

   Now run `/react-review` on a component that fetches data. Notice the review now includes React Query validation—**without modifying the prompt file**. The prompt automatically references the updated standards.

   **This is the power of documentation links:** Standards evolve, prompts stay synchronized automatically.

4. **Create an architecture review prompt**

   Following the same pattern, create `.github/prompts/arch-review.prompt.md`:

   ```markdown
   ---
   name: arch-review
   description: "Validate architectural patterns and structure"
   agent: "ask"
   ---

   Review ${file} against our architecture documented in [docs/ARCHITECTURE.md](../../docs/ARCHITECTURE.md).

   Validate:

   - File location matches architectural layer (components, services, routes)
   - Dependencies flow correctly (UI → Services → Database)
   - Data models match schema definitions
   - API patterns follow REST conventions

   Flag any violations with specific examples and corrections.
   ```

   Test by running `/arch-review` on any file. David's 20 years of architectural wisdom, now executable as a function.

#### ✅ Success Criteria

- [ ] `.github/prompts/react-review.prompt.md` uses Markdown links to reference copilot-instructions.md and ARCHITECTURE.md
- [ ] Running `/react-review` on a component produces structured review output with compliance summary
- [ ] Updating copilot-instructions.md automatically changes future `/react-review` results (no prompt file changes needed)
- [ ] `.github/prompts/arch-review.prompt.md` created and validates architecture patterns

> 📂 **Compare Your Work**:
>
> - [`react-review.prompt.md`](../../examples/completed-config/.github/prompts/react-review.prompt.md)
> - [`arch-review.prompt.md`](../../examples/completed-config/.github/prompts/arch-review.prompt.md)

#### 📚 Official Docs

- [Prompt Files - Referencing Files](https://code.visualstudio.com/docs/copilot/customization/prompt-files#_body) — How to use Markdown links to include other workspace files in prompts
- [VS Code Workspace Context](https://code.visualstudio.com/docs/copilot/copilot-customization#_workspace-context) — How Copilot accesses workspace files referenced in prompts

---

## 🔗 What You Built

**In this exercise:**

- `.github/prompts/react-review.prompt.md` — Code review function that always references current React standards from copilot-instructions.md
- `.github/prompts/arch-review.prompt.md` — Architecture validation function that enforces patterns documented in ARCHITECTURE.md

**How it compounds:**

| Previous Modules                                    | This Exercise                           | Combined Power                                                      |
| --------------------------------------------------- | --------------------------------------- | ------------------------------------------------------------------- |
| Module 1: ARCHITECTURE.md documents system design   | Prompt links to ARCHITECTURE.md         | Architecture validated automatically in every review                |
| Module 1: copilot-instructions.md defines standards | Prompt links to copilot-instructions.md | Standards enforced consistently without manual checking             |
| Exercise 3.1: Created first prompt file             | Add documentation links to prompts      | Single source of truth + automated enforcement = zero version drift |

**Why this matters:** Sarah's React review standards were locked in her head and occasionally forgotten. Now they're documented once in copilot-instructions.md and enforced automatically through `/react-review`. When standards evolve, every review uses the latest version instantly. **Documentation becomes automation.**

---

## ➡️ Next Up

**[Exercise 3.3: Variable-Driven Prompts](exercise-3.3.md)** — Make prompts even more powerful by using variables to capture dynamic context like the current file, selected text, or user input.

> _"The documentation links are brilliant, but build debugging needs more than just file references. Can prompts capture logs, environment variables, and error output automatically?"_  
> — Marcus, about to discover prompt file variables

---
