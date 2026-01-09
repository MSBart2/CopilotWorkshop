# Option B Refactoring Implementation Guide

This document explains how to implement Option B (separate exercises) for all modules.

## Structure Overview

```
modules/{##}-{module-name}/
├── README.md          # 250-350 lines: concepts + navigation
├── EXERCISES.md       # 500-800 lines: all exercises with full narrative
└── personas/
    ├── {persona1}.md  # 250-350 lines: curated view for persona
    ├── {persona2}.md  # 250-350 lines: curated view for persona
    └── ...
```

## Step-by-Step Implementation

### Phase 1: Preparation
1. Back up current README.md: `cp README.md README-BACKUP.md`
2. Create personas directory: `mkdir -p personas`
3. Identify which personas are featured in this module

### Phase 2: Split Content

#### README.md (New - Keep These Sections)
- Module title and tagline
- 📖 The Story (setup, not exercises)
- 🎯 Learning Objectives
- 🧠 Mindful Moments
- 📚 Key Concepts
- 🎯 Choose Your Path (navigation)
- ✅ Module Checklist
- 📚 Official Documentation
- ➡️ Next Up

**Remove from README.md:**
- All ## 🔨 Exercises content (move to EXERCISES.md)
- All individual exercise sections (move to EXERCISES.md)
- Detailed step-by-step instructions (move to EXERCISES.md)

#### EXERCISES.md (New - Move These Sections)
- ## 🔨 Exercises header
- All ### Exercise sections with:
  - 📖 The Story
  - ❌ The "Before"
  - 🎯 Objective
  - 📋 Steps
  - ✅ Success Criteria
  - ✨ The "After"
  - 📚 Official Docs
  - 💭 Persona reactions
  - 🚀 Challenge extensions

#### personas/{name}.md (New - Curate From EXERCISES.md)
For each persona:
1. List their exercises (with lead vs. collaboration markers)
2. Extract key quotes and transformation moments
3. Link back to full exercises in EXERCISES.md
4. Add role-specific context and connections

### Phase 3: Navigation Updates

#### In README.md, add:
```markdown
## 🎯 Choose Your Path

### Option 1: Follow Your Persona
- **[{Persona 1}](personas/{persona1}.md)** — {Focus area} ({X} min)
- **[{Persona 2}](personas/{persona2}.md)** — {Focus area} ({X} min)

### Option 2: Experience the Full Story
**[View All Exercises →](EXERCISES.md)**

### Option 3: Quick Navigator
| Exercise | Lead | Time | Topic |
|----------|------|------|-------|
| [#.#](EXERCISES.md#anchor) | {Persona} | {X}m | {Topic} |
```

#### In each persona file, add:
```markdown
## ➡️ Continue Your Journey

### Within This Module
- [View all exercises](../EXERCISES.md)
- [See other personas](./README.md)

### Next Module
Your next appearance: **[Module {#}](../../{##}-{name}/personas/{persona}.md)**
```

## Module-Specific Guidance

### Module 01: Repository Instructions
- **Personas**: David (lead), Marcus (lead), Priya (supporting)
- **David's focus**: Architecture documentation
- **Marcus's focus**: copilot-instructions.md patterns
- **Priya's role**: Learning from standards

### Module 02: Agent Plan Mode  
- **Personas**: Sarah (lead), David, Marcus
- **Sarah's focus**: Structured thinking introduction
- **David's focus**: Planning for configuration
- **Marcus's focus**: Planning workflows

### Module 03: Custom Prompts
- **Personas**: Elena (lead), Rafael (lead), Marcus, Jordan
- **Elena's focus**: Test generation prompts
- **Rafael's focus**: Requirements translation
- **Jordan's focus**: Git automation

### Module 04: Custom Agents
- **Personas**: David (lead), Jordan (lead), Marcus
- **David's focus**: Architecture reviewer agent
- **Jordan's focus**: DevOps automation
- **Marcus's role**: Using agents

### Module 05: Custom Instructions
- **Personas**: David (lead), Jordan, Elena
- **David's focus**: File-type patterns
- **Jordan's focus**: Deployment instructions
- **Elena's focus**: Test file instructions

