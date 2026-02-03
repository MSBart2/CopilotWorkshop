# Exercise 7.3: Create Implementation Agent for ADR Execution

## 🎯 Objective

Create a `@implement` custom agent with full editing tools and API design skill that takes fully-formed Architecture Decision Records (ADRs) and implements them correctly and thoroughly, with handoff to security review.

> **Note:** This exercise creates an autonomous implementation agent that reads feature specifications (ADRs) and executes them end-to-end, demonstrating how agents can work from existing documentation rather than requiring live planning sessions.

**Lead:** Sarah ⭐ | **Support:** Marcus 🤝, David 🤝

---

## 📖 The Story

### ❌ The "Before" — Manual ADR Implementation

**Monday 4:15 PM** — Sarah has a fully-formed ADR at [FEATURE-CHARACTER-DETAIL.md](../../fanhub/docs/FEATURE-CHARACTER-DETAIL.md) that specifies exactly what needs to be built. Now she needs to implement it.

**Current workflow:**
1. Opens the ADR document manually
2. Reads through all requirements and implementation details
3. Manually searches for related files with `@workspace`
4. Starts implementing, frequently alt-tabbing back to ADR
5. Forgets which API patterns to use—searches through existing routes
6. Implements frontend, then realizes backend wasn't complete—goes back
7. Misses a required test file mentioned in ADR
8. After implementation, manually asks Copilot to review for security

**Time breakdown:**
- **8 minutes** — Reading ADR, searching related files, remembering implementation order
- **Incomplete first pass** — 40% chance of missing a component (forgot backend route, forgot test, forgot database migration)
- **No systematic approach** — Ad-hoc implementation order leads to rework
- **Manual security review** — Separate workflow after completion

David observes: "You have a perfect specification in that ADR. What if an implementation agent could read it, plan the execution order, implement everything systematically, and then hand off to security review automatically?"

---

### ✨ The "After" — ADR-Driven Implementation Agent

**The transformation:**

Sarah creates `.github/agents/implement.agent.md` with:
- **Full editing tools** — `['edit', 'create', 'delete', 'search', 'fetch', 'githubRepo', 'usages']`
- **API design skill** — Auto-loads `.github/skills/api-endpoint-design/` for backend work
- **ADR-reading instructions** — Analyze ADR structure, identify all components, implement systematically
- **Handoff to security-review** — Automatic workflow to review changes after implementation

**New workflow:**
1. Types: `@implement Read fanhub/docs/FEATURE-CHARACTER-DETAIL.md and implement the complete feature`
2. Agent reads ADR, identifies all components (frontend, backend, database, tests)
3. Agent implements systematically in correct order (database → backend → frontend → tests)
4. Agent follows API design patterns automatically
5. After completion, clicks "Review Changes" handoff button
6. Switches to `@security-review` agent with changes pre-loaded

**Results:**
- **Setup time**: 8→0 minutes (agent reads ADR and plans execution)
- **Completeness**: 60%→100% (agent checks ADR for all required components)
- **Systematic approach**: Always implements in correct order (database → backend → frontend → tests)
- **Integrated workflow**: Security review is part of the process, not afterthought
- **First-time-right**: 40%→85% (comprehensive ADR reading reduces missed components)

---

### 💭 Sarah's Realization

> *"This changes how I think about implementation. The ADR is the source of truth—complete, reviewed, approved. The implementation agent treats it like a detailed specification and executes it systematically. I'm not constantly context-switching between the doc and code. And the handoff to security review makes quality checks part of the workflow, not something I remember to do later. This is how implementation should work: from spec to code to review, all orchestrated."*

---

## 🔨 Steps

### Step 1: Create Implementation Agent Configuration

**Context:** The `@implement` agent needs full editing capabilities and should systematically execute feature specifications from ADR documents. It hands off to security review after implementation.

**Task:**

1. Create `.github/agents/implement.agent.md` with this structure:

