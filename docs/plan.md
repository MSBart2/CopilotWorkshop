# GitHub Copilot Learning Exercises Plan

> **Purpose**: Master tracking document for creating before/after learning exercises covering all VS Code Copilot documentation topics.
>
> **Last Updated**: January 9, 2026
>
> **Session Continuity**: This document tracks progress across multiple sessions. Update checkboxes as exercises are completed.

---

## Quick Reference: Topic Coverage Matrix

| #   | Topic                  | Status      | Exercise Location | Tier |
| --- | ---------------------- | ----------- | ----------------- | ---- |
| 1   | Overview               | ✅ Complete | Module 00, 01     | 🆓   |
| 2   | Setup                  | ✅ Complete | Module 01         | 🆓   |
| 3   | Quickstart             | ✅ Complete | Module 01         | 🆓   |
| 4   | Chat Overview          | ✅ Complete | Module 01, 03     | 🆓   |
| 5   | Chat Sessions          | ✅ Complete | Module 09, Ex 1   | 🆓   |
| 6   | Add Context            | ✅ Complete | Module 02         | 🆓   |
| 7   | Review Edits           | ✅ Complete | Module 04, Ex 7   | 🆓   |
| 8   | Planning               | ✅ Complete | Module 09, Ex 2   | 🆓   |
| 9   | Checkpoints            | ✅ Complete | Module 09, Ex 3   | 🆓   |
| 10  | Tools                  | ✅ Complete | Module 07, Ex 3   | 🆓   |
| 11  | Inline Chat            | ✅ Complete | Module 01         | 🆓   |
| 12  | Prompt Examples        | ✅ Complete | Module 09, Ex 4   | 🆓   |
| 13  | Chat Debug View        | ✅ Complete | Module 09, Ex 5   | 💼   |
| 14  | Agents Overview        | ✅ Complete | Module 06         | 🆓   |
| 15  | Agents Tutorial        | ✅ Complete | Module 07, Ex 1   | 🆓   |
| 16  | Background Agents      | ✅ Complete | Module 07, Ex 4   | 🏢   |
| 17  | Cloud Agents           | ✅ Complete | Module 07, Ex 5   | 🏢   |
| 18  | Inline Suggestions     | ✅ Complete | Module 01, Ex 6   | 🆓   |
| 19  | Customization Overview | ✅ Complete | Module 03         | 🆓   |
| 20  | Instructions           | ✅ Complete | Module 03, 04     | 🆓   |
| 21  | Prompt Files           | ✅ Complete | Module 08, Ex 5   | 🆓   |
| 22  | Custom Agents          | ✅ Complete | Module 07, Ex 6   | 💼   |
| 23  | Language Models        | ✅ Complete | Module 07, Ex 2   | 🆓   |
| 24  | MCP                    | ✅ Complete | Module 07, Ex 3   | 🆓   |
| 25  | Org Instructions       | ✅ Complete | Module 10, Ex 1   | 💼   |
| 26  | Code Review Standards  | ✅ Complete | Module 10, Ex 2   | 🆓   |
| 27  | Copilot Spaces         | ✅ Complete | Module 10, Ex 3   | 🏢   |
| 28  | Usage Metrics          | ✅ Complete | Module 10, Ex 4   | 💼   |
| 29  | Team Onboarding        | ✅ Complete | Module 10, Ex 5   | 🆓   |

**Legend**: 🆓 Free tier | 💼 Business tier | 🏢 Enterprise tier

---

## Dependency Graph

```
Module 01 (Getting Started)
    └── Module 07, Ex 1 (Agents Tutorial)
            └── Module 07, Ex 4 (Background Agents) [🏢]
            └── Module 07, Ex 5 (Cloud Agents) [🏢]
    └── Module 07, Ex 2 (Language Models)
    └── Module 08, Ex 1 (Chat Sessions)
            └── Module 08, Ex 3 (Checkpoints)

Module 02 (Context)
    └── Module 07, Ex 3 (Tools & MCP)
            └── Module 07, Ex 6 (Custom Agents) [💼]

Module 03 (Configuration)
    └── Module 08, Ex 2 (Planning)

Module 04 (Documentation)
    └── Module 04, Ex 7 (Review Edits) [ENHANCE]

Module 06 (Agents & Tools)
    └── Module 07, Ex 3 (Tools & MCP)

Module 06 (Collaborative)
    └── Module 06, Ex 5 (Prompt Files) [ENHANCE]
    └── Module 08, Ex 4 (Prompt Examples)

Module 09 (Agentic SDLC)
    └── Module 10 (Enterprise Patterns)
            └── Module 10, Ex 1 (Org Instructions) [💼]
            └── Module 10, Ex 2 (Code Review Standards) [🆓]
            └── Module 10, Ex 3 (Copilot Spaces) [🏢]
            └── Module 10, Ex 4 (Usage Metrics) [💼]
            └── Module 10, Ex 5 (Team Onboarding) [🆓]
```

---

## New Module 07: Advanced Agents & Tools

### Exercise 7.1: Your First Agent Workflow — "Autonomous Implementation"

**Priority**: 1 (Start here for Agents track)
**Dependencies**: Module 01 complete
**Tier**: 🆓 Free
**Primary Persona**: Marcus (DevOps Developer)

#### 📖 Before Scenario

Marcus receives a ticket: "Add health check endpoint to the API." He opens Copilot Chat and asks for help. Copilot suggests code, but Marcus has to:

