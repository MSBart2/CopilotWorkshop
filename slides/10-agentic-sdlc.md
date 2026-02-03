---
theme: default
background: https://source.unsplash.com/collection/94734566/1920x1080
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Module 10: Agentic SDLC
  CopilotWorkshop Training
drawings:
  persist: false
transition: slide-left
title: Module 10 - Agentic SDLC
mdc: true
---

# Module 10: Agentic SDLC
## ⏰ Background Agent Power

<div class="pt-12">
  <span class="text-6xl">🔄</span>
</div>

<div class="abs-br m-6 flex gap-2">
  <span class="text-sm opacity-50">CopilotWorkshop Training</span>
</div>

---

# 📖 The Story

<div class="text-left px-12">

Marcus has mastered interactive agents (Modules 1-7), web workflows (Module 8), and CLI automation (Module 9).

**The question:** What if agents could work **completely autonomously** in the background while I start the next task?

**The breakthrough:** **Background agents** with Git worktree isolation — agents handle well-defined work independently while you focus on planning, architecture, and integration

</div>

---

# 🎯 Learning Objectives

<div class="grid grid-cols-1 gap-4 text-left px-12">

**What you'll learn:**
- Transition from interactive planning to autonomous background execution
- Use Git worktrees for conflict-free isolated agent work
- Implement complete development workflows without supervision

**Time:** ~60 minutes | **Exercises:** 3

**Key capability:**
**Autonomous execution** — agents work independently from planning to completion while you move to the next challenge

</div>

---
layout: two-cols
---

# ❌ The "Before"

<div class="bg-red-50 dark:bg-red-900 p-6 rounded-lg">

**Sequential supervised development:**
- 45 min planning + 60 min coding (supervised)
- 90 min rollback when experiments fail
- 30 min per manual code review

**Result:** 105 min total, constant supervision needed

</div>

::right::

# ✨ The "After"

<div class="bg-green-50 dark:bg-green-900 p-6 rounded-lg">

**Autonomous background execution:**
- 45 min planning → autonomous execution (parallel)
- 5 min rollback (worktree isolation)
- 2 min automated architecture review

**Result:** 22 min active time, zero supervision

</div>

---

# 💡 Understanding Background Agents

<div class="text-left px-12">

**Background agents** run completely autonomously on your local machine:

**Key capabilities:**
- **Git worktree isolation** — Agents work in separate folders, preventing conflicts
- **Custom agent personas** — Your defined agents run autonomously
- **Hand-off workflows** — Seamless transition from planning to execution
- **Session management** — Monitor multiple agents from VS Code

**The breakthrough:**
You define **what** needs to be done → agents handle **all implementation details** independently → you work on the next task in parallel

</div>

---

# 📚 Hand-off Workflow Pattern

<div class="text-left px-12">

The most powerful pattern: **Plan interactively → Execute autonomously**

**1. Plan phase** — Interactive, collaborative
- Use plan agent to clarify requirements
- Validate architectural approach
- Confirm scope and constraints

**2. Hand-off** — Transition context
- Pass complete plan to background agent
- Agents receives full conversation history

**3. Autonomous execution** — No supervision
- Agent implements independently
- Works in isolated Git worktree
- You start next task immediately

**4. Integration** — Review when ready
- Check completed work
- Merge or discard based on quality

</div>

---

# 👥 Key Personas

<div class="grid grid-cols-3 gap-6 mt-8">

<div class="persona-card p-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 rounded-lg text-sm">
  <div class="text-3xl mb-2">👨‍💼</div>
  <h3 class="text-lg font-bold">Rafael</h3>
  <p class="text-xs opacity-75">Product Visionary</p>
  <blockquote class="mt-2 text-xs italic">
    "Planning → autonomous background execution. 105 minutes supervised work became 45 minutes active, rest parallel."
  </blockquote>
</div>

<div class="persona-card p-4 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900 dark:to-purple-800 rounded-lg text-sm">
  <div class="text-3xl mb-2">👨‍💻</div>
  <h3 class="text-lg font-bold">Marcus</h3>
  <p class="text-xs opacity-75">DevOps Developer</p>
  <blockquote class="mt-2 text-xs italic">
    "Git worktrees—experiment with confidence. 90 minutes rollback became 5 minutes, risk-free exploration."
  </blockquote>
