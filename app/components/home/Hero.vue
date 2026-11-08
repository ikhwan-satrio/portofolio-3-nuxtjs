<script setup lang="ts">
import profileImage from '~/assets/images/portrait.jpg';

const marquee = [
  'Fullstack',
  'Robotics',
  'TypeScript',
  'Nuxt',
  'Python',
  'NeoVim',
  'Open source',
  'Embedded',
];
</script>

<template>
  <section class="relative w-full flex min-h-screen flex-col overflow-x-hidden pt-16">
    <div class="editorial-grid pointer-events-none absolute inset-0 opacity-60" />

    <div class="pointer-events-none absolute right-6 top-1/2 hidden -translate-y-1/2 lg:block">
      <span class="vertical-rl font-mono text-[10px] uppercase tracking-[0.5em] text-muted-foreground">
        Fullstack / Robotics / 2026
      </span>
    </div>

    <!-- Gunakan px-4 agar ada jarak aman di kiri-kanan tanpa memicu overflow -->
    <div class="relative mx-auto flex w-full max-w-[1440px] flex-1 flex-col justify-center px-4 py-12 sm:px-8 lg:py-24">
      <div class="grid grid-cols-12 items-end gap-y-10 w-full">
        <div class="col-span-12 lg:col-span-9 min-w-0">
          <div class="animate-fade-up flex items-center gap-4">
            <span class="h-px w-10 bg-brand shrink-0" />
            <span class="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground truncate">
              Portfolio — 2026
            </span>
          </div>

          <!-- Perbaikan ukuran font di layar sangat kecil menggunakan ukuran statis aman + clamp -->
          <h1
            class="animate-fade-up mt-6 font-display text-[clamp(2.75rem,11vw,13rem)] leading-[0.82] tracking-[-0.04em] break-words"
            style="animation-delay: 0.08s">
            <span class="block">Ikhwan</span>
            <span class="block">Satrio<span class="text-brand">.</span></span>
          </h1>

          <div class="animate-fade-up mt-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
            style="animation-delay: 0.16s">
            <p class="max-w-md font-display text-lg sm:text-2xl lg:text-3xl italic leading-tight text-muted-foreground">
              Fullstack developer and robotics engineer crafting quiet,
              deliberate systems — from interfaces to machines.
            </p>

            <div class="flex flex-wrap items-center gap-3">
              <NuxtLink to="/projects"
                class="group inline-flex items-center gap-3 border border-foreground bg-foreground px-5 sm:px-6 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-background transition-colors hover:bg-transparent hover:text-foreground">
                Selected work
                <span class="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </NuxtLink>
              <NuxtLink to="/contact"
                class="group inline-flex items-center gap-3 border border-border px-5 sm:px-6 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-foreground transition-colors hover:border-foreground">
                Say hello
                <span class="transition-transform group-hover:translate-x-1">
                  ↗
                </span>
              </NuxtLink>
            </div>
          </div>
        </div>

        <div class="animate-fade-up col-span-12 lg:col-span-3 lg:pl-8" style="animation-delay: 0.24s">
          <div class="ml-auto w-36 sm:w-48 lg:w-full lg:max-w-[220px]">
            <div class="relative">
              <div class="absolute -left-2 sm:-left-3 -top-2 sm:-top-3 h-full w-full border border-brand" />
              <img :src="profileImage" alt="Portrait of Ikhwan Satrio"
                class="relative aspect-[4/5] w-full object-cover grayscale transition-all duration-700 hover:grayscale-0" />
            </div>
            <p class="mt-3 font-mono text-[9px] uppercase tracking-[0.24em] text-muted-foreground truncate">
              Ikhwan Satrio — Indonesia
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="relative border-y border-border bg-background/60">
      <div class="flex overflow-hidden py-3">
        <div
          class="animate-marquee flex shrink-0 items-center gap-8 whitespace-nowrap pr-8 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          <template v-for="(item, i) in [...marquee, ...marquee]" :key="i">
            <span>{{ item }}</span>
            <span class="text-brand">✳</span>
          </template>
        </div>
      </div>
    </div>

    <div
      class="relative mx-auto flex w-full max-w-[1440px] flex-col gap-3 px-4 py-5 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
      <span class="flex items-center gap-2">
        <span class="h-1.5 w-1.5 animate-pulse rounded-full bg-brand" />
        Open for work
      </span>
      <span>Based in Indonesia — GMT+7</span>
      <span class="hidden sm:inline">Scroll ↓</span>
    </div>
  </section>
</template>
