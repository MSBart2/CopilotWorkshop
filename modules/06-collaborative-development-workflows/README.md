# Module 6: Collaborative Development Workflows

> **Core Philosophy**: AI-assisted development isn't a solo activity—it's a team sport. When teams share prompts, establish review practices, and build collective intelligence, AI amplifies everyone. Individual productivity gains multiply into team velocity.

## 📖 Overview

In Modules 2–5, you learned how individuals can work effectively with AI: context, configuration, documentation, and design thinking. Now you'll learn how **teams** collaborate with AI—and with each other through AI.

Think of it this way: Individual AI skills make you more productive. Team AI practices make the whole team more productive. The best organizations don't just have skilled individuals—they have systems that amplify collective intelligence.

**The Collaboration Principle**: AI assistance improves with shared context. A team that shares prompts, reviews AI output together, and builds collective knowledge compounds its productivity gains.

## Prerequisites

- Modules 0–5 (Individual AI-assisted development skills)
- Experience working on a team (or willingness to simulate team scenarios)
- A repository where you can practice collaborative workflows

## Estimated Time

- 50–60 minutes

---

## 🎯 Learning Objectives

By the end of this module, you will understand how **collaborative workflows** transform team productivity:

- Share and version-control reusable prompts with `.github/prompts/`
- Establish team practices for reviewing AI-generated code
- Use AI to accelerate pull request reviews while maintaining quality
- Build a team prompt library that captures collective wisdom
- Create pair programming workflows with AI as a third collaborator
- Handle disagreements about AI suggestions constructively
- Scale AI skills from individuals to the entire team

**Meta-Goal**: Recognize that **collaboration multiplies AI benefits**. Individual + AI is good. Team + AI + shared practices is transformative.

---

## 🏛️ The Philosophy: From Individual Productivity to Team Velocity

### The Individual Trap

Many teams adopt AI tools but see disappointing results:

```
Developer 1: Uses AI effectively, 2x productivity
Developer 2: Barely uses AI, same productivity
Developer 3: Uses AI poorly, 0.8x productivity (fixing bad suggestions)
Developer 4: Great with AI, but knowledge stays siloed

Team Average: ~1.3x productivity
Expected: 2x across the team
Reality: Individual variance, no compound benefits
```

**The Problem**: AI skills remain individual. Knowledge doesn't transfer.

### The Collaborative Advantage

Teams that build collaborative AI practices see different results:

```
Team Practices:
- Shared prompt library → Everyone uses proven prompts
- AI review standards → Consistent quality bar
- Knowledge sharing → Best practices propagate
- Collective learning → Mistakes become team lessons

Team Average: 1.8x productivity
Individual variance: Lower (rising tide lifts all boats)
Compound benefits: Team learns faster than any individual
```

**The Difference**: Collaborative practices turn individual gains into team gains.

### The Collaboration Hierarchy

```
Level 0: No Collaboration
↓ Each developer figures out AI on their own
↓
Level 1: Informal Sharing
↓ "Hey, try this prompt I used"
↓
Level 2: Shared Prompt Library
↓ .github/prompts/ with team-curated prompts
↓
Level 3: Review Practices
↓ Standards for reviewing AI-generated code
↓
Level 4: Pair Programming with AI
↓ Two humans + AI = richer collaboration
↓
Level 5: Team Learning Loops
↓ Retrospectives on AI effectiveness
↓
Level 6: Organizational Patterns
↓ Cross-team sharing, centers of excellence
```

**The Clarity Ladder**: Each level compounds team productivity benefits.

### Why Collaboration Matters for AI

AI tools have a unique property: **they improve with shared context**.

**Individual Context**:

- Your coding style
- Your open files
- Your recent prompts

**Shared Context**:

- Team conventions (`.github/copilot-instructions.md`)
- Shared prompts (`.github/prompts/`)
- Documentation (ARCHITECTURE.md, PATTERNS.md)
- Collective review feedback

**The Insight**: The more context you share, the better AI works for everyone. Collaboration isn't overhead—it's leverage.

### The Four Pillars of Collaborative AI Workflows

| Pillar               | What It Does                              | Team Impact                             |
| -------------------- | ----------------------------------------- | --------------------------------------- |
| **Shared Prompts**   | Reusable, tested prompts live in the repo | New team members productive immediately |
| **Review Practices** | Standards for evaluating AI output        | Consistent quality, shared learning     |
| **Pair Programming** | Two humans + AI collaboration             | Richer context, better decisions        |
| **Knowledge Loops**  | Retrospectives and improvement cycles     | Team gets better over time              |

---

## 📚 Content

### Building Blocks of Collaborative AI Workflows

#### 1. Prompt Library (`.github/prompts/`)

**Location**: `.github/prompts/*.prompt.md`
**Purpose**: Reusable, version-controlled prompts
**Team Benefit**: New members get proven prompts; team learns what works

```markdown
<!-- .github/prompts/code-review.prompt.md -->

# Code Review Assistant

## Variables

- {{FILE_PATH}}: Path to file being reviewed
- {{FOCUS_AREAS}}: Specific concerns (performance, security, etc.)

## Prompt

Review {{FILE_PATH}} with focus on {{FOCUS_AREAS}}.

Check for:

1. Logic errors and edge cases
2. Security vulnerabilities (input validation, injection risks)
3. Performance issues (N+1 queries, unnecessary loops)
4. Maintainability (naming, complexity, documentation)
5. Alignment with docs/CONVENTIONS.md

Format as:

- 🔴 Critical: [issue] → [suggestion]
- 🟡 Important: [issue] → [suggestion]
- 🟢 Minor: [issue] → [suggestion]
```

#### 2. AI Review Standards

**Purpose**: Consistent expectations for reviewing AI-generated code
**Team Benefit**: Quality doesn't depend on who reviews

```markdown
# AI Code Review Checklist

## Before Accepting AI-Generated Code

### Correctness

- [ ] Does it actually solve the stated problem?
- [ ] Have edge cases been considered?
- [ ] Do tests pass (including new tests)?

### Understanding

- [ ] Can you explain what every line does?
- [ ] Do you understand WHY this approach was chosen?
- [ ] Could you debug this code if it failed in production?

### Standards

- [ ] Does it follow our CONVENTIONS.md?
- [ ] Does it use our established PATTERNS.md?
- [ ] Is it consistent with existing code style?

### Risk Assessment

- [ ] What could go wrong with this code?
- [ ] Are there security implications?
- [ ] Are there performance implications?

## Red Flags (Requires Extra Review)

- Complex algorithms you don't fully understand
- Security-sensitive code (auth, input handling)
- Database migrations or schema changes
- External API integrations
- Code that handles money or PII
```

#### 3. Pair Programming with AI

**The Three-Way Collaboration**:

```
Developer A (Driver)
    ↓ Types code and prompts
    ↔ Discusses with AI
Developer B (Navigator)
    ↓ Reviews AI suggestions
    ↔ Catches issues, suggests improvements
AI (Collaborator)
    ↓ Generates suggestions
    ↔ Answers questions, explains options
```

**Benefits**:

- Two humans catch AI errors
- Navigator focuses on big picture while AI handles details
- Richer discussion about tradeoffs
- Learning happens in real-time

#### 4. Team Learning Loops

**Sprint Retrospective Questions**:

- What AI prompts worked well this sprint?
- What AI suggestions led us astray?
- What should we add to our prompt library?
- What review practices need adjustment?

**Prompt Library Maintenance**:

- Monthly review of `.github/prompts/`
- Archive prompts that don't work
- Promote successful ad-hoc prompts to library
- Update prompts based on team feedback

---

## 🔨 Exercises

Our four developers learn that **collaboration multiplies AI benefits**—practices that help one person can help everyone.

### 🎓 Philosophy in Practice

Each exercise demonstrates a key aspect of **Collaborative Development Workflows**:

1. **Shared Prompt Library**: Wisdom that travels with the codebase
2. **AI Code Review Practices**: Maintaining quality at scale
3. **Pair Programming with AI**: Three-way collaboration
4. **Team Learning Loops**: Getting better together over time

---

### Exercise 1: Building a Shared Prompt Library — "Wisdom That Travels"

> **Philosophy**: A great prompt discovered by one developer should benefit everyone. When prompts live in the repository, they version with the code, travel with the team, and improve over time.

#### 📖 The Story — Before Shared Prompts

**Marcus**, the DevOps developer, discovers a prompt that generates perfect Kubernetes manifests:

