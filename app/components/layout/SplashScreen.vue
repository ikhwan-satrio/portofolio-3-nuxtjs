<script setup lang="ts">
const isVisible = ref(true);

onMounted(() => {
  setTimeout(() => {
    isVisible.value = false;
  }, 1800);
});
</script>

<template>
  <Transition
    enter-active-class="transition-opacity duration-500 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition-opacity duration-700 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="isVisible"
      class="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background"
    >
      <div class="text-center">
        <p
          class="font-mono text-[9px] uppercase tracking-[0.42em] text-muted-foreground"
        >
          Portfolio — 2026
        </p>
        <p class="mt-4 font-display text-5xl sm:text-6xl">
          Ikhwan Satrio<span class="text-brand">.</span>
        </p>
      </div>

      <div class="mt-10 h-px w-40 overflow-hidden bg-border">
        <div class="animate-draw h-full w-full origin-left bg-brand" />
      </div>
    </div>
  </Transition>
</template>
