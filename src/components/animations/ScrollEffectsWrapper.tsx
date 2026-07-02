'use client';

import { useScroll, useMotionValueEvent } from 'framer-motion';
import { useEffect, useRef } from 'react';

export function ScrollEffectsWrapper() {
  const { scrollY } = useScroll();
  const elementsRef = useRef<{
    photo: Element | null;
    words: NodeListOf<Element> | null;
    particles: NodeListOf<Element> | null;
    cards: { el: HTMLElement; top: number; height: number }[];
  }>({ photo: null, words: null, particles: null, cards: [] });

  // 0. Cache DOM elements on mount and window resize
  useEffect(() => {
    const cacheElements = () => {
      elementsRef.current.photo = document.querySelector('.hero-image');
      elementsRef.current.words = document.querySelectorAll('.hero-word-img');
      elementsRef.current.particles = document.querySelectorAll('.wavo-particles-effect');
      
      const cards = document.querySelectorAll('.arrow-card');
      const cachedCards: { el: HTMLElement; top: number; height: number }[] = [];
      
      cards.forEach(c => {
        const el = c as HTMLElement;
        // Calculate absolute offset top relative to document
        const rect = el.getBoundingClientRect();
        const absoluteTop = rect.top + window.scrollY;
        cachedCards.push({ el, top: absoluteTop, height: rect.height });
      });
      
      elementsRef.current.cards = cachedCards;
    };

    cacheElements();
    
    // Recache on resize since offsets might change
    let resizeTimer: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(cacheElements, 250);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 1. Smooth Mouse Parallax
  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    let isActive = true;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = (e.clientX / window.innerWidth) * 2 - 1;
      targetY = (e.clientY / window.innerHeight) * 2 - 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const raf = () => {
      if (!isActive) return;
      
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      const { photo, words, particles } = elementsRef.current;
      
      // Apply variables directly to elements to prevent full page style recalculation
      if (photo) {
        (photo as HTMLElement).style.setProperty('--mouse-x-photo', `${mouseX * -15}px`);
        (photo as HTMLElement).style.setProperty('--mouse-y-photo', `${mouseY * -15}px`);
      }

      if (words) {
        words.forEach(w => {
          (w as HTMLElement).style.setProperty('--mouse-x-words', `${mouseX * 25}px`);
          (w as HTMLElement).style.setProperty('--mouse-y-words', `${mouseY * 25}px`);
        });
      }

      if (particles) {
        particles.forEach(p => {
          (p as HTMLElement).style.setProperty('--mouse-x-particles', `${mouseX * -40}px`);
          (p as HTMLElement).style.setProperty('--mouse-y-particles', `${mouseY * -40}px`);
        });
      }

      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      isActive = false;
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // 2. Continuous Scroll Parallax
  useMotionValueEvent(scrollY, 'change', (latest) => {
    const { photo, words, particles, cards } = elementsRef.current;
    
    // Inject scroll offsets to specific elements
    if (photo) (photo as HTMLElement).style.setProperty('--scroll-y-photo', `${latest * 0.15}px`);
    
    if (words) {
      words.forEach(w => (w as HTMLElement).style.setProperty('--scroll-y-words', `${latest * -0.1}px`));
    }
    
    if (particles) {
      particles.forEach(p => (p as HTMLElement).style.setProperty('--scroll-y-particles', `${latest * 0.3}px`));
    }

    // 2. Project Cards Magnifying Effect (using cached positions)
    const windowHeight = typeof window !== 'undefined' ? window.innerHeight : 1000;
    const windowCenter = windowHeight / 2;
    
    for (const card of cards) {
      if (!card) continue;
      const { el, top, height } = card;
      // Calculate where the card is relative to the viewport RIGHT NOW
      const currentTopRelativeToViewport = top - latest;
      
      // If way off screen, skip
      if (currentTopRelativeToViewport > windowHeight * 1.5 || currentTopRelativeToViewport + height < -windowHeight * 0.5) {
        continue;
      }

      const cardCenter = currentTopRelativeToViewport + height / 2;
      const distanceFromCenter = Math.abs(windowCenter - cardCenter) / (windowHeight * 0.8);
      
      let scale = 1.05 - (distanceFromCenter * 0.1);
      scale = Math.max(0.95, Math.min(1.05, scale));

      el.style.setProperty('--scroll-scale', scale.toString());
    }
  });

  return null;
}
