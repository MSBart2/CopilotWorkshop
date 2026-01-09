# TODO: Workshop Reorganization

## Priority: Module Reordering

### Move Appendices Before Module 5

The current appendices (Copilot Web and Copilot CLI) should be moved earlier in the workshop flow, before the Agentic SDLC module.

**Current Structure:**
```
00-orientation/
01-repository-instructions/
02-custom-prompts/
03-custom-agents/
04-custom-instructions/
05-agentic-sdlc/           ← Final module
08-appendix-a-copilot-web/ ← Optional appendix
09-appendix-b-copilot-cli/ ← Optional appendix
```

**Target Structure:**
```
00-orientation/
01-repository-instructions/
02-custom-prompts/
03-custom-agents/
04-custom-instructions/
05-copilot-web/            ← Renamed from appendix
06-copilot-cli/            ← Renamed from appendix
07-agentic-sdlc/           ← Now the capstone module
```

### Rationale

1. **Copilot Web** and **Copilot CLI** introduce interfaces that are used in the Agentic SDLC module
2. Module 5 (Agentic SDLC) references both Web and CLI workflows - learners should know these first
3. The capstone module should come last, tying everything together

### Steps to Complete

- [ ] Rename `08-appendix-a-copilot-web/` → `05-copilot-web/`
- [ ] Rename `09-appendix-b-copilot-cli/` → `06-copilot-cli/`
- [ ] Rename `05-agentic-sdlc/` → `07-agentic-sdlc/`
- [ ] Update all cross-references in module files
- [ ] Update OUTLINE.md with new structure
- [ ] Update README.md module descriptions
- [ ] Update PERSONAS.md module references
- [ ] Update docs/INSTRUCTOR-GUIDE.md
- [ ] Remove "Appendix" terminology - these are now core modules
- [ ] Update exercise numbering (5.x, 6.x, 7.x)
- [ ] Run broken link check after changes

### Impact on Workshop

- **Total modules**: 7 core modules (was 5 + 2 appendices)
- **Time estimate**: Will need recalculation
- **Narrative flow**: Web → CLI → Agentic SDLC (using both)

---

## Other TODOs

- [ ] Review Debug View exercise placement (currently in Module 5, consider Module 1)
- [ ] Verify all persona references are consistent
- [ ] Add missing "Official Docs" sections where needed
- [ ] Check root README.md for "full auth" promise and verify FanHub actually implements it
