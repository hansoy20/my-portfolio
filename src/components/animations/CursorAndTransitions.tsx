"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";
import Lenis from "lenis";

export default function CursorAndTransitions() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Smooth scroll
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Cursor movement and hover detection
  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest(".arrow-card") ||
        target.closest(".exp-card")
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest(".arrow-card") ||
        target.closest(".exp-card")
      ) {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    document.body.addEventListener("mouseover", handleMouseOver);
    document.body.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      document.body.removeEventListener("mouseover", handleMouseOver);
      document.body.removeEventListener("mouseout", handleMouseOut);
    };
  }, [isVisible]);

  // Springs for outer ring
  const springConfig = { damping: 20, stiffness: 200, mass: 0.2 };
  const cursorXSpring = useSpring(0, springConfig);
  const cursorYSpring = useSpring(0, springConfig);

  useEffect(() => {
    cursorXSpring.set(mousePosition.x - 16);
    cursorYSpring.set(mousePosition.y - 16);
  }, [mousePosition.x, mousePosition.y, cursorXSpring, cursorYSpring]);

  if (!isVisible) return null;

  return (
    <>
      <style>{`
        body, a, button, .arrow-card, .exp-card {
          cursor: none !important;
        }
      `}</style>
      
      {/* Inner dot */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0, left: 0,
          width: '8px', height: '8px',
          backgroundColor: 'white',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999999,
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
      />

      {/* Outer ring */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0, left: 0,
          width: '32px', height: '32px',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999998,
          border: isHovering ? "1px solid #EC4899" : "1px solid white",
          x: cursorXSpring,
          y: cursorYSpring,
          mixBlendMode: "difference",
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{ duration: 0.15 }}
      />
    </>
  );
}
