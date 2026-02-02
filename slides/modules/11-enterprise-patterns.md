---
theme: default
background: https://source.unsplash.com/collection/94734566/1920x1080
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Module 11: Enterprise Patterns
  CopilotWorkshop Training
drawings:
  persist: false
transition: slide-left
title: Module 11 - Enterprise Patterns
mdc: true
---

# Module 11: Enterprise Patterns
## ⏰ Scaling Success

<div class="pt-12">
  <span class="text-6xl">🏢</span>
</div>

<div class="abs-br m-6 flex gap-2">
  <span class="text-sm opacity-50">CopilotWorkshop Training</span>
</div>

---

# 📖 The Story

<div class="text-left px-12">

**Monday 6 PM:** The FanHub team shipped a production-ready site in one day using Copilot customizations.

**Tuesday 9 AM:** Sarah asks: *"We're one team in an organization with eight teams. How do we scale what we learned without creating a support bottleneck?"*

**The challenge:** Individual success doesn't automatically become organizational capability

**The goal:** Make Copilot customizations **organizational standard** without forcing every team to reinvent the wheel

</div>

---

# 🎯 Learning Objectives

<div class="grid grid-cols-1 gap-4 text-left px-12">

**What you'll learn:**
- Create organization-wide custom instructions and skills
- Establish systematic code review standards for AI-generated code
- Set up knowledge bases for cross-repo context (Enterprise)
- Monitor adoption and measure ROI with metrics

**Time:** Choose exercises relevant to your role (~30-90 minutes)

**Key capability:**
Transform **team success** into **organizational capability** through standardization and measurement

</div>

---

# 🎯 Choose Your Path

<div class="grid grid-cols-2 gap-6 px-8 text-xs">

<div class="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
  <h3 class="font-bold mb-2">For Org Owners</h3>
  <p class="mb-2">**11.1: Organization Instructions** (30-45 min)</p>
  <p class="opacity-75">Create org-wide standards applying to all repos</p>
</div>

<div class="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
  <h3 class="font-bold mb-2">For Code Reviewers</h3>
  <p class="mb-2">**11.2: Code Review Standards** (30-45 min)</p>
  <p class="opacity-75">Build systematic checklist for AI code review</p>
</div>

<div class="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
  <h3 class="font-bold mb-2">For Architects (Enterprise)</h3>
  <p class="mb-2">**11.3: Knowledge Bases** (30-45 min)</p>
  <p class="opacity-75">Index multiple repos for cross-repo context</p>
</div>

<div class="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
  <h3 class="font-bold mb-2">For Engineering Leaders</h3>
  <p class="mb-2">**11.4: Metrics Dashboard** (45-60 min)</p>
  <p class="opacity-75">Answer "What's the ROI?" with data</p>
</div>

</div>

---
layout: two-cols
---

# ❌ Individual Success

<div class="bg-red-50 dark:bg-red-900 p-6 rounded-lg">

**Team-level only:**
- One team's customizations
- Repeated explanations
- "Trust me, it helps"
- Knowledge in heads
- Ad-hoc code review

**Result:** Doesn't scale beyond initial team

</div>

::right::

# ✨ Organizational Capability

<div class="bg-green-50 dark:bg-green-900 p-6 rounded-lg">

**Organization-wide:**
- Standards across all repos
- Self-service onboarding
- Data-driven ROI story
- Knowledge in systems
- Systematic review process

**Result:** Every team benefits immediately

</div>

---

# 📚 Key Enterprise Capabilities

<div class="grid grid-cols-2 gap-8 px-8 text-sm">

<div class="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg">
  <h3 class="text-xl font-bold mb-4">Organization Instructions</h3>
  <ul class="space-y-2">
    <li>Company-wide coding standards</li>
    <li>Security requirements</li>
    <li>Framework preferences</li>
    <li>Apply to all repos automatically</li>
  </ul>
  <div class="mt-2 text-xs opacity-75">💼 Business / 🏢 Enterprise</div>
</div>

<div class="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg">
  <h3 class="text-xl font-bold mb-4">Knowledge Bases</h3>
  <ul class="space-y-2">
    <li>Index multiple repositories</li>
    <li>Cross-repo context in chat</li>
    <li>Microservices awareness</li>
    <li>Shared library references</li>
  </ul>
  <div class="mt-2 text-xs opacity-75">🏢 Enterprise only</div>
</div>

</div>

---

# 👥 Persona Transformations

<div class="grid grid-cols-3 gap-4 mt-6 text-xs">

