<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

const isDesktop = ref(false);
let mediaQuery: MediaQueryList | null = null;

const updateMediaQuery = (e: MediaQueryListEvent | MediaQueryList) => {
  isDesktop.value = e.matches;
};

onMounted(() => {
  mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
  updateMediaQuery(mediaQuery);
  mediaQuery.addEventListener('change', updateMediaQuery);
});

onBeforeUnmount(() => {
  mediaQuery?.removeEventListener('change', updateMediaQuery);
});
</script>

<template>
  <ClientOnly>
    <BitsAnimationsTargetCursor
      v-if="isDesktop"
      :spin-duration="2"
      :hide-default-cursor="true"
    />
  </ClientOnly>
</template>
