---
theme: default
background: https://source.unsplash.com/collection/94734566/1920x1080
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Module 8: Copilot on the Web
  CopilotWorkshop Training
drawings:
  persist: false
transition: slide-left
title: Module 8 - Copilot on the Web
mdc: true
---

# Module 8: Copilot on the Web
## ⏰ The Interface Gap

<div class="pt-12">
  <span class="text-6xl">🌐</span>
</div>

<div class="abs-br m-6 flex gap-2">
  <span class="text-sm opacity-50">CopilotWorkshop Training</span>
</div>

---

# 📖 The Story

<div class="text-left px-12">

Rafael (Product Manager) spends his day in **GitHub's web interface** — reviewing PRs during meetings, triaging issues from his phone, responding to stakeholders in Slack.

**The problem:** Every time he needs AI help, he has to open VS Code and lose context

**The revelation:** All your customizations — instructions, skills, agents — already work on **github.com/copilot** without any additional configuration

</div>

---

# 🎯 Learning Objectives

<div class="grid grid-cols-1 gap-4 text-left px-12">

**What you'll learn:**
- Use Copilot at github.com/copilot for product management workflows
- File issues from screenshots, review PRs on mobile
- Generate documentation and effort estimates from browser
- Choose the right interface for each task (VS Code vs. Web)

**Time:** ~64 minutes | **Exercises:** 4

**Key capability:**
Same customizations, same quality — **different interface optimized for coordination** (not implementation)

</div>

---
layout: two-cols
---

# ❌ The "Before"

<div class="bg-red-50 dark:bg-red-900 p-6 rounded-lg">

**IDE-only AI:**
- 14 min per issue (download screenshot, transcribe)
- 2 hour team blocking (Rafael unavailable for PR review)
- 90 min stakeholder analysis (research and get back)
- 65 min feature docs (read code, write, format)

**Result:** Interface friction blocks productivity

</div>

::right::

# ✨ The "After"

<div class="bg-green-50 dark:bg-green-900 p-6 rounded-lg">

**Web-based workflows:**
- 2 min per issue (drag screenshot to chat)
- 0 min team blocking (PR review from mobile)
- 3 min stakeholder analysis (real-time estimates)
- 8 min feature docs (generate from code)

**Result:** AI assistance meets you where you work

</div>

---

# 💡 Understanding Web Copilot

<div class="text-left px-12">

**GitHub Copilot on the Web** brings your customizations to browser-based workflows:

**Key characteristics:**
- **Automatic portability** — Instructions, skills, agents from `.github/` work instantly
- **Coordination focus** — Optimized for planning, documentation, reviews (not implementation)
- **Mobile-friendly** — Review PRs, triage issues from phone
- **No configuration** — Same setup as VS Code, no duplication

**When to use:**
- Filing issues from screenshots
- Reviewing PRs during meetings
- Generating documentation from browser
- Stakeholder communication (estimates, analysis)

</div>

---

# 📚 Web vs. IDE Capabilities

<div class="grid grid-cols-2 gap-8 px-8 text-sm">

<div class="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg">
  <h3 class="text-xl font-bold mb-4">IDE (VS Code)</h3>
  <ul class="space-y-2">
    <li>✅ Writing and editing code</li>
    <li>✅ Full file editing tools</li>
    <li>✅ Terminal and debugger</li>
    <li>✅ Implementation focus</li>
    <li>❌ Requires VS Code installed</li>
  </ul>
</div>

<div class="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg">
  <h3 class="text-xl font-bold mb-4">Web (github.com)</h3>
  <ul class="space-y-2">
    <li>✅ Planning and documentation</li>
    <li>✅ Read-only code analysis</li>
    <li>✅ Issue/PR creation</li>
    <li>✅ Coordination focus</li>
    <li>✅ Any browser, mobile-friendly</li>
  </ul>
</div>

</div>

<div class="mt-4 text-center text-sm opacity-75">
Same customizations — different interface optimized for the task
</div>

---

# 👥 Key Personas

<div class="grid grid-cols-2 gap-8 mt-8">

