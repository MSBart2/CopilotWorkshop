# Global Layers in Slidev

## Important Discovery

When running Slidev with an entry file in a subdirectory (e.g., `slidev workshop/00-orientation.md`), Slidev looks for global layer files in the **same directory as the entry file**, not in the project root.

## Solution

We maintain global layer files in multiple locations:

1. **Root level** (`/slides/global-*.vue`) - For when running `slidev slides.md` from the root
2. **Content directories** - Customized for each content type:
   - `/slides/workshop/global-*.vue` - Workshop modules
   - `/slides/tech-talks/global-*.vue` - Technical deep-dives
   - `/slides/exec-talks/global-*.vue` - Executive presentations

## Current Global Layers

### `global-bottom.vue`
Displays two footer elements on every slide:

**Left footer (branding):** Dynamic title based on deck context
- Workshop: `CopilotTraining : Workshop : 00 Challenge`
- Tech Talk: `CopilotTraining : Tech Talk : [Title]`
- Executive Talk: `CopilotTraining : Executive Talk : [Title]`

**Right footer:** Slide numbers
- Format: `{currentPage} / {total}`
- Example: `1 / 15`

### `global-top.vue`
Currently empty, reserved for future use (e.g., navigation hints)

## Implementation

Each content directory has a customized `global-bottom.vue` that extracts the deck title from the frontmatter and formats it appropriately:

```vue
<script setup>
import { useNav } from '@slidev/client'
import { computed } from 'vue'

const { currentPage, total, currentSlideRoute } = useNav()

// Extract deck name from slide route frontmatter
const deckTitle = computed(() => {
  const frontmatter = currentSlideRoute.value?.meta?.slide?.frontmatter
  const title = frontmatter?.title || 'Workshop'

  // Custom parsing logic for each content type...
  return `CopilotTraining : Workshop : ${formattedTitle}`
})
</script>

<template>
  <!-- Branding footer (bottom-left) -->
  <footer
    class="absolute bottom-4 left-4 text-sm text-gray-600 bg-white/90 px-3 py-1.5 rounded shadow-sm select-none"
    style="z-index: 100;"
  >
    {{ deckTitle }}
  </footer>

  <!-- Slide numbers (bottom-right) -->
  <footer
    v-if="currentPage && total"
    class="absolute bottom-4 right-4 text-sm text-gray-600 bg-white/90 px-3 py-1.5 rounded shadow-sm select-none"
    style="z-index: 100;"
  >
    {{ currentPage }} / {{ total }}
  </footer>
</template>
```

## Benefits

- **Consistent branding** across all presentations
- **No duplication** - removed hardcoded footers from individual slides
- **Dynamic titles** - automatically extracts module/talk name from frontmatter
- **Professional appearance** - persistent branding like PowerPoint templates

## References

- [Slidev Global Layers Documentation](https://sli.dev/features/global-layers)
- [Slidev Global Context Documentation](https://sli.dev/guide/global-context)
