# Exercise 12.1: Security Policy Enforcement

## 🔨 Exercise

### Exercise 12.1: Security Policy Enforcement — "Preventing Dangerous Operations Before They Execute"

**Lead:** Sarah ⭐ | **Support:** David 🤝, Marcus 🤝 | **Time:** 15 min

#### 📖 The Challenge

Sarah has reviewed thousands of PRs in her 15 years—and she's seen what happens when developers (or AI assistants) accidentally run destructive commands. Last sprint, a junior developer (using Copilot) generated a cleanup script that included `rm -rf /tmp/*` without proper quoting. It passed code review because it looked reasonable in isolation. In staging, it deleted application logs. That investigation took 30 minutes, and it was the second such violation that sprint.

David recognizes the pattern: AI generates plausible-looking code that violates architectural boundaries. Last month, Copilot suggested modifying files in `src/core/` that should only be touched by staff engineers. Three cleanup cycles later (each requiring architectural review), they fixed the mess. Marcus deals with the infrastructure side: developers asking Copilot to "fix the deployment" often results in suggestions to modify production Kubernetes configs or run unvetted SQL migrations.

Manual review catches these violations—eventually. But that's reactive governance. Sarah wants **preventive** governance: block dangerous operations before they execute, not after they cause incidents.

#### 🔄 The Transformation

| Before ❌                                                                                                                                                                  | After ✨                                                                                                                                                                                                                 |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Developer asks Copilot to "clean up temp files". Agent generates script with `rm -rf /` pattern. Runs in staging, deletes logs, requires 30-minute incident investigation. | Developer asks Copilot to "clean up temp files". Agent generates script. `preToolUse` hook detects `rm -rf` pattern, returns `{"permissionDecision": "deny"}`. Agent never executes command, suggests safer alternative. |
| **Time:** 30 min per violation<br>**Violations:** 2 per sprint<br>**Review rounds:** Manual inspection required<br>**Incident risk:** High                                 | **Time:** 0 min (blocked immediately)<br>**Violations:** 0 reach execution<br>**Review rounds:** Automated enforcement<br>**Incident risk:** Eliminated                                                                  |

#### 🎯 Your Goal

Create a `preToolUse` hook that validates agent tool executions against security policies, blocking dangerous commands before they run while logging violations for team coaching.

#### 📋 Steps

1. **Create the hooks configuration file**

   Create `.github/hooks/security.json` with the following content:

   ```json
   {
     "hooks": [
       {
         "type": "preToolUse",
         "command": ".github/hooks/scripts/security-check.sh",
         "timeoutSec": 10
       }
     ]
   }
   ```

   This tells Copilot to run `security-check.sh` before every tool execution. The hook has 10 seconds to validate the operation and return a decision.

2. **Create the security validation script**

   Create `.github/hooks/scripts/security-check.sh`:

   ```bash
   #!/bin/bash
   set -euo pipefail

   # Read JSON input from stdin
   INPUT=$(cat)

   # Extract tool name and arguments
   TOOL=$(echo "$INPUT" | jq -r '.tool.name // "unknown"')
   ARGS=$(echo "$INPUT" | jq -r '.tool.arguments // {} | tostring')

   # Log the request (for audit trail)
   echo "[$(date -Iseconds)] preToolUse: tool=$TOOL" >> .github/hooks/logs/security.log

   # Check for dangerous patterns
   DANGEROUS_PATTERNS=(
     "rm -rf /"
     "DROP TABLE"
     "DROP DATABASE"
     "sudo rm"
     "chmod 777"
     "> /dev/sd"
   )

   for pattern in "${DANGEROUS_PATTERNS[@]}"; do
     if echo "$ARGS" | grep -qi "$pattern"; then
       # DENY: dangerous command detected
       echo "[$(date -Iseconds)] DENIED: Dangerous pattern '$pattern' in $TOOL" >> .github/hooks/logs/security.log
       cat <<EOF
   {
     "permissionDecision": "deny",
     "permissionDecisionReason": "Security policy violation: Detected dangerous pattern '$pattern'. Please revise the command to avoid destructive operations."
   }
   EOF
       exit 0
     fi
   done

   # Check directory restrictions for file operations
   if [[ "$TOOL" == "replace_string_in_file" ]] || [[ "$TOOL" == "create_file" ]]; then
     FILE_PATH=$(echo "$INPUT" | jq -r '.tool.arguments.filePath // ""')

     # Block edits to protected directories
     if [[ "$FILE_PATH" == *"/src/core/"* ]] || [[ "$FILE_PATH" == *"/config/production/"* ]]; then
       echo "[$(date -Iseconds)] DENIED: Protected directory edit attempt: $FILE_PATH" >> .github/hooks/logs/security.log
       cat <<EOF
   {
     "permissionDecision": "deny",
     "permissionDecisionReason": "Security policy: Directory '$FILE_PATH' requires staff engineer approval. Please request review before modifying core or production files."
   }
   EOF
       exit 0
     fi
   fi

   # ALLOW: no violations detected
   echo "[$(date -Iseconds)] ALLOWED: $TOOL" >> .github/hooks/logs/security.log
   cat <<EOF
   {
     "permissionDecision": "allow"
   }
   EOF
   ```

   Make it executable:

   ```bash
   chmod +x .github/hooks/scripts/security-check.sh
   mkdir -p .github/hooks/logs
   ```

