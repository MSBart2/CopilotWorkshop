# MCP Apps: Rich UI in Chat Responses

Transform chat responses from text-only to interactive visual experiences with component-based MCP tools

---

## The Text-Only Limitation

### Key Points

- **Data visualization trapped in text**
  Tables, charts, and diagrams rendered as ASCII or markdown—hard to read, impossible to interact with

- **No interactive elements**
  Can't click, filter, sort, or drill down into results

- **Context switching for visuals**
  Need to export data, open other tools, create visualizations manually

- **Static responses**
  Once generated, can't explore data differently without new prompts

### Narrative

Traditional chat responses are text. Even when discussing visual data—charts, diagrams, tables with hundreds of rows—the output is markdown or ASCII art. Developers copy data to spreadsheets, export to visualization tools, or settle for hard-to-read text representations. MCP Apps change this. MCP servers can now return rich UI components that render directly in chat—interactive charts, sortable tables, clickable diagrams. The chat panel becomes a data exploration interface, not just a text window.

---

## What Are MCP Apps? (VS Code 1.109)

### Definition

MCP Apps are MCP server tools that return **rich UI components** instead of plain text. When the model calls an MCP tool that returns a component specification, VS Code renders it as an interactive element in the chat response.

### How It Works

```
┌─────────────────────────────────────────────────────────────┐
│  USER PROMPT                                                │
│  "Show me the sales data for Q4 2025"                       │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│  MODEL DECISION                                             │
│  "I'll call the sales-dashboard MCP tool"                   │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│  MCP SERVER                                                 │
│  Returns component specification:                           │
│  {                                                          │
│    "type": "chart",                                         │
│    "chartType": "bar",                                      │
│    "data": [...],                                           │
│    "interactive": true                                      │
│  }                                                          │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│  VS CODE RENDERS                                            │
│  ┌───────────────────────────────────────────────────────┐  │
│  │  📊 Q4 2025 Sales                                     │  │
│  │  ████████████████████████  $1.2M (Oct)               │  │
│  │  ██████████████████████████████  $1.5M (Nov)         │  │
│  │  ████████████████████████████████████  $1.8M (Dec)   │  │
│  │  [Filter ▼] [Export] [Drill Down]                    │  │
│  └───────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

### Key Capabilities

| Capability | Description |
|------------|-------------|
| **Charts** | Bar, line, pie, scatter plots with hover details |
| **Tables** | Sortable, filterable, paginated data grids |
| **Forms** | Input fields that send data back to MCP |
| **Trees** | Expandable hierarchical views |
| **Cards** | Rich content blocks with actions |
| **Custom** | Any HTML/CSS within security sandbox |

---

## Exploring MCP Apps Playground

### Getting Started

The `mcp-apps-playground` repository demonstrates all available component types:

**Repository:** [github.com/anthropics/mcp-apps-playground](https://github.com/anthropics/mcp-apps-playground)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/anthropics/mcp-apps-playground
   cd mcp-apps-playground
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Add to VS Code MCP configuration (`.vscode/mcp.json`):
   ```json
   {
     "servers": {
       "mcp-apps-playground": {
         "command": "node",
         "args": ["${workspaceFolder}/mcp-apps-playground/dist/index.js"]
       }
     }
   }
   ```

4. Restart VS Code and test:
   ```
   @mcp-apps-playground show me the chart demo
   ```

### Available Demos

| Tool | Description | Try It |
|------|-------------|--------|
| `chart-demo` | Interactive bar/line/pie charts | "Show me a sales chart" |
| `table-demo` | Sortable, filterable data grid | "Display user table" |
| `form-demo` | Input form with validation | "Show me a contact form" |
| `tree-demo` | Expandable file tree view | "Show directory structure" |
| `card-demo` | Rich content cards | "Display product cards" |
| `dashboard-demo` | Combined components | "Show me the full dashboard" |

---

## Component Types

### Charts

Render data visualizations directly in chat:

```typescript
// MCP tool return value
return {
  type: "chart",
  chartType: "bar",  // bar, line, pie, scatter, area
  title: "Monthly Revenue",
  data: [
    { label: "Jan", value: 45000 },
    { label: "Feb", value: 52000 },
    { label: "Mar", value: 61000 }
  ],
  options: {
    interactive: true,    // Enable hover details
    colors: ["#4CAF50"],  // Custom color palette
    showLegend: true
  }
};
```

**Rendered result:**
- Hover shows exact values
- Click to drill down (if configured)
- Resize with chat panel

### Tables

Interactive data grids with full functionality:

```typescript
return {
  type: "table",
  title: "Active Users",
  columns: [
    { key: "name", label: "Name", sortable: true },
    { key: "email", label: "Email", sortable: true },
    { key: "role", label: "Role", filterable: true },
    { key: "lastActive", label: "Last Active", sortable: true }
  ],
  data: [
    { name: "Alice Chen", email: "alice@example.com", role: "Admin", lastActive: "2 hours ago" },
    { name: "Bob Smith", email: "bob@example.com", role: "User", lastActive: "1 day ago" }
  ],
  options: {
    pagination: true,
    pageSize: 10,
    searchable: true,
    exportable: true  // Adds export button
  }
};
```

**Rendered result:**
- Click column headers to sort
- Filter dropdown for filterable columns
- Search box for full-text search
- Page navigation for large datasets
- Export button for CSV download

### Forms

Collect structured input within chat:

```typescript
return {
  type: "form",
  title: "Create New User",
  fields: [
    { name: "username", type: "text", label: "Username", required: true },
    { name: "email", type: "email", label: "Email", required: true },
    { name: "role", type: "select", label: "Role",
      options: ["Admin", "Editor", "Viewer"] },
    { name: "notify", type: "checkbox", label: "Send welcome email" }
  ],
  submitLabel: "Create User",
  onSubmit: "create-user"  // MCP tool to call with form data
};
```

**Rendered result:**
- Input validation (required, email format)
- Select dropdowns
- Checkbox/radio options
- Submit sends data to specified MCP tool

### Trees

Hierarchical expandable views:

```typescript
return {
  type: "tree",
  title: "Project Structure",
  data: [
    {
      label: "src/",
      icon: "folder",
      children: [
        { label: "index.ts", icon: "typescript" },
        { label: "utils/", icon: "folder", children: [
          { label: "helpers.ts", icon: "typescript" }
        ]}
      ]
    },
    { label: "package.json", icon: "json" }
  ],
  options: {
    expandable: true,
    defaultExpanded: 1,  // Expand first level
    selectable: true,
    onSelect: "open-file"  // MCP tool to call on selection
  }
};
```

**Rendered result:**
- Click to expand/collapse
- Icons for file types
- Selection triggers actions

### Cards

Rich content blocks:

```typescript
return {
  type: "cards",
  layout: "grid",  // grid, list, carousel
  cards: [
    {
      title: "Premium Plan",
      subtitle: "$29/month",
      description: "Unlimited projects, priority support",
      image: "https://example.com/premium.png",
      actions: [
        { label: "Select", action: "select-plan", data: { plan: "premium" } }
      ]
    },
    // ... more cards
  ]
};
```

**Rendered result:**
- Visual card layout
- Action buttons trigger MCP tools
- Responsive grid/list/carousel

---

## Building MCP Apps

### Basic Structure

An MCP App is an MCP server with tools that return component specifications:

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

// Define a tool that returns a chart
server.setRequestHandler("tools/list", async () => ({
  tools: [{
    name: "show-metrics",
    description: "Display project metrics as interactive charts",
    inputSchema: {
      type: "object",
      properties: {
        timeRange: { type: "string", enum: ["day", "week", "month"] }
      }
    }
  }]
}));

server.setRequestHandler("tools/call", async (request) => {
  if (request.params.name === "show-metrics") {
    const data = await fetchMetrics(request.params.arguments.timeRange);

    return {
      content: [{
        type: "component",  // Key: return component, not text
        component: {
          type: "chart",
          chartType: "line",
          title: "Project Metrics",
          data: data,
          options: { interactive: true }
        }
      }]
    };
  }
});

const transport = new StdioServerTransport();
await server.connect(transport);
```

