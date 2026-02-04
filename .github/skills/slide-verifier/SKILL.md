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

### Step 2: Start Slidev Development Server

For each deck to verify:

```bash
cd slides
npx slidev <slide-file>.md --port 3030 &
SLIDEV_PID=$!
```

Wait 5-10 seconds for server startup, then proceed to verification.

### Step 3: Run Playwright Verification

Create a Node.js script that uses Playwright to check slides:

```javascript
const { chromium } = require('playwright');

async function verifySlides(baseUrl, deckName) {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  
  const issues = [];
  
  // Navigate to the presentation
  await page.goto(baseUrl);
  
  // Get total slide count
  const totalSlides = await page.evaluate(() => {
    return window.__slidev?.total || 0;
  });
  
  console.log(`🔍 Verifying ${totalSlides} slides in ${deckName}...`);
  
  // Check each slide
  for (let i = 1; i <= totalSlides; i++) {
    await page.goto(`${baseUrl}/${i}`);
    await page.waitForTimeout(500); // Let animations settle
    
    // Check 1: Console errors
    const errors = [];
    page.on('console', msg => {
      if (msg.type() === 'error') errors.push(msg.text());
    });
    
    // Check 2: Vertical overflow detection
    const hasOverflow = await page.evaluate(() => {
      const slideContent = document.querySelector('.slidev-layout');
      if (!slideContent) return false;
      
      const contentHeight = slideContent.scrollHeight;
      const viewportHeight = slideContent.clientHeight;
      
      return contentHeight > viewportHeight + 10; // 10px tolerance
    });
    
    if (hasOverflow) {
      const screenshot = `overflow-${deckName.replace(/\//g, '-')}-slide-${i}.png`;
      await page.screenshot({ path: `screenshots/${screenshot}` });
      issues.push({
        slide: i,
        type: 'overflow',
        message: 'Content exceeds slide viewport height',
        screenshot
      });
    }
    
    // Check 3: Missing images/assets
    const brokenImages = await page.evaluate(() => {
      const imgs = Array.from(document.querySelectorAll('img'));
      return imgs
        .filter(img => !img.complete || img.naturalHeight === 0)
        .map(img => img.src);
    });
    
    if (brokenImages.length > 0) {
      issues.push({
        slide: i,
        type: 'broken-images',
        message: `Missing images: ${brokenImages.join(', ')}`
      });
    }
    
    // Check 4: Console errors during render
    if (errors.length > 0) {
      issues.push({
        slide: i,
        type: 'console-errors',
        message: `Console errors: ${errors.join('; ')}`
      });
    }
    
    // Check 5: Very long text blocks (readability)
    const longTextBlocks = await page.evaluate(() => {
      const blocks = Array.from(document.querySelectorAll('p, li'));
      return blocks
        .filter(el => el.textContent.length > 200)
        .length;
    });
    
    if (longTextBlocks > 0) {
      issues.push({
        slide: i,
        type: 'readability',
        severity: 'warning',
        message: `${longTextBlocks} text block(s) exceed 200 characters`
      });
    }
  }
  
  await browser.close();
  return issues;
}
```

### Step 4: Generate Verification Report

Produce a structured report:

```markdown
# Slide Verification Report

**Deck**: workshop/03-custom-prompts
**Date**: 2026-02-04 23:45:00
**Total Slides**: 12
**Issues Found**: 3

## Critical Issues ❌

### Slide 5: Content Overflow
- **Type**: overflow
- **Message**: Content exceeds slide viewport height
- **Screenshot**: [overflow-workshop-03-custom-prompts-slide-5.png](screenshots/overflow-workshop-03-custom-prompts-slide-5.png)
- **Fix**: Split content into multiple slides or use two-column layout

### Slide 8: Broken Images
- **Type**: broken-images
- **Message**: Missing images: /assets/diagram.png
- **Fix**: Verify image path and ensure file exists

## Warnings ⚠️

### Slide 3: Readability
- **Type**: readability  
- **Message**: 2 text blocks exceed 200 characters
- **Fix**: Consider breaking into bullet points or multiple slides

## Summary

✅ **9 slides passed** all checks
❌ **2 slides have critical issues** requiring fixes
⚠️ **1 slide has warnings** (optional improvements)
```

### Step 5: Cleanup

Kill the Slidev server:

```bash
kill $SLIDEV_PID
```

## Output Format

Return verification results as:

1. **Console summary** during execution:
   ```
   🔍 Verifying workshop/03-custom-prompts...
   ✅ Slide 1: OK
   ✅ Slide 2: OK
   ❌ Slide 3: Content overflow detected
   ...
   ```

2. **Markdown report** saved to `slides/verification-reports/<deck-name>-<timestamp>.md`

3. **Screenshots** of problematic slides in `slides/screenshots/`

4. **Exit code**:
   - `0` = All slides passed
   - `1` = Issues found (with report)

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

Ensure these are installed in the slides directory:

```json
{
  "devDependencies": {
    "@playwright/test": "^1.40.0",
    "playwright": "^1.40.0"
  }
}
```

If missing, install with:
```bash
cd slides
npm install --save-dev playwright @playwright/test
npx playwright install chromium
```

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

## Directory Structure

```
slides/
├── verification-reports/
│   ├── workshop-03-custom-prompts-2026-02-04-234500.md
│   └── tech-talks-copilot-cli-2026-02-04-235000.md
├── screenshots/
│   ├── overflow-workshop-03-custom-prompts-slide-5.png
│   └── broken-img-tech-talks-copilot-cli-slide-3.png
└── verify-slides.mjs  # The Playwright verification script
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