```
Create a Kubernetes deployment for a Node.js app with:
- 3 replicas
- Resource limits (256Mi memory, 200m CPU)
- Readiness and liveness probes
- ConfigMap for environment variables
- Follow our naming convention: {app}-{env}-{resource}
```

He uses this prompt 20 times. It saves him hours. But when **Priya** needs to create a Kubernetes deployment, she struggles with vague prompts and gets inconsistent results. She doesn't know Marcus's prompt exists.

**The Problem**: Tribal knowledge. Marcus's productivity gain doesn't transfer.

Three months later, Marcus leaves for another team. His prompt knowledge leaves with him.

#### 📖 The Story — After Shared Prompts

The team establishes `.github/prompts/`. Marcus's Kubernetes prompt becomes:

```
.github/prompts/k8s-deployment.prompt.md
```

Now:

- Priya finds it immediately when she needs it
- New team members get it automatically
- The prompt evolves with team feedback
- Marcus's knowledge persists even after he moves on

**The Transformation**: Individual wisdom becomes team asset.

#### 🎯 Objective

Create a team prompt library that captures collective wisdom, demonstrating that **shared prompts multiply individual productivity gains**.

#### 📋 Steps

**1. Create the prompt library structure**

```bash
mkdir -p .github/prompts
```

**2. Create your first shared prompt**

Create `.github/prompts/service-class.prompt.md`:

```markdown
---
name: Service Class Generator
description: Creates a service class following team conventions
author: Your Name
created: 2024-01-15
tags: [backend, service, typescript]
---

# Service Class Generator

## Purpose

Generate a service class that follows our layered architecture and coding conventions.

## Required Context

- Reference: docs/CONVENTIONS.md for naming rules
- Reference: docs/PATTERNS.md for error handling patterns
- Reference: docs/ARCHITECTURE.md for layer responsibilities

## Variables

- `{{SERVICE_NAME}}`: Name of the service (e.g., User, Order, Product)
- `{{ENTITY_NAME}}`: Primary entity this service manages
- `{{REPOSITORY_NAME}}`: Name of the repository dependency

## The Prompt

Create a {{SERVICE_NAME}}Service class that:

1. **Structure**

   - Follows our service layer conventions in docs/ARCHITECTURE.md
   - Uses dependency injection for {{REPOSITORY_NAME}}
   - Includes JSDoc comments on all public methods

2. **Methods to Include**

   - `getById(id)`: Fetch single entity, throw NotFoundError if missing
   - `getAll(filters)`: Fetch with optional filtering
   - `create(data)`: Validate and create new entity
   - `update(id, data)`: Validate and update existing entity
   - `delete(id)`: Soft delete with audit trail

3. **Error Handling**

   - Follow error patterns in docs/PATTERNS.md
   - Throw ValidationError for invalid input
   - Throw NotFoundError for missing entities
   - Throw AuthorizationError for permission failures

4. **Standards**
   - Use async/await (no callbacks)
   - All inputs must be validated
   - All operations must be logged
   - Follow naming conventions in docs/CONVENTIONS.md

## Example Usage
```

Using this prompt: Create a UserService that manages User entities
with UserRepository as its dependency.

```

## Quality Checklist
After generation, verify:
- [ ] JSDoc on all public methods
- [ ] Proper error types thrown
- [ ] Input validation present
- [ ] Logging included
- [ ] Naming follows conventions
```

**3. Create additional team prompts**

Create `.github/prompts/api-endpoint.prompt.md`:

````markdown
---
name: REST API Endpoint
description: Creates a REST endpoint following team API standards
author: Your Name
tags: [api, controller, rest]
---

# REST API Endpoint Generator

## Purpose

Generate a REST API endpoint that follows our API standards.

## Required Context

- Reference: docs/API-STANDARDS.md for response formats
- Reference: docs/PATTERNS.md for error handling
- Reference: docs/CONVENTIONS.md for naming

## Variables

- `{{RESOURCE}}`: The resource name (e.g., users, orders)
- `{{OPERATION}}`: CRUD operation (create, read, update, delete, list)
- `{{SERVICE}}`: The service class to call

## The Prompt

Create a {{OPERATION}} endpoint for {{RESOURCE}} that:

1. **Route**: Follow RESTful conventions

   - GET /{{RESOURCE}} - list
   - GET /{{RESOURCE}}/:id - read
   - POST /{{RESOURCE}} - create
   - PUT /{{RESOURCE}}/:id - update
   - DELETE /{{RESOURCE}}/:id - delete

2. **Controller Logic** (thin controller pattern)

   - Parse and validate request
   - Call {{SERVICE}} method
   - Format response using standard envelope
   - Handle errors with appropriate HTTP status

3. **Response Format**
   ```json
   {
     "success": true,
     "data": {...},
     "meta": { "timestamp": "...", "requestId": "..." }
   }
   ```
````

4. **Error Handling**
   - ValidationError → 400
   - NotFoundError → 404
   - AuthorizationError → 403
   - Unknown errors → 500 (no stack trace in response)

## Quality Checklist

- [ ] Proper HTTP method and status codes
- [ ] Input validation before service call
- [ ] Standard response envelope used
- [ ] Errors don't leak internal details

````

Create `.github/prompts/unit-test.prompt.md`:

```markdown
---
name: Unit Test Generator
description: Creates unit tests following team testing patterns
author: Your Name
tags: [testing, unit-test, jest]
---

# Unit Test Generator

## Purpose
Generate unit tests that follow our testing conventions.

## Required Context
- Reference: docs/TESTING.md for test patterns
- Reference: existing tests in __tests__/ for examples

## Variables
- `{{TARGET_FILE}}`: The file to test
- `{{FOCUS_AREAS}}`: Specific scenarios to cover

## The Prompt

Create unit tests for {{TARGET_FILE}} covering:

1. **Test Structure**
   - Use describe/it blocks
   - Follow Arrange-Act-Assert pattern
   - One assertion per test (prefer)
   - Clear test names: "should [action] when [condition]"

2. **Coverage Requirements**
   - Happy path for each public method
   - Edge cases: empty inputs, null values, boundary conditions
   - Error cases: each error type that can be thrown
   - {{FOCUS_AREAS}}

3. **Mocking**
   - Mock external dependencies
   - Use jest.mock() for modules
   - Reset mocks between tests

4. **Naming Convention**
   - Test file: `{original-file}.test.ts`
   - Describe: `{ClassName}` or `{functionName}`
   - It: `should {expected behavior} when {condition}`

## Quality Checklist
- [ ] All public methods tested
- [ ] Edge cases covered
- [ ] Error cases covered
- [ ] Mocks properly reset
- [ ] Tests are independent (can run in any order)
````

**4. Test your prompt library**

Open Copilot Chat and use one of your prompts:

```
Using the prompt template in .github/prompts/service-class.prompt.md,
create an OrderService that manages Order entities with OrderRepository
as its dependency.
```

**Observe**: The generated code follows your team conventions automatically.

**5. Create a prompt index**

Create `.github/prompts/README.md`:

````markdown
# Team Prompt Library

This directory contains reusable prompts for common development tasks.
All prompts follow team conventions and reference our documentation.

## Available Prompts

| Prompt                                             | Purpose                  | Tags             |
| -------------------------------------------------- | ------------------------ | ---------------- |
| [service-class.prompt.md](service-class.prompt.md) | Generate service classes | backend, service |
| [api-endpoint.prompt.md](api-endpoint.prompt.md)   | Create REST endpoints    | api, controller  |
| [unit-test.prompt.md](unit-test.prompt.md)         | Generate unit tests      | testing, jest    |

## Using Prompts

1. Find the relevant prompt in this directory
2. Open Copilot Chat
3. Reference the prompt: "Using .github/prompts/[name].prompt.md, create..."
4. Provide the required variables

## Contributing

Found a prompt that works well? Add it!

1. Create `your-prompt.prompt.md` following the template below
2. Add to the table above
3. Submit PR for team review

### Prompt Template

```markdown
---
name: Prompt Name
description: What it does
author: Your Name
tags: [relevant, tags]
---

# Prompt Title

## Purpose

## Required Context

## Variables

## The Prompt

## Quality Checklist
```
````

## Prompt Reviews

Prompts are reviewed monthly. We archive prompts that:

- Haven't been used in 3 months
- Consistently produce poor results
- Are superseded by better alternatives

````

**6. Compare before-and-after experiences**

Create a reflection section in your notes:

```markdown
## Before-and-After: Shared Prompt Library

