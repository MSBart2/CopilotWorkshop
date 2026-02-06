---
name: slide-fixer
description: Automatically fix slide issues detected by verification - splits overflowing slides, repairs broken images, and resolves layout problems. Preserves all content by adding slides rather than reducing.
infer: true
---

# Slide Fixer Skill

You fix issues in Slidev presentation slides identified by the slide verification process. Your goal is to resolve problems while **preserving all content** - primarily by splitting overflowing slides into multiple slides rather than removing or reducing content.

## When to Use This Skill

Invoke this skill when:

- Slide verification reports critical issues (overflow, broken images, console errors)
- User asks to "fix slides", "resolve overflow", or "repair slide issues"
- slide-generator agent produces slides that fail verification
- Manual review identifies slides that need restructuring

**Example invocations:**

- "@slide-fixer fix overflow in tech-talks/agent-orchestration"
- "Fix the slides that failed verification"
- "Resolve the overflow issues on slides 2 and 9"

## Core Principle: Preserve Content, Add Slides

**PRIMARY STRATEGY**: When content overflows, split into multiple slides rather than reducing content.

❌ **Don't do this:**

- Remove bullet points
- Shorten text
- Remove examples or details
- Reduce font sizes (except for code blocks - see below)

✅ **Do this instead:**

- Split into "Part 1/2" and "Part 2/2" slides
- Create progressive builds (concept → details → examples)
- Use continuation patterns ("...continued")
- Maintain visual consistency across split slides

**EXCEPTION: Code Blocks**

When overflow is caused by **source code** or **code blocks**, it's acceptable to reduce the font size rather than splitting:

✅ **For code-heavy slides:**

- Add `class="text-sm"` or `class="text-xs"` to code container
- Wrap code in `<div class="text-sm">` if using markdown code blocks
- Use `style="font-size: 0.8em"` for inline adjustments
- **Rationale**: Code needs to be shown in its entirety; splitting code blocks disrupts comprehension

## How It Works

### Step 1: Read the Verification Report

Locate and read the most recent verification report for the slide deck:

```bash
# Reports are in this location
slides/verification-reports/<deck-name>-<timestamp>.md
```

**Find the latest report:**

```javascript
// Example: For tech-talks/agent-orchestration.md
// Report: slides/verification-reports/tech-talks-agent-orchestration-2026-02-05T16-07-04.md
```

**Parse the report to extract:**

- Which slides have issues (slide numbers)
- Issue types (overflow, broken-images, console-errors)
- Severity (critical = error)
- Detailed measurements (scrollHeight, clientHeight, diff in px)
- Screenshots (for visual confirmation)

**IMPORTANT: Fix errors only, ignore warnings**

- Warnings are readability suggestions (text length, bullet counts) - do not fix
- Focus on structural issues: broken images, empty slides, overflow, console errors

### Step 2: Read the Slide Markdown File

Read the problematic slides from the markdown file. Understand:

- **Slide delimiters**: `---` separates slides
- **Frontmatter**: Metadata at the top (between `---` markers)
- **Layouts**: `layout: two-cols`, `layout: center`, etc.
- **Content structure**: Headers, bullet points, code blocks, components

**Slidev Markdown Structure:**

```markdown
---
theme: default
title: My Presentation
---

# Slide 1 content

---

# Slide 2 content

More content here

---

# Slide 3 content
```

### Step 3: Analyze the Issue

For **overflow issues** (most common):

1. **Check the measurements** from the report:

   ```
   Slide 2: 660px content in 552px viewport = 108px overflow
   ```

2. **View the screenshot** (if available) to see what's actually overflowing

3. **Identify the content structure**:
   - How many bullet points?
   - Any code blocks or large components?
   - **Is the overflow caused by source code?** → Check if overflow < 50px
   - Multiple sections or concepts?
   - Complex layouts (grids, columns)?

4. **Determine if fix is needed**:
   - **Code slides with < 50px overflow**: ✅ ACCEPTABLE - No fix needed
   - **Code slides with ≥ 50px overflow**: Use font reduction (`text-sm`, `text-xs`)
   - **Non-code slides with any overflow**: Split into multiple slides

5. **Determine natural split points** (if not code-heavy and fix is needed):
   - Between major concepts
   - After introductory content
   - Between code examples
   - At logical groupings (e.g., "Problems" vs "Solutions")

**Code slide tolerance rule:**

- Overflow < 50px on code-heavy slides is **acceptable** and requires no fix
- Code blocks are inherently tall; minor overflow doesn't impact comprehension
- Users can scroll if needed for the last few lines

