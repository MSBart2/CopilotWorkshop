# Marcus's Journey: Module 2 - Plan Mode Thinking

> **Your role**: DevOps Developer (5 years)  
> **Time**: 20 minutes (focused path) / 90 minutes (full module)  
> **Transformation**: From "I'll just rerun the tests" to "I understand what I'm testing and why"

---

## 📖 Your Story in This Module

You started your career during the DevOps revolution. You're fluent in YAML, Docker, Kubernetes, and CI/CD pipelines. Infrastructure as code? You dream in it. But there's a problem you don't talk about much: **application code intimidates you.**

When the development team merges code and tests fail in the pipeline, you can see that tests are failing—but you don't always understand **what they're testing** or **why they're failing**. Your usual approach:
1. Rerun the tests (maybe it's flaky?)
2. Check if dependencies broke (package updates?)
3. Look at the test names and... guess?
4. Eventually ask a dev team member for help

You've been learning from Sarah and David, but you still feel like you're one step behind when it comes to understanding business logic, component behavior, and test validation.

**Today's challenge**: The CI pipeline shows 3 failing tests after the dev team's latest merge. Instead of guessing or immediately asking for help, you'll use plan mode to **systematically understand what the tests validate and diagnose why they're failing**.

This isn't just about fixing tests—it's about building the confidence to understand the development team's work.

---

## 🎯 Your Exercises

### Exercise 2.3: Diagnose Test Failures Systematically — Investigating the Build ⭐ *You lead this one*

**Your role**: DevOps developer systematically investigating application test failures  
**Time**: 20 minutes  
**[View full exercise →](../EXERCISES.md#exercise-23-diagnose-test-failures-systematically--marcus-investigates-the-build)**

**What you'll create:**
- `fanhub/docs/TEST-FAILURE-INVESTIGATION.md` — Systematic test failure analysis (becomes template for Module 03)

**Your "before" pain:**
CI/CD pipeline shows 3 failing tests:
- `CharacterList.test.js` → "renders character cards correctly"
- `Episodes.test.js` → "filters episodes by season"  
- `api/characters.test.js` → "returns 404 for unknown character"

**Old approach**:
1. Stare at test names, try to guess what they do
2. Rerun the pipeline (hoping it's flaky)
3. Check recent commits (who broke it?)
4. Eventually ping dev team: "Hey, tests are failing, can someone look?"

**Time wasted**: 45 minutes  
**Confidence understanding the problem**: 3/10  
**Learning gained**: Minimal (someone else explains and fixes it)

**Your "after" win:**
Using plan mode to systematically investigate:

**Step 1** (5 minutes): Ask plan mode to explain what each test validates
- `CharacterList.test.js` → Validates character data renders with correct structure
- `Episodes.test.js` → Validates season filter updates displayed episodes
- `api/characters.test.js` → Validates API error handling for bad requests

**Step 2** (5 minutes): Use plan mode to generate hypotheses about failure causes
- Recent merge changed character data structure?
- Season filter state management issue?
- API endpoint URL changed?

**Step 3** (5 minutes): Follow investigation plan to examine recent changes
- Found: Backend API response changed from `character.name` to `character.fullName`
- Found: Frontend components still expect `character.name`
- Root cause identified

**Step 4** (5 minutes): Document investigation in `TEST-FAILURE-INVESTIGATION.md`
- What the tests validate
- Why they're failing (schema mismatch)
- Fix approach (update frontend to use `fullName`)
- Investigation methodology (for future use)

**Total time**: 20 minutes (vs 45 minutes of guessing)  
**Confidence understanding the problem**: 8/10  
**Learning gained**: High (understand what tests validate, systematic debugging)

**Your transformation moment:**
> *"I used to feel like tests were a black box—they pass or they fail, and I don't know why. But plan mode helped me understand what each test validates and systematically investigate failures. I'm not just running pipelines anymore—I understand what I'm testing."*

---

### Exercise 2.1: Character Detail Challenge — Pipeline Perspective 🤝 *Team collaboration*

**Your role**: CI/CD observer as Sarah implements with plan mode  
**Time**: Observe Sarah's work  
**[View full exercise →](../EXERCISES.md#exercise-21-plan-before-you-code--the-character-detail-challenge-final-form)**

**Why this matters to you:**
Sarah uses plan mode to thoroughly plan the Character Detail feature before implementation. As the DevOps person, you care that features are thought through before they hit the pipeline—fewer surprises, fewer rollbacks, fewer 2 AM deploys.

**Your observation:**
Sarah's planning conversation addresses:
- What data the feature needs (affects API contracts)
- Error handling approaches (affects monitoring)
- Edge cases (affects test coverage)

**Your takeaway:**
When development teams plan thoroughly, your pipelines run smoother. Fewer "oops, didn't think about that" moments that require pipeline fixes.

---

### Exercise 2.2: Agent Design — DevOps Context 🤝 *Team collaboration*

**Your role**: Supporting David's architecture assistant design  
**Time**: Observe David's work  
**[View full exercise →](../EXERCISES.md#exercise-22-iterate-on-configuration--david-designs-agent-personas)**

**Why this matters to you:**
David designs a custom agent that embodies architectural knowledge. As someone who bridges infrastructure and application code, you care about systematized expertise that helps you understand architectural decisions.

**Your observation:**
David uses plan mode to iteratively refine an agent that knows the team's tech stack, constraints, and patterns. This kind of systematic knowledge capture is exactly what you do in DevOps—turn implicit knowledge into explicit documentation.

**Your takeaway:**
The same principles that make infrastructure reproducible (documentation, automation, systematization) apply to AI customization. David's agent design is like "architecture as code."

---

### Exercise 2.4: Bug Investigation — Pipeline Health 🤝 *Team collaboration*

**Your role**: Observing Sarah's systematic debugging approach  
**Time**: Observe Sarah's work  
**[View full exercise →](../EXERCISES.md#exercise-24-debug-investigation--sarah-investigates-before-fixing)**

**Why this matters to you:**
Sarah investigates an intermittent caching bug that affects the Episodes page. Intermittent bugs are the worst for CI/CD—they cause flaky tests and pipeline instability.

**Your observation:**
Sarah uses plan mode to create a structured investigation strategy, identify the root cause (module-level cache with no season tracking), and document the findings. The investigation process itself becomes a template.

**Your takeaway:**
Systematic investigation beats trial-and-error. This is the same principle that makes infrastructure debugging effective—hypothesize, test, document.

---

## 🔗 Connections to Your Work

### Skills You're Building

- **Application code comprehension**: Understanding what tests validate and why code fails
- **Systematic investigation**: Using structured approaches instead of guessing
- **Test-driven thinking**: Connecting test failures to code behavior
- **Developer collaboration**: Speaking the development team's language

### How This Helps Your Real Work

You've spent 5 years mastering infrastructure: Kubernetes, Docker, Terraform, CI/CD pipelines. You can debug a deployment faster than most people can read the error message. But when application tests fail, you feel that familiar discomfort—**you're outside your expertise zone.**

The frustration isn't that you can't fix it (you usually can, eventually). It's that you don't **understand** it the way you understand infrastructure. You're guessing instead of knowing.

**Plan mode changes this** by giving you a structured approach to understand unfamiliar code:

**For test failures**, you can ask:
- What does this test validate?
- What recent changes might affect it?
- What's my systematic investigation approach?

**For application code**, you can ask:
- What does this component do?
- How does data flow through this feature?
- What architectural patterns are being used?

This isn't about becoming a senior application developer overnight. It's about **having a methodology to close your knowledge gaps systematically** instead of feeling lost.

Your DevOps instincts already value systematization, automation, and documentation. Plan mode applies those same principles to understanding application code—turning implicit knowledge into explicit investigation processes.

### Artifacts You Create

- `fanhub/docs/TEST-FAILURE-INVESTIGATION.md` — Systematic test failure analysis and methodology
  - **Used in Module 02**: Your investigation template
  - **Referenced in Module 03**: Elena uses your approach for test suite design

---

## 💭 Your Transformation Arc

**Before this module (your fears):**
- 😰 Intimidated by application code—feel like I'm always one step behind the dev team
- 😰 Frustrated when tests fail and I don't understand what they're testing
- 😰 Worried that I'm "just the ops person" who doesn't understand development
- 😰 Rely on trial-and-error or asking for help instead of systematic investigation

**After this module (your achievements):**
- ✅ **Systematically investigated test failures**: Understood what tests validate and why they failed
- ✅ **Built investigation methodology**: Created reusable template for future debugging
- ✅ **Increased confidence**: From 3/10 to 8/10 understanding application code issues
- ✅ **Applied DevOps thinking**: Used systematization principles for code comprehension
- ✅ **Documented process**: Investigation approach that helps entire team

**Key insight:**
> *"I used to think understanding application code was about memorizing patterns and frameworks. But it's actually about having a systematic investigation process—the same thing that makes me good at DevOps. Plan mode helps me apply my strengths to my weak spots."*

---

## 🚀 Quick Start Guide

**If you're short on time (20 minutes):**
1. **Exercise 2.3** (20 min): Systematic test failure investigation—your core transformation exercise
2. **Skip**: Exercises 2.1, 2.2, 2.4 (observe team work when you return)
3. **Focus**: Create the investigation methodology that carries forward to Module 03

**If you have full time (90 minutes):**
1. **Exercise 2.1** (25 min): Observe Sarah's planning approach and CI/CD implications
2. **Exercise 2.2** (25 min): Review David's agent design and systematization principles
3. **Exercise 2.3** (20 min): Lead systematic test failure investigation (⭐ your lead)
4. **Exercise 2.4** (10 min): Observe Sarah's debugging methodology
5. **Synthesis** (10 min): Reflect on systematic investigation across all exercises

---

## 📊 Your Success Metrics

### Test Failure Investigation

| Metric | Before (Trial-and-Error) | After (Systematic) |
|--------|--------------------------|---------------------|
| **Time to understand what failed** | 45 minutes | 20 minutes |
| **Confidence understanding problem** | 3/10 | 8/10 |
| **Investigation approach** | Guess and rerun | Hypothesis-driven |
| **Learning gained** | Low (someone else fixes) | High (understand root cause) |
| **Need to ask dev team** | Always | Only for complex issues |

### Application Code Comprehension

| Aspect | Before Module 02 | After Module 02 |
|--------|------------------|-----------------|
| **Understanding test purpose** | Read test name, guess | Systematic analysis of validation |
| **Root cause identification** | Trial-and-error | Structured investigation |
| **Documentation** | None (kept in head) | Investigation template created |
| **Confidence** | Intimidated | Methodical |

### Transformation Evidence

**Time to investigate 3 failing tests**: 20 minutes (vs 45 minutes guessing)  
**Investigation methodology**: Documented and reusable  
**Module using this artifact**: Module 03 (Elena's testing work)  
**Confidence boost**: From 3/10 to 8/10 understanding application code

---

## ➡️ Continue Your Journey

### Within This Module
- [View all exercises](../EXERCISES.md) for full team story
- [Sarah's path](sarah.md) to see systematic ROI validation
- [David's path](david.md) to see expertise-driven AI customization

### Next Module
Your next appearance: **[Module 03: Custom Prompts](../../03-custom-prompts/personas/marcus.md)**

In Module 03, you'll build on your systematic investigation approach by creating custom prompts for common DevOps and development tasks. Your test failure investigation methodology becomes the foundation for automated build analysis.

**Preview**: *"I used to feel intimidated by application code. Now I have systematic approaches for understanding tests, debugging failures, and analyzing builds. Plan mode helped me apply my DevOps thinking to development work."*
