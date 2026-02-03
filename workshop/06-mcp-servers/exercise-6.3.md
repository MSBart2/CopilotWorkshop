# Exercise 6.3: Validate Backend API Against Data Rules

## 🔨 Exercise

### Exercise 6.3: Validate Backend API Against Data Rules — "From Static Validation to Runtime Testing"

**Lead:** Elena ⭐ | **Support:** Marcus 🤝 | **Time:** 15 min

#### 📖 The Challenge

Elena built the `tv-show-data-validator` Agent Skill in Module 5. It validates show data structure—required fields, valid date ranges, proper status values. But it only validates *static data* (files, database schemas, test fixtures).

The real problem: **What if the backend API doesn't match the validation rules?**

Elena discovers this gap when Marcus deploys new backend code that returns shows with `status: 'airing'` instead of the documented `status: 'running'`. The validator says data should use 'running', but the API returns 'airing'. Frontend breaks. Tests didn't catch it because they validated *static fixtures*, not the *live API*.

Currently, testing API contract compliance requires:
1. Start the backend server locally (2 minutes)
2. Manually curl endpoints and inspect responses (3 minutes per endpoint)
3. Compare JSON structure against validation rules by eye (5 minutes)
4. Repeat for 8+ endpoints

**Total: 10+ minutes per validation cycle, prone to human error, often skipped due to time pressure**

What if Elena's validator skill could be enhanced with MCP to query the *live backend API* and validate responses automatically?

#### 🔄 The Transformation

| Before ❌ | After ✨ |
|-----------|----------|
| Elena needs to validate that `/api/shows` endpoint matches her data rules. She starts backend (`npm start` in terminal), opens another terminal, runs `curl http://localhost:3001/api/shows`, copies response to file, manually checks each field: ✓ title exists, ✓ start_year is number, ❌ wait, status is 'airing' not 'running'—that violates the rule! Checks 3 more endpoints. Takes 10 minutes, easy to miss issues. | Elena asks Copilot: `@workspace Use #tv-show-data-validator rules with #mcp-fanhub-api to validate /api/shows endpoint matches our data model.` Copilot queries live backend via HTTP MCP, validates response against skill's rules, reports: `⚠️ 3/12 shows have status: 'airing' (should be 'running', 'ended', 'cancelled', or 'upcoming')`. 30 seconds, zero manual work. |
| **Time:** 10 min per validation cycle<br>**Errors caught:** ~60% (manual inspection)<br>**API contract breaks:** Caught in staging/prod | **Time:** 30 sec per validation<br>**Errors caught:** 95%+ (automated rule checking)<br>**API contract breaks:** Caught in development |

**Impact:**
- **Time saved:** 9.5 min per validation × 15 validations/sprint = **142 minutes (2.4 hours) per sprint**
- **Quality improvement:** Catch API contract breaks before staging deployment
- **Skill amplification:** Module 5 skill validates static data, MCP enhances it to validate runtime APIs

#### 🎯 Your Goal

Configure an HTTP MCP server to query FanHub's backend API and automatically validate responses against the data rules from Elena's `tv-show-data-validator` skill, catching API contract breaks before deployment.

#### 📋 Steps

