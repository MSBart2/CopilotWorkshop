# Priya's Path: Custom Instructions

## 🎯 Your Focus: Building the EpisodeAppearances Component

> 🧵 **The Golden Thread**: Character Detail v2 shows episode appearances—but the component structure is inconsistent. You'll build the `EpisodeAppearances` component properly using React instructions that ensure every future component follows the same patterns.

Priya, this module shows you how to capture best practices so you (and the whole team) benefit from them forever. You've been learning React patterns—now you'll encode them into instructions that help Copilot generate consistent, high-quality components. This isn't just about AI; it's about documenting expertise in a way that teaches as it assists.

**Your exercises**: 5.4 (React Component Instructions)  
**Time**: ~25 minutes  
**Theme**: From learning patterns to encoding patterns

---

## Your Journey in This Module

```
Priya's Arc:
┌─────────────────────────────────────────────────────────────────┐
│  "The CharacterDetail component is good, but EpisodeList is..."│
│                         ↓                                       │
│  Creates react-components.instructions.md with David's help     │
│                         ↓                                       │
│  "Now I'm building EpisodeAppearances with consistent patterns" │
└─────────────────────────────────────────────────────────────────┘
```

---

## Exercise 5.4: React Component Instructions — "The Episode Appearances Component"

> 🧵 **The Golden Thread Continues**: Character Detail v2 shows episode appearances—but the component structure is inconsistent. You'll build the `EpisodeAppearances` component properly with React instructions.

### 📖 The Story

**Priya** (Junior Developer, 1 year) is excited. The Character Detail v2 feature from Module 04 is live, but users want more—they want to click on an episode to see details. She's been assigned to build the `EpisodeAppearances` component that makes episodes clickable.

But first, she reviews the existing components the agent generated in Module 04.

*"Some components handle loading states, some don't,"* Priya notices. *"Some have TypeScript types, some use `any`. The CharacterDetail component is good, but the EpisodeList inside it is... different."*

**David** (Staff Engineer, 20 years) sees an opportunity: *"You've been learning React best practices, Priya. What if you captured those patterns in instructions?"*

### ❌ The "Before" — Inconsistent Components

Look at the components from Module 04:

```jsx
// Inconsistent patterns from agent-generated components
const CharacterDetail = ({ id }) => {  // No TypeScript types
  const [data, setData] = useState();  // No initial state type
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetchCharacter(id).then(setData);  // No error handling!
  }, []);  // Missing dependency
  
  if (loading) return <div>Loading...</div>;  // Basic, no spinner
  
  return (
    <div style={{ padding: '20px' }}>  {/* Inline styles */}
      <h1>{data.name}</h1>
      {/* What if data.episodes is undefined? */}
      {data.episodes.map(ep => <div key={ep.id}>{ep.title}</div>)}
    </div>
  );
};
```

**The problems:**
- No TypeScript interfaces
- Missing error handling
- Incomplete useEffect dependencies
- Inline styles instead of styled-components
- No empty state handling
- No loading component (just text)

### 🎯 Objective

Create instructions that provide React/TypeScript expertise for component files, then use them to build the `EpisodeAppearances` component properly.

### 📋 Steps

1. **Create component instructions**
   
   Create: `.github/instructions/react-components.instructions.md`
   
   ````markdown
   ---
   applyTo:
     - "**/*.tsx"
     - "**/*.jsx"
     - "**/components/**"
   ---
   
   # React Component Standards for FanHub
   
   When generating or modifying React components, follow these patterns.
   
   ## Component Structure
   
   ```typescript
   // 1. Imports (external, then internal, then styles)
   import React, { useState, useEffect, useCallback } from 'react';
   import { Link } from 'react-router-dom';
   
   import { LoadingSpinner } from '@/components/ui/LoadingSpinner';
   import { ErrorMessage } from '@/components/ui/ErrorMessage';
   import { useCharacterEpisodes } from '@/hooks/useCharacterEpisodes';
   
   import { Container, EpisodeCard } from './EpisodeAppearances.styles';
   
   // 2. Types/Interfaces (required for FanHub)
   interface Episode {
     id: number;
     title: string;
     seasonNumber: number;
     episodeNumber: number;
   }
   
   interface EpisodeAppearancesProps {
     characterId: number;
     showId: number;
     onEpisodeClick?: (episodeId: number) => void;
     className?: string;
   }
   
   // 3. Component (always function, never class)
   export function MyComponent({ id, onUpdate, className }: MyComponentProps) {
     // 4. Hooks first
     const [isLoading, setIsLoading] = useState(false);
     const { user } = useAuth();
     
     // 5. Derived state / memos
     const isOwner = user?.id === id;
     
     // 6. Effects
     useEffect(() => {
       // effect logic
     }, [dependency]);
     
     // 7. Callbacks
     const handleClick = useCallback(() => {
       // handler logic
     }, [dependency]);
     
     // 8. Early returns for loading/error
     if (isLoading) return <LoadingSpinner />;
     
     // 9. Main render
     return (
       <Container className={className}>
         <Title>{title}</Title>
       </Container>
     );
   }
   ```
   
   ## Hook Rules
   
   - Hooks must be called at the top level (not in conditions/loops)
   - Custom hooks should start with `use`
   - Always include all dependencies in useEffect/useCallback/useMemo
   - Prefer `useCallback` for event handlers passed to children
   - Use `useMemo` only for expensive calculations
   
   ## TypeScript Patterns
   
   ```typescript
   // ✅ Define explicit prop types
   interface ButtonProps {
     variant: 'primary' | 'secondary' | 'danger';
     size?: 'sm' | 'md' | 'lg';
     children: React.ReactNode;
     onClick?: () => void;
     disabled?: boolean;
   }
   
   // ✅ Use utility types
   type PartialUser = Partial<User>;
   type UserKeys = keyof User;
   
   // ❌ Avoid any
   // props: any ← Never do this
   ```
   
   ## State Management
   
   - Local UI state: `useState`
   - Form state: `react-hook-form` or controlled inputs
   - Server state: `@tanstack/react-query` or similar
   - Global app state: Context or Zustand (not Redux unless complex)
   
   ## Styling
   
   - Use styled-components for component styles
   - Theme values via `${props => props.theme.colors.primary}`
   - Support `className` prop for customization
   - Use semantic HTML elements
   
   ## Accessibility
   
   - Buttons must have accessible names
   - Images must have alt text
   - Interactive elements must be keyboard accessible
   - Use semantic HTML (nav, main, article, etc.)
   - Include aria-labels where needed
   
   ## Loading & Error States
   
   Every component that fetches data must handle:
   - Loading state (skeleton or spinner)
   - Error state (user-friendly message + retry option)
   - Empty state (when data is empty array/null)
   
   ```typescript
   if (isLoading) return <Skeleton />;
   if (error) return <ErrorMessage error={error} onRetry={refetch} />;
   if (!data?.length) return <EmptyState message="No items found" />;
   ```
   ````

