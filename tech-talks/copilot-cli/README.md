# GitHub Copilot CLI

Terminal-native AI for DevOps automation and interactive problem-solving

---

## The Command Line Problem

### Key Points

- **Terminal-centric workflows**
  DevOps, infrastructure, and system administration happen at the command line

- **Manual investigation overhead**
  Debugging Docker containers, analyzing logs, troubleshooting deployments take hours

- **Automation limitations**
  Traditional CLI tools execute predefined commands without contextual understanding

- **Context switching cost**
  Moving between terminal and IDE/web for AI assistance breaks concentration

### Narrative

Modern infrastructure lives in terminals—Docker orchestration, Kubernetes deployments, CI/CD pipelines, log analysis. Developers spend hours manually investigating failures, parsing logs, and diagnosing configuration issues. Traditional automation tools execute fixed scripts without adapting to context. When problems arise, engineers search documentation, trial-and-error solutions, or context-switch to IDE for AI help. GitHub Copilot CLI brings conversational AI directly into terminal workflows, enabling intelligent automation and collaborative problem-solving without leaving the command line.

---

## GitHub Copilot CLI: Architecture

### Two Operating Modes

**Interactive Mode (`copilot`):**
- Conversational sessions for iterative problem-solving
- Maintains context across commands and file operations
- Ideal for debugging complex issues with unknown root causes
- Perfect for "figure this out" scenarios

**Programmatic Mode (`copilot -p "prompt" --allow-tools`):**
- Single-command execution for scripts and pipelines
- Designed for CI/CD automation and headless operation
- Combined with approval options for unattended workflows
- Essential for "do this specific thing" with known requirements

### Narrative

Copilot CLI operates in two modes optimized for different automation needs. Interactive mode enables terminal-based conversations—you ask questions, Copilot responds, maintains context across operations, and collaboratively solves complex problems. Programmatic mode enables scripted AI operations—single commands that execute in CI/CD pipelines, produce structured output, and integrate with existing automation. Same AI capabilities, different interfaces for interactive debugging vs automated workflows.

---

## Plan Mode: Collaborative Planning

### The Fundamental Shift

**Traditional workflow:**  
Request → AI generates solution → You review and fix → Repeat

**Plan Mode workflow:**  
Request → AI asks clarifying questions → Collaborate on plan → Review plan → Generate implementation

### Key Capabilities

**Collaborative Planning:**
- AI actively asks clarifying questions before building
- Confirm requirements and scope before code generation
- Prevents misunderstandings, reduces iteration cycles
- Example: "Should I check docker-compose config, logs, or both?"

**Advanced Reasoning Models:**
- GPT-5.2-Codex optimized for code generation
- Configurable reasoning effort (Low, Medium, High, Extra High)
- Toggle reasoning visibility (Ctrl+T) to see model's thinking process
- Essential for architectural decisions and multi-step refactoring

**Real-Time Steering:**
- Enqueue additional messages while AI thinks
- Inline feedback on rejected tool permissions
- Maintain conversation flow while correcting course
- Queue follow-up instructions mid-response

### Narrative

Plan Mode transforms Copilot CLI from reactive assistant to proactive collaborator. Instead of generating code immediately, the AI asks questions: "Should I check container logs or configuration first?" "Do you want environment variable analysis?" This collaborative planning reduces trial-and-error from 8 attempts to 2, eliminates ambiguity before code generation, and enables complex architectural changes with transparent reasoning. Engineers guide the AI through clarifying questions, approve plans before execution, and steer responses in real-time.

---

## Cloud Delegation

### Background Agent Execution

**Prefix prompts with `&`:**
- Shorthand for delegating work to GitHub Copilot coding agent in cloud
- Frees terminal for other tasks while agents work asynchronously
- Notifications when background work completes
- Ideal for comprehensive codebase analysis or large-scale refactoring

### Use Cases

- **Codebase-wide analysis:** Delegate full repository security audits
- **Large refactoring:** Move API patterns across 50+ files in background
- **Documentation generation:** Create docs from entire service while you debug
- **Test scaffolding:** Generate test suites for multiple modules asynchronously

### Narrative

Complex operations that require analyzing entire codebases or modifying dozens of files can block your terminal for minutes. Cloud delegation solves this: prefix your prompt with `&` and the work moves to GitHub's coding agent running in the cloud. Your terminal stays free for other work. You receive notifications when the background agent completes. This enables parallel workflows—delegate a large refactoring while you continue debugging locally, review the agent's PR when it finishes.

