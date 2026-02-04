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

The repository includes a standalone verification script at `slides/verify-slides.mjs` that handles:
- Starting Slidev dev server
- Playwright automation
- Issue detection and reporting
- Cleanup

**Usage:**

```bash
cd slides

# Verify a single deck
node verify-slides.mjs workshop/03-custom-prompts.md

# Verify all decks
node verify-slides.mjs --all

# Verify with exit code (for CI/CD)
node verify-slides.mjs tech-talks/copilot-cli.md --fail-on-errors
```

**The script automatically:**
1. Starts a Slidev dev server on port 3030
2. Uses Playwright to visit each slide
3. Performs all checks (overflow, images, errors, readability)
4. Captures screenshots of problems
5. Generates a detailed report
6. Cleans up the server process

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
**Detection**: `scrollHeight > clientHeight`
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

The verification script (`slides/verify-slides.mjs`) requires:

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

**Script location:** `slides/verify-slides.mjs`

The script is a standalone tool - it can be called directly from command line, CI/CD pipelines, or by agents through the skill interface.

## Best Practices

1. **Verify after generation**: Always run verification after creating/updating slides
2. **Check before commit**: Include in pre-commit workflow
3. **Fix critical issues first**: Overflow and broken images break user experience
4. **Consider warnings**: Readability warnings improve quality but aren't blocking
5. **Keep screenshots**: Visual evidence helps debug issues
6. **Batch verification**: Check all decks when making global changes (layouts, styles)

## Integration with Slide Generator Agent

The slide-generator agent can invoke this skill at the end of its workflow:

```markdown
After generating slides:
1. Write slide file
2. Update index-custom.html
3. @slide-verifier verify the deck
4. Report any issues found
5. Fix critical issues if found
6. Re-verify after fixes
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
node verify-slides.mjs workshop/03-custom-prompts
```

**Verify all workshop slides:**
```bash
for file in workshop/*.md; do
  node verify-slides.mjs "$file"
done
```

**CI/CD integration:**
```yaml
- name: Verify slides
  run: |
    cd slides
    npm install
    npx playwright install chromium
    node verify-slides.mjs --all --fail-on-errors
```
