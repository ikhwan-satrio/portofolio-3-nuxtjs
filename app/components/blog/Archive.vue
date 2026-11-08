<script setup lang="ts">
import type { BlogsCollectionItem } from '@nuxt/content';

interface Props {
  blogs: BlogsCollectionItem[];
}

const { blogs } = defineProps<Props>();

const search = ref('');
const selectedTag = ref('all');

const tags = computed(() => {
  const tagSet = new Set<string>();
  blogs.forEach(blog => {
    blog.tags?.forEach(tag => tagSet.add(tag));
  });
  return Array.from(tagSet).sort();
});

const filteredBlogs = computed(() => {
  const keyword = search.value.toLowerCase().trim();
  const tag = selectedTag.value;

  return [...blogs]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .filter(blog => {
      const titleMatch = blog.title.toLowerCase().includes(keyword);
      const tagMatch = tag === 'all' || blog.tags?.includes(tag);
      return titleMatch && tagMatch;
    });
});

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  });
};
</script>

<template>
  <div class="w-full">
    <!-- Filter -->
    <div
      class="sticky top-16 z-30 -mx-5 border-y border-border bg-background/90 px-5 backdrop-blur-xl sm:-mx-8 sm:px-8"
    >
      <div
        class="flex flex-col gap-3 py-3 [scrollbar-width:none] md:flex-row md:items-center md:justify-between [&::-webkit-scrollbar]:hidden"
      >
        <div class="flex flex-1 items-center gap-3">
          <Icon
            name="lucide:search"
            size="14"
            class="shrink-0 text-muted-foreground"
          />
          <UiInput
            v-model="search"
            type="text"
            placeholder="Search notes..."
            class="h-8 rounded-none border-0 bg-transparent px-0 text-sm focus-visible:ring-0 dark:bg-transparent"
          />
        </div>

        <div class="flex items-center gap-3">
          <span
            class="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground"
          >
            Tag
          </span>
          <UiSelect v-model="selectedTag">
            <UiSelectTrigger
              class="h-8 w-44 rounded-none border-0 border-b border-border bg-transparent px-0 font-mono text-[10px] dark:bg-transparent uppercase tracking-[0.14em] focus:ring-0"
            >
              <UiSelectValue placeholder="All tags" />
            </UiSelectTrigger>
            <UiSelectContent>
              <UiSelectItem value="all">All tags</UiSelectItem>
              <UiSelectItem v-for="tag in tags" :key="tag" :value="tag">
                {{ tag }}
              </UiSelectItem>
            </UiSelectContent>
          </UiSelect>
        </div>
      </div>
    </div>

    <!-- Archive list -->
    <div class="border-b border-border">
      <div
        v-if="filteredBlogs.length === 0"
        class="py-24 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground"
      >
        No notes found for "{{ search }}".
      </div>

      <template v-else>
        <NuxtLink
          v-for="blog in filteredBlogs"
          :key="blog.path"
          :to="blog.path"
          class="group grid grid-cols-12 items-start gap-x-4 gap-y-3 border-b border-border py-7 last:border-0 sm:py-9"
        >
          <div
            class="col-span-12 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground sm:col-span-2"
          >
            <time>{{ formatDate(blog.date) }}</time>
            <span v-if="blog.lang" class="mt-1 block text-foreground/45">
              {{ blog.lang }}
            </span>
          </div>

          <div class="col-span-12 sm:col-span-8">
            <h2
              class="font-display text-2xl leading-tight transition-colors group-hover:text-brand sm:text-3xl"
            >
              {{ blog.title }}
            </h2>
            <p
              class="mt-2 line-clamp-2 max-w-xl text-sm leading-relaxed text-muted-foreground"
            >
              {{ blog.description }}
            </p>
            <div
              v-if="blog.tags && blog.tags.length > 0"
              class="mt-3 flex flex-wrap gap-x-3 gap-y-1 font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground"
            >
              <span v-for="tag in blog.tags.slice(0, 4)" :key="tag">
                #{{ tag }}
              </span>
            </div>
          </div>

          <div class="col-span-12 flex items-start justify-end sm:col-span-2">
            <span
              class="inline-flex h-8 w-8 items-center justify-center border border-border font-mono text-xs transition-colors group-hover:border-foreground group-hover:bg-foreground group-hover:text-background"
              aria-hidden="true"
            >
              ↗
            </span>
          </div>
        </NuxtLink>
      </template>
    </div>
  </div>
</template>
