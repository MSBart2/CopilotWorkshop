---
theme: ./theme
title: "MCP Apps: Rich Interactive UI in Chat"
class: text-center
highlighter: shiki
lineNumbers: true
drawings:
  persist: false
transition: slide-left
mdc: true
overviewSnapshots: true
---

# MCP Apps
## Rich Interactive UI in Chat

<div class="abs-bottom-2 text-sm opacity-50">
⏱️ 40 minutes
</div>

---
layout: default
---

# The Question This Talk Answers

<div class="text-xl mt-8 text-center">

*"How do I create interactive visualizations and UI components within chat instead of exporting data to external tools?"*

</div>

<div class="mt-12 text-center opacity-75">
<carbon-chart-line class="text-6xl inline-block" />
<carbon-table class="text-6xl inline-block ml-8" />
<carbon-tree-view class="text-6xl inline-block ml-8" />
</div>

---
layout: table-of-contents
---

# What We'll Cover

<div class="grid grid-cols-2 gap-8 mt-8">

<div v-click>
<div class="toc-card" name="component-types">
<carbon-application class="text-3xl mb-2" />
<div class="font-bold text-lg">Component Types</div>
<div class="text-sm opacity-75">Charts, tables, forms, trees, cards</div>
</div>
</div>

<div v-click>
<div class="toc-card" name="building">
<carbon-code class="text-3xl mb-2" />
<div class="font-bold text-lg">Building MCP Apps</div>
<div class="text-sm opacity-75">Server structure and callbacks</div>
</div>
</div>

<div v-click>
<div class="toc-card" name="patterns">
<carbon-light-filled class="text-3xl mb-2" />
<div class="font-bold text-lg">Real-World Patterns</div>
<div class="text-sm opacity-75">Practical implementation examples</div>
</div>
</div>

<div v-click>
<div class="toc-card" name="integration">
<carbon-connect class="text-3xl mb-2" />
<div class="font-bold text-lg">Integration</div>
<div class="text-sm opacity-75">Agents, skills, and memory</div>
</div>
</div>

</div>

---
layout: two-cols
---

# The Problem

<div class="text-sm">

### Data visualization trapped in text
Charts, tables, diagrams rendered as ASCII or markdown—hard to read, impossible to interact with

### No interactive elements
Can't click, filter, sort without leaving chat and opening external tools

### Context switching for visuals
Copy data to spreadsheets, export to visualization tools—**5-10 minute detour per query**

### Static responses
Can't explore data differently without crafting new prompts and starting over

</div>

::right::

<div class="ml-4 mt-16 text-center">

```
┌─────────────────────────────┐
│ Sales by Region (ASCII)     │
├─────────────────────────────┤
│ North  ████████████ 45,000  │
│ South  ████████████ 52,000  │
│ East   ████████████ 61,000  │
│ West   ████████████ 58,000  │
└─────────────────────────────┘
```

<div class="text-2xl mt-8 mb-4">⬇️</div>

<div class="text-sm opacity-75">
Copy to Excel → Create chart<br/>
→ Realize need different date range<br/>
→ Return to chat → Repeat
</div>

<div class="mt-4 text-red-500 font-bold">
15 minutes lost per analysis
</div>

</div>

---
layout: default
---

# The Solution: MCP Apps

<div class="grid grid-cols-2 gap-8 mt-8">

<div>

### What It Does

MCP Apps extend Model Context Protocol to return **rich UI component specifications** instead of plain text

Components render directly in VS Code chat with **full interactivity** preserved

<div class="mt-4 text-sm opacity-75">
When model calls MCP tool, server responds with interactive elements that VS Code renders inline
</div>

</div>

<div>

### Key Capabilities

- 📊 **Interactive Charts**: Bar, line, pie with hover, zoom, drill-down
- 📋 **Data Tables**: Sortable, filterable, paginated grids
- 📝 **Input Forms**: Validated data collection with callbacks
- 🌲 **Hierarchical Trees**: Expandable file/folder views
- 🎴 **Rich Cards**: Grid/list layouts with images and actions
- 🎨 **Custom Components**: Sandboxed HTML/CSS/JS

