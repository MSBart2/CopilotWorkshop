# Module 2: Agent Plan Mode

## ⏰ Monday 10:30 AM — Planning Before Implementing

> *"Before we start generating code, let's plan what we're doing. The best AI results come from the clearest thinking."*  
> — Sarah, introducing the team to structured AI collaboration

---

## 📖 The Story So Far

The FanHub team has documented their architecture, but Sarah notices something: when they ask Copilot for help, they jump straight into implementation. Sometimes this works, but often they need to backtrack, refine, and iterate on their approach.

*"We've learned to give Copilot context about our codebase,"* Sarah says, *"but we haven't learned to use AI to help us **think** about the problems first."*

**This module's mission**: Master GitHub Copilot's agent plan mode to create structured approaches before jumping into implementation. Learn to use AI to help configure AI—because the clearest thinking produces the best results.

---

## 🎯 Learning Objectives

By the end of this module, you will:

- Understand the difference between agent plan mode and implementation mode
- Use plan mode to ask clarifying questions before implementing
- Save planning results to files for team collaboration
- Apply iterative planning workflows to both code and Copilot configuration
- Experience how structured thinking improves AI output quality

**Time**: ~90 minutes  
**Personas**: Sarah (Skeptical Senior), David (Seasoned Architect), Marcus (DevOps Developer)

---

## 🧠 Mindful Moment: The Planning Paradox

Traditional thinking: *"Planning slows us down—let's just start coding."*

AI-native thinking: *"Planning speeds us up—AI helps us think, not just type."*

This isn't about creating project management overhead. It's about leveraging AI for the hardest part of development: **figuring out what to build and how to build it.**

---

## 📚 Key Concepts

### Agent Plan Mode vs Implementation Mode

GitHub Copilot operates in two distinct modes when you use the `@agent` prefix:

**Plan Mode**: Focus on analysis, strategy, and structured thinking
- Asks clarifying questions
- Identifies potential approaches
- Creates detailed action plans
- Highlights considerations and tradeoffs
- Outputs structured planning documents

**Implementation Mode**: Focus on execution and code generation
- Generates specific code solutions
- Makes concrete changes to files
- Provides ready-to-use implementations
- Assumes planning decisions have been made

### When to Use Plan Mode

Plan mode excels at:
- **Problem exploration** — Understanding requirements before implementing
- **Approach comparison** — Evaluating multiple solutions
- **Configuration planning** — Designing Copilot customizations
- **Architecture decisions** — Thinking through system design
- **Workflow optimization** — Planning development processes

### The Planning-to-Implementation Flow

The most effective AI collaboration follows this pattern:
1. **Plan**: Use `@agent` to think through the problem
2. **Save**: Store the plan in a file for reference
3. **Implement**: Switch to implementation mode with clear direction
4. **Iterate**: Return to planning when you need to adjust course

---

## 🔨 Exercises

### Exercise 2.1: Plan Before You Code — "Sarah's Structured Approach"

#### 📖 The Story

**Sarah** (Skeptical Senior, 15 years) has been watching the team struggle with a common problem: they ask Copilot to solve something, get a solution, realize it doesn't quite fit, ask for modifications, get a different solution, and eventually end up in a confusing conversation where nobody—human or AI—knows what they're trying to accomplish.

*"We're treating AI like a magic code machine,"* Sarah observes. *"But the best results happen when we use it to think first, then implement."*

Today, Sarah will demonstrate how plan mode transforms scattered requests into structured solutions.

#### ❌ The "Before" — What Frustration Looks Like

Right now, when you need to add a feature to FanHub, you might ask:

*"Add a feature to mark episodes as watched"*

Without planning, this leads to:
- Copilot making assumptions about where the data goes
- Multiple back-and-forth conversations to clarify requirements
- Solutions that work but don't fit your architecture
- Implementation that might conflict with future features

#### 🎯 Objective

Use agent plan mode to structure your thinking before implementing, creating a clear plan that leads to better AI collaboration.

#### 📋 Steps

1. **Experience the "before" state**
   
   Open Copilot Chat and ask directly for implementation:
   
   ```
   Add a feature to mark episodes as watched in the FanHub app
   ```
   
   Notice how Copilot makes assumptions and jumps straight to code. The solution might work, but does it fit your architecture? Your data model? Your UI patterns?

