<script setup lang="ts">
const sections = [
  { id: 'home', title: 'Home' },
  { id: 'about', title: 'About' },
  { id: 'skills', title: 'Skills' },
  { id: 'work', title: 'Work' },
  { id: 'beyond', title: 'Beyond' },
  { id: 'contact', title: 'Contact' },
];

useHead({
  title: 'home',
  meta: [
    {
      name: 'description',
      content:
        'Personal portfolio of Ikhwan Satrio — Fullstack Developer & Robotics Engineer',
    },
  ],
});
</script>

<template>
  <main class="container-sections w-full overflow-x-clip">
    <LayoutScrollSidebar :sections="sections" />
    <HomeHero />
    <HomeAbout />
    <HomeSkills />
    <HomeWork />
    <HomeBeyond />
    <HomeContact />
  </main>
</template>