</div>

</div>

<div class="mt-8 text-center text-sm opacity-75">
<carbon-arrow-right class="inline-block" /> Architecture: Prompt → MCP Tool → Component Spec → VS Code Render → User Interaction → Callback
</div>

---
layout: default
---

# Mental Model Shift

<div class="grid grid-cols-3 gap-4 mt-8 text-sm">

<div class="border-2 border-green-500 p-4 rounded">
<div class="font-bold text-green-500 mb-3">✅ Move Toward</div>

**Component-First Responses**
Return UI components for visual data, not markdown tables

**Progressive Disclosure**
Summary visualizations first, drill-down through interactions

**Callback-Driven Updates**
Form submissions trigger new MCP tool calls

**Inline Data Exploration**
Filter, sort, paginate without new prompts → **5-10x faster**

</div>

<div class="border-2 border-yellow-500 p-4 rounded">
<div class="font-bold text-yellow-500 mb-3">⚠️ Move Away From</div>

**ASCII Art Charts**
Rendering bar charts with █ characters

**"Export to CSV" Workflows**
Instructing users to copy data and visualize externally

**Static Code Blocks**
Returning HTML that users must save and open in browser

</div>

<div class="border-2 border-red-500 p-4 rounded">
<div class="font-bold text-red-500 mb-3">🛑 Move Against</div>

**Massive Markdown Tables**
500-row tables as text exceeds context window

**Unsandboxed Custom HTML**
Arbitrary HTML/JS without iframe isolation → XSS vulnerabilities

</div>

</div>

<div class="mt-6 text-center text-sm opacity-75 italic">
Before: Show sales → 180-line table → Copy to Excel → 12 min | After: Interactive chart renders → Click to filter → 45 sec
</div>

---
layout: default
---

# When to Use MCP Apps

<div class="grid grid-cols-2 gap-8 mt-6">

<div>

### Decision Tree

```
Q: What type of data?
├─ Visual/Quantitative
│  → Use MCP Apps charts
│
├─ Tabular with >20 rows
│  → Use MCP Apps table
│
├─ Structured input needed
│  → Use MCP Apps form
│
├─ Hierarchical navigation
│  → Use MCP Apps tree
│
└─ Simple text/code
   → Use standard text
```

</div>

<div class="text-sm">

### Use When

✅ Presenting naturally visual data (charts, graphs)<br/>
✅ Tables with >20 rows needing sort/filter<br/>
✅ Collecting validated structured input<br/>
✅ Navigating hierarchical data<br/>
✅ User benefits from inline exploration

### Don't Use When

❌ Output is <100 lines of text/code<br/>
❌ No interactive benefit<br/>
❌ Mobile/accessibility primary concern<br/>
❌ Network-constrained environments

<div class="mt-4 text-xs opacity-50">

| Aspect | MCP Apps | Standard Text | External Tools |
|--------|----------|---------------|----------------|
| **Best For** | Visual/tabular | Code, explanations | Heavy analysis |
| **Interaction** | Inline (sort, filter) | None | Full (separate app) |
| **Setup Time** | 30-60 min | None | Varies |

</div>

</div>

</div>

---
layout: section
name: component-types
---

# Component Types Deep-Dive
## Five built-in components for most visualization needs

---
layout: two-cols
---

# Charts: Data Visualization

<div class="text-sm">

Interactive charts with **hover, zoom, drill-down**

### Capabilities
- 📍 Hover for exact values
- 📈 5 chart types: bar, line, pie, scatter, area
- 🎨 Custom styling and colors
- 📱 Responsive resizing

### Use When
- Time-series data
- Comparisons
- Distributions
- Trends

</div>

::right::

<div class="text-xs ml-4">

```typescript
return {
  content: [{
    type: "component",
    component: {
      type: "chart",
      chartType: "bar",  // line, pie, scatter, area
      title: "Monthly Revenue Trend",
      data: [
        { label: "Jan", value: 45000 },
        { label: "Feb", value: 52000 },
        { label: "Mar", value: 61000 },
        { label: "Apr", value: 58000 }
      ],
      options: {
        interactive: true,
        colors: ["#4CAF50"],
        showLegend: true,
        animation: true
      }
    }
  }]
};
```

