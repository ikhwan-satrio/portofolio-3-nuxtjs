<script setup lang="ts">
type QuickLink = { name: string; to: string } | { name: string; id: string };

const NuxtLink = resolveComponent('NuxtLink');
const currentYear = new Date().getFullYear();
const { scrollToSection } = useSectionNavigation();

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/ikhwan-satrio',
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/ikhwan-satrio',
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/ikhwansatrio',
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/wantoobrrrrrr/',
  },
];

const quickLinks: QuickLink[] = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Work', id: 'work' },
  { name: 'Journal', to: '/blogs' },
  { name: 'Contact', id: 'contact' },
];

const showTop = ref(false);

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function handleQuickLink(link: QuickLink) {
  if ('id' in link) scrollToSection(link.id);
}

onMounted(() => {
  const onScroll = () => {
    showTop.value = window.scrollY > 600;
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
  onUnmounted(() => {
    window.removeEventListener('scroll', onScroll);
  });
});
</script>

<template>
  <footer
    class="relative w-full overflow-x-clip border-t border-border bg-background"
  >
    <div class="mx-auto w-full max-w-[1440px] px-4 sm:px-8">
      <div class="flex flex-col gap-10 border-b border-border py-16 sm:py-20">
        <div class="col-span-12 lg:col-span-7 min-w-0">
          <span
            class="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground"
          >
            Next step
          </span>
          <button
            type="button"
            class="group mt-5 block text-left font-display text-[clamp(2.25rem,7vw,6rem)] leading-[0.85] tracking-[-0.03em] break-words"
            @click="scrollToSection('contact')"
          >
            Let's make<br />
            <span
              class="italic text-brand transition-opacity group-hover:opacity-70"
            >
              something good.
            </span>
          </button>
        </div>

        <div
          class="w-full flex flex-wrap flex-row justify-around gap-8 lg:pl-10"
        >
          <div>
            <h4
              class="font-mono text-[9px] uppercase tracking-[0.22em] text-muted-foreground"
            >
              Sitemap
            </h4>
            <ul class="mt-4 space-y-2">
              <li v-for="link in quickLinks" :key="link.name">
                <component
                  :is="'to' in link ? NuxtLink : 'button'"
                  :to="'to' in link ? link.to : undefined"
                  :type="'to' in link ? undefined : 'button'"
                  class="font-display text-xl leading-none text-foreground transition-colors hover:text-brand"
                  @click="handleQuickLink(link)"
                >
                  {{ link.name }}
                </component>
              </li>
            </ul>
          </div>

          <div>
            <h4
              class="font-mono text-[9px] uppercase tracking-[0.22em] text-muted-foreground"
            >
              Elsewhere
            </h4>
            <ul class="mt-4 space-y-2">
              <li v-for="social in socialLinks" :key="social.name">
                <a
                  :href="social.href"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-brand"
                  :aria-label="social.name"
                >
                  {{ social.name }} <span aria-hidden="true">↗</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="overflow-hidden border-b border-border py-8 w-full">
        <p
          class="text-outline whitespace-nowrap font-display text-[clamp(2.5rem,11vw,11rem)] leading-[0.8] tracking-[-0.04em]"
        >
          IKHWAN SATRIO
        </p>
      </div>

      <div
        class="flex flex-col gap-3 py-6 font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground sm:flex-row sm:items-center sm:justify-between"
      >
        <span>&copy; {{ currentYear }} Ikhwan Satrio</span>
        <span>Designed & built with intent</span>
        <span>Nuxt / TypeScript</span>
      </div>
    </div>

    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="translate-y-2 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="translate-y-2 opacity-0"
    >
      <button
        v-if="showTop"
        type="button"
        class="fixed bottom-6 right-6 z-40 hidden h-10 w-10 sm:inline-flex items-center justify-center border border-border bg-background text-foreground transition-colors hover:border-foreground hover:bg-foreground hover:text-background shadow-md"
        aria-label="Scroll to top"
        @click="scrollToTop"
      >
        <Icon name="lucide:arrow-up" size="15" />
      </button>
    </Transition>
  </footer>
</template>
