# Jordan's Path: Copilot CLI

## 🎯 Your Focus: Terminal Automation with AI Agents

Jordan, this module gives your automation expertise a new dimension. Copilot CLI isn't just command suggestions—it's a full AI agent in your terminal that can execute multi-step tasks, create scripts, and integrate with your DevOps workflows.

**Your exercises**: 1 (Installation), 4 (Programmatic Mode)  
**Time**: ~30 minutes  
**Theme**: From manual multi-step tasks to scripted AI automation

---

## Your Journey in This Module

```
Jordan's Arc:
┌─────────────────────────────────────────────────────────────────┐
│  "Each morning routine task requires manual execution"          │
│                         ↓                                       │
│  Installs Copilot CLI, learns programmatic mode                 │
│                         ↓                                       │
│  "I scripted my morning standup prep with AI in 5 minutes"      │
└─────────────────────────────────────────────────────────────────┘
```

---

## Exercise 1: CLI Installation & Setup — "Your Terminal Agent"

### 📖 The Story

**Jordan** automates everything—if it can be scripted, it should be. He's heard about the new Copilot CLI that can actually execute tasks, not just suggest commands. 

*"An AI agent in my terminal? That's either amazing or terrifying,"* he thinks.

Today he's setting up Copilot CLI to find out.

### ❌ The "Before" — What Frustration Looks Like

Without Copilot CLI:
- Multi-step tasks require manual execution of each step
- Context-switching between terminal, browser, and editor
- Automation scripts take hours to write
- GitHub operations require learning gh CLI syntax

### 🎯 Objective

Install and configure GitHub Copilot CLI, verifying it works with a test interaction.

### 📋 Steps

1. **Install Copilot CLI**

   ```bash
   # macOS
   brew install github/copilot-cli/copilot
   
   # Windows (winget)
   winget install GitHub.CopilotCLI
   ```

2. **Authenticate with GitHub**

   ```bash
   copilot auth login
   ```

3. **Start your first interactive session**

   ```bash
   copilot
   ```
   
   Trust the directory when prompted.

4. **Ask Copilot something simple**

   ```
   What files are in this directory?
   ```
   
   Copilot will ask permission to run `ls`—this is the **tool approval** system.

5. **Try a slash command**

   ```
   /help
   ```

6. **Exit the session**

   ```
   /exit
   ```

### ✅ Success Criteria

- [ ] Copilot CLI installed and authenticated
- [ ] Started an interactive session
- [ ] Experienced the tool approval workflow
- [ ] Used a slash command

### 📚 Official Docs

- [Installing GitHub Copilot CLI](https://docs.github.com/en/copilot/how-tos/set-up/install-copilot-cli)
- [About GitHub Copilot CLI](https://docs.github.com/en/copilot/concepts/agents/about-copilot-cli)

### 💭 Jordan's Reaction

*"It asked for permission before running commands. That's not just AI assistance—that's a proper agent with guardrails. I can work with this."*

---

## Exercise 4: Programmatic Mode — "Automating with AI"

### 📖 The Story

**Jordan** has a daily standup ritual: check what the team committed yesterday, review any failed CI runs, and list PRs that need review. Each of these is a manual workflow.

With Copilot CLI's programmatic mode, he can script these tasks.

### ❌ The "Before" — What Frustration Looks Like

Without programmatic AI:
- Manual multi-step morning routines
- Scripts require precise command syntax
- Output parsing is tedious
- Each new task needs new tooling

### 🎯 Objective

Use Copilot CLI's `-p` flag to create scripted, automated workflows.

### 📋 Steps

1. **Understand programmatic mode**

   Instead of interactive sessions, pass a prompt directly:
   ```bash
   copilot -p "What time is it?"
   ```
   
   Copilot will answer and exit.

2. **Add tool approvals for automation**

   For scripts, pre-approve tools:
   ```bash
   copilot -p "List all files modified today" --allow-tool 'shell(find)'
   ```

3. **Create a morning summary script**

   Create `morning-summary.sh`:
   ```bash
   #!/bin/bash
   
   echo "=== Yesterday's Commits ==="
   copilot -p "Show commits from the last 24 hours with author and summary" \
     --allow-tool 'shell(git)'
   
   echo ""
   echo "=== Open PRs Needing Review ==="
   copilot -p "List PRs in this repo that are open and I haven't reviewed" \
     --allow-tool 'shell(gh)'
   ```

4. **Understand tool approval options**

   | Option | Effect |
   |--------|--------|
   | `--allow-all-tools` | Allow everything (be careful!) |
   | `--allow-tool 'shell(git)'` | Allow only git commands |
   | `--allow-tool 'shell'` | Allow any shell command |
   | `--deny-tool 'shell(rm)'` | Block rm commands |

5. **Combine allow and deny**

   ```bash
   copilot -p "Clean up this project" \
     --allow-all-tools \
     --deny-tool 'shell(rm)' \
     --deny-tool 'shell(git push)'
   ```

6. **Pipe output for further processing**

   ```bash
   copilot -p "List all TODO comments in this codebase" \
     --allow-tool 'shell(grep)' | tee todos.txt
   ```

### ✅ Success Criteria

- [ ] Ran a programmatic (`-p`) command
- [ ] Used `--allow-tool` to pre-approve operations
- [ ] Understand the security implications
- [ ] Created a simple automation script

### ✨ The "After" — The Transformation

**Before programmatic mode**: Manual morning routine, 20 minutes  
**After programmatic mode**: Run `./morning-summary.sh`, 2 minutes

### 📚 Official Docs

- [About GitHub Copilot CLI - Modes of use](https://docs.github.com/en/copilot/concepts/agents/about-copilot-cli#modes-of-use)
- [About GitHub Copilot CLI - Allowed tools](https://docs.github.com/en/copilot/concepts/agents/about-copilot-cli#allowed-tools)

### 💭 Jordan's Transformation

*"Interactive mode is great for exploration. Programmatic mode is great for automation. The tool approval system means I can give it enough rope to be useful without hanging myself. This is exactly what I've been missing—AI that fits into my automation-first workflow."*

---

## 🎯 Jordan's Module Summary

### Your Transformation

| Before | After |
|--------|-------|
| Manual multi-step morning routine | Scripted AI automation |
| Learning gh CLI syntax | Natural language GitHub operations |
| Building custom scripts from scratch | AI generates the logic |
| 20 minutes daily prep | 2 minutes with scripts |

### The DevOps Expert's Win

Your automation expertise is now amplified by:
- **Programmatic mode** for scripted workflows
- **Tool approval** for safe automation
- **Natural language** instead of memorizing syntax
- **GitHub integration** without browser context-switching

### Key Pattern

```bash
# The Jordan pattern: Scripted AI with safety
copilot -p "your task description" \
  --allow-tool 'shell(safe-commands)' \
  --deny-tool 'shell(dangerous-commands)'
```

---

## ➡️ Continue Your Journey

**Next for Jordan**: [Module 10: Agentic SDLC](../10-agentic-sdlc/README.md) — See how CLI automation fits into the full development lifecycle.

**Also relevant**: [Module 6: MCP Servers](../06-mcp-servers/README.md) — Extend Copilot CLI with MCP servers for database and system access.
