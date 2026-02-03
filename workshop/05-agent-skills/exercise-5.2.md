# Exercise 5.2: Bug Reproduction Test Generator

## 🔨 Exercise

### Exercise 5.2: Bug Reproduction Test Generator — "From Manual Test Writing to Template-Driven Generation"

**Lead:** Elena ⭐ | **Support:** Marcus 🤝 | **Time:** 10 min

#### 📖 The Challenge

It's 3:15 PM on Monday. Elena is investigating a bug report: "Character search returns duplicate results when multiple filters are applied simultaneously." She needs to write a reproduction test before fixing the bug, but this takes 25 minutes every time:

- 8 minutes understanding the bug and identifying edge cases
- 10 minutes setting up test fixtures and mocks
- 7 minutes writing describe/it blocks and assertions

The resulting tests vary in quality. Sometimes Elena forgets to test concurrent operations that might expose race conditions. Sometimes the mocking patterns differ from team standards. There's no consistency across bug reproduction tests, and every test starts from scratch.

Marcus notices the same pattern when debugging infrastructure issues—reproduction tests could follow a template. Sarah suggests: *"Bug reproduction is a workflow: understand the issue, isolate variables, set up minimal reproduction, verify the bug, then verify the fix. That's teachable through a skill with templates and examples."*

#### 🔄 The Transformation

| Before ❌ | After ✨ |
|-----------|----------|
| Elena reads bug report, spends 8 minutes analyzing what conditions trigger it. Manually writes test setup: fixtures, mocks, describe/it structure (10 minutes). Writes assertions and edge cases from memory—sometimes forgets concurrent scenarios or timeout cases (7 minutes). Test structure varies each time. Total: 25 minutes per bug reproduction test. Edge case coverage: 60%. | Elena provides bug description to Copilot. `bug-reproduction-test-generator` skill activates, loading test template + mocking patterns + edge case examples. Copilot generates reproduction test in 4 minutes: proper fixtures from template, team-standard mocks, describe/it structure, comprehensive assertions covering happy path + edge cases from examples (empty input, null values, concurrent operations, timeouts). Edge case coverage: 100%. |
| **Time:** 25 min/bug test<br>**Edge case coverage:** 60%<br>**Consistency:** Variable (different structure each time)<br>**Mocking patterns:** Inconsistent | **Time:** 4 min/bug test<br>**Edge case coverage:** 100% (template includes all standard edge cases)<br>**Consistency:** 100% (follows template structure)<br>**Mocking patterns:** Team-standard (from skill examples) |

**Time saved:** 21 minutes per bug test × 6 bugs per sprint = **126 minutes (2.1 hours) saved per sprint**

**Quality improvement:** 60% → 100% edge case coverage

#### 🎯 Your Goal

Create a `bug-reproduction-test-generator` agent skill that teaches Copilot how to generate comprehensive bug reproduction tests using a Jest template, mocking patterns, and edge case examples.

#### 📋 Steps

1. **Create the skill directory structure**
   
   ```bash
   mkdir -p .github/skills/bug-reproduction-test-generator/examples
   ```
   
   This skill will contain a test template, mocking patterns, and example reproduction tests for different bug types.

2. **Create the test template**
   
   Create `.github/skills/bug-reproduction-test-generator/test-template.js`:
   
   ```javascript
   /**
    * Bug Reproduction Test Template
    * 
    * Use this template for writing comprehensive bug reproduction tests.
    * Follow the structure: Setup → Isolate → Reproduce → Verify
    */
   
   const request = require('supertest');
   const app = require('../src/index');
   const db = require('../src/database');
   
   // Mock database to isolate bug
   jest.mock('../src/database');
   
   describe('Bug: [Brief description of the bug]', () => {
     
     beforeEach(() => {
       // Reset mocks before each test
       jest.clearAllMocks();
       
       // Setup: Create test fixtures
       // Define minimal data needed to reproduce the bug
     });
     
     describe('Reproduction scenario', () => {
       
       it('should reproduce the bug under specific conditions', async () => {
         // Arrange: Set up the conditions that trigger the bug
         
         // Act: Execute the operation that exposes the bug
         
         // Assert: Verify the buggy behavior occurs
         // Note: This assertion should FAIL until the bug is fixed
       });
       
       it('should handle edge case: empty input', async () => {
         // Test with empty arrays, empty strings, null values
       });
       
       it('should handle edge case: concurrent operations', async () => {
         // Test race conditions if bug involves async operations
       });
       
       it('should handle edge case: timeout scenarios', async () => {
         // Test if bug involves timeouts or delayed responses
       });
       
       it('should handle edge case: malformed input', async () => {
         // Test with invalid data types, out-of-range values
       });
       
     });
     
     describe('Verification after fix', () => {
       
       it('should correctly handle the scenario after bug fix', async () => {
         // Arrange: Same conditions as reproduction test
         
         // Act: Execute the operation
         
         // Assert: Verify CORRECT behavior
         // Note: This assertion should PASS after the bug is fixed
       });
       
     });
     
   });
   ```
   
   This template provides the structure every bug reproduction test should follow: setup, reproduction with edge cases, and verification.

