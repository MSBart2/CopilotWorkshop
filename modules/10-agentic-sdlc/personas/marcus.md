# Marcus's Path: Agentic SDLC

## 🎯 Your Focus: Interactive Feature Development with VS Code Agent Mode

Marcus, this module shows how VS Code Agent Mode excels at complex, iterative feature development. While other agents run in the background, you'll use the interactive feedback loop to build a full-stack search feature with real-time testing and refinement.

**Your exercise**: 5.1 (VS Code Agent Mode — The Feature Build)  
**Time**: ~20 minutes  
**Theme**: Interactive development with immediate feedback

---

## Your Journey in This Module

```
Marcus's Arc:
┌─────────────────────────────────────────────────────────────────┐
│  "Complex features require back-and-forth with the AI"          │
│                         ↓                                       │
│  Uses VS Code Agent Mode for search feature                     │
│                         ↓                                       │
│  "Test, refine, iterate—all in real-time. This is how I want   │
│   to build features."                                           │
└─────────────────────────────────────────────────────────────────┘
```

---

## Exercise 5.1: VS Code Agent Mode — "The Feature Build"

### 📖 The Story

**Marcus** is on search feature duty. This is complex, interactive work—exactly what VS Code Agent Mode is designed for.

*"Search needs debouncing, autocomplete, ranking... I need to see what the agent generates and make adjustments in real-time. This is a VS Code job."*

### ❌ The "Before" — What Frustration Looks Like

Running one agent at a time:
- Start the search feature... wait for completion
- Then start analytics... wait for completion  
- Then start infrastructure... wait for completion
- Total time: Sum of all tasks (sequential)

### 🎯 Objective

Build a full-stack search feature using VS Code Agent Mode while other agents handle other work in parallel.

### 📋 Steps

1. **Activate Agent Mode in VS Code**
   
   Open Copilot Chat and switch to Agent Mode:
   - Click the model dropdown
   - Select "Agent" or use `@workspace` with complex requests
   
   > **Why VS Code?** Search requires multi-file edits, immediate testing, and human judgment on ranking logic. You need the interactive feedback loop.

2. **Design the search architecture**
   
   ```
   Build a search feature for FanHub with:
   
   Backend:
   - GET /api/search endpoint
   - Search across characters, episodes, and quotes
   - Relevance ranking (title matches > description matches)
   - Support ?autocomplete=true for suggestions
   
   Frontend:
   - SearchBar component with debounced input (300ms)
   - Autocomplete dropdown
   - SearchResults page with grouped results
   
   Follow our ARCHITECTURE.md patterns.
   ```
   
   **Agent Mode will**:
   - Read your architecture docs
   - Create multiple files
   - Ask for confirmation before major changes

3. **Iterate with immediate feedback**
   
   As files are created:
   - Test the endpoint: `curl localhost:3000/api/search?q=walter`
   - Review the frontend component
   - Provide refinements: "Make the debounce 400ms"
   
   > **This is why VS Code**: The agent proposes, you immediately test, you refine.

4. **Handle edge cases interactively**
   
   ```
   Add edge case handling:
   - Empty query shows recent searches
   - Query under 2 chars shows hint
   - No results shows suggestions
   - Special characters are escaped
   ```
   
   Review each change as it's made.

### ✅ Success Criteria

- [ ] Search endpoint created and working
- [ ] Frontend components rendering
- [ ] Debouncing functioning correctly
- [ ] Autocomplete showing suggestions
- [ ] Edge cases handled
- [ ] Used interactive refinement cycle

### ✨ The "After" — The Transformation

**While you build search:**
- David's analytics PR runs in the background (Web Agent)
- Jordan handles infrastructure (CLI Agent)
- **3 streams of work happening simultaneously**

### 📚 Official Docs

- [VS Code: Copilot Agent Mode](https://code.visualstudio.com/docs/copilot/chat/chat-agent-mode)
- [VS Code: Multi-file Edits](https://code.visualstudio.com/docs/copilot/copilot-edits)

### 💭 Marcus's Transformation

*"The key is knowing when to use which interface. Search needed me in the loop—watching, testing, adjusting. Agent Mode is perfect for that.*

*But the real insight is parallel execution. While I built search interactively, David's analytics ran autonomously in the browser, and Jordan handled infrastructure in the CLI. Three features for the time of one.*

*I finally feel confident with application code. The interactive loop shows me patterns I never saw in infrastructure work—and I can test immediately to make sure I understand."*

---

## 🎯 Marcus's Module Summary

### Your Transformation

| Before | After |
|--------|-------|
| Sequential feature development | Parallel with other agents |
| Uncertain about changes | Test immediately, refine iteratively |
| Infrastructure-only confidence | Full-stack capability |
| One task at a time | Multiple streams simultaneously |

### The DevOps Developer's Win

Your infrastructure mindset now applies to features:
- **Interactive feedback** — Test as you build
- **Multi-file edits** — Backend + frontend together
- **Parallel execution** — Your work alongside others
- **Pattern recognition** — See how features are structured

### When to Use VS Code Agent Mode

| ✅ Good Fit | ❌ Use Other Interface |
|-------------|------------------------|
| Complex features needing iteration | Well-defined, autonomous tasks |
| Multi-file edits | Simple single-file changes |
| Needs human judgment at each step | Clear specs, no ambiguity |
| Debugging, exploratory work | Batch operations |

---

## ➡️ Continue Your Journey

**Completed the workshop!** You've mastered interactive agent development.

**Review your journey**:
- [Module 7: Custom Agents](../07-custom-agents/README.md) — Create specialized agents
- [Module 4: Custom Instructions](../04-custom-instructions/README.md) — File-scoped patterns

**Apply to your real work**:
1. Use Agent Mode for complex features that need iteration
2. Run background agents for well-defined tasks simultaneously
3. Build confidence by testing each change immediately
