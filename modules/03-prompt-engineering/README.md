# Module 3: Prompt Engineering — Say Less, Mean More

## 📖 Overview

Great prompts are clear, constrained, and contextual. This module gives you lightweight frameworks and repeatable patterns to steer Copilot toward useful, on-standard results.

## Prerequisites

- Modules 0–2

## Estimated Time

- 30–40 minutes

---

## 🎯 Learning Objectives

- Apply a simple prompt structure (Goal → Constraints → Context → Output)
- Use examples and counterexamples to shape results
- Iterate: evaluate → refine → verify
- Capture useful prompts as snippets or repo docs

---

## 📚 Content

> 💡 **Philosophy Connection**: In the AI era, **clear intent is the bottleneck**. As explained in [Module 0, Part B](../00-orientation/README.md#part-b-why-this-training-exists--the-evolution-of-enterprise-programming), the skill hierarchy has shifted—the developers who excel aren't those who memorize syntax, but those who can articulate exactly what they want. This module teaches you that skill.

### A Minimal Prompt Structure

1. Goal: the outcome you want
2. Constraints: boundaries (keep API, avoid deps, small diff)
3. Context: files, patterns, conventions
4. Output: the form you want (patch, function, tests)

Example:

"Improve readability and performance of this function.
Constraints: keep signature and behavior, small diff, add unit tests.
Context: follow docs/PATTERNS.md and docs/CONVENTIONS.md.
Output: a patch plus 2 test cases."

### Shaping with Examples

- Positive example: “Look like this pattern in file X.”
- Negative example: “Avoid try/catch in hot path; use result types.”

### Iteration Loop

Ask → Evaluate → Refine → Verify. Keep diffs small so iteration is cheap.

---

## 🔨 Exercises

### Exercise 1: “Tighten the Prompt” (Priya)

#### 🎯 Objective

Turn a vague request into a precise prompt.

#### 📋 Steps

1. Start with: “Make this faster.”
2. Rewrite using the 4-part structure and your docs.
3. Run it on a selected function.

#### ✅ Success Criteria

- [ ] Prompt includes Goal, Constraints, Context, Output
- [ ] Result is a small, safe change

#### 💭 Priya

“Being specific gave me exactly what I needed.”

---

### Exercise 2: “Examples and Non‑Examples” (David)

#### 🎯 Objective

Use one example and one non‑example to steer style.

#### 📋 Steps

1. Find a good pattern in your repo (example) and a pattern to avoid (non‑example).
2. Ask @workspace to refactor a function guided by both.
3. Verify against docs/PATTERNS.md.

#### ✅ Success Criteria

- [ ] Output mirrors the example, avoids the non‑example
- [ ] Conforms to repo patterns

#### 📚 Official Docs

- Copilot Chat: https://code.visualstudio.com/docs/copilot/copilot-chat

#### 💭 David

“This is how I encode architectural judgment into the prompt.”

---

## 🧠 Key Takeaways

- Structure > length: short, precise prompts beat long vague ones
- Examples accelerate alignment; non‑examples prevent anti‑patterns
- Small, iterative diffs reduce risk and speed learning

---

## ➡️ Next Steps

Go to Module 4: modules/04-agents-and-tools/README.md

# Module 3: Prompt Engineering — The Art of Asking

## 📖 Overview

You've learned that Copilot responds to context. Now you'll learn to **craft that context deliberately**. Prompt engineering is the skill of writing instructions that get you exactly what you want—not just once, but repeatably, and shareable with your entire team.

This module teaches you to move from ad-hoc prompting to **systematic prompt engineering**. You'll create reusable prompt files that live in your repository, travel with your code, and help every team member get consistent, high-quality results from Copilot.

## Prerequisites

- Completed Modules 1–2 (Getting Started; Context & Configuration)
- VS Code with Copilot Chat enabled
- Familiarity with your project’s coding conventions

## Estimated time

- 25–35 minutes

---

## 🎯 Learning Objectives

By the end of this module, you will:

- Understand the anatomy of an effective prompt
- Write prompts that consistently produce high-quality code
- Create reusable prompt templates stored in your repository
- Build a prompt library that your team can share
- Use the `.github/prompts/` directory for version-controlled prompts
- Master prompt patterns for common development tasks

---

## 👤 Personas: Goals & Fears

- Sarah — The Skeptical Senior
  - Goals: Verify real value without compromising quality; keep what works.
  - Fears: Wasting time on hype; losing the craftsmanship of coding.
- Marcus — The DevOps Developer
  - Goals: Ship app code as confidently as infra; move faster on business logic.
  - Fears: Being seen as “just ops”; missing established patterns.
- Priya — The Recent Graduate
  - Goals: Learn quickly, build confidence, ask without judgment.
  - Fears: Being exposed as not knowing enough; making visible mistakes.
- David — The Seasoned Architect
  - Goals: Use AI to enhance architecture and design thinking.
  - Fears: Expertise becoming obsolete; juniors + AI replacing senior judgment.

How this module helps:

- Prompt engineering converts vague asks into precise, reviewable specifications.
- Reusable prompt files document standards and reduce variance across the team.
- Workflows make complex tasks tractable and auditable step-by-step.

---

## 📚 Content

### The Anatomy of a Great Prompt

Not all prompts are created equal. The difference between "write a function" and a well-crafted prompt can be the difference between usable code and garbage.

**The CRISPE Framework for Copilot Prompts:**

| Element          | Description                              | Example                                          |
| ---------------- | ---------------------------------------- | ------------------------------------------------ |
| **C**ontext      | Background information about the project | "In our Node.js e-commerce API..."               |
| **R**ole         | Who Copilot should be                    | "Act as a senior backend developer..."           |
| **I**nstructions | What you want done                       | "Create a function that validates..."            |
| **S**pecifics    | Details and constraints                  | "Use Joi for validation, throw custom errors..." |
| **P**atterns     | Examples or templates to follow          | "Follow this pattern: [example]"                 |
| **E**xclusions   | What NOT to do                           | "Don't use callbacks, don't return null..."      |

**📖 Official Documentation:**

- [Prompt engineering for GitHub Copilot](https://docs.github.com/en/copilot/using-github-copilot/prompt-engineering-for-github-copilot)

### From Ad-Hoc to Systematic

Most developers start with prompts like this:

```
write a function to validate email
```

Experienced prompt engineers write this:

```
Context: Node.js Express API using our ValidationError class for errors.

Create an email validation function that:
- Takes an email string as input
- Returns the validated, normalized email (lowercase, trimmed)
- Throws ValidationError with descriptive message if invalid
- Handles edge cases: null, undefined, empty string, whitespace-only
- Uses regex pattern that accepts standard email formats

Follow our convention: async functions, JSDoc comments, no external dependencies.

Example signature:
async function validateEmail(email: string): Promise<string>
```

The second prompt produces code that fits your codebase. Every time.

### Storing Prompts in Your Repository

Here's the game-changer: **prompts can be version-controlled**.

**The `.github/prompts/` directory:**

```
.github/
├── copilot-instructions.md     # Global rules (from Module 2)
└── prompts/                    # Reusable prompt templates
    ├── new-service.prompt.md
    ├── new-api-endpoint.prompt.md
    ├── add-validation.prompt.md
    ├── write-tests.prompt.md
    └── code-review.prompt.md
```

**Why this matters:**

- Prompts travel with the code—checkout the repo, get the prompts
- Team members use the same prompts, get consistent results
- Prompts evolve with the codebase via pull requests
- New developers inherit team wisdom immediately

**📖 Official Documentation:**

- [Using prompt files](https://docs.github.com/en/copilot/customizing-copilot/adding-repository-custom-instructions-for-github-copilot#creating-prompt-files)

### Prompt File Format

Prompt files use Markdown with a specific structure:

```markdown
---
description: Creates a new service class following our architecture
variables:
  - name: serviceName
    description: Name of the service (e.g., "Order", "Payment")
  - name: dependencies
    description: Comma-separated list of dependencies
---

# New Service: ${serviceName}Service

## Context

You are creating a new service class in our Node.js e-commerce API.
Services contain business logic and follow our layered architecture.

## Requirements

- Class name: ${serviceName}Service
- Dependencies injected via constructor: ${dependencies}
- All methods are async
- Throw custom errors (ValidationError, NotFoundError), never return null
- Include JSDoc comments on all public methods

## Template to Follow

[Include example service structure]

## What NOT to Do

- Don't call repositories from outside services
- Don't use callbacks
- Don't swallow errors
```

### Prompt Patterns for Common Tasks

**Pattern 1: The Template Prompt**

```markdown
Create a [COMPONENT_TYPE] named [NAME] that:

- [REQUIREMENT_1]
- [REQUIREMENT_2]

Follow the pattern in [EXAMPLE_FILE].
Use [LIBRARY/FRAMEWORK] for [PURPOSE].
```

**Pattern 2: The Transformation Prompt**

```markdown
Transform this [SOURCE_TYPE] into [TARGET_TYPE]:

- Keep [PRESERVE_THESE]
- Change [MODIFY_THESE]
- Add [ADD_THESE]
- Remove [REMOVE_THESE]
```

**Pattern 3: The Review Prompt**

```markdown
Review this code for:

- [CONCERN_1]: [SPECIFIC_CRITERIA]
- [CONCERN_2]: [SPECIFIC_CRITERIA]

For each issue found:

1. Identify the location
2. Explain the problem
3. Suggest a fix with code example
```

---

## 🔨 Exercises

Our developers continue their journey. Now they're learning to write prompts that work every time—and share them with the team.

---

### Exercise 1: The Prompt Transformation — "From Vague to Precise"

#### 📖 The Story

**Marcus** has been getting inconsistent results from Copilot. Sometimes it generates exactly what he wants. Sometimes it's way off. He realizes his prompts are the problem—they're too vague, leaving too much to interpretation.

His tech lead challenges him: _"Take your worst prompt and make it your best."_

#### 🎯 Objective

Transform vague prompts into precise, repeatable prompts using the CRISPE framework.

#### Why this matters (Marcus)

- Goal: Deliver app logic confidently using proven patterns.
- Fear addressed: Missing patterns senior devs use — CRISPE makes expectations explicit.

#### Fears addressed

- Reduces “AI guessing” by giving concrete context and constraints.
- Produces outputs aligned with architecture, cutting rework and review friction.

#### 📋 Steps

1. **Start with a vague prompt**

   Open Copilot Chat and type:

   ```
   write a function to process payments
   ```

   Notice: The result is generic, doesn't fit your project.

2. **Apply the CRISPE framework**

   Now try this improved prompt:

   ```
   CONTEXT: Our e-commerce API processes payments through Stripe.
   We use our custom error classes and follow async/await patterns.

   ROLE: You are a senior backend developer familiar with payment processing
   and PCI compliance requirements.

   INSTRUCTIONS: Create a PaymentProcessor class with a processPayment method.

   SPECIFICS:
   - Input: { orderId, amount, currency, paymentMethodId }
   - Create a Stripe PaymentIntent
   - Handle these cases: success, insufficient funds, card declined, network error
   - Return: { success: boolean, transactionId?: string, error?: PaymentError }
   - Log all payment attempts (success and failure) for audit trail

   PATTERNS: Follow our service pattern with constructor dependency injection.
   The Stripe client should be injected, not created internally.

   EXCLUSIONS:
   - Don't store raw card numbers anywhere
   - Don't use callbacks
   - Don't catch and swallow errors silently
   ```

   Notice: The result is specific, production-ready, fits your architecture.

3. **Compare the results**

   Put both outputs side by side. Document:

   - What did the vague prompt miss?
   - What did the specific prompt get right?
   - How much editing would each require?

4. **Practice with more transformations**

   Transform these vague prompts:

   | Vague                    | Your CRISPE Version   |
   | ------------------------ | --------------------- |
   | "write tests"            | (Apply the framework) |
   | "add error handling"     | (Apply the framework) |
   | "create an API endpoint" | (Apply the framework) |

#### ✅ Success Criteria

- [ ] Vague prompt produced generic, unusable code
- [ ] CRISPE prompt produced specific, project-appropriate code
- [ ] You can identify what makes a prompt effective
- [ ] You transformed at least 3 vague prompts

#### 📚 Official Docs

- [Prompt engineering for GitHub Copilot](https://docs.github.com/en/copilot/using-github-copilot/prompt-engineering-for-github-copilot)

#### 💭 Marcus's Insight

_"The prompt IS the specification. If I'm vague, Copilot guesses. If I'm specific, Copilot delivers. It's not AI magic—it's clear communication."_

#### 🚀 Challenge Extension

Create a "prompt improvement checklist" based on what you learned:

- [ ] Does the prompt include context about the project?
- [ ] Does it specify the role/expertise needed?
- [ ] Are the requirements explicit, not implied?
- [ ] Does it include patterns to follow?
- [ ] Does it exclude what NOT to do?

---

### Exercise 2: Building a Prompt Library — "The Team Toolkit"

#### 📖 The Story

**David** notices his team keeps writing the same kinds of prompts. Every time someone needs to create a new service, they write a prompt from scratch. Every time someone adds an endpoint, they reinvent the wheel.

_"What if we had a library of battle-tested prompts?"_ he thinks. _"New developers wouldn't have to figure out the right way to ask—they'd just use our templates."_

#### 🎯 Objective

Create a prompt library in `.github/prompts/` that your team can reuse.

#### Why this matters (David)

- Goal: Scale architectural intent via shareable, versioned templates.
- Fear addressed: “AI will ignore our architecture” — prompts capture standards as code.

#### Fears addressed

- New devs won’t reinvent patterns; they inherit team conventions.
- Reviews shift from “style nits” to architectural correctness.

#### 📋 Steps

1. **Create the prompts directory**

   In your project:

   ```
   mkdir -p .github/prompts
   ```

2. **Create a "New Service" prompt template**

   Create `.github/prompts/new-service.prompt.md`:

   ````markdown
   ---
   description: Creates a new service class following our layered architecture
   author: David (Staff Engineer)
   version: 1.0
   last-updated: 2024-01-15
   ---

   # Create New Service

   ## Context

   You are creating a new service class in our Node.js e-commerce API.
   Services are the business logic layer, sitting between controllers and repositories.

   ## Service Name

   Create: {SERVICE_NAME}Service

   ## Dependencies

   Inject these via constructor: {DEPENDENCIES}

   ## Required Methods

   {METHODS_DESCRIPTION}

   ## Rules to Follow

   1. All methods must be async
   2. Throw custom errors (ValidationError, NotFoundError), never return null
   3. Validate all inputs at the start of each method
   4. Include JSDoc comments on all public methods
   5. Log important operations using our logger

   ## Template Structure

   ```javascript
   /**
    * {SERVICE_NAME}Service
    * {BRIEF_DESCRIPTION}
    */
   class {SERVICE_NAME}Service {
     /**
      * @param {Object} dependencies
      * @param {{DEPENDENCY_TYPE}} dependencies.{dependencyName}
      */
     constructor({ {DEPENDENCIES} }) {
       this.{dependency} = {dependency};
     }

     /**
      * {METHOD_DESCRIPTION}
      * @param {TYPE} paramName - Description
      * @returns {Promise<TYPE>} Description
      * @throws {ValidationError} When input is invalid
      * @throws {NotFoundError} When resource not found
      */
     async {methodName}(params) {
       // Validate
       // Execute business logic
       // Return result or throw error
     }
   }
   ```
   ````

   ## What NOT to Do

   - Don't call repositories from controllers—always go through services
   - Don't use var or callbacks
   - Don't catch errors unless you're adding context and re-throwing
   - Don't return null for "not found"—throw NotFoundError

   ```

   ```

3. **Create an "API Endpoint" prompt template**

   Create `.github/prompts/new-endpoint.prompt.md`:

   ````markdown
   ---
   description: Creates a new REST API endpoint with validation and error handling
   author: Team
   version: 1.0
   ---

   # Create New API Endpoint

   ## Context

   You are adding a new endpoint to our Express.js REST API.
   All endpoints follow our standard patterns for validation, error handling, and response format.

   ## Endpoint Details

   - Method: {HTTP_METHOD}
   - Path: {PATH}
   - Purpose: {DESCRIPTION}

   ## Request

   - Body: {REQUEST_BODY_SCHEMA}
   - Query params: {QUERY_PARAMS}
   - Path params: {PATH_PARAMS}

   ## Response Format

   Success (200/201):

   ```json
   {
     "success": true,
     "data": { ... }
   }
   ```
   ````

   Error (4xx/5xx):

   ```json
   {
     "success": false,
     "error": {
       "code": "ERROR_CODE",
       "message": "Human-readable message"
     }
   }
   ```

   ## Required Components

   1. Joi validation schema in `validators/`
   2. Route handler in `controllers/`
   3. Route registration in `routes/`

   ## Controller Pattern

   ```javascript
   async {handlerName}(req, res, next) {
     try {
       // 1. Validate input
       const validated = await {validator}.validateAsync(req.body);

       // 2. Call service
       const result = await this.{service}.{method}(validated);

       // 3. Send response
       res.status({STATUS_CODE}).json({
         success: true,
         data: result
       });
     } catch (error) {
       next(error); // Let error middleware handle it
     }
   }
   ```

   ## What NOT to Do

   - Don't put business logic in controllers
   - Don't send raw error messages to clients (security risk)
   - Don't forget input validation
   - Don't use inconsistent response formats

   ```

   ```

4. **Create a "Write Tests" prompt template**

   Create `.github/prompts/write-tests.prompt.md`:

   ````markdown
   ---
   description: Generates comprehensive unit tests for a module
   author: Team
   version: 1.0
   ---

   # Generate Unit Tests

   ## Context

   You are writing Jest unit tests for our Node.js application.
   We use describe/it blocks and follow the Arrange-Act-Assert pattern.

   ## Module to Test

   File: {FILE_PATH}

   ## Testing Requirements

   1. Test each public method
   2. Test success cases
   3. Test error cases (validation errors, not found, etc.)
   4. Test edge cases (null, undefined, empty, boundary values)
   5. Mock all external dependencies

   ## Test File Structure

   ```javascript
   const { {ModuleName} } = require('{FILE_PATH}');

   // Mock dependencies
   jest.mock('{DEPENDENCY_PATH}');

   describe('{ModuleName}', () => {
     let instance;
     let mockDependency;

     beforeEach(() => {
       // Arrange: Set up fresh mocks and instance
       mockDependency = {
         method: jest.fn()
       };
       instance = new {ModuleName}({ dependency: mockDependency });
     });

     afterEach(() => {
       jest.clearAllMocks();
     });

     describe('{methodName}', () => {
       it('should {EXPECTED_BEHAVIOR} when {CONDITION}', async () => {
         // Arrange
         const input = { ... };
         mockDependency.method.mockResolvedValue({ ... });

         // Act
         const result = await instance.{methodName}(input);

         // Assert
         expect(result).toEqual({ ... });
         expect(mockDependency.method).toHaveBeenCalledWith({ ... });
       });

       it('should throw ValidationError when {INVALID_CONDITION}', async () => {
         // Arrange
         const invalidInput = { ... };

         // Act & Assert
         await expect(instance.{methodName}(invalidInput))
           .rejects.toThrow(ValidationError);
       });
     });
   });
   ```
   ````

   ## Coverage Requirements

   - Aim for >80% line coverage
   - 100% coverage on business logic paths
   - All error cases must be tested

   ```

   ```

5. **Use a prompt from your library**

   In Copilot Chat, type:

   ```
   @workspace Read .github/prompts/new-service.prompt.md and create an
   InventoryService with methods for: checkStock, reserveStock, releaseStock.
   Dependencies: inventoryRepository, logger
   ```

   Notice: Copilot uses your template to generate consistent code.

6. **Commit your prompt library**

   ```bash
   git add .github/prompts/
   git commit -m "Add reusable prompt templates for services, endpoints, and tests"
   ```

#### ✅ Success Criteria

- [ ] Created `.github/prompts/` directory
- [ ] Created at least 3 prompt templates
- [ ] Each template includes context, requirements, patterns, and exclusions
- [ ] Successfully used a template with @workspace
- [ ] Committed prompts to version control

#### 📚 Official Docs

- [Creating prompt files](https://docs.github.com/en/copilot/customizing-copilot/adding-repository-custom-instructions-for-github-copilot#creating-prompt-files)
- [Adding repository custom instructions](https://docs.github.com/en/copilot/customizing-copilot/adding-repository-custom-instructions-for-github-copilot)

#### 💭 David's Realization

_"The prompts ARE documentation. They capture how we want things built. New developers don't have to guess—they use our prompts and get code that fits our architecture."_

#### 🚀 Challenge Extension

Create prompts for:

- `refactor-to-async.prompt.md` — Converting callback-based code to async/await
- `add-logging.prompt.md` — Adding consistent logging to a module
- `security-review.prompt.md` — Reviewing code for security issues

---

### Exercise 3: Prompt Variables and Customization — "The Template System"

#### 📖 The Story

**Sarah** loves the prompt library idea, but she finds herself editing prompts every time she uses them. _"I keep changing the same placeholders,"_ she notices. _"Service name here, dependencies there... there must be a better way."_

She discovers prompt variables—placeholders that make templates truly reusable.

#### 🎯 Objective

Create prompt templates with variables that can be filled in at runtime.

#### Why this matters (Sarah)

- Goal: Avoid repetitive edits; keep quality high without busywork.
- Fear addressed: Losing craftsmanship — parameterized prompts encode craft once, reuse many times.

#### Fears addressed

- Encourages explicit inputs and outputs; reduces accidental drift and hidden assumptions.
- Keeps prompts maintainable as systems evolve.

#### 📋 Steps

1. **Create a parameterized prompt**

   Create `.github/prompts/crud-operations.prompt.md`:

   ```markdown
   ---
   description: Generates CRUD operations for a resource
   variables:
     - name: resourceName
       description: "Name of the resource (e.g., Product, User, Order)"
       required: true
     - name: resourceFields
       description: "Comma-separated list of fields"
       required: true
     - name: hasTimestamps
       description: "Whether to include createdAt/updatedAt"
       default: "true"
   ---

   # CRUD Operations for ${resourceName}

   ## Context

   Generate complete CRUD operations for the ${resourceName} resource.

   ## Resource Definition

   - Name: ${resourceName}
   - Fields: ${resourceFields}
   - Timestamps: ${hasTimestamps}

   ## Generate These Components

   ### 1. Model (src/models/${resourceName.toLowerCase()}.js)

   - Define the ${resourceName} class
   - Include validation methods
   - Fields: ${resourceFields}
   ${hasTimestamps === "true" ? "- Include createdAt and updatedAt timestamps" : ""}

   ### 2. Repository (src/repositories/${resourceName.toLowerCase()}-repository.js)

   - findById(id)
   - findAll(filters)
   - create(data)
   - update(id, data)
   - delete(id)

   ### 3. Service (src/services/${resourceName.toLowerCase()}-service.js)

   - get${resourceName}ById(id)
   - list${resourceName}s(filters)
   - create${resourceName}(data)
   - update${resourceName}(id, data)
   - delete${resourceName}(id)
   - Include validation and error handling

   ### 4. Controller (src/controllers/${resourceName.toLowerCase()}-controller.js)

   - GET /${resourceName.toLowerCase()}s
   - GET /${resourceName.toLowerCase()}s/:id
   - POST /${resourceName.toLowerCase()}s
   - PUT /${resourceName.toLowerCase()}s/:id
   - DELETE /${resourceName.toLowerCase()}s/:id

   ## Follow These Patterns

   - Use dependency injection
   - Throw custom errors, don't return null
   - Include JSDoc comments
   - Follow our response format
   ```

2. **Use the template with variables**

   In Copilot Chat:

   ```
   @workspace Use the CRUD prompt template with:
   - resourceName: Product
   - resourceFields: id, name, description, price, category, stockCount
   - hasTimestamps: true

   Generate all four components.
   ```

3. **Create a prompt for different scenarios**

   Create `.github/prompts/migration-script.prompt.md`:

   ````markdown
   ---
   description: Generates a database migration script
   variables:
     - name: migrationName
       description: "Descriptive name for the migration"
     - name: tableName
       description: "Table being modified"
     - name: operation
       description: "create, alter, or drop"
     - name: changes
       description: "Description of changes"
   ---

   # Migration: ${migrationName}

   ## Context

   Generate a database migration for our PostgreSQL database.
   We use node-pg-migrate for migrations.

   ## Migration Details

   - Name: ${migrationName}
   - Table: ${tableName}
   - Operation: ${operation}
   - Changes: ${changes}

   ## File Location

   migrations/${Date.now()}_${migrationName.toLowerCase().replace(/ /g, '\_')}.js

   ## Template

   ```javascript
   exports.up = async (pgm) => {
     // Forward migration
   };

   exports.down = async (pgm) => {
     // Rollback migration
   };
   ```
   ````

   ## Requirements

   - Migration must be reversible
   - Include appropriate indexes
   - Use transactions for data migrations
   - Add comments explaining the change

   ```

   ```

4. **Create a conditional prompt**

   Create `.github/prompts/api-client.prompt.md`:

   ````markdown
   ---
   description: Generates an API client for external service integration
   variables:
     - name: serviceName
       description: "Name of the external service"
     - name: baseUrl
       description: "Base URL of the API"
     - name: authType
       description: "none, apiKey, bearer, or oauth"
     - name: endpoints
       description: "List of endpoints to implement"
   ---

   # API Client: ${serviceName}

   ## Context

   Generate an API client for integrating with ${serviceName}.
   The client should handle authentication, retries, and error mapping.

   ## Configuration

   - Base URL: ${baseUrl}
   - Auth Type: ${authType}

   ## Authentication Setup

   ${authType === "apiKey" ? `

   - Store API key in environment variable: ${serviceName.toUpperCase()}\_API_KEY
   - Send as header: X-API-Key
     `: ""}
   ${authType === "bearer" ?`
   - Store token in environment variable: ${serviceName.toUpperCase()}\_TOKEN
   - Send as header: Authorization: Bearer {token}
     `: ""}
   ${authType === "oauth" ?`
   - Implement OAuth2 client credentials flow
   - Cache and refresh tokens automatically
   - Store client ID and secret in environment variables
     ` : ""}

   ## Endpoints to Implement

   ${endpoints}

   ## Client Structure

   ```javascript
   class ${serviceName}Client {
     constructor(config) {
       this.baseUrl = config.baseUrl || process.env.${serviceName.toUpperCase()}_URL;
       this.timeout = config.timeout || 30000;
       // Auth setup based on authType
     }

     async request(method, path, options = {}) {
       // Implement with retry logic
       // Map errors to our custom error classes
       // Log requests and responses
     }

     // Endpoint methods
   }
   ```
   ````

   ## Error Handling

   Map external errors to our internal error classes:

   - 400 → ValidationError
   - 401/403 → AuthorizationError
   - 404 → NotFoundError
   - 429 → RateLimitError (with retry-after handling)
   - 5xx → ExternalServiceError

   ```

   ```

#### ✅ Success Criteria

- [ ] Created prompts with variable placeholders
- [ ] Successfully used variables when invoking prompts
- [ ] Created conditional content based on variables
- [ ] Prompts produce different output based on input values

#### 📚 Official Docs

- [Creating prompt files](https://docs.github.com/en/copilot/customizing-copilot/adding-repository-custom-instructions-for-github-copilot#creating-prompt-files)

#### 💭 Sarah's Insight

_"These aren't just prompts—they're code generators. Fill in the blanks, get a complete feature. It's like having scaffolding that knows our architecture."_

#### 🚀 Challenge Extension

Create a "meta-prompt" that generates new prompts:

```markdown
Create a prompt template for: {TASK_TYPE}
The prompt should include:

- Context about our project
- Required variables
- Output structure
- Patterns to follow
- Common mistakes to avoid
```

---

### Exercise 4: Prompt Chains — "The Workflow"

#### 📖 The Story

**Priya** has been using individual prompts successfully. But she notices some tasks require multiple prompts in sequence: first generate the model, then the service, then the tests, then the documentation.

_"What if I could chain prompts together?"_ she wonders. _"A workflow that builds a complete feature step by step."_

#### 🎯 Objective

Create prompt chains that build complex features through multiple steps.

#### Why this matters (Priya & David)

- Priya: Breaking complex work into steps makes progress clear and reviewable.
- David: Explicit workflows separate design from generation; easier to audit risks.

#### Fears addressed

- Reduces “black box” prompts; each step is testable and owned.
- Encourages checkpoints where expert judgment can correct AI drift.

#### 📋 Steps

1. **Create a feature workflow prompt**

   Create `.github/prompts/workflows/new-feature.prompt.md`:

   ```markdown
   ---
   description: Complete workflow for adding a new feature
   type: workflow
   steps: 5
   ---

   # Feature Workflow: ${featureName}

   This workflow creates a complete feature with all components.
   Execute each step in order, reviewing output before proceeding.

   ---

   ## Step 1: Data Model

   Create the data model for ${featureName}.

   **Prompt:**
   ```

   Create a ${featureName} model class with:

   - Fields: ${fields}
   - Validation methods for each field
   - A static fromJSON method for deserialization
   - A toJSON method for serialization

   Save to: src/models/${featureName.toLowerCase()}.js

   ```

   **Review checklist:**
   - [ ] All fields are defined
   - [ ] Validation is comprehensive
   - [ ] Serialization handles all fields

   ---

   ## Step 2: Repository

   Create the data access layer.

   **Prompt:**
   ```

   Create a ${featureName}Repository class with:

   - Constructor that receives database connection
   - findById(id) - returns ${featureName} or throws NotFoundError
   - findAll(filters) - returns array with pagination
   - create(data) - returns created ${featureName} with ID
   - update(id, data) - returns updated ${featureName}
   - delete(id) - returns boolean

   Use the ${featureName} model from Step 1.
   Save to: src/repositories/${featureName.toLowerCase()}-repository.js

   ```

   **Review checklist:**
   - [ ] All CRUD operations implemented
   - [ ] Uses parameterized queries
   - [ ] Error handling is correct

   ---

   ## Step 3: Service

   Create the business logic layer.

   **Prompt:**
   ```

   Create a ${featureName}Service class with:

   - Constructor receiving ${featureName}Repository via DI
   - Business methods for: ${businessOperations}
   - Input validation on all methods
   - Proper error handling (throw, don't return null)
   - Logging for important operations

   Import the repository from Step 2.
   Save to: src/services/${featureName.toLowerCase()}-service.js

   ```

   **Review checklist:**
   - [ ] Business logic is in service, not repository
   - [ ] All inputs are validated
   - [ ] Errors are thrown, not returned

   ---

   ## Step 4: Controller & Routes

   Create the HTTP layer.

   **Prompt:**
   ```

   Create a ${featureName}Controller and routes:

   Controller methods:

   - list(req, res) - GET /${featureName.toLowerCase()}s
   - getById(req, res) - GET /${featureName.toLowerCase()}s/:id
   - create(req, res) - POST /${featureName.toLowerCase()}s
   - update(req, res) - PUT /${featureName.toLowerCase()}s/:id
   - delete(req, res) - DELETE /${featureName.toLowerCase()}s/:id

   Include Joi validation schemas for request bodies.

   Save to:

   - src/controllers/${featureName.toLowerCase()}-controller.js
   - src/routes/${featureName.toLowerCase()}.js
   - src/validators/${featureName.toLowerCase()}-validator.js

   ```

   **Review checklist:**
   - [ ] All REST endpoints implemented
   - [ ] Request validation in place
   - [ ] Response format is consistent

   ---

   ## Step 5: Tests

   Create comprehensive tests.

   **Prompt:**
   ```

   Create unit tests for the ${featureName} feature:

   1. ${featureName}.test.js - Model tests
   2. ${featureName}Repository.test.js - Repository tests (mock database)
   3. ${featureName}Service.test.js - Service tests (mock repository)
   4. ${featureName}Controller.test.js - Controller tests (mock service)

   Cover:

   - All happy paths
   - Validation failures
   - Not found scenarios
   - Edge cases

   Save to: src/**tests**/

   ```

   **Review checklist:**
   - [ ] Tests for all layers
   - [ ] Success and error cases covered
   - [ ] Mocking is correct

   ---

   ## Completion Checklist

   - [ ] Model created and reviewed
   - [ ] Repository created and reviewed
   - [ ] Service created and reviewed
   - [ ] Controller and routes created and reviewed
   - [ ] Tests created and passing
   - [ ] Documentation updated
   ```

2. **Execute the workflow**

   Use the workflow step by step:

   ```
   @workspace Execute Step 1 of the new-feature workflow with:
   - featureName: Review
   - fields: id, productId, userId, rating (1-5), comment, createdAt
   ```

   Review the output, then continue:

   ```
   @workspace Execute Step 2 of the new-feature workflow for Review.
   Use the model created in Step 1.
   ```

3. **Create a shorter workflow for common tasks**

   Create `.github/prompts/workflows/add-field.prompt.md`:

   ```markdown
   ---
   description: Workflow for adding a new field to an existing resource
   type: workflow
   steps: 3
   ---

   # Add Field Workflow

   Add ${fieldName} (${fieldType}) to ${resourceName}.

   ## Step 1: Update Model

   Add the field to src/models/${resourceName.toLowerCase()}.js:

   - Add to constructor
   - Add validation
   - Update toJSON/fromJSON

   ## Step 2: Update Database

   Create migration to add column:

   - Column: ${fieldName} (${fieldType})
   - Nullable: ${nullable}
   - Default: ${defaultValue}

   ## Step 3: Update Tests

   Update tests in src/**tests**/${resourceName.toLowerCase()}.test.js:

   - Add tests for new field validation
   - Update existing tests with new field
   ```

#### ✅ Success Criteria

- [ ] Created a multi-step workflow prompt
- [ ] Successfully executed workflow steps in sequence
- [ ] Each step builds on previous steps
- [ ] Review checklists help catch issues

#### 📚 Official Docs

- [Prompt engineering for GitHub Copilot](https://docs.github.com/en/copilot/using-github-copilot/prompt-engineering-for-github-copilot)

#### 💭 Priya's Discovery

_"It's like a recipe. Each step builds on the last. I don't have to remember everything—the workflow guides me through building a complete feature."_

#### 🚀 Challenge Extension

Create workflows for:

- `add-authentication.workflow.md` — Adding auth to an endpoint
- `extract-service.workflow.md` — Refactoring code into a new service
- `add-caching.workflow.md` — Adding Redis caching to a feature

---

## 🛡️ Addressing Fears Directly

- Sarah: Templates with variables encode craft once and prevent quality drift; reviews focus on correctness, not rework.
- Marcus: CRISPE prompts and workflows accelerate business logic while preserving proven patterns.
- Priya: Prompt files and stepwise workflows provide safe scaffolding to learn and deliver.
- David: Architecture lives in prompts; senior judgment designs templates and catches gaps AI won’t.

---

## 📝 Key Takeaways

| Concept              | What You Learned                                             |
| -------------------- | ------------------------------------------------------------ |
| **CRISPE Framework** | Context, Role, Instructions, Specifics, Patterns, Exclusions |
| **Prompt Library**   | Store prompts in `.github/prompts/` for version control      |
| **Variables**        | Make prompts reusable with placeholders                      |
| **Workflows**        | Chain prompts for complex, multi-step tasks                  |
| **Consistency**      | Shared prompts = consistent code across team                 |

### The Mindset Shift

This module transformed our developers' approach:

- **Marcus** learned that precise prompts produce precise code
- **David** built a team toolkit that captures institutional knowledge
- **Sarah** created parameterized templates that generate entire features
- **Priya** discovered workflows that guide complex implementations

The common thread: **Prompts are reusable assets**. Invest in writing good prompts once, and they pay dividends forever.

---

## ➡️ Next Steps

Continue to [Module 4: Agents and Tools](../04-agents-and-tools/README.md) to learn about chat participants, custom agents, and extending Copilot's capabilities.

---

## 🔗 Additional Resources

**Prompt Engineering:**

- [Prompt engineering for GitHub Copilot](https://docs.github.com/en/copilot/using-github-copilot/prompt-engineering-for-github-copilot)
- [Best practices for prompts](https://docs.github.com/en/copilot/using-github-copilot/best-practices-for-using-github-copilot)

**Custom Instructions & Prompts:**

- [Adding repository custom instructions](https://docs.github.com/en/copilot/customizing-copilot/adding-repository-custom-instructions-for-github-copilot)
- [Using prompt files](https://docs.github.com/en/copilot/customizing-copilot/adding-repository-custom-instructions-for-github-copilot#creating-prompt-files)

**General:**

- [GitHub Copilot Documentation](https://docs.github.com/en/copilot)
- [VS Code Copilot Chat](https://code.visualstudio.com/docs/copilot/copilot-chat)
