# Subagents: Context Isolation for Complex Workflows

Orchestrating autonomous agents with isolated context windows for scalable AI-assisted development

---

## The Context Problem

### Key Points

- **Context window bloat**
  Every prompt and response accumulates in the main agent's context, degrading quality over time

- **Sequential bottlenecks**
  Complex research, analysis, and implementation tasks execute one-at-a-time

- **Exploratory pollution**
  Dead-end investigations and failed approaches clutter the main context permanently

- **Token inefficiency**
  Full conversation histories consume expensive tokens even when only summaries are needed

### Narrative

Modern AI-assisted development involves complex, multi-step workflows: researching authentication patterns while analyzing existing code structure while reviewing security documentation. In traditional single-agent workflows, every investigation—successful or not—accumulates in one context window. Failed experiments, exploratory tangents, and verbose research all consume tokens and dilute focus. The main agent becomes increasingly confused as context grows. Subagents solve this by providing isolated context windows that run autonomously, returning only final results while keeping intermediate work separate.

---

## Subagents: Architecture

### The Fundamental Concept

**Subagents provide:**
- Isolated context windows separate from the main chat session
- Autonomous task execution without affecting parent context
- Parallel execution for improved throughput
- Summary-only returns to minimize context pollution

### Two Invocation Patterns

**Implicit invocation (chat hints):**
```
Run a subagent to research the best authentication patterns for this project
```
- Main agent interprets intent and delegates appropriately
- Ideal for exploratory, research-heavy tasks
- Subagent inherits model and tools from main session

**Explicit invocation (prompt files):**
```markdown
---
name: document-feature
tools: ['agent', 'read', 'search', 'edit']
---
Run a subagent to research the new feature implementation
details and return only information relevant for user documentation.
```
- Declarative tool access via frontmatter
- Reproducible workflows with version control
- Combine with specialized custom agents

### Narrative

Subagents operate like autonomous research assistants. You delegate a task—"research authentication patterns"—and the subagent works in its own context window: reading files, searching codebases, analyzing patterns. When complete, only the final summary returns to the main agent. The subagent's intermediate work—all the files read, searches performed, dead ends explored—stays isolated. This keeps the main context focused on orchestration while subagents handle detailed investigation.

---

## Why Subagents Matter

### Context Isolation Benefits

| Without Subagents | With Subagents |
|-------------------|----------------|
| Research clutters main context | Research stays isolated |
| Sequential task execution | Parallel task execution |
| Failed experiments persist | Only successes return |
| Token costs compound | Token costs contained |
| Context quality degrades | Context stays focused |

### The Orchestration Pattern

**Main agent role:**
- High-level task decomposition
- Subagent coordination and result synthesis
- Final implementation decisions
- User communication

**Subagent role:**
- Focused investigation and research
- Exploratory analysis without commitment
- Specialized domain tasks
- Detailed implementation work

### Narrative

Without subagents, asking the AI to "research authentication, analyze the codebase, and implement the feature" creates a massive context with everything intermixed. The AI struggles to distinguish between research notes, analysis findings, and implementation requirements. With subagents, each concern lives in its own context: one subagent researches auth patterns, another analyzes existing code, a third reviews security docs. The main agent orchestrates, receiving clean summaries and synthesizing results into coherent implementation.

---

## Usage Scenarios

### Research Before Implementation

**The problem:** Jumping straight into implementation without understanding existing patterns leads to inconsistent code.

**The solution:**
```
Before implementing the user profile feature, run a subagent to:
1. Research how other features handle user data in this codebase
2. Identify any existing profile-related utilities
3. Document the patterns used for API endpoints

Then use those findings to implement the feature consistently.
```

**The result:** Implementation follows established patterns without polluting main context with all research details.

---

### Parallel Code Analysis

**The problem:** Analyzing multiple codebases or concerns sequentially takes too long.

**The solution:**
```
Analyze this pull request using three parallel subagents:
1. Security subagent: Check for vulnerabilities and auth issues
2. Performance subagent: Review for N+1 queries and memory concerns
3. Architecture subagent: Verify patterns match our standards

Synthesize their findings into a unified review.
```

**The result:** Three analyses run simultaneously, each in isolated context, results synthesized by main agent.

---

### Explore Multiple Solutions

**The problem:** Exploring solution alternatives clutters context with rejected approaches.

**The solution:**
```
Run three subagents to prototype different approaches to the caching problem:
1. Redis-based caching approach
2. In-memory with LRU eviction
3. Hybrid disk/memory approach

Compare their tradeoffs and recommend the best fit.
```

**The result:** Three explorations happen in parallel, only the winning approach gets detailed implementation.

---

### Specialized Code Review

**The problem:** Different review concerns require different expertise and focus.

**The solution:**
```
Review this authentication module using specialized subagents:
1. Use the Security agent to check for vulnerabilities
2. Use the Testing agent to verify coverage gaps
3. Use the Documentation agent to assess API documentation

Combine findings into prioritized action items.
```

**The result:** Each custom agent applies its specialized instructions, tools, and focus to the same code.

---

## Custom Agents as Subagents

### Specialized Behavior for Subtasks

By default, subagents inherit the main session's agent and model. Custom agents enable specialized behavior:

```markdown
---
name: Security-Review
description: Security-focused code analysis
tools: ['read', 'search', 'grep']
---
You are a security expert. Analyze code for:
- Authentication vulnerabilities
- Authorization bypass risks
- Injection attack vectors
- Secrets exposure
```

