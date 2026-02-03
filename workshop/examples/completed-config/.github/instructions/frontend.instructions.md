<!-- Reference implementation for Module 4, Exercise 4.1: Layer-Based Instructions -->
<!-- This example demonstrates: Frontend-specific patterns with applyTo path matching -->

---

name: frontend-ui-patterns
description: 'React component patterns and UI-specific conventions'
applyTo: 'frontend/\*\*'

---

# Frontend UI Development Standards

You are working in the **UI layer** (React application). Apply frontend-specific patterns for FanHub TV show fan site.

## Component Architecture

**Functional components only** — No class components, use hooks:

```jsx
// ✅ Correct
function CharacterCard({ name, actor }) {
  const [favorite, setFavorite] = useState(false);
  return <div>...</div>;
}

// ❌ Avoid
class CharacterCard extends React.Component {}
```

**Props destructuring** — Destructure in function signature:

```jsx
// ✅ Correct
function EpisodeList({ episodes, loading }) {}

// ❌ Avoid
function EpisodeList(props) {
  const episodes = props.episodes;
}
```

## State Management

**Local state for UI** — useState for component-local concerns:

```jsx
const [isOpen, setIsOpen] = useState(false);
const [selectedTab, setSelectedTab] = useState("info");
```

**API calls via services** — Never fetch directly in components:

```jsx
// ✅ Correct
import { fetchCharacters } from '../services/api';

useEffect(() => {
  async function loadData() {
    const data = await fetchCharacters();
    setCharacters(data);
  }
  loadData();
}, []);

// ❌ Avoid
useEffect(() => {
  fetch('/api/characters').then(...);
}, []);
```

## Error Handling

**Try/catch in data fetching**:

```jsx
try {
  const data = await fetchCharacters();
  setCharacters(data);
} catch (error) {
  setError("Failed to load characters");
}
```

**Error UI states** — Show user-friendly messages:

```jsx
{
  error && (
    <div className={styles.error}>
      <p>{error}</p>
      <button onClick={retry}>Try Again</button>
    </div>
  );
}
```

## File Organization

**Pages** → `frontend/src/pages/` (route-level components):

- `HomePage.jsx`, `CharacterDetail.jsx`, `EpisodeList.jsx`

**Components** → `frontend/src/components/` (reusable UI):

- `CharacterCard.jsx`, `Header.jsx`, `SearchBar.jsx`

**Services** → `frontend/src/services/` (API clients):

- `api.js`, `auth.js`

## Styling

**CSS Modules** — Scoped styling:

```jsx
import styles from "./CharacterCard.module.css";

<div className={styles.container}>
  <h2 className={styles.title}>{name}</h2>
</div>;
```

**Naming** — BEM-style in CSS:

```css
.characterCard {
}
.characterCard__title {
}
.characterCard--featured {
}
```

## Accessibility

**Semantic HTML**:

```jsx
// ✅ Correct
<button onClick={handleClick}>Click me</button>
<nav><ul><li>...</li></ul></nav>

// ❌ Avoid
<div onClick={handleClick}>Click me</div>
```

**ARIA labels** for interactive elements:

```jsx
<button aria-label="Add to favorites" onClick={addFavorite}>
  <StarIcon />
</button>
```

## Performance

**Memoization** for expensive calculations:

```jsx
const sortedEpisodes = useMemo(
  () => episodes.sort((a, b) => a.season - b.season),
  [episodes],
);
```

**Callback memoization** for props:

```jsx
const handleClick = useCallback(() => {
  console.log(id);
}, [id]);
```

## FanHub-Specific Patterns

**TV Show Data**:

- Characters have: name, actor, biography, show_id
- Episodes have: title, season_number, episode_number
- Shows have: title, year, network

**Loading states**:

```jsx
{
  loading && <div className={styles.loading}>Loading...</div>;
}
{
  !loading && data && <DataDisplay data={data} />;
}
```

**404 handling**:

```jsx
if (error?.status === 404) {
  return <NotFound message="Character not found" />;
}
```
