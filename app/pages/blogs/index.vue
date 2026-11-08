<script setup lang="ts">
const { data: blogs } = await useAsyncData(() => {
  return queryCollection('blogs').all();
});

useHead({
  title: 'blogs',
  meta: [
    {
      name: 'description',
      content:
        'Read blogs by Ikhwan Satria on programming, anime, and dev tools like NeoVim, Nuxt, and more.',
    },
    {
      name: 'keywords',
      content: [
        'blog of ikhwan satrio',
        'ikhwan satrio blog',
        'main blog ikhwan satrio',
      ],
    },
  ],
});
</script>

<template>
  <main class="w-full overflow-x-hidden flex flex-col">
    <!-- Hero -->
    <section class="relative flex min-h-screen items-center overflow-hidden border-b border-border pt-16">
      <div class="editorial-grid pointer-events-none absolute inset-0 opacity-50" />
      <div class="relative mx-auto flex w-full max-w-[1440px] flex-col justify-center px-4 py-16 sm:px-8 sm:py-24">
        <div class="animate-fade-up flex items-center gap-4">
          <span class="h-px w-10 bg-brand shrink-0" />
          <span class="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground truncate">
            Journal — 04
          </span>
        </div>

        <div class="mt-8 flex flex-col lg:flex-row lg:items-end justify-between gap-10">
          <h1
            class="animate-fade-up font-display text-[clamp(2.75rem,10vw,10rem)] leading-[0.82] tracking-[-0.04em] break-words w-full lg:w-2/3"
            style="animation-delay: 0.08s">
            Notes &<br />
            <span class="italic text-brand">observations</span>
          </h1>

          <p class="animate-fade-up max-w-sm text-xs sm:text-sm leading-relaxed text-muted-foreground break-words w-full lg:w-1/3 shrink-0"
            style="animation-delay: 0.16s">
            Occasional writing about code, tools, and the things I can't stop
            thinking about. No schedule, no noise.
          </p>
        </div>
      </div>
    </section>

    <!-- Archive -->
    <section class="mx-auto w-full max-w-[1440px] px-4 py-14 sm:px-8 sm:py-20">
      <BlogArchive v-if="blogs" :blogs="blogs" />
    </section>
  </main>
</template>
