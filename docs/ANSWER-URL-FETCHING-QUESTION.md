# Answer to Your Question About URL Fetching

## Your Question

> "Copilot seems to have problems fetching remote URLs. Example: https://github.com/MSBart2/CopilotTraining/tasks/fd26867e-8469-4ec5-9628-ea5cf14ee85c?author=rbmathis  Is it impossible to have copilot run web_fetch to a remote URL? Can you give any advice?"

## Short Answer

**Yes, Copilot CAN fetch remote URLs**, but the URL you provided is a **task URL** which doesn't work. Here's why and how to fix it:

### ❌ The Problem

```
https://github.com/MSBart2/CopilotTraining/tasks/fd26867e-8469-4ec5-9628-ea5cf14ee85c?author=rbmathis
```

This is a **GitHub Copilot Workspace internal task URL**. These are not publicly accessible web pages—they're internal to the Copilot Workspace interface. Agents cannot fetch these URLs because they're not real web resources.

### ✅ The Solution

Use the **actual GitHub issue or PR URL** instead:

```
# Instead of the task URL, use:
https://github.com/MSBart2/CopilotTraining/issues/42
# or
https://github.com/MSBart2/CopilotTraining/pull/42
```

## Which Agents Can Fetch URLs?

Only specific custom agents in this repository have `web_fetch` capabilities:

| Agent | Has web_fetch? | When to Use |
|-------|---------------|-------------|
| **@tech-talk-generator** | ✅ Yes | Research blog posts/docs for tech talks |
| **@module-creator** | ✅ Yes | Complete module creation with URL research |
| **@module-planner** | ✅ Yes | Module planning from documentation URLs |
| **@slide-generator** | ❌ No | Only works with existing README files |
| **@slide-manager** | ❌ No | Orchestrates slides from local content |

## How to Use URL Fetching

### Example 1: Tech Talk from Blog Post

```markdown
@tech-talk-generator Generate a tech talk about GitHub Models using:
https://github.blog/2024-08-01-introducing-github-models/

Focus on: API usage, rate limits, production readiness
Target audience: Backend developers
```

### Example 2: Module from Documentation

```markdown
@module-planner Plan a module on custom instructions using:
https://docs.github.com/en/copilot/customizing-copilot/adding-custom-instructions-for-github-copilot

Map to personas: Sarah (patterns), David (verification), Elena (enterprise)
Include: 3-4 exercises with quantified metrics
```

### Example 3: Multi-Source Research

```markdown
@tech-talk-generator Research MCP servers from:
- https://github.blog/2024-11-25-model-context-protocol/
- https://modelcontextprotocol.io/introduction
- https://github.com/modelcontextprotocol/servers

Create comprehensive technical deep-dive for practitioners
```

## What URL Types Work?

### ✅ Supported URLs

- **GitHub Blog**: `https://github.blog/...`
- **GitHub Docs**: `https://docs.github.com/...`
- **GitHub Repos**: `https://github.com/owner/repo`
- **Public docs sites**: `https://modelcontextprotocol.io/...`
- **Most public web pages**: Standard HTTP/HTTPS

### ❌ Unsupported URLs

- **Task URLs**: `https://github.com/.../tasks/...` (internal only)
- **Private repos**: May lack authentication
- **Paywalled content**: Agents can't authenticate
- **JavaScript-heavy pages**: Agents get static HTML only

## Quick Fix for Your Case

If you have a task URL and want to research related content:

1. **Find the underlying issue/PR**:
   - Look for the issue number in the task interface
   - Use that to construct the real URL: `https://github.com/MSBart2/CopilotTraining/issues/[NUMBER]`

2. **Or use the actual content source**:
   - If researching a capability, use the official blog post or docs URL
   - Example: Instead of a task about MCP, use `https://github.blog/2024-11-25-model-context-protocol/`

3. **Or copy content directly**:
   - If the URL can't be fetched, copy relevant content into your issue description
   - Agents can work with content provided directly

## Additional Resources

- **[URL Fetching Guide](./URL-FETCHING-GUIDE.md)** - Complete guide with all details
- **[Quick Reference](./QUICK-REFERENCE-WEB-FETCH.md)** - Fast troubleshooting reference
- **[Agent Documentation](./README.md)** - Full agent capabilities documentation

## Summary

**Your specific issue**: Task URLs don't work because they're internal Copilot Workspace URLs.

**Solution**: Use actual GitHub issue/PR URLs, or use official blog/docs URLs for the content you want to research.

**Agents that can help**: Use `@tech-talk-generator`, `@module-creator`, or `@module-planner` with proper public URLs.

**It IS possible** to have Copilot fetch remote URLs—you just need to use the right agent and the right type of URL! 🎯
