#!/bin/bash
# Directory access control hook
# Enforces which files/directories agents can modify

set -e

INPUT=$(cat)
TOOL_NAME=$(echo "$INPUT" | jq -r '.toolName')

# Only validate file modification tools
if [ "$TOOL_NAME" != "edit" ] && [ "$TOOL_NAME" != "create" ] && [ "$TOOL_NAME" != "write" ]; then
  exit 0
fi

# Extract file path from tool args
FILE_PATH=$(echo "$INPUT" | jq -r '.toolArgs' | jq -r '.path // .filePath // empty')

if [ -z "$FILE_PATH" ]; then
  exit 0  # No path to validate
fi

# Define allowed directories
ALLOWED_PATTERNS=(
  "^src/"
  "^test/"
  "^tests/"
  "^docs/"
  "^\.github/workflows/"
  "^\.github/copilot-"
)

# Check if path matches any allowed pattern
for pattern in "${ALLOWED_PATTERNS[@]}"; do
  if echo "$FILE_PATH" | grep -qE "$pattern"; then
    exit 0  # Allowed
  fi
done

# Deny access to protected areas
PROTECTED_PATTERNS=(
  "^\.git/"
  "^node_modules/"
  "^dist/"
  "^build/"
  "^\.env"
  "^config/production"
)

for pattern in "${PROTECTED_PATTERNS[@]}"; do
  if echo "$FILE_PATH" | grep -qE "$pattern"; then
    echo '{"permissionDecision":"deny","permissionDecisionReason":"Cannot modify protected directory or file: '"$FILE_PATH"'"}'
    exit 0
  fi
done

# If we get here, path doesn't match allowed patterns
echo '{"permissionDecision":"deny","permissionDecisionReason":"File path outside approved directories. Can only edit: src/, test/, docs/, .github/workflows/, .github/copilot-*"}'
exit 0