**Invocation:**
```
Use the Security-Review agent as a subagent to audit the auth module
```

### Narrative

Custom agents as subagents unlock powerful specialization patterns. A Security agent knows OWASP risks. A Testing agent understands coverage gaps. A Documentation agent writes clear explanations. Each brings focused expertise to subtasks. The main agent orchestrates, dispatching work to specialists and synthesizing their domain-specific findings into unified recommendations.

---

## Controlling Subagent Behavior

### Visibility Controls

```markdown
---
name: internal-helper
user-invokable: false
---
This agent can only be invoked as a subagent.
```

| Property | Default | Purpose |
|----------|---------|---------|
| `user-invokable` | `true` | Show in agents dropdown |
| `disable-model-invocation` | `false` | Prevent AI from invoking as subagent |

### Restricting Available Subagents

```markdown
---
name: TDD
tools: ['agent']
agents: ['Red', 'Green', 'Refactor']
---
Implement features using test-driven development:
1. Use Red agent to write failing tests
2. Use Green agent to implement code to pass tests
3. Use Refactor agent to improve code quality
```

| `agents` Value | Behavior |
|----------------|----------|
| `['Red', 'Green']` | Only allow specific agents |
| `*` | Allow all agents (default) |
| `[]` | Prevent any subagent use |

### Narrative

Fine-grained controls enable sophisticated orchestration patterns. Hide internal helper agents from users while making them available as subagents. Restrict a TDD agent to only use Red/Green/Refactor subagents, preventing it from selecting generic coding agents. These controls transform subagents from ad-hoc delegation into structured, predictable workflows.

---

## Prompt File Integration

### Complete Subagent Workflow

```markdown
---
name: feature-research
tools: ['agent', 'read', 'search', 'edit']
---
## Research Phase
Run a subagent to research:
- Existing patterns in the codebase for similar features
- Industry best practices for this feature type
- Security considerations and common pitfalls

## Analysis Phase
Run a subagent to analyze:
- Impact on existing tests
- Database schema implications
- API contract changes

## Documentation Phase
Using the research and analysis results, update:
- docs/architecture.md with design decisions
- docs/api.md with new endpoints
- README.md with feature overview
```

### Benefits of Prompt File Subagents

- **Version controlled:** Workflows evolve with the codebase
- **Reproducible:** Same research process every time
- **Composable:** Prompt files can invoke other prompt files
- **Auditable:** Clear record of what each workflow does

---

## Anti-Patterns to Avoid

### ❌ Over-Delegation

**Problem:** Delegating trivially small tasks to subagents adds overhead.

```
# Don't do this - too granular
Run a subagent to read the config file
Run a subagent to count the lines
Run a subagent to check the extension
```

**Better:** Delegate coherent, meaningful work units.

---

### ❌ Insufficient Task Specification

**Problem:** Vague subagent tasks return vague results.

```
# Don't do this - too vague
Run a subagent to research authentication
```

**Better:** Specify scope, output format, and success criteria.

```
Run a subagent to research OAuth2 implementation patterns in
Node.js backends, returning:
1. Recommended libraries with tradeoffs
2. Token storage best practices
3. Refresh token rotation strategies
```

---

### ❌ Ignoring Subagent Results

**Problem:** Subagents research but main agent doesn't synthesize.

**Better:** Explicitly instruct the main agent to synthesize subagent findings into actionable recommendations.

---

## Best Practices

### ✅ Task Decomposition

Break complex work into focused, independent subtasks:
- Research → one subagent
- Analysis → one subagent
- Implementation planning → one subagent

### ✅ Clear Output Expectations

Specify what the subagent should return:
```
Return a markdown summary with:
- Key findings (bullet points)
- Recommended approach
- Risks and mitigations
```

### ✅ Appropriate Parallelization

Run independent analyses in parallel:
- Security review ‖ Performance review ‖ Style review
- Auth research ‖ Caching research ‖ Logging research

### ✅ Result Synthesis

Always instruct the main agent to combine subagent results:
```
Synthesize the subagent findings into a unified implementation plan
with prioritized action items.
```

---

## Performance Considerations

### Token Efficiency

| Approach | Context Impact |
|----------|----------------|
| Single agent, all tasks | Full history in one context |
| Subagents with summaries | Only summaries in main context |
| Specialized subagents | Focused contexts per domain |

### Execution Speed

- Subagents run in parallel when tasks are independent
- Main agent coordinates without waiting for sequential completion
- Overall workflow completes faster than sequential approach

### Cost Optimization

- Subagent contexts don't compound main context costs
- Research dead-ends don't inflate main context tokens
- Only valuable findings return to main conversation

---

## Key Takeaways

### 🎯 Context Isolation
Subagents keep research, analysis, and exploration separate from main context

### ⚡ Parallel Execution
Multiple subagents run simultaneously for faster workflow completion

### 🧹 Token Efficiency
Only final results return—intermediate work stays isolated

### 🎭 Specialization
Custom agents as subagents bring domain expertise to subtasks

### 🔧 Control
Fine-grained visibility and restriction controls enable sophisticated orchestration

---

## Resources

- [VS Code Subagents Documentation](https://code.visualstudio.com/docs/copilot/agents/subagents)
- [Custom Agents Documentation](https://code.visualstudio.com/docs/copilot/customization/custom-agents)
- [Agents Overview](https://code.visualstudio.com/docs/copilot/agents/overview)
