# Exercise 7.5: Access Custom Agents from the Web

## 🎯 Objective

Discover that the custom agents you've already created (@feature-plan, @implement, @security-review) are automatically accessible via github.com/copilot/agents, enabling AI-assisted planning and analysis during meetings without opening VS Code.

> **Key Insight:** Custom agents defined in `.github/agents/` work in both VS Code AND the web automatically—no additional configuration required.

**Lead:** Rafael ⭐ | **Support:** Sarah 🤝, Marcus 🤝

---

## 📖 The Story

### ❌ The "Before" — Limited to VS Code

**Monday 5:15 PM** — Rafael is in a video call with stakeholders discussing the Q1 roadmap. They're debating whether to prioritize "Character Relationships Graph" or "Watch Party Integration."

**Current workflow:**
1. Stakeholder: "How much effort is the relationships graph?"
2. Rafael: "Let me check... I need to open VS Code"
3. Switches to VS Code (not already open during meeting)
4. Opens project, waits for extensions to load (30 seconds)
5. Invokes @feature-plan agent to analyze the feature
6. Waits for analysis, reviews output
7. Returns to call: "Based on the analysis, looks like 2-3 sprints"
8. Stakeholder: "What about the watch party feature?"
9. Rafael: Back to VS Code, repeats process for second feature
10. Meeting is disrupted, 5-6 minutes per feature analysis

**Time breakdown:**
- **5-6 minutes per feature** — Context switching, loading VS Code, running agent, returning to call
- **Meeting disruption** — Stakeholders wait while Rafael context-switches
- **Tool limitation** — Valuable custom agents only accessible from VS Code

Sarah observes the call: "Your @feature-plan agent is perfect for this—it already knows how to analyze features systematically. But you shouldn't need to leave the meeting and open VS Code. Why not just use it from the web?"

Rafael: "Wait, can I do that?"

---

### ✨ The "After" — Agents Accessible from Web

**The transformation:**

Rafael realizes that custom agents in `.github/agents/` are automatically available on github.com/copilot/agents. No additional configuration needed.

**New workflow:**
1. During stakeholder call, keeps github.com/copilot/agents open in browser tab
2. Stakeholder: "How much effort is the relationships graph?"
3. Rafael (in browser): `@feature-plan Analyze effort for Character Relationships Graph feature`
4. Agent analyzes in real-time (same behavior as VS Code)
5. 90 seconds later: "Based on component analysis, 2-3 sprints for full implementation, 1 sprint for MVP"
6. Stakeholder: "What about watch party?"
7. Rafael (same browser tab): `@feature-plan Analyze Watch Party feature`
8. 90 seconds later: Provides second estimate
9. Meeting continues smoothly, no context switching

**Results:**
- **Analysis time per feature**: 5-6 minutes → 90 seconds (no VS Code loading/switching)
- **Meeting disruption**: Eliminated (analysis happens in-call)
- **Agent availability**: VS Code only → VS Code + Web (same agents, both places)
- **Stakeholder experience**: Waiting → Real-time responses

---

### 💭 Rafael's Realization

> *"I spent all this time building custom agents thinking they'd only work in VS Code. Then I opened github.com/copilot/agents during a meeting and saw all three agents just... there. Same @feature-plan, same @implement, same @security-review. I can plan features from my phone if I need to. The agents aren't tied to my local environment—they're tied to the repository. That changes everything about when and how I can use them. Now I keep github.com/copilot/agents open during every planning call."*

---

## 🔨 Steps

### Step 1: Access GitHub Copilot on the Web

**Context:** GitHub Copilot is available as a web interface that can access repository context and custom agents defined in `.github/agents/`.

**Task:**

