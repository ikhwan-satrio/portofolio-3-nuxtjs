<script setup lang="ts">
import { motion } from 'motion-v';
import image from '~/assets/images/foto_kecil.jpg';

// SEO Meta Tags
useHead({
  title: 'about',
  meta: [
    {
      name: 'description',
      content:
        'Learn more about Ikhwan Satrio - Young passionate programmer specializing in modern web development with Vue, Nuxt, and React',
    },
    {
      name: 'keywords',
      content:
        'portofolio,portofolio ikhwan,portofolio ikhwan satrio,ikhwan,ikhwan satrio,young dev portofolio',
    },
  ],
});

// Skills data
const skills = [
  { name: 'JavaScript', level: 90, color: 'bg-foreground' },
  { name: 'TypeScript', level: 85, color: 'bg-foreground/80' },
  { name: 'React', level: 75, color: 'bg-foreground/70' },
  { name: 'Qwik', level: 80, color: 'bg-foreground/75' },
  { name: 'Svelte', level: 80, color: 'bg-foreground/75' },
  { name: 'Node.js', level: 85, color: 'bg-foreground/80' },
  { name: 'UI/UX Design', level: 70, color: 'bg-foreground/65' },
  { name: 'Database', level: 70, color: 'bg-foreground/65' },
];

// Interests data
const interests = [
  { emoji: '🎮', title: 'Gaming', desc: 'Strategy games and indie titles' },
  { emoji: '📚', title: 'Learning', desc: 'Always exploring new tech' },
  { emoji: '☕', title: 'Coffee', desc: 'Fuel for late-night coding' },
  { emoji: '🎵', title: 'Music', desc: 'Lo-fi beats while coding' },
  { emoji: '🌟', title: 'Open Source', desc: 'Contributing to community' },
  { emoji: '🚀', title: 'Innovation', desc: 'Building the future' },
];
</script>

