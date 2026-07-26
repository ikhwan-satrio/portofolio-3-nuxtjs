<script setup lang="ts">
import type { BlogsCollectionItem } from '@nuxt/content';

interface Props {
  blogs: BlogsCollectionItem[];
}

const { blogs } = defineProps<Props>();

const search = ref('');
const selectedTag = ref('');

// Get unique tags
const tags = computed(() => {
  const tagSet = new Set<string>();
  blogs.forEach(blog => {
    blog.tags?.forEach(tag => tagSet.add(tag));
  });
  return Array.from(tagSet).sort();
});

// Filter and sort blogs
const filteredBlogs = computed(() => {
  const keyword = search.value.toLowerCase().trim();
  const tag = selectedTag.value;

  return [...blogs]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .filter(blog => {
      const titleMatch = blog.title.toLowerCase().includes(keyword);
      const tagMatch = !tag || blog.tags?.includes(tag);
      return titleMatch && tagMatch;
    });
});

// Format date
const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};
</script>

<template>
  <div class="max-w-5xl mx-auto">
    <!-- Filter Section -->
    <UiCard class="mb-10 sticky top-20 z-20 bg-background/80 backdrop-blur-lg">
      <UiCardContent class="pt-6 p-4">
        <div class="grid gap-3 md:grid-cols-2 items-center">
          <UiInput
            v-model="search"
            type="text"
            placeholder="Search by title..."
          />
          <UiSelect v-model="selectedTag">
            <UiSelectTrigger class="w-full">
              <UiSelectValue placeholder="All Tags" />
            </UiSelectTrigger>
            <UiSelectContent>
              <UiSelectItem value="">All Tags</UiSelectItem>
              <UiSelectItem v-for="tag in tags" :key="tag" :value="tag">
                {{ tag }}
              </UiSelectItem>
            </UiSelectContent>
          </UiSelect>
        </div>
      </UiCardContent>
    </UiCard>

    <!-- Blog Grid -->
    <div
      class="grid gap-4"
      :class="
        filteredBlogs.length === 1
          ? 'grid-cols-1 place-items-center'
          : 'sm:grid-cols-2 lg:grid-cols-3'
      "
    >
      <!-- No Results -->
      <div
        v-if="filteredBlogs.length === 0"
        class="col-span-full text-center text-muted-foreground py-16"
      >
        <p class="text-sm">
          No results found for "<strong class="text-foreground">{{
            search
          }}</strong
          >"
        </p>
      </div>

      <!-- Blog Cards -->
      <template v-else>
        <NuxtLink
          v-for="(blog, index) in filteredBlogs"
          :key="blog.path"
          v-motion
          :to="blog.path"
          :initial="{ opacity: 0, y: 30 }"
          :enter="{
            opacity: 1,
            y: 0,
            transition: {
              delay: index * 100,
              duration: 500,
              ease: 'easeOut',
            },
          }"
          class="cursor-target cursor-none w-full max-w-2xl group"
        >
          <UiCard
            class="overflow-hidden hover:border-border transition-all duration-300 flex flex-col h-full"
          >
            <!-- Content -->
            <UiCardContent class="p-5 flex flex-col flex-1">
              <div class="space-y-2.5">
                <h2
                  class="text-base font-semibold text-foreground group-hover:text-foreground/80 transition-colors"
                >
                  {{ blog.title }}
                </h2>

                <div
                  class="flex items-center gap-2 text-xs text-muted-foreground"
                >
                  <time>{{ formatDate(blog.date) }}</time>
                  <span v-if="blog.lang" class="text-foreground/40">·</span>
                  <span v-if="blog.lang" class="text-foreground/60">{{
                    blog.lang
                  }}</span>
                </div>

                <p
                  class="text-sm text-muted-foreground line-clamp-3 leading-relaxed"
                >
                  {{ blog.description }}
                </p>

                <!-- Tags -->
                <div
                  v-if="blog.tags && blog.tags.length > 0"
                  class="flex flex-wrap gap-1.5 pt-1"
                >
                  <UiBadge
                    v-for="tag in blog.tags.slice(0, 3)"
                    :key="tag"
                    variant="secondary"
                    class="text-xs"
                  >
                    {{ tag }}
                  </UiBadge>
                </div>
              </div>

              <p
                class="mt-auto pt-3 text-foreground/60 text-xs group-hover:text-foreground transition-colors flex items-center gap-1 font-medium"
              >
                Read more
                <Icon
                  name="lucide:arrow-right"
                  class="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
                />
              </p>
            </UiCardContent>
          </UiCard>
        </NuxtLink>
      </template>
    </div>
  </div>
</template>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
