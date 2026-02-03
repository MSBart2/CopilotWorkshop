---
theme: default
background: https://source.unsplash.com/collection/94734566/1920x1080
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Module 9: Copilot CLI
  CopilotWorkshop Training
drawings:
  persist: false
transition: slide-left
title: Module 9 - Copilot CLI
mdc: true
---

# Module 9: GitHub Copilot CLI
## ⏰ Command Line Mastery

<div class="pt-12">
  <span class="text-6xl">⌨️</span>
</div>

<div class="abs-br m-6 flex gap-2">
  <span class="text-sm opacity-50">CopilotWorkshop Training</span>
</div>

---

# 📖 The Story

<div class="text-left px-12">

Marcus (DevOps Developer) spends **8 hours a day in terminal windows** — Docker debugging, CI/CD automation, infrastructure management.

**The problem:** AI assistance was locked in the IDE

**The breakthrough:** **Copilot CLI** brings conversational AI directly to command-line workflows

**New capability (Jan 2026):** **Plan Mode** — collaborative planning conversations before code generation, reducing trial-and-error from 8 attempts to 2

</div>

---

# 🎯 Learning Objectives

<div class="grid grid-cols-1 gap-4 text-left px-12">

**What you'll learn:**
- Use interactive Copilot CLI sessions for debugging with Plan Mode
- Create programmatic automation scripts for CI/CD pipelines
- Generate infrastructure documentation from terminal workflows

**Time:** ~45 minutes | **Exercises:** 3

**Key capability:**
Conversational AI integrated into terminal — **Plan Mode** enables collaborative debugging with clarifying questions before execution

</div>

---
layout: two-cols
---

# ❌ The "Before"

<div class="bg-red-50 dark:bg-red-900 p-6 rounded-lg">

**Manual terminal workflows:**
- 45 min Docker debugging
- 8 trial-and-error attempts
- 25 min CI/CD investigation
- 3 days infrastructure docs lag

**Result:** 150+ min/sprint on manual terminal work

</div>

::right::

# ✨ The "After"

<div class="bg-green-50 dark:bg-green-900 p-6 rounded-lg">

**CLI-powered workflows:**
- 8 min Docker debugging (Plan Mode)
- 2 planned attempts
- 5 min automated investigation
- 30 min automated docs

**Result:** 150 → 20 min (87% time saved)

</div>

---

# 💡 Understanding Copilot CLI

<div class="text-left px-12">

**GitHub Copilot CLI** operates in two modes:

**Interactive Mode (`copilot`)**
- Conversational sessions for iterative problem-solving
- **Plan Mode** — Asks clarifying questions before generating solutions
- Maintains context across commands
- Perfect for debugging and exploration

**Programmatic Mode (`copilot -p "prompt"`)**
- Single command execution for scripts and CI/CD
- `--allow-tools` and `--deny-tool` flags control operations
- Designed for automation workflows
- Essential for headless operation

</div>

---

# 🆕 Plan Mode (January 2026)

<div class="text-left px-12">

**Plan Mode transforms CLI from reactive to collaborative:**

**Traditional workflow:** Request → Generate → Review → Fix → Repeat (8 attempts)

**Plan Mode workflow:** Request → **Clarify** → Collaborate → **Review plan** → Generate (2 attempts)

**Key capabilities:**
- **Collaborative planning** — AI asks clarifying questions before building
- **Advanced reasoning** — Access models optimized for complex code reasoning
- **Real-time steering** — Queue follow-ups while AI is generating
- **Cloud delegation** — Background agents for long-running tasks

</div>

---

# 📚 When to Use Each Mode

<div class="grid grid-cols-2 gap-8 px-8 text-sm">

<div class="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg">
  <h3 class="text-xl font-bold mb-4">Plan Mode (Interactive)</h3>
  <ul class="space-y-2">
    <li>✅ Complex debugging (Docker, multi-service)</li>
    <li>✅ Architectural decisions</li>
    <li>✅ Multi-step refactoring</li>
    <li>✅ Learning new systems</li>
  </ul>
</div>

<div class="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg">
  <h3 class="text-xl font-bold mb-4">Direct/Programmatic</h3>
  <ul class="space-y-2">
    <li>✅ CI/CD automation</li>
    <li>✅ Simple one-off operations</li>
    <li>✅ Scripted workflows</li>
    <li>✅ Fast iterations (clear requirements)</li>
  </ul>
</div>

</div>

<div class="mt-4 text-center text-sm opacity-75">
Plan Mode for "figure this out" scenarios, Direct mode for "do this specific thing"
</div>

---

# 👥 Key Personas

<div class="grid grid-cols-3 gap-6 mt-8">

