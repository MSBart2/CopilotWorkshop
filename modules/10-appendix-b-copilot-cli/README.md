# Appendix B: GitHub Copilot CLI

> **Core Philosophy**: Clarity beats cleverness—even in the terminal. Your terminal becomes a conversation partner that can read, write, and execute code. AI-assisted development now follows you everywhere.

## 📖 Overview

GitHub Copilot CLI is a **terminal-native AI agent** that brings the full power of Copilot directly to your command line. Unlike simple command suggestion tools, Copilot CLI is an autonomous assistant that can:

- **Read and write files** in your project
- **Execute shell commands** with your approval
- **Understand project context** through file mentions and workspace awareness
- **Use natural language** for any coding, debugging, or automation task
- **Work interactively** or **programmatically** in CI/CD pipelines

This is the same AI that powers VS Code Copilot—now available everywhere you have a terminal.

**Why CLI?** Because developers don't always have VS Code open. SSH sessions, headless servers, CI/CD pipelines, quick fixes on unfamiliar machines—Copilot CLI ensures AI assistance follows you everywhere.

## Prerequisites

- **Node.js v22** or higher
- **npm v10** or higher
- Copilot subscription (**Pro**, **Pro+**, **Business**, or **Enterprise**)
- A terminal you're comfortable using (bash, zsh, PowerShell)

> **Note**: This is the new standalone GitHub Copilot CLI (`copilot` command), not the legacy `gh copilot` extension. If you've used `gh copilot suggest` before, the new CLI offers significantly more capabilities.

## Estimated Time

- 60–75 minutes

---

## 🎯 Learning Objectives

By the end of this appendix, you will:

- Install and authenticate GitHub Copilot CLI
- Use **interactive mode** for conversational AI assistance in the terminal
- Reference files and context using **mentions** and **context variables**
- Master **slash commands** for session management (`/model`, `/share`, `/clear`)
- Execute shell commands directly from Copilot using **shell mode** (`!`)
- Use **programmatic mode** (`-p`) for automation and CI/CD integration
- Understand when to use CLI vs. VS Code vs. Copilot Chat

---

## 📚 Content

### What is GitHub Copilot CLI?

GitHub Copilot CLI is a standalone terminal application that brings an AI agent to your command line:

```bash
# Start an interactive session
copilot

# Ask anything in natural language
> Add error handling to the fetchUser function in src/api.ts

# Reference files directly
> Explain what @src/config.ts does

# Execute shell commands without leaving Copilot
> !npm test

# Switch AI models
> /model claude-sonnet-4
```

### Interactive vs. Programmatic Mode

| Mode | How to Start | Use Case |
|------|--------------|----------|
| **Interactive** | `copilot` | Conversational coding, debugging, learning |
| **Programmatic** | `copilot -p "prompt"` | Automation, CI/CD, scripts |

### Key Capabilities

| Feature | Description | Example |
|---------|-------------|---------|
| **File Mentions** | Reference any file in context | `@src/index.ts` |
| **Shell Mode** | Execute commands | `!npm run build` |
| **Slash Commands** | Control session | `/model`, `/share`, `/clear` |
| **Natural Language** | Describe what you want | "Add tests for the auth module" |
| **Code Generation** | Create complete files | "Create a REST API endpoint for users" |
| **Code Explanation** | Understand existing code | "Explain the caching logic in @cache.ts" |

### The Terminal Clarity Principle

Just like in VS Code, **clarity of intent** determines quality of results:

```
# Vague → might not get what you need
> docker stuff

# Clear → gets exactly what you need
> Create a Dockerfile for this Node.js project that uses multi-stage builds,
  runs as non-root user, and optimizes for production
```

---

## 🔨 Exercises

### Exercise 1: CLI Installation & Setup — "Your Terminal, Now an AI Partner"

**Tier**: 🆓 Free (with Copilot Pro subscription)  
**Primary Persona**: Jordan (DevOps Expert)  
**Time**: 10-15 minutes

