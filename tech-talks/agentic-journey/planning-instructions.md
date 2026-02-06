# Execution Planning Instructions

Generate a detailed execution plan for this GitHub issue.

## Issue Details

- **Issue Number:** {{ISSUE_NUMBER}}
- **Title:** {{ISSUE_TITLE}}

**Description:**
{{ISSUE_BODY}}

## Historical Context

### Similar Past Issues
{{SIMILAR_ISSUES}}

### Related PRs
{{RELATED_PRS}}

## Your Task

1. **Analyze Requirements**: Understand the requirements and acceptance criteria from the issue description
2. **Research Codebase**: Identify relevant files, patterns, and existing implementations
3. **Learn from History**: Apply lessons learned from similar past issues and their PRs
4. **Identify Files**: List all files that need to be modified or created
5. **Check Dependencies**: Identify any packages that need to be added or updated
6. **Create Implementation Steps**: Provide detailed step-by-step instructions
7. **Estimate Effort**: Base your estimate on historical data from similar work
8. **Assess Risks**: Identify potential risks and provide rollback strategy

## Required Output Format

```markdown
## Historical Context
[Summarize key learnings from similar past issues/PRs - what worked, what didn't, common pitfalls]

## Affected Files
1. `path/to/file1.ext` - [Description of changes needed]
2. `path/to/file2.ext` - [Description of changes needed]
[Continue for all files]

## Dependencies
- Package name: version (rationale)
- [List any new dependencies or updates needed]

## Implementation Steps
1. [First step with specific details]
2. [Second step with specific details]
[Continue with numbered steps - be thorough and specific]

## Estimated Effort
**X-Y hours** based on:
- Similar Issue #XXX took Z hours
- Historical average for this component: W hours
[Reference specific historical data]

## Risks & Rollback
**Identified Risks:**
- Risk 1: [Description]
- Risk 2: [Description]

**Rollback Strategy:**
- [Step-by-step rollback procedure if needed]
```

## Guidelines

- Be specific and actionable - avoid vague descriptions
- Reference actual files in the repository
- Learn from patterns in similar past work
- Provide realistic effort estimates based on historical data
- Consider edge cases and potential complications
- Ensure the plan is comprehensive enough for implementation
