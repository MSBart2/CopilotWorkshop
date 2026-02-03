# Exercise 0.2: Experience "The Struggle"

## 🔨 Exercise

**Lead:** Everyone ⭐ | **Time:** 15 min

#### 📖 The Setup

It's Monday, 9:30 AM. You've just looked at the FanHub starter code. It's time to experience what happens when you try to build with AI that doesn't understand your codebase.

This exercise is intentionally frustrating. You need to feel the "before" state to appreciate the transformation.

#### 🎯 Objective

Try to add a simple feature using Copilot WITHOUT any configuration or documentation. Experience the struggle. Document the problems.

#### ❌ The "Before" — What Frustration Looks Like

You're about to experience:
- ✗ Generic suggestions that don't match your architecture
- ✗ Inconsistent code styles (because the codebase is inconsistent)
- ✗ Show-generic content ("John Doe" instead of your show's characters)
- ✗ Uncertainty about which patterns to follow
- ✗ Multiple attempts to get what you want

**This is on purpose.** You need to see the problem to appreciate the solution.

#### 📋 Steps

**1. Clone the FanHub starter app** (we'll create this in Phase 2)

```bash
# Clone the training repo if you haven't already
git clone https://github.com/YOUR_USERNAME/CopilotTraining.git
cd CopilotTraining

# Navigate to the FanHub starter
cd fanhub

# Install dependencies and start the app
docker-compose up -d
cd frontend && npm install && npm start
```

**2. Browse the existing code** (spend 5-10 minutes)

Look at:
- `fanhub/backend/database/schema.sql` — generic database structure
- `fanhub/backend/api/routes/` — inconsistent API patterns
- `fanhub/frontend/components/` — mixed component styles
- `fanhub/docs/` — empty! No architecture, no patterns, no standards

**3. Choose your TV show theme**

Pick your favorite show. Some ideas:
- 📺 The Office (US)
- 🔦 Stranger Things  
- 🧪 Breaking Bad
- 🛡️ The Mandalorian
- 🐉 Game of Thrones
- 🚀 The Expanse

This will be YOUR FanHub throughout the training.

**4. Try to add a character detail page**

Open `fanhub/frontend/pages/` and create a new file `CharacterDetail.jsx` (or `.tsx` if using TypeScript).

Ask Copilot Chat:

```
Add a character detail page that shows:
- Character name
- Photo
- Biography
- List of episodes they appear in
```

**Watch what happens:**
- Does it match your show? Or is it generic?
- Does it follow existing component patterns? Or create new ones?
- Does it use the right API endpoints? Or make assumptions?
- Does the styling match the rest of the app?

---

#### ✅ Success Criteria

- [ ] FanHub app is running locally
- [ ] You've chosen your show theme
- [ ] You attempted the Character Detail Challenge with Copilot
- [ ] Created `fanhub/docs/character-detail-challenge.md` with Attempt 1 metrics
- [ ] Documented specific problems encountered
- [ ] Felt the frustration (this is important!)
- [ ] Ready to revisit this challenge in Module 01 and 02

#### 🧠 Mindful Moment: Before

**Marcus thinks:** "Is Copilot even helping? This feels like fighting with autocomplete."

**Priya worries:** "If I can't get good results, maybe I'm not using it right?"

**Sarah observes:** "This is what I was afraid of. Generic garbage that doesn't understand our domain."

**David notes:** "The AI doesn't know our architecture, our patterns, or our standards. It's guessing."

#### 📚 Official Docs

- [GitHub Copilot Documentation](https://docs.github.com/en/copilot)
- [Getting Started with Copilot Chat](https://docs.github.com/en/copilot/using-github-copilot/asking-github-copilot-questions-in-your-ide)
- [Copilot Chat in VS Code](https://code.visualstudio.com/docs/copilot/copilot-chat)

#### ✨ The "After" — What's Coming

In Module 1, you'll configure Copilot with:
- Architecture documentation (`docs/ARCHITECTURE.md`)
- Team coding standards (`.github/copilot-instructions.md`)
- Your show's specific context

**Then you'll revisit the Character Detail Challenge** and experience the improvement:

| After... | Expected Improvement |
|----------|---------------------|
| ARCHITECTURE.md | Structure improves, but patterns still inconsistent |
| copilot-instructions.md | Consistent patterns, faster results |
| Plan Mode (Module 02) | First-try success with comprehensive solution |

The same prompt. Dramatically different results:
- ✓ Show-specific content (your characters, not "John Doe")
- ✓ Follows your architecture (uses correct API patterns)
- ✓ Matches your standards (consistent styling and structure)
- ✓ Works on the first try (especially with plan mode)

---

## ➡️ Next Exercise

**[Exercise 0.3: Set Your Success Metrics](exercise-0.3.md)** — Define how YOU will measure success with AI-assisted development.
