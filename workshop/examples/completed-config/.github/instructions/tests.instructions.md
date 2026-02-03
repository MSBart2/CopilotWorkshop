<!-- Reference implementation for Module 4, Exercise 4.3: Context-Specific Instructions -->
<!-- This example demonstrates: Testing conventions for test directories -->

---

name: testing-conventions
description: 'Jest and testing best practices'
applyTo: '**/**tests**/**,**/\*.test.{js,jsx,ts,tsx},**/\*.spec.{js,jsx,ts,tsx}'

---

# Testing Standards

Follow Jest conventions for all test files.

## Test Structure

**Describe blocks for grouping**:

```javascript
describe("CharacterService", () => {
  describe("fetchCharacter", () => {
    it("returns character data for valid ID", async () => {
      // Test
    });

    it("throws error for invalid ID", async () => {
      // Test
    });
  });
});
```

## Test Naming

**Descriptive test names**:

```javascript
// ✅ Correct
it("returns 404 when character does not exist", async () => {});

// ❌ Avoid
it("test character fetch", async () => {});
```

## Assertions

**Specific matchers**:

```javascript
expect(result).toBe(42);
expect(array).toEqual([1, 2, 3]);
expect(fn).toHaveBeenCalledWith("arg");
expect(promise).rejects.toThrow("Error");
```

## Mocking

**Mock external dependencies**:

```javascript
jest.mock("../services/api");

const mockFetch = jest.fn();
api.fetchCharacter.mockResolvedValue({ id: 1, name: "Test" });
```

## Setup/Teardown

**Use beforeEach/afterEach**:

```javascript
beforeEach(() => {
  jest.clearAllMocks();
});

afterEach(() => {
  jest.restoreAllMocks();
});
```

## Async Testing

**async/await in tests**:

```javascript
it("fetches character data", async () => {
  const data = await fetchCharacter(1);
  expect(data.name).toBe("Walter White");
});
```

## Coverage

**Test all paths**:

- Success cases
- Error cases
- Edge cases (null, empty, invalid input)
- Boundary conditions
