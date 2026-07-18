<script setup lang="ts">
import icon from '~/assets/images/favicon.png';

const isOpen = ref(false);
const route = useRoute();
const menuRef = ref<HTMLElement | null>(null);

watch(
  () => route.path,
  () => {
    isOpen.value = false;
  }
);

onMounted(() => {
  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.value && !menuRef.value.contains(event.target as Node)) {
      isOpen.value = false;
    }
  };
  document.addEventListener('click', handleClickOutside);
  onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside);
  });
});
</script>

<template>
  <header
    ref="menuRef"
    class="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl flex flex-col items-center z-50"
  >
    <!-- Floating Bar -->
    <div
      class="w-full h-14 border border-border/60 flex items-center justify-between px-5 bg-background/70 backdrop-blur-xl rounded-2xl shadow-sm"
    >
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center gap-2.5">
        <img
          :src="icon"
          alt="Ikhwan Satrio Icon"
          class="h-8 w-auto rounded-full"
        />
        <span
          class="hidden sm:inline font-poppins font-medium text-sm text-foreground"
        >
          Ikhwan Satrio
        </span>
      </NuxtLink>

      <!-- Desktop Nav -->
      <nav
        class="hidden md:flex items-center gap-1 font-inter text-muted-foreground text-sm"
      >
        <NuxtLink
          to="/"
          class="hover:text-foreground px-3 py-1.5 rounded-lg transition-colors"
          active-class="text-foreground bg-muted"
        >
          Home
        </NuxtLink>
        <NuxtLink
          to="/about"
          class="hover:text-foreground px-3 py-1.5 rounded-lg transition-colors"
          active-class="text-foreground bg-muted"
        >
          About
        </NuxtLink>
        <NuxtLink
          to="/projects"
          class="hover:text-foreground px-3 py-1.5 rounded-lg transition-colors"
          active-class="text-foreground bg-muted"
        >
          Projects
        </NuxtLink>
        <NuxtLink
          to="/contact"
          class="hover:text-foreground px-3 py-1.5 rounded-lg transition-colors"
          active-class="text-foreground bg-muted"
        >
          Contact
        </NuxtLink>
        <NuxtLink
          to="/blogs"
          class="hover:text-foreground px-3 py-1.5 rounded-lg transition-colors"
          active-class="text-foreground bg-muted"
        >
          Blogs
        </NuxtLink>
      </nav>

      <!-- Actions (Desktop) -->
      <div class="hidden md:flex items-center gap-1">
        <ThemeToggle />
        <a
          href="https://github.com/ikhwan-satrio"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
        >
          <Icon name="fa:github" />
          Github
        </a>
      </div>

      <!-- Mobile Toggle -->
      <div class="md:hidden flex items-center gap-1">
        <ThemeToggle />
        <UiButton
          variant="ghost"
          size="icon"
          class="hover:text-foreground p-2 transition-colors"
          @click="isOpen = !isOpen"
          :aria-label="isOpen ? 'Close menu' : 'Open menu'"
          :aria-expanded="isOpen"
        >
          <Icon :name="isOpen ? 'lucide:x' : 'lucide:menu'" size="18" />
        </UiButton>
      </div>
    </div>
    <!-- Mobile Nav (Dropdown) -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 scale-95 -translate-y-2"
      enter-to-class="opacity-100 scale-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 scale-100 translate-y-0"
      leave-to-class="opacity-0 scale-95 -translate-y-2"
    >
      <nav
        v-if="isOpen"
        class="md:hidden absolute top-16 left-1/2 -translate-x-1/2 w-[90%] bg-background/90 backdrop-blur-xl border border-border/60 rounded-2xl shadow-lg flex flex-col items-center gap-1 py-4"
      >
        <NuxtLink
          to="/"
          class="text-muted-foreground hover:text-foreground font-medium transition-colors w-full text-center py-2.5"
          active-class="text-foreground"
        >
          Home
        </NuxtLink>
        <NuxtLink
          to="/about"
          class="text-muted-foreground hover:text-foreground font-medium transition-colors w-full text-center py-2.5"
          active-class="text-foreground"
        >
          About
        </NuxtLink>
        <NuxtLink
          to="/projects"
          class="text-muted-foreground hover:text-foreground font-medium transition-colors w-full text-center py-2.5"
          active-class="text-foreground"
        >
          Projects
        </NuxtLink>
        <NuxtLink
          to="/contact"
          class="text-muted-foreground hover:text-foreground font-medium transition-colors w-full text-center py-2.5"
          active-class="text-foreground"
        >
          Contact
        </NuxtLink>
        <NuxtLink
          to="/blogs"
          class="text-muted-foreground hover:text-foreground font-medium transition-colors w-full text-center py-2.5"
          active-class="text-foreground"
        >
          Blogs
        </NuxtLink>
        <a
          href="https://github.com/ikhwan-satrio"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-all mt-1"
        >
          <Icon name="fa:github" />
          Github
        </a>
      </nav>
    </Transition>
  </header>
</template>
