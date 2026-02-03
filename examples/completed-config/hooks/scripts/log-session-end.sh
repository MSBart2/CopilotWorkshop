#!/bin/bash
# Session end hook
# Archives logs and generates summary

set -e

INPUT=$(cat)

TIMESTAMP=$(echo "$INPUT" | jq -r '.timestamp')
REASON=$(echo "$INPUT" | jq -r '.reason')

# Log session end
jq -n \
  --arg ts "$TIMESTAMP" \
  --arg reason "$REASON" \
  '{
    timestamp: $ts,
    event: "sessionEnd",
    reason: $reason
  }' >> logs/audit.jsonl 2>&1 &

echo "$(date -Iseconds): Session ended (reason=$REASON)" >> logs/session.log 2>&1 &

# Optional: Archive old logs, rotate files, generate summary report
# This is where you could trigger background jobs for reporting

exit 0
