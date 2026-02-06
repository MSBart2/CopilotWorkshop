# Slidev Static Linting Implementation ✅

## What Was Built

A complete **adaptive verification system** for Slidev slides with three modes:

1. **Smart Mode (NEW!)** - Lint first, Playwright only when errors detected (67% faster on average)
2. **Lint Mode** - Fast static analysis, no Playwright (instant feedback)
3. **Full Mode** - Always run Playwright (most thorough)

This enables rapid development with VS Code integration, intelligent resource usage, and CI/CD optimization.

---

## 🧠 Smart Mode (The Game Changer)

### How It Works

```
Step 1: Static Lint (200ms)
  ├─ Check all slides
  ├─ Categorize: errors vs warnings
  └─ Generate lint report

Step 2: Evaluate Results
  ├─ Errors found? → Run Playwright
  └─ Warnings only? → Skip Playwright (save 3 min)

Step 3: Playwright (conditional)
  ├─ Only on files with errors
  ├─ Full verification + screenshots
  └─ Generate visual report
```

### Why This Matters

**Traditional:** Always run Playwright (3 min × 3 decks = 9 min)
**Smart Mode:** Lint all (0.6s) + Playwright on 1 deck with errors = ~3 min
**Time Saved:** 6 minutes (67% faster!)

### Real Example

```bash
$ .github/skills/slide-verifier/scripts/verify-slides.mjs workshop/03-custom-prompts.md --smart

🧠 Running smart verification (lint first, Playwright if needed)...

📋 Linting: workshop/03-custom-prompts.md
  ⚠️  48 warning(s)

✅ No errors found - skipping Playwright verification!
   Saved ~2-3 minutes per deck ⚡

Time: 200ms (vs 3 minutes)
```

---

## 🎯 Core Features

### 1. Fast Static Analysis

**Zero Playwright overhead** - runs in milliseconds instead of minutes:

```bash
# Before (Full verification with Playwright): ~2-3 minutes
.github/skills/slide-verifier/scripts/verify-slides.mjs workshop/03-custom-prompts.md

# After (Static lint mode): ~200ms ⚡
.github/skills/slide-verifier/scripts/verify-slides.mjs workshop/03-custom-prompts.md --lint-mode
```

### 2. Eight Configurable Rules

All rules are customizable via `.slidevlintrc.json`:

| Rule | Default | Rationale |
|------|---------|-----------|
| `max-bullets-per-slide` | 5 | Prevents viewport overflow |
| `max-code-lines` | 15 lines | Maintains code readability |
| `max-text-block-length` | 200 chars | Keeps paragraphs digestible |
| `missing-image-files` | — | Catches broken references |
| `no-empty-slides` | — | Finds content-less slides |
| `max-heading-depth` | 3 levels | Simplifies slide hierarchy |
| `frontmatter-required-fields` | `layout` | Validates metadata |
| `max-slides-count` | 30 (off by default) | Warns on long presentations |

### 3. VS Code Integration

**Problems Panel Integration:**
- Issues appear in Problems panel (`Ctrl+Shift+M`)
- Click to jump to exact line
- Color-coded by severity (error/warning)
- Shows rule name for reference

**Available Tasks:**
1. `Lint Slidev Slides` - Lint current file
2. `Lint All Slides` - Bulk checking
3. `Verify Slidev Slides (Full)` - Playwright verification
4. `Auto-Lint on Save` - Background checking

### 4. CI/CD Ready

```yaml
# .github/workflows/slides.yml
- name: Lint Slides (Fast Gate)
  run: .github/skills/slide-verifier/scripts/verify-slides.mjs --all --lint-mode --fail-on-errors

- name: Full Verification (Pre-Deploy)
  run: .github/skills/slide-verifier/scripts/verify-slides.mjs --all --fail-on-errors
```

---

## 📁 Files Created/Modified

### New Files

1. **`.slidevlintrc.json`** - Configuration file for linting rules
2. **`.vscode/tasks.json`** - VS Code tasks for one-click linting
3. **`slides/LINTING.md`** - Quick reference guide for users

### Modified Files

1. **`.github/skills/slide-verifier/scripts/verify-slides.mjs`** - Added static lint functions
2. **`.github/skills/slide-verifier/SKILL.md`** - Updated documentation
3. **`.vscode/settings.json`** - Added file watcher exclusions

---

## 🚀 How to Use

### Quick Start

**Lint current slide file:**
```bash
.github/skills/slide-verifier/scripts/verify-slides.mjs workshop/03-custom-prompts.md --lint-mode
```

**Lint all slides:**
```bash
.github/skills/slide-verifier/scripts/verify-slides.mjs --all --lint-mode
```

**Via VS Code:**
- `Ctrl+Shift+P` → `Tasks: Run Task` → `Lint Slidev Slides`

