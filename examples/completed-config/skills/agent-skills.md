# FanHub Agent Skills Library

> Agent Skills teach GitHub Copilot domain-specific knowledge. This library contains skills for TV show data validation, product requirements, and FanHub development workflows.

## What Are Agent Skills?

**Agent Skills** are specialized folders containing:
- `SKILL.md` file with instructions (YAML frontmatter + markdown)
- Optional scripts, examples, and resources
- Domain-specific knowledge Copilot loads when relevant

Skills are part of an [open standard](https://github.com/agentskills/agentskills) used by various AI coding assistants.

### Where Skills Live

| Location | Scope | Use Case |
|----------|-------|----------|
| `.github/skills/` | Project | Shared with everyone on the project |
| `~/.copilot/skills/` | Personal | Available in all your projects |

### Skills vs Instructions vs Prompts

| Feature | Instructions | Prompts | Skills |
|---------|-------------|---------|--------|
| **Loaded** | Always | Manually invoked | Automatically when relevant |
| **Scope** | Broad standards | Specific templates | Specialized tasks |
| **Contains** | Guidelines | Structured queries | Instructions + scripts + examples |
| **Best for** | Team conventions | Repeatable workflows | Domain expertise |

---

## FanHub Skills Library

### 1. TV Show Data Validator

**Location**: `.github/skills/tv-show-data-validator/`

**Purpose**: Validates TV show data (characters, episodes, shows) against FanHub schema requirements.

#### SKILL.md

```markdown
---
name: tv-show-data-validator
description: Validates TV show data (characters, episodes, shows) against FanHub schema requirements. Use when creating or modifying database records, API responses, or seed data.
---

# TV Show Data Validator

This skill helps validate data structures for FanHub's TV show database.

## Character Validation

All character objects must include:
- `name` (required): String, the character's name
- `status` (required): Enum - 'alive', 'deceased', or 'unknown'
- `show_id` (required): Integer, foreign key to shows table
- `first_appearance` (optional): Integer, foreign key to episodes table
- `actor` (optional): String, actor's name
- `description` (optional): Text

### Valid Character Example
```json
{
  "name": "Walter White",
  "status": "deceased",
  "show_id": 1,
  "first_appearance": 1,
  "actor": "Bryan Cranston",
  "description": "Chemistry teacher turned drug manufacturer"
}
```

### Invalid Character Examples
```json
// Missing required status field
{
  "name": "Jesse Pinkman",
  "show_id": 1
}

// Invalid status value
{
  "name": "Saul Goodman",
  "status": "retired",  // Should be 'alive', 'deceased', or 'unknown'
  "show_id": 1
}
```

## Episode Validation

All episode objects must include:
- `title` (required): String
- `season_number` (required): Integer, >= 1
- `episode_number` (required): Integer, >= 1
- `show_id` (required): Integer, foreign key to shows table
- `air_date` (optional): Date string (YYYY-MM-DD)
- `synopsis` (optional): Text

**Important**: Episode numbers must be unique within a season.

### Valid Episode Example
```json
{
  "title": "Pilot",
  "season_number": 1,
  "episode_number": 1,
  "show_id": 1,
  "air_date": "2008-01-20",
  "synopsis": "Walter White, a chemistry teacher, is diagnosed with lung cancer."
}
```

## Show Validation

All show objects must include:
- `name` (required): String
- `genre` (optional): String
- `premiere_year` (optional): Integer, four digits
- `status` (required): Enum - 'ongoing', 'ended', or 'cancelled'

### Valid Show Example
```json
{
  "name": "Breaking Bad",
  "genre": "Crime Drama",
  "premiere_year": 2008,
  "status": "ended"
}
```

## Common Validation Errors to Check

1. **Missing Required Fields**: Always include required fields
2. **Invalid Enum Values**: Status fields must use exact allowed values
3. **Orphaned Foreign Keys**: show_id and first_appearance must reference existing records
4. **Duplicate Episodes**: Same season_number + episode_number within a show
5. **Type Mismatches**: Ensure integers aren't passed as strings

## When to Apply This Skill

Use this skill when:
- Creating database seed data
- Writing API endpoint handlers
- Generating test fixtures
- Validating API request/response bodies
- Implementing data import/export functionality
```

---

### 2. Feature Requirements

**Location**: `.github/skills/feature-requirements/`

**Purpose**: Product requirements for FanHub features. Ensures features meet product standards for error handling, UX, analytics, accessibility, and responsive design.

#### SKILL.md

```markdown
---
name: feature-requirements
description: Product requirements for FanHub features. Use when creating new pages, components, or user-facing functionality to ensure features meet product standards.
---

# FanHub Feature Requirements

When building new features or components for FanHub, ensure the following product requirements are met:

## 1. Error Handling

- **Error Boundaries**: Wrap all public pages in error boundaries
- **Async Error Handling**: Use try-catch for all async operations
- **User-Friendly Messages**: Show meaningful errors, not stack traces
- **Error Logging**: Log errors to console in development mode

Example:
```javascript
try {
  const data = await fetchCharacters();
  setCharacters(data);
} catch (error) {
  console.error('Failed to load characters:', error);
  toast.error('Unable to load characters. Please try again.');
}
```

## 2. User Feedback

- **Loading States**: Use skeleton screens, not spinners
- **Success Notifications**: Toast notifications for successful actions
- **Error Notifications**: Toast notifications for failures
- **Confirmations**: Dialog prompts before destructive actions

Example (loading state):
```jsx
{isLoading ? (
  <CharacterCardSkeleton count={6} />
) : (
  <CharacterGrid characters={characters} />
)}
```

## 3. Analytics & Tracking

- **Page Views**: Track on component mount
- **User Events**: Track all interactions (clicks, form submissions, etc.)
- **Naming Convention**: Use format: `fanhub_[page]_[action]`

Example:
```javascript
useEffect(() => {
  trackPageView('characters_list');
}, []);

const handleCharacterClick = (character) => {
  trackEvent('fanhub_characters_list_character_clicked', {
    character_id: character.id
  });
};
```

## 4. Accessibility

- **Semantic HTML**: Use proper elements (`<button>`, `<nav>`, `<main>`)
- **ARIA Labels**: Add where semantic HTML isn't enough
- **Keyboard Navigation**: Ensure tab order and keyboard shortcuts
- **Focus Management**: Handle focus on modals, navigation

Example:
```jsx
<button
  onClick={handleClick}
  aria-label={`View details for ${character.name}`}
>
  <CharacterCard character={character} />
</button>
```

## 5. Responsive Design

- **Mobile-First**: Design for mobile, enhance for desktop
- **Breakpoints**: 640px (sm), 768px (md), 1024px (lg)
- **Touch Targets**: Minimum 44px for interactive elements
- **Flexible Layouts**: Use flexbox/grid, avoid fixed widths

## When to Apply

Use this skill when:
- Creating new pages or routes
- Building new React components
- Implementing user interactions
- Adding forms or data entry
- Building modal dialogs or overlays
```

---

### 3. API Endpoint Design

**Location**: `.github/skills/api-endpoint-design/`

**Purpose**: Ensures consistent REST API design patterns for FanHub's Express backend.

#### SKILL.md

```markdown
---
name: api-endpoint-design
description: REST API design standards for FanHub's Express backend. Use when creating or modifying API endpoints to ensure consistency.
---

# FanHub API Design Standards

## URL Conventions

- Use lowercase, hyphenated paths: `/api/tv-shows`, not `/api/tvShows`
- Use plural nouns for collections: `/api/characters`, not `/api/character`
- Use nested routes for relationships: `/api/shows/:showId/episodes`
- Version the API: `/api/v1/...`

## HTTP Methods

| Method | Use Case | Example |
|--------|----------|---------|
| GET | Retrieve resource(s) | GET /api/characters |
| POST | Create new resource | POST /api/characters |
| PUT | Replace entire resource | PUT /api/characters/:id |
| PATCH | Partial update | PATCH /api/characters/:id |
| DELETE | Remove resource | DELETE /api/characters/:id |

## Response Format

All responses follow this structure:

```json
{
  "success": true,
  "data": { ... },
  "meta": {
    "total": 100,
    "page": 1,
    "limit": 20
  }
}
```

Error responses:
```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Character name is required",
    "details": [...]
  }
}
```

## Status Codes

- 200: Success (GET, PUT, PATCH)
- 201: Created (POST)
- 204: No Content (DELETE)
- 400: Bad Request (validation errors)
- 401: Unauthorized
- 404: Not Found
- 500: Internal Server Error

## Endpoint Template

```javascript
router.get('/characters', async (req, res, next) => {
  try {
    const { page = 1, limit = 20, show_id } = req.query;
    
    const characters = await CharacterService.list({
      page: parseInt(page),
      limit: parseInt(limit),
      showId: show_id ? parseInt(show_id) : undefined
    });
    
    res.json({
      success: true,
      data: characters.items,
      meta: {
        total: characters.total,
        page: characters.page,
        limit: characters.limit
      }
    });
  } catch (error) {
    next(error);
  }
});
```
```

