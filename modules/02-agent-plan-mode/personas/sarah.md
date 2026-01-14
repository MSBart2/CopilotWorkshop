# Sarah's Journey: Module 2 - Plan Mode Thinking

> **Your role**: Skeptical Senior Developer (15 years)  
> **Time**: 35 minutes (focused path) / 90 minutes (full module)  
> **Transformation**: From "prove this isn't hype" to "structured thinking delivers real ROI"

---

## 📖 Your Story in This Module

You've survived multiple technology hype cycles. You've seen tools that promised to revolutionize development only to disappear in a year. So when your team starts talking about "AI-assisted development," your instinct is skepticism.

But something changed in Module 01. The Character Detail Challenge showed concrete improvement—measurable, repeatable improvement. Architecture documentation and coding standards made Copilot generate better code. That was real.

Now you're seeing another pattern: even with good documentation, your team still jumps straight to implementation. They ask Copilot to build, get code, realize they missed something, iterate. It works, but it's reactive.

**Your hypothesis**: If structured documentation improves AI output, maybe structured thinking before implementation will improve it even more. Today you'll test that hypothesis with plan mode—and measure the results.

---

## 🎯 Your Exercises

### Exercise 2.1: Plan Before Code — Character Detail Challenge: Final Form ⭐ *You lead this one*

