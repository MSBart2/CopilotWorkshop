---
theme: default
background: https://source.unsplash.com/collection/94734566/1920x1080
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Module 4: Custom Instructions
  CopilotWorkshop Training
drawings:
  persist: false
transition: slide-left
title: Module 4 - Custom Instructions
mdc: true
---

# Module 4: Custom Instructions
## ⏰ The Context Problem

<div class="pt-12">
  <span class="text-6xl">📂</span>
</div>

<div class="abs-br m-6 flex gap-2">
  <span class="text-sm opacity-50">CopilotWorkshop Training</span>
</div>

---

# 📖 The Story

<div class="text-left px-12">

Elena switches between files—Python needs PEP 8, JavaScript needs Airbnb style, tests need different patterns than production code.

**The problem:** Copilot treats everything the same

**The insight:** Different files need **different guidance** — automatically applied based on what you're editing

</div>

---

# 🎯 Learning Objectives

<div class="grid grid-cols-1 gap-4 text-left px-12">

**What you'll learn:**
- Create path-based `.instructions.md` files that auto-apply
- Use glob patterns to target specific files/directories
- Layer context-specific rules on top of global defaults

**Time:** ~25 minutes | **Exercises:** 3

**Key capability:**
Instructions automatically activate based on file patterns — right guidance, right time, zero manual switching

</div>

---
layout: two-cols
---

# ❌ The "Before"

<div class="bg-red-50 dark:bg-red-900 p-6 rounded-lg">

**Context mismatch:**
- Frontend gets backend patterns
- 3 min/file correcting context
- 15 files/sprint affected
- Inconsistent conventions

**Result:** 45 min/sprint wasted fixing wrong patterns

</div>

::right::

# ✨ The "After"

<div class="bg-green-50 dark:bg-green-900 p-6 rounded-lg">

**Automatic context:**
- Frontend gets UI patterns
- 0 min correction needed
- All files get right guidance
- 100% convention consistency

**Result:** Zero wasted time, automatic accuracy

</div>

---

# 💡 Understanding .instructions.md Files

<div class="text-left px-12">

**`.instructions.md` files** are path-based custom instructions that conditionally apply:

**Key characteristics:**
- **Conditional application** — Use `applyTo` glob patterns
- **Multiple files** — Create as many as needed for different contexts
- **Automatic activation** — No manual invocation required
- **Layered with global** — Combined with `copilot-instructions.md`
- **Two scopes** — Workspace (`.github/instructions/`) or User (profile)

**How they differ:**
- `copilot-instructions.md` → Always active, all files
- `.prompt.md` → Manual invocation via `/name`
- `.instructions.md` → Auto-activated by file pattern

</div>

---

# 📚 Glob Pattern Examples

<div class="grid grid-cols-2 gap-6 px-8 text-sm">

<div class="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
  <h3 class="font-bold mb-2">Common Patterns</h3>
  <ul class="space-y-1">
    <li><code>**/*.py</code> → All Python files</li>
    <li><code>**/__tests__/**</code> → All test directories</li>
    <li><code>frontend/src/**</code> → All frontend files</li>
    <li><code>**/*.{ts,tsx}</code> → TypeScript files</li>
  </ul>
</div>

<div class="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
  <h3 class="font-bold mb-2">Use Cases</h3>
  <ul class="space-y-1">
    <li>Python-specific standards (PEP 8)</li>
    <li>Testing conventions (mocking, coverage)</li>
    <li>UI patterns (React, accessibility)</li>
    <li>Type safety rules (TypeScript)</li>
  </ul>
</div>

</div>

<div class="mt-4 text-center text-sm opacity-75">
Edit <code>frontend/src/App.tsx</code> → both <code>frontend.instructions.md</code> and <code>typescript.instructions.md</code> apply
</div>

---

# 👥 Key Personas

<div class="grid grid-cols-2 gap-8 mt-8">