</div>

---
layout: two-cols
---

# Tables: Interactive Grids

<div class="text-sm">

Sortable, filterable with **pagination and export**

### Capabilities
- ⬆️⬇️ Click headers to sort
- 🔍 Full-text search
- 🎯 Column-specific filters
- 📄 Pagination (10/25/50/100)
- 💾 CSV export
- 📅 Type-aware (dates, numbers)

### Use When
Displaying **>20 rows** where users need to find, sort, or filter records

</div>

::right::

<div class="text-xs ml-4">

```typescript
return {
  content: [{
    type: "component",
    component: {
      type: "table",
      title: "Active Users",
      columns: [
        { key: "name", label: "Name", sortable: true },
        { key: "email", label: "Email", sortable: true },
        { key: "role", label: "Role", filterable: true },
        { key: "lastActive", label: "Last Active", 
          sortable: true, type: "date" }
      ],
      data: [
        { name: "Alice Chen", email: "alice@ex.com", 
          role: "Admin", lastActive: "2025-02-06T10:30:00Z" },
        { name: "Bob Smith", email: "bob@ex.com", 
          role: "User", lastActive: "2025-02-05T14:20:00Z" }
      ],
      options: {
        pagination: true,
        pageSize: 10,
        searchable: true,
        exportable: true
      }
    }
  }]
};
```

</div>

---
layout: two-cols
---

# Forms & Trees

<div class="text-sm">

### Forms: Structured Input

**Collect validated user input** with type-aware fields

- ✅ Validation: required fields, patterns
- 📝 Field types: text, email, number, select, checkbox
- ❗ Inline error messages
- 🔄 Submit callback to MCP tool

**Use when:** Multi-field data collection with validation

</div>

::right::

<div class="text-sm ml-4">

### Trees: Hierarchical Navigation

**Expandable tree views** for nested data

- 📁 Expand/collapse nodes
- 🎨 File-type icons
- 🖱️ Selection callbacks
- 🔄 Lazy loading children

**Use when:** File systems, org charts, nested categories

</div>

<div class="mt-4 text-xs opacity-75 col-span-2">

```typescript
// Form with callback
{ type: "form", title: "Create User", fields: [...], onSubmit: "process-user-creation" }

// Tree with selection
{ type: "tree", title: "Project Files", data: [...], options: { onSelect: "open-file" } }
```

</div>

---
layout: section
name: building
---

# Building MCP Apps
## Complete server implementation and callbacks

---
layout: default
---

# Basic MCP Server Structure

<div class="grid grid-cols-2 gap-6 text-xs">

<div>

```typescript
// src/index.ts
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

const server = new Server({
  name: "my-mcp-app",
  version: "1.0.0"
}, {
  capabilities: {
    tools: {}
  }
});

// Define tool that returns chart
server.setRequestHandler("tools/list", async () => ({
  tools: [{
    name: "show-metrics",
    description: "Display project metrics as interactive charts",
    inputSchema: {
      type: "object",
      properties: {
        timeRange: {
          type: "string",
          enum: ["day", "week", "month"]
        }
      }
    }
  }]
}));
```

</div>

<div>

```typescript
// Handle tool call
server.setRequestHandler("tools/call", async (request) => {
  if (request.params.name === "show-metrics") {
    const { timeRange } = request.params.arguments;
    const data = await fetchMetrics(timeRange);

    return {
      content: [{
        type: "component",  // Key: return component
        component: {
          type: "chart",
          chartType: "line",
          title: `Project Metrics (${timeRange})`,
          data: data,
          options: {
            interactive: true,
            showLegend: true
          }
        }
      }]
    };
  }
});

const transport = new StdioServerTransport();
await server.connect(transport);
```

</div>

</div>

<div class="mt-4 text-sm text-center opacity-75">
Return `type: "component"` in content array → VS Code detects and renders
</div>

---
layout: default
---

# Callback Handling

<div class="grid grid-cols-2 gap-6 text-xs">

<div>

### Form with Callback