2. **Test component generation**
   
   Ask Copilot to generate a new component:
   
   ```
   Create a UserProfile component that:
   - Fetches user data by ID
   - Shows avatar, name, email, and bio
   - Has edit button for own profile
   - Handles loading, error, and not-found states
   - Is fully typed with TypeScript
   ```

3. **Verify patterns are followed**
   
   Check for:
   - Function component (not class)
   - TypeScript interfaces defined
   - Hooks at top level
   - Loading/error states handled
   - Styled-components used

### ✅ Success Criteria

- [ ] Created `.github/instructions/react-components.instructions.md`
- [ ] Applies to `.tsx`, `.jsx`, and `components/**`
- [ ] Generated components are function-based
- [ ] TypeScript types are explicit (no `any`)
- [ ] Loading and error states are included
- [ ] Hooks follow rules of hooks

### ✨ The "After" — The Improved Experience

Priya's learning becomes team knowledge:

**Before**: "Did you handle loading state? Use TypeScript properly? Follow hooks rules?"  
**After**: Every component follows React best practices automatically

**Priya asks Copilot for a new component:**

```
Create a ShowCard component that displays a TV show with:
- Poster image
- Title and year
- Rating badge
- "Add to favorites" button
```

**Generated component automatically includes:**
- ✓ TypeScript interface for props
- ✓ Function component structure
- ✓ Proper hook ordering
- ✓ styled-components for styling
- ✓ Loading/error handling
- ✓ Accessibility attributes

*"It's like having David's voice in the AI,"* Priya thinks.

### 📚 Official Docs

- [GitHub Docs: Custom Instructions](https://docs.github.com/en/copilot/customizing-copilot/adding-repository-custom-instructions)
- [React Documentation](https://react.dev/)

### 💭 Priya's Growth

*"Six months ago I didn't know these patterns. I learned them from code reviews, from David's feedback, from trial and error. Now they're encoded in our repo, helping everyone—including future me—write better React code. I'm not just learning; I'm contributing to how the team learns."*

---

## 🎯 Why This Matters for Junior Developers

### Instructions as Documentation

Custom instructions are **living documentation**:
- They explain the "why" behind patterns
- They include examples of good vs. bad code
- They're always up-to-date (unlike wikis that rot)
- They actively help you when you need it

### Learning Acceleration

When Copilot follows the instructions, you see:
- Correct patterns applied in context
- Real examples in your actual codebase
- Consistent approaches you can learn from
- Best practices without asking "dumb questions"

### Confidence Building

*"I wasn't sure if my approach was right. Now I see the AI following the same patterns I'm learning. It validates that I'm on the right track."*

---

## 🚀 Challenge Extension: Component Variants

Add instructions for specific component types:

**Form Components**:
```markdown
---
applyTo: "**/forms/**"
---

# Form Component Standards

- Use react-hook-form for form state
- Implement proper validation messages
- Support keyboard navigation
- Handle loading state during submission
- Show success/error feedback
```

**Data Display Components**:
```markdown
---
applyTo: ["**/tables/**", "**/lists/**", "**/grids/**"]
---

# Data Display Standards

- Support sorting and filtering
- Handle empty states gracefully
- Implement pagination for large datasets
- Support loading skeletons
- Use semantic table markup for tabular data
```

---

## 🎯 Priya's Module Summary

### Your Transformation

| Before | After |
|--------|-------|
| Uncertain which patterns are "right" | Clear standards encoded in repo |
| Different approaches in every component | Consistent patterns everywhere |
| Learning through code review feedback | Learning through AI demonstration |
| Knowledge in senior devs' heads | Knowledge accessible to everyone |

### Artifacts You Created

```
.github/instructions/
└── react-components.instructions.md    # Team React standards
```

### The Junior Developer's Win

You're not just consuming knowledge—you're **contributing** to how the team captures it:

- **Documentation that works**: Instructions help in the moment, not in a wiki no one reads
- **Learning multiplier**: Every component you see follows patterns you can learn from
- **Confidence boost**: AI validates that your approach matches team standards
- **Contribution opportunity**: As you learn new patterns, you can propose instruction updates

---

## ➡️ Continue Your Journey

**Next for Priya**: [Module 6: Agent Skills](../06-agent-skills/README.md) — See how Elena's testing skills work with your component patterns.

**Also relevant**: [Module 3: Custom Prompts](../03-custom-prompts/README.md) — Create reusable prompts for common component patterns you encounter.
