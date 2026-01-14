# Module 10: Agentic SDLC + Ship

## ⏰ Monday 7:00 PM — Parallel Development Power

> *"We've learned to use agents one at a time. Now let's see what happens when we run them everywhere at once."*  
> — Marcus, ready to unleash the full potential of multi-interface agents

---

## 📖 The Story So Far

The FanHub team has accomplished a lot in one day:
- **Module 1**: Repository-wide instructions in `copilot-instructions.md`
- **Module 2**: Agent plan mode for structured thinking
- **Module 3**: Reusable prompts for common workflows
- **Module 4**: Custom agents for autonomous tasks
- **Module 5**: Custom instructions that activate based on file patterns
- **Module 6**: Agent Skills for domain expertise
- **Module 7**: MCP servers for database and GitHub integration
- **Module 8**: Web workflows for PR and issue automation
- **Module 9**: CLI automation for terminal workflows

But so far, they've been working sequentially—one task at a time, one interface at a time. That's about to change.

**David** looks at the sprint backlog and does the math: *"We have 90 minutes. We have three major features to build. One person, one task at a time... we won't make it."*

**Marcus** grins: *"Who said anything about one at a time? We have agents in VS Code, agents on the web, and agents in the CLI. Let's run them in parallel."*

---

## 🎯 Learning Objectives

By the end of this module, you will:

- Run multiple agents simultaneously across different interfaces
- Use VS Code Agent Mode for complex, interactive development
- Use GitHub Copilot Web (Coding Agent) for background PR workflows
- Use `copilot` CLI for terminal-based automation
- Orchestrate parallel development workflows
- Understand which interface to use for which task type

**Time**: ~90-120 minutes  
**Personas**: Marcus (DevOps), David (Architect), Marcus (Developer), Elena (QA)

---

## 🧠 Mindful Moment: The Agentic SDLC

Traditional development is sequential: code → test → review → deploy. One step at a time.

**Agentic SDLC** changes this. With agents running across multiple interfaces, you can:

| Activity | Interface | Runs In |
|----------|-----------|---------|
| Feature development | VS Code Agent Mode | Foreground (interactive) |
| PR creation & iteration | GitHub Web (Coding Agent) | Background (autonomous) |
| Infrastructure tasks | GitHub Copilot CLI (`copilot`) | Terminal (scripted) |
| Code review automation | Custom Agents | Background (triggered) |

**The key insight**: While you're interacting with one agent, others can be working autonomously.

---

## 📚 Key Concepts

### The Three Agent Interfaces

#### 1. VS Code Agent Mode 🖥️
**Best for**: Interactive, complex development requiring human judgment at each step.

```
Features:
- Multi-file edits with preview
- Tool calling (terminal, file operations)
- Real-time collaboration with human
- Immediate feedback loop
```

**Use when**: Building new features, refactoring, debugging, exploratory work.

#### 2. GitHub Copilot Web (Coding Agent) 🌐
**Best for**: Background work on well-defined tasks that run autonomously.

```
Features:
- Creates branches automatically
- Opens PRs with changes
- Runs in GitHub's environment
- Continues while you work elsewhere
```

**Use when**: Documentation tasks, test generation, dependency updates, boilerplate creation.

#### 3. GitHub Copilot CLI ⌨️
**Best for**: Agentic terminal work, infrastructure tasks, autonomous file modifications.

```
Access via: copilot

Features:
- Full agentic capabilities (read/write files, run commands)
- Interactive conversations in terminal
- Can create PRs, manage issues, run shell commands
- MCP server and custom agent support
```

**Use when**: DevOps tasks, batch operations, autonomous terminal work, scripted automation.

### Parallel Development Strategy