</div>

<div class="persona-card p-4 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900 dark:to-green-800 rounded-lg text-sm">
  <div class="text-3xl mb-2">👨‍💼</div>
  <h3 class="text-lg font-bold">David</h3>
  <p class="text-xs opacity-75">Staff Engineer</p>
  <blockquote class="mt-2 text-xs italic">
    "Autonomous architecture review—30 minutes manual work to 2 minutes automated, 100% consistent standards."
  </blockquote>
</div>

</div>

---

# 🔨 Exercises

| # | Exercise | Lead | Time |
|---|----------|------|------|
| **10.1** | Plan-to-Background Handoff | Rafael ⭐ | 25 min |
| **10.2** | Isolated Worktree Experiments | Marcus ⭐ | 20 min |
| **10.3** | Autonomous Architecture Review | David ⭐ | 15 min |

**Key metrics:**
- Active development time: **105 → 45 min** (57% reduction)
- Rollback time: **90 → 5 min** (94% reduction)
- Code review: **30 → 2 min** (93% reduction)

---

# 📊 Success Metrics

<div class="grid grid-cols-3 gap-4 mt-8 px-8">

<div class="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900 dark:to-green-800 rounded-lg">
  <div class="text-4xl font-bold text-green-600 dark:text-green-300">4x</div>
  <div class="text-sm mt-2">Active time reduction</div>
  <div class="text-xs opacity-75 mt-1">Autonomous execution</div>
</div>

<div class="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 rounded-lg">
  <div class="text-4xl font-bold text-blue-600 dark:text-blue-300">94%</div>
  <div class="text-sm mt-2">Faster rollback</div>
  <div class="text-xs opacity-75 mt-1">Worktree isolation</div>
</div>

<div class="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900 dark:to-purple-800 rounded-lg">
  <div class="text-4xl font-bold text-purple-600 dark:text-purple-300">0</div>
  <div class="text-sm mt-2">Supervision required</div>
  <div class="text-xs opacity-75 mt-1">Fully autonomous</div>
</div>

</div>

---

# 💭 Transformation Quote

<div class="flex items-center justify-center h-full">
  <blockquote class="text-2xl italic text-center px-16">
    "Planning used to block implementation—45 minutes planning plus 60 minutes supervised coding. Now I plan for 45 minutes, hand off to background agent, and start the next task immediately. Work happens in parallel. That's 4x active time reduction through autonomous execution."
    <footer class="text-lg mt-8 opacity-75">— Rafael, Product Visionary</footer>
  </blockquote>
</div>

---

# 🔗 Compounding Value

<div class="text-left px-12">

**Modules 1-9 enable Module 10:**
- Background agents use repository instructions (Module 1)
- Invoke agent skills (Module 5) autonomously
- Connect to MCP servers (Module 6) without supervision
- Execute CLI workflows (Module 9) programmatically

**Module 10 enables future modules:**
- Organizational patterns (Module 11) for scaling autonomous work
- Governance hooks (Module 12) for validating autonomous actions
- Complete lifecycle automation across all interfaces

**The autonomy effect:**
Interactive guidance → Autonomous execution → True parallelism

</div>

---

# ➡️ Next Up

<div class="text-left px-12">

**Module 11: Enterprise Patterns**

You've proven agents can work autonomously for **individual tasks**. Now the question:

*"How do we scale this across an entire engineering organization without losing control?"*

Module 11 shows organization-wide adoption patterns, governance frameworks, and metrics for validating enterprise-scale AI adoption.

</div>

---
layout: end
---

# Module 10 Complete! 🎉

**You've learned:**
- ✅ Transitioning to autonomous background execution
- ✅ Using Git worktrees for conflict-free isolation
- ✅ Implementing workflows without supervision

**Next:** [Module 11: Enterprise Patterns](11-enterprise-patterns.md)

Scaling autonomous AI across organizations
