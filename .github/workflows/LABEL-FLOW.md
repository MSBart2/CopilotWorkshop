# Tech-Talk Workflow: Label Flow Guide

## Visual Label Flow

```
┌─────────────────────────────────────────────────────────────────────┐
│                         ISSUE CREATED                                │
│                     (via issue template)                             │
└────────────────────────┬────────────────────────────────────────────┘
                         │
                         │ AUTOMATIC (template applies labels)
                         ▼
                    ┌─────────┐
                    │tech-talk│ (identifies this as tech-talk issue)
                    └─────────┘
                    ┌──────────────────┐
                    │tech-talk:intake  │ (triggers Phase 1 workflow)
                    └──────────────────┘
                         │
                         │ 🤖 AUTOMATED - Phase 1 Workflow Runs
                         │
┌────────────────────────▼────────────────────────────────────────────┐
│                      PHASE 1: INTAKE                                 │
│  - Validates URLs                                                    │
│  - Creates .research/[topic]/ directory                              │
│  - Saves metadata.json                                               │
│  - Initializes phase1-research.md                                    │
│  - Commits files to repo                                             │
└────────────────────────┬────────────────────────────────────────────┘
                         │
                         │ 🤖 AUTOMATED (workflow removes/adds labels)
                         ▼
              ❌ Removes: tech-talk:intake
              ✅ Adds: tech-talk:planned
                         │
                         │ 🤖 AUTOMATED - Phase 2 Workflow Runs
                         │
┌────────────────────────▼────────────────────────────────────────────┐
│                   PHASE 2: RESEARCH & PLAN                           │
│  - Agent researches source URLs (using web_search)                   │
│  - Populates phase1-research.md with findings                        │
│  - Creates phase2-plan.md with content outline                       │
│  - Commits research files to repo                                    │
│  - Posts comment with summary                                        │
└────────────────────────┬────────────────────────────────────────────┘
                         │
                         │ 👤 MANUAL - Human Review Required
                         │
                    ┌────▼────┐
                    │  HUMAN  │ Reviews .research/[topic]/ files
                    │ REVIEWS │ - phase1-research.md
                    │  FILES  │ - phase2-plan.md
                    │         │ Edits if needed, commits changes
                    └────┬────┘
                         │
                         │ 👤 MANUAL (human adds label when satisfied)
                         ▼
              ✅ Human Adds: tech-talk:ready
                         │
                         │ 🤖 AUTOMATED - Phase 3 Workflow Runs
                         │
┌────────────────────────▼────────────────────────────────────────────┐
│                     PHASE 3: BUILD                                   │
│  - Agent reads phase1-research.md and phase2-plan.md                 │
│  - Generates complete tech-talks/[topic]/README.md                   │
│  - Downloads images (if applicable)                                  │
│  - Creates artifact files                                            │
│  - Opens PR with all content                                         │
└────────────────────────┬────────────────────────────────────────────┘
                         │
                         │ 👤 MANUAL - Human Review Required
                         │
                    ┌────▼────┐
                    │  HUMAN  │ Reviews PR content
                    │ REVIEWS │ - tech-talks/[topic]/README.md
                    │   PR    │ - Artifacts
                    │         │ Provides feedback if needed
                    └────┬────┘
                         │
                         │ 👤 MANUAL (human adds label when satisfied)
                         ▼
              ✅ Human Adds: tech-talk:slides
                         │
                         │ 🤖 AUTOMATED - Phase 4 Workflow Runs
                         │
┌────────────────────────▼────────────────────────────────────────────┐
│                    PHASE 4: SLIDES                                   │
│  - Agent generates Slidev presentation                               │
│  - Verifies slides render correctly                                  │
│  - Adds slides to existing PR                                        │
└────────────────────────┬────────────────────────────────────────────┘
                         │
                         │ 👤 MANUAL - Human Review & Merge
                         │
                    ┌────▼────┐
                    │  HUMAN  │ Reviews slides in PR
                    │ REVIEWS │ Merges PR when satisfied
                    │ & MERGES│
                    └────┬────┘
                         │
                         │ 👤 MANUAL (optional - marks workflow complete)
                         ▼
              ✅ Human Adds: tech-talk:complete
                         │
                         ▼
                    ┌─────────┐
                    │COMPLETE │
                    └─────────┘
```

## Label Reference Table

