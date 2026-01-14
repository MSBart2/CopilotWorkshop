# Module 6: MCP Servers — Extending Copilot's Reach

## ⏰ Monday 4:30 PM — Giving Copilot Hands

> *"The validator skill knows our data FORMAT is correct, but it can't check if the character actually EXISTS in our database. For Character Detail v2 to work perfectly, Copilot needs to SEE our actual data."*  
> — Elena, thinking ahead to Module 07

---

## 🔍 What Is MCP?

### The Problem: Copilot Can't See Beyond Your Editor

You've taught Copilot a lot:
- **Instructions** (Module 01) tell it your coding standards
- **Custom Instructions** (Module 04) give it file-specific patterns
- **Skills** (Module 05) provide domain expertise
- **Prompts** (Module 03) give it task templates  

But there's a fundamental limitation: **Copilot can only read files in your editor.**

It can't query your database, check deployment status, or call external APIs.

**MCP (Model Context Protocol) solves this.**

### What Is MCP?

**MCP is an open standard** that connects AI models to external systems through a unified interface. Think of it like a USB-C port for AI—a standardized way to plug in external capabilities.

| Concept | Analogy |
|---------|---------|
| **MCP Server** | A plugin that provides tools, resources, or prompts |
| **MCP Tools** | Actions Copilot can take (query database, call API) |
| **MCP Resources** | Data Copilot can access (tables, files, configs) |

### MCP vs Other Customization Types

| | What It Provides | Example |
|---|-----------------|---------|
| **Instructions** | Knowledge about standards | "Use async/await" |
| **Skills** | Knowledge about domain | "Characters need status field" |
| **MCP** | Ability to DO things | "Query the database and verify character #42 exists" |

Think of it this way:
- **Skills** = Copilot knows your validation rules
- **MCP** = Copilot can actually check the database

---

## 🎯 Learning Objectives

By the end of this module, you will:

- Understand what MCP is and how it extends Copilot's capabilities
- Configure MCP servers in workspace `mcp.json` files
- Use MCP tools in Copilot chat and agent mode
- Connect to databases via MCP
- Understand security considerations for MCP server trust

**Time**: ~45 minutes  
**Personas**: Elena (data validation), Marcus (infrastructure)

---

## 📚 Key Concepts

### MCP Server Types

**Stdio Servers** (most common):
- Run as local processes
- Communicate via standard input/output
- Example: SQLite, filesystem, local tools

**HTTP/SSE Servers**:
- Connect over network
- Can be remote services
- Example: External APIs, cloud services

### Configuration Locations

**Workspace Configuration** (`.vscode/mcp.json`):
- Specific to this project
- Shared with team via version control
- Best for: Project-specific servers

**User Configuration** (VS Code settings):
- Available across all projects
- Personal to you
- Best for: General-purpose servers

### MCP Server Trust

⚠️ **Security First**: MCP servers run code on your machine. Only install servers from trusted sources.

VS Code prompts you to confirm trust before starting any MCP server.

---

## 🔨 Exercises

> 📂 **Full exercise content**: [EXERCISES.md](./EXERCISES.md)

### Exercise Overview

| Exercise | Persona | Focus | Time |
|----------|---------|-------|------|
| 6.1 | Elena | First database query — discover duplicates | 15 min |
| 6.5 | Team | Integrating MCP into workflow | 20 min |

### Quick Links

- [Exercise 6.1: Your First Database Query](./EXERCISES.md#exercise-61-your-first-database-query--elena-discovers-the-duplicate) — Elena gives Copilot database access
- [Exercise 6.5: Integrating MCP Into Workflow](./EXERCISES.md#exercise-65-integrating-mcp-into-your-workflow--the-complete-picture) — Complete picture

---

## 🧑‍💼 Choose Your Path

Different roles can focus on different aspects of MCP:

| Your Role | Recommended Focus | Start Here |
|-----------|------------------|------------|
| **QA/Testing** | Data validation with DB access | [Elena's Path](./personas/elena.md) |
| **Platform Engineer** | Infrastructure state awareness | [Marcus's Path](./personas/jordan.md) |

---

## 🧠 Key Takeaways

### What We Learned

1. **MCP extends Copilot's capabilities** — From knowing patterns to seeing data
2. **MCP servers provide tools, resources, and prompts** — Standardized interface
3. **Security matters** — Only install trusted servers
4. **MCP + Skills = Complete workflows** — Testing patterns plus data access

### When to Use MCP

| Scenario | Use MCP? |
|----------|----------|
| Need to verify data against a database | ✅ Yes |
| Need to check deployment/system status | ✅ Yes |
| Need to call external APIs | ✅ Yes |
| Just need coding standards | ❌ No (use Instructions) |
| Just need domain knowledge | ❌ No (use Skills) |

### MCP in the Customization Hierarchy

```
┌─────────────────────────────────────────────────────────────┐
│  WHAT COPILOT KNOWS                                         │
│  ├── Repo Instructions → Project context                   │
│  ├── Custom Instructions → File-specific rules             │
│  └── Skills → Domain expertise                             │
├─────────────────────────────────────────────────────────────┤
│  WHAT COPILOT CAN DO                                        │
│  ├── Prompts → Task templates (you trigger)                │
│  ├── Agents → Autonomous workflows (persona + tools)       │
│  └── MCP → External system access (databases, APIs, etc.)  │
└─────────────────────────────────────────────────────────────┘
```

---

## 📚 Quick Reference

### MCP Configuration

**Workspace config** (`.vscode/mcp.json`):
```json
{
  "servers": {
    "sqlite": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-sqlite", "path/to/db.sqlite"]
    }
  }
}
```

> 📂 **Compare Your Work**: See [`examples/completed-config/.vscode/mcp.json`](../../examples/completed-config/.vscode/mcp.json) for a reference MCP configuration.

### Useful Commands

| Command | Purpose |
|---------|---------|
| `MCP: List Servers` | View and manage MCP servers |
| `MCP: Browse Servers` | Browse GitHub MCP registry |
| `MCP: Reset Trust` | Reset server trust settings |

### Resources

- **Official Docs**: [VS Code MCP Servers](https://code.visualstudio.com/docs/copilot/chat/mcp-servers)
- **MCP Protocol**: [modelcontextprotocol.io](https://modelcontextprotocol.io/)
- **Server Registry**: [github.com/mcp](https://github.com/mcp)

---

## ➡️ Next Steps

You've given Copilot hands to reach external systems! **Now comes THE PAYOFF.**

**Continue to**: [Module 7: Custom Agents](../07-custom-agents/README.md) — With ALL context in place (instructions, skills, MCP), watch an autonomous agent build Character Detail v2 with full power

> *"We've spent all day building context. Now let's see what an agent can do with ALL of that in place."*  
> — David, ready for the payoff

**Review if needed**: [Module 5: Agent Skills](../05-agent-skills/README.md) — Skills work together with MCP for complete workflows
