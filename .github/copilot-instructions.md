# Copilot Instructions for CopilotTraining Content Development

## Repository Structure

This repository contains three types of content, each with different purposes and guidelines:

- **`workshop/`** — Hands-on training modules with personas, exercises, and metrics (15+ years experience → newcomers)
- **`tech-talks/`** — Technical deep-dives for practitioners (30-60 min presentations on specific capabilities)
- **`exec-talks/`** — Executive thought leadership (strategic context for leadership decision-making)

---

## Content-Type Specific Guidelines

### Workshop Content (`workshop/` directory)

**Purpose:** Hands-on training with progressive skill-building through personas and exercises

**Key characteristics:**

- Persona-driven narratives (Sarah, Marcus, David, Elena, Rafael)
- Outcome-based language (what was built/validated, not "learned")
- Quantifiable metrics in Before/After comparisons
- Hands-on exercises with concrete artifacts

**For content creation:** Use `module-planner` or `module-creator` agents (detailed requirements in `.github/agents/`)

**Persona reference:** [workshop/00-orientation/PERSONAS.md](../workshop/00-orientation/PERSONAS.md)

### Tech Talk Content (`tech-talks/` directory)

**Purpose:** Technical deep-dives for practitioners exploring specific capabilities or patterns

**Key characteristics:**

- Clear problem statement and motivation
- Technical depth with practical examples
- Architectural diagrams and system flows
- Implementation guidance and tradeoffs
- Concrete takeaways for immediate application

**Tone:** Expert-to-expert, assumes technical background, focuses on "how" and "why"

### Executive Talk Content (`exec-talks/` directory)

**Purpose:** Thought leadership for technical leaders making strategic decisions about AI adoption

**Key characteristics:**

- Strategic framing with business context
- Industry parallels and analogies (aviation, manufacturing, etc.)
- Organizational implications and transformation patterns
- Risk mitigation and governance frameworks
- C-level/VP-level decision criteria

**Tone:** Authoritative but accessible, focuses on "what this means" for the organization

---

## Universal Formatting Guidelines

_Apply to all content types_

### Emoji Vocabulary

| ----- | ---------------------------------- | ---------------------------------------------------- |
| ⏰ | Time markers | `## ⏰ 10:30 AM — The Prompt Problem` |
| 📖 | Story/narrative sections | `## 📖 The Story` |
| 🎯 | Objectives, goals, exercises | `## 🎯 Learning Objectives` |
| 🧠 | Mindful moments (philosophical) | `## 🧠 Mindful Moment: Clarity Over Cleverness` |
| 📚 | Key concepts, documentation | `## 📚 Key Concepts` |
| 🔨 | Exercises section header | `## 🔨 Exercises` |
| ❌ | "Before" frustration | `#### ❌ The "Before" — What Frustration Looks Like` |
| ✨ | "After" improvement | `#### ✨ The "After" — The Improved Experience` |
| ✅ | Success criteria, checklists | `#### ✅ Success Criteria` |
| 💭 | Persona thoughts/reactions | `#### 💭 Elena's Realization` |
| 🚀 | Challenge extensions, quick starts | `#### 🚀 Challenge Extension` |
| 🔗 | Connections, cross-references | `## 🔗 Compounding Value` |
| ➡️ | Next steps, navigation | `## ➡️ Next Up` |
| 💡 | Tip callouts | `💡 **Pro Tip**: ...` |
| 🌐 | Bonus/web-related content | `## 🌐 Bonus: Advanced Techniques` |
| 📊 | Metrics tables | `## 📊 Success Metrics` |
| 🎭 | Behind the scenes | `## 🎭 Behind the Scenes` |
| ⭐ | Lead exercise marker (personas) | `⭐ *You lead this one*` |
| 🤝 | Collaboration marker (personas) | `🤝 *Team collaboration*` |
| 😰 | Fear/before state | `- 😰 Worried that...` |

---

## Tone and Voice

- **Respectful** — Treat all experience levels with dignity
- **Practical** — Focus on what works, not theory for theory's sake
- **Honest** — Acknowledge limitations and tradeoffs
- **Encouraging** — Celebrate progress, normalize learning curves

---

## Slide Generation Guidelines

When creating Slidev presentations, follow these principles:

- **Maximum 15-20 slides per module** — Force focused, essential content only
- **Extract content from source README** — Preserve persona quotes, metrics, and exercise objectives
- **Visual hierarchy** — Use emoji vocabulary consistently (🎯, ⏰, 📊, etc.)
- **Beautiful, polished design** — Dark cockpit-style with Tailwind CSS, never use Mermaid diagrams

**For complete slide lifecycle (generation + verification + fixing):** Use the `slide-manager` agent (see `.github/agents/slide-manager.agent.md`)

**For generation only:** Use the `slide-generator` agent (see `.github/agents/slide-generator.agent.md`)

**For verification:** The `@slide-verifier` skill uses Playwright to check slides for overflow, broken images, and errors

**For fixing:** The `@slide-fixer` skill automatically resolves issues by splitting slides and correcting problems

### Recommended Workflow

```
Use slide-manager agent to create slides for workshop/03-custom-prompts
```

This orchestrates:
1. Generation from README
2. Verification with Playwright
3. Fixing any issues detected
4. Re-verification until validation passes (max 3 iterations)
5. Comprehensive status report with evidence

**Persona reference:** [workshop/00-orientation/PERSONAS.md](../workshop/00-orientation/PERSONAS.md)

---

## Quick Voice Checklist

Before submitting content, verify:

- [ ] **Outcomes not learning** — Shows what was built/validated, not what was discovered
- [ ] **Metrics included** — At least 2-3 quantified improvements in Before/After
- [ ] **Evidence-based** — Demonstrates through action, not claims understanding
- [ ] **Persona-authentic** — Uses the persona's unique lens (Sarah=ROI, David=expertise, etc.)
- [ ] **Professional tone** — Treats all as experienced professionals validating tools

---

## Agent Invocation Guidelines

When calling subagents (via `runSubagent`), keep prompts minimal:

- **Trust agent configuration** — Agents already have access to this file and their own `.agent.md` instructions
- **Don't repeat rules** — Never re-state guidelines from copilot-instructions.md or agent definitions
- **Be concise** — Just specify the target (e.g., "Generate slides for workshop/03-custom-prompts")
- **Let agents work** — They're configured to follow workspace conventions automatically

**Bad example:**

> "Generate slides following the slide generation guidelines, using emoji vocabulary, dark cockpit-style, max 15-20 slides..."

**Good example:**

> "Generate slides for workshop/03-custom-prompts"
