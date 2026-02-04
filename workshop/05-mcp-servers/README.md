# Module 5: MCP Servers

## ⏰ — The Context Problem

> *"Copilot is great at code generation, but it has no idea what's actually in our database. I keep having to explain our schema over and over."*
> — Marcus, debugging database queries for the third time today

---

## 📖 Story So Far

In **Module 4**, the team built custom Agent Skills that enabled domain-specific capabilities—TV show data validation, effort estimation, and API endpoint design.

Those skills were powerful for code generation and analysis, but they were limited to the files in the workspace. When Marcus needed to query the FanHub database, Copilot couldn't see the actual data. Elena wanted to validate that test data matched production schema, but had to manually copy schema definitions into chat.

Now, in **Module 5**, they discover **MCP servers**—a way to give Copilot direct access to external systems like databases, APIs, and other tools through a standardized protocol.

💡 **Integration Note:** This module extends Agent Skills by connecting Copilot to external resources. While skills operate on workspace code, MCP servers bring live data, databases, and external APIs into the conversation.

---

⚠️ **Prerequisites**:
- Complete [Module 00: Orientation](../00-orientation/README.md)
- Complete [Module 04: Agent Skills](../04-agent-skills/README.md) — Understanding custom tools helps contextualize MCP capabilities
- Docker installed and running (for database connection exercise)
- VS Code 1.101+ (for MCP support)

---

## 🧠 Mindful Moment: From Static to Dynamic Context

**Traditional thinking:** *"AI assistants work with files I give them—if it's not in the workspace, it doesn't exist."*

**AI-native thinking:** *"AI assistants can connect to live systems—databases, APIs, version control—treating external resources as first-class context sources."*

This isn't just about convenience. MCP servers transform Copilot from a code generator that works with static files into an intelligent agent that understands your entire technical ecosystem—your database schema, your production data, your CI/CD status, your GitHub issues. It's the difference between asking someone to fix a query without seeing the database versus giving them direct database access.

---

## 💡 Understanding MCP (Model Context Protocol)

**MCP is an open standard** that allows AI assistants to communicate with external tools and services through a unified interface. Think of it as a universal adapter that lets Copilot talk to databases, APIs, file systems, and other resources without needing custom integration code for each one.

**How it works:**
- **MCP Servers** provide tools (functions), resources (data sources), and prompts (workflows) that Copilot can use
- **Transport methods** define how VS Code communicates with the server (stdio for local processes, HTTP for remote services)
- **Standard protocol** means any MCP server works with any MCP-compatible client (VS Code, Claude Desktop, Cursor, etc.)

**Why this matters for FanHub:**
- Connect directly to the PostgreSQL database to query schema and data
- Access GitHub repositories to understand project context
- Query external APIs without manual integration code
- All through natural language in Copilot chat

---

## What You'll Learn

**Model Context Protocol (MCP) servers** extend GitHub Copilot with live access to external systems—databases, APIs, version control, and other tools. You'll configure a local MCP server using the stdio transport method to query the FanHub database, and measure how direct database access eliminates context-switching and manual schema lookups.

**Time:** ~67 minutes | **Exercises:** 5

---

## 📋 Exercise Planning

The exercises below use MCP servers to solve real problems by connecting Copilot to external systems. Each exercise demonstrates different transport methods (stdio, HTTP) and integration patterns.