### Component Schema

All components follow this base schema:

```typescript
interface Component {
  type: "chart" | "table" | "form" | "tree" | "cards" | "custom";
  title?: string;
  // Type-specific properties...
  options?: {
    interactive?: boolean;
    // Type-specific options...
  };
}
```

### Custom Components

For specialized visualizations, use the `custom` type with HTML:

```typescript
return {
  type: "custom",
  html: `
    <div class="my-widget">
      <h3>Custom Visualization</h3>
      <canvas id="my-canvas"></canvas>
    </div>
  `,
  css: `
    .my-widget { padding: 16px; background: var(--vscode-editor-background); }
    .my-widget h3 { color: var(--vscode-foreground); }
  `,
  script: `
    const canvas = document.getElementById('my-canvas');
    // Custom rendering logic...
  `,
  sandbox: true  // Security: runs in isolated iframe
};
```

**Security notes:**
- Custom components run in sandboxed iframes
- No access to VS Code APIs
- Limited to component container
- Use VS Code CSS variables for theming

---

## Use Cases

### Data Exploration

**Before MCP Apps:**
1. Query database via MCP
2. Receive text/JSON response
3. Copy to spreadsheet
4. Create pivot tables
5. Generate charts

**With MCP Apps:**
1. "Show me user signups by region"
2. Interactive chart appears in chat
3. Click to drill down
4. Filter by date range
5. Export if needed

