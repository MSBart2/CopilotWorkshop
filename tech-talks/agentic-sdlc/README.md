# Agentic SDLC: Infrastructure for AI Velocity

> **The Question This Talk Answers:**
> *"How do I rewire repositories, PR workflows, and CI/CD to scale from 2-3 features/week to 10-15 features/day with AI agents?"*

**Duration:** 90 minutes | **Target Audience:** Architects / Platform Engineers / Engineering Leaders

---

## 📊 Content Fitness

| Criterion | Assessment | Notes |
|-----------|-----------|-------|
| **Relevant** | 🟢 High | AI agents generate 10-15x more code than humans can review — traditional SDLC collapses at this velocity |
| **Compelling** | 🟢 High | Complete architectural blueprint with working artifacts (Nx configs, Dockerfiles, GitHub Actions) for 100x throughput increase |
| **Actionable** | 🟢 High | Three-part implementation roadmap: repo topology → PR workflows → CI trust factory with measurable metrics at each phase |

**Overall Status:** 🟢 Ready to use

---

## 📽️ Slide Generation Mapping

### Slide Sequence (Generated Automatically)

1. **Title/Logo Slide** ← H1 title + subtitle
2. **Question/Objective Slide** ← "The Question This Talk Answers"
3. **Table of Contents Slide** ← Auto-generated from 🎬 sections
4. **Problem Slide** ← "The Problem"
5. **Solution Overview** ← "The Solution"
6. **Key Artifacts** ← "Key Artifacts" inventory
7. **Mental Model Shift** ← Move-Toward/Away/Against
8. **When to Use Decision Tree** ← "When to Use This Pattern"
9. **Repository Topology** ← 🎬 Section 1 (5-6 slides)
10. **PR Workflows** ← 🎬 Section 2 (5-6 slides)
11. **Trust Manufacturing** ← 🎬 Section 3 (6-7 slides)
12. **Implementation Roadmap** ← 🎬 Section 4 (2-3 slides)
13. **Use Cases** ← Real-World Use Cases (2 slides)
14. **Actionable Outcomes** ← What You Can Do Today
15. **Related Patterns** ← Related Patterns
16. **Official Documentation** ← 📚 section
17. **End Slide** ← Auto-generated

### Major Sections (TOC Entries)

```markdown
<!-- 🎬 MAJOR SECTION: Repository Topology -->
<!-- 🎬 MAJOR SECTION: PR Workflows -->
<!-- 🎬 MAJOR SECTION: Trust Manufacturing -->
<!-- 🎬 MAJOR SECTION: Implementation Roadmap -->
```

---

## The Problem

### Key Points

- **Code volume explosion**
  AI agents generate 500-2000 lines per feature in 15 minutes — 10-15 features/day vs. 2-3/week from human teams.

- **Traditional SDLC wasn't designed for this velocity**
  Repo structures optimized for human collaboration create coordination overhead when agents touch 2+ repos per feature.

- **Review capacity bottleneck**
  Humans can't review 15,000 lines/day at the detail level trained for 300 lines/day — the bottleneck shifts from coding to governance.

- **CI becomes the critical path**
  When CI takes 60+ minutes, agents sit idle. When test flake rate >10%, nobody trusts green builds.

### Narrative

Your organization just adopted GitHub Copilot agents. Within weeks, agents are generating feature-scale code — 500 to 2000 lines per implementation, touching 5-8 files, with tests and documentation included. Velocity skyrockets from 2-3 features per week to potentially 10-15 per day.

Then reality hits. The repository structure forces agents to coordinate changes across 3-5 repos for a single feature. PRs pile up because reviewers can't keep pace — line-by-line review of 15,000 lines/day is impossible. CI queues grow to 60-90 minutes because the pipeline was designed for 3 builds/day, not 30. Test flakiness that was "annoying but tolerable" at 5% failure rate becomes catastrophic when it blocks 15 PRs/day. Security and compliance checks that took 4 hours with manual sign-offs can't scale to agent velocity.

The infrastructure designed for Gen-3 SDLC (humans assisted by AI autocomplete) collapses under Gen-4 pressure (AI agents as primary producers). Your agents can write code faster than your infrastructure can prove it's safe to ship.

This talk provides the architectural blueprint to rewire your SDLC for AI velocity: repository topology that minimizes coordination, PR workflows that scale to feature-scale payloads, and CI pipelines that manufacture trust at 10-15 features/day.

---

## The Solution: Gen-4 SDLC Architecture

### What It Does

The Gen-4 SDLC architecture transforms three critical infrastructure layers — repositories, pull request workflows, and continuous integration — from human-optimized collaboration tools into agent-native delivery infrastructure capable of sustainable 10-15 features/day throughput.

### Key Capabilities

- **Agent-Native Repository Topology**: Monorepo with enforced module boundaries, hermetic builds, and affected analysis — agents navigate via grep, not GitHub search
- **Outcome-Focused PR Workflows**: Intent-based specifications, evidence-bundle reviews, and policy-gated merges — humans validate outcomes, not implementation details
- **CI as Trust Factory**: Fast feedback (<10 min), context-aware validation with agents, zero-flake tolerance, and attestation generation — manufacturing trust at agent velocity
- **100x Throughput Scaling**: From 150 features/year (Gen-3) to 3,600 features/year (Gen-4) with maintained or improved quality and compliance

### Architecture Overview

The Gen-4 transformation operates at three layers that stack and reinforce each other:

**Layer 1 (Foundation): Repository Topology** reorganizes code boundaries so agents can find everything they need in a single atomic workspace. This eliminates the coordination tax — when agents must touch 3 repos to implement a feature, you pay 3x merge + 3x deploy + N handoffs in overhead. Monorepo structure with tools like Nx provides module boundary enforcement (not suggestions), hermetic builds (deterministic CI signals), and affected analysis (test only what changed).

**Layer 2 (Governance): PR Workflows** move human review up-stack from "read every line" to "validate outcomes against intent." PRs become evidence bundles: intent specification + code diff + automated check results + attestations. Humans answer "does this meet requirements?" not "why did you use a Map on line 47?" This shifts bottleneck capacity from 300 lines/day/reviewer to 15,000 lines/day/reviewer.

**Layer 3 (Trust Manufacturing): CI Pipeline** transforms from quality gate to trust factory. Speed matters — 60-minute CI means agents idle 80% of the time. The target is <10 minutes for PR checks via parallelization, caching, and affected analysis. Context-aware validation uses agents to apply judgment (not just pattern matching) for compliance. Zero-flake tolerance makes green builds trustworthy again. Attestations provide audit trails for regulated environments.

