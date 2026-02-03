<!-- Reference implementation for Module 4, Exercise 4.2: Language-Specific Instructions -->
<!-- This example demonstrates: TypeScript-specific patterns with .ts/.tsx file matching -->

---

name: typescript-standards
description: 'Strict TypeScript type safety rules'
applyTo: '\*_/_.{ts,tsx}'

---

# TypeScript Development Standards

Strict type safety rules for all `.ts` and `.tsx` files.

## Type Definitions

**Explicit types for function parameters**:

```typescript
function fetchCharacter(id: number): Promise<Character> {
  return fetch(`/api/characters/${id}`).then((res) => res.json());
}
```

**Interface for objects**:

```typescript
interface Character {
  id: number;
  name: string;
  actor: string;
  biography: string | null;
  showId: number;
}
```

## Type Safety

**No `any`** — Use specific types or unknow:

```typescript
// ✅ Correct
const data: Character[] = [];
const response: unknown = await fetch(...);

// ❌ Avoid
const data: any = [];
```

**Strict null checks**:

```typescript
function displayBiography(character: Character): string {
  return character.biography ?? "No biography available";
}
```

## Generics

**Type-safe generics**:

```typescript
function fetchList<T>(endpoint: string): Promise<T[]> {
  return fetch(endpoint).then((res) => res.json());
}

const characters = await fetchList<Character>("/api/characters");
```

## Union Types

**For multiple possible types**:

```typescript
type LoadingState = "idle" | "loading" | "success" | "error";
type ApiResponse = Character | { error: string };
```

## Type Guards

**Check types at runtime**:

```typescript
function isError(response: ApiResponse): response is { error: string } {
  return "error" in response;
}
```

## React Props

**Props interface**:

```typescript
interface CharacterCardProps {
  character: Character;
  onFavorite: (id: number) => void;
  className?: string;
}

function CharacterCard({ character, onFavorite, className }: CharacterCardProps) {
  return <div>...</div>;
}
```
