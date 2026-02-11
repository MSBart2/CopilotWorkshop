# Build FanHub in 11 Hours: A GitHub Copilot Training Workshop

> **The Challenge**: A skeptical senior developer drops a half-finished fan site on your team and gives you by end of day to ship it. Pick your favorite TV show, make it production-ready, and prove that AI-assisted development is more than just hype.

---

## 🎯 What You'll Build

**FanHub** — A production-ready fan site for YOUR favorite TV show. Starting from a messy, undocumented codebase with partial features, you'll transform it using AI assistance:

**What you'll build/add:**
- ✅ Advanced search functionality
- ✅ Admin dashboard features
- ✅ Show-specific theming and branding
- ✅ New API endpoints and components
- ✅ Comprehensive test coverage
- ✅ Production-ready patterns and documentation

**What you'll improve (starter code provided):**
- ✅ Inconsistent API patterns → REST standards
- ✅ Basic auth scaffolding → Secure, tested implementation
- ✅ Generic UI → Polished, show-specific experience

**The twist**: You'll do it in 11-13 hours using GitHub Copilot. But not "basic Copilot." You'll learn to configure, customize, and orchestrate AI assistance through:

- **Repository instructions** (`.github/copilot-instructions.md`) — Your team's standards, automatically applied
- **Agent plan mode** — Structured thinking and systematic AI collaboration
- **Custom prompts** (`.github/prompts/`) — Reusable functions for common tasks
- **Custom agents** — Specialized workflows configured for your domain
- **Custom instructions** (`.github/instructions/`) — File-scoped context via `applyTo` patterns
- **Agent Skills** (`.github/skills/`) — Domain-specific knowledge Copilot loads automatically
- **MCP Servers** (`.vscode/mcp.json`) — Connect Copilot to databases, APIs, and external systems
- **Web and CLI integration** — AI assistance across all development interfaces

**The transformation**: Watch Copilot evolve from giving generic, confused suggestions to acting like a team member who understands your architecture, follows your standards, and even knows your show's characters by name.

---

## 📖 The Story: A Day with the TechCorp Team

**Monday, 9:00 AM**: Sarah (skeptical senior dev) throws down the challenge. The team looks at the starter code—it's rough. Generic content, inconsistent patterns, zero documentation. Copilot gives confused suggestions because it has nothing to work with.

**Monday, 9:00 AM - 6:00 PM**: Over the next 8-9 hours (your time, your pace), you'll follow the team as they:

1. **Document architecture** and establish team standards (watch suggestions improve instantly)
2. **Master plan mode** for structured thinking and systematic AI collaboration
3. **Build a prompt library** for reusable workflows
4. **Add custom instructions** for context-aware code generation
5. **Encode domain expertise** with Agent Skills that Copilot loads automatically
6. **Connect to external systems** via MCP for database queries, API calls, and deployment awareness
7. **Unleash autonomous agents** that leverage ALL the context you've built — THE FINALE

Each module builds on the previous. Each customization compounds. By the end, you'll have a production app and a completely transformed understanding of AI-assisted development.

---

## 👥 Meet Your Team

Throughout this training, you'll work alongside six personas representing real developers at different career stages:

- **Sarah** (15 years) — Skeptical senior who demands proof of value
- **Marcus** (5 years) — DevOps dev improving application skills
- **Priya** (1 year) — Recent grad eager to learn
- **David** (20 years) — Seasoned architect concerned about relevance
- **Elena** (8 years) — Quality champion ensuring comprehensive testing
- **Rafael** (10 years) — Product visionary bridging business and tech

**Full personas**: [PERSONAS.md](00-orientation/PERSONAS.md)

You'll see their fears, their breakthroughs, and their evolving perspectives as they discover that AI doesn't replace expertise—it amplifies it.

---

## 🏗️ About This Training

### The Philosophy: Syntax Wizards → Markdown Whisperers

This training embraces the fundamental shift in what makes developers excellent:

**Old metrics**:
- Syntax memorization
- Clever code only you understand
- Fast typing
- Being the "only expert"

**New metrics**:
- Clear articulation of intent
- Code anyone can maintain
- Fast thinking and design
- Scaling knowledge across the team

**Why it matters**: In the age of AI assistance, the bottleneck isn't "can you write the code?"—it's "do you know what to build?" Clarity of thought beats knowledge of syntax.

> 💡 **Markdown Is the Medium**: The most effective teams won't be those with the most elegant syntax—they'll be those with the best prose. Every `.md` file you write (instructions, prompts, agents, skills) is a direct conversation with AI. Syntax is what AI writes for you. Markdown is what you write for AI.

### The Four Principles

Every module connects back to these core ideas:

| Principle | Core Message | Applied in FanHub |
|-----------|-------------|-------------------|
| 🔍 **Clarity Beats Cleverness** | Understandable code trumps clever code | Clear component structure anyone can maintain |
| 🎯 **Intent Over Implementation** | Describe WHAT, not HOW | "Add character search" vs "Create a WHERE clause" |
| 📚 **Documentation Is Leverage** | Write once, benefit infinitely | Architecture docs improve every AI interaction |
| ⚖️ **Human Judgment Is Non-Negotiable** | AI proposes, you decide | Elena catches edge cases AI misses |

---

## 🚀 Getting Started

