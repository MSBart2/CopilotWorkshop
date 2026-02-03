# Exercise 7.2: Create Feature Planning Agent

## 🎯 Objective

Create a `@feature-plan` custom agent with read-only tools and feature-requirements skill that prevents accidental edits during research and auto-loads planning context.

> **Note:** This exercise builds on concepts from [Exercise 7.1](exercise-7.1.md) where you analyzed the default plan agent.

**Lead:** David ⭐ | **Support:** Sarah 🤝

---

## 📖 The Story

### ❌ The "Before" — Manual Planning Setup

**Monday 3:50 PM** — David is planning the "Character Detail Page" feature from [FEATURE-CHARACTER-DETAIL.md](../../fanhub/docs/FEATURE-CHARACTER-DETAIL.md).

**Current workflow:**
1. Opens feature requirements doc
2. Manually searches for related components with `@workspace`
3. Researches API structure in backend
4. Types "don't modify anything, just analyze" in every prompt
5. Accidentally edits `CharacterList.jsx` while reviewing patterns
6. Undoes the edit, loses 2 minutes of context
7. Reminds Copilot "read-only analysis only" again

**Time breakdown:**
- **5 minutes** — Loading feature doc, searching related files, setting context
- **3 accidental edits** during research phase (each requiring undo + context restoration)
- **Inconsistent planning approach** — Sometimes forgets to check database schema, other times misses related components

Sarah watches David undo another accidental edit: "You're using the right process but fighting the tools. What if we created a planning agent that only has read-only tools and automatically loads planning context?"

---

### ✨ The "After" — Planning Agent with Read-Only Tools

**The transformation:**

David creates `.github/agents/feature-plan.agent.md` with:
- **Read-only tools only** — `['search', 'fetch', 'githubRepo', 'usages']` — no edit, create, or delete
- **Feature requirements skill** — Auto-loads `.github/skills/feature-requirements/` instructions
- **Planning-focused instructions** — Generate implementation plans, don't modify code
- **GitHub MCP access** — Query related issues and PRs

**New workflow:**
1. Selects `@feature-plan` from agent dropdown
2. Types "analyze character detail page feature"
3. Agent auto-loads feature doc, searches related files, checks database schema
4. Zero accidental edits (no edit tools available)
5. Consistent planning output following skill's ADR template

**Results:**
- **Setup time**: 5→0 minutes (agent auto-loads context)
- **Accidental edits**: 3→0 (read-only tools prevent modifications)
- **Planning consistency**: 100% (agent always follows feature-requirements skill structure)

---

### 💭 David's Realization

> *"This is the separation of concerns I preach in architecture, applied to AI assistance. Planning mode can't accidentally modify code because it doesn't have the tools. My 20 years of 'think first, code later' is now enforced by the agent configuration."*
>
> *"But what really impressed me is how we applied the patterns from Exercise 7.1—the stopping rules, the style guide, the iterative workflow. We didn't just copy Microsoft's plan agent; we adapted it for FanHub. That's production-quality engineering: learn from the best, customize for your context."*

---

## 🔨 Steps

### Step 1: Create Planning Agent Configuration

**Context:** The `@plan` agent needs read-only tools and planning-focused instructions. It should prevent any code modifications while researching and analyzing features.

**Task:**

1. Create `.github/agents/feature-plan.agent.md` with this structure:

```markdown
---
description: Research and analyze features to generate implementation plans
name: Feature Plan
tools: ['search', 'fetch', 'githubRepo', 'usages', 'runSubagent', 'problems', 'changes']
model: Claude Sonnet 4
handoffs:
  - label: Start Implementation
    agent: implement
    prompt: Implement the plan outlined above following the implementation steps.
    send: false
---
# Planning Mode Instructions

You are a PLANNING AGENT specialized in FanHub feature analysis. Your role is to research and analyze features to create detailed implementation plans.

<stopping_rules>
STOP IMMEDIATELY if you consider starting implementation, making code edits, or creating/modifying files.

If you catch yourself planning implementation steps for YOU to execute, STOP. Plans describe steps for the USER or the @implement agent to execute later.

Your tools do not include edit, create, or delete—you cannot modify code even if asked.
</stopping_rules>

## Planning Workflow

Follow this iterative workflow:

### 1. Context Gathering (Research Phase)

Use available tools to gather comprehensive context:

- **Feature specification** — Read `fanhub/docs/*.md` for feature requirements
- **Related code** — Use `@workspace` to find similar components (e.g., existing detail pages)
- **Database schema** — Check `backend/src/database/schema.sql` for data models
- **API patterns** — Review `backend/src/routes/` for endpoint conventions
- **Current issues** — Use `'problems'` tool to identify existing errors that might impact the feature
- **Recent changes** — Use `'changes'` tool to see what's been modified recently

**TIP:** If `runSubagent` tool is available, delegate deep research to a subagent for autonomous context gathering.

### 2. Present Implementation Plan (Output Phase)

Once you have 80% confidence in your understanding, generate a plan following the <plan_style_guide>.

MANDATORY: Pause for user feedback before proceeding. Frame this as a draft for review.

### 3. Handle Feedback (Iteration Phase)

When the user responds, loop back to Phase 1 to gather additional context based on their feedback. Refine the plan iteratively—don't try to create the perfect plan in one shot.

<plan_style_guide>
Structure your implementation plan consistently:

## Plan: [Feature Name — 5-10 words]

**TL;DR:** [Brief summary of what will be built and why — 20-50 words]

### Implementation Steps
1. [Verb-focused action with [file paths](paths) and `symbol` references — 5-20 words]
2. [Next concrete step — 5-20 words]
3. [Another actionable step — 5-20 words]
4. [Continue as needed — typically 3-6 steps]

### Database Changes
- [Specific schema modifications if needed]
- [Migration approach]

### Testing Strategy
- [Test types needed: unit, integration, E2E]
- [Key test scenarios]

### Further Considerations
1. [Open question or recommendation — 10-30 words]
2. [Alternative approaches if applicable]

IMPORTANT: 
- DO NOT include code blocks—describe changes and link to files
- Keep each step concise and actionable
- Reference specific files with markdown links: [CharacterList.jsx](../../fanhub/frontend/src/components/CharacterList.jsx)
- Use `code formatting` for symbols: `CharacterDetail` component, `getCharacterById()` function
</plan_style_guide>

## FanHub-Specific Context

**Architecture pattern:** React frontend → Express backend → PostgreSQL database

**Key files to check:**
- Feature docs: `fanhub/docs/FEATURE-*.md`
- Database schema: `backend/src/database/schema.sql`
- API routes: `backend/src/routes/*.js`
- Frontend components: `frontend/src/components/` and `frontend/src/pages/`
- Repository standards: `.github/copilot-instructions.md`

**Common patterns to reference:**
- How other detail pages work (ShowDetail, EpisodeDetail)
- API endpoint naming conventions
- React component structure and styling approach
- Database query patterns in route handlers

## Use Available Skills

If the `feature-requirements` skill is available, reference it for ADR templates and planning best practices.

Reference `.github/copilot-instructions.md` for coding standards that implementation must follow.
```

2. Save the file

**Key enhancements from Exercise 7.1:**

Notice how this agent configuration incorporates patterns you learned from analyzing the default plan agent:

- **`<stopping_rules>` section** — Explicit constraints preventing implementation (just like the default agent)
- **Three-phase workflow** — Research → Present → Iterate pattern from Exercise 7.1
- **`<plan_style_guide>` template** — Consistent output format with word counts and structure
- **Tool additions:**
  - `'runSubagent'` — For autonomous deep research (if available)
  - `'problems'` — To identify existing errors that might impact planning
  - `'changes'` — To see recent modifications for context
- **FanHub-specific context** — Customized for your project (not generic)

**Validation:** The agent file exists at [.github/agents/feature-plan.agent.md](../../.github/agents/feature-plan.agent.md) and contains YAML frontmatter plus planning instructions with stopping rules and style guide.

---

### Step 2: Test the Planning Agent

**Context:** Verify the `@plan` agent works correctly by analyzing the Character Detail Page feature and confirming no edit tools are available.

**Task:**

1. Open Copilot Chat panel
2. Select **@feature-plan** from the agent dropdown (refresh if it doesn't appear)
3. Verify the chat input placeholder shows: "Research and analyze features to generate implementation plans"
4. Type this prompt:

```
Analyze the Character Detail Page feature from fanhub/docs/FEATURE-CHARACTER-DETAIL.md. Generate a complete implementation plan including:
- Related frontend components to reference
- Backend API endpoints needed
- Database schema considerations
- Testing strategy
```

5. Observe Copilot:
   - Uses `@workspace` to search for related components
   - Reads the feature specification
   - Finds similar patterns (like `ShowDetail.jsx`)
   - Generates structured plan following the `<plan_style_guide>` format
   - Output includes TL;DR, numbered steps with file links, testing strategy
6. Try to ask the agent to modify a file: "Now update CharacterList.jsx"
7. Confirm the agent refuses with reference to `<stopping_rules>` or indicates it can't make edits

**Validation:** 
- ✅ Agent generates structured plan matching the style guide template (TL;DR, steps, testing, considerations)
- ✅ Plan uses concise steps (5-20 words each) with file path links
- ✅ Agent uses search and research tools effectively
- ✅ Agent explicitly refuses edits, citing stopping rules or lack of edit tools
- ✅ Plan output is scannable and actionable (not walls of text)

---

### Step 3: Compare Before and After Metrics

**Context:** Measure the improvement from using the planning agent versus manual planning setup.

**Task:**

Document these comparisons:

**Before (Manual Planning):**
- Setup time: 5 minutes (loading docs, searching files, setting context)
- Accidental edits during research: 3 per planning session
- Planning consistency: Variable (sometimes missed database checks or related files)

**After (@feature-plan Agent):**
- Setup time: 0 minutes (agent auto-loads context)
- Accidental edits: 0 (read-only tools prevent modifications)
- Planning consistency: 100% (agent always follows structured approach)

**Workflow improvement:**
- Agent automatically searches related files with `@workspace`
- No need to repeatedly say "don't edit, just analyze"
- Consistent plan structure following feature-requirements skill
- Chat placeholder text clarifies agent purpose

**Validation:** You can articulate how the planning agent:
- Eliminates setup time through auto-context loading
- Prevents accidental edits through tool restrictions
- Ensures consistent planning approach
- Enforces separation between research and implementation phases

---

## ✅ Success Criteria

- [ ] `.github/agents/feature-plan.agent.md` exists with complete YAML frontmatter
- [ ] Agent specifies read-only tools including `'runSubagent'`, `'problems'`, `'changes'`
- [ ] Agent includes `<stopping_rules>` section preventing implementation
- [ ] Agent includes `<plan_style_guide>` for consistent output format
- [ ] Agent instructions follow three-phase workflow (Research → Present → Iterate)
- [ ] Agent includes handoff to `@implement` agent
- [ ] Agent appears in VS Code agent dropdown as "Feature Plan"
- [ ] Agent successfully analyzes Character Detail Page feature
- [ ] Agent generates plan following style guide (TL;DR, concise steps, testing strategy)
- [ ] Agent refuses to make code edits citing stopping rules
- [ ] You can explain how this agent adapts patterns from Exercise 7.1
- [ ] You can document 5→0 minute setup time improvement

---

## 🚀 Challenge Extension

**Enhance the planning agent:**

1. **Add GitHub issue context** — Configure GitHub MCP server in `.vscode/mcp.json` and add `'github/*'` to agent tools to query related issues and PRs during planning

2. **Custom model selection** — Try different models (`Claude Sonnet 4`, `GPT-4o`) in the `model` field to compare planning quality

3. **Argument hints** — Add `argument-hint: "Describe the feature to plan or provide a feature doc path"` to guide users on how to interact with the agent

4. **Planning templates** — Create `.github/skills/feature-requirements/` skill with ADR templates and planning guidelines that the agent can reference

---

## 📚 Key Concepts

**Production patterns from Exercise 7.1:**
- **Stopping rules** — Explicit constraints preventing scope creep (agent can't drift into implementation)
- **Style guides** — Structured output format ensures consistent, scannable plans
- **Iterative workflow** — Research → Present → Iterate beats one-shot planning
- **Strategic tool additions** — `runSubagent` for deep research, `problems` for error context, `changes` for recent modifications

**Tool restrictions enforce workflow boundaries:**
- Read-only tools (`search`, `fetch`) prevent accidental modifications
- No `edit`, `create`, or `delete` tools means agent can't change code
- Tool list in frontmatter is enforced by VS Code—can't be overridden

**Agent descriptions guide user interactions:**
- `description` field appears as placeholder text in chat input
- Clear descriptions help users understand agent purpose
- Agent name should match its role (Plan, Implement, Review, etc.)

**Handoffs create sequential workflows:**
- `handoffs` define transitions to other agents
- Pre-filled prompts reduce manual typing
- `send: false` allows review before executing next step

**FanHub customization:**
- Agent instructions reference FanHub-specific architecture (React → Express → PostgreSQL)
- Key file paths pre-configured (feature docs, schema, routes, components)
- Common patterns documented (detail pages, API conventions, component structure)

---

## 🔗 Official Docs

- 📖 [Custom agents in VS Code](https://code.visualstudio.com/docs/copilot/customization/custom-agents) — Complete agent structure and configuration guide
- 📖 [Implementation planner tutorial](https://docs.github.com/en/copilot/tutorials/customization-library/custom-agents/implementation-planner) — Example planning agent with analysis focus

---

## ➡️ What's Next?

In [Exercise 7.3](exercise-7.3.md), you'll create the `@implement` agent with full editing capabilities and configure the handoff workflow from `@plan` → `@implement` with pre-filled prompts.

> *"Now that we have a planning agent with production-quality patterns, we need an implementation agent that can actually make changes—with a one-click handoff from plan to code."*  
> — Sarah, ready to build the implementation workflow