<div class="persona-card p-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 rounded-lg text-sm">
  <div class="text-3xl mb-2">👨‍💻</div>
  <h3 class="text-lg font-bold">Marcus</h3>
  <p class="text-xs opacity-75">DevOps Developer</p>
  <blockquote class="mt-2 text-xs italic">
    "Docker debugging—45 minutes to 8 minutes with Plan Mode. Clarifying questions reduced trial-and-error from 8 to 2."
  </blockquote>
</div>

<div class="persona-card p-4 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900 dark:to-purple-800 rounded-lg text-sm">
  <div class="text-3xl mb-2">👨‍💼</div>
  <h3 class="text-lg font-bold">David</h3>
  <p class="text-xs opacity-75">Staff Engineer</p>
  <blockquote class="mt-2 text-xs italic">
    "Plan Mode's reasoning transparency shows how AI reaches solutions—validates expertise amplification."
  </blockquote>
</div>

<div class="persona-card p-4 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900 dark:to-green-800 rounded-lg text-sm">
  <div class="text-3xl mb-2">👨‍💼</div>
  <h3 class="text-lg font-bold">Rafael</h3>
  <p class="text-xs opacity-75">Product Visionary</p>
  <blockquote class="mt-2 text-xs italic">
    "Infrastructure docs—3 days lag to 30 minutes. Architecture diagrams auto-generated, always current."
  </blockquote>
</div>

</div>

---

# 🔨 Exercises

| # | Exercise | Lead | Time |
|---|----------|------|------|
| **9.1** | Terminal Installation & Docker Workflow (Plan Mode) | Marcus ⭐ | 20 min |
| **9.2** | Scripting CI/CD Automation | Marcus ⭐ | 15 min |
| **9.3** | Infrastructure Documentation Generation | Marcus ⭐ | 10 min |

**Key metrics:**
- Docker debugging: **45 → 8 min** (82% reduction, Plan Mode)
- CI/CD investigation: **25 → 5 min** (80% reduction)
- Infrastructure docs: **3 days → 30 min** (99.7% reduction)

---

# 📊 Success Metrics

<div class="grid grid-cols-3 gap-4 mt-8 px-8">

<div class="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900 dark:to-green-800 rounded-lg">
  <div class="text-4xl font-bold text-green-600 dark:text-green-300">82%</div>
  <div class="text-sm mt-2">Debugging time saved</div>
  <div class="text-xs opacity-75 mt-1">45 → 8 min (Plan Mode)</div>
</div>

<div class="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 rounded-lg">
  <div class="text-4xl font-bold text-blue-600 dark:text-blue-300">75%</div>
  <div class="text-sm mt-2">Trial-and-error reduced</div>
  <div class="text-xs opacity-75 mt-1">8 → 2 attempts</div>
</div>

<div class="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900 dark:to-purple-800 rounded-lg">
  <div class="text-4xl font-bold text-purple-600 dark:text-purple-300">99.7%</div>
  <div class="text-sm mt-2">Docs lag eliminated</div>
  <div class="text-xs opacity-75 mt-1">3 days → 30 min</div>
</div>

</div>

---

# 💭 Transformation Quote

<div class="flex items-center justify-center h-full">
  <blockquote class="text-2xl italic text-center px-16">
    "Build failures used to take 45 minutes—15 to reproduce, 30 to trace dependencies. With Plan Mode, the AI asks 'Should I check configs or logs first?' That clarification reduced debugging from 8 trial-and-error attempts to 2 planned attempts. 37 minutes saved per failure."
    <footer class="text-lg mt-8 opacity-75">— Marcus, DevOps Developer</footer>
  </blockquote>
</div>

---

# 🔗 Compounding Value

<div class="text-left px-12">

**Modules 1-7 enable Module 9:**
- CLI inherits repository instructions and agent skills
- Custom agents can be invoked from terminal workflows
- MCP servers accessible in CLI sessions

**Module 9 enables future modules:**
- Terminal workflows script into CI/CD pipelines
- Autonomous agents (Module 10) leverage CLI capabilities
- Complete AI toolkit: IDE + Web + Terminal

**The completion effect:**
Every interface where you work → AI assistance ready

</div>

---

# ➡️ Next Up

<div class="text-left px-12">

**Module 10: Agentic SDLC**

You've mastered interactive agents (Modules 1-7), web workflows (Module 8), and CLI automation (Module 9).

Now discover: **Background agents** that work completely autonomously using Git worktrees for isolation — while you focus on the next task.

</div>

---
layout: end
---

# Module 9 Complete! 🎉

**You've learned:**
- ✅ Interactive CLI sessions with Plan Mode
- ✅ Programmatic automation for CI/CD
- ✅ Infrastructure documentation generation

**Next:** [Module 10: Agentic SDLC](10-agentic-sdlc.md)

Autonomous background agent workflows
