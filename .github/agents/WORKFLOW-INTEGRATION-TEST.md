# Slide Generation Workflow Integration Test

This document describes how to test the integrated slide generation, verification, and fixing workflow.

## Test Objective

Verify that the slide-generator agent:
1. Generates slides from a module README
2. Automatically verifies slides using @slide-verifier with port management
3. Automatically fixes issues using @slide-fixer when verification fails
4. Iterates up to 3 times until verification passes
5. Does not complete until slides pass verification or max iterations reached

## Test Setup

### Prerequisites

1. Playwright is installed in the slides directory:
   ```bash
   cd /home/runner/work/CopilotTraining/CopilotTraining/slides
   npm install --save-dev playwright @playwright/test
   npx playwright install chromium
   ```

2. Verification script is executable:
   ```bash
   chmod +x /home/runner/work/CopilotTraining/CopilotTraining/.github/skills/slide-verifier/scripts/verify-slides.mjs
   ```

## Manual Test Procedure

### Test 1: Verify Existing Slides

Test that the verification script works correctly with port parameter:

```bash
cd /home/runner/work/CopilotTraining/CopilotTraining

# Test with default port
.github/skills/slide-verifier/scripts/verify-slides.mjs workshop/00-orientation.md

# Test with custom port
.github/skills/slide-verifier/scripts/verify-slides.mjs workshop/00-orientation.md --port=3456

# Test parallel verification (different ports)
.github/skills/slide-verifier/scripts/verify-slides.mjs workshop/00-orientation.md --port=3030 &
.github/skills/slide-verifier/scripts/verify-slides.mjs workshop/01-instructions.md --port=3031 &
wait
```

**Expected Results:**
- Verification runs successfully on specified port
- Report generated in `slides/verification-reports/`
- Screenshots captured in `slides/screenshots/`
- No port collision errors

### Test 2: Invoke slide-verifier Skill

Test that the skill can be invoked from the agent context:

```bash
# This would be invoked by the slide-generator agent
@slide-verifier verify workshop/00-orientation --port=3456
```

**Expected Results:**
- Skill invokes the verify-slides.mjs script
- Port parameter is passed correctly
- Report is generated and parsed
- Pass/fail status is returned to agent

### Test 3: Invoke slide-fixer Skill

Test that the fixer can process verification reports:

```bash
# This would be invoked by the slide-generator agent
@slide-fixer fix workshop/03-custom-prompts
```

**Expected Results:**
- Skill reads latest verification report
- Identifies slides with critical issues
- Applies fixes (splits overflowing slides, fixes images, etc.)
- Preserves all content
- Maintains visual consistency

### Test 4: Full Workflow with slide-generator Agent

Test the complete end-to-end workflow:

```bash
# Invoke the slide-generator agent with a module path
# The agent should automatically:
# 1. Generate slides
# 2. Verify with random port
# 3. Fix issues if found
# 4. Re-verify
# 5. Iterate until passing or max 3 iterations
# 6. Report final status

# Example invocation (agent would do this automatically):
# 1. Generate slides for workshop/03-custom-prompts
# 2. @slide-verifier verify workshop/03-custom-prompts --port=3456
# 3. If issues: @slide-fixer fix workshop/03-custom-prompts
# 4. @slide-verifier verify workshop/03-custom-prompts --port=3789
# 5. Report completion
```

**Expected Results:**
- Agent generates slides
- Agent automatically verifies
- Agent automatically fixes if needed
- Agent iterates until passing (max 3 times)
- Agent reports final status with verification results
- Agent does NOT complete if verification never passes

## Validation Checklist

After running tests, verify:

- [ ] Verification script accepts --port parameter
- [ ] Multiple verifications can run on different ports simultaneously
- [ ] Verification reports are generated correctly
- [ ] Screenshots are captured for problematic slides
- [ ] slide-fixer reads verification reports correctly
- [ ] slide-fixer applies fixes without losing content
- [ ] slide-fixer maintains visual consistency
- [ ] slide-generator agent enforces verification before completion
- [ ] slide-generator agent invokes fixer when needed
- [ ] slide-generator agent iterates up to 3 times
- [ ] slide-generator agent reports final status with verification results

## Known Issues and Limitations

1. **Port Collision**: If two verifications try to use the same port, one will fail. The random port generation (3030-3999) should minimize this, but it's not guaranteed to be unique.

2. **Max Iterations**: The agent will attempt fixes up to 3 times. If verification still fails after 3 iterations, the agent should report this and complete with a warning.

3. **Code Overflow Tolerance**: Slides with primarily code blocks may have up to 49px overflow without requiring fixes. This is acceptable and should not trigger iteration.

## Troubleshooting

### Verification Script Hangs

If the script hangs on server startup:
- Check if port is already in use: `lsof -i :3030`
- Kill the process: `kill $(lsof -t -i:3030)`
- Try a different port: `--port=3456`

### Port Already in Use

If you see "port already in use" error:
- Use a different port number
- Kill the process using that port
- Wait a few seconds for the port to be released

### Screenshots Not Captured

If screenshots directory is missing:
```bash
mkdir -p /home/runner/work/CopilotTraining/CopilotTraining/slides/screenshots
chmod 755 /home/runner/work/CopilotTraining/CopilotTraining/slides/screenshots
```

## Success Criteria

The integration is successful when:

1. ✅ Verification script runs with custom port
2. ✅ Multiple verifications can run in parallel
3. ✅ slide-fixer applies fixes correctly
4. ✅ slide-generator agent enforces verification workflow
5. ✅ Agent iterates until passing or max iterations
6. ✅ Agent does not complete until verification passes
7. ✅ All reports and screenshots are generated correctly

## Future Enhancements

1. **Port Pool Management**: Implement a port allocation system to guarantee unique ports
2. **Concurrent Verification**: Support verifying multiple decks in parallel with automatic port assignment
3. **Verification Cache**: Cache verification results to avoid re-running for unchanged slides
4. **Auto-Fix Confidence**: Have the fixer report confidence level and only apply high-confidence fixes automatically
