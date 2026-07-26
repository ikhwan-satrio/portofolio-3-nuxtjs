<script setup lang="ts">
const currentYear = new Date().getFullYear();

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/ikhwan-satrio',
    icon: 'fa:github',
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/ikhwan-satrio',
    icon: 'fa:linkedin',
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/ikhwansatrio',
    icon: 'fa:twitter',
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/wantoobrrrrrr/',
    icon: 'fa:instagram',
  },
];

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
];

const techStack = ['JavaScript', 'TypeScript', 'Vue', 'Nuxt', 'Bun'];

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
</script>

<template>
  <footer class="bg-background">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Main Footer Content -->
      <div
        class="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12"
      >
        <!-- Brand Section -->
        <div class="lg:col-span-2 space-y-5">
          <div class="flex items-center space-x-3">
            <div
              class="w-9 h-9 bg-foreground rounded-full flex items-center justify-center"
            >
              <span class="text-background font-bold text-sm">IS</span>
            </div>
            <div>
              <h3 class="text-lg font-semibold text-foreground">
                Ikhwan Satrio
              </h3>
              <p class="text-muted-foreground text-xs">Young Programmer</p>
            </div>
          </div>

          <p class="text-muted-foreground leading-relaxed max-w-md text-sm">
            Passionate frontend developer crafting beautiful and performant web
            experiences with modern technologies. Always learning, always
            building.
          </p>

          <!-- Social Links -->
          <div class="flex space-x-2">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.href"
              target="_blank"
              rel="noopener noreferrer"
              class="w-9 h-9 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-200"
              :aria-label="social.name"
            >
              <Icon :name="social.icon" :size="18" class="flex-shrink-0" />
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="space-y-5">
          <h4
            class="text-sm font-semibold text-foreground uppercase tracking-wider"
          >
            Quick Links
          </h4>
          <ul class="space-y-2.5">
            <li v-for="link in quickLinks" :key="link.name">
              <NuxtLink
                :to="link.href"
                class="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm"
              >
                {{ link.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Tech Stack -->
        <div class="space-y-5">
          <h4
            class="text-sm font-semibold text-foreground uppercase tracking-wider"
          >
            Tech Stack
          </h4>
          <div class="flex flex-wrap gap-1.5">
            <UiBadge v-for="tech in techStack" :key="tech" variant="secondary">
              {{ tech }}
            </UiBadge>
          </div>

          <!-- Status -->
          <div class="flex items-center space-x-2">
            <div class="w-1.5 h-1.5 bg-chart-5 rounded-full animate-pulse" />
            <span class="text-xs text-muted-foreground"
              >Available for projects</span
            >
          </div>
        </div>
      </div>

      <!-- Bottom Section -->
      <UiSeparator class="my-5" />
      <div
        class="py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs"
      >
        <div
          class="flex flex-wrap items-center justify-center gap-1 text-muted-foreground"
        >
          <span>&copy; {{ currentYear }} Ikhwan Satrio.</span>
          <span>Made with</span>
          <span class="text-destructive">♥</span>
          <span>and lots of</span>
          <span>☕</span>
        </div>

        <div class="flex items-center gap-1 text-muted-foreground">
          <span>Built with</span>
          <span class="text-foreground font-medium">Nuxt</span>
        </div>
      </div>
    </div>

    <!-- Scroll to Top Button -->
    <UiButton
      size="icon"
      class="fixed bottom-6 right-10 w-10 h-10 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 z-50 group"
      aria-label="Scroll to top"
      @click="scrollToTop"
    >
      <Icon
        name="lucide:arrow-up"
        class="group-hover:-translate-y-0.5 transition-transform"
        :size="18"
      />
    </UiButton>
  </footer>
</template>
