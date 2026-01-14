# Module 3: Custom Prompts

## ⏰ Monday 12:00 PM — Building Reusable Tools

> *"Every time I write the same prompt explaining how we test, I think: there has to be a better way."*  
> — Elena, watching the team manually re-type similar prompts for the fifth time

---

## 📖 The Story

Module 1 gave the team **foundations**: David documented the architecture, Sarah created team standards in `copilot-instructions.md`. Module 2 introduced **structured thinking**: The team used plan mode to build the Character Detail page—transforming a frustrating 45-minute struggle into a systematic 20-minute success.

Now Sarah notices something: Everyone keeps writing the same kinds of prompts over and over.

- Elena explains testing requirements each time she asks for tests
- Rafael describes the same acceptance criteria format for every feature
- Marcus types the same "create an endpoint" instructions repeatedly
- And soon they'll need Episode Detail, Show Detail, Quote Detail pages...

*"What if we could save these prompts and share them?"* Sarah asks. *"Like functions, but for AI instructions. The Character Detail page took real planning—what if we captured that pattern so we never have to plan it again?"*

**This module's mission**: Create a prompt library that turns repetitive work into reusable tools. The ultimate goal: encode the Character Detail pattern so every future detail page takes 3 minutes instead of 20.

---

## 🎯 Learning Objectives

By the end of this module, you will:

- Create reusable prompt files (`.github/prompts/`)
- Use variables to make prompts flexible
- Reference documentation in prompts for consistent context
- Experience multi-modal workflows (VS Code + GitHub.com)

**Time**: ~90 minutes (or follow your persona's focused path for less)  
**Featured Personas**: Elena (QA), Rafael (Product), Marcus (DevOps)

---

## 🧠 Mindful Moment: Prompts Are Functions

Think about how code evolved:
- **1950s**: Repeat the same assembly instructions everywhere
- **1960s**: Functions let you write once, call many times
- **2020s**: Prompts are the new functions—but most people are still copy-pasting

The teams that win with AI are building **prompt libraries**, not typing the same instructions repeatedly.

---

## 📚 Key Concepts

### Custom Prompt Files

GitHub Copilot can use prompt files stored in `.github/prompts/`. These files:
- Are written in Markdown
- Can include variables (`{{variable_name}}`)
- Can reference other files
- Are shareable across the team

**How to use them:**
1. Create `.github/prompts/my-prompt.prompt.md`
2. In Copilot Chat, type `/` and select your prompt
3. Fill in any variables
4. Execute with full context

> 📂 **Reference Examples**: See [`examples/completed-config/.github/prompts/`](../../examples/completed-config/.github/prompts/) for sample prompt files including test generators, spec-to-implementation, and the Golden Thread detail page pattern.

### Chat Participants

Copilot Chat has specialized "participants" you can invoke:
- `@workspace` — Understands your entire project
- `@vscode` — Knows about VS Code features and settings
- `@terminal` — Can run and explain terminal commands

Combine these with prompt files for powerful workflows.

### Multi-Modal: VS Code + GitHub.com

Copilot isn't just in your editor. On GitHub.com:
- **PR Reviews**: Ask Copilot to review your code changes
- **Issue Analysis**: Get implementation suggestions from issue descriptions
- **Code Search**: Natural language queries across repositories

We'll use both modes in this module.

---

## 🎯 Choose Your Path

### Option 1: Follow Your Persona

Pick the path that matches your role and interests:

- **[Elena's Path](personas/elena.md)** — Test generation and quality assurance (60 min)
- **[Rafael's Path](personas/rafael.md)** — Requirements translation and specifications (60 min)
- **[Marcus's Path](personas/marcus.md)** — Backend API patterns and git workflow automation (60 min)

Each persona path includes:
- Your focused exercises
- Collaboration points with other personas
- Your specific transformation arc

### Option 2: Experience the Full Story

Work through all exercises in narrative order to experience the full team journey:

**[View All Exercises →](EXERCISES.md)**

This path includes:
- Complete team collaboration narrative
- All four persona perspectives
- Full module content (~90 minutes)

### Option 3: Quick Navigator

Jump directly to specific exercises:

| Exercise | Lead Persona | Time | Topic |
|----------|--------------|------|-------|
| [3.1](EXERCISES.md#exercise-31-create-a-test-prompt-library--elenas-quality-toolkit) | Elena | 30 min | Test generation prompts |
| [3.2](EXERCISES.md#exercise-32-spec-to-code-prompts--rafael-bridges-the-gap) | Rafael | 30 min | Requirements translation |
| [3.3](EXERCISES.md#exercise-33-build-the-episode-guide--the-team-collaborates) | Team | 45 min | Episode Guide + **Golden Thread pattern** 🧵 |
| [3.4](EXERCISES.md#exercise-34-one-word-git-workflow--marcuss-ship-it-button) | Marcus | 30 min | Git automation |

---

## 📚 Official Documentation

- [VS Code: Reusable Prompts](https://code.visualstudio.com/docs/copilot/copilot-customization#_reusable-prompt-files)
- [VS Code: Chat Participants](https://code.visualstudio.com/docs/copilot/copilot-chat#_chat-participants)
- [GitHub Docs: Custom Prompts](https://docs.github.com/en/copilot/customizing-copilot/adding-custom-prompts-for-github-copilot)
- [GitHub Docs: Copilot in PRs](https://docs.github.com/en/copilot/using-github-copilot/using-copilot-in-github)

---

## ➡️ Next Up

**[Module 4: Custom Instructions](../04-custom-instructions/README.md)** (Monday 2:00 PM)

The team has patterns, documentation, and prompts. Now it's time to let Copilot work autonomously. David will create an Architecture Reviewer agent, Marcus will build DevOps automation, and we'll explore how agents can run in the background while you work on other things.

---

## ✅ Module Checklist

Before moving forward, verify:

- [ ] `.github/prompts/` directory exists with at least 6 prompts
- [ ] Created `create-detail-page.prompt.md` (the Golden Thread pattern) 🧵
- [ ] Prompts use variables for flexibility
- [ ] Prompts reference existing documentation
- [ ] Successfully invoked prompts from Copilot Chat
- [ ] Generated Episode Detail page using the detail page prompt
- [ ] Updated `character-detail-challenge.md` with Module 03 metrics
- [ ] Tested PR summary generation on GitHub.com

> 📂 **Compare Your Work**: See [`examples/completed-config/.github/prompts/`](../../examples/completed-config/.github/prompts/) to compare your prompts against the reference examples.

