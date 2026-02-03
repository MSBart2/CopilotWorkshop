# Exercise 5.3: Build Pipeline Analyzer

## 🔨 Exercise

### Exercise 5.3: Build Pipeline Analyzer — "From Manual Debugging to Automated Root Cause Analysis"

**Lead:** Marcus ⭐ | **Support:** Elena 🤝, Sarah 🤝 | **Time:** 12 min

#### 📖 The Challenge

It's 4:00 PM on Monday. Marcus gets a Slack notification: "Build failed in CI/CD pipeline." He opens the logs and sees 2,000 lines of output with a cryptic error buried somewhere: `Error: Cannot find module '@fanhub/shared-utils'`.

Marcus's debugging process takes 30 minutes every time:
- 15 minutes reproducing the failure locally (installing dependencies, running build, checking versions)
- 15 minutes tracing the root cause (is it a missing dependency? version mismatch? circular import?)

This happens 5 times per sprint. Sometimes it's a missing dependency, sometimes a TypeScript compilation error, sometimes a Docker layer cache issue. Elena has the same problem with test pipeline failures. Sarah wishes there was a systematic way to analyze build logs and identify common failure patterns.

Elena suggests: *"Build failures follow patterns. Missing dependencies look different from compilation errors, which look different from memory issues. We could create a skill with a diagnostic script that parses logs, identifies patterns, and suggests fixes based on historical examples."*

#### 🔄 The Transformation

| Before ❌ | After ✨ |
|-----------|----------|
| Build fails. Marcus opens 2,000-line log file, scrolls through verbose output looking for error (5 minutes). Tries to reproduce locally: clones fresh, installs deps, runs build (10 minutes). Error doesn't reproduce locally—must be CI environment issue. Compares local vs. CI dependencies, finds version mismatch in package.json (15 minutes). Total: 30 minutes per failure. Root cause identification: trial and error. | Build fails. Marcus asks Copilot to analyze the failure. `build-pipeline-analyzer` skill activates, loading diagnostic script + log pattern examples. Script parses log, identifies `Cannot find module` pattern, matches to "missing dependency" category from examples. Returns root cause: "@fanhub/shared-utils not in package.json" with fix: "Run npm install @fanhub/shared-utils --save". Total: 2 minutes. Root cause: identified by pattern matching. |
| **Time:** 30 min/failure (5 min log review + 10 min local reproduction + 15 min root cause tracing)<br>**Root cause method:** Trial and error<br>**Failures:** 5 per sprint<br>**Total time:** 150 min/sprint | **Time:** 2 min/failure (instant log analysis via script + pattern matching)<br>**Root cause method:** Automated pattern recognition<br>**Failures:** 5 per sprint<br>**Total time:** 10 min/sprint |

**Time saved:** 28 minutes per failure × 5 failures per sprint = **140 minutes (2.3 hours) saved per sprint**

**Quality improvement:** Instant root cause identification vs. 15 minutes of trial and error

#### 🎯 Your Goal

Create a `build-pipeline-analyzer` agent skill that teaches Copilot how to analyze build logs, identify failure patterns, and suggest fixes using a diagnostic script and example log patterns.

#### 📋 Steps

1. **Create the skill directory structure**
   
   ```bash
   mkdir -p .github/skills/build-pipeline-analyzer/log-patterns
   ```
   
   This skill will contain a log analysis script, common failure pattern examples, and troubleshooting workflow.

