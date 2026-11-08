<script setup lang="ts">
const currentYear = new Date().getFullYear();

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

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Journal', href: '/blogs' },
  { name: 'Contact', href: '/contact' },
];

const showTop = ref(false);

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
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
  <footer class="relative w-full overflow-x-hidden border-t border-border bg-background">
    <!-- Menggunakan px-4 agar aman dan pas di layar handphone sangat kecil -->
    <div class="mx-auto w-full max-w-[1440px] px-4 sm:px-8">
      <!-- CTA -->
      <div class="flex flex-col gap-10 border-b border-border py-16 sm:py-20">
        <div class="col-span-12 lg:col-span-7 min-w-0">
          <span class="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Next step
          </span>
          <NuxtLink to="/contact"
            class="group mt-5 block font-display text-[clamp(2.25rem,7vw,6rem)] leading-[0.85] tracking-[-0.03em] break-words">
            Let's make<br />
            <span class="italic text-brand transition-opacity group-hover:opacity-70">
              something good.
            </span>
          </NuxtLink>
        </div>

        <div class="w-full flex flex-wrap flex-row justify-around gap-8 lg:pl-10">
          <div>
            <h4 class="font-mono text-[9px] uppercase tracking-[0.22em] text-muted-foreground">
              Sitemap
            </h4>
            <ul class="mt-4 space-y-2">
              <li v-for="link in quickLinks" :key="link.name">
                <NuxtLink :to="link.href"
                  class="font-display text-xl leading-none text-foreground transition-colors hover:text-brand">
                  {{ link.name }}
                </NuxtLink>
              </li>
            </ul>
          </div>

          <div>
            <h4 class="font-mono text-[9px] uppercase tracking-[0.22em] text-muted-foreground">
              Elsewhere
            </h4>
            <ul class="mt-4 space-y-2">
              <li v-for="social in socialLinks" :key="social.name">
                <a :href="social.href" target="_blank" rel="noopener noreferrer"
                  class="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-brand"
                  :aria-label="social.name">
                  {{ social.name }} <span aria-hidden="true">↗</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Oversized wordmark (Diatur agar tidak memicu overflow horizontal) -->
      <div class="overflow-hidden border-b border-border py-8 w-full">
        <p
          class="text-outline whitespace-nowrap font-display text-[clamp(2.5rem,11vw,11rem)] leading-[0.8] tracking-[-0.04em]">
          IKHWAN SATRIO
        </p>
      </div>

      <!-- Colophon -->
      <div
        class="flex flex-col gap-3 py-6 font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <span>&copy; {{ currentYear }} Ikhwan Satrio</span>
        <span>Designed & built with intent</span>
        <span>Nuxt / TypeScript</span>
      </div>
    </div>

    <!-- Scroll to top button -->
    <Transition enter-active-class="transition-all duration-300 ease-out" enter-from-class="translate-y-2 opacity-0"
      enter-to-class="translate-y-0 opacity-100" leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="translate-y-0 opacity-100" leave-to-class="translate-y-2 opacity-0">
      <button v-if="showTop" type="button"
        class="fixed bottom-6 right-6 z-40 inline-flex h-10 w-10 items-center justify-center border border-border bg-background text-foreground transition-colors hover:border-foreground hover:bg-foreground hover:text-background shadow-md"
        aria-label="Scroll to top" @click="scrollToTop">
        <Icon name="lucide:arrow-up" size="15" />
      </button>
    </Transition>
  </footer>
</template>