3. **Test the hook with a dangerous operation**

   Open Copilot Chat and try this prompt:

   > "Create a script that cleans up all temporary files using `rm -rf /tmp/*`"

   **Expected behavior:**
   - Copilot generates the script
   - Before executing `create_file`, the hook runs
   - Hook detects `rm -rf` pattern, returns `permissionDecision: "deny"`
   - Copilot displays: _"Operation denied by security policy: Detected dangerous pattern 'rm -rf /'"_
   - Check `.github/hooks/logs/security.log` — you should see the denial logged

   **Then try a safe operation:**

   > "Create a simple hello world script in src/utils/hello.sh"

   **Expected behavior:**
   - Hook runs, finds no violations
   - Returns `permissionDecision: "allow"`
   - File is created successfully
   - Log shows `ALLOWED` entry

4. **Review the security metrics**

   Check the log file to see the audit trail:

   ```bash
   cat .github/hooks/logs/security.log
   ```

   You should see entries showing:
   - Timestamp of each tool use attempt
   - Which tool was invoked
   - Whether it was allowed or denied
   - Reason for denials (dangerous pattern, protected directory)

   **Sarah's validation:** Count the denials. Every logged denial is an incident that was **prevented**, not just detected after the fact. Before hooks: 2 violations per sprint reached execution (30 min investigation each = 60 min). After hooks: 0 violations reach execution (0 min investigation).

#### ✅ Success Criteria

- [ ] `.github/hooks/security.json` exists and references the validation script
- [ ] `.github/hooks/scripts/security-check.sh` is executable and validates patterns
- [ ] Attempting to create a file with `rm -rf /` is blocked with a clear error message
- [ ] Safe operations (like creating a hello world script) succeed normally
- [ ] `.github/hooks/logs/security.log` contains timestamped audit entries for both denied and allowed operations

> 📂 **Compare Your Work**: [`examples/completed-config/hooks/security-hooks.json`](../../examples/completed-config/hooks/security-hooks.json) and [`examples/completed-config/hooks/scripts/security-check.sh`](../../examples/completed-config/hooks/scripts/security-check.sh)

#### 📚 Official Docs

- [Using hooks with GitHub Copilot agents](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/coding-agent/use-hooks) — Step-by-step guide for creating and troubleshooting hooks
- [Hooks configuration reference](https://docs.github.com/en/copilot/reference/hooks-configuration) — Complete reference with hook types, input/output formats for `preToolUse` permission decisions
- [About hooks](https://docs.github.com/en/copilot/concepts/agents/coding-agent/about-hooks) — Conceptual overview explaining when each hook type executes

---

## 🔗 What You Built

**In this exercise:**

- `.github/hooks/security.json` — Hook configuration that intercepts all tool executions for security validation
- `.github/hooks/scripts/security-check.sh` — Validation script that checks commands against dangerous patterns and directory restrictions
- `.github/hooks/logs/security.log` — Audit trail showing every tool use attempt, whether allowed or denied, with timestamps and reasons

**How it compounds:**

| Previous Modules                                          | This Module                              | Combined Power                                                                          |
| --------------------------------------------------------- | ---------------------------------------- | --------------------------------------------------------------------------------------- |
| Module 1: `.github/copilot-instructions.md` gives context | Exercise 12.1: Hooks enforce boundaries  | Instructions guide suggestions, hooks prevent violations—AI stays productive AND safe   |
| Module 5: Agent Skills enable capabilities                | Exercise 12.1: Hooks validate operations | Skills give agents power, hooks ensure they use it responsibly—velocity with governance |
| Module 7: Custom agents automate workflows                | Exercise 12.1: Hooks add guardrails      | Agents move fast, hooks keep them on the approved path—automation with accountability   |

**Sarah's ROI calculation:**

- **Before:** 2 security violations per sprint × 30 min investigation = 60 min reactive work
- **After:** 0 violations reach execution = 0 min investigation, violations logged for coaching
- **Time saved:** 60 minutes per sprint
- **Risk reduced:** Eliminated incident potential from destructive commands
- **Compliance benefit:** Automated security enforcement with complete audit trail
- **Annual impact:** 60 min × 26 sprints = 26 hours saved + unmeasurable value from prevented incidents

---

## ➡️ Next Up

**[Exercise 12.2: Compliance Audit Trail](exercise-12.2.md)** — Logging every session, prompt, and tool execution to structured JSON Lines format for compliance reporting

> _"We're preventing violations—but auditors will ask 'prove it.' We need comprehensive logs showing what agents did, when, and what was blocked."_  
> — Marcus, anticipating the next compliance review
