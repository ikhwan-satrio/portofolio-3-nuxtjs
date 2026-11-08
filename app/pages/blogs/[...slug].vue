<script setup lang="ts">
const route = useRoute();
const { data: blog } = await useAsyncData('page-' + route.path, () => {
  return queryCollection('blogs').path(route.path).first();
});

if (!blog.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: true,
  });
}

useHead({
  title: blog.value.title,
  meta: [
    { name: 'description', content: blog.value.description },
    {
      name: 'keywords',
      content: [
        `post ${blog.value.title}`,
        'blog ikhwan satrio',
        `blog ${blog.value.title}`,
      ].join(', '),
    },
  ],
});
</script>

<template>
  <main class="w-full px-5 pb-24 pt-28 sm:px-8">
    <div class="mx-auto max-w-[820px]">
      <NuxtLink
        to="/blogs"
        class="group inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
      >
        <Icon
          name="lucide:arrow-left"
          size="13"
          class="transition-transform group-hover:-translate-x-0.5"
        />
        Back to journal
      </NuxtLink>

      <article class="mt-10">
        <div
          class="flex items-center justify-between border-t border-border pt-5 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground"
        >
          <span>Journal / {{ blog?.lang }}</span>
          <time>{{ blog?.date }}</time>
        </div>

        <h1
          class="mt-6 font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.95] tracking-[-0.03em]"
        >
          {{ blog?.title }}
        </h1>

        <p class="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          {{ blog?.description }}
        </p>

        <div
          v-if="blog?.tags && blog.tags.length > 0"
          class="mt-6 flex flex-wrap gap-x-4 gap-y-1 font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground"
        >
          <span v-for="tag in blog.tags" :key="tag">#{{ tag }}</span>
        </div>

        <div
          class="prose prose-ctp mt-12 max-w-none border-t border-border pt-10 prose-headings:font-display prose-headings:font-normal prose-headings:tracking-tight prose-h2:mt-12 prose-h2:text-3xl prose-h3:mt-10 prose-h3:text-2xl prose-p:leading-relaxed prose-a:text-brand prose-a:underline-offset-4 prose-blockquote:border-l-brand prose-blockquote:font-display prose-blockquote:text-xl prose-blockquote:not-italic prose-code:text-brand prose-pre:border prose-pre:border-border"
        >
          <ContentRenderer v-if="blog" :value="blog" />
        </div>
      </article>

      <div
        class="mt-16 flex items-center justify-between border-t border-border pt-6"
      >
        <NuxtLink
          to="/blogs"
          class="group inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
        >
          <Icon
            name="lucide:arrow-left"
            size="13"
            class="transition-transform group-hover:-translate-x-0.5"
          />
          More notes
        </NuxtLink>
        <NuxtLink
          to="/contact"
          class="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-brand"
        >
          Say hello ↗
        </NuxtLink>
      </div>
    </div>
  </main>
</template>
