import * as acp from "@agentclientprotocol/sdk";
import { spawn } from "node:child_process";
import { Readable, Writable } from "node:stream";

/**
 * Basic ACP client that starts Copilot CLI, initializes connection,
 * creates a session, and sends a simple prompt.
 * 
 * Prerequisites:
 * - @agentclientprotocol/sdk installed (npm install @agentclientprotocol/sdk)
 * - copilot CLI available in PATH
 * - GitHub Copilot subscription
 */

async function basicExample() {
  // Start Copilot CLI in ACP mode
  const copilotProcess = spawn("copilot", ["--acp", "--stdio"], {
    stdio: ["pipe", "pipe", "inherit"],
  });

  if (!copilotProcess.stdin || !copilotProcess.stdout) {
    throw new Error("Failed to start Copilot ACP process");
  }

  // Create bidirectional stream
  const output = Writable.toWeb(copilotProcess.stdin) as WritableStream<Uint8Array>;
  const input = Readable.toWeb(copilotProcess.stdout) as ReadableStream<Uint8Array>;
  const stream = acp.ndJsonStream(output, input);

  // Define client callbacks
  const client: acp.Client = {
    async requestPermission(params) {
      console.log(`Agent requests permission: ${params.tool}`);
      return { outcome: { outcome: "approved" } }; // Auto-approve for demo
    },
    async sessionUpdate(params) {
      const update = params.update;
      if (update.sessionUpdate === "agent_message_chunk" && update.content.type === "text") {
        process.stdout.write(update.content.text);
      }
    },
  };

  // Initialize connection
  const connection = new acp.ClientSideConnection((_agent) => client, stream);
  await connection.initialize({
    protocolVersion: acp.PROTOCOL_VERSION,
    clientCapabilities: {},
  });

  // Create session
  const sessionResult = await connection.newSession({
    cwd: process.cwd(),
    mcpServers: [],
  });

  console.log("Session started!");

  // Send prompt
  await connection.prompt({
    sessionId: sessionResult.sessionId,
    prompt: [{ type: "text", text: "Explain the purpose of this project" }],
  });

  // Cleanup (in production, wait for response completion)
  setTimeout(() => {
    copilotProcess.stdin.end();
    copilotProcess.kill("SIGTERM");
  }, 10000);
}

// Run the example
basicExample().catch(console.error);
