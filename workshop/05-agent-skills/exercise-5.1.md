# Exercise 5.1: API Endpoint Design Skill

## 🔨 Exercise

### Exercise 5.1: API Endpoint Design Skill — "From Repeated Explanations to Specialized Capability"

**Lead:** Sarah ⭐ | **Support:** David 🤝 | **Time:** 12 min

#### 📖 The Challenge

It's 2:45 PM on Monday. Sarah is reviewing Marcus's pull request for a new API endpoint that fetches episode ratings. The code works, but it doesn't follow FanHub's REST conventions: the response format doesn't match the OpenAPI schema, error codes are non-standard, and there's no input validation against the TV show data model.

Sarah spends 12 minutes leaving review comments: "Use this response structure from our schema," "Return 404 with this error format," "Validate season/episode numbers exist in our data model." Marcus makes the changes, but next sprint when Elena adds another endpoint, the same issues appear. The knowledge exists in Sarah's head and in a 200-line OpenAPI spec file, but it's not accessible to Copilot when generating new endpoints.

David realizes: *"Instructions can tell Copilot to 'follow REST conventions,' but they can't teach it our specific schema, show example endpoints, or provide a validation checklist. We need a skill that combines instructions + schema file + examples so Copilot generates spec-compliant endpoints from the start."*

#### 🔄 The Transformation

| Before ❌ | After ✨ |
|-----------|----------|
| Marcus generates API endpoint using general REST patterns. Doesn't match FanHub's OpenAPI schema: wrong response format, non-standard error codes, missing validation. Sarah spends 12 minutes reviewing, leaving comments explaining schema requirements. Marcus spends 8 minutes reworking endpoint to match spec. Total: 20 minutes per endpoint, schema mismatches in 100% of new endpoints. | Marcus asks Copilot to generate API endpoint. `api-endpoint-design` skill activates, loading instructions + OpenAPI schema + example endpoints. Copilot generates spec-compliant endpoint in 2 minutes: correct response format from schema, standard error codes from examples, validation against TV show data model. Sarah's review: 0 schema issues, approved in 5 minutes. Total: 7 minutes per endpoint. |
| **Time:** 20 min/endpoint (12 min review + 8 min rework)<br>**Schema mismatches:** 100% of endpoints<br>**Review rounds:** 2<br>**Knowledge location:** Sarah's head + 200-line spec file | **Time:** 7 min/endpoint (2 min generation + 5 min review)<br>**Schema mismatches:** 0%<br>**Review rounds:** 1<br>**Knowledge location:** Codified in skill with schema + examples |

**Time saved:** 13 minutes per endpoint × 8 new endpoints per sprint = **104 minutes (1.7 hours) saved per sprint**

**Quality improvement:** 100% → 0% schema compliance issues

#### 🎯 Your Goal

Create an `api-endpoint-design` agent skill that teaches Copilot how to generate FanHub API endpoints following your OpenAPI schema, with example endpoints and a validation checklist.

#### 📋 Steps

1. **Create the skill directory structure**
   
   Agent skills live in `.github/skills/[skill-name]/` with each skill in its own folder:
   
   ```bash
   mkdir -p .github/skills/api-endpoint-design/example-endpoints
   ```
   
   This structure separates the skill definition (`SKILL.md`) from resources (schema, examples).

2. **Create the OpenAPI schema reference**
   
   Create `.github/skills/api-endpoint-design/openapi-schema.yaml` with FanHub's TV show API schema:
   
   ```yaml
   openapi: 3.0.0
   info:
     title: FanHub TV Show API
     version: 1.0.0
   
   components:
     schemas:
       Character:
         type: object
         required: [id, name, show]
         properties:
           id:
             type: integer
           name:
             type: string
           show:
             type: string
           actor:
             type: string
           bio:
             type: string
       
       Episode:
         type: object
         required: [id, title, season, episode_number]
         properties:
           id:
             type: integer
           title:
             type: string
           season:
             type: integer
           episode_number:
             type: integer
           air_date:
             type: string
             format: date
           rating:
             type: number
             minimum: 0
             maximum: 10
       
       ErrorResponse:
         type: object
         required: [error, message]
         properties:
           error:
             type: string
             enum: [NOT_FOUND, BAD_REQUEST, INTERNAL_ERROR]
           message:
             type: string
           details:
             type: object
   ```
   
   This schema defines FanHub's data models and error formats that all endpoints must follow.

