#!/bin/bash
# Post-tool execution audit logging
# Records tool results and execution status

set -e

INPUT=$(cat)

# Extract fields
TIMESTAMP=$(echo "$INPUT" | jq -r '.timestamp')
TOOL_NAME=$(echo "$INPUT" | jq -r '.toolName')
TOOL_ARGS=$(echo "$INPUT" | jq -r '.toolArgs')
RESULT_TYPE=$(echo "$INPUT" | jq -r '.toolResult.resultType')
RESULT_TEXT=$(echo "$INPUT" | jq -r '.toolResult.textResultForLlm // empty')

# Log result to audit trail
jq -n \
  --arg ts "$TIMESTAMP" \
  --arg tool "$TOOL_NAME" \
  --argjson args "$TOOL_ARGS" \
  --arg result_type "$RESULT_TYPE" \
  --arg result_text "$RESULT_TEXT" \
  '{
    timestamp: $ts,
    event: "postToolUse",
    toolName: $tool,
    toolArgs: $args,
    resultType: $result_type,
    resultText: $result_text
  }' >> logs/audit.jsonl 2>&1 &

# Track statistics
echo "$(date -Iseconds),${TOOL_NAME},${RESULT_TYPE}" >> logs/tool-stats.csv 2>&1 &

# Alert on failures (optional - could integrate with Slack, email, etc.)
if [ "$RESULT_TYPE" = "failure" ]; then
  echo "$(date -Iseconds): FAILURE in $TOOL_NAME - $RESULT_TEXT" >> logs/failures.log 2>&1 &
fi

exit 0
