# Module 9: GitHub Copilot CLI for Build & Test Workflows — Exercises

## ⏰ 6:00 PM — Terminal Mastery

> *"I just spent 20 minutes running tests manually, fixing failures one by one, only to have CI fail on something I forgot to check. There has to be a better way."*  
> — Marcus, frustrated after another CI failure

---

## 📖 Story So Far

In **Module 1**, the team established repository instructions to guide Copilot.  
In **Module 2**, they learned plan mode thinking for complex changes.  
In **Module 3**, they created custom prompts to streamline repetitive tasks.  
In **Module 4**, they added custom instructions to elevate code quality.  
In **Module 5**, they built specialized Agent Skills for domain-specific work.  
In **Module 6**, they integrated MCP servers for external data sources.  
In **Module 7**, they created dedicated custom agents for different workflows.  
In **Module 8**, Rafael mastered GitHub.com Copilot for product management tasks.

Now, **in Module 9**, Marcus shows the team the terminal workflows that make him unstoppable—interactive AI sessions that handle testing, debugging, and pre-push validation conversationally.

---

## 💡 Integration Note

The skills and instructions from previous modules work in CLI sessions:
- **Repository instructions** guide CLI agent suggestions
- **Custom instructions** ensure quality standards are met
- **Agent Skills** can be referenced in CLI conversations
- **Custom prompts** patterns translate to CLI workflows

Everything compounds.

---

## 🎯 Learning Objectives

By the end of this module, you will:

- Install and configure GitHub Copilot CLI for interactive agent sessions
- Debug test failures conversationally without reading stack traces manually
- Run smart test selection based on code changes
- Automate pre-push health checks to never break CI again
- Generate tests for new code through conversation
- Debug broken builds and dependencies interactively
- Drive test coverage improvements with agent assistance
- Create morning health check routines

---

## 🧠 Mindful Moment: The Terminal as Conversation

Traditional terminal use is command-response:
```bash
$ npm test
[wall of output]
$ # read, think, decide next command
$ npm test -- character.test.js
```

**CLI agent sessions are conversations:**
```bash
$ copilot
> Run tests for files I changed
[agent analyzes git diff, runs relevant tests]

> That test failed. Why?
[agent explains the failure]

> Fix it
[agent proposes changes]
```

You're not memorizing commands—you're describing intent.

---

## 📚 Key Concepts

### The Interactive Session Model

| Traditional CLI | GitHub Copilot CLI Agent |
|----------------|-------------------------|
| One command at a time | Multi-turn conversation |
| Read output manually | Agent explains results |
| Memorize syntax | Describe intent |
| Sequential execution | Iterative problem-solving |

### How It Works

1. **Start a session**: `copilot`
2. **Trust the directory**: Agent asks permission first time
3. **Converse naturally**: Describe what you want
4. **Approve actions**: Agent asks before executing
5. **Iterate**: Keep refining until done

### Tool Approval System

The agent will ask permission before:
- Running shell commands
- Modifying files
- Installing packages
- Pushing to git

You can approve per-action or for the session.

---

## 🔨 Exercises

### Exercise 9.1: Your First Agent Session — "The Test Failure Detective"

#### 📖 The Story

**Meet Marcus.** He just modified `fanhub/backend/src/routes/characters.js` to add a new endpoint. He runs `npm test` and sees 47 lines of stack trace. It takes him 10 minutes to figure out the issue: a missing import.

Sarah walks over: *"You're still reading stack traces manually? Let me show you the terminal workflow that saves me hours every week."*

#### ❌ The "Before" — What Frustration Looks Like

Marcus's current workflow:
1. Run `npm test`
2. Scroll through wall of red text
3. Find the actual error message (buried 20 lines down)
4. Google the error
5. Read Stack Overflow
6. Try a fix
7. Run tests again
8. Repeat

**Time wasted per test failure**: ~8-12 minutes  
**Frustration level**: Maximum  
**CI breaks**: Monthly average of 3-4 preventable failures

#### 🎯 Objective

Start an interactive CLI session and have the agent debug a test failure for you.

#### 📋 Steps

1. **Create a failing test** to work with:

```bash
cd /workspaces/CopilotTraining/fanhub/backend
```

Open `src/routes/__tests__/characters.test.js` and add this intentionally broken test:

```javascript
describe('Character endpoint edge cases', () => {
  it('should handle missing character data gracefully', async () => {
    const response = await request(app)
      .get('/api/characters/999')
      .expect(200);  // Wrong! Should expect 404
    
    expect(response.body.error).toBeDefined();
  });
});
```

