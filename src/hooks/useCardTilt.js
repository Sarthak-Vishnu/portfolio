import { useEffect } from 'react';

/**
 * Pointer-driven 3D tilt for every element matching `selector`.
 * Writes --tilt-x / --tilt-y / --mx / --my CSS custom properties and an
 * `is-tilting` class; the actual transform + sheen live in CSS.
 *
 * No-op when the user prefers reduced motion or is on a touch (hover: none)
 * device. Runs once after mount, by which point all section DOM exists.
 */
export function useCardTilt(selector) {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (window.matchMedia('(hover: none)').matches) return;

    const MAX = 5; // max rotation in degrees
    const cards = Array.from(document.querySelectorAll(selector));

    const detachers = cards.map((card) => {
      let raf = 0;

      const onMove = (e) => {
        const rect = card.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width;
        const py = (e.clientY - rect.top) / rect.height;
        if (raf) return;
        raf = requestAnimationFrame(() => {
          card.style.setProperty('--tilt-y', `${(px - 0.5) * 2 * MAX}deg`);
          card.style.setProperty('--tilt-x', `${(0.5 - py) * 2 * MAX}deg`);
          card.style.setProperty('--mx', `${px * 100}%`);
          card.style.setProperty('--my', `${py * 100}%`);
          raf = 0;
        });
      };

      const onEnter = () => card.classList.add('is-tilting');
      const onLeave = () => {
        card.classList.remove('is-tilting');
        card.style.setProperty('--tilt-x', '0deg');
        card.style.setProperty('--tilt-y', '0deg');
      };

      card.addEventListener('pointerenter', onEnter);
      card.addEventListener('pointermove', onMove);
      card.addEventListener('pointerleave', onLeave);

      return () => {
        card.removeEventListener('pointerenter', onEnter);
        card.removeEventListener('pointermove', onMove);
        card.removeEventListener('pointerleave', onLeave);
        if (raf) cancelAnimationFrame(raf);
      };
    });

    return () => detachers.forEach((fn) => fn());
  }, [selector]);
}
