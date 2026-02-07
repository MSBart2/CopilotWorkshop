# Testing the Updated Tech-Talk Workflow

## Quick Test Plan

Use this guide to validate the improved workflow works as expected.

## Prerequisites

- Write access to the repository
- Ability to create issues and add labels

## Test Steps

### 1. Create Test Issue

1. Go to: https://github.com/MSBart2/CopilotTraining/issues/new/choose
2. Select "🎤 Tech Talk Request"
3. Fill in the form:
   ```
   Title: [Tech Talk] Test - Copilot Edits
   
   Tech Talk Topic: test-copilot-edits
   
   Source URLs:
   https://code.visualstudio.com/docs/copilot/copilot-edits
   
   Primary Question: How does Copilot Edits differ from inline suggestions?
   
   Target Audience: Developers
   
   Expected Duration: 30 minutes
   ```
4. Check all three Content Fitness boxes
5. Submit issue

### 2. Verify Phase 1 (Intake) - Should Run Automatically

**Expected Results**:
- Workflow runs automatically (check Actions tab)
- Comment appears on issue: "✅ Phase 1: Intake Complete"
- Research directory created: `tech-talks/.research/test-copilot-edits/`
- Files created:
  - `metadata.json`
  - `phase1-research.md`
- Label changes: `tech-talk:intake` removed, `tech-talk:planned` added
- Agent assigned: `@copilot-swe-agent[bot]`

**Verification Steps**:
1. Check issue has comment with "Phase 1: Intake Complete"
2. Check issue labels: Should have `tech-talk` and `tech-talk:planned`
3. Navigate to `tech-talks/.research/test-copilot-edits/` in repo
4. Confirm `metadata.json` and `phase1-research.md` exist

**If Phase 1 Fails**:
- Check Actions tab for workflow errors
- Verify issue has both `tech-talk` and `tech-talk:intake` labels
- Check if files were created despite workflow error

### 3. Verify Phase 2 (Research & Plan) - Should Run Automatically

**Expected Results**:
- Workflow runs automatically when `tech-talk:planned` label added
- Comment appears: "🔍 Phase 2: Research & Planning Started"
- Comment appears: Instructions for agent
- Agent researches URL using web_search
- Agent populates `phase1-research.md` with findings
- Agent creates `phase2-plan.md` with outline
- Agent commits research files
- **Label NOT automatically updated** (waits for human review)

**Verification Steps**:
1. Wait 10-15 minutes for agent to complete research
2. Check for agent comment with research summary
3. Navigate to `tech-talks/.research/test-copilot-edits/`
4. Open `phase1-research.md` - should have research findings
5. Open `phase2-plan.md` - should have content outline
6. Check issue still has `tech-talk:planned` label (NOT `tech-talk:built`)

**If Phase 2 Fails**:
- Check if agent was properly assigned
- Look for agent error comments
- Check Actions tab for workflow failures
- Verify research files were at least partially created

### 4. Human Review Checkpoint - Manual Step

**Action Required**:
1. Review `tech-talks/.research/test-copilot-edits/phase1-research.md`
   - Check research findings are comprehensive
   - Verify capabilities are identified
   - Confirm architecture is documented
   - Check official docs are linked

2. Review `tech-talks/.research/test-copilot-edits/phase2-plan.md`
   - Verify content outline is complete
   - Check 3-6 major sections identified
   - Confirm 2-5 artifacts listed
   - Validate content fitness is 🟢

3. (Optional) Edit files if needed:
   - Fix any inaccuracies
   - Add missing information
   - Adjust section structure
   - Commit changes

4. When satisfied, add label: `tech-talk:ready`

**Expected Behavior**:
- Issue should have `tech-talk:planned` label initially
- After review, manually add `tech-talk:ready` label
- This triggers Phase 3
- This triggers Phase 3

### 5. Verify Phase 3 (Build) - Should Run When Label Added

**Expected Results**:
- Workflow runs when `tech-talk:ready` label added
- Comment appears: "🔨 Phase 3: Build Started"
- Agent reads research and plan files
- Agent generates `tech-talks/test-copilot-edits/README.md`
- Agent creates artifact files (if needed)
- Agent opens PR with all content
- PR includes `.research/` directory for reference

**Verification Steps**:
1. Check for comment: "Phase 3: Build Started"
2. Wait 15-20 minutes for agent to complete
3. Check for PR creation
4. Review PR:
   - `tech-talks/test-copilot-edits/README.md` exists
   - README follows TEMPLATE.md structure
   - Content matches research and plan
   - All required sections present
   - `.research/` directory included

