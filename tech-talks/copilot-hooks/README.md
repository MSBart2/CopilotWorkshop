# GitHub Copilot Hooks

Programmable governance and lifecycle control for AI agent workflows

---

## The Governance Problem

### Key Points

- **AI agents operate autonomously**
  Copilot can create files, run commands, access APIs—without pre-approval gates

- **Compliance requires audit trails**
  Regulated environments need evidence of what happened, when, and who authorized it

- **Security policies must be enforced**
  Can't rely on post-incident review to catch `rm -rf /` or `DROP TABLE` commands

- **Quality standards need validation**
  Style violations, test failures, and policy breaches should block commits at creation

### Narrative

AI agents move fast—creating files, running commands, deploying changes. In regulated industries (finance, healthcare, government), this autonomy creates compliance risk. Security teams ask: "How do we prevent dangerous operations before they execute?" Audit teams need: "Complete evidence trail of every agent action." Quality teams demand: "Enforcement of standards at the point of creation, not in CI review." GitHub Copilot Hooks provide programmable control points at critical moments—session start, before tool execution, after operations, on errors. This enables velocity with visibility, automation with accountability.

---

## Hook Architecture

### Lifecycle Events

**sessionStart** — Session initialization
- Validate project state (clean working directory, required tools installed)
- Initialize logging configuration and audit trail files
- Set environment variables for agent context
- Use case: Ensure agent starts in known-good state

**userPromptSubmitted** — User request capture
- Log original user request for audit compliance
- Track prompt patterns for usage analysis
- Record timestamp and user context
- Use case: Compliance audit trails

**preToolUse** — Pre-execution validation (MOST POWERFUL)
- Approve or deny tool execution before it happens
- Enforce security policies (block dangerous commands)
- Validate directory/file restrictions
- Use case: Real-time governance that prevents violations

**postToolUse** — Post-execution tracking
- Log tool results (success/failure, output, errors)
- Collect metrics (execution time, resource usage)
- Trigger alerts or notifications
- Use case: Observability and incident response

**errorOccurred** — Failure handling
- Capture error details for debugging
- Alert teams to failures requiring attention
- Log stack traces and context
- Use case: Operational monitoring

**sessionEnd** — Session cleanup
- Archive logs to persistent storage
- Send summary reports (tools used, violations, metrics)
- Release resources allocated during session
- Use case: Resource management and reporting

### Narrative

Hooks execute synchronously at strategic points in agent workflows. When an event occurs, Copilot invokes the hook script, passes JSON context via stdin, waits for completion (up to configurable timeout), and for `preToolUse` hooks, reads the output to determine permission. Scripts can log, analyze, call external APIs, or control behavior. The critical distinction: `preToolUse` is the only hook that can **prevent** actions via `{"permissionDecision": "deny"}`—all others are observational.

---

## Hook Execution Flow

### Technical Workflow

1. **Event Detection**
   Agent detects lifecycle event (session start, tool request, etc.)

2. **Hook Discovery**
   Reads `.github/hooks/*.json` files from repository default branch

3. **Script Invocation**
   Spawns shell process (bash/PowerShell) with event context

4. **Context Passing**
   Writes JSON payload to script stdin with event data:
   ```json
   {
     "timestamp": "2025-06-15T17:30:00Z",
     "workingDirectory": "/workspace/project",
     "toolName": "bash",
     "args": {"command": "rm -rf data/"}
   }
   ```

5. **Execution**
   Waits for script completion (default 30s timeout)

6. **Output Parsing**
   For `preToolUse`, reads stdout for permission decision:
   ```json
   {
     "permissionDecision": "deny",
     "permissionDecisionReason": "Dangerous delete operation outside approved directories"
   }
   ```

7. **Action**
   Proceeds (allow) or aborts (deny) based on hook response

### Narrative

Hooks run synchronously in the agent execution path. Keep them fast (<5 seconds ideal) to avoid degrading responsiveness. Use background processing for expensive operations. JSON Lines format (`.jsonl`) for logging enables direct querying, append safety, and tool compatibility with `jq`, `sqlite`, and log aggregation platforms.

---

## Use Case: Security Policy Enforcement

### Problem

Manual review catches dangerous commands only after execution—too late for prevention. Security violations averaged 2 per sprint, requiring 30 minutes manual investigation each.

### Solution

`preToolUse` hook validates tool executions against security policies before they run:

**Blocked patterns:**
- Destructive file operations: `rm -rf /`, `del /s /q`
- Privilege escalation: `sudo`, `runas`
- Database destruction: `DROP TABLE`, `TRUNCATE`
- Network exposure: Commands outside approved directories
- Credential access: Reading `.env`, `secrets.json` outside approved workflows

