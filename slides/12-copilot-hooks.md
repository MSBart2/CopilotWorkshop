---
theme: default
background: https://source.unsplash.com/collection/94734566/1920x1080
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Module 12: Copilot Hooks
  CopilotWorkshop Training
drawings:
  persist: false
transition: slide-left
title: Module 12 - Copilot Hooks
mdc: true
---

# Module 12: Copilot Hooks
## ⏰ The Governance Problem

<div class="pt-12">
  <span class="text-6xl">🔒</span>
</div>

<div class="abs-br m-6 flex gap-2">
  <span class="text-sm opacity-50">CopilotWorkshop Training</span>
</div>

---

# 📖 The Story

<div class="text-left px-12">

Sarah shipped feature flags, deployment checks, and a full test suite. But Copilot can **edit any file** and **run any command**.

**The question:** How do we enforce security policies, audit compliance, or catch dangerous operations **before they happen**?

**The insight:** **Hooks** are programmable control points at critical lifecycle moments — validate, approve/deny, audit, enforce quality gates

</div>

---

# 🎯 Learning Objectives

<div class="grid grid-cols-1 gap-4 text-left px-12">

**What you'll learn:**
- Configure hooks that enforce security policies before execution
- Maintain complete audit trails for compliance
- Integrate quality gates that validate changes in real-time

**Time:** ~45 minutes | **Exercises:** 3

**Key capability:**
`preToolUse` hook is the **only** interception point where you can **prevent** actions — enabling "AI with guardrails" governance

</div>

---
layout: two-cols
---

# ❌ The "Before"

<div class="bg-red-50 dark:bg-red-900 p-6 rounded-lg">

**Manual governance:**
- 30 min per security violation review
- 2 violations per sprint caught late
- 20 min manual audit log extraction
- 12 style violations reach CI

**Result:** 150 min/sprint on reactive governance

</div>

::right::

# ✨ The "After"

<div class="bg-green-50 dark:bg-green-900 p-6 rounded-lg">

**Hook-enforced governance:**
- 0 min (violations blocked instantly)
- 0 violations reach production
- 2 min automated audit queries
- 0 style violations (lint before edit)

**Result:** Real-time enforcement, zero manual work

</div>

---

# 💡 Understanding Hooks

<div class="text-left px-12">

**Hooks** are custom shell commands that execute at key lifecycle points:

**Hook types:**
- **sessionStart** — Initialize environments, validate state
- **preToolUse** — Approve/deny tool executions (**most powerful**)
- **postToolUse** — Track results, collect metrics
- **errorOccurred** — Handle failures, notify teams
- **sessionEnd** — Cleanup resources, send reports

**Key insight:**
`preToolUse` is the **only** hook that can **prevent** actions via `permissionDecision: "deny"`. All others are observational (log, alert, metrics).

</div>

---

# 📚 Hook Execution Flow

<div class="text-left px-12 text-sm">

When an event occurs, Copilot:

1. **Invokes hook script** with event data (JSON via stdin)
2. **Waits for completion** (up to `timeoutSec`, default 30s)
3. **For preToolUse:** Reads output for `permissionDecision`
4. **Either:** Proceeds (allow) or aborts (deny)

**Example preToolUse hook output:**
```json
{
  "permissionDecision": "deny",
  "permissionDecisionReason": "rm -rf / blocked by security policy"
}
```

**Security patterns blocked:**
- `rm -rf`, `sudo`, destructive commands
- File writes outside approved directories
- `DROP TABLE`, dangerous database operations

</div>

---

# 👥 Key Personas

<div class="grid grid-cols-3 gap-6 mt-8">

<div class="persona-card p-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 rounded-lg text-sm">
  <div class="text-3xl mb-2">👨‍💼</div>
  <h3 class="text-lg font-bold">Sarah</h3>
  <p class="text-xs opacity-75">Senior Engineer</p>
  <blockquote class="mt-2 text-xs italic">
    "Security policy hook blocks dangerous commands instantly—60 minutes per sprint saved, zero violations."
  </blockquote>
</div>

