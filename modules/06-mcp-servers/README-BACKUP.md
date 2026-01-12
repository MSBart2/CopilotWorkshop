# Module 7: MCP Servers — Extending Copilot's Reach

## ⏰ Monday 5:00 PM — Giving Copilot Hands

> *"The validator skill knows our data FORMAT is correct, but it can't check if the character actually EXISTS in our database. Copilot is flying blind."*  
> — Elena, hitting the limits of knowledge without action

> *"And when I'm working on infrastructure, Copilot suggests changes without knowing our current deployment state. What if it suggests scaling up during a deployment?"*  
> — Jordan, worried about context-blind suggestions

---

## 🔍 Background: What Is MCP?

### The Problem: Copilot Can't See Beyond Your Editor

You've taught Copilot a lot:
- **Instructions** tell it your coding standards
- **Prompts** give it task templates
- **Agents** let it work autonomously
- **Skills** provide domain expertise

But there's a fundamental limitation: **Copilot can only read files in your editor.**

It can't:
- Query your database to verify a character exists
- Check your deployment status before suggesting infrastructure changes
- Pull metadata from external APIs
- Access your internal documentation systems
- Verify that a referenced ID is valid

**MCP (Model Context Protocol) solves this.**

### What Is MCP?

**MCP is an open standard** that connects AI models to external systems through a unified interface. Think of it like a USB-C port for AI—a standardized way to plug in external capabilities.

| Concept | Analogy |
|---------|---------|
| **MCP Server** | A plugin that provides tools, resources, or prompts |
| **MCP Tools** | Actions Copilot can take (query database, call API, read file) |
| **MCP Resources** | Data Copilot can access (tables, files, configs) |
| **MCP Prompts** | Pre-configured prompts the server provides |

### MCP in the Customization Hierarchy

MCP is different from other customization types—it's about **capabilities**, not knowledge:

| | What It Provides | Example |
|---|-----------------|---------|
| **Instructions** | Knowledge about standards | "Use async/await" |
| **Skills** | Knowledge about domain | "Characters need status field" |
| **MCP** | Ability to DO things | "Query the database and verify character #42 exists" |

Think of it this way:
- **Skills** = Copilot knows your validation rules
- **MCP** = Copilot can actually check the database

### How MCP Works

