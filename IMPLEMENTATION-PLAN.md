# Implementation Plan: December 2025 Feature Integration

**Created**: January 15, 2026  
**Based on**: LATEST.md Workshop Update Plan  
**Approach**: Module-by-module integration  
**Estimated Total Effort**: 12-15 hours

---

## 📋 Decision Log

| Question | Decision |
|----------|----------|
| Agent HQ: new exercise or expand 7.3? | **Expand 7.3** from 15 min to 25-30 min |
| Enterprise exercises: consolidate? | **Add new exercises**, consolidate later if needed |
| User-level skills: full exercise? | **Just mention in concepts** section |
| Version gating callouts? | **Assume VS Code 1.107+**, no explicit callouts |
| Execution order? | **Module-by-module** |

---

## 🗺️ Module-by-Module Implementation

---

### Module 0: Orientation

**Files to Update**:
- `modules/00-orientation/README.md`

**Changes**:

#### 1. Update Prerequisites Section

Add after the existing VS Code bullet:

```markdown
- **VS Code 1.107+** recommended for background agents and Agent HQ features
  - Check version: Help → About (or `code --version` in terminal)
  - [VS Code Updates](https://code.visualstudio.com/updates)
```

#### 2. Add Auto Model Selection Note

Add new section after Prerequisites, before "Estimated Time":

```markdown
## 🤖 Auto Model Selection

GitHub Copilot automatically selects the best available model based on your subscription, availability, and organizational policies. This means:

- **You don't need to choose a model** — Copilot optimizes for you
- **Pro+ subscribers get 10% discount** on premium requests when using Auto
- **Enterprises can set model policies** — your organization may restrict certain models

Throughout this workshop, we use the default "Auto" setting. If you see different model names in responses (GPT-4.1, Claude Sonnet, etc.), that's Auto at work.

> 💡 **Sarah's Take**: *"I was skeptical about 'auto' anything—usually means 'works until it doesn't.' But this actually saves us money. 10% discount on premium requests adds up when you have 50 developers."*
```

**Estimated Time**: 15 minutes

---

### Module 1: Repository Instructions

**Files to Update**: None required

**Changes**: No structural changes needed. Repository instructions work the same regardless of new features.

**Optional Enhancement**: Add a note that repository instructions are respected by background agents and Agent HQ sessions.

**Estimated Time**: 0 minutes (skip) or 5 minutes (optional note)

---

### Module 2: Agent Plan Mode

**Files to Update**: None required

**Changes**: Plan mode functionality unchanged. Background agents use plan mode the same way.

**Estimated Time**: 0 minutes (skip)

---

### Module 3: Custom Prompts

**Files to Update**: None required

**Changes**: Prompts work identically with new features.

**Estimated Time**: 0 minutes (skip)

---

### Module 4: Custom Instructions

**Files to Update**: None required

**Changes**: Custom instructions are automatically loaded by background agents.

**Estimated Time**: 0 minutes (skip)

---

### Module 5: Agent Skills

**Files to Update**:
- `modules/05-agent-skills/README.md`

**Changes**:

#### 1. Update "Where Skills Live" Section

Expand the existing section to include more detail on skill scoping:

```markdown
### Where Skills Live

Skills follow a hierarchy—more specific scopes override broader ones:

| Scope | Location | Visibility | Use Case |
|-------|----------|------------|----------|
| **Project** | `.github/skills/` | Everyone on project | Team domain knowledge |
| **User** | `~/.copilot/skills/` | Only you, all projects | Personal productivity patterns |
| **Organization** | Org settings (Enterprise) | All org repos | Company-wide standards |

**Project Skills** (repository-specific):
- `.github/skills/` in your repository
- Shared with everyone working on the project
- Version controlled with your code

**Personal Skills** (across all projects):
- `~/.copilot/skills/` in your home directory
- Available in all your projects
- Your personal toolkit (coding style, preferred patterns)
- Great for shortcuts and personal productivity hacks

**Organization Skills** (Enterprise):
- Configured in organization settings
- Applied across all repositories in the org
- Managed by platform teams
- See Module 11 for enterprise skill library patterns

> 💡 **Tip**: Start with project skills. Once you find patterns you use across multiple projects, promote them to personal skills.
```

#### 2. Update Community Skills Section

Enhance with GA status:

```markdown
### Community Skills

Agent Skills are now **generally available** and supported across GitHub Copilot, Copilot CLI, and VS Code. You don't have to build every skill from scratch:

- **Anthropic's Skills Repository**: [github.com/anthropics/skills](https://github.com/anthropics/skills)
- **GitHub's Awesome Copilot Collection**: [github.com/github/awesome-copilot](https://github.com/github/awesome-copilot)
- **Agent Skills Standard**: [agentskills.io](https://agentskills.io)

Skills from these repositories work with any tool supporting the agent skills standard—not just GitHub Copilot.
```

**Estimated Time**: 20 minutes

---

### Module 6: MCP Servers

**Files to Update**: None required

**Changes**: MCP servers work with background agents automatically.

**Optional Enhancement**: Add a note that MCP connections persist across Agent HQ sessions.

**Estimated Time**: 0 minutes (skip) or 5 minutes (optional note)

---

### Module 7: Custom Agents ⭐ MAJOR UPDATE

**Files to Update**:
- `modules/07-custom-agents/README.md`
- `modules/07-custom-agents/EXERCISES.md`
- `modules/07-custom-agents/personas/marcus.md` (primary)

**Changes**:

#### 1. Update README.md Key Concepts Section

Add new section after "Custom Agents":