| # | Exercise | Lead | Support | Problem | Solution | Key Metrics | Artifacts |
|---|----------|------|---------|---------|----------|-------------|-----------|
| [5.1](exercise-5.1.md) | Connect to FanHub Database | Marcus | Elena, David | Manual schema lookups: 2-5 min per query, context switching, outdated schema docs | Configure SQLite MCP server using stdio to query FanHub DB directly in chat | 5→0 min (eliminated), 0 context switches, live schema access | `.vscode/mcp.json`, verified database queries |
| [5.2](exercise-5.2.md) | Automate PR Review Validation | Sarah | David, Marcus | Manual PR checklist validation: 5 min per PR, checking 8 criteria, human error on blocking issues | GitHub MCP server (HTTP) to auto-validate PR status, CI checks, approvals against Module 1 standards | 5 min→30 sec, 100% criteria coverage, 0 missed blocking issues | GitHub MCP config, automated PR validation queries |
| [5.3](exercise-5.3.md) | Validate Backend API Against Data Rules | Elena | Marcus | Manual API contract validation: 10 min per cycle, manual curl testing, API contract breaks caught in staging | Custom MCP server queries FanHub backend API, validates responses against Module 4's tv-show-data-validator skill rules | 10 min→30 sec, 95%+ contract compliance, catches violations in development | FanHub API MCP server, API contract validation prompt |
| [5.4](exercise-5.4.md) | Rich UI with MCP Apps | David | Marcus, Sarah | Data visualization requires export: 15 min to chart query results, multiple context switches, no interactivity | MCP Apps render interactive visualizations (charts, flame graphs, tables) directly in chat | 15 min→30 sec, 0 context switches, full interactivity | MCP Apps demo config, interactive visualizations |
| [5.5](exercise-5.5.md) | Bootstrap with Awesome Copilot MCP | Marcus | Sarah, Elena | Writing customizations from scratch: 15-20 min per file, unaware of community solutions, reinventing patterns | Awesome Copilot MCP searches/saves community instructions, prompts, and chat modes directly from chat | 20 min→2 min per customization, 100% awareness of options, instant installation | Awesome Copilot MCP config, community customizations |

---

