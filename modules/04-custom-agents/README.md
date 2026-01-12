# Module 4: Custom Agents

## ⏰ Monday 1:30 PM — Autonomous Assistance

> *"I've been asking Copilot questions all morning. What if I could tell it: 'Go solve this problem, and let me know when you're done?'"*  
> — David, imagining a world where AI handles the tedious parts

---

## 🎯 Learning Objectives

By the end of this module, you will:

- Understand the difference between Chat, Edit, and Agent modes
- Create custom agents with specialized capabilities
- Use MCP (Model Context Protocol) for extended functionality
- Experience Copilot CLI for terminal workflows
- Run background agents on complex tasks

**Time**: ~60 minutes  
**Personas**: David (Architect), Jordan (Platform Engineer), Marcus (DevOps)

---

## 🧭 Choose Your Path

<table>
<tr>
<td width="33%" valign="top">

### 🎭 By Persona
*Focused on your role*

**[David's Path →](personas/david.md)**  
Architecture reviewer, executable checklists  
*~45 minutes*

**[Marcus's Path →](personas/marcus.md)**  
Agent workflows, autonomous implementation  
*~30 minutes*

**[Jordan's Path →](personas/jordan.md)**  
DevOps reviewer, infrastructure agents  
*~25 minutes*

</td>
<td width="33%" valign="top">

### 📖 Full Story
*Complete narrative*

**[EXERCISES.md →](EXERCISES.md)**  
All exercises in story order  
*~60 minutes*

Best for: First-time learners, instructor-led sessions

</td>
<td width="33%" valign="top">

### ⚡ Quick Navigator
*Jump to what you need*

| Exercise | Focus | Time |
|----------|-------|------|
| [4.1](EXERCISES.md#exercise-41-character-detail-v2--the-golden-thread-agent-implementation) | Golden Thread + Agent Mode | 25m |
| [4.2](EXERCISES.md#exercise-42-create-a-custom-agent--davids-architecture-reviewer) | Custom Agents | 20m |
| [4.3](EXERCISES.md#exercise-43-background-agents--the-refactor-task) | Background Agents | 15m |

</td>
</tr>
</table>

---

## 📚 Key Concepts

### Copilot Modes

VS Code Copilot has three modes:

1. **Ask Mode** (Default)
   - Conversational Q&A
   - Explains code, answers questions
   - You apply suggestions manually

2. **Edit Mode**
   - Direct file manipulation
   - Copilot proposes changes
   - You review diff before accepting

3. **Agent Mode**
   - Autonomous problem-solving
   - Can create files, run commands, iterate
   - Works until task is complete or blocked

### Custom Agents

You can create specialized agents that:
- Have specific instructions and context
- Use designated tools and capabilities
- Focus on particular domains (testing, security, DevOps)

### MCP (Model Context Protocol)

MCP extends what agents can do:
- Connect to external data sources
- Run specialized tools
- Access services beyond the code editor

### Copilot CLI

The new Copilot CLI brings AI agent capabilities to your terminal:
- **Interactive mode** — Start with `copilot` for conversations
- **Task execution** — Make file changes, run commands, create PRs
- **GitHub integration** — Work with issues, PRs, and workflows
- **Programmatic mode** — Use `-p` for scripted automation

> 📘 See [Module 9: GitHub Copilot CLI](../09-copilot-cli/README.md) for full coverage.

---

## 🧠 Mindful Moment: From Assistant to Colleague

Think about the evolution:

| Era | Interaction | Who Does the Work |
|-----|-------------|-------------------|
| **Chat** | Q&A | Human orchestrates, AI suggests |
| **Edit** | Direct manipulation | AI makes targeted changes |
| **Agent** | Delegation | AI works autonomously, human reviews |

We're moving from "Copilot answers my questions" to "Copilot solves my problems."

The key insight: **Trust is earned through transparency.** Agents work autonomously, but they show their work. You review before accepting.

---

## 🎭 Behind the Scenes: How Agents Work

### The Agent Loop

When you use Agent Mode, here's what happens:

1. **Planning**: Agent analyzes your request and workspace
2. **Execution**: Agent takes actions (create files, edit code, run commands)
3. **Observation**: Agent checks the results of its actions
4. **Iteration**: If something failed, agent tries to fix it
5. **Completion**: Agent reports results for your review

### Tool Use

Agents have access to "tools" that let them:
- Read files from your workspace
- Create new files
- Edit existing files
- Run terminal commands
- Search the web (with permission)

### Trust Boundaries

Agents ask permission before:
- Running destructive commands
- Making changes outside the workspace
- Accessing external services

This is the balance: autonomous enough to be useful, controlled enough to be safe.

---

## ✅ Module Checklist

Before moving to Module 5, verify:

- [ ] Understand the difference between Chat, Edit, and Agent modes
- [ ] Successfully used Agent Mode for a complete task
- [ ] Created at least one custom agent
- [ ] Understand when to use agents vs interactive chat
- [ ] Reviewed agent-generated code before accepting

---

## 🔗 Compounding Value

**What we create in this module:**
- Experience with Agent Mode workflows
- `architecture-reviewer.agent.md` — Custom review agent
- `devops-reviewer.agent.md` — Infrastructure review agent

**Artifacts from previous modules we use:**
- `docs/ARCHITECTURE.md` — Referenced by agents
- `.github/copilot-instructions.md` — Agent behavior patterns
- Prompt library — Foundation for agent instructions

---

## 📚 Official Documentation

- [VS Code: Agent Mode](https://code.visualstudio.com/docs/copilot/chat/chat-agent-mode)
- [VS Code: Custom Agents](https://code.visualstudio.com/docs/copilot/chat/copilot-extensibility-overview)
- [GitHub Copilot CLI](https://docs.github.com/en/copilot/using-github-copilot/using-github-copilot-in-the-command-line)
- [VS Code: MCP Servers](https://code.visualstudio.com/docs/copilot/chat/mcp-servers)

---

## ➡️ Next Up

**[Module 5: Custom Instructions](../05-custom-instructions/README.md)** (Monday 2:30 PM)

The backend is solid. Standards are established. Agents are working. Now it's time to add file-scoped intelligence—instructions that activate automatically based on file patterns.
