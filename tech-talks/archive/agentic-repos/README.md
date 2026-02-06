# Agentic Delivery Repo Topology

**How to rewire repositories for AI‑as‑labor delivery agents (Gen‑4 SDLC)**
Barton Mathis

---

## The Problem

Our repo structure was designed for humans collaborating on quarterly releases.

Now we're running agents that ship features daily.

**This is like running a Formula 1 car on roads designed for horses.**

The car is fast. The road wasn't built for that speed. Something breaks.

---

## The Solution (TL;DR)

- Default to an **agent‑native product monorepo** with enforced module boundaries (not suggestions).
- Pair it with a **separate control‑plane repo** for policies, golden workflows, and scaffolding.
- Optimize for **deterministic signal**: hermetic builds, "affected" CI, and aggressive caching.
- Treat PRs as **governance evidence bundles** (intent → diff → checks → attestations), not collaboration forums.

---

## What Changes in Gen‑4 (AI‑as‑Labor)

### Traditional (Gen‑3)

- **Humans produce code** — 10-50 lines/hour, context-switching every 23 minutes
- **PRs are collaboration forums** — "Can you explain this?" "Why did you...?" "LGTM 🚀"
- **Repo structure optimized for teams** — "Frontend in one repo, backend in another"
- **CI is supporting infrastructure** — "The build is red again, someone look at it"

### Agentic (Gen‑4)

- **Agents produce feature‑scale payloads** — 500-2000 lines in 15 minutes, zero context switching
- **Humans govern safety and outcomes** — "Ship the feature" or "Roll it back" (not "move this function to line 47")
- **Repo structure optimized for agents** — "Everything this agent needs is in one atomic boundary"
- **CI becomes the trust factory** — "If CI is green, we ship. If CI is red, nobody moves."

> 💡 **The Shift:** Humans used to write code and delegate review. Now humans delegate coding and review outcomes.

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

## Topology Decision: Monorepo vs Multi‑Repo

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

- **Atomic cross‑module changes** — Change API + all 7 call sites in one PR, not 8 coordinated PRs
- **Shared patterns are local** — `import { validateEmail } from '@libs/validation'`, not "which version of the validation package?"
- **Agent navigation is grep, not GitHub search** — "Where's the auth middleware?" → One `rg` command
- **One CI pipeline to rule them all** — Unified standards, consistent tooling, shared cache

### Multi‑Repo (When You Actually Need It)

- **Hard access boundaries** — PCI-regulated payment processing physically separated from marketing site
- **Truly independent products** — Mobile app with 6-month release cycles + web app with daily deploys
- **Regulatory/compliance mandates** — "The auditor said these must be separate"
- **Organizational constraints** — Acquired company not ready to merge (yet)

> 🎯 **Decision Rule:** If our agents touch >1 repo for >30% of features, we need a monorepo.

---

## Recommended Baseline

### Agent‑Native Product Monorepo (Default)

```

/apps

*   deployables
*   service boundaries
*   release units

/libs

*   shared modules
*   public APIs
*   version‑less internal dependencies

/platform

*   standards
*   SDKs
*   runtime contracts

/infra

*   pipelines
*   environment templates
*   infrastructure‑as‑code

/docs

*   ADRs
*   intent specs
*   agent context

```

### Separate Control‑Plane Repo

- Policies
- Golden workflows
- Scaffolding
- Consumed by product repos

---

## Non‑Negotiables for Agent‑Native Repos
*(If we skip these, agents will wreck our codebase)*

### 1. Module Boundaries Are **Enforced**, Not Social
- **Wrong:** "Please don't import from `/internal`" (agents will ignore this)
- **Right:** ESLint rules that fail CI if you import from `/internal`
- **Why:** Agents don't read comments. They follow signals.

### 2. Ownership Is Codified
- **Wrong:** "Sarah reviews backend stuff" (tribal knowledge)
- **Right:** `CODEOWNERS` file + branch protection = Sarah auto-assigned, required approval
- **Why:** Agents ship at 3 AM. Humans need automated routing.

### 3. Builds Are Deterministic
- **Wrong:** Tests pass locally, fail in CI, "works on my machine"
- **Right:** Hermetic builds, pinned dependencies, reproducible everywhere
- **Why:** Agents retry failed builds. Flaky tests = infinite loops.

### 4. CI Runs Only What's Affected
- **Wrong:** Change 1 file → rebuild everything → 4-hour feedback loop
- **Right:** Dependency graph analysis → test only impacted projects → 8-minute feedback
- **Why:** Slow CI = agents blocked. Blocked agents = humans blocked.

