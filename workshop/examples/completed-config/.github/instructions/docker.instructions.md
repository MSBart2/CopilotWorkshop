<!-- Reference implementation for Module 4, Exercise 4.3: Context-Specific Instructions -->
<!-- This example demonstrates: Docker best practices for container files -->

---

name: docker-best-practices
description: 'Container and Docker Compose standards'
applyTo: '**/Dockerfile,**/docker-compose.yml,\*\*/docker-compose.yaml'

---

# Docker Development Standards

Follow container best practices for Dockerfile and docker-compose files.

## Dockerfile Patterns

**Multi-stage builds**:

```dockerfile
# Build stage
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production stage
FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY package*.json ./
RUN npm ci --production
CMD ["node", "dist/server.js"]
```

**Layer optimization**:

```dockerfile
# ✅ Correct (cache dependencies)
COPY package*.json ./
RUN npm install
COPY . .

# ❌ Avoid (invalidates cache on every code change)
COPY . .
RUN npm install
```

**Security**:

- Use specific versions: `node:18-alpine`, not `node:latest`
- Run as non-root user
- Minimize installed packages
- Use `.dockerignore`

## Docker Compose

**Service dependencies**:

```yaml
services:
  backend:
    depends_on:
      - database

  frontend:
    depends_on:
      - backend
```

**Environment variables**:

```yaml
environment:
  NODE_ENV: development
  DATABASE_URL: postgresql://user:pass@db:5432/fanhub
```

**Volume mounts for development**:

```yaml
volumes:
  - ./backend:/app
  - /app/node_modules # Exclude node_modules
```

**Health checks**:

```yaml
healthcheck:
  test: ["CMD", "curl", "-f", "http://localhost:5000/health"]
  interval: 30s
  timeout: 10s
  retries: 3
```

## FanHub-Specific

**Ports**:

- Frontend: 3000
- Backend: 5000
- PostgreSQL: 5432

**Build context**:

```yaml
frontend:
  build:
    context: ./frontend
    dockerfile: Dockerfile
```
