# Exercise 0: Chat Context Primitives

## 🔨 Master the Building Blocks of Context

**Time:** 15 minutes  
**Outcome:** Understand and practice using `@`-mentions and `#`-mentions to provide context

---

## 📖 The Foundation

Before you create documentation or build workflows, you should master the **primitives**—the basic runtime building blocks for providing context to Copilot in every interaction.

There are two types of context primitives:
- **`@`-mentions (Chat Participants)** — Specialized assistants for different domains
- **`#`-mentions (Context Variables)** — Ways to attach specific context to your prompts

---

## 🎯 @-Mentions: Chat Participants

Chat participants are **domain experts** you can invoke for specific tasks. Think of them as handing your question to a specialist.

### Built-in Chat Participants

| Participant | Purpose | Example |
|-------------|---------|---------|
| `@workspace` | Analyzes project structure and files open in your current workspace | `@workspace How is the frontend organized—where do new components go?` |
| `@vscode` | Expert on VS Code features | `@vscode How do I enable word wrap?` |
| `@terminal` | Analyzes terminal output and commands | `@terminal What caused this build failure?` |
| `@github` | GitHub features and workflows | `@github Show my open PRs` |

---

## 🎯 #-Mentions: Context Variables

Context variables let you **attach specific context** to your prompts. Type `#` to see all available options.

### Core Context Variables

| Variable | What It Adds | Example |
|----------|--------------|---------|
| `#file` | A specific file | `Explain #file:src/auth.js` |
| `#selection` | Currently selected code | `Refactor #selection to use async/await` |
| `#codebase` | Searches your entire codebase (indexed) | `How is authentication implemented? #codebase` |
| `#terminalLastCommand` | Last terminal command + output | `Why did this fail? #terminalLastCommand` |
| `#terminalSelection` | Selected terminal text | `Explain #terminalSelection` |
| `#problems` | Current errors/warnings from Problems panel | `Fix #problems in this file` |
| `#changes` | Uncommitted git changes | `Review #changes` |

### Additional Tools (Agent Mode)

When using **Agent mode** (`Ctrl+Shift+I`), additional tools become available:

| Tool | Purpose | Example |
|------|---------|---------|
| `#usages` | Find all references, implementations, definitions | `Rename getUserData #usages` |
| `#testFailure` | Unit test failure information | `Fix this test #testFailure` |
| `#search` (tool set) | File search in workspace | Automatic in agent mode |
| `#edit` (tool set) | File modifications | Automatic in agent mode |

### External Context Tools

| Tool | Purpose | Example |
|------|---------|---------|
| `#fetch` | Get content from a URL | `Summarize #fetch https://api-docs.example.com` |
| `#githubRepo` | Search a GitHub repository | `How does auth work? #githubRepo vercel/next.js` |

---

## 📋 Hands-On Practice

### Exercise 0.1: Try @workspace (3 min)

Open Copilot Chat and try these prompts:

```
@workspace What is the tech stack of this project?
```

```
@workspace How is the frontend organized—where do new components go?
```

```
@workspace Show me the folder structure for API endpoints
```

**Observe:** How does Copilot gather information? Does it reference specific files?

### Exercise 0.2: Try #file and #selection (3 min)

1. **Open a file** in your project
2. **Select some code** (a function or class)
3. Try these prompts:

```
Explain #selection
```

```
Add error handling to #selection
```

```
Write tests for #file
```

**Observe:** How does the specific context change the quality of responses?

### Exercise 0.3: Try #codebase (3 min)

Ask a question that requires searching across multiple files:

```
Where is the database connection configured? #codebase
```

```
How does user authentication work? #codebase
```

**Observe:** Copilot searches your codebase and shows which files it found relevant.

### Exercise 0.4: Compare With and Without Context (3 min)

Try the same question two ways:

**Without specific context:**
```
How should I handle errors?
```

**With context:**
```
How should I handle errors in #file:src/api/users.js following the patterns in #codebase?
```

**Observe:** The second response should be more specific and aligned with your project's patterns.

### Exercise 0.5: Try #fetch (3 min)

Reference external documentation:

```
Update my code to follow the latest patterns #fetch https://react.dev/reference/react/useState
```

**Observe:** Copilot retrieves and uses the current documentation.

---

## 🧠 Key Insight: Context Layering

The real power comes from **combining** context primitives:

```
@workspace How is the character data flow organized?

Add a new "favorites" feature to #file:Characters.jsx 
that follows the patterns in #codebase 
and uses the React state management from #fetch https://react.dev/learn/managing-state
```

This single prompt uses:
- `@workspace` — Workspace structure understanding
- `#file` — Target a specific existing file
- `#codebase` — Search for existing patterns to follow
- `#fetch` — Reference external documentation

---

## 📊 Context Primitive Cheat Sheet

### Quick Reference

| Need | Use | Example |
|------|-----|---------|
| Full project understanding | `@workspace` | `@workspace How is X structured?` |
| Specific file | `#file:path` | `Explain #file:src/config.js` |
| Selected code | `#selection` | `Refactor #selection` |
| Search codebase | `#codebase` | `Where is X defined? #codebase` |
| Terminal output | `#terminalLastCommand` | `Why did this fail?` |
| External docs | `#fetch URL` | `Use the API from #fetch URL` |
| GitHub code | `#githubRepo owner/repo` | `How does X work? #githubRepo` |
| VS Code help | `@vscode` | `@vscode How do I configure X?` |
| Current errors | `#problems` | `Fix #problems` |
| Find all usages | `#usages` | `Rename this safely #usages` |
| Test failures | `#testFailure` | `Why did this test fail? #testFailure` |

### Best Practices

1. **Be specific** — `#file:exact/path.js` beats vague references
2. **Combine context** — Layer multiple `#`-mentions for precision
3. **Use @workspace for structure** — When you need to understand project organization
4. **Use #codebase for patterns** — When you want to follow existing conventions
5. **Use #fetch for freshness** — When you need current documentation

---

## ✅ Success Criteria

Before moving on, verify you can:

- [ ] Use `@workspace` to ask questions about your codebase
- [ ] Attach specific files with `#file:path`
- [ ] Reference selected code with `#selection`
- [ ] Search your codebase with `#codebase`
- [ ] Fetch external content with `#fetch URL`
- [ ] Combine multiple context primitives in one prompt

---

## 💡 Why This Matters for Context Engineering

These primitives are the **runtime context**—what you provide in each conversation.

The rest of this workshop focuses on **persistent context**:
- `ARCHITECTURE.md` → So `@workspace` gives better answers
- `copilot-instructions.md` → So every response follows your patterns
- Custom agents → So specialized workflows have the right tools

**Primitives + Persistent Context = Expert-Level AI Assistance**

---

## 📚 Official Docs

- [VS Code: Chat Context](https://code.visualstudio.com/docs/copilot/chat/copilot-chat-context) — Full reference for context management
- [VS Code: Chat Tools](https://code.visualstudio.com/docs/copilot/chat/chat-tools) — Tool references like #fetch
- [VS Code: Copilot Features Reference](https://code.visualstudio.com/docs/copilot/reference/copilot-vscode-features) — Complete feature list

---

## ➡️ Next: Exercise 1

**[Exercise 1: Project-Wide Context →](exercise-1-project-context.md)**

Now that you can provide context in individual prompts, let's make that context **persistent**—so Copilot always has it.

> *"Primitives are powerful, but typing them every time is tedious. Documentation makes context automatic."*
