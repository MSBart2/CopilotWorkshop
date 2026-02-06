# Agentic Workflow Prompts

This directory contains externalized prompt templates for the agentic workflow system. Externalizing prompts provides better maintainability, version control, and collaboration.

## Prompt Files

### 1. `triage-instructions.md`
**Used by:** `.github/workflows/1-issue-triage.yml`
**Purpose:** Guides the agent in analyzing new issues for duplicates, classification, priority, and routing.

**Variables:**
- `{{ISSUE_NUMBER}}` - The GitHub issue number
- `{{ISSUE_TITLE}}` - The issue title
- `{{ISSUE_BODY}}` - The issue description
- `{{OPEN_ISSUES}}` - Similar open issues found
- `{{CLOSED_ISSUES}}` - Similar closed issues from last 6 months

### 2. `planning-instructions.md`
**Used by:** `.github/workflows/2-issue-planning.yml`
**Purpose:** Instructs the agent to create detailed execution plans by researching the codebase and learning from historical context.

**Variables:**
- `{{ISSUE_NUMBER}}` - The GitHub issue number
- `{{ISSUE_TITLE}}` - The issue title
- `{{ISSUE_BODY}}` - The issue description
- `{{SIMILAR_ISSUES}}` - Historical similar issues
- `{{RELATED_PRS}}` - Related merged PRs

### 3. `implementation-instructions.md`
**Used by:** `.github/workflows/3-issue-execution.yml`
**Purpose:** Guides the agent through implementing the approved execution plan with best practices.

**Variables:**
- `{{ISSUE_NUMBER}}` - The GitHub issue number
- `{{ISSUE_TITLE}}` - The issue title
- `{{ISSUE_DESCRIPTION}}` - The issue description
- `{{EXECUTION_PLAN}}` - The approved execution plan (appended dynamically)

### 4. `review-instructions.md`
**Used by:** `.github/workflows/4-pr-review.yml`
**Purpose:** Directs the agent to perform comprehensive code review covering security, logic, performance, and test coverage.

**Variables:**
- `{{PR_NUMBER}}` - The pull request number
- `{{FILES_CHANGED}}` - Number of files changed
- `{{LINES_ADDED}}` - Lines of code added
- `{{LINES_DELETED}}` - Lines of code deleted

## Benefits of Externalization

1. **Version Control**
   - Track prompt evolution separately from workflow logic
   - Easy to see what changed and when
   - Can diff prompts across branches

2. **Maintainability**
   - Update prompts without touching YAML
   - Cleaner workflow files focused on orchestration
   - Easier to test prompt variations

3. **Collaboration**
   - Non-technical team members can review/improve prompts
   - Clear documentation of agent behavior
   - Prompts serve as living documentation

4. **Reusability**
   - Share prompts across multiple workflows
   - Create variations for different use cases
   - Build a library of proven patterns

5. **Testing**
   - Test prompts independently
   - Iterate on prompt engineering faster
   - A/B test different approaches

## Usage Pattern

Workflows use `sed` for variable substitution and Copilot CLI's `@file` syntax:

```bash
# Load template and substitute variables
sed -e "s|{{VARIABLE}}|${VALUE}|g" \
    .github/prompts/template.md > instructions.txt

# Run Copilot CLI with external instructions
copilot -p @instructions.txt > output.txt
```

## Modifying Prompts

To modify agent behavior:

1. Edit the appropriate prompt file in this directory
2. Test changes by running the workflow manually
3. Commit changes with clear description of what was improved
4. Monitor workflow results to validate improvements

## Future Enhancements

- **Prompt Versioning**: Add version numbers to track major changes
- **Localization**: Support multiple languages
- **Templating**: More sophisticated template system (e.g., Jinja2)
- **Validation**: Schema validation for prompt structure
- **Metrics**: Track prompt effectiveness over time
