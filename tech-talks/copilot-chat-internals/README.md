# Under the Hood: Copilot Chat Internals

Understand what Copilot actually sees—system prompts, context loading, tool invocations—and how to troubleshoot when things don't work as expected

---

## The Visibility Problem

### Key Points

- **Black box frustration**
  When prompts don't produce expected results, developers can't see why

- **Context mystery**
  Which files were actually sent? Were instructions loaded? Did tools execute?

- **Trial-and-error debugging**
  Without visibility, improving prompts becomes guesswork

- **Customization uncertainty**
  Are my agents, instructions, and skills actually being applied?

### Narrative

Developers invest time crafting prompts, writing instructions, and configuring agents—but when results disappoint, they have no visibility into what went wrong. Was the context insufficient? Did the instructions fail to load? Did a tool invocation return an error? Without understanding what Copilot actually sees and does, improving AI interactions becomes frustrating guesswork. VS Code provides powerful diagnostic tools that reveal exactly what happens behind every chat request. Mastering these tools transforms debugging from trial-and-error into systematic investigation.

---

## Chat Debug View: The X-Ray for AI Requests

### What It Shows

The Chat Debug view reveals everything about each AI interaction:

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

### Narrative

The Chat Debug view is your window into how Copilot interprets every request. Each section can be expanded to show full details—particularly valuable when using agents where multiple tools might be invoked as part of a single request. You'll see exactly which files were included as context, which instructions were applied, and how each tool contributed to the response.

---

## Anatomy of a Chat Request

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

---

## Thinking Tokens: See the Model Reason (VS Code 1.109)

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

### Narrative

Thinking tokens transform debugging from "why did it do that?" to "I see why it did that." For complex prompts or unexpected results, expanding the thinking section shows the model's decision process. This is particularly valuable when training teams on effective prompting—you can demonstrate how different prompts lead to different reasoning chains.

---

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

## Chat Customization Diagnostics

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

### Narrative

When you've written custom instructions or agents but Copilot isn't following them, the diagnostics view is your first stop. It shows exactly which files VS Code found, which loaded successfully, and which failed with specific error messages. This is especially valuable in complex projects with multiple instruction files across different directories.

---

## Extension Logs: Deep Debugging

### Enabling Trace Logs

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

---

## MCP Server Troubleshooting

### When External Tools Fail

MCP servers extend Copilot with external capabilities. When they don't work:

1. Open Command Palette
2. Run **MCP: List Servers**
3. Select a server to see:
   - Status (running, stopped, error)
   - Available actions

### Available Actions

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

---

## Troubleshooting Patterns

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

---

## Context Window Awareness

### Understanding Token Limits

Every model has a context window limit. When exceeded:
- Oldest context is truncated
- Instructions may be dropped
- File contents may be incomplete

### Monitoring Context Usage

**New in VS Code 1.109:** The chat input area shows a **context window indicator**. Hover to see token usage breakdown by category:

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

## Mermaid Diagram Support (VS Code 1.109)

### Visual Responses

Copilot can now render Mermaid diagrams directly in chat responses:

- **Flowcharts** — Process flows, decision trees
- **Sequence diagrams** — API interactions, request flows
- **Class diagrams** — Code architecture visualization
- **State diagrams** — State machine representations

### Prompting for Diagrams

**Effective prompts:**
- "Show me a sequence diagram of the authentication flow"
- "Create a flowchart of the order processing logic"
- "Visualize the class hierarchy for the payment module"

### Debugging with Diagrams

When investigating complex interactions:
1. Ask Copilot to diagram the current flow
2. Identify where expectations diverge from reality
3. Use the visual as shared understanding

### In Debug View

The raw Mermaid code appears in the response section of Debug View, allowing you to:
- Copy and modify diagrams
- Understand exactly what was generated
- Reuse in documentation

---

## Network Diagnostics

### When Copilot Can't Connect

For network, firewall, or VPN issues:

1. Open Command Palette (`Ctrl+Shift+P`)
2. Run **GitHub Copilot: Collect Diagnostics**
3. Review the diagnostic information that opens

### What It Checks

- Endpoint connectivity
- Proxy configuration
- Certificate validation
- Authentication tokens

### Sharing Diagnostics

When reporting issues, include the diagnostic output. It contains:
- Anonymized connection details
- Configuration status
- Error messages

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

---

## Key Takeaways

### Core Insights

1. **Visibility enables improvement** — You can't fix what you can't see
2. **Debug View is essential** — System prompts, context, tool invocations all visible
3. **Thinking tokens reveal reasoning** — See *why* the model made decisions (1.109)
4. **Diagnostics catches config issues** — Load failures, syntax errors, wrong paths
5. **Context window matters** — Monitor usage, optimize what's sent
6. **Mermaid diagrams visualize flows** — Request visual explanations (1.109)
7. **Logs for deep issues** — Network, auth, and extension problems

### Narrative

The difference between frustrating trial-and-error and systematic debugging is visibility. VS Code provides complete transparency into Copilot's behavior through the Chat Debug View, customization diagnostics, and extension logs. Developers who master these tools can quickly identify why prompts fail, verify customizations are applied, and optimize their AI interactions. Make opening the Debug View a habit—understanding what Copilot actually sees is the fastest path to getting the results you want.

---

## Getting Started

### Immediate Actions

1. **Open Chat Debug View now** — Make a request and examine every section
2. **Enable thinking display** — Set `chat.renderThinking` to "expanded" to see reasoning
3. **Check Diagnostics** — Right-click in Chat to verify your customizations
4. **Monitor context window** — Watch the indicator as you add context

### Next Steps

1. **Enable trace logs** when debugging complex issues
2. **Review MCP server status** if using external tools
3. **Develop with Debug View visible** to iterate faster
4. **Request Mermaid diagrams** for complex flow visualization

---

## Resources

**Official Documentation:**
- [Chat Debug View](https://code.visualstudio.com/docs/copilot/chat/chat-debug-view) — Detailed guide to the debug view
- [Troubleshoot AI in VS Code](https://code.visualstudio.com/docs/copilot/troubleshooting) — Complete troubleshooting reference
- [MCP Servers](https://code.visualstudio.com/docs/copilot/customization/mcp-servers) — Configuring and debugging MCP
- [Custom Instructions](https://code.visualstudio.com/docs/copilot/customization/custom-instructions) — Writing effective instructions

**Related Tech Talks:**
- [Copilot Chat: Context Mastery](../copilot-chat/README.md) — Foundation for understanding context mechanisms
