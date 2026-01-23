# Exercise 9.1: Terminal Installation & Docker Workflow

## 🔨 Exercise

### Exercise 9.1: Terminal Installation & Docker Workflow — "Debugging Docker Where You Live"

**Lead:** Marcus ⭐ | **Support:** Elena 🤝, Sarah 🤝 | **Time:** 15 min

#### 📖 The Challenge

Marcus lives in terminal windows—Docker logs, build output, deployment commands. When containers fail to start, he spends 45 minutes digging through logs, trying different configurations, and manually parsing error messages. Eight trial-and-error attempts later, he finally isolates the issue. Elena needs to validate container configurations match test requirements but lacks visibility into runtime state. Sarah wants to ensure Docker workflows follow team standards but can't scale manual reviews across 12 microservices.

Right now, every Docker issue requires manual investigation: reading logs, inspecting containers, checking network configs, and debugging volume mounts. The investigation cycle blocks deployments and wastes hours of productive time.

This exercise brings Copilot directly into Marcus's terminal—enabling interactive debugging sessions that analyze container state, parse logs intelligently, and suggest fixes based on the actual running environment.

#### 🔄 The Transformation

| Before ❌ | After ✨ |
|-----------|----------|
| Container won't start. Marcus manually inspects logs, checks Dockerfile syntax, validates volume paths, examines network config. Tries rebuilding with different options. Tests port mappings. Eventually finds the issue was a missing environment variable that wasn't obvious from error messages. | Container fails. Marcus starts interactive CLI session with **Plan Mode**: "I need to debug the backend container." Copilot asks: "Should I check the docker-compose config, examine logs, or both?" Marcus: "Both." Copilot creates investigation plan, asks for approval, then analyzes logs and identifies missing `DATABASE_URL` env var. Suggests fix with exact syntax. Issue resolved in one attempt with collaborative planning. |
| **Time:** 45 min per Docker issue<br>**Attempts:** 8 trial-and-error cycles<br>**Log analysis:** Manual grep/search<br>**Context switching:** 6+ terminal tabs | **Time:** 8 min per Docker issue<br>**Attempts:** 2 (plan + fix)<br>**Log analysis:** AI-automated with Plan Mode collaboration<br>**Context switching:** Single session with transparent reasoning |

#### 🎯 Your Goal

Install GitHub Copilot CLI and use interactive sessions to debug FanHub's Docker containers, reducing investigation time from 45 minutes to under 10 minutes.

#### 📋 Steps

