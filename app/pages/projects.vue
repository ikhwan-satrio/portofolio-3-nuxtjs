<template>
  <main class="w-full min-h-screen bg-background text-foreground">
    <!-- Hero Section -->
    <section
      class="relative w-full h-screen text-center flex flex-col items-center justify-center gap-8 overflow-hidden"
    >
      <!-- Background Rays -->
      <div class="absolute top-0 w-full h-full z-10">
        <ClientOnly>
          <BitsBackgroundsLightRays
            rays-origin="top-center"
            rays-color="oklch(from var(--color-foreground) l c h / 0.15)"
            :rays-speed="1.0"
            :light-spread="0.5"
            :ray-length="0.8"
            :follow-mouse="true"
            :mouse-influence="0.06"
            :noise-amount="0.15"
            :distortion="0.02"
            class="custom-rays pointer-events-none"
          />
        </ClientOnly>
      </div>

      <!-- Content -->
      <div class="relative z-10 space-y-8">
        <div
          class="flex flex-col items-center justify-center text-center space-y-5"
        >
          <h2
            class="font-poppins text-center text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground p-3"
          >
            My Projects
          </h2>

          <p
            class="font-inter text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            A collection of projects I've worked on — from web apps to
            open-source tools, built with Astro, Svelte, Tauri, and more.
          </p>
        </div>

        <!-- Stats -->
        <div class="flex flex-wrap justify-center gap-10 mt-12">
          <div class="text-center">
            <div class="text-2xl font-bold text-foreground">
              {{ projects.length }}+
            </div>
            <div
              class="text-muted-foreground text-xs uppercase tracking-wider mt-1"
            >
              Projects
            </div>
          </div>
          <div class="text-center">
            <div class="text-2xl font-bold text-foreground">6+</div>
            <div
              class="text-muted-foreground text-xs uppercase tracking-wider mt-1"
            >
              Technologies
            </div>
          </div>
          <div class="text-center">
            <div class="text-2xl font-bold text-foreground">2+</div>
            <div
              class="text-muted-foreground text-xs uppercase tracking-wider mt-1"
            >
              Years Experience
            </div>
          </div>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div class="flex flex-col items-center animate-bounce">
          <span class="text-muted-foreground text-xs mb-2">
            Explore Projects
          </span>
          <svg
            class="w-5 h-5 text-muted-foreground"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>

    <!-- All Projects Section -->
    <motion.section
      class="w-full py-24"
      :initial="{ opacity: 0, y: 50 }"
      :while-in-view="{ opacity: 1, y: 0 }"
      :transition="{ duration: 0.8, ease: 'easeOut' }"
    >
      <div class="max-w-6xl mx-auto px-6">
        <div class="text-center mb-14">
          <h2 class="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            All Projects
          </h2>
          <p class="text-muted-foreground text-base max-w-xl mx-auto">
            Browse through all my projects by category
          </p>
        </div>

        <!-- Category Filter -->
        <div class="flex flex-wrap justify-center gap-2 mb-12">
          <UiButton
            v-for="category in categories"
            :key="category.id"
            :variant="selectedCategory === category.id ? 'default' : 'outline'"
            size="sm"
            @click="selectedCategory = category.id"
          >
            {{ category.name }}
            <UiBadge variant="secondary" class="ml-1.5 text-xs">
              {{ category.count }}
            </UiBadge>
          </UiButton>
        </div>

        <!-- Projects Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          <motion.div
            v-for="(project, index) in filteredProjects"
            :key="project.id"
            :initial="{ opacity: 0, y: 30 }"
            :while-in-view="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }"
            class="group flex flex-col"
          >
            <UiCard
              class="h-full overflow-hidden hover:border-border transition-all duration-300 flex flex-col"
            >
              <!-- Project Image Placeholder -->
              <div class="relative h-44 bg-muted/50">
                <div class="absolute inset-0 flex items-center justify-center">
                  <div class="text-3xl opacity-20">
                    {{
                      project.category === 'web'
                        ? '🌐'
                        : project.category === 'mobile'
                          ? '📱'
                          : project.category === 'ui'
                            ? '🎨'
                            : '🔧'
                    }}
                  </div>
                </div>

                <!-- Status Indicator -->
                <div class="absolute top-3 left-3">
                  <UiBadge
                    :variant="
                      project.status === 'completed' ? 'default' : 'secondary'
                    "
                    class="text-xs"
                  >
                    {{ project.status }}
                  </UiBadge>
                </div>
              </div>

              <!-- Content -->
              <UiCardContent class="p-5 flex flex-col h-full">
                <div class="flex-1 space-y-3">
                  <h3
                    class="text-base font-semibold text-foreground group-hover:text-foreground/80 transition-colors duration-200"
                  >
                    {{ project.title }}
                  </h3>

                  <p class="text-muted-foreground text-sm leading-relaxed">
                    {{ project.description }}
                  </p>

                  <!-- Tech Stack -->
                  <div class="flex flex-wrap gap-1">
                    <UiBadge
                      v-for="tech in project.technologies.slice(0, 3)"
                      :key="tech"
                      variant="outline"
                      class="text-xs"
                    >
                      {{ tech }}
                    </UiBadge>
                    <span
                      v-if="project.technologies.length > 3"
                      class="px-2 py-0.5 text-muted-foreground/60 text-xs"
                    >
                      +{{ project.technologies.length - 3 }}
                    </span>
                  </div>
                </div>

                <!-- Links -->
                <div class="flex gap-2 mt-5">
                  <a
                    v-if="project.demoUrl"
                    :href="project.demoUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex-1"
                  >
                    <UiButton size="sm" class="w-full"> Demo </UiButton>
                  </a>
                  <a
                    v-if="project.githubUrl"
                    :href="project.githubUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex-1"
                    :class="{ 'flex-1 text-center': !project.demoUrl }"
                  >
                    <UiButton size="sm" variant="outline" class="w-full">
                      Code
                    </UiButton>
                  </a>
                </div>
              </UiCardContent>
            </UiCard>
          </motion.div>
        </div>
      </div>
    </motion.section>

    <!-- CTA Section -->
    <motion.section
      class="w-full py-24"
      :initial="{ opacity: 0, y: 50 }"
      :while-in-view="{ opacity: 1, y: 0 }"
      :transition="{ duration: 0.8, ease: 'easeOut' }"
    >
      <div class="max-w-3xl mx-auto text-center px-6">
        <UiCard class="bg-muted/30">
          <UiCardContent class="pt-6">
            <h2 class="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Have a Project in Mind?
            </h2>
            <p
              class="text-muted-foreground text-base mb-8 max-w-xl mx-auto leading-relaxed"
            >
              I'm always excited to work on interesting projects and collaborate
              with passionate people. Let's bring your ideas to life!
            </p>
            <div class="flex flex-col sm:flex-row gap-3 justify-center">
              <NuxtLink to="/contact">
                <UiButton class="min-w-36">Start a Project</UiButton>
              </NuxtLink>
              <NuxtLink to="/about">
                <UiButton variant="outline" class="min-w-36">
                  Learn More About Me
                </UiButton>
              </NuxtLink>
            </div>
          </UiCardContent>
        </UiCard>
      </div>
    </motion.section>
  </main>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { motion } from 'motion-v';