1. **Create Custom HTTP MCP Server for FanHub Backend**
   
   Create `mcp-servers/fanhub-api-server.js`:
   
   ```javascript
   #!/usr/bin/env node
   
   // MCP server that wraps FanHub's backend API
   // Enables Copilot to query live API endpoints for validation
   
   const http = require('http');
   
   const API_BASE_URL = process.env.FANHUB_API_URL || 'http://localhost:3001';
   
   function queryAPI(endpoint) {
     return new Promise((resolve, reject) => {
       const url = `${API_BASE_URL}${endpoint}`;
       
       http.get(url, (res) => {
         let data = '';
         res.on('data', chunk => data += chunk);
         res.on('end', () => {
           if (res.statusCode >= 400) {
             reject(new Error(`API returned ${res.statusCode}: ${data}`));
           } else {
             resolve(JSON.parse(data));
           }
         });
       }).on('error', reject);
     });
   }
   
   // Stdio MCP protocol handler
   const readline = require('readline');
   const rl = readline.createInterface({
     input: process.stdin,
     output: process.stdout,
     terminal: false
   });
   
   rl.on('line', async (line) => {
     try {
       const request = JSON.parse(line);
       
       if (request.method === 'tools/list') {
         const response = {
           tools: [
             {
               name: 'query_shows',
               description: 'Get all shows from FanHub backend API',
               inputSchema: {
                 type: 'object',
                 properties: {}
               }
             },
             {
               name: 'query_show_by_id',
               description: 'Get single show with full details',
               inputSchema: {
                 type: 'object',
                 properties: { 
                   id: { type: 'string', description: 'Show ID' }
                 },
                 required: ['id']
               }
             },
             {
               name: 'query_characters',
               description: 'Get all characters from FanHub backend API',
               inputSchema: {
                 type: 'object',
                 properties: {
                   show_id: { type: 'string', description: 'Filter by show ID (optional)' }
                 }
               }
             }
           ]
         };
         console.log(JSON.stringify(response));
         return;
       }
       
       if (request.method === 'tools/call') {
         const tool = request.params.name;
         const args = request.params.arguments || {};
         
         let result;
         if (tool === 'query_shows') {
           result = await queryAPI('/api/shows');
         } else if (tool === 'query_show_by_id') {
           result = await queryAPI(`/api/shows/${args.id}/full`);
         } else if (tool === 'query_characters') {
           const endpoint = args.show_id 
             ? `/api/characters?show_id=${args.show_id}`
             : '/api/characters';
           result = await queryAPI(endpoint);
         } else {
           throw new Error(`Unknown tool: ${tool}`);
         }
         
         console.log(JSON.stringify({ result }));
       }
     } catch (error) {
       console.error(JSON.stringify({ error: error.message }));
     }
   });
   
   console.error('FanHub API MCP Server started (listening on stdio)');
   console.error(`Backend URL: ${API_BASE_URL}`);
   ```
   
   Make it executable:
   ```bash
   chmod +x mcp-servers/fanhub-api-server.js
   ```

2. **Update MCP Configuration**
   
   Update `.vscode/mcp.json` to add FanHub API server:
   
   ```json
   {
     "inputs": [
       {
         "type": "promptString",
         "id": "db_path",
         "description": "Path to FanHub SQLite database",
         "password": false
       },
       {
         "type": "promptString",
         "id": "fanhub_api_url",
         "description": "FanHub Backend API URL (default: http://localhost:3001)",
         "password": false
       }
     ],
     "servers": {
       "fanhub-db": {
         "type": "stdio",
         "command": "npx",
         "args": ["-y", "@modelcontextprotocol/server-sqlite", "${input:db_path}"],
         "env": {}
       },
       "github": {
         "type": "http",
         "url": "https://api.githubcopilot.com/mcp/"
       },
       "fanhub-api": {
         "type": "stdio",
         "command": "node",
         "args": ["./mcp-servers/fanhub-api-server.js"],
         "env": {
           "FANHUB_API_URL": "${input:fanhub_api_url}"
         }
       }
     }
   }
   ```

3. **Create API Validation Prompt**
   
   Create `.github/copilot-prompts/validate-api-contract.md`:
   
   ```markdown
   # API Contract Validation
   
   You are validating FanHub's backend API responses against domain rules.
   
   **Your task:**
   1. Use MCP server (#mcp-fanhub-api) to query live backend endpoints
   2. Apply validation rules from #tv-show-data-validator skill
   3. Report any violations of data model constraints
   
   **Validation checklist:**
   - ✅ All required fields present
   - ✅ Field types match schema (string, number, date)
   - ✅ Enum values match allowed values (e.g., status must be 'running', 'ended', 'cancelled', 'upcoming')
   - ✅ Foreign key references are valid
   - ✅ Date constraints respected (start_year <= end_year)
   
   **Report format:**
   ```
   Endpoint: /api/shows
   Total records: 12
   
   ✅ All records have required fields (title, start_year)
   ⚠️ 3 records violate status constraint:
      - Show ID 5: status='airing' (should be 'running'|'ended'|'cancelled'|'upcoming')
      - Show ID 8: status='airing'
      - Show ID 12: status='airing'
   ✅ All date constraints satisfied
   
   SUMMARY: 1 violation type found across 3 records
   ```
   
   If all validations pass, report: **API CONTRACT VALIDATED ✅**
   ```

