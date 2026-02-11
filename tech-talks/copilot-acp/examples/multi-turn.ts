import * as acp from "@agentclientprotocol/sdk";
import { spawn } from "node:child_process";
import { Readable, Writable } from "node:stream";

/**
 * Multi-turn conversation example demonstrating stateful sessions.
 * Agent maintains context across multiple prompts in a single session.
 */

async function multiTurnExample() {
  const copilotProcess = spawn("copilot", ["--acp", "--stdio"], {
    stdio: ["pipe", "pipe", "inherit"],
  });

  if (!copilotProcess.stdin || !copilotProcess.stdout) {
    throw new Error("Failed to start Copilot ACP process");
  }

  const output = Writable.toWeb(copilotProcess.stdin) as WritableStream<Uint8Array>;
  const input = Readable.toWeb(copilotProcess.stdout) as ReadableStream<Uint8Array>;
  const stream = acp.ndJsonStream(output, input);

  let responseComplete = false;

  const client: acp.Client = {
    async requestPermission(params) {
      console.log(`\n[Permission requested: ${params.tool}]`);
      return { outcome: { outcome: "approved" } };
    },
    async sessionUpdate(params) {
      const update = params.update;
      if (update.sessionUpdate === "agent_message_chunk" && update.content.type === "text") {
        process.stdout.write(update.content.text);
      } else if (update.sessionUpdate === "agent_message_complete") {
        responseComplete = true;
      }
    },
  };

  const connection = new acp.ClientSideConnection((_agent) => client, stream);
  await connection.initialize({
    protocolVersion: acp.PROTOCOL_VERSION,
    clientCapabilities: {},
  });

  // Create session with workspace context
  const sessionResult = await connection.newSession({
    cwd: "/home/user/my-app",
    mcpServers: [],
  });
  const sessionId = sessionResult.sessionId;

  console.log("Session started! Beginning multi-turn conversation...\n");

  // Turn 1: Ask for code review
  console.log("=== Turn 1: Code Review ===");
  await connection.prompt({
    sessionId,
    prompt: [{ type: "text", text: "Review the authentication module for security issues" }],
  });

  // Wait for response to complete
  await new Promise((resolve) => {
    const checkComplete = setInterval(() => {
      if (responseComplete) {
        clearInterval(checkComplete);
        responseComplete = false;
        resolve(null);
      }
    }, 100);
  });

  // Turn 2: Follow-up question (agent remembers previous context)
  console.log("\n\n=== Turn 2: Follow-up ===");
  await connection.prompt({
    sessionId,
    prompt: [
      {
        type: "text",
        text: "Can you fix the most critical issue you found?",
      },
    ],
  });

  await new Promise((resolve) => {
    const checkComplete = setInterval(() => {
      if (responseComplete) {
        clearInterval(checkComplete);
        responseComplete = false;
        resolve(null);
      }
    }, 100);
  });

  // Turn 3: Documentation update
  console.log("\n\n=== Turn 3: Documentation ===");
  await connection.prompt({
    sessionId,
    prompt: [
      {
        type: "text",
        text: "Update the README to document the security fix you just applied",
      },
    ],
  });

  await new Promise((resolve) => {
    const checkComplete = setInterval(() => {
      if (responseComplete) {
        clearInterval(checkComplete);
        responseComplete = false;
        resolve(null);
      }
    }, 100);
  });

  console.log("\n\nConversation complete!");

  copilotProcess.stdin.end();
  copilotProcess.kill("SIGTERM");
}

multiTurnExample().catch(console.error);