---

## Automatic Context Management

### Infinite Sessions

**Auto-compaction:**
- When conversation approaches 95% of token limit, automatically compresses history
- Maintains important context while pruning redundant information
- Enables virtually infinite terminal sessions
- No interruptions, no manual cleanup

**Manual Control:**
- `/compact` command to manually compress context anytime
- Press Escape to cancel if you change your mind
- `/context` shows detailed token usage breakdown
- Understand how context window is being used

**Repository Memory:**
- AI remembers facts about your codebase across sessions
- Stores conventions, patterns, preferences as it learns
- Memory tool captures coding standards and project structure
- Cross-session learning makes future interactions more productive

### Narrative

Traditional AI conversations hit token limits and lose context. Copilot CLI's automatic compaction solves this: when your session approaches the limit, the AI compresses conversation history in the background without interrupting your work. Important context persists, redundant details are pruned. Repository memory extends this across sessions—Copilot remembers your team's conventions, architectural patterns, and preferred approaches. The result: virtually infinite debugging sessions that get smarter over time.

---

## Built-in Specialized Agents

### Four Agent Types

**Explore Agent:**
- Fast codebase analysis without cluttering main context
- Searches files, finds patterns, explains architecture
- Returns focused answers under 300 words
- Safe to call in parallel with other operations

**Task Agent:**
- Executes commands (tests, builds, lints) with smart output filtering
- Returns brief summary on success, full output on failure
- Minimizes noise in main conversation
- Ideal for "run this and tell me if it worked"

**Plan Agent:**
- Analyzes dependencies and creates implementation strategies
- Multi-step planning for complex changes
- Creates structured plans you can review before execution
- Best for architectural decisions and refactoring

**Code-review Agent:**
- Reviews changes with extremely high signal-to-noise ratio
- Only surfaces genuine issues: bugs, security, logic errors
- Never comments on style or formatting
- Focuses human attention where it matters

### Narrative

Copilot CLI automatically delegates to specialized agents based on your request. Ask "how does auth work?"—Explore agent analyzes code and returns concise explanation. Run "execute tests"—Task agent runs command and summarizes results. Request "plan API refactoring"—Plan agent analyzes dependencies and creates strategy. Ask for review—Code-review agent analyzes changes and surfaces only critical issues. Multiple agents can work in parallel: explore codebase while task agent runs tests while plan agent creates refactoring strategy.

---

## Use Case: Docker Debugging with Plan Mode

### The Problem

- **45-minute investigation cycles**
  Manual log parsing, config checking, environment variable verification

- **8 trial-and-error attempts**
  Guess at solutions without understanding root cause

- **No systematic approach**
  Ad-hoc debugging without methodology or documentation

### The Solution

**Interactive session with Plan Mode:**

```bash
copilot
> "Debug why the backend container won't start"

# Copilot asks clarifying questions:
# "Should I check docker-compose config, logs, or both?"
# "Do you want environment variable analysis?"

> "Start with logs, then check config if needed"

# Copilot shows reasoning, creates investigation plan
# You approve or steer with follow-up prompts
# Implementation happens after plan confirmed
```

### Impact

- **45 minutes → 8 minutes** debug time (83% reduction)
- **8 attempts → 2 attempts** (AI asks right questions first)
- **Automated log analysis** with reasoning transparency
- **Documented workflow** reusable by entire team

### Narrative

Traditional Docker debugging is trial-and-error: check logs, guess configuration issue, restart container, repeat 8 times over 45 minutes. Plan Mode transforms this into collaborative investigation. You request help, Copilot asks clarifying questions to understand context, you collaboratively decide on investigation strategy, AI executes plan with transparent reasoning. Root cause identified in 2 attempts instead of 8. Debugging time drops from 45 minutes to 8 minutes. The conversation becomes documentation: next time someone faces similar issue, they review the session transcript.

---

## Use Case: CI/CD Automation

### The Problem

- **25-minute manual investigation** when builds fail
- **12-step debugging process** executed manually each time
- **No pattern recognition** across similar failures

### The Solution

**Programmatic CLI in pipeline:**

