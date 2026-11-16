<script setup lang="ts">
const traits = ['Creative thinker', 'Problem solver', 'Team player'];
</script>

<template>
  <section id="about" class="scroll-mt-16 border-b border-border">
    <div
      class="mx-auto flex min-h-svh w-full max-w-[1440px] flex-col justify-center px-4 py-20 sm:px-8 sm:py-28"
    >
      <div class="flex flex-col gap-12 lg:flex-row lg:gap-16">
        <div class="w-full shrink-0 lg:w-1/4">
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

        <div class="w-full min-w-0 lg:flex-1">
          <div
            class="max-w-2xl space-y-6 text-sm leading-relaxed text-muted-foreground break-words sm:text-base"
          >
            <p
              class="first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-6xl first-letter:leading-[0.72] first-letter:text-brand sm:first-letter:text-7xl"
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

          <div class="mt-8 flex flex-wrap gap-2">
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
    </div>
  </section>
</template>
