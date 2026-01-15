# Elena's Journey: Module 1 - Repository Instructions

> **Your role**: QA Engineer ensuring testing standards are documented  
> **Time**: 35 minutes (focused) or 60 minutes (with team collaboration)  
> **Transformation**: From undocumented test expectations to codified testing standards

---

## 📖 Your Story in This Module

You've been the team's testing expert for 8 years. You know exactly how tests should be written—mocking patterns, assertion styles, edge case coverage, test naming conventions. But that knowledge lives in your head.

Every code review, you write the same comments: "Remember to mock axios at module level." "Don't forget the error case test." "Use describe/it blocks, not standalone test()."

David is documenting architecture. Sarah is adding coding standards. But who's documenting the testing expectations? If those aren't written down, Copilot won't know them—and neither will new team members.

Today, you'll ensure testing standards become part of the team's shared context.

---

## 🎯 Your Exercises

### Exercise 1.2: Add Testing Standards to Repository Instructions ⭐ *You lead this one*

**Your role**: Add testing patterns to `.github/copilot-instructions.md`  
**Time**: 20 minutes  
**[View Exercise 1.2 in full →](../EXERCISES.md#exercise-12-create-repository-instructions--sarah-defines-the-patterns)**

**What you'll contribute:**
- Testing framework standards (Jest for all tests)
- Mocking conventions (mock external dependencies, not internal modules)
- Test structure patterns (describe/it blocks, Arrange-Act-Assert)
- Edge case requirements (always test error paths)

**Your "before" pain:**

You ask Copilot to write tests for a new API endpoint:

```
@workspace Write tests for the characters route
```

Copilot generates:
```javascript
test('should return characters', () => {
  // No mocking strategy
  // No error case testing  
  // Uses 'test' instead of 'it'
  // No describe grouping
});
```

You spend 15 minutes in code review explaining the same patterns you've explained 100 times before.

**Your "after" win:**

With testing standards documented in `copilot-instructions.md`:

```javascript
describe('Characters Route', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('GET /characters', () => {
    it('should return all characters when database succeeds', async () => {
      // Arrange
      mockDb.query.mockResolvedValue([{ id: 1, name: 'Walter White' }]);
      
      // Act
      const response = await request(app).get('/characters');
      
      // Assert
      expect(response.status).toBe(200);
      expect(response.body).toHaveLength(1);
    });

    it('should return 500 when database fails', async () => {
      mockDb.query.mockRejectedValue(new Error('Connection failed'));
      
      const response = await request(app).get('/characters');
      
      expect(response.status).toBe(500);
    });
  });
});
```

**Metrics:**
- **Code review comments on test structure**: From 5-8 per PR to 0-1
- **Time explaining test patterns**: From 15 min/PR to 2 min/PR
- **Tests needing rework**: From 60% to 15%

**Your transformation moment:**
> *"I stopped being the testing bottleneck. My patterns are in the repo now—Copilot applies them automatically, and new developers learn them by seeing what AI generates."*

---

### Exercise 1.1: Review Architecture for Testability 🤝 *Team collaboration*

**Your role**: Ensure architecture doc includes testing considerations  
**Partners**: David (architecture lead)  
**Time**: 10 minutes  
**[View full exercise →](../EXERCISES.md#exercise-11-document-the-architecture--david-maps-the-territory)**

**What you contribute:**

When David creates `ARCHITECTURE.md`, you review it for testability:

1. Are test directories documented?
2. Is the testing stack mentioned (Jest, Supertest)?
3. Are there notes about what should be mocked vs. real?

**Suggested additions to architecture:**

```markdown
## Testing Architecture

### Test Structure
- `frontend/__tests__/` — React component tests (Jest + React Testing Library)
- `backend/__tests__/` — API route tests (Jest + Supertest)
- `backend/src/**/__tests__/` — Unit tests co-located with source

### Testing Patterns
- Mock all external dependencies (databases, APIs)
- Test internal modules with real implementations
- Integration tests use in-memory SQLite
```

**Why this matters for you:**

When Copilot understands where tests live and how they're structured, it generates tests in the right locations with the right patterns. No more manually moving test files or fixing import paths.

---

## 🔗 Connections to Your Work

### Skills You're Building
- **Documentation as leverage**: Your testing knowledge scales beyond your time
- **Quality by default**: Standards are enforced automatically
- **Onboarding acceleration**: New team members learn patterns from AI suggestions

### How This Helps Your Real Work

As a QA engineer, you've spent years building testing expertise. But that expertise has limits:

**Before documentation:**
- You review every PR for test quality
- You explain the same patterns repeatedly
- New developers guess at test structure
- Testing knowledge leaves when you're on vacation

**After documentation:**
- Copilot applies your patterns automatically
- Code reviews focus on logic, not structure
- New developers get quality tests from day one
- Your expertise is encoded and permanent

### Artifacts You Create
- Testing section in `.github/copilot-instructions.md`
- Testing architecture notes in `docs/ARCHITECTURE.md`
- Test file templates (optional challenge)

---

## 💭 Your Transformation Arc

**Before this module (your fears):**
- 😰 AI-generated tests that look complete but miss critical scenarios
- 😰 Losing control over test quality as AI writes more tests
- 😰 Becoming the testing bottleneck as team velocity increases
- 😰 My patterns not being followed when I'm not reviewing

**After this module (your achievements):**
- ✅ Testing standards documented and automatically applied
- ✅ AI generates tests that follow MY patterns
- ✅ Code reviews focus on test logic, not structure
- ✅ Quality scales without me being the bottleneck

**Key insight:**
> *"Documentation isn't bureaucracy—it's multiplication. Every hour I spend writing testing standards saves the team hundreds of hours of review comments and rework. And Copilot becomes my quality enforcement partner."*

---

## 🚀 Quick Start Guide

**If you're short on time (20 minutes):**
1. Jump to Exercise 1.2
2. Add the testing section to `copilot-instructions.md`
3. Test Copilot's test generation quality improvement
4. Done—your standards are now in place

**If you have full time (35 minutes):**
1. Exercise 1.1: Review architecture for testability (10 min)
2. Exercise 1.2: Add testing standards (20 min)
3. Verify AI-generated tests follow your patterns (5 min)

**Want to go deeper?**
- Create test file templates for different test types
- Add accessibility testing standards
- Document performance testing patterns

---

## 📊 Your Success Metrics

| Metric | Before Documentation | After Documentation |
|--------|---------------------|---------------------|
| **Test structure review comments** | 5-8 per PR | 0-1 per PR |
| **Time explaining patterns** | 15 min/PR | 2 min/PR |
| **Tests needing structural rework** | 60% | 15% |
| **New developer test quality** | Inconsistent | Matches team standards |

---

## ➡️ Continue Your Journey

### Within This Module
- [View all exercises](../EXERCISES.md) for full team story
- [David's path](david.md) to see architecture documentation
- [Sarah's path](sarah.md) to see coding standards

### Next Module
Your next appearance: **[Module 3: Custom Prompts](../../03-custom-prompts/personas/elena.md)**

**What's next for you**: You'll create reusable test generation prompts that encode your patterns. Instead of just documenting standards, you'll create `/create-component-tests` and `/create-api-tests` prompts that generate quality tests instantly.

**The evolution**: Module 1 documents your standards → Module 3 creates prompts that apply them → Module 4 makes them automatic for test files.

---

## 📚 Resources for QA Engineers

**Official Documentation:**
- [GitHub Docs: Repository Custom Instructions](https://docs.github.com/en/copilot/customizing-copilot/adding-repository-custom-instructions-for-github-copilot)
- [VS Code: Copilot Customization](https://code.visualstudio.com/docs/copilot/copilot-customization)

**Testing-Specific Resources:**
- [Jest Best Practices](https://jestjs.io/docs/getting-started)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Supertest for API Testing](https://github.com/ladjs/supertest)