<div class="persona-card p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 rounded-lg">
  <div class="text-4xl mb-2">👨‍💼</div>
  <h3 class="text-xl font-bold">Rafael</h3>
  <p class="text-sm opacity-75">Product Manager · 10 years</p>
  <blockquote class="mt-4 text-sm italic">
    "PR reviews from phone during meetings—2 hours team blocking eliminated. Same @review-enforcer agent, zero IDE setup."
  </blockquote>
</div>

<div class="persona-card p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900 dark:to-purple-800 rounded-lg">
  <div class="text-4xl mb-2">👨‍💼</div>
  <h3 class="text-xl font-bold">Sarah</h3>
  <p class="text-sm opacity-75">Senior Engineer · 15 years</p>
  <blockquote class="mt-4 text-sm italic">
    "Issue filing from screenshots—14 minutes to 2 minutes. AI reads image, applies template, adds labels."
  </blockquote>
</div>

</div>

---

# 🔨 Exercises

| # | Exercise | Lead | Time |
|---|----------|------|------|
| **8.1** | Issue Creation from Screenshots | Rafael ⭐ | 15 min |
| **8.2** | PR Analysis and Team Unblocking | Rafael ⭐ | 18 min |
| **8.3** | Effort Estimation & Stakeholder Communication | Rafael ⭐ | 15 min |
| **8.4** | Documentation Generation | Rafael ⭐ | 16 min |

**Key metrics:**
- Issue filing: **14 → 2 min** (86% reduction)
- Team blocking: **2 hours → 0 min** (eliminated)
- Stakeholder analysis: **90 → 3 min** (97% reduction)

---

# 📊 Success Metrics

<div class="grid grid-cols-3 gap-4 mt-8 px-8">

<div class="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900 dark:to-green-800 rounded-lg">
  <div class="text-4xl font-bold text-green-600 dark:text-green-300">86%</div>
  <div class="text-sm mt-2">Issue filing time saved</div>
  <div class="text-xs opacity-75 mt-1">14 → 2 min per issue</div>
</div>

<div class="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 rounded-lg">
  <div class="text-4xl font-bold text-blue-600 dark:text-blue-300">16</div>
  <div class="text-sm mt-2">Hours/week team velocity</div>
  <div class="text-xs opacity-75 mt-1">Zero PR blocking</div>
</div>

<div class="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900 dark:to-purple-800 rounded-lg">
  <div class="text-4xl font-bold text-purple-600 dark:text-purple-300">97%</div>
  <div class="text-sm mt-2">Stakeholder analysis faster</div>
  <div class="text-xs opacity-75 mt-1">90 → 3 min estimates</div>
</div>

</div>

---

# 💭 Transformation Quote

<div class="flex items-center justify-center h-full">
  <blockquote class="text-2xl italic text-center px-16">
    "PR reviews used to block the team for 2 hours until I got back to my desk. Now I use @review-enforcer from my phone during meetings—3 minutes, structured feedback, team unblocked immediately. Same review quality, zero blocking time."
    <footer class="text-lg mt-8 opacity-75">— Rafael, Product Manager</footer>
  </blockquote>
</div>

---

# 🔗 Compounding Value

<div class="text-left px-12">

**Modules 1-7 enable Module 8:**
- Repository instructions (Module 1) → Work on web automatically
- Agent Skills (Module 5) → Accessible from github.com/copilot
- Custom agents (Module 7) → Same agents, browser interface

**Module 8 enables future modules:**
- Eliminates "AI assistance requires IDE" barrier
- Product managers, designers benefit without learning VS Code
- Team velocity improves through anywhere-anytime reviews

**The accessibility effect:**
Same customizations → All interfaces → AI meets you where you work

</div>

---

# ➡️ Next Up

<div class="text-left px-12">

**Module 9: Copilot CLI**

You've automated IDE workflows (Modules 1-7) and extended to the web (Module 8). But there's one more place you work every day: **the terminal**.

Module 9 brings the same intelligence to shell commands, git operations, and system administration — completing your AI-native toolkit across every interface.

</div>

---
layout: end
---

# Module 8 Complete! 🎉

**You've learned:**
- ✅ Using Copilot on github.com/copilot
- ✅ Filing issues from screenshots
- ✅ Mobile PR reviews and real-time estimates
- ✅ Choosing right interface for each task

**Next:** [Module 9: Copilot CLI](09-copilot-cli.md)

Bringing AI assistance to the terminal
