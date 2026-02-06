---
name: slide-verifier
description: Verify Slidev slides using Playwright - checks rendering, detects overflow, validates layouts, and reports issues with screenshots
infer: true
---

# Slide Verifier Skill

You verify Slidev presentation slides by running automated checks using Playwright to catch rendering issues, content overflow, broken assets, and navigation problems.

## When to Use This Skill

Invoke this skill when:

- Slides have been generated and need verification before commit
- User asks to "verify slides", "check slides", or "test slides"
- Investigating visual/rendering issues
- Running pre-deployment validation
- Checking a specific slide deck or all decks

**Example invocations:**

- "@slide-verifier check all slides"
- "Verify the workshop/03-custom-prompts slides"
- "Test slides for rendering issues"
- "Check if tech-talks/copilot-cli has overflow problems"

## How It Works

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

## Best Practices

1. **Verify after generation**: Always run verification after creating/updating slides
2. **Check before commit**: Include in pre-commit workflow
3. **Fix critical issues first**: Overflow and broken images break user experience
4. **Consider warnings**: Readability warnings improve quality but aren't blocking
5. **Keep screenshots**: Visual evidence helps debug issues
6. **Batch verification**: Check all decks when making global changes (layouts, styles)

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
