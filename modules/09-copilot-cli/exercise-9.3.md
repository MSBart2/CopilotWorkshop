# Exercise 9.3: Infrastructure Documentation Generation

## 🔨 Exercise

### Exercise 9.3: Infrastructure Documentation Generation — "Documentation at Deployment Speed"

**Lead:** Marcus ⭐ | **Support:** Rafael 🤝, Sarah 🤝 | **Time:** 15 min

#### 📖 The Challenge

Documentation is where good intentions go to die. Marcus deploys infrastructure changes every sprint, but updating the architecture diagrams and deployment docs takes 3 days—if it happens at all. By the time documentation catches up, the infrastructure has already changed again. Rafael needs accurate system diagrams for stakeholder presentations, but the current diagrams show a system architecture that's two versions old. Sarah wants new team members to understand the deployment process, but the written procedures don't match the actual Docker Compose configuration.

Creating architecture diagrams manually requires understanding the entire system: service dependencies, network topology, database relationships, and deployment flow. Drawing these in diagramming tools takes hours. Writing deployment procedures means documenting every command, environment variable, and configuration file. The documentation effort is massive, so it never happens in real-time.

This exercise uses Copilot CLI to generate infrastructure documentation automatically from the actual running system—creating diagrams, deployment procedures, and architecture overviews that stay synchronized with reality.

> 💡 **Plan Mode for Documentation:** This exercise uses **interactive mode** with Plan Mode capabilities. When generating documentation, Copilot can ask clarifying questions like "Should I include development setup or focus on production deployment?" or "Do you want security considerations documented?" This collaborative approach ensures the documentation serves its intended audience—Rafael's stakeholder presentations, Sarah's onboarding guides, or Marcus's operational runbooks.

#### 🔄 The Transformation

| Before ❌ | After ✨ |
|-----------|----------|
| Infrastructure changes deployed Friday. Marcus makes mental note to update docs. Monday arrives with new priorities. Two weeks later, Rafael needs architecture diagram for board presentation. Marcus spends 3 hours recreating system topology from memory and docker-compose.yml. Draws diagram in Lucidchart. Realizes he forgot the Redis cache layer. Redoes diagram. Finally emails PDF to Rafael Wednesday afternoon. | Infrastructure changes deployed Friday. Marcus runs: `./scripts/generate-infra-docs.sh`. Script analyzes docker-compose.yml, Dockerfiles, network configs, and environment variables. Generates: architecture diagram (Mermaid), deployment procedure (Markdown), service dependency graph, environment variables reference. Commits to repo. Rafael pulls latest docs, converts Mermaid to presentation slides. Total time: 30 minutes, all automated. |
| **Documentation lag:** 3 days to never<br>**Manual diagram creation:** 3 hours<br>**Accuracy:** Depends on memory<br>**Stakeholder readiness:** Days of delay<br>**Onboarding clarity:** Outdated procedures | **Documentation lag:** 30 minutes (automated)<br>**Manual diagram creation:** 0 hours<br>**Accuracy:** Generated from actual configs<br>**Stakeholder readiness:** Real-time<br>**Onboarding clarity:** Always current |

#### 🎯 Your Goal

Create automated infrastructure documentation workflows using Copilot CLI that generate architecture diagrams, deployment procedures, and system overviews directly from running infrastructure—reducing 3-day documentation lag to 30-minute automation.

#### 📋 Steps

1. **Generate Architecture Diagram from Docker Compose**
   
   Create a script that analyzes the FanHub infrastructure and generates a Mermaid diagram:
   
   ```bash
   cd /workspaces/CopilotTraining/fanhub
   mkdir -p docs/generated
   ```
   
   Start an interactive Copilot CLI session:
   
   ```bash
   copilot
   ```
   
   Ask Copilot to analyze your infrastructure:
   
   ```
   Analyze docker-compose.yml and generate a Mermaid architecture diagram showing:
   1. All services (frontend, backend, database, any others)
   2. Network connections between services
   3. Port mappings and exposed services
   4. Volume mounts and data persistence
   5. Dependencies and startup order
   
   Save the Mermaid diagram to docs/generated/architecture.mmd
   ```
   
   Review the generated Mermaid file:
   
   ```bash
   cat docs/generated/architecture.mmd
   ```
   
   **What to observe:**
   - Copilot reads docker-compose.yml automatically
   - Identifies service relationships from `depends_on` and network configs
   - Creates visual diagram showing complete system architecture
   - Includes port mappings and data flow
   
   **Automatic Context Management:** As you continue working in the CLI session, notice that Copilot maintains relevant context about your infrastructure. If the conversation gets long (approaching token limits), Copilot will automatically compress earlier parts of the conversation while preserving key information. This means:
   - No manual context cleanup needed
   - Sessions don't break when reaching token limits
   - Important context is retained automatically
   - You can work continuously without interruptions
   
   The Mermaid diagram can be rendered in GitHub, VS Code, or converted to PNG/SVG for presentations.

