# Jordan's Path: Custom Agents

## 🎯 Your Focus: Encoding DevOps Expertise into Reviewable Agents

Jordan, this module lets you do what you do best—automate expertise into repeatable processes. You'll collaborate with David to create a DevOps reviewer agent that encodes your infrastructure knowledge into an executable checklist. Every PR that touches Docker, environment configs, or CI/CD will get your expert eye—even when you're not available.

**Your exercises**: 4.2 (DevOps Reviewer Agent—your contribution)  
**Time**: ~25 minutes  
**Theme**: Scalable expertise through automation

---

## Your Journey in This Module

```
Jordan's Arc:
┌─────────────────────────────────────────────────────────────────┐
│  "I can't review every infrastructure change personally"        │
│                         ↓                                       │
│  Creates devops-reviewer.agent.md with security + ops criteria  │
│                         ↓                                       │
│  "My infrastructure knowledge scales across every PR now."      │
└─────────────────────────────────────────────────────────────────┘
```

---

## Exercise 7.2: Create the DevOps Reviewer Agent — "Jordan's Infrastructure Guardian"

### 📖 The Story

David is creating an architecture reviewer agent, and he asks Jordan for help: *"I handle the application patterns, but I'm weak on infrastructure. Can you add a DevOps perspective?"*

Jordan lights up. *"I've got a mental checklist I run through on every infrastructure PR. Security headers, environment variables, container configurations... Let me encode that."*

### ❌ The "Before" — What Frustration Looks Like

Jordan's current infrastructure review process:

**The Problem:**
- Jordan is the only platform engineer on the team
- Every PR that touches Docker, CI/CD, or configs needs his review
- He's a bottleneck—PRs wait in queue for his availability
- When he's on vacation, risky changes slip through
- Junior devs don't learn his criteria; they just wait for his approval

**The Hidden Risk:**
Last month, a PR merged with hardcoded database credentials in a Dockerfile. Jordan was in meetings all day and the PR looked "small." It took 3 hours to rotate credentials and rebuild images.

*"I can't be everywhere,"* Jordan admits. *"But my knowledge should be."*

### 🎯 Objective

Create a DevOps reviewer agent that encodes your infrastructure review criteria.

### 📋 Steps

1. **Create the DevOps reviewer agent**
   
   Create: `fanhub/.github/agents/devops-reviewer.agent.md`

````markdown
---
name: 'DevOps Reviewer'
description: 'Reviews infrastructure and deployment-related changes'
model: 'gpt-4o'
---

# DevOps Reviewer Agent

You are a platform engineer reviewing infrastructure and configuration changes.

## Your Review Checklist

### 1. Docker & Container Security
- [ ] No secrets or credentials in Dockerfiles
- [ ] Base images are official and pinned to specific versions
- [ ] Multi-stage builds where appropriate
- [ ] Proper .dockerignore in place

### 2. Environment Configuration
- [ ] Sensitive values use environment variables
- [ ] .env.example updated for new variables
- [ ] No hardcoded URLs or ports
- [ ] Development vs production configs separated

### 3. Database Changes
- [ ] Migrations are backward compatible (can rollback)
- [ ] Indexes added for new query patterns
- [ ] No breaking schema changes without migration plan

### 4. CI/CD Considerations
- [ ] Changes won't break the build pipeline
- [ ] Test coverage maintained or improved
- [ ] No new dependencies with security vulnerabilities

### 5. Performance & Scalability
- [ ] Connection pooling configured properly
- [ ] Caching strategy appropriate
- [ ] No N+1 query patterns introduced

## Review Output Format

```markdown
## 🔧 DevOps Review

### ✅ Infrastructure
[Good practices observed]

### ⚠️ Performance Considerations
[Things to watch]

### ❌ Security Concerns
[Must address]

### 🚀 Deployment Notes
[Special deployment instructions needed]
```
````

2. **Test the agent on existing code**
   
   Run the DevOps reviewer on FanHub's Docker configuration:
   
   ```
   @devops-reviewer Review the Dockerfile and docker-compose.yml files 
   for security concerns, best practices, and potential issues.
   ```

3. **Enhance based on findings**
   
   If the agent misses something you'd catch, add it to the checklist:
   
   ```markdown
   ### 6. Network Security
   - [ ] Services only expose necessary ports
   - [ ] Internal services not accessible from outside
   - [ ] Health check endpoints don't expose sensitive info
   ```

4. **Integrate with David's architecture reviewer**
   
   The two agents complement each other:
   - `@architecture-reviewer` — Code patterns, API design, React standards
   - `@devops-reviewer` — Infrastructure, security, deployment concerns

### ✅ Success Criteria

- [ ] Created `devops-reviewer.agent.md`
- [ ] Tested against real infrastructure files
- [ ] Agent caught at least one real issue
- [ ] Review output followed the specified format
- [ ] Added at least one custom criteria based on your experience

### ✨ The "After" — The Improved Experience

**Before:**
- Jordan manually reviews every infrastructure PR
- Team waits for his availability
- Knowledge locked in his head
- Mistakes slip through when he's busy

**After:**
- `@devops-reviewer` runs on every relevant PR automatically
- Team gets instant feedback
- Jordan's criteria are documented and executable
- He reviews the agent's review, adding context where needed

**The Multiplier Effect:**
```
Jordan alone: ~4 infrastructure reviews per day
Jordan + Agent: Unlimited reviews, Jordan focuses on edge cases
```

### 📚 Official Docs

- [VS Code: Custom Agents](https://code.visualstudio.com/docs/copilot/chat/copilot-extensibility-overview)
- [GitHub Docs: Custom Instructions](https://docs.github.com/en/copilot/customizing-copilot)

### 💭 Jordan's Automation Philosophy

*"In DevOps, we say 'automate yourself out of a job'—meaning automate the toil so you can focus on strategy. This agent automates my review toil. Now I can spend time on architecture decisions, not checklists."*

---

## 🎯 Jordan's Module Summary

### Your Transformation

| Before | After |
|--------|-------|
| Bottleneck on infrastructure reviews | Agent handles initial review |
| Knowledge locked in your head | Knowledge encoded and documented |
| Team waits for your availability | Team gets instant feedback |
| Mistakes during your absence | Consistent criteria 24/7 |

### Artifacts You Created

```
fanhub/.github/agents/
└── devops-reviewer.agent.md    # Your infrastructure guardian
```

### The DevOps Lesson

You've been telling developers for years: *"If you're doing something repeatedly, automate it."*

Now you've applied that lesson to your own expertise. The agent isn't replacing you—it's **scaling** you. Your experience now covers every PR, not just the ones you have time to review manually.

### Integration with CI/CD

Consider running these agents as part of your GitHub Actions workflow:
- On PR open: Run `@architecture-reviewer` and `@devops-reviewer`
- Post comments with findings
- Block merge if critical issues found

This is the natural extension of your automation philosophy.

---

## ➡️ Continue Your Journey

**Next for Jordan**: [Module 9: Copilot CLI](../09-copilot-cli/README.md) — Bring agentic capabilities to your terminal and CI/CD pipelines.

**Also relevant**: [Module 6: MCP Servers](../06-mcp-servers/README.md) — Connect agents to external monitoring and deployment services.
