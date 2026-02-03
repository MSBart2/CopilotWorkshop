# Exercise 12.2: Compliance Audit Trail

## 🔨 Exercise

### Exercise 12.2: Compliance Audit Trail — "From Manual Log Reconstruction to Automated Evidence"

**Lead:** Marcus ⭐ | **Support:** Elena 🤝 | **Time:** 15 min

#### 📖 The Challenge

Marcus used to dread compliance audits. Every quarter, the audit team would ask: "Show us all code changes made by AI assistants in the last 90 days. Who requested them? What files were modified? Were there any denied operations?" Answering required manually reconstructing events from git history, Copilot usage reports, and team Slack conversations. **It took 20 minutes per audit just to gather the data**—and even then, coverage was maybe 70% because not everything left a clear trail.

Elena faces a related problem: when a test fails in production that worked in dev, she needs to know "what changed and why?" If Copilot made the modification, there's no structured record of the original prompt, the reasoning, or alternative approaches that were considered. Debugging becomes archaeology—reading commits and hoping the message explains the AI's context.

Both need the same thing: **a structured audit trail that captures every agent session, user prompt, and tool execution in a queryable format**. Not scattered across multiple systems, not requiring manual reconstruction—just a single JSON Lines log file they can grep, jq, or import into analysis tools.

#### 🔄 The Transformation

| Before ❌                                                                                                                                                                                                | After ✨                                                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| Auditor asks "Show all AI-assisted database migrations in Q4." Marcus spends 20 minutes correlating git history, Copilot dashboard, and Slack threads. Produces incomplete list covering ~70% of events. | Auditor asks "Show all AI-assisted database migrations in Q4." Marcus runs: `jq 'select(.tool.name=="run_terminal_command" and (.tool.arguments.command                                   | contains("migration")))' logs/audit.jsonl`. Gets complete results in 2 minutes. |
| **Manual work:** 20 min per audit<br>**Coverage:** 70% (best effort)<br>**Format:** Unstructured notes<br>**Queryability:** Requires human interpretation                                                | **Manual work:** 2 min per query<br>**Coverage:** 100% (every session logged)<br>**Format:** JSON Lines (machine-readable)<br>**Queryability:** Standard tools (jq, awk, SQL if imported) |

#### 🎯 Your Goal

Implement comprehensive audit logging using multiple hook types (`sessionStart`, `userPromptSubmitted`, `preToolUse`, `postToolUse`, `sessionEnd`) to create a complete, queryable record of all agent activity.

#### 📋 Steps

1. **Create the audit hooks configuration**

   Create `.github/hooks/audit.json`:

   ```json
   {
     "hooks": [
       {
         "type": "sessionStart",
         "command": ".github/hooks/scripts/log-session-start.sh",
         "timeoutSec": 5
       },
       {
         "type": "userPromptSubmitted",
         "command": ".github/hooks/scripts/log-prompt.sh",
         "timeoutSec": 5
       },
       {
         "type": "preToolUse",
         "command": ".github/hooks/scripts/log-tool-pre.sh",
         "timeoutSec": 5
       },
       {
         "type": "postToolUse",
         "command": ".github/hooks/scripts/log-tool-post.sh",
         "timeoutSec": 5
       },
       {
         "type": "sessionEnd",
         "command": ".github/hooks/scripts/log-session-end.sh",
         "timeoutSec": 5
       }
     ]
   }
   ```

   **Note:** If you completed Exercise 12.1, you'll need to merge these hooks with your security hooks. Copilot supports multiple hooks of the same type—they execute in the order defined.

