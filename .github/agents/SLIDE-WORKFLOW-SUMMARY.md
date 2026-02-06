# Integrated Slide Generation, Verification, and Fixing Workflow

## Overview

This document describes the integrated workflow where the `slide-generator` agent automatically creates, verifies, and fixes slides using Playwright validation, ensuring slides are correct before completion.

## Architecture

```
slide-generator.agent.md (main orchestrator)
    │
    ├─> Generates slides from README
    │
    ├─> @slide-verifier skill (validation)
    │   └─> Playwright browser testing
    │       └─> Reports issues with screenshots
    │
    ├─> @slide-fixer skill (auto-repair)
    │   └─> Splits overflowing slides
    │   └─> Fixes broken images
    │   └─> Preserves all content
    │
    └─> Iteration loop (max 3 times)
        └─> Does NOT complete until verified
```

## Key Components

### 1. slide-generator Agent

**Location**: `.github/agents/slide-generator.agent.md`

**Responsibilities**:
- Parse module README files
- Generate Slidev presentation slides
- Update `slides/index-custom.html` navigation
- **[MANDATORY]** Verify slides with Playwright
- **[MANDATORY]** Fix issues if found
- **[MANDATORY]** Iterate until passing or max 3 attempts
- **[MANDATORY]** Do NOT complete until verified

**Critical Requirements**:
- Uses random ports (3030-3999) to avoid collisions
- Enforces verification before completion
- Invokes fixer automatically when issues found
- Reports final status with iteration details

### 2. slide-verifier Skill

**Location**: `.github/skills/slide-verifier/`

**Responsibilities**:
- Start Slidev dev server on specified port
- Use Playwright to check each slide
- Detect content overflow, broken images, console errors
- Generate detailed reports with screenshots
- Return pass/fail status

**Port Management**:
```bash
# Uses --port parameter to avoid collisions
verify-slides.mjs workshop/03-custom-prompts.md --port=3456
```

**Output**:
- Reports: `slides/verification-reports/{deck}-{timestamp}.md`
- Screenshots: `slides/screenshots/{issue}-{deck}-slide-{N}.png`

### 3. slide-fixer Skill

**Location**: `.github/skills/slide-fixer/`

**Responsibilities**:
- Read verification reports
- Split overflowing slides (preserves content)
- Fix broken image paths
- Correct console errors
- Maintain visual consistency

**Strategy**:
- PRIMARY: Split into multiple slides
- EXCEPTION: Reduce code font size if code-heavy
- NEVER: Remove content or reduce bullet points

## Workflow Steps

### Step 1: Generate Slides

Agent reads module README and creates slide deck:
```
Input:  workshop/03-custom-prompts/README.md
Output: slides/workshop/03-custom-prompts.md
```

### Step 2: Update Navigation

Agent updates index with new slide entry:
```
Modified: slides/index-custom.html
```

### Step 3: Initial Verification (MANDATORY)

Agent generates random port and verifies:
```bash
port = 3030 + random(0-969)  # e.g., 3456
@slide-verifier verify workshop/03-custom-prompts --port=3456
```

**If PASS**: Go to Step 7
**If FAIL**: Go to Step 4

### Step 4: Fix Issues (MANDATORY)

Agent invokes fixer to resolve critical issues:
```bash
@slide-fixer fix workshop/03-custom-prompts
```

Fixer reads report, applies fixes, preserves content.

### Step 5: Re-Verification (MANDATORY)

Agent generates new random port and re-verifies:
```bash
port = 3030 + random(0-969)  # e.g., 3789
@slide-verifier verify workshop/03-custom-prompts --port=3789
```

**If PASS**: Go to Step 7
**If FAIL**: Go to Step 6

### Step 6: Iteration Check

Agent checks iteration count:
- **If < 3 iterations**: Go to Step 4
- **If >= 3 iterations**: Go to Step 7 (report warnings)

### Step 7: Report Final Status

Agent reports completion with verification results:

```markdown
## Slide Generation Complete

**Deck**: workshop/03-custom-prompts
**Slides Generated**: 18 slides
**Verification**: ✅ PASSED

### Iteration Summary
- Iteration 1: 2 overflow issues found → Fixed
- Iteration 2: ✅ All checks passed

### Files Modified
- Created: slides/workshop/03-custom-prompts.md
- Updated: slides/index-custom.html
- Report: slides/verification-reports/workshop-03-custom-prompts-2026-02-06T02-00.md
```

## Port Management

To support concurrent verifications and avoid port collisions:

### Random Port Generation

```javascript
// Generate port between 3030-3999
const randomPort = 3030 + Math.floor(Math.random() * 970);
```

### Usage in Verification

```bash
# First verification
verify-slides.mjs workshop/03-custom-prompts.md --port=3456

# Re-verification with different port
verify-slides.mjs workshop/03-custom-prompts.md --port=3789
```

### Why Different Ports

- Each Slidev dev server needs unique port
- Multiple verifications may run simultaneously
- Previous server may still be shutting down
- Random generation minimizes collision probability

## Success Criteria

A slide deck workflow is complete when:

✅ Slides generated from README
✅ Index navigation updated
✅ Verified with Playwright
✅ All critical issues resolved OR max iterations reached
✅ Final status reported with verification details
✅ Agent does NOT complete until verification passes

## Error Handling

### Verification Never Passes

After 3 iterations, agent reports remaining issues:
```markdown
⚠️ WARNINGS: Unable to resolve all issues after 3 iterations

Remaining Issues:
- Slide 5: Console error (non-blocking)
- Slide 12: Long text block (warning only)

Manual review recommended.
```

### Port Already in Use

If random port is occupied:
- Verification fails with port error
- Agent generates new random port
- Retries verification
- Not counted as iteration (infrastructure error)

### Skill Invocation Fails

If skill fails to invoke:
- Agent reports skill error
- Does NOT complete workflow
- User must investigate skill configuration

## Testing

### Verify Port Management Works

```bash
cd /home/runner/work/CopilotTraining/CopilotTraining

# Test with custom port
.github/skills/slide-verifier/scripts/verify-slides.mjs \
  workshop/00-orientation.md --port=3456

# Test with different port
.github/skills/slide-verifier/scripts/verify-slides.mjs \
  workshop/01-instructions.md --port=3789
```

### Verify Skills Are Invokable

```bash
# Check slide-verifier skill
@slide-verifier verify workshop/00-orientation --port=3456

# Check slide-fixer skill
@slide-fixer fix workshop/03-custom-prompts
```

### Verify Full Workflow

Invoke slide-generator agent with module path and observe:
1. Slides are generated
2. Verification runs automatically
3. Fixer runs if issues found
4. Re-verification runs
5. Agent reports final status
6. Agent does NOT complete until verified

## Files Modified

This implementation modified:

1. **`.github/agents/slide-generator.agent.md`**
   - Added mandatory verification requirements
   - Added port management instructions
   - Added iteration loop logic
   - Added completion criteria

2. **`.github/skills/slide-verifier/SKILL.md`**
   - Documented --port parameter
   - Updated integration instructions
   - Added port management examples

3. **`.github/skills/slide-fixer/SKILL.md`**
   - Updated workflow integration
   - Added iteration loop documentation
   - Clarified mandatory invocation

## Benefits

1. **Quality Assurance**: Every slide deck is validated before completion
2. **Automation**: No manual verification needed
3. **Consistency**: All decks follow same standards
4. **Visibility**: Reports show exactly what was checked
5. **Safety**: Content preserved during fixes
6. **Scalability**: Port management enables concurrent workflows

## Future Enhancements

1. **Port Pool**: Implement guaranteed unique port allocation
2. **Parallel Verification**: Verify multiple decks simultaneously
3. **Cache Results**: Skip re-verification for unchanged slides
4. **Confidence Scoring**: Fixer reports fix confidence level
5. **Progressive Enhancement**: Auto-apply high-confidence fixes only