3. **Create example reproduction tests**
   
   Create `.github/skills/bug-reproduction-test-generator/examples/concurrent-bug-test.js`:
   
   ```javascript
   /**
    * Example: Bug reproduction test for race condition
    * Bug: Character update loses data when multiple updates happen simultaneously
    */
   
   const request = require('supertest');
   const app = require('../src/index');
   const db = require('../src/database');
   
   jest.mock('../src/database');
   
   describe('Bug: Character update race condition', () => {
     
     beforeEach(() => {
       jest.clearAllMocks();
       
       // Setup: Character that will be updated concurrently
       db.getCharacter.mockResolvedValue({
         id: 1,
         name: 'Walter White',
         show: 'Breaking Bad',
         actor: 'Bryan Cranston',
         bio: 'High school chemistry teacher'
       });
       
       db.updateCharacter.mockResolvedValue(true);
     });
     
     describe('Reproduction scenario', () => {
       
       it('should reproduce data loss when concurrent updates occur', async () => {
         // Arrange: Two simultaneous update requests
         const update1 = { actor: 'Updated Actor 1' };
         const update2 = { bio: 'Updated Bio 2' };
         
         // Act: Execute concurrent updates
         const [response1, response2] = await Promise.all([
           request(app).patch('/api/characters/1').send(update1),
           request(app).patch('/api/characters/1').send(update2)
         ]);
         
         // Assert: Verify bug - one update gets lost
         expect(response1.status).toBe(200);
         expect(response2.status).toBe(200);
         
         // Check if both updates were preserved (will FAIL if bug exists)
         const finalCharacter = await request(app).get('/api/characters/1');
         expect(finalCharacter.body.actor).toBe('Updated Actor 1');
         expect(finalCharacter.body.bio).toBe('Updated Bio 2');
       });
       
       it('should handle edge case: three or more concurrent updates', async () => {
         const updates = [
           { actor: 'Update 1' },
           { bio: 'Update 2' },
           { name: 'Update 3' }
         ];
         
         const responses = await Promise.all(
           updates.map(update => request(app).patch('/api/characters/1').send(update))
         );
         
         responses.forEach(response => {
           expect(response.status).toBe(200);
         });
         
         // Verify all updates were applied
         const finalCharacter = await request(app).get('/api/characters/1');
         expect(finalCharacter.body.actor).toBe('Update 1');
         expect(finalCharacter.body.bio).toBe('Update 2');
         expect(finalCharacter.body.name).toBe('Update 3');
       });
       
     });
     
     describe('Verification after fix', () => {
       
       it('should correctly handle concurrent updates after fix', async () => {
         const update1 = { actor: 'Bryan Cranston' };
         const update2 = { bio: 'Chemistry teacher turned meth manufacturer' };
         
         await Promise.all([
           request(app).patch('/api/characters/1').send(update1),
           request(app).patch('/api/characters/1').send(update2)
         ]);
         
         const finalCharacter = await request(app).get('/api/characters/1');
         
         // After fix, both updates should be preserved
         expect(finalCharacter.body.actor).toBe('Bryan Cranston');
         expect(finalCharacter.body.bio).toBe('Chemistry teacher turned meth manufacturer');
       });
       
     });
     
   });
   ```
   
   And `.github/skills/bug-reproduction-test-generator/examples/validation-bug-test.js`:
   
   ```javascript
   /**
    * Example: Bug reproduction test for validation bypass
    * Bug: Episode rating accepts values outside 0-10 range
    */
   
   const request = require('supertest');
   const app = require('../src/index');
   const db = require('../src/database');
   
   jest.mock('../src/database');
   
   describe('Bug: Episode rating validation bypass', () => {
     
     beforeEach(() => {
       jest.clearAllMocks();
       
       db.getEpisode.mockResolvedValue({
         id: 1,
         title: 'Pilot',
         season: 1,
         episode_number: 1,
         rating: 8.5
       });
       
       db.updateEpisode.mockResolvedValue(true);
     });
     
     describe('Reproduction scenario', () => {
       
       it('should reproduce validation bypass with out-of-range rating', async () => {
         // Arrange: Rating outside valid 0-10 range
         const invalidRating = { rating: 15.7 };
         
         // Act: Attempt to update with invalid rating
         const response = await request(app)
           .patch('/api/episodes/1')
           .send(invalidRating);
         
         // Assert: Should return 400 error (will FAIL if bug exists)
         expect(response.status).toBe(400);
         expect(response.body.error).toBe('BAD_REQUEST');
         expect(response.body.message).toContain('rating must be between 0 and 10');
       });
       
       it('should handle edge case: negative rating', async () => {
         const response = await request(app)
           .patch('/api/episodes/1')
           .send({ rating: -5.0 });
         
         expect(response.status).toBe(400);
         expect(response.body.error).toBe('BAD_REQUEST');
       });
       
       it('should handle edge case: non-numeric rating', async () => {
         const response = await request(app)
           .patch('/api/episodes/1')
           .send({ rating: 'excellent' });
         
         expect(response.status).toBe(400);
         expect(response.body.error).toBe('BAD_REQUEST');
       });
       
       it('should handle edge case: null rating', async () => {
         const response = await request(app)
           .patch('/api/episodes/1')
           .send({ rating: null });
         
         // Null might be acceptable (clears rating) or invalid - document expected behavior
         expect([200, 400]).toContain(response.status);
       });
       
     });
     
     describe('Verification after fix', () => {
       
       it('should correctly validate rating range after fix', async () => {
         // Valid ratings should be accepted
         const validResponse = await request(app)
           .patch('/api/episodes/1')
           .send({ rating: 9.2 });
         
         expect(validResponse.status).toBe(200);
         
         // Invalid ratings should be rejected
         const invalidResponse = await request(app)
           .patch('/api/episodes/1')
           .send({ rating: 15.7 });
         
         expect(invalidResponse.status).toBe(400);
       });
       
     });
     
   });
   ```
   
   These examples show patterns for different bug types: race conditions and validation bypasses.