3. **Create example endpoint files**
   
   Create `.github/skills/api-endpoint-design/example-endpoints/get-character.js`:
   
   ```javascript
   // GET /api/characters/:id
   // Example: Fetch character details by ID
   
   router.get('/characters/:id', async (req, res) => {
     try {
       const characterId = parseInt(req.params.id);
       
       // Validate ID format
       if (isNaN(characterId) || characterId <= 0) {
         return res.status(400).json({
           error: 'BAD_REQUEST',
           message: 'Character ID must be a positive integer'
         });
       }
       
       const character = await db.getCharacter(characterId);
       
       if (!character) {
         return res.status(404).json({
           error: 'NOT_FOUND',
           message: `Character with ID ${characterId} not found`
         });
       }
       
       // Return response matching Character schema
       res.json({
         id: character.id,
         name: character.name,
         show: character.show,
         actor: character.actor || null,
         bio: character.bio || null
       });
       
     } catch (error) {
       console.error('Error fetching character:', error);
       res.status(500).json({
         error: 'INTERNAL_ERROR',
         message: 'Failed to fetch character details'
       });
     }
   });
   ```
   
   And `.github/skills/api-endpoint-design/example-endpoints/get-episode.js`:
   
   ```javascript
   // GET /api/episodes?season=X&episode=Y
   // Example: Fetch episode by season and episode number
   
   router.get('/episodes', async (req, res) => {
     try {
       const { season, episode } = req.query;
       
       // Validate required query parameters
       if (!season || !episode) {
         return res.status(400).json({
           error: 'BAD_REQUEST',
           message: 'Both season and episode query parameters are required'
         });
       }
       
       const seasonNum = parseInt(season);
       const episodeNum = parseInt(episode);
       
       if (isNaN(seasonNum) || isNaN(episodeNum) || seasonNum <= 0 || episodeNum <= 0) {
         return res.status(400).json({
           error: 'BAD_REQUEST',
           message: 'Season and episode must be positive integers'
         });
       }
       
       const episodeData = await db.getEpisode(seasonNum, episodeNum);
       
       if (!episodeData) {
         return res.status(404).json({
           error: 'NOT_FOUND',
           message: `Episode not found: Season ${seasonNum}, Episode ${episodeNum}`
         });
       }
       
       // Return response matching Episode schema
       res.json({
         id: episodeData.id,
         title: episodeData.title,
         season: episodeData.season,
         episode_number: episodeData.episode_number,
         air_date: episodeData.air_date,
         rating: episodeData.rating || null
       });
       
     } catch (error) {
       console.error('Error fetching episode:', error);
       res.status(500).json({
         error: 'INTERNAL_ERROR',
         message: 'Failed to fetch episode details'
       });
     }
   });
   ```
   
   These examples demonstrate FanHub's patterns: input validation, standardized error responses, schema-compliant return values.

4. **Create the SKILL.md file**
   
   Create `.github/skills/api-endpoint-design/SKILL.md`:
   
   ````markdown
   ---
   name: api-endpoint-design
   description: Design REST API endpoints for FanHub TV show platform following OpenAPI schema, with proper validation, error handling, and response formatting. Use when creating new API routes or modifying existing endpoints.
   ---
   
   # FanHub API Endpoint Design
   
   This skill teaches how to create REST API endpoints for the FanHub TV show platform that comply with our OpenAPI schema and follow established patterns.
   
   ## When to Use This Skill
   
   - Creating new API endpoints for characters, episodes, or shows
   - Modifying existing endpoints to add fields or change behavior
   - Debugging endpoints that don't match schema expectations
   - Reviewing API code for compliance with FanHub standards
   
   ## OpenAPI Schema Reference
   
   All endpoints must follow the schema defined in [openapi-schema.yaml](./openapi-schema.yaml):
   
   - **Character schema**: `id`, `name`, `show` (required); `actor`, `bio` (optional)
   - **Episode schema**: `id`, `title`, `season`, `episode_number` (required); `air_date`, `rating` (optional)
   - **ErrorResponse schema**: `error` (enum), `message` (required); `details` (optional)
   
   ## Step-by-Step Process
   
   ### 1. Input Validation
   
   - Validate all path parameters and query parameters
   - Check data types (integers, strings, dates)
   - Validate ranges (positive numbers, valid enums)
   - Return `400 BAD_REQUEST` with descriptive message for invalid input
   
   ### 2. Database Query
   
   - Use appropriate database method based on endpoint purpose
   - Handle database errors with try-catch blocks
   - Check for null/undefined results
   
   ### 3. Response Formatting
   
   - **Success (200/201)**: Return data matching OpenAPI schema
   - **Not Found (404)**: Return `ErrorResponse` with `NOT_FOUND` error code
   - **Bad Request (400)**: Return `ErrorResponse` with `BAD_REQUEST` error code
   - **Server Error (500)**: Return `ErrorResponse` with `INTERNAL_ERROR` error code
   
   ### 4. Error Handling
   
   Always include:
   - Descriptive error messages for users
   - Error enum from schema (`NOT_FOUND`, `BAD_REQUEST`, `INTERNAL_ERROR`)
   - Console logging for debugging (not exposed to client)
   
   ## Example Endpoints
   
   Reference these patterns when creating new endpoints:
   
   - [GET character by ID](./example-endpoints/get-character.js) — Shows path parameter validation and 404 handling
   - [GET episode by season/episode](./example-endpoints/get-episode.js) — Shows query parameter validation and schema compliance
   
   ## Validation Checklist
   
   Before considering an endpoint complete, verify:
   
   - [ ] All path/query parameters validated for type and range
   - [ ] Invalid input returns 400 with BAD_REQUEST error
   - [ ] Missing resources return 404 with NOT_FOUND error
   - [ ] Server errors return 500 with INTERNAL_ERROR error
   - [ ] Success responses match OpenAPI schema exactly
   - [ ] Error responses use ErrorResponse schema format
   - [ ] Console logging for debugging (no sensitive data)
   - [ ] Try-catch blocks around all database operations
   
   ## FanHub-Specific Patterns
   
   - **ID validation**: Parse to integer, check > 0, return 400 if invalid
   - **Database methods**: Use `db.getCharacter()`, `db.getEpisode()`, etc. from database module
   - **Null handling**: Return null for optional fields if missing, don't omit fields
   - **Error messages**: Include context (e.g., "Character with ID 123 not found")
   
   ## Testing New Endpoints
   
   After generating an endpoint:
   1. Test happy path with valid input
   2. Test 400 errors: invalid IDs, missing parameters, wrong types
   3. Test 404 errors: non-existent resources
   4. Test 500 errors: simulate database failures
   5. Verify response schema matches OpenAPI spec
   ````
   
   This skill combines instructions (how to design endpoints) + schema (what format to follow) + examples (concrete patterns to reference).

