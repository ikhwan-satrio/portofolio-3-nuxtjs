<script setup lang="ts">
import { ref, computed } from 'vue';

const categoryList = [
  { id: 'all', name: 'All' },
  { id: 'web', name: 'Web' },
  { id: 'mobile', name: 'Mobile' },
  { id: 'ui', name: 'UI/UX' },
  { id: 'opensource', name: 'Open source' },
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

const selectedCategory = ref('all');

const pad = (value: number) => String(value).padStart(2, '0');

const openSourceCount = projects.filter(
  project => project.category === 'opensource'
).length;
const ongoingCount = projects.filter(
  project => project.status !== 'completed'
).length;

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

useHead({
  title: 'projects',
  meta: [
    {
      name: 'description',
      content:
        'Explore the portfolio of Ikhwan Satrio — Fullstack Developer & Robotics Engineer. Showcasing web apps, desktop tools, robotics experiments, and open-source projects.',
    },
  ],
});
</script>

<template>
  <main class="w-full overflow-x-hidden flex flex-col">
    <section class="relative flex min-h-screen items-center overflow-hidden border-b border-border pt-16">
      <div class="editorial-grid pointer-events-none absolute inset-0 opacity-50" />
      <div class="relative mx-auto flex w-full max-w-[1440px] flex-col justify-center px-4 py-16 sm:px-8 sm:py-28">
        <div class="animate-fade-up flex items-center gap-4">
          <span class="h-px w-10 bg-brand shrink-0" />
          <span class="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground truncate">
            Index — 03
          </span>
        </div>

        <div class="mt-8 flex flex-col lg:flex-row lg:items-end justify-between gap-10">
          <h1
            class="animate-fade-up font-display text-[clamp(2.75rem,10vw,10rem)] leading-[0.82] tracking-[-0.04em] break-words w-full lg:w-2/3"
            style="animation-delay: 0.08s">
            Selected<br />
            <span class="italic text-brand">work</span>
          </h1>

          <div class="animate-fade-up flex flex-col space-y-6 w-full lg:w-1/3 shrink-0" style="animation-delay: 0.16s">
            <p class="max-w-sm text-xs sm:text-sm leading-relaxed text-muted-foreground break-words">
              A collection of projects I've worked on — web apps, desktop tools,
              robotics experiments, and open-source work built with modern,
              boring-in-a-good-way technology.
            </p>

            <dl
              class="grid grid-cols-3 gap-4 border-t border-border pt-4 font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground">
              <div>
                <dt>Projects</dt>
                <dd class="mt-1 font-display text-xl sm:text-2xl text-foreground">
                  {{ pad(projects.length) }}
                </dd>
              </div>
              <div>
                <dt>Open source</dt>
                <dd class="mt-1 font-display text-xl sm:text-2xl text-foreground">
                  {{ pad(openSourceCount) }}
                </dd>
              </div>
              <div>
                <dt>Ongoing</dt>
                <dd class="mt-1 font-display text-xl sm:text-2xl text-foreground">
                  {{ pad(ongoingCount) }}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>

    <!-- Project index -->
    <section class="mx-auto w-full max-w-[1440px] px-4 sm:px-8">
      <!-- Filters -->
      <div
        class="sticky top-16 z-30 -mx-4 border-b border-border bg-background/90 px-4 backdrop-blur-xl sm:-mx-8 sm:px-8">
        <div class="flex items-center gap-6 overflow-x-auto py-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <span class="shrink-0 font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
            Filter
          </span>
          <button v-for="category in categories" :key="category.id" type="button"
            class="group relative shrink-0 font-mono text-[10px] uppercase tracking-[0.16em] transition-colors py-1"
            :class="selectedCategory === category.id
              ? 'text-foreground'
              : 'text-muted-foreground hover:text-foreground'
              " @click="selectedCategory = category.id">
            {{ category.name }}
            <sup class="ml-0.5 text-[8px] text-muted-foreground">
              {{ pad(category.count) }}
            </sup>
            <span
              class="absolute -bottom-[17px] left-0 h-px w-full origin-left bg-brand transition-transform duration-300"
              :class="selectedCategory === category.id
                ? 'scale-x-100'
                : 'scale-x-0 group-hover:scale-x-100'
                " />
          </button>
        </div>
      </div>

      <div class="border-b border-border flex flex-col">
        <article v-for="(project, index) in filteredProjects" :key="project.id"
          class="group flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-border py-8 last:border-0 sm:py-10">
          <div class="flex items-start gap-4 sm:gap-6 flex-1 min-w-0">
            <span class="font-mono text-[10px] tracking-[0.18em] text-muted-foreground shrink-0 pt-1">
              {{ pad(index + 1) }}
            </span>

            <div class="flex flex-col min-w-0 flex-1">
              <h2
                class="font-display text-2xl sm:text-3xl lg:text-4xl leading-[0.95] transition-colors group-hover:text-brand break-words">
                <a v-if="project.demoUrl" :href="project.demoUrl" target="_blank" rel="noopener noreferrer">
                  {{ project.title }}
                </a>
                <a v-else-if="project.githubUrl" :href="project.githubUrl" target="_blank" rel="noopener noreferrer">
                  {{ project.title }}
                </a>
                <span v-else>{{ project.title }}</span>
              </h2>
              <p class="mt-2 sm:mt-3 max-w-xl text-xs sm:text-sm leading-relaxed text-muted-foreground break-words">
                {{ project.description }}
              </p>

              <div
                class="mt-3 sm:mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[10px] uppercase tracking-[0.16em]">
                <a v-if="project.demoUrl" :href="project.demoUrl" target="_blank" rel="noopener noreferrer"
                  class="inline-flex items-center gap-1.5 text-brand transition-opacity hover:opacity-70">
                  Live <span aria-hidden="true">↗</span>
                </a>
                <a v-if="project.githubUrl" :href="project.githubUrl" target="_blank" rel="noopener noreferrer"
                  class="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground">
                  Code <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </div>

          <div
            class="flex flex-wrap md:flex-nowrap items-center gap-6 sm:gap-8 shrink-0 justify-between md:justify-end w-full md:w-auto">
            <!-- Teknologi -->
            <ul
              class="flex flex-wrap md:max-w-[200px] gap-x-3 gap-y-1 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
              <li v-for="tech in project.technologies" :key="tech">
                {{ tech }}
              </li>
            </ul>

            <!-- Status -->
            <div class="flex items-center gap-4">
              <span class="inline-flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.16em]" :class="project.status === 'completed'
                ? 'text-muted-foreground'
                : 'text-brand'
                ">
                <span class="h-1 w-1 rounded-full shrink-0" :class="project.status === 'completed'
                  ? 'bg-muted-foreground'
                  : 'animate-pulse bg-brand'
                  " />
                {{ project.status }}
              </span>

              <a :href="project.demoUrl || project.githubUrl" target="_blank" rel="noopener noreferrer"
                class="inline-flex h-9 w-9 items-center justify-center border border-border font-mono text-xs transition-colors group-hover:border-foreground group-hover:bg-foreground group-hover:text-background shrink-0"
                :aria-label="`Open ${project.title}`">
                ↗
              </a>
            </div>
          </div>
        </article>

        <div v-if="filteredProjects.length === 0"
          class="py-24 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          Nothing here yet.
        </div>
      </div>
    </section>

    <section class="border-t border-border">
      <NuxtLink to="/contact" class="group mx-auto flex max-w-[1440px] flex-col gap-8 px-4 py-16 sm:px-8 sm:py-28">
        <span class="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          Next — 05
        </span>
        <div class="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 min-w-0">
          <h2 class="font-display text-[clamp(2.25rem,7vw,7rem)] leading-[0.85] tracking-[-0.03em] break-words">
            Have something<br />
            <span class="italic">in mind?</span>
          </h2>
          <span
            class="inline-flex items-center justify-center gap-3 border border-border px-6 py-3 font-mono text-[11px] uppercase tracking-[0.2em] transition-colors group-hover:border-foreground group-hover:bg-foreground group-hover:text-background shrink-0">
            Let's talk <span aria-hidden="true">↗</span>
          </span>
        </div>
      </NuxtLink>
    </section>
  </main>
</template>
