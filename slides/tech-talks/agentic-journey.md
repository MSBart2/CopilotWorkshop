---
theme: default
background: https://source.unsplash.com/collection/94734566/1920x1080
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## The Journey to Agentic SDLC
  From "Assign to Copilot" to Full AI-Native Delivery
drawings:
  persist: false
transition: slide-left
title: The Journey to Agentic SDLC
module: tech-talks/agentic-journey
mdc: true
---

<div class="flex flex-col items-center justify-center h-full">
<div class="flex items-center gap-8 mb-8">
<img src="./sdp-logo.png" class="h-32 w-32" alt="SDP Logo" />
<div>
<h1 class="text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent !pb-2 !leading-tight">
The Journey to Agentic SDLC
</h1>
<p class="text-2xl mt-4 text-gray-300">
From "Assign to Copilot" to Full AI-Native Delivery
</p>
</div>
</div>
<div class="text-xl text-gray-400">
⏰ 45-minute technical deep dive
</div>
<div class="text-lg text-gray-500 mt-4">
Barton Mathis
</div>
</div>

---
layout: default
---

# The Easy Button

<div class="grid grid-cols-2 gap-8">
<div>

## The Overwhelming Vision

You've heard about Gen-4 SDLC:
- 🏗️ Agentic repositories
- 🔄 PR workflows
- 🏭 CI trust factories
- 🤖 Full automation

**It sounds transformative... and overwhelming.**

</div>
<div>

## The Simple Start

<div class="p-6 rounded-lg bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-indigo-900/20 border border-cyan-500/30">

### Good News: Start Simple

> **"Just assign the issue to Copilot."**

**The agent will:**
- ✅ Research the problem
- ✅ Plan the solution
- ✅ Implement the code
- ✅ Create PR with tests
- ✅ Respond to feedback

</div>

**This talk:** The incremental journey from first assignment to full SDLC transformation.

</div>
</div>

---
layout: default
---

# The 5-Phase Journey

<div class="text-sm">

| Phase | What Happens | Time Investment | Value Unlocked |
|-------|--------------|-----------------|----------------|
| **1: Issue Research & Triage** | Agents analyze, gather context, check duplicates | 2-3 hours setup | **6x faster triage** |
| **2: Execution Planning** | Agents research codebase, propose plans | 1-2 hours setup | **8x faster planning** |
| **3: Code Generation** | Agents implement, test, create PRs | Already enabled | **10x code velocity** |
| **4: Code Review** | Agents analyze changes, surface risks | 1-2 hours setup | **12x review speed** |
| **5: Full SDLC** | Complete Gen-4 transformation | 3-6 months | **100x throughput** |

</div>

<div class="mt-8 p-6 rounded-lg bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-indigo-900/20 border border-cyan-500/30">

### 💡 The Strategy

**Start with Phases 1-4.** Graduate to Phase 5 when you hit limits.

- Week 1-2: Prove value quickly
- Month 1-2: Scale incrementally  
- Month 3-6: Transform strategically

</div>

---
layout: default
---

# Why This Path Works (1/2)

<div class="grid grid-cols-2 gap-8">
<div>

## ❌ The "All In" Approach

```
Week 1: Read about Gen-4 SDLC
Week 2: Restructure all repos
Week 3: Rewrite CI/CD from scratch
Week 4: Change team processes
Week 5: Deploy agents
Week 6: Everything breaks, rollback
```

<div class="text-red-400 font-bold mt-4">
Result: Transformation failure
</div>

</div>
<div>

## ❌ The "Experiment Forever" Approach

```
Quarter 1: Pilot with one team
Quarter 2: Evaluate, debate
Quarter 3: Try different team
Quarter 4: Still in pilot mode
```

<div class="text-red-400 font-bold mt-4">
Result: Analysis paralysis
</div>

</div>
</div>

---
layout: default
---

# Why This Path Works (2/2)

<div class="grid grid-cols-2 gap-8">
<div>

## ✅ The Journey Approach

```
Week 1: Enable issue triage agents
Week 2: See 6x improvement, expand
Week 3: Add execution planning
Week 4: See 8x improvement, expand
Month 2: Full issue-to-PR automation
Month 3: Identify limits
Month 6: Full SDLC with proof
```

<div class="text-green-400 font-bold mt-4">
Result: Value-driven transformation
</div>

</div>
<div>

<div class="p-6 rounded-lg bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-indigo-900/20 border border-cyan-500/30">

### 💡 The Insight

**Start with:**
- Highest ROI
- Lowest risk  
- Fastest proof

**Build momentum.**

**Scale when constrained.**

</div>

</div>
</div>

---
layout: section
---

