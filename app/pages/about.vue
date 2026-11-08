<script setup lang="ts">
import profileImage from '~/assets/images/portrait.jpg';

useHead({
  title: 'about',
  meta: [
    {
      name: 'description',
      content:
        'Learn more about Ikhwan Satrio — fullstack developer and robotics engineer building web systems, tools, and machines',
    },
    {
      name: 'keywords',
      content:
        'portofolio,portofolio ikhwan,portofolio ikhwan satrio,ikhwan,ikhwan satrio,young dev portofolio',
    },
  ],
});

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

const interests = [
  { title: 'Gaming', desc: 'Strategy games and quiet indie titles.' },
  { title: 'Learning', desc: 'Always exploring whatever comes next.' },
  { title: 'Coffee', desc: 'Fuel for late-night coding sessions.' },
  { title: 'Music', desc: 'Lo-fi beats, anime soundtracks, and silence.' },
  { title: 'Open source', desc: 'Contributing to the commons, slowly.' },
  { title: 'Robotics', desc: 'Bridging software with the physical world.' },
];

const facts = [
  'A young programmer with big ambition.',
  'A huge fan of anime — especially slice-of-life and romance.',
  'Loves calisthenics every morning.',
  'Bridges fullstack software and robotics.',
];

const traits = ['Creative thinker', 'Problem solver', 'Team player'];
</script>

