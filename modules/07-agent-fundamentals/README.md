# Module 07: Agent Fundamentals

> **From Assistant to Autonomous Partner** — Unlock Copilot's ability to work independently on complex, multi-step tasks while you maintain strategic control.

---

## Overview

This module takes you beyond basic chat interactions into the realm of **autonomous AI assistance**. You'll learn to leverage Agent Mode for complex implementations, select the right AI model for each task, extend Copilot with custom tools via MCP, and create specialized agents that encode your team's expertise.

### The Shift

| Before This Module                     | After This Module                           |
| -------------------------------------- | ------------------------------------------- |
| Copilot suggests code, you assemble it | Copilot implements features end-to-end      |
| One model for everything               | Strategic model selection per task          |
| Limited to code in your workspace      | Copilot queries external systems            |
| Your expertise stays in your head      | Your expertise scales through custom agents |

---

## Learning Objectives

By the end of this module, you will be able to:

1. **Use Agent Mode** to autonomously implement multi-file features
2. **Select appropriate AI models** based on task complexity and requirements
3. **Configure MCP servers** to extend Copilot with external data sources
4. **Build custom MCP servers** for team-specific integrations
5. **Create custom agents** that encode domain expertise
6. **Understand enterprise features** (Background Agents, Cloud Agents) for organizational scale

---

## Prerequisites

- ✅ Module 01: Getting Started (Copilot basics)
- ✅ Module 02: Clarity & Context (understanding how Copilot uses context)
- ✅ Module 03: Clarity & Configuration (custom instructions)
- 🔲 Recommended: Module 06: AI-Assisted Design Thinking

---

## Exercises

### Exercise 7.1: Your First Agent Workflow — "Autonomous Implementation"

**Tier**: 🆓 Free
**Primary Persona**: Marcus (DevOps Developer)
**Time**: 20-30 minutes

#### 📖 The Story

**Meet Marcus.** He's comfortable with infrastructure code but implementing business logic features feels slower. He's been using Copilot Chat to get code suggestions, but it still feels like "fancy autocomplete"—he's constantly copying snippets, creating files manually, and context-switching between tasks.

Today, Marcus discovers Agent Mode, and everything changes.

#### 🎯 Objective

Use Agent Mode to autonomously implement a complete feature across multiple files, including tests.

#### 📋 Before: Try It the Old Way

Before using Agent Mode, experience the friction of the traditional approach:

1. Open Copilot Chat (Ctrl+Shift+I)
2. Ask: "Help me add a health check endpoint that returns service status"
3. Notice what happens:
   - Copilot suggests code in the chat
   - You have to manually create the file
   - You have to copy-paste the code
   - You need to ask separately for tests
   - You need to remember to update any routing/registration

**Document the friction**: How many steps did it take? How many context switches?

#### 📋 After: Agent Mode

Now experience the autonomous approach:

1. Open Copilot Chat (Ctrl+Shift+I)
2. Click the **mode dropdown** at the top of the chat panel
3. Select **"Agent"** mode (or press the keyboard shortcut if available)
4. Enter a comprehensive requirement:

```
Add a /health endpoint to this API that returns JSON with:
- service name and version
- current status (healthy/degraded/unhealthy)
- uptime in seconds
- timestamp of the check

Include unit tests for the endpoint.
Update any necessary routing configuration.
```

5. **Watch Agent Mode work**:

   - It analyzes your project structure
   - Creates the endpoint file
   - Adds route registration
   - Generates test files
   - May run tests to verify

6. **Review before accepting**:

   - Agent Mode shows proposed changes
   - Review each file's changes
   - Accept, modify, or reject individual changes

7. Run the tests to verify everything works

#### ✅ Success Criteria

- [ ] Switched to Agent Mode in Copilot Chat
- [ ] Agent created at least 2 files (endpoint + tests)
- [ ] Agent ran terminal commands (test runner, etc.)
- [ ] Reviewed changes before they were applied
- [ ] Tests pass after accepting the implementation

#### 📚 Official Docs

