# Plan: Restructure Module 01 for Three-Tier Navigation & Enhanced Clarity

Module 01 currently violates the three-tier navigation pattern and lacks persona files. This plan restructures it to match Modules 03-05, adds persona journey files with role-specific checkpoint perspectives, creates checkpoint evaluation templates, and enhances navigation.

## Steps

1. **Create checkpoint metric templates** in [.github/copilot-instructions.md](.github/copilot-instructions.md)
   - Add section documenting how different personas evaluate Golden Thread checkpoints
   - Template: David=architecture correctness, Sarah=pattern adherence/consistency, Priya=comprehension/confidence
   - Include example metrics for each perspective to guide future module development

2. **Create three persona journey files** in [modules/01-repository-instructions/personas/](modules/01-repository-instructions/personas/)
   - [david.md](modules/01-repository-instructions/personas/david.md) (~200-220 lines) — Condensed summaries for Exercise 1.1 ⭐ (lead) and 1.4 🤝 (collaboration); includes Checkpoint 1.1b with **architecture-focused metrics**; links to Module 02
   - [sarah.md](modules/01-repository-instructions/personas/sarah.md) (~200-220 lines) — Condensed summary for Exercise 1.2 ⭐ (lead); includes Checkpoint 1.2b with **pattern-consistency metrics**; links to Module 09
   - [priya.md](modules/01-repository-instructions/personas/priya.md) (~200-220 lines) — Condensed summary for Exercise 1.3 ⭐ (lead); includes both checkpoints (1.1b and 1.2b) from **learning/confidence perspective**; links to Module 04
   - All include transformation arcs (😰 → ✅), 📊 success metrics, 🚀 quick start guides

3. **Restructure [README.md](modules/01-repository-instructions/README.md) as navigation hub** (target: 130-150 lines)
   - Add prerequisite note with tracking template setup: "⚠️ **Prerequisites**: Complete [Module 00](../00-orientation/README.md), then copy [character-detail-challenge.md](../../examples/completed-config/docs/character-detail-challenge.md) to `fanhub/docs/`"
   - Add 💡 callout box explaining `@workspace` usage and context scoping benefits
   - Remove ALL exercise content (move to EXERCISES.md only)
   - Add "🎯 Choose Your Path" with Quick Navigator table (exercise links, lead persona, time, topic)

4. **Restructure [EXERCISES.md](modules/01-repository-instructions/EXERCISES.md)** with all exercises and generic checkpoints
   - Move Exercise 1.1 from README.md to EXERCISES.md as first exercise
   - Add `**⏱️ Time**: ~XX minutes` to all exercise headers (1.1: 15min, 1.2: 30min, 1.3: 20min, 1.4: 15min)
   - Keep Golden Thread checkpoints (🧵 1.1b, 🧵 1.2b) inline marked "🧵 Optional Tracking: Checkpoint X.Xb" with generic metrics
   - Add "**Supporting Cast**" sections; add persona perspective links to checkpoints
   - Improve Exercise 1.4 "After" metrics with concrete numbers

5. **Create three-way navigation cross-references**
   - README.md → persona files and EXERCISES.md
   - EXERCISES.md → persona checkpoints and full exercise details
   - Persona files → EXERCISES.md, next module appearances, and other personas