2. **Create Automated Deployment Procedure Documentation**
   
   Create a script that generates comprehensive deployment documentation:
   
   Create `scripts/generate-deployment-docs.sh`:
   
   ```bash
   #!/bin/bash
   
   # Automated Deployment Documentation Generator
   # Analyzes infrastructure and creates step-by-step deployment guide
   
   WORKSPACE="/workspaces/CopilotTraining/fanhub"
   OUTPUT_DIR="$WORKSPACE/docs/generated"
   
   mkdir -p "$OUTPUT_DIR"
   
   echo "📚 Generating deployment documentation..."
   echo ""
   
   # Use programmatic mode to generate comprehensive deployment guide
   copilot -p "Analyze the FanHub application structure and generate a deployment guide:
   
   Review these files:
   - docker-compose.yml
   - backend/Dockerfile
   - frontend/Dockerfile
   - package.json files
   - README.md
   
   Create a deployment guide (Markdown format) that includes:
   
   ## Prerequisites
   - Required software and versions
   - Environment setup
   
   ## Environment Configuration
   - All required environment variables with descriptions
   - Example .env file with safe defaults
   
   ## Build Process
   - Step-by-step build commands
   - Expected build output
   - Common build issues and fixes
   
   ## Deployment Steps
   - Exact commands to deploy (development and production)
   - Health check procedures
   - Rollback procedures
   
   ## Troubleshooting
   - Common deployment issues
   - How to check logs
   - How to verify service health
   
   Save to $OUTPUT_DIR/DEPLOYMENT-GUIDE.md" --allow-tool 'write'
   
   echo ""
   echo "✅ Deployment guide generated at $OUTPUT_DIR/DEPLOYMENT-GUIDE.md"
   ```
   
   Make it executable and run:
   
   ```bash
   chmod +x scripts/generate-deployment-docs.sh
   ./scripts/generate-deployment-docs.sh
   ```
   
   Review the generated documentation:
   
   ```bash
   cat docs/generated/DEPLOYMENT-GUIDE.md
   ```
   
   **What you've created:** A comprehensive deployment guide generated directly from the actual infrastructure configuration—automatically documenting every environment variable, build step, and deployment command.

3. **Create Infrastructure Status Report Generator**
   
   Create a script that generates a real-time infrastructure status report for stakeholders:
   
   Create `scripts/generate-infra-report.sh`:
   
   ```bash
   #!/bin/bash
   
   # Infrastructure Status Report Generator
   # Creates stakeholder-friendly report of current system state
   
   WORKSPACE="/workspaces/CopilotTraining/fanhub"
   OUTPUT_DIR="$WORKSPACE/docs/generated"
   TIMESTAMP=$(date +"%Y-%m-%d %H:%M:%S")
   
   mkdir -p "$OUTPUT_DIR"
   
   echo "📊 Generating infrastructure status report..."
   echo ""
   
   # Collect current system state
   docker-compose ps > /tmp/container-status.txt 2>&1
   docker-compose logs --tail=50 > /tmp/recent-logs.txt 2>&1
   
   # Generate stakeholder report
   copilot -p "Create an infrastructure status report for stakeholders:
   
   Current time: $TIMESTAMP
   
   Analyze:
   1. Container status from /tmp/container-status.txt
   2. Recent logs from /tmp/recent-logs.txt
   3. docker-compose.yml configuration
   
   Generate report with:
   
   ## System Overview
   - Services running and their status
   - Architecture summary (brief, non-technical)
   
   ## Health Status
   - Overall system health (Healthy/Degraded/Down)
   - Any issues detected
   - Recent errors or warnings
   
   ## Key Metrics
   - Uptime
   - Number of services
   - Resource usage (if available from logs)
   
   ## Recent Changes
   - Based on git log of infrastructure files
   
   ## Recommendations
   - Any suggested improvements or concerns
   
   Format as executive-friendly Markdown suitable for Slack or email.
   Save to $OUTPUT_DIR/infrastructure-status-report.md" --allow-tool 'write'
   
   echo ""
   echo "✅ Status report generated at $OUTPUT_DIR/infrastructure-status-report.md"
   echo ""
   echo "📤 Ready to share with stakeholders:"
   echo "   - Paste into Slack"
   echo "   - Email as update"
   echo "   - Include in sprint demos"
   ```
   
   Make it executable and test:
   
   ```bash
   chmod +x scripts/generate-infra-report.sh
   
   # Ensure FanHub is running for accurate status
   cd /workspaces/CopilotTraining/fanhub
   docker-compose up -d
   
   # Generate the report
   ./scripts/generate-infra-report.sh
   
   # Review the report
   cat docs/generated/infrastructure-status-report.md
   ```
   
   **What you've built:** A stakeholder-ready infrastructure report that Marcus can generate in seconds—turning technical system state into business-friendly status updates that Rafael can use in presentations.