- Manually create each file
- Copy-paste code snippets
- Remember to update tests
- Manually run the build to verify

**Friction**: Multiple context switches, easy to miss steps, feels like Copilot is just fancy autocomplete.

#### 📖 After Scenario

Marcus switches to **Agent Mode** (Ctrl+Shift+I or click the dropdown). He describes the full requirement:

> "Add a /health endpoint that returns JSON with service status, database connection status, and uptime. Include tests and update the API documentation."

Agent Mode:

- Creates the endpoint file
- Adds the route registration
- Generates unit tests
- Updates the OpenAPI spec
- Runs tests to verify

**Win**: Marcus reviews the complete implementation, makes one tweak to the error handling, and ships. Total time: 10 minutes vs. 45 minutes.

#### 📋 Steps

1. Open an existing API project (or create a simple Express/FastAPI starter)
2. Open Copilot Chat panel (Ctrl+Shift+I)
3. Click the mode dropdown and select "Agent"
4. Enter the health check requirement prompt
5. Watch as Agent mode creates files, runs commands, and iterates
6. Review the proposed changes before accepting
7. Run the tests to verify the implementation

#### ✅ Success Criteria

- [ ] Agent mode created at least 2 files (endpoint + test)
- [ ] Agent mode ran terminal commands (npm test, pytest, etc.)
- [ ] You reviewed changes before they were applied
- [ ] Tests pass after accepting the implementation

#### 📚 Official Docs

