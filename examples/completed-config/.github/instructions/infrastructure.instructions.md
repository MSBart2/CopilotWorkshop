---
applyTo:
  - "Dockerfile*"
  - "docker-compose*.yml"
  - ".github/workflows/**"
  - "**/terraform/**"
  - "**/k8s/**"
  - "**/*.tf"
---

# Infrastructure & DevOps Standards for FanHub

> **Note**: This is a sample custom instructions file that Copilot will automatically include when working with infrastructure and deployment files.

When generating or modifying infrastructure files, follow these security and operational best practices.

## Dockerfile Best Practices

### Security (Required)

```dockerfile
# ✅ Use specific version tags, not 'latest'
FROM node:20.10-alpine

# ✅ Run as non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

# ✅ Use multi-stage builds to minimize image size
FROM node:20.10-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20.10-alpine AS runtime
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
USER appuser
```

### Optimization

```dockerfile
# ✅ Order layers from least to most frequently changed
COPY package*.json ./
RUN npm ci --only=production
COPY . .

# ✅ Use .dockerignore to exclude unnecessary files
# ✅ Combine RUN commands to reduce layers
RUN apt-get update && apt-get install -y \
    package1 \
    package2 \
    && rm -rf /var/lib/apt/lists/*
```

### Health Checks (Required for FanHub)

```dockerfile
# Always include health checks for orchestrator compatibility
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:3000/health || exit 1
```

## GitHub Actions Patterns

### Workflow Structure

```yaml
name: Descriptive Workflow Name

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

concurrency:
  group: ${{ github.workflow }}-${{ github.ref }}
  cancel-in-progress: true

jobs:
  job-name:
    runs-on: ubuntu-latest
    timeout-minutes: 15  # Always set timeout
    
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
```

### Security

```yaml
# ✅ Pin action versions to SHA for security
- uses: actions/checkout@b4ffde65f46336ab88eb53be808477a3936bae11

# ✅ Minimize permissions
permissions:
  contents: read
  pull-requests: write

# ✅ Use secrets, never hardcode
env:
  API_KEY: ${{ secrets.API_KEY }}
```

## Environment Variables

- Never commit secrets to repository
- Use `.env.example` for documentation
- Different configs for dev/staging/prod
- Validate required env vars at startup

## Security Checklist

Before merging infrastructure changes:
- [ ] No secrets in code
- [ ] Containers run as non-root
- [ ] Images use specific versions (no `latest`)
- [ ] Permissions are minimized
- [ ] Health checks are defined
- [ ] Timeouts are configured
- [ ] Resources are tagged

## Docker Compose Best Practices

```yaml
version: '3.8'

services:
  backend:
    build:
      context: ./backend
      dockerfile: Dockerfile
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=development
      - DATABASE_URL=postgres://user:pass@db:5432/fanhub
    depends_on:
      db:
        condition: service_healthy
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:3000/health"]
      interval: 30s
      timeout: 3s
      retries: 3
      start_period: 5s
    restart: unless-stopped

  db:
    image: postgres:15-alpine
    environment:
      - POSTGRES_USER=user
      - POSTGRES_PASSWORD=pass
      - POSTGRES_DB=fanhub
    volumes:
      - postgres_data:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U user -d fanhub"]
      interval: 10s
      timeout: 5s
      retries: 5

volumes:
  postgres_data:
```
