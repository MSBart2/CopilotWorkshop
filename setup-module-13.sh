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

echo "Copying README file..."
cp /tmp/module-13-readme.md modules/13-customizations-overview/README.md

echo "Module 13 directory structure created successfully!"
echo "Next step: Run exercise-author skill to create exercise files"
