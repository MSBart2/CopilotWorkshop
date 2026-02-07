# Tech-Talk Workflow: Quick Reference

## Your Questions Answered

### 1. web_fetch vs web_search?

**Answer**: Always use **web_search**

- ✅ web_search: Works reliably in sandbox
- ❌ web_fetch: Fails with DNS errors in GitHub Actions

**What we changed**:
- Removed web_fetch from agent tools
- Updated all workflow instructions to specify web_search
- Added warnings in documentation

### 2. How to handle URLs >20K characters?

**Answer**: Section-by-section processing with synthesis

**Process**:
1. Break content into logical sections (intro, features, examples, architecture)
2. Extract key technical details from each section
3. Synthesize findings into cohesive research document
4. Focus on: capabilities, architecture, examples, decision criteria
5. Skip: marketing content, promotional material

**Where documented**:
- `.github/workflows/RESEARCH-STORAGE.md` (design)
- `docs/agents-tech-talk-generator.agent.md` (implementation)

### 3. Where to store research findings?

**Answer**: File-based storage in repository

**Location**: `tech-talks/.research/[topic]/`
- `metadata.json` - Issue details
- `phase1-research.md` - Research findings
- `phase2-plan.md` - Content outline

**Why files, not issue body?**
- ✅ Version controlled
- ✅ Human editable
- ✅ Persistent
- ✅ No length limits
- ❌ Issue body: length limits, clutters issue, not version controlled

### 4. Where's the human review checkpoint?

**Answer**: Two manual checkpoints

**Checkpoint 1**: After Phase 2 (Research)
- Review: `.research/[topic]/phase1-research.md`
- Review: `.research/[topic]/phase2-plan.md`
- Edit files if needed
- Approve: Add `tech-talk:built` label

**Checkpoint 2**: After Phase 3 (Build)
- Review: PR with generated README.md
- Provide feedback via PR comments
- Approve: Add `tech-talk:slides` label

### 5. Why didn't Issue 54's label update?

**Answer**: Agents can't reliably update issue labels

**Root Cause**:
- Workflow asked agent to update labels
- Agents don't have reliable label manipulation in toolset

**Solution**:
- Manual review checkpoints
- Human adds labels after reviewing
- More predictable and reliable

**For Issue 54 now**:
1. Check if `.research/[topic]/` exists
2. Review research files
3. Add `tech-talk:built` label when ready

## New Workflow Overview

```
┌─────────────────────┐
│  Create Issue       │ (Manual)
│  with template      │
└──────────┬──────────┘
           │ 🤖 Template adds: tech-talk + tech-talk:intake
           ▼
┌─────────────────────┐
│  Phase 1: Intake    │ (🤖 Automatic - triggered by labels)
│  - Validate URLs    │
│  - Create .research │
│  - Save metadata    │
└──────────┬──────────┘
           │ 🤖 Phase 1 adds: tech-talk:planned
           ▼
┌─────────────────────┐
│  Phase 2: Research  │ (🤖 Automatic - triggered by label)
│  - web_search URLs  │
│  - Populate files   │
│  - Create plan      │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│  HUMAN REVIEW       │ (👤 Manual) ⚠️
│  Review .research/  │
│  Edit if needed     │
│  Add tech-talk:built│ ← 👤 Human adds label
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│  Phase 3: Build     │ (🤖 Automatic - triggered by label)
│  - Read research    │
│  - Generate README  │
│  - Create PR        │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│  HUMAN REVIEW       │ (👤 Manual) ⚠️
│  Review PR          │
│  Provide feedback   │
│  Add tech-talk:slides│ ← 👤 Human adds label
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│  Phase 4: Slides    │ (🤖 Automatic - triggered by label)
│  - Generate slides  │
│  - Add to PR        │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│  Complete           │ (👤 Manual)
│  Review & merge PR  │
│  Add tech-talk:complete│ ← 👤 Human adds label (optional)
└─────────────────────┘
```

**Legend**: 🤖 = Automated | 👤 = Manual/Human

