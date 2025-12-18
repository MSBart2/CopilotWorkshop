# Module 1: Getting Started — Your First Wins with Copilot

## 📖 Overview

Install, connect, and try the core chat flow. You’ll run your first explain/fix/test loop, learn mentions and slash commands, and set expectations for how Copilot fits your workflow.

## Prerequisites

- VS Code + GitHub Copilot Chat
- A repository opened locally (this repo is fine)

## Estimated Time

- 20–30 minutes

---

## 🎯 Learning Objectives

- Install/verify Copilot Chat in VS Code
- Use mentions (@workspace, @vscode) and slash commands (/explain, /fix, /tests)
- Run a basic “explain → improve → test” loop
- Know where to find official docs and support

---

## 📚 Content

### Verify Installation

- Open the Chat view; sign in if prompted
- Ensure Copilot Chat is enabled (organization policies may apply)

### Core Chat Concepts

- Mentions: direct questions to the right specialist
- Slash commands: fast paths for common actions
- Selection-aware: chat uses your current file/selection where applicable

### Quick Patterns

- Explain-first: `/explain` selected code before changing it
- Small diffs: ask Copilot for minimal, safe edits
- Tests early: use `/tests` to anchor quality

---

# Module 1: Getting Started with GitHub Copilot

## 📖 Overview

This module is your launchpad into AI-assisted development. We'll get GitHub Copilot installed, configured, and working in VS Code—then prove to yourself that this changes everything.

Whether you remember the days of memorizing API documentation or you've never known a world without Stack Overflow, by the end of this module you'll understand why developers say Copilot feels like having a senior developer sitting next to you.

### Before You Begin: Repository Setup

To complete the exercises and save your work, start by forking or cloning this training repository into a location where you can make commits:

- Recommended for teams: Fork this repo into your company’s GitHub organization
- Solo practice: Fork to your personal account or clone directly if you don’t need to push changes upstream

Then clone locally and open in VS Code:

```bash
git clone https://github.com/<your-org-or-user>/CopilotTraining.git
cd CopilotTraining
code .
```

Replace `<your-org-or-user>` with your GitHub organization or username.

## Prerequisites

- GitHub account (Copilot subscription or trial)
- Visual Studio Code installed
- Internet access and permission to install extensions

## Estimated time

- 20–30 minutes

## 🎯 Learning Objectives

By the end of this module, you will:

- Have GitHub Copilot fully configured in VS Code
- Understand the three licensing tiers and which fits your situation
- Know how your code and prompts are handled (privacy matters)
- Experience your first "wow" moment with AI-assisted coding
- Understand the fundamental concepts: completions, chat, and context

---

## 📚 Content

### What is GitHub Copilot?

GitHub Copilot is an AI pair programmer trained on billions of lines of public code. It doesn't just autocomplete—it understands _intent_. Write a comment describing what you want, and Copilot suggests the implementation. Start typing a function, and it predicts where you're going.

**What makes it different from traditional autocomplete:**

| Traditional IntelliSense                   | GitHub Copilot                                 |
| ------------------------------------------ | ---------------------------------------------- |
| Suggests method names you've already typed | Suggests entire functions you've never written |
| Requires you to know the API               | Learns from how APIs are commonly used         |
| Works within one file                      | Understands context across open files          |
| Syntax-focused                             | Intent-focused                                 |

**Core Capabilities:**

- **Inline Completions** — Suggestions appear as you type, in ghost text
- **Copilot Chat** — A conversational interface for explanations, refactoring, and generation
- **Context Awareness** — Uses open files, comments, and code structure to improve suggestions

### Licensing Options

GitHub Copilot comes in three tiers:

| Tier                   | Best For                       | Key Features                                              |
| ---------------------- | ------------------------------ | --------------------------------------------------------- |
| **Copilot Individual** | Personal projects, freelancers | Full functionality, monthly billing                       |
| **Copilot Business**   | Teams and organizations        | Enhanced privacy, admin controls, no data retention       |
| **Copilot Enterprise** | Large enterprises              | Custom models, knowledge bases, organization-wide context |

> 💡 **For this training:** Any tier works. If you're using an organizational license, your admin has already configured the privacy settings.

**📖 Official Documentation:**

