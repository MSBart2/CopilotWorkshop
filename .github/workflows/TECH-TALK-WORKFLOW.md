# Tech Talk Generation Workflow

This directory contains the automated workflow for creating tech talks through GitHub Issues.

## Overview

The tech-talk generation process uses a structured 4-phase workflow triggered by GitHub issue labels:

```
Issue Created → Intake → Research & Plan → Build → Slides
```

## Key Features

- ✅ **File-based research storage** — All research saved to `.research/` directory
- ✅ **Human review checkpoints** — Review research and plan before generation
- ✅ **Handles large URLs** — Processes content >20K chars via chunking
- ✅ **Uses web_search** — Reliable alternative to web_fetch in sandbox
- ✅ **Version controlled** — All research and plans tracked in Git

## Using the Workflow

### 1. Create a Tech Talk Request

Use the issue template: `.github/ISSUE_TEMPLATE/tech-talk-request.yml`

**Required Information:**
- Tech talk topic (short name for directory)
- Source URLs (documentation/blogs to research)
- Primary question the talk answers
- Target audience
- Expected duration
- Content fitness confirmation

### 2. Automated Phase Progression

**Phase 1: Intake** (`tech-talk:intake`)
- Creates `.research/[topic]/` directory
- Saves metadata.json with issue details
- Validates source URLs are accessible
- Initializes research document structure
- Auto-progresses to Phase 2

**Phase 2: Research & Plan** (`tech-talk:planned`)
- Agent researches source URLs using **web_search** (not web_fetch)
- Handles large content (>20K chars) via section-by-section processing
- Populates `phase1-research.md` with findings
- Creates `phase2-plan.md` with content outline
- **Human review checkpoint** — Review research and plan files
- Manually add `tech-talk:built` label to proceed

**Phase 3: Build** (`tech-talk:built`)
- Reads research and plan files from `.research/` directory
- Generates complete README.md following TEMPLATE.md
- Downloads visual assets to images/ directory
- Creates artifact files (configs, code samples)
- Opens PR with all content including `.research/` for reference
- **Human review checkpoint** — Review generated content in PR
- Manually add `tech-talk:slides` label to proceed

**Phase 4: Slides** (`tech-talk:slides`)
- Agent generates Slidev presentation
- Verifies slides render correctly
- Adds to existing PR
- Manually add `tech-talk:complete` label when satisfied

### 3. Review and Iteration

At each phase:
- Review the agent's output in repository files
- Edit research/plan files directly if needed
- Provide feedback via issue comments
- Request revisions if needed
- Progress to next phase when satisfied

## Research Storage Location

All research and planning artifacts stored in:

```
tech-talks/
  .research/
    [topic-name]/
      metadata.json          # Issue metadata (topic, URLs, audience, etc.)
      phase1-research.md     # Research findings from source URLs
      phase2-plan.md         # Content outline and planning
      artifacts-inventory.txt # List of identified artifacts (optional)
```

**Why file-based storage?**
- ✅ Human reviewable and editable
- ✅ Version controlled via Git
- ✅ Persists across workflow runs
- ✅ Accessible to all agents
- ✅ Can be included in PRs for context

**See**: `.github/workflows/RESEARCH-STORAGE.md` for detailed design documentation

## Handling Large URLs

For source URLs with content >20K characters:

1. **Agent uses web_search** (not web_fetch - more reliable)
2. **Content processed in sections:**
   - Break into logical sections
   - Extract key technical details from each
   - Synthesize into cohesive research document
3. **Focus on technical details:**
   - Capabilities and architecture
   - Code examples and patterns
   - Decision criteria and tradeoffs
   - Visual assets (diagrams, screenshots)
   - Official documentation links

## Label Reference

| Label | Purpose | Auto-Applied |
|-------|---------|--------------|
| `tech-talk` | Identifies tech talk issues | ✅ Template |
| `tech-talk:intake` | Phase 1 active | ✅ Template |
| `tech-talk:planned` | Phase 2 active | ✅ Phase 1 |
| `tech-talk:built` | Phase 3 active | ⚠️ Manual (after reviewing research) |
| `tech-talk:slides` | Phase 4 active | ⚠️ Manual (after reviewing README) |
| `tech-talk:complete` | All phases done | ⚠️ Manual |

**Manual review points:**
- After Phase 2: Review `.research/[topic]/` files before adding `tech-talk:built`
- After Phase 3: Review PR with README.md before adding `tech-talk:slides`

## Manual Overrides

You can manually control the workflow:

- **Skip a phase**: Add the next phase label directly
- **Restart a phase**: Remove current label, re-add it
- **Pause progress**: Don't add the next phase label (review research first)
- **Edit research**: Directly edit files in `.research/` directory
- **Run phase manually**: Call the agent directly in comments

## Workflows

1. `tech-talk-phase1-intake.yml` - URL validation, research directory setup
2. `tech-talk-phase2-plan.yml` - Research and outline creation
3. `tech-talk-phase3-build.yml` - Full content generation
4. `tech-talk-phase4-slides.yml` - Slidev presentation generation

## Example Issue

```yaml
Title: [Tech Talk] GitHub Copilot Memory

Tech Talk Topic: copilot-memory
Source URLs:
  https://docs.github.com/copilot/using-github-copilot/...
  https://code.visualstudio.com/docs/copilot/...

Primary Question: How do I give Copilot persistent context about my codebase?
Target Audience: Developers
Duration: 45 minutes
```

The agent will:
1. **Phase 1**: Create `.research/copilot-memory/` directory → auto-progress
2. **Phase 2**: Research URLs, populate research.md and plan.md → wait for approval
3. **Phase 3**: Generate README.md from approved plan → wait for PR review
4. **Phase 4**: Create Slidev slides → mark complete

## Troubleshooting

**URLs not accessible**: Some docs require authentication. Proceed if you have access.

**Agent using web_fetch**: Instruct to use **web_search** instead (more reliable in sandbox).

**Content too large**: Agent automatically chunks large content and processes in sections.

**Research files missing**: Phase 1 may not have run. Check `.research/` directory exists.

**Agent not responding**: Re-assign with `@copilot-swe-agent[bot]` mention

**Wrong content generated**: Edit research/plan files directly, then re-run phase

**Phase stuck**: Manually add next phase label to progress

**Want to review before proceeding**: Don't add next phase label until review complete

## Related Documentation

- Research Storage Design: `.github/workflows/RESEARCH-STORAGE.md`
- Tech Talk Template: `/tech-talks/TEMPLATE.md`
- Agent Documentation: `/docs/agents-tech-talk-generator.agent.md`
- Slide Generation: `.github/skills/slide-verifier/SKILL.md`
- Copilot Instructions: `.github/copilot-instructions.md`
