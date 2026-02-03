<!-- Reference implementation for Module 4, Exercise 4.1: Layer-Based Instructions -->
<!-- This example demonstrates: Backend-specific patterns with applyTo path matching -->

---

name: backend-api-patterns
description: 'Express API and server-side conventions'
applyTo: 'backend/\*\*'

---

# Backend API Development Standards

You are working in the **API layer** (Express.js backend). Apply server-side patterns for FanHub TV show fan site.

## Route Architecture

**Routes define endpoints only** — Delegate to controllers:

```javascript
// ✅ Correct
router.get('/:id', async (req, res, next) => {
  try {
    const character = await queries.getCharacterById(req.params.id);
    if (!character) {
      throw new NotFoundError(`Character ${req.params.id} not found`);
    }
    res.json({ success: true, data: character });
  } catch (error) {
    next(error);
  }
});

// ❌ Avoid (business logic in route)
router.get('/:id', async (req, res) => {
  const character = await db.query('SELECT * FROM...');
  const episodes = await db.query('SELECT * FROM...');
  const processed = character.map(...); // Complex processing
  res.json(processed);
});
```

## Async Patterns

**async/await everywhere** — No callbacks or raw promises:

```javascript
// ✅ Correct
async function getCharacters() {
  const result = await pool.query("SELECT...");
  return result.rows;
}

// ❌ Avoid
function getCharacters(callback) {
  pool.query("SELECT...", (err, result) => {
    callback(err, result.rows);
  });
}
```

## Error Handling

**Try/catch with next()** — Pass errors to middleware:

```javascript
router.get("/:id", async (req, res, next) => {
  try {
    // Operation
  } catch (error) {
    next(error); // Error middleware handles it
  }
});
```

**Custom error classes**:

```javascript
throw new NotFoundError("Resource not found");
throw new ValidationError("Invalid input");
```

**Never throw in routes** — Use next(error) instead.

## Response Format

**Standard success format**:

```javascript
res.json({
  success: true,
  data: {...}
});
```

**Standard error format** (handled by middleware):

```javascript
{
  success: false,
  error: "Error message"
}
```

## HTTP Status Codes

```javascript
res.status(200).json(...); // Success
res.status(201).json(...); // Created
res.status(400).json(...); // Bad request
res.status(404).json(...); // Not found
res.status(500).json(...); // Server error
```

## Input Validation

**Validate before processing**:

```javascript
const id = parseInt(req.params.id, 10);
if (isNaN(id) || id < 1) {
  throw new ValidationError("Invalid ID format");
}
```

**Sanitize user input** — Prevent injection:

```javascript
// ✅ Parameterized queries
pool.query("SELECT * FROM characters WHERE id = $1", [id]);

// ❌ String concatenation
pool.query(`SELECT * FROM characters WHERE id = ${id}`);
```

## Database Queries

**Centralized in database folder** — Never raw SQL in routes:

```javascript
// ✅ Correct
const queries = require("../database/queries");
const character = await queries.getCharacterById(id);

// ❌ Avoid
const result = await pool.query("SELECT * FROM...");
```

## File Organization

**Routes** → `backend/src/routes/`:

- Define Express endpoints
- Handle request/response
- Minimal business logic

**Middleware** → `backend/src/middleware/`:

- Authentication, validation, error handling
- Reusable across routes

**Database** → `backend/src/database/`:

- All SQL queries
- Connection management
- Migrations

## Middleware Usage

**Authentication**:

```javascript
router.get("/admin", requireAuth, async (req, res) => {
  // Only authenticated users reach here
});
```

**Validation**:

```javascript
router.post("/", validateCharacterInput, async (req, res) => {
  // Input is validated
});
```

## Logging

**Use consistent logging**:

```javascript
console.log(`Fetching character ${id}`);
console.error(`Database error: ${error.message}`);
```

## FanHub-Specific Patterns

**API Endpoints**:

- `/api/characters` — Character listings
- `/api/characters/:id` — Character detail
- `/api/episodes` — Episode listings
- `/api/shows` — Show listings

**Database Schema**:

- characters: id, name, actor, biography, show_id
- episodes: id, title, season_number, episode_number, show_id
- shows: id, title, year, network

**Pagination** for large lists:

```javascript
const page = parseInt(req.query.page) || 1;
const limit = 20;
const offset = (page - 1) * limit;
```

**Caching headers**:

```javascript
res.set("Cache-Control", "public, max-age=300"); // 5 minutes
```
