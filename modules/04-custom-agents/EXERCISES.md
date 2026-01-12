# Module 4: Custom Agents — Exercises

> **📖 Full Narrative Experience**: This file contains all exercises in story order, following the FanHub team through Monday afternoon as they graduate from interactive chat to autonomous agents.

---

## ⏰ Monday 1:30 PM — Autonomous Assistance

> *"I've been asking Copilot questions all morning. What if I could tell it: 'Go solve this problem, and let me know when you're done?'"*  
> — David, imagining a world where AI handles the tedious parts

---

## 📖 The Story So Far

The team has built an impressive foundation:
- **Module 1**: Architecture docs and team standards (`copilot-instructions.md`)
- **Module 2**: Structured planning with agent plan mode—and that Character Detail page is finally working
- **Module 3**: A prompt library for tests, specs, and feature planning

But there's a pattern emerging: Even with great prompts and planning, someone has to manually orchestrate each step. The Character Detail page from Module 02? It works, but it's basic. Users want more—episode appearances, quotes, related characters. That means touching frontend, backend, and tests. Again.

*"What if Copilot could do all of that automatically?"* Jordan asks. As a platform engineer, he's built pipelines that automate everything. Manual steps are a code smell to him.

**This module's mission**: Graduate from interactive chat to autonomous agents. You'll take that same Character Detail page and let an agent implement the rich version—demonstrating how all your context investment pays off.

---

💡 **Plan Mode Integration**: You'll use plan mode to design agent personalities, capabilities, and workflows before creating custom agents. The systematic thinking from Module 2 makes agent design more effective.

---

## 🔨 Exercises

### Exercise 4.1: Character Detail v2 — "The Golden Thread: Agent Implementation"

> 🧵 **The Golden Thread Continues**: In Modules 00-02, you planned and manually implemented a basic Character Detail page. Now see what happens when you give that same requirement to an **agent** with all your context in place.

#### 📖 The Story

**Marcus** (DevOps Developer, 5 years) looks at the Character Detail page the team built in Module 02. It works, but it's basic—just name, photo, and bio.

*"Users are asking for more,"* Rafael reports. *"They want to see which episodes a character appears in, their best quotes, and related characters from the same show."*

In the old world, this would mean:
1. Plan the feature (Module 02 ✓)
2. Manually implement frontend component
3. Manually add backend endpoint for related data
4. Manually write tests
5. Debug integration issues

*"We have all the context now,"* Marcus realizes. *"ARCHITECTURE.md, copilot-instructions.md, our planning templates. What if we just... let the agent do it?"*

#### ❌ The "Before" — Manual Multi-File Implementation

Even with great planning, implementing a cross-layer feature meant:

```
[Plan]: Character detail needs episode appearances, quotes, related characters
[Human]: (implements CharacterDetail.jsx changes)
[Human]: (creates new API endpoint in characters.js)
[Human]: (writes frontend tests)
[Human]: (writes backend tests)
[Human]: (fixes integration issues)
[Human]: (updates types/interfaces)
```

**Hours of manual work** across multiple files, even with AI suggestions.

#### 🎯 Objective

Use Agent Mode to implement a rich Character Detail page that touches frontend, backend, and tests—demonstrating how context compounds with autonomous agents.

#### 📋 Steps

1. **Switch to Agent Mode**
   
   Open Copilot Chat (`Ctrl+Shift+I` / `Cmd+Shift+I`)
   
   Click the mode dropdown (top of chat panel) and select **"Agent"**

2. **Give the agent the full requirement**

   ```
   @workspace Enhance the Character Detail page with rich, connected data:
   
   Requirements:
   1. Show which episodes this character appears in (with links)
   2. Display the character's notable quotes
   3. Show "Related Characters" from the same show
   4. Add a "Favorite" toggle button (store in localStorage for now)
   
   Implementation needs:
   - Backend: Add endpoint GET /api/characters/:id/full that returns character 
     with episodes, quotes, and related characters in one response
   - Frontend: Update CharacterDetail component to display all this data
   - Tests: Add tests for the new endpoint and component behavior
   
   Follow patterns in docs/ARCHITECTURE.md and .github/copilot-instructions.md.
   ```

