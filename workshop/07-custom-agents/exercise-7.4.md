# Exercise 7.4: Design Security Review Agent

## 🎯 Objective

Create a `@security-review` custom agent with read-only analysis tools and React standards that catches security issues and standards violations without accidentally modifying code during review.

> **Note:** This exercise applies the read-only tool pattern from [Exercise 7.1](exercise-7.1.md) and [Exercise 7.2](exercise-7.2.md) to code review workflows.

**Lead:** Elena ⭐ | **Support:** Sarah 🤝, David 🤝

---

## 📖 The Story

### ❌ The "Before" — Manual Review Setup with Accidental Modifications

**Monday 4:45 PM** — Elena is reviewing Sarah's implementation of the Character Detail Page feature. She needs to check for security issues and React standards compliance.

**Current workflow:**
1. Opens each modified file manually
2. Loads React standards from Module 4's `.instructions.md`
3. Reads through code looking for common issues
4. Types detailed security checklist in chat
5. While reviewing `CharacterDetail.jsx`, suggests a fix
6. Copilot modifies the file immediately
7. Elena: "Wait, I just wanted to note the issue, not fix it yet"
8. Undoes the change, loses review context
9. Reminds Copilot "analysis only, don't modify"
10. Repeats this twice more during review

**Time breakdown:**
- **6 minutes** — Loading standards, opening files, setting up review context
- **2 accidental modifications** — Copilot makes changes during review instead of just identifying issues
- **Inconsistent review coverage** — Sometimes forgets to check for XSS vulnerabilities, other times misses prop validation

**Issues caught vs. missed:**
- **Before review workflow:** Catches ~2 security issues per review (manual, incomplete)
- **Post-deployment bugs:** ~3 security/quality issues slip through to production per sprint

Sarah watches Elena undo another accidental edit: "This is the same problem David had with planning—you need a read-only agent for analysis. What if we created a security review agent that can identify issues but can't modify code?"

---

### ✨ The "After" — Security Review Agent with Analysis-Only Tools

**The transformation:**

Elena creates `.github/agents/security-review.agent.md` with:
- **Read-only analysis tools** — `['search', 'fetch', 'analysis']` — no edit capabilities
- **React standards auto-loaded** — References Module 4's `.github/standards/react-components.instructions.md`
- **Security-focused instructions** — XSS prevention, authentication checks, prop validation, error handling
- **Handoff to implementation** — If issues found, hand back to `@implement` agent with fix suggestions

**New workflow:**
1. After implementation, clicks "Review Changes" handoff from `@implement` agent
2. Switches to `@security-review` agent with pre-filled prompt
3. Agent analyzes all changes, loads React standards automatically
4. Identifies security issues and standards violations
5. Zero accidental modifications (no edit tools available)
6. Comprehensive report with specific line numbers and issue types
7. If issues found, clicks handoff to return to `@implement` with fix instructions

**Results:**
- **Review setup time**: 6→0 minutes (agent auto-loads standards and files)
- **Accidental modifications**: 2→0 (read-only tools prevent edits)
- **Issues caught per review**: 2→5 (comprehensive security checklist)
- **Post-deployment bugs**: 3→0 (no security issues slip through)

---

### 💭 Elena's Realization

> *"This is what systematic quality looks like. Before, I was a human running a mental checklist—sometimes I missed things because I was tired or rushed. Now, the review agent runs a comprehensive security analysis every single time. It can't accidentally fix issues while reviewing because it doesn't have edit tools. My 8 years of 'what to look for' is codified into an agent that never forgets to check for XSS, never skips prop validation, and catches edge cases I used to miss. That's not replacing me—it's scaling my expertise."*

---

## 🔨 Steps

### Step 1: Create Security Review Agent Configuration

**Context:** The `@security-review` agent needs analysis-only tools and comprehensive security/quality guidelines. It should identify issues without modifying code.

**Task:**

