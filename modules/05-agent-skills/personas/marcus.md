# Marcus's Journey: Module 5 - Agent Skills

> **Your role**: DevOps Developer (5 years)  
> **Time**: ~90 minutes (full) or ~45 minutes (focused)  
> **Transformation**: From infrastructure expert to systematic build/debug problem solver

---

## 📖 Your Story in This Module

Marcus, you've mastered DevOps—Docker, Kubernetes, CI/CD pipelines. You can spin up infrastructure in minutes. But when things break during builds or deployments, you waste hours googling the same errors you've seen before.

**Your frustration**:
- Docker build fails → 20 minutes googling "COPY failed ENOENT"
- npm install explodes → 45 minutes resolving peer dependency hell
- CI pipeline breaks → 25 minutes digging through 500-line logs

**The pattern you notice**: You've solved these exact problems before. Why can't you systematically capture that knowledge?

This module shows you how to encode your DevOps expertise into **Agent Skills**—making your problem-solving systematic and shareable. By the end, your team won't need to wait for you to debug builds—Copilot will apply your experience automatically.

---

## 🎯 Your Exercises

### Exercise 5.2A: Docker Build Debugger Skill ⭐ *You lead this one*

**Your role**: Encode your Docker troubleshooting expertise  
**Time**: ~30 minutes  
**[View full exercise →](../EXERCISES.md#exercise-52a-docker-build-debugger-skill--marcus-stops-googling-build-errors)**

**What you'll create:**
- `.github/skills/docker-build-debugger/SKILL.md` — Docker failure patterns
- `.github/skills/docker-build-debugger/analyze-dockerfile.js` — Validation script

**Your "before" pain:**

You update a Dockerfile. Build fails:
```
npm ERR! code ENOENT
npm ERR! path /app/package.json
```

You spend 20 minutes googling → find Stack Overflow → realize COPY order is wrong → fix → rebuild → new error → repeat.

**Your "after" win:**

Ask Copilot: *"Why does my Dockerfile build fail with ENOENT package.json?"*

Copilot (using your skill): *"RUN npm install appears before COPY package.json. Move COPY package*.json ./ before RUN npm install."*

**Time saved**: 18 minutes per Docker build error

**Your transformation moment:**
> *"I've debugged hundreds of Dockerfiles—COPY order, layer caching, context size. Now that knowledge is encoded. When someone hits a build error, Copilot diagnoses it using my patterns. The script even catches issues before docker build runs."*

---

### Exercise 5.3A: Dependency Conflict Resolver Skill ⭐ *You lead this one*

**Your role**: Systematize npm dependency hell  
**Time**: ~30 minutes  
**[View full exercise →](../EXERCISES.md#exercise-53a-dependency-conflict-resolver-skill--marcus-fixes-npm-hell)**

**What you'll create:**
- `.github/skills/dependency-conflict-resolver/SKILL.md` — npm conflict patterns
- `.github/skills/dependency-conflict-resolver/analyze-dependencies.js` — Compatibility checker

**Your "before" pain:**

Update react-router-dom to v6. `npm install` explodes:
```
npm ERR! ERESOLVE could not resolve
npm ERR! peer react@"^18.0.0" from react-router-dom@6.20.0
npm ERR! Found: react@17.0.2
```

You spend 45 minutes: googling → checking changelogs → finding which packages need updates → trial and error.

**Your "after" win:**

Ask Copilot: *"react-router-dom v6 won't install. What dependencies do I need to update?"*

Copilot (using your skill): *"react-router-dom@6 requires React 18+. Update these together: react@^18.2.0, react-dom@^18.2.0, @testing-library/react@^13.0.0. Check React 18 migration guide for breaking changes."*

**Time saved**: 40 minutes per dependency conflict

**Your transformation moment:**
> *"Dependency conflicts were my nightmare. The skill encodes how React ecosystem versions interact—which packages cascade, what order to update them. No more guessing. The analyzer script catches conflicts before npm install even runs."*

---

### Exercise 5.4A: Build Pipeline Analyzer Skill 🤝 *Team collaboration with Sarah*

**Your role**: Diagnose CI/CD failures systematically  
**Time**: ~30 minutes  
**[View full exercise →](../EXERCISES.md#exercise-54a-build-pipeline-analyzer-skill--jordan-and-marcus-debug-cicd-failures)**

**What you'll create:**
- `.github/skills/build-pipeline-analyzer/SKILL.md` — CI failure triage guide

**Your "before" pain:**

GitHub Actions fails. You open the logs: 500 lines of output. You scroll... scroll... find the error... spend 20 minutes diagnosing root cause.

**Your "after" win:**

Copilot sees the CI failure and analyzes:
- **Failure type**: Test timeout (async callback exceeded 5000ms)
- **Root cause**: CharacterCard test - likely unmocked API call
- **Fix**: Increase timeout or add API mocks

**Time saved**: 17 minutes per CI failure

**Your transformation moment:**
> *"Sarah and I have debugged thousands of CI failures—test timeouts, Docker context issues, flaky tests. The skill captures our combined 17 years of experience. Now anyone can diagnose pipeline failures without waiting for us."*

---

### Exercise 5.4: Effort Estimator Skill 🤝 *Supporting Rafael*

**Your role**: Technical reality check for feature estimates  
**Time**: ~15 minutes (supporting role)  
**[View full exercise →](../EXERCISES.md#exercise-54-effort-estimator-skill--whats-next-after-character-detail)**

**How you help:**

Rafael is about to promise Episode Detail will ship as fast as Character Detail. You know it's more complex (many-to-many relationships), but how do you explain why?

With Rafael's effort estimator skill, you can show:
- Character Detail: 1 character → many quotes = **8 points**
- Episode Detail: 1 episode → many characters → many quotes = **21 points**

Rafael adjusts stakeholder expectations. You avoid an unrealistic deadline.

---

## 🔗 Connections to Your Work

### Skills You're Building

**Systematic Problem Solving**: Skills encode your diagnostic patterns—how to triage Docker errors, resolve dependency conflicts, analyze CI logs. You're building a library of troubleshooting expertise.

**Infrastructure Knowledge as Code**: Just as you encode infrastructure in YAML/Dockerfiles, you're now encoding *expertise* in skills. Your problem-solving becomes portable and shareable.

**Script Integration**: Skills can run validation scripts—checking Dockerfiles, analyzing package.json, extracting log patterns. You're automating the diagnostics, not just the builds.

### How This Helps Your Real Work

As a DevOps developer expanding into full-stack:

1. **Confidence with Application Code**: Skills help you systematize application patterns (dependency management, testing) the same way you systematized infrastructure.

2. **Team Leverage**: Your DevOps expertise no longer bottlenecks the team. Skills democratize your knowledge—frontend devs can diagnose Docker issues without waiting for you.

3. **Documentation That Works**: Skills are living documentation that Copilot applies automatically. Better than wiki pages that get stale.

### Artifacts You Create

**Skills** (in `.github/skills/`):
- `docker-build-debugger/` — Your Docker troubleshooting expertise
- `dependency-conflict-resolver/` — Your npm conflict resolution patterns
- `build-pipeline-analyzer/` — CI/CD diagnostic workflows (with Sarah)

**Scripts** (skill automation):
- `analyze-dockerfile.js` — Pre-build Dockerfile validation
- `analyze-dependencies.js` — Pre-install compatibility checking

---

## 💭 Your Transformation Arc

**Before this module (your fears):**
- 😰 *"I waste hours googling errors I've solved before"*
- 😰 *"My expertise disappears into Slack threads"*
- 😰 *"The team waits for me to diagnose build/deploy issues"*
- 😰 *"I'm strong at infrastructure but weak at systematic application debugging"*

**After this module (your achievements):**
- ✅ Created Docker Build Debugger skill—diagnose Dockerfile issues in 2 minutes
- ✅ Created Dependency Conflict Resolver—resolve npm hell 8x faster
- ✅ Created Build Pipeline Analyzer with Sarah—democratize CI/CD debugging
- ✅ Your DevOps expertise is now encoded and accessible to the whole team

**Key insight:**
> *"Skills are like Helm charts for expertise. I encode infrastructure in YAML; now I encode problem-solving in skills. Docker errors, npm conflicts, CI failures—patterns I've debugged hundreds of times are now systematic knowledge that helps everyone."*

---

## 🚀 Quick Start Guide

**If you're short on time (45 minutes - focused path):**
1. Complete Exercise 5.2A (Docker Build Debugger) — 30 min
2. Skim Exercise 5.3A (Dependency Resolver) — 15 min
3. Your core skills are Docker + DevOps, start there

**If you have full time (90 minutes - complete journey):**
1. Exercise 5.2A: Docker Build Debugger ⭐ — 30 min
2. Exercise 5.3A: Dependency Conflict Resolver ⭐ — 30 min
3. Exercise 5.4A: Build Pipeline Analyzer 🤝 — 30 min
4. Skim Exercise 5.4: Support Rafael's effort estimation

---

## 📊 Your Success Metrics

| Metric | Before | After |
|--------|--------|-------|
| **Time per Docker build error** | 15-20 min | 2 min |
| **Time per npm conflict** | 30-45 min | 5 min |
| **Time per CI failure** | 20-25 min | 3-5 min |
| **Team dependency on you** | High (bottleneck) | Low (self-service) |
| **Error resolution confidence** | Medium (Google-dependent) | High (systematic) |
| **Knowledge documentation** | Ad-hoc Slack threads | Encoded in skills |

**Total time saved per week**: ~6-8 hours (debugging + teaching others)

---

## 🧠 Mindful Moment: From Reactive to Systematic

**You already think systematically about infrastructure:**

```yaml
# You know these patterns by heart
- Dockerfile: WORKDIR → COPY package.json → RUN install → COPY code
- CI: checkout → setup → cache → install → test → build
- Kubernetes: namespace → deployment → service → ingress
```

**Skills let you apply the same systematic thinking to debugging:**

```markdown
# Docker build fails with ENOENT
1. Check: COPY order (package.json before RUN npm install?)
2. Check: WORKDIR set? (paths relative to what?)
3. Check: .dockerignore (excluding needed files?)

# npm ERESOLVE error
1. Identify: Which package has peer dependency conflict?
2. Check: What version is currently installed?
3. Research: What peer version is required?
4. Plan: Which packages cascade (react → react-dom → testing-library)?

# CI test timeout
1. Identify: Which test failed?
2. Check: Is it flaky (passes locally)?
3. Diagnose: Unmocked API? Database connection? Resource exhaustion?
4. Fix: Increase timeout vs. fix root cause
```

**The realization**: You're not bad at debugging—you just needed a systematic way to capture patterns, like you do for infrastructure.

---

## 🎯 Skills That Leverage Your Strengths

You're building skills in your areas of expertise. Consider creating personal skills (`~/.github/skills/`) for:

**Infrastructure Diagnostics**:
```
~/.github/skills/kubernetes-pod-debugger/
  SKILL.md  # CrashLoopBackOff, ImagePullBackOff patterns
```

**Deployment Patterns**:
```
~/.github/skills/zero-downtime-deployment/
  SKILL.md  # Blue-green, rolling updates, rollback strategies
```

**Performance Analysis**:
```
~/.github/skills/container-performance-analyzer/
  SKILL.md  # Memory leaks, CPU spikes, resource limits
```

---

## 🔗 How Your Skills Connect Forward

Your Module 5 skills compound into future modules:

**Module 6 (MCP Servers)**: 
- Your build-pipeline-analyzer skill connects to GitHub MCP server
- Sarah shows you how to query GitHub Actions via MCP

**Module 8 (Copilot Web)**:
- Use GitHub Copilot in the browser to create more GitHub Actions workflows
- Your pipeline knowledge accelerates workflow creation

**Module 9 (Copilot CLI)**:
- Run Docker/npm diagnostic commands through CLI
- Your skills guide CLI-based debugging workflows

**Module 10 (Agentic SDLC)**:
- Your DevOps skills integrate into the full development lifecycle
- Build → Test → Deploy pipeline powered by your expertise

---

## ➡️ Continue Your Journey

### Within This Module
- [View all exercises](../EXERCISES.md) to see Elena and Rafael's full paths
- [Elena's path](elena.md) to see testing expertise encoded
- [Rafael's path](rafael.md) to see product knowledge systematized
- [Marcus's path](jordan.md) to see your CI/CD collaboration partner

### Next Module
Your next appearance: **[Module 7: Custom Agents](../../07-custom-agents/README.md)**

In Module 7, you'll see how agents can use the skills you created to build features autonomously—your Docker and dependency expertise becomes input to the coding agent!

---

## 📚 What You're Learning

### From This Module
1. **Skills encode expertise** (not just code patterns, but diagnostic workflows)
2. **Scripts extend skills** (automated validation before problems occur)
3. **Your DevOps knowledge is transferable** (systematic thinking works for builds, deps, CI)
4. **Documentation works when it's executable** (skills > wiki pages)

### For Your Career
- **From specialist to generalist**: DevOps + systematic application debugging
- **From bottleneck to enabler**: Team can self-serve with your encoded expertise
- **From reactive to proactive**: Scripts catch issues before they become failures
- **From tribal knowledge to shared patterns**: Your experience scales across the team

---

## 💡 Pro Tips from Your Journey

1. **Start with pain points**: Your best skills solve problems you've hit repeatedly
2. **Include the script early**: `analyze-dockerfile.js` catches issues before builds fail
3. **Test with real errors**: Use actual build logs from your CI history
4. **Cross-skill synergy**: Pipeline analyzer + Docker debugger work together
5. **Version your skills**: As you learn new patterns, update the skill content

---

## 🎭 Behind the Scenes: Why These Skills Matter

**Docker Build Debugger**: You've fixed COPY order issues dozens of times. The skill means you never waste that 20 minutes again—and neither does anyone else on the team.

**Dependency Conflict Resolver**: npm's ERESOLVE errors are cryptic. Your skill translates them into actionable upgrade plans—no more trial-and-error dependency updates.

**Build Pipeline Analyzer**: CI logs are overwhelming. The skill extracts root causes from noise—turning 25-minute investigations into 3-minute fixes.

Together, these three skills save you ~6-8 hours per week. More importantly, they make your expertise **portable**—helping everyone on the team become better at build and deployment debugging.

