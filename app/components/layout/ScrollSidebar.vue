<script setup lang="ts">
interface Section {
  id: string;
  title: string;
}

const props = defineProps<{
  sections: Section[];
}>();

const { activeSection, scrollToSection, observeSections } =
  useSectionNavigation();
const progressEl = ref<HTMLElement | null>(null);
let cleanup: (() => void) | null = null;

const activeIndex = computed(() =>
  Math.max(
    0,
    props.sections.findIndex(section => section.id === activeSection.value)
  )
);

const progressPercent = computed(() => {
  const total = props.sections.length - 1;
  return total > 0 ? (activeIndex.value / total) * 100 : 0;
});

function dotPosition(index: number) {
  const total = props.sections.length - 1;
  return total > 0 ? `${(index / total) * 100}%` : '0%';
}

onMounted(async () => {
  if (!import.meta.client) return;

  const { gsap } = await import('gsap');

  await nextTick();

  const stopObserver = observeSections(
    props.sections.map(section => section.id)
  );

  if (progressEl.value) {
    gsap.set(progressEl.value, { height: `${progressPercent.value}%` });
  }

  const stopActiveWatch = watch(activeIndex, () => {
    if (!progressEl.value) return;
    gsap.to(progressEl.value, {
      height: `${progressPercent.value}%`,
      duration: 0.3,
      ease: 'power2.out',
      overwrite: true,
    });
  });

  cleanup = () => {
    stopObserver();
    stopActiveWatch();
  };
});

onBeforeUnmount(() => {
  cleanup?.();
});
</script>

<template>
  <aside
    class="fixed left-1 top-1/2 z-40 -translate-y-1/2 sm:left-1.5"
    aria-label="Section navigation"
  >
    <div class="relative h-32 w-px bg-border sm:h-48 lg:h-56">
      <div
        ref="progressEl"
        class="absolute inset-x-0 top-0 w-px bg-brand"
        style="height: 0"
      />

      <ul class="absolute inset-0 list-none p-0">
        <li
          v-for="(section, index) in sections"
          :key="section.id"
          class="absolute left-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2"
          :style="{ top: dotPosition(index) }"
        >
          <button
            type="button"
            class="group relative flex h-2.5 w-2.5 items-center justify-center"
            :aria-label="section.title"
            :aria-current="activeIndex === index ? 'true' : undefined"
            @click="scrollToSection(section.id)"
          >
            <span
              class="h-1.5 w-1.5 rounded-full transition-all duration-300"
              :class="
                activeIndex === index
                  ? 'scale-125 bg-brand'
                  : 'bg-border group-hover:bg-muted-foreground'
              "
            />
            <span
              class="pointer-events-none absolute left-5 top-1/2 hidden -translate-y-1/2 whitespace-nowrap sm:block border border-border bg-background px-2 py-1 font-mono text-[9px] uppercase tracking-[0.16em] text-foreground opacity-0 shadow-sm transition-opacity duration-200 group-hover:opacity-100"
            >
              {{ section.title }}
            </span>
          </button>
        </li>
      </ul>
    </div>
  </aside>
</template>
