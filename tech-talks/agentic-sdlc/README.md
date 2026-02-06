# Agentic SDLC: Infrastructure for AI Velocity

How to rewire repositories, PR workflows, and CI/CD for AI-as-labor delivery agents (Gen-4 SDLC)

**Barton Mathis**

---

## 📖 Navigation Guide

This comprehensive talk covers three interconnected aspects of Gen-4 SDLC. Each section can be consumed independently: ## 🔍 Quick Decision: Which Section Do You Need?

**Start with Repository Topology if:**
- You're restructuring repos for agent-first workflows
- Agents are touching 2+ repos for most features
- You're debating monorepo vs multi-repo

**Start with PR Workflows if:**
- You're shipping feature-scale AI-generated changes daily
- Traditional PR reviews are becoming bottlenecks
- You need governance that scales with AI velocity

**Start with Trust Manufacturing if:**
- Your CI was designed for 2-3 features/week, now handling 10-15/day
- You need to manufacture trust at agent velocity
- Compliance and security checks are blocking agent throughput

---

## Gen-4 SDLC: The Core Transformation

### What Changes in Gen-4 (AI-as-Labor)

#### Traditional (Gen-3)
- **Humans produce code** — 10-50 lines/hour, context-switching every 23 minutes
- **PRs are collaboration forums** — "Can you explain this?" "Why did you...?" "LGTM 🚀"
- **Repo structure optimized for teams** — "Frontend in one repo, backend in another"
- **CI is supporting infrastructure** — "The build is red again, someone look at it"

#### Agentic (Gen-4)
- **Agents produce feature-scale payloads** — 500-2000 lines in 15 minutes, zero context switching
- **Humans govern safety and outcomes** — "Ship the feature" or "Roll it back" (not "move this function to line 47")
- **Repo structure optimized for agents** — "Everything this agent needs is in one atomic boundary"
- **CI becomes the trust factory** — "If CI is green, we ship. If CI is red, nobody moves."

> 💡 **The Shift:** Humans used to write code and delegate review. Now humans delegate coding and review outcomes.

### The Four Generations

**Gen-1:** Manual coding by individual developers
**Gen-2:** Team workflows with PRs and CI/CD
**Gen-3:** AI assistance (autocomplete, refactoring) with humans as authors
**Gen-4:** AI agents as primary producers from intent specifications

**The Breakpoint:** When AI-generated code volume surpasses human review capacity

---

# Part 1: Repository Topology

*How to rewire repositories for AI-native delivery*

---

## The Problem

Our repo structure was designed for humans collaborating on quarterly releases.

Now we're running agents that ship features daily.

**This is like running a Formula 1 car on roads designed for horses.**

The car is fast. The road wasn't built for that speed. Something breaks.

---

## The Solution (TL;DR)

- Default to an **agent-native product monorepo** with enforced module boundaries (not suggestions)
- Pair it with a **separate control-plane repo** for policies, golden workflows, and scaffolding
- Optimize for **deterministic signal**: hermetic builds, "affected" CI, and aggressive caching
- Treat PRs as **governance evidence bundles** (intent → diff → checks → attestations), not collaboration forums

---

## Goal: Max Throughput Without Losing Trust

**The Formula:** Agent velocity × Human confidence = Sustainable delivery at scale

### What We're Optimizing For

- **Minimize coordination overhead** — 6 repos × 3 teams = 18 handoffs per feature → 1 repo × atomic merge = 0 handoffs
- **Maximize agent situational awareness** — "Where's the auth code?" → 3 grep results, not 3 repo searches
- **Make verification cheap and fast** — 4-hour CI runs → 8-minute affected tests with caching
- **Scale governance** — 22 manual approval gates → 4 human checkpoints + automated evidence

> ⚡ **Remember:** If our CI is flaky, our agents are flying blind. If our builds are slow, our agents are stuck in traffic.

---

## Topology Decision: Monorepo vs Multi-Repo

> ⚠️ **War Story: The 6-Hour Feature**
>
> A SaaS company had 18 microservice repos. To ship a feature touching 3 services:
> - Day 1: Open PR in repo A, wait for CI (45 min), wait for review (4 hours)
> - Day 2: Open PR in repo B, discover contract mismatch, go back to repo A
> - Day 3: Coordinate deploy order, staging fails, debug across repos
>
> **Result:** 6 hours of agent work, 3 days of human coordination, 2 rollbacks
>
> After monorepo migration: 45 minutes, 1 atomic PR, 0 coordination overhead

