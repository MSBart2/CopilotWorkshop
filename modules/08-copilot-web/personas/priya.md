# Priya's Path: Copilot on the Web

## 🎯 Your Focus: Structured Issue Creation from Chaos

Priya, this module shows how GitHub.com's Copilot features help you turn messy bug reports and unclear requirements into well-structured issues. Instead of spending 20 minutes organizing chaos, you'll learn to use Copilot to create the kind of issues that senior developers appreciate.

**Your exercise**: 8 (From Logs to Issue)  
**Time**: ~5 minutes  
**Theme**: Learning professional documentation patterns through AI assistance

---

## Your Journey in This Module

```
Priya's Arc:
┌─────────────────────────────────────────────────────────────────┐
│  "This bug report is a mess—logs, vague description, no steps"  │
│                         ↓                                       │
│  Uses Copilot to structure the chaos                            │
│                         ↓                                       │
│  "Now I understand why senior devs insist on structured issues" │
└─────────────────────────────────────────────────────────────────┘
```

---

## Exercise 8: From Logs to Issue — "Clarity from Chaos"

**Tier**: 💼 Business  
**Time**: 5 minutes

### 📖 The Story

**Priya** received a bug report from a user that looks like this:

```
hey something's broken. the character page won't load. here's what I got:

ERROR: TypeError: Cannot read property 'name' of undefined
    at CharacterCard.jsx:42
    at Array.map (<anonymous>)
    at CharacterList.jsx:18
    
it worked yesterday and now it doesn't. please fix asap!!!
```

That's it. No reproduction steps. No browser info. No expected vs. actual behavior.

*"How am I supposed to work with this?"* Priya thinks. *"If I ask for more details, they'll think I'm stalling. If I guess, I might fix the wrong thing."*

Instead of spending 20 minutes organizing it, she uses Copilot to generate a structured issue.

### ❌ The "Before" — What Frustration Looks Like

Without Copilot, Priya has to:

1. Read the messy report (2 minutes)
2. Try to understand what happened (5 minutes)
3. Manually write reproduction steps based on guesses (5 minutes)
4. Format it according to the team's template (5 minutes)
5. Add appropriate labels and assignees (3 minutes)

**Total: 20 minutes** just to create a proper issue from a vague report. And she's not confident it's accurate.

*"I wish I knew what questions to ask..."*

### 🎯 Objective

Generate a high-quality issue from unstructured inputs using Copilot on GitHub.com.

### 📋 Steps

1. **Open a new issue on GitHub.com**
   
   Navigate to your repository → Issues → New Issue

2. **Paste the messy input into the issue draft**
   
   Put the original bug report in the description:
   ```
   hey something's broken. the character page won't load. here's what I got:

   ERROR: TypeError: Cannot read property 'name' of undefined
       at CharacterCard.jsx:42
       at Array.map (<anonymous>)
       at CharacterList.jsx:18
       
   it worked yesterday and now it doesn't. please fix asap!!!
   ```

3. **Ask Copilot to structure it**
   
   Click the Copilot icon and ask:
   ```
   Help me turn this into a structured bug report with:
   - Clear title
   - Summary of the issue
   - Likely reproduction steps
   - Expected vs actual behavior
   - Acceptance criteria for the fix
   ```
   
   **Expected**: Copilot generates:
   ```markdown
   ## Bug: Character page crashes with TypeError on undefined name
   
   ### Summary
   The character list page is failing to render due to a null/undefined 
   character object being processed by CharacterCard component.
   
   ### Error Details
   - Type: TypeError - Cannot read property 'name' of undefined
   - Location: CharacterCard.jsx:42, called from CharacterList.jsx:18
   
   ### Likely Reproduction Steps
   1. Navigate to the character list page
   2. Page attempts to render characters
   3. One or more character objects are undefined/null
   4. Map operation fails when accessing .name property
   
   ### Expected Behavior
   Character page should load successfully, gracefully handling any 
   missing character data.
   
   ### Actual Behavior
   Page crashes with TypeError, preventing all characters from displaying.
   
   ### Acceptance Criteria
   - [ ] CharacterCard handles undefined/null props gracefully
   - [ ] CharacterList filters out invalid character objects before mapping
   - [ ] Error boundary catches and displays user-friendly message
   - [ ] Root cause of undefined character data is identified and fixed
   ```

4. **Edit to match your team's template**
   
   Review Copilot's output and:
   - Adjust to match your team's issue template
   - Add appropriate labels (bug, priority, affected-component)
   - Set assignee if known
   - Add any additional context you have

### ✅ Success Criteria

- [ ] Issue has a clear, descriptive title
- [ ] Summary explains the problem concisely
- [ ] Reproduction steps are logical (even if inferred)
- [ ] Expected vs actual behavior is defined
- [ ] Acceptance criteria are testable
- [ ] Labels and owners set per your team's process

### ✨ The "After" — The Transformation

**Before Copilot** (20 minutes):
1. Struggle to understand messy report
2. Guess at reproduction steps
3. Manually format everything
4. Hope you got it right

**After Copilot** (5 minutes):
1. Paste the chaos
2. Ask Copilot to structure it
3. Review and refine
4. Submit confident, well-structured issue

### 📚 Official Docs

- [Using Copilot on GitHub.com](https://docs.github.com/en/copilot/using-github-copilot/using-github-copilot-on-githubcom)
- [GitHub Issues documentation](https://docs.github.com/en/issues)

### 💭 Priya's Transformation

*"Turning chaos into a clean issue made triage so much faster. But more than that—I learned what a good bug report looks like. The structure Copilot suggested is what senior devs expect: clear title, reproduction steps, expected vs. actual. Now I understand why they insist on well-structured issues. It's not bureaucracy, it's communication. And with Copilot, I can produce that quality even when the input is garbage."*

---

## 🎯 Priya's Module Summary

### Your Transformation

| Before | After |
|--------|-------|
| 20 minutes organizing chaos | 5 minutes with AI structure |
| Guessing at reproduction steps | Logical inference from error stack |
| Uncertain about issue format | Learning professional patterns |
| Afraid to ask clarifying questions | Confident in structured output |

### The Learning Win

More than just saving time, you learned:
- **What good issues look like** — Clear title, repro steps, acceptance criteria
- **How to infer from error stacks** — The stack trace tells a story
- **Why structure matters** — Makes triage and fixing faster for everyone

### Key Insight

*"Copilot doesn't just format—it teaches me what questions to ask and what information matters."*

Every time you use Copilot to structure an issue, you're learning the patterns senior developers use. Eventually, you'll know them by heart.

---

## ➡️ Continue Your Journey

**Next for Priya**: [Module 9: Copilot CLI](../09-copilot-cli/README.md) — Command-line AI assistance for shell commands you're still learning.

**Also relevant**: [Module 4: Custom Instructions](../04-custom-instructions/README.md) — Your React component instructions help Copilot understand FanHub's patterns.
