## Five Principles of AI-Assisted Development

> These principles are the foundation of everything that follows. They shape how you think, communicate with AI, and build better software faster.

<table>
<tr>
<th width="5%">#</th>
<th width="30%">Principle</th>
<th width="65%">What It Means</th>
</tr>
<tr>
<td align="center">1</td>
<td>🔍 <strong>Clarity Over Cleverness</strong></td>
<td>Clear thinking enables effective AI collaboration. If you can't explain it clearly to a human, you can't explain it to AI.</td>
</tr>
<tr>
<td align="center">2</td>
<td>🎯 <strong>Intent Over Implementation</strong></td>
<td>Describe <em>WHAT</em> you want (outcomes, constraints), not <em>HOW</em> to build it (loops, syntax). Your expertise is knowing what to build.</td>
</tr>
<tr>
<td align="center">3</td>
<td>📚 <strong>Documentation as Leverage</strong></td>
<td>Write once, benefit infinitely. Documentation helps humans <em>AND</em> AI. Every piece of context you document pays dividends forever.</td>
</tr>
<tr>
<td align="center">4</td>
<td>🧩 <strong>Context is Everything</strong></td>
<td>AI doesn't read your mind—it reads your context. Quality of suggestions matches quality of context you provide.</td>
</tr>
<tr>
<td align="center">5</td>
<td>⚖️ <strong>Validate, Don't Automate</strong></td>
<td>AI proposes; you decide. Your expertise catches what AI misses. Treat AI as a collaborator requiring code review.</td>
</tr>
</table>

---

### 1. 🔍 Clarity Over Cleverness

**Clear thinking enables effective AI collaboration**

The best code is code anyone can understand. If you can't explain it clearly to a human, you can't explain it to AI.

**Example:**

| ❌ Vague | ✅ Clear |
|----------|----------|
| *"Make the character page better"* | *"Add a character biography section using the same card styling as CharacterCard.jsx"* |
| **Result:** AI guesses, fails | **Result:** AI succeeds immediately |

**Your investment:** Practice articulating what you want before typing. The thinking is the hard part—AI handles the rest.

---

### 2. 🎯 Intent Over Implementation

**Describe WHAT you want, not HOW to build it**

Your expertise is knowing what to build and why. Let AI handle the syntax, loops, and boilerplate.

**Example:**

| ❌ Implementation-Focused | ✅ Intent-Focused |
|--------------------------|-------------------|
| *"Create a function that queries the database with a WHERE clause and LIKE operator"* | *"Create a search feature that finds characters by name, show, or episode appearances"* |
| **Result:** You dictate syntax details | **Result:** AI chooses best implementation |

**Your investment:** Learn to express requirements and constraints clearly. Stay at the design level where your expertise matters most.

---

### 3. 📚 Documentation as Leverage

**Write once, benefit infinitely—for humans AND AI**

Every piece of context you document pays dividends on every AI interaction—forever.

**Example:**

| ❌ Without Documentation | ✅ With Documentation |
|-------------------------|----------------------|
| Each team member's Copilot gives different suggestions | Everyone's Copilot follows the same architecture and patterns |
| Standards exist only in senior developers' heads | Standards are documented once, enforced automatically |

**Your investment:** Document architecture, patterns, and standards. Same effort as before, but now with double the payoff.

---

### 4. 🧩 Context is Everything

**AI doesn't read your mind—it reads your context**

The quality of suggestions is directly proportional to the quality of context you provide.

**Example:**

| ❌ Without Context | ✅ With Context |
|-------------------|-----------------|
| Generic suggestions that don't fit your codebase | Suggestions that follow your architecture, patterns, and domain |
| Every prompt requires extensive explanation | AI already understands your project standards |

**Your investment:** Learn what context to provide when:
- **Instructions** for persistent patterns
- **`@workspace`** for project awareness
- **`#file`** for targeted focus
- **Images** for visual design

---

### 5. ⚖️ Validate, Don't Automate

**AI proposes; you decide with expert judgment**

Your expertise catches what AI misses—security holes, scalability issues, edge cases, business logic. Treat AI as a collaborator requiring code review, not a vending machine.

**Example:**

| ❌ Novice Approach | ✅ Expert Approach |
|-------------------|-------------------|
| *"Create a user service"*<br>→ Accept whatever comes out | *"Create a user service"*<br>→ Review critically<br>→ *"Add input validation"*<br>→ Review again<br>→ Ship |

**Your investment:** Always review AI output with the same rigor you'd apply to a junior developer's code. The goal isn't to remove human judgment—it's to focus it where it matters most.

---

## 🗺️ The Copilot Customization Map

Throughout this training, you'll learn five ways to customize GitHub Copilot. Here's your roadmap—refer back to this when deciding which tool to use.

> 📚 **Learn more**: [GitHub Docs: Customizing GitHub Copilot](https://docs.github.com/en/copilot/customizing-copilot)

### When to Use What

**The simple question**: *"What am I trying to teach Copilot?"*

| I want Copilot to... | Use | Example |
|---------------------|-----|---------|
| **Know our project basics** | Repo Instructions | "This is a React/Node app, use these patterns" |
| **Apply rules to specific files** | Custom Instructions | "For test files, use Jest with these conventions" |
| **Run a specific task I trigger** | Prompts | "Generate a React component with tests" |
| **Act as a workflow** | Agents | "Be a security reviewer executing a multi-step process" |
| **Know our domain automatically** | Skills | "Validate TV show data against our schema" |