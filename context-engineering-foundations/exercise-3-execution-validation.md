# Exercise 3: Execution & Validation

## 🔨 Implement, Review, and Measure the Improvement

**Time:** 25 minutes  
**Outcome:** See context engineering in action + documented metrics proving impact

---

## 📖 The Challenge

Creating documentation and enforcement tools is only valuable if they improve actual development work. This exercise closes the loop:

1. **Implement** a feature using your context-aware Copilot
2. **Review** it with your Standards Review Agent
3. **Measure** the difference compared to working without context

---

## 🔄 The Full Workflow

```
┌─────────────────────────┐
│ 1. Project Context      │  ← ARCHITECTURE.md, copilot-instructions.md
│    (Exercise 1)         │     Copilot understands your project
└───────────┬─────────────┘
            │
            ▼
┌─────────────────────────┐
│ 2. Prompts & Enforcement│  ← /generate-tests, @standards-review
│    (Exercise 2)         │     Reusable workflows + automated review
└───────────┬─────────────┘
            │
            ▼
┌─────────────────────────┐
│ 3. Implementation       │  ← Context-aware code generation
│    (This Exercise)      │     AI follows your patterns
└───────────┬─────────────┘
            │
            ▼
┌─────────────────────────┐
│ 4. Standards Review     │  ← @standards-review catches violations
│    (This Exercise)      │     Before human review
└───────────┬─────────────┘
            │
            ▼
┌─────────────────────────┐
│ 5. Validation           │  ← Measure improvement
│    (This Exercise)      │     Prove ROI
└─────────────────────────┘
```

---

## 🎯 Your Goal

1. **Implement** a small feature using context-aware Copilot
2. **Run Standards Review** on your implementation
3. **Document** your baseline metrics for ongoing improvement

---

## 📋 Part 1: Context-Aware Implementation (10 min)

### Step 1: Choose Your Implementation

**Option A: Use the built-in Plan agent first (recommended)**

VS Code includes a built-in Plan agent. Use it to plan before implementing:

1. Select **Plan** from the agent picker dropdown in Chat
2. Describe your feature:
   ```
   Add a user preferences page that allows users to set their display name 
   and theme preference (light/dark mode)
   ```
3. Review and approve the plan
4. Let the agent guide implementation

**Option B: Direct implementation**

If you prefer to skip planning:
```
@workspace Add a simple health check endpoint at /api/health that returns:
- Status: "ok" or "error"  
- Timestamp: current ISO timestamp
- Version: from package.json

Follow the patterns documented in ARCHITECTURE.md for API endpoints.
```

### Step 2: Observe Context-Aware Suggestions

**With context engineering (what you should see):**
- Copilot references your ARCHITECTURE.md
- Code follows your documented patterns
- File placement matches your folder structure
- Testing approach aligns with your conventions

