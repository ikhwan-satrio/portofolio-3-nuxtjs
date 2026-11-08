<template>
  <aside class="col-span-12 lg:col-span-5">
    <div
      class="flex items-baseline justify-between border-b border-border pb-4"
    >
      <h2 class="font-display text-3xl leading-none">Elsewhere</h2>
      <span
        class="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground"
      >
        Links / 02
      </span>
    </div>

    <ul class="divide-y divide-border border-b border-border">
      <li v-for="method in contactMethods" :key="method.title">
        <a
          :href="method.href"
          :target="method.href.startsWith('mailto:') ? '_self' : '_blank'"
          :rel="method.href.startsWith('mailto:') ? '' : 'noopener noreferrer'"
          class="group flex items-baseline justify-between gap-4 py-5"
        >
          <span class="flex items-baseline gap-3">
            <Icon
              :name="method.icon"
              size="14"
              class="shrink-0 text-muted-foreground transition-colors group-hover:text-brand"
            />
            <span class="flex min-w-0 flex-col">
              <span
                class="font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground"
              >
                {{ method.title }}
              </span>
              <span class="mt-1 break-all text-sm text-foreground">
                {{ method.value }}
              </span>
            </span>
          </span>
          <span
            class="shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
            aria-hidden="true"
          >
            ↗
          </span>
        </a>
      </li>
    </ul>

    <div class="mt-8 border border-border p-5">
      <div class="flex items-center gap-2">
        <span class="h-1.5 w-1.5 animate-pulse rounded-full bg-brand" />
        <span
          class="font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground"
        >
          Currently available
        </span>
      </div>
      <p class="mt-3 text-sm leading-relaxed text-muted-foreground">
        I'm taking on new projects and collaborations. Response time is
        typically within 24 hours.
      </p>
    </div>
  </aside>
</template>

<script setup lang="ts">
const contactMethods = [
  {
    icon: 'lucide:mail',
    title: 'Email',
    value: 'ikwansatria3974@gmail.com',
    href: 'mailto:ikwansatria3974@gmail.com',
  },
  {
    icon: 'fa:github',
    title: 'GitHub',
    value: '@ikhwan-satrio',
    href: 'https://github.com/ikhwan-satrio',
  },
  {
    icon: 'fa:instagram',
    title: 'Instagram',
    value: '@wann_strioo',
    href: 'https://www.instagram.com/wann_strioo',
  },
  {
    icon: 'fa:reddit',
    title: 'Reddit',
    value: 'u/wantoajjh',
    href: 'https://www.reddit.com/user/Gusionajjh',
  },
];
</script>
