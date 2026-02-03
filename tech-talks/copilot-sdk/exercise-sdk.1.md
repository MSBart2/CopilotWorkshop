# Exercise SDK.1: Release Notes Generator

## 🔨 Exercise

### Exercise SDK.1: Release Notes Generator — "From Git History to Customer Value"

**Lead:** Rafael ⭐ | **Support:** Sarah 🤝 | **Time:** 15 min

#### 📖 The Challenge

Rafael manages product releases for FanHub. Every sprint, he manually creates release notes by:
1. Reviewing the last 20-30 git commits
2. Reading through merged PRs and their descriptions
3. Translating technical changes into customer-facing language
4. Organizing features, fixes, and improvements into categories
5. Writing compelling descriptions that highlight customer value

This process takes 2+ hours per release. The quality is inconsistent — sometimes Rafael focuses too much on technical details, sometimes he misses important user-facing changes. The release notes are always late because no one has 2 hours to spare right before deployment.

Sarah reviews the release notes but can't scale this process across multiple repos. Elena needs to ensure test coverage matches what's promised in release notes but struggles to correlate technical changes with customer-facing descriptions.

This exercise uses the **Copilot SDK** to build a Python script that auto-generates customer-facing release notes from git history in under 10 minutes.

#### 🔄 The Transformation

| Before ❌ | After ✨ |
|-----------|----------|
| Rafael manually reviews 30 commits in git log. Reads each PR description. Identifies which changes affect customers. Categorizes into Features/Fixes/Improvements. Writes customer-friendly descriptions for each. Sends draft to Sarah for technical review. Makes revisions. Finally publishes 2.5 hours later. Format and quality vary by Rafael's available time and energy. | Rafael runs `python release-notes-generator.py v1.2.0..v1.3.0`. SDK tool reads git history, analyzes commit messages and PR descriptions, automatically categorizes changes (Features/Fixes/Improvements), generates customer-friendly descriptions emphasizing value. Output is markdown-formatted, ready for GitHub releases. Total time: 10 minutes. Quality is consistent every release. |
| **Time:** 2+ hours per release<br>**Consistency:** Variable quality<br>**Customer focus:** Sometimes too technical<br>**Timeliness:** Always late<br>**Scalability:** Rafael bottleneck, can't scale to multiple repos | **Time:** 10 min per release<br>**Consistency:** Same high quality every time<br>**Customer focus:** Always emphasizes user value<br>**Timeliness:** Ready before deployment<br>**Scalability:** Works across all repos, no bottleneck |

#### 🎯 Your Goal

Build a Python script using the Copilot SDK that auto-generates customer-facing release notes from git commit history, reducing Rafael's manual work from 2+ hours to 10 minutes.

#### 📋 Steps

1. **Install and Set Up Python SDK**
   
   Ensure Copilot CLI is installed (prerequisite for SDK):
   
   ```bash
   # Verify CLI is installed
   copilot --version
   
   # If not installed, install via your preferred method
   # See Module 9 for CLI installation instructions
   ```
   
   Install the Python SDK:
   
   ```bash
   pip install github-copilot-sdk
   ```
   
   Verify installation:
   
   ```python
   python -c "from github_copilot_sdk import CopilotClient; print('SDK installed successfully')"
   ```
   
   **What you've done:** Installed the SDK which will communicate with Copilot CLI in server mode via JSON-RPC.