**Implementation:**
```bash
#!/bin/bash
# .github/hooks/scripts/security-check.sh

INPUT=$(cat)
TOOL_NAME=$(echo "$INPUT" | jq -r '.toolName')
COMMAND=$(echo "$INPUT" | jq -r '.args.command // empty')

# Block dangerous delete operations
if echo "$COMMAND" | grep -qE 'rm -rf /|del /s /q'; then
  echo '{"permissionDecision": "deny", "permissionDecisionReason": "Destructive file operation blocked by security policy"}'
  exit 0
fi

# Block privilege escalation
if echo "$COMMAND" | grep -qE '^sudo |^runas '; then
  echo '{"permissionDecision": "deny", "permissionDecisionReason": "Privilege escalation not allowed"}'
  exit 0
fi

# Default: allow (no output)
exit 0
```

**Configuration:**
```json
{
  "name": "Security Policy Enforcement",
  "hooks": {
    "preToolUse": {
      "command": "bash .github/hooks/scripts/security-check.sh",
      "timeoutSec": 5
    }
  }
}
```

### Results

- **Review time:** 60 min/sprint → 0 min (automated prevention)
- **Violations:** 2 per sprint → 0 (blocked before execution)
- **Detection latency:** 30 min average → <2 seconds (real-time)

### Narrative

Security policies as code, enforced at runtime. Instead of post-incident review, hooks prevent violations before they happen. Agents operate autonomously within approved boundaries—velocity with safety.

---

## Use Case: Compliance Audit Trail

### Problem

Manual audit log extraction took 20 minutes per audit request. Incomplete history coverage (estimated 70%) due to ad-hoc logging.

### Solution

Hooks log every session, prompt, and tool execution to structured JSON Lines format:

**Session lifecycle logging:**
- `sessionStart`: Initialize audit file with session ID and timestamp
- `userPromptSubmitted`: Record original user request
- `preToolUse`: Log tool approval/denial decision
- `postToolUse`: Record execution result (success/failure, output)
- `errorOccurred`: Capture error details
- `sessionEnd`: Archive logs with session summary

**Implementation:**
```bash
#!/bin/bash
# .github/hooks/scripts/log-tool-use.sh

INPUT=$(cat)
LOG_FILE="logs/audit.jsonl"
mkdir -p logs

# Append JSON event to audit log
echo "$INPUT" | jq -c '. + {loggedAt: now | todate}' >> "$LOG_FILE"
```

**Example audit log (`.jsonl` format):**
```jsonl
{"timestamp":"2025-06-15T17:30:00Z","event":"sessionStart","sessionId":"abc123"}
{"timestamp":"2025-06-15T17:30:15Z","event":"userPromptSubmitted","prompt":"Refactor authentication module"}
{"timestamp":"2025-06-15T17:30:20Z","event":"preToolUse","toolName":"edit","args":{"path":"src/auth.js"},"permissionDecision":"allow"}
{"timestamp":"2025-06-15T17:30:25Z","event":"postToolUse","toolName":"edit","result":"success"}
{"timestamp":"2025-06-15T17:30:30Z","event":"sessionEnd","toolsUsed":3,"violations":0}
```

**Query examples:**
```bash
# Count tool usage by type
cat logs/audit.jsonl | jq -r '.toolName' | sort | uniq -c

# Find all denied operations
cat logs/audit.jsonl | jq 'select(.permissionDecision == "deny")'

# Export to CSV for compliance reporting
cat logs/audit.jsonl | jq -r '[.timestamp, .toolName, .result] | @csv'
```

### Results

- **Audit time:** 20 min manual → 2 min query
- **Coverage:** 70% estimated → 100% guaranteed
- **Query capability:** None → SQL-like filtering with `jq`

### Narrative

Structured logging enables programmatic compliance. JSON Lines format (one JSON object per line) supports direct querying, incremental streaming, and tool compatibility. Audit queries become instant instead of manual log parsing.

---

## Use Case: Quality Gate Integration

### Problem

Style violations reached CI requiring rework—12 violations per sprint, 3 rework rounds averaging 25 minutes each (75 min total).

### Solution

`preToolUse` hook runs linter before code edits, denying non-compliant changes:

**Implementation:**
```bash
#!/bin/bash
# .github/hooks/scripts/lint-check.sh

INPUT=$(cat)
TOOL_NAME=$(echo "$INPUT" | jq -r '.toolName')
FILE_PATH=$(echo "$INPUT" | jq -r '.args.path // empty')

# Only lint code file edits
if [[ "$TOOL_NAME" != "edit" ]] || [[ ! "$FILE_PATH" =~ \.(js|ts|jsx|tsx)$ ]]; then
  exit 0
fi

# Create temp file with proposed changes
TEMP_FILE=$(mktemp)
echo "$INPUT" | jq -r '.args.new_str' > "$TEMP_FILE"

# Run linter
if ! npx eslint --no-eslintrc -c .eslintrc.json "$TEMP_FILE" > /dev/null 2>&1; then
  echo '{"permissionDecision": "deny", "permissionDecisionReason": "Code fails linting. Please fix violations before applying changes."}'
  rm "$TEMP_FILE"
  exit 0
fi

rm "$TEMP_FILE"
exit 0
```