### Monorepo (Default for 80% of Product Teams)

**Advantages:**
- **Atomic cross-module changes** — Change API + all 7 call sites in one PR, not 8 coordinated PRs
- **Shared patterns are local** — `import { validateEmail } from '@libs/validation'`, not "which version?"
- **Agent navigation is grep, not GitHub search** — "Where's the auth middleware?" → One `rg` command
- **One CI pipeline to rule them all** — Unified standards, consistent tooling, shared cache

### Multi-Repo (When You Actually Need It)

**Use cases:**
- **Hard access boundaries** — PCI-regulated payment processing physically separated from marketing site
- **Truly independent products** — Mobile app (6-month releases) + web app (daily deploys)
- **Regulatory/compliance mandates** — "The auditor said these must be separate"
- **Organizational constraints** — Acquired company not ready to merge (yet)

> 🎯 **Decision Rule:** If our agents touch >1 repo for >30% of features, we need a monorepo.

---

## Recommended Baseline Structure

### Agent-Native Product Monorepo

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

### Why Separate Control Plane?

- **Security:** Policies don't live in product code
- **Consistency:** One source of truth for standards
- **Auditability:** Clear governance trail
- **Updates:** Change policies without product deploys

---

## Module Boundaries That Agents Respect

### Enforced vs. Suggested Boundaries

**Suggested (Fails in Gen-4):**
```typescript
// Hope developers notice the comment
// @internal - Don't import this!
export class PaymentProcessor {}
```

**Enforced (Works in Gen-4):**
```typescript
// nx.json module boundary rule
{
  "sourceTag": "scope:payment",
  "onlyDependOnLibsWithTags": ["scope:shared", "scope:payment"]
}
```

### Why Enforcement Matters for Agents

- **Agents don't read comments** — They follow import rules
- **Build-time failures prevent runtime issues** — CI catches violations before merge
- **Architectural decay is automatic** — Without enforcement, boundaries erode over time

> 💡 **Pattern:** Use tools like Nx, Lerna, or Bazel to enforce boundaries at build time

---

## Deterministic Builds for Agent Confidence

### The Hermetic Build Requirement

**Non-Hermetic (Breaks in Gen-4):**
```yaml
# Dockerfile
RUN npm install    # Uses whatever version is latest today
RUN apt-get update # Gets latest packages from internet
```

**Hermetic (Works in Gen-4):**
```yaml
# Dockerfile
COPY package-lock.json ./
RUN npm ci          # Exact versions from lockfile
RUN apt-get install curl=7.74.0-1.3+deb11u7
```

### Why Agents Need Determinism

- **Reproducible failures** — Agent can debug because build is identical
- **Cacheable artifacts** — Same inputs = same outputs = cache hit
- **Trust in green builds** — Green means safe, not "worked on this machine"

> 🎯 **Goal:** Two agents running the same commit should get byte-identical builds

---

## Affected Analysis for Fast Feedback

### The Problem: Testing Everything

```bash
# Naive approach: test entire codebase on every PR
npm test              # 45 minutes
npm run lint          # 12 minutes
npm run build         # 23 minutes
# Total: 80 minutes
```

### The Solution: Test What Changed

```bash
# Affected approach: test only impacted code
nx affected:test      # 4 minutes
nx affected:lint      # 1 minute
nx affected:build     # 3 minutes
# Total: 8 minutes
```

### How Affected Analysis Works

1. **Detect changes:** Git diff between base branch and PR
2. **Build dependency graph:** Which modules depend on changed files?
3. **Run affected commands:** Test/lint/build only impacted modules
4. **Cache everything else:** Reuse results from previous runs

**Impact on agent velocity:**
- 80 minutes → 8 minutes CI feedback
- 10x faster iteration cycles
- Agents can ship 10-15 features/day instead of 2-3

---

## Key Takeaways: Repository Topology

### 🎯 Core Principles

