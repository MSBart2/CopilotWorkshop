# Jordan's Path: Agentic SDLC

## 🎯 Your Focus: Parallel Infrastructure Automation

Jordan, this module shows how to run infrastructure tasks in parallel with feature development. While developers use VS Code and GitHub Web agents for features, you leverage Copilot CLI to handle migrations, fixtures, monitoring, and deployment—all simultaneously.

**Your exercise**: 5.3 (GitHub Copilot CLI — The Infrastructure Sprint)  
**Time**: ~20 minutes  
**Theme**: Parallel DevOps work while features build

---

## Your Journey in This Module

```
Jordan's Arc:
┌─────────────────────────────────────────────────────────────────┐
│  "I wait for feature work to finish before infrastructure"      │
│                         ↓                                       │
│  Uses CLI agent in parallel with VS Code/Web agents             │
│                         ↓                                       │
│  "Features and infrastructure built simultaneously—2x output"   │
└─────────────────────────────────────────────────────────────────┘
```

---

## Exercise 5.3: GitHub Copilot CLI — "The Infrastructure Sprint"

### 📖 The Story

**Jordan** has been watching Marcus and David work on features. Now it's infrastructure time.

*"While you two handle features, I need to set up test fixtures, run migrations, generate monitoring configs, and prepare deployment. These are all terminal tasks. Perfect for the CLI agent."*

### ❌ The "Before" — What Frustration Looks Like

Without CLI agent:
- Research each command syntax
- Trial and error in terminal
- Context-switching between docs and terminal
- Infrastructure waits for features (sequential)

### 🎯 Objective

Use GitHub Copilot CLI for infrastructure tasks while VS Code and Web agents handle features in parallel.

### 📋 Steps

1. **Start an interactive CLI session**
   
   ```bash
   copilot
   ```
   
   > **Why CLI for these tasks?** Full agentic capabilities—read files, write files, run commands, interact with GitHub. Perfect for infrastructure.

2. **Generate test fixtures**
   
   ```
   Generate JSON test fixtures for 10 characters, 5 episodes, and 20 quotes 
   for a TV show fan site. Save them to test/fixtures/
   ```
   
   Review and approve the file creation.

3. **Set up database migrations**
   
   ```
   Create a database migration to add view_count to characters table 
   and share_count to quotes table using knex
   ```

4. **Generate monitoring setup**
   
   ```
   Add basic Prometheus metrics middleware to the Express app, 
   counting requests by route and status code
   ```

5. **Prepare deployment scripts**
   
   ```
   Create a shell script called deploy.sh that builds the docker image, 
   runs tests, and pushes to registry if tests pass
   ```

6. **Run multiple tasks in sequence**
   
   Continue in the same session:
   ```
   Lint and fix all JavaScript files in src/
   ```
   
   Then:
   ```
   Find all TODO comments in the codebase and create a summary
   ```

### ✅ Success Criteria

- [ ] Test fixtures generated via CLI agent
- [ ] Database migration created
- [ ] At least one DevOps task completed
- [ ] Used CLI while VS Code and Web agents ran features
- [ ] Understood parallel workflow benefits

### ✨ The "After" — The Transformation

**Your parallel status:**
- ✅ VS Code Agent: Marcus building search (interactive)
- ✅ GitHub Web Agent: David's analytics PR (autonomous)
- ✅ Copilot CLI: Your infrastructure tasks (agentic terminal)

**This is Agentic SDLC**: Multiple agents, multiple interfaces, parallel progress.

### 📚 Official Docs

- [About GitHub Copilot CLI](https://docs.github.com/en/copilot/concepts/agents/about-copilot-cli)
- [Using GitHub Copilot CLI](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/use-copilot-cli)

### 💭 Jordan's Transformation

*"The Copilot CLI is like having a junior DevOps engineer in my terminal. I can ask it to create files, run commands, even open PRs—all without leaving the command line. And the conversation keeps context, so I iterate quickly.*

*But the real win is running in parallel with feature work. While Marcus builds search and David's analytics PR runs in the background, I'm handling infrastructure. We're doing 3 streams of work simultaneously. That's the multiplier."*

---

## 🎯 Jordan's Module Summary

### Your Transformation

| Before | After |
|--------|-------|
| Wait for features, then infrastructure | Parallel execution |
| Research command syntax | Describe in natural language |
| One terminal task at a time | Conversational multi-task sessions |
| 3 hours for features + infrastructure | 90 minutes total (parallel) |

### The DevOps Expert's Win

Your automation skills now include:
- **Parallel orchestration** — Infrastructure alongside features
- **Agentic terminal** — Full AI capabilities in CLI
- **Conversational workflows** — Maintain context across tasks
- **No context-switching** — Stay in terminal, get work done

### The Parallel Pattern

```
Feature Development (VS Code + Web Agents)
           ‖
Infrastructure (Copilot CLI)
           ‖
           ↓
Everything converges at sprint end
```

---

## ➡️ Continue Your Journey

**Completed the workshop!** You've mastered parallel agent orchestration.

**Review your journey**:
- [Module 9: Copilot CLI](../09-copilot-cli/README.md) — Deep dive on CLI automation
- [Module 6: MCP Servers](../06-mcp-servers/README.md) — Extend CLI with data access

**Apply to your real work**:
1. Identify infrastructure tasks that can run in parallel with features
2. Use CLI's programmatic mode (`-p`) for scripted automation
3. Build morning routines that run while you review PRs