# Phase 1: Issue Research & Triage

*The "Easy Button" — Agents analyze and route issues automatically*

---
layout: default
---

# Phase 1: The Problem

<div class="grid grid-cols-2 gap-8">
<div>

## Manual Triage is Expensive

Every issue requires investigation:
- 🔍 Bug or feature request?
- 🔁 Reported before?
- 👥 Which team owns it?
- ⚡ What's the priority?
- 📂 Where in the codebase?

</div>
<div>

<div class="p-6 rounded-lg bg-red-900/20 border border-red-500/30">

### The Cost

**Time cost:** 20-30 minutes per issue

**Opportunity cost:** Developers context-switch away from feature work

**At 50 issues/month:**
- 25 hours of developer time
- ~3 days of interruptions

</div>

</div>
</div>

---
layout: default
---

# Phase 1: The Solution

<div class="grid grid-cols-2 gap-8">
<div>

## Issue Triage Agent

An agent that automatically analyzes every new issue:

### What It Does
1. **Context Gathering** (2 min)
   - Read issue, files, docs
   - Find related issues

2. **Duplicate Detection** (1 min)
   - Check open/closed issues
   - Find similar PRs

3. **Routing & Labeling** (1 min)
   - Suggest labels
   - Route to team

4. **Context Summary** (1 min)
   - Generate summary
   - Suggest approach

</div>
<div class="text-xs">

```yaml
# .github/workflows/1-issue-triage.yml
name: Triage New Issues

on:
  issues:
    types: [opened]

jobs:
  triage:
    runs-on: ubuntu-latest
    permissions:
      issues: write
      contents: read
    steps:
      - name: Analyze with Copilot
        env:
          GH_TOKEN: ${{ secrets.GH_TOKEN }}
        run: |
          gh api POST /repos/${{ github.repository }}/issues/\
            ${{ github.event.issue.number }}/assignees \
            --input - <<< '{
              "assignees": ["copilot-swe-agent[bot]"],
              "agent_assignment": {
                "target_repo": "${{ github.repository }}",
                "base_branch": "main",
                "task": "triage"
              }
            }'
```

</div>
</div>

---
layout: default
---

# Phase 1: Agent Output Example

<div class="grid grid-cols-2 gap-8 text-sm">
<div>

### Duplicate Detection

```
🔍 Duplicate Analysis
━━━━━━━━━━━━━━━━━━
Potential duplicate: #2847 (closed 3 weeks ago)
Similarity: 87%
Resolution: Fixed in PR #2851, released in v2.4.1

Recommendation: Close as duplicate, 
ask reporter to upgrade
```

### Routing & Labeling

```
Agent suggests:
• Labels: bug, authentication, high-priority
• Assignee: @auth-team
• Milestone: v2.5.0
• Estimated effort: 3-5 hours
```

</div>
<div>

### Context Summary

```
📋 Issue Summary for Assignee
━━━━━━━━━━━━━━━━━━━━━━━━━━
Affected files:
- src/auth/oauth-handler.ts (lines 147-203)
- src/middleware/session.ts (lines 89-102)

Root cause hypothesis:
Token refresh logic doesn't handle edge case 
where refresh token expires during active session.

Suggested approach:
• Add exponential backoff retry in oauth-handler.ts
• Update session middleware to detect expired tokens
• Add integration test for token expiration
```

</div>
</div>

---
layout: default
---

# Phase 1: Success Metrics

<div class="text-sm">

| Metric | Before Agents | Target | Why It Matters |
|--------|---------------|--------|----------------|
| **Time to first triage** | 30 min | <5 min | Faster routing |
| **Duplicate issue rate** | 15% | <5% | Less wasted work |
| **Correct initial routing** | 60% | >90% | Fewer bounces |
| **Issues closed as duplicate** | 10% | <3% | Better detection |
| **Context-gathering time** | 45 min | <10 min | Ready to code faster |

</div>

<div class="mt-8 grid grid-cols-2 gap-8">
<div class="p-4 rounded-lg bg-red-900/20 border border-red-500/30">

### Before: Manual (45 min wasted)

Issue #4821: "Login fails on mobile Safari"
- Developer reads → 15 min research
- Digging through code → 20 min
- Finding similar issues → 10 min
- Realizes duplicate of #4203 (fixed 2 weeks ago)

</div>
<div class="p-4 rounded-lg bg-green-900/20 border border-green-500/30">

### After: Agent (5 min total)

- Agent analyzes → 3 min
- Finds duplicate #4203 (88% similar)
- Posts comment with fix/version
- Auto-labels and closes
- Human verifies → 2 min

</div>
</div>

---
layout: default
---

# Phase 1: ROI