These three layers compound: fast CI enables high PR velocity, which requires streamlined review, which depends on atomic repo changes. Miss any layer and the system bottlenecks.

**Official Documentation:**
- 📖 [Nx Monorepo Tools](https://nx.dev/) — Build orchestration, module boundaries, and affected analysis
- 📖 [GitHub Actions Documentation](https://docs.github.com/en/actions) — CI/CD workflow automation
- 📖 [SLSA Framework](https://slsa.dev/) — Supply chain security and attestation standards

---

## 📦 Key Artifacts

**This talk includes comprehensive infrastructure examples** spanning repository configuration, CI workflows, and governance policies. All artifacts are working code you can adapt.

### Primary Artifacts

*Shown inline with detailed explanation in the major sections*

- **`nx.json` + `tsconfig.base.json`** — Monorepo structure with enforced module boundaries
- **`Dockerfile` (hermetic build example)** — Deterministic builds with exact dependency versions
- **`.github/workflows/pr-checks.yml`** — Fast feedback CI pipeline with affected analysis
- **`.github/policies/CODEOWNERS`** — Automated code ownership and routing

### Supporting Files

*Referenced but not shown inline — architectural patterns*

- **Control-plane repository structure** — Enterprise policies separated from product code
- **Evidence-bundle PR template** — Required artifacts for outcome-based review
- **Attestation generation workflow** — SLSA compliance and audit trails

**Guidance:** Primary artifacts demonstrate the "what" (actual configs). Supporting patterns show the "how" (organizational implementation). Together they form a complete Gen-4 SDLC blueprint.

---

## 🎯 Mental Model Shift

> **The Core Insight:** From "infrastructure supports human collaboration" to "infrastructure enables agent velocity while humans govern outcomes"

### Move Toward (Embrace These Patterns)

- ✅ **Monorepo by Default**: Consolidate when agents touch 2+ repos for >30% of features → Atomic changes, zero coordination, unified tooling
- ✅ **Outcome-Based Review**: Validate "does implementation match intent?" not "why line 47?" → 50x review capacity increase
- ✅ **CI as Trust Factory**: Manufacture evidence at agent velocity with <10 min feedback → Agents productive 95% of time vs. 20%
- ✅ **Enforced Boundaries**: Build-time module constraints (not comments or conventions) → Architectural decay prevention at scale
- ✅ **Zero-Flake Tolerance**: Quarantine on first flake, fix within 2 days or disable → Green builds become trustworthy signals

### Move Away From (Retire These Habits)

- ⚠️ **Multi-Repo Without Justification**: "We've always had separate repos" → Agent coordination overhead exceeds any organizational benefits
- ⚠️ **Line-by-Line Code Review**: Reading every line of 500-2000 line diffs → Can't scale to 15 PRs/day, misses forest for trees
- ⚠️ **Tolerating Flaky CI**: "Just rerun until it passes" → When 10% flake rate × 15 PRs/day = nobody trusts green builds
- ⚠️ **Manual Governance at Machine Speed**: 22 approval gates per feature → Agent velocity collapses to human bottleneck speed

### Move Against (Active Resistance Required)

- 🛑 **Suggested Boundaries**: Comments like `// @internal - don't import this!` → Agents don't read comments; boundaries must be enforced at build time
- 🛑 **Non-Hermetic Builds**: `npm install` without lockfile, `apt-get update` in Dockerfiles → Non-deterministic CI creates false confidence in green builds

> **Example Transformation:** Before: Agent implements feature touching 3 repos. Day 1: open PR in repo A (45 min CI), wait 4 hours for human review. Day 2: open PR in repo B, discover contract mismatch, return to repo A. Day 3: coordinate deploy order, staging fails, debug across repos. Result: 6 hours of agent work, 3 days of coordination, 2 rollbacks. After: Monorepo enables atomic change across all 3 modules in single PR. 8 minutes CI, 20 minutes outcome-based review, one deploy. Result: 6 hours agent work, 2 hours human time, zero rollbacks.

---

## When to Use This Pattern

### Decision Tree

```
Q: What's your current agent throughput vs. target?
├─ "2-3 features/week, want 10-15/day"
│  → Use: Full Gen-4 SDLC (this talk)
│  └─ Best for: Platform transformation, sustainable AI velocity
│
├─ "Haven't started with agents yet"
│  → Use: Agentic Journey (incremental adoption)
│  └─ Best for: Proving value before infrastructure investment
│
├─ "Already doing 5-10/day but hitting scaling limits"
│  → Use: Identify bottleneck layer
│  ├─ Repo coordination → Apply Part 1 (Repository Topology)
│  ├─ Review capacity → Apply Part 2 (PR Workflows)
│  └─ CI speed/flakiness → Apply Part 3 (Trust Manufacturing)
│
└─ "Need executive framing for transformation"
   → See: Agentic Delivery (exec-talks)
   └─ Best for: Budget approval, org change management
```

### Use This Pattern When

- Agents are touching 2+ repos for >30% of features (coordination overhead exceeds value)
- PR review queue exceeds 5 days (human review is the bottleneck)
- CI pipeline takes >30 minutes or has >5% flake rate (trust manufacturing can't keep pace)
- You're ready for 3-6 month infrastructure investment with 100x annual output ROI

### Don't Use This Pattern When

- You haven't proven agent value yet → Start with [Agentic Journey](../agentic-journey/) quick wins
- Team size <5 developers → Infrastructure overhead may exceed benefits
- Regulatory requires physical repo separation → Multi-repo is mandatory, focus on Parts 2-3 only
- You need immediate results in <1 month → Incremental adoption path is better fit

### Comparison with Related Features

| Aspect | This Talk (Agentic SDLC) | Agentic Journey | Enterprise Patterns |
|--------|--------------------------|-----------------|---------------------|
| **Best For** | Platform transformation for sustained AI velocity | Quick wins without restructuring | Organization-wide scaling |
| **Setup Time** | 3-6 months | 2-3 hours per phase | 6-12 months |
| **Throughput Gain** | 100x annual (150 → 3,600 features/year) | 15-20x (3/week → 10/week) | 200x+ (multi-team compounding) |
| **Risk Level** | High (infrastructure change) | Low (additive only) | Very High (organizational) |
| **Prerequisites** | Agent adoption + bottleneck pain | GitHub Actions + Copilot license | Executive sponsorship |

---

<!-- 🎬 MAJOR SECTION: Repository Topology -->
## Part 1: Repository Topology

*Rewiring code boundaries for agents that navigate via grep, not GitHub search*

### The Core Challenge

Repository structures were designed for human team collaboration — frontend in one repo, backend in another, microservices each in their own. This organizational clarity becomes coordination overhead when agents touch 3-5 repos to ship a single feature.

**The Formula:** Agent velocity × Repo coordination overhead = Actual throughput

When agents cross repo boundaries frequently, you pay exponential coordination costs: multiple PRs, coordinated deploys, contract synchronization, and handoff delays.

### Why Traditional Structures Fail

**Traditional (Gen-3) Assumptions:**
- **Humans produce code** — 10-50 lines/hour, context-switching every 23 minutes
- **PRs are collaboration forums** — "Can you explain this?" "Why did you...?" "LGTM 🚀"
- **Repo structure optimized for teams** — "Frontend in one repo, backend in another"
- **Boundaries are social contracts** — Comments, conventions, and code review

**Agentic (Gen-4) Reality:**
- **Agents produce feature-scale payloads** — 500-2000 lines in 15 minutes, zero context switching
- **Humans govern safety and outcomes** — "Ship the feature" or "Roll it back" (not line-level review)
- **Repo structure optimized for agents** — "Everything this agent needs is in one atomic boundary"
- **Boundaries must be enforced** — Build-time failures, not suggestions

> 💡 **The Shift:** Agents don't read comments or respect conventions — they follow import rules enforced at build time.

### Goal: Maximum Throughput Without Losing Trust


**What We're Optimizing For:**

| Traditional Metric | Gen-4 Metric | Target |
|--------------------|--------------|--------|
| Lines of code written | Features shipped | 10-15/day |
| Code review depth | Outcome validation speed | <20 min/PR |
| Manual quality gates | Automated trust evidence | 90% automated |
| Repository count | Coordination overhead | <30% cross-repo |

**The Trade-Off:** Monorepo adds tooling complexity (Nx, Bazel, Lerna) in exchange for eliminating coordination overhead. Worth it when agents touch multiple repos >30% of the time.

### Monorepo vs Multi-Repo Decision

#### The 6-Hour Feature (War Story)

A SaaS company had 18 microservice repos. To ship a feature touching 3 services:

- **Day 1:** Open PR in repo A, wait for CI (45 min), wait for review (4 hours)
- **Day 2:** Open PR in repo B, discover contract mismatch, go back to repo A
- **Day 3:** Coordinate deploy order, staging fails, debug across repos

**Result:** 6 hours of agent work, 3 days of human coordination, 2 rollbacks

**After monorepo migration:** 45 minutes end-to-end, 1 atomic PR, 0 coordination overhead

#### Monorepo (Default for 80% of Product Teams)

**Advantages:**
- **Atomic cross-module changes** — Change API + all 7 call sites in one PR, not 8 coordinated PRs
- **Shared patterns are local** — `import { validateEmail } from '@libs/validation'`, not "which version?"
- **Agent navigation via grep** — "Where's the auth middleware?" → One `rg` command instead of GitHub search across repos
- **Unified CI pipeline** — Consistent standards, shared tooling, single cache

**When This Works Best:**
- Product teams building cohesive applications
- High feature interdependency across modules
- Agents frequently touch 2+ components per feature
- Team size 5-100 developers (scales with tooling)

#### Multi-Repo (When You Actually Need It)

**Valid Use Cases:**
- **Hard access boundaries** — PCI-regulated payment processing physically separated from marketing site
- **Independent lifecycles** — Mobile app (6-month releases) + web app (daily deploys) truly don't share code
- **Regulatory/compliance mandates** — Auditor requires physical separation
- **Organizational constraints** — Acquired company not ready to merge (temporary state)

**Warning Signs You Don't Need Multi-Repo:**
- "We've always done it this way" — Not a technical reason
- "Different teams own them" — Solved by CODEOWNERS, not repo boundaries
- "They deploy at different rates" — Solved by independent deploy pipelines, not repos

> 🎯 **Decision Rule:** If agents touch >1 repo for >30% of features, consolidate into monorepo.

### Recommended Baseline: Agent-Native Monorepo Structure

```
product-monorepo/
├── .github/
│   ├── agents/                  # Custom agent configs
│   │   ├── feature-builder.agent.md
│   │   ├── review-enforcer.agent.md
│   │   └── test-generator.agent.md
│   ├── workflows/               # CI pipelines
│   │   ├── pr-checks.yml        # Fast feedback (< 10min)
│   │   ├── deploy-staging.yml
│   │   └── deploy-prod.yml
│   └── policies/                # Governance rules
│       ├── CODEOWNERS          # Who owns what
│       ├── branch-protection.json
│       └── security-scanning.yml
│
├── apps/                        # Deployable units
│   ├── web/                     # Frontend SPA
│   ├── api/                     # Backend service
│   ├── admin/                   # Admin dashboard
│   └── mobile/                  # Mobile app (if web stack)
│
├── libs/                        # Shared code libraries
│   ├── auth/                    # Authentication utilities
│   ├── data-access/            # Database layer
│   ├── ui-components/          # Component library
│   └── validation/             # Business rules
│
├── tools/                       # Build/dev tooling
│   ├── generators/             # Scaffolding templates
│   └── scripts/                # Automation scripts
│
├── nx.json                      # Build orchestrator config
├── package.json                 # Dependencies manifest
└── tsconfig.base.json          # Shared TypeScript config
```

**Why This Structure:**
- **`apps/`** = deployable boundaries (each can ship independently)
- **`libs/`** = shared code with enforced dependencies
- **`.github/agents/`** = agent behaviors colocated with code they modify
- **`tools/`** = scaffolding that agents use to generate consistent code

### Control-Plane Repo (Separate)


```
enterprise-control-plane/
├── templates/                   # Golden templates
│   ├── agent-workflows/
│   │   ├── feature-flow.md
│   │   ├── refactor-flow.md
│   │   └── security-review-flow.md
│   └── scaffolds/
│       ├── new-service/
│       └── new-feature/
│
├── policies/                    # Enterprise policies
│   ├── security-requirements.md
│   ├── compliance-checklist.md
│   └── architectural-standards.md
│
└── agents/                      # Enterprise agents
    ├── global-reviewer.agent.md
    └── compliance-validator.agent.md
```

**Why Separate Control Plane:**
- **Security:** Policies don't live in product code — stricter access control
- **Consistency:** One source of truth for standards across all product repos
- **Auditability:** Clear governance trail for compliance and regulatory needs
- **Update independence:** Change policies without triggering product deploys

### Enforced Module Boundaries

#### Suggested Boundaries (Fail in Gen-4)

```typescript
// Hope developers notice the comment
// @internal - Don't import this!
export class PaymentProcessor {}
```

**Problem:** Agents don't read comments. They follow import patterns they observe in the codebase.

#### Enforced Boundaries (Work in Gen-4)

```json
// nx.json module boundary configuration
{
  "namedInputs": {
    "default": ["{projectRoot}/**/*"],
    "production": ["!{projectRoot}/**/*.spec.ts"]
  },
  "targetDefaults": {
    "build": {
      "dependsOn": ["^build"],
      "inputs": ["production", "^production"]
    }
  },
  "generators": {
    "@nx/react": {
      "library": {
        "linter": "eslint"
      }
    }
  }
}
```

```json
// tsconfig.base.json with path mappings
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@libs/auth/*": ["libs/auth/src/*"],
      "@libs/data-access/*": ["libs/data-access/src/*"],
      "@libs/ui-components/*": ["libs/ui-components/src/*"],
      "@libs/validation/*": ["libs/validation/src/*"]
    }
  }
}
```

**Enforcement Example:**

```bash
# CI fails if agent violates boundary
nx run-many --target=lint --all
✓ apps-web - lint succeeded
✓ libs-auth - lint succeeded
✗ libs-data-access - lint failed

Error: A project tagged with "scope:data-access" cannot depend on
libraries tagged with "scope:payment".

Violating import:
  libs/data-access/src/db.ts:5:
  import { PaymentProcessor } from '@libs/payment'
```

**Why This Matters for Agents:**
- **Build-time failures prevent runtime issues** — CI catches violations before merge
- **Clear error messages guide corrections** — Agent learns the constraint from failure
- **Architectural decay is prevented** — Can't accidentally create circular dependencies
- **Documentation via enforcement** — The rules ARE the documentation

### Hermetic Builds for Deterministic Trust

#### Non-Hermetic (Breaks in Gen-4)

```dockerfile
# Dockerfile - DON'T DO THIS
FROM node:18
RUN npm install    # Uses whatever version is latest today
RUN apt-get update && apt-get install -y curl  # Gets latest packages
COPY . .
RUN npm run build
```

**Problem:** Same git commit produces different builds on different days. CI becomes unreliable signal.

#### Hermetic (Works in Gen-4)

```dockerfile
# Dockerfile - DO THIS
FROM node:18.19.0-alpine3.19@sha256:7cc9f5e...  # Exact image digest
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --ignore-scripts  # Exact versions from lockfile, no arbitrary scripts
COPY . .
RUN npm run build
```

**Key Principles:**
- **Pinned base images with digests** — `node:18` → `node:18.19.0-alpine3.19@sha256:abc...`
- **Locked dependencies** — `npm install` → `npm ci` (uses lockfile verbatim)
- **No network calls during build** — All inputs declared upfront
- **Reproducible outputs** — Same inputs = byte-identical outputs

**Why Agents Need Determinism:**
- **Reproducible failures** — Agent can debug because build is identical across runs
- **Cacheable artifacts** — Same inputs = same outputs = cache hit
- **Trust in green builds** — Green means "this exact code is safe" not "worked on my machine"
- **Bisectable history** — Can binary search for regressions with confidence

### Affected Analysis for Fast Feedback

#### The Problem: Testing Everything

```bash
# Naive approach: test entire codebase on every PR
npm test              # 45 minutes - runs 1,247 tests
npm run lint          # 12 minutes - checks 8,932 files
npm run build         # 23 minutes - rebuilds 47 packages
# Total: 80 minutes of agent idle time
```

**Impact on velocity:** Agent generates 5 PRs/day, each waits 80 minutes for CI = agents productive only 4 hours/day (50% idle).

#### The Solution: Test What Changed

```bash
# Affected approach: test only impacted code
nx affected:test --base=main     # 4 minutes - runs 89 affected tests
nx affected:lint --base=main     # 1 minute - checks 234 affected files
nx affected:build --base=main    # 3 minutes - rebuilds 3 affected packages
# Total: 8 minutes (10x speedup)
```

**How Affected Analysis Works:**

1. **Build dependency graph:** Map all imports/dependencies between modules
2. **Detect changes:** Git diff between base branch and PR branch
3. **Calculate affected scope:** Which modules are impacted (directly or transitively)?
4. **Run only affected commands:** Test/lint/build only that subset
5. **Cache unaffected results:** Reuse previous successful runs for unchanged modules

**Example Dependency Graph:**

```
apps/web
  → libs/ui-components
    → libs/validation
  → libs/auth
    → libs/validation

libs/data-access
  → libs/validation
```

**Scenario:** PR changes `libs/validation`

**Affected modules:** ALL (everything depends on validation)
- Must test: `libs/validation`, `libs/ui-components`, `libs/auth`, `libs/data-access`, `apps/web`

**Scenario:** PR changes `libs/data-access`

**Affected modules:** Only `libs/data-access` (no downstream dependencies)
- Must test: `libs/data-access`
- Can skip: 80% of test suite

**Impact on Agent Velocity:**

| Metric | Before Affected | After Affected | Improvement |
|--------|----------------|----------------|-------------|
| Average CI time | 80 min | 8 min | 10x faster |
| Agents productive time | 50% | 95% | 2x effective capacity |
| Features/day per agent | 2-3 | 10-15 | 5x throughput |

---

<!-- 🎬 MAJOR SECTION: PR Workflows -->
## Part 2: PR Workflows


*Scaling governance from line-by-line review to outcome validation*

### The Core Challenge

Traditional PRs were designed for humans collaborating on 50-200 line changes with line-by-line review and synchronous discussion. AI agents generate 500-2000 line feature diffs in 15 minutes. **Human reviewers can't keep up — the bottleneck isn't coding, it's governance.**

### The Four Generations Context

Understanding the shift from Gen-3 to Gen-4 explains why PR workflows must transform:

| Generation | Primary Producer | Review Mode | PR Characteristics |
|------------|------------------|-------------|-------------------|
| **Gen-1** | Individual devs | Manual testing | Waterfall, no PRs |
| **Gen-2** | Team collaboration | Code review | 50-200 lines, discussion |
| **Gen-3** | Human + AI assist | Line-by-line | 100-400 lines, still readable |
| **Gen-4** | AI agents | Outcome validation | 500-2000 lines, feature-complete |

**The Breakpoint:** When AI-generated code volume exceeds human review capacity (happening now).

### Why Traditional PR Practices Fail

**Gen-3 Design Assumptions:**
- **Small, incremental changes** — 50-200 lines, human-comprehensible in 30-minute review
- **Line-by-line scrutiny** — "Can you explain line 47?" "Why this approach?" "Move function to utils"
- **Synchronous collaboration** — Back-and-forth discussion until consensus reached
- **Trust through detailed inspection** — Read every line, understand every decision

**Gen-4 Reality:**
- **Feature-scale payloads** — 500-2000 lines, 5-15 files, entire features atomically
- **Intent-driven generation** — Specified at goal level ("add OAuth"), not implementation level
- **Machine velocity** — 15 minutes from intent to PR, 15 PRs/day, 24/7 availability
- **Volume explosion** — 15,000 lines/day vs. 300 lines/day (50x increase)

> ⚠️ **The Mismatch:** Humans trained to review 300 lines/day can't scale to 15,000 lines/day at the same detail level.

### The Economic Shift

#### Where Scarcity Moves

| Gen-3 Scarcity | Gen-4 Scarcity |
|----------------|----------------|
| Developer time to write code | Governance capacity to review |
| Code quality (bugs in implementation) | Trust at scale (can we ship this velocity?) |
| Implementation speed | Architectural coherence |
| Review thoroughness | Compliance verification speed |

**Traditional Economics:**
```
Bottleneck: Writing code
Solution: Hire more developers
Control: Code reviews catch bugs
```

**Gen-4 Economics:**
```
Bottleneck: Trusting code
Solution: Automate trust manufacturing
Control: Policy enforcement + outcome validation
```

> 💡 **The Shift:** From "can we write it fast enough?" to "can we trust it at this velocity?"

### Gen-4 Control Surfaces

#### 1. Intent Specification (What Humans Provide)

```markdown
## Feature Intent
- Add password reset flow to user settings
- Email verification with 1-hour expiration
- Rate limit: 3 attempts per hour
- Audit log all reset requests

## Constraints
- Use existing email service (SendGrid)
- Follow OWASP password guidelines
- No changes to authentication middleware

## Acceptance Criteria
- [ ] User receives email within 2 minutes
- [ ] Link expires after 1 hour
- [ ] Rate limiting blocks >3 attempts/hour
- [ ] All attempts logged to audit table
```

**What agents generate from this:**
- Implementation code (500-800 lines)
- Tests (300-400 lines)
- Documentation (100-200 lines)
- Database migrations (50-100 lines)
- **Total: 1,000-1,500 lines in ~15 minutes**

#### 2. Policy Enforcement (Automated Checks)

```yaml
# .github/workflows/pr-checks.yml
required_policy_checks:
  security:
    - secrets_detection: no hardcoded keys/tokens
    - sast_scan: no SQL injection, XSS patterns
    - dependency_audit: no critical vulnerabilities
  architecture:
    - boundary_enforcement: no module violations
    - circular_dependencies: none allowed
  compliance:
    - gdpr_data_handling: PII properly protected
    - pci_requirements: payment data isolated
  quality:
    - test_coverage: >= 80% on new code
    - performance_budget: p95 < 200ms
    - accessibility: WCAG AA compliance
```

**Automation rate:** 90% of checks automated, 10% require human judgment

#### 3. Outcome Validation (Human Review Focus)

**Questions humans answer:**
- Does implementation match stated intent?
- Are edge cases handled appropriately?
- Does feature integrate correctly with existing system?
- Are non-functional requirements met (performance, security, UX)?

**NOT:**
- "Why did you use a Map on line 47?" (implementation details)
- "Can you extract this function?" (code style)
- "Add more comments" (documentation pedantics)

### Three PR Models That Scale

#### Model 1: Intent-Based PRs

```
feature-password-reset/
├── .intent/
│   ├── requirements.md      # What we're building
│   ├── constraints.md       # What we can't change
│   └── acceptance.md        # How we know it works
├── src/                     # Agent-generated implementation
│   ├── api/
│   ├── services/
│   └── tests/
├── docs/                    # Agent-generated docs
│   └── password-reset.md
└── migrations/              # Agent-generated schema changes
    └── 2026-02-add-reset-tokens.sql
```

**Review Process:**
1. Read intent specification (2 min)
2. Verify implementation matches intent (10 min)
3. Check automated policy results (5 min)
4. Validate acceptance criteria met (3 min)
5. Approve or request intent clarification (not code changes)

**Total time:** 20 minutes vs. 3 hours for line-by-line review

#### Model 2: Evidence-Bundle PRs

**Required Artifacts:**

```markdown
## Evidence Bundle

### 1. Intent Specification
[Link to requirements doc]

### 2. Implementation Diff
- Files changed: 12
- Lines added: 847
- Lines removed: 123

### 3. Automated Test Results
- Unit tests: 47/47 passed (100%)
- Integration tests: 12/12 passed (100%)
- Coverage: 87% (target: 80%) ✓

### 4. Security Scan Results
- SAST: 0 high/critical issues ✓
- Secrets detection: No exposed credentials ✓
- Dependency audit: 0 vulnerabilities ✓

### 5. Architecture Compliance
- Module boundaries: No violations ✓
- Circular dependencies: None detected ✓

### 6. Performance Validation
- API endpoint p95 latency: 147ms (budget: 200ms) ✓
- Database query analysis: No N+1 issues ✓

### 7. Deployment Simulation
- Staging deploy: Successful ✓
- Smoke tests: 8/8 passed ✓
- Rollback test: Successful ✓
```

**Review Question:** "Do we have sufficient evidence to trust this change?"

#### Model 3: Policy-Gated PRs

**Automated Gates Configuration:**

```yaml
# .github/policies/required-checks.yml
gates:
  security:
    - name: secrets-scan
      required: true
      blocking: true
    - name: sast-analysis
      required: true
      blocking: true
      severity_threshold: high

  quality:
    - name: test-coverage
      required: true
      blocking: true
      threshold: 80
      scope: changed_files
    - name: performance-budget
      required: true
      blocking: false  # warn only
      p95_threshold: 200ms

  architecture:
    - name: module-boundaries
      required: true
      blocking: true
    - name: dependency-graph
      required: true
      blocking: true
      disallow: circular_dependencies

  compliance:
    - name: gdpr-validation
      required: true
      blocking: true
    - name: pci-compliance
      required: true
      blocking: true
      scope: payment_module

human_review:
  required_when:
    - any_gate_failed: true
    - security_risk_high: true
    - architectural_change: true
  minimum_approvers: 1
  require_owner_approval: true
```

**Human Approval:** Only after all automated gates pass, and only 1 sign-off on outcomes

### Enterprise Governance That Scales

#### Traditional Governance (Doesn't Scale)


- 22 manual approval gates per feature
- Senior architect reviews every architecture decision
- Security team reviews every auth change
- Compliance officer reviews every data change
- **Result:** 4-7 days from PR to merge

#### Gen-4 Governance (Scales to 10-15 Features/Day)

- 4 human checkpoints: intent validation, security risk assessment, architectural fit, outcome validation
- Automated enforcement: 90% of checks
- Senior architect reviews violations and exceptions, not every change
- Security/compliance automated with escalation for high-risk
- **Result:** 2-4 hours from PR to merge

#### The Governance Pyramid

```
         Human Governance (10%)
       /                       \
    Strategic Decisions    High-Risk Changes
   /                                        \
Automated Governance (90%)
├── Security scanning
├── Test coverage
├── Performance benchmarks
├── Architecture rules
├── Compliance checks
└── Dependency audits
```

### The PR Review Transformation

#### From Code-Level to Outcome-Level

| Gen-3 PR Review | Gen-4 PR Review |
|-----------------|-----------------|
| "Why did you use a Map here?" | "Does this meet the intent?" |
| "Can you extract this function?" | "Are edge cases handled?" |
| "Add more comments" | "Is this compliant and secure?" |
| "Move this to line 47" | "Evidence bundle complete?" |
| "LGTM 🚀" (after 3 hours) | "Approved ✓" (after 20 minutes) |

#### The Human Role Shifts

- **Less:** Line-by-line code scrutiny, style feedback, implementation suggestions
- **More:** Intent validation, risk assessment, architectural coherence, outcome evaluation
- **Still Critical:** Human judgment on ambiguous cases, strategic decisions, novel patterns

---

<!-- 🎬 MAJOR SECTION: Trust Manufacturing -->
## Part 3: Trust Manufacturing (CI as Factory)

*Transforming CI from quality gate to trust evidence production at agent velocity*

### The Core Challenge

Organizations ship 10-15 features/day with AI agents, but CI infrastructure was designed for 2-3 features/week from humans. **The bottleneck isn't agent velocity — it's trust production.** Agents can write code faster than CI can prove it's safe to ship.

### CI as Trust Factory (Not Quality Gate)

#### Traditional CI (Quality Gate)

```
Write code → Run tests → Fix failures → Manual review → Deploy
```

**Purpose:** Catch bugs before they reach production
**Optimized for:** Infrequent changes, human-readable output, manual intervention
**Speed target:** "Fast enough" (~30-60 minutes acceptable)

#### Agentic CI (Trust Factory)

```
Agent writes code → CI manufactures trust evidence → Human validates outcomes → Auto-deploy
```

**Purpose:** Manufacture trust artifacts at agent velocity
**Optimized for:** 10-15 changes/day, machine-readable evidence, automated validation
**Speed target:** <10 minutes for PR checks (agents idle otherwise)

> 🏭 **The Shift:** From "did the tests pass?" to "do we have sufficient evidence to trust this change?"

### Manufacturing Principles Applied to CI

| Manufacturing Principle | CI Implementation |
|------------------------|-------------------|
| **Repeatable Processes** | Same checks, same order, every time — zero variation creates reliable trust signals |
| **Quality Gates** | Can't proceed without passing inspection — branch protection enforces gates |
| **Automated Inspection** | 327 tests in 8 minutes, 10,000 security patterns in 45 seconds |
| **Evidence Trails** | Every check produces attestations — auditable, reproducible, tamper-evident |
| **Continuous Improvement** | Flake rate <2%, build time optimized monthly, false positives measured and reduced |
| **Scale Economics** | First feature: 8 minutes CI; 15th feature: 2 minutes (cached) — marginal cost→0 |

> 🎯 **The Goal:** Trust that scales linearly with agent output, not quadratically with human review time.

### Context-Aware Validation with Agents

#### The Problem: Compliance Is Contextual

**Deterministic Rules (Traditional):**

```yaml
# .compliance-rules.yml
patterns:
  - regex: "email"
    severity: high
    message: "PII detected"
```

**Result:**
- 847 warnings across codebase
- 803 false positives (test fixtures, examples, documentation)
- Developers ignore all warnings
- Actual PII violation ships to production

#### Agentic Validation (Context-Aware)

```yaml
# .github/agents/compliance-validator.agent.md
---
name: Compliance-Validator
tools: ['read', 'search', 'fetch']
---

You validate GDPR compliance. Check if email addresses are:
- Used in test fixtures (ALLOWED)
- In documentation examples (ALLOWED)
- In production code handling real user data (FLAG for review)

Explain your reasoning for each flagged instance.
```

**Result:**
- 44 warnings (only real issues)
- 2 false positives
- Developers trust the signal
- Actual violations caught before merge

#### Why Agents Outperform Rules

- **Read context:** Understand if email is in test fixture vs. production code
- **Apply judgment:** Distinguish between `user@example.com` (mock) and `req.body.email` (real PII)
- **Explain reasoning:** "Flagged because this function processes actual user input from API"
- **Learn patterns:** Improve over time as compliance policies evolve

### Fast Feedback: The 10-Minute Rule

#### Why 10 Minutes Matters

**Agent iteration cycle:**
```
Generate code (5 min) → Wait for CI (? min) → Fix issues → Repeat
```

**If CI takes 60 minutes:**
- 4 iterations = 4 hours
- Agent sits idle 80% of the time
- Effective velocity: 2-3 features/day

**If CI takes 8 minutes:**
- 4 iterations = 52 minutes
- Agent productive 95% of the time
- Effective velocity: 10-15 features/day

> ⚡ **Target:** <10 minutes for PR checks, <30 minutes for full pipeline

#### How to Achieve Fast CI

1. **Affected analysis:** Test only changed modules (80 min → 8 min)
2. **Distributed execution:** Parallelize across runners (8 min → 4 min with 2× parallelism)
3. **Aggressive caching:** Cache dependencies, build artifacts, test results
4. **Incremental builds:** Rebuild only what changed
5. **Strategic test splitting:** Fast smoke tests first (fail fast), slow integration tests last

### The Trust Pipeline Architecture

#### Stage 1: Fast Feedback (<10 minutes)

**Purpose:** Catch obvious issues immediately

**Checks:**
- Build succeeds
- Unit tests pass (affected modules only)
- Lint/format violations
- Basic security scan (high-severity only)

**On failure:** Block PR, fast feedback to agent

#### Stage 2: Comprehensive Validation (<30 minutes)

**Purpose:** Full trust evidence generation

**Checks:**
- Full test suite (including integration tests)
- Deep security scan (all severities)
- Performance benchmarks
- Architecture compliance
- Dependency vulnerability scan
- Compliance validation (GDPR, PCI)

**On failure:** Block merge, detailed report for human review

#### Stage 3: Pre-Production (<60 minutes)

**Purpose:** Final validation before production

**Checks:**
- Deploy to staging environment
- Smoke tests in staging
- Database migration validation
- Rollback test
- Load testing (if performance-sensitive)

**On failure:** Block production deploy, page on-call

### Evidence Attestations

#### What Are Attestations?

Machine-readable artifacts proving checks ran and passed:

```json
{
  "predicate": {
    "builder": "GitHub Actions",
    "invocation": {
      "configSource": {
        "uri": "github.com/org/repo",
        "digest": {"sha256": "abc123..."}
      }
    },
    "materials": [
      {"uri": "pkg:npm/@types/node@18.0.0"}
    ],
    "metadata": {
      "completeness": {"parameters": true, "environment": true},
      "reproducible": true
    }
  }
}
```

#### Why Attestations Matter

- **Auditability:** "Prove this change was compliant" → Link to attestation
- **Supply chain security:** SLSA compliance for regulated environments
- **Regulatory requirements:** SOC 2, ISO 27001, FedRAMP
- **Reproducibility:** Re-run identical checks with tamper-evident records

#### Generating Attestations

```yaml
# .github/workflows/attestation.yml
- name: Generate attestation
  uses: actions/attest-build-provenance@v1
  with:
    subject-path: 'dist/*.tar.gz'
```

### Flake Management: Zero Tolerance

#### The Problem with Flaky Tests

**Single flaky test (5% failure rate):**
- 20 PRs/day × 5% = 1 spurious failure/day
- 10 flaky tests = 10 failures/day
- Developers lose trust in CI
- "Just rerun it" becomes default response

**Impact:** When CI becomes unreliable, green builds mean nothing.

#### Zero Tolerance Policy

**Rules:**
1. **Quarantine on first flake:** Move test to quarantine suite immediately
2. **Fix within 2 days:** Owner must fix or delete
3. **After 2 days:** Auto-disabled, blocks future PRs until fixed
4. **Track flake rate:** <2% target, measured weekly

#### How to Fix Flaky Tests

- **Race conditions:** Add proper waits (`waitFor()`), not fixed sleeps (`sleep(1000)`)
- **External dependencies:** Mock API calls, don't hit real services
- **Time-dependent:** Mock system time (`jest.useFakeTimers()`)
- **Order-dependent:** Isolate test data (unique IDs per test)
- **Environment-dependent:** Use hermetic builds with exact dependencies

> 🎯 **Goal:** Zero flaky tests in critical path (PR checks).

### Caching Strategies

#### What to Cache

**Dependencies:**

```yaml
- uses: actions/cache@v3
  with:
    path: ~/.npm
    key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}
```

**Build artifacts:**

```yaml
- uses: actions/cache@v3
  with:
    path: ./dist
    key: ${{ runner.os }}-build-${{ github.sha }}
```

**Test results:**

```yaml
- uses: actions/cache@v3
  with:
    path: ./.test-cache
    key: ${{ runner.os }}-tests-${{ hashFiles('**/src/**') }}
```

#### Cache Invalidation Strategy

- **Dependency cache:** Invalidate on lockfile change (`package-lock.json`)
- **Build cache:** Invalidate on source file change (git hash)
- **Test cache:** Invalidate on test or source change

**Impact:**
- First build: 23 minutes
- Cached build: 3 minutes
- **7.6x speedup**

### Continuous Improvement Metrics

#### Track These Weekly

| Metric | Target | Action If Exceeded |
|--------|--------|-------------------|
| PR check time | < 10 min | Optimize, parallelize, or cache |
| Full pipeline time | < 30 min | Identify slowest checks |
| Flake rate | < 2% | Quarantine and fix |
| Cache hit rate | > 80% | Investigate cache misses |
| False positive rate | < 5% | Tune rules or add agent validation |
| Throughput | 10-15 PRs/day | Scale infrastructure |

#### Monthly Reviews

- **Slowest checks:** Candidates for parallelization or optimization
- **Most flaky tests:** Prioritize fixes or deletions
- **Cache efficiency:** Tune invalidation strategy
- **False positives:** Adjust rules or enhance agent validation

---

<!-- 🎬 MAJOR SECTION: Implementation Roadmap -->
## Part 4: Implementation Roadmap

*Phased approach to Gen-4 SDLC transformation*

### Phase 1: Foundation (Weeks 1-4)

**Repository:**
- [ ] Audit current repos: how often do agents touch 2+ repos?
- [ ] If >30%, plan monorepo migration
- [ ] Set up Nx/Lerna/Bazel for build orchestration
- [ ] Define module boundaries with enforcement rules
- [ ] Enable affected analysis

**CI:**
- [ ] Measure current PR check time and flake rate
- [ ] Identify slowest checks (candidates for parallelization)
- [ ] Add caching for dependencies and builds
- [ ] Target: <10 min PR checks

### Phase 2: Automation (Weeks 5-8)

**Governance:**
- [ ] Create intent templates for common feature types
- [ ] Automate 80% of current manual checks
- [ ] Build evidence-bundle requirements
- [ ] Set up attestation generation

**Quality:**
- [ ] Identify all flaky tests
- [ ] Implement quarantine policy
- [ ] Add agent-based compliance validation
- [ ] Target: <2% flake rate

### Phase 3: Optimization (Weeks 9-12)

**Velocity:**
- [ ] Measure agent throughput
- [ ] Identify bottlenecks (repo coordination, review capacity, CI speed)
- [ ] Optimize slowest checks
- [ ] Scale infrastructure (more runners, better caching)
- [ ] Target: 10-15 features/day

**Governance:**
- [ ] Train reviewers on outcome validation (not line-by-line)
- [ ] Refine policy gates based on feedback
- [ ] Measure false positive rate
- [ ] Iterate on agent validation prompts

---

## Real-World Use Cases

### Use Case 1: Multi-Repo Coordination Eliminated

**The Problem:** A fintech company had 12 microservice repos. Agents implementing features typically touched 3-4 repos, requiring coordinated PRs, sequential reviews, and coordinated deploys. Time from agent completion to production: 3-5 days.

**The Solution:** Consolidated into monorepo with Nx enforced module boundaries. 3-4 repos × 3 PRs became 1 atomic PR. Affected analysis reduced CI time from 60 minutes to 8 minutes.

**Implementation:**
- Week 1-2: Planned migration strategy with module boundary design
- Week 3-6: Migrated repos sequentially (2 repos/week)
- Week 7-8: Set up Nx with path mappings and boundary enforcement

**Outcome:** Time to production: 3-5 days → 4-6 hours. Agent velocity: 3 features/week → 12 features/day. Developer coordination time: 40% → 5%.

---

### Use Case 2: CI Flake Elimination

**The Problem:** An e-commerce platform had 18% flake rate across 847 tests. Agents generated 15 PRs/day, but 2-3 would fail spuriously, requiring manual intervention. Developers stopped trusting green builds.

**The Solution:** Implemented zero-tolerance flake policy. First flake → quarantine. Fixed or deleted within 2 days. Migrated to hermetic builds with mocked external services.

**Implementation:**
- Week 1: Identified 89 flaky tests (10% of suite)
- Week 2-4: Fixed 67 tests (race conditions, external deps, time mocking)
- Week 5-6: Deleted 22 unfixable tests (duplicates or low value)

**Outcome:** Flake rate: 18% → 1.2%. Agent idle time: 35% → 8%. Developer trust in CI: restored. Manual PR reruns: 45/week → 2/week.

---

## ✅ What You Can Do Today

**Immediate Actions (15 minutes):**
- [ ] Audit last 50 PRs: How many touched 2+ repos? (If >30%, monorepo candidate)
- [ ] Measure current PR check time and identify slowest checks
- [ ] Calculate flake rate: failed PR runs ÷ total PR runs × 100

**Short-Term Implementation (1-2 weeks):**
- [ ] Set up affected analysis for existing monorepo (or plan migration if multi-repo)
- [ ] Add caching for dependencies and build artifacts in CI
- [ ] Implement flake quarantine policy (fail test on second flake)
- [ ] Create intent template for one common feature type

**Advanced Exploration (1-3 months):**
- [ ] Execute monorepo migration if needed (follow Phase 1 roadmap)
- [ ] Deploy agent-based compliance validation for one domain (e.g., GDPR)
- [ ] Build evidence-bundle PR template with required artifacts
- [ ] Train team on outcome-based review vs. line-by-line

**Next Steps After Completion:**
1. ✅ Complete Phase 1 (foundation) and measure baseline metrics
2. 📖 Review [Agentic Journey](../agentic-journey/) if you need quick wins before full transformation
3. 📊 Build ROI dashboard tracking: time-to-merge, agent velocity, flake rate, review capacity
4. 🚀 Present transformation plan using [Agentic Delivery](../../exec-talks/agentic-delivery/) executive framing

---

## Related Patterns

### Complementary Features

- **[Agentic Journey](../agentic-journey/)** — Incremental issue-to-PR automation when you're not ready for full SDLC transformation
- **[Agent Teams](../agent-teams/)** — Specialized multi-agent coordination patterns for complex workflows
- **[Parallel Execution](../parallel-execution/)** — Worktree-based independence for multiple agents working simultaneously
- **[Copilot Hooks](../copilot-hooks/)** — Governance mechanisms and agent behavior controls

### Decision Flow

**If this talk doesn't fit your needs:**

```
Q: What's blocking your agent velocity?
├─ "Haven't started with agents" → See: Agentic Journey
├─ "Agents work but no pain yet" → Wait until pain manifests, then return
├─ "Need executive buy-in" → See: Agentic Delivery (exec-talks)
├─ "Organization-wide scaling" → See: Enterprise Patterns
└─ "Interactive dev workflows" → See: Agentic Sessions
```

See [DECISION-GUIDE.md](../DECISION-GUIDE.md) for complete navigation help.

---

## 📚 Official Documentation

**Primary Documentation:**
- 📖 **[Nx Monorepo Tools](https://nx.dev/)** — Build orchestration, module boundaries, affected analysis, and caching
- 📖 **[GitHub Actions Documentation](https://docs.github.com/en/actions)** — CI/CD workflow automation, caching, and parallelization
- 📖 **[SLSA Framework](https://slsa.dev/)** — Supply chain security levels and attestation standards

**Additional Resources:**
- 🎓 [Nx Tutorial: Monorepo Setup](https://nx.dev/getting-started/intro) — Step-by-step monorepo creation
- 🔧 [GitHub Actions Caching](https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows) — Dependency and artifact caching
- 📖 [Hermetic Builds Guide](https://bazel.build/basics/hermeticity) — Deterministic build principles

**GitHub Resources:**
- 🐙 [Copilot Orchestra](https://github.com/ShepAlderson/copilot-orchestra) — Agent workflow patterns and examples
- 🐙 [GitHub Copilot Atlas](https://github.com/bigguy345/Github-Copilot-Atlas) — Multi-agent orchestration patterns

---

## 🎭 Behind the Scenes

### Why Module Boundary Enforcement Matters

The difference between comments and enforcement is the difference between documentation and compliance. Agents don't "respect" architectural boundaries—they follow what the import system allows.

When you write `// @internal - don't use this`, you're writing documentation for humans. When you configure Nx with:

```json
{
  "sourceTag": "scope:payment",
  "onlyDependOnLibsWithTags": ["scope:shared", "scope:payment"]
}
```

You're programming the build system to reject invalid imports. The agent attempts the import, CI fails with a clear error, and the agent corrects the mistake. This **learning through enforcement** is how agents respect architecture at scale.

### The Economics of Flake Tolerance

Why is 2% the target, not 0%? Because pursuing absolute zero flakiness has diminishing returns. The last 2% often represents environmental edge cases that occur once per 1,000 runs—fixing them costs more than the occasional manual rerun.

However, above 2%, the cost curve inverts. At 5% flake rate with 20 PRs/day, you get ~1 false failure/day. At 10%, it's ~2/day. That's where developers stop trusting CI and start shipping without green builds—which defeats the entire purpose of automated testing.

The 2% threshold is the economic inflection point where enforcement cost equals failure cost.

---

**Building infrastructure for sustainable AI velocity**

*Barton Mathis*
