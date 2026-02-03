# Exercise SDK.3: Code Review Assistant Bot

## 🔨 Exercise

### Exercise SDK.3: Code Review Assistant Bot — "Scaling Expertise Through Automation"

**Lead:** Sarah ⭐ | **Support:** David 🤝, Elena 🤝 | **Time:** 15 min

#### 📖 The Challenge

Sarah is the code review bottleneck. With 12 developers on the team, she reviews every PR:
1. Checks coding standards (formatting, naming conventions, structure)
2. Validates architecture patterns (service layer usage, error handling)
3. Looks for common mistakes (null checks, async/await, SQL injection)
4. Reviews test coverage and quality
5. Provides feedback, waits for changes, re-reviews

Each review takes 30 minutes. She can review maybe 8 PRs per day before burning out. The team's PR velocity is limited by Sarah's review capacity. Junior developers wait days for feedback on basic pattern violations that could've been caught automatically.

David wants architectural standards enforced consistently but can't review every PR personally. Elena needs test quality checks but doesn't have time to review every test file.

This exercise uses the **Copilot SDK** to build a code review assistant bot that pre-reviews PRs against team standards, catching 90% of pattern violations automatically before Sarah even looks.

#### 🔄 The Transformation

| Before ❌ | After ✨ |
|-----------|----------|
| Junior dev opens PR. Waits 6 hours for Sarah to get to it. Sarah spends 30 minutes reviewing: finds missing null checks, incorrect async patterns, test file without edge cases, SQL query vulnerable to injection. Leaves 8 comments. Dev fixes issues. Re-submits. Sarah re-reviews (15 min). Finally approves after 2 days total. Sarah exhausted, juniors frustrated by wait time. | Junior dev opens PR. Bot automatically reviews within 2 minutes. Leaves comments: "Add null check at line 45", "Use try-catch for async at line 67", "Test missing edge case: empty array input", "Parameterize SQL query at line 123 (injection risk)". Dev fixes all issues before Sarah reviews. Sarah's review takes 15 min focusing on architecture and business logic, not patterns. PR merged same day. |
| **Sarah's time:** 30 min initial + 15 min re-review = 45 min per PR<br>**PRs per day:** 8 (limited by Sarah)<br>**Junior feedback:** Days to hear about basic mistakes<br>**Quality:** Dependent on Sarah's energy level<br>**Scalability:** Can't grow team without hiring more seniors | **Bot time:** 2 min automated<br>**Sarah's time:** 15 min (architecture only)<br>**PRs per day:** 16+ (Sarah focuses on complex stuff)<br>**Junior feedback:** Immediate on pattern violations<br>**Quality:** Consistent every time<br>**Scalability:** Team can grow, bot scales |

#### 🎯 Your Goal

Build a code review assistant using the Copilot SDK that pre-reviews PRs against team standards, reducing Sarah's review time from 30 minutes to 15 minutes and doubling team PR throughput.

#### 📋 Steps