```markdown
### Background Agents & Agent HQ

VS Code 1.107+ introduces powerful new agent capabilities:

**Background Agents**:
- Run in isolated workspaces using Git worktrees
- Continue working even when chat window is closed
- Perfect for long-running tasks (refactoring, test generation, documentation)

**Agent HQ**:
- Central dashboard for managing multiple agents
- View status, outputs, and progress of all running agents
- Archive completed sessions for future reference
- Access via Command Palette: "Copilot: Open Agent HQ"

**"Continue In" Pattern**:
- Start a task locally, then hand it off to background or cloud
- Move complex work off your laptop while you continue coding
- Cloud agents run on GitHub's infrastructure (Enterprise)

| Agent Type | Runs On | Best For |
|------------|---------|----------|
| **Local** | Your VS Code | Interactive work, quick tasks |
| **Background** | Your machine (worktree) | Long tasks while you work on other things |
| **Cloud** | GitHub infrastructure | Very long tasks, laptop can close |
```

#### 2. Update README.md Quick Navigator Table

Update to reflect expanded Exercise 7.3:

```markdown
| Exercise | Focus | Time |
|----------|-------|------|
| [7.1](EXERCISES.md#exercise-71-character-detail-v2--the-golden-thread-payoff) | Golden Thread PAYOFF | 25m |
| [7.2](EXERCISES.md#exercise-72-create-a-custom-agent--davids-architecture-reviewer) | Custom Agents | 20m |
| [7.3](EXERCISES.md#exercise-73-background-agents--agent-hq) | Background Agents & Agent HQ | 25m |
```

#### 3. Expand Exercise 7.3 in EXERCISES.md

Replace the current Exercise 7.3 content with expanded version:

```markdown
### Exercise 7.3: Background Agents & Agent HQ — "The Parallel Powerhouse"

#### 📖 The Story

**Marcus** has been watching the team work with agents all day. Every time someone starts a complex task, they're stuck waiting for the agent to finish.

*"I've got three things I want Copilot to do,"* he says. *"Update all our API documentation, generate comprehensive test fixtures, and refactor the error handling. But I can't do them sequentially—we're out of time."*

**David** has an idea: *"What if they didn't have to be sequential? Background agents let you run multiple tasks in parallel."*

*"And Agent HQ,"* Sarah adds, *"lets you see all of them at once. It's like having a team of junior developers, each working on their own branch."*

#### ❌ The "Before" — Sequential Agent Work

```
Task A: Update API docs (15 min) ─────────────────────────────►
                                   Task B: Test fixtures (20 min) ─────────────────────────────►
                                                                     Task C: Error refactor (15 min) ─────────────────────────────►
Total: 50 minutes (sequential)
```

Marcus could only do one thing at a time, waiting for each agent to complete.

#### 🎯 Objective

Use background agents and Agent HQ to run multiple agent tasks in parallel, reducing total wait time and enabling you to continue working on other tasks.

#### 📋 Steps

**Part A: Launch a Background Agent**

1. **Open Copilot Chat** and start a new agent conversation

2. **Give it a substantial task**:
   ```
   Refactor all error handling in the backend to use a consistent 
   AppError class. Create the class if it doesn't exist. Update all 
   routes to use it. Add proper error codes and messages.
   ```

3. **Click "Continue in Background"** (or use Command Palette: "Copilot: Continue in Background")

4. **Notice what happens**:
   - A new Git worktree is created for the agent
   - The agent continues working independently
   - You can close the chat and keep coding

**Part B: Launch Additional Background Agents**

5. **Open a new Copilot Chat** (Ctrl+Shift+I)

6. **Start another task**:
   ```
   Generate comprehensive test fixtures for all our database models.
   Include edge cases: empty values, maximum lengths, special characters,
   and invalid foreign key references.
   ```

7. **Send to background** again

8. **Start a third task** (or more if you want):
   ```
   Update all JSDoc comments in the backend routes to match our 
   API documentation standards. Include parameter types, return types,
   and example responses.
   ```

**Part C: Monitor with Agent HQ**

9. **Open Agent HQ**: Command Palette → "Copilot: Open Agent HQ"

10. **Observe the dashboard**:
    - See all running agents
    - View their current status and progress
    - Check which files they're modifying
    - See estimated completion

11. **Interact with agents**:
    - Click an agent to see its full conversation
    - Provide additional guidance if it's stuck
    - Cancel agents that went off track

**Part D: Review and Merge Results**

12. **When agents complete**, review their changes:
    - Each agent worked in its own worktree
    - Changes are isolated—no conflicts with your work
    - Review diffs before merging

13. **Archive completed sessions**:
    - Agent HQ keeps history of completed work
    - Reference past sessions for similar future tasks

#### ✅ Success Criteria

- [ ] Successfully launched at least 2 background agents
- [ ] Opened Agent HQ and viewed running agents
- [ ] Continued working on something else while agents ran
- [ ] Reviewed agent output after completion
- [ ] Understood the Git worktree isolation model

#### ✨ The "After" — Parallel Agent Work

```
Task A: Update API docs ──────────────────►
Task B: Test fixtures ────────────────────────►   } Parallel!
Task C: Error refactor ───────────────────►
                                              │
                                              ▼
                                    Total: ~20 minutes
                                    (slowest task + integration)
