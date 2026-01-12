# Elena's Path: Custom Instructions

## 🎯 Your Focus: Preparing for Character Detail v2 Tests

> 🧵 **The Golden Thread**: In Module 07, the team will use agent mode to build Character Detail v2. You're preparing now—creating testing instructions that will ensure the generated tests are excellent from the start. This module transforms your 8 years of QA expertise into **automatic testing standards**.

Elena, instead of writing the same review comments over and over, you'll create instructions that ensure every generated test follows your patterns—proper structure, edge case coverage, and meaningful assertions.

**Your exercises**: 4.1 (Testing Instructions)  
**Time**: ~25 minutes  
**Theme**: From repetitive feedback to encoded expertise

---

## Your Journey in This Module

```
Elena's Arc:
┌─────────────────────────────────────────────────────────────────┐
│  "Without testing instructions, the agent will generate chaos"  │
│                         ↓                                       │
│  Creates testing.instructions.md with comprehensive patterns    │
│                         ↓                                       │
│  "Character Detail v2's tests will be excellent from the start" │
└─────────────────────────────────────────────────────────────────┘
```

---

## Exercise 4.1: Testing Instructions — "The Character Detail Tests Will Need Help"

> 🧵 **The Golden Thread Continues**: The agent will build Character Detail v2 in Module 07—including tests. Your instructions will ensure those tests are excellent from the start.

### 📖 The Story

**Elena** (QA Engineer, 8 years) is thinking ahead about the Character Detail v2 feature. It's going to be complex—character data, episodes, quotes, related characters, favorites. The tests will need to be comprehensive.

*"Without testing-specific guidance, the agent will generate inconsistent tests,"* Elena predicts. *"Some will use `describe/it`, others will use `test`. Mocking will be all over the place. Edge cases will be spotty."*

She opens existing test files to assess the baseline. *"I could review every test manually after the agent generates them, or..."* Elena pauses. *"I could teach Copilot our testing standards so Character Detail v2 comes out right the first time."*

### ❌ The "Before" — What the Agent Would Generate

Without testing-specific instructions, an agent would generate:

```javascript
// Inconsistent patterns (what we want to prevent)
test('renders character name', () => {  // Uses 'test' instead of 'it'
  render(<CharacterDetail id="1" />);
  expect(screen.getByText('Walter White')).toBeInTheDocument();
});

describe('CharacterDetail', () => {
  it('should fetch character data', async () => {
    // No mock setup visible—where's axios mocked?
    const { result } = renderHook(() => useCharacter('1'));
    await waitFor(() => expect(result.current.data).toBeDefined());
  });
  
  // Missing: What if the character has no episodes?
  // Missing: What if the API returns 404?
  // Missing: What if network fails?
});
```

**Elena's typical review comments (the same ones she always writes):**
- "Please use `describe/it` blocks consistently, not mix with `test`"
- "Mock axios at module level for consistency"
- "Where's the error case test? What if the character doesn't exist?"
- "Test edge case: character with no episodes"

*"I've written these exact comments 47 times this quarter,"* Elena calculates.

### 🎯 Objective

Create custom instructions that automatically activate for all test files, ensuring consistent quality for Character Detail v2 and all future features.

### 📋 Steps

1. **Review existing tests** to understand the baseline
   
   Look at existing test files in FanHub and identify:
   - What testing patterns are currently used?
   - Are error cases covered?
   - Is mocking consistent?

2. **Create the instructions directory**
   
   ```bash
   mkdir -p .github/instructions
   ```

3. **Create testing instructions**
   
   Create: `.github/instructions/testing.instructions.md`
   
   ````markdown
   ---
   applyTo: "**/*.test.{js,ts,jsx,tsx}"
   ---
   
   # Testing Standards for FanHub
   
   When generating or modifying test files, follow these standards.
   
   ## Test Structure
   
   - Use `describe` blocks to group related tests by feature/function
   - Use `it` for individual test cases (not `test`)
   - Follow pattern: `it('should [expected behavior] when [condition]')`
   - One assertion focus per test (related assertions OK)
   
   ## Test Categories
   
   Every function/component should have tests for:
   1. **Happy path** — Normal successful operation
   2. **Edge cases** — Boundary conditions, empty inputs, max values
   3. **Error handling** — Invalid inputs, failures, exceptions
   4. **Integration points** — Mocked external dependencies
   
   ## FanHub-Specific Test Patterns
   
   For character/episode/show data:
   - Test with complete data AND partial data (missing optional fields)
   - Test empty arrays (character with no episodes, show with no quotes)
   - Test loading states and error states
   - Test "not found" scenarios (404 responses)
   
   ## Mocking Standards
   
   - Mock external dependencies (APIs, databases), not internal modules
   - Use `jest.mock()` at module level for consistent mocking
   - Reset mocks in `beforeEach` to prevent test pollution
   - Prefer `jest.spyOn()` when you need to verify calls
   
   ```javascript
   // ✅ Good - mock external dependency
   jest.mock('axios');
   
   // ❌ Bad - mock internal implementation
   jest.mock('../utils/helper');
   ```
   
   ## Assertion Patterns
   
   ```javascript
   // ✅ Test behavior, not implementation
   it('should return user data when valid ID provided', async () => {
     const result = await getUser(123);
     expect(result).toHaveProperty('name');
     expect(result).toHaveProperty('email');
   });
   
   // ❌ Don't test implementation details
   it('should call database once', async () => {
     await getUser(123);
     expect(db.query).toHaveBeenCalledTimes(1);  // Brittle!
   });
   ```
   
   ## Error Testing
   
   ```javascript
   // Always test error scenarios
   it('should throw NotFoundError when user does not exist', async () => {
     await expect(getUser(999)).rejects.toThrow(NotFoundError);
   });
   
   it('should handle network failures gracefully', async () => {
     axios.get.mockRejectedValue(new Error('Network error'));
     await expect(fetchData()).rejects.toThrow('Network error');
   });
   ```
   
   ## Test Data
   
   - Use factories or fixtures for complex test data
   - Avoid magic numbers—use named constants
   - Each test should set up its own data (no shared mutable state)
   
   ## Coverage Expectations
   
   - Aim for meaningful coverage, not 100%
   - Cover all public API methods
   - Cover all error branches
   - Skip testing trivial getters/setters
   ````

