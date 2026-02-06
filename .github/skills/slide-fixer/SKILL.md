---
name: slide-fixer
description: Automatically fix slide issues detected by verification - splits overflowing slides, repairs broken images, and resolves layout problems. Preserves all content by adding slides rather than reducing.
infer: true
---

# Slide Fixer Skill (Condensed)

**📖 Full Documentation:** See `/docs/skills/slide-fixer-FULL.md` for complete instructions, patterns, and examples.

Automatically fix slide issues detected by verification - splits overflowing slides, repairs broken images, and resolves layout problems.

## Quick Usage

```bash
# Fix specific slide deck
@slide-fixer fix workshop/03-custom-prompts.md

# Fix all slides
@slide-fixer fix all slides

# Fix with verification
@slide-fixer fix and verify workshop/03-custom-prompts.md
```

## What It Fixes

### 1. Content Overflow
- **Too many bullets** - Splits into multiple slides
- **Long code blocks** - Splits or uses scrollable regions
- **Long text** - Breaks into digestible chunks

### 2. Broken Images
- Checks if image files exist
- Updates paths if moved
- Adds placeholder if missing

### 3. Layout Issues
- Balances two-column layouts
- Fixes nested HTML depth
- Repairs tag mismatches

### 4. Navigation
- Updates TOC slide numbers
- Fixes `@click="$nav.go(N)"` references
- Maintains section anchors

## Fixing Philosophy

**NEVER REDUCE CONTENT** - Always split slides rather than removing content.

### Splitting Patterns

**Bullet overflow:**
```markdown
# Original Slide (8 bullets - TOO MANY)
```
→ Becomes →
```markdown
# Slide Title (Part 1)
- Bullets 1-4

---

# Slide Title (Part 2)
- Bullets 5-8
```

**Code overflow:**
```markdown
# Long Code (25 lines - TOO LONG)
```
→ Becomes →
```markdown
# Implementation (Part 1)
```javascript
// Lines 1-15
```

---

# Implementation (Part 2)
```javascript
// Lines 16-25
```
```

## Auto-Run After Generation

When generating slides, automatically run fixer if verification detects issues.

**Remember:** See `/docs/skills/slide-fixer-FULL.md` for complete splitting patterns, edge cases, and advanced fixes.
