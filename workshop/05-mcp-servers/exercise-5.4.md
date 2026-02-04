# Exercise 5.4: Rich UI with MCP Apps

## 🔨 Exercise

### Exercise 5.4: Rich UI with MCP Apps — "Interactive Visualizations in Chat"

**Lead:** David ⭐ | **Support:** Marcus 🤝, Sarah 🤝 | **Time:** 12 min

#### 📖 The Challenge

Marcus has been querying the FanHub database through MCP, but the results come back as plain text tables. When he asks for performance metrics—query times, memory usage, request distributions—the raw numbers are hard to interpret. He finds himself copying data out of chat, pasting into a spreadsheet, and building charts manually just to see patterns.

David faces a similar problem with architecture diagrams. When he asks Copilot to explain the data flow between services, he gets text descriptions. But visual diagrams would communicate the architecture far more effectively. Right now, any visualization requires leaving chat and using external tools.

Elena wants to see test coverage as a visual heatmap, not just a percentage. Sarah wants flame graphs for performance analysis, not just timing numbers. Everyone is hitting the same limitation: **MCP servers return data, but that data needs visualization to be truly useful.**

#### 🔄 The Transformation

| Before ❌ | After ✨ |
|-----------|----------|
| Marcus asks for database performance metrics. Gets a text table with 50 rows of timing data. Copies to Excel, builds a chart, analyzes patterns. Total time: 15 minutes. | Marcus asks for database performance metrics. MCP App renders an interactive flame graph directly in chat. He zooms into slow queries, clicks for details. Total time: 30 seconds. |
| **Time:** 15 min to visualize data<br>**Context switches:** 3 (chat → export → chart tool → analysis)<br>**Interactivity:** None | **Time:** 30 seconds<br>**Context switches:** 0<br>**Interactivity:** Pan, zoom, click, filter—all in chat |

#### 🎯 Your Goal

Explore MCP Apps that render rich, interactive UI directly in Copilot Chat, understanding how servers can provide visualizations beyond plain text responses.

#### 📋 Steps

1. **Understand MCP Apps Concept**

   MCP Apps extend the MCP protocol to allow servers to render rich, interactive UI in the client. Instead of returning plain JSON or text, servers can return:

   - **Interactive charts** — Bar graphs, line charts, pie charts
   - **Flame graphs** — Performance profiling visualizations
   - **Data tables** — Sortable, filterable, paginated tables
   - **Custom forms** — Input collection with validation
   - **Tree views** — Hierarchical data navigation

   **Key insight:** The visualization runs in chat—no external tools, no context switching, no data export.

2. **Explore the MCP Apps Playground**

   Clone the official MCP Apps demo repository to see examples:

   ```bash
   cd /workspaces
   git clone https://github.com/digitarald/mcp-apps-playground.git
   cd mcp-apps-playground
   npm install
   ```

   This repository contains example MCP servers that render interactive UI.

3. **Configure an MCP App Server**

   Add the playground server to your MCP configuration. In `.vscode/mcp.json`, add:

   ```json
   {
     "servers": {
       "sqlite": {
         "type": "stdio",
         "command": "npx",
         "args": ["-y", "@modelcontextprotocol/server-sqlite", "/workspaces/CopilotTraining/dev-data/fanhub-dev.db"]
       },
       "mcp-apps-demo": {
         "type": "stdio",
         "command": "node",
         "args": ["/workspaces/mcp-apps-playground/dist/index.js"],
         "cwd": "/workspaces/mcp-apps-playground"
       }
     }
   }
   ```

   > 💡 **Note:** If the playground uses a different entry point, check its README for the correct command.

4. **Start the MCP Apps Server**

   In Copilot Chat (Agent mode), refresh the MCP servers list. You should see "mcp-apps-demo" available.

   Start the server and observe what tools become available.

5. **Request an Interactive Visualization**

   Try invoking a visualization tool. Example prompts:

   ```
   @workspace #mcp-apps-demo Show me an interactive flame graph of sample performance data
   ```

   ```
   @workspace #mcp-apps-demo Render a chart visualization
   ```

   **What to observe:**
   - The response includes an interactive visualization embedded in chat
   - You can interact with the visualization (pan, zoom, click)
   - No data export or external tools needed

