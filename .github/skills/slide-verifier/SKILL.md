---
name: slide-verifier
description: Verify Slidev slides using Playwright - checks rendering, detects overflow, validates layouts, and reports issues with screenshots. Also supports fast static linting without Playwright.
infer: true
---

# Slide Verifier Skill (Condensed)

**📖 Full Documentation:** See `/docs/skills/slide-verifier-FULL.md` for complete instructions, examples, and troubleshooting.

Verify Slidev presentation slides by running automated checks using Playwright to catch rendering issues, content overflow, broken assets, and navigation problems.

## Quick Usage

```bash
# 1. LINT MODE (FASTEST - Start here, ~200ms)
.github/skills/slide-verifier/scripts/verify-slides.mjs workshop/03-custom-prompts.md --lint-mode

# 2. SMART MODE (RECOMMENDED - Lint first, Playwright only if needed)
.github/skills/slide-verifier/scripts/verify-slides.mjs workshop/03-custom-prompts.md --smart

# 3. FULL MODE (Complete validation with screenshots)
.github/skills/slide-verifier/scripts/verify-slides.mjs workshop/03-custom-prompts.md

# Check all slides
.github/skills/slide-verifier/scripts/verify-slides.mjs --all --smart
```

## Three Modes

### 1. Lint Mode (FASTEST)
Static analysis in milliseconds without server/browser.
- ✅ Max bullets per slide (5)
- ✅ Code block length (15 lines)
- ✅ Text block length (200 chars)
- ✅ Missing image files
- ✅ Frontmatter validation
- ✅ Empty slides
- ✅ Heading depth

### 2. Smart Mode (RECOMMENDED)
Runs lint first, only uses Playwright if lint finds issues or user requests full check.

### 3. Full Mode (COMPLETE)
Always runs Playwright with screenshots.
- Visual overflow detection
- Broken image detection
- Navigation testing
- Layout validation
- Element positioning
- Screenshot evidence

## Key Features

- **Fast feedback** - Lint mode in ~200ms
- **Visual proof** - Screenshots of issues
- **Automated** - Run in CI/CD
- **Actionable** - VS Code problem matcher integration

## Output Interpretation

```
✅ PASS: All 15 slides verified
⚠️  WARNINGS: 2 slides with minor issues
❌ ERRORS: 1 slide with critical issues
```

Issues include slide numbers, screenshots (in full mode), and actionable descriptions.

**Remember:** See `/docs/skills/slide-verifier-FULL.md` for detailed documentation, advanced usage, and troubleshooting.
