# Exercise SDK.2: Test Report Analyzer

## 🔨 Exercise

### Exercise SDK.2: Test Report Analyzer — "From Grep to Intelligence"

**Lead:** Elena ⭐ | **Support:** Marcus 🤝 | **Time:** 15 min

#### 📖 The Challenge

Elena maintains test quality for FanHub. When builds fail, she manually investigates:
1. Opens the test report XML/JSON file (hundreds of lines)
2. Searches for "FAILED" or "ERROR" keywords
3. Reads stack traces to understand what went wrong
4. Cross-references with previous build failures to detect patterns
5. Determines if tests are truly broken or just flaky
6. Manually categorizes: "new failure" vs "recurring flaky test" vs "infrastructure issue"

This takes 45 minutes per failed build. Worse, she has no automated way to track flaky tests across builds — she relies on memory and spreadsheets. By the time she identifies a test as flaky, it's failed 4-5 times, blocking multiple PRs and wasting team time.

Marcus sees infrastructure-related test failures but can't distinguish them from real bugs. Sarah wants data on which tests are unreliable but doesn't have time to manually track patterns.

This exercise uses the **Copilot SDK** to build a Python tool that analyzes test reports, automatically identifies flaky tests, and suggests root causes in under 5 minutes.

#### 🔄 The Transformation

| Before ❌ | After ✨ |
|-----------|----------|
| Build fails at 3 PM. Elena opens test report JSON (487 lines). Searches for "FAILED". Finds 3 failures. Reads each stack trace. Checks notes from last week — "Wait, didn't this test fail before?" Opens old build logs in CI dashboard. Compares errors. After 45 minutes, concludes: 2 are flaky (retry passes), 1 is a real bug. Manually logs flaky tests in spreadsheet. Creates Jira ticket for real bug. | Build fails at 3 PM. Elena runs `python test-analyzer.py test-report.json`. SDK tool reads report, analyzes all failures, cross-references with previous builds stored in local history, automatically classifies: "2 flaky tests (database connection timeout), 1 real bug (null pointer in user profile)". Suggests fixes for each. Total time: 5 minutes. Flaky tests flagged immediately with confidence score. |
| **Time:** 45 min per failed build<br>**Pattern detection:** Manual memory/spreadsheets<br>**Flaky test identification:** After 4-5 failures<br>**Root cause analysis:** Guesswork from stack traces<br>**Team impact:** Multiple PRs blocked by same flaky test | **Time:** 5 min per failed build<br>**Pattern detection:** Automatic cross-build analysis<br>**Flaky test identification:** First or second failure<br>**Root cause analysis:** 85% accuracy with specific suggestions<br>**Team impact:** Flaky tests fixed before they block PRs |

#### 🎯 Your Goal

Build a Python tool using the Copilot SDK that analyzes test reports, identifies flaky tests, and suggests fixes automatically, reducing Elena's analysis time from 45 minutes to 5 minutes.

#### 📋 Steps