6. **Interact with the Visualization**

   MCP Apps support rich interactions:

   - **Pan and zoom:** Hold Alt/Option + mouse wheel to zoom, drag to pan
   - **Click elements:** Select data points for details
   - **Filter data:** Some visualizations support filtering
   - **Export:** Right-click for export options (if supported)

   Explore the interactivity to understand what's possible.

7. **Understand the Architecture**

   MCP Apps work by:

   ```
   ┌─────────────────────────────────────────────────────────────┐
   │ MCP Server returns app definition                          │
   ├─────────────────────────────────────────────────────────────┤
   │ {                                                           │
   │   "type": "app",                                            │
   │   "component": "flame-graph",                               │
   │   "data": { ... },                                          │
   │   "config": { ... }                                         │
   │ }                                                           │
   └─────────────────────────────────────────────────────────────┘
                              │
                              ▼
   ┌─────────────────────────────────────────────────────────────┐
   │ VS Code renders the app in chat                            │
   ├─────────────────────────────────────────────────────────────┤
   │ • Loads component renderer                                  │
   │ • Passes data and configuration                             │
   │ • Handles user interactions                                 │
   │ • Sends interaction events back to server (if needed)       │
   └─────────────────────────────────────────────────────────────┘
   ```

   The server defines what to render; VS Code handles how to render it.

#### ✅ Success Criteria

- [ ] Cloned and explored the MCP Apps playground repository
- [ ] Configured an MCP App server in `.vscode/mcp.json`
- [ ] Successfully started the MCP Apps demo server
- [ ] Received at least one interactive visualization in Copilot Chat
- [ ] Interacted with the visualization (pan, zoom, or click)
- [ ] Understood how MCP Apps extend standard MCP responses

#### 🚀 Challenge Extension

**Build a custom MCP App for FanHub:**

Consider building an MCP server that visualizes FanHub data:

- **Show popularity chart:** Bar graph of shows by rating
- **Episode timeline:** Visual timeline of episodes per show
- **Character network:** Graph visualization of character relationships
- **API performance:** Flame graph of endpoint response times

The MCP Apps SDK provides components and patterns for building these visualizations. See the [MCP Apps SDK](https://github.com/modelcontextprotocol/ext-apps/) for examples.

#### 📚 Official Docs

- [MCP Apps Announcement](https://blog.modelcontextprotocol.io/posts/2026-01-26-mcp-apps/) — Introduction to rich UI in MCP
- [MCP Apps Demo Repository](https://github.com/digitarald/mcp-apps-playground) — Example implementations
- [MCP Apps SDK](https://github.com/modelcontextprotocol/ext-apps/) — Build your own MCP Apps
- [VS Code MCP Documentation](https://code.visualstudio.com/docs/copilot/customization/mcp-servers) — MCP in VS Code
- [MCP Server Development Guide](https://code.visualstudio.com/docs/copilot/guides/mcp-developer-guide) — Building MCP servers

---

## 🔗 What You Built

**In this exercise:**
- Understanding of MCP Apps architecture and capabilities
- Configured MCP Apps demo server
- Experienced interactive visualizations in Copilot Chat

**How it compounds:**

| Previous Modules | This Module | Combined Power |
|------------------|-------------|----------------|
| Module 4 Skills (analysis) | MCP Apps (visualization) | Analyze data AND visualize results in chat |
| Exercise 5.1 Database access | MCP Apps | Query database AND see results as charts |
| Module 6 Custom Agents | MCP Apps | Agents that provide rich visual feedback |

---

## ➡️ Next Up

**[Module 6: Custom Agents](../06-custom-agents/README.md)** — Combine MCP servers, skills, and prompts into specialized domain experts.

> *"We can query the database, validate APIs, and now visualize data—all without leaving chat. What if we packaged all of this into a single @fanhub-expert agent?"*
> — Sarah, seeing the integration opportunity

---