```

**Time saved**: 30 minutes (60% reduction)  
**Parallel capacity**: Limited only by your machine's resources  
**Context switching**: Zero—you kept coding while agents worked

#### 💭 Marcus's Realization

*"This is what I've been waiting for. I'm not babysitting agents anymore—I'm orchestrating them. Three tasks that would have taken an hour? Done in 20 minutes, and I got other work done while they ran. This is the DevOps mindset applied to AI."*

#### 🚀 Challenge Extension

**The "Continue In" Pattern**:
1. Start a complex task in local agent mode
2. Realize it's going to take a while
3. Use "Continue in Background" to free up your chat
4. Or use "Continue in Cloud" (Enterprise) to free up your laptop entirely
5. Check back via Agent HQ when convenient

**Session Management**:
- Archive important sessions for future reference
- Use archived sessions as templates for similar tasks
- Share session summaries with the team

#### 📚 Official Docs

- [VS Code Background Agents](https://code.visualstudio.com/docs/copilot/agents/background-agents)
- [Agent HQ Guide](https://code.visualstudio.com/docs/copilot/agents/agent-hq)
- [VS Code 1.107 Release Notes](https://code.visualstudio.com/updates/v1_107)
```

#### 4. Update Marcus's Persona File

Update `modules/07-custom-agents/personas/marcus.md` to reflect his expanded role with background agents:

Add to his transformation section:
```markdown
### 🚀 Your Highlight: Exercise 7.3 — Background Agents & Agent HQ

This is YOUR exercise. You've been the infrastructure person, the "run things in parallel" thinker. Now you get to apply that mindset to AI agents.

**What you'll master**:
- Launching multiple agents simultaneously
- Using Agent HQ as your orchestration dashboard
- The Git worktree isolation model (your DevOps brain will love this)
- The "Continue In" pattern for handing off work

**Your transformation moment**:
> *"I've spent years making build pipelines parallel. Now I'm making AI work parallel. Same mindset, completely new capability."*
```

**Estimated Time**: 2-3 hours

---

### Module 8: GitHub.com Copilot ⭐ MEDIUM UPDATE

**Files to Update**:
- `modules/08-copilot-web/README.md`
- `modules/08-copilot-web/EXERCISES.md`

**Changes**:

#### 1. Add Note About Auto-Assignment to Existing Exercises

In EXERCISES.md, add to Exercise 8.1 (Issue Refinement) after the steps:

```markdown
> 💡 **New Behavior**: When you assign an issue to Copilot, you're automatically added as an assignee too. This means `assignee:@me` filters will show all issues where you're involved with Copilot—making it easy to track AI-assisted work.
```

#### 2. Add New Exercise 8.7: Code Review for Organization Members

Add after Exercise 8.6 in EXERCISES.md:

```markdown
---

### Exercise 8.7: Code Review Without a License — "Scaling Quality Across the Org"

#### 📖 The Story

**Elena** has a problem. Her QA team includes three contractors who don't have Copilot licenses. They're excellent reviewers, but they can't use Copilot's code review features.

*"I've been asking for three more Copilot seats for months,"* Elena explains. *"Finance keeps pushing back—they don't want to add headcount costs."*

**Sarah** has been reading the December 2025 changelog: *"Wait—there's a new option. Organization members can use Copilot code review even without a license. The org pays via premium requests instead of per-seat licensing."*

*"Usage-based instead of seat-based?"* Elena's eyes light up. *"Finance loves usage-based. They can see exactly what we're paying for."*

#### ❌ The "Before" — License Bottleneck

| Person | Has License? | Can Use Code Review? |
|--------|-------------|---------------------|
| Elena | ✅ Yes | ✅ Yes |
| QA Contractor 1 | ❌ No | ❌ No |
| QA Contractor 2 | ❌ No | ❌ No |
| QA Contractor 3 | ❌ No | ❌ No |

**Result**: Only Elena could use AI-assisted code review. Bottleneck.

#### 🎯 Objective

Understand how unlicensed organization members can use Copilot code review, and when this approach makes sense vs. adding seats.

#### 📋 Steps

**Part A: Understanding the Model**

1. **Review the options**:

   | Approach | Cost Model | Best For |
   |----------|-----------|----------|
   | Seat License | Fixed $/month per user | Full-time heavy users |
   | Premium Requests | Pay per use | Occasional users, contractors |

2. **When unlicensed code review makes sense**:
   - Contractors who only review, don't write code
   - Part-time team members
   - Org members who only occasionally need AI assistance
   - Testing the value before committing to seats

3. **When seats make more sense**:
   - Daily users (developers, full-time QA)
   - Users who need all Copilot features (not just review)
   - High-volume users (premium requests would cost more than seat)

**Part B: How It Works**

4. **Requirements**:
   - Organization must have Copilot Business or Enterprise
   - Admin must enable "Premium request paid usage" in org settings
   - Admin must opt-in to allow unlicensed code review

5. **The user experience**:
   - Unlicensed org members see Copilot code review options in PRs
   - They can request AI review summaries and suggestions
   - Each review consumes premium requests from the org pool
   - No installation or license assignment needed

**Part C: Cost Analysis Exercise**

6. **Calculate the tradeoff** for your scenario:

   ```
   Copilot Business seat: ~$19/month = ~$228/year per user
   
   If a contractor does ~20 code reviews/month:
   - At ~2 premium requests per review = 40 requests/month
   - At current premium request pricing, compare costs
   
   Break-even: If usage-based costs exceed seat cost, get a license
   ```

7. **Discuss with your team**:
   - Who in your org would benefit from unlicensed access?
   - What's your expected usage pattern?
   - Does usage-based or seat-based make more sense?

#### ✅ Success Criteria

- [ ] Understand the two cost models (seat vs. premium request)
- [ ] Can identify which team members fit each model
- [ ] Know the admin requirements to enable unlicensed access
- [ ] Can calculate approximate cost tradeoffs

#### ✨ The "After" — Flexible Access

| Person | Has License? | Can Use Code Review? | Cost Model |
|--------|-------------|---------------------|------------|
| Elena | ✅ Yes | ✅ Yes | Seat |
| QA Contractor 1 | ❌ No | ✅ Yes | Premium requests |
| QA Contractor 2 | ❌ No | ✅ Yes | Premium requests |
| QA Contractor 3 | ❌ No | ✅ Yes | Premium requests |

**Result**: Everyone can use code review. Finance is happy with usage-based costs for contractors.

#### 💭 Elena's Realization

*"This is perfect for our contractors. They review maybe 15 PRs a week—nowhere near enough to justify a full seat. But now they get AI-assisted review, the org pays per use, and I'm not the bottleneck anymore. Quality scales without bureaucracy."*

#### 💭 Sarah's Validation

*"Finally, a licensing model that matches how people actually work. Our occasional users aren't subsidizing heavy users, and heavy users aren't paying premium-request rates. Everyone pays for what they use."*

#### 📚 Official Docs

- [Copilot Code Review for Unlicensed Members](https://docs.github.com/copilot/code-review)
- [GitHub Changelog: December 2025](https://github.blog/changelog/2025-12-17-copilot-code-review-now-available-for-organization-members-without-a-license/)
- [Managing Copilot in Your Organization](https://docs.github.com/en/copilot/managing-copilot/managing-github-copilot-in-your-organization)
```

