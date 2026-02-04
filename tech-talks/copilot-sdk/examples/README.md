# Copilot SDK Examples

This directory contains practical examples demonstrating how to use the GitHub Copilot SDK to build custom AI-powered tools.

## Prerequisites

- GitHub Copilot subscription
- Copilot CLI installed and authenticated
- Python 3.8+
- GitHub Copilot SDK: `pip install github-copilot-sdk`

## Examples

### 1. Release Notes Generator (`release-notes-generator.py`)

Automatically generates customer-facing release notes from git commit history.

**Features:**
- Analyzes commits between git tags
- Categorizes changes (Features, Fixes, Breaking Changes, Security)
- Focuses on customer value, not technical details
- Outputs markdown suitable for GitHub releases

**Usage:**
```bash
# Generate release notes from v1.2.0 to v1.3.0
python release-notes-generator.py --from v1.2.0 --to v1.3.0

# Generate from v1.2.0 to current HEAD
python release-notes-generator.py --from v1.2.0

# Save to file
python release-notes-generator.py --from v1.2.0 --to v1.3.0 --output RELEASE_NOTES.md
```

**Key SDK concepts demonstrated:**
- Basic SDK client initialization
- Prompt engineering for structured output
- Integration with git commands
- Formatting AI output for specific use cases

---

### 2. Test Report Analyzer (`test-analyzer.py`)

Analyzes test failure reports to identify flaky tests, suggest root causes, and provide actionable recommendations.

**Features:**
- Supports multiple test report formats (JUnit XML, Jest JSON, pytest)
- Identifies flaky tests through pattern analysis
- Maintains historical failure data for trend detection
- Provides root cause analysis with confidence scores
- Prioritizes failures by severity

**Usage:**
```bash
# Analyze a test report
python test-analyzer.py test-report.json

# Use specific format
python test-analyzer.py --format junit test-results.xml

# Enable historical analysis
python test-analyzer.py --history-dir ./test-history test-report.json

# Save analysis to file
python test-analyzer.py test-report.json --output analysis.md
```

**Key SDK concepts demonstrated:**
- Working with structured data (JSON, XML)
- Maintaining state across SDK invocations
- Historical data analysis
- Confidence scoring and prioritization

---

### 3. Code Review Assistant (`code-review-bot.py`)

Pre-reviews code against team standards before human review, catching common issues automatically.

**Features:**
- Reviews code against customizable team standards
- Identifies security issues, bugs, and style violations
- Can review local files or GitHub PRs
- Posts review comments directly to GitHub
- Categorizes issues by severity (Critical, Important, Suggestions)

**Usage:**
```bash
# Review a local file
python code-review-bot.py --file path/to/code.py

# Review a GitHub PR
python code-review-bot.py --pr-number 123 --repo owner/repo

# Use custom standards
python code-review-bot.py --standards ./team-standards.md --pr-number 123 --repo owner/repo

# Post review as GitHub comment
python code-review-bot.py --pr-number 123 --repo owner/repo --post-comment
```

**Key SDK concepts demonstrated:**
- Integration with external tools (GitHub CLI)
- Custom prompt engineering with team-specific context
- Structured output formatting
- API integration (posting to GitHub)

---

## Customization

All examples can be customized for your specific needs:

**Release Notes Generator:**
- Modify the prompt to match your changelog format
- Add custom categorization logic
- Integrate with GitHub releases API
- Support multiple output formats

**Test Analyzer:**
- Add support for more test frameworks
- Customize failure classification logic
- Integrate with CI/CD systems
- Send alerts to Slack/Teams

**Code Review Bot:**
- Customize coding standards for your team
- Add language-specific rules
- Integrate with code quality tools (ESLint, Pylint)
- Create automated PR workflows

## Best Practices

When building SDK tools based on these examples:

1. **Error Handling:** Add robust error handling for network issues, API limits, and malformed input
2. **Rate Limiting:** Respect GitHub Copilot request quotas, especially in automation
3. **Caching:** Cache SDK responses when appropriate to reduce API calls
4. **Validation:** Validate AI-generated output before using in production systems
5. **Security:** Never commit API keys or secrets; use environment variables
6. **Testing:** Test with various inputs and edge cases
7. **Logging:** Add logging for debugging and monitoring

## Contributing

These examples are starting points. Extend them for your use cases and consider contributing improvements back to the community.

## Resources

- [GitHub Copilot SDK Documentation](https://github.com/github/copilot-sdk)
- [SDK Blog Announcement](https://github.blog/news-insights/company-news/build-an-agent-into-any-app-with-the-github-copilot-sdk/)
- [Python SDK Cookbook](https://github.com/github/awesome-copilot/blob/main/cookbook/copilot-sdk/python/README.md)