2. **Switch to plan mode for structured thinking**
   
   Now let's approach this with planning first. Start a new chat conversation and use the `@agent` prefix:
   
   ```
   @agent I need to add a "mark episodes as watched" feature to the FanHub app. 
   Before we implement anything, help me create a comprehensive plan.
   
   Please analyze the current codebase and create a structured plan that addresses:
   
   1. Data model implications - how should we store "watched" status?
   2. Frontend changes - where should users interact with this feature?
   3. Backend changes - what API endpoints do we need?
   4. User experience - when and how do users mark episodes as watched?
   5. Edge cases - what happens if a user watches an episode multiple times?
   6. Future considerations - how might this relate to watch history, recommendations, etc.?
   
   Ask me clarifying questions if you need more context about user requirements.
   ```

3. **Engage with the clarifying questions**
   
   Plan mode will likely ask you questions like:
   - Should watched status be per-user or global?
   - Do you want to track when an episode was watched?
   - Should there be a "currently watching" state vs "completed"?
   - How should this display in the episode list?
   
   Answer these questions—this is where your product thinking matters most.

4. **Generate the structured plan**
   
   Once you've clarified the requirements, ask for the complete plan:
   
   ```
   Based on our discussion, create a detailed implementation plan with:
   - Database schema changes
   - API endpoint specifications
   - Frontend component modifications
   - Testing considerations
   - Implementation order (what to build first)
   ```

5. **Save the plan for team collaboration**
   
   Create a new file to store your planning results:
   
   ```
   Create a new file called fanhub/docs/FEATURE-PLAN-watched-episodes.md 
   with the complete plan we just developed
   ```
   
   This becomes your implementation guide and helps other team members understand your approach.

6. **Compare the two approaches**
   
   Now you have both:
   - The quick implementation from step 1
   - The structured plan from steps 2-5
   
   Which approach gives you more confidence? Which one would be easier to explain to a team member?

#### ✅ Success Criteria

- [ ] Used `@agent` prefix to access plan mode
- [ ] Engaged with clarifying questions about requirements
- [ ] Generated a comprehensive implementation plan
- [ ] Saved the plan to `fanhub/docs/FEATURE-PLAN-watched-episodes.md`
- [ ] Can articulate the difference between planning and implementing with AI

#### ✨ The "After" — The Improved Experience

With structured planning, you now have:
- **Clear requirements** that you've thought through with AI assistance
- **Implementation roadmap** that considers architecture and edge cases
- **Team documentation** that others can review and build upon
- **Confidence** in your approach before writing any code

**Time invested**: 20 minutes of planning  
**Value unlocked**: Hours of focused implementation without backtracking

#### 📚 Official Docs