### Step 4: Apply Fixes Based on Issue Type

#### Fix Type 1: Overflow - Split Slides (MOST COMMON)

**Strategy A: Sequential Split (Part 1/2, Part 2/2)**

Use when content is a continuous flow (long bullet list, sequential concepts).

**Before:**

```markdown
---

# The Problem: Single-Agent Ceiling

<div class="grid grid-cols-2 gap-6 mt-8">
<div class="p-6 bg-red-900/30">
<h3>Context Pollution</h3>
<p>One agent juggling planning and coding loses focus</p>
</div>
<div class="p-6 bg-red-900/30">
<h3>Tool Overload</h3>
<p>An agent with all tools may use the wrong one</p>
</div>
<div class="p-6 bg-red-900/30">
<h3>No Specialization</h3>
<p>General-purpose agents can't match specialists</p>
</div>
<div class="p-6 bg-red-900/30">
<h3>Task Complexity</h3>
<p>Real development requires different cognitive modes</p>
</div>
<div class="p-6 bg-red-900/30">
<h3>Limited Context</h3>
<p>Single context window constrains what's possible</p>
</div>
<div class="p-6 bg-red-900/30">
<h3>No Parallel Work</h3>
<p>Can't research and implement simultaneously</p>
</div>
</div>
```

**After (Split into 2 slides):**

```markdown
---
# The Problem: Single-Agent Ceiling (1/2)

<div class="grid grid-cols-2 gap-6 mt-8">
<div class="p-6 bg-red-900/30">
<h3>Context Pollution</h3>
<p>One agent juggling planning and coding loses focus</p>
</div>
<div class="p-6 bg-red-900/30">
<h3>Tool Overload</h3>
<p>An agent with all tools may use the wrong one</p>
</div>
<div class="p-6 bg-red-900/30">
<h3>No Specialization</h3>
<p>General-purpose agents can't match specialists</p>
</div>
</div>
---

# The Problem: Single-Agent Ceiling (2/2)

<div class="grid grid-cols-2 gap-6 mt-8">
<div class="p-6 bg-red-900/30">
<h3>Task Complexity</h3>
<p>Real development requires different cognitive modes</p>
</div>
<div class="p-6 bg-red-900/30">
<h3>Limited Context</h3>
<p>Single context window constrains what's possible</p>
</div>
<div class="p-6 bg-red-900/30">
<h3>No Parallel Work</h3>
<p>Can't research and implement simultaneously</p>
</div>
</div>
```

**Key techniques:**

- Add "(1/2)" and "(2/2)" to titles
- Preserve exact formatting and styling
- Maintain grid/layout structure
- Split at natural boundaries (half the items)

**Strategy B: Concept Split (Problem → Solution)**

Use when slide covers multiple distinct concepts.

**Before:**

```markdown
---

# Authentication Implementation

## The Challenge

- User sessions expire inconsistently
- Token refresh logic is brittle
- No graceful degradation

## The Solution

- Implement sliding window expiration
- Add refresh token rotation
- Build offline-first with sync
```

**After (Split by concept):**

```markdown
---
# Authentication: The Challenge

<div class="text-xl">
Building robust user sessions reveals three core problems:
</div>

- 🔴 **Inconsistent expiration** - User sessions expire unpredictably
- 🔴 **Brittle refresh logic** - Token refresh fails silently
- 🔴 **No degradation** - System breaks entirely when offline

---

# Authentication: The Solution

<div class="text-xl">
Modern patterns that solve these problems:
</div>

- ✅ **Sliding window expiration** - Sessions extend with activity
- ✅ **Refresh token rotation** - Automatic token renewal
- ✅ **Offline-first with sync** - Graceful degradation built-in
```

**Strategy C: Progressive Detail (Overview → Deep Dive)**

Use when slide has summary + detailed explanation.

**Before:**

```markdown
---

# Agent Orchestration Patterns

**Pattern 1: Sequential Chain**
Agents pass results to next agent in sequence.
Benefits: Simple, deterministic, easy to debug.
Implementation: Use output as input, maintain state.

**Pattern 2: Parallel Fan-Out**
Multiple agents work simultaneously.
Benefits: Fast, efficient, scalable.
Implementation: Async execution, result aggregation.
```

**After (Progressive):**