```yaml
# .github/workflows/build.yml
- name: Analyze build failure
  if: failure()
  run: |
    copilot -p "Analyze build failure and suggest fixes" \
      --allow-tools \
      --model gpt-5.2-codex
```

**Custom skill integration:**

```bash
# Uses .github/skills/build-pipeline-analyzer/ automatically
copilot -p "Why did the build fail?" --allow-tools
```

### Impact

- **25 minutes → 5 minutes** investigation time
- **12 manual steps → 3 automated steps**
- **Pattern recognition enabled** across historical failures
- **Zero human intervention** for known failure types

### Narrative

Build failures typically trigger manual investigation: developers review logs, check configuration, verify dependencies—12 steps taking 25 minutes. Programmatic Copilot CLI automates this: when builds fail in CI/CD, pipeline executes `copilot -p "analyze failure"` with build logs as context. AI analyzes error patterns, checks recent changes, references custom build-pipeline-analyzer skill, and suggests fixes. Teams using this automation reduced failure investigation from 25 minutes to 5 minutes, automated away 9 of 12 manual debugging steps, and gained pattern recognition that identifies repeat failures instantly.

---

## Use Case: Infrastructure Documentation

### The Problem

- **3-day documentation lag** after deployments
- **Manual diagram creation** from infrastructure code
- **Outdated architecture docs** due to update overhead

### The Solution

**Automated generation from infrastructure-as-code:**

```bash
# Generate docs from docker-compose.yml
copilot "Generate architecture documentation from docker-compose.yml"

# Create system diagrams
copilot "Create deployment diagram showing service dependencies"

# Update docs when config changes
copilot "Update architecture.md to reflect new Redis cache service"
```

### Impact

- **3 days → 30 minutes** documentation time
- **Automated diagram generation** from infrastructure code
- **Real-time architecture updates** when configs change
- **Always-current docs** for stakeholder presentations

### Narrative

Infrastructure documentation lags deployment by days because engineers prioritize working systems over updated docs. Manual diagram creation from docker-compose.yml and Kubernetes configs is tedious. Copilot CLI reverses this: generate documentation directly from infrastructure code, create system diagrams automatically, update architecture docs when configs change. Teams using automated documentation reduced lag from 3 days to 30 minutes, ensured docs stay current with automatic updates, and eliminated manual diagram creation overhead.

---

## Enhanced Permissions Experience

### Security with Convenience

**Session-level approvals:**
- "Approve for session" auto-approves pending parallel requests of same type
- Reduces interruptions during complex multistep operations
- Maintains security boundaries while reducing friction

**Convenience flags:**
- `--allow-all` enables all permissions at once
- `--yolo` flag for maximum AI autonomy (use carefully!)
- Useful in trusted environments with well-defined scope

**Inline feedback on rejection:**
- Reject tool permission and explain why in one step
- AI adapts approach without stopping entirely
- Natural conversation flow when guiding away from certain actions

### Narrative

Permission management balances security with productivity. Copilot CLI enhances this with session-level approvals—when you approve file editing once, parallel edit requests auto-approve for the entire session, reducing interruptions. Convenience flags like `--allow-all` enable full autonomy in trusted workflows. Rejecting permissions now supports inline feedback: "No, don't edit that file because it's auto-generated" teaches the AI immediately without breaking conversation flow. The result: security boundaries remain, but permission friction decreases dramatically.

---

## Code Review in CLI

### Terminal-Native Quality Checks

**`/review` command:**
- Analyzes code changes directly in CLI without leaving terminal
- Checks staged or unstaged changes for quick pre-commit validation
- High signal-to-noise ratio—only surfaces genuine issues

**What it catches:**
- Bugs and logic errors
- Security vulnerabilities
- Architectural violations

**What it ignores:**
- Style and formatting (use linters)
- Trivial issues that don't impact quality

### Use Cases

- **Pre-commit sanity check:** Quick validation before committing
- **Terminal-only workflow:** Review without opening IDE or web UI
- **Batch change validation:** Check multiple file changes in one command

### Narrative

Code review traditionally requires opening PR in browser or IDE. Copilot CLI's `/review` command brings quality checks into terminal workflows: analyze staged changes before committing, validate unstaged modifications during development, check batch refactorings without leaving command line. The review focuses on high-signal issues—bugs, security problems, architectural violations—while ignoring style and trivial matters. This enables terminal-only workflows: edit files, review with `/review`, commit when satisfied, never context-switch to web UI.

