<script setup lang="ts">
interface Section {
  id: string;
  title: string;
}

const props = defineProps<{
  sections: Section[];
}>();

const activeIndex = ref(0);
const progressEl = ref<HTMLElement | null>(null);
let cleanup: (() => void) | null = null;

onMounted(async () => {
  if (!import.meta.client) return;

  const [{ gsap }, { ScrollTrigger }] = await Promise.all([
    import('gsap'),
    import('gsap/ScrollTrigger'),
  ]);

  gsap.registerPlugin(ScrollTrigger);
  await nextTick();

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const index = props.sections.findIndex(
          section => section.id === entry.target.id
        );
        if (index !== -1) activeIndex.value = index;
      });
    },
    { root: null, rootMargin: '-50% 0px -50% 0px', threshold: 0 }
  );

  props.sections.forEach(section => {
    const el = document.getElementById(section.id);
    if (el) observer.observe(el);
  });

  const context = gsap.context(() => {
    if (!progressEl.value) return;

    gsap.to(progressEl.value, {
      height: '100%',
      ease: 'none',
      scrollTrigger: {
        trigger: '.container-sections',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.3,
      },
    });
  });

  cleanup = () => {
    observer.disconnect();
    context.revert();
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

      <ul
        class="absolute inset-y-0 left-1/2 flex -translate-x-1/2 list-none flex-col justify-between p-0"
      >
        <li
          v-for="(section, index) in sections"
          :key="section.id"
          class="relative flex h-2.5 w-2.5 items-center justify-center"
        >
          <a
            :href="`#${section.id}`"
            class="group relative flex h-2.5 w-2.5 items-center justify-center"
            :aria-label="section.title"
            :aria-current="activeIndex === index ? 'true' : undefined"
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
          </a>
        </li>
      </ul>
    </div>
  </aside>
</template>