2. **Create the Release Notes Generator Script**
   
   Navigate to the FanHub project and create the script:
   
   ```bash
   cd /workspaces/CopilotTraining/fanhub
   mkdir -p tools
   ```
   
   Create `tools/release-notes-generator.py`:
   
   ```python
   #!/usr/bin/env python3
   """
   Release Notes Generator using GitHub Copilot SDK
   
   Generates customer-facing release notes from git commit history.
   
   Usage:
       python release-notes-generator.py <git-range>
       
   Example:
       python release-notes-generator.py v1.2.0..v1.3.0
       python release-notes-generator.py HEAD~10..HEAD
   """
   
   import sys
   import subprocess
   from github_copilot_sdk import CopilotClient
   
   def get_git_commits(git_range):
       """Fetch git commits in the specified range."""
       try:
           result = subprocess.run(
               ['git', 'log', git_range, '--pretty=format:%H|%s|%b|%an|%ad', '--date=short'],
               capture_output=True,
               text=True,
               check=True
           )
           return result.stdout
       except subprocess.CalledProcessError as e:
           print(f"Error fetching git commits: {e}")
           sys.exit(1)
   
   def generate_release_notes(git_range):
       """Generate release notes using Copilot SDK."""
       print(f"📝 Generating release notes for {git_range}...")
       print("")
       
       # Get git commit history
       commits = get_git_commits(git_range)
       
       if not commits:
           print("No commits found in the specified range.")
           sys.exit(1)
       
       # Initialize Copilot SDK client
       # SDK will automatically start CLI in server mode
       client = CopilotClient()
       
       # Create prompt for Copilot to generate release notes
       prompt = f"""Analyze the following git commits and generate customer-facing release notes.
   
   Git Commits:
   {commits}
   
   Generate release notes with the following structure:
   
   ## What's New in This Release
   
   ### ✨ New Features
   - List new features with customer value (why does this matter to users?)
   
   ### 🐛 Bug Fixes
   - List fixes with impact description (what problem does this solve?)
   
   ### 🔧 Improvements
   - List improvements with benefit explanation (how does this make things better?)
   
   ### 📚 Documentation
   - List documentation updates if any
   
   Guidelines:
   - Focus on customer/user value, not technical implementation
   - Use clear, non-technical language
   - Each item should explain "what" changed and "why it matters"
   - Skip internal refactorings or changes that don't affect users
   - Group related commits together
   - Use emojis for visual clarity
   - Keep descriptions concise but informative
   
   Format: Markdown
   """
       
       # Use SDK to generate release notes
       print("🤖 Copilot is analyzing commits...")
       response = client.chat(prompt)
       
       print("\n" + "="*60)
       print("GENERATED RELEASE NOTES")
       print("="*60 + "\n")
       print(response)
       print("\n" + "="*60)
       
       # Save to file
       output_file = "RELEASE_NOTES.md"
       with open(output_file, 'w') as f:
           f.write(response)
       
       print(f"\n✅ Release notes saved to {output_file}")
       print(f"💡 Review and edit as needed before publishing")
       
       return response
   
   if __name__ == "__main__":
       if len(sys.argv) != 2:
           print("Usage: python release-notes-generator.py <git-range>")
           print("Example: python release-notes-generator.py v1.2.0..v1.3.0")
           sys.exit(1)
       
       git_range = sys.argv[1]
       generate_release_notes(git_range)
   ```
   
   Make it executable:
   
   ```bash
   chmod +x tools/release-notes-generator.py
   ```
   
   **What you've built:** A Python script that uses the Copilot SDK to transform raw git history into polished, customer-facing release notes.

3. **Test the Release Notes Generator**
   
   Run the script against recent FanHub commits:
   
   ```bash
   cd /workspaces/CopilotTraining/fanhub
   
   # Generate release notes for last 10 commits
   python tools/release-notes-generator.py HEAD~10..HEAD
   ```
   
   **What to observe:**
   - SDK automatically starts Copilot CLI in server mode
   - Copilot analyzes git commit messages and bodies
   - Categorizes changes into Features/Fixes/Improvements
   - Generates customer-friendly descriptions (not just commit messages)
   - Output saved to `RELEASE_NOTES.md`
   
   Review the generated release notes:
   
   ```bash
   cat RELEASE_NOTES.md
   ```
   
   **What Copilot does automatically:**
   - Filters out internal refactorings that don't affect users
   - Groups related commits (e.g., multiple commits for same feature)
   - Translates technical jargon into customer-friendly language
   - Emphasizes customer value and impact
   - Organizes into logical categories
   
   **Rafael's insight:** "The SDK tool generates release notes faster than I can even read the commit history. Quality is surprisingly good — it focuses on customer value better than I did manually. I still review and tweak, but instead of 2 hours of writing, it's 10 minutes of polishing. That's 110 hours saved per year on release notes alone."