2. **Create the diagnostic script**
   
   Create `.github/skills/build-pipeline-analyzer/analyze-logs.sh`:
   
   ```bash
   #!/bin/bash
   # Build Log Analyzer Script
   # Parses build logs and identifies common failure patterns
   
   LOG_FILE=$1
   
   if [ -z "$LOG_FILE" ]; then
     echo "Usage: ./analyze-logs.sh <log-file>"
     exit 1
   fi
   
   if [ ! -f "$LOG_FILE" ]; then
     echo "Error: Log file not found: $LOG_FILE"
     exit 1
   fi
   
   echo "=== Build Log Analysis ==="
   echo ""
   
   # Pattern 1: Missing dependency
   if grep -q "Cannot find module\|MODULE_NOT_FOUND\|Error: Cannot resolve" "$LOG_FILE"; then
     echo "🔍 PATTERN DETECTED: Missing Dependency"
     echo ""
     echo "Error lines:"
     grep -n "Cannot find module\|MODULE_NOT_FOUND\|Error: Cannot resolve" "$LOG_FILE" | head -5
     echo ""
     echo "Likely cause: Package not installed or not in package.json"
     echo "Fix: Check package.json and run 'npm install' or add missing package"
     echo "Example: npm install <package-name> --save"
     exit 0
   fi
   
   # Pattern 2: TypeScript compilation error
   if grep -q "error TS\|TypeScript error" "$LOG_FILE"; then
     echo "🔍 PATTERN DETECTED: TypeScript Compilation Error"
     echo ""
     echo "Error lines:"
     grep -n "error TS" "$LOG_FILE" | head -10
     echo ""
     echo "Likely cause: Type mismatch, missing type definition, or syntax error"
     echo "Fix: Review TypeScript errors above, fix type issues in source files"
     echo "Common fixes:"
     echo "  - Install @types packages: npm install --save-dev @types/<package>"
     echo "  - Fix type annotations in source code"
     echo "  - Update tsconfig.json if strictness too high"
     exit 0
   fi
   
   # Pattern 3: Memory/resource exhaustion
   if grep -q "JavaScript heap out of memory\|ENOMEM\|FATAL ERROR" "$LOG_FILE"; then
     echo "🔍 PATTERN DETECTED: Memory/Resource Exhaustion"
     echo ""
     echo "Error lines:"
     grep -n "heap out of memory\|ENOMEM\|FATAL ERROR" "$LOG_FILE" | head -5
     echo ""
     echo "Likely cause: Build process exceeded available memory"
     echo "Fix: Increase Node.js memory limit or optimize build"
     echo "Solutions:"
     echo "  - Increase heap size: NODE_OPTIONS='--max-old-space-size=4096' npm run build"
     echo "  - Split large builds into smaller chunks"
     echo "  - Check for memory leaks in build scripts"
     exit 0
   fi
   
   # Pattern 4: Circular dependency
   if grep -q "Circular dependency\|Cycle detected" "$LOG_FILE"; then
     echo "🔍 PATTERN DETECTED: Circular Dependency"
     echo ""
     echo "Error lines:"
     grep -n "Circular dependency\|Cycle detected" "$LOG_FILE" | head -10
     echo ""
     echo "Likely cause: Two or more modules import each other"
     echo "Fix: Refactor code to break circular dependency"
     echo "Steps:"
     echo "  1. Identify modules involved (shown in error)"
     echo "  2. Extract shared code to new module"
     echo "  3. Import shared module instead of each other"
     exit 0
   fi
   
   # Pattern 5: Docker build failure
   if grep -q "failed to solve\|ERROR \[internal\]\|dockerfile parse error" "$LOG_FILE"; then
     echo "🔍 PATTERN DETECTED: Docker Build Failure"
     echo ""
     echo "Error lines:"
     grep -n "failed to solve\|ERROR \[internal\]\|dockerfile parse error" "$LOG_FILE" | head -10
     echo ""
     echo "Likely cause: Dockerfile syntax error, missing base image, or cache issue"
     echo "Fix: Review Dockerfile and rebuild without cache"
     echo "Solutions:"
     echo "  - Check Dockerfile syntax"
     echo "  - Rebuild without cache: docker build --no-cache ."
     echo "  - Verify base image exists and is accessible"
     exit 0
   fi
   
   # Pattern 6: Test failures
   if grep -q "Tests failed\|Test Suites:.*failed\|FAIL.*test" "$LOG_FILE"; then
     echo "🔍 PATTERN DETECTED: Test Failures"
     echo ""
     echo "Failed tests:"
     grep -n "FAIL\|● " "$LOG_FILE" | head -20
     echo ""
     echo "Likely cause: Code changes broke existing tests or tests are flaky"
     echo "Fix: Review failed tests and fix code or update test expectations"
     echo "Steps:"
     echo "  1. Run tests locally: npm test"
     echo "  2. Fix failing tests or update snapshots if expected"
     echo "  3. Check for race conditions in async tests"
     exit 0
   fi
   
   # No pattern matched
   echo "❓ NO KNOWN PATTERN DETECTED"
   echo ""
   echo "Showing last 50 lines of log for manual inspection:"
   echo ""
   tail -50 "$LOG_FILE"
   echo ""
   echo "Suggestion: Review full log file for specific error messages"
   ```
   
   Make it executable:
   ```bash
   chmod +x .github/skills/build-pipeline-analyzer/analyze-logs.sh
   ```
   
   This script parses logs for common failure patterns and provides targeted fixes.

