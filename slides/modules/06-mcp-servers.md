---
theme: default
background: https://source.unsplash.com/collection/94734566/1920x1080
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Module 6: MCP Servers
  CopilotWorkshop Training
drawings:
  persist: false
transition: slide-left
title: Module 6 - MCP Servers
mdc: true
---

# Module 6: MCP Servers
## ⏰ The Context Problem

<div class="pt-12">
  <span class="text-6xl">🔌</span>
</div>

<div class="abs-br m-6 flex gap-2">
  <span class="text-sm opacity-50">CopilotWorkshop Training</span>
</div>

---

# 📖 The Story

<div class="text-left px-12">

Marcus is debugging database queries for the **third time** today. Copilot has no idea what's actually in the database—he keeps explaining the schema manually.

**The problem:** Copilot works with **static files**, not **live systems**

**The insight:** MCP servers connect Copilot to external resources — databases, APIs, tools — treating them as first-class context sources

</div>

---

# 🎯 Learning Objectives

<div class="grid grid-cols-1 gap-4 text-left px-12">

**What you'll learn:**
- Configure MCP servers to connect Copilot to external systems
- Use stdio transport for secure local database connections
- Query live data directly from Copilot chat

**Time:** ~45 minutes | **Exercises:** 3

**Key capability:**
MCP servers transform Copilot from working with **static files** to understanding your **entire technical ecosystem**

</div>

---
layout: two-cols
---

# ❌ The "Before"

<div class="bg-red-50 dark:bg-red-900 p-6 rounded-lg">

**Manual schema lookups:**
- 2-5 min per database query
- Context switching (IDE → DB tool)
- Outdated schema docs
- 5 min per PR validation

**Result:** 70+ min/sprint on manual lookups

</div>

::right::

# ✨ The "After"

<div class="bg-green-50 dark:bg-green-900 p-6 rounded-lg">

**Live database access:**
- 0 min (query directly in chat)
- No context switching
- Always-current schema
- 30 sec automated PR validation

**Result:** 70 min → 5 min (93% time saved)

</div>

---

# 💡 Understanding MCP (Model Context Protocol)

<div class="text-left px-12">

**MCP is an open standard** that allows AI to communicate with external tools and services:

**How it works:**
- **MCP Servers** provide tools, resources, and prompts
- **Transport methods** define communication (stdio for local, HTTP for remote)
- **Standard protocol** means any MCP server works with any compatible client

**Why this matters for FanHub:**
- Connect to PostgreSQL database directly
- Access GitHub repositories for context
- Query external APIs without manual integration

</div>

---

# 📚 MCP Architecture

<div class="grid grid-cols-2 gap-8 px-8">

<div class="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg">
  <h3 class="text-xl font-bold mb-4">Transport Methods</h3>
  <ul class="text-sm space-y-2">
    <li><strong>stdio</strong> — Local processes (databases, tools)</li>
    <li><strong>HTTP/SSE</strong> — Remote services (cloud APIs)</li>
  </ul>
</div>

<div class="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg">
  <h3 class="text-xl font-bold mb-4">Capabilities</h3>
  <ul class="text-sm space-y-2">
    <li><strong>Tools</strong> — Functions Copilot can invoke</li>
    <li><strong>Resources</strong> — Data sources to read</li>
    <li><strong>Prompts</strong> — Pre-configured workflows</li>
  </ul>
</div>

</div>

<div class="mt-6 text-center text-sm opacity-75">
Configuration: <code>.vscode/mcp.json</code> (workspace) or user settings (global)
</div>

---

# 👥 Key Personas

<div class="grid grid-cols-3 gap-6 mt-8">

<div class="persona-card p-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 rounded-lg text-sm">
  <div class="text-3xl mb-2">👨‍💻</div>
  <h3 class="text-lg font-bold">Marcus</h3>
  <p class="text-xs opacity-75">DevOps Developer</p>
  <blockquote class="mt-2 text-xs italic">
    "Manual schema lookups took 2-5 minutes. MCP server gives instant database access—0 context switches."
  </blockquote>
</div>

