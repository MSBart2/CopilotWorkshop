<!-- Reference implementation for Module 4, Exercise 4.2: Language-Specific Instructions -->
<!-- This example demonstrates: JavaScript-specific patterns with .js/.jsx file matching -->

---

name: javascript-standards
description: 'Airbnb JavaScript style guide'
applyTo: '\*_/_.{js,jsx}'

---

# JavaScript Development Standards

Follow Airbnb JavaScript style guide for all `.js` and `.jsx` files.

## Variables

**const by default**, let when reassignment needed:

```javascript
const characterName = "Walter White";
let episodeCount = 0;
```

**No var** — Always use const/let

## Functions

**Arrow functions for callbacks**:

```javascript
characters.map((char) => char.name);
episodes.filter((ep) => ep.season === 1);
```

**Named functions for methods**:

```javascript
function fetchCharacterById(id) {
  return fetch(`/api/characters/${id}`);
}
```

## Objects

**Object shorthand**:

```javascript
const name = "Walter";
const actor = "Bryan Cranston";

// ✅ Correct
const character = { name, actor };

// ❌ Avoid
const character = { name: name, actor: actor };
```

**Destructuring**:

```javascript
const { name, actor, biography } = character;
```

## Arrays

**Spread operator**:

```javascript
const allCharacters = [...mainCharacters, ...supportingCharacters];
```

**Array methods over loops**:

```javascript
// ✅ Correct
const names = characters.map((c) => c.name);

// ❌ Avoid
const names = [];
for (let i = 0; i < characters.length; i++) {
  names.push(characters[i].name);
}
```

## Async Operations

**async/await**:

```javascript
async function loadCharacter(id) {
  try {
    const response = await fetch(`/api/characters/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to load character:", error);
  }
}
```

## Naming

**camelCase** for variables and functions:

```javascript
const characterData = {};
function fetchEpisodeList() {}
```

**PascalCase** for React components:

```javascript
function CharacterCard() {}
class EpisodeList extends Component {}
```

## Semicolons

**Always use semicolons** at statement ends.

## String Formatting

**Template literals** for interpolation:

```javascript
const message = `Character ${name} appears in ${episodeCount} episodes`;
```
