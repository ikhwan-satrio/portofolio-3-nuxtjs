<script setup lang="ts">
const pad = (value: number) => String(value).padStart(2, '0');

const skills = [
  { name: 'JavaScript', level: 90 },
  { name: 'TypeScript', level: 85 },
  { name: 'React', level: 75 },
  { name: 'Qwik', level: 80 },
  { name: 'Svelte', level: 80 },
  { name: 'Node.js', level: 85 },
  { name: 'Python', level: 80 },
  { name: 'C++', level: 70 },
  { name: 'Robotics', level: 75 },
  { name: 'Database', level: 70 },
];

const journey = [
  {
    title: 'Scratch',
    text: 'It started with an old, barely functioning laptop and a pile of colorful blocks. I had no idea what I was doing — only that making something move on screen felt like magic.',
  },
  {
    title: 'The first line',
    text: 'Curiosity led me to VSCode and my first lines of HTML. Soon after came React, attempted long before JavaScript truly made sense. It failed, as it should have.',
  },
  {
    title: 'Falling, then learning',
    text: 'Through persistence and late nights, the pieces started to click. I fell in love with clean code, fast feedback loops, and interfaces that get out of the way.',
  },
  {
    title: 'Now',
    text: 'Today I build fullstack systems with TypeScript, NeoVim, Nuxt, SvelteKit, and AdonisJS — and robotics projects that connect code to the physical world. Still learning, still building, still chasing the same feeling from that first laptop.',
  },
];
</script>

<template>
  <section id="skills" class="scroll-mt-16 border-b border-border">
    <div class="border-b border-border bg-muted/35">
      <div class="mx-auto w-full max-w-[1440px] px-4 py-20 sm:px-8 sm:py-28">
        <div
          class="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <span
              class="font-mono text-[10px] uppercase tracking-[0.24em] text-brand"
            >
              02 / Toolkit
            </span>
            <h2
              class="mt-3 font-display text-3xl leading-[0.9] sm:text-4xl lg:text-6xl"
            >
              Skills &<br />
              <span class="italic">technologies</span>
            </h2>
          </div>
          <p
            class="max-w-sm text-xs leading-relaxed text-muted-foreground sm:text-sm"
          >
            Tools I reach for most often. The percentages are honest guesses,
            not promises.
          </p>
        </div>

        <div class="mt-10 flex flex-wrap gap-x-12 gap-y-4 sm:mt-14">
          <div
            v-for="(skill, index) in skills"
            :key="skill.name"
            class="group flex w-full items-baseline gap-3 border-b border-border py-4 md:w-[calc(50%-24px)]"
          >
            <span class="shrink-0 font-mono text-[10px] text-muted-foreground">
              {{ pad(index + 1) }}
            </span>
            <span
              class="truncate font-display text-xl transition-colors group-hover:text-brand sm:text-2xl"
            >
              {{ skill.name }}
            </span>
            <span
              class="mb-1 min-w-[20px] flex-1 border-b border-dotted border-border/80"
            />
            <span class="shrink-0 font-mono text-[11px] text-muted-foreground">
              {{ skill.level }}<span class="text-[9px]">%</span>
            </span>
          </div>
        </div>
      </div>
    </div>

    <div
      class="mx-auto flex min-h-svh w-full max-w-[1440px] flex-col justify-center px-4 py-20 sm:px-8 sm:py-28"
    >
      <div class="flex flex-col gap-12 lg:flex-row lg:gap-16">
        <div class="w-full shrink-0 lg:w-1/4">
          <div class="lg:sticky lg:top-24">
            <span
              class="font-mono text-[10px] uppercase tracking-[0.24em] text-brand"
            >
              03 / Journey
            </span>
            <h2 class="mt-3 font-display text-3xl leading-none">
              How I got<br />here
            </h2>
          </div>
        </div>

        <div class="flex w-full min-w-0 flex-wrap gap-x-12 gap-y-2 lg:flex-1">
          <div
            v-for="(chapter, index) in journey"
            :key="chapter.title"
            class="flex w-full gap-4 border-t border-border py-6 sm:gap-5 sm:py-8 md:w-[calc(50%-24px)]"
          >
            <span
              class="shrink-0 font-mono text-[10px] tracking-[0.18em] text-brand"
            >
              {{ pad(index + 1) }}
            </span>
            <div class="min-w-0">
              <h3
                class="font-display text-2xl leading-none break-words sm:text-3xl"
              >
                {{ chapter.title }}
              </h3>
              <p
                class="mt-3 text-xs leading-relaxed text-muted-foreground break-words sm:text-sm"
              >
                {{ chapter.text }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
