# Research Instructions for Tech Talk

## ⚠️ CRITICAL INSTRUCTION — READ FIRST

You MUST produce the actual research document as your output. Do NOT describe the task, summarize the prompt, or ask clarifying questions. Your entire response will be saved directly as `research.md`. Start your output with the `# Research:` heading below and write the full content.

If you cannot access a URL, note it as inaccessible and continue with whatever content you can gather. Produce the best research document possible with available information.

**Your output MUST be at least 200 lines of substantive content.**

---

## Issue Context

| Field | Value |
|-------|-------|
| Issue | #{{ISSUE_NUMBER}} |
| Topic | {{TOPIC}} |
| Question | {{PRIMARY_QUESTION}} |
| Audience | {{AUDIENCE}} |
| Duration | {{DURATION}} |
| Section | {{SECTION}} |
| Guidance | {{GUIDANCE}} |

## Source URLs

{{SOURCE_URLS}}

---

## BEGIN YOUR OUTPUT NOW

Start with this exact heading and produce all sections below with real content:

```
# Research: {{TOPIC}}

> Issue #{{ISSUE_NUMBER}} | {{AUDIENCE}} | {{DURATION}}
> Primary Question: {{PRIMARY_QUESTION}}
```

### Required Sections — Write ALL of These

#### 1. Executive Summary (5-10 sentences)
Write a comprehensive summary answering: What is this about? Why does it matter? What are the key takeaways? This must be substantive enough that someone reading only this section understands the topic.

#### 2. Source URL Analysis
For EACH provided source URL:
- Use `curl` to fetch the page content
- Write a 3-5 sentence summary of what the page covers
- Extract key facts, numbers, capabilities, or announcements
- List any code examples, configurations, or commands found on the page
- Note any images or diagrams on the page (URL + description)

#### 3. Key Capabilities (3-6)
For each capability discovered in the sources, write:
- **Name**: One-line description
- **How it works**: 2-3 sentences on the technical mechanism
- **Example**: A code snippet, config, or CLI command that demonstrates it
- **Impact**: What this enables for practitioners

#### 4. Architecture & Technical Details
- Components and how they interact (2-3 paragraphs)
- Data flow and integration points
- Technical prerequisites or dependencies
- System diagram description (for image generation later)

#### 5. Code Examples & Patterns
Extract or create **concrete, working examples** from the source material. For each:
- Full code/config (not pseudo-code)
- What it demonstrates
- Prerequisites
- Expected outcome

Include at minimum:
- 1 configuration example (YAML, JSON, or settings)
- 1 workflow or usage example
- 1 advanced/real-world example

#### 6. Visual Assets Inventory
For each image/diagram found in the source URLs:
- Source URL of the image
- Description of what it shows
- Suggested filename (e.g., `architecture-overview.png`)
- Which section of the tech talk it belongs to

#### 7. Decision Criteria
- **When to use** (3-5 specific scenarios with rationale)
- **When NOT to use** (2-3 anti-patterns with alternatives)
- **Comparison with alternatives** (if applicable)

#### 8. Real-World Use Cases (3-5)
For each:
- Concrete scenario description (2-3 sentences)
- Measurable outcome or benefit
- Complexity level (beginner / intermediate / advanced)
- Which capabilities are used

#### 9. Content Fitness Assessment
| Criterion | Assessment | Notes |
|-----------|-----------|-------|
| **Relevant** | 🟢/🟡/🔴 | [Specific justification — does this address current practitioner needs?] |
| **Compelling** | 🟢/🟡/🔴 | [Specific justification — does this go beyond standard docs?] |
| **Actionable** | 🟢/🟡/🔴 | [Specific justification — can practitioners implement something today?] |

#### 10. Proposed Talk Structure
- 3-6 major sections with 2-3 sentence descriptions each
- 2-5 key artifacts (configs, code, workflows) with purposes
- Suggested talk flow (opening hook → sections → conclusion)

#### 11. Web Search — Additional References
Beyond the provided URLs, use `curl` to search for and fetch:
- Official documentation pages related to this topic
- Blog posts from GitHub, Microsoft, or recognized practitioners
- Tutorials and guides with practical examples
- Release announcements or changelogs
- Community discussions with real-world usage patterns

For each discovered source, include the URL and a 2-3 sentence summary.

#### 12. 📖 References (Numbered)
Compile ALL sources into a numbered reference list. **This section is critical** — these references will be cited inline throughout the final tech talk and shown as footnotes in slides.

Format:
```
**Official Documentation**
[^1]: **Title** — [URL](URL) — Brief description (PROVIDED)
[^2]: **Title** — [URL](URL) — Brief description (DISCOVERED)

**Blog Posts & Announcements**
[^3]: **Title** — [URL](URL) — Brief description

**Tutorials & Guides**
[^4]: **Title** — [URL](URL) — Brief description

**Community & Discussions**
[^5]: **Title** — [URL](URL) — Brief description
```

Mark each as (PROVIDED) or (DISCOVERED) to track origin. Aim for **8-15 total references**.

---

## Output Rules

- Write everything as a single, continuous markdown document
- Use the exact section headings listed above
- Include all code examples inline (they will also be extracted into separate files)
- Note image URLs precisely so they can be downloaded
- Focus on technical depth, not marketing language
- If a URL is inaccessible, note it and work with available sources
- **Minimum 200 lines of substantive content**
- Do NOT include meta-commentary about the task — produce only the research content