- [GitHub Copilot: Agent Mode](https://docs.github.com/en/copilot/using-github-copilot/copilot-chat/copilot-chat-in-github)
- [VS Code: Copilot Chat Modes](https://code.visualstudio.com/docs/copilot/copilot-chat#_chat-modes)

#### 💭 Sarah's Realization

*"I've been skeptical of AI tools because they felt chaotic. But plan mode isn't chaotic—it's structured thinking. This is how AI actually helps experienced developers: by amplifying our planning, not replacing our judgment."*

---

### Exercise 2.2: Iterate on Configuration — "David Designs Agent Personas"

#### 📖 The Story

**David** (Seasoned Architect, 20 years) has a confession: He's been worried that AI tools might make his architectural expertise less valuable. But after seeing plan mode in action, he's realized something important.

*"AI doesn't replace architectural thinking—it amplifies it,"* David reflects. *"But only if I use it as a thinking partner, not just a code generator."*

Today, David will use plan mode to design a custom Copilot agent that embodies his architectural expertise—showing that the deepest knowledge makes AI tools more powerful, not less relevant.

#### ❌ The "Before" — What Frustration Looks Like

When David asks Copilot about architecture decisions, he often gets generic advice:

*"Use microservices for scalability"*  
*"Consider caching for performance"*  
*"Add error handling"*

These aren't wrong, but they're not contextual to his specific project, constraints, or architectural philosophy. The AI gives standard answers instead of reasoning through his particular situation.

#### 🎯 Objective

Use plan mode to iteratively design a custom Copilot agent that reflects David's architectural expertise and project context.

#### 📋 Steps

1. **Experience the "before" state**
   
   Ask Copilot a generic architecture question:
   
   ```
   How should I handle error cases in the FanHub API?
   ```
   
   Notice the generic response—it might be technically correct but lacks the context of your specific requirements, constraints, and architectural philosophy.

2. **Use plan mode to design a custom agent**
   
   Switch to agent plan mode to design a better approach:
   
   ```
   @agent I want to create a custom Copilot agent that provides architecture 
   guidance specifically for our FanHub project. Help me plan this agent's 
   design.
   
   The agent should:
   - Understand our tech stack (React, Node.js, PostgreSQL)
   - Know our constraints (small team, need to ship fast, prioritize maintainability)
   - Follow our architectural principles (simple over clever, consistency over optimization)
   - Consider our specific context (TV show fan site, read-heavy workload, user-generated content)
   
   What questions should I answer to create an effective custom agent prompt?
   ```

3. **Engage with the planning conversation**
   
   Plan mode will ask you questions to help design the agent:
   - What architectural decisions does your team face most often?
   - What are your preferred patterns for this tech stack?
   - What anti-patterns do you want the agent to warn against?
   - How technical should the guidance be?
   
   This is where David's 20 years of experience becomes the input for better AI output.

4. **Iteratively refine the agent design**
   
   Based on the planning conversation, ask for a draft agent prompt:
   
   ```
   Create a draft custom agent prompt that incorporates our discussion. 
   The agent should be named "David-Architecture-Assistant" and provide 
   context-aware architectural guidance for the FanHub project.
   ```
   
   Review the draft and iterate:
   
   ```
   The agent prompt is too generic. Make it more specific to our constraints:
   - We have a 3-person team, so solutions need to be maintainable by small teams
   - We're prioritizing shipping over perfect architecture
   - We want pragmatic advice, not theoretical best practices
   ```

5. **Test and refine the agent concept**
   
   Plan mode can help you think through how this agent would work:
   
   ```
   How would this custom agent handle the original question: 
   "How should I handle error cases in the FanHub API?"
   
   Show me how the response would be different with our custom context.
   ```

6. **Save your agent design process**
   
   Document your planning work:
   
   ```
   Create fanhub/docs/AGENT-DESIGN-architecture-assistant.md documenting:
   - The planning questions we worked through
   - The custom agent prompt we developed
   - Examples of how responses would improve
   - Notes for future agent iterations
   ```

#### ✅ Success Criteria

- [ ] Used plan mode to think through agent design systematically
- [ ] Identified specific architectural context and constraints  
- [ ] Iteratively refined the agent concept based on planning feedback
- [ ] Documented the agent design process for future reference
- [ ] Can explain how expertise makes AI tools more powerful

#### ✨ The "After" — The Improved Experience

Through structured planning, David discovered:
- **AI amplifies expertise** rather than replacing it
- **Custom agents** can embody specific knowledge and context
- **Planning mode** excels at design work, not just implementation
- **Documentation** of the design process helps future iterations

**Key insight**: The deeper your expertise, the better your AI customizations become.

#### 📚 Official Docs

- [GitHub Docs: Using GitHub Copilot Chat](https://docs.github.com/en/copilot/using-github-copilot/asking-github-copilot-questions-in-your-ide)
- [VS Code: Copilot Customization](https://code.visualstudio.com/docs/copilot/copilot-customization)
- [GitHub Docs: About customizing Copilot](https://docs.github.com/en/copilot/customizing-copilot/about-customizing-github-copilot)

#### 💭 David's Transformation

*"I was worried AI would make my architectural knowledge obsolete. But I realize now—my 20 years of experience is what makes me able to design AI tools that actually understand architecture. The expertise isn't obsolete, it's the competitive advantage."*

---

### Exercise 2.3: Plan Development Workflows — "Marcus Systematizes Success"

#### 📖 The Story

**Marcus** (DevOps Developer, 5 years) has been absorbing everything from the previous exercises. He sees Sarah's structured approach and David's architectural thinking, and he realizes something: his DevOps mindset of "systematize everything" applies perfectly to AI collaboration.

*"We use plan mode to think through problems,"* Marcus reflects, *"but we could also use it to design our development workflows. What if we planned how we plan?"*

Marcus wants to create systematic approaches that the whole team can use, turning the ad-hoc "ask Copilot for help" into repeatable, effective workflows.

#### ❌ The "Before" — What Frustration Looks Like

The team's current AI collaboration is reactive:
- Someone gets stuck, asks Copilot for help
- The conversation meanders based on what comes to mind
- Solutions work but aren't shared or systematized
- Each team member develops different AI collaboration habits
- No consistency in how the team leverages AI capabilities

#### 🎯 Objective

Use plan mode to design systematic workflows that make AI collaboration predictable and effective for the entire team.

#### 📋 Steps

1. **Identify workflow improvement opportunities**
   
   Start with plan mode to analyze current practices:
   
   ```
   @agent Analyze how our team currently uses AI assistance in development. 
   Based on the previous exercises in this module, help me identify patterns 
   and opportunities for systematic improvement.
   
   Consider:
   - When do we use plan mode vs implementation mode?
   - What types of problems benefit from structured planning?
   - How can we make AI collaboration more predictable?
   - What workflows would help junior team members be more effective?
   
   Create a framework for when and how to use different AI collaboration approaches.
   ```

2. **Design systematic planning templates**
   
   Ask plan mode to help create reusable templates:
   
   ```
   Design 3-4 planning templates that our team can use for common scenarios:
   
   1. Feature Planning Template - for adding new functionality
   2. Architecture Review Template - for technical decision-making
   3. Configuration Planning Template - for customizing AI tools
   4. Debugging Investigation Template - for systematic problem-solving
   
   Each template should include:
   - When to use this template
   - Questions to ask in plan mode
   - How to save and share results
   - When to switch from planning to implementation
   ```

3. **Plan the implementation of these workflows**
   
   Use plan mode to think through adoption:
   
   ```
   How should we implement these planning workflows with our team? 
   
   Consider:
   - Where should these templates live in our repository?
   - How do we encourage adoption without making it bureaucratic?
   - What examples would help teammates see the value?
   - How do we iterate and improve the templates over time?
   
   Create an adoption plan that fits our team culture.
   ```

4. **Create team documentation**
   
   Generate the systematic approach documentation:
   
   ```
   Create comprehensive documentation for our AI Planning Workflows including:
   - Overview of when and why to use plan mode
   - The 4 planning templates with examples
   - Best practices for planning-to-implementation flow
   - Guidelines for saving and sharing planning results
   
   Save this as fanhub/docs/AI-PLANNING-WORKFLOWS.md
   ```

5. **Test one workflow with a real scenario**
   
   Pick one template and apply it to an actual FanHub improvement:
   
   ```
   Use the Feature Planning Template to plan the "user ratings for episodes" feature. 
   Follow the systematic approach we just designed and see how it works in practice.
   ```

6. **Refine based on experience**
   
   After testing, iterate on your workflow:
   
   ```
   Based on using the Feature Planning Template for episode ratings, 
   what adjustments would make this workflow more effective?
   
   Update the documentation with lessons learned.
   ```

#### ✅ Success Criteria

- [ ] Analyzed current team AI collaboration patterns
- [ ] Designed 4 systematic planning templates
- [ ] Created adoption plan for team implementation
- [ ] Documented comprehensive AI Planning Workflows
- [ ] Tested one workflow with real scenario
- [ ] Refined approach based on practical experience

#### ✨ The "After" — The Improved Experience

Marcus has systematized AI collaboration for the team:
- **Predictable workflows** for common development scenarios
- **Reusable templates** that junior developers can follow
- **Shared approaches** that improve team consistency
- **Documentation** that scales knowledge across the team
- **Iterative improvement** built into the system

**Key insight**: DevOps thinking (systematic, repeatable, improvable) applies perfectly to AI tool adoption.

#### 📚 Official Docs

- [GitHub Docs: Best practices for prompting GitHub Copilot Chat](https://docs.github.com/en/copilot/using-github-copilot/best-practices-for-using-github-copilot)
- [VS Code: Copilot Chat](https://code.visualstudio.com/docs/copilot/copilot-chat)
- [GitHub Docs: Getting started with Copilot Chat](https://docs.github.com/en/copilot/github-copilot-chat/copilot-chat-in-ides/using-github-copilot-chat-in-your-ide)

#### 💭 Marcus's Evolution

*"This is what I love about DevOps thinking—you take something that works and you make it systematic. Plan mode isn't just a tool, it's a practice. And practices can be engineered for better outcomes."*

---

### Exercise 2.4: Plan Mode Integration Workshop — "The Team Synthesizes"

#### 📖 The Story

After three exercises exploring plan mode individually, the FanHub team comes together to synthesize what they've learned. Each person brings their perspective:

- **Sarah**: *"Plan mode gives structure to AI collaboration—no more chaotic conversations"*
- **David**: *"It amplifies expertise instead of replacing it—my architecture knowledge makes the AI better"*
- **Marcus**: *"We can systematize this—turn good practices into repeatable workflows"*

Now they want to establish plan mode as a foundational practice for their entire development process.

#### 🎯 Objective

Integrate plan mode thinking across all aspects of FanHub development, establishing it as the foundation for AI-assisted workflows.

#### 📋 Steps

1. **Team planning session**
   
   Facilitate a team discussion (if doing this workshop solo, consider multiple perspectives):
   
   ```
   @agent Help facilitate a team planning session to establish plan mode as our 
   foundational AI collaboration approach.
   
   Create an agenda that covers:
   - When each team member will use plan mode vs implementation mode
   - How we'll share planning results across the team
   - Integration with our existing development process
   - Standards for documentation and iteration
   
   The goal is team alignment on systematic AI collaboration.
   ```

2. **Create team standards**
   
   Document the team's plan mode standards:
   
   ```
   Based on our team discussion, create team standards for plan mode usage:
   
   - Required scenarios (when must we use plan mode?)
   - Recommended scenarios (when should we consider it?)
   - Documentation standards (how do we save and share plans?)
   - Handoff processes (how do plans become implementations?)
   - Review and iteration (how do we improve our planning practices?)
   
   Save as fanhub/docs/TEAM-AI-COLLABORATION-STANDARDS.md
   ```

3. **Plan the next module preparation**
   
   Use plan mode to prepare for Module 3 (Custom Prompts):
   
   ```
   @agent We're about to start learning custom prompts for Copilot. 
   Use plan mode to help us prepare:
   
   - What types of prompts would benefit from planning first?
   - How should we use plan mode to design custom prompts?
   - What planning questions help create better prompts?
   - How does our new systematic approach apply to prompt engineering?
   
   Create a bridge from plan mode fundamentals to custom prompt development.
   ```

4. **Document integration across modules**
   
   Plan how to integrate plan mode throughout the remaining workshop:
   
   ```
   Create a plan for integrating plan mode concepts into the remaining modules:
   
   - Module 3 (Custom Prompts): How does planning improve prompt design?
   - Module 4 (Custom Agents): How do we plan agent personalities?
   - Module 5 (Custom Instructions): How do we plan configuration strategies?
   
   Each integration should show plan mode helping configure AI, not just generate code.
   ```

#### ✅ Success Criteria

- [ ] Facilitated team alignment on plan mode usage
- [ ] Created comprehensive team AI collaboration standards
- [ ] Planned integration with Module 3 (Custom Prompts)
- [ ] Documented plan mode integration across all remaining modules
- [ ] Established plan mode as foundational to team development process

#### ✨ The "After" — The Transformation

The FanHub team now has:
- **Structured approach** to AI collaboration
- **Shared standards** for when and how to use plan mode
- **Systematic workflows** that scale across team members
- **Foundation** for all future AI customization work
- **Confidence** in their ability to leverage AI effectively

#### 📚 Official Docs

- [GitHub Docs: Using GitHub Copilot Chat in your IDE](https://docs.github.com/en/copilot/using-github-copilot/asking-github-copilot-questions-in-your-ide)
- [VS Code: Copilot Chat Context](https://code.visualstudio.com/docs/copilot/copilot-chat#_chat-context)
- [GitHub Docs: Using chat participants](https://docs.github.com/en/copilot/github-copilot-chat/copilot-chat-in-ides/using-github-copilot-chat-in-your-ide#using-chat-participants)

---

## 🎯 Module Summary

### Key Takeaways

1. **Plan mode transforms AI collaboration** from reactive to strategic
2. **Structured thinking produces better AI results** than immediate implementation
3. **Planning applies to configuring AI tools**, not just generating code
4. **Expertise amplifies AI effectiveness** rather than being replaced by it
5. **Systematic approaches scale good practices** across entire teams

### Practices Mastered

| Practice | Key Insight |
|----------|-------------|
| 🎯 **Plan Before Implementing** | Structure your thinking before asking AI to generate solutions |
| 📚 **Document Planning Results** | Save plans for team collaboration and future reference |
| 🔄 **Iterate on Approaches** | Use plan mode conversations to refine and improve strategies |
| 🏗️ **Systematic Workflows** | Turn effective practices into repeatable team processes |

### What's Next

In **Module 3: Custom Prompts**, you'll apply your plan mode foundation to design custom prompts that embody your team's patterns and preferences. You'll discover how structured planning makes prompt engineering more effective and systematic.

**💡 Plan Mode Tip for Next Module**: Before creating any custom prompts, use plan mode to analyze what types of prompts your team needs and how they should be structured.

---

## ⏱️ Time Check

**Expected Duration**: 90 minutes
- Exercise 2.1: Sarah's Structured Approach (20 minutes)
- Exercise 2.2: David's Agent Design (25 minutes)  
- Exercise 2.3: Marcus's Workflow Systems (25 minutes)
- Exercise 2.4: Team Integration Workshop (20 minutes)

**If running ahead**: Explore additional planning templates for your specific domain
**If running behind**: Focus on Exercise 2.1 and 2.4, skip the middle exercises

---

*"The best AI results come from the clearest human thinking. Plan mode helps you think clearly."*