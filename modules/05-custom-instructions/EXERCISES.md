# Module 5: Custom Instructions — Exercises

> **📖 Full Narrative Experience**: This file contains all exercises in story order, following the FanHub team through Monday afternoon as they create context-aware expertise that automatically activates based on file patterns.

---

## ⏰ Monday 3:00 PM — Context-Aware Expertise

> *"The Character Detail v2 feature touched tests, API routes, Docker configs, and React components. Each file type needed different expertise. Can Copilot switch contexts automatically?"*  
> — Elena, realizing the pattern after reviewing Module 04's output

---

## 📖 The Story So Far

The FanHub team has built solid foundations—and a real feature:

- **Module 1**: Repository-wide instructions in `.github/copilot-instructions.md`
- **Module 2**: Structured planning with agent plan mode for systematic workflows
- **Module 3**: Reusable prompts for common workflows
- **Module 4**: **Character Detail v2**—an agent-implemented feature with episodes, quotes, related characters, and favorites

The Character Detail v2 feature from Module 04 was a breakthrough. The agent created backend endpoints, frontend components, and tests—all following the team's patterns. But Elena notices something as she reviews the generated code.

*"The tests the agent wrote are... fine. But they're inconsistent,"* Elena says, scrolling through `CharacterDetail.test.js`. *"Some mock axios at the module level, some don't. Some test error cases, some skip them entirely."*

Jordan chimes in: *"Same with the Dockerfile updates. The agent followed our patterns from `copilot-instructions.md`, but it didn't know our Docker security requirements—running as non-root, using specific image tags."*

David realizes the pattern: *"Our repository instructions give Copilot general context. But different file types need specialized expertise. Tests need Elena's QA patterns. Dockerfiles need Jordan's security checklist. What if we could create instructions that activate automatically based on what file you're working in?"*

**This module's mission**: Create specialized instruction files that provide contextual expertise based on file patterns—ensuring that every file type in FanHub gets the right expertise automatically.

---

💡 **Golden Thread Continuation**: In this module, you'll create custom instructions that would have made the Character Detail v2 output even better. By the end, your next agent-implemented feature will benefit from specialized context for tests, API routes, infrastructure, and React components.

---

💡 **Plan Mode Integration**: You'll use plan mode to analyze codebase patterns and generate tailored instruction configurations that automatically provide the right context for different file types and project areas.

---

## 🔨 Exercises

### Exercise 5.1: Testing Instructions — "The Character Detail Tests Need Help"

> 🧵 **The Golden Thread Continues**: The agent built Character Detail v2 in Module 04—including tests. But Elena's review reveals inconsistencies that custom instructions could have prevented.

#### 📖 The Story

**Elena** (QA Engineer, 8 years) opens `CharacterDetail.test.js` to review the tests that the agent generated in Module 04. The feature works, but the tests have problems:

- Some tests use `describe/it`, others use `test`
- The API mocking is inconsistent—some tests mock at module level, some inline
- Happy path is covered, but edge cases are spotty
- One test actually tests implementation details (checking if a specific function was called) rather than behavior

*"The agent followed our general coding standards,"* Elena notes, *"but it didn't know our testing standards. Every time I review generated tests, I'm catching the same issues."*

She looks at the test file and sighs. *"I could review every test manually, or..."* Elena pauses. *"I could teach Copilot our testing standards so the next feature comes out right the first time."*

**Supporting Cast**: Priya watches Elena work and learns testing patterns she didn't know before.

#### ❌ The "Before" — What the Agent Generated

Look at the Character Detail tests from Module 04. Without testing-specific instructions, the agent generated:

```javascript
// Inconsistent patterns from Module 04's agent output
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

**The problems:**
- Mixed `test` and `describe/it` patterns
- Mocking approach varies between tests
- Edge cases not covered (no episodes, API errors)
- Tests pass but don't verify error handling behavior

#### 🎯 Objective

Create custom instructions that automatically activate for all test files, ensuring consistent quality for future features.

#### 📋 Steps

1. **Review the Character Detail tests** (if you completed Module 04)
   
   Open the test file created in Module 04 and identify inconsistencies:
   - What testing patterns did the agent use?
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
   // ✅ Good - mock external dependency at module level
   jest.mock('axios');
   import axios from 'axios';
   
   beforeEach(() => {
     jest.clearAllMocks();
   });
   
   // ❌ Bad - inconsistent inline mocking
   it('should fetch data', () => {
     jest.mock('axios');  // Don't mock inside tests
   });
   ```
   
   ## Assertion Patterns
   
   ```javascript
   // ✅ Test behavior, not implementation
   it('should display character episodes when data loads', async () => {
     axios.get.mockResolvedValue({ data: mockCharacterWithEpisodes });
     render(<CharacterDetail id="1" />);
     
     await waitFor(() => {
       expect(screen.getByText('Episode 1')).toBeInTheDocument();
     });
   });
   
   // ❌ Don't test implementation details
   it('should call fetchCharacter once', async () => {
     await getCharacter(1);
     expect(fetchCharacter).toHaveBeenCalledTimes(1);  // Brittle!
   });
   ```
   
   ## Error Testing (Required for FanHub)
   
   ```javascript
   // Always test error scenarios for data-fetching components
   it('should show error message when character not found', async () => {
     axios.get.mockRejectedValue({ response: { status: 404 } });
     render(<CharacterDetail id="999" />);
     
     await waitFor(() => {
       expect(screen.getByText(/not found/i)).toBeInTheDocument();
     });
   });
   
   it('should show error message when network fails', async () => {
     axios.get.mockRejectedValue(new Error('Network error'));
     render(<CharacterDetail id="1" />);
     
     await waitFor(() => {
       expect(screen.getByText(/error/i)).toBeInTheDocument();
     });
   });
   ```
   
   ## Test Data
   
   - Use factories or fixtures for complex test data
   - Create mock data that matches FanHub's data structure
   - Avoid magic numbers—use named constants
   - Each test should set up its own data (no shared mutable state)
   
   ## Coverage Expectations
   
   - Aim for meaningful coverage, not 100%
   - Cover all public API methods
   - Cover all error branches
   - Skip testing trivial getters/setters
   ````

4. **Test the instructions with Character Detail scenarios**
   
   Open a test file (or create `CharacterDetail.test.js`) and ask:
   
   ```
   Add tests for the CharacterDetail component that cover:
   - Character with no episodes (empty array)
   - Character not found (404 error)
   - Network failure during fetch
   - Character with very long biography (edge case)
   ```
   
   Observe: The generated tests should follow your specified patterns—`describe/it` structure, module-level mocking, error scenarios included.

5. **Compare to Module 04's output**
   
   Notice how the new tests are more consistent than what the agent originally generated.

#### ✅ Success Criteria

- [ ] Created `.github/instructions/testing.instructions.md`
- [ ] File uses correct `applyTo` pattern for test files
- [ ] Generated tests follow `describe/it` structure
- [ ] Generated tests include error case coverage (404, network failure)
- [ ] Mocking is consistent (module-level with beforeEach reset)
- [ ] Tests cover FanHub-specific edge cases (empty episodes, etc.)

#### ✨ The "After" — The Improved Experience

**Before (Module 04)**: Agent generated tests with inconsistent patterns  
**After**: Every test file gets Elena's QA expertise automatically

**Time saved per test file**: 10-15 minutes of review and revision  
**Consistency gain**: 100%—all tests follow the same structure

**The Golden Thread payoff**: If you had these instructions before Module 04, the Character Detail tests would have been consistent from the start.

#### 📚 Official Docs

