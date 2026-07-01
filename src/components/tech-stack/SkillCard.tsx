'use client';

import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import type { Skill } from '../../data/skills';
import { useState } from 'react';

interface SkillCardProps {
  skill: Skill;
  _delay?: number;
}

export function SkillCard({ skill, _delay = 0 }: SkillCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      layoutId={`skill-card-${skill.id}`}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
      }}
      whileHover={{ y: -6 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex flex-col items-center justify-center w-52 h-52 sm:w-56 sm:h-56 shrink-0 rounded-[2rem] bg-[#11131a] border border-white/5 cursor-default overflow-hidden transition-all duration-300 hover:bg-[#1a1d24] hover:border-white/10"
      style={{ boxShadow: isHovered ? `0 20px 40px -15px ${skill.color}40` : '0 0 0 transparent' }}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 transition duration-300 group-hover:opacity-100"
        style={{ background: useMotionTemplate`radial-gradient(100px circle at ${mouseX}px ${mouseY}px, ${skill.color}20, transparent 80%)` }}
      />
      <motion.div 
        layoutId={`icon-container-${skill.id}`}
        className="relative z-10 mb-4 flex items-center justify-center"
        style={{ width: '100px', height: '100px', minWidth: '100px', minHeight: '100px' }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={skill.iconSlug.startsWith('http') ? skill.iconSlug : `https://cdn.simpleicons.org/${skill.iconSlug}/${skill.color.replace('#', '')}`}
          alt={skill.name}
          loading="lazy"
          className={`drop-shadow-md ${skill.color.toUpperCase() === '#FFFFFF' || skill.color === '#000000' ? '' : 'un-invert'}`}
          style={{ width: '100%', height: '100%', objectFit: 'contain', maxWidth: '100px', maxHeight: '100px' }}
        />
      </motion.div>
    </motion.div>
  );
}