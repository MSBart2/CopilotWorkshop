# Documentation Archive

This directory contains the full, detailed documentation for GitHub Copilot Workspace agents and skills that was too large to keep in `.github/` due to the 30,000 character context limit.

## Context Limit Issue

GitHub Copilot Workspace loads all markdown files from `.github/` as context for issue assignments. The original documentation totaled **207,921 characters** (almost 7x the 30,000 char limit), causing "prompt over 30,000 characters" errors when assigning issues to Copilot.

## Solution

We condensed the agent and skill files in `.github/` to essential definitions (targeting ~1,000-3,000 chars each) and moved the full documentation here. Each condensed file references its full documentation.

**Result:** Reduced total context to **23,002 characters** (88% reduction), staying well under the 30,000 char limit.

## File Mapping

### Agents (Full Documentation)

- `agents-module-creator-FULL.md` → Referenced by `.github/agents/module-creator.agent.md`
- `agents-module-planner-FULL.md` → Referenced by `.github/agents/module-planner.agent.md`
- `agents-slide-manager.agent.md` → Referenced by `.github/agents/slide-manager.agent.md`
- `agents-tech-talk-generator.agent.md` → Referenced by `.github/agents/tech-talk-generator.agent.md`
- `slide-generator-FULL.md` → Referenced by `.github/agents/slide-generator.agent.md`

### Skills (Full Documentation)

- `exercise-author-SKILL.md` → Referenced by `.github/skills/exercise-author/SKILL.md`
- `module-author-SKILL.md` → Referenced by `.github/skills/module-author/SKILL.md`
- `tech-talk-author-SKILL.md` → Referenced by `.github/skills/tech-talk-author/SKILL.md`
- `skills/slide-fixer-FULL.md` → Referenced by `.github/skills/slide-fixer/SKILL.md`
- `skills/slide-verifier-FULL.md` → Referenced by `.github/skills/slide-verifier/SKILL.md`

### Guides

- `URL-FETCHING-GUIDE.md` → Comprehensive guide on using web_fetch capabilities with Copilot agents
- `QUICK-REFERENCE-WEB-FETCH.md` → Quick troubleshooting reference for URL fetching issues

## Common Questions

### Q: Can Copilot agents fetch remote URLs?

**A**: Yes, but only specific agents have this capability:
- ✅ `tech-talk-generator` - For researching tech talk content
- ✅ `module-creator` - For complete module creation
- ✅ `module-planner` - For module planning
- ❌ `slide-generator` - Works with existing files only
- ❌ `slide-manager` - Orchestrates local slide generation

See [URL-FETCHING-GUIDE.md](URL-FETCHING-GUIDE.md) for complete details.

### Q: Why don't task URLs work?

**A**: GitHub Copilot Workspace task URLs (like `https://github.com/.../tasks/...`) are internal and not publicly accessible. Use the actual GitHub issue or PR URL instead.

### Q: What URL types are supported?

**A**: Most public web pages work well:
- ✅ GitHub blogs, docs, and repositories
- ✅ Public documentation sites
- ❌ Task URLs (use issue/PR URLs)
- ❌ Paywalled or authentication-required content
- ❌ Dynamic JavaScript-heavy pages

See [QUICK-REFERENCE-WEB-FETCH.md](QUICK-REFERENCE-WEB-FETCH.md) for troubleshooting.

## When to Use This Documentation
- **Detailed implementation:** Agents can read full docs here when more detail is needed
- **Troubleshooting:** Complete patterns, examples, and edge cases are documented here
- **Adding new agents/skills:** Reference these full docs for comprehensive guidance

## Maintenance

When updating agents or skills:
1. Update the condensed version in `.github/` (keep under ~3,000 chars)
2. Update the full version here in `docs/` with complete details
3. Ensure the condensed version references the full docs path

This keeps context loading fast while maintaining comprehensive documentation for when it's needed.
