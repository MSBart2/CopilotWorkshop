# Exercise 12.3: Quality Gate Integration

## 🔨 Exercise

### Exercise 12.3: Quality Gate Integration — "From CI Rework to Real-Time Quality Enforcement"

**Lead:** Elena ⭐ | **Support:** Sarah 🤝 | **Time:** 15 min

#### 📖 The Challenge

Elena has spent 8 years building quality systems, and she knows the truth: **the earlier you catch defects, the cheaper they are to fix**. Right now, the team's quality gates live in CI/CD pipelines—which means every style violation, linting error, or formatting issue requires a full commit → push → CI run → review → fix cycle. Last sprint, that cycle happened **3 times per feature** because Copilot-generated code looked correct but violated the team's ESLint rules. Each rework cycle took about 25 minutes. That's **75 minutes of preventable rework per feature**.

Sarah sees the pattern in code reviews: 12 style violations per sprint that _could_ have been caught automatically. The violations aren't complex logic errors—they're missing semicolons, inconsistent indentation, unused imports. Trivial to fix if caught immediately, frustrating to deal with after you've moved on to the next feature.

The current process is backwards: generate code → commit it → discover it doesn't meet standards → fix → repeat. Elena wants to flip it: **validate code before it's even written to disk**. If Copilot generates a file that doesn't pass the linter, deny the operation and ask for a corrected version—before the developer sees the failure, before CI runs, before review cycles start.

It's the same pattern as Exercise 12.1's security hooks, but for quality: shift the gate left until violations become impossible.

#### 🔄 The Transformation

| Before ❌                                                                                                                                                                                                                                                                                    | After ✨                                                                                                                                                                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Copilot generates React component. Developer commits. CI runs ESLint, finds 4 violations (missing prop types, unused vars). Developer fixes violations, recommits. CI runs again, finds 1 more (inconsistent spacing). Third round finally passes. Total: 75 minutes across 3 rework cycles. | Copilot generates React component. `preToolUse` hook runs ESLint on the proposed content before writing to disk. Finds violations, returns `deny` with specific issues. Copilot regenerates with fixes. Hook validates again, approves. File written correctly on first try. Total: 5 minutes, 1 iteration. |
| **Rework time:** 75 min per feature<br>**Review rounds:** 3 (commit → fix → commit)<br>**Style violations:** 12 per sprint reaching CI<br>**Developer frustration:** High (repetitive fixes)                                                                                                 | **Rework time:** 0 min (prevented before commit)<br>**Review rounds:** 1 (code is correct first time)<br>**Style violations:** 0 reach disk/CI<br>**Developer experience:** Smooth (quality built-in)                                                                                                       |

#### 🎯 Your Goal

Implement a `preToolUse` hook that runs linters and formatters on proposed code changes, denying operations that don't meet quality standards and returning actionable feedback to help Copilot generate compliant code.

#### 📋 Steps

1. **Install linting tools for your project**

   For the FanHub React project, install ESLint if not already present:

   ```bash
   cd fanhub/frontend
   npm install --save-dev eslint
   ```

   Create a basic ESLint config at `fanhub/frontend/.eslintrc.json`:

   ```json
   {
     "env": {
       "browser": true,
       "es2021": true
     },
     "extends": ["eslint:recommended", "plugin:react/recommended"],
     "parserOptions": {
       "ecmaVersion": "latest",
       "sourceType": "module"
     },
     "rules": {
       "semi": ["error", "always"],
       "quotes": ["error", "single"],
       "no-unused-vars": "error",
       "react/prop-types": "warn"
     }
   }
   ```

   **Note:** Adjust this configuration to match your team's standards. The key is having a linter that can run on proposed code.

2. **Create the quality gate hook configuration**

   Create `.github/hooks/quality.json`:

   ```json
   {
     "hooks": [
       {
         "type": "preToolUse",
         "command": ".github/hooks/scripts/lint-check.sh",
         "timeoutSec": 15
       }
     ]
   }
   ```

   **If you completed Exercises 12.1 and 12.2**, you'll need to merge these hooks. Copilot processes multiple `preToolUse` hooks in order—security first, then quality validation.

