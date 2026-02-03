#!/bin/bash

# Infrastructure Status Report Generator
# Creates stakeholder-friendly report of current system state

WORKSPACE="/workspaces/CopilotTraining/fanhub"
OUTPUT_DIR="$WORKSPACE/docs/generated"
TIMESTAMP=$(date +"%Y-%m-%d %H:%M:%S")

mkdir -p "$OUTPUT_DIR"

echo "📊 Generating infrastructure status report..."
echo ""

# Collect current system state
docker-compose ps > /tmp/container-status.txt 2>&1
docker-compose logs --tail=50 > /tmp/recent-logs.txt 2>&1

# Generate stakeholder report
gh copilot -p "Create an infrastructure status report for stakeholders:

Current time: $TIMESTAMP

Analyze:
1. Container status from /tmp/container-status.txt
2. Recent logs from /tmp/recent-logs.txt
3. docker-compose.yml configuration

Generate report with:

## System Overview
- Services running and their status
- Architecture summary (brief, non-technical)

## Health Status
- Overall system health (Healthy/Degraded/Down)
- Any issues detected
- Recent errors or warnings

## Key Metrics
- Uptime
- Number of services
- Resource usage (if available from logs)

## Recent Changes
- Based on git log of infrastructure files

## Recommendations
- Any suggested improvements or concerns

Format as executive-friendly Markdown suitable for Slack or email.
Save to $OUTPUT_DIR/infrastructure-status-report.md"

echo ""
echo "✅ Status report generated at $OUTPUT_DIR/infrastructure-status-report.md"
echo ""
echo "📤 Ready to share with stakeholders:"
echo "   - Paste into Slack"
echo "   - Email as update"
echo "   - Include in sprint demos"