```markdown
---
# Agent Orchestration Patterns

<div class="grid grid-cols-2 gap-8">
<div>

## 🔗 Sequential Chain
Agents pass results to the next in sequence

- Simple and deterministic
- Easy to debug and trace
- Predictable execution order

</div>
<div>

## 🌟 Parallel Fan-Out
Multiple agents work simultaneously

- Fast execution time
- Efficient resource use
- Scalable architecture

</div>
</div>

---

# Pattern Deep Dive: Sequential Chain

## Implementation Strategy

1. **Define agent sequence** - Plan the pipeline
2. **Pass output as input** - Each step feeds the next
3. **Maintain state** - Track progress through chain
4. **Handle errors** - Graceful degradation at each step

## When to Use

- Tasks have natural ordering (plan → implement → test)
- Output of one step is input to next
- Debugging and traceability are important
- Deterministic results are required
```

**Strategy D: Code Block Font Reduction (Code-Heavy Slides)**

Use when overflow is caused by source code or code blocks.

**Before:**

````markdown
---

# Implementation Example

```typescript
export async function orchestrateAgents(task: string) {
  const planner = new PlannerAgent();
  const coder = new CoderAgent();
  const reviewer = new ReviewerAgent();

  const plan = await planner.createPlan(task);
  const implementation = await coder.implement(plan);
  const review = await reviewer.verify(implementation);

  return { plan, implementation, review };
}
\`\`\`
```
````

**After (Reduced font size):**

````markdown
---

# Implementation Example

<div class="text-sm">

```typescript
export async function orchestrateAgents(task: string) {
  const planner = new PlannerAgent();
  const coder = new CoderAgent();
  const reviewer = new ReviewerAgent();

  const plan = await planner.createPlan(task);
  const implementation = await coder.implement(plan);
  const review = await reviewer.verify(implementation);

  return { plan, implementation, review };
}
\`\`\`

</div>
```
````

**Alternative: Use `text-xs` for even smaller code**

```markdown
<div class="text-xs">
\`\`\`typescript
// Very long code example
\`\`\`
</div>
```

**Key techniques for code overflow:**

- Wrap code blocks in `<div class="text-sm">` or `<div class="text-xs">`
- Add `class="text-sm"` to the container holding code
- Use only when code is the primary cause of overflow
- Prefer splitting for mixed content (text + code)
- **Skip fixing if overflow < 50px** - this is acceptable for code slides

#### Fix Type 2: Broken Images

**Problem:** Image paths are incorrect or files don't exist.

**Fix strategies:**

1. **Correct relative paths**: `./image.png` vs `../image.png`
2. **Use public assets**: Images in `public/` directory
3. **Remove broken references**: If image doesn't exist and isn't critical
4. **Add placeholder**: Use emoji or icon as temporary replacement

**Example fix:**

```markdown
<!-- Before: Broken -->
<img src="./diagrams/architecture.png" />

<!-- After: Fixed path -->
<img src="/diagrams/architecture.png" />

<!-- Or: Emoji placeholder -->
<div class="text-6xl">🏗️</div>
```

#### Fix Type 3: Console Errors

**Problem:** JavaScript errors from malformed syntax or invalid components.

**Common issues:**

- Malformed frontmatter YAML
- Invalid component usage
- Typos in layout names
- Unclosed HTML tags

**Example fix:**

```markdown
## <!-- Before: Invalid frontmatter -->

layout: two-cols
class: my-class with spaces

---

## <!-- After: Fixed -->

layout: two-cols
class: "my-class with spaces"

---
```

### Step 5: Preserve Visual Consistency

When splitting slides, maintain:

**1. Title consistency**

- Use "(1/2)", "(2/2)" suffixes
- Or descriptive suffixes: "Problem" → "Solution"
- Keep title hierarchy (h1, h2) consistent

**2. Layout consistency**

- Use same `layout:` frontmatter
- Preserve grid structures (`grid-cols-2`, etc.)
- Keep color schemes and styling

**3. Visual flow**

- Add transition indicators ("continued →", "⬇️ Next")
- Use consistent emoji/icons
- Maintain narrative thread

**4. Frontmatter**

- Frontmatter only on first slide of deck
- Split slides don't repeat frontmatter
- Just use `---` as delimiter

### Step 6: Update and Verify

After applying fixes:

1. **Save the modified slide file**
2. **Invoke slide-verifier** to re-check
3. **Review the new report** - did it fix the issues?
4. **Iterate if needed** - max 3 iterations to prevent loops

**Verification loop:**

```
Fix slides → Verify → Issues remain? → Fix again → Verify → Done
```

## Slidev Markdown Reference

### Slide Delimiters

```markdown
---
# Slide 1
---

# Slide 2

---

# Slide 3
```

### Common Layouts