### 5. Repository Shape Is Consistent
- **Wrong:** Each team invents their own structure (17 different patterns)
- **Right:** Standardized `/apps`, `/libs`, `/platform` across all products
- **Why:** Agents navigate by pattern. Inconsistency = confusion = hallucinations.

> 🚨 **Red Flag:** If our CI takes longer than our sprint retrospectives, agents can't help us.

---

## The Guardrails That Let Agents Run at Speed
*(Governance Primitives for Feature-Per-Day Delivery)*

### Auto-Routing with CODEOWNERS
```
/apps/payment-service/**  @payments-team
/libs/auth/**             @security-team
```
**Effect:** Agent opens PR → GitHub auto-assigns → No "who should review this?" Slack threads

### Branch Protection That Actually Protects
- ✅ Require 1 human approval from CODEOWNERS
- ✅ Require all CI checks green (tests, security scans, lint)
- ✅ Require up-to-date branch (no merge conflicts)
- ❌ Don't require 3 approvals (that's velocity poison)

### Policy-as-Code (Not Policy-as-PDF)
Encode in automated checks:
- 🔒 **Security:** No secrets in code, no SQL injection patterns, no outdated dependencies
- 📜 **Compliance:** PII handling, data retention, audit trails
- ⚖️ **Licensing:** No GPL in proprietary code
- 🎯 **Quality:** 80% test coverage, complexity < 15, no TODO comments in shipped code

---

## The Compliance Pain (And Why Agents Are the Answer)

### The Traditional Compliance Tax

Compliance reviews slow everything down. Manual processes are:
- **Slow:** 3-day wait for security review, 2-day wait for compliance sign-off
- **Inconsistent:** Different reviewers apply different standards, same code gets different outcomes
- **Brittle:** Checklists can't handle context or nuance
- **Non-scalable:** 50 PRs/week overwhelms compliance teams

**The Pattern:** Compliance becomes a bottleneck. Developers route around it. Incidents happen. Regulations tighten. Bottleneck gets worse.

### Why Traditional Automation Fails

**Deterministic tools miss context:**

```python
# Compliance scanner: ❌ FAIL - PII detected
customer_email = request.body['email']
log.info(f"Processing request for {customer_email}")
```

**Is this a violation?**
- ✅ **If it's a support ticket system:** Logging customer email for audit trail = required
- ❌ **If it's a marketing site:** Logging PII without consent = GDPR violation

**Traditional static analysis can't tell the difference.**

The same code in different contexts has different compliance implications. Checklist-based tools don't understand:
- Business context (what is this feature for?)
- Regulatory scope (which regulations apply here?)
- Risk nuance (is this PII being stored, logged, or just validated?)
- Compensating controls (is encryption enabled? Are logs anonymized downstream?)

### Agents Understand Context and Nuance

**Agents are non-deterministic.** They can:
- **Read the feature description** — "Support ticket ingestion system" vs "Newsletter signup form"
- **Understand regulatory scope** — "EU users" triggers GDPR checks, "Healthcare data" triggers HIPAA
- **Reason about risk** — Logging email for audit trail (acceptable) vs logging SSN to analytics (violation)
- **Recommend compensating controls** — "If you must log this, use hashed identifiers instead"

**Same code, different analysis:**

```python
# Context: Support ticket system with audit requirements
customer_email = request.body['email']
log.info(f"Processing request for {customer_email}")
```

**Agent Analysis:**
> ✅ **Compliance: Acceptable with conditions**
> - Logging customer email is required for SOC 2 audit trail
> - Ensure logs are encrypted at rest (checked: ✅)
> - Ensure log retention matches data retention policy (checked: ✅)
> - Recommendation: Consider using `hash(customer_email)` for correlation if full email isn't required

**vs.**

```python
# Context: Marketing newsletter signup form
customer_email = request.body['email']
log.info(f"Processing request for {customer_email}")
```

**Agent Analysis:**
> ⚠️ **Compliance: Needs review**
> - Logging PII without clear audit purpose may violate GDPR Article 5 (purpose limitation)
> - Recommendation: Log `hash(customer_email)` or omit logging entirely
> - If logging is required, document the legitimate interest in privacy policy

**Same line of code. Different context. Different compliance ruling.**

### Compliance Becomes Automatable

Yes, compliance is **hard**. But agents offer tools to make it:

