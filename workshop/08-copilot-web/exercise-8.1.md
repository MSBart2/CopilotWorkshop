# Exercise 8.1: Issue Creation from Screenshots

## 🔨 Exercise

### Exercise 8.1: Issue Creation from Screenshots — "From Image to Issue in 2 Minutes"

**Lead:** Rafael ⭐ | **Support:** — | **Time:** 10 min

#### 📖 The Challenge

Rafael receives a Slack message from a user with a screenshot showing a UI bug: character cards are overlapping on mobile devices. Normally, filing this issue requires downloading the screenshot, opening GitHub, manually transcribing what he observes, remembering which labels to apply (`bug`, `ui`, `mobile`), and figuring out which component is affected. **Total time: 14 minutes**—and he often misses details or forgets labels, resulting in vague issues that need follow-up questions before the team can start work.

Rafael wonders: *"GitHub Copilot on the web can read images. What if I drag this screenshot directly into Copilot and ask it to create the issue for me?"*

#### 🔄 The Transformation

| Before ❌ | After ✨ |
|-----------|----------|
| User sends screenshot in Slack. Rafael downloads it, opens GitHub issue form, manually types description while looking at screenshot. Writes: "Cards overlap" (vague). Forgets to add `mobile` label. Doesn't reference specific component. Takes 14 minutes. Issue lacks detail needed for triage. | User sends screenshot. Rafael drags it into github.com/copilot. Prompts: "Create issue for this bug, use bug template." Copilot reads screenshot, generates: "Character cards overlap on mobile viewport <375px", adds labels `bug`, `ui`, `mobile`, references `CharacterCard.js` component, applies template with reproduction steps. Takes 2 minutes. Issue is triage-ready immediately. |
| **Time:** 14 min per issue<br>**Details captured:** 60% (misses viewport size, component)<br>**Labels:** Incomplete<br>**Template:** Manual formatting | **Time:** 2 min per issue<br>**Details captured:** 95% (AI reads visual details)<br>**Labels:** Complete and accurate<br>**Template:** Auto-applied |

#### 🎯 Your Goal

File detailed, triage-ready issues from screenshots in under 2 minutes using GitHub Copilot web's image analysis capabilities.

#### 📋 Steps

1. **Access GitHub Copilot Web**
   
   Open your browser and navigate to **[github.com/copilot](https://github.com/copilot)**. Verify you see the Copilot chat interface with the message input box, model selector at the top, and can reference `@fanhub` repository in prompts.

2. **Prepare a Test Screenshot**
   
   **Option A:** Download [character-overlap-mobile.png](../dev-data/screenshots/character-overlap-mobile.png) and observe the overlapping character cards on mobile viewport.
   
   **Option B:** Run FanHub locally (`npm start`), open browser dev tools (F12), switch to mobile viewport (390px), navigate to characters page, and screenshot any UI issue you observe.
   
   **Option C:** Skip screenshot for now, use descriptive text in next step (we'll show you how).

3. **File an Issue from Screenshot**
   
   In github.com/copilot, drag your screenshot into the chat message box (or click attachment icon). Type this prompt:
   
   ```
   Create a new issue in the @fanhub repository for the bug shown in this 
   screenshot. Use the 'bug' label and our bug report template. Describe 
   what you see in detail, including the component likely affected.
   ```
   
   Press Enter and wait for Copilot to analyze. Review the generated issue content for specific title, detailed description, appropriate labels (`bug`, `ui`, `mobile`), component reference (`CharacterCard.js`), and template sections. If satisfied, ask: "This looks good. Please create this issue now."

4. **Verify Issue Creation**
   
   Navigate to your FanHub repository's **Issues** tab. Find the newly created issue (top of the list) and verify the title, description, labels, and template format match what Copilot generated. If edits are needed, ask Copilot to update: "Please add the 'needs-triage' label to this issue" or edit manually.

5. **Practice Without a Screenshot (Bonus)**
   
   In a new Copilot conversation, type:
   
   ```
   @fanhub Create a new issue: The search bar doesn't work on mobile Safari. 
   When users tap the search input, the keyboard appears but typing doesn't 
   update the input field. This happens only on iOS Safari, not Chrome mobile. 
   Use the bug template and label it as 'bug', 'mobile', and 'ios'.
   ```
   
   Notice how Copilot infers the component, structures the description, applies labels, and adds template sections like "Steps to Reproduce" even without a screenshot.

#### ✅ Success Criteria

- [ ] Filed 1-2 issues from screenshots with complete metadata in under 3 minutes total
- [ ] Issues include specific titles, detailed descriptions, accurate labels, and component references
- [ ] Bug template format is automatically applied
- [ ] Issues are triage-ready without follow-up questions

> 📂 **Compare Your Work**: Check your created issues in the FanHub repository Issues tab

#### 📚 Official Docs

- [Using GitHub Copilot Chat in GitHub.com](https://docs.github.com/en/copilot/github-copilot-chat/copilot-chat-in-github/using-github-copilot-chat-in-githubcom) — Official web features documentation
- [How to use GitHub Copilot on github.com: File issues from screenshots](https://github.blog/ai-and-ml/github-copilot/how-to-use-github-copilot-on-github-com-a-power-users-guide/#file-issues-from-screenshots) — Real-world workflow guide

---

## 🔗 What You Built

**In this exercise:**
- **Issues filed from screenshots** — 2 minutes per issue vs 14 minutes manually, with 95% detail capture vs 60%
- **Triage-ready workflow** — Issues include complete metadata (labels, components, templates) immediately

**How it compounds:**

| Previous Modules | This Module | Combined Power |
|------------------|-------------|----------------|
| Module 1: Repository instructions define issue templates | Exercise 8.1: Copilot applies templates automatically | Templates enforced without manual formatting |
| Module 7: Custom agents like `@review-enforcer` | Exercise 8.1: Agents work on web for issue triage | Same customizations, browser interface |

---

## ➡️ Next Up

**[Exercise 8.2: PR Analysis and Team Unblocking](exercise-8.2.md)** — Use custom agents on mobile to review pull requests during meetings, unblocking the team without opening VS Code.

> *"Marcus needs PR approval to deploy by EOD, but I'm in a meeting with just my phone. Can I review using `@review-enforcer` from the browser?"*  
> — Rafael, discovering mobile PR reviews

---