1. **Create your FanHub repository** from the template:
   - Visit [github.com/MSBart2/FanHub](https://github.com/MSBart2/FanHub)
   - Click **"Use this template"** → **"Create a new repository"**
   - Follow the setup instructions in the FanHub README

2. **Start the training**:
   - Read [Module 0: The Challenge](00-orientation/README.md) in this repository
   - Make all code changes and customizations in your FanHub repository
   - Use this repository (CopilotTraining) as your instruction guide

**Two repositories, two purposes:**
- **CopilotTraining** (this repo) — Instructions, exercises, and learning materials
- **FanHub** (your template repo) — Working codebase where you make changes

---

## 📚 Workshop Structure

**Total Time**: 8-9 hours (self-paced) · **Format**: Story-driven with hands-on exercises

| Module | Time | What You'll Build | Transformation | Key Skills |
|--------|------|-------------------|----------------|------------|
| **0: The Challenge** | 60 min | Meet the team, experience Copilot struggling without context | — | Why context matters |
| **1: Repository Instructions** | 90 min | Document architecture, create `.github/copilot-instructions.md` | Generic → Architecture-aware | Repository instructions |
| **2: Agent Plan Mode** | 90 min | Structured thinking, systematic AI workflows | Reactive → Strategic | Plan mode, agent config |
| **3: Custom Prompts** | 90 min | Reusable test & spec functions in `.github/prompts/` | Manual → Automated | Prompt functions, templates |
| **4: Custom Instructions** | 90 min | File-scoped context with `applyTo` patterns | Generic → Context-aware | Custom instructions |
| **5: Agent Skills** | 90 min | Domain expertise in `.github/skills/` | Generic → Domain expert | SKILL.md format |
| **6: MCP Servers** | 75 min | Connect to SQLite, GitHub via Model Context Protocol | Knowledge → Action | MCP config, databases |
| **7: Custom Agents** ⭐ | 90 min | **THE FINALE** — Autonomous agent orchestrates everything you've built | Sequential → Autonomous | Agent design, orchestration |

**Featured Personas:** Sarah (skeptical senior), Marcus (DevOps), David (architect), Elena (QA), Rafael (product), Priya (junior)

---

## 📊 What Makes This Training Different

### ✅ Story-Driven
Not just features—a narrative arc with characters you'll relate to

### ✅ Progressive Complexity
Each module builds on previous work. Compounding value is explicit and demonstrable

### ✅ Real Project
Build something you can show off, not just follow tutorials

### ✅ Configuration-Focused
Goes beyond chat—teaches customization that scales across teams

### ✅ Mindset-Oriented
Addresses fears and hopes. Emphasizes the shift from syntax to clarity

### ✅ Persona-Grounded
Every exercise features someone dealing with realistic challenges

### ✅ "Before/After" Moments
Intentional struggles make transformations meaningful

---

## 🎓 Learning Outcomes

By completing this workshop, you will:

- **Build a production application** with AI assistance in 9-10 hours
- **Master 6 customization techniques**: repository instructions, agent plan mode, custom prompts (functions), custom agents (workflows), custom instructions, and Agent Skills
- **Understand compounding value**: how early configuration pays dividends on every later task
- **Transform your workflow**: from writing code to orchestrating AI
- **Measure success differently**: clarity, scalability, and judgment over syntax
- **Gain confidence**: that your expertise is amplified, not replaced

---

## 📚 Additional Resources

### Official Documentation

- [GitHub Copilot Documentation](https://docs.github.com/en/copilot)
- [Custom Instructions for Repositories](https://docs.github.com/en/copilot/how-tos/configure-custom-instructions/add-repository-instructions)
- [Custom Prompt Files](https://code.visualstudio.com/docs/copilot/customization/prompt-files)
- [Creating Custom Agents](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/coding-agent/create-custom-agents)
- [Claude Skills](https://github.blog/changelog/2025-12-18-github-copilot-now-supports-agent-skills/)
- [Copilot CLI](https://docs.github.com/en/copilot/github-copilot-in-the-cli)

### Training Materials

- [PERSONAS.md](00-orientation/PERSONAS.md) — Meet the seven team members
- [OUTLINE.md](OUTLINE.md) — Detailed module breakdown with time estimates
- [RESOURCES.md](RESOURCES.md) — Curated links to blogs, videos, and learning paths

---

## 🤝 For Instructors & Teams

This training works for:

- **Self-paced learning** — Work through at your own speed
- **Team workshops** — Facilitate with [Instructor Guide](docs/INSTRUCTOR-GUIDE.md)
- **Onboarding** — Get new developers productive with AI assistance quickly
- **Upskilling** — Help experienced developers embrace AI confidently

**Customization**: The FanHub project is designed to be themeable. Teams can fork and customize for different domains (sports, music, gaming, etc.).

---

## ❓ FAQ

**Q: Do I need to know React and Node.js?**
A: Basic familiarity helps, but the focus is on AI assistance techniques that apply to any stack.

**Q: What if I don't have a Copilot subscription?**
A: You'll need Individual, Business, or Enterprise to complete the exercises. Check with your organization or start a free trial.

**Q: How do I set up my environment?**
A: All setup instructions are in the [FanHub repository](https://github.com/MSBart2/FanHub). Create your repo from the template and follow the README there.

**Q: Can I use a different show/theme?**
A: Absolutely! Pick whatever you're passionate about. That's the point.

**Q: Is this only for VS Code?**
A: The workshop focuses on VS Code for hands-on exercises. For advanced topics on web, CLI, enterprise patterns, and hooks, see the standalone tech talks in the `tech-talks/` directory.

**Q: Can I skip Module 0?**
A: You could, but you'd miss the "why" that makes everything else meaningful. Start there.

---

## 📜 License

This training is open source under the MIT License. Feel free to use, adapt, and share.

---

## 🎬 Ready to Start?

**Your challenge awaits**: [Module 0: The Challenge](00-orientation/README.md)


Monday, 9:00 AM. Sarah is waiting. Let's prove AI-assisted development is the real deal.

---

**Built with ❤️ by developers who believe clarity beats cleverness**
