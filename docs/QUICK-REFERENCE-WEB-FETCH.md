# Quick Reference: Web Fetch Capabilities

## Can This Agent Fetch URLs?

| Agent | Web Fetch? | Use For |
|-------|------------|---------|
| **Tech Talk Generator** | ✅ Yes | Research blog posts, docs, GitHub announcements for tech talks |
| **Module Creator** | ✅ Yes | Research documentation for complete module creation |
| **Module Planner** | ✅ Yes | Research documentation for module planning |
| **Slide Generator** | ❌ No | Generates slides from existing README files |
| **Slide Manager** | ❌ No | Orchestrates slide generation from existing content |

## Quick Troubleshooting

### ❌ Problem: Task URLs Don't Work

```
Bad:  https://github.com/MSBart2/CopilotTraining/tasks/fd26867e...
Good: https://github.com/MSBart2/CopilotTraining/issues/42
```

**Why**: Task URLs are internal Copilot Workspace URLs, not public web pages.

**Fix**: Use the actual GitHub issue or PR URL instead.

### ❌ Problem: Agent Says "Cannot Fetch URL"

**Check**:
1. Is it a public URL? (No login required)
2. Is it a task URL? (Use issue/PR URL instead)
3. Is it complete? (Has `https://`)
4. Can you open it in incognito mode?

**Workaround**: Copy content to issue description

### ❌ Problem: Wrong Agent for URL Research

**Fix**: Use the right agent:
- Creating tech talk → `@tech-talk-generator`
- Creating module → `@module-creator` or `@module-planner`
- Creating slides → First use agent with web_fetch to create README, then `@slide-generator`

## Usage Examples

### ✅ Good: Tech Talk from Blog

```markdown
@tech-talk-generator Generate tech talk about GitHub Models using:
https://github.blog/2024-08-01-introducing-github-models/

Focus on: API usage, rate limits, production readiness
```

### ✅ Good: Module from Docs

```markdown
@module-planner Plan module on custom instructions using:
https://docs.github.com/en/copilot/customizing-copilot/adding-custom-instructions-for-github-copilot

Map to personas: Sarah, David, Elena
Include: 3-4 exercises with metrics
```

### ✅ Good: Multi-Source Research

```markdown
@tech-talk-generator Research MCP servers from:
- https://github.blog/2024-11-25-model-context-protocol/
- https://modelcontextprotocol.io/introduction
- https://github.com/modelcontextprotocol/servers
```

### ❌ Bad: Just URLs, No Context

```markdown
@tech-talk-generator https://github.blog/some-post
```

## Supported URL Types

| URL Type | Support | Example |
|----------|---------|---------|
| GitHub Blog | ✅ Full | `https://github.blog/...` |
| GitHub Docs | ✅ Full | `https://docs.github.com/...` |
| GitHub Repos | ✅ Full | `https://github.com/owner/repo` |
| Public Web | ✅ Most | Standard HTTP/HTTPS URLs |
| Task URLs | ❌ No | Use issue/PR URLs instead |
| Private Repos | ❌ No | May lack authentication |
| Paywalled | ❌ No | Copy content to description |

## Best Practices

1. **✅ DO**: Provide context with URLs
2. **✅ DO**: Use multiple source URLs
3. **✅ DO**: Verify URLs are public
4. **✅ DO**: Use official docs when possible
5. **❌ DON'T**: Just paste task URLs
6. **❌ DON'T**: Use paywalled content
7. **❌ DON'T**: Expect agents to watch videos
8. **❌ DON'T**: Forget to explain what you want

## Need More Help?

See the full guide: [URL-FETCHING-GUIDE.md](./URL-FETCHING-GUIDE.md)