**1. Easier** — Agents explain *why* something is a violation and *how* to fix it
```
❌ Don't just say: "PII violation detected"
✅ Instead explain: "Logging SSN violates HIPAA §164.502(b) minimum necessary rule.
   Consider: Use patient_id instead, or hash SSN if correlation is required."
```

**2. Faster** — Agents check every PR in seconds, not days
- Traditional: 3-day security review backlog
- Agent-assisted: Instant feedback, human reviews only flagged issues
- **Result:** 95% of PRs get immediate green/red signal

**3. Automatable** — Agents learn your compliance patterns and codify them
```yaml
# Compliance rules agents help you build:
- rule: no-pii-in-logs
  applies-to: [healthcare, finance]
  check: |
    if logging.contains(ssn, patient_id, account_number):
      require: hashing or encryption
      require: documented-audit-purpose
      require: retention-policy-match
```

### The CI Trust Factory for Compliance

**If CI is green, compliance is validated. If CI is red, nobody ships.**

Agents transform compliance from a gate at the end to continuous validation:

```
┌─────────────────────────────────────────────────────────────┐
│  TRADITIONAL COMPLIANCE WORKFLOW (Days)                      │
├─────────────────────────────────────────────────────────────┤
│  Code → PR → Wait → Security Review → Wait → Compliance     │
│         ↓            ↓(3 days)        ↓(2 days)             │
│       Questions   "Needs changes"   "Approved with          │
│                                      conditions"             │
│                                                              │
│  Timeline: 5-7 days, 3 back-and-forths, 2 Slack threads     │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  AGENT-ASSISTED COMPLIANCE (Minutes)                         │
├─────────────────────────────────────────────────────────────┤
│  Code → Agent Analysis (30s) → CI Validation (2 min)        │
│         ↓                       ↓                            │
│       ✅ Compliant            ✅ All checks pass             │
│       ⚠️ Needs attention      → Human review (flagged)       │
│       ❌ Violation            → Blocked, fix required        │
│                                                              │
│  Timeline: 3 minutes for 95% of PRs, human review only      │
│            for the 5% that need judgment calls              │
└─────────────────────────────────────────────────────────────┘
```

### What Gets Better

| Metric | Before Agents | With Agents | Impact |
|--------|---------------|-------------|---------|
| **Compliance review time** | 3 days average | 3 minutes (95% auto) | 1,440x faster |
| **False positives** | 40% (checklist rigidity) | 8% (context-aware) | Developer velocity |
| **Coverage** | 100% manual | 100% automated | No PRs slip through |
| **Consistency** | Varies by reviewer | Same standards | Predictable outcomes |
| **Audit trail** | PDF + email chain | Structured evidence | Audit-ready |

### The Hard Truth

**Compliance doesn't get easier.** Regulations multiply. Requirements tighten. Enforcement increases.

**But agents make compliance *manageable* at scale:**
- They understand nuance (not just pattern matching)
- They explain violations (not just flag them)
- They suggest fixes (not just block PRs)
- They learn your standards (and apply them consistently)
- They scale linearly (10 PRs or 1,000 PRs, same speed)

**The alternative?** Hire 5 more compliance reviewers, slow down delivery, and still miss edge cases.

> 🎯 **Compliance used to be "catch violations before prod." Now it's "make violations impossible to merge."**

---

### Agents Produce Evidence, Humans Validate Outcomes
**Agent generates:**
- ✅ Unit tests (327 assertions, 89% coverage)
- ✅ Integration tests (12 API contracts validated)
- ✅ Security scan (0 critical, 2 medium addressed)
- ✅ Risk: Low (no schema changes, no auth modifications)
- ✅ Rollback plan: Revert commit abc123, no data migration needed

**Human reviews:** "Outcomes match intent? Ship it."

> 💡 **The New Contract:** Agents prove it's safe. Humans decide if it's right.

---

## CI as Your Assembly Line: No Flaky Bolts Allowed

### Affected Execution (Build Only What Changed)
```bash
# Wrong: Change 1 file, rebuild 47 projects
$ npm run build  # 4 hours 🐌

# Right: Build only affected projects
$ nx affected:build  # 8 minutes ⚡
```
**Why:** Agents iterate fast. Slow CI = bottleneck.

### Remote Caching (Never Rebuild the Same Thing Twice)
- Agent A builds `@libs/auth` → uploads to cache
- Agent B needs `@libs/auth` → downloads from cache (3 seconds vs 4 minutes)
- Local dev needs `@libs/auth` → same cache (our laptops thank us)

