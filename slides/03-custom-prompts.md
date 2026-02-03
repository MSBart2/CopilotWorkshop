---
theme: default
background: https://source.unsplash.com/collection/94734566/1920x1080
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Module 3: Custom Prompts
  CopilotWorkshop Training
drawings:
  persist: false
transition: slide-left
title: Module 3 - Custom Prompts
mdc: true
---

# Module 3: Custom Prompts
## ⏰ The Repetition Problem

<div class="pt-12">
  <span class="text-6xl">🔁</span>
</div>

<div class="abs-br m-6 flex gap-2">
  <span class="text-sm opacity-50">CopilotWorkshop Training</span>
</div>

---

# 📖 The Story

<div class="text-left px-12">

Elena has typed the same prompt **five times** today:

*"Generate tests following our standards in copilot-instructions.md, include edge cases, use Jest patterns from examples..."*

**The problem:** Copy-paste prompts lose context, waste time, create inconsistency

**The insight:** Your best prompts should be **functions** you can invoke instantly

</div>

---

# 🎯 Learning Objectives

<div class="grid grid-cols-1 gap-4 text-left px-12">

**What you'll learn:**
- Create reusable `.prompt.md` files that act like functions
- Configure YAML frontmatter to control agent behavior
- Reference documentation so prompts stay current

**Time:** ~20 minutes | **Exercises:** 3

**Key capability:**
Prompt files turn repetitive typing into **instant invocation** — standardize practices across the team

</div>

---
layout: two-cols
---

# ❌ The "Before"

<div class="bg-red-50 dark:bg-red-900 p-6 rounded-lg">

**Repeated prompt typing:**
- 3 minutes per invocation
- 5 invocations per day
- Inconsistent standards (forgot a step)
- Copy-paste errors

**Result:** 15 min/day wasted, quality varies by who typed it

</div>

::right::

# ✨ The "After"

<div class="bg-green-50 dark:bg-green-900 p-6 rounded-lg">

**Prompt file invocation:**
- 0.1 minutes (type `/test-suite`)
- Same 5 invocations
- 100% consistent standards
- Zero typing errors

**Result:** 14.5 min/day saved, standardized quality

</div>

---

# 💡 Understanding Prompt Files

<div class="text-left px-12">

**Prompt files** are Markdown files with `.prompt.md` extension that define reusable prompts:

**Key characteristics:**
- **On-demand execution** — Type `/prompt-name` to invoke
- **YAML frontmatter** — Configure agent, model, tools
- **Reference docs** — Link to standards that stay current
- **Two scopes** — Workspace (`.github/prompts/`) or User (personal)
- **Variables** — Use `${file}`, `${selection}`, `${input:name}`

**Think of them as functions:**
- Accept inputs (variables)
- Execute once
- Return consistent results

</div>

---

# 📚 Prompt File Structure

<div class="grid grid-cols-2 gap-8 px-8">

<div class="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg">
  <h3 class="text-xl font-bold mb-4">Header (YAML)</h3>
  <pre class="text-xs">---
name: test-suite
description: Generate tests
agent: 'agent'
model: 'GPT-4o'
tools: ['codebase']
---</pre>
</div>

<div class="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg">
  <h3 class="text-xl font-bold mb-4">Body (Prompt)</h3>
  <pre class="text-xs">Generate test suite for ${file}

Following:
- [Standards](../.github/copilot-instructions.md)
- [Examples](../fanhub/frontend/__tests__/README.md)

Include edge cases</pre>
</div>

</div>

---

# 👥 Key Personas

<div class="grid grid-cols-2 gap-8 mt-8">

<div class="persona-card p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 rounded-lg">
  <div class="text-4xl mb-2">👩‍💻</div>
  <h3 class="text-xl font-bold">Elena</h3>
  <p class="text-sm opacity-75">QA Engineer · 8 years</p>
  <blockquote class="mt-4 text-sm italic">
    "I typed the test generation prompt 5 times per day—3 minutes each. Now `/test-suite` takes 6 seconds. That's 14.5 minutes saved daily."
  </blockquote>
