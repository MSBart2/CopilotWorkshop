# Module 3: Custom Prompts

## ⏰ Monday 12:00 PM — Building Reusable Tools

> *"Every time I write the same prompt explaining how we test, I think: there has to be a better way."*  
> — Elena, watching the team manually re-type similar prompts for the fifth time

---

## 📖 The Story So Far

Module 1 gave the team **foundations**: David documented the architecture, Sarah created team standards in `copilot-instructions.md`. Module 2 introduced **structured thinking**: The team used plan mode to build the Character Detail page—transforming a frustrating 45-minute struggle into a systematic 20-minute success.

But Sarah notices something: Everyone keeps writing the same kinds of prompts over and over.

- Elena explains testing requirements each time she asks for tests
- Rafael describes the same acceptance criteria format for every feature
- Marcus types the same "create an endpoint" instructions repeatedly
- And soon they'll need Episode Detail, Show Detail, Quote Detail pages...

*"What if we could save these prompts and share them?"* Sarah asks. *"Like functions, but for AI instructions. The Character Detail page took real planning—what if we captured that pattern so we never have to plan it again?"*

**This module's mission**: Create a prompt library that turns repetitive work into reusable tools. The ultimate goal: encode the Character Detail pattern so every future detail page takes 3 minutes instead of 20.

---

💡 **Plan Mode Integration**: Throughout this module, you'll use plan mode to design prompt structure, test different approaches, and iteratively refine your prompt templates before implementation.

---

## 🎯 Learning Objectives

By the end of this module, you will:

- Create reusable prompt files (`.github/prompts/`)
- Use variables to make prompts flexible
- Reference documentation in prompts for consistent context
- Experience multi-modal workflows (VS Code + GitHub.com)

**Time**: ~90 minutes  
**Personas**: Elena (QA), Rafael (Product), Marcus (DevOps)

---

## 🧠 Mindful Moment: Prompts Are Functions

Think about how code evolved:
- **1950s**: Repeat the same assembly instructions everywhere
- **1960s**: Functions let you write once, call many times
- **2020s**: Prompts are the new functions—but most people are still copy-pasting

The teams that win with AI are building **prompt libraries**, not typing the same instructions repeatedly.

---

## 📚 Key Concepts

### Custom Prompt Files

GitHub Copilot can use prompt files stored in `.github/prompts/`. These files:
- Are written in Markdown
- Can include variables (`{{variable_name}}`)
- Can reference other files
- Are shareable across the team

**How to use them:**
1. Create `.github/prompts/my-prompt.prompt.md`
2. In Copilot Chat, type `/` and select your prompt
3. Fill in any variables
4. Execute with full context

> 📂 **Reference Examples**: The [`examples/completed-config/.github/prompts/`](../../examples/completed-config/.github/prompts/) folder contains sample prompt files:
> - `create-component-tests.prompt.md` — Elena's React component test generator
> - `create-api-tests.prompt.md` — Elena's API test generator
> - `spec-to-implementation.prompt.md` — Rafael's spec translator
> - `feature-request-template.prompt.md` — Feature request formatter
> - `create-detail-page.prompt.md` — The Golden Thread pattern 🧵
> - `commit.prompt.md` — Marcus's one-word ship button

### Chat Participants

Copilot Chat has specialized "participants" you can invoke:
- `@workspace` — Understands your entire project
- `@vscode` — Knows about VS Code features and settings
- `@terminal` — Can run and explain terminal commands

Combine these with prompt files for powerful workflows.

### Multi-Modal: VS Code + GitHub.com

Copilot isn't just in your editor. On GitHub.com:
- **PR Reviews**: Ask Copilot to review your code changes
- **Issue Analysis**: Get implementation suggestions from issue descriptions
- **Code Search**: Natural language queries across repositories

We'll use both modes in this module.

---

## 🔨 Exercises

### Exercise 3.1: Create a Test Prompt Library — "Elena's Quality Toolkit"

#### 📖 The Story

**Elena** (QA Engineer, 8 years) has a problem: Every time she asks Copilot to write tests, she types out the same requirements:
- "Use Jest as the testing framework"
- "Mock external dependencies"
- "Cover happy path and error cases"
- "Follow our naming conventions"

It's tedious. And worse—when other team members ask for tests, they forget half these requirements.

*"I want one prompt I can share with everyone,"* Elena says. *"Test generation that follows OUR standards, every time."*

**Supporting Cast**: Priya learns test patterns by using Elena's prompts.

