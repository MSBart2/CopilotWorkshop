# CopilotTraining Slide Decks

Beautiful presentation slides for workshop modules, tech talks, and executive briefings.

> **🌐 View Online**: [https://msbart2.github.io/CopilotTraining/](https://msbart2.github.io/CopilotTraining/)
>
> All slides are automatically built and deployed via GitHub Actions on every commit.

---

## ✨ Creating Slides is Easy

### Recommended: Complete Lifecycle with Verification

Use the **Slide Manager** agent for end-to-end slide creation with automated validation:

```
@slide-manager workshop/03-custom-prompts
@slide-manager tech-talks/copilot-cli
@slide-manager exec-talks/agentic-delivery
```

**What it does:**
- ✅ Extracts content from the module README
- ✅ Generates beautiful, branded slides
- ✅ Updates the slides index
- ✅ **Verifies slides with Playwright** (checks overflow, images, errors)
- ✅ **Fixes any issues automatically** (splits overflowing slides)
- ✅ **Re-verifies until validated** (max 3 iterations)
- ✅ Reports comprehensive status with evidence

**This agent won't complete until slides are validated!**

### Alternative: Generation Only

For generation without verification:

```
@slide-generator workshop/03-custom-prompts
```

This creates slides but skips Playwright validation. Use `@slide-verifier` and `@slide-fixer` manually if needed.

---

## 🔍 Verifying & Fixing Slides

Verification and fixing are included in `@slide-manager`, but you can also use them independently:

```
@slide-verifier check all slides              # Check for issues
@slide-verifier verify workshop/04-agent-skills  # Check specific deck

@slide-fixer fix workshop/04-agent-skills     # Fix problems automatically
```

**What verification checks:**
- Content overflow (slides taller than viewport)
- Broken images (missing assets)
- Console errors (JavaScript issues)
- Readability (overly long text blocks)

**What fixer does:**
- Splits overflowing slides into multiple slides (preserves all content)
- Fixes broken image paths
- Resolves layout issues
- Corrects console errors

---

## 👀 Viewing Slides

Preview slides locally:

```bash
cd slides
npx slidev workshop/00-orientation.md
```

Opens at `http://localhost:3030` with hot reload.

**Navigation:**
- `Space` / `→` = Next slide
- `←` = Previous slide
- `P` = Presenter mode
- `O` = Overview
- `F` = Fullscreen

---

## 📁 What's Available

### Workshop Modules

| Module | Topic |
|--------|-------|
| `00-orientation.md` | Training overview, personas, principles |
| `01-instructions.md` | Repository instructions |
| `02-agent-plan-mode.md` | Agent plan mode thinking |
| `03-custom-prompts.md` | Custom prompt engineering |
| `04-agent-skills.md` | Domain-specific Agent Skills |
| `05-mcp-servers.md` | Model Context Protocol servers |
| `06-custom-agents.md` | Building custom agents |

### Tech Talks

Agent orchestration, CI/CD workflows, memory systems, CLI tools, and more.

### Executive Talks

Agentic delivery, economics, and labor implications.

---

## 🚀 Deploying Slides

**Automatic deployment:** All slides are automatically built and deployed to GitHub Pages via GitHub Actions on every commit to `main`. No manual deployment needed!

**Manual build** (for local testing):

```bash
cd scripts
./build-all.sh              # Linux/Mac
build-all.ps1               # Windows/PowerShell
```

Outputs to `dist/` folder for GitHub Pages or any static host.

---

## 📚 Quick Reference

**Create slides with validation (recommended):**
```
@slide-manager workshop/03-custom-prompts
```

**Create slides without validation:**
```
@slide-generator workshop/03-custom-prompts
```

**View locally:**
```bash
npx slidev workshop/03-custom-prompts.md
```

**Verify slides:**
```
@slide-verifier verify workshop/03-custom-prompts
```

**Fix slide issues:**
```
@slide-fixer fix workshop/03-custom-prompts
```

**Update slides when content changes:**
```
1. Edit the module README
2. @slide-manager workshop/module-name (includes verification)
3. Preview and commit both files together
```

---

## 🤝 Contributing

**Workflow:**
1. Update module README with new content
2. Run `@slide-manager workshop/module-name` to regenerate and validate slides
3. Preview locally with `npx slidev`
4. Commit README and slides together

The slide-manager agent handles generation, verification, fixing, and validation automatically.

---

## Resources

- [Slidev Documentation](https://sli.dev/) — For advanced customization
- [DEPLOYMENT.md](./DEPLOYMENT.md) — GitHub Pages setup
- [Main Workshop README](../README.md) — For questions

---

**License:** Same as main CopilotTraining repository
