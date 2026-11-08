<script setup lang="ts">
const isOpen = ref(false);
const route = useRoute();
const menuRef = ref<HTMLElement | null>(null);

const links = [
  { to: '/', label: 'Home', index: '01' },
  { to: '/about', label: 'About', index: '02' },
  { to: '/projects', label: 'Projects', index: '03' },
  { to: '/blogs', label: 'Journal', index: '04' },
  { to: '/contact', label: 'Contact', index: '05' },
];

function isActive(to: string) {
  if (to === '/') return route.path === '/';
  return route.path === to || route.path.startsWith(`${to}/`);
}

watch(
  () => route.path,
  () => {
    isOpen.value = false;
  }
);

onMounted(() => {
  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.value && !menuRef.value.contains(event.target as Node)) {
      isOpen.value = false;
    }
  };
  document.addEventListener('click', handleClickOutside);
  onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside);
  });
});
</script>

<template>
  <header
    ref="menuRef"
    class="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl"
  >
    <div
      class="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 sm:px-8"
    >
      <!-- Identity -->
      <NuxtLink to="/" class="group flex items-center gap-3">
        <span
          class="flex h-8 w-8 items-center justify-center bg-foreground text-background transition-transform duration-300 group-hover:-rotate-6"
        >
          <span class="font-mono text-[11px] font-semibold tracking-tighter">
            IS
          </span>
        </span>
        <span class="flex flex-col leading-none">
          <span class="font-display text-lg leading-none">Ikhwan Satrio</span>
          <span
            class="mt-1 font-mono text-[9px] uppercase tracking-[0.24em] text-muted-foreground"
          >
            Fullstack & robotics
          </span>
        </span>
      </NuxtLink>

      <!-- Desktop navigation -->
      <nav class="hidden items-center gap-7 md:flex">
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="group relative flex items-baseline gap-1.5 font-mono text-[11px] uppercase tracking-[0.16em] transition-colors"
          :class="
            isActive(link.to)
              ? 'text-foreground'
              : 'text-muted-foreground hover:text-foreground'
          "
        >
          <span class="text-[9px] text-muted-foreground/50">
            {{ link.index }}
          </span>
          <span>{{ link.label }}</span>
          <span
            class="absolute -bottom-[21px] left-0 h-px w-full origin-left bg-brand transition-transform duration-300"
            :class="
              isActive(link.to)
                ? 'scale-x-100'
                : 'scale-x-0 group-hover:scale-x-100'
            "
          />
        </NuxtLink>
      </nav>

      <!-- Actions -->
      <div class="flex items-center gap-1">
        <LayoutThemeToggle />
        <a
          href="https://github.com/ikhwan-satrio"
          target="_blank"
          rel="noopener noreferrer"
          class="hidden items-center gap-1.5 border-l border-border pl-4 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground sm:flex"
        >
          GitHub <span aria-hidden="true">↗</span>
        </a>
        <button
          type="button"
          class="inline-flex h-9 w-9 items-center justify-center text-muted-foreground transition-colors hover:text-foreground md:hidden"
          :aria-label="isOpen ? 'Close menu' : 'Open menu'"
          :aria-expanded="isOpen"
          @click="isOpen = !isOpen"
        >
          <Icon :name="isOpen ? 'lucide:x' : 'lucide:menu'" size="18" />
        </button>
      </div>
    </div>

    <!-- Mobile navigation -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div v-if="isOpen" class="border-t border-border bg-background md:hidden">
        <nav class="mx-auto flex max-w-[1440px] flex-col px-5 py-2">
          <NuxtLink
            v-for="link in links"
            :key="link.to"
            :to="link.to"
            class="flex items-baseline justify-between border-b border-border/60 py-4 last:border-0"
          >
            <span
              class="font-display text-3xl"
              :class="
                isActive(link.to) ? 'text-brand italic' : 'text-foreground'
              "
            >
              {{ link.label }}
            </span>
            <span class="font-mono text-[10px] text-muted-foreground">
              {{ link.index }}
            </span>
          </NuxtLink>
          <a
            href="https://github.com/ikhwan-satrio"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center justify-between py-4 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground"
          >
            GitHub <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </div>
    </Transition>
  </header>
</template>