<template>
  <main class="w-full min-h-screen bg-background text-foreground">
    <!-- Hero Section -->
    <section
      class="relative w-full h-screen text-center flex flex-col items-center justify-center gap-8 overflow-hidden"
    >
      <!-- Profile Image -->
      <div class="relative">
        <BitsAnimationsGlareHover
          width="150px"
          height="150px"
          border-radius="100%"
          glare-color="oklch(from var(--color-foreground) l c h / 0.3)"
          :glare-opacity="0.3"
          :glare-angle="-30"
          :glare-size="300"
          :transition-duration="800"
          :play-once="false"
        >
          <img
            :src="image"
            alt="Profile"
            class="h-37.5 w-37.5 rounded-full object-cover shadow-2xl border-4 border-border/50"
          />
        </BitsAnimationsGlareHover>
      </div>

      <!-- Text Block -->
      <div class="flex flex-col items-center gap-6 p-3 z-10">
        <ClientOnly>
          <BitsTextAnimationsSplitText
            text="About Ikhwan Satrio"
            class-name="font-poppins text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight"
            ease="power3.out"
            split-type="chars"
            root-margin="-100px"
            text-align="center"
            :delay="100"
            :duration="0.6"
            :from="{ opacity: 0, y: 40 }"
            :to="{ opacity: 1, y: 0 }"
            :threshold="0.1"
          />
          <BitsTextAnimationsTextType
            class="font-inter text-lg sm:text-xl md:text-2xl"
            :text-colors="[
              'var(--color-chart-1)',
              'var(--color-chart-4)',
              'var(--color-chart-3)',
              'var(--color-chart-2)',
            ]"
            :text="[
              'Passionate Developer',
              'Problem Solver',
              'Tech Enthusiast',
              'Linux Enthusiast',
            ]"
            :typing-speed="80"
            :pause-duration="1800"
            show-cursor
            cursor-character="|"
          />
        </ClientOnly>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          class="w-5 h-5 text-muted-foreground"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>

    <!-- Content Sections -->
    <!-- Story Section -->
    <motion.section
      class="w-full py-28 flex items-center"
      :initial="{ opacity: 0, y: 50 }"
      :while-in-view="{ opacity: 1, y: 0 }"
      :transition="{ duration: 0.8, ease: 'easeOut' }"
    >
      <div class="max-w-5xl mx-auto px-6 w-full">
        <div class="space-y-16">
          <div class="text-center">
            <h2 class="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              My Story
            </h2>
          </div>

          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <div class="space-y-6">
              <div
                class="space-y-4 text-muted-foreground leading-relaxed text-base"
              >
                <p>
                  My journey started with an old, barely functioning laptop. I
                  first touched programming through Scratch, dragging colorful
                  blocks on screen. Curiosity led me to open VSCode and write my
                  first lines of HTML. Soon, I jumped into React without fully
                  understanding JavaScript — and failed, but kept going.
                </p>
                <p>
                  Through persistence and late nights, I gradually built real
                  apps. I fell in love with clean code and fast feedback loops.
                  Today, I proudly craft projects using TypeScript, NeoVim, and
                  modern frameworks like Nuxt, SvelteKit, and AdonisJS.
                </p>
                <p>
                  I'm still learning, still building, and always excited to
                  solve meaningful problems with code.
                </p>
              </div>

              <div class="flex flex-wrap gap-2 mt-8">
                <UiBadge variant="secondary">Creative Thinker</UiBadge>
                <UiBadge variant="secondary">Problem Solver</UiBadge>
                <UiBadge variant="secondary">Team Player</UiBadge>
              </div>
            </div>

            <div class="relative">
              <UiCard class="bg-muted/50">
                <UiCardContent class="text-center space-y-5 pt-6">
                  <div class="text-5xl">💭</div>
                  <h3 class="text-xl font-semibold text-foreground">
                    My Philosophy
                  </h3>
                  <blockquote
                    class="text-muted-foreground text-base italic leading-relaxed"
                  >
                    "Code is my canvas, and ambition is my fuel."
                  </blockquote>
                </UiCardContent>
              </UiCard>
            </div>
          </div>
        </div>
      </div>
    </motion.section>

    <!-- Skills Section -->
    <motion.section
      class="w-full py-28 flex items-center bg-muted/30"
      :initial="{ opacity: 0, y: 50 }"
      :while-in-view="{ opacity: 1, y: 0 }"
      :transition="{ duration: 0.8, ease: 'easeOut' }"
    >
      <div class="max-w-5xl mx-auto px-6 w-full">
        <div class="space-y-14">
          <div class="text-center">
            <h2 class="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Skills & Technologies
            </h2>
            <p class="text-muted-foreground text-base max-w-xl mx-auto">
              Here are the technologies I love working with and my proficiency
              levels
            </p>
          </div>

          <div class="grid md:grid-cols-2 gap-6">
            <UiCard v-for="skill in skills" :key="skill.name" class="p-5">
              <div class="flex justify-between items-center mb-3">
                <h3 class="font-medium text-foreground text-sm">
                  {{ skill.name }}
                </h3>
                <span class="text-muted-foreground text-xs font-medium"
                  >{{ skill.level }}%</span
                >
              </div>
              <UiProgress :model-value="skill.level" class="h-1.5" />
            </UiCard>
          </div>

          <UiCard class="text-center bg-muted/50 p-6">
            <UiCardContent class="pt-6">
              <p class="text-muted-foreground text-sm">
                Always learning new technologies and staying up-to-date with the
                latest trends in web development
              </p>
            </UiCardContent>
          </UiCard>
        </div>
      </div>
    </motion.section>

    <!-- Journey Section -->
    <motion.section
      class="w-full py-28 flex items-center"
      :initial="{ opacity: 0, y: 50 }"
      :while-in-view="{ opacity: 1, y: 0 }"
      :transition="{ duration: 0.8, ease: 'easeOut' }"
    >
      <div class="max-w-5xl mx-auto px-6 w-full">
        <div class="space-y-14">
          <div class="text-center">
            <h2 class="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              My Journey
            </h2>
            <p class="text-muted-foreground text-base">
              The path that led me to where I am today
            </p>
          </div>

          <div class="max-w-2xl mx-auto text-center py-16">
            <div class="space-y-6">
              <div
                class="w-20 h-20 mx-auto bg-muted rounded-full flex items-center justify-center"
              >
                <svg
                  class="w-10 h-10 text-muted-foreground"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>

              <div class="space-y-3">
                <h3 class="text-xl font-semibold text-foreground">
                  Journey Coming Soon
                </h3>
                <p class="text-muted-foreground text-base leading-relaxed">
                  I'm currently building my professional timeline. Check back
                  soon to see my journey unfold!
                </p>
              </div>

              <div class="pt-4">
                <NuxtLink to="/contact">
                  <UiButton>
                    <Icon name="lucide:message-circle" size="16" class="mr-2" />
                    Let's Connect
                  </UiButton>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>

    <!-- Interests Section -->
    <motion.section
      class="w-full py-28 flex items-center bg-muted/30"
      :initial="{ opacity: 0, y: 50 }"
      :while-in-view="{ opacity: 1, y: 0 }"
      :transition="{ duration: 0.8, ease: 'easeOut' }"
    >
      <div class="max-w-5xl mx-auto px-6 w-full">
        <div class="space-y-14">
          <div class="text-center">
            <h2 class="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Beyond Code
            </h2>
            <p class="text-muted-foreground text-base">
              What inspires and motivates me outside of programming
            </p>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <UiCard
              v-for="interest in interests"
              :key="interest.title"
              class="p-5 text-center hover:border-border transition-all duration-300 group cursor-default"
            >
              <UiCardContent class="pt-6">
                <div
                  class="text-4xl mb-3 group-hover:scale-105 transition-transform duration-300"
                >
                  {{ interest.emoji }}
                </div>
                <h3 class="text-base font-semibold text-foreground mb-1">
                  {{ interest.title }}
                </h3>
                <p class="text-muted-foreground text-sm">{{ interest.desc }}</p>
              </UiCardContent>
            </UiCard>
          </div>

          <UiCard class="bg-muted/50 p-8 text-center">
            <UiCardContent class="pt-6">
              <div class="text-3xl mb-3">🎯</div>
              <h3 class="text-lg font-semibold text-foreground mb-3">
                Current Focus
              </h3>
              <p
                class="text-muted-foreground text-base leading-relaxed max-w-2xl mx-auto"
              >
                I'm currently diving deep into performance optimization with
                Nuxt and exploring the intersection of AI and web development.
                Always excited about pushing the boundaries of what's possible
                on the web!
              </p>
            </UiCardContent>
          </UiCard>
        </div>
      </div>
    </motion.section>

    <!-- Music -->
    <FavoriteMusicSection />

    <!-- Fun fact section -->
    <section
      class="w-full min-h-screen h-fit p-6 bg-background flex items-center text-foreground"
    >
      <div class="max-w-3xl mx-auto text-center px-4">
        <h2 class="text-2xl font-bold mb-8 text-foreground">
          Fun Facts About Me
        </h2>
        <ul class="text-base space-y-5 text-muted-foreground">
          <li>A young programmer with big ambition</li>
          <li>
            Huge fan of anime (especially slice-of-life and romance genres)
          </li>
          <li>Loves doing calisthenics every morning</li>
          <li>
            Enjoys exploring new frameworks while listening to anime lo-fi
          </li>
        </ul>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="w-full py-24">
      <div class="max-w-3xl mx-auto text-center px-6">
        <UiCard class="bg-muted/30">
          <UiCardContent class="pt-6">
            <h2 class="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Let's Build Something Amazing
            </h2>
            <p
              class="text-muted-foreground text-base mb-8 max-w-xl mx-auto leading-relaxed"
            >
              I'm always excited to work on interesting projects and collaborate
              with passionate people. Whether it's a challenging technical
              problem or an innovative idea, let's make it happen!
            </p>
            <div class="flex flex-col sm:flex-row gap-3 justify-center">
              <NuxtLink to="/projects">
                <UiButton class="min-w-36">View My Work</UiButton>
              </NuxtLink>
              <NuxtLink to="/contact">
                <UiButton variant="outline" class="min-w-36">
                  Get In Touch
                </UiButton>
              </NuxtLink>
            </div>
          </UiCardContent>
        </UiCard>
      </div>
    </section>
  </main>
</template>
