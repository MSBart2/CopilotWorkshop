# Module 9: GitHub Copilot CLI for Build & Test Workflows

## ⏰ 6:00 PM — Terminal Mastery

> *"I just spent 20 minutes running tests manually, fixing failures one by one, only to have CI fail on something I forgot to check. There has to be a better way."*  
> — Marcus, frustrated after another CI failure

---

## 📖 The Story

Marcus is stuck in a painful cycle:
1. Make changes
2. Manually run tests
3. Fix failures one by one
4. Push to CI
5. Discover he forgot to run linting
6. Fix, push again
7. Repeat

Marcus gets fed up with reading cryptic stack traces: *"There has to be a better way. Let me show you what a CLI agent can do for your build/test cycle."*

What follows is Marcus showing the team the terminal workflows that make him highly productive—interactive AI sessions that handle testing, debugging, coverage checks, and pre-push validation.

---

## 🎯 Learning Objectives

By the end of this module, you will:

- Install and configure GitHub Copilot CLI for interactive agent sessions
- Debug test failures conversationally without reading stack traces manually
- Run smart test selection based on code changes
- Automate pre-push health checks to never break CI again
- Generate tests for new code through conversation
- Debug broken builds and dependencies interactively
- Drive test coverage improvements with agent assistance
- Create morning health check routines

**Time**: ~75-90 minutes  
**Primary Personas**: Marcus (DevOps Developer), David (Architect), Elena (QA)

---

## 💡 Why CLI for Build & Test?

**The Problem:** Developers spend hours in terminals running build/test commands manually:
- `npm test` → read failures → fix → repeat
- Forget to run linting before pushing
- CI catches issues your local checks missed
- Debugging broken builds means reading cryptic error messages

**The Solution:** An interactive AI agent in your terminal that:
- Understands test failures and explains them
- Runs only relevant tests for your changes
- Automates pre-push validation
- Generates tests conversationally
- Debugs build issues with you

---

## 🧠 Mindful Moment: The Terminal as Conversation

Traditional terminal use is command-response:
```bash
$ npm test
[wall of output]
$ # read, think, decide next command
$ npm test -- character.test.js
```

**CLI agent sessions are conversations:**
```bash
$ copilot
> Run tests for files I changed
[agent analyzes git diff, runs relevant tests]

> That test failed. Why?
[agent explains the failure]

> Fix it
[agent proposes changes]
```

You're not memorizing commands—you're describing intent.

---

## 📚 Key Concepts

### The Interactive Session Model

| Traditional CLI | GitHub Copilot CLI Agent |
|----------------|-------------------------|
| One command at a time | Multi-turn conversation |
| Read output manually | Agent explains results |
| Memorize syntax | Describe intent |
| Sequential execution | Iterative problem-solving |

### How It Works

1. **Start a session**: `copilot`
2. **Trust the directory**: Agent asks permission first time
3. **Converse naturally**: Describe what you want
4. **Approve actions**: Agent asks before executing
5. **Iterate**: Keep refining until done

### Tool Approval System

The agent will ask permission before:
- Running shell commands
- Modifying files
- Installing packages
- Pushing to git

You can approve per-action or for the session.

---

## 🔨 Exercises

> 📂 **Full exercise content**: [EXERCISES.md](./EXERCISES.md)

| Exercise | Focus | Time | Description |
|----------|-------|------|-------------|
| [9.1](EXERCISES.md#exercise-91-your-first-agent-session--the-test-failure-detective) | First Session | 10 min | Debug a test failure conversationally |
| [9.2](EXERCISES.md#exercise-92-smart-test-selection--only-run-what-matters) | Smart Testing | 12 min | Run only relevant tests for your changes |
| [9.3](EXERCISES.md#exercise-93-pre-push-health-check--never-break-ci-again) | Pre-Push Checks | 12 min | Automate all checks CI would run |
| [9.4](EXERCISES.md#exercise-94-test-generation-in-conversation) | Test Generation | 15 min | Generate tests through dialogue |
| [9.5](EXERCISES.md#exercise-95-build-debugging-session) | Build Debugging | 12 min | Fix broken dependencies interactively |
| [9.6](EXERCISES.md#exercise-96-coverage-driven-development) | Coverage Improvement | 12 min | Drive coverage up with agent help |
| [9.7](EXERCISES.md#exercise-97-morning-health-check-routine) | Daily Routine | 10 min | Automate your morning workflow |
| [9.8](EXERCISES.md#exercise-98-architecture-analysis-from-terminal--davids-quick-queries) | Architecture Analysis | 12 min | David's quick dependency queries |

---

## 🧑‍💼 Choose Your Path

| Your Role | Recommended Focus | Start Here |
|-----------|------------------|------------|
| **DevOps/Developer** | Build, test, debug workflows | [Marcus's Path](./personas/marcus.md) |
| **Architect** | Dependency analysis, quick queries | [David's Path](./personas/david.md) |
| **Senior Developer** | Issue triage, validation | [Sarah's Path](./personas/sarah.md) |

---

## 📚 Installation

### Install GitHub Copilot CLI

```bash
# macOS
brew install github/copilot-cli/copilot

# Windows
winget install GitHub.CopilotCLI

# Linux (download from releases)
# https://github.com/github/copilot-cli/releases
```

### Authenticate

```bash
copilot auth login
```

Follow the prompts to authenticate via browser.

### Verify Installation

```bash
copilot --version
```

---

## 📚 Official Documentation

- [About GitHub Copilot CLI](https://docs.github.com/en/copilot/concepts/agents/about-copilot-cli)
- [Installing GitHub Copilot CLI](https://docs.github.com/en/copilot/how-tos/set-up/install-copilot-cli)
- [Using GitHub Copilot CLI](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/use-copilot-cli)

---

## ➡️ Next Up

**[Module 10: Agentic SDLC](../10-agentic-sdlc/README.md)** — Orchestrate all your AI tools together

> *"We've learned each tool individually—VS Code, GitHub.com, CLI. Now let's see how they work together in a complete development workflow."*  
> — The team, ready to ship

---

## ✅ Module Checklist

Before moving on, verify:

- [ ] GitHub Copilot CLI installed and authenticated
- [ ] Ran at least one interactive session with `copilot`
- [ ] Experienced the tool approval workflow
- [ ] Used agent conversation to debug or test code
- [ ] Understand when CLI agents excel vs other interfaces
- [ ] Created at least one reusable workflow pattern
