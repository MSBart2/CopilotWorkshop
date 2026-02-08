# Research Instructions for Tech Talk

You are researching source material for a new tech talk. Your output will be committed as `research.md` and will be the primary input for content planning in Phase 2.

## Issue Details

- **Issue Number:** {{ISSUE_NUMBER}}
- **Topic:** {{TOPIC}}
- **Primary Question:** {{PRIMARY_QUESTION}}
- **Target Audience:** {{AUDIENCE}}
- **Duration:** {{DURATION}}
- **Index Section:** {{SECTION}}
- **Guidance:** {{GUIDANCE}}

## Source URLs to Research

{{SOURCE_URLS}}

## Your Task

Research all source URLs thoroughly AND search the web for additional authoritative references. Produce a comprehensive research document.

### Web Search Requirements

Beyond the provided URLs, actively search for:
- **Official documentation** pages related to this topic
- **Blog posts** from GitHub, Microsoft, or recognized practitioners
- **Tutorials and guides** with practical examples
- **Release announcements** or changelogs that explain the feature
- **Community discussions** (GitHub Discussions, Stack Overflow) with real-world usage patterns

Use `curl` to fetch web pages when you find relevant URLs. Aim for **8-15 total references** (combining provided URLs + discovered sources).

### 1. Key Capabilities (3-6)

For each capability found in the sources:
- Name and one-line description
- How it works technically
- Code example or config snippet (if available)

### 2. Architecture Overview

- Components and how they interact
- Data flow / integration points
- System diagram description (for image generation later)

### 3. Code Examples & Patterns

Extract or create **concrete, working examples** from the source material:
- Configuration files (YAML, JSON, etc.)
- Code snippets with full context
- Workflow definitions
- CLI commands with expected output

For each example, note:
- What it demonstrates
- Prerequisites
- Expected outcome

These will be saved as separate files in `tech-talks/{{TOPIC}}/examples/`.

### 4. Visual Assets

For each image/diagram found in sources:
- Describe what it shows
- Provide the source URL
- Suggest a descriptive filename (e.g., `architecture-overview.png`)

These will be downloaded to `tech-talks/{{TOPIC}}/images/`.

### 5. Decision Criteria

- **When to use:** specific scenarios with rationale
- **When NOT to use:** anti-patterns and alternatives

### 6. Real-World Use Cases (3-5)

- Concrete scenario
- Measurable outcome or benefit
- Complexity level (beginner/intermediate/advanced)

### 7. Content Fitness Assessment

| Criterion | Assessment | Notes |
|-----------|-----------|-------|
| **Relevant** | 🟢/🟡/🔴 | Does this address current practitioner needs? |
| **Compelling** | 🟢/🟡/🔴 | Does this go beyond standard docs? |
| **Actionable** | 🟢/🟡/🔴 | Can practitioners implement something today? |

### 8. Proposed Structure

- 3-6 major sections with brief descriptions
- 2-5 key artifacts (configs, code, workflows) with purposes
- Suggested talk flow

### 9. 📖 References

**This section is critical.** Compile ALL sources — both provided URLs and discovered ones — into a numbered reference list. Each reference will be cited inline throughout the tech talk and shown as footnotes in slides.

Format each reference as:

```
[^1]: **Title of Page or Article** — [URL](URL) — Brief description of what this source covers
[^2]: **Title** — [URL](URL) — Description
...
```

Categorize references:
- **Official Documentation** (docs.github.com, code.visualstudio.com, learn.microsoft.com)
- **Blog Posts & Announcements** (github.blog, devblogs.microsoft.com, practitioner blogs)
- **Tutorials & Guides** (step-by-step walkthroughs, quickstarts)
- **Community & Discussions** (GitHub Discussions, Stack Overflow, community posts)

Note which references are from provided URLs vs. discovered via web search.

## Output Format

Write everything as a single markdown document. Use clear headings matching the sections above. Include all code examples inline — they will also be extracted into separate files by the workflow.

## Guidelines

- Be thorough — this is the foundation for the entire tech talk
- Include specific, working code/config examples (not pseudo-code)
- Note image URLs precisely so they can be downloaded
- If a URL is inaccessible, note it and work with available sources
- Focus on technical depth, not marketing language
- Use `curl` to fetch and read web pages for additional references
- Aim for 8-15 numbered references total
