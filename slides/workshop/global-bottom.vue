<script setup>
import { useNav } from '@slidev/client'
import { computed } from 'vue'

const { currentPage, total, currentSlideRoute } = useNav()

// Extract module path from frontmatter or fallback to 'workshop'
const deckTitle = computed(() => {
  const frontmatter = currentSlideRoute.value?.meta?.slide?.frontmatter
  const modulePath = frontmatter?.module || 'workshop'
  return `Copilot Training : ${modulePath}`
})
</script>

<template>
  <!-- Branding footer (bottom-left) - watermark style -->
  <footer
    class="absolute bottom-3 left-4 text-xs text-gray-400/40 select-none font-light tracking-wide"
    style="z-index: 100;"
  >
    {{ deckTitle }}
  </footer>

  <!-- Slide numbers (bottom-right) - watermark style -->
  <footer
    v-if="currentPage && total"
    class="absolute bottom-3 right-4 text-xs text-gray-400/40 select-none font-light"
    style="z-index: 100;"
  >
    {{ currentPage }} / {{ total }}
  </footer>
</template>
