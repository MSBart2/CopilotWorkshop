---
name: slide-verifier
description: Verify Slidev slides using Playwright - checks rendering, detects overflow, validates layouts, and reports issues with screenshots. Also supports fast static linting without Playwright.
infer: true
---

# Slide Verifier Skill

You verify Slidev presentation slides by running automated checks using Playwright to catch rendering issues, content overflow, broken assets, and navigation problems. Also provides fast static linting for quick feedback during editing.

## When to Use This Skill

Invoke this skill when:

- Slides have been generated and need verification before commit
- User asks to "verify slides", "check slides", "lint slides", or "test slides"
- Investigating visual/rendering issues
- Running pre-deployment validation
- Checking a specific slide deck or all decks
- Fast feedback needed during editing (use lint mode)

**RECOMMENDED: Always start with lint mode for immediate feedback, then use smart mode for full validation.**

**Example invocations:**

- "@slide-verifier lint workshop/03-custom-prompts.md" (FASTEST - start here)
- "@slide-verifier check workshop/03-custom-prompts.md --smart" (RECOMMENDED - lint + Playwright if needed)
- "@slide-verifier check all slides --smart"
- "Verify the workshop/03-custom-prompts slides"
- "Test slides for rendering issues"
- "Run static lint on all tech talks"
- "Check if tech-talks/copilot-cli has overflow problems"

## Three Modes of Operation (Ranked by Recommended Use)

### 1. Lint Mode (FASTEST - Start Here)

Static analysis that runs in milliseconds without starting a server or browser.

**When to use:**

- ✅ FIRST step after generating slides
- ✅ During active development/editing
- ✅ CI/CD pre-commit checks
- ✅ Quick validation before Playwright

**Perfect for:**

- **Rapid feedback during editing** - Check rules as you write
- **Early issue detection** - Catch 80% of problems in 200ms
- **CI/CD pipelines** - Fast gate before expensive Playwright runs
- **Iterative fixes** - Verify fixes immediately without waiting

**What it checks:**

✅ **Max bullets per slide** (default: 5) - Prevents overflow
✅ **Code block length** (default: 15 lines) - Maintains readability
✅ **Text block length** (default: 200 chars) - Ensures digestibility
✅ **Missing image files** - Detects broken references
✅ **Frontmatter validation** - Required fields check
✅ **Empty slides** - Finds content-less slides
✅ **Heading depth** (default: max 3 levels) - Slide clarity
✅ **Total slide count** (optional) - Presentation length warning

**Usage:**

```bash
# Lint single deck (instant feedback) - USE THIS FIRST
.github/skills/slide-verifier/scripts/verify-slides.mjs workshop/03-custom-prompts.md --lint-mode

# Lint all decks
.github/skills/slide-verifier/scripts/verify-slides.mjs --all --lint-mode

# Lint with exit code for CI/CD
.github/skills/slide-verifier/scripts/verify-slides.mjs tech-talks/copilot-cli.md --lint-mode --fail-on-errors
```

**Output format:**

```
workshop/03-custom-prompts.md:45:1: warning: [max-bullets-per-slide] Slide 5 has 7 bullets (max 5 recommended for readability)
workshop/03-custom-prompts.md:89:1: error: [missing-image-files] Image not found: images/diagram.png
tech-talks/copilot-cli.md:120:1: warning: [max-code-lines] Slide 12 has code block with 23 lines (max 15 recommended - consider splitting)
```

This format integrates with VS Code's problem matcher - issues appear in the Problems panel!

### 2. Smart Mode (RECOMMENDED - Best Balance)

**The best of both worlds** - runs fast lint first, only uses Playwright when needed.

**When to use:**

- ✅ After fixing lint issues
- ✅ Final validation before commit
- ✅ When you need visual proof of fixes
- ✅ Automated testing with efficiency

**The best of both worlds** - runs fast lint first, only uses Playwright when needed.

**How it works:**

1. **Run static lint** on all files (fast - ~200ms per file)
2. **Check results:**
   - If errors found → Proceed to step 3
   - If only warnings or clean → Done! (saves 2-3 minutes per deck)
3. **Run Playwright verification** only on files with errors
4. **Generate screenshots** for visual evidence of issues

**Perfect for:**

