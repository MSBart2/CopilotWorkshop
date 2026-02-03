---
theme: default
background: https://source.unsplash.com/collection/94734566/1920x1080
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Module 2: Agent Plan Mode
  CopilotWorkshop Training
drawings:
  persist: false
transition: slide-left
title: Module 2 - Agent Plan Mode
mdc: true
---

# Module 2: Agent Plan Mode
## ⏰ The Complexity Problem

<div class="pt-12">
  <span class="text-6xl">📋</span>
</div>

<div class="abs-br m-6 flex gap-2">
  <span class="text-sm opacity-50">CopilotWorkshop Training</span>
</div>

---

# 📖 The Story

<div class="text-left px-12">

Marcus stares at a feature request: **Character detail page** spanning frontend, backend, and database.

**The problem:** Where do I even start?

- 6+ files to touch
- Multiple layers (UI, API, DB)
- Unclear dependencies
- Risk of missing requirements

**Before Module 2:** Jump straight to coding → realize you missed dependencies → refactor or start over

</div>

---

# 🎯 Learning Objectives

<div class="grid grid-cols-1 gap-4 text-left px-12">

**What you'll learn:**
- Use plan agent to research complex multi-file features **before** implementing
- Validate AI-generated plans with your architectural expertise
- Execute implementations with confidence after planning

**Time:** ~25 minutes | **Exercises:** 3

**Key capability:**
Plan mode separates **research** from **execution** — catch issues during planning, not PR review

</div>

---
layout: two-cols
---

# ❌ The "Before"

<div class="bg-red-50 dark:bg-red-900 p-6 rounded-lg">

**Manual feature planning:**
- 35 minutes analyzing context
- Reading 8+ files manually
- 5 missed dependencies per sprint
- Architectural conflicts surface during PR review

**Result:** Wasted implementation time, 2-3 review cycles

</div>

::right::

# ✨ The "After"

<div class="bg-green-50 dark:bg-green-900 p-6 rounded-lg">

**Plan agent research:**
- 7 minutes AI analysis
- Automatic file discovery
- 1 missed dependency per sprint
- Conflicts caught during planning

**Result:** Implementation confidence, 1 review cycle

</div>

---

# 💡 Understanding Plan Agent

<div class="text-left px-12">

The **plan agent** is a specialized mode that researches before implementing:

**Key features:**
- **Read-only research** — No code changes until you approve
- **Structured output** — Summary, steps, open questions, dependencies
- **Iterative refinement** — Stay in plan mode to adjust before coding
- **Flexible execution** — Execute whole plan, specific steps, or save for review

**How it uses your foundation:**
- Reads `ARCHITECTURE.md` for tech stack and structure
- Follows `.github/copilot-instructions.md` standards
- Analyzes existing code patterns

</div>

---

# 📚 Key Concepts

<div class="grid grid-cols-2 gap-8 px-8">

<div class="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg">
  <h3 class="text-xl font-bold mb-4">Plan-First Workflow</h3>
  <ol class="text-sm">
    <li>Ask plan agent to research</li>
    <li>Review the plan draft</li>
    <li>Iterate on the plan</li>
    <li>Execute with confidence</li>
  </ol>
</div>

<div class="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg">
  <h3 class="text-xl font-bold mb-4">Plan Output Includes</h3>
  <ul class="text-sm">
    <li>High-level summary</li>
    <li>Ordered implementation steps</li>
    <li>Open questions to clarify</li>
    <li>Dependencies and order</li>
  </ul>
</div>

</div>

---

# 👥 Key Personas

<div class="grid grid-cols-2 gap-8 mt-8">

<div class="persona-card p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 rounded-lg">
  <div class="text-4xl mb-2">👨‍💼</div>
  <h3 class="text-xl font-bold">Marcus</h3>
  <p class="text-sm opacity-75">DevOps Developer · 5 years</p>
  <blockquote class="mt-4 text-sm italic">
    "Feature planning used to take 35 minutes of manual analysis. Plan agent gets me a validated roadmap in 7 minutes."
  </blockquote>
</div>

<div class="persona-card p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900 dark:to-purple-800 rounded-lg">
  <div class="text-4xl mb-2">👨‍💼</div>
  <h3 class="text-xl font-bold">David</h3>
  <p class="text-sm opacity-75">Staff Engineer · 20 years</p>
  <blockquote class="mt-4 text-sm italic">
    "AI generates plans fast, but I catch what it misses. Plan mode lets me validate the approach before writing code."
  </blockquote>
</div>

</div>

---

# 🔨 Exercises

| # | Exercise | Lead | Time |
|---|----------|------|------|
| **2.1** | Invoking Plan Mode | Marcus ⭐ | 10 min |
| **2.2** | Validating and Refining Plans | David ⭐ | 8 min |
| **2.3** | Executing Plans | Marcus ⭐ | 7 min |

**Key metrics:**
- Planning time: **35 → 7 minutes** (80% reduction)
- Missed dependencies: **5 → 1 per sprint**
- Architectural issues caught: **During planning, not PR review**

---

# 📊 Success Metrics

<div class="grid grid-cols-3 gap-4 mt-8 px-8">

<div class="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900 dark:to-green-800 rounded-lg">
  <div class="text-4xl font-bold text-green-600 dark:text-green-300">80%</div>
  <div class="text-sm mt-2">Planning time saved</div>
  <div class="text-xs opacity-75 mt-1">35 → 7 minutes</div>
</div>

<div class="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 rounded-lg">
  <div class="text-4xl font-bold text-blue-600 dark:text-blue-300">80%</div>
  <div class="text-sm mt-2">Fewer dependencies missed</div>
  <div class="text-xs opacity-75 mt-1">5 → 1 per sprint</div>
</div>

<div class="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900 dark:to-purple-800 rounded-lg">
  <div class="text-4xl font-bold text-purple-600 dark:text-purple-300">50%</div>
  <div class="text-sm mt-2">Review cycles reduced</div>
  <div class="text-xs opacity-75 mt-1">2 → 1 average</div>
</div>

</div>

---

# 💭 Transformation Quote

<div class="flex items-center justify-center h-full">
  <blockquote class="text-2xl italic text-center px-16">
    "Plan mode separates research from execution. I used to spend 35 minutes manually analyzing dependencies. Now the plan agent does comprehensive research in 7 minutes, and I focus on validating the approach with my architectural knowledge."
    <footer class="text-lg mt-8 opacity-75">— Marcus, DevOps Developer</footer>
  </blockquote>
</div>

---

# 🔗 Compounding Value

<div class="text-left px-12">

**Module 1 foundation enables Module 2:**
- Plan agent automatically reads `ARCHITECTURE.md` for tech stack context
- Follows `.github/copilot-instructions.md` standards in proposed plans
- Analyzes existing code to match your patterns

**Module 2 enables future modules:**
- Plans become documentation of **why** code exists
- Validated approaches can be saved as **prompt templates** (Module 3)
- Complex workflows benefit from planning phase before execution

</div>

---

# ➡️ Next Up

<div class="text-left px-12">

**Module 3: Custom Prompts**

You've used plan mode to research features. Now you've typed the same prompt five times:

*"Generate tests following our standards."*

Module 3 shows how to turn repeated prompts into **reusable, invokable functions** that save typing time and standardize team practices.

</div>

---
layout: end
---

# Module 2 Complete! 🎉

**You've learned:**
- ✅ Using plan agent for multi-file feature research
- ✅ Validating AI plans with architectural expertise
- ✅ Executing implementations with confidence

**Next:** [Module 3: Custom Prompts](03-custom-prompts.md)

Turn your best prompts into reusable functions
