<script setup lang="ts">
import profileImage from '~/assets/images/foto_kecil.jpg';
</script>

<template>
  <!-- Profile Image -->
  <div
    class="relative flex items-center justify-center z-10 scale-75 sm:scale-85 md:scale-100"
  >
    <img
      :src="profileImage"
      alt="Profile"
      class="h-28 w-28 sm:h-30 sm:w-30 md:h-32 md:w-32 rounded-full object-cover shadow-lg"
    />
  </div>

  <!-- Text Block -->
  <div
    class="flex flex-col items-center gap-4 sm:gap-5 px-4 z-10 w-full max-w-3xl mx-auto"
  >
    <!-- Heading -->
    <h2
      class="font-poppins text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight flex flex-col sm:flex-row sm:flex-nowrap items-center justify-center gap-x-2 sm:gap-x-3 gap-y-0 sm:whitespace-nowrap"
    >
      <span class="flex items-center gap-x-2 sm:gap-x-3">
        <BitsTextAnimationsRotatingText
          :texts="['hello', 'おはよう', 'holla']"
          main-class-name="px-2 sm:px-3 py-0.5 sm:py-1 justify-center rounded-lg"
          :style="{
            backgroundColor: 'var(--foreground)',
            color: 'var(--background)',
          }"
          stagger-from="last"
          :initial="{ y: '100%' }"
          :animate="{ y: 0 }"
          :exit="{ y: '-120%' }"
          :stagger-duration="0.025"
          split-level-class-name="overflow-hidden px-1.5 sm:px-2 pb-0.5"
          :transition="{ type: 'spring', damping: 30, stiffness: 400 }"
          :rotation-interval="2000"
        />
        <span>,</span>
      </span>
      <span>i'm Ikhwan Satrio</span>
    </h2>

    <!-- Typing Text -->
    <BitsTextAnimationsTextType
      class-name="font-inter text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-muted-foreground"
      :text="[
        'Young Programmer',
        'Frontend Developer',
        'Loves Qwik & Svelte',
        'Happy coding!',
      ]"
      :textColors="[
        'var(--color-chart-1)',
        'var(--color-chart-4)',
        'var(--color-chart-3)',
        'var(--color-chart-2)',
      ]"
      :typing-speed="75"
      :pause-duration="1500"
      :show-cursor="true"
      cursor-character="|"
    />
  </div>

  <!-- Call to Action -->
  <div
    class="mt-6 sm:mt-8 md:mt-10 flex flex-col sm:flex-row flex-wrap gap-3 justify-center w-full px-4 z-10"
  >
    <NuxtLink
      to="/projects"
      class="w-full sm:w-auto min-w-0 sm:min-w-36 text-center px-6 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-medium shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300"
    >
      View Projects
    </NuxtLink>
    <a
      href="https://github.com/ikhwan-satrio"
      target="_blank"
      rel="noopener noreferrer"
      class="w-full sm:w-auto min-w-0 sm:min-w-36 text-center px-6 py-2.5 rounded-xl border border-border text-sm text-foreground font-medium hover:bg-muted transition-all duration-300 flex items-center justify-center gap-2"
    >
      <Icon name="fa:github" size="18" />
      Github
    </a>
  </div>
</template>
