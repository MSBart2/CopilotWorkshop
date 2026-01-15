# Elena's Journey: Module 9 - Copilot CLI

> **Your role**: QA Engineer automating test workflows in the terminal  
> **Time**: 40 minutes (focused) or 60 minutes (with full workflows)  
> **Transformation**: From manual test running and debugging to conversational test automation

---

## 📖 Your Story in This Module

You've built testing infrastructure throughout this training:
- Module 1: Testing standards in repository instructions
- Module 3: Test generation prompts
- Module 4: Testing custom instructions
- Module 5: Bug reproduction skills
- Module 6: Database access via MCP for test data
- Module 7: Validated agent-generated tests
- Module 8: PR test coverage analysis

Now it's time to actually RUN these tests—efficiently, conversationally, and without reading walls of stack traces manually.

Marcus shows you the terminal workflow that will change how you work with tests.

---

## 🎯 Your Exercises

### Exercise 9.1: Conversational Test Debugging ⭐ *You lead this one*

**Your role**: Debug test failures conversationally instead of reading stack traces  
**Time**: 20 minutes  
**[View Exercise 9.1 →](../EXERCISES.md#exercise-91-your-first-agent-session--the-test-failure-detective)**

**What you'll do:**
- Run tests through the CLI
- Debug failures conversationally
- Generate missing tests through dialogue
- Understand failures without reading raw output

**Your "before" pain:**

You run `npm test` and get:

```
FAIL backend/__tests__/characters.test.js
  ● Characters API › GET /characters/:id › should return character by ID

    expect(received).toMatchObject(expected)

    - Expected  - 1
    + Received  + 1

      Object {
    -   "actor": "Bryan Cranston",
    +   "actor_name": "Bryan Cranston",
        "id": 1,
        "name": "Walter White",
      }

      45 |     const response = await request(app).get('/characters/1');
      46 |     expect(response.status).toBe(200);
    > 47 |     expect(response.body).toMatchObject({
         |                           ^
      48 |       id: 1,
      49 |       name: 'Walter White',
      50 |       actor: 'Bryan Cranston'

      at Object.<anonymous> (backend/__tests__/characters.test.js:47:27)

Test Suites: 1 failed, 3 passed, 4 total
Tests:       1 failed, 15 passed, 16 total
```

You spend 5 minutes reading, realize the test expects `actor` but the API returns `actor_name`, figure out whether to fix the test or the API, and manually make the change.

**Time per failure**: 5-10 minutes  
**Stack traces read per day**: 15-20  
**Frustration level**: High

**Your "after" win:**

You start a CLI session:

```bash
copilot
```

```
> Run the backend tests

[Agent runs npm test, sees the failure]

The test suite has 1 failing test:
- Characters API: GET /characters/:id should return character by ID

The issue is a property name mismatch:
- Test expects: `actor`  
- API returns: `actor_name`

Would you like me to:
1. Update the test to use `actor_name` (match the API)
2. Update the API to return `actor` (match the test)
3. Show me the relevant code to decide

> The API is correct - the database uses actor_name. Update the test.

[Agent updates the test]

Done. Running tests again to verify...

All 16 tests passing.
```

**Time per failure**: 30 seconds  
**Stack traces read**: 0 (agent summarizes)  
**Frustration level**: None

**Metrics:**
- **Time per test failure**: From 5-10 min to 30 sec
- **Stack traces manually read**: From 15-20/day to 0
- **Test debugging context switches**: From many to 0
- **Daily time saved on test debugging**: 1-2 hours

**Your transformation moment:**
> *"I spent years learning to read stack traces. Now I describe what I want to know, and the agent tells me. It's not that stack traces are hard—it's that they're unnecessary friction when an AI can summarize the issue."*

---

### Exercise 9.2: Smart Test Selection ⭐ *You lead this one*

**Your role**: Run only relevant tests based on changes  
**Time**: 10 minutes  
**[View Exercise 9.2 →](../EXERCISES.md#exercise-92-smart-test-selection--run-whats-relevant)**

**What you'll do:**
- Run tests for changed files only
- Avoid running the full suite for small changes
- Build confidence before pushing

**Your "before" pain:**

You modified `characters.js`. You run `npm test`:

```bash
$ npm test

... 45 seconds later ...

47 tests passed
```

You waited 45 seconds, but only 4 tests actually touched the file you changed. The other 43 tests ran for no reason.

**Your "after" win:**

```
> Run tests for files I changed

[Agent analyzes git diff]

You modified:
- backend/src/routes/characters.js

Running related tests:
- backend/__tests__/characters.test.js (12 tests)

...

12/12 tests passed in 8 seconds.
```

**Time saved per run**: 37 seconds  
**Runs per day**: 20-30  
**Daily time saved**: 12-18 minutes (adds up!)

---

### Exercise 9.3: Generate Missing Tests 🤝 *Team collaboration*

**Your role**: Identify and generate missing tests through conversation  
**Partners**: Developers who need test help  
**Time**: 10 minutes  
**[View related exercise →](../EXERCISES.md#exercise-93-precommit-health-check--never-break-ci-again)**

**What you'll do:**

A developer asks: "Can you help me write tests for this new endpoint?"

Instead of writing tests manually or explaining your patterns, you use the CLI:

```
> Show me the coverage for the episodes route

[Agent runs coverage analysis]

episodes.js coverage:
- Lines: 65% (missing lines 45-60, 78-95)
- Branches: 50% (missing error handling paths)

Missing test scenarios:
- GET /episodes with invalid show_id
- GET /episodes/:id when episode doesn't exist
- POST /episodes with missing required fields

Would you like me to generate tests for these scenarios?

> Yes, generate tests for all missing scenarios

[Agent generates tests using your testing.instructions.md patterns]

Created 6 new tests in backend/__tests__/episodes.test.js:
- it('should return 400 when show_id is invalid')
- it('should return 404 when episode does not exist')
- it('should return 400 when title is missing')
- it('should return 400 when episode_number is missing')
- it('should return 400 when season_id is missing')
- it('should handle database errors gracefully')

Running new tests... 6/6 passed.
```

**Why this matters:**

Developers no longer need to ask you for test patterns. They ask the CLI, and it generates tests using YOUR patterns from `testing.instructions.md`. Your expertise scales without your time.

---

## 🔗 Connections to Your Work

### Skills You're Building
- **Conversational debugging**: Describe problems, get solutions
- **Smart test selection**: Run what matters, skip what doesn't
- **Test generation at scale**: Coverage gaps → tests automatically
- **Pre-push validation**: Catch issues before CI

### How This Helps Your Real Work

**Traditional test workflow:**
```
Run tests → Read failures → Debug manually → Fix → Run again → Repeat
```

**CLI test workflow:**
```
"Run tests" → "Why did that fail?" → "Fix it" → "Run again" → Done
```

The difference:
- **No context switching**: Stay in the terminal
- **No stack trace parsing**: Agent explains issues
- **No manual test writing**: Agent generates from patterns
- **No CI surprises**: Pre-push validation catches issues

### Artifacts You Create
- None required—the CLI session IS the workflow
- Optional: Pre-push validation scripts

---

## 💭 Your Transformation Arc

**Before this module (your fears):**
- 😰 Reading stack traces is tedious but necessary
- 😰 Running full test suites for small changes wastes time
- 😰 Developers constantly asking for test help
- 😰 CI failures that should have been caught locally

**After this module (your achievements):**
- ✅ Failures explained conversationally—no stack trace reading
- ✅ Smart test selection runs only what's needed
- ✅ Developers self-serve test generation via CLI
- ✅ Pre-push validation catches issues before CI

**Key insight:**
> *"The CLI doesn't just run tests—it UNDERSTANDS them. When a test fails, it knows why. When coverage is low, it generates tests. When I'm debugging, it's a conversation, not a investigation. This is what testing should feel like."*

---

## 🚀 Quick Start Guide

**If you're short on time (20 minutes):**
1. Jump to Exercise 9.1
2. Start a CLI session: `copilot`
3. Run tests and debug a failure conversationally
4. Experience the difference

**If you have full time (40 minutes):**
1. Exercise 9.1: Conversational debugging (20 min)
2. Exercise 9.2: Smart test selection (10 min)
3. Exercise 9.3: Generate missing tests (10 min)

**Want to go deeper?**
- Create a pre-push validation workflow
- Build coverage improvement conversations
- Automate test maintenance tasks

---

## 📊 Your Success Metrics

| Metric | Before CLI | After CLI |
|--------|-----------|-----------|
| **Time per test failure** | 5-10 min | 30 sec |
| **Stack traces read daily** | 15-20 | 0 |
| **Time running irrelevant tests** | 30+ min/day | 5 min/day |
| **CI failures from missed issues** | 3-4/week | 0-1/week |

---

## 🛠️ Quick Reference: CLI Test Commands

```bash
# Start a session
copilot

# Common test workflows
> Run tests for files I changed
> Why did that test fail?
> Fix the failing test
> Run tests again
> Show coverage for the characters route
> Generate tests for missing coverage
> Run all tests before I push
> What tests would catch bug #142?
```

---

## ➡️ Continue Your Journey

### Within This Module
- [View all exercises](../EXERCISES.md) for full team story
- [Marcus's path](marcus.md) to see DevOps CLI workflows

### Next Module
Your next appearance: **[Module 10: Agentic SDLC](../../10-agentic-sdlc/personas/elena.md)**

**What's next for you**: You'll run tests in parallel while other agents build features. The CLI becomes one of multiple interfaces you use simultaneously—testing in the terminal while agents code in VS Code and GitHub.

---

## 📚 Resources for QA Engineers

**Official Documentation:**
- [GitHub Copilot CLI](https://docs.github.com/en/copilot/using-github-copilot/using-github-copilot-in-the-command-line)
- [Copilot CLI Reference](https://docs.github.com/en/copilot/using-github-copilot/using-github-copilot-in-the-command-line/using-github-copilot-in-the-cli)

**Testing-Specific Resources:**
- [Jest CLI Options](https://jestjs.io/docs/cli)
- [Jest Coverage Reports](https://jestjs.io/docs/configuration#collectcoverage-boolean)
- [Test-Driven Development](https://martinfowler.com/bliki/TestDrivenDevelopment.html)
