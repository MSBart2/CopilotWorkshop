# Requesting Targeted Copilot Reviews

## General Review
Request a comprehensive review:
```
@github-copilot please review this PR
```

## Focused Security Review
```
@github-copilot please review for security vulnerabilities, focusing on the authentication changes
```

## Specific File Review
```
@github-copilot review the error handling in src/api/payment-processor.js
```

## Performance-Focused Review
```
@github-copilot analyze this PR for performance issues, particularly database query efficiency
```

## Follow-up Questions
After receiving review feedback, ask for clarification:
```
@github-copilot why is the suggested refactoring more performant?
@github-copilot can you show an example of the recommended pattern?
```

## Review Categories

Copilot organizes findings into these categories:

- 🔴 **Critical/Security**: Vulnerabilities, security flaws, data exposure risks
- 🟠 **High/Performance**: Performance bottlenecks, scalability issues
- 🟡 **Medium/Quality**: Code maintainability, readability, best practices
- 🔵 **Low/Style**: Formatting, naming conventions, minor improvements
- ℹ️ **Info**: Suggestions, optimizations, educational notes

## Best Practices

1. **Be specific with requests**: Instead of "review this PR", try "review authentication logic for security issues"
2. **Ask follow-up questions**: Engage conversationally to understand recommendations
3. **Reference existing patterns**: Ask Copilot to check consistency with existing code
4. **Request explanations**: Ask "why" to learn from the feedback
5. **Iterate**: After making changes, request a focused re-review

## Example Workflow

1. Create PR → Automatic review posted within 1-2 minutes
2. Review findings → Address critical/high severity issues
3. Ask clarifications → `@github-copilot why is this a security risk?`
4. Make changes → Push commits
5. Automatic re-review → Copilot analyzes new changes
6. Merge when clear → All critical issues resolved
