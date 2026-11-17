async function waitForSection(id: string) {
  for (let attempt = 0; attempt < 40; attempt++) {
    const el = document.getElementById(id);
    if (el) return el;
    await new Promise<void>(resolve => requestAnimationFrame(() => resolve()));
  }
  return null;
}

export function useSectionNavigation() {
  const route = useRoute();
  const activeSection = useState<string>('active-section', () => 'home');

  async function scrollToSection(id: string) {
    if (!import.meta.client) return;

    if (route.path !== '/') {
      await navigateTo('/');
      await nextTick();
      await new Promise<void>(resolve => setTimeout(resolve, 80));
    }

    const el = await waitForSection(id);
    if (!el) return;

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    const top =
      id === 'home' ? 0 : el.getBoundingClientRect().top + window.scrollY - 64;

    window.scrollTo({
      top,
      behavior: reduceMotion ? 'auto' : 'smooth',
    });
  }

  function observeSections(ids: string[]) {
    if (!import.meta.client) return () => {};

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) activeSection.value = entry.target.id;
        });
      },
      { root: null, rootMargin: '-50% 0px -50% 0px', threshold: 0 }
    );

    ids.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }

  return { activeSection, scrollToSection, observeSections };
}
