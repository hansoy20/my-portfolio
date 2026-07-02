'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Hero', href: '#hero' },
  { name: 'Projects', href: '#projects' },
  { name: 'Tech Stack', href: '#stack' },
  { name: 'About Me', href: '#about' },
  { name: 'Experience', href: '#experience' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        // Calculate the exact position minus a small offset (e.g., 80px) for perfect alignment
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 400);
  };

  return (
    <>
      <button
        onClick={toggleMenu}
        aria-label="Toggle Menu"
        style={{
          position: 'fixed',
          top: 'clamp(16px, 4vw, 32px)',
          left: 'clamp(16px, 4vw, 32px)',
          zIndex: 999999,
          width: '48px',
          height: '48px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '50%',
          cursor: 'pointer',
          background: hasScrolled && !isOpen ? 'rgba(0, 0, 0, 0.5)' : 'transparent',
          backdropFilter: hasScrolled && !isOpen ? 'blur(12px)' : 'none',
          border: hasScrolled && !isOpen ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
          transition: 'all 0.3s ease',
          padding: 0,
        }}
      >
        <motion.div
          animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
          style={{ width: '24px', height: '2px', backgroundColor: 'white', marginBottom: '4px', borderRadius: '2px', transformOrigin: 'center' }}
        />
        <motion.div
          animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
          style={{ width: '24px', height: '2px', backgroundColor: 'white', marginBottom: '4px', borderRadius: '2px', transformOrigin: 'center' }}
        />
        <motion.div
          animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
          style={{ width: '24px', height: '2px', backgroundColor: 'white', borderRadius: '2px', transformOrigin: 'center' }}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(16px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 999990,
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <nav style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '32px' }}>
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 + 0.1 }}
                  style={{
                    fontSize: 'clamp(28px, 6vw, 60px)',
                    fontWeight: 'bold',
                    color: 'white',
                    textDecoration: 'none',
                    fontFamily: 'sans-serif',
                    letterSpacing: '-0.02em',
                    transition: 'color 0.2s ease'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.color = '#EC4899'}
                  onMouseOut={(e) => e.currentTarget.style.color = 'white'}
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{ position: 'absolute', bottom: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            >
              <div style={{ width: '1px', height: '64px', background: 'linear-gradient(to bottom, rgba(255,255,255,0.3), transparent)' }} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
