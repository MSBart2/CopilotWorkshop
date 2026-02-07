# Tech Talk Research Storage Strategy

## Problem

When creating tech talks through the automated workflow, we need to:
1. Store research findings from Phase 1 for human review
2. Allow Phase 2 to read those findings to inform planning
3. Enable human intervention before automated content generation
4. Handle large URLs (>20K characters) effectively

## Solution: File-Based Research Storage

### Location

Research findings are stored in: `tech-talks/.research/[topic-name]/`

```
tech-talks/
  .research/
    [topic-name]/
      phase1-research.md      # Raw research findings from URLs
      phase2-plan.md          # Content outline (generated after human approval)
      metadata.json           # Issue metadata (topic, URLs, audience, etc.)
      artifacts-inventory.txt # List of identified artifacts
```

### Why This Approach

**✅ Advantages:**
- **Human reviewable** — Files can be edited directly before proceeding
- **Version controlled** — Git tracks all changes to research and plans
- **Persistent** — Survives across workflow runs and agent sessions
- **Accessible** — Agents can read/write, humans can review/edit
- **Organized** — Keeps research separate from final content
- **Auditable** — Clear trail of what was researched vs. what was generated

**❌ Issue body approach (rejected):**
- Length limits (65,536 chars max)
- Hard to edit structured content in comments
- Clutters issue with wall of text
- Not version controlled
- Can't be easily referenced by other systems

### Workflow Integration

1. **Phase 1 (Intake):**
   - Creates `.research/[topic]/` directory
   - Saves `metadata.json` with issue fields
   - Researches URLs (handling large content via chunking)
   - Writes findings to `phase1-research.md`
   - Adds GitHub issue comment with summary + link to research file
   - Updates label to `tech-talk:planned`

2. **Human Review Checkpoint:**
   - Review `phase1-research.md` in repository
   - Edit/refine findings if needed
   - Approve by adding `tech-talk:plan-approved` label
   - Or provide feedback via issue comment

3. **Phase 2 (Plan):**
   - Reads `phase1-research.md` from repository
   - Creates content outline following TEMPLATE.md
   - Writes plan to `phase2-plan.md`
   - Adds GitHub issue comment with summary + link to plan file
   - Waits for `tech-talk:built` label (human approval)

4. **Human Review Checkpoint:**
   - Review `phase2-plan.md` in repository
   - Edit outline if needed
   - Approve by adding `tech-talk:built` label

5. **Phase 3 (Build):**
   - Reads both research and plan files
   - Generates final README.md
   - Creates PR with tech talk content
   - Includes `.research/` directory in PR for reference

## Handling Large URLs (>20K chars)

### Strategy: Chunked Reading with Summarization

When fetching content from URLs:

1. **Use web_search instead of web_fetch** (more reliable in sandbox)
2. **For very long content:**
   - Break document into logical sections
   - Process each section separately
   - Store key findings from each section
   - Synthesize into cohesive research document

3. **Structured extraction:**
   ```markdown
   # Research Findings: [URL]

   ## Key Capabilities
   - [Extracted bullet points]

   ## Architecture
   - [System design notes]

   ## Code Examples
   - [Relevant snippets]

   ## Official Documentation Links
   - [Referenced docs]

   ## Images/Diagrams
   - [Image URLs with descriptions]
   ```

4. **Length management:**
   - Focus on **technical details** relevant to tech talk
   - Skip marketing/promotional content
   - Extract **decision criteria** and **tradeoffs**
   - Capture **concrete examples** and **metrics**
   - Store only what's needed for content generation

### Implementation in Phase 1

```javascript
// Use web_search for reliability
const searchResults = await web_search(url);

// If content is very large, process in sections
const sections = identifyDocumentSections(content);
const findings = [];

for (const section of sections) {
  const keyInfo = extractTechnicalDetails(section);
  findings.push(keyInfo);
}

// Synthesize into research document
const research = {
  url: sourceUrl,
  capabilities: extractCapabilities(findings),
  architecture: extractArchitecture(findings),
  examples: extractExamples(findings),
  decisions: extractDecisionCriteria(findings),
  images: extractImageUrls(findings)
};

// Write to file system
fs.writeFileSync(
  `tech-talks/.research/${topic}/phase1-research.md`,
  formatResearchDocument(research)
);
```

