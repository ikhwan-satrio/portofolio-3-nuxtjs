<script setup lang="ts">
const pad = (value: number) => String(value).padStart(2, '0');

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
  'A huge fan of anime, especially slice-of-life and romance.',
  'Loves calisthenics every morning.',
  'Bridges fullstack software and robotics.',
  'I love writing poem too!'
];
</script>

<template>
  <section id="beyond" class="scroll-mt-16 border-b border-border">
    <div class="border-b border-border bg-muted/35">
      <div class="mx-auto w-full max-w-[1440px] px-4 py-20 sm:px-8 sm:py-28">
        <div class="max-w-2xl">
          <span class="font-mono text-[10px] uppercase tracking-[0.24em] text-brand">
            04 / Beyond code
          </span>
          <h2 class="mt-3 font-display text-3xl leading-[0.9] sm:text-4xl lg:text-6xl">
            What keeps me<br />
            <span class="italic">curious</span>
          </h2>
        </div>

        <div class="mt-10 flex flex-wrap gap-x-12 gap-y-2 sm:mt-14">
          <div v-for="(interest, index) in interests" :key="interest.title"
            class="group w-full border-t border-border py-6 md:w-[calc(50%-24px)] lg:w-[calc(33.333%-32px)]">
            <span class="font-mono text-[10px] text-muted-foreground">
              {{ pad(index + 1) }}
            </span>
            <h3
              class="mt-3 font-display text-2xl leading-none transition-colors group-hover:text-brand break-words sm:mt-4 sm:text-3xl">
              {{ interest.title }}
            </h3>
            <p class="mt-2 text-xs leading-relaxed text-muted-foreground break-words sm:text-sm">
              {{ interest.desc }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <MusicPlaylist />

    <div class="mx-auto flex min-h-svh w-full max-w-[1440px] flex-col justify-center px-4 py-20 sm:px-8 sm:py-28">
      <div class="flex flex-col gap-12 lg:flex-row lg:gap-16">
        <div class="w-full shrink-0 lg:w-1/4">
          <div class="lg:sticky lg:top-24">
            <span class="font-mono text-[10px] uppercase tracking-[0.24em] text-brand">
              05 / Margin notes
            </span>
            <h2 class="mt-3 font-display text-3xl leading-none">
              Fun facts,<br />loosely
            </h2>
          </div>
        </div>

        <div class="w-full min-w-0 lg:flex-1">
          <ul class="flex flex-col divide-y divide-border border-y border-border">
            <li v-for="(fact, index) in facts" :key="fact" class="flex items-baseline gap-4 py-5 sm:gap-5 sm:py-6">
              <span class="shrink-0 font-mono text-[10px] text-muted-foreground">
                {{ pad(index + 1) }}
              </span>
              <span class="font-display text-xl leading-snug break-words sm:text-2xl lg:text-3xl">
                {{ fact }}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
