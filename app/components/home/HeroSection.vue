<script setup lang="ts">
import profileImage from '~/assets/images/foto_kecil.jpg';
</script>

<template>
  <!-- Profile Image with Circular Text -->
  <div class="relative flex items-center justify-center z-10">
    <BitsTextAnimationsCircularText
      text="*ikhwan*satrio*"
      :spin-duration="20"
      class="custom-class"
    />
    <div class="absolute inset-0 flex items-center justify-center">
      <img
        :src="profileImage"
        alt="Profile"
        class="h-32 w-32 rounded-full object-cover shadow-lg"
      />
    </div>
  </div>

  <!-- Text Block -->
  <div class="flex flex-col items-center gap-5 p-3 z-10">
    <!-- Heading -->
    <h2
      class="font-poppins text-center text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight"
    >
      hello, i'm Ikhwan Satrio
    </h2>

    <!-- Typing Text -->
    <BitsTextAnimationsTextType
      class-name="font-inter text-lg sm:text-xl md:text-2xl text-muted-foreground"
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
  <div class="mt-10 flex flex-wrap gap-3 justify-center z-10">
    <NuxtLink
      to="/projects"
      class="min-w-36 text-center px-6 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-medium shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300"
    >
      View Projects
    </NuxtLink>
    <a
      href="https://github.com/ikhwan-satrio"
      target="_blank"
      rel="noopener noreferrer"
      class="min-w-36 text-center px-6 py-2.5 rounded-xl border border-border text-sm text-foreground font-medium hover:bg-muted transition-all duration-300 flex items-center justify-center gap-2"
    >
      <Icon name="fa:github" size="18" />
      Github
    </a>
  </div>
</template>