```typescript
// Tool returns form with onSubmit callback
{
  name: "create-user-form",
  description: "Show user creation form"
}

// Form response
return {
  content: [{
    type: "component",
    component: {
      type: "form",
      title: "Create New User",
      fields: [
        { name: "username", type: "text", required: true },
        { name: "email", type: "email", required: true }
      ],
      submitLabel: "Create",
      onSubmit: "process-user-creation"  // Callback tool
    }
  }]
};
```

</div>

<div>

### Callback Handler

```typescript
// Define callback tool
{
  name: "process-user-creation",
  description: "Process user creation from form",
  inputSchema: {
    type: "object",
    properties: {
      username: { type: "string" },
      email: { type: "string" }
    }
  }
}

// Handle callback
if (request.params.name === "process-user-creation") {
  const { username, email } = request.params.arguments;
  await createUser(username, email);

  return {
    content: [{
      type: "text",
      text: `✅ User ${username} created successfully!`
    }]
  };
}
```

</div>

</div>

<div class="mt-4 text-center text-sm opacity-75">
Workflow: Form render → User submit → VS Code calls MCP tool → Process data → Return confirmation
</div>

---
layout: default
---

# Configuration in VS Code

<div class="grid grid-cols-2 gap-8 mt-6">

<div>

### Add to `.vscode/mcp.json`

```json
{
  "servers": {
    "my-metrics-app": {
      "type": "stdio",
      "command": "node",
      "args": [
        "${workspaceFolder}/mcp-apps/dist/index.js"
      ]
    }
  }
}
```

### Testing Steps

1. Build MCP server: `npm run build`
2. Restart VS Code or run `MCP: Restart Server`
3. In chat: `#my-metrics-app show-metrics --timeRange month`
4. Component renders inline ✅

</div>

<div class="text-sm">

### Component Schema

All components follow this base:

```typescript
interface ComponentContent {
  type: "component";
  component: {
    type: "chart" | "table" | "form" 
          | "tree" | "cards" | "custom";
    title?: string;
    // Type-specific properties
    data?: any;
    options?: {
      interactive?: boolean;
      // Type-specific options
    };
  };
}
```

**Common patterns:**
- `data` holds content (rows, nodes, points)
- `options` control behavior
- `onSubmit`/`onSelect` specify callbacks

</div>

</div>

---
layout: section
name: patterns
---

# Real-World Patterns
## Practical use cases that demonstrate value

---
layout: two-cols
---

# Dashboard & Drill-Down

<div class="text-sm">

### Multi-Component Dashboard

**Pattern:** Single query returns comprehensive dashboard

```typescript
return {
  content: [
    { type: "component", component: {
      type: "chart", title: "Commits by Author",
      data: authorStats }},
    { type: "component", component: {
      type: "table", title: "Recent PRs",
      data: recentPRs }}
  ]
};
```

**Benefit:** Comprehensive view in single response, no context-switch

</div>

::right::

<div class="text-sm ml-4">

### Progressive Drill-Down

**Pattern:** Chart with callback to show detail table

```typescript
// Initial chart with onClick callback
{
  type: "chart",
  title: "Sales by Region",
  data: regionSales,
  options: {
    onClick: "show-region-details"
  }
}

// Callback returns detailed table
if (name === "show-region-details") {
  const { region } = arguments;
  return {
    type: "table",
    title: `${region} Sales Details`,
    data: fetchDetails(region)
  };
}
```

**Benefit:** Summary → Details without new prompt

</div>

---
layout: two-cols
---

# Form-Driven Workflows

<div class="text-sm">

### Multi-Step Guided Process

**Pattern:** Form collects config → generates code

```typescript
// Step 1: Show form
{
  type: "form",
  title: "Configure New API Endpoint",
  fields: [
    { name: "path", type: "text", required: true },
    { name: "method", type: "select", 
      options: ["GET", "POST", "PUT", "DELETE"] },
    { name: "auth", type: "checkbox", 
      label: "Require authentication" }
  ],
  onSubmit: "generate-endpoint-code"
}
```

</div>

::right::

<div class="text-sm ml-4">