3. **Create the lint validation script**

   Create `.github/hooks/scripts/lint-check.sh`:

   ```bash
   #!/bin/bash
   set -euo pipefail

   INPUT=$(cat)
   AUDIT_LOG=".github/hooks/logs/quality.log"
   mkdir -p "$(dirname "$AUDIT_LOG")"

   # Extract tool info
   TOOL=$(echo "$INPUT" | jq -r '.tool.name // "unknown"')
   TIMESTAMP=$(date -Iseconds)

   # Only validate file creation/modification tools
   if [[ "$TOOL" != "create_file" ]] && [[ "$TOOL" != "replace_string_in_file" ]]; then
     echo '{"permissionDecision": "allow"}'
     exit 0
   fi

   # Extract file path and content
   FILE_PATH=$(echo "$INPUT" | jq -r '.tool.arguments.filePath // ""')

   # Only check JavaScript/TypeScript files
   if [[ ! "$FILE_PATH" =~ \.(js|jsx|ts|tsx)$ ]]; then
     echo '{"permissionDecision": "allow"}'
     exit 0
   fi

   # For create_file, content is in .content; for replace_string_in_file, use .newString
   if [[ "$TOOL" == "create_file" ]]; then
     CONTENT=$(echo "$INPUT" | jq -r '.tool.arguments.content // ""')
   else
     CONTENT=$(echo "$INPUT" | jq -r '.tool.arguments.newString // ""')
   fi

   # Write content to temp file for linting
   TEMP_FILE=$(mktemp --suffix=".${FILE_PATH##*.}")
   echo "$CONTENT" > "$TEMP_FILE"

   # Run ESLint (adjust path to your project's node_modules)
   cd fanhub/frontend
   LINT_OUTPUT=$(npx eslint --format json "$TEMP_FILE" 2>&1 || true)
   cd - > /dev/null

   # Clean up temp file
   rm "$TEMP_FILE"

   # Check if linting passed
   ERROR_COUNT=$(echo "$LINT_OUTPUT" | jq '.[0].errorCount // 0' 2>/dev/null || echo "0")
   WARNING_COUNT=$(echo "$LINT_OUTPUT" | jq '.[0].warningCount // 0' 2>/dev/null || echo "0")

   if [[ "$ERROR_COUNT" -gt 0 ]] || [[ "$WARNING_COUNT" -gt 0 ]]; then
     # Extract specific errors for helpful feedback
     MESSAGES=$(echo "$LINT_OUTPUT" | jq -r '.[0].messages[] | "Line \(.line): \(.message) (\(.ruleId))"' | head -n 5)

     echo "[$TIMESTAMP] DENIED: Lint errors in $FILE_PATH" >> "$AUDIT_LOG"
     echo "$MESSAGES" >> "$AUDIT_LOG"

     cat <<EOF
   {
     "permissionDecision": "deny",
     "permissionDecisionReason": "Code quality violations detected:\n$MESSAGES\n\nPlease fix these linting errors and regenerate the code."
   }
   EOF
     exit 0
   fi

   # Passed validation
   echo "[$TIMESTAMP] ALLOWED: $FILE_PATH passed linting" >> "$AUDIT_LOG"
   echo '{"permissionDecision": "allow"}'
   ```

   Make it executable:

   ```bash
   chmod +x .github/hooks/scripts/lint-check.sh
   ```

4. **Test the quality gate**

   Open Copilot Chat and try to create a file with linting violations:

   > "Create a React component at fanhub/frontend/src/TestComponent.jsx with a simple button. Use double quotes and don't include semicolons."

   **Expected behavior:**
   - Copilot generates code with double quotes (violates the `quotes` rule)
   - Before writing to disk, `preToolUse` hook runs ESLint
   - ESLint detects violations
   - Hook returns `deny` with specific error messages
   - Copilot sees the denial, reads the feedback, regenerates with single quotes and semicolons
   - Hook validates again, passes, file is written

   **Verify the quality log:**

   ```bash
   cat .github/hooks/logs/quality.log
   ```

   You should see entries showing denials with specific ESLint rule violations, followed by an approval once the code was corrected.

   **Then verify the component was created correctly:**

   ```bash
   cat fanhub/frontend/src/TestComponent.jsx
   ```

   The file should use single quotes and include semicolons—matching your ESLint config—even though the initial prompt asked for different formatting.

5. **Measure the quality improvement**

   **Elena's validation experiment:**

   Before enabling hooks:
   - Ask Copilot to create 3 components without mentioning code style
   - Commit them
   - Run `npx eslint src/` and count violations
   - Typical result: 8-12 violations per 3 files

   With hooks enabled:
   - Ask Copilot to create 3 different components without mentioning code style
   - Watch the hook validate them in real-time
   - Check the files and run ESLint manually
   - Result: 0 violations—code was corrected before it reached disk

   **Time comparison:**
   - Without hooks: 3 commits → CI failure → 3 fixes → rerun CI = ~75 min
   - With hooks: 1 iteration, real-time validation during generation = ~5 min
   - **Savings:** 70 minutes of rework eliminated per feature

#### ✅ Success Criteria

