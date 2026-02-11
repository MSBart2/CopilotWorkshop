import * as acp from "@agentclientprotocol/sdk";
import { spawn } from "node:child_process";
import { Readable, Writable } from "node:stream";

/**
 * ACP client with MCP server integration.
 * Demonstrates how ACP sessions can connect to MCP servers,
 * giving agents access to external tools and resources.
 * 
 * Prerequisites:
 * - MCP servers running (e.g., GitHub API on port 3001, Filesystem on port 3002)
 * - GitHub token in environment: GITHUB_TOKEN
 */

async function mcpIntegrationExample() {
  const copilotProcess = spawn("copilot", ["--acp", "--stdio"], {
    stdio: ["pipe", "pipe", "inherit"],
  });

  if (!copilotProcess.stdin || !copilotProcess.stdout) {
    throw new Error("Failed to start Copilot ACP process");
  }

  const output = Writable.toWeb(copilotProcess.stdin) as WritableStream<Uint8Array>;
  const input = Readable.toWeb(copilotProcess.stdout) as ReadableStream<Uint8Array>;
  const stream = acp.ndJsonStream(output, input);

  const client: acp.Client = {
    async requestPermission(params) {
      console.log(`\n[Permission: ${params.tool}]`);
      return { outcome: { outcome: "approved" } };
    },
    async sessionUpdate(params) {
      const update = params.update;
      if (update.sessionUpdate === "agent_message_chunk" && update.content.type === "text") {
        process.stdout.write(update.content.text);
      }
    },
  };

  const connection = new acp.ClientSideConnection((_agent) => client, stream);
  await connection.initialize({
    protocolVersion: acp.PROTOCOL_VERSION,
    clientCapabilities: { permissions: true, resources: true },
  });

  console.log("Initializing session with MCP servers...\n");

  // Create session with MCP server configurations
  const sessionResult = await connection.newSession({
    cwd: process.cwd(),
    mcpServers: [
      {
        name: "github-api",
        url: "http://localhost:3001",
        config: {
          token: process.env.GITHUB_TOKEN || "",
          repository: "owner/repo",
        },
      },
      {
        name: "filesystem",
        url: "http://localhost:3002",
        config: {
          rootPath: "/workspace",
          readOnly: false,
        },
      },
    ],
  });

  console.log(`Session started with ${sessionResult.mcpServers?.length || 0} MCP servers\n`);

  // Example 1: Agent uses GitHub API MCP server
  console.log("=== Example 1: Create GitHub Issue ===");
  await connection.prompt({
    sessionId: sessionResult.sessionId,
    prompt: [
      {
        type: "text",
        text: "Scan this codebase for TODO comments and create a GitHub issue for each one",
      },
    ],
  });

  await new Promise((resolve) => setTimeout(resolve, 10000));

  // Example 2: Agent uses Filesystem MCP server
  console.log("\n\n=== Example 2: Refactor with File Access ===");
  await connection.prompt({
    sessionId: sessionResult.sessionId,
    prompt: [
      {
        type: "text",
        text: "Refactor the authentication module to use environment variables instead of hardcoded secrets",
      },
    ],
  });

  await new Promise((resolve) => setTimeout(resolve, 10000));

  copilotProcess.stdin.end();
  copilotProcess.kill("SIGTERM");
}

mcpIntegrationExample().catch(console.error);