<div class="persona-card p-4 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900 dark:to-purple-800 rounded-lg text-sm">
  <div class="text-3xl mb-2">👨‍💻</div>
  <h3 class="text-lg font-bold">Marcus</h3>
  <p class="text-xs opacity-75">DevOps Developer</p>
  <blockquote class="mt-2 text-xs italic">
    "Audit trail hooks—complete compliance logging in JSON Lines format. 20 min manual work to 2 min queries."
  </blockquote>
</div>

<div class="persona-card p-4 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900 dark:to-green-800 rounded-lg text-sm">
  <div class="text-3xl mb-2">👩‍💻</div>
  <h3 class="text-lg font-bold">Elena</h3>
  <p class="text-xs opacity-75">QA Engineer</p>
  <blockquote class="mt-2 text-xs italic">
    "Quality gate hook runs linter before code edits—75 minutes rework eliminated, zero CI violations."
  </blockquote>
</div>

</div>

---

# 🔨 Exercises

| # | Exercise | Lead | Time |
|---|----------|------|------|
| **12.1** | Security Policy Enforcement | Sarah ⭐ | 18 min |
| **12.2** | Compliance Audit Trail | Marcus ⭐ | 15 min |
| **12.3** | Quality Gate Integration | Elena ⭐ | 12 min |

**Key metrics:**
- Security review: **60 min → 0 min** (automated)
- Audit extraction: **20 min → 2 min** (90% reduction)
- Rework time: **75 min → 0 min** (quality gates)

---

# 📊 Success Metrics

<div class="grid grid-cols-3 gap-4 mt-8 px-8">

<div class="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900 dark:to-green-800 rounded-lg">
  <div class="text-4xl font-bold text-green-600 dark:text-green-300">100%</div>
  <div class="text-sm mt-2">Violations blocked</div>
  <div class="text-xs opacity-75 mt-1">Real-time enforcement</div>
</div>

<div class="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 rounded-lg">
  <div class="text-4xl font-bold text-blue-600 dark:text-blue-300">90%</div>
  <div class="text-sm mt-2">Audit time saved</div>
  <div class="text-xs opacity-75 mt-1">JSON Lines queries</div>
</div>

<div class="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900 dark:to-purple-800 rounded-lg">
  <div class="text-4xl font-bold text-purple-600 dark:text-purple-300">0</div>
  <div class="text-sm mt-2">CI violations</div>
  <div class="text-xs opacity-75 mt-1">Pre-edit linting</div>
</div>

</div>

---

# 💭 Transformation Quote

<div class="flex items-center justify-center h-full">
  <blockquote class="text-2xl italic text-center px-16">
    "Manual security reviews used to catch violations 30 minutes after the fact—2 per sprint. The preToolUse hook blocks dangerous commands like `rm -rf /` instantly, before they execute. That's 60 minutes per sprint saved, and zero production incidents."
    <footer class="text-lg mt-8 opacity-75">— Sarah, Senior Engineer</footer>
  </blockquote>
</div>

---

# 🔗 Compounding Value

<div class="text-left px-12">

**Modules 1-11 enable Module 12:**
- Hooks validate against repository instructions (Module 1)
- Hooks can invoke agent skills (Module 5) for validation logic
- Hooks audit autonomous agent actions (Module 10)
- Enterprise patterns (Module 11) standardize hook configurations

**Module 12 enables future modules:**
- Context engineering (Module 13) with quality gates enforced
- Complete governance: velocity with visibility
- AI agents operate within defined boundaries

**The governance effect:**
Automation + Accountability = Safe velocity at scale

</div>

---

# ➡️ Next Up

<div class="text-left px-12">

**Module 13: Context Engineering**

You have all the pieces—instructions, prompts, skills, agents, MCP servers, hooks. But you're still explaining the same context over and over.

Module 13 shows how to **systematically orchestrate** all these capabilities into a unified context engineering workflow that compounds knowledge across planning, implementation, and review.

</div>

---
layout: end
---

# Module 12 Complete! 🎉

**You've learned:**
- ✅ Enforcing security policies with preToolUse
- ✅ Maintaining complete audit trails
- ✅ Integrating quality gates before edits

**Next:** [Module 13: Context Engineering](13-context-engineering.md)

Orchestrating all capabilities into unified workflow
