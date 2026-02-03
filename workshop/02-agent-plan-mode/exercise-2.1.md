# Exercise 2.1: Invoking Plan Mode

## 🔨 Exercise

### Exercise 2.1: Invoking Plan Mode — "Research Before Code"

**Lead:** Marcus ⭐ | **Support:** Sarah 🤝 | **Time:** 8 min

#### 📖 The Challenge

Marcus has been assigned the character detail page feature—a task that spans frontend components, backend API endpoints, and database queries. He's staring at the FanHub codebase trying to figure out where to start. Which files need to be modified? What dependencies exist between layers? What patterns should he follow?

The old approach: spend 35 minutes manually exploring the codebase, opening files, tracing imports, checking existing patterns, and hoping he doesn't miss critical dependencies. Last sprint, he missed 5 dependencies across 3 features, leading to build failures and integration conflicts that took hours to debug.

Sarah has been watching this pattern across the team: *"We spend more time figuring out what to change than actually changing it. There has to be a better way to map the work before diving in."*

#### 🔄 The Transformation

| Before ❌ | After ✨ |
|-----------|----------|
| Marcus spends 35 minutes manually analyzing: opening 15+ files, tracing import chains, checking API patterns, making notes about what needs to change, second-guessing dependencies | Marcus invokes plan mode: types one request, waits 90 seconds, gets a comprehensive implementation plan with file paths, step ordering, dependencies, and open questions |
| **Planning time:** 35 min<br>**Missed dependencies:** 5 per sprint<br>**Confidence:** Low (guessing) | **Planning time:** 7 min (2 min AI + 5 min review)<br>**Missed dependencies:** 1 per sprint<br>**Confidence:** High (validated plan) |

#### 🎯 Your Goal

Use the plan agent to research and generate a comprehensive implementation plan for the character detail feature.

#### 📋 Steps

1. **Open Copilot Chat in Plan Mode**
   
   Open the Chat view (`Ctrl+Alt+I` or `Cmd+Alt+I` on Mac) and select **Plan** from the agents dropdown at the top. You should see the plan agent icon (📋) indicating you're in planning mode, not default chat mode.
   
   Why plan mode? Because it uses read-only research tools to analyze your codebase comprehensively before proposing any changes. The default agent starts implementing immediately; plan mode separates research from execution.

2. **Request the Character Detail Feature Plan**
   
   In the plan mode chat, enter this request:
   
   ```
   @workspace Implement a character detail page feature:
   - Frontend: Display character name, role, biography, episode count
   - Backend: API endpoint to fetch character by ID with full details
   - Database: Query to retrieve character information efficiently
   - Follow existing FanHub patterns for routing, error handling, and styling
   ```
   
   Press Enter and wait for the plan agent to research your codebase. This takes 60-120 seconds—it's reading ARCHITECTURE.md, copilot-instructions.md, analyzing existing patterns, mapping dependencies, and identifying constraints.
   
   **What to observe:** The plan agent doesn't make any code changes. It's gathering context to propose a research-based implementation plan.

3. **Review the Generated Plan**
   
   Examine the plan output, which should include:
   
   - **Summary**: High-level approach (e.g., "Create React component, Express API endpoint, database query")
   - **Implementation Steps**: Ordered tasks like:
     - Step 1: Create database query in `backend/src/database/queries.js`
     - Step 2: Add API endpoint in `backend/src/routes/characters.js`
     - Step 3: Create frontend component in `frontend/src/pages/CharacterDetail.jsx`
     - (Additional steps for routing, styling, error handling, tests)
   - **Open Questions**: Ambiguities like "Should character biography support rich text formatting?" or "What happens if character ID doesn't exist?"
   - **Dependencies**: What order steps must execute (database before API, API before frontend)
   
   **Note the file paths:** The plan references specific files in your FanHub codebase. It analyzed your project structure from ARCHITECTURE.md and existing code patterns.
   
   **Note the time:** Planning took ~2 minutes of AI research plus your ~5 minutes of review = 7 minutes total, compared to 35 minutes of manual analysis.

4. **Save the Plan (Don't Execute Yet)**
   
   Use the **"Open in Editor"** button to save the plan as a markdown file, or simply copy the plan content into a new file:
   
   ```
   fanhub/docs/FEATURE-CHARACTER-DETAIL.md
   ```
   
   Don't execute the plan yet—that's Exercise 2.3. Right now, focus on seeing how plan mode researches and proposes implementation strategies.
   
   **Why save it?** Plans become documentation: a record of *what* you're building, *why*, and *how* the pieces fit together. Share with team members, reference during implementation, or revisit when requirements change.

#### ✅ Success Criteria

- [ ] Plan agent generates 5-7 implementation steps with specific file paths
- [ ] Plan includes summary, steps, open questions, and dependencies sections
- [ ] File paths reference your actual FanHub codebase structure (e.g., `backend/src/routes/`, `frontend/src/pages/`)
- [ ] Planning completed in ~7 minutes (compared to 35 minutes manual analysis)
- [ ] Plan saved for review and team discussion

> 📂 **Compare Your Work**: [`examples/completed-config/docs/character-detail-challenge.md`](../../examples/completed-config/docs/character-detail-challenge.md)

#### 📚 Official Docs

- [Planning in VS Code Chat](https://code.visualstudio.com/docs/copilot/chat/chat-planning) — How the plan agent researches tasks and generates implementation plans
- [Context Engineering Guide](https://code.visualstudio.com/docs/copilot/guides/context-engineering-guide) — How `@workspace` enables comprehensive codebase analysis

---

## 🔗 What You Built

**In this exercise:**
- `fanhub/docs/FEATURE-CHARACTER-DETAIL.md` — Implementation plan with step-by-step breakdown, dependencies, and open questions

**How it compounds:**

| Previous Modules | This Module | Combined Power |
|------------------|-------------|----------------|
| ARCHITECTURE.md (Module 1) | Plan agent research | Plan understands your tech stack, folder structure, and data flow automatically |
| copilot-instructions.md (Module 1) | Plan agent proposals | Plans follow your coding standards and patterns without explicit reminders |

---

## ➡️ Next Up

**[Exercise 2.2: Validating and Refining Plans](exercise-2.2.md)** — Review the AI-generated plan with David's architectural expertise to catch what AI can't see.

> *"The plan looks solid, but I see three things that could break in production..."*  
> — David, applying 20 years of experience to the AI-generated plan

---