<div class="persona-card p-4 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900 dark:to-purple-800 rounded-lg text-sm">
  <div class="text-3xl mb-2">👨‍💼</div>
  <h3 class="text-lg font-bold">Sarah</h3>
  <p class="text-xs opacity-75">Senior Engineer</p>
  <blockquote class="mt-2 text-xs italic">
    "GitHub MCP server—PR validation in 30 seconds vs 5 minutes manually checking criteria."
  </blockquote>
</div>

<div class="persona-card p-4 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900 dark:to-green-800 rounded-lg text-sm">
  <div class="text-3xl mb-2">👩‍💻</div>
  <h3 class="text-lg font-bold">Elena</h3>
  <p class="text-xs opacity-75">QA Engineer</p>
  <blockquote class="mt-2 text-xs italic">
    "API contract validation—10 min per cycle down to 30 seconds with MCP-powered checks."
  </blockquote>
</div>

</div>

---

# 🔨 Exercises

| # | Exercise | Lead | Time |
|---|----------|------|------|
| **6.1** | Connect to FanHub Database | Marcus ⭐ | 20 min |
| **6.2** | Automate PR Review Validation | Sarah ⭐ | 15 min |
| **6.3** | Validate Backend API Against Rules | Elena ⭐ | 10 min |

**Key metrics:**
- Database query time: **5 min → 0 min** (eliminated)
- PR validation: **5 min → 30 sec** (90% reduction)
- API validation: **10 min → 30 sec** (95% reduction)

---

# 📊 Success Metrics

<div class="grid grid-cols-3 gap-4 mt-8 px-8">

<div class="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900 dark:to-green-800 rounded-lg">
  <div class="text-4xl font-bold text-green-600 dark:text-green-300">93%</div>
  <div class="text-sm mt-2">Time saved on lookups</div>
  <div class="text-xs opacity-75 mt-1">70 min → 5 min/sprint</div>
</div>

<div class="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 rounded-lg">
  <div class="text-4xl font-bold text-blue-600 dark:text-blue-300">0</div>
  <div class="text-sm mt-2">Context switches</div>
  <div class="text-xs opacity-75 mt-1">Query from chat</div>
</div>

<div class="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900 dark:to-purple-800 rounded-lg">
  <div class="text-4xl font-bold text-purple-600 dark:text-purple-300">100%</div>
  <div class="text-sm mt-2">Live data accuracy</div>
  <div class="text-xs opacity-75 mt-1">No stale docs</div>
</div>

</div>

---

# 💭 Transformation Quote

<div class="flex items-center justify-center h-full">
  <blockquote class="text-2xl italic text-center px-16">
    "Manual schema lookups used to take 2-5 minutes per query, with constant context switching between IDE and database tools. SQLite MCP server eliminated that entirely—I query the FanHub database directly from chat. Zero context switches, zero time wasted."
    <footer class="text-lg mt-8 opacity-75">— Marcus, DevOps Developer</footer>
  </blockquote>
</div>

---

# 🔗 Compounding Value

<div class="text-left px-12">

**Module 5 foundation enables Module 6:**
- Skills provide domain knowledge, MCP servers provide live data
- Together: validate against both patterns AND actual system state

**Module 6 enables future modules:**
- Custom agents (Module 7) can bundle MCP servers for specialized access
- Web workflows (Module 8) use MCP for remote system integration
- Complete view: code + architecture + live system state

**The integration effect:**
- Static knowledge (skills) + Dynamic data (MCP) = Complete context

</div>

---

# ➡️ Next Up

<div class="text-left px-12">

**Module 7: Custom Agents**

You have skills, MCP servers, prompts, instructions... but you're constantly switching contexts:

*Planning mode → Implementation mode → Review mode*

Module 7 shows how to bundle everything into **role-based agents** you can switch between instantly.

</div>

---
layout: end
---

# Module 6 Complete! 🎉

**You've learned:**
- ✅ Configuring MCP servers for external systems
- ✅ Using stdio transport for secure connections
- ✅ Querying live data from Copilot chat

**Next:** [Module 7: Custom Agents](07-custom-agents.md)

Bundling capabilities into role-based presets