### Dependency-Graph-Aware Tooling
```
@libs/validation changed
  ↓ affects
@libs/api-client (needs rebuild)
  ↓ affects
@apps/web-app (needs tests)
  ↓ affects
@apps/mobile-app (unaffected, skipped)
```

### Flaky Tests = Production Incidents
**Treat them the same way:**
- 🚨 Page the owning team
- 🔥 Fix within 24 hours or disable
- 📊 Track flake rate as a key metric

**Why:** One flaky test = agent retries = CI queue blocked = 12 other agents waiting = $3,000 of wasted compute per day

> ⚡ **If our CI fails 1 in 10 times for no reason, we don't have CI—we have a coin flip.**

---

## PRs That Survive Feature‑Per‑Day Delivery

### What a Good PR Looks Like
```markdown
## Intent
Add character bio expansion on hover (FAN-472)

## Changes
- New `CharacterBioPopover` component (127 lines)
- Hook into existing `CharacterCard` click handler
- 15 unit tests, 3 integration tests

## Evidence
✅ All tests pass (332/332)
✅ Coverage: 91% (+3%)
✅ Security scan: 0 issues
✅ Bundle size: +2.3kb (within budget)
✅ Lighthouse: 94 performance (no regression)

## Risk: Low
- No schema changes
- No auth modifications
- Feature flag: `character-bio-hover` (off by default)

## Rollback
Revert commit f3a90bc, toggle flag off
```

### What Humans Actually Review
1. **Does the implementation match the intent?** (Yes/No)
2. **Are the automated checks sufficient?** (Coverage looks good / Need more edge case tests)
3. **What's the blast radius if this breaks?** (5,000 users / 500,000 users)
4. **Should we increase autonomy for this agent?** (Yes, consistent quality / No, needs more supervision)

