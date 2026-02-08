---
status: active
updated: 2026-02-06
section: "Copilot Surfaces"
---

# GitHub Copilot on the Web: AI Assistance Beyond the IDE

> **The Question This Talk Answers:**
> *"How do I use Copilot for coordination work when I'm not in VS Code?"*

**Duration:** 40 minutes | **Target Audience:** Developers / Product Managers / Team Leads

---

## 📊 Content Fitness

| Criterion | Assessment | Notes |
|-----------|-----------|-------|
| **Relevant** | 🟢 High | PR reviews, issue triage, and stakeholder communication happen in browsers and mobile—AI assistance should follow |
| **Compelling** | 🟢 High | Repository customizations (instructions, skills, agents) work identically across web, mobile, and CLI without reconfiguration |
| **Actionable** | 🟢 High | Access github.com/copilot right now—no installation, no setup, immediate value for coordination workflows |

**Overall Status:** 🟢 Ready to use

---

## 📽️ Slide Generation Mapping

### Slide Sequence (Generated Automatically)

1. **Title/Logo Slide** ← H1 title + subtitle
2. **Question/Objective Slide** ← "The Question This Talk Answers"
3. **Table of Contents Slide** ← Auto-generated from 🎬 sections
4. **Problem Slide** ← "The Problem"
5. **Solution Overview** ← "The Solution"
6. **Key Artifacts** ← N/A (no workflows/configs—web interface)
7. **Mental Model Shift** ← Move-Toward/Away/Against
8. **When to Use Decision Tree** ← "When to Use This Pattern"
9. **Web-Specific Capabilities** ← 🎬 Section 1 (2-3 slides)
10. **Repository Customization Portability** ← 🎬 Section 2 (2-3 slides)
11. **Mobile Workflows** ← 🎬 Section 3 (2-3 slides)
12. **GitHub Spark Prototyping** ← 🎬 Section 4 (2-3 slides)
13. **Coding Agent Delegation** ← 🎬 Section 5 (2-3 slides)
14. **Multi-Model Selection** ← 🎬 Section 6 (2-3 slides)
15. **Use Cases** ← Real-World Use Cases (1-2 slides)
16. **Actionable Outcomes** ← What You Can Do Today
17. **Related Patterns** ← Related Patterns
18. **Official Documentation** ← 📚 section
19. **End Slide** ← Auto-generated

### Major Sections (TOC Entries)

```markdown
<!-- 🎬 MAJOR SECTION: Web-Specific Capabilities -->
<!-- 🎬 MAJOR SECTION: Repository Customization Portability -->
<!-- 🎬 MAJOR SECTION: Mobile Workflows -->
<!-- 🎬 MAJOR SECTION: GitHub Spark Prototyping -->
<!-- 🎬 MAJOR SECTION: Coding Agent Delegation -->
<!-- 🎬 MAJOR SECTION: Multi-Model Selection -->
```

---

## The Problem

### Key Points

- **Work happens outside the IDE**
  PR reviews, issue triage, stakeholder questions, and documentation happen in browsers and on mobile devices, not VS Code

- **Context-switching friction**
  Opening the IDE mid-meeting or from mobile interrupts flow, requires local environment, breaks momentum

- **Customizations trapped in IDE**
  Repository instructions, skills, and agents built for VS Code would need recreation for web use — or so teams assume

- **Coordination lacks AI assistance**
  Product managers, architects, and team leads coordinate without access to the same AI capabilities developers have in IDEs

### Narrative

Modern software development extends far beyond implementation. Product managers review PRs during stakeholder meetings. Team leads approve changes from conference rooms. Architects analyze features from tablets during design sessions. Operations teams triage production issues from mobile during incident response. Support staff need AI-generated documentation summaries without VS Code training.

Yet AI assistance has traditionally lived exclusively in the IDE, forcing awkward choices: context-switch to your laptop and open VS Code (breaking flow), or proceed without AI help (losing quality and speed). This artificial boundary limits who can benefit from AI and where work naturally happens.

GitHub Copilot on the Web eliminates this constraint by bringing full AI capabilities—including all repository customizations—to browsers and mobile devices. The same custom agents, skills, and instructions work identically across interfaces. Work happens where it naturally occurs, AI assistance is present everywhere, and the entire team benefits from engineering's customization investment.

---

## The Solution: GitHub Copilot Web

### What It Does

GitHub Copilot on github.com provides the complete AI platform optimized for coordination workflows: issue creation, PR reviews, cross-repository analysis, documentation generation, and stakeholder communication. It's not a limited browser version—it's the same model access with interface-appropriate tools.

### Key Capabilities

