---
theme: default
background: https://source.unsplash.com/collection/94734566/1920x1080
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Module 7: Custom Agents
  CopilotWorkshop Training
drawings:
  persist: false
transition: slide-left
title: Module 7 - Custom Agents
mdc: true
---

# Module 7: Custom Agents
## ⏰ The Context-Switching Problem

<div class="pt-12">
  <span class="text-6xl">🤖</span>
</div>

<div class="abs-br m-6 flex gap-2">
  <span class="text-sm opacity-50">CopilotWorkshop Training</span>
</div>

---

# 📖 The Story

<div class="text-left px-12">

Sarah switches between tasks **five times per day**:
- Planning (needs read-only tools)
- Implementation (needs full editing)
- Review (needs analysis tools)

**The problem:** Each switch = 5 minutes reconfiguring Copilot's behavior

**The insight:** Bundle tools, skills, and instructions into **role-based presets** you can switch instantly

</div>

---

# 🎯 Learning Objectives

<div class="grid grid-cols-1 gap-4 text-left px-12">

**What you'll learn:**
- Create custom `.agent.md` files that define specialized personas
- Configure tool access, handoffs, and behavioral constraints
- Discover agents work on **both VS Code and github.com** automatically

**Time:** ~75 minutes | **Exercises:** 5

**Key capability:**
Custom agents orchestrate everything from Modules 1-6 into **role-based configurations** with instant context switching

</div>

---
layout: two-cols
---

# ❌ The "Before"

<div class="bg-red-50 dark:bg-red-900 p-6 rounded-lg">

**Manual role switching:**
- 5 min loading planning context
- 3 accidental edits during research
- 6 min setting up security review
- Inconsistent analysis approach

**Result:** 25 min/day on context switching

</div>

::right::

# ✨ The "After"

<div class="bg-green-50 dark:bg-green-900 p-6 rounded-lg">

**Agent-based presets:**
- 0 min setup (instant switch)
- 0 accidental edits (read-only enforced)
- 0 min review setup (preset ready)
- 100% consistent workflows

**Result:** Zero switching overhead

</div>

---

# 💡 Understanding Custom Agents

<div class="text-left px-12">

**Custom agents** are role-based configurations stored in `.agent.md` files:

**Key characteristics:**
- **YAML frontmatter** — Define tools, model, handoffs, MCP servers
- **Markdown body** — Agent-specific instructions
- **Handoffs** — Guided transitions between agents
- **Two scopes** — Workspace (`.github/agents/`) or User (profile)
- **Web accessible** — Agents in `.github/agents/` work automatically on github.com

**How they differ:**
- Instructions = behavior for all contexts
- Skills = specialized capabilities
- Agents = complete working modes (tools + skills + instructions)

</div>

---

# 📚 Agent File Structure

<div class="grid grid-cols-2 gap-8 px-8 text-sm">

<div class="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
  <h3 class="text-lg font-bold mb-3">Frontmatter</h3>
  <pre class="text-xs">---
description: Generate implementation plan
name: Planner
tools: ['search', 'fetch', 'githubRepo']
model: Claude Sonnet 4
handoffs:
  - label: Start Implementation
    agent: implement
    prompt: Implement this plan
---</pre>
</div>

<div class="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
  <h3 class="text-lg font-bold mb-3">Body</h3>
  <pre class="text-xs"># Planning Instructions

You are in planning mode.
Your task is to generate
implementation plans.

Don't make code edits—
research and analysis only.

Include:
- Feature overview
- Implementation steps
- Testing strategy</pre>
</div>

</div>

---

# 👥 Key Personas

<div class="grid grid-cols-3 gap-4 mt-6">

<div class="persona-card p-3 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 rounded-lg text-xs">
  <div class="text-2xl mb-1">👨‍💼</div>
  <h3 class="text-sm font-bold">David</h3>
  <p class="text-xs opacity-75">Staff Engineer</p>
  <blockquote class="mt-2 text-xs italic">
    "Feature planning agent—read-only tools prevent accidental edits during research."
  </blockquote>
</div>

<div class="persona-card p-3 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900 dark:to-purple-800 rounded-lg text-xs">
  <div class="text-2xl mb-1">👨‍💼</div>
  <h3 class="text-sm font-bold">Sarah</h3>
  <p class="text-xs opacity-75">Senior Engineer</p>
  <blockquote class="mt-2 text-xs italic">
    "Implementation agent—full editing tools + API design skill + ADR-reading workflow."
  </blockquote>
</div>