### Dashboard Building

Create quick dashboards without leaving chat:

```
User: "Show me a dashboard of our key metrics"

Model calls: dashboard-mcp-tool

Response renders:
┌─────────────────────────────────────────────────────┐
│  📊 Key Metrics Dashboard                           │
├─────────────────┬─────────────────┬─────────────────┤
│  Active Users   │  Revenue MTD    │  API Calls      │
│     12,450      │    $847,000     │   2.4M/day      │
│   (+12% ▲)      │   (+8% ▲)       │   (-2% ▼)       │
├─────────────────┴─────────────────┴─────────────────┤
│  [Daily Trend Chart]                                │
│  ████████████████████                               │
│  ██████████████████████                             │
│  ████████████████████████                           │
├─────────────────────────────────────────────────────┤
│  Recent Activity                    [View All →]    │
│  • User signup spike detected                       │
│  • API latency increased 15ms                       │
│  • Payment processing normal                        │
└─────────────────────────────────────────────────────┘
```

### Code Analysis

Visualize codebase structure and metrics:

```
User: "Analyze the complexity of this module"

Model calls: code-complexity-tool

Response renders:
┌─────────────────────────────────────────────────────┐
│  📈 Complexity Analysis: auth/                      │
├─────────────────────────────────────────────────────┤
│  Treemap of file complexity:                        │
│  ┌──────────────────────┬───────────────────────┐   │
│  │                      │                       │   │
│  │    login.ts          │     session.ts        │   │
│  │    (high: 45)        │     (medium: 28)      │   │
│  │                      │                       │   │
│  ├──────────────────────┼───────────────────────┤   │
│  │  oauth.ts (32)       │  middleware.ts (18)   │   │
│  └──────────────────────┴───────────────────────┘   │
│                                                     │
│  [Click file to see detailed breakdown]             │
└─────────────────────────────────────────────────────┘
```

### Form-Based Workflows

Structured input collection:

```
User: "I need to create a new API endpoint"

Model calls: api-generator-form

Response renders:
┌─────────────────────────────────────────────────────┐
│  🔧 New API Endpoint                                │
├─────────────────────────────────────────────────────┤
│  Endpoint Path: [/api/v1/users        ]             │
│  HTTP Method:   [GET ▼]                             │
│  Description:   [Get user by ID       ]             │
│                                                     │
│  Parameters:                                        │
│  ┌──────────┬──────────┬──────────┐                │
│  │  Name    │  Type    │  Required│                │
│  ├──────────┼──────────┼──────────┤                │
│  │  id      │  string  │  ✓       │                │
│  │  [+ Add Parameter]              │                │
│  └──────────────────────────────────┘               │
│                                                     │
│  [Generate Endpoint]                                │
└─────────────────────────────────────────────────────┘
```

---

## Integration Patterns

### With Agent Skills

Agent skills can leverage MCP Apps for visualization:

```yaml
# .github/skills/analytics/SKILL.md
---
name: analytics-reporter
description: Generates visual analytics reports
tools: ['analytics-dashboard/*']  # MCP App tools
---
```

### With Custom Agents

