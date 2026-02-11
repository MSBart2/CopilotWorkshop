import * as acp from "@agentclientprotocol/sdk";
import { spawn } from "node:child_process";
import { Readable, Writable } from "node:stream";
import * as readline from "readline";

/**
 * ACP client with proper permission handling.
 * Prompts user in terminal when agent requests tool usage.
 * 
 * Demonstrates the bidirectional communication and security model.
 */

function askUserPermission(
  tool: string,
  description: string
): Promise<"approved" | "denied" | "cancelled"> {
  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    console.log("\n⚠️  Permission Request:");
    console.log(`Tool: ${tool}`);
    console.log(`Description: ${description}`);

    rl.question("Approve? (y/n/c): ", (answer) => {
      rl.close();
      if (answer.toLowerCase() === "y") {
        console.log("✅ Approved");
        resolve("approved");
      } else if (answer.toLowerCase() === "n") {
        console.log("❌ Denied");
        resolve("denied");
      } else {
        console.log("🚫 Cancelled");
        resolve("cancelled");
      }
    });
  });
}

async function permissionHandlingExample() {
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
      const outcome = await askUserPermission(params.tool, params.description);
      return { outcome: { outcome } };
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
    clientCapabilities: { permissions: true },
  });

  const sessionResult = await connection.newSession({
    cwd: process.cwd(),
    mcpServers: [],
  });

  console.log("Session started! Asking agent to refactor code...\n");

  // Send a prompt that will likely trigger permission requests
  await connection.prompt({
    sessionId: sessionResult.sessionId,
    prompt: [
      {
        type: "text",
        text: "Refactor the authentication module to use async/await and update tests",
      },
    ],
  });

  setTimeout(() => {
    copilotProcess.stdin.end();
    copilotProcess.kill("SIGTERM");
  }, 30000);
}

permissionHandlingExample().catch(console.error);
