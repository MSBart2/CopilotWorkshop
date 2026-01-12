# David's Path: Custom Agents

## 🎯 Your Focus: Executable Architecture Knowledge

David, this module transforms your 20 years of architectural expertise into **executable review checklists**. Instead of manually checking the same criteria on every PR, you'll create custom agents that encode your standards—then review what the AI catches while you focus on the nuanced decisions that require human judgment.

**Your exercises**: 4.2 (Custom Agents), 4.3 (Background Agents)  
**Time**: ~45 minutes  
**Theme**: From manual review to strategic oversight

---

## Your Journey in This Module

```
David's Arc:
┌─────────────────────────────────────────────────────────────────┐
│  "I review the same patterns every single PR"                   │
│                         ↓                                       │
│  Creates architecture-reviewer.agent.md with 20+ criteria       │
│                         ↓                                       │
│  "My checklists are executable. I review the AI's review."      │
└─────────────────────────────────────────────────────────────────┘
```

---

## Exercise 7.2: Create a Custom Agent — "David's Architecture Reviewer"

### 📖 The Story

**David** (Staff Engineer, 20 years) has a problem: Code reviews take forever because he's constantly checking the same things:
- Does this follow our architecture?
- Are the patterns consistent?
- Have we considered scalability?
- Is error handling proper?

*"I review the same patterns every single PR,"* David sighs. *"What if I could create an agent that knows my review checklist?"*

**Supporting Cast**: Elena adds testing criteria to David's agent, making it a comprehensive reviewer.

### ❌ The "Before" — What Frustration Looks Like

Every PR review follows the same exhausting pattern:

**Monday 2:00 PM - PR #47 from Marcus**
- Open the files changed
- Mentally run through architecture checklist (item 1 of 23...)
- Check error handling patterns
- Verify React conventions
- Look for API consistency
- Check test coverage
- Write detailed feedback
- Time spent: 35 minutes

**Monday 3:00 PM - PR #48 from Priya**
- Same checklist, different code
- Time spent: 40 minutes (more files)

**Monday 4:30 PM - PR #49 from Elena**
- David's tired, might miss something
- Time spent: 25 minutes (rushed)

*"I'm a human linter,"* David realizes. *"And I'm not even consistent anymore."*

### 🎯 Objective

Create a custom agent that reviews code against your team's architectural standards.

### 📋 Steps

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

2. **Collaborate with Jordan on DevOps reviewer**
   
   Jordan contributes his infrastructure expertise as a companion agent.
   
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

### ✅ Success Criteria

- [ ] Created `architecture-reviewer.agent.md`
- [ ] Created `devops-reviewer.agent.md`
- [ ] Successfully invoked custom agent for review
- [ ] Agent referenced your documentation files
- [ ] Review output followed the specified format

### ✨ The "After" — The Improved Experience

David's code review workflow transforms:

**Before**: Manually check 20+ criteria, write feedback, repeat on every PR  
**After**: `@architecture-reviewer` checks everything, David reviews the review

**Monday 2:00 PM - PR #47 (with agent)**
```
@architecture-reviewer Review this PR against our standards
```
Agent produces comprehensive review in 30 seconds.
David reads it, adds two nuanced comments the agent couldn't know.
**Time spent: 8 minutes**

**Time saved per PR**: 15-30 minutes  
**Consistency**: 100%—same criteria every time

### 📚 Official Docs

- [VS Code: Custom Agents](https://code.visualstudio.com/docs/copilot/chat/copilot-extensibility-overview)
- [GitHub Docs: Custom Instructions](https://docs.github.com/en/copilot/customizing-copilot)

### 💭 David's Strategic Shift

*"I've spent 20 years building mental checklists for code review. Now those checklists are executable. I review the AI's review—catching what it misses while it catches what I'd overlook."*

### 🎯 The Real Win

The agent doesn't replace David's expertise—it **encodes** it. His 20 years of pattern recognition is now:
- **Documented**: Future team members benefit from his knowledge
- **Consistent**: Every PR gets the same thorough review
- **Scalable**: David can review 3x more PRs at higher quality
- **Teaching**: Junior devs learn from the agent's feedback

---

## Exercise 7.3: Background Agents — "The Refactor Task" (Enterprise)

### 📖 The Story

The team identifies a large technical debt item: The FanHub frontend mixes four different styling approaches (styled-components, CSS modules, inline styles, and style tags). They need to standardize on styled-components.

*"That's dozens of files,"* Priya calculates. *"It'll take days."*

David has an idea: *"What if we let an agent work on it in the background while we do other things?"*

### ❌ The "Before" — What Frustration Looks Like

The refactor estimate lands on David's desk:

**Traditional Approach:**
- 12 component files to convert
- ~45 minutes per file (analysis + conversion + testing)
- Total: 9+ hours of tedious, mechanical work
- Risk: Inconsistency across files (style drift)
- Reality: Junior devs would do it, David would review

*"This is exactly the work nobody wants to do,"* David thinks. *"And it's exactly the work that gets done inconsistently when humans are tired."*

### 🎯 Objective

Use a background agent for a large-scale refactoring task.

### 📋 Steps

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

### ✅ Success Criteria

- [ ] Understood background agent capabilities
- [ ] Created a clear refactoring specification
- [ ] Converted at least one component (Footer.js)
- [ ] Verified visual appearance preserved
- [ ] Understood when to use background vs interactive agents

### ✨ The "After" — The Improved Experience

**With Background Agent:**
- David writes the spec: 15 minutes
- Agent works while team does other things: 2 hours
- David reviews results: 30 minutes
- **Total David time: 45 minutes** (vs 9+ hours)

Large refactors with agents:

**Before**: Multi-day manual effort, risk of inconsistency  
**After**: Define spec, let agent work, review results

**Developer role**: Strategic direction and quality review, not mechanical conversion

### 📚 Official Docs

- [VS Code: Background Agents](https://code.visualstudio.com/docs/copilot/copilot-edits#_background-agent)
- [GitHub Docs: Copilot Enterprise](https://docs.github.com/en/copilot/overview-of-github-copilot/about-github-copilot-enterprise)

### 💭 David's Architectural Insight

*"This is appropriate use of AI—tedious, mechanical work where the pattern is clear but the volume is high. My job isn't to convert CSS to styled-components. My job is to ensure the architecture is consistent. The agent does the mechanical work; I ensure the outcome meets our standards."*

---

## 🎯 David's Module Summary

### Your Transformation

| Before | After |
|--------|-------|
| Manual 20-point checklist on every PR | Executable agent runs checklist instantly |
| Inconsistent reviews when tired/rushed | 100% consistent criteria, every time |
| Hours spent on mechanical refactors | Strategic spec writing + result review |
| Expertise locked in your head | Expertise encoded, documented, scalable |

### Artifacts You Created

```
fanhub/.github/agents/
├── architecture-reviewer.agent.md    # Your comprehensive reviewer
└── devops-reviewer.agent.md          # Jordan's infrastructure reviewer
```

### The Deeper Win

**Your 20 years of experience aren't obsolete—they're amplified.**

The agent can run your checklist faster than you can. But it can't:
- Know that this particular PR touches a component with a tricky race condition
- Understand the political context of why this API was designed this way
- See the strategic implications of this architectural choice

**You provide judgment. The agent provides consistency.**

---

## ➡️ Continue Your Journey

**Next for David**: [Module 6: MCP Servers](../06-mcp-servers/README.md) — Connect agents to external data sources and enterprise systems.

**Also relevant**: [Module 10: Agentic SDLC](../10-agentic-sdlc/README.md) — See how your review agents integrate into the full development lifecycle.