- [ ] `.github/hooks/quality.json` configures a `preToolUse` hook for lint validation
- [ ] `.github/hooks/scripts/lint-check.sh` runs ESLint on proposed JavaScript/TypeScript files
- [ ] When you ask Copilot to create code that violates your linting rules, the operation is denied with specific error messages
- [ ] Copilot reads the denial feedback and regenerates compliant code that passes validation
- [ ] `.github/hooks/logs/quality.log` shows both denials (with rule violations) and approvals
- [ ] Files created by Copilot automatically comply with your ESLint configuration—no manual fixing required

> 📂 **Compare Your Work**: [`examples/completed-config/hooks/quality-hooks.json`](../../examples/completed-config/hooks/quality-hooks.json) and [`examples/completed-config/hooks/scripts/lint-check.sh`](../../examples/completed-config/hooks/scripts/lint-check.sh)

#### 📚 Official Docs

- [Using hooks with GitHub Copilot agents](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/coding-agent/use-hooks) — Practical examples of validation hooks with permission decisions
- [Hooks configuration reference](https://docs.github.com/en/copilot/reference/hooks-configuration) — Complete `preToolUse` input/output format including error reporting
- [About hooks](https://docs.github.com/en/copilot/concepts/agents/coding-agent/about-hooks) — Understanding when hooks execute and how they integrate with agent workflows

---

## 🔗 What You Built

**In this exercise:**

- `.github/hooks/quality.json` — Quality gate configuration that validates code before creation
- `.github/hooks/scripts/lint-check.sh` — Validation script that runs ESLint and returns actionable feedback
- `.github/hooks/logs/quality.log` — Audit trail of quality checks (violations caught, corrections validated)
- Integration with your project's ESLint configuration

**How it compounds:**

| Previous Modules                                           | This Module                                           | Combined Power                                                                                                                            |
| ---------------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| Exercise 12.1: Security hooks prevent dangerous operations | Exercise 12.3: Quality hooks prevent style violations | Comprehensive governance: security AND quality enforced at the point of creation—nothing reaches disk without validation                  |
| Exercise 12.2: Audit logs track all operations             | Exercise 12.3: Quality logs show violations prevented | Complete evidence: "These 47 violations were caught and fixed automatically"—prove quality improvement with data                          |
| Module 4: Custom instructions set coding standards         | Exercise 12.3: Hooks enforce those standards          | Instructions guide AI, hooks guarantee compliance—the difference between "please follow these rules" and "you cannot violate these rules" |

**Elena's ROI calculation:**

- **Before:** 12 style violations per sprint × ~6 min per fix = 72 min reactive work + 3 review rounds × 25 min = 75 min wasted per feature
- **After:** 0 violations reach disk, real-time correction during generation = 0 rework, 1 review round
- **Time saved:** 75 minutes per feature (assuming 3 review cycles eliminated)
- **Sprint impact:** 75 min × 8 features = 10 hours saved per sprint
- **Quality improvement:** Style violations: 12 → 0 per sprint
- **Annual impact:** 10 hours × 26 sprints = 260 hours saved + improved code consistency across the entire codebase

**Sarah's broader insight:**

> "We documented standards in Module 1, taught Copilot our patterns in Module 4, and now in Module 12 we're **enforcing** them programmatically. This is the difference between 'best practices' and 'impossible to violate practices.' Instructions are suggestions; hooks are gates. Together they create a system where quality is built-in, not inspected-in."

---

## ➡️ Next Module

**[Module 13: Advanced Integration Patterns](../13-advanced-integration/README.md)** — Orchestrating hooks, agents, skills, and instructions into cohesive workflows that adapt to your team's unique process

> _"We have all the pieces—instructions, agents, skills, and hooks. Now: how do we compose them into a system that's greater than the sum of its parts?"_  
> — David, ready to architect the integrated experience

---

## 🎯 Module Complete: Governance Achieved

You've implemented three critical hooks that transform AI agents from "helpful but risky" to "productive and governed":

1. **Security Policy Enforcement (12.1)** — Prevents dangerous operations before execution
2. **Compliance Audit Trail (12.2)** — Logs every session and tool use for complete visibility
3. **Quality Gate Integration (12.3)** — Validates code against standards in real-time

**Combined impact:**

- Security violations: 2 per sprint → 0 (prevented)
- Audit time: 20 min per query → 2 min (automated)
- Quality rework: 75 min per feature → 0 (real-time validation)
- Total time saved: ~150 minutes per sprint
- **New capability unlocked:** AI agents operate safely in regulated environments with full compliance evidence

The team can now move fast with confidence—hooks ensure agents stay within approved boundaries while instructions and skills make them productive. Velocity with governance.