#### 3. Update README.md Exercise Table

Add the new exercise to the table:

```markdown
| [8.7](EXERCISES.md#exercise-87-code-review-without-a-license--scaling-quality-across-the-org) | Unlicensed Code Review | 15 min | Enable code review for org members without seats |
```

**Estimated Time**: 1.5-2 hours

---

### Module 9: Copilot CLI

**Files to Update**:
- `modules/09-copilot-cli/README.md`

**Changes**:

#### 1. Add Agent Skills Note

Add to Key Concepts section:

```markdown
### CLI + Agent Skills

The Copilot CLI now supports Agent Skills. Skills you've defined in your project (`.github/skills/`) or personal directory (`~/.copilot/skills/`) are available in CLI conversations.

This means your domain-specific skills—like the TV show data validator—work in terminal workflows too:

```bash
gh copilot suggest "validate the character data I'm about to import"
# CLI loads tv-show-data-validator skill automatically
```

> 💡 **Marcus's Take**: *"Same skills, different interface. I defined our Docker debugging skill once in Module 5, and now it helps me in the terminal too. Zero extra setup."*
```

**Estimated Time**: 15 minutes

---

### Module 10: Agentic SDLC ⭐ MEDIUM UPDATE

**Files to Update**:
- `modules/10-agentic-sdlc/README.md`
- `modules/10-agentic-sdlc/EXERCISES.md`

**Changes**:

#### 1. Update Key Concepts with Agent HQ

Add to the "Key Concepts" section:

```markdown
### Agent HQ: The Orchestration Dashboard

With VS Code 1.107+, **Agent HQ** becomes your central command for parallel development:

| Capability | What It Does |
|------------|--------------|
| **Status Overview** | See all running agents at a glance |
| **Progress Tracking** | Monitor what each agent is working on |
| **Interaction** | Jump into any agent's conversation |
| **Session History** | Archive and reference past agent work |
| **Handoff Control** | Move tasks between local/background/cloud |

**Access**: Command Palette → "Copilot: Open Agent HQ"

This transforms the parallel workflow from "multiple terminal windows" to a true orchestration dashboard.
```

#### 2. Update The Parallel Workflow Diagram

Replace the existing diagram with:

```markdown
### The Parallel Workflow (with Agent HQ)

```
Sprint Start
    │
    ├─── VS Code Agent Mode ─────────── (Interactive, you + agent)
    │         │
    │         └──► "Continue in Background" ──► Background Agent
    │                                                  │
    │                                                  ▼
    ├─── GitHub Web Agent ──────────────────────► (Autonomous PR)
    │                                                  │
    └─── Copilot CLI ───────────────────────────► (Terminal work)
              │                                        │
              ▼                                        ▼
         ┌────────────────────────────────────────────────┐
         │              AGENT HQ DASHBOARD                 │
         │  ┌─────────┐ ┌─────────┐ ┌─────────┐          │
         │  │ Agent 1 │ │ Agent 2 │ │ Agent 3 │          │
         │  │ ████░░░ │ │ ██████░ │ │ ███████ │          │
         │  │ Running │ │ Running │ │ Complete│          │
         │  └─────────┘ └─────────┘ └─────────┘          │
         └────────────────────────────────────────────────┘
                              │
                              ▼
                     Sprint End ◄── All streams converge
```
```

#### 3. Enhance Exercise Content

In EXERCISES.md, add Agent HQ orchestration to the existing parallel workflow exercises. Update Exercise 10.4 (or add 10.5) with:

