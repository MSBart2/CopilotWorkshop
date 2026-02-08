---
status: active
updated: 2026-02-06
section: "Copilot Surfaces"
---

# Copilot Chat Internals: Debugging AI Interactions

> **The Question This Talk Answers:**
> *"Why didn't Copilot do what I expected—and how do I systematically debug AI interactions?"*

**Duration:** 40 minutes | **Target Audience:** Developers / DevOps / Technical Leads

---

## 📊 Content Fitness

| Criterion | Assessment | Notes |
|-----------|-----------|-------|
| **Relevant** | 🟢 High | Every developer using Copilot Chat encounters unexpected results—debugging visibility is essential for effective AI workflows |
| **Compelling** | 🟢 High | Built-in diagnostic tools reveal system prompts, context, tool invocations, and model reasoning—transforming guesswork into investigation |
| **Actionable** | 🟢 High | Open Chat Debug View today and see exactly what every request sends to the model; catch configuration issues in diagnostics view |

**Overall Status:** 🟢 Ready to use

---

## 📽️ Slide Generation Mapping

### Slide Sequence (Generated Automatically)

1. **Title/Logo Slide** ← H1 title + subtitle
2. **Question/Objective Slide** ← "The Question This Talk Answers"
3. **Table of Contents Slide** ← Auto-generated from 🎬 sections
4. **Problem Slide** ← "The Problem"
5. **Solution Overview** ← "The Solution"
6. **Key Artifacts** ← Diagnostic tools inventory
7. **Mental Model Shift** ← Move-Toward/Away/Against
8. **When to Use Decision Tree** ← "When to Use This Pattern"
9. **Chat Debug View** ← 🎬 Section 1 (3-4 slides)
10. **Thinking Tokens** ← 🎬 Section 2 (2-3 slides)
11. **Diagnostics View** ← 🎬 Section 3 (2-3 slides)
12. **Extension Logs & MCP** ← 🎬 Section 4 (2-3 slides)
13. **Troubleshooting Patterns** ← 🎬 Section 5 (3-4 slides)
14. **Use Cases** ← Real-World Use Cases (1-2 slides)
15. **Actionable Outcomes** ← What You Can Do Today
16. **Related Patterns** ← Related Patterns
17. **Official Documentation** ← 📚 section
18. **End Slide** ← Auto-generated

### Major Sections (TOC Entries)

```markdown
<!-- 🎬 MAJOR SECTION: Chat Debug View -->
<!-- 🎬 MAJOR SECTION: Thinking Tokens -->
<!-- 🎬 MAJOR SECTION: Diagnostics View -->
<!-- 🎬 MAJOR SECTION: Extension Logs & MCP -->
<!-- 🎬 MAJOR SECTION: Troubleshooting Patterns -->
```

---

## The Problem

### Key Points

- **Black box frustration**
  When prompts don't produce expected results, developers can't see why—no visibility into what the model actually received

- **Context mystery**
  Which files were sent? Were custom instructions loaded? Did tool invocations succeed or fail?

- **Trial-and-error debugging**
  Without observability, improving prompts becomes expensive guesswork—wasting 20-40 minutes per failed interaction

- **Customization uncertainty**
  Are my agents, instructions, and skills actually being applied, or are syntax errors silently breaking them?

### Narrative

You've invested time crafting thoughtful prompts, writing custom instructions, and configuring agents. You know what you want Copilot to do. But when the response doesn't match expectations—when it ignores your instructions, uses the wrong context, or produces technically incorrect code—you're stuck.

**You have no idea why.**

Was the context insufficient? Did your instructions fail to load due to a syntax error? Did a tool invocation time out? Was the prompt ambiguous? Without understanding what Copilot actually sees and does behind each request, debugging AI interactions becomes expensive trial-and-error. Developers spend 20-40 minutes tweaking prompts, reloading windows, and crossing their fingers—hoping something will work.

VS Code provides complete observability into every AI interaction through the Chat Debug View, customization diagnostics, thinking token display, and extension logs. These tools reveal the system prompt, full context sent to the model, tool invocations with responses, and even the model's internal reasoning process. Mastering these diagnostic capabilities transforms AI debugging from guesswork into systematic investigation—letting you identify root causes in minutes instead of hours.

---

## The Solution: Built-In Observability Tools

### What It Does

