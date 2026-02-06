# Slidev Linting Quick Reference

This workspace includes automatic linting for Slidev slides to catch common issues before they cause problems.

## Quick Start

### Smart Verify (Recommended)

**Lint first, Playwright only if errors found** - saves 50-70% of verification time!

**VS Code Task:**
- Press `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (Mac)
- Type: `Tasks: Run Task`
- Select: `Smart Verify Slides`

**Command Line:**
```bash
.github/skills/slide-verifier/scripts/verify-slides.mjs workshop/03-custom-prompts.md --smart
```

### Fast Lint Only

**VS Code Task:**
- Press `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (Mac)
- Type: `Tasks: Run Task`
- Select: `Lint Slidev Slides (Fast)`

**Command Line:**
```bash
.github/skills/slide-verifier/scripts/verify-slides.mjs workshop/03-custom-prompts.md --lint-mode
```

### Full Verification

```bash
.github/skills/slide-verifier/scripts/verify-slides.mjs workshop/03-custom-prompts.md
```

---

## Three Modes Explained

### 🧠 Smart Mode (Recommended)

**How it works:**
1. Run static lint (200ms)
2. If errors → Full Playwright verification
3. If warnings only → Skip Playwright (save 2-3 min)

**Use when:**
- Regular development workflow
- Pre-commit checks
- CI/CD pipelines
- Bulk verification

**Time savings:**
- Clean slides: ~200ms (vs 3 min)
- Slides with warnings: ~200ms (vs 3 min)
- Slides with errors: ~3 min (full check)

### ⚡ Lint Mode (Fastest)

**Pure static analysis** - no server, no browser, instant feedback

**Use when:**
- Editing slides
- Quick bulk check
- CI/CD pre-gate

**Time:** ~200ms per deck

### 🎭 Full Mode (Most Thorough)

**Always runs Playwright** - complete visual validation

**Use when:**
- Final sign-off
- Deployment validation
- Investigating overflow issues

**Time:** ~2-3 minutes per deck

---

## What Gets Checked (Lint Mode)

| Rule | Default | Description |
|------|---------|-------------|
| **max-bullets-per-slide** | 5 | Too many bullets cause overflow |
| **max-code-lines** | 15 lines | Long code blocks hard to read |
| **max-text-block-length** | 200 chars | Keep paragraphs digestible |
| **missing-image-files** | — | Broken image references |
| **no-empty-slides** | — | Slides with no content |
| **max-heading-depth** | 3 levels | Deep hierarchies confuse |
| **frontmatter-required-fields** | layout | Missing metadata |

---

## Customizing Rules

Edit `.slidevlintrc.json` in workspace root:

```json
{
  "rules": {
    "max-bullets-per-slide": {
      "enabled": true,
      "severity": "warning",
      "max": 5
    }
  }
}
```

**Options:**
- `enabled`: Turn rule on/off
- `severity`: `"error"` or `"warning"`
- `max`: Threshold for numeric limits

---

## VS Code Integration

Issues appear in the **Problems panel** (`Ctrl+Shift+M`) with:
- ✅ File name and line number
- ✅ Click to jump to issue
- ✅ Error vs. warning severity
- ✅ Rule name for reference

**Example output:**

```
workshop/03-custom-prompts.md(45,1): warning [max-bullets-per-slide]: Slide 5 has 7 bullets
tech-talks/copilot-cli.md(89,1): error [missing-image-files]: Image not found: images/diagram.png
```

---

## Common Fixes

### Too Many Bullets

**Before:**
```markdown
## Key Points

- Point 1
- Point 2
- Point 3
- Point 4
- Point 5
- Point 6
- Point 7
```

**After (split into 2 slides):**
```markdown
## Key Points (1/2)

- Point 1
- Point 2
- Point 3
- Point 4

---

## Key Points (2/2)

- Point 5
- Point 6
- Point 7
```

### Long Code Block

**Before:**
```markdown
```typescript
// 25 lines of code
```

**After (excerpt with link):**
```markdown
```typescript
// Show key parts (10-12 lines)
// ... rest omitted for slides
```

[Full example →](../examples/full-code.ts)
```

### Missing Image

**Fix:**
1. Check path: relative to slide file
2. Verify file exists: `ls images/diagram.png`
3. Update reference: `![Description](./images/diagram.png)`

---

## CI/CD Integration

Add to `.github/workflows/slides.yml`:

```yaml
- name: Lint Slides
  run: .github/skills/slide-verifier/scripts/verify-slides.mjs --all --lint-mode --fail-on-errors
```

---

## Need Help?

- View full docs: `.github/skills/slide-verifier/SKILL.md`
- Run `--help`: `.github/skills/slide-verifier/scripts/verify-slides.mjs --help`
- Invoke agent: `@slide-verifier lint all slides`