```markdown
### Exercise 10.5: Agent HQ Orchestration — "The Symphony Conductor"

#### 📖 The Story

**Rafael** is watching the sprint unfold. Marcus has three background agents running. David kicked off a GitHub web agent. Elena is using CLI for test generation.

*"I have no idea what's happening,"* Rafael admits. *"Are we on track? What's done? What's stuck?"*

**Marcus** opens Agent HQ: *"Here's your dashboard. Every agent, every status, one view."*

Rafael's project manager brain lights up: *"This is the sprint board for AI agents."*

#### 🎯 Objective

Use Agent HQ to orchestrate and monitor multiple parallel agent workflows, providing visibility into the sprint's AI-assisted work.

#### 📋 Steps

1. **Open Agent HQ**: Command Palette → "Copilot: Open Agent HQ"

2. **Review the dashboard**:
   - Identify which agents are running, completed, or stuck
   - Note estimated completion times
   - Check file modification lists

3. **Triage stuck agents**:
   - Click an agent that's taking too long
   - Review its conversation for blockers
   - Provide clarifying guidance or cancel if off-track

4. **Prioritize completions**:
   - Which agent's output is blocking others?
   - Can you merge completed work while others run?

5. **Document the session**:
   - Archive important sessions
   - Note learnings for future sprints

#### ✅ Success Criteria

- [ ] Opened Agent HQ and understood the dashboard
- [ ] Identified status of all running agents
- [ ] Interacted with at least one agent to provide guidance
- [ ] Archived a completed session

#### 💭 Rafael's Realization

*"This is sprint management for the AI age. I'm not asking 'when will you be done?'—I can see it. I'm not wondering 'what are you working on?'—it's right there. The transparency I've always wanted from developers, I now have from agents."*

#### 📚 Official Docs

- [Agent HQ Documentation](https://code.visualstudio.com/docs/copilot/agents/agent-hq)
- [Managing Agent Sessions](https://code.visualstudio.com/docs/copilot/agents/sessions)
```

**Estimated Time**: 1.5-2 hours

---

### Module 11: Enterprise Patterns ⭐ MAJOR UPDATE

**Files to Update**:
- `modules/11-enterprise-patterns/README.md`
- `modules/11-enterprise-patterns/EXERCISES.md`

**Changes**:

#### 1. Add New Sections to README.md Key Concepts

```markdown
### Organizational Skill Libraries (Enterprise)

**What**: Centrally managed Agent Skills that apply across all repositories.  
**Where**: Organization settings + shared skill repositories  
**Best for**: Domain knowledge, compliance rules, company-specific patterns  
**Available**: 💼 Business / 🏢 Enterprise

With Agent Skills now GA, enterprises can create skill libraries that:
- Encode domain expertise once, apply everywhere
- Version control organizational knowledge
- Update skills centrally, propagate automatically
- Reduce "how do we do X here?" questions

### Model Governance & Auto Selection

**What**: Policies controlling which AI models can be used and when.  
**Where**: Organization settings in GitHub  
**Best for**: Compliance, cost control, capability management  
**Available**: 💼 Business / 🏢 Enterprise

Auto model selection respects organizational policies:
- Restrict certain models for security/compliance
- Set cost controls on premium requests
- Route different task types to different models
- Audit model usage across the organization

### Flexible Licensing Strategies

**What**: Mix of seat-based and usage-based licensing for different user types.  
**Where**: Organization billing settings  
**Best for**: Organizations with mixed usage patterns  
**Available**: 💼 Business / 🏢 Enterprise

New options include:
- Full seats for heavy users (developers)
- Premium-request access for occasional users (contractors, reviewers)
- Code review access for unlicensed org members
```

#### 2. Add New Exercises to EXERCISES.md