```
┌─────────────────────────────────────────────────────────────┐
│                    VS Code + Copilot                        │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  "Does character Walter White exist in our DB?"      │   │
│  └─────────────────────────────────────────────────────┘   │
│                           │                                 │
│                           ▼                                 │
│  ┌─────────────────────────────────────────────────────┐   │
│  │           MCP Server: SQLite Database                │   │
│  │  ┌────────────────────────────────────────────┐     │   │
│  │  │  Tool: query_database                       │     │   │
│  │  │  SELECT * FROM characters WHERE name LIKE   │     │   │
│  │  │  '%Walter White%'                           │     │   │
│  │  └────────────────────────────────────────────┘     │   │
│  └─────────────────────────────────────────────────────┘   │
│                           │                                 │
│                           ▼                                 │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  Result: { id: 1, name: "Walter White",              │   │
│  │           status: "deceased", show_id: 1 }           │   │
│  └─────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

1. You ask Copilot a question that needs external data
2. Copilot recognizes an MCP tool can help
3. Copilot calls the MCP server's tool
4. The MCP server executes the action (query, API call, etc.)
5. Results return to Copilot for its response

---

## 📖 The Story So Far

The FanHub team has built impressive AI collaboration:
- **Module 1**: Repository instructions for project context
- **Module 2**: Agent plan mode for systematic thinking
- **Module 3**: Custom prompts for reusable workflows
- **Module 4**: Custom agents for autonomous tasks
- **Module 5**: Custom instructions for file-scoped context
- **Module 6**: Agent Skills for domain expertise

**Elena** is proud of her Bug Reproduction Test Generator skill. It structures tests beautifully—describe blocks, assertions, proper Arrange/Act/Assert. But she's hitting a wall:

> *"The skill teaches Copilot HOW to write tests. But when a user reports 'duplicate character data,' I still have to manually check the database to see what duplicates exist before I can write an accurate test. The skill can't SEE the actual data."*

**Jordan** sees an even bigger pattern:

> *"This is true for everything we do. When I'm working on deployment configs, Copilot doesn't know our current cluster state. When David reviews architecture, Copilot can't see our actual database schema. We're giving Copilot knowledge, but not eyes or hands."*

**This module's mission**: Connect Copilot to external systems using MCP, transforming it from an assistant that *knows* patterns to one that can *query* and *act* on real data.

---

💡 **Plan Mode Integration**: Use plan mode to design your MCP strategy—what systems to connect, what tools to expose, and how to secure access.

---

## 🎯 Learning Objectives

By the end of this module, you will:

- Understand what MCP is and how it extends Copilot's capabilities
- Browse and install MCP servers from the GitHub registry
- Configure MCP servers in workspace `mcp.json` files
- Use MCP tools in Copilot chat and agent mode
- Connect to databases and external APIs via MCP
- Understand security considerations for MCP server trust
- Design an MCP strategy that balances capability with security

**Time**: ~75 minutes  
**Personas**: Jordan (Platform Engineer), Elena (Quality Champion), David (Security Review)

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
- Best for: Project-specific servers (your database, your APIs)

**User Configuration** (VS Code settings):
- Available across all projects
- Personal to you
- Best for: General-purpose servers (GitHub, web search)

### MCP Server Trust

⚠️ **Security First**: MCP servers run code on your machine. Only install servers from trusted sources.

VS Code prompts you to confirm trust before starting any MCP server. Always:
1. Review the publisher
2. Understand what the server can access
3. Check the server configuration

---

## 🔨 Exercises

### Exercise 7.1: Your First Database Query — "Elena Discovers the Duplicate"

#### 📖 The Story

**Elena** (Quality Champion, 8 years) just received a bug report: *"The Breaking Bad character page shows two 'Jesse Pinkman' entries with slightly different bios."*

She has her Bug Reproduction Test Generator skill from Module 6, which helps her write failing tests. But there's a problem: **she needs to know what data is actually in the database** to write an accurate reproduction test.

The old way: Open database client, run queries, take notes, switch back to VS Code, write test.  
**The new way**: Give Copilot database access via MCP.

*"Wait,"* Elena realizes, *"if Copilot can query the database directly, it can see the duplicate Jesse Pinkman records and write a test that reproduces the exact bug state. Let me try this."*

#### ❌ The "Before" — What Frustration Looks Like

Elena asks Copilot to help with the bug:

```
@workspace A user reports seeing duplicate "Jesse Pinkman" entries on the 
Breaking Bad character page. Write a failing test that reproduces this bug.
```

Copilot (using only the Bug Reproduction Test Generator skill): 

```javascript
describe('Characters API - Bug: Duplicate character names', () => {
  it('should prevent duplicate characters in same show', async () => {
    // Arrange: Create duplicate Jesse Pinkman (hypothetical)
    await db.characters.insert({
      name: 'Jesse Pinkman',
      show_id: 1,
      actor_name: 'Aaron Paul'
    });
    // ... generic test that doesn't match actual database state
  });
});
```

**The problem**: Copilot is guessing about the data structure. Elena needs to manually verify:
- Are there actually duplicates in the DB?
- What are the exact IDs?
- What fields differ between them?
- Which quotes reference which duplicate?

She opens her database client, runs `SELECT * FROM characters WHERE name = 'Jesse Pinkman'`, discovers TWO records (IDs 2 and 5), notes the differences, then returns to write the accurate test.

*"There has to be a better way..."*

#### 🎯 Objective

Give Copilot database access using MCP, then watch it query the actual duplicate Jesse Pinkman records and write an accurate bug reproduction test.

**Time**: ~10 minutes to first "wow" moment

#### 📋 Steps

1. **Create a development database**
   
   FanHub includes a setup script that creates a SQLite database with sample data:
   
   ```bash
   bash /workspaces/CopilotTraining/fanhub/backend/src/database/setup-dev-db.sh
   ```
   
   This creates `/workspaces/CopilotTraining/dev-data/fanhub-dev.db` with Breaking Bad, Better Call Saul, The Office, and Stranger Things data.

2. **Configure the SQLite MCP server**
   
   Create `.vscode/mcp.json` in workspace root:
   
   ```bash
   mkdir -p /workspaces/CopilotTraining/.vscode
   
   cat > /workspaces/CopilotTraining/.vscode/mcp.json << 'JSON'
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
   JSON
   ```

3. **Activate the MCP server**
   
   - Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`) → `Developer: Reload Window`
   - After reload, open Command Palette again → `MCP: List Servers`
   - You should see **sqlite** in the list with status "Stopped"
   - Click on **sqlite** to view details, then click **"Start Server"**
   - When prompted for trust, click **"Trust"** to allow the SQLite MCP server
   - The server status should change to **"Running"**
   
   **What just happened?** You gave Copilot the ability to query your FanHub database.
   
   💡 **Troubleshooting**: If the server shows "Stopped" and won't start:
   - Check Output panel (View → Output → select "MCP Servers") for errors
   - Verify the database exists: `ls -la /workspaces/CopilotTraining/dev-data/fanhub-dev.db`
   - Try running manually: `npx -y @modelcontextprotocol/server-sqlite /workspaces/CopilotTraining/dev-data/fanhub-dev.db`