1. **Monorepo by default** — Multi-repo only for hard boundaries
2. **Enforced module boundaries** — Build-time failures, not comments
3. **Hermetic builds** — Deterministic, reproducible, cacheable
4. **Affected analysis** — Test what changed, cache the rest
5. **Control-plane separation** — Policies outside product code

### 🚀 Implementation Steps

1. Audit current repos: How often do agents touch 2+ repos?
2. If >30%, consolidate into monorepo with Nx/Lerna/Bazel
3. Define module boundaries with enforcement rules
4. Enable affected analysis for fast CI feedback
5. Create separate control-plane repo for policies

---

# Part 2: PR Workflows

*Why traditional pull requests collapse at feature-scale payloads*

---

## The Problem

Traditional PRs were designed for humans to collaborate on 50-line changes.

AI agents generate 500-2000 line feature diffs in 15 minutes.

**Human reviewers can't keep up. The bottleneck isn't coding—it's governance.**

---

## Why Traditional PRs Fail in Gen-4

### PR Design Assumptions (Gen-2/Gen-3)

- **Small, incremental changes** — 50-200 lines, human-comprehensible
- **Line-by-line review** — "Can you explain line 47?" "Why this approach?"
- **Synchronous collaboration** — Back-and-forth discussion until consensus
- **Trust through scrutiny** — Read every line, understand intent

### Reality of Gen-4 Agent Output

- **Feature-scale payloads** — 500-2000 lines, 5-15 files, atomic features
- **Intent-driven generation** — Specified at goal level, not implementation level
- **Machine velocity** — 15 minutes from intent to PR, 24/7 availability
- **Volume explosion** — 10-15 features/day vs. 2-3/week

> ⚠️ **The Mismatch:** Humans can't review 15,000 lines/day at the detail level trained for 300 lines/day

---

## Four Generations of SDLC

### Gen-1: Individual Contributors (1970s-1990s)
- Developers work independently
- Waterfall planning
- Limited tooling

### Gen-2: Team Collaboration (2000s-2010s)
- Pull requests introduced
- CI/CD pipelines
- Agile workflows

### Gen-3: AI-Assisted Development (2020-2024)
- Copilot autocomplete
- AI refactoring tools
- Humans still write and review

### Gen-4: AI-as-Labor (2025+)
- AI agents as primary producers
- Intent-first specifications
- Humans govern outcomes

**The Breakpoint:** When AI code volume exceeds human review capacity (happening now)

---

## Where Code Is No Longer Scarce, Trust Is

### Traditional Economics

```
Bottleneck: Writing code
Solution: Hire more developers
Control: Code reviews catch bugs
```

### Gen-4 Economics

```
Bottleneck: Trusting code
Solution: Automate trust manufacturing
Control: Policy enforcement + outcome validation
```

### What Becomes Scarce

| Gen-3 | Gen-4 |
|-------|-------|
| Developer time | Governance capacity |
| Code quality | Trust at scale |
| Implementation speed | Architectural coherence |
| Review thoroughness | Compliance verification |

> 💡 **The Shift:** From "can we write it fast enough?" to "can we trust it at this velocity?"

---

## Gen-4 Control Surfaces

### Intent Specification