- [VS Code: Copilot Agent Mode](https://code.visualstudio.com/docs/copilot/chat/agents-tutorial)
- [GitHub Docs: Using Copilot Agents](https://docs.github.com/en/copilot/using-github-copilot/agents)

#### 💭 Marcus's Reaction

_"Wait, it just... did the whole thing? Created the files, wrote the tests, ran them? This is what I thought AI coding would be when I first heard about it. And I still reviewed everything before it was applied."_

#### 🚀 Challenge Extension

Try a more complex task that requires coordination across multiple concerns:

```
Add rate limiting to all API endpoints:
- Configurable limits per route (stored in config)
- Redis-based counter (or in-memory if Redis unavailable)
- Appropriate 429 responses with retry-after header
- Include integration tests
- Update API documentation
```

---

### Exercise 7.2: Model Selection Strategy — "Right Tool for the Job"

**Tier**: 🆓 Free (model availability varies by plan)
**Primary Persona**: All personas (team exercise)
**Time**: 15-20 minutes

#### 📖 The Story

**The team has been using Copilot for a month.** Sarah notices inconsistent results—sometimes suggestions are lightning-fast but shallow, other times they're slow but incredibly thorough. David suspects there's more control available than they're using.

They're right. Different AI models excel at different tasks, and knowing when to switch is a force multiplier.

#### 🎯 Objective

Learn to select AI models strategically based on task requirements.

#### 📋 Before: One Model for Everything

Experience the limitations of using the default model for all tasks:

1. Open Copilot Chat
2. Note which model is currently selected (shown in the dropdown or status area)
3. Try a **simple task**: "Generate a getter and setter for a `userName` property in JavaScript"

   - Note the response time
   - Note the quality

4. Try a **complex task**: "Analyze this code for security vulnerabilities, considering OWASP Top 10, and explain the attack vectors":

```javascript
app.get("/user", (req, res) => {
  const userId = req.query.id;
  const query = `SELECT * FROM users WHERE id = ${userId}`;
  db.query(query, (err, result) => {
    res.send(result);
  });
});
```

- Note the response time
- Note the depth of analysis

**Question**: Did the model feel "right-sized" for both tasks?

#### 📋 After: Strategic Model Selection

Now learn to match models to tasks:

1. **Find the model selector**:

   - In Copilot Chat, look for the model name/dropdown
   - Click to see available models

2. **Understand model categories**:

| Category      | Examples                  | Best For                            | Trade-offs            |
| ------------- | ------------------------- | ----------------------------------- | --------------------- |
| **Fast**      | GPT-4o-mini, Claude Haiku | Simple completions, quick questions | Speed over depth      |
| **Balanced**  | GPT-4o, Claude Sonnet     | Most tasks, good balance            | General purpose       |
| **Reasoning** | o1, Claude Opus           | Complex analysis, architecture      | Slower, more thorough |

3. **Test with the simple task** using a fast model:

   - Select GPT-4o-mini (or equivalent fast model)
   - Ask for the getter/setter again
   - Notice: Fast response, adequate quality for simple task

4. **Test with the complex task** using a reasoning model:

   - Select o1 or equivalent reasoning model
   - Ask for the security analysis again
   - Notice: Slower response, but deeper analysis
   - The reasoning model should catch:
     - SQL injection vulnerability
     - Missing input validation
     - No parameterized queries
     - Potential for data exposure

5. **Create your model selection guide**:

```markdown
## Our Team's Model Selection Guide

### Use Fast Models (GPT-4o-mini) for:

- Generating boilerplate code
- Simple refactoring
- Quick syntax questions
- Getter/setter generation
- Basic documentation

### Use Balanced Models (GPT-4o) for:

- Code explanation
- Bug fixing
- Test generation
- Most daily tasks

### Use Reasoning Models (o1) for:

- Security review
- Architecture decisions
- Complex refactoring
- Performance optimization
- Code review of critical paths
```

#### ✅ Success Criteria

- [ ] Located the model selector in Copilot Chat
- [ ] Successfully switched between at least 2 different models
- [ ] Observed response time differences between fast and reasoning models
- [ ] Identified a task where the reasoning model provided notably deeper analysis
- [ ] Created a personal/team model selection guide

#### 📚 Official Docs

- [VS Code: Language Models](https://code.visualstudio.com/docs/copilot/language-models)
- [GitHub Docs: Copilot Models](https://docs.github.com/en/copilot/using-github-copilot/ai-models/changing-the-ai-model-for-copilot-chat)

#### 💭 David's Realization

_"It's like knowing when to use a scalpel vs. a sledgehammer. I spent 20 years developing that judgment for tools and frameworks—now I apply it to AI model selection too. The junior devs who just use the default for everything are leaving capability on the table."_

#### 🚀 Challenge Extension

Create a team reference card and share it:

1. Document model recommendations for your team's common tasks
2. Include specific examples from your codebase
3. Track which models work best for your domain
4. Review and update quarterly as models improve

---

### Exercise 7.3: Tools & MCP — "Extending Copilot's Reach"

**Tier**: 🆓 Free
**Primary Persona**: Sarah (Skeptical Senior)
**Time**: 30-45 minutes (basic), +30 minutes (build your own)

#### 📖 The Story

**Sarah has been skeptical.** "It's just pattern matching," she says. "It doesn't actually know our systems."

She's partially right. Out of the box, Copilot can only work with code in your workspace. It can't query your internal documentation, check your database schema, or access your team's API specs.

But with MCP (Model Context Protocol), Copilot can reach beyond the workspace—and Sarah's about to see exactly how.

#### 🎯 Objective

Configure MCP servers to extend Copilot with external data sources, then build a simple custom MCP server.

#### 📋 Before: Copilot's Knowledge Limits

Experience what Copilot doesn't know:

1. Open Copilot Chat
2. Ask about something specific to your organization:

   - "What's the authentication flow for our PaymentService?"
   - "What columns are in the users table?"
   - "What's our standard error response format?"

3. Notice: Copilot either:
   - Makes educated guesses based on common patterns
   - Admits it doesn't have that information
   - Provides generic answers that don't match your reality

**The problem**: Copilot is smart about code patterns but ignorant about your specific environment.

#### 📋 After (Part 1): Configure an MCP Server

Extend Copilot with external data access:

1. **Check for MCP support** in your VS Code:

   - Open Settings (Ctrl+,)
   - Search for "MCP"
   - Ensure MCP is enabled

2. **Create MCP configuration**:

Create `.vscode/mcp.json` in your workspace:

```json
{
  "servers": {
    "filesystem": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "${workspaceFolder}/docs"
      ]
    }
  }
}
```

3. **Reload VS Code** to activate the MCP server

4. **Test the integration**:

   - Open Copilot Chat
   - Ask: "Using the filesystem tool, what documentation files are available?"
   - Copilot should now query the actual filesystem

5. **Try a real question**:
   - "Based on the documentation in /docs, what's our API error format?"
   - Copilot now reads your actual docs instead of guessing

#### 📋 After (Part 2): Explore Available MCP Servers

Discover what's available:

1. **Community MCP servers** (install via npx):

   - `@modelcontextprotocol/server-filesystem` - File system access
   - `@modelcontextprotocol/server-fetch` - HTTP requests
   - `@modelcontextprotocol/server-sqlite` - SQLite database queries
   - `@modelcontextprotocol/server-postgres` - PostgreSQL queries

2. **Add a fetch server** for web access:

```json
{
  "servers": {
    "filesystem": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "${workspaceFolder}/docs"
      ]
    },
    "fetch": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-fetch"]
    }
  }
}
```

3. **Test**: Ask Copilot to fetch and summarize a webpage relevant to your project

#### 🚀 Challenge Extension: Build Your Own MCP Server

Create a custom MCP server for your team's specific needs:

**Step 1**: Create the project structure

```bash
mkdir -p tools/mcp-team-docs
cd tools/mcp-team-docs
npm init -y
npm install @modelcontextprotocol/sdk
```

**Step 2**: Create `index.js`:

```javascript
#!/usr/bin/env node
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import fs from "fs/promises";
import path from "path";

// Your team's documentation directory
const DOCS_DIR = process.env.DOCS_PATH || "./docs";

const server = new Server(
  {
    name: "team-docs",
    version: "1.0.0",
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

// Define available tools
server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [
    {
      name: "search_team_docs",
      description: "Search team documentation for specific topics",
      inputSchema: {
        type: "object",
        properties: {
          query: {
            type: "string",
            description: "Search term to find in documentation",
          },
        },
        required: ["query"],
      },
    },
    {
      name: "get_api_spec",
      description: "Get API specification for a service",
      inputSchema: {
        type: "object",
        properties: {
          serviceName: {
            type: "string",
            description:
              "Name of the service (e.g., 'PaymentService', 'UserService')",
          },
        },
        required: ["serviceName"],
      },
    },
  ],
}));

// Handle tool calls
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  if (name === "search_team_docs") {
    try {
      const files = await fs.readdir(DOCS_DIR);
      const results = [];

      for (const file of files) {
        if (file.endsWith(".md")) {
          const content = await fs.readFile(path.join(DOCS_DIR, file), "utf-8");
          if (content.toLowerCase().includes(args.query.toLowerCase())) {
            results.push({
              file,
              preview: content.substring(0, 500) + "...",
            });
          }
        }
      }

      return {
        content: [
          {
            type: "text",
            text:
              results.length > 0
                ? JSON.stringify(results, null, 2)
                : `No documentation found matching "${args.query}"`,
          },
        ],
      };
    } catch (error) {
      return {
        content: [
          { type: "text", text: `Error searching docs: ${error.message}` },
        ],
      };
    }
  }

  if (name === "get_api_spec") {
    // Simulate API spec lookup - replace with your actual data source
    const specs = {
      PaymentService: {
        baseUrl: "/api/v1/payments",
        auth: "Bearer token required",
        endpoints: [
          { method: "POST", path: "/charge", description: "Process a payment" },
          { method: "GET", path: "/{id}", description: "Get payment status" },
        ],
      },
      UserService: {
        baseUrl: "/api/v1/users",
        auth: "Bearer token required",
        endpoints: [
          { method: "GET", path: "/me", description: "Get current user" },
          { method: "PATCH", path: "/me", description: "Update current user" },
        ],
      },
    };

    const spec = specs[args.serviceName];
    return {
      content: [
        {
          type: "text",
          text: spec
            ? JSON.stringify(spec, null, 2)
            : `No API spec found for "${args.serviceName}"`,
        },
      ],
    };
  }

  return {
    content: [{ type: "text", text: `Unknown tool: ${name}` }],
  };
});

// Start the server
const transport = new StdioServerTransport();
await server.connect(transport);
```

**Step 3**: Update `package.json`:

```json
{
  "name": "mcp-team-docs",
  "version": "1.0.0",
  "type": "module",
  "bin": {
    "mcp-team-docs": "./index.js"
  },
  "dependencies": {
    "@modelcontextprotocol/sdk": "^1.0.0"
  }
}
```

**Step 4**: Configure in `.vscode/mcp.json`:

```json
{
  "servers": {
    "team-docs": {
      "command": "node",
      "args": ["${workspaceFolder}/tools/mcp-team-docs/index.js"],
      "env": {
        "DOCS_PATH": "${workspaceFolder}/docs"
      }
    }
  }
}
```

**Step 5**: Test your custom server:

- Reload VS Code
- Ask: "Using team-docs, what's the API spec for PaymentService?"
- Copilot should call your custom tool and return real data

#### ✅ Success Criteria

- [ ] Created `.vscode/mcp.json` configuration
- [ ] Successfully configured at least one MCP server
- [ ] Queried external data through Copilot Chat
- [ ] (Challenge) Created a custom MCP server
- [ ] (Challenge) Custom server responds to queries with real data

#### 📚 Official Docs

- [VS Code: MCP Servers](https://code.visualstudio.com/docs/copilot/chat/mcp-servers)
- [MCP Specification](https://modelcontextprotocol.io/)
- [MCP SDK on GitHub](https://github.com/modelcontextprotocol/sdk)

#### 💭 Sarah's Verdict

_"Okay, THIS is useful. It's not magic—it's just connecting the AI to the right data. I can audit exactly what it accesses, I control what tools are available, and I can see the implementation. This is engineering I can trust."_

---

### Exercise 7.4: Background Agents — "Work While You Wait"

**Tier**: 🏢 **Enterprise Only**

> ⚠️ **Tier Callout**: Background Agents require GitHub Copilot Enterprise. If you don't have Enterprise access, read through this exercise to understand the capability and discuss with your organization whether the feature justifies an upgrade.

**Primary Persona**: David (Seasoned Architect)
**Time**: 30-45 minutes

#### 📖 The Story

**David faces a familiar challenge.** The team needs to migrate the authentication module to a new OAuth2 library. It's a mechanical but extensive change—touching 47 files across 6 services. Even with Agent Mode, David would have to babysit the process, watching VS Code work file by file.

With Background Agents, David can delegate the entire task and continue his architecture work while the AI handles the migration.

#### 🎯 Objective

Use Background Agents to run complex, long-running tasks asynchronously while continuing other work.

#### 📋 Before: Synchronous Agent Work

Experience the limitation of standard Agent Mode:

1. Open a project with a substantial change needed
2. Start Agent Mode with a complex request:
   ```
   Refactor all database access to use the repository pattern.
   Update all services that directly query the database.
   Add appropriate interfaces and implementations.
   Update tests accordingly.
   ```
3. Notice: You're blocked while Agent works
   - Can't use VS Code for other tasks
   - Must wait for completion
   - Long tasks mean long waits

**The friction**: Complex tasks block your entire workflow.

#### 📋 After: Background Agents (Enterprise)

Run agents asynchronously:

1. Open Copilot Chat in Agent Mode
2. Look for the **"Run in Background"** option (Enterprise feature)
3. Submit a complex, multi-file task:

   ```
   Migrate the authentication module from passport.js to our new OAuth2 library.
   - Update all auth middleware
   - Migrate session handling
   - Update all protected routes
   - Run the full test suite
   - Generate a migration summary
   ```

4. Select **"Run in Background"**
5. **Continue your other work**:

   - Open a different project
   - Review PRs
   - Attend meetings
   - The agent runs independently

6. **Receive notification** when complete:

   - "Background task complete: Auth migration"
   - Click to review all changes
   - See the migration summary

7. **Review comprehensively**:
   - All changes shown in unified view
   - Accept, modify, or reject per-file
   - No rush—review at your pace

#### ✅ Success Criteria

- [ ] Identified the "Run in Background" option (Enterprise)
- [ ] Started a background agent task
- [ ] Continued other work while agent ran
- [ ] Received completion notification
- [ ] Reviewed and accepted/rejected changes

#### 📚 Official Docs

- [GitHub Docs: Background Agents](https://docs.github.com/en/copilot/using-github-copilot/using-copilot-coding-agent/using-copilot-coding-agent-to-work-on-a-task)

#### 💭 David's Insight

_"This is what I actually wanted from AI. Not replacement—delegation. I decide WHAT to do at the architectural level. The AI handles the HOW at scale. My judgment about what needs to change is still essential; the mechanical execution is what I'm delegating."_

#### 🚀 Challenge Extension

Identify 3 tasks in your backlog that would benefit from background execution:

1. Large-scale refactoring
2. Migration projects
3. Codebase-wide standard enforcement

Document the expected time savings for your Enterprise evaluation.

---

### Exercise 7.5: Cloud Agents — "Enterprise-Scale AI"

**Tier**: 🏢 **Enterprise Only**

> ⚠️ **Tier Callout**: Cloud Agents require GitHub Copilot Enterprise with organizational configuration. This exercise is primarily for **Enterprise administrators** or those evaluating Enterprise capabilities.

**Primary Persona**: Sarah (Skeptical Senior)
**Time**: 45-60 minutes (admin setup)

#### 📖 The Story

**Sarah leads security for a 200-developer organization.** She's been fielding questions from the CISO: "How do we know what the AI is doing? How do we control what tools developers can use? Can we audit AI-assisted changes?"

These are exactly the questions Cloud Agents answer.

#### 🎯 Objective

Understand how Cloud Agents provide organizational control, policy enforcement, and audit capabilities for AI-assisted development.

#### 📋 Before: Individual Configuration Chaos

The current state without Cloud Agents:

- Each developer configures their own Copilot setup
- No consistency in available tools or MCP servers
- Some developers use unapproved external services
- No centralized visibility into AI usage
- Audit requests require manual investigation

**The risk**: Shadow AI usage without organizational oversight.

#### 📋 After: Cloud Agent Governance

With Cloud Agents (Enterprise), organizations gain:

1. **Policy Enforcement**

   - Approved MCP servers only
   - Required custom instructions applied to all users
   - Tool allowlists and blocklists

2. **Audit Capabilities**

   - Centralized logging of agent activities
   - What tools were used, when, by whom
   - What changes were proposed and accepted

3. **Compliance Controls**
   - Data residency requirements
   - Sensitive code handling policies
   - Integration with existing security tools

#### 📋 Steps (For Enterprise Administrators)

1. **Access Enterprise Settings**:

   - Navigate to GitHub Enterprise Cloud
   - Go to Organization Settings → Copilot

2. **Configure Organization Policies**:

   ```yaml
   # Example policy configuration
   copilot:
     agents:
       allowed_tools:
         - filesystem
         - fetch
         - sqlite
       blocked_tools:
         - arbitrary-code-execution

     mcp_servers:
       approved:
         - name: "team-docs"
           source: "internal"
         - name: "postgres"
           source: "official"
       require_approval: true

     audit:
       log_all_requests: true
       log_tool_usage: true
       retention_days: 90
   ```

3. **Set Up Audit Logging**:

   - Enable comprehensive logging
   - Configure log export to SIEM
   - Set up alerts for policy violations

4. **Deploy to Pilot Group**:

   - Start with a small team
   - Gather feedback on policy impact
   - Iterate before organization-wide rollout

5. **Roll Out Organization-Wide**:
   - Communicate changes to developers
   - Provide documentation on approved tools
   - Establish process for tool approval requests

#### ✅ Success Criteria

- [ ] Reviewed Cloud Agent capabilities for your organization
- [ ] (Admin) Configured organization-wide Copilot policies
- [ ] (Admin) Enabled audit logging for agent activities
- [ ] (Admin) Established tool approval process
- [ ] Developers automatically inherit organization policies

#### 📚 Official Docs

- [GitHub Docs: Copilot Enterprise](https://docs.github.com/en/copilot/overview-of-github-copilot/about-github-copilot-enterprise)
- [GitHub Docs: Managing Copilot Policies](https://docs.github.com/en/copilot/managing-copilot/managing-copilot-for-your-enterprise/managing-policies-for-copilot-in-your-enterprise)

#### 💭 Sarah's Approval

_"Finally, enterprise controls that make sense. I can tell the CISO exactly what tools are approved, show audit logs of AI usage, and enforce our security policies. This isn't developers running wild with AI—it's governed AI assistance."_

---

### Exercise 7.6: Custom Agents — "Your Team's Expert"

**Tier**: 💼 **Business/Enterprise**

> ⚠️ **Tier Callout**: Custom Agents require Business or Enterprise tier. Free tier users can read through this exercise to understand the capability and prepare agent definitions for when they upgrade.

**Primary Persona**: David (Seasoned Architect)
**Time**: 45-60 minutes

#### 📖 The Story

**David has a problem that success created.** He's the go-to architect for his organization, and his expertise is in high demand. Junior developers constantly ask him to review code for architectural consistency. He spends hours each week catching the same issues:

- Wrong error handling patterns
- Missing observability hooks
- Incorrect service boundaries
- Violations of team conventions

His knowledge doesn't scale. He's a bottleneck.

Custom Agents let David encode his expertise into an AI assistant that the entire team can access.

#### 🎯 Objective

Create a custom agent that encodes domain expertise and team standards, making specialized knowledge available to all team members.

#### 📋 Before: Expertise Bottleneck

Experience the current state:

1. A junior developer writes a new service
2. They submit a PR
3. David reviews and finds 5 issues:

   - Error responses don't follow RFC 7807
   - Missing OpenTelemetry traces
   - Direct database queries (should use repository)
   - Synchronous calls where async is required
   - Missing input validation

4. David writes detailed feedback
5. Developer fixes and resubmits
6. **Repeat for every PR, every developer**

**The cost**: David's time, delayed PRs, repeated feedback.

#### 📋 After: Expertise That Scales

Create a custom agent that catches issues before PR:

**Step 1**: Create the agent definition directory

```bash
mkdir -p .github/agents
```

**Step 2**: Create `arch-review.md`:

````markdown
## <!-- .github/agents/arch-review.md -->

name: arch-review
description: Architecture review agent with team standards

---

# Architecture Review Agent

## Your Role

You are a senior architecture reviewer for our microservices platform. You have deep expertise in distributed systems, observability, and API design. Your job is to review code for architectural consistency and help developers follow our established patterns.

## Our Technology Stack

- **Runtime**: Node.js with TypeScript
- **Databases**: PostgreSQL (primary), Redis (caching)
- **Messaging**: RabbitMQ for async communication
- **Observability**: OpenTelemetry for traces, Prometheus for metrics
- **API Format**: REST with OpenAPI specs

## Standards to Enforce

### 1. Error Handling (CRITICAL)

All errors MUST follow RFC 7807 Problem Details format:

```json
{
  "type": "https://api.example.com/errors/validation",
  "title": "Validation Error",
  "status": 400,
  "detail": "The 'email' field is not a valid email address",
  "instance": "/users/123",
  "traceId": "abc-123-def"
}
```
````

**Violations to catch**:

- Raw error messages in responses
- Missing status codes
- No correlation/trace IDs
- Stack traces exposed to clients

### 2. Observability (REQUIRED)

All public methods MUST emit OpenTelemetry traces:

```typescript
// CORRECT
async function processPayment(paymentId: string): Promise<Payment> {
  return tracer.startActiveSpan("processPayment", async (span) => {
    span.setAttribute("payment.id", paymentId);
    try {
      // ... implementation
      return payment;
    } catch (error) {
      span.recordException(error);
      throw error;
    } finally {
      span.end();
    }
  });
}
```

**Violations to catch**:

- Public methods without trace spans
- Missing span attributes for key business data
- Unrecorded exceptions
- Database queries without trace context

### 3. Data Access (REQUIRED)

All database access MUST go through the repository pattern:

```typescript
// CORRECT
class UserRepository {
  async findById(id: string): Promise<User | null> {
    return this.db.user.findUnique({ where: { id } });
  }
}

// WRONG - Direct database access in service
class UserService {
  async getUser(id: string) {
    return this.db.user.findUnique({ where: { id } }); // VIOLATION
  }
}
```

### 4. Service Communication (REQUIRED)

- **Commands** (state changes): MUST use async messaging (RabbitMQ)
- **Queries** (reads): MAY use synchronous HTTP

**Violations to catch**:

- HTTP POST/PUT/DELETE between services (should be async)
- Synchronous calls in transaction paths

### 5. Input Validation (REQUIRED)

All API endpoints MUST validate input before processing:

```typescript
// CORRECT
const createUserSchema = z.object({
  email: z.string().email(),
  name: z.string().min(1).max(100),
});

app.post("/users", async (req, res) => {
  const validated = createUserSchema.parse(req.body);
  // ... process validated data
});
```

## Review Output Format

For each issue found, provide:

### [Severity Emoji] Issue Title

**Location**: `file.ts:lineNumber`

**Violation**: Which standard was violated

**Code**:

```typescript
// The problematic code
```

**Why This Matters**: Business/technical impact

**Suggested Fix**:

```typescript
// Corrected code
```

---

Use these severity levels:

- 🔴 **Critical**: Security risk, data integrity, or production stability
- 🟡 **Major**: Violates core patterns, will cause problems at scale
- 🟢 **Minor**: Style/convention, good to fix but not blocking

## What NOT to Review

- Code formatting (handled by prettier)
- Import ordering (handled by eslint)
- Variable naming style (handled by conventions)

Focus on **architectural** concerns only.

```

**Step 3**: Register the agent (check VS Code settings for agent registration)

**Step 4**: Use the agent:

```

@arch-review Review this service implementation:

#file:services/payment-service.ts

````

**Step 5**: Test with intentionally flawed code:

```typescript
// Test code with violations
class PaymentService {
  constructor(private db: Database) {}

  async processPayment(req: Request, res: Response) {
    const { amount, userId } = req.body;

    // Violation: Direct DB access
    const user = await this.db.query(`SELECT * FROM users WHERE id = ${userId}`);

    // Violation: No tracing
    const payment = await this.db.insert('payments', { amount, userId });

    // Violation: Raw error response
    if (!payment) {
      res.status(500).send('Payment failed');
      return;
    }

    // Violation: Sync HTTP for command
    await fetch('http://notification-service/send', {
      method: 'POST',
      body: JSON.stringify({ userId, message: 'Payment received' })
    });

    res.json(payment);
  }
}
````

**Expected Output**: Agent identifies all 4+ violations with specific fixes.

#### ✅ Success Criteria

- [ ] Created `.github/agents/` directory
- [ ] Created a comprehensive agent definition with team standards
- [ ] Agent correctly identifies architectural violations
- [ ] Agent provides actionable fix suggestions
- [ ] Team members can invoke the agent from their setup

#### 📚 Official Docs

- [VS Code: Custom Agents](https://code.visualstudio.com/docs/copilot/copilot-customization)
- [GitHub Docs: Customizing Copilot](https://docs.github.com/en/copilot/customizing-copilot)

#### 💭 David's Relief

_"I'm not replaced. I'm MULTIPLIED. Every developer now has access to my 20 years of patterns—24/7, without waiting for my code review. I can focus on the genuinely hard architectural decisions while the agent catches the routine violations. My expertise finally scales."_

#### 🚀 Challenge Extension

Create a suite of specialized agents for your team:

1. **@security-review**: Focus on OWASP Top 10, authentication, authorization
2. **@perf-review**: Focus on N+1 queries, caching opportunities, async patterns
3. **@api-design**: Focus on REST best practices, OpenAPI compliance, versioning

---

## Key Takeaways

### The Progression of AI Assistance

| Level                  | Capability                      | Your Role                 |
| ---------------------- | ------------------------------- | ------------------------- |
| **Inline Suggestions** | Copilot completes your code     | You write, it assists     |
| **Chat**               | Copilot answers questions       | You ask, it responds      |
| **Agent Mode**         | Copilot implements features     | You specify, it executes  |
| **Background Agents**  | Copilot works asynchronously    | You delegate, it delivers |
| **Custom Agents**      | Copilot embodies your expertise | You teach, it applies     |

### When to Use Each Tool

- **Agent Mode**: Multi-file features, complete implementations
- **Model Selection**: Match model capability to task complexity
- **MCP Tools**: Extend Copilot with external data sources
- **Background Agents**: Long-running tasks (Enterprise)
- **Custom Agents**: Encode team expertise and standards

### The Expert's Advantage

These advanced features don't replace expertise—they **amplify** it:

- Your judgment guides model selection
- Your architecture informs custom agents
- Your standards become automated enforcement
- Your time shifts from routine to strategic

---

## ➡️ Next Steps

Continue to [Module 08: Enterprise Agents & Debugging](../08-enterprise-agents-debugging/README.md) to learn:

- Background Agents — Work while you're away
- Cloud Agents — Enterprise-scale AI processing
- Custom Agents — Encode team expertise
- Checkpoints — Safe rollback for agent work
- Chat Debug View — Understanding AI behavior

---

## Quick Reference

### Keyboard Shortcuts

| Action            | Windows/Linux | Mac         |
| ----------------- | ------------- | ----------- |
| Open Copilot Chat | Ctrl+Shift+I  | Cmd+Shift+I |
| New Chat Session  | Ctrl+L        | Cmd+L       |
| Accept Suggestion | Tab           | Tab         |
| Reject Suggestion | Esc           | Esc         |

### MCP Configuration Location

```
.vscode/mcp.json           # Workspace-level MCP servers
```

### Custom Agent Location

```
.github/agents/            # Team-shared agent definitions
.vscode/agents/            # Personal agent definitions
```
