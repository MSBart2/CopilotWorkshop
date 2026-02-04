# Exercise 6.2: Automate PR Review Validation

## 🔨 Exercise

### Exercise 6.2: Automate PR Review Validation — "From Manual Checklist to Automated Validation"

**Lead:** Sarah ⭐ | **Support:** David 🤝, Marcus 🤝 | **Time:** 15 min

#### 📖 The Challenge

Sarah has an 8-point checklist for every PR merge: CI passed, all approvals received, no merge conflicts, target branch correct, no failing tests, security checks passed, branch up-to-date, and blocking issues resolved. Every single PR requires her to click through GitHub's UI, check each criterion manually, and document the results. It takes 5 minutes per PR, and she reviews 20-30 PRs per week.

David wants to ensure architectural standards from Module 4's custom instructions are actually being enforced before merge. Marcus needs to verify deployment-blocking issues are resolved before triggering CI/CD. But right now, this validation is manual, error-prone, and time-consuming.

What if Copilot could query GitHub directly and validate all criteria in seconds? The GitHub MCP server makes this possible.

#### 🔄 The Transformation

| Before ❌ | After ✨ |
|-----------|----------|
| Sarah opens PR #47. She clicks the Checks tab (CI status?), Reviews tab (2 approvals?), Commits tab (up-to-date?), Files tab (conflicts?). She opens linked issues to check if they're resolved. She manually types notes: "✓ CI passed, ✓ 2 approvals, ✗ branch outdated." Takes 5 minutes. She misses that a blocking security issue is still open. | Sarah types in Copilot: "Validate PR #47 against merge checklist." Copilot queries GitHub MCP server: CI status, approval count, conflicts, branch status, linked issues, security alerts. Returns full report in 30 seconds: "⚠️ Blocking: Security issue #892 still open." Perfect accuracy, zero human error. |
| **Time:** 5 min per PR<br>**Criteria checked:** 8 items manually<br>**Missed issues:** ~2% of PRs (human error) | **Time:** 30 sec per PR<br>**Criteria checked:** 100% automated<br>**Missed issues:** 0% — comprehensive validation |

#### 🎯 Your Goal

Configure the GitHub MCP server to automatically validate PR readiness against your merge criteria, eliminating manual checklist verification.

#### 📋 Steps

1. **Add GitHub MCP Server Configuration**
   
   Update `.vscode/mcp.json` to add the GitHub server (HTTP transport):
   
   ```json
   {
     "inputs": [
       {
         "type": "promptString",
         "id": "db_path",
         "description": "Path to FanHub SQLite database",
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
       }
     }
   }
   ```
   
   **What this does:**
   - Adds GitHub MCP server using HTTP transport (remote server hosted by GitHub)
   - Uses OAuth authentication (VS Code handles automatically if you're logged in)
   - No local installation required (cloud-hosted server)

2. **Restart the MCP Servers**
   
   In Copilot Chat, use the MCP servers list to restart all servers (or reload VS Code window). You should now see both "fanhub-db" and "github" servers available.
   
   **Expected output:** Both servers show as "Running" in the MCP servers list.

3. **Create PR Validation Prompt**
   
   Create `.github/copilot-prompts/validate-pr.md`:
   
   ```markdown
   # PR Validation Checklist
   
   You are validating a pull request against merge criteria defined in our custom instructions.
   
   Use the GitHub MCP server to check:
   
   1. **CI Status**: All checks passed
   2. **Approvals**: At least 2 approving reviews
   3. **Conflicts**: No merge conflicts
   4. **Branch**: Targeting correct base branch (main/develop)
   5. **Tests**: All test suites passing
   6. **Security**: No unresolved security alerts
   7. **Up-to-date**: Branch is current with base
   8. **Blocking Issues**: All linked blocking issues resolved
   
   For each criterion:
   - ✅ if passes
   - ⚠️ if warning (explain why)
   - ❌ if fails (blocking)
   
   Provide summary: READY TO MERGE or BLOCKED (list blockers).
   ```

4. **Validate a PR**
   
   In Copilot Chat, test the validation:
   
   ```
   @workspace /validate-pr Check PR #47 against our merge checklist. Use GitHub MCP to verify all criteria.
   ```
   
   Or ask for a specific PR's status:
   
   ```
   @workspace #mcp-github What's the status of PR #47? Show me CI results, approvals, and any blocking issues.
   ```
   
   **What to observe:**
   - Copilot invokes GitHub MCP tools automatically
   - Fetches PR status, checks, approvals, issues from GitHub API
   - Returns comprehensive validation report with all 8 criteria
   - Identifies blocking issues Sarah would have to find manually

#### ✅ Success Criteria

- [ ] `.vscode/mcp.json` includes GitHub MCP server configuration
- [ ] GitHub server connects successfully (OAuth authentication works)
- [ ] `.github/copilot-prompts/validate-pr.md` defines PR validation criteria
- [ ] Copilot can query PR status, CI results, approvals, and linked issues
- [ ] Validation report shows all 8 criteria with pass/warn/fail status
- [ ] Sarah: "I can validate PRs in 30 seconds instead of 5 minutes—and I never miss blocking issues"

> 📂 **Compare Your Work**: [`examples/completed-config/`](../../examples/completed-config/) (GitHub MCP examples)

#### 📚 Official Docs

- [GitHub MCP Server](https://github.com/github/github-mcp-server) — Official server documentation with all available tools
- [MCP Servers in VS Code](https://code.visualstudio.com/docs/copilot/customization/mcp-servers#_http-and-server-sent-events-sse-servers) — HTTP transport configuration guide
- [Copilot Custom Prompts](https://code.visualstudio.com/docs/copilot/customization/prompt-files) — How to create reusable prompt files

---

## 🔗 What You Built

**In this module:**
- **GitHub MCP configuration** — HTTP-based connection to GitHub API through Copilot
- `.github/copilot-prompts/validate-pr.md` — Reusable PR validation checklist prompt
- **Automated validation workflow** — 8-point PR checklist verified in 30 seconds

**How it compounds:**

| Previous Modules | This Module | Combined Power |
|------------------|-------------|----------------|
| Module 4: Custom instructions (review standards) | GitHub MCP server | Standards define what to check; MCP automates the checking |
| Module 3: Custom prompts (PR review guide) | Automated PR validation | Prompts guide reviews; MCP fetches live PR data for validation |

**Sarah's insight:** "I documented review standards in Module 4. Now in Module 6, those standards are automatically enforced by querying GitHub directly. What used to be 'Sarah manually checking' is now 'Copilot automatically validating.'"

---

## ➡️ Next Up

**[Exercise 6.3: Validate Show Data Against External APIs](exercise-6.3.md)** — Connect to external APIs to validate FanHub's TV show metadata against authoritative sources.

> *"We're validating code and PRs, but what about our actual data? We have TV show metadata that might be outdated or wrong."*  
> — Elena, realizing MCP can validate data quality against external APIs

---