| Label | Applied By | Triggers Workflow | Purpose | When Added | When Removed |
|-------|-----------|-------------------|---------|------------|--------------|
| `tech-talk` | 🤖 Template | No | Identifies tech-talk issues | Issue creation | Never (permanent) |
| `tech-talk:intake` | 🤖 Template | ✅ Phase 1 | Starts intake process | Issue creation | After Phase 1 completes |
| `tech-talk:planned` | 🤖 Phase 1 Workflow | ✅ Phase 2 | Research & planning phase | Phase 1 completion | Optional (can keep) |
| `tech-talk:ready` | 👤 Human | ✅ Phase 3 | Content generation phase | After reviewing research | Optional (can keep) |
| `tech-talk:slides` | 👤 Human | ✅ Phase 4 | Slide generation phase | After reviewing README | Optional (can keep) |
| `tech-talk:complete` | 👤 Human | No | Marks workflow complete | After merging PR | Never |

## Automated vs Manual Label Actions

### 🤖 Automated Label Actions (by Workflow)

**Issue Template**:
- ✅ Adds `tech-talk` (permanent identifier)
- ✅ Adds `tech-talk:intake` (triggers Phase 1)

**Phase 1 Workflow** (tech-talk-phase1-intake.yml):
- ❌ Removes `tech-talk:intake` (phase complete)
- ✅ Adds `tech-talk:planned` (triggers Phase 2)

**Phase 2 Workflow** (tech-talk-phase2-plan.yml):
- Does NOT modify labels (waits for human review)

**Phase 3 Workflow** (tech-talk-phase3-build.yml):
- Does NOT modify labels (waits for human review)

**Phase 4 Workflow** (tech-talk-phase4-slides.yml):
- Does NOT modify labels (waits for human review)

### 👤 Manual Label Actions (by Human)

**After Phase 2** (research complete):
- 👤 Human reviews `.research/[topic]/` files
- 👤 Human adds `tech-talk:ready` to trigger Phase 3

**After Phase 3** (README complete):
- 👤 Human reviews PR with generated content
- 👤 Human adds `tech-talk:slides` to trigger Phase 4

**After Phase 4** (slides complete):
- 👤 Human merges PR
- 👤 Human optionally adds `tech-talk:complete`

## Workflow Trigger Conditions

### Phase 1: Intake (tech-talk-phase1-intake.yml)
**Triggers when**:
- Issue has BOTH labels: `tech-talk` AND `tech-talk:intake`
- Event: `issues` with types `[opened, labeled]`

**What it does**:
- Runs automatically when issue is created (template applies labels)
- Creates research directory structure
- Automatically progresses to Phase 2

### Phase 2: Research & Plan (tech-talk-phase2-plan.yml)
**Triggers when**:
- Issue has BOTH labels: `tech-talk` AND `tech-talk:planned`
- Event: `issues` with type `[labeled]`

**What it does**:
- Runs automatically when Phase 1 adds `tech-talk:planned` label
- Agent populates research files
- Waits for human to add `tech-talk:built` label

### Phase 3: Build (tech-talk-phase3-build.yml)
**Triggers when**:
- Issue has BOTH labels: `tech-talk` AND `tech-talk:ready`
- Event: `issues` with type `[labeled]`

**What it does**:
- Runs when human adds `tech-talk:ready` label
- Agent generates README and creates PR
- Waits for human to add `tech-talk:slides` label

### Phase 4: Slides (tech-talk-phase4-slides.yml)
**Triggers when**:
- PR has label: `tech-talk:slides`
- Event: `pull_request` with type `[labeled]`

**What it does**:
- Runs when human adds `tech-talk:slides` label to PR
- Agent generates slides
- Waits for human to merge PR

## Human Decision Points

### Decision Point 1: After Phase 2 (Research Complete)
**Location**: `.research/[topic]/` directory in repo

**Review**:
- `phase1-research.md` - Research findings from URLs
- `phase2-plan.md` - Content outline and structure

**Actions**:
- ✅ If satisfied: Add `tech-talk:ready` label → Phase 3 runs
- ✏️ If needs changes: Edit files, commit, then add label
- 🔄 If incomplete: Comment for agent to revise, wait

### Decision Point 2: After Phase 3 (README Complete)
**Location**: PR with generated content

**Review**:
- `tech-talks/[topic]/README.md` - Complete tech talk
- Artifact files (configs, code samples)
- Images in `images/` directory