**Not:** "Why did you use `useState` here instead of `useReducer`?" (That's what automation enforces)

> 📦 **PRs are evidence bundles, not collaboration forums.**

---

## Where a Separate Control‑Plane Repo Pays Off
*(The Factory That Builds Factories)*

### What Goes in the Control Plane

**`platform-standards/` repo:**
```
/golden-workflows/
  ├── ci-pipeline.yml          # Reusable CI template
  ├── security-scan.yml        # Consistent scanning
  └── deploy-production.yml    # Standardized deploys

/scaffolding/
  ├── new-service-template/    # "nx generate @company/service"
  ├── new-app-template/        # "nx generate @company/app"
  └── new-library-template/    # "nx generate @company/lib"

/policies/
  ├── security-baseline.yml    # OPA policies
  ├── licensing-rules.yml      # Allowed licenses
  └── quality-gates.yml        # Coverage, complexity thresholds

/platform-contracts/
  ├── auth-service.proto       # gRPC contracts
  ├── logging-sdk/             # Shared SDKs
  └── error-handling/          # Standard patterns
```

### Why This Matters
- **New repo?** Clone template, run one script, have full CI in 10 minutes (not 3 days)
- **Policy update?** Change once in control plane, all repos get it via workflow import
- **Platform upgrade?** Update SDK version in one place, dependabot PRs everywhere

> 🏭 **Control plane = consistency at scale. Without it, every repo is a unique snowflake (and snowflakes melt).**

---

## Migration Approach (Minimal Drama)
*(How to Get There Without Breaking Production)*

### Phase 1: Standardize Structure (Weeks 1-2)
- Pick one repo as the reference
- Establish `/apps`, `/libs`, `/platform` structure
- Document patterns, create templates

### Phase 2: Extract Control Plane (Weeks 3-4)
- Create `platform-standards` repo
- Move CI templates, scaffolding, policies
- Update existing repos to consume templates

### Phase 3: Merge Tightly Coupled Repos (Weeks 5-8)
- Start with 2-3 repos that change together 90% of the time
- Use git subtree or monorepo migration tools
- Keep git history (bisect still works)

### Phase 4: Enforce Boundaries (Weeks 9-12)
- Add ESLint rules for module boundaries
- Implement CODEOWNERS
- Turn on branch protection

### Phase 5: Optimize CI (Ongoing)
- Add affected detection
- Set up remote caching
- Fix flaky tests as you find them

### Measure Success
- **Cycle time:** Feature start → production (track weekly)
- **CI efficiency:** Total CI minutes / useful CI minutes
- **Failure rate:** Red builds / total builds (aim for <2%)
- **Rollback rate:** Rollbacks / deploys (aim for <1%)

> 📊 **If we're not measuring, we're just migrating and hoping.**

---

## 🚩 Red Flags Our Repo Isn't Ready for Agents

### We Know We're in Trouble When...

- ❌ Our CI takes longer than our sprint retrospectives
- ❌ "It works on my machine" is said more than twice a week
- ❌ We have a Slack channel called `#build-is-broken`
- ❌ Our CODEOWNERS file was last updated in 2022
- ❌ Developers regularly commit directly to `main` to "save time"
- ❌ We have >5 repos but <5 people (coordination overhead exceeds team size)
- ❌ "Let me check which version of the library we're using" is a daily question
- ❌ Our test suite has >10% flaky tests and we're not fixing them
- ❌ Merging a PR requires pinging 4 people in Slack
- ❌ Our monorepo builds everything on every commit (and takes 3 hours)

### Common Failure Modes (And How to Avoid Them)

#### Failure Mode 1: The Monorepo Swamp
**Symptom:** Everything depends on everything, 4-hour builds, teams bypass CI

**Root Cause:** No enforced boundaries

**Fix:**
```typescript
// .eslintrc.js
rules: {
  '@nx/enforce-module-boundaries': [
    'error',
    {
      depConstraints: [
        {
          sourceTag: 'scope:apps',
          onlyDependOnLibsWithTags: ['scope:libs', 'scope:platform']
        },
        {
          sourceTag: 'scope:libs',
          onlyDependOnLibsWithTags: ['scope:libs', 'scope:platform']
        }
      ]
    }
  ]
}
```

#### Failure Mode 2: The Review Bottleneck
**Symptom:** PRs sit for days, "waiting for review" is the top blocker

**Root Cause:** Unclear ownership, too many required approvals

**Fix:**
- CODEOWNERS for automatic assignment
- 1 required approval (not 3)
- Automation proves safety, humans validate outcomes

#### Failure Mode 3: The Flaky Test Death Spiral
**Symptom:** Tests fail randomly, developers re-run CI until it passes, confidence collapses

**Root Cause:** Treating flaky tests as annoyances, not incidents

**Fix:**
- Track flake rate as a KPI
- Page owning team when flake rate >2%
- Disable flaky tests immediately, fix within 24 hours
- Never merge with flaky tests

#### Failure Mode 4: The Multi-Repo Coordination Hell
**Symptom:** Simple feature takes 3 days across 5 repos, 12 handoffs, 2 rollbacks

**Root Cause:** Repos organized by team, not by product

**Fix:**
- Merge repos that change together >50% of the time
- Use monorepo for product boundaries
- Reserve multi-repo for actual regulatory/access boundaries

> ⚠️ **Remember:** Monorepos fail when everything depends on everything. Fix boundaries, not structure.

---

## What "Better Software Faster" Actually Looks Like
*(The Measurable Outcomes)*

### Before Agentic Delivery
- 📅 Feature cycle time: 2-3 weeks
- 🐌 CI feedback: 45 minutes (with retries)
- 👥 Review bottleneck: 18-24 hour median wait
- 🔄 Rollback rate: 8% of deploys
- 😰 Developer stress: "Did I break production?"

### After Optimization
- ⚡ Feature cycle time: Same-day ship for green builds
- 🚀 CI feedback: 8 minutes (affected tests + caching)
- 🤖 Review bottleneck: Auto-assigned, 2-hour median (automated evidence does the work)
- ✅ Rollback rate: <1% (automation catches issues pre-merge)
- 😌 Developer focus: "What outcome do we want?" (not "Did I indent correctly?")

### The New Normal

**Agents iterate rapidly:**
- 10-15 feature PRs per day per team
- Each PR: 300-800 lines, fully tested, security-scanned
- Humans review intent and outcomes (not syntax)

**Inside deterministic rails:**
- CI is green or red (never "maybe")
- Policies are enforced by code (not Slack messages)
- Rollback is one click (and tracked as a metric)

**Trust scales through proof:**
- Week 1: Human reviews every line (agent needs training)
- Week 4: Human reviews outcomes (agent shows consistency)
- Week 12: Human reviews only high-risk changes (agent has earned autonomy)

> 🎯 **The Goal:** Feature-per-day delivery where humans govern and agents execute—sustainably, safely, at scale.

---

## The Bottom Line

**Our repo structure is our agent's world.**

If that world has:
- ✅ Clear boundaries
- ✅ Fast feedback loops
- ✅ Automated guardrails
- ✅ Deterministic outcomes

**Then agents can run fast.**

If it doesn't?

**They'll run fast anyway—right off a cliff.**

> 🏎️ **Build roads for Formula 1 cars, not horses. Our agents are already here.**
