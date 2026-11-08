<script setup lang="ts">
const colorMode = useColorMode();

function cycleTheme() {
  if (colorMode.preference === 'light') {
    colorMode.preference = 'dark';
  } else if (colorMode.preference === 'dark') {
    colorMode.preference = 'system';
  } else {
    colorMode.preference = 'light';
  }
}

const icon = computed(() => {
  switch (colorMode.preference) {
    case 'light':
      return 'lucide:sun';
    case 'dark':
      return 'lucide:moon';
    default:
      return 'lucide:monitor';
  }
});

const label = computed(
  () =>
    `Switch to ${
      colorMode.preference === 'light'
        ? 'dark'
        : colorMode.preference === 'dark'
          ? 'system'
          : 'light'
    } theme`
);
</script>

<template>
  <ClientOnly>
    <template #fallback>
      <span class="inline-flex h-9 w-9 items-center justify-center">
        <Icon name="lucide:sun" size="16" class="text-muted-foreground" />
      </span>
    </template>
    <button
      type="button"
      class="group inline-flex h-9 w-9 items-center justify-center text-muted-foreground transition-colors hover:text-foreground"
      :aria-label="label"
      @click="cycleTheme"
    >
      <Icon
        :name="icon"
        size="16"
        class="transition-transform duration-500 group-hover:rotate-12"
      />
    </button>
  </ClientOnly>
</template>