1. **Install and Authenticate GitHub Copilot CLI**
   
   Install Copilot CLI using one of the supported methods. Choose based on your platform:
   
   **macOS/Linux (Homebrew):**
   ```bash
   brew install copilot-cli
   ```
   
   **Linux (install script in Codespaces):**
   ```bash
   curl -fsSL https://gh.io/copilot-install | bash
   ```
   
   **Windows (WinGet):**
   ```powershell
   winget install GitHub.Copilot
   ```
   
   **Any platform (npm, requires Node.js 22+):**
   ```bash
   npm install -g @github/copilot
   ```
   
   Verify installation:
   ```bash
   copilot --version
   ```
   
   Start an interactive session (you'll be prompted to authenticate on first use):
   ```bash
   copilot
   ```
   
   Follow the authentication prompts to login with your GitHub account. When asked if you trust the current directory, select **"Yes, proceed"** for this session.
   
   **Expected output:** Interactive welcome message showing available slash commands (`/help`, `/model`, `/context`) and built-in agents (Explore, Task, Plan, Code-review).

2. **Debug a Docker Container Issue (Using Plan Mode)**
   
   Navigate to the FanHub project and introduce a deliberate configuration issue to practice debugging:
   
   ```bash
   cd /workspaces/CopilotTraining/fanhub
   
   # Introduce a test issue: Comment out DATABASE_URL in docker-compose.yml
   # (We'll fix this with Copilot's help)
   ```
   
   Edit `docker-compose.yml` and comment out the `DATABASE_URL` environment variable in the backend service:
   
   ```yaml
   backend:
     # ...
     environment:
       # DATABASE_URL: postgresql://fanhub:fanhub@db:5432/fanhub
   ```
   
   Try to start the containers:
   
   ```bash
   docker-compose up -d
   docker-compose logs backend
   ```
   
   You'll see connection errors. Now start an interactive Copilot CLI session with **Plan Mode**:
   
   ```bash
   copilot
   ```
   
   In the Copilot prompt, ask:
   ```
   I need to debug why the backend container isn't starting. The logs show database connection errors. Can you help me plan the investigation?
   ```
   
   **What to observe with Plan Mode:**
   - **Copilot asks clarifying questions first**: "Do you want me to check the docker-compose configuration, examine the logs, or both?"
   - **Collaborative planning**: Copilot suggests an investigation plan before making changes
   - **You can steer**: Provide additional context or constraints before Copilot proceeds
   - **Transparent reasoning**: Copilot explains why it's checking specific files
   
   Copilot will likely suggest:
   1. Analyzing the docker-compose.yml configuration
   2. Examining the backend service logs
   3. Checking for missing environment variables
   
   Approve the plan, then Copilot will:
   - Automatically read the docker-compose.yml configuration
   - Analyze the backend service logs
   - Identify the missing `DATABASE_URL` environment variable
   - Suggest the exact fix with proper syntax
   
   **Try real-time steering:** While Copilot is working, you can queue a follow-up message:
   ```
   Also check if there are any other missing environment variables
   ```
   
   Follow Copilot's suggestion to restore the environment variable, then verify:
   
   ```bash
   docker-compose down
   docker-compose up -d
   docker-compose ps
   ```
   
   All services should now be healthy.
   
   **Marcus's insight:** "Plan Mode transformed debugging. Instead of jumping straight to solutions, Copilot asks what I actually need. For complex issues, this planning conversation catches edge cases I would've missed. Interactive sessions with Plan Mode cut Docker debugging from 45 minutes to 8 minutes. That's 37 minutes saved per issue—4-5 issues per week = 3 hours back."

3. **Explore Advanced Reasoning Mode**
   
   In the same Copilot CLI session, try using advanced reasoning for a more complex architectural question:
   
   ```
   /model
   ```
   
   **What to observe:** Copilot shows available models and reasoning levels. Select an advanced model for deeper analysis.
   
   Now ask a complex question that benefits from deeper reasoning:
   
   ```
   Analyze our Docker setup and suggest optimizations for production deployment. Consider: multi-stage builds, layer caching, security best practices, and resource limits.
   ```
   
   **What advanced reasoning provides:**
   - **Deeper analysis**: Considers multiple aspects (security, performance, maintainability)
   - **Reasoning transparency**: You can toggle visibility to see the thinking process
   - **Comprehensive recommendations**: Not just quick fixes, but strategic improvements
   
   Copilot might suggest:
   - Multi-stage Dockerfile improvements to reduce image size
   - Security enhancements (non-root users, vulnerability scanning)
   - Resource limits in docker-compose.yml
   - Health check configurations
   
   **Key insight:** Use standard mode for quick debugging, advanced reasoning for architectural decisions and complex optimizations.

4. **Automate Container Health Analysis Workflow**
   
   Create a reusable workflow for checking container health. In the Copilot CLI session:
   
   ```
   Create a bash script called check-docker-health.sh that:
   1. Lists all running containers
   2. Shows logs from any unhealthy containers
   3. Suggests common fixes for typical Docker issues
   ```
   
   Review the generated script and save it to `fanhub/scripts/check-docker-health.sh`. Make it executable:
   
   ```bash
   mkdir -p scripts
   chmod +x scripts/check-docker-health.sh
   ```
   
   Test the script:
   
   ```bash
   ./scripts/check-docker-health.sh
   ```
   
   **What you've built:** A Docker health check script that Marcus can run on any environment to quickly assess container state and identify issues—reducing the manual inspection process from multiple terminal tabs to a single command.

#### ✅ Success Criteria

- [ ] GitHub Copilot CLI installed and authenticated successfully
- [ ] Resolved Docker container issue using Plan Mode in under 10 minutes
- [ ] Experienced Plan Mode's collaborative planning workflow with clarifying questions
- [ ] Explored advanced reasoning mode for complex architectural analysis
- [ ] Created executable health check script at `fanhub/scripts/check-docker-health.sh`
- [ ] Verified script identifies container health issues and logs automatically

> 📂 **Compare Your Work**: See example configurations in [`examples/completed-config/`](../../examples/completed-config/)

#### 📚 Official Docs

- [Installing GitHub Copilot CLI](https://docs.github.com/en/copilot/how-tos/set-up/install-copilot-cli) — Installation steps and authentication requirements
- [Using GitHub Copilot CLI](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/use-copilot-cli) — Interactive session commands and workflow patterns
- [About GitHub Copilot CLI](https://docs.github.com/en/copilot/concepts/agents/about-copilot-cli) — Core concepts, built-in agents, and capabilities

---

## 🔗 What You Built

**In this exercise:**
- **CLI authentication** — Terminal-native AI access without context switching to IDE
- `scripts/check-docker-health.sh` — Automated container health analysis script that reduces manual inspection time
- **Interactive debugging workflow** — Pattern for collaborative problem-solving directly in terminal where infrastructure work happens

**How it compounds:**

| Previous Modules | This Module | Combined Power |
|------------------|-------------|----------------|
| Custom agents from Module 7 | Interactive CLI sessions | Agents now accessible in terminal workflows and scripts |
| Web research from Module 8 | CLI automation | External knowledge integrated into command-line debugging |
| Docker configurations | Health check automation | Infrastructure issues identified and resolved in single command |

---

## ➡️ Next Up

**[Exercise 9.2: Scripting CI/CD Automation](exercise-9.2.md)** — Transform interactive CLI workflows into programmatic automation for build pipelines.

> *"Interactive debugging is great, but I need this in CI/CD where there's no human to approve commands."*  
> — Marcus, planning automated build failure analysis

---