- [GitHub Copilot Plans](https://docs.github.com/en/copilot/about-github-copilot/subscription-plans-for-github-copilot)
- [Pricing Information](https://github.com/features/copilot#pricing)

### Getting Access

**Individual Users:**

1. Visit [github.com/settings/copilot](https://github.com/settings/copilot)
2. Start a free trial or subscribe
3. Configure your preferences

**Organization Users:**

1. Your organization admin enables Copilot in org settings
2. They assign you a license
3. You'll see Copilot available when you sign in

**📖 Official Documentation:**

- [Setting up GitHub Copilot](https://docs.github.com/en/copilot/setting-up-github-copilot)
- [Managing Copilot for your organization](https://docs.github.com/en/copilot/managing-copilot/managing-github-copilot-in-your-organization)

### Installation in VS Code

1. Open VS Code
2. Go to Extensions (`Ctrl+Shift+X` / `Cmd+Shift+X`)
3. Search for **"GitHub Copilot"**
4. Install both:
   - **GitHub Copilot** (inline completions)
   - **GitHub Copilot Chat** (conversational interface)
5. Click "Sign in to GitHub" when prompted
6. Authorize VS Code to access your GitHub account

**Verification:** Look for the Copilot icon in your status bar (bottom right). If it's there and not crossed out, you're ready.

**📖 Official Documentation:**

- [Installing GitHub Copilot in VS Code](https://docs.github.com/en/copilot/managing-copilot/configure-personal-settings/installing-the-github-copilot-extension-in-your-environment)

### Privacy and Security

This matters. Especially in enterprise environments.

**What Copilot sees:**

- The code in your currently open files
- Your comments and prompts
- File names and structure

**What happens to your code:**

| License Tier | Code Retention                                 | Prompt Retention                |
| ------------ | ---------------------------------------------- | ------------------------------- |
| Individual   | Used for model improvement (opt-out available) | Processed, not stored long-term |
| Business     | **No retention**                               | **No retention**                |
| Enterprise   | **No retention**                               | **No retention**                |

> 🔒 **For enterprise users:** Your organization's policies determine exactly how data is handled. Copilot Business and Enterprise are designed for sensitive codebases.

**📖 Official Documentation:**

- [GitHub Copilot Trust Center](https://resources.github.com/copilot-trust-center/)
- [Privacy Statement](https://docs.github.com/en/site-policy/privacy-policies/github-copilot-privacy-statement)

### Core Concepts

**1. Inline Completions**
As you type, Copilot shows suggestions in gray "ghost text."

- `Tab` — Accept the suggestion
- `Esc` — Dismiss it
- `Alt+]` / `Option+]` — See alternative suggestions
- `Alt+[` / `Option+[` — Previous alternative

**2. Copilot Chat**
A sidebar chat interface for longer interactions:

- Open with `Ctrl+Shift+I` / `Cmd+Shift+I`
- Ask questions about code, request explanations, generate snippets

**3. Inline Chat**
Quick conversations without leaving your code:

- Trigger with `Ctrl+I` / `Cmd+I`
- Perfect for "rewrite this function" or "add error handling here"

**4. Context**
Copilot's suggestions improve when it has more context:

- **Open files** — Keep related files open in your editor
- **Comments** — Describe your intent before writing code
- **Good naming** — Clear variable and function names guide better suggestions

---

## 🔨 Exercises

The following exercises use a connected narrative. Each one builds on concepts from the previous, but they can also be completed independently.

---

### Exercise 1: Installation Verification — "The Moment of Truth"

#### 📖 The Story

**Meet Sarah.** She's a senior developer at a financial services company. She's been coding for 15 years and has seen tools come and go. Yesterday, her CTO announced the company purchased Copilot licenses for all developers. Sarah is skeptical—she's heard the hype before.

_"Let's see if this thing actually works,"_ she thinks, opening VS Code.

#### 🎯 Objective

Verify your Copilot installation and experience your first AI-assisted suggestion.

#### 📋 Steps

1. **Confirm Copilot is active**

   - Look at the VS Code status bar (bottom right)
   - You should see a Copilot icon (looks like two sparkles or a small robot)
   - If it has a line through it, click it and select "Enable"

2. **Open the test file**

   - Open the file: [`src/utils/finance.js`](../../src/utils/finance.js)
   - Find the commented `calculateCompoundInterest` function signature
   - Uncomment and start typing to see Copilot's suggestion

3. **Watch the magic**

   - Pause for a moment after pressing Enter
   - Copilot should suggest the function body in gray text
   - Press `Tab` to accept

4. **Verify the suggestion makes sense**
   - The formula should be: `A = P(1 + r/n)^(nt)`
   - Copilot likely generated something mathematically correct

#### ✅ Success Criteria

- [ ] Copilot icon visible in status bar
- [ ] Ghost text appeared after typing the function signature
- [ ] You accepted a suggestion with Tab
- [ ] The generated code looks reasonable

#### 📚 Official Docs

- [Installing GitHub Copilot in VS Code](https://docs.github.com/en/copilot/managing-copilot/configure-personal-settings/installing-the-github-copilot-extension-in-your-environment)
- [Quickstart Guide](https://docs.github.com/en/copilot/quickstart)

#### 💭 Sarah's Reaction

_"Okay, that was... actually impressive. It knew the compound interest formula. I didn't even have to look it up."_

#### 🚀 Challenge Extension

Try these signatures and see what Copilot suggests (add them to [`src/utils/finance.js`](../../src/utils/finance.js)):

```javascript
// function calculateLoanAmortization(principal, annualRate, years) {

// function calculateSimpleInterest(principal, rate, time) {
```

**Reflection:** How close were the suggestions to what you would have written?

---

### Exercise 2: Comment-Driven Development — "The New Workflow"

#### 📖 The Story

**Meet Marcus.** He started his development career five years ago, right as DevOps was taking over. He's comfortable with YAML, Docker, and Kubernetes, but writing business logic still feels slow. He's watched senior developers seemingly pull code out of thin air.

Today, his tech lead shared a tip: _"Don't start with code. Start with comments. Tell Copilot what you want before you write anything."_

Marcus decides to try it.

#### 🎯 Objective

Learn to guide Copilot using comments as intent declarations.

#### 📋 Steps

1. **Open the order service file**

   - Open: [`src/services/order-service.js`](../../src/services/order-service.js)

2. **Write comments first, code second**

   - Find the `createOrder` method TODO and add a comment above it:
     ```javascript
     // Function to create a new order
     // Takes customerId, items array, and optional customer for discounts
     // Validates the order before creation
     // Calculates total using pricing service if customer provided
     // Returns the created order or throws validation error
     ```

3. **Let Copilot generate**

   - Start typing the method implementation: `async createOrder(customerId, items, customer = null) {`
   - Wait for Copilot's suggestion
   - Press `Tab` to accept

4. **Iterate with more comments**
   - Find the `validateOrder` method TODO and add:
     ```javascript
     // Function to validate an order's items
     // Checks that items array is not empty
     // Checks that all quantities are positive
     // Checks that all prices are valid numbers
     // Returns an object with isValid boolean and errors array
     ```
   - Start the method implementation and let Copilot complete it

#### ✅ Success Criteria

- [ ] Copilot generated a function matching your comment description
- [ ] The discount logic was included (because you mentioned it)
- [ ] The validation function checks what you specified

#### 📚 Official Docs

- [GitHub Copilot Documentation](https://docs.github.com/en/copilot)
- [Quickstart Guide](https://docs.github.com/en/copilot/quickstart)

#### 💭 Marcus's Realization

_"This is like pair programming, but my partner already knows every library and pattern. I just have to be clear about what I want."_

#### 🚀 Challenge Extension

**The Clarity Test:** Write two versions of a comment for the same function:

**Vague version:**

```javascript
// process the data
```

**Clear version:**

```javascript
// Transform an array of user objects into a Map
// where keys are user IDs and values are objects containing
// only the user's name and email (for GDPR compliance)
```

Generate both and compare. How much does clarity affect output quality?

---

### Exercise 3: Copilot Chat — "The Conversation"

#### 📖 The Story

**Meet Priya.** She just graduated from a coding bootcamp and landed her first job. She knows JavaScript basics, but the production codebase is overwhelming. There's a function with nested callbacks, promises, and something called "async/await" that she's seen but never used.

She's embarrassed to ask her team to explain basic concepts again. Then she remembers: _Copilot Chat doesn't judge_.

#### 🎯 Objective

Use Copilot Chat to learn concepts, get explanations, and generate code through conversation.

#### 📋 Steps

1. **Open Copilot Chat**

   - Press `Ctrl+Shift+I` (Windows/Linux) or `Cmd+Shift+I` (Mac)
   - The chat panel opens on the side

2. **Ask for an explanation**

   - Type: _"Explain the difference between callbacks, promises, and async/await in JavaScript. Give me a simple example of each doing the same thing."_
   - Read the explanation

3. **Generate code through conversation**

   - Type: _"Write a function that fetches user data from an API endpoint, handles errors gracefully, and returns null if the request fails. Use async/await."_
   - Review what Copilot generates

4. **Iterate on the response**

   - Type: _"Now add retry logic that attempts the request 3 times with a 1-second delay between attempts."_
   - See how it builds on the previous response

5. **Try inline chat**
   - Open the file [`src/utils/data-processor.js`](../../src/utils/data-processor.js)
   - This file contains old-style ES5 JavaScript that needs modernizing
   - Select the entire `processItems` function
   - Press `Ctrl+I` / `Cmd+I` for inline chat
   - Type: _"Modernize this to ES6+ with arrow functions and array methods"_
   - Review the suggested changes

#### ✅ Success Criteria

- [ ] You received a clear explanation with examples
- [ ] Copilot generated functional async/await code
- [ ] The retry logic built on the previous context
- [ ] Inline chat refactored the code

#### 📚 Official Docs

- [GitHub Copilot Documentation](https://docs.github.com/en/copilot)
- [Quickstart Guide](https://docs.github.com/en/copilot/quickstart)
- [VS Code Extension Documentation](https://docs.github.com/en/copilot/managing-copilot/configure-personal-settings/installing-the-github-copilot-extension-in-your-environment)

#### 💭 Priya's Discovery

_"I just learned more in 10 minutes than I did in a week of being afraid to ask questions. And I can ask follow-up questions until I actually understand."_

#### 🚀 Challenge Extension

**Debug with Chat:** Open the [`src/utils/data-processor.js`](../../src/utils/data-processor.js) file and ask Copilot Chat to find potential bugs in the `calculateSum` function:

Ask: _"Are there any potential bugs in the calculateSum function if passed an empty array or non-numeric values? Explain and fix."_

---

### Exercise 4: Context is Everything — "The Connected Codebase"

#### 📖 The Story

**Meet David.** He's a staff engineer who's been writing code for 20 years. He remembers when syntax mastery was everything—when knowing the obscure corners of C++ or Java made you invaluable. Now he's evaluating whether Copilot is actually useful, or just a fancy autocomplete.

His test: Can Copilot understand a project with multiple related files and generate code that _fits_?

#### 🎯 Objective

Understand how Copilot uses context from open files to generate more relevant suggestions.

#### 📋 Steps

1. **Open the project files**

   The exercise files are in the `/src` directory:

   **File 1:** [`src/models/customer.js`](../../src/models/customer.js) — Customer entity with tier and membership info

   **File 2:** [`src/config/discounts.js`](../../src/config/discounts.js) — Discount configuration for tiers

2. **Keep both files open in VS Code tabs**

   - This is crucial—Copilot uses open files for context

3. **Open the service file**

   Open: [`src/services/pricing-service.js`](../../src/services/pricing-service.js)

   This file has TODO comments for methods you'll implement.

4. **Let Copilot generate methods**

   - With your cursor inside the class, find the `calculateTierDiscount` TODO and uncomment it:
     ```javascript
     /**
      * Get the base discount percentage for a customer's tier
      * @param {string} tier - Customer tier: 'bronze', 'silver', 'gold', 'platinum'
      * @returns {number} Discount percentage as decimal (e.g., 0.10 for 10%)
      */
     calculateTierDiscount(tier) {
     ```
   - Let Copilot complete the method
   - Notice how it uses `TIER_DISCOUNTS` from the config file

5. **Add another method**
   - Find the `calculateCustomerDiscount` TODO and uncomment it:
     ```javascript
     /**
      * Calculate the discount percentage for a customer
      * based on their tier and loyalty years
      * @param {Customer} customer - The customer object
      * @returns {number} Total discount percentage as decimal
      */
     calculateCustomerDiscount(customer) {
     ```
   - Observe how Copilot connects the dots between Customer class and LOYALTY_BONUS

#### ✅ Success Criteria

- [ ] Copilot used constants from `discounts.js` (TIER_DISCOUNTS, LOYALTY_BONUS)
- [ ] Copilot used methods from `customer.js` (getYearsAsMember)
- [ ] The generated code is logically consistent with your project structure
- [ ] You didn't have to explain your project—Copilot inferred it

#### 📚 Official Docs

- [GitHub Copilot Documentation](https://docs.github.com/en/copilot)
- [Quickstart Guide](https://docs.github.com/en/copilot/quickstart)

#### 💭 David's Verdict

_"Okay, I'm convinced. This isn't autocomplete—it actually understands the project. It saw my Customer class, saw my discount config, and wrote code that connected them correctly. That's... actually useful."_

#### 🚀 Challenge Extension

**Test Context Limits:**

1. Close the `discounts.js` file (but keep `customer.js` open)
2. In `pricing-service.js`, ask Copilot to generate a new method
3. Notice how the suggestion quality changes without the config file context

**Experiment:** Try adding a detailed JSDoc comment at the top of the service file explaining the business rules. Does this improve suggestions even when related files are closed?

---

### Exercise 5: Explain and Improve — "Understanding Before Changing"

**Tier**: 🆓 Free
**Primary Persona**: Priya (Recent Graduate)
**Time**: 5 minutes

#### 📖 The Story

**Priya** has found a function she needs to modify, but she's not entirely sure what it does. Rather than guessing and potentially breaking something, she uses Copilot to understand the code first.

#### 🎯 Objective

Use `/explain` to understand code, then `/fix` to improve it safely.

#### 📋 Steps

1. Open any function in your project (or use [`src/services/order-service.js`](../../src/services/order-service.js))
2. Select the function body
3. Run `/explain` in Copilot Chat
4. Read the explanation to understand the logic
5. Ask: "Suggest a safer version with better variable names; keep the function signature"
6. Review the suggestion and apply if appropriate

#### ✅ Success Criteria

- [ ] You understand the function's behavior before modifying
- [ ] Copilot explained the logic clearly
- [ ] You received an improved version with better naming

#### 📚 Official Docs

- [Copilot Chat in VS Code](https://code.visualstudio.com/docs/copilot/copilot-chat)
- [Slash commands reference](https://code.visualstudio.com/docs/copilot/copilot-chat#_slash-commands)

#### 💭 Priya's Realization

_"Explaining first reduced my uncertainty before making any changes. I'm not guessing anymore—I understand, then I improve."_

---

### Exercise 6: Next Edit Suggestions — "Copilot Reads Your Mind"

**Tier**: 🆓 Free
**Primary Persona**: Priya (Recent Graduate)
**Time**: 15-20 minutes

#### 📖 The Story

**Priya has been loving Copilot's inline suggestions**, but she's noticed a pattern in her workflow. Every time she writes a function, she follows it with predictable work:

- Add a corresponding test
- Update the related documentation
- Create a sibling function with a similar pattern
- Add JSDoc comments matching other functions

It's not hard work, but it's tedious. And it feels like Copilot should be able to predict these follow-up edits—they're so predictable that Priya herself could script them.

Turns out, Copilot can. **Next Edit Suggestions** predicts what you'll want to change next, based on what you just changed.

#### 🎯 Objective

Enable and use Next Edit Suggestions to let Copilot predict and offer logical follow-up edits after you make changes.

#### 📋 Before: Manual Follow-Up Edits

Experience the repetitive pattern:

1. Open the validators file: [`src/validators/email-validator.js`](../../src/validators/email-validator.js)

   The file already has a basic `isValidEmail` function. Notice the TODO comments for additional functions.

2. Now you need to implement `validateEmail()` with detailed results
3. Then you need to implement `normalizeEmail()`
4. Then you need to update the exports

**Notice the friction**: Each follow-up is predictable, but you have to do it manually.

#### 📋 After: Next Edit Suggestions

Let Copilot predict your next moves:

**Step 1: Enable Next Edit Suggestions**

1. Open VS Code Settings (Ctrl+,)
2. Search for "Copilot next edit"
3. Find `GitHub Copilot: Enable Next Edit Suggestions`
4. Set to `enabled` (or `enabledByDefault`)

**Step 2: Experience the Magic**

1. Open the validators file: [`src/validators/email-validator.js`](../../src/validators/email-validator.js)
2. Position your cursor after the `isValidEmail` function
3. **Wait a moment** — Copilot analyzes your recent edit
4. Look for a **dimmed suggestion** appearing below your cursor
5. The suggestion should offer something like `validateEmail()` with detailed results

**Step 3: Accept the Flow**

1. If you see a next edit suggestion, press **Tab** to accept
2. After accepting, wait again — Copilot may suggest the next logical edit
3. Continue the flow: `validateEmail` → `normalizeEmail` → `getEmailDomain` → updated exports

**Step 4: Understand the Trigger**

Next Edit Suggestions activate when:

- You've just completed an edit
- There's a predictable "next step" based on patterns
- You pause briefly after your edit

They appear as:

- Dimmed/ghost text (like regular suggestions)
- Sometimes with a small indicator showing "next edit"

#### 📋 Practice: The Test File Flow

Try this workflow:

1. Open the test file: [`src/__tests__/order-validator.test.js`](../../src/__tests__/order-validator.test.js)

   The file already has some basic tests for `validateItems`.

2. After the existing tests, position cursor after the closing `});` of a describe block
3. Wait for Next Edit Suggestions
4. Copilot should suggest additional test cases (matching the validator patterns)
5. Accept and continue the flow

#### ✅ Success Criteria

- [ ] Enabled Next Edit Suggestions in VS Code settings
- [ ] Received at least one "next edit" suggestion after completing code
- [ ] Accepted a suggestion that followed the pattern of existing code
- [ ] Observed the difference between regular inline suggestions and next edit suggestions
- [ ] Completed a multi-function file using the next edit flow

#### 📚 Official Docs

- [VS Code: Next Edit Suggestions](https://code.visualstudio.com/docs/copilot/ai-powered-suggestions#_next-edit-suggestions)
- [GitHub Docs: Copilot Features](https://docs.github.com/en/copilot/about-github-copilot/github-copilot-features)

#### 💭 Priya's Delight

_"It's like Copilot knows what I'm going to do next! I wrote validateEmail, and it offered validatePhone with the same style. Then validateUrl. Then the tests. The repetitive parts just... disappear. I'm not typing boilerplate anymore—I'm just approving good ideas."_

#### 🚀 Challenge Extension

**Pattern Propagation Experiment:**

1. Create a class with one method that has specific formatting:

   - Custom error handling
   - Logging statements
   - Specific return format

2. After completing the first method, let Next Edit Suggestions offer the second

3. Check: Does it match your custom patterns, or generic patterns?

4. **Document**: How does the style of your first method influence suggestions for subsequent methods?

---

## 📝 Key Takeaways

| Concept                        | What You Learned                                                             |
| ------------------------------ | ---------------------------------------------------------------------------- |
| **Installation**               | Copilot runs as VS Code extensions—one for completions, one for chat         |
| **Licensing**                  | Business and Enterprise tiers have enhanced privacy (no data retention)      |
| **Comment-Driven Development** | Clear comments produce better suggestions—intent matters                     |
| **Copilot Chat**               | A judgment-free zone for learning, debugging, and complex generation         |
| **Context**                    | Open files, good comments, and clear naming dramatically improve suggestions |

### The Mindset Shift

The exercises in this module demonstrated a fundamental change in how we work:

- **Sarah** (15 years experience) discovered Copilot handles the formulas she used to look up
- **Marcus** (5 years experience) learned to express intent before writing code
- **Priya** (new developer) found a patient mentor who never tires of explaining
- **David** (20 years experience) saw that Copilot understands project structure, not just syntax

The common thread: **Copilot amplifies clarity**. The better you express what you want, the better it helps you build it.

---

## ➡️ Next Steps

Continue to [Module 2: Clarity as a Foundation](../02-clarity-as-a-foundation/README.md) to learn how to provide clear context and configure Copilot to follow your team's standards.

---

## 🔗 Additional Resources

**Official Documentation:**

- [GitHub Copilot Documentation](https://docs.github.com/en/copilot)
- [Quickstart Guide](https://docs.github.com/en/copilot/quickstart)
- [VS Code Extension Documentation](https://docs.github.com/en/copilot/managing-copilot/configure-personal-settings/installing-the-github-copilot-extension-in-your-environment)

**Learning Paths:**

- [Microsoft Learn: Introduction to GitHub Copilot](https://learn.microsoft.com/en-us/training/modules/introduction-to-github-copilot/)
- [GitHub Skills: Copilot Course](https://github.com/skills/copilot)

**Trust & Security:**

- [GitHub Copilot Trust Center](https://resources.github.com/copilot-trust-center/)
- [Privacy Statement](https://docs.github.com/en/site-policy/privacy-policies/github-copilot-privacy-statement)