**Your role**: Sprint lead demonstrating plan mode value  
**Time**: 25 minutes  
**[View full exercise →](../EXERCISES.md#exercise-21-plan-before-you-code--the-character-detail-challenge-final-form)**

**What you'll create:**
- `fanhub/docs/FEATURE-PLAN-character-detail.md` — Complete implementation plan
- Final entry in `docs/character-detail-challenge.md` — Module 02 metrics

**Your "before" pain:**
Even with architecture docs and coding standards, the team needed 2-3 iterations to get the Character Detail page right. Questions surfaced AFTER code was written:
- What if a character has no photo?
- How does navigation work?
- What about loading states?
- Should users be able to favorite characters?

**Time lost to reactive iteration**: ~45 minutes per feature  
**Frustration level**: 6/10 — "Better than Module 00, but still inefficient"

**Your "after" win:**
Using plan mode, you create a comprehensive plan that addresses requirements, API needs, component structure, integration points, edge cases, and UX considerations BEFORE writing a single line of code.

**Time invested in planning**: 20 minutes  
**Implementation time**: First-try success  
**Edge cases identified upfront**: 7 (previously found during iterations)  
**Frustration level**: 2/10 — "This is systematic, not chaotic"

**Your transformation moment:**
> *"I've been skeptical of AI tools because they felt chaotic. But plan mode isn't chaotic—it's structured thinking. This is how AI actually helps experienced developers: by amplifying our planning, not replacing our judgment."*

---

### Exercise 2.4: Debug Investigation — Systematic Problem Analysis ⭐ *You lead this one*

**Your role**: Senior debugging a tricky intermittent bug  
**Time**: 10 minutes  
**[View full exercise →](../EXERCISES.md#exercise-24-debug-investigation--sarah-investigates-before-fixing)**

**What you'll create:**
- `fanhub/docs/BUG-ANALYSIS-episode-cache.md` — Root cause analysis

**Your "before" pain:**
Bug report: "Episodes page shows wrong data sometimes—click Season 2, see Season 1 episodes. Refreshing fixes it."

**Old approach**: Read bug report, make assumptions, dive into code, start changing things, "fix" one thing, break another. Total time: 2 hours for a 15-minute bug.

**Your "after" win:**
Using plan mode to structure investigation:
- **5 minutes**: Create investigation strategy (caching? race conditions? state management?)
- **5 minutes**: Follow plan to find the bug (module-level cache doesn't track season IDs)
- **5 minutes**: Document root cause and fix approach

**Total time to understand bug**: 15 minutes (vs 2 hours of trial-and-error)  
**Confidence in fix approach**: 9/10 (vs 6/10 with guess-and-check)

**Your validation:**
> *"This is exactly what I needed to see. Plan mode isn't just for new features—it's for thinking through problems. I've been debugging for 15 years, but having AI help structure my investigation? That's actually useful."*

---

### Exercise 2.2: Agent Design — Supporting Architecture Work 🤝 *Team collaboration*

**Your role**: Reviewing David's custom agent design  
**Time**: Observe David's work  
**[View full exercise →](../EXERCISES.md#exercise-22-iterate-on-configuration--david-designs-agent-personas)**

**Why this matters to you:**
David's creating an architecture assistant that embodies his 20 years of expertise. As sprint lead, you care that senior knowledge gets systematized—not trapped in one person's head.

**Your observation:**
David uses plan mode to iteratively refine an agent that understands your team's tech stack, constraints, and architectural principles. His expertise becomes the input for better AI output.

**Your takeaway:**
Structured AI customization isn't hype—it's a way to scale expertise across the team.

---

### Exercise 2.3: Test Failure Investigation — Understanding Development Work 🤝 *Team collaboration*

**Your role**: Supporting Marcus as he systematically debugs test failures  
**Time**: Observe Marcus's work  
**[View full exercise →](../EXERCISES.md#exercise-23-diagnose-test-failures-systematically--marcus-investigates-the-build)**

**Why this matters to you:**
Marcus came from DevOps and sometimes feels intimidated by application code. Watching him use plan mode to systematically understand test failures shows how structured thinking helps everyone—not just seniors.

**Your observation:**
CI shows 3 failing tests. Instead of randomly rerunning them, Marcus uses plan mode to understand what the tests validate and why they're failing. The investigation becomes a learning moment.

**Your takeaway:**
Plan mode doesn't just speed up experts—it accelerates learning for everyone on the team.

---

## 🔗 Connections to Your Work

### Skills You're Building

- **Hypothesis-driven validation**: Testing plan mode value with measurable metrics
- **Systematic planning**: Using AI to structure thinking before implementation
- **Debug investigation**: Applying plan mode to problem analysis
- **Team leadership**: Demonstrating ROI to overcome skepticism

### How This Helps Your Real Work

As a senior developer with 15 years of experience, you've learned that **sustainable productivity comes from good practices, not heroic effort**. But you're also wary of tools that add process overhead without delivering value.

Plan mode addresses both concerns:

**It's a good practice** because it encourages thinking before implementing—something you already value. But now you have AI as a thinking partner to help structure that analysis, ask questions you might miss, and document the reasoning.

**It delivers measurable value** because you can track the results. The Character Detail Challenge metrics are concrete: fewer iterations, more edge cases identified, faster time to working code. That's not hype—that's engineering.

**It scales expertise** by turning ad-hoc planning conversations into documented artifacts. When David designs a custom agent or Marcus creates an investigation template, that knowledge becomes team property—not locked in someone's head.

This is the kind of tooling you can advocate for: systematic, measurable, and focused on amplifying human judgment rather than replacing it.

### Artifacts You Create

- `fanhub/docs/FEATURE-PLAN-character-detail.md` — Complete implementation plan (used in Module 02, referenced in future feature work)
- `docs/character-detail-challenge.md` — Final metrics entry showing Module 00 → 01a → 01b → 02 progression
- `fanhub/docs/BUG-ANALYSIS-episode-cache.md` — Systematic bug investigation (template for future debugging)

---

## 💭 Your Transformation Arc

**Before this module (your fears):**
- 😰 Worried this is just another hype cycle that wastes experienced developers' time
- 😰 Concerned that AI tools add chaos instead of structure
- 😰 Skeptical that "prompting AI" is a skill worth learning vs deep technical expertise
- 😰 Frustrated by reactive iteration—fix one thing, break another

**After this module (your achievements):**
- ✅ **Validated concrete ROI**: 20 minutes of planning → first-try implementation
- ✅ **Discovered systematic approach**: Plan mode provides structure, not chaos
- ✅ **Measured improvement**: Character Detail metrics show clear progression
- ✅ **Documented reusable processes**: Bug investigation, feature planning
- ✅ **Led by example**: Demonstrated value to the team with evidence

**Key insight:**
> *"The best AI results come from the clearest human thinking. Plan mode helps me think clearly. This isn't about replacing expertise—it's about systematizing the thinking process I already value. That's engineering, not hype."*

---

## 🚀 Quick Start Guide

**If you're short on time (35 minutes):**
1. **Exercise 2.1** (25 min): Character Detail Challenge with plan mode—complete the Golden Thread
2. **Exercise 2.4** (10 min): Debug investigation showing plan mode for problem analysis
3. **Skip**: Exercises 2.2 and 2.3 (observe team work when you return)

**If you have full time (90 minutes):**
1. **Exercise 2.1** (25 min): Lead the Character Detail planning and implementation
2. **Exercise 2.2** (25 min): Review David's agent design work
3. **Exercise 2.3** (20 min): Support Marcus's test failure investigation
4. **Exercise 2.4** (10 min): Systematic bug debugging
5. **Synthesis** (10 min): Review all artifacts created, update team practices

---

## 📊 Your Success Metrics

### Character Detail Challenge Evolution

| Metric | Module 00 | Module 01a | Module 01b | **Module 02** |
|--------|-----------|------------|------------|---------------|
| **Time to working code** | 60+ min | 40 min | 25 min | **20 min planning + first-try** |
| **Prompt attempts** | 4-5 | 2-3 | 1-2 | **1 (with plan)** |
| **Edge cases identified** | 1-2 | 3-4 | 4-5 | **7 (upfront)** |
| **Confidence (1-10)** | 3 | 6 | 7 | **9** |
| **Iterations needed** | 3-4 | 2 | 1-2 | **0 (first-try)** |

### Bug Investigation Comparison

| Metric | Before (Trial-and-Error) | After (Plan Mode) |
|--------|--------------------------|-------------------|
| **Time to understand bug** | 120 minutes | 15 minutes |
| **Investigation approach** | Guess and check | Systematic hypothesis testing |
| **Confidence in fix** | 6/10 | 9/10 |
| **Additional bugs introduced** | 1-2 | 0 |

### ROI Analysis

**Time invested learning plan mode**: 10 minutes (understanding the concept)  
**Time saved per feature**: 25-45 minutes (fewer iterations, fewer backtracking)  
**Time saved per bug**: 105 minutes (systematic vs trial-and-error)  
**Payback period**: First feature (immediate ROI)

---

## ➡️ Continue Your Journey

### Within This Module
- [View all exercises](../EXERCISES.md) for full team story
- [David's path](david.md) to see how expertise drives AI customization
- [Marcus's path](marcus.md) to see systematic investigation in action

### Next Module
Your next appearance: **[Module 09: CLI & Automation](../../09-copilot-cli/personas/sarah.md)**

In Module 09, you'll return as the team ships the FanHub project. With your focus on ROI and measurable value, you'll validate the entire sprint's transformation—from chaos in Module 00 to systematic success by end of day.

**Preview**: *"We shipped a production-ready application in 9 hours. That's not luck—that's systematic AI collaboration."*