<div class="grid grid-cols-2 gap-8">
<div>

## Investment

**Setup time:** 2-3 hours (one-time)

**Ongoing cost:** $0.05-0.15 per issue
- ~$2/hour agent time
- Very low operational cost

</div>
<div>

## Returns

**Time saved:** 25 minutes per issue (average)

**At 50 issues/month:**
- 20 hours saved/month
- 2.5 developer days
- $2,000/month savings ($100/hr rate)

**Annual ROI:** ~24,000% on $100 investment

</div>
</div>

<div class="mt-8 p-6 rounded-lg bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-indigo-900/20 border border-cyan-500/30">

### 💡 Key Insight

This is the **highest ROI, lowest risk** entry point. Perfect first step to prove agent value.

</div>

---
layout: section
---

# Phase 2: Execution Planning

*Agents research the codebase and generate implementation plans*

---
layout: default
---

# Phase 2: The Problem

<div class="grid grid-cols-2 gap-8">
<div>

## Planning is Time-Consuming

After triage, someone needs to:
- 📖 Understand requirements
- 🔍 Research the codebase
- 📂 Identify affected files
- 🎯 Design solution approach
- ⏱️ Estimate effort
- 📋 Create implementation plan

</div>
<div>

<div class="p-6 rounded-lg bg-red-900/20 border border-red-500/30">

### The Cost

**Time cost:** 2-4 hours for non-trivial features

**Risk:** Incomplete research leads to mid-implementation surprises

**Common issues:**
- Missing dependencies discovered late
- Edge cases found during coding
- Estimates off by 2-3x

</div>

</div>
</div>

---
layout: default
---

# Phase 2: The Solution (1/2)

<div class="grid grid-cols-2 gap-8">
<div>

## Planning Agent Workflow

```
Human creates issue
  ↓
Agent researches codebase (10 min)
  ↓
Agent generates execution plan:
  • Affected files: 7 identified
  • Dependencies: checked & clean
  • Approach: detailed steps
  • Effort: 8-12 hours
  • Tests needed: specified
  ↓
Human reviews plan (5 min)
  ↓
Human approves or requests changes
  ↓
Agent begins implementation
```

</div>
<div>

## What Agent Researches

### 1. Requirements (5 min)
- Core requirements
- Acceptance criteria
- Constraints & edge cases

### 2. Codebase (10 min)
- Existing implementations
- Similar features
- Configuration files
- Test patterns

### 3. **Historical Context** ⭐ (5 min)
- Similar past issues
- Associated PRs
- Implementation patterns
- Lessons learned

</div>
</div>

---
layout: default
---

# Phase 2: The Solution (2/2) - Historical Context

<div class="p-6 rounded-lg bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-indigo-900/20 border border-cyan-500/30">

### 🎯 NEW Enhancement: Historical Issue Search

Agent searches for similar past issues and their PRs to learn from history:

</div>

<div class="grid grid-cols-2 gap-8 mt-6 text-sm">
<div>

### What It Finds

- ✅ Closed issues from last 6 months with similar keywords
- ✅ PRs that resolved those issues
- ✅ Implementation patterns from successful resolutions
- ✅ Effort estimates and actual time spent
- ✅ Common pitfalls and edge cases
- ✅ Lessons learned from past work

</div>
<div>

### Example Output

```
Historical Context:
━━━━━━━━━━━━━━━━━━
Issue #2847: "Add Google OAuth"
→ PR #2851: 6 hours, 8 files
→ Lesson: Token refresh edge case

Issue #3104: "Add GitHub OAuth"  
→ PR #3109: 5 hours, 7 files
→ Lesson: Multi-tenant config needed
```

</div>
</div>

<div class="mt-6 p-4 rounded-lg bg-blue-900/20 border border-blue-500/30">

### 💡 Impact

Plans with historical context are **±20% accurate** vs **±50% without**.  
**60% fewer mid-implementation surprises.**

</div>

---
layout: default
---

# Phase 2: Generated Plan Example (1/2)

<div class="text-xs">

```markdown
📋 EXECUTION PLAN: Add Microsoft OAuth Support
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**Historical Context:**
Based on analysis of similar past implementations:
- Issue #2847 "Add Google OAuth" → PR #2851 (6 hours, 8 files)
- Issue #3104 "Add GitHub OAuth" → PR #3109 (5 hours, 7 files)

Key learnings applied to this plan:
✓ Token refresh edge cases require explicit testing (from #2847)
✓ Multi-tenant configuration needed for enterprise (from #3104)
✓ Rate limiting should be considered from start (from #3104)

**Affected Files:**
1. src/auth/providers/microsoft-oauth.ts (new file)
   - Extends OAuthHandler base class
   - Implements MS-specific token exchange
   
2. src/auth/oauth-handler.ts (modify)
   - Register Microsoft provider
   - Add to provider factory
   
3. src/config/auth-config.ts (modify)
   - Add MS_CLIENT_ID, MS_CLIENT_SECRET, MS_TENANT_ID
```

