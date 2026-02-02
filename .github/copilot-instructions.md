# Copilot Instructions for CopilotTraining Content Development

## Purpose

## This file provides core principles for GitHub Copilot when assisting in the development of training modules, exercises, and content for this repository.

## Training Philosophy

This training embraces the evolution from **"Syntax Wizards"** to **"Markdown Whisperers"**—the shift from valuing syntax memorization to valuing **clarity of thought and intent**. All content should reinforce:

1. **Clarity beats cleverness** — The best code is code anyone can understand
2. **Intent matters more than implementation** — Well-written descriptions enable AI collaboration
3. **Documentation is leverage** — Clear communication scales knowledge across teams
4. **AI amplifies clarity** — The better you express what you want, the better Copilot helps

---

## Personas

When creating content, use the training personas to make it relatable. Each persona represents a real archetype of professionals who will take this training.

**📖 For full persona details, read:** [modules/00-orientation/PERSONAS.md](../modules/00-orientation/PERSONAS.md)

**Persona summary:**

- **Sarah** — The Skeptical Senior (15 years) — validates through explicit skepticism → testing → evidence → ROI calculation
- **Marcus** — The DevOps Developer (5 years) — removes workflow friction through automation; measures impact on team velocity
- **David** — The Seasoned Architect (20 years) — validates that AI amplifies (not replaces) 20 years of architectural expertise
- **Elena** — The Quality Champion (8 years) — accelerates test creation while maintaining edge case coverage and quality standards
- **Rafael** — The Product Visionary (10 years) — bridges technical and business through rapid analysis and clearer stakeholder communication

**All personas are outcome-focused professionals demonstrating measurable results, not students learning concepts.**

---

## Core Requirements (Non-Negotiable)

### 1. Metrics Requirement

All "Before" and "After" sections **must include concrete, quantifiable metrics** — never abstract statements.

**Always include at least one:**

- **Time saved** — Specific duration (e.g., "45 minutes → 5 minutes")
- **Errors avoided** — Specific count or percentage
- **Coverage increased** — Percentage improvement
- **Iterations reduced** — From X to Y

### 2. Official Documentation Requirement

Every exercise **must include an "Official Docs" subsection** with 1–3 links to authoritative documentation from GitHub and/or Microsoft.

**Priority order:**

1. VS Code Copilot docs (for in-editor features)
2. GitHub Docs (for Copilot concepts, best practices)
3. Microsoft Learn (for Azure/enterprise features if relevant)

Prefer first-party sources; third-party posts are optional extras only.

### 3. Section Separators

Use `---` (horizontal rule) between **ALL major sections** to create clear visual rhythm and scannability.

---

## Emoji Vocabulary (Consistent Usage)

| Emoji | Purpose                            | Example Usage                                        |
| ----- | ---------------------------------- | ---------------------------------------------------- |
| ⏰    | Time markers                       | `## ⏰ 10:30 AM — The Prompt Problem`                |
| 📖    | Story/narrative sections           | `## 📖 The Story`                                    |
| 🎯    | Objectives, goals, exercises       | `## 🎯 Learning Objectives`                          |
| 🧠    | Mindful moments (philosophical)    | `## 🧠 Mindful Moment: Clarity Over Cleverness`      |
| 📚    | Key concepts, documentation        | `## 📚 Key Concepts`                                 |
| 🔨    | Exercises section header           | `## 🔨 Exercises`                                    |
| ❌    | "Before" frustration               | `#### ❌ The "Before" — What Frustration Looks Like` |
| ✨    | "After" improvement                | `#### ✨ The "After" — The Improved Experience`      |
| ✅    | Success criteria, checklists       | `#### ✅ Success Criteria`                           |
| 💭    | Persona thoughts/reactions         | `#### 💭 Elena's Realization`                        |
| 🚀    | Challenge extensions, quick starts | `#### 🚀 Challenge Extension`                        |
| 🔗    | Connections, cross-references      | `## 🔗 Compounding Value`                            |
| ➡️    | Next steps, navigation             | `## ➡️ Next Up`                                      |
| 💡    | Tip callouts                       | `💡 **Pro Tip**: ...`                                |
| 🌐    | Bonus/web-related content          | `## 🌐 Bonus: Advanced Techniques`                   |
| 📊    | Metrics tables                     | `## 📊 Success Metrics`                              |
| 🎭    | Behind the scenes                  | `## 🎭 Behind the Scenes`                            |
| ⭐    | Lead exercise marker (personas)    | `⭐ *You lead this one*`                             |
| 🤝    | Collaboration marker (personas)    | `🤝 *Team collaboration*`                            |
| 😰    | Fear/before state                  | `- 😰 Worried that...`                               |

