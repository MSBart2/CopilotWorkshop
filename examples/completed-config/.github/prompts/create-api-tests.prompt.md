# Create API Tests

> **Note**: This is a sample of what Copilot might generate when you ask it to create an API testing prompt. Your output will vary based on your specific requirements.

Generate comprehensive tests for Express API endpoints.

## Context

- Framework: Express.js
- Test Runner: Jest
- HTTP Testing: Supertest
- Database: PostgreSQL (mocked for unit tests)
- Routes Location: `backend/src/routes/`
- Test Location: `backend/__tests__/`

## Instructions

When generating API tests:

1. **Import testing utilities**
   ```javascript
   const request = require('supertest');
   const app = require('../src/app');
   ```

2. **Mock database calls** to isolate route logic

3. **Test categories to include:**
   - Successful responses (200, 201)
   - Client errors (400, 401, 403, 404)
   - Server errors (500)
   - Input validation
   - Authentication/Authorization
   - Pagination
   - Query parameters

4. **Verify response structure** matches API contract

## Template

```javascript
const request = require('supertest');
const app = require('../src/app');
const db = require('../src/database/connection');

// Mock the database
jest.mock('../src/database/connection');

describe('GET /api/resource', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('success cases', () => {
    it('returns 200 and list of resources', async () => {
      const mockData = [{ id: 1, name: 'Test' }];
      db.query.mockResolvedValue({ rows: mockData });

      const response = await request(app)
        .get('/api/resource')
        .expect(200);

      expect(response.body).toEqual({
        success: true,
        data: mockData,
      });
    });

    it('supports pagination', async () => {
      db.query.mockResolvedValue({ rows: [] });

      await request(app)
        .get('/api/resource?page=2&limit=10')
        .expect(200);

      expect(db.query).toHaveBeenCalledWith(
        expect.stringContaining('LIMIT'),
        expect.arrayContaining([10, 10])
      );
    });
  });

  describe('error cases', () => {
    it('returns 404 when resource not found', async () => {
      db.query.mockResolvedValue({ rows: [] });

      const response = await request(app)
        .get('/api/resource/999')
        .expect(404);

      expect(response.body).toEqual({
        success: false,
        error: expect.objectContaining({
          code: 'NOT_FOUND',
        }),
      });
    });

    it('returns 400 for invalid input', async () => {
      const response = await request(app)
        .post('/api/resource')
        .send({ /* invalid data */ })
        .expect(400);

      expect(response.body.success).toBe(false);
    });
  });

  describe('authentication', () => {
    it('returns 401 without auth token', async () => {
      await request(app)
        .post('/api/resource')
        .expect(401);
    });

    it('returns 403 for unauthorized users', async () => {
      await request(app)
        .delete('/api/resource/1')
        .set('Authorization', 'Bearer user-token')
        .expect(403);
    });
  });
});
```

## Example Usage

Generate tests for the characters endpoint that supports:
- GET /api/shows/:showId/characters (list)
- GET /api/characters/:id (single)
- POST /api/characters (create, admin only)
- PUT /api/characters/:id (update, admin only)
- DELETE /api/characters/:id (delete, admin only)
