'use client';

import { useEffect } from 'react';
import { animate, inView, stagger } from 'framer-motion';

export function FramerDOMController() {
  useEffect(() => {
    const smoothEase = [0.22, 1, 0.36, 1] as const;

    const runHeroSequence = async () => {
      // 1. Photo: Fade in & scale from 0.95 to 1 using CSS variable to avoid conflict
      animate(
        '.hero-image',
        { opacity: [0, 1], '--framer-scale': [0.95, 1] },
        { duration: 1.2, ease: smoothEase }
      );

      // 2. Headline Words: Slide up, staggered by 0.1s
      await animate(
        '.hero-word-img img, .hero-word-img .pink-dot',
        { y: ['100%', '0%'] },
        { duration: 0.8, ease: smoothEase, delay: stagger(0.1) }
      );

      // 3. Subtitle Lines: Fade in & slide up, staggered
      animate(
        '.hero-word h2',
        { y: [20, 0], opacity: [0, 1] },
        { duration: 0.8, ease: smoothEase, delay: stagger(0.1) }
      );

      // 4. Location Badge: Slide in from right, opacity 0 -> 1
      animate(
        '.time-weather',
        { x: [30, 0], opacity: [0, 1] },
        { duration: 0.8, ease: smoothEase }
      );
    };

    void runHeroSequence();

    // Projects Sequence Section Title
    const stopTitleObserver = inView(
      '[data-id="7f08b25"], .elementor-heading-title.projects-title',
      (element) => {
        animate(
          element,
          { x: [-40, 0], opacity: [0, 1] },
          { duration: 0.8, ease: smoothEase }
        );
        stopTitleObserver();
      },
      { margin: '-15% 0px -15% 0px' }
    );

    // To stagger all project cards, we trigger the animation once when the first card 
    // (or their container) comes into view.
    const cards = document.querySelectorAll('.arrow-card');
    if (cards.length > 0) {
      // We can observe the first card to trigger the staggered animation for all cards
      const stopCardsObserver = inView(
        cards[0],
        () => {
          animate(
            '.arrow-card',
            { '--framer-y': ['40px', '0px'], opacity: [0, 1] },
            { duration: 0.8, ease: smoothEase, delay: stagger(0.12) }
          );
          stopCardsObserver();
        },
        { margin: '-15% 0px -15% 0px' }
      );
    }
  }, []);

  return (
    <style>{`
      /* Set initial states for elements controlled by Framer Motion to avoid FOUC */
      .hero-image {
        opacity: 0;
        transform: scale(var(--framer-scale, 1)) translate(var(--mouse-x-photo, 0px), calc(var(--scroll-y-photo, 0px) + var(--mouse-y-photo, 0px))) !important;
        will-change: transform;
      }
      .hero-word-img {
        overflow: hidden;
        transform: translate(var(--mouse-x-words, 0px), calc(var(--scroll-y-words, 0px) + var(--mouse-y-words, 0px)));
        will-change: transform;
      }
      .wavo-particles-effect {
        transform: translate(var(--mouse-x-particles, 0px), calc(var(--scroll-y-particles, 0px) + var(--mouse-y-particles, 0px)));
        will-change: transform;
      }
      .hero-word-img img, .hero-word-img .pink-dot {
        transform: translateY(100%);
      }
      .hero-word h2 {
        opacity: 0;
        transform: translateY(20px);
      }
      .time-weather {
        opacity: 0;
        transform: translateX(30px);
      }
      [data-id="7f08b25"] {
        opacity: 0;
        transform: translateX(-40px);
      }
      .arrow-card {
        opacity: 0;
        transform: scale(var(--scroll-scale, 1)) translateY(var(--framer-y, 40px)) !important;
        transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      }
      .arrow-card:hover {
        transform: scale(calc(var(--scroll-scale, 1) * 1.02)) translateY(calc(var(--framer-y, 0px) - 6px)) !important;
      }
    `}</style>
  );
}