3. **Create example log patterns**
   
   Create `.github/skills/build-pipeline-analyzer/log-patterns/missing-dependency.txt`:
   
   ```
   Example: Missing Dependency Error
   
   Error Pattern:
   - "Cannot find module '@fanhub/shared-utils'"
   - "MODULE_NOT_FOUND"
   - "Error: Cannot resolve 'react-query'"
   
   Root Cause:
   Package is imported in code but not listed in package.json or not installed
   
   Fix:
   1. Check if package is in package.json:
      grep "@fanhub/shared-utils" package.json
   
   2. If missing, add it:
      npm install @fanhub/shared-utils --save
   
   3. If present but not installed, reinstall:
      rm -rf node_modules package-lock.json
      npm install
   
   Prevention:
   - Always use --save or --save-dev when installing packages
   - Commit package-lock.json to version control
   - Run npm ci in CI/CD instead of npm install for consistent installs
   ```
   
   Create `.github/skills/build-pipeline-analyzer/log-patterns/typescript-error.txt`:
   
   ```
   Example: TypeScript Compilation Error
   
   Error Pattern:
   - "error TS2304: Cannot find name 'Character'"
   - "error TS2339: Property 'actor' does not exist on type"
   - "error TS7006: Parameter 'req' implicitly has an 'any' type"
   
   Root Cause:
   Type definition missing, incorrect type annotation, or strictness settings too high
   
   Fix:
   1. For missing types (@types packages):
      npm install --save-dev @types/express @types/node
   
   2. For property errors, verify type definitions:
      interface Character {
        id: number;
        name: string;
        actor?: string;  // Optional property
      }
   
   3. For implicit 'any' errors, add type annotations:
      async (req: Request, res: Response) => { ... }
   
   Prevention:
   - Enable strict type checking in tsconfig.json
   - Define interfaces for all data structures
   - Install @types packages for JavaScript libraries
   ```
   
   Create `.github/skills/build-pipeline-analyzer/log-patterns/memory-exhaustion.txt`:
   
   ```
   Example: Memory Exhaustion Error
   
   Error Pattern:
   - "JavaScript heap out of memory"
   - "FATAL ERROR: Reached heap limit"
   - "ENOMEM: not enough memory"
   
   Root Cause:
   Build process consumes more memory than available Node.js heap
   
   Fix:
   1. Increase Node.js memory limit:
      NODE_OPTIONS='--max-old-space-size=4096' npm run build
   
   2. In package.json scripts:
      "build": "NODE_OPTIONS='--max-old-space-size=4096' webpack"
   
   3. For CI/CD, set environment variable:
      env:
        NODE_OPTIONS: '--max-old-space-size=4096'
   
   Prevention:
   - Optimize build process (fewer large dependencies)
   - Use code splitting to reduce bundle size
   - Profile memory usage: node --inspect build.js
   - Check for memory leaks in build scripts
   ```