<div class="persona-card p-3 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 rounded-lg">
  <div class="text-2xl mb-1">👨‍💼</div>
  <h3 class="text-sm font-bold">Sarah</h3>
  <p class="text-xs opacity-75">Senior Engineer</p>
  <blockquote class="mt-2 text-xs italic">
    "Started Monday asking 'prove it.' By Tuesday teaching org-wide patterns with data backing ROI."
  </blockquote>
</div>

<div class="persona-card p-3 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900 dark:to-purple-800 rounded-lg">
  <div class="text-2xl mb-1">👨‍💼</div>
  <h3 class="text-sm font-bold">David</h3>
  <p class="text-xs opacity-75">Staff Engineer</p>
  <blockquote class="mt-2 text-xs italic">
    "My expertise, encoded in org instructions, multiplied across every team. That's legacy."
  </blockquote>
</div>

<div class="persona-card p-3 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900 dark:to-green-800 rounded-lg">
  <div class="text-2xl mb-1">👩‍💻</div>
  <h3 class="text-sm font-bold">Elena</h3>
  <p class="text-xs opacity-75">QA Engineer</p>
  <blockquote class="mt-2 text-xs italic">
    "Code review checklist captures systematic quality thinking—teams catch David's issues without David reviewing."
  </blockquote>
</div>

</div>

---

# 🔨 Exercises

| # | Exercise | Role | Time |
|---|----------|------|------|
| **11.1** | Organization Instructions | Org owners, leaders | 30-45 min |
| **11.2** | Code Review Standards | All reviewers | 30-45 min |
| **11.3** | Copilot Knowledge Bases | Architects (Enterprise) | 30-45 min |
| **11.4** | Metrics Dashboard | Engineering managers | 45-60 min |
| **11.5** | Onboarding Kit | Knowledge sharers | 60-90 min |

**Choose exercises relevant to your role — all are independent**

---

# 📊 Transformation Metrics

<div class="grid grid-cols-3 gap-4 mt-8 px-8">

<div class="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900 dark:to-green-800 rounded-lg">
  <div class="text-4xl font-bold text-green-600 dark:text-green-300">8x</div>
  <div class="text-sm mt-2">Teams enabled</div>
  <div class="text-xs opacity-75 mt-1">1 → 8 teams with standards</div>
</div>

<div class="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 rounded-lg">
  <div class="text-4xl font-bold text-blue-600 dark:text-blue-300">30</div>
  <div class="text-sm mt-2">Minutes onboarding</div>
  <div class="text-xs opacity-75 mt-1">Self-service setup</div>
</div>

<div class="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900 dark:to-purple-800 rounded-lg">
  <div class="text-4xl font-bold text-purple-600 dark:text-purple-300">100%</div>
  <div class="text-sm mt-2">Standards consistency</div>
  <div class="text-xs opacity-75 mt-1">Across all repos</div>
</div>

</div>

---

# 💭 David's Legacy Insight

<div class="flex items-center justify-center h-full">
  <blockquote class="text-2xl italic text-center px-16">
    "My fear was obsolescence. My reality is amplification. Twenty years of architectural knowledge, now encoded in organization instructions, multiplied across every team I'll never meet. That's not replacement—that's legacy."
    <footer class="text-lg mt-8 opacity-75">— David, Staff Engineer</footer>
  </blockquote>
</div>

---

# 🔗 The Knowledge Multiplication Effect

<div class="text-left px-12 text-sm">

**What you build in this module:**

1. **Rafael's organization instructions** encode David's 20 years of patterns
   → Every new developer automatically gets expert-level guidance

2. **Elena's code review checklist** captures systematic quality thinking
   → Teams catch issues David would catch, even without David reviewing

3. **Marcus's knowledge base** connects infrastructure + apps + docs
   → Copilot answers questions spanning the entire system

4. **Sarah's metrics framework** quantifies productivity gains
   → Leadership sees ROI, funds continued improvement

5. **Onboarding kit** packages 11 modules of learnings
   → New teams reach your level in 30 minutes instead of 11 hours

</div>

---

# ➡️ Next Up

<div class="text-left px-12">

**Module 12: Copilot Hooks**

You've scaled Copilot adoption across the organization. But if AI can edit any file and run any command, how do you enforce **security policies**, **audit compliance**, or **catch dangerous operations** before they happen?

Module 12 shows how hooks provide governance through programmable control points.

</div>

---
layout: end
---

# Module 11 Complete! 🎉

**You've learned:**
- ✅ Creating organization-wide instructions
- ✅ Establishing code review standards
- ✅ Setting up knowledge bases (Enterprise)
- ✅ Measuring and communicating ROI

**Next:** [Module 12: Copilot Hooks](12-copilot-hooks.md)

Governance and security through hooks