1. Create `.github/agents/security-review.agent.md` with this structure:

```markdown
---
description: Security and standards review with comprehensive analysis, no code modifications
name: Security Review
tools: ['search', 'fetch', 'githubRepo', 'analysis']
model: Claude Sonnet 4
handoffs:
  - label: Fix Issues
    agent: implement
    prompt: Fix the security and standards issues identified in the review above.
    send: false
---
# Security Review Mode Instructions

You are in security review mode. Your role is to analyze code changes for security vulnerabilities and standards compliance.

**Critical constraint:** You are in analysis-only mode. Do not make any code modifications, create files, or edit existing code. Your job is to identify issues and provide detailed reports.

## Review Workflow

When reviewing code changes:

1. **Identify changed files** — Use @workspace to find recent modifications
2. **Load standards** — Reference repository standards from `.github/copilot-instructions.md` and `.github/standards/`
3. **Security analysis** — Check for common vulnerabilities
4. **Standards compliance** — Verify code follows established patterns
5. **Generate report** — Provide detailed findings with file paths, line numbers, and severity

## Security Checklist

Analyze code for these common security issues:

### Input Validation
- User input is validated and sanitized
- No direct DOM manipulation with user-provided strings
- Form inputs have proper validation
- API request payloads are validated

### XSS Prevention
- No use of `dangerouslySetInnerHTML` without proper sanitization
- User-generated content is escaped before rendering
- HTML attributes from user input are validated
- No `eval()` or dynamic code execution

### Authentication & Authorization
- Protected routes require authentication
- API calls include proper authentication headers
- Sensitive data is not exposed in client code
- User permissions are checked before operations

### Data Handling
- Sensitive data is not logged
- Secrets are not hardcoded
- PII is handled according to privacy requirements
- API responses don't expose internal details

### Error Handling
- Errors don't expose stack traces to users
- Error messages don't leak sensitive information
- Failed operations are logged appropriately
- User-facing errors are helpful but safe

## React Standards Compliance

Verify React code follows these patterns (reference from repository standards):

### Component Structure
- Functional components with hooks (no class components)
- Clear separation of concerns
- Proper prop validation with PropTypes or TypeScript
- Consistent file naming and organization

### State Management
- Use appropriate hooks (useState, useEffect, useContext)
- No unnecessary re-renders
- State updates are predictable
- Side effects are properly handled

### Performance
- Components are reasonably sized
- Expensive operations use useMemo or useCallback
- Lists have proper keys
- No memory leaks in useEffect

### Accessibility
- Semantic HTML elements
- Proper ARIA attributes where needed
- Keyboard navigation support
- Color contrast meets standards

## Code Quality

Check for general quality issues:

- Code follows consistent formatting
- Functions are reasonably sized and focused
- Variable names are descriptive
- Complex logic is commented
- Error cases are handled
- No commented-out code
- No console.log statements in production code

## Review Report Format

Structure your review report as:

### Summary
Brief overview of changes and overall quality assessment.

### Critical Issues (Severity: High)
Security vulnerabilities or major standards violations that must be fixed before deployment.

### Warnings (Severity: Medium)
Standards violations or quality concerns that should be addressed.

### Suggestions (Severity: Low)
Optional improvements or best practices recommendations.

### Positive Observations
Call out well-implemented patterns or good practices.

For each issue, provide:
- File path and line number
- Issue description
- Why it's a concern
- Suggested fix or approach

## Handoff to Implementation

If issues are found, use the "Fix Issues" handoff to return to implementation mode with specific fix instructions. The handoff preserves your review context so the implementation agent knows exactly what needs to be fixed.
```

2. Save the file

**Validation:** The agent file exists at [.github/agents/security-review.agent.md](../../.github/agents/security-review.agent.md) and contains YAML frontmatter with analysis-only tools plus comprehensive review instructions.

---

### Step 2: Update Implementation Agent to Hand Off to Review

