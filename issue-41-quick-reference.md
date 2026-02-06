# Issue 41 Sub-Issues - Quick Reference

This document provides a concise summary for quickly creating the 14 sub-issues.

## Overview

Break issue #41 into 14 sub-issues:
- 13 individual slide deck generation tasks
- 1 final verification task

## Sub-Issue List

| # | Title | Labels | Priority | Dependencies |
|---|-------|--------|----------|--------------|
| 1 | Generate slides for copilot-cli | slide-generation, tech-talk | HIGH | None |
| 2 | Generate slides for copilot-chat | slide-generation, tech-talk | NORMAL | #1 |
| 3 | Generate slides for copilot-chat-internals | slide-generation, tech-talk | NORMAL | #2 |
| 4 | Generate slides for copilot-hooks | slide-generation, tech-talk | NORMAL | #3 |
| 5 | Generate slides for copilot-memory | slide-generation, tech-talk | NORMAL | #4 |
| 6 | Generate slides for copilot-sdk | slide-generation, tech-talk | NORMAL | #5 |
| 7 | Generate slides for copilot-web | slide-generation, tech-talk | NORMAL | #6 |
| 8 | Generate slides for mcp-apps | slide-generation, tech-talk | NORMAL | #7 |
| 9 | Generate slides for enterprise-patterns | slide-generation, tech-talk | NORMAL | #8 |
| 10 | Generate slides for multi-step-tasks | slide-generation, tech-talk | NORMAL | #9 |
| 11 | Generate slides for parallel-execution | slide-generation, tech-talk | NORMAL | #10 |
| 12 | Generate slides for terminal-sandboxing | slide-generation, tech-talk | NORMAL | #11 |
| 13 | Generate slides for agentic-sdlc | slide-generation, tech-talk | NORMAL | #12 |
| 14 | Final verification for all 13 regenerated slide decks | verification, slide-generation, tech-talk | NORMAL | #1-13 |

## Common Pattern for Issues 1-13

Each deck generation issue follows this template:

**Parent Issue:** #41

**Task:** Use the `slide-manager` agent to generate slides from source README.

**Command:** `slide-manager agent: "Generate slides for tech-talks/{deck-name}"`

**Details:**
- Source: `tech-talks/{deck-name}/README.md`
- Output: `slides/tech-talks/{deck-name}.md`
- Position in sequence: {N} of 13

**Process:**
1. Invoke slide-manager agent
2. Agent generates 15-20 slides, updates index, runs verification
3. Record verification results
4. Do NOT auto-fix issues

**Success Criteria:**
- [ ] Slides generated
- [ ] Index updated
- [ ] Verification completed
- [ ] Results documented

## Issue 14: Final Verification

**Task:** Comprehensive verification and quality checks after all 13 decks are complete.

**Steps:**
1. Review all verification reports
2. Run final batch lint check
3. Spot-check 2-3 decks visually
4. Address critical issues if found
5. Document final results

**Success Criteria:**
- [ ] All verification reports reviewed
- [ ] Batch lint check passed
- [ ] Spot-checks completed
- [ ] Critical issues resolved
- [ ] Results documented
- [ ] Parent issue updated

## Automation Hint

For programmatic creation, see the full GitHub CLI script in `issue-41-breakdown.md` which includes complete issue bodies ready for batch creation.

## Notes

- Sequential processing avoids merge conflicts
- copilot-cli is first (highest priority - currently empty)
- No auto-fixing during generation phase
- Final verification is separate quality gate
