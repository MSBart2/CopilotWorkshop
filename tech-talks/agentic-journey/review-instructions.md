# Code Review Instructions

Perform a comprehensive code review of this pull request.

## PR Details

- **PR Number:** {{PR_NUMBER}}
- **Files Changed:** {{FILES_CHANGED}}
- **Lines Added:** {{LINES_ADDED}}
- **Lines Deleted:** {{LINES_DELETED}}

## Review Focus Areas

### 1. Security Analysis
Check for security vulnerabilities including:
- SQL injection risks (unsafe query construction)
- Cross-site scripting (XSS) opportunities
- Authentication/authorization bypasses
- Hardcoded secrets or credentials
- Unsafe deserialization
- Path traversal vulnerabilities
- Insecure dependencies

### 2. Logic & Correctness
Verify code logic including:
- Proper error handling
- Edge case coverage
- Race condition risks
- Resource leaks (memory, file handles, connections)
- Infinite loop possibilities
- Off-by-one errors
- Null/undefined reference risks

### 3. Performance Concerns
Identify performance issues:
- Algorithm complexity (O(n²) or worse)
- Inefficient database queries (N+1 queries, missing indexes)
- Unnecessary API calls
- Large data structure inefficiencies
- Blocking operations in async code
- Memory-intensive operations

### 4. Test Coverage
Assess testing:
- Are new features tested?
- Are edge cases covered?
- Are error paths tested?
- Is test quality appropriate?
- Are there any flaky tests?

### 5. Code Quality
Evaluate maintainability:
- Code readability and clarity
- Proper naming conventions
- Appropriate comments for complex logic
- Consistent code style
- DRY principle adherence
- Proper abstraction levels

## Required Output Format

```markdown
## Security Review
[✅ | ⚠️ | ❌] Overall Assessment

**Findings:**
- [Critical/High/Medium/Low]: [Description of issue]
  - Location: `file:line`
  - Recommendation: [How to fix]

## Logic Review
[✅ | ⚠️ | ❌] Overall Assessment

**Findings:**
- [Critical/High/Medium/Low]: [Description of issue]
  - Location: `file:line`
  - Recommendation: [How to fix]

## Performance Review
[✅ | ⚠️ | ❌] Overall Assessment

**Findings:**
- [Critical/High/Medium/Low]: [Description of issue]
  - Location: `file:line`
  - Recommendation: [How to fix]

## Test Coverage Review
[✅ | ⚠️ | ❌] Overall Assessment

**Coverage:** [Description]
**Missing Tests:** [Areas that need tests]

## Code Quality Review
[✅ | ⚠️ | ❌] Overall Assessment

**Observations:**
- [Positive findings]
- [Areas for improvement]

## Summary
**Recommendation:** [APPROVE | REQUEST CHANGES | COMMENT]
**Critical Issues:** [Number]
**Blocking Issues:** [List any issues that must be fixed before merge]
```

## Severity Levels

- **Critical**: Security vulnerabilities, data corruption risks, system crashes
- **High**: Bugs that significantly impact functionality, major performance issues
- **Medium**: Minor bugs, code quality issues, missing tests
- **Low**: Style issues, minor optimizations, suggestions

## Guidelines

- Be specific - cite exact files and line numbers when possible
- Provide actionable recommendations for each issue
- Distinguish between blocking issues and suggestions
- Balance thoroughness with practicality
- Recognize good patterns and practices when present
