# Module 2: Context & Configuration — Make Copilot See What Matters

## 📖 Overview

Copilot improves as your context improves. In this module, you’ll give Copilot the right signals — repository docs, conventions, and lightweight hints — so answers align with your patterns and priorities. You’ll also review settings that affect scope and safety.

## Prerequisites

- Modules 0–1
- A repository with a few source files

## Estimated Time

- 25–35 minutes

---

## 🎯 Learning Objectives

- Identify key context sources Copilot uses in VS Code
- Create repo-scoped guidance that @workspace can follow
- Understand privacy/scope settings and when to narrow context
- Build a repeatable checklist for new repos

---

## 📚 Content

> 💡 **Philosophy Connection**: Remember the "Markdown Whisperer" mindset from [Module 0, Part B](../00-orientation/README.md#part-b-why-this-training-exists--the-evolution-of-enterprise-programming)? Documentation isn't an afterthought—it's **leverage**. The files you create here amplify your team's knowledge and make Copilot dramatically more effective.

### What Counts as Context

- Open files and selections
- Project tree: filenames, folders, structure
- Repository docs (README, docs/\*, ADRs)
- Hints/conventions files you create (see below)

### Recommended Repo Artifacts

- `docs/ARCHITECTURE.md`: layers, flows, boundaries
- `docs/PATTERNS.md`: error handling, logging, testing styles
- `docs/CONVENTIONS.md`: names, folders, dependency rules
- `docs/API.md`: endpoints/contracts (if relevant)
- `.github/copilot-workspace-hints.md`: how to answer questions in this repo

Example hints file snippet:

```
# Workspace Hints for Copilot
Use docs/ARCHITECTURE.md for system questions.
Prefer docs/PATTERNS.md when proposing code.
Follow docs/CONVENTIONS.md for naming and folders.
Auth lives in src/middleware/auth/; data access in src/repositories/.
```

### Settings & Safety

- Scope: prefer the smallest necessary scope (selection → file → workspace)
- Secrets: never paste secrets into chat; treat outputs as reviewable code
- Auditing: capture rationale in PRs; link to docs when applying AI changes

---

## 🔨 Exercises

### Exercise 1: “Context Uplift” (Marcus)

#### 🎯 Objective

Add minimal docs so @workspace answers match your conventions.

#### 📋 Steps

1. Create or update `docs/ARCHITECTURE.md`, `docs/PATTERNS.md`, `docs/CONVENTIONS.md`.
2. Add `.github/copilot-workspace-hints.md` pointing to those files.
3. Ask: `@workspace Propose tests for module X that follow docs/PATTERNS.md.`

#### ✅ Success Criteria

- [ ] @workspace cites your docs and follows conventions
- [ ] Suggested tests reflect your framework and naming

#### 📚 Official Docs

- Chat participants: https://code.visualstudio.com/docs/copilot/copilot-chat#_chat-participants

#### 💭 Marcus

“A tiny amount of documentation dramatically improved the suggestions.”

---

### Exercise 2: “Narrow the Scope” (Sarah)

#### 🎯 Objective

Practice scoping questions to selection/file/workspace for precision.

#### 📋 Steps

1. Select a function and run `/explain`.
2. Ask: “Optimize this function without changing behavior; keep complexity low.”
3. Then ask @workspace across the whole repo: “Find all call sites; surface edge cases.”

#### ✅ Success Criteria

- [ ] Selection-scoped advice is specific and minimal
- [ ] Workspace-scoped search finds real call sites and risks

#### 📚 Official Docs

- Slash commands: https://code.visualstudio.com/docs/copilot/copilot-chat#_slash-commands

#### 💭 Sarah

“Smaller scope produced safer edits; broader scope surfaced risks.”

---

## 🧠 Key Takeaways

- Context isn’t magic — you can shape it
- Minimal docs unlock consistent, on-standard answers
- Control scope for precision vs. breadth

---

## ➡️ Next Steps

Go to Module 3: modules/03-prompt-engineering/README.md

# Module 2: Context and Configuration — Teaching Copilot Your Way

## 📖 Overview

In Module 1, you experienced Copilot's raw capabilities. Now you'll learn to _shape_ those capabilities. This module is about making Copilot smarter—not through magic, but through **context**.

You'll discover that Copilot isn't just reading your current file. It's looking at open tabs, reading your comments, following your instructions files, and can even be configured with custom personas and documentation. By the end of this module, your Copilot will understand _your_ codebase, _your_ conventions, and _your_ way of writing code.

## Prerequisites

- Completed Module 1 (Getting Started)
- Visual Studio Code with GitHub Copilot and Copilot Chat installed
- A local workspace or sample project to experiment with

## Estimated time

- 30–40 minutes

---

## 🎯 Learning Objectives

By the end of this module, you will:

- Understand how Copilot builds context from your workspace
- Create custom instructions that change Copilot's "voice" and behavior
- Build a documentation agent that captures your team's conventions
- Configure `.github/copilot-instructions.md` to make Copilot follow your rules
- Master chat participants (@workspace, @vscode, @terminal) for targeted assistance
- Use slash commands as productivity shortcuts

---

## 📚 Content

### The Context Hierarchy

Copilot doesn't just complete code—it reads your project. Understanding _what_ it reads helps you give it better context.

**What Copilot Uses (in priority order):**

| Context Source                        | What It Provides          | How to Optimize                                                    |
| ------------------------------------- | ------------------------- | ------------------------------------------------------------------ |
| **Current file**                      | Immediate code context    | Keep related code visible in the active file                       |
| **Open tabs**                         | Related code patterns     | Open files that define types, interfaces, or patterns you're using |
| **Comments & docstrings**             | Intent and explanation    | Write comments _before_ code to guide suggestions                  |
| **File names**                        | Project structure hints   | Use descriptive, conventional file names                           |
| **`.github/copilot-instructions.md`** | Project-wide rules        | Define conventions Copilot should always follow                    |
| **Chat instructions**                 | Session-specific guidance | Tell Copilot how to behave for specific tasks                      |

**📖 Official Documentation:**

- [Customizing Copilot in your IDE](https://docs.github.com/en/copilot/customizing-copilot/adding-repository-custom-instructions-for-github-copilot)
- [Prompt engineering for Copilot](https://docs.github.com/en/copilot/using-github-copilot/prompt-engineering-for-github-copilot)

### Custom Instructions: Changing Copilot's Voice

You can configure Copilot to adopt different "personas"—different ways of explaining, different levels of verbosity, different coding styles.

**Where instructions live:**

1. **Repository-level:** `.github/copilot-instructions.md` — Applied to everyone working in the repo
2. **VS Code settings:** User or workspace settings for personal preferences
3. **Chat messages:** Temporary instructions for a specific conversation

**Example instruction styles:**

```markdown
# For a senior engineer who wants terse responses

- Be concise. Skip basic explanations.
- Show code first, explain only if asked.
- Assume I know the language and frameworks.

# For learning/documentation

- Explain your reasoning step by step.
- Include comments in generated code.
- Mention alternatives and trade-offs.

# For strict code standards

- Follow Google's JavaScript style guide.
- Always use TypeScript strict mode patterns.
- Include JSDoc comments on all public functions.

# For tone/attitude variations

- Helpful: Be supportive and solution-oriented. Offer next-step suggestions and relevant tips proactively. Maintain a professional, respectful tone.
- Eager: Use an enthusiastic but concise tone. Show initiative, propose options, and keep responses focused.
- Snarky (use sparingly): Maintain professionalism; if asked, keep sarcasm light and never disrespectful. Avoid negativity or ridicule.
- Flirty (not recommended): Avoid flirtatious or romantic language; keep it professional. If a lighter tone is explicitly requested, prefer "playful" or "light-hearted" instead; never include sexual content.
```

**📖 Official Documentation:**

- [Adding custom instructions](https://docs.github.com/en/copilot/customizing-copilot/adding-repository-custom-instructions-for-github-copilot)

### Chat Participants (Agents)

Chat participants are specialized agents that understand specific contexts:

| Participant  | What It Knows                 | Best For                                              |
| ------------ | ----------------------------- | ----------------------------------------------------- |
| `@workspace` | Your entire codebase          | "Where is X implemented?", "How does feature Y work?" |
| `@vscode`    | VS Code features and settings | Editor configuration, shortcuts, extensions           |
| `@terminal`  | Shell commands, CLI tools     | Command syntax, scripting, tool usage                 |
| `@github`    | GitHub features (Enterprise)  | Issues, PRs, Actions, repository management           |

**Example usage:**

```
@workspace How is authentication implemented in this project?
@workspace Find all places where we call the payment API
@vscode How do I configure auto-save?
@terminal How do I find all files larger than 100MB in this directory?
```

**📖 Official Documentation:**

- [Chat participants in VS Code](https://code.visualstudio.com/docs/copilot/copilot-chat#_chat-participants)

### Slash Commands

Shortcuts for common tasks—no need to explain what you want:

| Command     | What It Does              | When to Use                         |
| ----------- | ------------------------- | ----------------------------------- |
| `/explain`  | Explains selected code    | Understanding unfamiliar code       |
| `/fix`      | Suggests fixes for issues | Debugging, error resolution         |
| `/tests`    | Generates unit tests      | Test-driven development             |
| `/doc`      | Adds documentation        | API documentation, JSDoc/docstrings |
| `/optimize` | Improves performance      | Code review, refactoring            |
| `/simplify` | Reduces complexity        | Cleaning up convoluted logic        |
| `/clear`    | Clears chat history       | Starting fresh                      |

**📖 Official Documentation:**

- [Slash commands reference](https://code.visualstudio.com/docs/copilot/copilot-chat#_slash-commands)

### The Power of Documentation-as-Context

Here's a secret that separates good Copilot users from great ones: **documentation isn't just for humans anymore**.

When you write clear documentation about your project's architecture, patterns, and conventions, you're also training Copilot to understand your codebase. A well-written `ARCHITECTURE.md` or `CONVENTIONS.md` file that Copilot can reference makes its suggestions dramatically better.

This is the "Markdown Whisperer" philosophy from Module 0: **clarity scales**. Write it once for humans, and AI benefits too.

---

## 🔨 Exercises

Our four developers from Module 1 continue their journey. Now they're moving from "Copilot works" to "Copilot works _my way_."

---

### Exercise 1: Changing Copilot's Voice — "The Right Tone for the Job"

#### 📖 The Story

**Sarah** has noticed something. When she asks Copilot questions, it explains things like she's a beginner. _"I've been coding for 15 years,"_ she thinks. _"I don't need a paragraph explaining what a for-loop is."_

Meanwhile, **Priya** loves those explanations—she's still learning and the detailed breakdowns help her understand not just _what_ the code does, but _why_.

They discover the same tool can speak differently to each of them.

#### 🎯 Objective

Configure Copilot with different personas to match different working styles.

#### 📋 Steps

1. **Create a test workspace folder**

   - Create a new folder: `copilot-personas-test`
   - Open it in VS Code

2. **Create Sarah's "Senior Engineer" instructions**

   Create file: `.vscode/settings.json`

   ```json
   {
     "github.copilot.chat.codeGeneration.instructions": [
       {
         "text": "Be concise and direct. Skip basic explanations. Show code first, explain only if asked. Assume expertise with JavaScript, TypeScript, and Node.js. Use modern ES6+ syntax. No hand-holding."
       }
     ]
   }
   ```

3. **Test the senior persona**

   Open Copilot Chat and ask:

   ```
   How do I debounce a function in JavaScript?
   ```

   Notice: The response should be terse—mostly code, minimal explanation.

4. **Create Priya's "Learning Mode" instructions**

   Update `.vscode/settings.json`:

   ```json
   {
     "github.copilot.chat.codeGeneration.instructions": [
       {
         "text": "I'm learning JavaScript. Please explain your reasoning step by step. Include comments in all code. Explain why you made certain choices. Mention common pitfalls. Use analogies when helpful."
       }
     ]
   }
   ```

5. **Test the learning persona**

   Ask the same question:

   ```
   How do I debounce a function in JavaScript?
   ```

   Notice: The response should be educational—explanations, comments, context.

6. **Try a "Documentation Writer" persona**

   Update settings:

   ```json
   {
     "github.copilot.chat.codeGeneration.instructions": [
       {
         "text": "Generate code with comprehensive JSDoc comments. Include @param, @returns, @throws, and @example sections. Write for a public API that other developers will consume. Follow TSDoc conventions."
       }
     ]
   }
   ```

   Ask:

   ```
   Create a function that validates an email address
   ```

#### ✅ Success Criteria

- [ ] Senior persona gives concise, code-first responses
- [ ] Learning persona provides detailed explanations with comments
- [ ] Documentation persona produces heavily commented, JSDoc-style code
- [ ] You understand how instructions change Copilot's behavior

#### 💭 Team Discussion

**Sarah:** _"Finally, it talks to me like a peer instead of a student."_
**Priya:** _"And I can keep learning mode on until I'm ready to switch."_

#### 🚀 Challenge Extension

Create a **"Code Reviewer"** persona that:

- Points out potential issues
- Suggests improvements
- Asks clarifying questions
- References best practices

Test it by asking: _"Review this code: [paste some code]"_

#### 📚 Official Docs

- [Customizing chat responses](https://docs.github.com/en/copilot/customizing-copilot/adding-repository-custom-instructions-for-github-copilot)

---

### Exercise 2: Creating a Documentation Agent — "The Knowledge Keeper"

#### 📖 The Story

**David** has a problem. His team's codebase is 3 years old with thousands of files. New developers take months to onboard. Tribal knowledge lives in Slack threads and people's heads.

He realizes: _"If I wrote down our conventions and architecture in a way that's clear to humans, Copilot could use that same documentation to give better suggestions."_

He decides to create a documentation structure that serves both humans AND AI.

#### 🎯 Objective

Create a documentation system that captures your team's conventions, patterns, and architecture—making Copilot smarter while also helping human developers.

#### 📋 Steps

1. **Create the documentation structure**

   In your test project, create:

   ```
   docs/
   ├── ARCHITECTURE.md
   ├── CONVENTIONS.md
   └── PATTERNS.md
   ```

2. **Write the Architecture document**

   Create `docs/ARCHITECTURE.md`:

   ```markdown
   # Project Architecture

   ## Overview

   This is a Node.js e-commerce API following a layered architecture pattern.

   ## Directory Structure
   ```

   src/
   ├── controllers/ # HTTP request handlers (thin, delegate to services)
   ├── services/ # Business logic (where the real work happens)
   ├── repositories/ # Data access layer (database queries)
   ├── models/ # Data models and validation schemas
   ├── middleware/ # Express middleware (auth, logging, errors)
   └── utils/ # Shared utility functions

   ```

   ## Data Flow

   Request → Controller → Service → Repository → Database

   - **Controllers** parse requests, call services, format responses
   - **Services** contain business logic, call repositories, enforce rules
   - **Repositories** handle database queries, return plain objects

   ## Key Patterns

   1. **Dependency Injection**: Services receive repositories via constructor
   2. **Error Handling**: Throw custom errors in services, catch in middleware
   3. **Validation**: Use Joi schemas in models, validate in controllers

   ## Example: Adding a New Feature

   To add a "wishlist" feature:
   1. Create `models/wishlist.js` with Joi schema
   2. Create `repositories/wishlist-repository.js` for DB queries
   3. Create `services/wishlist-service.js` for business logic
   4. Create `controllers/wishlist-controller.js` for HTTP handling
   5. Add routes in `routes/wishlist.js`
   ```

3. **Write the Conventions document**

   Create `docs/CONVENTIONS.md`:

   ````markdown
   # Code Conventions

   ## Naming Conventions

   | Element         | Convention      | Example           |
   | --------------- | --------------- | ----------------- |
   | Files           | kebab-case      | `user-service.js` |
   | Classes         | PascalCase      | `UserService`     |
   | Functions       | camelCase       | `getUserById`     |
   | Constants       | SCREAMING_SNAKE | `MAX_RETRY_COUNT` |
   | Database tables | snake_case      | `user_orders`     |

   ## Function Patterns

   ### Service Methods

   - Async functions that return data or throw custom errors
   - Never return null for "not found"—throw `NotFoundError`
   - Always validate input at the start

   ```javascript
   // ✅ Good
   async getUserById(id) {
     if (!id) throw new ValidationError('User ID is required');
     const user = await this.userRepository.findById(id);
     if (!user) throw new NotFoundError(`User ${id} not found`);
     return user;
   }

   // ❌ Bad
   async getUserById(id) {
     return await this.userRepository.findById(id); // Returns null if not found
   }
   ```
   ````

   ### Error Handling

   - Use custom error classes: `ValidationError`, `NotFoundError`, `AuthorizationError`
   - Let errors bubble up to middleware
   - Never swallow errors silently

   ## Comments

   - JSDoc for all public functions
   - Inline comments only for "why", not "what"
   - TODO format: `// TODO(username): description`

   ## Testing

   - One test file per source file: `user-service.test.js`
   - Use describe/it blocks
   - Test file structure: Arrange → Act → Assert

   ```

   ```

4. **Write the Patterns document**

   Create `docs/PATTERNS.md`:

   ````markdown
   # Common Patterns

   ## Repository Pattern

   Every data source gets a repository class:

   ```javascript
   class UserRepository {
     constructor(database) {
       this.db = database;
     }

     async findById(id) {
       return this.db.query("SELECT * FROM users WHERE id = ?", [id]);
     }

     async create(userData) {
       const result = await this.db.query(
         "INSERT INTO users (name, email) VALUES (?, ?)",
         [userData.name, userData.email]
       );
       return { id: result.insertId, ...userData };
     }
   }
   ```
   ````

   ## Service Pattern

   Services contain business logic and receive repositories via DI:

   ```javascript
   class UserService {
     constructor(userRepository, emailService) {
       this.userRepository = userRepository;
       this.emailService = emailService;
     }

     async createUser(userData) {
       // Validate
       const validated = userSchema.validate(userData);
       if (validated.error) throw new ValidationError(validated.error.message);

       // Create
       const user = await this.userRepository.create(validated.value);

       // Side effects
       await this.emailService.sendWelcome(user.email);

       return user;
     }
   }
   ```

   ## API Response Format

   All API responses follow this structure:

   ```javascript
   // Success
   {
     "success": true,
     "data": { /* response data */ }
   }

   // Error
   {
     "success": false,
     "error": {
       "code": "VALIDATION_ERROR",
       "message": "Email is required"
     }
   }
   ```

   ```

   ```

5. **Test the documentation with @workspace**

   Open Copilot Chat and ask:

   ```
   @workspace Based on the architecture documentation, how should I add a new "reviews" feature?
   ```

   Notice how Copilot references your ARCHITECTURE.md to give project-specific guidance.

6. **Ask about conventions**
   ```
   @workspace What naming convention should I use for a new service class?
   ```

#### ✅ Success Criteria

- [ ] Created three documentation files (ARCHITECTURE, CONVENTIONS, PATTERNS)
- [ ] @workspace references your documentation when answering questions
- [ ] Documentation serves both human readers and Copilot
- [ ] You understand how written context improves AI suggestions

#### 💭 David's Insight

_"I just wrote documentation once, and now every developer—human or AI—can access it. New hires read it. Copilot reads it. No more tribal knowledge."_

#### 🚀 Challenge Extension

Add a `docs/ANTI-PATTERNS.md` that documents what NOT to do:

- Common mistakes in your codebase
- Deprecated patterns to avoid
- Security anti-patterns

Then ask Copilot: _"@workspace Review this code for anti-patterns: [paste code]"_

#### 📚 Official Docs

- [Workspace chat participant](https://code.visualstudio.com/docs/copilot/copilot-chat#_workspace)

---

### Exercise 3: Making Copilot Smarter — "The Rules File"

#### 📖 The Story

**Marcus** has been writing comment-driven code for a week now. It's working great—but he notices something. Every time he starts a new file, he has to remind Copilot of the team's conventions. _"Use async/await, not callbacks. Throw errors, don't return null. Follow our naming conventions."_

His tech lead shows him the `.github/copilot-instructions.md` file. _"Put the rules here. Copilot reads this automatically for every file in the repo."_

Marcus realizes: the documentation David created can now _automatically_ inform Copilot's suggestions.

#### 🎯 Objective

Create a `.github/copilot-instructions.md` file that references your documentation, making Copilot follow your team's rules automatically.

#### 📋 Steps

1. **Create the instructions file**

   Create `.github/copilot-instructions.md`:

   ````markdown
   # Copilot Instructions for This Project

   You are assisting with an e-commerce API project. Follow these rules strictly.

   ## Project Context

   - This is a Node.js/Express API
   - We use a layered architecture (controllers → services → repositories)
   - All code should be in ES6+ JavaScript
   - We do NOT use TypeScript in this project

   ## Code Style Rules

   1. **Async/Await**: Always use async/await, never callbacks or raw promises
   2. **Error Handling**: Throw custom errors (`ValidationError`, `NotFoundError`), never return null
   3. **Naming**:
      - Files: kebab-case (`user-service.js`)
      - Classes: PascalCase (`UserService`)
      - Functions: camelCase (`getUserById`)
   4. **Comments**: JSDoc on all public functions

   ## Architecture Rules

   1. **Controllers** should be thin—parse request, call service, format response
   2. **Services** contain business logic and validation
   3. **Repositories** only handle database queries
   4. Never call a repository directly from a controller

   ## Documentation Reference

   For detailed patterns and examples, see:

   - `docs/ARCHITECTURE.md` - System architecture and data flow
   - `docs/CONVENTIONS.md` - Naming and code style conventions
   - `docs/PATTERNS.md` - Common implementation patterns

   ## Response Format

   All API endpoints return:

   ```json
   { "success": true, "data": {} }
   // or
   { "success": false, "error": { "code": "...", "message": "..." } }
   ```
   ````

   ## What NOT to Do

   - Don't use `var`—use `const` or `let`
   - Don't return null for "not found"—throw `NotFoundError`
   - Don't put business logic in controllers
   - Don't use callback-style error handling

   ```

   ```

2. **Create a test file to see the rules in action**

   Create `src/services/order-service.js`:

   ```javascript
   /**
    * Order Service
    * Handles order-related business logic
    */
   class OrderService {
     constructor(orderRepository, inventoryService) {
       this.orderRepository = orderRepository;
       this.inventoryService = inventoryService;
     }

     // Let Copilot complete the rest
   }
   ```

3. **Add a method using inline completion**

   Inside the class, type:

   ```javascript
   /**
    * Creates a new order for a customer
    */
   async createOrder(customerId, items) {
   ```

   Let Copilot complete the method. Observe:

   - Does it use async/await?
   - Does it throw errors instead of returning null?
   - Does it follow the service pattern from your docs?

4. **Test with Copilot Chat**

   Ask:

   ```
   Create a method to cancel an order. It should check if the order exists,
   verify it can be cancelled, restore inventory, and update the order status.
   ```

   Check if the generated code follows your conventions.

5. **Verify the rules are being applied**

   Ask Copilot:

   ```
   @workspace What are the coding rules for this project?
   ```

   It should reference your `.github/copilot-instructions.md` file.

#### ✅ Success Criteria

- [ ] Created `.github/copilot-instructions.md` with project rules
- [ ] Copilot-generated code follows your async/await rule
- [ ] Copilot-generated code throws errors instead of returning null
- [ ] Copilot-generated code follows your naming conventions
- [ ] The instructions file references your documentation

#### 💭 Marcus's Realization

_"I set up the rules once. Now every developer who uses Copilot in this repo automatically follows our conventions. It's like having a style guide that enforces itself."_

#### 🚀 Challenge Extension

**Create Project-Specific Personas:**

Add different instruction sections for different types of work:

```markdown
## When Writing Tests

- Use Jest with describe/it blocks
- Follow Arrange-Act-Assert pattern
- Mock all external dependencies
- Test both success and error paths

## When Writing API Endpoints

- Always validate input with Joi
- Return consistent response format
- Log all errors before throwing
- Include rate limiting on public endpoints

## When Writing Database Queries

- Always use parameterized queries (prevent SQL injection)
- Use transactions for multi-step operations
- Add indexes for frequently queried columns
```

#### 📚 Official Docs

- [Repository custom instructions](https://docs.github.com/en/copilot/customizing-copilot/adding-repository-custom-instructions-for-github-copilot)

---

### Exercise 4: Chat Participants Deep Dive — "The Right Agent for the Job"

#### 📖 The Story

**Priya** has been using Copilot Chat for everything—and it's been helpful. But her colleague notices she's asking `@workspace` about VS Code settings and asking general chat about codebase structure.

_"You're using the wrong agents,"_ he explains. _"Each one knows different things. Use `@workspace` for code questions, `@vscode` for editor questions, `@terminal` for command-line questions."_

#### 🎯 Objective

Learn when to use each chat participant for maximum relevance.

#### 📋 Steps

1. **@workspace — The Codebase Expert**

   With your documentation files open, ask:

   ```
   @workspace Summarize the architecture of this project
   ```

   Then:

   ```
   @workspace Where should I put a new utility function for date formatting?
   ```

   And:

   ```
   @workspace Find all places where errors are thrown
   ```

2. **@vscode — The Editor Expert**

   Ask VS Code-specific questions:

   ```
   @vscode How do I create a custom keyboard shortcut for running tests?
   ```

   ```
   @vscode What extensions would you recommend for Node.js development?
   ```

   ```
   @vscode How do I configure auto-format on save?
   ```

3. **@terminal — The Command Line Expert**

   Ask terminal questions:

   ```
   @terminal How do I find all JavaScript files modified in the last week?
   ```

   ```
   @terminal What's the command to show disk usage by folder, sorted by size?
   ```

   ```
   @terminal How do I set up a git hook to run tests before push?
   ```

4. **Compare the difference**

   Ask the SAME question to different agents:

   General chat:

   ```
   How do I debug this application?
   ```

   @workspace:

   ```
   @workspace How do I debug this application?
   ```

   @vscode:

   ```
   @vscode How do I debug this application?
   ```

   Notice: Each gives a different answer based on their expertise.

#### ✅ Success Criteria

- [ ] Used @workspace for codebase questions and got project-specific answers
- [ ] Used @vscode for editor questions and got VS Code-specific guidance
- [ ] Used @terminal for CLI questions and got command-line solutions
- [ ] Understand which agent to use for different question types

#### 📚 Official Docs

- [Chat participants in VS Code](https://code.visualstudio.com/docs/copilot/copilot-chat#_chat-participants)

#### 💭 Priya's New Workflow

_"Now I instinctively know: architecture questions go to @workspace, editor questions go to @vscode, command questions go to @terminal. It's like having three different experts on call."_

#### 🚀 Challenge Extension

Create a "cheat sheet" comment in your project:

```javascript
// Quick reference - Copilot Chat Agents:
// @workspace - "Where is X implemented?" "How does Y work?"
// @vscode - "How do I configure Z?" "What shortcut does X?"
// @terminal - "What command does X?" "How do I script Y?"
```

---

### Exercise 5: Slash Commands for Speed — "The Shortcuts"

#### 📖 The Story

**Sarah** watches a junior developer select code, open chat, and type: _"Please explain what this code does, I'm trying to understand the logic and how it works."_

She leans over: _"Just type `/explain`."_

The junior developer's eyes widen. _"There are shortcuts?"_

#### 🎯 Objective

Master slash commands for common tasks.

#### 📋 Steps

1. **Create code to work with**

   Create `src/utils/data-transformer.js`:

   ```javascript
   const transformUserData = (users) => {
     return users.reduce((acc, user) => {
       const key = user.department || "unassigned";
       if (!acc[key]) acc[key] = [];
       acc[key].push({
         id: user.id,
         name: `${user.firstName} ${user.lastName}`.trim(),
         email: user.email.toLowerCase(),
         active: user.status === "active",
       });
       return acc;
     }, {});
   };

   function processOrders(orders, taxRate) {
     var results = [];
     for (var i = 0; i < orders.length; i++) {
       var order = orders[i];
       var subtotal = 0;
       for (var j = 0; j < order.items.length; j++) {
         subtotal = subtotal + order.items[j].price * order.items[j].quantity;
       }
       var tax = subtotal * taxRate;
       var total = subtotal + tax;
       results.push({
         orderId: order.id,
         subtotal: subtotal,
         tax: tax,
         total: total,
       });
     }
     return results;
   }
   ```

2. **Use /explain**

   Select `transformUserData` → Open Chat → Type `/explain`

   Notice: Detailed explanation without asking.

3. **Use /doc**

   Select `transformUserData` → Type `/doc`

   Notice: Generates JSDoc comments automatically.

4. **Use /fix**

   Select `processOrders` → Type `/fix`

   Notice: Identifies issues (var usage, verbose loops, etc.)

5. **Use /optimize**

   Select `processOrders` → Type `/optimize`

   Notice: Suggests modern JS improvements.

6. **Use /tests**

   Select `transformUserData` → Type `/tests`

   Notice: Generates unit tests covering various cases.

7. **Use /simplify**

   Ask Copilot to generate something complex first:

   ```
   Write a function that validates a password with: min 8 chars,
   one uppercase, one lowercase, one number, one special character
   ```

   If the result is complex, select it and type `/simplify`

#### ✅ Success Criteria

- [ ] Used /explain to understand code
- [ ] Used /doc to generate documentation
- [ ] Used /fix to identify issues
- [ ] Used /optimize to improve code
- [ ] Used /tests to generate tests
- [ ] Used /simplify to reduce complexity

#### 🚀 Challenge: Chain Commands

Try this workflow:

1. Write a function with intentional issues
2. `/fix` → Apply fixes
3. `/optimize` → Apply optimizations
4. `/doc` → Add documentation
5. `/tests` → Generate tests

How much time did the slash commands save compared to typing full requests?

#### 📚 Official Docs

- [Slash commands in VS Code](https://code.visualstudio.com/docs/copilot/copilot-chat#_slash-commands)

---

### Exercise 6: Multi-file Editing — "Coordinated Changes"

#### 📖 The Story

**David** needs to add email validation to the User model. But the User model is used by UserService, which is used by UserController, which has tests. A change in one file ripples through four files.

In the old days, this meant:

1. Change the model
2. Run the app, see it crash
3. Fix the service
4. Run again, see different crash
5. Fix the controller
6. Run tests, see them fail
7. Fix tests

_"There has to be a better way,"_ he thinks.

#### 🎯 Objective

Use Copilot Edits to make coordinated changes across multiple files.

#### 📋 Steps

1. **Create a multi-file project**

   Create these files:

   `src/models/user.js`:

   ```javascript
   class User {
     constructor(id, name, email) {
       this.id = id;
       this.name = name;
       this.email = email;
     }
   }
   module.exports = User;
   ```

   `src/services/user-service.js`:

   ```javascript
   const User = require("../models/user");

   class UserService {
     constructor(userRepository) {
       this.userRepository = userRepository;
     }

     async createUser(name, email) {
       const user = new User(Date.now(), name, email);
       return this.userRepository.save(user);
     }

     async getUserByEmail(email) {
       return this.userRepository.findByEmail(email);
     }
   }
   module.exports = UserService;
   ```

   `src/controllers/user-controller.js`:

   ```javascript
   const UserService = require("../services/user-service");

   class UserController {
     constructor(userService) {
       this.userService = userService;
     }

     async createUser(req, res) {
       const { name, email } = req.body;
       const user = await this.userService.createUser(name, email);
       res.json({ success: true, data: user });
     }
   }
   module.exports = UserController;
   ```

2. **Open Copilot Edits**

   - Click the Copilot icon in the sidebar
   - Select "Open Copilot Edits" (or use Command Palette)

3. **Add files to working set**

   - Click "Add Files"
   - Select all three files (user.js, user-service.js, user-controller.js)

4. **Request a coordinated change**

   Type:

   ```
   Add email validation to the User model. Email must be a valid format.
   Update the service to validate before creating users.
   Update the controller to return a proper error response if validation fails.
   ```

5. **Review the proposed changes**

   - Copilot shows changes across all three files
   - Review each change before accepting
   - Notice how changes are coordinated

6. **Accept or modify**

   - Accept changes that look good
   - Modify any that need adjustment
   - Reject any that don't fit

#### ✅ Success Criteria

- [ ] Added multiple files to Copilot Edits working set
- [ ] Made a single request that affected multiple files
- [ ] Copilot generated coordinated changes
- [ ] Reviewed and accepted/modified changes

#### 🚀 Challenge Extension

Add a fourth file `src/models/user.test.js` to the working set.

Ask:

```
Add email validation and update all files including tests to cover
valid and invalid email scenarios
```

Watch Copilot coordinate changes across model, service, controller, AND tests.

#### 📚 Official Docs

- [Copilot Edits documentation](https://code.visualstudio.com/docs/copilot/copilot-edits)

---

### Exercise 7: Commit + PR Prompt — "From Changes to Review"

#### 📖 The Story

**Marcus** wants to turn routine git flows into a one-liner. He’s tired of manually branching from `main`, staging files, crafting commit messages, pushing, and then remembering the exact `gh pr create` flags to use his team’s PR template.

He decides to create a reusable prompt that does it all safely and consistently.

#### 🎯 Objective

Create a reusable prompt file that: (1) checks if you’re on the base branch and creates a feature branch if needed, (2) commits changes, (3) pushes to GitHub, and (4) opens a PR using a custom template via GitHub CLI.

#### Prerequisites

- Git configured with a remote `origin` pointing to GitHub
- GitHub CLI installed and authenticated:
  - Check: `gh --version` and `gh auth status`
- A PR template available in `.github/PULL_REQUEST_TEMPLATE/` or a root `pull_request_template.md`

#### 📋 Steps

1. **Create the prompt file**

   Create `.github/prompts/commit-and-pr.prompt.md`:

   ````markdown
   ---
   description: Safely branch, commit, push, and open a PR using a template
   variables:
     - name: baseBranch
       description: Base branch to compare/merge into (e.g., main)
       default: "main"
     - name: branchPrefix
       description: Prefix for new branches when on base (e.g., feature, fix)
       default: "feature"
     - name: commitType
       description: Conventional commit type (feat, fix, docs, chore, refactor, test)
       default: "feat"
     - name: commitScope
       description: Conventional commit scope (e.g., module-2, cli)
       default: "repo"
     - name: commitSummary
       description: Short summary (imperative mood)
       required: true
     - name: paths
       description: Paths to stage (e.g., . or src/)
       default: "."
     - name: prTemplate
       description: Name of PR template file (optional, e.g., feature.md)
       required: false
     - name: draft
       description: Open as draft PR (true/false)
       default: "false"
   ---

   # Commit and Open PR

   You are an expert release assistant. Use @terminal to execute shell commands safely.
   Goal: If on ${baseBranch}, create a new branch; then stage, commit, push, and open a PR using a template if provided.

   ## Safety & Behavior

   - Echo each command before running it.
   - Abort on any error (`set -e`).
   - If there are no changes to commit, print a message and exit without error.

   ## Procedure (shell script to execute)

   ```bash
   set -e

   CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
   echo "Current branch: $CURRENT_BRANCH"

   BASE="${baseBranch}"
   PREFIX="${branchPrefix}"
   TYPE="${commitType}"
   SCOPE="${commitScope}"
   SUMMARY="${commitSummary}"
   PATHS="${paths}"
   TEMPLATE="${prTemplate}"
   DRAFT_FLAG="${draft}"

   if [[ "$CURRENT_BRANCH" == "$BASE" ]]; then
     # Create a safe slug from the summary
     SLUG=$(echo "$SUMMARY" | tr '[:upper:]' '[:lower:]' | sed -E 's/[^a-z0-9]+/-/g; s/^-+|-+$//g')
     NEW_BRANCH="$PREFIX/$SCOPE-$SLUG"
     echo "Creating branch: $NEW_BRANCH from $BASE"
     git fetch origin "$BASE"
     git checkout -b "$NEW_BRANCH" "origin/$BASE"
     ACTIVE_BRANCH="$NEW_BRANCH"
   else
     ACTIVE_BRANCH="$CURRENT_BRANCH"
     echo "Using existing branch: $ACTIVE_BRANCH"
   fi

   echo "Staging paths: $PATHS"
   git add $PATHS

   # Skip commit if nothing staged
   if git diff --cached --quiet; then
     echo "No staged changes to commit. Exiting."
     exit 0
   fi

   COMMIT_MSG="$TYPE($SCOPE): $SUMMARY"
   echo "Committing: $COMMIT_MSG"
   git commit -m "$COMMIT_MSG"

   echo "Pushing branch: $ACTIVE_BRANCH"
   git push -u origin "$ACTIVE_BRANCH"

   # Create PR
   PR_TITLE="$COMMIT_MSG"
   if [[ -n "$TEMPLATE" ]]; then
     echo "Opening PR with template: $TEMPLATE"
     if [[ "$DRAFT_FLAG" == "true" ]]; then
       gh pr create --base "$BASE" --head "$ACTIVE_BRANCH" --title "$PR_TITLE" --template "$TEMPLATE" --draft
     else
       gh pr create --base "$BASE" --head "$ACTIVE_BRANCH" --title "$PR_TITLE" --template "$TEMPLATE"
     fi
   else
     echo "Opening PR (fill from commit history)"
     if [[ "$DRAFT_FLAG" == "true" ]]; then
       gh pr create --base "$BASE" --head "$ACTIVE_BRANCH" --title "$PR_TITLE" --fill --draft
     else
       gh pr create --base "$BASE" --head "$ACTIVE_BRANCH" --title "$PR_TITLE" --fill
     fi
   fi

   echo "Done."
   ```
   ````

2. **Use the prompt in Copilot Chat**

   In a repo with uncommitted changes, run:

   ```
   @workspace Read .github/prompts/commit-and-pr.prompt.md and execute it via @terminal with:
   - baseBranch: main
   - branchPrefix: feature
   - commitType: feat
   - commitScope: module-2
   - commitSummary: Add commit+PR prompt exercise
   - paths: .
   - prTemplate: feature.md
   - draft: false
   ```

   Tip: If you’re already on a feature branch, the prompt will reuse it instead of creating a new one.

3. **Verify the PR**

   After the workflow completes, Copilot/terminal should print the PR URL. Open it and confirm:

   - The title matches your commit summary
   - The body uses your selected template
   - The base is `main` and the head is your feature branch

#### ✅ Success Criteria

- [ ] If starting on `main`, a new branch was created automatically
- [ ] Changes were staged and committed with a Conventional Commit message
- [ ] Branch was pushed to `origin` with upstream set
- [ ] A PR was opened using the specified template (or filled from commits)
- [ ] PR URL was displayed and opens correctly

#### 📚 Official Docs

- [GitHub CLI: `gh pr create`](https://cli.github.com/manual/gh_pr_create)
- [Pull request templates](https://docs.github.com/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-issue-and-pull-request-templates)
- [Conventional Commits](https://www.conventionalcommits.org/)

#### 🚀 Challenge Extension

- Add reviewers and labels automatically, e.g.: `gh pr create --reviewer <user1>,<user2> --label "area/module-2,enhancement"`
- Add support for `fixup!/squash!` flows or `--draft true` by default
- Detect work-in-progress strings in the summary and open as draft

---

## 📝 Key Takeaways

| Concept                      | What You Learned                                                           |
| ---------------------------- | -------------------------------------------------------------------------- |
| **Custom Instructions**      | Copilot's "voice" is configurable—terse for experts, detailed for learners |
| **Documentation as Context** | Write docs for humans; AI benefits automatically                           |
| **copilot-instructions.md**  | Project-wide rules that apply to everyone, automatically                   |
| **Chat Participants**        | @workspace, @vscode, @terminal each have expertise                         |
| **Slash Commands**           | Shortcuts like /explain, /fix, /tests save time                            |
| **Multi-file Editing**       | Coordinate changes across your codebase                                    |

### The Mindset Shift

This module taught our developers something important:

- **Sarah** learned Copilot can speak at her level
- **Priya** learned she can keep learning mode on until she's ready
- **David** learned documentation scales to both humans and AI
- **Marcus** learned rules can be automated, not just documented

The common thread: **Copilot is configurable**. The better you configure it—with instructions, documentation, and the right agents—the better it helps you.

---

## ➡️ Next Steps

**Ready to go deeper?** This module introduced the fundamentals. Now specialize:

- **[Module 3: Prompt Engineering](../03-prompt-engineering/README.md)** — Master the CRISPE framework, build reusable prompt libraries stored in your repository
- **[Module 4: Agents and Tools](../04-agents-and-tools/README.md)** — Deep dive into @workspace, @vscode, @terminal, and creating team playbooks

Or continue the linear path to [Module 5: Copilot on the Web](../05-copilot-web/README.md).

---

## 🔗 Additional Resources

**Custom Instructions:**

- [Adding repository custom instructions](https://docs.github.com/en/copilot/customizing-copilot/adding-repository-custom-instructions-for-github-copilot)
- [Prompt engineering for Copilot](https://docs.github.com/en/copilot/using-github-copilot/prompt-engineering-for-github-copilot)

**Chat Features:**

- [VS Code Copilot Chat](https://code.visualstudio.com/docs/copilot/copilot-chat)
- [Chat participants](https://code.visualstudio.com/docs/copilot/copilot-chat#_chat-participants)
- [Slash commands](https://code.visualstudio.com/docs/copilot/copilot-chat#_slash-commands)

**Multi-file Editing:**

- [Copilot Edits](https://code.visualstudio.com/docs/copilot/copilot-edits)

**General:**

- [VS Code Copilot Overview](https://code.visualstudio.com/docs/copilot/overview)
- [GitHub Copilot Documentation](https://docs.github.com/en/copilot)
