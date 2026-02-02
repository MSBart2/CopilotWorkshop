# Global Layers in Slidev

## Important Discovery

When running Slidev with an entry file in a subdirectory (e.g., `slidev modules/00-orientation.md`), Slidev looks for global layer files in the **same directory as the entry file**, not in the project root.

## Solution

We maintain global layer files in two locations:

1. **Root level** (`/slides/global-*.vue`) - For when running `slidev slides.md` from the root
2. **Modules directory** (`/slides/modules/global-*.vue`) - For when running module-specific slides

## Current Global Layers

### `global-bottom.vue`
Displays slide numbers in the bottom-right corner of every slide:
- Format: `{currentPage} / {total}`
- Styled with semi-transparent white background
- Uses `useNav()` composable from `@slidev/client`

### `global-top.vue`
Currently empty, reserved for future use (e.g., workshop branding, navigation hints)

## Implementation

```vue
<script setup>
import { useNav } from '@slidev/client'

const { currentPage, total } = useNav()
</script>

<template>
  <footer
    v-if="currentPage && total"
    class="absolute bottom-4 right-4 text-sm text-gray-600 bg-white/90 px-3 py-1.5 rounded shadow-sm select-none"
    style="z-index: 100;"
  >
    {{ currentPage }} / {{ total }}
  </footer>
</template>
```

## References

- [Slidev Global Layers Documentation](https://sli.dev/features/global-layers)
- [Slidev Global Context Documentation](https://sli.dev/guide/global-context)
