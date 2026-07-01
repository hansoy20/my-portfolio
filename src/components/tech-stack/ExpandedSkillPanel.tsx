'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import type { Skill } from '../../data/skills';
import { X } from 'lucide-react';

interface ExpandedSkillPanelProps {
  skill: Skill;
  onClose: () => void;
}

export function ExpandedSkillPanel({ skill, onClose }: ExpandedSkillPanelProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  if (!mounted) return null;

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 pointer-events-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
      />
      
      <motion.div
        layoutId={`skill-card-${skill.id}`}
        className="relative w-full max-w-xl bg-[#0a0a0a] border border-white/10 rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col"
        style={{
          boxShadow: `0 25px 50px -12px ${skill.color}20, 0 0 0 1px rgba(255,255,255,0.1)`
        }}
      >
        {/* Header Glow */}
        <div 
          className="absolute top-0 left-0 right-0 h-40 opacity-20 pointer-events-none"
          style={{ background: `radial-gradient(ellipse at top, ${skill.color}, transparent 70%)` }}
        />

        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-white/50 hover:text-white transition-colors rounded-full hover:bg-white/10 z-20"
        >
          <X size={20} />
        </button>

        <div className="p-8 pb-6 relative z-10 flex items-center gap-6 border-b border-white/10 bg-white/[0.02]">
          <motion.div 
            layoutId={`icon-container-${skill.id}`}
            className="shrink-0 flex items-center justify-center"
            style={{ width: '80px', height: '80px', minWidth: '80px', minHeight: '80px' }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={skill.iconSlug.startsWith('http') ? skill.iconSlug : `https://cdn.simpleicons.org/${skill.iconSlug}/${skill.color.replace('#', '')}`}
              alt={skill.name}
              className="drop-shadow-2xl"
              style={{ width: '100%', height: '100%', objectFit: 'contain', maxWidth: '80px', maxHeight: '80px' }}
            />
          </motion.div>
          
          <div>
            <motion.h2 
              layoutId={`title-${skill.id}`}
              className="text-2xl sm:text-3xl font-bold text-white mb-2"
              style={{ fontFamily: 'var(--e-global-typography-5b3435e-font-family), sans-serif' }}
            >
              {skill.name}
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-2"
            >
              <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-white/5 text-white/80 border border-white/10" style={{ color: skill.color }}>
                {skill.proficiency}
              </span>
              <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-white/5 text-white/80 border border-white/10">
                {skill.yearsExperience} {skill.yearsExperience === 1 ? 'Year' : 'Years'}
              </span>
            </motion.div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="p-8 pt-6 space-y-8 overflow-y-auto max-h-[60vh] custom-scrollbar bg-black/20"
        >
          <div>
            <h4 className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-3">Description</h4>
            <p className="text-white/80 leading-relaxed text-sm sm:text-base">
              {skill.description}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-3">Primary Usage</h4>
            <p className="text-white/80 leading-relaxed text-sm sm:text-base">
              {skill.usage}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-4">Key Projects</h4>
            <div className="flex flex-wrap gap-2">
              {skill.projects.map((project, idx) => (
                <span 
                  key={idx}
                  className="text-sm px-3 py-1.5 bg-black/40 border border-white/10 rounded-lg text-white/90 shadow-sm"
                >
                  {project}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>,
    document.body
  );
}