**What humans provide:**
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
```

**What agents generate:**
- Implementation code (500-800 lines)
- Tests (300-400 lines)
- Documentation (100-200 lines)
- Database migrations (50-100 lines)

### Policy Enforcement

**Automated checks:**
- Security: SAST, dependency scanning, secrets detection
- Architecture: Module boundary violations, circular dependencies
- Compliance: GDPR data handling, PCI requirements
- Quality: Test coverage, performance budgets, accessibility

### Outcome Validation

**Human review focuses on:**
- Does implementation match intent?
- Are edge cases handled appropriately?
- Does feature integrate correctly?
- Are non-functional requirements met?

---

## The Gen-4 SDLC Loop

```
┌─────────────────────────────────────────────────────┐
│                                                     │
│  1. Human specifies INTENT                          │
│     ↓                                               │
│  2. Agent generates IMPLEMENTATION                  │
│     ↓                                               │
│  3. Automated POLICY CHECKS                         │
│     ↓                                               │
│  4. Human validates OUTCOMES                        │
│     ↓                                               │
│  5. Ship or Iterate                                 │
│     │                                               │
│     └────→ (if iterate, refine intent and repeat)  │
│                                                     │
└─────────────────────────────────────────────────────┘
```

**Cycle time:** 2-4 hours (vs. 2-4 days in Gen-3)

---

## Three PR Models That Survive Gen-4

### Model 1: Intent-Based PRs

**Structure:**
```
Feature-X-password-reset/
├── .intent/
│   ├── requirements.md      # What we're building
│   ├── constraints.md       # What we can't change
│   └── acceptance.md        # How we know it works
├── src/                     # Agent-generated implementation
├── tests/                   # Agent-generated tests
└── docs/                    # Agent-generated docs
```

**Review Process:**
1. Verify intent matches implementation
2. Check automated policy results
3. Validate acceptance criteria met
4. Approve or request intent clarification

### Model 2: Evidence-Bundle PRs

**Required Artifacts:**
- Intent specification
- Code diff
- Test results (coverage, performance)
- Security scan results
- Architecture compliance check
- Deployment simulation logs

**Review Question:** "Do we have sufficient evidence to trust this change?"

### Model 3: Policy-Gated PRs

**Automated Gates:**
```yaml
required_checks:
  - security-scan: pass
  - test-coverage: >= 80%
  - performance: < 200ms p95
  - architecture: no-violations
  - compliance: all-checks-pass
