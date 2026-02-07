# Tech Talk Generation Workflow

This directory contains the automated workflow for creating tech talks through GitHub Issues.

## Overview

The tech-talk generation process uses a structured 4-phase workflow triggered by GitHub issue labels:

```
Issue Created → Intake → Plan → Build → Slides
```

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
- Validates source URLs are accessible
- Extracts issue metadata
- Auto-progresses to Phase 2

**Phase 2: Plan** (`tech-talk:planned`)
- Agent researches source material
- Creates content outline based on TEMPLATE.md
- Identifies required artifacts and major sections
- Posts outline as comment for review
- Manually add `tech-talk:built` label to proceed

**Phase 3: Build** (`tech-talk:built`)
- Agent generates complete README.md
- Downloads visual assets to images/ directory
- Creates artifact files (configs, code samples)
- Opens PR with all content
- Manually add `tech-talk:slides` label to proceed

**Phase 4: Slides** (`tech-talk:slides`)
- Agent generates Slidev presentation
- Verifies slides render correctly
- Adds to existing PR
- Manually add `tech-talk:complete` label when satisfied

### 3. Review and Iteration

At each phase:
- Review the agent's output
- Provide feedback via issue comments
- Request revisions if needed
- Progress to next phase when satisfied

## Label Reference

| Label | Purpose | Auto-Applied |
|-------|---------|--------------|
| `tech-talk` | Identifies tech talk issues | ✅ Template |
| `tech-talk:intake` | Phase 1 active | ✅ Template |
| `tech-talk:planned` | Phase 2 active | ✅ Phase 1 |
| `tech-talk:built` | Phase 3 active | Manual |
| `tech-talk:slides` | Phase 4 active | Manual |
| `tech-talk:complete` | All phases done | Manual |

## Manual Overrides

You can manually control the workflow:

- **Skip a phase**: Add the next phase label directly
- **Restart a phase**: Remove current label, re-add it
- **Pause progress**: Don't add the next phase label
- **Run phase manually**: Call the agent directly in comments

## Workflows

1. `tech-talk-phase1-intake.yml` - URL validation and metadata extraction
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
1. Validate URLs (Phase 1) → auto-progress
2. Research and create outline (Phase 2) → wait for approval
3. Generate README.md + artifacts (Phase 3) → wait for approval
4. Create Slidev slides (Phase 4) → mark complete

## Troubleshooting

**URLs not accessible**: Some docs require authentication. Proceed if you have access.

**Agent not responding**: Re-assign with `@copilot-swe-agent[bot]` mention

**Wrong content generated**: Provide feedback in comments, agent will revise

**Phase stuck**: Manually add next phase label to progress

## Related Documentation

- Tech Talk Template: `/tech-talks/TEMPLATE.md`
- Agent Documentation: `/docs/agents-tech-talk-generator.agent.md`
- Slide Generation: `.github/skills/slide-verifier/SKILL.md`
- Copilot Instructions: `.github/copilot-instructions.md`
