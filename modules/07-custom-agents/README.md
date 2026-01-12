# Module 7: Custom Agents — THE PAYOFF

## ⏰ Monday 5:00 PM — The Moment Everything Clicks

> *"We've spent all day building context—instructions, prompts, custom instructions, skills, MCP connections. Now let's see what an agent can do with ALL of that in place."*  
> — David, ready for the payoff

---

## 🎉 This Is the Payoff

**Think about what you've built today:**

| Module | What You Added | What Copilot Gained |
|--------|---------------|---------------------|
| **Module 1** | Repository Instructions | Project context |
| **Module 2** | Plan Mode | Systematic thinking |
| **Module 3** | Custom Prompts | Task templates |
| **Module 4** | Custom Instructions | File-specific patterns |
| **Module 5** | Agent Skills | Domain expertise |
| **Module 6** | MCP Servers | External system access |

**Now, in Module 7**, you'll create an autonomous agent that uses **ALL of this** to build the Character Detail v2 feature—episodes, quotes, related characters, favorites.

Early this morning, Copilot gave generic suggestions. Now? Watch what happens when an agent has complete context.

---

## 🎯 Learning Objectives

By the end of this module, you will:

- Understand the difference between Chat, Edit, and Agent modes
- Create custom agents with specialized capabilities  
- Experience the "payoff" of layered customization
- Use agent mode with full context (instructions + skills + MCP)
- Watch an agent build a complete feature autonomously

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
| [7.1](EXERCISES.md#exercise-71-character-detail-v2--the-golden-thread-payoff) | Golden Thread PAYOFF | 25m |
| [7.2](EXERCISES.md#exercise-72-create-a-custom-agent--davids-architecture-reviewer) | Custom Agents | 20m |
| [7.3](EXERCISES.md#exercise-73-background-agents--the-refactor-task) | Background Agents | 15m |

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

### The Payoff Formula

```
Agent + Instructions + Skills + MCP = AMAZING Results
```

**Without context** (Module 1): Agent makes generic suggestions  
**With full context** (Module 7): Agent builds complete features correctly

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
- **Query databases via MCP** (configured in Module 6!)

### Trust Boundaries

Agents ask permission before:
- Running destructive commands
- Making changes outside the workspace
- Accessing external services

This is the balance: autonomous enough to be useful, controlled enough to be safe.

---

## ✅ Module Checklist

Before moving to Module 8, verify:

- [ ] Understand the difference between Chat, Edit, and Agent modes
- [ ] Successfully used Agent Mode for a complete task
- [ ] Witnessed the "payoff" — agent using full context to build Character Detail v2
- [ ] Created at least one custom agent
- [ ] Understand when to use agents vs interactive chat
- [ ] Reviewed agent-generated code before accepting

---

## 🔗 Compounding Value

**What we create in this module:**
- Experience with Agent Mode workflows
- `architecture-reviewer.agent.md` — Custom review agent
- `devops-reviewer.agent.md` — Infrastructure review agent
- **Character Detail v2** — The golden thread feature, built with full context

**Artifacts from previous modules we use:**
- `docs/ARCHITECTURE.md` — Referenced by agents (Module 1)
- `.github/copilot-instructions.md` — Agent behavior patterns (Module 1)
- Custom prompts — Foundation for agent instructions (Module 3)
- Custom instructions — File-specific patterns (Module 4)
- Agent Skills — Domain expertise (Module 5)
- MCP servers — Database access (Module 6)

---

## 📚 Official Documentation

- [VS Code: Agent Mode](https://code.visualstudio.com/docs/copilot/chat/chat-agent-mode)
- [VS Code: Custom Agents](https://code.visualstudio.com/docs/copilot/chat/copilot-extensibility-overview)
- [GitHub Copilot CLI](https://docs.github.com/en/copilot/using-github-copilot/using-github-copilot-in-the-command-line)
- [VS Code: MCP Servers](https://code.visualstudio.com/docs/copilot/chat/mcp-servers)

---

## ➡️ Next Up

**[Module 8: Copilot Web](../08-copilot-web/README.md)** (Monday 6:00 PM)

The FanHub feature is complete! Now let's explore how Copilot works beyond VS Code—in github.com, web workflows, and browser-based development.

> *"We built something real today. An actual feature, with an autonomous agent, using all the context we created. This is what AI-assisted development looks like when done right."*  
> — Sarah, finally convinced