- ✅ Regular development workflow
- ✅ Pre-commit checks
- ✅ CI/CD pipelines (fast gate, thorough on issues)
- ✅ Bulk verification with selective deep-dive

**Usage:**

```bash
# Smart verify single deck
.github/skills/slide-verifier/scripts/verify-slides.mjs workshop/03-custom-prompts.md --smart

# Smart verify all decks
.github/skills/slide-verifier/scripts/verify-slides.mjs --all --smart

# Smart verify with strict mode
.github/skills/slide-verifier/scripts/verify-slides.mjs --all --smart --fail-on-errors
```

**Example output:**

```
🧠 Running smart verification (lint first, Playwright if needed)...

📋 Linting: workshop/03-custom-prompts.md
  ⚠️  48 warning(s)
📋 Linting: tech-talks/copilot-cli.md
  ❌ 2 error(s), 5 warning(s)

LINT SUMMARY
============================================================
Checked 2 file(s)
Found 2 error(s), 53 warning(s)

⚠️  1 file(s) have errors - running full Playwright verification...

============================================================
Verifying with Playwright: tech-talks/copilot-cli.md
============================================================
🚀 Starting Slidev server on port 3045...
✅ Server ready

🔍 Verifying 18 slides in tech-talks/copilot-cli.md...
  ❌ Slide 12: Content overflow
     └─ #slide-content: 45px overflow (765px / 720px)

📄 Report saved: slides/verification-reports/tech-talks-copilot-cli-2026-02-06T18-45-12.md
📸 Screenshots saved to: slides/screenshots

SMART VERIFICATION COMPLETE
============================================================
Linted: 2 file(s)
Playwright verified: 1 file(s)
Skipped: 1 file(s) (no errors)
```

**Time savings:**

- Without --smart: 2 decks × 3 min = 6 minutes
- With --smart: Lint (0.4s) + 1 verification (3 min) = 3 minutes
- **Saved 50% of verification time!** ⚡

## Recommended Workflow

**For ALL slide generation/editing, follow this sequence:**

```
STEP 1: Generate slides
  ↓
STEP 2: Run LINT (--lint-mode)
  ├─ Errors? → Fix immediately, re-run lint
  ├─ Warnings? → Fix high-impact issues
  └─ Clean? → Continue to Step 3
  ↓
STEP 3: Run SMART verification (--smart)
  ├─ Lint errors → Runs Playwright + screenshots
  └─ Clean → Skips Playwright (done!)
  ↓
STEP 4: If issues found → Fix and re-run from Step 2
```

**Time comparison:**

| Approach        | Time               | Catches Issues          |
| --------------- | ------------------ | ----------------------- |
| Only Playwright | ~3 min             | Yes (late)              |
| Lint → Smart    | ~3.2 sec + 0-3 min | Yes (early)             |
| **Savings**     | **~50% average**   | **80% faster feedback** |

**Best practices:**

1. ✅ **Always lint first** - Catches 80% of issues in 200ms
2. ✅ **Fix lint errors before Playwright** - Don't waste 3 min verifying known issues
3. ✅ **Use smart mode for final check** - Only runs Playwright when needed
4. ❌ **Don't skip lint** - It's 200ms, just do it
5. ❌ **Don't use full Playwright first** - Too slow for iteration

### Step 1: Identify Slide Decks to Verify

Determine which slides to check:

1. **Specific deck requested**: User provides path (e.g., `workshop/03-custom-prompts`)
2. **All decks**: Scan `slides/` directory for `.md` files in:
   - `slides/workshop/*.md`
   - `slides/tech-talks/*.md`
   - `slides/exec-talks/*.md`
3. **Recently changed**: Use git to find modified slides (if context allows)

### Step 2: Run the Verification Script

The skill includes an enhanced verification script (`verify-slides.mjs`) that provides:

- **Always-on detailed measurements** - Shows height measurements for all containers on every slide
- **Screenshot capture by default** - Visual evidence for all slides (use `--no-screenshots` to skip)
- **Configurable tolerance** - Default 5px, use `--tolerance=0` for strictest checking
- **Multiple selector checking** - Tries `#slide-content`, `.slidev-layout`, `.slidev-page`, `main` to find the right container
- **CI/CD support** - `--all` and `--fail-on-errors` flags for automation

**Usage:**