4. **Create the SKILL.md file**
   
   Create `.github/skills/build-pipeline-analyzer/SKILL.md`:
   
   ````markdown
   ---
   name: build-pipeline-analyzer
   description: Analyze build pipeline failures for FanHub, identify root causes from log patterns, and suggest fixes. Use when debugging CI/CD build failures, Docker build errors, or test pipeline issues.
   ---
   
   # Build Pipeline Analyzer
   
   This skill teaches how to systematically analyze build failures using log pattern recognition and diagnostic scripts.
   
   ## When to Use This Skill
   
   - CI/CD pipeline build failures
   - Docker build errors
   - TypeScript compilation errors in CI
   - Test pipeline failures
   - Deployment script failures
   - Any build process that generates logs
   
   ## Diagnostic Workflow
   
   ### Step 1: Capture the Log
   
   Get the full build log from CI/CD system:
   - GitHub Actions: Download log artifact or copy from Actions tab
   - Save to local file: `build-failure.log`
   
   ### Step 2: Run Log Analyzer
   
   Use [analyze-logs.sh](./analyze-logs.sh) to identify patterns:
   
   ```bash
   .github/skills/build-pipeline-analyzer/analyze-logs.sh build-failure.log
   ```
   
   The script recognizes these patterns:
   - **Missing Dependency**: `Cannot find module`, `MODULE_NOT_FOUND`
   - **TypeScript Error**: `error TS####`, type mismatches
   - **Memory Exhaustion**: `heap out of memory`, `ENOMEM`
   - **Circular Dependency**: `Circular dependency`, `Cycle detected`
   - **Docker Build Failure**: `failed to solve`, Dockerfile errors
   - **Test Failures**: `Tests failed`, Jest/Mocha failures
   
   ### Step 3: Apply Suggested Fix
   
   Each pattern provides:
   - Root cause explanation
   - Specific fix commands
   - Prevention strategies
   
   ### Step 4: Verify Fix
   
   1. Apply the suggested fix locally
   2. Reproduce the build: `npm run build` or `docker build .`
   3. If successful, commit and push
   4. Verify CI/CD passes
   
   ## Common Failure Patterns
   
   Detailed examples in log-patterns/:
   
   - [Missing dependency](./log-patterns/missing-dependency.txt) — Package not in package.json or not installed
   - [TypeScript errors](./log-patterns/typescript-error.txt) — Type mismatches, missing @types packages
   - [Memory exhaustion](./log-patterns/memory-exhaustion.txt) — Insufficient heap size for build
   
   ## Pattern Recognition Guide
   
   **Missing Dependency:**
   - Keywords: "Cannot find module", "MODULE_NOT_FOUND", "Cannot resolve"
   - Fix: Add package to package.json and npm install
   
   **TypeScript Errors:**
   - Keywords: "error TS", "TypeScript error"
   - Fix: Fix type annotations, install @types packages
   
   **Memory Issues:**
   - Keywords: "heap out of memory", "ENOMEM", "FATAL ERROR"
   - Fix: Increase NODE_OPTIONS max-old-space-size
   
   **Circular Dependencies:**
   - Keywords: "Circular dependency", "Cycle detected"
   - Fix: Refactor to extract shared code to separate module
   
   **Docker Build:**
   - Keywords: "failed to solve", "ERROR [internal]"
   - Fix: Check Dockerfile syntax, rebuild without cache
   
   **Test Failures:**
   - Keywords: "Tests failed", "FAIL", test suite errors
   - Fix: Run tests locally, fix code or update expectations
   
   ## Prevention Strategies
   
   **For Missing Dependencies:**
   - Always use `npm install --save` or `--save-dev`
   - Commit package-lock.json to version control
   - Use `npm ci` in CI/CD for consistent installs
   
   **For TypeScript Errors:**
   - Enable strict type checking in tsconfig.json
   - Define interfaces for all data structures
   - Install @types packages for all JavaScript libraries
   
   **For Memory Issues:**
   - Set NODE_OPTIONS in CI/CD environment
   - Optimize bundle size with code splitting
   - Profile memory usage during development
   
   ## Manual Analysis Fallback
   
   If automated script doesn't identify pattern:
   
   1. **Search for "error"**: `grep -i "error" build-failure.log`
   2. **Check exit codes**: Look for "exit code 1", "exit code 137" (OOM kill)
   3. **Review last 100 lines**: Often contains root cause
   4. **Compare with previous successful build**: What changed?
   5. **Check for warnings before error**: May provide context
   
   ## Using This Skill
   
   When asked to debug a build failure:
   
   1. Request the full log file
   2. Run analyze-logs.sh script
   3. Identify the pattern match
   4. Reference appropriate log-pattern example
   5. Provide root cause + fix + prevention strategy
   6. Suggest commands to verify fix locally
   ````
   
   This skill combines the diagnostic script, pattern examples, and systematic troubleshooting workflow.

5. **Test the skill**
   
   Create a sample failed build log to test:
   
   ```bash
   cat > test-build-failure.log << 'EOF'
   npm run build
   
   > fanhub-backend@1.0.0 build
   > tsc
   
   Starting TypeScript compilation...
   src/routes/characters.ts:12:34 - error TS2304: Cannot find name 'CharacterDTO'.
   
   12     const character: CharacterDTO = await db.getCharacter(id);
                                     ~~~~~~~~~~~~
   
   src/routes/episodes.ts:8:15 - error TS2339: Property 'rating' does not exist on type 'Episode'.
   
   8     episode.rating = 9.5;
                 ~~~~~~
   
   Found 2 errors in 2 files.
   EOF
   ```
   
   Test the diagnostic script:
   ```bash
   .github/skills/build-pipeline-analyzer/analyze-logs.sh test-build-failure.log
   ```
   
   Then in VS Code Copilot Chat:
   
   ```
   The build failed with this log. Analyze it and tell me what's wrong and how to fix it.
   [Paste or attach test-build-failure.log]
   ```
   
   Copilot should:
   - Load the `build-pipeline-analyzer` skill (matches description: "debugging CI/CD build failures")
   - Reference the analyze-logs.sh script
   - Identify "TypeScript Compilation Error" pattern
   - Provide root cause: missing type definitions
   - Suggest fix: define CharacterDTO interface, add rating to Episode type
   - Reference typescript-error.txt pattern for details

