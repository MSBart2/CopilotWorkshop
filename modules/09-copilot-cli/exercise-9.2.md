# Exercise 9.2: Scripting CI/CD Automation

## 🔨 Exercise

### Exercise 9.2: Scripting CI/CD Automation — "From Interactive to Automated"

**Lead:** Marcus ⭐ | **Support:** David 🤝 | **Time:** 15 min

#### 📖 The Challenge

Pipeline failures are expensive. When the FanHub build breaks, Marcus spends 25 minutes manually investigating: checking test output, examining build logs, validating dependencies, and tracing configuration issues. The process involves 12 separate debugging steps—each requiring manual execution and interpretation. Worse, there's no pattern detection: the same root cause can manifest differently, requiring full investigation each time.

David reviews failed builds to ensure architectural standards aren't violated, but without automated analysis, he's dependent on Marcus's investigation notes. The manual handoff adds another 15 minutes and often misses subtle issues that only surface under specific conditions.

This exercise transforms the interactive CLI workflows from Exercise 9.1 into programmatic automation—enabling AI-powered build analysis that runs automatically on every pipeline failure, identifies patterns, and surfaces actionable fixes without human intervention.

> 💡 **Mode Selection:** Exercise 9.1 used **Plan Mode** (interactive sessions with collaborative planning) for complex debugging where clarifying questions help. This exercise uses **Programmatic Mode** (`copilot -p`) for CI/CD automation where tasks are well-defined and must run headlessly without human interaction. Both modes can leverage real-time steering and cloud delegation.

#### 🔄 The Transformation

| Before ❌ | After ✨ |
|-----------|----------|
| Build fails at 2 AM. Marcus wakes up to Slack alert. SSHs into build server. Manually checks: test output (Jest failures?), build logs (compilation errors?), package.json (dependency conflicts?), Docker build (layer failures?), environment vars (missing configs?). After 12 separate checks, identifies issue was a missing peer dependency. Fixes and re-runs pipeline. | Build fails at 2 AM. Automated script runs: `copilot -p "Analyze build failure in /var/log/build.log and suggest fix" --allow-tool 'shell'`. CI system receives structured output: "Missing peer dependency: @testing-library/react@13.x required by @testing-library/user-event. Add to package.json." Marcus wakes up to fix already identified, implements in 2 minutes. |
| **Investigation time:** 25 min per failure<br>**Manual steps:** 12 separate checks<br>**Pattern detection:** None<br>**After-hours pages:** 8-12 per month<br>**Root cause clarity:** Variable | **Investigation time:** 5 min automated + 2 min human review<br>**Manual steps:** 3 (review, fix, re-run)<br>**Pattern detection:** Automatic cross-build analysis<br>**After-hours pages:** 2-3 per month<br>**Root cause clarity:** Structured output every time |

#### 🎯 Your Goal

Create programmatic CLI automation scripts that analyze build failures automatically, reducing investigation time from 25 minutes to under 5 minutes and enabling integration into CI/CD pipelines.

#### 📋 Steps

1. **Create Programmatic Build Analyzer Script**
   
   Create a script that uses Copilot CLI in programmatic mode to analyze build failures:
   
   ```bash
   cd /workspaces/CopilotTraining/fanhub
   mkdir -p scripts
   ```
   
   Create `scripts/analyze-build-failure.sh`:
   
   ```bash
   #!/bin/bash
   
   # Programmatic Copilot CLI for automated build analysis
   # Usage: ./analyze-build-failure.sh <log-file-path>
   
   LOG_FILE=$1
   
   if [ -z "$LOG_FILE" ]; then
     echo "Usage: $0 <log-file-path>"
     exit 1
   fi
   
   if [ ! -f "$LOG_FILE" ]; then
     echo "Error: Log file not found: $LOG_FILE"
     exit 1
   fi
   
   echo "🔍 Analyzing build failure with Copilot CLI..."
   echo ""
   
   # Use programmatic mode with --allow-tool for automated execution
   copilot -p "Analyze the build failure in $LOG_FILE. Identify:
   1. The root cause of the failure
   2. Which component failed (tests, build, dependencies, Docker)
   3. Specific files or configurations involved
   4. Concrete fix with commands to implement
   
   Provide structured output with severity and fix steps." --allow-tool 'shell'
   
   echo ""
   echo "✅ Analysis complete"
   ```
   
   Make it executable:
   
   ```bash
   chmod +x scripts/analyze-build-failure.sh
   ```
   
   **What you've created:** A programmatic script that can run in CI/CD pipelines without human interaction, automatically analyzing failures and generating actionable reports.

2. **Test the Script with Real-Time Steering**
   
   Introduce a deliberate build failure to test the automation:
   
   ```bash
   cd /workspaces/CopilotTraining/fanhub/backend
   
   # Break the build by introducing a syntax error
   echo "const broken = {" >> src/index.js
   
   # Try to build and capture the output
   npm run build > /tmp/build-failure.log 2>&1 || true
   ```
   
   Now run your analyzer script:
   
   ```bash
   cd /workspaces/CopilotTraining/fanhub
   ./scripts/analyze-build-failure.sh /tmp/build-failure.log
   ```
   
   **What to observe:**
   - Copilot CLI reads the log file automatically
   - Identifies the syntax error and specific line number
   - Suggests the exact fix (remove the incomplete line)
   - Provides structured output suitable for CI/CD consumption
   
   **Try real-time steering:** While the analysis is running, if you want to add more context or change direction, you can queue follow-up instructions. For example, in a more complex scenario:
   
   ```
   Also check if there are any related TypeScript configuration issues
   ```
   
   This message will be queued and processed, allowing you to steer the analysis mid-generation without stopping the flow.
   
   Fix the issue:
   
   ```bash
   cd backend
   # Remove the broken line from src/index.js
   git restore src/index.js
   
   # Verify build works
   npm run build
   ```

