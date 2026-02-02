---
theme: default
background: https://source.unsplash.com/collection/94734566/1920x1080
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Module 5: Agent Skills
  CopilotWorkshop Training
drawings:
  persist: false
transition: slide-left
title: Module 5 - Agent Skills
mdc: true
---

# Module 5: Agent Skills
## ⏰ The Capability Gap

<div class="pt-12">
  <span class="text-6xl">🎓</span>
</div>

<div class="abs-br m-6 flex gap-2">
  <span class="text-sm opacity-50">CopilotWorkshop Training</span>
</div>

---

# 📖 The Story

<div class="text-left px-12">

David needs to validate code against FanHub's **TV show API schema**. Elena wants to generate tests using the team's **custom test template**. Marcus needs deployment scripts that check **FanHub's infrastructure requirements**.

**The problem:** Instructions tell Copilot *how* to work, but can't teach it *new tasks* requiring specialized knowledge

**The insight:** Skills = instructions + scripts + examples + resources

</div>

---

# 🎯 Learning Objectives

<div class="grid grid-cols-1 gap-4 text-left px-12">

**What you'll learn:**
- Create Agent Skills that teach specialized workflows
- Structure skill folders with scripts, examples, templates
- Use progressive disclosure for efficient context loading

**Time:** ~30 minutes | **Exercises:** 3

**Key capability:**
Skills teach Copilot **complete workflows** for domain-specific tasks beyond basic coding guidelines

</div>

---
layout: two-cols
---

# ❌ The "Before"

<div class="bg-red-50 dark:bg-red-900 p-6 rounded-lg">

**Manual specialized work:**
- 12 min/endpoint explaining standards
- Schema mismatches require 8 min rework
- 25 min/bug writing reproduction tests
- Inconsistent patterns across team

**Result:** 80 min/sprint on specialized tasks

</div>

::right::

# ✨ The "After"

<div class="bg-green-50 dark:bg-green-900 p-6 rounded-lg">

**Skill-powered workflows:**
- 2 min/endpoint (skill knows schema)
- 0 schema mismatches
- 4 min/bug (template-driven)
- 100% pattern consistency

**Result:** 80 min → 12 min (85% time saved)

</div>

---

# 💡 Understanding Agent Skills

<div class="text-left px-12">

**Agent Skills** are folders containing instructions, scripts, examples, and resources:

**Key characteristics:**
- **Complete workflows** — Not just instructions, but executable components
- **Progressive loading** — Discovery → Instructions → Resources (on-demand)
- **Portable standard** — Works across VS Code, CLI, and Coding Agent (agentskills.io)
- **Automatic activation** — Copilot loads when task matches description
- **Composable** — Multiple skills work together for complex workflows

**How they differ:**
- Instructions = behavior guidelines
- Skills = new capabilities (instructions + executable resources)

</div>

---

# 📚 Skill Directory Structure

<div class="grid grid-cols-2 gap-8 px-8">

<div class="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg text-sm">
  <h3 class="text-lg font-bold mb-4">Basic Structure</h3>
  <pre class="text-xs">.github/skills/
  api-endpoint-design/
    SKILL.md              # Required
    openapi-schema.yaml   # Optional
    example-endpoints/    # Optional
      get-character.js</pre>
</div>

<div class="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg text-sm">
  <h3 class="text-lg font-bold mb-4">SKILL.md Format</h3>
  <pre class="text-xs">---
name: api-endpoint-design
description: Design REST API endpoints
---

# Instructions

When designing endpoints...

## References
[Example](./example-endpoints/)</pre>
</div>

</div>

---

# 👥 Key Personas

<div class="grid grid-cols-3 gap-6 mt-8">

<div class="persona-card p-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 rounded-lg text-sm">
  <div class="text-3xl mb-2">👨‍💼</div>
  <h3 class="text-lg font-bold">Sarah</h3>
  <p class="text-xs opacity-75">Senior Engineer</p>
  <blockquote class="mt-2 text-xs italic">
    "API design skill cut endpoint creation from 12 minutes to 2 minutes—zero schema mismatches."
  </blockquote>
</div>

