#!/bin/bash
# Session start hook
# Initializes logging and validates project state

set -e

INPUT=$(cat)

TIMESTAMP=$(echo "$INPUT" | jq -r '.timestamp')
CWD=$(echo "$INPUT" | jq -r '.cwd')
SOURCE=$(echo "$INPUT" | jq -r '.source')
INITIAL_PROMPT=$(echo "$INPUT" | jq -r '.initialPrompt // empty')

# Ensure log directories exist
mkdir -p logs

# Log session start
jq -n \
  --arg ts "$TIMESTAMP" \
  --arg cwd "$CWD" \
  --arg source "$SOURCE" \
  --arg prompt "$INITIAL_PROMPT" \
  '{
    timestamp: $ts,
    event: "sessionStart",
    cwd: $cwd,
    source: $source,
    initialPrompt: $prompt
  }' >> logs/audit.jsonl 2>&1 &

# Simple session log for quick reference
echo "$(date -Iseconds): Session started (source=$SOURCE) - $INITIAL_PROMPT" >> logs/session.log 2>&1 &

exit 0
