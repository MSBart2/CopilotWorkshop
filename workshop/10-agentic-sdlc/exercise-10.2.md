# Exercise 10.2: Isolated Worktree Experiments

## 🔨 Exercise

### Exercise 10.2: Isolated Worktree Experiments — "Risk-Free Agent Experimentation"

**Lead:** Marcus ⭐ | **Support:** Elena 🤝 | **Time:** 20 min

#### 📖 The Challenge

Marcus wants to experiment with different caching strategies for the FanHub API—should they use Redis, in-memory caching, or a hybrid approach? Traditionally, this means creating branches, implementing one approach, testing it, rolling back, then trying another. If an experimental approach breaks something, it can take 90 minutes to clean up and restore a working state. Even worse, multiple experiments can't run simultaneously without creating merge conflicts.

Elena faces similar challenges with testing strategies—she wants to try different test frameworks and see which provides better coverage, but switching between approaches manually is time-consuming and error-prone. The fear of breaking the main workspace makes experimentation feel risky.

What if agents could experiment in completely isolated environments? Try multiple approaches simultaneously, review the results, and only integrate what works—with zero risk to the main codebase.

#### 🔄 The Transformation

| Before ❌ | After ✨ |
|-----------|----------|
| Marcus creates branch, implements caching approach, tests, discovers issues, spends 90 min rolling back and cleaning up. Can only try one approach at a time. | Marcus starts 3 background agents in separate worktrees, each implementing different caching strategies simultaneously. Reviews all results, picks best one, 5 min integration. |
| **Rollback time:** 90 min per failed experiment<br>**Experiments:** Sequential, one at a time<br>**Risk:** High, can break main workspace | **Rollback time:** 5 min or instant discard<br>**Experiments:** Parallel, try all approaches at once<br>**Risk:** Zero, isolated from main workspace |

#### 🎯 Your Goal

Use background agents with Git worktree isolation to experiment with multiple implementation approaches simultaneously without any risk to your main workspace.

#### 📋 Steps

1. **Start a background agent with worktree isolation**
   
   Open VS Code Chat (Ctrl+Alt+I) and create a new background agent session:
   
   - Click **New Chat** dropdown → **New Background Agent**
   - In the chat input area, look for the **isolation mode selector**
   - Select **"Worktree"** (not "Workspace")
   
   Now provide the task:
   ```
   Implement Redis caching for the FanHub API:
   - Add Redis client configuration
   - Cache character and episode queries
   - Cache invalidation on updates
   - Cache TTL of 1 hour
   
   Include performance testing to measure cache hit rates.
   ```
   
   VS Code automatically:
   - Creates a new Git worktree in a separate folder
   - Clones the current repository state
   - Starts the background agent in the isolated environment
   
   > 💡 **Why worktree isolation?** The agent can make any changes—even breaking ones—without affecting your main workspace. You continue coding normally while the agent experiments.

2. **Start competing experiments in parallel**
   
   Create two more background agents with different approaches, each in their own worktree:
   
   **Second background agent (in-memory caching):**
   ```
   Implement in-memory caching for the FanHub API using Node.js built-in Map:
   - LRU cache with 1000 entry limit
   - Cache character and episode queries
   - Cache invalidation on updates
   
   Include performance testing to measure memory usage and hit rates.
   ```
   
   **Third background agent (hybrid caching):**
   ```
   Implement hybrid caching strategy:
   - Hot data in memory (accessed in last 5 min)
   - Warm data in Redis (accessed in last hour)
   - Automatic promotion/demotion between tiers
   
   Include performance testing comparing all approaches.
   ```
   
   Now you have **3 agents working simultaneously in isolated worktrees**—each trying a different approach without any risk of conflicts.
   
   > 💡 **View all worktrees** in Source Control view → Repositories section. You'll see your main workspace plus 3 isolated worktrees.

3. **Review results and integrate the winner**
   
   Monitor progress in the Chat view (filter by "Background Agents"). When agents complete:
   
   **Review each approach:**
   - Click on a background agent session to see the summary
   - Look for the **file changes summary** at the bottom
   - Click **"View All Edits"** to see a diff of all changes
   - Review performance test results each agent included
   
   **Compare approaches:**
   - Redis: Best for multi-server deployments, slightly higher latency
   - In-memory: Fastest, but doesn't scale across servers
   - Hybrid: Best performance, but more complex
   
   **Pick the winner and integrate:**
   - Select the best approach (let's say hybrid)
   - In the background session, click **"Keep"** for the changes you want
   - Click **"Apply"** to merge changes into your main workspace
   - For the other two approaches, click **"Undo"** to discard
   
   The worktrees are automatically cleaned up, and you have zero merge conflicts.
   
   > 💡 **Discard is instant** — If an experiment completely failed, just close the background session and delete the worktree. No 90-minute cleanup needed.

#### ✅ Success Criteria

- [ ] Created 3 background agents with worktree isolation
- [ ] All 3 agents ran simultaneously without conflicts
- [ ] Reviewed performance results from each approach
- [ ] Integrated the best solution (hybrid caching) into main workspace
- [ ] Discarded failed experiments instantly without cleanup overhead

> 📂 **Compare Your Work**: [`examples/completed-config/scripts/`](../../examples/completed-config/scripts/)

#### 📚 Official Docs

- [VS Code: Background Agents](https://code.visualstudio.com/docs/copilot/agents/background-agents) — Worktree isolation for safe experimentation
- [VS Code: Git Worktrees](https://code.visualstudio.com/docs/sourcecontrol/branches-worktrees) — Understanding isolated Git environments

---

## 🔗 What You Built

**In this module:**
- Worktree-isolated experimentation — Multiple agents testing approaches simultaneously
- Risk-free development — Zero impact on main workspace regardless of experiment outcomes
- Rapid comparison workflow — Try all approaches, pick the best, integrate in minutes

**How it compounds:**

| Previous Modules | This Module | Combined Power |
|------------------|-------------|----------------|
| Module 1: Repository instructions guide all approaches | Worktree isolation for testing | Test multiple implementations of the same standards safely |
| Module 9: CLI automation scripts | Worktree management | Automate creation and cleanup of experimental environments |

---

## ➡️ Next Up

**[Exercise 10.3: Autonomous Architecture Review](./exercise-10.3.md)** — Use custom agents running in background to continuously validate architecture compliance while the team codes.

> *"We've proven agents can implement autonomously. But can they enforce David's architectural standards automatically—catching violations in real-time without blocking development?"*  
> — Sarah, ready to scale expertise through autonomous validation

---
