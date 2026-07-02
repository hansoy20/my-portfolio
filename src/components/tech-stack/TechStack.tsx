'use client';

import { motion } from 'framer-motion';
import { skillCategories } from '../../data/skills';
import { SkillCard } from './SkillCard';

export function TechStack() {

  return (
    <section id="tech-stack" style={{ width: '100%', position: 'relative', padding: '96px 0', background: 'transparent', overflow: 'hidden' }}>
      <div style={{ textAlign: 'center', marginBottom: '64px', padding: '0 24px' }}>
        <motion.h1 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'white', marginBottom: '16px' }}>
          Core Technologies
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} style={{ color: '#888', fontSize: '1.1rem' }}>
          The modern toolbelt I use to bring ideas to life.
        </motion.p>
      </div>
      <div style={{ position: 'relative', width: '100%', overflow: 'hidden', padding: '40px 0' }}>
        <motion.div style={{ display: 'flex', flexDirection: 'row', gap: '40px', alignItems: 'center', flexWrap: 'nowrap', width: 'max-content', paddingLeft: '24px' }} animate={{ x: [0, '-50%'] }} transition={{ repeat: Infinity, ease: 'linear', duration: 45 }}>
          {[...skillCategories.flatMap(c => c.skills), ...skillCategories.flatMap(c => c.skills)].map((skill, idx) => (
            <SkillCard key={`${skill.id}-${idx}`} skill={skill} />
          ))}
        </motion.div>
        <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, width: '192px', background: 'linear-gradient(to right, #0a0a0a, transparent)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: 0, bottom: 0, right: 0, width: '192px', background: 'linear-gradient(to left, #0a0a0a, transparent)', pointerEvents: 'none' }} />
      </div>

    </section>
  );
}