# Agentic Delivery Repo Topology

**How to rewire repositories for AI‑as‑labor delivery agents (Gen‑4 SDLC)**
Prepared for: Barton Mathis
February 2026

---

## Executive Summary

- Default to an **agent‑native product monorepo** with strict module boundaries.
- Pair it with a **separate control‑plane repo** for policies, golden workflows, and scaffolding.
- Optimize for **deterministic signal**: hermetic builds, “affected” CI, and caching.
- Treat PRs as **governance evidence bundles** (intent → diff → checks → attestations).

---

## What Changes in Gen‑4 (AI‑as‑Labor)

### Traditional

- Humans produce most code
- PRs are the primary collaboration unit
- Repo structure optimized for teams
- CI is supporting infrastructure

### Agentic (Gen‑4)

- Agents produce feature‑scale payloads
- Humans govern safety and outcomes
- Repo structure optimized for agents
- CI becomes the **trust factory**

---

## Goal: Max Throughput Without Losing Trust

- Minimize coordination overhead (context switching, cross‑repo choreography)
- Maximize agent situational awareness (patterns, call sites, contracts in one place)
- Make verification cheap and fast (repeatable builds/tests)
- Scale governance (ownership, policy, automated gates)

---

## Topology Decision: Monorepo vs Multi‑Repo

### Monorepo (Default)

- Atomic cross‑module changes in a single PR
- Shared patterns are local, not versioned
- Simpler agent navigation over large codebases
- Unified standards and tooling

### Multi‑Repo (When Justified)

- Hard access boundaries or regulatory separation
- Truly independent products with minimal coupling
- Divergent lifecycles that cannot share policy
- Organizational constraints force separation

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

- Module boundaries are **enforced**, not social
- Ownership is codified (CODEOWNERS + required reviews)
- Builds and tests are deterministic (hermetic where possible)
- CI runs only what’s affected and uses caching
- Repository shape is standardized across products

---

## Governance Primitives
*(Scale Review Without Humans Everywhere)*

- CODEOWNERS routes review responsibility automatically
- Branch protection requires approvals and status checks
- Policy packs encode:
  - Security
  - Compliance
  - Licensing
  - Secrets
  - Quality
- Agents produce evidence:
  - Tests
  - Scans
  - Risk classification
  - Rollback notes

---

## CI as a Trust Factory

- Adopt **affected execution**: build/test only impacted projects
- Add **remote caching** to reuse reproducible outputs across CI and dev machines
- Prefer dependency‑graph‑aware tooling to keep feedback loops short
- Treat flaky tests as production incidents (they destroy agent autonomy)

---

## PRs That Survive Feature‑Per‑Day Delivery

- PR = intent + diff + automated evidence bundle
- Small, composable changes (stack if needed)
- Automation gates decide merge readiness
- Humans validate outcomes and recalibrate autonomy
  *(not line‑by‑line review)*

---

## Where a Separate Control‑Plane Repo Pays Off

- Golden pipelines (reusable workflow templates)
- Scaffolding generators (new service/app templates)
- Central security baselines and policy‑as‑code
- Platform contracts and shared tooling versions
- Consistent repo bootstrapping across many repos

---

## Migration Approach (Minimal Drama)

1. Standardize structure and CI in existing repos first
2. Extract shared standards into a control‑plane repo
3. Merge tightly coupled services/libs into a monorepo incrementally
4. Enforce boundaries and ownership as you go
5. Measure:
   - Cycle time
   - CI minutes
   - Failure rate
   - Rollback rate

---

## Common Failure Modes

### If You Do Monorepo Wrong

- Everything depends on everything
- Builds/tests slow → teams bypass gates
- Unclear ownership → review bottlenecks
- No boundaries → risky refactors

### Mitigations

- Enforce dependency constraints
- Affected execution + caching + split CI stages
- CODEOWNERS and rulesets
- Make shared APIs explicit

---

## What “Better Software Faster” Looks Like

- Daily feature‑scale delivery with automated verification
- Humans focus on outcomes, risk, and customer value
- Agents iterate rapidly inside policy and deterministic CI
- Trust recalibration: autonomy increases with proven stability