```
┌─────────────────────────────────────────────────────────────┐
│                    YOUR 90-MINUTE SPRINT                     │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  VS Code (You + Agent)                                       │
│  ├── 4:00 PM: Start search feature (interactive)            │
│  └── ...continuous development...                            │
│                                                              │
│  GitHub Web (Background Agent)                               │
│  ├── 4:05 PM: Kick off "Add analytics endpoints" →          │
│  │            Agent works autonomously                       │
│  └── 4:45 PM: PR ready for review                           │
│                                                              │
│  CLI (Scripted Tasks)                                        │
│  ├── 4:10 PM: Generate test fixtures                         │
│  ├── 4:25 PM: Set up monitoring                              │
│  └── 4:40 PM: Database migrations                            │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## 🔨 Exercises

### Exercise 5.1: VS Code Agent Mode — "The Feature Build"

#### 📖 The Story

**Marcus** is on search feature duty. This is complex, interactive work—exactly what VS Code Agent Mode is designed for.

*"Search needs debouncing, autocomplete, ranking... I need to see what the agent generates and make adjustments in real-time. This is a VS Code job."*

#### ❌ The "Before" — What Frustration Looks Like

Running one agent at a time:
- Start the search feature... wait for completion
- Then start analytics... wait for completion
- Then start infrastructure... wait for completion
- Total time: Sum of all tasks (sequential)

#### 🎯 Objective

Build a full-stack search feature using VS Code Agent Mode while understanding why this interface is the right choice.

#### 📋 Steps

1. **Activate Agent Mode in VS Code**
   
   Open Copilot Chat and switch to Agent Mode:
   - Click the model dropdown in Chat
   - Select "Agent" or use `@workspace` with complex requests
   
   > 💡 **Why VS Code for this task?**  
   > Search requires multi-file edits (API + frontend + tests), immediate testing, and human judgment on ranking logic. You need the interactive feedback loop.

2. **Design the search architecture**
   
   In Agent Mode, describe the full feature:
   ```
   Build a search feature for FanHub with:
   
   Backend:
   - GET /api/search endpoint
   - Search across characters, episodes, and quotes
   - Relevance ranking (title matches > description matches)
   - Support ?autocomplete=true for suggestions
   
   Frontend:
   - SearchBar component with debounced input (300ms)
   - Autocomplete dropdown
   - SearchResults page with grouped results
   
   Follow our ARCHITECTURE.md patterns. Create all necessary files.
   ```
   
   **Agent Mode will**:
   - Read your architecture docs
   - Create multiple files
   - Ask for confirmation before major changes
   - Let you review and adjust

3. **Iterate with immediate feedback**
   
   As files are created:
   - Test the endpoint: `curl localhost:3000/api/search?q=walter`
   - Review the frontend component
   - Provide refinements: "Make the debounce 400ms" or "Add keyboard navigation"
   
   > 💡 **This is why VS Code**: The agent proposes, you immediately test, you refine. Real-time collaboration.

4. **Handle edge cases interactively**
   
   ```
   Add edge case handling:
   - Empty query shows recent searches
   - Query under 2 chars shows hint
   - No results shows suggestions
   - Special characters are escaped
   ```
   
   Review each change as it's made.

#### ✅ Success Criteria

- [ ] Search endpoint created and working
- [ ] Frontend components rendering
- [ ] Debouncing functioning correctly
- [ ] Autocomplete showing suggestions
- [ ] Edge cases handled
- [ ] Used VS Code Agent Mode's interactive features

#### ✨ The "After" — The Improved Experience

With VS Code Agent Mode:
- Multi-file edits happen together, not sequentially
- You see changes before they're applied
- Refinements are immediate—no context switching
- The agent learns from your feedback in the conversation

#### 🚀 Running in Parallel

**While VS Code Agent works on search, you can simultaneously:**
- Start a GitHub Web Coding Agent task (Exercise 5.2)
- Queue CLI commands for later execution

#### 📚 Official Docs

- [VS Code: Copilot Agent Mode](https://code.visualstudio.com/docs/copilot/chat/chat-agent-mode)
- [VS Code: Multi-file Edits](https://code.visualstudio.com/docs/copilot/copilot-edits)

#### 💭 Marcus's Realization

*"The key is knowing when to use which interface. Search needed me in the loop—watching, testing, adjusting. Agent Mode is perfect for that. But the analytics endpoints? Those are well-defined. I can fire that off in the browser and keep coding here."*

---

### Exercise 5.2: GitHub Copilot Web — "The Background Build"

#### 📖 The Story

**David** has a well-defined task: add analytics endpoints. The requirements are clear, no ambiguity:

*"I know exactly what endpoints we need. I don't need to sit here watching an agent write them. Let me kick this off on GitHub and get back to architecture review while it runs."*

This is the perfect **GitHub Copilot Coding Agent** task.

#### ❌ The "Before" — What Frustration Looks Like

Without parallel agents:
- Write analytics endpoints manually while search waits
- Or wait for search to finish before starting analytics
- Either way: bottleneck

#### 🎯 Objective

Use GitHub's Coding Agent to create analytics endpoints in the background while you work on other tasks.

#### 📋 Steps

1. **Navigate to GitHub Copilot (Web)**
   
   Go to github.com → Open Copilot Chat or:
   - Create a new Issue describing the task
   - Assign Copilot to work on it
   
   > 💡 **Why Web Coding Agent for this task?**  
   > Analytics endpoints are well-specified, don't require interactive judgment, and can run autonomously. The agent will create a PR when done.

2. **Define the task clearly**
   
   In GitHub Copilot Chat (or as an Issue):
   ```
   Create analytics endpoints for FanHub:
   
   GET /api/analytics/overview
   - Return: { totalCharacters, totalEpisodes, totalQuotes }
   
   GET /api/analytics/character-popularity  
   - Return: Array of characters sorted by view count
   
   GET /api/analytics/quote-shares?days=30
   - Return: Daily share counts for last N days
   
   GET /api/analytics/content-by-season
   - Return: Content counts grouped by season
   
   Follow the patterns in src/routes/ for error handling.
   Add tests following our testing.instructions.md patterns.
   ```

3. **Assign to Copilot Coding Agent**
   
   - Click "Assign to Copilot" (if using Issues)
   - Or in Chat: "Create a PR for this"
   
   **The agent will**:
   - Create a new branch
   - Implement the endpoints
   - Add tests
   - Open a PR
   - **All while you work elsewhere**

4. **Continue working in VS Code**
   
   Return to VS Code and continue search development. You now have:
   - **VS Code**: Interactive search feature (you + agent)
   - **GitHub Web**: Analytics endpoints (autonomous)

5. **Check back on the PR**
   
   After 10-20 minutes:
   - Review the PR on GitHub
   - Request changes if needed ("Add caching to the overview endpoint")
   - Merge when ready
   
   > 💡 **The multiplier**: While you built search, analytics was created in parallel. Two features for the time of one.

#### ✅ Success Criteria

- [ ] Task defined and assigned to Copilot Coding Agent
- [ ] Agent created branch and started work
- [ ] Continued VS Code work while agent runs
- [ ] PR received and reviewed
- [ ] Understood when to use Web vs VS Code agents

#### ✨ The "After" — The Improved Experience

With GitHub Copilot Web (Coding Agent):
- Tasks run in the background—no waiting
- PRs arrive ready for review
- You can iterate via PR comments
- Perfect for well-defined, autonomous work

#### 🔄 Parallel Status Check

By now you should have running:
- ✅ VS Code Agent: Search feature (foreground)
- ✅ GitHub Web Agent: Analytics endpoints (background)
- ⏳ Next: CLI tasks

#### 📚 Official Docs

- [GitHub Copilot Coding Agent](https://docs.github.com/en/copilot/using-github-copilot/using-copilot-coding-agent)
- [Assigning Copilot to Issues](https://docs.github.com/en/copilot/using-github-copilot/using-copilot-coding-agent#assigning-copilot-to-an-issue)

#### 💭 David's Architecture Insight

*"The Coding Agent is like a junior developer who's really good at following instructions but can't make judgment calls. Give it clear specs, let it run, review the output. Perfect for well-defined tasks. But search ranking? That needs human judgment in the loop—VS Code Agent Mode."*

---

### Exercise 5.3: GitHub Copilot CLI — "The Infrastructure Sprint"

#### 📖 The Story

**Marcus** (DevOps) has been watching Marcus and David work. Now it's infrastructure time.

*"While you two handle features, I need to set up test fixtures, run migrations, generate monitoring configs, and prepare the deployment. These are all terminal tasks. Perfect for the CLI agent."*

#### ❌ The "Before" — What Frustration Looks Like

Without CLI agent:
- Research each command syntax
- Trial and error in terminal
- Context-switching between docs and terminal
- Each task serial and slow

#### 🎯 Objective

Use GitHub Copilot CLI to rapidly execute infrastructure tasks while VS Code and Web agents handle features.

#### 📋 Steps

1. **Verify GitHub Copilot CLI is installed**
   
   ```bash
   copilot --version
   ```
   
   If not installed, see [Module 9: GitHub Copilot CLI](../09-copilot-cli/README.md) for setup.
   
   > 💡 **Why Copilot CLI for these tasks?**  
   > The CLI is a full agentic interface—it can read files, write files, run shell commands, and interact with GitHub.com. Perfect for infrastructure and automation tasks.

2. **Generate test fixtures (Interactive Mode)**
   
   Start an interactive session:
   ```bash
   copilot
   ```
   
   Then prompt:
   ```
   Generate JSON test fixtures for 10 characters, 5 episodes, and 20 quotes 
   for a TV show fan site. Save them to test/fixtures/
   ```
   
   The CLI will:
   - Understand the context
   - Create the files directly
   - Ask for approval before writing
   
   Review and approve the changes.

3. **Set up database migrations**
   
   In the same session:
   ```
   Create a database migration to add view_count to characters table 
   and share_count to quotes table using knex
   ```
   
   Review the generated migration file and approve.

4. **Generate monitoring setup**
   
   In interactive mode, ask for an explanation first:
   ```
   Explain how to add Prometheus metrics to a Node.js Express application
   ```
   
   Then have Copilot implement it:
   ```
   Add basic Prometheus metrics middleware to the Express app, 
   counting requests by route and status code
   ```

5. **Prepare deployment scripts**
   
   ```
   Create a shell script called deploy.sh that builds the docker image, 
   runs tests, and pushes to registry if tests pass
   ```
   
   Approve the file creation when prompted.

6. **Run multiple tasks in sequence**
   
   Continue in the same session:
   ```
   Lint and fix all JavaScript files in src/
   ```
   
   Then:
   ```
   Find all TODO comments in the codebase and create a summary
   ```
   
   And:
   ```
   Generate a dependency security audit report
   ```
   
   > 💡 **One session, multiple tasks**: The CLI maintains context across your conversation.

#### ✅ Success Criteria

- [ ] Test fixtures generated via CLI agent
- [ ] Database migration created
- [ ] At least one DevOps task completed via CLI
- [ ] Understood CLI agent's strengths (command generation, explanation)
- [ ] Used CLI while VS Code and Web agents ran in parallel

#### ✨ The "After" — The Improved Experience

With GitHub Copilot CLI:
- Full agentic capabilities in your terminal
- Interactive conversations that maintain context
- Can read/write files and run commands directly
- Approval prompts keep you in control

#### 🔄 All Three Running

Your parallel agent status:
- ✅ VS Code Agent: Search feature (interactive)
- ✅ GitHub Web Agent: Analytics PR (autonomous)
- ✅ GitHub Copilot CLI: Infrastructure tasks (agentic terminal)

**This is Agentic SDLC**: Multiple agents, multiple interfaces, parallel progress.

#### 📚 Official Docs

- [About GitHub Copilot CLI](https://docs.github.com/en/copilot/concepts/agents/about-copilot-cli)
- [Installing GitHub Copilot CLI](https://docs.github.com/en/copilot/how-tos/set-up/install-copilot-cli)
- [Using GitHub Copilot CLI](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/use-copilot-cli)

#### 💭 Marcus's DevOps Perspective

*"The Copilot CLI is like having a junior DevOps engineer in my terminal. I can ask it to create files, run commands, even open PRs—all without leaving the command line. And the conversation keeps context, so I can iterate quickly."*

---

### Exercise 5.4: The Convergence — "Bringing It All Together"

#### 📖 The Story

It's 5:15 PM. **Sarah** calls for a status check.

*"Show me what we've got. How did the parallel approach work?"*

The team has been running three agent interfaces simultaneously. Now it's time to merge the work.

#### 🎯 Objective

Merge and integrate the parallel work streams, demonstrating the compounding value of multi-agent development.

#### 📋 Steps

1. **Status check: VS Code work**
   
   In VS Code, verify:
   - Search feature is complete and working
   - All files committed to your branch
   - Tests passing locally

2. **Status check: GitHub Web PR**
   
   On GitHub:
   - Review the Copilot-created analytics PR
   - Check test coverage
   - Request any refinements
   - Approve and merge

3. **Status check: CLI outputs**
   
   In terminal:
   - Verify fixtures were created
   - Confirm migrations ran
   - Check any generated scripts

4. **Integration test**
   
   Pull the merged analytics code:
   ```bash
   git pull origin main
   ```
   
   Test the integration:
   ```bash
   # Test search
   curl localhost:3000/api/search?q=walter
   
   # Test analytics (from the background PR)
   curl localhost:3000/api/analytics/overview
   
   # Run test suite
   npm test
   ```

5. **Retrospective: Interface selection**
   
   Discuss with your team (or document):
   
   | Task | Interface Used | Why This Interface? |
   |------|----------------|-------------------|
   | Search feature | VS Code Agent | Complex, needed iteration |
   | Analytics endpoints | GitHub Web | Well-defined, autonomous |
   | Test fixtures | CLI | Terminal-based, scriptable |
   | Migrations | CLI | Database operations |
   
   **Key question**: Did running agents in parallel save time? What would you do differently?

#### ✅ Success Criteria

- [ ] All three work streams complete
- [ ] Code merged and integrated
- [ ] Search and analytics both working
- [ ] Infrastructure tasks complete
- [ ] Can articulate when to use each interface

#### ✨ The "After" — The Improved Experience

With Agentic SDLC:
- Three features built in 90 minutes
- Sequential would have taken 3-4 hours
- Each interface optimized for its task type
- Parallel progress without conflicts

#### 📚 Official Docs

- [VS Code: Copilot Agent Mode](https://code.visualstudio.com/docs/copilot/chat/chat-agent-mode)
- [GitHub Copilot Coding Agent](https://docs.github.com/en/copilot/using-github-copilot/using-copilot-coding-agent)
- [GitHub Copilot in the CLI](https://docs.github.com/en/copilot/github-copilot-in-the-cli)

#### 💭 Sarah's Assessment

*"You built three major features in 90 minutes by running agents in parallel. Sequential would've taken... what, 4 hours? This is the real productivity multiplier—not making one agent faster, but running many agents simultaneously."*

---

### Exercise 5.5: Sprint Orchestration — "Rafael Directs the Symphony"

#### 📖 The Story

It's Monday, 4:00 PM. **Sarah** gathers the team for sprint planning:

*"We have 90 minutes left in the day. What are we building?"*

**Rafael** opens the backlog. There are 8 feature requests, 3 bug fixes, and 2 tech debt items. Everyone starts talking at once:

- **Elena**: "We need to fix that character duplication bug—it's a data integrity issue!"
- **Marcus**: "The deployment pipeline is fragile. We should add health checks."
- **David**: "The architecture needs refactoring. We have circular dependencies."
- **Marcus**: "Users want search! It's the most requested feature!"

**Sarah** looks at Rafael: *"You're the product lead. What moves the needle for tomorrow's demo?"*

Rafael realizes: **This is his moment to demonstrate strategic thinking + AI orchestration.** He needs to:
1. Prioritize based on business value and demo impact
2. Estimate what's actually achievable in 90 minutes
3. Decompose work into parallelizable streams
4. Assign the right interface/person to each task
5. Keep everyone focused on shipping, not getting lost in possibilities

*"Okay,"* Rafael says. *"Let me think about this strategically..."*

#### ❌ The "Before" — What Frustration Looks Like

Without strategic orchestration:

**4:00 PM**: Team starts working on whatever they think is important
- David refactors architecture (complex, no visible impact)
- Elena writes tests for edge cases (important, but not demo material)
- Marcus optimizes deployment (won't be visible in demo)
- Marcus starts search feature (too big for 90 minutes)

**5:30 PM**: Sarah checks progress
- Architecture refactor: 40% done, breaking other code
- Tests: Written, but for a feature users don't see yet
- Deployment: Still working on it
- Search: Backend done, frontend not started

**Result**: Nothing shippable for the demo. Everyone worked hard, but no coherent outcome.

#### 🎯 Objective

Rafael uses product judgment + AI orchestration to prioritize work, decompose it into parallel streams, and ensure the team ships high-value, demo-ready features in 90 minutes.

#### 📋 Steps

1. **Rafael creates a prioritization matrix**
   
   Ask Copilot:
   ```
   @workspace We have 90 minutes until end of day and a demo tomorrow morning.
   
   Help me prioritize this backlog:
   
   Features:
   1. Search (all shows, characters, quotes with autocomplete)
   2. Character favorites page
   3. Analytics dashboard (views, popular quotes, trending)
   4. Episode guide with season filters
   5. Social media sharing
   
   Tech Debt:
   1. Refactor circular dependencies
   2. Add deployment health checks
   3. Fix character duplication bug
   
   For each item, estimate:
   - Effort (Small/Medium/Large using our effort-estimator skill)
   - Demo impact (High/Medium/Low - will stakeholders notice?)
   - Risk (breaking changes, dependencies)
   
   Then recommend:
   - What to build NOW (90 minutes, parallel if possible)
   - What to defer to next sprint
   - What's a quick win vs. strategic bet
   ```

2. **Rafael makes the strategic call**
   
   Based on Copilot's analysis (using the effort estimator skill), Rafael decides:
   
   **Build in parallel (90 minutes):**
   - ✅ **Analytics endpoints** (Medium, High demo impact, well-defined)
   - ✅ **Social sharing** (Small, Medium demo impact, quick win)
   - ✅ **Fix character duplication bug** (Small, data integrity, user-facing)
   
   **Defer to next sprint:**
   - ❌ Search (Large - needs 2-3 weeks, can't rush)
   - ❌ Architecture refactor (No demo impact, risky mid-sprint)
   - ❌ Episode guide (Medium, but analytics is higher priority)
   
   **Rafael's reasoning**: *"We need features stakeholders can SEE and USE. Analytics shows growth metrics. Social sharing drives virality. Bug fix shows we care about quality. All three can be demoed effectively. Search is important but too complex to rush."*

3. **Rafael maps work to interfaces**
   
   Create a sprint plan in a GitHub Issue:
   ```markdown
   ## Sprint Goal (90 minutes)
   Ship 3 demo-ready features that showcase data insights, social engagement, and quality.
   
   ## Work Streams (Parallel Execution)
   
   ### Stream 1: Analytics Dashboard (David)
   - **Interface**: GitHub Copilot Web (Background Agent)
   - **Why**: Well-defined endpoints, can run autonomously
   - **Deliverables**: 
     - GET /api/analytics/overview (total counts)
     - GET /api/analytics/popular-quotes (top 10 by views)
     - GET /api/analytics/trending (last 7 days activity)
   - **Success**: PR created with tests
   
   ### Stream 2: Social Media Sharing (Marcus)
   - **Interface**: VS Code Agent Mode (Interactive)
   - **Why**: Quick win, but needs design decisions on placement
   - **Deliverables**:
     - ShareButton component
     - Social meta tags in HTML
     - Share to Twitter, Facebook, Instagram
   - **Success**: Working buttons on quote pages
   
   ### Stream 3: Bug Fix + Infrastructure (Marcus)
   - **Interface**: GitHub Copilot CLI (Terminal)
   - **Why**: Database investigation + scripted fix
   - **Deliverables**:
     - Find duplicate character records
     - Write migration to deduplicate
     - Add unique constraint to prevent future duplicates
     - Health check endpoint for deployment
   - **Success**: Clean database, health check passing
   
   ## Schedule
   - **4:00-4:15 PM**: Kickoff, assign work streams
   - **4:15-5:00 PM**: Development (parallel)
   - **5:00-5:15 PM**: Integration & testing
   - **5:15-5:30 PM**: Deploy to staging, verify
   ```

4. **Rafael monitors and adjusts**
   
   As work progresses, Rafael checks in:
   
   **4:30 PM**:
   - Analytics: PR created by Web Agent ✅
   - Social sharing: Frontend component done, testing ✅
   - Bug fix: Duplicates found, migration ready ✅
   
   **4:45 PM**:
   - Analytics: PR approved, merged ✅
   - Social sharing: Buttons work, styling tweaks needed ⚠️
   - Bug fix: Migration applied, constraint added ✅
   
   Rafael makes a call: *"Marcus, the sharing buttons work. Ship them as-is. We can polish the styling later. Functionality for the demo is what matters."*

5. **Demo prep: Rafael creates the narrative**
   
   At 5:15 PM, Rafael drafts tomorrow's demo script:
   ```
   Demo Flow (3 minutes):
   
   1. Show Analytics Dashboard
      - "We now track engagement: 1,247 quote views this week"
      - "Top quote: 'I am the one who knocks' - 43 views"
      - "This helps us understand what resonates with fans"
   
   2. Demonstrate Social Sharing
      - Click share on a popular quote
      - "Fans can now share their favorite moments to social media"
      - "Each share brings new users to the platform"
   
   3. Show Data Quality Fix
      - "We identified and fixed duplicate character data"
      - "Backend now has constraints preventing future duplicates"
      - "Demonstrates our commitment to data integrity"
   
   Story: We're building features that drive growth (analytics + sharing) 
   while maintaining quality (bug fixes).
   ```

#### ✅ Success Criteria

- [ ] Created prioritization matrix with business value + effort estimates
- [ ] Made strategic decisions on what to build vs. defer
- [ ] Decomposed work into 3 parallel streams
- [ ] Matched each stream to the appropriate interface (Web/VS Code/CLI)
- [ ] All 3 streams completed in 90 minutes
- [ ] Created demo narrative connecting features to business value
- [ ] Can articulate WHY each decision was made

#### ✨ The "After" — The Improved Experience

**Without orchestration:**
- Team works on whatever seems interesting
- 90 minutes passes, nothing is demo-ready
- Demo tomorrow shows "in-progress" work
- Stakeholders ask: "What did you actually ship?"

**With Rafael's orchestration:**
- Clear priorities based on business value + effort
- Parallel execution across 3 interfaces
- 90 minutes delivers 3 shippable features
- Demo shows concrete value: insights, engagement, quality
- Stakeholders say: "This is impressive progress!"

**The key difference**: Rafael didn't just write requirements. He **orchestrated execution** using AI tools strategically.

#### 📚 Official Docs

- [GitHub Copilot Coding Agent](https://docs.github.com/en/copilot/using-github-copilot/using-copilot-coding-agent)
- [VS Code: Agent Mode](https://code.visualstudio.com/docs/copilot/chat/chat-agent-mode)
- [GitHub Copilot in the CLI](https://docs.github.com/en/copilot/github-copilot-in-the-cli)

#### 💭 Rafael's Transformation Complete

*"This is what I've been missing. For years, I wrote requirements and hoped developers would execute them. I was just a requirements writer.*

*Now I understand: Product leadership isn't just WHAT to build—it's orchestrating HOW and WHEN to build it.*

*I used AI to:*
- *Prioritize based on value + realistic effort estimates*
- *Decompose work into parallelizable streams*
- *Match tasks to the right tools and people*
- *Keep everyone focused on shipping, not spinning*

*I'm not a requirements writer anymore. I'm an **execution enabler**. And that's the product manager I always wanted to be."*

#### 🚀 Challenge Extension

Take this orchestration further:
- Set up automated status updates from each agent (GitHub Actions, Slack integration)
- Create a "sprint dashboard" that tracks progress across all 3 streams
- Build a "demo readiness checklist" that Copilot validates before stakeholder demos
- Design escalation paths: "If Stream 1 fails, fallback to showing just Streams 2+3"

---

## 🔗 The Agentic SDLC Summary

### Interface Selection Guide

| Need | Best Interface | Why |
|------|----------------|-----|
| Complex feature development | VS Code Agent Mode | Interactive, multi-file, immediate feedback |
| Well-defined, autonomous tasks | GitHub Web Coding Agent | Background, creates PRs, continues while you work |
| Terminal/DevOps tasks | GitHub Copilot CLI (`copilot`) | Agentic terminal, scripting, infrastructure |
| Quick questions | Any | All interfaces handle explanations well |
| Code review | GitHub Web | Integrated with PR workflow |

### The Parallel Workflow

```
Sprint Start
    │
    ├─── VS Code Agent Mode ────────────────────────────────┐
    │    (Complex feature, you're interacting)              │
    │                                                       │
    ├─── GitHub Web Agent ──────────────────────────────┐   │
    │    (Autonomous PR, runs in background)            │   │
    │                                                   │   │
    ├─── GitHub Copilot CLI (`copilot`) ──────────┐     │   │
    │    (Infrastructure, agentic terminal)        │     │   │
    │                                              │     │   │
    v                                              v     v   v
Sprint End ◄───────────── All streams converge ───────────────
```

### Compounding with Previous Modules

All three interfaces benefit from your earlier work:
- **Repository Instructions** (Module 1) → Applied in all interfaces
- **Custom Prompts** (Module 2) → Referenced in GitHub Web tasks
- **Custom Agents** (Module 3) → Specialized tasks in VS Code
- **Custom Instructions** (Module 4) → File patterns apply everywhere

---

## 🔒 Exercise 5.5: Checkpoints — "Your Safety Net"

#### 📖 The Story

**Sarah** has been burned before. *"Let AI make a bunch of changes, realize something's wrong, and have to manually undo everything? No thanks."* She's skeptical of agent mode for exactly this reason.

Then she discovers checkpoints: automatic save points that let you review, accept, or roll back agent changes at any point.

#### ❌ The "Before" — What Frustration Looks Like

Without checkpoints:
- Agent makes many changes, something goes wrong
- No way to partially accept work
- Manual undo is tedious and error-prone
- Fear prevents using agent mode for real work

#### 🎯 Objective

Use checkpoints to safely work with agent mode, maintaining control over incremental changes.

#### 📋 Steps

1. **Understand checkpoint behavior**

   Checkpoints are created:
   - After each significant agent action
   - Before risky operations
   - At logical task boundaries
   - Automatically during long-running tasks

2. **Start an agent task and observe checkpoints**

   ```
   Refactor src/services/order-service.js to:
   1. Extract validation into a separate function
   2. Add error handling for each step
   3. Update tests to match
   ```

   Watch as the agent creates checkpoints after each step.

3. **Review a checkpoint**

   At any checkpoint:
   - See what changed since last checkpoint
   - Review the diff for each file
   - Accept, modify, or reject changes
   - Continue from that point

4. **Roll back to a previous checkpoint**

   If step 3 went wrong:
   - Navigate to checkpoint after step 2
   - Roll back changes from step 3
   - Either retry or take a different approach

5. **Use checkpoints strategically**

   For complex tasks:
   - Review after each major step
   - Accept good work incrementally
   - Catch issues before they compound
   - Build confidence in agent assistance

#### ✅ Success Criteria

- [ ] Observed automatic checkpoint creation
- [ ] Reviewed changes at a checkpoint
- [ ] Rolled back to a previous checkpoint
- [ ] Accepted partial work from an agent session
- [ ] Understand checkpoints as a safety mechanism

#### ✨ The "After" — The Improved Experience

With checkpoints:
- Review changes incrementally, not all-or-nothing
- Roll back to any previous state
- Accept partial work when agent goes off track
- Confidence to use agent mode for real tasks

#### 📚 Official Docs

- [VS Code Copilot Agent Mode](https://code.visualstudio.com/docs/copilot/copilot-chat#_agent-mode)
- [Copilot Chat features](https://code.visualstudio.com/docs/copilot/reference/copilot-vscode-features)

#### 💭 Sarah's Verdict

*"I was ready to dismiss agent mode as too risky. Checkpoints changed my mind. I can let the agent work on complex tasks, review at each step, and roll back if something goes wrong. It's autonomy with a safety net. That's what I needed to trust it."*

---

## 🏢 Exercise 5.6: Background Agents — "Work While You Wait" (Enterprise)

**Tier**: 🏢 Enterprise

#### 📖 The Story

**David** has a large refactoring task: updating error handling across 50+ files. It's important but tedious work. *"I wish I could start this running and go to my architecture meeting,"* he thinks.

With background agents, he can. Start the task, attend the meeting, return to review the results.

#### 🎯 Objective

Use a background agent to process a multi-file task while you continue other work.

#### 📋 Steps

1. **Identify a suitable background task**

   Good candidates:
   - Large refactoring across many files
   - Generating comprehensive test suites
   - Documentation generation for entire modules
   - Code style normalization

2. **Start a background agent task**

   In VS Code Copilot Chat (Agent Mode):
   ```
   Update all error handling in src/services/ to use our custom
   error classes from src/errors/. Follow the patterns in
   docs/PATTERNS.md#error-handling.

   Run this as a background task.
   ```

3. **Continue working on other tasks**

   While the background agent works:
   - Switch to another branch
   - Attend meetings
   - Review other PRs

4. **Review results when complete**

   Background agents create checkpoints:
   - Review all changes before applying
   - Accept, modify, or reject individual changes
   - No changes applied without your approval

#### ✅ Success Criteria

- [ ] Started a background agent task
- [ ] Continued other work while agent processed
- [ ] Reviewed results before applying changes

#### 💭 David's Realization

*"Background agents are the clone I always wanted—they handle repetitive work while I focus on architecture. And I still review everything."*

---

## 🏢 Exercise 5.7: Cloud Agents — "Enterprise-Scale AI" (Enterprise)

**Tier**: 🏢 Enterprise

#### 📖 The Story

**Marcus** is responsible for infrastructure across 200+ microservices. When a security vulnerability is discovered, patches need to be applied everywhere. Cloud agents leverage enterprise infrastructure to process at scale.

#### 🎯 Objective

Understand how cloud agents enable enterprise-scale AI processing with governance.

#### 📋 Steps

1. **Understand cloud agent architecture**

   | Aspect     | Local Agent        | Cloud Agent             |
   | ---------- | ------------------ | ----------------------- |
   | Processing | Your machine       | Enterprise cloud        |
   | Scale      | One repo at a time | Multiple repos          |
   | Governance | Personal settings  | Organization policies   |
   | Audit      | Local logs         | Centralized audit trail |

2. **Review organization policies**

   Cloud agents operate under enterprise governance:
   - Which repos can agents access?
   - What actions are permitted?
   - Who can approve agent changes?
   - Where are audit logs stored?

3. **Monitor cloud agent progress**

   Enterprise dashboards show:
   - Repos processed
   - Changes proposed
   - Errors encountered
   - Approval status

#### ✅ Success Criteria

- [ ] Understand local vs. cloud agent differences
- [ ] Know where organization policies are configured
- [ ] Understand the approval workflow for cloud agents
- [ ] Know how to access audit logs

#### 📚 Official Docs (Enterprise)

- [GitHub Copilot Enterprise](https://docs.github.com/en/enterprise-cloud@latest/copilot/github-copilot-enterprise)
- [Copilot for Business](https://docs.github.com/en/copilot/copilot-business)

#### 💭 Marcus's Insight

*"Security patches across 200 services used to be a week-long fire drill. Cloud agents process in an hour. I still review and approve, but the grunt work is handled."*

---

## 🧠 Mindful Moment: Orchestrating Agents

The shift from "AI assistant" to "agentic SDLC" requires new skills:

**Old thinking**: "Ask AI to help me code"  
**New thinking**: "Orchestrate multiple agents to maximize parallel progress"

Like a project manager coordinating team members, you now coordinate agents:
- VS Code Agent = Senior developer (needs guidance, produces quality)
- Web Coding Agent = Junior developer (follows specs, works independently)
- CLI Agent = DevOps specialist (infrastructure, automation)

Your job is orchestration, not execution.

---

## ✅ Module Checklist

Before completing the workshop, verify:

- [ ] Used VS Code Agent Mode for complex interactive development
- [ ] Used GitHub Web Coding Agent for autonomous background work
- [ ] Used GitHub Copilot CLI (`copilot`) for terminal/infrastructure tasks
- [ ] Ran at least two agents in parallel
- [ ] Successfully merged parallel work streams
- [ ] Used checkpoints to review and roll back agent changes
- [ ] Can articulate which interface to use for which task type
- [ ] (Enterprise) Explored background agents for async work

---

## 📚 Official Documentation

- [VS Code: Copilot Agent Mode](https://code.visualstudio.com/docs/copilot/chat/chat-agent-mode)
- [GitHub Copilot Coding Agent](https://docs.github.com/en/copilot/using-github-copilot/using-copilot-coding-agent)
- [GitHub Copilot in the CLI](https://docs.github.com/en/copilot/github-copilot-in-the-cli)
- [VS Code: Multi-file Edits](https://code.visualstudio.com/docs/copilot/copilot-edits)

---

## 🚀 Ship It: The Final Stretch

### What Changed

| Traditional Development | Agentic SDLC |
|------------------------|--------------|
| One task at a time | Multiple tasks in parallel |
| Developer writes code | Developer orchestrates agents |
| Sequential workflow | Parallel workflow |
| Bottleneck: typing speed | Bottleneck: orchestration skill |

### The New Skills

1. **Task decomposition**: Breaking work into parallelizable chunks
2. **Interface selection**: Choosing the right agent for each task
3. **Context preparation**: Setting up agents for success (instructions, prompts)
4. **Integration**: Merging parallel work streams
5. **Quality review**: Validating agent output before shipping

### When Parallel Agents Don't Work

Not everything can run in parallel:
- **Dependencies**: If Task B needs Task A's output, they're sequential
- **Conflicts**: Two agents editing the same file = merge hell
- **Ambiguity**: Unclear tasks need human-in-the-loop (VS Code Agent)

**The skill**: Identifying which tasks can safely run in parallel.

### The Productivity Math

```
Sequential: Task A (30 min) + Task B (30 min) + Task C (30 min) = 90 min
Parallel:   Max(Task A, Task B, Task C) + Integration (10 min) = 40 min
Speedup:    90 / 40 = 2.25x
```

With good orchestration, you're not just faster—you're fundamentally more productive.

---

## 🚀 Ship It: The Final Stretch

### ⏰ Monday 5:30 PM — Sprint Complete

> *"We built something real. Let's ship it."*  
> — Sarah, orchestrating the final stretch

The FanHub team has accomplished everything they planned—and more:
- ✅ Repository-wide standards
- ✅ Reusable prompt library
- ✅ Custom agents for automation
- ✅ File-specific instructions
- ✅ Search with autocomplete
- ✅ Analytics dashboard

*"We actually did it,"* Priya says, surprised.

*"We did MORE than we planned,"* Marcus realizes.

### Quick Production Checklist

Before shipping, verify:

| Category | ✅ Check |
|----------|---------|
| **Security** | Secrets in env vars, auth on protected routes, input validated |
| **Performance** | Queries optimized, assets bundled |
| **Reliability** | Error handling, logging enabled |
| **Documentation** | README accurate, API docs current |

Use Agent Mode for a quick audit:
```
@workspace Generate a quick production checklist for FanHub. 
Flag any critical issues that would block deployment.
```

### Sprint Artifacts Created

```
fanhub/
├── .github/
│   └── copilot-instructions.md     # Team patterns for Copilot
├── docs/
│   ├── ARCHITECTURE.md              # System design
│   └── PROMPTS/                     # Reusable prompt library
├── .github/
│   ├── prompts/                     # Custom prompts
│   └── instructions/                # File-scoped instructions
├── agents/                          # Custom agents
└── src/                             # Feature code with tests
```

This is the **infrastructure** of a productive AI-assisted workflow.

---

## 🎉 Congratulations: Workshop Complete!

### What You Learned

| Module | Concept | Artifact |
|--------|---------|----------|
| 0 | The baseline problem | Copilot without context |
| 1 | Team Standards | `copilot-instructions.md`, `ARCHITECTURE.md` |
| 2 | Context & Prompts | Prompt library, specification workflow |
| 3 | Agents & Automation | Custom agents, Agent Mode |
| 4 | Custom Instructions | File-scoped patterns via `applyTo` |
| 5 | Agentic SDLC | Parallel agents: VS Code, Web, CLI |

### The Four Customization Features

You've now practiced all four ways to customize GitHub Copilot:

1. **`copilot-instructions.md`** — Team patterns in every response
2. **Custom Prompts** — Reusable, shareable prompt files
3. **Custom Agents** — Autonomous task execution
4. **Custom Instructions** — File-scoped context via `applyTo`

### The Transformation

Remember the "Syntax Wizard → Markdown Whisperer" shift?

You've experienced it:
- **Before**: Value came from knowing syntax
- **After**: Value comes from clarity of thought

The developers who thrive with AI are those who can:
- Express intent clearly
- Document patterns consistently
- Review output critically
- Design systems thoughtfully

Those are human skills. AI amplifies them.

---

## 🎭 Epilogue: The Team's Journey

Each persona learned something different:

**David** (20 years): *"I worried AI would make my experience obsolete. Instead, it made my experience more valuable. I focus on design and judgment. The mechanical work handles itself."*

**Priya** (1 year): *"I learned so much! Not just about code, but about HOW to think about code. When Copilot generated something, I had to decide if it was right. That forced me to understand it."*

**Sarah** (15 years): *"Okay, I'm convinced. We built more in one day than I expected. But the customization mattered—we used AI thoughtfully, not just blindly."*

**Marcus** (5 years): *"The agents blew my mind. I finally feel confident with application code. The patterns showed me things I never saw in infrastructure work."*

**Elena** (8 years): *"Test generation was good, but I still had to think about what to test. That's fine—that's my job. The AI wrote the tests, I designed the strategy."*

**Marcus** (12 years): *"The deployment docs almost wrote themselves. Running agents in parallel changed everything—I'm orchestrating, not just coding."*

**Rafael** (10 years): *"The real win was the prompt library—now we have repeatable ways to translate specs into code. We ship faster AND better."*

---

## 🧠 The Bigger Picture

The FanHub sprint demonstrated something important:

**AI-assisted development isn't about replacing developers.**  
It's about:
- Removing mechanical work
- Preserving knowledge in documentation
- Making patterns repeatable
- Freeing humans for judgment and creativity

Every persona ended the sprint more capable, not less relevant.

**AI is a multiplier. What it multiplies depends on what you bring.**

---

## ➡️ What's Next?

### Apply to Your Real Projects

1. **Start with `copilot-instructions.md`** — The highest-leverage change
2. **Build your prompt library** — Capture what works
3. **Share with your team** — Patterns scale through documentation
4. **Keep experimenting** — AI tools evolve; stay curious

### Continue Learning

**[Module 8: Copilot on the Web](../08-copilot-web/README.md)**
Using GitHub Copilot on github.com for research, documentation, and mobile work.

**[Module 9: GitHub Copilot CLI](../09-copilot-cli/README.md)**
The new agentic CLI for interactive and programmatic terminal workflows.

### Stay Connected

- **GitHub Docs**: [GitHub Copilot Documentation](https://docs.github.com/en/copilot)
- **VS Code Docs**: [GitHub Copilot in VS Code](https://code.visualstudio.com/docs/copilot/overview)
- **What's New**: [GitHub Changelog](https://github.blog/changelog/) (filter for Copilot)

---

*Thank you for completing the FanHub Workshop!*

*Now go build something amazing—with AI as your partner, not your replacement.*
