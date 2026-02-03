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
- **Custom prompts** (`.github/prompts/`) — Reusable templates for common tasks
- **Custom agents** — Specialized AI assistants trained on your domain
- **Custom instructions** (`.github/instructions/`) — File-scoped context via `applyTo` patterns
- **Agent Skills** (`.github/skills/`) — Domain-specific knowledge Copilot loads automatically
- **MCP Servers** (`.vscode/mcp.json`) — Connect Copilot to databases, APIs, and external systems
- **Web and CLI integration** — AI assistance across all development interfaces

**The transformation**: Watch Copilot evolve from giving generic, confused suggestions to acting like a team member who understands your architecture, follows your standards, and even knows your show's characters by name.

---

## 📖 The Story: A Day with the TechCorp Team

**Monday, 9:00 AM**: Sarah (skeptical senior dev) throws down the challenge. The team looks at the starter code—it's rough. Generic content, inconsistent patterns, zero documentation. Copilot gives confused suggestions because it has nothing to work with.

**Monday, 9:00 AM - 6:00 PM**: Over the next 11-13 hours (your time, your pace), you'll follow the team as they:

1. **Document architecture** and establish team standards (watch suggestions improve instantly)
2. **Master plan mode** for structured thinking and systematic AI collaboration
3. **Build a prompt library** for reusable workflows
4. **Add custom instructions** for context-aware code generation
5. **Encode domain expertise** with Agent Skills that Copilot loads automatically
6. **Connect to external systems** via MCP for database queries, API calls, and deployment awareness
7. **Unleash autonomous agents** that leverage ALL the context you've built — THE PAYOFF
8. **Integrate web and CLI workflows** for comprehensive AI assistance
9. **Orchestrate everything together** with agentic development lifecycle
10. **Ship and reflect** on the transformation

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

**Full personas**: [PERSONAS.md](workshop/00-orientation/PERSONAS.md)

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

### The Four Principles

Every module connects back to these core ideas:

| Principle | Core Message | Applied in FanHub |
|-----------|-------------|-------------------|
| 🔍 **Clarity Beats Cleverness** | Understandable code trumps clever code | Clear component structure anyone can maintain |
| 🎯 **Intent Over Implementation** | Describe WHAT, not HOW | "Add character search" vs "Create a WHERE clause" |
| 📚 **Documentation Is Leverage** | Write once, benefit infinitely | Architecture docs improve every AI interaction |
| ⚖️ **Human Judgment Is Non-Negotiable** | AI proposes, you decide | Elena catches edge cases AI misses |

---

## � Getting Started

### Recommended: Use GitHub Codespaces (Zero Setup!)

The fastest way to start this training:

1. Click the **"Code"** button above → **"Create codespace on main"**
2. Wait 2-3 minutes for your environment to build
3. Start learning! Everything is pre-configured:
   - ✅ GitHub Copilot & Copilot Chat installed
   - ✅ Mermaid diagram support for architecture visuals
   - ✅ All development tools for FanHub
   - ✅ Ports pre-configured and forwarded
   - ✅ Docker-in-Docker for running the app

**Why Codespaces?** Zero installation, consistent environment, works from any device (even tablets!), and the dev container ensures everyone has the same experience.

