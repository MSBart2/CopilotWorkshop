#!/bin/bash
# User prompt submission hook
# Records all user prompts for audit trail

set -e

INPUT=$(cat)

TIMESTAMP=$(echo "$INPUT" | jq -r '.timestamp')
PROMPT=$(echo "$INPUT" | jq -r '.prompt')

# Log prompt to audit trail
jq -n \
  --arg ts "$TIMESTAMP" \
  --arg prompt "$PROMPT" \
  '{
    timestamp: $ts,
    event: "userPromptSubmitted",
    prompt: $prompt
  }' >> logs/audit.jsonl 2>&1 &

# Also log to prompts-specific file for analysis
echo "$(date -Iseconds): $PROMPT" >> logs/prompts.log 2>&1 &

exit 0