</div>

<div class="persona-card p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900 dark:to-purple-800 rounded-lg">
  <div class="text-4xl mb-2">👨‍💼</div>
  <h3 class="text-xl font-bold">Sarah</h3>
  <p class="text-sm opacity-75">Senior Engineer · 15 years</p>
  <blockquote class="mt-4 text-sm italic">
    "React review prompt links to our standards—when standards evolve, prompts automatically reference the latest version."
  </blockquote>
</div>

</div>

---

# 🔨 Exercises

| # | Exercise | Lead | Time |
|---|----------|------|------|
| **3.1** | Creating Your First Prompt File | Elena ⭐ | 8 min |
| **3.2** | Referencing Standards and Docs | Sarah ⭐ | 7 min |
| **3.3** | Variable-Driven Prompts | Marcus ⭐ | 5 min |

**Key metrics:**
- Time per invocation: **3 min → 0.1 min** (96% reduction)
- Typing errors: **Occasional → Zero**
- Standards consistency: **Variable → 100%**

---

# 📊 Success Metrics

<div class="grid grid-cols-3 gap-4 mt-8 px-8">

<div class="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900 dark:to-green-800 rounded-lg">
  <div class="text-4xl font-bold text-green-600 dark:text-green-300">96%</div>
  <div class="text-sm mt-2">Time saved</div>
  <div class="text-xs opacity-75 mt-1">3 min → 0.1 min per use</div>
</div>

<div class="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 rounded-lg">
  <div class="text-4xl font-bold text-blue-600 dark:text-blue-300">14.5</div>
  <div class="text-sm mt-2">Minutes saved per day</div>
  <div class="text-xs opacity-75 mt-1">5 invocations daily</div>
</div>

<div class="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900 dark:to-purple-800 rounded-lg">
  <div class="text-4xl font-bold text-purple-600 dark:text-purple-300">100%</div>
  <div class="text-sm mt-2">Standards consistency</div>
  <div class="text-xs opacity-75 mt-1">No missed steps</div>
</div>

</div>

---

# 💭 Transformation Quote

<div class="flex items-center justify-center h-full">
  <blockquote class="text-2xl italic text-center px-16">
    "I was typing the same test generation prompt 5 times per day—3 minutes of careful typing each time. Now `/test-suite` takes 6 seconds and always includes our standards. That's 72 minutes per week back, and perfect consistency across the team."
    <footer class="text-lg mt-8 opacity-75">— Elena, QA Engineer</footer>
  </blockquote>
</div>

---

# 🔗 Compounding Value

<div class="text-left px-12">

**Module 1 foundation enables Module 3:**
- Prompt files reference `copilot-instructions.md` and `ARCHITECTURE.md`
- Standards evolve once, prompts automatically use latest version

**Module 3 enables future modules:**
- Prompts become reusable building blocks for workflows
- Custom agents (Module 7) can invoke prompts programmatically
- Team knowledge captured in invokable functions

**The multiplication effect:**
- One person documents best practice → entire team uses it instantly

</div>

---

# ➡️ Next Up

<div class="text-left px-12">

**Module 4: Custom Instructions**

You love prompt files for specific tasks. But you're still explaining the same context in every chat session:

*"Remember, this is a React frontend with TypeScript..."*

Module 4 shows how to make Copilot automatically apply different instructions based on **what you're editing** — no manual invocation required.

</div>

---
layout: end
---

# Module 3 Complete! 🎉

**You've learned:**
- ✅ Creating reusable `.prompt.md` files
- ✅ Configuring frontmatter for agent control
- ✅ Referencing standards that stay current

**Next:** [Module 4: Custom Instructions](04-custom-instructions.md)

Automatic context based on what you're editing