**Actions**:
- ✅ If satisfied: Add `tech-talk:slides` label → Phase 4 runs
- 💬 If needs changes: Comment on PR, agent revises
- 🔄 If major issues: Close PR, edit research files, re-trigger Phase 3

### Decision Point 3: After Phase 4 (Slides Complete)
**Location**: PR with slides added

**Review**:
- `slides/tech-talks/[topic].md` - Slidev presentation
- Build status (slides must render correctly)

**Actions**:
- ✅ If satisfied: Merge PR
- 💬 If needs changes: Comment on PR, regenerate slides
- 🏷️ Optional: Add `tech-talk:complete` label for tracking

## Quick Reference: Who Does What

| Action | Performed By | Trigger |
|--------|-------------|---------|
| Create issue | 👤 Human | Manual |
| Add `tech-talk` + `tech-talk:intake` labels | 🤖 Template | Automatic |
| Run Phase 1 (Intake) | 🤖 Workflow | Automatic (label trigger) |
| Add `tech-talk:planned` label | 🤖 Phase 1 | Automatic |
| Run Phase 2 (Research) | 🤖 Workflow | Automatic (label trigger) |
| Review research files | 👤 Human | Manual |
| Add `tech-talk:ready` label | 👤 Human | Manual (after review) |
| Run Phase 3 (Build) | 🤖 Workflow | Automatic (label trigger) |
| Review PR with README | 👤 Human | Manual |
| Add `tech-talk:slides` label | 👤 Human | Manual (after review) |
| Run Phase 4 (Slides) | 🤖 Workflow | Automatic (label trigger) |
| Review slides | 👤 Human | Manual |
| Merge PR | 👤 Human | Manual |
| Add `tech-talk:complete` label | 👤 Human | Manual (optional) |

## Label Purpose Summary

### Progress Labels (track current phase)
- `tech-talk:intake` - Phase 1 in progress
- `tech-talk:planned` - Phase 2 in progress
- `tech-talk:ready` - Phase 3 in progress or complete
- `tech-talk:slides` - Phase 4 in progress or complete
- `tech-talk:complete` - All phases done, PR merged

### Why Manual Review Labels?

**Problem**: Agents cannot reliably update GitHub issue labels via API

**Solution**: Humans add labels after reviewing each phase's output

**Benefits**:
- ✅ Guarantees human review before expensive operations
- ✅ Allows editing research/plan before generation
- ✅ Predictable workflow progression
- ✅ Clear audit trail of approvals

## Example Timeline

```
00:00 - Human creates issue
        ↓ 🤖 Template applies labels
00:01 - Phase 1 runs (2 min)
        ↓ 🤖 Phase 1 adds tech-talk:planned
00:03 - Phase 2 runs (15 min)
        ↓ Agent populates research files
00:18 - 👤 Human reviews research (manual)
        ↓ 👤 Human adds tech-talk:ready
00:20 - Phase 3 runs (20 min)
        ↓ Agent creates PR with README
00:40 - 👤 Human reviews PR (manual)
        ↓ 👤 Human adds tech-talk:slides
00:45 - Phase 4 runs (10 min)
        ↓ Agent adds slides to PR
00:55 - 👤 Human reviews & merges PR (manual)
        ↓ 👤 Human adds tech-talk:complete
01:00 - Complete ✅
```

**Total Time**: ~1 hour (35 min automated, 25 min human review)

## Troubleshooting

### "Phase 2 didn't add tech-talk:built label"
**Expected**: Phase 2 does NOT add labels. Human must review and add manually.

### "Phase 3 didn't start after Phase 2"
**Expected**: Human must add `tech-talk:ready` label after reviewing research files.

### "Agent tried to update labels but failed"
**Fixed**: New workflow design uses manual label progression for reliability.

### "How do I skip a phase?"
Add the next phase's label directly. For example:
- Skip Phase 2: Add `tech-talk:ready` immediately after Phase 1
- Skip Phase 3: Add `tech-talk:slides` after research review

### "How do I restart a phase?"
Remove the current phase label, then re-add it to trigger the workflow again.

## See Also

- Complete workflow: `.github/workflows/TECH-TALK-WORKFLOW.md`
- Label investigation: `.github/workflows/ISSUE-54-INVESTIGATION.md`
- Quick reference: `.github/workflows/QUICK-REFERENCE.md`
- Testing guide: `.github/workflows/TESTING-GUIDE.md`