- **Repository customizations work identically**: `.github/copilot-instructions.md`, skills (`.github/skills/`), and agents (`.github/agents/`) load automatically with zero reconfiguration
- **Image-based issue creation**: Drag screenshots into chat—AI extracts error details, applies templates, assigns labels, generates structured issues in 2 minutes vs 14 minutes manual transcription
- **Cross-repository access**: Query any repo without cloning, track work across organization, analyze features spanning multiple codebases
- **Mobile-first PR reviews**: Invoke custom security agents from your phone, provide structured feedback, unblock teams immediately without returning to desk
- **GitHub Spark prototyping**: Generate interactive UI demos from descriptions, share live previews with stakeholders, validate designs before implementation
- **Coding Agent delegation**: Assign routine tasks to autonomous agents from browser, monitor progress, review results via PR workflow

### Architecture Overview

Copilot Web shares the same underlying models as VS Code but adapts its tool set for coordination tasks. Where VS Code offers file editing, terminal access, and local debugging, the web interface provides repo analysis, issue/PR creation, cross-repo queries, and team communication tools.

The critical architectural insight: **repository customizations are interface-agnostic**. When you create `.github/copilot-instructions.md` in VS Code, it automatically loads at github.com/copilot. Custom agents configured for security reviews work identically on mobile. Skills for effort estimation execute the same from CLI, web, or IDE.

This portability means: **build once, use everywhere**—maximizing ROI on customization investment while ensuring consistent quality regardless of interface or user role.