5. **Test the skill**
   
   In VS Code Copilot Chat, ask:
   
   ```
   Create a new API endpoint: GET /api/episodes/:id/characters that returns all characters 
   appearing in a specific episode. Should validate episode ID and return 404 if episode doesn't exist.
   ```
   
   Copilot should:
   - Load the `api-endpoint-design` skill (matches description: "creating new API routes")
   - Reference `openapi-schema.yaml` for Character response format
   - Follow patterns from example endpoints for validation and error handling
   - Generate code that validates episode ID, queries database, returns Character array matching schema

#### ✅ Success Criteria

- [ ] Skill directory `.github/skills/api-endpoint-design/` created with SKILL.md, schema, and examples
- [ ] OpenAPI schema defines Character, Episode, and ErrorResponse models
- [ ] Two example endpoints demonstrate validation, error handling, and schema compliance
- [ ] SKILL.md includes when to use, step-by-step process, example references, and validation checklist
- [ ] Copilot generates new endpoint following schema when skill description matches request

> 📂 **Compare Your Work**: [`examples/completed-config/skills/api-endpoint-design/`](../../examples/completed-config/skills/api-endpoint-design/)

#### 📚 Official Docs

- [Use Agent Skills in VS Code](https://code.visualstudio.com/docs/copilot/customization/agent-skills) — Complete guide to creating and using agent skills
- [About Agent Skills (GitHub)](https://docs.github.com/en/copilot/concepts/agents/about-agent-skills) — Understanding skills across Copilot products

---

## 🔗 What You Built

**In this exercise:**
- `.github/skills/api-endpoint-design/SKILL.md` — Instructions for creating REST endpoints following FanHub patterns
- `.github/skills/api-endpoint-design/openapi-schema.yaml` — OpenAPI schema defining data models and error formats
- `.github/skills/api-endpoint-design/example-endpoints/` — Concrete endpoint examples showing validation and error handling

**How it compounds:**

| Previous Modules | This Module | Combined Power |
|------------------|-------------|----------------|
| Custom instructions (Module 4) define *how to write code* | Agent skills teach *how to perform workflows* | Instructions guide style; skills teach capabilities = comprehensive guidance |
| Prompt files (Module 3) invoke specific tasks | Skills activate automatically when relevant | Prompts for explicit invocation; skills for automatic capability teaching |

**Sarah's ROI calculation:**
- Before: 20 min/endpoint × 8 endpoints/sprint = 160 minutes
- After: 7 min/endpoint × 8 endpoints/sprint = 56 minutes
- **Time saved:** 104 minutes (1.7 hours) per sprint
- **Annual impact:** 104 min/sprint × 26 sprints/year = 2,704 minutes (45 hours) = **more than 1 work week per year**
- **Quality impact:** 0 schema compliance issues vs. previous 100%

---

## ➡️ Next Up

**[Exercise 5.2: Bug Reproduction Test Generator](exercise-5.2.md)** — API endpoints now follow schema automatically. Next: teach Copilot how to generate comprehensive bug reproduction tests using templates and edge case patterns.

> *"The skill taught Copilot our API patterns. But when bugs appear, I spend 25 minutes writing reproduction tests—setting up mocks, covering edge cases, writing assertions. Can a skill teach that workflow too?"*  
> — Elena, about to create the bug-reproduction-test-generator skill

---