2. **Verify the test fails**:

```bash
npm test -- characters.test.js
```

You should see a failure with confusing output.

3. **Start an interactive CLI session**:

```bash
copilot
```

The first time, you'll see a prompt asking you to trust the directory. Type `yes`.

4. **Ask the agent to help**:

```
Run the character tests and explain any failures
```

5. **Review the agent's explanation** — It should:
   - Identify which test failed
   - Explain WHY it failed (wrong status expectation)
   - Suggest a fix

6. **Ask the agent to fix it**:

```
Fix that test
```

Review the proposed changes before approving.

7. **Verify the fix**:

```
Run the character tests again
```

8. **Exit the session**:

```
exit
```

#### ✅ Success Criteria

- [ ] Started an interactive `copilot` session
- [ ] Agent identified and explained the test failure
- [ ] Agent proposed a fix (changing `expect(200)` to `expect(404)`)
- [ ] Test passes after fix
- [ ] Experienced the tool approval workflow

#### ✨ The "After" — The Improved Experience

Marcus describes his issue conversationally. The agent:
1. Runs the test
2. Parses the failure
3. Explains the root cause in plain English
4. Proposes a fix
5. Applies it after approval

**Time saved per test failure**: ~7-10 minutes  
**Mental load reduction**: 80% — No more deciphering stack traces  
**Understanding improvement**: Agent explains WHY, not just WHAT

#### 📚 Official Docs