```bash
# Verify single deck (default: captures all screenshots, 5px tolerance, random port)
.github/skills/slide-verifier/scripts/verify-slides.mjs workshop/03-custom-prompts.md

# Verify all decks
.github/skills/slide-verifier/scripts/verify-slides.mjs --all

# Verify with exit code (for CI/CD)
.github/skills/slide-verifier/scripts/verify-slides.mjs tech-talks/copilot-cli.md --fail-on-errors

# Strictest checking (0px tolerance)
.github/skills/slide-verifier/scripts/verify-slides.mjs workshop/03-custom-prompts.md --tolerance=0

# Skip screenshots for faster execution
.github/skills/slide-verifier/scripts/verify-slides.mjs tech-talks/copilot-cli.md --no-screenshots

# Use specific port (useful for debugging)
.github/skills/slide-verifier/scripts/verify-slides.mjs workshop/03-custom-prompts.md --port=3050
```

**Port randomization for parallel execution:**

- By default, a random port (3030-3130) is used
- Allows multiple verifications to run in parallel without conflicts
- Use `--port=XXXX` to override with a specific port

**The script automatically:**

1. Finds the workspace slides directory
2. Starts a Slidev dev server
3. Uses Playwright to visit each slide
4. Performs all checks:
   - ✅ **Overflow detection**: Checks `#slide-content` (primary), `.slidev-layout`, and `.slidev-page` selectors with 5px tolerance
   - ✅ **Broken images**: Detects failed image loads
   - ✅ **Console errors**: Captures JavaScript errors
   - ✅ **Readability**: Flags overly long text blocks (>200 chars)
5. Captures screenshots of problematic slides
6. Generates a detailed markdown report
7. Cleans up the server process

**Key Implementation Details:**

- Uses **`#slide-content`** as primary selector (most Slidev slides use this)
- Falls back to `.slidev-layout`, `.slidev-page`, `main` if needed
- **5px tolerance** for overflow (configurable with `--tolerance=N`)
- **Always captures screenshots** by default (use `--no-screenshots` to skip)
- **Detailed measurements table** in every report showing all container heights
- Reports show which selector detected overflow issues

**Output directories:**

- Reports: `slides/verification-reports/`
- Screenshots: `slides/screenshots/`

### Step 3: Review the Output

The script provides:

**1. Console output during execution:**

```
🔍 Verifying 12 slides in workshop/03-custom-prompts.md...
  ✅ Slide 1: OK
  ✅ Slide 2: OK
  ❌ Slide 3: Content overflow
  ✅ Slide 4: OK
  ⚠️ Slide 5: Console errors
  ...
```

**2. Markdown report** saved to `slides/verification-reports/<deck-name>-<timestamp>.md`

**3. Screenshots** of problematic slides in `slides/screenshots/`

**4. Exit code:**

- `0` = All slides passed (or warnings only)
- `1` = Critical issues found (when using `--fail-on-errors`)

### Step 4: Report Issues to User

Parse the generated report and present findings in a clear, actionable format:

```markdown
## Verification Results for workshop/03-custom-prompts

**Status**: ❌ Issues Found

### Critical Issues

- **Slide 5**: Content overflow (content exceeds viewport by 150px)
  - Fix: Split into slides 5a and 5b, or use two-column layout
  - Screenshot: [View](slides/screenshots/overflow-workshop-03-custom-prompts-slide-5.png)

- **Slide 8**: Broken image
  - Missing: `/assets/diagram.png`
  - Fix: Verify file exists and path is correct

### Warnings

- **Slide 3**: Long text block (245 characters)
  - Consider breaking into bullet points

### Next Steps

1. Fix critical issues in slides 5 and 8
2. Re-run verification to confirm fixes
3. Consider addressing warnings for improved readability
```

## Output Format

The `verify-slides.mjs` script automatically generates:

1. **Real-time console output** showing progress and immediate results
2. **Markdown report** in `slides/verification-reports/` directory
3. **Screenshots** of problematic slides in `slides/screenshots/` directory
4. **Exit code** for automation (0 = success, 1 = critical issues when using `--fail-on-errors`)

**Report structure:**

```
slides/
├── verification-reports/
│   └── workshop-03-custom-prompts-2026-02-04T234500.md
└── screenshots/
    └── overflow-workshop-03-custom-prompts-slide-5.png
```