1. **Create Code Review Bot Script**
   
   Navigate to the FanHub tools directory:
   
   ```bash
   cd /workspaces/CopilotTraining/fanhub/tools
   ```
   
   Create `code-review-bot.py`:
   
   ```python
   #!/usr/bin/env python3
   """
   Code Review Assistant Bot using GitHub Copilot SDK
   
   Pre-reviews pull requests against team standards.
   
   Usage:
       python code-review-bot.py <file-path> [<file-path> ...]
       python code-review-bot.py --pr <pr-number>  # For GitHub integration
       
   Example:
       python code-review-bot.py backend/src/user-service.js
       python code-review-bot.py backend/src/**/*.js
   """
   
   import sys
   import os
   import glob
   from github_copilot_sdk import CopilotClient
   
   # Team code review standards (loaded from .github/copilot-instructions.md in real implementation)
   REVIEW_STANDARDS = """
   FanHub Code Review Standards:
   
   1. **Null Safety**
      - Always check for null/undefined before accessing properties
      - Use optional chaining (?.) where appropriate
      
   2. **Async/Await**
      - Use try-catch for all async operations
      - Always await promises
      - No unhandled promise rejections
      
   3. **Error Handling**
      - All service methods must have error handling
      - Use custom error classes (UserError, ValidationError, etc.)
      - Log errors with context
      
   4. **Testing**
      - Every public method must have tests
      - Include edge cases: null, empty arrays, invalid input
      - Use descriptive test names
      
   5. **Security**
      - Parameterize all SQL queries (no string concatenation)
      - Validate all user input
      - Sanitize data before rendering in UI
      
   6. **Code Style**
      - Use consistent naming (camelCase for variables, PascalCase for classes)
      - Functions should do one thing
      - Max function length: 50 lines
   """
   
   def read_file(file_path):
       """Read file content."""
       try:
           with open(file_path, 'r') as f:
               return f.read()
       except Exception as e:
           print(f"Error reading {file_path}: {e}")
           return None
   
   def review_code(file_path, content):
       """Review code file using Copilot SDK."""
       print(f"\n🔍 Reviewing: {file_path}")
       
       # Initialize Copilot SDK client
       client = CopilotClient()
       
       prompt = f"""You are a senior code reviewer for the FanHub team. Review this code against our standards.
   
   Team Standards:
   {REVIEW_STANDARDS}
   
   File: {file_path}
   ```
   {content}
   ```
   
   Provide a code review in this format:
   
   ## Code Review: {os.path.basename(file_path)}
   
   ### ✅ Strengths
   - List what the code does well
   
   ### ⚠️ Issues Found
   
   For each issue:
   #### Line X: [Issue Type]
   - **Problem**: [What's wrong]
   - **Why it matters**: [Impact/risk]
   - **Fix**: [Specific code suggestion]
   - **Priority**: [High | Medium | Low]
   
   ### 💡 Suggestions
   - Optional improvements (not required, but beneficial)
   
   ### 📊 Summary
   - Overall code quality: [Excellent | Good | Needs Work | Major Issues]
   - Blocking issues: [Count]
   - Recommended action: [Approve | Request Changes | Major Refactor Needed]
   
   Focus on:
   - Real issues that affect functionality, security, or maintainability
   - Specific, actionable feedback with code examples
   - Teaching moments for junior developers
   
   Do NOT comment on:
   - Minor style preferences already handled by linters
   - Personal opinions without technical justification
   - Nitpicking that doesn't improve code quality
   """
       
       # Get review from SDK
       review = client.chat(prompt)
       return review
   
   def review_files(file_patterns):
       """Review multiple files."""
       files_to_review = []
       
       # Expand glob patterns
       for pattern in file_patterns:
           if '*' in pattern:
               files_to_review.extend(glob.glob(pattern, recursive=True))
           else:
               files_to_review.append(pattern)
       
       if not files_to_review:
           print("No files found to review")
           return
       
       print(f"📋 Found {len(files_to_review)} file(s) to review\n")
       print("="*60)
       
       all_reviews = []
       
       for file_path in files_to_review:
           if not os.path.exists(file_path):
               print(f"⚠️  File not found: {file_path}")
               continue
           
           content = read_file(file_path)
           if content is None:
               continue
           
           review = review_code(file_path, content)
           all_reviews.append((file_path, review))
           
           print("\n" + "="*60)
           print(review)
           print("="*60)
       
       # Save consolidated review
       output_file = "code-review-report.md"
       with open(output_file, 'w') as f:
           f.write("# Code Review Report\n\n")
           f.write(f"**Files Reviewed**: {len(all_reviews)}\n\n")
           for file_path, review in all_reviews:
               f.write(f"---\n\n{review}\n\n")
       
       print(f"\n✅ Review report saved to {output_file}")
       print(f"📊 Reviewed {len(all_reviews)} file(s)")
   
   if __name__ == "__main__":
       if len(sys.argv) < 2:
           print("Usage: python code-review-bot.py <file-pattern> [<file-pattern> ...]")
           print("Example: python code-review-bot.py backend/src/user-service.js")
           print("Example: python code-review-bot.py 'backend/src/**/*.js'")
           sys.exit(1)
       
       file_patterns = sys.argv[1:]
       review_files(file_patterns)
   ```
   
   Make it executable:
   
   ```bash
   chmod +x code-review-bot.py
   ```

2. **Test the Code Review Bot**
   
   Review a FanHub backend file:
   
   ```bash
   cd /workspaces/CopilotTraining/fanhub
   python tools/code-review-bot.py backend/src/index.js
   ```
   
   **What to observe:**
   - Bot analyzes code against team standards
   - Identifies specific line numbers with issues
   - Provides code examples for fixes
   - Prioritizes issues (High/Medium/Low)
   - Gives overall recommendation (Approve/Request Changes)
   
   Review the report:
   
   ```bash
   cat code-review-report.md
   ```
   
   **What the bot catches automatically:**
   - Missing null checks
   - Unhandled async errors
   - Security vulnerabilities (SQL injection, XSS)
   - Missing test edge cases
   - Code style violations
   
   **Sarah's insight:** "The bot catches 90% of what I used to spend time on. Now I focus on architecture: 'Does this service design make sense? Will this scale? Is the abstraction right?' That's where my 15 years of experience actually matter. Pattern checking is waste of senior time — let the bot do it."

