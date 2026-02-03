# FanHub Project Instructions

> **Note**: This is a sample of what Copilot might generate when you ask it to analyze your codebase and create team standards. Your output will vary based on your specific codebase and preferences.

> These instructions help GitHub Copilot understand our project context, coding standards, and architectural patterns. Every suggestion Copilot makes will consider these guidelines.

## Project Overview

**FanHub** is a fan site for television shows. The application allows fans to:
- Browse characters, episodes, and memorable quotes
- Search across all content
- Manage favorites and watchlists
- (Admin) Manage show content through a dashboard

**Tech Stack**:
- **Frontend**: React 18, React Router, CSS Modules
- **Backend**: Node.js, Express.js, PostgreSQL
- **Infrastructure**: Docker, Docker Compose
- **Testing**: Jest, React Testing Library

---

## Architecture

### Directory Structure

```
fanhub/
├── frontend/           # React application
│   ├── src/
│   │   ├── components/ # Reusable UI components
│   │   ├── pages/      # Route-level components
│   │   ├── services/   # API client functions
│   │   └── styles/     # Global styles and themes
│   └── __tests__/      # Frontend tests
├── backend/            # Express API
│   ├── src/
│   │   ├── routes/     # API endpoints
│   │   ├── database/   # Schema, migrations, connection
│   │   └── middleware/ # Auth, validation, error handling
│   └── __tests__/      # Backend tests
└── docs/               # Documentation
```

### Key Architectural Decisions

1. **Monorepo structure** — Frontend and backend in same repository for easier development
2. **REST API** — Simple, predictable endpoints over GraphQL for this use case
3. **PostgreSQL** — Relational data (shows → seasons → episodes → characters) fits SQL well
4. **Docker Compose** — Consistent development environment across team members

---

## Coding Standards

### JavaScript/React

```javascript
// ✅ DO: Use functional components with hooks
function CharacterCard({ character, onFavorite }) {
  const [isFavorite, setIsFavorite] = useState(false);
  
  return (
    <div className={styles.card}>
      {/* component content */}
    </div>
  );
}

// ❌ DON'T: Use class components for new code
class CharacterCard extends React.Component { ... }
```

```javascript
// ✅ DO: Use async/await for API calls
async function fetchCharacters(showId) {
  try {
    const response = await api.get(`/shows/${showId}/characters`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch characters:', error);
    throw error;
  }
}

// ❌ DON'T: Use .then() chains
function fetchCharacters(showId) {
  return api.get(`/shows/${showId}/characters`)
    .then(response => response.data)
    .catch(error => { ... });
}
```

### Naming Conventions

| Type | Convention | Example |
|------|------------|---------|
| Components | PascalCase | `CharacterCard.jsx` |
| Utilities | camelCase | `formatDate.js` |
| Constants | SCREAMING_SNAKE | `MAX_RESULTS` |
| CSS Modules | camelCase | `styles.cardContainer` |
| API routes | kebab-case | `/api/show-details` |
| Database tables | snake_case | `character_quotes` |

### File Organization

```javascript
// Component file structure
// CharacterCard.jsx

// 1. Imports (external, then internal)
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { useAuth } from '../../hooks/useAuth';
import { formatDate } from '../../utils/formatDate';
import styles from './CharacterCard.module.css';

// 2. Component definition
function CharacterCard({ character, showId }) {
  // Hooks first
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  
  // Effects
  useEffect(() => {
    // ...
  }, []);
  
  // Handlers
  const handleFavorite = () => {
    // ...
  };
  
  // Render
  return (
    // JSX
  );
}

// 3. PropTypes
CharacterCard.propTypes = {
  character: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  showId: PropTypes.number.isRequired,
};

// 4. Export
export default CharacterCard;
```

---

## API Patterns

### Request/Response Format

All API responses follow this structure:

```javascript
// Success response
{
  "success": true,
  "data": { /* payload */ },
  "meta": {
    "total": 100,
    "page": 1,
    "limit": 20
  }
}

// Error response
{
  "success": false,
  "error": {
    "code": "NOT_FOUND",
    "message": "Character not found",
    "details": { /* optional */ }
  }
}
```

### Endpoint Conventions

```
GET    /api/shows              # List all shows
GET    /api/shows/:id          # Get single show
POST   /api/shows              # Create show (admin)
PUT    /api/shows/:id          # Update show (admin)
DELETE /api/shows/:id          # Delete show (admin)

GET    /api/shows/:id/characters    # List characters for show
GET    /api/shows/:id/episodes      # List episodes for show
GET    /api/shows/:id/quotes        # List quotes for show

GET    /api/search?q=term           # Global search
```

### Error Handling