---

## Tone and Voice

- **Respectful** — Treat all experience levels with dignity
- **Practical** — Focus on what works, not theory for theory's sake
- **Honest** — Acknowledge limitations and tradeoffs
- **Encouraging** — Celebrate progress, normalize learning curves

### Addressing Fears

Never dismiss concerns about AI replacing developers. Instead:

- Show AI as a tool that requires human judgment
- Create exercises where AI output needs expert review
- Emphasize that **clarity of thinking** (a human skill) drives AI effectiveness
- Demonstrate how experienced developers get better results from AI

---

## Universal Voice Principles (All Personas)

**All content should be outcome-based, not learning-based.** These are professionals demonstrating results, not students discovering concepts.

### 1. Outcome-Based Language (Required for All Personas)

**❌ Avoid learning-focused framing:**

- "[Persona] learns how X works"
- "[Persona] discovers how to..."
- "[Persona] gains confidence in..."
- "[Persona] feels empowered..."
- "My learning became team knowledge"

**✅ Use outcome-focused framing:**

- "[Persona] validates that X delivers [metric]"
- "[Persona] implements [solution] that reduces [problem] by [metric]"
- "[Persona] creates [artifact] that saves [time/effort]"
- "[Persona] demonstrates [capability] with [measurable result]"
- "Standards documented once = standards enforced automatically"

### 2. Transformation Pattern (All Personas)

Every persona transformation should show:

1. **The problem/frustration** — Specific, measurable pain
2. **The solution/action** — What they built/implemented
3. **The outcome/proof** — Quantifiable improvement
4. **The insight** — What this means for their work

**Example (Marcus):**

> "Build failures used to take me 30 minutes to debug—15 minutes to reproduce, 15 to trace dependencies. Now I use the build analyzer agent to surface the root cause in under 2 minutes. That's 28 minutes saved per failure, 5-8 failures per sprint = 3 hours back every two weeks."

**Example (Elena):**

> "I used to spend 45 minutes writing test cases manually and still miss edge cases. Now my custom prompt generates comprehensive test suites in 2 minutes with 40% better edge case coverage. Code reviews went from 3 rounds to 1—testing is right the first time."

### 3. Evidence-Based Validation (All Personas)

All personas validate through action and measurement, not abstract statements:

- Show concrete experiments or implementations
- Include specific metrics (time, count, percentage)
- Connect outcomes to real work impact
- Demonstrate capability, don't claim understanding

---

## Persona-Specific Voice Guidelines

### Sarah (Skeptical Senior - 15 years)

**What makes Sarah unique:** Explicit skepticism, ROI emphasis, and validation pattern

**Sarah's specific approach:**

1. **Skepticism → Evidence → Adoption**
   - Always starts: "I was skeptical because [past hype experience]"
   - Tests: "So I tested it by [concrete experiment]"
   - Validates: "Result: [specific metric improvement]"
   - Concludes: "That's not hype—that's [business value]"

2. **ROI Calculation Required**
   - Must include at least 3 metrics
   - Emphasize multiplication: hours × sprints × year
   - Connect to team/business impact
   - Show leverage: "documented once = enforced automatically"

3. **Senior-Level Metrics**
   - Review cycles reduced
   - Pattern violations eliminated
   - Team scaling enabled
   - Standards enforcement automated

**Prohibited for Sarah:**

- Any learning-focused language (see universal principles above)
- Abstract benefits without metrics
- Naive or uncertain tone

**Sarah transformation quote pattern:**

**Sarah transformation quote pattern:**

> "I was skeptical because I've seen too many 'revolutionary' tools that waste more time than they save. So I tested it: documented our React review standards once, then measured how many violations made it through. Before: 8 violations per PR, 3 review rounds, 45 minutes each. After: 0 violations, 1 review round, 5 minutes. That's not hype—that's 2 hours saved per feature, every feature, every sprint."

### Marcus (DevOps Developer - 5 years)

**What makes Marcus unique:** Infrastructure and workflow focus, friction-removal mindset

**Marcus's specific approach:**

- **Pain point**: Specific workflow friction (build times, deployment steps, debugging loops)
- **Solution**: Automation or tool that removes the friction
- **Outcome**: Time saved, steps eliminated, reliability improved
- **Impact**: Team velocity increased, incidents reduced

**Marcus transformation example:**

> "Deployment used to require 12 manual steps and took 35 minutes. One typo would break production. Now the deployment agent validates everything and runs it in 8 minutes—zero manual steps, zero deployment failures in the last 3 sprints."

