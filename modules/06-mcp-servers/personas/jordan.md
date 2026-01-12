# Jordan's Path: MCP Servers

## 🎯 Your Focus: Infrastructure State Awareness

Jordan, this module gives your automation expertise **real-time system visibility**. Instead of Copilot making suggestions blind to your current deployment state, MCP lets it see actual infrastructure before making recommendations.

**Your exercise**: 7.5 (Integrating MCP Into Workflow)  
**Time**: ~25 minutes  
**Theme**: From context-blind suggestions to state-aware automation

---

## Your Journey in This Module

```
Jordan's Arc:
┌─────────────────────────────────────────────────────────────────┐
│  "Copilot suggests scaling during deployments—dangerous!"       │
│                         ↓                                       │
│  Integrates MCP for system state awareness                      │
│                         ↓                                       │
│  "Copilot checks deployment status before making suggestions."  │
└─────────────────────────────────────────────────────────────────┘
```

---

## Understanding MCP for Platform Engineering

### Why MCP Matters for Infrastructure

You've built pipelines, Terraform modules, and deployment automation. But Copilot doesn't know:
- Your current deployment state
- Which pods are running
- What your cluster configuration looks like
- Whether a deployment is in progress

**MCP bridges this gap** by giving Copilot access to your actual systems.

### MCP Server Types Relevant to DevOps

| Server Type | Use Case |
|-------------|----------|
| SQLite | Configuration databases, state files |
| Kubernetes | Cluster state, pod status |
| Cloud providers | AWS/Azure/GCP resource status |
| Custom servers | Internal APIs, deployment systems |

---

## Exercise 6.5: Integrating MCP Into Your Workflow

### 📖 The Story

**Jordan** has seen how MCP gives Copilot data access. Now he's thinking bigger: *"If Copilot can query databases, it should be able to query system state. I want infrastructure suggestions that account for what's actually running."*

The team has MCP servers running. Now they need to integrate MCP into daily workflows, combining it with all the customization tools they've learned.

### ❌ The "Before" — What Frustration Looks Like

Jordan asks Copilot for help with infrastructure:

```
@workspace How should I scale the character service for the traffic spike?
```

Copilot suggests: "Increase replicas to 5"

**The problem**: Copilot doesn't know:
- Current replica count (already at 5?)
- Whether a deployment is in progress
- Resource utilization of existing pods
- Other services competing for resources

Jordan has to manually check kubectl, then decide if Copilot's advice makes sense.

### 🎯 Objective

Create integrated workflows that combine multiple customization types with MCP capabilities.

### 📋 Steps

1. **Review the MCP configuration**
   
   The team already has SQLite MCP configured. View the current setup:
   ```bash
   cat /workspaces/CopilotTraining/.vscode/mcp.json
   ```

2. **Create a data validation agent with MCP**
   
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

4. **Update the customization decision tree**
   
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

### ✅ Success Criteria

- [ ] Created fanhub-validator agent with MCP tools
- [ ] Successfully tested integrated validation workflow
- [ ] Updated customization decision tree with MCP
- [ ] Created AI-STACK.md documenting the complete stack
- [ ] Team understands how all customization types work together

### ✨ The "After" — The Improved Experience

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
│       └── SQLite (database queries)                        │
└─────────────────────────────────────────────────────────────┘
```

### 📚 Official Docs

- [VS Code Docs: Chat Tools](https://code.visualstudio.com/docs/copilot/chat/chat-tools)
- [VS Code Docs: Custom Agents with Tools](https://code.visualstudio.com/docs/copilot/customization/custom-agents)
- [VS Code Docs: MCP Tools in Chat](https://code.visualstudio.com/docs/copilot/chat/mcp-servers#_use-mcp-tools-in-chat)

### 💭 Jordan's Transformation

*"MCP is the missing piece for infrastructure automation. Instructions tell Copilot our standards, Skills encode our domain knowledge, and MCP gives it actual visibility into system state. This isn't just AI-assisted coding—this is AI that understands our running systems. The governance is in place. Power with responsibility."*

---

## 🎯 Jordan's Module Summary

### Your Transformation

| Before | After |
|--------|-------|
| Copilot suggests without system context | MCP provides state awareness |
| Manual kubectl checks before decisions | Integrated data validation |
| Siloed customization tools | Complete AI stack documented |
| Ad-hoc workflows | Systematic MCP integration |

### The Platform Engineer's Win

Your automation expertise is now amplified by:
- **Data validation agents** that query actual databases
- **Complete customization stack** from instructions to MCP
- **Documented AI workflows** the whole team can use
- **Governance patterns** for responsible MCP usage

### Infrastructure Pattern

```
Infrastructure Change Request
       ↓
Custom Instructions (IaC standards)
       ↓
Skills (deployment patterns)
       ↓
MCP (query actual system state)
       ↓
Context-Aware Recommendation
```

---

## ➡️ Continue Your Journey

**Next for Jordan**: [Module 9: Copilot CLI](../09-copilot-cli/README.md) — Command-line AI assistance for shell workflows.

**Also relevant**: [Module 5: Custom Instructions](../04-custom-instructions/README.md) — Your infrastructure patterns work alongside MCP for complete coverage.