### Results

- **Rework time:** 75 min/sprint → 0 min (violations blocked at creation)
- **Rework rounds:** 3 → 1 (standards enforced before commit)
- **CI violations:** 12/sprint → 0 (quality gates shift left)

### Narrative

Shift-left governance: validate at the point of creation instead of CI review. Agents generate compliant code on first attempt, eliminating rework cycles. Quality gates become creation-time enforcement, not post-commit cleanup.

---

## Best Practices

### Performance Optimization

**Target execution times:**
- <2 seconds for security checks and logging
- <5 seconds for linting and validation
- <120 seconds only for external API calls (use `timeoutSec` override)

**Performance patterns:**
- Cache expensive computations (compiled regex, policy lookups)
- Use asynchronous logging (append to file, don't wait for I/O)
- Offload slow work to background jobs triggered by hooks
- Profile scripts: `time ./hook.sh < test-input.json`

### Security Considerations

**Principle: Deny by default**
- Hooks should deny operations unless explicitly approved
- Safer than allow-by-default with violation filtering
- Reduces attack surface for policy bypass

**Secret handling:**
- Never log credentials, tokens, or sensitive data
- Use environment variables for hook configuration secrets
- Audit logs should scrub sensitive fields before writing

**Script security:**
- Validate all input from JSON context (don't trust field values)
- Use parameterized commands (avoid shell injection)
- Run hooks with least privilege (don't require sudo)

### Error Handling

**Graceful degradation:**
- If hook fails, agent should continue (unless security-critical)
- Log hook failures separately for debugging
- Use `timeoutSec` to prevent hung scripts blocking agents

**Debugging strategies:**
- Test hooks locally: `echo '{"toolName":"bash"}' | ./hook.sh`
- Enable verbose logging during development
- Monitor hook execution time in production

### Narrative

Hooks must be fast, secure, and reliable. Slow hooks degrade agent responsiveness. Insecure hooks create compliance risk. Unreliable hooks frustrate users. Design for performance (<5s typical), security (deny-by-default), and graceful failure (log errors, don't block agents).

---

## Metrics and Observability

### Governance Effectiveness

**Security enforcement:**
- Blocked operations by type (file deletion, privilege escalation, etc.)
- Time to detection (real-time prevention vs. post-incident review)
- Policy coverage (% of dangerous patterns caught)

**Compliance audit:**
- Audit log completeness (% of sessions logged)
- Query response time (manual extraction vs. programmatic)
- Retention compliance (logs archived per policy)

**Quality gates:**
- Violations prevented at creation vs. caught in CI
- Rework time saved (first-attempt compliance rate)
- Standards enforcement coverage (% of code changes validated)

### Operational Metrics

**Hook performance:**
- Execution time by hook type (p50, p95, p99)
- Timeout rate (hooks exceeding `timeoutSec`)
- Failure rate (hooks exiting with errors)

**Agent impact:**
- Session latency with/without hooks
- User satisfaction (governance vs. velocity perception)
- Adoption rate (% of teams using hooks)

### Example Dashboard

```bash
# Security policy blocks (last 7 days)
jq -r 'select(.permissionDecision == "deny") | .permissionDecisionReason' logs/audit.jsonl | sort | uniq -c

# Tool usage distribution
jq -r '.toolName' logs/audit.jsonl | sort | uniq -c | sort -rn

# Average session metrics
jq -s 'group_by(.sessionId) | map({session: .[0].sessionId, tools: length, violations: map(select(.permissionDecision == "deny")) | length})' logs/audit.jsonl
```

### Narrative

Effective governance requires measurement. Track what hooks prevent (security violations, quality issues), how fast they operate (latency impact), and compliance coverage (audit completeness). Use metrics to justify governance investment and optimize hook performance.

---

## Integration Patterns

### Combining Hooks with Other Customizations

**Hooks + Custom Instructions:**
- Instructions define *what* agents should do
- Hooks enforce *boundaries* on how they do it
- Example: Instructions say "follow coding standards," hooks validate compliance

**Hooks + Agent Skills:**
- Skills provide domain-specific capabilities
- Hooks audit skill usage and enforce policies
- Example: Deployment skill with hooks logging every production change

**Hooks + Custom Agents:**
- Agents orchestrate complex workflows
- Hooks ensure each step meets governance requirements
- Example: PR creation agent with hooks validating commit messages

### External System Integration

**Slack notifications:**
```bash
# Send alert on security violation
if [[ "$DECISION" == "deny" ]]; then
  curl -X POST "$SLACK_WEBHOOK" -d "{\"text\":\"Security violation blocked: $REASON\"}"
fi
```

**Metrics platforms (Datadog, New Relic):**
```bash
# Record hook execution metrics
echo "hook.execution.time:$DURATION|ms" | nc -u -w0 statsd-host 8125
```

**Ticketing systems (Jira, ServiceNow):**
```bash
# Create incident on critical errors
if [[ "$SEVERITY" == "critical" ]]; then
  curl -X POST "$JIRA_API/issue" -d '{"fields":{"project":{"key":"SEC"},"summary":"Critical agent violation"}}'
fi
```

### Narrative

Hooks integrate into existing workflows—not replacing them, extending them. Combine with custom instructions, skills, and agents to create cohesive governance. Integrate with Slack, metrics platforms, and ticketing systems for enterprise observability.

---

## Advanced Patterns

### Conditional Policies by Context

**Environment-aware enforcement:**
```bash
# Stricter policies in production
if [[ "$WORKING_DIR" =~ /production/ ]]; then
  # Require approval for all file writes
  if [[ "$TOOL_NAME" == "edit" || "$TOOL_NAME" == "create" ]]; then
    echo '{"permissionDecision": "deny", "permissionDecisionReason": "Production changes require manual approval"}'
    exit 0
  fi
fi
```

**User-based permissions:**
```bash
# Junior developers have restricted access
if [[ "$USER_ROLE" == "junior" ]] && echo "$COMMAND" | grep -q "deploy"; then
  echo '{"permissionDecision": "deny", "permissionDecisionReason": "Deployment requires senior engineer approval"}'
  exit 0
fi
```

### Multi-Hook Coordination

**Workflow orchestration:**
1. `sessionStart`: Validate prerequisites (clean state, required tools)
2. `preToolUse`: Check operation against policies
3. `postToolUse`: Log result, update metrics
4. `errorOccurred`: Alert on failure, create incident
5. `sessionEnd`: Archive logs, send summary report

**State management:**
```bash
# Track session state across hooks
SESSION_STATE="/tmp/copilot-session-$SESSION_ID.json"
echo "$INPUT" | jq ". + {hookExecutedAt: now | todate}" >> "$SESSION_STATE"
```

### Policy Evolution

**Gradual rollout:**
- Start with `postToolUse` logging (observational)
- Analyze patterns to define policies
- Promote to `preToolUse` enforcement (preventive)
- Monitor for false positives, adjust rules

**A/B testing governance:**
- Run hooks in "audit mode" for subset of users
- Compare compliance outcomes vs. control group
- Iterate policies based on data before full enforcement

### Narrative

Advanced patterns enable context-aware governance—stricter in production, permissive in development. Multi-hook coordination creates comprehensive workflows. Policy evolution follows crawl-walk-run: log first, analyze patterns, enforce gradually.

---

## Key Takeaways

### Technical

- **Hooks provide lifecycle control** at strategic points: session start, before/after tool use, on errors
- **`preToolUse` is uniquely powerful** for real-time prevention via `permissionDecision: "deny"`
- **JSON Lines format enables programmatic compliance** with direct querying and append safety
- **Keep hooks fast** (<5s typical) to avoid degrading agent responsiveness

### Strategic

- **Governance as code** enables velocity with visibility—automation with accountability
- **Shift-left enforcement** validates at creation, not in post-commit review
- **Deny-by-default security** is safer than allow-with-filtering
- **Measurement drives improvement** track what's prevented, how fast, and coverage gaps

### Organizational

- **Compliance becomes automated** instead of manual audit extraction
- **Security policies enforce themselves** rather than relying on review processes
- **Quality gates prevent rework** by validating at the point of creation
- **AI agents operate within guardrails** trusted for autonomous work in regulated environments

---

## Resources

### Official Documentation

- 📖 [About hooks](https://docs.github.com/en/copilot/concepts/agents/coding-agent/about-hooks) — Conceptual overview and hook types
- 📖 [Hooks configuration reference](https://docs.github.com/en/copilot/reference/hooks-configuration) — Complete spec with input/output formats
- 📖 [Using hooks with GitHub Copilot agents](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/coding-agent/use-hooks) — Step-by-step implementation guide

### Example Implementations

- [`audit-hooks.json`](../../examples/completed-config/hooks/audit-hooks.json) — Complete audit trail setup
- [`security-hooks.json`](../../examples/completed-config/hooks/security-hooks.json) — Security policy enforcement
- [Hook scripts](../../examples/completed-config/hooks/scripts/) — Reusable shell scripts for common patterns

### Related Topics

- **Custom Instructions** — Define agent behavior within hook-enforced boundaries
- **Agent Skills** — Domain capabilities with hook-based audit trails
- **Enterprise Patterns** — Combining hooks with organization-wide governance frameworks