## Common Issues and Fixes

### Content Overflow

**Symptom**: Content spills off bottom of slide
**Detection**: Checks `#slide-content` scrollHeight vs clientHeight (5px tolerance)
**Fix suggestions**:

- Split into multiple slides ("Topic 1/2", "Topic 2/2")
- Use `layout: two-cols` for side-by-side content
- Reduce bullet points (max 5 per column)
- Move detailed content to speaker notes

### Broken Images

**Symptom**: Image fails to load
**Detection**: `img.complete === false` or `naturalHeight === 0`
**Fix suggestions**:

- Verify file exists at specified path
- Check relative vs absolute path
- Ensure image is committed to repo
- Use correct public asset path

### Console Errors

**Symptom**: JavaScript errors in browser console
**Detection**: `console.error()` messages
**Fix suggestions**:

- Check for malformed frontmatter
- Verify component syntax
- Ensure all imports resolve
- Check for typos in layout names

### Long Text Blocks

**Symptom**: Paragraph or list item > 200 characters
**Detection**: `textContent.length > 200`
**Fix suggestions**:

- Break into multiple bullet points
- Use shorter sentences
- Move details to separate slide
- Consider visual alternative (diagram, table)

## Technical Requirements

The verification script requires:

**Dependencies (in `slides/package.json`):**

```json
{
  "devDependencies": {
    "@playwright/test": "^1.40.0",
    "playwright": "^1.40.0"
  }
}
```

**Installation (if missing):**

```bash
cd slides
npm install --save-dev playwright @playwright/test
npx playwright install chromium
```

**Script location:** `scripts/verify-slides.mjs` (within this skill directory)

The script is self-contained and automatically finds the workspace slides directory. It can be called from anywhere in the workspace.

## VS Code Integration

### Automatic Linting on Save

The workspace includes VS Code tasks for automatic linting. Problems appear directly in the **Problems panel** with jump-to-line support.

**Available tasks** (Run via `Tasks: Run Task`):

1. **Lint Slidev Slides** - Lint current file, show results in Problems panel
2. **Lint All Slides** - Lint entire workspace
3. **Verify Slidev Slides (Full)** - Full Playwright verification of current file
4. **Auto-Lint on Save** - Background linting (optional manual trigger)

**Keyboard shortcuts:**

- `Ctrl+Shift+P` → `Tasks: Run Task` → Select task
- Configure keybindings in `keybindings.json` for faster access

**Example keybinding:**

```json
{
  "key": "ctrl+shift+l",
  "command": "workbench.action.tasks.runTask",
  "args": "Lint Slidev Slides"
}
```

### Customizing Lint Rules

Edit `.slidevlintrc.json` in workspace root to customize rules:

```json
{
  "rules": {
    "max-bullets-per-slide": {
      "enabled": true,
      "severity": "warning",
      "max": 5
    },
    "max-code-lines": {
      "enabled": true,
      "severity": "warning",
      "max": 15
    },
    "missing-image-files": {
      "enabled": true,
      "severity": "error"
    }
  }
}
```

**Configurable options:**

- `enabled`: `true` | `false` - Turn rule on/off
- `severity`: `"error"` | `"warning"` - Issue level
- `max`: number - Threshold for count-based rules
- `fields`: string[] - Required fields for frontmatter rule

**Common customizations:**

```json
// Stricter for workshops (more content density)
"max-bullets-per-slide": { "max": 4 },
"max-code-lines": { "max": 12 }

// Relaxed for tech talks (more detail)
"max-bullets-per-slide": { "max": 7 },
"max-code-lines": { "max": 20 }

// Disable specific rules
"max-text-block-length": { "enabled": false }

// Enable slide count warning
"max-slides-count": {
  "enabled": true,
  "max": 25,
  "severity": "warning"
}
```

### CI/CD Integration

Add to GitHub Actions workflow:

```yaml
- name: Lint Slidev Slides
  run: |
    .github/skills/slide-verifier/scripts/verify-slides.mjs --all --lint-mode --fail-on-errors

- name: Full Verification (on main branch)
  if: github.ref == 'refs/heads/main'
  run: |
    cd slides && npm install
    ../.github/skills/slide-verifier/scripts/verify-slides.mjs --all --fail-on-errors
```