```

**Human Review:** Only if all automated gates pass

**Approval:** 1 human sign-off on outcomes, not implementation

---

## Enterprise Governance at Scale

### Traditional Governance (Doesn't Scale)

- 22 manual approval gates per feature
- Senior architect reviews every architecture decision
- Security team reviews every auth change
- Compliance officer reviews every data change
- **Result:** 4-7 days from PR to merge

### Gen-4 Governance (Scales to 10-15 Features/Day)

- 4 human checkpoints: intent, security risk, architectural fit, outcome validation
- Automated enforcement: 90% of checks
- Senior architect reviews violations, not every change
- Security/compliance automated with human escalation
- **Result:** 2-4 hours from PR to merge

### The Governance Pyramid

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

---

## The Enterprise Takeaway

**PRs don't go away—they move up-stack.**

### From Code-Level to Outcome-Level

| Gen-3 PR Review | Gen-4 PR Review |
|-----------------|-----------------|
| "Why did you use a Map here?" | "Does this meet the intent?" |
| "Can you extract this function?" | "Are edge cases handled?" |
| "Add more comments" | "Is this compliant?" |
| "LGTM 🚀" | "Evidence bundle complete?" |

### The Human Role Shifts

- **Less:** Line-by-line code review
- **More:** Intent validation, risk assessment, architectural coherence
- **Still Critical:** Human judgment on ambiguous cases, strategic decisions

---

## Key Takeaways: PR Workflows

### 🎯 Core Principles

1. **Intent-first** — Specify goals, not implementation
2. **Evidence-based** — Trust through automated checks, not scrutiny
3. **Outcome-focused** — Does it meet requirements?
4. **Policy-gated** — 90% automated, 10% human judgment
5. **Move up-stack** — Review intent and outcomes, not lines

### 🚀 Implementation Steps

1. Create intent templates for common feature types
2. Automate 80% of current manual checks
3. Build evidence bundle requirements
4. Train reviewers to validate outcomes, not implementation
5. Measure: time-to-merge, defect rate, compliance violations

---

# Part 3: Trust Manufacturing (CI as Factory)

*How AI agents transform CI from quality gate to trust manufacturing at scale*

---

## The Problem

We're shipping 10-15 features per day with AI agents.

But our CI is still optimized for 2-3 features per week from humans.

**The bottleneck isn't agent velocity—it's trust production.**

Agents can write code faster than CI can prove it's safe.

---

## The Core Insight

**CI isn't a quality gate anymore. It's a trust factory.**

### Traditional CI (Quality Gate)
```
Write code → Run tests → Fix failures → Manual review → Deploy
```
**Purpose:** Catch bugs before they reach production
**Optimized for:** Infrequent changes, human-readable output, manual intervention

### Agentic CI (Trust Factory)
```
Agent writes code → CI manufactures trust evidence → Human validates outcomes → Auto-deploy
```
**Purpose:** Manufacture trust artifacts at agent velocity
**Optimized for:** 10-15 changes/day, machine-readable evidence, automated validation

> 🏭 **The Shift:** From "did the tests pass?" to "do we have sufficient evidence to trust this change?"

---

## What "Trust Factory" Actually Means

### Manufacturing Principles Applied to CI

**1. Repeatable Processes**
- Same checks, same order, every time
- Zero variation = reliable trust signals
- Hermetic builds (no "works on my machine")

**2. Quality Gates**
- Can't proceed without passing inspection
- Branch protection enforces the gates
- No human bypass (not even for "urgent" fixes)

**3. Automated Inspection**
- Machines check faster and more consistently than humans
- 327 tests run in 8 minutes
- Security scan: 10,000 patterns in 45 seconds
- Compliance validation: GDPR, PCI, FedRamp checks automated

**4. Evidence Trails**
- Every check produces attestations
- Auditable, reproducible, tamper-evident
- "Show me the evidence this was compliant" → Link to PR

**5. Continuous Improvement**
- Flake rate: <2% (or disable the test)
- Build time: tracked weekly, optimized monthly
- False positive rate: measured and reduced

**6. Scale Economics**
- First feature costs 8 minutes of CI time
- 15th feature that day: 2 minutes (cached dependencies)
- Marginal cost approaches zero

> 🎯 **The Goal:** Trust that scales linearly with agent output, not quadratically with human review time.

---

## The Agent Advantage: Context-Aware Validation

### Problem: Compliance Is Contextual

#### Traditional Approach (Deterministic Rules)
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

#### Agentic Approach (Context-Aware)
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

### Why Agents Outperform Rules

- **Read context:** Understand if email is in test vs. production
- **Apply judgment:** "This is a mock email" vs. "This handles user PII"
- **Explain reasoning:** "Flagged because function processes real user input"
- **Learn patterns:** Improve over time as policies evolve

---

## Fast Feedback: The 10-Minute Rule

### Why 10 Minutes Matters

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

### How to Achieve Fast CI

1. **Affected analysis:** Test only changed modules
2. **Distributed execution:** Parallelize across runners
3. **Aggressive caching:** Cache dependencies, build artifacts, test results
4. **Incremental builds:** Rebuild only what changed
5. **Strategic test splitting:** Fast smoke tests first, slow integration tests last

---

## The Trust Pipeline

### Stage 1: Fast Feedback (< 10 minutes)

**Purpose:** Catch obvious issues immediately

**Checks:**
- Build succeeds
- Unit tests pass (affected modules only)
- Lint/format violations
- Basic security scan (high-severity only)

**On failure:** Block PR, fast feedback to agent

### Stage 2: Comprehensive Validation (< 30 minutes)

**Purpose:** Full trust evidence generation

**Checks:**
- Full test suite (including integration tests)
- Deep security scan (all severities)
- Performance benchmarks
- Architecture compliance
- Dependency vulnerability scan
- Compliance validation (GDPR, PCI, etc.)

**On failure:** Block merge, detailed report for human review

### Stage 3: Pre-Production (< 60 minutes)

**Purpose:** Final validation before production

**Checks:**
- Deploy to staging environment
- Smoke tests in staging
- Database migration validation
- Rollback test
- Load testing (if performance-sensitive)

**On failure:** Block production deploy, page on-call

---

## Evidence Attestations

### What Are Attestations?

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

### Why Attestations Matter

- **Auditability:** "Prove this change was compliant"
- **Supply chain security:** SLSA compliance
- **Regulatory requirements:** SOC 2, ISO 27001
- **Reproducibility:** Re-run identical checks

### Generating Attestations

```yaml
# .github/workflows/attestation.yml
- name: Generate attestation
  uses: actions/attest-build-provenance@v1
  with:
    subject-path: 'dist/*.tar.gz'