### Module 06: Agent Skills
- **Personas**: Elena (lead), Rafael (lead)
- **Elena's focus**: Bug reproduction skill + effort estimator NEW
- **Rafael's focus**: Requirements skill + effort estimator NEW

### Module 07: MCP Servers
- **Personas**: Jordan (lead), Elena, David
- **Jordan's focus**: Infrastructure MCP
- **Elena's focus**: Database validation
- **David's focus**: Security review

### Module 08: Copilot Web
- **Personas**: Priya (lead), Sarah
- **Priya's focus**: Web-based learning
- **Sarah's focus**: PR reviews

### Module 09: Copilot CLI
- **Personas**: Jordan (lead), Marcus
- **Jordan's focus**: Terminal automation
- **Marcus's focus**: CLI workflows

### Module 10: Agentic SDLC
- **Personas**: All (Jordan orchestrates)
- **Rafael's NEW exercise**: Sprint orchestration (Ex 5.5)
- **Jordan's focus**: Parallel execution
- **Team focus**: Integration

## Time Estimates by Path

### Full Module (EXERCISES.md)
- Typical: 90-120 minutes
- Includes all exercises + team collaboration

### Persona Paths
- Primary persona (lead 2+ exercises): 60-90 minutes
- Supporting persona (1 exercise + collaboration): 30-45 minutes
- Brief appearance: 15-30 minutes

## Quality Checklist

Before considering a module "done":

- [ ] README.md is 250-350 lines (concepts + navigation)
- [ ] EXERCISES.md preserves full narrative flow
- [ ] Each persona file is 250-350 lines
- [ ] Navigation links work in all directions
- [ ] Personas have clear transformation arcs
- [ ] Exercise anchors work correctly
- [ ] Time estimates are accurate
- [ ] Official docs links are present
- [ ] "Choose Your Path" section is clear

## Testing the Structure

After refactoring a module:

1. **README test**: Can someone understand the module in 5 minutes?
2. **EXERCISES test**: Does the full story flow work for instructors?
3. **Persona test**: Can someone follow just their path and succeed?
4. **Navigation test**: Click all links - do they work?
5. **Time test**: Are estimates realistic?

## Rollout Strategy

### Phase 1: Pilot (Week 1)
- Refactor Module 03 (Custom Prompts) - DONE: README-NEW.md created
- Refactor Module 06 (Agent Skills) - Rafael's new content ready
- Refactor Module 10 (Agentic SDLC) - Rafael's new exercise ready
- Get feedback from 3-5 learners

### Phase 2: Core Modules (Week 2)
- Modules 01, 02, 04, 05
- These are foundational, high-traffic

### Phase 3: Specialized (Week 3)
- Modules 07, 08, 09
- More technical, smaller audience

### Phase 4: Polish (Week 4)
- Cross-module persona navigation
- Comprehensive persona journey maps
- Updated instructor guide

## Automation Opportunities

### Scripts to Create
1. `validate-structure.sh` - Check all modules have correct structure
2. `check-links.sh` - Verify all navigation links work
3. `word-count.sh` - Ensure files are within target lengths
4. `extract-personas.sh` - List which personas appear where

### Templates to Use
- `/templates/persona-template.md` - For creating persona files
- `/templates/exercises-template.md` - For structuring EXERCISES.md
- `/templates/readme-navigation.md` - For the "Choose Your Path" section

## Common Pitfalls to Avoid

1. **Don't lose the team story** - EXERCISES.md must preserve collaboration moments
2. **Don't make personas too narrow** - They should see how their work connects
3. **Don't break continuity** - Each persona's journey should flow across modules
4. **Don't forget supporting cast** - Even minor appearances need acknowledgment
5. **Don't remove transformation arcs** - Keep emotional beats intact

## Success Metrics

How will we know this works?

- **Completion rate**: Do more learners finish their persona path?
- **Time to value**: Can people get started faster?
- **Satisfaction**: Do learners feel the path matches their role?
- **Instructor feedback**: Is the full story still teachable?
- **Navigation clarity**: Do people get lost less often?