#### 📖 The Story

**Jordan** automates everything—if it can be scripted, it should be. But SSH sessions, remote servers, and CI/CD environments don't have VS Code. "I need Copilot everywhere, not just in my editor," he thinks.

Today he's setting up GitHub Copilot CLI to bring AI assistance to every terminal he uses.

#### ❌ The "Before" — What Frustration Looks Like

Without Copilot CLI:
- VS Code not available? No AI assistance
- SSH into a server? Back to memorizing commands
- CI/CD pipelines? No intelligent code generation
- Quick terminal tasks? No context-aware help

#### 🎯 Objective

Install GitHub Copilot CLI and authenticate with your GitHub account.

#### 📋 Steps

1. **Verify Node.js version**

   ```bash
   node --version
   # Should show v22.x or higher
   ```

   If not installed or outdated:
   ```bash
   # macOS (using Homebrew)
   brew install node@22
   
   # Ubuntu/Debian
   curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
   sudo apt-get install -y nodejs
   
   # Windows
   winget install OpenJS.NodeJS.LTS
   ```

2. **Install Copilot CLI**

   **Option A: npm (all platforms)**
   ```bash
   npm install -g @github/copilot
   ```

   **Option B: Homebrew (macOS/Linux)**
   ```bash
   brew install copilot-cli
   ```

   **Option C: WinGet (Windows)**
   ```bash
   winget install GitHub.CopilotCLI
   ```

3. **Start Copilot CLI**

   ```bash
   copilot
   ```

4. **Authenticate with GitHub**

   On first launch, Copilot CLI will prompt you to log in:
   ```
   > /login
   ```
   
   Follow the browser-based authentication flow:
   - A URL will be displayed
   - Open it in your browser
   - Enter the code shown in the terminal
   - Authorize Copilot CLI with your GitHub account

5. **Trust the current directory**

   When working in a new project, Copilot will ask if you trust the directory:
   - Select "Trust for this session" for temporary work
   - Select "Remember trust" for projects you work on regularly

6. **Test with a simple prompt**

   ```
   > What files are in this directory?
   ```
   
   Copilot will use its tools to explore and answer your question.

7. **Verify slash commands work**

   ```
   > /model show
   ```
   
   You should see available AI models.

#### ✅ Success Criteria

- [ ] Node.js v22+ installed
- [ ] Copilot CLI installed (`copilot` command works)
- [ ] Authenticated with GitHub account
- [ ] Successfully sent a prompt and received a response
- [ ] `/model show` displays available models

#### ✨ The "After" — The Improved Experience

With Copilot CLI installed:
- AI assistance in any terminal (SSH, local, CI/CD)
- Same powerful capabilities as VS Code Copilot
- File manipulation, code generation, debugging—all from the command line
- Works with your existing workflow, not against it

#### 📚 Official Docs

