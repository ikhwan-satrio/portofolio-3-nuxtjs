<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError
})

const route = useRoute()
const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <div class="editorial-grid pointer-events-none absolute inset-0 opacity-50" />
  <div class=" z-40 flex gap-2 flex-col items-center justify-center min-h-screen text-center px-4 bg-background">

    <div v-if="error?.status === 404">
      <h1 class="text-7xl block font-serif font-extrabold text-brand mb-2">404</h1>
      <p class="text-2xl font-semibold text-brand mb-2">Dude theres no page {{ route.path }}</p>
    </div>

    <div v-else>
      <h1 class="text-7xl font-extrabold text-red-600 mb-2">{{ error?.status }}</h1>
      <p class="text-2xl font-semibold text-gray-800 mb-2">Oh no...</p>
      <p class="text-gray-500 mb-6">{{ error?.message }}</p>
    </div>

    <div class=" flex gap-2 flex-wrap">
      <button @click="handleError"
        class="group inline-flex items-center gap-3 border border-foreground bg-foreground px-5 sm:px-6 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-background transition-colors hover:bg-transparent hover:text-foreground">
        Go back bro...
      </button>

      <a href="mailto:ikwansatria3974@gmail.com"
        class="group inline-flex items-center gap-3 border border-red-600 bg-red-600 px-5 sm:px-6 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-background transition-colors hover:bg-transparent hover:text-foreground">
        If it get worse call me
      </a>

    </div>
  </div>
</template>
