# Tech Talk Research Storage

This directory stores research findings and planning documents for tech talks being created through the automated workflow.

## Purpose

When tech talks are created via GitHub Issues (using the 4-phase workflow), research and planning artifacts are stored here before final content generation. This enables:

- ✅ Human review of research before content generation
- ✅ Version control of research and planning
- ✅ Persistence across workflow runs
- ✅ Clear separation of research vs. generated content
- ✅ Audit trail of what was researched vs. what was created

## Directory Structure

```
.research/
  [topic-name]/
    metadata.json          # Issue metadata (topic, URLs, audience, etc.)
    phase1-research.md     # Research findings from source URLs
    phase2-plan.md         # Content outline and planning
    artifacts-inventory.txt # Optional: List of identified artifacts
```

## Workflow Integration

### Phase 1 (Intake)
- Creates `.research/[topic]/` directory
- Saves `metadata.json` with issue details
- Initializes `phase1-research.md` structure

### Phase 2 (Research & Plan)
- Agent researches source URLs
- Populates `phase1-research.md` with findings
- Creates `phase2-plan.md` with content outline
- Human reviews and edits if needed
- Approves by adding `tech-talk:built` label

### Phase 3 (Build)
- Agent reads research and plan files
- Generates final `tech-talks/[topic]/README.md`
- Includes `.research/` in PR for context

## Example: copilot-memory

```
.research/
  copilot-memory/
    metadata.json          # Issue #54 details
    phase1-research.md     # Findings from docs.github.com and code.visualstudio.com
    phase2-plan.md         # Outline with 3-6 major sections, artifacts list
```

## File Formats

### metadata.json

```json
{
  "topic": "copilot-memory",
  "issue_number": 54,
  "primary_question": "How do I give Copilot persistent context?",
  "audience": "Developers",
  "duration": "45 minutes",
  "source_urls": [
    "https://docs.github.com/copilot/...",
    "https://code.visualstudio.com/docs/copilot/..."
  ],
  "phase1_started": "2024-01-15T10:30:00Z",
  "phase1_completed": null,
  "phase2_completed": null
}
```

### phase1-research.md

Structured research findings:
- Key capabilities discovered
- Architecture overview
- Code examples and patterns
- Decision criteria (when to use/not use)
- Visual assets (diagrams, screenshots)
- Official documentation links
- Identified primary artifacts (2-5)
- Proposed major sections (3-6)

### phase2-plan.md

Content outline:
- Question this talk answers
- Content fitness assessment (Relevant/Compelling/Actionable)
- Major sections with 🎬 markers
- Key artifacts with purposes
- Real-world use cases
- Visual assets to include
- Official documentation links

## Manual Editing

Research and plan files can be edited directly:

1. Navigate to `.research/[topic]/` in repository
2. Edit `phase1-research.md` or `phase2-plan.md`
3. Commit changes
4. Add next phase label to continue workflow

## Cleanup

Research directories are typically kept in the repository as historical context, but can be deleted after:
- Tech talk is published
- PR is merged
- Content is stable

To clean up: `git rm -r tech-talks/.research/[topic]/`

## Related Documentation

- Workflow Overview: `.github/workflows/TECH-TALK-WORKFLOW.md`
- Research Storage Design: `.github/workflows/RESEARCH-STORAGE.md`
- Agent Documentation: `docs/agents-tech-talk-generator.agent.md`
