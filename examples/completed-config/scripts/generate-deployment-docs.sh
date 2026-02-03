#!/bin/bash

# Automated Deployment Documentation Generator
# Analyzes infrastructure and creates step-by-step deployment guide

WORKSPACE="/workspaces/CopilotTraining/fanhub"
OUTPUT_DIR="$WORKSPACE/docs/generated"

mkdir -p "$OUTPUT_DIR"

echo "📚 Generating deployment documentation..."
echo ""

# Use programmatic mode to generate comprehensive deployment guide
gh copilot -p "Analyze the FanHub application structure and generate a deployment guide:

Review these files:
- docker-compose.yml
- backend/Dockerfile
- frontend/Dockerfile
- package.json files
- README.md

Create a deployment guide (Markdown format) that includes:

## Prerequisites
- Required software and versions
- Environment setup

## Environment Configuration
- All required environment variables with descriptions
- Example .env file with safe defaults

## Build Process
- Step-by-step build commands
- Expected build output
- Common build issues and fixes

## Deployment Steps
- Exact commands to deploy (development and production)
- Health check procedures
- Rollback procedures

## Troubleshooting
- Common deployment issues
- How to check logs
- How to verify service health

Save to $OUTPUT_DIR/DEPLOYMENT-GUIDE.md"

echo ""
echo "✅ Deployment guide generated at $OUTPUT_DIR/DEPLOYMENT-GUIDE.md"
