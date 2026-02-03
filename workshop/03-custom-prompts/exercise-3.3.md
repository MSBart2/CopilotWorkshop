# Exercise 3.3: Variable-Driven Prompts

## 🔨 Exercise

### Exercise 3.3: Variable-Driven Prompts — "Context Without Copy-Paste"

**Lead:** Marcus ⭐ | **Support:** Rafael 🤝, Elena 🤝 | **Time:** 10 min

#### 📖 The Challenge

It's 4:30 PM. Marcus is debugging a build failure. His current workflow:

1. Copy error message from terminal (2 min)
2. Open Docker config file (1 min)
3. Copy relevant sections (1 min)
4. Type detailed prompt: _"Here's the error: [paste]. Here's the config: [paste]. Here's the environment: [paste]. What's wrong?"_ (1 min)
5. Total: **5 minutes just to gather context** before diagnosis even starts

Elena has the same problem with test debugging—she's constantly copying test output, file content, and error traces. Rafael spends time copying feature requirements and file lists for effort estimation.

Marcus realizes: _"Prompts can capture this context automatically using variables. I shouldn't manually copy what VS Code already knows."_

#### 🔄 The Transformation

| Before ❌                                                                                                                                                                                                             | After ✨                                                                                                                                                                                            |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Marcus manually copies error output (from terminal), config files (from editor), and environment details (from system). Types 4-paragraph prompt with all context pasted in. Takes 5 minutes before diagnosis begins. | Marcus opens the failing config file, selects the error output, runs `/debug-build`. Prompt automatically captures file path, selected error, workspace context. Structured analysis in 30 seconds. |
| **Context gathering:** 5 min<br>**Manual steps:** 4 (copy, switch, paste, format)<br>**Context errors:** Frequent (wrong version copied, stale config)                                                                | **Context gathering:** 0.5 min<br>**Manual steps:** 1 (invoke prompt)<br>**Context errors:** Impossible (always current file, current selection)                                                    |

**Time saved:** 4.5 minutes per build failure × 5 failures/sprint = **22.5 minutes/sprint**. More importantly: debugging starts with **perfect context, every time**.

#### 🎯 Your Goal

Create variable-driven prompts that automatically capture file paths, selected text, and workspace context, eliminating manual copy-paste.

#### 📋 Steps

1. **Create a selection-based debugging prompt**

   Create `.github/prompts/debug-build.prompt.md`:

   ```markdown
   ---
   name: debug-build
   description: "Analyze build failures with automatic context"
   agent: "ask"
   tools: ["codebase"]
   argument-hint: "Select error output in terminal first"
   ---

   Analyze this build failure:

   **Current file:** ${file}
   **File directory:** ${fileDirname}
   **Workspace root:** ${workspaceFolder}

   **Error output:**
   \`\`\`
   ${selection}
   \`\`\`

   Diagnose the problem by:

   1. Checking [Docker configuration](${workspaceFolder}/docker-compose.yml)
   2. Validating [package.json dependencies](${workspaceFolder}/package.json)
   3. Reviewing recent changes to ${file}
   4. Comparing against [ARCHITECTURE.md](${workspaceFolder}/docs/ARCHITECTURE.md) build patterns

   Provide:

   - **Root cause** — What's actually broken
   - **Fix** — Exact commands or code changes
   - **Prevention** — How to avoid this in the future
   ```

   **Key variables:**
   - `${file}` — Currently open file's full path
   - `${fileDirname}` — Directory containing the file
   - `${workspaceFolder}` — Root folder of the workspace
   - `${selection}` — Currently selected text (the error output)
   - `argument-hint` — Shows users what to do before invoking

2. **Use the debugging prompt with context capture**

   Simulate a build failure workflow:

   a) Open `docker-compose.yml` (or any config file)

   b) In the terminal, select an error message (or simulate one):

   ```
   ERROR: Cannot find module 'express'
   at Function.Module._resolveFilename
   ```

   c) Run in Copilot Chat:

   ```
   /debug-build
   ```

   Watch how variables get substituted:
   - `${file}` becomes the actual path: `/workspaces/CopilotTraining/docker-compose.yml`
   - `${selection}` becomes the error text you selected
   - `${workspaceFolder}` becomes the workspace root

   The prompt automatically:
   - Identifies which file is open
   - Captures the exact error
   - Checks related configuration files
   - References architecture documentation

   **No manual copying.** Context is perfect because it's captured automatically.

3. **Create an input-driven feature estimation prompt**

   Rafael needs effort estimation. Create `.github/prompts/feature-estimate.prompt.md`:

   ```markdown
   ---
   name: feature-estimate
   description: "Estimate feature effort with codebase analysis"
   agent: "agent"
   tools: ["codebase", "search/codebase"]
   argument-hint: "feature-estimate <feature description>"
   ---

   Estimate implementation effort for: ${input:featureDescription:Describe the feature}

   Analyze against codebase in ${workspaceFolder}:

   1. **Similar implementations** — Find comparable features in existing code
   2. **Affected files** — List files that need modification
   3. **New files** — Estimate what new files are needed
   4. **Dependencies** — Identify external libraries or services required
   5. **Testing scope** — Estimate test file coverage needed

   Reference:

   - Architecture patterns: [ARCHITECTURE.md](${workspaceFolder}/docs/ARCHITECTURE.md)
   - Existing features: Search for similar implementations

   Provide effort estimate in:

   - **Development time** — Hours or days for implementation
   - **Testing time** — Hours for test coverage
   - **Complexity rating** — Low/Medium/High with justification
   - **Risk factors** — What could make this take longer
   ```

   **Input variables:**
   - `${input:featureDescription}` — Prompts user for feature name when invoked
   - If user types `/feature-estimate Add character search`, the variable becomes `"Add character search"`
   - The `:Describe the feature` part is placeholder text shown to the user