**Detailed Label Flow**: See `.github/workflows/LABEL-FLOW.md` for complete label reference

## Key Files to Know

### Documentation (Read These)
- `.github/workflows/IMPROVEMENTS-SUMMARY.md` - **Start here** (complete overview)
- `.github/workflows/TESTING-GUIDE.md` - Step-by-step test plan
- `.github/workflows/TECH-TALK-WORKFLOW.md` - User guide
- `.github/workflows/RESEARCH-STORAGE.md` - Design document
- `.github/workflows/ISSUE-54-INVESTIGATION.md` - Label failure analysis

### Workflow Files (Auto-Execute)
- `.github/workflows/tech-talk-phase1-intake.yml`
- `.github/workflows/tech-talk-phase2-plan.yml`
- `.github/workflows/tech-talk-phase3-build.yml`
- `.github/workflows/tech-talk-phase4-slides.yml`

### Research Files (Review These)
- `tech-talks/.research/[topic]/metadata.json`
- `tech-talks/.research/[topic]/phase1-research.md`
- `tech-talks/.research/[topic]/phase2-plan.md`

## Quick Start

### Create New Tech-Talk

1. Open: https://github.com/MSBart2/CopilotTraining/issues/new/choose
2. Select: "🎤 Tech Talk Request"
3. Fill form → Submit
4. Wait for Phase 1 and 2 to complete (15-20 min)
5. Review: `tech-talks/.research/[topic]/` files
6. When satisfied: Add `tech-talk:built` label
7. Wait for Phase 3 to complete (15-20 min)
8. Review: PR with generated content
9. When satisfied: Add `tech-talk:slides` label
10. Wait for Phase 4 to complete (5-10 min)
11. Review & merge: PR with slides

### Test the Workflow

See: `.github/workflows/TESTING-GUIDE.md`

Quick test:
```
Title: [Tech Talk] Test - Copilot Edits
Topic: test-copilot-edits
URL: https://code.visualstudio.com/docs/copilot/copilot-edits
Question: How does Copilot Edits differ from inline suggestions?
```

### Handle Issue 54

1. Check: Does `tech-talks/.research/[topic]/` exist?
2. If yes:
   - Review files
   - Add `tech-talk:built` label
3. If no:
   - Ensure issue has `tech-talk:planned` label
   - Comment: `@copilot-swe-agent[bot] please complete Phase 2 research`

## Common Questions

**Q: Why manual review?**
A: Ensures research quality before expensive generation. Allows editing.

**Q: Can I skip review?**
A: Not recommended, but yes - just add labels immediately after each phase.

**Q: What if research is incomplete?**
A: Edit the research files directly, commit, then add label.

**Q: What if generated content is wrong?**
A: Comment on PR with feedback, agent will revise.

**Q: How long does each phase take?**
- Phase 1: 1-2 minutes
- Phase 2: 10-15 minutes
- Phase 3: 15-20 minutes
- Phase 4: 5-10 minutes

**Q: Can I automate the whole thing?**
A: Technically yes, but defeats purpose of human review. Not recommended.

## Success Criteria

✅ Phase 1: Directory created
✅ Phase 2: Files populated
✅ Human can edit research
✅ Phase 3: README generated
✅ Human can review PR
✅ Phase 4: Slides generated
✅ web_search used (not web_fetch)
✅ Large URLs handled

## Need Help?

1. **Label flow**: `.github/workflows/LABEL-FLOW.md` ⭐ (who does what, when)
2. Check documentation: `.github/workflows/IMPROVEMENTS-SUMMARY.md`
3. Test with guide: `.github/workflows/TESTING-GUIDE.md`
4. Understand design: `.github/workflows/RESEARCH-STORAGE.md`
5. See workflow: `.github/workflows/TECH-TALK-WORKFLOW.md`

## Summary

**Problem**: Workflow failures with web_fetch, no plan review, unclear storage
**Solution**: web_search, file-based research, manual review checkpoints
**Result**: Reliable, reviewable, version-controlled workflow

🎯 **Bottom Line**: Research stored in files, humans review before generation, web_search works reliably.
