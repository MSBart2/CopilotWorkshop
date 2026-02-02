<script setup lang="ts">
import { computed } from 'vue'
import { useNav } from '@slidev/client'

const { currentPage, total } = useNav()
const slideNumber = computed(() => `${currentPage.value} / ${total.value}`)
</script>

<template>
  <div class="slidev-layout default">
    <slot />
    <div
      class="absolute bottom-4 right-4 text-sm opacity-50 z-50"
      style="background: rgba(255,255,255,0.8); padding: 0.25rem 0.75rem; border-radius: 0.375rem;"
    >
      {{ slideNumber }}
    </div>
  </div>
</template>