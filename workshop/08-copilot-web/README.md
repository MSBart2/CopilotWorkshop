# Module 8: Copilot on the Web

## ⏰ — The Interface Gap

> *"I've customized Copilot perfectly for my IDE—instructions, skills, agents—but I spend most of my day in GitHub's web UI. Every time I need AI help during a meeting or PR review, I have to open VS Code and lose my context. There has to be a way to use my customizations everywhere I work."*  
> — Rafael, discovering Copilot works beyond the IDE

---

## 📖 Story So Far

In **Module 1**, the team created **`.github/copilot-instructions.md`**—repository-wide standards that established baseline coding guidelines for all Copilot interactions.

In **Module 5**, they built **Agent Skills** in `.github/skills/`—teaching Copilot specialized capabilities like effort estimation, API design validation, and build pipeline analysis through folders containing instructions, scripts, and examples.

In **Module 7**, they created **custom agents** (`.agent.md`)—role-based presets like `@review-enforcer` and `@feature-plan` that bundle instructions, tools, and skills into switchable configurations optimized for specific tasks.

Now, in **Module 8**, Rafael discovers something powerful: **all these customizations work beyond VS Code**. As Product Manager, he spends his day in GitHub's web interface—reviewing PRs during meetings, triaging issues from his phone, responding to stakeholder questions in Slack. Until now, he assumed his team's Copilot customizations were IDE-only. But when he opens [github.com/copilot](https://github.com/copilot) in his browser, he finds the same `@review-enforcer` agent, the same `effort-estimator` skill, and the same repository instructions—instantly accessible without VS Code.

**The revelation:** GitHub Copilot on the web isn't a separate, limited tool. It's the full AI with complete access to repository customizations, optimized for coordination workflows (planning, documentation, reviews) rather than implementation.

💡 **Integration Note:** This module doesn't teach new customization techniques—it shows how customizations from Modules 1, 5, and 7 are **portable across interfaces**. The `.github/copilot-instructions.md`, `.github/skills/`, and `.github/agents/` you created in VS Code work identically on github.com/copilot, in GitHub Mobile, in Copilot CLI, and with the Coding Agent. Create once, use everywhere.

---

⚠️ **Prerequisites**: 
- Complete [Module 00: Orientation](../00-orientation/README.md)
- GitHub Copilot subscription (Free, Pro, or Pro+)
- Basic familiarity with GitHub's web interface (issues, PRs, navigation)
- **Recommended but not required:**
  - Module 1 (repository instructions automatically work on web)
  - Module 5 (agent skills accessible from github.com/copilot)
  - Module 7 (custom agents appear in web interface dropdown)

---

## 🧠 Mindful Moment: From IDE-Exclusive to Interface-Agnostic

**Traditional thinking:** *"AI coding assistants live in the IDE. Product managers, designers, and technical writers won't benefit unless they learn VS Code."*

**AI-native thinking:** *"AI assistance follows you to wherever your work happens—the browser, mobile phone, terminal. The interface adapts to the task: IDE for implementation, web for coordination, CLI for automation."*

This isn't about replacing VS Code—developers still code there. It's about **removing interface barriers** so AI assistance meets you where you actually work. Rafael reviews PRs on his phone during meetings. Sarah triages issues from the airport. Marcus checks deployment logs from his tablet. The work happens in the browser and on mobile—that's where AI should be accessible. The result: same customizations, same quality, different interface optimized for the task at hand.

---

## What You'll Learn

**GitHub Copilot on the Web** brings your IDE customizations (instructions, skills, agents) to browser-based workflows. You'll use Copilot at github.com/copilot for product management tasks—filing issues from screenshots, reviewing PRs on mobile, generating effort estimates during meetings, creating documentation from code, and comparing AI models for decisions. You'll measure productivity gains from eliminating IDE context-switching and team velocity improvements from mobile PR reviews.

**Time:** ~64 minutes | **Exercises:** 5

---

## 📋 Exercise Planning

The exercises below demonstrate non-engineering workflows using GitHub Copilot on the web. Each exercise shows measurable productivity improvements for product managers, technical writers, and non-developer roles working primarily in GitHub's web interface.

| # | Exercise | Lead | Support | Problem | Solution | Key Metrics | Artifacts |
|---|----------|------|---------|---------|----------|-------------|-----------|
| [8.1](exercise-8.1.md) | Issue Creation from Screenshots | Rafael | — | Manual issue filing: 14 min/issue (download screenshot, transcribe details, apply template, add labels), 60% detail capture | Drag screenshot into github.com/copilot, AI reads image, generates issue with template, labels, component references | 14→2 min/issue, 95% detail capture, 60 min/week saved | Issues filed directly from screenshots with complete metadata |
| [8.2](exercise-8.2.md) | PR Analysis and Team Unblocking | Rafael | Sarah | PR reviews during meetings: 2 hour team blocking (Rafael unavailable), or quick approve without review (risk bugs) | Use `@review-enforcer` agent on mobile during meetings, provide structured feedback in 3 min, unblock team immediately | 2 hours→0 min blocking, 16 hours/week team velocity gained, same review quality as IDE | PR reviews completed from phone in conference room |
| [8.3](exercise-8.3.md) | Effort Estimation and Stakeholder Communication | Rafael | David | Stakeholder questions: "Let me research and get back to you" (90 min analysis, 2 hour delay, loses momentum) | Use `effort-estimator` skill on github.com/copilot during call, get data-driven estimate in 3 min, maintain conversation flow | 90→3 min/estimate, 0 response delay, decisions made in real-time, 4.3 hours/week saved | Real-time effort estimates with confidence levels |
| [8.4](exercise-8.4.md) | Documentation Generation | Rafael | Sarah | Feature documentation: 65 min (read code 15 min, write docs 35 min, format 10 min), multiple context switches (VS Code → Docs) | Ask Copilot web to read implementation and generate user-facing docs in product language, review and refine | 65→8 min/feature, 100% doc coverage vs 60%, 1.9 hours/week saved | User guides, release notes, support references generated from code |

---

## 🌐 What This Feature Does

**GitHub Copilot on the Web:** Browser-based interface at github.com/copilot that provides the same AI assistance as VS Code, optimized for coordination tasks (planning, documentation, issue triage, PR reviews) rather than implementation. All repository customizations (instructions, skills, agents) work automatically without configuration.

**When to use it:** When you need AI assistance but aren't implementing code—filing issues from screenshots, reviewing PRs during meetings, generating documentation from browser, analyzing features for stakeholders, triaging bugs on mobile. When IDE context-switching would break your flow or you need mobile access.

**What you'll build:** 
- **Web-based product workflows** — Issue creation from images, mobile PR reviews, real-time effort estimation, documentation generation
- **Mobile productivity** — Review PRs and triage issues from phone during commute or meetings
- **Multi-model analysis** — Compare GPT-4.1, Claude Sonnet 4, and Opus 4 for product decisions

**What you'll discover:**
- **Portability** — Instructions, skills, and agents created in VS Code work identically on the web and mobile
- **Role accessibility** — Product managers, designers, technical writers benefit from AI without learning IDE
- **Team velocity** — Eliminate PR blocking by reviewing anywhere, anytime

**Official Documentation:**
- 📖 [Quickstart for GitHub Copilot](https://docs.github.com/en/copilot/get-started/quickstart) — Official quickstart guide
- 📖 [Using GitHub Copilot Chat in GitHub.com](https://docs.github.com/en/copilot/github-copilot-chat/copilot-chat-in-github/using-github-copilot-chat-in-githubcom) — Detailed web features documentation
- 📖 [How to use GitHub Copilot on github.com: A power user's guide](https://github.blog/ai-and-ml/github-copilot/how-to-use-github-copilot-on-github-com-a-power-users-guide/) — Real-world workflows and tips

---

## 📚 Key Concepts

### GitHub Copilot Web vs. IDE

| Aspect | IDE (VS Code) | Web (github.com/copilot) |
|--------|---------------|--------------------------|
| **Primary Use** | Writing and editing code | Planning, documentation, coordination |
| **Tools Available** | Full file editing, terminal, debugger | Read-only code, issue/PR creation, analysis |
| **Customizations** | Repository instructions, skills, agents | **Same** repository instructions, skills, agents |
| **Best For** | Implementation, refactoring, testing | Product work, reviews, documentation |
| **Access** | Requires VS Code installed | Any browser, mobile-friendly |

**Key Insight:** They're not separate tools—they're two interfaces to the same AI, optimized for different workflows.

### Capabilities Unique to Web Copilot

**1. File Issues from Images**
- Drag screenshots, diagrams, or photos into Copilot chat
- AI reads visual content and generates structured issues
- Automatically applies templates and labels
- Captures details humans might miss in manual transcription

**2. Cross-Repository Visibility**
- Access any repository without cloning locally
- Query multiple repos in one conversation
- Track work across organization without workspace setup

**3. Mobile Access**
- Review PRs during commute or meetings
- Triage issues from phone
- Respond to stakeholder questions without laptop

**4. GitHub Spark (Prototyping)**
- Create interactive UI prototypes from descriptions
- Share live previews via link with stakeholders
- Test design concepts before engineering investment

**5. Assign Coding Agent**
- Delegate routine tasks to autonomous agent
- Monitor progress from task pane
- Review and merge agent-created PRs

### Repository Customizations on the Web

**Everything from previous modules works:**

**Module 1 (Repository Instructions):**
- `.github/copilot-instructions.md` automatically loads in web Copilot
- Same coding standards, response patterns apply
- No configuration needed

**Module 5 (Agent Skills):**
- `.github/skills/effort-estimator/` accessible via web
- `.github/skills/api-endpoint-design/` available for analysis
- Skills work identically in web and IDE

**Module 7 (Custom Agents):**
- `@review-enforcer` appears in web agent dropdown
- `@product-analyzer` can be invoked from browser
- Handoffs work the same way

**Why this matters:** Your team's customizations are portable. Create once, use everywhere.

---

## 🔗 How Module 8 Integrates

```
Module 1 (Repository Instructions)
└─> Defines baseline behavior
    ├─> Works in VS Code ✅
    └─> Works on Web ✅

Module 5 (Agent Skills)
└─> Teaches specialized capabilities
    ├─> Accessible in VS Code ✅
    └─> Accessible on Web ✅

Module 7 (Custom Agents)
└─> Bundles role-based presets
    ├─> Switchable in VS Code ✅
    └─> Switchable on Web ✅

Module 8 (Web Copilot) ← YOU ARE HERE
└─> Extends your work to non-engineering tasks
    ├─> Product planning
    ├─> Issue management from screenshots
    ├─> PR reviews without IDE
    ├─> Documentation generation
    └─> Stakeholder communication
```

**Key insight:** Module 8 doesn't teach new customization techniques—it shows how your existing customizations work in product management workflows outside the IDE.

---

## 💡 Real-World Impact: Beyond Rafael

**Sarah (Team Lead):**
*"Use `@review-enforcer` agent during meetings to approve PRs from my phone. Before: team blocked for 2-4 hours until I'm back at desk. After: PRs reviewed in real-time, 0 blocking time. Team velocity increased 15% just from eliminating review bottlenecks."*

**David (Architect):**
*"Create architectural diagrams in GitHub Spark during design discussions. Before: 2 hours after meeting to document decisions. After: stakeholders see live diagram during the meeting, we iterate together, decisions documented instantly."*

**Marcus (DevOps):**
*"File infrastructure issues from monitoring screenshots. Before: 10 minutes transcribing alert details into issue. After: screenshot → Copilot → detailed issue in 90 seconds with correct labels and runbook references."*

**Elena (QA):**
*"Triage bug reports from web UI during standup. Before: bugs sat unassigned for hours while I finished other work. After: assess severity, assign team member, add reproduction steps—all from web during standup. 0 delay, faster fixes."*

---

## ➡️ Next Module Preview

**Module 9: Copilot CLI**

You've automated your IDE workflows (Modules 1-7) and extended AI assistance to the web (Module 8). But there's one more place you work every day: the terminal. Module 9 shows how Copilot CLI brings the same intelligence to shell commands, git operations, and system administration—completing your AI-native toolkit across every interface.

---

## 📖 Official Documentation

**Primary Sources:**
- [Quickstart for GitHub Copilot](https://docs.github.com/en/copilot/get-started/quickstart) — Official quickstart guide
- [Using GitHub Copilot Chat in GitHub.com](https://docs.github.com/en/copilot/github-copilot-chat/copilot-chat-in-github/using-github-copilot-chat-in-githubcom) — Detailed web features documentation
- [How to use GitHub Copilot on github.com: A power user's guide](https://github.blog/ai-and-ml/github-copilot/how-to-use-github-copilot-on-github-com-a-power-users-guide/) — Real-world workflows and tips

**Additional Resources:**
- [GitHub Spark Documentation](https://githubnext.com/projects/github-spark) — Prototyping tool reference
- [Copilot Coding Agent Guide](https://docs.github.com/en/copilot/concepts/coding-agent/coding-agent) — Autonomous agent capabilities
- [GitHub Copilot on Mobile](https://docs.github.com/en/copilot/github-copilot-chat/copilot-chat-in-github-mobile/using-github-copilot-chat-in-github-mobile) — Using Copilot in GitHub Mobile app

---

## 🎭 Module Principles

This module demonstrates:

1. **Portability of customizations** — Repository instructions, skills, and agents work across all Copilot interfaces
2. **Context-appropriate tools** — Web Copilot is optimized for coordination, not implementation
3. **Accessibility for non-engineers** — Product managers, designers, and technical writers benefit without learning IDE
4. **Elimination of context switching** — Work happens where you already work: reviewing PRs, triaging issues, writing docs
5. **AI-native product management** — Data-driven decisions, instant analysis, stakeholder communication at the speed of thought

---

**⏱️ Estimated Time:** 45-60 minutes (exercises assume web-only, no IDE required)

**🎯 Success Criteria:**
- Filed 2+ issues from screenshots with auto-applied templates
- Reviewed 1+ PR from web UI using custom agent
- Generated effort estimate using repository skill
- Created documentation from code context in browser
- Compared 2+ AI models for a product decision

---

**Ready to bring AI assistance beyond your IDE?** Let's start with Exercise 8.1: Filing Issues from Screenshots.