---

## Shell Mode Improvements

### Native Terminal Integration

**History filtering:**
- Shell mode history navigation (`!` prefix) now filters by prefix
- Typing `!git` and pressing up arrow cycles only through previous git commands
- Faster to find and rerun specific command patterns

**Clean environment:**
- Copilot excludes shell commands from Bash and PowerShell history files
- Terminal history stays clean, no AI command pollution
- Separation between shell work and AI conversations

**Tab title display:**
- Current AI intent displays in terminal tab title
- See what Copilot is working on at a glance
- Useful when running multiple terminal sessions

### Narrative

Shell mode integrates Copilot into native terminal workflows without polluting your command history. Prefix-filtered history makes it easy to find and rerun previous commands: `!docker` + up arrow cycles through Docker operations only. Copilot commands stay out of your Bash/PowerShell history files, keeping shell history clean. Terminal tab titles display current AI intent, useful for monitoring parallel sessions. The result: AI assistance feels native to the terminal, not bolted on.

---

## GitHub CLI Integration

### Seamless Access

**New entry point:**
- Run `gh copilot` as alternative to standalone `copilot` command
- First-time use prompts automatic installation
- GitHub Actions integration with auto-install
- No additional setup for teams already using GitHub CLI

**Update methods:**
- `brew upgrade copilot-cli` (macOS)
- `winget upgrade GitHub.Copilot` (Windows)
- `npm install -g @github/copilot@latest` (Node.js)
- Auto-update handles it automatically

### Narrative

Teams already using GitHub CLI (`gh`) can access Copilot CLI through `gh copilot`—no separate installation required. First-time use prompts automatic setup. GitHub Actions workflows auto-install without confirmation prompts. This integration reduces adoption friction: existing GitHub CLI users get Copilot capabilities through familiar command patterns, updates happen through existing package managers, and CI/CD integration is seamless.

---

## Best Practices

### When to Use Interactive Mode

**Complex debugging:**
- Docker networking issues with unknown root cause
- Multi-service failures requiring investigation
- Configuration problems across multiple files

**Architectural decisions:**
- Refactoring that touches many components
- System design requiring reasoning transparency
- Learning unfamiliar codebases

**Iterative exploration:**
- Understanding legacy code
- Investigating dependency chains
- Exploring alternative implementations

### When to Use Programmatic Mode

**CI/CD automation:**
- Build failure analysis in pipelines
- Automated test result interpretation
- Deployment validation checks

**Simple operations:**
- Well-defined tasks with clear requirements
- One-off commands that don't need conversation
- Fast iterations with known solutions

**Headless workflows:**
- Scripted operations without human interaction
- Batch processing of repetitive tasks
- Scheduled infrastructure checks

### Narrative

Effective Copilot CLI usage requires matching mode to task. Interactive mode excels at complex debugging where collaborative planning clarifies root causes, architectural decisions requiring reasoning transparency, and iterative exploration of unfamiliar systems. Programmatic mode suits CI/CD automation where tasks are well-defined, simple operations with clear requirements, and headless workflows running without human oversight. Use plan mode for "figure this out together" scenarios, programmatic mode for "do this specific thing" automation.

---

## Advanced Reasoning Configuration

### Configurable Thinking Depth

**Reasoning effort levels:**
- **Low:** Fast responses for straightforward queries
- **Medium:** Balanced speed and depth for typical tasks
- **High:** Extended reasoning for complex problems
- **Extra High:** Maximum depth for critical architectural decisions

**Visibility control:**
- Press **Ctrl+T** to toggle reasoning visibility
- See how Copilot thinks through problems
- Setting persists across sessions
- Useful for understanding AI decision-making process

### When to Adjust Reasoning

**Use Low/Medium for:**
- Quick debugging queries
- Routine operational tasks
- Fast iterations

**Use High/Extra High for:**
- Architectural refactoring
- Complex multi-service debugging
- Critical security decisions

### Narrative

GPT models supporting extended thinking offer configurable reasoning effort—balancing response speed with analysis depth. Low effort answers simple queries fast. Extra High effort tackles architectural decisions requiring deep analysis. Toggling reasoning visibility (Ctrl+T) shows how Copilot thinks through complex problems, useful for understanding AI decision-making and learning optimal prompting patterns. Teams adjust reasoning effort based on task criticality: routine operations use low effort for speed, architectural changes use extra high for thorough analysis.