**Context:** Configure the `@implement` agent to offer a handoff button to `@security-review` after making changes.

**Task:**

1. Open [.github/agents/implement.agent.md](../../.github/agents/implement.agent.md)
2. Verify the `handoffs` section includes:

```yaml
handoffs:
  - label: Review Changes
    agent: security-review
    prompt: Review the changes I just made for security issues and standards compliance.
    send: false
```

3. If missing or needs update, modify it
4. Save the file

**Validation:** The implementation agent includes handoff to `security-review` agent with appropriate prompt.

---

### Step 3: Test the Security Review Workflow

**Context:** Verify the review agent catches security issues and standards violations without modifying code.

**Task:**

1. **Create a file with deliberate issues:**
   - Create `fanhub/frontend/src/components/TestComponent.jsx`:

```jsx
import React, { useState } from 'react';

// Component with intentional security and standards issues for testing
function TestComponent(props) {
  const [userInput, setUserInput] = useState('');
  
  // Issue 1: Missing prop validation
  // Issue 2: Dangerous HTML injection risk
  return (
    <div>
      <h2>Test Component</h2>
      <input 
        value={userInput} 
        onChange={(e) => setUserInput(e.target.value)} 
      />
      {/* Issue 3: dangerouslySetInnerHTML without sanitization */}
      <div dangerouslySetInnerHTML={{ __html: userInput }} />
      
      {/* Issue 4: Inline style instead of CSS classes */}
      <button style={{ color: 'red' }} onClick={() => {
        // Issue 5: Hardcoded API key
        const apiKey = 'sk-12345-secret-key';
        console.log('API Key:', apiKey); // Issue 6: Logging sensitive data
        fetch('/api/data', {
          headers: { 'Authorization': apiKey }
        });
      }}>
        Submit
      </button>
    </div>
  );
}

export default TestComponent;
```

2. **Review with security-review agent:**
   - Open Copilot Chat
   - Select `@security-review` agent
   - Type: "Review TestComponent.jsx for security issues and React standards violations"
   - Wait for agent analysis

3. **Verify review findings:**
   - Agent should identify:
     - XSS vulnerability (dangerouslySetInnerHTML with user input)
     - Hardcoded API key
     - Logging sensitive data
     - Missing prop validation
     - Inline styles instead of CSS
     - No input sanitization
   - Report should include file paths and line numbers
   - Report should categorize by severity (Critical, Warning, Suggestion)