<div class="persona-card p-4 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900 dark:to-purple-800 rounded-lg text-sm">
  <div class="text-3xl mb-2">👩‍💻</div>
  <h3 class="text-lg font-bold">Elena</h3>
  <p class="text-xs opacity-75">QA Engineer</p>
  <blockquote class="mt-2 text-xs italic">
    "Bug reproduction test skill—25 minutes to 4 minutes. Template-driven, edge cases included."
  </blockquote>
</div>

<div class="persona-card p-4 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900 dark:to-green-800 rounded-lg text-sm">
  <div class="text-3xl mb-2">👨‍💻</div>
  <h3 class="text-lg font-bold">Marcus</h3>
  <p class="text-xs opacity-75">DevOps Developer</p>
  <blockquote class="mt-2 text-xs italic">
    "Build analyzer skill—30 minutes debugging to 2 minutes root cause ID."
  </blockquote>
</div>

</div>

---

# 🔨 Exercises

| # | Exercise | Lead | Time |
|---|----------|------|------|
| **5.1** | API Endpoint Design Skill | Sarah ⭐ | 12 min |
| **5.2** | Bug Reproduction Test Generator | Elena ⭐ | 10 min |
| **5.3** | Build Pipeline Analyzer | Marcus ⭐ | 8 min |

**Key metrics:**
- API endpoint time: **12 → 2 min** (83% reduction)
- Bug test time: **25 → 4 min** (84% reduction)
- Build debugging: **30 → 2 min** (93% reduction)

---

# 📊 Success Metrics

<div class="grid grid-cols-3 gap-4 mt-8 px-8">

<div class="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900 dark:to-green-800 rounded-lg">
  <div class="text-4xl font-bold text-green-600 dark:text-green-300">85%</div>
  <div class="text-sm mt-2">Time saved on specialized tasks</div>
  <div class="text-xs opacity-75 mt-1">80 → 12 min/sprint</div>
</div>

<div class="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 rounded-lg">
  <div class="text-4xl font-bold text-blue-600 dark:text-blue-300">0</div>
  <div class="text-sm mt-2">Schema mismatches</div>
  <div class="text-xs opacity-75 mt-1">Validation built-in</div>
</div>

<div class="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900 dark:to-purple-800 rounded-lg">
  <div class="text-4xl font-bold text-purple-600 dark:text-purple-300">100%</div>
  <div class="text-sm mt-2">Edge case coverage</div>
  <div class="text-xs opacity-75 mt-1">Template-driven tests</div>
</div>

</div>

---

# 💭 Transformation Quote

<div class="flex items-center justify-center h-full">
  <blockquote class="text-2xl italic text-center px-16">
    "New API endpoints used to take 12 minutes—explaining standards, validating schema, checking patterns. The api-endpoint-design skill reduced it to 2 minutes with zero schema mismatches. That's 80 minutes per sprint back, and perfect compliance every time."
    <footer class="text-lg mt-8 opacity-75">— Sarah, Senior Engineer</footer>
  </blockquote>
</div>

---

# 🔗 Compounding Value

<div class="text-left px-12">

**Module 4 foundation enables Module 5:**
- Skills reference custom instructions for file-type-specific behavior
- Instructions guide AI, skills provide executable workflows

**Module 5 enables future modules:**
- Custom agents (Module 7) can bundle specific skills
- Skills work across VS Code, CLI, and Coding Agent (portable)
- Team expertise captured in executable, reusable capabilities

**The expertise multiplication:**
- Sarah's API knowledge → skill → entire team benefits

</div>

---

# ➡️ Next Up

<div class="text-left px-12">

**Module 6: MCP Servers**

Skills taught Copilot how to validate against your **static API schema**. But what if you need Copilot to query your **actual PostgreSQL database** or call your **live TV show API**?

Module 6 shows how MCP servers provide **runtime integration** with external systems.

</div>

---
layout: end
---

# Module 5 Complete! 🎉

**You've learned:**
- ✅ Creating Agent Skills with instructions + resources
- ✅ Structuring skill directories effectively
- ✅ Using progressive disclosure for efficiency

**Next:** [Module 6: MCP Servers](06-mcp-servers.md)

Connecting Copilot to live external systems
