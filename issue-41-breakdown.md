# Issue 41 Sub-Issue Breakdown

Parent Issue: #41 - Regenerate slides for 13 active tech-talk decks

This document contains the complete breakdown of issue 41 into 14 sub-issues (13 deck generation tasks + 1 final verification task).

## How to Create These Issues

You can create these issues using the GitHub CLI or web interface. Each sub-issue below includes:
- Title
- Body (description)
- Labels (suggested)
- Parent reference (#41)

### Using GitHub CLI (batch creation script)

```bash
# Navigate to the repository
cd /path/to/CopilotTraining

# Create each issue (run these commands sequentially)
# Issue 1: copilot-cli
gh issue create --title "Generate slides for copilot-cli" --body "$(cat <<'EOF'
**Parent Issue:** #41

Generate Slidev slides for the copilot-cli tech-talk.

## Task
Use the `slide-manager` agent to generate slides from source README.

**Command:** `slide-manager agent: "Generate slides for tech-talks/copilot-cli"`

## Details
- **Source:** `tech-talks/copilot-cli/README.md`
- **Output:** `slides/tech-talks/copilot-cli.md`
- **Priority:** HIGH (currently empty deck)
- **Position in sequence:** 1 of 13

## Process
1. Invoke slide-manager agent with the command above
2. Agent will:
   - Read source README
   - Generate 15-20 Slidev slides
   - Update `slides/index-custom.html` if needed
   - Run smart verification (lint first, Playwright only if needed)
   - Report pass/fail with issue details
3. Record verification results (pass/fail, any issues found)
4. Do NOT auto-fix issues at this stage

## Success Criteria
- [ ] Slides generated at `slides/tech-talks/copilot-cli.md`
- [ ] Index updated in `slides/index-custom.html`
- [ ] Verification run completed
- [ ] Results documented (pass/fail, issues if any)

## Notes
- This is the highest priority deck (currently empty)
- Sequential processing to avoid merge conflicts on index file
- Issues are reported but not auto-fixed during generation phase
EOF
)" --label "slide-generation,tech-talk"

# Issue 2: copilot-chat
gh issue create --title "Generate slides for copilot-chat" --body "$(cat <<'EOF'
**Parent Issue:** #41

Generate Slidev slides for the copilot-chat tech-talk.

## Task
Use the `slide-manager` agent to generate slides from source README.

**Command:** `slide-manager agent: "Generate slides for tech-talks/copilot-chat"`

## Details
- **Source:** `tech-talks/copilot-chat/README.md`
- **Output:** `slides/tech-talks/copilot-chat.md`
- **Position in sequence:** 2 of 13

## Process
1. Invoke slide-manager agent with the command above
2. Agent will:
   - Read source README
   - Generate 15-20 Slidev slides
   - Update `slides/index-custom.html` if needed
   - Run smart verification (lint first, Playwright only if needed)
   - Report pass/fail with issue details
3. Record verification results (pass/fail, any issues found)
4. Do NOT auto-fix issues at this stage

## Success Criteria
- [ ] Slides generated at `slides/tech-talks/copilot-chat.md`
- [ ] Index updated in `slides/index-custom.html`
- [ ] Verification run completed
- [ ] Results documented (pass/fail, issues if any)

## Dependencies
- Completes after #[ISSUE-1] (copilot-cli)
EOF
)" --label "slide-generation,tech-talk"

# Issue 3: copilot-chat-internals
gh issue create --title "Generate slides for copilot-chat-internals" --body "$(cat <<'EOF'
**Parent Issue:** #41

Generate Slidev slides for the copilot-chat-internals tech-talk.

## Task
Use the `slide-manager` agent to generate slides from source README.

**Command:** `slide-manager agent: "Generate slides for tech-talks/copilot-chat-internals"`

## Details
- **Source:** `tech-talks/copilot-chat-internals/README.md`
- **Output:** `slides/tech-talks/copilot-chat-internals.md`
- **Position in sequence:** 3 of 13

## Process
1. Invoke slide-manager agent with the command above
2. Agent will:
   - Read source README
   - Generate 15-20 Slidev slides
   - Update `slides/index-custom.html` if needed
   - Run smart verification (lint first, Playwright only if needed)
   - Report pass/fail with issue details
3. Record verification results (pass/fail, any issues found)
4. Do NOT auto-fix issues at this stage

## Success Criteria
- [ ] Slides generated at `slides/tech-talks/copilot-chat-internals.md`
- [ ] Index updated in `slides/index-custom.html`
- [ ] Verification run completed
- [ ] Results documented (pass/fail, issues if any)

## Dependencies
- Completes after #[ISSUE-2] (copilot-chat)
EOF
)" --label "slide-generation,tech-talk"

# Issue 4: copilot-hooks
gh issue create --title "Generate slides for copilot-hooks" --body "$(cat <<'EOF'
**Parent Issue:** #41

Generate Slidev slides for the copilot-hooks tech-talk.

## Task
Use the `slide-manager` agent to generate slides from source README.

**Command:** `slide-manager agent: "Generate slides for tech-talks/copilot-hooks"`

## Details
- **Source:** `tech-talks/copilot-hooks/README.md`
- **Output:** `slides/tech-talks/copilot-hooks.md`
- **Position in sequence:** 4 of 13

## Process
1. Invoke slide-manager agent with the command above
2. Agent will:
   - Read source README
   - Generate 15-20 Slidev slides
   - Update `slides/index-custom.html` if needed
   - Run smart verification (lint first, Playwright only if needed)
   - Report pass/fail with issue details
3. Record verification results (pass/fail, any issues found)
4. Do NOT auto-fix issues at this stage

## Success Criteria
- [ ] Slides generated at `slides/tech-talks/copilot-hooks.md`
- [ ] Index updated in `slides/index-custom.html`
- [ ] Verification run completed
- [ ] Results documented (pass/fail, issues if any)

## Dependencies
- Completes after #[ISSUE-3] (copilot-chat-internals)
EOF
)" --label "slide-generation,tech-talk"

# Issue 5: copilot-memory
gh issue create --title "Generate slides for copilot-memory" --body "$(cat <<'EOF'
**Parent Issue:** #41

Generate Slidev slides for the copilot-memory tech-talk.

## Task
Use the `slide-manager` agent to generate slides from source README.

**Command:** `slide-manager agent: "Generate slides for tech-talks/copilot-memory"`

## Details
- **Source:** `tech-talks/copilot-memory/README.md`
- **Output:** `slides/tech-talks/copilot-memory.md`
- **Position in sequence:** 5 of 13

## Process
1. Invoke slide-manager agent with the command above
2. Agent will:
   - Read source README
   - Generate 15-20 Slidev slides
   - Update `slides/index-custom.html` if needed
   - Run smart verification (lint first, Playwright only if needed)
   - Report pass/fail with issue details
3. Record verification results (pass/fail, any issues found)
4. Do NOT auto-fix issues at this stage

## Success Criteria
- [ ] Slides generated at `slides/tech-talks/copilot-memory.md`
- [ ] Index updated in `slides/index-custom.html`
- [ ] Verification run completed
- [ ] Results documented (pass/fail, issues if any)

## Dependencies
- Completes after #[ISSUE-4] (copilot-hooks)
EOF
)" --label "slide-generation,tech-talk"

# Issue 6: copilot-sdk
gh issue create --title "Generate slides for copilot-sdk" --body "$(cat <<'EOF'
**Parent Issue:** #41

Generate Slidev slides for the copilot-sdk tech-talk.

## Task
Use the `slide-manager` agent to generate slides from source README.

**Command:** `slide-manager agent: "Generate slides for tech-talks/copilot-sdk"`

## Details
- **Source:** `tech-talks/copilot-sdk/README.md`
- **Output:** `slides/tech-talks/copilot-sdk.md`
- **Position in sequence:** 6 of 13

## Process
1. Invoke slide-manager agent with the command above
2. Agent will:
   - Read source README
   - Generate 15-20 Slidev slides
   - Update `slides/index-custom.html` if needed
   - Run smart verification (lint first, Playwright only if needed)
   - Report pass/fail with issue details
3. Record verification results (pass/fail, any issues found)
4. Do NOT auto-fix issues at this stage

## Success Criteria
- [ ] Slides generated at `slides/tech-talks/copilot-sdk.md`
- [ ] Index updated in `slides/index-custom.html`
- [ ] Verification run completed
- [ ] Results documented (pass/fail, issues if any)

## Dependencies
- Completes after #[ISSUE-5] (copilot-memory)
EOF
)" --label "slide-generation,tech-talk"

# Issue 7: copilot-web
gh issue create --title "Generate slides for copilot-web" --body "$(cat <<'EOF'
**Parent Issue:** #41

Generate Slidev slides for the copilot-web tech-talk.

## Task
Use the `slide-manager` agent to generate slides from source README.

**Command:** `slide-manager agent: "Generate slides for tech-talks/copilot-web"`

## Details
- **Source:** `tech-talks/copilot-web/README.md`
- **Output:** `slides/tech-talks/copilot-web.md`
- **Position in sequence:** 7 of 13

## Process
1. Invoke slide-manager agent with the command above
2. Agent will:
   - Read source README
   - Generate 15-20 Slidev slides
   - Update `slides/index-custom.html` if needed
   - Run smart verification (lint first, Playwright only if needed)
   - Report pass/fail with issue details
3. Record verification results (pass/fail, any issues found)
4. Do NOT auto-fix issues at this stage

## Success Criteria
- [ ] Slides generated at `slides/tech-talks/copilot-web.md`
- [ ] Index updated in `slides/index-custom.html`
- [ ] Verification run completed
- [ ] Results documented (pass/fail, issues if any)

## Dependencies
- Completes after #[ISSUE-6] (copilot-sdk)
EOF
)" --label "slide-generation,tech-talk"

# Issue 8: mcp-apps
gh issue create --title "Generate slides for mcp-apps" --body "$(cat <<'EOF'
**Parent Issue:** #41

Generate Slidev slides for the mcp-apps tech-talk.

## Task
Use the `slide-manager` agent to generate slides from source README.

**Command:** `slide-manager agent: "Generate slides for tech-talks/mcp-apps"`

## Details
- **Source:** `tech-talks/mcp-apps/README.md`
- **Output:** `slides/tech-talks/mcp-apps.md`
- **Position in sequence:** 8 of 13

## Process
1. Invoke slide-manager agent with the command above
2. Agent will:
   - Read source README
   - Generate 15-20 Slidev slides
   - Update `slides/index-custom.html` if needed
   - Run smart verification (lint first, Playwright only if needed)
   - Report pass/fail with issue details
3. Record verification results (pass/fail, any issues found)
4. Do NOT auto-fix issues at this stage

## Success Criteria
- [ ] Slides generated at `slides/tech-talks/mcp-apps.md`
- [ ] Index updated in `slides/index-custom.html`
- [ ] Verification run completed
- [ ] Results documented (pass/fail, issues if any)

## Dependencies
- Completes after #[ISSUE-7] (copilot-web)
EOF
)" --label "slide-generation,tech-talk"

# Issue 9: enterprise-patterns
gh issue create --title "Generate slides for enterprise-patterns" --body "$(cat <<'EOF'
**Parent Issue:** #41

Generate Slidev slides for the enterprise-patterns tech-talk.

## Task
Use the `slide-manager` agent to generate slides from source README.

**Command:** `slide-manager agent: "Generate slides for tech-talks/enterprise-patterns"`

## Details
- **Source:** `tech-talks/enterprise-patterns/README.md`
- **Output:** `slides/tech-talks/enterprise-patterns.md`
- **Position in sequence:** 9 of 13

## Process
1. Invoke slide-manager agent with the command above
2. Agent will:
   - Read source README
   - Generate 15-20 Slidev slides
   - Update `slides/index-custom.html` if needed
   - Run smart verification (lint first, Playwright only if needed)
   - Report pass/fail with issue details
3. Record verification results (pass/fail, any issues found)
4. Do NOT auto-fix issues at this stage

## Success Criteria
- [ ] Slides generated at `slides/tech-talks/enterprise-patterns.md`
- [ ] Index updated in `slides/index-custom.html`
- [ ] Verification run completed
- [ ] Results documented (pass/fail, issues if any)

## Dependencies
- Completes after #[ISSUE-8] (mcp-apps)
EOF
)" --label "slide-generation,tech-talk"

# Issue 10: multi-step-tasks
gh issue create --title "Generate slides for multi-step-tasks" --body "$(cat <<'EOF'
**Parent Issue:** #41

Generate Slidev slides for the multi-step-tasks tech-talk.

## Task
Use the `slide-manager` agent to generate slides from source README.

**Command:** `slide-manager agent: "Generate slides for tech-talks/multi-step-tasks"`

## Details
- **Source:** `tech-talks/multi-step-tasks/README.md`
- **Output:** `slides/tech-talks/multi-step-tasks.md`
- **Position in sequence:** 10 of 13

## Process
1. Invoke slide-manager agent with the command above
2. Agent will:
   - Read source README
   - Generate 15-20 Slidev slides
   - Update `slides/index-custom.html` if needed
   - Run smart verification (lint first, Playwright only if needed)
   - Report pass/fail with issue details
3. Record verification results (pass/fail, any issues found)
4. Do NOT auto-fix issues at this stage

## Success Criteria
- [ ] Slides generated at `slides/tech-talks/multi-step-tasks.md`
- [ ] Index updated in `slides/index-custom.html`
- [ ] Verification run completed
- [ ] Results documented (pass/fail, issues if any)

## Dependencies
- Completes after #[ISSUE-9] (enterprise-patterns)
EOF
)" --label "slide-generation,tech-talk"

# Issue 11: parallel-execution
gh issue create --title "Generate slides for parallel-execution" --body "$(cat <<'EOF'
**Parent Issue:** #41

Generate Slidev slides for the parallel-execution tech-talk.

## Task
Use the `slide-manager` agent to generate slides from source README.

**Command:** `slide-manager agent: "Generate slides for tech-talks/parallel-execution"`

## Details
- **Source:** `tech-talks/parallel-execution/README.md`
- **Output:** `slides/tech-talks/parallel-execution.md`
- **Position in sequence:** 11 of 13

## Process
1. Invoke slide-manager agent with the command above
2. Agent will:
   - Read source README
   - Generate 15-20 Slidev slides
   - Update `slides/index-custom.html` if needed
   - Run smart verification (lint first, Playwright only if needed)
   - Report pass/fail with issue details
3. Record verification results (pass/fail, any issues found)
4. Do NOT auto-fix issues at this stage

## Success Criteria
- [ ] Slides generated at `slides/tech-talks/parallel-execution.md`
- [ ] Index updated in `slides/index-custom.html`
- [ ] Verification run completed
- [ ] Results documented (pass/fail, issues if any)

## Dependencies
- Completes after #[ISSUE-10] (multi-step-tasks)
EOF
)" --label "slide-generation,tech-talk"

# Issue 12: terminal-sandboxing
gh issue create --title "Generate slides for terminal-sandboxing" --body "$(cat <<'EOF'
**Parent Issue:** #41

Generate Slidev slides for the terminal-sandboxing tech-talk.

## Task
Use the `slide-manager` agent to generate slides from source README.

**Command:** `slide-manager agent: "Generate slides for tech-talks/terminal-sandboxing"`

## Details
- **Source:** `tech-talks/terminal-sandboxing/README.md`
- **Output:** `slides/tech-talks/terminal-sandboxing.md`
- **Position in sequence:** 12 of 13

## Process
1. Invoke slide-manager agent with the command above
2. Agent will:
   - Read source README
   - Generate 15-20 Slidev slides
   - Update `slides/index-custom.html` if needed
   - Run smart verification (lint first, Playwright only if needed)
   - Report pass/fail with issue details
3. Record verification results (pass/fail, any issues found)
4. Do NOT auto-fix issues at this stage

## Success Criteria
- [ ] Slides generated at `slides/tech-talks/terminal-sandboxing.md`
- [ ] Index updated in `slides/index-custom.html`
- [ ] Verification run completed
- [ ] Results documented (pass/fail, issues if any)

## Dependencies
- Completes after #[ISSUE-11] (parallel-execution)
EOF
)" --label "slide-generation,tech-talk"

# Issue 13: agentic-sdlc
gh issue create --title "Generate slides for agentic-sdlc" --body "$(cat <<'EOF'
**Parent Issue:** #41

Generate Slidev slides for the agentic-sdlc tech-talk.

## Task
Use the `slide-manager` agent to generate slides from source README.

**Command:** `slide-manager agent: "Generate slides for tech-talks/agentic-sdlc"`

## Details
- **Source:** `tech-talks/agentic-sdlc/README.md`
- **Output:** `slides/tech-talks/agentic-sdlc.md`
- **Position in sequence:** 13 of 13

## Process
1. Invoke slide-manager agent with the command above
2. Agent will:
   - Read source README
   - Generate 15-20 Slidev slides
   - Update `slides/index-custom.html` if needed
   - Run smart verification (lint first, Playwright only if needed)
   - Report pass/fail with issue details
3. Record verification results (pass/fail, any issues found)
4. Do NOT auto-fix issues at this stage

## Success Criteria
- [ ] Slides generated at `slides/tech-talks/agentic-sdlc.md`
- [ ] Index updated in `slides/index-custom.html`
- [ ] Verification run completed
- [ ] Results documented (pass/fail, issues if any)

## Dependencies
- Completes after #[ISSUE-12] (terminal-sandboxing)
EOF
)" --label "slide-generation,tech-talk"

# Issue 14: Final verification
gh issue create --title "Final verification for all 13 regenerated slide decks" --body "$(cat <<'EOF'
**Parent Issue:** #41

Perform final batch verification and quality checks across all 13 regenerated slide decks.

## Task
After all 13 deck generation tasks are complete, run comprehensive verification and quality checks.

## Steps

1. **Review accumulated verification reports**
   - Gather pass/fail results from all 13 generation tasks
   - Identify decks with reported issues (overflow, broken images, layout problems)
   - Prioritize issues that need fixing

2. **Run final batch lint check**
   - Use the "Smart Verify All Slides" workspace task
   - Confirms no regressions across the full slide set including the 3 excluded decks
   - Command: Run the workspace verification task

3. **Spot-check visual rendering**
   - Select 2-3 decks for manual visual inspection
   - Run `npx slidev slides/tech-talks/{name}.md` for each
   - Verify:
     - Slides render correctly
     - No overflow or layout issues
     - Images load properly
     - Navigation works
     - Dark cockpit-style theme is applied

4. **Address critical issues**
   - For any blocking issues found, decide on fix approach:
     - Use `@slide-fixer` skill for automated fixes (overflow, broken images)
     - Manual edits for content or structural problems
   - Re-verify after fixes

5. **Document results**
   - Summary of all 13 decks: pass/fail status
   - List of any remaining known issues (non-blocking)
   - Verification test results
   - Spot-check findings

## Success Criteria
- [ ] All 13 verification reports reviewed
- [ ] Final batch lint check completed (all slides pass)
- [ ] 2-3 decks visually spot-checked and confirmed working
- [ ] Critical issues resolved (if any found)
- [ ] Results documented in this issue
- [ ] Parent issue #41 updated with final status

## Dependencies
- Requires completion of all 13 deck generation issues:
  - #[ISSUE-1] copilot-cli
  - #[ISSUE-2] copilot-chat
  - #[ISSUE-3] copilot-chat-internals
  - #[ISSUE-4] copilot-hooks
  - #[ISSUE-5] copilot-memory
  - #[ISSUE-6] copilot-sdk
  - #[ISSUE-7] copilot-web
  - #[ISSUE-8] mcp-apps
  - #[ISSUE-9] enterprise-patterns
  - #[ISSUE-10] multi-step-tasks
  - #[ISSUE-11] parallel-execution
  - #[ISSUE-12] terminal-sandboxing
  - #[ISSUE-13] agentic-sdlc

## Notes
- This is the final quality gate before considering issue #41 complete
- Focus on verification and validation, not additional generation
- Blocked issues should be documented and can be addressed in follow-up issues if needed
EOF
)" --label "verification,slide-generation,tech-talk"
```

## Manual Creation via GitHub Web Interface

If you prefer to create issues via the GitHub web UI, use the templates below:

---

## Sub-Issue Templates

### Issue 1: copilot-cli

**Title:** `Generate slides for copilot-cli`

**Labels:** `slide-generation`, `tech-talk`

**Body:**
```markdown
**Parent Issue:** #41

Generate Slidev slides for the copilot-cli tech-talk.

## Task
Use the `slide-manager` agent to generate slides from source README.

**Command:** `slide-manager agent: "Generate slides for tech-talks/copilot-cli"`

## Details
- **Source:** `tech-talks/copilot-cli/README.md`
- **Output:** `slides/tech-talks/copilot-cli.md`
- **Priority:** HIGH (currently empty deck)
- **Position in sequence:** 1 of 13

## Process
1. Invoke slide-manager agent with the command above
2. Agent will:
   - Read source README
   - Generate 15-20 Slidev slides
   - Update `slides/index-custom.html` if needed
   - Run smart verification (lint first, Playwright only if needed)
   - Report pass/fail with issue details
3. Record verification results (pass/fail, any issues found)
4. Do NOT auto-fix issues at this stage

## Success Criteria
- [ ] Slides generated at `slides/tech-talks/copilot-cli.md`
- [ ] Index updated in `slides/index-custom.html`
- [ ] Verification run completed
- [ ] Results documented (pass/fail, issues if any)

## Notes
- This is the highest priority deck (currently empty)
- Sequential processing to avoid merge conflicts on index file
- Issues are reported but not auto-fixed during generation phase
```

---

### Issue 2: copilot-chat

**Title:** `Generate slides for copilot-chat`

**Labels:** `slide-generation`, `tech-talk`

**Body:**
```markdown
**Parent Issue:** #41

Generate Slidev slides for the copilot-chat tech-talk.

## Task
Use the `slide-manager` agent to generate slides from source README.

**Command:** `slide-manager agent: "Generate slides for tech-talks/copilot-chat"`

## Details
- **Source:** `tech-talks/copilot-chat/README.md`
- **Output:** `slides/tech-talks/copilot-chat.md`
- **Position in sequence:** 2 of 13

## Process
1. Invoke slide-manager agent with the command above
2. Agent will:
   - Read source README
   - Generate 15-20 Slidev slides
   - Update `slides/index-custom.html` if needed
   - Run smart verification (lint first, Playwright only if needed)
   - Report pass/fail with issue details
3. Record verification results (pass/fail, any issues found)
4. Do NOT auto-fix issues at this stage

## Success Criteria
- [ ] Slides generated at `slides/tech-talks/copilot-chat.md`
- [ ] Index updated in `slides/index-custom.html`
- [ ] Verification run completed
- [ ] Results documented (pass/fail, issues if any)

## Dependencies
- Completes after Issue for copilot-cli
```

---

### Issue 3: copilot-chat-internals

**Title:** `Generate slides for copilot-chat-internals`

**Labels:** `slide-generation`, `tech-talk`

**Body:**
```markdown
**Parent Issue:** #41

Generate Slidev slides for the copilot-chat-internals tech-talk.

## Task
Use the `slide-manager` agent to generate slides from source README.

**Command:** `slide-manager agent: "Generate slides for tech-talks/copilot-chat-internals"`

## Details
- **Source:** `tech-talks/copilot-chat-internals/README.md`
- **Output:** `slides/tech-talks/copilot-chat-internals.md`
- **Position in sequence:** 3 of 13

## Process
1. Invoke slide-manager agent with the command above
2. Agent will:
   - Read source README
   - Generate 15-20 Slidev slides
   - Update `slides/index-custom.html` if needed
   - Run smart verification (lint first, Playwright only if needed)
   - Report pass/fail with issue details
3. Record verification results (pass/fail, any issues found)
4. Do NOT auto-fix issues at this stage

## Success Criteria
- [ ] Slides generated at `slides/tech-talks/copilot-chat-internals.md`
- [ ] Index updated in `slides/index-custom.html`
- [ ] Verification run completed
- [ ] Results documented (pass/fail, issues if any)

## Dependencies
- Completes after Issue for copilot-chat
```

---

### Issue 4: copilot-hooks

**Title:** `Generate slides for copilot-hooks`

**Labels:** `slide-generation`, `tech-talk`

**Body:**
```markdown
**Parent Issue:** #41

Generate Slidev slides for the copilot-hooks tech-talk.

## Task
Use the `slide-manager` agent to generate slides from source README.

**Command:** `slide-manager agent: "Generate slides for tech-talks/copilot-hooks"`

## Details
- **Source:** `tech-talks/copilot-hooks/README.md`
- **Output:** `slides/tech-talks/copilot-hooks.md`
- **Position in sequence:** 4 of 13

## Process
1. Invoke slide-manager agent with the command above
2. Agent will:
   - Read source README
   - Generate 15-20 Slidev slides
   - Update `slides/index-custom.html` if needed
   - Run smart verification (lint first, Playwright only if needed)
   - Report pass/fail with issue details
3. Record verification results (pass/fail, any issues found)
4. Do NOT auto-fix issues at this stage

## Success Criteria
- [ ] Slides generated at `slides/tech-talks/copilot-hooks.md`
- [ ] Index updated in `slides/index-custom.html`
- [ ] Verification run completed
- [ ] Results documented (pass/fail, issues if any)

## Dependencies
- Completes after Issue for copilot-chat-internals
```

---

### Issue 5: copilot-memory

**Title:** `Generate slides for copilot-memory`

**Labels:** `slide-generation`, `tech-talk`

**Body:**
```markdown
**Parent Issue:** #41

Generate Slidev slides for the copilot-memory tech-talk.

## Task
Use the `slide-manager` agent to generate slides from source README.

**Command:** `slide-manager agent: "Generate slides for tech-talks/copilot-memory"`

## Details
- **Source:** `tech-talks/copilot-memory/README.md`
- **Output:** `slides/tech-talks/copilot-memory.md`
- **Position in sequence:** 5 of 13

## Process
1. Invoke slide-manager agent with the command above
2. Agent will:
   - Read source README
   - Generate 15-20 Slidev slides
   - Update `slides/index-custom.html` if needed
   - Run smart verification (lint first, Playwright only if needed)
   - Report pass/fail with issue details
3. Record verification results (pass/fail, any issues found)
4. Do NOT auto-fix issues at this stage

## Success Criteria
- [ ] Slides generated at `slides/tech-talks/copilot-memory.md`
- [ ] Index updated in `slides/index-custom.html`
- [ ] Verification run completed
- [ ] Results documented (pass/fail, issues if any)

## Dependencies
- Completes after Issue for copilot-hooks
```

---

### Issue 6: copilot-sdk

**Title:** `Generate slides for copilot-sdk`

**Labels:** `slide-generation`, `tech-talk`

**Body:**
```markdown
**Parent Issue:** #41

Generate Slidev slides for the copilot-sdk tech-talk.

## Task
Use the `slide-manager` agent to generate slides from source README.

**Command:** `slide-manager agent: "Generate slides for tech-talks/copilot-sdk"`

## Details
- **Source:** `tech-talks/copilot-sdk/README.md`
- **Output:** `slides/tech-talks/copilot-sdk.md`
- **Position in sequence:** 6 of 13

## Process
1. Invoke slide-manager agent with the command above
2. Agent will:
   - Read source README
   - Generate 15-20 Slidev slides
   - Update `slides/index-custom.html` if needed
   - Run smart verification (lint first, Playwright only if needed)
   - Report pass/fail with issue details
3. Record verification results (pass/fail, any issues found)
4. Do NOT auto-fix issues at this stage

## Success Criteria
- [ ] Slides generated at `slides/tech-talks/copilot-sdk.md`
- [ ] Index updated in `slides/index-custom.html`
- [ ] Verification run completed
- [ ] Results documented (pass/fail, issues if any)

## Dependencies
- Completes after Issue for copilot-memory
```

---

### Issue 7: copilot-web

**Title:** `Generate slides for copilot-web`

**Labels:** `slide-generation`, `tech-talk`

**Body:**
```markdown
**Parent Issue:** #41

Generate Slidev slides for the copilot-web tech-talk.

## Task
Use the `slide-manager` agent to generate slides from source README.

**Command:** `slide-manager agent: "Generate slides for tech-talks/copilot-web"`

## Details
- **Source:** `tech-talks/copilot-web/README.md`
- **Output:** `slides/tech-talks/copilot-web.md`
- **Position in sequence:** 7 of 13

## Process
1. Invoke slide-manager agent with the command above
2. Agent will:
   - Read source README
   - Generate 15-20 Slidev slides
   - Update `slides/index-custom.html` if needed
   - Run smart verification (lint first, Playwright only if needed)
   - Report pass/fail with issue details
3. Record verification results (pass/fail, any issues found)
4. Do NOT auto-fix issues at this stage

## Success Criteria
- [ ] Slides generated at `slides/tech-talks/copilot-web.md`
- [ ] Index updated in `slides/index-custom.html`
- [ ] Verification run completed
- [ ] Results documented (pass/fail, issues if any)

## Dependencies
- Completes after Issue for copilot-sdk
```

---

### Issue 8: mcp-apps

**Title:** `Generate slides for mcp-apps`

**Labels:** `slide-generation`, `tech-talk`

**Body:**
```markdown
**Parent Issue:** #41

Generate Slidev slides for the mcp-apps tech-talk.

## Task
Use the `slide-manager` agent to generate slides from source README.

**Command:** `slide-manager agent: "Generate slides for tech-talks/mcp-apps"`

## Details
- **Source:** `tech-talks/mcp-apps/README.md`
- **Output:** `slides/tech-talks/mcp-apps.md`
- **Position in sequence:** 8 of 13

## Process
1. Invoke slide-manager agent with the command above
2. Agent will:
   - Read source README
   - Generate 15-20 Slidev slides
   - Update `slides/index-custom.html` if needed
   - Run smart verification (lint first, Playwright only if needed)
   - Report pass/fail with issue details
3. Record verification results (pass/fail, any issues found)
4. Do NOT auto-fix issues at this stage

## Success Criteria
- [ ] Slides generated at `slides/tech-talks/mcp-apps.md`
- [ ] Index updated in `slides/index-custom.html`
- [ ] Verification run completed
- [ ] Results documented (pass/fail, issues if any)

## Dependencies
- Completes after Issue for copilot-web
```

---

### Issue 9: enterprise-patterns

**Title:** `Generate slides for enterprise-patterns`

**Labels:** `slide-generation`, `tech-talk`

**Body:**
```markdown
**Parent Issue:** #41

Generate Slidev slides for the enterprise-patterns tech-talk.

## Task
Use the `slide-manager` agent to generate slides from source README.

**Command:** `slide-manager agent: "Generate slides for tech-talks/enterprise-patterns"`

## Details
- **Source:** `tech-talks/enterprise-patterns/README.md`
- **Output:** `slides/tech-talks/enterprise-patterns.md`
- **Position in sequence:** 9 of 13

## Process
1. Invoke slide-manager agent with the command above
2. Agent will:
   - Read source README
   - Generate 15-20 Slidev slides
   - Update `slides/index-custom.html` if needed
   - Run smart verification (lint first, Playwright only if needed)
   - Report pass/fail with issue details
3. Record verification results (pass/fail, any issues found)
4. Do NOT auto-fix issues at this stage

## Success Criteria
- [ ] Slides generated at `slides/tech-talks/enterprise-patterns.md`
- [ ] Index updated in `slides/index-custom.html`
- [ ] Verification run completed
- [ ] Results documented (pass/fail, issues if any)

## Dependencies
- Completes after Issue for mcp-apps
```

---

### Issue 10: multi-step-tasks

**Title:** `Generate slides for multi-step-tasks`

**Labels:** `slide-generation`, `tech-talk`

**Body:**
```markdown
**Parent Issue:** #41

Generate Slidev slides for the multi-step-tasks tech-talk.

## Task
Use the `slide-manager` agent to generate slides from source README.

**Command:** `slide-manager agent: "Generate slides for tech-talks/multi-step-tasks"`

## Details
- **Source:** `tech-talks/multi-step-tasks/README.md`
- **Output:** `slides/tech-talks/multi-step-tasks.md`
- **Position in sequence:** 10 of 13

## Process
1. Invoke slide-manager agent with the command above
2. Agent will:
   - Read source README
   - Generate 15-20 Slidev slides
   - Update `slides/index-custom.html` if needed
   - Run smart verification (lint first, Playwright only if needed)
   - Report pass/fail with issue details
3. Record verification results (pass/fail, any issues found)
4. Do NOT auto-fix issues at this stage

## Success Criteria
- [ ] Slides generated at `slides/tech-talks/multi-step-tasks.md`
- [ ] Index updated in `slides/index-custom.html`
- [ ] Verification run completed
- [ ] Results documented (pass/fail, issues if any)

## Dependencies
- Completes after Issue for enterprise-patterns
```

---

### Issue 11: parallel-execution

**Title:** `Generate slides for parallel-execution`

**Labels:** `slide-generation`, `tech-talk`

**Body:**
```markdown
**Parent Issue:** #41

Generate Slidev slides for the parallel-execution tech-talk.

## Task
Use the `slide-manager` agent to generate slides from source README.

**Command:** `slide-manager agent: "Generate slides for tech-talks/parallel-execution"`

## Details
- **Source:** `tech-talks/parallel-execution/README.md`
- **Output:** `slides/tech-talks/parallel-execution.md`
- **Position in sequence:** 11 of 13

## Process
1. Invoke slide-manager agent with the command above
2. Agent will:
   - Read source README
   - Generate 15-20 Slidev slides
   - Update `slides/index-custom.html` if needed
   - Run smart verification (lint first, Playwright only if needed)
   - Report pass/fail with issue details
3. Record verification results (pass/fail, any issues found)
4. Do NOT auto-fix issues at this stage

## Success Criteria
- [ ] Slides generated at `slides/tech-talks/parallel-execution.md`
- [ ] Index updated in `slides/index-custom.html`
- [ ] Verification run completed
- [ ] Results documented (pass/fail, issues if any)

## Dependencies
- Completes after Issue for multi-step-tasks
```

---

### Issue 12: terminal-sandboxing

**Title:** `Generate slides for terminal-sandboxing`

**Labels:** `slide-generation`, `tech-talk`

**Body:**
```markdown
**Parent Issue:** #41

Generate Slidev slides for the terminal-sandboxing tech-talk.

## Task
Use the `slide-manager` agent to generate slides from source README.

**Command:** `slide-manager agent: "Generate slides for tech-talks/terminal-sandboxing"`

## Details
- **Source:** `tech-talks/terminal-sandboxing/README.md`
- **Output:** `slides/tech-talks/terminal-sandboxing.md`
- **Position in sequence:** 12 of 13

## Process
1. Invoke slide-manager agent with the command above
2. Agent will:
   - Read source README
   - Generate 15-20 Slidev slides
   - Update `slides/index-custom.html` if needed
   - Run smart verification (lint first, Playwright only if needed)
   - Report pass/fail with issue details
3. Record verification results (pass/fail, any issues found)
4. Do NOT auto-fix issues at this stage

## Success Criteria
- [ ] Slides generated at `slides/tech-talks/terminal-sandboxing.md`
- [ ] Index updated in `slides/index-custom.html`
- [ ] Verification run completed
- [ ] Results documented (pass/fail, issues if any)

## Dependencies
- Completes after Issue for parallel-execution
```

---

### Issue 13: agentic-sdlc

**Title:** `Generate slides for agentic-sdlc`

**Labels:** `slide-generation`, `tech-talk`

**Body:**
```markdown
**Parent Issue:** #41

Generate Slidev slides for the agentic-sdlc tech-talk.

## Task
Use the `slide-manager` agent to generate slides from source README.

**Command:** `slide-manager agent: "Generate slides for tech-talks/agentic-sdlc"`

## Details
- **Source:** `tech-talks/agentic-sdlc/README.md`
- **Output:** `slides/tech-talks/agentic-sdlc.md`
- **Position in sequence:** 13 of 13

## Process
1. Invoke slide-manager agent with the command above
2. Agent will:
   - Read source README
   - Generate 15-20 Slidev slides
   - Update `slides/index-custom.html` if needed
   - Run smart verification (lint first, Playwright only if needed)
   - Report pass/fail with issue details
3. Record verification results (pass/fail, any issues found)
4. Do NOT auto-fix issues at this stage

## Success Criteria
- [ ] Slides generated at `slides/tech-talks/agentic-sdlc.md`
- [ ] Index updated in `slides/index-custom.html`
- [ ] Verification run completed
- [ ] Results documented (pass/fail, issues if any)

## Dependencies
- Completes after Issue for terminal-sandboxing
```

---

### Issue 14: Final verification

**Title:** `Final verification for all 13 regenerated slide decks`

**Labels:** `verification`, `slide-generation`, `tech-talk`

**Body:**
```markdown
**Parent Issue:** #41

Perform final batch verification and quality checks across all 13 regenerated slide decks.

## Task
After all 13 deck generation tasks are complete, run comprehensive verification and quality checks.

## Steps

1. **Review accumulated verification reports**
   - Gather pass/fail results from all 13 generation tasks
   - Identify decks with reported issues (overflow, broken images, layout problems)
   - Prioritize issues that need fixing

2. **Run final batch lint check**
   - Use the "Smart Verify All Slides" workspace task
   - Confirms no regressions across the full slide set including the 3 excluded decks
   - Command: Run the workspace verification task

3. **Spot-check visual rendering**
   - Select 2-3 decks for manual visual inspection
   - Run `npx slidev slides/tech-talks/{name}.md` for each
   - Verify:
     - Slides render correctly
     - No overflow or layout issues
     - Images load properly
     - Navigation works
     - Dark cockpit-style theme is applied

4. **Address critical issues**
   - For any blocking issues found, decide on fix approach:
     - Use `@slide-fixer` skill for automated fixes (overflow, broken images)
     - Manual edits for content or structural problems
   - Re-verify after fixes

5. **Document results**
   - Summary of all 13 decks: pass/fail status
   - List of any remaining known issues (non-blocking)
   - Verification test results
   - Spot-check findings

## Success Criteria
- [ ] All 13 verification reports reviewed
- [ ] Final batch lint check completed (all slides pass)
- [ ] 2-3 decks visually spot-checked and confirmed working
- [ ] Critical issues resolved (if any found)
- [ ] Results documented in this issue
- [ ] Parent issue #41 updated with final status

## Dependencies
- Requires completion of all 13 deck generation issues (1-13)

## Notes
- This is the final quality gate before considering issue #41 complete
- Focus on verification and validation, not additional generation
- Blocked issues should be documented and can be addressed in follow-up issues if needed
```

---

## Summary

This breakdown creates 14 sub-issues from the parent issue #41:

- **Issues 1-13:** Individual slide deck generation tasks (one per tech-talk)
- **Issue 14:** Final verification and quality assurance

### Key Design Decisions

1. **Sequential processing:** Each issue depends on the previous one to avoid merge conflicts on `slides/index-custom.html`
2. **Highest priority first:** copilot-cli is issue #1 because its deck is currently empty
3. **Separate verification phase:** Issue #14 handles all quality checks after generation is complete
4. **No auto-fixing during generation:** Issues are reported but not fixed during generation to keep the process clean
5. **Clear success criteria:** Each issue has concrete deliverables and acceptance criteria
6. **Proper dependencies:** Each issue references its predecessor to maintain sequence

### Next Steps

1. Create all 14 issues using either the GitHub CLI script or manual creation via web UI
2. Update issue #41 to reference all sub-issues
3. Execute issues sequentially (1 → 2 → 3 → ... → 13 → 14)
4. Close parent issue #41 when issue #14 is complete