4. **Enhance with Multi-Turn Conversation (Optional)**
   
   Improve the script to support iterative refinement:
   
   Add after the first response in `generate_release_notes()`:
   
   ```python
   # Allow iterative refinement
   while True:
       feedback = input("\n💬 Enter feedback to refine (or 'done' to finish): ")
       if feedback.lower() == 'done':
           break
       
       # Continue conversation with Copilot
       response = client.chat(f"Refine the release notes based on this feedback: {feedback}")
       print("\n" + "="*60)
       print("REFINED RELEASE NOTES")
       print("="*60 + "\n")
       print(response)
       
       # Update saved file
       with open(output_file, 'w') as f:
           f.write(response)
   ```
   
   **What this demonstrates:**
   - **Multi-turn conversations:** SDK maintains context across prompts
   - **Iterative refinement:** Get output, provide feedback, improve results
   - **Persistent memory:** Copilot remembers previous exchanges
   
   **Example refinement:**
   ```
   💬 Enter feedback: "Add a 'Breaking Changes' section if any exist"
   💬 Enter feedback: "Make the language more exciting for marketing use"
   💬 Enter feedback: "done"
   ```

#### ✅ Success Criteria

- [ ] Python SDK installed successfully with `pip install github-copilot-sdk`
- [ ] Created `tools/release-notes-generator.py` script
- [ ] Script successfully generates release notes from git history
- [ ] Release notes saved to `RELEASE_NOTES.md` with proper formatting
- [ ] Output includes Features/Fixes/Improvements categories
- [ ] Descriptions focus on customer value, not technical implementation
- [ ] (Optional) Multi-turn conversation for iterative refinement works

> 📂 **Example Scripts**: See completed implementation in [`modules/copilot-sdk/examples/`](./examples/)

#### 📚 Official Docs

- [GitHub Copilot SDK - Python](https://github.com/github/copilot-sdk) — Installation and API reference
- [Python SDK Cookbook](https://github.com/github/awesome-copilot/blob/main/cookbook/copilot-sdk/python/README.md) — Python-specific examples and patterns
- [Getting Started Guide](https://github.com/github/copilot-sdk/blob/main/docs/getting-started.md) — Complete SDK walkthrough

---

## 🔗 What You Built

**In this exercise:**
- `tools/release-notes-generator.py` — SDK-powered script that auto-generates customer-facing release notes from git history
- **Programmatic AI workflow** — Python script controlling Copilot's agent runtime for custom tool automation
- **Time savings** — 2+ hours of manual work reduced to 10 minutes of automated generation

**How it compounds:**

| Previous Modules | This Module | Combined Power |
|------------------|-------------|----------------|
| Repository instructions (Module 1) | SDK can read `.github/copilot-instructions.md` | Release notes respect team patterns and voice |
| Custom agents (Module 7) | SDK supports custom agent configuration | Can use specialized "release notes" agent with domain knowledge |
| CLI automation (Module 9) | SDK embeds CLI's engine programmatically | Same AI power, now in custom Python tools |

**Rafael's outcome:** Release notes generation: 2 hours → 10 minutes. Consistency: variable quality → same high standard every time. Scalability: 1 repo (Rafael bottleneck) → all repos (automated). Annual time saved: 110 hours.

**Sarah's validation:** "Rafael's release notes used to be rushed and technical. Now they're consistently customer-focused because the SDK tool never gets tired or forgets the format. I review in 5 minutes instead of 20. That's not just time savings — it's quality improvement at scale."

---

## ➡️ Next Up

**[Exercise SDK.2: Test Report Analyzer](exercise-sdk.2.md)** — Build a Python tool that analyzes test failures and identifies flaky tests automatically.

> *"Release notes are great, but can the SDK help me stop chasing flaky tests every sprint?"*  
> — Elena, wondering if SDK can solve her test analysis problem

---