---

## Creating New Skills

### Skill Template

```markdown
---
name: your-skill-name
description: Brief description of when and why to use this skill.
---

# Skill Title

Brief introduction explaining the skill's purpose.

## Key Rules

List the main guidelines this skill enforces.

## Examples

### Good Example
```code
// Show valid implementation
```

### Bad Example
```code
// Show what to avoid and why
```

## When to Apply

Use this skill when:
- Scenario 1
- Scenario 2
- Scenario 3
```

### Adding Supporting Files

Skills can include additional resources:

```
.github/skills/your-skill/
├── SKILL.md              # Main instructions
├── schema.json           # JSON schema for validation
├── examples/             # Example files
│   ├── valid.json
│   └── invalid.json
└── scripts/              # Helper scripts
    └── validate.js
```

---

## Community Skills

### Anthropic Skills Repository

High-quality skills for common development tasks:
- [github.com/anthropics/skills](https://github.com/anthropics/skills)

### GitHub Awesome Copilot Collection

Community-contributed skills and resources:
- [github.com/github/awesome-copilot](https://github.com/github/awesome-copilot)

### Adopting Community Skills

```bash
# Clone the community skill
git clone https://github.com/anthropics/skills /tmp/skills

# Copy and customize for FanHub
cp -r /tmp/skills/debugging .github/skills/
# Edit to fit FanHub conventions
```

---

## Skills Library Strategy

### Ownership

| Skill | Owner | Last Review |
|-------|-------|-------------|
| tv-show-data-validator | Elena | [Date] |
| feature-requirements | Rafael | [Date] |
| api-endpoint-design | David | [Date] |

### Maintenance Schedule

- **Monthly**: Review skills for accuracy
- **Quarterly**: Update with new patterns/requirements
- **On-demand**: Update when underlying standards change

### Testing Skills

Verify skills work correctly:

```
@workspace Create a new character object for Eleven from Stranger Things

# Expected: Copilot applies tv-show-data-validator skill automatically
# and includes all required fields with proper validation
```

---

## Related Resources

- [Module 6: Custom Skills](../../../modules/06-custom-skills/README.md)
- [GitHub Docs: About Agent Skills](https://docs.github.com/en/copilot/concepts/agents/about-agent-skills)
- [Agent Skills Open Standard](https://github.com/agentskills/agentskills)
