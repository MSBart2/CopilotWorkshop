# Jordan's Journey: Module 3 - Custom Prompts

> **Your role**: Platform Engineer automating developer workflows  
> **Time**: 30 minutes  
> **Transformation**: From writing shell scripts to intelligent automation

---

## 📖 Your Story in This Module

You automate everything. If it can be scripted, it should be. But you've noticed the team fumbling through git commands every time they finish a feature:

*"Wait, am I on main? I need to create a branch first..."*  
*"What was the command to push and set upstream again?"*  
*"How do I create a PR from the terminal?"*

You've written shell scripts for this before. But they're brittle, hard to maintain, and don't adapt to context. What if you could create intelligent automation that understands what the developer is trying to do?

Today, you'll build a one-word "ship it" button that handles branches, commits, pushes, and PRs—intelligently.

---

## 🎯 Your Exercises

### Exercise 2.4: One-Word Git Workflow ⭐ *You lead this one*

**Your role**: Create an intelligent git automation prompt  
**Time**: 30 minutes  
**[View full exercise →](../EXERCISES.md#exercise-24-one-word-git-workflow--jordans-ship-it-button)**

**What you'll create:**
- `commit.prompt.md` — One-word ship button for git workflows

**Your "before" frustration:**
Developers forget git steps constantly:
1. Check branch (oops, on main)
2. Create feature branch (what name?)
3. Stage changes
4. Write commit message (too vague)
5. Push (forgot --set-upstream)
6. Create PR (what's the gh command?)

You've seen developers accidentally commit to main. You've seen forgotten pushes. You've seen vague commit messages. It's chaos.

**Your "after" automation:**
Type `/commit` and watch:
- ✅ Checks current branch
- ✅ Creates feature branch if needed (smart naming)
- ✅ Generates meaningful commit message
- ✅ Commits and pushes
- ✅ Creates PR with description
- ✅ All in one command

**Your transformation moment:**
> *"I've written shell scripts for this before. But this is better—it's intelligent. It reads the changes and generates appropriate names and messages. And anyone can customize it by editing the prompt."*

---

## 🔗 Connections to Your Work

### Skills You're Building
- **Intelligent automation**: Moving beyond static scripts
- **Context-aware tooling**: Automation that adapts to situations
- **Developer experience**: Making complex workflows simple
- **Knowledge encoding**: Turning manual processes into reusable tools

### How This Helps Your Platform Work

As a platform engineer, you build tools for other developers. Custom prompts are a new kind of tool:
- **More intelligent**: Understands context, not just commands
- **Easier to customize**: Edit markdown, not bash
- **Self-documenting**: The prompt explains what it does
- **Accessible**: Any developer can use them, not just CLI experts

**This changes your role:**
- From "write scripts" to "design intelligent workflows"
- From "fix broken commands" to "encode best practices"
- From "teach git" to "automate git"

---

## 💭 Your Transformation Arc

**Before this module:**
- ⚙️ You write shell scripts for common tasks
- ⚙️ Scripts are brittle and hard to maintain
- ⚙️ Developers still mess up the workflows

**After this module:**
- ✅ You create intelligent prompts that adapt to context
- ✅ Automation is maintainable (just edit markdown)
- ✅ Developers use workflows correctly every time
- ✅ Your automation multiplies across the team

**Key insight:**
> *"Prompts are the next generation of automation. They're not just scripts—they're intelligent assistants that understand what you're trying to do and help you do it right."*

---

## 🚀 Quick Start Guide

**Focused path (30 minutes):**
1. Jump to Exercise 2.4
2. Build the commit prompt
3. Test it on a real change
4. Marvel at intelligent automation

**Extended with challenges (60 minutes):**
1. Complete Exercise 2.4 (30 min)
2. Add test-running functionality (15 min)
3. Add automatic reviewer assignment (15 min)
4. Build other workflow automations

---

## 🎯 Impact on Your Role

### Before Intelligent Automation
- Write and maintain 20+ shell scripts
- Developers still mess up workflows
- Every edge case needs a new script
- Scripts break when commands change

### After Prompt-Based Automation
- Create maintainable markdown prompts
- Automation adapts to context
- Edge cases handled intelligently
- Easy to update and extend

### Real-World Applications

**Deployment automation**: Create prompts that handle deployment workflows intelligently

**Incident response**: Build prompts that guide on-call engineers through diagnosis

**Onboarding**: New hires have prompts that teach best practices while automating tasks

**Tool consolidation**: Replace dozens of scripts with intelligent prompts

---

## 📊 Your Success Metrics

Track these to prove prompt value:

| Metric | Shell Scripts | Prompt-Based |
|--------|---------------|--------------|
| **Accidental commits to main** | 2-3 per week | 0 per week |
| **Forgotten pushes** | 5-10 per week | 0 per week |
| **Unclear commit messages** | 30% | <5% |
| **Time to create PR** | 5-10 min | 30 seconds |

---

## ➡️ Continue Your Journey

### Within This Module
- [View all exercises](../EXERCISES.md) for full team story
- [Elena's path](elena.md) to see test automation
- [Rafael's path](rafael.md) to see requirements automation

### Next Module
Your next appearance: **[Module 4: Custom Instructions](../../04-custom-instructions/personas/jordan.md)**

**What's next for you**: You'll build autonomous agents that handle complex DevOps workflows. If prompts are intelligent automation, agents are autonomous automation.

**Why it matters**: Module 3 taught you to create intelligent prompts. Module 4 teaches you to let AI work autonomously on multi-step tasks.

---

## 📚 Resources for Platform Engineers

**Official Documentation:**
- [VS Code: Reusable Prompts](https://code.visualstudio.com/docs/copilot/copilot-customization#_reusable-prompt-files)
- [GitHub CLI: PR Create](https://cli.github.com/manual/gh_pr_create)
- [Conventional Commits](https://www.conventionalcommits.org/)

**Automation Resources:**
- GitHub Actions for CI/CD prompts
- Deployment workflow patterns
- Incident response playbooks

**Apply to Your Real Work:**
- Create prompts for your deployment processes
- Build intelligent debugging workflows
- Automate incident response procedures

