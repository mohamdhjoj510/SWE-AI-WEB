import { useEffect } from 'react';

/**
 * Adds the `is-visible` class to every `.reveal` element as it scrolls into
 * view, driving the CSS-only fade/slide-up animation. Runs once on mount.
 */
export function useReveal() {
  useEffect(() => {
    const nodes = document.querySelectorAll('.reveal');

    // Fallback for environments without IntersectionObserver.
    if (typeof IntersectionObserver === 'undefined') {
      nodes.forEach((n) => n.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, []);
}