1. **Open GitHub Copilot web interface:**
   - In your browser, go to [github.com/copilot/agents](https://github.com/copilot/agents)
   - Sign in with your GitHub account (if not already signed in)
   - You should see the Copilot chat interface

2. **Select the CopilotTraining repository:**
   - Look for repository selector (usually in top-left or header area)
   - Search for and select your fork of CopilotTraining
   - This gives Copilot context about your repository and agents

3. **Verify custom agents are visible:**
   - Look for an agent selector or @ mention menu
   - Type `@` in the chat to see available agents
   - Verify you see:
     - `@feature-plan` (from Exercise 7.2)
     - `@implement` (from Exercise 7.3)
     - `@security-review` (from Exercise 7.4)

**Validation:**
- ✅ github.com/copilot/agents loads successfully
- ✅ CopilotTraining repository is selected
- ✅ Custom agents (@feature-plan, @implement, @security-review) are visible
- ✅ You can @ mention agents in the chat interface

---

### Step 2: Use @feature-plan from the Web

**Context:** Test that the @feature-plan agent works identically from the web as it does in VS Code.

**Task:**

1. **Invoke the feature plan agent:**
   - In the chat, type:

```
@feature-plan Analyze the effort required to add a "Watch Party" feature that lets users watch TV show episodes together in synchronized viewing sessions with real-time chat.
```

2. **Observe agent behavior:**
   - Agent should execute its three-phase workflow (discovery → analysis → planning)
   - Agent should search repository for related components
   - Agent should provide structured breakdown
   - Agent should stop at planning (not implement) based on its stopping rules

3. **Compare to VS Code experience:**
   - Open VS Code and invoke the same agent with the same prompt
   - Verify the output is consistent between web and VS Code
   - Note any differences in interface but same underlying behavior

**Validation:**
- ✅ @feature-plan agent responds from web interface
- ✅ Agent performs repository analysis (uses @workspace context)
- ✅ Agent provides structured feature breakdown
- ✅ Agent respects stopping rules (doesn't implement)
- ✅ Behavior matches VS Code version of agent

---

### Step 3: Test Agent Switching on the Web

**Context:** Verify that you can switch between different agents in the same web conversation, just like in VS Code.

**Task:**

1. **Switch to security review agent:**
   - In the same conversation, type:

```
@security-review Review the proposed Watch Party feature plan above for security concerns related to:
- Real-time data synchronization
- User authentication for watch sessions
- Chat message validation
```

2. **Observe handoff behavior:**
   - Agent should reference the previous @feature-plan output
   - Agent should focus on security analysis (its role)
   - Agent should NOT attempt to implement code (tool restrictions)

3. **Try third agent:**
   - Type:

```
@implement Would you be able to implement this feature if I created a complete ADR for it?
```

   - Agent should explain its role and confirm it can implement from ADR documents

**Validation:**
- ✅ Can invoke different agents in same conversation
- ✅ @security-review provides security-focused analysis
- ✅ @implement responds appropriately about its implementation role
- ✅ Each agent maintains its role boundaries and tool restrictions
- ✅ Web experience mirrors VS Code multi-agent workflow

---

### Step 4: Simulate Rafael's Meeting Scenario

**Context:** Experience the practical value of web-accessible agents during planning or stakeholder meetings.

**Task:**

1. **Close VS Code** (simulate not having development environment open)

2. **Use only the web interface** to analyze these two features:

**Feature A:** "Character Relationships Graph"
```
@feature-plan Analyze adding a visual graph showing character relationships (family, friends, enemies) with clickable nodes to navigate between character profiles.
```

**Feature B:** "Episode Discussion Threads"
```
@feature-plan Analyze adding threaded discussions for each episode with upvoting, replies, and spoiler warnings.
```

3. **Time both analyses:**
   - Note start time for Feature A
   - Wait for @feature-plan response
   - Note completion time
   - Repeat for Feature B

4. **Document the experience:**
   - How long did each analysis take?
   - Could you do this during a video call?
   - Would you need to context-switch to VS Code?
   - Does this change when/how you can use custom agents?

**Validation:**
- ✅ Both features analyzed successfully from web
- ✅ Each analysis completed in under 2 minutes
- ✅ No need to open VS Code or local development environment
- ✅ You can articulate the value for meeting-based planning

---

### Step 5: Compare Before and After Metrics

**Context:** Quantify the transformation from VS Code-only agents to web-accessible agents.

**Task:**

Document these comparisons:

**Before (VS Code Only):**
- Agent access: Requires VS Code open and workspace loaded
- During meetings: Must context-switch away from call to use agents
- Setup time: 30-60 seconds to load VS Code and workspace
- Analysis per feature: 5-6 minutes (including context switching)
- Mobile access: Impossible (VS Code not on mobile)
- Availability: Only when at development machine

**After (Web + VS Code):**
- Agent access: Browser or VS Code, choose based on context
- During meetings: Keep github.com/copilot/agents open in tab, no switching
- Setup time: 0 seconds (already in browser)
- Analysis per feature: 90 seconds (web interface, no switching)
- Mobile access: Possible (any device with browser)
- Availability: Anywhere with internet access

**Use case matching:**

| Scenario | Best Option | Why |
|----------|-------------|-----|
| Implementing code | VS Code agent | Full file editing tools |
| Planning during meetings | Web agent | No context switching |
| Quick feature analysis | Web agent | Faster, no IDE loading |
| Detailed code review | VS Code agent | Better file navigation |
| Mobile/tablet planning | Web agent | VS Code not available |
| Systematic implementation | VS Code agent | Local file system access |

**Validation:** You can explain when to use web vs. VS Code for different workflows, based on access to editing tools and context.

---

## ✅ Success Criteria

- [ ] Successfully accessed github.com/copilot/agents and selected repository
- [ ] Custom agents (@feature-plan, @implement, @security-review) visible in web interface
- [ ] @feature-plan agent works from web with same behavior as VS Code
- [ ] Can switch between agents in same web conversation
- [ ] Analyzed two features using web interface without opening VS Code
- [ ] Each feature analysis completed in under 2 minutes
- [ ] Documented before/after metrics for web accessibility
- [ ] Can articulate when to use web vs. VS Code based on workflow needs
- [ ] Understand that agents in `.github/agents/` work in both environments automatically

---

## 🚀 Challenge Extension

**Explore additional web workflows:**

1. **Mobile planning** — Try accessing github.com/copilot/agents from a phone or tablet during commute/downtime to plan features or review code

2. **Cross-repository analysis** — Switch between different repositories in web interface to compare implementation approaches across projects

3. **Collaborative planning** — Share github.com/copilot/agents session link with team members during planning sessions so everyone sees the same agent analysis

4. **Web-specific agents** — Create an agent with `target: github-copilot` that ONLY works on web (for scenarios where you want to prevent local execution)

5. **Agent comparison** — Test the same prompt with different agents (@feature-plan vs. default @workspace) to compare output quality and structure

---

## 📚 Key Concepts

**Automatic web availability:**
- Agents in `.github/agents/` are automatically available on both VS Code and web
- No `target: github-copilot` frontmatter required for basic web access
- Same agent behavior in both environments (unless tool limitations apply)

**Web vs. VS Code capabilities:**

| Capability | Web | VS Code |
|------------|-----|---------|
| Repository analysis | ✅ Full access | ✅ Full access |
| Agent invocation | ✅ All custom agents | ✅ All custom agents |
| File editing | ❌ Read-only | ✅ Full editing |
| File creation | ❌ Not supported | ✅ Create/delete files |
| Terminal commands | ❌ Not available | ✅ Full terminal |
| MCP servers | ✅ Inline config only | ✅ Workspace + inline |
| Agent Skills | ✅ Supported | ✅ Supported |
| Mobile access | ✅ Any device | ❌ Desktop only |

**When to use web:**
- During meetings or planning sessions
- Quick feature analysis without IDE setup
- Mobile/tablet access for on-the-go planning
- Collaborative planning with screen sharing
- When you don't need to edit code

**When to use VS Code:**
- Implementing features (need file editing)
- Detailed debugging (need terminal access)
- Creating new files or refactoring
- Working with local-only MCP servers
- Full development workflow

**Agent design considerations:**
- Design agents to work well in both environments
- Use read-only tools for planning agents (web-compatible)
- Reserve full editing tools for implementation agents (VS Code preferred)
- Instructions should assume repository context, not local file system
- Test agents in both environments during development

---

## 🔗 Official Docs

- 📖 [GitHub Copilot on the web](https://docs.github.com/en/copilot/using-github-copilot/using-github-copilot-on-the-web) — Using Copilot from github.com/copilot/agents
- 📖 [Custom agents](https://code.visualstudio.com/docs/copilot/customization/custom-agents) — How custom agents work across platforms
- 📖 [Repository context](https://docs.github.com/en/copilot/using-github-copilot/using-github-copilot-in-the-command-line) — How Copilot accesses repository data

---

## 🔗 Module 7 Complete

**What you've discovered:**

You built three custom agents in Exercises 7.2-7.4, and now you've learned they automatically work on the web too:

1. **@feature-plan** — Read-only planning agent (great for web-based analysis)
2. **@implement** — Full editing implementation agent (VS Code preferred)
3. **@security-review** — Analysis-only review agent (works well on web)

**Key insight:** Agents aren't tied to your local environment—they're tied to the repository. This means:
- Same agents work in VS Code and web
- Choose the environment based on what you need to do
- Planning and analysis? Use the web (faster, no setup)
- Implementation and editing? Use VS Code (full tools)

**Compound value from Modules 1-7:**

- **Module 1**: Repository instructions (work in both VS Code and web)
- **Module 2**: Plan mode (technique, not tool-specific)
- **Module 3**: Prompt files (accessible from both environments)
- **Module 4**: Custom instructions (repository-based, available everywhere)
- **Module 5**: Agent Skills (work with web and VS Code agents)
- **Module 6**: MCP servers (web needs inline config, VS Code uses workspace config)
- **Module 7**: Custom agents (automatically available in both VS Code and web)

The customization you've built isn't locked to one tool—it follows the repository across all interfaces.

---

## ➡️ What's Next?

**[Module 8: Copilot Web](../08-copilot-web/README.md)** — Explore additional web-based workflows beyond custom agents, including workspace search, multi-file refactoring, and collaboration features.

> *"The agents we built aren't VS Code agents—they're repository agents that happen to work everywhere. That's the difference."*  
> — Sarah, understanding the portability of custom agents

### Implementation Approaches
- **MVP version** — Minimal implementation with core value
- **Full version** — Complete feature with all requested capabilities
- **Phased approach** — Incremental delivery across multiple sprints

### Risk Factors
- Technical complexity or unknowns
- Dependency on other features or teams
- Performance concerns at scale
- Security or compliance implications

### Business Value
- User impact (how many users benefit?)
- Revenue impact (does it enable monetization?)
- Competitive differentiation
- Technical debt reduction

## Output Format

Structure your analysis as:

### Feature Summary
Brief description of what's being analyzed.

### Effort Estimate
**MVP**: X days/sprints  
**Full Implementation**: Y days/sprints  
**Confidence**: High/Medium/Low (explain why)

### Breakdown
| Area | Effort | Complexity | Notes |
|------|--------|------------|-------|
| Frontend | X days | Medium | [specific components] |
| Backend | Y days | High | [API endpoints, logic] |
| Database | Z days | Low | [schema changes] |
| Testing | A days | Medium | [test coverage needed] |

### Dependencies
- Link to related issues (via GitHub MCP queries)
- Blocking decisions needed
- External dependencies

### Risks & Considerations
- Technical challenges
- Unknown complexity areas
- Assumptions made

### Recommendation
Clear recommendation with rationale:
- "Start with MVP in Sprint N, add advanced features in Sprint N+1"
- "Requires architectural decision on [X] before estimation"
- "Full implementation is 3 sprints, consider phased approach"

## Tips for Accuracy

- Use GitHub MCP to find actual implementation examples
- Reference similar features for calibration
- Call out assumptions explicitly
- Provide confidence ranges, not exact numbers
- Consider technical debt and refactoring needs
- Factor in code review and testing time
```

2. Save the file

**Validation:** The agent file exists at [.github/agents/product-analyzer.agent.md](../../.github/agents/product-analyzer.agent.md) with `target: github-copilot`, inline `mcp-servers` config, and product analysis instructions.

---

### Step 3: Test the Web Agent on github.com/copilot/agents

**Context:** Verify the agent works from the web interface and can query GitHub data via MCP.

**Task:**

1. **Access web interface:**
   - Open browser and go to [github.com/copilot/agents](https://github.com/copilot/agents)
   - Sign in with your GitHub account
   - You should see the Copilot chat interface

2. **Select the product analyzer agent:**
   - Look for agent dropdown/selector in the UI
   - Find and select `@product-analyzer` (may take a moment to appear)
   - Verify the description shows: "Analyze features and estimate effort..."

3. **Test feature analysis:**
   - Type this prompt:

```
Analyze the effort required to implement a "Watch Party" feature for FanHub that lets users watch TV show episodes together in synchronized viewing sessions with chat. 

Include:
- Component breakdown (frontend, backend, real-time sync)
- Database schema changes
- Testing requirements
- MVP vs. full implementation estimates
```

4. **Verify agent capabilities:**
   - Agent should:
     - Search repository for related components
     - Query GitHub issues via MCP (if any related ones exist)
     - Provide structured breakdown with effort estimates
     - Give MVP vs. full implementation comparison
     - Identify technical dependencies
   - Agent should NOT:
     - Try to edit files (web agents are analysis-only)
     - Reference local workspace tools (it's web-based)

5. **Test GitHub MCP queries:**
   - Type: "What open issues in this repo are related to real-time features?"
   - Agent should query GitHub via MCP and return actual issues
   - Verify it accesses live GitHub data, not just repository code

**Validation:**
- ✅ Web interface loads and agent is selectable
- ✅ Agent generates feature analysis with effort breakdown
- ✅ Analysis includes MVP vs. full implementation comparison
- ✅ GitHub MCP successfully queries issues and PRs
- ✅ Estimates are structured and data-driven
- ✅ Agent explains assumptions and confidence levels

---

### Step 4: Compare Before and After Metrics

**Context:** Measure the transformation from "let me get back to you" to real-time analysis during meetings.

**Task:**

Document these comparisons:

**Before (No Web Access):**
- Analysis time during meetings: 15 minutes (context switching to VS Code, manual research)
- GitHub data queries: Manual browser searches, reading through issues
- Estimate confidence: ~70% (based on quick mental math)
- Meeting disruption: High (stakeholders wait while PM researches)
- Follow-up required: Often ("let me get back to you after I analyze this")

**After (@product-analyzer Web Agent):**
- Analysis time during meetings: 3 minutes (real-time web analysis)
- GitHub data queries: Automated via MCP (live data in seconds)
- Estimate confidence: ~95% (systematic methodology + GitHub context)
- Meeting disruption: Zero (analysis happens during conversation)
- Follow-up required: Rare (data-driven answers in real-time)

**Stakeholder perception improvements:**
- **Preparedness**: PM appears more prepared (actually agent is analyzing in real-time)
- **Data-driven**: Decisions backed by repo analysis and issue tracking
- **Responsiveness**: Questions answered immediately, not deferred
- **Confidence**: Estimates have structured rationale, not gut feel

**Validation:** You can articulate how web agents:
- Enable analysis without local development environment
- Integrate live GitHub data via MCP
- Support product conversations during meetings
- Transform "I'll get back to you" into "here's the data"

---

## ✅ Success Criteria

- [ ] GitHub Personal Access Token created with appropriate scopes
- [ ] Token added to GitHub Copilot secrets as `GITHUB_PERSONAL_ACCESS_TOKEN`
- [ ] `.github/agents/product-analyzer.agent.md` exists with complete configuration
- [ ] Agent specifies `target: github-copilot` for web access
- [ ] Agent includes inline `mcp-servers` configuration for GitHub
- [ ] Agent includes effort-estimator skill tools
- [ ] Agent accessible from github.com/copilot/agents
- [ ] Agent successfully analyzes features with structured breakdowns
- [ ] Agent queries GitHub issues/PRs via MCP
- [ ] Analysis includes MVP vs. full implementation comparison
- [ ] You can document 15→3 minute meeting analysis improvement
- [ ] You understand difference between local and web-targeted agents

---

## 🚀 Challenge Extension

**Enhance the web product analysis workflow:**

1. **Multiple MCP servers** — Add more web-compatible MCP servers:
   ```yaml
   mcp-servers:
     - name: github
       config: [GitHub config]
     - name: linear
       config: [Linear API for project management data]
   ```

2. **Workspace selection** — When using web agent, specify repo context:
   ```
   @product-analyzer #fanhub Analyze the watch party feature
   ```

3. **Historical data analysis** — Add instructions for agent to analyze PR history to calibrate estimates: "How long did similar real-time features take based on past PRs?"

4. **Custom estimation rubric** — Create `.github/skills/effort-estimator/RUBRIC.md` with your organization's specific complexity factors and reference it in agent instructions

5. **Handoff to local agent** — Configure handoff from `@product-analyzer` (web) to `@plan` (local) for cases where detailed planning requires local file access

---

## 📚 Key Concepts

**Web-targeted agents (`target: github-copilot`):**
- Run on GitHub's servers, not local VS Code
- Accessible from any browser via github.com/copilot/agents
- No local file system access (analysis and queries only)
- Require inline MCP configuration (can't use `.vscode/mcp.json`)
- Perfect for meetings, mobile access, or planning workflows

**Inline MCP configuration:**
- Defined in agent frontmatter's `mcp-servers` array
- Requires full server config (command, args, env variables)
- Secrets referenced via `{{secrets.SECRET_NAME}}` syntax
- Only supports HTTP-based MCP (no stdio local processes)
- Enables GitHub queries, API access, remote data

**Local vs. Web agent use cases:**

| Use Case | Local Agent (target: vscode) | Web Agent (target: github-copilot) |
|----------|------------------------------|-------------------------------------|
| Code editing | ✅ Full file access | ❌ Read-only analysis |
| File creation | ✅ Can create/modify | ❌ Cannot modify files |
| GitHub data | ✅ Via workspace MCP | ✅ Via inline MCP config |
| During meetings | ❌ Requires VS Code open | ✅ Any browser, anytime |
| Planning/analysis | ✅ Local + remote data | ✅ Remote data only |
| Implementation | ✅ Full editing tools | ❌ Analysis only |

**Product analysis workflows:**
- Feature effort estimation
- Requirements feasibility analysis
- Dependency mapping
- Risk assessment
- MVP vs. full implementation comparison
- Historical velocity calibration

**GitHub Copilot secrets:**
- Managed in GitHub account settings
- Referenced in agent configs via `{{secrets.NAME}}`
- Secure way to provide API tokens to web agents
- Required for MCP servers needing authentication

---

## 🔗 Official Docs

- 📖 [Custom agents - Web target](https://code.visualstudio.com/docs/copilot/customization/custom-agents) — Creating web-accessible agents
- 📖 [GitHub Copilot on the web](https://docs.github.com/en/copilot/using-github-copilot/using-github-copilot-on-the-web) — Using Copilot from github.com/copilot/agents
- 📖 [MCP GitHub server](https://github.com/modelcontextprotocol/servers/tree/main/src/github) — GitHub MCP server documentation

---

## 🔗 Module 7 Complete

**What you've built:**

You now have four custom agents orchestrating your workflow:

1. **@plan** — Read-only research and planning
2. **@implement** — Full editing for feature implementation
3. **@security-review** — Analysis-only security and standards validation
4. **@product-analyzer** — Web-accessible feature analysis with GitHub data

These agents demonstrate:
- **Role-based tool access** (read-only vs. editing)
- **Sequential workflows** (handoffs between agents)
- **Local vs. web execution** (VS Code vs. github.com/copilot/agents)
- **External data integration** (GitHub MCP for live issue queries)

**Compound value from Modules 1-7:**

- **Module 1**: Repository instructions (baseline standards)
- **Module 2**: Plan mode with @workspace (research technique)
- **Module 3**: Prompt files (task templates)
- **Module 4**: Custom instructions (path-based guidance)
- **Module 5**: Agent Skills (specialized capabilities)
- **Module 6**: MCP servers (external data access)
- **Module 7**: Custom agents (orchestrate everything into workflows)

Each agent can leverage all previous customizations—instructions, prompts, skills, and MCP servers—creating a fully integrated AI-assisted development environment.

---

## ➡️ What's Next?

**[Module 8: Copilot Web](../08-copilot-web/README.md)** — Explore additional web-based workflows beyond custom agents, including workspace search, multi-file refactoring, and collaboration features.

> *"We've built custom agents that work on the web. What else can we do from github.com/copilot/agents without opening VS Code?"*  
> — The team, discovering the full potential of web-based AI assistance