### Output Format

Issues are formatted for VS Code's problem matcher:

```
workshop/03-custom-prompts.md:45:1: warning: [max-bullets-per-slide] Slide 5 has 7 bullets (max 5 recommended)
tech-talks/copilot-cli.md:89:1: error: [missing-image-files] Image not found: images/diagram.png
```

### Customization

Edit `.slidevlintrc.json`:

```json
{
  "rules": {
    "max-bullets-per-slide": {
      "enabled": true,
      "severity": "warning",
      "max": 7  // Relaxed for tech talks
    },
    "max-text-block-length": {
      "enabled": false  // Disable this rule
    }
  }
}
```

---

## 📊 Real-World Example

Test run on `workshop/03-custom-prompts.md`:

```bash
$ .github/skills/slide-verifier/scripts/verify-slides.mjs workshop/03-custom-prompts.md --lint-mode

🔍 Running static lint analysis...

Linting: workshop/03-custom-prompts.md
workshop/03-custom-prompts.md:2:1: warning: [max-text-block-length] Slide 2 has paragraph with 306 characters
workshop/03-custom-prompts.md:18:1: warning: [max-text-block-length] Slide 3 has paragraph with 226 characters
... (46 more warnings)

📄 Lint report saved: slides/verification-reports/lint-2026-02-06T18-38-31-964Z.md

============================================================
LINT COMPLETE
============================================================
Checked 1 file(s)
Found 0 error(s), 48 warning(s)
```

**Report includes:**
- Summary statistics
- Line-by-line issue list
- Rule names for quick reference
- Clickable file paths

---

## 🎯 Workflow Recommendations

### Development Workflow

```
1. Edit slides in VS Code
2. Save file
3. Run lint task (Ctrl+Shift+P → Tasks: Run Task → Lint Slidev Slides)
4. Fix issues shown in Problems panel
5. Re-lint to confirm
6. Commit when clean
```

### CI/CD Pipeline

```
1. PR opened → Lint mode runs (gate check)
2. PR approved → Full Playwright verification
3. Merge to main → Deploy with confidence
```

### Issue Priority

**Fix immediately (errors):**
- ❌ Missing image files
- ❌ Empty slides

**Fix before commit (warnings):**
- ⚠️ Too many bullets
- ⚠️ Long code blocks
- ⚠️ Missing frontmatter

**Consider (optional):**
- ⚠️ Long paragraphs
- ⚠️ Deep headings

---

## 🔧 Technical Details

### Architecture

**Static Lint Mode:**
1. Load config from `.slidevlintrc.json`
2. Read slide file as text
3. Parse markdown structure
4. Apply each enabled rule
5. Format output for VS Code
6. Generate markdown report

**No dependencies on:**
- ❌ Playwright/Chromium
- ❌ Slidev server
- ❌ Network access
- ❌ Node modules installation

**Fast because:**
- ✅ Text-based parsing
- ✅ Regex pattern matching
- ✅ Direct file system access
- ✅ Single-pass processing

### Problem Matcher Pattern

```json
{
  "regexp": "^(.+?):(\\d+):(\\d+):\\s+(error|warning):\\s+\\[(.+?)\\]\\s+(.+)$",
  "file": 1,
  "line": 2,
  "column": 3,
  "severity": 4,
  "code": 5,
  "message": 6
}
```

Captures: `file:line:col: severity: [rule] message`

---

## 📚 Documentation

- **Quick Reference:** `slides/LINTING.md`
- **Full Documentation:** `.github/skills/slide-verifier/SKILL.md`
- **Configuration Schema:** `.slidevlintrc.json` (with comments)
- **Task Definitions:** `.vscode/tasks.json`

---

## ✨ Benefits

**For Developers:**
- ⚡ Instant feedback (200ms vs 2 minutes)
- 🎯 Precise line numbers and click-to-jump
- 🔧 Customizable rules per project
- 🚀 Integrates with existing workflow

**For CI/CD:**
- 💰 No Playwright infrastructure needed for gate checks
- ⏱️ Fast feedback on PRs (seconds not minutes)
- 🎚️ Configurable severity levels
- 📊 Machine-readable output

**For Teams:**
- 📏 Consistent slide quality standards
- 📖 Self-documenting rules with helpful messages
- 🔄 Catches issues before they reach review
- 📈 Measurable improvement over time

---

## 🎉 Ready to Use!

The system is fully functional and tested. Try it:

```bash
# Lint a single file
.github/skills/slide-verifier/scripts/verify-slides.mjs workshop/03-custom-prompts.md --lint-mode

# Or use the VS Code task
Ctrl+Shift+P → Tasks: Run Task → Lint Slidev Slides
```

Issues will appear in the Problems panel - click to jump to the line and fix!
