# Spec to Implementation

> **Note**: This is a sample of what Copilot might generate when you ask it to create a spec-to-implementation prompt. Your output will vary based on your specific requirements.

Convert a product specification or user story into working code.

## Context

- Project: FanHub TV show fan site
- Frontend: React 18, React Router, CSS Modules
- Backend: Express.js, PostgreSQL
- See `copilot-instructions.md` for coding standards

## Instructions

When implementing a specification:

1. **Parse the requirements carefully**
   - Identify user-facing functionality
   - Identify data requirements
   - Identify API endpoints needed
   - Identify UI components needed

2. **Break down into implementation steps**
   - Database changes (if any)
   - Backend API endpoints
   - Frontend components
   - Integration/wiring

3. **Follow project patterns** from `copilot-instructions.md`

4. **Include error handling** for edge cases

5. **Add appropriate tests** alongside implementation

## Template Response Structure

When given a spec, respond with:

### Analysis
Brief summary of what needs to be built.

### Database Changes
```sql
-- New tables or modifications needed
```

### API Endpoints
```javascript
// Express route handlers
```

### Frontend Components
```jsx
// React components
```

### Tests
```javascript
// Key test cases
```

### Integration Notes
How the pieces connect together.

---

## Example Input

**User Story**: As a fan, I want to search for characters by name so I can quickly find my favorites.

**Acceptance Criteria**:
- Search input on Characters page
- Results filter as user types (debounced)
- Show "No results" for empty searches
- Highlight matching text in results

---

## Example Output Structure

### Analysis
Need a search input component, debounced API endpoint, and filtered character list display.

### API Endpoint
```javascript
// GET /api/characters/search?q=searchterm
router.get('/search', async (req, res) => {
  const { q } = req.query;
  const results = await db.query(
    'SELECT * FROM characters WHERE name ILIKE $1',
    [`%${q}%`]
  );
  res.json({ success: true, data: results.rows });
});
```

### Frontend Component
```jsx
function CharacterSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const debouncedQuery = useDebounce(query, 300);
  
  // Implementation...
}
```

(etc.)