</div>

---
layout: default
---

# Phase 2: Generated Plan Example (2/2)

<div class="text-xs">

```markdown
**Dependencies:**
- Add: @azure/msal-node@^2.6.0 (security: clean, license: MIT)

**Implementation Steps:**
1. Add dependency and run security scan
2. Create MicrosoftOAuthProvider class
3. Implement token exchange logic
4. Update configuration files
5. Register provider in factory
6. Write integration tests (including historical edge cases)
7. Update documentation

**Estimated Effort:** 6-8 hours
(Based on historical data: Google OAuth took 6h, GitHub OAuth took 5h)

**Risk Level:** Medium (new OAuth provider, tested pattern)
**Rollback Plan:** Feature flag MS_OAUTH_ENABLED
```

</div>

<div class="mt-6 p-4 rounded-lg bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-indigo-900/20 border border-cyan-500/30">

### 💡 Notice

Historical context informs estimates, risks, and implementation approach.

</div>

---
layout: default
---

# Phase 2: The 4-Workflow Architecture

<div class="text-xs">

Instead of monolithic workflow, use **4 specialized workflows** coordinated via labels:

<div class="grid grid-cols-2 gap-6 mt-4">
<div>

### Workflow 1: Issue Triage
- **Trigger:** `issues.opened`
- Check duplicates, gather context
- Route to team
- **Adds label:** `status:triaged`

### Workflow 2: Execution Planning ⭐
- **Trigger:** `issues.labeled` (status:triaged)
- **NEW:** Search historical similar issues
- **NEW:** View associated PRs
- Research codebase, generate plan
- **Adds label:** `status:planned`

</div>
<div>

### Workflow 3: Code Execution
- **Trigger:** `issue_comment` (/approve-plan)
- Verify status:planned label
- Implement approved plan
- Create PR with evidence
- **Adds label:** `status:in-review`

### Workflow 4: PR Review
- **Trigger:** `pull_request.opened`
- Security & test analysis
- Post comprehensive review
- **Adds label:** `status:reviewed`

</div>
</div>

</div>

<div class="mt-6 p-4 rounded-lg bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-indigo-900/20 border border-cyan-500/30 text-sm">

**Label-Based State Machine:** `status:triaged` → `status:planned` → `status:in-review` → `status:reviewed`

</div>

---
layout: default
---

# Phase 2: GitHub Copilot CLI with -p Flag

<div class="p-6 rounded-lg bg-yellow-900/20 border border-yellow-500/30 mb-6">

### ⚠️ Critical: Use Programmatic Mode

All workflows use the `-p` flag for **non-interactive** execution in CI/CD.

</div>

<div class="text-xs">

```bash
# Example from Workflow 2 (Planning)
copilot -p "Generate execution plan for this issue:
1. Search for similar historical issues from last 6 months
2. For each similar issue, retrieve the associated PR
3. Analyze implementation patterns and lessons learned
4. Research current codebase for affected files
5. Generate detailed implementation plan with historical context
..." \
  --allow-tool 'shell(gh)' \
  --allow-tool 'shell(git)' \
  --allow-tool 'shell(find)' \
  --allow-tool 'shell(grep)' > plan_result.txt
```

**Key points:**
- ✅ **`-p` flag is REQUIRED** for automated workflows
- ✅ **`--allow-tool`** grants permission for specific shell commands
- ✅ **Output redirection** captures response for parsing
- ✅ **`COPILOT_GITHUB_TOKEN`** passed as environment variable

</div>

---
layout: default
---

# Phase 2: Success Metrics

<div class="text-sm">

| Metric | Before Agents | Target | Why It Matters |
|--------|---------------|--------|----------------|
| **Time to implementation plan** | 4 hours | <30 min | Developers start faster |
| **Plan accuracy (estimate vs actual)** | ±50% | ±20% | Better predictability |
| **Missing requirements found late** | 25% | <10% | Less rework |
| **PRs blocked by unclear scope** | 15% | <5% | Smoother reviews |
| **Historical context utilization** | 0% | >80% | Learn from past |

</div>

<div class="mt-8 p-6 rounded-lg bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-indigo-900/20 border border-cyan-500/30">

### 💡 Impact of Historical Context

Plans that reference similar past issues show:
- **60% better estimate accuracy**
- **40% fewer mid-implementation surprises**
- **Compound learning over time**