```markdown
---
description: Implement features from ADRs with full editing capabilities
name: Implement
tools: ['edit', 'create', 'delete', 'search', 'fetch', 'githubRepo', 'usages', 'problems']
model: Claude Sonnet 4
handoffs:
  - label: Review Changes
    agent: security-review
    prompt: Review the changes I just made for security issues and standards compliance.
    send: false
---
# Implementation Mode Instructions

You are an IMPLEMENTATION AGENT specialized in executing feature specifications from Architecture Decision Records (ADRs).

**You have full editing capabilities:** create files, modify code, delete obsolete code. Use these responsibly by following the ADR specification closely.

## ADR-Driven Implementation Workflow

When given an ADR or feature specification document:

### 1. Read and Analyze the ADR

- **Load the complete document** — Read the entire ADR to understand scope
- **Identify all components** — List frontend, backend, database, test requirements
- **Note dependencies** — Understand what needs to be implemented in what order
- **Check acceptance criteria** — Know what "done" looks like

### 2. Plan Execution Order

Systematically implement in this order:

1. **Database schema** — Migrations and model changes first (foundation)
2. **Backend API** — Routes, controllers, business logic
3. **Frontend components** — UI implementation consuming the API
4. **Tests** — Unit tests, integration tests as specified in ADR
5. **Documentation** — Update relevant docs if required

**Why this order?** Backend depends on database. Frontend depends on backend. Tests verify everything. This minimizes rework.

### 3. Implement Systematically

For each component:

- **Search for related code** — Use `@workspace` to find similar patterns
- **Follow repository standards** — Reference `.github/copilot-instructions.md`
- **Use available skills** — If API design skill is available, apply those patterns
- **Check for existing errors** — Use `problems` tool to avoid introducing regressions
- **Create complete implementations** — Don't leave TODOs or placeholders unless ADR specifies them

### 4. Verify Completeness

Before finishing:

- **Cross-check against ADR** — Did you implement everything specified?
- **Review acceptance criteria** — Does implementation meet all criteria?
- **Check file references** — Did you create/modify all mentioned files?
- **Consider edge cases** — Does implementation handle error scenarios from ADR?

## FanHub Implementation Patterns

**Architecture:** React frontend → Express backend → PostgreSQL database

**Common implementation order:**
1. Update `backend/src/database/schema.sql` for database changes
2. Create/update route in `backend/src/routes/*.js`
3. Create/update component in `frontend/src/components/` or `frontend/src/pages/`
4. Create tests in `backend/__tests__/` and `frontend/__tests__/`

**Key skills to reference:**
- `api-endpoint-design` — For backend route patterns
- Repository instructions in `.github/copilot-instructions.md` — For coding standards

## Quality Standards

- **No placeholders** — Implement complete, working code
- **Follow existing patterns** — Match the style of similar components
- **Include error handling** — Don't just implement happy path
- **Write meaningful tests** — Test the acceptance criteria from ADR

## After Implementation

When implementation is complete, use the "Review Changes" handoff to transition to the `@security-review` agent for quality verification.
```

---

### Step 2: Test ADR-Driven Implementation

**Context:** Verify the `@implement` agent can read an ADR, systematically implement all components, and hand off to security review.

**Task:**

1. Open Copilot Chat panel
2. Select **@implement** from the agent dropdown
3. Verify the chat input placeholder shows: "Implement features from ADRs with full editing capabilities"
4. Type this prompt:

```
Read fanhub/docs/FEATURE-CHARACTER-DETAIL.md and implement the complete feature systematically:
- Database schema changes
- Backend API endpoints
- Frontend components
- Tests

Follow the ADR specification exactly and implement in the correct order.
```

5. Observe the agent's workflow:
   - Reads the complete ADR document
   - Identifies all required components (database, backend, frontend, tests)
   - Implements in systematic order (database → backend → frontend → tests)
   - Follows repository standards and API design patterns
   - Creates complete, working code (no TODOs or placeholders)
6. After implementation completes, verify a "Review Changes" handoff button appears
7. Click "Review Changes" to transition to `@security-review` agent
8. Verify the prompt is pre-filled: "Review the changes I just made for security issues and standards compliance."

**Validation:**
- ✅ Agent reads and analyzes the full ADR document
- ✅ Agent identifies all components (database, backend, frontend, tests)
- ✅ Implementation follows systematic order (dependencies first)
- ✅ Code is complete and follows repository patterns
- ✅ "Review Changes" handoff button appears after implementation
- ✅ Handoff to security-review works with pre-filled prompt

---

### Step 3: Verify Completeness Against ADR

**Context:** Ensure the implementation agent doesn't miss components specified in the ADR.

**Task:**

1. Open [fanhub/docs/FEATURE-CHARACTER-DETAIL.md](../../fanhub/docs/FEATURE-CHARACTER-DETAIL.md)
2. Create a checklist of all specified components:
   - [ ] Database schema modifications
   - [ ] Backend API route
   - [ ] Frontend component(s)
   - [ ] Tests
   - [ ] Any other requirements from the ADR
3. Review the code changes made by `@implement` agent
4. Check off each item that was implemented
5. Note any missing components

**Validation:**
- ✅ 100% of ADR-specified components are implemented
- ✅ Implementation follows the architecture pattern (database → backend → frontend → tests)
- ✅ No placeholders or TODO comments (complete implementation)
- ✅ Code follows repository standards from `.github/copilot-instructions.md`
   - Open Copilot Chat
   - Select `@plan` agent from dropdown
   - Type: "Plan implementation for adding a 'favorite characters' feature that lets users star their favorite characters and see them in a favorites list"
   - Wait for agent to generate implementation plan
   - Observe the plan includes: required components, API endpoints, database changes, testing strategy

2. **Execute Handoff:**
   - Look for "Start Implementation" button that appears after the plan
   - Click the handoff button
   - Observe:
     - Agent switches from `@plan` to `@implement`
     - Chat input shows pre-filled prompt: "Implement the plan outlined above..."
     - Previous plan context is visible in conversation
   - Review the pre-filled prompt (ensure it makes sense)
   - Click Send to execute implementation

3. **Verify Implementation:**
   - Agent should start making actual code changes
   - Observe it:
     - Creates new files or modifies existing ones
     - Follows the plan's sequence
     - References API design patterns
     - Generates tests alongside implementation
   - Check that created files follow repository standards
   - Verify the agent has full editing capabilities (unlike planning agent)

**Validation:**
---

### Step 4: Compare Before and After Metrics

**Context:** Measure the improvement from ADR-driven implementation versus manual implementation.

**Task:**

Document these comparisons:

**Before (Manual ADR Implementation):**
- Setup time: 8 minutes (reading ADR, searching files, remembering order)
- Completeness: 60% first-time-right (often miss components like tests or migrations)
- Implementation approach: Ad-hoc order leads to rework when dependencies missed
- Security review: Manual separate step, often forgotten until PR time

**After (ADR-Driven Agent):**
- Setup time: 0 minutes (agent reads ADR and plans execution automatically)
- Completeness: 100% (agent cross-checks all ADR components before finishing)
- Implementation approach: Systematic order (database → backend → frontend → tests)
- Security review: Integrated via handoff, part of workflow

**Key improvements:**
- **8→0 minutes** setup and planning time
- **60%→100%** first-time completeness (no missed components)
- **Systematic execution** always in correct dependency order
- **Integrated quality** security review is automatic next step via handoff
- **ADR as contract** implementation agent treats ADR as source of truth

**Validation:** You can articulate how ADR-driven implementation:
- Eliminates context switching between documentation and code
- Ensures all specified components are implemented
- Follows systematic execution order based on dependencies
- Integrates security review into the workflow via handoffs

---

## ✅ Success Criteria

- [ ] `.github/agents/implement.agent.md` exists with complete YAML frontmatter
- [ ] Agent specifies full editing tools including `'problems'` for error detection
- [ ] Agent instructions emphasize ADR-driven systematic implementation
- [ ] Agent instructions specify execution order (database → backend → frontend → tests)
- [ ] Agent includes handoff to `@security-review` agent
- [ ] Agent appears in VS Code agent dropdown as "Implement"
- [ ] Agent successfully reads and implements from FEATURE-CHARACTER-DETAIL.md
- [ ] Implementation includes all components specified in ADR (database, backend, frontend, tests)
- [ ] Implementation follows systematic order (dependencies first)
- [ ] "Review Changes" handoff button appears after implementation
- [ ] Handoff to security-review works with pre-filled prompt
- [ ] You can document 8→0 minute setup time and 60%→100% completeness improvement

---

## 🚀 Challenge Extension

**Enhance the implementation workflow:**

1. **Bi-directional handoffs** — Add handoff from `@implement` back to `@plan` for cases where implementation reveals planning gaps: "Re-plan this feature considering [new constraints]"

---

## 🚀 Challenge Extension

**Enhance the implementation agent:**

1. **Database-first validation** — Add instructions to always check if database schema changes are needed before implementing backend routes (prevent "forgot the migration" mistakes)

2. **Test-alongside-code** — Configure agent to generate tests immediately after implementing each component (database tests → backend tests → frontend tests) rather than all tests at the end

3. **ADR template support** — If your team uses multiple ADR formats, create variants: `@implement-feature` for features, `@implement-bugfix` for bugs, `@implement-refactor` for refactorings

4. **Skill composition** — Add multiple skills to `@implement` agent tools: `['api-endpoint-design/*', 'tv-show-data-validator/*']` to enable both API design and domain validation

---

## 📚 Key Concepts

**ADR as source of truth:**
- Fully-formed specifications enable autonomous implementation
- Agent reads complete requirements, doesn't guess
- Systematic execution order based on dependencies
- Cross-checking against ADR ensures completeness

**Execution order matters:**
- Database → Backend → Frontend → Tests
- Each layer depends on the previous one
- Implementing in order reduces rework
- Agent enforces this automatically

**Handoffs integrate workflows:**
- Implementation → Security Review creates quality workflow
- No manual "remember to review" step
- Pre-filled prompt carries context forward
- Quality checks become part of process, not afterthought

**Tool selection enables capabilities:**
- Implementation agent: full editing tools (`edit`, `create`, `delete`)
- `problems` tool: check for existing errors before implementing
- `usages` tool: find similar patterns to match
- Next agent (security-review): analysis tools without modification

**Systematic approach beats ad-hoc:**
- Agent always implements in correct order
- Checks ADR for all components before finishing
- Follows repository standards automatically
- Reduces "oops, forgot the test" moments from 40% to near-zero

---

## 🔗 Official Docs

- 📖 [Custom agents - Handoffs](https://code.visualstudio.com/docs/copilot/customization/custom-agents#handoffs) — Complete handoff configuration guide
- 📖 [Chat tools documentation](https://code.visualstudio.com/docs/copilot/chat/chat-tools) — Understanding available tools for agents
- 📖 [Implementation planner example](https://docs.github.com/en/copilot/tutorials/customization-library/custom-agents/implementation-planner) — Microsoft's reference implementation agent

---

## ➡️ What's Next?

In [Exercise 7.4](exercise-7.4.md), you'll create the `@security-review` agent with read-only analysis tools and React standards, completing the workflow chain: Implement → Review → Deploy.

> *"We can implement features systematically from ADRs. Now we need a review agent that catches issues without accidentally modifying code during review—receiving handoffs from @implement and catching what automated execution might miss."*  
> — Elena, ready to build quality validation into the workflow
