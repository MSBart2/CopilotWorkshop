# Module 4: Custom Instructions

## ⏰ Monday 2:00 PM — Context-Aware Expertise

> *"The Character Detail v2 feature will touch tests, API routes, Docker configs, and React components. Each file type needs different expertise. Can we prepare Copilot to switch contexts automatically?"*  
> — Elena, planning ahead after the prompts work from Module 03

---

## 📖 The Story So Far

> 🧵 **The Golden Thread Continues**: In Module 03, the team created custom prompts—reusable patterns for common tasks. But prompts are *opt-in*—developers have to remember to use them. What about expertise that should *always* apply?

The tests should follow Elena's QA patterns. The API endpoints should follow David's REST conventions. The Dockerfile (untouched since the contractor left) needs Marcus's security checklist. The React components should handle loading states consistently.

*"Custom prompts are great when you remember to use them,"* David observes. *"But what about patterns that should apply every time you touch a specific file type? I don't want to remember to invoke a prompt every time I edit an API route."*

**This module's mission**: Create specialized instruction files that provide contextual expertise based on file patterns—ensuring that every file type gets the right expertise automatically. When we build Character Detail v2 in Module 07, all these instructions will activate together.

---

## 🎯 Learning Objectives

By the end of this module, you will:

- Understand the hierarchy of Copilot instructions (repo → folder → file)
- Create file-type-specific instructions using `applyTo` patterns
- Create path-based instructions for different parts of your codebase
- Build specialized "expertise" instructions for domains like security, deployment, and testing
- See how instructions compound and combine
- **Complete the Character Detail v2 prerequisites** with proper tests, deployment, and component patterns

**Time**: ~90 minutes  
**Personas**: Elena (QA), David (Architect), Marcus (DevOps), Priya (Junior)

---

## 🧭 Choose Your Path

<table>
<tr>
<td width="33%" valign="top">

### 🎭 By Persona
*Focused on your role*