- [VS Code: Copilot Agent Mode](https://code.visualstudio.com/docs/copilot/chat/agents-tutorial)
- [GitHub Docs: Using Copilot Agents](https://docs.github.com/en/copilot/using-github-copilot/using-agents)

#### 💭 Marcus's Reaction

_"Wait, it just... did the whole thing? And ran the tests? This is what I thought AI coding would be when I first heard about it."_

#### 🚀 Challenge Extension

Try a more complex task: "Add rate limiting to all API endpoints with configurable limits per route, including Redis caching and appropriate error responses."

---

### Exercise 7.2: Model Selection Strategy — "Right Tool for the Job"

**Priority**: 2
**Dependencies**: Module 01 complete
**Tier**: 🆓 Free (model availability varies)
**Primary Persona**: All personas (team exercise)

#### 📖 Before Scenario

The team uses the default model for everything. Sarah notices:

- Simple questions take longer than expected
- Complex refactoring sometimes produces shallow results
- Costs are higher than anticipated (for Business tier)

**Friction**: One-size-fits-all approach wastes resources and produces inconsistent quality.

#### 📖 After Scenario

Team learns to select models strategically:

| Task Type           | Recommended Model        | Why                                       |
| ------------------- | ------------------------ | ----------------------------------------- |
| Quick completions   | Fast model (GPT-4o-mini) | Speed matters, task is simple             |
| Code explanation    | Balanced model (GPT-4o)  | Needs understanding, not deep reasoning   |
| Complex refactoring | Reasoning model (o1)     | Multi-step logic, architectural decisions |
| Security review     | Reasoning model (o1)     | Needs to catch subtle issues              |

**Win**: Sarah switches to a reasoning model for her security audit, catches an injection vulnerability the fast model missed. David uses the fast model for routine getter/setter generation.

#### 📋 Steps

1. Open Copilot Chat panel
2. Click the model selector dropdown (shows current model name)
3. Try a simple task with the fast model: "Generate a getter and setter for a `name` property"
4. Note the response time
5. Switch to a reasoning model (o1 or similar)
6. Try a complex task: "Review this authentication code for security vulnerabilities: [paste code]"
7. Compare the depth of analysis between models
8. Document which model works best for different task types

#### ✅ Success Criteria

- [ ] Successfully switched between at least 2 different models
- [ ] Observed response time difference between fast and reasoning models
- [ ] Identified a task where the reasoning model provided deeper analysis
- [ ] Created a personal "model selection" mental framework

#### 📚 Official Docs

- [VS Code: Language Models](https://code.visualstudio.com/docs/copilot/language-models)
- [GitHub Docs: Copilot Models](https://docs.github.com/en/copilot/using-github-copilot/ai-models)

#### 💭 David's Realization

_"It's like knowing when to use a scalpel vs. a sledgehammer. My 20 years taught me that judgment—now I apply it to AI model selection too."_

#### 🚀 Challenge Extension

Create a team reference card documenting which models to use for: code review, refactoring, documentation, test generation, and debugging.

---

### Exercise 7.3: Tools & MCP — "Extending Copilot's Reach"

**Priority**: 3
**Dependencies**: Module 02, Module 06 (Agents & Tools)
**Tier**: 🆓 Free
**Primary Persona**: Sarah (Skeptical Senior)

#### 📖 Before Scenario

Sarah asks Copilot about her team's internal API. Copilot makes educated guesses based on code patterns but can't access:

- The actual API documentation (internal wiki)
- Live database schema
- Current deployment configuration

**Friction**: Copilot's suggestions are plausible but often wrong for her specific environment.

#### 📖 After Scenario (Basic Usage)

Sarah configures an MCP server that exposes her team's internal API docs. Now when she asks:

> "How do I authenticate with the PaymentService?"

Copilot queries the MCP server, retrieves the actual documentation, and provides accurate, team-specific guidance.

**Win**: No more "well, typically you would..." answers. Copilot knows HER system.

#### 📋 Steps (Basic Usage)

1. Check available MCP servers in VS Code settings (search "MCP")
2. Install a community MCP server (e.g., filesystem, database, or fetch)
3. Configure the server in `.vscode/mcp.json`:

```json
{
  "servers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@anthropic/mcp-server-filesystem", "/path/to/docs"]
    }
  }
}
```

4. Restart VS Code to load the MCP server
5. In Copilot Chat, ask a question that requires the external data
6. Observe Copilot using the tool to fetch real information

#### 🚀 Challenge Extension: Build Your Own MCP Server

Sarah creates a simple MCP server that queries her team's documentation:

**Step 1**: Create the server structure

```
tools/
  mcp-team-docs/
    index.js
    package.json
```

**Step 2**: Implement basic MCP server (index.js)

```javascript
#!/usr/bin/env node
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

const server = new Server(
  {
    name: "team-docs",
    version: "1.0.0",
  },
  {
    capabilities: { tools: {} },
  }
);

server.setRequestHandler("tools/list", async () => ({
  tools: [
    {
      name: "search_docs",
      description: "Search team documentation",
      inputSchema: {
        type: "object",
        properties: {
          query: { type: "string", description: "Search query" },
        },
        required: ["query"],
      },
    },
  ],
}));

server.setRequestHandler("tools/call", async (request) => {
  if (request.params.name === "search_docs") {
    // Your custom documentation search logic here
    return { content: [{ type: "text", text: "Documentation results..." }] };
  }
});

const transport = new StdioServerTransport();
await server.connect(transport);
```

**Step 3**: Configure in `.vscode/mcp.json`

```json
{
  "servers": {
    "team-docs": {
      "command": "node",
      "args": ["./tools/mcp-team-docs/index.js"],
      "env": {
        "DOCS_PATH": "${workspaceFolder}/docs"
      }
    }
  }
}
```

#### ✅ Success Criteria

- [ ] Configured at least one MCP server
- [ ] Successfully queried external data through Copilot Chat
- [ ] (Challenge) Created a custom MCP server that responds to queries
- [ ] Understood how MCP extends Copilot's capabilities

#### 📚 Official Docs

- [VS Code: MCP Servers](https://code.visualstudio.com/docs/copilot/chat/mcp-servers)
- [MCP Specification](https://modelcontextprotocol.io/)
- [MCP SDK Documentation](https://github.com/modelcontextprotocol/sdk)

#### 💭 Sarah's Verdict

_"Okay, THIS is useful. It's not magic—it's just connecting the AI to the right data. I can audit exactly what it accesses."_

---

### Exercise 7.4: Background Agents — "Work While You Wait"

**Priority**: 4
**Dependencies**: Exercise 7.1 (Agents Tutorial)
**Tier**: 🏢 **Enterprise Only**

> ⚠️ **Tier Callout**: Background Agents require GitHub Copilot Enterprise. This exercise is for Enterprise customers or those evaluating Enterprise features. If you don't have Enterprise access, read through the exercise to understand the capability, then skip to Exercise 7.5.

**Primary Persona**: David (Seasoned Architect)

#### 📖 Before Scenario

David needs to refactor a legacy authentication module—a task that touches 47 files. Even with Agent Mode, he has to:

- Stay in VS Code while it runs
- Wait for each step to complete
- Can't context-switch to other work

**Friction**: Large tasks block his entire workflow.

#### 📖 After Scenario

David starts a Background Agent task:

> "Refactor the auth module to use the new OAuth2 library. Update all consumers. Run the full test suite."

He receives a notification 20 minutes later: "Task complete. 47 files modified. All tests passing. Review changes?"

**Win**: David reviewed architectural decisions during his morning coffee while the AI handled the mechanical work.

#### 📋 Steps

1. Open a project with a substantial refactoring need
2. Open Copilot Chat and switch to Agent mode
3. Look for the "Run in Background" option (Enterprise feature)
4. Submit a complex, multi-file task
5. Continue working on other tasks while the agent runs
6. Review the notification when the task completes
7. Review all changes in the diff view before accepting

#### ✅ Success Criteria

- [ ] Successfully started a background agent task
- [ ] Continued other work while agent ran
- [ ] Received completion notification
- [ ] Reviewed and accepted/rejected the changes

#### 📚 Official Docs

- [GitHub Docs: Background Agents](https://docs.github.com/en/copilot/using-github-copilot/using-agents#background-agents)

#### 💭 David's Insight

_"This is what I actually wanted from AI. Not replacement—delegation. I decide WHAT to do, it handles HOW to do it at scale."_

---

### Exercise 7.5: Cloud Agents — "Enterprise-Scale AI"

**Priority**: 5
**Dependencies**: Exercise 7.1 (Agents Tutorial)
**Tier**: 🏢 **Enterprise Only**

> ⚠️ **Tier Callout**: Cloud Agents require GitHub Copilot Enterprise with specific organizational configuration. This exercise is for Enterprise administrators or those evaluating Enterprise features.

**Primary Persona**: Sarah (Skeptical Senior)

#### 📖 Before Scenario

Sarah's organization has 200 developers. Each configures their own Copilot setup differently. There's no consistency in:

- Which tools are available
- What custom instructions apply
- How sensitive operations are logged

**Friction**: Security team can't audit AI-assisted changes at scale.

#### 📖 After Scenario

IT configures Cloud Agents with organization-wide policies:

- Approved MCP servers only
- Mandatory security scanning before commits
- Centralized logging of all agent activities

Sarah's local Copilot automatically inherits these policies.

**Win**: Security is satisfied, developers have consistent experience across teams.

#### 📋 Steps (For Enterprise Administrators)

1. Access GitHub Enterprise Cloud settings
2. Navigate to Copilot configuration
3. Configure organization-wide agent policies
4. Define approved tools and MCP servers
5. Set up audit logging for agent activities
6. Test the configuration with a pilot group
7. Roll out to the organization

#### ✅ Success Criteria

- [ ] Organization-wide Copilot policies configured
- [ ] Audit logging enabled for agent activities
- [ ] Developers automatically inherit organization policies
- [ ] Security team has visibility into AI-assisted changes

#### 📚 Official Docs

- [GitHub Docs: Copilot Enterprise](https://docs.github.com/en/copilot/overview-of-github-copilot/about-github-copilot-enterprise)
- [GitHub Docs: Managing Copilot Policies](https://docs.github.com/en/copilot/managing-copilot/managing-copilot-for-your-enterprise)

---

### Exercise 7.6: Custom Agents — "Your Team's Expert"

**Priority**: 6
**Dependencies**: Exercise 7.3 (Tools & MCP)
**Tier**: 💼 **Business/Enterprise**

> ⚠️ **Tier Callout**: Custom Agents require Business or Enterprise tier. Free tier users can read through this exercise to understand the capability.

**Primary Persona**: David (Seasoned Architect)

#### 📖 Before Scenario

David spends hours each week reviewing PRs for architectural consistency. Junior developers make the same mistakes:

- Wrong error handling patterns
- Missing observability hooks
- Incorrect service boundaries

**Friction**: David is a bottleneck. His knowledge doesn't scale.

#### 📖 After Scenario

David creates a custom "Architecture Review" agent that encodes his expertise:

#### 📋 Steps

1. Create the agent definition file:

```markdown
<!-- .github/agents/arch-review.md -->

# Architecture Review Agent

## Role

You are an architecture reviewer for our microservices platform. You have deep expertise in distributed systems, observability, and API design.

## Context

Our platform uses:

- Node.js/TypeScript for services
- PostgreSQL for persistence
- Redis for caching
- OpenTelemetry for observability
- RFC 7807 for error responses

## Standards to Enforce

### Error Handling

- All errors must follow RFC 7807 Problem Details format
- Include correlation IDs in all error responses
- Log errors with structured context, never raw stack traces

### Observability

- All services must emit OpenTelemetry traces
- Spans must include: service.name, operation.name, user.id (if authenticated)
- Database queries must be traced with query type (not full SQL)

### Service Boundaries

- Services communicate via async messaging for commands
- Synchronous HTTP only for queries
- No direct database access across service boundaries

## Review Checklist

When reviewing code, check for:

1. [ ] Direct database queries outside repository pattern (flag as violation)
2. [ ] Missing trace instrumentation on public methods
3. [ ] Error responses not following RFC 7807
4. [ ] Synchronous calls for state-changing operations
5. [ ] Missing input validation on API endpoints

## Response Format

For each issue found:

1. Quote the problematic code
2. Explain why it violates our standards
3. Provide a corrected example
4. Rate severity: 🔴 Critical | 🟡 Major | 🟢 Minor
```

2. Register the agent in VS Code settings or `.vscode/settings.json`

3. Test the agent by invoking it:

```
@arch-review Review this service implementation for our architecture standards
```

4. Iterate on the agent definition based on results

5. Share with the team via the repository

#### ✅ Success Criteria

- [ ] Created a custom agent definition file
- [ ] Agent responds with domain-specific guidance
- [ ] Agent correctly identifies at least one standards violation
- [ ] Team can invoke the agent from their local setup

#### 📚 Official Docs

- [VS Code: Custom Agents](https://code.visualstudio.com/docs/copilot/copilot-custom-agents)
- [GitHub Docs: Custom Instructions](https://docs.github.com/en/copilot/customizing-copilot/customizing-github-copilot-in-your-ide)

#### 💭 David's Relief

_"I'm not replaced. I'm MULTIPLIED. Every developer now has access to my 20 years of patterns—and I can focus on the genuinely hard problems."_

#### 🚀 Challenge Extension

Create additional specialized agents for your team:

- `@security-review` - Security-focused code review
- `@perf-review` - Performance analysis
- `@api-design` - API design consultation

---

## New Module 08: AI Workflow Optimization

### Exercise 8.1: Managing Chat Sessions — "Context That Persists"

**Priority**: 7
**Dependencies**: Module 01 complete
**Tier**: 🆓 Free
**Primary Persona**: Priya (Recent Graduate)

#### 📖 Before Scenario

Priya is debugging a complex issue. After 15 messages, her chat gets confused:

- Earlier context is forgotten
- Suggestions contradict previous answers
- She starts over, losing all progress

**Friction**: Long conversations degrade. Starting fresh loses valuable context.

#### 📖 After Scenario

Priya learns chat session management:

- **New session**: Ctrl+L clears context for fresh start
- **Continue session**: Keep building on established context
- **Reference history**: Use previous messages to ground new questions

**Win**: Priya strategically starts new sessions for new topics, continues sessions for deep dives.

#### 📋 Steps

1. Start a Copilot Chat session about a specific topic
2. Ask 3-4 related follow-up questions, building context
3. Notice how Copilot references earlier parts of the conversation
4. Try asking an unrelated question—observe context confusion
5. Press Ctrl+L (Cmd+L on Mac) to start a new session
6. Ask the unrelated question again—observe cleaner response
7. Practice the pattern: new topic = new session

#### ✅ Success Criteria

- [ ] Identified when a conversation has "lost context"
- [ ] Successfully started a new session with Ctrl+L
- [ ] Observed improved responses after context reset
- [ ] Developed intuition for when to continue vs. restart

#### 📚 Official Docs

- [VS Code: Chat Sessions](https://code.visualstudio.com/docs/copilot/chat/chat-sessions)

#### 💭 Priya's Confidence

_"I used to think I was asking questions wrong when Copilot got confused. Now I know—it's about managing the conversation, not just the prompts."_

#### 🚀 Challenge Extension

Experiment with session length: How many messages can you exchange before context quality degrades? Document your findings.

---

### Exercise 8.2: AI-Assisted Planning — "Think Before You Code"

**Priority**: 8
**Dependencies**: Module 03 (Configuration)
**Tier**: 🆓 Free
**Primary Persona**: Marcus (DevOps Developer)

#### 📖 Before Scenario

Marcus gets a ticket: "Implement user notification preferences." He jumps straight into coding:

- Realizes halfway through he needs a new database table
- Discovers the email service has a different API than expected
- Ships incomplete because he didn't scope the full work

**Friction**: Implementation reveals planning gaps too late.

#### 📖 After Scenario

Marcus starts with a planning prompt:

> "I need to implement user notification preferences. Before I write any code, help me break this down:
>
> 1. What data models are needed?
> 2. What existing services will this integrate with?
> 3. What's the suggested implementation order?
> 4. What could go wrong?"

Copilot produces a structured plan. Marcus catches the email API issue before writing a single line.

**Win**: 20 minutes of planning saves 2 hours of rework.

#### 📋 Steps

1. Choose a feature you need to implement (real or practice)
2. **Resist the urge to code immediately**
3. Open Copilot Chat and use this planning prompt template:

```
I need to implement: [FEATURE DESCRIPTION]

Before I write any code, help me plan:

1. **Data Models**: What new or modified data structures are needed?
2. **Dependencies**: What existing code/services will this touch?
3. **Integration Points**: What external systems or APIs are involved?
4. **Implementation Order**: What's the logical sequence of tasks?
5. **Risks**: What could go wrong? What assumptions am I making?
6. **Testing Strategy**: How will I verify this works?

Use #codebase to understand our current architecture.
```

4. Review the plan Copilot generates
5. Ask follow-up questions about any unclear items
6. Create tasks/tickets based on the plan
7. **Then** start implementing

#### ✅ Success Criteria

- [ ] Generated a structured implementation plan before coding
- [ ] Identified at least one dependency or risk you hadn't considered
- [ ] Created actionable tasks from the plan
- [ ] Started implementation with clear direction

#### 📚 Official Docs

- [VS Code: Copilot for Planning](https://code.visualstudio.com/docs/copilot/chat/copilot-chat#planning)

#### 💭 Marcus's Growth

_"I always knew I should plan more. Having AI as a planning partner makes it actually happen."_

#### 🚀 Challenge Extension

Create a reusable planning prompt file at `.github/prompts/plan-feature.prompt.md` that your team can use for consistent planning.

---

### Exercise 8.3: Checkpoints — "Save Your Progress"

**Priority**: 9
**Dependencies**: Exercise 8.1 (Chat Sessions)
**Tier**: 🆓 Free
**Primary Persona**: Priya (Recent Graduate)

#### 📖 Before Scenario

Priya is exploring a complex refactoring with Copilot. She tries an approach that doesn't work:

- Can't undo the conversation direction
- Has to start completely over
- Loses the good ideas from before the wrong turn

**Friction**: Exploration is risky when you can't backtrack.

#### 📖 After Scenario

Priya creates checkpoints before risky exploration:

1. Establishes good context → **Creates checkpoint**
2. Tries approach A → Doesn't work
3. **Restores checkpoint** → Context intact
4. Tries approach B → Success!

**Win**: Safe experimentation without losing progress.

#### 📋 Steps

1. Start a Copilot Chat session about a complex topic
2. Build up useful context (explain the problem, share relevant code)
3. When you have good context established, create a checkpoint:
   - Click the checkpoint icon in the chat toolbar
   - Or use the command palette: "Copilot: Create Checkpoint"
4. Try an experimental approach (ask Copilot to explore a risky direction)
5. If the approach doesn't work, restore the checkpoint:
   - Click on the checkpoint in the chat history
   - Select "Restore to this point"
6. Try a different approach with your original context intact

#### ✅ Success Criteria

- [ ] Created a checkpoint at a meaningful point in the conversation
- [ ] Explored an experimental direction
- [ ] Successfully restored to the checkpoint
- [ ] Continued with a different approach

#### 📚 Official Docs

- [VS Code: Chat Checkpoints](https://code.visualstudio.com/docs/copilot/chat/chat-sessions#checkpoints)

#### 💭 Priya's Relief

_"It's like save points in a video game. I can try the hard path without fear of losing everything."_

#### 🚀 Challenge Extension

Use checkpoints to A/B test different implementation approaches. Create a checkpoint, try approach A, note the results, restore, try approach B, compare.

---

### Exercise 8.4: Building a Prompt Library — "Patterns That Scale"

**Priority**: 10
**Dependencies**: Module 06 (Collaborative Workflows)
**Tier**: 🆓 Free
**Primary Persona**: Team exercise

#### 📖 Before Scenario

Each team member has their own prompts:

- Scattered in personal notes
- Inconsistent quality
- New hires start from scratch

**Friction**: Good prompting knowledge doesn't spread.

#### 📖 After Scenario

Team creates `.github/prompts/` with versioned prompt files that everyone can use and improve.

**Win**: New team members use proven prompts immediately. Prompts improve through PRs.

#### 📋 Steps

1. Create the prompts directory:

```bash
mkdir -p .github/prompts
```

2. Create your first prompt file:

```markdown
## <!-- .github/prompts/code-review.prompt.md -->

description: Standard code review checklist
variables:

- name: focus_area
  description: What aspect to emphasize (security/performance/style)
  default: all
- name: severity_threshold
  description: Minimum severity to report (critical/major/minor)
  default: minor

---

# Code Review Request

Review this code with focus on: {{focus_area}}
Report issues at severity: {{severity_threshold}} or higher

## Review Checklist

For each issue found, provide:

1. **Location**: File and line number
2. **Issue**: What's wrong
3. **Why**: Why this matters
4. **Fix**: Suggested correction
5. **Severity**: 🔴 Critical | 🟡 Major | 🟢 Minor

## Standards Reference

- Follow patterns in PATTERNS.md
- Follow conventions in CONVENTIONS.md
- Consider architecture in ARCHITECTURE.md
```

3. Create additional prompts for common tasks:

   - `explain-code.prompt.md` - Code explanation template
   - `write-tests.prompt.md` - Test generation template
   - `refactor.prompt.md` - Refactoring guidance template

4. Use prompts in Copilot Chat:

```
/code-review focus_area=security severity_threshold=major
```

5. Commit prompts to version control
6. Create a PR process for prompt improvements

#### ✅ Success Criteria

- [ ] Created `.github/prompts/` directory
- [ ] Created at least 3 reusable prompt files
- [ ] Used variables in at least one prompt
- [ ] Successfully invoked a prompt in Copilot Chat
- [ ] Committed prompts to version control

#### 📚 Official Docs

- [VS Code: Prompt Files](https://code.visualstudio.com/docs/copilot/copilot-custom-instructions#prompt-files)

#### 🚀 Challenge Extension

Create a prompt that generates other prompts: a "meta-prompt" that helps team members create well-structured prompt files.

---

### Exercise 8.5: Chat Debug View — "Understanding AI Behavior"

**Priority**: 11
**Dependencies**: Module 01 complete
**Tier**: 💼 Business (some features)

> ⚠️ **Tier Callout**: Some debug features require Business tier. Basic debug view is available to all users.

**Primary Persona**: Sarah (Skeptical Senior)

#### 📖 Before Scenario

Sarah's Copilot suggestions are inconsistent. Sometimes great, sometimes nonsensical. She has no visibility into:

- What context Copilot is actually using
- Why it chose certain responses
- Where her prompts could improve

**Friction**: AI is a black box. Can't improve what you can't see.

#### 📖 After Scenario

Sarah opens Chat Debug View and gains visibility into the AI's "thinking":

- Sees actual context sent to the model
- Understands token usage and limits
- Identifies when context was truncated
- Spots opportunities to improve prompts

**Win**: Sarah discovers her file references weren't being included due to size limits. She adjusts her approach.

#### 📋 Steps

1. Open the Command Palette (Ctrl+Shift+P / Cmd+Shift+P)
2. Search for "Developer: Show Copilot Chat Debug View"
3. Position the debug panel where you can see it alongside Chat
4. Start a Copilot Chat conversation
5. In the Debug View, examine:
   - **Request**: What was actually sent to the model
   - **Context**: What files/code were included
   - **Tokens**: How much of the context window was used
   - **Response**: Raw model response before formatting
6. Try a conversation where you include a large file with `#file`
7. Check if the full file was included or truncated
8. Adjust your approach based on what you learn

#### ✅ Success Criteria

- [ ] Opened the Copilot Chat Debug View
- [ ] Examined the context sent with a request
- [ ] Identified token usage for a conversation
- [ ] Found at least one insight to improve your prompting

#### 📚 Official Docs

- [VS Code: Debugging Copilot](https://code.visualstudio.com/docs/copilot/chat/chat-debug-view)

#### 💭 Sarah's Approval

_"Finally, something I can actually debug. This isn't magic—it's engineering. I can work with that."_

#### 🚀 Challenge Extension

Create a "debug log" documenting interesting findings from the Debug View. Share patterns with your team about what makes prompts more or less effective.

---

## Enhancements to Existing Modules

### Exercise 1.6 (Add to Module 01): Next Edit Suggestions — "Copilot Reads Your Mind"

**Priority**: 12
**Tier**: 🆓 Free
**Primary Persona**: Priya (Recent Graduate)

#### 📖 Before Scenario

Priya writes a function, then manually:

- Adds the corresponding test
- Updates the related documentation
- Modifies the sibling function to match

**Friction**: Predictable follow-up edits are tedious.

#### 📖 After Scenario

Priya enables Next Edit Suggestions. After writing `validateEmail()`:

- Copilot suggests: "Add validatePhone() with same pattern?" → Tab
- Then: "Update validation tests to include new function?" → Tab
- Then: "Add JSDoc matching validateEmail format?" → Tab

**Win**: Routine follow-ups happen automatically.

#### 📋 Steps

1. Ensure Next Edit Suggestions is enabled:

   - Open Settings (Ctrl+,)
   - Search for "Copilot next edit"
   - Enable "GitHub Copilot: Next Edit Suggestions"

2. Open a file with related functions (or create one):

```javascript
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
```

3. Position cursor after the function
4. Wait for Copilot to suggest the next logical edit
5. If you see a dim suggestion for a related function (like `validatePhone`), press Tab
6. Continue accepting logical follow-up suggestions
7. Notice how Copilot predicts the pattern

#### ✅ Success Criteria

- [ ] Enabled Next Edit Suggestions in settings
- [ ] Received at least one "next edit" suggestion after completing code
- [ ] Accepted a suggestion that followed the pattern of existing code
- [ ] Understood the difference between inline completions and next edit suggestions

#### 📚 Official Docs

- [VS Code: Next Edit Suggestions](https://code.visualstudio.com/docs/copilot/ai-powered-suggestions#next-edit-suggestions)

#### 💭 Priya's Delight

_"It's like Copilot knows what I'm going to do next. The repetitive parts just... disappear."_

---

### Exercise 4.7 (Add to Module 04): Review Edits Mode — "Multi-File Changes, Controlled"

**Priority**: 13
**Tier**: 🆓 Free
**Primary Persona**: Sarah (Skeptical Senior)

#### 📖 Before Scenario

Sarah uses Agent Mode to refactor across 12 files. Changes are applied immediately. She:

- Can't review before applying
- Has to undo file by file if something's wrong
- Worries about unintended changes in files she didn't expect

**Friction**: All-or-nothing changes are risky.

#### 📖 After Scenario

Sarah uses **Copilot Edits** with review mode:

1. Copilot proposes changes across 12 files
2. Sarah sees a unified diff view of all changes
3. She accepts 10 files, modifies 2, rejects changes to 1
4. Only accepted changes are applied

**Win**: Sarah maintains control. AI proposes, human disposes.

#### 📋 Steps

1. Open Copilot Edits (Ctrl+Shift+I, then select "Edit" mode)
2. Add relevant files to the working set (click + or drag files)
3. Request a multi-file change:

```
Rename the "user" variable to "currentUser" across all files in the working set.
Update any related comments and documentation.
```

4. Review the proposed changes in the Edits panel:

   - Green highlights = additions
   - Red highlights = deletions
   - Click each file to see its changes

5. For each file, choose:

   - ✓ Accept - Apply these changes
   - ✗ Reject - Don't change this file
   - ✏️ Edit - Modify before accepting

6. Click "Apply" to commit accepted changes
7. Verify the changes in your files

#### ✅ Success Criteria

- [ ] Opened Copilot Edits mode
- [ ] Added multiple files to the working set
- [ ] Reviewed proposed changes before applying
- [ ] Accepted some changes while rejecting others
- [ ] Applied changes only to approved files

#### 📚 Official Docs

- [VS Code: Copilot Edits](https://code.visualstudio.com/docs/copilot/copilot-edits)
- [VS Code: Review Edits](https://code.visualstudio.com/docs/copilot/copilot-edits#review-edits)

#### 💭 Sarah's Trust

_"This is how it should work. Show me what you want to do, let me approve it. Now I can use AI for big refactoring without holding my breath."_

---

### Exercise 6.5 (Add to Module 06-collaborative): Prompt Files Deep Dive — "Variables and Templates"

**Priority**: 14
**Tier**: 🆓 Free
**Primary Persona**: Marcus (DevOps Developer)

#### 📖 Before Scenario

Marcus copy-pastes his PR review prompt, manually replacing:

- The PR number
- The focus area
- The team-specific standards

**Friction**: Manual substitution is error-prone and slow.

#### 📖 After Scenario

Marcus creates parameterized prompt files with variables that get filled in automatically or via user input.

#### 📋 Steps

1. Create a parameterized prompt file:

```markdown
## <!-- .github/prompts/pr-review.prompt.md -->

description: Review a pull request against team standards
variables:

- name: pr_number
  description: The PR number to review
- name: focus
  description: Areas to focus on
  default: "security,performance,maintainability"
- name: team
  description: Team name for standards lookup
  default: "platform"

---

# Pull Request Review: #{{pr_number}}

## Focus Areas

Reviewing with emphasis on: {{focus}}

## Team Standards

Apply {{team}} team's coding standards from CONVENTIONS.md

## Review Process

1. **Summary**: Provide a 2-3 sentence summary of what this PR does
2. **Scope Check**: Does the PR do what the description claims?
3. **Standards Compliance**: Check against {{team}} team conventions
4. **Risk Assessment**: Identify potential issues in these areas:
   {{#each focus}}
   - {{this}}
     {{/each}}
5. **Suggestions**: Provide actionable improvement suggestions
6. **Verdict**: APPROVE / REQUEST CHANGES / NEEDS DISCUSSION

## Output Format

Use this structure for findings:

- 🔴 **Blocker**: [issue] → [suggestion]
- 🟡 **Suggestion**: [issue] → [suggestion]
- 🟢 **Nitpick**: [issue] → [suggestion]
```

2. Create additional specialized prompt files:

```markdown
## <!-- .github/prompts/incident-review.prompt.md -->

description: Post-incident code review
variables:

- name: incident_id
  description: Incident ticket ID
- name: affected_service
  description: Service that had the incident

---

# Incident {{incident_id}} Code Review

Reviewing {{affected_service}} for issues related to the incident.

## Analysis Focus

1. What code path led to the incident?
2. What monitoring/alerting gaps exist?
3. What similar patterns exist elsewhere?
4. What preventive measures should we add?
```

3. Use the prompts in Copilot Chat:

```
/pr-review pr_number=1234 focus=security team=payments
```

4. Share prompts via PR, get team feedback

#### ✅ Success Criteria

- [ ] Created a prompt file with multiple variables
- [ ] Used default values for some variables
- [ ] Successfully invoked the prompt with custom values
- [ ] Team can use the same prompt with different inputs

#### 📚 Official Docs

- [VS Code: Prompt File Variables](https://code.visualstudio.com/docs/copilot/copilot-custom-instructions#prompt-file-variables)
- [VS Code: Reusable Prompts](https://code.visualstudio.com/docs/copilot/copilot-custom-instructions#reusable-prompt-files)

#### 💭 Marcus's Efficiency

_"I built this once, now everyone uses it. And when we improve it, everyone gets the improvement. That's leverage."_

---

## Progress Tracking

Use this section to track exercise completion across sessions.

### Module 07: Advanced Agents & Tools

- [x] 7.1 Agents Tutorial (Marcus) — Priority 1 ✅
- [x] 7.2 Language Models (All) — Priority 2 ✅
- [x] 7.3 Tools & MCP + Build Your Own (Sarah) — Priority 3 ✅
- [x] 7.4 Background Agents 🏢 (David) — Priority 4 ✅
- [x] 7.5 Cloud Agents 🏢 (Sarah) — Priority 5 ✅
- [x] 7.6 Custom Agents 💼 (David) — Priority 6 ✅

### Module 09: AI Workflow Optimization

- [x] 9.1 Chat Sessions (Priya) — Priority 7 ✅
- [x] 9.2 Planning (Marcus) — Priority 8 ✅
- [x] 9.3 Checkpoints (Priya) — Priority 9 ✅
- [x] 9.4 Prompt Library (Team) — Priority 10 ✅
- [x] 9.5 Chat Debug View 💼 (Sarah) — Priority 11 ✅

### Enhancements to Existing Modules

- [x] 1.6 Next Edit Suggestions (Priya) — Priority 12 ✅
- [x] 4.7 Review Edits (Sarah) — Priority 13 ✅
- [x] 8.5 Prompt Files Deep Dive (Marcus) — Priority 14 ✅

---

## Housekeeping Notes

### Module Numbering ✅ RESOLVED

Module numbering has been resolved. Current structure:

```
modules/
  00-orientation/
  01-repository-instructions/
  02-custom-prompts/
  03-custom-agents/
  04-custom-instructions/
  05-compounding-value/
  06-collaborative-development-workflows/
  07-agent-fundamentals/
  08-enterprise-agents-debugging/
  09-appendix-a-copilot-web/
  10-appendix-b-copilot-cli/
```

**Remaining Work**: Enhancement exercises for existing modules (1.6, 4.7, 6.5).

---

## Session Continuity Checklist

When resuming work on this plan:

1. [ ] Read this plan.md to restore full context
2. [ ] Check "Progress Tracking" section for current status
3. [ ] Review the next priority exercise to implement
4. [ ] Check "Housekeeping Notes" for any blocking issues
5. [ ] Follow exercise format from [copilot-instructions.md](../.github/copilot-instructions.md)
6. [ ] Update checkboxes as exercises are completed
7. [ ] Update "Last Updated" date at the top of this file

---

## Appendix: Official Documentation Links

### VS Code Copilot Documentation

- [Overview](https://code.visualstudio.com/docs/copilot/overview)
- [Setup](https://code.visualstudio.com/docs/copilot/setup)
- [Quickstart](https://code.visualstudio.com/docs/copilot/getting-started)
- [Chat](https://code.visualstudio.com/docs/copilot/copilot-chat)
- [Inline Suggestions](https://code.visualstudio.com/docs/copilot/ai-powered-suggestions)
- [Copilot Edits](https://code.visualstudio.com/docs/copilot/copilot-edits)
- [Agents](https://code.visualstudio.com/docs/copilot/chat/agents-tutorial)
- [MCP Servers](https://code.visualstudio.com/docs/copilot/chat/mcp-servers)
- [Custom Instructions](https://code.visualstudio.com/docs/copilot/copilot-custom-instructions)
- [Language Models](https://code.visualstudio.com/docs/copilot/language-models)

### GitHub Copilot Documentation

- [About GitHub Copilot](https://docs.github.com/en/copilot/about-github-copilot)
- [Using Copilot](https://docs.github.com/en/copilot/using-github-copilot)
- [Customizing Copilot](https://docs.github.com/en/copilot/customizing-copilot)
- [Managing Copilot](https://docs.github.com/en/copilot/managing-copilot)
- [Copilot Enterprise](https://docs.github.com/en/copilot/overview-of-github-copilot/about-github-copilot-enterprise)

### MCP (Model Context Protocol)

- [MCP Specification](https://modelcontextprotocol.io/)
- [MCP SDK](https://github.com/modelcontextprotocol/sdk)