4. **Test the input-driven prompt**

   In Copilot Chat, run:

   ```
   /feature-estimate Add real-time chat to character detail page
   ```

   The prompt:
   - Captures `"Add real-time chat to character detail page"` as the feature description
   - Searches the codebase for similar WebSocket/real-time features
   - Estimates files to modify, new dependencies (socket.io?), testing needs
   - Provides effort breakdown: "3 days backend, 2 days frontend, 1 day testing"

   Rafael can now walk into stakeholder meetings with **data-driven estimates in 5 minutes** instead of 2-hour planning sessions.

5. **Create a file context template generator**

   Elena wants a test file generator. Create `.github/prompts/test-file.prompt.md`:

   ```markdown
   ---
   name: test-file
   description: "Generate test file for current source file"
   agent: "agent"
   ---

   Generate test file for:

   **Source:** ${file}
   **Filename:** ${fileBasename}
   **Directory:** ${fileDirname}

   Create test at: `${fileDirname}/__tests__/${fileBasenameNoExtension}.test.js`

   Include:

   - Unit tests for all exported functions in ${fileBasename}
   - Integration tests if ${file} contains API endpoints
   - Mocked dependencies (imports from other files)
   - Edge cases: empty inputs, null, errors

   Follow patterns from existing tests in `${workspaceFolder}/**/__tests__/`
   ```

   **File context variables:**
   - `${fileBasename}` — Just the filename: `characters.js`
   - `${fileBasenameNoExtension}` — Filename without extension: `characters`
   - `${fileDirname}` — Parent directory path

   Now Elena opens any source file and runs `/test-file`. The prompt automatically determines the correct test file path and name.

#### ✅ Success Criteria

- [ ] `.github/prompts/debug-build.prompt.md` uses `${file}`, `${selection}`, and `${workspaceFolder}` variables
- [ ] Selecting error text and running `/debug-build` automatically includes that error in the analysis
- [ ] `.github/prompts/feature-estimate.prompt.md` uses `${input:featureDescription}` to accept feature names
- [ ] Running `/feature-estimate Add notifications` prompts for input and analyzes the codebase for effort estimation
- [ ] `.github/prompts/test-file.prompt.md` uses `${fileBasename}` and `${fileBasenameNoExtension}` to determine test paths

> 📂 **Compare Your Work**:
>
> - [`debug-build.prompt.md`](../../examples/completed-config/.github/prompts/debug-build.prompt.md)
> - [`feature-estimate.prompt.md`](../../examples/completed-config/.github/prompts/feature-estimate.prompt.md)
> - [`test-file.prompt.md`](../../examples/completed-config/.github/prompts/test-file.prompt.md)

#### 📚 Official Docs

- [VS Code Variables Reference](https://code.visualstudio.com/docs/editor/variables-reference) — Complete list of available variables: workspace, file, selection, input
- [Prompt Files - Variables](https://code.visualstudio.com/docs/copilot/customization/prompt-files#_variables) — How to use variables in prompt file body text

---

## 🔗 What You Built

**In this exercise:**

- `.github/prompts/debug-build.prompt.md` — Build debugging function that automatically captures error output and file context
- `.github/prompts/feature-estimate.prompt.md` — Effort estimation function that accepts feature descriptions and analyzes the codebase
- `.github/prompts/test-file.prompt.md` — Test generation function that automatically determines correct test file paths

**How it compounds:**

| Previous Modules                                 | This Exercise                                  | Combined Power                                                                |
| ------------------------------------------------ | ---------------------------------------------- | ----------------------------------------------------------------------------- |
| Module 1: ARCHITECTURE.md documents structure    | Variables reference ARCHITECTURE.md by path    | Prompts always check current architecture, no hardcoded paths                 |
| Exercise 3.1: Created invokable prompt functions | Add variables for dynamic context              | Functions become context-aware—same prompt, different file = relevant results |
| Exercise 3.2: Linked prompts to documentation    | Variables reference docs by ${workspaceFolder} | Prompts work correctly even if workspace moves or is cloned elsewhere         |

**Why this matters:** Marcus was spending 5 minutes gathering context before debugging could start. Now `/debug-build` captures perfect context in 30 seconds. Rafael's feature estimation went from 2-hour meetings to 5-minute data-driven analysis. Elena's test generation automatically knows the correct file paths.

**The function analogy is complete:** Prompts accept parameters (variables), execute with current context, return consistent results. Your best practices are now executable functions with perfect parameter binding.

---

## ➡️ Next Module

**[Module 4: Custom Instructions](../04-custom-instructions/README.md)** — Prompt files are perfect for specific tasks, but what if you want _every_ Copilot interaction to understand your role, preferences, and context automatically?

> _"These prompt functions are powerful, but I'm still explaining 'I'm a senior QA engineer focused on edge cases' in every new chat session. Can I make that automatic?"_  
> — Elena, about to discover custom instructions

---
