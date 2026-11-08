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
  <main class="w-full">
    <!-- Hero -->
    <section
      class="relative flex min-h-screen items-center overflow-hidden border-b border-border pt-16"
    >
      <div
        class="editorial-grid pointer-events-none absolute inset-0 opacity-50"
      />
      <div
        class="relative mx-auto grid w-full max-w-[1440px] grid-cols-12 items-center gap-10 px-5 py-20 sm:px-8 sm:py-28"
      >
        <div class="animate-fade-up col-span-12 lg:col-span-7">
          <div class="flex items-center gap-4">
            <span class="h-px w-10 bg-brand" />
            <span
              class="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground"
            >
              About — 02
            </span>
          </div>

          <h1
            class="mt-8 font-display text-[clamp(3.5rem,12vw,11rem)] leading-[0.8] tracking-[-0.04em]"
          >
            About<br />
            <span class="italic text-brand">me</span>
          </h1>

          <p
            class="mt-8 max-w-lg font-display text-2xl italic leading-tight text-muted-foreground sm:text-3xl"
          >
            A fullstack developer and robotics engineer, still early in the
            story — and in no particular hurry to rush it.
          </p>
        </div>

        <div
          class="animate-fade-up col-span-12 lg:col-span-5"
          style="animation-delay: 0.12s"
        >
          <div class="ml-auto max-w-sm">
            <div class="relative">
              <div
                class="absolute -left-3 -top-3 h-full w-full border border-brand"
              />
              <img
                :src="profileImage"
                alt="Portrait of Ikhwan Satrio"
                class="relative aspect-[4/5] w-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
              />
            </div>
            <dl
              class="mt-5 grid grid-cols-2 gap-4 border-t border-border pt-4 font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground"
            >
              <div>
                <dt>Role</dt>
                <dd class="mt-1 text-[11px] text-foreground">
                  Fullstack & robotics
                </dd>
              </div>
              <div>
                <dt>Base</dt>
                <dd class="mt-1 text-[11px] text-foreground">Indonesia</dd>
              </div>
              <div>
                <dt>Editor</dt>
                <dd class="mt-1 text-[11px] text-foreground">NeoVim</dd>
              </div>
              <div>
                <dt>Focus</dt>
                <dd class="mt-1 text-[11px] text-foreground">
                  Web systems & robotics
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>

    <!-- Story -->
    <section class="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-28">
      <div class="grid grid-cols-12 gap-10">
        <div class="col-span-12 lg:col-span-3">
          <div class="lg:sticky lg:top-24">
            <span
              class="font-mono text-[10px] uppercase tracking-[0.24em] text-brand"
            >
              01 / Story
            </span>
            <h2 class="mt-3 font-display text-3xl leading-none">
              The short<br />version
            </h2>
          </div>
        </div>

        <div class="col-span-12 lg:col-span-9">
          <div
            class="max-w-2xl space-y-6 text-base leading-relaxed text-muted-foreground"
          >
            <p
              class="first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-7xl first-letter:leading-[0.72] first-letter:text-brand"
            >
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

          <div class="mt-10 flex flex-wrap gap-2">
            <span
              v-for="trait in traits"
              :key="trait"
              class="border border-border px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground"
            >
              {{ trait }}
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills -->
    <section class="border-y border-border bg-muted/30">
      <div class="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-28">
        <div
          class="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <span
              class="font-mono text-[10px] uppercase tracking-[0.24em] text-brand"
            >
              02 / Toolkit
            </span>
            <h2 class="mt-3 font-display text-4xl leading-[0.9] sm:text-6xl">
              Skills &<br />
              <span class="italic">technologies</span>
            </h2>
          </div>
          <p class="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Tools I reach for most often. The percentages are honest guesses,
            not promises.
          </p>
        </div>

        <div class="mt-14 grid gap-x-16 md:grid-cols-2">
          <div
            v-for="(skill, index) in skills"
            :key="skill.name"
            class="group flex items-baseline gap-3 border-b border-border py-4"
          >
            <span class="font-mono text-[10px] text-muted-foreground">
              {{ pad(index + 1) }}
            </span>
            <span
              class="font-display text-2xl transition-colors group-hover:text-brand"
            >
              {{ skill.name }}
            </span>
            <span class="mb-1 flex-1 border-b border-dotted border-border/80" />
            <span class="font-mono text-[11px] text-muted-foreground">
              {{ skill.level }}<span class="text-[9px]">%</span>
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- Journey -->
    <section class="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-28">
      <div class="grid grid-cols-12 gap-10">
        <div class="col-span-12 lg:col-span-3">
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

        <div class="col-span-12 grid gap-x-16 md:grid-cols-2 lg:col-span-9">
          <div
            v-for="(chapter, index) in journey"
            :key="chapter.title"
            class="grid grid-cols-[auto_1fr] gap-5 border-t border-border py-8"
          >
            <span class="font-mono text-[10px] tracking-[0.18em] text-brand">
              {{ pad(index + 1) }}
            </span>
            <div>
              <h3 class="font-display text-3xl leading-none">
                {{ chapter.title }}
              </h3>
              <p class="mt-3 text-sm leading-relaxed text-muted-foreground">
                {{ chapter.text }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Interests -->
    <section class="border-y border-border bg-muted/30">
      <div class="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-28">
        <div class="max-w-2xl">
          <span
            class="font-mono text-[10px] uppercase tracking-[0.24em] text-brand"
          >
            04 / Beyond code
          </span>
          <h2 class="mt-3 font-display text-4xl leading-[0.9] sm:text-6xl">
            What keeps me<br />
            <span class="italic">curious</span>
          </h2>
        </div>

        <div class="mt-14 grid gap-x-16 md:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="(interest, index) in interests"
            :key="interest.title"
            class="group border-t border-border py-6"
          >
            <span class="font-mono text-[10px] text-muted-foreground">
              {{ pad(index + 1) }}
            </span>
            <h3
              class="mt-4 font-display text-3xl leading-none transition-colors group-hover:text-brand"
            >
              {{ interest.title }}
            </h3>
            <p class="mt-2 text-sm leading-relaxed text-muted-foreground">
              {{ interest.desc }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Music -->
    <MusicPlaylist />

    <!-- Margin notes -->
    <section class="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-28">
      <div class="grid grid-cols-12 gap-10">
        <div class="col-span-12 lg:col-span-3">
          <div class="lg:sticky lg:top-24">
            <span
              class="font-mono text-[10px] uppercase tracking-[0.24em] text-brand"
            >
              05 / Margin notes
            </span>
            <h2 class="mt-3 font-display text-3xl leading-none">
              Fun facts,<br />loosely
            </h2>
          </div>
        </div>

        <div class="col-span-12 lg:col-span-9">
          <ul class="divide-y divide-border border-y border-border">
            <li
              v-for="(fact, index) in facts"
              :key="fact"
              class="flex items-baseline gap-5 py-6"
            >
              <span class="font-mono text-[10px] text-muted-foreground">
                {{ pad(index + 1) }}
              </span>
              <span class="font-display text-2xl leading-snug sm:text-3xl">
                {{ fact }}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="border-t border-border">
      <NuxtLink
        to="/contact"
        class="group mx-auto flex max-w-[1440px] flex-col gap-8 px-5 py-20 sm:px-8 sm:py-28"
      >
        <span
          class="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground"
        >
          Next — 05 / Contact
        </span>
        <div
          class="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
        >
          <h2
            class="font-display text-[clamp(2.5rem,8vw,7rem)] leading-[0.85] tracking-[-0.03em]"
          >
            If you want<br />
            <span class="italic text-brand">just tell me.</span>
          </h2>
          <span
            class="inline-flex items-center gap-3 border border-border px-6 py-3 font-mono text-[11px] uppercase tracking-[0.2em] transition-colors group-hover:border-foreground group-hover:bg-foreground group-hover:text-background"
          >
            Start a conversation <span aria-hidden="true">↗</span>
          </span>
        </div>
      </NuxtLink>
    </section>
  </main>
</template>
