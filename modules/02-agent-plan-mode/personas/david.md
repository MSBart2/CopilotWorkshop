# David's Journey: Module 2 - Plan Mode Thinking

> **Your role**: Seasoned Architect (20 years)  
> **Time**: 25 minutes (focused path) / 90 minutes (full module)  
> **Transformation**: From "will AI replace my expertise?" to "my expertise makes AI powerful"

---

## 📖 Your Story in This Module

After 20 years of building enterprise systems, you've built your career on deep technical knowledge. You remember when knowing obscure language corners and architectural patterns made you invaluable. Now you're watching junior developers use Copilot to generate code that used to take years to learn.

**The fear you won't say out loud**: If anyone can write code with AI, what happens to the expertise you spent decades building? Are you becoming obsolete?

But in Module 01, something unexpected happened. When the team added architecture documentation and coding standards, **your** ability to write good documentation made Copilot generate **better** code for everyone. Your knowledge wasn't replaced—it was amplified.

Today you'll discover something even more powerful: the deeper your expertise, the better your AI customizations become. You'll use plan mode to design a custom agent that embodies your architectural thinking—proving that AI doesn't replace judgment, it scales it.

---

## 🎯 Your Exercises

### Exercise 2.2: Iterate on Configuration — Design Your Architecture Assistant ⭐ *You lead this one*