1. **Create the Test Analyzer Script**
   
   Navigate to the FanHub tools directory:
   
   ```bash
   cd /workspaces/CopilotTraining/fanhub/tools
   ```
   
   Create `test-analyzer.py`:
   
   ```python
   #!/usr/bin/env python3
   """
   Test Report Analyzer using GitHub Copilot SDK
   
   Analyzes test failures, identifies flaky tests, and suggests fixes.
   
   Usage:
       python test-analyzer.py <test-report-file>
       
   Example:
       python test-analyzer.py test-results.json
       python test-analyzer.py test-output.xml
   """
   
   import sys
   import json
   import os
   from github_copilot_sdk import CopilotClient
   from datetime import datetime
   
   # Store test history for pattern detection
   HISTORY_FILE = ".test-analysis-history.json"
   
   def load_test_history():
       """Load previous test analysis results for pattern detection."""
       if os.path.exists(HISTORY_FILE):
           with open(HISTORY_FILE, 'r') as f:
               return json.load(f)
       return {"analyses": []}
   
   def save_test_history(history):
       """Save test analysis results for future pattern detection."""
       with open(HISTORY_FILE, 'w') as f:
           json.dump(history, f, indent=2)
   
   def read_test_report(file_path):
       """Read test report file (supports JSON and XML)."""
       if not os.path.exists(file_path):
           print(f"Error: Test report file not found: {file_path}")
           sys.exit(1)
       
       with open(file_path, 'r') as f:
           return f.read()
   
   def analyze_test_report(test_report_path):
       """Analyze test report using Copilot SDK."""
       print(f"🔍 Analyzing test report: {test_report_path}...")
       print("")
       
       # Read test report
       test_report_content = read_test_report(test_report_path)
       
       # Load previous test history for pattern detection
       history = load_test_history()
       
       # Initialize Copilot SDK client
       client = CopilotClient()
       
       # Create comprehensive analysis prompt
       prompt = f"""Analyze this test report and provide a detailed analysis.
   
   Test Report:
   {test_report_content}
   
   Previous Test Failures (for pattern detection):
   {json.dumps(history.get('analyses', [])[-10:], indent=2) if history.get('analyses') else 'No previous history'}
   
   Provide analysis in the following format:
   
   ## Test Report Summary
   - Total tests: X
   - Passed: X
   - Failed: X
   - Skipped: X
   
   ## Failed Tests Analysis
   
   For each failed test:
   
   ### Test: [test name]
   - **Classification**: [Flaky Test | Real Bug | Infrastructure Issue]
   - **Confidence**: [High | Medium | Low]
   - **Root Cause**: [Explanation of why the test failed]
   - **Evidence**: [Specific error message or stack trace excerpt]
   - **Pattern**: [If test has failed before, describe the pattern]
   - **Suggested Fix**: [Specific recommendation to fix this failure]
   - **Priority**: [High | Medium | Low] based on impact
   
   ## Flaky Tests Detected
   List all tests classified as flaky with:
   - Test name
   - Flakiness pattern (timing issues, race conditions, external dependencies, etc.)
   - How many times it's failed in history
   - Recommended remediation
   
   ## Summary Recommendations
   1. Immediate actions (real bugs to fix)
   2. Flaky tests to stabilize
   3. Infrastructure issues to address
   
   Use clear, actionable language. Focus on helping the developer fix issues quickly.
   """
       
       # Use SDK to analyze test report
       print("🤖 Copilot is analyzing test failures...")
       analysis = client.chat(prompt)
       
       print("\n" + "="*60)
       print("TEST ANALYSIS REPORT")
       print("="*60 + "\n")
       print(analysis)
       print("\n" + "="*60)
       
       # Save analysis to history for future pattern detection
       history['analyses'].append({
           'timestamp': datetime.now().isoformat(),
           'file': test_report_path,
           'analysis_summary': analysis[:500]  # Store first 500 chars for pattern detection
       })
       save_test_history(history)
       
       # Save full analysis to file
       output_file = f"test-analysis-{datetime.now().strftime('%Y%m%d-%H%M%S')}.md"
       with open(output_file, 'w') as f:
           f.write(f"# Test Analysis Report\n")
           f.write(f"**Date**: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}\n")
           f.write(f"**Report File**: {test_report_path}\n\n")
           f.write(analysis)
       
       print(f"\n✅ Analysis saved to {output_file}")
       print(f"📊 Test history updated ({len(history['analyses'])} total analyses)")
       
       return analysis
   
   def interactive_mode(client, test_report_path):
       """Interactive mode for follow-up questions about test failures."""
       print("\n💬 Interactive Mode: Ask follow-up questions (or 'exit' to quit)")
       print("Examples:")
       print("  - 'How do I fix the database timeout issue?'")
       print("  - 'Show me which tests are most flaky'")
       print("  - 'What infrastructure changes could prevent these failures?'")
       print("")
       
       while True:
           question = input("❓ Your question: ")
           if question.lower() in ['exit', 'quit', 'done']:
               break
           
           # Continue conversation with context
           response = client.chat(question)
           print(f"\n🤖 {response}\n")
   
   if __name__ == "__main__":
       if len(sys.argv) != 2:
           print("Usage: python test-analyzer.py <test-report-file>")
           print("Example: python test-analyzer.py test-results.json")
           sys.exit(1)
       
       test_report_path = sys.argv[1]
       
       # Analyze test report
       analyze_test_report(test_report_path)
       
       # Offer interactive mode
       print("\n" + "="*60)
       offer_interactive = input("Start interactive mode for follow-up questions? (y/n): ")
       if offer_interactive.lower() == 'y':
           client = CopilotClient()
           # Re-establish context
           test_report = read_test_report(test_report_path)
           client.chat(f"I have this test report: {test_report[:1000]}")  # Provide context
           interactive_mode(client, test_report_path)
   ```
   
   Make it executable:
   
   ```bash
   chmod +x test-analyzer.py
   ```
   
   **What you've built:** An intelligent test analyzer that learns from history, detects patterns, and provides actionable recommendations.

2. **Create a Sample Test Report**
   
   For testing purposes, create a realistic test failure report:
   
   ```bash
   cd /workspaces/CopilotTraining/fanhub
   
   # Run tests and capture output (this might fail, which is fine for testing)
   npm test --prefix backend > test-report.txt 2>&1 || true
   
   # Or create a sample JSON report for testing
   cat > sample-test-report.json << 'EOF'
   {
     "testResults": [
       {
         "name": "User authentication tests",
         "status": "passed",
         "duration": 234
       },
       {
         "name": "Database connection test",
         "status": "failed",
         "duration": 5002,
         "error": "Error: Connection timeout after 5000ms\n    at Database.connect (db.js:45)\n    at Test.run (test-runner.js:12)"
       },
       {
         "name": "API endpoint /users/:id",
         "status": "passed",
         "duration": 89
       },
       {
         "name": "User profile update",
         "status": "failed",
         "duration": 12,
         "error": "TypeError: Cannot read property 'id' of undefined\n    at updateProfile (user-service.js:78)\n    at Test.it (profile.test.js:45)"
       }
     ],
     "summary": {
       "total": 4,
       "passed": 2,
       "failed": 2,
       "skipped": 0
     }
   }
   EOF
   ```

