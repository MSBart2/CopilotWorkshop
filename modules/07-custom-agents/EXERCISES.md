# Module 7: Custom Agents — THE PAYOFF

> **📖 Full Narrative Experience**: This file contains all exercises in story order, following the FanHub team as they FINALLY see what an autonomous agent can do with ALL context in place.

---

## ⏰ Monday 5:00 PM — The Moment Everything Clicks

> *"We've spent all day building context—instructions, prompts, custom instructions, skills, MCP connections. Now let's see what an agent can do with ALL of that in place."*  
> — David, ready for the payoff

---

## 📖 The Story So Far

**Think about what the team has built today:**

| Module | What You Added | What Copilot Gained |
|--------|---------------|---------------------|
| **Module 1** | Repository Instructions | Project context |
| **Module 2** | Plan Mode | Systematic thinking |
| **Module 3** | Custom Prompts | Task templates |
| **Module 4** | Custom Instructions | File-specific patterns |
| **Module 5** | Agent Skills | Domain expertise |
| **Module 6** | MCP Servers | External system access |

The Character Detail page from Module 2 still works, but it's basic—just name, photo, and bio. Users want more: episode appearances, quotes, related characters, favorites.

In the old world, this would mean manually implementing changes across frontend, backend, and tests.

**But now?** The agent has EVERYTHING it needs:
- Architecture knowledge from `docs/ARCHITECTURE.md`
- Coding standards from `.github/copilot-instructions.md`
- File-specific patterns from custom instructions
- Domain expertise from agent skills
- Database access from MCP

*"It's payoff time,"* Sarah announces. *"Let's see if all this setup was worth it."*

---

💡 **The Payoff Equation**: Instructions + Prompts + Custom Instructions + Skills + MCP = Agent that builds complete features correctly.

---

## 🔨 Exercises

### Exercise 7.1: Character Detail v2 — "The Golden Thread PAYOFF"

> 🧵 **The Golden Thread CULMINATES**: In Modules 0-2, you planned and manually implemented a basic Character Detail page. In Modules 3-6, you built context layers. Now see what happens when you give that same requirement to an **agent** with ALL your context in place.

#### 📖 The Story

**Marcus** (DevOps Developer, 5 years) looks at the Character Detail page the team built earlier today. It works, but it's basic—just name, photo, and bio.

*"Users are asking for more,"* Rafael reports. *"They want to see which episodes a character appears in, their best quotes, and related characters from the same show."*

**David** (Architect, 20 years) has a challenge: *"Let's see what happens when we give this to an agent with ALL the context we've built today. This is the real test."*

The agent now has:
- ✅ Architecture patterns (Module 1)
- ✅ Systematic thinking (Module 2)
- ✅ Task templates (Module 3)
- ✅ File-specific patterns (Module 4)
- ✅ Domain expertise (Module 5)
- ✅ Database access (Module 6)

*"If this works,"* Sarah says, *"I'll admit all that setup was worth it."*

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

Use Agent Mode to implement Character Detail v2—demonstrating how ALL your context investment pays off in autonomous agent effectiveness.

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
| **3** | + Prompts | Task templates | Reusable workflows |
| **4** | + Custom Instructions | File patterns | Auto-activating rules |
| **5** | + Skills | Domain expertise | Context-aware help |
| **6** | + MCP | Database access | Real data queries |
| **7** | ALL CONTEXT | **Agent Mode** | **Rich feature, multi-file, AMAZING results** |