```markdown
---

### Exercise 11.6: Organizational Skill Libraries — "Domain Knowledge at Scale"

#### 📖 The Story

The FanHub team created powerful Agent Skills in Module 5—TV show data validation, feature requirements, effort estimation. But they're just one team in an organization with eight teams.

**David** sees the opportunity: *"Our TV show validation skill has patterns that apply to any media data. Our feature requirements skill is basically our product framework. These shouldn't live in one repo."*

**Sarah** agrees: *"We documented our expertise once. Now we need to make it organizational standard—without becoming the support team for every other team."*

The goal: Create an organizational skill library that other teams can use without FanHub becoming a bottleneck.

#### 🎯 Objective

Design an organizational skill library strategy that scales domain expertise across teams while maintaining quality and reducing support burden.

#### 📋 Steps

**Part A: Skill Audit**

1. **Review your project skills** (`.github/skills/`):
   - Which are project-specific vs. generalizable?
   - Which encode domain knowledge vs. team preferences?
   - Which have the highest reuse potential?

2. **Categorize skills**:

   | Skill | Scope | Reuse Potential |
   |-------|-------|-----------------|
   | tv-show-data-validator | Project-specific | Low (FanHub only) |
   | feature-requirements | Generalizable | High (all product teams) |
   | effort-estimator | Generalizable | High (all planning) |
   | api-endpoint-design | Generalizable | High (all API teams) |

**Part B: Organizational Skill Repository**

3. **Design the skill library structure**:

   ```
   org-copilot-skills/
   ├── README.md              # How to use org skills
   ├── CONTRIBUTING.md        # How to add new skills
   ├── domains/
   │   ├── product/
   │   │   ├── feature-requirements/
   │   │   └── effort-estimator/
   │   ├── engineering/
   │   │   ├── api-endpoint-design/
   │   │   └── code-review-checklist/
   │   └── devops/
   │       ├── docker-debugging/
   │       └── build-pipeline-analyzer/
   └── templates/
       └── skill-template/
           └── SKILL.md
   ```

4. **Create governance model**:
   - Who can add skills? (PR approval process)
   - Who maintains skills? (Domain owners)
   - How are skills versioned? (Semantic versioning)
   - How do teams discover skills? (Catalog/search)

**Part C: Distribution Strategy**

5. **Choose distribution approach**:

   | Approach | Pros | Cons |
   |----------|------|------|
   | **Git submodule** | Version controlled | Complex setup |
   | **Copy to repos** | Simple | Sync issues |
   | **Org settings** (Enterprise) | Automatic | Less visibility |
   | **Package registry** | Professional | Infrastructure needed |

6. **Document adoption path**:
   - How do teams enable org skills?
   - How do they override with project-specific skills?
   - How do they request new skills?

#### ✅ Success Criteria

- [ ] Categorized skills by reuse potential
- [ ] Designed organizational skill library structure
- [ ] Defined governance model (who adds, who maintains)
- [ ] Chose distribution strategy
- [ ] Documented adoption path for other teams

#### 💭 David's Realization

*"Yesterday I worried my expertise was becoming obsolete. Today I'm packaging that expertise for 50 developers I'll never meet. They get my 20 years of API design knowledge automatically loaded when they work on endpoints. That's not replacement—that's legacy."*

#### 💭 Sarah's Validation (ROI Metrics)

*"We spent 4 hours creating these skills in Module 5. If each skill saves 15 minutes per developer per week, and we have 50 developers:*

- *Weekly savings: 50 developers × 15 min × 4 skills = 50 hours*
- *Monthly savings: 200 hours*
- *Annual savings: 2,400 hours*
- *ROI: 4 hours invested → 2,400 hours saved = 600x return*

*That's not hype. That's math."*

#### 📚 Official Docs

- [Agent Skills Documentation](https://docs.github.com/en/copilot/concepts/agents/about-agent-skills)
- [Managing Copilot Policies](https://docs.github.com/en/copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-copilot-policies)

---

### Exercise 11.7: Model Governance & Cost Management — "Scaling Responsibly"

#### 📖 The Story

**Marcus** pulls up the Copilot usage dashboard. *"We're burning through premium requests faster than expected. Some teams are using GPT-5-max for everything, including simple autocomplete."*

**Sarah** sees the pattern: *"We need governance. Not to restrict—to optimize. The right model for the right task."*

**Rafael** adds the business perspective: *"Finance is asking why our AI costs tripled last quarter. I need to explain this isn't waste—but I also need to show we're being smart about it."*

#### 🎯 Objective

Design a model governance strategy that optimizes costs while maintaining productivity, with clear policies and reporting.

#### 📋 Steps

**Part A: Understand Auto Model Selection**

1. **How it works**:
   - Copilot automatically routes requests to available models
   - Considers: subscription tier, org policies, model availability
   - Pro+ users get 10% discount on premium requests with Auto
   - Enterprise can restrict which models are available

2. **Model tier understanding**:

   | Model Tier | Use Case | Cost |
   |------------|----------|------|
   | Standard | Autocomplete, simple suggestions | Included |
   | Premium | Complex generation, agents, chat | Premium requests |
   | Max | Cutting-edge capabilities | Higher premium cost |

**Part B: Design Governance Policies**

3. **Create model policies by task type**:

   ```markdown
   ## Model Selection Policy
   
   | Task Type | Recommended Model | Rationale |
   |-----------|------------------|-----------|
   | Autocomplete | Auto (standard) | High volume, low complexity |
   | Code review | Auto (premium) | Needs deep understanding |
   | Agent tasks | Auto (premium) | Autonomous work |
   | Architecture analysis | Premium/Max | High-stakes decisions |
   
   ## Restrictions
   - Max models require manager approval for sustained use
   - Standard models preferred for high-frequency, low-complexity tasks
   - Premium requests tracked by team for budget allocation
   ```

4. **Set up cost controls**:
   - Premium request budgets by team
   - Alerts at 80% budget consumption
   - Weekly usage reports to team leads
   - Monthly executive summary

**Part C: Build Reporting Dashboard**

5. **Key metrics to track**:

   | Metric | Why It Matters |
   |--------|---------------|
   | Premium requests/developer | Usage patterns |
   | Requests by model | Cost optimization opportunities |
   | Requests by task type | ROI by use case |
   | Trend over time | Growth/optimization trajectory |

6. **Create reporting cadence**:
   - Weekly: Team usage summaries
   - Monthly: Cost analysis + recommendations
   - Quarterly: ROI review + policy adjustments

#### ✅ Success Criteria

- [ ] Understand auto model selection behavior
- [ ] Created model selection policy by task type
- [ ] Defined cost control mechanisms
- [ ] Designed reporting dashboard metrics
- [ ] Established reporting cadence

#### 💭 Marcus's Realization

*"This is capacity planning for AI. Same skills I use for infrastructure—monitor, optimize, govern. The difference is I'm managing tokens, not containers."*

#### 💭 Sarah's Validation

*"The 10% Auto discount alone saves us $500/month across 50 developers. Add governance that prevents Max model waste? We're looking at 30% cost reduction with zero productivity loss. That's the story Finance wants to hear."*

#### 📚 Official Docs

- [Auto Model Selection](https://docs.github.com/en/copilot/concepts/auto-model-selection)
- [Copilot Usage Metrics](https://docs.github.com/en/copilot/managing-copilot/managing-github-copilot-in-your-organization/reviewing-usage-data)
- [Managing Premium Requests](https://docs.github.com/en/billing/managing-billing-for-your-products/managing-billing-for-github-copilot-in-your-organization)

---

### Exercise 11.8: Licensing Strategies — "Right-Sizing Your Investment"

#### 📖 The Story

**Rafael** is preparing the annual Copilot budget proposal. The challenge: different people need different levels of access.

*"Our 30 developers need full seats—they use Copilot all day. But our 15 contractors only review code. Our 10 product managers just refine issues occasionally. Do they all need the same license?"*

**Sarah** has been studying the new licensing options: *"No. We can mix seat-based and usage-based access. Full-time developers get seats. Occasional users pay per use. Everyone gets access, costs match usage."*

#### 🎯 Objective

Design a licensing strategy that provides appropriate access while optimizing costs across different user types.

#### 📋 Steps

**Part A: User Segmentation**

1. **Categorize users by usage pattern**:

   | User Type | Count | Usage Pattern | Current License |
   |-----------|-------|---------------|-----------------|
   | Developers | 30 | Daily, heavy | Seat |
   | Contractors | 15 | Weekly, moderate | Seat |
   | Product Managers | 10 | Occasional | None |
   | QA Reviewers | 5 | Code review only | None |

2. **Identify optimization opportunities**:
   - Contractors: Seat or usage-based?
   - Product Managers: Need seats or just occasional access?
   - QA Reviewers: Code review only → unlicensed access?

**Part B: Cost Modeling**

3. **Calculate current costs**:
   ```
   45 Copilot Business seats × $19/month = $855/month
   Annual: $10,260
   ```

4. **Model optimized scenario**:
   ```
   30 Developer seats × $19/month = $570/month
   15 Contractors → Premium requests (~$5/contractor/month avg) = $75/month
   10 Product Managers → Premium requests (~$3/PM/month avg) = $30/month
   5 QA Reviewers → Unlicensed code review (~$2/reviewer/month avg) = $10/month
   
   Optimized monthly: $685/month
   Annual: $8,220
   
   Savings: $2,040/year (20% reduction)
   ```

5. **Validate assumptions**:
   - Track actual usage for 1-2 months
   - Adjust model based on real data
   - Set thresholds for seat upgrades

**Part C: Implementation Plan**

6. **Rollout strategy**:
   - Phase 1: Enable unlicensed code review for QA
   - Phase 2: Convert light-use contractors to premium requests
   - Phase 3: Offer premium-request access to Product Managers
   - Phase 4: Monitor and optimize

7. **Communication plan**:
   - Explain changes to affected users
   - Provide usage guidelines
   - Set up feedback channel

#### ✅ Success Criteria

- [ ] Segmented users by usage pattern
- [ ] Calculated current vs. optimized costs
- [ ] Created implementation rollout plan
- [ ] Designed communication strategy

#### 💭 Rafael's Realization

*"I've been fighting for budget as if everyone needed the same thing. But they don't. Developers need seats. Contractors need access. Product managers need occasional help. Matching the license to the need isn't cost-cutting—it's right-sizing."*

#### 📚 Official Docs

- [Copilot Billing](https://docs.github.com/en/billing/managing-billing-for-your-products/managing-billing-for-github-copilot-in-your-organization)
- [Copilot Code Review for Unlicensed Members](https://github.blog/changelog/2025-12-17-copilot-code-review-now-available-for-organization-members-without-a-license/)
```

