# Elena's Journey: Module 2 - Agent Plan Mode

> **Your role**: QA Engineer applying test-first thinking to AI planning  
> **Time**: 30 minutes (focused) or 50 minutes (with team collaboration)  
> **Transformation**: From reactive test discovery to proactive test planning

---

## 📖 Your Story in This Module

You've always believed in test-first development. But in practice, it's hard. Developers build features, then ask "Can you write tests for this?" The tests become afterthoughts, covering what was built rather than what should have been built.

Sarah is introducing plan mode—structured thinking before implementation. You see an opportunity: **what if testing requirements were part of the plan, not an afterthought?**

Today, you'll integrate testing considerations into the team's planning workflow, ensuring tests aren't forgotten until code review.

---

## 🎯 Your Exercises

### Exercise 2.1: Test Planning with Plan Mode ⭐ *You lead this one*

**Your role**: Use plan mode to define testing requirements before implementation  
**Time**: 20 minutes  
**[View Exercise 2.1 →](../EXERCISES.md#exercise-21-plan-before-you-code--the-character-detail-challenge-final-form)**

**What you'll create:**
- Test requirements as part of feature planning
- Edge case identification before code is written
- Test strategy that guides implementation

**Your "before" pain:**

The team plans a new feature:

```
@workspace Add a character detail page that shows:
- Character name
- Photo
- Biography
- List of episodes they appear in
```

Implementation happens. Code review comes. Elena asks:

*"Where's the test for when a character has no photo? What about when the episodes endpoint fails? What if the bio is null?"*

Developer: *"Oh... I didn't think of those. Let me add tests."*

**Time wasted**: 2-3 hours rewriting tests and sometimes refactoring code to handle edge cases that should have been planned upfront.

**Your "after" win:**

Elena introduces test-first planning:

```
@agent Use plan mode to design the Character Detail page.

Include in your analysis:
1. Feature requirements
2. Edge cases to handle (null data, missing images, API failures)
3. Testing requirements:
   - Unit tests needed
   - Integration tests needed  
   - Error scenarios to test
   - Accessibility considerations
4. Acceptance criteria (testable statements)

Don't generate code. Generate a plan.
```

Plan mode output includes:

```markdown
## Testing Requirements (Elena's Focus)

### Unit Tests
- CharacterDetail component renders with complete data
- CharacterDetail component renders with missing photo (placeholder)
- CharacterDetail component renders with null biography ("No bio available")
- EpisodeList component handles empty episode array
- EpisodeList component handles episode loading state

### Integration Tests
- Full flow: navigate to character → load data → display content
- Error flow: API returns 404 → display "Character not found"
- Error flow: API returns 500 → display error message with retry

### Edge Cases Identified
- Character with no episodes (display "No episodes" message)
- Character with 100+ episodes (pagination or scroll)
- Bio longer than display area (truncation or expansion)
- Missing actor_name field (display "Unknown actor")

### Acceptance Criteria (Testable)
- [ ] Page displays character name within 2 seconds of navigation
- [ ] Page shows placeholder image when photo_url is null
- [ ] Page shows "Character not found" for invalid IDs
- [ ] All text is accessible via screen reader
```

**Metrics:**
- **Edge cases discovered during planning vs. code review**: From 30% to 85%
- **Test coverage discussions in code review**: From 20 min to 2 min
- **Rework due to missing test scenarios**: From 3 hours to 15 minutes

**Your transformation moment:**
> *"I used to find bugs in code review. Now I find them in the plan. That's the difference between expensive fixes and cheap prevention."*

---

### Exercise 2.2: The Testing Perspective in Team Planning 🤝 *Team collaboration*

**Your role**: Add testing voice to feature planning  
**Partners**: Sarah (implementation), David (architecture), Marcus (CI/CD)  
**Time**: 10 minutes  
**[View full exercise →](../EXERCISES.md#exercise-22-review-and-refine-with-plan-mode--davids-architecture-review)**

**What you contribute:**

When the team uses plan mode, you ask the testing questions:

1. **What should we test?** — Define test categories for this feature
2. **How will we know it's done?** — Testable acceptance criteria
3. **What could go wrong?** — Error scenarios and edge cases
4. **What's the test strategy?** — Unit vs. integration vs. E2E

**Your prompt additions:**

```
@agent Add to the Character Detail plan:

Testing perspective:
1. What test files need to be created?
2. What mocks are required?
3. What are the testable acceptance criteria?
4. What error scenarios must be covered?
5. What edge cases might developers miss?
```

**Why this matters for you:**

When testing is part of the plan, not an afterthought:
- Developers think about edge cases while coding
- Tests are written alongside features, not after
- Code reviews focus on logic, not "where are the tests?"
- Your expertise shapes the feature, not just validates it

---

## 🔗 Connections to Your Work

### Skills You're Building
- **Proactive quality**: Shift-left testing starts at planning
- **Test strategy**: Define what to test before how to test
- **Acceptance criteria**: Testable requirements, not vague descriptions
- **Edge case discovery**: Find bugs before they're written

### How This Helps Your Real Work

**Traditional QA workflow:**
```
Code → Review → Find issues → Rework → Test → Find more issues → Rework
```

**Plan mode QA workflow:**
```
Plan (with tests) → Code (with tests) → Review (focused) → Ship
```

The difference:
- **Earlier feedback**: Issues found in planning cost minutes to fix
- **Better coverage**: Edge cases planned, not discovered
- **Faster reviews**: Testing already addressed in the plan
- **Higher quality**: Tests guide implementation, not validate it

### Artifacts You Create
- Testing requirements section in feature plans
- Edge case documentation
- Testable acceptance criteria templates

---

## 💭 Your Transformation Arc

**Before this module (your fears):**
- 😰 Always finding bugs in code review, not in planning
- 😰 Tests as afterthoughts, not first-class citizens
- 😰 Developers forgetting edge cases until QA catches them
- 😰 Being reactive instead of proactive

**After this module (your achievements):**
- ✅ Testing requirements are part of every feature plan
- ✅ Edge cases identified before implementation begins
- ✅ Acceptance criteria are testable from day one
- ✅ Quality is planned, not bolted on

**Key insight:**
> *"Plan mode isn't just for developers—it's a QA superpower. When I add testing considerations to the plan, developers build with tests in mind from the start. That's not just better tests—that's better code."*

---

## 🚀 Quick Start Guide

**If you're short on time (20 minutes):**
1. Jump to Exercise 2.1
2. Add testing requirements to a feature plan
3. See how edge cases emerge during planning
4. Done—you've shifted left

**If you have full time (30 minutes):**
1. Exercise 2.1: Test planning with plan mode (20 min)
2. Exercise 2.2: Add testing voice to team planning (10 min)
3. Create a test planning template for future features

**Want to go deeper?**
- Create a standard "Testing Requirements" section template
- Build edge case discovery prompts
- Define acceptance criteria patterns for your team

---

## 📊 Your Success Metrics

| Metric | Before Plan Mode | After Plan Mode |
|--------|-----------------|-----------------|
| **Edge cases discovered in planning** | 30% | 85% |
| **Test coverage discussions in review** | 20 min | 2 min |
| **Rework due to missing scenarios** | 3 hours | 15 min |
| **Tests written after code** | 70% | 10% |

---

## ➡️ Continue Your Journey

### Within This Module
- [View all exercises](../EXERCISES.md) for full team story
- [Sarah's path](sarah.md) to see implementation planning
- [David's path](david.md) to see architecture planning
- [Marcus's path](marcus.md) to see CI/CD planning

### Next Module
Your next appearance: **[Module 3: Custom Prompts](../../03-custom-prompts/personas/elena.md)**

**What's next for you**: You'll create reusable prompts that generate tests matching your planning requirements. The plans you create in Module 2 become the templates that prompts follow in Module 3.

**The evolution**: Module 1 documented standards → Module 2 plans with testing → Module 3 creates test generation prompts → Your quality process is fully automated.

---

## 📚 Resources for QA Engineers

**Official Documentation:**
- [VS Code: Agent Mode](https://code.visualstudio.com/docs/copilot/copilot-chat#_agent-mode)
- [GitHub Docs: Copilot Chat](https://docs.github.com/en/copilot/using-github-copilot/using-github-copilot-chat-in-your-ide)

**Testing-Specific Resources:**
- [Test-Driven Development Best Practices](https://martinfowler.com/bliki/TestDrivenDevelopment.html)
- [Shift-Left Testing](https://www.atlassian.com/continuous-delivery/software-testing/shift-left-testing)
- [Writing Testable Code](https://testing.googleblog.com/2008/08/by-miko-hevery-so-you-decided-to.html)
