---
name: component
description: Generate a React component with TypeScript, tests, and documentation
---

# Component Generator

Create a new React component following our team's standards and best practices.

## Files to Create

Generate the following file structure:

```
src/components/{{componentName}}/
  {{componentName}}.tsx           # Component implementation
  {{componentName}}.types.ts      # TypeScript interfaces
  {{componentName}}.module.css    # Component styles (CSS Modules)
  __tests__/
    {{componentName}}.test.tsx    # Unit tests
  index.ts                        # Barrel export
```

## Component Template Requirements

### TypeScript Implementation

````typescript
import React from 'react';
import { {{componentName}}Props } from './{{componentName}}.types';
import styles from './{{componentName}}.module.css';

/**
 * [Brief description of component purpose]
 *
 * @example
 * ```tsx
 * <{{componentName}} prop1="value" />
 * ```
 */
export const {{componentName}}: React.FC<{{componentName}}Props> = ({
  // Destructure props here
}) => {
  return (
    <div className={styles.container} role="[appropriate-role]">
      {/* Component implementation */}
    </div>
  );
};
````

### Props Interface

```typescript
/**
 * Props for the {{componentName}} component
 */
export interface {{componentName}}Props {
  /**
   * [Prop description]
   */
  prop1: string;

  /**
   * [Prop description]
   * @default defaultValue
   */
  prop2?: number;
}
```

### Test Template

```typescript
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { {{componentName}} } from '../{{componentName}}';

describe('{{componentName}}', () => {
  it('renders with default props', () => {
    render(<{{componentName}} prop1="test" />);
    expect(screen.getByRole('[role]')).toBeInTheDocument();
  });

  it('handles user interactions', async () => {
    const user = userEvent.setup();
    render(<{{componentName}} prop1="test" />);
    // Test interactions
  });

  it('is accessible', () => {
    const { container } = render(<{{componentName}} prop1="test" />);
    // Run axe accessibility tests
  });
});
```

## Requirements Checklist

- [ ] Component uses TypeScript with explicit prop types
- [ ] JSDoc comments on component and all props
- [ ] Appropriate ARIA attributes for accessibility
- [ ] CSS Modules for styles (not inline styles)
- [ ] Unit tests with 100% coverage
- [ ] Tests include accessibility checks
- [ ] Barrel export in index.ts
- [ ] Named export (not default export)

## Usage After Creation

Import using barrel export:

```typescript
import { {{componentName}} } from '@/components/{{componentName}}';
```

Component name: {{componentName}}
