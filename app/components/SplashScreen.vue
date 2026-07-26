<script setup lang="ts">
import icon from '~/assets/images/favicon.png';

const isVisible = ref(true);

onMounted(() => {
  setTimeout(() => {
    isVisible.value = false;
  }, 2000);
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
      <!-- Logo -->
      <div class="relative">
        <img :src="icon" alt="Logo" class="h-20 w-20 animate-pulse-subtle" />
      </div>

      <!-- Loading Dots -->
      <div class="flex items-center gap-1.5 mt-8">
        <span class="loading-dot" />
        <span class="loading-dot" />
        <span class="loading-dot" />
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.animate-pulse-subtle {
  animation: pulse-subtle 2s ease-in-out infinite;
}

@keyframes pulse-subtle {
  0%,
  100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.02);
  }
}

.loading-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: var(--color-muted-foreground);
  animation: dot-bounce 1.4s ease-in-out infinite;
}

.loading-dot:nth-child(1) {
  animation-delay: 0s;
}

.loading-dot:nth-child(2) {
  animation-delay: 0.2s;
}

.loading-dot:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes dot-bounce {
  0%,
  80%,
  100% {
    opacity: 0.3;
    transform: scale(0.8);
  }
  40% {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