### David (Seasoned Architect - 20 years)

**What makes David unique:** Expertise validation, experience as quality filter

**David's specific approach:**

- **Concern**: Will AI replace deep expertise?
- **Test**: AI generates plausible solution
- **Validation**: David's experience catches what AI missed
- **Outcome**: AI amplifies expertise, doesn't replace it

**David transformation example:**

> "The AI generated the architecture diagram in 2 minutes—would've taken me 30. But I spotted three issues my 20 years caught: missing circuit breaker, incorrect cache invalidation pattern, and a subtle race condition. AI gives me the 80% fast; my expertise ensures the 20% is production-ready."

### Elena (Quality Champion - 8 years)

**What makes Elena unique:** Quality validation, edge case focus, thorough methodology

**Elena's specific approach:**

- **Pain point**: Time spent on test creation, edge cases missed
- **Solution**: AI-assisted test generation with human validation
- **Verification**: Elena reviews for completeness, adds missing scenarios
- **Outcome**: Faster test creation without sacrificing quality

**Elena transformation example:**

> "Generated test suite covered the happy path in 2 minutes—would've taken me 45. But I added 4 edge cases it missed: empty arrays, concurrent updates, timeout scenarios, malformed input. AI handles the tedious work; I ensure nothing gets through."

### Rafael (Product Visionary - 10 years)

**What makes Rafael unique:** Business value connection, stakeholder communication bridge

**Rafael's specific approach:**

- **Challenge**: Translating between technical and business stakeholders
- **Solution**: AI helps rapid prototyping, estimation, requirements clarity
- **Outcome**: Faster decisions, better communication, clearer tradeoffs
- **Value**: Features shipped faster, stakeholder alignment improved

**Rafael transformation example:**

> "Used to take 3 days to scope a feature request—dev conversations, spike work, estimation meetings. Now I use the effort estimator agent to get preliminary analysis in 15 minutes. Not replacing the full process, but now I walk into planning with data: 'This is 3 sprints if we build it all, 1 sprint if we focus on core value.'"

---

## Slide Generation Guidelines

When creating Slidev presentations for workshop modules, follow these structural and content guidelines to maintain training quality and persona authenticity.

### Structural Requirements

- **Maximum 15 slides per module** — Force focused, essential content only
- **Required slide types**: Title, Learning Objectives, Persona Context, Before/After Comparisons, Key Exercises, Next Steps
- **Visual hierarchy**: Use existing emoji vocabulary consistently (🎯 for objectives, ⏰ for time markers, 📊 for metrics, etc.)
- **Slide progression**: Match module flow — setup → problem → solution → validation → outcomes

### Content Extraction Rules

Extract content directly from module README.md files while preserving:

- **Persona transformation quotes** — Use exact quotes from persona sections, maintaining their unique voice patterns (Sarah's skepticism→evidence→ROI, David's expertise validation, etc.)
- **Quantifiable metrics** — Pull specific time savings, error reductions, coverage improvements from Before/After sections
- **Exercise objectives** — Extract 🎯 sections but focus on outcomes, not learning goals
- **Official documentation links** — Include GitHub/VS Code/Microsoft Learn references from exercises

### Aesthetic Guidelines

- **GitHub color scheme** — Use GitHub's brand colors for consistency with training materials
- **Clean layouts** — Minimize text per slide, maximize visual impact with emojis and metrics
- **Readable fonts** — Ensure code examples and metrics are clearly visible for presentations
- **Consistent spacing** — Use Slidev's layout components for professional appearance

### Copilot Collaboration Workflow

1. **Read module README thoroughly** to understand persona transformations and key metrics
2. **Extract persona quotes** using their established voice patterns from PERSONAS.md
3. **Verify metrics accuracy** — Ensure all Before/After comparisons include concrete numbers
4. **Iterate slide content** with Copilot to refine persona authenticity and visual clarity
5. **Test presentation flow** to ensure smooth transitions between concepts

**Reference existing personas** from [modules/00-orientation/PERSONAS.md](../modules/00-orientation/PERSONAS.md) rather than creating slide-specific versions.

---

## Quick Voice Checklist

Before submitting content, verify:

- [ ] **Outcomes not learning** — Shows what was built/validated, not what was discovered
- [ ] **Metrics included** — At least 2-3 quantified improvements in Before/After
- [ ] **Evidence-based** — Demonstrates through action, not claims understanding
- [ ] **Persona-authentic** — Uses the persona's unique lens (Sarah=ROI, David=expertise, etc.)
- [ ] **Professional tone** — Treats all as experienced professionals validating tools