3. **Test the instructions**
   
   Open any `.test.js` file (or create one) and ask Copilot to generate tests:
   
   ```
   Write tests for the user authentication function in auth.js
   ```
   
   Observe: The generated tests should follow your specified patterns.

4. **Verify with a complex scenario**
   
   ```
   Write comprehensive tests for an API endpoint that:
   - Fetches user by ID
   - Requires authentication
   - Returns 404 if not found
   - Returns 401 if token invalid
   - Handles database errors
   ```
   
   Check that Copilot generates tests for all error cases, not just happy path.

### ✅ Success Criteria

- [ ] Created `.github/instructions/testing.instructions.md`
- [ ] File uses correct `applyTo` pattern for test files
- [ ] Generated tests follow `describe/it` structure
- [ ] Generated tests include error case coverage
- [ ] Mocking follows the specified patterns

### ✨ The "After" — The Improved Experience

Elena's testing standards are now **automatically enforced**:

**Before**: "Remember to test error cases. Use describe blocks. Mock axios at module level..."  
**After**: Every test file gets testing expertise automatically

**PR #44 (with instructions in place)**

Elena opens the PR, runs a quick review:
- Tests use `describe/it` structure ✓
- External dependencies mocked correctly ✓
- Error cases covered ✓
- Behavior tested, not implementation ✓

Review comment: *"Looks great! Just one suggestion: consider adding a test for rate limiting."*

**Time saved per test file**: 5-10 minutes of back-and-forth

### 📚 Official Docs

- [GitHub Docs: Custom Instructions](https://docs.github.com/en/copilot/customizing-copilot/adding-repository-custom-instructions)
- [VS Code: Custom Instructions](https://code.visualstudio.com/docs/copilot/copilot-customization)

### 💭 Elena's Relief

*"I used to write the same review comments over and over. Now the AI generates tests that already follow our patterns. I can focus on reviewing the logic, not the formatting. My expertise isn't consumed by repetition—it's encoded and multiplied."*

---

## 🚀 Challenge Extension: Specialized Test Instructions

Create additional test instructions for specific domains:

**API Integration Tests** (`.github/instructions/api-tests.instructions.md`):
```markdown
---
applyTo: "**/*.integration.test.{js,ts}"
---

# API Integration Test Standards

- Use supertest for HTTP assertions
- Test real database interactions (test DB)
- Clean up test data after each test
- Test authentication flows end-to-end
```

**Component Tests** (`.github/instructions/component-tests.instructions.md`):
```markdown
---
applyTo: ["**/*.test.tsx", "**/*.spec.tsx"]
---

# Component Test Standards

- Use React Testing Library, not Enzyme
- Test user interactions, not implementation
- Use `screen.getByRole()` over `getByTestId()`
- Test accessibility (a11y) with jest-axe
```

---

## 🎯 Elena's Module Summary

### Your Transformation

| Before | After |
|--------|-------|
| Same review comments repeated 47x | Standards auto-enforced in every test |
| Time spent on formatting feedback | Time spent on strategic test design |
| Expertise consumed by repetition | Expertise encoded and multiplied |
| Inconsistent test quality across team | Consistent patterns everywhere |

### Artifacts You Created

```
.github/instructions/
└── testing.instructions.md    # Your 8 years of QA expertise
```

### The Quality Champion's Win

Your role isn't diminished—it's **elevated**. Instead of being the "use describe blocks" reviewer, you're now:

- **The quality strategist**: Focusing on test coverage gaps, not formatting
- **The pattern architect**: Defining standards that scale across the team
- **The teacher**: Your expertise trains both AI and developers

---

## ➡️ Continue Your Journey

**Next for Elena**: [Module 5: Agent Skills](../../05-agent-skills/README.md) — Create reusable skills for test generation, edge case analysis, and coverage reporting.

**The Payoff**: [Module 7: Custom Agents](../../07-custom-agents/README.md) — Watch your testing instructions activate when the agent builds Character Detail v2!