---

## Custom Instructions in CLI

### Repository-Specific Behavior

**Automatic loading:**
- `.github/copilot-instructions.md` applies to CLI sessions
- Custom instructions combine instead of priority fallbacks
- Team conventions accessible in terminal workflows

**Example:**

```markdown
# .github/copilot-instructions.md
When debugging Docker issues:
1. Check container logs first
2. Verify environment variables in .env
3. Validate service dependencies in docker-compose.yml
```

**Result:**
CLI sessions automatically follow team debugging methodology

### Narrative

Repository instructions created for IDE usage automatically apply to Copilot CLI sessions. Custom instructions now combine instead of using priority-based fallbacks, giving flexibility in instruction composition. Teams encode operational knowledge—Docker debugging procedures, build troubleshooting workflows, deployment checklists—into repository instructions. CLI sessions automatically reference these conventions, ensuring consistent practices across engineers and enabling new team members to leverage institutional knowledge immediately.

---

## Common Pitfalls

### Anti-Patterns to Avoid

**Using interactive mode for automation:**
- ❌ Wrong: Long conversational sessions in CI/CD pipelines
- ✅ Right: Programmatic mode with specific prompts for automation

**Ignoring Plan Mode for complex work:**
- ❌ Wrong: Immediately generating solutions for multi-step debugging
- ✅ Right: Collaborative planning to clarify requirements first

**Over-approving permissions:**
- ❌ Wrong: Using `--yolo` flag in production pipelines
- ✅ Right: Thoughtful permission boundaries based on environment

**Not leveraging repository memory:**
- ❌ Wrong: Repeating same context every session
- ✅ Right: Let AI remember team conventions across sessions

### Narrative

Common mistakes include using interactive mode in CI/CD (use programmatic mode for automation), skipping Plan Mode for complex debugging (collaborative planning reduces iteration cycles), over-approving permissions in production (maintain security boundaries), and not leveraging repository memory (AI learns team conventions over time). Effective Copilot CLI usage requires matching mode to task, using Plan Mode for complexity, maintaining appropriate security boundaries, and letting repository memory build institutional knowledge.

---

## Integration with Other Interfaces

### Multi-Interface Workflow

**IDE (VS Code):**
- Implementation and code editing
- Interactive debugging with breakpoints
- Test-driven development

**Web (github.com/copilot):**
- PR reviews and issue triage
- Cross-repository analysis
- Stakeholder communication

**CLI (Copilot CLI):**
- Infrastructure automation
- Build and deployment debugging
- Terminal-native workflows

**Coding Agent:**
- Background execution of large tasks
- Autonomous refactoring and analysis
- Asynchronous PR creation

### Narrative

Copilot CLI completes the multi-interface AI ecosystem. Developers code in VS Code, manage workflows in browsers, automate operations in terminals. Repository instructions, skills, and agents work identically across all interfaces. Teams adopt interface-appropriate patterns: IDE for implementation, web for coordination, CLI for automation. Work happens naturally, AI assistance follows throughout, and customizations apply universally.

---

## Metrics and ROI

### Quantifiable Improvements

**Debugging efficiency:**
- **45 minutes → 8 minutes** Docker troubleshooting (83% reduction)
- **8 attempts → 2 attempts** with Plan Mode collaboration
- **Automated log analysis** eliminating manual parsing

**CI/CD automation:**
- **25 minutes → 5 minutes** build failure investigation
- **12 manual steps → 3 automated steps** in debugging workflows
- **Pattern recognition** across historical failures

**Documentation:**
- **3 days → 30 minutes** infrastructure documentation lag
- **Automated diagram generation** from infrastructure-as-code
- **Always-current docs** through automated updates

**Team productivity:**
- **7.4 hours/month** saved per engineer on incident debugging
- **Zero delay** on build failure analysis in automated pipelines
- **100% documentation coverage** vs previous 60% coverage

### Narrative

Copilot CLI ROI manifests in measurable time savings across DevOps workflows. Docker debugging drops from 45 minutes to 8 minutes—7.4 hours saved monthly per engineer. Build failure investigation automation saves 25 minutes per incident. Infrastructure documentation lag disappears: 3-day delays become 30-minute automated generation. Teams quantify value through reduced debugging cycles, automated investigation workflows, and eliminated documentation debt.