Agents can specify MCP Apps in their tool set:

```yaml
# .github/agents/data-analyst.agent.md
---
name: Data Analyst
description: Analyzes data with interactive visualizations
tools: ['search', 'fetch', 'charts-mcp/*', 'tables-mcp/*']
mcp-servers:
  - name: analytics-app
    config:
      command: node
      args: ["/path/to/analytics-mcp/index.js"]
---
```

### With Memory

Combine with Copilot Memory for persistent dashboards:

```
User: "Remember my preferred dashboard layout"

# Memory stores preference
# Future "show dashboard" requests use saved layout
```

---

## Best Practices

### Design Guidelines

1. **Progressive disclosure** — Show summary first, drill-down for details
2. **Responsive layout** — Components adapt to chat panel width
3. **Theme awareness** — Use VS Code CSS variables for colors
4. **Loading states** — Show skeleton/spinner for async data
5. **Error handling** — Graceful fallback to text on render failure

### Performance

1. **Paginate large datasets** — Don't render 10,000 rows at once
2. **Lazy load images** — Load visible content first
3. **Cache expensive queries** — MCP server-side caching
4. **Optimize re-renders** — Only update changed data

### Security

1. **Sandbox custom HTML** — Always use `sandbox: true`
2. **Validate inputs** — Sanitize form data before processing
3. **No sensitive data in URLs** — Use POST for form submissions
4. **Rate limit MCP calls** — Prevent abuse

---

## Troubleshooting

### Common Issues

| Issue | Cause | Solution |
|-------|-------|----------|
| Component not rendering | Wrong return type | Ensure `type: "component"` in content |
| Styling broken | Missing theme vars | Use `var(--vscode-*)` CSS variables |
| Actions not working | Missing handler | Verify `onSubmit`/`onSelect` MCP tool exists |
| Performance slow | Too much data | Implement pagination, lazy loading |
| Sandbox errors | Script restrictions | Check console for CSP violations |

### Debugging

1. **Check MCP server logs** — Verify tool returns component
2. **Inspect rendered HTML** — DevTools in chat webview
3. **Test component JSON** — Validate against schema
4. **Try playground first** — Verify MCP Apps work before custom

---

## Key Takeaways

### Core Insights

1. **Chat becomes visual** — Rich components replace text-only responses
2. **Interactive exploration** — Sort, filter, drill down without new prompts
3. **Component library** — Charts, tables, forms, trees, cards built-in
4. **Custom extensibility** — Build any visualization with sandboxed HTML
5. **Seamless integration** — Works with agents, skills, and memory

### Narrative

MCP Apps transform chat from a text interface into a visual data exploration environment. When you ask about metrics, you see charts—not ASCII art. When you query databases, you get sortable tables—not JSON dumps. When you configure settings, you fill forms—not type structured text. This isn't about making chat prettier; it's about making it more functional. The visualization happens where you're already working, eliminating context switches to external tools. Combined with agents and skills, MCP Apps create a complete development environment within the chat panel.

---

## Getting Started

### Immediate Actions

1. **Clone mcp-apps-playground** — Experience available components
2. **Add to VS Code** — Configure in `.vscode/mcp.json`
3. **Try each demo** — Charts, tables, forms, trees, cards
4. **Explore interactions** — Sort, filter, click through data

### Next Steps

1. **Identify visualization needs** — What data do you explore often?
2. **Design your first MCP App** — Start with one component type
3. **Build iteratively** — Add interactivity progressively
4. **Integrate with workflows** — Connect to agents and skills

---

## Resources

**Official Resources:**
- [MCP Apps Playground](https://github.com/anthropics/mcp-apps-playground) — Demo repository
- [MCP Documentation](https://modelcontextprotocol.io/) — Protocol specification
- [VS Code MCP Guide](https://code.visualstudio.com/docs/copilot/customization/mcp-servers) — Integration guide

**Related Tech Talks:**
- [MCP Servers Workshop](../../workshop/05-mcp-servers/README.md) — MCP fundamentals
- [Agentic Sessions](../agentic-sessions/README.md) — Agent execution context

**VS Code 1.109 Release Notes:**
- [MCP Apps Announcement](https://code.visualstudio.com/updates/v1_109#_mcp-apps) — Feature introduction
