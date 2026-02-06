# Slide Management Workflow

This document explains the integrated slide management system with automated verification and fixing.

## Overview

The slide management system consists of:
- **slide-manager agent** - Orchestrates the complete lifecycle
- **slide-generator agent** - Generates slides (used standalone or by slide-manager)
- **@slide-verifier skill** - Validates slides with Playwright
- **@slide-fixer skill** - Automatically fixes issues

## Quick Start

### Recommended: Complete Lifecycle

Use `slide-manager` for the full workflow with validation:

```
@slide-manager workshop/03-custom-prompts
```

This will:
1. Generate slides from README
2. Verify with Playwright
3. Fix any issues automatically
4. Re-verify until valid (max 3 iterations)
5. Report comprehensive status

### Alternative: Manual Workflow

For more control, use each component separately:

```
@slide-generator workshop/03-custom-prompts  # Generate slides
@slide-verifier verify workshop/03-custom-prompts  # Check for issues
@slide-fixer fix workshop/03-custom-prompts  # Fix problems
@slide-verifier verify workshop/03-custom-prompts  # Re-verify
```

## When to Use Each Agent

### Use slide-manager when:
- Creating new slides from scratch
- You want automated validation and fixing
- You need to ensure slides are correct before completion
- **Recommended for most use cases**

### Use slide-generator when:
- You only need generation without verification
- You'll manually verify and fix slides
- You're experimenting or iterating quickly

### Use skills directly when:
- Verifying existing slides (`@slide-verifier`)
- Fixing known issues (`@slide-fixer`)
- Building custom workflows

## Verification Process

The `@slide-verifier` skill uses Playwright to check:

✅ **Content overflow** - Slides taller than viewport (552px height limit)
✅ **Broken images** - Missing or failed image loads
✅ **Console errors** - JavaScript errors in browser console
✅ **Readability** - Text blocks that are too long

Reports are saved to `slides/verification-reports/` with:
- Detailed measurements
- Issue descriptions
- Fix suggestions
- Screenshots (when issues found)

## Fixing Strategy

The `@slide-fixer` skill preserves all content by:

1. **Splitting slides** - Creates "(1/2)" and "(2/2)" continuations
2. **Reducing code font** - For code-heavy slides, uses `text-sm` or `text-xs`
3. **Fixing image paths** - Corrects relative/absolute paths
4. **Resolving errors** - Fixes malformed frontmatter and syntax

**Key principle:** Never removes content, always adds slides instead.

**Code slide exception:** Overflow < 50px on code-heavy slides is acceptable.

## Iteration Loop

The slide-manager agent iterates up to 3 times:

```
Generate → Verify
           ↓
    Issues found?
           ↓
       Yes → Fix → Re-verify → Loop (max 3x)
           ↓
        No → Report success
```

If issues remain after 3 iterations:
- Reports current status
- Lists remaining issues with details
- Provides links to reports and screenshots
- Suggests manual intervention

## Example Workflow

**User:** "Generate slides for workshop/03-custom-prompts"

**Agent:** Uses slide-manager which:
1. ✅ Reads `workshop/03-custom-prompts/README.md`
2. ✅ Generates 18 slides → `slides/workshop/03-custom-prompts.md`
3. ✅ Updates `slides/index-custom.html`
4. ✅ Verifies with Playwright → Finds slide 5 overflow (120px), slide 9 overflow (80px)
5. ✅ Fixes issues → Splits slides 5 and 9
6. ✅ Re-verifies → All slides pass (20 slides total)
7. ✅ Reports: "Slides generated and validated. 20 slides (2 added). All issues resolved."

## Success Criteria

Slides are considered validated when:
- ✅ All slides render without console errors (except external resource failures)
- ✅ No content overflow (or only code slides with < 50px)
- ✅ All images load successfully
- ✅ Navigation works between slides
- ✅ No JavaScript exceptions

## Troubleshooting

### "Server startup timeout"
- **Note:** Scripts now use random ports (3030-3130) by default for parallel execution
- If a specific port is needed, use `--port=XXXX` option
- Port conflicts are rare with random port selection
- Check slide syntax is valid

### "Playwright not installed"
- Run `npm install` in `slides/` directory
- Run `npx playwright install chromium` in `slides/` directory

### "Running tests in parallel"
- Port randomization is enabled by default (range: 3030-3130)
- Multiple tests can run simultaneously without conflicts
- Each test automatically selects a random available port
- Override with `--port=XXXX` if needed for debugging

### "Verification finds false positives"
- Check the detailed measurements table in the report
- Review screenshots in `slides/screenshots/`
- Use `--tolerance=0` for strictest checking

### "Slides still overflow after fixing"
- Check if content is genuinely too dense
- Consider manual editing for complex layouts
- Review if splits are at natural boundaries

## Best Practices

1. ✅ **Always use slide-manager** for new slides
2. ✅ **Review generated slides** before deploying
3. ✅ **Check verification reports** to understand issues
4. ✅ **Keep READMEs updated** - slides reflect README content
5. ✅ **Commit together** - README and slides should stay in sync

## Architecture Diagram

```
┌─────────────────────────────────────────┐
│         User Request                     │
│  "Generate slides for module X"          │
└─────────────┬───────────────────────────┘
              ↓
┌─────────────────────────────────────────┐
│      slide-manager Agent                 │
│  (Orchestrates complete lifecycle)       │
└─────────────┬───────────────────────────┘
              ↓
      ┌───────┴───────┐
      ↓               ↓
┌──────────────┐ ┌──────────────────┐
│ Generation   │ │ Verification     │
│ (slide-gen)  │ │ (@slide-verifier)│
└──────┬───────┘ └────────┬─────────┘
       │                  ↓
       │         ┌─────────────────┐
       │         │  Issues found?  │
       │         └────────┬────────┘
       │                  ↓
       │         ┌─────────────────┐
       │         │   @slide-fixer  │
       │         └────────┬────────┘
       │                  ↓
       └──────────→ Re-verify (loop)
```

## Related Documentation

- **Agent Definitions:**
  - `.github/agents/slide-manager.agent.md`
  - `.github/agents/slide-generator.agent.md`
  
- **Skill Definitions:**
  - `.github/skills/slide-verifier/SKILL.md`
  - `.github/skills/slide-fixer/SKILL.md`

- **User Guides:**
  - `slides/README.md` - Slide creation and viewing
  - `.github/copilot-instructions.md` - Content guidelines

## Questions?

See the main [CopilotTraining README](../README.md) or the [slides README](../slides/README.md) for more information.
