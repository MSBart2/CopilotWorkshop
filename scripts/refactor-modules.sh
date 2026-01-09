#!/bin/bash
# Script to refactor modules into Option B structure
# Creates: README.md (concepts), EXERCISES.md (full story), personas/*.md (curated paths)

set -e

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}Module Refactoring Script${NC}"
echo "This script will restructure modules into:"
echo "  - README.md (300 lines: overview + concepts + navigation)"
echo "  - EXERCISES.md (exercises in full story order)"
echo "  - personas/*.md (focused paths for each persona)"
echo ""

# Function to process a single module
process_module() {
    local module_num=$1
    local module_name=$2
    local personas=$3
    
    echo -e "${GREEN}Processing Module ${module_num}: ${module_name}${NC}"
    
    MODULE_DIR="/workspaces/CopilotTraining/modules/${module_num}-${module_name}"
    
    if [ ! -d "$MODULE_DIR" ]; then
        echo "  ⚠️  Module directory not found: $MODULE_DIR"
        return
    fi
    
    # Create personas directory
    mkdir -p "$MODULE_DIR/personas"
    
    echo "  ✓ Created personas/ directory"
    echo "  → Next: Manually split README.md into:"
    echo "     - README.md (keep: story, concepts, learning objectives)"
    echo "     - EXERCISES.md (move: all ## 🔨 Exercises section)"
    echo "     - personas/{persona}.md (create: curated views)"
    echo ""
}

# Module definitions: number, name, comma-separated personas
MODULES=(
    "01:repository-instructions:david,marcus,priya"
    "02:agent-plan-mode:sarah,david,marcus"
    "03:custom-prompts:elena,rafael,marcus,jordan"
    "04:custom-agents:david,jordan,marcus"
    "05:custom-instructions:david,jordan,elena"
    "06:agent-skills:elena,rafael"
    "07:mcp-servers:jordan,elena,david"
    "08:copilot-web:priya,sarah"
    "09:copilot-cli:jordan,marcus"
    "10:agentic-sdlc:jordan,david,marcus,elena,rafael"
)

# Process each module
for module_def in "${MODULES[@]}"; do
    IFS=':' read -r num name personas <<< "$module_def"
    process_module "$num" "$name" "$personas"
done

echo -e "${GREEN}✓ Directory structure created for all modules${NC}"
echo ""
echo "Next steps:"
echo "1. Review the -NEW.md file created in module 03 as an example"
echo "2. For each module:"
echo "   a. Split README.md content into README.md + EXERCISES.md"
echo "   b. Create persona/*.md files using the templates below"
echo "3. Test navigation flow with learners"
echo ""
echo "Template locations:"
echo "  - /workspaces/CopilotTraining/templates/persona-template.md"
echo "  - /workspaces/CopilotTraining/templates/exercises-template.md"
