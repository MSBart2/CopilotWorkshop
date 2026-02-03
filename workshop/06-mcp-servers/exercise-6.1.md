# Exercise 6.1: Connect to FanHub Database

## 🔨 Exercise

### Exercise 6.1: Connect to FanHub Database — "Eliminate Schema Context Switching"

**Lead:** Marcus ⭐ | **Support:** Elena 🤝, David 🤝 | **Time:** 15 min

#### 📖 The Challenge

Marcus is tired of the constant context switching. Every time he needs to write a database query, he has to open a separate database client, remember the connection details, look up table names, check column types, and then switch back to VS Code to write the code. It takes 2-5 minutes per query just to get the context right.

Elena faces the same problem when writing tests. She needs to know what fields exist in the `characters` table to create realistic test fixtures, but the schema documentation is three months out of date. David wants to validate his architecture decisions against the actual production schema, but pulling up a database GUI breaks his flow.

Right now, database schema knowledge lives outside the editor. Marcus wastes 15-20 minutes per day just context-switching to look up schema details. What if Copilot could query the database directly?

#### 🔄 The Transformation

| Before ❌ | After ✨ |
|-----------|----------|
| Marcus needs to write a query joining `shows`, `episodes`, and `characters`. He opens TablePlus, connects to the dev database, clicks through three tables to find the foreign key columns, takes a screenshot, switches back to VS Code, and writes the query from memory. Takes 5 minutes. | Marcus types in Copilot chat: "Show me the schema for shows, episodes, and characters tables with their relationships." Copilot queries the database via MCP and displays the exact schema with foreign keys. Marcus writes the perfect query in 30 seconds. |
| **Time:** 2-5 min per query<br>**Context switches:** 2-3 per query<br>**Schema errors:** ~12% of queries need correction | **Time:** 0 min (eliminated)<br>**Context switches:** 0<br>**Schema errors:** 0% — live schema validation |

#### 🎯 Your Goal

Configure the SQLite MCP server to give Copilot direct access to the FanHub database, enabling natural language schema queries without leaving VS Code.

#### 📋 Steps

1. **Create MCP Configuration File**
   
   In the workspace root, create `.vscode/mcp.json`:
   
   ```json
   {
     "servers": {
       "sqlite": {
         "type": "stdio",
         "command": "npx",
         "args": [
           "-y",
           "@modelcontextprotocol/server-sqlite",
           "/workspaces/CopilotTraining/dev-data/fanhub-dev.db"
         ]
       }
     }
   }
   ```
   
   **What this does:**
   - Defines an MCP server named "sqlite" using stdio transport
   - Uses the official SQLite MCP server from npm
   - Points to the development database at `dev-data/fanhub-dev.db`
   - `npx -y` automatically installs the server if not present
   
   > 📂 **Reference**: See [`examples/completed-config/.vscode/mcp.json`](../../examples/completed-config/.vscode/mcp.json) for a working example

2. **Verify Development Database Exists**
   
   The development database is already set up at:
   ```
   /workspaces/CopilotTraining/dev-data/fanhub-dev.db
   ```
   
   This contains sample TV show data for testing. You can verify it exists:
   ```bash
   ls -lh /workspaces/CopilotTraining/dev-data/fanhub-dev.db
   ```
   
   **Expected output:** File exists, typically a few KB to MB in size.

3. **Start the MCP Server**
   
   Open Copilot Chat (Ctrl+Alt+I), toggle to **Agent mode**, and look for the MCP servers list. You should see "sqlite" listed but not started.
   
   Click the start/refresh button to initialize the MCP server.
   
   VS Code will start the MCP server process and discover its tools. Look for confirmation that the server started successfully.

4. **Query the Database Schema**
   
   In Copilot Chat, try these queries:
   
   ```
   @workspace #mcp-sqlite Show me the schema for the characters table
   ```
   
   ```
   @workspace #mcp-sqlite What are all the tables in the database?
   ```
   
   ```
   @workspace #mcp-sqlite Show me the foreign key relationships between shows, episodes, and characters
   ```
   
   **What to observe:**
   - Copilot invokes the SQLite MCP server tools
   - Database schema returns directly in chat
   - No context switching to external database tools
   - Schema is always current (live database access)

#### ✅ Success Criteria

- [ ] `.vscode/mcp.json` exists with sqlite server configuration
- [ ] MCP server starts successfully when you toggle to Agent mode
- [ ] Copilot can query table schemas (characters, shows, episodes, etc.)
- [ ] Database queries return live schema information without leaving VS Code
- [ ] Marcus: "I can write queries without opening TablePlus—saves me 5 minutes per query"

> 📂 **Compare Your Work**: [`examples/completed-config/.vscode/mcp.json`](../../examples/completed-config/.vscode/mcp.json)

#### 📚 Official Docs

- [MCP Servers in VS Code](https://code.visualstudio.com/docs/copilot/customization/mcp-servers) — Complete guide to MCP configuration and stdio transport
- [SQLite MCP Server](https://github.com/modelcontextprotocol/servers/tree/main/src/sqlite) — Official SQLite server documentation and tool reference
- [Agent Mode in VS Code](https://code.visualstudio.com/docs/copilot/chat/mcp-servers#_use-mcp-tools-in-chat) — How to use MCP tools with agents

---

## 🔗 What You Built

**In this module:**
- `.vscode/mcp.json` — MCP configuration file connecting Copilot to FanHub dev database via stdio
- **Live database access** — Natural language queries against `dev-data/fanhub-dev.db`, no context switching

**How it compounds:**

| Previous Modules | This Module | Combined Power |
|------------------|-------------|----------------|
| Module 5: Agent Skills (data validator) | MCP database access | Skills validate code structure; MCP validates against live schema |
| Module 4: Custom instructions (standards) | MCP database queries | Instructions guide code style; MCP ensures schema compliance |

**Marcus's insight:** "Before, I had to remember or look up schema details. Now Copilot knows the database better than I do—and it's always current."

---

## ➡️ Next Up

**[Exercise 6.2: Automate PR Review Validation](exercise-6.2.md)** — Connect to GitHub API to automatically validate PRs against Module 4's code review standards.

> *"Database access is great, but what about connecting to GitHub? I still manually check PR status, CI results, and approvals before merging."*  
> — Sarah, realizing MCP can automate her entire review checklist

---