4. **Verify the server is running**
   
   Before testing queries, confirm the server is active:
   - Command Palette → `MCP: List Servers`
   - **sqlite** should show status: **Running** ✅
   
   If it's stopped, start it again from the MCP servers panel.

5. **Quick verification query**
   
   In Copilot Chat, ask:
   ```
   @workspace How many characters do we have for Breaking Bad?
   ```
   
   **Expected**: Copilot should query the database and return: **4 characters**
   
   **If Copilot says "I can't query the database"**: The MCP server isn't running. Go back to step 4 and start the server via `MCP: List Servers`.

6. **🎉 The Magic Moment: Watch Copilot discover the bug**
   
   Now ask Copilot about the bug report:
   
   ```
   @workspace A user reports seeing duplicate "Jesse Pinkman" entries on the 
   Breaking Bad character page. Help me understand what's in the database and 
   write a failing test that reproduces this bug.
   ```
   
   **Watch what happens without you saying "check the database"**:
   - Copilot uses the Bug Reproduction Test Generator skill (testing patterns)
   - Copilot *automatically detects* the SQLite MCP server
   - Copilot **queries the database**: `SELECT * FROM characters WHERE name = 'Jesse Pinkman'`
   - Copilot discovers TWO Jesse Pinkman records (IDs 2 and 5)!
   - Copilot writes a test that reproduces the ACTUAL bug state
   
   ```javascript
   describe('Characters API - Bug: Duplicate Jesse Pinkman records', () => {
     it('should return only one Jesse Pinkman - Bug #142', async () => {
       // Bug context: Database currently has TWO Jesse Pinkman records:
       // - ID 2: "Walt's former student and business partner..."
       // - ID 5: "Walt's former student and partner..." (duplicate!)
       
       // Act: Query for Breaking Bad characters
       const response = await request(app).get('/api/characters?show_id=1');
       
       // Assert: Should only return ONE Jesse Pinkman
       const jesseRecords = response.body.filter(c => c.name === 'Jesse Pinkman');
       expect(jesseRecords).toHaveLength(1);  // FAILS - returns 2!
       
       // Verify which quotes are affected
       const quote1 = await db.quotes.findById(2); // "Yeah, science!" - references ID 2
       const quote2 = await db.quotes.findById(4); // Also Jesse quote - references ID 5!
     });
   });
   ```
   
   **The skill provided the TEST STRUCTURE**, MCP provided the ACTUAL DATA. Together, they created a test that reproduces the exact bug!