## File Formats

### metadata.json

```json
{
  "topic": "copilot-memory",
  "issue_number": 54,
  "primary_question": "How do I give Copilot persistent context about my codebase?",
  "audience": "Developers",
  "duration": "45 minutes",
  "source_urls": [
    "https://docs.github.com/copilot/...",
    "https://code.visualstudio.com/docs/copilot/..."
  ],
  "phase1_completed": "2024-01-15T10:30:00Z",
  "phase2_completed": null
}
```

### phase1-research.md

```markdown
# Research Findings for [Topic]

## Source: [URL 1]

### Key Capabilities
- Feature A: Description
- Feature B: Description

### Architecture Overview
[Technical details about system design]

### Code Examples
\`\`\`javascript
[Example code snippets]
\`\`\`

### Decision Criteria
- Use when: [Scenario A]
- Avoid when: [Scenario B]

### Visual Assets
- ![Description](url-to-diagram.png)
- ![Screenshot](url-to-screenshot.png)

### Official Documentation
- [Link 1](url)
- [Link 2](url)

---

## Source: [URL 2]

[Repeat structure for each URL]

---

## Synthesis

### Primary Artifacts Identified
1. Config file: .copilot-memory.json
2. Shell script: setup-memory.sh
3. Example code: example-usage.js

### Major Technical Sections (3-6)
1. Core Architecture
2. Integration Patterns
3. Advanced Configuration

### Related Patterns
- copilot-workspace-context (prerequisite)
- copilot-custom-instructions (complementary)
```

### phase2-plan.md

```markdown
# Content Plan for [Topic]

## The Question This Talk Answers

"[Single clear question]"

## Content Fitness Assessment

| Criterion | Assessment | Notes |
|-----------|-----------|-------|
| Relevant | 🟢 High | [Why this matters now] |
| Compelling | 🟢 High | [Unique angle] |
| Actionable | 🟢 High | [Concrete takeaway] |

## Major Sections (3-6 with 🎬 markers)

1. **Core Architecture** — How memory system works internally
2. **Integration Patterns** — Connecting memory to workflows
3. **Advanced Techniques** — Power user configurations

## Key Artifacts (2-5)

1. `.copilot-memory.json` — Configuration file for memory settings
2. `setup-memory.sh` — Shell script to initialize memory
3. `example-usage.js` — Code showing memory API usage

## Real-World Use Cases (3-5)

1. **Enterprise Codebase Navigation**
   - Challenge: Too many repos to remember patterns
   - Solution: Memory stores architecture decisions
   - Outcome: 40% faster onboarding

[... more use cases ...]

## Visual Assets to Include

- architecture-diagram.png — System overview
- workflow-diagram.svg — Integration flow
- cli-screenshot.png — Memory commands in action

## Official Documentation Links

1. https://docs.github.com/copilot/memory (primary)
2. https://code.visualstudio.com/docs/copilot/memory-api (API reference)
```

## Migration Path

### Immediate Changes (Phase 1 of rollout)

1. Update `tech-talk-phase1-intake.yml`:
   - Create `.research/[topic]/` directory
   - Save metadata.json
   - Research URLs with web_search (not web_fetch)
   - Write findings to phase1-research.md
   - Comment on issue with summary + file link

2. Update `tech-talk-phase2-plan.yml`:
   - Read phase1-research.md
   - Generate outline
   - Write to phase2-plan.md
   - Comment on issue with summary + file link

3. Update `tech-talk-phase3-build.yml`:
   - Read both research and plan files
   - Generate README.md
   - Include .research/ in PR

### Future Enhancements

- Add research file viewer in GitHub UI
- Create research diff tool to compare findings
- Build research search to find similar past research
- Add research quality metrics

## Best Practices

1. **Always use web_search** — More reliable than web_fetch in sandbox
2. **Chunk large content** — Process sections separately, synthesize findings
3. **Extract selectively** — Focus on technical details, skip marketing
4. **Structure clearly** — Use consistent markdown headings
5. **Link to sources** — Include original URLs for verification
6. **Version control** — Commit research files with clear messages
7. **Human review** — Pause for approval before generation phases
