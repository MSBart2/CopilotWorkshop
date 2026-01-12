# Module 6: Agent Skills

## ⏰ Monday 4:00 PM — Teaching Copilot Your Domain

> *"Bug reports come in, and I spend half my time reproducing issues before I can even write a test. How do I teach Copilot our testing patterns so it can help me create failing tests faster?"*  
> — Elena, wanting systematic bug reproduction workflows

---

## 🔍 Background: Understanding Agent Skills

### Where Agent Skills Came From

**Agent Skills** is an **open standard** originally developed by Anthropic for their Claude AI assistant. The format proved so useful that it became a cross-tool standard, now documented at [agentskills.io](https://agentskills.io).

**Key terminology clarification:**

| Term | What It Means |
|------|---------------|
| **"Claude Skills"** | Anthropic's original implementation (you may see this term in older docs) |
| **"Agent Skills"** | The official open standard name (what we use in this training) |
| **"GitHub Skills"** | Not an official term—GitHub adopted the Agent Skills standard |

### GitHub Copilot's Adoption

GitHub Copilot now supports the Agent Skills standard across multiple tools:

- **VS Code** — Skills loaded in chat and agent mode
- **Copilot CLI** — Skills accessible in terminal workflows
- **Copilot coding agent** — Skills used during automated coding tasks

This means skills you create are **portable**—they work across all GitHub Copilot surfaces, not just VS Code.

> ⚠️ **Preview Status**: Agent Skills in VS Code is currently in preview. Enable the `chat.useAgentSkills` setting to use this feature. While the format is stable (it's an open standard), the VS Code integration continues to evolve.

### When to Use What: A Decision Guide

**The simple question**: *"What am I trying to teach Copilot?"*

| I want Copilot to... | Use | Example |
|---------------------|-----|---------|
| **Know our project basics** | Repo Instructions | "This is a React/Node app, use these patterns" |
| **Apply rules to specific files** | Custom Instructions | "For test files, use Jest with these conventions" |
| **Run a specific task I trigger** | Prompts | "Generate a React component with tests" |
| **Act as a specialist persona** | Agents | "Be a security reviewer with read-only access" |
| **Know our domain automatically** | Skills | "Validate TV show data against our schema" |

### The Five Types Compared

| | **Repo Instructions** | **Custom Instructions** | **Prompts** | **Agents** | **Skills** |
|---|----------------------|------------------------|-------------|------------|-----------|
| **File** | `copilot-instructions.md` | `*.instructions.md` | `*.prompt.md` | `*.agent.md` | `SKILL.md` |
| **Location** | `.github/` | `.github/instructions/` | `.github/prompts/` | `.github/agents/` | `.github/skills/*/` |
| **Think of it as** | Project README for AI | File-specific rules | Task template | Specialist persona | Domain expert |
| **When loaded** | Always, every request | By file pattern (`applyTo`) | When you invoke it | When you @ mention it | Automatically when relevant |
| **You trigger it by** | Nothing—always on | Opening matching files | Running `/prompt-name` | Typing `@agent-name` | Just asking—Copilot decides |
| **Scope** | Whole repository | Specific file types | Specific task | Role-based workflow | Specialized knowledge |
| **Best for** | Project context | File-type consistency | Repeatability | Autonomy | Expertise |
| **Module** | 1 | 5 | 3 | 4 | 6 |

### Real-World Analogy

Imagine onboarding a new developer:

- **Repo Instructions** = The project overview they read first ("Here's what this app does and our tech stack")
- **Custom Instructions** = Context-specific guidelines ("When working on tests, follow these patterns")
- **Prompts** = Checklists they follow for common tasks ("Use this template when creating a new API endpoint")
- **Agents** = Roles they can take on ("When doing security review, only read code—don't change it")
- **Skills** = Domain knowledge they acquire over time ("Our TV show data has specific validation rules")

### Quick Decision Flowchart

```
Do you want this applied AUTOMATICALLY?
├── YES → Is it project-wide context?
│         ├── YES → Use REPO INSTRUCTIONS (copilot-instructions.md)
│         └── NO → Should it apply to specific file types?
│                   ├── YES → Use CUSTOM INSTRUCTIONS (*.instructions.md)
│                   └── NO → Does it need scripts + domain knowledge?
│                             ├── YES → Use SKILLS
│                             └── NO → Use REPO INSTRUCTIONS
└── NO → Do you want a reusable task template?
          ├── YES → Use PROMPTS
          └── NO → Do you want a specialist persona?
                    ├── YES → Use AGENTS
                    └── NO → Just ask Copilot directly!
```

---

## 📖 The Story So Far

The FanHub team has built an impressive AI collaboration toolkit—and a real feature:

- **Module 1**: Repository instructions and architecture documentation
- **Module 2**: Agent plan mode for systematic thinking  
- **Module 3**: Custom prompts for reusable workflows
- **Module 4**: Custom agents that built **Character Detail v2**—with episodes, quotes, related characters, and favorites
- **Module 5**: Custom instructions that would have made Character Detail v2's tests, API routes, and components even better

Character Detail v2 shipped last sprint. Users love it. But then the bug reports start coming in:

> **Bug #142**: "The Breaking Bad character page shows duplicate 'Jesse Pinkman' entries in the related characters section."

> **Bug #147**: "Clicking a quote shows 'Episode not found' even though the episode exists."

Elena opens the first bug report and sighs. *"I need to write a failing test that reproduces this duplicate character issue. But every time I do this, I re-explain our testing patterns to Copilot from scratch."*

She looks at the Character Detail v2 code—the same code the agent built in Module 04. *"The agent knew our code patterns from instructions. But it doesn't know our **domain** patterns—like how characters relate to episodes, or why duplicate entries are invalid. That's not about code style, it's about **business logic**."*

Rafael adds: *"And when stakeholders ask for the next feature—Episode Detail pages—I have to guess at effort. What if Copilot could estimate based on how long Character Detail v2 actually took?"*

**This module's mission**: Create specialized Agent Skills that encode **domain knowledge**—the business rules, data relationships, and validation patterns that Copilot needs to understand FanHub's TV show data model.

---

💡 **Golden Thread Continuation**: In Module 05, you created custom instructions for *code patterns* (tests, Docker, React). In this module, you'll create skills for *domain patterns*—the TV show data rules that determine whether Character Detail v2's output is semantically correct, not just syntactically valid.

---

💡 **Plan Mode Integration**: You'll use plan mode to design skill structures, identify domain patterns, and create systematic validation workflows before implementing skills.

---

## 🎯 Learning Objectives

By the end of this module, you will:

- Understand what Agent Skills are and how they differ from instructions and prompts
- Create custom skills with YAML frontmatter and markdown instructions
- Include scripts and resources within skill directories
- See how Copilot automatically loads skills when relevant
- Build domain-specific validation skills for the FanHub data model
- Leverage community skills from existing repositories

**Time**: ~90 minutes  
**Personas**: Elena (Quality Champion), Rafael (Product Visionary)

---

## 🧠 Mindful Moment: The Right Tool for the Job

Think about the hierarchy of Copilot customization:

| Tool | Best For | Example |
|------|----------|---------|
| **Instructions** | General standards applied everywhere | "Use async/await, not promises" |
| **Prompts** | Reusable templates for common tasks | "Generate test suite for component" |
| **Agents** | Autonomous multi-step workflows | "Review architecture and suggest improvements" |
| **Skills** | Specialized domain knowledge Copilot loads when needed | "Validate TV show data follows our schema" |

Skills are perfect for domain-specific expertise that's too detailed for instructions but needs to be applied systematically.

---

## 📚 Key Concepts

### What Are Agent Skills?

**Agent Skills** are folders containing:
- `SKILL.md` file with instructions (YAML frontmatter + markdown)
- Optional scripts, examples, and resources
- Domain-specific knowledge Copilot loads when relevant

Skills are part of an [open standard](https://agentskills.io) supported by GitHub Copilot, Claude, Cursor, and other AI coding tools.

### How Copilot Loads Skills (Progressive Disclosure)

Skills use a three-level loading system to stay efficient:

1. **Level 1: Discovery** — Copilot always knows which skills exist by reading `name` and `description` from YAML frontmatter
2. **Level 2: Instructions** — When your request matches a skill, Copilot loads the full `SKILL.md` body
3. **Level 3: Resources** — Scripts and examples load only when Copilot references them

This means you can have many skills installed without bloating context—only relevant content loads.

### Where Skills Live

**Project Skills** (repository-specific):
- `.github/skills/` (recommended) or `.claude/skills/` (legacy) in your repository
- Shared with everyone working on the project
- Version controlled with your code

**Personal Skills** (across all projects):
- `~/.github/skills/` (recommended) or `~/.claude/skills/` (legacy) in your home directory
- Available in all your projects
- Your personal toolkit

### Skills vs Instructions vs Prompts

| Feature | Instructions | Prompts | Skills |
|---------|-------------|---------|--------|
| **Loaded** | Always | Manually invoked | Automatically when relevant |
| **Scope** | Broad standards | Specific templates | Specialized tasks |
| **Contains** | Guidelines | Structured queries | Instructions + scripts + examples |
| **Best for** | Team conventions | Repeatable workflows | Domain expertise |

### Community Skills

You don't have to build every skill from scratch. Leverage existing skills:

**Anthropic's Skills Repository**: [github.com/anthropics/skills](https://github.com/anthropics/skills)
- High-quality skills for common development tasks
- Examples: debugging, testing patterns, code review
- Well-documented, ready to use

**GitHub's Awesome Copilot Collection**: [github.com/github/awesome-copilot](https://github.com/github/awesome-copilot)
- Community-contributed skills and resources
- Domain-specific examples across different technologies
- Constantly growing with contributions

---

## 🔨 Exercises

### Exercise 6.1: Understand Skills Through Examples — "Elena Explores the Ecosystem"

#### 📖 The Story

**Elena** (Quality Champion, 8 years) has been exploring how other teams use Agent Skills. She's discovered that the community has already built skills for many common scenarios.

*"Before we build our own skills,"* Elena suggests, *"let's see what already exists. Understanding proven patterns will help us design better skills for FanHub."*

The team gathers to explore community skills and understand the anatomy of a well-designed skill.

#### ❌ The "Before" — What Frustration Looks Like

Without skills, Elena has to repeatedly explain bug reproduction testing patterns:

```
@workspace When a bug report comes in, help me write a failing test:

1. Set up the specific database state that triggers the bug
2. Perform the action that causes the issue
3. Assert the bug occurs (test should FAIL initially)
4. Include the bug report number and expected vs. actual behavior
5. Follow our test structure with describe/it blocks
```

Every time a bug report arrives, she re-explains the same testing workflow. And Copilot doesn't automatically know FanHub's testing conventions.

#### 🎯 Objective

Explore community skills to understand skill structure and identify patterns that apply to FanHub validation needs.

#### 📋 Steps

1. **Explore the Anthropic Skills Repository**
   
   Open your browser and navigate to the Anthropic skills collection:
   ```
   https://github.com/anthropics/skills
   ```
   
   Browse through different skills and notice:
   - How `SKILL.md` files are structured
   - What goes in YAML frontmatter vs. markdown body
   - How skills include examples and guidelines
   - When skills reference external scripts or resources

2. **Explore the Awesome Copilot Collection**
   
   Check out the community-curated collection:
   ```
   https://github.com/github/awesome-copilot
   ```
   
   Look for:
   - Domain-specific skills (testing, DevOps, security)
   - Skills that include validation logic
   - Skills that reference external tools or resources

3. **Use plan mode to analyze skill patterns**
   
   Open Copilot Chat and use plan mode to synthesize what you learned:
   
   ```
   @agent I've explored the Anthropic skills repo and the Awesome Copilot collection. 
   Help me create a framework for designing effective Agent Skills for our FanHub project.
   
   Based on the patterns I observed, help me plan:
   
   1. Anatomy of a good SKILL.md file
      - What makes a clear skill name and description?
      - How detailed should instructions be?
      - When to include examples vs. just guidelines?
   
   2. Skills we might need for FanHub
      - TV show data validation
      - API endpoint consistency checking
      - Test coverage requirements
      - Deployment readiness verification
   
   3. Structure for our first skill: "Bug Reproduction Test Generator"
      - What should be in the frontmatter?
      - What testing patterns to include?
      - How to structure failing tests that demonstrate bugs?
   
   Create a planning document for our FanHub skills library.
   ```

4. **Save your planning results**
   
   Create a documentation file for your skill design planning:
   
   ```
   Create fanhub/docs/SKILLS-DESIGN-PLAN.md with the complete planning framework 
   we developed, including:
   - Skill anatomy best practices
   - List of potential FanHub skills
   - Detailed plan for Bug Reproduction Test Generator skill
   - Guidelines for future skill creation
   ```

5. **Examine a skill structure locally**
   
   Look at the directory structure you'll create:
   ```
   .github/skills/
   └── bug-reproduction-test-generator/
       ├── SKILL.md                    (instructions + frontmatter)
       ├── test-examples/              (example bug reproduction tests)
       └── common-bug-patterns.md      (catalog of typical bugs)
   ```

#### ✅ Success Criteria

- [ ] Explored at least 3 skills from the Anthropic repository
- [ ] Reviewed at least 5 skills from the Awesome Copilot collection
- [ ] Used plan mode to create a skill design framework
- [ ] Documented planning results in `SKILLS-DESIGN-PLAN.md`
- [ ] Can articulate the difference between skills, instructions, and prompts
- [ ] Have a clear plan for the Bug Reproduction Test Generator skill

#### ✨ The "After" — The Improved Experience

Elena now understands:
- **Skill anatomy** and what makes them effective
- **Community resources** she can leverage
- **Design patterns** for creating domain-specific skills
- **Planning approach** for systematic skill development

**Key insight**: Community skills provide proven patterns. Don't reinvent the wheel—learn from what works.

#### 📚 Official Docs

- [VS Code Docs: Use Agent Skills](https://code.visualstudio.com/docs/copilot/customization/agent-skills)
- [Agent Skills Open Standard](https://agentskills.io)
- [Anthropic Skills Repository](https://github.com/anthropics/skills)
- [GitHub Awesome Copilot Collection](https://github.com/github/awesome-copilot)

#### 💭 Elena's Realization

*"Skills are like test fixtures for AI—they provide consistent, repeatable knowledge. The community has already solved common problems. Now we can focus on our domain-specific needs."*

---

### Exercise 6.2: Create Your First Skill — "The Bug Reproduction Test Generator"

#### 📖 The Story

**Elena** is ready to build the team's first custom skill. Based on her research, she's designing a skill that helps write failing tests from bug reports.

**Rafael** joins in: *"This is perfect. Our testing patterns can live in a skill. Then when a user reports 'character page shows duplicate data,' Copilot will know how to write a test that demonstrates the issue."*

Together, they'll create a skill that systematizes bug reproduction.

#### ❌ The "Before" — What Frustration Looks Like

A bug report comes in: *"User sees duplicate 'Jesse Pinkman' entries on the Breaking Bad character page."*

Without a skill, Elena has to manually guide Copilot through the testing pattern:

```
@workspace Write a test that:
1. Seeds the database with character relationships that create duplicates
2. Calls GET /api/characters/:id/related (the Character Detail v2 endpoint)
3. Asserts we get duplicate entries (test should FAIL)
4. Uses describe/it structure
5. Includes setup and teardown
6. References Bug #142
```

This takes 5-10 minutes of back-and-forth every time a bug comes in. And Elena has to re-explain the *domain context*—that related characters should never have duplicates from the same show.

#### 🎯 Objective

Create a Bug Reproduction Test Generator skill that teaches Copilot how to write effective failing tests from bug reports—starting with Bug #142 from Character Detail v2.

#### 📋 Steps

1. **Create the skill directory structure**
   
   In your FanHub repository:
   
   ```bash
   mkdir -p .github/skills/bug-reproduction-test-generator
   ```

2. **Use plan mode to design the skill content**
   
   ```
   @agent Help me create the SKILL.md file for our Bug Reproduction Test Generator skill.
   
   The skill should help write failing tests that reproduce reported bugs. Include:
   
   1. Bug reproduction test structure:
      - describe() blocks with bug context and issue number
      - it() statements describing expected behavior
      - Arrange/Act/Assert pattern
      - Setup and teardown for database state
   
   2. Common bug categories:
      - Data integrity issues (duplicates, orphaned FKs)
      - Null reference errors (deleted records, missing data)
      - Incorrect query results (wrong filtering, missing records)
      - Business logic errors (invalid states allowed)
   
   3. FanHub schema knowledge for test data:
      - Character fields: name, show_id, actor_name, status, bio
      - Episode fields: title, show_id, season_id, episode_number
      - Quote fields: quote_text, show_id, character_id, episode_id
   
   4. Test patterns to include:
      - How to seed problematic test data
      - How to structure assertions that should FAIL
      - How to document expected vs. actual behavior
      - How to reference bug report numbers
   
   Create a properly formatted SKILL.md file with:
   - YAML frontmatter (name, description)
   - Clear instructions for Copilot
   - Examples of bug reproduction tests
   - Guidelines for different bug categories
   ```

3. **Create the SKILL.md file**
   
   Save Copilot's generated content to:
   ```
   .github/skills/bug-reproduction-test-generator/SKILL.md
   ```
   
   Review the completed skill in the examples folder:
   ```
   examples/completed-config/skills/bug-reproduction-test-generator/SKILL.md
   ```
   
   Notice how it includes:
   - Test structure patterns with describe/it blocks
   - Examples of data integrity bugs (duplicates, orphaned FKs)
   - Null reference error patterns
   - Query result issues
   - Business logic validation failures
   
   Each pattern shows:
   - How to set up the bug condition
   - How to trigger the issue
   - How to assert the failure (test should FAIL initially)
   - How to document expected vs. actual behavior

4. **Test the skill with Bug #142 from Character Detail v2**
   
   Now give Copilot the actual bug report and see the skill in action:
   
   ```
   @workspace Bug #142: "The Breaking Bad character page shows duplicate 'Jesse Pinkman' 
   entries in the related characters section."
   
   Write a failing test that reproduces this bug. The test should:
   - Call GET /api/characters/:id/related (the Character Detail v2 endpoint)
   - Assert that each related character appears only once
   - Include Bug #142 reference
   ```
   
   **Expected**: Copilot should automatically:
   - Use describe/it structure from the skill
   - Set up test data that creates duplicate relationships
   - Write assertions that FAIL (catching the bug)
   - Include the Arrange/Act/Assert pattern
   - Reference Bug #142 in comments

5. **Verify the skill is being used**
   
   Check that Copilot recognizes your skill:
   
   ```
   @workspace What skills do you have for testing and bug reproduction?
   ```
   
   Copilot should mention the bug-reproduction-test-generator skill.

6. **Test with Bug #147 — a different bug category**
   
   Try the other Character Detail v2 bug to see skill versatility:
   
   ```
   @workspace Bug #147: "Clicking a quote on the Character Detail page shows 
   'Episode not found' even though the episode exists in the database."
   
   Write a failing test that reproduces this bug.
   ```
   
   The skill should guide Copilot to create a test for the broken quote-to-episode relationship.

#### ✅ Success Criteria

- [ ] Created `.github/skills/bug-reproduction-test-generator/` directory
- [ ] Created properly formatted `SKILL.md` with frontmatter and instructions
- [ ] Included test patterns for different bug categories
- [ ] Documented testing structure and assertion patterns clearly
- [ ] Tested skill with a real bug report (duplicate characters)
- [ ] Verified Copilot uses the skill automatically when reproducing bugs
- [ ] Skill generates failing tests that demonstrate the issue

#### ✨ The "After" — The Improved Experience

Now when a bug report comes in:
- **Automatic test structure** following FanHub conventions
- **Consistent Arrange/Act/Assert** pattern
- **Proper test data setup** that triggers the bug
- **Clear documentation** of expected vs. actual behavior
- **Bug references** included automatically

**Before the skill**: 5-10 minutes per bug to write a failing test  
**After the skill**: 30 seconds to describe the bug, Copilot writes the test

**Value unlocked**: Elena can reproduce bugs 10x faster, spending her expertise on test strategy rather than boilerplate.

#### 📚 Official Docs

- [VS Code: Agent Skills](https://code.visualstudio.com/docs/copilot/customization/agent-skills)
- [Agent Skills Open Standard](https://agentskills.io)
- [GitHub Docs: Creating agent skills](https://docs.github.com/en/copilot/customizing-copilot/using-agent-skills-for-github-copilot)

#### 💭 Elena's Transformation

*"This is what I've been missing! The skill captures our testing workflow—how to structure tests, what to assert, how to reference bugs. Now when a user reports 'page shows wrong data,' I just describe the issue and Copilot writes a failing test that proves the bug exists. My 8 years of testing experience is encoded in this skill."*

---

### Exercise 6.3: Create Domain-Specific Skills — "What Character Detail v2 Was Missing"

> 🧵 **The Golden Thread**: Remember when the agent built Character Detail v2 in Module 04? It generated code that *worked*—but Rafael now realizes it was missing product standards. This skill ensures the next feature gets them automatically.

#### 📖 The Story

**Rafael** (Product Visionary, 10 years) reviews the Character Detail v2 code from Module 04. The feature works, users love it—but something's bothering him.

*"The agent built a working feature,"* Rafael says, *"but it didn't include our product standards. No error boundaries. Basic spinners instead of skeleton screens. No analytics tracking. No toast notifications on favorites."*

Elena nods: *"My testing instructions in Module 05 would have caught the test inconsistencies. But those are code patterns. What about product patterns?"*

Rafael realizes the gap: *"Custom instructions trigger on file patterns—`*.test.js` or `Dockerfile`. But product requirements should apply based on **what you're building**, not what file you're in. When someone asks for a feature, Copilot should automatically add error boundaries, loading states, analytics..."*

That's exactly what skills do: they activate based on **conversation topic**, not file patterns.

*"If we had this skill before Module 04,"* Rafael reflects, *"Character Detail v2 would have shipped with all our product standards built in."*

#### ❌ The "Before" — What Character Detail v2 Was Missing

Look at what the agent generated in Module 04:

```jsx
// Character Detail v2 - generated by agent in Module 04
function CharacterDetail({ characterId }) {
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);  // Just a boolean
  
  if (loading) return <div>Loading...</div>;  // ❌ Basic spinner, not skeleton
  // ❌ No error boundary wrapping this component
  // ❌ No analytics tracking on page view
  // ❌ No toast on favorite/unfavorite
  
  return (
    <div>
      <h1>{character.name}</h1>
      {/* Feature works, but misses product standards */}
    </div>
  );
}
```

Rafael's product requirements say:
- "All public pages must include error boundaries"
- "Loading states should show skeleton screens, not spinners"
- "User actions must include success/error toast notifications"
- "Analytics tracking on all user interactions"

But developers don't remember these, and they don't appear until code review—wasting time and causing rework.

#### 🎯 Objective

Create a Feature Requirements Skill that encodes product standards Copilot applies **automatically** when building features—so the next feature gets what Character Detail v2 missed.

Create a Feature Requirements Skill that encodes product standards Copilot applies when building new features.

#### 📋 Steps

1. **Create the skill directory structure**
   
   In your FanHub repository:
   
   ```bash
   mkdir -p .github/skills/feature-requirements
   ```

2. **Use plan mode to design the skill content**
   
   ```
   @agent Help me create a Feature Requirements skill that ensures all FanHub 
   features meet our product standards.
   
   The skill should capture product requirements for:
   
   1. Error Handling
      - Error boundaries for public pages
      - Try-catch for async operations
      - User-friendly error messages
      - Error logging in development
   
   2. User Feedback
      - Loading states (skeleton screens preferred)
      - Success/error toast notifications
      - Confirmation dialogs for destructive actions
   
   3. Analytics & Tracking
      - Page view tracking on component mount
      - User event tracking (clicks, form submissions)
      - Consistent naming convention: fanhub_[page]_[action]
   
   4. Accessibility
      - Semantic HTML elements
      - ARIA labels where needed
      - Keyboard navigation support
      - Focus management
   
   5. Responsive Design
      - Mobile-first approach
      - Standard breakpoints (640px, 768px, 1024px)
      - Touch-friendly targets (min 44px)
   
   Create a properly formatted SKILL.md file with:
   - YAML frontmatter (name, description)
   - Clear instructions for each category
   - Code examples where helpful
   - "When to Apply" guidance
   ```

3. **Create the SKILL.md file**
   
   Save Copilot's generated content to:
   ```
   .github/skills/feature-requirements/SKILL.md
   ```
   
   Review the completed skill in the examples folder:
   ```
   examples/completed-config/skills/feature-requirements/SKILL.md
   ```
   
   Notice how it includes:
   - All 5 product requirement categories
   - Specific guidelines for each (error boundaries, skeleton screens, etc.)
   - Code examples for error handling and analytics
   - Clear "When to Apply" section
   
   The skill bridges Rafael's product vision with implementation details developers need.

4. **Test the skill with a real feature**
   
   Now Rafael describes a feature in **product language** (user needs, not technical specs):
   
   ```
   @workspace Users want to discover episodes from their favorite shows. Create a 
   page component where they can browse episodes, filter by season, and click through 
   to see episode details. This should feel polished and professional.
   ```
   
   **Watch the skill bridge product to engineering** - Copilot should automatically add:
   - ✅ Error boundaries (Rafael never mentioned this)
   - ✅ Skeleton loading states while fetching data (Rafael said "polished")
   - ✅ Toast notifications for errors (Rafael said "professional")
   - ✅ Analytics tracking for page views and episode clicks (auto-applied)
   - ✅ Semantic HTML with ARIA labels for screen readers (auto-applied)
   - ✅ Responsive layout that works on mobile (auto-applied)
   - ✅ Keyboard navigation support (auto-applied)
   
   **This is the value**: Rafael speaks business language ("users want to discover"), 
   the skill translates to engineering standards automatically.

5. **Compare with and without the skill**
   
   To see the difference, temporarily rename the skill folder:
   
   ```bash
   mv .github/skills/feature-requirements .github/skills/feature-requirements-disabled
   ```
   
   Reload VS Code, then ask the same question. Notice:
   - No error boundaries mentioned
   - Basic loading spinner instead of skeleton screens
   - No analytics tracking
   - Missing accessibility features
   
   Rename it back and reload:
   
   ```bash
   mv .github/skills/feature-requirements-disabled .github/skills/feature-requirements
   ```
   
   **This demonstrates**: The skill encodes Rafael's product standards as automatic behavior.

6. **Verify the skill is being used**
   
   Check that Copilot recognizes your skill:
   
   ```
   @workspace What skills do you have for building features and components?
   ```
   
   Copilot should mention the feature-requirements skill.

7. **Document the skill in your team standards**
   
   Update your `copilot-instructions.md` to reference the skill:
   
   ```markdown
   ## Product Standards
   
   All features must meet requirements documented in the `feature-requirements` skill.
   Copilot will automatically apply these when creating new components and pages.
   ```

#### ✅ Success Criteria

- [ ] Created `.github/skills/feature-requirements/` directory
- [ ] Used plan mode to design the skill structure
- [ ] Created properly formatted `SKILL.md` with all 5 requirement categories
- [ ] Included examples for error handling and analytics
- [ ] Tested skill using product language (no technical specs mentioned)
- [ ] Verified Copilot auto-applies technical standards from product descriptions
- [ ] Compared behavior with skill enabled vs. disabled
- [ ] Updated team instructions to reference the skill

#### ✨ The "After" — The Improved Experience

Rafael's product requirements are now:
- **Automatically applied** when building features
- **Version controlled** with the codebase
- **Consistently enforced** by AI assistance
- **Living documentation** that evolves with the product

**Before the skill**: 
- Rafael: "Users want to browse episodes"
- Developer: "Should I add error boundaries? Analytics? Loading states?"
- Rafael: *checks PRD* "Uh, yes... let me find the standards doc..."

**After the skill**: 
- Rafael: "Users want to browse episodes"
- Copilot: *Automatically adds error boundaries, skeleton screens, analytics, a11y, responsive design*
- Developer: ✅ Ships polished feature matching product standards

**Value unlocked**: Product standards become executable. Rafael speaks user needs, the skill ensures technical excellence. No more "forgot to add analytics" in code review.

#### 📚 Official Docs

- [Agent Skills Open Standard](https://agentskills.io)
- [VS Code: Agent Skills](https://code.visualstudio.com/docs/copilot/customization/agent-skills)
- [GitHub Docs: Using agent skills](https://docs.github.com/en/copilot/customizing-copilot/using-agent-skills-for-github-copilot)

#### 💭 Rafael's Transformation

*"This changes everything. Requirements aren't just documents developers read once—they're living knowledge that Copilot applies every time. The gap between product and engineering just got a lot smaller."*

---

### Exercise 6.4: Effort Estimator Skill — "What's Next After Character Detail?"

> 🧵 **The Golden Thread**: Character Detail v2 shipped. Users love it. Now stakeholders want Episode Detail pages. But how long will that take? Rafael doesn't want to guess again.

#### 📖 The Story

**Rafael** just left a stakeholder meeting. The success of Character Detail v2 has everyone excited. Now they want more:

- *"Episode Detail pages would be amazing!"*
- *"Can we add show recommendations?"*
- *"What about user reviews?"*

Rafael's boss asks: *"Character Detail v2 took a sprint. Episode Detail should be similar, right? Can we commit to next sprint?"*

**Marcus** (sitting beside him) winces: *"Episode Detail is actually more complex. Episodes have transcripts, multiple characters per episode, air dates, streaming links... Character Detail had one character with related data. Episodes have many-to-many relationships."*

**Rafael's face falls**: *"I almost promised stakeholders we'd ship Episode Detail in one sprint, just like Character Detail..."*

Later, Rafael reflects: *"I need AI to help me understand technical complexity BEFORE I commit to stakeholders. Character Detail v2 taught me features aren't as simple as they look."*

**Supporting Cast**: Marcus helps Rafael understand what makes features complex from an engineering perspective.

#### ❌ The "Before" — What Frustration Looks Like

Rafael's post-Character-Detail backlog:

1. "Episode Detail pages" → Rafael thinks: *Similar to Character Detail, one sprint*
2. "Show recommendations based on favorites" → Rafael thinks: *Just suggest similar shows, 1 week?*
3. "User reviews and ratings" → Rafael thinks: *A form and some stars, maybe a week*
4. "Full-text search across everything" → Rafael thinks: *A search box, 3-4 days?*

Rafael prioritizes based on business value alone:
- **P0**: Episode Detail (natural next step after Character Detail)
- **P1**: Search (most requested)
- **P2**: Reviews (user engagement)
- **P3**: Recommendations

**Reality check from Marcus**:
- Episode Detail: 2 sprints (many-to-many relationships, transcripts, streaming links)
- Search: 2-3 weeks (indexing, relevance, autocomplete)
- Reviews: 2-3 weeks (moderation, spam prevention, authentication)
- Recommendations: 1-2 sprints (algorithm, data pipeline, ML integration)

Rafael's estimate: "3 weeks total"  
Actual effort: "8-10 weeks total"

**The stakeholder call next week**: "Why isn't search done? You said it was simple!"

#### 🎯 Objective

Create an Effort Estimator skill that analyzes feature descriptions and provides technical effort estimates, helping Rafael make informed prioritization decisions based on value AND cost.

#### 📋 Steps

1. **Use plan mode to design the effort estimator**
   
   ```
   @agent Help me design an Agent Skill for FanHub that estimates technical effort for feature requests.
   
   The skill should:
   1. Analyze a feature description (written in product language)
   2. Reference our ARCHITECTURE.md to understand our tech stack
   3. Identify technical components needed:
      - Database changes (new tables, migrations, schema updates)
      - Backend changes (new routes, services, business logic)
      - Frontend changes (new pages, components, state management)
      - Testing requirements (unit, integration, e2e)
      - Infrastructure needs (new services, scaling considerations)
   4. Categorize effort as:
      - **Small**: < 3 days (1-5 story points)
      - **Medium**: 3-7 days (8-13 story points)
      - **Large**: 1-2 weeks (21+ story points)
      - **Extra Large**: > 2 weeks (requires breakdown)
   5. Flag risks and complexity factors:
      - Performance implications
      - Security concerns
      - Breaking changes
      - External dependencies
      - Unknown unknowns
   
   Output should be:
   - Effort estimate with confidence level
   - Breakdown by discipline (backend, frontend, testing, etc.)
   - Risks and dependencies
   - Recommendations for breaking down large features
   
   Create a planning document for this skill structure.
   ```

2. **Create the skill directory and SKILL.md**
   
   Using Agent mode or manually:
   ```bash
   mkdir -p fanhub/.github/skills/effort-estimator
   ```
   
   Then ask Copilot:
   ```
   @agent Create .github/skills/effort-estimator/SKILL.md based on our planning document.
   
   The skill should:
   - Have YAML frontmatter with name, description, and level: 2
   - Include sections for: effort categories, complexity factors, estimation framework
   - Provide examples of Small, Medium, and Large features from FanHub domain
   - Reference ARCHITECTURE.md for tech stack context
   - Output a structured estimation report format
   ```

3. **Add example feature breakdowns**
   
   The skill should include examples like:
   
   **Example: "Add full-text search"**
   - Backend: Search endpoint, query optimization, indexing strategy (Medium)
   - Frontend: Search bar component, results page, autocomplete (Medium)
   - Testing: Search relevance tests, performance tests (Small)
   - Infrastructure: Consider search indexing service (Risk: scaling)
   - **Total**: Large (2-3 weeks)
   - **Risks**: Performance at scale, relevance tuning, indexing strategy
   
   **Example: "Add social media share buttons"**
   - Backend: No changes needed (Small)
   - Frontend: Share button component, social meta tags (Small)
   - Testing: Share link validation (Small)
   - **Total**: Small (2-3 days)
   - **Risks**: Minimal

4. **Test the skill with Episode Detail — the next feature after Character Detail v2**
   
   With the skill installed, ask Copilot:
   ```
   Estimate the technical effort for Episode Detail pages.
   
   The feature should:
   - Show episode information (title, air date, synopsis, runtime)
   - Display all characters appearing in that episode (many-to-many)
   - Show memorable quotes from the episode
   - Link to streaming services where available
   - Include previous/next episode navigation
   
   We already built Character Detail v2 (single character with episodes, quotes, related characters).
   Compare this to Episode Detail complexity and estimate effort.
   ```
   
   Copilot should automatically use the Effort Estimator skill and provide:
   - Size estimate with reasoning ("Larger than Character Detail because...")
   - Technical breakdown by layer
   - Risk assessment (many-to-many relationships, external streaming APIs)
   - Comparison to Character Detail v2

5. **Create a prioritization matrix for post-Character Detail features**
   
   Ask Copilot to help Rafael prioritize:
   ```
   Using the effort estimates, help me create a prioritization matrix for our 
   post-Character Detail v2 backlog.
   
   Business Value (Rafael's input):
   - Episode Detail: High (natural next step, users asking for it)
   - Search: High (most requested feature)
   - Reviews: Medium (user engagement, but moderation concerns)
   - Recommendations: Low (nice-to-have, requires ML)
   
   Create a 2x2 matrix: Business Value vs. Technical Effort
   Recommend which to build first for a 4-week sprint.
   ```

#### ✅ Success Criteria

- [ ] Created `.github/skills/effort-estimator/SKILL.md`
- [ ] Skill includes effort categories (Small/Medium/Large/XL)
- [ ] Skill references ARCHITECTURE.md for tech stack context
- [ ] Skill provides structured output with effort breakdown
- [ ] Tested with 4+ feature descriptions
- [ ] Copilot automatically applies the skill when estimating effort
- [ ] Generated a prioritization matrix based on value + effort
- [ ] Compared Rafael's initial guesses vs. skill-informed estimates

#### ✨ The "After" — The Improved Experience

Rafael's new stakeholder meeting workflow:

**Before the skill:**
- Stakeholder: "How long will Episode Detail take? Character Detail was one sprint."
- Rafael: "Uh... probably the same? One sprint?"
- Marcus: *facepalm* "Episode Detail has many-to-many relationships..."

**After the skill:**
- Stakeholder: "How long will Episode Detail take?"
- Rafael: *Asks Copilot with effort estimator skill*
- Rafael: "Episode Detail is larger than Character Detail—2 sprints. Character Detail had one-to-many relationships; Episode Detail has many-to-many (multiple characters per episode). However, if we scope down to basic episode info without streaming links, we could ship MVP in one sprint."
- Stakeholder: "MVP sounds good. Let's do that."
- Rafael: *Confident, informed, credible*

**Value unlocked:**
- **Fewer broken promises** — Rafael commits based on real estimates
- **Better prioritization** — Value AND effort inform decisions
- **Credibility with stakeholders** — Rafael speaks with technical understanding
- **Smarter roadmaps** — Quick wins vs. strategic bets, consciously chosen

#### 📚 Official Docs

- [Agent Skills: Skill Structure](https://agentskills.io/docs/skill-structure)
- [VS Code: Agent Skills](https://code.visualstudio.com/docs/copilot/agent-skills)
- [GitHub Docs: Skills in Copilot](https://docs.github.com/en/copilot/customizing-copilot/using-agent-skills)

#### 💭 Rafael's Breakthrough

*"For years, I've felt like I'm guessing when I commit to timelines. Developers would roll their eyes when I said 'this seems simple.' Now I can ask Copilot to estimate effort using our actual architecture, and I show up to stakeholder meetings with informed, credible estimates. I'm not just a requirements writer anymore—I'm a strategic planner who understands the technical landscape."*

#### 🚀 Challenge Extension

Enhance the effort estimator to:
- Compare similar features you've built ("Episode Detail has parallels to Character Detail, which took X days")
- Factor in team capacity ("With 2 frontend developers, estimate delivery date")
- Suggest MVP vs. full-featured versions ("Ship basic Episode Detail in 1 sprint, add streaming links later")
- Track actual vs. estimated effort to improve future estimates
- Flag when estimates diverge significantly from similar past work

---

### Exercise 6.5: Skills Library Strategy — "Building Your Team's Skill Ecosystem"

#### 📖 The Story

The FanHub team now has two powerful skills:
- **Bug Reproduction Test Generator** (Elena's testing expertise)
- **Feature Requirements** (Rafael's product standards)

Sarah brings the team together: *"We're starting to build a skills library. Let's be systematic about this—what other skills do we need? How do we organize them? How do we keep them maintained?"*

This is the team's opportunity to plan their complete skills ecosystem.

#### 🎯 Objective

Create a comprehensive strategy for FanHub's skills library, including additional skills to build and maintenance practices.

#### 📋 Steps

1. **Use plan mode to design your skills ecosystem**
   
   ```
   @agent Help create a comprehensive skills strategy for the FanHub team.
   
   We currently have:
   - bug-reproduction-test-generator (test-driven debugging)
   - feature-requirements (product standards)
   
   Plan our complete skills library:
   
   1. Identify additional skills we need:
      - What other domain knowledge should be encoded?
      - What repetitive validation or checking tasks occur?
      - What team standards aren't captured yet?
   
   2. Organize our skills:
      - How should skills be categorized?
      - Which should be project skills vs. personal skills?
      - How do skills relate to our instructions and prompts?
   
   3. Maintenance strategy:
      - How do we keep skills up to date?
      - Who owns which skills?
      - How do we test that skills work correctly?
      - When do we deprecate or refactor skills?
   
   4. Community integration:
      - Which community skills should we adopt?
      - How do we customize community skills for our needs?
      - Should we contribute our skills back?
   
   Create a complete Skills Library Strategy document.
   ```

2. **Identify candidate skills for FanHub**
   
   Brainstorm additional skills the team might need:
   
   - **API Endpoint Design Skill**: Consistent REST conventions
   - **Test Coverage Checker**: Ensure adequate test coverage
   - **Deployment Readiness**: Pre-deploy validation checklist
   - **Database Migration Skill**: Safe schema changes
   - **Security Review Skill**: Common vulnerability checks
   - **Performance Optimization Skill**: Best practices for React/Node

3. **Create your skills library documentation**
   
   ```
   Create fanhub/docs/SKILLS-LIBRARY-STRATEGY.md documenting:
   - Complete list of planned skills (current + future)
   - Skill ownership and maintenance responsibilities
   - Guidelines for when to create new skills
   - Testing and validation approach
   - Integration with instructions and prompts
   - Community skills we're adopting
   - Contribution guidelines for new skills
   ```

4. **Set up personal skills**
   
   Team members can create personal skills for their own workflow:
   
   ```bash
   # Elena might create personal testing skills
   mkdir -p ~/.copilot/skills/comprehensive-test-generator
   
   # Marcus might create personal DevOps skills
   mkdir -p ~/.copilot/skills/infrastructure-review
   ```

5. **Adopt a community skill**
   
   Pick one skill from the Anthropic or Awesome Copilot repos to adopt:
   
   ```bash
   # Example: Adopt a debugging skill
   cp -r /path/to/community/skill .github/skills/debugging-workflow
   # Customize it for FanHub's needs
   ```

6. **Create skill discovery documentation**
   
   Add to your README or docs:
   
   ```markdown
   ## Available Skills
   
   FanHub uses Agent Skills to provide domain-specific expertise:
   
   ### Project Skills (.github/skills/)
   - **bug-reproduction-test-generator**: Generates failing tests from bug reports
   - **feature-requirements**: Ensures features meet product standards
   - **[your additional skills]**
   
   ### Community Skills We Use
   - Link to adopted community skills
   
   ### How to Add New Skills
   - Guidelines for team members to contribute skills
   ```

#### ✅ Success Criteria

- [ ] Created comprehensive Skills Library Strategy document
- [ ] Identified 4-6 additional skills to build
- [ ] Documented skill ownership and maintenance approach
- [ ] Set up at least one personal skill
- [ ] Adopted at least one community skill
- [ ] Created skill discovery documentation for the team

#### ✨ The "After" — The Complete Ecosystem

The FanHub team now has:
- **Systematic approach** to encoding expertise
- **Clear ownership** of different skills
- **Integration plan** between skills, instructions, and prompts
- **Maintenance strategy** for keeping skills current
- **Community connection** leveraging and contributing skills

**Key insight**: Skills are most powerful when part of a systematic strategy, not ad-hoc additions.

#### 📚 Official Docs

- [VS Code: Agent Skills](https://code.visualstudio.com/docs/copilot/customization/agent-skills)
- [Anthropic Skills Repository](https://github.com/anthropics/skills)
- [Agent Skills Open Standard](https://agentskills.io)

#### 💭 Team Reflection

- **Sarah**: *"Skills are the missing piece. They scale expertise across the team."*
- **Elena**: *"My domain knowledge is now executable, not just documentation."*
- **Rafael**: *"Product requirements become code assistance, not just PRD documents."*
- **David**: *"This is how we preserve institutional knowledge as AI-accessible."*

---

## 🎯 Module Summary

### 🧵 The Golden Thread: From Code Patterns to Domain Knowledge

| Module | What We Built | Pattern Type |
|--------|--------------|--------------|
| **Module 01** | `copilot-instructions.md` | Repository-wide context |
| **Module 03** | `*.prompt.md` files | Reusable task templates |
| **Module 04** | **Character Detail v2** | The feature itself |
| **Module 05** | `*.instructions.md` | File-pattern code rules |
| **Module 06** | `SKILL.md` in `.github/skills/` | **Domain knowledge** |

**The key insight**: Module 05's custom instructions activate by *file pattern* (`.test.js` → testing rules). Module 06's skills activate by *conversation topic* (asking about bugs → bug reproduction patterns).

Character Detail v2 revealed:
- **Code patterns** we needed (fixed in Module 05)
- **Domain patterns** we needed (fixed in Module 06)
- **What's next** after Character Detail (Episode Detail, estimated in Exercise 6.4)

### Key Takeaways

1. **Skills encode domain expertise** that's too specific for instructions but needs systematic application
2. **Community skills** provide proven patterns you can adopt and customize
3. **Skills + Instructions + Prompts** form a complete customization strategy
4. **Plan mode helps design skills** systematically before implementation
5. **Skills libraries scale knowledge** across entire teams

### Practices Mastered

| Practice | Key Insight |
|----------|-------------|
| 🎯 **Domain Knowledge as Code** | Skills make expertise executable and version-controlled |
| 📚 **Community Leverage** | Don't build everything—adopt and customize proven skills |
| 🔄 **Systematic Design** | Use plan mode to design skill structure before implementation |
| 🏗️ **Skills Ecosystem** | Think libraries, not individual skills—systematic approach wins |

### The Customization Hierarchy (Complete)

```
┌─────────────────────────────────────┐
│  Instructions (.github/)            │  ← Always loaded, broad standards
├─────────────────────────────────────┤
│  Skills (.github/skills/)           │  ← Loaded when relevant, domain expertise
├─────────────────────────────────────┤
│  Prompts (.github/prompts/)         │  ← Manually invoked, specific templates
├─────────────────────────────────────┤
│  Agents (custom configurations)     │  ← Autonomous tasks, multi-step workflows
└─────────────────────────────────────┘
```

### What's Next

In **Module 7: MCP Servers**, you'll learn how to connect Copilot to external systems—databases, APIs, and deployment infrastructure. Elena's bug reproduction skill knows the TESTING PATTERNS, but MCP gives it access to query the ACTUAL DATABASE to understand what data is causing bugs. Jordan shows the team how MCP (Model Context Protocol) supercharges skills with real-time data access.

**💡 Plan Mode Tip for Next Module**: Before adding MCP servers, use plan mode to identify which external systems Copilot should connect to and what security constraints apply.

---

## ⏱️ Time Check

**Expected Duration**: 90 minutes
- Exercise 6.1: Explore Community Skills (20 minutes)
- Exercise 6.2: Bug Reproduction Test Generator (25 minutes)
- Exercise 6.3: Feature Requirements Skill (25 minutes)
- Exercise 6.4: Skills Library Strategy (20 minutes)

**If running ahead**: Create additional domain-specific skills for your project  
**If running behind**: Focus on Exercise 6.2 (Bug Reproduction) and 6.4 (Strategy), skim the others

---

## 🔗 Quick Reference

### Skill File Structure

```
.github/skills/
└── skill-name/
    ├── SKILL.md           (required: frontmatter + instructions)
    ├── examples/          (optional: example files)
    ├── scripts/           (optional: helper scripts)
    └── resources/         (optional: supporting files)
```

### SKILL.md Template

```markdown
---
name: skill-name-in-lowercase
description: What this skill does and when Copilot should use it
license: MIT (optional)
---

# Skill Title

Instructions for Copilot in markdown format.

Include:
- Clear guidelines
- Examples (valid and invalid)
- Edge cases to handle
- When to apply this skill
```

### Resources

- **Official Docs**: [VS Code: Use Agent Skills](https://code.visualstudio.com/docs/copilot/customization/agent-skills)
- **Open Standard**: [agentskills.io](https://agentskills.io)
- **Community Skills**: [anthropics/skills](https://github.com/anthropics/skills)
- **Curated Collection**: [github/awesome-copilot](https://github.com/github/awesome-copilot)

---

*"Skills transform domain expertise into AI-accessible knowledge. Your team's collective wisdom becomes Copilot's automatic guidance."*