// Data
const categoryList = [
  { id: 'all', name: 'All Projects' },
  { id: 'web', name: 'Web Apps' },
  { id: 'mobile', name: 'Mobile' },
  { id: 'ui', name: 'UI/UX' },
  { id: 'opensource', name: 'Open Source' },
];

const projects = [
  {
    id: 1,
    title: 'Portfolio and personal blog',
    description: 'My other portfolio with personal blog features',
    category: 'web',
    technologies: ['AstroJS', 'TypeScript', 'Tailwind CSS', 'SolidJS'],
    githubUrl: 'https://github.com/ikhwan-satrio/astro-portofolio',
    status: 'completed',
  },
  {
    id: 2,
    title: 'Lenovo Vantage for Linux',
    description: 'Lenovo Vantage for Linux, built with Tauri and Svelte',
    category: 'opensource',
    technologies: ['Svelte', 'Tauri', 'Rust', 'Tailwind CSS'],
    githubUrl: 'https://github.com/ikhwan-satrio/linux_vantage',
    status: 'completed',
  },
  {
    id: 3,
    title: 'Telegram TikTok Bot',
    description: 'Telegram bot that downloads TikTok videos without watermark',
    category: 'opensource',
    technologies: ['TypeScript', 'Deno', 'WebHook'],
    githubUrl: 'https://github.com/ikhwan-satrio/deno_telegrambot',
    status: 'completed',
  },
  {
    id: 4,
    title: 'MyUangGwe',
    description:
      'Free, no-ad, multi-currency personal & collaborative finance tracker with multi-wallet, budgets, recurring transactions, and financial goals',
    category: 'web',
    technologies: ['Nuxt 4', 'TypeScript', 'Drizzle ORM', 'Turso', 'GraphQL'],
    githubUrl: 'https://github.com/ikhwan-satrio/myuanggwe-nuxt',
    demoUrl: 'https://myuanggwe.vercel.app',
    status: 'completed',
  },
  {
    id: 5,
    title: 'TeddyPicker',
    description:
      'Fast, cross-platform desktop file manager with extension system for themes and functional plugins',
    category: 'opensource',
    technologies: ['Svelte 5', 'Tauri v2', 'Rust', 'Tailwind CSS'],
    githubUrl: 'https://github.com/ikhwan-satrio/teddypicker',
    status: 'completed',
  },
  {
    id: 6,
    title: 'Gibterm',
    description:
      'Desktop terminal emulator with multi-tab PTY support, built-in file explorer, and git operations',
    category: 'opensource',
    technologies: ['Svelte 5', 'Tauri v2', 'Rust', 'xterm.js'],
    githubUrl: 'https://github.com/ikhwan-satrio/gibterm',
    status: 'completed',
  },
  {
    id: 7,
    title: 'MyUangGwe Mobile',
    description:
      'Mobile companion app for MyUangGwe finance tracker, built with Expo for Android and iOS',
    category: 'mobile',
    technologies: ['Expo', 'React Native', 'TypeScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com/ikhwan-satrio/myuanggwe-mobile',
    status: 'in-progress',
  },
];

// State
const selectedCategory = ref('all');

// Computed
const categories = computed(() =>
  categoryList.map(c => ({
    ...c,
    count:
      c.id === 'all'
        ? projects.length
        : projects.filter(p => p.category === c.id).length,
  }))
);

const filteredProjects = computed(() => {
  return selectedCategory.value === 'all'
    ? projects
    : projects.filter(p => p.category === selectedCategory.value);
});

// Meta
useHead({
  title: 'projects',
  meta: [
    {
      name: 'description',
      content:
        'Explore the portfolio of Ikhwan Satrio – Frontend Developer. Showcasing web apps, open-source tools, and more built with Astro, Svelte, Tauri, and modern web tech.',
    },
  ],
});
</script>
