'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

export function AboutMe() {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.15 });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  // Different parallax speeds for the cards
  const yIdentity = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const yStack = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const yTerm = useTransform(scrollYProgress, [0, 1], [0, -20]);
  const ySys = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const yCog = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const yCollab = useTransform(scrollYProgress, [0, 1], [0, -90]);

  const [termState, setTermState] = useState({
    text1: '',
    show2: false,
    show3: false,
    show4: false,
    show5: false,
  });



  useEffect(() => {
    let isCancelled = false;

    const runSequence = async () => {
      while (!isCancelled) {
        setTermState({ text1: '', show2: false, show3: false, show4: false, show5: false });
        
        // Type out string 1: "> git init portfolio"
        const str1 = "> git init portfolio";
        for (let i = 1; i <= str1.length; i++) {
          if (isCancelled) return;
          setTermState(s => ({ ...s, text1: str1.slice(0, i) }));
          await new Promise(r => setTimeout(r, 40));
        }
        
        if (isCancelled) return;
        await new Promise(r => setTimeout(r, 400));
        
        if (isCancelled) return;
        setTermState(s => ({ ...s, show2: true }));
        await new Promise(r => setTimeout(r, 300));
        
        if (isCancelled) return;
        setTermState(s => ({ ...s, show3: true }));
        await new Promise(r => setTimeout(r, 250));
        
        if (isCancelled) return;
        setTermState(s => ({ ...s, show4: true }));
        await new Promise(r => setTimeout(r, 250));
        
        if (isCancelled) return;
        setTermState(s => ({ ...s, show5: true }));
        
        // Wait until 12s mark (total loop approx 12s, wait ~8.5s)
        await new Promise(r => setTimeout(r, 8500));
        
        if (isCancelled) return;
        // Blank reset
        setTermState({ text1: '', show2: false, show3: false, show4: false, show5: false });
        await new Promise(r => setTimeout(r, 1500));
      }
    };

    void runSequence();

    return () => { isCancelled = true; };
  }, []);

  return (
    <section id="about" ref={containerRef} className={`about-section-v2 about-section-wrapper ${isInView ? 'is-visible' : ''}`} style={{ padding: '80px 0', overflow: 'hidden' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=JetBrains+Mono:wght@400;700&family=Space+Grotesk:wght@700&display=swap');

        .about-section-v2 {
          width: 100%;
          max-width: 1200px;
          margin: -80px auto 0 auto;
          padding: 16px;
          color: #E4E4E7;
          font-family: 'Inter', sans-serif;
        }

        .about-section-v2 h1, .about-section-v2 h2, .about-section-v2 h3, .about-section-v2 h4 {
          font-family: 'Space Grotesk', sans-serif;
          margin: 0;
          font-weight: 700;
          color: #FFFFFF;
        }

        .about-section-v2 p {
          margin: 0;
          line-height: 1.6;
          color: #A1A1AA;
        }

        .accent-mint {
          color: #4DFFB4;
          position: relative;
          display: inline-block;
        }

        /* Accent shimmer effect on reveal */
        @media (prefers-reduced-motion: no-preference) {
          .accent-mint::after {
            content: '';
            position: absolute;
            top: 0; left: -100%; width: 100%; height: 100%;
            background: linear-gradient(
              120deg,
              transparent 0%,
              rgba(77, 255, 180, 0.4) 40%,
              rgba(255, 255, 255, 0.6) 50%,
              rgba(77, 255, 180, 0.4) 60%,
              transparent 100%
            );
            pointer-events: none;
            opacity: 0;
          }
          .is-visible .accent-mint::after {
            animation: accent-shimmer 1.2s 1s ease-out forwards;
          }
          @keyframes accent-shimmer {
            0%   { left: -100%; opacity: 1; }
            100% { left: 100%; opacity: 0; }
          }
        }

        .dev-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
          grid-auto-rows: auto;
        }

        @media (min-width: 768px) {
          .dev-grid {
            grid-template-columns: repeat(6, 1fr);
            grid-auto-rows: minmax(180px, auto);
          }
        }
        
        @media (max-width: 767px) {
          .about-section-v2 {
            margin-top: -40px;
          }
        }

        .dev-card {
          background-color: #0A0A0A;
          border: 1px solid rgba(255,255,255,0.10);
          padding: 28px;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
          box-shadow: none;
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
        }

        @media (hover: hover) {
          .dev-card:hover {
            transform: translateY(-4px);
            border-color: rgba(255,255,255,0.15);
            box-shadow: 0 4px 24px rgba(77, 255, 180, 0.06), 0 1px 6px rgba(255,255,255,0.04);
          }
        }

        /* Card Entrance Animations */
        @media (prefers-reduced-motion: no-preference) {
          .animate-entrance {
            opacity: 0;
            transform: translateY(12px);
          }
          .is-visible.animate-entrance {
            animation: card-enter 800ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
          .delay-0 { animation-delay: 0ms; }
          .delay-1 { animation-delay: 120ms; }
          .delay-2 { animation-delay: 240ms; }
          .delay-3 { animation-delay: 360ms; }
          .delay-4 { animation-delay: 480ms; }
          
          @keyframes card-enter {
            to { opacity: 1; transform: translateY(0); }
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .waterfall-bg { opacity: 0 !important; }
        }

        /* --- Grid Placements --- */
        .dev-card-identity { grid-column: span 1; padding-top: 48px; }
        @media (min-width: 768px) { .dev-card-identity { grid-column: span 2; grid-row: span 2; justify-content: flex-end; } }
        
        .dev-card-stack { grid-column: span 1; }
        @media (min-width: 768px) { .dev-card-stack { grid-column: span 2; } }
        
        .dev-card-term { grid-column: span 1; }
        @media (min-width: 768px) { .dev-card-term { grid-column: span 2; } }
        
        .dev-card-sys { grid-column: span 1; }
        @media (min-width: 768px) { .dev-card-sys { grid-column: span 4; } }
        
        .dev-card-cog { grid-column: span 1; }
        @media (min-width: 768px) { .dev-card-cog { grid-column: span 3; } }
        
        .dev-card-collab { grid-column: span 1; }
        @media (min-width: 768px) { .dev-card-collab { grid-column: span 3; } }

        /* --- Identity Card --- */
        .identity-headline {
          font-size: 2rem;
          line-height: 1.1;
          letter-spacing: -0.03em;
          margin-bottom: 16px !important;
          z-index: 10;
          position: relative;
        }
        @media (min-width: 768px) { .identity-headline { font-size: 3rem; } }

        /* Identity headline clip-path reveal */
        @media (prefers-reduced-motion: no-preference) {
          .identity-headline {
            clip-path: inset(0 100% 0 0);
          }
          .is-visible .identity-headline {
            animation: clip-reveal 0.9s 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
          @keyframes clip-reveal {
            to { clip-path: inset(0 0% 0 0); }
          }
        }
        
        .identity-subtext {
          font-size: 1.125rem;
          z-index: 10;
          position: relative;
        }

        .identity-radial-overlay {
          position: absolute;
          bottom: 0; left: 0; width: 100%; height: 100%;
          background: radial-gradient(circle at bottom left, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.6) 50%, transparent 100%);
          z-index: 5;
          pointer-events: none;
        }

        .eyebrow {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.75rem;
          color: #52525B;
          margin-bottom: 4px;
        }
        
        /* Ambient Waterfall Background */
        .waterfall-bg {
          position: absolute;
          top: -100%;
          left: 0;
          width: 100%;
          height: 300%;
          opacity: 0.18;
          pointer-events: none;
          z-index: 0;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          color: #4DFFB4;
          line-height: 1.2;
          overflow: hidden;
        }
        .waterfall-col {
          display: flex;
          flex-direction: column;
        }
        .wf-anim-1 { animation: wf-scroll 40s linear infinite; }
        .wf-anim-2 { animation: wf-scroll 55s linear infinite; }
        .wf-anim-3 { animation: wf-scroll 35s linear infinite; }
        .wf-anim-4 { animation: wf-scroll 45s linear infinite; }
        
        @keyframes wf-scroll {
          0% { transform: translateY(0); }
          100% { transform: translateY(-33.33%); }
        }

        /* --- Stack Card --- */
        .dev-card-stack h3 { margin-bottom: 24px; font-size: 1.25rem; }
        .stack-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: auto;
        }
        .stack-tag {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.875rem;
          color: #A1A1AA;
          background: #111111;
          border: 1px solid rgba(255,255,255,0.20);
          padding: 6px 12px;
          border-radius: 2px;
          transition: border-color 150ms ease, color 150ms ease, opacity 0.4s ease, transform 0.4s ease;
        }
        .dev-card-stack:hover .stack-tag {
          border-color: #4DFFB4;
          color: #FFFFFF;
        }

        /* Stack tag stagger animation */
        @media (prefers-reduced-motion: no-preference) {
          .stack-tag {
            opacity: 0;
            transform: translateY(8px);
          }
          .is-visible .stack-tag {
            animation: tag-enter 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
          .is-visible .stack-tag:nth-child(1) { animation-delay: 0.4s; }
          .is-visible .stack-tag:nth-child(2) { animation-delay: 0.48s; }
          .is-visible .stack-tag:nth-child(3) { animation-delay: 0.56s; }
          .is-visible .stack-tag:nth-child(4) { animation-delay: 0.64s; }
          .is-visible .stack-tag:nth-child(5) { animation-delay: 0.72s; }
          .is-visible .stack-tag:nth-child(6) { animation-delay: 0.80s; }
          .is-visible .stack-tag:nth-child(7) { animation-delay: 0.88s; }
          .is-visible .stack-tag:nth-child(8) { animation-delay: 0.96s; }
          @keyframes tag-enter {
            to { opacity: 1; transform: translateY(0); }
          }
        }

        /* --- Terminal Card --- */
        .dev-card-term {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.85rem;
          justify-content: center;
          gap: 10px;
          background-color: #050505;
        }
        .term-cmd { color: #52525B; min-height: 1.2em; }
        .term-out { color: #A1A1AA; opacity: 0; transition: opacity 0.3s; min-height: 1.2em; }
        .term-out.visible { opacity: 1; }
        .term-succ { color: #4DFFB4; opacity: 0; transition: opacity 0.3s; min-height: 1.2em; }
        .term-succ.visible { opacity: 1; }

        /* --- Systems Card --- */
        .sys-content {
          display: flex;
          flex-direction: column;
          gap: 12px;
          z-index: 10;
          height: 100%;
          justify-content: center;
          text-align: left;
        }
        .dev-card-sys h3 { font-size: 1.5rem; margin-bottom: 12px; }
        .dev-card-sys p { font-size: 1.125rem; max-width: 480px; }
        
        /* Hardware Card Eyebrow Hover */
        .hardware-eyebrow::after {
          content: '';
          opacity: 0;
        }
        .dev-card-sys:hover .hardware-eyebrow::after {
          content: '|';
          animation: blink 530ms steps(2, start) infinite;
          opacity: 1;
        }
        @keyframes blink {
          to { visibility: hidden; }
        }

        /* --- Small Cards --- */
        .dev-card-cog, .dev-card-collab {
          min-height: 220px;
        }
        .dev-card-cog h3, .dev-card-collab h3 {
          font-size: 1.25rem;
          margin-bottom: 12px;
        }
        .dev-card-cog p, .dev-card-collab p {
          font-size: 1rem;
        }

        /* Faint Green Left Border Hover */
        .dev-card-bottom::before {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 2px;
          height: 100%;
          background-color: rgba(77, 255, 180, 0.6);
          transform: translateY(-100%);
          transition: transform 200ms ease;
        }
        .dev-card-bottom:hover::before {
          transform: translateY(0);
        }
        
        /* Header Fix */
        .about-section-header {
          margin-bottom: 32px;
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .about-section-header h2 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 2rem;
          margin: 0;
          color: #FFFFFF;
        }
        @media (min-width: 768px) {
          .about-section-header h2 {
            font-size: 2.5rem;
          }
        }
        .about-section-header .line {
          flex-grow: 1;
          height: 1px;
          background-color: #27272A;
        }

        /* Section header entrance animations */
        @media (prefers-reduced-motion: no-preference) {
          .about-section-header h2 {
            opacity: 0;
            transform: translateX(-30px);
            transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
          }
          .is-visible .about-section-header h2,
          .about-section-v2.is-visible .about-section-header h2 {
            opacity: 1;
            transform: translateX(0);
          }
          .about-section-header .line {
            transform: scaleX(0);
            transform-origin: left;
            transition: transform 0.8s 0.2s cubic-bezier(0.16, 1, 0.3, 1);
          }
          .is-visible .about-section-header .line,
          .about-section-v2.is-visible .about-section-header .line {
            transform: scaleX(1);
          }
        }
      `}</style>
      
      <motion.div 
        className="about-section-header"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2>About Me</h2>
        <div className="line"></div>
      </motion.div>

      <motion.div 
        className="dev-grid"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } }
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {/* Large Left Card - Main Identity */}
        <motion.div 
          className="dev-card dev-card-identity"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
          }}
          style={{ y: yIdentity }}
        >
          <div className="waterfall-bg">
            <div className="waterfall-col wf-anim-1">
              {Array(40).fill('01101000\n01100101\n01101100\nconst x=\nvoid(0);\nSYS_ERR\n10010101\n').join('')}
            </div>
            <div className="waterfall-col wf-anim-2">
              {Array(40).fill('sys.init\n0x00F8A\n[OK]\n01010101\nlet buf=\nmem_alloc\n0xFA80\n').join('')}
            </div>
            <div className="waterfall-col wf-anim-3">
              {Array(40).fill('10101111\nTCP_SYN\n0x7F001\nreturn;\n10101010\nSIGKILL\n0x0000\n').join('')}
            </div>
            <div className="waterfall-col wf-anim-4">
              {Array(40).fill('0x8F9B\nimport{\nasync()\n01110011\nawait\n11100010\n[WARN]\n').join('')}
            </div>
          </div>
          <div className="identity-radial-overlay"></div>
          
          <h2 className="identity-headline">I build things that <motion.span className="accent-mint" animate={{ scale: [1, 1.05, 1] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}>work.</motion.span></h2>
          <p className="identity-subtext">
            I am a fourth-year Computer Science student at USTP-CDO. I focus on developing robust applications, analyzing system structures, and building optimized solutions.
          </p>
        </motion.div>

        {/* Top Center - Stack */}
        <motion.div 
          className="dev-card dev-card-stack"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
          }}
          style={{ y: yStack }}
        >
          <h3>Tools I reach for</h3>
          <div className="stack-tags">
            <span className="stack-tag">Python</span>
            <span className="stack-tag">C</span>
            <span className="stack-tag">Java</span>
            <span className="stack-tag">Git</span>
            <span className="stack-tag">JavaScript</span>
            <span className="stack-tag">React</span>
            <span className="stack-tag">Linux</span>
            <span className="stack-tag">Bash</span>
          </div>
        </motion.div>

        {/* Top Right - Terminal */}
        <motion.div 
          className="dev-card dev-card-term"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
          }}
          style={{ y: yTerm }}
        >
          <div className="term-cmd">{termState.text1 || '\u00A0'}</div>
          {termState.show2 ? <div className="term-out visible">Initializing...</div> : <div className="term-out">Initializing...</div>}
          {termState.show3 ? <div className="term-succ visible">✓ Logic: compiled</div> : <div className="term-succ">✓ Logic: compiled</div>}
          {termState.show4 ? <div className="term-succ visible">✓ Hardwork: committed</div> : <div className="term-succ">✓ Hardwork: committed</div>}
          {termState.show5 ? <div className="term-cmd visible">$ status: shipping</div> : <div className="term-cmd"> </div>}
        </motion.div>

        {/* Middle - Systems */}
        <motion.div 
          className="dev-card dev-card-sys"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
          }}
          style={{ y: ySys }}
        >
          <div className="sys-content">
            <div>
              <div className="eyebrow hardware-eyebrow">&gt;_ /sys/hardware</div>
              <h3>Hardware-first thinking</h3>
              <p>I build computers and study how they operate at the hardware level. This technical foundation helps me understand the physical infrastructure behind the software I develop.</p>
            </div>
          </div>
        </motion.div>

        {/* Bottom Left - Cognition */}
        <motion.div 
          className="dev-card dev-card-cog dev-card-bottom"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
          }}
          style={{ y: yCog }}
        >
          <h3>Pattern recognition</h3>
          <p>My background in strategic puzzles and systems design has strengthened my analytical abilities. I continuously refine my problem-solving methods to tackle complex challenges.</p>
        </motion.div>

        {/* Bottom Right - Collaboration */}
        <motion.div 
          className="dev-card dev-card-collab dev-card-bottom"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
          }}
          style={{ y: yCollab }}
        >
          <h3>Ships with teams</h3>
          <p>I bring a strong collaborative mindset to my work. I communicate clearly and adapt to team dynamics to ensure we deliver successful projects.</p>
        </motion.div>

      </motion.div>
    </section>
  );
}
