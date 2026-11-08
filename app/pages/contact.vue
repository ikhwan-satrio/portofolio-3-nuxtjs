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
        class="relative mx-auto w-full max-w-[1440px] px-5 py-20 sm:px-8 sm:py-28"
      >
        <div class="animate-fade-up flex items-center gap-4">
          <span class="h-px w-10 bg-brand" />
          <span
            class="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground"
          >
            Contact — 05
          </span>
        </div>

        <div class="mt-8 grid grid-cols-12 items-end gap-10">
          <h1
            class="animate-fade-up col-span-12 font-display text-[clamp(3.5rem,12vw,11rem)] leading-[0.8] tracking-[-0.04em] lg:col-span-8"
            style="animation-delay: 0.08s"
          >
            Say<br />
            <span class="italic text-brand">hello.</span>
          </h1>

          <div
            class="animate-fade-up col-span-12 space-y-6 lg:col-span-4"
            style="animation-delay: 0.16s"
          >
            <p class="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Have a project in mind, a question, or just a good link to share?
              I'd love to hear from you. I usually reply within a day.
            </p>

            <div
              class="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground"
            >
              <span class="h-1.5 w-1.5 animate-pulse rounded-full bg-brand" />
              Available for new projects
            </div>

            <a
              href="mailto:ikwansatria3974@gmail.com"
              class="group inline-flex items-baseline gap-2 border-b border-foreground pb-1 font-mono text-[11px] tracking-[0.08em] transition-colors hover:border-brand hover:text-brand"
            >
              ikwansatria3974@gmail.com
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Form & links -->
    <section class="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-28">
      <div class="grid grid-cols-12 gap-12 lg:gap-16">
        <ContactForm />
        <ContactMethods />
      </div>
    </section>

    <!-- FAQ -->
    <section class="border-y border-border bg-muted/30">
      <div class="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-28">
        <div class="grid grid-cols-12 gap-10">
          <div class="col-span-12 lg:col-span-3">
            <div class="lg:sticky lg:top-24">
              <span
                class="font-mono text-[10px] uppercase tracking-[0.24em] text-brand"
              >
                FAQ
              </span>
              <h2 class="mt-3 font-display text-3xl leading-none">
                Questions,<br />answered
              </h2>
            </div>
          </div>

          <div
            class="col-span-12 divide-y divide-border border-y border-border lg:col-span-9"
          >
            <div
              v-for="(faq, index) in faqs"
              :key="faq.question"
              class="grid gap-3 py-6 sm:grid-cols-[1fr_1.5fr] sm:gap-10"
            >
              <h3 class="flex items-baseline gap-3 text-sm font-medium">
                <span class="font-mono text-[10px] text-muted-foreground">
                  {{ String(index + 1).padStart(2, '0') }}
                </span>
                {{ faq.question }}
              </h3>
              <p class="text-sm leading-relaxed text-muted-foreground">
                {{ faq.answer }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="border-t border-border">
      <a
        href="mailto:ikwansatria3974@gmail.com"
        class="group mx-auto flex max-w-[1440px] flex-col gap-8 px-5 py-20 sm:px-8 sm:py-28"
      >
        <span
          class="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground"
        >
          No brief required
        </span>
        <div
          class="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
        >
          <h2
            class="font-display text-[clamp(2.5rem,8vw,7rem)] leading-[0.85] tracking-[-0.03em]"
          >
            Just send<br />
            <span class="italic text-brand">a note.</span>
          </h2>
          <span
            class="inline-flex items-center gap-3 border border-border px-6 py-3 font-mono text-[11px] uppercase tracking-[0.2em] transition-colors group-hover:border-foreground group-hover:bg-foreground group-hover:text-background"
          >
            Email me <span aria-hidden="true">↗</span>
          </span>
        </div>
      </a>
    </section>
  </main>
</template>

<script setup lang="ts">
const faqs = [
  {
    question: 'What kind of projects do you work on?',
    answer:
      'I specialize in fullstack web applications using modern frameworks like Nuxt, Qwik, React, and Svelte. I also work on mobile apps, desktop tools, robotics projects, UI/UX design, and open-source software.',
  },
  {
    question: 'How long does a typical project take?',
    answer:
      'Project timelines vary depending on complexity. A simple website might take 2-4 weeks, while a complex web application could take 2-3 months. I always provide detailed timelines during consultation.',
  },
  {
    question: 'Do you work with remote clients?',
    answer:
      'Absolutely! I work with clients globally and have experience collaborating remotely. I use tools like Slack, Discord, and video calls to ensure smooth communication.',
  },
  {
    question: "What's your preferred tech stack?",
    answer:
      'I love working with Qwik for performance-critical apps, React for complex UIs, Svelte for lightweight projects, and TypeScript for everything. I also use Tailwind CSS, Node.js, and various databases.',
  },
];

useHead({
  title: 'contact',
  meta: [
    {
      name: 'description',
      content:
        'Get in touch with Ikhwan Satrio - Fullstack Developer & Robotics Engineer. Contact me for web development projects, robotics collaborations, or just to say hello.',
    },
  ],
});
</script>