#### 3. Update README.md Exercise Navigation

Add the new exercises to the "Choose Your Path" section:

```markdown
### For Platform Teams & Cost Managers

**[Exercise 11.6: Organizational Skill Libraries](EXERCISES.md#exercise-116-organizational-skill-libraries--domain-knowledge-at-scale)**  
📊 **Who**: Platform teams, domain experts  
⏱️ **Time**: 45-60 min  
🎯 **Goal**: Scale domain expertise across all teams via skill libraries  
💼 **Tier**: Business/Enterprise  
🌟 **Value**: 600x ROI on skill creation (4 hours → 2,400 hours saved/year)

**[Exercise 11.7: Model Governance & Cost Management](EXERCISES.md#exercise-117-model-governance--cost-management--scaling-responsibly)**  
📊 **Who**: Platform teams, engineering leadership  
⏱️ **Time**: 30-45 min  
🎯 **Goal**: Optimize model usage and control costs  
💼 **Tier**: Business/Enterprise  
🌟 **Value**: 30% cost reduction through governance + Auto discount

**[Exercise 11.8: Licensing Strategies](EXERCISES.md#exercise-118-licensing-strategies--right-sizing-your-investment)**  
📊 **Who**: Engineering managers, finance partners  
⏱️ **Time**: 30-45 min  
🎯 **Goal**: Right-size licensing across different user types  
💼 **Tier**: Business/Enterprise  
🌟 **Value**: 20% cost reduction through mixed licensing
```

**Estimated Time**: 3-4 hours

---

## 📄 New Documentation Files

Create these supporting documents:

### docs/BACKGROUND-AGENTS-GUIDE.md

