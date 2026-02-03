# Exercise 0.1: Master Context Variables — "Giving Copilot the Right Information"

## 🔨 Exercise

### Exercise 0.1: Master Context Variables — "The Foundation of Effective AI Collaboration"

**Lead:** Everyone ⭐ | **Time:** 20 min

#### 📖 The Challenge

It's Monday, 9:15 AM. The team just got their first look at the FanHub codebase, and Marcus asks a basic question in Copilot Chat:

> "How do I add a new character to the database?"

Copilot responds with... generic SQL syntax. It doesn't know about FanHub's database schema, the API structure, or the validation rules. It's answering in a vacuum.

**The problem:** Copilot doesn't automatically know about your specific files, architecture, or codebase unless you tell it. The quality of AI responses is directly proportional to the quality of context you provide.

**Context is the difference between:**
- ❌ "Here's generic SQL syntax"
- ✅ "Based on FanHub's schema in `database/schema.sql` and the existing API pattern in `routes/characters.js`, here's how to add a character..."

Before diving into FanHub customization, you need to master the fundamental skill: **providing the right context**.

#### 🎯 Your Goal

Learn to use VS Code's context mechanisms—`#file`, `#codebase`, `@workspace`, `#fetch`, and images—to give Copilot the information it needs to provide accurate, codebase-specific answers.

---

## 🤖 Auto Model Selection

GitHub Copilot automatically selects the best available model based on your subscription, availability, and organizational policies. This means:

- **You don't need to choose a model** — Copilot optimizes for you
- **Pro+ subscribers get 10% discount** on premium requests when using Auto
- **Enterprises can set model policies** — your organization may restrict certain models

Throughout this workshop, we use the default "Auto" setting. If you see different model names in responses (GPT-4.1, Claude Sonnet, etc.), that's Auto at work.

> 💡 **Sarah's Take**: *"I was skeptical about 'auto' anything—usually means 'works until it doesn't.' But this actually saves us money. 10% discount on premium requests adds up when you have 50 developers."*

---

#### 📋 Steps

**1. Understand Implicit vs. Explicit Context**

VS Code automatically includes some context:
- ✅ Currently selected text in the active editor
- ✅ The active file name
- ✅ When using inline chat, the active file contents

But for most questions, you need to explicitly add context using **#-mentions** and **@-mentions**.

**2. Practice: Add Files as Context with `#file`**

Open Copilot Chat and try these prompts:

```
Without context:
"What database tables exist in this project?"

With file context:
"What database tables exist? #file:backend/database/schema.sql"
```

**What to observe:**
- Without context: Copilot guesses or says it doesn't know
- With file: Copilot reads the actual schema and lists the tables

**Try multiple files:**
```
"How do the character routes connect to the database? 
#file:backend/routes/characters.js 
#file:backend/database/connection.js"
```

**3. Practice: Use `@workspace` for Project-Wide Understanding**

When you need Copilot to understand your entire project structure:

```
@workspace What is the overall architecture of this application? 
What technologies are used?
```

**What to observe:**
- `@workspace` searches your entire codebase
- It finds relevant files automatically
- Response is specific to YOUR project, not generic

**4. Practice: Use `#codebase` for Semantic Search**

When you don't know which file contains what you need:

```
#codebase Where is authentication configured?
```

```
#codebase Show me all the API routes related to characters
```

**What to observe:**
- Copilot searches your codebase semantically (by meaning, not just keywords)
- It finds the right files even if you don't know their exact names
- More targeted than `@workspace` when you have a specific question

**5. Practice: Reference External Documentation with `#fetch`**

When you need current documentation from the web:

```
How should I structure React components? 
#fetch https://react.dev/learn/thinking-in-react
```

```
What are the latest Express.js best practices for error handling?
#fetch https://expressjs.com/en/guide/error-handling.html
```

**What to observe:**
- Copilot fetches the actual webpage content
- Responses are based on current, official documentation
- Especially useful for framework updates or new APIs

**6. Practice: Add Images as Context (Vision)**