2. **Create the logging scripts**

   Create `.github/hooks/scripts/log-session-start.sh`:

   ```bash
   #!/bin/bash
   set -euo pipefail

   INPUT=$(cat)
   AUDIT_LOG=".github/hooks/logs/audit.jsonl"
   mkdir -p "$(dirname "$AUDIT_LOG")"

   # Extract session info
   SESSION_ID=$(echo "$INPUT" | jq -r '.sessionId // "unknown"')
   TIMESTAMP=$(date -Iseconds)
   USER=$(whoami)
   WORKDIR=$(pwd)

   # Write JSON Lines entry
   jq -n \
     --arg ts "$TIMESTAMP" \
     --arg event "sessionStart" \
     --arg sid "$SESSION_ID" \
     --arg user "$USER" \
     --arg dir "$WORKDIR" \
     '{timestamp: $ts, event: $event, sessionId: $sid, user: $user, workingDirectory: $dir}' \
     >> "$AUDIT_LOG"
   ```

   Create `.github/hooks/scripts/log-prompt.sh`:

   ```bash
   #!/bin/bash
   set -euo pipefail

   INPUT=$(cat)
   AUDIT_LOG=".github/hooks/logs/audit.jsonl"

   SESSION_ID=$(echo "$INPUT" | jq -r '.sessionId // "unknown"')
   PROMPT=$(echo "$INPUT" | jq -r '.userPrompt // ""')
   TIMESTAMP=$(date -Iseconds)

   jq -n \
     --arg ts "$TIMESTAMP" \
     --arg event "userPromptSubmitted" \
     --arg sid "$SESSION_ID" \
     --arg prompt "$PROMPT" \
     '{timestamp: $ts, event: $event, sessionId: $sid, userPrompt: $prompt}' \
     >> "$AUDIT_LOG"
   ```

   Create `.github/hooks/scripts/log-tool-pre.sh`:

   ```bash
   #!/bin/bash
   set -euo pipefail

   INPUT=$(cat)
   AUDIT_LOG=".github/hooks/logs/audit.jsonl"

   SESSION_ID=$(echo "$INPUT" | jq -r '.sessionId // "unknown"')
   TOOL_NAME=$(echo "$INPUT" | jq -r '.tool.name // "unknown"')
   TOOL_ARGS=$(echo "$INPUT" | jq -c '.tool.arguments // {}')
   TIMESTAMP=$(date -Iseconds)

   jq -n \
     --arg ts "$TIMESTAMP" \
     --arg event "preToolUse" \
     --arg sid "$SESSION_ID" \
     --arg tool "$TOOL_NAME" \
     --argjson args "$TOOL_ARGS" \
     '{timestamp: $ts, event: $event, sessionId: $sid, tool: {name: $tool, arguments: $args}}' \
     >> "$AUDIT_LOG"

   # Return allow decision (this is a logging-only hook)
   echo '{"permissionDecision": "allow"}'
   ```

   Create `.github/hooks/scripts/log-tool-post.sh`:

   ```bash
   #!/bin/bash
   set -euo pipefail

   INPUT=$(cat)
   AUDIT_LOG=".github/hooks/logs/audit.jsonl"

   SESSION_ID=$(echo "$INPUT" | jq -r '.sessionId // "unknown"')
   TOOL_NAME=$(echo "$INPUT" | jq -r '.tool.name // "unknown"')
   RESULT=$(echo "$INPUT" | jq -c '.result // {}')
   TIMESTAMP=$(date -Iseconds)

   jq -n \
     --arg ts "$TIMESTAMP" \
     --arg event "postToolUse" \
     --arg sid "$SESSION_ID" \
     --arg tool "$TOOL_NAME" \
     --argjson result "$RESULT" \
     '{timestamp: $ts, event: $event, sessionId: $sid, tool: {name: $tool}, result: $result}' \
     >> "$AUDIT_LOG"
   ```

   Create `.github/hooks/scripts/log-session-end.sh`:

   ```bash
   #!/bin/bash
   set -euo pipefail

   INPUT=$(cat)
   AUDIT_LOG=".github/hooks/logs/audit.jsonl"

   SESSION_ID=$(echo "$INPUT" | jq -r '.sessionId // "unknown"')
   TIMESTAMP=$(date -Iseconds)

   jq -n \
     --arg ts "$TIMESTAMP" \
     --arg event "sessionEnd" \
     --arg sid "$SESSION_ID" \
     '{timestamp: $ts, event: $event, sessionId: $sid}' \
     >> "$AUDIT_LOG"
   ```

   Make all scripts executable:

   ```bash
   chmod +x .github/hooks/scripts/log-*.sh
   ```

3. **Test the audit trail with a complete workflow**

   Open Copilot Chat and run a multi-step session:

   ```
   1. Ask: "What's the current date?"
   2. Ask: "Create a simple test file at test-audit.txt with today's date"
   3. Review the file creation
   ```

   After the session completes, examine the audit log:

   ```bash
   cat .github/hooks/logs/audit.jsonl | jq '.'
   ```

   **You should see entries for:**
   - `sessionStart` — Session initiated, includes sessionId, user, working directory
   - `userPromptSubmitted` — Your first prompt ("What's the current date?")
   - `userPromptSubmitted` — Your second prompt (file creation request)
   - `preToolUse` — Agent about to call `create_file` tool
   - `postToolUse` — Result of `create_file` execution
   - `sessionEnd` — Session completed

   **Each entry is valid JSON on a single line (JSON Lines format)**, making it easy to process with standard tools.

