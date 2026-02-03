#!/bin/bash
# Error occurred hook
# Captures and logs agent errors for debugging

set -e

INPUT=$(cat)

TIMESTAMP=$(echo "$INPUT" | jq -r '.timestamp')
ERROR_MSG=$(echo "$INPUT" | jq -r '.error.message')
ERROR_NAME=$(echo "$INPUT" | jq -r '.error.name')
ERROR_STACK=$(echo "$INPUT" | jq -r '.error.stack // empty')

# Log error to audit trail
jq -n \
  --arg ts "$TIMESTAMP" \
  --arg msg "$ERROR_MSG" \
  --arg name "$ERROR_NAME" \
  --arg stack "$ERROR_STACK" \
  '{
    timestamp: $ts,
    event: "errorOccurred",
    error: {
      message: $msg,
      name: $name,
      stack: $stack
    }
  }' >> logs/audit.jsonl 2>&1 &

# Also log to dedicated error file
echo "$(date -Iseconds): [$ERROR_NAME] $ERROR_MSG" >> logs/errors.log 2>&1 &

# Optional: Send alerts for critical errors
# if [[ "$ERROR_NAME" == "TimeoutError" ]] || [[ "$ERROR_NAME" == "NetworkError" ]]; then
#   # Send Slack notification, email, etc.
# fi

exit 0
