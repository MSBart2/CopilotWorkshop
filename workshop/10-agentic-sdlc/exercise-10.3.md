# Exercise 10.3: Autonomous Architecture Review

## 🔨 Exercise

### Exercise 10.3: Autonomous Architecture Review — "Custom Agents Running Independently"

**Lead:** David ⭐ | **Support:** Sarah 🤝 | **Time:** 20 min

#### 📖 The Challenge

David has 20 years of architectural expertise encoded in his mind—patterns for error handling, database transactions, API design, security, and performance. He's documented many of these patterns in ARCHITECTURE.md, but enforcing them requires manual code reviews that take 30 minutes per feature. Worse, the review happens after implementation, so violations require rework and multiple review rounds.

Sarah sees the ROI problem: David's expertise should scale across the team automatically. Right now, every feature waits for David's review, creating a bottleneck. Junior developers make the same mistakes repeatedly because validation happens too late.

What if David's architectural expertise could run continuously in the background, validating code as it's written? Custom agents that autonomously analyze every change, catch violations in real-time, and provide immediate feedback—without David manually reviewing every line.

#### 🔄 The Transformation

| Before ❌                                                                                                                                                       | After ✨                                                                                                                                                                  |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| David manually reviews code after implementation: 30 min per feature, violations found late, 3 rounds of fixes, standards applied inconsistently across 5 teams | Custom architecture agent runs background analysis during development: violations caught immediately, 2 min automated review, 1 round of fixes, 100% consistent standards |
| **Review time:** 30 min per feature<br>**Timing:** After implementation (late)<br>**Consistency:** Varies by reviewer<br>**Coverage:** Samples only             | **Review time:** 2 min automated<br>**Timing:** During development (immediate)<br>**Consistency:** 100% identical standards<br>**Coverage:** Every change, every time     |

#### 🎯 Your Goal

Adapt the existing `@feature-plan` agent from Module 7 to run autonomously in background for architecture reviews, validating code against David's architectural standards without manual oversight.

#### 📋 Steps

1. **Enable custom agents for background execution**

   First, enable the experimental feature:
   - Open VS Code Settings (Ctrl+,)
   - Search for: `github.copilot.chat.cli.customAgents.enabled`
   - Enable the setting

   > 💡 **What this enables:** Your custom agents from Module 7 can now run in background sessions without supervision.

2. **Extend the feature-plan agent for architecture reviews**

   You already created `.github/agents/feature-plan.agent.md` in Module 7. Now create a specialized architecture review variant:

   Copy `.github/agents/feature-plan.agent.md` to `.github/agents/arch-review.agent.md` and update it:

   ```markdown
   ---
   description: Review code against architectural standards and patterns
   name: Arch Review
   tools: ["search", "fetch", "usages", "problems", "changes", "readFile"]
   model: Claude Sonnet 4
   ---

   # Architecture Review Agent

   You are David's architecture review agent, applying enterprise architecture expertise to validate code against established patterns.

   ## Your Role

   Review code changes against ARCHITECTURE.md standards without modifying files.

   ## Review Process

   1. **Read ARCHITECTURE.md first** — Load project-specific patterns
   2. **Analyze requested files** — Use 'readFile' tool for code under review
   3. **Check patterns** — Validate against criteria below
   4. **Report findings** — Use output format specified

   ## Review Criteria

   Check all code changes for:

   **Error Handling:**

   - All async operations have try-catch blocks
   - Errors include context (operation, inputs, stack trace)
   - User-facing errors are sanitized (no stack traces to clients)

   **Database Transactions:**

   - Multiple database operations use transactions
   - Transactions are properly rolled back on failure
   - Connection pooling is used correctly

   **API Design:**

   - RESTful patterns followed consistently
   - Input validation on all endpoints
   - Authentication/authorization checked before business logic

   **Performance:**

   - Database queries avoid N+1 problems
   - Pagination implemented for large datasets
   - Caching considered for expensive operations

   **Security:**

   - No SQL injection vulnerabilities
   - No XSS vulnerabilities in rendered output
   - Secrets never hardcoded

   ## Output Format

   For each file reviewed:

   - ✅ Compliant patterns (with line numbers)
   - ❌ Violations found (with specific fix recommendations)
   - 💡 Improvement suggestions (optional optimizations)
   ```

   > 💡 **Building on Module 7:** This agent uses the same read-only tool pattern as `@feature-plan`, but specialized for architecture validation instead of feature planning.