VS Code includes four integrated diagnostic systems that provide complete transparency into AI interactions: **Chat Debug View** (request/response inspection), **Thinking Tokens** (model reasoning visibility), **Customization Diagnostics** (configuration validation), and **Extension Logs** (deep troubleshooting). Together, these tools expose every component of the AI pipeline—from prompt construction to model inference to tool execution.

### Key Capabilities

- **Request Inspection**: View system prompts, user prompts, full context, tool invocations, and model responses for every chat interaction
- **Reasoning Visibility**: See model thinking tokens that reveal problem decomposition, tool selection logic, and decision processes
- **Configuration Validation**: Verify that custom agents, instructions, prompts, and skills loaded successfully—or identify syntax errors preventing application
- **Network Diagnostics**: Troubleshoot connectivity, authentication, proxy configuration, and certificate validation issues
- **MCP Server Management**: Monitor external tool server status, view logs, restart misbehaving services

### Architecture Overview

The diagnostic architecture operates as a multi-layer observability stack. **Chat Debug View** captures the full request/response cycle at the VS Code extension level, logging every interaction to a persistent history you can review. **Thinking tokens** (when supported by the model) are rendered inline during generation, giving real-time visibility into reasoning. **Diagnostics View** validates customization files at load time, reporting syntax errors or missing files before they cause silent failures. **Extension logs** capture the deepest layer—network requests, authentication state, and extension lifecycle events—enabling root cause analysis of infrastructure-level issues.

This separation allows targeted debugging: surface-level issues (wrong context, missing instructions) appear in Chat Debug View, configuration problems surface in Diagnostics View, and infrastructure failures require Extension Logs. Each tool serves a specific diagnostic purpose while sharing a common goal: eliminate the AI black box.

