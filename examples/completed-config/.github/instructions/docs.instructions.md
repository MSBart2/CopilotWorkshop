<!-- Reference implementation for Module 4, Exercise 4.3: Context-Specific Instructions -->
<!-- This example demonstrates: Documentation style guide for docs folders -->

---

name: documentation-style
description: 'Writing style guide for documentation'
applyTo: '**/docs/**/\*.md,\*\*/README.md'

---

# Documentation Writing Standards

Follow these conventions for all documentation in `docs/` folders and README files.

## Structure

**Clear hierarchy**:

```markdown
# Main Title (H1 - once per document)

## Section (H2)

### Subsection (H3)

#### Detail (H4)
```

## Writing Style

**Active voice**:

```markdown
✅ "Install dependencies with npm install"
❌ "Dependencies should be installed"
```

**Present tense**:

```markdown
✅ "The API returns JSON"
❌ "The API returned JSON"
```

**Second person**:

```markdown
✅ "You can configure the database"
❌ "One can configure the database"
```

## Code Examples

**Use fenced code blocks** with language:

````markdown
```javascript
const character = { name: "Walter White" };
```
````

````

**Add explanations** before code:
```markdown
Install dependencies:
```bash
npm install
````

````

## Links

**Descriptive link text**:
```markdown
✅ [Configure the database](./DATABASE.md)
❌ Click [here](./DATABASE.md)
````

**Relative paths** for internal docs:

```markdown
[Architecture](./ARCHITECTURE.md)
[API Routes](../backend/API.md)
```

## Lists

**Parallel structure**:

```markdown
✅

- Install Node.js
- Clone the repository
- Run npm install

❌

- Install Node.js
- Cloning the repository
- You should run npm install
```

## Formatting

**Bold** for UI elements and emphasis:

- Click the **Save** button
- The **required** field

**Code** for commands, file paths, and code elements:

- Run `npm start`
- Edit `package.json`
- Use the `useState` hook

**Italics** for terminology first use:

- The _frontend_ refers to the React application

## FanHub-Specific

**Consistent terminology**:

- "Frontend" (not "front-end", "front end", or "UI")
- "Backend" (not "back-end", "back end", or "API")
- "PostgreSQL" (not "Postgres", "postgres", or "PSQL")

**Example data**:

- Use Breaking Bad characters for examples
- Walter White, Jesse Pinkman, Saul Goodman