**Your role**: Architect designing AI tool that embodies your expertise  
**Time**: 25 minutes  
**[View full exercise →](../EXERCISES.md#exercise-22-iterate-on-configuration--david-designs-agent-personas)**

**What you'll create:**
- `fanhub/docs/AGENT-architecture-assistant.md` — Custom agent design (used in Modules 04 and 07)

**Your "before" pain:**
When you ask Copilot about architecture decisions, you get generic advice:

*"Use microservices for scalability."*  
*"Consider caching for performance."*  
*"Add error handling."*

**These aren't wrong—but they're not contextual.** They don't know:
- Your tech stack (React, Node.js, PostgreSQL)
- Your constraints (3-person team, ship fast, prioritize maintainability)
- Your philosophy (simple over clever, consistency over optimization)
- Your project (TV fan site, read-heavy, user-generated content)

**Result**: You spend time filtering generic advice instead of getting targeted architectural guidance.

**Your "after" win:**
Using plan mode, you iteratively design a "David-Architecture-Assistant" agent that:
- Understands your tech stack and constraints
- Follows your architectural principles
- Knows your project context
- Warns against anti-patterns you've learned to avoid
- Provides pragmatic advice, not theoretical best practices

**Time to design agent**: 20 minutes  
**Iterations to refine**: 3 (plan mode asks clarifying questions)  
**Quality of subsequent architectural advice**: Contextual, specific to your needs

**The profound realization**:
Junior developers with AI can write code. But **only experienced architects can design AI agents that think architecturally.** Your 20 years of knowledge isn't obsolete—it's what makes you able to create tools that embody architectural wisdom.

**Your transformation moment:**
> *"I was worried AI would make my architectural knowledge obsolete. But I realize now—my 20 years of experience is what makes me able to design AI tools that actually understand architecture. The expertise isn't obsolete, it's the competitive advantage."*

---

### Exercise 2.1: Character Detail Challenge — Architectural Validation 🤝 *Team collaboration*

**Your role**: Architecture reviewer for Sarah's implementation plan  
**Time**: Review Sarah's work  
**[View full exercise →](../EXERCISES.md#exercise-21-plan-before-you-code--the-character-detail-challenge-final-form)**

**Why this matters to you:**
Sarah leads Exercise 2.1, using plan mode to create a comprehensive implementation plan for the Character Detail page. As the team's architect, you care that the plan considers:
- Component hierarchy and separation of concerns
- Data flow from API to UI
- Error handling and edge cases
- Integration with existing architecture

**Your observation:**
Sarah's plan mode conversation surfaces architectural questions you would have asked in code review—but **before any code is written**. The AI asks about error states, loading patterns, navigation integration, and future extensibility.

**Your takeaway:**
Plan mode democratizes architectural thinking. Junior developers now get prompted to think through concerns you've learned over 20 years. **This doesn't replace your expertise—it scales it.**

---

### Exercise 2.3: Test Failures — Code Review Perspective 🤝 *Team collaboration*

**Your role**: Supporting Marcus's systematic investigation  
**Time**: Observe Marcus's work  
**[View full exercise →](../EXERCISES.md#exercise-23-diagnose-test-failures-systematically--marcus-investigates-the-build)**

**Why this matters to you:**
Marcus investigates failing tests using plan mode. As someone who's debugged thousands of tests, you recognize the systematic approach: hypothesis generation, evidence gathering, root cause analysis.

**Your observation:**
Plan mode guides Marcus through the same debugging workflow you would use—but makes it explicit and teachable. The investigation becomes a learning artifact, not just a fix.

**Your takeaway:**
Expert workflows can be systematized and shared. Your debugging approach isn't magic—it's methodology. AI can help teach that methodology.

---

### Exercise 2.4: Bug Investigation — Architectural Implications 🤝 *Team collaboration*

**Your role**: Reviewing Sarah's systematic bug analysis  
**Time**: Observe Sarah's work  
**[View full exercise →](../EXERCISES.md#exercise-24-debug-investigation--sarah-investigates-before-fixing)**

**Why this matters to you:**
Sarah investigates an intermittent caching bug using plan mode. The bug reveals a deeper issue: module-level state that doesn't account for user context. This is exactly the kind of architectural smell you've learned to detect.

**Your observation:**
Plan mode helped Sarah find the root cause quickly—and the investigation document becomes a teaching moment about stateful modules and their pitfalls.

**Your takeaway:**
Architectural knowledge can be embedded in investigation processes. Your expertise isn't just "knowing the answer"—it's "knowing what questions to ask." AI can help ask those questions.

---

## 🔗 Connections to Your Work

### Skills You're Building

- **AI customization design**: Creating agents that embody architectural expertise
- **Knowledge systematization**: Turning experience into reusable AI guidance
- **Iterative refinement**: Using plan mode to improve custom configurations
- **Expertise amplification**: Scaling architectural thinking across teams

### How This Helps Your Real Work

For 20 years, you've been the person who:
- Sees architectural problems before they become bugs
- Knows which patterns work in practice vs theory
- Catches design flaws in code review
- Teaches junior developers how to think systematically

**Your fear** was that AI would automate this knowledge, making your expertise redundant.

**The reality** is different: AI can generate code, but it can't design itself. Someone has to:
- Define what "good architecture" means for a specific project
- Identify the constraints and tradeoffs
- Choose patterns appropriate to the team's skill level
- Warn against pitfalls learned from experience

**That someone is you.** And the deeper your expertise, the better your AI customizations.

In this module, you create a custom architecture assistant that knows:
- Your tech stack's strengths and weaknesses
- Your team's constraints (3 people, ship fast, maintainability matters)
- Your architectural philosophy (simple over clever)
- Your project's specific needs (read-heavy TV fan site)

**Junior developers can't create this**—they don't have the context. But you can. And once you do, your architectural thinking scales to every AI interaction the team has.

**This is expertise amplification, not replacement.**

### Artifacts You Create

- `fanhub/docs/AGENT-architecture-assistant.md` — Custom agent design embodying your architectural expertise
  - **Used in Module 04**: Converted to custom instructions for repository-level guidance
  - **Used in Module 07**: Evolved into full custom agent with specific architectural workflows

---

## 💭 Your Transformation Arc

**Before this module (your fears):**
- 😰 Worried that AI will make my 20 years of architectural knowledge obsolete
- 😰 Concerned that junior developers with AI tools won't need senior architects
- 😰 Afraid I'm being replaced by "prompt engineers" who don't understand systems
- 😰 Frustrated by AI giving generic advice instead of project-specific guidance

**After this module (your achievements):**
- ✅ **Designed AI tool embodying expertise**: Architecture assistant that thinks like you do
- ✅ **Discovered expertise amplification**: Deep knowledge makes AI customization powerful
- ✅ **Created reusable artifact**: Agent design used in Modules 04 and 07
- ✅ **Validated irreplaceability**: Only experienced architects can design architectural AI tools
- ✅ **Scaled architectural thinking**: Your 20 years now benefits every AI interaction

**Key insight:**
> *"Junior developers with AI can generate code. But only experienced architects can design AI agents that understand architecture. My expertise isn't being automated—it's being systematized and scaled. That's not replacement, that's leverage."*

---

## 🚀 Quick Start Guide

**If you're short on time (25 minutes):**
1. **Exercise 2.2** (25 min): Design your architecture assistant—the core transformation exercise
2. **Skip**: Exercises 2.1, 2.3, 2.4 (observe team work when you return)
3. **Focus**: Create the artifact that carries forward to Modules 04 and 07

**If you have full time (90 minutes):**
1. **Exercise 2.1** (25 min): Review Sarah's planning approach and architectural implications
2. **Exercise 2.2** (25 min): Design your custom architecture assistant (⭐ your lead)
3. **Exercise 2.3** (20 min): Observe Marcus's systematic investigation methodology
4. **Exercise 2.4** (10 min): Review Sarah's bug analysis for architectural patterns
5. **Synthesis** (10 min): Reflect on how expertise drives AI customization

---

## 📊 Your Success Metrics

### Architecture Advice Quality

| Metric | Before (Generic AI) | After (Custom Agent) |
|--------|---------------------|----------------------|
| **Contextual relevance** | Low (generic patterns) | High (project-specific) |
| **Constraint awareness** | None (assumes unlimited resources) | Embedded (3-person team context) |
| **Philosophy alignment** | Theory-focused | Pragmatic (simple over clever) |
| **Project specificity** | Abstract advice | Concrete guidance for TV fan site |
| **Time filtering advice** | 10-15 min per question | < 2 min (already filtered) |

### Expertise Utilization

| Aspect | Before Module 02 | After Module 02 |
|--------|------------------|-----------------|
| **Knowledge sharing** | Ad-hoc code reviews | Systematized in agent design |
| **Architectural guidance** | One person's time | Scaled via AI customization |
| **Junior developer support** | Limited by your availability | Available in every AI interaction |
| **Documentation of philosophy** | Implicit (in your head) | Explicit (in agent prompt) |

### Transformation Evidence

**Time to create custom agent**: 25 minutes  
**Architectural knowledge captured**: 20 years distilled into agent design  
**Team benefit**: Every AI interaction now considers architectural constraints  
**Modules using this artifact**: 2 (Modules 04 and 07)  
**Expertise obsolescence risk**: Eliminated (you're the only one who can create this)

---

## ➡️ Continue Your Journey

### Within This Module
- [View all exercises](../EXERCISES.md) for full team story
- [Sarah's path](sarah.md) to see systematic validation of ROI
- [Marcus's path](marcus.md) to see investigation methodology

### Next Module
Your next appearance: **[Module 04: Custom Instructions](../../04-custom-instructions/README.md)**

In Module 04, you'll take your architecture assistant design and implement it as custom instructions at the repository level. Your architectural expertise will guide every Copilot interaction, proving that the deepest knowledge creates the most powerful AI tools.

**Preview**: *"The architecture assistant I designed in Module 02 is now embedded in our repository. My 20 years of experience is now working 24/7, reviewing every AI suggestion before the team sees it."*
