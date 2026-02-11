"""
Python ACP client connecting to a remote ACP server over TCP.
Demonstrates cross-language SDK support and network integration.

Prerequisites:
- agent-client-protocol installed (pip install agent-client-protocol)
- Remote ACP server running on localhost:3000
"""

import asyncio
import socket
from typing import Dict, Any


class SimpleTCPClient:
    """Minimal TCP client for ACP protocol demonstration"""

    def __init__(self, host: str, port: int):
        self.host = host
        self.port = port
        self.sock = None

    def connect(self):
        self.sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        self.sock.connect((self.host, self.port))
        print(f"✅ Connected to {self.host}:{self.port}")

    def send_message(self, message: Dict[str, Any]):
        """Send JSON-RPC message with newline delimiter"""
        import json

        json_str = json.dumps(message) + "\n"
        self.sock.sendall(json_str.encode("utf-8"))

    def receive_message(self) -> Dict[str, Any]:
        """Receive newline-delimited JSON-RPC message"""
        import json

        buffer = b""
        while True:
            chunk = self.sock.recv(1024)
            if not chunk:
                break
            buffer += chunk
            if b"\n" in buffer:
                line, buffer = buffer.split(b"\n", 1)
                return json.loads(line.decode("utf-8"))
        return {}

    def close(self):
        if self.sock:
            self.sock.close()
            print("Connection closed")


async def tcp_client_example():
    """Example ACP client over TCP"""

    client = SimpleTCPClient("localhost", 3000)
    client.connect()

    try:
        # Initialize connection
        print("\n📡 Initializing ACP connection...")
        client.send_message(
            {
                "jsonrpc": "2.0",
                "id": 1,
                "method": "initialize",
                "params": {
                    "protocolVersion": "1.0.0",
                    "clientCapabilities": {"permissions": True, "resources": True},
                },
            }
        )
        init_response = client.receive_message()
        print(f"Initialize response: {init_response}")

        # Create session
        print("\n📝 Creating new session...")
        client.send_message(
            {
                "jsonrpc": "2.0",
                "id": 2,
                "method": "new_session",
                "params": {"cwd": "/workspace", "mcpServers": []},
            }
        )
        session_response = client.receive_message()
        session_id = session_response.get("result", {}).get("sessionId")
        print(f"Session ID: {session_id}")

        # Send prompt
        print("\n💬 Sending prompt...")
        client.send_message(
            {
                "jsonrpc": "2.0",
                "id": 3,
                "method": "prompt",
                "params": {
                    "sessionId": session_id,
                    "prompt": [
                        {"type": "text", "text": "Analyze code quality and suggest improvements"}
                    ],
                },
            }
        )

        # Receive streaming responses
        print("\n📥 Receiving responses:\n")
        for _ in range(10):  # Read up to 10 response chunks
            response = client.receive_message()
            if response.get("method") == "session_update":
                update = response["params"]["update"]
                if update.get("sessionUpdate") == "agent_message_chunk":
                    content = update["content"]
                    if content["type"] == "text":
                        print(content["text"], end="", flush=True)
                elif update.get("sessionUpdate") == "agent_message_complete":
                    print("\n\n✅ Response complete")
                    break

    finally:
        client.close()


if __name__ == "__main__":
    print("🚀 Starting TCP ACP client example\n")
    asyncio.run(tcp_client_example())
