# Rafael's Journey: Module 3 - Custom Prompts

> **Your role**: Product Manager bridging business requirements and technical implementation  
> **Time**: 60 minutes (focused) or 90 minutes (with team collaboration)  
> **Transformation**: From requirements writer causing miscommunication to spec-to-code translator

---

## 📖 Your Story in This Module

You've seen this movie before: You write detailed requirements, hand them to developers, and weeks later discover the implementation missed key details. The retrospective is always awkward—developers say your requirements were incomplete, you say the obvious things should have been obvious.

The problem isn't bad developers. It's that requirements and code live in different worlds. You speak in user needs and business value. Developers speak in API endpoints and database schemas. Something always gets lost in translation.

Today, you'll create prompts that bridge this gap. Your user stories will automatically translate into technical implementation plans that developers can follow. No more "I thought that was implied." No more 3-week delays because a requirement was ambiguous.

---

## 🎯 Your Exercises

### Exercise 2.2: Spec-to-Code Prompts ⭐ *You lead this one*

**Your role**: Create prompts that transform user stories into technical plans  
**Time**: 30 minutes  
**[View full exercise →](../EXERCISES.md#exercise-22-spec-to-code-prompts--rafael-bridges-the-gap)**

**What you'll create:**
- `spec-to-implementation.prompt.md` — Translates user stories to technical plans
- `feature-request-template.prompt.md` — Structures rough ideas into GitHub issues

**Your "before" pain:**
You spent hours on a 3-page requirements doc for "Favorites." Two weeks later:
- ❌ Favorites don't persist (you didn't specify database vs. localStorage)
- ❌ No visual feedback (you said "smooth" but didn't define what that means)
- ❌ Can't unfavorite (you forgot to write this requirement)
- ❌ No favorites page (you said "find them later" but didn't say where)

Result: 2 weeks dev + 1 week rework = 3 weeks wasted on miscommunication.

**Your "after" win:**
- User stories automatically become technical plans with file paths, API contracts, database changes
- Developers know EXACTLY what to build
- Ambiguities surface during planning, not in code review

**Your transformation moment:**
> *"The solution isn't better specs—it's translating specs into the language of code before anyone writes a line."*

---

### Exercise 2.3: Build the Episode Guide 🤝 *Team collaboration*

**Your role**: Define feature requirements using your new prompts  
**Partners**: Marcus (backend), Priya (frontend), Elena (testing)  
**Time**: 45 minutes  
**[View full exercise →](../EXERCISES.md#exercise-23-build-the-episode-guide--the-team-collaborates)**

**What you contribute:**
1. Use `feature-request-template` to structure the Episode Guide feature
2. Generate implementation plan with `spec-to-implementation`
3. Watch the team execute on YOUR clear requirements
4. See how your prompts prevent the usual miscommunication

**Why this matters for you:**
This is proof that your prompts work. You'll define a feature in business language, generate a technical plan, and watch developers build it WITHOUT asking clarifying questions. That's the dream.

---

## 🔗 Connections to Your Work

### Skills You're Building
- **Requirements translation**: Business needs → Technical specifications
- **Acceptance criteria**: Defining what "done" means in testable terms
- **Effort communication**: Helping stakeholders understand technical complexity
- **Cross-functional collaboration**: Speaking both business and technical languages

### How This Helps Your Real Work

As a product manager, your job is to maximize value delivery. But you can't do that if:
- Requirements are misunderstood (delivery happens, but it's wrong)
- Developers ask 20 clarifying questions (slows everything down)
- Stakeholders demand impossible timelines (you can't defend technical complexity)

**Custom prompts solve all three:**

1. **Misunderstanding prevention**: Your prompts encode what "complete" means in your domain. Developers get it right the first time.

2. **Velocity increase**: Developers don't wait for clarifications. Your prompts answer the standard questions automatically.

3. **Credibility boost**: When stakeholders ask "how long will this take?", you can generate a technical breakdown in seconds. You sound like you understand the work—because you do.

### Artifacts You Create
- `.github/prompts/spec-to-implementation.prompt.md` — Your requirements translator
- `.github/prompts/feature-request-template.prompt.md` — Your issue structurer
- Implementation plans that become your team's source of truth

---

## 💭 Your Transformation Arc

**Before this module (your fears):**
- 😰 Misunderstanding technical complexity → Over-promising to stakeholders
- 😰 Creating vague requirements → Implementation doesn't match vision
- 😰 Losing touch with technical details → Making bad prioritization calls
- 😰 Requirements that miss nuance → Developers misinterpret intent

**After this module (your achievements):**
- ✅ User stories automatically become actionable technical plans
- ✅ Developers execute without constant clarification requests
- ✅ Stakeholders see you as technically credible
- ✅ Your product vision translates cleanly into code
- ✅ Requirements live in version control, evolving with the product

**Key insight:**
> *"I've spent years trying to write specs that developers won't misinterpret. Turns out, the solution isn't better specs—it's translating specs into the language of code before anyone writes a line. With these prompts, I'm not just a requirements writer. I'm a bridge between business value and technical execution."*

---

## 🚀 Quick Start Guide

**If you're short on time (30 minutes):**
1. Jump directly to Exercise 2.2
2. Create the `spec-to-implementation` prompt
3. Test it with one feature from your real backlog
4. See the transformation happen

**If you have the full time (90 minutes):**
1. Exercise 2.2: Create your spec-to-code prompts (30 min)
2. Exercise 2.3: Collaborate with the team on Episode Guide (45 min)
3. Reflect on how this changes your workflow
4. Plan which backlog items to translate next

**Want to go deeper?**
- Challenge extension: Add effort estimation to your prompts
- Try generating plans for 3 features from your real backlog
- Share your prompts with other product managers

---

## 🎯 Impact on Your Role

### Before Custom Prompts
- Write requirements → Wait for questions → Answer questions → Review PR → Discover gaps → Rework
- **Cycle time**: 2-3 weeks per feature
- **Confidence level**: "I hope they understand what I meant"

### After Custom Prompts  
- Write user story → Generate technical plan → Review with team → Build → Ship
- **Cycle time**: 1-2 weeks per feature
- **Confidence level**: "The plan covers everything; let's build it"

### Real-World Applications

**Sprint planning**: Generate technical breakdowns for every backlog item before planning. Team velocity estimates become accurate.

**Stakeholder demos**: Show implementation plans, not just wireframes. Executives see you understand technical delivery.

**Roadmap communication**: Translate "Q2 priorities" into technical implications automatically. Engineering knows exactly what you need.

**New team members**: Your prompts onboard them to your requirements style instantly. No more "how does Rafael write specs?"

---

## 📊 Your Success Metrics

Track these to prove prompt value:

| Metric | Before Prompts | After Prompts |
|--------|----------------|---------------|
| **Clarification questions per feature** | 10-15 | 2-3 |
| **"This isn't what I meant" moments** | 3-5 per sprint | 0-1 per sprint |
| **Requirements doc writing time** | 3-4 hours | 30 minutes |
| **Rework due to miscommunication** | 15-20% of features | <5% of features |

---

## ➡️ Continue Your Journey

### Within This Module
- [View all exercises](../EXERCISES.md) to see the full team collaboration story
- [Elena's path](elena.md) to see how your specs enable her testing
- [Marcus's path](marcus.md) to see how developers use your plans

### Next Module
Your next appearance: **[Module 5: Agent Skills](../../05-agent-skills/personas/rafael.md)**

**What's next for you**: You'll create an "Effort Estimator" skill that helps you give stakeholders informed estimates before committing to timelines. Plus, a "Feature Requirements" skill that automatically enforces your product standards when developers build features.

**Why it matters**: Module 3 taught you to translate specs to code. Module 6 teaches you to estimate effort and enforce standards automatically. You're becoming a strategic execution enabler, not just a requirements writer.

---

## 📚 Resources for Product Managers

**Official Documentation:**
- [VS Code: Prompt File Variables](https://code.visualstudio.com/docs/copilot/copilot-customization#_use-variables-in-prompts)
- [GitHub Docs: Using Copilot in Issues](https://docs.github.com/en/copilot/using-github-copilot/using-copilot-in-github)
- [GitHub Docs: Custom Prompts](https://docs.github.com/en/copilot/customizing-copilot/adding-custom-prompts-for-github-copilot)

**Community Resources:**
- [Awesome Copilot: PM Workflows](https://github.com/github/awesome-copilot) (search for product management)
- Product-focused prompt libraries you can adapt for your team

**Apply to Your Real Work:**
- Bring your current backlog and translate 3-5 items using these prompts
- Share with your product team—these patterns work across any tech stack
- Customize the acceptance criteria format to match your org's standards

