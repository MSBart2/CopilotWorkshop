# Exercise 2.3: Executing Plans

## 🔨 Exercise

### Exercise 2.3: Executing Plans — "From Roadmap to Reality"

**Lead:** Marcus ⭐ | **Support:** Elena 🤝 | **Time:** 7 min

#### 📖 The Challenge

Marcus has a validated, production-ready plan from Exercise 2.2. David reviewed the architecture, Elena ensured testing was included, and Sarah validated it follows standards. Now comes the moment of truth: executing the plan.

Before plan mode, implementation meant constant context switching: *"Did I remember to add error handling? Which file pattern should I follow? Wait, I need to update tests too—where were those again?"* Integration issues surfaced late, requiring 25 minutes of debugging per feature to resolve conflicts between frontend, backend, and database layers.

With a validated plan, Marcus has a clear roadmap: exactly which files to modify, in what order, with dependencies mapped. Elena knows tests are included from the start, not bolted on later. The team expects implementation to be faster, more focused, and with fewer integration issues.

The question: Does execution match the promise of planning?

#### 🔄 The Transformation

| Before ❌ | After ✨ |
|-----------|----------|
| Implement without clear roadmap → context switch between files → forget error handling → realize tests missing → integration conflicts require 25 min debugging | Follow validated plan step-by-step → clear file paths and order → tests included from start → integration works immediately |
| **Debugging integration issues:** 25 min<br>**Test coverage gaps:** 40%<br>**Forgotten requirements:** 3 per feature | **Debugging integration issues:** 5 min<br>**Test coverage gaps:** 15% (85% coverage)<br>**Forgotten requirements:** 0 per feature |

#### 🎯 Your Goal

Execute the validated character detail feature plan, implementing frontend, backend, database, and test components with confidence.

#### 📋 Steps

1. **Start Plan Execution in Chat**
   
   In the same plan mode chat where you refined the plan (Exercise 2.2), tell the plan agent you're ready to implement:
   
   ```
   Execute the plan. Start with database and backend implementation (steps 1-3), then I'll review before doing frontend.
   ```
   
   **Key options:**
   - **Execute in chat:** AI implements in the current session, you see each change
   - **Background agent:** AI works autonomously in background, you get notifications on progress
   - **Selective execution:** *"Only steps 1 and 2"* or *"Start with the UI"* for phased implementation
   
   For this exercise, choose **execute in chat** with selective execution (database + backend first) so you can observe and verify each step.
   
   **What happens:** Copilot switches from plan mode to implementation mode, using the plan as a detailed specification. You'll see file changes proposed step-by-step.

2. **Review Backend Implementation**
   
   As the AI implements steps 1-3 (database query, API endpoint, error handling), review the changes:
   
   **Verify against plan:**
   - [ ] Database query in `backend/src/database/queries.js` includes character details
   - [ ] API endpoint in `backend/src/routes/characters.js` handles GET `/api/characters/:id`
   - [ ] Error handling returns 404 for invalid IDs (as refined in Exercise 2.2)
   - [ ] Caching layer added (Redis with 5-min TTL, as refined)
   - [ ] Input validation prevents SQL injection
   
   **Verify against standards:**
   - [ ] Uses async/await pattern (from copilot-instructions.md)
   - [ ] Error responses match existing format (from backend/src/routes/shows.js)
   - [ ] Follows folder structure (from ARCHITECTURE.md)
   
   **Check test files:**
   - [ ] `backend/__tests__/routes/characters.test.js` created with tests for success, 404, and edge cases
   
   **What to observe:** Because the plan was validated and included specific requirements (error handling, caching, testing), the implementation includes these from the start—not as afterthoughts. This is the value of planning: complete implementation, not iterative patching.