- [Installing GitHub Copilot CLI](https://docs.github.com/en/copilot/how-tos/set-up/install-copilot-cli)
- [Using GitHub Copilot CLI](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/use-copilot-cli)
- [About GitHub Copilot CLI](https://docs.github.com/en/copilot/concepts/agents/about-copilot-cli)

#### 💭 Jordan's Reaction

_"Five minutes to install, and now I have an AI agent in every terminal I open. SSH sessions, CI runners, remote servers—Copilot goes everywhere I go."_

---

### Exercise 2: Interactive Mode — "Conversational AI in Your Terminal"

**Tier**: 🆓 Free (with Copilot Pro subscription)  
**Primary Persona**: Marcus (DevOps Developer)  
**Time**: 15-20 minutes

#### 📖 The Story

**Marcus** knows Docker and Kubernetes from his DevOps work, but application development brings unfamiliar codebases. Today he needs to understand a Node.js project, make some changes, and write tests—all from his terminal because he's SSH'd into a dev server.

Instead of struggling without VS Code, he'll use Copilot CLI's interactive mode.

#### ❌ The "Before" — What Frustration Looks Like

Without interactive Copilot:
- Can't understand unfamiliar code without an IDE
- No AI help when SSH'd into remote machines
- Manual code editing with vim feels tedious
- Context-switching between terminal and editor

#### 🎯 Objective

Use Copilot CLI in interactive mode to explore a codebase, understand code, and make changes—all through natural language conversation.

#### 📋 Steps

1. **Start an interactive session**

   Navigate to a project directory and start Copilot:
   ```bash
   cd ~/your-project
   copilot
   ```

2. **Explore the codebase**

   Ask about the project structure:
   ```
   > What is this project? Give me a high-level overview.
   ```
   
   Copilot will read files and provide a summary.

3. **Reference specific files with mentions**

   Use `@` to bring specific files into context:
   ```
   > Explain what @src/index.ts does
   ```
   
   Or reference multiple files:
   ```
   > Compare @src/api/users.ts and @src/api/products.ts
   ```

4. **Ask follow-up questions**

   The conversation maintains context:
   ```
   > How does authentication work in this project?
   > What middleware is being used?
   > Are there any security concerns?
   ```

5. **Request code changes**

   Ask Copilot to modify code:
   ```
   > Add input validation to the createUser function in @src/api/users.ts
   ```
   
   Copilot will:
   - Show the proposed changes
   - Ask for your approval before applying
   - Execute the file modifications

6. **Generate new code**

   Create new files through conversation:
   ```
   > Create a new API endpoint for products that supports CRUD operations.
     Follow the patterns used in @src/api/users.ts
   ```

7. **Review changes before accepting**

   Copilot always asks for approval before:
   - Writing files
   - Running commands
   - Making modifications
   
   You can:
   - Accept the change
   - Ask for modifications
   - Reject and try a different approach

8. **Use context variables for precision**

   Reference specific elements:
   ```
   > Explain #function:handleError in @src/utils.ts
   > What does #class:UserService do?
   ```

#### ✅ Success Criteria

- [ ] Started an interactive Copilot session
- [ ] Asked about and understood the project structure
- [ ] Referenced specific files using `@` mentions
- [ ] Had a multi-turn conversation that maintained context
- [ ] Requested a code change and reviewed before accepting
- [ ] Generated new code that follows project patterns

#### ✨ The "After" — The Improved Experience

With interactive mode:
- Full AI coding capabilities in any terminal
- Natural conversation about complex codebases
- File mentions provide precise context
- Changes require approval—you stay in control
- Same power as VS Code Copilot, anywhere

#### 📚 Official Docs

- [Using GitHub Copilot CLI](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/use-copilot-cli)
- [GitHub Copilot CLI 101](https://github.blog/ai-and-ml/github-copilot-cli-101-how-to-use-github-copilot-from-the-command-line/)

#### 💭 Marcus's Insight

_"I'm SSH'd into a dev server with no IDE, and I can still have a full conversation with an AI about the codebase. It reads files, suggests changes, asks for my approval—this is what I needed for those late-night prod issues."_

#### 🚀 Challenge Extension

Try a more complex multi-step task:
```
> I need to refactor the authentication module:
  1. Extract the token validation into a separate utility
  2. Add proper error handling with custom exception types  
  3. Write unit tests for the new utilities
  4. Update the existing code to use the new utilities
```

---

### Exercise 3: Slash Commands — "Controlling Your AI Session"

**Tier**: 🆓 Free (with Copilot Pro subscription)  
**Primary Persona**: Priya (Recent Graduate)  
**Time**: 10-15 minutes

#### 📖 The Story

**Priya** started using Copilot CLI and loves the conversational interface. But she noticed some commands start with `/`—like `/model` and `/clear`. She's curious what these do and worried she's missing important features.

With slash commands, she'll learn to control her AI sessions like a pro.

#### ❌ The "Before" — What Frustration Looks Like

Without knowing slash commands:
- Stuck with default AI model when another might be better
- No way to save useful conversations
- Chat history grows unbounded, slowing things down
- Can't check usage or switch context efficiently

#### 🎯 Objective

Master slash commands to control Copilot CLI sessions—model selection, session management, and sharing.

#### 📋 Steps

1. **Start Copilot CLI**

   ```bash
   copilot
   ```

2. **View available models**

   ```
   > /model show
   ```
   
   You'll see a list of available AI models:
   - `gpt-4o` — Balanced performance
   - `claude-sonnet-4` — Strong reasoning
   - `gemini-2.5-pro` — Fast and capable
   - And others depending on your subscription

3. **Switch to a different model**

   ```
   > /model claude-sonnet-4
   ```
   
   Now all responses will use Claude. Try asking the same question with different models to see how responses vary.

4. **Check your session usage**

   ```
   > /usage
   ```
   
   See statistics about your current session:
   - Tokens used
   - Number of messages
   - Session duration

5. **Clear conversation context**

   When starting a new task:
   ```
   > /clear
   ```
   
   This resets the conversation, removing previous context. Useful when:
   - Switching to an unrelated task
   - Context is getting too large
   - You want a fresh start

6. **Share your session**

   After a useful conversation:
   ```
   > /share
   ```
   
   Options:
   - Save as Markdown file locally
   - Create a GitHub Gist
   - Copy to clipboard
   
   Great for documenting solutions or sharing with teammates.

7. **Get help on available commands**

   ```
   > /help
   ```
   
   See all available slash commands and their descriptions.

8. **Manage session styling**

   ```
   > /session
   ```
   
   View and configure session display options.

#### ✅ Success Criteria

- [ ] Listed available AI models with `/model show`
- [ ] Switched between at least two different models
- [ ] Checked session usage with `/usage`
- [ ] Cleared context with `/clear`
- [ ] Saved a conversation with `/share`
- [ ] Used `/help` to explore other commands

#### ✨ The "After" — The Improved Experience

With slash commands mastered:
- Choose the right AI model for each task
- Keep sessions clean and focused
- Save and share valuable conversations
- Professional-level control over AI interactions

#### 📚 Official Docs

- [Using GitHub Copilot CLI](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/use-copilot-cli)
- [GitHub Copilot CLI: How to get started](https://github.blog/ai-and-ml/github-copilot/github-copilot-cli-how-to-get-started/)

#### 💭 Priya's Realization

_"The slash commands are like settings for my AI assistant. I can switch brains, save conversations, and start fresh whenever I need to. It's not just chatting—I'm actually controlling the AI."_

#### 🚀 Challenge Extension

Create a workflow using multiple models:
1. Use GPT-4o to brainstorm approaches to a problem
2. Switch to Claude to review and critique the approach  
3. Use the best approach with your preferred model to implement
4. Share the final conversation as documentation

---

### Exercise 4: Shell Mode — "Execute Without Leaving Copilot"

**Tier**: 🆓 Free (with Copilot Pro subscription)  
**Primary Persona**: Jordan (DevOps Expert)  
**Time**: 15-20 minutes

#### 📖 The Story

**Jordan** loves that Copilot CLI can help with code, but he's constantly exiting Copilot to run shell commands—build the code, run tests, check git status. Every context switch breaks his flow.

Then he discovers shell mode: prefix any command with `!` and Copilot executes it inline.

#### ❌ The "Before" — What Frustration Looks Like

Without shell mode:
- Exit Copilot → Run command → Re-enter Copilot
- Lose conversation context with each exit
- Manual copy-paste of command outputs
- Fragmented workflow between AI and shell

#### 🎯 Objective

Use shell mode (`!`) to execute commands directly within Copilot CLI, maintaining conversation context while running tests, builds, and other shell operations.

#### 📋 Steps

1. **Start Copilot CLI in a project**

   ```bash
   cd ~/your-project
   copilot
   ```

2. **Run a simple shell command**

   Prefix with `!`:
   ```
   > !ls -la
   ```
   
   The output appears in your Copilot session.

3. **Check git status without leaving**

   ```
   > !git status
   ```
   
   Then ask Copilot about the output:
   ```
   > What changes are staged?
   ```

4. **Run tests and discuss results**

   ```
   > !npm test
   ```
   
   If tests fail:
   ```
   > Can you help me fix the failing tests?
   ```
   
   Copilot has the test output in context.

5. **Build and troubleshoot**

   ```
   > !npm run build
   ```
   
   If there are errors:
   ```
   > What's causing these build errors? How do I fix them?
   ```

6. **Create a development workflow**

   Combine shell commands with AI assistance:
   ```
   > Let's implement a new feature. First, show me the current branch.
   > !git branch --show-current
   > Good, now let's create a feature branch.
   > !git checkout -b feature/add-logging
   > Now let's add logging to @src/api/users.ts
   ```

7. **Use shell mode for exploration**

   ```
   > !find . -name "*.test.ts" | head -10
   > What testing patterns are used in these test files?
   ```

8. **Combine with code changes**

   ```
   > Add input validation to the createUser function
   [Copilot makes changes]
   > !npm test -- --grep "createUser"
   > The tests pass. Let's commit this.
   > !git add . && git commit -m "Add input validation to createUser"
   ```

#### ✅ Success Criteria

- [ ] Executed shell commands using `!` prefix
- [ ] Ran tests and had Copilot analyze the results
- [ ] Used shell output as context for AI assistance
- [ ] Combined shell mode with code changes
- [ ] Completed a mini-workflow (git + code + test) without leaving Copilot

#### ✨ The "After" — The Improved Experience

With shell mode:
- One unified interface for coding and shell operations
- Command outputs become AI context automatically
- Seamless workflow: code → test → fix → commit
- Never lose conversation context to run a command

#### 📚 Official Docs

- [Using GitHub Copilot CLI](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/use-copilot-cli)
- [GitHub Copilot CLI 101](https://github.blog/ai-and-ml/github-copilot-cli-101-how-to-use-github-copilot-from-the-command-line/)

#### 💭 Jordan's Verdict

_"Shell mode is the feature I didn't know I needed. My workflow used to be: ask AI, exit, run command, re-enter AI, paste output. Now it's one continuous conversation. The AI sees everything I see."_

#### 🚀 Challenge Extension

Create an automated debugging workflow:
```
> !npm test
> Analyze the failing tests and fix them one by one.
> After each fix, run !npm test to verify.
> Continue until all tests pass.
```

---

### Exercise 5: Programmatic Mode — "AI in Your Pipelines"

**Tier**: 🆓 Free (with Copilot Pro subscription)  
**Primary Persona**: Jordan (DevOps Expert)  
**Time**: 15-20 minutes

#### 📖 The Story

**Jordan** sees the potential of Copilot CLI for his CI/CD pipelines. Imagine: automated code review comments, intelligent test failure analysis, security audit summaries—all powered by AI. But interactive mode won't work in CI.

That's where programmatic mode comes in: one-shot prompts with the `-p` flag.

#### ❌ The "Before" — What Frustration Looks Like

Without AI in CI/CD:
- Cryptic test failure messages require manual investigation
- No automated code quality insights
- Security scans produce long reports nobody reads
- Build failures mean scrolling through endless logs

#### 🎯 Objective

Use Copilot CLI's programmatic mode (`-p`) to integrate AI assistance into automation scripts and CI/CD pipelines.

#### 📋 Steps

1. **Basic programmatic usage**

   Instead of interactive mode, pass your prompt directly:
   ```bash
   copilot -p "Explain what a Dockerfile does in one paragraph"
   ```
   
   Copilot responds and exits—perfect for scripts.

2. **Analyze files programmatically**

   ```bash
   copilot -p "Review @src/api/auth.ts for security vulnerabilities"
   ```
   
   Get instant code review without an interactive session.

3. **Process command output**

   Pipe output to Copilot for analysis:
   ```bash
   npm test 2>&1 | copilot -p "Analyze these test results and summarize any failures"
   ```

4. **Create a test failure analyzer script**

   Create `analyze-tests.sh`:
   ```bash
   #!/bin/bash
   # Run tests and analyze failures with AI
   
   TEST_OUTPUT=$(npm test 2>&1)
   EXIT_CODE=$?
   
   if [ $EXIT_CODE -ne 0 ]; then
       echo "Tests failed. Analyzing with Copilot..."
       echo "$TEST_OUTPUT" | copilot -p "Analyze these test failures and suggest fixes"
   else
       echo "All tests passed!"
   fi
   ```

5. **Security audit automation**

   ```bash
   copilot -p "Audit @src/api/ for common security issues: SQL injection, XSS, auth bypass. Provide a summary report."
   ```

6. **Documentation generation**

   ```bash
   copilot -p "Generate API documentation for @src/api/users.ts in OpenAPI format"
   ```

7. **GitHub Actions integration**

   Create `.github/workflows/ai-review.yml`:
   ```yaml
   name: AI Code Review
   on: pull_request
   
   jobs:
     review:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v4
         
         - name: Setup Node.js
           uses: actions/setup-node@v4
           with:
             node-version: '22'
         
         - name: Install Copilot CLI
           run: npm install -g @github/copilot
         
         - name: Run AI Review
           run: |
             copilot -p "Review the changes in this PR for:
               1. Code quality issues
               2. Potential bugs
               3. Security concerns
               Provide a summary suitable for a PR comment."
           env:
             GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
   ```

8. **Control tool permissions**

   For CI/CD safety, control what Copilot can do:
   ```bash
   # Allow all tools (file read/write, shell execution)
   copilot -p "Fix the linting errors" --allow-all-tools
   
   # Deny specific dangerous commands
   copilot -p "Clean up the project" --deny-command "rm -rf"
   ```

#### ✅ Success Criteria

- [ ] Ran Copilot with `-p` flag successfully
- [ ] Analyzed a file for issues programmatically
- [ ] Created a script that uses Copilot for analysis
- [ ] Understand how to integrate with CI/CD
- [ ] Know how to control tool permissions for safety

#### ✨ The "After" — The Improved Experience

With programmatic mode:
- AI-powered CI/CD pipelines
- Automated code review and analysis
- Intelligent test failure diagnosis
- One-shot prompts perfect for automation

#### 📚 Official Docs

- [Using GitHub Copilot CLI](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/use-copilot-cli)
- [GitHub Actions documentation](https://docs.github.com/en/actions)

#### 💭 Jordan's Insight

_"Programmatic mode changes everything. Now my CI pipelines have AI superpowers. Test failures get analyzed automatically, security scans produce human-readable summaries, and PR reviews include intelligent insights. AI isn't just for coding—it's for my entire DevOps workflow."_

#### 🚀 Challenge Extension

Create a comprehensive PR analysis workflow:
```bash
#!/bin/bash
# ai-pr-review.sh

# Get changed files
CHANGED_FILES=$(git diff --name-only origin/main)

# Security review
copilot -p "Review these files for security issues: $CHANGED_FILES"

# Performance analysis
copilot -p "Check for performance concerns in: $CHANGED_FILES"

# Test coverage suggestions
copilot -p "What tests should be added for changes in: $CHANGED_FILES"
```

---

## 📝 Key Takeaways

### The Copilot CLI Workflow

```
┌─────────────────┐      ┌─────────────────┐      ┌─────────────────┐
│ Start Session   │ ───► │ Natural Language│ ───► │ Review Changes  │
│ (copilot)       │      │ Conversation    │      │ (approve/reject)│
└─────────────────┘      └─────────────────┘      └─────────────────┘
        │                        │                        │
        │  ┌─────────────────────┼────────────────────────┤
        ▼  ▼                     ▼                        ▼
┌─────────────────┐      ┌─────────────────┐      ┌─────────────────┐
│ /model, /share  │      │ @file mentions  │      │ Shell mode (!)  │
│ /clear, /usage  │      │ #context vars   │      │ Run commands    │
└─────────────────┘      └─────────────────┘      └─────────────────┘
```

### Two Modes for Different Needs

| Mode | Command | Use Case | When to Use |
|------|---------|----------|-------------|
| **Interactive** | `copilot` | Conversational coding | Daily development, exploration, debugging |
| **Programmatic** | `copilot -p "..."` | Automation | CI/CD, scripts, one-shot tasks |

### Essential Commands Quick Reference

```bash
# Start interactive session
copilot

# Programmatic mode (one-shot)
copilot -p "your prompt"

# Inside interactive session:
/login              # Authenticate
/model show         # List available models
/model <name>       # Switch model
/clear              # Clear conversation
/share              # Save session
/usage              # View stats
/help               # See all commands

# Shell mode (run commands)
!ls -la             # Execute shell command
!npm test           # Run tests
!git status         # Check git

# File mentions
@src/file.ts        # Reference specific file
@package.json       # Bring config into context
```

### When to Use Copilot CLI vs. Other Tools

| ✅ Copilot CLI Excels At | ❌ Consider Other Tools |
|--------------------------|------------------------|
| SSH/remote sessions without IDE | Complex IDE refactoring (VS Code) |
| CI/CD pipeline integration | Visual debugging (VS Code) |
| Quick terminal-based coding | Large-scale multi-file changes (VS Code) |
| Automation and scripting | Real-time collaboration (Live Share) |
| Server-side development | Graphical diff review (GitHub.com) |
| Headless/container environments | |

### The Learning Loop

Every interaction with Copilot CLI builds your skills:

1. **Ask** → Natural language prompt
2. **Review** → Understand proposed changes
3. **Approve** → Apply with confidence
4. **Iterate** → Refine with follow-up prompts

---

## ➡️ Next Steps

You've completed Appendix B! You now have full Copilot capabilities in any terminal, anywhere.

**To continue learning:**
- Return to [Module 00: Orientation](../00-orientation/README.md) for a refresher
- Explore [Appendix A: Copilot on the Web](../09-appendix-a-copilot-web/README.md)
- Check out [Module 07: Agent Fundamentals](../07-agent-fundamentals/README.md) for custom agents

**Build the habit:**
- Use `copilot` whenever you're in a terminal without VS Code
- Try programmatic mode for repetitive analysis tasks
- Integrate AI into your CI/CD pipelines
- Combine shell mode (`!`) with AI assistance for seamless workflows

---

## 🔗 Additional Resources

**GitHub Copilot CLI:**
- [Installing GitHub Copilot CLI](https://docs.github.com/en/copilot/how-tos/set-up/install-copilot-cli)
- [Using GitHub Copilot CLI](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/use-copilot-cli)
- [About GitHub Copilot CLI](https://docs.github.com/en/copilot/concepts/agents/about-copilot-cli)
- [GitHub Copilot CLI: How to get started](https://github.blog/ai-and-ml/github-copilot/github-copilot-cli-how-to-get-started/)
- [GitHub Copilot CLI 101](https://github.blog/ai-and-ml/github-copilot-cli-101-how-to-use-github-copilot-from-the-command-line/)

**Custom Agents and MCP:**
- [Custom Agents in Copilot CLI](https://github.blog/changelog/2025-10-28-github-copilot-cli-use-custom-agents-and-delegate-to-copilot-coding-agent/)
- [Extending Copilot with MCP](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/coding-agent/extend-coding-agent-with-mcp)

**CI/CD Integration:**
- [GitHub Actions documentation](https://docs.github.com/en/actions)
- [GitHub Copilot CLI: How to get started](https://github.blog/ai-and-ml/github-copilot/github-copilot-cli-how-to-get-started/)
