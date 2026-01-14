# Marcus's Path: Custom Agents

## 🎯 Your Focus: From Manual Orchestration to Autonomous Implementation

Marcus, this module is your breakthrough moment. You've been comfortable with infrastructure and DevOps, but application code felt slower because you were manually orchestrating every AI interaction. Agent Mode changes everything—you'll describe what you want, let the agent work, and review the results. This is the workflow you've been building pipelines for; now it applies to your code.

**Your exercises**: 4.1 (Agent Workflows)  
**Time**: ~30 minutes  
**Theme**: Delegation over orchestration

---

## Your Journey in This Module

```
Marcus's Arc:
┌─────────────────────────────────────────────────────────────────┐
│  "I spend more time copying AI suggestions than thinking"       │
│                         ↓                                       │
│  Discovers Agent Mode: describe once, let it work               │
│                         ↓                                       │
│  "I'm not a prompt typist anymore—I'm a reviewer."              │
└─────────────────────────────────────────────────────────────────┘
```

---

## Exercise 7.1: Your First Agent Workflow — "Marcus Goes Autonomous"

### 📖 The Story

**Marcus** (DevOps Developer, 5 years) gets a ticket: "Add health check endpoints to all API services."

In the old world, this meant:
1. Ask Copilot how to add a health check
2. Manually create the endpoint
3. Ask Copilot for tests
4. Manually create the test file
5. Run tests, fix issues, repeat

*"This is exactly the kind of tedious work that should be automated,"* Marcus thinks.

Sarah shows him Agent Mode.

### ❌ The "Before" — What Frustration Looks Like

Traditional Chat workflow for adding a health check:

```
[Human]: How do I add a health check endpoint to Express?
[Copilot]: Here's an example... (shows code snippet)
[Human]: (copies code, pastes into file)
[Human]: Now write tests for this
[Copilot]: Here are the tests... (shows code snippet)
[Human]: (copies code, creates test file)
[Human]: (runs tests, finds issues)
[Human]: The test failed because...
```

**5 back-and-forth exchanges** for one feature. Multiply by every feature.

Marcus calculates:
- 5 exchanges × 3 minutes each = 15 minutes just copying/pasting
- Plus context-switching between files
- Plus re-explaining context when Copilot loses track
- **Total: 30+ minutes** for a straightforward feature

*"In DevOps, I'd write a pipeline that does all this automatically,"* Marcus thinks. *"Why am I manually orchestrating AI steps?"*

### 🎯 Objective

Use Agent Mode to implement a complete feature with minimal manual intervention.

### 📋 Steps

1. **Switch to Agent Mode**
   
   Open Copilot Chat (`Ctrl+Shift+I` / `Cmd+Shift+I`)
   
   Click the mode dropdown (top of chat panel) and select **"Agent"**

2. **Describe the full task**

   ```
   @workspace Add a comprehensive health check endpoint to the FanHub backend:
   
   Requirements:
   - GET /api/health that returns service status
   - Check database connectivity
   - Include uptime, memory usage, and version info
   - Return appropriate status codes (200 OK, 503 Service Unavailable)
   - Add tests for both healthy and unhealthy scenarios
   - Follow our patterns in copilot-instructions.md
   
   Create all necessary files and run tests to verify.
   ```

3. **Watch Agent Mode work**
   
   Observe as the agent:
   - Reads your codebase to understand the structure
   - Creates the health check route
   - Registers it in the main app
   - Creates test files
   - Runs the tests
   - Iterates if tests fail

4. **Review the proposed changes**
   
   Before accepting, review:
   - Does the code follow your patterns?
   - Are the tests comprehensive?
   - Is error handling consistent?

5. **Accept or refine**
   
   If something needs adjustment, tell the agent:
   ```
   The health check looks good, but please also include:
   - A deep health check at /api/health/deep that tests each database table
   - Response time metrics
   ```

### ✅ Success Criteria

- [ ] Switched to Agent Mode successfully
- [ ] Agent created at least 2 files (route + test)
- [ ] Agent ran terminal commands (npm test)
- [ ] Reviewed changes before accepting
- [ ] Health check follows copilot-instructions.md patterns
- [ ] Tests pass

### ✨ The "After" — The Improved Experience

What used to take 30+ minutes of back-and-forth:
- **Agent Mode**: One prompt, complete implementation, 5 minutes
- **Human role**: Review and approve

**Marcus's new workflow**:
1. Describe the complete requirement
2. Let agent work
3. Review results
4. Ship

**The Pipeline Analogy**

Marcus realizes Agent Mode is like his CI/CD pipelines:

| CI/CD Pipeline | Agent Mode |
|----------------|------------|
| Define stages in YAML | Define requirements in prompt |
| Pipeline executes steps | Agent executes implementation |
| Review artifacts/logs | Review generated code |
| Approve deployment | Accept changes |

*"I've been building pipelines for years. Agent Mode is a pipeline for code generation."*

### 📚 Official Docs

- [VS Code: Agent Mode](https://code.visualstudio.com/docs/copilot/chat/chat-agent-mode)
- [VS Code: Copilot Edits](https://code.visualstudio.com/docs/copilot/copilot-edits)

### 💭 Marcus's Revelation

*"I spent the morning doing manual steps between AI suggestions. This is what I thought AI would be: tell it what you want, let it figure out the how, review the results. I'm not a prompt typist anymore—I'm a reviewer."*

### 🚀 Challenge Extension

**Complex multi-file task**: Ask the agent to:
```
Add rate limiting middleware to all API routes:
- Use express-rate-limit package
- Configure different limits per route type (auth: 5/min, reads: 100/min, writes: 20/min)
- Add tests for rate limit behavior
- Update ARCHITECTURE.md to document the rate limiting strategy
```

This tests whether you can describe a complex requirement and let the agent handle the multi-file coordination.

---

## 🎯 Marcus's Module Summary

### Your Transformation

| Before | After |
|--------|-------|
| 5+ exchanges per feature | Single prompt, complete implementation |
| Manual copy/paste between chat and editor | Agent creates and modifies files directly |
| Re-explaining context constantly | Agent reads workspace, understands structure |
| 30+ minutes for simple features | 5 minutes for same feature |

### The DevOps Mindset Applied

You've been thinking about automation for years. Agent Mode validates your instincts:

- **Infrastructure**: Define desired state → tool converges
- **Agent Mode**: Define desired feature → agent implements

The skill you already have (describing desired outcomes clearly) is exactly what makes Agent Mode effective.

### What's Next

With Agent Mode, you can now tackle application code as confidently as infrastructure code. The workflow is familiar:
1. Specify what you want
2. Let automation handle the how
3. Review and approve

---

## ➡️ Continue Your Journey

**Recommended next**: [Module 8: Custom Instructions](../08-copilot-web/README.md) — Learn how file-scoped instructions make agents even more context-aware.

**Also relevant**: [Module 8: Copilot Web](../08-copilot-web/README.md) — When GitHub.com is your workspace, not VS Code.