3. **Run the Test Analyzer**
   
   Analyze the test report:
   
   ```bash
   python tools/test-analyzer.py sample-test-report.json
   ```
   
   **What to observe:**
   - SDK analyzes each test failure
   - Classifies failures (Flaky vs Real Bug vs Infrastructure)
   - Provides confidence scores
   - Suggests specific fixes for each issue
   - Stores analysis in history for pattern detection
   - Saves detailed report to timestamped markdown file
   
   Run it again on the same report:
   
   ```bash
   python tools/test-analyzer.py sample-test-report.json
   ```
   
   **What pattern detection shows:**
   - SDK recognizes this test has been analyzed before
   - Notes: "This database timeout has occurred X times"
   - Higher confidence in flakiness classification
   - More specific remediation based on repeated failures
   
   **Elena's insight:** "The first run identified the database timeout as potentially flaky. The second run confirmed it with higher confidence because it saw the pattern. By the third failure, it knew exactly what to suggest: increase timeout configuration and add retry logic. That pattern detection would've taken me weeks of manual tracking. This takes 5 minutes total."

4. **Test Interactive Follow-Up (Persistent Memory)**
   
   After analysis, start interactive mode:
   
   ```bash
   python tools/test-analyzer.py sample-test-report.json
   # Answer 'y' when prompted for interactive mode
   ```
   
   **Try these follow-up questions:**
   ```
   ❓ How do I fix the database timeout issue?
   ❓ Which test is more critical to fix first?
   ❓ Can you write a script to detect this timeout before tests run?
   ```
   
   **What this demonstrates:**
   - **Persistent memory:** SDK remembers the test report context
   - **Multi-turn conversation:** Each question builds on previous context
   - **Practical assistance:** Get implementation help, not just analysis
   
   **Example exchange:**
   ```
   ❓ How do I fix the database timeout issue?
   🤖 Add a connection pool with retry logic in db.js:
        const pool = new Pool({
          connectionTimeoutMillis: 10000,
          max: 20,
          retryAttempts: 3
        })
   
   ❓ Can you generate a monitoring alert for this?
   🤖 Yes, add this to your monitoring config...
   ```

#### ✅ Success Criteria

- [ ] Created `test-analyzer.py` script with SDK integration
- [ ] Script successfully analyzes test report and classifies failures
- [ ] Output includes: classification, root cause, suggested fixes, priority
- [ ] Pattern detection works across multiple analyses (history file created)
- [ ] Analysis report saved to timestamped markdown file
- [ ] Interactive mode allows follow-up questions about test failures
- [ ] SDK correctly identifies flaky tests vs real bugs

> 📂 **Example Scripts**: See completed implementation in [`modules/copilot-sdk/examples/`](./examples/)

#### 📚 Official Docs

- [Python SDK Cookbook](https://github.com/github/awesome-copilot/blob/main/cookbook/copilot-sdk/python/README.md) — Multi-turn conversation patterns
- [SDK Getting Started](https://github.com/github/copilot-sdk/blob/main/docs/getting-started.md) — Persistent memory and session management
- [GitHub Copilot SDK](https://github.com/github/copilot-sdk) — API reference for advanced features

---

## 🔗 What You Built

**In this exercise:**
- `tools/test-analyzer.py` — Intelligent test failure analyzer with pattern detection
- **Historical pattern tracking** — Learns from previous failures to identify flaky tests
- **Interactive diagnosis** — Multi-turn conversations for deeper investigation
- **Time savings** — 45 minutes of manual analysis reduced to 5 minutes automated

**How it compounds:**

| Previous Modules | This Module | Combined Power |
|------------------|-------------|----------------|
| Agent skills (Module 5) | SDK can use custom test analysis skills | Domain expertise in flaky test patterns applied automatically |
| MCP servers (Module 6) | SDK can query test databases for historical data | Pattern detection across all builds, not just local history |
| CLI automation (Module 9) | SDK embeds same engine as CLI | Same intelligent analysis, now in custom Python workflow |

**Elena's outcome:** Test failure analysis: 45 min → 5 min. Flaky test identification: after 4-5 failures → after 1-2 failures. Root cause accuracy: guesswork → 85% with specific fix suggestions. Build failures per week: 3-4 × 40 min saved = 2.6 hours back weekly = 135 hours annually.

**Marcus's transformation:** "I used to guess which test failures were infrastructure issues. Now the analyzer tells me: 'Database connection timeout (infrastructure), occurs when DB restarts.' I fix the real problems instead of debugging false positives. That's 10+ hours per month back."

---

## ➡️ Next Up

**[Exercise SDK.3: Code Review Assistant Bot](exercise-sdk.3.md)** — Build a bot that pre-reviews PRs against team standards before human review.

> *"Test analysis is great, but can the SDK help me scale code reviews across the entire team?"*  
> — Sarah, looking for ways to remove herself as the review bottleneck

---