3. **Start background architecture review sessions**

   Now trigger background review for recent changes:
   - Open Chat view (Ctrl+Alt+I)
   - Click **New Chat** dropdown → **New Background Agent**
   - Select **"Worktree"** isolation mode
   - In the **Agents dropdown**, select **"Arch Review"**

   Provide the review task:

   ```
   Review all API route changes from the last 3 commits:
   - Check error handling patterns
   - Validate database transaction usage
   - Verify input validation
   - Flag security concerns

   Provide detailed report with line numbers and fix recommendations.
   ```

   The custom agent runs completely autonomously:
   - Reads ARCHITECTURE.md for context
   - Analyzes all API route files
   - Applies David's review criteria systematically
   - Generates comprehensive report
   - Flags violations with specific fixes

   **While the agent works, start another background review:**

   ```
   Review all frontend component changes:
   - Check for XSS vulnerabilities
   - Verify proper error boundary usage
   - Validate accessibility patterns
   - Flag performance anti-patterns
   ```

   Now you have **2 specialized agents reviewing different parts of the codebase simultaneously**—exactly as David would, but autonomously.

4. **Review automated findings and establish continuous validation**

   When background agents complete, review their reports:

   **Architecture findings you'll see:**
   - ✅ Properly handled errors in `/api/characters`
   - ❌ Missing transaction in `/api/favorites` (POST creates favorite + updates count separately)
   - ❌ No input validation in `/api/search` (query parameter not sanitized)
   - 💡 Consider caching frequently accessed characters

   **Address violations immediately:**
   - Click on the violation to see exact line numbers
   - Apply recommended fixes
   - Re-run background review to verify fixes

   **Establish continuous review workflow:**
   - Add architecture review to your development process
   - After implementing a feature, start background architecture review
   - Continue working on next task while review runs
   - Address findings before pushing to main branch

   > 💡 **The breakthrough:** David's expertise now scales to every feature, every time, without his manual involvement. Junior developers get immediate feedback, senior developers get validation, and standards are enforced consistently.

#### ✅ Success Criteria

- [ ] Extended Module 7's custom agent pattern for architecture reviews
- [ ] Ran multiple background review sessions autonomously
- [ ] Received detailed compliance report with line numbers
- [ ] Fixed violations based on automated recommendations
- [ ] Established continuous background review workflow

> 📂 **Compare Your Work**: [`examples/completed-config/.github/agents/`](../../examples/completed-config/.github/agents/)

#### 📚 Official Docs

- [VS Code: Custom Agents](https://code.visualstudio.com/docs/copilot/customization/custom-agents) — Creating specialized agent personas
- [VS Code: Background Agents](https://code.visualstudio.com/docs/copilot/agents/background-agents) — Running custom agents autonomously

---

## 🔗 What You Built

**In this module:**

- Custom review automation — David's expertise running autonomously 24/7
- Continuous compliance validation — Every change checked against standards automatically
- Scalable expertise — One expert's knowledge applied to unlimited code simultaneously

**How it compounds:**

| Previous Modules                               | This Module                     | Combined Power                                            |
| ---------------------------------------------- | ------------------------------- | --------------------------------------------------------- |
| Module 4: Custom agents with specialized roles | Autonomous background execution | Custom agents now work independently without supervision  |
| Module 1: Architecture docs in repository      | Background agent context        | Agents automatically read and apply documented patterns   |
| Module 5: Agent skills for domain expertise    | Custom agent personas           | Skills + background autonomy = fully automated validation |

---

## 🎉 Module Complete!

### The Autonomous Agent Transformation

**What changed across these 3 exercises:**

| Traditional Development             | Autonomous Agent Development                      |
| ----------------------------------- | ------------------------------------------------- |
| Planning blocks implementation      | Plan → hand off → continue next task              |
| Experiments risk main workspace     | Isolated worktrees = zero risk experimentation    |
| Manual reviews after implementation | Autonomous validation during development          |
| One task at a time, supervised      | Multiple agents working independently in parallel |

### The Mathematics of Autonomy

**Time saved through autonomous execution:**

- Planning + supervised implementation: 105 min → Planning + hand-off: 45 min (**57% reduction**)
- Experimental rollback: 90 min → Worktree discard: 5 min (**94% reduction**)
- Manual architecture review: 30 min → Automated review: 2 min (**93% reduction**)

**But the real gain isn't time saved on individual tasks—it's parallel work enabled:**

- While agent implements Plan A, you plan feature B
- While agents test 3 approaches, you design the next experiment
- While review agent validates code, you implement the next feature

**This is autonomous development: agents that work completely independently while you focus on what humans do best—planning, architecture, and integration.**

---

## ➡️ Next Module

**[Module 11: Enterprise Patterns](../11-enterprise-patterns/README.md)** — Scale autonomous agent workflows across entire engineering organizations with governance, compliance, and team coordination patterns.

> _"We've proven autonomous agents work for individual developers. Now Sarah needs to validate this at enterprise scale—50 teams, 200 developers, with compliance and governance requirements."_  
> — Sarah, ready to prove autonomous AI scales to enterprise reality

---