3. **Integrate with Team Standards (Using Custom Agent)**
   
   Enhance the bot to use the team's actual review standards from `.github/copilot-instructions.md`:
   
   Update the script to read standards from repository:
   
   ```python
   def load_team_standards():
       """Load review standards from .github/copilot-instructions.md"""
       standards_file = "../.github/copilot-instructions.md"
       if os.path.exists(standards_file):
           with open(standards_file, 'r') as f:
               return f.read()
       return REVIEW_STANDARDS  # Fallback to embedded standards
   
   # In review_code(), replace REVIEW_STANDARDS with:
   team_standards = load_team_standards()
   ```
   
   **What this demonstrates:**
   - SDK can use repository-specific context
   - Review standards evolve with the team
   - Same bot works across multiple repos with different standards

4. **Advanced: GitHub Integration (Optional)**
   
   For teams using GitHub, integrate with PR webhooks:
   
   ```python
   # Add to code-review-bot.py
   
   def review_pr(pr_number):
       """Review a GitHub PR using GitHub MCP server."""
       # This requires GitHub MCP server configured (Module 6)
       # Uses github-mcp-server to fetch PR files
       
       client = CopilotClient()
       
       # Use GitHub MCP to get PR diff
       pr_files = client.chat(f"Get changed files from PR #{pr_number}")
       
       # Review each file
       # Post comments back to PR
       
       print(f"Reviewed PR #{pr_number}")
   ```
   
   **What this enables:**
   - Bot automatically reviews every PR
   - Comments directly on PR with line-specific feedback
   - Developers get immediate feedback
   - Sarah only reviews after bot clears pattern violations

#### ✅ Success Criteria

- [ ] Created `code-review-bot.py` with SDK integration
- [ ] Bot successfully reviews code files against team standards
- [ ] Output includes: specific line numbers, issue descriptions, fix suggestions, priorities
- [ ] Review report saved to markdown file
- [ ] Bot identifies real issues (security, bugs, missing tests) not just style
- [ ] (Optional) Integrated with `.github/copilot-instructions.md` for team standards
- [ ] (Optional) GitHub PR integration for automated PR reviews

> 📂 **Example Scripts**: See completed implementation in [`modules/copilot-sdk/examples/`](./examples/)

#### 📚 Official Docs

- [GitHub Copilot SDK](https://github.com/github/copilot-sdk) — Custom agents and tool configuration
- [MCP Servers Documentation](https://github.com/github/copilot-sdk#mcp-server-integration) — GitHub integration patterns
- [SDK Cookbook - Bots](https://github.com/github/awesome-copilot/blob/main/cookbook/copilot-sdk/python/README.md) — Bot implementation examples

---

## 🔗 What You Built

**In this exercise:**
- `tools/code-review-bot.py` — Automated code review assistant that enforces team standards
- **Scalable quality** — Bot reviews are consistent, Sarah reviews are strategic
- **Doubled throughput** — Team went from 8 PRs/day to 16+ PRs/day
- **Junior dev acceleration** — Immediate feedback on pattern violations, learn faster

**How it compounds:**

| Previous Modules | This Module | Combined Power |
|------------------|-------------|----------------|
| Repository instructions (Module 1) | Bot reads `.github/copilot-instructions.md` | Reviews enforce exact team standards automatically |
| Custom agents (Module 7) | Bot is itself a custom agent | Can be configured per repo, per team, per tech stack |
| MCP servers (Module 6) | Bot can query GitHub API for PR context | Full GitHub integration: fetch PRs, post comments, update status |

**Sarah's outcome:** Review time: 30 min → 15 min per PR. PRs per day: 8 → 16 (team throughput doubled). Focus: pattern checking → architecture and business logic. Burnout risk: eliminated — sustainable pace with better leverage.

**David's validation:** "The bot enforces my architectural patterns more consistently than I ever could. Every PR gets checked for service layer violations, improper error handling, missing validation. My standards scale across the team without me reviewing every line of code. That's 20 years of experience, automated."

**Elena's transformation:** "The bot catches missing test cases automatically. Developers now write complete tests before I even look. My test review time went from 20 min to 5 min per PR. I focus on test strategy, not finding missing edge cases. Quality improved, and I'm not the bottleneck anymore."

---

## 🎉 Module Complete

You've built 3 practical tools using the GitHub Copilot SDK:

1. **Release Notes Generator** — 2 hours → 10 minutes
2. **Test Report Analyzer** — 45 min → 5 minutes  
3. **Code Review Assistant** — 30 min → 15 minutes, doubled throughput

**Total impact:**
- **Time saved:** 150+ hours annually per tool
- **Quality improvement:** Consistent, never tired, always follows standards
- **Team scaling:** Removed human bottlenecks without sacrificing quality

**The SDK Principle:** Don't just use AI — embed it in tools tailored to your exact workflows. The best AI tool is the one you build for your team's specific needs.

---