---

## The Terminal-Native AI Vision

### Complete CLI Coverage

**Interactive problem-solving:**
- Collaborative debugging with Plan Mode
- Architectural decisions with reasoning transparency
- Learning unfamiliar systems through conversation

**Programmatic automation:**
- CI/CD integration for build and deployment validation
- Scripted operations in infrastructure pipelines
- Batch processing of repetitive tasks

**Cloud delegation:**
- Background execution of large-scale refactoring
- Asynchronous codebase analysis
- Parallel workflows with terminal free for other work

**Repository memory:**
- Cross-session learning of team conventions
- Accumulated institutional knowledge
- Continuous improvement through experience

### Narrative

GitHub Copilot CLI enables complete terminal-native AI workflows. Interactive mode handles complex problem-solving through collaborative planning. Programmatic mode automates CI/CD operations. Cloud delegation enables background execution. Repository memory accumulates team knowledge across sessions. The result: terminal workflows gain AI intelligence without sacrificing the power, speed, and composability developers expect from command-line tools. Infrastructure operations become collaborative conversations, automation becomes contextually aware, and terminal productivity increases dramatically.

---

## Key Takeaways

### Core Insights

- **Plan Mode transforms debugging**
  Collaborative planning reduces iteration from 8 attempts to 2, clarifies requirements before code generation

- **Two modes for two needs**
  Interactive for complex problem-solving, programmatic for automation—match mode to task

- **Cloud delegation enables parallelism**
  Background agents free terminal for other work, enable simultaneous workflows

- **Context never runs out**
  Automatic compaction and repository memory enable virtually infinite sessions

- **Terminal stays native**
  Shell integration, history filtering, clean environment—AI feels built-in, not bolted on

### Narrative

GitHub Copilot CLI brings conversational AI into terminal workflows without sacrificing the speed and composability developers expect. Plan Mode's collaborative planning reduces debugging trial-and-error dramatically. Programmatic mode enables CI/CD automation with contextual intelligence. Cloud delegation allows parallel workflows. Automatic context management removes session limits. The result: terminal productivity gains AI intelligence while maintaining the power, flexibility, and efficiency that make command-line tools indispensable.

---

## Getting Started

### Immediate Actions

1. **Install Copilot CLI**
   ```bash
   gh copilot  # Auto-installs on first run
   ```

2. **Try interactive mode**
   ```bash
   copilot
   > "Analyze Docker container logs"
   ```

3. **Experience Plan Mode**
   ```bash
   copilot
   > "Debug why build fails"
   # Copilot asks clarifying questions
   ```

4. **Test programmatic mode**
   ```bash
   copilot -p "List all running containers" --allow-tools
   ```

5. **Delegate to cloud**
   ```bash
   copilot
   > "&Analyze security vulnerabilities across codebase"
   ```

### Next Steps

- Configure repository instructions for team debugging workflows
- Integrate programmatic mode into CI/CD pipelines
- Create custom skills for infrastructure-specific operations
- Measure debugging time reduction and automation efficiency gains

### Narrative

Adopting Copilot CLI requires minimal setup—`gh copilot` auto-installs on first run. Start with interactive mode to experience collaborative planning. Try Plan Mode for complex debugging to see iteration reduction. Test programmatic mode for automation scenarios. Delegate large tasks to cloud to experience parallel workflows. Measure impact through debugging time saved, automation enabled, and terminal productivity gained.

---

## Resources

**Official Documentation:**
- [About GitHub Copilot CLI](https://docs.github.com/en/copilot/concepts/agents/about-copilot-cli)
- [Using GitHub Copilot CLI](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/use-copilot-cli)
- [Installing GitHub Copilot CLI](https://docs.github.com/en/copilot/how-tos/set-up/install-copilot-cli)

**Advanced Features:**
- [Plan Mode Announcement](https://github.blog/changelog/2026-01-21-github-copilot-cli-plan-before-you-build-steer-as-you-go/)
- [Built-in Agents Reference](https://docs.github.com/en/copilot/concepts/agents)
- [Programmatic Automation Patterns](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/use-copilot-cli)

---

**Terminal-native AI for DevOps automation and interactive problem-solving**
