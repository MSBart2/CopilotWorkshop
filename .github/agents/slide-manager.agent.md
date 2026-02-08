---
name: Slide Manager
description: Generate and verify Slidev slides from README files. Creates slides, runs validation, and reports results. No auto-fixing - fast feedback for iteration.
tools: ["read", "edit/createFile", "edit/editFiles", "bash"]
model: Claude Sonnet 4.5
argument-hint: Provide content path (e.g., workshop/03-custom-prompts)
---

# Slide Manager Agent (Condensed)

**📖 Full Documentation:** See `/docs/agents-slide-manager.agent.md`

Orchestrates slide generation and verification workflow.

## Workflow

0. **Check Status** - If the target slide already exists, read its frontmatter. If `status: archived`, **STOP** and report: "This slide deck is archived and cannot be regenerated or modified." Skip to reporting.
1. **Generate** - Call slide-generator agent with content path
2. **Verify** - Run slide-verifier in smart mode (lint first, Playwright only if issues)
3. **Report** - Summary of pass/fail with issue details. Include `status` and `updated` date in the report.

## Usage

```
Use slide-manager agent to create slides for workshop/03-custom-prompts
```

## Features

- **Fast** - Smart verification (2-6 min vs 15+ min full Playwright)
- **Actionable** - Reports specific issues with slide numbers
- **No auto-fix** - Issues reported for manual resolution or targeted @slide-fixer

## Output

```
✅ Generation complete: slides/workshop/03-custom-prompts.md
📊 Verification: PASSED (15 slides, 0 issues)
```

or

```
❌ Verification: FAILED
- Slide 5: Too many bullets (7, max 5)
- Slide 12: Code block overflow (23 lines, max 15)
```

See full docs for complete options and troubleshooting.