<div class="persona-card p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 rounded-lg">
  <div class="text-4xl mb-2">👨‍💼</div>
  <h3 class="text-xl font-bold">Sarah</h3>
  <p class="text-sm opacity-75">Senior Engineer · 15 years</p>
  <blockquote class="mt-4 text-sm italic">
    "Frontend files automatically get React patterns, backend files get API standards. Zero context correction, 45 minutes per sprint saved."
  </blockquote>
</div>

<div class="persona-card p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900 dark:to-purple-800 rounded-lg">
  <div class="text-4xl mb-2">👩‍💻</div>
  <h3 class="text-xl font-bold">Elena</h3>
  <p class="text-sm opacity-75">QA Engineer · 8 years</p>
  <blockquote class="mt-4 text-sm italic">
    "Python files get PEP 8, JavaScript gets Airbnb style—automatically. Language-specific standards enforced without thinking about it."
  </blockquote>
</div>

</div>

---

# 🔨 Exercises

| # | Exercise | Lead | Time |
|---|----------|------|------|
| **4.1** | Layer-Specific Instructions | Sarah ⭐ | 10 min |
| **4.2** | Language-Specific Standards | Elena ⭐ | 8 min |
| **4.3** | File-Type Specialized Guidance | Marcus ⭐ | 7 min |

**Key metrics:**
- Context correction time: **3 min/file → 0 min/file**
- Sprint time saved: **45 min → 0 min**
- Convention consistency: **Variable → 100%**

---

# 📊 Success Metrics

<div class="grid grid-cols-3 gap-4 mt-8 px-8">

<div class="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900 dark:to-green-800 rounded-lg">
  <div class="text-4xl font-bold text-green-600 dark:text-green-300">100%</div>
  <div class="text-sm mt-2">Context accuracy</div>
  <div class="text-xs opacity-75 mt-1">Right patterns, every file</div>
</div>

<div class="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 rounded-lg">
  <div class="text-4xl font-bold text-blue-600 dark:text-blue-300">45</div>
  <div class="text-sm mt-2">Minutes saved per sprint</div>
  <div class="text-xs opacity-75 mt-1">Zero context correction</div>
</div>

<div class="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900 dark:to-purple-800 rounded-lg">
  <div class="text-4xl font-bold text-purple-600 dark:text-purple-300">0</div>
  <div class="text-sm mt-2">Manual switches</div>
  <div class="text-xs opacity-75 mt-1">Automatic activation</div>
</div>

</div>

---

# 💭 Transformation Quote

<div class="flex items-center justify-center h-full">
  <blockquote class="text-2xl italic text-center px-16">
    "Frontend files used to get backend patterns—3 minutes per file fixing context mismatches. Now frontend.instructions.md applies automatically when I edit UI code. That's 45 minutes per sprint back, and zero mental overhead tracking what context I need."
    <footer class="text-lg mt-8 opacity-75">— Sarah, Senior Engineer</footer>
  </blockquote>
</div>

---

# 🔗 Compounding Value

<div class="text-left px-12">

**Module 1 foundation enables Module 4:**
- `.github/copilot-instructions.md` provides baseline
- Path-based instructions add specialized context on top

**Module 4 enables future modules:**
- Agents (Module 7) benefit from automatic context matching
- Skills (Module 5) work better with file-type-specific guidance
- The whole system gets smarter with layered context

**The layer effect:**
- General (copilot-instructions) + Specific (path-based) = Complete guidance

</div>

---

# ➡️ Next Up

<div class="text-left px-12">

**Module 5: Agent Skills**

Instructions tell Copilot **how to behave**, but what if you need it to do something it **doesn't know how to do**?

Like validate against your custom API schema, or check specific deployment requirements?

Module 5 shows how to teach Copilot **new capabilities** through Agent Skills.

</div>

---
layout: end
---

# Module 4 Complete! 🎉

**You've learned:**
- ✅ Creating path-based `.instructions.md` files
- ✅ Using glob patterns to target specific files
- ✅ Layering context automatically

**Next:** [Module 5: Agent Skills](05-agent-skills.md)

Teaching Copilot new domain-specific capabilities