```markdown
# Background Agents & Agent HQ Guide

## Overview

Background agents let you run Copilot agent tasks without blocking your current work. Agent HQ provides a central dashboard for managing multiple agents.

## When to Use Background Agents

| Scenario | Use Background Agent? |
|----------|----------------------|
| Quick question or explanation | ❌ No — use regular chat |
| Small code change | ❌ No — use Edit mode |
| Multi-file refactoring | ✅ Yes |
| Documentation generation | ✅ Yes |
| Test suite generation | ✅ Yes |
| Long-running analysis | ✅ Yes |

## How Background Agents Work

1. **Git Worktree Isolation**: Each background agent runs in its own Git worktree, completely isolated from your working directory. No conflicts with your current work.

2. **Session Persistence**: Agents continue running even if you close the chat window. Check back via Agent HQ.

3. **Resource Management**: Background agents use your local machine's resources. Running many simultaneously may slow your system.

## The "Continue In" Pattern

Start a task locally, then hand it off:

1. Begin complex task in regular Agent mode
2. Realize it will take a while
3. Click "Continue in Background" to free your chat
4. Or "Continue in Cloud" (Enterprise) to free your laptop

## Agent HQ

Access: Command Palette → "Copilot: Open Agent HQ"

Features:
- See all running, completed, and archived agents
- Monitor progress and current file being modified
- Jump into any agent's conversation
- Cancel runaway agents
- Archive important sessions for reference

## Best Practices

1. **Clear task descriptions**: Background agents can't ask clarifying questions, so be specific upfront
2. **Check Agent HQ regularly**: Monitor progress, catch issues early
3. **Archive valuable sessions**: Reference patterns for future tasks
4. **Set expectations**: Background agents are thorough but slower than interactive
5. **Review before merging**: Always review agent output—automation doesn't mean blind trust

## Official Documentation

- [VS Code Background Agents](https://code.visualstudio.com/docs/copilot/agents/background-agents)
- [Agent HQ Guide](https://code.visualstudio.com/docs/copilot/agents/agent-hq)
```

### docs/MODEL-SELECTION-GUIDE.md

```markdown
# Auto Model Selection Guide

## Overview

GitHub Copilot automatically selects the best available model based on your subscription, organizational policies, and model availability. This is the default and recommended setting.

## How Auto Selection Works

1. Copilot evaluates your request
2. Considers: task complexity, available models, org policies, subscription tier
3. Routes to optimal model
4. You see which model was used (hover over response)

## Benefits of Auto

- **Optimization**: Best model for each task type
- **Cost efficiency**: 10% discount on premium requests (Pro+ subscribers)
- **Reliability**: Falls back to available models if preferred is busy
- **Policy compliance**: Automatically respects organizational restrictions

## When to Override Auto

| Scenario | Consider... |
|----------|-------------|
| Need specific capabilities | Manually select model with that capability |
| Testing model differences | Select specific models to compare |
| Cost control | Select standard model for simple tasks |
| Compliance requirements | Select approved models only |

## For Enterprise Administrators

### Model Policies

You can restrict which models are available in your organization:
- Compliance: Limit to models that meet data residency requirements
- Cost: Restrict expensive models to specific teams
- Capability: Enable new models for early adopters only

### Premium Request Management

Track and budget premium requests:
- Set team-level budgets
- Alert at consumption thresholds
- Review usage patterns monthly
- Optimize based on task-to-model mapping

## Official Documentation

- [Auto Model Selection](https://docs.github.com/en/copilot/concepts/auto-model-selection)
- [Managing Copilot Policies](https://docs.github.com/en/copilot/managing-copilot/managing-github-copilot-in-your-organization)
```

**Estimated Time for docs**: 1-1.5 hours

---

## 📊 Summary

| Module | Changes | Time Estimate |
|--------|---------|---------------|
| Module 0 | Prerequisites + Auto model selection | 15 min |
| Module 1-4 | None required | 0 min |
| Module 5 | Skill scoping expansion | 20 min |
| Module 6 | None required | 0 min |
| Module 7 | **Major**: Background agents + Agent HQ | 2-3 hours |
| Module 8 | Auto-assignee note + Exercise 8.7 | 1.5-2 hours |
| Module 9 | CLI + Skills note | 15 min |
| Module 10 | Agent HQ orchestration | 1.5-2 hours |
| Module 11 | **Major**: 3 new exercises | 3-4 hours |
| New docs | 2 guide files | 1-1.5 hours |
| **Total** | | **10-14 hours** |

---

## ✅ Validation Checklist

After implementation, verify:

- [ ] Module 0 mentions VS Code 1.107+ and auto model selection
- [ ] Module 5 explains skill scoping (project/user/org)
- [ ] Module 7 Exercise 7.3 covers background agents and Agent HQ (25+ min)
- [ ] Module 8 has auto-assignee note and Exercise 8.7 (unlicensed review)
- [ ] Module 9 mentions CLI + Agent Skills integration
- [ ] Module 10 includes Agent HQ orchestration content
- [ ] Module 11 has Exercises 11.6, 11.7, 11.8
- [ ] docs/BACKGROUND-AGENTS-GUIDE.md exists
- [ ] docs/MODEL-SELECTION-GUIDE.md exists
- [ ] All persona voices are consistent (especially Sarah's ROI focus)
- [ ] All exercises have Official Docs sections with valid links
- [ ] All Before/After sections have concrete metrics

---

## 🔗 Reference Links

### Official Documentation (December 2025)
- [Agent Skills](https://docs.github.com/en/copilot/concepts/agents/about-agent-skills)
- [VS Code 1.107 Release Notes](https://code.visualstudio.com/updates/v1_107)
- [Background Agents](https://code.visualstudio.com/docs/copilot/agents/background-agents)
- [Auto Model Selection](https://docs.github.com/en/copilot/concepts/auto-model-selection)
- [Copilot Code Review](https://docs.github.com/copilot/code-review)

### Changelog Entries
- [Agent Skills GA](https://github.blog/changelog/2025-12-18-github-copilot-now-supports-agent-skills/)
- [Auto Model Selection GA](https://github.blog/changelog/2025-12-10-auto-model-selection-is-generally-available-in-github-copilot-in-visual-studio-code/)
- [Unlicensed Code Review](https://github.blog/changelog/2025-12-17-copilot-code-review-now-available-for-organization-members-without-a-license/)
- [Issue Auto-Assignee](https://github.blog/changelog/2025-12-18-assigning-github-copilot-to-an-issue-now-adds-you-as-an-assignee/)
