# Exercise 5.5: Bootstrap Customizations with Awesome Copilot MCP

## 🎯 Objective

Discover and install community-curated chat modes, instructions, and prompts from the **Awesome GitHub Copilot Customizations** repository using the **Awesome Copilot MCP Server**—a faster way to bootstrap your `.github/` configuration than writing everything from scratch.

**Time:** ~10 minutes

---

## 👥 Personas

| Persona | Role | Why This Matters |
|---------|------|------------------|
| ⭐ **Marcus** | Lead | *"Instead of writing React instructions from scratch, I can search what the community has already built and save the best ones directly to our repo."* |
| 🤝 **Sarah** | Support | *"This is exactly what I wanted—a library of proven patterns we can adopt instead of reinventing the wheel."* |
| 🤝 **Elena** | Support | *"If there are testing-focused prompts, I want them. Why write my own test generation prompt when experts have shared theirs?"* |

---

## 📋 Prerequisites

- Docker Desktop (or compatible container runtime like Rancher Desktop with dockerd) installed and running
- VS Code 1.101+ with GitHub Copilot
- Module 05 Exercise 5.1 completed (MCP server configuration experience)

---

## 📖 The Problem

The team has been writing custom instructions, prompts, and chat modes from scratch throughout this workshop. While this teaches the concepts, it's time-consuming. There's a community-driven repository—[Awesome GitHub Copilot Customizations](https://github.com/microsoft/awesome-copilot)—with hundreds of curated examples, but discovering and comparing them is tedious.

**Current workflow:**
1. Visit the GitHub repository
2. Browse through directories
3. Read individual files
4. Manually copy content
5. Create local files
6. Repeat for each customization

**Time cost:** 5-10 minutes per customization found and installed.

---

## 🔧 Steps

### Step 1: Install the Awesome Copilot MCP Server

The Awesome Copilot MCP Server provides tools to search and save customizations directly from Copilot Chat.

**Option A: One-click install**

Click this badge to install directly in VS Code:

[![Install in VS Code](https://img.shields.io/badge/Install%20in-VS%20Code-blue?logo=visualstudiocode)](https://aka.ms/awesome-copilot/mcp/vscode)

**Option B: Manual configuration**

Add to your `.vscode/mcp.json`:

```json
{
  "servers": {
    "awesome-copilot": {
      "type": "stdio",
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "ghcr.io/microsoft/mcp-dotnet-samples/awesome-copilot:latest"
      ]
    }
  }
}
```

### Step 2: Start the MCP Server

1. Open the Command Palette (`Ctrl+Shift+P`)
2. Run **MCP: List Servers**
3. Select `awesome-copilot`
4. Choose **Start Server**

Wait for the server to start (first run downloads the container image).

### Step 3: Search for Customizations

In Copilot Chat, invoke the search prompt:

```
/mcp.awesome-copilot.get_search_prompt
```

When prompted for keywords, enter a technology relevant to your project:

- `react` — for React/frontend development
- `python` — for Python projects
- `testing` — for test generation
- `typescript` — for TypeScript projects
- `api` — for API development

### Step 4: Review Search Results

Copilot will display a table showing:

| Exists | Mode | Filename | Title | Description |
|--------|------|----------|-------|-------------|
| ✅ | instructions | react.instructions.md | React Best Practices | Component patterns and hooks |
| ❌ | prompts | test-generation.prompt.md | Test Generator | Creates comprehensive test suites |
| ❌ | chatmodes | frontend-dev.chatmode.md | Frontend Developer | Frontend-focused chat mode |

- ✅ = Already exists in your `.github/` directory
- ❌ = Not yet installed

### Step 5: Install a Customization

To install a customization, reply with the filename:

```
Save test-generation.prompt.md
```

Copilot will:
1. Load the content from the Awesome Copilot repository
2. Save it to the appropriate directory (`.github/prompts/`, `.github/instructions/`, or `.github/chatmodes/`)
3. Confirm the save location

### Step 6: Verify Installation

Check that the file was created:

```bash
ls .github/prompts/
# or
ls .github/instructions/
```

Test the installed customization in Copilot Chat!

---

## 💭 Marcus's Realization

> *"This is a game-changer. Instead of spending 20 minutes writing a TypeScript instructions file, I searched 'typescript', found three options, compared their descriptions, and installed the best one in under a minute. The community has already solved most of these problems—we just needed a way to find and use their solutions."*

---

## ✅ Success Criteria

- [ ] Awesome Copilot MCP server installed and running
- [ ] Successfully searched for customizations using keywords
- [ ] Reviewed results table comparing existing vs. available
- [ ] Installed at least one new instruction, prompt, or chat mode
- [ ] Verified the file was saved to the correct `.github/` subdirectory
- [ ] Tested the installed customization works in Copilot Chat

---

## 📊 Before/After Comparison

| Metric | Before (Manual) | After (Awesome Copilot MCP) |
|--------|-----------------|----------------------------|
| Discovery time | 10-15 min browsing GitHub | 30 sec search |
| Comparison effort | Open multiple tabs, read each | Single table view |
| Installation time | 2-3 min copy/paste/create | 10 sec reply |
| Total per customization | 15-20 min | 1-2 min |
| Awareness of options | Limited (what you find) | Comprehensive (all matches) |

---

## 🚀 Challenge Extension

**Build a Starter Kit**

Use the Awesome Copilot MCP server to bootstrap a complete customization setup:

1. Search `react typescript testing` (multiple keywords)
2. Install 2-3 complementary instructions
3. Install 1-2 reusable prompts
4. Try a chat mode that matches your workflow
5. Document which customizations you chose and why

**Share with your team:** Create a README documenting your curated customization set so others can install the same setup.

---

## 🔗 Connection to Previous Modules

This exercise brings together concepts from the entire workshop:

| Module | Connection |
|--------|------------|
| **Module 1: Instructions** | Search and install community-curated `.instructions.md` files |
| **Module 3: Custom Prompts** | Discover and add reusable `.prompt.md` files |
| **Module 4: Agent Skills** | Find specialized skills in the awesome repository |
| **Module 6: Custom Agents** | Chat modes are agent configurations—search and install them |

The Awesome Copilot MCP Server is a **meta-tool**—it helps you build your Copilot customization faster by leveraging community knowledge.

---

## 📚 Resources

- [Awesome Copilot Repository](https://aka.ms/awesome-copilot) — The source of all customizations
- [Awesome Copilot MCP Server](https://aka.ms/awesome-copilot/mcp) — GitHub repository with installation options
- [Announcing Blog Post](https://developer.microsoft.com/blog/announcing-awesome-copilot-mcp-server) — Full announcement with video demo
- [Let's Learn MCP](https://aka.ms/letslearnmcp) — Learn MCP development
- [MCP Workshop in .NET](https://aka.ms/mcp-workshop/dotnet) — Build your own MCP servers

---

## ➡️ Next

Continue to [Module 06: Custom Agents](../06-custom-agents/README.md) to learn how to bundle your newly-installed customizations into specialized agent workflows.