</div>

---
layout: default
---

# Phase 2: ROI

<div class="grid grid-cols-2 gap-8">
<div>

## Investment

**Setup time:** 2-3 hours
- 4 workflows + secrets config

**Ongoing cost:** $0.40-0.60 per plan
- ~$3/hour agent time
- 12-15 min with historical search

</div>
<div>

## Returns

**Time saved:** 3.5 hours per feature (average)

**At 20 features/month:**
- 70 hours saved/month (8.75 dev days)
- $7,000/month savings ($100/hr)
- **Annual savings:** $84,000

**Plus:** Historical learning compounds over time

</div>
</div>

---
layout: section
---

# Phase 3: Code Generation & Execution

*Agents implement the plan and create PRs*

---
layout: default
---

# Phase 3: The Good News

<div class="grid grid-cols-2 gap-8">
<div>

## You Already Have This

When you assign issues to `copilot-swe-agent[bot]`, Copilot can already:

- ✅ Implement code based on approved plan
- ✅ Write unit and integration tests
- ✅ Run tests and iterate on failures
- ✅ Create PRs with evidence bundles

**This is the core capability of GitHub Copilot's agent features.**

</div>
<div>

## Agent Workflow

```
Agent reads approved plan
  ↓
Agent writes code for affected files
  ↓
Agent runs tests locally
  ↓
Agent fixes failures and iterates
  ↓
Agent reaches "all tests passing"
  ↓
Agent creates PR with:
  • Descriptive title from issue
  • Full context from plan
  • Summary of changes
  • Test results
  • Security scan results
```

</div>
</div>

---
layout: default
---

# Phase 3: PR Description Example

<div class="text-xs">

```markdown
## Closes #4523: Add Microsoft OAuth Support

### Implementation Summary
Added Microsoft OAuth provider following our existing OAuth pattern.

**Changes:**
- ✅ Created `MicrosoftOAuthProvider` extending `OAuthHandler`
- ✅ Updated auth configuration for MS credentials
- ✅ Added integration tests (100% coverage on new code)
- ✅ Updated documentation

### Test Results
✓ 847 tests passing
✓ Coverage: 94% (unchanged)
✓ Security scan: Clean (0 vulnerabilities)
✓ Performance: No regressions detected

### Evidence Bundle
- [Test Results](https://github.com/.../actions/runs/123456)
- [Security Scan](https://github.com/.../security/code-scanning/1)
- [Performance Baseline](https://github.com/.../actions/runs/123457)

### How to Test
1. Set `MS_CLIENT_ID` and `MS_CLIENT_SECRET` in `.env`
2. Navigate to `/login`
3. Click "Sign in with Microsoft"
4. Verify successful authentication
```

</div>

---
layout: default
---

# Phase 3: Configuration

<div class="grid grid-cols-2 gap-8">
<div>

## Enable Auto-PR Creation

Add to repository settings → GitHub Copilot:

```
✓ Allow Copilot to create pull requests
✓ Require test passage before PR creation
✓ Require security scan before PR
✓ Auto-request review from code owners
```

</div>
<div>

## Set Branch Protection

Ensure your main branch has:

```
✓ Require pull request reviews
  (1 approver minimum)
✓ Require status checks to pass
  (tests, security scan)
✓ Require conversation resolution
  before merging
```

</div>
</div>

---
layout: default
---

# Phase 3: Success Metrics & ROI

<div class="text-sm mb-8">

| Metric | Before Agents | Target | Why It Matters |
|--------|---------------|--------|----------------|
| **Implementation time** | 8-12 hours | 1-2 hours | 6-10x faster |
| **Time to first PR** | 1-2 days | 2-4 hours | Faster feedback |
| **Initial test pass rate** | 70% | >90% | Higher quality |
| **PRs requiring rework** | 30% | <15% | Less wasted effort |

</div>

<div class="grid grid-cols-2 gap-8">
<div class="p-6 rounded-lg bg-green-900/20 border border-green-500/30">

### Investment

- **Setup:** 0 hours (included with Copilot)
- **Cost:** $3-5 per implementation

</div>
<div class="p-6 rounded-lg bg-green-900/20 border border-green-500/30">

### Returns

- **Time saved:** 7-10 hours per feature
- **At 20 features/month:** 140-200 hours saved
- **Monthly savings:** $14,000-20,000

</div>
</div>

---
layout: section
---

# Phase 4: Code Review Agent

*Agents analyze PRs and surface risks before human review*

---
layout: default
---

# Phase 4: The Problem

<div class="grid grid-cols-2 gap-8">
<div>

## Review Becomes the Bottleneck

