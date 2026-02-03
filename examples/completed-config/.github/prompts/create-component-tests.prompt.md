# Create Component Tests

> **Note**: This is a sample of what Copilot might generate when you ask it to create a component testing prompt. Your output will vary based on your specific requirements.

Generate comprehensive tests for a React component.

## Context

- Framework: React 18 with React Testing Library
- Test Runner: Jest
- Component Location: `frontend/src/components/`
- Test Location: `frontend/src/__tests__/`

## Instructions

When generating tests for a component:

1. **Import the component and testing utilities**
   ```javascript
   import { render, screen, fireEvent, waitFor } from '@testing-library/react';
   import userEvent from '@testing-library/user-event';
   ```

2. **Create mock data that matches PropTypes**

3. **Test categories to include:**
   - Rendering with required props
   - Rendering with optional props
   - User interactions (clicks, inputs)
   - Loading states
   - Error states
   - Edge cases (empty data, long strings)

4. **Follow the AAA pattern:**
   - Arrange: Set up test data and render
   - Act: Simulate user interaction
   - Assert: Verify expected outcome

## Template

```javascript
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ComponentName from '../components/ComponentName';

describe('ComponentName', () => {
  const defaultProps = {
    // required props with realistic test data
  };

  const renderComponent = (props = {}) => {
    return render(<ComponentName {...defaultProps} {...props} />);
  };

  describe('rendering', () => {
    it('renders without crashing', () => {
      renderComponent();
      // assertions
    });

    it('displays expected content', () => {
      renderComponent();
      // assertions
    });
  });

  describe('interactions', () => {
    it('handles user click', async () => {
      const user = userEvent.setup();
      const onClick = jest.fn();
      renderComponent({ onClick });
      
      await user.click(screen.getByRole('button'));
      
      expect(onClick).toHaveBeenCalled();
    });
  });

  describe('edge cases', () => {
    it('handles empty data gracefully', () => {
      renderComponent({ items: [] });
      // assertions for empty state
    });
  });
});
```

## Example Usage

Generate tests for the CharacterCard component that displays character name, actor, image, and a favorite button.
