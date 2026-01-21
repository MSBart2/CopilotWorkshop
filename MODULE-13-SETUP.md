# Module 13 Setup Instructions

## Current Status

Module 13 ("A Lap Around Copilot Customizations") has been planned and all content has been generated, but the final directory structure needs to be created.

## What's Complete

✅ Module planning with 5 exercises covering the major customization types  
✅ Complete README.md content with exercise planning table  
✅ Updated OUTLINE.md to include Module 13  
✅ Bootstrap script (setup-module-13.sh) ready to execute  

## What's Needed

The module directory structure needs to be created and files moved to their proper locations.

## To Complete Setup

### Step 1: Run the Bootstrap Script

From the repository root, execute:

```bash
bash setup-module-13.sh
```

This will:
- Create `modules/13-customizations-overview/` directory
- Move `MODULE-13-README.md` to `modules/13-customizations-overview/README.md`

### Step 2: Generate Exercise Files

After the directory structure is in place, invoke the exercise-author skill to create the individual exercise files:

```bash
# Use the exercise-author skill to generate exercise files 13.1 through 13.5
# The skill will read the exercise planning table from the README and create:
# - exercise-13.1.md (Repository Instructions Quickstart)
# - exercise-13.2.md (Workspace Instructions for Multi-Context Projects)
# - exercise-13.3.md (Chat Variables for Contextual Queries)
# - exercise-13.4.md (Extension Points and Copilot Skills)
# - exercise-13.5.md (Customization Patterns and Precedence)
```

### Step 3: Verify

Confirm that the module structure matches other modules:

```
modules/13-customizations-overview/
├── README.md
├── exercise-13.1.md
├── exercise-13.2.md
├── exercise-13.3.md
├── exercise-13.4.md
└── exercise-13.5.md
```

## Module Overview

**Module 13: A Lap Around Copilot Customizations** provides a comprehensive 60-minute tour of the entire Copilot customization ecosystem. It covers:

1. **Repository Instructions** - Project-wide standards
2. **Workspace Instructions** - Context-specific guidance  
3. **Chat Variables** - Targeted queries with @workspace, @terminal, etc.
4. **Extension Points** - Specialized Copilot extensions
5. **Customization Patterns** - Understanding precedence and layering

Each exercise is designed to be hands-on and demonstrates concrete, measurable improvements using authentic persona voices.

## Reference

- Exercise Planning Table: See MODULE-13-README.md (will be moved to modules/13-customizations-overview/README.md)
- Official Documentation: https://code.visualstudio.com/docs/copilot/customization/overview
- OUTLINE.md: Updated to include Module 13 in the module map

---

**Note**: This module was created using the module-author skill following the CopilotTraining content development guidelines.
