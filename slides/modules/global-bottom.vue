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