```typescript
// Step 2: Generate and show code
if (name === "generate-endpoint-code") {
  const { path, method, auth } = arguments;
  const code = generateEndpointCode(path, method, auth);

  return {
    content: [{
      type: "text",
      text: `\`\`\`typescript\n${code}\n\`\`\``
    }]
  };
}
```

**Benefit:** Structured input collection, guided workflows, validation

</div>

---
layout: default
---

# Real-World Use Cases

<div class="grid grid-cols-3 gap-4 text-xs">

<div class="border-2 border-blue-500 p-3 rounded">

### System Metrics Dashboard

**Problem:** DevOps team queries Prometheus → Export CSV → Import Grafana → 15-20 min per analysis

**Solution:** MCP App queries Prometheus, returns interactive dashboard

```typescript
return {
  content: [
    { type: "component", component: 
      { type: "chart", title: "CPU Usage", 
        data: cpuData }},
    { type: "component", component: 
      { type: "chart", title: "Memory", 
        data: memData }},
    { type: "component", component: 
      { type: "table", title: "Error Logs", 
        data: errors }}
  ]
};
```

**Outcome:** **15-20 min → 90 sec**
Team analyzes 8x more frequently, catches issues 40% faster

</div>

<div class="border-2 border-green-500 p-3 rounded">

### Database Query Results

**Problem:** Analysts query DB, receive 500-row text, copy to Excel for filtering → 10 min per query × 30 queries/day

**Solution:** MCP App returns interactive table

```typescript
return {
  content: [{
    type: "component",
    component: {
      type: "table",
      title: "Query Results",
      columns: resultColumns,
      data: resultRows,
      options: {
        sortable: true,
        searchable: true,
        exportable: true,
        pagination: true
      }
    }
  }]
};
```

**Outcome:** **10 min → 2 min per query**
240 minutes saved per day (3-person team)

</div>

<div class="border-2 border-purple-500 p-3 rounded">

### Project Scaffolding Forms

**Problem:** Developers create microservices → 20-min Slack thread with infra team → Manual setup

**Solution:** MCP App form collects structured input, generates scaffold

```typescript
return {
  content: [{
    type: "component",
    component: {
      type: "form",
      title: "New Microservice Config",
      fields: [
        { name: "serviceName", type: "text" },
        { name: "language", type: "select", 
          options: ["TypeScript", "Python", "Go"] },
        { name: "database", type: "select" }
      ],
      onSubmit: "generate-scaffold"
    }
  }]
};
```

**Outcome:** **20-min Slack → 3-min form**
100% config accuracy, self-serve without infra bottleneck

</div>

</div>

---
layout: section
name: integration
---

# Integration with VS Code
## Combining MCP Apps with agents, skills, and memory

---
layout: default
---

# Integration Patterns

<div class="grid grid-cols-3 gap-6 text-sm">

<div>

### With Custom Agents

Agents leverage MCP Apps for visualization

```markdown
---
name: data-analyst
tools: ['analytics-dashboard']
mcp-servers:
  - name: analytics-app
    tools: ['show-metrics', 'show-table']
---

You are a data analyst.
When presenting quantitative data,
always use interactive charts
or tables from analytics-app.
```

**User:** "Analyze last month's sales"<br/>
**Agent:** Calls `analytics-app.show-metrics` → Interactive chart

</div>

<div>

### With Agent Skills

Skills include MCP Apps tools in workflow

```markdown
---
name: code-review-reporter
tools: ['fs', 'git', 'review-dashboard/*']
---

When generating reports:
1. Use `fs` to read files
2. Use `git` for commits
3. Use `review-dashboard/show-complexity`
   for complexity chart
4. Use `review-dashboard/show-coverage`
   for test coverage table
```

</div>

<div>

### With Copilot Memory

Memory stores dashboard preferences

```
User: "Remember I prefer
      bar charts over pie charts"
Agent: Stores preference

Future: "Show sales data"
Agent: Retrieves preference
      → Uses bar chart component
