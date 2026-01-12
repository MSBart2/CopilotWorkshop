# Elena's Journey: Module 3 - Custom Prompts

> **Your role**: QA Engineer ensuring test quality and consistency  
> **Time**: 60 minutes (focused) or 90 minutes (with team collaboration)  
> **Transformation**: From manually explaining test patterns to automating quality standards

---

## 📖 Your Story in This Module

Every time you ask Copilot to write tests, you type out the same requirements: "Use Jest, mock external dependencies, cover happy path and error cases, follow our naming conventions." It's tedious. And worse—when other team members ask for tests, they forget half these requirements.

You've built a career on consistency and quality. But maintaining quality at scale is exhausting when you have to manually review every test to ensure it follows your patterns.

Today, you'll create prompts that encode your testing expertise once and distribute it to the entire team. Your standards become automatic. Your knowledge multiplies.

---

## 🎯 Your Exercises

### Exercise 2.1: Create a Test Prompt Library ⭐ *You lead this one*

**Your role**: Build reusable test generation prompts for the team  
**Time**: 30 minutes  
**[View full exercise →](../EXERCISES.md#exercise-21-create-a-test-prompt-library--elenas-quality-toolkit)**

**What you'll create:**
- `create-component-tests.prompt.md` — React component test generator
- `create-api-tests.prompt.md` — Express API route test generator

**Your "before" pain:**
Every test request requires you to:
- Specify Jest framework
- Explain mocking patterns
- Remind about error cases
- Enforce naming conventions
- Check for accessibility tests

When Priya asks for tests, she forgets to mock the API. When Marcus asks, he skips error cases. You're the quality bottleneck.

**Your "after" win:**
- Type `/create-component-tests CharacterCard.jsx`
- Get comprehensive tests with all your standards applied automatically
- Everyone generates Elena-quality tests without asking Elena

**Your transformation moment:**
> *"I wrote this once. Now the whole team generates tests my way. That's not automation—that's multiplication of expertise."*

---

### Exercise 2.3: Build the Episode Guide 🤝 *Team collaboration*

**Your role**: Generate comprehensive tests for the feature  
**Partners**: Rafael (requirements), Marcus (backend), Priya (frontend)  
**Time**: 15 minutes (within the 45min exercise)  
**[View full exercise →](../EXERCISES.md#exercise-23-build-the-episode-guide--the-team-collaborates)**

**What you contribute:**
1. Use `/create-api-tests` for the episodes route
2. Use `/create-component-tests` for the EpisodeGuide component
3. Verify test coverage matches acceptance criteria
4. Validate that all edge cases are tested

**Why this matters for you:**
This proves your prompts work at scale. The team ships a feature with comprehensive test coverage WITHOUT you manually reviewing every test. Your standards are enforced automatically.

---

## 🔗 Connections to Your Work

### Skills You're Building
- **Pattern codification**: Turning manual review checklists into automated prompts
- **Knowledge distribution**: Making your expertise available to everyone
- **Quality automation**: Ensuring standards without being the bottleneck
- **Test-driven collaboration**: Enabling tests-from-the-start culture

### How This Helps Your Real Work

As a QA engineer, your job is to ensure quality. But traditional QA has problems:
- **You're a bottleneck**: Every test request goes through you
- **Knowledge doesn't scale**: Only you know the test patterns
- **Late feedback**: Tests written after code, finding bugs late
- **Inconsistency**: Different developers write tests differently

**Custom prompts solve all four:**

1. **Remove bottleneck**: Developers generate quality tests without waiting for you
2. **Scale knowledge**: Your testing patterns are encoded and shared automatically
3. **Early feedback**: Prompts encourage test-first development
4. **Consistency**: Everyone uses the same patterns (yours)

### Artifacts You Create
- `.github/prompts/create-component-tests.prompt.md` — Your component testing standards
- `.github/prompts/create-api-tests.prompt.md` — Your API testing patterns
- Challenge: `create-integration-tests.prompt.md` — End-to-end test framework

---

## 💭 Your Transformation Arc

**Before this module (your fears):**
- 😰 AI-generated tests that look complete but miss critical scenarios
- 😰 Losing the thoughtful analysis that makes testing effective
- 😰 Tests that pass but don't actually validate business requirements
- 😰 Becoming obsolete if AI can "generate tests"

**After this module (your achievements):**
- ✅ Your testing expertise is encoded in prompts everyone uses
- ✅ Test quality is maintained at scale without you being a bottleneck
- ✅ Developers generate tests that follow your patterns automatically
- ✅ You focus on test strategy, not reviewing basic test structure
- ✅ Your value INCREASED—you're a quality multiplier, not just a reviewer

**Key insight:**
> *"AI doesn't replace testing expertise—it distributes it. My prompts ensure that every test, no matter who writes it, reflects 8 years of QA knowledge. That makes me more valuable, not less."*

---

## 🚀 Quick Start Guide

**If you're short on time (30 minutes):**
1. Jump to Exercise 2.1
2. Create the component test prompt
3. Test it on CharacterCard.jsx
4. See immediate quality improvement

**If you have full time (60 minutes):**
1. Exercise 2.1: Create both test prompts (30 min)
2. Exercise 2.3: Use them in team collaboration (15 min)
3. Create integration test prompt (Challenge, 15 min)

**Want to go deeper?**
- Add accessibility testing standards to your prompts
- Create prompts for performance tests
- Build visual regression test templates

---

## 🎯 Impact on Your Role

### Before Custom Prompts
- Review every test manually
- Explain the same patterns repeatedly
- Find missing edge cases in code review
- **Time per test review**: 15-20 minutes

### After Custom Prompts
- Prompts encode your patterns
- Developers self-serve quality tests
- Focus on test strategy, not syntax
- **Time per test review**: 5 minutes (just verify logic)

### Real-World Applications

**Sprint planning**: Developers factor in testing because prompts make it easy. No more "tests as afterthought."

**Code reviews**: You review test logic and coverage, not "did you remember to mock the API?" basics.

**Onboarding**: New QA engineers learn your patterns by reading your prompts. Instant knowledge transfer.

**Regression prevention**: Prompts ensure consistent test structure. Bugs caught early, not in production.

---

## 📊 Your Success Metrics

Track these to prove prompt value:

| Metric | Before Prompts | After Prompts |
|--------|----------------|---------------|
| **Tests needing rework in code review** | 60-70% | 10-20% |
| **Time spent explaining test patterns** | 10+ hours/week | 2 hours/week |
| **Test coverage consistency** | Varies by developer | Consistent across team |
| **Questions about "how to test X"** | 20+ per week | 3-5 per week |

---

## ➡️ Continue Your Journey

### Within This Module
- [View all exercises](../EXERCISES.md) for full team story
- [Rafael's path](rafael.md) to see how specs connect to your tests
- [Jordan's path](jordan.md) to see git automation

### Next Module
Your next appearance: **[Module 4: Custom Instructions](../../04-custom-instructions/personas/elena.md)**

**What's next for you**: You'll create file-specific instructions that automatically activate when someone opens a test file. Your testing standards will apply without anyone invoking a prompt—they'll just be there.

**Why it matters**: Module 3 taught you to create reusable prompts. Module 5 teaches you to make those patterns apply automatically based on file type. Even less friction, even more consistency.

---

## 📚 Resources for QA Engineers

**Official Documentation:**
- [VS Code: Reusable Prompts](https://code.visualstudio.com/docs/copilot/copilot-customization#_reusable-prompt-files)
- [VS Code: Prompt File Variables](https://code.visualstudio.com/docs/copilot/copilot-customization#_use-variables-in-prompts)
- [GitHub Docs: Custom Prompts](https://docs.github.com/en/copilot/customizing-copilot/adding-custom-prompts-for-github-copilot)

**Testing-Specific Resources:**
- Jest documentation for prompt reference
- React Testing Library best practices
- Supertest API testing patterns

**Apply to Your Real Work:**
- Create prompts for your specific testing frameworks
- Add your organization's security testing requirements
- Build prompts for your accessibility standards

