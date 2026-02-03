# Exercise 8.3: Effort Estimation and Stakeholder Communication

## 🔨 Exercise

### Exercise 8.3: Effort Estimation and Stakeholder Communication — "Real-Time Answers with Data-Driven Confidence"

**Lead:** Rafael ⭐ | **Support:** David 🤝 | **Time:** 15 min

#### 📖 The Challenge

Rafael is on a video call with the executive sponsor who asks: *"Can we add a 'Watchlist' feature where users track their favorite shows? I'd like this for Q2 in 3 weeks. Is that feasible?"* Rafael's traditional response: "Let me research and get back to you" (loses momentum). After the call, he spends 90 minutes analyzing similar features, estimating components, calculating complexity—then emails 2 hours later with an estimate. By then, the exec has moved on to other priorities. Opportunity lost. David faces the same problem when asked about architectural decisions—requires deep code analysis that can't happen during meetings.

Rafael realizes: *"I have the `effort-estimator` skill from Module 5. Can I use it from the web, right now in this meeting, to give a data-driven answer before the exec hangs up?"*

#### 🔄 The Transformation

| Before ❌ | After ✨ |
|-----------|----------|
| Exec asks: "Can we add Watchlist by Q2?" Rafael: "Let me research and get back to you." After call: 90 minutes analyzing codebase, reviewing patterns, calculating complexity. Sends email 2 hours later: "Yes, but requires 1.5 sprints." Exec already prioritized other features. Opportunity lost. | Exec asks: "Can we add Watchlist by Q2?" Rafael opens github.com/copilot on second screen: "Estimate effort for Watchlist feature, check frontend/backend/DB requirements, use effort-estimator skill." Gets answer in 3 minutes. Rafael (still in call): "Yes—8 hours frontend, 5 hours backend, 2 hours DB schema. Total: ~2 sprint days. We can fit it in Q2 if we defer admin panel." Decision made in real-time. |
| **Analysis time:** 90 min<br>**Response delay:** 2 hours<br>**Decision momentum:** Lost<br>**Accuracy:** Estimated by memory | **Analysis time:** 3 min<br>**Response delay:** 0 (real-time)<br>**Decision momentum:** Maintained<br>**Accuracy:** Data-driven from codebase |

#### 🎯 Your Goal

Generate credible, data-driven effort estimates in under 5 minutes using Copilot web and the `effort-estimator` skill, enabling real-time stakeholder decisions.

#### 📋 Steps

1. **Prepare for Stakeholder Scenario**
   
   **Scenario:** Executive asks: *"Can we add a 'Trending Shows' feature displaying top 10 most-viewed shows this week? Need effort estimate."* Feature might require: frontend trending list component, backend API endpoint, database view tracking, analytics logic for "trending" calculation. Your goal: credible estimate in <5 minutes.

2. **Open Copilot Web with Repository Context**
   
   Navigate to [github.com/copilot](https://github.com/copilot), start new conversation, verify `@fanhub` repository reference works. Optionally reference `effort-estimator` skill if completed Module 5.

3. **Request Effort Estimate**
   
   **With `effort-estimator` skill:**
   ```
   @fanhub Use the effort-estimator skill to analyze:
   
   "Trending Shows feature: Display top 10 most-viewed shows this week 
   on homepage. Shows ranked by view count with recency weighting 
   (last 7 days count more)."
   
   Break down effort for:
   - Frontend components and UI
   - Backend API endpoints
   - Database schema changes or queries
   - Testing requirements
   
   Provide time estimates in hours and identify risks/dependencies.
   ```
   
   **Without skill:** Same prompt but omit skill reference, ask Copilot to review FanHub codebase directly.
   
   Wait 15-30 seconds for analysis to complete.

4. **Review and Refine the Estimate**
   
   Read initial estimate for: time breakdown by layer, risk factors, dependencies, assumptions. Ask follow-ups: "What if we reuse CharacterList component instead of building new TrendingList? Time saved?" or "Does estimate include code review and deployment?" Request stakeholder summary:
   
   ```
   Summarize in executive format:
   - One-line feasibility (Yes/No/Depends)
   - Total effort in sprint days (6 hours/day)
   - Major risks or blockers
   - Recommendation (build now, defer, or descope)
   ```

5. **Formulate Stakeholder Response**
   
   Adapt this template using Copilot's output:
   
   ```markdown
   **Feature:** Trending Shows (top 10 most-viewed)
   **Feasibility:** Yes, achievable for Q2
   **Effort:** Frontend 6h, Backend 5h, DB 4h, Testing 3h = 18h (~3 sprint days)
   **Dependencies:** Requires view tracking (not present), needs caching
   **Recommendation:** Build Sprint 12. Alternative: manual curation → 1 sprint day
   **Trade-off:** If Trending Ships, defer Admin Panel to Sprint 13
   ```
   
   Make response deliverable verbally in meeting or via Slack.

6. **Practice Real-Time Scenario**
   
   Set 5-minute timer. New question: *"Can we add user reviews and ratings for shows? Feasible for Q2?"* Generate estimate including frontend (rating display, comment form), backend (reviews API, moderation), database (reviews table). Stop at timer. Evaluate: got credible answer in 5 min? Could deliver confidently in meeting?

#### ✅ Success Criteria

- [ ] Generated effort estimate in under 5 minutes with data-driven breakdowns
- [ ] Estimate includes time by layer, risks, dependencies
- [ ] Stakeholder response is clear, non-technical, decision-ready
- [ ] Practiced real-time scenario and answered within time limit

> 📂 **Compare Your Work**: Estimates should include concrete hours, dependencies, and alternatives

#### 📚 Official Docs

- [Using GitHub Copilot Chat in GitHub.com](https://docs.github.com/en/copilot/github-copilot-chat/copilot-chat-in-github/using-github-copilot-chat-in-githubcom) — Web chat features
- [Prompt engineering for GitHub Copilot](https://docs.github.com/en/copilot/using-github-copilot/prompt-engineering-for-github-copilot) — Writing effective analysis prompts

---

## 🔗 What You Built

**In this exercise:**
- **Real-time effort estimation** — 3 minutes per estimate vs 90 minutes manual analysis, 4.3 hours saved weekly
- **Stakeholder-ready summaries** — Data-driven answers maintain decision momentum

**How it compounds:**

| Previous Modules | This Module | Combined Power |
|------------------|-------------|----------------|
| Module 5: `effort-estimator` skill defines estimation methodology | Exercise 8.3: Skill accessible from web during meetings | Estimates generated on-demand, anywhere |
| Module 1: Repository instructions establish patterns | Exercise 8.3: Patterns inform estimate accuracy | AI references actual codebase standards |

---

## ➡️ Next Up

**[Exercise 8.4: Documentation Generation](exercise-8.4.md)** — Generate user-facing documentation from code context without opening VS Code.

> *"Character detail feature just shipped. I need user docs, release notes, and support guides—65 minutes manually or 8 minutes with Copilot?"*  
> — Rafael, discovering documentation automation

---