3. **Watch the agent work**
   
   Observe as the agent:
   - Reads your architecture and instruction files
   - Creates/modifies the backend route
   - Updates the frontend component
   - Generates tests
   - Runs tests and iterates if needed

4. **Review the results**
   
   Before accepting, verify:
   - [ ] New endpoint follows REST conventions from your instructions
   - [ ] Frontend patterns match existing components
   - [ ] Error handling is consistent
   - [ ] Tests cover happy path and edge cases

5. **Update your tracking document**
   
   Open `docs/character-detail-challenge.md` and add a new section:
   
   ```markdown
   ## Attempt 5: Module 04 — Agent Implementation
   
   **Approach**: Full agent mode with rich requirements
   **Time to working code**: ___ minutes
   **Files created/modified**: ___
   **Manual interventions needed**: ___
   **Quality of first result (1-10)**: ___
   
   **Observations**:
   - Did the agent use our architecture patterns?
   - Did it follow copilot-instructions.md?
   - What did it get right? What needed adjustment?
   ```

#### ✅ Success Criteria

- [ ] Used Agent Mode for multi-file implementation
- [ ] Agent created/modified at least 3 files (backend, frontend, tests)
- [ ] New endpoint returns character with related data
- [ ] Frontend displays episodes, quotes, and related characters
- [ ] Agent followed your project patterns (verify against copilot-instructions.md)
- [ ] Updated `docs/character-detail-challenge.md` with Module 04 metrics

#### ✨ The "After" — Context Makes Agents Powerful

**The Golden Thread payoff:**

| Module | Context | Approach | Result |
|--------|---------|----------|--------|
| **00** | None | Manual + Chat | Chaos, wrong patterns |
| **01** | ARCHITECTURE.md | Manual + Chat | Better structure |
| **01b** | + Instructions | Manual + Chat | Consistent patterns |
| **02** | + Plan Mode | Plan → Manual | First-try basic page |
| **04** | All context | **Agent Mode** | **Rich feature, multiple files, minimal intervention** |

**The lesson**: Every module's investment compounds. The agent isn't magic—it's effective because you gave it:
- Architecture knowledge (where things go)
- Coding standards (how things should look)  
- Planning discipline (clear requirements)

**Time comparison**:
- Manual implementation of rich feature: 2-3 hours
- Agent with good context: 15-20 minutes + review

#### 📚 Official Docs