#### ✅ Success Criteria

- [ ] Generated Mermaid architecture diagram at `docs/generated/architecture.mmd` showing all services and relationships
- [ ] Created `scripts/generate-deployment-docs.sh` that produces comprehensive deployment guide automatically
- [ ] Created `scripts/generate-infra-report.sh` that generates stakeholder-ready status reports
- [ ] Verified all scripts run without manual intervention and produce accurate documentation

> 📂 **Compare Your Work**: See example documentation automation in [`examples/completed-config/`](../../examples/completed-config/)

#### 📚 Official Docs

- [Using GitHub Copilot CLI](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/use-copilot-cli) — File analysis and documentation generation patterns
- [About GitHub Copilot CLI Agents](https://docs.github.com/en/copilot/concepts/agents/about-copilot-cli) — Explore agent for codebase analysis without cluttering context
- [GitHub Mermaid Diagrams](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/creating-diagrams) — Rendering architecture diagrams in GitHub Markdown

---

## 🔗 What You Built

**In this exercise:**
- `docs/generated/architecture.mmd` — Auto-generated Mermaid diagram of system architecture, updated from actual configs
- `scripts/generate-deployment-docs.sh` — Automated deployment guide generator that stays synchronized with infrastructure
- `scripts/generate-infra-report.sh` — Stakeholder-ready status report generator for demos and updates
- **Documentation automation pattern** — Infrastructure docs that update in 30 minutes, not 3 days

**How it compounds:**

| Previous Modules | This Module | Combined Power |
|------------------|-------------|----------------|
| Docker configs (Module 1-4) | Architecture diagram generation | Visual documentation auto-generated from configs |
| Build automation (Exercise 9.2) | Deployment documentation | Build and deployment fully documented automatically |
| Custom skills (Module 5) | Infrastructure analysis | Domain knowledge applied to doc generation |

**Marcus's outcome:** Infrastructure documentation generated automatically after every deployment. Architecture diagrams always current. Deployment procedures always accurate. Documentation lag: 3 days→30 minutes. Rafael gets stakeholder-ready reports instantly. Sarah onboards new team members with confidence that docs match reality.

**Sarah's validation:** "Documented deployment procedures once took 6 hours to write and were outdated within a sprint. Now they generate in 5 minutes and update automatically. New team member onboarding went from 2 days of explaining undocumented processes to 'read this guide'—exactly as specified. That's not a nice-to-have; that's 12 hours saved per new hire."

**Rafael's transformation:** "I used to delay stakeholder updates because I couldn't explain infrastructure changes clearly without hours of prep. Now I run the status report script before every demo—instant, accurate, business-friendly updates. Executive meetings went from 'let me get back to you on that' to presenting live system state. Documentation became a competitive advantage instead of technical debt."

---

## ➡️ Next Module

**[Module 10: Agentic SDLC](../10-agentic-sdlc/README.md)** — Orchestrate the complete development lifecycle with AI agents from planning through deployment.

> *"We've automated individual workflows—debugging, CI/CD, documentation. Now how do we orchestrate these into a complete development process?"*  
> — Sarah, envisioning the full AI-assisted SDLC

---