3. **Execute Frontend Implementation**
   
   Once backend is verified, continue execution:
   
   ```
   Backend looks good. Now implement the frontend (steps 4-6).
   ```
   
   The AI continues with frontend components, routing, and styling. Review:
   
   **Verify frontend implementation:**
   - [ ] Component created at `frontend/src/pages/CharacterDetail.jsx`
   - [ ] Fetches character data from API endpoint you just created
   - [ ] Displays name, role, biography, episode count
   - [ ] Error state UI for 404 or network failures
   - [ ] Loading state while fetching data
   - [ ] Styling matches existing components (from copilot-instructions.md patterns)
   
   **Check frontend tests:**
   - [ ] `frontend/__tests__/pages/CharacterDetail.test.jsx` includes tests for rendering, loading state, error state, data display
   
   **Verify integration:**
   - [ ] Frontend calls correct API endpoint (`/api/characters/:id`)
   - [ ] Error handling on frontend matches backend error responses
   - [ ] No hardcoded IDs or test data left in production code

4. **Verify End-to-End Functionality**
   
   Test the complete feature:
   
   ```bash
   cd fanhub
   docker-compose up
   ```
   
   Then test in browser or with curl:
   
   ```bash
   # Test API endpoint
   curl http://localhost:3001/api/characters/1
   
   # Should return character JSON with name, role, biography, episode count
   # Test 404 handling
   curl http://localhost:3001/api/characters/999
   # Should return 404 error in standard format
   ```
   
   Open the frontend (`http://localhost:3000`), navigate to character detail page, verify:
   - Character data displays correctly
   - Loading state appears while fetching
   - 404 error message appears for invalid character IDs
   - UI matches existing design patterns
   
   Run tests:
   
   ```bash
   # Backend tests
   cd backend && npm test
   
   # Frontend tests
   cd frontend && npm test
   ```
   
   **Success metrics:**
   - All tests pass
   - Feature works end-to-end
   - No integration debugging required (or minimal—under 5 minutes)
   - Test coverage at 85%+ for new code

#### ✅ Success Criteria

- [ ] Database query, API endpoint, and caching implemented per plan
- [ ] Frontend component renders character details with loading and error states
- [ ] All test files created and passing (backend + frontend)
- [ ] Error handling works correctly (404 for invalid IDs)
- [ ] Edge cases handled (empty biographies, zero episodes)
- [ ] End-to-end functionality verified in running application
- [ ] Implementation completed with minimal integration debugging (under 5 minutes)

> 📂 **Compare Your Work**: See example implementation in [`fanhub/`](../../fanhub/) directory—compare your character detail files against the completed structure

#### 📚 Official Docs

- [Planning in VS Code Chat - Execution](https://code.visualstudio.com/docs/copilot/chat/chat-planning#_how-to-plan-a-task) — Options for executing plans (chat, background, selective)
- [Context Engineering Guide](https://code.visualstudio.com/docs/copilot/guides/context-engineering-guide) — How validated plans maintain context through implementation

---

## 🔗 What You Built

**In this exercise:**
- `backend/src/database/queries.js` — Character detail query with optimized database access
- `backend/src/routes/characters.js` — API endpoint with error handling, validation, and caching
- `frontend/src/pages/CharacterDetail.jsx` — React component with loading, error, and data display states
- `backend/__tests__/routes/characters.test.js` — Backend API tests (success, 404, edge cases)
- `frontend/__tests__/pages/CharacterDetail.test.jsx` — Frontend component tests (rendering, states, integration)

**How it compounds:**

| Previous Modules | This Module | Combined Power |
|------------------|-------------|----------------|
| ARCHITECTURE.md (Module 1) | Plan execution | Implementation follows documented architecture automatically |
| copilot-instructions.md (Module 1) | Plan execution | Code follows standards without manual enforcement |
| Exercise 2.1 (Plan generation) | Validated execution | Clear roadmap eliminates guesswork during implementation |
| Exercise 2.2 (Plan validation) | Complete implementation | Tests, error handling, edge cases included from start |

---

## ➡️ Next Module

**[Module 3: Custom Prompts](../03-custom-prompts/README.md)** — Turn repeated planning workflows into reusable prompt templates that capture your team's domain expertise.

> *"I just ran this same planning request three times for different features. Can I save this workflow as a template?"*  
> — Sarah, recognizing the next level of efficiency

---
