---
theme: default
background: https://source.unsplash.com/collection/94734566/1920x1080
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Module 13: Context Engineering
  CopilotWorkshop Training
drawings:
  persist: false
transition: slide-left
title: Module 13 - Context Engineering
mdc: true
---

# Module 13: Context Engineering
## ⏰ The Context Engineering Challenge

<div class="pt-12">
  <span class="text-6xl">🎯</span>
</div>

<div class="abs-br m-6 flex gap-2">
  <span class="text-sm opacity-50">CopilotWorkshop Training</span>
</div>

---

# 📖 The Story

<div class="text-left px-12">

Sarah has created instructions (Module 1), custom prompts (Module 3), path-based rules (Module 4), agent skills (Module 5), custom agents (Module 7).

**The problem:** Every new chat starts from zero—10 minutes explaining architecture before anything useful happens

**The insight:** **Context engineering** orchestrates all capabilities into a unified workflow that compounds knowledge across planning → implementation → review

</div>

---

# 🎯 Learning Objectives

<div class="grid grid-cols-1 gap-4 text-left px-12">

**What you'll learn:**
- Curate project-wide context (PRODUCT.md, ARCHITECTURE.md, CONTRIBUTING.md)
- Build planning agent workflow with structured templates
- Create implementation agent with handoffs that preserve context

**Time:** ~60 minutes | **Exercises:** 3

**Key capability:**
Context engineering eliminates **context cliffs** throughout development workflow — planning → implementation transitions preserve all decisions and constraints

</div>

---
layout: two-cols
---

# ❌ The "Before"

<div class="bg-red-50 dark:bg-red-900 p-6 rounded-lg">

**Context rebuilding:**
- 10-15 min per new chat explaining architecture
- 30 min re-explaining after planning
- Inconsistent architectural decisions
- Tests added as afterthought (40% gaps)

**Result:** Context loss wastes 60+ min/sprint

</div>

::right::

# ✨ The "After"

<div class="bg-green-50 dark:bg-green-900 p-6 rounded-lg">

**Persistent context:**
- 0 min setup (docs referenced automatically)
- 0 min context rebuild (handoffs preserve)
- 100% consistent decisions
- Tests-first by default (95%+ coverage)

**Result:** Zero context overhead, compounding knowledge

</div>

---

# 💡 Understanding Context Engineering

<div class="text-left px-12">

**Context engineering** systematically provides AI with targeted project information:

**The three-step workflow:**
1. **Curate Context** — Create living project documentation
2. **Create Plan** — Build planning agent with clarification workflow
3. **Generate Code** — Implementation agent inherits full context via handoffs

**How it differs from previous modules:**
- Module 1: Repository-wide instructions (baseline)
- Module 4: Path-specific instructions (contextual)
- Module 7: Custom agents (workflow)
- **Module 13: Integration layer** — orchestrating all pieces together

</div>

---

# 📚 The Three-Step Workflow

<div class="grid grid-cols-3 gap-6 px-8 text-xs">

<div class="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
  <h3 class="text-lg font-bold mb-3">1. Curate Context</h3>
  <p class="mb-2 font-semibold">Purpose:</p>
  <p class="mb-2 opacity-75">Ground AI in project specifics</p>
  <p class="font-semibold">Artifacts:</p>
  <ul class="text-xs space-y-1 opacity-75">
    <li>PRODUCT.md</li>
    <li>ARCHITECTURE.md</li>
    <li>CONTRIBUTING.md</li>
    <li>Updated copilot-instructions.md</li>
  </ul>
</div>

<div class="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
  <h3 class="text-lg font-bold mb-3">2. Create Plan</h3>
  <p class="mb-2 font-semibold">Purpose:</p>
  <p class="mb-2 opacity-75">Break down requirements</p>
  <p class="font-semibold">Artifacts:</p>
  <ul class="text-xs space-y-1 opacity-75">
    <li>Planning agent</li>
    <li>Plan template</li>
    <li>Clarification prompts</li>
    <li>Implementation plans</li>
  </ul>
</div>

<div class="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
  <h3 class="text-lg font-bold mb-3">3. Generate Code</h3>
  <p class="mb-2 font-semibold">Purpose:</p>
  <p class="mb-2 opacity-75">Implement with guidance</p>
  <p class="font-semibold">Artifacts:</p>
  <ul class="text-xs space-y-1 opacity-75">
    <li>Implementation agent</li>
    <li>TDD workflow</li>
    <li>Handoff configuration</li>
    <li>Test-first code</li>
  </ul>
</div>

</div>

---

# 👥 Key Personas

<div class="grid grid-cols-3 gap-6 mt-8">

