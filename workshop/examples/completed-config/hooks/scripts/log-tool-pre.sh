#!/bin/bash
# Pre-tool execution audit logging
# Records all tool invocations before they execute

set -e

INPUT=$(cat)

# Extract relevant fields
TIMESTAMP=$(echo "$INPUT" | jq -r '.timestamp')
CWD=$(echo "$INPUT" | jq -r '.cwd')
TOOL_NAME=$(echo "$INPUT" | jq -r '.toolName')
TOOL_ARGS=$(echo "$INPUT" | jq -r '.toolArgs')

# Create audit log entry (JSON Lines format)
jq -n \
  --arg ts "$TIMESTAMP" \
  --arg cwd "$CWD" \
  --arg tool "$TOOL_NAME" \
  --argjson args "$TOOL_ARGS" \
  '{
    timestamp: $ts,
    event: "preToolUse",
    cwd: $cwd,
    toolName: $tool,
    toolArgs: $args
  }' >> logs/audit.jsonl 2>&1 &

exit 0
