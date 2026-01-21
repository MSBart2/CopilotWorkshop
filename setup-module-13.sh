#!/bin/bash
#
# Bootstrap script for Module 13: Customizations Overview
# This script creates the module directory structure and copies the README file
#
# Run this script from the repository root:
#   bash setup-module-13.sh
#

echo "Creating Module 13 directory structure..."
mkdir -p modules/13-customizations-overview

echo "Moving README file to module directory..."
mv MODULE-13-README.md modules/13-customizations-overview/README.md

echo "Module 13 directory structure created successfully!"
echo ""
echo "Next steps:"
echo "1. Run: bash setup-module-13.sh (if not already done)"
echo "2. Use exercise-author skill to create exercise files (13.1-13.5)"
echo "3. Verify all artifacts are consistent with the exercise planning table"