Take a screenshot of a component or UI design, then drag-and-drop it onto the Chat view:

```
[Drag image of a UI mockup]
"Create a React component that matches this design"
```

Or:
```
[Screenshot of error message]
"What's causing this error and how do I fix it?"
```

**What to observe:**
- Copilot can "see" the image and understand its content
- Great for UI implementation or debugging visual issues

**7. Document Your Learning**

Create `docs/context-practice.md`:

```markdown
# Context Practice Log

## Experiment 1: No Context vs. File Context

**Prompt without context:**
"What database tables exist?"

**Response:**
[Generic or "I don't know"]

**Prompt with context:**
"What database tables exist? #file:backend/database/schema.sql"

**Response:**
[Specific list of FanHub tables]

**Learning:**
File context gives Copilot specific knowledge of my codebase.

---

## Experiment 2: @workspace vs. #codebase

**@workspace prompt:**
"What is the overall architecture?"

**Response:**
[Broad project overview]

**#codebase prompt:**
"Where is authentication configured? #codebase"

**Response:**
[Specific files and configuration]

**Learning:**
@workspace = broad understanding, #codebase = targeted search

---

## Best Context Patterns I Discovered

1. [Your insight]
2. [Your insight]
3. [Your insight]
```

#### ✅ Success Criteria

- [ ] Understand the difference between implicit and explicit context
- [ ] Successfully used `#file` to reference specific files in prompts
- [ ] Used `@workspace` to get project-wide understanding
- [ ] Used `#codebase` to search for specific functionality
- [ ] Used `#fetch` to reference external documentation
- [ ] (Bonus) Used image/screenshot as context
- [ ] Documented at least 3 context experiments in `docs/context-practice.md`
- [ ] Can explain when to use each context mechanism

#### 💡 Context Decision Guide

| When you... | Use... | Example |
|-------------|--------|---------|
| Know the exact file | `#file:path/to/file` | `#file:src/components/Header.jsx` |
| Need project overview | `@workspace` | `@workspace What's the folder structure?` |
| Looking for something specific | `#codebase` | `#codebase Where is error handling?` |
| Need current external docs | `#fetch <URL>` | `#fetch https://react.dev` |
| Have a UI mockup/error screenshot | Drag image to chat | [image] "Implement this design" |
| Working on the current file | Nothing! (implicit) | File is auto-included |

#### 🧠 Mindful Moment: Context is Control

**Priya's realization:** "I thought Copilot was giving bad answers. But it wasn't bad—it just didn't have the information it needed. When I added context, the answers got way better."

**Marcus's insight:** "This is like giving someone directions. 'Go there' is useless. 'Go to 123 Main St using the GPS coordinates and avoid the construction on 5th Avenue' gets results."

**Sarah's validation:** "Context is how you scale expertise. When I add the right files, Copilot gives junior-dev answers. When I add architecture docs and standards, it gives senior-dev answers."

#### 📚 Official Docs

- [Manage Context for AI](https://code.visualstudio.com/docs/copilot/chat/copilot-chat-context) — Complete guide to context mechanisms
- [Chat Tools Reference](https://code.visualstudio.com/docs/copilot/reference/copilot-vscode-features#_chat-tools) — Full list of #-mentions and @-mentions
- [Workspace Context](https://code.visualstudio.com/docs/copilot/reference/workspace-context) — How workspace indexing works

---

## 🔗 What You Learned

**Context mechanisms:**
- `#file` — Reference specific files
- `@workspace` — Project-wide understanding  
- `#codebase` — Semantic search across codebase
- `#fetch` — External documentation
- Images — Visual context for UI or debugging

**The key insight:** 
> "AI quality isn't about the model—it's about the context you provide. Master context, master AI collaboration."

This is **Principle #4: Context is Everything** in action. You'll use these skills in every module going forward.

---

## ➡️ Next Exercise

**[Exercise 0.2: The Character Detail Challenge](exercise-0.2.md)** — Now that you know how to provide context, experience what happens when you build WITHOUT configuration or documentation. Feel the struggle, then we'll fix it in Module 1.
