#!/bin/bash
# Security policy enforcement hook
# Blocks dangerous commands before execution

set -e

# Read JSON input from stdin
INPUT=$(cat)

# Extract tool information
TOOL_NAME=$(echo "$INPUT" | jq -r '.toolName')
TOOL_ARGS=$(echo "$INPUT" | jq -r '.toolArgs')

# Log the check (async, don't block on I/O)
echo "$(date -Iseconds): Checking tool=$TOOL_NAME" >> logs/security.log 2>&1 &

# Only validate bash/terminal commands
if [ "$TOOL_NAME" != "bash" ] && [ "$TOOL_NAME" != "terminal" ]; then
  exit 0  # Allow all non-terminal tools
fi

# Extract the actual command from tool args
COMMAND=$(echo "$TOOL_ARGS" | jq -r '.command // .text // empty')

if [ -z "$COMMAND" ]; then
  exit 0  # No command to validate
fi

# Check for dangerous patterns
DANGEROUS_PATTERNS=(
  "rm -rf /"
  "rm -rf /*"
  "sudo rm"
  "mkfs"
  "dd if="
  "DROP TABLE"
  "DROP DATABASE"
  "> /dev/sda"
  "chmod -R 777"
  "curl.*|.*sh"
  "wget.*|.*sh"
)

for pattern in "${DANGEROUS_PATTERNS[@]}"; do
  if echo "$COMMAND" | grep -qiE "$pattern"; then
    # Deny and provide reason
    echo '{"permissionDecision":"deny","permissionDecisionReason":"Dangerous command pattern detected: '"$pattern"'"}'
    
    # Log the violation (async)
    echo "$(date -Iseconds): DENIED - $COMMAND (matched: $pattern)" >> logs/security.log 2>&1 &
    
    exit 0
  fi
done

# Allow by default (or could explicitly return allow)
echo "$(date -Iseconds): ALLOWED - $COMMAND" >> logs/security.log 2>&1 &
exit 0
