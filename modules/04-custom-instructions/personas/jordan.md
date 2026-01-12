# Jordan's Path: Custom Instructions

## 🎯 Your Focus: Preparing to Ship Character Detail v2 Securely

> 🧵 **The Golden Thread**: When Character Detail v2 is built in Module 07, it will need to be deployed. The Dockerfile hasn't been touched since the contractor left—it has security issues. This module lets you do what you've always wanted—make security and DevOps best practices **automatic**.

Jordan, instead of being the "did you run as non-root?" reviewer on every PR, you'll create instructions that ensure Dockerfiles, GitHub Actions, and infrastructure code follow your patterns from the start.

**Your exercises**: 4.3 (Infrastructure Instructions)  
**Time**: ~25 minutes  
**Theme**: Security and operational excellence by default

---

## Your Journey in This Module

```
Jordan's Arc:
┌─────────────────────────────────────────────────────────────────┐
│  "When we deploy Character Detail v2, the Dockerfile needs work"│
│                         ↓                                       │
│  Creates infrastructure.instructions.md with security patterns  │
│                         ↓                                       │
│  "Character Detail v2 will deploy securely from the start."     │
└─────────────────────────────────────────────────────────────────┘
```

---

## Exercise 4.3: Infrastructure Instructions — "Preparing to Ship Character Detail v2"

> 🧵 **The Golden Thread Continues**: When Character Detail v2 is ready in Module 07, you'll need to deploy it. Let's fix the infrastructure now so deployment goes smoothly.

### 📖 The Story

**Jordan** (Platform Engineer, 12 years) is thinking ahead to deploying Character Detail v2. He opens the project's Dockerfile and groans.

*"This Dockerfile is from the contractor days,"* Jordan explains. *"It runs as root, uses the `latest` tag, no health check, no multi-stage build. It'll work, but it's a security incident waiting to happen."*

The team realizes they need to fix the Dockerfile before they even build Character Detail v2. But Jordan has a broader concern:

*"I can fix this manually, but what about when the agent generates infrastructure changes in Module 07? I want Copilot to enforce our infra patterns automatically."*

### ❌ The "Before" — The Contractor's Dockerfile

Look at the current `fanhub/backend/Dockerfile`:

```dockerfile
# Contractor's original Dockerfile - security issues
FROM node:latest

WORKDIR /app
COPY . .
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]
```