- [Using GitHub Copilot CLI](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/use-copilot-cli)
- [About GitHub Copilot CLI agents](https://docs.github.com/en/copilot/concepts/agents/about-copilot-cli)

#### 💭 Marcus's Reaction

_"Wait... I just described the problem, and it found AND fixed it? I've been reading stack traces like a chump for five years."_

#### 🚀 Challenge Extension

Ask the agent: *"Add three more edge case tests for the characters endpoint."* See how well it understands context.

---

### Exercise 9.2: Smart Test Selection — "Only Run What Matters"

#### 📖 The Story

**Marcus is learning.** He just changed one function in `database/queries.js`. Out of habit, he runs the full test suite: `npm test`. It takes 2 minutes. Sarah looks over: *"Why are you running tests for files you didn't touch?"*

#### ❌ The "Before" — What Frustration Looks Like

Marcus's test workflow:
- Changed 1 file → Runs 47 tests → Waits 2 minutes
- 90% of tests are irrelevant to his change
- Slow feedback loop kills flow state
- Still forgets to run linting before pushing

**Time wasted per iteration**: 90-120 seconds  
**Iterations per feature**: 8-10  
**Total wasted time**: 12-20 minutes per feature

#### 🎯 Objective

Use the CLI agent to run only tests relevant to files you changed.

#### 📋 Steps

1. **Make a small change** to `fanhub/backend/src/database/queries.js`:

```javascript
// Add a simple helper function at the bottom
function sanitizeQuery(query) {
  return query.trim().toLowerCase();
}

module.exports = {
  // ...existing exports...
  sanitizeQuery
};
```

2. **Start CLI session**:

```bash
copilot
```

3. **Ask for smart test selection**:

```
What tests should I run for the files I just changed?
```

4. **Review the agent's analysis** — It should:
   - Analyze `git diff` to see what changed
   - Identify tests that import or use that file
   - Suggest running only those tests

5. **Run the suggested tests**:

```
Run those tests
```

6. **Now request a full pre-push check**:

```
Before I push, run all checks that CI would run
```

The agent should run:
- Linting
- All tests
- Any other CI steps from `package.json`

7. **Exit the session**:

```
exit
```

#### ✅ Success Criteria

- [ ] Agent identified relevant tests based on file changes
- [ ] Ran only relevant tests (fast feedback)
- [ ] Agent ran full CI checks before push
- [ ] Linting passed
- [ ] All tests passed

#### ✨ The "After" — The Improved Experience

Marcus asks: *"What should I test for my changes?"* The agent:
1. Analyzes git diff
2. Identifies affected tests
3. Runs only those (~15 seconds vs 2 minutes)
4. Gives fast feedback

Before pushing, he asks: *"Run all CI checks."* The agent catches a linting issue he would have missed.

**Time saved per iteration**: 90 seconds  
**Fast feedback loop maintained**: ✅  
**CI breaks avoided**: 100% — Never pushes broken code again

#### 📚 Official Docs

- [Using GitHub Copilot CLI for testing](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/use-copilot-cli)

#### 💭 Marcus's Reaction

_"I've been running the full suite every time like an idiot. This is going to save me hours every week."_

#### 🚀 Challenge Extension

Ask the agent: *"Create a git hook that runs this check before every commit."*

---

### Exercise 9.3: Pre-Push Health Check — "Never Break CI Again"

#### 📖 The Story

**Marcus has a confession:** He's broken CI three times this month. Every time, it's something he could have caught locally:
- Forgot to run linting
- Forgot to run the full test suite
- Forgot to check for TypeScript errors

Sarah shows him the workflow that makes this impossible.

#### ❌ The "Before" — What Frustration Looks Like

Marcus's pre-push process (when he remembers):
```bash
npm run lint
npm test
npm run build
# Did I forget something? Probably.
git push
# [5 minutes later: CI fails]
```

**CI breaks per month**: 3-4  
**Time to fix broken CI**: 15-30 minutes each  
**Team disruption**: High — Blocks others

#### 🎯 Objective

Create a pre-push health check routine with the CLI agent.

#### 📋 Steps

1. **Make changes** to a few files in `fanhub/backend`:

```bash
cd /workspaces/CopilotTraining/fanhub/backend
```

Edit `src/routes/characters.js` (add a comment), `src/database/queries.js` (add a comment), and `src/index.js` (add a comment).

2. **Start CLI session**:

```bash
copilot
```

3. **Request a comprehensive pre-push check**:

```
I'm about to push. Run everything CI would check: lint, tests, build validation, and check for any uncommitted changes.
```

4. **Review the agent's execution plan** — It should propose:
   - Running `npm run lint`
   - Running `npm test`
   - Checking for build errors
   - Running `git status` to check for uncommitted files
   - Possibly checking package-lock.json is up to date

5. **Approve the actions** — Watch the agent execute each step.

6. **If any checks fail**, ask the agent to fix them:

```
Fix the linting issues
```

7. **Once all checks pass**, document the workflow:

```
Save this workflow so I can run it with a single command
```

8. **Test your saved workflow** in a new session later.

#### ✅ Success Criteria

- [ ] Agent ran linting before push
- [ ] Agent ran full test suite
- [ ] Agent checked for build errors
- [ ] Agent verified no uncommitted changes
- [ ] All checks passed
- [ ] Workflow saved for reuse

#### ✨ The "After" — The Improved Experience

Before pushing, Marcus says: *"Run my pre-push checks."* The agent:
1. Lints code
2. Runs all tests
3. Validates build
4. Checks git status
5. Reports comprehensive status

If anything fails, he asks: *"Fix that."* Done in 30 seconds.

**CI breaks per month**: 0  
**Confidence in pushes**: 100%  
**Time saved not fixing broken CI**: ~2-3 hours per month

#### 📚 Official Docs

- [Using GitHub Copilot CLI](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/use-copilot-cli)

#### 💭 Marcus's Reaction

_"I literally can't break CI anymore. The agent catches everything before I push. Sarah, you're a wizard."_

---

### Exercise 9.4: Test Generation in Conversation

#### 📖 The Story

**Marcus just wrote a new feature:** A function to calculate character compatibility scores. He knows he needs tests, but writing comprehensive test cases takes forever. Sarah shows him how to generate tests conversationally.

#### ❌ The "Before" — What Frustration Looks Like

Marcus's test-writing process:
1. Think of edge cases (miss half of them)
2. Write boilerplate test structure
3. Write assertions
4. Realize he missed cases
5. Add more tests
6. 45 minutes later, coverage is 60%

**Time per new function**: 30-45 minutes  
**Coverage achieved**: 60-70%  
**Edge cases missed**: 3-5 per function

#### 🎯 Objective

Generate comprehensive tests for a new function through CLI conversation.

#### 📋 Steps

1. **Create a new function** in `fanhub/backend/src/utils/compatibility.js`:

```javascript
/**
 * Calculate compatibility score between two characters
 * @param {Object} char1 - First character
 * @param {Object} char2 - Second character
 * @returns {number} Score from 0-100
 */
function calculateCompatibility(char1, char2) {
  if (!char1 || !char2) return 0;
  
  let score = 50; // Base score
  
  // Same house bonus
  if (char1.house === char2.house) score += 20;
  
  // Opposite traits penalty
  if (char1.traits?.brave && char2.traits?.coward) score -= 30;
  if (char1.traits?.loyal && char2.traits?.traitor) score -= 30;
  
  // Cap at 0-100
  return Math.max(0, Math.min(100, score));
}

module.exports = { calculateCompatibility };
```

2. **Start CLI session**:

```bash
copilot
```

3. **Describe what you need**:

```
I just created a calculateCompatibility function in src/utils/compatibility.js. Generate comprehensive tests for it including edge cases.
```

4. **Review the agent's test proposal** — It should suggest tests for:
   - Valid inputs
   - Null/undefined characters
   - Same house bonus
   - Opposite traits penalties
   - Score capping (0-100 range)

5. **Refine the tests conversationally**:

```
Add tests for these edge cases:
- Both characters null
- Characters with missing traits
- Characters with partial data
```

6. **Approve the generated tests**.

7. **Run the tests**:

```
Run the new compatibility tests
```

8. **Check coverage**:

```
What's the code coverage for the compatibility function?
```

9. **If coverage is incomplete**:

```
Generate additional tests to achieve 100% coverage
```

#### ✅ Success Criteria

- [ ] Generated test file for new function
- [ ] Tests cover happy path
- [ ] Tests cover edge cases (nulls, undefined, missing properties)
- [ ] Tests verify score capping
- [ ] All generated tests pass
- [ ] Coverage is 90%+ for the function

#### ✨ The "After" — The Improved Experience

Marcus describes the function's behavior. The agent:
1. Generates comprehensive test structure
2. Includes edge cases Marcus didn't think of
3. Creates tests in 2 minutes
4. Achieves 95% coverage

Marcus adds: *"Test these three more scenarios."* Agent adds them instantly.

**Time per new function**: 5-8 minutes (85% reduction)  
**Coverage achieved**: 90-95%  
**Edge cases missed**: 0 — Agent suggests cases Marcus wouldn't think of

#### 📚 Official Docs

- [Using GitHub Copilot CLI for testing](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/use-copilot-cli)

#### 💭 Marcus's Reaction

_"It generated tests I wouldn't have thought of. This isn't just faster—it's making me write better tests."_

#### 🚀 Challenge Extension

Ask the agent: *"Generate property-based tests for this function using a fuzzing approach."*

---

### Exercise 9.5: Build Debugging Session

#### 📖 The Story

**Priya's turn.** She just updated dependencies in `fanhub/backend/package.json` and now the build is broken. Cryptic error messages about peer dependencies. She could spend 20 minutes Googling, or...

*"Let's see if the CLI agent can figure this out."*

#### ❌ The "Before" — What Frustration Looks Like

Priya's dependency debugging process:
1. `npm install` fails
2. Read cryptic error about peer dependencies
3. Google the error
4. Try Stack Overflow solution #1 (doesn't work)
5. Try solution #2 (breaks something else)
6. Clear node_modules and try again
7. 30 minutes later, maybe it works

**Time per dependency issue**: 20-40 minutes  
**Success rate**: 60% — Sometimes gives up and rolls back  
**Frustration level**: High

#### 🎯 Objective

Use the CLI agent to debug and fix a broken build.

#### 📋 Steps

1. **Create a dependency conflict** in `fanhub/backend/package.json`:

```bash
cd /workspaces/CopilotTraining/fanhub/backend
```

Add an incompatible dependency:

```json
"dependencies": {
  "express": "^4.18.0",
  "jest": "^29.0.0",
  "react": "^18.0.0"
}
```

(React is unnecessary in a backend project and may cause peer dependency warnings)

2. **Try to install**:

```bash
npm install
```

You should see warnings or errors.

3. **Start CLI session**:

```bash
copilot
```

4. **Describe the problem**:

```
npm install is giving me warnings about dependencies. Analyze what's wrong and suggest fixes.
```

5. **Review the agent's analysis** — It should:
   - Identify unnecessary dependencies (like React in a backend)
   - Explain peer dependency issues
   - Suggest removals or version changes

6. **Ask the agent to fix it**:

```
Remove any dependencies that don't belong in a backend project
```

7. **Verify the fix**:

```
Try npm install again
```

8. **Confirm the build works**:

```
Run npm run build if we have a build script
```

#### ✅ Success Criteria

- [ ] Agent identified unnecessary dependencies
- [ ] Agent explained why they cause issues
- [ ] Agent proposed specific fixes
- [ ] `npm install` completes without errors
- [ ] Build succeeds

#### ✨ The "After" — The Improved Experience

Priya describes the error. The agent:
1. Analyzes package.json
2. Identifies the problem (React doesn't belong)
3. Explains WHY it's causing issues
4. Proposes a fix
5. Verifies the fix works

**Time per dependency issue**: 3-5 minutes (90% reduction)  
**Success rate**: 100%  
**Understanding gained**: Agent explains root causes

#### 📚 Official Docs

- [Using GitHub Copilot CLI](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/use-copilot-cli)

#### 💭 Priya's Reaction

_"I usually just trial-and-error this stuff. Having it explain WHY the dependency is wrong is way better than just fixing it."_

#### 🚀 Challenge Extension

Ask the agent: *"Audit all our dependencies for security vulnerabilities and suggest updates."*

---

### Exercise 9.6: Coverage-Driven Development

#### 📖 The Story

**Marcus and Elena are reviewing code coverage reports.** The `episodes` module is only 45% covered. Elena: *"Let's use the CLI agent to drive coverage up systematically."*

#### ❌ The "Before" — What Frustration Looks Like

Traditional coverage improvement:
1. Run coverage report
2. Find uncovered lines
3. Manually write tests for those lines
4. Run coverage again
5. Find NEW uncovered lines (from branches)
6. Repeat for 2 hours

**Time to improve coverage 20%**: 2-3 hours  
**Missed scenarios**: 30% — Focus on line coverage, miss logic branches  
**Tedium level**: Maximum

#### 🎯 Objective

Use the CLI agent to systematically improve test coverage.

#### 📋 Steps

1. **Check current coverage** in `fanhub/backend`:

```bash
cd /workspaces/CopilotTraining/fanhub/backend
npm test -- --coverage --collectCoverageFrom='src/routes/episodes.js'
```

Note the current coverage percentage.

2. **Start CLI session**:

```bash
copilot
```

3. **Request coverage analysis**:

```
Analyze test coverage for src/routes/episodes.js and identify what's not covered
```

4. **Review the agent's analysis** — It should identify:
   - Uncovered lines
   - Untested branches (if/else paths)
   - Untested error cases

5. **Ask for targeted test generation**:

```
Generate tests to cover the uncovered lines and branches
```

6. **Review proposed tests** — Make sure they:
   - Cover edge cases
   - Test error paths
   - Verify all branches

7. **Approve and run new tests**:

```
Run the coverage report again
```

8. **If coverage is still incomplete**:

```
What's still not covered? Generate tests for those remaining gaps.
```

9. **Iterate until coverage is 85%+**.

#### ✅ Success Criteria

- [ ] Agent identified uncovered lines and branches
- [ ] Generated tests for uncovered code
- [ ] Coverage increased by at least 20%
- [ ] Final coverage is 85%+
- [ ] All new tests pass

#### ✨ The "After" — The Improved Experience

Marcus asks: *"What's not covered in episodes.js?"* The agent:
1. Analyzes coverage report
2. Lists specific uncovered branches
3. Generates targeted tests
4. Runs coverage again
5. Iterates until target is met

**Time to improve coverage 20%**: 15-20 minutes (90% reduction)  
**Missed scenarios**: 0% — Agent catches all branches  
**Coverage quality**: Higher — Focuses on logic, not just lines

#### 📚 Official Docs

- [Using GitHub Copilot CLI for testing](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/use-copilot-cli)

#### 💭 Marcus's Reaction

_"I've been manually hunting for uncovered lines like a caveman. This is systematic and fast."_

---

### Exercise 9.7: Morning Health Check Routine

#### 📖 The Story

**Marcus's secret weapon:** Every morning, before writing any code, he runs a health check routine. It catches issues before they become problems. Priya: *"Show me your morning routine."*

#### ❌ The "Before" — What Frustration Looks Like

Priya's morning start:
1. Pull latest code
2. Hope nothing is broken
3. Start working
4. 30 minutes in: discover dependencies are out of date
5. 45 minutes in: discover a test has been flaky for days
6. Waste morning fixing issues that should have been caught

**Hidden issues discovered**: Weekly  
**Time wasted on preventable problems**: 2-3 hours per week  
**Morning productivity**: Destroyed by fire-fighting

#### 🎯 Objective

Create a morning health check routine with the CLI agent.

#### 📋 Steps

1. **Start your day in the project**:

```bash
cd /workspaces/CopilotTraining/fanhub/backend
```

2. **Start CLI session**:

```bash
copilot
```

3. **Request a morning health check**:

```
Run a morning health check: pull latest, check for dependency updates, run all tests, check for outdated packages, and verify build works.
```

4. **Review the agent's proposed routine** — It should:
   - `git pull origin main`
   - Check for modified files
   - Run `npm outdated` to check dependencies
   - Run full test suite
   - Run linting
   - Verify build succeeds

5. **Approve the routine** and watch it execute.

6. **If any issues are found**, work with the agent to fix them:

```
Fix the outdated dependencies
```

or

```
Why did that test fail? Fix it.
```

7. **Once everything passes**, save the routine:

```
Save this as my morning-check routine
```

8. **Document the workflow** in `fanhub/docs/README.md`:

```
Document this morning check routine for the team
```

#### ✅ Success Criteria

- [ ] Agent pulled latest code
- [ ] Agent checked dependency status
- [ ] Agent ran full test suite
- [ ] Agent verified build works
- [ ] Routine saved for daily use
- [ ] Routine documented for team

#### ✨ The "After" — The Improved Experience

Every morning, Marcus runs: *"Morning health check."* The agent:
1. Pulls latest
2. Checks dependencies
3. Runs tests
4. Verifies build
5. Reports status in 2 minutes

Issues caught BEFORE coding begins. Mornings start productive, not reactive.

**Hidden issues discovered**: None — Caught in morning routine  
**Time wasted on preventable problems**: Near zero  
**Morning productivity**: Maximized — Start with confidence

#### 📚 Official Docs

- [Using GitHub Copilot CLI](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/use-copilot-cli)

#### 💭 Marcus's Reaction

_"This is the routine that's saved me hundreds of hours. Now the whole team has it too."_

#### 🚀 Challenge Extension

Ask the agent: *"Add a check for security vulnerabilities and create a weekly report of technical debt."*

---

## 🔗 Compounding Value

### What You Created in This Module

1. **Test debugging workflows** — Agent-assisted test failure analysis
2. **Smart test selection** — Run only relevant tests
3. **Pre-push health checks** — Never break CI again
4. **Test generation patterns** — Conversational test creation
5. **Build debugging routines** — Dependency issue resolution
6. **Coverage improvement workflows** — Systematic coverage drives
7. **Morning health checks** — Daily preventive maintenance

### How This Connects to Future Modules

In **Module 10**, you'll see how CLI workflows integrate with VS Code, GitHub.com, and agents to create complete development cycles.

---

## 🧠 Mindful Moment: Automation vs. Understanding

The CLI agent doesn't just execute commands faster—it explains what's happening and why. You're not trading understanding for speed; you're gaining both.

**The Best Automators Understand Their Systems**

Marcus is effective because:
1. He knows what SHOULD happen
2. He uses CLI agents to execute it faster
3. He reviews agent explanations to deepen understanding
4. He documents patterns for the team

Marcus is learning the same approach.

---

## ✅ Module Checklist

Before moving on, verify:

- [ ] GitHub Copilot CLI installed and authenticated
- [ ] Completed at least 5 of 7 exercises
- [ ] Ran at least one full interactive session
- [ ] Experienced the tool approval workflow
- [ ] Used agent conversation to debug code
- [ ] Generated tests with CLI agent
- [ ] Created at least one reusable workflow

---

## 📚 Official Documentation

- [About GitHub Copilot CLI](https://docs.github.com/en/copilot/concepts/agents/about-copilot-cli)
- [Installing GitHub Copilot CLI](https://docs.github.com/en/copilot/how-tos/set-up/install-copilot-cli)
- [Using GitHub Copilot CLI](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/use-copilot-cli)

---

## ➡️ Next Up

**[Module 10: Agentic SDLC](../10-agentic-sdlc/README.md)** — Orchestrate all your AI tools together

> *"We've learned each tool individually—VS Code, GitHub.com, CLI. Now let's see how they work together in a complete development workflow."*  
> — The team, ready to ship

---

## 🎭 Behind the Scenes: CLI Agent Capabilities

### What the CLI Agent Can Do

- Execute shell commands with approval
- Analyze file contents and git diffs
- Run tests and parse output
- Propose code changes
- Install dependencies
- Create and modify files
- Execute multi-step workflows

### What It Can't Do

- Write to files without approval
- Push code to remote repositories without approval
- Execute commands without showing you what it will do
- Remember state between sessions (currently)

### When to Use CLI vs VS Code Chat

| Use Case | Best Tool |
|----------|-----------|
| Debugging tests | CLI Agent |
| Writing new features | VS Code Chat |
| Pre-push validation | CLI Agent |
| Refactoring code | VS Code Chat |
| Running build checks | CLI Agent |
| Explaining code | Either |
| Deployment tasks | CLI Agent |

---

**End of Module 9 Exercises**