```

---

## Flake Management: Zero Tolerance

### The Problem with Flaky Tests

**Single flaky test (5% failure rate):**
- 20 PRs/day × 5% = 1 spurious failure/day
- 10 flaky tests = 10 failures/day
- Developers lose trust in CI
- "Just rerun it" becomes default

### Zero Tolerance Policy

**Rules:**
1. **Quarantine on first flake:** Move test to quarantine suite
2. **Fix within 2 days:** Owner must fix or delete
3. **After 2 days:** Auto-disabled, blocks future PRs until fixed
4. **Track flake rate:** <2% target, measured weekly

### How to Fix Flaky Tests

- **Race conditions:** Add proper waits, not fixed sleeps
- **External dependencies:** Mock API calls, don't hit real services
- **Time-dependent:** Mock system time
- **Order-dependent:** Isolate test data
- **Environment-dependent:** Get Hermetic builds

> 🎯 **Goal:** Zero flaky tests in critical path (PR checks)

---

## Caching Strategies

### What to Cache

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

### Cache Invalidation Strategy

- **Dependency cache:** Invalidate on lockfile change
- **Build cache:** Invalidate on source file change
- **Test cache:** Invalidate on test or source change

**Impact:**
- First build: 23 minutes
- Cached build: 3 minutes
- 7.6x speedup

---

## Continuous Improvement Metrics

### Track These Weekly

| Metric | Target | Action |
|--------|--------|--------|
| PR check time | < 10 min | Optimize if > 10 min |
| Full pipeline time | < 30 min | Optimize if > 30 min |
| Flake rate | < 2% | Quarantine if > 2% |
| Cache hit rate | > 80% | Investigate if < 80% |
| False positive rate | < 5% | Tune rules if > 5% |
| Throughput | 10-15 PRs/day | Scale infrastructure |

### Monthly Reviews

- **Slowest checks:** Parallelize or optimize
- **Most flaky tests:** Fix or delete
- **Cache efficiency:** Tune invalidation strategy
- **False positives:** Adjust rules or add agent validation

---

## Key Takeaways: Trust Manufacturing

### 🎯 Core Principles

1. **CI is a factory** — Manufacturing trust at agent velocity
2. **Fast feedback** — <10 minutes for PR checks
3. **Zero flakes** — Quarantine on first flake, fix within 2 days
4. **Context-aware validation** — Use agents for complex compliance
5. **Evidence-based trust** — Attestations for auditability
6. **Continuous improvement** — Track metrics, optimize weekly

### 🚀 Implementation Steps

1. Measure current CI time and flake rate
2. Implement affected analysis for fast feedback
3. Add caching for dependencies and builds
4. Create agent-based compliance validators
5. Generate attestations for all checks
6. Establish zero-tolerance flake policy
7. Track metrics weekly, optimize monthly

---

# Putting It All Together

---

## The Complete Gen-4 System

```
┌──────────────────────────────────────────────────────┐
│                                                      │
│  Repository Topology (Part 1)                        │
│  ├── Agent-native monorepo                           │
│  ├── Enforced module boundaries                      │
│  ├── Hermetic builds                                 │
│  └── Affected analysis                               │
│                                                      │
│  ↓ Enables ↓                                         │
│                                                      │
│  PR Workflows (Part 2)                               │
│  ├── Intent-first specifications                     │
│  ├── Evidence-bundle PRs                             │
│  ├── Policy-gated merges                             │
│  └── Outcome-focused review                          │
│                                                      │
│  ↓ Validated by ↓                                    │
│                                                      │
│  Trust Manufacturing (Part 3)                        │
│  ├── Fast feedback (<10 min)                         │
│  ├── Context-aware validation                        │
│  ├── Evidence attestations                           │
│  └── Zero-flake tolerance                            │
│                                                      │
│  = Sustainable 10-15 features/day with confidence    │
│                                                      │
└──────────────────────────────────────────────────────┘
```

---

## Implementation Roadmap

### Phase 1: Foundation (Weeks 1-4)

**Repository:**
- [ ] Audit current repos: how often do agents touch 2+?
- [ ] If >30%, plan monorepo migration
- [ ] Set up Nx/Lerna/Bazel for build orchestration
- [ ] Enable affected analysis

**CI:**
- [ ] Measure current feedback time
- [ ] Identify slowest checks
- [ ] Add caching for dependencies and builds
- [ ] Target: <10 min PR checks

### Phase 2: Automation (Weeks 5-8)

**Governance:**
- [ ] Create intent templates for common features
- [ ] Automate 80% of manual checks
- [ ] Build evidence-bundle requirements
- [ ] Set up attestation generation

**Quality:**
- [ ] Identify flaky tests
- [ ] Implement quarantine policy
- [ ] Add agent-based compliance validation
- [ ] Target: <2% flake rate

### Phase 3: Optimization (Weeks 9-12)

**Velocity:**
- [ ] Measure agent throughput
- [ ] Identify bottlenecks
- [ ] Optimize slowest checks
- [ ] Scale infrastructure
- [ ] Target: 10-15 features/day

**Governance:**
- [ ] Train reviewers on outcome validation
- [ ] Refine policy gates
- [ ] Measure false positive rate
- [ ] Iterate based on feedback

---

## Success Metrics

### Engineering Velocity

| Before (Gen-3) | After (Gen-4) | Improvement |
|----------------|---------------|-------------|
| 2-3 features/week | 10-15 features/day | 15-20x |
| 4-7 days PR-to-merge | 2-4 hours | 20-40x |
| 80 min CI time | 8 min | 10x |

### Trust & Quality

| Before (Gen-3) | After (Gen-4) | Improvement |
|----------------|---------------|-------------|
| 22 manual gates | 4 human checkpoints | 80% reduction |
| 15% flaky tests | <2% flaky | 7x improvement |
| 803 false positives | 2 false positives | 400x accuracy |

### Human Experience

| Before (Gen-3) | After (Gen-4) | Change |
|----------------|---------------|--------|
| Line-by-line review | Outcome validation | Up-stack focus |
| 4 hours/PR reviewing | 20 min/PR reviewing | 12x time savings |
| Coordination overhead | Atomic merges | 90% reduction |

---

## Common Pitfalls

### 1. Keeping Human-Scale Processes

❌ **Don't:** Try to review 15,000 lines/day at Gen-3 detail level
✅ **Do:** Move to intent and outcome validation

### 2. Tolerating Flaky CI

❌ **Don't:** "Just rerun it until it passes"
✅ **Do:** Quarantine on first flake, fix within 2 days

### 3. Multi-Repo for Insufficient Reasons

❌ **Don't:** "We've always had separate repos"
✅ **Do:** Consolidate if agents cross repos >30% of the time

### 4. Slow Feedback Loops

❌ **Don't:** Accept 60-minute CI times
✅ **Do:** Optimize to <10 minutes with caching and affected analysis

### 5. Manual Governance at Machine Speed

❌ **Don't:** Require human approval for every change
✅ **Do:** Automate 90%, human review 10% (high-risk only)

---

## The Strategic Imperative

### Why This Matters Now

**The window is narrowing:**
- AI agents are already generating feature-scale code
- Organizations using Gen-4 practices are shipping 10-15x faster
- Traditional SDLC is becoming uncompetitive
- First-movers establish patterns that become industry standards

**The competitive gap:**
- Gen-3: 2-3 features/week per team
- Gen-4: 10-15 features/day per team
- **100x annual output difference** (150 features/year vs. 3,600 features/year)

### What Success Looks Like

**In 6 months:**
- Shipping 10-15 features/day with confidence
- Human reviewers focused on strategic decisions
- CI manufacturing trust at agent velocity
- Compliance and security automated

**In 12 months:**
- Gen-4 SDLC is muscle memory
- Agents handle 90% of feature implementation
- Humans govern outcomes and set direction
- Organization achieves sustainable AI velocity

---

## Resources

**Official Documentation:**
- [Nx Monorepo Tools](https://nx.dev/) — Build orchestration and affected analysis
- [SLSA Framework](https://slsa.dev/) — Supply chain security attestations
- [GitHub Actions Caching](https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows)

**Community Examples:**
- [Copilot Orchestra](https://github.com/ShepAlderson/copilot-orchestra) — Agent workflow patterns
- [GitHub Copilot Atlas](https://github.com/bigguy345/Github-Copilot-Atlas) — Multi-agent orchestration

**Related Talks:**
- [Agent Teams](../agent-teams/) — Specialized agent coordination
- [Parallel Execution](../parallel-execution/) — Worktree-based autonomy
- [Copilot Hooks](../copilot-hooks/) — Agent governance

---

**Building infrastructure for sustainable AI velocity**

*Barton Mathis*