4. **Start Backend and Validate**
   
   First, ensure backend is running:
   ```bash
   cd fanhub/backend
   npm install
   npm start
   ```
   
   Then restart VS Code to reload MCP servers and test validation:
   
   ```
   @workspace /validate-api-contract Check if /api/shows endpoint matches our #tv-show-data-validator rules. Use #mcp-fanhub-api to query the live API.
   ```
   
   Or validate multiple endpoints:
   
   ```
   @workspace Use #mcp-fanhub-api and #tv-show-data-validator to validate:
   1. /api/shows endpoint
   2. /api/characters endpoint
   Report any violations of data model rules.
   ```
   
   **What to observe:**
   - Copilot queries live backend via custom MCP server
   - Applies validation rules from Module 5 Agent Skill
   - Catches API contract breaks (e.g., wrong status values, missing fields)
   - Elena validates APIs without manual curl/inspection

#### ✅ Success Criteria

- [ ] `mcp-servers/fanhub-api-server.js` exists with tools to query backend API
- [ ] `.vscode/mcp.json` includes FanHub API server configuration
- [ ] `.github/copilot-prompts/validate-api-contract.md` defines validation workflow
- [ ] Backend server is running on `localhost:3001`
- [ ] Copilot can query live API and apply tv-show-data-validator rules
- [ ] Validation reports catch API contract violations (e.g., invalid status values)
- [ ] Elena: "I validate APIs in 30 seconds instead of 10 minutes of manual curl testing"

> 📂 **Compare Your Work**: [`examples/completed-config/`](../../examples/completed-config/) (custom MCP server examples)

#### 📚 Official Docs

- [MCP Servers in VS Code](https://code.visualstudio.com/docs/copilot/customization/mcp-servers#_standard-io-stdio-servers) — Building custom stdio MCP servers
- [Model Context Protocol Spec](https://modelcontextprotocol.io/docs/concepts/architecture) — Protocol architecture and tool definition
- [Agent Skills Documentation](https://code.visualstudio.com/docs/copilot/customization/agent-skills) — How skills and MCP servers work together

---

## 🔗 What You Built

**In this module:**
- `mcp-servers/fanhub-api-server.js` — Custom MCP server wrapping FanHub's backend API
- **FanHub API MCP configuration** — Stdio server querying local development API
- `.github/copilot-prompts/validate-api-contract.md` — API + skill validation workflow
- **Skill amplification** — Module 5 skill validates static data; MCP validates runtime APIs

**How it compounds:**

| Previous Modules | This Module | Combined Power |
|------------------|-------------|----------------|
| Module 5: tv-show-data-validator skill | FanHub API MCP server | Skill defines rules, MCP validates live API against them |
| Module 6.1: Database MCP | API MCP | Compare database schema vs. API responses |
| Module 3: Custom prompts | API validation prompt | Automated contract testing workflow |

**The compounding insight:** Each customization layer multiplies the value of previous layers. Elena's validator skill from Module 5 was valuable for static validation. Adding MCP in Module 6 makes it 20x more valuable—now it validates *runtime behavior* automatically.

**Elena's transformation:**
> "In Module 5, I built validation rules for our data model. But rules in a file don't catch API bugs. Now with MCP, those same rules validate the live backend—catching contract breaks before they reach staging. The skill defined 'what good looks like'; MCP proves the API delivers it."

**Marcus's insight:**
> "This caught the `status: 'airing'` bug in development. Would've broken frontend in staging. Now Elena's validation runs before every deploy—backend can't violate data contracts."

---

## ➡️ Next Module

**[Module 7: Custom Agents](../07-custom-agents/README.md)** — Combine Agent Skills, MCP servers, and prompts into specialized domain-specific agents.

> *"We have database access, GitHub integration, external APIs, custom skills, and prompts. What if we bundled all the FanHub-specific capabilities into a single 'FanHub Expert' agent?"*  
> — Sarah, seeing the bigger picture

---