4. **Create the SKILL.md file**
   
   Create `.github/skills/bug-reproduction-test-generator/SKILL.md`:
   
   ````markdown
   ---
   name: bug-reproduction-test-generator
   description: Generate comprehensive bug reproduction tests for FanHub using Jest. Includes test templates, mocking patterns, and edge case coverage. Use when writing tests to reproduce bugs before fixing them.
   ---
   
   # Bug Reproduction Test Generator
   
   This skill teaches how to write comprehensive bug reproduction tests that isolate issues, cover edge cases, and verify fixes.
   
   ## When to Use This Skill
   
   - Writing tests to reproduce reported bugs before fixing them
   - Creating regression tests after fixing bugs
   - Documenting bug behavior with test cases
   - Ensuring bug fixes don't break related functionality
   
   ## Test Structure
   
   All bug reproduction tests should follow [this template](./test-template.js):
   
   ### 1. Setup (beforeEach)
   - Clear all mocks to ensure clean state
   - Create minimal fixtures needed to reproduce the bug
   - Mock only what's necessary to isolate the issue
   
   ### 2. Reproduction Scenario
   - Write test that demonstrates the buggy behavior
   - This test should FAIL until the bug is fixed
   - Include clear comments explaining what's wrong
   
   ### 3. Edge Cases (at minimum, test these)
   - **Empty input**: Empty arrays, empty strings, null values
   - **Concurrent operations**: Race conditions, simultaneous requests
   - **Timeout scenarios**: Delayed responses, slow operations
   - **Malformed input**: Invalid types, out-of-range values, missing fields
   
   ### 4. Verification After Fix
   - Write test that demonstrates correct behavior
   - This test should PASS after the bug is fixed
   - Use same setup as reproduction test to ensure fix works
   
   ## Mocking Patterns
   
   **Mock external dependencies to isolate the bug:**
   
   ```javascript
   jest.mock('../src/database');
   
   beforeEach(() => {
     jest.clearAllMocks();
     
     // Mock only the data needed for this test
     db.getCharacter.mockResolvedValue({ /* fixture data */ });
     db.updateCharacter.mockResolvedValue(true);
   });
   ```
   
   **Don't mock the module under test** - you want to test the actual buggy code.
   
   ## Example Reproduction Tests
   
   Reference these patterns for different bug types:
   
   - [Concurrent operations bug](./examples/concurrent-bug-test.js) — Shows how to test race conditions with Promise.all
   - [Validation bypass bug](./examples/validation-bug-test.js) — Shows how to test input validation with edge cases
   
   ## Edge Case Checklist
   
   Before considering a reproduction test complete, verify it includes:
   
   - [ ] Happy path test that reproduces the bug
   - [ ] Empty input test (empty arrays, empty strings, null)
   - [ ] Concurrent operations test (if bug involves async code)
   - [ ] Timeout/delay test (if bug involves timing)
   - [ ] Malformed input test (wrong types, out-of-range values)
   - [ ] Verification test that demonstrates correct behavior after fix
   
   ## Test Naming Conventions
   
   - **describe block**: `Bug: [brief description]`
   - **Reproduction tests**: Start with "should reproduce..."
   - **Edge case tests**: Start with "should handle edge case: [scenario]"
   - **Verification tests**: Start with "should correctly... after fix"
   
   ## Writing Good Bug Reproduction Tests
   
   **Good reproduction test:**
   - Minimal setup - only fixtures needed to trigger the bug
   - Clear assertions that show what's wrong
   - Comments explaining expected vs. actual behavior
   - Comprehensive edge cases from checklist
   
   **Common mistakes:**
   - Too much setup - makes it hard to identify the issue
   - Vague assertions - doesn't clearly show the bug
   - Missing edge cases - bug might resurface in untested scenarios
   - Testing multiple bugs in one test - keep focused
   
   ## After Writing the Test
   
   1. Run the test - it should FAIL (reproducing the bug)
   2. Fix the bug in the source code
   3. Run the test again - it should PASS (verifying the fix)
   4. Keep the test in the suite as a regression test
   ````
   
   This skill combines the test template, mocking patterns, edge case examples, and step-by-step workflow.