- [GitHub Docs: Custom Instructions](https://docs.github.com/en/copilot/customizing-copilot/adding-repository-custom-instructions)
- [VS Code: Custom Instructions](https://code.visualstudio.com/docs/copilot/copilot-customization)

#### 💭 Elena's Relief

*"I reviewed the Character Detail tests from Module 04 and found a dozen inconsistencies. With these instructions, the NEXT feature's tests will be right from the start. I'm not repeating myself anymore."*

#### 🚀 Challenge Extension

Regenerate the Character Detail tests from Module 04 with your new testing instructions active. Compare the output to the original—what's different?

---

### Exercise 5.2: API Route Instructions — "The Quote of the Day Endpoint"

> 🧵 **The Golden Thread Continues**: Character Detail v2 added a `/characters/:id/full` endpoint. Now Rafael wants a "Quote of the Day" feature—and David notices the quotes routes don't follow REST conventions consistently.

#### 📖 The Story

**Rafael** (Product Manager, 10 years) has been watching user feedback on Character Detail v2. Users love the character quotes feature. Now he wants to expand it.

*"What if we had a 'Quote of the Day' on the homepage?"* Rafael suggests. *"Random quote from any show, with a link to the character who said it. Great for engagement."*

**David** (Staff Engineer, 20 years) opens `routes/quotes.js` to assess the work. He frowns.

*"The quotes endpoint we added in Module 04 returns data, but look at this..."* David points to the code. *"No consistent response format. No proper error codes. When a quote isn't found, it returns a 200 with an empty object instead of a 404."*

*"The agent followed our general instructions,"* David explains, *"but API routes need specialized REST expertise. Different HTTP methods, proper status codes, consistent error responses. I've been reviewing routes for 20 years—let's encode that knowledge."*

**Supporting Cast**: Marcus learns REST conventions by seeing David's patterns applied automatically.

#### ❌ The "Before" — Inconsistent API Patterns

Look at the quotes route from Module 04 (or the existing `routes/quotes.js`):

```javascript
// Inconsistent patterns in current quotes.js
router.get('/', async (req, res) => {
  try {
    const quotes = await db.getQuotes();
    res.json(quotes);  // No wrapper, no meta
  } catch (err) {
    res.status(500).send('Error');  // Inconsistent error format
  }
});

router.get('/:id', async (req, res) => {
  const quote = await db.getQuoteById(req.params.id);
  if (!quote) {
    res.json({});  // Returns 200 with empty object—wrong!
  }
  res.json(quote);
});
```

**The problems:**
- Inconsistent response format (sometimes wrapped, sometimes not)
- Wrong status codes (200 for not found)
- Inconsistent error handling
- Missing input validation
- No JSDoc documentation

#### 🎯 Objective

Create path-based instructions that provide REST API expertise for route files, then use them to build the Quote of the Day feature properly.

#### 📋 Steps

1. **Create API route instructions**
   
   Create: `.github/instructions/api-routes.instructions.md`
   
   ````markdown
   ---
   applyTo: "**/routes/**"
   ---
   
   # API Route Standards for FanHub
   
   When generating or modifying files under `routes/`, follow RESTful conventions.
   
   ## Route Structure
   
   ```javascript
   // Express route pattern
   router.get('/:id', authenticate, validate(schema), asyncHandler(controller));
   ```
   
   Every route should have:
   1. HTTP method matching the operation (GET=read, POST=create, PUT=replace, PATCH=update, DELETE=remove)
   2. Authentication middleware where required
   3. Input validation middleware
   4. Async error handling wrapper
   
   ## HTTP Status Codes
   
   Use appropriate status codes:
   
   | Scenario | Code | Response |
   |----------|------|----------|
   | Success (with data) | 200 | `{ data: ... }` |
   | Created | 201 | `{ data: ..., id: ... }` |
   | No Content | 204 | (empty) |
   | Bad Request | 400 | `{ error: 'Validation failed', details: [...] }` |
   | Unauthorized | 401 | `{ error: 'Authentication required' }` |
   | Forbidden | 403 | `{ error: 'Insufficient permissions' }` |
   | Not Found | 404 | `{ error: 'Resource not found' }` |
   | Conflict | 409 | `{ error: 'Resource already exists' }` |
   | Server Error | 500 | `{ error: 'Internal server error' }` |
   
   ## Response Format (FanHub Standard)
   
   Always use consistent response structure:
   
   ```javascript
   // Success
   res.status(200).json({
     success: true,
     data: result,
     meta: { count, page, totalPages }  // for lists
   });
   
   // Error
   res.status(404).json({
     success: false,
     error: 'Quote not found',
     code: 'NOT_FOUND'
   });
   ```
   
   ## FanHub-Specific Patterns
   
   For character/episode/show/quote endpoints:
   - Always return 404 (not empty object) when resource not found
   - Include related data IDs for client-side linking
   - Support `?include=character` style query params for embedded data
   
   ```javascript
   // Quote of the Day example
   router.get('/random', asyncHandler(async (req, res) => {
     const quote = await db.getRandomQuote();
     if (!quote) {
       return res.status(404).json({
         success: false,
         error: 'No quotes available',
         code: 'NOT_FOUND'
       });
     }
     res.json({
       success: true,
       data: {
         ...quote,
         characterId: quote.character_id,  // For linking to character
         showId: quote.show_id  // For linking to show
       }
     });
   }));
   ```
   
   ## Input Validation
   
   Validate all inputs before processing:
   
   ```javascript
   // Validate ID parameters
   router.get('/:id', asyncHandler(async (req, res) => {
     const id = parseInt(req.params.id, 10);
     if (isNaN(id) || id < 1) {
       return res.status(400).json({
         success: false,
         error: 'Invalid ID format',
         code: 'VALIDATION_ERROR'
       });
     }
     // ... continue with valid ID
   }));
   ```
   
   ## Error Handling
   
   Use async wrapper and custom errors:
   
   ```javascript
   // asyncHandler catches async errors
   const asyncHandler = (fn) => (req, res, next) =>
     Promise.resolve(fn(req, res, next)).catch(next);
   
   // Custom errors for specific cases
   throw new NotFoundError('Quote not found');
   throw new ValidationError('Invalid quote ID format');
   ```
   
   ## Documentation
   
   Include JSDoc comments for API routes:
   
   ```javascript
   /**
    * Get random quote (Quote of the Day)
    * @route GET /api/quotes/random
    * @returns {Object} Random quote with character and show info
    * @throws {NotFoundError} No quotes available
    */
   ```
   ````

2. **Build the Quote of the Day endpoint**
   
   With instructions active, open `routes/quotes.js` and ask:
   
   ```
   Add a "Quote of the Day" endpoint:
   - GET /api/quotes/random - returns a random quote
   - Include the character name and show title in the response
   - Handle the case where no quotes exist
   - Follow our REST conventions
   ```
   
   Observe: The generated code should use proper status codes, consistent response format, and error handling.

3. **Verify standards are followed**
   
   Check that generated code:
   - Uses 200 for success, 404 for not found
   - Returns consistent response format (`{ success, data }`)
   - Has error handling with proper codes
   - Includes JSDoc documentation
   - Validates input parameters

4. **Test the improvement**
   
   Compare the new endpoint to the existing quotes routes. Notice the consistency difference.

#### ✅ Success Criteria

- [ ] Created `.github/instructions/api-routes.instructions.md`
- [ ] Path pattern targets `**/routes/**`
- [ ] Built Quote of the Day endpoint (`GET /api/quotes/random`)
- [ ] Generated routes use correct HTTP status codes (404 for not found)
- [ ] Response format is consistent (`{ success, data }`)
- [ ] Input validation is included
- [ ] Error handling follows the FanHub pattern

#### ✨ The "After" — The Improved Experience

**Before (Module 04)**: API endpoints with inconsistent patterns  
**After**: Every route file gets David's REST expertise automatically

**Consistency gain**: 100%—every API route follows the same conventions  
**Review time saved**: Routes pass review on first try

**The Golden Thread payoff**: The Quote of the Day feature follows patterns that would have improved the `/characters/:id/full` endpoint from Module 04.

#### 📚 Official Docs

- [GitHub Docs: Custom Instructions](https://docs.github.com/en/copilot/customizing-copilot/adding-repository-custom-instructions)

#### 💭 David's Satisfaction

*"I've reviewed thousands of API routes in my career. 'Use 404 for not found, not 200 with empty object.' Now that knowledge is encoded. The Quote of the Day endpoint came out perfect on the first try."*

#### 🚀 Challenge Extension

Look at the `/characters/:id/full` endpoint from Module 04. Does it follow the REST conventions in your new instructions? What would you change?

---

### Exercise 5.3: Infrastructure Instructions — "Shipping Character Detail v2"

> 🧵 **The Golden Thread Continues**: The Character Detail v2 feature is ready—but now Jordan needs to deploy it. The existing Dockerfile hasn't been updated since the contractor left, and it has security issues.

#### 📖 The Story

**Jordan** (Platform Engineer, 12 years) gets the green light to deploy Character Detail v2 to staging. He opens the project's Dockerfile and groans.

*"This Dockerfile is from the contractor days,"* Jordan explains. *"It runs as root, uses the `latest` tag, no health check, no multi-stage build. It'll work, but it's a security incident waiting to happen."*

The team realizes they need to fix the Dockerfile before deploying their new feature. But Jordan has a broader concern:

*"I can fix this manually, but what about next time? When the agent generates infrastructure changes, it won't know our security requirements. I want Copilot to enforce our infra patterns automatically."*

**Supporting Cast**: Marcus learns Docker security patterns by watching Jordan's instructions in action.

#### ❌ The "Before" — Insecure Infrastructure

Look at the current `fanhub/backend/Dockerfile`:

```dockerfile
# Contractor's original Dockerfile - security issues
FROM node:latest

WORKDIR /app
COPY . .
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]
```

**The problems:**
- Uses `latest` tag (unpredictable, no version pinning)
- Runs as root user (security risk)
- No multi-stage build (image bloat)
- No health check (orchestrator can't monitor)
- Copies everything including dev dependencies
- No `.dockerignore` awareness

#### 🎯 Objective

Create specialized instructions for infrastructure and deployment files, then use them to fix the Dockerfile for Character Detail v2 deployment.

#### 📋 Steps

1. **Create infrastructure instructions**
   
   Create: `.github/instructions/infrastructure.instructions.md`
   
   ````markdown
   ---
   applyTo:
     - "Dockerfile*"
     - "docker-compose*.yml"
     - ".github/workflows/**"
     - "**/terraform/**"
     - "**/k8s/**"
     - "**/*.tf"
   ---
   
   # Infrastructure & DevOps Standards for FanHub
   
   When generating or modifying infrastructure files, follow these security and operational best practices.
   
   ## Dockerfile Best Practices
   
   ### Security (Required)
   
   ```dockerfile
   # ✅ Use specific version tags, not 'latest'
   FROM node:20.10-alpine
   
   # ✅ Run as non-root user
   RUN addgroup -S appgroup && adduser -S appuser -G appgroup
   USER appuser
   
   # ✅ Use multi-stage builds to minimize image size
   FROM node:20.10-alpine AS builder
   WORKDIR /app
   COPY package*.json ./
   RUN npm ci
   COPY . .
   RUN npm run build
   
   FROM node:20.10-alpine AS runtime
   RUN addgroup -S appgroup && adduser -S appuser -G appgroup
   WORKDIR /app
   COPY --from=builder /app/dist ./dist
   COPY --from=builder /app/node_modules ./node_modules
   USER appuser
   ```
   
   ### Optimization
   
   ```dockerfile
   # ✅ Order layers from least to most frequently changed
   COPY package*.json ./
   RUN npm ci --only=production
   COPY . .
   
   # ✅ Use .dockerignore to exclude unnecessary files
   # ✅ Combine RUN commands to reduce layers
   RUN apt-get update && apt-get install -y \
       package1 \
       package2 \
       && rm -rf /var/lib/apt/lists/*
   ```
   
   ### Health Checks (Required for FanHub)
   
   ```dockerfile
   # Always include health checks for orchestrator compatibility
   HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
     CMD curl -f http://localhost:3000/health || exit 1
   ```
   
   ## GitHub Actions Patterns
   
   ### Workflow Structure
   
   ```yaml
   name: Descriptive Workflow Name
   
   on:
     push:
       branches: [main]
     pull_request:
       branches: [main]
   
   concurrency:
     group: ${{ github.workflow }}-${{ github.ref }}
     cancel-in-progress: true
   
   jobs:
     job-name:
       runs-on: ubuntu-latest
       timeout-minutes: 15  # Always set timeout
       
       steps:
         - uses: actions/checkout@v4
         
         - name: Setup Node.js
           uses: actions/setup-node@v4
           with:
             node-version: '20'
             cache: 'npm'
   ```
   
   ### Security
   
   ```yaml
   # ✅ Pin action versions to SHA for security
   - uses: actions/checkout@b4ffde65f46336ab88eb53be808477a3936bae11
   
   # ✅ Minimize permissions
   permissions:
     contents: read
     pull-requests: write
   
   # ✅ Use secrets, never hardcode
   env:
     API_KEY: ${{ secrets.API_KEY }}
   ```
   
   ## Environment Variables
   
   - Never commit secrets to repository
   - Use `.env.example` for documentation
   - Different configs for dev/staging/prod
   - Validate required env vars at startup
   
   ## Security Checklist
   
   Before merging infrastructure changes:
   - [ ] No secrets in code
   - [ ] Containers run as non-root
   - [ ] Images use specific versions (no `latest`)
   - [ ] Permissions are minimized
   - [ ] Health checks are defined
   - [ ] Timeouts are configured
   - [ ] Resources are tagged
   ````

2. **Fix the Dockerfile for deployment**
   
   With instructions active, open `fanhub/backend/Dockerfile` and ask:
   
   ```
   Rewrite this Dockerfile to follow our security and optimization standards:
   - Use a specific Node.js version
   - Run as non-root user  
   - Use multi-stage build
   - Add health check
   - Optimize layer caching
   ```
   
   Observe: The generated Dockerfile should follow all your security patterns.

3. **Generate a deployment workflow**
   
   Ask Copilot to create a GitHub Actions workflow:
   
   ```
   Create a GitHub Actions workflow at .github/workflows/deploy-staging.yml that:
   - Triggers on push to main
   - Builds the Docker image
   - Pushes to container registry
   - Deploys to staging environment
   - Follows our security patterns
   ```
   
   Verify: Concurrency, timeout, pinned actions, secrets usage.

4. **Verify standards are followed**
   
   Check that generated infrastructure:
   - Uses specific version tags (not `latest`)
   - Runs containers as non-root
   - Includes health checks
   - Has workflow timeouts
   - Uses secrets properly

#### ✅ Success Criteria

- [ ] Created `.github/instructions/infrastructure.instructions.md`
- [ ] `applyTo` includes Dockerfile, workflows, terraform patterns
- [ ] Updated Dockerfile runs as non-root user
- [ ] Dockerfile uses specific version tags
- [ ] Health check is included
- [ ] GitHub Actions workflow has timeouts and concurrency
- [ ] No hardcoded secrets in generated code

#### ✨ The "After" — The Improved Experience

**Before**: Contractor's Dockerfile with security issues  
**After**: Production-ready infrastructure that follows Jordan's 12 years of best practices

**Security improvement**: Infrastructure files are secure by default  
**Review time saved**: Infrastructure passes security review on first try

**The Golden Thread payoff**: Character Detail v2 deploys with proper security—and every future feature gets the same treatment.

#### 📚 Official Docs

- [GitHub Docs: Custom Instructions](https://docs.github.com/en/copilot/customizing-copilot/adding-repository-custom-instructions)
- [Docker Security Best Practices](https://docs.docker.com/develop/security-best-practices/)
- [GitHub Actions Security Hardening](https://docs.github.com/en/actions/security-guides/security-hardening-for-github-actions)

#### 💭 Jordan's Relief

*"The contractor's Dockerfile was a ticking time bomb. Now it's secure, optimized, and every future infrastructure change will follow these patterns. I'm not the bottleneck for every security review anymore."*

#### 🚀 Challenge Extension

Create a `docker-compose.yml` for local development that includes the backend, frontend, and a PostgreSQL database. Does it follow your infrastructure instructions?

---

### Exercise 5.4: React Component Instructions — "The Episode Appearances Component"

> 🧵 **The Golden Thread Continues**: Character Detail v2 shows episode appearances—but the component structure is inconsistent. Priya builds the `EpisodeAppearances` component properly with React instructions.

#### 📖 The Story

**Priya** (Junior Developer, 1 year) is excited. The Character Detail v2 feature from Module 04 is live, but users want more—they want to click on an episode to see details. She's been assigned to build the `EpisodeAppearances` component that makes episodes clickable.

But first, she reviews the existing components the agent generated in Module 04.

*"Some components handle loading states, some don't,"* Priya notices. *"Some have TypeScript types, some use `any`. The CharacterDetail component is good, but the EpisodeList inside it is... different."*

**David** (Staff Engineer, 20 years) sees an opportunity: *"You've been learning React best practices, Priya. What if you captured those patterns in instructions? Then every component—including the one you're about to build—follows the same standards."*

Priya realizes: the patterns she's learned aren't just for her code. They can help the whole team—and the AI.

**Supporting Cast**: Elena reviews Priya's component for testing patterns compatibility.

#### ❌ The "Before" — Inconsistent Components

Look at the components from Module 04:

```jsx
// Inconsistent patterns from agent-generated components
const CharacterDetail = ({ id }) => {  // No TypeScript types
  const [data, setData] = useState();  // No initial state type
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetchCharacter(id).then(setData);  // No error handling!
  }, []);  // Missing dependency
  
  if (loading) return <div>Loading...</div>;  // Basic, no spinner
  
  return (
    <div style={{ padding: '20px' }}>  {/* Inline styles */}
      <h1>{data.name}</h1>
      {/* What if data.episodes is undefined? */}
      {data.episodes.map(ep => <div key={ep.id}>{ep.title}</div>)}
    </div>
  );
};
```

**The problems:**
- No TypeScript interfaces
- Missing error handling
- Incomplete useEffect dependencies
- Inline styles instead of styled-components
- No empty state handling
- No loading component (just text)

#### 🎯 Objective

Create instructions that provide React/TypeScript expertise for component files, then use them to build the `EpisodeAppearances` component properly.

#### 📋 Steps

1. **Create component instructions**
   
   Create: `.github/instructions/react-components.instructions.md`
   
   ````markdown
   ---
   applyTo:
     - "**/*.tsx"
     - "**/*.jsx"
     - "**/components/**"
   ---
   
   # React Component Standards for FanHub
   
   When generating or modifying React components, follow these patterns.
   
   ## Component Structure
   
   ```typescript
   // 1. Imports (external, then internal, then styles)
   import React, { useState, useEffect, useCallback } from 'react';
   import { Link } from 'react-router-dom';
   
   import { LoadingSpinner } from '@/components/ui/LoadingSpinner';
   import { ErrorMessage } from '@/components/ui/ErrorMessage';
   import { useCharacterEpisodes } from '@/hooks/useCharacterEpisodes';
   
   import { Container, EpisodeCard, EpisodeTitle } from './EpisodeAppearances.styles';
   
   // 2. Types/Interfaces (required for FanHub)
   interface Episode {
     id: number;
     title: string;
     seasonNumber: number;
     episodeNumber: number;
     airDate: string;
   }
   
   interface EpisodeAppearancesProps {
     characterId: number;
     showId: number;
     onEpisodeClick?: (episodeId: number) => void;
     className?: string;
   }
   
   // 3. Component (always function, never class)
   export function EpisodeAppearances({ 
     characterId, 
     showId, 
     onEpisodeClick,
     className 
   }: EpisodeAppearancesProps) {
     // 4. Hooks first (state, context, custom hooks)
     const { data: episodes, isLoading, error, refetch } = useCharacterEpisodes(characterId);
     
     // 5. Callbacks (memoized when passed to children)
     const handleEpisodeClick = useCallback((episodeId: number) => {
       onEpisodeClick?.(episodeId);
     }, [onEpisodeClick]);
     
     // 6. Early returns for loading/error/empty states
     if (isLoading) return <LoadingSpinner />;
     if (error) return <ErrorMessage error={error} onRetry={refetch} />;
     if (!episodes?.length) return <EmptyState message="No episodes found" />;
     
     // 7. Main render
     return (
       <Container className={className}>
         {episodes.map((episode) => (
           <EpisodeCard 
             key={episode.id}
             onClick={() => handleEpisodeClick(episode.id)}
           >
             <EpisodeTitle>
               S{episode.seasonNumber}E{episode.episodeNumber}: {episode.title}
             </EpisodeTitle>
           </EpisodeCard>
         ))}
       </Container>
     );
   }
   ```
   
   ## Hook Rules
   
   - Hooks must be called at the top level (not in conditions/loops)
   - Custom hooks should start with `use`
   - Always include ALL dependencies in useEffect/useCallback/useMemo
   - Prefer `useCallback` for event handlers passed to children
   - Use `useMemo` only for expensive calculations
   
   ## TypeScript Patterns (Required)
   
   ```typescript
   // ✅ Define explicit prop types
   interface CharacterCardProps {
     character: Character;
     variant: 'compact' | 'detailed';
     onFavoriteToggle?: (id: number) => void;
     className?: string;
   }
   
   // ✅ Use utility types
   type CharacterSummary = Pick<Character, 'id' | 'name' | 'imageUrl'>;
   
   // ❌ NEVER use any
   // props: any ← This will fail code review
   ```
   
   ## Styling (FanHub Standard)
   
   - Use styled-components for component styles
   - NO inline styles (`style={{ }}`)
   - Theme values via `${props => props.theme.colors.primary}`
   - Support `className` prop for customization
   - Use semantic HTML elements
   
   ## Loading, Error & Empty States (Required)
   
   Every component that fetches data MUST handle:
   
   ```typescript
   // ✅ Required pattern for data-fetching components
   if (isLoading) return <LoadingSpinner />;
   if (error) return <ErrorMessage error={error} onRetry={refetch} />;
   if (!data?.length) return <EmptyState message="No episodes found" />;
   
   // Then render the happy path
   return <Container>...</Container>;
   ```
   
   ## Accessibility
   
   - Buttons must have accessible names
   - Images must have alt text
   - Interactive elements must be keyboard accessible
   - Use semantic HTML (nav, main, article, section)
   - Include aria-labels where needed
   - Clickable non-button elements need `role="button"` and keyboard handling
   ````

2. **Build the EpisodeAppearances component**
   
   With instructions active, ask Copilot:
   
   ```
   Create an EpisodeAppearances component for the Character Detail page that:
   - Shows all episodes a character appears in
   - Each episode is clickable (links to episode detail page)
   - Shows season/episode number and title
   - Handles loading, error, and empty states
   - Uses styled-components
   - Is fully typed with TypeScript
   ```
   
   Observe: The generated component should follow all your React patterns—function component, TypeScript interfaces, loading/error/empty states, styled-components.

3. **Verify patterns are followed**
   
   Check that the generated component:
   - Uses function syntax (not class)
   - Has TypeScript interfaces for props and data
   - Has all useEffect dependencies listed
   - Handles loading, error, AND empty states
   - Uses styled-components (no inline styles)
   - Has proper accessibility attributes

4. **Integrate with Character Detail**
   
   The EpisodeAppearances component should plug into the CharacterDetail page from Module 04:
   
   ```
   Show me how to integrate EpisodeAppearances into the CharacterDetail component
   ```

#### ✅ Success Criteria

- [ ] Created `.github/instructions/react-components.instructions.md`
- [ ] Applies to `.tsx`, `.jsx`, and `components/**`
- [ ] Built `EpisodeAppearances` component
- [ ] Component is function-based (not class)
- [ ] TypeScript types are explicit (no `any`)
- [ ] Loading, error, AND empty states are handled
- [ ] Uses styled-components (no inline styles)
- [ ] Hooks follow rules of hooks (all dependencies listed)

#### ✨ The "After" — The Improved Experience

**Before (Module 04)**: Agent-generated components with inconsistent patterns  
**After**: Every component follows Priya's learned best practices automatically

**Consistency gain**: All components handle loading/error/empty states  
**Code review time**: Components pass review on first try

**The Golden Thread payoff**: The EpisodeAppearances component completes the Character Detail v2 feature—and every future component will be consistent.

#### 📚 Official Docs

- [GitHub Docs: Custom Instructions](https://docs.github.com/en/copilot/customizing-copilot/adding-repository-custom-instructions)
- [React Documentation](https://react.dev/)

#### 💭 Priya's Growth

*"A year ago I didn't know these patterns. Now they're encoded in our repo, helping the whole team—including the AI. My learning became team knowledge."*

**David's validation**: *"Priya, this is exactly what senior developers do. You didn't just learn patterns—you scaled them across the team. That's leadership."*

#### 🚀 Challenge Extension

Look at the CharacterDetail component from Module 04. Does it follow your new React instructions? What would you change to make it consistent?

---

## 🔗 Compounding Value

> 🧵 **The Golden Thread Complete**: Every instruction file you created in this module would have improved the Character Detail v2 output from Module 04—and will improve every future feature.

**What we created in this module:**

```
.github/instructions/
├── testing.instructions.md          # Elena's QA expertise
├── api-routes.instructions.md       # David's REST patterns  
├── infrastructure.instructions.md   # Jordan's DevOps knowledge
└── react-components.instructions.md # Priya's React standards
```

**How instructions combine with Character Detail:**

When editing `CharacterDetail.test.jsx`:
1. Repository instructions (always) ✓
2. React component instructions (`**/*.jsx`) ✓
3. Testing instructions (`**/*.test.jsx`) ✓

Copilot gets **combined context** from all matching files.

**The Module 04 → Module 05 connection:**

| Module 04 Output | Module 05 Improvement |
|------------------|----------------------|
| CharacterDetail tests (inconsistent) | Testing instructions ensure consistency |
| `/characters/:id/full` endpoint | API route instructions enforce REST patterns |
| Contractor's Dockerfile | Infrastructure instructions fix security |
| Agent-generated components | React instructions ensure proper patterns |

**The next feature will be better**: When you use agent mode again (Module 06+), every generated file will benefit from specialized instructions.

---

## 🧠 Mindful Moment: Institutional Knowledge

Custom instructions capture **institutional knowledge**:

- Elena's years of QA experience → `testing.instructions.md`
- David's architectural patterns → `api-routes.instructions.md`
- Jordan's security practices → `infrastructure.instructions.md`
- Priya's React learning → `react-components.instructions.md`

This knowledge doesn't leave when people do. It's **codified and shared**.

**The golden thread lesson**: Context compounds. Every instruction file you create makes AI assistance better for every file type—not just once, but forever.

---

## 🎭 Behind the Scenes: How Custom Instructions Work

### Instruction Loading

When you open a file, VS Code:
1. Checks `.github/copilot-instructions.md` (always loads)
2. Scans `.github/instructions/*.instructions.md`
3. Matches file path against each `applyTo` pattern
4. Loads all matching instruction files
5. Combines them into the context

### Pattern Matching

Patterns use glob syntax:
- `*` matches any characters except `/`
- `**` matches any characters including `/`
- `{a,b}` matches either `a` or `b`
- `[abc]` matches any character in brackets

### Debugging Tips

If instructions don't seem to activate:
1. Check the file path matches the pattern exactly
2. Ensure the front matter syntax is correct (YAML)
3. Verify the file is named `*.instructions.md`
4. Check for typos in the `applyTo` pattern

---

## 🏁 Module Summary

### The Golden Thread Journey

| Module | What We Built | What We Learned |
|--------|--------------|-----------------|
| **00** | Nothing—frustration | AI without context = chaos |
| **01** | Architecture + repo instructions | General context improves everything |
| **02** | Plan mode workflow | Thinking before doing |
| **03** | Prompt library | Reusable patterns |
| **04** | **Character Detail v2** (agent) | Agents + context = powerful |
| **05** | **Custom instructions** | Specialized context per file type |

### Key Transformations

| Persona | Before | After |
|---------|--------|-------|
| **Elena** | Reviewing inconsistent agent-generated tests | Testing standards auto-enforced |
| **David** | REST expertise locked in his head | API routes get REST context automatically |
| **Jordan** | Security gaps in contractor's Dockerfile | Infrastructure secure by default |
| **Priya** | Inconsistent component patterns | React best practices built-in |

### Artifacts Created

```
.github/instructions/
├── testing.instructions.md          # Elena's QA expertise
├── api-routes.instructions.md       # David's REST patterns
├── infrastructure.instructions.md   # Jordan's DevOps knowledge
└── react-components.instructions.md # Priya's React standards

backend/
├── routes/quotes.js                 # Quote of the Day endpoint (updated)
├── Dockerfile                       # Security-hardened (updated)

frontend/
└── components/EpisodeAppearances/   # New component for Character Detail
```

### Time Investment → Value Gained

| Exercise | Time | Golden Thread Connection | Ongoing Value |
|----------|------|-------------------------|---------------|
| 5.1 Testing | 20 min | Fix Character Detail tests | 10-15 min saved per test file |
| 5.2 API Routes | 25 min | Quote of the Day feature | REST compliance automatic |
| 5.3 Infrastructure | 25 min | Deploy Character Detail v2 | Security patterns built-in |
| 5.4 Components | 25 min | EpisodeAppearances component | React best practices enforced |

### What's Next?

Your custom instructions are ready. In **Module 06: Agent Skills**, you'll see how these instructions combine with specialized skills to create even more powerful AI assistance—and the golden thread continues as you extend Character Detail v2 with advanced features.