**[Elena's Path →](personas/elena.md)**  
Testing standards, QA automation  
*~25 minutes*

**[Marcus's Path →](personas/marcus.md)**  
Infrastructure, DevOps security  
*~25 minutes*

**[Priya's Path →](personas/priya.md)**  
React patterns, component standards  
*~20 minutes*

</td>
<td width="33%" valign="top">

### 📖 Full Story
*Complete narrative*

**[EXERCISES.md →](EXERCISES.md)**  
All exercises in story order  
*~90 minutes*

Best for: First-time learners, instructor-led sessions

</td>
<td width="33%" valign="top">

### ⚡ Quick Navigator
*Jump to what you need*

| Exercise | Focus | Time |
|----------|-------|------|
| [4.1](EXERCISES.md#exercise-41-testing-instructions--the-character-detail-tests-need-help) | Testing | 20m |
| [4.2](EXERCISES.md#exercise-42-api-route-instructions--the-quote-of-the-day-endpoint) | API Routes | 25m |
| [4.3](EXERCISES.md#exercise-43-infrastructure-instructions--shipping-character-detail-v2) | DevOps | 25m |
| [4.4](EXERCISES.md#exercise-44-react-component-instructions--the-episode-appearances-component) | React | 25m |

</td>
</tr>
</table>

---

## 📚 Key Concepts

### Custom Instructions Files

Custom instructions live in the `.github/instructions/` folder:

```
.github/
├── copilot-instructions.md          # Repository-wide (Module 1)
└── instructions/
    ├── testing.instructions.md      # For test files
    ├── api-routes.instructions.md   # For API route files
    ├── components.instructions.md   # For React components
    └── infrastructure.instructions.md # For infra/deployment files
```

> 📂 **Reference Examples**: See [`examples/completed-config/.github/instructions/`](../../examples/completed-config/.github/instructions/) for sample custom instructions files covering testing, API routes, infrastructure, and React components.

### The `applyTo` Front Matter

Each instruction file uses YAML front matter to specify when it activates:

```markdown
---
applyTo: "**/*.test.{js,ts,jsx,tsx}"
---

# Testing Instructions

When generating or modifying tests...
```

### Pattern Syntax

| Pattern | Matches |
|---------|---------|
| `**/*.test.js` | All `.test.js` files anywhere |
| `src/api/**` | All files under `src/api/` |
| `**/*.{ts,tsx}` | All TypeScript files |
| `**/migrations/**` | All migration files |
| `Dockerfile*` | Dockerfile and variants |
| `["**/*.jsx", "**/*.tsx"]` | Array of patterns |

### Instruction Hierarchy

When multiple instructions apply, they combine:

```
Repository instructions (always active)
        +
Path-based instructions (if path matches)
        +
File-type instructions (if extension matches)
        =
Combined context for that file
```

More specific instructions add to (not replace) broader ones.

---

## 🧠 Mindful Moment: From One Size to Custom Fit

Think about the evolution of our instructions:

| Level | Scope | Example |
|-------|-------|---------|
| **Repository** | Everything | `.github/copilot-instructions.md` |
| **Path-based** | Specific folders | `applyTo: "src/api/**"` |
| **File-type** | Specific extensions | `applyTo: "**/*.test.{js,ts}"` |
| **Combined** | Multiple patterns | `applyTo: ["**/*.tsx", "**/*.jsx"]` |

Just like a senior developer changes their approach based on what they're working on, Copilot can now do the same.

---

## 🔗 Compounding Value

> 🧵 **The Golden Thread**: Every instruction file you create in this module will improve the Character Detail v2 output when we build it in Module 07—and will improve every future feature.

**What we create in this module:**

```
.github/instructions/
├── testing.instructions.md          # Elena's QA expertise
├── api-routes.instructions.md       # David's REST patterns  
├── infrastructure.instructions.md   # Marcus's DevOps knowledge
└── react-components.instructions.md # Priya's React standards
```

**How instructions will combine with Character Detail v2:**

When the agent edits `CharacterDetail.test.jsx` in Module 07:
1. Repository instructions (always) ✓
2. React component instructions (`**/*.jsx`) ✓
3. Testing instructions (`**/*.test.jsx`) ✓

Copilot gets **combined context** from all matching files.

**Building toward Module 07:**

| Module 04 Preparation | Module 07 Payoff |
|----------------------|------------------|
| Testing instructions | CharacterDetail tests will follow QA patterns |
| API route instructions | `/characters/:id/full` endpoint will follow REST conventions |
| Infrastructure instructions | Dockerfile will be secure from the start |
| React component instructions | Components will handle loading states consistently |

---

## 🧠 Mindful Moment: Institutional Knowledge

Custom instructions capture **institutional knowledge**:

- Elena's years of QA experience → `testing.instructions.md`
- David's architectural patterns → `api-routes.instructions.md`
- Marcus's security practices → `infrastructure.instructions.md`
- Priya's React learning → `react-components.instructions.md`

This knowledge doesn't leave when people do. It's **codified and shared**.

---

## ✅ Module Checklist

Before moving to Module 5, verify:

- [ ] Created `.github/instructions/` directory
- [ ] Created testing instructions (Exercise 4.1)
- [ ] Created API route instructions and Quote of the Day endpoint (Exercise 4.2)
- [ ] Created infrastructure instructions and secured Dockerfile (Exercise 4.3)
- [ ] Created React component instructions and EpisodeAppearances component (Exercise 4.4)
- [ ] Verified instructions activate on the right files
- [ ] Tested that generated code follows the specified patterns
- [ ] Understand how instructions combine hierarchically

---

## 📚 Official Documentation

- [GitHub Docs: Custom Instructions](https://docs.github.com/en/copilot/customizing-copilot/adding-repository-custom-instructions)
- [VS Code: Copilot Customization](https://code.visualstudio.com/docs/copilot/copilot-customization)
- [GitHub Docs: File Path Patterns](https://docs.github.com/en/copilot/customizing-copilot/adding-repository-custom-instructions#about-custom-instructions)

---

## ➡️ Next Up

**[Module 5: Agent Skills](../05-agent-skills/README.md)** (Monday 3:30 PM)

Your custom instructions are ready. Now let's create reusable skills that agents can invoke—domain-specific capabilities that go beyond file patterns. When we build Character Detail v2 in Module 07, both your instructions AND your skills will activate together.