<div class="persona-card p-3 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900 dark:to-green-800 rounded-lg text-xs">
  <div class="text-2xl mb-1">👩‍💻</div>
  <h3 class="text-sm font-bold">Elena</h3>
  <p class="text-xs opacity-75">QA Engineer</p>
  <blockquote class="mt-2 text-xs italic">
    "Security review agent—catches 5 issues per review vs previous 2."
  </blockquote>
</div>

</div>

---

# 🔨 Exercises

| # | Exercise | Lead | Time |
|---|----------|------|------|
| **7.1** | Understand Default Plan Agent | All 🤝 | 15 min |
| **7.2** | Create Feature Planning Agent | David ⭐ | 15 min |
| **7.3** | Create Implementation Agent | Sarah ⭐ | 15 min |
| **7.4** | Design Security Review Agent | Elena ⭐ | 15 min |
| **7.5** | Access Custom Agents from Web | Rafael ⭐ | 15 min |

**Key metrics:**
- Setup time: **5 min → 0 min** (instant switching)
- Accidental edits: **3 → 0** (role enforcement)
- Security issues caught: **2 → 5 per review**

---

# 📊 Success Metrics

<div class="grid grid-cols-3 gap-4 mt-8 px-8">

<div class="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900 dark:to-green-800 rounded-lg">
  <div class="text-4xl font-bold text-green-600 dark:text-green-300">100%</div>
  <div class="text-sm mt-2">Context switching eliminated</div>
  <div class="text-xs opacity-75 mt-1">Instant role changes</div>
</div>

<div class="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 rounded-lg">
  <div class="text-4xl font-bold text-blue-600 dark:text-blue-300">0</div>
  <div class="text-sm mt-2">Accidental modifications</div>
  <div class="text-xs opacity-75 mt-1">Tool restrictions enforced</div>
</div>

<div class="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900 dark:to-purple-800 rounded-lg">
  <div class="text-4xl font-bold text-purple-600 dark:text-purple-300">150%</div>
  <div class="text-sm mt-2">Security issue detection</div>
  <div class="text-xs opacity-75 mt-1">2 → 5 issues caught</div>
</div>

</div>

---

# 💭 Transformation Quote

<div class="flex items-center justify-center h-full">
  <blockquote class="text-2xl italic text-center px-16">
    "Manual planning setup took 5 minutes—loading context, preventing accidental edits. The @feature-plan agent has read-only tools configured, feature requirements skill loaded, and GitHub MCP connected. Instant switch, zero setup, perfect focus."
    <footer class="text-lg mt-8 opacity-75">— David, Staff Engineer</footer>
  </blockquote>
</div>

---

# 🌐 Web Accessibility Insight

<div class="text-left px-12">

**Key discovery:** Custom agents in `.github/agents/` work **automatically** on both:
- **VS Code** — Full implementation capabilities
- **github.com/copilot** — Planning and analysis (no IDE setup needed)

**Rafael's realization:**
*"I can use @feature-plan during meetings from my browser—no VS Code launch, no context-switching. Feature analysis went from 5-6 minutes to 1.5 minutes because I'm already in the right interface."*

**Choose based on task:**
- VS Code → Implementation (editing tools)
- Web → Planning/analysis (faster access, mobile-friendly)

</div>

---

# 🔗 Compounding Value

<div class="text-left px-12">

**Modules 1-6 enable Module 7:**
- Agents reference repository instructions (Module 1)
- Agents bundle specific skills (Module 5)
- Agents connect to MCP servers (Module 6)
- Handoffs preserve context across workflow phases

**Module 7 enables future modules:**
- Web workflows (Module 8) use same agents without reconfiguration
- CLI automation (Module 9) can invoke agents programmatically
- Complete orchestration of all customization layers

**The orchestration effect:**
All capabilities → Unified system → Role-based presets

</div>

---

# ➡️ Next Up

<div class="text-left px-12">

**Module 8: Copilot on the Web**

You've customized Copilot perfectly for VS Code. But you spend most of your day in **GitHub's web UI** — reviewing PRs during meetings, triaging issues from your phone.

Module 8 reveals: **All your customizations already work on github.com/copilot** — no additional configuration needed.

</div>

---
layout: end
---

# Module 7 Complete! 🎉

**You've learned:**
- ✅ Creating custom `.agent.md` files
- ✅ Configuring tools, handoffs, and constraints
- ✅ Discovering web accessibility (github.com)

**Next:** [Module 8: Copilot on the Web](08-copilot-web.md)

Using customizations beyond the IDE
