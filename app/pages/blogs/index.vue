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
  <main class="w-full">
    <!-- Hero -->
    <section
      class="relative flex min-h-screen items-center overflow-hidden border-b border-border pt-16"
    >
      <div
        class="editorial-grid pointer-events-none absolute inset-0 opacity-50"
      />
      <div
        class="relative mx-auto w-full max-w-[1440px] px-5 py-20 sm:px-8 sm:py-24"
      >
        <div class="animate-fade-up flex items-center gap-4">
          <span class="h-px w-10 bg-brand" />
          <span
            class="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground"
          >
            Journal — 04
          </span>
        </div>

        <div class="mt-8 grid grid-cols-12 items-end gap-8">
          <h1
            class="animate-fade-up col-span-12 font-display text-[clamp(3.5rem,11vw,10rem)] leading-[0.82] tracking-[-0.04em] lg:col-span-8"
            style="animation-delay: 0.08s"
          >
            Notes &<br />
            <span class="italic text-brand">observations</span>
          </h1>
          <p
            class="animate-fade-up col-span-12 max-w-sm text-sm leading-relaxed text-muted-foreground lg:col-span-4"
            style="animation-delay: 0.16s"
          >
            Occasional writing about code, tools, and the things I can't stop
            thinking about. No schedule, no noise.
          </p>
        </div>
      </div>
    </section>

    <!-- Archive -->
    <section class="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 sm:py-20">
      <BlogArchive v-if="blogs" :blogs="blogs" />
    </section>
  </main>
</template>