<div class="persona-card p-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 rounded-lg text-sm">
  <div class="text-3xl mb-2">👨‍💼</div>
  <h3 class="text-lg font-bold">David</h3>
  <p class="text-xs opacity-75">Staff Engineer</p>
  <blockquote class="mt-2 text-xs italic">
    "Documented patterns once—45 minutes. Now every AI interaction starts with 15 years of wisdom."
  </blockquote>
</div>

<div class="persona-card p-4 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900 dark:to-purple-800 rounded-lg text-sm">
  <div class="text-3xl mb-2">👨‍💼</div>
  <h3 class="text-lg font-bold">Rafael</h3>
  <p class="text-xs opacity-75">Product Visionary</p>
  <blockquote class="mt-2 text-xs italic">
    "Planning agent transformed stakeholder communication—3 days to 15 minutes for implementation plans."
  </blockquote>
</div>

<div class="persona-card p-4 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900 dark:to-green-800 rounded-lg text-sm">
  <div class="text-3xl mb-2">👩‍💻</div>
  <h3 class="text-lg font-bold">Elena</h3>
  <p class="text-xs opacity-75">QA Engineer</p>
  <blockquote class="mt-2 text-xs italic">
    "TDD agent with handoffs—tests-first by default, coverage went from 40% to 95%+."
  </blockquote>
</div>

</div>

---

# 🔨 Exercises

| # | Exercise | Lead | Time |
|---|----------|------|------|
| **13.1** | Curating Project-Wide Context | David ⭐ | 25 min |
| **13.2** | Building a Planning Agent | Rafael ⭐ | 20 min |
| **13.3** | Implementation Agent with Handoffs | Elena ⭐ | 15 min |

**Key metrics:**
- Context setup: **15 min → 0 min** (automatic)
- Planning time: **3 days → 15 min** (98% reduction)
- Test coverage: **40% → 95%+** (tests-first)

---

# 📊 Success Metrics

<div class="grid grid-cols-3 gap-4 mt-8 px-8">

<div class="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900 dark:to-green-800 rounded-lg">
  <div class="text-4xl font-bold text-green-600 dark:text-green-300">100%</div>
  <div class="text-sm mt-2">Context preserved</div>
  <div class="text-xs opacity-75 mt-1">Zero context cliffs</div>
</div>

<div class="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 rounded-lg">
  <div class="text-4xl font-bold text-blue-600 dark:text-blue-300">98%</div>
  <div class="text-sm mt-2">Planning time saved</div>
  <div class="text-xs opacity-75 mt-1">3 days → 15 min</div>
</div>

<div class="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900 dark:to-purple-800 rounded-lg">
  <div class="text-4xl font-bold text-purple-600 dark:text-purple-300">95%</div>
  <div class="text-sm mt-2">Test coverage</div>
  <div class="text-xs opacity-75 mt-1">Tests-first workflow</div>
</div>

</div>

---

# 💭 Transformation Quote

<div class="flex items-center justify-center h-full">
  <blockquote class="text-2xl italic text-center px-16">
    "Context engineering turned my architectural knowledge into persistent AI memory. I documented patterns once—45 minutes—and now every AI interaction starts with 15 years of accumulated wisdom. Review cycles dropped from 3 to 1 because violations are caught during generation."
    <footer class="text-lg mt-8 opacity-75">— Sarah, Skeptical Senior → Context Engineering Advocate</footer>
  </blockquote>
</div>

---

# 🔗 The Complete Integration

<div class="text-left px-12 text-sm">

**Module 13 orchestrates everything:**

| Module | Capability | Context Engineering Role |
|--------|-----------|-------------------------|
| 1 | Repository instructions | Foundation layer (always available) |
| 4 | Custom instructions | Contextual layer (file-specific) |
| 7 | Custom agents | Workflow layer (planning/implementation) |
| **13** | **Context engineering** | **Integration layer (orchestration)** |

**The compound effect:**
- Planning agent references architecture docs (Module 1)
- Implementation agent follows path-based standards (Module 4)
- Handoffs preserve context across phases (Module 7)
- **The whole is greater than the sum of its parts**

</div>

---

# 🎉 Training Complete!

<div class="text-left px-12">

**You've completed the full journey:**
- Module 1: Repository Instructions → Team consistency
- Module 7: Custom Agents → Role-based presets
- Module 11: Enterprise Patterns → Organizational scaling
- **Module 13: Context Engineering → Unified orchestration**

**What you've become:**
Not just a developer who uses AI tools, but an **architect of AI-augmented development systems**

**Remember:** The skill is no longer just coding—it's **AI-augmented problem solving** with clarity over cleverness

</div>

---
layout: end
---

# Congratulations! 🎉

**You've mastered:**
- ✅ Curating project-wide context
- ✅ Building planning agent workflows
- ✅ Creating implementation agents with handoffs
- ✅ Eliminating context cliffs across dev lifecycle

**You are now:** An architect of AI-augmented systems

**Key insight:** AI amplifies clarity—the better you express what you want, the better AI helps
