# Elena's Path: MCP Servers

## 🎯 Your Focus: Data Validation with Database Access

Elena, this module gives your testing expertise **eyes into the actual data**. You've built skills that teach Copilot testing patterns—now MCP lets Copilot actually query the database to find the bugs you're testing for.

**Your exercise**: 7.1 (Your First Database Query)  
**Time**: ~20 minutes  
**Theme**: From manually checking data to automatic discovery

---

## Your Journey in This Module

```
Elena's Arc:
┌─────────────────────────────────────────────────────────────────┐
│  "I have to manually check the database to write accurate tests"│
│                         ↓                                       │
│  Connects Copilot to SQLite via MCP                             │
│                         ↓                                       │
│  "Copilot found the duplicate records and wrote the test!"      │
└─────────────────────────────────────────────────────────────────┘
```

---

## Exercise 6.1: Your First Database Query — "Elena Discovers the Duplicate"

### 📖 The Story

**Elena** (Quality Champion, 8 years) just received a bug report: *"The Breaking Bad character page shows two 'Jesse Pinkman' entries with slightly different bios."*

She has her Bug Reproduction Test Generator skill from Module 6, which helps her write failing tests. But there's a problem: **she needs to know what data is actually in the database** to write an accurate reproduction test.

The old way: Open database client, run queries, take notes, switch back to VS Code, write test.  
**The new way**: Give Copilot database access via MCP.

### ❌ The "Before" — What Frustration Looks Like

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

She opens her database client, runs `SELECT * FROM characters WHERE name = 'Jesse Pinkman'`, discovers TWO records (IDs 2 and 5), notes the differences, then returns to write the accurate test.

*"There has to be a better way..."*

### 🎯 Objective

Give Copilot database access using MCP, then watch it query the actual duplicate Jesse Pinkman records and write an accurate bug reproduction test.

### 📋 Steps

1. **Create a development database**
   
   FanHub includes a setup script that creates a SQLite database with sample data:
   
   ```bash
   bash /workspaces/CopilotTraining/fanhub/backend/src/database/setup-dev-db.sh
   ```
   
   This creates `/workspaces/CopilotTraining/dev-data/fanhub-dev.db` with sample TV show data.

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
   
   - Command Palette (`Ctrl+Shift+P`) → `Developer: Reload Window`
   - After reload: Command Palette → `MCP: List Servers`
   - Click on **sqlite** → **"Start Server"**
   - When prompted for trust, click **"Trust"**
   - Server status should change to **"Running"**

4. **Verify the server is running**
   
   In Copilot Chat, ask:
   ```
   @workspace How many characters do we have for Breaking Bad?
   ```
   
   **Expected**: Copilot should query the database and return: **4 characters**

5. **🎉 The Magic Moment: Watch Copilot discover the bug**
   
   Now ask Copilot about the bug report:
   
   ```
   @workspace A user reports seeing duplicate "Jesse Pinkman" entries on the 
   Breaking Bad character page. Help me understand what's in the database and 
   write a failing test that reproduces this bug.
   ```
   
   **Watch what happens**:
   - Copilot uses the Bug Reproduction Test Generator skill (testing patterns)
   - Copilot *automatically detects* the SQLite MCP server
   - Copilot **queries the database**: `SELECT * FROM characters WHERE name = 'Jesse Pinkman'`
   - Copilot discovers TWO Jesse Pinkman records (IDs 2 and 5)!
   - Copilot writes a test using the ACTUAL bug state

6. **Explore the duplicate records**
   
   ```
   @workspace Show me all the Jesse Pinkman records in the database. 
   What differences are there between them?
   ```
   
   Copilot should query and show you the two records with different bios.

### ✅ Success Criteria

- [ ] SQLite MCP server installed, **started**, and **trusted**
- [ ] Server shows status "Running" in `MCP: List Servers`
- [ ] Copilot successfully queried the database
- [ ] **Copilot discovered the duplicate Jesse Pinkman records automatically**
- [ ] Copilot wrote a test that reproduces the exact bug state

### ✨ The "After" — The Transformation

**Before MCP** (5 minutes of context-switching):
1. Copilot generates generic bug repro test
2. Elena opens database client
3. Elena runs manual query
4. Elena discovers duplicates, notes differences
5. Elena returns to VS Code to update test

**After MCP** (30 seconds):
1. Elena describes the bug report
2. Copilot automatically checks the database
3. Copilot writes a test using the ACTUAL duplicate records

### 📚 Official Docs

- [VS Code Docs: Add an MCP Server](https://code.visualstudio.com/docs/copilot/chat/mcp-servers#_add-an-mcp-server)
- [SQLite MCP Server](https://github.com/modelcontextprotocol/servers/tree/main/src/sqlite)

### 💭 Elena's Transformation

*"That was INCREDIBLE! I didn't tell Copilot to query the database—it figured out it should because MCP was available. My Bug Reproduction skill taught it HOW to structure tests, MCP gave it access to WHAT data is causing the bug. In 10 minutes I went from manual database queries to automatic bug discovery. This is the future of QA."*

---

## 🎯 Elena's Module Summary

### Your Transformation

| Before | After |
|--------|-------|
| Manually query database before writing tests | Copilot queries automatically |
| Context-switch between DB client and editor | Stay in one tool |
| Generic tests that guess at data | Tests using actual bug state |
| 5+ minutes per bug investigation | 30 seconds |

### The Quality Champion's Win

Your Bug Reproduction Test Generator skill now has **data access**:
- **Skill**: Knows HOW to structure bug reproduction tests
- **MCP**: Knows WHAT data is actually in the database
- **Together**: Automatic bug discovery and accurate test generation

### Skills + MCP = Complete Workflows

```
Bug Report → Copilot → Skill (test structure) + MCP (data query) → Accurate Test
```

The orchestration is automatic—you describe a bug and Copilot figures out how to use both.

---

## ➡️ Continue Your Journey

**Next for Elena**: [Module 10: Agentic SDLC](../10-agentic-sdlc/README.md) — See how MCP-enabled testing fits into the full development lifecycle.

**Also relevant**: [Module 5: Agent Skills](../05-agent-skills/README.md) — Your Bug Reproduction skill works alongside MCP for complete coverage.