```markdown
---
layout: center
---

# Centered content

---

## layout: two-cols

# Left Column

::right::

# Right Column

---

layout: image-right
image: /path/to/image.png

---

# Content on left, image on right

---

## layout: default

# Standard layout with header
```

### Grid Layouts

```markdown
<div class="grid grid-cols-2 gap-6">
<div>Column 1</div>
<div>Column 2</div>
</div>

<div class="grid grid-cols-3 gap-4">
<div>Item 1</div>
<div>Item 2</div>
<div>Item 3</div>
</div>
```

### Styling Classes

```markdown
<div class="text-xl">Larger text</div>
<div class="text-center">Centered</div>
<div class="mt-8">Margin top</div>
<div class="p-6">Padding</div>
<div class="bg-blue-900/30">Background</div>
```

## Success Criteria

A slide deck is successfully fixed when:

- ✅ All critical issues from verification report are resolved (except acceptable code overflow)
- ✅ Content is preserved (nothing removed or significantly reduced)
- ✅ Split slides maintain visual consistency
- ✅ Navigation flows logically between split slides
- ✅ Re-verification shows no critical issues (or only code slides with < 50px overflow)
- ✅ Screenshots confirm content fits viewport (552px height) or has acceptable code overflow

**Code slide exception:** Slides with primarily code blocks may have up to 49px overflow without requiring fixes.

## Workflow Integration

### Standalone Usage

```bash
# User manually invokes
@slide-fixer fix overflow in tech-talks/agent-orchestration
```

### slide-generator Agent Integration

The slide-generator agent should:

1. Generate slides from README
2. Invoke @slide-verifier to check for issues
3. If critical issues found:
   - Invoke @slide-fixer to resolve
   - Re-verify to confirm fixes
   - Iterate max 3 times
4. Report final status to user

## Example: Fixing agent-orchestration.md

**Verification report shows:**

- Slide 2: 108px overflow (660px / 552px)
- Slide 9: 46px overflow (598px / 552px)
- Slide 11: 46px overflow (598px / 552px) - code-heavy slide

**Fix process:**

1. **Read slide 2** - Contains 4 grid items (2x2 layout) with problems
2. **Identify split point** - Split after 2 items to create 2 slides
3. **Apply fix:**
   - Slide 2a: Keep first 2 problems + title "(1/2)"
   - Slide 2b: Move last 2 problems + title "(2/2)"
4. **Verify** - Re-run verification to confirm height is now <552px
5. **Repeat for slide 9** following same pattern
6. **Review slide 11** - Code slide with 46px overflow → **No fix needed** (< 50px threshold)

**Result:**

- Slides 2 + 9: Fixed by splitting ✅
- Slide 11: Accepted as-is (code slide exception) ✅

## Best Practices

1. **Always read the verification report first** - Understand what's broken and why
2. **Look at screenshots** - Visual confirmation beats measurements
3. **Preserve styling exactly** - Copy CSS classes, colors, formatting
4. **Split at natural boundaries** - Between concepts, not mid-thought
5. **Add clear indicators** - "(1/2)", "→", "continued" help navigation
6. **Test after each fix** - Re-verify immediately to confirm success
7. **Limit iterations** - Max 3 fix attempts to prevent infinite loops

## Common Pitfalls to Avoid

❌ **Don't remove content** - User wants everything preserved
❌ **Don't change styling** - Maintain exact visual consistency
❌ **Don't split mid-concept** - Find logical boundaries
❌ **Don't create orphan slides** - Ensure context is clear on each slide
❌ **Don't forget title updates** - Add "(1/2)" or descriptive suffixes
❌ **Don't skip re-verification** - Always confirm fixes worked

## Output Format

After fixing slides, report:

```markdown
## Slide Fixes Applied

### Slide 2 → Slides 2a, 2b

**Issue**: 108px overflow (660px content in 552px viewport)
**Fix**: Split into 2 slides at natural boundary (4 items → 2+2)
**Result**: Slide 2a = 552px ✅, Slide 2b = 552px ✅

### Slide 9 → Slides 9a, 9b

**Issue**: 46px overflow (598px content in 552px viewport)
**Fix**: Split into 2 slides, moved last 2 items
**Result**: Slide 9a = 540px ✅, Slide 9b = 520px ✅

### Slide 11

**Issue**: 46px overflow (598px content in 552px viewport)
**Fix**: None needed - code slide with acceptable overflow (< 50px threshold)
**Result**: Accepted as-is ✅

### Re-verification

✅ All critical issues resolved
✅ 18 slides → 20 slides (added 2)
✅ All content preserved
✅ 1 code slide with acceptable overflow (< 50px)
```