7. **Explore the duplicate records yourself**
   
   Now that you've seen Copilot query the database, try it yourself:
   ```
   @workspace Show me all the Jesse Pinkman records in the database. What differences are there between them?
   ```
   
   Copilot should query and show you:
   - ID 2: "Walt's former student and business partner. A small-time methamphetamine manufacturer and dealer."
   - ID 5: "Walt's former student and partner in the methamphetamine business." (shorter bio)
   
   **⚠️ Still not working?** Check that the MCP server is running via `MCP: List Servers` - it should show **Running**, not **Stopped**.

#### ✅ Success Criteria

- [ ] SQLite MCP server installed, **started**, and **trusted**
- [ ] Server shows status "Running" in `MCP: List Servers`
- [ ] Copilot successfully queried the database (character count worked)
- [ ] **Copilot discovered the duplicate Jesse Pinkman records without being told to check**
- [ ] Copilot wrote a test that reproduces the exact bug state
- [ ] Understand that skills + MCP = automatic intelligence (patterns + data)

#### ✨ The "After" — The Transformation

**Before MCP** (5 minutes of context-switching):
1. Copilot generates generic bug repro test
2. Elena opens database client
3. Elena runs `SELECT * FROM characters WHERE name = 'Jesse Pinkman'`
4. Elena discovers TWO records (IDs 2 and 5)
5. Elena notes the differences in their bios
6. Elena returns to VS Code to update the test with actual IDs

**After MCP** (30 seconds):
1. Elena describes the bug report
2. Copilot automatically checks the database
3. Copilot writes a test using the ACTUAL duplicate records
4. Test includes specific IDs, field differences, and affected quotes

**Elena's reaction:**
> "That was INCREDIBLE! I didn't tell Copilot to query the database—it figured out it should because MCP was available. My Bug Reproduction skill taught it HOW to structure tests, MCP gave it access to WHAT data is causing the bug. In 10 minutes I went from manual database queries to automatic bug discovery. This is the future of QA."

#### 📚 Official Docs