#### ❌ The "Before" — What Frustration Looks Like

Watch someone ask for tests without the prompt library:

```
Write tests for the getCharacterById function in the characters route
```

**The problems:**
- No mention of which framework (Jest? Mocha? Vitest?)
- No guidance on mocking the database
- No requirements for error case coverage
- Every request requires remembering all the details

#### 🎯 Objective

Create a reusable test generation prompt that ensures consistent, high-quality tests.

#### 📋 Steps

1. **Create the prompts directory**
   
   Create the folder: `fanhub/.github/prompts/`

2. **Use Agent mode to create the component test prompt**
   
   Open Copilot Chat and switch to **Agent mode** (click the mode selector or use `@agent`).
   
   Then ask Copilot to create the prompt file:
   
   ```
   Create a reusable prompt file at .github/prompts/create-component-tests.prompt.md
   
   This prompt should:
   - Generate comprehensive tests for React components
   - Use Jest and React Testing Library
   - Include a {{component_path}} variable for the target component
   - Require coverage of: rendering, user interactions, error states, edge cases
   - Follow our testing patterns from copilot-instructions.md
   - Reference docs/ARCHITECTURE.md for project context
   
   The prompt file should use YAML frontmatter with:
   - mode: 'agent' (so it can read files and create tests)
   - description: 'Generate comprehensive tests for a React component'
   
   Include specific guidance on:
   - Test structure (describe blocks for rendering, interactions, errors, edge cases)
   - Mocking guidelines (API calls, React Router)
   - Accessibility checks
   - Output format (where to create the test file)
   ```

3. **Review and refine the generated prompt**
   
   Copilot will create a prompt file. Review it for:
   - Does it have the YAML frontmatter with `mode: 'agent'`?
   - Does it include the `{{component_path}}` variable?
   - Does it reference your documentation files?
   - Does it match Elena's quality standards?
   
   If anything is missing, ask follow-up questions:
   ```
   Add a section about mocking external API calls with jest.mock
   ```

4. **Create the API test prompt the same way**
   
   Use Agent mode again:
   
   ```
   Create a reusable prompt file at .github/prompts/create-api-tests.prompt.md
   
   This prompt should:
   - Generate comprehensive tests for Express API routes
   - Use Jest and supertest for HTTP testing
   - Include a {{route_path}} variable for the target route file
   - Mock the database connection pool
   - Test success cases, validation, auth, and error handling
   - Follow our API patterns from copilot-instructions.md
   
   Use mode: 'agent' in the frontmatter so it can read and create files.
   ```

5. **Test your prompt**
   
   Now use the prompt you created:
   - Open Copilot Chat
   - Type `/` to see available prompts
   - Select `create-component-tests`
   - Enter: `fanhub/frontend/src/components/CharacterCard.jsx`
   - Watch Elena's standards apply automatically!

#### ✅ Success Criteria

- [ ] Created `.github/prompts/` directory
- [ ] Used Agent mode to generate `create-component-tests.prompt.md`
- [ ] Prompt file has YAML frontmatter with `mode: 'agent'`
- [ ] Prompt includes `{{component_path}}` variable
- [ ] Created `create-api-tests.prompt.md` using the same approach
- [ ] Successfully invoked your prompt from Copilot Chat
- [ ] Generated tests follow the patterns specified in the prompt

> 📂 **Compare Your Work**: See [`examples/completed-config/.github/prompts/create-component-tests.prompt.md`](../../examples/completed-config/.github/prompts/create-component-tests.prompt.md) and [`create-api-tests.prompt.md`](../../examples/completed-config/.github/prompts/create-api-tests.prompt.md) for reference examples.

#### ✨ The "After" — The Improved Experience

Now when ANYONE on the team needs tests:
1. Type `/create-component-tests` or `/create-api-tests`
2. Provide the file path
3. Get tests that follow Elena's exact standards

**Time saved per test request**: 5-10 minutes of typing/remembering  
**Consistency gained**: 100%—everyone uses the same patterns

#### 📚 Official Docs