Even with agent-generated code, humans must review PRs. But:

- **Volume:** Agents create 10-15x more PRs
- **Scale:** Each PR may touch 500-2000 lines
- **Speed:** Agents create PRs faster than humans review

</div>
<div>

<div class="p-6 rounded-lg bg-red-900/20 border border-red-500/30">

### The Cost

**Time cost:** 2-4 hours per PR for thorough review

**Bottleneck:** Code review becomes the constraint on velocity

**Common issues:**
- Review queue grows to 50+ PRs
- 10+ days to get review
- Developers overwhelmed

</div>

</div>
</div>

---
layout: default
---

# Phase 4: The Solution

<div class="grid grid-cols-2 gap-8">
<div>

## Code Review Agent Workflow

```
Agent creates PR (Phase 3)
  ↓
Code Review Agent analyzes (5 min)
  ↓
Agent posts review with:
  • Security risks identified
  • Logic errors or edge cases
  • Performance implications
  • Compliance violations
  • Test coverage gaps
  ↓
Human reviews analysis (10-15 min)
  ↓
Human approves or requests changes
  (outcome-based, not line-by-line)
```

</div>
<div>

## What Agent Checks

### 1. Security (2 min)
- SQL injection, XSS risks
- Authentication bypasses
- Secrets in code
- Unsafe dependencies

### 2. Logic & Edge Cases (2 min)
- Error handling
- Race conditions
- Resource leaks

### 3. Performance (1 min)
- Algorithmic complexity
- Query efficiency
- Caching opportunities

### 4. Test Coverage (1 min)
- New code coverage
- Critical paths tested

</div>
</div>

---
layout: default
---

# Phase 4: Review Output Example (1/2)

<div class="text-xs">

<div class="grid grid-cols-2 gap-6">
<div>

```
🔒 Security Review
━━━━━━━━━━━━━━━━
✅ No SQL injection risks
✅ All user inputs sanitized
✅ No secrets detected
⚠️ Medium: New dependency @azure/msal-node
   → Security scan: Clean
   → License: MIT (compatible)
   → Recommendation: Approve, monitor for CVEs
```

```
🧠 Logic Review
━━━━━━━━━━━━━━━
✅ Error handling complete
✅ Edge cases covered
⚠️ Low: Token refresh during logout
   → File: src/auth/microsoft-oauth.ts:147
   → Issue: Race condition if user logs out 
            during token refresh
   → Recommendation: Add logout flag check
```

</div>
<div>

```
⚡ Performance Review
━━━━━━━━━━━━━━━━━━
✅ No algorithmic concerns
✅ Queries are indexed
✅ No obvious memory leaks
💡 Suggestion: Cache MS tenant discovery
   → Current: Fetches on every login
   → Proposed: Cache for 24 hours
   → Impact: -40% auth latency
```

```
🧪 Test Coverage Review
━━━━━━━━━━━━━━━━━━━━━
✅ 100% coverage on new code
✅ Integration tests present
✅ Edge cases tested
✅ No flaky tests detected
```

</div>
</div>

</div>

---
layout: default
---

# Phase 4: Real-World Impact

<div class="grid grid-cols-2 gap-8">
<div class="p-6 rounded-lg bg-red-900/20 border border-red-500/30">

### Before: Manual Review

**PR #2481: "Add MS OAuth"**

Human reviewer spends 3 hours:
- 45 min understanding changes
- 60 min checking security
- 30 min verifying edge cases
- 45 min checking tests

**Result:** Misses race condition in token refresh logic. Bug found in production 2 weeks later.

</div>
<div class="p-6 rounded-lg bg-green-900/20 border border-green-500/30">

### After: Agent-Assisted

**PR #2481: "Add MS OAuth"**

- Agent reviews in 5 minutes
- Posts detailed analysis
- Human reads analysis (15 min)
- Human spots race condition from agent warning
- Fixed before merge

**Result:** 20 minutes total (vs 3 hours + production incident)

</div>
</div>

---
layout: default
---

# Phase 4: Success Metrics & ROI

<div class="text-sm mb-8">

| Metric | Before Agents | Target | Why It Matters |
|--------|---------------|--------|----------------|
| **Time per PR review** | 2-4 hours | 15-20 min | 6-10x faster |
| **Critical bugs caught** | 60% | >95% | Higher quality |
| **Security issues in production** | 5/quarter | 0/quarter | Risk reduction |
| **Review bottleneck** | Yes | No | Unblocked velocity |

</div>

<div class="grid grid-cols-2 gap-8">
<div class="p-6 rounded-lg bg-green-900/20 border border-green-500/30">

### Investment