**Official Documentation:**
- 📖 **[GitHub Copilot on github.com](https://docs.github.com/en/copilot/github-copilot-chat/copilot-chat-in-github/using-github-copilot-chat-in-githubcom)** — Core web interface features and examples
- 📖 **[GitHub Copilot Chat in GitHub Mobile](https://docs.github.com/en/copilot/github-copilot-chat/copilot-chat-in-github-mobile/using-github-copilot-chat-in-github-mobile)** — Mobile-specific capabilities and workflow
- 📖 **[GitHub Copilot Quickstart (Web)](https://docs.github.com/en/copilot/get-started/quickstart?tool=webui)** — Getting started guide for web interface

---

## 📦 Key Artifacts

**Note:** There are no workflow files or configuration artifacts for Copilot Web—it's an interface, not an installable tool. The "artifacts" here are the **repository customizations** that work across all Copilot interfaces.

### Primary Artifacts

*These are created once and work everywhere (IDE, web, mobile, CLI)*

- **`.github/copilot-instructions.md`** — Repository-specific coding standards, architectural patterns, response customization (see [Module 1: Custom Instructions](../../workshop/01-instructions/))
- **`.github/skills/[skill-name]/`** — Domain-specific capabilities like effort estimation, security analysis, or compliance checking (see [Module 4: Agent Skills](../../workshop/04-agent-skills/))
- **`.github/agents/[agent-name].md`** — Specialized agents for code review, triage, documentation (see [Module 6: Custom Agents](../../workshop/06-custom-agents/))

### Supporting Context

*Official guides for extending Copilot capabilities*

- **[GitHub Spark](https://github.com/features/spark)** — Rapid prototyping tool accessible from web interface
- **[Coding Agent Documentation](https://docs.github.com/en/copilot/concepts/coding-agent/coding-agent)** — Autonomous task delegation and PR workflow
- **[Power User's Guide to Web Copilot](https://github.blog/ai-and-ml/github-copilot/how-to-use-github-copilot-on-github-com-a-power-users-guide/)** — Advanced patterns and workflows

---

## 🎯 Mental Model Shift

> **The Core Insight:** From "AI assistance is an IDE feature" to "AI assistance follows me to wherever work happens"

### Move Toward (Embrace These Patterns)

- ✅ **Multi-interface workflows**: Use IDE for implementation, web for coordination, mobile for unblocking → Work happens naturally without artificial boundaries
- ✅ **Repository-centric customization**: Build instructions/skills/agents once in VS Code, they work everywhere → Maximize ROI, minimize duplication
- ✅ **Delegated automation**: Assign routine tasks (docs updates, dependency upgrades) to Coding Agent from web → Focus human time on complex problems
- ✅ **Image-driven issue creation**: Drag monitoring screenshots into chat instead of manual transcription → 85% time saved, 95% detail capture vs 60% manual

### Move Away From (Retire These Habits)

- ⚠️ **IDE-only mindset**: Assuming all AI-assisted work requires VS Code → Locks out non-engineers, creates artificial blockers
- ⚠️ **Manual issue transcription**: Spending 10-14 minutes copying alert details from screenshots → Error-prone, misses context, wastes time
- ⚠️ **Desk-bound PR reviews**: Waiting to return to laptop before reviewing/approving PRs → Teams blocked for hours, velocity loss
- ⚠️ **Recreating customizations**: Building separate instructions or agents for web vs IDE → Maintenance nightmare, inconsistent behavior

### Move Against (Active Resistance Required)

- 🛑 **Using web for implementation tasks**: Attempting to write production code on github.com instead of IDE → Wrong tool for the job, poor ergonomics
- 🛑 **Ignoring mobile workflows**: Designing only for laptop-based work → Misses real-world coordination patterns, limits team productivity

> **Example Transformation:** Before: Team lead receives Slack ping about urgent PR during leadership meeting. Replies "will review when back at desk" (2-3 hours). Team blocked. After: Opens PR on phone, invokes `@review-enforcer` agent, reads security and logic analysis (3 min), approves or requests specific changes. Team unblocked immediately. 16 hours/week capacity gained across team from eliminating wait time.

---

## When to Use This Pattern

### Decision Tree

```
Q: Where is the work happening?
├─ Implementation (writing/editing code)
│  → Use: VS Code or IDE
│  └─ Best for: File editing, debugging, local testing
│
├─ Coordination (planning, review, triage)
│  → Use: github.com/copilot (web interface)
│  └─ Best for: Cross-repo analysis, issue creation, PR reviews at desk
│
├─ Unblocking (mobile, remote, meetings)
│  → Use: GitHub Copilot in GitHub Mobile app
│  └─ Best for: PR approvals, quick feedback, answering stakeholder questions
│
└─ Automation (CI/CD, scripting, batch ops)
   → Use: Copilot CLI or Coding Agent
   └─ Best for: Workflow integration, routine task delegation
```

### Use Web Copilot When

- Reviewing PRs during meetings or from locations without IDE access
- Creating issues from monitoring screenshots or stakeholder reports
- Answering effort questions from product managers in real-time
- Generating documentation from code without IDE context-switching
- Prototyping UI concepts for stakeholder validation (via GitHub Spark)
- Delegating routine implementation work to Coding Agent

### Don't Use Web Copilot When

- Writing or editing production code (use IDE for proper file navigation, debugging, testing)
- Performing complex refactoring across many files (IDE tools are purpose-built for this)
- Debugging local build or test failures (requires IDE integration)

### Comparison with Related Features

| Aspect | Web Copilot | IDE Copilot | Copilot CLI |
|--------|-------------|-------------|-------------|
| **Best For** | Coordination, review, triage | Implementation, debugging | Scripting, automation |
| **Primary Users** | All roles (engineering, product, ops) | Developers | Developers, DevOps |
| **Setup Time** | Zero (just visit github.com/copilot) | Minutes (extension install) | Minutes (CLI install) |
| **Mobile Access** | Yes (via GitHub Mobile app) | No | Limited |
| **Customizations** | All (instructions, skills, agents) | All | All |

---

<!-- 🎬 MAJOR SECTION: Web-Specific Capabilities -->
## Web-Specific Capabilities and Features

*Optimized capabilities for coordination work in browsers and mobile*

### Image-Based Issue Creation

**How it works:**
Drag a screenshot (monitoring alert, error dialog, UI bug) into github.com/copilot chat. AI reads image content, extracts error messages, stack traces, timestamps, and system state, then generates a structured issue with:

- Issue template applied (if configured)
- Relevant labels assigned based on content
- Component references linked
- Severity assessed from error context

**Example workflow:**
```
1. Operations receives PagerDuty alert with dashboard screenshot
2. Drag image into github.com/copilot
3. Prompt: "Create high-priority issue from this alert using our incident template"
4. AI extracts: error code, affected services, request IDs, timestamps
5. Issue created with all context in 2 minutes
```

**Time savings:** 14 minutes → 2 minutes per issue (85% reduction)
**Quality improvement:** 95% detail capture vs 60% manual transcription

### Cross-Repository Access

Query any repo in your organization without cloning or switching workspace:

**Example queries:**
- "How do other teams implement rate limiting?"
- "Find all repos that depend on library X version Y"
- "Show me authentication patterns across our microservices"

Copilot Web analyzes code, searches issues/PRs, and synthesizes patterns across repos—enabling architecture research and org-wide consistency checking without local checkouts.

### Subthreaded Conversations

Edit or retry any question to create conversation branches. Each branch maintains independent context, allowing comparison of:

- Different refactoring approaches (by switching models)
- Multiple architectural patterns
- Alternative explanations side-by-side

Navigate between branches using forward/back controls—like Git commits for conversations.

### Multi-Model Support

Switch between GPT-4.1, Claude Sonnet 4, and Claude Opus 4 mid-conversation. Re-generate the same prompt with a different model to compare approaches:

| Model | Strengths | Best For |
|-------|-----------|----------|
| **GPT-4.1** | Fast, cost-effective, strong code analysis | Routine PR reviews, issue triage |
| **Claude Sonnet 4** | Balanced, excellent technical writing | Documentation, release notes, structured output |
| **Claude Opus 4** | Advanced reasoning, creativity | Complex architecture, edge cases, novel approaches |

---

<!-- 🎬 MAJOR SECTION: Repository Customization Portability -->
## Repository Customization Portability

*Build once in IDE, use everywhere—web, mobile, CLI*

### What Works Identically

**Repository Instructions:**
- `.github/copilot-instructions.md` loads automatically on github.com/copilot
- Same coding standards, architectural patterns, response customization
- Zero configuration required—works across all interfaces

**Agent Skills:**
- `.github/skills/effort-estimator/` accessible via natural language on web
- Domain-specific capabilities (security analysis, compliance checking) execute identically
- No duplication needed—same skill definition serves all interfaces

**Custom Agents:**
- `@review-enforcer` appears in agent dropdown on web and mobile
- Tool restrictions, handoff patterns, role-based presets work identically
- Security policies enforced consistently across all access methods

### Architecture: Why It Works

Copilot's architecture separates **model access** (what AI can do) from **tool sets** (how AI interacts with environment). All interfaces share:

- Same model access (GPT-4.1, Claude Sonnet/Opus 4)
- Same customization loading (instructions, skills, agents)
- Same conversation history and memory

Differences are in tools: VS Code offers file editing/terminal, web offers issue creation/cross-repo queries. But the intelligence layer—including all your customizations—is interface-agnostic.

### Portability Validation

Test that customizations work across interfaces:

```
✅ Repository Instructions Test:
1. Add custom standards to .github/copilot-instructions.md
2. Ask same question in VS Code and github.com/copilot
3. Verify responses follow same standards

✅ Custom Agent Test:
1. Create @security-reviewer agent in VS Code
2. Open PR on github.com and invoke @security-reviewer
3. Verify agent performs same analysis

✅ Skill Test:
1. Build effort-estimator skill in .github/skills/
2. Invoke from CLI: copilot -p "estimate effort for #123"
3. Invoke from web: "Use effort-estimator skill for issue #123"
4. Compare results—should be consistent
```

---

<!-- 🎬 MAJOR SECTION: Mobile Workflows -->
## Mobile Workflows: Unblocking from Anywhere

*PR reviews, issue triage, stakeholder responses without returning to desk*

### Mobile PR Review Pattern

**Scenario:** You're in a meeting when your team pings about an urgent PR needing approval

**Traditional workflow (2-3 hours):**
1. "I'll review when back at my desk"
2. Meeting ends, context switch back to work
3. Open IDE, checkout branch, review code
4. Team blocked entire time

**Copilot Mobile workflow (3 minutes):**
1. Open PR in GitHub Mobile app
2. Tap Copilot icon, invoke `@review-enforcer` agent
3. Agent analyzes: security, logic, performance, test coverage
4. Read summary, request changes or approve
5. Team unblocked immediately

**Impact:** 16 hours/week capacity gained across team from eliminating wait time

### Mobile Issue Triage Pattern

**Scenario:** On-call engineer receives alert during commute

**Old pattern:** Wait until home/office to investigate (30-45 min delay)

**New pattern:**
1. Tap screenshot in PagerDuty notification
2. Drag into GitHub Mobile Copilot chat
3. AI extracts error details, suggests affected components
4. Create high-priority issue with all context
5. Assign to on-call team member
6. Done in 2 minutes from subway

### Design Principles for Mobile Agents

When creating custom agents (Module 6), consider mobile use cases:

- **Concise output:** Mobile screens are small—agents should prioritize key findings
- **Actionable recommendations:** "Approve" or "Request changes because X" not "Consider reviewing"
- **Minimal interaction:** Single invoke → readable summary → decision
- **Offline tolerance:** Agents should handle intermittent connectivity gracefully

**Example mobile-optimized agent:**

```markdown
# @mobile-reviewer Agent

You are a mobile-friendly PR reviewer. Provide:

1. **Decision:** APPROVE / REQUEST_CHANGES / COMMENT
2. **Key Issues:** Max 3 bullet points (critical only)
3. **Rationale:** 2 sentences

Skip minor style issues. Focus on security, correctness, breaking changes.

Format for mobile readability—use emojis for scan-ability:
- 🔴 Critical issue
- 🟡 Important concern
- 🟢 Looks good
```

---

<!-- 🎬 MAJOR SECTION: GitHub Spark Prototyping -->
## GitHub Spark: Rapid UI Prototyping

*Design validation before implementation commitment*

### What Is GitHub Spark?

Natural language UI generator accessible from github.com/copilot. Describe an interface—AI creates working, interactive prototype with:

- Live preview you can interact with
- Shareable link for stakeholder feedback
- Data persistence (for todo lists, forms, etc.)
- Themable design system
- Integrated LLM prompting for dynamic features

### Typical Workflow

```
1. Product Manager: "We need a feature comparison table for pricing page"

2. In github.com/copilot:
   Prompt: "Create a feature comparison table showing Free/Pro/Enterprise tiers
           with checkmarks for included features"

3. Spark generates working table in ~30 seconds
   PM reviews, requests changes: "Add hover tooltips explaining each feature"

4. PM shares link with design team and stakeholders
   Collects feedback: "Can we make Pro column stand out more?"

5. Iterates 2-3 times based on feedback (15 min total)

6. Once validated, engineer exports code to production repo
```

**Time savings:** Design validation that would take 2-4 hours of back-and-forth (mockups → feedback → revised mockups) happens in 15 minutes with working prototypes.

### Use Cases Beyond UI Mockups

**Interactive Documentation:**
- Create demos of new features for user guides
- Build interactive tutorials for onboarding
- Generate visual examples of API responses

**Internal Tools:**
- Allowance tracker for team expense tracking
- Karaoke night planning app (yes, real example from Spark team)
- Custom HackerNews client with AI-summarized comments

**Learning/Teaching:**
- Kids building their first apps (vehicle animation, city finder)
- Teaching coding concepts with immediate visual feedback
- Prototyping algorithms before implementing in production

### Technical Capabilities

**Managed Runtime:**
- Deployment-free hosting (no build step, no server setup)
- Key-value data storage (persists across sessions)
- PWA-enabled (install on phone/desktop, works offline)
- Theme editor (accent color, border radius, spacing, light/dark)

**AI Integration:**
- Access to GitHub Models for generative features
- Prompt editor for customizing AI behavior
- Example: "Generate bedtime story" button with custom prompt template

**Collaboration:**
- Share with read-only or read-write permissions
- Remix others' sparks to adapt to your needs
- View revision history to understand thought process

---

<!-- 🎬 MAJOR SECTION: Coding Agent Delegation -->
## Coding Agent: Autonomous Execution from Browser

*Delegate routine implementation, review results via PR workflow*

### How It Works

**From github.com/copilot or any GitHub page:**

1. Identify task (issue, alert, technical debt item)
2. Assign to Copilot: "Create a PR that fixes issue #427"
3. Agent works in sandboxed GitHub Actions environment:
   - Creates feature branch (`copilot/issue-427`)
   - Analyzes codebase and issue requirements
   - Makes changes across multiple files
   - Runs tests and linters
   - Performs security scans (CodeQL, secret detection)
4. Opens draft PR with evidence bundle
5. You review from web interface using `@review-enforcer` agent
6. Request changes via PR comments if needed
7. Agent iterates based on feedback
8. Approve and merge when ready

**No IDE required for delegation or review—entire workflow happens in browser.**

### When to Use Coding Agent

**Good fits:**
- Routine refactoring (update API patterns across 30 files)
- Boilerplate generation (CRUD endpoints, test scaffolding)
- Documentation sync (update docs after implementation changes)
- Dependency upgrades (with migration pattern application)
- Technical debt cleanup (fix linter warnings, add logging)

**Poor fits:**
- Novel feature design (needs human creativity)
- Complex debugging (agent can't reproduce local environment issues)
- Multi-repo coordination (agent works in single repo)
- Performance optimization (requires profiling and measurement)

### Custom Agent Integration

Coding Agent respects your repository customizations:

- Follows coding standards from `.github/copilot-instructions.md`
- Can invoke skills defined in `.github/skills/`
- Uses custom review agents you've built

**Example:**
If you've created a `@security-focused` custom agent that enforces auth patterns, assign it to review Coding Agent's PRs—ensuring machine-generated code meets same standards as human code.

### Cost Model

Coding Agent uses:
- **GitHub Actions minutes:** For the sandboxed development environment
- **Copilot premium requests:** For AI model inference

Within monthly allowances, no additional cost. Beyond allowances, standard GitHub Actions and Copilot pricing applies.

---

<!-- 🎬 MAJOR SECTION: Multi-Model Selection -->
## Strategic Model Selection

*Match AI capabilities to task requirements*

### Available Models on Web

| Model | Context Window | Strengths | Typical Use Cases |
|-------|----------------|-----------|-------------------|
| **GPT-4.1** | 128K tokens | Fast inference, cost-effective, strong general code analysis | PR reviews, issue triage, routine queries |
| **Claude Sonnet 4** | 200K tokens | Excellent technical writing, structured output, balanced performance | Documentation generation, onboarding guides, API specs |
| **Claude Opus 4** | 200K tokens | Advanced reasoning, creative problem-solving, edge case identification | Architecture decisions, refactoring strategies, novel approaches |

### When to Switch Models

**During conversation:**
- Try approach with GPT-4.1
- If result seems generic or misses nuance, retry with Claude Opus 4
- Compare responses using subthreaded conversations
- Use model that provides most useful answer

**By task type:**
- **Documentation generation:** Start with Claude Sonnet 4 (best technical writing)
- **Quick code review:** Use GPT-4.1 (fastest, cost-effective)
- **System design:** Use Claude Opus 4 (best reasoning for complex decisions)

### Model Comparison Workflow

```
1. Ask question: "How should we refactor our authentication layer?"
2. Receive GPT-4.1 response (suggestion A)
3. Click retry icon, select Claude Opus 4
4. Receive Opus 4 response (suggestion B)
5. Navigate between responses using forward/back controls
6. Pick best approach or combine insights from both
```

**Pro Tip:** History tracks which model generated each response—helps you learn which models work best for your specific use cases over time.

---

## Real-World Use Cases

### Use Case 1: Distributed Team PR Review

**The Problem:** Team across 6 time zones saw 4-hour average PR wait time. Blocking cost: 20 hours/week of developer time waiting for reviews.

**The Solution:**
Team lead configured `@mobile-reviewer` agent in `.github/agents/`. Reviewed all PRs from phone during non-coding time (meetings, commute, lunch). Agent provided security/logic/test analysis. Lead approved or requested specific changes in 3 minutes per PR.

**Outcome:**
- **4 hours → 15 minutes** average PR wait time (94% reduction)
- **20 hours/week → 2 hours/week** blocking cost (18 hours/week capacity regained)
- **Zero decline in code quality** (agent caught same issues as in-IDE review)

---

### Use Case 2: Operations Issue Triage Transformation

**The Problem:** SRE team processed 40 production alerts/week. Each required 14 minutes of manual work: screenshot alert, transcribe details to issue, assign priority/owner, link related incidents. 560 minutes/week (9.3 hours) spent on transcription.

**The Solution:**
Implemented image-based issue workflow:
1. Screenshot alert → drag into github.com/copilot on phone/tablet
2. Prompt: "Create P1 issue using incident template"
3. AI extracts: error code, affected services, timestamps, stack trace
4. Review and submit (2 min)

**Outcome:**
- **14 min → 2 min** per issue (85% reduction)
- **9.3 hours/week → 1.3 hours/week** (8 hours/week saved)
- **95% detail capture** vs 60% manual (fewer follow-up questions)

---

### Use Case 3: Real-Time Product Prioritization

**The Problem:** Product team scheduled 90-minute "backlog refinement" meetings because engineering needed time to research effort estimates. 5 features/week × 90 min research = 7.5 hours/week of coordination overhead.

**The Solution:**
Product manager uses custom `effort-estimator` skill (`.github/skills/effort-estimator/`) during stakeholder calls:
- Stakeholder proposes feature
- PM invokes skill from github.com/copilot: "Estimate effort for adding SSO support"
- AI analyzes affected code, checks historical velocity for similar features, identifies dependencies
- Provides estimate with confidence score in 3 minutes
- Decision made in real-time

**Outcome:**
- **90 min → 3 min** per estimate (97% reduction)
- **7.5 hours/week → 0.25 hours/week** (7.25 hours/week saved)
- **Faster feature cycle** (decisions happen same day, not after multi-day research)

---

## ✅ What You Can Do Today

**Immediate Actions (5 minutes):**
- [ ] Visit [github.com/copilot](https://github.com/copilot) right now—no installation required
- [ ] Ask a general question: "What are best practices for error handling in Node.js?"
- [ ] Navigate to a repository and ask a repo-specific question: "What does this repo do?"

**Short-Term Implementation (30 minutes):**
- [ ] Review a PR from github.com/copilot instead of your IDE—compare experience
- [ ] Install GitHub Mobile app and open a PR from your phone—test mobile review workflow
- [ ] Drag a screenshot (any technical image) into chat—see what AI extracts

**Advanced Exploration (2-4 hours):**
- [ ] Create a mobile-optimized custom agent (`.github/agents/mobile-reviewer.md`) following principles in this talk
- [ ] Try GitHub Spark: create a simple UI prototype from natural language description
- [ ] Delegate a routine task to Coding Agent: "Create a PR that updates all dependencies"
- [ ] Build an `effort-estimator` skill (`.github/skills/effort-estimator/`) for real-time estimates

**Next Steps After Completion:**
1. ✅ Test web Copilot for 1 week—track time saved on coordination tasks
2. 📖 Review complementary talk: [Custom Agents](../06-custom-agents/) for mobile-optimized agent patterns
3. 📊 Measure ROI: issue filing time, PR blocking time, documentation coverage
4. 🚀 Roll out to non-engineering roles: product, operations, support teams

---

## Related Patterns

### Complementary Features

- **[Custom Instructions](../../workshop/01-instructions/)** — Repository-specific guidance that works across all interfaces
- **[Agent Skills](../../workshop/04-agent-skills/)** — Domain expertise (effort estimation, security) accessible from web
- **[Custom Agents](../../workshop/06-custom-agents/)** — Specialized reviewers/analyzers that work on mobile
- **[Copilot CLI](../copilot-cli/)** — Terminal interface for automation and scripting
- **[Coding Agent](../agentic-sdlc/)** — Full autonomous execution when ready for Gen-4 SDLC

### Decision Flow

**If this talk doesn't fit your needs:**

```
Q: What's your primary workflow?
├─ I need AI while writing code
│  → See: VS Code Copilot documentation
│  └─ Best for: Implementation, debugging, refactoring
│
├─ I need AI for coordination (reviews, planning, documentation)
│  → You're in the right place!
│  └─ Best for: Cross-role AI assistance
│
├─ I need AI for scripting and automation
│  → See: Copilot CLI talk
│  └─ Best for: Terminal workflows, CI/CD integration
│
└─ I want full autonomous agents
   → See: Agentic SDLC talk
   └─ Best for: End-to-end issue-to-PR automation
```

See [DECISION-GUIDE.md](../DECISION-GUIDE.md) for complete navigation help.

---

## 📚 Official Documentation

**Primary Documentation:**
- 📖 **[Using GitHub Copilot Chat in GitHub.com](https://docs.github.com/en/copilot/github-copilot-chat/copilot-chat-in-github/using-github-copilot-chat-in-githubcom)** — Complete web interface guide with examples
- 📖 **[Using GitHub Copilot Chat in GitHub Mobile](https://docs.github.com/en/copilot/github-copilot-chat/copilot-chat-in-github-mobile/using-github-copilot-chat-in-github-mobile)** — Mobile-specific features and workflows
- 📖 **[GitHub Copilot Quickstart (Web)](https://docs.github.com/en/copilot/get-started/quickstart?tool=webui)** — Getting started guide for browser interface

**Additional Resources:**
- 🎓 [GitHub Spark Documentation](https://githubnext.com/projects/github-spark) — Rapid prototyping tool overview
- 🤖 [About Copilot Coding Agent](https://docs.github.com/en/copilot/concepts/coding-agent/coding-agent) — Autonomous task delegation features
- 📝 [Power User's Guide to Web Copilot](https://github.blog/ai-and-ml/github-copilot/how-to-use-github-copilot-on-github-com-a-power-users-guide/) — Advanced patterns and real-world workflows
- 📊 [AI Model Comparison](https://docs.github.com/en/copilot/reference/ai-models/model-comparison) — Choosing the right model for your task

**GitHub Resources:**
- 🐙 [GitHub Spark Project Page](https://github.com/features/spark) — Live prototyping tool
- 🔧 [About Repository Custom Instructions](https://docs.github.com/en/copilot/concepts/prompting/response-customization?tool=webui#about-repository-custom-instructions) — Cross-interface customization

---

## 🎭 Behind the Scenes

### The Architecture: Why Customizations Port Automatically

Copilot's architecture separates three concerns:

1. **Intelligence Layer** (model access, instructions, skills, agents)
2. **Tool Layer** (file editing, terminal, issue creation, repo queries)
3. **Interface Layer** (IDE, web, mobile, CLI)

When you create `.github/copilot-instructions.md`, it lives in the intelligence layer—which all interfaces share. VS Code's tool layer offers file editing; web's tool layer offers issue creation. But both use the same instructions.

This is why you don't need different customizations per interface—they're architecture-agnostic by design.

### Image Understanding: How It Works

When you drag a screenshot into github.com/copilot:

1. Image uploads to secure blob storage
2. Vision-capable model (GPT-4.1 or Claude Opus 4) receives image
3. AI performs OCR + semantic understanding:
   - Extracts text (error messages, logs, timestamps)
   - Recognizes UI elements (buttons, dialogs, charts)
   - Identifies patterns (stack traces, JSON payloads)
4. Structured data returned to chat context
5. Conversational model synthesizes into issue/response

**Supported formats:** JPEG, PNG, GIF, WEBP
**Privacy:** Images processed per Copilot data retention policies, not used for model training

### Mobile Agent Design Patterns

Effective mobile agents follow "scan-reveal-decide" structure:

**Scan:** Visual hierarchy aids rapid understanding
```markdown
🔴 **CRITICAL SECURITY ISSUE**
SQL injection vulnerability in line 47

🟡 **Important**
Missing null check in error handler

🟢 **Looks good**
Test coverage adequate
```

**Reveal:** Expand on tap (not inline) for detail:
```markdown
🔴 SQL injection (tap for details)
   └─ [Collapsed until user taps]
      User input concatenated into query without sanitization.
      line 47: `query = "SELECT * FROM users WHERE id=" + userId`
      Recommendation: Use parameterized queries
```

**Decide:** Clear action required:
```markdown
**Decision:** REQUEST_CHANGES
**Blocker:** Security vulnerability must be fixed before merge
**Next:** Assign to @security-team for consultation
```

### Conversation History and Context Windows

Each Copilot interface maintains separate conversation history but shares:
- Repository customizations (instructions, skills, agents)
- Access to same AI models
- Agentic memory (if enabled via Copilot Pro/Pro+)

**Context window considerations:**
- GPT-4.1: 128K tokens (~96,000 words)
- Claude Sonnet/Opus 4: 200K tokens (~150,000 words)

Long conversations may exceed context window—start new conversation when responses seem off-topic or forget earlier context.

---

## Key Takeaways

### Core Insights

- **Work happens everywhere, not just IDEs**: PR reviews, issue triage, stakeholder communication occur in browsers and mobile—AI assistance should follow
- **Customizations are interface-agnostic**: Build repository instructions, skills, and agents once—they work identically across IDE, web, mobile, CLI
- **Coordination vs Implementation**: Web Copilot optimizes for planning, review, documentation, and communication—use IDE for code writing
- **Mobile unlocks velocity**: 16 hours/week capacity gained by reviewing PRs from phone instead of waiting to return to desk
- **Image-to-issue transforms ops**: 85% time saved triaging alerts from screenshots vs manual transcription
- **Multi-model selection matters**: Match task to model (GPT-4.1 for speed, Claude Opus 4 for complexity)

### Transformation Summary

**Before Web Copilot:**
- AI assistance trapped in IDE
- Product, ops, support work without AI
- Context-switching breaks flow
- Teams blocked waiting for desk-bound reviews

**After Web Copilot:**
- AI follows you to wherever work happens
- Entire org benefits from engineering's customizations
- Coordination tasks (reviews, triage) happen naturally
- Mobile workflows eliminate blocking time

**ROI:** Teams save 20-30 hours/week on coordination overhead through image-based issue creation (8 hrs), mobile PR reviews (18 hrs), and real-time estimates (7 hrs).

---

## Getting Started Checklist

✅ **Tested web interface** — Visited github.com/copilot and asked general + repo-specific questions
✅ **Verified customizations port** — Confirmed `.github/copilot-instructions.md` works identically on web
✅ **Mobile review workflow** — Opened PR on phone, invoked custom agent, provided feedback in <5 min
✅ **Image-based issue creation** — Dragged screenshot into chat, reviewed AI-extracted details
✅ **Model comparison** — Tried same question with GPT-4.1 vs Claude Opus 4, compared responses
✅ **Spark prototyping** — Generated simple UI prototype, shared with stakeholder
✅ **Coding Agent delegation** — Assigned routine task, reviewed PR from web interface

**Ready for full adoption?** Roll out to product, operations, and support teams—democratizing AI beyond engineering.

4. **Generate documentation**
   Create user docs from code without IDE context switch

5. **Delegate to Coding Agent**
   Assign a routine refactoring task and review the PR

### Next Steps

- Explore GitHub Spark for design prototyping
- Configure mobile-optimized agents for team reviews
- Integrate web workflows into stakeholder communication patterns
- Measure team velocity improvements from eliminating PR blocking

### Narrative

Adopting web Copilot requires no configuration—if your repository has instructions, skills, or agents, they're already available at github.com/copilot. The fastest path to value: identify your team's biggest context-switching pain points (PR reviews, issue triage, stakeholder questions) and shift those workflows to the web interface. Measure the time saved from eliminating IDE switches and team blocking. Expand usage as productivity gains become evident.

---

## Resources

**Official Documentation:**
- [GitHub Copilot Web Quickstart](https://docs.github.com/en/copilot/get-started/quickstart)
- [Using Copilot Chat in GitHub.com](https://docs.github.com/en/copilot/github-copilot-chat/copilot-chat-in-github/using-github-copilot-chat-in-githubcom)
- [Copilot on Mobile](https://docs.github.com/en/copilot/github-copilot-chat/copilot-chat-in-github-mobile/using-github-copilot-chat-in-github-mobile)

**Advanced Features:**
- [GitHub Spark Documentation](https://githubnext.com/projects/github-spark)
- [Coding Agent Guide](https://docs.github.com/en/copilot/concepts/coding-agent/coding-agent)
- [Power User's Guide to Web Copilot](https://github.blog/ai-and-ml/github-copilot/how-to-use-github-copilot-on-github-com-a-power-users-guide/)

---

**Multi-interface AI assistance for modern software teams**