**The lesson**: Every module's investment compounds. The agent isn't magic—it's effective because you gave it:
- Architecture knowledge (where things go)
- Coding standards (how things should look)  
- Domain expertise (what's valid)
- Database access (what data exists)
- Planning discipline (clear requirements)

**Time comparison**:
- Manual implementation of rich feature: 2-3 hours
- Agent WITHOUT context (Module 0): Chaos, wrong patterns
- Agent WITH full context (Module 7): 15-20 minutes + review

#### 📚 Official Docs

- [VS Code: Agent Mode](https://code.visualstudio.com/docs/copilot/chat/chat-agent-mode)
- [VS Code: Copilot Edits](https://code.visualstudio.com/docs/copilot/copilot-edits)

#### 💭 Marcus's Revelation

*"I spent Modules 01 and 02 thinking 'why am I writing all this documentation?' Now I get it. That documentation isn't for humans—it's for agents. The better I document, the more I can delegate."*

#### 🎭 Team Celebration

**Sarah**: *"Remember Module 0? I was ready to dismiss Copilot entirely. Now look at this—cross-layer feature, proper patterns, tests included."*

**David**: *"The agent followed our architecture. It didn't just generate code—it generated code that fits our system. That's the difference."*

**Priya**: *"I learned so much watching the agent work. It showed me how senior developers think about feature implementation."*

---

### Exercise 7.2: Create a Custom Agent — "David's Architecture Reviewer"

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

### Exercise 7.3: Background Agents — "The Refactor Task"

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
- **Character Detail v2** — Rich feature with episodes, quotes, related characters, favorites
- `architecture-reviewer.agent.md` — Custom review agent
- `devops-reviewer.agent.md` — Infrastructure review agent

**Artifacts from ALL previous modules we used:**
- `docs/ARCHITECTURE.md` — Referenced by agents (Module 1)
- `.github/copilot-instructions.md` — Agent behavior patterns (Module 1)
- Plan mode thinking — Clear requirements (Module 2)
- Custom prompts — Task templates (Module 3)
- Custom instructions — File patterns (Module 4)
- Agent Skills — Domain expertise (Module 5)
- MCP Servers — Database access (Module 6)

**The Payoff Demonstrated:**

| Without Context | With Full Context |
|-----------------|-------------------|
| Generic suggestions | Project-specific patterns |
| Guesses at structure | Follows architecture |
| Invalid data | Database-verified data |
| Manual iterations | First-try success |

---

## 🧵 The Golden Thread: COMPLETE

You've now completed the **Character Detail Challenge** across the full arc:

| Module | Context | Approach | Result |
|--------|---------|----------|--------|
| **0** | Nothing | Direct ask | Chaos, 3+ attempts |
| **1a** | ARCHITECTURE.md | Direct ask | Better structure |
| **1b** | + Instructions | Direct ask | Consistent patterns |
| **2** | + Plan Mode | Plan → Manual | First-try basic page |
| **3-6** | Building context | Prompts, Instructions, Skills, MCP | Foundation complete |
| **7** | ALL CONTEXT | **Agent Mode** | **Rich feature, AMAZING results** |

**The lesson**: Context compounds. Documentation + Instructions + Skills + MCP = Agents that actually work.

> *"I was skeptical all day. But this... this is real. The agent built a complete feature using every piece of context we created. This isn't hype—this is the future of development."*  
> — Sarah, finally convinced

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
- **Query databases via MCP** (configured in Module 6!)

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
| **David** | 20 years of expertise felt threatened | Sees AI amplifies his architectural knowledge |
| **Sarah** | Skeptical of AI hype | Convinced after seeing real results |
| **Jordan** | Infrastructure expertise siloed | DevOps reviewer agent shares his knowledge |

### Artifacts Created

```
fanhub/.github/agents/
├── architecture-reviewer.agent.md    # David's comprehensive reviewer
└── devops-reviewer.agent.md          # Jordan's infrastructure reviewer

fanhub/frontend/src/
└── components/CharacterDetail.jsx    # Character Detail v2 - THE PAYOFF!
```

### Time Investment → Value Gained

| Exercise | Time | Ongoing Value |
|----------|------|---------------|
| 7.1 Character Detail v2 | 25 min | Proves context investment pays off |
| 7.2 Custom Agents | 20 min | 15-30 min saved per PR review |
| 7.3 Background Agents | 15 min | Days saved on large refactors |

---

## ➡️ Next Steps

**🎉 Congratulations!** You've completed the core customization arc. You've built:
- Repository context
- Systematic planning
- Custom prompts
- Custom instructions
- Agent skills
- MCP servers
- **And seen the payoff with autonomous agents!**

**Continue to**: [Module 8: Copilot Web](../08-copilot-web/README.md) — Explore Copilot beyond VS Code

> *"We built something real today. An actual feature, with an autonomous agent, using all the context we created. This is what AI-assisted development looks like when done right."*  
> — Sarah, finally convinced