📖 **Alternative:** [Local setup with Dev Containers](.devcontainer/README.md) or [manual installation](modules/00-orientation/README.md#prerequisites)

---

## �📚 Workshop Structure

**Total Time**: 10-12 hours (self-paced)  
**Format**: 10 progressive modules + orientation + supporting materials  
**Style**: Story-driven with hands-on exercises

### Module 0: The Challenge (60 min)
**Monday 9:00 AM**

Meet the team. Get the challenge. Clone the messy FanHub starter. Choose your show. Experience Copilot struggling with an unconfigured codebase—the intentional "before" state that makes the transformation meaningful.

**You'll learn**: Why context and configuration matter

### Module 1: Repository Instructions (90 min)
**Monday 10:00 AM**

David documents the architecture. Marcus creates repository instructions (`.github/copilot-instructions.md`). Everything changes. Ask the same question from Module 0—watch Copilot give show-specific, architecture-aware suggestions.

**You'll learn**: Repository instructions, architecture documentation

### Module 2: Agent Plan Mode (90 min)
**Monday 10:30 AM**

Sarah introduces structured thinking with agent plan mode. David designs custom agent configurations. Marcus creates systematic AI collaboration workflows. The team learns to plan before implementing, using AI to help configure AI.

**You'll learn**: Agent plan mode, systematic AI collaboration, planning-to-implementation flow  
**The transformation**: Reactive → Strategic  
**Featured**: Sarah, David, Marcus

### Module 3: Custom Prompts (90 min)
**Monday 12:00 PM**

Elena creates reusable test prompts. Rafael builds spec-to-code templates. The team starts using `.github/prompts/` for common workflows, designed with plan mode. Copilot now follows standards AND has templates for repeatable tasks.

**You'll learn**: Custom prompt files, context techniques, prompt design with plan mode  
**The transformation**: Manual → Automated  
**Featured**: Elena, Rafael

### Module 4: Custom Instructions (90 min)
**Monday 1:30 PM**

Team creates file-scoped instructions using `applyTo` patterns, analyzed through plan mode. Testing standards automatically apply to test files. API route conventions apply to API files. Infrastructure patterns apply to DevOps configs. The team is building toward giving an autonomous agent everything it needs.

**You'll learn**: Custom instructions, `applyTo` patterns, file-scoped context, codebase analysis  
**The transformation**: Generic → Context-aware  
**Featured**: Elena, Marcus, Rafael

### Module 5: Agent Skills (90 min)
**Monday 3:00 PM**

Elena and Rafael teach Copilot FanHub's domain expertise through Agent Skills. Explore the anthropics/skills and github/awesome-copilot communities. Create bug reproduction and feature requirements skills that encode domain knowledge Copilot loads automatically. The agent will need this domain knowledge.

**You'll learn**: Agent Skills (.github/skills/), SKILL.md format, domain expertise encoding, community skills  
**The transformation**: Generic knowledge → Domain expertise  
**Featured**: Elena, Rafael

### Module 6: MCP Servers (75 min)
**Monday 4:00 PM**

Elena's data validator can't verify against real data—it knows the RULES but can't check the DATABASE. Marcus shows the team how MCP (Model Context Protocol) connects Copilot to external systems. Connect to SQLite for data validation, GitHub for deployment awareness. Now the agent can access real data.

**You'll learn**: MCP architecture, server configuration, database connectivity, security governance  
**The transformation**: Knowledge only → Knowledge + action  
**Featured**: Marcus, Elena, David

### Module 7: Custom Agents — THE PAYOFF (90 min)
**Monday 5:00 PM**

**Everything comes together.** The team has built repository instructions, custom prompts, file-scoped instructions, domain skills, AND MCP database access. Now David creates an autonomous agent to build **Character Detail v2**—a rich character page with episodes, quotes, related characters, and favorites. Watch the agent leverage ALL the context you've built. The result? Production-quality code on the first try.

**You'll learn**: Custom agents, agent design through planning, background agents, seeing the full customization payoff  
**The transformation**: Sequential → Autonomous excellence  
**Featured**: David, Marcus

### Module 8: GitHub.com Copilot for Product Management (50-60 min)
**Monday 3:30 PM**

Rafael validates Character Detail v2 delivery from his browser—no VS Code needed. He refines issues with Copilot, validates PRs against requirements using PR summaries, updates user docs via GitHub.com's web editor, explains timeline overruns to stakeholders in business-friendly language, and analyzes the backlog for data-driven prioritization. The portfolio manager is impressed by the transparency.

**You'll learn**: Issue refinement with Copilot, PR validation from product lens, web editor documentation updates (github.com, not github.dev), stakeholder communication, backlog analysis  
**The transformation**: Requirements writer in isolation → Connected product owner who validates continuously  
**Featured**: Rafael (primary), Sarah (Exercise 8.8 rapid issue triage)

### Module 9: Copilot CLI (90 min)
**Monday 6:00 PM**

Marcus introduces systematic CLI automation with GitHub Copilot CLI. Plan terminal workflow automation. Create scripted development processes and infrastructure automation.

**You'll learn**: CLI automation, programmatic workflows, terminal AI assistance, systematic scripting  
**The transformation**: Manual terminal work → Automated AI-assisted CLI  
**Featured**: Marcus

### Module 10: Agentic SDLC + Ship (90-120 min)
**Monday 7:00 PM**

The team orchestrates all their AI tools across VS Code, Web, and CLI. Plan the complete development lifecycle. While Marcus builds search interactively in VS Code, David kicks off analytics endpoints via GitHub's Coding Agent, handles infrastructure in the CLI—all simultaneously. The module concludes with shipping and reflecting on what worked.

**You'll learn**: Multi-interface agent orchestration, parallel development workflows, complete AI integration  
**The transformation**: Sequential → Parallel → Complete system → Ship it  
**Featured**: All personas

### Module 11: Enterprise Patterns (90-120 min)
**Tuesday 9:00 AM**

Sarah calls an early meeting: "We built something that works. Now we need to make it organizational standard." The team scales their success—creating organization-wide instructions, code review standards for AI-generated code, Copilot Spaces for knowledge sharing, metrics dashboards, and onboarding kits for other teams.

**You'll learn**: Organization instructions, code review standards, Copilot Spaces, metrics and ROI tracking, team onboarding  
**The transformation**: Individual success → Organizational capability  
**Featured**: All personas (scaling focus: Sarah, Rafael, Marcus)

### Standalone: Copilot SDK (45 min)
**Beyond the workshop**

Sarah, Rafael, and Elena explore embedding Copilot's agentic engine into custom Python tools. Rafael builds a release notes generator (2 hours → 10 min). Elena creates a test failure analyzer with flaky test detection (45 min → 5 min). Sarah builds a code review bot that pre-reviews PRs against team standards, doubling team throughput.

**You'll learn**: GitHub Copilot SDK, embedding AI in custom applications, building domain-specific tools  
**The transformation**: Using AI → Building with AI  
**Featured**: Rafael, Elena, Sarah  
**Note**: Standalone module, can be taken after Module 9 (CLI)

---

## 🚀 Getting Started

### Prerequisites

- **VS Code** with **GitHub Copilot** and **GitHub Copilot Chat**
- **Docker Desktop** (for running FanHub locally)
- **Node.js 18+**
- **GitHub account** with Copilot access (Individual, Business, or Enterprise)
- **9-10 hours** over a day or two (or pace it however you like)

### Installation

```bash
# 1. Fork this repository to your GitHub account
#    (Use the "Fork" button on GitHub)

# 2. Clone your fork
git clone https://github.com/YOUR_USERNAME/CopilotTraining.git
cd CopilotTraining

# 3. Start with Module 0
open modules/00-orientation/README.md
```

### Quick Start

1. **Read [Module 0: The Challenge](workshop/00-orientation/README.md)** — Understand the philosophy and meet the team
2. **Clone FanHub** — Get the starter app running locally
3. **Choose your show** — The Office? Stranger Things? Breaking Bad?
4. **Experience the struggle** — Try using Copilot without configuration
5. **Follow the transformation** — Module by module, watch everything improve

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
- **Master 6 customization techniques**: repository instructions, agent plan mode, custom prompts, custom agents, custom instructions, and Agent Skills
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

- [PERSONAS.md](workshop/00-orientation/PERSONAS.md) — Meet the seven team members
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

**Q: Can I use a different show/theme?**  
A: Absolutely! Pick whatever you're passionate about. That's the point.

**Q: Is this only for VS Code?**  
A: Modules 0-6 focus on VS Code. Modules 7-8 cover web and CLI usage. Module 9 orchestrates all interfaces.

**Q: What if I get stuck?**  
A: Check [TROUBLESHOOTING.md](docs/TROUBLESHOOTING.md) (coming Phase 4) or open an issue.

**Q: Can I skip Module 0?**  
A: You could, but you'd miss the "why" that makes everything else meaningful. Start there.

---

## 📜 License

This training is open source under the MIT License. Feel free to use, adapt, and share.

---

## 🎬 Ready to Start?

**Your challenge awaits**: [Module 0: The Challenge](workshop/00-orientation/README.md)


Monday, 9:00 AM. Sarah is waiting. Let's prove AI-assisted development is the real deal.

---

**Built with ❤️ by developers who believe clarity beats cleverness**