```

</div>

</div>

<div class="mt-8 text-center text-xs opacity-75">
MCP Apps integrate seamlessly with all VS Code Copilot customization features
</div>

---
layout: default
---

# Best Practices

<div class="grid grid-cols-3 gap-4 text-xs">

<div class="border-2 border-blue-500 p-3 rounded">

### Design

**Progressive disclosure**
Show summary first, enable drill-down on interaction

**Responsive layouts**
Components adapt to chat panel width

**Theme awareness**
Use VS Code CSS variables
```css
var(--vscode-foreground)
var(--vscode-editor-background)
```

**Loading states**
Show skeleton/spinner for async data

</div>

<div class="border-2 border-green-500 p-3 rounded">

### Performance

**Paginate large datasets**
Don't render 10,000 rows at once

**Lazy load images**
Load visible content first

**Cache queries**
MCP server-side caching for repeated requests

**Optimize re-renders**
Only update changed data

</div>

<div class="border-2 border-red-500 p-3 rounded">

### Security

**Sandbox custom HTML**
Always use `sandbox: true` for custom components

**Validate inputs**
Sanitize form data before processing

**Rate limit**
Prevent abuse of callback tools

**No sensitive data in logs**
Scrub credentials from component specs

</div>

</div>

---
layout: default
---

# What You Can Do Today

<div class="grid grid-cols-2 gap-8 mt-6">

<div class="text-sm">

### Immediate Actions (15 min)

- [ ] **Install MCP Apps Playground**
  ```bash
  git clone https://github.com/modelcontextprotocol/servers
  cd mcp-apps-playground
  npm install
  ```

- [ ] **Add to `.vscode/mcp.json`**
  Follow [setup instructions](https://github.com/modelcontextprotocol/servers#readme)

- [ ] **Test in chat**
  ```
  @mcp-apps-playground show me the chart demo
  ```

</div>

<div class="text-sm">

### Short-Term (1 hour)

- [ ] Identify one "export to CSV" workflow
- [ ] Build MCP server returning table/chart for that data source
- [ ] Test with 2-3 colleagues, measure time savings

### Advanced (2-4 hours)

- [ ] Build multi-step form workflow
- [ ] Implement callback tools for drill-down
- [ ] Integrate MCP Apps with custom agent

</div>

</div>

<div class="mt-8 text-center text-sm">

**Next Steps:** ✅ Complete immediate actions → 📖 Review [MCP SDK docs](https://github.com/modelcontextprotocol/typescript-sdk) → 💬 Share with team

</div>

---
layout: default
---

# Related Patterns

<div class="grid grid-cols-2 gap-8 mt-8">

<div>

### Complementary Features

- **MCP Servers Workshop** — MCP fundamentals, tool development, configuration
- **Custom Agents** — Building agents that leverage MCP Apps for visualization
- **Agent Skills** — Packaging MCP Apps workflows as reusable skills

### Decision Flow

```
Q: What's your actual goal?
├─ Need custom tools (not visualizations)
│  → See: MCP Servers Workshop
├─ Need agent orchestration with visualization
│  → Combine: Custom Agents + MCP Apps
└─ Need organization-wide deployment
   → See: Enterprise Patterns
```

</div>

<div>

### Official Documentation

**Primary:**
- 📖 [MCP Apps Blog Post](https://code.visualstudio.com/blogs/2026/01/26/mcp-apps-support) — Intro and capabilities
- 📖 [VS Code MCP Servers Documentation](https://code.visualstudio.com/docs/copilot/customization/mcp-servers) — Integration guide
- 📖 [Model Context Protocol Spec](https://modelcontextprotocol.io/) — Core protocol

**Resources:**
- 🐙 [MCP Apps Playground](https://github.com/modelcontextprotocol/servers) — Working examples
- 🐙 [MCP TypeScript SDK](https://github.com/modelcontextprotocol/typescript-sdk) — Build servers

</div>

</div>

---
layout: end
---

# MCP Apps
## Rich Interactive UI in Chat

<div class="mt-8 text-center opacity-75">
Eliminate context-switching<br/>
Transform chat into visual workspace<br/>
Explore data inline
</div>

<div class="abs-bottom-4 text-sm opacity-50 text-center w-full">
Questions?
</div>
