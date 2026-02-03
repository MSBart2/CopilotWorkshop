# Exercise 3.1: Creating Your First Prompt File

## 🔨 Exercise

### Exercise 3.1: Creating Your First Prompt File — "From Copy-Paste to Function Call"

**Lead:** Elena ⭐ | **Support:** Marcus 🤝 | **Time:** 8 min

#### 📖 The Challenge

It's 2:00 PM on Monday. Elena has typed the same test generation prompt three times today: _"Generate comprehensive test suite for this file following our testing standards. Include unit tests for all public functions, integration tests for API endpoints, and edge cases for error handling. Use Jest syntax and follow our naming conventions."_ Each time takes 3 minutes to type carefully, and occasionally she forgets to mention edge cases or Jest syntax, leading to inconsistent test output.

Marcus notices the same pattern with his deployment validation prompt. Sarah has a React component review checklist she types manually. The team is spending hours retyping prompts that should be standardized and instant.

Elena realizes: _"These are functions I'm calling repeatedly. I should define them once and invoke them by name."_

#### 🔄 The Transformation

| Before ❌                                                                                                                                                                                      | After ✨                                                                                                                                                       |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Elena types 3-minute prompt manually 5 times per day. Sometimes forgets to mention edge cases, leading to incomplete test coverage. Different wording each time produces inconsistent results. | Elena types `/test-suite` in chat (5 seconds). Prompt always includes edge cases, Jest syntax, naming conventions. Identical comprehensive results every time. |
| **Time:** 3 min per invocation<br>**Invocations:** 5/day<br>**Total time:** 15 min/day<br>**Standards compliance:** Variable                                                                   | **Time:** 0.1 min (6 seconds) per invocation<br>**Invocations:** 5/day<br>**Total time:** 0.5 min/day<br>**Standards compliance:** 100%                        |

**Time saved:** 14.5 minutes/day × 5 days/week = 72.5 minutes/week = **4.8 hours/month**

#### 🎯 Your Goal

Create your first workspace prompt file that standardizes test generation and makes it invokable via `/test-suite`.

#### 📋 Steps

1. **Create the prompts directory structure**

   Workspace prompt files live in `.github/prompts/` so the entire team can use them:

   ```bash
   mkdir -p .github/prompts
   ```

   This folder will store all your team's reusable prompt functions, version-controlled alongside your code.

2. **Create your first prompt file**

   In VS Code, create `.github/prompts/test-suite.prompt.md`:

   ```markdown
   ---
   name: test-suite
   description: "Generate comprehensive test suite following team standards"
   agent: "agent"
   tools: ["codebase"]
   ---

   Generate a comprehensive test suite for ${file} following our testing standards.

   Requirements:

   - **Unit tests** for all public functions
   - **Integration tests** for API endpoints
   - **Edge cases**: empty inputs, null values, concurrent operations, timeouts
   - **Framework**: Use Jest syntax
   - **Naming**: Follow `describe` → `it` pattern with descriptive names
   - **Assertions**: Prefer specific matchers (`toBe`, `toEqual`, `toThrow`) over generic ones

   Reference our test patterns from existing test files in the workspace.
   ```

   **Key elements:**
   - **YAML frontmatter**: Configures how the prompt executes (agent, tools, model)
   - **`${file}` variable**: Automatically references the currently open file
   - **Explicit requirements**: Never forgets edge cases or naming conventions
   - **Reference patterns**: Uses `tools: ['codebase']` to learn from existing tests

3. **Invoke your prompt function**

   Open any source file that needs tests (e.g., `backend/src/routes/characters.js`), then in Copilot Chat:

   ```
   /test-suite
   ```

   Watch Copilot:
   - Read your prompt file
   - Substitute `${file}` with the currently open file
   - Analyze existing test patterns in your codebase
   - Generate comprehensive test suite following all your standards

   **Expected result:** Complete test file with unit tests, integration tests, and edge cases—all following Jest conventions and your naming patterns. Generated in ~30 seconds instead of 45 minutes of manual writing.

4. **Verify the function behavior**

   Open a different file and invoke `/test-suite` again. Notice:
   - ✅ Identical standards applied every time
   - ✅ Same comprehensive coverage (never forgets edge cases)
   - ✅ Consistent naming and structure
   - ✅ Context-aware (uses the current file each time)

   **This is the power of prompt files:** Your expertise, codified once, applied consistently forever.

#### ✅ Success Criteria

- [ ] `.github/prompts/test-suite.prompt.md` exists and contains YAML frontmatter + prompt body
- [ ] Typing `/test-suite` in chat shows your custom prompt in the autocomplete list
- [ ] Running `/test-suite` on a source file generates comprehensive tests following your standards
- [ ] Generated tests include unit tests, integration tests, and edge cases without manual reminders

> 📂 **Compare Your Work**: [`examples/completed-config/.github/prompts/test-suite.prompt.md`](../../examples/completed-config/.github/prompts/test-suite.prompt.md)

#### 📚 Official Docs

- [Prompt Files in VS Code](https://code.visualstudio.com/docs/copilot/customization/prompt-files) — Complete guide to creating prompt files with YAML frontmatter and variables
- [VS Code Variables Reference](https://code.visualstudio.com/docs/editor/variables-reference) — All available variables like `${file}`, `${selection}`, `${workspaceFolder}`

---

## 🔗 What You Built

**In this exercise:**

- `.github/prompts/test-suite.prompt.md` — Reusable test generation function that ensures comprehensive coverage every time it's invoked

**How it compounds:**

| Previous Modules                                         | This Exercise                                          | Combined Power                                                              |
| -------------------------------------------------------- | ------------------------------------------------------ | --------------------------------------------------------------------------- |
| Module 1: copilot-instructions.md sets testing standards | Prompt file enforces those standards automatically     | Standards documented once, enforced automatically through prompt invocation |
| Module 2: Plan mode breaks down complex features         | Prompt file generates tests for each planned component | Planning + immediate test generation = complete TDD workflow                |

**Why this matters:** You just turned 3 minutes of careful typing into 6 seconds of function invocation. More importantly, you turned variable quality into guaranteed consistency. Elena's testing expertise is now team knowledge, not tribal knowledge.

---

## ➡️ Next Up

**[Exercise 3.2: Referencing Standards and Docs](exercise-3.2.md)** — Take your prompt functions to the next level by linking them to your ARCHITECTURE.md and copilot-instructions.md files, ensuring they always reference the latest standards.

> _"The test generation prompt is great, but I'm still manually typing React review standards. Can I link the prompt to copilot-instructions.md so it always uses current conventions?"_  
> — Sarah, about to discover prompt file Markdown links

---