4. **Verify read-only constraint:**
   - After review, type: "Fix the XSS vulnerability"
   - Confirm agent either:
     - Refuses to make edits (explains it's in review-only mode), OR
     - Suggests using "Fix Issues" handoff button
   - Agent should NOT modify the file

5. **Test handoff to fix:**
   - Look for "Fix Issues" handoff button
   - Click it to switch to `@implement` agent
   - Pre-filled prompt should reference the review findings
   - Implementation agent should make fixes based on review

**Validation:**
- ✅ Review agent identifies 5+ security/standards issues
- ✅ Report includes specific file paths and line numbers
- ✅ Issues categorized by severity
- ✅ Agent refuses to make code modifications (read-only mode)
- ✅ "Fix Issues" handoff button appears
- ✅ Handoff preserves review context
- ✅ Implementation agent can fix issues based on review

---

### Step 4: Compare Before and After Metrics

**Context:** Measure the improvement from systematic security review versus manual checking.

**Task:**

Document these comparisons:

**Before (Manual Security Review):**
- Review setup time: 6 minutes per review
- Accidental modifications: 2 per review (had to undo and restart)
- Security issues caught: ~2 per review (inconsistent checklist)
- Post-deployment bugs: ~3 security issues slip through per sprint
- Review coverage: Variable (sometimes missed categories)

**After (@security-review Agent):**
- Review setup time: 0 minutes (agent auto-loads standards)
- Accidental modifications: 0 (read-only tools prevent edits)
- Security issues caught: 5 per review (comprehensive checklist)
- Post-deployment bugs: 0 security issues (caught in review)
- Review coverage: 100% consistent (agent never forgets checks)

**Quality improvements:**
- **Systematic coverage**: Agent checks all security categories every time
- **Detailed reports**: File paths, line numbers, severity levels
- **Context preservation**: Handoff maintains review findings for fixes
- **No review fatigue**: Agent reviews are consistently thorough

**Validation:** You can articulate how the review agent:
- Eliminates setup time through auto-loaded standards
- Prevents accidental modifications through tool restrictions
- Ensures comprehensive security analysis every time
- Creates traceable fix workflows via handoffs

---

## ✅ Success Criteria

- [ ] `.github/agents/security-review.agent.md` exists with complete YAML frontmatter
- [ ] Agent specifies read-only tools: `['search', 'fetch', 'githubRepo', 'analysis']`
- [ ] Agent instructions include comprehensive security checklist
- [ ] Agent includes handoff to `@implement` for fixing issues
- [ ] Implementation agent includes handoff to `@security-review`
- [ ] Agent appears in VS Code agent dropdown as "Security Review"
- [ ] Agent successfully identifies security vulnerabilities in test code
- [ ] Agent reports include file paths, line numbers, and severity levels
- [ ] Agent refuses to make code modifications when requested
- [ ] Handoff workflow preserves review context for fixes
- [ ] You can document 6→0 minute setup time and improved issue detection

---

## 🚀 Challenge Extension

**Enhance the security review workflow:**

1. **Custom security skills** — Create `.github/skills/security-analysis/` with organization-specific security requirements, then add to review agent tools

2. **Automated fix suggestions** — Include code snippets in review report showing how to fix each issue (without actually modifying files)

3. **Review metrics** — Add instructions for agent to track and report metrics: number of issues found, severity distribution, most common issue types

4. **Compliance checking** — Extend review checklist with regulatory compliance requirements (GDPR, WCAG, etc.)

5. **Integration testing handoff** — Add handoff to `@test` agent: "Generate integration tests for the security fixes"

---

## 📚 Key Concepts

**Read-only review agents prevent accidental changes:**
- Analysis tools (`search`, `fetch`, `analysis`) allow inspection
- No `edit`, `create`, or `delete` tools means code stays untouched
- Review workflow is truly separate from implementation
- Eliminates "oops, I didn't mean to fix that yet" problems

**Comprehensive checklists ensure consistent quality:**
- Agent instructions encode expert knowledge
- Security categories checked every single review
- No "review fatigue" where human reviewers skip steps
- Standards compliance verified systematically

**Severity categorization guides priorities:**
- Critical issues must be fixed before deployment
- Warnings should be addressed but aren't blockers
- Suggestions are optional improvements
- Helps teams triage fixes efficiently

**Handoffs create fix-review cycles:**
- Review identifies issues → handoff to implement
- Implement fixes issues → handoff to review
- Creates iterative quality improvement loop
- Context preserved through entire cycle

---

## 🔗 Official Docs

- 📖 [Custom agents - Tools configuration](https://code.visualstudio.com/docs/copilot/customization/custom-agents#custom-agent-file-structure) — Understanding tool restrictions for agents
- 📖 [Bug fix teammate tutorial](https://docs.github.com/en/copilot/tutorials/customization-library/custom-agents/bug-fix-teammate) — Example review-focused agent

---

## ➡️ What's Next?

In [Exercise 7.5](exercise-7.5.md), you'll create the `@product-analyzer` agent with web accessibility (`target: github-copilot`) so Rafael can analyze features and query GitHub data during stakeholder meetings without opening VS Code.

> *"Can I use these agents during stakeholder calls when I don't have VS Code open? I need to analyze requirements and query repos in real-time."*  
> — Rafael, discovering web-accessible agents