- **Setup:** 1-2 hours (one-time)
- **Cost:** $0.10-0.20 per PR review

</div>
<div class="p-6 rounded-lg bg-green-900/20 border border-green-500/30">

### Returns

- **Time saved:** 2-3 hours per PR
- **At 40 PRs/month:** 80-120 hours saved
- **Monthly savings:** $8,000-12,000
- **Plus:** Reduced production incidents

</div>
</div>

---
layout: section
---

# Phase 5: When to Upgrade to Full SDLC

*Signs you've outgrown quick wins and need Gen-4 transformation*

---
layout: default
---

# Phase 5: The Inflection Point (1/2)

Phases 1-4 work brilliantly—until they don't. Here are the signals:

<div class="grid grid-cols-2 gap-6 text-sm">
<div>

### Signal 1: Repository Chaos
```
❌ Symptom: Agents touching 3-5 repos 
            per feature
❌ Impact: Coordination overhead negates 
           velocity gains
✅ Solution: Monorepo consolidation
```

### Signal 2: CI Bottleneck
```
❌ Symptom: CI queue time > 60 minutes
❌ Impact: Agents wait, humans wait, 
           nobody ships
✅ Solution: Trust factory CI
```

</div>
<div>

### Signal 3: Review Overwhelm
```
❌ Symptom: 50+ PRs open, 
            10+ days to review
❌ Impact: Agents productive, 
           humans drowning
✅ Solution: Outcome-based PR workflows
```

### Signal 4: Test Flakiness
```
❌ Symptom: >10% flaky test rate
❌ Impact: Agents blocked on false failures
✅ Solution: Hermetic builds, 
            deterministic signal
```

</div>
</div>

---
layout: default
---

# Phase 5: The Inflection Point (2/2)

<div class="grid grid-cols-2 gap-8">
<div>

### Signal 5: Manual Governance

```
❌ Symptom: Compliance requires 
            human review
❌ Impact: Throughput limited by 
           manual gates
✅ Solution: Automated evidence bundles
```

</div>
<div>

<div class="p-6 rounded-lg bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-indigo-900/20 border border-cyan-500/30">

### Graduation Criteria

You're ready for full Gen-4 when:

- ✅ Agent velocity: >10 PRs/week
- ✅ Review queue: >5 days
- ✅ Multi-repo friction: >30% PRs touch 2+ repos
- ✅ CI capacity: Queue time >30 min peak
- ✅ Executive buy-in: Leadership committed

</div>

</div>
</div>

---
layout: default
---

# Phase 5: The Upgrade Path

<div class="text-sm">

<div class="grid grid-cols-2 gap-8">
<div>

### Phase 1-4: Quick Wins

- ✅ Issue → PR automation
- ✅ Agent-generated code
- ✅ Code review assistance
- ⚠️ Manual coordination
- ⚠️ Traditional CI (slow)
- ⚠️ Human-scale processes

**Throughput:** 5-10 features/week

</div>
<div>

### Phase 5: Full SDLC

- ✅ Monorepo with module boundaries
- ✅ Feature-scale PRs (500-2000 lines)
- ✅ Intent-based reviews
- ✅ Atomic merges
- ✅ CI as trust factory (<10 min)
- ✅ Automated compliance gates

**Throughput:** 10-15 features/day

</div>
</div>

</div>

<div class="mt-8 p-6 rounded-lg bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-indigo-900/20 border border-cyan-500/30">

### 💡 Migration Timeline

**Month 1:** Assessment & Planning  
**Month 2:** Repository Consolidation  
**Month 3:** PR Workflow Evolution  
**Month 4-6:** CI Trust Factory

</div>

---
layout: default
---

# The Complete Timeline

<div class="text-sm">

| Phase | Timeframe | Setup | Value | Risk |
|-------|-----------|-------|-------|------|
| **Phase 1: Triage** | Week 1-2 | 2-3 hours | 6x faster triage | None |
| **Phase 2: Planning** | Week 3-4 | 1-2 hours | 8x faster planning | Low |
| **Phase 3: Code Gen** | Week 5-8 | 0 hours | 10x code velocity | Medium |
| **Phase 4: Review** | Week 9-12 | 1-2 hours | 12x review speed | Low |
| **Phase 5: Full SDLC** | Month 4-6 | 3-6 months | 100x throughput | High |

</div>

<div class="mt-8 p-6 rounded-lg bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-indigo-900/20 border border-cyan-500/30">

### Strategy

- **Weeks 1-12:** Prove value quickly with Phases 1-4
- **Month 4:** Identify limits and constraints
- **Month 4-6:** Graduate to Phase 5 when justified

</div>

---
layout: default
---

# Expected ROI by Phase

