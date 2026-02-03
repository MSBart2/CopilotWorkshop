# Module 12: Copilot Hooks

## ⏰ 5:00 PM — The Governance Problem

> _"We shipped feature flags, deployment checks, and a full test suite. But if Copilot can edit any file and run any command, how do we enforce security policies, audit compliance, or catch dangerous operations before they happen?"_  
> — Sarah, realizing AI agents need guardrails just like human developers

---

## 📖 Story So Far

In **Module 1**, the team added `.github/copilot-instructions.md` to give Copilot project-level context...

In **Module 4**, they created `.github/instructions` files for role-specific guidance...

In **Module 5**, they built Agent Skills for domain-specific operations...

In **Module 7**, they created custom agents for complex workflows...

Now, in **Module 12**, they face the governance challenge: **How do we validate, audit, and control what AI agents can do?** Copilot can create, edit, and run commands—but in regulated environments or with junior team members, you need quality gates, security policies, and compliance logging.

💡 **Integration Note:** This module builds on the entire customization stack by adding **control points** at critical moments—session start, before tool use, after tool execution, and on errors. Hooks turn your repository from "AI can suggest anything" to "AI operates within approved boundaries."

---

⚠️ **Prerequisites**:

- Complete [Module 00: Orientation](../00-orientation/README.md)
- Understanding of shell scripting (Bash or PowerShell)
- Familiarity with JSON parsing (using `jq` or similar)
- Optional: Review [Module 4: Custom Instructions](../04-custom-instructions/README.md) for context on repository customization

---

## 🧠 Mindful Moment: Automation with Accountability

**Traditional thinking:** _"If I automate something, I lose visibility and control over what happens."_

**AI-native thinking:** _"Hooks let me automate with programmable oversight—agents move fast but within defined boundaries."_

This isn't about distrusting AI—it's about **governance at scale**. Just as you wouldn't let developers commit directly to production without CI checks, you shouldn't let agents operate without validation hooks. The goal: **velocity with visibility**.

---

💡 **Understanding Hooks**

**Hooks** are custom shell commands that execute at key points in Copilot agent sessions. Think of them as **lifecycle events** with programmable handlers:

- **sessionStart** — Initialize environments, validate project state
- **userPromptSubmitted** — Log user requests for audit trails
- **preToolUse** — Approve or deny tool executions (most powerful)
- **postToolUse** — Track results, collect metrics, send alerts
- **errorOccurred** — Handle failures, notify teams, log debugging info
- **sessionEnd** — Cleanup resources, archive logs, send reports

Each hook receives **JSON input** via stdin with context (timestamp, working directory, tool name, arguments, results) and can optionally return **JSON output** to control behavior (e.g., `{"permissionDecision": "deny"}`).

**Key capabilities:**

- Block dangerous commands before execution
- Enforce directory/file restrictions
- Audit every agent action for compliance
- Integrate with external systems (Slack, metrics platforms)
- Collect usage statistics for cost tracking

**Why it matters for this module:** The `preToolUse` hook is essential because it's the only interception point where you can **prevent** (not just log) actions. This enables real-time governance that makes AI agents safe for regulated environments.

---

## 📚 Key Concepts

### Hook Lifecycle and Execution Flow

Hooks execute synchronously at specific points in the agent's workflow. When an event occurs (like the user submitting a prompt or the agent attempting to use a tool), Copilot:

1. Invokes the corresponding hook script
2. Passes event data as JSON to the script's stdin
3. Waits for the script to complete (up to `timeoutSec`, default 30s)
4. For `preToolUse` hooks, reads the output to determine permission
5. Continues agent execution based on the result

**Session Hooks**

- **Purpose**: Manage session lifecycle, initialize/cleanup environments
- **Value**: Ensures consistent state, prevents resource leaks
- **Result**: Reliable agent sessions with proper setup/teardown
- **What to include**: Environment validation, logging configuration, resource allocation
- **What NOT to include**: Long-running operations (keep under 5 seconds), blocking operations that delay agent response

**Audit and Logging Hooks**

- **Purpose**: Record agent actions for compliance and analysis
- **Value**: Provides evidence for audits, enables usage tracking
- **Result**: Complete audit trail of what agents did and when
- **What to include**: Structured logging (JSON Lines), timestamps, user/action/result
- **What NOT to include**: Sensitive data (tokens, passwords), unstructured text logs