<template>
  <main class="w-full overflow-x-hidden flex flex-col">
    <!-- Hero Section -->
    <section class="relative flex min-h-screen items-center overflow-hidden border-b border-border pt-16">
      <div class="editorial-grid pointer-events-none absolute inset-0 opacity-50" />
      <div
        class="relative mx-auto flex w-full max-w-[1440px] flex-col lg:flex-row items-center justify-between gap-12 px-4 py-16 sm:px-8 sm:py-28">

        <!-- Left Content -->
        <div class="animate-fade-up flex flex-col flex-1 w-full min-w-0">
          <div class="flex items-center gap-4">
            <span class="h-px w-10 bg-brand shrink-0" />
            <span class="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              About — 02
            </span>
          </div>

          <h1 class="mt-6 font-display text-[clamp(2.75rem,10vw,10rem)] leading-[0.85] tracking-[-0.04em] break-words">
            About<br />
            <span class="italic text-brand">me</span>
          </h1>

          <p
            class="mt-6 max-w-lg font-display text-lg sm:text-2xl lg:text-3xl italic leading-tight text-muted-foreground break-words">
            A fullstack developer and robotics engineer, still early in the
            story — and in no particular hurry to rush it.
          </p>
        </div>

        <!-- Right Profile Image & Info -->
        <div class="animate-fade-up flex flex-col w-full lg:w-[420px] shrink-0" style="animation-delay: 0.12s">
          <div class="relative w-full max-w-sm mx-auto lg:mx-0">
            <div class="absolute -left-2 sm:-left-3 -top-2 sm:-top-3 h-full w-full border border-brand" />
            <img :src="profileImage" alt="Portrait of Ikhwan Satrio"
              class="relative aspect-[4/5] w-full object-cover grayscale transition-all duration-700 hover:grayscale-0" />
          </div>
          <dl
            class="mt-5 grid grid-cols-2 gap-4 border-t border-border pt-4 font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground">
            <div>
              <dt>Role</dt>
              <dd class="mt-1 text-[11px] text-foreground break-words">Fullstack & robotics</dd>
            </div>
            <div>
              <dt>Base</dt>
              <dd class="mt-1 text-[11px] text-foreground break-words">Indonesia</dd>
            </div>
            <div>
              <dt>Editor</dt>
              <dd class="mt-1 text-[11px] text-foreground break-words">NeoVim</dd>
            </div>
            <div>
              <dt>Focus</dt>
              <dd class="mt-1 text-[11px] text-foreground break-words">Web systems & robotics</dd>
            </div>
          </dl>
        </div>

      </div>
    </section>

    <!-- Story Section -->
    <section class="mx-auto w-full max-w-[1440px] px-4 py-16 sm:px-8 sm:py-28">
      <div class="flex flex-col lg:flex-row gap-12 lg:gap-16">

        <div class="w-full lg:w-1/4 shrink-0">
          <div class="lg:sticky lg:top-24">
            <span class="font-mono text-[10px] uppercase tracking-[0.24em] text-brand">
              01 / Story
            </span>
            <h2 class="mt-3 font-display text-3xl leading-none">
              The short<br />version
            </h2>
          </div>
        </div>

        <div class="w-full lg:flex-1 min-w-0">
          <div class="max-w-2xl space-y-6 text-sm sm:text-base leading-relaxed text-muted-foreground break-words">
            <p
              class="first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-6xl sm:first-letter:text-7xl first-letter:leading-[0.72] first-letter:text-brand">
              My journey started with an old, barely functioning laptop. I first
              touched programming through Scratch, dragging colorful blocks on
              screen. Curiosity led me to open VSCode and write my first lines
              of HTML. Soon, I jumped into React without fully understanding
              JavaScript — and failed, but kept going.
            </p>
            <p>
              Through persistence and late nights, I gradually built real apps.
              I fell in love with clean code and fast feedback loops. Today, I
              build fullstack products with TypeScript, NeoVim, and modern
              frameworks like Nuxt, SvelteKit, and AdonisJS — and I also work on
              robotics, bridging software with the physical world.
            </p>
            <p>
              I'm still learning, still building, and always excited to solve
              meaningful problems with code.
            </p>
          </div>

          <div class="mt-8 flex flex-wrap gap-2">
            <span v-for="trait in traits" :key="trait"
              class="border border-border px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground">
              {{ trait }}
            </span>
          </div>
        </div>

      </div>
    </section>

    <!-- Skills Section -->
    <section class="border-y border-border bg-muted/35">
      <div class="mx-auto max-w-[1440px] px-4 py-16 sm:px-8 sm:py-28">
        <div class="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span class="font-mono text-[10px] uppercase tracking-[0.24em] text-brand">
              02 / Toolkit
            </span>
            <h2 class="mt-3 font-display text-3xl sm:text-4xl lg:text-6xl leading-[0.9]">
              Skills &<br />
              <span class="italic">technologies</span>
            </h2>
          </div>
          <p class="max-w-sm text-xs sm:text-sm leading-relaxed text-muted-foreground">
            Tools I reach for most often. The percentages are honest guesses,
            not promises.
          </p>
        </div>

        <!-- Flexbox wrap untuk daftar skills agar responsif mengalir -->
        <div class="mt-10 sm:mt-14 flex flex-wrap gap-x-12 gap-y-4">
          <div v-for="(skill, index) in skills" :key="skill.name"
            class="group flex items-baseline gap-3 border-b border-border py-4 w-full md:w-[calc(50%-24px)]">
            <span class="font-mono text-[10px] text-muted-foreground shrink-0">
              {{ pad(index + 1) }}
            </span>
            <span class="font-display text-xl sm:text-2xl transition-colors group-hover:text-brand truncate">
              {{ skill.name }}
            </span>
            <span class="mb-1 flex-1 border-b border-dotted border-border/80 min-w-[20px]" />
            <span class="font-mono text-[11px] text-muted-foreground shrink-0">
              {{ skill.level }}<span class="text-[9px]">%</span>
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- Journey Section -->
    <section class="mx-auto w-full max-w-[1440px] px-4 py-16 sm:px-8 sm:py-28">
      <div class="flex flex-col lg:flex-row gap-12 lg:gap-16">

        <div class="w-full lg:w-1/4 shrink-0">
          <div class="lg:sticky lg:top-24">
            <span class="font-mono text-[10px] uppercase tracking-[0.24em] text-brand">
              03 / Journey
            </span>
            <h2 class="mt-3 font-display text-3xl leading-none">
              How I got<br />here
            </h2>
          </div>
        </div>

        <div class="w-full lg:flex-1 flex flex-wrap gap-x-12 gap-y-2 min-w-0">
          <div v-for="(chapter, index) in journey" :key="chapter.title"
            class="flex gap-4 sm:gap-5 border-t border-border py-6 sm:py-8 w-full md:w-[calc(50%-24px)]">
            <span class="font-mono text-[10px] tracking-[0.18em] text-brand shrink-0">
              {{ pad(index + 1) }}
            </span>
            <div class="min-w-0">
              <h3 class="font-display text-2xl sm:text-3xl leading-none break-words">
                {{ chapter.title }}
              </h3>
              <p class="mt-3 text-xs sm:text-sm leading-relaxed text-muted-foreground break-words">
                {{ chapter.text }}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- Interests Section -->
    <section class="border-y border-border bg-muted/35">
      <div class="mx-auto max-w-[1440px] px-4 py-16 sm:px-8 sm:py-28">
        <div class="max-w-2xl">
          <span class="font-mono text-[10px] uppercase tracking-[0.24em] text-brand">
            04 / Beyond code
          </span>
          <h2 class="mt-3 font-display text-3xl sm:text-4xl lg:text-6xl leading-[0.9]">
            What keeps me<br />
            <span class="italic">curious</span>
          </h2>
        </div>

        <div class="mt-10 sm:mt-14 flex flex-wrap gap-x-12 gap-y-2">
          <div v-for="(interest, index) in interests" :key="interest.title"
            class="group border-t border-border py-6 w-full md:w-[calc(50%-24px)] lg:w-[calc(33.333%-32px)]">
            <span class="font-mono text-[10px] text-muted-foreground">
              {{ pad(index + 1) }}
            </span>
            <h3
              class="mt-3 sm:mt-4 font-display text-2xl sm:text-3xl leading-none transition-colors group-hover:text-brand break-words">
              {{ interest.title }}
            </h3>
            <p class="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground break-words">
              {{ interest.desc }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Music Playlist Component -->
    <MusicPlaylist />

    <!-- Margin Notes Section -->
    <section class="mx-auto w-full max-w-[1440px] px-4 py-16 sm:px-8 sm:py-28">
      <div class="flex flex-col lg:flex-row gap-12 lg:gap-16">

        <div class="w-full lg:w-1/4 shrink-0">
          <div class="lg:sticky lg:top-24">
            <span class="font-mono text-[10px] uppercase tracking-[0.24em] text-brand">
              05 / Margin notes
            </span>
            <h2 class="mt-3 font-display text-3xl leading-none">
              Fun facts,<br />loosely
            </h2>
          </div>
        </div>

        <div class="w-full lg:flex-1 min-w-0">
          <ul class="divide-y divide-border border-y border-border flex flex-col">
            <li v-for="(fact, index) in facts" :key="fact" class="flex items-baseline gap-4 sm:gap-5 py-5 sm:py-6">
              <span class="font-mono text-[10px] text-muted-foreground shrink-0">
                {{ pad(index + 1) }}
              </span>
              <span class="font-display text-xl sm:text-2xl lg:text-3xl leading-snug break-words">
                {{ fact }}
              </span>
            </li>
          </ul>
        </div>

      </div>
    </section>

    <!-- Call to Action Section -->
    <section class="border-t border-border">
      <NuxtLink to="/contact" class="group mx-auto flex max-w-[1440px] flex-col gap-8 px-4 py-16 sm:px-8 sm:py-28">
        <span class="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          Next — 05 / Contact
        </span>
        <div class="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 min-w-0">
          <h2 class="font-display text-[clamp(2.25rem,7vw,7rem)] leading-[0.85] tracking-[-0.03em] break-words">
            If you want<br />
            <span class="italic text-brand">just tell me.</span>
          </h2>
          <span
            class="inline-flex items-center justify-center gap-3 border border-border px-6 py-3 font-mono text-[11px] uppercase tracking-[0.2em] transition-colors group-hover:border-foreground group-hover:bg-foreground group-hover:text-background shrink-0">
            Start a conversation <span aria-hidden="true">↗</span>
          </span>
        </div>
      </NuxtLink>
    </section>
  </main>
</template>