> 💡 **Quickstart Tip:** If you want to rapidly bootstrap your Copilot customization, start with **Exercise 5.5 (Awesome Copilot MCP)**. It lets you search and install community-curated instructions, prompts, and chat modes from the [Awesome GitHub Copilot Customizations](https://github.com/microsoft/awesome-copilot) repository—covering concepts from Modules 1, 3, 4, and 6 without writing everything from scratch.

---

## 📚 What This Feature Does

**MCP Servers:** Connect GitHub Copilot to external systems (databases, APIs, tools) through a standardized protocol, enabling natural language interaction with live resources instead of static files.

**When to use it:** When you need Copilot to understand live data (database queries, API responses, CI/CD status) or when your work spans systems beyond the workspace (GitHub repositories, production databases, external services).

**What you'll build:**
- **MCP configuration file** — Defines server connections and authentication for your workspace
- **Database connection** — stdio-based MCP server connecting Copilot to the FanHub PostgreSQL database
- **Verified queries** — Natural language database queries that prove live schema access
- **Interactive visualizations** — MCP Apps that render charts, flame graphs, and data tables directly in chat

**Official Documentation:**
- 📖 [MCP Servers in VS Code](https://code.visualstudio.com/docs/copilot/customization/mcp-servers) — Configuration, transport methods, and usage patterns
- 📖 [GitHub MCP Server](https://github.com/github/github-mcp-server) — Official GitHub MCP server with repository, issues, and PR tools
- 📖 [Model Context Protocol](https://modelcontextprotocol.io/) — Protocol specification and server ecosystem
- 📖 [MCP Apps Announcement](https://blog.modelcontextprotocol.io/posts/2026-01-26-mcp-apps/) — Rich interactive UI in MCP responses
- 📖 [MCP Apps SDK](https://github.com/modelcontextprotocol/ext-apps/) — Build custom visualizations for MCP servers
- 📖 [MCP Server Development Guide](https://code.visualstudio.com/docs/copilot/guides/mcp-developer-guide) — Building custom MCP servers

> 💡 **Important for this module:** The **stdio transport method** is essential because it enables secure, local communication between VS Code and MCP servers running as processes. This enables database connections without exposing credentials over the network.

---

## 🔑 Key Concepts

### MCP Architecture

MCP consists of three main components that work together to extend Copilot's capabilities:

**MCP Servers**
- **Purpose**: Provide tools, resources, and prompts to AI assistants
- **Value**: Standardized interface means one server works with multiple AI tools
- **Result**: Write once, use everywhere (VS Code, Claude Desktop, Cursor, etc.)

**Transport Methods**
- **stdio (Standard I/O)**: Local processes communicate through stdin/stdout—ideal for databases, local tools
- **HTTP/SSE**: Remote services communicate over HTTP—ideal for cloud APIs, hosted services
- **Value**: Choose the right method for your use case (security, performance, deployment)

**MCP Capabilities**
- **Tools**: Functions Copilot can invoke (query database, create GitHub issue, send API request)
- **Resources**: Data sources Copilot can read (database tables, files, API endpoints)
- **Prompts**: Pre-configured workflows Copilot can execute (debugging workflow, analysis template)

**MCP Apps (VS Code 1.109+)**
- **Purpose**: Render rich, interactive UI directly in Copilot Chat responses
- **Value**: Visualize data without exporting—charts, flame graphs, tables, forms all render in chat
- **Result**: Zero context switching for data visualization, full interactivity (pan, zoom, click, filter)
- **Examples**: Performance flame graphs, data charts, sortable tables, hierarchical tree views

### How They Work Together

1. **Configuration** — You define MCP servers in `.vscode/mcp.json` (workspace) or user settings (global)
2. **Discovery** — When you start the server, VS Code discovers available tools, resources, and prompts
3. **Invocation** — In chat, Copilot automatically selects relevant tools or you explicitly reference them with `#`
4. **Execution** — MCP server executes the tool (database query, API call) and returns results to Copilot
5. **Context** — Copilot uses the live data to generate better responses, code, or analysis

> 📂 **Reference Examples**: The [`examples/completed-config/`](../../examples/completed-config/) folder contains sample MCP configurations:
> - Database connections (PostgreSQL, MySQL, SQLite)
> - GitHub integration examples
> - API service configurations

---

## ➡️ Next Module

**[Module 6: Custom Agents](../06-custom-agents/README.md)** — Build specialized agents that combine multiple capabilities (skills + MCP servers) into domain-specific assistants.

> *"We have skills, we have MCP servers, we have prompts... what if we combined them into a single 'FanHub Expert' agent that understands our entire stack?"*
> — Sarah, realizing the full potential of customization

---

## 📌 Practices Used

| Practice | How It Applied in This Module |
|----------|-------------------------------|
| 📚 **Live Context** | MCP servers provide real-time data access, eliminating outdated documentation |
| 🎯 **Tool Integration** | Standardized protocol means consistent tool usage patterns across all MCP servers |
| 🔄 **Iterative Validation** | Test MCP connections with simple queries before building complex workflows |

---

## 🎭 Behind the Scenes

*For those who want to understand the deeper mechanics:*

### How stdio Transport Works

When you configure an MCP server with stdio transport, VS Code:

1. **Spawns a process**: Starts the server command (e.g., `docker run`, `npx`, `python`) as a child process
2. **Establishes pipes**: Creates stdin/stdout pipes for JSON-RPC communication
3. **Sends handshake**: Exchanges protocol version and capability information
4. **Discovers tools**: Requests list of available tools, resources, and prompts from the server
5. **Routes requests**: When Copilot invokes a tool, VS Code sends JSON-RPC request via stdin
6. **Returns results**: Server executes the tool, sends JSON-RPC response via stdout

**Why stdio instead of HTTP?**
- No network exposure (more secure for local databases)
- No port conflicts or firewall issues
- Process lifecycle tied to VS Code (automatic cleanup)
- Lower latency for local operations

### Security Model

MCP servers run with your local permissions:
- **Database credentials** pass through environment variables (never exposed in config)
- **VS Code prompts** for trust confirmation before starting a new MCP server
- **Input variables** can mask sensitive values (API keys, passwords)
- **Read-only mode** available for servers that modify data

**Key Takeaway:** stdio MCP servers are ideal for local development tools (databases, file systems, local APIs), while HTTP transport suits remote services (GitHub API, cloud databases, SaaS integrations). Choose transport based on security, deployment, and latency requirements.

---
