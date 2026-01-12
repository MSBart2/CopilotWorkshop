# Module 5: Custom Instructions

## ⏰ Monday 3:00 PM — Context-Aware Expertise

> *"The Character Detail v2 feature touched tests, API routes, Docker configs, and React components. Each file type needed different expertise. Can Copilot switch contexts automatically?"*  
> — Elena, realizing the pattern after reviewing Module 04's output

---

## 📖 The Story So Far

> 🧵 **The Golden Thread Continues**: In Module 04, the team used agent mode to build Character Detail v2—a rich feature with episodes, quotes, related characters, and favorites. The agent created backend endpoints, frontend components, and tests. But as Elena reviews the output, she notices a pattern: different file types have different problems.

The tests are inconsistent. The API endpoint doesn't follow REST conventions perfectly. The Dockerfile (untouched since the contractor left) has security issues. The React components handle loading states differently.

*"Our repo-wide instructions gave the agent general context,"* David observes. *"But tests need Elena's QA patterns. Dockerfiles need Jordan's security checklist. What if we could create instructions that activate automatically based on what file type you're working in?"*

**This module's mission**: Create specialized instruction files that provide contextual expertise based on file patterns—ensuring that every file type gets the right expertise automatically.

---

## 🎯 Learning Objectives

By the end of this module, you will:

- Understand the hierarchy of Copilot instructions (repo → folder → file)
- Create file-type-specific instructions using `applyTo` patterns
- Create path-based instructions for different parts of your codebase
- Build specialized "expertise" instructions for domains like security, deployment, and testing
- See how instructions compound and combine
- **Complete the Character Detail v2 feature** with proper tests, deployment, and components

**Time**: ~90 minutes  
**Personas**: Elena (QA), David (Architect), Jordan (DevOps), Priya (Junior)

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

**[Jordan's Path →](personas/jordan.md)**  
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
| [5.1](EXERCISES.md#exercise-51-testing-instructions--the-character-detail-tests-need-help) | Testing | 20m |
| [5.2](EXERCISES.md#exercise-52-api-route-instructions--the-quote-of-the-day-endpoint) | API Routes | 25m |
| [5.3](EXERCISES.md#exercise-53-infrastructure-instructions--shipping-character-detail-v2) | DevOps | 25m |
| [5.4](EXERCISES.md#exercise-54-react-component-instructions--the-episode-appearances-component) | React | 25m |

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

> 🧵 **The Golden Thread**: Every instruction file you create in this module would have improved the Character Detail v2 output from Module 04—and will improve every future feature.

**What we create in this module:**

```
.github/instructions/
├── testing.instructions.md          # Elena's QA expertise
├── api-routes.instructions.md       # David's REST patterns  
├── infrastructure.instructions.md   # Jordan's DevOps knowledge
└── react-components.instructions.md # Priya's React standards
```

**How instructions combine with Character Detail:**

When editing `CharacterDetail.test.jsx`:
1. Repository instructions (always) ✓
2. React component instructions (`**/*.jsx`) ✓
3. Testing instructions (`**/*.test.jsx`) ✓

Copilot gets **combined context** from all matching files.

**The Module 04 → Module 05 connection:**

| Module 04 Output | Module 05 Improvement |
|------------------|----------------------|
| CharacterDetail tests | Testing instructions ensure consistency |
| `/characters/:id/full` endpoint | API route instructions enforce REST patterns |
| Contractor's Dockerfile | Infrastructure instructions fix security |
| Agent-generated components | React instructions ensure proper patterns |

---

## 🧠 Mindful Moment: Institutional Knowledge

Custom instructions capture **institutional knowledge**:

- Elena's years of QA experience → `testing.instructions.md`
- David's architectural patterns → `api-routes.instructions.md`
- Jordan's security practices → `infrastructure.instructions.md`
- Priya's React learning → `react-components.instructions.md`

This knowledge doesn't leave when people do. It's **codified and shared**.

---

## ✅ Module Checklist

Before moving to Module 6, verify:

- [ ] Created `.github/instructions/` directory
- [ ] Created testing instructions (Exercise 5.1)
- [ ] Created API route instructions and Quote of the Day endpoint (Exercise 5.2)
- [ ] Created infrastructure instructions and secured Dockerfile (Exercise 5.3)
- [ ] Created React component instructions and EpisodeAppearances component (Exercise 5.4)
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

**[Module 6: Agent Skills](../06-agent-skills/README.md)** (Monday 4:00 PM)

Your custom instructions are ready. Now let's create reusable skills that agents can invoke—domain-specific capabilities that go beyond file patterns. The Character Detail feature continues to evolve as you add skills for data validation, feature requirements, and more.