### Before (Individual Prompts)
- Marcus discovered great Kubernetes prompt
- Used it 20+ times personally
- Priya didn't know it existed
- New team members started from scratch
- Knowledge left when Marcus moved teams

### After (Shared Prompt Library)
- Prompt lives in .github/prompts/k8s-deployment.prompt.md
- Anyone can find and use it
- New members get it automatically
- Prompt improves with team feedback
- Knowledge persists regardless of team changes

### Metrics
| Metric | Before | After |
|--------|--------|-------|
| Time to first productive prompt (new member) | 2 weeks | 1 day |
| Consistency of generated code | 60% | 95% |
| Prompt knowledge retention (when people leave) | 0% | 100% |
| Cross-pollination of good practices | Low | High |
````

#### ✅ Success Criteria

- [ ] Created `.github/prompts/` directory with at least 3 prompts
- [ ] Each prompt includes metadata (name, description, author, tags)
- [ ] Prompts reference team documentation (CONVENTIONS.md, PATTERNS.md)
- [ ] Created a README.md index for discoverability
- [ ] Successfully used a shared prompt to generate code
- [ ] Can articulate the before/after difference in team productivity

#### 📚 Official Docs

- [GitHub Copilot Prompt Files](https://docs.github.com/en/copilot/customizing-copilot/adding-custom-instructions-for-github-copilot)
- [VS Code Copilot Customization](https://code.visualstudio.com/docs/copilot/copilot-customization)

#### 💭 Team Reactions

**Marcus (Before)**: _"I've got this great prompt that saves me hours. I should share it somehow... but where? Slack? Confluence? It'll get lost."_

**Marcus (After)**: _"My Kubernetes prompt is in `.github/prompts/`. It's versioned with the code, shows up in PRs when it changes, and anyone can find it. When I moved teams, my knowledge stayed behind to help everyone else."_

**Priya (Before)**: _"Marcus always generates such clean code. I wish I knew what prompts he uses."_

**Priya (After)**: _"I just browse `.github/prompts/` when I need to do something new. Someone's already figured out the best prompt for it. I'm productive on day one instead of week two."_

#### 🚀 Challenge Extension

1. **Prompt Analytics**: Add a "Last Used" date to each prompt; track which prompts get used most
2. **Prompt Testing**: Create a simple test that validates prompt outputs against conventions
3. **Cross-Team Sharing**: Propose a structure for organization-wide prompt sharing
4. **Prompt Evolution**: Document how one prompt improved over 3 iterations based on feedback

---

### Exercise 2: AI Code Review Practices — "Quality at Scale"

> **Philosophy**: AI can help you write code faster. But speed without quality creates technical debt. Team review practices ensure AI-generated code meets your standards before it ships.

#### 📖 The Story — Before Review Practices

**Sarah**, the skeptical senior, notices a pattern in code reviews. Junior developers are submitting more code than ever—thanks to Copilot—but quality is suffering:

- Code works but has subtle bugs
- Patterns don't match team conventions
- Security concerns go unnoticed
- "It compiled and tests passed" becomes the quality bar

She reviews a PR from a junior developer. The code was clearly AI-generated: technically correct, but missing context about why certain choices were made.

**Sarah's Concern**: _"We're shipping more code, but are we shipping better code? Or just more technical debt?"_

#### 📖 The Story — After Review Practices

The team establishes AI code review standards:

1. **Author Responsibilities**: Understand what you're submitting
2. **Reviewer Checklist**: Specific questions for AI-generated code
3. **Quality Bar**: Same standards regardless of who (or what) wrote the code

Now when Sarah reviews, she has a framework. The junior developer can self-check before submitting. Quality improves without slowing down velocity.

**The Transformation**: Speed + Standards = Sustainable velocity.

#### 🎯 Objective

Establish team practices for reviewing AI-generated code, demonstrating that **review practices maintain quality at scale**.

#### 📋 Steps

**1. Create the team review standards**

Create `docs/AI-CODE-REVIEW-STANDARDS.md`:

````markdown
# AI Code Review Standards

## Purpose

These standards ensure AI-generated code meets our quality bar.
They apply whether you wrote the code, AI suggested it, or you co-created it.

## Author Responsibilities

### Before Submitting AI-Generated Code

#### Understanding Check

- [ ] I can explain what every line does
- [ ] I understand WHY this approach was chosen (not just WHAT it does)
- [ ] I could debug this code if it failed in production
- [ ] I've traced through the logic manually at least once

#### Convention Check

- [ ] Code follows `docs/CONVENTIONS.md`
- [ ] Patterns match `docs/PATTERNS.md`
- [ ] Architecture aligns with `docs/ARCHITECTURE.md`
- [ ] No obvious deviations from existing code style

#### Quality Check

- [ ] Edge cases are handled
- [ ] Error handling is appropriate
- [ ] Input validation is present where needed
- [ ] No obvious security issues
- [ ] Tests cover the new code

#### Red Flags (Require Extra Scrutiny)

- [ ] I regenerated this prompt multiple times to get something that "looks right"
- [ ] I don't fully understand a particular section
- [ ] This touches security-sensitive code
- [ ] This modifies database schemas or migrations
- [ ] This handles financial data or PII

### PR Description Requirements

When submitting AI-assisted code:

```markdown
## AI Assistance Disclosure

**AI Usage**: [None / Completion suggestions / Chat-generated / Significant AI assistance]

**What AI Helped With**: [List specific parts]

**What I Verified**: [How you validated the AI output]

**Areas Needing Extra Review**: [Sections you're less confident about]
```
````

## Reviewer Responsibilities

### Quick Assessment

1. **Scope Check**: Does this PR do what it claims?
2. **AI Smell Test**: Does this look like unreviewed AI output?
   - Generic variable names (data, result, temp)
   - Over-engineered solutions
   - Missing context-specific considerations
   - Patterns that don't match our codebase

### Deep Review (All Code)

- [ ] Logic is correct for stated requirements
- [ ] Edge cases are handled
- [ ] Error handling is appropriate
- [ ] Performance is acceptable
- [ ] Security considerations addressed
- [ ] Tests are meaningful (not just "tests exist")

### AI-Specific Review

- [ ] Author demonstrates understanding (not just "it works")
- [ ] Code fits our existing patterns (not generic best practice)
- [ ] Comments explain "why" not just "what"
- [ ] No copy-paste patterns that suggest unreviewed AI output

### Feedback Framework

**For Code Quality Issues**:

```
🔴 [BLOCKER] This has a bug/security issue: [explanation]
🟡 [IMPORTANT] This doesn't follow our pattern: [link to pattern]
🟢 [SUGGESTION] Consider: [alternative approach]
```

**For AI-Specific Feedback**:

```
❓ [UNDERSTANDING] Can you explain why you chose this approach over X?
📚 [CONTEXT] This doesn't match how we do Y—see [file] for our pattern
🤖 [AI SMELL] This looks like generic AI output. Our project needs [specific thing].
```

## Quality Bar

### The Standard

Code quality is the same regardless of origin:

- Human-written code: Must meet standards
- AI-assisted code: Must meet standards
- AI-generated code: Must meet standards

### What Changes

With AI assistance, we can review more thoroughly because:

- Authors can spend saved time on verification
- Reviewers can use AI to help spot issues
- Teams can maintain higher standards at higher velocity

### What Doesn't Change

- Understanding requirement (author must understand their code)
- Convention adherence (our standards, not generic best practice)
- Security scrutiny (AI doesn't understand our threat model)
- Test quality (tests must be meaningful, not just present)

````

**2. Create a reviewer assist prompt**

Create `.github/prompts/code-review-assist.prompt.md`:

```markdown
---
name: Code Review Assistant
description: Helps reviewers spot issues in PRs
author: Team
tags: [review, quality]
---

# Code Review Assistant

## Purpose
Help reviewers identify issues while maintaining human judgment for final decisions.

## The Prompt

Review this code for:

1. **Logic Issues**
   - Off-by-one errors
   - Null/undefined handling
   - Edge cases not covered
   - Race conditions (if async)

2. **Security Concerns**
   - Input validation gaps
   - Injection vulnerabilities
   - Authentication/authorization checks
   - Data exposure risks

3. **Performance Issues**
   - N+1 query patterns
   - Unnecessary loops or computations
   - Memory leaks (event listeners, subscriptions)
   - Missing indexes (if database queries)

4. **Convention Violations**
   - Naming that doesn't match docs/CONVENTIONS.md
   - Patterns that don't match docs/PATTERNS.md
   - Architecture violations per docs/ARCHITECTURE.md

5. **Maintainability**
   - Complex code that needs comments
   - Duplicated logic that could be extracted
   - Missing error messages or logging
   - Unclear variable names

Format findings as:
- 🔴 Critical (blocks merge)
- 🟡 Important (should fix)
- 🟢 Suggestion (nice to have)
- ❓ Question (need clarification)

Note: This is a starting point. Human reviewer makes final judgment.
````

**3. Practice using the review standards**

Create a test scenario. Write some "AI-generated looking" code:

`src/services/data-processor.js`:

```javascript
// AI-generated without review
async function processData(data) {
  const result = [];
  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    if (item.status === "active") {
      const processed = await fetchDetails(item.id);
      result.push(processed);
    }
  }
  return result;
}
```

**4. Apply the review checklist**

Use Copilot with your review prompt:

```
Using .github/prompts/code-review-assist.prompt.md, review this code:

[paste the processData function]

Also check against our conventions in docs/CONVENTIONS.md
```

**Expected findings**:

- 🔴 N+1 query pattern (fetching in a loop)
- 🟡 No error handling for fetchDetails failure
- 🟡 No input validation
- 🟢 Could use filter/map instead of for loop
- ❓ What happens if data is null/undefined?

**5. Create the before-and-after comparison**

```markdown
## Before-and-After: AI Code Review Practices

### Before (No Review Standards)

**Junior Developer Process**:

1. Use Copilot to generate code
2. Run tests (they pass!)
3. Submit PR
4. Get feedback: "This doesn't follow our patterns"
5. Rewrite and resubmit
6. Repeat 2-3 times

**Reviewer Experience**:

- "This looks AI-generated and unreviewed"
- Catches issues that author should have caught
- Spends 30 minutes on review that takes 5 minutes of fixes
- Frustrated by repeated patterns of issues

**Metrics**:

- PR review cycles: 3-4 rounds average
- Time in review: 2-3 days
- Reviewer satisfaction: Low
- Code quality: Inconsistent

### After (With Review Standards)

**Junior Developer Process**:

1. Use Copilot to generate code
2. Apply author checklist (understanding, conventions, quality)
3. Self-review using AI review prompt
4. Fix issues found before submitting
5. Submit PR with AI disclosure
6. Usually approved in 1-2 rounds

**Reviewer Experience**:

- Clear AI disclosure helps focus review
- Author demonstrates understanding
- Fewer obvious issues
- Can focus on logic and design, not formatting

**Metrics**:

- PR review cycles: 1-2 rounds average
- Time in review: 4-8 hours
- Reviewer satisfaction: High
- Code quality: Consistent

### The Key Insight

AI helps you write code faster.
Review standards ensure faster doesn't mean sloppier.
Speed + Quality = Sustainable velocity.
```

#### ✅ Success Criteria

- [ ] Created `docs/AI-CODE-REVIEW-STANDARDS.md` with author and reviewer checklists
- [ ] Created a code review assist prompt in `.github/prompts/`
- [ ] Practiced using the review standards on sample code
- [ ] Found issues that a naive review might miss
- [ ] Can articulate the before/after improvement in review quality
- [ ] Understand that standards apply regardless of who/what wrote the code

#### 📚 Official Docs

- [GitHub Pull Request Reviews](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests)
- [GitHub Copilot for Pull Requests](https://docs.github.com/en/copilot/using-github-copilot/using-github-copilot-for-pull-requests)

#### 💭 Team Reactions

**Sarah (Before)**: _"I'm spending all my time catching the same issues over and over. Junior devs just paste whatever Copilot gives them."_

**Sarah (After)**: _"The author checklist means most obvious issues get caught before I see the PR. My reviews focus on logic and design now—the stuff that actually needs senior eyes. Quality is up, and I'm less frustrated."_

**Junior Developer (Before)**: _"Sarah keeps rejecting my PRs for things I didn't know I was supposed to check."_

**Junior Developer (After)**: _"The checklist tells me exactly what to verify. I catch my own issues now. My PRs get approved faster, and I'm learning what quality looks like."_

#### 🚀 Challenge Extension

1. **Review Metrics**: Track review cycles before/after implementing standards
2. **AI Review Tool**: Create a pre-commit hook that runs AI review on changed files
3. **Review Training**: Use saved review comments to train new reviewers
4. **Pattern Detection**: Build a prompt that detects "AI smell" in code

---

### Exercise 3: Pair Programming with AI — "Three-Way Collaboration"

> **Philosophy**: Two humans plus AI is more powerful than either human alone with AI. The navigator catches what the driver and AI miss. Three perspectives create richer solutions.

#### 📖 The Story — Before Three-Way Pairing

**David**, the seasoned architect, occasionally pairs with junior developers to transfer knowledge. But traditional pairing has limitations:

- Junior developer types slowly → Senior gets impatient
- Senior takes over keyboard → Junior doesn't learn
- Both stuck on syntax → Time wasted on Stack Overflow
- Knowledge transfer is slow

They've tried AI assistance, but individually:

- Junior uses AI without understanding output
- Senior dismisses AI as "just autocomplete"
- Neither leverages the combination effectively

#### 📖 The Story — After Three-Way Pairing

David and **Priya** try a new pattern: **Driver + Navigator + AI**

- **Priya (Driver)**: Types code and prompts
- **David (Navigator)**: Reviews AI suggestions, guides direction
- **AI (Collaborator)**: Generates options, explains concepts

**What changes**:

- Priya types at her pace, AI fills gaps
- David reviews AI suggestions instead of taking over keyboard
- When stuck, AI explains—David adds context
- Both learn from the interaction

**The Transformation**: Knowledge transfer accelerates. Quality improves. Both enjoy it more.

#### 🎯 Objective

Practice pair programming with AI as a third collaborator, demonstrating that **three-way collaboration produces better outcomes than any pair**.

#### 📋 Steps

**1. Understand the roles**

```markdown
# Three-Way Pair Programming Roles

## Driver (Keyboard)

- Types all code and prompts
- Decides what to try next
- Asks clarifying questions
- Stays in learning mode

## Navigator (Guidance)

- Reviews AI suggestions before they're accepted
- Provides project context AI doesn't have
- Catches issues and suggests alternatives
- Explains "why" when AI explains "what"
- Doesn't touch keyboard (important!)

## AI (Collaborator)

- Generates code suggestions
- Explains concepts and patterns
- Proposes alternatives
- Answers "how do I" questions

## The Rule

Navigator guides but doesn't drive.
AI suggests but doesn't decide.
Driver types but gets input from both.
```

**2. Set up a pairing challenge**

Create this scenario file `pairing-challenge.md`:

```markdown
# Pairing Challenge: Rate Limiter

## The Task

Implement a rate limiter middleware for our Express API.

## Requirements

- Limit: 100 requests per minute per IP address
- Response: 429 Too Many Requests when limit exceeded
- Headers: Include X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset
- Storage: Use in-memory for now (note: won't work with multiple servers)
- Logging: Log when limits are hit

## Constraints

- Follow patterns in docs/PATTERNS.md
- Use conventions in docs/CONVENTIONS.md
- Include unit tests

## Pairing Session

- Session Length: 30 minutes
- Switch roles at 15 minutes
```

**3. Conduct the pairing session (simulate or do with partner)**

**First 15 minutes: Junior Drives, Senior Navigates**

Driver (Priya) prompt to AI:

```
I need to implement rate limiting middleware for Express.
Start by explaining the basic concepts and common approaches.
```

Navigator (David) interjects:

- "Ask about distributed rate limiting challenges"
- "Have it compare token bucket vs sliding window"
- "Our pattern uses custom error classes—ask how to integrate"

Driver asks AI:

```
How would I integrate this with our custom error handling pattern
in docs/PATTERNS.md where we throw RateLimitError?
```

Navigator reviews AI suggestion:

- "Good, but we need to add logging here"
- "Our convention is to put middleware in src/middleware/"
- "Ask it to add the headers we need"

**15 minute mark: Switch roles**

**Second 15 minutes: Senior Drives, Junior Navigates**

Now David drives, showing senior patterns. Priya navigates:

- "Why did you reject that AI suggestion?"
- "Can you explain why in-memory won't work in production?"
- "What would you do differently for a distributed system?"

**4. Debrief the session**

Create `pairing-debrief.md`:

```markdown
# Pairing Session Debrief

## What Worked Well

- [What the three-way collaboration enabled]
- [Knowledge transfer moments]
- [Quality catches]

## What AI Contributed

- [Concepts explained]
- [Code generated]
- [Options explored]

## What Human Expertise Added

- [Context AI didn't have]
- [Corrections to AI suggestions]
- [Design decisions]

## What Navigator Caught

- [Issues in AI suggestions]
- [Opportunities driver missed]
- [Quality improvements]

## Learning Moments

- [What junior learned from senior]
- [What senior learned from AI or junior]

## Before/After Comparison

Traditional pairing (2 humans):

- Time stuck on syntax: \_\_\_%
- Knowledge transfer effectiveness: \_\_\_
- Enjoyment: \_\_\_

Three-way pairing (2 humans + AI):

- Time stuck on syntax: \_\_\_%
- Knowledge transfer effectiveness: \_\_\_
- Enjoyment: \_\_\_
```

**5. Document the pattern for your team**

Create `docs/PAIR-PROGRAMMING-WITH-AI.md`:

```markdown
# Pair Programming with AI

## The Pattern

Two developers + AI collaborating on code.

## Roles

### Driver

- Controls keyboard
- Types code and prompts
- Asks questions
- Decides what to try

### Navigator

- Reviews all AI suggestions before acceptance
- Provides project context
- Catches issues and suggests alternatives
- Guides but doesn't take over keyboard

### AI

- Generates suggestions
- Explains concepts
- Proposes alternatives
- Handles syntax details

## When to Use

- Onboarding new team members
- Complex problem-solving
- Knowledge transfer sessions
- Design discussions with code

## Ground Rules

1. Navigator reviews AI suggestions before driver accepts
2. Discuss "why" when AI suggests something unexpected
3. Use AI to handle syntax so humans can focus on design
4. Switch roles every 15-25 minutes

## Session Template

1. Define the goal (5 min)
2. First driver session (15-20 min)
3. Role switch
4. Second driver session (15-20 min)
5. Debrief (10 min)

## Benefits

- Faster than traditional pairing (AI handles syntax)
- Better than solo + AI (navigator catches AI errors)
- More engaging (constant discussion)
- Accelerated learning (concepts explained in context)
```

#### ✅ Success Criteria

- [ ] Understand the three roles: Driver, Navigator, AI
- [ ] Practiced (or simulated) a three-way pairing session
- [ ] Created a debrief capturing what each participant contributed
- [ ] Documented the pattern for team use
- [ ] Can articulate why 2 humans + AI beats either human solo with AI
- [ ] Experienced or understood the before/after improvement in pairing

#### 📚 Official Docs

- [GitHub Copilot Chat](https://code.visualstudio.com/docs/copilot/copilot-chat)
- [Pair Programming Best Practices](https://martinfowler.com/articles/on-pair-programming.html)

#### 💭 Team Reactions

**David (Before)**: _"Pairing with juniors is frustrating. They type slowly, I end up taking over, and then they don't learn."_

**David (After)**: _"With AI handling syntax, Priya types at a normal pace. I review AI suggestions instead of getting impatient. I explain why I'd reject certain AI ideas—that's the actual knowledge transfer. We both enjoy it more."_

**Priya (Before)**: _"When I pair with David, I feel like I'm slowing him down. He eventually just takes over."_

**Priya (After)**: _"David stays in navigator role, reviewing what AI suggests and explaining context. When I'm stuck, AI explains the concept, then David adds why we do it differently. I'm learning twice as fast."_

#### 🚀 Challenge Extension

1. **Session Recording**: Record a pairing session (screen + audio) and review for improvement
2. **Prompt Log**: Keep a shared doc of prompts that worked well during pairing
3. **Metrics**: Compare velocity and quality of three-way pairing vs traditional
4. **Remote Pairing**: Adapt the pattern for distributed teams using VS Code Live Share

---

### Exercise 4: Team Learning Loops — "Getting Better Together"

> **Philosophy**: Individual learning is good. Team learning is transformative. When teams reflect on AI effectiveness together, the whole team gets better faster than any individual could.

#### 📖 The Story — Before Team Learning

Each developer on the team has their own relationship with Copilot:

- Sarah uses it sparingly, doesn't trust it fully
- Marcus uses it constantly for infrastructure code
- Priya relies on it heavily but isn't sure when to trust it
- David mostly ignores it

**The Problem**: No shared learning. Sarah discovered that Copilot gives bad advice about their legacy auth system, but the team doesn't know. Marcus found a great prompt pattern, but it stays with him.

Mistakes repeat. Good practices don't spread.

#### 📖 The Story — After Team Learning Loops

The team adds "AI Reflection" to their retrospectives:

- **What AI prompts worked well this sprint?** → Add to prompt library
- **What AI suggestions led us astray?** → Document gotchas
- **What should we stop asking AI?** → Update copilot-instructions.md
- **What did we learn?** → Share knowledge

Now:

- Sarah's auth system warning is documented
- Marcus's great prompt is in the library
- Priya knows when to trust vs verify
- David sees where AI actually helps

**The Transformation**: Individual learnings become team wisdom.

#### 🎯 Objective

Establish team learning loops that capture and share AI effectiveness insights, demonstrating that **collective learning compounds individual gains**.

#### 📋 Steps

**1. Create an AI learnings log**

Create `docs/AI-LEARNINGS-LOG.md`:

```markdown
# AI Learnings Log

This document captures team learnings about effective AI usage.
Updated during retrospectives and as issues are discovered.

## ✅ What Works Well

### Infrastructure Code (Marcus, 2024-01-15)

**Finding**: Copilot excels at generating Kubernetes manifests and Terraform code.
**Best Prompt**: `.github/prompts/k8s-deployment.prompt.md`
**Why It Works**: Infrastructure code is highly templated; AI has seen millions of examples.

### Test Generation (Priya, 2024-01-20)

**Finding**: `/tests` command generates good scaffolding, but needs review for edge cases.
**Best Practice**: Generate tests, then ask "what edge cases are missing?" in follow-up.
**Example**: Found 3 edge cases AI missed by asking explicitly.

### Documentation (Team, 2024-02-01)

**Finding**: AI writes excellent JSDoc and README content from working code.
**Best Prompt**: "Generate JSDoc for this function. Explain parameters, return value, exceptions, and include a usage example."

## ⚠️ What Doesn't Work Well

### Legacy Auth System (Sarah, 2024-01-18)

**Finding**: AI suggests modern auth patterns that don't work with our legacy auth module.
**Problem**: Our auth system is custom; AI's suggestions assume standard JWT/OAuth.
**Mitigation**: Added warning to `.github/copilot-instructions.md`:
```

IMPORTANT: Our authentication system is custom (see src/auth/).
Do NOT use standard JWT patterns. Always reference src/auth/README.md.

```

### Database Migrations (David, 2024-01-25)
**Finding**: AI-generated migrations have caused production issues twice.
**Problem**: AI doesn't understand our schema history or constraints.
**Mitigation**: Red flag in review standards—all migrations require senior review.
**Rule Added**: Never auto-accept AI migration suggestions.

### Complex Business Logic (Team, 2024-02-05)
**Finding**: AI-generated discount calculations had subtle bugs.
**Problem**: Business rules have edge cases AI doesn't understand.
**Mitigation**: All business logic requires manual tests of edge cases before merge.

## 🔄 Evolution Log

### 2024-01-15: Initial prompt library created
- Added: service-class.prompt.md, api-endpoint.prompt.md
- Team velocity: ~10% improvement

### 2024-02-01: Review standards implemented
- Added: AI-CODE-REVIEW-STANDARDS.md
- PR rejection rate: Decreased from 40% to 15%

### 2024-02-15: Auth system warnings added
- Updated: .github/copilot-instructions.md
- Auth-related bugs from AI: Decreased from 3/sprint to 0

## 📊 Metrics We Track

| Metric | Baseline | Current | Trend |
|--------|----------|---------|-------|
| PR approval on first review | 45% | 72% | ↑ |
| Time to complete features | 3.2 days | 2.1 days | ↓ |
| Bugs from AI-generated code | 4/sprint | 1/sprint | ↓ |
| Team Copilot adoption | 60% | 95% | ↑ |
```

**2. Create a retrospective template**

Create `docs/AI-RETROSPECTIVE-TEMPLATE.md`:

```markdown
# AI Retrospective Template

Add this section to your regular sprint retrospective.

## AI Effectiveness Review (15 minutes)

### What AI Prompts Worked Well This Sprint?

[Team shares prompts that saved time or produced good results]

**Action**: Add successful prompts to `.github/prompts/`

### What AI Suggestions Led Us Astray?

[Team shares where AI suggestions caused problems]

**Action**: Document in AI-LEARNINGS-LOG.md under "What Doesn't Work"

### What Should We Stop Asking AI?

[Team identifies areas where AI consistently gives bad advice]

**Action**: Update `.github/copilot-instructions.md` with warnings

### What Did We Learn About AI Effectiveness?

[Team shares insights about when/how to use AI]

**Action**: Update AI-LEARNINGS-LOG.md

### Prompt Library Maintenance

- [ ] Archive any prompts that haven't been used
- [ ] Update prompts based on feedback
- [ ] Promote successful ad-hoc prompts to library

## Example Discussion

**Sarah**: "I found AI gave bad suggestions for the payment module. We should add a warning."
**Action**: Add to copilot-instructions.md: "Payment processing uses Stripe legacy API. See src/payments/README.md for our patterns."

**Marcus**: "This Kubernetes prompt saved me 3 hours."
**Action**: Add to `.github/prompts/k8s-service-mesh.prompt.md`

**Priya**: "I didn't know about the auth system warning. That would have saved me a day."
**Learning**: We need better visibility of the learnings log for new team members.
```

**3. Conduct a practice retrospective**

With your team (or simulate solo):

```markdown
## Practice AI Retrospective

### What Worked Well

1. [Prompt or technique that saved time]
2. [Area where AI suggestions were consistently good]
3. [Learning that helped someone else]

### What Didn't Work

1. [AI suggestion that caused a problem]
2. [Area where AI consistently misses context]
3. [Time wasted on bad AI suggestions]

### Actions

1. [ ] Add [working prompt] to prompt library
2. [ ] Add warning about [problem area] to copilot-instructions.md
3. [ ] Document [learning] in AI-LEARNINGS-LOG.md
```

**4. Create the before-and-after comparison**

```markdown
## Before-and-After: Team Learning Loops

### Before (No Learning Loops)

**Individual Experiences**:

- Sarah: "Auth suggestions don't work" (keeps to herself)
- Marcus: "Great K8s prompt" (uses alone)
- Priya: "When should I trust AI?" (unclear)
- David: "AI is overhyped" (disengaged)

**Result**:

- Same mistakes repeated
- Good practices siloed
- New members repeat old mistakes
- Team AI skill: Variable

### After (With Learning Loops)

**Shared Knowledge**:

- Auth warning in copilot-instructions.md (everyone knows)
- K8s prompt in prompt library (everyone can use)
- Trust guidelines in AI-LEARNINGS-LOG.md (everyone learns)
- David sees value in specific areas (re-engaged)

**Result**:

- Mistakes documented, not repeated
- Good practices spread
- New members start with team wisdom
- Team AI skill: Consistently improving

### Metrics

| Metric                    | Before  | After       |
| ------------------------- | ------- | ----------- |
| Time to onboard AI skills | 3 weeks | 3 days      |
| Repeated mistakes         | 5/month | 1/month     |
| Prompt sharing            | Ad-hoc  | Systematic  |
| Team improvement rate     | Linear  | Compounding |
```

**5. Set up continuous improvement**

Create a calendar reminder or process:

```markdown
# AI Continuous Improvement Process

## Weekly

- [ ] Quick slack question: "Any AI prompts worth sharing?"
- [ ] Review AI-LEARNINGS-LOG.md for anything new

## Sprint Retrospective

- [ ] Include AI retrospective section (15 min)
- [ ] Update prompt library with new prompts
- [ ] Update copilot-instructions.md with new warnings
- [ ] Update AI-LEARNINGS-LOG.md with new learnings

## Monthly

- [ ] Review prompt library usage (archive unused prompts)
- [ ] Review metrics (PR approval rate, bug rate, velocity)
- [ ] Share learnings across teams (if applicable)

## Quarterly

- [ ] Major review of AI effectiveness
- [ ] Update team training based on learnings
- [ ] Share case studies with broader organization
```

#### ✅ Success Criteria

- [ ] Created `docs/AI-LEARNINGS-LOG.md` capturing team knowledge
- [ ] Created `docs/AI-RETROSPECTIVE-TEMPLATE.md` for structured reflection
- [ ] Conducted (or simulated) an AI retrospective session
- [ ] Documented at least one "what works" and one "what doesn't"
- [ ] Established a continuous improvement cadence
- [ ] Can articulate how team learning compounds individual gains

#### 📚 Official Docs

- [GitHub Copilot Business Administration](https://docs.github.com/en/copilot/overview-of-github-copilot/about-github-copilot-business)
- [Sprint Retrospectives](https://www.atlassian.com/team-playbook/plays/retrospective)

#### 💭 Team Reactions

**Sarah (Before)**: _"I keep finding issues with AI suggestions, but there's no good way to warn the team."_

**Sarah (After)**: _"I added the auth system warning to copilot-instructions.md. Now everyone gets warned automatically. We haven't had an auth-related AI bug since."_

**Priya (Before)**: _"I don't know what I don't know. When should I trust AI? When shouldn't I?"_

**Priya (After)**: _"The AI-LEARNINGS-LOG tells me exactly where the team has found AI helpful vs problematic. I'm not starting from scratch—I'm starting from the team's accumulated wisdom."_

**David (Before)**: _"AI is just hype. I don't see the value."_

**David (After)**: _"Seeing the concrete metrics—PR approval rate up 27%, feature delivery 35% faster—changed my mind. Not hype when there's data."_

#### 🚀 Challenge Extension

1. **Learning Dashboard**: Create a simple dashboard showing AI effectiveness metrics over time
2. **Cross-Team Sharing**: Propose a process for sharing learnings across multiple teams
3. **Onboarding Integration**: Add AI learnings review to new developer onboarding checklist
4. **Gamification**: Create a "prompt of the week" recognition for best contributions to prompt library

---

### Exercise 5: Prompt Files Deep Dive — "Variables and Templates"

**Tier**: 🆓 Free
**Primary Persona**: Marcus (DevOps Developer)
**Time**: 25-30 minutes

#### 📖 The Story

**Marcus has become the team's prompt curator.** He's got a collection of prompts that work well—for code review, for deployment checklists, for incident response. But there's a problem: every time he uses them, he has to manually edit the prompts to fit the current situation.

His PR review prompt? He copy-pastes it, then manually replaces:

- The PR number
- The focus area (security? performance? both?)
- The team's specific standards document
- The severity threshold for reporting

It's error-prone. Last week he forgot to change the PR number and accidentally referenced an old PR in his review notes. Embarrassing.

Today Marcus learns about **prompt variables**—parameterized prompts that ask for inputs, have defaults, and eliminate copy-paste errors forever.

#### 🎯 Objective

Create advanced prompt files with variables, defaults, enums, and conditional sections that adapt to different use cases without manual editing.

#### 📋 Before: Copy-Paste Prompts

Experience the friction of manual prompt editing:

1. Create a basic prompt file `.github/prompts/pr-review-basic.prompt.md`:

```markdown
---
description: Review a pull request
---

Review PR #123 for the platform team.

Focus on security issues.
Report all issues, including minor ones.

Check against our coding standards in docs/CONVENTIONS.md.
```

2. To use this for a different PR, you have to:

   - Open the file
   - Change `#123` to the actual PR number
   - Change `platform team` to the right team
   - Change `security` to the right focus area
   - Change `all issues` to the right threshold
   - Remember to save
   - Hope you didn't miss anything

3. **Document the friction**: What could go wrong with this workflow?

#### 📋 After: Parameterized Prompts

Create prompts that ask for what they need:

**Step 1: Create a Prompt with Variables**

Create `.github/prompts/pr-review.prompt.md`:

```markdown
---
description: Review a pull request with configurable focus and standards
author: Marcus
version: 2.0.0
variables:
  - name: pr_number
    description: The pull request number to review
  - name: team
    description: Team name for standards lookup
    default: platform
  - name: focus
    description: Primary focus area for the review
    enum:
      - security
      - performance
      - maintainability
      - all
    default: all
  - name: severity
    description: Minimum severity level to report
    enum:
      - critical
      - major
      - minor
    default: minor
---

# Pull Request Review: #{{pr_number}}

## Review Context

- **Team**: {{team}}
- **Focus Area**: {{focus}}
- **Reporting Threshold**: {{severity}} and above

## Instructions

Review PR #{{pr_number}} according to {{team}} team standards.

### Focus: {{focus}}

{{#if focus === 'security' || focus === 'all'}}

#### Security Review

- [ ] No hardcoded secrets or credentials
- [ ] Input validation on all user inputs
- [ ] No SQL injection vulnerabilities
- [ ] Proper authentication/authorization
- [ ] Sensitive data properly encrypted
      {{/if}}

{{#if focus === 'performance' || focus === 'all'}}

#### Performance Review

- [ ] No N+1 query patterns
- [ ] Appropriate caching strategies
- [ ] No unnecessary loops or computations
- [ ] Efficient data structures used
      {{/if}}

{{#if focus === 'maintainability' || focus === 'all'}}

#### Maintainability Review

- [ ] Clear, descriptive naming
- [ ] Functions are single-purpose
- [ ] Error handling is comprehensive
- [ ] Code is testable
- [ ] Documentation is adequate
      {{/if}}

### Standards Reference

Apply standards from: docs/teams/{{team}}/CONVENTIONS.md

### Output Format

Report issues at **{{severity}}** level and above:

{{#if severity === 'critical'}}
Only report issues that could cause security breaches, data loss, or system crashes.
{{/if}}

{{#if severity === 'major'}}
Report issues that could cause bugs, significant performance problems, or maintenance burden.
{{/if}}

{{#if severity === 'minor'}}
Report all issues including style, minor optimizations, and suggestions.
{{/if}}

For each issue:

- 🔴 **Critical**: [location] - [issue] - [fix]
- 🟡 **Major**: [location] - [issue] - [fix]
- 🟢 **Minor**: [location] - [issue] - [fix]
```

**Step 2: Use the Parameterized Prompt**

In Copilot Chat, invoke the prompt:

```
/pr-review pr_number=456 team=payments focus=security severity=major
```

Or with defaults:

```
/pr-review pr_number=456
```

(Uses: team=platform, focus=all, severity=minor)

**Step 3: Create More Advanced Prompts**

Create `.github/prompts/incident-response.prompt.md`:

```markdown
---
description: Generate incident response documentation
author: Marcus
version: 1.0.0
variables:
  - name: incident_id
    description: Incident ticket ID
  - name: severity
    description: Incident severity level
    enum: [sev1, sev2, sev3]
  - name: service
    description: Affected service name
  - name: summary
    description: One-line summary of the incident
---

# Incident Response: {{incident_id}}

## Incident Summary

- **ID**: {{incident_id}}
- **Severity**: {{severity}}
- **Service**: {{service}}
- **Summary**: {{summary}}

## Response Checklist

{{#if severity === 'sev1'}}

### SEV1 Response (Critical - All Hands)

- [ ] Page on-call engineer
- [ ] Create war room channel
- [ ] Notify stakeholders (leadership, affected teams)
- [ ] Begin customer communication
- [ ] Assign incident commander
      {{/if}}

{{#if severity === 'sev2'}}

### SEV2 Response (Major - Team Response)

- [ ] Notify on-call engineer
- [ ] Create incident channel
- [ ] Assess customer impact
- [ ] Begin investigation
      {{/if}}

{{#if severity === 'sev3'}}

### SEV3 Response (Minor - Normal Priority)

- [ ] Create ticket for investigation
- [ ] Assign to appropriate team member
- [ ] Schedule for next sprint if not urgent
      {{/if}}

## Investigation Guide for {{service}}

Based on the {{service}} architecture:

1. Check service health dashboard
2. Review recent deployments
3. Check dependent services
4. Review error logs from the last hour

## Post-Incident

- [ ] Write incident report
- [ ] Schedule post-mortem (within 48 hours for {{severity}})
- [ ] Create follow-up tickets for preventive measures
```

**Step 4: Create a Prompt Catalog**

Update `.github/prompts/README.md`:

```markdown
# Team Prompt Library

## Available Prompts

### Code Review

| Prompt             | Description             | Required Variables |
| ------------------ | ----------------------- | ------------------ |
| `/pr-review`       | Full PR review          | `pr_number`        |
| `/security-review` | Security-focused review | `pr_number`        |

### Incident Response

| Prompt               | Description            | Required Variables                              |
| -------------------- | ---------------------- | ----------------------------------------------- |
| `/incident-response` | Generate incident docs | `incident_id`, `severity`, `service`, `summary` |

### Development

| Prompt            | Description      | Required Variables                    |
| ----------------- | ---------------- | ------------------------------------- |
| `/plan-feature`   | Feature planning | `feature_name`, `feature_description` |
| `/generate-tests` | Test generation  | `framework`                           |

## Variable Types

- **Required**: Must be provided when invoking
- **Default**: Has a default value, optional to override
- **Enum**: Limited to specific values

## Contributing

1. Create prompt in `.github/prompts/[name].prompt.md`
2. Include all metadata (description, author, version)
3. Document variables with descriptions
4. Add to this README
5. Submit PR for review
```

#### 📋 Practice: Create Your Own

Create a prompt for a common workflow in your team:

1. Identify a task you do repeatedly with slight variations
2. Identify what changes each time (these become variables)
3. Identify what options are valid (these become enums)
4. Identify sensible defaults
5. Create the prompt file
6. Test with different variable combinations
7. Share with your team

#### ✅ Success Criteria

- [ ] Created a prompt file with at least 3 variables
- [ ] Used `enum` to constrain variable values
- [ ] Used `default` to provide sensible defaults
- [ ] Used conditional sections (`{{#if}}`) for variable content
- [ ] Successfully invoked the prompt with custom values
- [ ] Successfully invoked the prompt using defaults
- [ ] Updated the prompt library README
- [ ] Team members can use the prompt independently

#### 📚 Official Docs

- [VS Code: Prompt Files](https://code.visualstudio.com/docs/copilot/copilot-customization#_reusable-prompt-files)
- [VS Code: Prompt Variables](https://code.visualstudio.com/docs/copilot/copilot-customization#_prompt-file-variables)
- [GitHub Docs: Custom Instructions](https://docs.github.com/en/copilot/customizing-copilot)

#### 💭 Marcus's Efficiency

_"I built this once, and now it just works. No more copy-paste errors. No more forgetting to change the PR number. I type `/pr-review pr_number=789 focus=security` and it generates exactly the right review prompt for that situation. When the team wanted to add a 'compliance' focus option, I added one line to the enum. Everyone got the update instantly. This is how team knowledge should work."_

#### 🚀 Challenge Extension

**Advanced Prompt Engineering:**

1. **Nested Variables**: Create a prompt where one variable's value affects what other variables are available

2. **Template Inheritance**: Create a base prompt that other prompts extend

3. **Dynamic Documentation**: Create a prompt that reads from your project's actual docs and incorporates them

4. **Prompt Chains**: Create prompts that output in a format that can be fed to other prompts

---

### Exercise 6: Commit and PR Workflow Prompt — "From Changes to Review in One Command"

**Tier**: 🆓 Free
**Primary Persona**: Marcus (DevOps Developer)
**Time**: 20-25 minutes

#### 📖 The Story

**Marcus wants to turn routine git flows into a one-liner.** He's tired of manually branching from `main`, staging files, crafting commit messages, pushing, and then remembering the exact `gh pr create` flags to use his team's PR template.

Every time he does this manually, there's friction:

- Forget to branch from main? Commits go to the wrong place.
- Inconsistent commit messages? Code review takes longer.
- Forget the PR template flag? Missing important checklist items.

He decides to create a reusable prompt that does it all safely and consistently.

**The Clarity Lesson**: **Workflow automation through prompts reduces errors and cognitive load.**

#### 🎯 Objective

Create a reusable prompt file that: (1) checks if you're on the base branch and creates a feature branch if needed, (2) commits changes with conventional commit format, (3) pushes to GitHub, and (4) opens a PR using a custom template via GitHub CLI.

#### Prerequisites

- Git configured with a remote `origin` pointing to GitHub
- GitHub CLI installed and authenticated:
  - Check: `gh --version` and `gh auth status`
- A PR template available in `.github/PULL_REQUEST_TEMPLATE/` or a root `pull_request_template.md`

#### 📋 Steps

1. **Create the prompt file**

   Create `.github/prompts/commit-and-pr.prompt.md`:

   ````markdown
   ---
   description: Safely branch, commit, push, and open a PR using a template
   author: Marcus
   version: 1.0.0
   variables:
     - name: baseBranch
       description: Base branch to compare/merge into (e.g., main)
       default: "main"
     - name: branchPrefix
       description: Prefix for new branches when on base (e.g., feature, fix)
       default: "feature"
     - name: commitType
       description: Conventional commit type (feat, fix, docs, chore, refactor, test)
       default: "feat"
     - name: commitScope
       description: Conventional commit scope (e.g., module-2, cli)
       default: "repo"
     - name: commitSummary
       description: Short summary (imperative mood)
       required: true
     - name: paths
       description: Paths to stage (e.g., . or src/)
       default: "."
     - name: prTemplate
       description: Name of PR template file (optional, e.g., feature.md)
       required: false
     - name: draft
       description: Open as draft PR (true/false)
       default: "false"
   ---

   # Commit and Open PR

   You are an expert release assistant. Use @terminal to execute shell commands safely.
   Goal: If on {{baseBranch}}, create a new branch; then stage, commit, push, and open a PR using a template if provided.

   ## Safety & Behavior

   - Echo each command before running it.
   - Abort on any error (`set -e`).
   - If there are no changes to commit, print a message and exit without error.

   ## Procedure (shell script to execute)

   ```bash
   set -e

   CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
   echo "Current branch: $CURRENT_BRANCH"

   BASE="{{baseBranch}}"
   PREFIX="{{branchPrefix}}"
   TYPE="{{commitType}}"
   SCOPE="{{commitScope}}"
   SUMMARY="{{commitSummary}}"
   PATHS="{{paths}}"
   TEMPLATE="{{prTemplate}}"
   DRAFT_FLAG="{{draft}}"

   if [[ "$CURRENT_BRANCH" == "$BASE" ]]; then
     # Create a safe slug from the summary
     SLUG=$(echo "$SUMMARY" | tr '[:upper:]' '[:lower:]' | sed -E 's/[^a-z0-9]+/-/g; s/^-+|-+$//g')
     NEW_BRANCH="$PREFIX/$SCOPE-$SLUG"
     echo "Creating branch: $NEW_BRANCH from $BASE"
     git fetch origin "$BASE"
     git checkout -b "$NEW_BRANCH" "origin/$BASE"
     ACTIVE_BRANCH="$NEW_BRANCH"
   else
     ACTIVE_BRANCH="$CURRENT_BRANCH"
     echo "Using existing branch: $ACTIVE_BRANCH"
   fi

   echo "Staging paths: $PATHS"
   git add $PATHS

   # Skip commit if nothing staged
   if git diff --cached --quiet; then
     echo "No staged changes to commit. Exiting."
     exit 0
   fi

   COMMIT_MSG="$TYPE($SCOPE): $SUMMARY"
   echo "Committing: $COMMIT_MSG"
   git commit -m "$COMMIT_MSG"

   echo "Pushing branch: $ACTIVE_BRANCH"
   git push -u origin "$ACTIVE_BRANCH"

   # Create PR
   PR_TITLE="$COMMIT_MSG"
   if [[ -n "$TEMPLATE" ]]; then
     echo "Opening PR with template: $TEMPLATE"
     if [[ "$DRAFT_FLAG" == "true" ]]; then
       gh pr create --base "$BASE" --head "$ACTIVE_BRANCH" --title "$PR_TITLE" --template "$TEMPLATE" --draft
     else
       gh pr create --base "$BASE" --head "$ACTIVE_BRANCH" --title "$PR_TITLE" --template "$TEMPLATE"
     fi
   else
     echo "Opening PR (fill from commit history)"
     if [[ "$DRAFT_FLAG" == "true" ]]; then
       gh pr create --base "$BASE" --head "$ACTIVE_BRANCH" --title "$PR_TITLE" --fill --draft
     else
       gh pr create --base "$BASE" --head "$ACTIVE_BRANCH" --title "$PR_TITLE" --fill
     fi
   fi

   echo "Done."
   ```
   ````

2. **Use the prompt in Copilot Chat**

   In a repo with uncommitted changes, invoke the prompt:

   ```
   @workspace Read .github/prompts/commit-and-pr.prompt.md and execute it via @terminal with:
   - baseBranch: main
   - branchPrefix: feature
   - commitType: feat
   - commitScope: module-2
   - commitSummary: Add commit+PR prompt exercise
   - paths: .
   - prTemplate: feature.md
   - draft: false
   ```

   Tip: If you're already on a feature branch, the prompt will reuse it instead of creating a new one.

3. **Verify the PR**

   After the workflow completes, Copilot/terminal should print the PR URL. Open it and confirm:

   - The title matches your commit summary
   - The body uses your selected template
   - The base is `main` and the head is your feature branch

#### ✅ Success Criteria

- [ ] Created `.github/prompts/commit-and-pr.prompt.md` with proper variables
- [ ] If starting on `main`, a new branch was created automatically
- [ ] Changes were staged and committed with a Conventional Commit message
- [ ] Branch was pushed to `origin` with upstream set
- [ ] A PR was opened using the specified template (or filled from commits)
- [ ] PR URL was displayed and opens correctly

#### 📚 Official Docs

- [GitHub CLI: `gh pr create`](https://cli.github.com/manual/gh_pr_create)
- [Pull request templates](https://docs.github.com/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-issue-and-pull-request-templates)
- [Conventional Commits](https://www.conventionalcommits.org/)

#### 💭 Marcus's Workflow Win

_"I used to context-switch between writing code and managing git. Now I describe what I did, and the prompt handles branching, commits, push, and PR creation. Consistent commit messages, correct templates, no forgotten steps. The team adopted it in a week—everyone's PRs now follow the same pattern."_

#### 🚀 Challenge Extension

Enhance the prompt with additional capabilities:

1. **Auto-assign reviewers**: Add `--reviewer` flag based on file paths changed
2. **Label automation**: Add `--label` based on commit type (feat → enhancement, fix → bug)
3. **Draft detection**: Auto-open as draft if commit summary contains "WIP" or "draft"
4. **Fixup support**: Add option for `git commit --fixup` workflows

---

## 🧠 Key Takeaways

### The Collaboration Multiplier

**Individual AI Productivity**: 1.5-2x improvement

**Team AI Productivity with Collaborative Practices**: 2-3x improvement

**The Difference**: Shared practices, collective learning, compounding knowledge

### The Four Pillars Recap

1. **Shared Prompt Library** — Individual wisdom becomes team asset
2. **Review Practices** — Speed + Quality = Sustainable velocity
3. **Pair Programming with AI** — Three perspectives beat two
4. **Team Learning Loops** — Collective learning compounds

### What Changes at the Team Level

| Aspect     | Individual AI Use     | Collaborative AI Use   |
| ---------- | --------------------- | ---------------------- |
| Knowledge  | Siloed                | Shared                 |
| Practices  | Variable              | Consistent             |
| Quality    | Depends on individual | Team standard          |
| Learning   | Linear                | Compounding            |
| Onboarding | Start from scratch    | Start from team wisdom |

### The Ultimate Insight

AI tools help individuals write code faster.
**Collaborative practices help teams build software better.**

The best organizations don't just have skilled individuals with AI tools.
They have systems that multiply individual AI gains across the entire team.

**That's the difference between "we use Copilot" and "we're an AI-native team."**

---

## ➡️ Next Steps

You've learned how teams collaborate effectively with AI. Continue to:

- [Module 07: Agent Fundamentals](../07-agent-fundamentals/README.md) — Autonomous AI assistance that executes multi-step workflows

### Your Team Transformation

Reflect on these questions:

1. **What prompt would benefit your whole team?** → Add to prompt library
2. **What AI gotcha has bitten you?** → Document for the team
3. **What review practice would improve quality?** → Propose to team
4. **How could you pair more effectively?** → Try three-way pairing

---

## 📖 Additional Resources

### Official Documentation

- [GitHub Copilot for Business](https://docs.github.com/en/copilot/overview-of-github-copilot/about-github-copilot-business)
- [VS Code Copilot Customization](https://code.visualstudio.com/docs/copilot/copilot-customization)
- [GitHub Pull Request Reviews](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests)

### Team Practices

- [Pair Programming](https://martinfowler.com/articles/on-pair-programming.html)
- [Sprint Retrospectives](https://www.atlassian.com/team-playbook/plays/retrospective)
- [Code Review Best Practices](https://google.github.io/eng-practices/review/)