**Control Hooks (preToolUse)**

- **Purpose**: Validate and approve/deny tool executions in real-time
- **Value**: Prevents dangerous operations, enforces security policies
- **Result**: Agents operate safely within defined boundaries
- **What to include**: Pattern matching for dangerous commands, directory restrictions, policy checks
- **What NOT to include**: Complex business logic (keep hooks fast), operations with side effects

### How They Work Together

A typical governance workflow combines multiple hook types:

1. **sessionStart**: Validate project is in clean state, initialize log file
2. **userPromptSubmitted**: Log user's request for audit trail
3. **preToolUse**: Check if tool execution meets security/compliance policies
   - If denied: Return `{"permissionDecision": "deny", "permissionDecisionReason": "..."}`
   - If allowed: Log approval and continue
4. **postToolUse**: Record result (success/failure), collect metrics
5. **errorOccurred**: If anything fails, log error details and alert team
6. **sessionEnd**: Archive logs, send summary report

> 📂 **Reference Examples**: The [`examples/completed-config/hooks/`](../../examples/completed-config/hooks/) folder contains sample hook configurations:
>
> - [`audit-hooks.json`](../../examples/completed-config/hooks/audit-hooks.json) — Complete audit trail setup
> - [`security-hooks.json`](../../examples/completed-config/hooks/security-hooks.json) — Security policy enforcement
> - [`scripts/`](../../examples/completed-config/hooks/scripts/) — Reusable hook scripts

---

## What You'll Learn

**Copilot Hooks** let you intercept and control agent behavior at critical lifecycle points. You'll configure hooks that enforce security policies, maintain audit trails, and validate operations before they execute—measuring how governance moves from manual review to automated enforcement.

**Time:** ~45 minutes | **Exercises:** 3

---

## 📋 Exercise Planning

The exercises below use hooks to implement governance that was previously manual. Each exercise is led by a specific persona and shows measurable improvements.

| #                        | Exercise                    | Lead      | Support             | Problem                                                                                 | Solution                                                                                    | Key Metrics                                                             | Artifacts                                                          |
| ------------------------ | --------------------------- | --------- | ------------------- | --------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- | ------------------------------------------------------------------ |
| [12.1](exercise-12.1.md) | Security Policy Enforcement | Sarah ⭐  | David 🤝, Marcus 🤝 | Manual review catches dangerous commands: 30 min per violation, 2 violations per sprint | `preToolUse` hook blocks `rm -rf /`, `DROP TABLE`, file writes outside approved directories | 60 min → 0 min review time, 2 violations → 0 violations                 | `.github/hooks/security.json`, `scripts/security-check.sh`         |
| [12.2](exercise-12.2.md) | Compliance Audit Trail      | Marcus ⭐ | Elena 🤝            | Manual audit log extraction: 20 min per audit, incomplete history                       | Hooks log every session, prompt, tool use to structured JSON Lines format                   | 20 min manual work → 2 min query, 70% coverage → 100% coverage          | `.github/hooks/audit.json`, `scripts/log-*.sh`, `logs/audit.jsonl` |
| [12.3](exercise-12.3.md) | Quality Gate Integration    | Elena ⭐  | Sarah 🤝            | Style violations reach CI: 12 per sprint, 3 rework rounds averaging 25 min each         | `preToolUse` hook runs linter before code edits, denies non-compliant changes               | 75 min rework → 0 min, 3 rounds → 1 round, 12 violations → 0 violations | `.github/hooks/quality.json`, `scripts/lint-check.sh`              |

---

## 📚 What This Feature Does

**Copilot Hooks:** Custom shell commands that execute at strategic points in agent sessions (start, end, before/after tool use, on error), receiving JSON context via stdin and optionally controlling agent behavior via JSON output.

**When to use it:** When you need governance, security enforcement, compliance logging, or quality gates that validate agent actions in real-time—not just after the fact.

**What you'll build:**

- **Security Policy Hook** — Blocks dangerous commands (`rm -rf`, `sudo`, destructive operations) before execution
- **Audit Trail System** — Logs every agent session, prompt, and tool use to JSON Lines format for compliance reporting
- **Quality Gate Hook** — Runs linters/formatters before code changes are applied, enforcing standards at the point of creation