**If Phase 3 Fails**:
- Check agent comments for errors
- Verify research files are accessible
- Check Actions tab for workflow issues
- Look for PR even if partially complete

### 6. Human Review Checkpoint - Manual Step

**Action Required**:
1. Review PR with generated content
2. Check README.md quality:
   - Question is clear
   - Content fitness is 🟢
   - Major sections have 🎬 markers
   - Artifacts are present
   - Official docs linked (minimum 2)

3. Provide feedback or request changes via PR comments

4. When satisfied, add label: `tech-talk:slides`

**Expected Behavior**:
- PR is open for review
- Human can comment and request changes
- Agent can make revisions based on feedback
- When ready, manually add `tech-talk:slides` label to PR

### 7. Verify Phase 4 (Slides) - Should Run When Label Added

**Expected Results**:
- Workflow runs when `tech-talk:slides` label added to PR
- Slides generated at `slides/tech-talks/test-copilot-edits.md`
- Slides verified
- Slides added to PR

**Verification Steps**:
1. Check PR for slides commit
2. Review `slides/tech-talks/test-copilot-edits.md`
3. Verify slides follow tech-talk style
4. Check slides render correctly (if possible)

**If Phase 4 Fails**:
- Check slide generation workflow logs
- Verify README.md is properly structured
- Check for slide-generator agent errors

### 8. Complete Test - Manual Step

**Action Required**:
1. Review slides in PR
2. When satisfied with all content:
   - Add `tech-talk:complete` label
   - Merge PR

**Cleanup**:
- Test tech-talk can be deleted: `git rm -r tech-talks/test-copilot-edits/`
- Research can be kept or deleted: `git rm -r tech-talks/.research/test-copilot-edits/`

## Success Criteria

✅ **Phase 1**: Research directory created automatically
✅ **Phase 2**: Research files populated by agent
✅ **Review 1**: Human can edit research before proceeding
✅ **Phase 3**: README generated from approved research
✅ **Review 2**: Human can review PR before slides
✅ **Phase 4**: Slides generated and added to PR
✅ **No auto-label updates**: Only Phase 1→2 auto-progresses
✅ **web_search works**: No DNS errors
✅ **Large URL handling**: Content >20K chars processed correctly

## Common Issues and Solutions

### Issue: Phase 1 doesn't run
**Solution**: Verify issue has `tech-talk` and `tech-talk:intake` labels

### Issue: Phase 2 doesn't populate research files
**Solution**: 
- Check if agent is using web_search (not web_fetch)
- Verify source URLs are accessible
- Check agent error messages

### Issue: Agent tried to update labels in Phase 2
**Solution**: This is fixed in new workflow - labels should NOT auto-update after Phase 2

### Issue: Phase 3 can't read research files
**Solution**: 
- Verify files exist in `tech-talks/.research/[topic]/`
- Check file permissions
- Ensure files were committed

### Issue: Large URL (>20K) fails to process
**Solution**: 
- Agent should automatically chunk content
- Check if section-by-section processing occurred
- Review research file for completeness

## Reporting Results

After completing the test, report findings:

1. **What worked**: List successful phases
2. **What failed**: List any failures with error messages
3. **Improvements needed**: Suggest refinements
4. **Overall assessment**: Ready for production use?

## Next Steps After Testing

If test successful:
1. Close test issue and PR
2. Delete test tech-talk content
3. Update workflow documentation if needed
4. Use workflow for real tech-talk creation

If test fails:
1. Document specific failures
2. Check workflow logs for errors
3. Adjust workflow files as needed
4. Re-test with another issue

## Test Checklist

- [ ] Create test issue with template
- [ ] Phase 1 completes automatically
- [ ] Research directory created
- [ ] Label updates to `tech-talk:planned`
- [ ] Phase 2 runs automatically
- [ ] Research files populated
- [ ] Label does NOT auto-update
- [ ] Review research files manually
- [ ] Add `tech-talk:ready` label manually
- [ ] Phase 3 runs automatically
- [ ] PR created with README.md
- [ ] Review PR content manually
- [ ] Add `tech-talk:slides` label manually
- [ ] Phase 4 runs automatically
- [ ] Slides generated and added to PR
- [ ] All content meets quality standards

## Resources

- Workflow overview: `.github/workflows/TECH-TALK-WORKFLOW.md`
- Research storage: `.github/workflows/RESEARCH-STORAGE.md`
- Improvements summary: `.github/workflows/IMPROVEMENTS-SUMMARY.md`
- Issue 54 analysis: `.github/workflows/ISSUE-54-INVESTIGATION.md`
