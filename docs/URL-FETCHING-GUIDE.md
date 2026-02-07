# URL Fetching Guide for GitHub Copilot Agents

## Overview

GitHub Copilot Workspace provides different capabilities to different types of agents. Understanding which agents have URL fetching capabilities and how to use them effectively is essential for content creation and research tasks.

## Which Agents Can Fetch URLs?

The following custom agents in this repository have `web_fetch` or `web/fetch` capabilities:

### ✅ Agents with Web Fetch Access

1. **Tech Talk Generator** (`.github/agents/tech-talk-generator.agent.md`)
   - **Tools**: `web/fetch`, `web/githubRepo`, `read`, `search`, `edit/createFile`, `edit/editFiles`
   - **Use case**: Research GitHub Copilot capabilities from blog posts, docs, announcements
   - **Example**: Generate tech talk content from GitHub blog post URLs

2. **Module Creator** (`.github/agents/module-creator.agent.md`)
   - **Tools**: `web/fetch`, `web/githubRepo`, `read`, `search`, `edit/createFile`, `edit/editFiles`
   - **Use case**: Research workshop module topics from official documentation
   - **Example**: Create workshop module from GitHub Copilot docs URLs

3. **Module Planner** (`.github/agents/module-planner.agent.md`)
   - **Tools**: `web/fetch`, `web/githubRepo`, `read`, `search`, `edit/createFile`
   - **Use case**: Research and plan module structure from source URLs
   - **Example**: Plan module exercises based on capability documentation

### ❌ Agents Without Web Fetch Access

1. **Slide Generator** (`.github/agents/slide-generator.agent.md`)
   - **Tools**: `read`, `edit/createFile`, `edit/editFiles`
   - **Why**: Generates slides from existing README files, doesn't need external research

2. **Slide Manager** (`.github/agents/slide-manager.agent.md`)
   - **Tools**: `read`, `search`, `edit/createFile`, `edit/editFiles`, `runSubagent`
   - **Why**: Orchestrates slide generation and verification, works with local files only

## How to Use Web Fetch Capabilities

### Method 1: Invoke Custom Agents Directly

When you have a URL to research, invoke the appropriate custom agent:

```markdown
@tech-talk-generator Generate a tech talk about GitHub Copilot Extensions using:
https://github.blog/2024-05-21-introducing-github-copilot-extensions/
```

```markdown
@module-creator Create module 12 on workspace instructions using:
https://docs.github.com/en/copilot/customizing-copilot/adding-custom-instructions-for-github-copilot
```

### Method 2: Provide URLs in Issue Description

When creating issues for Copilot to work on, include URLs in the problem statement:

```markdown
Create a tech talk about MCP servers using the following resources:
- https://modelcontextprotocol.io/introduction
- https://github.blog/2024-11-25-model-context-protocol/
```

Then assign the issue to the appropriate agent.

## URL Types Supported

### ✅ Supported URL Types

1. **GitHub Blog Posts** - `https://github.blog/...`
2. **GitHub Documentation** - `https://docs.github.com/...`
3. **Official GitHub Repositories** - `https://github.com/owner/repo`
4. **Model Context Protocol Docs** - `https://modelcontextprotocol.io/...`
5. **Public web pages** - Most public HTTP/HTTPS URLs

### ❌ URL Types with Limitations

1. **GitHub Copilot Workspace Task URLs** - `https://github.com/.../tasks/...`
   - **Issue**: These are internal Copilot Workspace URLs, not public web pages
   - **Workaround**: Use the actual GitHub issue/PR URL instead
   - **Example**: Instead of task URL, use `https://github.com/MSBart2/CopilotTraining/issues/42`

2. **Private repositories** - `https://github.com/org/private-repo`
   - **Issue**: Requires authentication that agents may not have
   - **Workaround**: Provide repository contents directly or use public mirrors

3. **Paywalled content** - Sites requiring subscriptions
   - **Issue**: Agents cannot authenticate to paid services
   - **Workaround**: Copy relevant content to issue description

4. **Dynamic/JavaScript-heavy pages**
   - **Issue**: Agents fetch static HTML, may miss dynamically loaded content
   - **Workaround**: Use documentation or blog post versions instead

## Troubleshooting

### Problem: "Cannot fetch URL"

**Symptoms**: Agent reports it cannot access the provided URL

**Possible Causes**:
1. URL is a Copilot Workspace internal URL (e.g., `/tasks/...`)
2. URL requires authentication
3. URL is behind a firewall or VPN
4. URL format is incorrect

**Solutions**:
1. Convert task URLs to actual GitHub issue/PR URLs
2. For GitHub content, ensure it's public
3. Copy content to issue description if URL is inaccessible
4. Verify URL is complete and correct

### Problem: "Agent doesn't have web_fetch tool"

**Symptoms**: Using an agent that can't fetch URLs

**Solution**: Use a different agent that has web_fetch capabilities:
- For tech talks: Use `@tech-talk-generator`
- For workshop modules: Use `@module-creator` or `@module-planner`
- For slides: First generate README with an agent that has web_fetch, then use `@slide-generator`

