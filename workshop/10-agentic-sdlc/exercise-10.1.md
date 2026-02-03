# Exercise 10.1: Plan-to-Background Handoff

## 🔨 Exercise

### Exercise 10.1: Plan-to-Background Handoff — "From Interactive Planning to Autonomous Execution"

**Lead:** Rafael ⭐ | **Support:** Marcus 🤝, David 🤝 | **Time:** 20 min

#### 📖 The Challenge

Rafael has a detailed feature specification for a user favorites system—the requirements are clear, the architecture is straightforward, and the implementation is well-defined. But traditionally, this means sitting through 60 minutes of supervised coding: explaining requirements to the agent, reviewing each file as it's created, providing feedback, and iterating until it's complete. The planning is quick, but the execution requires constant supervision.

Marcus faces the same bottleneck with infrastructure tasks—once he knows what needs to be done, supervising the agent through implementation feels like babysitting. David sees this pattern everywhere: clear specifications waiting for execution, developers unable to start the next task because they're supervising the current one.

What if planning and execution could be completely separate? Plan interactively until everything is clear, then hand off to autonomous execution while you move on to the next challenge.

#### 🔄 The Transformation

| Before ❌ | After ✨ |
|-----------|----------|
| Rafael plans a feature (45 min), then supervises agent implementation (60 min), providing guidance at every step | Rafael plans a feature (45 min), hands off to background agent, immediately starts next planning session while agent works autonomously |
| **Total time:** 105 min active work<br>**Context switches:** 12 reviews during execution<br>**Parallel work:** None, must supervise | **Total time:** 45 min active work<br>**Context switches:** 0 during execution<br>**Parallel work:** Plan next feature while agent implements current one |

#### 🎯 Your Goal

Use Plan agent to design a feature interactively, then hand off the complete context to a background agent for autonomous implementation while you continue other work.

#### 📋 Steps

1. **Start with Plan agent to design the feature**
   
   Open VS Code Chat (Ctrl+Alt+I) and use the Plan agent:
   
   ```
   @plan Create a user favorites system for FanHub:
   
   Requirements:
   - Users can favorite characters, episodes, and quotes
   - Favorites are stored per-user in the database
   - Frontend shows favorite count and toggle button
   - API endpoints: POST /api/favorites, DELETE /api/favorites/:id, GET /api/favorites
   
   Follow our ARCHITECTURE.md patterns and integrate with existing auth system.
   ```
   
   The Plan agent will create a structured implementation plan with all the steps, files, and considerations. Review the plan interactively—ask questions, refine requirements, ensure everything is clear.
   
   > 💡 **Why Plan first?** Background agents work best with complete context. The Plan agent ensures all requirements, architecture decisions, and edge cases are documented before hand-off.

2. **Hand off to background agent for autonomous execution**
   
   Once the plan is complete and you're satisfied, hand off to a background agent:
   
   - In the Plan agent response, look for the **"Start Implementation"** dropdown button
   - Click the dropdown and select **"Continue in Background"**
   
   Alternatively, you can type `@cli implement this plan` in the chat input.
   
   VS Code creates a background agent session with the complete conversation context. The background agent will:
   - Read the full plan and all requirements
   - Create all necessary files (API routes, database models, frontend components)
   - Follow architecture patterns from your repository instructions
   - Run tests and fix issues autonomously
   - Signal completion when ready for review
   
   > 💡 **What happens now?** The agent is working completely independently. You can close the chat and start your next task immediately.

3. **Monitor progress and start next task**
   
   View all background agent sessions:
   - Open Chat view (Ctrl+Alt+I)
   - Click the filter dropdown → Select "Background Agents"
   - See real-time progress of your autonomous sessions
   
   **Now start planning your next feature** while the first one implements. This is the breakthrough—planning and execution are no longer sequential.
   
   Try planning the search feature next:
   ```
   @plan Design a global search feature that searches across characters, episodes, and quotes with relevance ranking
   ```
   
   When the background agent completes the favorites system:
   - You'll see a notification in the Agents view
   - Review the changes: all files created, tests passing
   - Accept or refine the implementation
   
   > 💡 **Review the output** by clicking on the background session to see all files changed, tests run, and the agent's reasoning.

#### ✅ Success Criteria

- [ ] Plan agent created detailed implementation plan for favorites system
- [ ] Successfully handed off plan to background agent execution
- [ ] Background agent autonomously implemented all required files
- [ ] Started planning next feature while background agent worked
- [ ] Verified completed work: API endpoints, frontend components, tests created

> 📂 **Compare Your Work**: [`examples/completed-config/agents/`](../../examples/completed-config/agents/)

#### 📚 Official Docs

- [VS Code: Background Agents](https://code.visualstudio.com/docs/copilot/agents/background-agents) — Hand-off workflows and autonomous execution
- [VS Code: Plan Agent](https://code.visualstudio.com/docs/copilot/chat/chat-planning) — Structured planning before implementation

---

## 🔗 What You Built

**In this module:**
- Background agent workflow — Complete feature from planning through autonomous execution
- Parallel work capability — Planning next task while agent implements current task
- Hand-off pattern — Seamless transition from interactive to autonomous

**How it compounds:**

| Previous Modules | This Module | Combined Power |
|------------------|-------------|----------------|
| Module 2: Plan agent for structured thinking | Autonomous background execution | Plan once, implement autonomously without supervision |
| Module 4: Custom agents with specialized personas | Background agent sessions | Your custom agents can now run completely independently |

---

## ➡️ Next Up

**[Exercise 10.2: Isolated Worktree Experiments](./exercise-10.2.md)** — Use Git worktrees to let background agents experiment with multiple approaches simultaneously without any risk to your main workspace.

> *"The favorites implementation worked great. But what if I want to try three different caching strategies and see which performs best—without risking the main branch?"*  
> — Marcus, ready to experiment fearlessly

---
