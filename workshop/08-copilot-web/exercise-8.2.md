# Exercise 8.2: PR Analysis and Team Unblocking

## 🔨 Exercise

### Exercise 8.2: PR Analysis and Team Unblocking — "Review from Anywhere, Unblock Everyone"

**Lead:** Rafael ⭐ | **Support:** Sarah 🤝 | **Time:** 12 min

#### 📖 The Challenge

Rafael is in a product planning meeting when Marcus pings: *"PR #47 ready for review—adding character favorites feature. Can you approve so I can deploy before EOD?"* Rafael's dilemma: the meeting runs until 6:00 PM, Marcus needs approval by 5:30 PM, and Rafael only has his phone. Traditional options all fail: wait until meeting ends (Marcus misses deployment), leave meeting (unprofessional), or quick approve without review (risk shipping bugs). Sarah has this same problem—as team lead, she's the PR approval bottleneck, and the team waits 2-4 hours whenever she's away from her desk.

Rafael remembers: *"My `@review-enforcer` agent from Module 7 works on the web too. Can I review this PR from my phone, right now, using the same standards we use in VS Code?"*

#### 🔄 The Transformation

| Before ❌ | After ✨ |
|-----------|----------|
| PR #47 needs review. Rafael is in meeting with just his phone. Options: (1) Wait 2 hours → Marcus can't deploy, feature delayed. (2) Quick approve without review → Ships with 2 bugs caught later. (3) Leave meeting → Loses planning context. Result: Team blocked for 2 hours OR quality compromised. | PR #47 needs review. Rafael opens github.com/copilot on phone in conference room. Invokes `@review-enforcer` agent: "Analyze PR #47". Agent checks React standards, API validation, test coverage. Identifies 2 issues, suggests fixes. Rafael adds comment in 3 minutes. Marcus fixes issues, resubmits, deploys on time. Meeting continues uninterrupted. |
| **Team blocked:** 2 hours<br>**PR velocity:** Delayed until Rafael returns<br>**Quality:** Risk of shipping unreviewed code<br>**Context switching:** Disrupts meeting | **Team blocked:** 0 minutes<br>**PR velocity:** Reviewed in 3 minutes<br>**Quality:** Full standards review via agent<br>**Context switching:** None (phone review) |

#### 🎯 Your Goal

Review pull requests from mobile or web using custom agents, providing structured feedback that unblocks the team without compromising quality.

#### 📋 Steps

1. **Open Copilot Web (Desktop or Mobile)**
   
   **Desktop in meeting:** Navigate to [github.com/copilot](https://github.com/copilot) in browser. **Mobile only:** Open phone browser, navigate to github.com/copilot (interface is responsive). Verify chat input is accessible.

2. **Identify a PR Needing Review**
   
   **Option A:** Navigate to your FanHub repository, go to Pull Requests tab, identify an open PR and note its number.
   
   **Option B:** Create mock PR: `git checkout -b feature/character-favorites`, add simple change to `CharacterCard.js` (e.g., favorite button), commit, push, open PR on GitHub.
   
   **Option C:** Use hypothetical scenario: "PR #47 adds favorites feature but might have missing error handling and incomplete tests."

3. **Invoke Your Custom Agent**
   
   **With `@review-enforcer` agent:**
   ```
   @review-enforcer Analyze PR #47 in the @fanhub repository. Check for:
   - React component standards compliance
   - API error handling
   - Test coverage (should be 80%+)
   - Code quality and edge cases
   ```
   
   **Without the agent:**
   ```
   @fanhub Analyze PR #47. Review the code changes for:
   - React best practices (hooks, state management)
   - Error handling in API calls
   - Test coverage completeness
   - Potential edge cases or bugs
   
   Provide specific feedback with line numbers if possible.
   ```
   
   Wait 15-30 seconds for analysis. Verify agent references specific files and lines from the PR.

4. **Review Copilot's Findings**
   
   Read through Copilot's analysis for: ✅ Compliant items, ⚠️ Issues found (missing error handling, incomplete tests), 💡 Suggestions. Evaluate if issues are legitimate by checking PR diff. Ask follow-up questions: "Can you show me exactly where error handling is missing?" or "What test cases are missing to reach 80% coverage?"

5. **Add Review Comment to PR**
   
   Navigate to the PR in GitHub (desktop or mobile). Click **Add a comment** or **Start a review**. Compose structured review using Copilot's findings:
   
   ```markdown
   Thanks for the PR! Copilot review identified:
   
   ⚠️ **Issues to address:**
   - Missing error handling in `handleFavorite()` (line 47)
   - Test coverage is 67%, need tests for edge cases to reach 80%
   
   💡 **Suggestions:**
   - Add loading state during favorite API call
   - Consider debouncing favorite button
   
   ✅ **Looks good:**
   - React hooks usage is correct
   - Component structure follows standards
   
   Please address error handling and tests, then I'll approve!
   ```
   
   Select review type (Comment/Request changes/Approve) and submit. Review should complete in <5 minutes.

6. **Measure Your Impact**
   
   Calculate: **Time spent reviewing** (goal: <5 min), **Team unblocking** (typical wait: 2 hours), **Weekly impact**: 8 PRs × 2 hours = **16 hours of team velocity gained per week**.

#### ✅ Success Criteria

- [ ] Reviewed PR from web/mobile interface in under 5 minutes
- [ ] Provided structured feedback with specific issues and line numbers
- [ ] Unblocked developer without leaving current context (meeting/location)
- [ ] Same review quality as desktop IDE using agent/standards

> 📂 **Compare Your Work**: Review comments should match the quality of Module 7's `@review-enforcer` output

#### 📚 Official Docs

- [Using GitHub Copilot Chat in GitHub.com](https://docs.github.com/en/copilot/github-copilot-chat/copilot-chat-in-github/using-github-copilot-chat-in-githubcom) — Official web features
- [GitHub Copilot on Mobile](https://docs.github.com/en/copilot/github-copilot-chat/copilot-chat-in-github-mobile/using-github-copilot-chat-in-github-mobile) — Mobile-specific features

---

## 🔗 What You Built

**In this exercise:**
- **Mobile PR review workflow** — 3 minutes per review vs 2 hours team blocking, eliminating approval bottlenecks
- **Standards-compliant reviews** — Custom agents apply same checks as IDE reviews

**How it compounds:**

| Previous Modules | This Module | Combined Power |
|------------------|-------------|----------------|
| Module 7: `@review-enforcer` agent checks React standards | Exercise 8.2: Agent works on web/mobile | Same agent, accessible anywhere—no IDE needed |
| Module 5: Agent skills validate APIs and patterns | Exercise 8.2: Skills accessible from browser | Complete review toolchain in pocket |

---

## ➡️ Next Up

**[Exercise 8.3: Effort Estimation and Stakeholder Communication](exercise-8.3.md)** — Use the `effort-estimator` skill to answer stakeholder questions in real-time during meetings.

> *"Exec asks: 'Can we add Watchlist by Q2?' I need a data-driven answer now, not 2 hours later when momentum is lost."*  
> — Rafael, discovering real-time effort estimation

---
