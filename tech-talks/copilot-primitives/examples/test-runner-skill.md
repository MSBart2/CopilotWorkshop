---
name: test-runner
description: Run tests, analyze failures, and suggest fixes for unit and integration tests. Use when asked to test code, debug test failures, add test coverage, or generate new test cases. Works with Jest, Vitest, and most JavaScript/TypeScript testing frameworks.
license: MIT
compatibility: Requires Node.js 18+ and npm
metadata:
  author: copilot-training
  version: "1.0"
allowed-tools: Bash(npm:*) Bash(npx:*) Read
---

# Test Runner Skill

Run tests, analyze failures, and suggest targeted fixes.

## Directory Structure

```
test-runner/
├── SKILL.md                          # This file
├── scripts/
│   ├── run-tests.sh                  # Execute tests with formatting
│   └── coverage-check.sh             # Check coverage thresholds
├── references/
│   ├── FAILURE-PATTERNS.md           # Common failure patterns + fixes
│   └── FRAMEWORK-DETECTION.md        # How to detect test framework
└── assets/
    ├── test-template.ts              # Template for new test files
    └── jest-debug-launch.json        # VS Code debug config
```

## When to Use

- User asks to run, fix, or write tests
- User mentions test failures, coverage, or debugging tests
- User says "why is this test failing?"
- User wants to add test coverage for existing code

## Workflow

### 1. Detect Test Framework

Check `package.json` for test runner. See [framework detection](references/FRAMEWORK-DETECTION.md) for details.

```bash
# Quick detection
grep -E '"jest"|"vitest"|"mocha"' package.json
```

### 2. Run Tests

Use [scripts/run-tests.sh](scripts/run-tests.sh) to execute tests:

```bash
# Run specific file
scripts/run-tests.sh path/to/test.test.ts

# Run tests matching pattern
scripts/run-tests.sh --pattern "user login"

# Run with coverage
scripts/run-tests.sh --coverage
```

### 3. Analyze Failures

When tests fail, check [references/FAILURE-PATTERNS.md](references/FAILURE-PATTERNS.md) for common patterns:

- **Missing mock** → Add `jest.mock()` or `vi.mock()` for external dependencies
- **Async timing** → Wrap assertions in `waitFor()` or use `findBy*` queries
- **Stale snapshot** → Run `npm test -- -u` to update
- **Import error** → Check module resolution and path aliases

### 4. Generate New Tests

Use [assets/test-template.ts](assets/test-template.ts) as starting point:

```typescript
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ComponentUnderTest } from './ComponentUnderTest';

describe('ComponentUnderTest', () => {
  it('renders without crashing', () => {
    render(<ComponentUnderTest />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  it('handles user interaction', async () => {
    const user = userEvent.setup();
    render(<ComponentUnderTest />);
    await user.click(screen.getByRole('button'));
    await waitFor(() => {
      expect(screen.getByText('Updated')).toBeInTheDocument();
    });
  });
});
```

### 5. Check Coverage

Use [scripts/coverage-check.sh](scripts/coverage-check.sh) to validate thresholds:

```bash
# Check against project thresholds (default: 80%)
scripts/coverage-check.sh

# Check with custom threshold
scripts/coverage-check.sh --threshold 90
```

## Key Rules

- Always run existing tests before making changes to verify baseline
- Match the test framework already in use (don't mix Jest and Vitest)
- Follow project conventions for test file location (`__tests__/` or `*.test.ts`)
- Use the template in `assets/` as a starting point — adapt to project patterns
- Run coverage check after adding tests to verify improvement
