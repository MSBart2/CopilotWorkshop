<template>
  <div class="fixed bottom-4 right-4 text-sm opacity-50 z-50 bg-white/80 px-2 py-1 rounded">
    {{ current }} / {{ total }}
  </div>
</template>

<script setup>
defineProps({
  current: { type: Number, default: 1 },
  total: { type: Number, default: 1 }
})
</script>