**Official Documentation:**
- 📖 [Chat Debug View](https://code.visualstudio.com/docs/copilot/chat/chat-debug-view) — Complete guide to request inspection and debugging
- 📖 [Troubleshoot AI in VS Code](https://code.visualstudio.com/docs/copilot/troubleshooting) — Comprehensive troubleshooting reference for all diagnostic tools
- 📖 [MCP Servers](https://code.visualstudio.com/docs/copilot/customization/mcp-servers) — Configuring and debugging external tool servers

---

## 📦 Key Artifacts

**This talk identifies VS Code's built-in diagnostic features as "artifacts"—tools you access via commands rather than files you install.**

### Primary Artifacts

*These diagnostic features are detailed in the major sections below*

- **Chat Debug View** — Complete request/response inspector showing system prompts, context, tool invocations, and model output
- **Thinking Token Display** — Real-time model reasoning visibility with configurable rendering modes
- **Customization Diagnostics View** — Configuration validator reporting load status, errors, and application order for all custom files
- **Extension Logs (Trace Mode)** — Deep troubleshooting for network, authentication, and extension lifecycle issues
- **MCP Server Management** — Status dashboard, log viewer, and restart controls for external tool servers

### Configuration Settings

*Key settings that control diagnostic behavior*

- **`chat.renderThinking`** — Controls thinking token display: "collapsed" (default), "expanded", or "hidden"
- **`chat.askQuestions.enabled`** — Allows model to ask clarifying questions before generating responses
- **Developer: Set Log Level** → **Trace** — Enables detailed logging for GitHub Copilot and Copilot Chat extensions

### Access Commands

*How to open each diagnostic tool*

- `Developer: Show Chat Debug View` — Opens request inspector
- `MCP: List Servers` — Opens MCP server management
- `GitHub Copilot: Collect Diagnostics` — Generates network diagnostic report
- Right-click in Chat view → **Diagnostics** — Opens customization validation report

---

## 🎯 Mental Model Shift

> **The Core Insight:** From "AI responses are unpredictable black boxes" to "every AI interaction is inspectable, debuggable, and improvable"

### Move Toward (Embrace These Patterns)

- ✅ **Debug-View-First Development**: Keep Chat Debug View open during prompt iteration to see exactly what context is sent → Identify missing files or truncated instructions immediately
- ✅ **Thinking Token Analysis**: Read model reasoning to understand *why* it made specific choices → Debug prompt ambiguity by seeing how the model interpreted your request
- ✅ **Diagnostics-As-Validation**: Check Diagnostics View after every customization file change → Catch syntax errors before wasting time on "why isn't this working?"
- ✅ **Evidence-Based Prompt Refinement**: Base prompt improvements on actual system prompt content and context sent → Replace guesswork with measurement

### Move Away From (Retire These Habits)

- ⚠️ **Blind Prompt Iteration**: Tweaking prompts without checking what context was actually sent → Wastes 20-40 minutes per debugging cycle
- ⚠️ **Assuming Instructions Loaded**: Writing custom instructions without verifying they appear in Diagnostics View → Silent failures waste hours
- ⚠️ **Ignoring Thinking Tokens**: Dismissing model reasoning as noise instead of debugging signal → Miss insights into why unexpected decisions were made

### Move Against (Active Resistance Required)

- 🛑 **Reloading Windows as First Debugging Step**: Using "reload window" as primary troubleshooting → Masks root causes, creates learned helplessness
- 🛑 **Black Box Acceptance**: Treating AI behavior as fundamentally unpredictable → Prevents systematic improvement, perpetuates inefficiency

> **Example Transformation:** Before: Developer spends 35 minutes rewriting a prompt, reloading the window three times, and re-adding context files—still gets unexpected results. After: Opens Chat Debug View, sees custom instructions failed to load due to YAML syntax error on line 14. Fixes syntax, validates in Diagnostics View, prompt works in 4 minutes.

---

## When to Use This Pattern

### Decision Tree

```
Q: What kind of problem are you debugging?
├─ "Response doesn't match expectations"
│  → Use: Chat Debug View (check context + system prompt)
│  └─ Best for: Wrong context, missing instructions, unexpected tool calls
│
├─ "Why did the model choose that approach?"
│  → Use: Thinking Tokens (expand to read reasoning)
│  └─ Best for: Understanding model decision-making process
│
├─ "My customizations aren't being applied"
│  → Use: Diagnostics View (validate load status)
│  └─ Best for: Syntax errors, wrong file paths, configuration issues
│
├─ "Copilot not responding at all"
│  → Use: Extension Logs + Network Diagnostics
│  └─ Best for: Connectivity, authentication, infrastructure problems
│
└─ "External tools (MCP) not working"
   → Use: MCP Server Management (check status, view logs)
   └─ Best for: Server crashes, API failures, timeout issues
```

### Use This Pattern When

- Copilot responses don't match your expectations and you need to understand why
- You're writing custom instructions, agents, or skills and need to verify they're loading correctly
- You want to understand how the model interprets ambiguous prompts to improve clarity
- External tools (MCP servers) fail and you need to diagnose server-side issues
- Network, proxy, or authentication issues prevent Copilot from responding

### Don't Use This Pattern When

- Everything is working as expected → No need to add debugging overhead
- You're teaching Copilot basics to newcomers → Focus on usage patterns first (see [Copilot Chat](../copilot-chat/))
- Debugging would take longer than re-prompting → Quick iterations sometimes beat investigation

### Comparison with Related Features

| Aspect | Chat Debug View | Diagnostics View | Extension Logs | Thinking Tokens |
|--------|----------------|------------------|----------------|-----------------|
| **Best For** | Understanding request/response details | Validating customization files | Deep infrastructure debugging | Seeing model reasoning |
| **When to Use** | Response surprises, wrong context | Config not applying | Network/auth failures | Unexpected decisions |
| **Setup Time** | Instant (built-in command) | Instant (right-click menu) | 2 min (set log level) | Instant (setting toggle) |
| **Signal Depth** | Full request pipeline | Config load errors | Network/extension internals | Model thought process |

---

<!-- 🎬 MAJOR SECTION: Chat Debug View -->
## Chat Debug View: Complete Request Inspection

*See exactly what every AI request sends and receives—no black boxes*

### What It Shows

The Chat Debug view reveals every component of each AI interaction:

| Component | What You See |
|-----------|--------------|
| **System Prompt** | The base instructions that set up AI behavior |
| **User Prompt** | Your actual request as sent to the model |
| **Context** | Files, instructions, and other context sent to the model |
| **Tool Invocations** | Which tools were called and their responses |
| **Model Response** | The full response from the language model |

### How to Open

**Method 1: Chat View Menu**
1. Open the Chat view
2. Select the overflow menu (`...`)
3. Select **Show Chat Debug View**

**Method 2: Command Palette**
1. Open Command Palette (`Ctrl+Shift+P`)
2. Run **Developer: Show Chat Debug View**

Each section can be expanded to show full details—particularly valuable when using agents where multiple tools might be invoked as part of a single request. You'll see exactly which files were included as context, which instructions were applied, and how each tool contributed to the response.

### The Request Pipeline

When you send a chat message, here's what happens:

```
┌─────────────────────────────────────────────────────────────┐
│  1. YOUR PROMPT                                             │
│     "Add error handling to this function"                   │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│  2. CONTEXT ASSEMBLY                                        │
│     • Active file contents (implicit)                       │
│     • Selected text (implicit)                              │
│     • #file references (explicit)                           │
│     • @workspace results (explicit)                         │
│     • Loaded instructions (.github/copilot-instructions.md) │
│     • Active agent definition                               │
│     • Applicable skills                                     │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│  3. SYSTEM PROMPT CONSTRUCTION                              │
│     • Base Copilot instructions                             │
│     • Agent-specific instructions                           │
│     • Custom instructions from all sources                  │
│     • Tool definitions and capabilities                     │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│  4. MODEL INFERENCE                                         │
│     • Request sent to language model                        │
│     • Model may invoke tools                                │
│     • Tool results fed back to model                        │
│     • Response generated                                    │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│  5. RESPONSE DELIVERY                                       │
│     • Streamed to Chat view                                 │
│     • Code blocks formatted                                 │
│     • Actions available (Apply, Copy, etc.)                 │
└─────────────────────────────────────────────────────────────┘
```

### What to Look For in Debug View

**Context section:**
- Are the right files included?
- Is the context window full? (check token usage)
- Are instructions being loaded?

**Tool invocations:**
- Which tools were called?
- Did they succeed or fail?
- What data did they return?

**Response:**
- Does the model reference your instructions?
- Are patterns from your codebase being followed?

---

<!-- 🎬 MAJOR SECTION: Thinking Tokens -->
## Thinking Tokens: See the Model Reason (VS Code 1.109)

*Watch the model's reasoning process as it generates responses*

### What Are Thinking Tokens?

Some models (Claude, o-series) produce "thinking" content—internal reasoning steps before generating a response. VS Code 1.109 can now display these tokens, giving visibility into *how* the model approaches your request.

### Enabling Thinking Display

Setting: `chat.renderThinking`

Values:
- **"collapsed"** (default) — Thinking shown collapsed, expand on demand
- **"expanded"** — Thinking shown expanded automatically
- **"hidden"** — Thinking not displayed

### What Thinking Reveals

| Insight | Value |
|---------|-------|
| **Problem decomposition** | How the model breaks down your request |
| **Tool selection reasoning** | Why specific tools were chosen |
| **Context evaluation** | How files and instructions influenced decisions |
| **Uncertainty signals** | When the model considers multiple approaches |

### Debugging with Thinking

When results don't match expectations, thinking tokens reveal:
- Did the model misunderstand the request?
- Was relevant context overlooked?
- Did it consider the right approach but reject it?

**Example thinking output:**
```
Looking at the user's request to add error handling...
I see the function uses async/await pattern.
The project has a custom ErrorHandler class in utils/.
I should use that pattern for consistency.
Let me check if there are similar functions to match style...
```

Thinking tokens transform debugging from "why did it do that?" to "I see why it did that." For complex prompts or unexpected results, expanding the thinking section shows the model's decision process. This is particularly valuable when training teams on effective prompting—you can demonstrate how different prompts lead to different reasoning chains.

---

<!-- 🎬 MAJOR SECTION: Diagnostics View -->
## Customization Diagnostics: Configuration Validation

*Verify that custom agents, instructions, prompts, and skills are loading correctly*

### When Customizations Don't Apply

Custom agents, instructions, prompts, and skills can fail to load silently. The diagnostics view reveals:

- **All active customization files** and their locations
- **Load status** for each file (loaded, failed, skipped)
- **Error messages** for files that failed to load
- **Application order** for instructions

### How to Open

1. Right-click in the Chat view
2. Select **Diagnostics**

A markdown document opens showing the current state of all customization files.

### Enhanced Diagnostics (VS Code 1.109)

**Terminal Sandboxing Status:**
- Shows whether terminal sandboxing is enabled
- Indicates network and filesystem restrictions in effect
- Reveals tool availability (`awaitTerminal`, `killTerminal`)

**Attachment Optimization:**
- Reports which attachments were sent to the model
- Shows any optimization applied (large files, binary detection)
- Indicates when attachments were skipped

**Ask Questions Tool:**
- Indicates if `chat.askQuestions.enabled` is active
- Shows when model chose to ask clarifying questions
- Reveals question types available (single-select, multi-select, free text)

**Quick Feedback Submission:**
- Direct link to report issues from diagnostics
- Includes context for faster debugging
- Helps improve Copilot when things go wrong

### Common Issues Revealed

| Symptom | What Diagnostics Shows | Fix |
|---------|------------------------|-----|
| Agent not available | File failed to load due to syntax error | Check YAML frontmatter |
| Instructions ignored | File in wrong location | Move to `.github/` folder |
| Skills not triggering | Skill not matching `applyTo` pattern | Update glob pattern |
| Duplicate agents | Multiple files with same name | Rename or consolidate |

When you've written custom instructions or agents but Copilot isn't following them, the diagnostics view is your first stop. It shows exactly which files VS Code found, which loaded successfully, and which failed with specific error messages. This is especially valuable in complex projects with multiple instruction files across different directories.

---

<!-- 🎬 MAJOR SECTION: Extension Logs & MCP -->
## Deep Debugging: Extension Logs and MCP Servers

*Infrastructure-level troubleshooting for network, authentication, and external tool issues*

### Extension Logs: Trace Mode

For detailed debugging of extension behavior:

1. Open Command Palette (`Ctrl+Shift+P`)
2. Run **Developer: Set Log Level**
3. Set to **Trace** for:
   - GitHub Copilot
   - GitHub Copilot Chat

### Viewing Logs

1. Run **Output: Show Output Channels**
2. Select **GitHub Copilot** or **GitHub Copilot Chat** from dropdown
3. Review detailed logs in the Output panel

### What Logs Reveal

- Network requests and responses
- Extension initialization
- Authentication status
- Error stack traces
- Performance timing

### When to Use Logs

| Scenario | Use Logs For |
|----------|--------------|
| Copilot not responding | Check network connectivity, auth status |
| Slow responses | Identify bottlenecks, timeout issues |
| Extension crashes | Capture error stack traces |
| Inconsistent behavior | Track request/response patterns |

### MCP Server Troubleshooting

MCP servers extend Copilot with external capabilities. When they don't work:

1. Open Command Palette
2. Run **MCP: List Servers**
3. Select a server to see:
   - Status (running, stopped, error)
   - Available actions

**Available Actions:**
- **Show Output** — View server logs
- **Restart Server** — Restart a misbehaving server
- **Stop Server** — Shut down a server

### Common MCP Issues

| Issue | Diagnostic | Solution |
|-------|------------|----------|
| Server not starting | Check output logs | Fix configuration or dependencies |
| Tools not appearing | Verify server status | Restart server |
| Timeout errors | Check server performance | Optimize server or increase timeout |
| Authentication failures | Review credentials in logs | Update API keys |

### Network Diagnostics

For network, firewall, or VPN issues:

1. Open Command Palette (`Ctrl+Shift+P`)
2. Run **GitHub Copilot: Collect Diagnostics**
3. Review the diagnostic information that opens

**What It Checks:**
- Endpoint connectivity
- Proxy configuration
- Certificate validation
- Authentication tokens

**Sharing Diagnostics:** When reporting issues, include the diagnostic output. It contains anonymized connection details, configuration status, and error messages.

---

<!-- 🎬 MAJOR SECTION: Troubleshooting Patterns -->
## Systematic Troubleshooting Patterns

*Proven diagnostic workflows for common AI interaction problems*

### Pattern 1: "Copilot Ignores My Instructions"

**Diagnostic steps:**
1. Open **Diagnostics** (right-click in Chat)
2. Verify instruction file is listed and loaded
3. Open **Chat Debug View**
4. Check if instructions appear in the context section
5. Look for the "References" section in the chat response

**Common causes:**
- File not in correct location (`.github/copilot-instructions.md`)
- Syntax error in file (especially YAML frontmatter)
- Instructions too long, truncated due to context limits

### Pattern 2: "Wrong Files in Context"

**Diagnostic steps:**
1. Open **Chat Debug View**
2. Expand the context section
3. Review which files were actually included

**Common causes:**
- `@workspace` returned unexpected results
- `#file` path was incorrect
- Implicit context (active file) wasn't what you expected

### Pattern 3: "Tool Invocation Failed"

**Diagnostic steps:**
1. Open **Chat Debug View**
2. Expand tool invocations section
3. Check the error message or response

**Common causes:**
- MCP server not running
- Tool requires authentication
- Input format incorrect

### Pattern 4: "Response Doesn't Match Codebase Patterns"

**Diagnostic steps:**
1. Open **Chat Debug View**
2. Check what context was actually sent
3. Verify instructions mention the patterns you expect

**Common causes:**
- Relevant files not in context
- Instructions describe patterns but don't enforce them
- Model context window limit reached, older context truncated

### Context Window Awareness

Every model has a context window limit. When exceeded:
- Oldest context is truncated
- Instructions may be dropped
- File contents may be incomplete

**Monitoring Context Usage:** The chat input area shows a **context window indicator**. Hover to see token usage breakdown by category:

- System prompt tokens
- User messages tokens
- Context (files, instructions) tokens
- Remaining capacity

### Optimizing Context

| Problem | Solution |
|---------|----------|
| Context window full | Use more specific `#file` instead of `@workspace` |
| Important context dropped | Reference critical files explicitly |
| Long conversations losing context | Start new session or use `/compact` |
| Instructions consuming too much | Simplify or use conditional `applyTo` patterns |

---

## Real-World Use Cases

### Use Case 1: Custom Instructions Not Loading

**The Problem:** A team wrote custom instructions in `.github/copilot-instructions.md` to enforce coding standards, but Copilot generated code that violated those standards. Developers spent 45 minutes debugging prompts before checking configuration.

**The Solution:** Opened Diagnostics View (right-click → Diagnostics) and discovered YAML frontmatter syntax error on line 3—a missing colon after `applyTo`. File failed to load entirely.

**Implementation:**
1. Right-click in Chat view → Diagnostics
2. Review load status for `.github/copilot-instructions.md`
3. See error: "YAML parse error at line 3, column 15"
4. Fix syntax, verify file now shows "✅ Loaded"

**Outcome:** Fixed in 4 minutes instead of 45. **Savings: 41 minutes per configuration error** (team averaged 2/week = ~1.4 hours/week saved).

---

### Use Case 2: Context Window Full, Critical Files Dropped

**The Problem:** Complex refactoring request produced code that ignored a critical utility module. Manual review caught it, but developer couldn't understand why Copilot missed it.

**The Solution:** Opened Chat Debug View and discovered the context section showed 95% capacity—the utility module was truncated. Changed from `@workspace refactor payment flow` to explicit `#file src/utils/payment-helpers.ts` + targeted prompt.

**Implementation:**
1. Open Chat Debug View (Ctrl+Shift+P → Developer: Show Chat Debug View)
2. Expand "Context" section, check token usage
3. See warning: "Context window 95% full, 3 files truncated"
4. Identify missing critical file
5. Re-prompt with explicit `#file` reference

**Outcome:** Correct implementation on second attempt. **Lesson learned: Monitor context indicator before complex requests**. Team now checks context usage proactively—**reduced "missed context" incidents by 80%**.

---

### Use Case 3: MCP Server Timeout Causing Silent Failures

**The Problem:** Custom agent using an MCP server for database schema queries started failing intermittently. No error message appeared in chat—agent simply returned generic code without schema awareness.

**The Solution:** Used MCP: List Servers command, selected the database server, viewed output logs. Discovered connection timeout after 5 seconds due to VPN latency. Increased timeout in MCP configuration to 15 seconds.

**Implementation:**
1. Command Palette → MCP: List Servers
2. Select "Database Schema Server"
3. Click "Show Output"
4. Review logs: "Connection timeout after 5000ms"
5. Edit MCP config: increase `timeout` to 15000
6. Restart server via MCP interface

**Outcome:** Server reliability went from 60% to 99%. **Saved 3-5 agent retries per query** (20 queries/day = 1-1.5 hours saved daily for team of 4).

---

### Use Case 4: Thinking Tokens Reveal Prompt Ambiguity

**The Problem:** Request for "add caching" produced incorrect Redis implementation when team used in-memory caching. Developer couldn't understand why Copilot chose wrong approach.

**The Solution:** Enabled thinking token display (`chat.renderThinking: expanded`), re-ran request, read model reasoning: "User mentioned caching—Redis is industry standard for distributed systems." Realized prompt didn't specify in-memory requirement.

**Implementation:**
1. Settings → `chat.renderThinking` → "expanded"
2. Re-run original prompt
3. Read thinking tokens section
4. Identify ambiguity: "caching" interpreted as distributed
5. Refine prompt: "add in-memory caching using Map"

**Outcome:** Prompt refinement took 5 minutes with thinking tokens vs. 30 minutes of trial-and-error. **Thinking tokens reduced prompt debugging time by 80%** for complex requests.

---

## ✅ What You Can Do Today

**Immediate Actions (5 minutes):**
- [ ] Open Chat Debug View now: Make any request and examine the system prompt, context, and response sections
- [ ] Enable thinking display: Settings → `chat.renderThinking` → "expanded" to see model reasoning
- [ ] Check Diagnostics: Right-click in Chat view → Diagnostics to verify customization load status
- [ ] Bookmark commands: Save `Developer: Show Chat Debug View` and `MCP: List Servers` for quick access

**Short-Term Implementation (30 minutes):**
- [ ] Develop with Debug View open: Split editor, keep Debug View visible during prompt iteration
- [ ] Monitor context window: Watch the indicator before adding large context—catch truncation proactively
- [ ] Enable trace logs (if troubleshooting): Developer: Set Log Level → Trace for Copilot extensions
- [ ] Validate customizations: After adding/editing instructions, agents, or skills, check Diagnostics View immediately

**Advanced Exploration (1-2 hours):**
- [ ] Build debugging workflow: Create personal runbook for "unexpected response" → Debug View → Diagnostics → Logs progression
- [ ] Analyze thinking patterns: Review 10-15 thinking token outputs to understand common reasoning patterns for your prompts
- [ ] Set up MCP monitoring: If using external tools, establish weekly log review routine
- [ ] Create team documentation: Share common diagnostic patterns with team—standardize troubleshooting approach

**Next Steps After Completion:**
1. ✅ Make Chat Debug View a habit—open it for every unexpected result
2. 📖 Review [Copilot Chat](../copilot-chat/) for context and prompt engineering foundations
3. 💬 Share diagnostic wins with team—document surprising discoveries in thinking tokens or diagnostics
4. 🚀 Explore [Custom Agents Workshop](../../workshop/06-custom-agents/) to apply debugging to advanced customization

---

## Related Patterns

### Complementary Features

- **[Copilot Chat](../copilot-chat/)** — Foundation: Learn context mechanisms before debugging them
- **[Copilot Hooks](../copilot-hooks/)** — Governance: Use Debug View to inspect hook execution and validation
- **[Custom Agents Workshop](../../workshop/06-custom-agents/)** — Application: Debug agent tool invocations and customization issues
- **[Custom Instructions Workshop](../../workshop/01-instructions/)** — Configuration: Troubleshoot why instructions fail to load

### Decision Flow

**If this talk doesn't fit your needs:**

```
Q: What's your actual goal?
├─ Learn to use Copilot Chat effectively → See: Copilot Chat (basic usage)
├─ Build custom agents and tools → See: Custom Agents Workshop
├─ Govern agent behavior with policies → See: Copilot Hooks
└─ Optimize context and prompts → See: Context Engineering Foundations
```

See [DECISION-GUIDE.md](../DECISION-GUIDE.md) for complete navigation help.

---

## 📚 Official Documentation

**Primary Documentation:**
- 📖 **[Chat Debug View](https://code.visualstudio.com/docs/copilot/chat/chat-debug-view)** — Complete guide to request inspection and debugging
- 📖 **[Troubleshoot AI in VS Code](https://code.visualstudio.com/docs/copilot/troubleshooting)** — Comprehensive troubleshooting reference covering logs, diagnostics, customization, and MCP
- 📖 **[MCP Servers](https://code.visualstudio.com/docs/copilot/customization/mcp-servers)** — Configuring, debugging, and managing external tool servers

**Additional Resources:**
- 🔧 [Custom Instructions](https://code.visualstudio.com/docs/copilot/customization/custom-instructions) — Writing and debugging instruction files
- 🔧 [Copilot Agents](https://code.visualstudio.com/docs/copilot/customization/custom-agents) — Building and troubleshooting custom agent configurations
- 💬 [GitHub Copilot for VS Code Discussions](https://github.com/microsoft/vscode-discussions/discussions/categories/copilot) — Community help and troubleshooting patterns

**GitHub Resources:**
- 📋 [VS Code Release Notes](https://code.visualstudio.com/updates) — Latest diagnostic features and improvements
- 🐙 [VS Code Copilot Docs Repository](https://github.com/microsoft/vscode-docs/tree/main/docs/copilot) — Documentation source (submit corrections via PR)

---

## 🎭 Behind the Scenes

*For those who want to understand the deeper mechanics*

### How Context Window Management Works

VS Code implements a **priority-based truncation system** when context exceeds model limits:

1. **Highest Priority**: System prompts and agent definitions (never truncated)
2. **High Priority**: Explicit user references (`#file`, `@workspace` results)
3. **Medium Priority**: Custom instructions and loaded skills
4. **Low Priority**: Implicit context (active file, selection)
5. **Lowest Priority**: Older conversation history

When the context window approaches capacity, VS Code removes content from lowest priority first. **The context indicator warns at 80% capacity** — giving you time to simplify before critical content gets dropped.

**Why This Matters:** Understanding truncation order explains why instructions sometimes disappear in long conversations, why explicit `#file` references override implicit context, and why starting fresh sessions improves reliability for complex tasks.

### Token Counting Precision

The context window indicator uses **approximate token counting** based on the current model's tokenizer. This means:

- Character counts ≠ token counts (GPT-4 averages ~4 chars/token, Claude ~3.5 chars/token)
- Code tokens are denser than prose (more information per token)
- The indicator shows "safe zone" at 80% to account for estimation variance

In production, the server performs precise tokenization and may truncate slightly differently than the local estimator predicts—but the 80% warning provides sufficient margin.

### Thinking Token Processing

Thinking tokens are **generated during inference, not post-hoc**. Models that support thinking content produce two parallel streams:

1. **Thinking stream**: Internal reasoning (visible in Debug View when enabled)
2. **Response stream**: External answer (visible in Chat)

VS Code subscribes to both streams and can render them independently. Setting `chat.renderThinking` to "hidden" doesn't prevent thinking generation—it only controls display. The model still "thinks," you just don't see it.

**Performance implication:** Thinking tokens consume context window space and increase inference time. For high-throughput workflows, disabling thinking display doesn't improve performance—you'd need to use a non-thinking model variant.

### Diagnostics Load Timing

The Diagnostics View reflects **current load state**, not historical. This means:

- Files that failed to load on startup show errors
- Files added after VS Code opened won't appear until next reload
- Syntax errors are detected at parse time, not invocation time

**Best practice:** After editing any customization file, trigger a reload (**Developer: Reload Window**) then check Diagnostics View to verify the new version loaded successfully.

### MCP Server Lifecycle

MCP servers run as **separate processes managed by VS Code**. The lifecycle:

1. **Startup**: Launched on first tool invocation or VS Code start (if configured)
2. **Heartbeat**: VS Code pings every 30 seconds to verify responsiveness
3. **Crash Recovery**: Auto-restart on crash (up to 3 attempts)
4. **Shutdown**: Graceful termination on VS Code exit

**Tool Availability**: If a server crashes and fails auto-restart, **tools disappear silently from chat**. The Diagnostics View and MCP: List Servers command are the only ways to detect this condition—chat won't warn you the tool is unavailable.

**Why This Matters:** Silent tool unavailability explains "why isn't my agent using the database tool anymore?" scenarios. Always check MCP server status when external tool behavior changes.

---

## Best Practices for Observability

### Develop with Debug View Open

When writing prompts or customizations:
1. Keep Chat Debug View open in a split
2. Watch context assembly in real-time
3. Iterate based on what you actually see

### Regular Diagnostics Checks

After adding new customizations:
1. Open Diagnostics to verify loading
2. Run a test prompt
3. Check Debug View to confirm application

### Log Strategic Moments

Enable trace logs when:
- Setting up new MCP servers
- Debugging authentication issues
- Investigating performance problems

### Document Working Patterns

When you find effective prompts:
- Note what context was included
- Record which instructions were active
- Save the Debug View output for reference