**Benefits:**

- **Fast pre-commit** - Lint mode runs in seconds
- **Full pre-deploy** - Playwright verification on main branch
- **Fail fast** - Catch issues before merge
- **Artifact generation** - Save screenshots and reports

## Best Practices

### When to Use Each Mode

**Use Lint Mode when:**

- ✅ Editing slides (immediate feedback)
- ✅ Pre-commit checks (fast gate)
- ✅ Checking all decks (bulk validation)
- ✅ Content structure validation

**Use Full Verification when:**

- ✅ Before deployment (visual validation)
- ✅ After layout changes (ensure no regressions)
- ✅ Investigating overflow issues (need screenshots)
- ✅ Final sign-off before release

### Workflow Recommendations

1. **During editing**: Lint mode on save (instant feedback)
2. **Before commit**: Full lint of changed files
3. **Before PR**: Full verification with Playwright
4. **Before deployment**: Full verification of all decks
5. **After fixing**: Re-verify to confirm resolution

### Issue Priority

**Fix immediately:**

- ❌ Missing image files (breaks slides)
- ❌ Empty slides (confusing for audience)
- ❌ Content overflow (viewport issues)

**Fix before commit:**

- ⚠️ Too many bullets (readability)
- ⚠️ Long code blocks (split recommended)

**Consider fixing:**

- ⚠️ Long text blocks (break into points)
- ⚠️ Deep heading hierarchy (flatten structure)

## Integration with Other Skills

### slide-fixer Skill

When verification detects critical issues, use the **@slide-fixer** skill to automatically resolve them:

```markdown
Workflow:

1. @slide-verifier checks slides → finds overflow on slides 2, 9
2. @slide-fixer reads report → splits overflowing slides
3. @slide-verifier re-checks → confirms issues resolved
```

The fixer preserves all content by adding slides rather than reducing content.

### slide-generator Agent

The slide-generator agent should invoke verification at the end of its workflow:

```markdown
After generating slides:

1. Write slide file
2. Update index-custom.html
3. @slide-verifier verify the deck
4. If critical issues found:
   - @slide-fixer resolve issues
   - @slide-verifier re-verify
   - Iterate max 3 times
5. Report final status
```

## Success Criteria

A slide deck passes verification when:

- ✅ All slides render without console errors
- ✅ No content overflow (vertical scrolling required)
- ✅ All images load successfully
- ✅ Navigation works between all slides
- ✅ No JavaScript exceptions during interaction
- ⚠️ Text blocks are reasonably sized (warnings only)

## Example Usage

**Verify single deck:**

```bash
.github/skills/slide-verifier/scripts/verify-slides.mjs workshop/03-custom-prompts.md
```

**Verify all slides:**

```bash
.github/skills/slide-verifier/scripts/verify-slides.mjs --all
```

**CI/CD integration:**

```yaml
- name: Verify slides
  run: |
    .github/skills/slide-verifier/scripts/verify-slides.mjs --all --fail-on-errors
```

## Troubleshooting

### False Negatives (Script Missing Overflow)

If you see overflow in the browser but the script reports "✅ OK":

1. **Check the detailed measurements table** in the report - it shows heights for all containers
2. **Try stricter tolerance**: `--tolerance=0` for zero-tolerance checking
3. **Verify screenshots**: Always captured by default, look in `slides/screenshots/`
4. **Review the report**: Check which selectors were found vs not found

The verification script now includes all the diagnostic features needed to debug overflow issues:

- Shows measurements for ALL selectors (`.slidev-layout`, `#slide-content`, etc.)
- Captures screenshots of every slide (unless `--no-screenshots` specified)
- Generates detailed measurement tables
- Reports which container detected the issue

See [TROUBLESHOOTING.md](./TROUBLESHOOTING.md) for a real case study of diagnosing and fixing false negatives in the agent-orchestration.md deck.

### Script Hanging on Server Startup

If the server doesn't start within 30 seconds:

- Check if port 3030 is already in use: `lsof -i :3030`
- Kill existing process: `kill $(lsof -t -i:3030)`
- Check for syntax errors in the slide file

### Screenshots Not Capturing

Ensure the screenshots directory exists and is writable:

```bash
mkdir -p slides/screenshots
chmod 755 slides/screenshots
```