- [VS Code: Reusable Prompts](https://code.visualstudio.com/docs/copilot/copilot-customization#_reusable-prompt-files)
- [VS Code: Prompt File Variables](https://code.visualstudio.com/docs/copilot/copilot-customization#_use-variables-in-prompts)
- [GitHub Docs: Custom Prompts](https://docs.github.com/en/copilot/customizing-copilot/adding-custom-prompts-for-github-copilot)

#### 💭 Elena's Satisfaction

*"I wrote this once. Now the whole team generates tests my way. That's not automation—that's multiplication of expertise."*

#### 🚀 Challenge Extension

Create a third prompt: `create-integration-tests.prompt.md` that:
- Tests frontend + backend together
- Covers end-to-end user flows
- Uses a mock database with test data

---

### Exercise 3.2: Spec-to-Code Prompts — "Rafael Bridges the Gap"

#### 📖 The Story

**Rafael** (Product Manager, 10 years) has seen this movie before: He writes detailed requirements, hands them to developers, and weeks later discovers the implementation missed key details.

*"The problem isn't bad developers,"* Rafael realizes. *"It's that requirements and code live in different worlds. What if I could give my specs directly to Copilot?"*

Sarah smiles. *"You can. Let's build a prompt that turns your user stories into implementation plans."*

**Supporting Cast**: Marcus uses Rafael's prompts to implement features he understands at a business level, not just technical level.

#### ❌ The "Before" — What Frustration Looks Like

Rafael wrote a detailed 3-page requirements document for the "Favorites" feature. He spent hours crafting it, reviewed it with stakeholders, got approval, and handed it to the development team.

Two weeks later, he sees the pull request:

**What worked:**
- ✅ Users can click a heart icon to favorite quotes (requirement met)

**What went wrong:**
- ❌ **Favorites don't persist on refresh** — Rafael said "save favorites" but didn't specify localStorage vs. backend database. Developer chose localStorage. Users lose favorites when they switch devices.
- ❌ **No success indication** — Rafael said "smooth experience" but didn't specify visual feedback. Users click the heart and wonder if it worked.
- ❌ **Can't unfavorite** — Rafael forgot to write this requirement. Developer assumed once favorited, always favorited.
- ❌ **No favorites page** — Rafael said "easily find them later" but didn't specify WHERE to find them. Feature is half-implemented.

The retrospective is awkward:

> **Developer**: "Your requirements didn't mention persistence strategy or unfavorite functionality."
> **Rafael**: "But I ASSUMED those were obvious... when I said 'save,' I meant permanently!"
> **Sarah**: "We lost 2 weeks of development + 1 week of rework because the spec and implementation weren't aligned."

Rafael realizes: *"The problem isn't bad developers. It's that requirements and code live in different worlds. What if I could give my specs directly to Copilot in a way that bridges this gap?"*

#### 🎯 Objective

Create a prompt that transforms user stories into implementation plans, ensuring product intent survives the journey to code.

#### 📋 Steps

1. **Use Agent mode to create the spec-to-implementation prompt**
   
   Open Copilot Chat in Agent mode and ask:
   
   ```
   Create a reusable prompt file at .github/prompts/spec-to-implementation.prompt.md
   
   This prompt should transform user stories into technical implementation plans.
   
   Include variables:
   - {{user_story}} - the user story text
   - {{acceptance_criteria}} - the acceptance criteria
   
   The prompt should guide Copilot to:
   1. Understand the user need (who, what, why)
   2. Identify affected components (reference docs/ARCHITECTURE.md)
   3. Create a detailed implementation plan with file paths and changes
   4. Define a testing strategy
   5. Identify risks (performance, security, breaking changes)
   
   Output should be a structured markdown plan with:
   - Summary
   - Backend changes (specific file paths)
   - Frontend changes (specific file paths)
   - Database changes (if any)
   - API contract (endpoints with request/response examples)
   - Testing checklist
   - Implementation order
   - Estimated effort (Small/Medium/Large)
   
   Use mode: 'agent' in the frontmatter.
   Reference our docs/ARCHITECTURE.md and .github/copilot-instructions.md.
   ```

2. **Review the generated prompt**
   
   Check that it:
   - Has proper YAML frontmatter
   - Includes both variables
   - References your project documentation
   - Produces a structured, actionable output

3. **Create a feature request prompt the same way**
   
   Use Agent mode:
   
   ```
   Create a reusable prompt file at .github/prompts/feature-request-template.prompt.md
   
   This prompt should transform a rough feature idea into a well-structured 
   GitHub issue.
   
   Include a {{feature_idea}} variable.
   
   Output should follow this structure:
   - User Story (As a [user], I want [action] so that [benefit])
   - Acceptance Criteria (specific, testable checkboxes)
   - Design Notes (how it should look/feel)
   - Technical Considerations (constraints, dependencies)
   - Success Metrics (how we'll know it works)
   - Priority suggestion
   - Related items
   
   Use mode: 'edit' in the frontmatter (this prompt edits/creates content).
   ```

4. **Test with a real feature**
   
   Use your new `spec-to-implementation` prompt with this input:
   ```
   User Story: As a fan, I want to save my favorite quotes so I can easily find them later.
   
   Acceptance Criteria:
   - Can click a heart icon to favorite a quote
   - Favorites persist across sessions (requires login)
   - Can view all my favorites on a dedicated page
   - Can remove quotes from favorites
   ```

5. **Review the implementation plan**
   
   The output should include:
   - Specific file changes in your FanHub project
   - API endpoint definitions
   - Database considerations (favorites table?)
   - Testing requirements

#### ✅ Success Criteria

- [ ] Created `spec-to-implementation.prompt.md`
- [ ] Created `feature-request-template.prompt.md`
- [ ] Generated an implementation plan from a user story
- [ ] Plan references the correct files from FanHub architecture
- [ ] Plan includes testing requirements

> 📂 **Compare Your Work**: See [`examples/completed-config/.github/prompts/spec-to-implementation.prompt.md`](../../examples/completed-config/.github/prompts/spec-to-implementation.prompt.md) and [`feature-request-template.prompt.md`](../../examples/completed-config/.github/prompts/feature-request-template.prompt.md) for reference examples.

#### ✨ The "After" — The Improved Experience

Rafael's workflow transforms:

**Before**: Write spec → Hope developers understand → Discover gaps in code review  
**After**: Write spec → Generate implementation plan → Review plan with team → Build with shared understanding

**Miscommunication reduced**: Dramatically  
**Rework reduced**: Significantly

#### 📚 Official Docs

- [VS Code: Prompt File Variables](https://code.visualstudio.com/docs/copilot/copilot-customization#_use-variables-in-prompts)
- [GitHub Docs: Using Copilot in Issues](https://docs.github.com/en/copilot/using-github-copilot/using-copilot-in-github)

#### 💭 Rafael's Epiphany

*"I've spent years trying to write specs that developers won't misinterpret. Turns out, the solution isn't better specs—it's translating specs into the language of code before anyone writes a line."*

---

### Exercise 3.3: Build the Episode Guide — "The Team Collaborates"

> 🧵 **The Golden Thread Continues**: Remember the Character Detail page from Modules 00-02? You'll now capture that hard-won pattern as a reusable prompt—and watch what took 20 minutes of planning become a 3-minute generation.

#### 📖 The Story

The team decides to build their first real feature together: an Episode Guide page. This is their chance to use everything they've created:
- David's architecture documentation
- Sarah's copilot-instructions.md
- Elena's test prompts
- Rafael's spec-to-implementation prompt

*"Let's see if these tools actually work together,"* Sarah says.

Halfway through, Rafael realizes something: *"Wait, we also need an Episode Detail page—when users click an episode, they should see full details, quotes, and character appearances."*

David pauses. *"That sounds familiar. Remember the Character Detail page we built in Module 02? Same pattern—fetch entity, display fields, show related items, handle errors."*

Sarah sees the opportunity: *"We spent 20 minutes planning that page with plan mode. What if we captured that pattern in a reusable prompt? Then every detail page takes 3 minutes instead of 20."*

**This is where prompts become truly powerful**: Not just encoding instructions, but encoding *proven patterns*.

#### 🎯 Objective

Build the Episode Guide feature AND create a reusable `create-detail-page.prompt.md` that captures the Character Detail pattern for future pages.

#### 📋 Steps

**Part 1: Build the Episode List (Steps 1-4)**

1. **Rafael defines the feature**
   
   Use the `feature-request-template` prompt with:
   ```
   Feature Idea: Fans want to browse all episodes, filter by season, 
   and see episode details including synopsis, air date, and famous quotes 
   from that episode.
   ```

2. **Generate the implementation plan**
   
   Use the `spec-to-implementation` prompt with Rafael's user story.

3. **Marcus implements the backend**
   
   Based on the implementation plan, ask Copilot:
   ```
   @workspace Following the implementation plan for the Episode Guide feature,
   create or update the episodes route to:
   - Support filtering by season_id query parameter
   - Include related quotes for each episode
   - Follow our API response format from copilot-instructions.md
   ```

4. **Priya builds the Episode List page**
   
   Ask Copilot:
   ```
   @workspace Create an EpisodeGuide page component that:
   - Fetches episodes from /api/episodes
   - Displays season filter buttons
   - Shows episode cards with title, air date, and description
   - Links to episode detail view
   - Follows our React patterns from copilot-instructions.md
   ```

**Part 2: The Golden Thread — Capture the Detail Page Pattern (Steps 5-7)**

5. **Recognize the pattern**
   
   Open your `docs/character-detail-challenge.md` from Module 02. Review what made the Character Detail page successful:
   - Plan mode identified data requirements, edge cases, related entities
   - Clear component structure with loading/error states
   - Followed established patterns from copilot-instructions.md
   
   *This pattern applies to ANY detail page: Episode, Show, Quote, etc.*

6. **Create the reusable detail page prompt**
   
   Use Agent mode to create a prompt that encodes this pattern:
   
   ```
   Create a reusable prompt file at .github/prompts/create-detail-page.prompt.md
   
   This prompt should generate detail pages following our proven Character Detail pattern.
   
   Include variables:
   - {{entity_name}} — The entity type (Episode, Show, Quote, etc.)
   - {{api_endpoint}} — The API endpoint to fetch data (e.g., /api/episodes/:id)
   - {{display_fields}} — Key fields to display (e.g., title, air_date, synopsis)
   - {{related_entities}} — Related items to show (e.g., quotes, characters)
   
   The prompt should guide Copilot to:
   1. Create a detail page component following our CharacterDetail.jsx pattern
   2. Implement data fetching with proper loading and error states
   3. Display the specified fields in a card-based layout
   4. Show related entities in a list or grid
   5. Handle edge cases (missing data, empty related items)
   6. Follow patterns from copilot-instructions.md
   7. Reference docs/ARCHITECTURE.md for data flow
   
   Use mode: 'agent' in the frontmatter.
   Add description: 'Generate a detail page following our proven pattern'
   
   Reference the CharacterDetail.jsx component as the template to follow.
   ```

7. **Use the prompt to generate Episode Detail page**
   
   Now test your new prompt:
   - Open Copilot Chat
   - Type `/create-detail-page`
   - Fill in the variables:
     - entity_name: `Episode`
     - api_endpoint: `/api/episodes/:id`
     - display_fields: `title, air_date, season_number, episode_number, synopsis, runtime`
     - related_entities: `quotes, characters`
   
   **Watch the magic**: A complete EpisodeDetail page, following your established patterns, generated in minutes instead of the 20+ minutes the Character Detail page took.

**Part 3: Complete the Feature (Steps 8-9)**

8. **Elena generates tests**
   
   Use the prompt library:
   - `/create-api-tests` for the episodes route
   - `/create-component-tests` for both EpisodeGuide and EpisodeDetail

9. **Update your tracking document**
   
   Add a new section to `docs/character-detail-challenge.md`:
   
   ```markdown
   ## Module 03: Pattern as Prompt
   
   We captured the Character Detail pattern as a reusable prompt.
   
   | Page | Approach | Time | Quality |
   |------|----------|------|---------|
   | Character Detail | Plan Mode (Mod 02) | ~20 min | ⭐⭐⭐⭐⭐ |
   | Episode Detail | `create-detail-page` prompt | ~3 min | ⭐⭐⭐⭐⭐ |
   
   **Key Insight**: Once you've done it well once, encode the pattern. 
   Don't repeat yourself—even with AI.
   ```

#### ✅ Success Criteria

- [ ] Episode list page (EpisodeGuide) created
- [ ] Backend route supports season filtering
- [ ] Created `.github/prompts/create-detail-page.prompt.md`
- [ ] Prompt includes all four variables (entity_name, api_endpoint, display_fields, related_entities)
- [ ] Generated EpisodeDetail page using the prompt
- [ ] EpisodeDetail follows same patterns as CharacterDetail
- [ ] Tests generated using Elena's prompts
- [ ] Updated `character-detail-challenge.md` with Module 03 metrics

> 📂 **Compare Your Work**: See [`examples/completed-config/.github/prompts/create-detail-page.prompt.md`](../../examples/completed-config/.github/prompts/create-detail-page.prompt.md) for the Golden Thread detail page pattern reference.

#### ✨ The "After" — The Compound Effect

The team now has:
- **A complete Episode Guide feature** (list + detail)
- **A reusable pattern** for any future detail page
- **Measurable improvement** in their workflow

| What | Module 02 Approach | Module 03 Approach | Time Saved |
|------|-------------------|-------------------|------------|
| Character Detail | Plan mode from scratch | N/A (first time) | Baseline |
| Episode Detail | Would repeat plan mode | Use `create-detail-page` prompt | ~17 minutes |
| Show Detail | Would repeat plan mode | Use `create-detail-page` prompt | ~17 minutes |
| Quote Detail | Would repeat plan mode | Use `create-detail-page` prompt | ~17 minutes |

**The compound effect**: Every pattern you encode saves time forever.

#### 📚 Official Docs

- [VS Code: Chat Participants](https://code.visualstudio.com/docs/copilot/copilot-chat#_chat-participants)
- [VS Code: Reusable Prompts](https://code.visualstudio.com/docs/copilot/copilot-customization#_reusable-prompt-files)
- [GitHub Docs: Copilot Chat](https://docs.github.com/en/copilot/using-github-copilot/copilot-chat)

#### 💭 Team Realization

**Sarah**: *"This is what I hoped AI could do—not replace us, but make us work together better. And now our best work is reusable."*

**David**: *"The Character Detail page took real thinking. Now that thinking is encoded. My architecture expertise lives in that prompt."*

**Marcus**: *"I understood the business requirement because Rafael's prompt explained it. I'm not just coding—I'm solving problems."*

**Priya**: *"The Episode Detail page looks just like the Character Detail page I struggled with in Module 00. But this time it took 3 minutes, not 3 hours."*

**Rafael**: *"We need Show Detail and Quote Detail pages too. With this prompt, that's 6 more minutes of work, not 6 more hours."*

#### 🚀 Challenge Extension

**Test the pattern's power**: Use your `create-detail-page` prompt to generate:
1. **ShowDetail.jsx** — entity: Show, fields: title, network, start_year, end_year, description, related: seasons, characters
2. **QuoteDetail.jsx** — entity: Quote, fields: text, context, speaker, episode, related: character, episode

Track how long each takes. The pattern should hold.

---

### Exercise 3.4: One-Word Git Workflow — "Marcus's Ship-It Button"

#### 📖 The Story

**Marcus** (DevOps Developer, 5 years) watches the team work. They're writing great code now, but he notices a pattern: every time someone finishes a feature, they fumble through the same git commands.

*"Wait, am I on main? I need to create a branch first..."*  
*"What was the command to push and set upstream again?"*  
*"How do I create a PR from the terminal?"*

Marcus's automation instincts kick in. *"What if we had a one-word command that just... ships it? Handles branches, commits, pushes, creates the PR—all in one?"*

**Supporting Cast**: Priya (learning git workflows) benefits from Marcus's automation patterns.

#### ❌ The "Before" — What Frustration Looks Like

Watch a typical "I'm done with this feature" workflow:

```bash
# Wait, what branch am I on?
git branch

# Oops, I'm on main! Need to create a branch
git checkout -b feature/add-quotes-endpoint

# Now stage and commit
git add .
git commit -m "Add quotes endpoint"

# Push... but need to set upstream
git push -u origin feature/add-quotes-endpoint

# Now create a PR... what's the gh command?
gh pr create --title "Add quotes endpoint" --body "..."
```

That's 6 commands, and most developers forget at least one step. Or worse—they accidentally commit directly to main.

#### 🎯 Objective

Create a "commit" prompt that acts as a one-word ship button: handles branches, commits, pushes, and creates a PR.

#### 📋 Steps

1. **Use Agent mode to create the commit prompt**
   
   Open Copilot Chat and switch to **Agent mode**.
   
   ```
   Create a reusable prompt file at .github/prompts/commit.prompt.md
   
   This prompt should be a one-word action that handles the complete git workflow:
   
   1. Check if currently on main/master branch
      - If YES: Create a new branch with a descriptive name based on the changes
      - If NO: Stay on current branch
   
   2. Stage all changes (git add .)
   
   3. Generate a meaningful commit message based on the staged changes
      - Follow conventional commit format (feat:, fix:, docs:, etc.)
      - Be specific about what changed
   
   4. Commit the changes
   
   5. Push to remote (with --set-upstream if needed)
   
   6. Create a Pull Request using gh CLI
      - Title should match the commit message
      - Body should summarize the changes
      - Target the main/master branch
   
   Use mode: 'agent' in the frontmatter so it can run terminal commands.
   Add description: 'One-word ship button: branch, commit, push, and create PR'
   
   The prompt should be smart about:
   - Not creating a branch if already on a feature branch
   - Generating good branch names from the changes (e.g., feature/add-quotes-endpoint)
   - Handling the case where there are no changes to commit
   ```

2. **Review and refine the generated prompt**
   
   Copilot will create the prompt file. Review it for:
   - Does it check the current branch first?
   - Does it handle the main branch case (create new branch)?
   - Does it generate meaningful commit messages?
   - Does it create a PR with a good description?
   
   If anything is missing, ask follow-up questions:
   ```
   Add handling for when the gh CLI isn't authenticated
   ```
   
   Or:
   ```
   Make sure the branch name is kebab-case and starts with feature/, fix/, or docs/
   ```

3. **Test the prompt**
   
   Make a small change to the FanHub codebase (add a comment, fix a typo).
   
   Then:
   - Open Copilot Chat
   - Type `/commit`
   - Watch the magic happen!

4. **Verify the workflow**
   
   Check that:
   - A new branch was created (if you were on main)
   - Changes were committed with a good message
   - Changes were pushed to remote
   - A PR was created and is visible on GitHub

#### ✅ Success Criteria

- [ ] Created `.github/prompts/commit.prompt.md`
- [ ] Prompt checks current branch before proceeding
- [ ] Creates new branch when on main/master
- [ ] Generates meaningful commit messages
- [ ] Pushes with proper upstream tracking
- [ ] Creates a PR with descriptive title and body
- [ ] Successfully tested the full workflow

> 📂 **Compare Your Work**: See [`examples/completed-config/.github/prompts/commit.prompt.md`](../../examples/completed-config/.github/prompts/commit.prompt.md) for a reference implementation of the ship-it workflow.

#### ✨ The "After" — The Improved Experience

Now shipping code is one word: `/commit`

- No more accidental commits to main
- No more forgetting to push
- No more "how do I create a PR again?"
- Consistent commit messages across the team

**Time saved per feature**: 5-10 minutes of git fumbling  
**Mistakes prevented**: Commits to main, forgotten pushes, unclear PRs

#### 📚 Official Docs

- [VS Code: Reusable Prompts](https://code.visualstudio.com/docs/copilot/copilot-customization#_reusable-prompt-files)
- [GitHub CLI: PR Create](https://cli.github.com/manual/gh_pr_create)
- [Conventional Commits](https://www.conventionalcommits.org/)

#### 📌 Practices Used

| Practice | How It Applied |
|----------|----------------|
| 🎯 **Intent Over Implementation** | You described WHAT you wanted, not git commands |
| 🔄 **Iterate and Refine** | You refined the prompt to handle edge cases |
| 📚 **Documentation as Leverage** | The prompt encodes your team's git workflow |

#### 💭 Marcus's Satisfaction

*"I've written shell scripts for this before. But this is better—it's intelligent. It reads the changes and generates appropriate names and messages. And anyone can customize it by editing the prompt."*

#### 🚀 Challenge Extension

Enhance the commit prompt to:
- Ask for a ticket/issue number and link it in the PR
- Add reviewers automatically based on the files changed
- Run tests before committing and abort if they fail

---

## 🌐 Bonus: GitHub.com Integration

### Using Copilot in Pull Requests

Everything we've built works on GitHub.com too:

1. **PR Summary Generation**
   - Open a PR in the FanHub repository
   - Click "Copilot" → "Generate summary"
   - Copilot reads your changes and `copilot-instructions.md`
   - Creates a summary that understands your patterns

2. **PR Review Assistance**
   - In a PR, ask Copilot to review for:
     - Pattern violations (does code follow copilot-instructions.md?)
     - Test coverage gaps
     - Security concerns
   
3. **Issue-to-PR Flow**
   - Use `feature-request-template` prompt to create well-structured issues
   - Link PRs to issues
   - Copilot understands the full context

#### Quick Exercise: PR Summary

1. Create a branch with the Episode Guide changes
2. Open a PR on GitHub.com (or locally via `gh pr create`)
3. Use Copilot to generate the PR summary
4. Notice how it references your architectural patterns

---

## 🔗 Compounding Value

**What we created in this module:**
- `.github/prompts/create-component-tests.prompt.md`
- `.github/prompts/create-api-tests.prompt.md`
- `.github/prompts/spec-to-implementation.prompt.md`
- `.github/prompts/feature-request-template.prompt.md`
- `.github/prompts/create-detail-page.prompt.md` ← **The Golden Thread pattern!**
- `.github/prompts/commit.prompt.md`

**Artifacts from previous modules we used:**
- `docs/ARCHITECTURE.md` — Referenced in prompts
- `.github/copilot-instructions.md` — Automatic context for all prompts
- `CharacterDetail.jsx` — The pattern we encoded into `create-detail-page`

**How this helps in future modules:**

| Module | How Today's Work Helps |
|--------|----------------------|
| Module 4 | Custom agents can use our prompts |
| Module 5 | Instructions reference styling patterns |
| Module 6 | Skills can invoke prompts for complex workflows |

---

## 🧵 The Golden Thread: Module 03 Summary

You've now extended the Character Detail Challenge into reusable patterns:

| Module | What You Did | Time Investment | Reusability |
|--------|-------------|-----------------|-------------|
| **00** | Struggled with Character Detail | ~45 min (frustrating) | One-time |
| **01** | Added docs + instructions | ~30 min (better) | Helps all requests |
| **02** | Used plan mode | ~20 min (great) | One-time per feature |
| **03** | Created `create-detail-page` prompt | ~10 min (setup) | **Unlimited reuse** |

**The progression**:
- Module 00: "I don't know how to do this"
- Module 01: "Copilot knows our patterns"
- Module 02: "Copilot helps me plan"
- Module 03: "**I never have to plan this pattern again**"

> *"The best prompt is one you write once and use forever."* — David

---

## 🧠 Mindful Moment: The Prompt Library Effect

Think about what just happened:

1. **Elena** wrote her testing expertise into a prompt → Now EVERYONE generates Elena-quality tests
2. **Rafael** encoded his requirement patterns → Now specs translate cleanly to code
3. **The prompts reference documentation** → Context compounds with every use

This is knowledge scaling. Expert knowledge, available to everyone, every time.

---

## ✅ Module Checklist

Before moving to Module 4, verify:

- [ ] `.github/prompts/` directory exists with at least 6 prompts
- [ ] Created `create-detail-page.prompt.md` (the Golden Thread pattern)
- [ ] Prompts use variables for flexibility
- [ ] Prompts reference existing documentation (ARCHITECTURE.md, copilot-instructions.md)
- [ ] Team can invoke prompts from Copilot Chat
- [ ] `/commit` prompt successfully creates branches, commits, pushes, and opens PRs
- [ ] Updated `character-detail-challenge.md` with Module 03 metrics
- [ ] Understand how to use `@workspace` participant with prompts
- [ ] Tried PR summary generation on GitHub.com

---

## 📚 Official Documentation

- [VS Code: Reusable Prompts](https://code.visualstudio.com/docs/copilot/copilot-customization#_reusable-prompt-files)
- [VS Code: Chat Participants](https://code.visualstudio.com/docs/copilot/copilot-chat#_chat-participants)
- [GitHub Docs: Custom Prompts](https://docs.github.com/en/copilot/customizing-copilot/adding-custom-prompts-for-github-copilot)
- [GitHub Docs: Copilot in PRs](https://docs.github.com/en/copilot/using-github-copilot/using-copilot-in-github)

---

## ➡️ Next Up

**[Module 3: Custom Agents](../03-custom-agents/README.md)** (Monday 1:00 PM)

The team has patterns, documentation, and prompts. Now it's time to let Copilot work autonomously. David will create an Architecture Reviewer agent, Marcus will build DevOps automation, and we'll explore how agents can run in the background while you work on other things.

*"We've been asking Copilot questions. Now let's tell it to solve problems."* — Sarah, already thinking about what she'll automate

---

## 🎭 Behind the Scenes: Prompt Engineering Principles

### Why Variables Matter

Without variables, prompts are static scripts. With variables, they become functions:

```markdown
# Static (limited)
Generate tests for CharacterCard.jsx

# Dynamic (flexible)
Generate tests for {{component_path}}
```

Variables make prompts reusable across different contexts.

### The Reference Pattern

Notice how our prompts say:
```markdown
## Reference
Check our testing patterns in `docs/ARCHITECTURE.md` and coding standards in `.github/copilot-instructions.md`.
```

This tells Copilot to include those files as context. Your prompts become more powerful when they stand on the shoulders of your documentation.

### Prompt Composition

Future modules will show how agents can chain prompts together:
1. Run `spec-to-implementation`
2. For each file in the plan, run `create-component-tests` or `create-api-tests`
3. Generate a PR summary

This is the path to autonomous workflows—but first, we need to understand agents.