- [VS Code Docs: Add an MCP Server](https://code.visualstudio.com/docs/copilot/chat/mcp-servers#_add-an-mcp-server)
- [SQLite MCP Server](https://github.com/modelcontextprotocol/servers/tree/main/src/sqlite)
- [MCP Configuration Format](https://code.visualstudio.com/docs/copilot/chat/mcp-servers#_configuration-format)

#### 💭 Elena's Realization

*"The Bug Reproduction Test Generator skill tells Copilot HOW to structure tests—describe blocks, assertions, test patterns. MCP gives it the ability to SEE what data is actually in the database. The orchestration is automatic—I describe a bug and Copilot figures out how to use both. This doesn't replace my testing expertise, it amplifies it. I can focus on test strategy while Copilot handles the discovery and boilerplate."*

#### 🚀 Challenge Extension

Try investigating other potential data issues to practice MCP + skill integration:

```
@workspace Check if there are any quotes that reference the duplicate Jesse Pinkman records. 
Show me which quotes point to ID 2 vs ID 5.
```

This demonstrates how MCP allows Copilot to explore relationships and dependencies in your data.

```
@workspace Validate this character:

{
  "name": "New Character",
  "show_id": 999,
  "status": "unknown"
}
```

Watch Copilot catch: ❌ show_id doesn't exist, ❌ invalid status enum. All without you saying "check the database."

**Why this matters**: You're seeing AI that makes intelligent decisions about when to query data, combining domain knowledge (skill) with capability (MCP) automatically.

---

### Exercise 7.5: Integrating MCP Into Your Workflow — "The Complete Picture"

#### 📖 The Story

The team has MCP servers running. Now they need to integrate MCP into their daily workflows, combining it with the customization tools they've learned.

*"We have instructions, prompts, agents, skills, AND MCP servers,"* Elena summarizes. *"How do we make them work together?"*

Time to see the complete picture.

#### 🎯 Objective

Create integrated workflows that combine multiple customization types with MCP capabilities.

#### 📋 Steps

1. **Create a data validation agent with MCP**
   
   Create `.github/agents/fanhub-validator.agent.md`:
   ```markdown
   ---
   name: fanhub-validator
   description: Validates FanHub data against schema AND database
   tools:
     - sqlite
   ---
   
   # FanHub Data Validator
   
   You are a data validation specialist. When asked to validate data:
   
   ## Step 1: Schema Validation
   Check the data structure against FanHub's requirements:
   - Characters need: name (string), status (alive|deceased|unknown), show_id (integer)
   - Episodes need: title, season, episode_number, show_id
   - Shows need: title, genre, status
   
   ## Step 2: Database Verification (use SQLite tool)
   - Verify foreign keys exist (show_id points to real show)
   - Check for duplicates or near-duplicates (typos)
   - Validate referential integrity
   
   ## Step 3: Report
   Provide a validation report with:
   - ✅ Passed checks
   - ⚠️ Warnings (possible issues)
   - ❌ Failed checks (must fix)
   
   Always explain WHY something failed and HOW to fix it.
   ```


3. **Test the integrated workflow**
   
   Test the data validator agent:
   ```
   @fanhub-validator Validate this new character data:
   {
     "name": "Gus Fring",
     "show_id": 1,
     "status": "deceased",
     "first_appearance": "S02E11"
   }
   ```
   
   The agent should:
   - Check schema (✅ required fields present)
   - Query database to verify show_id 1 exists
   - Check for existing "Gus Fring" entries
   - Report results

4. **Update the customization map**
   
   Add MCP to your mental model:
   ```
   Do you want this applied AUTOMATICALLY?
   ├── YES → Is it project-wide context?
   │         ├── YES → REPO INSTRUCTIONS
   │         └── NO → Should it apply to specific file types?
   │                   ├── YES → CUSTOM INSTRUCTIONS
   │                   └── NO → Does it need external system access?
   │                             ├── YES → MCP + SKILLS
   │                             └── NO → SKILLS alone
   └── NO → Do you want external system access?
             ├── YES → PROMPTS or AGENTS with MCP tools
             └── NO → PROMPTS or AGENTS without MCP
   ```

5. **Document the complete FanHub AI stack**
   
   Create `fanhub/docs/AI-STACK.md`:
   ```markdown
   # FanHub AI Collaboration Stack
   
   ## Customization Layers
   
   | Layer | Purpose | Files |
   |-------|---------|-------|
   | Repo Instructions | Project context | `.github/copilot-instructions.md` |
   | Custom Instructions | File-type rules | `.github/instructions/*.instructions.md` |
   | Prompts | Task templates | `.github/prompts/*.prompt.md` |
   | Agents | Specialist personas | `.github/agents/*.agent.md` |
   | Skills | Domain knowledge | `.github/skills/*/SKILL.md` |
   | MCP Servers | External system access | `.vscode/mcp.json` |
   
   ## Active MCP Servers
   
   | Server | Purpose | Tools Provided |
   |--------|---------|----------------|
   | SQLite | FanHub database | query, schema inspection |
   
   
   ## Integrated Workflows
   
   | Workflow | Components | Use Case |
   |----------|------------|----------|
   | Data Validation | fanhub-validator agent + SQLite MCP | Validate data against live DB |
   ```

#### ✅ Success Criteria

- [ ] Created fanhub-validator agent with MCP tools
- [ ] Successfully tested integrated validation workflow
- [ ] Created AI-STACK.md documenting the complete stack
- [ ] Team understands how all customization types work together

#### ✨ The "After" — The Improved Experience

The FanHub team now has:
- **Layered customization** from broad context to specific capabilities
- **External system access** through MCP servers
- **Integrated workflows** that combine knowledge (skills) with action (MCP)
- **Documentation** of the complete AI collaboration stack

**The complete picture:**
```
┌─────────────────────────────────────────────────────────────┐
│                     FanHub + Copilot                        │
├─────────────────────────────────────────────────────────────┤
│  KNOWLEDGE LAYER                                            │
│  ├── Repo Instructions (always-on project context)         │
│  ├── Custom Instructions (file-type specific rules)        │
│  └── Skills (domain expertise, loaded when relevant)       │
├─────────────────────────────────────────────────────────────┤
│  TASK LAYER                                                 │
│  ├── Prompts (reusable task templates)                     │
│  └── Agents (specialist personas with tool access)         │
├─────────────────────────────────────────────────────────────┤
│  CAPABILITY LAYER                                           │
│  └── MCP Servers (external system access)                  │
│       ├── SQLite (database queries)                        │
│       └── GitHub (repo status)                             │
└─────────────────────────────────────────────────────────────┘
```

#### 📚 Official Docs

- [VS Code Docs: Chat Tools](https://code.visualstudio.com/docs/copilot/chat/chat-tools)
- [VS Code Docs: Custom Agents with Tools](https://code.visualstudio.com/docs/copilot/customization/custom-agents)
- [VS Code Docs: MCP Tools in Chat](https://code.visualstudio.com/docs/copilot/chat/mcp-servers#_use-mcp-tools-in-chat)

#### 💭 Team Reflection

**Elena**: *"My bug reproduction workflows are finally complete. Copilot knows our testing patterns AND can see actual data issues."*

**Jordan**: *"Infrastructure changes are safer because Copilot sees actual system state."*

**David**: *"The governance is in place. Power with responsibility."*

**Sarah** (joining the conversation): *"OK, I'm impressed. This isn't just 'AI hype'—this is systematic AI collaboration with real capabilities."*

---

## 🧠 Key Takeaways

### What We Learned

1. **MCP extends Copilot's capabilities** — From knowing patterns to seeing data
2. **MCP servers provide tools, resources, and prompts** — Standardized interface to external systems
3. **Security matters** — Only install trusted servers, use input variables for secrets
4. **MCP + Skills = Complete workflows** — Testing patterns plus data access
5. **Governance enables adoption** — Clear policies let teams use MCP confidently

### When to Use MCP

| Scenario | Use MCP? |
|----------|----------|
| Need to verify data against a database | ✅ Yes |
| Need to check deployment/system status | ✅ Yes |
| Need to call external APIs | ✅ Yes |
| Just need coding standards | ❌ No (use Instructions) |
| Just need domain knowledge | ❌ No (use Skills) |
| Need autonomous task execution | ⚠️ Maybe (Agent + MCP) |

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
    "serverName": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@publisher/mcp-server-name", "arg1"],
      "env": {
        "API_KEY": "${input:api-key}"
      }
    }
  },
  "inputs": [
    {
      "type": "promptString",
      "id": "api-key",
      "description": "API Key",
      "password": true
    }
  ]
}
```

### Useful Commands

| Command | Purpose |
|---------|---------|
| `MCP: List Servers` | View and manage MCP servers |
| `MCP: Browse Servers` | Browse GitHub MCP registry |
| `MCP: Reset Trust` | Reset server trust settings |
| `MCP: Reset Cached Tools` | Clear cached tool definitions |

### Resources

- **Official Docs**: [VS Code MCP Servers](https://code.visualstudio.com/docs/copilot/chat/mcp-servers)
- **MCP Protocol**: [modelcontextprotocol.io](https://modelcontextprotocol.io/)
- **Server Registry**: [github.com/mcp](https://github.com/mcp)
- **Server Examples**: [github.com/modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers)

---

*"Instructions tell Copilot what to do. Skills tell it what to know. MCP lets it actually DO things. Together, they transform Copilot from an assistant into a true development partner."*
