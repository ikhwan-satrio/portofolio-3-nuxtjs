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

<template>
  <main class="w-full overflow-x-hidden flex flex-col">
    <!-- Hero -->
    <section class="relative flex min-h-screen items-center overflow-hidden border-b border-border pt-16">
      <div class="editorial-grid pointer-events-none absolute inset-0 opacity-50" />
      <div class="relative mx-auto flex w-full max-w-[1440px] flex-col justify-center px-4 py-16 sm:px-8 sm:py-28">
        <div class="animate-fade-up flex items-center gap-4">
          <span class="h-px w-10 bg-brand shrink-0" />
          <span class="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground truncate">
            Contact — 05
          </span>
        </div>

        <div class="mt-8 flex flex-col lg:flex-row lg:items-end justify-between gap-10">
          <h1
            class="animate-fade-up font-display text-[clamp(2.75rem,10vw,10rem)] leading-[0.8] tracking-[-0.04em] break-words w-full lg:w-2/3"
            style="animation-delay: 0.08s">
            Say<br />
            <span class="italic text-brand">hello.</span>
          </h1>

          <div class="animate-fade-up flex flex-col space-y-6 w-full lg:w-1/3 shrink-0" style="animation-delay: 0.16s">
            <p class="max-w-sm text-xs sm:text-sm leading-relaxed text-muted-foreground break-words">
              Have a project in mind, a question, or just a good link to share?
              I'd love to hear from you. I usually reply within a day.
            </p>

            <div
              class="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              <span class="h-1.5 w-1.5 animate-pulse rounded-full bg-brand shrink-0" />
              Available for new projects
            </div>

            <a href="mailto:ikwansatria3974@gmail.com"
              class="group inline-flex items-baseline gap-2 border-b border-foreground pb-1 font-mono text-[11px] tracking-[0.08em] transition-colors hover:border-brand hover:text-brand break-all">
              ikwansatria3974@gmail.com
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Form & links -->
    <section class="mx-auto w-full max-w-[1440px] px-4 py-16 sm:px-8 sm:py-28">
      <div class="flex flex-col lg:flex-row gap-12 lg:gap-16">
        <ContactForm />
        <ContactMethods />
      </div>
    </section>

    <!-- FAQ -->
    <section class="border-y border-border bg-muted/35">
      <div class="mx-auto w-full max-w-[1440px] px-4 py-16 sm:px-8 sm:py-28">
        <div class="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div class="w-full lg:w-1/4 shrink-0">
            <div class="lg:sticky lg:top-24">
              <span class="font-mono text-[10px] uppercase tracking-[0.24em] text-brand">
                FAQ
              </span>
              <h2 class="mt-3 font-display text-3xl leading-none">
                Questions,<br />answered
              </h2>
            </div>
          </div>

          <div class="w-full lg:flex-1 divide-y divide-border border-y border-border min-w-0">
            <div v-for="(faq, index) in faqs" :key="faq.question"
              class="flex flex-col sm:flex-row gap-3 sm:gap-10 py-6">
              <h3 class="flex items-baseline gap-3 text-sm font-medium w-full sm:w-1/2 shrink-0">
                <span class="font-mono text-[10px] text-muted-foreground shrink-0">
                  {{ String(index + 1).padStart(2, '0') }}
                </span>
                <span class="break-words">{{ faq.question }}</span>
              </h3>
              <p class="text-xs sm:text-sm leading-relaxed text-muted-foreground w-full sm:w-1/2 break-words">
                {{ faq.answer }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="border-t border-border">
      <a href="mailto:ikwansatria3974@gmail.com"
        class="group mx-auto flex max-w-[1440px] flex-col gap-8 px-4 py-16 sm:px-8 sm:py-28">
        <span class="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          No brief required
        </span>
        <div class="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 min-w-0">
          <h2 class="font-display text-[clamp(2.25rem,7vw,7rem)] leading-[0.85] tracking-[-0.03em] break-words">
            Just send<br />
            <span class="italic text-brand">a note.</span>
          </h2>
          <span
            class="inline-flex items-center justify-center gap-3 border border-border px-6 py-3 font-mono text-[11px] uppercase tracking-[0.2em] transition-colors group-hover:border-foreground group-hover:bg-foreground group-hover:text-background shrink-0">
            Email me <span aria-hidden="true">↗</span>
          </span>
        </div>
      </a>
    </section>
  </main>
</template>