**Official Documentation:**

- 📖 [About hooks](https://docs.github.com/en/copilot/concepts/agents/coding-agent/about-hooks) — Conceptual overview and types of hooks
- 📖 [Hooks configuration](https://docs.github.com/en/copilot/reference/hooks-configuration) — Complete reference with hook types, input/output formats, and advanced patterns
- 📖 [Using hooks with GitHub Copilot agents](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/coding-agent/use-hooks) — Step-by-step guide for creating and troubleshooting hooks

> 💡 **Important for this module:** The `preToolUse` hook is essential because it's the only hook that can **prevent** actions (via `permissionDecision: "deny"`). All other hooks are observational—they can log, alert, and collect metrics, but only `preToolUse` provides real-time control. This enables "AI with guardrails" rather than "AI with post-incident review."

---

## ➡️ Next Module

**[Module 13: Advanced Integration Patterns](../13-advanced-integration/README.md)** — Combining hooks, agents, skills, and instructions into cohesive workflows that adapt to your team's unique process

> _"We've built the pieces—instructions, agents, skills, hooks. Now how do we orchestrate them into a system that makes the whole team faster?"_  
> — David, seeing the path from individual features to integrated platform

---

## 📌 Practices Used

| Practice                          | How It Applied in This Module                                                                     |
| --------------------------------- | ------------------------------------------------------------------------------------------------- |
| 📚 **Policy as Code**             | Security rules defined as executable scripts, not wiki documentation—enforceable at runtime       |
| 🎯 **Shift-Left Governance**      | Moved quality gates from CI/code review to the point of creation—validate before committing       |
| 🔄 **Structured Logging**         | JSON Lines format enables programmatic analysis—audit queries instead of manual log reading       |
| 🔒 **Least Privilege by Default** | Hooks deny by default, approve explicitly—safer than allowing everything and filtering violations |

---

## 🎭 Behind the Scenes

_For those who want to understand the deeper mechanics:_

### How Hook Execution Works

When Copilot coding agent encounters a hook event:

1. **Event Detection**: Agent detects lifecycle event (session start, tool use request, etc.)
2. **Hook Discovery**: Reads `.github/hooks/*.json` files from repository's default branch
3. **Script Invocation**: Spawns shell process (`bash` or `powershell` depending on OS)
4. **Context Passing**: Writes JSON payload to script's stdin with event data
5. **Execution**: Waits for script completion (up to `timeoutSec`)
6. **Output Parsing**: For `preToolUse`, reads stdout looking for JSON `permissionDecision`
7. **Action**: Either proceeds (allow/no output) or aborts (deny) based on hook response

**Key Takeaway:** Hooks run **synchronously** in the agent's execution path. Keep them fast (<5 seconds ideal) to avoid degrading agent responsiveness. Use background processing for expensive operations.

### Why JSON Lines for Logging

Traditional log formats require parsing logic to extract structured data. **JSON Lines (`.jsonl`)** writes one JSON object per line, enabling:

- **Direct query**: `grep '"toolName":"bash"' audit.jsonl | jq .`
- **Append safety**: No risk of corrupting existing JSON structure
- **Streaming analysis**: Process logs incrementally without loading entire file
- **Tool compatibility**: Works with `jq`, `sqlite`, log aggregation platforms

**Example:**

```bash
# Count tool usage by type
cat logs/audit.jsonl | jq -r '.toolName' | sort | uniq -c

# Find all denied operations
cat logs/audit.jsonl | jq 'select(.permissionDecision == "deny")'

# Export to CSV for reporting
cat logs/audit.jsonl | jq -r '[.timestamp, .toolName, .result] | @csv'
```

### Hook Performance and Timeouts

Hooks have a default 30-second timeout, but this doesn't mean they should take that long:

- **Target: <2 seconds** for most hooks (security checks, logging)
- **Maximum: 5 seconds** for operations users will wait for (linting)
- **Use `timeoutSec: 120`** only for expensive operations (external API calls, complex validation)

**Performance tips:**

- Cache results of expensive computations
- Use asynchronous logging (append to file, don't wait for I/O)
- Offload slow work to background jobs triggered by hooks
- Profile scripts to find bottlenecks: `time ./my-hook.sh < test-input.json`

---