### Problem: "Fetched content is incomplete"

**Symptoms**: Agent gets the page but misses key content

**Possible Causes**:
1. Content loads via JavaScript (agent sees only initial HTML)
2. Content is behind authentication
3. Content uses frames or complex layouts

**Solutions**:
1. Look for "printer-friendly" or "markdown" versions
2. Use official documentation instead of blog aggregators
3. Check if there's a GitHub repository with the same info
4. Provide key excerpts in the issue description

## Best Practices

### 1. Choose the Right URL Source

**Good sources:**
- ✅ Official GitHub blogs and documentation
- ✅ GitHub repository README files
- ✅ Stable documentation sites (docs.github.com, modelcontextprotocol.io)

**Less reliable:**
- ⚠️ Medium posts (may be paywalled)
- ⚠️ Tweet threads (limited content)
- ⚠️ Video-only content (agents can't watch videos)

### 2. Provide Multiple URLs

Give agents several reference URLs for richer context:

```markdown
Research GitHub Copilot CLI using:
- Official announcement: https://github.blog/2023-03-22-github-copilot-x-the-ai-powered-developer-experience/
- Documentation: https://docs.github.com/en/copilot/github-copilot-in-the-cli
- Examples repo: https://github.com/github/gh-copilot
```

### 3. Combine URLs with Context

Don't just provide URLs—explain what you want:

**Bad**:
```markdown
@tech-talk-generator https://github.blog/some-post
```

**Good**:
```markdown
@tech-talk-generator Generate a tech talk about prompt engineering best practices using:
https://github.blog/2023-06-20-how-to-write-better-prompts-for-github-copilot/

Focus on practical techniques developers can use immediately.
```

### 4. Verify URL Accessibility

Before assigning to an agent, verify the URL:
1. Open in private/incognito browser window
2. Check if content loads without authentication
3. Ensure it's the actual content, not a login page

### 5. Use GitHub Repo URLs When Possible

Agents have special `web/githubRepo` capability for GitHub repositories:

```markdown
@module-creator Research from the official extension examples:
https://github.com/github/copilot-extensions-samples
```

## Common Patterns

### Pattern 1: Tech Talk from Blog Post

```markdown
@tech-talk-generator Create a tech talk about GitHub Models using:
https://github.blog/2024-08-01-introducing-github-models/

Target audience: Backend developers exploring AI integration
Focus on: API usage, rate limits, production readiness
```

### Pattern 2: Workshop Module from Docs

```markdown
@module-planner Plan a module on custom instructions using:
https://docs.github.com/en/copilot/customizing-copilot/adding-custom-instructions-for-github-copilot

Map to personas: Sarah (patterns), David (verification), Elena (enterprise)
Include: 3-4 exercises with metrics
```

### Pattern 3: Multi-Source Research

```markdown
@tech-talk-generator Research MCP servers from:
- Announcement: https://github.blog/2024-11-25-model-context-protocol/
- Spec: https://modelcontextprotocol.io/introduction
- Examples: https://github.com/modelcontextprotocol/servers

Create comprehensive technical deep-dive for practitioners.
```

## FAQ

### Q: Can Copilot fetch any URL I give it?

**A**: Most public web pages yes, but not:
- Internal Copilot Workspace URLs (like task URLs)
- Authentication-required pages
- JavaScript-heavy dynamic content
- Paywalled or subscription-only content

### Q: Why can't I use a task URL like `https://github.com/.../tasks/...`?

**A**: Task URLs are internal to Copilot Workspace and not publicly accessible. Use the actual GitHub issue or PR URL instead.

### Q: Which agent should I use for URL research?

**A**: Depends on what you're creating:
- **Tech talk content** → `@tech-talk-generator`
- **Workshop module** → `@module-creator` or `@module-planner`
- **Slides** → First use an agent with web_fetch to create README, then `@slide-generator`

### Q: Can I fetch URLs myself and provide them to agents?

**A**: Yes! You can copy content into the issue description or create reference files in the repo, then invoke agents to process that content.

### Q: What if the agent can't fetch my URL?

**A**: Fallback options:
1. Try a different URL for the same content
2. Copy relevant excerpts to the issue description
3. Check if there's a GitHub repo with the same information
4. Use official documentation instead of blog posts

## Related Documentation

- [Tech Talk Generator Agent](./agents-tech-talk-generator.agent.md) - Full documentation for tech talk creation
- [Module Creator Agent](./agents-module-creator-FULL.md) - Complete module creation workflow
- [Module Planner Agent](./agents-module-planner-FULL.md) - Module planning and research
- [Agent Tool Reference](#) - Complete list of tools available to each agent

## Summary

**Key Takeaways**:
1. ✅ Three agents have web_fetch: tech-talk-generator, module-creator, module-planner
2. ❌ Task URLs don't work - use actual GitHub issue/PR URLs instead
3. 🎯 Choose the right agent for your content type
4. 📚 Provide context with URLs, don't just paste links
5. 🔄 Have fallback options if URL fetching fails
