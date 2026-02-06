<script setup>
import { useNav, useRoute } from '@slidev/client'

const { currentPage, total } = useNav()
const route = useRoute()

// Extract deck name from route path
const getDeckName = () => {
  const path = route?.path || window.location.pathname
  // Remove leading slash and extract path segments
  const segments = path.replace(/^\//, '').split('/')

  if (segments.length === 0) return 'CopilotTraining'

  // Get category and filename from path
  let category = ''
  let deckName = ''

  // Check if we're in a subdirectory (workshop, tech-talks, exec-talks)
  if (segments[0] === 'workshop' || segments[0] === 'tech-talks' || segments[0] === 'exec-talks') {
    category = segments[0].split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')

    // Extract deck name from second segment if it exists
    if (segments[1]) {
      deckName = segments[1]
        .replace(/\.md$/, '')
        .split('-')
        .map(w => w.charAt(0).toUpperCase() + w.slice(1))
        .join(' ')
    }
  } else {
    // Single-level path
    deckName = segments[0]
      .replace(/\.md$/, '')
      .split('-')
      .map(w => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ')
  }

  // Build full title
  let title = 'CopilotTraining'
  if (category) title += ` : ${category}`
  if (deckName) title += ` : ${deckName}`

  return title
}

const deckTitle = getDeckName()
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