<div class="text-sm">

For a 50-person engineering team:

| Phase | Monthly Savings | Annual Savings | Cumulative Annual |
|-------|-----------------|----------------|-------------------|
| **Phase 1: Triage** | $2,000 | $24,000 | $24,000 |
| **Phase 2: Planning** | $7,000 | $84,000 | $108,000 |
| **Phase 3: Code Gen** | $17,000 | $204,000 | $312,000 |
| **Phase 4: Review** | $10,000 | $120,000 | $432,000 |
| **Phase 5: Full SDLC** | $150,000 | $1,800,000 | $2,232,000 |

</div>

<div class="mt-8 p-6 rounded-lg bg-yellow-900/20 border border-yellow-500/30">

### ⚠️ Phase 5 Investment

Phase 5 requires significant upfront investment ($800K-1.6M) with 12-18 month payback.

**Start with Phases 1-4 to prove value first.**

</div>

---
layout: default
---

# Common Pitfalls

<div class="grid grid-cols-2 gap-8">
<div>

### ❌ Don't Do This

**1. Skipping to Phase 5**
- "Let's go straight to full SDLC"
- High risk, no proof of value

**2. Staying in Pilot Mode**
- "Let's pilot triage for 6 months"
- Analysis paralysis, no momentum

**3. Ignoring the Limits**
- "Scale to 100 PRs/day without CI upgrade"
- Agents blocked, velocity lost

**4. Manual Review at Machine Speed**
- "Line-by-line review every agent PR"
- Bottleneck returns, gains lost

</div>
<div>

### ✅ Do This Instead

**1. Start Small, Prove Value**
- Deploy Phases 1-4 first
- Build momentum and confidence

**2. Deploy Quickly**
- 2-week validation, then all repos
- Fast iteration and learning

**3. Graduate When Constrained**
- Recognize the signals
- Upgrade infrastructure when needed

**4. Trust and Validate**
- Trust code review agent
- Validate outcomes, not every line

</div>
</div>

---
layout: default
---

# Key Takeaways

<div class="grid grid-cols-2 gap-8">
<div>

### The Journey Approach

1. **Start simple:** Just assign to Copilot
2. **Prove value:** Phase 1 = 6x improvement
3. **Build momentum:** Add phases incrementally
4. **Scale strategically:** Upgrade when constrained
5. **Transform with proof:** Phase 5 when justified

</div>
<div>

### Critical Success Factors

- ✅ Use the **4-workflow architecture**
- ✅ Enable **historical context search**
- ✅ Use **`copilot -p`** flag in workflows
- ✅ Deploy to **all repos after validation**
- ✅ Recognize **graduation signals**
- ✅ Trust agents, **validate outcomes**

</div>
</div>

<div class="mt-8 p-6 rounded-lg bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-indigo-900/20 border border-cyan-500/30">

### 💡 The Core Insight

**You don't need to start with Gen-4 SDLC. You just need to start.**

From "assign to copilot" to full agentic delivery—one phase at a time.

</div>

---
layout: default
---

# Resources

<div class="grid grid-cols-2 gap-8 text-sm">
<div>

### Getting Started

- **[GitHub Copilot Documentation](https://docs.github.com/en/copilot)**
- **[Copilot for Pull Requests](https://github.com/features/copilot/pull-requests)**
- **Example workflows in `.github/workflows/`**

### When Ready for Phase 5

- **[Agentic SDLC (Complete Guide)](../agentic-sdlc/)**
  - Full Gen-4 transformation
- **[Decision Guide](../DECISION-GUIDE.md)**
  - Find the right talk for your needs

</div>
<div>

### Related Topics

- **[Agent Teams](../agent-teams/)** — Specialized agent patterns
- **[Copilot Hooks](../copilot-hooks/)** — Governance and control
- **[Enterprise Patterns](../enterprise-patterns/)** — Organization-wide adoption

### Executive Context

- **[Agentic Delivery](../../exec-talks/agentic-delivery/)** — Strategic framing
- **[Agentic Economics](../../exec-talks/agentic-economics/)** — ROI calculations
- **[Agentic Labor](../../exec-talks/agentic-labor/)** — Workforce implications

</div>
</div>

---
layout: end
---

# Thank You

<div class="flex flex-col items-center justify-center h-full">
<div class="text-center">
<h2 class="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent mb-8">
Ready to Start Your Agentic Journey?
</h2>
<div class="text-xl text-gray-300 mb-8">
Begin with Phase 1: Just assign it to Copilot
</div>
<div class="text-lg text-gray-400">
From "assign to copilot" to full agentic delivery—one phase at a time.
</div>
</div>
</div>