```javascript
// Backend: Use AppError class
const { AppError } = require('../errors');

async function getCharacter(req, res, next) {
  try {
    const character = await db.characters.findById(req.params.id);
    if (!character) {
      throw new AppError('NOT_FOUND', 'Character not found', 404);
    }
    res.json({ success: true, data: character });
  } catch (error) {
    next(error);
  }
}
```

---

## Testing Standards

### Test File Location

- Place tests in `__tests__/` folders adjacent to source
- Name test files `*.test.js` or `*.spec.js`

### Test Structure

```javascript
describe('CharacterCard', () => {
  // Setup
  const mockCharacter = {
    id: 1,
    name: 'Test Character',
    actor: 'Test Actor',
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  // Group related tests
  describe('rendering', () => {
    it('displays character name', () => {
      render(<CharacterCard character={mockCharacter} />);
      expect(screen.getByText('Test Character')).toBeInTheDocument();
    });

    it('displays actor name', () => {
      render(<CharacterCard character={mockCharacter} />);
      expect(screen.getByText('Test Actor')).toBeInTheDocument();
    });
  });

  describe('interactions', () => {
    it('calls onFavorite when heart icon clicked', async () => {
      const onFavorite = jest.fn();
      render(<CharacterCard character={mockCharacter} onFavorite={onFavorite} />);
      
      await userEvent.click(screen.getByRole('button', { name: /favorite/i }));
      
      expect(onFavorite).toHaveBeenCalledWith(1);
    });
  });
});
```

### What to Test

- ✅ Component renders with required props
- ✅ User interactions trigger expected callbacks
- ✅ Error states display correctly
- ✅ Loading states show appropriately
- ✅ API endpoints return correct data shapes
- ✅ Edge cases (empty data, long strings, missing optional fields)

---

## Database Patterns

### Schema Conventions

```sql
-- All tables have these columns
CREATE TABLE characters (
    id SERIAL PRIMARY KEY,
    -- domain columns
    name VARCHAR(255) NOT NULL,
    actor VARCHAR(255),
    bio TEXT,
    image_url TEXT,
    -- foreign keys
    show_id INTEGER REFERENCES shows(id) ON DELETE CASCADE,
    -- timestamps
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Query Patterns

```javascript
// Use parameterized queries to prevent SQL injection
const getCharacter = async (id) => {
  const result = await db.query(
    'SELECT * FROM characters WHERE id = $1',
    [id]
  );
  return result.rows[0];
};

// Use transactions for multi-step operations
const createCharacterWithQuotes = async (character, quotes) => {
  const client = await db.pool.connect();
  try {
    await client.query('BEGIN');
    const charResult = await client.query(
      'INSERT INTO characters (name, show_id) VALUES ($1, $2) RETURNING id',
      [character.name, character.showId]
    );
    for (const quote of quotes) {
      await client.query(
        'INSERT INTO quotes (text, character_id) VALUES ($1, $2)',
        [quote.text, charResult.rows[0].id]
      );
    }
    await client.query('COMMIT');
  } catch (error) {
    await client.query('ROLLBACK');
    throw error;
  } finally {
    client.release();
  }
};
```

---

## Git Workflow

### Branch Naming

```
feature/add-character-search
bugfix/fix-episode-sorting
refactor/simplify-auth-middleware
docs/update-api-documentation
```

### Commit Messages

```
feat: add character search with autocomplete
fix: correct episode sorting by air date
refactor: simplify authentication middleware
docs: update API documentation for search endpoint
test: add unit tests for CharacterCard component
```

---

## Common Patterns to Follow

### Loading States

```jsx
function CharacterList({ showId }) {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCharacters(showId)
      .then(setCharacters)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [showId]);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage error={error} />;
  if (characters.length === 0) return <EmptyState message="No characters found" />;
  
  return (
    <div className={styles.grid}>
      {characters.map(char => (
        <CharacterCard key={char.id} character={char} />
      ))}
    </div>
  );
}
```

### Form Handling

```jsx
function AddQuoteForm({ characterId, onSuccess }) {
  const [text, setText] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    
    try {
      await api.post(`/characters/${characterId}/quotes`, { text });
      setText('');
      onSuccess?.();
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <ErrorMessage error={error} />}
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        disabled={submitting}
        required
      />
      <button type="submit" disabled={submitting}>
        {submitting ? 'Adding...' : 'Add Quote'}
      </button>
    </form>
  );
}
```

---

## What NOT to Do

- ❌ Don't use `var` — use `const` or `let`
- ❌ Don't use inline styles except for dynamic values
- ❌ Don't commit `.env` files or secrets
- ❌ Don't use `any` type in TypeScript (if migrated)
- ❌ Don't skip error handling in async functions
- ❌ Don't use string concatenation for SQL queries
- ❌ Don't store passwords in plain text