**The problems:**
- Uses `latest` tag (unpinned version)
- Runs as root user (security risk)
- No multi-stage build (image bloat)
- No health check (orchestrator can't monitor)
- Copies everything including dev dependencies
- No `.dockerignore` awareness

**Jordan's Typical PR Comments:**
- "Please pin the base image version"
- "Add `USER nonroot` - never run containers as root"
- "Include a HEALTHCHECK instruction"
- "Use multi-stage build to exclude dev dependencies"

*"I've written these comments hundreds of times,"* Jordan sighs.

### 🎯 Objective

Create specialized instructions for infrastructure and deployment files, then use them to fix the Dockerfile in preparation for Character Detail v2 deployment.

### 📋 Steps

1. **Create infrastructure instructions**
   
   Create: `.github/instructions/infrastructure.instructions.md`
   
   ````markdown
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
   # ... build steps ...
   
   FROM node:20.10-alpine AS runtime
   COPY --from=builder /app/dist /app/dist
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
   
   ### Health Checks
   
   ```dockerfile
   # Always include health checks
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
   # ✅ Pin action versions to SHA
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
   
   ## Terraform Patterns
   
   ```hcl
   # Use consistent naming
   resource "aws_s3_bucket" "app_assets" {
     bucket = "${var.project_name}-${var.environment}-assets"
     
     tags = {
       Environment = var.environment
       Project     = var.project_name
       ManagedBy   = "terraform"
     }
   }
   
   # Always use variables, not hardcoded values
   # Always tag resources
   # Use modules for reusable patterns
   ```
   
   ## Security Checklist
   
   Before merging infrastructure changes:
   - [ ] No secrets in code
   - [ ] Containers run as non-root
   - [ ] Images use specific versions
   - [ ] Permissions are minimized
   - [ ] Health checks are defined
   - [ ] Timeouts are configured
   - [ ] Resources are tagged
   ````

2. **Test with a Dockerfile request**
   
   ```
   Create a Dockerfile for a Node.js Express application that:
   - Builds the TypeScript code
   - Runs in production mode
   - Is optimized for size and security
   ```
   
   Verify: Non-root user, multi-stage build, pinned versions, health check.

3. **Test with a GitHub Actions request**
   
   ```
   Create a GitHub Actions workflow that:
   - Runs on push to main and PRs
   - Installs dependencies
   - Runs linting and tests
   - Builds the application
   - Deploys to staging on main push
   ```
   
   Verify: Concurrency, timeout, pinned actions, secrets usage.

### ✅ Success Criteria

- [ ] Created `.github/instructions/infrastructure.instructions.md`
- [ ] `applyTo` includes Dockerfile, workflows, terraform patterns
- [ ] Generated Dockerfiles follow security patterns
- [ ] GitHub Actions include timeouts and concurrency
- [ ] No hardcoded secrets in generated code

### ✨ The "After" — The Improved Experience

Jordan's DevOps expertise is always available:

**Before**: Review every Dockerfile for "did they run as root?"  
**After**: Non-root user is automatic

**New Developer Submits Dockerfile PR:**

The AI-generated Dockerfile:
```dockerfile
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
EXPOSE 3000
HEALTHCHECK --interval=30s --timeout=3s CMD curl -f http://localhost:3000/health || exit 1
CMD ["node", "dist/index.js"]
```

Jordan's review: *"Ship it."* ✅

**Security improvement**: Infrastructure files are secure by default

### 📚 Official Docs

- [GitHub Docs: Custom Instructions](https://docs.github.com/en/copilot/customizing-copilot/adding-repository-custom-instructions)
- [Docker Security Best Practices](https://docs.docker.com/develop/security-best-practices/)
- [GitHub Actions Security Hardening](https://docs.github.com/en/actions/security-guides/security-hardening-for-github-actions)

### 💭 Jordan's Relief

*"I've been the 'Docker security guy' for years. Now I've uploaded my brain to Copilot. Every developer gets my 12 years of 'always run as non-root' without me reviewing every PR. I can finally focus on architecture, not checklists."*

---

## 🚀 Challenge Extension: Environment-Specific Instructions

Create instructions for different environments:

**Production Configs** (`.github/instructions/production.instructions.md`):
```markdown
---
applyTo:
  - "**/prod/**"
  - "**/*.prod.*"
  - "**/production/**"
---

# Production Configuration Standards

- Always enable all security headers
- Require authentication on all endpoints
- Enable comprehensive logging
- Configure alerts for error rates > 1%
- Use read replicas for database queries
```

**Development Configs** (`.github/instructions/development.instructions.md`):
```markdown
---
applyTo:
  - "**/dev/**"
  - "**/*.dev.*"
  - "**/local/**"
---

# Development Configuration Standards

- Enable hot reload
- Use local database (never connect to prod)
- Enable verbose logging for debugging
- Disable authentication for local testing (optional)
```

---

## 🎯 Jordan's Module Summary

### Your Transformation

| Before | After |
|--------|-------|
| Manual security review on every infra PR | Security patterns built-in from the start |
| Knowledge locked in your head | Knowledge encoded and shared |
| Bottleneck on infrastructure changes | Team moves independently with guardrails |
| Vacation = security risks | Standards enforced 24/7 |

### Artifacts You Created

```
.github/instructions/
└── infrastructure.instructions.md    # Your 12 years of DevOps expertise
```

### The Platform Engineer's Win

You're no longer the bottleneck—you're the **force multiplier**:

- **Standards scale**: Every developer gets your expertise automatically
- **Security by default**: No more "oops, ran as root" incidents
- **Focus shifts**: From checklist reviewer to architecture strategist
- **Team grows**: Junior devs learn patterns by seeing AI follow them

---

## ➡️ Continue Your Journey

**Next for Jordan**: [Module 5: Agent Skills](../../05-agent-skills/README.md) — Create skills that complement your infrastructure instructions.

**The Payoff**: [Module 7: Custom Agents](../../07-custom-agents/README.md) — Watch your infrastructure instructions activate when the agent deploys Character Detail v2!