#### ✅ Success Criteria

- [ ] Skill directory `.github/skills/build-pipeline-analyzer/` created with SKILL.md, script, and patterns
- [ ] analyze-logs.sh script is executable and recognizes 6+ common failure patterns
- [ ] Three log pattern examples document root causes, fixes, and prevention strategies
- [ ] SKILL.md includes diagnostic workflow, pattern recognition guide, and prevention strategies
- [ ] Copilot uses skill to analyze logs, identify patterns, and suggest fixes when debugging build failures

> 📂 **Compare Your Work**: [`examples/completed-config/skills/build-pipeline-analyzer/`](../../examples/completed-config/skills/build-pipeline-analyzer/)

#### 📚 Official Docs

- [Use Agent Skills in VS Code](https://code.visualstudio.com/docs/copilot/customization/agent-skills) — Agent skills with executable scripts
- [About Agent Skills (GitHub)](https://docs.github.com/en/copilot/concepts/agents/about-agent-skills) — Skills across multiple platforms

---

## 🔗 What You Built

**In this exercise:**
- `.github/skills/build-pipeline-analyzer/SKILL.md` — Instructions for systematic build failure analysis
- `.github/skills/build-pipeline-analyzer/analyze-logs.sh` — Executable script that parses logs and identifies failure patterns
- `.github/skills/build-pipeline-analyzer/log-patterns/` — Example patterns for missing dependencies, TypeScript errors, memory issues

**How it compounds:**

| Previous Modules | This Module | Combined Power |
|------------------|-------------|----------------|
| API endpoint skill (5.1) prevents schema mismatches | Build analyzer catches compilation errors from bad code | Generate correct code + catch build failures fast = reliable deployments |
| Bug reproduction skill (5.2) creates thorough tests | Build analyzer detects test failures and suggests fixes | Write comprehensive tests + debug test failures efficiently = robust test coverage |

**Marcus's ROI calculation:**
- Before: 30 min/failure × 5 failures/sprint = 150 minutes
- After: 2 min/failure × 5 failures/sprint = 10 minutes
- **Time saved:** 140 minutes (2.3 hours) per sprint
- **Annual impact:** 140 min/sprint × 26 sprints/year = 3,640 minutes (60.7 hours) = **more than 1.5 work weeks per year**
- **Quality impact:** Instant root cause identification vs. 15 minutes trial and error per failure

---

## ➡️ Next Module

**[Module 6: MCP Servers](../06-mcp-servers/README.md)** — Agent skills provide specialized capabilities with static resources (schemas, templates, scripts). Next: learn how to connect Copilot to live external services—databases, APIs, cloud platforms—using MCP servers.

> *"Skills taught Copilot our API schema, test patterns, and build analysis. But everything is static—example endpoints, template tests, log patterns. What if I need Copilot to query our actual PostgreSQL database or call our live TV show API to validate real data in real-time?"*  
> — Marcus, about to discover MCP servers

---

## 🎉 Module 5 Complete

You've created three agent skills that teach Copilot specialized capabilities:

1. **API Endpoint Design** — Generates schema-compliant REST endpoints with validation
2. **Bug Reproduction Tests** — Creates comprehensive test suites following templates
3. **Build Pipeline Analyzer** — Diagnoses build failures using pattern recognition

**Combined impact:**
- **Time saved per sprint:** 104 + 126 + 140 = **370 minutes (6.2 hours)**
- **Annual time saved:** 370 min/sprint × 26 sprints = **9,620 minutes (160 hours = 4 work weeks)**

**Key insight:** Skills aren't just instructions—they're complete capabilities with executable scripts, example resources, and systematic workflows. They teach Copilot *how to do things it doesn't know how to do*, not just how to format code.

---
