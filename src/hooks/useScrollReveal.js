import { useEffect, useRef } from 'react';

/**
 * Adds `revealed` class to the element when it enters the viewport.
 * Works with `.reveal` and `.reveal-children` CSS classes.
 */
export function useScrollReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // If user prefers reduced motion, skip the animation entirely
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('revealed');
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('revealed');
          observer.unobserve(el);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -48px 0px',
        ...options,
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}