**Without context engineering (what you'd see before):**
- Generic patterns that may not match your project
- Guesses about file placement
- Testing suggestions that don't fit your framework
- Need for multiple corrections

### Step 3: Complete the Implementation

Implement one complete feature:
1. Create the file(s) needed
2. Write the implementation
3. Add basic tests (try `/generate-tests` from Exercise 2!)
4. Verify it works

**Track these as you go:**
- How many times did you correct Copilot's suggestions?
- Did Copilot reference your documentation?
- Did the code follow your patterns?

---

## 📋 Part 2: Run Standards Review (10 min)

### Step 4: Review Your Implementation

Now use the Standards Review Agent from Exercise 2 to check your work:

```
@standards-review Review #changes against our documented standards
```

Or review specific files:
```
@standards-review Review #file:src/api/health.ts for standards compliance
```

### Step 5: Analyze the Review Results

**What to look for:**
- Did the agent reference your ARCHITECTURE.md?
- Did it cite specific rules from copilot-instructions.md?
- Were the violations real (documented standards) or invented?
- Were the suggested fixes actionable?

**Expected outcome:**
If your implementation followed context-aware suggestions, the Standards Review should find few violations. This validates that:
1. Your documentation is being used during implementation
2. Context engineering reduces violations before review

### Step 6: Fix Any Violations

If the agent found violations:
1. Review each one
2. Check if the cited standard is correct
3. Apply the suggested fix
4. Re-run the review to confirm

**Track:** How many violations were found? How long did it take to fix them?

---

## 📋 Part 3: Establish Your Baseline (5 min)

### Step 7: Complete the Metrics Summary

Fill out this metrics summary to track your context engineering investment:

```markdown
# Context Engineering Baseline - [Date]

## Time Investment
- ARCHITECTURE.md creation: ___ minutes
- copilot-instructions.md creation: ___ minutes
- File-pattern instructions creation: ___ minutes
- Prompts creation: ___ minutes
- Standards Review Agent creation: ___ minutes
- **Total setup time: ___ minutes**

## Measured Improvements

### Response Quality
- Structural questions answered correctly: ___% → ___%
- Pattern-compliant suggestions: ___% → ___%
- References to documentation in responses: ___% 

### Standards Compliance
- Violations found by Standards Review: ___
- Time to fix violations: ___ minutes
- Violations caught BEFORE human PR review: ___

### Response Speed
- Structural questions: ___ seconds → ___ seconds
- Implementation suggestions: ___ seconds → ___ seconds

### Correction Frequency
- Corrections per implementation task: ___ → ___
- "That's not how we do it" feedback: ___ per day → ___ per day

## ROI Calculation
- Setup time: ___ minutes (one-time)
- Time saved per structural question: ___ seconds × ___ questions/day = ___ min/day
- Time saved per standards review: ___ minutes × ___ reviews/day = ___ min/day
- Break-even: ___ days
- Annual savings: ___ hours

## Next Improvements
- [ ] Add more patterns to instructions
- [ ] Create additional prompts for [specific workflow]
- [ ] Enhance Standards Review Agent for [specific checks]
```

### Step 8: Save Your Baseline

Save this as `docs/context-engineering-baseline.md` in your project. Update it monthly to track improvement over time.

---

## ✅ Success Criteria

Before completing the workshop, verify:

- [ ] Implemented at least one feature using context-aware Copilot
- [ ] Observed Copilot referencing your documentation
- [ ] Ran Standards Review on your implementation
- [ ] Standards Review cited your documented standards
- [ ] Documented at least 3 specific improvements
- [ ] Completed the metrics baseline
- [ ] Identified next improvements to make

---

## 📊 Expected Results

Based on the context engineering workflow, you should observe:

| Metric | Typical Improvement |
|--------|-------------------|
| Structural question response time | 60-70% faster |
| Pattern compliance (first suggestion) | 40-60% improvement |
| Corrections per implementation | 50-70% reduction |
| Standards violations reaching PR | 70-90% reduction |
| Time to productive with new project | 70-80% reduction |

---

## 💡 Continuous Improvement

Context engineering isn't "set and forget." Here's how to maintain and improve:

### Weekly
- Notice patterns Copilot misses → Add to instructions
- Find repeated explanations → Document once
- Standards Review catches same violation repeatedly → Add to instructions

### Monthly
- Review ARCHITECTURE.md accuracy → Update as code evolves
- Check instruction effectiveness → Refine based on gaps
- Update baseline metrics → Track improvement over time
- Review Standards Review Agent → Add new checks as needed

### Quarterly
- Audit documentation freshness → Major review
- Evaluate new Copilot features → Integrate into workflow
- Share learnings with team → Scale the approach
- Review prompt library → Add/remove based on usage

---

## 🚀 Challenge Extension

If you have extra time, try these advanced improvements:

### Create Additional Prompts

```
/security-check — Review code for common security issues
/refactor — Suggest refactoring improvements following our patterns
/new-component — Scaffold a new component with proper structure
```

### Enhance the Standards Review Agent

Add more specific checks:
- Security patterns
- Performance anti-patterns
- Accessibility requirements
- API design standards

### Create a Pre-Commit Workflow

Run Standards Review automatically before commits:
```
@standards-review Review #changes and block if any critical violations found
```

---

## 📚 Official Docs

- [VS Code: Context Engineering Guide](https://code.visualstudio.com/docs/copilot/guides/context-engineering-guide) — Complete workflow reference
- [VS Code: Plan Agent](https://code.visualstudio.com/docs/copilot/chat/chat-planning) — Built-in planning capabilities
- [VS Code: Custom Agents](https://code.visualstudio.com/docs/copilot/customization/custom-agents) — Building specialized agents
- [GitHub: Copilot Metrics](https://docs.github.com/en/copilot/using-github-copilot/getting-code-suggestions-in-your-ide) — Tracking productivity gains

---

## ➡️ Next: Workshop Wrap-Up

**[Wrap-Up: What You've Built →](04-wrapup.md)**

Review everything you've created and plan your next steps.

> *"The best time to set up context engineering was when you started the project. The second best time is today."*