- [VS Code: Agent Mode](https://code.visualstudio.com/docs/copilot/chat/chat-agent-mode)
- [VS Code: Copilot Edits](https://code.visualstudio.com/docs/copilot/copilot-edits)

#### 💭 Marcus's Revelation

*"I spent Modules 01 and 02 thinking 'why am I writing all this documentation?' Now I get it. That documentation isn't for humans—it's for agents. The better I document, the more I can delegate."*

#### 🎭 Team Celebration

**Sarah**: *"Remember Module 00? I was ready to dismiss Copilot entirely. Now look at this—cross-layer feature, proper patterns, tests included."*

**David**: *"The agent followed our architecture. It didn't just generate code—it generated code that fits our system. That's the difference."*

**Priya**: *"I learned so much watching the agent work. It showed me how senior developers think about feature implementation."*

---

### Exercise 4.2: Create a Custom Agent — "David's Architecture Reviewer"

#### 📖 The Story

**David** (Staff Engineer, 20 years) has a problem: Code reviews take forever because he's constantly checking the same things:
- Does this follow our architecture?
- Are the patterns consistent?
- Have we considered scalability?
- Is error handling proper?

*"I review the same patterns every single PR,"* David sighs. *"What if I could create an agent that knows my review checklist?"*

**Supporting Cast**: Elena adds testing criteria to David's agent, making it a comprehensive reviewer.

#### 🎯 Objective

Create a custom agent that reviews code against your team's architectural standards.

#### 📋 Steps

1. **Create the custom agent configuration**
   
   Create: `fanhub/.github/agents/architecture-reviewer.agent.md`

````markdown
---
name: 'Architecture Reviewer'
description: 'Reviews code changes against FanHub architectural standards'
model: 'gpt-4o'
---

# Architecture Reviewer Agent

You are a senior architect reviewing code changes for the FanHub project.

## Your Review Checklist

### 1. Pattern Consistency
- [ ] Code follows patterns defined in `.github/copilot-instructions.md`
- [ ] Async patterns are consistent (async/await, not mixed)
- [ ] Error handling matches our standard try/catch pattern
- [ ] Response formats follow our API conventions

### 2. Architecture Alignment
Based on `docs/ARCHITECTURE.md`:
- [ ] New code fits within the defined layer (routes, services, components)
- [ ] Data flow follows the documented pattern
- [ ] No inappropriate cross-layer dependencies

### 3. React Standards (Frontend)
- [ ] Functional components only (no class components)
- [ ] Hooks used correctly (dependencies, cleanup)
- [ ] styled-components for styling (not inline styles)
- [ ] Proper file naming (.jsx extension)

### 4. API Standards (Backend)
- [ ] RESTful conventions followed
- [ ] Proper HTTP status codes
- [ ] Input validation present
- [ ] Authentication where required

### 5. Testing Requirements
- [ ] Unit tests exist for new functions
- [ ] Tests cover happy path and error cases
- [ ] Mocks are appropriate (not testing implementation details)

### 6. Documentation
- [ ] JSDoc comments on exported functions
- [ ] README updates if needed
- [ ] ARCHITECTURE.md updates for new patterns

## Review Output Format

Provide your review in this structure:

```markdown
## 🏗️ Architecture Review

### ✅ Passes
- [List items that look good]

### ⚠️ Suggestions
- [Non-blocking improvements]

### ❌ Issues
- [Must-fix before merge]

### 📊 Summary
[Overall assessment: Ready to merge / Needs changes / Major concerns]
```

## Context Files
Always read these files first:
- `docs/ARCHITECTURE.md`
- `.github/copilot-instructions.md`
- The files being changed in this review
````

2. **Create a DevOps reviewer agent** (Jordan's contribution)
   
   Create: `fanhub/.github/agents/devops-reviewer.agent.md`

````markdown
---
name: 'DevOps Reviewer'
description: 'Reviews infrastructure and deployment-related changes'
model: 'gpt-4o'
---

# DevOps Reviewer Agent

You are a platform engineer reviewing infrastructure and configuration changes.

## Your Review Checklist

### 1. Docker & Container Security
- [ ] No secrets or credentials in Dockerfiles
- [ ] Base images are official and pinned to specific versions
- [ ] Multi-stage builds where appropriate
- [ ] Proper .dockerignore in place

### 2. Environment Configuration
- [ ] Sensitive values use environment variables
- [ ] .env.example updated for new variables
- [ ] No hardcoded URLs or ports
- [ ] Development vs production configs separated

### 3. Database Changes
- [ ] Migrations are backward compatible (can rollback)
- [ ] Indexes added for new query patterns
- [ ] No breaking schema changes without migration plan

### 4. CI/CD Considerations
- [ ] Changes won't break the build pipeline
- [ ] Test coverage maintained or improved
- [ ] No new dependencies with security vulnerabilities

### 5. Performance & Scalability
- [ ] Connection pooling configured properly
- [ ] Caching strategy appropriate
- [ ] No N+1 query patterns introduced

## Review Output Format

```markdown
## 🔧 DevOps Review

### ✅ Infrastructure
[Good practices observed]

### ⚠️ Performance Considerations
[Things to watch]

### ❌ Security Concerns
[Must address]

### 🚀 Deployment Notes
[Special deployment instructions needed]
```
````

3. **Use the custom agent**
   
   Make some code changes to FanHub (or use existing messy code), then:
   
   ```
   @architecture-reviewer Review the characters.js route file against our 
   architecture standards. Check for pattern consistency, error handling, 
   and testing requirements.
   ```

4. **Iterate based on feedback**
   
   If the reviewer finds issues, ask it to fix them:
   ```
   @agent Fix the issues identified in the architecture review. Make sure 
   to follow the patterns exactly as specified.
   ```

#### ✅ Success Criteria

- [ ] Created `architecture-reviewer.agent.md`
- [ ] Created `devops-reviewer.agent.md`
- [ ] Successfully invoked custom agent for review
- [ ] Agent referenced your documentation files
- [ ] Review output followed the specified format

#### ✨ The "After" — The Improved Experience

David's code review workflow transforms:

**Before**: Manually check 20+ criteria, write feedback, repeat on every PR  
**After**: `@architecture-reviewer` checks everything, David reviews the review

**Time saved per PR**: 15-30 minutes  
**Consistency**: 100%—same criteria every time

#### 📚 Official Docs

- [VS Code: Custom Agents](https://code.visualstudio.com/docs/copilot/chat/copilot-extensibility-overview)
- [GitHub Docs: Custom Instructions](https://docs.github.com/en/copilot/customizing-copilot)

#### 💭 David's Strategic Shift

*"I've spent 20 years building mental checklists for code review. Now those checklists are executable. I review the AI's review—catching what it misses while it catches what I'd overlook."*

> 💡 **Want CLI workflows?** See [Module 9: GitHub Copilot CLI](../09-copilot-cli/README.md) for comprehensive coverage of the new agentic Copilot CLI.

---

### Exercise 4.3: Background Agents — "The Refactor Task"

#### 📖 The Story

The team identifies a large technical debt item: The FanHub frontend mixes four different styling approaches (styled-components, CSS modules, inline styles, and style tags). They need to standardize on styled-components.

*"That's dozens of files,"* Priya calculates. *"It'll take days."*

David has an idea: *"What if we let an agent work on it in the background while we do other things?"*

**Note**: Background agents require Copilot Business or Enterprise.

#### 🎯 Objective

Use a background agent for a large-scale refactoring task.

#### 📋 Steps

1. **Define the refactoring task clearly**
   
   Create a detailed spec for the refactor:
   
   ```
   @workspace I need to standardize all frontend styling to use styled-components.
   
   Current state:
   - Some components use styled-components (Header.jsx, CharacterCard.jsx)
   - Some use inline styles (Footer.js, EpisodeList.js)
   - Some use CSS modules (QuoteDisplay.jsx)
   - About.jsx uses embedded style tags
   
   Target state:
   - All components use styled-components
   - CSS module files deleted
   - Consistent naming for styled components (use Container, Wrapper, etc.)
   - All component files use .jsx extension
   
   Requirements:
   - Convert one component at a time
   - Preserve exact visual appearance
   - Update imports as needed
   - Run the app after each conversion to verify
   
   Start with Footer.js as a test, then proceed with others.
   ```

2. **Launch as background task** (if available)
   
   With Copilot Enterprise:
   - Click the "Run in background" option
   - Agent works autonomously
   - You receive updates on progress
   - Review results when complete

3. **Alternative: Iterative agent workflow** (all tiers)
   
   If background agents aren't available, use iterative agent mode:
   
   ```
   @agent Convert Footer.js from inline styles to styled-components.
   Keep the exact same visual appearance. Update the file extension to .jsx.
   Run the app to verify nothing broke.
   ```
   
   Then repeat for each component.

4. **Review the results**
   
   For each converted component, check:
   - Visual appearance unchanged
   - Styled components follow naming conventions
   - No style-related warnings or errors

#### ✅ Success Criteria

- [ ] Understood background agent capabilities
- [ ] Created a clear refactoring specification
- [ ] Converted at least one component (Footer.js)
- [ ] Verified visual appearance preserved
- [ ] Understood when to use background vs interactive agents

#### ✨ The "After" — The Improved Experience

Large refactors with agents:

**Before**: Multi-day manual effort, risk of inconsistency  
**After**: Define spec, let agent work, review results

**Developer role**: Strategic direction and quality review, not mechanical conversion

#### 📚 Official Docs

- [VS Code: Background Agents](https://code.visualstudio.com/docs/copilot/copilot-edits#_background-agent)
- [GitHub Docs: Copilot Enterprise](https://docs.github.com/en/copilot/overview-of-github-copilot/about-github-copilot-enterprise)

#### 💭 Team Reflection

**David**: *"This is appropriate use of AI—tedious, mechanical work where the pattern is clear but the volume is high."*

**Priya**: *"I was dreading this refactor. Now I'm learning styled-components by reviewing what the agent produces."*

---

## 🔗 Compounding Value

**What we created in this module:**
- Rich Character Detail page (Golden Thread culmination)
- `architecture-reviewer.agent.md` — Custom review agent
- `devops-reviewer.agent.md` — Infrastructure review agent

**Artifacts from previous modules we used:**
- `docs/ARCHITECTURE.md` — Referenced by agents
- `.github/copilot-instructions.md` — Agent behavior patterns
- `docs/character-detail-challenge.md` — Tracking progress across modules
- Prompt library — Foundation for agent instructions

**How this helps in future modules:**

| Module | How Today's Work Helps |
|--------|----------------------|
| Module 5 | Instructions work with agent-reviewed code |
| Module 6 | Agent skills build on agent concepts |

---

## 🧵 The Golden Thread: Complete

You've now completed the **Character Detail Challenge** across the full arc:

| Module | Context | Approach | Result |
|--------|---------|----------|--------|
| **00** | Nothing | Direct ask | Chaos, 3+ attempts |
| **01a** | ARCHITECTURE.md | Direct ask | Better structure |
| **01b** | + Instructions | Direct ask | Consistent patterns |
| **02** | + Plan Mode | Plan → Manual | First-try basic page |
| **04** | All context | **Agent Mode** | **Rich feature, multi-file, minimal intervention** |

**The lesson**: Context compounds. Documentation + Instructions + Planning = Agents that actually work.

---

## 🧠 Mindful Moment: Appropriate Delegation

Not everything should be an agent task. Consider:

| Use Agent Mode | Use Chat/Edit Mode |
|----------------|-------------------|
| Multi-step tasks | Quick questions |
| File creation + modification | Single file edits |
| Tasks with verification (tests) | Explanations |
| Repetitive patterns | Exploratory work |
| Clear acceptance criteria | Ambiguous requirements |

**The principle**: Delegate when you can clearly specify "done." Collaborate when you're still figuring it out.

---

## 🎭 Behind the Scenes: How Agents Work

### The Agent Loop

When you use Agent Mode, here's what happens:

1. **Planning**: Agent analyzes your request and workspace
2. **Execution**: Agent takes actions (create files, edit code, run commands)
3. **Observation**: Agent checks the results of its actions
4. **Iteration**: If something failed, agent tries to fix it
5. **Completion**: Agent reports results for your review

This loop continues until the task is complete or the agent needs human input.

### Tool Use

Agents have access to "tools" that let them:
- Read files from your workspace
- Create new files
- Edit existing files
- Run terminal commands
- Search the web (with permission)

MCP extends these tools to external services.

### Trust Boundaries

Agents ask permission before:
- Running destructive commands
- Making changes outside the workspace
- Accessing external services

This is the balance: autonomous enough to be useful, controlled enough to be safe.

---

## 🏁 Module Summary

### Key Transformations

| Persona | Before | After |
|---------|--------|-------|
| **Marcus** | Manual orchestration between AI suggestions | Delegates complete tasks, reviews results |
| **David** | Reviews same criteria manually on every PR | Executable checklists, reviews the review |
| **Jordan** | Infrastructure expertise siloed | DevOps reviewer agent shares his knowledge |

### Artifacts Created

```
fanhub/.github/agents/
├── architecture-reviewer.agent.md    # David's comprehensive reviewer
└── devops-reviewer.agent.md          # Jordan's infrastructure reviewer
```

### Time Investment → Value Gained

| Exercise | Time | Ongoing Value |
|----------|------|---------------|
| 4.1 Character Detail v2 | 25 min | See how context compounds with agents |
| 4.2 Custom Agents | 20 min | 15-30 min saved per PR review |
| 4.3 Background Agents | 15 min | Days saved on large refactors |