5. **Test the skill**
   
   In VS Code Copilot Chat, describe a bug and ask for a reproduction test:
   
   ```
   Write a bug reproduction test for this issue: When searching for characters by name, 
   if the search term is empty, the API returns all characters instead of an empty array. 
   Include edge cases for null, whitespace-only, and very long search terms.
   ```
   
   Copilot should:
   - Load the `bug-reproduction-test-generator` skill (matches description: "writing tests to reproduce bugs")
   - Follow the template structure: setup → reproduction → edge cases → verification
   - Include all edge cases from the checklist
   - Use proper Jest mocking patterns from examples
   - Create clear assertions showing the bug and expected fix

#### ✅ Success Criteria

- [ ] Skill directory `.github/skills/bug-reproduction-test-generator/` created with SKILL.md, template, and examples
- [ ] Test template includes setup, reproduction, edge cases, and verification sections
- [ ] Two example tests demonstrate different bug types (race condition, validation bypass)
- [ ] SKILL.md includes edge case checklist, mocking patterns, and when to use the skill
- [ ] Copilot generates comprehensive reproduction test following template when bug description provided

> 📂 **Compare Your Work**: [`examples/completed-config/skills/bug-reproduction-test-generator/`](../../examples/completed-config/skills/bug-reproduction-test-generator/)

#### 📚 Official Docs

- [Use Agent Skills in VS Code](https://code.visualstudio.com/docs/copilot/customization/agent-skills) — Agent skills documentation and resource referencing
- [About Agent Skills (GitHub)](https://docs.github.com/en/copilot/concepts/agents/about-agent-skills) — Skill structure and progressive loading

---

## 🔗 What You Built

**In this exercise:**
- `.github/skills/bug-reproduction-test-generator/SKILL.md` — Instructions for writing comprehensive bug reproduction tests
- `.github/skills/bug-reproduction-test-generator/test-template.js` — Jest template with setup → reproduction → edge cases → verification structure
- `.github/skills/bug-reproduction-test-generator/examples/` — Example tests showing race condition and validation bug patterns

**How it compounds:**

| Previous Modules | This Module | Combined Power |
|------------------|-------------|----------------|
| Custom instructions for tests (Module 4) define test conventions | Bug reproduction skill teaches test generation workflow with templates | Conventions + templates = comprehensive, consistent bug reproduction tests |
| API endpoint design skill (Exercise 5.1) generates spec-compliant endpoints | Bug reproduction skill tests those endpoints thoroughly | Generate correct code + test exhaustively = high-quality, verified implementations |

**Elena's ROI calculation:**
- Before: 25 min/bug test × 6 bugs/sprint = 150 minutes
- After: 4 min/bug test × 6 bugs/sprint = 24 minutes
- **Time saved:** 126 minutes (2.1 hours) per sprint
- **Annual impact:** 126 min/sprint × 26 sprints/year = 3,276 minutes (54.6 hours) = **more than 1 work week per year**
- **Quality impact:** 60% → 100% edge case coverage

---

## ➡️ Next Up

**[Exercise 5.3: Build Pipeline Analyzer](exercise-5.3.md)** — Bug reproduction tests are now comprehensive and template-driven. Next: teach Copilot how to debug build failures with diagnostic scripts and log pattern analysis.

> *"Tests follow templates now, saving 21 minutes per bug. But when builds fail, I spend 30 minutes debugging—15 minutes reproducing locally, 15 tracing dependencies. Can a skill teach Copilot to analyze build logs and identify root causes?"*  
> — Marcus, about to create the build-pipeline-analyzer skill

---