3. **Create CI/CD Integration Pattern with Cloud Delegation**
   
   Create an enhanced script that integrates with the custom `build-pipeline-analyzer` skill from Module 5 and demonstrates cloud delegation for long-running analysis:
   
   ```bash
   cd /workspaces/CopilotTraining/fanhub/scripts
   ```
   
   Create `scripts/ci-failure-handler.sh`:
   
   ```bash
   #!/bin/bash
   
   # CI/CD Build Failure Handler with Custom Agent and Cloud Delegation
   # Integrates custom build-pipeline-analyzer skill for specialized analysis
   
   BUILD_LOG=${1:-"/tmp/build.log"}
   WORKSPACE="/workspaces/CopilotTraining/fanhub"
   
   echo "🚨 Build Failure Detected"
   echo "📊 Running automated analysis..."
   echo ""
   
   # For complex analysis, use cloud delegation to free terminal
   # The --delegate flag (when available) sends long-running tasks to background agents
   copilot -p "Using the build-pipeline-analyzer skill, analyze the build failure in $BUILD_LOG.
   
   Context: FanHub application (Node.js backend + React frontend)
   
   Provide:
   1. Failure classification (dependency, test, compilation, Docker)
   2. Root cause analysis
   3. Impact assessment (blocks deployment? breaks dev environment?)
   4. Fix recommendation with exact commands
   5. Prevention strategy (lint rule? test case? config validation?)
   
   Format output as structured markdown for Slack notification." \
   --allow-tool 'shell'
   
   echo ""
   echo "📝 Analysis saved for team review"
   echo "💡 Tip: Review output and implement suggested fix"
   ```
   
   Make it executable and test with the test log:
   
   ```bash
   chmod +x scripts/ci-failure-handler.sh
   ./scripts/ci-failure-handler.sh /tmp/build-failure.log
   ```
   
   **What you've built:** A CI/CD-ready script that:
   - Runs automatically when builds fail
   - Uses custom agent skills for specialized analysis
   - Supports cloud delegation for complex analysis without blocking terminal
   - Generates structured output for notifications (Slack, email, GitHub comments)
   - Provides prevention strategies, not just immediate fixes
   
   **Cloud Delegation Benefits:**
   - Long-running analysis doesn't block your terminal
   - Continue working on other tasks while agents work in the background
   - Get notifications when analysis completes
   - Ideal for comprehensive codebase analysis or multi-file refactoring tasks

#### ✅ Success Criteria

- [ ] Created `scripts/analyze-build-failure.sh` using programmatic Copilot CLI mode
- [ ] Tested script successfully analyzes build logs and identifies root causes
- [ ] Created `scripts/ci-failure-handler.sh` with custom skill integration
- [ ] Verified scripts can run without interactive approval (using `--allow-tool`)

> 📂 **Compare Your Work**: See [`examples/completed-config/skills/build-pipeline-analyzer/`](../../examples/completed-config/skills/build-pipeline-analyzer/) for reference implementation

#### 📚 Official Docs

- [Using GitHub Copilot CLI](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/use-copilot-cli) — Programmatic mode usage with `-p` flag and tool permissions
- [About GitHub Copilot CLI Agents](https://docs.github.com/en/copilot/concepts/agents/about-copilot-cli) — Built-in agent capabilities for task automation
- [Installing GitHub Copilot CLI](https://docs.github.com/en/copilot/how-tos/set-up/install-copilot-cli) — Security model and trusted directories

---

## 🔗 What You Built

**In this exercise:**
- `scripts/analyze-build-failure.sh` — Programmatic build failure analysis for automated pipelines
- `scripts/ci-failure-handler.sh` — CI/CD-integrated failure handler with custom skill support
- **Automated investigation pattern** — Reduces 25-minute manual debugging to 5-minute automated analysis

**How it compounds:**

| Previous Modules | This Module | Combined Power |
|------------------|-------------|----------------|
| Custom agents (Module 7) | Programmatic CLI scripts | Agents now run in CI/CD pipelines automatically |
| Build analyzer skill (Module 5) | CI failure handler | Specialized build analysis integrated into deployment automation |
| Interactive debugging (Exercise 9.1) | Scripted automation | Same intelligence, zero human interaction required |

**Marcus's outcome:** Build failures now trigger automated analysis that identifies root causes, suggests fixes, and provides prevention strategies—all before he even sees the failure notification. Investigation time: 25→5 minutes. After-hours pages: 8-12→2-3 per month.

---

## ➡️ Next Up

**[Exercise 9.3: Infrastructure Documentation Generation](exercise-9.3.md)** — Automate the creation of architecture diagrams and deployment documentation using CLI workflows.

> *"The build automation is solid, but our infrastructure docs are always 3 days behind reality. Can CLI help with that?"*  
> — Marcus, looking at outdated architecture diagrams

---