4. **Run compliance queries**

   Now that you have structured logs, try these audit queries:

   **Query 1: Find all file modifications**

   ```bash
   jq 'select(.tool.name == "replace_string_in_file" or .tool.name == "create_file")' .github/hooks/logs/audit.jsonl
   ```

   **Query 2: Show all user prompts from a specific date**

   ```bash
   jq 'select(.event == "userPromptSubmitted" and (.timestamp | startswith("2026-01-16")))' .github/hooks/logs/audit.jsonl
   ```

   **Query 3: Count tool usage by type**

   ```bash
   jq -s 'group_by(.tool.name) | map({tool: .[0].tool.name, count: length})' .github/hooks/logs/audit.jsonl
   ```

   **Query 4: Reconstruct a complete session**

   ```bash
   SESSION_ID="<copy-from-log>"
   jq --arg sid "$SESSION_ID" 'select(.sessionId == $sid)' .github/hooks/logs/audit.jsonl
   ```

   **Marcus's validation:** Time how long it takes to answer "Show all file creations in the last hour." Before hooks: 20 minutes of manual correlation. After hooks: One jq command, 2 minutes including thinking about the query. Coverage went from "best effort ~70%" to "complete 100% because every event is logged."

#### ✅ Success Criteria

- [ ] `.github/hooks/audit.json` configures hooks for all lifecycle events (sessionStart, userPromptSubmitted, preToolUse, postToolUse, sessionEnd)
- [ ] `.github/hooks/logs/audit.jsonl` contains timestamped entries for a complete agent session
- [ ] Each log entry is valid JSON on a single line (JSON Lines format), parseable with `jq`
- [ ] You can query the log to find specific tool uses, prompts, or sessions using standard command-line tools
- [ ] Compliance questions like "What files did Copilot modify today?" are answerable in under 2 minutes

> 📂 **Compare Your Work**: [`examples/completed-config/hooks/audit-hooks.json`](../../examples/completed-config/hooks/audit-hooks.json) and [`examples/completed-config/hooks/scripts/`](../../examples/completed-config/hooks/scripts/)

#### 📚 Official Docs

- [Hooks configuration reference](https://docs.github.com/en/copilot/reference/hooks-configuration) — Complete JSON schema for all hook types including input/output formats
- [Using hooks with GitHub Copilot agents](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/coding-agent/use-hooks) — Practical examples of logging and monitoring patterns
- [About hooks](https://docs.github.com/en/copilot/concepts/agents/coding-agent/about-hooks) — When each hook type executes in the agent lifecycle

---

## 🔗 What You Built

**In this exercise:**

- `.github/hooks/audit.json` — Configuration for comprehensive lifecycle logging (5 hook types)
- `.github/hooks/scripts/log-session-start.sh` — Captures session initialization with context
- `.github/hooks/scripts/log-prompt.sh` — Records every user prompt for audit trails
- `.github/hooks/scripts/log-tool-pre.sh` — Logs tool execution attempts before they run
- `.github/hooks/scripts/log-tool-post.sh` — Captures tool execution results
- `.github/hooks/scripts/log-session-end.sh` — Marks session completion
- `.github/hooks/logs/audit.jsonl` — Machine-readable audit trail in JSON Lines format

**How it compounds:**

| Previous Modules                               | This Module                                 | Combined Power                                                                           |
| ---------------------------------------------- | ------------------------------------------- | ---------------------------------------------------------------------------------------- |
| Exercise 12.1: Security hooks block violations | Exercise 12.2: Audit logs record everything | Security decisions are enforced AND logged—prove compliance with evidence, not claims    |
| Module 5: Agent Skills enable operations       | Exercise 12.2: Logs track skill usage       | See which skills are used most, measure ROI, optimize based on data instead of intuition |
| Module 7: Custom agents automate workflows     | Exercise 12.2: Audit trails show impact     | Measure agent effectiveness with concrete data: sessions, tools used, success rates      |

**Marcus's ROI calculation:**

- **Before:** 20 min per audit query × 4 queries per quarter = 80 min manual work, 70% coverage
- **After:** 2 min per query × 4 queries = 8 min automated queries, 100% coverage
- **Time saved per audit:** 72 minutes
- **Improved coverage:** 30% more events captured (from 70% to 100%)
- **New capabilities enabled:** Real-time monitoring, usage analytics, cost tracking by tool/session
- **Annual impact:** 72 min × 4 quarters = 4.8 hours saved + complete evidence for compliance

**Elena's debugging benefit:**

- Before: "What changed?" required reading git commits, guessing context
- After: Query audit log by sessionId, see the original prompt, tool calls, and reasoning
- Result: Faster root cause analysis, better understanding of AI-assisted changes

---

## ➡️ Next Up

**[Exercise 12.3: Quality Gate Integration](exercise-12.3.md)** — Running linters before code changes to enforce quality standards at the point of creation

> _"We're logging everything agents do—now let's prevent quality violations the same way we prevented security violations: catch them before they reach the codebase."_  
> — Elena, applying the security hook pattern to quality assurance
